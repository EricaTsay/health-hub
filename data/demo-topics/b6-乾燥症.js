/* v6 示範主題：乾燥症（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-20。數據來源：TVBS健康2.0 2026-10-04（北市聯醫和平婦幼院區過敏免疫風濕科主任受訪）、
   世界新聞網 2025-11-25（衛福部桃園醫院風濕免疫科醫師與護理師受訪）。查無國內官方乾燥症盛行率或就醫人數統計。
   參考方向：健康智庫〈乾燥症〉2022/07。 */
(function(){
  const TV = 'https://health.tvbs.com.tw/nutrition/366459';
  const WJ = 'https://www.worldjournal.com/wj/amp/story/122009/9162348';
  const REFS = [
    {title:'人到中年口乾狂喝水還是渴 醫示警：非更年期 是「這種病」患者絕大多數是女性',source:'TVBS健康2.0',url:TV},
    {title:'50歲婦口乾舌燥以為更年期 檢查才發現是免疫系統惹禍',source:'世界新聞網',url:WJ}
  ];
  const TABLE = {headers:['部位','常見表現'], rows:[
    ['眼睛','乾澀、刺痛、灼熱或異物感，嚴重時角膜受損'],
    ['口腔','口乾、吞嚥困難、口臭、蛀牙增加、腮腺反覆腫脹'],
    ['全身','疲倦、關節痠痛、皮膚乾燥、雷諾氏現象'],
    ['其他器官','少數人肺、腎或神經系統受到侵犯']
  ]};
  const TAGS = ['乾燥症','修格蘭氏症','自體免疫疾病','口乾眼乾','女性健康'];

  const DP_AGE = {id:'dp-sjo-age', type:'data_scope', title:'好發年齡有兩種說法',
    desc:'TVBS 2026年報導寫好發於40至60歲女性；世界新聞網2025年報導（桃園醫院醫師受訪）寫好發於40至50歲。兩者都是醫師受訪或記者敘述，並非統計資料，AI 沒有替你決定要用哪一個。',
    current:'好發於40至60歲女性（TVBS 2026）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'40至60歲', value:'TVBS 2026年10月', note:'北市聯醫醫師受訪報導（目前採用）'},
      {label:'40至50歲', value:'世界新聞網 2025年11月', note:'桃園醫院醫師受訪報導'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'乾燥症：口乾眼乾超過3個月，不一定是更年期',
    update_date:'2026/11/20',
    intro:'乾燥症（修格蘭氏症）是自體免疫疾病，免疫系統攻擊淚腺與唾液腺，使腺體慢性發炎、分泌逐漸減少。北市聯醫過敏免疫風濕科主任2026年受訪指出，乾燥症常發生在40至60歲女性，患者中女性約為男性的9倍，症狀常被誤認為更年期。眼乾、口乾持續超過3個月，點眼藥水、多喝水仍不見改善時，建議諮詢風濕免疫科。',
    sections:[
      {heading:'乾燥症可能影響的部位',format:'table',table:TABLE},
      {heading:'診斷與治療',format:'bullets',items:[
        '診斷需由風濕免疫科醫師綜合評估，包括淚液分泌測試、唾液腺功能評估，必要時做下唇唾液腺切片，並非抽血就能確診。',
        '治療以緩解症狀為主：人工淚液、眼用凝膠、人工唾液或促進唾液分泌的藥物；器官受侵犯時，依醫師評估使用抗發炎或免疫調節藥物。',
        '乾燥症可能與紅斑性狼瘡、類風濕性關節炎同時發生，需定期追蹤。'
      ]},
      {heading:'日常照護',format:'bullets',items:[
        '隨身帶水，小口多次補充水分；可嚼無糖口香糖促進唾液分泌。',
        '加強口腔衛生：使用牙線與含氟牙膏，定期看牙醫。',
        '避免菸酒與含糖飲料，不要長期使用含類固醇或血管收縮成分的偏方眼藥水。',
        '室內使用加濕器、避免長時間吹風。'
      ]}
    ],
    think_tank_view:'乾燥症不會立刻危及生命，卻會一點一滴影響吃飯、說話、看東西的品質。中年女性如果口乾到要一直喝水、眼睛乾到點藥水也沒用，與其歸咎於更年期，不如到風濕免疫科確認一次。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'性別比與好發年齡標明為醫師受訪說法與年份，未使用療效保證用語，未推薦特定藥品或保健食品。',
    ai_rationale:{basis:['女性約為男性9倍、好發40至60歲（TVBS 2026年醫師受訪）','眼乾口乾超過3個月應就醫（同一醫師建議）'],
      layout_reason:'先用表格整理影響部位，再說明診斷與治療，最後給日常照護做法。',
      tone:'專業易懂', tone_reason:'需讓讀者區分乾燥症與更年期、單純眼乾。',
      to_verify:['查無國內乾燥症盛行率官方統計','好發年齡兩篇報導說法不同']},
    decision_points:[DP_AGE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'口乾到一直喝水還是渴？可能不是更年期，是乾燥症',
    update_date:'2026/11/20',
    intro:'口乾得要一直喝水、眼睛乾到點藥水也沒用，很多中年女性以為是更年期。醫師說，這可能是乾燥症：身體的免疫系統去攻擊淚腺和口水腺，讓它們越來越「擠不出水」。北市聯醫醫師受訪指出，乾燥症的患者女性大約是男性的9倍。',
    sections:[
      {heading:'乾燥症會影響哪裡？',format:'table',table:TABLE},
      {heading:'怎麼確診、怎麼治療？',format:'bullets',items:[
        '要給風濕免疫科醫師檢查，可能會測眼淚量、口水量，有時要做嘴唇內側的小切片，不是抽血就能知道。',
        '治療多半是補充人工淚液、人工唾液，或用讓口水變多的藥；如果影響到其他器官，醫師會再調整用藥。',
        '乾燥症有時會和紅斑性狼瘡、類風濕性關節炎一起出現，要定期回診。'
      ]},
      {heading:'平常可以這樣做',format:'bullets',items:[
        '水壺帶著走，小口小口多喝幾次；嚼無糖口香糖也有幫助。',
        '認真刷牙、用牙線，定期去看牙醫。',
        '少碰菸酒和含糖飲料，別亂點來路不明的眼藥水。',
        '冷氣房放加濕器，別對著風口吹。'
      ]}
    ],
    think_tank_view:'口乾眼乾聽起來是小事，但影響的是每天吃飯、說話和看東西。如果已經持續好幾個月，陪媽媽或自己去風濕免疫科看看，比一直忍著好。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'性別比標明為醫師受訪說法，語氣親切，未使用療效保證用語，未推薦特定藥品或保健食品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以中年女性常見的口乾情境帶出疾病、治療與日常照護。', tone:'生活親切', tone_reason:'給中年女性與家人閱讀。', to_verify:['查無國內盛行率官方統計']},
    decision_points:[DP_AGE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'乾燥症：口乾眼乾超過3個月要就醫',
    update_date:'2026/11/20',
    intro:'乾燥症是自體免疫疾病，醫師受訪指出女性患者約為男性9倍，症狀常被誤認為更年期。',
    sections:[
      {heading:'影響部位',format:'table',table:TABLE},
      {heading:'診斷治療',format:'bullets',items:[
        '風濕免疫科綜合評估，非抽血即可確診。',
        '人工淚液、人工唾液緩解症狀。'
      ]},
      {heading:'日常照護',format:'bullets',items:[
        '小口多次補水、嚼無糖口香糖。',
        '加強口腔衛生、定期看牙。',
        '避免菸酒與偏方眼藥水。'
      ]}
    ],
    think_tank_view:'口乾眼乾持續超過3個月且自行處理無效，應到風濕免疫科評估。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'性別比標明為醫師說法，未使用療效保證用語，未推薦特定藥品或保健食品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為部位、診治、照護三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_AGE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'乾燥症', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'口乾眼乾不一定是更年期', primary_visual:'約 9 倍', secondary_message:'超過 3 個月要看風濕免疫科', action_priority:'補水、口腔衛生、及早就醫'},
    headline_hook:'一直喝水還是口乾？', headline_main:'乾燥症日常照護 4 件事', title_accent:'4 件事',
    hero_message:'口乾眼乾超過 3 個月', hero_support:'點藥水、喝水仍無改善，建議看風濕免疫科',
    primary_stat:{value:'約 9 倍', label:'女性患者約為男性', note:'北市聯醫醫師受訪（2026）'},
    action_title:'日常這樣照護',
    action_cards:[
      {key:'水', text:'小口多次補水，嚼無糖口香糖'},
      {key:'牙', text:'牙線、含氟牙膏，定期看牙'},
      {key:'眼', text:'人工淚液，不亂用偏方眼藥水'},
      {key:'醫', text:'風濕免疫科評估，定期追蹤'}
    ],
    notice:'乾燥症**不是抽血就能確診**，需由醫師綜合評估。',
    carousel_suggestion:{reason:'若想把症狀、診斷與照護分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'不只眼乾口乾', headline_main:'乾燥症影響的 4 個部位'},
      {layout_type:'knowledge', headline_hook:'怎麼確診', headline_main:'乾燥症的檢查方式'},
      {layout_type:'action', headline_hook:'一直喝水還是口乾？', headline_main:'日常照護 4 件事'}]},
    hashtags:['乾燥症','修格蘭氏症','口乾眼乾','自體免疫疾病'],
    sources:['北市聯醫和平婦幼院區（媒體受訪）','衛福部桃園醫院（媒體受訪）'],
    illustration_category:'general',
    illustration:{topic:'乾燥症照護', audience:'40 至 60 歲女性', scene:'一位中年女性在辦公桌旁小口喝水，桌上放著人工淚液和加濕器',
      emotion:'自在、有照顧自己的感覺', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged woman at her office desk taking small sips of water, eye drops and a small humidifier on the desk, comfortable self-care mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['女性約為男性9倍（醫師受訪）'],
      layout_reason:'乾燥症以日常照護為主，選 action：4 個照護行動當主角，性別比放下方。',
      tone:'專業易懂', tone_reason:'實用、可照做。',
      to_verify:['查無國內盛行率官方統計']},
    decision_points:[Object.assign({}, DP_AGE, {current:'未在卡面標示好發年齡', options:[{label:'沿用目前寫法', action:'keep'}]})],
    content_check_note:'性別比標明為醫師受訪說法，未使用療效保證用語，未推薦特定藥品或保健食品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'乾燥症',
    collect:{
      summary:'乾燥症是好發於中年女性的自體免疫疾病，口乾眼乾常被誤認為更年期或單純眼乾而延誤；醫師提醒症狀持續超過3個月應看風濕免疫科，「辨識、確診與日常照護」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'女性患者約為男性9倍：北市聯醫過敏免疫風濕科主任2026年受訪報導指出，乾燥症可能發生在40至60歲女性，患者女性約為男性的9倍（查無國內官方盛行率統計）。',tag:'市場觀察',source:{name:'TVBS健康2.0：人到中年口乾狂喝水還是渴 醫示警：非更年期',url:TV}},
        {item:'年度趨勢方向',desc:'常被誤認為更年期：桃園醫院風濕免疫科醫師2025年分享50歲女性個案，口乾舌燥多時以為是更年期，經一系列檢查後才確診乾燥症，女性與男性比例約9比1。',tag:'市場觀察',source:{name:'世界新聞網：50歲婦口乾舌燥以為更年期 檢查才發現是免疫系統惹禍',url:WJ}},
        {item:'政策動向',desc:'眼乾口乾持續超過3個月應就醫：醫師建議，點眼藥水、多喝水仍不見改善，應諮詢風濕免疫科，診斷需綜合淚液、唾液腺功能評估，必要時做唇唾液腺切片。',tag:'市場觀察',source:{name:'TVBS健康2.0：人到中年口乾狂喝水還是渴 醫示警：非更年期',url:TV}},
        {item:'好發族群年齡層',desc:'好發於40至60歲女性：乾燥症可能與紅斑性狼瘡、類風濕性關節炎同時發生，少數嚴重者肺、腎或神經系統也會受侵犯。',tag:'市場觀察',source:{name:'TVBS健康2.0：人到中年口乾狂喝水還是渴 醫示警：非更年期',url:TV}}
      ],
      product_view:['機會：乾燥症好發於中年女性，可結合女性健康與自體免疫疾病保障的說明。','機會：口腔與眼睛照護屬日常可行動的健康管理內容。','風險：避免推薦特定保健食品或眼藥水；自體免疫疾病核保與理賠依條款說明。'],
      marketing_view:['機會：「不是更年期」的反差標題容易吸引中年女性關注。','機會：秋冬乾燥季節與冷氣房情境是自然的溝通時點。','風險：口乾眼乾原因很多，需提醒由醫師診斷，避免自我標籤。'],
      alert_level:'low',
      alert_reason:'屬長期慢性疾病議題，無時效性政策事件；適合秋冬乾燥季節溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('患者中女性約為男性的9倍','SOURCE_EVIDENCE','expert_opinion_as_statistic',
          '已註明是醫師受訪，但沒有說明數字來自哪一項研究或統計；國內並無官方公布的乾燥症性別比。','low','yes',
          '國內乾燥症性別分布的研究或健保資料分析。','no','confirm','與國際文獻常見比例相近，但出處未明。',
          '患者中女性明顯多於男性（醫師估計約9倍）',
          ['乾燥症的患者女性大約是男性的9倍','女性患者約為男性9倍']),
        F('乾燥症常發生在40至60歲女性','DATA_FACTUAL_ACCURACY','conflicting_sources',
          '另一篇報導（桃園醫院醫師受訪）寫40至50歲，兩者範圍不同，文中只採用其中一種且未說明。','low','no',
          null,'no','clarify','屬說法差異，兩者都非統計資料。',
          '乾燥症較常見於中年女性（約40至60歲）'),
        F('不要長期使用含類固醇或血管收縮成分的偏方眼藥水','MEDICAL_INTERPRETATION','missing_rationale',
          '沒有說明原因（可能升高眼壓、掩蓋症狀），讀者不易理解為何要避免。','low','no',
          null,'no','clarify','補一句理由即可。',
          '不要長期使用含類固醇或血管收縮成分的偏方眼藥水（可能升高眼壓或使乾眼更嚴重）',
          ['別亂點來路不明的眼藥水','避免菸酒與偏方眼藥水']),
        F('嚼無糖口香糖','MEDICAL_INTERPRETATION','benefit_unqualified',
          '只寫有幫助，沒說明是「暫時緩解口乾」，讀者可能以為能改善病情。','low','no',
          null,'no','clarify','屬效果描述問題。',
          '嚼無糖口香糖（可暫時促進唾液分泌、緩解口乾）')
      ],
      card:[
        F('北市聯醫醫師受訪（2026）','SOURCE_EVIDENCE','expert_opinion_as_statistic',
          '主數字出自醫師受訪，並非統計資料，卡面讀者可能以為是官方數據。','low','no',
          null,'no','clarify','屬出處層級說明。',
          '醫師受訪估計（2026）'),
        F('小口多次補水，嚼無糖口香糖','MEDICAL_INTERPRETATION','benefit_unqualified',
          '未說明是症狀緩解，不是治療。','low','no',
          null,'no','clarify','補充即可。',
          '小口多次補水，嚼無糖口香糖緩解口乾')
      ]
    },
    title_alts:[
      '乾燥症：口乾眼乾超過3個月，不一定是更年期',
      '口乾到一直喝水還是渴？可能不是更年期，是乾燥症',
      '女性患者約為男性9倍：乾燥症症狀、診斷與日常照護'
    ],
    card_title_alts:[
      ['一直喝水還是口乾？','乾燥症日常照護 4 件事'],
      ['不一定是更年期','認識乾燥症'],
      ['口乾眼乾超過 3 個月','看風濕免疫科']
    ],
    data_addon:[
      '護理師建議：洗澡水溫不宜過高，洗後塗抹保濕乳液；避免配戴隱形眼鏡。',
      '醫師指出：眼部可用人工淚液、淚管塞或環孢素眼藥水，依醫師評估使用。',
      '乾燥症可能合併雷諾氏現象、關節痛與慢性疲倦。'
    ],
    cta:'如果口乾眼乾已經超過3個月、喝水點藥都沒改善，這個月就預約一次風濕免疫科門診。'
  });
})();
