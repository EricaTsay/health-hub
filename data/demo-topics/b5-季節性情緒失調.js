/* v6 示範主題：季節性情緒失調（B5 心理健康與精神疾患）
   查證日期：2026-11-21。數據來源：台北醫學大學研究團隊光照治療統合分析（EBSCO 摘要報導，2026）、Cochrane 冬季憂鬱症第二代抗憂鬱藥回顧、
   美國皮膚癌基金會（日曬床不是有效療法）、衛福部 115-01-08 青壯世代心理健康支持方案新聞稿。查無國內季節性情緒失調盛行率統計。
   參考方向：健康智庫〈換季不只過敏：情緒波動與SAD〉2026/03、〈梅雨讓您SAD嗎？〉2022/06。 */
(function(){
  const TMU = 'https://www.ebsco.com/articles/psychology/b60b0659-c6e0-57ba-b211-2dd01a4fca29/researchers-from-taipei-medical-university-describe-findings-in-seasonal-affective-disorders-light-therapy-in-seasonal-affective-disorder-a-systematic-review-and-meta-analysis-of-randomized-controlled-and-crossover-trials/';
  const CO = 'https://www.cochrane.org/zh-hant/evidence/CD008591_second-generation-antidepressants-winter-depression';
  const SCF = 'https://www.skincancer.org/zh-TW/blog/spotlight-on-seasonal-depression-why-indoor-tanning-isnt-an-effective-treatment/';
  const REFS = [
    {title:'Light therapy in seasonal affective disorder: a systematic review and meta-analysis（台北醫學大學研究報導）',source:'EBSCO',url:TMU},
    {title:'第二代抗憂鬱藥用於冬季憂鬱症',source:'Cochrane',url:CO},
    {title:'Spotlight on seasonal depression: why indoor tanning isn\'t an effective treatment',source:'Skin Cancer Foundation',url:SCF},
    {title:'健康「心」生活！115年續推青壯世代心理健康支持方案',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-85046-1.html'},
    {title:'安心專線改4碼更好記! 1925依舊愛我 持續服務你和我',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48244-1.html'}
  ];
  const TABLE = {headers:['常見表現','說明'], rows:[
    ['季節性出現','每年同一季節（多為秋冬日照短時）情緒低落，季節過後好轉'],
    ['精力與睡眠','特別疲倦、想睡、起床困難'],
    ['食慾改變','特別想吃澱粉與甜食，體重增加'],
    ['興趣與社交','提不起勁、退縮，不想與人互動']
  ]};
  const TAGS = ['季節性情緒失調','冬季憂鬱','光照治療','心理健康','日照'];

  const DP_EVID = {id:'dp-sad-evid', type:'data_scope', title:'治療證據的強度',
    desc:'光照治療有多項臨床試驗支持（台北醫學大學2026年統合分析納入17項試驗）；Cochrane 回顧則認為第二代抗憂鬱藥用於冬季憂鬱的效果仍不明確。國內也查無季節性情緒失調盛行率統計。AI 沒有替你決定要不要在內容中說明證據強度。',
    current:'說明光照治療有研究支持，用藥由醫師評估',
    options:[{label:'沿用目前寫法', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'季節性情緒失調：天氣一變就低落？認識冬季憂鬱',
    update_date:'2026/11/21',
    intro:'季節性情緒失調（SAD）是一種與季節相關的憂鬱，常在秋冬日照變短時出現、春夏好轉，表現為情緒低落、嗜睡、想吃甜食與退縮。台北醫學大學研究團隊2026年發表的統合分析，納入17項隨機對照與交叉試驗評估光照治療的效果；國內目前查無季節性情緒失調的盛行率統計。若低落情緒影響生活，應與一般憂鬱症一樣尋求專業評估。',
    sections:[
      {heading:'季節性情緒失調的4個表現',format:'table',table:TABLE},
      {heading:'治療與自我照顧',format:'bullets',items:[
        '光照治療是常見的治療選項，有多項臨床試驗支持，使用的光療燈與時間應由醫師建議。',
        '用藥是否適合由醫師評估；Cochrane 回顧指出，第二代抗憂鬱藥用於冬季憂鬱的效果目前仍不明確。',
        '日曬床不是有效療法，反而增加皮膚癌風險。',
        '白天多到戶外接觸自然光、規律運動與作息，維持與人的互動。'
      ]},
      {heading:'何時該求助',format:'bullets',items:[
        '低落、疲倦持續兩週以上，影響工作、學業或人際。',
        '15至45歲可使用衛福部3次免費心理諮商；需要傾訴可撥24小時免付費的1925安心專線。',
        '若出現強烈無望感，請立即尋求專業協助。'
      ]}
    ],
    think_tank_view:'「天氣不好心情就差」很常見，但如果每年同一季節都明顯低落、連生活都受影響，就不只是心情問題。多曬太陽、動一動是好的開始，持續低落時則要尋求專業協助。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'研究與回顧標明出處，說明國內無盛行率統計，附求助專線，未使用療效保證用語，未推薦特定光療燈或商品。',
    ai_rationale:{basis:['台北醫學大學2026年光照治療統合分析（17項試驗）','Cochrane：第二代抗憂鬱藥用於冬季憂鬱效果不明'],
      layout_reason:'先用表格整理表現，再說明治療與自我照顧，最後列求助時機。',
      tone:'專業易懂', tone_reason:'區分一般「天氣影響心情」與需要求助的狀況。',
      to_verify:['查無國內盛行率統計','統合分析原文療效數字未取得']},
    decision_points:[DP_EVID]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'一到冬天就不想動、一直想睡？可能是季節性情緒失調',
    update_date:'2026/11/21',
    intro:'天氣變冷、天色變早暗，就覺得心情低落、一直想睡、特別想吃甜的？如果每年同一個季節都這樣，可能是季節性情緒失調。研究發現，照光治療對它有幫助，國內也有研究團隊在2026年整理了17項相關試驗。',
    sections:[
      {heading:'這4個變化，要留意',format:'table',table:TABLE},
      {heading:'可以怎麼照顧自己？',format:'bullets',items:[
        '白天多出門走走，讓眼睛接觸自然光。',
        '照光治療要用專門的光療燈，使用方式先問醫師。',
        '不要用日曬床，對心情沒幫助、還傷皮膚。',
        '規律運動、作息，多和朋友聯絡。'
      ]},
      {heading:'什麼時候找人幫忙？',format:'bullets',items:[
        '低落超過兩週，已經影響生活。',
        '15到45歲有3次免費心理諮商；想找人說話打1925安心專線。'
      ]}
    ],
    think_tank_view:'冬天心情差很正常，但如果每年都特別嚴重，別只是撐過去。多曬太陽、多動一動，也可以找專業的人聊聊。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'研究標明出處，語氣親切，附求助專線，未使用療效保證用語，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以冬天的生活感受帶出表現、照顧與求助。', tone:'生活親切', tone_reason:'降低求助門檻。', to_verify:[]},
    decision_points:[DP_EVID]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'季節性情緒失調：4個表現＋照顧方法',
    update_date:'2026/11/21',
    intro:'季節性情緒失調常在秋冬日照短時出現。光照治療有多項臨床試驗支持；日曬床不是有效療法。',
    sections:[
      {heading:'4個表現',format:'table',table:TABLE},
      {heading:'照顧',format:'bullets',items:[
        '白天接觸自然光、規律運動。',
        '光療由醫師建議。'
      ]},
      {heading:'求助',format:'bullets',items:[
        '低落超過兩週看身心科。',
        '1925安心專線。'
      ]}
    ],
    think_tank_view:'每年同季節明顯低落，就值得尋求專業評估。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'研究標明出處，附求助專線，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為表現、照顧、求助三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_EVID]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'季節性情緒失調', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'每年同季節低落，可能是季節性情緒失調', primary_visual:'17 項試驗', secondary_message:'光照治療有研究支持', action_priority:'接觸自然光、規律運動、求助'},
    headline_hook:'一到冬天就不想動？', headline_main:'季節性情緒失調 4 個表現', title_accent:'4 個表現',
    hero_message:'不只是天氣不好', hero_support:'每年同一季節反覆低落，值得留意',
    knowledge_title:'4 個表現', knowledge_note:'低落超過兩週，**尋求專業評估**',
    knowledge_cards:[
      {label:'季節性', icon:'leaf', lines:['秋冬低落、春夏好轉']},
      {label:'嗜睡疲倦', icon:'home', lines:['起床困難、一直想睡']},
      {label:'想吃甜食', icon:'glucose', lines:['澱粉甜食變多']},
      {label:'退縮', icon:'chat', lines:['不想與人互動']}
    ],
    primary_stat:{value:'17 項', label:'北醫統合分析納入的光照治療試驗', note:'2026 年研究報導'},
    secondary_stats:[
      {value:'3 次', label:'15–45 歲免費心理諮商'},
      {value:'24 小時', label:'1925 安心專線'}
    ],
    action_title:'這樣照顧自己',
    action_cards:[
      {key:'光', text:'白天到戶外接觸自然光'},
      {key:'動', text:'規律運動與作息'},
      {key:'聯', text:'維持與親友的互動'},
      {key:'援', text:'低落兩週以上，尋求專業協助'}
    ],
    carousel_suggestion:{reason:'若想把表現、光照治療與求助分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'一到冬天就不想動？', headline_main:'季節性情緒失調 4 個表現'},
      {layout_type:'knowledge', headline_hook:'光照治療', headline_main:'怎麼用、誰適合'},
      {layout_type:'action', headline_hook:'冬天也能好心情', headline_main:'自我照顧 4 件事'}]},
    hashtags:['季節性情緒失調','冬季憂鬱','光照治療','心理健康'],
    sources:['台北醫學大學研究（報導）','Cochrane','衛生福利部'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'冬季好心情', audience:'上班族與學生', scene:'一位穿著大衣的年輕人在冬日早晨的公園散步，陽光灑在臉上',
      emotion:'舒展、溫暖', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young adult in a winter coat walking in a park on a winter morning with sunlight on their face, refreshed and warm mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['北醫2026年光照治療統合分析（17項試驗）'],
      layout_reason:'選 knowledge：4 個表現放中段，研究與資源退到下方，最後給 4 個照顧行動。',
      tone:'專業易懂', tone_reason:'辨識與自我照顧並重。',
      to_verify:['國內盛行率查無統計']},
    decision_points:[DP_EVID],
    content_check_note:'研究標明出處，附求助專線，未使用療效保證用語，未推薦特定商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'季節性情緒失調',
    collect:{
      summary:'季節性情緒失調是與日照變化相關的憂鬱，常在秋冬出現；光照治療有臨床試驗支持，國內研究團隊2026年發表統合分析，「辨識季節性低落、接觸自然光、及早求助」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'國內查無盛行率統計：季節性情緒失調常在秋冬日照變短時出現、春夏好轉，國內目前未有官方或大型調查的盛行率數據。',tag:'市場觀察',source:{name:'EBSCO：台北醫學大學光照治療統合分析研究報導',url:TMU}},
        {item:'年度趨勢方向',desc:'統合分析納入17項試驗：台北醫學大學研究團隊2026年發表光照治療用於季節性情緒失調的系統性回顧與統合分析，納入隨機對照與交叉試驗。',tag:'市場觀察',source:{name:'EBSCO：台北醫學大學光照治療統合分析研究報導',url:TMU}},
        {item:'政策動向',desc:'15至45歲每人3次免費心理諮商：衛福部青壯世代心理健康支持方案115年持續推動，可作為季節性低落的初步求助管道。',tag:'官方統計',source:{name:'衛生福利部：115年續推青壯世代心理健康支持方案',url:'https://www.mohw.gov.tw/cp-16-85046-1.html'}},
        {item:'好發族群年齡層',desc:'第二代抗憂鬱藥效果仍不明確：Cochrane 回顧指出，第二代抗憂鬱藥用於冬季憂鬱症的效果與其他療法（如光照治療）相比仍不清楚。',tag:'市場觀察',source:{name:'Cochrane：第二代抗憂鬱藥用於冬季憂鬱症',url:CO}}
      ],
      product_view:['機會：換季心理健康衛教可作為保戶關懷內容。','機會：可結合戶外活動或運動健康管理服務。','風險：不推薦光療燈等商品；避免把一般季節性心情波動醫療化。'],
      marketing_view:['機會：入冬、梅雨季是自然的溝通時點。','機會：「天氣一變就低落？」容易引起共鳴。','風險：資料多為研究層級，避免寫成確定數字；需附求助管道。'],
      alert_level:'low',
      alert_reason:'屬季節性心理健康議題，適合入冬前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('納入17項隨機對照與交叉試驗評估光照治療的效果','SOURCE_EVIDENCE','study_result_missing',
          '只說明研究規模，沒有說明研究結論與療效大小，讀者無法判斷光照治療效果如何。','low','yes',
          '台北醫學大學統合分析原文的主要結論與效果量。','no','confirm','原文未取得，只見摘要報導。',
          '納入17項隨機對照與交叉試驗，評估光照治療的效果（主要結論請見原文）'),
        F('光照治療是常見的治療選項，有多項臨床試驗支持','MEDICAL_INTERPRETATION','benefit_unqualified',
          '未說明光照治療可能的副作用（如頭痛、眼睛不適）與不適合的族群，讀者可能自行購買光療燈使用。','low','no',
          null,'no','clarify','補充即可。',
          '光照治療是常見的治療選項，有多項臨床試驗支持；使用前應先諮詢醫師，部分眼疾或雙極性疾患者需特別注意'),
        F('季節過後好轉','MEDICAL_INTERPRETATION','oversimplification',
          '暗示會自然好轉，讀者可能因此不就醫；症狀嚴重時仍需治療。','low','no',
          null,'no','clarify','屬表達問題。',
          '季節過後常會減輕，但症狀明顯時仍需治療'),
        F('白天多到戶外接觸自然光','MEDICAL_INTERPRETATION','missing_precaution',
          '未提醒同時注意防曬，與文中「日曬床增加皮膚癌風險」的提醒可能讓讀者混淆。','low','no',
          null,'no','clarify','補一句即可。',
          '白天多到戶外接觸自然光（仍需做好防曬）',
          ['白天多出門走走，讓眼睛接觸自然光','白天接觸自然光、規律運動'])
      ],
      card:[
        F('北醫統合分析納入的光照治療試驗','SOURCE_EVIDENCE','number_without_context',
          '主數字只是研究納入的試驗數，不是療效或盛行率，讀者可能不知道它代表什麼。','low','no',
          null,'no','clarify','屬呈現方式問題。',
          '光照治療的臨床試驗數（北醫 2026 統合分析）'),
        F('秋冬低落、春夏好轉','MEDICAL_INTERPRETATION','oversimplification',
          '少數人是在春夏出現症狀，卡面寫成單一模式。','low','no',
          null,'no','clarify','屬完整度問題。',
          '多在秋冬低落（少數在春夏）')
      ]
    },
    title_alts:[
      '季節性情緒失調：天氣一變就低落？認識冬季憂鬱',
      '一到冬天就不想動、一直想睡？可能是季節性情緒失調',
      '冬天也能好心情：季節性情緒失調的表現與照顧'
    ],
    card_title_alts:[
      ['一到冬天就不想動？','季節性情緒失調 4 個表現'],
      ['不只是天氣不好','認識冬季憂鬱'],
      ['多曬太陽動一動','冬季好心情 4 件事']
    ],
    data_addon:[
      '美國皮膚癌基金會：紫外線曬黑不是治療季節性憂鬱的有效方法，反而增加皮膚癌風險。',
      '少數人的季節性情緒失調出現在春夏。',
      '衛福部全台另有75處社區心理衛生中心可提供諮詢。'
    ],
    cta:'這週選一個晴天的早上，到戶外走20分鐘；如果每年入冬都低落到影響生活，就預約一次身心科評估。'
  });
})();
