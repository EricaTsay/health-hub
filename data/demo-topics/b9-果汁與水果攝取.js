/* v6 示範主題：果汁與水果攝取（B9 飲食營養與運動）
   查證日期：2026-11-20。數據來源：國健署健康問答〈喝果汁跟吃水果一樣好？〉（2019：每天2-3拳頭水果、游離糖、500毫升純果汁可能超過WHO建議）、〈新鮮水果吃的不夠多，可以透過水果乾或蜜餞補充？〉（2025）、國健署《國民營養健康狀況變遷調查成果報告2017-2020年》表3.3.2（19歲以上成人每日水果達2份者11.2%）。2026-11-22改用最新一期。
   參考方向：健康智庫〈果汁的健康真相！聰明飲用指南〉2025/02。 */
(function(){
  const REFS = [
    {title:'喝果汁跟吃水果一樣好？',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1425&pid=11285'},
    {title:'新鮮水果吃的不夠多，可以透過水果乾或蜜餞補充？',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=127&pid=18826'},
    {title:'國民營養健康狀況變遷調查成果報告2017-2020年',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=3999&pid=15562'}
  ];
  const TABLE = {headers:['比較','新鮮水果','純果汁'], rows:[
    ['膳食纖維','保留，可促進腸道蠕動','果渣濾除後大幅減少'],
    ['糖的吸收','水果中的糖不屬於游離糖','榨汁後成為較易吸收的游離糖'],
    ['飽足感與水分','水分高、需要咀嚼','容易一次喝很多'],
    ['建議','每天2至3個拳頭大','不宜取代新鮮水果']
  ]};
  const TAGS = ['水果','果汁','游離糖','膳食纖維','均衡飲食'];


  const PRO = {
    content_type:'健康文章',
    title:'喝果汁等於吃水果嗎？國健署：每天2至3個拳頭的新鮮水果',
    update_date:'2026/11/20',
    intro:'國民健康署依「我的餐盤」建議，每天攝取2至3個拳頭大的水果，約相當於1.5至2碗去籽去皮的切塊水果。但依國健署2017-2020年國民營養健康狀況變遷調查，19歲以上成人每日水果達2份者僅11.2%，近9成未達最低建議量。不少人以果汁代替水果，國健署提醒，果汁濾掉果渣後膳食纖維大減，糖也變成容易吸收的游離糖；依世界衛生組織建議換算，500毫升純果汁就可能超過游離糖建議上限。',
    sections:[
      {heading:'新鮮水果與純果汁的差別',format:'table',table:TABLE},
      {heading:'果乾、蜜餞也不能取代',format:'bullets',items:[
        '果乾烘乾過程會流失部分維生素C、花青素等營養素，水分也減少。',
        '市售果乾多會添加調味，吃過量容易增加精製糖與鈉。',
        '新鮮水果水分高，也能幫助補充水分。'
      ]},
      {heading:'水果這樣吃',format:'bullets',items:[
        '每餐一個拳頭大的水果，選在地、當季、多樣化。',
        '想喝果汁時，以完整水果打成、保留果渣，並控制份量。',
        '血糖控制中的人，水果份量依醫師或營養師建議。',
        '水果不能取代蔬菜，蔬菜量要比水果多一點。'
      ]}
    ],
    think_tank_view:'果汁給人「健康」的印象，但一杯果汁可能是好幾顆水果的糖、卻少了纖維與咀嚼。把「喝水果」改回「吃水果」，是簡單又有感的飲食調整。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'建議份量與果汁說明引自國健署並標明年份，攝取狀況引自國健署2017-2020年調查成果報告，未點名特定果汁品牌。',
    ai_rationale:{basis:['國健署：每天2-3拳頭水果、果汁游離糖','19歲以上水果達2份僅11.2%（2017-2020年調查）'],
      layout_reason:'先用比較表對照水果與果汁，再說明果乾，最後給吃水果的方法。',
      tone:'專業易懂', tone_reason:'需破除「果汁＝水果」迷思。',
      to_verify:[]},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'早餐一杯柳橙汁，等於吃水果嗎？',
    update_date:'2026/11/20',
    intro:'很多人早餐配一杯果汁，覺得水果也吃到了。但國健署提醒，果汁把果渣濾掉後，纖維少了很多，糖也變得更容易被吸收，500毫升的純果汁就可能超過世界衛生組織建議的糖量。國健署建議每天吃2到3個拳頭大的新鮮水果，而國健署2017-2020年的調查發現，成人每天吃到2份水果的只有約1成（11.2%）。',
    sections:[
      {heading:'水果和果汁差在哪？',format:'table',table:TABLE},
      {heading:'果乾可以代替嗎？',format:'bullets',items:[
        '烘乾會讓一些維生素流失。',
        '市售果乾常加糖、加鹽，一不小心就吃太多。',
        '新鮮水果還能補充水分。'
      ]},
      {heading:'這樣吃水果',format:'bullets',items:[
        '每餐一個拳頭大的水果，挑當季的。',
        '真的想喝，就整顆打、不濾渣，喝一小杯就好。',
        '有在控制血糖的人，問問醫師吃多少。',
        '蔬菜還是要吃得比水果多。'
      ]}
    ],
    think_tank_view:'把早餐的果汁換成一顆柳丁，咬一咬更有飽足感，也多吃到纖維。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署並標明年份，未點名特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以早餐果汁情境切入。', tone:'生活親切', tone_reason:'給家庭與上班族。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'果汁不等於水果',
    update_date:'2026/11/20',
    intro:'國健署建議每天2至3個拳頭大的新鮮水果。果汁纖維少、含游離糖，500毫升純果汁可能超過WHO游離糖建議。',
    sections:[
      {heading:'比較',format:'table',table:TABLE},
      {heading:'果乾',format:'bullets',items:[
        '營養流失、常添加糖鈉。'
      ]},
      {heading:'建議',format:'bullets',items:[
        '每餐一拳頭水果。',
        '果汁不濾渣、控制份量。'
      ]}
    ],
    think_tank_view:'把「喝水果」改回「吃水果」。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署，未點名特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為比較、果乾、建議三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'果汁與水果攝取', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'果汁不能取代新鮮水果', primary_visual:'500 毫升', secondary_message:'純果汁就可能超過游離糖建議', action_priority:'每天 2–3 拳頭新鮮水果'},
    headline_hook:'喝果汁＝吃水果？', headline_main:'水果用吃的，不用喝的', title_accent:'用吃的',
    hero_message:'每天 2–3 個拳頭', hero_support:'新鮮水果，約 1.5–2 碗切塊（國健署我的餐盤）',
    primary_stat:{value:'500 毫升', label:'純果汁就可能超過游離糖建議', note:'國健署依世界衛生組織建議換算'},
    action_title:'水果這樣吃',
    action_cards:[
      {key:'吃', text:'每餐一個拳頭大的新鮮水果'},
      {key:'季', text:'選在地、當季、多樣化'},
      {key:'渣', text:'想喝就整顆打、不濾渣、少量'},
      {key:'菜', text:'蔬菜要比水果多一點'}
    ],
    notice:'果乾、蜜餞常添加糖與鈉，**不能取代新鮮水果**。',
    carousel_suggestion:{reason:'若想把果汁迷思、果乾與水果份量分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'comparison', headline_hook:'水果 vs 果汁', headline_main:'差在纖維與糖'},
      {layout_type:'knowledge', headline_hook:'果乾蜜餞', headline_main:'不能取代水果'},
      {layout_type:'action', headline_hook:'每天 2–3 拳頭', headline_main:'水果這樣吃'}]},
    hashtags:['水果','果汁','游離糖','均衡飲食'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'吃新鮮水果', audience:'家庭與上班族', scene:'早餐桌上一盤切好的當季水果，旁邊的果汁杯被換成一顆完整的柳丁',
      emotion:'清新、愉快', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A breakfast table with a plate of sliced seasonal fruit, a whole orange placed where a glass of juice would be, fresh and cheerful, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['國健署：每天2-3拳頭水果、500毫升純果汁可能超過游離糖建議'],
      layout_reason:'重點是把果汁換回水果，選 action：4 個吃水果的方法當主角，500 毫升當警示數字。',
      tone:'專業易懂', tone_reason:'具體份量。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自國健署，未點名特定品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'果汁與水果攝取',
    collect:{
      summary:'國健署建議每天2至3個拳頭大的新鮮水果，但2017-2020年調查顯示19歲以上成人每日水果達2份者僅11.2%；不少人以果汁取代水果，而果汁濾渣後纖維大減、糖成為易吸收的游離糖，500毫升純果汁就可能超過WHO建議。「把水果吃回來」是簡單有效的飲食溝通。',
      objective_data:[
        {item:'盛行率／發生率',desc:'11.2%：國健署2017-2020年國民營養健康狀況變遷調查（表3.3.2），19歲以上成人每日水果達2份者僅11.2%，19-44歲族群更只有5.9%，45-64歲為16.5%。',tag:'官方統計',source:{name:'國健署：國民營養健康狀況變遷調查成果報告2017-2020年',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=3999&pid=15562'}},
        {item:'政策動向',desc:'每天2至3個拳頭：國健署依我的餐盤建議每天攝取2至3個拳頭大的水果，約相當於1.5至2碗去籽、去皮的切塊水果。',tag:'官方統計',source:{name:'國健署：喝果汁跟吃水果一樣好？',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1425&pid=11285'}},
        {item:'年度趨勢方向',desc:'500毫升純果汁：國健署依世界衛生組織游離糖不超過總熱量10%、甚至低於5%的建議換算，500毫升的純果汁就可能超出建議攝取限量。',tag:'官方統計',source:{name:'國健署：喝果汁跟吃水果一樣好？',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1425&pid=11285'}},
        {item:'好發族群年齡層',desc:'果乾不能取代：國健署2025年提醒，果乾烘乾會流失部分維生素C與花青素，市售果乾多添加調味，過量易增加精製糖與鈉攝取。',tag:'官方統計',source:{name:'國健署：新鮮水果吃的不夠多，可以透過水果乾補充？',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=127&pid=18826'}}
      ],
      product_view:['機會：水果攝取與慢性病預防相關，可結合均衡飲食衛教。','機會：「每餐一拳頭水果」好記易推廣。','風險：避免點名特定果汁品牌；血糖控制者需提醒依專業建議調整份量。'],
      marketing_view:['機會：當季水果、早餐情境適合溝通。','機會：「喝果汁＝吃水果？」是常見迷思。','風險：調查的「2份」是最低建議量，多數成人建議量更高，引用時需說明。'],
      alert_level:'low',
      alert_reason:'屬長期飲食議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('19歲以上成人每日水果達2份者僅11.2%','DATA_FACTUAL_ACCURACY','threshold_vs_guideline',
          '調查以每日2份為「最低」建議量計算達標率，而本文建議每天2至3個拳頭；未說明2份是門檻下限，讀者可能以為吃到2份就足夠。','low','no',
          null,'no','clarify','屬統計門檻說明。',
          '19歲以上成人每日水果達2份（最低建議量）者僅11.2%',
          ['成人每天吃到2份水果的只有約1成（11.2%）']),
        F('想喝果汁時，以完整水果打成、保留果渣，並控制份量','SOURCE_EVIDENCE','unsourced_advice',
          '國健署問答說明果汁濾渣的缺點，但未直接建議「整顆打不濾渣」，此為本文延伸建議。','low','no',
          null,'no','clarify','屬建議來源說明。',
          '想喝果汁時偶爾少量即可，仍以新鮮水果為主',
          ['真的想喝，就整顆打、不濾渣，喝一小杯就好','果汁不濾渣、控制份量。']),
        F('500毫升純果汁就可能超過游離糖建議上限','DATA_FACTUAL_ACCURACY','assumption_unstated',
          '換算依據的每日熱量與以10%或5%為上限的假設未說明，不同熱量需求的人結果不同。','low','no',
          null,'no','clarify','屬換算前提說明。',
          '依國健署換算，500毫升純果汁就可能超過游離糖建議上限（依熱量需求而異）',
          ['500毫升的純果汁就可能超過世界衛生組織建議的糖量','500毫升純果汁可能超過WHO游離糖建議'])
      ],
      card:[
        F('想喝就整顆打、不濾渣、少量','SOURCE_EVIDENCE','unsourced_advice',
          '此為延伸建議，國健署原文未提出。','low','no',
          null,'no','clarify','屬建議來源。',
          '果汁偶爾少量，以水果為主'),
        F('純果汁就可能超過游離糖建議','DATA_FACTUAL_ACCURACY','assumption_unstated',
          '換算前提（熱量需求、10%或5%）未標示。','low','no',
          null,'no','clarify','屬換算前提。',
          '純果汁可能超過游離糖建議（依熱量而異）')
      ]
    },
    title_alts:[
      '喝果汁等於吃水果嗎？國健署：每天2至3個拳頭的新鮮水果',
      '早餐一杯柳橙汁，等於吃水果嗎？',
      '近9成成人水果不足：把水果吃回來的4個方法'
    ],
    card_title_alts:[
      ['喝果汁＝吃水果？','水果用吃的，不用喝的'],
      ['每天 2–3 個拳頭','新鮮水果這樣吃'],
      ['500 毫升純果汁','糖可能就超標']
    ],
    data_addon:[
      '水果富含維生素C、胡蘿蔔素、花青素等營養素與膳食纖維（國健署）。',
      '世界衛生組織建議游離糖不超過總熱量10%，甚至低於5%。',
      '我的餐盤口訣：每餐水果拳頭大、菜比水果多一點。'
    ],
    cta:'明天早餐把果汁換成一個拳頭大的當季水果，連續一週看看。'
  });
})();
