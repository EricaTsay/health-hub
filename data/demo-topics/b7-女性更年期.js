/* v6 示範主題：女性更年期（B7 女性・男性・生育與兒童）
   查證日期：2026-11-21。數據來源：衛福部／國健署新聞稿（2022-10-18「女性1/3的歲月在更年期後渡過」、2025-10-17「F4生活守則 更年期遠離代謝症候群」）。
   50至59歲停經比例出自國民健康訪問調查，新聞稿未註明調查年份。
   參考方向：健康智庫〈邁入更年期！改善不適這樣做〉2022/10。 */
(function(){
  const REFS = [
    {title:'「F4」生活守則 更年期遠離代謝症候群',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-84238-1.html'},
    {title:'女性1/3的歲月在更年期後渡過 3個秘訣改善更年期不適',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-71961-1.html'}
  ];
  const TABLE = {headers:['F4生活守則','怎麼做'], rows:[
    ['Food 聰明飲食','六大類均衡，少油、少鹽、少糖、高纖'],
    ['Fitness 活力運動','每天至少30分鐘、每週150分鐘以上中度活動，搭配肌力與伸展'],
    ['Friend 親朋陪伴','多與親友分享心事，保持良好互動'],
    ['Feeling 心靈支持','閱讀、音樂、瑜珈等嗜好舒緩壓力']
  ]};
  const TAGS = ['更年期','女性健康','代謝症候群','熱潮紅','熟齡健康'];

  const DP_IMPROVE = {id:'dp-meno-improve', type:'data_version', title:'改善比例：標題與內文不同',
    desc:'國健署2025年新聞稿小標寫「近4成代謝症候群異常指標獲改善」，內文則寫追蹤約2.7萬名45至55歲女性中「近3成5（約9千多人）」獲改善。AI 採用內文較精確的數字，供你確認。',
    current:'近3成5異常指標獲改善（約2.7萬人追蹤3次以上）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'近 3 成 5', value:'新聞稿內文', note:'約9千多人／2.7萬人（目前採用）'},
      {label:'近 4 成', value:'新聞稿小標', note:'同一篇新聞稿的標題說法'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'更年期不只熱潮紅：45至55歲女性約2成有代謝症候群，F4生活守則來幫忙',
    update_date:'2026/11/21',
    intro:'女性更年期大約發生在45至52歲，平均停經年齡約50歲，一生約有1/3的歲月在更年期後度過。國民健康署指出，依國民健康訪問調查，50至54歲婦女約8成、55至59歲約9成已有經期不規律或停經的變化；而依成人預防保健服務結果，45至55歲正值更年期的女性約有2成罹患代謝症候群。除了處理熱潮紅、失眠等不適，更年期也是重新檢視生活習慣的關鍵時機。',
    sections:[
      {heading:'國健署「F4」生活守則',format:'table',table:TABLE},
      {heading:'常見的更年期變化',format:'bullets',items:[
        '常見不適包括熱潮紅、盜汗、心悸、失眠、煩躁與記憶力減退。',
        '國健署建議睡前做泡熱水澡、冥想、深呼吸等放鬆活動，幫助入眠。',
        '飲食遵守低脂、高纖、高鈣原則，可選擇黃豆製品、全穀雜糧等食物。'
      ]},
      {heading:'健康管理與就醫',format:'bullets',items:[
        '國健署追蹤至少3次的45至55歲女性約2.7萬人中，近3成5的代謝症候群異常指標獲改善。',
        '善用40歲以上成人預防保健服務，檢查血壓、血糖、血脂與腰圍。',
        '不適嚴重影響日常生活時，應尋求婦產科或家醫科醫師協助。'
      ]}
    ],
    think_tank_view:'更年期常被當成「忍一下就過去」的階段，但它其實是女性健康的轉折點：荷爾蒙變化讓代謝症候群、骨鬆等風險上升。把熱潮紅、失眠當成提醒，順勢建立F4生活習慣並定期健檢，往後三分之一的人生會更有底氣。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明出處，50至59歲停經比例未註明調查年份，未使用療效保證用語，未涉及具體商品或荷爾蒙療法建議。',
    ai_rationale:{basis:['45至55歲約2成代謝症候群、近3成5改善（國健署2025-10-17）','停經年齡、50至59歲比例、症狀（國健署2022-10-18）'],
      layout_reason:'先用表格整理F4守則，再說明症狀與舒緩，最後給健康管理與就醫方向。',
      tone:'專業易懂', tone_reason:'女性健康資訊需具體、去污名化。',
      to_verify:['50至59歲停經比例的國民健康訪問調查年份未註明','荷爾蒙療法未查到國健署建議，未寫']},
    decision_points:[DP_IMPROVE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'熱潮紅、睡不好、心情起伏？更年期這樣照顧自己',
    update_date:'2026/11/21',
    intro:'媽媽最近常說睡不好、突然一陣熱？可能是更年期到了。國健署說，女性大約在45到52歲進入更年期，平均50歲左右停經。這段時間除了身體不舒服，也要注意代謝問題：45到55歲的女性，大約每5人就有1人有代謝症候群。',
    sections:[
      {heading:'F4生活守則，一起做',format:'table',table:TABLE},
      {heading:'常見的不舒服',format:'bullets',items:[
        '熱潮紅、半夜流汗、心悸。',
        '睡不好、容易煩躁、記性變差。',
        '睡前泡個熱水澡、做做深呼吸，比較好入睡。'
      ]},
      {heading:'家人可以幫忙',format:'bullets',items:[
        '多聽媽媽說說心情，陪她散步運動。',
        '提醒她做成人健檢，量量血壓、血糖。',
        '不舒服到影響生活，陪她去看婦產科或家醫科。'
      ]}
    ],
    think_tank_view:'更年期不是「女人的命」，而是需要被理解的身體變化。家人的一句關心、一起散步的時間，就是最好的支持。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署，語氣親切，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家人觀察的情境帶出守則與支持。', tone:'生活親切', tone_reason:'給熟齡女性與家人閱讀。', to_verify:[]},
    decision_points:[DP_IMPROVE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'更年期：F4生活守則',
    update_date:'2026/11/21',
    intro:'45至55歲更年期女性約2成有代謝症候群（國健署）。F4生活守則加上定期健檢，顧好下半場。',
    sections:[
      {heading:'F4',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '善用成人預防保健服務。',
        '不適嚴重時找婦產科或家醫科。'
      ]}
    ],
    think_tank_view:'更年期是調整生活習慣的好時機。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為守則與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_IMPROVE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'女性更年期', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'更年期女性約 2 成有代謝症候群', primary_visual:'約 2 成', secondary_message:'F4 生活守則改善健康', action_priority:'Food、Fitness、Friend、Feeling'},
    headline_hook:'熱潮紅、睡不好？', headline_main:'更年期 F4 生活守則', title_accent:'F4',
    hero_message:'45–55 歲約 2 成', hero_support:'有代謝症候群（國健署成人預防保健結果）',
    primary_stat:{value:'近 3 成 5', label:'追蹤後代謝異常指標改善', note:'國健署｜45–55 歲女性約 2.7 萬人'},
    action_title:'F4 生活守則',
    action_cards:[
      {key:'食', text:'六大類均衡，少油鹽糖、高纖'},
      {key:'動', text:'每週 150 分鐘中度活動加肌力'},
      {key:'友', text:'多與親友分享心事'},
      {key:'心', text:'用閱讀、音樂、瑜珈舒緩壓力'}
    ],
    notice:'不適嚴重影響生活，請找**婦產科或家醫科**協助。',
    carousel_suggestion:{reason:'若想把症狀、代謝風險與生活守則分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'更年期常見變化', headline_main:'熱潮紅、失眠、心悸'},
      {layout_type:'data', headline_hook:'代謝風險', headline_main:'45–55 歲約 2 成'},
      {layout_type:'action', headline_hook:'F4 生活守則', headline_main:'吃、動、友、心'}]},
    hashtags:['更年期','女性健康','代謝症候群','熟齡健康'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'metabolic',
    illustration:{topic:'更年期健康生活', audience:'45 至 55 歲女性', scene:'兩位熟齡女性朋友一起在公園快走聊天，手上拿著水壺',
      emotion:'輕鬆、互相支持', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'Two middle-aged women friends brisk-walking and chatting in a park, holding water bottles, relaxed and supportive, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['約2成、近3成5（國健署2025-10-17）'],
      layout_reason:'關鍵是生活習慣介入，選 action：F4 四項行動當主角，代謝風險當 hero，改善比例退到下方。',
      tone:'專業易懂', tone_reason:'正向、可執行。',
      to_verify:['新聞稿標題與內文改善比例不一致']},
    decision_points:[Object.assign({}, DP_IMPROVE, {current:'近 3 成 5｜追蹤後改善'})],
    content_check_note:'數據與守則引自國健署，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'女性更年期',
    collect:{
      summary:'女性平均約50歲停經、一生約1/3歲月在更年期後度過；國健署指出45至55歲更年期女性約2成有代謝症候群，推動「F4」生活守則並搭配成人預防保健追蹤，近3成5異常指標獲改善。「把更年期當成健康轉折點」是熟齡女性值得長期溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約2成：國健署依成人預防保健服務結果指出，45至55歲正值更年期的女性約有2成罹患代謝症候群。',tag:'官方統計',source:{name:'衛生福利部：「F4」生活守則 更年期遠離代謝症候群',url:'https://mohw.gov.tw/cp-16-84238-1.html'}},
        {item:'年度趨勢方向',desc:'近3成5獲改善：國健署追蹤至少3次的45至55歲女性約2.7萬人中，近3成5（約9千多人）代謝症候群異常指標獲改善，近1成5緩解為非代謝症候群。',tag:'官方統計',source:{name:'衛生福利部：「F4」生活守則 更年期遠離代謝症候群',url:'https://mohw.gov.tw/cp-16-84238-1.html'}},
        {item:'政策動向',desc:'約44萬人接受健康管理：國健署2022年7月起推動代謝症候群防治計畫，3年來超過3,100家診所、5,200位醫師投入，並推廣F4（Food、Fitness、Friend、Feeling）生活守則。',tag:'官方統計',source:{name:'衛生福利部：「F4」生活守則 更年期遠離代謝症候群',url:'https://mohw.gov.tw/cp-16-84238-1.html'}},
        {item:'好發族群年齡層',desc:'約8成（50至54歲）：國健署引國民健康訪問調查，50至54歲婦女約8成、55至59歲約9成有經期不規律或已停經的更年期變化，平均停經年齡約50歲（調查年份未註明）。',tag:'官方統計',source:{name:'衛生福利部：女性1/3的歲月在更年期後渡過 3個秘訣改善更年期不適',url:'https://mohw.gov.tw/cp-16-71961-1.html'}}
      ],
      product_view:['機會：熟齡女性健康管理是長期經營的客群，可結合成人健檢提醒。','機會：代謝症候群與慢性病風險相關，可延伸至健康管理服務。','風險：避免推薦荷爾蒙或保健食品，依醫師建議為準。'],
      marketing_view:['機會：10月18日世界更年期日是固定溝通時點。','機會：「子女關心媽媽更年期」是溫暖的切入點。','風險：避免以老化、失去女性魅力等負面框架溝通。'],
      alert_level:'low',
      alert_reason:'屬長期熟齡女性健康議題，適合在世界更年期日前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('50至54歲婦女約8成、55至59歲約9成已有經期不規律或停經的變化','SOURCE_EVIDENCE','survey_year_unstated',
          '文中已註明出自國民健康訪問調查，但國健署新聞稿沒有寫調查年份，讀者無法判斷資料新舊。','low','yes',
          '國民健康訪問調查中婦女停經比例的調查年份。','no','confirm','數字出處明確但年份不明。',
          '50至54歲婦女約8成、55至59歲約9成已有經期不規律或停經的變化（國民健康訪問調查，年份待查）'),
        F('往後三分之一的人生會更有底氣','COMPLIANCE_RISK','vague_promise',
          '智庫觀點的「更有底氣」帶有效果承諾意味，沒有對應的數據支持。','low','no',
          null,'no','clarify','屬語氣調整。',
          '能為往後的生活打下健康基礎'),
        F('大約每5人就有1人有代謝症候群','SOURCE_EVIDENCE','source_unstated',
          '生活親切版沒有說明是成人預防保健服務的受檢者結果，讀者可能以為是全國盛行率調查。','low','no',
          null,'no','clarify','補上資料來源即可。',
          '依國健署成人預防保健結果，大約每5人就有1人有代謝症候群'),
        F('45至55歲更年期女性約2成有代謝症候群（國健署）','SOURCE_EVIDENCE','population_scope',
          '簡潔有力版沒說明這是成人預防保健受檢者的結果，非全國抽樣調查。','low','no',
          null,'no','clarify','補上口徑即可。',
          '45至55歲更年期女性約2成有代謝症候群（國健署成人預防保健結果）')
      ],
      card:[
        F('追蹤後代謝異常指標改善','SOURCE_EVIDENCE','conflicting_figures',
          '主數字「近 3 成 5」取自新聞稿內文，但同一篇新聞稿小標寫「近4成」，對外引用時可能被指出數字不一致。','low','no',
          null,'no','clarify','屬出處內部不一致。',
          '追蹤後代謝異常指標改善（新聞稿內文）'),
        F('有代謝症候群（國健署成人預防保健結果）','SOURCE_EVIDENCE','population_scope',
          '「約 2 成」是成人預防保健受檢者的結果，卡面沒有說明非全國抽樣，讀者可能當成全國盛行率。','low','no',
          null,'no','clarify','屬口徑說明。',
          '有代謝症候群（成人預防保健受檢者）')
      ]
    },
    title_alts:[
      '更年期不只熱潮紅：45至55歲女性約2成有代謝症候群，F4生活守則來幫忙',
      '熱潮紅、睡不好、心情起伏？更年期這樣照顧自己',
      '更年期是健康轉折點：國健署F4生活守則一次看'
    ],
    card_title_alts:[
      ['熱潮紅、睡不好？','更年期 F4 生活守則'],
      ['45–55 歲約 2 成','有代謝症候群'],
      ['吃、動、友、心','顧好更年期']
    ],
    data_addon:[
      '女性更年期約發生在45至52歲，平均停經年齡約50歲（國健署）。',
      '45至55歲更年期女性約2成有代謝症候群（國健署成人預防保健結果）。',
      '追蹤約2.7萬人，近3成5代謝異常指標改善、近1成5緩解（國健署2025）。'
    ],
    cta:'這個月陪家中熟齡女性做一次成人健檢，量腰圍、血壓、血糖、血脂。'
  });
})();
