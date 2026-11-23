/* v6 示範主題：長者功能評估（ICOPE）（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：國健署〈全臺醫療單位齊心 陪長輩「量六力」〉（2025/11/26，114年35.5萬人受檢）、
   國健署〈「長者量六力」是六項能力的整合式評估〉（2023/03/17，111年服務逾8萬人、16%至少1項異常）、
   國健署〈「長者量六力」LINE 隨時掌握健康狀況〉（2025年3月LINE好友逾20萬）、國健署「防跌三步」新聞稿（2025/02/18，至少每半年評估一次）。
   參考方向：健康智庫〈評估長者功能的6個關鍵指標〉2022/03、〈長者身體功能評估，用LINE也通〉2024/05。 */
(function(){
  const REFS = [
    {title:'全臺醫療單位齊心 陪長輩「量六力」',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19644'},
    {title:'「長者量六力」是六項能力的整合式評估 及早發現功能衰退，及早介入，達到延緩失能',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=16771'},
    {title:'「長者量六力」LINE 隨時掌握健康狀況',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18981'},
    {title:'長者功能評估（長者量六力）專區',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/TopicList.aspx?nodeid=4602'}
  ];
  const TABLE = {headers:['六力','評估重點'], rows:[
    ['認知','記憶力、定向感是否變差'],
    ['行動','起身、走路、平衡是否變吃力'],
    ['營養','體重是否減輕、食慾是否變差'],
    ['視力','看遠看近、日常活動是否受影響'],
    ['聽力','對話、聽電話是否有困難'],
    ['憂鬱（情緒）','是否情緒低落、對事物失去興趣']
  ]};
  const TAGS = ['長者量六力','ICOPE','長者功能評估','延緩失能','健康老化'];

  const DP_TREND = {id:'dp-icope-trend', type:'data_scope', title:'兩個年份的異常比例口徑不同',
    desc:'111年「至少1項異常16%」為醫療院所服務逾8萬名長者的結果；114年新聞則分別列出一項（20.6%）、兩項（7.2%）、三項（2.6%）異常比例，受檢人數與統計方式不同，不宜直接比較趨勢。',
    current:'114年35.5萬名長者受檢，一項異常20.6%',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'35.5萬人', value:'114年受檢', note:'一項異常20.6%、兩項7.2%、三項2.6%（目前採用）'},
      {label:'逾8萬人', value:'111年受檢', note:'至少1項異常16%'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'長者量六力：6大能力每半年檢查一次，及早發現功能退化',
    update_date:'2026/11/20',
    intro:'國民健康署參考世界衛生組織長者整合式照護（ICOPE）指引，推動「長者量六力」，評估65歲以上長者的認知、行動、營養、視力、聽力及憂鬱六大內在能力。114年已服務35.5萬名長者，六力中一項異常者占20.6%、兩項異常者7.2%、三項異常者2.6%。國健署強調，能力異常不代表生病，而是身體功能需要再加強，及早發現、及早介入，就有機會延緩失能。',
    sections:[
      {heading:'六力評估什麼',format:'table',table:TABLE},
      {heading:'怎麼做評估',format:'bullets',items:[
        '65歲以上長者建議至少每半年評估一次，覺得身體狀況變差時也可隨時自我檢測。',
        '可加入國健署LINE官方帳號（ID：@hpaicope）自我檢測，或到合作的醫療院所、衛生所評估。',
        '多重慢性疾病或75歲以上長者為功能衰退高風險族群，建議至專業單位深入評估。'
      ]},
      {heading:'異常之後怎麼辦',format:'bullets',items:[
        '醫療人員會依結果提供個人化衛教，或轉介社區據點參加運動、營養等課程。',
        '行動力異常可從居家肌力運動開始；營養異常要留意蛋白質與熱量攝取。',
        '視力、聽力異常應就醫檢查，及早配戴合適的眼鏡或助聽輔具。'
      ]}
    ],
    think_tank_view:'失能很少是一夕之間發生的，通常是視力變差少出門、少出門肌力變弱、肌力變弱又更容易跌倒的連鎖反應。長者量六力的價值，就是在這條鏈還沒斷之前先看到警訊。把每半年一次的檢測和生日、重陽節綁在一起，長輩比較記得住，家人也更容易陪著做。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'受檢人數與異常比例引自國健署2025/11/26新聞稿並標明年份，評估頻率引自國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['35.5萬人、20.6%／7.2%／2.6%取自國健署2025/11/26新聞稿','每半年評估一次取自國健署2025/02/18新聞稿'],
      layout_reason:'先用表格說明六大能力，再說明評估方式與異常後的轉介。',
      tone:'專業易懂', tone_reason:'需讓長者與家人清楚知道怎麼做。',
      to_verify:['111年與114年異常比例統計方式不同']},
    decision_points:[DP_TREND]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'每半年幫爸媽「量六力」！看得見、聽得到、走得動、吃得下',
    update_date:'2026/11/20',
    intro:'國健署的「長者量六力」，幫65歲以上長輩檢查記憶、行動、營養、視力、聽力和心情六種能力。114年已經有35.5萬名長輩做過，每5位就有1位以上有一項能力需要加強。別擔心，異常不等於生病，早點發現、早點練，就能讓爸媽繼續自在生活。',
    sections:[
      {heading:'六力是哪六力？',format:'table',table:TABLE},
      {heading:'在哪裡量？',format:'bullets',items:[
        '加國健署LINE「@hpaicope」，在家就能量。',
        '也可以到有合作的診所、醫院或衛生所。',
        '至少每半年量一次，覺得爸媽最近怪怪的也可以隨時量。'
      ]},
      {heading:'量出問題怎麼辦？',format:'bullets',items:[
        '醫護人員會給建議，或介紹社區據點的運動、營養課。',
        '看不清楚、聽不清楚，記得帶去眼科、耳鼻喉科檢查。'
      ]}
    ],
    think_tank_view:'下次回家，花10分鐘陪爸媽用手機量一次六力，比問一百次「最近好不好」更清楚。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，「每5位就有1位以上」依20.6%換算，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以子女陪伴檢測的角度切入。', tone:'生活親切', tone_reason:'給照顧長輩的子女閱讀。', to_verify:['合作院所以國健署資源地圖為準']},
    decision_points:[DP_TREND]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'長者量六力：每半年檢查6大能力',
    update_date:'2026/11/20',
    intro:'114年35.5萬名長者量六力，一項異常20.6%（國健署）。異常不代表生病，及早介入可延緩失能。',
    sections:[
      {heading:'六力',format:'table',table:TABLE},
      {heading:'怎麼量',format:'bullets',items:[
        'LINE「@hpaicope」或合作院所，每半年一次。'
      ]},
      {heading:'異常後',format:'bullets',items:[
        '依建議運動、營養或轉介就醫。'
      ]}
    ],
    think_tank_view:'每半年量一次六力，是長輩延緩失能最簡單的第一步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為六力、怎麼量、異常後三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['異常比例統計口徑']},
    decision_points:[DP_TREND]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'長者功能評估（ICOPE）', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'114 年 35.5 萬名長者量六力', primary_visual:'35.5 萬人', secondary_message:'異常不是生病，是提醒要加強', action_priority:'每半年量一次'},
    headline_hook:'長者量六力', headline_main:'6 大能力每半年檢查一次', title_accent:'每半年',
    primary_stat:{kicker:'114 年・65 歲以上', value:'35.5 萬人', label:'接受長者量六力檢測', note:'國健署 2025/11/26 新聞稿'},
    chart:{type:'hbar', title:'異常項目數比例（%）', max:100, points:[
      {label:'1 項', value:20.6, display:'20.6%', highlight:true},
      {label:'2 項', value:7.2, display:'7.2%'},
      {label:'3 項', value:2.6, display:'2.6%'}
    ], note:'114 年受檢長者｜國健署'},
    secondary_stats:[
      {value:'逾 20 萬', label:'量六力 LINE 好友（2025 年 3 月）'}
    ],
    action_title:'這樣量六力',
    action_cards:[
      {key:'量', text:'65 歲以上至少每半年量一次'},
      {key:'加', text:'LINE 加入 @hpaicope 在家自測'},
      {key:'查', text:'75 歲以上或多種慢性病到院所評估'},
      {key:'動', text:'異常就參加據點運動、營養課程'}
    ],
    carousel_suggestion:{reason:'若想把六力內容、檢測結果與後續資源分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'六力是哪六力', headline_main:'認知、行動、營養、視聽、情緒'},
      {layout_type:'data', headline_hook:'114 年檢測結果', headline_main:'35.5 萬名長者受檢'},
      {layout_type:'action', headline_hook:'怎麼量', headline_main:'每半年一次，LINE 就能測'}]},
    hashtags:['長者量六力','ICOPE','長者功能評估','延緩失能'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'elderly-care',
    illustration:{topic:'長者功能評估', audience:'長者與家人', scene:'成年子女陪長者用手機做六力自我檢測，桌上放著老花眼鏡',
      emotion:'溫暖、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult child helping an older parent complete a health self-check on a smartphone at a table with reading glasses nearby, warm and reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：114年35.5萬名長者受檢（國健署）','異常項目數比例取自同一新聞稿'],
      layout_reason:'關鍵訊息是「已有大量長者受檢、異常比例不低」，選 data：受檢人數當主角，異常項目數用橫條圖呈現，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'強調異常不等於生病，避免焦慮。',
      to_verify:['異常比例為受檢者，不代表全體長者']},
    decision_points:[Object.assign({}, DP_TREND, {current:'35.5 萬人｜114 年長者量六力受檢'})],
    content_check_note:'受檢人數與異常比例引自國健署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'長者功能評估（ICOPE）',
    collect:{
      summary:'國健署參考WHO長者整合式照護（ICOPE）推動「長者量六力」，114年已服務35.5萬名長者，20.6%有一項能力異常；65歲以上人口逾467萬，每半年評估一次、及早介入延緩失能，是高齡健康政策的主軸之一。',
      objective_data:[
        {item:'盛行率／發生率',desc:'20.6%有一項能力異常：國健署114年協助約35.5萬名65歲以上長者量六力，一項異常者7.3萬人（20.6%），兩項異常者2.5萬人（7.2%），三項異常者9千人（2.6%）。',tag:'官方統計',source:{name:'國民健康署：全臺醫療單位齊心 陪長輩「量六力」',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19644'}},
        {item:'年度趨勢方向',desc:'35.5萬人受檢：長者量六力自110年推動，111年醫療院所服務逾8萬名長者，114年已服務35.5萬名長者。',tag:'官方統計',source:{name:'國民健康署：長者量六力是六項能力的整合式評估',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=16771'}},
        {item:'政策動向',desc:'逾20萬人加入LINE：國健署「長者量六力」LINE官方帳號（@hpaicope）至2025年3月已逾20萬名好友，可自我檢測並查詢資源地圖。',tag:'官方統計',source:{name:'國民健康署：「長者量六力」LINE 隨時掌握健康狀況',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18981'}},
        {item:'好發族群年齡層',desc:'逾467萬人：依內政部統計，114年10月65歲以上人口逾467萬人（19.9%），國健署指出75歲以上或多重慢性病者為功能衰退高風險族群。',tag:'官方統計',source:{name:'國民健康署：全臺醫療單位齊心 陪長輩「量六力」',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19644'}}
      ],
      product_view:['機會：長者量六力可作為熟齡保戶健康管理服務的切入點，鼓勵定期自測。','機會：功能退化是長照需求的前兆，可說明長照與失能保障的規劃時機。','風險：不宜以量六力結果作為銷售依據或暗示影響投保。'],
      marketing_view:['機會：LINE 工具門檻低，適合「陪爸媽量六力」的互動活動。','機會：重陽節、母親節、父親節是家人陪伴檢測的溝通時機。','風險：需強調「異常不等於生病」，避免造成長輩焦慮。'],
      alert_level:'low',
      alert_reason:'屬長期高齡健康政策，無急迫時效事件；適合在重陽節與長者健康活動前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('六力中一項異常者占20.6%、兩項異常者7.2%、三項異常者2.6%','DATA_FACTUAL_ACCURACY','sample_scope',
          '比例來自主動受檢的35.5萬名長者，不代表全體65歲以上人口，文中未說明，讀者可能當成全國長者比例。','low','no',
          null,'no','clarify','屬樣本範圍說明。',
          '受檢長者中，六力一項異常者占20.6%、兩項異常者7.2%、三項異常者2.6%'),
        F('及早發現、及早介入，就有機會延緩失能','MEDICAL_INTERPRETATION','outcome_generalization',
          '說法引自國健署政策目標，但文中未說明介入方式與證據，讀者無法評估效果。','low','no',
          null,'no','clarify','屬依據補充。',
          '及早發現、及早介入（如運動、營養課程），國健署以延緩失能為目標'),
        F('每5位就有1位以上有一項能力需要加強','DATA_FACTUAL_ACCURACY','sample_scope',
          '換算正確，但同樣僅代表受檢長者，未說明可能被理解為全體長輩。','low','no',
          null,'no','clarify','屬樣本範圍說明。',
          '受檢的長輩中，每5位就有1位以上有一項能力需要加強'),
        F('比問一百次「最近好不好」更清楚','TERMINOLOGY_LANGUAGE','tone_exaggeration',
          '誇飾用語可能讓人以為自測可取代與家人溝通或就醫評估。','low','no',
          null,'no','clarify','屬語氣調整。',
          '能更具體掌握爸媽的身體狀況')
      ],
      card:[
        F('異常項目數比例（%）','DATA_FACTUAL_ACCURACY','sample_scope',
          '橫條圖比例分母為受檢者，卡面標題未說明。','low','no',
          null,'no','clarify','note 已註明受檢長者，但字級小。',
          '受檢長者異常項目數比例（%）'),
        F('LINE 加入 @hpaicope 在家自測','REGULATORY_COMPLIANCE','external_link',
          '引導加入外部帳號，宜提醒由國健署官網連結加入，避免誤加仿冒帳號。','low','no',
          null,'no','clarify','屬資訊安全提醒。',
          '從國健署官網加入 LINE @hpaicope 自測')
      ]
    },
    title_alts:[
      '長者量六力：6大能力每半年檢查一次，及早發現功能退化',
      '每半年幫爸媽「量六力」！看得見、聽得到、走得動、吃得下',
      '114年35.5萬名長者量六力：異常不是生病，是提醒要加強'
    ],
    card_title_alts:[
      ['長者量六力','6 大能力每半年檢查一次'],
      ['陪爸媽量六力','LINE 在家就能測'],
      ['35.5 萬名長者受檢','異常不是生病']
    ],
    data_addon:[
      '111年長者量六力服務逾8萬名長者，至少1項功能異常者占16%。',
      '國健署輔導超過400家醫療機構提供長者功能評估服務（2023年資料）。',
      '111年底65歲以上人口逾408萬人，占17.6%。'
    ],
    cta:'這個週末陪爸媽用國健署「長者量六力」LINE帳號做一次檢測，把結果記下來，半年後再量一次比較。'
  });
})();
