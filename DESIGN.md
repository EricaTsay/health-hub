# DESIGN.md｜健康智慧中樞 設計系統

> 這份文件是「設計契約」。**任何時候要新增或修改介面（HTML/CSS、圖卡、匯出版型），
> 先讀這份文件，照裡面的 token、尺標與元件規範做，不要臨場自由發揮。**
> 缺規則就先在這裡補一條，再改程式。

專案是單檔 `index.html`（收集／轉譯／審閱三大功能，無建置流程）。
App 介面的變數在 `index.html` 的 `:root`；**健康圖卡**是獨立的子系統，變數 scope 在 `.infocard-canvas`。

參考稿：`claude design/健康圖文樣式.dc.html`（本設計系統圖卡部分的視覺依據）。

---

## 1. 設計定調

**編輯風健康資訊圖（editorial health infographic）。**
沉穩、可信、好讀、可分享。像雜誌或衛教專欄的內頁，不是廣告 banner，也不是醫院公告。
因為是壽險公司的健康傳播內容，**「可信」比「吸睛」重要**：畫面乾淨 > 畫面熱鬧。

- **App 介面**：維持既有的亮綠 `#0EA968` 系 + 白底（見 §2.1），不動。
- **健康圖卡**：走深綠系 + 暖白底（見 §2.2），固定 **1080×1080 方形**，可 html2canvas 匯出 PNG。

---

## 2. 色彩

### 2.1 App 介面 Token（`:root`，勿另外調色）

> **v5（`index_v5.html`）改用參考稿 `health_hub_GPT_demo` 的色票**，在 `<style>` 末段「v5：視覺與版型」覆寫 `:root`：
> 底 `--bg #f5f7f3`、文字 `--text #17211c`／`--text2 #66736d`／`--text3 #8b9892`、線 `--border #e5ebe6`、
> 主色 `--green #0a8f5b`／`--green-bg #e8f8f0`、深色側欄 `--nav #10231a`（`--nav2 #153024`、`--nav3 #1d3e2f`）、
> 模組色 `--blue #3f6ee8`、`--purple #7b62dd`、`--amber #bd7a1e`、`--red #ce4d4d`（各附 `-bg`）；圓角 `--r 20px`／`--r-sm 14px`；
> 字體 `Inter, "Noto Sans TC"`。下表為 v3／v4 的值，僅供對照。v5 元件規範見 §12。

| 角色 | 變數 | 值 |
|---|---|---|
| 主色 | `--green` / `--green-dark` / `--green-bg` | `#0EA968` / `#087A4C` / `#E6F9F1` |
| 輔色 | `--blue*` / `--teal*` | 見 `:root` |
| 情緒色（僅警示） | `--red*` `--amber*` `--purple*` | 見 `:root` |
| 文字 / 底 / 邊線 | `--text*` `--surface*` `--border*` | 見 `:root` |

- App 內：主要按鈕 `--green` 底白字 700；次要白底 + `--border-md`；卡片 `--surface` + `--border` + `--shadow-sm`。
- chip / tag：pill、`--*-bg` 底 + `--*-dark` 字、12px、700。
- 分段選擇器（segmented，如審閱頁「文件類型」）：一排 pill 按鈕，未選 `--surface` 底 + `--border-md` + `--text2`；選中 `--{accent}-bg` 底 + `--{accent}` 邊 + `--{accent}-dark` 字（accent 取該工作檯色，審閱為 `--amber`）；12.5px、700、`padding:7px 15px`、`border-radius:20px`。前綴一個 `--text3` 的 12px 標籤字。樣式類 `.doctype-*`。
- 檔案附加（如審閱頁「附加檔案」）：觸發鈕為虛線框 `1px dashed var(--border-md)` + `--r-sm`、hover 轉工作檯 accent；`<input type=file>` 隱藏、由 `<label>` 包住。已選檔案為一排 chip（`.attach-item`）：`--surface2` 底 + `--border-md` + `--r-sm`，圖片顯 26×26 縮圖、PDF 顯 `ti-file-type-pdf` 圖示（accent 色），後接檔名（600、省略號截斷）＋灰階大小＋`✕` 移除鈕。說明文字 `--text3` 11.5px 獨立成行。

### 2.2 健康圖卡 Token（scope 在 `.infocard-canvas`）

| 變數 | 值 | 用途 |
|---|---|---|
| `--icg-deep` | `#17603f` | header、主標、CTA、footer 品牌字 |
| `--icg` | `#2e7d51` | 區段膠囊、橫線、端點、強調底線、編號圈 |
| `--icg-mid` / `--icg-soft` | `#4f9e6e` / `#7cb98f` | 次要點綴、meta 短線 |
| 卡底 | `#fbfaf5` | 暖白，不是純白 |
| `--ic-ink` / `-soft` / `-mute` | `#1c2620` / `#47584c` / `#6d8460` | 內文 / 次要 / meta |
| `--ic-tint-a` / `-b` | `#f1f2ee` / `#eaf3e2` | label 列交替底色（中性 / 綠） |
| `--ic-panel` | `#eef4e6` | 插畫面板底 |
| `--ic-hair` | `#cfe0b8` | 細線 |
| 背景橢圓 | `linear-gradient(180deg,#e4efd7,#f2f6ea)` | 左上出血大橢圓 + `#c6dcaa` 細描邊 |

### 2.3 規則

