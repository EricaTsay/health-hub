/* v6 示範主題：男性更年期（B7 女性・男性・生育與兒童）
   查證日期：2026-11-21。查無衛福部／國健署的男性更年期官方資料與國內盛行率統計；內容為新光醫院泌尿科醫師經聯合報元氣周報（2026-07-26）引述（二手）。
   臺大醫院健康電子報PDF連線失敗未讀到；媒體流傳的「40至80歲1/3」「每5人1人」等盛行率說法來源不一，未採用。
   參考方向：健康智庫〈男性也有更年期，症狀解密！〉2023/09。 */
(function(){
  const REFS = [
    {title:'40歲後愈來愈累不一定是老化！醫揭男性更年期2大警訊：性欲下降只是其中之一（新光醫院泌尿科）',source:'聯合報元氣周報',url:'https://health.udn.com/health/story/5975/9648856'}
  ];
  const TABLE = {headers:['項目','醫師說明'], rows:[
    ['常見警訊','性欲降低、勃起功能異常，也可能體力變差、容易疲倦、沒有活力'],
    ['抽血時間','上午7點至10點抽血，至少檢查2次、約間隔1週'],
    ['參考數值','部分醫師以總睪固酮低於每分升300至350奈克為參考'],
    ['不適合補充者','轉移性攝護腺癌、男性乳癌，及仍有生育計畫的40多歲男性'],
    ['生活調整','規律運動、控制體重、少吃高油高熱量食物、作息規律']
  ]};
  const TAGS = ['男性更年期','睪固酮','男性健康','泌尿科','熟齡健康'];

  const DP_PREV = {id:'dp-andropause-prev', type:'data_source', title:'國內盛行率沒有官方數字',
    desc:'網路上常見「40至80歲男性1/3有荷爾蒙低下」「40歲以上每5人有1人」等說法，來源與定義不一，且國健署未公布男性更年期盛行率。本文只採用醫師對症狀、檢查與治療的說明，AI 沒有選用任何盛行率數字。',
    current:'約40歲後睪固酮隨年齡逐漸下降（新光醫院泌尿科醫師）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'未採用', value:'盛行率', note:'各醫院與學會說法不一，查無官方統計'},
      {label:'約 40 歲後', value:'睪固酮下降起點', note:'醫師受訪說法（目前採用）'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'40歲後愈來愈累？男性更年期的警訊、檢查與治療重點',
    update_date:'2026/11/21',
    intro:'男性也有更年期。新光醫院泌尿科醫師2026年受訪指出，男性約40歲後睪固酮會隨年齡逐漸下降，最具代表性的警訊是性欲降低與勃起功能異常，也可能出現體力變差、容易疲倦、工作表現變差。這些變化常被當成單純老化而延誤評估；確診需要抽血檢查睪固酮，並搭配症狀判斷。',
    sections:[
      {heading:'男性更年期重點整理',format:'table',table:TABLE},
      {heading:'怎麼確診',format:'bullets',items:[
        '先由醫師了解症狀，再抽血檢查睪固酮。',
        '睪固酮一天中會變動，宜在上午抽血，並至少檢查2次。',
        '可先用自我評估量表了解狀況，但最後仍需醫師判讀。'
      ]},
      {heading:'治療與注意事項',format:'bullets',items:[
        '確認睪固酮低下後，醫師可能評估補充，方式包括注射、凝膠等。',
        '凝膠塗抹後要等乾燥再與家人肌膚接觸。',
        '醫師提醒不要自行購買壯陽藥或男性保健品。'
      ]}
    ],
    think_tank_view:'男性更年期最常見的阻礙是「不好意思開口」。疲倦、性欲下降不只是年紀的問題，也可能是荷爾蒙變化的訊號；規律運動、控制體重是第一步，症狀持續就找泌尿科醫師聊聊，比自行買保健品更可靠。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容標明為醫師受訪說法，未引用盛行率，未推薦特定藥品或保健品，未使用療效保證用語。',
    ai_rationale:{basis:['40歲後下降、警訊、檢查與治療注意事項（新光醫院泌尿科醫師，元氣周報2026-07-26）'],
      layout_reason:'先用表格整理重點，再說明確診方式，最後交代治療注意事項。',
      tone:'專業易懂', tone_reason:'男性健康議題需直白、去羞恥化。',
      to_verify:['查無官方盛行率','單一醫師受訪來源']},
    decision_points:[DP_PREV]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'老公最近總是很累、沒興致？男人也有更年期',
    update_date:'2026/11/21',
    intro:'更年期不是只有女生才有。泌尿科醫師說，男生大約40歲以後，男性荷爾蒙會一點一點下降，可能出現容易累、沒活力、性欲變低等狀況。很多人以為只是「老了」，其實可以去檢查看看。',
    sections:[
      {heading:'男性更年期，先看這張表',format:'table',table:TABLE},
      {heading:'怎麼知道是不是？',format:'bullets',items:[
        '去泌尿科抽血驗睪固酮，最好在早上抽。',
        '通常要驗2次以上，醫師才好判斷。'
      ]},
      {heading:'可以怎麼做？',format:'bullets',items:[
        '規律運動，跑步、游泳都很好。',
        '控制體重，少吃油炸高熱量食物。',
        '別自己亂買壯陽藥或保健品，先問醫師。'
      ]}
    ],
    think_tank_view:'陪另一半一起運動、一起規律作息，是最溫柔的關心；症狀持續的話，陪他去掛個泌尿科吧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容標明醫師說法，語氣親切，未推薦特定藥品或保健品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以伴侶觀察的情境帶出檢查與生活調整。', tone:'生活親切', tone_reason:'給中年男性與伴侶閱讀。', to_verify:[]},
    decision_points:[DP_PREV]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'男性更年期：疲倦、性欲降低要檢查',
    update_date:'2026/11/21',
    intro:'男性約40歲後睪固酮逐漸下降（醫師受訪）。性欲降低、勃起異常、容易疲倦可就醫抽血評估。',
    sections:[
      {heading:'重點',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '上午抽血、至少驗2次。',
        '不自行購買壯陽藥或保健品。'
      ]}
    ],
    think_tank_view:'別把疲倦都當老化，找泌尿科問清楚。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容標明醫師說法，未推薦特定藥品或保健品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為重點與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_PREV]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'男性更年期', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'男性約 40 歲後睪固酮逐漸下降', primary_visual:'40 歲', secondary_message:'疲倦、性欲降低不一定是老化', action_priority:'運動、控體重、找泌尿科'},
    headline_hook:'40 歲後愈來愈累？', headline_main:'男人也有更年期', title_accent:'更年期',
    hero_message:'約 40 歲後睪固酮下降', hero_support:'新光醫院泌尿科醫師（2026 年媒體引述）',
    knowledge_title:'常見警訊', knowledge_note:'症狀持續，**找泌尿科評估**',
    knowledge_cards:[
      {label:'性欲降低', icon:'heart', lines:['最具代表性','的警訊之一']},
      {label:'勃起功能異常', icon:'pressure', lines:['常與性欲降低','同時出現']},
      {label:'疲倦沒活力', icon:'check', lines:['體力變差','工作表現下滑']}
    ],
    primary_stat:{value:'2 次', label:'上午抽血至少檢查次數', note:'醫師建議｜約間隔 1 週'},
    secondary_stats:[
      {value:'300–350', label:'部分醫師參考 ng/dL'},
      {value:'上午 7–10 點', label:'建議抽血時間'}
    ],
    action_title:'男性這樣照顧自己',
    action_cards:[
      {key:'動', text:'規律有氧加肌力運動'},
      {key:'重', text:'控制體重，少吃高油高熱量'},
      {key:'檢', text:'上午抽血驗睪固酮，至少 2 次'},
      {key:'醫', text:'不自買壯陽藥，找泌尿科評估'}
    ],
    carousel_suggestion:{reason:'若想把警訊、檢查與治療分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'40 歲後愈來愈累？', headline_main:'男性更年期 3 警訊'},
      {layout_type:'knowledge', headline_hook:'怎麼確診？', headline_main:'上午抽血驗 2 次'},
      {layout_type:'action', headline_hook:'生活調整', headline_main:'運動、控體重'}]},
    hashtags:['男性更年期','睪固酮','男性健康','熟齡健康'],
    sources:['新光醫院泌尿科（媒體引述）'],
    illustration_category:'general',
    illustration:{topic:'男性健康諮詢', audience:'40 歲以上男性', scene:'一位中年男性在泌尿科診間輕鬆地和醫師討論檢查報告',
      emotion:'自在、願意面對', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged man calmly discussing test results with a urologist in a clinic, relaxed and open, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['醫師受訪說法（元氣周報2026-07-26）'],
      layout_reason:'核心是辨識警訊，選 knowledge：3 個警訊放中段，檢查方式退到下方，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'去羞恥化。',
      to_verify:['單一醫師來源']},
    decision_points:[Object.assign({}, DP_PREV, {current:'約 40 歲後睪固酮下降（醫師說法）'})],
    content_check_note:'內容標明醫師說法，未推薦特定藥品或保健品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'男性更年期',
    collect:{
      summary:'男性約40歲後睪固酮隨年齡逐漸下降，性欲降低、勃起異常與疲倦常被誤認為單純老化；國內查無官方盛行率統計。「症狀持續就找泌尿科抽血評估、不自行購買壯陽藥」是中年男性值得溝通的健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約40歲後逐漸下降：新光醫院泌尿科醫師2026年受訪指出，男性約40歲後睪固酮會隨年齡一點一點下降，國內查無官方盛行率統計（媒體引述）。',tag:'市場觀察',source:{name:'聯合報元氣周報：40歲後愈來愈累不一定是老化！醫揭男性更年期2大警訊',url:'https://health.udn.com/health/story/5975/9648856'}},
        {item:'年度趨勢方向',desc:'2大警訊：醫師指出性欲降低與勃起功能異常是最具代表性的警訊，也可能體力變差、容易疲倦，常被當成單純老化而延誤評估。',tag:'市場觀察',source:{name:'聯合報元氣周報：40歲後愈來愈累不一定是老化！醫揭男性更年期2大警訊',url:'https://health.udn.com/health/story/5975/9648856'}},
        {item:'政策動向',desc:'每月藥費約3000元：醫師說明睪固酮補充有注射、凝膠等方式，凝膠多需自費，轉移性攝護腺癌、男性乳癌及仍有生育計畫者不適合補充。',tag:'市場觀察',source:{name:'聯合報元氣周報：40歲後愈來愈累不一定是老化！醫揭男性更年期2大警訊',url:'https://health.udn.com/health/story/5975/9648856'}},
        {item:'好發族群年齡層',desc:'40歲以上男性：醫師建議上午7點至10點抽血、至少檢查2次並間隔約1週，部分醫師以總睪固酮低於每分升300至350奈克為參考，並搭配症狀判斷。',tag:'市場觀察',source:{name:'聯合報元氣周報：40歲後愈來愈累不一定是老化！醫揭男性更年期2大警訊',url:'https://health.udn.com/health/story/5975/9648856'}}
      ],
      product_view:['機會：中年男性健康管理可結合健檢與生活習慣衛教。','風險：避免推薦睪固酮補充或保健品，依醫師評估為準。','風險：男性性功能議題敏感，避免羞辱或誇大語氣。'],
      marketing_view:['機會：父親節是男性健康議題的固定溝通時點。','機會：「累不一定是老」是能引起中年男性共鳴的切入點。','風險：避免與壯陽、性能力等商業話題連結。'],
      alert_level:'low',
      alert_reason:'屬長期男性健康議題，查無官方統計，適合在父親節前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('新光醫院泌尿科醫師2026年受訪指出','SOURCE_EVIDENCE','single_source',
          '整篇文章只依據一位醫師的媒體受訪內容，沒有官方或學會資料佐證，讀者無法判斷是否為醫界共識。','medium','yes',
          '台灣男性醫學會或泌尿科醫學會的男性更年期衛教資料。','no','confirm','屬單一二手來源。',
          '新光醫院泌尿科醫師2026年受訪指出（國內尚無官方衛教資料）'),
        F('可先用自我評估量表了解狀況','SOURCE_EVIDENCE','detail_missing',
          '文章提到自我評估量表，但沒有說明是哪一份量表或在哪裡取得，讀者無法照做。','low','no',
          null,'no','clarify','補上量表名稱或取得方式。',
          '可先用醫療院所提供的男性荷爾蒙低下自我評估量表了解狀況'),
        F('男性荷爾蒙會一點一點下降','SOURCE_EVIDENCE','source_unstated',
          '生活親切版只寫「泌尿科醫師說」，沒有醫院與年份。','low','no',
          null,'no','clarify','補上出處即可。',
          '新光醫院泌尿科醫師2026年說，男性荷爾蒙會一點一點下降'),
        F('男性約40歲後睪固酮逐漸下降（醫師受訪）','SOURCE_EVIDENCE','single_source',
          '簡潔有力版沒有醫院與年份，讀者無法查證。','low','no',
          null,'no','clarify','補上出處即可。',
          '男性約40歲後睪固酮逐漸下降（新光醫院泌尿科醫師，2026）')
      ],
      card:[
        F('部分醫師參考 ng/dL','MEDICAL_INTERPRETATION','threshold_misuse',
          '卡面列出「300–350」數值，讀者可能自行拿檢驗報告對照判斷，但醫師強調需搭配症狀與多次檢查。','medium','no',
          null,'no','clarify','建議移除數值或加註須由醫師判讀。',
          '參考值須由醫師搭配症狀判讀'),
        F('新光醫院泌尿科醫師（2026 年媒體引述）','SOURCE_EVIDENCE','single_source',
          '卡面主訊息只依據單一醫師受訪內容，分享後可能被當成官方說法。','low','no',
          null,'no','clarify','屬出處層級提醒。',
          '單一醫師受訪說法（2026 年）')
      ]
    },
    title_alts:[
      '40歲後愈來愈累？男性更年期的警訊、檢查與治療重點',
      '老公最近總是很累、沒興致？男人也有更年期',
      '男性更年期怎麼確診？抽血時間、次數與治療注意事項'
    ],
    card_title_alts:[
      ['40 歲後愈來愈累？','男人也有更年期'],
      ['累不一定是老','男性更年期 3 警訊'],
      ['上午抽血驗 2 次','找泌尿科評估']
    ],
    data_addon:[
      '新光醫院泌尿科醫師（2026）：男性約40歲後睪固酮隨年齡逐漸下降。',
      '抽血建議上午7點至10點、至少2次、間隔約1週。',
      '轉移性攝護腺癌、男性乳癌及仍有生育計畫者不適合補充睪固酮。'
    ],
    cta:'疲倦、性欲降低持續好幾個月，就預約泌尿科，早上抽血檢查一次。'
  });
})();
