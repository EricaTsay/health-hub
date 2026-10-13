# CLAUDE.md

## 專案

健康智慧中樞：壽險公司內部的健康傳播內容平台，單一檔案 `index.html`（無建置流程），
三大功能——**收集**（健康議題趨勢分析）、**轉譯**（產出健康文章 / 健康圖卡）、**審閱**（法遵與正確性檢核）。
另有 `健康智慧中樞_Prompt規格書.md`（四支 System Prompt 規格）、`參考範例/`（圖文樣張）、
`assets/illustrations/`（插圖素材庫）與 `api/`（AI 生圖預留後端）。

- 前端：純 HTML/CSS/JS，CDN 載入 Noto Sans TC、Tabler Icons、html2canvas、jsPDF、docx。
- App 介面 token 在 `index.html` 的 `:root`；健康圖卡是獨立子系統，token scope 在 `.infocard-canvas`（深綠系 + 暖白底）。
- 圖卡（`.infocard-canvas`）是 **1080×1080 固定方形**、Noto Sans TC、可用 html2canvas 匯出成 PNG 的可分享圖文。
  內容有長度預算（見 DESIGN.md §8），超出會被 `overflow:hidden` 裁掉。
- **主視覺＝標題右側 256×256 正方插圖 slot**（`.ic-hero-illo`），素材庫優先、AI 生成預留（見 DESIGN.md §7.6–§7.8）。
  - `assets/illustrations/`：unDraw SVG（重上深綠 `#17603f`）+ `manifest.json`。前端 `resolveIllustration()` 依
    Claude 回傳的 `illustration.{topic,audience,scene}` + `illustration_category` 對 manifest 算分挑圖。
  - `api/generate-illustration.js`：AI 生成插圖的後端代理（未部署；金鑰只在後端，前端不存）。`index_v5.html` 的 `ILLO_API_ENDPOINT` 為空時，使用者切到「AI 生成」走示範插圖 `assets/illustrations/ai-demo/`（DESIGN.md §7.12）。
  - **不得用基本幾何 / emoji / 單一器官 icon 當主視覺**；找不到素材時依 DESIGN.md §7.11 fallback 鏈：同分類通用插圖 → 多圖示組合 `renderFallbackVisual()`，成品不出現大面積待補框。
  - v5 起圖卡 renderer 是 Infographic Layout System（`renderInfocard()` → knowledge／data／action／comparison，見 DESIGN.md §7.11）。
  - 舊的手刻幾何插畫庫 `ILLUSTRATIONS` 已移除。

## 設計

**任何介面 / 樣式 / 圖卡的改動，先讀 [DESIGN.md](DESIGN.md) 並遵守裡面的 token、尺標與元件規範。**
不要臨場自由配色或自訂間距；缺規則就先補進 DESIGN.md 再改。

## 本機預覽

```bash
npx -y http-server -p 8080 -c-1
```

圖卡改動請在 `openInfocardPreview()` 打開的 1080px 全尺寸預覽下檢查，不要只看轉譯頁的 compact 縮圖。
