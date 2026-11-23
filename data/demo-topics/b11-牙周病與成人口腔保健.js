/* v6 示範主題：牙周病與成人口腔保健（B11 第二輪擴充）
   查證日期：2026-11-23。數據來源：衛福部心理及口腔健康司110-10-31新聞稿（引述2015-2016年成年與老年人口腔健康調查：成人牙周病80.48%、約47%嚴重、50-64歲為18-34歲6.7倍、
   健保自2010年給付牙周病統合性治療、13歲以上每年2次口腔檢查及牙結石清除）；臺大醫院衛教〈認識牙周病〉。無參考文章，依官方資料撰寫。
   110-112年度成年及老年人口腔健康調查報告的牙周病盛行率未能取得，沿用2015-2016年調查並標示年份。 */
(function(){
  const REFS = [
    {title:'「台日牙周病交流論壇」延續口腔健康合作',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-63817-1.html'},
    {title:'認識牙周病',source:'國立臺灣大學醫學院附設醫院',url:'https://health.ntuh.gov.tw/health/NTUH_e_Net/NTUH_e_Net_no238/認識牙周病.pdf'}
  ];
  const TABLE = {headers:['成人護牙4招','怎麼做'], rows:[
    ['每天潔牙','早晚刷牙，使用含氟牙膏，刷到牙齦與牙齒交界處'],
    ['清潔牙縫','搭配牙線或牙間刷，清除牙刷刷不到的牙菌斑'],
    ['定期檢查','13歲以上健保每年2次口腔檢查及牙結石清除'],
    ['及早治療','牙齦紅腫、刷牙流血、牙齒鬆動就醫；健保有牙周病統合性治療'],
    ['戒除危險因子','戒菸、不嚼檳榔，糖尿病患者控制好血糖']
  ]};
  const TAGS = ['牙周病','口腔保健','洗牙','牙結石','成人健康'];

  const DP_PREV = {id:'dp-perio-prev', type:'data_scope', title:'牙周病盛行率有兩種口徑',
    desc:'衛福部引述同一調查（2015-2016年）有兩個數字：成人「各種程度」牙周病80.48%，以及「問題嚴重」約47%。引用時要說清楚是哪一種，AI 沒有替你挑選。',
    current:'臺灣成人牙周病盛行率高達80.48%',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'80.48%', value:'臺灣成人・各程度', note:'2015-2016年成年與老年人口腔健康調查（目前採用）'},
      {label:'約47%', value:'臺灣成人・問題嚴重', note:'同一調查，衛福部新聞稿引述'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'成人8成有牙周病：刷牙流血別輕忽，護牙4招這樣做',
    update_date:'2026/11/23',
    intro:'衛福部引述2015-2016年成年與老年人口腔健康調查，臺灣成人牙周病盛行率高達80.48%，約有47%問題嚴重。牙周病初期常只是刷牙流血、牙齦紅腫，不痛不癢容易被忽略，嚴重時牙齒會鬆動甚至脫落。50至64歲是好發率最高的年齡層，罹病風險是18至34歲的6.7倍。',
    sections:[
      {heading:'成人護牙4招',format:'table',table:TABLE},
      {heading:'牙周病是怎麼發生的',format:'bullets',items:[
        '牙菌斑長期堆積會鈣化成牙結石，刺激牙齦發炎；調查中各年齡層以牙結石的比例最高。',
        '牙齦炎若未處理，發炎會往下破壞支撐牙齒的齒槽骨，形成牙周囊袋。',
        '吸菸、嚼檳榔、糖尿病控制不佳，都會讓牙周病更容易惡化。'
      ]},
      {heading:'健保可以怎麼用',format:'bullets',items:[
        '13歲以上國民每年可接受2次口腔檢查及專業牙結石清除。',
        '健保自2010年起給付「牙周病統合性治療」，包含診斷、基本治療、手術治療與支持性治療。',
        '治療後仍需定期回診維護，牙周狀況才能穩定。'
      ]}
    ],
    think_tank_view:'牙周病是成人掉牙的重要原因，卻常被當成「火氣大」的小問題。好消息是，它大多可以靠每天正確清潔與定期洗牙預防；已經有刷牙流血、口臭或牙齒鬆動的人，善用健保牙周病統合性治療，越早處理越能保住自己的牙齒。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率引自衛福部並標明調查年份，健保給付項目引自衛福部新聞稿，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['沿用步驟1洞察：成人牙周病盛行率80.48%（衛福部引述2015-2016年調查）','健保給付項目取自衛福部110年新聞稿'],
      layout_reason:'牙周病重點在日常預防與及早治療，先用表格列出護牙4招，再說明成因，最後告訴讀者健保資源。',
      tone:'專業易懂', tone_reason:'口腔保健需要具體做法與可用資源。',
      to_verify:['80.48%為2015-2016年調查，110-112年度調查報告的牙周病盛行率待查','健保洗牙頻率與統合性治療條件以健保署現行規定為準']},
    decision_points:[DP_PREV]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'刷牙會流血？10個大人有8個有牙周病',
    update_date:'2026/11/23',
    intro:'刷牙時看到一點血，你是不是覺得沒什麼？衛福部引述的調查顯示，臺灣成人每10人就有8人有牙周病（2015-2016年調查為80.48%），將近一半問題嚴重。牙周病一開始不太會痛，等到牙齒搖了才發現就太晚了。50到64歲的人最容易中招。',
    sections:[
      {heading:'護牙4招，每天做',format:'table',table:TABLE},
      {heading:'牙周病怎麼來的？',format:'bullets',items:[
        '牙菌斑沒清乾淨，久了變成牙結石，牙齦就會一直發炎。',
        '發炎往下跑，會把撐住牙齒的骨頭慢慢吃掉，牙齒就鬆了。',
        '抽菸、吃檳榔、血糖控制不好的人，要更小心。'
      ]},
      {heading:'健保幫你顧牙',format:'bullets',items:[
        '13歲以上每年可以洗牙、檢查2次。',
        '已經有牙周病，可以問牙醫健保的牙周病統合性治療。',
        '治療完也要記得定期回診。'
      ]}
    ],
    think_tank_view:'牙周病最常被誤會成「火氣大」。其實每天好好刷牙、用牙線，半年洗一次牙，就能擋掉大部分問題。下次刷牙流血，就是該去看牙醫的提醒。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部公開資料並標明調查年份，「每10人有8人」依80.48%換算，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以刷牙流血的日常情境切入，再給做法與健保資源。', tone:'生活親切', tone_reason:'給一般成人讀者。', to_verify:['80.48%的調查年份較早']},
    decision_points:[DP_PREV]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'牙周病：成人8成有，護牙4招',
    update_date:'2026/11/23',
    intro:'臺灣成人牙周病盛行率80.48%（2015-2016年調查），約47%問題嚴重。刷牙流血就是警訊。',
    sections:[
      {heading:'護牙4招',format:'table',table:TABLE},
      {heading:'成因',format:'bullets',items:[
        '牙結石刺激牙齦發炎，破壞齒槽骨。',
        '吸菸、檳榔、糖尿病會加重病情。'
      ]},
      {heading:'健保資源',format:'bullets',items:[
        '13歲以上每年2次口腔檢查及牙結石清除。',
        '牙周病統合性治療自2010年納入給付。'
      ]}
    ],
    think_tank_view:'每天清潔、定期洗牙、及早治療，是保住牙齒最有效的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為護牙4招、成因、健保資源三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['80.48%的調查年份較早']},
    decision_points:[DP_PREV]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'牙周病與成人口腔保健', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'成人 8 成有牙周病', primary_visual:'80.48%', secondary_message:'刷牙流血就是警訊', action_priority:'護牙 4 招'},
    headline_hook:'刷牙流血別輕忽', headline_main:'成人護牙，做好這 4 件事', title_accent:'這 4 件事',
    hero_message:'成人近 8 成', hero_support:'有牙周病（2015–2016 年調查）',
    primary_stat:{value:'80.48%', label:'臺灣成人牙周病盛行率', note:'衛福部引述 2015–2016 年口腔健康調查'},
    action_title:'護牙這樣做',
    action_cards:[
      {key:'刷', text:'早晚用含氟牙膏刷牙，刷到牙齦交界'},
      {key:'線', text:'每天用牙線或牙間刷清潔牙縫'},
      {key:'洗', text:'健保每年 2 次口腔檢查與洗牙'},
      {key:'治', text:'牙齦紅腫、流血、牙齒鬆動及早就醫'}
    ],
    notice:'50–64 歲罹病風險是 18–34 歲的 **6.7 倍**，熟齡更要定期檢查。',
    carousel_suggestion:{reason:'若想把盛行率、成因與健保資源分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'牙周病有多常見', headline_main:'成人近 8 成'},
      {layout_type:'knowledge', headline_hook:'牙周病警訊', headline_main:'這 4 種狀況要注意'},
      {layout_type:'action', headline_hook:'護牙 4 招', headline_main:'每天都要做'}]},
    hashtags:['牙周病','口腔保健','洗牙','成人健康'],
    sources:['衛生福利部'],
    illustration_category:'screening-checkup',
    illustration:{topic:'成人口腔保健', audience:'中壯年成人', scene:'一位中年人在明亮的浴室鏡子前用牙線清潔牙齒，洗手台上有牙刷和牙膏',
      emotion:'清爽、自律', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged adult flossing teeth in front of a bright bathroom mirror, toothbrush and toothpaste on the sink, fresh and disciplined mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：成人牙周病盛行率80.48%（2015-2016年調查）','健保洗牙與統合性治療取自衛福部新聞稿'],
      layout_reason:'牙周病大多可預防，選 action：4 個護牙行動當主角，盛行率與年齡風險退到背景資訊。',
      tone:'專業易懂', tone_reason:'預防行動要具體可做。',
      to_verify:['80.48%為2015-2016年調查']},
    decision_points:[Object.assign({}, DP_PREV, {current:'80.48%｜臺灣成人牙周病盛行率'})],
    content_check_note:'盛行率引自衛福部並標明調查年份，健保項目引自衛福部，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'牙周病與成人口腔保健',
    collect:{
      summary:'臺灣成人牙周病盛行率約8成、近半問題嚴重，且與吸菸、檳榔及糖尿病等慢性病相關；健保提供每年2次洗牙與牙周病統合性治療，是可透過日常習慣預防、適合長期溝通的成人健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'80.48%成人有牙周病：衛福部引述2015-2016年成年與老年人口腔健康調查，臺灣成人牙周病盛行率高達80.48%，約有47%問題嚴重，各年齡層以牙結石比例最高。',tag:'官方統計',source:{name:'衛生福利部：「台日牙周病交流論壇」延續口腔健康合作',url:'https://mohw.gov.tw/cp-16-63817-1.html'}},
        {item:'年度趨勢方向',desc:'6.7倍罹病風險：50至64歲牙周病罹病風險是18至34歲的6.7倍，為好發率最高的年齡層。110-112年度成年及老年人口腔健康調查已完成，牙周病最新盛行率尚待查證，目前無法比較趨勢。',tag:'官方統計',source:{name:'衛生福利部：「台日牙周病交流論壇」延續口腔健康合作',url:'https://mohw.gov.tw/cp-16-63817-1.html'}},
        {item:'政策動向',desc:'每年2次口腔檢查及牙結石清除：健保提供13歲以上國民每年2次口腔檢查與專業洗牙，並自2010年起給付「牙周病統合性治療」（診斷、基本治療、手術治療、支持性治療），111年衛教主軸為牙周病防治。',tag:'官方統計',source:{name:'衛生福利部：「台日牙周病交流論壇」延續口腔健康合作',url:'https://mohw.gov.tw/cp-16-63817-1.html'}},
        {item:'好發族群年齡層',desc:'50至64歲為好發年齡層：吸菸、嚼檳榔、糖尿病控制不佳及口腔清潔不良者，牙周病較容易發生與惡化。',tag:'官方統計',source:{name:'臺大醫院：認識牙周病',url:'https://health.ntuh.gov.tw/health/NTUH_e_Net/NTUH_e_Net_no238/認識牙周病.pdf'}}
      ],
      product_view:['機會：牙周病與糖尿病、心血管疾病等慢性病相關，可作為整體健康管理的切入點。','機會：定期洗牙提醒、口腔檢查追蹤可納入保戶健康管理服務。','風險：避免暗示特定口腔保健商品可治療牙周病，治療應由牙醫師評估。'],
      marketing_view:['機會：刷牙流血是多數人有過的經驗，容易引起共鳴。','機會：熟齡族群是好發年齡層，可結合「健保每年2次洗牙」的實用資訊。','風險：避免以掉牙、口臭等外觀焦慮訴求為主，宜以可做的預防行動收尾。'],
      alert_level:'low',
      alert_reason:'屬長期口腔健康議題，無急迫時效事件，適合納入年度健康溝通規劃。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('臺灣成人牙周病盛行率高達80.48%','DATA_FACTUAL_ACCURACY','definition_unstated',
          '80.48%包含輕度牙齦炎到嚴重牙周炎各種程度，文中未說明牙周病的判定標準，讀者可能誤以為8成都需要治療。','low','no',
          null,'no','clarify','數字正確，屬定義說明。',
          '臺灣成人牙周病（含輕度牙齦發炎）盛行率高達80.48%',
          ['臺灣成人牙周病盛行率80.48%']),
        F('吸菸、嚼檳榔、糖尿病控制不佳，都會讓牙周病更容易惡化','SOURCE_EVIDENCE','claim_without_source',
          '危險因子的說法未標示出處，參考資料中僅臺大醫院衛教單張有相關說明。','low','no',
          null,'no','clarify','屬一般醫學共識。',
          '吸菸、嚼檳榔、糖尿病控制不佳，都會讓牙周病更容易惡化（臺大醫院衛教）',
          ['抽菸、吃檳榔、血糖控制不好的人，要更小心','吸菸、檳榔、糖尿病會加重病情']),
        F('半年洗一次牙','DATA_FACTUAL_ACCURACY','policy_detail',
          '健保規定為「每年2次」，實際間隔規定以健保署公告為準，「半年一次」可能讓讀者誤解須嚴格間隔6個月。','low','yes',
          '健保署洗牙給付的間隔規定。','no','confirm','給付細節可能調整。',
          '每年洗牙2次'),
        F('治療後仍需定期回診維護，牙周狀況才能穩定','MEDICAL_INTERPRETATION','outcome_overstatement',
          '「才能穩定」暗示回診即可確保穩定，牙周狀況仍受個人清潔與全身疾病影響。','low','no',
          null,'no','revise','避免結果保證語氣。',
          '治療後仍需定期回診維護，有助維持牙周狀況',
          ['治療完也要記得定期回診'])
      ],
      card:[
        F('有牙周病（2015–2016 年調查）','CURRENCY_TIMELINESS','old_survey_unstated_newer',
          '卡面主數字來自10年前的調查，雖已標年份，但未說明這是目前最新可得的公開數字，讀者可能質疑時效。','low','no',
          null,'no','clarify','110-112年度調查數字尚未取得。',
          '有牙周病（2015–2016 年調查，現行引用最新公開數字）'),
        F('健保每年 2 次口腔檢查與洗牙','DATA_FACTUAL_ACCURACY','eligibility_unstated',
          '卡面未寫適用年齡，健保規定為13歲以上。','low','no',
          null,'no','clarify','屬適用對象說明。',
          '13 歲以上健保每年 2 次口腔檢查與洗牙')
      ]
    },
    title_alts:[
      '成人8成有牙周病：刷牙流血別輕忽，護牙4招這樣做',
      '刷牙會流血？10個大人有8個有牙周病',
      '牙周病不是火氣大：成人口腔保健與健保資源一次看'
    ],
    card_title_alts:[
      ['刷牙流血別輕忽','成人護牙，做好這 4 件事'],
      ['10 個大人 8 個有','牙周病預防 4 招'],
      ['牙周病不是火氣大','健保洗牙要善用']
    ],
    data_addon:[
      '同一調查中約47%成人牙周問題嚴重，各年齡層以牙結石比例最高。',
      '健保自2010年起給付牙周病統合性治療，包含診斷、基本治療、手術治療與支持性治療。',
      '50至64歲牙周病罹病風險是18至34歲的6.7倍。'
    ],
    cta:'檢查一下上次洗牙是什麼時候，超過半年就預約牙醫，並從今晚開始加用牙線。'
  });
})();
