/* v6 示範主題：醫美療程風險（B11 第二輪擴充）
   查證日期：2026-11-23。數據來源：衛福部醫事司107-07-22新聞稿（8類特定美容醫學手術、各類專科資格、麻醉人員規定、99床以下應訂緊急後送轉診計畫）、
   衛福部108-07-08新聞稿（特管辦法107年9月6日修正發布、108年1月實施、168家核准機構、美容醫學資訊專區）、
   衛福部114-12-04新聞稿（114年11月14日預告特管辦法修正草案：PGY、11個部定專科、輔導認證）。修正草案施行日期未查到，文中寫「預告」。
   參考方向：健康智庫〈追求美麗前，麻醉風險必知指南！〉2024/12/16。 */
(function(){
  const REFS = [
    {title:'8類美容醫學手術將登記列管 提升手術麻醉與病人安全',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-42855-1.html'},
    {title:'衛福部已公布168家美容醫學手術機構，保障民眾就醫安全與權益',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48371-1.html'},
    {title:'衛福部與醫界達成共識 終結「直美」並強化美容醫學手術管理',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-84748-1.html'},
    {title:'美容醫學資訊專區',source:'衛生福利部醫事司',url:'https://dep.mohw.gov.tw/DOMA/lp-3240-106.html'}
  ];
  const TABLE = {headers:['衛福部規範重點','內容'], rows:[
    ['8類特定美容醫學手術','削骨、中臉部與臉頸部拉皮、鼻整形、義乳植入、大量抽脂、腹部整形、全身拉皮等，須經地方衛生局核准登記'],
    ['醫師資格','依手術類別限定專科醫師；無該專科資格者須受訓領證並經核准'],
    ['麻醉人員','全身麻醉或深度鎮靜須由麻醉科醫師執行；中度或輕度鎮靜須另有受過訓練的醫師在場'],
    ['緊急後送','99床以下醫院及診所應訂有緊急後送轉診計畫'],
    ['2025年修正草案','預告醫師須完成PGY訓練才能從事美容醫學、美容醫學手術限11個部定專科（施行以正式公告為準）']
  ]};
  const TAGS = ['醫美','美容醫學','麻醉安全','醫療消費','特管辦法'];

  const DP_REG = {id:'dp-aesth-reg', type:'policy_status', title:'醫美法規有現行與預告兩個版本',
    desc:'特管辦法107年修正、108年1月起實施的版本已在執行；衛福部114年11月預告的修正草案（PGY、11個專科、輔導認證）尚未查到正式施行日期。兩者效力不同，AI 沒有替你挑選。',
    current:'預告醫師須完成PGY訓練才能從事美容醫學',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'現行', value:'108年1月實施', note:'8類手術登記列管、麻醉與轉診規定'},
      {label:'預告', value:'114年11月14日', note:'修正草案，施行日期以正式公告為準（目前採用描述）'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'做醫美前先確認4件事：衛福部規範與麻醉風險',
    update_date:'2026/11/23',
    intro:'醫美療程看似輕鬆，但只要涉及手術或麻醉，就有一定風險。衛福部依「特定醫療技術檢查檢驗醫療儀器施行或使用管理辦法」（特管辦法），自108年1月起將削骨、拉皮、隆乳、大量抽脂等8類特定美容醫學手術納入登記列管，並規定麻醉人員資格與緊急後送轉診計畫。114年11月14日衛福部再預告修正草案，要求醫師須完成PGY訓練才能從事美容醫學。',
    sections:[
      {heading:'衛福部美容醫學規範重點',format:'table',table:TABLE},
      {heading:'麻醉是醫美最需要注意的風險',format:'bullets',items:[
        '靜脈鎮靜麻醉（如俗稱「牛奶針」的丙泊酚）屬麻醉藥物，可能造成呼吸抑制，每個人的反應不同。',
        '術前應如實告知病史、用藥、過敏史與是否禁食，並確認由誰執行麻醉、現場有無監測設備。',
        '詳閱手術同意書與麻醉同意書，確認麻醉方式與執行人員資格。'
      ]},
      {heading:'選擇醫美機構前',format:'bullets',items:[
        '在衛福部醫事司「美容醫學資訊專區」或地方衛生局網站查詢核准施行特定美容醫學手術的機構名單。',
        '確認施術醫師的專科資格，避免只看價格或網紅推薦。',
        '問清楚術後照護方式、可能併發症與緊急狀況的後送醫院。'
      ]}
    ],
    think_tank_view:'醫美是醫療行為，不是一般美容消費。衛福部的規範提供了基本的安全底線，但消費者自己多問一句「誰幫我麻醉、出事送哪裡」，往往就是安全的關鍵。比起療程折扣，醫師資格、麻醉安排與緊急後送計畫更值得花時間確認。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'法規內容引自衛福部新聞稿並標明發布與實施時間，修正草案標示為預告階段；未推薦特定機構或療程，未使用療效保證用語。',
    ai_rationale:{basis:['8類手術、專科資格、麻醉與轉診規定取自衛福部107年新聞稿','114年修正草案內容取自衛福部114-12-04新聞稿'],
      layout_reason:'先用表格整理衛福部規範，讓讀者知道合法的標準，再說明麻醉風險，最後給選擇機構的具體方法。',
      tone:'專業易懂', tone_reason:'法規內容需精確、標明效力。',
      to_verify:['114年修正草案的正式施行日期','現行條文是否於107年後再有修正']},
    decision_points:[DP_REG]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'想變美也要平安：醫美前一定要問的4個問題',
    update_date:'2026/11/23',
    intro:'打個針、做個小手術就能變美，聽起來很吸引人，但只要用到麻醉，就不是零風險。衛福部從108年1月起，把削骨、拉皮、隆乳、大量抽脂等8類手術納入管理，也規定了誰可以做麻醉、診所要有緊急後送計畫。114年11月衛福部也預告，醫師要完成PGY訓練才能做醫美。',
    sections:[
      {heading:'衛福部怎麼管醫美',format:'table',table:TABLE},
      {heading:'麻醉前要問清楚',format:'bullets',items:[
        '俗稱「牛奶針」的靜脈麻醉也是麻醉藥，可能讓呼吸變慢。',
        '把自己的病史、吃的藥、過敏都說清楚。',
        '問：誰幫我麻醉？有沒有監測儀器？'
      ]},
      {heading:'挑診所小撇步',format:'bullets',items:[
        '上衛福部「美容醫學資訊專區」查核准名單。',
        '看醫師是不是相關專科，不要只看價格。',
        '問清楚萬一出狀況會送去哪家醫院。'
      ]}
    ],
    think_tank_view:'變美是自己的選擇，平安是最基本的條件。下次諮詢時，把「誰幫我麻醉、出事送哪裡」這兩個問題問出口，比砍價更重要。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'法規內容引自衛福部並標明時間與預告狀態，未推薦特定機構或療程，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以想做醫美的讀者角度，依法規、麻醉、挑診所排列。', tone:'生活親切', tone_reason:'給年輕女性與一般消費者。', to_verify:['修正草案施行日期']},
    decision_points:[DP_REG]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'醫美風險：麻醉與資格先確認',
    update_date:'2026/11/23',
    intro:'衛福部自108年1月起將8類特定美容醫學手術登記列管，並規範麻醉人員與緊急後送；114年11月預告醫師須完成PGY訓練。',
    sections:[
      {heading:'規範重點',format:'table',table:TABLE},
      {heading:'麻醉風險',format:'bullets',items:[
        '靜脈鎮靜也是麻醉，可能抑制呼吸。',
        '詳閱手術與麻醉同意書。'
      ]},
      {heading:'選擇機構',format:'bullets',items:[
        '查美容醫學資訊專區核准名單。',
        '確認醫師專科與後送醫院。'
      ]}
    ],
    think_tank_view:'醫美是醫療行為，先確認醫師資格、麻醉安排與後送計畫。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'法規內容引自衛福部並標明時間，未推薦特定機構或療程。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為規範、麻醉、選擇機構三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['修正草案施行日期']},
    decision_points:[DP_REG]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'醫美療程風險', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'醫美是醫療行為，有麻醉就有風險', primary_visual:'8 類手術列管', secondary_message:'99 床以下院所須有後送計畫', action_priority:'醫美前問 4 件事'},
    headline_hook:'醫美也是醫療行為', headline_main:'療程前先問這 4 件事', title_accent:'這 4 件事',
    hero_message:'8 類手術登記列管', hero_support:'衛福部特管辦法，108 年 1 月起實施',
    primary_stat:{value:'8 類', label:'特定美容醫學手術須核准登記', note:'削骨、拉皮、鼻整形、隆乳、大量抽脂等'},
    action_title:'療程前這樣確認',
    action_cards:[
      {key:'查', text:'上美容醫學資訊專區查核准機構'},
      {key:'醫', text:'確認施術醫師的專科資格'},
      {key:'麻', text:'問清楚麻醉方式與執行人員'},
      {key:'送', text:'確認緊急狀況的後送醫院'}
    ],
    notice:'全身麻醉或深度鎮靜須由**麻醉科醫師**執行。',
    carousel_suggestion:{reason:'若想把法規、麻醉與挑選機構分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'衛福部怎麼管', headline_main:'8 類手術登記列管'},
      {layout_type:'knowledge', headline_hook:'麻醉風險', headline_main:'靜脈鎮靜也是麻醉'},
      {layout_type:'action', headline_hook:'挑選醫美機構', headline_main:'先問這 4 件事'}]},
    hashtags:['醫美','美容醫學','麻醉安全','醫療消費'],
    sources:['衛生福利部'],
    illustration_category:'general',
    illustration:{topic:'醫美諮詢安全', audience:'考慮醫美療程的成年人', scene:'一位年輕女性在診所諮詢室仔細閱讀同意書，對面醫師正在說明',
      emotion:'謹慎、理性', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young woman carefully reading a consent form in a clinic consultation room while a doctor explains across the desk, cautious and rational mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['8類手術、麻醉與轉診規定取自衛福部新聞稿'],
      layout_reason:'核心訊息是「做之前要確認」，選 action：4 個確認行動當主角，8 類列管當背景。',
      tone:'專業易懂', tone_reason:'法規資訊需清楚可執行。',
      to_verify:['現行條文是否再修正']},
    decision_points:[Object.assign({}, DP_REG, {current:'現行｜108 年 1 月起 8 類手術登記列管'})],
    content_check_note:'法規內容引自衛福部並標明實施時間，未推薦特定機構或療程，未使用療效保證用語。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'醫美療程風險',
    collect:{
      summary:'醫美需求持續存在，麻醉與術後併發症事件時有所聞；衛福部自108年起將8類特定美容醫學手術登記列管並規範麻醉與後送，114年11月再預告修正草案強化醫師資格，是兼具法規與消費者安全的溝通議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'168家核准機構：截至108年5月底，經地方衛生局核准施行特定美容醫學手術的機構共168家（醫院60家、診所108家），名單公布於衛福部美容醫學資訊專區，此後未見更新的全國統計。',tag:'官方統計',source:{name:'衛福部：已公布168家美容醫學手術機構',url:'https://mohw.gov.tw/cp-16-48371-1.html'}},
        {item:'年度趨勢方向',desc:'8類特定美容醫學手術登記列管：特管辦法107年9月6日修正發布、108年1月起實施，削骨、拉皮、鼻整形、義乳植入、大量抽脂、腹部整形等須經核准登記，並依類別限定專科醫師。',tag:'官方統計',source:{name:'衛福部：8類美容醫學手術將登記列管',url:'https://mohw.gov.tw/cp-16-42855-1.html'}},
        {item:'政策動向',desc:'11個部定專科：衛福部114年11月14日預告特管辦法修正草案，108年以後畢業的醫師須完成PGY訓練才能從事美容醫學，美容醫學手術限11個部定專科醫師施作，診所先以輔導認證取代強制評鑑。',tag:'官方統計',source:{name:'衛福部：終結「直美」並強化美容醫學手術管理',url:'https://mohw.gov.tw/cp-16-84748-1.html'}},
        {item:'好發族群年齡層',desc:'99床以下院所須訂緊急後送轉診計畫：全身麻醉或深度鎮靜須由麻醉科醫師執行，中度或輕度鎮靜須另有受過訓練的醫師在場。',tag:'官方統計',source:{name:'衛福部：8類美容醫學手術將登記列管',url:'https://mohw.gov.tw/cp-16-42855-1.html'}}
      ],
      product_view:['機會：可說明非醫療必要的美容手術與一般醫療保障的差異，協助保戶理解條款。','機會：「醫美前確認清單」可作為保戶服務內容。','風險：不得推薦特定醫美機構或療程，也不得暗示保險給付美容醫療。'],
      marketing_view:['機會：醫美事件新聞出現時，以衛福部規範為主軸的衛教內容具參考價值。','機會：年輕族群是主要溝通對象，可用「4個問題」清單形式呈現。','風險：避免容貌焦慮訴求與療程前後對比，不得具名評論個別事件。'],
      alert_level:'medium',
      alert_reason:'衛福部114年11月預告特管辦法修正草案，後續正式公告與施行可作為溝通時點。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('如俗稱「牛奶針」的丙泊酚','SOURCE_EVIDENCE','claim_without_source',
          '丙泊酚的風險說明未附出處，參考資料中的衛福部新聞稿未提及此藥物。','low','no',
          null,'no','clarify','建議補食藥署或醫學會資料。',
          '如俗稱「牛奶針」的丙泊酚（靜脈麻醉藥物，相關風險可參考麻醉醫學會資料）',
          ['俗稱「牛奶針」的靜脈麻醉也是麻醉藥']),
        F('要求醫師須完成PGY訓練才能從事美容醫學','COMPLIANCE_LEGAL','draft_as_enacted',
          '修正草案仍在預告階段，「要求」可能讓讀者誤以為已生效；且PGY規定針對108年以後畢業醫師，108年前畢業者另有過渡規定。','medium','yes',
          '特管辦法修正條文正式公告與施行日期。','yes','confirm','法規狀態會變動。',
          '預告修正草案，擬要求108年以後畢業醫師完成PGY訓練才能從事美容醫學'),
        F('衛福部的規範提供了基本的安全底線','MEDICAL_INTERPRETATION','overreassurance',
          '容易讓讀者以為只要合法機構就沒有風險，規範只能降低而非排除風險。','low','no',
          null,'no','revise','避免過度安心的表述。',
          '衛福部的規範降低了部分風險'),
        F('8類特定美容醫學手術','DATA_FACTUAL_ACCURACY','list_incomplete',
          '文中只列出部分類別，未完整列出8類，讀者難以對照自己的療程是否在列管範圍。','low','no',
          null,'no','clarify','完整清單見衛福部107年新聞稿。',
          '8類特定美容醫學手術（完整清單見衛福部美容醫學資訊專區）')
      ],
      card:[
        F('確認施術醫師的專科資格','TERMINOLOGY_LANGUAGE','how_to_missing',
          '卡面未說明如何確認專科資格，讀者不知道去哪裡查。','low','no',
          null,'no','clarify','可查衛福部醫事人員查詢或詢問院所。',
          '向院所確認施術醫師的專科證書'),
        F('衛福部特管辦法，108 年 1 月起實施','CURRENCY_TIMELINESS','pending_amendment',
          '卡面只寫現行版本，未提示114年已預告修正草案，資訊可能不完整。','low','no',
          null,'no','clarify','修正草案尚未施行。',
          '衛福部特管辦法，108 年起實施（114 年已預告修正）')
      ]
    },
    title_alts:[
      '做醫美前先確認4件事：衛福部規範與麻醉風險',
      '想變美也要平安：醫美前一定要問的4個問題',
      '醫美是醫療行為：特定美容醫學手術管理與消費者自保'
    ],
    card_title_alts:[
      ['醫美也是醫療行為','療程前先問這 4 件事'],
      ['想變美也要平安','醫美前確認清單'],
      ['有麻醉就有風險','醫美安全 4 步驟']
    ],
    data_addon:[
      '8類特定美容醫學手術：削骨、中臉部與臉頸部拉皮、鼻整形、義乳植入之乳房整形、大量抽脂、腹部整形、全身拉皮等。',
      '美容醫學品質認證截至108年6月底共92家次參加（醫策會推動）。',
      '衛福部建議民眾詳閱手術同意書、麻醉同意書之內容與執行醫師資歷。'
    ],
    cta:'預約醫美諮詢前，先到衛福部美容醫學資訊專區查詢機構，諮詢時問清楚醫師專科、麻醉方式與後送醫院。'
  });
})();
