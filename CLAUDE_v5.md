# CLAUDE_v5.md｜健康智慧中樞（index_v5.html 專用說明）

> 只描述 **`index_v5.html`**。v4 已上線 GitHub 作為對照（說明見 `CLAUDE_v4.md`，作品主線、步驟條、v2.0 findings 的機制 v5 全部沿用）。
> 介面改動先讀 [DESIGN.md](DESIGN.md)：v5 色票 §2.1 註記、圖卡彈性版面 §7.9、v5 元件 §12。
> Prompt 以 `健康智慧中樞_Prompt規格書_v2.0_草稿.md` 的 **v2.1** 為準（`PROMPT_VERSION = 'v2.1 (2026-10-12)'`）；改規格書後用同一支同步腳本把四支 prompt 逐字搬進 v5。

## v5 相對 v4 的改動

1. **版型與視覺**（參考 `health_hub_GPT_demo`）：深色側欄、首頁主視覺＋「把 AI 放在邊界內使用」說明、作品卡附進度條、工作區「左內容＋右側欄（依據＋NEXT 卡）」、作品標頭 sticky、助理改右下浮動鈕。HTML 骨架整段重寫；CSS 在 `<style>` 末段「v5」區塊以下。
2. **圖卡版面隨議題改變**：`buildInfocardCanvasHTML()` 依格式寬窄自動排版，支援 `layout`（editorial／data-focus／illustrated）。7 個示範議題各有不同組合（`DEMO_INFOCARD_OVERRIDES` 後方的 v5 IIFE）。
3. **送預審前，你可以先看**：步驟 2 右側欄 `asideTranslateHTML()` → `draftFigures(data)` 列出草稿裡的統計數字與出處／年份，缺的標琥珀色並計數（與步驟 3 預審的查證項目一致）。這是 HITL 鏈「AI 提示→判斷依據」的部分，決策與紀錄在步驟 3。版面／語氣理由（`ai_rationale.layout_reason`）改由對話框回覆說明。
4. **對話式調整**：取代語氣 chips 與固定調整按鈕。`sendAdjust(text)`：
   - 示範模式：`matchAdjustIntent()` 把說法對應到 `demoAdjustCard()`／`demoAdjustArticle()`（插畫風、數字放大、精簡、換標題、口語、改回標準…）。
   - API 模式：把草稿 JSON＋調整需求丟給轉譯 prompt，讀回 `ai_rationale.changes`。
   - 對話紀錄存 `currentWork.chat`。
5. **人工決策（human-in-the-loop）**：每則意見三選一 `DECISIONS`（accept／reject 必填原因／expert），存 `currentWork.notes[flagged_text] = {d, reason, at}`。
   - `isDecided()` 判斷：不接受但沒填原因，不算已決定。
   - 「套用已接受的建議」`applyFindingsToDraft()` 只改 accept 項目（用 `suggested_revision`），本輪意見與決定存進 `currentWork.rounds`，再自動重新預審。
6. **9 類總覽**：`categoryOverviewHTML()`，無意見類別標「未發現待確認項目」。
7. **Word 檢核表**改為橫式，內容依序為：
   - 作品資訊與決策摘要
   - 9 類總覽
   - 本輪意見與人工決定（含原因、時間）
   - 先前輪次紀錄
   - 最終送審內容
   - 審閱限制
8. 步驟 1 洞察會帶入轉譯 user prompt（API 模式）；作品存 `localStorage['hihub_works_v5']`。

## 檢查清單

1. 示範黃金路徑：首頁「代謝症候群」→ 右側選健康圖卡 → 產出草稿 → 對 AI 說「太死板了，改成插畫風」→ 送交預審（5 項）。
   - 決定方式：接受 3 項、不接受 1 項（需填原因）、交專業 1 項。
   - 套用已接受的建議 → 第 2 輪剩 2 項，決定會延續 → 匯出，下載檢核表。
2. 7 個議題圖卡在 1080 全尺寸 `scrollHeight` 不超出（DESIGN.md §7.9）。
3. Console 無錯；內嵌 script 過 `node --check`；375px 無水平溢出。

已知限制：其餘 6 議題的預審範例、附件預審範例仍未建立（同 v4）；文章類型的對話調整只有代謝症候群有完整語氣版本。