- 圖卡**只有一個色相：深綠**。不輪替藍 / 青綠，不把情緒色拉進版面。
- 深色底（header / CTA / 編號圈）上的字一律 `#fff`。
- 強調＝**粗體 + `2px solid var(--icg)` 底線**，不靠變色。
- **禁止多色漸層**。`--brand-grad` 不要用在圖卡。背景橢圓的單 hue 兩段式漸層可用。
- 裝飾形狀（header 同色調圓、背景橢圓）：`pointer-events:none`、放最底層、不擋字。
- 對比：正文對底 ≥ 4.5:1，大標 ≥ 3:1。

---

## 3. 字體與字重

| 範圍 | 字體 |
|---|---|
| App 介面 | `--font`（Inter）+ `--font-display`（Manrope，僅拉丁大標 / 數字） |
| **健康圖卡** | **`'Noto Sans TC'`**（`PingFang TC` / `Microsoft JhengHei` fallback）。中文平台一定要用真中文字體 |

### 3.1 字重階梯 — 不要整頁加粗

| 用途 | 字重 |
|---|---|
| 主標題 / 編號數字 | **900**（Noto Sans TC 有 900） |
| 區段膠囊 / 列 label / 品牌名 / 強調 / CTA | **700** |
| step 說明 / meta / 次要標籤 | **500** |
| 內文 / 描述 | **400** |

> 階層靠「大小 + 深綠/灰的顏色 + 400/700/900 對比」，不是靠全部加粗。

### 3.2 圖卡字級（1080×1080）

| 元素 | size / weight / color |
|---|---|
| header 品牌名（健康圖文專欄） | 29 / 900 / `#fff`，`letter-spacing:.06em` |
| header 標籤「健康新知」 | 21 / 700 / `#d7ecdf`，`2px` 描邊 pill |
| 前導句 `hook` pill | 19 / 700 / `--icg`，底 `--ic-tint-b` |
| 主標 `main`（`<h1>`） | 44 / 900 / `--icg-deep`，行高 1.12 |
| meta（最後更新日期） | 20 / 500 / `--ic-ink-mute`，前置 34×3 短線 |
| intro | 20 / 400 / `--ic-ink-soft`，行高 1.55 |
| 區段膠囊（整寬 / 2欄） | 24 / 700 / `#fff`，底 `--icg`　／　2欄內 22 |
| 表格 表頭 / 左欄 / 右欄 | 18 / 500 / mute　・　21 / 700 / `--icg-deep`　・　20 / 400 / `--ic-ink` |
| 統計條 大數字 / 小標 / note | 40 / 900 / `#fff`　・　18 / 500　・　16 / 400 / mute |
| 編號清單 號碼 / 內文 | 19 / 900 / `#fff`（36圓）　・　20 / 400 / `--ic-ink` |
| footer hashtag / 資料來源 / 品牌 | 19 / 700 / `--icg`　・　14 / 400 / mute　・　20 / 700 / `--icg` |
| 強調 `.ic-em` | 700 + `2px` `--icg` 底線 |

### 3.3 App 內字級

view 標題 19 / 800、卡片標題 14 / **700**、正文 13.5–14 / 400、小標籤 11–12 / 700。

---

## 4. 間距尺標

**8 的倍數**：`4 · 8 · 12 · 16 · 24 · 32 · 40 · 48`。避免 26 / 30 / 34 / 38 這種。

| 圖卡位置 | 值 |
|---|---|
| header 高 / footer 高 | 96 / 92 |
| 內容區左右 padding | 48 |
| 內容區上下 padding | 22 / 14 |
| main → meta / meta → intro | 8 / 10 |
| 區段標頭 margin | 14 / 9（2 欄內 0 / 9） |
| 表格列 padding | 9 20 |
| 統計條 padding / 間距 | 11 22 / 9 |
| 編號清單間距 | 11 |
| 下半 2 欄 gap | 28 |

App 內：卡片 padding `1.1–1.35rem`、卡片間距 14、view 內距 `1.5rem`。

---

## 5. 圓角尺標

| Token / 值 | 用途 |
|---|---|
| 10 | 統計條 |
| 14 | flow chip、header logo 方塊 |
| 表格 / label 列 | 無圓角（切齊，色塊感） |
| header / footer | 無圓角（切齊卡邊） |
| `999px` | 前導句、區段膠囊、header 標籤、編號圈、meta 端點 |

- 一個元件一個圓角值，不要「只有一角圓」。App 內沿用 `--r`(16) / `--r-sm`(10)。

---

## 6. 陰影

App 用 `--shadow-xs/-sm/-md`。**圖卡完全不用陰影**（html2canvas 對陰影不穩），
分層靠：暖白卡底 vs `--ic-panel` / `--ic-tint-*` 色塊 vs `--ic-hair` 細線。

---

## 7. 圖卡元件規範（1080×1080・v3）

版面：**header(96) → 內容區(flex 直排) → footer(92)**，`.infocard-canvas` 固定 `1080×1080; overflow:hidden`。
背景大橢圓 `.ic-bg-ellipse` 從左上出血、`z-index:0`。
**主視覺＝標題右側的 256×256 正方插圖 slot**（真實插畫檔，不是幾何 icon；子系統見 §7.8）；其餘靠資訊密度撐版面。

