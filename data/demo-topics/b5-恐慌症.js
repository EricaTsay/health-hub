/* v6 示範主題：恐慌症（B5 心理健康與精神疾患）
   查證日期：2026-11-20。數據來源：TVBS健康2.0 2026-03-13（台南市立安南醫院團隊健保資料庫研究，Journal of Affective Disorders）、
   NOWnews 2025-07-24（台北市立聯合醫院忠孝院區精神科醫師受訪）、衛福部 115-01-08 青壯世代心理健康支持方案新聞稿。
   查無國內官方恐慌症盛行率統計。
   參考方向：健康智庫〈心悸又恐懼？可能是恐慌症！〉2025/08。 */
(function(){
  const TV = 'https://health.tvbs.com.tw/medical/361606';
  const NN = 'https://www.nownews.com/news/6710991';
  const REFS = [
    {title:'恐慌症發作憂不長命？研究發現恰好相反 因禍得福遠離心血管疾病風險',source:'TVBS健康2.0',url:TV},
    {title:'害怕搭車、無法工作！恐慌症發作如臨死 醫師曝症狀、教判斷方式',source:'NOWnews今日新聞',url:NN},
    {title:'健康「心」生活！115年續推青壯世代心理健康支持方案',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-85046-1.html'},
    {title:'安心專線改4碼更好記! 1925依舊愛我 持續服務你和我',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48244-1.html'}
  ];
  const TABLE = {headers:['發作時常見感受','說明'], rows:[
    ['心跳加速、胸悶','心悸、胸口緊，常以為是心臟病發作'],
    ['呼吸困難','覺得吸不到氣、喘不過來，手腳發麻'],
    ['頭暈、冒冷汗','頭重腳輕、發抖、冒汗'],
    ['強烈恐懼','覺得快要失控、快要死掉，常在毫無預警下發生']
  ]};
  const TAGS = ['恐慌症','焦慮','心悸胸悶','心理健康','認知行為治療'];

  const DP_HEART = {id:'dp-pd-heart', type:'context', title:'「胸悶不一定是心臟病」的說法',
    desc:'恐慌發作與心臟病症狀相似。文章強調恐慌症可能被誤以為心臟病，但若讀者因此忽略真正的心臟急症風險，後果嚴重。AI 已在文中保留「先排除身體疾病、胸痛撥119」的提醒，是否再加強由你決定。',
    current:'保留「先由醫師排除心臟等身體疾病」提醒',
    options:[{label:'沿用目前寫法', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'恐慌症：突然心悸、喘不過氣、覺得快死掉，可能不是心臟病',
    update_date:'2026/11/20',
    intro:'恐慌症是一種焦慮疾患，患者會在毫無預警下反覆出現強烈恐慌發作，伴隨心悸、胸悶、呼吸困難、頭暈、冒冷汗，常被誤以為心臟病而反覆跑急診。台南市立安南醫院團隊2026年發表的健保資料庫研究，追蹤17萬6,803名新診斷的成年恐慌症患者長達11年，副院長指出恐慌症並非不可逆的疾病，多數患者經治療後症狀可以明顯改善。',
    sections:[
      {heading:'恐慌發作時的常見感受',format:'table',table:TABLE},
      {heading:'先排除身體疾病，再找身心科',format:'bullets',items:[
        '第一次出現胸痛、胸悶、呼吸困難時，應先就醫排除心臟、肺部等身體疾病；出現疑似心肌梗塞或中風警訊，請立即撥打119。',
        '若反覆心悸、氣促、頭暈，一般檢查卻無異常，醫師建議考慮到精神科或身心科評估。',
        '治療包括藥物（如選擇性血清素再吸收抑制劑等）、認知行為治療、衛教與團體支持，醫師指出正確診斷與治療通常在數週至數月內能大幅改善。'
      ]},
      {heading:'發作時與平常可以這樣做',format:'bullets',items:[
        '發作時提醒自己「這是恐慌發作，會過去」，放慢呼吸，找安全的地方坐下。',
        '規律作息、減少咖啡因與酒精，學習壓力調適與放鬆技巧。',
        '15至45歲可使用衛福部3次免費心理諮商；需要傾訴時可撥24小時免付費的1925安心專線。'
      ]}
    ],
    think_tank_view:'恐慌症最辛苦的，是「下一次不知道什麼時候來」的預期焦慮，讓人開始不敢搭車、不敢出門。先排除身體疾病，再勇敢面對心理層面的原因，恐慌症是可以治療、可以改善的。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'研究數字標明出處與期刊，治療說明標明醫師身分，保留排除身體疾病與119提醒，附求助專線，未使用療效保證用語，未涉及具體藥品品牌或商品。',
    ai_rationale:{basis:['健保資料庫研究追蹤17萬6,803名恐慌症患者（安南醫院團隊2026年，TVBS報導）','治療與預後取自北市聯醫精神科醫師受訪'],
      layout_reason:'先用表格讓讀者對照發作感受，再強調先排除身體疾病、後找身心科，最後給發作時與平常的做法。',
      tone:'專業易懂', tone_reason:'需同時降低恐慌、又不能讓讀者忽略心臟急症。',
      to_verify:['研究原文標題與發表年份（報導僅寫2月發表）','查無國內恐慌症盛行率官方統計']},
    decision_points:[DP_HEART]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'心跳好快、喘不過氣、覺得快死掉？認識恐慌症',
    update_date:'2026/11/20',
    intro:'明明好好的，心臟突然狂跳、胸口很悶、吸不到氣，還覺得自己快要死掉？很多人第一次發作都以為是心臟病，跑了好幾次急診卻查不出問題。這可能是恐慌症。好消息是，醫師說恐慌症不是會一直惡化的病，大多數人治療後都能明顯改善。',
    sections:[
      {heading:'恐慌發作時，可能會這樣',format:'table',table:TABLE},
      {heading:'先確認身體，再找身心科',format:'bullets',items:[
        '第一次胸痛、喘不過氣，先去看醫生排除心臟、肺的問題；真的很不舒服就打119。',
        '如果一直反覆發作，檢查又都正常，可以去身心科或精神科聊聊。',
        '治療會用藥物、認知行為治療等方式，醫師說通常幾週到幾個月就能改善很多。'
      ]},
      {heading:'發作時、平常可以這樣做',format:'bullets',items:[
        '告訴自己「這是恐慌發作，會過去的」，慢慢呼吸，找個地方坐下來。',
        '睡飽、少喝咖啡和酒，學一些放鬆的方法。',
        '15到45歲有3次免費心理諮商；想找人說說話，打1925安心專線。'
      ]}
    ],
    think_tank_view:'恐慌症很可怕，但不危險、也不是你太脆弱。先讓醫生確認身體沒事，再一起找出讓你緊張的原因，生活就能慢慢回到正軌。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'醫師說法標明身分，保留就醫排除與119提醒，語氣親切，附求助專線，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以第一次發作的情境帶出症狀、就醫順序與自我照顧。', tone:'生活親切', tone_reason:'降低恐懼，鼓勵就醫。', to_verify:['研究發表年份']},
    decision_points:[DP_HEART]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'恐慌症：心悸胸悶查不出原因？先排除再求助',
    update_date:'2026/11/20',
    intro:'恐慌症會突然出現心悸、胸悶、呼吸困難與強烈恐懼，常被誤以為心臟病。醫師指出，正確診斷與治療後多能明顯改善。',
    sections:[
      {heading:'發作感受',format:'table',table:TABLE},
      {heading:'就醫順序',format:'bullets',items:[
        '先排除心臟、肺部疾病；急症撥119。',
        '檢查正常仍反覆發作，看身心科。',
        '藥物與認知行為治療。'
      ]},
      {heading:'自我照顧',format:'bullets',items:[
        '發作時放慢呼吸、坐下。',
        '需要傾訴撥1925。'
      ]}
    ],
    think_tank_view:'恐慌症可以治療；先排除身體疾病，再找身心科，多數人能明顯改善。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'保留就醫排除提醒，附求助專線，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為感受、就醫、照顧三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_HEART]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'恐慌症', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'恐慌症可以治療、可以改善', primary_visual:'17.7 萬人', secondary_message:'先排除身體疾病，再找身心科', action_priority:'辨識發作、就醫、求助'},
    headline_hook:'心悸胸悶查不出原因？', headline_main:'恐慌症求助 4 步驟', title_accent:'4 步驟',
    hero_message:'很可怕，但不危險', hero_support:'恐慌發作會過去，正確治療多能明顯改善',
    primary_stat:{value:'17.7 萬人', label:'健保資料庫研究追蹤的新診斷恐慌症成人', note:'安南醫院團隊研究，追蹤 11 年'},
    action_title:'這樣開始',
    action_cards:[
      {key:'排', text:'先就醫排除心臟、肺部疾病'},
      {key:'醫', text:'檢查正常仍反覆發作，看身心科'},
      {key:'息', text:'發作時放慢呼吸、找地方坐下'},
      {key:'援', text:'需要傾訴，撥 1925 安心專線'}
    ],
    notice:'胸痛、冒冷汗合併呼吸困難，**請先撥打 119**。',
    carousel_suggestion:{reason:'若想把症狀、就醫順序與治療分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'不是心臟病？', headline_main:'恐慌發作 4 種感受'},
      {layout_type:'action', headline_hook:'就醫順序', headline_main:'先排除，再找身心科'},
      {layout_type:'action', headline_hook:'發作時', headline_main:'這樣陪自己度過'}]},
    hashtags:['恐慌症','焦慮','心悸胸悶','心理健康'],
    sources:['台南市立安南醫院（媒體報導研究）','台北市立聯合醫院（媒體受訪）'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'恐慌症', audience:'20 至 50 歲上班族', scene:'一位上班族坐在公園長椅上閉眼慢慢深呼吸，一手放在胸口，神情逐漸放鬆',
      emotion:'從緊張到平靜', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker sitting on a park bench with eyes closed taking slow deep breaths, one hand on the chest, gradually relaxing, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['健保資料庫研究追蹤17萬6,803名恐慌症患者（2026年報導）'],
      layout_reason:'選 action：4 個求助步驟當主角，研究規模放下方，以 119 提醒收尾。',
      tone:'專業易懂', tone_reason:'降低恐懼，同時保留急症提醒。',
      to_verify:['研究原文標題與年份']},
    decision_points:[DP_HEART],
    content_check_note:'研究數字標明出處，保留119提醒，附求助專線，未使用療效保證用語，未涉及具體藥品或商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'恐慌症',
    collect:{
      summary:'恐慌症常以心悸、胸悶、呼吸困難表現，患者反覆跑急診卻查不出原因；2026年國內健保資料庫研究追蹤逾17萬名患者，醫師強調恐慌症可治療，「先排除身體疾病、再找身心科」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約17.7萬名新診斷成年恐慌症患者：台南市立安南醫院團隊以健保資料庫追蹤17萬6,803人長達11年，2026年發表於Journal of Affective Disorders（查無國內官方盛行率統計）。',tag:'市場觀察',source:{name:'TVBS健康2.0：恐慌症發作憂不長命？研究發現恰好相反',url:TV}},
        {item:'年度趨勢方向',desc:'恐慌症並非不可逆的疾病：同一研究團隊副院長指出，多數患者症狀可明顯改善，患者因頻繁就醫反而能及早發現高血壓、心臟病等問題。',tag:'市場觀察',source:{name:'TVBS健康2.0：恐慌症發作憂不長命？研究發現恰好相反',url:TV}},
        {item:'政策動向',desc:'15至45歲每人3次免費心理諮商：衛福部115年續推青壯世代心理健康支持方案，自113年8月至114年10月底已逾8萬人使用。',tag:'官方統計',source:{name:'衛生福利部：115年續推青壯世代心理健康支持方案',url:'https://www.mohw.gov.tw/cp-16-85046-1.html'}},
        {item:'好發族群年齡層',desc:'常被誤以為心臟病：北市聯醫精神科醫師2025年受訪指出，恐慌症患者常在毫無預警下出現心悸、胸悶、頭暈、手麻，反覆檢查無異常者應考慮身心科評估。',tag:'市場觀察',source:{name:'NOWnews：害怕搭車、無法工作！恐慌症發作如臨死',url:NN}}
      ],
      product_view:['機會：恐慌症患者常反覆就醫，可說明門診與急診醫療費用保障。','機會：結合員工心理健康支持與免費諮商資源，展現關懷。','風險：避免暗示胸悶「一定是恐慌症」而延誤心臟急症；精神疾病相關核保依條款說明。'],
      marketing_view:['機會：「心悸胸悶查不出原因」是許多上班族的共同經驗。','機會：可結合青壯世代免費心理諮商做行動導向內容。','風險：必須保留「先排除身體疾病、急症撥119」的提醒。'],
      alert_level:'low',
      alert_reason:'屬長期心理健康議題，無時效性政策事件；適合在年底壓力高峰或心理健康月溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('多數患者經治療後症狀可以明顯改善','MEDICAL_INTERPRETATION','unsupported_generalization',
          '已註明是副院長說法，但「多數」沒有附上比例或研究依據，讀者可能預期很快痊癒。','low','no',
          null,'no','soften','與臨床經驗相符，屬表達強度問題。',
          '許多患者經規律治療後症狀可以明顯改善',
          ['大多數人治療後都能明顯改善','正確診斷與治療後多能明顯改善']),
        F('追蹤17萬6,803名新診斷的成年恐慌症患者長達11年','SOURCE_EVIDENCE','study_detail_incomplete',
          '引用研究但未說明研究的主要發現（與心血管疾病及預期壽命的關係），讀者無法理解這組數字和文章重點的關係。','low','no',
          null,'no','clarify','補一句研究結論即可。',
          '追蹤17萬6,803名新診斷的成年恐慌症患者長達11年，發現合併心血管疾病對其預期壽命影響不大'),
        F('通常在數週至數月內能大幅改善','MEDICAL_INTERPRETATION','benefit_unqualified',
          '改善時間因人而異，文中語氣接近保證。','low','no',
          null,'no','soften','屬表達強度問題。',
          '許多人在數週至數月內能逐步改善',
          ['通常幾週到幾個月就能改善很多']),
        F('減少咖啡因與酒精','MEDICAL_INTERPRETATION','missing_rationale',
          '未說明原因（咖啡因可能誘發心悸、酒精影響睡眠與情緒），讀者不易重視。','low','no',
          null,'no','clarify','補一句理由即可。',
          '減少咖啡因與酒精（可能誘發心悸或影響睡眠）',
          ['少喝咖啡和酒'])
      ],
      card:[
        F('健保資料庫研究追蹤的新診斷恐慌症成人','MEDICAL_INTERPRETATION','number_without_context',
          '卡面只呈現研究人數，沒說明研究發現，讀者可能誤以為是全國患者總數。','medium','no',
          null,'no','clarify','屬口徑說明問題。',
          '健保資料庫研究追蹤人數（非全國患者總數）'),
        F('很可怕，但不危險','MEDICAL_INTERPRETATION','reassurance_without_caveat',
          '恐慌發作本身不危險，但讀者無法自行判斷是否為恐慌發作；主視覺語句缺少「先排除身體疾病」的條件。','low','no',
          null,'no','clarify','屬表達完整度問題。',
          '確診後：很可怕，但不危險')
      ]
    },
    title_alts:[
      '恐慌症：突然心悸、喘不過氣、覺得快死掉，可能不是心臟病',
      '心跳好快、喘不過氣、覺得快死掉？認識恐慌症',
      '心悸胸悶查不出原因？恐慌症的就醫順序與治療'
    ],
    card_title_alts:[
      ['心悸胸悶查不出原因？','恐慌症求助 4 步驟'],
      ['很可怕，但不危險','認識恐慌症'],
      ['先排除，再求助','恐慌症就醫順序']
    ],
    data_addon:[
      '研究由中國醫藥大學附設醫院住院醫師擔任第一作者，台南市立安南醫院身心介面研究與健康中心參與。',
      '醫師指出藥物治療可降低發作頻率與強度，常與心理治療並用。',
      '恐慌症可能與壓力、生活作息、遺傳體質等相關。'
    ],
    cta:'如果你反覆心悸、胸悶，檢查卻都正常，這個月就預約一次身心科門診；15至45歲可先查詢免費心理諮商名額。'
  });
})();
