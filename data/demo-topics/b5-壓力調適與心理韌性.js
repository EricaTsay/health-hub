/* v6 示範主題：壓力調適與心理韌性（B5 心理健康與精神疾患）
   查證日期：2026-11-21。數據來源：衛福部 113-10-10「世界心理健康日：優先關注職場心理健康」（全民心理健康韌性計畫114-119年）、
   115-01-08「115年續推青壯世代心理健康支持方案」、鏡週刊轉載健康醫療網 2026-09-15（衛福部世界自殺防治日記者會：韌性不是硬撐）、
   NOW健康 2025-07-02（精神健康基金會2024年全國精神健康指數調查：睡眠不佳比例）。
   參考方向：健康智庫〈心理健康－面對壓力 強化情商與韌性〉2025/02、〈年終壓力大嗎？壓力症狀解密〉2023/12。 */
(function(){
  const MOHW = 'https://mohw.gov.tw/cp-16-80206-1.html';
  const P115 = 'https://www.mohw.gov.tw/cp-16-85046-1.html';
  const MM = 'https://www.mirrormedia.mg/external/healthnews_69733';
  const YAM = 'https://n.yam.com/Article/20250702670824';
  const REFS = [
    {title:'世界心理健康日：優先關注職場心理健康',source:'衛生福利部',url:MOHW},
    {title:'健康「心」生活！115年續推青壯世代心理健康支持方案',source:'衛生福利部',url:P115},
    {title:'青壯世代心理健康支持方案逾5.7萬人使用 衛福部：求助是改變開始',source:'鏡週刊（健康醫療網）',url:MM},
    {title:'失眠分成3種型態！醫揭非單一成因 常與身心問題共病',source:'NOW健康（蕃新聞轉載）',url:YAM},
    {title:'安心專線改4碼更好記! 1925依舊愛我 持續服務你和我',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48244-1.html'}
  ];
  const TABLE = {headers:['壓力訊號','可能的表現'], rows:[
    ['身體','肩頸緊繃、頭痛、胃痛、心跳加快、容易疲倦'],
    ['情緒','焦躁、易怒、低落，對小事反應過度'],
    ['想法','注意力變差、反覆擔心、腦袋停不下來'],
    ['行為','睡不好、吃太多或吃不下、靠菸酒或滑手機紓壓']
  ]};
  const TAGS = ['壓力調適','心理韌性','情緒管理','心理健康','1925安心專線'];

  const DP_RES = {id:'dp-rs-def', type:'tone', title:'「韌性」的說法',
    desc:'全國自殺防治中心主任在衛福部2026年記者會提醒，韌性不是要求每個人靠意志力硬撐。若內容只強調「變得更強」，可能讓正在辛苦的人覺得是自己不夠努力。AI 已在文中補上「求助也是韌性」，是否再調整由你決定。',
    current:'強調「韌性包含求助」',
    options:[{label:'維持目前寫法', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'壓力調適與心理韌性：韌性不是硬撐，而是懂得調整與求助',
    update_date:'2026/11/21',
    intro:'壓力是生活的一部分，適度的壓力能帶來動力，長期累積卻可能影響睡眠、情緒與身體健康。精神健康基金會2024年全國精神健康指數調查顯示，約40.9%民眾表示睡眠狀況不佳。行政院2024年核定「全民心理健康韌性計畫（114-119年）」，預計6年投入56.3億元、結合13個部會；全國自殺防治中心主任也提醒，韌性不是要求每個人靠意志力硬撐，而是包含適時尋求支持。',
    sections:[
      {heading:'壓力過大的4類訊號',format:'table',table:TABLE},
      {heading:'日常調適方法',format:'bullets',items:[
        '維持規律作息與睡眠，每週安排運動。',
        '把擔心寫下來，區分「能控制」與「不能控制」的事，先處理能做的部分。',
        '練習放慢呼吸、伸展或正念等放鬆技巧，每天給自己一段放空時間。',
        '維持人際連結，和信任的人說說心裡話。'
      ]},
      {heading:'韌性也包含求助',format:'bullets',items:[
        '壓力訊號持續兩週以上、影響工作或生活時，建議尋求專業協助。',
        '15至45歲可使用衛福部3次免費心理諮商；全台有75處社區心理衛生中心可諮詢。',
        '需要立即傾訴，可撥24小時免付費的1925安心專線。'
      ]}
    ],
    think_tank_view:'心理韌性不是「不受傷」，而是受傷後能慢慢復原的能力。照顧好睡眠、身體與人際關係，再加上願意開口求助，就是最實在的韌性。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'調查與政策數字標明來源與年份，強調求助而非硬撐，附求助專線，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['全民心理健康韌性計畫114-119年56.3億元（衛福部113年新聞稿）','睡眠不佳40.9%（精神健康基金會2024年調查）'],
      layout_reason:'先用表格整理壓力訊號，再給日常調適方法，最後說明求助管道。',
      tone:'專業易懂', tone_reason:'避免把韌性等同於硬撐。',
      to_verify:['40.9%為民間基金會調查，媒體引述']},
    decision_points:[DP_RES]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'壓力大到喘不過氣？4種訊號與照顧自己的方法',
    update_date:'2026/11/21',
    intro:'工作、家庭、經濟……壓力好像永遠不會停。精神健康基金會2024年的調查發現，約4成的人都說自己睡不好。壓力本身不是壞事，但如果身體、心情一直在報警，就該停下來照顧自己。記得：韌性不是硬撐，懂得求助也是一種力量。',
    sections:[
      {heading:'這4種訊號，代表壓力太大了',format:'table',table:TABLE},
      {heading:'每天可以這樣做',format:'bullets',items:[
        '睡飽、動一動，固定作息。',
        '把煩惱寫下來，先做能做的那件事。',
        '慢慢呼吸、伸展，給自己幾分鐘放空。',
        '找信任的人聊聊。'
      ]},
      {heading:'撐不住的時候',format:'bullets',items:[
        '壓力訊號超過兩週、影響生活，就找專業的人幫忙。',
        '15到45歲有3次免費心理諮商。',
        '想找人說話，打1925安心專線，24小時都有人。'
      ]}
    ],
    think_tank_view:'不用一直逼自己更堅強。好好睡、好好吃、找人說說話，累的時候允許自己休息，這就是韌性。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明來源，語氣親切，強調求助，附求助專線，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以日常壓力帶出訊號、方法與求助。', tone:'生活親切', tone_reason:'給上班族與一般大眾閱讀。', to_verify:[]},
    decision_points:[DP_RES]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'壓力調適：4類訊號＋4個方法',
    update_date:'2026/11/21',
    intro:'精神健康基金會2024年調查：約40.9%民眾睡眠不佳。韌性不是硬撐，包含適時求助。',
    sections:[
      {heading:'4類訊號',format:'table',table:TABLE},
      {heading:'調適方法',format:'bullets',items:[
        '規律作息與運動。',
        '寫下擔心，先做能做的事。',
        '放鬆練習、維持人際連結。'
      ]},
      {heading:'求助',format:'bullets',items:[
        '3次免費心理諮商。',
        '1925安心專線。'
      ]}
    ],
    think_tank_view:'照顧睡眠、身體與人際，加上願意求助，就是心理韌性。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明來源，附求助專線，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為訊號、方法、求助三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_RES]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'壓力調適與心理韌性', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'韌性不是硬撐，也包含求助', primary_visual:'40.9%', secondary_message:'約 4 成民眾睡眠不佳', action_priority:'作息、放鬆、連結、求助'},
    headline_hook:'壓力大到喘不過氣？', headline_main:'照顧自己的 4 個方法', title_accent:'4 個方法',
    hero_message:'韌性不是硬撐', hero_support:'受傷後能慢慢復原，也懂得適時求助',
    primary_stat:{value:'40.9%', label:'民眾表示睡眠狀況不佳', note:'精神健康基金會 2024 年調查'},
    action_title:'每天這樣照顧自己',
    action_cards:[
      {key:'睡', text:'規律作息，每週安排運動'},
      {key:'寫', text:'寫下擔心，先做能做的事'},
      {key:'息', text:'慢呼吸、伸展，留一段放空時間'},
      {key:'談', text:'找信任的人聊，需要時撥 1925'}
    ],
    notice:'壓力訊號持續**兩週以上**，請尋求專業協助。',
    carousel_suggestion:{reason:'若想把壓力訊號、調適方法與求助分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'壓力太大了嗎？', headline_main:'4 類壓力訊號'},
      {layout_type:'action', headline_hook:'每天 10 分鐘', headline_main:'壓力調適 4 方法'},
      {layout_type:'action', headline_hook:'求助也是韌性', headline_main:'免費心理資源'}]},
    hashtags:['壓力調適','心理韌性','情緒管理','心理健康'],
    sources:['衛生福利部','精神健康基金會（媒體引述）'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'壓力調適', audience:'上班族與一般大眾', scene:'一位上班族在公園長椅上閉眼深呼吸，旁邊放著寫了幾行字的筆記本',
      emotion:'放鬆、重新整理', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker sitting on a park bench with eyes closed taking a deep breath, a notebook with a few written lines beside them, relaxed and regrouping mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['睡眠不佳40.9%（精神健康基金會2024年）'],
      layout_reason:'選 action：4 個自我照顧行動當主角，睡眠數據放下方，以求助提醒收尾。',
      tone:'專業易懂', tone_reason:'溫和、可行動。',
      to_verify:['40.9%為民間調查']},
    decision_points:[DP_RES],
    content_check_note:'數字標明來源，附求助專線，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'壓力調適與心理韌性',
    collect:{
      summary:'壓力與睡眠困擾普遍，政府推動「全民心理健康韌性計畫（114-119年）」並提供免費心理諮商；衛福部強調韌性不是硬撐，「辨識壓力訊號、日常調適、適時求助」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約40.9%民眾睡眠狀況不佳：精神健康基金會2024年全國精神健康指數調查（NOW健康引述），睡眠常是壓力最早出現的訊號。',tag:'市場觀察',source:{name:'NOW健康：失眠分成3種型態！醫揭非單一成因',url:YAM}},
        {item:'年度趨勢方向',desc:'115年1至8月逾5.7萬人使用免費心理諮商：衛福部2026年9月記者會指出，青壯世代方案使用量持續成長，全國自殺防治中心主任強調韌性不是靠意志力硬撐。',tag:'官方統計',source:{name:'鏡週刊（健康醫療網）：青壯世代心理健康支持方案逾5.7萬人使用',url:MM}},
        {item:'政策動向',desc:'6年投入56.3億元：行政院2024年8月核定「全民心理健康韌性計畫（114-119年）」，結合13部會與地方政府、民間組織推動。',tag:'官方統計',source:{name:'衛生福利部：世界心理健康日：優先關注職場心理健康',url:MOHW}},
        {item:'好發族群年齡層',desc:'逾8萬人使用免費心理諮商：衛福部青壯世代心理健康支持方案自113年8月至114年10月底已逾8萬人使用，115年持續提供15至45歲每人3次。',tag:'官方統計',source:{name:'衛生福利部：115年續推青壯世代心理健康支持方案',url:P115}}
      ],
      product_view:['機會：壓力管理是健康管理服務的核心題材，可結合員工協助方案。','機會：保戶關懷內容可提供壓力訊號自我檢查與求助資源。','風險：避免以「抗壓性」評價個人；不暗示服務可治療心理疾病。'],
      marketing_view:['機會：年終考核、開學、年節前是壓力高峰溝通時點。','機會：「韌性不是硬撐」能翻轉刻板印象。','風險：需附求助管道，避免把求助描述為軟弱。'],
      alert_level:'low',
      alert_reason:'屬長期心理健康議題；全民心理健康韌性計畫執行中，適合心理健康月溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('約40.9%民眾表示睡眠狀況不佳','SOURCE_EVIDENCE','ngo_survey_via_media',
          '已註明出自精神健康基金會2024年調查，但為媒體轉述，未說明樣本與抽樣方式。','low','yes',
          '精神健康基金會2024年全國精神健康指數調查報告。','no','confirm','屬二手引述。',
          '約40.9%民眾表示睡眠狀況不佳（精神健康基金會2024年調查，媒體引述）',
          ['約4成的人都說自己睡不好']),
        F('預計6年投入56.3億元、結合13個部會','CURRENCY_TIMELINESS','budget_may_change',
          '這是113年核定時的規劃金額，實際年度預算可能調整，文中未說明。','low','yes',
          '全民心理健康韌性計畫最新執行與預算資料。','yes','confirm','預算逐年編列。',
          '核定時規劃6年投入56.3億元、結合13個部會'),
        F('練習放慢呼吸、伸展或正念等放鬆技巧','MEDICAL_INTERPRETATION','missing_practical_info',
          '未提供具體做法或時間，讀者難以開始練習。','low','no',
          null,'no','clarify','補一個簡單示範即可。',
          '練習放慢呼吸（例如吸氣4秒、吐氣6秒，重複幾次）、伸展或正念等放鬆技巧',
          ['慢慢呼吸、伸展，給自己幾分鐘放空']),
        F('壓力訊號持續兩週以上、影響工作或生活時','MEDICAL_INTERPRETATION','threshold_too_rigid',
          '若出現強烈無望感或自傷念頭，不應等到兩週，文中未說明例外。','low','no',
          null,'no','clarify','補一句例外即可。',
          '壓力訊號持續兩週以上、影響工作或生活時（若出現強烈無望感，請立即求助）',
          ['壓力訊號超過兩週、影響生活'])
      ],
      card:[
        F('精神健康基金會 2024 年調查','SOURCE_EVIDENCE','ngo_survey_via_media',
          '主數字為民間調查且經媒體轉述，卡面讀者可能以為是官方統計。','low','no',
          null,'no','clarify','屬來源標示。',
          '精神健康基金會 2024 年調查（媒體引述）'),
        F('壓力訊號持續**兩週以上**，請尋求專業協助。','MEDICAL_INTERPRETATION','threshold_too_rigid',
          '未提醒急性情況不需等待。','low','no',
          null,'no','clarify','補一句即可。',
          '壓力訊號持續兩週以上，或出現強烈無望感，請尋求專業協助。')
      ]
    },
    title_alts:[
      '壓力調適與心理韌性：韌性不是硬撐，而是懂得調整與求助',
      '壓力大到喘不過氣？4種訊號與照顧自己的方法',
      '約4成民眾睡不好：壓力調適4方法與免費心理資源'
    ],
    card_title_alts:[
      ['壓力大到喘不過氣？','照顧自己的 4 個方法'],
      ['韌性不是硬撐','求助也是一種力量'],
      ['每天 10 分鐘','壓力調適練習']
    ],
    data_addon:[
      '衛福部將每年10月訂為心理健康月。',
      '衛福部另有「心快活」心理健康學習平台，提供自助學習資源。',
      '男性關懷專線0800-013-999，不限議題都可撥打。'
    ],
    cta:'今天睡前花5分鐘寫下三件讓你擔心的事，圈出一件明天能做的；如果壓力已經壓得喘不過氣，撥1925找人聊聊。'
  });
})();
