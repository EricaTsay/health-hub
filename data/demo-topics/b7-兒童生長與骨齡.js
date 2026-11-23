/* v6 示範主題：兒童生長與骨齡（B7 女性・男性・生育與兒童）
   查證日期：2026-11-21。查無國健署兒童生長評估與骨齡檢查的近期官方衛教；
   內容以林口長庚醫院兒童內分泌暨遺傳科醫師經早安健康（2025-01-09）說明為主（二手），生長曲線標準引自衛生署2008年說明。
   參考方向：健康智庫〈擔心長不高？骨齡檢測兒童生長狀況〉2025/04。 */
(function(){
  const REFS = [
    {title:'長高有特效藥嗎？家中小孩「3件事」沒做好，竟會引發健康成長危機（林口長庚醫院兒童內分泌暨遺傳科）',source:'早安健康',url:'https://edh.tw/articles/2NiNLDM'},
    {title:'我國兒童生長曲線圖將採用世界衛生組織最新的兒童生長標準',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-28034-1.html'}
  ];
  const TABLE = {headers:['醫師建議的生活習慣','怎麼做'], rows:[
    ['睡眠','晚上9點半上床、10點前入睡，幼兒睡足10小時、青少年8小時以上'],
    ['運動','每週5天以上、每次至少30分鐘中強度運動'],
    ['營養','減少含糖飲料與甜食，攝取足夠蛋白質與天然鈣質'],
    ['不亂補','轉骨方或成藥用錯可能讓骨齡提前，不宜任意購買服用']
  ]};
  const TAGS = ['兒童生長','長高','骨齡','性早熟','生長曲線'];

  const DP_SOURCE = {id:'dp-growth-source', type:'data_source', title:'評估指標來自醫師說明',
    desc:'「身高在第3百分位以上、每年至少長4公分、不跨越兩個百分位級距」是林口長庚兒童內分泌科醫師的衛教說明，非國健署公告的臨床門檻；國健署近期也未發布兒童生長評估的新聞稿。AI 沒有把醫師說明寫成官方標準。',
    current:'3項指標任一未達標建議就醫評估（林口長庚醫師，2025）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'3 項指標', value:'醫師衛教', note:'早安健康2025-01-09（目前採用）'},
      {label:'WHO 生長標準', value:'0至5歲曲線', note:'衛生署2008年決定採用，屬官方說明'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'孩子長得夠高嗎？3項生長指標、性早熟警訊與骨齡評估',
    update_date:'2026/11/21',
    intro:'林口長庚醫院兒童內分泌暨遺傳科醫師2025年說明，判斷孩子生長是否正常可看3項指標：身高是否在第3百分位以上、每年是否至少長高4公分、身高百分位是否跨越兩個級距以上；任一項未達標就建議就醫評估。醫師也指出，影響身高最主要的是遺傳，營養、運動、睡眠也有影響，生長激素或甲狀腺素缺乏等內分泌疾病則需要醫師診斷。',
    sections:[
      {heading:'醫師建議的長高生活習慣',format:'table',table:TABLE},
      {heading:'性早熟與骨齡',format:'bullets',items:[
        '正常青春期約在女生8至13歲、男生9至14歲出現第二性徵。',
        '女生8歲前胸部隆起、男生9歲前睪丸變大，建議及早就醫。',
        '快速進展型性早熟會使骨齡進展大於實際年齡、生長板提早閉合，影響成年身高。'
      ]},
      {heading:'什麼時候該就醫',format:'bullets',items:[
        '身高持續低於第3百分位，或一年長不到4公分。',
        '生長曲線短時間內跨越兩個百分位級距。',
        '長期服用口服類固醇等藥物的孩子，應與醫師討論生長追蹤。'
      ]}
    ],
    think_tank_view:'孩子長多高，遺傳占了大部分，家長能做的是把睡眠、運動、營養顧好，並定期把身高畫在生長曲線上。真正需要擔心的不是「比同學矮」，而是「長得比以前慢」；發現異常時找兒童內分泌科評估，比自行購買轉骨或增高產品可靠得多。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'生長指標與性早熟說明標明為醫師衛教，非官方臨床標準；未推薦任何增高產品，未使用療效保證用語。',
    ai_rationale:{basis:['3項指標、遺傳與疾病因素、性早熟年齡、生活建議（林口長庚醫師，早安健康2025-01-09）'],
      layout_reason:'先用表格給生活習慣建議，再說明性早熟與骨齡，最後給就醫時機。',
      tone:'專業易懂', tone_reason:'降低家長身高焦慮、避免亂補。',
      to_verify:['查無國健署近期兒童生長官方衛教','骨齡X光檢查方式未在引用來源中說明']},
    decision_points:[DP_SOURCE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'擔心孩子長不高？先看這3個指標，別急著吃轉骨方',
    update_date:'2026/11/21',
    intro:'孩子排隊總是站第一個，爸媽難免擔心。林口長庚的兒童內分泌科醫師說，要看3件事：身高有沒有在第3百分位以上、一年有沒有長4公分以上、生長曲線有沒有突然掉兩格。這3件都正常，通常不用太擔心；其中一項不對，就帶去看醫生。',
    sections:[
      {heading:'長高生活小撇步',format:'table',table:TABLE},
      {heading:'太早發育也要注意',format:'bullets',items:[
        '女生8歲前胸部開始發育、男生9歲前睪丸變大，要去看醫生。',
        '太早發育可能讓骨頭提早長完，反而長不高。'
      ]},
      {heading:'爸媽可以這樣做',format:'bullets',items:[
        '每半年幫孩子量一次身高，畫在兒童健康手冊的生長曲線上。',
        '早點上床睡覺，多出去跑跑跳跳。',
        '不要自己買轉骨方或增高產品。'
      ]}
    ],
    think_tank_view:'與其拿孩子和同學比，不如拿孩子和半年前的自己比。生長曲線穩穩往上，就是好消息。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容標明為醫師說法，語氣親切，未推薦任何增高產品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家長擔心身高的情境帶出指標與行動。', tone:'生活親切', tone_reason:'降低家長焦慮。', to_verify:[]},
    decision_points:[DP_SOURCE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'兒童生長：3指標＋性早熟警訊',
    update_date:'2026/11/21',
    intro:'醫師建議：身高第3百分位以上、每年長4公分以上、不跨兩級距（林口長庚醫師，2025）。女生8歲、男生9歲前發育要就醫。',
    sections:[
      {heading:'生活習慣',format:'table',table:TABLE},
      {heading:'就醫時機',format:'bullets',items:[
        '3項指標任一未達標。',
        '疑似性早熟。'
      ]}
    ],
    think_tank_view:'畫生長曲線、顧好作息，不亂補。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容標明醫師說法，未推薦增高產品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為習慣與就醫兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_SOURCE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'兒童生長與骨齡', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'看 3 項指標判斷生長是否正常', primary_visual:'4 公分', secondary_message:'女 8 歲、男 9 歲前發育要就醫', action_priority:'畫生長曲線、顧作息、不亂補'},
    headline_hook:'擔心孩子長不高？', headline_main:'先看 3 項生長指標', title_accent:'3 項生長指標',
    hero_message:'每年至少長高 4 公分', hero_support:'林口長庚兒童內分泌科醫師（2025）',
    knowledge_title:'3 項生長指標', knowledge_note:'任一項未達標，**就醫評估**',
    knowledge_cards:[
      {label:'身高位置', icon:'search', lines:['第 3 百分位','以上']},
      {label:'生長速度', icon:'check', lines:['每年至少','長高 4 公分']},
      {label:'曲線穩定', icon:'report', lines:['不跨越','兩個級距以上']}
    ],
    primary_stat:{value:'8 歲／9 歲', label:'女／男性早熟警訊年齡', note:'醫師衛教｜此前出現第二性徵要就醫'},
    secondary_stats:[
      {value:'10 小時', label:'幼兒建議睡眠時間'},
      {value:'30 分鐘', label:'每次中強度運動'}
    ],
    action_title:'長高這樣做',
    action_cards:[
      {key:'量', text:'定期量身高，畫在生長曲線上'},
      {key:'睡', text:'晚上 10 點前入睡'},
      {key:'動', text:'每週 5 天、每次 30 分鐘運動'},
      {key:'補', text:'不自行購買轉骨方或成藥'}
    ],
    carousel_suggestion:{reason:'若想把指標、性早熟與生活習慣分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'擔心長不高？', headline_main:'3 項生長指標'},
      {layout_type:'knowledge', headline_hook:'太早發育', headline_main:'性早熟警訊'},
      {layout_type:'action', headline_hook:'長高生活', headline_main:'睡、動、吃、不亂補'}]},
    hashtags:['兒童生長','長高','骨齡','性早熟'],
    sources:['林口長庚醫院（媒體引述）','衛生福利部'],
    illustration_category:'general',
    illustration:{topic:'兒童量身高', audience:'學齡兒童家長', scene:'孩子靠著門框量身高，家長拿筆在門框上畫記號，旁邊放著兒童健康手冊',
      emotion:'溫馨、期待', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A child standing against a door frame while a parent marks their height with a pen, a child health booklet nearby, warm and hopeful, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['3項指標與性早熟年齡（林口長庚醫師，早安健康2025-01-09）'],
      layout_reason:'核心是家長可自行判斷的指標，選 knowledge：3 項指標放中段，性早熟年齡退到下方，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'降低身高焦慮。',
      to_verify:['指標為醫師衛教']},
    decision_points:[Object.assign({}, DP_SOURCE, {current:'每年至少長高 4 公分（醫師說明）'})],
    content_check_note:'內容標明醫師說法，未推薦增高產品，未使用療效保證用語。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'兒童生長與骨齡',
    collect:{
      summary:'孩子身高主要受遺傳影響，醫師建議以「第3百分位以上、每年至少長4公分、不跨兩個百分位級距」判斷生長是否正常，並留意女生8歲、男生9歲前的性早熟警訊；官方近期無相關衛教，「畫生長曲線、顧作息、不亂補轉骨」是學齡家庭值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'每年至少4公分：林口長庚兒童內分泌科醫師2025年說明，孩子正常情況下每年應至少增高4公分，身高應在第3百分位以上、且百分位通常不跨越兩個級距（媒體引述）。',tag:'市場觀察',source:{name:'早安健康：長高有特效藥嗎？（林口長庚醫院兒童內分泌暨遺傳科）',url:'https://edh.tw/articles/2NiNLDM'}},
        {item:'年度趨勢方向',desc:'0至5歲採WHO生長標準：衛生署2008年說明我國兒童生長曲線將採用世界衛生組織2006年公布的兒童生長標準，該標準以8,440位0至5歲健康嬰幼兒資料建立。',tag:'官方統計',source:{name:'衛生福利部：我國兒童生長曲線圖將採用世界衛生組織最新的兒童生長標準',url:'https://mohw.gov.tw/cp-16-28034-1.html'}},
        {item:'政策動向',desc:'不宜任意服用轉骨方：醫師指出轉骨並非傳統中醫概念，用錯或過度使用可能導致骨齡提前，也不需額外補充鈣片或鋅（營養不良者先抽血檢查）。',tag:'市場觀察',source:{name:'早安健康：長高有特效藥嗎？（林口長庚醫院兒童內分泌暨遺傳科）',url:'https://edh.tw/articles/2NiNLDM'}},
        {item:'好發族群年齡層',desc:'女生8歲、男生9歲前：醫師指出女生8歲前胸部隆起、男生9歲前睪丸變大應及早就醫，快速進展型性早熟可能使生長板過早閉合。',tag:'市場觀察',source:{name:'早安健康：長高有特效藥嗎？（林口長庚醫院兒童內分泌暨遺傳科）',url:'https://edh.tw/articles/2NiNLDM'}}
      ],
      product_view:['機會：親子族群關注身高發展，可結合兒童健康衛教。','風險：不推薦任何增高產品、轉骨方或保健品。','風險：生長激素治療等醫療決策依醫師評估，避免與商品連結。'],
      marketing_view:['機會：寒暑假是帶孩子做生長評估的時點。','機會：「和半年前的自己比」是降低焦慮的正向訊息。','風險：避免強化身高焦慮或外貌比較。'],
      alert_level:'low',
      alert_reason:'屬長期親子健康議題，官方無近期衛教，適合以醫師衛教為主謹慎溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('任一項未達標就建議就醫評估','SOURCE_EVIDENCE','single_source',
          '3項指標出自單一醫師的衛教說明，文章沒提醒這不是國健署或醫學會公告的臨床標準。','medium','yes',
          '台灣兒科醫學會或兒童內分泌學會的生長評估建議。','no','confirm','屬單一醫師說法。',
          '任一項未達標就建議就醫評估（醫師衛教建議，非官方臨床標準）'),
        F('比自行購買轉骨或增高產品可靠得多','COMPLIANCE_RISK','comparative_claim',
          '智庫觀點以比較語氣評價產品，雖立意是提醒勿亂補，但「可靠得多」缺乏依據且可能引起爭議。','low','no',
          null,'no','clarify','改為中性提醒。',
          '應先就醫評估，不宜自行購買轉骨或增高產品'),
        F('這3件都正常，通常不用太擔心','MEDICAL_INTERPRETATION','overreassurance',
          '生活親切版的安撫語氣可能讓家長忽略性早熟等其他警訊。','low','no',
          null,'no','clarify','補上性早熟提醒。',
          '這3件都正常，加上沒有提早發育，通常不用太擔心'),
        F('醫師建議：身高第3百分位以上、每年長4公分以上、不跨兩級距（林口長庚醫師，2025）','SOURCE_EVIDENCE','single_source',
          '簡潔有力版已標明醫師與年份，但沒說明這是衛教建議而非診斷標準。','low','no',
          null,'no','clarify','補上性質即可。',
          '醫師衛教建議：身高第3百分位以上、每年長4公分以上、不跨兩級距（林口長庚醫師，2025）')
      ],
      card:[
        F('林口長庚兒童內分泌科醫師（2025）','SOURCE_EVIDENCE','single_source',
          'hero 主訊息依據單一醫師說法，分享時可能被當成官方標準。','low','no',
          null,'no','clarify','屬出處層級提醒。',
          '兒童內分泌科醫師衛教建議（2025）'),
        F('幼兒建議睡眠時間','SOURCE_EVIDENCE','single_source',
          '「10 小時」為醫師建議，卡面沒有標示出處，也沒說明青少年為8小時以上。','low','no',
          null,'no','clarify','補上年齡與出處。',
          '幼兒建議睡眠時間（醫師建議）')
      ]
    },
    title_alts:[
      '孩子長得夠高嗎？3項生長指標、性早熟警訊與骨齡評估',
      '擔心孩子長不高？先看這3個指標，別急著吃轉骨方',
      '兒童生長曲線怎麼看：就醫時機與長高生活習慣'
    ],
    card_title_alts:[
      ['擔心孩子長不高？','先看 3 項生長指標'],
      ['太早發育要注意','女 8 歲、男 9 歲'],
      ['長高不靠轉骨','睡、動、吃最實在']
    ],
    data_addon:[
      '林口長庚醫師（2025）：身高第3百分位以上、每年至少長高4公分、百分位不跨兩級距。',
      '性早熟警訊：女生8歲前胸部隆起、男生9歲前睪丸變大。',
      '衛生署（2008）：0至5歲兒童生長曲線採用WHO 2006年兒童生長標準。'
    ],
    cta:'這個月幫孩子量一次身高，畫在兒童健康手冊的生長曲線上，和半年前比一比。'
  });
})();
