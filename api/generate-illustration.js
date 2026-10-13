/**
 * /api/generate-illustration  —  AI 生成插圖的後端代理（參考實作，尚未串接）
 * ---------------------------------------------------------------------------
 * 健康圖卡的插圖子系統有兩個模式（見前端 index.html 的 ILLUSTRATION_MODE）：
 *   - 'asset-library'（預設，現階段唯一實作）：從 /assets/illustrations/ 依標籤挑現成 SVG。
 *   - 'ai-generation'（預留）：呼叫本端點，由後端代打外部影像生成服務後回傳圖檔 URL。
 *
 * 設計原則：
 *   1. 前端不得存放任何影像生成 / LLM 金鑰。金鑰只在後端環境變數。
 *   2. 前端只送 illustration 描述物件；本端點負責組 prompt、呼叫、存檔、回 URL。
 *   3. 失敗時回非 2xx，前端依序退回素材庫 → 同分類通用圖 → 圖示組合（DESIGN.md §7.11），不影響圖卡其他內容。
 *   4. 前端在 index_v5.html 的 ILLO_API_ENDPOINT 填入本端點網址後才會呼叫；未填時 AI 生成走示範插圖。
 *
 * 部署：Vercel / Netlify Functions / Cloudflare Workers 皆可（下面是 Vercel/Node 風格）。
 * 需要的環境變數：
 *   IMAGE_API_BASE   例如 https://api.openai.com/v1
 *   IMAGE_API_KEY    影像生成服務金鑰（僅後端）
 *   IMAGE_API_MODEL  例如 gpt-image-1
 *
 * 請求：POST application/json
 *   { illustration: { topic, audience, scene, emotion, style, colorPalette, imagePrompt },
 *     layout_type: "knowledge|data|action|comparison", size: [寬, 高]（該版型插圖區，用來決定比例） }
 * 回應：200 { imageUrl: "https://.../xxxx.png" }  或  4xx/5xx { error: "..." }
 */

const BRAND_STYLE_SUFFIX =
  'flat vector illustration, single accent colour deep green #17603f, ' +
  'transparent background, full figure with safe margins, friendly and calm, ' +
  'no text, no logos, editorial health-communication style';

function buildPrompt(illo) {
  if (!illo || typeof illo !== 'object') return null;
  if (illo.imagePrompt && illo.imagePrompt.trim()) {
    return `${illo.imagePrompt.trim()}. ${BRAND_STYLE_SUFFIX}`;
  }
  const bits = [illo.scene, illo.audience, illo.emotion, illo.style]
    .filter(Boolean)
    .join(', ');
  if (!bits) return null;
  return `${bits}. ${BRAND_STYLE_SUFFIX}`;
}

// 依版型插圖區比例挑供應商支援的尺寸（橫幅偏寬時用 1536x1024，其餘用正方）
function pickSize(size) {
  if (!Array.isArray(size) || !size[0] || !size[1]) return '1024x1024';
  return size[0] / size[1] > 1.15 ? '1536x1024' : '1024x1024';
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: 'Method not allowed' }));
  }

  const key = process.env.IMAGE_API_KEY;
  const base = process.env.IMAGE_API_BASE;
  const model = process.env.IMAGE_API_MODEL || 'gpt-image-1';
  if (!key || !base) {
    res.statusCode = 501;
    return res.end(
      JSON.stringify({
        error:
          'AI 生成模式尚未設定。請在後端環境變數提供 IMAGE_API_BASE / IMAGE_API_KEY / IMAGE_API_MODEL，或將前端 ILLUSTRATION_MODE 維持在 asset-library。',
      })
    );
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  const prompt = buildPrompt(body && body.illustration);
  if (!prompt) {
    res.statusCode = 400;
    return res.end(JSON.stringify({ error: '缺少 illustration.scene 或 illustration.imagePrompt' }));
  }

  try {
    // 範例：OpenAI Images API 相容格式。換其他供應商時改這一段即可。
    const upstream = await fetch(`${base.replace(/\/$/, '')}/images/generations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model,
        prompt,
        size: pickSize(body && body.size),
        background: 'transparent',
        n: 1,
      }),
    });
    const data = await upstream.json();
    if (!upstream.ok) {
      res.statusCode = upstream.status;
      return res.end(JSON.stringify({ error: data.error?.message || '影像生成服務錯誤' }));
    }
    // 供應商可能回 URL 或 base64；這裡優先回 URL，其次組 data URI。
    const first = (data.data && data.data[0]) || {};
    const imageUrl = first.url || (first.b64_json ? `data:image/png;base64,${first.b64_json}` : null);
    if (!imageUrl) {
      res.statusCode = 502;
      return res.end(JSON.stringify({ error: '影像生成服務未回傳圖檔' }));
    }
    // 正式環境建議：把圖存到自家物件儲存（S3 / R2 / Blob）再回永久 URL，
    // 避免供應商的暫時性 URL 過期，也方便快取與稽核。
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ imageUrl }));
  } catch (e) {
    res.statusCode = 500;
    return res.end(JSON.stringify({ error: String(e && e.message || e) }));
  }
};
