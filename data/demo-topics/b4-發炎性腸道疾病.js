/* v6 示範主題：發炎性腸道疾病（B4 消化・肝膽・呼吸）
   查證日期：2026-11-20。數據來源：衛福部〈健保通過治療新生兒呼吸窘迫、SMA及自體免疫相關疾病之藥品〉（113/08/16）、
   健保署〈公告修訂克隆氏症及潰瘍性結腸炎之藥品給付規定〉（113年5月）、醫藥品查驗中心醫療科技評估報告補充資料（建議者推估2024-2028年使用生物製劑人數）。
   註：國內克隆氏症、潰瘍性結腸炎總病人數查無官方公布統計，本題只用標明「推估」的生物製劑使用人數。
   參考方向：健康智庫〈腸胃道健康－發炎性腸道疾病〉2026/05、〈潰瘍性結腸炎〉2022/09。 */
(function(){
  const REFS = [
    {title:'健保通過治療新生兒呼吸窘迫、SMA及自體免疫相關疾病之藥品',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-79655-1.html'},
    {title:'公告修訂克隆氏症及潰瘍性結腸炎之藥品給付規定',source:'衛生福利部中央健康保險署',url:'https://www.nhi.gov.tw/ch/cp-15106-7ea85-3258-1.html'},
    {title:'醫療科技評估報告補充資料：成人潰瘍性結腸炎與成人克隆氏症健保藥品給付規範',source:'財團法人醫藥品查驗中心（健保署網站）',url:'https://www.nhi.gov.tw/ch/dl-83328-5ce6e1de781f49fb964d8a11a4d5b46e-1.pdf'},
    {title:'重大傷病專區：申請須知及文件下載',source:'衛生福利部中央健康保險署',url:'https://www.nhi.gov.tw/ch/cp-6091-08ad9-2957-1.html'}
  ];
  const TABLE = {headers:['','潰瘍性結腸炎','克隆氏症'], rows:[
    ['發炎位置','大腸與直腸，由直腸往上連續延伸','口腔到肛門都可能，常見於小腸末端與大腸，呈跳躍分布'],
    ['發炎深度','黏膜層為主','可侵犯腸壁全層'],
    ['常見症狀','腹瀉、血便或黏液便、裡急後重','腹痛、腹瀉、體重減輕，可能有肛門廔管'],
    ['可能併發症','長期控制不佳增加大腸癌風險','腸道狹窄、廔管、膿瘍，亦可能增加癌症風險']
  ]};
  const TAGS = ['發炎性腸道疾病','克隆氏症','潰瘍性結腸炎','重大傷病','腸胃健康'];

  const DP_EST = {id:'dp-ibd-est', type:'data_scope', title:'病人數只有推估值',
    desc:'國內克隆氏症與潰瘍性結腸炎總病人數查無官方公布統計。文中引用的人數，是醫藥品查驗中心評估報告中「建議者」對2024-2028年領有重大傷病卡且使用生物製劑病人數的推估，不代表全體病人。',
    current:'使用生物製劑的潰瘍性結腸炎病人，推估由第一年約1,435人增至第五年約2,233人',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'1,435→2,233人', value:'潰瘍性結腸炎', note:'2024-2028年推估，領重大傷病卡且用生物製劑'},
      {label:'770→1,482人', value:'克隆氏症', note:'同一報告推估'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'長期腹瀉、血便別輕忽：認識發炎性腸道疾病與治療新進展',
    update_date:'2026/11/20',
    intro:'發炎性腸道疾病（IBD）是腸道長期反覆發炎的慢性疾病，主要包括潰瘍性結腸炎與克隆氏症，好發於年輕族群。衛生福利部引用台灣發炎性腸道疾病學會資料指出，病情未受良好控制時，長期併發症包括上皮細胞異常增生與大腸癌。醫藥品查驗中心評估報告中的建議者推估，領有重大傷病卡且使用生物製劑的潰瘍性結腸炎病人，將由第一年約1,435人增至第五年約2,233人。',
    sections:[
      {heading:'潰瘍性結腸炎與克隆氏症的差異',format:'table',table:TABLE},
      {heading:'這些症狀持續要就醫',format:'bullets',items:[
        '腹瀉超過數週、半夜因腹瀉醒來，或大便帶血、黏液。',
        '反覆腹痛、不明原因體重減輕、發燒或貧血。',
        '肛門周圍反覆膿瘍或廔管。',
        '診斷需結合大腸鏡、組織切片、影像與發炎指標，由腸胃科醫師綜合判斷。'
      ]},
      {heading:'治療與健保資源',format:'bullets',items:[
        '治療目標是控制發炎、減少復發，藥物包括5-胺基水楊酸、類固醇、免疫調節劑與生物製劑，須依醫囑規律用藥，不可自行停藥。',
        '符合條件者可申請健保重大傷病證明。',
        '健保署113年擴增給付規定：病人連續2次因療程結束暫緩用藥而復發，且第2次復發於藥效終止後3個月內，可持續使用生物製劑；同年並收載新藥用於克隆氏症。'
      ]}
    ],
    think_tank_view:'發炎性腸道疾病常發生在求學、就業、成家的人生階段，反覆腹瀉與就醫對生活影響很大。好消息是治療選擇越來越多，健保給付也逐步放寬。關鍵在於不要把長期腹瀉、血便當成單純的腸胃不好，及早確診、規律治療與定期大腸鏡追蹤，才能降低併發症風險。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'併發症敘述引自衛福部轉述學會資料，人數標明為評估報告建議者推估，給付規定引自健保署，未使用療效保證用語，未涉及具體藥品商品名。',
    ai_rationale:{basis:['併發症與給付擴增取自衛福部113/08/16新聞','生物製劑使用人數取自醫藥品查驗中心評估報告（建議者推估）'],
      layout_reason:'以表格對照兩種疾病差異，再說明就醫警訊與治療資源。',
      tone:'專業易懂', tone_reason:'疾病資訊需清楚、避免恐慌。',
      to_verify:['國內總病人數查無官方統計','重大傷病申請條件以健保署最新規定為準']},
    decision_points:[DP_EST]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'常常拉肚子、還有血便？可能不只是腸胃不好',
    update_date:'2026/11/20',
    intro:'發炎性腸道疾病是腸道一直反覆發炎的慢性病，常見的是潰瘍性結腸炎和克隆氏症，很多病友年紀輕輕就發病。衛福部提醒，病情沒有控制好，長期可能增加大腸癌等併發症風險。好消息是，現在治療選擇變多，健保給付也一直在放寬。',
    sections:[
      {heading:'兩種常見類型',format:'table',table:TABLE},
      {heading:'有這些狀況要看醫生',format:'bullets',items:[
        '拉肚子拉了好幾週，半夜也會跑廁所。',
        '大便有血或黏液，肚子常痛。',
        '沒減肥卻一直變瘦，或常常發燒、貧血。'
      ]},
      {heading:'確診後別擔心',format:'bullets',items:[
        '照醫師指示規律吃藥，不要覺得好了就自己停。',
        '符合條件可以申請健保重大傷病證明。',
        '健保113年放寬生物製劑給付，復發的病友有更多治療機會。'
      ]}
    ],
    think_tank_view:'長期腹瀉很容易被當成「吃壞肚子」或壓力大。如果你或家人一直好不了，特別是有血便，記得掛腸胃科做檢查。確診後規律治療，多數病友都能回到正常的工作和生活。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料引自衛福部與健保署公開資訊，未使用療效保證用語，未涉及具體藥品商品名。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'從長期腹瀉的日常困擾切入。', tone:'生活親切', tone_reason:'給年輕讀者與家人閱讀。', to_verify:['重大傷病申請條件']},
    decision_points:[DP_EST]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'發炎性腸道疾病：長期腹瀉血便要就醫',
    update_date:'2026/11/20',
    intro:'潰瘍性結腸炎與克隆氏症是腸道慢性反覆發炎疾病，控制不佳長期可能增加大腸癌風險（衛福部引學會資料）。',
    sections:[
      {heading:'兩種類型',format:'table',table:TABLE},
      {heading:'就醫警訊',format:'bullets',items:[
        '腹瀉數週、血便、體重減輕。'
      ]},
      {heading:'治療資源',format:'bullets',items:[
        '規律用藥；符合條件申請重大傷病。'
      ]}
    ],
    think_tank_view:'及早確診、規律治療與定期追蹤，是控制發炎性腸道疾病的三個關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料引自衛福部與健保署公開資訊，未使用療效保證用語，未涉及具體藥品商品名。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為類型、警訊、資源三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['重大傷病申請條件']},
    decision_points:[DP_EST]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'發炎性腸道疾病', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'長期腹瀉、血便不只是腸胃不好', primary_visual:'4 大警訊', secondary_message:'控制不佳長期增加大腸癌風險', action_priority:'及早就醫、規律治療'},
    headline_hook:'常拉肚子還有血便？', headline_main:'發炎性腸道疾病 4 大警訊', title_accent:'4 大警訊',
    hero_message:'腸道慢性反覆發炎', hero_support:'含潰瘍性結腸炎與克隆氏症，好發於年輕族群',
    knowledge_title:'就醫警訊', knowledge_note:'症狀**持續數週**，請掛腸胃科評估',
    knowledge_cards:[
      {label:'長期腹瀉', lines:['持續數週','半夜也要跑廁所']},
      {label:'血便黏液', lines:['大便帶血','或有黏液']},
      {label:'腹痛', lines:['反覆腹痛','排便後未必緩解']},
      {label:'體重減輕', lines:['不明原因變瘦','可能發燒、貧血']}
    ],
    action_title:'確診後這樣做',
    action_cards:[
      {key:'藥', text:'依醫囑規律用藥，不自行停藥'},
      {key:'追', text:'定期回診與大腸鏡追蹤'},
      {key:'申', text:'符合條件申請健保重大傷病'},
      {key:'吃', text:'急性期依醫師建議調整飲食'}
    ],
    carousel_suggestion:{reason:'若想把警訊、兩種類型差異與治療資源分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'常拉肚子還有血便？', headline_main:'4 大就醫警訊'},
      {layout_type:'comparison', headline_hook:'兩種類型', headline_main:'潰瘍性結腸炎 vs 克隆氏症'},
      {layout_type:'action', headline_hook:'確診後', headline_main:'規律治療、定期追蹤'}]},
    hashtags:['發炎性腸道疾病','克隆氏症','潰瘍性結腸炎','腸胃健康'],
    sources:['衛生福利部','衛生福利部中央健康保險署'],
    illustration_category:'general',
    illustration:{topic:'發炎性腸道疾病', audience:'年輕上班族與學生', scene:'年輕人在診間與腸胃科醫師討論檢查報告',
      emotion:'安心、被理解', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young adult discussing test results with a gastroenterologist in a clinic, reassured mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['併發症敘述取自衛福部113/08/16新聞','給付規定取自健保署113年公告'],
      layout_reason:'國內缺乏可靠的官方病人數，核心是「認得警訊、及早就醫」，選 knowledge：4 個警訊當主角，不放主數字。',
      tone:'專業易懂', tone_reason:'避免讓讀者自我診斷，引導就醫。',
      to_verify:['卡面未放人數，因查無官方統計']},
    content_check_note:'資料引自衛福部與健保署公開資訊，未放未經查證的人數，未使用療效保證用語，未涉及具體藥品商品名。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'發炎性腸道疾病',
    collect:{
      summary:'發炎性腸道疾病（潰瘍性結腸炎、克隆氏症）好發於年輕族群，控制不佳長期可能增加大腸癌風險；健保113年擴增生物製劑給付並收載新藥，評估報告推估使用生物製劑的病人數逐年增加，為重大傷病範圍內的慢性病議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約2200人（第五年推估）：醫藥品查驗中心評估報告中，建議者推估2024至2028年領有重大傷病卡且使用生物製劑的潰瘍性結腸炎病人，由第一年約1,435人增至第五年約2,233人。',tag:'推估',source:{name:'醫藥品查驗中心：醫療科技評估報告補充資料',url:'https://www.nhi.gov.tw/ch/dl-83328-5ce6e1de781f49fb964d8a11a4d5b46e-1.pdf'}},
        {item:'年度趨勢方向',desc:'複合成長率17.8%（推估）：同一報告引述過去評估，克隆氏症與潰瘍性結腸炎使用生物製劑人數的複合成長率分別約為17.8%與11.7%。',tag:'推估',source:{name:'醫藥品查驗中心：醫療科技評估報告補充資料',url:'https://www.nhi.gov.tw/ch/dl-83328-5ce6e1de781f49fb964d8a11a4d5b46e-1.pdf'}},
        {item:'政策動向',desc:'連續2次復發可持續用藥：健保署113年擴增克隆氏症及潰瘍性結腸炎用藥給付規定，病人因療程結束暫緩用藥而連續2次復發，且第2次於藥效終止後3個月內發生者，可持續使用，並收載新藥用於克隆氏症。',tag:'官方統計',source:{name:'衛生福利部：健保通過治療自體免疫相關疾病之藥品',url:'https://www.mohw.gov.tw/cp-16-79655-1.html'}},
        {item:'好發族群年齡層',desc:'長期併發大腸癌風險：衛福部引用台灣發炎性腸道疾病學會資料，克隆氏症及潰瘍性結腸炎未受良好控制時，長期併發症為上皮細胞異常增生及大腸癌。',tag:'官方統計',source:{name:'衛生福利部：健保通過治療自體免疫相關疾病之藥品',url:'https://www.mohw.gov.tw/cp-16-79655-1.html'}}
      ],
      product_view:['機會：發炎性腸道疾病屬慢性病且可申請重大傷病，可說明長期醫療費用與保障規劃。','機會：年輕族群對腸胃健康關注度高，可作為健康知識內容的切入點。','風險：避免暗示益生菌或保健品可治療發炎性腸道疾病；用藥須遵醫囑。'],
      marketing_view:['機會：每年5月19日世界發炎性腸道疾病日是固定溝通檔期。','機會：以「不只是腸胃不好」打破迷思，對年輕上班族有共鳴。','風險：人數僅有推估值，傳播時不宜放大數字。'],
      alert_level:'low',
      alert_reason:'屬慢性病議題，無急迫時效事件；適合在5月世界發炎性腸道疾病日前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('醫藥品查驗中心評估報告中的建議者推估','SOURCE_EVIDENCE','industry_estimate',
          '推估由申請給付的「建議者」（通常為藥廠）提出，屬利害關係人估計，文中未說明這層性質，讀者可能視為官方統計。','medium','yes',
          '健保署或衛福部是否公布克隆氏症、潰瘍性結腸炎重大傷病領證數或就醫人數。','yes','confirm','國內總病人數查無官方統計。',
          '醫藥品查驗中心評估報告中，由申請給付的建議者（藥廠）提出的推估'),
        F('好發於年輕族群','DATA_FACTUAL_ACCURACY','unsourced_claim',
          '好發年齡未附國內資料來源，文中其他數據均有出處，這句缺乏依據。','low','no',
          null,'no','clarify','屬出處補充。',
          '常見於青壯年（依醫學會衛教資料）',
          ['很多病友年紀輕輕就發病']),
        F('多數病友都能回到正常的工作和生活','MEDICAL_INTERPRETATION','outcome_generalization',
          '「多數」缺乏數據支持，個別病程差異大，可能形成過高期待。','low','no',
          null,'no','clarify','屬預後表達。',
          '許多病友都能維持工作和生活'),
        F('健保113年放寬生物製劑給付，復發的病友有更多治療機會','REGULATORY_COMPLIANCE','coverage_condition',
          '放寬條件為「連續2次因療程結束暫緩用藥而復發，且第2次復發於藥效終止後3個月內」，文中簡化為「復發的病友」，可能讓所有復發者以為都符合。','low','no',
          null,'no','clarify','屬給付條件說明。',
          '健保113年放寬生物製劑給付，符合特定復發條件的病友可持續用藥')
      ],
      card:[
        F('含潰瘍性結腸炎與克隆氏症，好發於年輕族群','DATA_FACTUAL_ACCURACY','unsourced_claim',
          '好發年齡未附來源，卡面 sources 未涵蓋這項說法。','low','no',
          null,'no','clarify','屬出處補充。',
          '含潰瘍性結腸炎與克隆氏症，常見於青壯年'),
        F('急性期依醫師建議調整飲食','MEDICAL_INTERPRETATION','vague_term',
          '未說明調整方向（如低渣飲食），讀者難以執行。','low','no',
          null,'no','clarify','飲食建議需個別化。',
          '急性期依醫師或營養師建議採低渣飲食')
      ]
    },
    title_alts:[
      '長期腹瀉、血便別輕忽：認識發炎性腸道疾病與治療新進展',
      '常常拉肚子、還有血便？可能不只是腸胃不好',
      '潰瘍性結腸炎與克隆氏症：症狀差異、就醫警訊與健保資源'
    ],
    card_title_alts:[
      ['常拉肚子還有血便？','發炎性腸道疾病 4 大警訊'],
      ['不只是腸胃不好','認識發炎性腸道疾病'],
      ['潰瘍性結腸炎 vs 克隆氏症','差異一次看']
    ],
    data_addon:[
      '同一評估報告推估，使用生物製劑的克隆氏症病人由第一年約770人增至第五年約1,482人。',
      '健保署113年5月公告修訂克隆氏症及潰瘍性結腸炎之藥品給付規定。',
      '診斷需結合大腸鏡、組織切片、影像與糞便發炎指標。'
    ],
    cta:'如果腹瀉、血便已經持續好幾週，這週就掛腸胃科，並把排便次數、有無血便與體重變化記錄下來帶去看診。'
  });
})();
