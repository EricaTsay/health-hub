/* v6 示範主題：三明治世代壓力（B5 心理健康與精神疾患）
   查證日期：2026-11-21。數據來源：工商時報 2025-08-05（中國信託、資誠、遠見《2025家庭理財暨樂齡金融大調查》，35歲以上逾1,200人）、
   遠見雜誌 2025-05-12（引述英國家庭縱向研究：三明治照顧者心理健康）、衛福部 113-10-10 世界心理健康日新聞稿、115-01-08 青壯世代方案新聞稿。
   查無衛福部官方三明治世代比例統計。
   參考方向：健康智庫〈三明治世代：多重壓力 如何調適？〉2024/11。 */
(function(){
  const CT = 'https://www.ctee.com.tw/news/20250805700036-431201';
  const GVM = 'https://www.gvm.com.tw/article/121242';
  const MOHW = 'https://mohw.gov.tw/cp-16-80206-1.html';
  const P115 = 'https://www.mohw.gov.tw/cp-16-85046-1.html';
  const REFS = [
    {title:'中國信託銀行家庭理財暨樂齡金融大調查',source:'工商時報',url:CT},
    {title:'你是三明治照顧者嗎？善用6種方式舒壓，別讓自己也瀕臨崩潰',source:'遠見雜誌',url:GVM},
    {title:'世界心理健康日：優先關注職場心理健康',source:'衛生福利部',url:MOHW},
    {title:'健康「心」生活！115年續推青壯世代心理健康支持方案',source:'衛生福利部',url:P115},
    {title:'安心專線改4碼更好記! 1925依舊愛我 持續服務你和我',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48244-1.html'}
  ];
  const TABLE = {headers:['壓力來源','占比（2025調查）'], rows:[
    ['工作與家庭難以兼顧','50%'],
    ['情緒勞動','49%'],
    ['照護開銷沉重','41%']
  ]};
  const TAGS = ['三明治世代','照顧者壓力','家庭照顧','心理健康','免費心理諮商'];

  const DP_SRC = {id:'dp-sw-src', type:'data_scope', title:'數據來自民間調查',
    desc:'壓力來源比例出自中國信託、資誠與遠見合作的《2025家庭理財暨樂齡金融大調查》（35歲以上逾1,200人），屬民間調查；心理健康影響引用的是英國縱向研究。國內查無官方三明治世代統計，AI 沒有替你決定是否沿用。',
    current:'引用民間調查並標明來源',
    options:[{label:'沿用目前寫法', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'三明治世代壓力：上有老、下有小，照顧者也需要被照顧',
    update_date:'2026/11/21',
    intro:'同時照顧父母與子女的「三明治世代」，常在工作、家庭與照顧責任之間拉扯。中國信託、資誠與遠見2025年發表的家庭理財調查（35歲以上逾1,200人）顯示，照顧者壓力前三大來源為工作與家庭難以兼顧50%、情緒勞動49%、照護開銷沉重41%。遠見2025年引述英國研究指出，三明治照顧者的心理健康顯著下降，每週照顧超過20小時者更容易出現健康惡化。衛福部也將15至45歲青壯世代稱為「上有老、下有小」的族群，提供免費心理諮商。',
    sections:[
      {heading:'照顧者3大壓力來源',format:'table',table:TABLE},
      {heading:'壓力過大的警訊',format:'bullets',items:[
        '長期睡不好、易怒、對原本喜歡的事失去興趣。',
        '覺得一切都要自己扛，無法開口請家人分擔。',
        '出現頭痛、胃痛、血壓上升等身體症狀，或常常生病。'
      ]},
      {heading:'給自己的支持',format:'bullets',items:[
        '和家人分工，把照顧責任說清楚；善用長照服務與喘息服務，讓自己有休息的時間。',
        '維持規律作息，每天留一點只屬於自己的時間。',
        '15至45歲可使用衛福部3次免費心理諮商；需要傾訴時撥24小時免付費的1925安心專線。',
        '提早與家人討論醫療、長照與退休的財務安排，減少突發壓力。'
      ]}
    ],
    think_tank_view:'三明治世代最容易忘記的，是照顧自己。照顧不是一個人的責任，善用家人分工與公共資源，留給自己休息與求助的空間，才能走得長久。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'比例標明為民間調查並註明單位與樣本，國際研究標明國家，附求助專線，未使用療效保證用語，未推薦特定金融或保險商品。',
    ai_rationale:{basis:['照顧者壓力來源比例（2025家庭理財暨樂齡金融大調查）','英國縱向研究：三明治照顧者心理健康下降（遠見2025引述）'],
      layout_reason:'先用表格呈現壓力來源，再列警訊，最後給自我支持做法。',
      tone:'專業易懂', tone_reason:'同理照顧者處境，以資源與行動為主。',
      to_verify:['查無官方三明治世代統計','英國研究原文未讀取']},
    decision_points:[DP_SRC]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'上有老、下有小，累到喘不過氣？三明治世代也要照顧自己',
    update_date:'2026/11/21',
    intro:'白天上班、晚上顧小孩，週末還要陪爸媽看醫生，你是不是常覺得自己快被夾扁了？2025年一份民間調查發現，照顧者最大的壓力是「工作和家庭顧不來」，占了一半。國外研究也發現，照顧責任越重，身心越容易出狀況。',
    sections:[
      {heading:'照顧者最常見的3種壓力',format:'table',table:TABLE},
      {heading:'這些訊號代表你太累了',format:'bullets',items:[
        '常常睡不好、動不動就生氣。',
        '覺得什麼都要自己來，不好意思開口求助。',
        '頭痛、胃痛、常感冒。'
      ]},
      {heading:'給自己喘口氣',format:'bullets',items:[
        '和兄弟姊妹、另一半分工，也可以申請長照和喘息服務。',
        '每天留一點時間給自己，散步、聽音樂都好。',
        '15到45歲有3次免費心理諮商；想找人說說話打1925。',
        '早點和家人聊聊醫療和退休的安排。'
      ]}
    ],
    think_tank_view:'照顧家人很辛苦，你也值得被照顧。把一部分的擔子分出去，不是逃避，而是讓自己可以撐得更久。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明為民間調查與國外研究，語氣親切，附求助專線，未使用療效保證用語，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以照顧者的一天帶出壓力、警訊與支持。', tone:'生活親切', tone_reason:'給35至55歲照顧者閱讀。', to_verify:[]},
    decision_points:[DP_SRC]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'三明治世代：3大壓力＋自我支持4招',
    update_date:'2026/11/21',
    intro:'2025年民間調查：照顧者壓力來源前三名為工作家庭難兼顧50%、情緒勞動49%、照護開銷41%。',
    sections:[
      {heading:'3大壓力',format:'table',table:TABLE},
      {heading:'警訊',format:'bullets',items:[
        '睡不好、易怒、身體不適。'
      ]},
      {heading:'支持',format:'bullets',items:[
        '家人分工、長照與喘息服務。',
        '3次免費心理諮商、1925安心專線。'
      ]}
    ],
    think_tank_view:'照顧者也需要被照顧；分工與資源是長期照顧的關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明為民間調查，附求助專線，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為壓力、警訊、支持三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_SRC]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'三明治世代壓力', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'照顧者也需要被照顧', primary_visual:'50%', secondary_message:'工作與家庭難以兼顧是最大壓力', action_priority:'分工、喘息、求助'},
    headline_hook:'上有老、下有小？', headline_main:'三明治世代喘口氣 4 招', title_accent:'4 招',
    hero_message:'照顧者也要被照顧', hero_support:'工作、家庭、照顧三頭燒，別一個人扛',
    primary_stat:{value:'50%', label:'照顧者壓力來自工作與家庭難以兼顧', note:'2025 家庭理財暨樂齡金融大調查（民間）'},
    action_title:'這樣喘口氣',
    action_cards:[
      {key:'分', text:'和家人分工，說清楚照顧責任'},
      {key:'喘', text:'善用長照與喘息服務'},
      {key:'留', text:'每天留一點自己的時間'},
      {key:'援', text:'3 次免費諮商、1925 安心專線'}
    ],
    notice:'長期睡不好、易怒、身體不適，是**壓力過大的警訊**。',
    carousel_suggestion:{reason:'若想把壓力來源、警訊與資源分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'三明治世代', headline_main:'照顧者 3 大壓力'},
      {layout_type:'knowledge', headline_hook:'你太累了嗎？', headline_main:'壓力過大的警訊'},
      {layout_type:'action', headline_hook:'喘口氣', headline_main:'照顧者支持資源'}]},
    hashtags:['三明治世代','照顧者壓力','家庭照顧','心理健康'],
    sources:['2025家庭理財暨樂齡金融大調查（民間）','衛生福利部'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'三明治世代照顧者', audience:'35 至 55 歲照顧者', scene:'一位中年女性在客廳短暫休息喝茶，另一半陪著長輩，孩子在旁邊寫功課',
      emotion:'被分擔、喘口氣', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged woman taking a short tea break in the living room while her partner keeps an elderly parent company and a child does homework nearby, relieved and shared-care mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['照顧者壓力來源50%（2025民間調查）'],
      layout_reason:'選 action：4 個喘息行動當主角，壓力比例放下方，以警訊收尾。',
      tone:'專業易懂', tone_reason:'同理、以資源為主。',
      to_verify:['民間調查，非官方統計']},
    decision_points:[DP_SRC],
    content_check_note:'比例標明為民間調查，附求助專線，未使用療效保證用語，未推薦特定商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'三明治世代壓力',
    collect:{
      summary:'在超高齡社會下，同時照顧父母與子女的三明治世代面臨工作、情緒與財務多重壓力；衛福部以青壯世代心理健康支持方案回應，「照顧者也需要被照顧」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'50%照顧者壓力來自工作與家庭難以兼顧：中國信託、資誠與遠見《2025家庭理財暨樂齡金融大調查》（35歲以上逾1,200人）顯示，情緒勞動49%、照護開銷41%（查無官方三明治世代統計）。',tag:'市場觀察',source:{name:'工商時報：中國信託銀行家庭理財暨樂齡金融大調查',url:CT}},
        {item:'年度趨勢方向',desc:'41%照顧者尚未為自己規劃財務：同一調查顯示三明治族31%背負房貸，高於非三明治族的12%，照顧對象中63%未展開理財或照護安排。',tag:'市場觀察',source:{name:'工商時報：中國信託銀行家庭理財暨樂齡金融大調查',url:CT}},
        {item:'政策動向',desc:'15至45歲每人3次免費心理諮商：衛福部將青壯世代稱為「上有老、下有小的三明治世代」，自113年8月推動免費心理諮商，115年持續辦理。',tag:'官方統計',source:{name:'衛生福利部：世界心理健康日：優先關注職場心理健康',url:MOHW}},
        {item:'好發族群年齡層',desc:'每週照顧超過20小時者健康較易惡化：遠見2025年引述英國家庭縱向研究，追蹤約2000位三明治照顧者，發現其心理健康顯著下降。',tag:'市場觀察',source:{name:'遠見雜誌：你是三明治照顧者嗎？',url:GVM}}
      ],
      product_view:['機會：三明治世代是壽險核心客群，照顧者支持與家庭保障規劃高度相關。','機會：可結合長照資源、喘息服務與心理支持資訊，展現陪伴型價值。','風險：避免以焦慮訴求推銷商品；財務建議需中立、不推薦特定商品。'],
      marketing_view:['機會：母親節、父親節與年節返鄉是自然的溝通時點。','機會：「照顧者也要被照顧」容易引發共鳴。','風險：調查多為民間（含金融業）調查，引用時需標明來源。'],
      alert_level:'medium',
      alert_reason:'台灣已進入超高齡社會，照顧者議題受關注；衛福部心理支持方案持續推動。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('工作與家庭難以兼顧50%、情緒勞動49%、照護開銷沉重41%','SOURCE_EVIDENCE','commercial_survey',
          '已註明調查名稱與單位，但這是金融機構主導的民間調查，未說明抽樣方式，代表性有限。','low','no',
          null,'no','clarify','屬來源性質說明。',
          '工作與家庭難以兼顧50%、情緒勞動49%、照護開銷沉重41%（民間調查，抽樣方式未公開）'),
        F('每週照顧超過20小時者更容易出現健康惡化','DATA_FACTUAL_ACCURACY','international_data_as_local',
          '這是英國研究結果，文中已註明，但未提醒台灣照顧型態可能不同。','low','no',
          null,'no','clarify','屬適用範圍說明。',
          '每週照顧超過20小時者更容易出現健康惡化（英國研究，國內尚無同類追蹤資料）'),
        F('善用長照服務與喘息服務','MEDICAL_INTERPRETATION','missing_practical_info',
          '沒有說明如何申請（如撥打長照專線或洽各縣市長照管理中心），讀者不知道下一步。','low','no',
          null,'no','clarify','補申請管道即可。',
          '善用長照服務與喘息服務（可洽各縣市長期照顧管理中心申請）',
          ['也可以申請長照和喘息服務','長照與喘息服務']),
        F('提早與家人討論醫療、長照與退休的財務安排','MEDICAL_INTERPRETATION','scope_drift',
          '財務規劃偏離心理健康主題，且容易被讀者解讀為商品推廣，需注意呈現方式。','low','no',
          null,'no','clarify','屬內容定位問題。',
          '提早與家人溝通照顧分工與相關安排，減少突發壓力',
          ['早點和家人聊聊醫療和退休的安排'])
      ],
      card:[
        F('2025 家庭理財暨樂齡金融大調查（民間）','SOURCE_EVIDENCE','commercial_survey',
          '主數字出自金融機構合作的民間調查，卡面讀者可能當成官方統計。','low','no',
          null,'no','clarify','已標示民間。',
          '2025 民間調查（金融機構合作，35 歲以上逾 1200 人）'),
        F('善用長照與喘息服務','MEDICAL_INTERPRETATION','missing_practical_info',
          '未說明申請管道。','low','no',
          null,'no','clarify','補一句即可。',
          '洽長照管理中心申請喘息服務')
      ]
    },
    title_alts:[
      '三明治世代壓力：上有老、下有小，照顧者也需要被照顧',
      '上有老、下有小，累到喘不過氣？三明治世代也要照顧自己',
      '照顧者壓力來源前三名：三明治世代喘口氣4招'
    ],
    card_title_alts:[
      ['上有老、下有小？','三明治世代喘口氣 4 招'],
      ['照顧者也要被照顧','別一個人扛'],
      ['工作家庭兩頭燒','照顧者支持資源']
    ],
    data_addon:[
      '2025民間調查：65歲以上約六成期待由子女照顧，35至49歲僅35%。',
      '董氏基金會心理衛生中心建議照顧者：認清事實、相信自己、維持規律、建立支持系統、覺察警訊、安排放鬆時間（遠見引述）。',
      '衛福部全台另有75處社區心理衛生中心可提供諮詢。'
    ],
    cta:'這週和家人開一次「照顧分工會議」，把一件事交出去；給自己留30分鐘，去散步或喝杯茶。'
  });
})();
