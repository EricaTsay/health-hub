/* v6 示範主題：諾羅病毒與病毒性腸胃炎（B8 傳染病防治）
   查證日期：2026-11-21。數據來源：衛福部統計處衛生公務統計「食品中毒案件－病因物質分類統計」（食藥署編製，最新一期114年，xlsx）、
   疾管署新聞稿（2025-03-11，衛福部網站轉載；只引用衛教與消毒內容，不引用當週疫情數字）。
   諾羅病毒腸胃炎非個案通報疾病，查無全國年度感染人數；食品中毒統計只涵蓋經衛生局調查的食品中毒案件。
   參考方向：健康智庫〈「嘔吐、腹瀉」病毒性腸胃炎流行中〉2022/03。 */
(function(){
  const REFS = [
    {title:'衛生公務統計一覽表：食品中毒案件－病因物質分類統計（食藥署編製，114年）',source:'衛生福利部統計處',url:'https://dep.mohw.gov.tw/dos/cp-5301-62356-113.html'},
    {title:'腹瀉疫情仍為近5年最高，籲請民眾、餐飲旅宿業落實手部、飲食衛生及環境消毒清理',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-81809-1.html'}
  ];
  const TABLE = {headers:['情境','疾管署建議'], rows:[
    ['一般物品表面','20 c.c.漂白水加1公升清水（1,000 ppm）擦拭，先戴手套與口罩'],
    ['嘔吐物、排泄物','100 c.c.漂白水加1公升清水（5,000 ppm）消毒清理'],
    ['洗手','如廁後、進食或準備食物前，用肥皂或洗手乳正確洗手'],
    ['飲食','生熟食分開，蚵、貝類等帶殼水產澈底煮熟'],
    ['生病時','在家休息，症狀解除48小時後再上班上課']
  ]};
  const TAGS = ['諾羅病毒','腸胃炎','嘔吐腹瀉','漂白水消毒','食品衛生'];

  const DP_SCOPE = {id:'dp-noro-scope', type:'data_scope', title:'食品中毒件數不等於感染人數',
    desc:'食藥署統計的是經衛生局調查、判明病因的食品中毒「案件」：114年諾羅病毒165件、患者1,478人。家庭內人傳人或未通報的腸胃炎不在統計內，諾羅病毒腸胃炎也不需個案通報，沒有全國年度感染人數。AI 沒有用這些件數推估感染總數。',
    current:'114年食品中毒病因判明案件中，諾羅病毒165件、居首位（食藥署）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'165 件／1,478 人', value:'114 年食品中毒', note:'病因判明279件中的諾羅病毒（目前採用）'},
      {label:'未公布', value:'全國感染人數', note:'非個案通報疾病，疾管署僅有週監測'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'諾羅病毒是食品中毒頭號病因：114年165件，漂白水比例要對、症狀解除48小時再上班',
    update_date:'2026/11/21',
    intro:'依衛福部食品藥物管理署114年食品中毒案件病因物質分類統計，全年食品中毒1,212件，病因判明279件中，諾羅病毒165件、患者1,478人，居所有病因之首；113年則為562件、患者3,634人。病毒性腸胃炎常見症狀為水瀉及嘔吐，潛伏期約10至50小時，疾管署提醒5歲以下幼兒、老人及免疫力較差者症狀會較嚴重。',
    sections:[
      {heading:'疾管署預防與消毒建議',format:'table',table:TABLE},
      {heading:'怎麼傳染',format:'bullets',items:[
        '食入或接觸受汙染的食物、飲水或物品。',
        '吸入病人嘔吐物或排泄物所產生的飛沫。',
        '家中或機構內有人嘔吐時，清理者應先戴手套與口罩，再以5,000 ppm漂白水處理。'
      ]},
      {heading:'餐飲與照護場所',format:'bullets',items:[
        '疾管署呼籲餐飲及旅宿業者加強環境衛生及員工健康管理。',
        '員工有水瀉、嘔吐症狀應儘速就醫並在家休息。',
        '有幼兒、長者的家庭與機構，更需注意症狀較嚴重的族群是否脫水。'
      ]}
    ],
    think_tank_view:'諾羅病毒年年都是食品中毒的頭號病因，而且一個人嘔吐就可能讓全家或整個辦公室中招。關鍵在兩件事：用對比例的漂白水處理嘔吐物，以及生病時真的在家休息到症狀解除48小時後。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'食品中毒病因統計引自食藥署114年資料，症狀、傳染途徑與消毒比例引自疾管署新聞稿，未引用短期疫情數字，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['114年諾羅病毒165件、1,478人，113年562件、3,634人（食藥署食品中毒案件病因物質分類統計）','消毒比例、48小時、潛伏期（疾管署2025-03-11新聞稿）'],
      layout_reason:'先用表格整理消毒與預防做法，再說明傳染途徑，最後給餐飲與照護場所提醒。',
      tone:'專業易懂', tone_reason:'消毒比例需精確。',
      to_verify:['食品中毒件數只涵蓋經調查的食品中毒案件，不代表全部感染']},
    decision_points:[DP_SCOPE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'家人突然上吐下瀉？諾羅病毒清理消毒一次學會',
    update_date:'2026/11/21',
    intro:'冬天常聽到「腸胃型感冒」，其中不少是諾羅病毒。它傳染力很強，家裡一個人吐了，其他人可能接連中標。食藥署統計，114年找得到原因的食品中毒裡，諾羅病毒就有165件，是排名第一的元兇。學會正確清理，就能保護全家。',
    sections:[
      {heading:'清潔消毒小抄',format:'table',table:TABLE},
      {heading:'怎麼被傳染？',format:'bullets',items:[
        '吃到或摸到被污染的食物、水、物品。',
        '吸到病人嘔吐物、排泄物散出的飛沫。'
      ]},
      {heading:'照顧家人時',format:'bullets',items:[
        '清理嘔吐物前，先戴手套和口罩。',
        '小朋友和長輩比較容易嚴重，注意有沒有脫水。',
        '症狀好了2天後再去上班上課。'
      ]}
    ],
    think_tank_view:'把「20 c.c.漂白水加1公升水」寫在清潔用品櫃上，真的遇到時就不會手忙腳亂。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自食藥署統計與疾管署衛教，語氣親切，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家人上吐下瀉的情境帶出消毒與照護。', tone:'生活親切', tone_reason:'給家庭照顧者閱讀。', to_verify:[]},
    decision_points:[DP_SCOPE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'諾羅病毒：消毒比例與48小時',
    update_date:'2026/11/21',
    intro:'114年諾羅病毒居食品中毒病因之首，共165件（食藥署）。正確消毒、生病在家休息是關鍵。',
    sections:[
      {heading:'預防與消毒',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '幼兒、長者注意脫水。',
        '帶殼水產澈底煮熟。'
      ]}
    ],
    think_tank_view:'用對漂白水、休息到症狀解除48小時。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自食藥署統計與疾管署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為做法與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_SCOPE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'諾羅病毒與病毒性腸胃炎', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'諾羅病毒是食品中毒頭號病因', primary_visual:'165 件', secondary_message:'症狀解除 48 小時後再上班上課', action_priority:'洗手、熟食、正確消毒、在家休息'},
    headline_hook:'家人上吐下瀉？', headline_main:'諾羅病毒消毒一次學會', title_accent:'消毒',
    hero_message:'20 c.c. 漂白水＋1 公升水', hero_support:'一般表面 1,000 ppm（疾管署）',
    primary_stat:{value:'165 件', label:'114 年諾羅病毒食品中毒', note:'食藥署｜病因判明案件中居首，患者 1,478 人'},
    action_title:'這樣防諾羅',
    action_cards:[
      {key:'洗', text:'如廁後、備餐前用肥皂洗手'},
      {key:'熟', text:'蚵、貝類等帶殼水產澈底煮熟'},
      {key:'消', text:'嘔吐物用 100 c.c. 漂白水加 1 公升水'},
      {key:'休', text:'症狀解除 48 小時後再上班上課'}
    ],
    notice:'5 歲以下幼兒、老人及免疫力較差者**症狀較嚴重**，注意脫水。',
    carousel_suggestion:{reason:'若想把統計、消毒比例與照護分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'食品中毒頭號病因', headline_main:'114 年諾羅病毒 165 件'},
      {layout_type:'action', headline_hook:'消毒比例', headline_main:'1,000 ppm 與 5,000 ppm'},
      {layout_type:'action', headline_hook:'生病在家', headline_main:'症狀解除 48 小時'}]},
    hashtags:['諾羅病毒','腸胃炎','漂白水消毒','食品衛生'],
    sources:['衛生福利部食品藥物管理署','衛生福利部疾病管制署'],
    illustration_category:'virus-infection',
    illustration:{topic:'居家消毒', audience:'家庭照顧者', scene:'一位戴手套和口罩的家長用量杯調配稀釋漂白水，準備擦拭桌面與門把',
      emotion:'冷靜、有條理', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A parent wearing gloves and a mask measuring diluted bleach with a measuring cup, ready to wipe a table and door handle, calm and organised, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['114年165件（食藥署食品中毒案件病因物質分類統計）','消毒比例（疾管署2025-03-11）'],
      layout_reason:'關鍵是可執行的消毒與作息，選 action：4 個行動當主角，消毒比例當 hero，病因統計退到下方。',
      tone:'專業易懂', tone_reason:'比例要精確好記。',
      to_verify:['件數只涵蓋食品中毒案件']},
    decision_points:[Object.assign({}, DP_SCOPE, {current:'165 件｜114 年諾羅病毒食品中毒'})],
    content_check_note:'病因統計引自食藥署114年資料，消毒比例與建議引自疾管署，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'諾羅病毒與病毒性腸胃炎',
    collect:{
      summary:'依食藥署統計，諾羅病毒是國內食品中毒判明病因的首位，114年165件、患者1,478人，113年更達562件；傳染力強且常在家庭、餐飲與旅宿場所群聚。「洗手、熟食、正確漂白水消毒、症狀解除48小時再上班上課」是值得在冬季前溝通的衛生議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'患者1478人：依食藥署114年食品中毒案件病因物質分類統計，全年食品中毒1212件，病因判明279件中諾羅病毒165件、患者1478人，居所有病因之首。',tag:'官方統計',source:{name:'衛生福利部統計處：食品中毒案件－病因物質分類統計（食藥署編製）',url:'https://dep.mohw.gov.tw/dos/cp-5301-62356-113.html'}},
        {item:'年度趨勢方向',desc:'患者3634人（113年）：諾羅病毒食品中毒案件112年187件、113年增至562件，114年降為165件，件數隨年度流行情況大幅波動。',tag:'官方統計',source:{name:'衛生福利部統計處：食品中毒案件－病因物質分類統計（食藥署編製）',url:'https://dep.mohw.gov.tw/dos/cp-5301-62356-113.html'}},
        {item:'政策動向',desc:'1000 ppm漂白水：疾管署建議以20 c.c.漂白水加1公升清水擦拭受污染物品，嘔吐物與排泄物以100 c.c.漂白水加1公升清水（5,000 ppm）清理，並呼籲餐飲及旅宿業者加強員工健康管理。',tag:'官方統計',source:{name:'衛生福利部：腹瀉疫情仍為近5年最高，籲請民眾、餐飲旅宿業落實衛生',url:'https://mohw.gov.tw/cp-16-81809-1.html'}},
        {item:'好發族群年齡層',desc:'5歲以下幼兒、老人症狀較嚴重：疾管署指出潛伏期約10至50小時，5歲以下幼兒、老人及免疫力較差者症狀會較嚴重，有症狀者應在家休息至症狀解除48小時後。',tag:'官方統計',source:{name:'衛生福利部：腹瀉疫情仍為近5年最高，籲請民眾、餐飲旅宿業落實衛生',url:'https://mohw.gov.tw/cp-16-81809-1.html'}}
      ],
      product_view:['機會：餐飲、旅宿業團體客戶可結合員工健康管理衛教。','機會：家庭照顧者的消毒小抄是實用服務內容。','風險：多數為輕症，避免誇大做商品訴求。'],
      marketing_view:['機會：入冬前是溝通時點。','機會：「漂白水比例」是實用、容易收藏分享的內容。','風險：避免點名特定餐廳或業者。'],
      alert_level:'low',
      alert_reason:'每年固定造成食品中毒與群聚，屬季節性衛教議題；當季疫情交由正式模式查詢。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('諾羅病毒165件、患者1,478人，居所有病因之首','MEDICAL_INTERPRETATION','scope_unstated',
          '文章沒有說明這是經衛生局調查、病因判明的食品中毒「案件」統計，不包括家庭內人傳人或未就醫的腸胃炎，讀者可能以為全年只有1,478人感染。','medium','no',
          null,'no','clarify','補上統計範圍即可。',
          '諾羅病毒165件、患者1,478人（僅含經調查判明病因的食品中毒案件），居所有病因之首'),
        F('113年則為562件、患者3,634人','SOURCE_EVIDENCE','trend_context_missing',
          '文章列出113年與114年數字，但沒有說明兩年差異這麼大的原因，讀者可能誤以為114年防治成效特別好；食藥署統計本身也沒有提供原因。','low','no',
          null,'no','clarify','補一句「件數隨年度流行情況波動」即可。',
          '113年則為562件、患者3,634人，件數隨年度流行情況波動'),
        F('其中不少是諾羅病毒','SOURCE_EVIDENCE','claim_without_data',
          '生活親切版說「腸胃型感冒其中不少是諾羅病毒」，引用來源沒有腸胃炎病因比例的數據。','low','no',
          null,'no','clarify','改為不帶比例的說法。',
          '有些可能是諾羅病毒等病毒引起的腸胃炎'),
        F('症狀好了2天後再去上班上課','TERMINOLOGY_LANGUAGE','paraphrase_drift',
          '疾管署原文是「症狀解除48小時後」，生活親切版改成「好了2天後」，意思相近但較模糊。','low','no',
          null,'no','clarify','保留原文時數即可。',
          '症狀完全解除48小時後再去上班上課')
      ],
      card:[
        F('114 年諾羅病毒食品中毒','MEDICAL_INTERPRETATION','scope_unstated',
          '主數字「165 件」是食品中毒案件數，不是感染人數，卡面標籤容易被讀成全年只有165人或165起感染。','low','no',
          null,'no','clarify','標籤補上「案件」性質。',
          '114 年諾羅病毒食品中毒案件'),
        F('一般表面 1,000 ppm（疾管署）','TERMINOLOGY_LANGUAGE','detail_missing',
          'hero 只寫一般表面比例，嘔吐物需要更高濃度（5,000 ppm），讀者可能用錯比例處理嘔吐物。','medium','no',
          null,'no','clarify','可補一句嘔吐物比例。',
          '一般表面 1,000 ppm，嘔吐物 5,000 ppm（疾管署）')
      ]
    },
    title_alts:[
      '諾羅病毒是食品中毒頭號病因：114年165件，漂白水比例要對、症狀解除48小時再上班',
      '家人突然上吐下瀉？諾羅病毒清理消毒一次學會',
      '食品中毒頭號病因：諾羅病毒的年度統計、傳染途徑與預防'
    ],
    card_title_alts:[
      ['家人上吐下瀉？','諾羅病毒消毒一次學會'],
      ['食品中毒頭號病因','114 年諾羅病毒 165 件'],
      ['生病在家休息','症狀解除 48 小時']
    ],
    data_addon:[
      '食藥署食品中毒案件病因物質分類統計：諾羅病毒112年187件（1,658人）、113年562件（3,634人）、114年165件（1,478人）。',
      '114年食品中毒共1,212件、患者5,650人，病因判明279件。',
      '疾管署：一般表面20 c.c.漂白水加1公升清水（1,000 ppm）；嘔吐物、排泄物100 c.c.加1公升清水（5,000 ppm）。'
    ],
    cta:'把「20 c.c.漂白水＋1公升水」與「100 c.c.＋1公升水」寫在清潔櫃上，入冬前先備好手套與口罩。'
  });
})();
