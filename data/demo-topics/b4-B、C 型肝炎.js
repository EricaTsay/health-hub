/* v6 示範主題：B、C 型肝炎（B4 消化・肝膽・呼吸）
   查證日期：2026-11-20。數據來源：衛福部〈2025世界肝炎日〉（114/07/25，篩檢人數、陽性率、114/08/01擴大篩檢）、
   衛福部〈消除C肝 接軌國際 政府出錢 您來篩檢〉（113/07/25）、衛福部114年死因統計（表1、表13、表34 慢性肝病及肝硬化、肝癌）。
   註：B、C肝帶原人數官方估計多為較早年份，本題不採用。
   參考方向：健康智庫〈病毒性B、C、D肝炎〉2022/08。 */
(function(){
  const REFS = [
    {title:'2025世界肝炎日：台灣與全球同行，打破阻礙、終結肝炎',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-83197-1.html'},
    {title:'消除C肝 接軌國際 政府出錢 您來篩檢',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-79443-1.html'},
    {title:'114年死因統計結果分析',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'},
    {title:'114年死因統計摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}
  ];
  const TABLE = {headers:['項目','B型肝炎','C型肝炎'], rows:[
    ['主要傳染途徑','母嬰垂直傳染、血液、性行為','血液（共用針具、不安全刺青穿耳等）'],
    ['疫苗','有，嬰兒常規接種','目前沒有疫苗'],
    ['治療目標','長期追蹤，必要時用藥控制病毒','口服藥物治癒率近99%，健保給付'],
    ['帶原或感染後','每6-12個月追蹤肝功能與超音波','治癒後仍需依醫師建議追蹤']
  ]};
  const TAGS = ['B型肝炎','C型肝炎','肝炎篩檢','肝癌預防','成人預防保健'];

  const DP_DEATH = {id:'dp-hep-death', type:'data_scope', title:'肝病死亡數字的範圍',
    desc:'死因統計的「慢性肝病及肝硬化」包含病毒性、酒精性與其他原因；「肝和肝內膽管癌」則另列於癌症死因。兩者都不等於B、C肝炎死亡人數，AI 文中標註範圍。',
    current:'114年慢性肝病及肝硬化死亡3,510人',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'3,510人', value:'慢性肝病及肝硬化', note:'114年，死因第12位（目前採用）'},
      {label:'7,601人', value:'肝和肝內膽管癌', note:'114年，癌症死因第2位'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'B、C型肝炎是肝癌的主要元凶：一生一次免費篩檢，篩檢年齡已擴大',
    update_date:'2026/11/20',
    intro:'慢性B、C型肝炎是國人肝硬化與肝癌的重要危險因子。依衛生福利部114年死因統計，慢性肝病及肝硬化死亡3,510人，肝和肝內膽管癌死亡7,601人，居癌症死因第2位。國民健康署提供成人一生一次免費B、C型肝炎篩檢，截至114年3月已有超過734萬名45至79歲民眾完成C型肝炎檢查；B型肝炎篩檢陽性率由100年的15.6%降至114年的9.5%，C型肝炎陽性率由3.6%降至1.5%。自114年8月1日起，篩檢對象擴大為民國75年以前出生至79歲民眾。',
    sections:[
      {heading:'B肝與C肝的差異',format:'table',table:TABLE},
      {heading:'誰可以做免費篩檢',format:'bullets',items:[
        '民國75年以前出生至79歲民眾，終身可接受一次免費B、C型肝炎篩檢（114年8月1日起）。',
        '原住民篩檢年齡較一般民眾提前。',
        '可至提供成人預防保健服務的醫療院所，或透過健保署「健保特約醫事機構查詢」選擇預防保健服務項目查詢。'
      ]},
      {heading:'日常預防這樣做',format:'bullets',items:[
        '不共用針具、牙刷、刮鬍刀、指甲剪等個人物品。',
        '避免不安全的刺青、穿耳、針灸，工具須充分消毒。',
        '未接種過B型肝炎疫苗者，可洽詢醫療機構接種；落實安全性行為。'
      ]}
    ],
    think_tank_view:'肝臟沒有痛覺神經，B、C肝炎常在沒有症狀下默默進展成肝硬化或肝癌。慢性肝病及肝硬化死亡人數已從104年的4,878人降到114年的3,510人，篩檢與治療功不可沒。還沒篩過的人，趁這波年齡擴大把握一生一次的機會；已知帶原者，則要固定回診追蹤，這兩步就是預防肝癌最有效的做法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'篩檢人數與陽性率引自衛福部114年世界肝炎日新聞，死亡人數引自衛福部114年死因統計並標註範圍，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['734萬人、B肝陽性率15.6%→9.5%取自衛福部114/07/25新聞','慢性肝病及肝硬化3,510人、肝癌7,601人取自衛福部114年死因統計'],
      layout_reason:'以表格對照B肝與C肝差異，再說明篩檢資格與日常預防。',
      tone:'專業易懂', tone_reason:'篩檢資格需要清楚對照。',
      to_verify:['C肝陽性率3.6%→1.5%的對應年份新聞未載明','2025年消除C肝目標是否達成，未查到官方結論','原住民篩檢起始年齡於114年擴大後是否調整']},
    decision_points:[DP_DEATH]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'肝不會痛，所以更要篩！B、C肝免費篩檢一生一次',
    update_date:'2026/11/20',
    intro:'肝臟生病時通常不會痛，很多人是到肝硬化、肝癌才發現自己有B肝或C肝。衛福部114年統計，肝癌死亡7,601人，是第2大癌症死因。好消息是，國健署提供一生一次免費B、C肝篩檢，114年8月起只要是民國75年以前出生、79歲以下都可以做；到114年3月已有超過734萬人完成C肝檢查。',
    sections:[
      {heading:'B肝、C肝哪裡不一樣？',format:'table',table:TABLE},
      {heading:'我可以免費篩嗎？',format:'bullets',items:[
        '民國75年以前出生、79歲以下，一生可以免費篩一次。',
        '原住民朋友可以更早開始篩。',
        '到有提供成人預防保健的診所或醫院就能做。'
      ]},
      {heading:'平常這樣保護肝',format:'bullets',items:[
        '牙刷、刮鬍刀、指甲剪不要和別人共用。',
        '刺青、穿耳洞要找工具有消毒的地方。',
        '沒打過B肝疫苗的人可以問醫師補打。'
      ]}
    ],
    think_tank_view:'C肝現在吃藥就有機會治好，B肝只要固定追蹤也能及早發現問題。抽一管血就能知道答案，這次年齡放寬，記得揪爸媽和自己一起去篩。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部公開資料並標明年份，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「肝不會痛」破題，帶出篩檢資格。', tone:'生活親切', tone_reason:'給一般民眾與家人閱讀。', to_verify:['原住民篩檢年齡的最新規定']},
    decision_points:[DP_DEATH]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'B、C型肝炎：一生一次免費篩檢',
    update_date:'2026/11/20',
    intro:'114年肝癌死亡7,601人，居癌症死因第2位。114年8月起，民國75年以前出生至79歲可免費篩B、C肝一次。',
    sections:[
      {heading:'B肝vs C肝',format:'table',table:TABLE},
      {heading:'篩檢資格',format:'bullets',items:[
        '民國75年以前出生至79歲，終身一次。'
      ]},
      {heading:'預防',format:'bullets',items:[
        '不共用個人物品，刺青穿耳要消毒。'
      ]}
    ],
    think_tank_view:'篩檢找出帶原、C肝治療、B肝定期追蹤，是預防肝癌的三步驟。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部公開資料並標明年份，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為差異、資格、預防三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['篩檢資格以國健署最新公告為準']},
    decision_points:[DP_DEATH]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'B、C 型肝炎', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'逾 734 萬人已完成 C 肝檢查', primary_visual:'逾 734 萬人', secondary_message:'篩檢年齡 114 年 8 月起擴大', action_priority:'一生一次免費篩檢'},
    headline_hook:'肝不會痛，更要篩', headline_main:'B、C 肝免費篩檢一生一次', title_accent:'一生一次',
    primary_stat:{kicker:'截至 114 年 3 月', value:'逾 734 萬人', label:'完成 C 型肝炎檢查', note:'衛福部｜45–79 歲民眾'},
    chart:{type:'bar', title:'慢性肝病及肝硬化死亡（人）', points:[
      {label:'2015', value:4878, display:'4,878'},
      {label:'2018', value:4490, display:'4,490'},
      {label:'2021', value:4065, display:'4,065'},
      {label:'2025', value:3510, display:'3,510', highlight:true}
    ], note:'衛福部死因統計｜含病毒性、酒精性等'},
    secondary_stats:[
      {value:'9.5%', label:'114 年 B 肝篩檢陽性率（100 年 15.6%）'},
      {value:'7,601 人', label:'114 年肝癌死亡，癌症第 2 位'}
    ],
    action_title:'護肝這樣做',
    action_cards:[
      {key:'篩', text:'75 年以前出生至 79 歲免費篩 1 次'},
      {key:'追', text:'B 肝帶原者定期追蹤肝功能與超音波'},
      {key:'治', text:'確診 C 肝，健保給付口服藥'},
      {key:'防', text:'不共用牙刷刮鬍刀，刺青穿耳要消毒'}
    ],
    carousel_suggestion:{reason:'若想把篩檢成果、B/C肝差異與篩檢資格分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'篩檢成果', headline_main:'逾 734 萬人完成 C 肝檢查'},
      {layout_type:'comparison', headline_hook:'B 肝 vs C 肝', headline_main:'傳染途徑與治療差異'},
      {layout_type:'action', headline_hook:'篩檢資格擴大', headline_main:'75 年以前出生就能篩'}]},
    hashtags:['B型肝炎','C型肝炎','肝炎篩檢','肝癌預防'],
    sources:['衛生福利部','衛生福利部國民健康署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'B、C肝炎篩檢', audience:'中壯年與長輩', scene:'成年子女陪父母到診所抽血檢查，護理師在旁說明',
      emotion:'安心、互相提醒', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult child accompanying an older parent at a clinic for a blood test while a nurse explains, reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：截至114年3月逾734萬人完成C肝檢查（衛福部）','慢性肝病及肝硬化歷年死亡取自死因統計表34'],
      layout_reason:'關鍵訊息是「篩檢有成、肝病死亡下降、篩檢資格擴大」，選 data：篩檢人數當主角，死亡人數下降趨勢放右側，最後給 4 個護肝行動。',
      tone:'專業易懂', tone_reason:'篩檢資訊需清楚可行。',
      to_verify:['慢性肝病死亡含酒精性等，非僅B、C肝','108年起死因選取準則改版']},
    decision_points:[Object.assign({}, DP_DEATH, {current:'3,510 人｜114 年慢性肝病及肝硬化死亡（含各種原因）'})],
    content_check_note:'篩檢人數與陽性率引自衛福部並標明年份，死亡人數引自衛福部死因統計並標註範圍，未使用療效保證用語，未涉及具體藥品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'B、C 型肝炎',
    collect:{
      summary:'慢性B、C型肝炎是肝硬化與肝癌的重要危險因子，114年肝癌死亡7,601人居癌症第2位；國健署B、C肝篩檢已逾734萬人完成C肝檢查，114年8月起擴大至民國75年以前出生民眾，篩檢與治療是肝病防治的溝通主軸。',
      objective_data:[
        {item:'盛行率／發生率',desc:'9.5%：國健署成人B、C肝篩檢中，B型肝炎陽性率由100年的15.6%降至114年的9.5%，C型肝炎陽性率由3.6%降至1.5%。',tag:'官方統計',source:{name:'衛生福利部：2025世界肝炎日',url:'https://mohw.gov.tw/cp-16-83197-1.html'}},
        {item:'年度趨勢方向',desc:'3510人死於慢性肝病及肝硬化：衛福部114年死因統計，慢性肝病及肝硬化死亡3,510人，較104年4,878人下降，111年起已退出十大死因。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果分析',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'好發族群年齡層',desc:'7601人死於肝癌：114年肝和肝內膽管癌死亡7,601人，居癌症死因第2位，男性5,153人高於女性。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'逾734萬人完成C肝檢查：截至114年3月，全國超過734萬名45至79歲民眾完成C型肝炎檢查，114年8月1日起免費篩檢擴大至民國75年以前出生至79歲民眾。',tag:'官方統計',source:{name:'衛生福利部：2025世界肝炎日',url:'https://mohw.gov.tw/cp-16-83197-1.html'}}
      ],
      product_view:['機會：B、C肝與肝癌關聯高，可連結癌症與重大疾病保障，並強調篩檢後持續追蹤。','機會：提醒保戶使用成人預防保健B、C肝篩檢，作為健康管理服務。','風險：帶原者可能面臨核保疑慮，內容需避免污名化，也不宜暗示篩檢結果影響投保權益的細節。'],
      marketing_view:['機會：每年7月28日世界肝炎日是固定溝通檔期。','機會：114年8月篩檢年齡擴大，「75年以前出生就能篩」是清楚的行動訊息。','風險：避免讓帶原者感到被標籤化，用語宜中性。'],
      alert_level:'medium',
      alert_reason:'114年8月起免費篩檢年齡擴大，新增符合資格者需要被告知；適合在世界肝炎日與成人健檢季節溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('慢性肝病及肝硬化死亡3,510人','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '慢性肝病及肝硬化包含酒精性、脂肪肝等非病毒性原因，放在B、C肝文章中未標註範圍，讀者可能以為全是肝炎造成。','low','no',
          null,'no','clarify','屬統計範圍說明。',
          '慢性肝病及肝硬化（含病毒性、酒精性等各種原因）死亡3,510人'),
        F('原住民篩檢年齡較一般民眾提前','DATA_FACTUAL_ACCURACY','vague_term',
          '未寫出原住民的篩檢起始年齡，讀者無法判斷自己是否符合資格。','low','yes',
          '114年8月擴大後原住民篩檢起始年齡規定。','yes','confirm','擴大後規定需查國健署最新公告。',
          '原住民篩檢起始年齡較一般民眾提前（詳見國健署成人預防保健公告）',
          ['原住民朋友可以更早開始篩']),
        F('C型肝炎陽性率由3.6%降至1.5%','CURRENCY_TIMELINESS','source_year_unstated',
          '衛福部新聞未寫C肝陽性率對應的年份，文中直接引用，讀者無法得知比較期間。','low','yes',
          'C肝篩檢陽性率3.6%與1.5%對應的年份。','yes','confirm','新聞稿未載明年份。',
          'C型肝炎陽性率也由3.6%降至1.5%（比較年份待確認）'),
        F('C肝現在吃藥就有機會治好','MEDICAL_INTERPRETATION','treatment_claim',
          '口服藥治癒率雖高，但仍需完成療程並由醫師評估，文中未提醒，可能讓讀者輕忽就醫追蹤。','low','no',
          null,'no','clarify','屬療效表達提醒。',
          'C肝現在經醫師評估、完成口服藥療程，就有很高機會治癒')
      ],
      card:[
        F('確診 C 肝，健保給付口服藥','REGULATORY_COMPLIANCE','coverage_condition',
          '健保給付有用藥條件與登錄規定，卡面未提醒依醫師評估。','low','no',
          null,'no','clarify','屬給付條件說明。',
          '確診 C 肝，經醫師評估健保給付口服藥'),
        F('慢性肝病及肝硬化死亡（人）','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '圖表為所有原因的慢性肝病，卡面主題為B、C肝，note 已標但讀者可能誤讀為肝炎死亡趨勢。','low','no',
          null,'no','clarify','屬統計範圍說明。',
          '慢性肝病及肝硬化死亡（各原因，人）')
      ]
    },
    title_alts:[
      'B、C型肝炎是肝癌的主要元凶：一生一次免費篩檢，篩檢年齡已擴大',
      '肝不會痛，所以更要篩！B、C肝免費篩檢一生一次',
      '逾734萬人完成C肝檢查：75年以前出生就能免費篩B、C肝'
    ],
    card_title_alts:[
      ['肝不會痛，更要篩','B、C 肝免費篩檢一生一次'],
      ['篩檢年齡擴大','75 年以前出生就能篩'],
      ['B 肝 vs C 肝','篩檢、追蹤與治療']
    ],
    data_addon:[
      '113年起成人預防保健B、C肝篩檢費用由200元提高至370元，鼓勵院所主動轉介。',
      '擴大篩檢前每年僅篩檢8.5萬人，109年擴大後每年可篩檢80至100萬人。',
      '慢性肝病及肝硬化自92年第8名持續下降，111年退出十大死因。'
    ],
    cta:'如果你是民國75年以前出生、還沒篩過B、C肝，這個月就到成人預防保健院所抽血篩一次，也提醒家人一起去。'
  });
})();