固定結構（`buildInfocardCanvasHTML` 產出，資料模型見 §8）：
```
┌ 標題群（.ic-headtext, flex:1）      ┐ ┌ 主視覺 .ic-hero-illo ┐
│ hook pill（可省）                    │ │  256×256 正方         │
│ <h1> 主標（2 行內）                  │ │  插圖佔 65–80%        │
│ 更新時間 meta（dash + 自動日期）      │ │  透明底、完整人物     │
│ intro（2 句）                        │ │  安全邊界             │
└─────────────────────────────────────┘ └─────────────────────┘
區段1  整寬   —— 通常 format:"table"（判定標準／分級；含插圖時 ≤5 列）
┌ 區段2（左, flex 1.08） ┐ ┌ 區段3（右, flex 1） ┐
│ format:"stats"          │ │ format:"list"        │
└────────────────────────┘ └─────────────────────┘
```
標題群與主視覺 slot 併成 `.infocard-canvas-headzone`（flex row, gap 24）。
1 個區段 → 整寬；≥2 個 → 區段1 整寬、區段2+3 並排。

### 7.1 header `.infocard-topbar`
`--icg-deep` 底、`overflow:hidden`。兩顆同色調實心圓（`#1c7049` / `#2e7d51`）從右側出血。
白色 logo 方塊（`ti-brain`，深綠）+ 品牌名「健康圖文專欄」900 + 右側「健康新知」描邊 pill。

### 7.2 標題群（`.ic-headtext`，headzone 左欄）
`hook`（43 / 900 / `--icg`，同主標字級的前導句）→ `<h1 .infocard-canvas-main>`（44 / 900 / `--icg-deep`）→
`.ic-meta`（`最後更新日期　YYYY / MM / DD`，前置 34×3 短線）→ `.infocard-canvas-intro`（20 / 400）。
intro 內可用 `**詞**` 標成綠底線強調（`icEmphasis`）。右欄是 §7.8 的主視覺 slot。

### 7.3 區段標頭 `.ic-section-head`
**膠囊(heading) + 3px 橫線 + 13 端點**，全 `--icg`。整寬區膠囊 24px；2 欄內縮到 22px。

### 7.4 區段 body（依 `format`）
- **`table`**：`.ic-table` = 表頭列（`.ic-th`，灰、19px、不填底）+ 資料列（`.ic-tr`，`--ic-tint-a/-b` 交替）。
  左欄 `.c1` 固定 284px、`--icg-deep` 700；右欄 `.c2` 內文。**含插圖時 ≤5 列**（無插圖上限 6）。右欄可 `**強調**`。
- **`stats`**：`.ic-stats` = 2–3 條 `.ic-stat`，**底色由深到淺**（`--icg-deep` → `--icg` → `--icg-mid`），
  左大數字 `.sv`(40 / 900) + 右小標 `.sl`(18 / 500)；下方 `.ic-stats-note`（16 / mute，補年份來源）。
- **`list`**：`.ic-nlist` = 縱向編號清單，每項 36 綠圓號 + 內文(20)。4 條，每條帶量化資訊。
- 保留 `steps`（橫向格線）/ `flow`（膠囊）/ `rows`（label 列）給其他排版，但 v3 三段預設 table→stats→list。

### 7.5 footer `.infocard-canvas-footer`（92px）
左：`.ic-ft-hash`（`#tag　#tag…`，19 / 700 / `--icg`）+ `.ic-ft-src`（`資料來源：…`，14 / mute）。
右：`IC_BRAND_MARK`（內嵌漸層腦形 SVG）+「健康智慧中樞」700。
**v3 沒有 CTA 按鈕**——行動呼籲改由 hashtag（如 `#保戶關懷`）承接；`data.cta` 僅供文字稿。

### 7.6 主視覺 slot `.ic-hero-illo`（256×256，headzone 右欄）
- 內容＝**獨立插畫檔**（`assets/illustrations/*.svg`，unDraw 重上深綠）或 AI 生成圖；**不得用基本幾何／emoji／單一器官 icon 當主視覺**。
- 插圖 `max-width:100%; max-height:82%; width/height:auto`，置中 → 佔 slot 約 65–80%，四周留安全邊界。
- **透明底**（slot 不填色、不加面板），`overflow:hidden` 防超出。
- 找不到素材（或 AI 無後端）→ `.ic-hero-illo.placeholder`：虛線框 + `ti-photo-off` + 「插圖待補（素材庫找不到對應情境）」。一眼看得出缺圖，不是插畫替身。

### 7.7 unDraw 重上色配方
- 主色：`#6c63ff` → `#17603f`；次要 `#575a89` → `#2e7d51`。膚色與中性灰**保留**（維持人物與情境可辨）。
- 移除 XML prolog / DOCTYPE / 註解與 root `<svg>` 的 width/height（留 viewBox）。
- inline 注入前把每張 SVG 的 `id` / `url(#…)` / `href="#…"` 加 `illoN-` 命名空間前綴，避免多張同頁 id 衝突。

### 7.8 插圖子系統（`index.html`）
- `illustration` 物件（轉譯 System Prompt 產出，資料模型見 §8）：`topic / audience / scene / emotion / style / colorPalette / imagePrompt`（＋ demo 可帶 `preferred` 指定素材 id）。**Claude 只描述情境，不畫圖、不輸出 SVG／圖片網址。**
- `ILLUSTRATION_MODE`：
  - `'asset-library'`（預設）：`resolveIllustration()` → `loadIlloManifest()` 讀 `assets/illustrations/manifest.json` → `pickFromLibrary()` 對每筆算分（category +3、topic +2、keyword/audience/scene 詞 +1），回排序候選；`inlineIlloSvg()` 取檔、重上色、命名空間化後注入。
  - `'ai-generation'`（預留）：`POST /api/generate-illustration {illustration}` → `{imageUrl}`；金鑰只在後端，前端不存。失敗一律退 placeholder。
