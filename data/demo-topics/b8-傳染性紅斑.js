/* v6 示範主題：傳染性紅斑（蘋果病）（B8 傳染病防治）
   查證日期：2026-11-21。傳染性紅斑非法定傳染病，查無疾管署年度病例統計與官方新聞稿原文；
   內容為疾管署副署長與衛福部ACIP召集人經媒體引述（工商時報2024-12-10、聯合報2026-01-19，二手），已埋預審。
   參考方向：健康智庫〈日本爆發蘋果病！赴日旅遊需留意？〉2024/12。 */
(function(){
  const REFS = [
    {title:'日本爆發「蘋果病」 李秉穎示警3族群：恐破壞骨髓造血細胞（含疾管署副署長說明）',source:'工商時報',url:'https://www.ctee.com.tw/news/20241210701542-431401'},
    {title:'台中11歲女童大叫後猝死疑感染B19病毒 台大醫示警三類族群需留意',source:'聯合報',url:'https://udn.com/news/story/7266/9275268'}
  ];
  const TABLE = {headers:['項目','說明'], rows:[
    ['病原','微小病毒B19，經飛沫傳染'],
    ['常見年齡','5至18歲兒童與青少年較常見'],
    ['典型症狀','先有發燒、流鼻水，約一週後雙頰泛紅像「蘋果臉」，軀幹四肢可能出現對稱癢疹'],
    ['高風險族群','孕婦、慢性貧血者、免疫功能不全者'],
    ['治療與疫苗','多數會自行痊癒，目前沒有抗病毒藥物，也沒有疫苗']
  ]};
  const TAGS = ['傳染性紅斑','蘋果病','微小病毒B19','孕婦','兒童傳染病'];

  const DP_SOURCE = {id:'dp-fifth-source', type:'data_source', title:'沒有官方年度統計',
    desc:'傳染性紅斑未列為法定傳染病，疾管署透過定點醫師、急診與實驗室監測，但沒有公布年度病例數；本文內容來自疾管署副署長與兒科醫師的媒體受訪說法。AI 沒有推估國內病例數。',
    current:'未列為法定傳染病，國內有個案但無特殊疫情（疾管署副署長，2024年12月受訪）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'無異常', value:'國內監測', note:'疾管署副署長2024年12月受訪（目前採用）'},
      {label:'25 年新高', value:'日本關東 2024 年', note:'媒體報導，非國內數字'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'蘋果病是什麼？多數兒童會自行痊癒，孕婦與慢性貧血者要特別小心',
    update_date:'2026/11/21',
    intro:'傳染性紅斑俗稱「蘋果病」，由微小病毒B19經飛沫傳染，好發於5至18歲兒童與青少年。2024年底日本關東地區病例創25年新高時，疾管署副署長受訪表示，蘋果病症狀輕微、未列為法定傳染病，國內透過定點醫師、急診與實驗室監測，當時並無異常。多數人會自行痊癒，但孕婦、慢性貧血者與免疫功能不全者感染後風險較高。',
    sections:[
      {heading:'認識蘋果病',format:'table',table:TABLE},
      {heading:'高風險族群為什麼要小心',format:'bullets',items:[
        '衛福部傳染病防治諮詢會預防接種組召集人李秉穎醫師指出，孕婦感染可能造成胎兒畸形。',
        '慢性貧血者感染後，病毒可能破壞骨髓造血細胞，造成嚴重貧血。',
        '免疫功能不全者可能無法清除病毒，造成慢性貧血。'
      ]},
      {heading:'預防與就醫',format:'bullets',items:[
        '勤洗手、避免出入人潮擁擠場所，必要時戴口罩，與流感、新冠的防護方式相同。',
        '家中有人出現症狀，應避免接觸孕婦、慢性貧血者與免疫功能不全者。',
        '孕婦若接觸過疑似個案或出現症狀，應告知產檢醫師。'
      ]}
    ],
    think_tank_view:'蘋果病對多數孩子來說只是一場小病，真正需要保護的是家裡的孕婦與慢性病家人。孩子臉頰突然紅通通時，除了帶去看醫生，也記得暫時和懷孕的家人保持距離。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容標明為疾管署副署長與醫師的媒體受訪說法，非官方統計，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['未列法定傳染病、監測無異常、飛沫傳染、症狀（疾管署副署長，工商時報2024-12-10）','高風險族群、無疫苗（李秉穎醫師，同篇）'],
      layout_reason:'先用表格整理疾病特性，再說明高風險族群，最後給預防與就醫建議。',
      tone:'專業易懂', tone_reason:'避免恐慌，聚焦保護高風險家人。',
      to_verify:['查無疾管署新聞稿原文，均為媒體引述','孕婦風險無官方數字']},
    decision_points:[DP_SOURCE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'孩子臉頰紅得像蘋果？認識「蘋果病」，家有孕婦要注意',
    update_date:'2026/11/21',
    intro:'蘋果病的正式名稱是傳染性紅斑，最常出現在5到18歲的孩子身上。一開始像感冒，大約一週後兩邊臉頰變得紅通通，像被打了巴掌。疾管署副署長說，大多數人症狀輕微、會自己好，但如果家裡有孕婦或貧血的家人，就要多注意。',
    sections:[
      {heading:'蘋果病小檔案',format:'table',table:TABLE},
      {heading:'誰需要特別保護？',format:'bullets',items:[
        '懷孕的媽媽：醫師說可能影響胎兒。',
        '有慢性貧血的人：可能讓貧血變嚴重。',
        '免疫力比較差的人。'
      ]},
      {heading:'可以怎麼做？',format:'bullets',items:[
        '勤洗手、少去人多的地方，需要時戴口罩。',
        '孩子有症狀時，先和懷孕的家人分開一下。',
        '孕婦接觸過的話，記得告訴產檢醫生。'
      ]}
    ],
    think_tank_view:'孩子的蘋果臉通常幾天就好了，重點是保護家裡懷孕和貧血的家人。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容標明為媒體受訪說法，語氣親切，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以孩子蘋果臉的情境帶出高風險族群。', tone:'生活親切', tone_reason:'給家長閱讀。', to_verify:[]},
    decision_points:[DP_SOURCE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'蘋果病：保護孕婦與貧血家人',
    update_date:'2026/11/21',
    intro:'傳染性紅斑（蘋果病）經飛沫傳染、多數自癒，但孕婦、慢性貧血、免疫不全者風險較高；目前沒有疫苗。',
    sections:[
      {heading:'重點',format:'table',table:TABLE},
      {heading:'行動',format:'bullets',items:[
        '勤洗手、必要時戴口罩。',
        '有症狀避免接觸高風險族群。'
      ]}
    ],
    think_tank_view:'孩子小病，家人大事：保護孕婦最重要。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容標明為媒體受訪說法，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為重點與行動兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_SOURCE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'傳染性紅斑（蘋果病）', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'蘋果病多數自癒，但要保護高風險家人', primary_visual:'5–18 歲', secondary_message:'孕婦、慢性貧血、免疫不全者要小心', action_priority:'洗手、戴口罩、避開高風險族群'},
    headline_hook:'孩子臉頰紅得像蘋果？', headline_main:'認識傳染性紅斑', title_accent:'傳染性紅斑',
    hero_message:'多數會自行痊癒', hero_support:'目前沒有抗病毒藥物，也沒有疫苗（醫師受訪）',
    knowledge_title:'3 類高風險族群', knowledge_note:'家中有人發病，**避免接觸高風險族群**',
    knowledge_cards:[
      {label:'孕婦', icon:'people', lines:['可能影響胎兒']},
      {label:'慢性貧血者', icon:'heart', lines:['可能破壞','骨髓造血細胞']},
      {label:'免疫不全者', icon:'shield', lines:['病毒不易清除','造成慢性貧血']}
    ],
    primary_stat:{value:'5–18 歲', label:'最常見的感染年齡', note:'醫師受訪說法｜經飛沫傳染'},
    secondary_stats:[
      {value:'非法定', label:'傳染病，國內持續監測'},
      {value:'約 1 週', label:'發燒後出現蘋果臉'}
    ],
    action_title:'這樣保護家人',
    action_cards:[
      {key:'洗', text:'勤洗手，避免人潮擁擠場所'},
      {key:'罩', text:'有症狀或必要時戴口罩'},
      {key:'隔', text:'孩子發病時避免接觸孕婦'},
      {key:'告', text:'孕婦接觸後告知產檢醫師'}
    ],
    carousel_suggestion:{reason:'若想把症狀、高風險族群與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'蘋果臉是什麼？', headline_main:'傳染性紅斑症狀'},
      {layout_type:'knowledge', headline_hook:'誰要特別小心', headline_main:'3 類高風險族群'},
      {layout_type:'action', headline_hook:'保護家人', headline_main:'洗手、口罩、分開照顧'}]},
    hashtags:['傳染性紅斑','蘋果病','孕婦','兒童傳染病'],
    sources:['衛生福利部疾病管制署（媒體引述）','台大兒童醫院（媒體引述）'],
    illustration_category:'virus-infection',
    illustration:{topic:'兒童蘋果臉與家人防護', audience:'有孕婦或幼兒的家庭', scene:'臉頰泛紅的孩子由爸爸照顧，懷孕的媽媽在另一個房間透過門口揮手',
      emotion:'溫暖、謹慎', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A child with rosy red cheeks being cared for by the father while the pregnant mother waves from another room doorway, warm and careful, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['疾病特性與高風險族群（工商時報2024-12-10引述疾管署副署長與李秉穎醫師）'],
      layout_reason:'核心是保護高風險族群，選 knowledge：3 類族群放中段，好發年齡退到下方，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'避免恐慌。',
      to_verify:['均為媒體引述']},
    decision_points:[Object.assign({}, DP_SOURCE, {current:'未列為法定傳染病（疾管署副署長受訪）'})],
    content_check_note:'內容標明媒體引述，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'傳染性紅斑（蘋果病）',
    collect:{
      summary:'傳染性紅斑（蘋果病）由微小病毒B19經飛沫傳染，好發於5至18歲，多數症狀輕微且未列為法定傳染病；2024年底日本疫情升高時疾管署表示國內無異常。孕婦、慢性貧血與免疫不全者風險較高，「保護高風險家人」是值得溝通的重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'未列為法定傳染病：疾管署副署長2024年12月受訪表示，蘋果病症狀輕微、未列為法定傳染病，國內透過定點醫師、急診與實驗室監測，與往年相比無異常（媒體引述）。',tag:'市場觀察',source:{name:'工商時報：日本爆發「蘋果病」 李秉穎示警3族群',url:'https://www.ctee.com.tw/news/20241210701542-431401'}},
        {item:'年度趨勢方向',desc:'日本關東25年新高：2024年底日本關東地區傳染性紅斑病例創25年新高，國內醫師指出台灣約每十多年會出現一波群聚，平時多為零星個案（媒體報導）。',tag:'市場觀察',source:{name:'聯合報：台大醫示警三類族群需留意',url:'https://udn.com/news/story/7266/9275268'}},
        {item:'政策動向',desc:'沒有疫苗：衛福部傳染病防治諮詢會預防接種組召集人李秉穎醫師指出，蘋果病沒有抗病毒藥物、也沒有疫苗，預防方式與流感、新冠相同，為勤洗手、避免擁擠場所與必要時戴口罩。',tag:'市場觀察',source:{name:'工商時報：日本爆發「蘋果病」 李秉穎示警3族群',url:'https://www.ctee.com.tw/news/20241210701542-431401'}},
        {item:'好發族群年齡層',desc:'5至18歲最常見：醫師指出蘋果病以5至18歲最常見，孕婦感染可能造成胎兒畸形，慢性貧血者可能因骨髓造血細胞被破壞而嚴重貧血，免疫不全者可能演變為慢性貧血。',tag:'市場觀察',source:{name:'聯合報：台大醫示警三類族群需留意',url:'https://udn.com/news/story/7266/9275268'}}
      ],
      product_view:['機會：孕產家庭可結合孕期衛教，提醒避免接觸傳染病患者。','機會：家有幼兒與孕婦的家庭照護衛教。','風險：多為輕症，避免誇大風險做商品訴求。'],
      marketing_view:['機會：鄰近國家疫情升溫、出國旅遊旺季時是溝通時點。','機會：「蘋果臉」形象鮮明，容易引起家長注意。','風險：避免引用個別死亡案例製造恐慌。'],
      alert_level:'low',
      alert_reason:'非法定傳染病、國內多為零星個案，屬親子與孕期衛教議題；國際疫情變化交由正式模式查詢。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('孕婦感染可能造成胎兒畸形','MEDICAL_INTERPRETATION','risk_unquantified',
          '文章已註明是李秉穎醫師說法，但沒有說明發生機率與懷孕週數，讀者（尤其孕婦）可能過度恐慌；另一篇報導則說是懷孕初期「有時」會造成。','medium','yes',
          '孕婦感染微小病毒B19的胎兒風險研究或官方衛教。','no','confirm','缺機率與時期。',
          '孕婦感染（尤其懷孕初期）有時可能影響胎兒，應告知產檢醫師評估'),
        F('孕婦若接觸過疑似個案或出現症狀，應告知產檢醫師','SOURCE_EVIDENCE','claim_without_source',
          '引用的兩篇報導沒有這項建議，本句為延伸建議。','low','no',
          null,'no','clarify','可標示為延伸建議。',
          '孕婦若擔心接觸過疑似個案，可主動與產檢醫師討論'),
        F('醫師說可能影響胎兒','SOURCE_EVIDENCE','source_unstated',
          '生活親切版沒寫是哪位醫師、哪一年的說法，讀者無法查證。','low','no',
          null,'no','clarify','補上出處即可。',
          '台大兒童醫院李秉穎醫師說可能影響胎兒'),
        F('目前沒有疫苗','SOURCE_EVIDENCE','source_unstated',
          '簡潔有力版沒有標示出處（李秉穎醫師2024年受訪），也沒提到多數人會自行痊癒。','low','no',
          null,'no','clarify','補上出處即可。',
          '目前沒有疫苗（醫師2024年受訪），多數人會自行痊癒')
      ],
      card:[
        F('醫師受訪說法｜經飛沫傳染','SOURCE_EVIDENCE','secondary_citation',
          '卡面所有資訊都來自媒體引述，主數字「5–18 歲」也只是醫師說法，沒有官方監測數據支持。','low','no',
          null,'no','clarify','屬出處層級提醒。',
          '醫師受訪說法（非官方統計）｜經飛沫傳染'),
        F('可能影響胎兒','MEDICAL_INTERPRETATION','risk_unquantified',
          '卡面只寫「可能影響胎兒」，沒有機率與時期，孕婦讀者可能過度恐慌。','low','no',
          null,'no','clarify','補上建議行動即可。',
          '可能影響胎兒，請告知產檢醫師')
      ]
    },
    title_alts:[
      '蘋果病是什麼？多數兒童會自行痊癒，孕婦與慢性貧血者要特別小心',
      '孩子臉頰紅得像蘋果？認識「蘋果病」，家有孕婦要注意',
      '傳染性紅斑（微小病毒B19）：症狀、高風險族群與預防'
    ],
    card_title_alts:[
      ['孩子臉頰紅得像蘋果？','認識傳染性紅斑'],
      ['家有孕婦要注意','3 類高風險族群'],
      ['蘋果病沒有疫苗','洗手口罩最實在']
    ],
    data_addon:[
      '疾管署副署長（2024-12）：蘋果病未列為法定傳染病，國內監測無異常。',
      '2024年底日本關東地區傳染性紅斑病例創25年新高（媒體報導）。',
      '高風險族群：孕婦、慢性貧血者、免疫功能不全者（李秉穎醫師）。'
    ],
    cta:'孩子出現蘋果臉時，先帶去看醫生，並暫時和懷孕的家人分開照顧。'
  });
})();
