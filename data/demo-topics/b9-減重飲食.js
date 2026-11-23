/* v6 示範主題：減重飲食（B9 飲食營養與運動）
   查證日期：2026-11-21。數據來源：衛福部／國健署〈聰明吃 快樂動 天天量體重 減重抗疫情〉（每日少500大卡每週約減0.5公斤、熱量不低於1200大卡、三多三少）、〈肥胖是慢性疾病！調整飲食及運動生活是最佳處方〉（減重5%的效益、三種減重方式1年成效、肥胖相關疾病風險）、國健署2025-03-04世界肥胖日新聞稿（2018-2022成人過重及肥胖率50.8%）。
   參考方向：健康智庫〈營養健康－減重飲食〉〈營養健康－飲食控制〉2024/06。 */
(function(){
  const REFS = [
    {title:'聰明吃 快樂動 天天量體重 減重抗疫情',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-4633-52590-1.html'},
    {title:'肥胖是慢性疾病！調整飲食及運動生活是最佳處方',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-3796-42429-1.html'},
    {title:'響應世界肥胖日 健康吃 動起來 維持健康體位更健康',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18922'}
  ];
  const TABLE = {headers:['減重方式','1年約可減重（以90公斤為例）'], rows:[
    ['自我管理：調整飲食與身體活動','3-5%（約3-5公斤）'],
    ['專業協助：個別化運動處方與低熱量飲食','5-10%（約5-9公斤）'],
    ['醫師評估加上藥物輔助','5-11%（約5-10公斤），仍須同時調整生活']
  ]};
  const TAGS = ['減重','體重管理','熱量控制','健康飲食','肥胖'];

  const PRO = {
    content_type:'健康文章',
    title:'健康減重怎麼吃？每天少500大卡、熱量不低於1200大卡',
    update_date:'2026/11/21',
    intro:'依國民健康署2018-2022年國民營養健康調查，18歲以上成人過重及肥胖率為50.8%。國健署建議，減少熱量攝取或增加身體活動，讓每天減少500大卡，每週約可減重0.5公斤；但每日攝取熱量若低於1200大卡，反而會危害健康。研究證實，肥胖者只要減少5%以上體重（如90公斤減5公斤），就能為健康帶來許多益處。',
    sections:[
      {heading:'不同減重方式的1年成效',format:'table',table:TABLE},
      {heading:'減重飲食三多三少',format:'bullets',items:[
        '多喝白開水、多吃蔬果、多吃全穀雜糧。',
        '少油、少鹽、少糖。',
        '依活動量估算每日所需熱量，再決定各類食物份量。',
        '不聽信偏方、不採取極端節食。'
      ]},
      {heading:'為什麼值得減',format:'bullets',items:[
        '國健署指出，肥胖者發生糖尿病、代謝症候群及血脂異常的風險超過健康體重者3倍。',
        '高血壓、心血管疾病、膝關節炎及痛風的風險約為2倍。',
        '肥胖已被世界衛生組織視為一種慢性疾病。'
      ]}
    ],
    think_tank_view:'健康減重最重要的不是速度，而是能不能持續。每天少500大卡、每週減半公斤聽起來很慢，但一年下來就是看得見的改變，也比極端節食更不容易復胖。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'熱量建議、減重成效與疾病風險引自國健署，過重肥胖率標明調查年份，未推薦特定減重產品或療程，藥物輔助已註明須經醫師評估。',
    ai_rationale:{basis:['每日少500大卡、每週約減0.5公斤、不低於1200大卡（國健署）','減重5%即有健康效益（國健署）'],
      layout_reason:'先用表格比較不同減重方式的成效，再給三多三少飲食原則，最後說明減重的健康效益。',
      tone:'專業易懂', tone_reason:'需提供具體熱量與速度。',
      to_verify:['疾病風險倍數出自國健署107年新聞稿，未標示原始研究']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'想瘦不用餓肚子！每天少500大卡就好',
    update_date:'2026/11/21',
    intro:'台灣成年人大約每2人就有1人過重或肥胖（2018-2022年50.8%）。想減重，國健署建議每天少吃或多動消耗掉500大卡，一週大約可以瘦半公斤。千萬不要餓過頭，一天吃不到1200大卡反而傷身。好消息是，只要減掉原本體重的5%，身體就會有感。',
    sections:[
      {heading:'怎麼減比較有效？',format:'table',table:TABLE},
      {heading:'三多三少吃法',format:'bullets',items:[
        '多喝水、多吃蔬果、多吃全穀。',
        '少油、少鹽、少糖。',
        '先算算自己一天需要多少熱量。',
        '不要相信偏方，也不要餓肚子減肥。'
      ]},
      {heading:'為什麼要減？',format:'bullets',items:[
        '肥胖的人得糖尿病、血脂異常的風險是一般人的3倍以上。',
        '高血壓、膝蓋退化、痛風的風險也加倍。',
        '肥胖本身就是一種慢性病。'
      ]}
    ],
    think_tank_view:'一週半公斤看起來不多，但慢慢來才不會復胖。今天就從少一杯含糖飲料開始。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署並標明年份，未推薦特定減重產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以「不用餓肚子」的期待切入。', tone:'生活親切', tone_reason:'給想減重的一般讀者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'減重：每天少500大卡，不低於1200大卡',
    update_date:'2026/11/21',
    intro:'每天減少500大卡，每週約減0.5公斤；每日熱量勿低於1200大卡。減重5%即有健康效益。',
    sections:[
      {heading:'減重成效',format:'table',table:TABLE},
      {heading:'飲食原則',format:'bullets',items:[
        '三多：水、蔬果、全穀。',
        '三少：油、鹽、糖。'
      ]},
      {heading:'健康效益',format:'bullets',items:[
        '降低糖尿病、血脂異常等風險。'
      ]}
    ],
    think_tank_view:'慢慢減、持續做，比快速瘦更重要。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為成效、原則、效益三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'減重飲食', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'每天少 500 大卡，每週約減 0.5 公斤', primary_visual:'500 大卡', secondary_message:'每日熱量不低於 1200 大卡', action_priority:'三多三少'},
    headline_hook:'想瘦不用餓肚子', headline_main:'每天少 500 大卡就好', title_accent:'500 大卡',
    hero_message:'每週約 0.5 公斤', hero_support:'每天減少 500 大卡的減重速度（國健署）',
    primary_stat:{value:'50.8%', label:'成人過重及肥胖率', note:'國健署 2018–2022 年調查'},
    action_title:'減重這樣吃',
    action_cards:[
      {key:'算', text:'依活動量估算每日所需熱量'},
      {key:'多', text:'多喝水、多蔬果、多全穀'},
      {key:'少', text:'少油、少鹽、少糖'},
      {key:'底', text:'每日熱量不低於 1200 大卡'}
    ],
    notice:'減掉原本體重的 **5%**，就能帶來健康益處。',
    carousel_suggestion:{reason:'若想把減重速度、飲食原則與健康效益分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'成人過重肥胖', headline_main:'每 2 人約 1 人'},
      {layout_type:'action', headline_hook:'每天少 500 大卡', headline_main:'三多三少這樣吃'},
      {layout_type:'knowledge', headline_hook:'減重 5%', headline_main:'就有健康效益'}]},
    hashtags:['減重','體重管理','熱量控制','健康飲食'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'健康減重', audience:'想減重的成人', scene:'一位成人在餐桌前吃一盤有大量蔬菜、糙米與魚的均衡餐，旁邊有一杯白開水與體重計',
      emotion:'輕鬆、有信心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult at a dining table eating a balanced plate with plenty of vegetables, brown rice and fish, a glass of water and a bathroom scale nearby, relaxed and confident, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['每日少500大卡、每週約減0.5公斤（國健署）'],
      layout_reason:'重點是可執行的飲食原則，選 action：4 個行動當主角，過重肥胖率當背景。',
      tone:'專業易懂', tone_reason:'具體數字。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自國健署並標明年份，未推薦特定產品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'減重飲食',
    collect:{
      summary:'2018-2022年成人過重及肥胖率50.8%；國健署建議每天減少500大卡、每週約減0.5公斤，且每日熱量不低於1200大卡，減重5%即有健康效益。極端節食與偏方仍常見，「慢慢減、能持續」是溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'50.8%：國健署2025年3月引用2018-2022年國民營養健康調查，18歲以上成人達過重及肥胖標準者為50.8%。',tag:'官方統計',source:{name:'國健署：響應世界肥胖日 維持健康體位更健康',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18922'}},
        {item:'政策動向',desc:'每天少500大卡：國健署建議減少熱量攝取或增加體能活動，讓每天減少500大卡，每週約可減重0.5公斤，每日攝取熱量若低於1200大卡反而會危害健康。',tag:'官方統計',source:{name:'國健署：聰明吃 快樂動 天天量體重',url:'https://www.mohw.gov.tw/cp-4633-52590-1.html'}},
        {item:'年度趨勢方向',desc:'減少5%以上體重：國健署指出研究證實肥胖者減少5%以上體重（如90公斤減5公斤）即可帶來許多健康益處，自我調整生活1年約可減重3-5%。',tag:'官方統計',source:{name:'國健署：肥胖是慢性疾病',url:'https://www.mohw.gov.tw/cp-3796-42429-1.html'}},
        {item:'好發族群年齡層',desc:'超過3倍：國健署指出肥胖者發生糖尿病、代謝症候群及血脂異常的風險超過健康體重者3倍，高血壓、心血管疾病、膝關節炎及痛風約2倍。',tag:'官方統計',source:{name:'國健署：肥胖是慢性疾病',url:'https://www.mohw.gov.tw/cp-3796-42429-1.html'}}
      ],
      product_view:['機會：體重管理與多種慢性病相關，可作為健康管理服務核心內容。','機會：「每天少500大卡」易轉為飲食記錄活動。','風險：避免推薦減重產品、代餐或療程；藥物減重須強調醫師評估。'],
      marketing_view:['機會：年後、夏季前是減重話題高峰。','機會：「不用餓肚子」反直覺訊息易引起關注。','風險：避免身材焦慮與極端減重的暗示。'],
      alert_level:'low',
      alert_reason:'屬長期健康管理議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('肥胖者發生糖尿病、代謝症候群及血脂異常的風險超過健康體重者3倍','SOURCE_EVIDENCE','unspecified_study',
          '風險倍數出自國健署107年新聞稿，未列原始研究；文中未標示資料年份。','low','yes',
          '國健署新聞稿所引用的肥胖疾病風險原始研究與年份。','no','confirm','屬出處完整度。',
          '依國健署107年資料，肥胖者發生糖尿病、代謝症候群及血脂異常的風險超過健康體重者3倍',
          ['肥胖的人得糖尿病、血脂異常的風險是一般人的3倍以上']),
        F('每週約可減重0.5公斤','MEDICAL_INTERPRETATION','oversimplification',
          '500大卡赤字對應0.5公斤是理論估算，實際減重速度會受體型、身體組成與代償作用影響，文中未說明個人差異。','low','no',
          null,'no','clarify','屬估算說明。',
          '每週約可減重0.5公斤（理論估算，個人差異大）',
          ['一週大約可以瘦半公斤','每週約減0.5公斤']),
        F('醫師評估加上藥物輔助','LEGAL_COMPLIANCE','prescription_drug_mention',
          '提及藥物減重成效可能被讀成推薦用藥；國健署原文強調藥物「只有輔助效果、須醫師處方、仍需同時調整生活」，表格中僅部分保留。','low','no',
          null,'no','clarify','屬法遵用語。',
          '經醫師評估處方、藥物僅為輔助')
      ],
      card:[
        F('每天減少 500 大卡的減重速度（國健署）','MEDICAL_INTERPRETATION','oversimplification',
          '理論估算，個人差異大。','low','no',
          null,'no','clarify','屬估算說明。',
          '每天少 500 大卡的估算速度（國健署）'),
        F('每日熱量不低於 1200 大卡','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '1200大卡為一般成人下限，孕哺、青少年、高活動量者需求不同，宜由營養師評估。','low','no',
          null,'no','clarify','屬適用對象。',
          '每日熱量不低於 1200 大卡（一般成人）')
      ]
    },
    title_alts:[
      '健康減重怎麼吃？每天少500大卡、熱量不低於1200大卡',
      '想瘦不用餓肚子！每天少500大卡就好',
      '減重5%就有感：國健署三多三少減重法'
    ],
    card_title_alts:[
      ['想瘦不用餓肚子','每天少 500 大卡就好'],
      ['減重 5% 就有感','三多三少這樣吃'],
      ['每週半公斤','慢慢減不復胖']
    ],
    data_addon:[
      '依2015-2018年調查，18歲以上成人過重及肥胖率47.1%（男55.7%、女38.7%）。',
      '國內BMI≧24為過重、≧27為肥胖（國健署）。',
      '藥物減重只有輔助效果，須醫師處方並同時調整生活（國健署）。'
    ],
    cta:'這週記錄三天的飲食，找出一個每天可以少掉的500大卡來源（例如一杯全糖飲料加一份炸物）。'
  });
})();