- 「重新生成插圖」`regenerateIllustration()`＝重新配對並洗牌取第一張；「更換插圖」`swapIllustration()`＝輪替 `_candidates` 下一張。**兩者只換 `data.illustration`，不重跑轉譯**，重繪 `#infocard-canvas-full` 與結果區縮圖。
- 新增素材：放 SVG 進 `assets/illustrations/`、在 `manifest.json` 的 `items` 補一筆（`categories` 用既有 9 分類詞）。

---

### 7.9 彈性版面（v5，Prompt v2.1）

區段數 1–3、格式與 `layout` 由 AI 依議題決定，前端依「格式寬窄」排版，不再固定「表格→數字→清單」：

| 規則 | 說明 |
|---|---|
| 寬格式整列 | `table`、`steps`、`flow`，以及**位在第一段**的 `stats`（顯示為橫排大數字 `.ic-stats.row`，數值 52px） |
| 窄格式並排 | `list` 與非第一段的 `stats` 兩兩並排在 `.ic-2col`；落單的窄格式整列（4 條以上的 list 改兩欄 `.ic-nlist.grid2`） |
| 垂直分配 | 所有區段包在 `.ic-secs`（`justify-content:space-evenly`），只有 2 段時不會在底部留大片空白 |
| `layout: editorial` | 標準編輯版（預設） |
| `layout: data-focus` | 數據優先：第一段放 stats |
| `layout: illustrated` | 插畫為主：主視覺 slot 放大為 **400×400**（例外於 §7.6 的 256），table ≤3 列、清單 ≤3 條、引言字級 22px；適合心理、生活習慣等需要溫和氛圍的議題 |
| 整列流程圖 | 整列的 `steps` 編號圈 76px、說明 24px／700 |

仍須遵守：單一深綠色相、Noto Sans TC、不得溢出（每次新增版面都要用 7 個示範議題在 1080 全尺寸量 `scrollHeight`）。

### 7.10 Editorial 圖卡（v5.2，取代 §7.9 的視覺）

方向：**健康雜誌式資訊圖**——專業、現代、有主次層級與留白；不是衛教表單、不是 Canva 模板。
仍是 1080×1080、Noto Sans TC、html2canvas 可匯出。renderer：`buildEditorialCardHTML()`（`data.layout_type` 存在或可由舊 `sections` 推導時使用）。

**閱讀順序**：第一眼 Hero 主訊息 → 第二眼核心數字／判定指標 → 第三眼行動建議 → 最後資料來源。五區不得等重。

**色彩（取代 §2.3「單一色相」，僅適用 Editorial 圖卡）**

| 角色 | 色 | 用在 |
|---|---|---|
| 品牌深綠 `--ec-green` | `#17603f` | 只用在：品牌、主標重點字、Primary Stat 數值、指標數值、行動圖示 |
| 薄荷 `--ec-mint` | `#e3f2e8` | 插圖底圓、行動圖示底 |
| 暖米 `--ec-cream` | `#f6efdf` | Hero 的 hook、Primary Stat 底 |
| 藍灰 `--ec-slate` | `#5d6f7a`（底 `#eef2f3`） | Secondary Stat 數值、資料來源、次要說明 |
| 底 | `#fbfaf6` | 大面積背景 |
| 字 | `#1c2620`／`#4a5650`／`#808a85` | 主文／次文／註記 |

綠底綠字只保留給品牌元素；一般區塊用中性色支撐。**禁止**多色漸層、紅色、情緒色。

**減少框線**：不用表格框線、不用膠囊區段標題、不用水平分隔線串區段。層級靠字級差、留白、背景色差、位置。區段標題用 18px／800 的小標＋淡色編號，不加框。

**三種 layout（`layout_type`，AI 依議題選）**

| layout | 適合 | 結構 |
|---|---|---|
| `knowledge` 知識型 | 判定標準、分類、篩檢對象 | Hero（插圖＋hook）→ 指標卡（2＋3 不對稱格，最多 6 張）→ 下半左：Primary＋Secondary Stats／右：行動卡 |
| `data` 數據型 | 盛行率、風險、疫情、缺口 | Hero → 大數字帶（Primary 特大＋2 個 Secondary）→ 行動卡或重點清單 |
| `action` 行動型 | 預防、生活習慣、照護、申請流程、心理 | Hero（插圖放大）→ 2×2 行動卡 → 注意事項（暖米底）＋可選 1 個數字 |

**元件**
- Hero：小標（綠、30px／800）＋主標（56–60px／900，`accent` 片段上綠色）＋ hook（暖米底：大字 + 小字族群／出處）；右側插圖 320–380px 置於薄荷圓底上、可溢出圓底，與文字形成一個構圖。
- 指標卡：無框，`#f1f4f0` 淡底、圓角 18px；標籤 20px／700，數值 28–32px／900 綠，性別差異分兩行。
- Primary Stat：數值 104px／900 綠，底暖米；Secondary：40px／900 藍灰，無底，以左側細線分組。
- 行動卡：單字圖示（量／吃／動／戒…）放在 56px 薄荷圓、綠字；短句 20px。
- 頁尾：hashtags 綠 16px、資料來源藍灰 14px、品牌右下。不再使用深綠整條 header。

**資料欄位**（可沿用舊 `sections` 自動推導）：`layout_type`、`hero_hook{value,label}`、`title_accent`、`knowledge_title`、`knowledge_cards[{label,lines[]}]`、`primary_stat{value,label,note}`、`secondary_stats[{value,label}]`、`action_title`、`action_cards[{key,text}]`、`notice`。

