/* v6 示範主題：壓力肥（B9 飲食營養與運動）
   查證日期：2026-11-21。數據來源：國健署代謝症候群專區（壓力造成內分泌失調、血糖上升；「壓力去，活力來」紓壓方法）、國健署世界肥胖日新聞稿（2023：睡眠不足是肥胖危險因子、家庭建議每天至少睡8小時）、國健署2025-03-04新聞稿（2018-2022成人過重及肥胖率50.8%）。
   注意：「壓力肥」為俗稱；國內未查到壓力與體重關係的官方統計，國健署資料未直接談皮質醇，本題不寫皮質醇機轉。
   參考方向：健康智庫〈真瘦不了你！快看看你是不是壓力肥？〉2025/01。 */
(function(){
  const REFS = [
    {title:'代謝症候群（成因與防治招式）',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/pages/list.aspx?nodeid=221'},
    {title:'邀全民響應世界肥胖日 一起認識肥胖 改變觀點互相支持與陪伴',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=16703'},
    {title:'響應世界肥胖日 健康吃 動起來 維持健康體位更健康',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18922'}
  ];
  const TABLE = {headers:['壓力與體重的連結','國健署怎麼說'], rows:[
    ['內分泌','壓力造成內分泌失調，導致血糖上升，長期容易造成代謝症候群'],
    ['睡眠','睡眠不足可能導致荷爾蒙不平衡、增加進食機會與疲憊感，是肥胖危險因子'],
    ['生活型態','代謝症候群成因中不良生活型態約占50%'],
    ['紓壓方式','運動、聊天、閱讀、唱歌、寫日記；必要時尋求醫師或臨床心理師']
  ]};
  const TAGS = ['壓力肥','壓力管理','睡眠','情緒性進食','體重管理'];

  const PRO = {
    content_type:'健康文章',
    title:'壓力大就變胖？認識「壓力肥」與4個紓壓不增重方法',
    update_date:'2026/11/21',
    intro:'「壓力肥」是民眾常說的俗稱，指壓力大時體重跟著增加的現象。國民健康署指出，壓力會造成內分泌失調、導致血糖上升，長期下來容易形成代謝症候群；睡眠不足也是肥胖的危險因子，可能使荷爾蒙不平衡、增加進食機會。依2018-2022年國民營養健康調查，18歲以上成人過重及肥胖率為50.8%，壓力與睡眠是體重管理中容易被忽略的一環。',
    sections:[
      {heading:'壓力、睡眠與體重',format:'table',table:TABLE},
      {heading:'你可能正處在壓力肥',format:'bullets',items:[
        '工作壓力大時特別想吃甜食、炸物或宵夜。',
        '經常熬夜、睡眠時間不足。',
        '忙到沒有時間運動，下班只想癱在沙發。'
      ]},
      {heading:'紓壓不增重',format:'bullets',items:[
        '用運動、聊天、閱讀、唱歌、寫日記等方式轉移壓力，不用吃來紓壓。',
        '維持規律作息，國健署建議睡眠充足（兒童與家庭建議每天至少8小時）。',
        '家裡與辦公室少囤零食，改放水果與白開水。',
        '壓力長期無法緩解，尋求醫師或臨床心理師協助。'
      ]}
    ],
    think_tank_view:'壓力肥的關鍵不在意志力，而在「壓力來時手邊有什麼」。把零食換成一段散步、一通電話或一杯白開水，再守住睡眠時間，體重和情緒都會比較穩。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'壓力與睡眠的健康影響引自國健署，「壓力肥」標明為俗稱，過重肥胖率標明調查年份，未推薦特定紓壓或減重產品。',
    ai_rationale:{basis:['壓力造成內分泌失調、血糖上升（國健署代謝症候群專區）','睡眠不足是肥胖危險因子（國健署）'],
      layout_reason:'先用表格整理壓力、睡眠與體重的關係，再列出自我覺察線索，最後給紓壓不增重方法。',
      tone:'專業易懂', tone_reason:'避免把壓力肥說成疾病。',
      to_verify:['國內查無壓力與體重關係的官方統計','8小時建議出自國健署兒童與家庭體位管理情境']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'一忙就想吃？小心「壓力肥」找上你',
    update_date:'2026/11/21',
    intro:'工作一忙、心情一煩，就特別想吃甜的、炸的，或熬夜追劇配宵夜？這就是大家常說的「壓力肥」。國健署提醒，壓力會讓內分泌失調、血糖上升；睡不夠也會讓荷爾蒙亂掉、更想吃東西。台灣18歲以上有一半以上（50.8%）的人過重或肥胖，壓力和睡眠也是要顧的地方。',
    sections:[
      {heading:'壓力怎麼讓人變胖？',format:'table',table:TABLE},
      {heading:'你是不是壓力肥？',format:'bullets',items:[
        '壓力大就想吃甜食或宵夜。',
        '常常熬夜、睡不飽。',
        '累到完全不想動。'
      ]},
      {heading:'這樣紓壓不變胖',format:'bullets',items:[
        '心煩時去散步、找朋友聊聊、聽歌，不要用吃的。',
        '作息規律，睡飽一點。',
        '桌上零食換成水果和水。',
        '壓力一直很大，可以找醫師或心理師聊聊。'
      ]}
    ],
    think_tank_view:'下次壓力來的時候，先去走一圈再決定要不要吃，常常走完就不想吃了。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署並標明年份，「壓力肥」為俗稱，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以「一忙就想吃」的情境切入。', tone:'生活親切', tone_reason:'給上班族。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'壓力肥：紓壓、睡飽、少囤零食',
    update_date:'2026/11/21',
    intro:'國健署指出壓力造成內分泌失調、血糖上升；睡眠不足是肥胖危險因子。成人過重肥胖率50.8%（2018-2022）。',
    sections:[
      {heading:'壓力與體重',format:'table',table:TABLE},
      {heading:'警訊',format:'bullets',items:[
        '壓力大就想吃。',
        '睡眠不足。'
      ]},
      {heading:'對策',format:'bullets',items:[
        '以運動、聊天紓壓。',
        '規律作息。',
        '必要時尋求專業協助。'
      ]}
    ],
    think_tank_view:'壓力來時，先動一動再決定要不要吃。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為關係、警訊、對策三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'壓力肥', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'壓力與睡眠不足都可能讓體重上升', primary_visual:'50.8%', secondary_message:'成人過重及肥胖率', action_priority:'紓壓不靠吃'},
    headline_hook:'一忙就想吃？', headline_main:'壓力肥這樣紓壓不增重', title_accent:'不增重',
    hero_message:'壓力 → 內分泌失調', hero_support:'導致血糖上升，長期易成代謝症候群（國健署）',
    primary_stat:{value:'50.8%', label:'18 歲以上過重及肥胖率', note:'國健署 2018–2022 年調查'},
    action_title:'紓壓不增重',
    action_cards:[
      {key:'動', text:'用散步、運動取代吃東西紓壓'},
      {key:'聊', text:'找人聊天、聽歌、寫日記'},
      {key:'睡', text:'規律作息，睡眠要充足'},
      {key:'換', text:'桌上零食換成水果和白開水'}
    ],
    notice:'壓力長期無法緩解，請尋求**醫師或臨床心理師**協助。',
    carousel_suggestion:{reason:'若想把壓力機轉、睡眠與紓壓方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'壓力肥是什麼', headline_main:'壓力、睡眠與體重'},
      {layout_type:'knowledge', headline_hook:'睡不夠也會胖', headline_main:'荷爾蒙與食慾'},
      {layout_type:'action', headline_hook:'紓壓不增重', headline_main:'4 個替代方法'}]},
    hashtags:['壓力肥','壓力管理','睡眠','體重管理'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'紓壓', audience:'忙碌上班族', scene:'一位上班族把桌上的零食推開，戴上耳機出門散步，窗外是傍晚的天空',
      emotion:'放鬆、轉換心情', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker pushing snacks aside on the desk, putting on headphones and heading out for a walk, evening sky outside the window, relaxed and refreshed, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['國健署代謝症候群專區、世界肥胖日新聞稿'],
      layout_reason:'重點是替代行為，選 action：4 個紓壓方法當主角，過重肥胖率當背景。',
      tone:'專業易懂', tone_reason:'具體可做。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自國健署並標明年份，未推薦特定產品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'壓力肥',
    collect:{
      summary:'「壓力肥」是民眾俗稱；國健署指出壓力會造成內分泌失調、血糖上升，長期易形成代謝症候群，睡眠不足也是肥胖危險因子。成人過重及肥胖率達50.8%，壓力與睡眠管理是體重管理中常被忽略的面向，適合以上班族為對象溝通。',
      objective_data:[
        {item:'盛行率／發生率',desc:'50.8%：國健署2025年3月引用2018-2022年國民營養健康調查，18歲以上成人達過重及肥胖標準者為50.8%。',tag:'官方統計',source:{name:'國健署：響應世界肥胖日 維持健康體位更健康',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18922'}},
        {item:'政策動向',desc:'約占50%：國健署代謝症候群專區指出，代謝症候群成因中不良生活型態約占50%，壓力造成內分泌失調、血糖上升，長期容易造成代謝症候群。',tag:'官方統計',source:{name:'國健署：代謝症候群專區',url:'https://www.hpa.gov.tw/pages/list.aspx?nodeid=221'}},
        {item:'好發族群年齡層',desc:'睡眠不足：國健署世界肥胖日新聞稿指出，睡眠不足是肥胖危險因子之一，可能導致荷爾蒙不平衡、增加進食機會與疲憊感。',tag:'官方統計',source:{name:'國健署：邀全民響應世界肥胖日',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=16703'}},
        {item:'年度趨勢方向',desc:'壓力去，活力來：國健署建議以運動、聊天、閱讀、唱歌、寫日記等方式轉移憂慮，並正向思考、尋求家人朋友協助，必要時尋求醫師或臨床心理師諮商。',tag:'官方統計',source:{name:'國健署：代謝症候群專區',url:'https://www.hpa.gov.tw/pages/list.aspx?nodeid=221'}}
      ],
      product_view:['機會：壓力、睡眠與體重的連結，可整合心理健康與體重管理服務。','機會：職場健康促進活動的切入點。','風險：避免推薦紓壓或減重產品；「壓力肥」非醫學診斷，不宜當疾病描述。'],
      marketing_view:['機會：年終、考試季、轉職季等壓力高峰是溝通時點。','機會：「一忙就想吃」高共鳴。','風險：避免責怪個人意志力。'],
      alert_level:'low',
      alert_reason:'屬長期健康行為議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('工作壓力大時特別想吃甜食、炸物或宵夜','SOURCE_EVIDENCE','unsourced_claim',
          '「壓力大想吃甜食」屬常見經驗描述，本文引用的國健署資料未直接說明壓力與特定食物偏好的關係。','low','no',
          null,'no','clarify','屬經驗描述，宜註明為常見情況。',
          '有些人在工作壓力大時特別想吃甜食、炸物或宵夜',
          ['壓力大就想吃甜食或宵夜','壓力大就想吃。']),
        F('國健署建議睡眠充足（兒童與家庭建議每天至少8小時）','DATA_FACTUAL_ACCURACY','population_mismatch',
          '8小時建議出自國健署針對兒童與家庭體位管理的新聞稿，套用到成人上班族的文章中，適用對象不完全一致。','low','no',
          null,'no','clarify','文中已部分註明，但仍易被讀成成人標準。',
          '維持規律作息與充足睡眠'),
        F('壓力會造成內分泌失調、導致血糖上升，長期下來容易形成代謝症候群','MEDICAL_INTERPRETATION','oversimplification',
          '把壓力直接連到代謝症候群屬簡化描述，代謝症候群為多因素造成；國健署原文也將壓力列為成因之一而非主因。','low','no',
          null,'no','clarify','屬因果強度表達。',
          '壓力可能造成內分泌失調、使血糖上升，是代謝症候群的成因之一',
          ['壓力會讓內分泌失調、血糖上升','國健署指出壓力造成內分泌失調、血糖上升'])
      ],
      card:[
        F('壓力 → 內分泌失調','TERMINOLOGY_LANGUAGE','causal_arrow',
          '箭頭呈現容易被讀成必然因果，宜改為「可能」。','low','no',
          null,'no','clarify','屬因果呈現。',
          '壓力可能讓內分泌失調'),
        F('規律作息，睡眠要充足','MEDICAL_INTERPRETATION','missing_referral',
          '長期失眠者應就醫評估，卡面未提醒。','low','no',
          null,'no','clarify','屬補充提醒。',
          '規律作息；長期失眠請就醫')
      ]
    },
    title_alts:[
      '壓力大就變胖？認識「壓力肥」與4個紓壓不增重方法',
      '一忙就想吃？小心「壓力肥」找上你',
      '壓力、睡眠與體重：國健署紓壓建議一次看'
    ],
    card_title_alts:[
      ['一忙就想吃？','壓力肥這樣紓壓不增重'],
      ['睡不夠也會胖','荷爾蒙與食慾'],
      ['紓壓不靠吃','4 個替代方法']
    ],
    data_addon:[
      '代謝症候群成因中遺傳因素約占20%、不良生活型態約占50%（國健署）。',
      '研究顯示肥胖國中生有7至8成將來是肥胖成人（國健署世界肥胖日新聞稿）。',
      '國健署建議紓壓時轉移憂慮、正向思考、尋求家人朋友協助。'
    ],
    cta:'這週壓力大想吃東西時，先試著出門走10分鐘，回來再決定要不要吃。'
  });
})();
