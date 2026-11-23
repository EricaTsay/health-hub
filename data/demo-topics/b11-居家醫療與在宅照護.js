/* v6 示範主題：居家醫療與在宅照護（B11 第二輪新主題）
   查證日期：2026-11-23。數據來源：衛福部新聞稿（健保署：在宅急症照護與OPAT，115-04-04；中區在宅急症照護，114-07-23；IoT在宅急症照護，114-03-21）、健保署居家醫療照護整合計畫公告。
   參考方向：判定清單第475列（居家醫療照護整合計畫文章）。只取架構，數據重新查證。
   限制：健保署居家醫療整合計畫全國收案統計表（PDF）無法讀取，故未寫全國收案人數。 */
(function(){
  const REFS = [
    {title:'回家也能安心治療！健保署延長門診靜脈抗生素療程天數 再推在宅急症計畫提早出院模式',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-86031-1.html'},
    {title:'健保推IoT(遠端監測)助攻 在宅急症照護 民眾更安心',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-81966-1.html'},
    {title:'醫療送到家 健保在宅急症照護 實現在地安養',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-83182-1.html'},
    {title:'全民健康保險居家醫療照護整合計畫',source:'衛生福利部中央健康保險署',url:'https://www.nhi.gov.tw/ch/dl-97261-79b0cabda1f048a392abf673675ed463-1.pdf'}
  ];
  const TABLE = {headers:['健保居家相關服務','適合誰'], rows:[
    ['居家醫療','住在家中、有明確醫療需求，且因失能（巴氏量表小於60分）或疾病特性外出就醫不便'],
    ['重度居家醫療','另符合居家照護收案條件，例如需管路照護或使用呼吸器'],
    ['居家安寧療護','另符合安寧居家療護收案條件的末期病人'],
    ['在宅急症照護','經醫師診斷為肺炎、尿路感染、軟組織感染需住院者，可選擇在家或機構治療（113年7月起試辦）'],
    ['門診靜脈抗生素（OPAT）','需打點滴抗生素但可回家者，每次療程上限由5天延長為7天（115年3月26日會議通過）']
  ]};
  const TAGS = ['居家醫療','在宅急症照護','長照銜接','失能照護','健保制度'];

  const DP_ACAH = {id:'dp-acah-count', type:'data_scope', title:'在宅急症照護人數口徑不同',
    desc:'衛福部115年4月新聞稿寫試辦計畫自113年7月至114年底「累計服務5,949人次」，是全國人次；114年7月中區新聞稿寫「共照護769位民眾」，只是中彰投地區人數。兩者範圍與單位不同，AI 採用全國人次。',
    current:'全國累計服務5,949人次（113年7月至114年底）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'5,949人次', value:'全國・人次', note:'衛福部115-04-04新聞稿（目前採用）'},
      {label:'769人', value:'中彰投・人數', note:'衛福部114-07-23新聞稿（健保署中區業務組）'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'醫師到家看診：健保居家醫療與在宅急症照護怎麼申請',
    update_date:'2026/11/23',
    intro:'行動不便的長輩每次就醫都要家人請假、叫車、排隊，健保的「居家醫療照護整合計畫」讓醫師、護理師到家服務，依病情分為居家醫療、重度居家醫療與居家安寧三個階段。113年7月起，健保再試辦「在宅急症照護」，肺炎、尿路感染、軟組織感染需要住院的病人可以在家或機構接受治療；依衛福部資料，截至114年底累計服務5,949人次。',
    sections:[
      {heading:'健保居家相關服務一覽',format:'table',table:TABLE},
      {heading:'怎麼申請',format:'bullets',items:[
        '可由出院準備服務、長照照管專員或原就醫院所轉介，也可直接洽詢有參與計畫的院所。',
        '院所名單可在健保署全球資訊網「居家醫療照護整合特約醫事機構查詢」查詢。',
        '收案時由團隊評估巴氏量表（ADL）與醫療需求；單純因家人沒空接送不符合條件。'
      ]},
      {heading:'與長照、安寧怎麼銜接',format:'bullets',items:[
        '居家醫療負責看診、開藥、檢驗與管路照護，生活照顧與喘息服務則由長照提供。',
        '病情進入末期時，可由同一團隊轉入居家安寧療護階段。',
        '115年3月起在宅急症照護新增「提早出院模式」，病情穩定的住院感染症患者可回家繼續打抗生素，健保署估計可受益1,200人次。'
      ]}
    ],
    think_tank_view:'居家醫療把「去醫院」變成「醫院來家裡」，對失能長輩與照顧者都是實質減輕負擔。家中有人臥床或行動不便時，可以在出院前就請出院準備小組評估是否轉介，並同步申請長照服務，讓醫療與照顧一起到位。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'服務內容與人數引自衛福部與健保署公開資料並標明日期，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['在宅急症照護累計5,949人次、提早出院模式估計1,200人次取自衛福部115-04-04新聞稿','收案條件取自健保署居家醫療照護整合計畫公告'],
      layout_reason:'先用表格列出各類居家服務與適用對象，再說明申請方式與長照銜接。',
      tone:'專業易懂', tone_reason:'制度與申請流程需要清楚具體。',
      to_verify:['居家醫療整合計畫全國收案人數（健保署統計表）','提早出院模式實際上路日期']},
    decision_points:[DP_ACAH]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽臥床不方便出門？請醫師到家看診的方法',
    update_date:'2026/11/23',
    intro:'家裡長輩臥床或行動不便，每次看病都是全家總動員。其實健保有「居家醫療」，醫師和護理師可以到家看診、開藥、換管路。113年7月起還有「在宅急症照護」，像肺炎、尿路感染這類需要住院的情況，也能在家打抗生素治療，到114年底已經服務5,949人次。',
    sections:[
      {heading:'有哪些服務可以用？',format:'table',table:TABLE},
      {heading:'要怎麼申請？',format:'bullets',items:[
        '住院時問出院準備小組，或請長照個管師、原本看的醫院幫忙轉介。',
        '上健保署網站查「居家醫療照護整合特約醫事機構」，找住家附近的團隊。',
        '團隊會評估長輩的活動能力；只是家人沒空載去看病，不符合資格。'
      ]},
      {heading:'和長照怎麼配合？',format:'bullets',items:[
        '居家醫療負責「看病」，洗澡、陪伴、喘息服務找長照。',
        '病情走到末期，同一個團隊可以接著做居家安寧。',
        '住院中病情穩定的感染病人，也可以提早回家繼續打點滴。'
      ]}
    ],
    think_tank_view:'照顧臥床長輩很辛苦，醫療到家能省下很多奔波。出院前先問一句「可以轉居家醫療嗎？」，再搭配長照服務，照顧者也能喘口氣。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部公開資料並標明日期，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以照顧臥床長輩的情境帶出服務、申請與長照銜接。', tone:'生活親切', tone_reason:'給照顧者與子女閱讀。', to_verify:['居家醫療全國收案人數']},
    decision_points:[DP_ACAH]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'居家醫療與在宅急症照護：申請重點',
    update_date:'2026/11/23',
    intro:'失能或外出就醫不便者可申請健保居家醫療。在宅急症照護自113年7月試辦，至114年底累計服務5,949人次。',
    sections:[
      {heading:'服務類型',format:'table',table:TABLE},
      {heading:'申請',format:'bullets',items:[
        '出院準備小組、長照個管師或院所轉介。',
        '健保署網站可查參與院所。'
      ]},
      {heading:'銜接',format:'bullets',items:[
        '醫療找居家醫療，生活照顧找長照。',
        '末期可轉居家安寧。'
      ]}
    ],
    think_tank_view:'出院前先評估居家醫療，醫療與長照一起到位。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部公開資料並標明日期，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為服務類型、申請、銜接三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['居家醫療全國收案人數']},
    decision_points:[DP_ACAH]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'居家醫療與在宅照護', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'行動不便可申請醫師到家看診', primary_visual:'5,949 人次', secondary_message:'肺炎等急症也能在家治療', action_priority:'出院前問轉介'},
    headline_hook:'長輩出門看病不方便？', headline_main:'健保居家醫療這樣申請', title_accent:'這樣申請',
    hero_message:'醫療送到家', hero_support:'在宅急症照護累計 5,949 人次（113.7–114 年底）',
    primary_stat:{value:'5,949 人次', label:'在宅急症照護累計服務', note:'衛福部 115 年 4 月新聞稿'},
    action_title:'申請 4 步驟',
    action_cards:[
      {key:'評', text:'確認失能或疾病致外出就醫不便'},
      {key:'轉', text:'請出院準備小組或長照個管師轉介'},
      {key:'查', text:'健保署網站查居家醫療參與院所'},
      {key:'接', text:'生活照顧同步申請長照服務'}
    ],
    notice:'單純因家人**沒空接送**，不符合居家醫療收案條件。',
    carousel_suggestion:{reason:'若想把服務類型、申請流程與急症照護分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'居家醫療 3 階段', headline_main:'看診、重度照護、安寧'},
      {layout_type:'action', headline_hook:'怎麼申請', headline_main:'出院前先問轉介'},
      {layout_type:'data', headline_hook:'在宅急症照護', headline_main:'肺炎也能在家治療'}]},
    hashtags:['居家醫療','在宅急症照護','長照銜接','失能照護'],
    sources:['衛生福利部','衛生福利部中央健康保險署'],
    illustration_category:'elderly-care',
    illustration:{topic:'居家醫療', audience:'失能長輩與照顧者', scene:'醫師與護理師提著醫療包到家中，為坐在床邊的長輩量血壓，家屬在旁陪伴',
      emotion:'安心、溫暖', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A doctor and nurse with a medical bag visiting a home, measuring blood pressure of an older adult sitting on a bed while a family member stays beside, warm and reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['在宅急症照護累計5,949人次取自衛福部115-04-04新聞稿','收案條件取自健保署居家醫療照護整合計畫'],
      layout_reason:'核心是「怎麼申請」，選 action：插圖放大，4 個申請步驟當主角，資格提醒放在下方。',
      tone:'生活親切', tone_reason:'對象是照顧者，需要可直接照做。',
      to_verify:['居家醫療全國收案人數未查得']},
    decision_points:[Object.assign({}, DP_ACAH, {current:'5,949 人次｜全國累計（113.7–114 年底）'})],
    content_check_note:'數據引自衛福部並標明日期，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'居家醫療與在宅照護',
    collect:{
      summary:'健保居家醫療照護整合計畫讓失能或外出就醫不便者在家接受醫療，並分居家醫療、重度居家醫療與居家安寧三階段；113年7月起試辦在宅急症照護，115年再新增提早出院模式並延長門診靜脈抗生素療程，居家醫療與長照、安寧的銜接是高齡社會的長期議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'在宅急症照護累計5949人次：在宅急症照護試辦計畫自113年7月推動至114年底，全國累計服務5,949人次，收案對象為需住院的肺炎、尿路感染與軟組織感染病人。',tag:'官方統計',source:{name:'衛生福利部：健保署延長OPAT療程天數 再推在宅急症提早出院模式',url:'https://mohw.gov.tw/cp-16-86031-1.html'}},
        {item:'政策動向',desc:'約1200人次受益：115年3月26日健保支付標準共同擬訂會議通過在宅急症照護新增「提早出院模式」，讓病情穩定的失能或就醫不便住院感染症患者回家或機構繼續靜脈抗生素治療。',tag:'推估',source:{name:'衛生福利部：健保署延長OPAT療程天數 再推在宅急症提早出院模式',url:'https://mohw.gov.tw/cp-16-86031-1.html'}},
        {item:'年度趨勢方向',desc:'5710名病人使用門診靜脈抗生素：OPAT自114年8月推動，至115年2月共210家院所、8,107個治療計畫，115年起每次療程上限由5天延長為7天。',tag:'官方統計',source:{name:'衛生福利部：健保署延長OPAT療程天數 再推在宅急症提早出院模式',url:'https://mohw.gov.tw/cp-16-86031-1.html'}},
        {item:'好發族群年齡層',desc:'巴氏量表小於60分為失能收案條件：居家醫療收案對象須住在家中、有明確醫療需求，且因失能或疾病特性外出就醫不便，單純因照顧者沒空接送者不符合。',tag:'官方統計',source:{name:'健保署：全民健康保險居家醫療照護整合計畫',url:'https://www.nhi.gov.tw/ch/dl-97261-79b0cabda1f048a392abf673675ed463-1.pdf'}}
      ],
      product_view:['機會：居家醫療解決的是「就醫」，失能後的生活照顧與看護仍是家庭負擔，可說明失能與長照保障的必要性。','機會：提供「出院前要問的事」清單，作為保戶住院理賠時的關懷內容。','風險：不可暗示保險可取代健保或長照服務；收案條件以健保署公告為準。'],
      marketing_view:['機會：照顧者（多為中年子女）是主要受眾，以「不用再請假帶爸媽看病」切入有共鳴。','機會：可與長照、安寧緩和療護、失智症主題串連成照顧系列。','風險：避免讓人以為所有長輩都能申請，需說明失能條件。'],
      alert_level:'low',
      alert_reason:'屬長期健保制度，115年有提早出院模式等擴充，無急迫時效事件；適合與長照、出院準備主題一併溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('截至114年底累計服務5,949人次','DATA_FACTUAL_ACCURACY','unit_ambiguity',
          '「人次」會重複計算同一病人多次收案，讀者容易理解為5,949人；文中未說明單位差異。','low','no',
          null,'no','clarify','數字正確，需補單位說明。',
          '截至114年底累計服務5,949人次（同一人可能多次收案）',
          ['已經服務5,949人次']),
        F('健保署估計可受益1,200人次','SOURCE_EVIDENCE','estimate_as_fact',
          '此為新制通過時的預估值，文中雖寫「估計」，但未說明是年度預估或計畫期間預估。','low','no',
          null,'no','clarify','新聞稿未說明估計期間。',
          '健保署於115年3月新制通過時估計可受益1,200人次'),
        F('醫師、護理師到家服務','MEDICAL_INTERPRETATION','overgeneralization',
          '居家醫療團隊也包含藥師、呼吸治療師等，且到訪頻率依病情與計畫規定，此句可能讓讀者以為可隨時要求到府。','low','no',
          null,'no','clarify','屬用語精確度問題。',
          '醫師、護理師等團隊依病情定期到家服務'),
        F('可以在出院前就請出院準備小組評估是否轉介','LEGAL_COMPLIANCE','scope_condition_missing',
          '是否收案由居家醫療團隊依條件評估決定，出院準備小組只能轉介，文中可補充以免讀者誤以為轉介即收案。','low','no',
          null,'no','clarify','流程說明補充。',
          '可以在出院前就請出院準備小組評估並轉介，再由居家醫療團隊確認是否符合收案條件')
      ],
      card:[
        F('在宅急症照護累計服務','DATA_FACTUAL_ACCURACY','unit_ambiguity',
          '主數字為人次，卡面未說明同一人可能重複計算。','low','no',
          null,'no','clarify','屬單位說明。',
          '在宅急症照護累計服務人次'),
        F('確認失能或疾病致外出就醫不便','MEDICAL_INTERPRETATION','scope_condition_missing',
          '卡面未說明失能判定標準（巴氏量表小於60分）與須有明確醫療需求，讀者難以自行判斷。','low','no',
          null,'no','clarify','條件需補充。',
          '失能（巴氏量表<60）或疾病致外出就醫不便')
      ]
    },
    title_alts:[
      '醫師到家看診：健保居家醫療與在宅急症照護怎麼申請',
      '爸媽臥床不方便出門？請醫師到家看診的方法',
      '肺炎也能在家治療：居家醫療3階段與在宅急症照護一次看'
    ],
    card_title_alts:[
      ['長輩出門看病不方便？','健保居家醫療這樣申請'],
      ['醫療送到家','居家醫療 4 步驟'],
      ['肺炎也能在家治療','在宅急症照護重點']
    ],
    data_addon:[
      '在宅急症照護團隊由醫師、護理師、藥師及呼吸治療師組成，可結合遠端監測。',
      '中彰投地區有42個在宅急症照護團隊、253家院所（衛福部114年7月新聞稿）。',
      '115年起門診靜脈抗生素每次療程上限由5天延長為7天。'
    ],
    cta:'家中長輩住院時，出院前主動問出院準備小組：「符合居家醫療或在宅急症照護嗎？」並同步聯絡長照1966。'
  });
})();