### 7.11 Infographic Layout System（v5.3，取代 §7.10 的單一 renderer）

§7.10 的色彩分工、減少框線原則**沿用**；改的是架構：圖卡不再是「一個模板塞資料」，而是 **AI 先選視覺敘事方式 → renderer 依 layout 組版**。

**流程**：`renderInfocard(data)` → `normalizeInfographic(data)`（新欄位優先；只有舊 `sections` 時自動推導，7 個示範議題都能畫）→ `selectInfocardLayout(spec)` → `renderKnowledgeLayout / renderDataLayout / renderActionLayout / renderComparisonLayout` → 共用 `renderInfocardBase()`（品牌列＋`renderInfocardFooter()`）。各 layout **DOM 結構各自獨立**，不共用同一套 hero→table→stats→list。

| `layout_type` | 主角 | 構圖 | 插圖 |
|---|---|---|---|
| `knowledge` 知識／判定 | `knowledge_cards` | Hero 35%（標題＋人數圖示 hook，插圖疊在大薄荷圓上並出血右上）→ 判定區 35%（**一塊**白色面板內 2＋3 不對稱格，項目只用圖示圈＋字級分組，不是 5 個框）→ 下段 25%（左：暖米底出血到左緣的 Primary Stat＋Secondary／右：行動列） | 與標題並排、部分重疊，約 400px |
| `data` 數據／趨勢 | `primary_stat`（＋`chart`） | Hero（只有標題）→ 暖米色整條出血帶：左＝超大數字（164px，「約／近」與單位縮成 .34em，上方 kicker 標年份族群）、右＝小型圖表（`bar` 趨勢直條：主角那筆深綠、其餘淡灰綠，推估值標「推估」；`hbar` 比較橫條：白色軌道）→ 次要數字列（3 欄、無框、藍灰 42px，`secondary_note` 標統計期間）→ 4 欄行動列 | 小（230px），讓數字當主角 |
| `action` 健康行動 | `action_cards` | 插圖 30–40% → 3–5 個步驟 → 注意事項 | 大 |
| `comparison` 比較 | `comparison{a,b,same,key_diff,how_to_choose}` | 左右雙欄 A ↔ B，中線放最重要差異 | 左右各一（v5.3 先有骨架，待擴充） |

**資訊優先序**：`communication_priority{primary_message, primary_visual, secondary_message, action_priority}`。renderer 依此決定大小：`primary_message`＝Hero 第二層（hook）、`primary_visual`＝Primary Stat、其餘縮為 secondary／metadata。年份、樣本、但書放 note／source（metadata），不放大。

**字級（1080 底）**：eyebrow 20–22／Hero title 56–62／Primary stat 96–120／區段標 24–26／卡片標籤 17–18／內文 19–21／來源 14。**資訊太多時先刪 secondary、或建議 carousel，不縮字。**

**插圖 fallback 鏈（取代 §7.6／§9 的「找不到就待補框」）**：
1. 素材庫命中（`pickFromLibrary` 有分數）
2. 同分類／`general` 的通用插圖（`illustration.source='library'`、`fallback='category'`）
3. 圖示組合 `renderFallbackVisual()`：依分類組 3 個線性圖示（例：代謝＝捲尺＋血壓計＋報告）於薄荷圓上，`source='composition'`。屬「多圖示構圖」，不是單一器官 icon。
4. `.ic-hero-illo.placeholder` 只剩「連圖示組合都無法產生」時使用（實務上不會出現在成品）。
`ILLUSTRATION_MODE='ai-generation'` 失敗時同樣落到 2→3。

**輸出模式**：`output_mode:'single'|'carousel'`；carousel 時 `slides:[{layout_type, ...欄位}]`，每張與主資料合併後各自走 `renderInfocard`。v5.3 先建資料結構，結果區顯示「AI 建議可拆 N 張」提示；Demo 只輸出 single。

**CSS 命名**：`.infographic`、`.infographic--knowledge|data|action|comparison`，子元件 `.ig-hero`、`.ig-primary-stat`、`.ig-knowledge-grid`、`.ig-action-list`、`.ig-comparison-grid`、`.ig-footer`。舊 `.ec-*` 已移除；舊 `.ic-*` 只留給 `render:'legacy'`。

**Demo 時效**：示範數據要跟著日期更新——「流感新冠疫苗」以疾管署 2026/9/29、10/6 公告為準（第 39 週疫情、10/1 公費雙疫苗開打），每週資料會過期，換季時整題重寫，不要只改數字。

**Demo 覆蓋（v5.3）**：7 個熱門議題的圖卡都用新版欄位——knowledge：代謝症候群、心血管、長照 3.0、癌症篩檢；data：失智症、流感新冠疫苗；action：心理健康。其他主題走通用範本（action 型、依輸入主題產生、不放未查證數字）。7 議題皆有文章＋圖卡預審示範、「需要你決定」（心理健康圖卡刻意 0 筆）與系列圖卡建議。

**驗收**：拿掉文字仍看得出構圖；2–3 秒認出主題 → 第二眼數字 → 第三眼標準與行動；1080 預覽＝PNG；中文不小於 14px（來源）／17px（其他）。

### 7.12 AI 生成插圖（示範模式）

只讓影像模型生成**插圖**；標題、數字、判定標準仍由 HTML 版型排版（文字要能預審、不能被模型畫錯）。

