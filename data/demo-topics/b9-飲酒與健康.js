/* v6 示範主題：飲酒與健康（B9 飲食營養與運動）
   查證日期：2026-11-20。數據來源：國健署2024-05-08新聞稿（110年國民健康訪問調查飲酒率與暴飲率、IARC第一類致癌物、酒精不耐症）、衛福部「飲酒無安全量 每一口都是風險」新聞稿（WHO立場、98-106年飲酒率趨勢）、衛福部114年死因統計（慢性肝病及肝硬化）。
   注意：國民健康訪問調查最新公開一期為110年，未查到114年調查結果。
   參考方向：健康智庫〈少量飲酒對健康無害，是真是假？〉2025/05、〈飲酒後臉紅？與基因有關〉2023/07。 */
(function(){
  const REFS = [
    {title:'18歲以上國人 每4人有1人飲酒 拒絕勸酒5招 巧妙適當運用',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=18104'},
    {title:'飲酒無安全量 每一口都是風險 拒酒顧肝，找回彩色人生',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-4626-56202-1.html'},
    {title:'110年國民健康訪問調查 18歲以上人口過去一個月飲酒率（附件）',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-88771-6a42a121-002c-4bd9-9565-adc0d8538ea5.html'},
    {title:'114年死因統計',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}
  ];
  const TABLE = {headers:['說法','國健署／WHO的立場'], rows:[
    ['少量喝酒有益健康','WHO指出飲酒沒有安全量，少量也有致癌風險'],
    ['喝酒臉紅代表酒量好','可能是缺乏乙醛去氫酶（ALDH2），致癌物乙醛累積'],
    ['酒精只傷肝','乙醇為IARC第一類致癌物，也影響神經、消化與心血管系統'],
    ['喝一點再開車沒關係','喝酒不開車，或選擇代駕、大眾運輸']
  ]};
  const TAGS = ['飲酒','酒精','肝臟健康','酒精不耐症','拒絕勸酒'];

  const DP_YEAR = {id:'dp-alcohol-year', type:'data_version', title:'飲酒率有兩種問法',
    desc:'110年調查的24.4%是「過去一個月」飲酒率；較早新聞稿的43%（106年）是「過去一年」飲酒率。兩者回溯期間不同，不能解讀為飲酒人口大幅下降，AI 沒有替你挑選。',
    current:'18歲以上過去一個月飲酒率24.4%（110年國民健康訪問調查）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'24.4%', value:'過去一個月飲酒率', note:'110年國民健康訪問調查（目前採用）'},
      {label:'43%', value:'飲酒率（106年）', note:'衛福部新聞稿；98年為46.2%'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'少量喝酒有益健康？WHO：飲酒沒有安全量',
    update_date:'2026/11/20',
    intro:'依國民健康署110年國民健康訪問調查，18歲以上國人過去一個月飲酒率為24.4%（男性32%、女性17.1%），約每4人就有1人；過去一個月暴飲率（一次喝6杯以上）為3.9%。世界衛生組織指出飲酒並沒有安全量，酒精中的乙醇被國際癌症研究機構列為第一類致癌物。114年死因統計中，與飲酒有關的慢性肝病及肝硬化死亡3,510人。',
    sections:[
      {heading:'常見飲酒說法與正確觀念',format:'table',table:TABLE},
      {heading:'喝酒臉紅是警訊',format:'bullets',items:[
        '台灣近半人口缺乏酒精代謝酵素乙醛去氫酶（ALDH2），俗稱酒精不耐症。',
        '乙醛無法正常代謝時，會出現臉紅、心跳加快、頭痛、頭暈、噁心等反應。',
        '乙醛是毒性致癌物，喝酒臉紅的人更不宜勉強飲酒。'
      ]},
      {heading:'國健署拒絕勸酒建議',format:'bullets',items:[
        '聚餐時減少飲酒量，或以無酒精飲品代替。',
        '營造沒有勸酒壓力的用餐氛圍，尊重他人選擇。',
        '喝酒不開車，選擇代駕或大眾運輸。',
        '青少年仍在發育期，家長以身教避免孩子接觸酒精。'
      ]}
    ],
    think_tank_view:'「小酌怡情」是根深柢固的觀念，但最新的國際共識是：不喝最好，喝得越少越好。對已經習慣飲酒的人，從「不勸酒、不硬喝、喝了不開車」做起，是兼顧社交與健康的實際做法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'飲酒率引自國健署110年國民健康訪問調查並標明年份，致癌分類與無安全量立場分別標明IARC與WHO，死亡人數引自衛福部114年死因統計，未涉及特定酒類品牌。',
    ai_rationale:{basis:['沿用步驟1洞察：18歲以上過去一個月飲酒率24.4%（國健署110年調查）','WHO飲酒無安全量、IARC第一類致癌物（國健署新聞稿引述）'],
      layout_reason:'以「說法 vs 正確觀念」表格破解常見迷思，再說明酒精不耐症，最後給拒酒建議。',
      tone:'專業易懂', tone_reason:'需要清楚區分迷思與事實。',
      to_verify:['國民健康訪問調查最新公開一期為110年','慢性肝病及肝硬化死因也包含病毒性肝炎等非飲酒因素']},
    decision_points:[DP_YEAR]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'喝酒會臉紅是酒量好？聚餐前先搞懂這幾件事',
    update_date:'2026/11/20',
    intro:'聚餐小酌很常見，國健署110年調查，18歲以上大約每4人就有1人在過去一個月喝過酒（24.4%）。很多人覺得喝一點點對身體好，但世界衛生組織說得很清楚：喝酒沒有安全量，少量也有致癌風險。喝酒會臉紅的人，更要特別小心。',
    sections:[
      {heading:'這些說法對不對？',format:'table',table:TABLE},
      {heading:'臉紅不是酒量好',format:'bullets',items:[
        '台灣差不多一半的人，身體缺少分解酒精的酵素。',
        '喝了會臉紅、心跳快、頭暈想吐，是有毒的乙醛在體內累積。',
        '這樣的人更不適合喝酒，也別被勸酒。'
      ]},
      {heading:'聚餐不喝也OK',format:'bullets',items:[
        '點一杯無酒精飲料，一樣能乾杯。',
        '不勸酒，尊重每個人的選擇。',
        '喝了酒就不開車，找代駕或搭車。',
        '在孩子面前少喝酒，就是最好的示範。'
      ]}
    ],
    think_tank_view:'下次聚餐被勸酒，大方說一句「我喝茶就好」。真正的好朋友，會在意你明天的健康。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署110年調查並標明年份，未涉及特定酒類品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以聚餐勸酒的生活情境切入。', tone:'生活親切', tone_reason:'給上班族與聚餐族群。', to_verify:[]},
    decision_points:[DP_YEAR]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'飲酒沒有安全量：迷思與拒酒建議',
    update_date:'2026/11/20',
    intro:'110年18歲以上過去一個月飲酒率24.4%。WHO指出飲酒沒有安全量，乙醇為第一類致癌物。',
    sections:[
      {heading:'迷思破解',format:'table',table:TABLE},
      {heading:'酒精不耐症',format:'bullets',items:[
        '近半國人缺乏ALDH2。',
        '喝酒臉紅代表乙醛累積。'
      ]},
      {heading:'拒酒建議',format:'bullets',items:[
        '以無酒精飲品代替。',
        '不勸酒。',
        '喝酒不開車。'
      ]}
    ],
    think_tank_view:'不喝最好，喝得越少越好；喝酒臉紅者更應避免。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，未涉及特定酒類品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為迷思、不耐症、拒酒三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'飲酒與健康', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'飲酒沒有安全量', primary_visual:'24.4%', secondary_message:'喝酒臉紅是缺乏代謝酵素的警訊', action_priority:'不勸酒、喝酒不開車'},
    headline_hook:'少量喝酒有益健康？', headline_main:'3 個飲酒迷思一次破解', title_accent:'3 個飲酒迷思',
    hero_message:'每 4 人約有 1 人', hero_support:'過去一個月曾飲酒（110 年國健署調查）',
    knowledge_title:'迷思 vs 事實', knowledge_note:'WHO：**飲酒沒有安全量**',
    knowledge_cards:[
      {label:'少量有益健康？', icon:'heart', lines:['少量也有致癌風險','風險隨量增加']},
      {label:'臉紅＝酒量好？', icon:'flask', lines:['可能缺乏 ALDH2','致癌物乙醛累積']},
      {label:'只會傷肝？', icon:'brain', lines:['第一類致癌物','也傷神經與心血管']}
    ],
    primary_stat:{value:'24.4%', label:'18 歲以上過去一個月飲酒率', note:'國健署 110 年國民健康訪問調查｜男 32%、女 17.1%'},
    secondary_stats:[
      {value:'3.9%', label:'過去一個月暴飲率'},
      {value:'3,510 人', label:'114 年慢性肝病及肝硬化死亡'}
    ],
    action_title:'聚餐這樣做',
    action_cards:[
      {key:'換', text:'以無酒精飲品代替'},
      {key:'拒', text:'不勸酒，尊重他人選擇'},
      {key:'車', text:'喝酒不開車，找代駕或搭車'},
      {key:'教', text:'在孩子面前少喝酒'}
    ],
    carousel_suggestion:{reason:'若想把迷思、酒精不耐症與拒酒技巧分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'少量喝酒有益健康？', headline_main:'3 個飲酒迷思'},
      {layout_type:'knowledge', headline_hook:'喝酒會臉紅', headline_main:'是酒精不耐症警訊'},
      {layout_type:'action', headline_hook:'聚餐不喝也 OK', headline_main:'拒絕勸酒 4 招'}]},
    hashtags:['飲酒','酒精','肝臟健康','拒絕勸酒'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'general',
    illustration:{topic:'拒絕勸酒', audience:'上班族與聚餐族群', scene:'朋友聚餐時，一人舉起茶杯微笑乾杯，其他人也拿著無酒精飲料',
      emotion:'輕鬆、自在', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'Friends at a dinner gathering toasting with tea cups and non-alcoholic drinks, smiling and relaxed, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：18歲以上過去一個月飲酒率24.4%（國健署110年調查）','WHO飲酒無安全量（衛福部新聞稿引述）'],
      layout_reason:'核心是破解「少量有益」等迷思，選 knowledge：3 個迷思與事實當主角，飲酒率退到下方，最後給聚餐行動。',
      tone:'專業易懂', tone_reason:'破除迷思但不說教。',
      to_verify:['慢性肝病及肝硬化死亡含非飲酒因素']},
    decision_points:[Object.assign({}, DP_YEAR, {current:'24.4%｜18 歲以上過去一個月飲酒率（110 年）'})],
    content_check_note:'數據引自國健署與衛福部並標明年份，未涉及特定酒類品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'飲酒與健康',
    collect:{
      summary:'110年國民健康訪問調查顯示18歲以上過去一個月飲酒率24.4%、暴飲率3.9%；WHO指出飲酒沒有安全量，乙醇為第一類致癌物，台灣近半人口有酒精不耐症。聚餐勸酒文化與「少量有益」迷思仍是溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'24.4%：國健署110年國民健康訪問調查，18歲以上人口過去一個月飲酒率為24.4%（男性32%、女性17.1%），過去一個月暴飲率為3.9%。',tag:'官方統計',source:{name:'國健署：18歲以上國人 每4人有1人飲酒',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=18104'}},
        {item:'好發族群年齡層',desc:'31.3%：110年調查中18-29歲族群過去一個月飲酒率最高，65歲以上為11.8%。',tag:'官方統計',source:{name:'衛福部：110年國民健康訪問調查飲酒率附件',url:'https://www.mohw.gov.tw/dl-88771-6a42a121-002c-4bd9-9565-adc0d8538ea5.html'}},
        {item:'年度趨勢方向',desc:'約3500人：衛福部114年死因統計中慢性肝病及肝硬化死亡人數約3500人（3510人），國健署將其列為與飲酒有關的死因，但此死因亦包含病毒性肝炎等非飲酒因素。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'政策動向',desc:'近半人口有酒精不耐症：國健署指出台灣近半人口缺乏乙醛去氫酶（ALDH2），並響應每年5月9日台灣無酒日，推廣「無酒、節酒、零酒精」與拒絕勸酒5招。',tag:'官方統計',source:{name:'國健署：18歲以上國人 每4人有1人飲酒',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=18104'}}
      ],
      product_view:['機會：飲酒與肝病、癌症及酒駕事故相關，可連結重大疾病與意外保障的衛教說明。','機會：「無酒聚餐」可作為職場健康促進活動。','風險：避免以飲酒與否做出未經核保規則支持的說法；不宜醜化飲酒者。'],
      marketing_view:['機會：尾牙、春節聚餐、5月9日台灣無酒日是固定溝通時點。','機會：「喝酒臉紅＝酒量好？」的迷思題適合互動測驗。','風險：飲酒率口徑（過去一個月 vs 過去一年）容易混用，需註明。'],
      alert_level:'low',
      alert_reason:'屬長期健康行為議題；年節聚餐期間可加強溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('與飲酒有關的慢性肝病及肝硬化死亡3,510人','DATA_FACTUAL_ACCURACY','attribution_overreach',
          '慢性肝病及肝硬化死因也包含B、C型肝炎等非飲酒因素，句子容易讓讀者以為3,510人都因飲酒死亡。','medium','no',
          null,'no','clarify','數字正確，屬歸因範圍。',
          '慢性肝病及肝硬化（飲酒為危險因子之一）死亡3,510人'),
        F('台灣近半人口缺乏酒精代謝酵素乙醛去氫酶（ALDH2）','SOURCE_EVIDENCE','unspecified_study',
          '國健署新聞稿以「研究顯示」帶過，未說明研究出處與年份；屬二手引述。','low','yes',
          '「台灣近半人口ALDH2缺乏」所依據的研究名稱與年份。','no','confirm','國健署多篇新聞稿均引用此說法。',
          '國健署引述研究指出，台灣近半人口缺乏酒精代謝酵素乙醛去氫酶（ALDH2）',
          ['台灣差不多一半的人，身體缺少分解酒精的酵素','近半國人缺乏ALDH2。']),
        F('世界衛生組織指出飲酒並沒有安全量','SOURCE_EVIDENCE','secondary_citation',
          'WHO立場轉引自衛福部新聞稿，文中未標示WHO發表的年份或文件名稱，讀者無法追溯原始出處。','low','yes',
          'WHO關於「飲酒無安全量」聲明的原始文件與發表年份。','no','confirm','屬出處層級說明。',
          '世界衛生組織（WHO）聲明指出飲酒並沒有安全量（衛福部新聞稿引述）',
          ['世界衛生組織說得很清楚：喝酒沒有安全量','WHO指出飲酒沒有安全量'])
      ],
      card:[
        F('114 年慢性肝病及肝硬化死亡','DATA_FACTUAL_ACCURACY','attribution_overreach',
          '放在飲酒主題卡上，讀者可能以為全部與飲酒有關；此死因亦包含病毒性肝炎等因素。','low','no',
          null,'no','clarify','屬歸因範圍。',
          '114 年慢性肝病及肝硬化死亡（含非飲酒因素）'),
        F('可能缺乏 ALDH2','TERMINOLOGY_LANGUAGE','jargon',
          'ALDH2 為專業縮寫，一般讀者不易理解，宜搭配中文說明。','low','no',
          null,'no','clarify','屬用語易讀性。',
          '可能缺乏代謝酵素')
      ]
    },
    title_alts:[
      '少量喝酒有益健康？WHO：飲酒沒有安全量',
      '喝酒會臉紅是酒量好？聚餐前先搞懂這幾件事',
      '每4人約1人近月飲酒：3個飲酒迷思與拒酒5招'
    ],
    card_title_alts:[
      ['少量喝酒有益健康？','3 個飲酒迷思一次破解'],
      ['喝酒會臉紅？','是酒精不耐症警訊'],
      ['聚餐不喝也 OK','拒絕勸酒 4 招']
    ],
    data_addon:[
      '18歲以上飲酒率由98年46.2%降至106年43%（過去一年，衛福部新聞稿）。',
      '青少年曾經飲酒率由98年25.7%升至106年27.7%。',
      '國健署響應每年5月9日「台灣無酒日」，推廣無酒、節酒、零酒精。'
    ],
    cta:'下次聚餐先準備好一句「我喝茶就好」，並主動不勸酒；喝了酒就安排代駕或搭車。'
  });
})();
