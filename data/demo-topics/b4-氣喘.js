/* v6 示範主題：氣喘（B4 消化・肝膽・呼吸）
   查證日期：2026-11-20。數據來源：國健署〈每5位氣喘病人 有1位氣喘控制不佳 氣喘控制3要訣 安心守護好健康〉（引110年國民健康訪問調查）、
   國健署〈破除氣喘迷思、做好控制 讓你的氣喘不發作〉（吸入型類固醇衛教）、衛福部114年死因統計（慢性下呼吸道疾病，含氣喘）。
   註：國內成人氣喘盛行率查無近年官方摘要，兒童5.6%為106年調查（舊），本題以110年控制狀況為主。
   參考方向：健康智庫〈氣喘〉2022/11、〈5月3日世界氣喘日〉2022/05。 */
(function(){
  const REFS = [
    {title:'每5位氣喘病人 有1位氣喘控制不佳 氣喘控制3要訣 安心守護好健康',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=18100'},
    {title:'破除氣喘迷思、做好控制 讓你的氣喘不發作',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4306&pid=13988'},
    {title:'114年死因統計結果分析',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}
  ];
  const TABLE = {headers:['常見迷思','正確觀念'], rows:[
    ['沒症狀就可以停藥','氣喘是慢性發炎，控制藥物要依醫囑持續使用'],
    ['吸入型類固醇副作用大','依醫囑正確使用，劑量低、局部作用，是長期控制的重要用藥'],
    ['發作才需要看醫生','定期回診評估控制程度，才能調整用藥、減少發作'],
    ['有氣喘不能運動','控制良好時可規律運動，運動前依醫師建議預防用藥']
  ]};
  const TAGS = ['氣喘','吸入型類固醇','呼吸道健康','過敏','慢性病管理'];

  const DP_SCOPE = {id:'dp-asthma-scope', type:'data_scope', title:'控制狀況是病人自述',
    desc:'「每5位就有1位控制不佳」等比例出自110年國民健康訪問調查，對象為12歲以上自述有氣喘的受訪者，非全國氣喘盛行率；兒童盛行率5.6%為106年調查，資料較舊，AI 未放入圖卡。',
    current:'12歲以上氣喘病人約每5人1人控制不佳（110年國民健康訪問調查）',
    options:[{label:'沿用目前資料', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'氣喘控制不佳別輕忽：4個常見迷思與國健署控制3要訣',
    update_date:'2026/11/20',
    intro:'氣喘是呼吸道慢性發炎的疾病，症狀包括喘鳴、咳嗽、胸悶與呼吸困難。國民健康署依110年國民健康訪問調查指出，12歲以上氣喘病人約每5人就有1人控制不佳，過去一年內曾發作者占21.6%，21%未依醫囑定期回診，15.1%曾因發作到急診。氣喘雖然無法根治，但依醫囑規律用藥與避開誘發因子，多數人可以正常生活。',
    sections:[
      {heading:'氣喘的4個常見迷思',format:'table',table:TABLE},
      {heading:'國健署氣喘控制3要訣',format:'bullets',items:[
        '規律用藥：依醫囑正確使用吸入劑，不自行停藥或減量。',
        '定期回診：與醫師討論控制情形，必要時調整治療計畫。',
        '避開誘發因子：塵蟎、菸害、空氣污染、溫差與感冒都可能誘發發作。'
      ]},
      {heading:'這些情況要立即就醫',format:'bullets',items:[
        '使用急救型吸入劑後仍喘不過氣、說話斷斷續續。',
        '嘴唇或指甲發紫，或意識變差。',
        '症狀越來越頻繁，夜間常因咳嗽或喘醒來。'
      ]}
    ],
    think_tank_view:'很多氣喘病人「沒事就不用藥、喘了才用」，結果反覆發作、跑急診。氣喘控制的關鍵在平時：控制型藥物要天天用、吸入技巧要正確，並定期回診。秋冬溫差大、空污季節前，更要確認手邊的藥物與行動計畫。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'控制狀況引自國健署110年國民健康訪問調查並標明年份，未使用療效保證用語，未推薦特定藥品或廠牌。',
    ai_rationale:{basis:['每5人1人控制不佳、21.6%、21%、15.1%取自國健署新聞（110年國民健康訪問調查）','迷思與用藥觀念取自國健署衛教'],
      layout_reason:'先以表格破除迷思，再整理控制3要訣與就醫時機。',
      tone:'專業易懂', tone_reason:'慢性病管理需清楚可行。',
      to_verify:['國內成人氣喘盛行率查無近年官方摘要','110年調查為目前查到的最新一期']},
    decision_points:[DP_SCOPE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'不喘就停藥？氣喘控制的4個迷思，你中了幾個',
    update_date:'2026/11/20',
    intro:'氣喘是呼吸道一直處於發炎的狀態，就算沒在喘，發炎也還在。國健署110年調查發現，12歲以上的氣喘病人每5人就有1人控制不好，還有15.1%的人曾經因為發作跑急診。其實只要好好用藥、定期回診，大多數人都能過正常生活。',
    sections:[
      {heading:'這些迷思要破除',format:'table',table:TABLE},
      {heading:'控制氣喘3招',format:'bullets',items:[
        '照醫師指示每天用藥，不要不喘就停。',
        '定期回診，讓醫師看看控制得好不好。',
        '遠離菸、塵蟎，天氣變冷記得保暖、戴口罩。'
      ]},
      {heading:'這時候要馬上看醫生',format:'bullets',items:[
        '用了急救吸入劑還是很喘、話都說不完整。',
        '嘴唇發紫、意識不清。'
      ]}
    ],
    think_tank_view:'把控制藥當成每天刷牙一樣的習慣，氣喘就比較不會突然來找麻煩。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，「每5人就有1人」為國健署原文，未使用療效保證用語，未推薦特定藥品或廠牌。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以迷思測驗切入。', tone:'生活親切', tone_reason:'給病人與家屬閱讀。', to_verify:['110年調查為最新一期']},
    decision_points:[DP_SCOPE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'氣喘：迷思破解與控制3要訣',
    update_date:'2026/11/20',
    intro:'12歲以上氣喘病人約每5人1人控制不佳（國健署110年調查）。規律用藥、定期回診是關鍵。',
    sections:[
      {heading:'迷思',format:'table',table:TABLE},
      {heading:'3要訣',format:'bullets',items:[
        '規律用藥、定期回診、避開誘發因子。'
      ]},
      {heading:'就醫',format:'bullets',items:[
        '急救吸入劑無效、嘴唇發紫立即就醫。'
      ]}
    ],
    think_tank_view:'氣喘控制靠平時，不是喘了才處理。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，未使用療效保證用語，未推薦特定藥品或廠牌。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為迷思、要訣、就醫三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['110年調查為最新一期']},
    decision_points:[DP_SCOPE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'氣喘', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'每 5 位氣喘病人就有 1 位控制不佳', primary_visual:'每 5 位 1 位', secondary_message:'不喘也要規律用藥', action_priority:'控制氣喘 3 要訣'},
    headline_hook:'不喘就停藥？', headline_main:'每 5 位就有 1 位控制不佳', title_accent:'控制不佳',
    primary_stat:{kicker:'110 年・12 歲以上', value:'每 5 位 1 位', label:'氣喘病人控制不佳', note:'國健署國民健康訪問調查'},
    chart:{type:'hbar', title:'12 歲以上氣喘病人（%）', max:100, points:[
      {label:'過去一年發作', value:21.6, display:'21.6%', highlight:true},
      {label:'未定期回診', value:21, display:'21%'},
      {label:'曾掛急診', value:15.1, display:'15.1%'}
    ], note:'國健署｜110 年國民健康訪問調查'},
    action_title:'控制氣喘 3 要訣',
    action_cards:[
      {key:'藥', text:'依醫囑每天使用控制型吸入劑'},
      {key:'回', text:'定期回診，評估控制程度'},
      {key:'避', text:'遠離菸害、塵蟎，注意溫差保暖'},
      {key:'醫', text:'急救吸入劑無效、嘴唇發紫立即就醫'}
    ],
    carousel_suggestion:{reason:'若想把控制數據、迷思與就醫時機分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'氣喘控制現況', headline_main:'每 5 位就有 1 位控制不佳'},
      {layout_type:'knowledge', headline_hook:'常見迷思', headline_main:'不喘就能停藥？'},
      {layout_type:'action', headline_hook:'控制 3 要訣', headline_main:'用藥、回診、避誘因'}]},
    hashtags:['氣喘','吸入型類固醇','呼吸道健康','慢性病管理'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'氣喘控制', audience:'氣喘病人與家人', scene:'藥師在藥局示範正確使用吸入器，病人專心跟著練習',
      emotion:'安心、有掌握感', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A pharmacist demonstrating correct inhaler technique to a patient who practices attentively at a pharmacy counter, reassured mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：12歲以上約每5人1人控制不佳（國健署110年調查）','發作、回診、急診比例取自同一調查'],
      layout_reason:'關鍵訊息是「控制不佳很常見」，選 data：控制不佳比例當主角，三項比例用橫條圖，最後給控制3要訣。',
      tone:'專業易懂', tone_reason:'慢性病管理，避免恐嚇。',
      to_verify:['比例為病人自述']},
    decision_points:[Object.assign({}, DP_SCOPE, {current:'每 5 位 1 位｜12 歲以上氣喘病人控制不佳（110 年調查）'})],
    content_check_note:'數據引自國健署110年調查並標明年份，未使用療效保證用語，未推薦特定藥品或廠牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'氣喘',
    collect:{
      summary:'國健署依110年國民健康訪問調查指出，12歲以上氣喘病人約每5人1人控制不佳，21.6%過去一年曾發作、15.1%曾因發作急診；氣喘需長期規律用藥與定期回診，破除「不喘就停藥」迷思是溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'21.6%過去一年曾發作：國健署依110年國民健康訪問調查，12歲以上氣喘病人過去一年內曾發作者占21.6%，約每5人就有1人控制不佳。',tag:'官方統計',source:{name:'國民健康署：每5位氣喘病人 有1位氣喘控制不佳',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=18100'}},
        {item:'好發族群年齡層',desc:'15.1%曾因發作急診：同一調查顯示，12歲以上氣喘病人有21%未依醫囑定期回診，15.1%曾因氣喘發作到急診就醫。',tag:'官方統計',source:{name:'國民健康署：每5位氣喘病人 有1位氣喘控制不佳',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=18100'}},
        {item:'年度趨勢方向',desc:'5796人死於慢性下呼吸道疾病：衛福部114年死因統計，慢性下呼吸道疾病（含氣喘、COPD等）死亡5,796人，居十大死因第9位。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果分析',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'政策動向',desc:'控制3要訣：國健署推廣規律用藥、定期回診、避開誘發因子，並澄清吸入型類固醇依醫囑使用是長期控制的重要用藥。',tag:'官方統計',source:{name:'國民健康署：破除氣喘迷思、做好控制',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4306&pid=13988'}}
      ],
      product_view:['機會：氣喘為常見慢性病，可提供用藥提醒與空污、溫差季節的健康提醒。','機會：兒童氣喘家庭關注度高，適合家庭健康內容。','風險：避免推薦特定空氣清淨機、保健品或替代療法。'],
      marketing_view:['機會：每年5月第一個星期二世界氣喘日是固定溝通檔期。','機會：「不喘就停藥？」迷思測驗互動性高。','風險：用藥資訊需提醒依醫囑，避免讀者自行調藥。'],
      alert_level:'low',
      alert_reason:'屬慢性病管理議題，無急迫時效事件；適合在世界氣喘日與秋冬溫差、空污季節溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('多數人可以正常生活','MEDICAL_INTERPRETATION','outcome_generalization',
          '「多數人」缺乏數據支持，國健署資料也顯示約每5人1人控制不佳。','low','no',
          null,'no','clarify','屬預後表達。',
          '許多人可以維持日常生活',
          ['大多數人都能過正常生活']),
        F('劑量低、局部作用，是長期控制的重要用藥','MEDICAL_INTERPRETATION','drug_safety_framing',
          '強調副作用小時，未提醒用後漱口等降低局部副作用的做法，資訊不完整。','low','no',
          null,'no','clarify','屬用藥安全補充。',
          '依醫囑正確使用並於用後漱口，是長期控制的重要用藥'),
        F('塵蟎、菸害、空氣污染、溫差與感冒都可能誘發發作','SOURCE_EVIDENCE','unsourced_claim',
          '誘發因子清單未附出處，引用的國健署新聞未逐一列出。','low','no',
          null,'no','clarify','屬出處補充。',
          '塵蟎、菸害、空氣污染、溫差與感冒等可能誘發發作（個人誘因請與醫師討論）'),
        F('秋冬溫差大、空污季節前，更要確認手邊的藥物與行動計畫','TERMINOLOGY_LANGUAGE','jargon',
          '「行動計畫」是氣喘照護專有名詞，一般讀者不了解內容。','low','no',
          null,'no','clarify','屬用語說明。',
          '秋冬溫差大、空污季節前，更要確認手邊的藥物，並和醫師討論發作時的處理步驟')
      ],
      card:[
        F('氣喘病人控制不佳','DATA_FACTUAL_ACCURACY','self_report',
          '比例為12歲以上受訪者自述，卡面未說明。','low','no',
          null,'no','clarify','屬口徑說明。',
          '氣喘病人自述控制不佳'),
        F('依醫囑每天使用控制型吸入劑','MEDICAL_INTERPRETATION','individualized_care',
          '輕度氣喘的用藥方式可能不同，「每天」不一定適用所有病人。','low','no',
          null,'no','clarify','屬個別化提醒。',
          '依醫囑規律使用控制型吸入劑')
      ]
    },
    title_alts:[
      '氣喘控制不佳別輕忽：4個常見迷思與國健署控制3要訣',
      '不喘就停藥？氣喘控制的4個迷思，你中了幾個',
      '每5位氣喘病人1位控制不佳：規律用藥、定期回診'
    ],
    card_title_alts:[
      ['不喘就停藥？','每 5 位就有 1 位控制不佳'],
      ['每 5 位就有 1 位','氣喘控制不佳'],
      ['控制氣喘 3 要訣','用藥、回診、避誘因']
    ],
    data_addon:[
      '國健署引用GINA資料，氣喘影響全球逾2.6億人。',
      '106年調查：未滿12歲兒童氣喘盛行率5.6%（資料較舊）。',
      '世界氣喘日為每年5月第一個星期二。'
    ],
    cta:'這週檢查一下手邊的氣喘藥物是否過期、吸入技巧是否正確，並預約下一次回診時間。'
  });
})();
