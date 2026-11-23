/* v6 示範主題：網路與短影音成癮（B5 心理健康與精神疾患）
   查證日期：2026-11-21。數據來源：TVBS新聞網 2026-06-29（引述數位發展部111、113年網路沉迷風險調查；衛福部心理健康司司長說明）、
   聯合報轉載中央社 2025-12-25（TWNIC「2025台灣網路報告」，18歲以上）、衛福部 114-12-18 國衛院網路成癮腦波研究。
   撰寫原則：不描述自傷細節，附求助專線。
   參考方向：健康智庫〈你有短影音成癮症嗎？大腦的隱形枷鎖〉2025/02、〈你有「網路成癮」嗎〉2024/05。 */
(function(){
  const TV = 'https://news.tvbs.com.tw/life/3241412';
  const UDN = 'https://udn.com/news/story/7266/9225269';
  const NHRI = 'https://mohw.gov.tw/cp-16-84855-1.html';
  const REFS = [
    {title:'網路成癮1／短影音滑不停！青少年網路沉迷攀升',source:'TVBS新聞網',url:TV},
    {title:'報告：逾7成台灣民眾曾看短影音 49.98%每天看數次',source:'聯合報（中央社）',url:UDN},
    {title:'腦波解碼網癮 機器學習助攻精準識別',source:'衛生福利部（國家衛生研究院）',url:NHRI},
    {title:'安心專線改4碼更好記! 1925依舊愛我 持續服務你和我',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48244-1.html'}
  ];
  const TABLE = {headers:['警訊','可能的表現'], rows:[
    ['停不下來','滑的時間常超過原本預期，想減少卻做不到'],
    ['耽誤生活','睡眠、課業、工作或家務因此被延誤'],
    ['情緒依賴','不能上網就焦躁、易怒，用滑手機逃避壞心情'],
    ['人際退縮','現實中的互動減少，與家人衝突增加']
  ]};
  const TAGS = ['網路成癮','短影音','數位健康','青少年心理','螢幕時間'];

  const DP_SCOPE = {id:'dp-ia-scope', type:'data_scope', title:'兩組數字的調查對象不同',
    desc:'高中職學生網路沉迷傾向9.3%出自數位發展部113年調查（TVBS引述）；「56.09%使用者常滑超過預期」出自TWNIC 2025台灣網路報告，對象為18歲以上。兩者對象與定義不同，AI 沒有替你挑選。',
    current:'高中職學生網路沉迷傾向9.3%（數發部113年，媒體引述）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'9.3%', value:'高中職學生・網路沉迷傾向', note:'數發部113年調查（TVBS引述，目前採用）'},
      {label:'56.09%', value:'18歲以上短影音使用者・常滑超過預期', note:'TWNIC 2025台灣網路報告'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'網路與短影音成癮：滑不停的背後，先看見情緒與睡眠',
    update_date:'2026/11/21',
    intro:'據TVBS 2026年引述數位發展部調查，高中職學生網路沉迷傾向比例由111年的8.9%上升至113年的9.3%，最難停止的活動以社群短影音為主。TWNIC「2025台灣網路報告」也發現，18歲以上民眾近8成曾看短影音，其中56.09%的使用者承認常滑超過原先預期、36.22%坦承因此耽誤其他事情。衛福部心理健康司司長提醒，除了螢幕時間，更要關注情緒、睡眠、學校適應與家庭支持。',
    sections:[
      {heading:'網路與短影音成癮的4個警訊',format:'table',table:TABLE},
      {heading:'背後常見的身心議題',format:'bullets',items:[
        '兒童青少年精神科醫師指出，手機成癮個案常合併憂鬱、焦慮、注意力不足過動症或睡眠障礙。',
        '心理師提醒，現實中缺乏成就感、內心空虛、難以與身邊的人建立情感連結，是需要留意的心理警訊。',
        '國衛院2025年研究以腦波搭配機器學習辨識大學生網路成癮狀態，顯示網路成癮已成為研究關注的身心議題。'
      ]},
      {heading:'可以怎麼做',format:'bullets',items:[
        '和孩子一起訂定使用規則，例如睡前一小時不使用手機、手機不帶進臥室，大人以身作則。',
        '安排運動、戶外與實體社交活動，讓生活有其他成就感來源。',
        '衛福部提供網路使用習慣量表與網路成癮門診資訊；15至45歲可使用3次免費心理諮商，需要傾訴可撥24小時免付費的1925安心專線。'
      ]}
    ],
    think_tank_view:'「滑不停」常常不是意志力的問題，而是生活中少了其他能帶來成就與連結的東西。與其只是沒收手機，不如一起找回睡眠、運動與相處的時間；若已合併情緒困擾，及早尋求專業協助。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明調查單位、年份與對象，醫師與司長說法標明身分，未描述自傷細節並附求助專線，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['高中職網路沉迷傾向9.3%（數發部113年，TVBS引述）','TWNIC 2025：56.09%常滑超過預期（18歲以上）'],
      layout_reason:'先用表格列出4個警訊，再說明背後的身心議題，最後給家庭與個人的做法。',
      tone:'專業易懂', tone_reason:'避免把成癮歸咎於個人，聚焦情緒與生活。',
      to_verify:['數發部調查正式名稱與報告未取得，為媒體引述']},
    decision_points:[DP_SCOPE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'一滑短影音就停不下來？認識網路成癮的4個警訊',
    update_date:'2026/11/21',
    intro:'本來只想看一支影片，回神已經過了一小時？你不是唯一一個。TWNIC 2025年的調查發現，超過一半看短影音的成年人都說常常滑得比預期久。媒體引述數發部調查，高中職學生有網路沉迷傾向的比例也從8.9%升到9.3%。',
    sections:[
      {heading:'這4個警訊，要留意',format:'table',table:TABLE},
      {heading:'滑不停，可能是心裡有事',format:'bullets',items:[
        '醫師說，很多離不開手機的孩子，同時也有憂鬱、焦慮或睡眠問題。',
        '在生活中找不到成就感、覺得空虛、跟家人聊不起來，都是要留意的訊號。',
        '比起只看滑了多久，更要關心心情和睡眠。'
      ]},
      {heading:'一家人可以這樣做',format:'bullets',items:[
        '一起約定睡前一小時不碰手機、手機不進房間，大人也一起做到。',
        '多安排運動、出門和朋友見面的時間。',
        '需要幫忙可以找網路成癮門診；15到45歲有3次免費心理諮商，也可以打1925安心專線。'
      ]}
    ],
    think_tank_view:'沒收手機常常只換來更多衝突。試著一起找回好好睡覺、出門走走、聊聊天的時間，手機自然會慢慢放下。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明出處與對象，語氣親切，附求助專線，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以滑不停的生活情境帶出警訊、心理議題與家庭做法。', tone:'生活親切', tone_reason:'給家長與年輕族群閱讀。', to_verify:[]},
    decision_points:[DP_SCOPE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'網路與短影音成癮：4個警訊＋3個做法',
    update_date:'2026/11/21',
    intro:'媒體引述數發部調查，高中職學生網路沉迷傾向113年達9.3%；TWNIC 2025年調查，56.09%成年短影音使用者常滑超過預期。',
    sections:[
      {heading:'4個警訊',format:'table',table:TABLE},
      {heading:'關注重點',format:'bullets',items:[
        '常合併憂鬱、焦慮、睡眠問題。',
        '不只看螢幕時間，也看情緒與生活。'
      ]},
      {heading:'做法',format:'bullets',items:[
        '睡前一小時不用手機。',
        '增加運動與實體互動。',
        '需要時尋求門診或1925。'
      ]}
    ],
    think_tank_view:'找回睡眠、運動與人際連結，是放下手機最有效的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明出處與對象，附求助專線，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為警訊、重點、做法三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_SCOPE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'網路與短影音成癮', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'滑不停的背後，要看見情緒與睡眠', primary_visual:'9.3%', secondary_message:'56.09% 成年短影音使用者常滑超過預期', action_priority:'辨識警訊、睡前斷網、尋求協助'},
    headline_hook:'一滑就停不下來？', headline_main:'網路與短影音成癮警訊', title_accent:'警訊',
    primary_stat:{kicker:'113 年・高中職學生', value:'9.3%', label:'網路沉迷傾向', note:'數位發展部調查（媒體引述）｜111 年為 8.9%'},
    secondary_stats:[
      {value:'56.09%', label:'成年短影音使用者常滑超過預期'},
      {value:'36.22%', label:'因此耽誤其他事情'}
    ],
    knowledge_title:'4 個警訊',
    knowledge_cards:[
      {label:'停不下來', lines:['常超過原本預期']},
      {label:'耽誤生活', lines:['睡眠、課業被延誤']},
      {label:'情緒依賴', lines:['不能上網就焦躁']},
      {label:'人際退縮', lines:['家人衝突增加']}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'睡', text:'睡前一小時不用手機'},
      {key:'約', text:'全家一起訂規則，大人以身作則'},
      {key:'動', text:'安排運動與實體社交'},
      {key:'援', text:'合併情緒困擾，撥 1925 或就醫'}
    ],
    carousel_suggestion:{reason:'若想把數據、警訊與家庭做法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'高中職學生', headline_main:'網路沉迷傾向 9.3%'},
      {layout_type:'knowledge', headline_hook:'一滑就停不下來？', headline_main:'網路成癮 4 個警訊'},
      {layout_type:'action', headline_hook:'一家人一起', headline_main:'數位生活 4 個約定'}]},
    hashtags:['網路成癮','短影音','數位健康','青少年心理'],
    sources:['數位發展部（媒體引述）','台灣網路資訊中心 TWNIC'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'數位健康', audience:'青少年與家長', scene:'一家人在客廳把手機放進同一個籃子，一起準備出門散步',
      emotion:'輕鬆、連結', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A family in the living room placing their phones into one basket together and getting ready to go for a walk, relaxed and connected mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['高中職網路沉迷傾向9.3%（數發部113年，媒體引述）','TWNIC 2025台灣網路報告'],
      layout_reason:'選 data：青少年沉迷比例當主角，成人短影音使用數據在右側，下方左列警訊、右列做法。',
      tone:'專業易懂', tone_reason:'不汙名化使用者，聚焦生活調整。',
      to_verify:['數發部調查原始報告']},
    decision_points:[Object.assign({}, DP_SCOPE, {current:'9.3%（高中職學生，113 年）'})],
    content_check_note:'數據標明出處與對象，附求助專線，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'網路與短影音成癮',
    collect:{
      summary:'高中職學生網路沉迷傾向逐年上升，成年人也普遍「滑超過預期」；衛福部強調不只看螢幕時間，更要關注情緒、睡眠與家庭支持，「辨識警訊、建立數位生活規則、及早求助」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'高中職學生網路沉迷傾向9.3%：TVBS 2026年引述數位發展部調查，113年高中職學生網路沉迷傾向比例9.3%，最難停止的活動以社群短影音為主。',tag:'官方統計',source:{name:'TVBS新聞網：網路成癮1／短影音滑不停！青少年網路沉迷攀升',url:TV}},
        {item:'年度趨勢方向',desc:'由8.9%升至9.3%：同一調查顯示高中職學生網路沉迷傾向111年為8.9%、113年為9.3%（調查正式報告未取得）。',tag:'官方統計',source:{name:'TVBS新聞網：網路成癮1／短影音滑不停！青少年網路沉迷攀升',url:TV}},
        {item:'政策動向',desc:'56.09%使用者常滑超過預期：TWNIC「2025台灣網路報告」調查18歲以上民眾，78.46%過去3個月看過短影音，36.22%坦承因此耽誤其他事情。',tag:'市場觀察',source:{name:'聯合報（中央社）：逾7成台灣民眾曾看短影音',url:UDN}},
        {item:'好發族群年齡層',desc:'準確率約86%：國衛院2025年研究以腦波與機器學習辨識大學生網路成癮狀態，衛福部並提供網路使用習慣量表與網路成癮門診資訊。',tag:'官方統計',source:{name:'衛生福利部：腦波解碼網癮 機器學習助攻精準識別',url:NHRI}}
      ],
      product_view:['機會：家長關注孩子手機使用，可作為親子健康關懷內容。','機會：職場數位疲勞與睡眠議題可結合員工健康管理。','風險：避免以恐懼或指責語氣描述青少年；不推薦特定管控App。'],
      marketing_view:['機會：「一滑就停不下來」幾乎人人有感，適合互動式自我檢測內容。','機會：寒暑假前是親子數位約定的溝通時點。','風險：內容本身也可能是短影音，需避免反諷式說教。'],
      alert_level:'medium',
      alert_reason:'青少年網路沉迷比例上升且受媒體關注，衛福部已有相關資源，適合寒暑假前溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('高中職學生網路沉迷傾向比例由111年的8.9%上升至113年的9.3%','SOURCE_EVIDENCE','secondary_citation',
          '已註明是TVBS引述數發部調查，但未連到數發部原始報告；且兩年差距僅0.4個百分點，是否屬顯著上升未說明。','medium','yes',
          '數位發展部111、113年網路沉迷風險調查原始報告。','yes','confirm','屬二手引述與趨勢詮釋問題。',
          '高中職學生網路沉迷傾向比例111年為8.9%、113年為9.3%（媒體引述數發部調查）',
          ['高中職學生有網路沉迷傾向的比例也從8.9%升到9.3%','高中職學生網路沉迷傾向113年達9.3%']),
        F('手機成癮個案常合併憂鬱、焦慮、注意力不足過動症或睡眠障礙','MEDICAL_INTERPRETATION','clinical_sample_generalized',
          '這是單一醫院臨床個案觀察，不能推論為所有使用者都有這些問題。','low','no',
          null,'no','clarify','屬適用範圍說明。',
          '在醫院就診的手機成癮個案中，常合併憂鬱、焦慮、注意力不足過動症或睡眠障礙'),
        F('國衛院2025年研究以腦波搭配機器學習辨識大學生網路成癮狀態','SOURCE_EVIDENCE','study_overgeneralized',
          '研究樣本只有92名大學生，屬研究階段，讀者可能以為已有腦波檢測可以診斷網路成癮。','low','no',
          null,'no','clarify','屬研究性質說明。',
          '國衛院2025年小規模研究（92名大學生）嘗試以腦波搭配機器學習辨識網路成癮狀態，仍屬研究階段'),
        F('睡前一小時不使用手機','MEDICAL_INTERPRETATION','missing_rationale',
          '沒說明原因（藍光與刺激影響入睡），讀者較難認同。','low','no',
          null,'no','clarify','補一句理由即可。',
          '睡前一小時不使用手機（減少對入睡的干擾）',
          ['睡前一小時不碰手機','睡前一小時不用手機'])
      ],
      card:[
        F('數位發展部調查（媒體引述）｜111 年為 8.9%','SOURCE_EVIDENCE','secondary_citation',
          '主數字為媒體引述，卡面未連到原始報告。','low','yes',
          '數發部原始報告。','yes','confirm','屬二手引述。',
          '數位發展部調查（媒體引述）'),
        F('成年短影音使用者常滑超過預期','DATA_FACTUAL_ACCURACY','different_population',
          '次數字是18歲以上成人調查，與主數字（高中職學生）對象不同，並列容易混淆。','low','no',
          null,'no','clarify','屬標示問題。',
          '18 歲以上短影音使用者常滑超過預期')
      ]
    },
    title_alts:[
      '網路與短影音成癮：滑不停的背後，先看見情緒與睡眠',
      '一滑短影音就停不下來？認識網路成癮的4個警訊',
      '高中職學生網路沉迷傾向9.3%：家長可以怎麼做'
    ],
    card_title_alts:[
      ['一滑就停不下來？','網路與短影音成癮警訊'],
      ['高中職學生 9.3%','網路沉迷傾向上升'],
      ['一家人一起','數位生活 4 個約定']
    ],
    data_addon:[
      'TWNIC 2025：49.98%的18歲以上民眾一天看短影音數次；短影音定義為15秒至3分鐘。',
      '衛福部心理健康司司長：應同時關注注意力與衝動控制、情緒困擾、睡眠品質、學校適應、家庭支持與平台演算法設計。',
      '衛福部心理健康司網站設有網路成癮專區，提供量表與門診資訊。'
    ],
    cta:'今晚就和家人約好：睡前一小時手機放客廳；若孩子因手機出現明顯情緒或睡眠問題，找網路成癮門診或撥1925諮詢。'
  });
})();
