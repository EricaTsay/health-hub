/* v6 示範主題：結核病（B8 傳染病防治）
   查證日期：2026-11-20。數據來源：疾管署世界結核病日新聞稿（2025-03-24、2026-03-24，衛福部網站轉載）。
   參考方向：健康智庫〈傳染疾病－結核病〉2025/06。 */
(function(){
  const REFS = [
    {title:'「消除結核 社區同行」 群策群力響應世界結核病日',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-85919-1.html'},
    {title:'舉手一起篩，結核說掰掰：呼籲民眾重視潛伏結核感染的檢驗及治療',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-81981-1.html'}
  ];
  const TABLE = {headers:['疑似症狀','怎麼做'], rows:[
    ['咳嗽超過2週','盡快就醫，主動告知咳嗽多久'],
    ['胸痛、體重減輕','合併咳嗽時要安排胸部X光'],
    ['發燒、食慾不振','長時間未改善，請醫師評估結核病可能'],
    ['胸部X光異常','即使沒有症狀也要回診確認']
  ]};
  const TAGS = ['結核病','肺結核','潛伏結核感染','咳嗽2週','傳染病防治'];

  const DP_RATE = {id:'dp-tb-year', type:'data_version', title:'2025年只公布發生率',
    desc:'疾管署2026年世界結核病日新聞稿公布2025年發生率約每10萬人口25例，但未在新聞稿列出新案人數；2024年則有「每10萬人口27例（6,222人）」的預估值。AI 沒有替你換算或補上媒體報導的人數。',
    current:'2025年發生率每10萬人口約25例（疾管署）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約 25 例／10 萬', value:'2025 年', note:'疾管署2026年新聞稿，未列人數（目前採用）'},
      {label:'27 例／10 萬（6,222 人）', value:'2024 年預估', note:'疾管署2025年新聞稿'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'結核病還很常見嗎？咳嗽超過2週要就醫，潛伏感染也能治療',
    update_date:'2026/11/20',
    intro:'依疾病管制署2026年世界結核病日公布，2025年我國結核病新案發生率降至每10萬人口約25例，相較2005年的73例累積下降66%。雖然持續下降，結核病仍是國內最常見的法定傳染病之一，疾管署以2035年消除結核為目標。本文整理結核病的症狀警訊、潛伏結核感染的檢驗與治療，以及高風險族群。',
    sections:[
      {heading:'這些症狀要就醫',format:'table',table:TABLE},
      {heading:'潛伏結核感染：沒症狀也能先治療',format:'bullets',items:[
        '潛伏結核感染者體內有結核菌但沒有發病，不具傳染力，但未來可能發病。',
        '疾管署指出，2024年共提供115,547人潛伏結核感染檢驗，檢驗陽性者有13,791人加入治療。',
        '及早治療並規律服藥，可降低約9成的發病風險（台灣結核暨肺部疾病醫學會）。'
      ]},
      {heading:'哪些人要特別注意',format:'bullets',items:[
        '結核病人的接觸者，以及免疫功能不佳者。',
        '照護機構住民、洗腎、慢性阻塞性肺病、糖尿病控制不佳者。',
        '確診結核病一定要完成全程治療，中斷服藥可能產生抗藥性。'
      ]}
    ],
    think_tank_view:'結核病的發生率雖然逐年下降，但「咳嗽超過2週」仍是最容易被忽略的警訊。對高風險族群來說，潛伏結核感染的檢驗與治療是把風險擋在發病之前的關鍵；而對確診者來說，完成全程治療才能保護自己與家人。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'發生率與檢驗人數引自疾管署新聞稿並標明年份，保護力標明為醫學會說法，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['2025年發生率每10萬人口約25例（疾管署2026年新聞稿）','2024年LTBI檢驗115,547人、治療13,791人（疾管署2025年新聞稿）'],
      layout_reason:'先用表格讓讀者對照症狀，再說明潛伏感染的檢驗與治療，最後點出高風險族群。',
      tone:'專業易懂', tone_reason:'傳染病衛教需要精確、不污名化。',
      to_verify:['2025年新案人數疾管署新聞稿未列出']},
    decision_points:[DP_RATE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'咳嗽咳了2週還沒好？認識結核病，早發現早治療',
    update_date:'2026/11/20',
    intro:'結核病聽起來像是過去的疾病，其實現在仍然存在。疾管署公布，2025年每10萬人約有25人新得到結核病，雖然比20年前少了將近7成，但還沒消失。好消息是，結核病可以治療，連「還沒發病」的潛伏感染也能先吃藥預防。',
    sections:[
      {heading:'有這些狀況，記得去看醫生',format:'table',table:TABLE},
      {heading:'沒症狀也可能有「潛伏感染」',format:'bullets',items:[
        '潛伏感染是身體裡有結核菌但還沒發病，不會傳染給別人。',
        '2024年有超過11萬人接受潛伏感染檢驗，約1萬3千多人開始治療。',
        '醫學會指出，規律吃完藥，可以降低約9成發病風險。'
      ]},
      {heading:'這些人要多留意',format:'bullets',items:[
        '家人或同事曾得過結核病。',
        '住在照護機構、洗腎，或糖尿病控制不好的人。',
        '確診後一定要把藥吃完，不能自己停藥。'
      ]}
    ],
    think_tank_view:'咳嗽很常見，但咳超過2週就不要再拖。如果家人曾得過結核病，也可以問問衛生所能不能做潛伏感染檢驗，早一步處理最安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署新聞稿並標明年份，語氣親切且避免污名化，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以生活化問句帶出症狀、潛伏感染與族群。', tone:'生活親切', tone_reason:'給一般民眾與照顧者閱讀。', to_verify:[]},
    decision_points:[DP_RATE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'結核病：咳嗽2週就醫＋潛伏感染治療',
    update_date:'2026/11/20',
    intro:'2025年結核病發生率每10萬人口約25例，較2005年降66%。咳嗽超過2週要就醫，高風險族群可做潛伏結核感染檢驗。',
    sections:[
      {heading:'就醫警訊',format:'table',table:TABLE},
      {heading:'重點提醒',format:'bullets',items:[
        '潛伏感染規律治療可降低約9成發病風險。',
        '確診者必須完成全程治療。'
      ]}
    ],
    think_tank_view:'咳嗽超過2週就醫、高風險族群及早檢驗，是消除結核最實際的兩步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_RATE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'結核病', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'結核病發生率 20 年降 66%，但還沒消失', primary_visual:'約 25 例', secondary_message:'咳嗽超過 2 週要就醫', action_priority:'就醫、檢驗、完成治療'},
    headline_hook:'結核病還沒消失', headline_main:'咳嗽超過 2 週要就醫', title_accent:'超過 2 週',
    primary_stat:{kicker:'2025 年・發生率', value:'約 25 例', label:'每 10 萬人口結核病新案', note:'疾管署｜較 2005 年降 66%'},
    chart:{type:'bar', title:'結核病新案發生率（每 10 萬人口）', points:[
      {label:'2005', value:73, display:'73'},
      {label:'2024', value:27, display:'27'},
      {label:'2025', value:25, display:'約 25', highlight:true}
    ], note:'疾管署世界結核病日新聞稿｜2024 年為預估值'},
    secondary_stats:[
      {value:'約 9 成', label:'潛伏感染治療降發病風險'},
      {value:'13,791 人', label:'2024 年加入潛伏感染治療'}
    ],
    action_title:'這樣保護自己與家人',
    action_cards:[
      {key:'醫', text:'咳嗽超過 2 週、胸痛、體重減輕就醫'},
      {key:'篩', text:'接觸者與高風險族群做潛伏感染檢驗'},
      {key:'服', text:'確診或潛伏感染，規律服藥不中斷'},
      {key:'罩', text:'咳嗽時戴口罩，保持室內通風'}
    ],
    carousel_suggestion:{reason:'若想把趨勢、症狀與潛伏感染分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'結核病還沒消失', headline_main:'2025 年每 10 萬人約 25 例'},
      {layout_type:'knowledge', headline_hook:'疑似症狀', headline_main:'咳嗽超過 2 週要就醫'},
      {layout_type:'action', headline_hook:'潛伏結核感染', headline_main:'沒症狀也能先治療'}]},
    hashtags:['結核病','潛伏結核感染','咳嗽2週','傳染病防治'],
    sources:['衛生福利部疾病管制署','台灣結核暨肺部疾病醫學會'],
    illustration_category:'virus-infection',
    illustration:{topic:'結核病', audience:'一般民眾與高風險族群家屬', scene:'一位戴口罩的中年人在診間看胸部X光片，醫師在旁說明',
      emotion:'安心、被照顧', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged person wearing a mask looking at a chest X-ray in a clinic while a doctor explains, reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['2025年發生率約25例、2005年73例（疾管署2026年新聞稿）','2024年27例為疾管署預估值'],
      layout_reason:'關鍵訊息是「持續下降但還沒消失」，選 data：發生率當主角，趨勢放右側，潛伏感染治療數字退到第二層，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'避免污名化，強調可治療。',
      to_verify:['2024年27例為預估值']},
    decision_points:[Object.assign({}, DP_RATE, {current:'約 25 例｜2025 年每 10 萬人口發生率'})],
    content_check_note:'發生率與治療人數引自疾管署並標明年份，保護力標明醫學會說法，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'結核病',
    collect:{
      summary:'我國結核病發生率二十年來累積下降約三分之二，2025年降至每10萬人口約25例，但仍是常見的法定傳染病；疾管署以2035年消除結核為目標，推動潛伏結核感染檢驗與治療，「咳嗽超過2週就醫」是值得長期溝通的防治訊息。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約25例（每10萬人口）：疾管署公布2025年結核病新案發生率降至每10萬人口約25例，相較2005年每10萬人口73例累積降幅達66%。',tag:'官方統計',source:{name:'衛生福利部：「消除結核 社區同行」 群策群力響應世界結核病日',url:'https://mohw.gov.tw/cp-16-85919-1.html'}},
        {item:'年度趨勢方向',desc:'預估27例（每10萬人口）：疾管署2025年新聞稿指出，2024年結核病新案發生率預估為每10萬人口27例（6,222人），2005年為16,472人、每10萬人口73例。',tag:'官方統計',source:{name:'衛生福利部：舉手一起篩，結核說掰掰',url:'https://mohw.gov.tw/cp-16-81981-1.html'}},
        {item:'政策動向',desc:'約1.4萬人加入潛伏結核感染治療：疾管署2024年共提供115,547人潛伏結核感染檢驗、13,791人加入治療，並逐步擴大風險族群的篩檢與治療，朝2035年消除結核目標推進。',tag:'官方統計',source:{name:'衛生福利部：舉手一起篩，結核說掰掰',url:'https://mohw.gov.tw/cp-16-81981-1.html'}},
        {item:'好發族群年齡層',desc:'潛伏感染治療可降低約9成發病風險：台灣結核暨肺部疾病醫學會於疾管署記者會指出，接觸者、免疫功能不佳、照護機構住民、洗腎、慢性阻塞性肺病與糖尿病控制不佳者為高風險族群。',tag:'官方統計',source:{name:'衛生福利部：「消除結核 社區同行」 群策群力響應世界結核病日',url:'https://mohw.gov.tw/cp-16-85919-1.html'}}
      ],
      product_view:['機會：結核病治療期長，可說明住院與門診醫療保障的條款範圍，協助保戶理解長期治療的支出。','機會：高齡與照護機構族群為風險重點，可結合長輩健康管理與家屬衛教。','風險：避免對確診者或特定族群的污名化表述，並依保單條款如實說明法定傳染病相關給付。'],
      marketing_view:['機會：每年3月24日世界結核病日是固定溝通時點。','機會：「咳嗽超過2週」是簡單好記的行動訊息，適合社群短文。','風險：傳染病題材避免恐慌與污名化，強調「可治療、可預防」。'],
      alert_level:'low',
      alert_reason:'發生率持續下降，屬長期防治議題，適合在世界結核病日前後納入年度溝通規劃。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('結核病仍是國內最常見的法定傳染病之一','SOURCE_EVIDENCE','claim_without_data',
          '文中沒有提供「最常見」的比較依據（如與其他法定傳染病的年度病例數比較），疾管署兩篇新聞稿也沒有這個說法。','medium','yes',
          '疾管署年度法定傳染病確定病例數排序。','no','confirm','說法可能成立，但目前無出處。',
          '結核病仍是國內需要持續防治的重要法定傳染病'),
        F('可降低約9成的發病風險','COMPLIANCE_RISK','efficacy_claim',
          '專業易懂版已標明出自醫學會，但「降低約9成」前的條件只有「及早治療並規律服藥」，沒有提醒須完成整個療程，讀者可能以為吃一段時間就有效。','low','no',
          null,'no','clarify','數字引述正確，補上完成療程的條件即可。',
          '完成整個療程，可降低約9成的發病風險'),
        F('比20年前少了將近7成','MEDICAL_INTERPRETATION','rounding',
          '官方數字是累積降幅66%，生活親切版寫成「將近7成」，四捨五入方向偏大。','low','no',
          null,'no','clarify','建議用「約3分之2」較貼近原數字。',
          '比20年前少了約3分之2'),
        F('約1萬3千多人開始治療','SOURCE_EVIDENCE','year_unstated',
          '「約1萬3千多人」與前一句共用2024年，但被拆成兩句後，這句單獨被引用時看不出年份與出處。','low','no',
          null,'no','clarify','補上年份與單位即可。',
          '2024年約1萬3千多人開始潛伏感染治療（疾管署）')
      ],
      card:[
        F('2024 年為預估值','SOURCE_EVIDENCE','mixed_status',
          '直條圖把2024年預估值與2005年、2025年數字並列，只在註腳說明；讀者可能把三個點都當成定案統計。','low','no',
          null,'no','clarify','可在長條標籤上直接標示「預估」。',
          '2024 年為疾管署預估值，2025 年為公布值'),
        F('潛伏感染治療降發病風險','COMPLIANCE_RISK','efficacy_claim',
          '次數字「約 9 成」沒有標示是醫學會說法，也沒有「完成療程」的前提，卡面容易被讀成保證效果。','medium','no',
          null,'no','clarify','屬條件與出處標示問題。',
          '完成潛伏感染治療可降發病風險（醫學會）')
      ]
    },
    title_alts:[
      '結核病還很常見嗎？咳嗽超過2週要就醫，潛伏感染也能治療',
      '咳嗽咳了2週還沒好？認識結核病與潛伏結核感染',
      '2035消除結核：結核病發生率趨勢與高風險族群'
    ],
    card_title_alts:[
      ['結核病還沒消失','咳嗽超過 2 週要就醫'],
      ['20 年降 66%','結核病發生率趨勢'],
      ['沒症狀也能治療','認識潛伏結核感染']
    ],
    data_addon:[
      '2005年結核病新案16,472人、每10萬人口73例（疾管署）。',
      '2024年潛伏結核感染檢驗115,547人，陽性加入治療13,791人。',
      '疾管署以2035年消除結核為目標。'
    ],
    cta:'咳嗽超過2週就安排就醫；家人曾確診結核病，可洽衛生所詢問潛伏感染檢驗。'
  });
})();
