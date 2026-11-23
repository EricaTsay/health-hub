/* v6 示範主題：中醫治療（針灸、中藥、傷科）（B12 第三輪擴充）
   查證日期：2026-11-23。數據來源：健保署〈114年中醫門診總額整體性醫療品質資訊公開報告（民眾版）〉115年7月（平均就診次數6.69次、雲端查詢率78.78%、針傷科每月>20次比率0.0044%）、
   衛福部中醫藥司〈中西藥併用資訊報你知〉（107-08-01建檔、112-07-05更新：併用配對556筆、研究資料3,085筆、中藥用藥安全五撇步）、
   衛福部中醫藥司110-05-19新聞稿（臺灣清冠一號濃縮製劑專案製造、須由中醫師處方、適用新冠肺炎無症狀帶原與初發作症狀者、核准期間至指揮中心解散日止）。
   清冠一號專案製造的現行效力未查到，文中只描述當時核准內容。不寫療效。
   參考方向：健康智庫〈認識中醫藥－針灸〉〈認識中醫藥－中藥〉〈認識中醫藥－傷科手法治療〉2024/03、〈「清冠一號」介紹〉2022/05。 */
(function(){
  const REFS = [
    {title:'114年中醫門診總額整體性醫療品質資訊公開報告（民眾版）',source:'衛生福利部中央健康保險署',url:'https://www.nhi.gov.tw/ch/dl-100462-1eff42ec96f442deba2b97dbbf263323-1.pdf'},
    {title:'中西藥併用資訊報你知－中西藥併用諮詢資料庫',source:'衛生福利部中醫藥司',url:'https://mohw.gov.tw/cp-2704-43040-1.html'},
    {title:'衛生福利部核准「臺灣清冠一號濃縮製劑」專案製造，應經中醫師處方',source:'衛生福利部中醫藥司',url:'https://mohw.gov.tw/cp-2704-60830-1.html'},
    {title:'用藥諮詢資料庫',source:'衛生福利部食品藥物管理署',url:'https://mcp.fda.gov.tw/'}
  ];
  const TABLE = {headers:['中醫治療','說明','用藥與安全提醒'], rows:[
    ['中藥','健保給付的多為GMP藥廠生產的濃縮中藥（科學中藥），由中醫師處方','選有衛福部許可證字號的中藥，勿自行抓藥或服用偏方'],
    ['針灸','以針刺或溫灸刺激特定穴位','告知是否服用抗凝血藥、有無出血傾向或懷孕'],
    ['傷科','以手法處理筋骨扭挫傷、脫臼整復等','骨折、急性嚴重外傷應先就西醫急診']
  ]};
  const TAGS = ['中醫','針灸','中藥','中西藥併用','用藥安全'];

  const DP_NRICM = {id:'dp-tcm-nricm', type:'policy_status', title:'清冠一號的專案製造效力需確認',
    desc:'衛福部110年核准臺灣清冠一號濃縮製劑專案製造，核准期間至中央流行疫情指揮中心解散日止。目前是否仍在有效期間未查到，AI 沒有替你判斷，文中只描述當時核准內容。',
    current:'專案製造，須由中醫師處方使用',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'110年核准', value:'專案製造', note:'須中醫師處方，期間至指揮中心解散日（目前採用描述）'},
      {label:'現況', value:'待確認', note:'請以中醫藥司最新公告為準'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'看中醫前先知道：健保給付範圍與中西藥併用安全',
    update_date:'2026/11/23',
    intro:'中藥、針灸與傷科是國人常用的中醫治療。依健保署〈114年中醫門診總額品質報告〉，114年使用中醫門診的民眾平均一年就診6.69次，較113年的6.56次略增。中醫屬正式醫療，健保給付由中醫師處方的中藥與針灸、傷科處置；但不論中藥或西藥都有交互作用的可能，同時吃中西藥的人，更需要讓醫師與藥師掌握完整用藥。',
    sections:[
      {heading:'三種常見中醫治療',format:'table',table:TABLE},
      {heading:'中西藥併用的安全原則',format:'bullets',items:[
        '就醫時主動告訴中醫師與西醫師正在吃的所有藥品與保健食品。',
        '衛福部中醫藥司建置的中西藥併用諮詢資料庫收錄556筆併用配對，已整合至食藥署「用藥諮詢資料庫」，可查詢或請藥師協助。',
        '服用抗凝血劑、降血糖或降血壓藥物者，不要自行決定中西藥間隔時間，應詢問醫師或藥師。',
        '114年中醫院所使用健保醫療資訊雲端查詢系統的比率為78.78%，看診時可請醫師查詢你的西醫用藥紀錄。'
      ]},
      {heading:'清冠一號怎麼看',format:'bullets',items:[
        '衛福部110年5月核准「臺灣清冠一號濃縮製劑」專案製造，類別為須由中醫師處方使用。',
        '中醫藥司當時說明可用於新冠肺炎無症狀帶原與初發作症狀者，非預防保健使用。',
        '專案製造期間至中央流行疫情指揮中心解散日止，民眾不要自行購買服用。'
      ]}
    ],
    think_tank_view:'中醫是不少保戶日常就醫的一環，重點不在中西醫選邊，而在「讓每位醫師都知道你吃了什麼」。只要遵循處方、選用有許可證的藥品，並在就醫時主動說明用藥，就能降低併用風險。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'就醫數據引自健保署114年報告；清冠一號只描述衛福部核准內容與處方限制，未宣稱任何療效；未推薦特定院所或藥品。',
    ai_rationale:{basis:['平均就診次數與雲端查詢率取自健保署114年品質報告','中西藥併用資料庫與清冠一號內容取自中醫藥司'],
      layout_reason:'先用表格介紹三種治療與各自的安全提醒，再講中西藥併用，最後用官方核准內容說明清冠一號。',
      tone:'專業易懂', tone_reason:'涉及用藥安全與法規，需精確。',
      to_verify:['清冠一號專案製造目前是否仍有效','中醫門診全年不重複就醫人數（未取得）']},
    decision_points:[DP_NRICM]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'中藥西藥一起吃安全嗎？看中醫前的用藥小提醒',
    update_date:'2026/11/23',
    intro:'扭到腳去推拿、調體質吃中藥，中醫是很多人生活中的一部分。健保署統計，114年有看中醫的人平均一年看了6.69次。看中醫很方便，但如果你同時也在吃西藥，記得讓每位醫師都知道，才能吃得安心。',
    sections:[
      {heading:'中藥、針灸、傷科差在哪',format:'table',table:TABLE},
      {heading:'中西藥一起吃要注意',format:'bullets',items:[
        '看病時把正在吃的藥、保健食品都說出來。',
        '可以上食藥署「用藥諮詢資料庫」查詢，或直接問藥師。',
        '吃抗凝血、降血糖、降血壓藥的人，間隔多久先問醫師。',
        '請中醫師用健保雲端查一下你的西醫用藥紀錄。'
      ]},
      {heading:'清冠一號不能自己買',format:'bullets',items:[
        '衛福部110年核准專案製造，一定要中醫師開處方。',
        '當時說明用於新冠無症狀或剛發病的人，不是保健品。',
        '別在網路上自己買來吃。'
      ]}
    ],
    think_tank_view:'中醫西醫都可以看，只要記得一件事：讓每位醫師都知道你吃了什麼。這個小動作，就是最好的用藥保護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'就醫數據引自健保署；清冠一號只描述官方核准內容，未宣稱療效。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以民眾常見情境帶入，依治療種類、併用注意、清冠一號排列。', tone:'生活親切', tone_reason:'給一般民眾與中高齡讀者。', to_verify:['清冠一號專案製造現況']},
    decision_points:[DP_NRICM]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'看中醫3提醒：處方、許可證、告知用藥',
    update_date:'2026/11/23',
    intro:'健保署統計，114年使用中醫門診者平均一年就診6.69次。中西藥併用前，先讓醫師與藥師掌握完整用藥。',
    sections:[
      {heading:'三種治療',format:'table',table:TABLE},
      {heading:'併用安全',format:'bullets',items:[
        '主動告知所有用藥與保健食品。',
        '可查食藥署用藥諮詢資料庫。'
      ]},
      {heading:'清冠一號',format:'bullets',items:[
        '專案製造，須中醫師處方。',
        '非預防保健使用，勿自行購買。'
      ]}
    ],
    think_tank_view:'中西醫都能看，關鍵是讓每位醫師知道你吃了什麼。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自健保署，清冠一號只描述官方核准內容。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為治療、併用、清冠一號三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:['清冠一號專案製造現況']},
    decision_points:[DP_NRICM]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'中醫治療（針灸、中藥、傷科）', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'中西藥併用，先讓醫師知道你吃了什麼', primary_visual:'平均一年 6.69 次', secondary_message:'有 556 筆中西藥併用配對可查', action_priority:'看中醫前 4 個提醒'},
    headline_hook:'中藥西藥一起吃？', headline_main:'看中醫前先做 4 件事', title_accent:'4 件事',
    hero_message:'平均一年看中醫 6.69 次', hero_support:'健保署 114 年中醫門診品質報告',
    primary_stat:{value:'6.69 次', label:'114 年中醫門診使用者平均就診', note:'較 113 年 6.56 次略增'},
    action_title:'看中醫這樣做',
    action_cards:[
      {key:'說', text:'主動告知正在吃的西藥與保健食品'},
      {key:'查', text:'請醫師查健保雲端用藥紀錄'},
      {key:'選', text:'選有衛福部許可證字號的中藥'},
      {key:'問', text:'服抗凝血等藥物，間隔先問藥師'}
    ],
    notice:'清冠一號須**中醫師處方**，勿自行購買服用。',
    carousel_suggestion:{reason:'若想把治療種類、併用安全與清冠一號分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'中醫三種治療', headline_main:'中藥、針灸、傷科'},
      {layout_type:'action', headline_hook:'中西藥併用', headline_main:'先讓醫師知道'},
      {layout_type:'knowledge', headline_hook:'清冠一號', headline_main:'須中醫師處方'}]},
    hashtags:['中醫','中藥','中西藥併用','用藥安全'],
    sources:['衛生福利部中央健康保險署','衛生福利部中醫藥司'],
    illustration_category:'general',
    illustration:{topic:'中醫看診與用藥諮詢', audience:'同時看中醫與西醫的成年人', scene:'一位中年民眾在中醫診間拿出藥袋，向醫師說明正在服用的西藥',
      emotion:'安心、信任', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged patient showing medicine bags to a traditional Chinese medicine doctor in a clinic, explaining current medications, reassured and trusting mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['平均就診次數取自健保署114年報告','併用資料庫取自中醫藥司'],
      layout_reason:'核心訊息是看中醫前的用藥安全行動，選 action：4 個行動當主角。',
      tone:'專業易懂', tone_reason:'用藥安全需清楚可執行。',
      to_verify:['清冠一號專案製造現況']},
    decision_points:[Object.assign({}, DP_NRICM, {current:'110 年核准專案製造｜須中醫師處方'})],
    content_check_note:'數據引自健保署，清冠一號只描述官方核准內容，未宣稱療效。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'中醫治療（針灸、中藥、傷科）',
    collect:{
      summary:'中醫門診在國人就醫中占有穩定比重，114年使用者平均就診次數續增；同時服用中西藥的人多，中西藥併用安全與健保給付範圍是保戶最常問的問題，清冠一號等產品也需依官方核准內容溝通。',
      objective_data:[
        {item:'盛行率／發生率',desc:'6.69次：114年使用中醫門診者平均一年中醫就診6.69次，較113年6.56次上升（健保署中醫門診總額品質報告）。全年不重複就醫人數本報告未列。',tag:'官方統計',source:{name:'健保署：114年中醫門診總額品質資訊公開報告',url:'https://www.nhi.gov.tw/ch/dl-100462-1eff42ec96f442deba2b97dbbf263323-1.pdf'}},
        {item:'年度趨勢方向',desc:'78.78%：114年中醫院所使用健保醫療資訊雲端查詢系統查詢病人用藥紀錄的比率，較113年75.87%上升，有助避免中西藥重複或交互作用。',tag:'官方統計',source:{name:'健保署：114年中醫門診總額品質資訊公開報告',url:'https://www.nhi.gov.tw/ch/dl-100462-1eff42ec96f442deba2b97dbbf263323-1.pdf'}},
        {item:'政策動向',desc:'556筆中西藥併用配對：衛福部中醫藥司中西藥併用諮詢資料庫另收錄研究資料3,085筆、中醫典籍配伍禁忌475筆，已整合至食藥署用藥諮詢資料庫。',tag:'官方統計',source:{name:'衛福部中醫藥司：中西藥併用資訊報你知',url:'https://mohw.gov.tw/cp-2704-43040-1.html'}},
        {item:'好發族群年齡層',desc:'110年5月衛福部核准臺灣清冠一號濃縮製劑專案製造，類別為須由中醫師處方使用，核准期間至中央流行疫情指揮中心解散日止。',tag:'官方統計',source:{name:'衛福部中醫藥司：臺灣清冠一號專案製造',url:'https://mohw.gov.tw/cp-2704-60830-1.html'}}
      ],
      product_view:['機會：部分醫療保單有中醫門診或傷科給付，可協助保戶理解條款與健保給付的差異。','機會：「看中醫前的用藥提醒」可作為保戶服務內容。','風險：不得宣稱中醫療效或推薦特定院所、藥品；清冠一號只能依官方核准內容描述。'],
      marketing_view:['機會：中高齡保戶中西醫併看普遍，用藥安全是實用議題。','機會：可搭配健保雲端查詢與用藥諮詢資料庫等官方工具。','風險：避免「調體質」「根治」等療效暗示，不得引用個案見證。'],
      alert_level:'low',
      alert_reason:'屬常態就醫議題，無即時事件；清冠一號專案製造現況需確認後再溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('健保給付由中醫師處方的中藥與針灸、傷科處置','SOURCE_EVIDENCE','claim_without_source',
          '健保給付範圍的描述未附健保署給付規定出處，參考資料中的品質報告未列給付項目。','low','yes',
          '健保署中醫門診醫療給付規定。','no','clarify','建議補健保署中醫支付標準出處。',
          '健保給付由中醫師處方的中藥與針灸、傷科處置（依健保署中醫門診支付規定，部分項目有次數限制）'),
        F('中醫藥司當時說明可用於新冠肺炎無症狀帶原與初發作症狀者','COMPLIANCE_LEGAL','product_claim',
          '清冠一號的用途說明容易被讀者理解為療效保證，且核准狀態可能已隨指揮中心解散而改變。','medium','yes',
          '中醫藥司對專案製造期滿後的最新公告。','yes','confirm','法規狀態會變動。',
          '中醫藥司110年核准時說明的適用對象為新冠肺炎無症狀帶原與初發作症狀者，目前核准狀態請以中醫藥司公告為準',
          ['當時說明用於新冠無症狀或剛發病的人']),
        F('就能降低併用風險','MEDICAL_INTERPRETATION','overreassurance',
          '容易讓讀者以為照做就沒有風險，部分代謝層面的交互作用無法單靠告知或間隔避免。','low','no',
          null,'no','revise','避免過度安心的表述。',
          '有助降低部分併用風險'),
        F('114年使用中醫門診的民眾平均一年就診6.69次','DATA_FACTUAL_ACCURACY','metric_definition',
          '此指標由每季平均就診次數加總而來，文中未說明計算方式，讀者可能誤解為每位民眾實際就診次數。','low','no',
          null,'no','clarify','指標定義見健保署報告。',
          '健保署品質指標統計，114年使用中醫門診者的平均就診次數為6.69次')
      ],
      card:[
        F('服抗凝血等藥物，間隔先問藥師','MEDICAL_INTERPRETATION','incomplete_guidance',
          '卡面只提間隔時間，未提醒交互作用也可能發生在代謝層面，間隔無法完全避免。','low','no',
          null,'no','clarify','可改為詢問是否適合併用。',
          '服抗凝血等藥物，先問藥師能否併用'),
        F('健保署 114 年中醫門診品質報告','SOURCE_EVIDENCE','metric_definition',
          '卡面未說明 6.69 次是品質指標的年統計值，容易與實際就醫人次混淆。','low','no',
          null,'no','clarify','補指標名稱。',
          '健保署 114 年品質指標：平均就診次數')
      ]
    },
    title_alts:[
      '看中醫前先知道：健保給付範圍與中西藥併用安全',
      '中藥西藥一起吃安全嗎？看中醫前的用藥小提醒',
      '中醫治療與用藥安全：中藥、針灸、傷科一次看懂'
    ],
    card_title_alts:[
      ['中藥西藥一起吃？','看中醫前先做 4 件事'],
      ['中西醫都看的人','用藥安全 4 提醒'],
      ['讓醫師知道你吃什麼','中西藥併用安全']
    ],
    data_addon:[
      '114年就診中醫門診後同日再次就診中醫比率0.12%、隔日再次就診比率0.33%（健保署）。',
      '114年同院所針傷科處置每月大於20次之比率為0.0044%（健保署）。',
      '衛福部中醫藥司「中藥用藥安全五撇步」：停、看、聽、選、用。'
    ],
    cta:'下次看中醫或西醫時，帶著藥袋或打開健保快易通，把正在吃的藥都讓醫師看過。'
  });
})();