- **預設來源＝AI 生成**（`ILLUSTRATION_MODE`）；轉譯結果區可切換 `AI 生成`／`素材庫`（`illoSourcePref`，存 localStorage `hihub_illo_src_v2`，只是個人偏好）。
- 流程（`il.ai_status`）：產草稿時 `prepareIllustration()` 先放素材庫插圖（立即可用）→ `kickAIIllustration()` 背景生成（pending→generating）→ 替換後進入 `review`，使用者按「採用這張」→ `approved`；也可「重新生成」或「改用素材庫」。失敗為 `failed`，保留素材庫插圖。對話調整與「需要你決定」用 `ensureIllustration()` 沿用已有插圖，不重新生成。
- 面板顯示 3 步：Claude 撰寫插圖提示詞 → 影像模型生成 → 人工確認採用；匯出頁（步驟 4）列出主視覺是否已採用，未採用顯示警示。
- 送審純文字只寫〔主視覺〕情境，不寫來源（換插圖不會讓預審結果失效）。
- `ILLO_API_ENDPOINT`：空字串＝尚未部署後端 → AI 生成走**示範**：`DEMO_AI_ILLUSTRATIONS` 依議題回傳 `assets/illustrations/ai-demo/*.svg`（預先準備、模擬影像模型回傳，延遲約 1.3 秒），UI 一律標「示範」。7 個熱門議題都有（代謝症候群 2 張可輪替，其餘各 1 張；SVG 同時內嵌在 `DEMO_AI_SVG`，用 file:// 開啟也能示範）；其他議題自動退回素材庫並說明原因。
- 填入網址後改打 `api/generate-illustration.js`，請求帶 `illustration`、`layout_type`、`size`（`IG_VISUAL_SIZE`：knowledge 430×372、data 230×212、action 470×390）。失敗一樣退回素材庫 → 同分類 → 圖示組合。
- 示範插圖風格（也是正式生成的提示詞品牌後綴）：扁平向量、品牌深綠為主色、暖米／薄荷輔色、透明底、**不含文字與 logo**、人物友善不誇張。
- 治理：插圖來源寫進送審純文字（〔主視覺〕…（AI 生成・示範插圖））與 Word 檢核表的「主視覺來源」列；AI 生成的插圖一樣需人工確認。

## 8. 健康圖卡資料模型 + 內容深度（v3）

方形卡 `overflow:hidden` 會裁掉超出部分；同時**內容不能淺**。轉譯 System Prompt 產「健康圖卡」的目標＝**一篇衛教短文的紮實度，壓成 3 段**：

```
{ headline_hook(≤14字,破題提問), headline_main(≤18字,資訊性),
  intro(2句≤60字,第一句帶具體數字破題),
  sections:[
    { heading, format:"table", table:{headers:[2欄], rows:[4-5列 具體切點/分級/數值]} },
    { heading, format:"stats", stats:[2-3個 {value:"24.8%",label:"…"}], note:"≤40字,標年份來源" },
    { heading, format:"list",  items:[4條字串, 每條≤32字, 帶頻率/時間/份量] }
  ],
  hashtags:[4-6], sources:[2-4 機構名], illustration_category,
  illustration:{ topic, audience, scene(具體情境,含人物動作), emotion,
                 style:"flat vector, single accent colour, friendly",
                 colorPalette:"deep green #17603f on transparent", imagePrompt(英文,結尾接品牌風格句) } }
```

`illustration` 只描述情境；前端 `resolveIllustration()` 依 `topic/audience/scene` + `illustration_category`
從 `assets/illustrations/manifest.json` 挑真實插畫檔（見 §7.8）。Claude 不畫圖、不輸出 SVG／圖片網址。

深度檢查：
- 區段1 是**這個議題實際的標準**（診斷切點、藥物分類、篩檢時程…），數值完整（單位、性別差異、但書），不是「多留意數值變化」。
- 區段2 的 `value` 是**可信機構的公開統計**，`note` 標年份；查無把握就少放一項，不湊數、不掰。
- 區段3 每條**具體可做且帶量化**（「每週至少5次、每次30分鐘」），不是「規律運動」。
- 強調用 `**詞**`，一段最多 2 處。
- **含插圖時 table ≤5 列**（無插圖上限 6）。col1 用短詞（癌別／因子類別），把方式／細節塞進 col2；再長就拆卡或減列。
- `illustration.scene` 要具體、可畫、含人物動作（「一個人在洗手台仔細洗手」），不要抽象名詞堆疊；`imagePrompt` 不得含療效／保證用語、真實人名或品牌。

Demo 模式：7 個熱門議題（代謝症候群／失智症預防／心血管風險管理／長照3.0／癌症篩檢／心理健康／流感新冠疫苗）
都有預先由對應「健康文章」（`DEMO_ARTICLE_OVERRIDES`）收束精煉的圖卡範例，存在 `DEMO_INFOCARD_OVERRIDES`，
數據與來源沿用文章已查證內容；每篇並帶一個 `illustration` 物件（含 `preferred` 指定素材 id）。改文章數據時要同步改這裡。

---

## 9. 避免清單（AI slop 檢查）

