/* v6 示範主題：成人預防保健服務（B11 第二輪新主題）
   查證日期：2026-11-23。數據來源：衛福部／國健署新聞稿〈成人預防保健服務下修至30歲 逾30萬青年受惠〉（114-12-18）、〈三十而立 小心別讓「三高」找上門〉（115-10-15）、國健署B、C型肝炎篩檢調整公告（114年8月1日起）。
   參考方向：判定清單第501列（成人健檢文章）。只取架構，數據重新查證。
   與既有主題「健檢報告解讀與追蹤」分工：本題講「服務怎麼用」，報告怎麼看留給該題。 */
(function(){
  const REFS = [
    {title:'成人預防保健服務下修至30歲 逾30萬青年受惠',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-84856-1.html'},
    {title:'三十而立 小心別讓「三高」找上門! 超馬選手陳彥博籲善用公費健檢掌握健康',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-88200-1.html'},
    {title:'自114年8月1日起調整成人預防保健服務B、C型肝炎篩檢年齡',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1115&pid=19288'}
  ];
  const TABLE = {headers:['年齡','公費成人健檢頻率'], rows:[
    ['30–39歲','每5年1次（114年1月1日起新增）'],
    ['40–64歲','每3年1次'],
    ['65歲以上','每年1次'],
    ['B、C型肝炎篩檢','民國75年（含）以前出生至79歲，終身1次；原住民提前至40歲（114年8月1日起）']
  ]};
  const TAGS = ['成人健檢','預防保健','三高','肝炎篩檢','國健署'];

  const DP_USE = {id:'dp-ahc-users', type:'data_scope', title:'使用人數有兩個時間點',
    desc:'國健署114年12月新聞稿寫「統計至114年11月逾30萬名30至39歲民眾使用」；115年10月新聞稿寫114年全年30至39歲約35.5萬人。兩者統計截止時間不同，AI 採用全年數字。',
    current:'114年30至39歲約35.5萬人使用（全年）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約35.5萬人', value:'114年全年', note:'衛福部115-10-15新聞稿（目前採用）'},
      {label:'逾30萬人', value:'統計至114年11月', note:'衛福部114-12-18新聞稿'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'公費成人健檢下修到30歲：誰能做、多久一次、查什麼',
    update_date:'2026/11/23',
    intro:'國民健康署的成人預防保健服務自114年1月1日起將年齡下修至30歲：30至39歲每5年1次、40至64歲每3年1次、65歲以上每年1次。114年全國30歲以上約265.7萬人使用，其中30至39歲約35.5萬人。檢查結果顯示，這群30世代約30.8%至少有一項三高指標異常，三高並不只是中老年人的問題。',
    sections:[
      {heading:'誰可以做、多久一次',format:'table',table:TABLE},
      {heading:'檢查哪些項目',format:'bullets',items:[
        '服務內容包含健康行為調查、身體檢查、抽血與尿液檢查，以及衛教諮詢。',
        '重點項目為血壓、血糖、血脂、腎功能、肝功能與身體質量指數（BMI）。',
        'B、C型肝炎篩檢免空腹抽血，符合資格者終身1次。'
      ]},
      {heading:'30世代的檢查結果',format:'bullets',items:[
        '114年30至39歲受檢者中，BMI過重或肥胖近5成，血脂異常近2成。',
        '代謝症候群超過1成9，血壓異常超過1成5，血糖異常約4.7%。',
        '全國約7千家醫療院所提供服務，可攜帶健保卡直接預約。'
      ]}
    ],
    think_tank_view:'公費健檢最大的價值是「定期」：三高在早期多半沒有症狀，等到不舒服才就醫往往已經累積多年。把健檢排進固定的時間表，拿到報告後依建議追蹤或調整生活習慣，才能真正發揮預防的效果。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'服務年齡、頻率與檢查結果引自國健署新聞稿並標明生效日期與年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['年齡與頻率、6大項目取自衛福部114-12-18新聞稿','114年使用人數與30世代異常比例取自衛福部115-10-15新聞稿'],
      layout_reason:'先用表格說明資格與頻率，再列檢查項目，最後用30世代檢查結果說明為何要做。',
      tone:'專業易懂', tone_reason:'資格與頻率需要精確。',
      to_verify:['原住民、小兒麻痺等族群的放寬條件（新聞稿未載明）']},
    decision_points:[DP_USE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'30歲就能免費健檢！成人預防保健怎麼用一次看',
    update_date:'2026/11/23',
    intro:'以前要40歲才有公費成人健檢，從114年1月1日開始，30歲就能做了：30到39歲每5年一次、40到64歲每3年一次、65歲以上每年一次。114年有約35.5萬名30世代去做，結果約3成至少有一項血壓、血糖或血脂異常。年輕不代表沒事，記得把握機會。',
    sections:[
      {heading:'我可以做嗎？',format:'table',table:TABLE},
      {heading:'會檢查什麼？',format:'bullets',items:[
        '問卷、量身高體重血壓、抽血驗尿，最後醫師會跟你說明結果。',
        '主要看血壓、血糖、血脂、腎功能、肝功能和BMI。',
        'B、C肝篩檢不用空腹，一輩子做一次。'
      ]},
      {heading:'30世代的真實狀況',format:'bullets',items:[
        '將近一半體重過重或肥胖。',
        '每5人約1人血脂異常。',
        '全台約7千家診所醫院可以做，帶健保卡預約就好。'
      ]}
    ],
    think_tank_view:'工作忙、覺得自己還年輕，最容易忽略健康。把公費健檢當成定期保養，拿到報告後有紅字就照醫師建議追蹤，比等到身體出狀況再處理輕鬆多了。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以30世代視角帶出資格、項目與檢查結果。', tone:'生活親切', tone_reason:'給年輕上班族閱讀。', to_verify:['特殊族群放寬條件']},
    decision_points:[DP_USE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'公費成人健檢：30歲起就能做',
    update_date:'2026/11/23',
    intro:'114年起成人預防保健下修至30歲。114年約265.7萬人使用，30世代約30.8%至少一項三高指標異常。',
    sections:[
      {heading:'資格與頻率',format:'table',table:TABLE},
      {heading:'項目',format:'bullets',items:[
        '血壓、血糖、血脂、腎功能、肝功能、BMI。',
        'B、C肝篩檢終身1次。'
      ]},
      {heading:'30世代結果',format:'bullets',items:[
        'BMI過重或肥胖近5成。',
        '血脂異常近2成。'
      ]}
    ],
    think_tank_view:'三高早期無症狀，定期健檢、依報告追蹤才有效。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為資格與頻率、項目、30世代結果三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['特殊族群放寬條件']},
    decision_points:[DP_USE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'成人預防保健服務', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'公費成人健檢下修到 30 歲', primary_visual:'30.8%', secondary_message:'30 世代約 3 成有三高指標異常', action_priority:'依年齡定期健檢'},
    headline_hook:'公費健檢下修到 30 歲', headline_main:'依年齡定期做健檢', title_accent:'定期做健檢',
    hero_message:'30 世代約 3 成', hero_support:'至少一項三高指標異常（114 年成健結果）',
    primary_stat:{value:'30.8%', label:'30–39 歲至少一項三高異常', note:'國健署 114 年成人預防保健結果'},
    action_title:'依年齡這樣做',
    action_cards:[
      {key:'30', text:'30–39 歲每 5 年 1 次'},
      {key:'40', text:'40–64 歲每 3 年 1 次'},
      {key:'65', text:'65 歲以上每年 1 次'},
      {key:'肝', text:'B、C 肝篩檢終身 1 次，免空腹'}
    ],
    notice:'報告有紅字，記得**依醫師建議回診追蹤**。',
    carousel_suggestion:{reason:'若想把資格、檢查項目與 30 世代結果分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'action', headline_hook:'誰可以做', headline_main:'30 歲起公費健檢'},
      {layout_type:'knowledge', headline_hook:'查什麼', headline_main:'6 大重點項目'},
      {layout_type:'data', headline_hook:'30 世代結果', headline_main:'約 3 成三高指標異常'}]},
    hashtags:['成人健檢','預防保健','三高','肝炎篩檢'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'成人健檢', audience:'30 歲以上成人', scene:'一位年輕上班族在診所量血壓，旁邊護理師拿著檢查單，背景有抽血區指示牌',
      emotion:'輕鬆、主動', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young office worker having blood pressure measured at a clinic, a nurse holding a checkup form, a blood-draw area sign in the background, relaxed and proactive mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['30.8%取自衛福部115-10-15新聞稿','年齡與頻率取自衛福部114-12-18新聞稿'],
      layout_reason:'核心是「依年齡去做」，選 action：插圖放大，依年齡分的頻率當 4 張行動卡。',
      tone:'專業易懂', tone_reason:'資格需要明確。',
      to_verify:['特殊族群放寬條件']},
    decision_points:[Object.assign({}, DP_USE, {current:'約 35.5 萬人｜114 年 30–39 歲使用'})],
    content_check_note:'數據引自國健署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'成人預防保健服務',
    collect:{
      summary:'國健署成人預防保健服務自114年1月1日起下修至30歲，30至39歲每5年1次；114年約265.7萬人使用，30世代受檢者約3成至少一項三高指標異常。B、C型肝炎篩檢也自114年8月1日起改為民國75年（含）以前出生者終身1次，是健康管理與保戶關懷的長期議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'114年約265.7萬人使用成健：114年全國30歲以上接受成人預防保健服務約265.7萬人，其中30至39歲約35.5萬人，占13.4%。',tag:'官方統計',source:{name:'衛生福利部：三十而立 小心別讓三高找上門',url:'https://www.mohw.gov.tw/cp-16-88200-1.html'}},
        {item:'好發族群年齡層',desc:'30.8%至少一項三高異常：114年30至39歲受檢者中，30.8%至少有一項血壓、血糖或血脂指標異常，BMI過重或肥胖近5成、血脂異常近2成。',tag:'官方統計',source:{name:'衛生福利部：三十而立 小心別讓三高找上門',url:'https://www.mohw.gov.tw/cp-16-88200-1.html'}},
        {item:'政策動向',desc:'30歲起每5年1次：成人預防保健服務自114年1月1日起下修至30歲，30至39歲每5年1次、40至64歲每3年1次、65歲以上每年1次，全國約7千家院所提供。',tag:'官方統計',source:{name:'衛生福利部：成人預防保健服務下修至30歲',url:'https://mohw.gov.tw/cp-16-84856-1.html'}},
        {item:'年度趨勢方向',desc:'B、C肝篩檢終身1次：自114年8月1日起，B、C型肝炎篩檢對象調整為民國75年（含）以前出生至79歲，原住民提前至40歲，免空腹抽血。',tag:'官方統計',source:{name:'國健署：調整成人預防保健服務B、C型肝炎篩檢年齡',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1115&pid=19288'}}
      ],
      product_view:['機會：公費健檢是低門檻的健康管理入口，可作為保戶關懷與健康促進活動的提醒內容。','機會：30世代三高異常比例高，可說明及早健康管理的重要性。','風險：不可將健檢結果與核保或保費連結暗示；避免把健檢包裝成商品附加服務。'],
      marketing_view:['機會：「30歲就能免費健檢」對年輕族群有新鮮感，適合社群推播。','機會：可與三高、脂肪肝、健檢報告解讀主題串連。','風險：異常比例數字容易被解讀為「年輕人都生病」，宜搭配行動建議。'],
      alert_level:'low',
      alert_reason:'屬長期公費服務，114年擴大年齡後持續推廣；無急迫時效事件，適合年度健康檢查提醒時溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('約30.8%至少有一項三高指標異常','DATA_FACTUAL_ACCURACY','sample_scope',
          '30.8%為「有來受檢的30世代」的結果，受檢者可能本身較在意健康或已有症狀，不能直接推論為所有30至39歲國人的盛行率。','medium','no',
          null,'no','clarify','數字正確，需補樣本範圍。',
          '受檢的30至39歲民眾中，約30.8%至少有一項三高指標異常'),
        F('三高並不只是中老年人的問題','MEDICAL_INTERPRETATION','causal_overreach',
          '異常指標不等於確診三高，此句可能讓讀者把「指標異常」理解為「罹患三高」。','low','no',
          null,'no','clarify','屬用語精確度問題。',
          '三高風險並不只出現在中老年人'),
        F('可攜帶健保卡直接預約','LEGAL_COMPLIANCE','scope_condition_missing',
          '是否符合資格需由院所查詢上次使用時間，未提醒讀者可先查詢資格，可能白跑一趟。','low','no',
          null,'no','clarify','流程補充。',
          '可攜帶健保卡預約，院所會先查詢是否符合本次資格',
          ['帶健保卡預約就好']),
        F('B、C肝篩檢不用空腹，一輩子做一次','TERMINOLOGY_LANGUAGE','scope_condition_missing',
          '未說明出生年次條件（民國75年含以前出生至79歲），讀者可能以為30歲以上都可做。','low','no',
          null,'no','clarify','條件在表格中已有說明。',
          'B、C肝篩檢不用空腹，民國75年以前出生的人一輩子做一次')
      ],
      card:[
        F('30–39 歲至少一項三高異常','DATA_FACTUAL_ACCURACY','sample_scope',
          '30.8% 為受檢者的結果，卡面未說明樣本範圍。','low','no',
          null,'no','clarify','屬口徑說明。',
          '受檢 30–39 歲者至少一項三高指標異常'),
        F('B、C 肝篩檢終身 1 次，免空腹','DATA_FACTUAL_ACCURACY','scope_condition_missing',
          '卡面未標出生年次條件，讀者可能以為所有年齡都可做。','low','no',
          null,'no','clarify','條件需補充。',
          '75 年前出生者 B、C 肝篩檢終身 1 次')
      ]
    },
    title_alts:[
      '公費成人健檢下修到30歲：誰能做、多久一次、查什麼',
      '30歲就能免費健檢！成人預防保健怎麼用一次看',
      '30世代約3成三高指標異常：公費成人健檢資格與項目'
    ],
    card_title_alts:[
      ['公費健檢下修到 30 歲','依年齡定期做健檢'],
      ['30 歲就能免費健檢','多久做一次一次看'],
      ['30 世代約 3 成異常','把握公費成人健檢']
    ],
    data_addon:[
      '2019–2023年國民營養健康調查，30至39歲高血脂18.7%、高血壓9.7%、高血糖2.5%。',
      '114年30至39歲受檢者中，代謝症候群超過1成9、血壓異常超過1成5。',
      '完成公費成健可獲得健康幣（國健署115年活動）。'
    ],
    cta:'打開健保快易通查一下上次健檢時間，符合資格就這個月預約公費成人健檢。'
  });
})();
