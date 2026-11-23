/* v6 示範主題：攝護腺肥大（B7 女性・男性・生育與兒童）
   查證日期：2026-11-20。數據來源：聯合報元氣周報2026-06-21「健保大數據」報導引述健保署統計（二手）、同日新光醫院與土城醫院泌尿科醫師衛教。
   查無健保署公開原始統計頁，已在預審埋 SOURCE_EVIDENCE。
   參考方向：健康智庫〈攝護腺肥大〉2023/09。 */
(function(){
  const REFS = [
    {title:'攝護腺肥大患者5年增逾16萬人 醫師提醒：夜尿頻繁別只當老化（引述健保署統計）',source:'聯合報元氣周報',url:'https://health.udn.com/health/story/5975/9574800'},
    {title:'半夜一直跑廁所怎麼辦？醫揭改善攝護腺肥大方法 從吃藥到手術一次看懂',source:'聯合報元氣周報',url:'https://health.udn.com/health/story/5975/9574824'}
  ];
  const TABLE = {headers:['常見症狀','說明'], rows:[
    ['頻尿、尿急','白天上廁所次數變多，憋不住'],
    ['夜尿','半夜起床排尿，影響睡眠'],
    ['尿流變細、斷續','排尿變慢、滴滴答答'],
    ['排尿不乾淨','尿完仍覺得有殘尿'],
    ['尿滯留（嚴重）','尿不出來，長期可能損害腎功能，需立即就醫']
  ]};
  const TAGS = ['攝護腺肥大','夜尿','頻尿','男性健康','泌尿保健'];

  const DP_PREV = {id:'dp-bph-prev', type:'data_scope', title:'就醫人數不等於盛行率',
    desc:'健保署統計的是「因攝護腺肥大就醫」的人數（2025年80.6萬人）；醫師說的「50歲以上約5成、80歲以上近8成」是盛行率估計，未說明統計來源與年份。兩者口徑不同，不宜互相換算，AI 沒有替你推算患者總數。',
    current:'2025年因攝護腺肥大就醫80萬6,752人（元氣周報引述健保署）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'80.6 萬人', value:'2025 年就醫人數', note:'健保署統計，經元氣周報引述（目前採用）'},
      {label:'約 5 成／近 8 成', value:'50 歲以上／80 歲以上盛行率', note:'新光醫院泌尿科醫師引述「國內統計」'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'攝護腺肥大5年增逾16萬人：夜尿頻尿別只當老化，尿滯留要立即就醫',
    update_date:'2026/11/20',
    intro:'據聯合報元氣周報引述健保署統計，2025年因攝護腺肥大就醫人數達80萬6,752人，較2021年的63.9萬人增加逾16萬人；就醫者集中於50至79歲，其中70至79歲最多、達26萬275人。健保署資料也顯示，約三分之一病人已出現泌尿道症狀。攝護腺肥大與攝護腺癌是不同疾病，但初期症狀相似，出現排尿變化應就醫評估。',
    sections:[
      {heading:'攝護腺肥大常見症狀',format:'table',table:TABLE},
      {heading:'治療方向',format:'bullets',items:[
        '藥物治療是多數人的第一步，2025年門診用藥患者約40萬6,685人（健保署統計）。',
        '藥物效果不佳、反覆尿滯留或影響腎功能時，醫師會評估手術；經尿道攝護腺刮除術有健保給付，部分微創術式需自費。',
        '部分藥物需持續服用3至6個月才見效，應依醫囑規則用藥並回診追蹤。'
      ]},
      {heading:'生活中可以這樣做',format:'bullets',items:[
        '睡前2至3小時盡量避免喝水，減少夜尿。',
        '少喝咖啡、濃茶等含咖啡因飲品，以免刺激膀胱。',
        '避免憋尿，可在醫師指導下練習骨盆底肌運動。'
      ]}
    ],
    think_tank_view:'夜尿、頻尿常被男性當成「年紀大了正常」而默默忍耐，但長期尿滯留可能傷到膀胱與腎臟。攝護腺肥大不會演變成攝護腺癌，但兩者早期症狀相似，出現排尿變化就讓泌尿科醫師評估，是安心也是保護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'就醫人數標明為媒體引述健保署統計，治療與生活建議標明醫師衛教，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['2025年就醫80萬6,752人、2021年63.9萬人（元氣周報引述健保署）','生活建議取自新光、土城醫院泌尿科醫師衛教'],
      layout_reason:'先用表格對照症狀，再說明治療方向，最後給生活調整建議。',
      tone:'專業易懂', tone_reason:'男性健康議題需直白、去污名化。',
      to_verify:['健保署原始統計表未公開查到，數字為媒體引述','盛行率估計無明確出處']},
    decision_points:[DP_PREV]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'半夜一直跑廁所？攝護腺肥大不是只能忍',
    update_date:'2026/11/20',
    intro:'很多爸爸、阿公晚上要起床好幾次上廁所，以為是年紀大了沒辦法。其實這可能是攝護腺肥大。媒體引述健保署統計，2025年有超過80萬人因為攝護腺肥大看醫生，比5年前多了16萬人。好消息是，吃藥和生活調整就能改善很多。',
    sections:[
      {heading:'這些狀況要注意',format:'table',table:TABLE},
      {heading:'怎麼治療？',format:'bullets',items:[
        '大多數人先從吃藥開始，有些藥要吃3到6個月才看得出效果。',
        '藥物效果不好或尿不出來，醫師會評估手術。'
      ]},
      {heading:'生活小撇步',format:'bullets',items:[
        '睡前2到3小時少喝水。',
        '咖啡、濃茶少喝一點。',
        '想上廁所就去，不要憋。'
      ]}
    ],
    think_tank_view:'如果家裡的長輩常說「晚上睡不好、一直起來尿尿」，可以陪他去看泌尿科。攝護腺肥大不會變成癌症，但及早處理能讓生活品質好很多。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明為媒體引述健保署，語氣親切但未淡化尿滯留風險，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以夜尿情境帶出症狀、治療與生活調整。', tone:'生活親切', tone_reason:'給中高齡男性與家人閱讀。', to_verify:[]},
    decision_points:[DP_PREV]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'攝護腺肥大：夜尿頻尿別硬忍',
    update_date:'2026/11/20',
    intro:'2025年因攝護腺肥大就醫約80.6萬人（元氣周報引述健保署）。夜尿、頻尿、尿流變細要就醫。',
    sections:[
      {heading:'常見症狀',format:'table',table:TABLE},
      {heading:'生活建議',format:'bullets',items:[
        '睡前少喝水、少咖啡因、不憋尿。',
        '尿不出來立即就醫。'
      ]}
    ],
    think_tank_view:'排尿變化及早評估，生活品質差很多。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明引述來源，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為症狀與建議兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_PREV]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'攝護腺肥大', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'攝護腺肥大就醫 5 年增逾 16 萬人', primary_visual:'80.6 萬人', secondary_message:'夜尿頻尿別只當老化', action_priority:'就醫評估、生活調整'},
    headline_hook:'半夜一直跑廁所？', headline_main:'攝護腺肥大別只當老化', title_accent:'別只當老化',
    primary_stat:{kicker:'2025 年・就醫人數', value:'80.6 萬人', label:'因攝護腺肥大就醫', note:'元氣周報引述健保署統計'},
    chart:{type:'bar', title:'攝護腺肥大就醫人數（萬人）', points:[
      {label:'2021', value:63.9, display:'63.9'},
      {label:'2025', value:80.6, display:'80.6', highlight:true}
    ], note:'健保署統計，經媒體引述'},
    secondary_stats:[
      {value:'約 1/3', label:'病人已有泌尿道症狀'},
      {value:'26 萬人', label:'70–79 歲就醫人數最多'}
    ],
    action_title:'男性這樣照顧自己',
    action_cards:[
      {key:'醫', text:'夜尿、頻尿、尿流變細找泌尿科'},
      {key:'水', text:'睡前 2–3 小時少喝水'},
      {key:'咖', text:'少喝咖啡、濃茶，避免刺激膀胱'},
      {key:'急', text:'尿不出來立即就醫'}
    ],
    carousel_suggestion:{reason:'若想把就醫趨勢、症狀與治療分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'就醫 5 年增逾 16 萬', headline_main:'2025 年 80.6 萬人'},
      {layout_type:'knowledge', headline_hook:'半夜一直跑廁所？', headline_main:'攝護腺肥大 5 大症狀'},
      {layout_type:'action', headline_hook:'不是只能忍', headline_main:'生活調整 3 撇步'}]},
    hashtags:['攝護腺肥大','夜尿','男性健康','泌尿保健'],
    sources:['衛生福利部中央健康保險署（媒體引述）','新光醫院'],
    illustration_category:'elderly-care',
    illustration:{topic:'男性泌尿保健', audience:'50 歲以上男性與家人', scene:'一位熟齡男性在泌尿科診間和醫師討論，家人陪同在旁',
      emotion:'安心、願意面對', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older man discussing with a urologist in a clinic while a family member sits beside him, reassured and open, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['2025年80.6萬人、2021年63.9萬人（元氣周報引述健保署）'],
      layout_reason:'關鍵訊息是「就醫人數持續增加」，選 data：就醫人數當主角，兩年比較放右側，症狀比例與年齡退到第二層，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'男性議題需直白、不羞辱。',
      to_verify:['健保署原始統計未查到公開頁面']},
    decision_points:[Object.assign({}, DP_PREV, {current:'80.6 萬人｜2025 年就醫人數'})],
    content_check_note:'就醫人數標明為媒體引述健保署，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'攝護腺肥大',
    collect:{
      summary:'據媒體引述健保署統計，攝護腺肥大就醫人數由2021年63.9萬人增至2025年80.6萬人，以70至79歲最多；高齡化下男性排尿問題持續增加，「夜尿頻尿別只當老化、尿滯留立即就醫」是值得長期溝通的男性健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約80.6萬人：聯合報元氣周報引述健保署統計，2025年因攝護腺肥大就醫80萬6,752人，其中約三分之一（23萬2,582人）出現泌尿道症狀。',tag:'市場觀察',source:{name:'聯合報元氣周報：攝護腺肥大患者5年增逾16萬人（引述健保署）',url:'https://health.udn.com/health/story/5975/9574800'}},
        {item:'年度趨勢方向',desc:'5年增逾16萬人：同篇引述健保署統計，攝護腺肥大就醫人數自2021年63.9萬人逐年增加至2025年80.6萬人，與人口高齡化同步。',tag:'市場觀察',source:{name:'聯合報元氣周報：攝護腺肥大患者5年增逾16萬人（引述健保署）',url:'https://health.udn.com/health/story/5975/9574800'}},
        {item:'政策動向',desc:'約40.7萬人門診用藥：引述健保署統計，2025年門診服藥患者40萬6,685人，經尿道攝護腺刮除術等手術有健保給付，雷射、水刀等微創術式多需自費、約15萬至30萬元。',tag:'市場觀察',source:{name:'聯合報元氣周報：攝護腺肥大患者5年增逾16萬人（引述健保署）',url:'https://health.udn.com/health/story/5975/9574800'}},
        {item:'好發族群年齡層',desc:'70至79歲26萬人最多：引述健保署統計，就醫者集中於50至79歲，49歲以下仍逾4萬人，新光醫院醫師並指出50歲以上男性約50%有不同程度的攝護腺肥大。',tag:'市場觀察',source:{name:'聯合報元氣周報：攝護腺肥大患者5年增逾16萬人（引述健保署）',url:'https://health.udn.com/health/story/5975/9574800'}}
      ],
      product_view:['機會：男性泌尿手術與自費微創術式費用高，可說明手術與醫療保障的條款範圍。','機會：熟齡男性健康管理服務可加入排尿症狀自評。','風險：自費術式不一定在保障範圍，須依保單條款如實說明。'],
      marketing_view:['機會：父親節是男性健康議題的固定溝通時點。','機會：子女提醒爸爸就醫是溫和的溝通切入點。','風險：避免以性功能或羞辱性語氣做話題。'],
      alert_level:'low',
      alert_reason:'就醫人數隨高齡化持續增加，屬長期男性健康議題，適合在父親節前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('2025年因攝護腺肥大就醫人數達80萬6,752人','SOURCE_EVIDENCE','secondary_citation',
          '文中已註明是元氣周報引述健保署統計，但健保署原始統計表沒有公開頁面可查核，屬二手引述。','medium','yes',
          '健保署攝護腺肥大（ICD-10 N40）年度就醫人數統計。','yes','confirm','數字來源可信度高但無法直接核對。',
          '2025年因攝護腺肥大就醫人數達80萬6,752人（元氣周報引述健保署，原始統計待查）'),
        F('攝護腺肥大與攝護腺癌是不同疾病','SOURCE_EVIDENCE','source_unstated',
          '專業易懂版這句沒有標示出處；智庫觀點的「不會演變成攝護腺癌」也沒有引用醫師或學會說法。','low','no',
          null,'no','clarify','補上醫師衛教出處即可。',
          '泌尿科醫師指出，攝護腺肥大與攝護腺癌是不同疾病'),
        F('吃藥和生活調整就能改善很多','COMPLIANCE_RISK','efficacy_claim',
          '生活親切版的「就能改善很多」沒有出處，也沒說明部分患者仍需手術，容易被讀成效果保證。','low','no',
          null,'no','clarify','改為較中性的說法。',
          '多數人可先從藥物和生活調整開始，依醫師評估改善'),
        F('2025年因攝護腺肥大就醫約80.6萬人','SOURCE_EVIDENCE','scope_unstated',
          '簡潔有力版只寫就醫人數，沒有說明這不是盛行率，讀者可能以為全台只有80.6萬名患者。','low','no',
          null,'no','clarify','補上口徑即可。',
          '2025年因攝護腺肥大就醫約80.6萬人（未就醫者不在統計內）')
      ],
      card:[
        F('因攝護腺肥大就醫','SOURCE_EVIDENCE','scope_unstated',
          '主數字是就醫人數，卡面沒有說明未就醫者不在統計內，讀者可能當成患者總數。','low','no',
          null,'no','clarify','屬口徑標示。',
          '因攝護腺肥大就醫（不含未就醫者）'),
        F('健保署統計，經媒體引述','SOURCE_EVIDENCE','secondary_citation',
          '直條圖只有2021與2025兩個點，且來源為媒體轉述，沒有健保署原始數據可對照。','low','yes',
          '健保署2021至2025年攝護腺肥大就醫人數。','no','confirm','屬二手引述。',
          '健保署統計（元氣周報2026年引述）')
      ]
    },
    title_alts:[
      '攝護腺肥大5年增逾16萬人：夜尿頻尿別只當老化，尿滯留要立即就醫',
      '半夜一直跑廁所？攝護腺肥大不是只能忍',
      '攝護腺肥大怎麼治療？從用藥、手術到生活調整'
    ],
    card_title_alts:[
      ['半夜一直跑廁所？','攝護腺肥大別只當老化'],
      ['就醫 5 年增逾 16 萬','2025 年 80.6 萬人'],
      ['不是只能忍','生活調整 3 撇步']
    ],
    data_addon:[
      '攝護腺肥大就醫人數：2021年63.9萬人、2025年80萬6,752人（元氣周報引述健保署）。',
      '2025年門診服藥患者40萬6,685人（同上）。',
      '新光醫院醫師：50歲以上男性約50%、80歲以上近80%有不同程度攝護腺肥大。'
    ],
    cta:'家裡長輩夜尿超過兩次，這個月就陪他掛一次泌尿科。'
  });
})();
