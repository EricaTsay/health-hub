/* v6 示範主題：精神疾患的藥物與認知行為治療（B5 心理健康與精神疾患）
   查證日期：2026-11-20。數據來源：WHO〈Depressive disorder (depression)〉fact sheet（2026-09-11）、
   聯合報 2026-08-02（身心醫學診所醫師：抗憂鬱藥療程與停藥）、衛福部 115-01-08 青壯世代心理健康支持方案新聞稿。
   參考方向：健康智庫〈精神疾患－藥物與認知行為治療〉2025/03。 */
(function(){
  const WHO = 'https://www.who.int/news-room/fact-sheets/detail/depression';
  const UDN = 'https://udn.com/news/story/7266/9665799';
  const REFS = [
    {title:'Depressive disorder (depression)',source:'World Health Organization',url:WHO},
    {title:'抗憂鬱藥能停嗎？ 醫：「心情一好就停」恐提高復發風險',source:'聯合報',url:UDN},
    {title:'健康「心」生活！115年續推青壯世代心理健康支持方案',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-85046-1.html'},
    {title:'安心專線改4碼更好記! 1925依舊愛我 持續服務你和我',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48244-1.html'}
  ];
  const TABLE = {headers:['','藥物治療','認知行為治療（CBT）'], rows:[
    ['怎麼幫忙','調整大腦神經傳導，緩解症狀','學習辨識並調整負面想法與行為模式'],
    ['多久見效','抗憂鬱藥通常需數週才逐漸見效','通常需數次到十多次會談練習'],
    ['適合情況','中重度症狀，依醫師評估','輕度到中重度皆可，常與藥物併用'],
    ['注意事項','勿自行停藥，減藥要循序漸進','需要練習與回家作業，持續才有效']
  ]};
  const TAGS = ['精神科藥物','認知行為治療','心理治療','抗憂鬱藥','心理健康'];

  const DP_MILD = {id:'dp-tx-mild', type:'context', title:'「輕度憂鬱不需要藥物」的說法',
    desc:'WHO 指出輕度憂鬱不需要抗憂鬱藥，心理治療是第一線；但個別病人是否用藥應由醫師評估。這句話若單獨轉傳，可能讓正在服藥的人自行停藥。AI 已在文中加上「依醫師評估、勿自行停藥」，是否再強調由你決定。',
    current:'保留WHO說法並加上「依醫師評估」',
    options:[{label:'沿用目前寫法', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'精神疾患怎麼治療？藥物與認知行為治療的角色',
    update_date:'2026/11/20',
    intro:'世界衛生組織（WHO）2026年資料指出，全球約5.2%的成人罹患憂鬱症，而在高所得國家中，只有約三分之一的患者接受心理健康治療。WHO表示，心理治療是憂鬱症的第一線治療，包括認知行為治療（CBT）、行為活化、人際心理治療等；中重度憂鬱可合併抗憂鬱藥物，輕度憂鬱則不需要抗憂鬱藥。不論哪一種方式，都需由專業人員評估後規律進行。',
    sections:[
      {heading:'藥物治療與認知行為治療比一比',format:'table',table:TABLE},
      {heading:'用藥的3個常見迷思',format:'bullets',items:[
        '「吃藥會上癮」：身心醫學科醫師指出，抗憂鬱藥不會產生欣快感，不屬於成癮性藥物；部分安眠鎮靜藥則需依醫囑短期使用。',
        '「心情好了就可以停」：醫師指出症狀改善後自行停藥是復發風險最高的階段；首次發作且反應良好者，一般建議症狀完全緩解後仍持續服藥至少6個月。',
        '「停藥沒差」：突然停藥可能出現頭暈、噁心、失眠、煩躁等反應，應與醫師討論循序漸進減量。'
      ]},
      {heading:'如何開始',format:'bullets',items:[
        '先到身心科或精神科評估，由醫師依嚴重度建議藥物、心理治療或兩者併用。',
        '15至45歲可使用衛福部3次免費心理諮商，作為初步評估與轉介的起點。',
        '需要立即傾訴，可撥24小時免付費的1925安心專線。'
      ]}
    ],
    think_tank_view:'藥物與心理治療不是二選一，而是依病情搭配的工具：藥物幫忙穩住症狀，認知行為治療則幫助建立長期的因應能力。最重要的是規律治療、有疑問就和醫師討論，而不是自己決定停藥。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'國際數據與治療建議引自WHO 2026年資料，用藥說明標明醫師身分，提醒勿自行停藥，附求助專線，未使用療效保證用語，未涉及具體藥品品牌。',
    ai_rationale:{basis:['WHO 2026：全球約5.2%成人罹患憂鬱症、心理治療為第一線','醫師：首次發作症狀緩解後持續服藥至少6個月'],
      layout_reason:'先用表格對照藥物與CBT，再破除3個用藥迷思，最後給開始治療的管道。',
      tone:'專業易懂', tone_reason:'需破除迷思又避免讀者自行停藥。',
      to_verify:['「至少6個月」為單一醫師引述國際指引，指引名稱未標示']},
    decision_points:[DP_MILD]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'看身心科一定要吃藥嗎？藥物和心理治療怎麼搭配',
    update_date:'2026/11/20',
    intro:'很多人擔心「去看身心科就要一直吃藥」「吃了會上癮」。其實治療方式不只一種：世界衛生組織說，心理治療（例如認知行為治療）是憂鬱症的第一線治療，比較嚴重時再搭配藥物，輕度憂鬱通常不需要吃抗憂鬱藥。重點是先讓專業人員評估，再一起決定最適合的方式。',
    sections:[
      {heading:'藥物和認知行為治療，差在哪？',format:'table',table:TABLE},
      {heading:'關於吃藥，常聽到的3個誤會',format:'bullets',items:[
        '「吃了會上癮」：醫師說抗憂鬱藥不會讓人產生欣快感，不是成癮性藥物；安眠藥則要照醫師指示短期使用。',
        '「心情好就停」：醫師說這時候最容易復發，第一次發作通常建議好轉後再吃至少6個月。',
        '「突然停也沒關係」：突然停藥可能頭暈、噁心、睡不好，要和醫師討論慢慢減。'
      ]},
      {heading:'想開始治療，可以這樣做',format:'bullets',items:[
        '先去身心科或精神科聊聊，讓醫師評估。',
        '15到45歲有3次免費心理諮商可以用。',
        '想馬上找人說話，打1925安心專線。'
      ]}
    ],
    think_tank_view:'吃藥不丟臉，做心理治療也不代表你很嚴重。把它們當成照顧自己的工具，跟醫師好好討論，就能找到適合自己的節奏。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'治療建議引自WHO與醫師說法，提醒勿自行停藥，語氣親切，附求助專線，未使用療效保證用語，未涉及具體藥品品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以常見擔心帶出治療方式、迷思與開始的管道。', tone:'生活親切', tone_reason:'降低就醫與用藥的心理門檻。', to_verify:[]},
    decision_points:[DP_MILD]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'藥物與認知行為治療：3個用藥迷思',
    update_date:'2026/11/20',
    intro:'WHO：心理治療是憂鬱症第一線治療，中重度可合併抗憂鬱藥。醫師提醒，症狀改善後自行停藥是復發高風險期。',
    sections:[
      {heading:'藥物vs CBT',format:'table',table:TABLE},
      {heading:'3個迷思',format:'bullets',items:[
        '抗憂鬱藥不是成癮性藥物。',
        '好轉後仍需持續服藥一段時間。',
        '減藥要循序漸進。'
      ]},
      {heading:'開始治療',format:'bullets',items:[
        '身心科評估。',
        '15–45歲3次免費諮商；1925安心專線。'
      ]}
    ],
    think_tank_view:'藥物與心理治療依病情搭配；規律治療、勿自行停藥。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'引自WHO與醫師說法，提醒勿自行停藥，附求助專線，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為對照、迷思、開始三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_MILD]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'精神疾患的藥物與認知行為治療', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'藥物與心理治療依病情搭配', primary_visual:'約 1/3', secondary_message:'高所得國家僅約 1/3 憂鬱症患者接受治療', action_priority:'評估、規律治療、勿自行停藥'},
    headline_hook:'看身心科一定要吃藥？', headline_main:'治療精神疾患 4 原則', title_accent:'4 原則',
    hero_message:'藥物＋心理治療', hero_support:'WHO：心理治療是憂鬱症第一線，中重度可合併用藥',
    primary_stat:{value:'約 1/3', label:'高所得國家憂鬱症患者接受治療的比例', note:'WHO 2026'},
    action_title:'治療這樣進行',
    action_cards:[
      {key:'評', text:'先到身心科評估嚴重度'},
      {key:'練', text:'認知行為治療需持續練習'},
      {key:'續', text:'好轉後勿自行停藥'},
      {key:'減', text:'減藥與醫師討論、循序漸進'}
    ],
    notice:'抗憂鬱藥**不屬於成癮性藥物**；有疑慮請直接問醫師。',
    carousel_suggestion:{reason:'若想把治療方式、迷思與求助管道分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'藥物 vs 心理治療', headline_main:'兩種治療怎麼搭配'},
      {layout_type:'knowledge', headline_hook:'用藥迷思', headline_main:'吃藥會上癮嗎？'},
      {layout_type:'action', headline_hook:'開始治療', headline_main:'評估、規律、不自停'}]},
    hashtags:['精神科藥物','認知行為治療','心理治療','心理健康'],
    sources:['World Health Organization','身心醫學科醫師（媒體受訪）'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'心理治療與用藥', audience:'正在考慮就醫的成年人', scene:'一位成年人在諮商室與心理師對談，桌上放著筆記本與一盒藥',
      emotion:'信任、穩定', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult talking with a psychologist in a counselling room, a notebook and a small medicine box on the table, trusting and steady mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['WHO 2026：高所得國家約1/3憂鬱症患者接受治療'],
      layout_reason:'選 action：4 個治療原則當主角，治療缺口數字放下方，以「不成癮」澄清收尾。',
      tone:'專業易懂', tone_reason:'破除迷思、鼓勵規律治療。',
      to_verify:[]},
    decision_points:[DP_MILD],
    content_check_note:'數據引自WHO，提醒勿自行停藥，未使用療效保證用語，未涉及具體藥品品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'精神疾患的藥物與認知行為治療',
    collect:{
      summary:'精神疾患治療常因「吃藥會上癮」「好了就停」等迷思而中斷；WHO 2026年資料強調心理治療為憂鬱症第一線、中重度可合併藥物，國內免費心理諮商提供入門管道，「規律治療、正確用藥」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'全球約5.2%成人罹患憂鬱症：WHO 2026年資料指出，成人中男性4.1%、女性6.2%，女性約為男性1.5倍。',tag:'官方統計',source:{name:'World Health Organization：Depressive disorder (depression)（2026）',url:WHO}},
        {item:'年度趨勢方向',desc:'僅約三分之一接受治療：WHO指出，即使在高所得國家，憂鬱症患者中也只有約三分之一接受心理健康治療。',tag:'官方統計',source:{name:'World Health Organization：Depressive disorder (depression)（2026）',url:WHO}},
        {item:'政策動向',desc:'逾8萬人使用免費心理諮商：衛福部青壯世代心理健康支持方案自113年8月至114年10月底已逾8萬人使用，115年持續提供15至45歲每人3次。',tag:'官方統計',source:{name:'衛生福利部：115年續推青壯世代心理健康支持方案',url:'https://www.mohw.gov.tw/cp-16-85046-1.html'}},
        {item:'好發族群年齡層',desc:'好轉後至少再服藥6個月：身心醫學科醫師2026年受訪指出，首次發作且反應良好者，一般建議症狀完全緩解後仍持續服藥至少6個月，自行停藥是復發高風險期。',tag:'市場觀察',source:{name:'聯合報：抗憂鬱藥能停嗎？ 醫：「心情一好就停」恐提高復發風險',url:UDN}}
      ],
      product_view:['機會：精神疾患多需長期門診與心理治療，可說明門診醫療與心理支持資源。','機會：員工協助方案可納入心理諮商與用藥衛教。','風險：不推薦特定藥品或治療機構；避免暗示保險給付心理治療，依實際條款說明。'],
      marketing_view:['機會：「吃藥會上癮嗎？」是高搜尋量的迷思題材。','機會：結合免費心理諮商方案做行動導向內容。','風險：任何關於停藥的內容都需加註「與醫師討論」，避免誤導。'],
      alert_level:'low',
      alert_reason:'屬長期心理健康衛教議題，無時效性政策事件；適合心理健康月溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('輕度憂鬱則不需要抗憂鬱藥','MEDICAL_INTERPRETATION','population_guidance_as_individual',
          'WHO的建議是族群層級原則，個別病人是否用藥應由醫師評估；正在服藥的讀者可能據此自行停藥。','medium','no',
          null,'no','clarify','屬適用範圍說明。',
          '輕度憂鬱通常不需要抗憂鬱藥（個別情況仍由醫師評估，已在服藥者請勿自行停藥）',
          ['輕度憂鬱通常不需要吃抗憂鬱藥']),
        F('一般建議症狀完全緩解後仍持續服藥至少6個月','SOURCE_EVIDENCE','guideline_unnamed',
          '醫師提到「國際指引也有類似建議」，但文中未標示是哪一份指引。','low','yes',
          '國際憂鬱症治療指引（如NICE、APA）對維持治療期間的建議。','no','confirm','說法與常見指引一致，出處未標示。',
          '一般建議症狀完全緩解後仍持續服藥至少6個月（醫師引述國際治療指引）',
          ['第一次發作通常建議好轉後再吃至少6個月']),
        F('通常需數次到十多次會談練習','DATA_FACTUAL_ACCURACY','unsourced_duration',
          'CBT會談次數沒有出處，且因疾病與個人而異。','low','no',
          null,'no','clarify','屬一般性描述。',
          '會談次數依疾病與個人狀況而定，由治療師評估'),
        F('部分安眠鎮靜藥則需依醫囑短期使用','MEDICAL_INTERPRETATION','missing_rationale',
          '沒有說明原因（長期使用可能產生耐受性與依賴），讀者不易理解。','low','no',
          null,'no','clarify','補一句理由即可。',
          '部分安眠鎮靜藥則需依醫囑短期使用（長期使用可能產生耐受性與依賴）',
          ['安眠藥則要照醫師指示短期使用'])
      ],
      card:[
        F('高所得國家憂鬱症患者接受治療的比例','DATA_FACTUAL_ACCURACY','international_data_as_local',
          '主數字是國際數據，卡面未提醒非台灣資料，轉傳時可能被當成國內現況。','low','no',
          null,'no','clarify','屬標示問題。',
          '高所得國家憂鬱症患者接受治療的比例（國際數據）'),
        F('好轉後勿自行停藥','MEDICAL_INTERPRETATION','missing_practical_info',
          '只說不要停，沒說明該怎麼做，讀者想減藥時不知道下一步。','low','no',
          null,'no','clarify','補行動即可。',
          '好轉後勿自行停藥，想減藥先問醫師')
      ]
    },
    title_alts:[
      '精神疾患怎麼治療？藥物與認知行為治療的角色',
      '看身心科一定要吃藥嗎？藥物和心理治療怎麼搭配',
      '吃藥會上癮嗎？精神科用藥3個迷思與認知行為治療'
    ],
    card_title_alts:[
      ['看身心科一定要吃藥？','治療精神疾患 4 原則'],
      ['吃藥會上癮嗎？','精神科用藥迷思'],
      ['藥物＋心理治療','兩種治療怎麼搭配']
    ],
    data_addon:[
      'WHO 2026：約3.22億人罹患憂鬱症；抗憂鬱藥不應用於兒童，青少年使用需格外謹慎。',
      'WHO列出的有效心理治療：行為活化、認知行為治療、人際心理治療、問題解決治療。',
      '醫師建議至少每半年與醫師重新評估一次是否調整用藥。'
    ],
    cta:'如果你正在服藥又想停藥，下次回診先和醫師討論減藥計畫；還沒就醫的人，可先查詢15至45歲免費心理諮商名額。'
  });
})();
