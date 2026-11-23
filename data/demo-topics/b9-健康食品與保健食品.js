/* v6 示範主題：健康食品與保健食品（B9 飲食營養與運動）
   查證日期：2026-11-20。數據來源：食藥署藥物食品安全週報第997期（2024-10-25：健康食品定義、13項保健功效、查驗登記、小綠人標章、選購「停看聽」）、衛福部〈「健康食品」有2款，食品藥物管理署來說分明！〉（個案審查與規格標準兩軌）。
   注意：健康食品核准件數各年口徑不同，未寫件數。
   參考方向：健康智庫〈別搞混！健康食品、保健食品大不同〉2025/06、〈保健食品無法治療癌症 正規治療不可少！〉2024/01。 */
(function(){
  const REFS = [
    {title:'健康食品停看聽（藥物食品安全週報第997期）',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/tc/PublishOtherEpaperContent.aspx?id=1532&tid=4932'},
    {title:'「健康食品」有2款，食品藥物管理署來說分明!',source:'衛生福利部',url:'https://www.mohw.gov.tw/fp-3206-21515-1.html'},
    {title:'健康食品，小綠人說分明！',source:'食藥署食藥好文網',url:'https://article-consumer.fda.gov.tw/subject.aspx?subjectid=1&id=1392&parentid=56'}
  ];
  const TABLE = {headers:['比較項目','健康食品（小綠人）','一般保健食品'], rows:[
    ['政府審查','經安全、保健功效與安定性試驗及專家審查','未經健康食品查驗登記'],
    ['可宣稱保健功效','可，限核定的功效','不可宣稱保健功效'],
    ['包裝辨識','小綠人標章與核准字號','無小綠人標章'],
    ['本質','仍是食品，不能治療疾病','仍是食品，不能治療疾病']
  ]};
  const TAGS = ['健康食品','保健食品','小綠人','食品標示','聰明消費'];

  const PRO = {
    content_type:'健康文章',
    title:'健康食品不等於保健食品：認明小綠人與13項保健功效',
    update_date:'2026/11/20',
    intro:'依食品藥物管理署說明，「健康食品」是指經衛生福利部查驗登記、通過產品安全、保健功效及安定性等科學驗證與專家審查，取得「小綠人標章」的食品，才能標示或廣告經核定的保健功效。目前公告的保健功效共13項。市面上未取得許可的一般「保健食品」，則不得宣稱保健功效。不論哪一種，本質都是食品，不能取代藥物治療疾病。',
    sections:[
      {heading:'健康食品 vs 一般保健食品',format:'table',table:TABLE},
      {heading:'13項健康食品保健功效',format:'bullets',items:[
        '調節血脂、調節血糖、輔助調節血壓、護肝、胃腸功能改善。',
        '免疫調節、輔助調整過敏體質、抗疲勞、延緩衰老。',
        '骨質保健、牙齒保健、不易形成體脂肪、輔助調節血鐵。'
      ]},
      {heading:'食藥署選購「停看聽」',format:'bullets',items:[
        '停：冷靜想想自己是否真的需要、對健康是否有幫助。',
        '看：包裝上的標章與核准字號、警語、注意事項、建議攝取量與保健功效。',
        '聽：醫師或營養師等專業人員的建議。',
        '不是吃越多越健康，正在治療疾病者不可自行停藥改吃健康食品。'
      ]}
    ],
    think_tank_view:'小綠人代表「經過審查、功效有科學根據」，但不代表適合每個人，更不是藥。真正的保健基礎仍是均衡飲食、規律運動與定期健檢；健康食品頂多是輔助，選之前先停、看、聽。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'定義、13項功效與選購建議引自食藥署2024年週報，未推薦特定品牌或產品，已說明健康食品非藥品。',
    ai_rationale:{basis:['13項保健功效（食藥署週報第997期）','小綠人標章與查驗登記制度'],
      layout_reason:'核心是兩者對照，先用比較表區分，再列13項功效，最後給選購三要訣。',
      tone:'專業易懂', tone_reason:'消費判斷需要明確差異。',
      to_verify:['健康食品核准件數各年口徑不同，未引用']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'買保健品前先看包裝：有「小綠人」才是健康食品',
    update_date:'2026/11/20',
    intro:'逛藥妝店常看到各種保健品，但「健康食品」和「保健食品」不一樣。依食藥署說明，只有通過政府審查、包裝上有「小綠人標章」的，才叫健康食品，也才能說自己有保健功效，目前共有13種功效。沒有小綠人的保健食品不能宣稱功效。而且不管哪一種，都只是食品，不能拿來治病。',
    sections:[
      {heading:'兩種差在哪？',format:'table',table:TABLE},
      {heading:'小綠人可以宣稱的13種功效',format:'bullets',items:[
        '顧血脂、血糖、血壓、肝臟、腸胃。',
        '免疫調節、過敏體質、抗疲勞、延緩衰老。',
        '骨質、牙齒、不易形成體脂肪、血鐵。'
      ]},
      {heading:'買之前記住「停看聽」',format:'bullets',items:[
        '停：想想自己真的需要嗎？',
        '看：包裝的小綠人、字號、警語和建議吃多少。',
        '聽：問問醫師或營養師。',
        '吃越多不會越健康，有在吃藥的人別自己停藥。'
      ]}
    ],
    think_tank_view:'送爸媽保健品前，先陪他們問問醫師；比起最貴的那瓶，最適合的才是好禮物。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自食藥署，未推薦特定品牌或產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以逛藥妝店選購情境切入。', tone:'生活親切', tone_reason:'給送禮與自購的一般消費者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'健康食品認明小綠人',
    update_date:'2026/11/20',
    intro:'只有經查驗登記取得小綠人標章者才是健康食品，可宣稱核定的保健功效（共13項）。健康食品不是藥品。',
    sections:[
      {heading:'差異比較',format:'table',table:TABLE},
      {heading:'13項功效',format:'bullets',items:[
        '血脂、血糖、血壓、護肝、胃腸、免疫、過敏、抗疲勞、延緩衰老、骨質、牙齒、體脂肪、血鐵。'
      ]},
      {heading:'停看聽',format:'bullets',items:[
        '停：確認需要。',
        '看：標章字號與警語。',
        '聽：專業建議。'
      ]}
    ],
    think_tank_view:'小綠人是審查標誌，不是萬靈丹。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自食藥署，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為比較、功效、停看聽三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'健康食品與保健食品', output_mode:'single', layout_type:'comparison',
    communication_priority:{primary_message:'有小綠人才是健康食品', primary_visual:'小綠人', secondary_message:'兩者都不是藥', action_priority:'停、看、聽'},
    headline_hook:'健康食品 ≠ 保健食品', headline_main:'有小綠人才能宣稱功效', title_accent:'小綠人',
    comparison:{
      a:{title:'健康食品', subtitle:'有小綠人標章', points:['經政府查驗登記與專家審查','可宣稱核定的保健功效','包裝有核准字號','共 **13 項**保健功效']},
      b:{title:'一般保健食品', subtitle:'無小綠人標章', points:['未經健康食品查驗登記','**不可**宣稱保健功效','購買前看清標示','仍屬一般食品']},
      key_diff:'差在是否通過審查、能否宣稱**保健功效**',
      same:'兩者都是食品，**不能治療疾病**',
      how_to_choose:'停：想需要｜看：標章字號｜聽：醫師營養師'
    },
    hashtags:['健康食品','保健食品','小綠人','聰明消費'],
    sources:['衛生福利部食品藥物管理署'],
    illustration_category:'general',
    illustration:{topic:'辨識健康食品', audience:'一般消費者與送禮者', scene:'一位消費者在藥妝店拿起保健品盒，用手指著包裝上的綠色標章仔細看',
      emotion:'謹慎、聰明消費', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A shopper in a pharmacy holding a supplement box and pointing at a small green certification mark on the package, careful and savvy, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['健康食品定義與13項功效（食藥署週報第997期）'],
      layout_reason:'核心就是兩種產品的對照，選 comparison：左右並列審查、宣稱與辨識方式，中間點出關鍵差異，底部給共同點與選購方法。',
      tone:'專業易懂', tone_reason:'清楚區分兩者。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自食藥署，未推薦特定產品，已說明非藥品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'健康食品與保健食品',
    collect:{
      summary:'只有經衛福部查驗登記、取得小綠人標章的「健康食品」才能宣稱核定的保健功效（目前13項），一般保健食品不得宣稱功效；兩者本質都是食品，不能取代藥物。民眾常混淆兩者，且有長輩以保健品取代治療的風險，是送禮與熟齡族群的溝通重點。',
      objective_data:[
        {item:'政策動向',desc:'13項保健功效：衛福部公告健康食品保健功效共13項，包括調節血脂、胃腸功能改善、護肝、免疫調節、骨質保健、調節血糖、輔助調節血壓等。',tag:'官方統計',source:{name:'食藥署：藥物食品安全週報第997期',url:'https://www.fda.gov.tw/tc/PublishOtherEpaperContent.aspx?id=1532&tid=4932'}},
        {item:'盛行率／發生率',desc:'小綠人標章：只有依規定申請查驗登記並通過審查、取得小綠人標章的食品，才能稱為健康食品並宣稱保健功效。',tag:'官方統計',source:{name:'食藥署：藥物食品安全週報第997期',url:'https://www.fda.gov.tw/tc/PublishOtherEpaperContent.aspx?id=1532&tid=4932'}},
        {item:'年度趨勢方向',desc:'2024年5月修正：健康食品申請許可辦法於2024年5月17日發布修正，使查驗登記管理制度更符合實務需求。',tag:'官方統計',source:{name:'食藥署：藥物食品安全週報第997期',url:'https://www.fda.gov.tw/tc/PublishOtherEpaperContent.aspx?id=1532&tid=4932'}},
        {item:'好發族群年齡層',desc:'兩軌審查：健康食品分為個案審查與規格標準兩種核准途徑，許可字號不同，消費者可依字號查詢。',tag:'官方統計',source:{name:'衛福部：「健康食品」有2款',url:'https://www.mohw.gov.tw/fp-3206-21515-1.html'}}
      ],
      product_view:['機會：熟齡保戶常購買保健品，正確辨識是實用的關懷內容。','機會：可提醒「保健品不能取代治療」，與健康管理服務結合。','風險：不得推薦或銷售特定保健品；避免任何療效暗示。'],
      marketing_view:['機會：母親節、父親節、春節送禮季是溝通時點。','機會：「有小綠人才是健康食品」容易記。','風險：避免與特定品牌或通路合作造成推薦印象。'],
      alert_level:'low',
      alert_reason:'屬長期消費者保護議題；送禮檔期可加強溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('正在治療疾病者不可自行停藥改吃健康食品','MEDICAL_INTERPRETATION','missing_interaction_warning',
          '只提醒不可停藥，未提醒部分保健成分可能與藥物交互作用（如抗凝血藥），同時服用前也應諮詢醫師或藥師。','low','no',
          null,'no','clarify','屬用藥安全完整度。',
          '正在治療疾病者不可自行停藥改吃健康食品，同時服用前也應詢問醫師或藥師',
          ['有在吃藥的人別自己停藥']),
        F('目前公告的保健功效共13項','CURRENCY_TIMELINESS','figure_subject_to_change',
          '保健功效項目由衛福部公告，可能隨評估方法增修；文中宜標示資料時間點（2024年10月）。','low','no',
          null,'no','clarify','屬時間點標示。',
          '截至2024年10月，公告的保健功效共13項',
          ['目前共有13種功效','可宣稱核定的保健功效（共13項）']),
        F('沒有小綠人的保健食品不能宣稱功效','TERMINOLOGY_LANGUAGE','overgeneralization',
          '一般食品仍可依規定做營養素功能敘述（如「鈣有助於骨骼生長」），「不能宣稱功效」的說法過於概括。','low','yes',
          '食藥署對一般食品營養素功能敘述的規範。','no','confirm','屬法規細節。',
          '沒有小綠人的保健食品不能宣稱健康食品的保健功效')
      ],
      card:[
        F('**不可**宣稱保健功效','TERMINOLOGY_LANGUAGE','overgeneralization',
          '一般食品仍可做營養素功能敘述，「不可宣稱」宜限定為健康食品保健功效。','low','no',
          null,'no','clarify','屬法規細節。',
          '**不可**宣稱健康食品保健功效'),
        F('兩者都是食品，**不能治療疾病**','LEGAL_COMPLIANCE','missing_medication_warning',
          '可再提醒正在服藥者勿自行停藥，避免讀者以為只要不當藥吃即可。','low','no',
          null,'no','clarify','屬補充提醒。',
          '都是食品、不能治病，服藥者勿自行停藥')
      ]
    },
    title_alts:[
      '健康食品不等於保健食品：認明小綠人與13項保健功效',
      '買保健品前先看包裝：有「小綠人」才是健康食品',
      '保健品怎麼選？食藥署「停看聽」三要訣'
    ],
    card_title_alts:[
      ['健康食品 ≠ 保健食品','有小綠人才能宣稱功效'],
      ['買保健品前','先找小綠人'],
      ['停、看、聽','聰明選健康食品']
    ],
    data_addon:[
      '健康食品的保健功效是增進健康、減少疾病危害風險，非治療、矯正疾病的醫療效能（食藥署）。',
      '查驗登記須通過產品安全、保健功效及安定性試驗等科學驗證。',
      '健康食品申請許可辦法於2024年5月17日修正發布。'
    ],
    cta:'這週翻翻家裡的保健品，看看包裝上有沒有小綠人與核准字號，正在吃藥的家人記得先問醫師。'
  });
})();
