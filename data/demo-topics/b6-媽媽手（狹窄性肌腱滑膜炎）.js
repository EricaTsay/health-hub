/* v6 示範主題：媽媽手（狹窄性肌腱滑膜炎）（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-21。資料來源：長庚醫院衛教資料〈認識媽媽手～談狹窄性肌腱滑膜炎〉、長庚醫訊、香港大學骨科衛教、TVBS健康2.0 衛教報導。
   查無國內官方媽媽手就醫人數或盛行率統計，本題不寫統計數字，以症狀辨識與照護行動為主。
   參考方向：健康智庫〈「媽媽手」人人都可能有 別讓它找上門！〉2025/12。 */
(function(){
  const CG1 = 'https://www1.cgmh.org.tw/intr/intr2/c3270/F/C/C2%20%E8%AA%8D%E8%AD%98%E5%AA%BD%E5%AA%BD%E6%89%8B~%E8%AB%87%E7%8B%B9%E7%AA%84%E6%80%A7%E8%82%8C%E8%85%B1%E6%BB%91%E8%86%9C%E7%82%8E.pdf';
  const CG2 = 'https://www.cgmh.org.tw/cgmn/cgmn_file/1912015.pdf';
  const HKU = 'https://www.ortho.hku.hk/?p=5531';
  const TV = 'https://health.tvbs.com.tw/nutrition/324862';
  const REFS = [
    {title:'認識媽媽手～談狹窄性肌腱滑膜炎（衛教資料）',source:'長庚紀念醫院',url:CG1},
    {title:'長庚醫訊：媽媽手',source:'長庚紀念醫院',url:CG2},
    {title:'媽媽手（狹窄性腱鞘炎）衛教',source:'香港大學骨科學系',url:HKU},
    {title:'媽媽手衛教報導',source:'TVBS健康2.0',url:TV}
  ];
  const TABLE = {headers:['症狀','說明'], rows:[
    ['拇指根部疼痛','大拇指靠近手腕處持續疼痛或腫脹，嚴重時無法出力'],
    ['動作時加劇','抓、捏、擰毛巾、抱小孩、滑手機時更痛'],
    ['可能摸到腫塊','手腕拇指側摸到凸起或壓痛點'],
    ['少數手麻','鄰近神經受壓迫，可能出現麻木或針刺感']
  ]};
  const TAGS = ['媽媽手','狹窄性肌腱滑膜炎','手腕痛','滑手機','新手爸媽'];

  const DP_TEST = {id:'dp-dq-test', type:'context', title:'自我檢測的使用情境',
    desc:'芬克斯坦測試（拇指包在四指內握拳、手腕往小指側彎）可作為初步自我評估，但不能取代醫師診斷；疼痛劇烈時不建議反覆測試。AI 已在文中註明，是否保留自我檢測段落由你決定。',
    current:'保留自我檢測，並註明不能取代診斷',
    options:[{label:'沿用目前寫法', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'媽媽手不只媽媽會有：拇指根部痛，先停下重複動作',
    update_date:'2026/11/21',
    intro:'媽媽手的正式名稱是「狹窄性肌腱滑膜炎」，是手腕拇指側的肌腱與腱鞘因反覆摩擦而發炎，造成拇指根部疼痛、腫脹，嚴重時無法出力。長庚醫院衛教資料指出，典型檢查為芬克斯坦測試；新手爸媽、長時間單手滑手機或使用滑鼠的上班族、需要反覆抓握扭轉的工作者，都是高風險族群。國內目前查無媽媽手的官方就醫人數統計。',
    sections:[
      {heading:'媽媽手的4個症狀',format:'table',table:TABLE},
      {heading:'治療方式',format:'bullets',items:[
        '急性期先暫停重複的抓、捏、擰與提重物動作，可冰敷減輕疼痛。',
        '醫師常以藥物、調整姿勢、護具固定休息與復健治療為主，必要時評估局部注射。',
        '保守治療無效或反覆發作者，可由醫師評估腱鞘切開手術。'
      ]},
      {heading:'日常預防',format:'bullets',items:[
        '抱嬰兒時用手臂與身體承托，避免只用虎口出力。',
        '滑手機改用雙手或放在桌上操作，減少單手拇指長時間滑動。',
        '擰毛巾、開瓶罐改用掌心或輔具，工作中定時休息伸展手腕。',
        '自我檢測：拇指包在四指內握拳、手腕往小指側彎，若拇指根部劇痛可能是媽媽手，但不能取代醫師診斷。'
      ]}
    ],
    think_tank_view:'媽媽手是「用出來的」，所以改善也從改變用手習慣開始。及早停下讓手腕受傷的重複動作，多數人經休息與治療就能緩解；若疼痛持續或影響生活，別一直忍著，請骨科或復健科評估。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自醫院衛教資料，註明查無官方統計、自我檢測不能取代診斷，未使用療效保證用語，未推薦特定護具或商品。',
    ai_rationale:{basis:['長庚醫院衛教：症狀、芬克斯坦測試與治療方式','高風險族群取自醫院與大學骨科衛教'],
      layout_reason:'先用表格整理症狀，再說明治療，最後給日常預防與自我檢測。',
      tone:'專業易懂', tone_reason:'常見生活型疾患，以可照做的行動為主。',
      to_verify:['查無國內官方統計','醫院衛教資料發布年份未標示']},
    decision_points:[DP_TEST]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'抱小孩、滑手機，大拇指根部好痛？小心媽媽手',
    update_date:'2026/11/21',
    intro:'抱寶寶、擰毛巾、一直滑手機，大拇指靠近手腕的地方越來越痛，連拿杯子都沒力？這可能是媽媽手。它不是媽媽專屬，新手爸爸、手機族、常用滑鼠的上班族都可能發生，是肌腱一直被摩擦而發炎。',
    sections:[
      {heading:'這4個症狀要留意',format:'table',table:TABLE},
      {heading:'怎麼治療？',format:'bullets',items:[
        '先讓手休息，少做抓、捏、擰的動作，可以冰敷。',
        '醫生可能開藥、建議戴護具或做復健，必要時再評估打針。',
        '一直好不了或反覆發作，可以和醫師討論手術。'
      ]},
      {heading:'平常這樣保護手腕',format:'bullets',items:[
        '抱寶寶用手臂和身體一起托，不要只靠虎口。',
        '手機放桌上或兩手一起用。',
        '擰毛巾、開罐子換個方式或用小工具。',
        '自我檢測：拇指包進拳頭、手腕往小指方向彎，拇指根部很痛就要去看醫生。'
      ]}
    ],
    think_tank_view:'照顧家人的時候，也別忘了照顧自己的手。換個抱法、放下手機一下，就能讓手腕少受一點傷。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自醫院衛教資料，語氣親切，未使用療效保證用語，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以抱小孩、滑手機的情境帶出症狀、治療與保護。', tone:'生活親切', tone_reason:'給新手爸媽與手機族閱讀。', to_verify:[]},
    decision_points:[DP_TEST]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'媽媽手：4個症狀＋保護手腕4招',
    update_date:'2026/11/21',
    intro:'媽媽手（狹窄性肌腱滑膜炎）是拇指側肌腱反覆摩擦發炎，新手爸媽、手機族與上班族都可能發生。',
    sections:[
      {heading:'4個症狀',format:'table',table:TABLE},
      {heading:'治療',format:'bullets',items:[
        '暫停重複動作、冰敷。',
        '藥物、護具、復健；無效再評估手術。'
      ]},
      {heading:'預防',format:'bullets',items:[
        '抱寶寶用手臂承托。',
        '手機放桌上或雙手操作。'
      ]}
    ],
    think_tank_view:'改變用手習慣，是預防與改善媽媽手的第一步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自醫院衛教資料，未使用療效保證用語，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為症狀、治療、預防三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_TEST]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'媽媽手（狹窄性肌腱滑膜炎）', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'媽媽手是用出來的，從改變用手習慣開始', primary_visual:'拇指根部痛', secondary_message:'新手爸媽、手機族、上班族都可能發生', action_priority:'暫停重複動作、改變姿勢、及早就醫'},
    headline_hook:'抱小孩、滑手機好痛？', headline_main:'保護手腕 4 招', title_accent:'4 招',
    hero_message:'不只媽媽會有', hero_support:'拇指側肌腱反覆摩擦發炎，抓捏擰時最痛',
    action_title:'這樣保護手腕',
    action_cards:[
      {key:'停', text:'暫停抓、捏、擰的重複動作'},
      {key:'抱', text:'抱寶寶用手臂和身體承托'},
      {key:'機', text:'手機放桌上或雙手操作'},
      {key:'醫', text:'疼痛持續，看骨科或復健科'}
    ],
    notice:'自我檢測：拇指包進拳頭、手腕往小指側彎，**劇痛請就醫**。',
    carousel_suggestion:{reason:'若想把症狀、自我檢測與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'不只媽媽會有', headline_main:'媽媽手 4 個症狀'},
      {layout_type:'action', headline_hook:'30 秒自我檢測', headline_main:'芬克斯坦測試怎麼做'},
      {layout_type:'action', headline_hook:'保護手腕', headline_main:'日常 4 招'}]},
    hashtags:['媽媽手','手腕痛','滑手機','新手爸媽'],
    sources:['長庚紀念醫院衛教資料','香港大學骨科學系'],
    illustration_category:'bones-joints',
    illustration:{topic:'媽媽手預防', audience:'新手爸媽與手機族', scene:'一位新手爸爸用手臂和胸口穩穩托著嬰兒，桌上的手機平放著',
      emotion:'溫柔、輕鬆', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A new father holding a baby securely with his forearm and chest, a phone lying flat on the table nearby, gentle and relaxed mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['醫院衛教資料：症狀、高風險族群、治療'],
      layout_reason:'查無官方統計，選 action：4 個保護行動當主角，以自我檢測提醒收尾，不放統計數字。',
      tone:'專業易懂', tone_reason:'實用、可照做。',
      to_verify:['查無官方統計']},
    decision_points:[DP_TEST],
    content_check_note:'內容引自醫院衛教資料，未使用療效保證用語，未推薦特定護具或商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'媽媽手（狹窄性肌腱滑膜炎）',
    collect:{
      summary:'媽媽手是拇指側肌腱反覆摩擦造成的發炎，不只新手媽媽，新手爸爸、手機族與上班族都常見；多數可透過休息與調整用手習慣改善，「辨識症狀、改變用手方式」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'查無官方就醫人數統計：國健署與健保署未公布媽媽手（狹窄性肌腱滑膜炎）的就醫人數或盛行率，衛教資料以臨床症狀與高風險族群說明為主。',tag:'市場觀察',source:{name:'長庚紀念醫院：認識媽媽手～談狹窄性肌腱滑膜炎',url:CG1}},
        {item:'年度趨勢方向',desc:'手機族與上班族也是高風險族群：醫院與大學骨科衛教指出，除了頻繁抱嬰兒的新手爸媽，長時間單手滑手機、使用滑鼠鍵盤者也常見。',tag:'市場觀察',source:{name:'香港大學骨科學系：媽媽手衛教',url:HKU}},
        {item:'政策動向',desc:'保守治療為主、無效再評估手術：長庚醫院衛教指出，治療以藥物、改變姿勢、護具休息與復健為主，必要時局部注射，反覆發作者可考慮腱鞘切開手術。',tag:'市場觀察',source:{name:'長庚紀念醫院：認識媽媽手～談狹窄性肌腱滑膜炎',url:CG1}},
        {item:'好發族群年齡層',desc:'芬克斯坦測試可初步自我評估：拇指包在四指內握拳、手腕往小指側彎，若拇指根部劇痛，可能是媽媽手，應就醫確認。',tag:'市場觀察',source:{name:'長庚醫訊：媽媽手',url:CG2}}
      ],
      product_view:['機會：新手爸媽是重要客群，可結合育兒照護與身體保健的關懷內容。','機會：上班族手腕保健可作為職場健康管理內容。','風險：不推薦特定護具或療程；避免暗示保險給付相關處置。'],
      marketing_view:['機會：母親節、育嬰情境是自然的溝通時點。','機會：自我檢測動作適合做成短影音。','風險：無統計數據，避免自行推估人數；手腕痛原因多元，需提醒就醫。'],
      alert_level:'low',
      alert_reason:'屬常見生活型疾患，無時效性政策事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國內目前查無媽媽手的官方就醫人數統計','SOURCE_EVIDENCE','no_statistic_available',
          '文章已說明查無官方統計，但未提供任何可查證的研究數據，讀者難以判斷這個問題有多常見。','low','no',
          null,'no','clarify','屬資料可得性說明，不是錯誤。',
          '國內目前查無媽媽手的官方就醫人數統計（臨床上屬常見的手部問題）'),
        F('必要時評估局部注射','MEDICAL_INTERPRETATION','treatment_risk_unstated',
          '未說明局部注射可能的副作用與次數限制，讀者可能以為打針就能根治。','low','no',
          null,'no','clarify','補充即可。',
          '必要時評估局部注射（次數與風險由醫師說明）',
          ['必要時再評估打針']),
        F('若拇指根部劇痛可能是媽媽手，但不能取代醫師診斷','MEDICAL_INTERPRETATION','self_test_risk',
          '未提醒疼痛已很劇烈時不宜反覆自我測試，可能加重不適。','low','no',
          null,'no','clarify','補一句即可。',
          '若拇指根部劇痛可能是媽媽手，但不能取代醫師診斷，疼痛明顯時不宜反覆測試',
          ['拇指根部很痛就要去看醫生']),
        F('可冰敷減輕疼痛','MEDICAL_INTERPRETATION','missing_practical_info',
          '沒有說明冰敷時間與注意事項，讀者可能直接冰敷過久造成凍傷。','low','no',
          null,'no','clarify','補實作提醒。',
          '可冰敷減輕疼痛（每次約10至15分鐘，以毛巾隔開）',
          ['可以冰敷','冰敷'])
      ],
      card:[
        F('手機放桌上或雙手操作','MEDICAL_INTERPRETATION','missing_rationale',
          '未說明原因（減少拇指單獨反覆滑動），讀者不易理解。','low','no',
          null,'no','clarify','補一句即可。',
          '手機放桌上或雙手操作，減少拇指單獨出力'),
        F('劇痛請就醫','MEDICAL_INTERPRETATION','self_test_risk',
          '卡面鼓勵自我檢測，未提醒疼痛明顯時不宜反覆測試。','low','no',
          null,'no','clarify','補一句即可。',
          '劇痛請就醫，勿反覆測試')
      ]
    },
    title_alts:[
      '媽媽手不只媽媽會有：拇指根部痛，先停下重複動作',
      '抱小孩、滑手機，大拇指根部好痛？小心媽媽手',
      '新手爸媽與手機族必看：媽媽手症狀與保護手腕4招'
    ],
    card_title_alts:[
      ['抱小孩、滑手機好痛？','保護手腕 4 招'],
      ['不只媽媽會有','認識媽媽手'],
      ['30 秒自我檢測','媽媽手怎麼判斷']
    ],
    data_addon:[
      '長庚醫院衛教：媽媽手的典型理學檢查為芬克斯坦測試（Finkelstein’s test）。',
      '少數患者因淺橈神經受壓迫，可能出現手麻或針刺感。',
      '急性期先停止重複性的抓、捏、擰與提重物，減少肌腱持續摩擦。'
    ],
    cta:'今天抱寶寶時試著改用手臂和身體承托，滑手機時把手機放在桌上；拇指根部痛超過一週，就預約骨科或復健科。'
  });
})();
