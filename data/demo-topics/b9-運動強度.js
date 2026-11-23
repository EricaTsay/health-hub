/* v6 示範主題：運動強度（B9 飲食營養與運動）
   查證日期：2026-11-20。數據來源：國健署健康問答〈運動越激烈越能預防心血管疾病?〉（強度定義、每週建議量、暖身與不適就醫）、〈每天要運動多久才會對體重控制有幫忙？〉（中等強度「可交談無法唱歌」、中年後300分鐘）、運動部全民運動署114年運動現況調查新聞稿（規律運動人口35.6%、運動強度會喘會流汗49.5%）。
   參考方向：健康智庫〈運動強度知多少〉2023/08。 */
(function(){
  const REFS = [
    {title:'運動越激烈越能預防心血管疾病?',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=127&pid=13267'},
    {title:'每天要運動多久才會對體重控制有幫忙？',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=825&pid=14222'},
    {title:'114年運動現況調查成果發表 規律運動人口再增加',source:'運動部全民運動署',url:'https://www.sa.gov.tw/News_Content/362/20136'}
  ];
  const TABLE = {headers:['強度','身體感覺（持續10分鐘以上）'], rows:[
    ['中等強度','還能順暢對話但無法唱歌；有點累、呼吸心跳比平常快、微微流汗'],
    ['高強度','無法邊活動邊輕鬆說話；很累、呼吸心跳快很多、流很多汗'],
    ['每週建議量','中等強度150分鐘，或高強度75分鐘，再加每週2次肌力強化運動']
  ]};
  const TAGS = ['運動強度','規律運動','中等強度','心血管健康','肌力訓練'];

  const PRO = {
    content_type:'健康文章',
    title:'運動要多喘才有效？用「能不能說話」判斷運動強度',
    update_date:'2026/11/20',
    intro:'國民健康署定義，中等強度運動是持續10分鐘以上還能順暢對話、但無法唱歌；高強度運動則無法邊活動邊輕鬆說話。成人每週建議150分鐘中等強度或75分鐘高強度運動，再加上2次肌力強化運動。運動部全民運動署114年運動現況調查顯示，規律運動人口比例為35.6%，運動時會喘、會流汗的比例為49.5%。',
    sections:[
      {heading:'運動強度怎麼判斷',format:'table',table:TABLE},
      {heading:'運動不是越激烈越好',format:'bullets',items:[
        '預防心血管疾病需要的是有氧運動加肌力強化運動，並非越激烈越好。',
        '過了中年要有效阻止體重增加，每週可能需要300分鐘以上的中等強度運動。',
        '1分鐘高強度運動約等於2分鐘中等強度運動，可依體力搭配。'
      ]},
      {heading:'安全提醒',format:'bullets',items:[
        '運動前至少暖身5至10分鐘。',
        '依身體狀況漸進增加運動量。',
        '運動時出現不適持續10至15分鐘未改善，應緊急就醫。',
        '已有心血管疾病者，先向專科醫師諮詢適合的運動方式。'
      ]}
    ],
    think_tank_view:'很多人運動時不是太輕鬆（散步聊天）、就是一下子太拚（運動傷害）。「能說話、不能唱歌」是最簡單的自我檢測：不用手錶、不用心率帶，就能確認自己有沒有動到位。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'強度定義與建議量引自國健署，規律運動人口引自運動部全民運動署114年調查並標明年份，未涉及具體運動器材或課程。',
    ai_rationale:{basis:['國健署中等／高強度定義與每週建議量','114年規律運動人口35.6%（運動部全民運動署）'],
      layout_reason:'先用表格說明兩種強度的身體感覺與建議量，再破除「越激烈越好」，最後給安全提醒。',
      tone:'專業易懂', tone_reason:'需要可自我判斷的具體標準。',
      to_verify:['「1分鐘高強度＝2分鐘中等強度」為國健署健康九九換算說法']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'散步算運動嗎？邊走邊聊天，就知道強度夠不夠',
    update_date:'2026/11/20',
    intro:'運動到底要多累才算數？國健署給了一個很好用的方法：運動10分鐘以上，還能說話但沒辦法唱歌，就是「中等強度」；喘到沒辦法好好說話，就是「高強度」。每週累積150分鐘中等強度運動，再做2次肌力訓練就達標。114年調查顯示，有35.6%的人做到規律運動。',
    sections:[
      {heading:'一秒判斷運動強度',format:'table',table:TABLE},
      {heading:'不用拚命也有效',format:'bullets',items:[
        '想顧心臟，有氧加肌力就夠，不必越激烈越好。',
        '中年以後想控制體重，每週可能要動到300分鐘。',
        '1分鐘高強度約等於2分鐘中等強度。'
      ]},
      {heading:'安全最重要',format:'bullets',items:[
        '先暖身5到10分鐘。',
        '慢慢增加運動量。',
        '運動中不舒服超過10到15分鐘沒好轉，要趕快就醫。',
        '有心臟病的人，先問醫師怎麼運動。'
      ]}
    ],
    think_tank_view:'下次快走時，試著哼一首歌：唱得出來就加快一點，連話都說不清就放慢一點。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'強度定義與建議引自國健署，規律運動比例引自運動部114年調查，未涉及具體運動器材。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以「散步算不算運動」的疑問切入。', tone:'生活親切', tone_reason:'給運動新手。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'運動強度：能說話、不能唱歌',
    update_date:'2026/11/20',
    intro:'中等強度＝能對話不能唱歌；每週150分鐘中等或75分鐘高強度，加2次肌力訓練。114年規律運動人口35.6%。',
    sections:[
      {heading:'強度判斷',format:'table',table:TABLE},
      {heading:'觀念',format:'bullets',items:[
        '不是越激烈越好。',
        '中年後控重需更多運動量。'
      ]},
      {heading:'安全',format:'bullets',items:[
        '暖身5-10分鐘。',
        '不適未改善即就醫。'
      ]}
    ],
    think_tank_view:'用說話測試掌握強度，比追求極限更安全有效。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署與運動部並標明年份，未涉及具體運動器材。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為判斷、觀念、安全三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'運動強度', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'能說話但不能唱歌＝中等強度', primary_visual:'150 分鐘', secondary_message:'規律運動人口 35.6%', action_priority:'每週 150 分鐘＋2 次肌力'},
    headline_hook:'運動要多喘才有效？', headline_main:'用說話判斷運動強度', title_accent:'說話',
    hero_message:'每週 150 分鐘', hero_support:'中等強度運動建議量，再加 2 次肌力訓練（國健署）',
    knowledge_title:'強度怎麼判斷', knowledge_note:'持續 **10 分鐘以上** 時的感覺',
    knowledge_cards:[
      {label:'中等強度', icon:'chat', lines:['能對話、不能唱歌','微微流汗']},
      {label:'高強度', icon:'heart', lines:['無法輕鬆說話','流很多汗']},
      {label:'換算', icon:'check', lines:['高強度 1 分鐘','≈ 中等強度 2 分鐘']}
    ],
    primary_stat:{value:'35.6%', label:'114 年規律運動人口比例', note:'運動部全民運動署運動現況調查（7333 定義）'},
    secondary_stats:[
      {value:'49.5%', label:'運動時會喘會流汗'}
    ],
    action_title:'這樣動剛剛好',
    action_cards:[
      {key:'暖', text:'運動前暖身 5–10 分鐘'},
      {key:'動', text:'每週中等強度 150 分鐘'},
      {key:'肌', text:'每週 2 次肌力強化運動'},
      {key:'停', text:'不適 10–15 分鐘未改善就就醫'}
    ],
    carousel_suggestion:{reason:'若想把強度判斷、建議量與安全提醒分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'運動要多喘？', headline_main:'用說話判斷強度'},
      {layout_type:'data', headline_hook:'國人規律運動', headline_main:'35.6%'},
      {layout_type:'action', headline_hook:'安全運動', headline_main:'暖身與不適就醫'}]},
    hashtags:['運動強度','規律運動','中等強度','肌力訓練'],
    sources:['衛生福利部國民健康署','運動部全民運動署'],
    illustration_category:'general',
    illustration:{topic:'運動強度', audience:'運動新手與上班族', scene:'兩位朋友在河濱快走，邊走邊聊天，微微流汗',
      emotion:'有活力、輕鬆', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'Two friends brisk-walking along a riverside path while chatting, lightly sweating, energetic and relaxed, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['國健署強度定義','114年規律運動人口35.6%（運動部）'],
      layout_reason:'核心是自我判斷強度，選 knowledge：兩種強度與換算當主角，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'簡單可自測。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自國健署與運動部並標明年份，未涉及具體運動器材。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'運動強度',
    collect:{
      summary:'國健署以「能說話但不能唱歌」定義中等強度運動，建議成人每週150分鐘中等或75分鐘高強度運動，加2次肌力訓練；運動部114年調查顯示規律運動人口35.6%、運動時會喘會流汗者49.5%。掌握強度是讓運動有效又安全的關鍵。',
      objective_data:[
        {item:'盛行率／發生率',desc:'35.6%：運動部全民運動署114年運動現況調查，以「7333」（每週3次以上、每次30分鐘以上、會流汗也會喘）定義的規律運動人口比例為35.6%，較113年增加0.3%。',tag:'官方統計',source:{name:'運動部全民運動署：114年運動現況調查成果發表',url:'https://www.sa.gov.tw/News_Content/362/20136'}},
        {item:'年度趨勢方向',desc:'49.5%：114年運動時會喘、會流汗的比例為49.5%，較105年增加5.8%，國人參與運動人口比例為83.3%。',tag:'官方統計',source:{name:'運動部全民運動署：114年運動現況調查成果發表',url:'https://www.sa.gov.tw/News_Content/362/20136'}},
        {item:'政策動向',desc:'每週150分鐘：國健署建議每週150分鐘中等強度或75分鐘高強度運動，再加每週2次肌力強化運動，並非越激烈越能預防心血管疾病。',tag:'官方統計',source:{name:'國健署：運動越激烈越能預防心血管疾病?',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=127&pid=13267'}},
        {item:'好發族群年齡層',desc:'每週300分鐘以上：國健署指出過了中年的男女要有效阻止體重增加，每週至少需要300分鐘以上的中等強度運動。',tag:'官方統計',source:{name:'國健署：每天要運動多久才會對體重控制有幫忙？',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=825&pid=14222'}}
      ],
      product_view:['機會：規律運動與慢性病預防相關，可作為健康促進活動的基礎內容。','機會：「說話測試」簡單易懂，適合結合步行或運動挑戰。','風險：避免推薦特定穿戴裝置或課程；有心血管疾病者需提醒先諮詢醫師。'],
      marketing_view:['機會：運動部年度調查公布時是溝通時點。','機會：「散步算運動嗎？」是常見疑問，適合做問答內容。','風險：不宜鼓吹高強度挑戰，避免運動傷害。'],
      alert_level:'low',
      alert_reason:'屬長期健康行為議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國民健康署定義，中等強度運動是持續10分鐘以上還能順暢對話','SOURCE_EVIDENCE','secondary_citation',
          '國健署問答引述的每週建議量出自美國心臟病學會，文中將建議量與強度定義都歸為國健署，未區分出處。','low','no',
          null,'no','clarify','屬出處層級。',
          '國民健康署定義，中等強度運動是持續10分鐘以上還能順暢對話（建議量則引述美國心臟病學會）',
          ['國健署給了一個很好用的方法']),
        F('1分鐘高強度運動約等於2分鐘中等強度運動','SOURCE_EVIDENCE','unsourced_conversion',
          '換算說法出自國健署健康九九網站，但本文參考資料未列該頁。','low','no',
          null,'no','clarify','屬出處完整度。',
          '依國健署健康九九網站，1分鐘高強度運動約等於2分鐘中等強度運動',
          ['1分鐘高強度約等於2分鐘中等強度']),
        F('規律運動人口比例為35.6%','DATA_FACTUAL_ACCURACY','definition_unstated',
          '「規律運動」採運動部7333定義（每週3次、每次30分鐘、會喘會流汗），與國健署每週150分鐘建議量口徑不同，文中未說明。','low','no',
          null,'no','clarify','屬定義說明。',
          '規律運動人口比例（7333定義）為35.6%',
          ['有35.6%的人做到規律運動','114年規律運動人口35.6%。'])
      ],
      card:[
        F('不適 10–15 分鐘未改善就就醫','MEDICAL_INTERPRETATION','red_flag_delay',
          '胸痛、呼吸困難等急性症狀應立即停止並就醫，不必等 10–15 分鐘；卡面可能讓人延誤。','medium','no',
          null,'no','clarify','屬安全提醒。',
          '胸痛、喘不過氣立即停止並就醫'),
        F('114 年規律運動人口比例','DATA_FACTUAL_ACCURACY','definition_unstated',
          '規律運動定義與國健署建議量不同，標籤未說明。','low','no',
          null,'no','clarify','屬定義說明。',
          '114 年規律運動人口比例（7333）')
      ]
    },
    title_alts:[
      '運動要多喘才有效？用「能不能說話」判斷運動強度',
      '散步算運動嗎？邊走邊聊天，就知道強度夠不夠',
      '規律運動人口35.6%：每週150分鐘中等強度怎麼做'
    ],
    card_title_alts:[
      ['運動要多喘才有效？','用說話判斷運動強度'],
      ['散步算運動嗎？','能說話不能唱歌剛剛好'],
      ['每週 150 分鐘','再加 2 次肌力訓練']
    ],
    data_addon:[
      '114年國人參與運動人口比例83.3%（運動部全民運動署）。',
      '114年規律運動者「自覺健康」比例81.8%。',
      '運動前至少暖身5至10分鐘（國健署）。'
    ],
    cta:'下次快走時試著哼一首歌：唱得出來就加快一點，連話都說不清就放慢一點。'
  });
})();
