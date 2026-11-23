/* v6 示範主題：幽門螺旋桿菌感染（B4 消化・肝膽・呼吸）
   查證日期：2026-11-20。數據來源：國健署〈預防胃癌再升級 115年起全面推動公費「胃幽門螺旋桿菌」檢測〉（2026/01/27）、
   國健署〈遠離「胃」險 減少幽門螺旋桿菌感染〉（2025/02/24）、衛福部114年死因統計（表13 胃癌）。
   參考方向：健康智庫〈幽門螺旋桿菌感染〉2022/09、〈公費癌篩加一？認識胃幽門螺旋桿菌篩檢〉2024/07。 */
(function(){
  const REFS = [
    {title:'預防胃癌再升級 115年起全面推動公費「胃幽門螺旋桿菌」檢測',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=5020&pid=19802'},
    {title:'遠離「胃」險 減少幽門螺旋桿菌感染 讓「胃」來越健康',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18900'},
    {title:'114年死因統計摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}
  ];
  const TABLE = {headers:['公費胃幽門桿菌檢測','說明'], rows:[
    ['對象','45至74歲民眾，終身1次（115年1月1日起全面提供）'],
    ['方式','糞便抗原檢測，可與大腸癌篩檢一起領管、採便、回管'],
    ['結果陽性','攜帶報告回診，依醫囑接受除菌治療或進一步檢查'],
    ['家人','鼓勵共同生活的家人一起檢測']
  ]};
  const TAGS = ['幽門螺旋桿菌','胃癌預防','公費篩檢','公筷母匙','腸胃健康'];

  const DP_RANK = {id:'dp-hp-rank', type:'data_scope', title:'胃癌排名兩篇新聞說法不同',
    desc:'國健署2026年新聞寫胃癌為十大癌症死亡第7名、發生第9名；2025年新聞寫死亡與發生皆第8名。年份與統計版本不同，AI 文中只寫人數（每年逾4,000人新診斷、2,000多人死亡），不寫排名。',
    current:'每年約逾4,000人新診斷胃癌、2,000多人死於胃癌（國健署2026年）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'死亡第7、發生第9', value:'國健署2026/01/27', note:'較新'},
      {label:'死亡、發生皆第8', value:'國健署2025/02/24', note:'較舊'},
      {label:'2,225人', value:'114年胃癌死亡', note:'衛福部死因統計'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'胃癌8至9成和幽門桿菌有關：45至74歲公費檢測一生一次',
    update_date:'2026/11/20',
    intro:'幽門螺旋桿菌是會長期住在胃黏膜的細菌，是慢性胃炎、消化性潰瘍與胃癌的重要危險因子。國民健康署指出，我國20歲以上成年人感染盛行率達30%，約有8至9成胃癌由幽門螺旋桿菌感染引起；每年約逾4,000人新診斷胃癌，依衛生福利部114年死因統計，胃癌死亡2,225人。自115年1月1日起，國健署全面提供45至74歲民眾終身1次公費糞便抗原檢測。',
    sections:[
      {heading:'公費檢測怎麼做',format:'table',table:TABLE},
      {heading:'為什麼要檢測與除菌',format:'bullets',items:[
        '國健署指出，感染者罹患胃癌的風險高於未感染者6至10倍，世界衛生組織於1994年將幽門螺旋桿菌列為第一級致癌物。',
        '胃癌早期（0+1期）5年存活率約可達7成5以上，晚期（第4期）不到1成，及早發現差距很大。',
        '陽性者依醫師指示完成除菌療程，不可自行中斷服藥。'
      ]},
      {heading:'日常預防：保胃5招',format:'bullets',items:[
        '使用公筷母匙，避免共用杯子與餐具，減少共食。',
        '避免生食及不潔食物，保持均衡飲食與良好飲食習慣。',
        '遠離菸、檳榔、酒，規律運動；腸胃不適及早就醫。'
      ]}
    ],
    think_tank_view:'幽門桿菌常在家庭中透過共食傳播，很多人感染多年都沒有症狀。現在45至74歲可以和大腸癌篩檢一起採便檢測，一次完成兩項篩檢。檢測陽性不必驚慌，按醫囑完成除菌、並請同住家人一起檢查，是降低全家胃癌風險最直接的一步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'感染率、胃癌比例與公費檢測資格引自國健署2025-2026年新聞，死亡人數引自衛福部114年死因統計，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['感染盛行率30%、胃癌8至9成、逾4,000人新診斷取自國健署2026/01/27新聞','胃癌死亡2,225人取自衛福部114年死因統計表13'],
      layout_reason:'先以表格說明公費檢測，再說明檢測與除菌的理由，最後整理日常預防。',
      tone:'專業易懂', tone_reason:'篩檢資訊需清楚可行。',
      to_verify:['20歲以上感染盛行率30%新聞未寫調查年份','兩篇新聞胃癌排名不一致，文中未寫排名']},
    decision_points:[DP_RANK]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'全家一起夾菜也會傳染？幽門桿菌公費檢測，45歲起一生一次',
    update_date:'2026/11/20',
    intro:'幽門桿菌是住在胃裡的細菌，國健署說20歲以上的大人大約每10人就有3人感染，而且胃癌有8到9成和它有關。好消息是，從115年起，45到74歲的民眾可以免費驗一次，還能和大腸癌篩檢一起採便，一次搞定。',
    sections:[
      {heading:'免費檢測怎麼做？',format:'table',table:TABLE},
      {heading:'驗到陽性怎麼辦？',format:'bullets',items:[
        '別緊張，帶著報告回診，照醫師指示吃完除菌藥。',
        '藥一定要吃完，不要覺得沒症狀就自己停。',
        '請同住的家人也一起驗。'
      ]},
      {heading:'平常這樣保胃',format:'bullets',items:[
        '吃飯用公筷母匙，不共用杯子。',
        '少吃生食，不吃不乾淨的食物。',
        '不抽菸、不吃檳榔、少喝酒，肚子不舒服早點看醫生。'
      ]}
    ],
    think_tank_view:'下次全家吃飯，記得多放一雙公筷。45歲以上的爸媽和自己，也趁大腸癌篩檢時一起把幽門桿菌驗一驗。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，「每10人就有3人」依30%換算，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從家庭共食切入。', tone:'生活親切', tone_reason:'給一般家庭閱讀。', to_verify:['感染率調查年份']},
    decision_points:[DP_RANK]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'幽門桿菌：45至74歲公費檢測一生一次',
    update_date:'2026/11/20',
    intro:'胃癌約8至9成由幽門螺旋桿菌感染引起（國健署）。115年起45至74歲可公費檢測一次。',
    sections:[
      {heading:'公費檢測',format:'table',table:TABLE},
      {heading:'陽性',format:'bullets',items:[
        '依醫囑完成除菌，家人一起檢測。'
      ]},
      {heading:'預防',format:'bullets',items:[
        '公筷母匙、不共杯、避免生食。'
      ]}
    ],
    think_tank_view:'篩檢、除菌、公筷母匙，是預防胃癌的三步驟。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為檢測、陽性、預防三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['感染率調查年份']},
    decision_points:[DP_RANK]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'幽門螺旋桿菌感染', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'胃癌 8 至 9 成與幽門桿菌有關', primary_visual:'8 至 9 成', secondary_message:'45–74 歲公費檢測一生一次', action_priority:'採便檢測、陽性除菌'},
    headline_hook:'胃癌主要元凶', headline_main:'幽門桿菌公費檢測一生一次', title_accent:'一生一次',
    primary_stat:{kicker:'國健署・2026 年', value:'8 至 9 成', label:'胃癌由幽門桿菌感染引起', note:'國健署｜WHO 列為第一級致癌物'},
    secondary_stats:[
      {value:'30%', label:'20 歲以上成人感染盛行率'},
      {value:'6–10 倍', label:'感染者胃癌風險（相較未感染）'},
      {value:'2,225 人', label:'114 年胃癌死亡人數'}
    ],
    action_title:'保胃這樣做',
    action_cards:[
      {key:'篩', text:'45–74 歲公費糞便抗原檢測 1 次'},
      {key:'治', text:'陽性依醫囑完成除菌療程'},
      {key:'分', text:'用公筷母匙，不共用杯子'},
      {key:'戒', text:'遠離菸、檳榔、酒，避免生食'}
    ],
    carousel_suggestion:{reason:'若想把風險數據、公費檢測與保胃5招分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'胃癌主要元凶', headline_main:'8 至 9 成與幽門桿菌有關'},
      {layout_type:'action', headline_hook:'公費檢測', headline_main:'和大腸癌篩檢一起做'},
      {layout_type:'action', headline_hook:'保胃 5 招', headline_main:'從公筷母匙開始'}]},
    hashtags:['幽門螺旋桿菌','胃癌預防','公費篩檢','公筷母匙'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'screening-checkup',
    illustration:{topic:'幽門桿菌篩檢與共食衛生', audience:'中壯年家庭', scene:'一家人圍桌吃飯，桌上每道菜都放著公筷',
      emotion:'溫馨、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A family sharing a meal at a round table with serving chopsticks placed on every dish, warm and reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：胃癌8至9成由幽門桿菌引起（國健署2026年）','胃癌死亡2,225人取自114年死因統計'],
      layout_reason:'關鍵訊息是「胃癌主因可檢測、可除菌」，選 data：8至9成當主角，感染率與風險倍數放第二層，最後給 4 個保胃行動。',
      tone:'專業易懂', tone_reason:'篩檢資訊需清楚可行。',
      to_verify:['30%感染率調查年份']},
    decision_points:[Object.assign({}, DP_RANK, {current:'2,225 人｜114 年胃癌死亡（衛福部）'})],
    content_check_note:'數據引自國健署與衛福部並標明年份，未使用療效保證用語，未涉及具體藥品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'幽門螺旋桿菌感染',
    collect:{
      summary:'幽門螺旋桿菌是胃癌最主要的危險因子，國健署指出約8至9成胃癌由其引起、成人感染盛行率達30%；115年1月1日起全面提供45至74歲終身1次公費糞便抗原檢測，可與大腸癌篩檢一起完成，是新上路的癌症預防政策。',
      objective_data:[
        {item:'盛行率／發生率',desc:'30%成人感染：國健署指出，我國20歲以上成年人幽門螺旋桿菌感染盛行率達30%（新聞未寫調查年份）。',tag:'官方統計',source:{name:'國民健康署：預防胃癌再升級',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=5020&pid=19802'}},
        {item:'年度趨勢方向',desc:'2225人死於胃癌：衛福部114年死因統計，胃癌死亡2,225人，國健署並指出每年約逾4,000人新診斷胃癌。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'終身1次：自115年1月1日起，國健署全面提供45至74歲民眾公費糞便抗原檢測胃幽門螺旋桿菌，可與大腸癌篩檢同時採便，113年8月起曾於9縣市試辦、114年擴大至17縣市。',tag:'官方統計',source:{name:'國民健康署：預防胃癌再升級',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=5020&pid=19802'}},
        {item:'好發族群年齡層',desc:'胃癌風險高6倍至10倍：國健署指出，幽門螺旋桿菌感染者罹患胃癌的風險高於未感染者6倍至10倍，主要經口傳染，共同生活者常因共用餐具而感染。',tag:'官方統計',source:{name:'國民健康署：遠離「胃」險 減少幽門螺旋桿菌感染',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18900'}}
      ],
      product_view:['機會：公費檢測新上路，可作為保戶健康提醒與癌症預防服務的切入點。','機會：胃癌早期與晚期存活率差距大，可說明及早篩檢的價值。','風險：避免暗示益生菌或保健品可殺菌或取代除菌治療。'],
      marketing_view:['機會：「和大腸癌篩檢一起採便」是清楚的行動訊息。','機會：家庭共食傳染的角度，適合推廣公筷母匙。','風險：避免讓感染者覺得被貼標籤，強調可治療。'],
      alert_level:'medium',
      alert_reason:'115年起公費檢測全面上路，民眾對資格與流程有資訊需求，屬新政策溝通期。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('我國20歲以上成年人感染盛行率達30%','CURRENCY_TIMELINESS','source_year_unstated',
          '國健署新聞未寫30%的調查年份與方法，文中直接引用，讀者無法判斷時效。','low','yes',
          '20歲以上感染盛行率30%的調查來源與年份。','yes','confirm','新聞稿未載明。',
          '我國20歲以上成年人感染盛行率達30%（國健署引述，調查年份待確認）',
          ['大約每10人就有3人感染']),
        F('感染者罹患胃癌的風險高於未感染者6至10倍','MEDICAL_INTERPRETATION','relative_risk_framing',
          '6至10倍為相對風險，未說明絕對風險仍低，可能造成感染者過度恐慌。','low','no',
          null,'no','clarify','屬風險表達。',
          '感染者罹患胃癌的相對風險高於未感染者6至10倍，但多數感染者不會發生胃癌'),
        F('胃癌早期（0+1期）5年存活率約可達7成5以上','DATA_FACTUAL_ACCURACY','source_year_unstated',
          '存活率未寫統計期間，讀者無法判斷資料年份。','low','yes',
          '胃癌分期5年存活率的癌登統計期間。','no','confirm','國健署新聞未寫期間。',
          '胃癌早期（0+1期）5年存活率約可達7成5以上（國健署引癌症登記資料）'),
        F('別緊張，帶著報告回診','MEDICAL_INTERPRETATION','incomplete_info',
          '安撫語氣合宜，但未說明陽性代表感染、需除菌，讀者可能低估回診的必要性。','low','no',
          null,'no','clarify','屬資訊完整性。',
          '陽性代表有感染，帶著報告回診')
      ],
      card:[
        F('胃癌由幽門桿菌感染引起','MEDICAL_INTERPRETATION','causal_framing',
          '「引起」為國健署用語，但卡面放大後可能讓讀者以為感染就會得胃癌。','low','no',
          null,'no','clarify','屬因果表達。',
          '胃癌與幽門桿菌感染有關'),
        F('45–74 歲公費糞便抗原檢測 1 次','REGULATORY_COMPLIANCE','eligibility_condition',
          '曾參與吹氣法或113、114年試辦檢測者不再提供，卡面未說明。','low','no',
          null,'no','clarify','屬資格說明。',
          '45–74 歲未曾檢測者公費檢測 1 次')
      ]
    },
    title_alts:[
      '胃癌8至9成和幽門桿菌有關：45至74歲公費檢測一生一次',
      '全家一起夾菜也會傳染？幽門桿菌公費檢測，45歲起一生一次',
      '115年起公費胃幽門桿菌檢測：和大腸癌篩檢一次完成'
    ],
    card_title_alts:[
      ['胃癌主要元凶','幽門桿菌公費檢測一生一次'],
      ['45–74 歲','和大腸癌篩檢一起驗'],
      ['公筷母匙','全家保胃']
    ],
    data_addon:[
      '胃癌晚期（第4期）5年存活率不到1成。',
      '世界衛生組織於1994年將幽門螺旋桿菌列為第一級致癌物。',
      '檢測方式還包括碳13尿素吹氣法、血清學檢查與內視鏡切片。'
    ],
    cta:'如果你或家人45至74歲、還沒驗過幽門桿菌，下次做大腸癌篩檢時一起領管採便；吃飯時先從每道菜放一雙公筷開始。'
  });
})();
