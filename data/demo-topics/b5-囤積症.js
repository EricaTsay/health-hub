/* v6 示範主題：囤積症（B5 心理健康與精神疾患）
   查證日期：2026-11-21。資料來源：《台灣家醫誌》2025年第35卷囤積症綜述（臺北榮總家醫部網站PDF：盛行率、DSM-5、治療與家屬支持）、
   TVBS健康2.0（精神科醫師受訪：長者囤積的風險）。盛行率為國外研究整理，查無台灣本土調查。
   參考方向：健康智庫〈過年大掃除：收藏與囤積大不同！〉2025/02。 */
(function(){
  const JFM = 'https://wd.vghtpe.gov.tw/fm/files/%E5%8F%B0%E7%81%A3%E5%AE%B6%E9%86%AB%E8%AA%8C_2025_35_67.pdf';
  const TV = 'https://health.tvbs.com.tw/life/347718';
  const REFS = [
    {title:'囤積症綜述（台灣家醫誌 2025;35）',source:'台灣家庭醫學醫學會（臺北榮總家醫部網站）',url:JFM},
    {title:'家變資源回收場！「東西捨不得丟」台灣人囤積成病 儲物症如何逆轉？',source:'TVBS健康2.0',url:TV},
    {title:'安心專線改4碼更好記! 1925依舊愛我 持續服務你和我',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48244-1.html'}
  ];
  const TABLE = {headers:['','收藏','囤積症'], rows:[
    ['物品','有主題、會整理與展示','各式物品大量堆積，包括沒用的東西'],
    ['丟東西','可以取捨','一想到丟棄就強烈焦慮、痛苦'],
    ['居住空間','仍能正常使用','走道、床、廚房被物品占滿'],
    ['影響','帶來樂趣','影響安全、衛生與家人關係']
  ]};
  const TAGS = ['囤積症','斷捨離','長者居家安全','心理健康','認知行為治療'];

  const DP_PREV = {id:'dp-hd-prev', type:'data_scope', title:'盛行率是國外研究數字',
    desc:'「盛行率約2%至6%、70歲以上每100人約6人」整理自國外研究（台灣家醫誌2025年綜述引述），台灣尚無本土調查。AI 沒有替你決定是否在內容中使用國外數字。',
    current:'引用國外研究並註明非台灣數據',
    options:[{label:'沿用目前寫法', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'囤積症：捨不得丟到家裡無法生活，是需要被理解的心理疾病',
    update_date:'2026/11/21',
    intro:'囤積症（Hoarding Disorder）是指持續難以丟棄物品，即使東西沒有實際價值，丟棄時也會感到強烈痛苦，導致居住空間被大量物品占滿。它在2013年被納入美國精神醫學會診斷準則（DSM-5），成為獨立診斷。《台灣家醫誌》2025年綜述整理國外研究，囤積症盛行率約2%至6%，老年族群較常見；台灣目前尚無本土盛行率調查。',
    sections:[
      {heading:'收藏與囤積症的差別',format:'table',table:TABLE},
      {heading:'為什麼要重視',format:'bullets',items:[
        '精神科醫師提醒，長者囤積可能增加跌倒、火災、環境衛生不佳、誤食過期食物與營養不良的風險。',
        '囤積行為也可能與失智症、巴金森病、憂鬱或焦慮等狀況有關，需要醫師評估。',
        '目前主要治療為認知行為治療，必要時搭配藥物處理焦慮或憂鬱。'
      ]},
      {heading:'家人可以這樣做',format:'bullets',items:[
        '以同理代替批評，不要趁對方不在時強行清空，避免破壞信任。',
        '從一個小區域、一個小目標開始，和當事人一起決定去留。',
        '先處理安全問題：清出走道、遠離火源與電線。',
        '鼓勵就醫評估；照顧者感到壓力時，可撥24小時免付費的1925安心專線。'
      ]}
    ],
    think_tank_view:'囤積症不是懶惰或愛撿東西，而是與焦慮、失落和決策困難有關的心理疾病。比起一次清空，更重要的是陪伴、一起設定小目標，以及先確保居家安全。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率標明為國外研究並註明非台灣數據，醫師說法標明身分，附求助專線，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['盛行率2%至6%、DSM-5 2013年納入（台灣家醫誌2025年綜述）','長者囤積風險（精神科醫師受訪）'],
      layout_reason:'先用表格區分收藏與囤積，再說明為何要重視，最後給家人的做法。',
      tone:'專業易懂', tone_reason:'去汙名、避免嘲諷式描述。',
      to_verify:['盛行率為國外研究','TVBS報導日期未確認']},
    decision_points:[DP_PREV]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'家裡東西多到走不過去？收藏和囤積症差在哪',
    update_date:'2026/11/21',
    intro:'爸媽什麼都捨不得丟，家裡越堆越滿，連走路都要側身？如果一想到丟東西就非常痛苦，東西多到影響生活，可能不只是節儉，而是囤積症。它在2013年已被列為正式的精神疾病診斷，國外研究估計大約每100人有2到6人，年紀越大越常見。',
    sections:[
      {heading:'收藏和囤積，差在這裡',format:'table',table:TABLE},
      {heading:'為什麼不能放著不管？',format:'bullets',items:[
        '醫師提醒，東西太多容易跌倒、引發火災，還可能吃到過期食物。',
        '有時候囤積和失智、憂鬱有關，需要醫師評估。',
        '治療主要是認知行為治療，幫忙慢慢練習做決定。'
      ]},
      {heading:'家人可以這樣陪',format:'bullets',items:[
        '不要罵、不要趁他不在偷偷丟。',
        '從一個抽屜、一個角落開始，一起決定要留什麼。',
        '先清出走道、移開火源附近的東西。',
        '陪他去看醫生；照顧的人累了也可以打1925安心專線。'
      ]}
    ],
    think_tank_view:'對囤積的人來說，每樣東西都有意義。用陪伴代替責罵，一次一小步，比一次大掃除更有效。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率標明為國外研究，語氣親切、去汙名，附求助專線，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以家中堆滿東西的情境帶出差別、風險與陪伴。', tone:'生活親切', tone_reason:'給子女與家屬閱讀。', to_verify:[]},
    decision_points:[DP_PREV]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'囤積症：收藏與囤積的4個差別',
    update_date:'2026/11/21',
    intro:'囤積症2013年納入DSM-5；國外研究盛行率約2%至6%，老年族群較常見（台灣無本土調查）。',
    sections:[
      {heading:'收藏vs囤積',format:'table',table:TABLE},
      {heading:'風險',format:'bullets',items:[
        '跌倒、火災、衛生與營養問題。',
        '可能與失智、憂鬱相關。'
      ]},
      {heading:'家人做法',format:'bullets',items:[
        '同理不批評，從小區域開始。',
        '先確保安全，鼓勵就醫。'
      ]}
    ],
    think_tank_view:'陪伴與小步驟，比一次清空更能幫助囤積症。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率標明為國外研究，附求助專線，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為差別、風險、做法三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_PREV]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'囤積症', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'囤積症不是懶惰，是需要被理解的心理疾病', primary_visual:'2–6%', secondary_message:'老年族群較常見', action_priority:'同理陪伴、先顧安全、鼓勵就醫'},
    headline_hook:'捨不得丟到無法生活？', headline_main:'收藏 vs 囤積症怎麼分', title_accent:'收藏 vs 囤積症',
    hero_message:'不是懶惰，是心理疾病', hero_support:'2013 年納入 DSM-5，成為獨立診斷',
    knowledge_title:'囤積症的 4 個特徵', knowledge_note:'影響安全與生活，**陪同就醫評估**',
    knowledge_cards:[
      {label:'難以丟棄', icon:'brain', lines:['丟東西會強烈痛苦']},
      {label:'大量堆積', icon:'home', lines:['沒用的東西也留著']},
      {label:'空間失能', icon:'home', lines:['走道、床鋪被占滿']},
      {label:'影響生活', icon:'shield', lines:['安全、衛生、家人關係']}
    ],
    primary_stat:{value:'2–6%', label:'國外研究整理的囤積症盛行率', note:'台灣家醫誌 2025 年綜述｜台灣無本土調查'},
    secondary_stats:[
      {value:'2013 年', label:'納入 DSM-5 診斷'},
      {value:'老年較多', label:'長者風險較高'}
    ],
    action_title:'家人這樣陪',
    action_cards:[
      {key:'理', text:'同理代替批評，不強行清空'},
      {key:'小', text:'從一個抽屜、一個角落開始'},
      {key:'安', text:'先清出走道、遠離火源'},
      {key:'醫', text:'鼓勵就醫評估，照顧者也可撥 1925'}
    ],
    carousel_suggestion:{reason:'若想把差別、風險與陪伴方式分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'捨不得丟？', headline_main:'收藏 vs 囤積症'},
      {layout_type:'knowledge', headline_hook:'長者囤積', headline_main:'跌倒、火災風險'},
      {layout_type:'action', headline_hook:'家人這樣陪', headline_main:'一次一小步'}]},
    hashtags:['囤積症','斷捨離','長者居家安全','心理健康'],
    sources:['台灣家醫誌（2025）','精神科醫師（媒體受訪）'],
    illustration_category:'elderly-care',
    illustration:{topic:'囤積症陪伴', audience:'子女與長輩', scene:'一位成年女兒和年長的母親一起整理一個抽屜，桌上放著分類用的小盒子',
      emotion:'耐心、溫和', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult daughter and her elderly mother sorting through a single drawer together, small sorting boxes on the table, patient and gentle mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['盛行率2%至6%（台灣家醫誌2025年綜述，國外研究）'],
      layout_reason:'選 knowledge：4 個特徵放中段，盛行率與診斷背景退到下方，最後給家人 4 個陪伴行動。',
      tone:'專業易懂', tone_reason:'去汙名、強調陪伴與安全。',
      to_verify:['盛行率為國外研究']},
    decision_points:[Object.assign({}, DP_PREV, {current:'2–6%（國外研究）'})],
    content_check_note:'盛行率標明為國外研究，附求助專線，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'囤積症',
    collect:{
      summary:'囤積症已是獨立的精神疾病診斷，老年族群較常見，常伴隨跌倒、火災與衛生風險；在高齡化社會中，「辨識收藏與囤積、以同理陪伴並先確保安全」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'盛行率約2%至6%（國外研究）：《台灣家醫誌》2025年綜述整理國外研究，囤積症在老年族群較常見，台灣尚無本土盛行率調查。',tag:'市場觀察',source:{name:'台灣家醫誌2025年囤積症綜述',url:JFM}},
        {item:'年度趨勢方向',desc:'2013年納入DSM-5：囤積症被美國精神醫學會列為獨立診斷，綜述指出基層醫師應具備辨識能力、家屬宜以同理心支持病人。',tag:'市場觀察',source:{name:'台灣家醫誌2025年囤積症綜述',url:JFM}},
        {item:'政策動向',desc:'認知行為治療為主要治療：綜述指出目前以認知行為治療為主，必要時輔以藥物處理焦慮與憂鬱（國內無專屬政策或補助方案）。',tag:'市場觀察',source:{name:'台灣家醫誌2025年囤積症綜述',url:JFM}},
        {item:'好發族群年齡層',desc:'長者囤積增加跌倒與火災風險：精神科醫師受訪指出，長者囤積可能伴隨跌倒、火災、環境衛生不佳、誤食過期食物與營養不良。',tag:'市場觀察',source:{name:'TVBS健康2.0：家變資源回收場！台灣人囤積成病',url:TV}}
      ],
      product_view:['機會：長者居家安全（跌倒、火災）與長照議題相關，可作為熟齡保戶關懷內容。','機會：子女世代是溝通對象，可提供陪伴與求助資源。','風險：避免嘲諷或獵奇呈現；不暗示保險可處理居家環境問題。'],
      marketing_view:['機會：年前大掃除是自然的溝通時點（收藏 vs 囤積）。','機會：「一次一小步」的整理方法具實用性。','風險：數據為國外研究，需註明。'],
      alert_level:'low',
      alert_reason:'屬長期心理與高齡議題，無時效性政策事件；適合年前大掃除時溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('囤積症盛行率約2%至6%，老年族群較常見','DATA_FACTUAL_ACCURACY','international_data_as_local',
          '已註明整理自國外研究，但讀者可能直接套用到台灣；台灣尚無本土調查。','low','no',
          null,'no','clarify','屬適用範圍說明。',
          '國外研究顯示囤積症盛行率約2%至6%，老年族群較常見（台灣尚無本土調查）',
          ['國外研究估計大約每100人有2到6人']),
        F('目前主要治療為認知行為治療','MEDICAL_INTERPRETATION','access_unstated',
          '沒有說明在國內可以向哪裡求助（身心科、精神科、臨床心理師），讀者不知道下一步。','low','no',
          null,'no','clarify','補就醫科別即可。',
          '目前主要治療為認知行為治療，可向身心科、精神科或臨床心理師尋求協助'),
        F('不要趁對方不在時強行清空','MEDICAL_INTERPRETATION','missing_rationale',
          '只說不要，未說明原因（可能引發強烈焦慮並更快再囤積），家屬不易理解。','low','no',
          null,'no','clarify','補一句理由即可。',
          '不要趁對方不在時強行清空（可能造成強烈焦慮，反而更快再堆積）',
          ['不要罵、不要趁他不在偷偷丟']),
        F('可能與失智症、巴金森病、憂鬱或焦慮等狀況有關','MEDICAL_INTERPRETATION','missing_urgency',
          '長者新出現的囤積行為可能是失智早期表現，文中未強調需要及早評估。','low','no',
          null,'no','clarify','補一句即可。',
          '可能與失智症、巴金森病、憂鬱或焦慮等狀況有關，長者「新出現」的囤積行為更應及早評估')
      ],
      card:[
        F('國外研究整理的囤積症盛行率','DATA_FACTUAL_ACCURACY','international_data_as_local',
          '主數字為國外研究，卡面已標示，但轉傳時容易被忽略。','low','no',
          null,'no','clarify','已標示。',
          '國外研究的囤積症盛行率（非台灣數據）'),
        F('同理代替批評，不強行清空','MEDICAL_INTERPRETATION','missing_rationale',
          '未說明原因。','low','no',
          null,'no','clarify','補一句即可。',
          '同理代替批評，強行清空易引發焦慮')
      ]
    },
    title_alts:[
      '囤積症：捨不得丟到家裡無法生活，是需要被理解的心理疾病',
      '家裡東西多到走不過去？收藏和囤積症差在哪',
      '長者囤積要注意：收藏與囤積症的4個差別'
    ],
    card_title_alts:[
      ['捨不得丟到無法生活？','收藏 vs 囤積症怎麼分'],
      ['不是懶惰','認識囤積症'],
      ['家人這樣陪','一次一小步']
    ],
    data_addon:[
      '國外研究：70歲以上族群每100人約有6人有囤積症（綜述引述）。',
      '醫師受訪：中老年人發生囤積症的機率約為青壯年的3倍。',
      '綜述建議家屬以同理心支持，避免批評與強迫。'
    ],
    cta:'這個週末陪家中長輩一起整理一個抽屜，先清出家裡的走道；若東西多到影響安全，陪他去身心科或家醫科聊聊。'
  });
})();