- ❌ 圖卡出現深綠以外的版面色相 / 多色漸層。
- ❌ 整頁 700/900，沒有 400 內文對照。
- ❌ 用 Inter/系統字排中文圖卡（要 Noto Sans TC）。
- ❌ **內容淺**：區段1 只寫「留意數值」而沒有真實切點；區段2 沒有數字或沒標年份；區段3 寫「規律運動」而不帶頻率/份量。
- ❌ 為了填滿 stats 或 table 掰數字、年份、來源。
- ❌ 固定 3 段以外的排版；區段2/3 沒有並排。
- ❌ 圖卡用陰影分層。
- ❌ 內容超出方形被裁 → 應改文案長度，不是縮字級。
- ❌ 加回 emoji / CTA 按鈕（v3 用 hashtag 承接行動呼籲）。
- ❌ 用基本幾何形狀 / emoji / 單一器官 icon / 無情境裝飾圖當主視覺（§7.6）。
- ❌ 素材未命中時畫單一幾何圖假裝有插畫 → 依 §7.11 fallback 鏈：同分類通用插圖 → 多圖示組合；大面積「插圖待補」框不得出現在成品。
- ❌ Claude 在 `illustration` 裡輸出 SVG／圖片網址，或前端硬編金鑰呼叫影像生成服務。

---

## 10. 改動前的檢查清單

1. 顏色 / 間距 / 圓角 / 字重都對得上 §2–§5？
2. 圖卡是不是只有深綠一個色相？中文有沒有用 Noto Sans TC？
3. 有 400 內文跟 700/900 標題形成對比？
4. **內容夠深**？區段1 有真實切點、區段2 有帶年份的真數字、區段3 每條帶量化。
5. 在 `openInfocardPreview()` 的 1080×1080 全尺寸下檢查過（不只 compact 縮圖）？
6. `.infocard-canvas-body` 的 `scrollHeight` 沒有 `> clientHeight`、`.ic-2col` 內容沒撞到 footer（沒被裁）？
7. 跑過一次「下載圖片」（html2canvas），確認橢圓 / 主視覺插圖 / 區段膠囊 / 統計條 / 編號 / footer 都有進 PNG？
8. 主視覺是真實插畫檔（或 placeholder），不是幾何 icon？插圖佔 slot 65–80%、人物完整不裁、透明底？
9. 「重新生成插圖 / 更換插圖」只換圖、不動 headline / intro / table / stats / list？

---

## 11. 作品主線元件（`index_v4.html`）

v4 以「作品」串起四步：①議題洞察 → ②產出草稿 → ③預審與修正 → ④完成匯出。以下元件只用 §2.1 的 App token，不新增色票。CSS 集中在 `<style>` 末段「v4：作品主線」註解以下。

| 元件 | 類別 | 規格 |
|---|---|---|
| 步驟條 | `.work-stepper` / `.ws-step` | 放在 view-topbar 正下方，白底＋下框線。步驟膠囊：未到＝`--text3` 字；已完成＝綠勾圓 `--green-bg`/`--green`，可點回；目前＝`--green-bg` 底＋`--green` 實心編號。左側作品名（`--green` 檔案圖示），右側「離開作品」。<760px 只顯示編號。 |
| 下一步列 | `.next-bar` | 每一步結果的最下方、唯一的主要下一步。`--green-bg` 底＋綠色細框＋`--r`；小標（大寫 11px 800）＋一句話動作說明（14px 800）＋按鈕列。主按鈕 `.btn-next`＝`--green` 底白字 800；次要動作用既有 `.action-btn.secondary`。**一個畫面只放一個 `.btn-next`。** |
| 首頁主入口 | `.home-start` | 卡片：kicker＋問句標題（Manrope 19px 800）＋四步流程提示＋輸入框＋`.btn-next`＋熱門議題 chip（`.hs-chip`，hover 轉綠）。單獨使用工作檯降為次要列 `.home-tool`（白底細框小按鈕，圖示用模組色）。 |
| 作品列 | `.work-row` / `.wr-stage.s1–s4` | 同 `.act-row` 結構；階段 tag 用模組色：s1 藍、s2 紫、s3 琥珀、s4 綠。 |
| 預審意見卡 | `.finding.sev-*` | 白底細框＋**左側 3px 色條表示嚴重度**（high `--red`／medium `--amber`／low `--blue`）。頂列：編號、類別中文名、嚴重度 tag、「需查證」「有時效性」灰框 tag、建議處理（綠 tag）。原文片段放 `--surface2` 圓角塊。底部「處理註記」select（未處理／已修正／不適用／待審閱者判斷），已註記的卡片降透明度。 |
| 意見分組 | `.bucket` | 依 9 類 → 3 組（事實與來源／醫療詮釋與風險溝通／表達與結構），組標題右側灰字標示複核單位。 |
| 原文標示 | `mark.hlq.q-*` | 沿用 v3 紅黃藍；色＝severity（不是「已判定錯誤」），點擊捲到對應意見卡（`.finding.flash` 綠色外光暈 1.2s）。 |
| 預審結論 | `.verdict.v-review` / `.v-pass` | 需人工確認＝琥珀；未發現可處理項目＝綠。下方 `.verdict-progress` 註記進度條（`--green`）。結論文字不得出現「通過」「可發布」等核准字眼。 |
| 匯出摘要 | `.export-sum` / `.es-item` | 4 欄（<760px 2 欄）白底小卡：主題、類型・版本、預審意見數、交給審閱者判斷數。 |

規則：
- 嚴重度只用來排序與標色，文案一律寫「需人工確認」「待確認」，不寫「高風險」「不合格」。
- 預審頁由作品送審時收起輸入區，只留「預審對象：作品 X vN・改為手動貼上」一行。
- 不得再出現「法遵」「保單條款」「免責聲明」等保險招攬語境字樣（v2.0 規格書已移除）。

