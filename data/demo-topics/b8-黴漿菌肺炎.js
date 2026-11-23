/* v6 示範主題：黴漿菌肺炎（B8 傳染病防治）
   查證日期：2026-11-20。數據來源：疾管署新聞稿（2023-12-01，衛福部網站轉載；引述台灣兒童感染症醫學會與美國CDC）。
   黴漿菌非個案通報傳染病，查無更新一期官方年度統計。只寫特性與整體說明，不寫當週疫情。
   參考方向：健康智庫〈注意！會走動的肺炎！〉2023/11。 */
(function(){
  const REFS = [
    {title:'疾管署已於4處國際機場「定點監測、鼓勵採檢」，請家長留意幼童健康',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-76817-1.html'}
  ];
  const TABLE = {headers:['特徵','說明'], rows:[
    ['好發族群','5歲以上兒童及年輕人較常見'],
    ['常見症狀','喉嚨痛、倦怠、發燒，咳嗽可長達數週甚至數月'],
    ['病程','多數症狀輕微、可自行痊癒，約10%出現肺炎'],
    ['危險徵兆','呼吸困難、呼吸急促、發紺（缺氧）應儘速就醫']
  ]};
  const TAGS = ['黴漿菌','黴漿菌肺炎','久咳','兒童呼吸道','會走路的肺炎'];

  const DP_YEAR = {id:'dp-myco-year', type:'data_version', title:'官方說明停在2023年',
    desc:'黴漿菌不是需要個案通報的法定傳染病，疾管署沒有公布年度病例數；目前查到最近一次官方完整說明是2023年12月的新聞稿。AI 沒有用其他來源補上流行程度，也沒有推估當年疫情。',
    current:'約10%感染者出現肺炎（疾管署2023年引述兒童感染症醫學會）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約 10%', value:'出現肺炎比例', note:'疾管署2023年新聞稿引述醫學會（目前採用）'},
      {label:'未公布', value:'年度病例數', note:'非個案通報疾病，無全國年度統計'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'黴漿菌肺炎是什麼？咳嗽數週不好要就醫，多數輕症但留意危險徵兆',
    update_date:'2026/11/20',
    intro:'肺炎黴漿菌較常見於5歲以上兒童及年輕人，症狀包括喉嚨痛、倦怠、發燒，以及長達數週甚至數月的咳嗽。疾病管制署2023年引述台灣兒童感染症醫學會說明，感染後多數人症狀輕微、可自行痊癒，約有10%會出現肺炎，因此又被稱為「會走路的肺炎」。本文整理黴漿菌的特徵、就醫時機與照護重點。',
    sections:[
      {heading:'認識肺炎黴漿菌',format:'table',table:TABLE},
      {heading:'什麼時候要就醫',format:'bullets',items:[
        '咳嗽持續數週未改善，或發燒合併咳嗽、倦怠，應就醫評估。',
        '出現呼吸困難、呼吸急促或發紺（嘴唇發紫），應儘速就醫。',
        '確診後配合醫師指示服藥，不要自行停藥或使用家中剩餘抗生素。'
      ]},
      {heading:'流行特性',format:'bullets',items:[
        '整年都可能發生，尤其好發於春夏之交及初秋。',
        '疾管署引述美國CDC資料，黴漿菌可能每3至7年會有一波較大的流行。',
        '黴漿菌不需個案通報，沒有全國年度病例統計，即時流行狀況需參考疾管署最新監測。'
      ]}
    ],
    think_tank_view:'黴漿菌多數是輕症，最常被忽略的是「咳很久」。孩子或年輕人咳嗽拖了好幾週，不要只當成一般感冒；確診後依醫囑完整服藥，也是避免抗藥性的關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'症狀與比例引自疾管署2023年新聞稿並標明年份與醫學會出處，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['約10%出現肺炎、好發族群取自疾管署2023-12-01新聞稿（引述兒童感染症醫學會）','每3至7年流行一波為疾管署引述美國CDC'],
      layout_reason:'先用表格整理特徵，再說明就醫時機，最後交代流行特性與資料限制。',
      tone:'專業易懂', tone_reason:'家長需要分辨輕症與危險徵兆。',
      to_verify:['官方說明為2023年，查無更新一期','黴漿菌抗藥性比例未查到官方數字，未寫']},
    decision_points:[DP_YEAR]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'孩子咳了好幾週？可能是「會走路的肺炎」黴漿菌',
    update_date:'2026/11/20',
    intro:'有些孩子咳嗽咳了好幾個禮拜都不好，精神卻還不錯，照樣上學、跑跳，這可能是肺炎黴漿菌。疾管署2023年引述醫學會說明，它比較常見於5歲以上的孩子和年輕人，大多是輕症，大約每10個感染的人有1個會變成肺炎。',
    sections:[
      {heading:'黴漿菌有什麼特徵？',format:'table',table:TABLE},
      {heading:'這時候要去看醫生',format:'bullets',items:[
        '咳嗽好幾週都沒好，或發燒、很累。',
        '呼吸很喘、很急，或嘴唇發紫，要趕快就醫。',
        '醫生開的藥要照指示吃完。'
      ]},
      {heading:'爸媽可以知道的事',format:'bullets',items:[
        '一年四季都可能遇到，春夏交接和初秋比較常見。',
        '每隔幾年可能會有一波比較大的流行。'
      ]}
    ],
    think_tank_view:'咳很久不一定是嚴重的病，但值得讓醫生看一下。照醫囑把藥吃完，孩子好得快，也不容易產生抗藥性。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，語氣親切但未淡化危險徵兆，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家長觀察的情境帶出特徵與就醫時機。', tone:'生活親切', tone_reason:'給學齡兒童家長閱讀。', to_verify:[]},
    decision_points:[DP_YEAR]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'黴漿菌：久咳數週要就醫',
    update_date:'2026/11/20',
    intro:'肺炎黴漿菌好發於5歲以上兒童及年輕人，多數輕症，約10%出現肺炎（疾管署2023年）。',
    sections:[
      {heading:'特徵',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '呼吸急促、發紺立即就醫。',
        '依醫囑服藥。'
      ]}
    ],
    think_tank_view:'久咳別硬撐，危險徵兆要立即就醫。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為特徵與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_YEAR]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'黴漿菌肺炎', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'久咳數週可能是黴漿菌', primary_visual:'約 10%', secondary_message:'多數輕症，留意危險徵兆', action_priority:'就醫評估、依醫囑服藥'},
    headline_hook:'孩子咳了好幾週？', headline_main:'認識會走路的肺炎', title_accent:'會走路的肺炎',
    hero_message:'5 歲以上兒童較常見', hero_support:'年輕人也常見（疾管署 2023 年）',
    knowledge_title:'常見表現', knowledge_note:'呼吸困難、發紺，**儘速就醫**',
    knowledge_cards:[
      {label:'久咳', icon:'chat', lines:['咳嗽可長達','數週甚至數月']},
      {label:'發燒、倦怠', icon:'check', lines:['精神可能','還不錯']},
      {label:'喉嚨痛', icon:'heart', lines:['類似感冒','容易被忽略']}
    ],
    primary_stat:{value:'約 10%', label:'感染後出現肺炎', note:'疾管署 2023 年引述兒童感染症醫學會'},
    secondary_stats:[
      {value:'3–7 年', label:'可能出現一波較大流行'},
      {value:'春夏、初秋', label:'較常見的季節'}
    ],
    action_title:'家長這樣做',
    action_cards:[
      {key:'看', text:'咳嗽數週未好，帶孩子就醫評估'},
      {key:'急', text:'呼吸急促、嘴唇發紫立即就醫'},
      {key:'服', text:'依醫囑服藥，不自行停藥'},
      {key:'休', text:'生病時在家休息，咳嗽戴口罩'}
    ],
    carousel_suggestion:{reason:'若想把特徵、就醫時機與用藥分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'會走路的肺炎', headline_main:'黴漿菌有什麼特徵？'},
      {layout_type:'knowledge', headline_hook:'危險徵兆', headline_main:'這時候要立即就醫'},
      {layout_type:'action', headline_hook:'依醫囑服藥', headline_main:'不自行停藥'}]},
    hashtags:['黴漿菌','久咳','兒童呼吸道','會走路的肺炎'],
    sources:['衛生福利部疾病管制署','台灣兒童感染症醫學會'],
    illustration_category:'virus-infection',
    illustration:{topic:'兒童久咳就醫', audience:'學齡兒童家長', scene:'一位家長帶著咳嗽的學齡孩子在診間，醫師用聽診器檢查',
      emotion:'安心、被照顧', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A parent with a coughing school-age child in a clinic while a doctor listens with a stethoscope, reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['約10%出現肺炎（疾管署2023年新聞稿）'],
      layout_reason:'核心是辨識特徵，選 knowledge：3 個常見表現放中段，比例與流行週期退到下方，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'幫家長分辨輕重。',
      to_verify:['官方說明為2023年']},
    decision_points:[Object.assign({}, DP_YEAR, {current:'約 10%｜感染後出現肺炎'})],
    content_check_note:'比例與特徵引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'黴漿菌肺炎',
    collect:{
      summary:'肺炎黴漿菌多見於5歲以上兒童及年輕人，多數為輕症但咳嗽可拖數週，約10%出現肺炎；黴漿菌非個案通報疾病、無全國年度統計，「久咳就醫、依醫囑服藥、認得危險徵兆」是秋冬與換季時值得溝通的兒童呼吸道議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約10%出現肺炎：疾管署2023年新聞稿引述台灣兒童感染症醫學會，肺炎黴漿菌感染後多數人症狀輕微可自行痊癒，約10%會出現肺炎、症狀亦相對輕微。',tag:'官方統計',source:{name:'衛生福利部：疾管署「定點監測、鼓勵採檢」，請家長留意幼童健康',url:'https://mohw.gov.tw/cp-16-76817-1.html'}},
        {item:'年度趨勢方向',desc:'每3至7年可能一波較大流行：疾管署引述美國CDC資料指出黴漿菌流行具週期性，國內黴漿菌非個案通報傳染病，沒有公布全國年度病例數。',tag:'官方統計',source:{name:'衛生福利部：疾管署「定點監測、鼓勵採檢」，請家長留意幼童健康',url:'https://mohw.gov.tw/cp-16-76817-1.html'}},
        {item:'政策動向',desc:'兒童用藥增加輸入：2023年黴漿菌流行期間，食藥署說明兒童用原廠藥水增加輸入、國內同成分學名藥擴大生產，成人用藥庫存充足。',tag:'官方統計',source:{name:'衛生福利部：疾管署「定點監測、鼓勵採檢」，請家長留意幼童健康',url:'https://mohw.gov.tw/cp-16-76817-1.html'}},
        {item:'好發族群年齡層',desc:'5歲以上兒童及年輕人較常見：疾管署引述醫學會說明，肺炎黴漿菌整年都可能發生，尤好發於春夏之交及初秋，咳嗽可長達數週甚至數月。',tag:'官方統計',source:{name:'衛生福利部：疾管署「定點監測、鼓勵採檢」，請家長留意幼童健康',url:'https://mohw.gov.tw/cp-16-76817-1.html'}}
      ],
      product_view:['機會：學齡兒童呼吸道感染是家長常見關注，可搭配住院醫療保障與兒童健康衛教。','風險：黴漿菌多為輕症，避免以「肺炎」誇大風險做商品訴求。','風險：須依保單條款如實說明門診與住院給付範圍。'],
      marketing_view:['機會：開學與換季時是溝通「久咳就醫」的時點。','機會：「會走路的肺炎」是好記的說法，適合社群衛教。','風險：避免鼓勵家長向醫師要求抗生素，以依醫囑用藥為主。'],
      alert_level:'low',
      alert_reason:'多數為輕症且無全國年度統計，屬季節性衛教議題；即時流行狀況交由正式模式查詢。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('不要自行停藥或使用家中剩餘抗生素','SOURCE_EVIDENCE','claim_without_source',
          '疾管署2023年新聞稿只寫「配合醫師指示服藥」，「不要使用家中剩餘抗生素」是延伸建議，文章沒有對應出處。','low','yes',
          '疾管署或食藥署關於抗生素正確使用的衛教頁面。','no','confirm','建議合理，但需補出處。',
          '配合醫師指示服藥（疾管署），不自行停藥'),
        F('大約每10個感染的人有1個會變成肺炎','MEDICAL_INTERPRETATION','omitted_qualifier',
          '生活親切版保留了比例，但刪掉了原文「症狀亦相對輕微」，讀者可能把「變成肺炎」理解為重症。','low','no',
          null,'no','clarify','補回限定語即可。',
          '大約每10個感染的人有1個會變成肺炎，但通常也相對輕微'),
        F('每隔幾年可能會有一波比較大的流行','SOURCE_EVIDENCE','source_unstated',
          '生活親切版沒有說明「每隔幾年」是疾管署引述美國CDC的說法，也省略了3至7年的範圍。','low','no',
          null,'no','clarify','補上出處與年數即可。',
          '疾管署引述美國CDC，每3至7年可能會有一波比較大的流行'),
        F('約10%出現肺炎（疾管署2023年）','SOURCE_EVIDENCE','secondary_citation',
          '簡潔有力版只寫疾管署，但這個比例是疾管署新聞稿引述台灣兒童感染症醫學會的說法，屬二手引述。','low','no',
          null,'no','clarify','補上原始出處即可。',
          '約10%出現肺炎（疾管署2023年引述兒童感染症醫學會）')
      ],
      card:[
        F('生病時在家休息，咳嗽戴口罩','SOURCE_EVIDENCE','claim_without_source',
          '引用的疾管署2023年新聞稿沒有「生病在家休息、咳嗽戴口罩」的建議，卡面來源欄只列疾管署與醫學會。','low','yes',
          '疾管署呼吸道傳染病一般防護建議。','no','confirm','屬一般防疫建議，需補對應出處。',
          '依疾管署呼吸道防護建議，咳嗽戴口罩'),
        F('可能出現一波較大流行','SOURCE_EVIDENCE','source_unstated',
          '「3–7 年」是美國CDC的觀察，卡面沒有標示，讀者可能以為是台灣的監測結果。','low','no',
          null,'no','clarify','補上出處即可。',
          '可能出現一波較大流行（美國 CDC）')
      ]
    },
    title_alts:[
      '黴漿菌肺炎是什麼？咳嗽數週不好要就醫，多數輕症但留意危險徵兆',
      '孩子咳了好幾週？可能是「會走路的肺炎」黴漿菌',
      '黴漿菌好發族群與就醫時機：家長一次看懂'
    ],
    card_title_alts:[
      ['孩子咳了好幾週？','認識會走路的肺炎'],
      ['久咳別硬撐','黴漿菌就醫時機'],
      ['多數輕症','但要留意危險徵兆']
    ],
    data_addon:[
      '肺炎黴漿菌較常見於5歲以上兒童及年輕人，尤好發於春夏之交及初秋（疾管署2023年）。',
      '感染後約10%出現肺炎，症狀相對輕微（疾管署引述兒童感染症醫學會）。',
      '黴漿菌非個案通報傳染病，無全國年度病例統計。'
    ],
    cta:'孩子咳嗽超過幾週沒好就帶去看醫生；確診後依醫囑把藥吃完。'
  });
})();
