/* v6 示範主題：交通事故與防禦駕駛（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-20。數據來源：交通部道安記者會（114年全年30日死亡，168交通安全入口網 2026-03 刊登）、衛福部114年死因統計表40（運輸事故歷年死亡）、168交通安全入口網防禦駕駛專區。
   參考方向：健康智庫〈守法還不夠！防禦駕駛才能保平安〉2026/01。 */
(function(){
  const REFS = [
    {title:'114年交通死亡人數持續下降',source:'交通部168交通安全入口網',url:'https://168.motc.gov.tw/theme/car/post/2603311446906'},
    {title:'114年死因統計',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'},
    {title:'建立「防禦駕駛」觀念，很重要!',source:'交通部168交通安全入口網',url:'https://168.motc.gov.tw/theme/news/post/1906121101192'},
    {title:'機車防禦駕駛守則',source:'交通部168交通安全入口網',url:'https://168.motc.gov.tw/theme/safety/post/1906121101808'},
    {title:'行駛國道請做好防禦駕駛',source:'交通部168交通安全入口網',url:'https://168.motc.gov.tw/theme/news/post/2508251027709'}
  ];
  const TABLE = {headers:['防禦駕駛原則','怎麼做'], rows:[
    ['顯露自己','開頭燈、提早打方向燈，讓別人看得見你'],
    ['保持緩衝空間','與前車保持安全距離，不夾在兩輛大型車之間'],
    ['預想他人動作','綠燈也留意闖紅燈車輛，路邊停車可能突然迴轉'],
    ['避開視野死角','機車與行人遠離大型車，注意轉彎內輪差'],
    ['不只看後視鏡','變換車道前轉頭確認盲點']
  ]};
  const TAGS = ['交通安全','防禦駕駛','機車安全','事故傷害','酒駕'];

  const DP_SCOPE = {id:'dp-traffic-scope', type:'data_scope', title:'交通死亡人數有兩種算法',
    desc:'交通部「30日死亡」是事故發生後30天內死亡的人數（114年2,858人）；衛福部死因統計「運輸事故」是以死亡證明書登記的死因（114年2,758人），也包含非道路的運輸事故。兩者統計方式不同，數字不宜混用，AI 沒有替你挑選。',
    current:'114年道路交通事故30日死亡2,858人（交通部）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'2,858人', value:'道路交通事故30日死亡', note:'交通部道安記者會（目前採用）'},
      {label:'2,758人', value:'運輸事故死亡（死因統計）', note:'衛福部114年死因統計；其中機動車交通事故2,538人'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'守法還不夠：防禦駕駛5原則，預判風險保平安',
    update_date:'2026/11/20',
    intro:'依交通部統計，114年全年道路交通事故30日死亡人數為2,858人，較112年減少165人（-5.5%）；其中酒駕死亡減少110人、降幅43.5%最大，機車與高齡者死亡也較112年減少。數字雖下降，平均每天仍有近8人因交通事故失去生命。自己守法之外，預想別人可能犯錯，是「防禦駕駛」的核心。',
    sections:[
      {heading:'防禦駕駛5原則',format:'table',table:TABLE},
      {heading:'114年交通安全重點指標（與112年相比）',format:'bullets',items:[
        '機車騎乘者死亡減少146人（-7.7%），高齡者減少33人（-2.6%）。',
        '行人死亡減少26人（-6.8%），兒少減少17人（-22.4%）。',
        '衛福部死因統計：運輸事故死亡由112年3,068人降至114年2,758人。'
      ]},
      {heading:'上路前先確認自己的狀態',format:'bullets',items:[
        '飲酒後不開車、不騎車；服用可能造成嗜睡的藥物前先詢問醫師或藥師。',
        '疲勞時先休息，長途駕駛中途安排停靠。',
        '騎機車全程戴妥安全帽並扣好扣環。',
        '行車時不使用手機，導航先設定好再出發。'
      ]}
    ],
    think_tank_view:'交通事故往往不是單一方犯錯，而是「沒想到對方會這樣做」。防禦駕駛把注意力從「我有沒有違規」轉向「別人可能怎麼做」，多留一個車身的距離、多轉一次頭確認，就是在替自己和家人爭取反應時間。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數與各族群變化引自交通部道安記者會並標明比較基準年，運輸事故死亡引自衛福部死因統計，防禦駕駛原則引自交通部168交通安全入口網，未涉及具體商品。',
    ai_rationale:{basis:['沿用步驟1洞察：114年30日死亡2,858人，較112年減少5.5%（交通部）','運輸事故死亡趨勢取自衛福部死因統計表40'],
      layout_reason:'先給防禦駕駛5原則表格，再用重點指標說明哪些族群有改善，最後提醒上路前的自我檢查。',
      tone:'專業易懂', tone_reason:'交通安全需要具體行為，避免說教。',
      to_verify:['交通部記者會以112年為比較基準，非與113年比較']},
    decision_points:[DP_SCOPE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'綠燈就安全嗎？學會防禦駕駛，替家人多留一秒',
    update_date:'2026/11/20',
    intro:'114年全台有2,858人在交通事故後30天內離世（交通部統計），換算下來每天將近8人。好消息是比112年少了165人，酒駕死亡更少了4成多。但路上不是只有自己，就算你守規矩，也要想到別人可能闖紅燈、突然迴轉，這就是「防禦駕駛」。',
    sections:[
      {heading:'防禦駕駛，記住5件事',format:'table',table:TABLE},
      {heading:'這幾年哪裡變好了？',format:'bullets',items:[
        '騎機車的死亡人數比112年少了146人。',
        '長輩少了33人，孩子少了17人。',
        '但每天仍有將近8人因交通事故離世，不能鬆懈。'
      ]},
      {heading:'出門前問自己',format:'bullets',items:[
        '今天有喝酒嗎？有就不開車、不騎車。',
        '吃了感冒藥或會想睡的藥嗎？先問醫師或藥師。',
        '很累嗎？先休息再上路。',
        '安全帽扣好了嗎？手機收起來了嗎？'
      ]}
    ],
    think_tank_view:'與其相信「我開車很穩」，不如假設「別人可能會犯錯」。多留一點距離、轉頭看一下死角，這些多花的一秒，可能就是全家平安回家的關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自交通部道安記者會並標明年份與比較基準，「每天將近8人」依2,858人換算，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「綠燈也不一定安全」的生活情境帶出防禦駕駛。', tone:'生活親切', tone_reason:'給通勤族與家庭讀者。', to_verify:['「每天將近8人」為換算值']},
    decision_points:[DP_SCOPE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'防禦駕駛5原則：守法之外，還要預判',
    update_date:'2026/11/20',
    intro:'114年道路交通事故30日死亡2,858人，較112年減少5.5%；酒駕死亡降幅43.5%最大。自己守法，也要預想他人犯錯。',
    sections:[
      {heading:'防禦駕駛5原則',format:'table',table:TABLE},
      {heading:'重點指標',format:'bullets',items:[
        '機車死亡較112年減少7.7%。',
        '兒少死亡減少22.4%。'
      ]},
      {heading:'上路前',format:'bullets',items:[
        '酒後不駕駛。',
        '疲勞或服藥嗜睡先休息。',
        '安全帽扣好、手機收好。'
      ]}
    ],
    think_tank_view:'防禦駕駛的關鍵是預判：保持距離、避開死角、假設別人會犯錯。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自交通部道安記者會並標明比較基準，防禦駕駛原則引自交通部，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為原則、指標、自我檢查三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_SCOPE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'交通事故與防禦駕駛', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'114 年交通事故 30 日死亡 2,858 人', primary_visual:'2,858 人', secondary_message:'酒駕死亡較 112 年減少 43.5%', action_priority:'防禦駕駛 4 原則'},
    headline_hook:'守法還不夠', headline_main:'防禦駕駛，替家人多留一秒', title_accent:'多留一秒',
    primary_stat:{kicker:'114 年・30 日死亡', value:'2,858 人', label:'道路交通事故死亡', note:'交通部｜較 112 年減少 165 人（-5.5%）'},
    chart:{type:'bar', title:'運輸事故死亡人數（人）', points:[
      {label:'2021', value:3032, display:'3,032'},
      {label:'2022', value:3143, display:'3,143'},
      {label:'2023', value:3068, display:'3,068'},
      {label:'2024', value:2932, display:'2,932'},
      {label:'2025', value:2758, display:'2,758', highlight:true}
    ], note:'衛福部死因統計（依死亡登記，口徑與 30 日死亡不同）'},
    secondary_stats:[
      {value:'-43.5%', label:'酒駕死亡降幅'},
      {value:'-7.7%', label:'機車死亡降幅'}
    ],
    action_title:'防禦駕駛這樣做',
    action_cards:[
      {key:'亮', text:'開頭燈、提早打方向燈'},
      {key:'距', text:'保持安全距離，不夾在大車之間'},
      {key:'想', text:'綠燈也留意闖紅燈與迴轉車'},
      {key:'看', text:'變換車道前轉頭確認死角'}
    ],
    carousel_suggestion:{reason:'若想把趨勢、原則與上路前檢查分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'114 年交通死亡', headline_main:'2,858 人，持續下降'},
      {layout_type:'knowledge', headline_hook:'防禦駕駛', headline_main:'5 個基本原則'},
      {layout_type:'action', headline_hook:'出門前', headline_main:'酒後、疲勞不上路'}]},
    hashtags:['交通安全','防禦駕駛','機車安全','事故傷害'],
    sources:['交通部','衛生福利部'],
    illustration_category:'general',
    illustration:{topic:'防禦駕駛', audience:'通勤族與家庭', scene:'一位駕駛在路口綠燈前停看，轉頭確認側邊來車，前方行人安全走過斑馬線',
      emotion:'專注、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A driver pausing at a green light intersection and turning their head to check for side traffic while a pedestrian safely crosses, focused and calm, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：114年30日死亡2,858人（交通部）','運輸事故死亡趨勢取自衛福部死因統計表40'],
      layout_reason:'有清楚的年度下降趨勢，選 data：30 日死亡人數當主角，死因統計直條圖呈現 5 年趨勢，最後給 4 個防禦駕駛行動。',
      tone:'專業易懂', tone_reason:'用數字說明趨勢，再給具體行為。',
      to_verify:['直條圖為死因統計口徑，與主數字 30 日死亡口徑不同']},
    decision_points:[Object.assign({}, DP_SCOPE, {current:'2,858 人｜114 年道路交通事故 30 日死亡（交通部）'})],
    content_check_note:'主數字引自交通部，趨勢圖引自衛福部死因統計並註明口徑差異，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'交通事故與防禦駕駛',
    collect:{
      summary:'114年道路交通事故30日死亡2,858人，較112年減少5.5%，酒駕死亡降幅最大；但平均每天仍有近8人因交通事故離世，機車與高齡者仍是主要族群。交通部持續推廣「防禦駕駛」，從自己守法延伸到預判他人行為。',
      objective_data:[
        {item:'盛行率／發生率',desc:'2858人：交通部道安記者會公布，114年全年道路交通事故30日死亡人數為2,858人，較112年減少165人（-5.5%）。',tag:'官方統計',source:{name:'交通部：114年交通死亡人數持續下降',url:'https://168.motc.gov.tw/theme/car/post/2603311446906'}},
        {item:'年度趨勢方向',desc:'2758人：衛福部死因統計中運輸事故死亡由111年3,143人、112年3,068人、113年2,932人降至114年2,758人，其中機動車交通事故2,538人。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'好發族群年齡層',desc:'機車減少146人：114年與112年相比，機車死亡減少146人（-7.7%）、高齡者減少33人（-2.6%）、行人減少26人（-6.8%）、兒少減少17人（-22.4%）。',tag:'官方統計',source:{name:'交通部：114年交通死亡人數持續下降',url:'https://168.motc.gov.tw/theme/car/post/2603311446906'}},
        {item:'政策動向',desc:'酒駕死亡減少43.5%：114年酒駕死亡較112年減少110人，為各項指標中降幅最大，交通部168交通安全入口網持續推廣「顯露自己、保持緩衝空間、預想他人動作」的防禦駕駛原則。',tag:'官方統計',source:{name:'交通部：114年交通死亡人數持續下降',url:'https://168.motc.gov.tw/theme/car/post/2603311446906'}}
      ],
      product_view:['機會：交通事故是青壯年意外身故與失能的重要原因，可連結意外傷害與失能保障的必要性說明。','機會：防禦駕駛、機車安全帽與高齡用路安全可作為保戶關懷內容。','風險：避免以事故畫面或死亡案例製造恐懼；不得暗示投保可降低事故風險。'],
      marketing_view:['機會：連假出遊、開學、年節返鄉前是固定溝通時點。','機會：「綠燈也要看一下」這類具體動作容易轉成短影音或互動題。','風險：交通議題易流於說教，宜以家人平安的情感角度切入。'],
      alert_level:'low',
      alert_reason:'屬長期事故傷害議題，整體死亡人數逐年下降；連假與返鄉期間適合加強溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('平均每天仍有近8人因交通事故失去生命','DATA_FACTUAL_ACCURACY','derived_figure',
          '「每天近8人」是由全年2,858人自行換算（約7.8人），文中未說明是換算值。','low','no',
          null,'no','clarify','換算正確，屬表達說明。',
          '平均每天仍有近8人（依全年2,858人換算）因交通事故失去生命',
          ['換算下來每天將近8人','每天仍有將近8人因交通事故離世']),
        F('較112年減少165人（-5.5%）','DATA_FACTUAL_ACCURACY','comparison_baseline',
          '交通部以112年為比較基準，而非前一年113年；讀者可能誤以為是「比去年少」。','low','no',
          null,'no','clarify','比較基準已寫出，但宜說明為何跨年比較。',
          '較112年（交通部道安目標基準年）減少165人（-5.5%）',
          ['比112年少了165人','較112年減少5.5%']),
        F('運輸事故死亡由112年3,068人降至114年2,758人','DATA_FACTUAL_ACCURACY','definition_mismatch',
          '死因統計的「運輸事故」與交通部「30日死亡」口徑不同，同一段落並列兩組數字，未說明差異，讀者可能以為數字矛盾。','medium','no',
          null,'no','clarify','兩組數字皆正確，需註明統計方式。',
          '依死亡登記統計的運輸事故死亡由112年3,068人降至114年2,758人（與30日死亡口徑不同）'),
        F('服用可能造成嗜睡的藥物前先詢問醫師或藥師','TERMINOLOGY_LANGUAGE','vague_term',
          '未舉例哪些常見藥物可能造成嗜睡（如部分感冒藥、抗組織胺），讀者不易判斷自己是否需要注意。','low','no',
          null,'no','clarify','屬說明具體度。',
          '服用可能造成嗜睡的藥物（如部分感冒藥、抗過敏藥）前先詢問醫師或藥師',
          ['吃了感冒藥或會想睡的藥嗎？','疲勞或服藥嗜睡先休息'])
      ],
      card:[
        F('衛福部死因統計（依死亡登記，口徑與 30 日死亡不同）','DATA_FACTUAL_ACCURACY','mixed_metrics',
          '主數字與直條圖分屬兩種統計口徑，雖已註明，但同卡並列仍可能讓讀者以為 2025 年有兩個數字；可考慮改用同口徑或拆卡。','low','no',
          null,'no','clarify','已有註記，屬版面判斷。',
          null),
        F('酒駕死亡降幅','DATA_FACTUAL_ACCURACY','comparison_baseline',
          '-43.5% 是與 112 年相比，卡面標籤未標示比較基準年。','low','no',
          null,'no','clarify','屬標示完整度。',
          '酒駕死亡降幅（vs 112 年）')
      ]
    },
    title_alts:[
      '守法還不夠：防禦駕駛5原則，預判風險保平安',
      '綠燈就安全嗎？學會防禦駕駛，替家人多留一秒',
      '114年交通死亡2,858人：酒駕降4成，防禦駕駛再進一步'
    ],
    card_title_alts:[
      ['守法還不夠','防禦駕駛，替家人多留一秒'],
      ['綠燈就安全嗎？','防禦駕駛 4 個動作'],
      ['114 年交通死亡 2,858 人','預判風險保平安']
    ],
    data_addon:[
      '114年全年30日死亡2,858人，較112年減少165人（-5.5%）（交通部）。',
      '酒駕死亡較112年減少110人（-43.5%），兒少減少22.4%。',
      '死因統計114年運輸事故死亡2,758人，其中機動車交通事故2,538人。'
    ],
    cta:'下次開車或騎車，在綠燈通過路口前多看一眼左右，變換車道前轉頭確認死角。'
  });
})();
