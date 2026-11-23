/* v6 示範主題：隱性肥胖（瘦胖子）（B9 飲食營養與運動）
   查證日期：2026-11-20。數據來源：衛福部111-11-08新聞稿（2017-2020年國民營養健康調查：BMI正常者近2成腰圍過大）、國健署2025-03-04新聞稿（2018-2022成人過重及肥胖率50.8%）、國健署2023-03-03新聞稿（學童過重肥胖率）、國健署成人健康體位標準頁。
   注意：國內沒有查到「隱性肥胖」（BMI正常但體脂過高）的官方盛行率，本題以「BMI正常但腰圍過大」作為最接近的官方指標，並於決策點說明。
   參考方向：健康智庫〈看不見的胖更可怕！你聽過「瘦胖子」嗎？〉2024/04。 */
(function(){
  const REFS = [
    {title:'19歲以上國人超過5成腰圍過大 BMI正常者 仍有2成腰圍過大',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/fp-16-72293-1.html'},
    {title:'邀全民響應世界肥胖日 一起認識肥胖 改變觀點互相支持與陪伴',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=16703'},
    {title:'響應世界肥胖日 健康吃 動起來 維持健康體位更健康',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18922'},
    {title:'成人健康體位標準',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=542&pid=9737'}
  ];
  const TABLE = {headers:['指標','看什麼'], rows:[
    ['BMI','體重÷身高²；18.5≦BMI＜24為健康體重，但看不出脂肪與肌肉比例'],
    ['腰圍','反映腹部（內臟）脂肪；男性≧90公分、女性≧80公分為過大'],
    ['生活型態','久坐、少運動、常吃高油高糖食物，即使體重正常也要留意']
  ]};
  const TAGS = ['隱性肥胖','瘦胖子','內臟脂肪','肌力訓練','健康體位'];

  const DP_PROXY = {id:'dp-hidden-proxy', type:'data_scope', title:'沒有「隱性肥胖」的官方盛行率',
    desc:'國內未查到以體脂率定義「隱性肥胖」的全國調查；目前用的是國健署「BMI正常但腰圍過大近2成」作為最接近的官方指標。兩者定義不同（體脂 vs 腰圍），AI 沒有用其他推估數字替代。',
    current:'BMI正常者仍有近2成腰圍過大（2017-2020年國民營養健康調查）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'近2成', value:'BMI正常但腰圍過大', note:'國健署2017-2020年調查（目前採用）'},
      {label:'查無', value:'BMI正常但體脂率過高', note:'未查到國內官方全國調查'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'體重正常就安心？認識「隱性肥胖」與看不見的內臟脂肪',
    update_date:'2026/11/20',
    intro:'BMI是國民健康署判斷成人體位的主要指標，18.5至24之間屬健康體重。但BMI只看身高與體重，無法分辨脂肪和肌肉，也看不出脂肪藏在哪裡。依2017至2020年國民營養健康調查，BMI正常者仍有近2成腰圍過大；另依2018-2022年國民營養健康調查，18歲以上成人過重及肥胖率為50.8%。體重正常、但肌肉少而內臟脂肪多的狀態，就是俗稱的「隱性肥胖」或「瘦胖子」。',
    sections:[
      {heading:'看體位不能只看BMI',format:'table',table:TABLE},
      {heading:'哪些人可能是瘦胖子',format:'bullets',items:[
        '體重沒變，但褲子變緊、腰圍變大。',
        '長期久坐、幾乎不運動，靠少吃維持體重。',
        '常吃精緻澱粉、含糖飲料與高油食物。',
        '健檢時BMI正常，但血脂或血糖已出現異常。'
      ]},
      {heading:'改善方向：減脂也要增肌',format:'bullets',items:[
        '量腰圍：男性小於90公分、女性小於80公分。',
        '每週累積至少150分鐘中等強度身體活動，並搭配肌力訓練。',
        '依我的餐盤均衡飲食，蛋白質食物要吃足。',
        '不靠節食減重，避免肌肉一起流失。'
      ]}
    ],
    think_tank_view:'「我又不胖」常是健康管理的盲點。瘦胖子的問題不在體重數字，而在身體組成：肌肉太少、脂肪太多。與其追求更輕的體重，不如把目標放在腰圍變小、力氣變大。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'體位標準與調查數據引自國健署並標明年份，「隱性肥胖」為俗稱並說明非官方診斷名詞，未涉及具體減重或體脂計商品。',
    ai_rationale:{basis:['BMI正常者近2成腰圍過大（國健署2017-2020年調查）','成人過重及肥胖率50.8%（國健署2018-2022年調查）'],
      layout_reason:'先用表格說明BMI的盲點與腰圍的意義，再列出可能族群，最後給增肌減脂方向。',
      tone:'專業易懂', tone_reason:'需要釐清觀念。',
      to_verify:['國內沒有以體脂率定義的隱性肥胖官方盛行率']},
    decision_points:[DP_PROXY]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'看起來不胖，健檢卻紅字？你可能是「瘦胖子」',
    update_date:'2026/11/20',
    intro:'很多人覺得自己體重正常就不用擔心，但體重計看不出身上是肌肉還是脂肪。國健署調查發現，BMI正常的人裡面，還是有近2成腰圍過大。這種外表不胖、肚子和內臟卻藏了不少脂肪的狀態，就是大家說的「瘦胖子」。',
    sections:[
      {heading:'除了體重，還要看這些',format:'table',table:TABLE},
      {heading:'你是不是瘦胖子？',format:'bullets',items:[
        '體重沒變，褲子卻越穿越緊。',
        '整天坐著，很少運動，只靠少吃控制體重。',
        '常喝手搖飲、吃炸物和麵包甜點。',
        'BMI正常，健檢卻出現血脂或血糖紅字。'
      ]},
      {heading:'從今天開始這樣做',format:'bullets',items:[
        '拿皮尺量一下腰圍。',
        '每週動滿150分鐘，再加上一些肌力訓練。',
        '三餐吃均衡，魚肉豆蛋要吃夠。',
        '不要用節食減重，肌肉會一起變少。'
      ]}
    ],
    think_tank_view:'與其每天量體重，不如每週量一次腰圍、試試看能不能多做幾下深蹲。身體變結實，比數字變小更重要。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，「瘦胖子」為俗稱，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「不胖卻健檢紅字」的反差切入。', tone:'生活親切', tone_reason:'給在意體態的年輕上班族。', to_verify:[]},
    decision_points:[DP_PROXY]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'隱性肥胖：BMI正常，腰圍卻過大',
    update_date:'2026/11/20',
    intro:'BMI正常者仍有近2成腰圍過大（2017-2020年調查）。BMI看不出脂肪與肌肉比例。',
    sections:[
      {heading:'評估指標',format:'table',table:TABLE},
      {heading:'可能族群',format:'bullets',items:[
        '久坐少動、靠節食控制體重。',
        'BMI正常但健檢血脂、血糖異常。'
      ]},
      {heading:'改善方向',format:'bullets',items:[
        '量腰圍。',
        '每週150分鐘活動＋肌力訓練。',
        '均衡飲食、不節食。'
      ]}
    ],
    think_tank_view:'目標不是更輕，而是腰圍變小、肌力變好。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為指標、族群、改善三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'隱性肥胖（瘦胖子）', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'BMI 正常者近 2 成腰圍過大', primary_visual:'近 2 成', secondary_message:'BMI 看不出脂肪與肌肉比例', action_priority:'量腰圍、增肌減脂'},
    headline_hook:'體重正常就安心？', headline_main:'小心看不見的「瘦胖子」', title_accent:'瘦胖子',
    hero_message:'近 2 成', hero_support:'BMI 正常者仍腰圍過大（2017–2020 年國健署調查）',
    knowledge_title:'這些訊號要留意', knowledge_note:'不只看體重，**也要量腰圍**',
    knowledge_cards:[
      {label:'腰圍變大', icon:'waist', lines:['男 ≥ 90 公分','女 ≥ 80 公分']},
      {label:'久坐少動', icon:'people', lines:['靠少吃控制體重']},
      {label:'健檢紅字', icon:'report', lines:['BMI 正常','血脂、血糖異常']}
    ],
    primary_stat:{value:'近 2 成', label:'BMI 正常仍腰圍過大', note:'國健署 2017–2020 年國民營養健康調查'},
    secondary_stats:[
      {value:'50.8%', label:'成人過重及肥胖率'}
    ],
    action_title:'增肌減脂這樣做',
    action_cards:[
      {key:'量', text:'每週量腰圍，不只量體重'},
      {key:'動', text:'每週 150 分鐘活動加肌力訓練'},
      {key:'吃', text:'均衡飲食，蛋白質吃足'},
      {key:'不', text:'不節食，避免肌肉流失'}
    ],
    carousel_suggestion:{reason:'若想把概念、自我檢查與改善行動分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'體重正常就安心？', headline_main:'近 2 成腰圍過大'},
      {layout_type:'knowledge', headline_hook:'瘦胖子', headline_main:'3 個訊號自我檢查'},
      {layout_type:'action', headline_hook:'增肌減脂', headline_main:'4 個日常行動'}]},
    hashtags:['隱性肥胖','瘦胖子','內臟脂肪','肌力訓練'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'增肌減脂', audience:'年輕上班族', scene:'一位身形纖瘦的上班族在家用彈力帶做肌力訓練，旁邊放著皮尺',
      emotion:'有活力、自我照顧', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A slim office worker doing resistance band strength training at home with a tape measure nearby, energetic and self-caring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['BMI正常者近2成腰圍過大（國健署2017-2020年調查）'],
      layout_reason:'核心是破除「體重正常就沒事」，選 knowledge：3 個自我檢查訊號當主角，最後給增肌減脂行動。',
      tone:'專業易懂', tone_reason:'釐清觀念並給具體行動。',
      to_verify:['以腰圍作為隱性肥胖的替代指標']},
    decision_points:[Object.assign({}, DP_PROXY, {current:'近 2 成｜BMI 正常仍腰圍過大（2017–2020 年）'})],
    content_check_note:'數據引自國健署並標明年份，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'隱性肥胖（瘦胖子）',
    collect:{
      summary:'BMI只反映身高體重比，看不出脂肪與肌肉比例；國健署2017-2020年調查顯示BMI正常者仍有近2成腰圍過大，2018-2022年成人過重及肥胖率達50.8%。「瘦胖子」提醒民眾，體重正常不代表身體組成健康，需搭配腰圍與肌力管理。',
      objective_data:[
        {item:'盛行率／發生率',desc:'近2成：依2017至2020年國民營養健康調查，BMI屬於正常的民眾仍有近2成腰圍過大，國健署指出民眾較注意體重控制而容易輕忽腰圍管理。',tag:'官方統計',source:{name:'國健署：BMI正常者 仍有2成腰圍過大',url:'https://www.mohw.gov.tw/fp-16-72293-1.html'}},
        {item:'年度趨勢方向',desc:'50.8%：國健署2025年3月引用2018-2022年國民營養健康調查，18歲以上成人達過重及肥胖標準者為50.8%。',tag:'官方統計',source:{name:'國健署：響應世界肥胖日 維持健康體位更健康',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18922'}},
        {item:'好發族群年齡層',desc:'31.2%：國中學生110學年度過重及肥胖率為31.2%，國小學童為27.1%，學童與青少年體位問題也有升高趨勢。',tag:'官方統計',source:{name:'國健署：邀全民響應世界肥胖日',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=16703'}},
        {item:'政策動向',desc:'BMI 18.5至24為健康體重：國健署以BMI區分成人體位，並以男性腰圍90公分、女性80公分以上為腰圍過大，建議BMI與腰圍一起看。',tag:'官方統計',source:{name:'國健署：成人健康體位標準',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=542&pid=9737'}}
      ],
      product_view:['機會：隱性肥胖與三高風險相關，可連結健康管理與肌力促進服務。','機會：「BMI正常也要量腰」可作為年輕保戶的健康提醒。','風險：避免推薦體脂計、代餐或減重商品；「隱性肥胖」非醫學診斷名詞，避免當成疾病描述。'],
      marketing_view:['機會：「瘦胖子」是社群熟悉的話題，反差感高。','機會：可結合居家肌力訓練做互動內容。','風險：避免身材焦慮與外表評價語氣。'],
      alert_level:'low',
      alert_reason:'屬長期健康體位議題，無急迫時效；可配合3月4日世界肥胖日溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('就是俗稱的「隱性肥胖」或「瘦胖子」','TERMINOLOGY_LANGUAGE','non_medical_term',
          '「隱性肥胖」「瘦胖子」並非國健署或醫學上的正式診斷名詞，文中未說明，讀者可能以為是一種疾病分類。','low','no',
          null,'no','clarify','屬用語說明。',
          '就是俗稱的「隱性肥胖」或「瘦胖子」（非正式醫學診斷名詞）',
          ['就是大家說的「瘦胖子」']),
        F('BMI正常者仍有近2成腰圍過大','DATA_FACTUAL_ACCURACY','proxy_indicator',
          '隱性肥胖一般指體脂率偏高，但文中引用的是「腰圍過大」比例；兩者定義不同，未說明是以腰圍作為替代指標。','medium','no',
          null,'no','clarify','國內無體脂率定義的官方盛行率。',
          'BMI正常者仍有近2成腰圍過大（以腰圍作為內臟脂肪的參考指標）',
          ['BMI正常的人裡面，還是有近2成腰圍過大']),
        F('不靠節食減重，避免肌肉一起流失','SOURCE_EVIDENCE','unsourced_claim',
          '「節食會造成肌肉流失」未附出處，本文引用的國健署資料未直接說明此點。','low','yes',
          '國健署或營養學會關於節食減重與肌肉流失的衛教資料。','no','confirm','屬常見營養衛教說法，需補出處。',
          '不靠極端節食減重，並與營養師討論減重方式',
          ['不要用節食減重，肌肉會一起變少','均衡飲食、不節食。'])
      ],
      card:[
        F('不節食，避免肌肉流失','SOURCE_EVIDENCE','unsourced_claim',
          '節食與肌肉流失的關係未標出處。','low','no',
          null,'no','clarify','屬常見衛教說法。',
          '不極端節食，均衡攝取熱量'),
        F('成人過重及肥胖率','DATA_FACTUAL_ACCURACY','missing_year',
          '次數字 50.8% 未標示調查年份。','low','no',
          null,'no','clarify','屬標示完整度。',
          '成人過重及肥胖率（2018–2022）')
      ]
    },
    title_alts:[
      '體重正常就安心？認識「隱性肥胖」與看不見的內臟脂肪',
      '看起來不胖，健檢卻紅字？你可能是「瘦胖子」',
      'BMI正常仍近2成腰圍過大：瘦胖子的增肌減脂行動'
    ],
    card_title_alts:[
      ['體重正常就安心？','小心看不見的「瘦胖子」'],
      ['看起來不胖','健檢卻出現紅字？'],
      ['增肌減脂','4 個日常行動']
    ],
    data_addon:[
      '成人體位：過輕BMI<18.5、健康體重18.5≦BMI<24、過重24≦BMI<27、肥胖BMI≧27（國健署）。',
      '18歲以上成人過重及肥胖率50.8%（2018-2022年國民營養健康調查）。',
      '國小學童110學年度過重及肥胖率27.1%。'
    ],
    cta:'這週量一次腰圍，並在每天的活動裡加入10分鐘肌力訓練，例如扶椅深蹲。'
  });
})();
