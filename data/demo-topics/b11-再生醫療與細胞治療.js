/* v6 示範主題：再生醫療與細胞治療（B11 第二輪新主題）
   查證日期：2026-11-23。數據來源：衛福部再生醫療技術資訊專區（核准計畫統計截至2026-09-30）、衛福部新聞稿〈立法院三讀通過「再生醫療法」〉（113-06-04）、再生醫療技術及指定製劑管理辦法（114-11-17發布）。
   參考方向：判定清單第381、541列（細胞治療、再生醫療法文章）。只取架構，數據重新查證。 */
(function(){
  const REFS = [
    {title:'再生醫療技術資訊專區（國內已核准再生醫療技術之醫療機構數及計畫數）',source:'衛生福利部',url:'https://celltherapy.mohw.gov.tw/'},
    {title:'立法院三讀通過「再生醫療法」開啟再生醫療新里程',source:'衛生福利部',url:'https://mohw.gov.tw/cp-6650-78933-1.html'},
    {title:'再生醫療技術及指定製劑管理辦法',source:'全國法規資料庫',url:'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0020250'}
  ];
  const TABLE = {headers:['制度重點','內容'], rows:[
    ['法源','再生醫療法自115年1月1日施行，取代過去以「特管辦法」管理細胞治療的方式'],
    ['誰可以做','醫療機構須先經衛福部核准、再向地方衛生局登記；非醫療機構不得執行'],
    ['事前告知','須說明病情、治療計畫、可替代治療、費用與救濟措施，並簽署同意書'],
    ['收費方式','收費基準須經地方主管機關核定，應分階段收費，不得要求一次預繳全部費用'],
    ['違法罰則','非醫療機構執行再生醫療或刊登廣告，最高可處2千萬元']
  ]};
  const TAGS = ['再生醫療','細胞治療','再生醫療法','幹細胞','自費醫療'];

  const DP_COUNT = {id:'dp-regen-count', type:'data_scope', title:'核准計畫數含已終止計畫',
    desc:'衛福部專區的521件為累計核准數，備註寫明包含已終止的計畫與醫療機構，不等於目前仍在執行的計畫數。AI 沿用官方累計數並標註口徑。',
    current:'累計核准521件（統計至2026年9月30日，含已終止計畫）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'521件', value:'累計核准', note:'衛福部再生醫療技術資訊專區，2026-09-30（目前採用）'},
      {label:'未公布', value:'目前執行中', note:'專區未另列仍在執行的計畫數'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'細胞治療可以做了嗎？再生醫療法上路後的制度重點',
    update_date:'2026/11/23',
    intro:'再生醫療是運用細胞、基因或組織工程修復受損組織或治療疾病。再生醫療法已於115年1月1日施行，醫療機構須經衛福部核准才能執行。依衛福部再生醫療技術資訊專區，統計至2026年9月30日，全國累計核准521件再生醫療技術計畫，由84家醫院與17家診所執行；其中件數最多的是第四期實體癌的自體免疫細胞治療（299件）。這些治療目前多為自費。',
    sections:[
      {heading:'再生醫療法的制度重點',format:'table',table:TABLE},
      {heading:'目前核准的技術項目',format:'bullets',items:[
        '自體免疫細胞治療：用於經標準治療無效的血液惡性腫瘤、第一至三期實體癌，以及第四期實體癌。',
        '自體脂肪幹細胞、骨髓間質幹細胞、軟骨細胞治療：用於退化性關節炎、膝關節軟骨缺損、困難傷口等。',
        '另有自體CD34+周邊血幹細胞（慢性缺血性腦中風）、自體纖維母細胞（皮膚缺陷）等項目。'
      ]},
      {heading:'考慮接受治療前',format:'bullets',items:[
        '先到衛福部再生醫療技術資訊專區，確認院所與計畫是否經核准。',
        '請醫師說明適應症、可能效果、風險與其他可選擇的治療。',
        '確認收費明細與分階段收費方式，不要一次預繳全部費用。',
        '非醫療機構的再生醫療或外泌體廣告屬違法，可向專區檢舉。'
      ]}
    ],
    think_tank_view:'再生醫療法讓細胞治療有了明確的法律規範，但「經核准」不等於「一定有效」，多數項目仍是自費且費用不低。面對相關治療，先查核准名單、問清楚適應症與收費，是保護自己最實際的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'核准計畫數引自衛福部專區並標明統計日期，制度內容引自再生醫療法相關法規與衛福部新聞稿，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['核准計畫521件、84家醫院、17家診所取自衛福部再生醫療技術資訊專區（2026-09-30）','收費與告知規定取自再生醫療技術及指定製劑管理辦法第10、11條'],
      layout_reason:'先用表格說明法規怎麼管，再列核准項目，最後提醒就醫前的確認事項。',
      tone:'專業易懂', tone_reason:'法規與自費議題需要精確。',
      to_verify:['521件為累計數，含已終止計畫','再生醫療製劑條例的施行狀態']},
    decision_points:[DP_COUNT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'聽說細胞治療很神？先搞懂再生醫療的5個規定',
    update_date:'2026/11/23',
    intro:'最近常聽到幹細胞、免疫細胞治療，台灣也在115年1月1日開始施行再生醫療法。到2026年9月底，衛福部累計核准521件計畫，由84家醫院和17家診所執行，最多的是第四期癌症的免疫細胞治療。不過這些治療大多要自費，花費不小，做之前一定要先弄清楚。',
    sections:[
      {heading:'法律怎麼管？',format:'table',table:TABLE},
      {heading:'目前可以做哪些？',format:'bullets',items:[
        '免疫細胞治療：給標準治療沒有效的癌症病人。',
        '脂肪、骨髓幹細胞或軟骨細胞：用在退化性關節炎、膝蓋軟骨受損、傷口很難好的人。',
        '還有少數用在中風、皮膚凹洞疤痕等。'
      ]},
      {heading:'做之前先確認',format:'bullets',items:[
        '上衛福部再生醫療技術資訊專區，查醫院有沒有被核准。',
        '問醫師：我適合嗎？有什麼風險？有沒有別的選擇？',
        '費用要分階段付，不用一次繳清。',
        '美容店或非醫療機構打「幹細胞」「外泌體」是違法的。'
      ]}
    ],
    think_tank_view:'細胞治療有了法律把關，但不是萬靈丹，大多也要自費。看到廣告先別急，查查核准名單、問清楚費用和效果，再跟家人一起討論。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部公開資料並標明統計日期，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從常見廣告疑問帶出法規、項目與就醫確認事項。', tone:'生活親切', tone_reason:'給一般讀者與家屬閱讀。', to_verify:['521件為累計數']},
    decision_points:[DP_COUNT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'再生醫療法上路：細胞治療重點',
    update_date:'2026/11/23',
    intro:'再生醫療法自115年1月1日施行。截至2026年9月30日累計核准521件計畫，多為自費。',
    sections:[
      {heading:'制度重點',format:'table',table:TABLE},
      {heading:'核准項目',format:'bullets',items:[
        '自體免疫細胞治療：標準治療無效的癌症。',
        '幹細胞與軟骨細胞：關節軟骨缺損、困難傷口等。'
      ]},
      {heading:'就醫前',format:'bullets',items:[
        '查核准名單、問清楚風險與費用。',
        '分階段收費，勿一次預繳。'
      ]}
    ],
    think_tank_view:'經核准不等於保證有效；先查名單、問清楚，再做決定。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部公開資料並標明統計日期，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為制度重點、核准項目、就醫前三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['521件為累計數']},
    decision_points:[DP_COUNT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'再生醫療與細胞治療', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'再生醫療法上路，細胞治療須經核准', primary_visual:'521 件', secondary_message:'第四期實體癌免疫細胞治療最多', action_priority:'做之前先查核准名單'},
    headline_hook:'再生醫療法上路', headline_main:'細胞治療前先查這些', title_accent:'先查這些',
    primary_stat:{kicker:'統計至 2026.9.30', value:'521 件', label:'累計核准再生醫療技術計畫', note:'衛福部專區｜84 家醫院、17 家診所'},
    chart:{type:'bar', title:'核准件數最多的適應症（件）', points:[
      {label:'第四期實體癌', value:299, display:'299', highlight:true},
      {label:'一至三期實體癌', value:98, display:'98'},
      {label:'膝關節退化', value:80, display:'80'},
      {label:'困難傷口', value:41, display:'41'}
    ], note:'衛福部再生醫療技術資訊專區｜含已終止計畫'},
    secondary_stats:[
      {value:'115.1.1', label:'再生醫療法施行'},
      {value:'2 千萬元', label:'非醫療機構違法最高罰'}
    ],
    action_title:'考慮治療前',
    action_cards:[
      {key:'查', text:'上衛福部專區確認院所與計畫已核准'},
      {key:'問', text:'問清楚適應症、風險與替代治療'},
      {key:'付', text:'分階段收費，不要一次預繳全額'},
      {key:'報', text:'非醫療機構廣告違法，可上網檢舉'}
    ],
    carousel_suggestion:{reason:'若想把法規、核准項目與就醫提醒分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'再生醫療法', headline_main:'115 年 1 月 1 日上路'},
      {layout_type:'data', headline_hook:'核准了哪些', headline_main:'累計 521 件計畫'},
      {layout_type:'action', headline_hook:'做之前', headline_main:'先查核准名單'}]},
    hashtags:['再生醫療','細胞治療','再生醫療法','自費醫療'],
    sources:['衛生福利部'],
    illustration_category:'general',
    illustration:{topic:'細胞治療諮詢', audience:'考慮細胞治療的病人與家屬', scene:'病人與家屬在診間聽醫師說明，醫師身旁的螢幕顯示細胞示意圖與核准文件',
      emotion:'謹慎、理性', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A patient and family member listening to a doctor in a clinic, a screen beside the doctor showing a cell diagram and an approval document, careful and rational mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['521件、84家醫院、17家診所與各適應症件數取自衛福部專區（2026-09-30）','罰則取自衛福部113-06-04新聞稿'],
      layout_reason:'選 data：累計核准數當主角，適應症件數做長條圖，最後給就醫前的 4 個確認動作。',
      tone:'專業易懂', tone_reason:'自費醫療資訊需要中性、具體。',
      to_verify:['521 件含已終止計畫']},
    decision_points:[Object.assign({}, DP_COUNT, {current:'521 件｜累計核准（含已終止計畫）'})],
    content_check_note:'數據引自衛福部並標明統計日期，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'再生醫療與細胞治療',
    collect:{
      summary:'再生醫療法自115年1月1日施行，醫療機構執行再生技術須經衛福部核准；截至2026年9月底累計核准521件計畫，以癌症免疫細胞治療為大宗。細胞治療多為自費，坊間違法廣告也常見，是自費醫療與消費者保護的長期議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'521件再生醫療技術計畫獲准：統計至2026年9月30日，全國累計核准521件，由84家醫院與17家診所執行（含已終止的計畫與機構）。',tag:'官方統計',source:{name:'衛生福利部：再生醫療技術資訊專區',url:'https://celltherapy.mohw.gov.tw/'}},
        {item:'好發族群年齡層',desc:'299件為第四期實體癌免疫細胞治療：自體免疫細胞治療用於第四期實體癌的核准件數最多，其次為一至三期實體癌98件、退化性關節炎及膝關節軟骨缺損（脂肪幹細胞）80件。',tag:'官方統計',source:{name:'衛生福利部：再生醫療技術資訊專區',url:'https://celltherapy.mohw.gov.tw/'}},
        {item:'政策動向',desc:'最高罰2千萬元：再生醫療法於113年6月4日三讀通過、115年1月1日施行，加重非醫療機構執行再生醫療或刊登廣告的處罰，並可沒入設備與製劑。',tag:'官方統計',source:{name:'衛生福利部：立法院三讀通過再生醫療法',url:'https://mohw.gov.tw/cp-6650-78933-1.html'}},
        {item:'年度趨勢方向',desc:'不得一次預繳全部費用：依再生醫療技術及指定製劑管理辦法，收費基準須經地方主管機關核定、應分階段收費，執行前須告知費用、替代治療與救濟措施並取得同意。',tag:'官方統計',source:{name:'全國法規資料庫：再生醫療技術及指定製劑管理辦法',url:'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0020250'}}
      ],
      product_view:['機會：細胞治療多為自費，可說明自費醫療費用與醫療保障的關係，並引導保戶確認保單條款對自費項目的定義。','機會：提供「查核准名單」的工具式內容，建立可信任的健康資訊角色。','風險：不可暗示細胞治療保證有效或特定商品可給付所有再生醫療費用。'],
      marketing_view:['機會：坊間「幹細胞」「外泌體」廣告多，以「怎麼分辨合法」做識讀內容有需求。','機會：可與癌症治療、退化性關節炎主題串連。','風險：避免使用「重生」「逆齡」等誇大字眼，以免觸及醫療廣告規範。'],
      alert_level:'medium',
      alert_reason:'再生醫療法115年剛施行，子法與核准件數持續變動，違法廣告查處也持續進行，宜定期更新核准統計。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('全國累計核准521件再生醫療技術計畫','DATA_FACTUAL_ACCURACY','scope_condition_missing',
          '官方備註此統計包含已終止的計畫與醫療機構，文中未說明，讀者可能以為目前有521件在執行。','medium','no',
          null,'no','clarify','數字正確，需補口徑。',
          '全國累計核准521件再生醫療技術計畫（含已終止計畫）',
          ['衛福部累計核准521件計畫']),
        F('這些治療目前多為自費','LEGAL_COMPLIANCE','missing_cost_info',
          '未提醒依規定收費基準須經地方主管機關核定並分階段收費，讀者無從判斷收費是否合理。','low','no',
          null,'no','clarify','收費規定在表格中已有說明。',
          '這些治療目前多為自費，收費基準須經地方衛生局核定'),
        F('取代過去以「特管辦法」管理細胞治療的方式','TERMINOLOGY_LANGUAGE','jargon_unexplained',
          '「特管辦法」是簡稱，一般讀者不知道指的是「特定醫療技術檢查檢驗醫療儀器施行或使用管理辦法」。','low','no',
          null,'no','clarify','屬用語說明。',
          '取代過去以「特定醫療技術檢查檢驗醫療儀器施行或使用管理辦法」（特管辦法）管理細胞治療的方式'),
        F('用在退化性關節炎、膝蓋軟骨受損、傷口很難好的人','MEDICAL_INTERPRETATION','indication_oversimplified',
          '各技術有明確的適應症條件（如困難傷口須為慢性或滿六週未癒合），白話寫法可能讓讀者以為一般傷口也適用。','low','no',
          null,'no','clarify','簡化寫法需保留條件。',
          '用在退化性關節炎、膝蓋軟骨受損，或超過六週還沒癒合的困難傷口')
      ],
      card:[
        F('累計核准再生醫療技術計畫','DATA_FACTUAL_ACCURACY','scope_condition_missing',
          '主數字含已終止計畫，卡面雖在圖表註記，但主數字標籤未說明。','low','no',
          null,'no','clarify','屬口徑說明。',
          '累計核准計畫（含已終止）'),
        F('非醫療機構違法最高罰','LEGAL_COMPLIANCE','scope_condition_missing',
          '2 千萬元為非醫療機構執行再生醫療或刊登廣告的最高罰鍰，卡面標籤簡化後讀者難以理解是哪種違法行為。','low','no',
          null,'no','clarify','可補行為類型。',
          '非醫療機構執行或廣告最高罰')
      ]
    },
    title_alts:[
      '細胞治療可以做了嗎？再生醫療法上路後的制度重點',
      '聽說細胞治療很神？先搞懂再生醫療的5個規定',
      '累計核准521件：再生醫療法上路，細胞治療前先查這些'
    ],
    card_title_alts:[
      ['再生醫療法上路','細胞治療前先查這些'],
      ['細胞治療要自費','先查核准、問清費用'],
      ['累計核准 521 件','再生醫療怎麼分辨合法']
    ],
    data_addon:[
      '核准項目共6類技術：自體CD34+周邊血幹細胞、自體免疫細胞、自體脂肪幹細胞、自體纖維母細胞、自體骨髓間質幹細胞、自體軟骨細胞。',
      '依區域分，中區核准159件、臺北157件，為件數最多的兩區（統計至2026年9月30日）。',
      '再生醫療法全文共35條、七章。'
    ],
    cta:'看到細胞治療或幹細胞廣告時，先到衛福部再生醫療技術資訊專區查核准名單，再帶著費用與風險的問題和醫師討論。'
  });
})();
