/* v6 示範主題：老年失眠（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：衛福部（國衛院）〈失眠、打鼾、嗜睡？ 睡眠呼吸中止症病因 年齡大不同〉（113/02/19，各國研究：65歲以上約一半有睡眠困擾）、
   衛福部〈正確使用鎮靜安眠藥 您知道嗎?〉（安眠藥「五不」原則）、衛福部〈高齡服藥多留心 鎮靜安眠藥小心〉（食藥署委託研究推估102年65歲以上約109萬人曾因失眠服用鎮靜安眠藥）。
   註：國內長者失眠盛行率查無近年官方調查。
   參考方向：健康智庫〈老年失眠〉2022/04。 */
(function(){
  const REFS = [
    {title:'失眠、打鼾、嗜睡？ 睡眠呼吸中止症病因 年齡大不同',source:'國家衛生研究院（衛生福利部網站）',url:'https://www.mohw.gov.tw/cp-16-77716-1.html'},
    {title:'正確使用鎮靜安眠藥 您知道嗎?',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-80497-1.html'},
    {title:'高齡服藥多留心 鎮靜安眠藥小心',source:'衛生福利部',url:'https://www.mohw.gov.tw/fp-16-19871-1.html'}
  ];
  const TABLE = {headers:['安眠藥「五不」','說明'], rows:[
    ['不自行購買','鎮靜安眠藥須由醫師處方'],
    ['不擅自增量或停藥','劑量調整與減藥都要和醫師討論'],
    ['不併用酒精','酒精會加強鎮靜作用，增加危險'],
    ['不開車或操作機具','服藥後反應變慢、平衡感變差'],
    ['不轉售或轉讓','不把自己的藥給別人吃']
  ]};
  const TAGS = ['老年失眠','睡眠健康','安眠藥','預防跌倒','長者健康'];

  const DP_DATA = {id:'dp-insom-data', type:'data_scope', title:'失眠比例只有國外研究概估',
    desc:'「65歲以上約一半有睡眠困擾」是國衛院文章引述「各國研究」的概估，非國內官方調查；「約109萬名長者曾服用鎮靜安眠藥」是食藥署委託研究對102年的推估，資料很舊。AI 文中標明性質與年份。',
    current:'65歲以上長者約一半有睡眠困擾（國衛院引各國研究）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約一半', value:'睡眠困擾', note:'國衛院引各國研究（目前採用）'},
      {label:'約109萬人', value:'曾服鎮靜安眠藥', note:'食藥署委託研究推估102年，舊資料'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'長輩睡不好不是老了就該如此：老年失眠的原因與安眠藥「五不」',
    update_date:'2026/11/20',
    intro:'隨年齡增長，睡眠變淺、容易醒、早醒都更常見。國家衛生研究院在衛生福利部網站的文章引述各國研究，65歲以上長者約有一半有睡眠困擾；高齡者的睡眠呼吸中止症也常以失眠表現。長期失眠會影響白天精神與情緒，而依賴安眠藥又可能增加跌倒風險，找出原因、建立好的睡眠習慣是第一步。',
    sections:[
      {heading:'老年失眠的常見原因',format:'bullets',items:[
        '慢性疼痛、頻尿、咳嗽等身體不適，或多種藥物的副作用。',
        '情緒低落、焦慮，或退休後作息改變、白天活動量少。',
        '睡眠呼吸中止症等睡眠疾病，高齡者常以失眠表現。'
      ]},
      {heading:'改善睡眠的好習慣',format:'bullets',items:[
        '固定時間起床，白天多到戶外曬太陽、適度活動，午睡不要太久。',
        '傍晚後少喝咖啡、茶，睡前避免喝酒與大量喝水。',
        '睡不著就起床做些放鬆的事，有睡意再回床上。'
      ]},
      {heading:'使用安眠藥的「五不」',format:'table',table:TABLE}
    ],
    think_tank_view:'長輩失眠常被一句「老了本來就睡不好」帶過，或直接靠安眠藥解決。其實失眠背後常有可以處理的原因：疼痛、頻尿、憂鬱或睡眠呼吸中止。衛福部也提醒，長者服用鎮靜安眠藥後較容易頭昏、平衡變差而跌倒；先找原因、調整作息，真的需要用藥時遵守「五不」，夜間起床動作放慢，才能睡得好又安全。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'睡眠困擾比例標明為國衛院引各國研究，安眠藥原則引自衛福部，未使用療效保證用語，未推薦特定藥品或助眠產品。',
    ai_rationale:{basis:['65歲以上約一半睡眠困擾取自國衛院113年文章（引各國研究）','安眠藥五不取自衛福部衛教'],
      layout_reason:'先列原因，再整理睡眠好習慣，最後以表格說明安眠藥五不。',
      tone:'專業易懂', tone_reason:'給長者與照顧者具體做法。',
      to_verify:['國內長者失眠盛行率查無官方調查','109萬人為102年推估（舊）']},
    decision_points:[DP_DATA]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽半夜醒來睡不回去？老年失眠這樣改善',
    update_date:'2026/11/20',
    intro:'年紀大了睡得淺、半夜容易醒，很常見。國衛院的文章引述國外研究，65歲以上大約一半的長輩都有睡眠困擾。睡不好不只白天沒精神，亂吃安眠藥還可能頭暈跌倒。先找原因、調整生活，比急著吃藥更重要。',
    sections:[
      {heading:'為什麼睡不好？',format:'bullets',items:[
        '身體痛、半夜一直想上廁所、咳嗽。',
        '心情不好、擔心事情，或退休後白天太少活動。',
        '可能有睡眠呼吸中止，長輩常常不是打鼾而是睡不好。'
      ]},
      {heading:'這樣幫助好睡',format:'bullets',items:[
        '每天固定時間起床，白天出門曬太陽、散步。',
        '午睡不要太久，下午後少喝咖啡和茶。',
        '躺著睡不著就起來坐坐，想睡再回床上。'
      ]},
      {heading:'吃安眠藥記得「五不」',format:'table',table:TABLE}
    ],
    think_tank_view:'爸媽說睡不好，先陪他們聊聊是哪裡不舒服、白天做了什麼。半夜起床上廁所時開小夜燈、慢慢起身，也能降低跌倒風險。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'比例標明為國衛院引國外研究，未使用療效保證用語，未推薦特定藥品或助眠產品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'從子女關心爸媽睡眠切入。', tone:'生活親切', tone_reason:'給照顧長輩的子女閱讀。', to_verify:['長者失眠盛行率查無官方調查']},
    decision_points:[DP_DATA]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'老年失眠：原因、好習慣與安眠藥五不',
    update_date:'2026/11/20',
    intro:'65歲以上約一半有睡眠困擾（國衛院引各國研究）。先找原因、調整作息，用藥遵守「五不」。',
    sections:[
      {heading:'原因',format:'bullets',items:[
        '疼痛頻尿、情緒、睡眠呼吸中止。'
      ]},
      {heading:'好習慣',format:'bullets',items:[
        '固定起床、白天曬太陽、少咖啡。'
      ]},
      {heading:'安眠藥五不',format:'table',table:TABLE}
    ],
    think_tank_view:'找原因、養習慣、慎用藥，長輩才能睡得好又安全。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'比例標明為國衛院引各國研究，未使用療效保證用語，未推薦特定藥品或助眠產品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為原因、習慣、五不三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['長者失眠盛行率查無官方調查']},
    decision_points:[DP_DATA]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'老年失眠', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'長輩睡不好，先找原因', primary_visual:'約一半', secondary_message:'安眠藥可能增加跌倒', action_priority:'睡眠好習慣'},
    headline_hook:'長輩半夜睡不回去？', headline_main:'好眠從這 4 件事開始', title_accent:'這 4 件事',
    hero_message:'約一半長者睡不好', hero_support:'65 歲以上睡眠困擾（國衛院引各國研究）',
    action_title:'好眠這樣做',
    action_cards:[
      {key:'起', text:'每天固定時間起床'},
      {key:'曬', text:'白天出門曬太陽、散步活動'},
      {key:'少', text:'午睡別太久，下午後少咖啡茶'},
      {key:'慢', text:'夜間起床開小夜燈、慢慢起身'}
    ],
    notice:'使用安眠藥遵守「**五不**」：不自行購買、不擅自增減、不併用酒精、不開車、不轉讓。',
    carousel_suggestion:{reason:'若想把原因、睡眠習慣與安眠藥五不分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'為什麼睡不好', headline_main:'老年失眠 3 大原因'},
      {layout_type:'action', headline_hook:'好眠習慣', headline_main:'4 件事開始'},
      {layout_type:'knowledge', headline_hook:'安眠藥', headline_main:'記得「五不」'}]},
    hashtags:['老年失眠','睡眠健康','安眠藥','預防跌倒'],
    sources:['國家衛生研究院','衛生福利部'],
    illustration_category:'sleep',
    illustration:{topic:'長者睡眠', audience:'長者', scene:'長者早晨在陽台伸展曬太陽，旁邊放著一杯溫水',
      emotion:'放鬆、清爽', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult stretching on a sunny balcony in the morning with a glass of warm water nearby, relaxed and refreshed mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['65歲以上約一半睡眠困擾取自國衛院文章','安眠藥五不取自衛福部'],
      layout_reason:'重點是可執行的睡眠習慣，選 action：4 個好眠行動當主角，用藥原則放在 notice。',
      tone:'專業易懂', tone_reason:'具體、可執行。',
      to_verify:['「約一半」為國外研究概估']},
    decision_points:[Object.assign({}, DP_DATA, {current:'約一半｜65 歲以上睡眠困擾（國衛院引各國研究）', options:[{label:'沿用目前資料', action:'keep'}]})],
    content_check_note:'比例標明為國衛院引研究，用藥原則引自衛福部，未使用療效保證用語，未推薦特定藥品或助眠產品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'老年失眠',
    collect:{
      summary:'國衛院文章引述各國研究，65歲以上長者約一半有睡眠困擾，高齡者的睡眠呼吸中止症也常以失眠表現；鎮靜安眠藥可能增加長者跌倒風險，找出原因、建立睡眠習慣與遵守安眠藥「五不」是溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約一半長者有睡眠困擾：國衛院在衛福部網站的文章引述各國研究，65歲以上長者約有一半有睡眠困擾，國內查無近年官方調查。',tag:'官方統計',source:{name:'衛福部（國衛院）：睡眠呼吸中止症病因 年齡大不同',url:'https://www.mohw.gov.tw/cp-16-77716-1.html'}},
        {item:'好發族群年齡層',desc:'約109萬人（推估）：食藥署委託研究推估，102年65歲以上約269萬名長者中，約有109萬人曾因失眠服用鎮靜安眠藥（資料較舊）。',tag:'推估',source:{name:'衛生福利部：高齡服藥多留心 鎮靜安眠藥小心',url:'https://www.mohw.gov.tw/fp-16-19871-1.html'}},
        {item:'政策動向',desc:'安眠藥「五不」：衛福部提醒不自行購買、不擅自增量或停藥、不併用酒精、不開車或操作機具、不轉售或轉讓。',tag:'官方統計',source:{name:'衛生福利部：正確使用鎮靜安眠藥',url:'https://mohw.gov.tw/cp-16-80497-1.html'}},
        {item:'年度趨勢方向',desc:'長者易跌倒骨折：衛福部指出，高齡者服用鎮靜安眠藥後較可能跌倒或骨折，老年人肝臟代謝能力下降，藥效可能延長。',tag:'官方統計',source:{name:'衛生福利部：高齡服藥多留心 鎮靜安眠藥小心',url:'https://www.mohw.gov.tw/fp-16-19871-1.html'}}
      ],
      product_view:['機會：睡眠健康與跌倒預防、心理健康相關，可作為熟齡保戶健康管理內容。','機會：用藥安全提醒可串連多重用藥主題。','風險：避免推薦助眠保健品或特定藥品。'],
      marketing_view:['機會：3月世界睡眠日是固定溝通檔期。','機會：「長輩睡不好不是理所當然」具共鳴。','風險：比例來自國外研究與舊推估，避免強調數字。'],
      alert_level:'low',
      alert_reason:'屬長期高齡健康議題，無急迫時效事件；適合在世界睡眠日前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國家衛生研究院在衛生福利部網站的文章引述各國研究，65歲以上長者約有一半有睡眠困擾','SOURCE_EVIDENCE','foreign_estimate',
          '「約一半」為國外研究的概括，文章未列具體研究，不能代表國內長者狀況。','low','no',
          null,'no','clarify','屬來源性質說明。',
          '國家衛生研究院在衛生福利部網站的文章引述國外研究概估，65歲以上長者約有一半有睡眠困擾（國內無對應官方調查）',
          ['65歲以上大約一半的長輩都有睡眠困擾','65歲以上約一半有睡眠困擾（國衛院引各國研究）']),
        F('睡前避免喝酒與大量喝水','SOURCE_EVIDENCE','unsourced_claim',
          '睡眠衛生建議未在引用的官方資料中出現。','low','no',
          null,'no','clarify','屬出處補充。',
          '睡前避免喝酒；夜間頻尿者睡前減少飲水（請與醫師討論）'),
        F('睡不著就起床做些放鬆的事，有睡意再回床上','SOURCE_EVIDENCE','unsourced_claim',
          '屬失眠認知行為治療的常見建議，但未附出處。','low','no',
          null,'no','clarify','屬出處補充。',
          '睡不著時可起床做些放鬆的事，有睡意再回床上（失眠持續請就醫評估）'),
        F('比急著吃藥更重要','MEDICAL_INTERPRETATION','medication_advice',
          '可能讓已在服藥的長者自行停藥，未提醒依醫囑調整。','low','no',
          null,'no','clarify','屬用藥安全提醒。',
          '是改善睡眠的第一步，已在用藥者請依醫囑調整')
      ],
      card:[
        F('約一半長者睡不好','SOURCE_EVIDENCE','foreign_estimate',
          '比例為國外研究概估，卡面 hero 未說明非國內統計。','low','no',
          null,'no','clarify','屬來源性質說明。',
          '許多長者有睡眠困擾'),
        F('午睡別太久，下午後少咖啡茶','SOURCE_EVIDENCE','unsourced_claim',
          '建議未在卡面 sources 中有依據，且「太久」未定義。','low','no',
          null,'no','clarify','屬出處與定義補充。',
          '午睡不宜過長，下午後少咖啡茶（一般睡眠衛生建議）')
      ]
    },
    title_alts:[
      '長輩睡不好不是老了就該如此：老年失眠的原因與安眠藥「五不」',
      '爸媽半夜醒來睡不回去？老年失眠這樣改善',
      '約一半長者有睡眠困擾：找原因、養習慣、慎用藥'
    ],
    card_title_alts:[
      ['長輩半夜睡不回去？','好眠從這 4 件事開始'],
      ['睡不好不是老了','先找原因'],
      ['安眠藥','記得「五不」']
    ],
    data_addon:[
      '老年人肝臟代謝藥物能力降低，安眠藥效果可能延長。',
      '長者服用鎮靜安眠藥後，起床時行動要緩慢，避免頭昏跌倒。',
      '高齡者的睡眠呼吸中止症常以失眠表現，可至睡眠中心檢查。'
    ],
    cta:'這週陪長輩記錄一週的睡眠與白天活動，看診時帶給醫師，一起找出睡不好的原因。'
  });
})();
