/* v6 示範主題：腸病毒（B8 傳染病防治）
   查證日期：2026-11-20。數據來源：疾管署開放資料 Age_County_Gender_0749（腸病毒感染併發重症，依發病年份，2026-11-20 下載）、
   疾管署新聞稿（2025-10-07、2026-03-24，衛福部網站轉載）。只用全年統計，不寫當週疫情。
   參考方向：健康智庫〈傳染疾病－腸病毒〉2025/06。 */
(function(){
  const REFS = [
    {title:'傳染病統計資料查詢系統：腸病毒感染併發重症',source:'衛生福利部疾病管制署',url:'https://nidss.cdc.gov.tw/nndss/disease?id=0749'},
    {title:'國內新增1例新生兒腸病毒感染併發重症病例，籲請民眾落實勤洗手及環境衛生',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-84157-1.html'},
    {title:'國內出現今年首例腸病毒感染併發重症死亡病例 籲請家長及教托育機構落實防疫',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-85921-1.html'}
  ];
  const TABLE = {headers:['重症前兆','觀察重點'], rows:[
    ['嗜睡、意識不清','叫不太醒、反應變慢'],
    ['活力不佳、手腳無力','不想玩、抱起來軟軟的'],
    ['肌抽躍','無故驚嚇或突然間全身肌肉收縮'],
    ['持續嘔吐','一直吐、吃不下'],
    ['呼吸急促或心跳加快','安靜時呼吸、心跳仍明顯變快']
  ]};
  const TAGS = ['腸病毒','重症前兆','新生兒','勤洗手','5歲以下幼童'];

  const DP_SCOPE = {id:'dp-ev-scope', type:'data_scope', title:'重症數字只算「併發重症」',
    desc:'腸病毒輕症（手足口病、疱疹性咽峽炎）不需個案通報，只有「腸病毒感染併發重症」有確定病例數。本文的19例只代表重症，不代表全年感染人數，AI 沒有替你估算感染總數。',
    current:'2025年腸病毒感染併發重症19例（疾管署，依發病年份）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'19 例', value:'併發重症確定病例', note:'疾管署開放資料，依發病年份（目前採用）'},
      {label:'未公布', value:'全年感染人數', note:'輕症不需個案通報，僅有門急診就診監測'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'腸病毒重症前兆有哪些？5歲以下與新生兒最需留意，酒精消毒效果有限',
    update_date:'2026/11/20',
    intro:'依疾病管制署統計（依發病年份），2025年腸病毒感染併發重症確定病例19例，為近5年最多，其中17例是未滿1歲的嬰兒。疾管署指出，5歲以下嬰幼童為腸病毒重症高危險群，新生兒感染可能快速進展為心肌炎、肝炎、腦炎或多重器官衰竭。本文整理重症前兆、新生兒照護與居家防疫重點。',
    sections:[
      {heading:'5大重症前兆，出現請儘速就醫',format:'table',table:TABLE},
      {heading:'新生兒與孕婦照護',format:'bullets',items:[
        '新生兒感染可能出現發燒或低體溫、活力不佳、喝奶量變少，應儘速就醫。',
        '孕婦應避免出入人潮擁擠、通風不良場所，避免接觸有症狀的人。',
        '產前14天內若有發燒、呼吸道症狀或腹瀉，應儘速就醫並主動告知醫師。'
      ]},
      {heading:'居家與托育防疫',format:'bullets',items:[
        '吃東西前、跟小寶寶玩前、擤鼻涕後、上廁所後及看病前後，用肥皂以「濕、搓、沖、捧、擦」洗手。',
        '酒精對腸病毒的消毒效果有限；環境可用500ppm含氯漂白水（10公升清水加100毫升市售漂白水）擦拭，靜置10分鐘後再用清水擦一次。',
        '生病應儘量在家休息，落實生病不上課。'
      ]}
    ],
    think_tank_view:'腸病毒多數是輕症，但真正需要警覺的是那少數會快速惡化的重症，尤其是新生兒。照顧者認得重症前兆、家人抱寶寶前先用肥皂洗手，是兩件最簡單也最關鍵的事；別把乾洗手當成萬用解方。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'重症病例數引自疾管署開放資料並標明依發病年份，前兆與防疫做法引自疾管署新聞稿，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['2025年腸病毒併發重症19例、未滿1歲17例（疾管署開放資料）','重症前兆與漂白水比例取自疾管署2025-10-07新聞稿'],
      layout_reason:'先用表格讓照顧者對照前兆，再說明新生兒與孕婦照護，最後給居家防疫做法。',
      tone:'專業易懂', tone_reason:'照顧者需要可對照的具體症狀。',
      to_verify:['2025年全年死亡數未查到官方全年統計']},
    decision_points:[DP_SCOPE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'寶寶活力變差、一直吐？腸病毒重症前兆爸媽要記住',
    update_date:'2026/11/20',
    intro:'腸病毒大多是手口長水泡、喉嚨痛的輕症，但少數會變成重症。疾管署統計，2025年有19位腸病毒重症病人，其中17位是不到1歲的寶寶。5歲以下的孩子最需要注意，爸媽學會看重症前兆，就能及早送醫。',
    sections:[
      {heading:'出現這些狀況，馬上就醫',format:'table',table:TABLE},
      {heading:'新生寶寶要更小心',format:'bullets',items:[
        '寶寶發燒或體溫偏低、沒精神、喝奶變少，都要趕快看醫生。',
        '懷孕的媽媽少去人多、不通風的地方。',
        '快生產前2週如果發燒、咳嗽或拉肚子，要告訴醫師。'
      ]},
      {heading:'全家一起防腸病毒',format:'bullets',items:[
        '抱寶寶、餵奶前，先用肥皂洗手。',
        '乾洗手的酒精對腸病毒效果有限，還是用肥皂洗最好。',
        '孩子生病就在家休息，不要上學。'
      ]}
    ],
    think_tank_view:'把五個重症前兆貼在冰箱上，家裡每個照顧寶寶的人都看得到；回家第一件事先用肥皂洗手再抱寶寶，就是最好的保護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，語氣親切但未淡化風險，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以爸媽的觀察情境帶出前兆與防疫。', tone:'生活親切', tone_reason:'給新手爸媽與祖父母閱讀。', to_verify:[]},
    decision_points:[DP_SCOPE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'腸病毒：5大重症前兆＋肥皂洗手',
    update_date:'2026/11/20',
    intro:'2025年腸病毒併發重症19例，17例未滿1歲。5歲以下為高危險群，認得前兆、肥皂洗手是關鍵。',
    sections:[
      {heading:'重症前兆',format:'table',table:TABLE},
      {heading:'防疫重點',format:'bullets',items:[
        '肥皂洗手，酒精效果有限。',
        '生病在家休息。'
      ]}
    ],
    think_tank_view:'認得前兆、及早就醫，是保護嬰幼兒最重要的一步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為前兆與防疫兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_SCOPE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'腸病毒', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'5 歲以下為重症高危險群', primary_visual:'19 例', secondary_message:'認得重症前兆、儘速就醫', action_priority:'肥皂洗手、生病在家'},
    headline_hook:'寶寶活力變差？', headline_main:'腸病毒 5 大重症前兆', title_accent:'5 大重症前兆',
    hero_message:'5 歲以下高危險群', hero_support:'新生兒病程可能快速惡化（疾管署）',
    knowledge_title:'重症前兆', knowledge_note:'出現任一項，**儘速就醫**',
    knowledge_cards:[
      {label:'嗜睡、意識不清', icon:'brain', lines:['叫不太醒','反應變慢']},
      {label:'活力不佳、無力', icon:'people', lines:['不想玩','手腳無力']},
      {label:'肌抽躍', icon:'check', lines:['無故驚嚇','全身肌肉收縮']},
      {label:'持續嘔吐', icon:'flask', lines:['一直吐','吃不下']},
      {label:'呼吸、心跳快', icon:'heart', lines:['安靜時仍','明顯變快']}
    ],
    primary_stat:{value:'19 例', label:'2025 年腸病毒併發重症', note:'疾管署｜依發病年份；17 例未滿 1 歲'},
    secondary_stats:[
      {value:'500 ppm', label:'含氯漂白水環境消毒'},
      {value:'14 天', label:'產前有症狀要告知醫師'}
    ],
    action_title:'全家這樣防',
    action_cards:[
      {key:'洗', text:'抱寶寶前用肥皂「濕搓沖捧擦」'},
      {key:'消', text:'酒精效果有限，環境用稀釋漂白水'},
      {key:'休', text:'生病在家休息，生病不上課'},
      {key:'醫', text:'新生兒喝奶變少、沒精神快就醫'}
    ],
    carousel_suggestion:{reason:'若想把前兆、新生兒照護與消毒方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'寶寶活力變差？', headline_main:'5 大重症前兆'},
      {layout_type:'data', headline_hook:'新生兒最需留意', headline_main:'2025 年 17 例未滿 1 歲'},
      {layout_type:'action', headline_hook:'酒精效果有限', headline_main:'肥皂洗手最實在'}]},
    hashtags:['腸病毒','重症前兆','新生兒','勤洗手'],
    sources:['衛生福利部疾病管制署'],
    illustration_category:'virus-infection',
    illustration:{topic:'腸病毒防疫', audience:'新手爸媽與祖父母', scene:'爸爸在洗手台用肥皂洗手，媽媽抱著嬰兒在旁等候',
      emotion:'溫暖、細心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A father washing hands with soap at a sink while a mother holds a baby nearby waiting, warm and caring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['2025年腸病毒併發重症19例（疾管署開放資料）','前兆與消毒比例取自疾管署新聞稿'],
      layout_reason:'核心是「照顧者認得前兆」，選 knowledge：5 大前兆放中段，年度重症數退到下方，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'嬰幼兒照護資訊需具體。',
      to_verify:['重症數不代表感染總數']},
    decision_points:[Object.assign({}, DP_SCOPE, {current:'19 例｜2025 年腸病毒併發重症'})],
    content_check_note:'重症數引自疾管署並標明年份，前兆與做法引自疾管署，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'腸病毒',
    collect:{
      summary:'腸病毒感染併發重症2025年全年19例、為近5年最多，且17例為未滿1歲嬰兒；疾管署持續提醒5歲以下嬰幼童為重症高危險群、酒精消毒效果有限，「認得重症前兆、肥皂洗手」是每年春夏都值得溝通的育兒防疫議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'19例：依疾管署傳染病統計開放資料（依發病年份），2025年腸病毒感染併發重症確定病例19例，2024年為12例、2023年11例、2022年3例。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（腸病毒感染併發重症）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=0749'}},
        {item:'年度趨勢方向',desc:'近5年最多：2021年無重症確定病例，2022年起逐年增加，2025年19例為2021至2025年最高，疾管署2025年新聞稿指出新生兒重症多與伊科病毒11型感染相關。',tag:'官方統計',source:{name:'衛生福利部：國內新增1例新生兒腸病毒感染併發重症病例',url:'https://mohw.gov.tw/cp-16-84157-1.html'}},
        {item:'政策動向',desc:'500ppm含氯漂白水：疾管署提醒酒精對腸病毒的消毒效果有限，建議以10公升清水加100毫升市售漂白水進行環境消毒，並要求醫院、托嬰中心與產後護理之家落實訪客管理。',tag:'官方統計',source:{name:'衛生福利部：國內新增1例新生兒腸病毒感染併發重症病例',url:'https://mohw.gov.tw/cp-16-84157-1.html'}},
        {item:'好發族群年齡層',desc:'17例未滿1歲：2025年19例重症中17例為未滿1歲嬰兒，疾管署指出5歲以下嬰幼童為重症高危險群，新生兒可能出現發燒或低體溫、活力不佳、喝奶量變少。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（腸病毒感染併發重症）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=0749'}}
      ],
      product_view:['機會：新生兒與幼兒家庭可結合育兒衛教與住院醫療保障說明。','機會：產前、產後衛教服務可加入腸病毒預防提醒，強化陪伴形象。','風險：避免以嬰兒重症做恐懼訴求，並依保單條款如實說明。'],
      marketing_view:['機會：春夏開學與連假前後是溝通「肥皂洗手、生病不上課」的時點。','機會：祖父母常協助照顧嬰兒，可設計跨世代的前兆提醒卡。','風險：避免責怪家長或托育機構的語氣。'],
      alert_level:'medium',
      alert_reason:'2025年重症為近5年最多且集中於新生兒，適合在春夏季前溝通；即時疫情交由正式模式查詢。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('為近5年最多','SOURCE_EVIDENCE','comparison_basis_unstated',
          '「近5年最多」是自行比較2021至2025年開放資料得出，文中沒寫比較區間與各年數字，讀者無法核對。','low','no',
          null,'no','clarify','補上比較區間即可。',
          '為2021至2025年間最多（2024年12例、2023年11例）'),
        F('新生兒感染可能快速進展為心肌炎、肝炎、腦炎或多重器官衰竭','MEDICAL_INTERPRETATION','frequency_unstated',
          '專業易懂版列出嚴重併發症，但沒有說明多數腸病毒感染為輕症，讀者可能高估一般感染的危險程度。','low','no',
          null,'no','clarify','補一句多數為輕症的背景即可。',
          '多數腸病毒感染為輕症，但新生兒感染可能快速進展為心肌炎、肝炎、腦炎或多重器官衰竭'),
        F('快生產前2週如果發燒、咳嗽或拉肚子，要告訴醫師','TERMINOLOGY_LANGUAGE','paraphrase_drift',
          '疾管署原文是「產前14天內」且建議「儘速就醫」，生活親切版改成「告訴醫師」，少了要主動就醫的行動。','low','no',
          null,'no','clarify','補上就醫即可。',
          '快生產前2週如果發燒、咳嗽或拉肚子，要儘快就醫並告訴醫師'),
        F('17例未滿1歲','SOURCE_EVIDENCE','source_unstated',
          '簡潔有力版沒說明19例與17例出自疾管署統計及統計口徑（依發病年份），短文轉傳時易失去出處。','low','no',
          null,'no','clarify','補上出處即可。',
          '17例未滿1歲（疾管署，依發病年份）')
      ],
      card:[
        F('新生兒病程可能快速惡化（疾管署）','MEDICAL_INTERPRETATION','frequency_unstated',
          '卡面只寫新生兒可能快速惡化，沒有交代多數感染為輕症，可能引起過度恐慌。','low','no',
          null,'no','clarify','屬語氣平衡問題。',
          '多為輕症，但新生兒可能快速惡化（疾管署）'),
        F('含氯漂白水環境消毒','TERMINOLOGY_LANGUAGE','detail_missing',
          '「500 ppm」對一般家長不易理解，卡面沒有寫出稀釋比例（10公升水加100毫升漂白水）。','low','no',
          null,'no','clarify','可直接寫稀釋方法。',
          '漂白水稀釋（10 公升水＋100 毫升）')
      ]
    },
    title_alts:[
      '腸病毒重症前兆有哪些？5歲以下與新生兒最需留意，酒精消毒效果有限',
      '寶寶活力變差、一直吐？腸病毒重症前兆爸媽要記住',
      '2025年腸病毒重症為近5年最多：新生兒照護與居家防疫重點'
    ],
    card_title_alts:[
      ['寶寶活力變差？','腸病毒 5 大重症前兆'],
      ['酒精效果有限','肥皂洗手防腸病毒'],
      ['新生兒最需留意','腸病毒重症多在 1 歲前']
    ],
    data_addon:[
      '腸病毒感染併發重症：2022年3例、2023年11例、2024年12例、2025年19例（疾管署開放資料，依發病年份）。',
      '環境消毒：10公升清水加100毫升市售漂白水（約500ppm），擦拭後靜置10分鐘再用清水擦拭。',
      '洗手時機：吃東西前、跟小寶寶玩前、擤鼻涕後、上廁所後及看病前後。'
    ],
    cta:'把5個重症前兆貼在冰箱上，回家先用肥皂洗手再抱寶寶。'
  });
})();