---

## 12. v5 版型元件（`index_v5.html`，參考 health_hub_GPT_demo）

| 元件 | 類別 | 規格 |
|---|---|---|
| 外殼 | `.shell` | 兩欄 grid：深色側欄 232px＋主區；主區 `max-width:1450px` 置中，頂列 68px sticky、半透明 `--bg` 底＋模糊 |
| 側欄 | `.sidebar` | `--nav` 深綠底白字：品牌 → 「＋開始一份健康內容」淺綠按鈕 → 工作空間導覽（首頁／我的工作／趨勢洞察／內容轉譯／內容預審，選中 `--nav3` 底＋綠圖示）→ 本週關注卡（`--nav2`）→ 底部狀態（示範／AI 模式、治理規則版本、設定 API Key） |
| 首頁主視覺 | `.hero-main` / `.hero-side` | 左：白→淡綠→淡藍漸層大卡（圓角 28px）＋輸入框 `.startbox`＋四步流程；右：深色「把 AI 放在邊界內使用」三層說明（守住邊界／自主判斷有依據／最終由人決策） |
| 繼續工作 | `.workcard` | 兩欄卡片：主題｜類型 vN、狀態摘要、綠色漸層進度條、步驟 tag（模組色） |
| 作品標頭 | `.work-stepper`（`#workhead`） | 主區頂端 sticky 白卡：左「目前工作」＋主題、中間四步、右「離開作品」 |
| 工作區 | `.workgrid` | 左內容 `.panel`（eyebrow「STEP n · …」＋大標＋說明）＋右側欄 `.wg-aside`（sticky）；<1050px 改單欄 |
| 右側欄 | `.side-panel` / `.nextcard` | 每步的依據面板（步驟1 資料來源與性質、步驟2「送預審前，你可以先看」、步驟3 9 類總覽＋人工決策狀態）＋淡綠「NEXT」卡（唯一主要按鈕） |
| 送預審前提醒 | `.side-panel`＋`.source` | 步驟2 右側：列出草稿用到的統計數字（比例、倍數、人數、排名）與出處年份；缺出處或年份的標琥珀色並計數，提醒預審會請使用者確認。屬「決策前的資訊揭露」，決策在步驟3。版面／語氣的理由改在對話回覆中說明 |
| 對話式調整 | `.adjust-chat` | 草稿下方：對話紀錄（使用者紫色泡泡、AI 白泡泡）＋建議說法 chip＋輸入列；取代語氣選項與固定調整按鈕 |
| 人工決策 | `.decide` / `.decide-opt.accept/.reject/.expert` | 每則意見底部三選一 pill：接受（綠）／不接受（紅，必填原因，未填時輸入框紅框）／交由專業單位判斷（藍）；顯示決定時間 |
| 9 類總覽 | `.cat-row.has/.none` | 依 3 組列出 9 類：有意見＝琥珀「N 項待決定」，無意見＝灰「未發現待確認項目」（不得寫「通過」） |
| 人工交接 | `.handoff` / `.ready` / `.exportbox` | 左深綠「已完成 AI 階段」清單（版本、輪次、決策統計、複核單位），右匯出按鈕列表 |
| 助理 | `.assist-fab` | 右下深綠浮動按鈕，開「健康工作助理」 |

手機（<760px）：側欄隱藏、頂列左側出現品牌首頁鈕；首頁主視覺單欄、作品標頭改為非 sticky。

### 12.1 頁面層次（v5.4：解決「整片白底」）

**A. 底色分層（四步共用）**
- 頁面底 `--bg` 調深為 `#eff2ec`；工作區主欄外層 `.wg-main > .panel` **不再是白卡**（透明、無框、無陰影），內容卡片直接放在頁面底上。
- 內容卡片：白底 `--surface`、**不畫框線**（或極淡），改用 `--card-shadow`（`0 1px 2px rgba(23,33,28,.04), 0 6px 18px rgba(23,33,28,.05)`）分層；圓角 `--r-sm`。
- 右側欄 `.side-panel`、作品標頭維持白卡，同樣改用 `--card-shadow`。

**B. 依角色給底色（步驟 1）**

| 角色 | 元件 | 樣式 |
|---|---|---|
| 主角：議題摘要 | `.rz-summary` | 白底＋`--card-shadow`＋左側 4px `--green` 色條（使用者偏好白底，不用薄荷底）；主題 18px／800；摘要 14px `--text`（不用灰字） |
| 核心數據 | `.num-card` | 白卡，`.num-grid` 用 `auto-fit`（卡片少時撐滿整列）；數字 `--green-dark` 26px／800；右上資料性質標籤 `.nc-tag`（官方統計＝綠、市場觀察＝藍灰 `#eef2f3`/`#56707c`、推估＝琥珀）；說明 `--text2` |
| 第二層：趨勢、政策、族群 | `.trend-line` `.policy-tl` `.group-sentence` | 白卡、無框；政策時間軸圓點改 `--green` |
| 次要：資料來源 | `.src-block` | 無卡片，`rgba(23,33,28,.04)` 淡灰底；連結 `--green-dark` |
| 區段標題 | `.rz-head` | 14.5px／800 `--text`、不轉大寫；編號方塊 22px `--green` 實心＋白字（淡色在新底色上看不見） |

- 灰字對比：說明文字最淺用 `--text2`；`--text3` 只留給時間、來源這類 metadata。
- 數字一律品牌綠（不再用藍色）；藍色只留給步驟 1 的模組 eyebrow。
