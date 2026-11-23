/* 健康時令表：「本週關注」的資料來源（示範模式）。
   每列＝一個每年固定出現的時節、節日或衛生紀念日，對到一個既有示範主題。
   from／to 是 'MM-DD'（可跨年，例如 '12-01'～'02-28'）。單日紀念日給前後約一週的區間。
   kind：day＝紀念日／節日（優先顯示）、season＝季節性。tag 沿用 TAG_LABEL（hot／trend／risk／policy）。
   src：來自第二輪評估表的列號（沒有＝主階段依官方衛生紀念日補的）。
   紀念日日期：世界衛生組織與國健署、疾管署公告的固定日期；每年日期會變的（如世界腎臟日＝3月第2個週四）用整段月份。 */
window.DEMO_HEALTH_CALENDAR = [
  // ── 1–2 月：年節、寒流 ──
  {from:'01-10', to:'02-20', kind:'day',    tag:'hot',   topic:'食物中毒預防',         note:'年貨採買與年菜保存', src:[]},
  {from:'01-15', to:'02-25', kind:'day',    tag:'trend', topic:'均衡飲食與 211 餐盤',  note:'過年團聚怎麼吃得健康'},
  {from:'01-15', to:'02-20', kind:'day',    tag:'trend', topic:'家庭醫藥箱與藥品保存', note:'春節長假常備藥'},
  {from:'01-28', to:'02-10', kind:'day',    tag:'risk',  topic:'癌症篩檢',             note:'2/4 世界癌症日'},
  {from:'12-01', to:'02-28', kind:'season', tag:'risk',  topic:'一氧化碳中毒',         note:'寒流門窗緊閉、熱水器使用增加'},
  {from:'12-01', to:'02-28', kind:'season', tag:'risk',  topic:'室內空氣汙染',         note:'寒流開暖氣、門窗緊閉'},
  {from:'12-01', to:'02-28', kind:'season', tag:'risk',  topic:'心肌梗塞',             note:'低溫是心血管急症好發時節'},
  {from:'12-01', to:'01-31', kind:'season', tag:'risk',  topic:'居家事故傷害',         note:'暖暖包、電暖器使用安全'},
  {from:'11-01', to:'03-31', kind:'season', tag:'hot',   topic:'諾羅病毒與病毒性腸胃炎', note:'冬季腹瀉群聚高峰'},
  {from:'12-01', to:'02-28', kind:'season', tag:'trend', topic:'冬季皮膚癢（乾燥性濕疹）', note:'天冷乾燥、皮膚癢'},
  // ── 3–4 月 ──
  {from:'02-25', to:'03-11', kind:'day',    tag:'trend', topic:'腰圍與腹部肥胖',       note:'3/4 世界肥胖日'},
  {from:'03-01', to:'03-31', kind:'day',    tag:'risk',  topic:'慢性腎臟病',           note:'3 月第 2 個週四 世界腎臟日'},
  {from:'03-13', to:'03-27', kind:'day',    tag:'trend', topic:'牙周病與成人口腔保健', note:'3/20 世界口腔健康日'},
  {from:'03-01', to:'06-30', kind:'season', tag:'policy',topic:'吸菸、新興菸品與檳榔', note:'戒菸就贏比賽報名期'},
  {from:'03-31', to:'04-14', kind:'day',    tag:'trend', topic:'健康資訊識讀',         note:'4/7 世界衛生日'},
  {from:'03-28', to:'04-08', kind:'day',    tag:'trend', topic:'均衡飲食與 211 餐盤',  note:'清明潤餅怎麼吃'},
  {from:'04-01', to:'04-30', kind:'day',    tag:'trend', topic:'足底筋膜炎',           note:'媽祖遶境、長距離步行'},
  {from:'04-01', to:'06-30', kind:'season', tag:'hot',   topic:'腸病毒',               note:'腸病毒流行期'},
  // ── 5–6 月：梅雨、端午 ──
  {from:'04-25', to:'05-10', kind:'day',    tag:'trend', topic:'健檢報告解讀與追蹤',   note:'5/1 勞動節：健康檢查了沒'},
  {from:'05-24', to:'06-07', kind:'day',    tag:'policy',topic:'吸菸、新興菸品與檳榔', note:'5/31 世界無菸日'},
  {from:'05-01', to:'06-30', kind:'season', tag:'risk',  topic:'居家黴菌',             note:'梅雨季潮濕'},
  {from:'05-01', to:'06-30', kind:'season', tag:'risk',  topic:'黴菌毒素',             note:'梅雨季食物易發霉'},
  {from:'05-25', to:'06-25', kind:'day',    tag:'trend', topic:'均衡飲食與 211 餐盤',  note:'端午吃粽有秘訣'},
  // ── 夏季 ──
  {from:'05-01', to:'09-30', kind:'season', tag:'hot',   topic:'登革熱',               note:'蚊媒傳染病流行期'},
  {from:'06-01', to:'09-15', kind:'season', tag:'risk',  topic:'熱傷害與中暑',         note:'高溫與戶外活動'},
  {from:'06-01', to:'08-31', kind:'season', tag:'trend', topic:'曬傷與防曬',           note:'紫外線最強的季節'},
  {from:'06-01', to:'08-31', kind:'season', tag:'trend', topic:'過敏性鼻炎',           note:'冷氣房溫差與冷氣病'},
  {from:'06-01', to:'10-31', kind:'season', tag:'risk',  topic:'食物中毒預防',         note:'高溫與颱風停電，食物保存'},
  {from:'06-01', to:'10-31', kind:'season', tag:'risk',  topic:'極端氣候與防災健康',   note:'颱風、豪雨季'},
  {from:'07-01', to:'08-31', kind:'season', tag:'trend', topic:'兒童 3C 使用',         note:'暑假螢幕時間增加'},
  {from:'08-01', to:'08-12', kind:'day',    tag:'trend', topic:'攝護腺肥大',           note:'8/8 父親節'},
  // ── 9–10 月：中秋、開學、流感疫苗 ──
  {from:'08-25', to:'09-20', kind:'day',    tag:'trend', topic:'兒童近視',             note:'開學季'},
  {from:'09-01', to:'09-30', kind:'day',    tag:'risk',  topic:'飲食中的致癌物質',     note:'中秋烤肉'},
  {from:'09-01', to:'09-30', kind:'day',    tag:'trend', topic:'含糖飲料',             note:'中秋月餅、飲料熱量'},
  {from:'09-14', to:'09-28', kind:'day',    tag:'trend', topic:'失智症預防',           note:'9/21 世界阿茲海默症日'},
  {from:'09-22', to:'10-06', kind:'day',    tag:'risk',  topic:'心血管風險管理',       note:'9/29 世界心臟日'},
  {from:'09-01', to:'10-31', kind:'season', tag:'trend', topic:'高尿酸與痛風',         note:'秋蟹與節慶聚餐'},
  {from:'09-25', to:'12-31', kind:'season', tag:'hot',   topic:'流感新冠疫苗',         note:'公費疫苗 10 月起開打'},
  {from:'10-01', to:'10-31', kind:'day',    tag:'risk',  topic:'乳癌',                 note:'10 月 國際乳癌防治月'},
  {from:'10-03', to:'10-17', kind:'day',    tag:'trend', topic:'心理健康',             note:'10/10 世界心理健康日'},
  {from:'10-13', to:'10-27', kind:'day',    tag:'risk',  topic:'骨質疏鬆症',           note:'10/20 世界骨質疏鬆日'},
  {from:'10-22', to:'11-05', kind:'day',    tag:'risk',  topic:'腦中風',               note:'10/29 世界中風日'},
  {from:'10-01', to:'10-31', kind:'day',    tag:'policy',topic:'長照3.0',              note:'重陽敬老月'},
  {from:'10-01', to:'12-31', kind:'season', tag:'trend', topic:'運動傷害處置',         note:'秋冬路跑賽季'},
  // ── 11–12 月 ──
  {from:'11-01', to:'11-14', kind:'day',    tag:'trend', topic:'高尿酸與痛風',         note:'立冬補冬'},
  {from:'11-07', to:'11-21', kind:'day',    tag:'risk',  topic:'糖尿病',               note:'11/14 世界糖尿病日'},
  {from:'11-24', to:'12-07', kind:'day',    tag:'trend', topic:'愛滋病與 HIV 篩檢',    note:'12/1 世界愛滋病日'},
  {from:'12-15', to:'12-28', kind:'day',    tag:'trend', topic:'糖尿病',               note:'冬至湯圓'},
  // ── 補充季節性項目（讓每週至少 5 題） ──
  {from:'11-15', to:'02-28', kind:'season', tag:'risk',  topic:'心血管風險管理',       note:'天冷血壓易升高'},
  {from:'12-01', to:'02-28', kind:'season', tag:'risk',  topic:'腦中風',               note:'低溫是腦中風好發時節'},
  {from:'12-01', to:'02-28', kind:'season', tag:'risk',  topic:'肺炎',                 note:'冬季呼吸道感染高峰'},
  {from:'09-01', to:'12-31', kind:'season', tag:'hot',   topic:'黴漿菌肺炎',           note:'開學後秋冬呼吸道感染'},
  {from:'11-01', to:'12-31', kind:'season', tag:'trend', topic:'成人預防保健服務',     note:'年底前完成年度健檢'},
  {from:'11-01', to:'12-31', kind:'season', tag:'trend', topic:'癌症篩檢',             note:'年底前完成公費癌篩'},
  {from:'12-01', to:'01-31', kind:'season', tag:'trend', topic:'壓力調適與心理韌性',   note:'年末結算與年節壓力'},
  {from:'01-01', to:'01-31', kind:'season', tag:'trend', topic:'減重飲食',             note:'新年新目標'},
  {from:'03-01', to:'05-31', kind:'season', tag:'trend', topic:'減重飲食',             note:'夏天前的減重潮'},
  {from:'03-01', to:'04-30', kind:'season', tag:'trend', topic:'過敏性鼻炎',           note:'春季換季過敏'},
  {from:'03-01', to:'04-30', kind:'season', tag:'trend', topic:'運動強度',             note:'春暖開始運動'},
  {from:'06-01', to:'08-31', kind:'season', tag:'trend', topic:'足部黴菌與細菌感染',   note:'濕熱季節香港腳'},
  {from:'06-01', to:'09-30', kind:'season', tag:'risk',  topic:'狂犬病與動物咬傷',     note:'夏季戶外活動、蜂螫水母'},
  {from:'07-01', to:'08-31', kind:'season', tag:'trend', topic:'社交時差與睡眠',       note:'暑假作息日夜顛倒'},
];
