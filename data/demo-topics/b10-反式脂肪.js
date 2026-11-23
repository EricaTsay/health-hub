/* v6 示範主題：反式脂肪（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-20。數據來源：衛福部「自107年7月1日，食品中不得使用不完全氫化油」、食藥署「發布訂定食用氫化油之使用限制」新聞稿（罰則）、食藥署闢謠〈市售標榜天然的乳製品為什麼還有反式脂肪?〉（2019）、〈市售部分洋芋片包裝標示反式脂肪為0，是真的沒有反式脂肪嗎？〉（零標示條件）。
   注意：未查到國人反式脂肪攝取量的近年官方統計。
   參考方向：健康智庫〈早餐店反式脂肪超標？什麼是反式脂肪〉2023/12。 */
(function(){
  const REFS = [
    {title:'自107年7月1日，食品中不得使用不完全氫化油',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-3794-41220-1.html'},
    {title:'發布訂定「食用氫化油之使用限制」',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/TC/newsContent.aspx?id=19817&cid=4'},
    {title:'市售標榜天然的乳製品為什麼還有反式脂肪?',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/Tc/newsContent.aspx?id=25820'},
    {title:'市售部分洋芋片包裝標示反式脂肪為0，是真的沒有反式脂肪嗎？',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/tc/newsContent.aspx?cid=5049&id=19292'}
  ];
  const TABLE = {headers:['重點','說明'], rows:[
    ['人工反式脂肪','主要來自不完全氫化的植物油，107年7月1日起食品全面禁用'],
    ['天然反式脂肪','牛、羊等反芻動物的消化道細菌作用產生，存在乳品與肉類中'],
    ['標示為0','每100公克食品反式脂肪不超過0.3公克（或總脂肪不超過1公克）即可標0'],
    ['看成分表','留意「部分氫化」「氫化植物油」等字樣']
  ]};
  const TAGS = ['反式脂肪','氫化油','營養標示','食品安全','心血管健康'];

  const PRO = {
    content_type:'健康文章',
    title:'反式脂肪禁了嗎？人工與天然的差別、標示為0的真相',
    update_date:'2026/11/20',
    intro:'衛生福利部規定，自107年7月1日起（以製造日期為準）食品不得使用不完全氫化油，以減少加工食品中的人工反式脂肪；違者經限期改正未改正，可處3萬元以上、300萬元以下罰鍰。食藥署指出，許多研究證實攝取反式脂肪與心血管疾病風險增加相關。不過，乳品與肉類中仍有天然反式脂肪，而營養標示「0」也不代表完全沒有。',
    sections:[
      {heading:'反式脂肪4個重點',format:'table',table:TABLE},
      {heading:'為什麼要限制',format:'bullets',items:[
        '氫化讓油更耐高溫、更穩定、保存期限更長，但不完全氫化會產生反式脂肪。',
        '研究顯示限制人工反式脂肪攝取，有助降低冠狀動脈疾病風險。',
        '政府給業者3年緩衝期，107年7月1日起全面禁用。'
      ]},
      {heading:'日常怎麼吃',format:'bullets',items:[
        '包裝食品看營養標示與成分表，標0仍可能含少量。',
        '酥炸、烘焙點心少吃，烹調多用蒸、煮、滷。',
        '天然反式脂肪來自乳品與肉類，依我的餐盤適量攝取即可。'
      ]}
    ],
    think_tank_view:'禁用不完全氫化油後，人工反式脂肪已大幅減少，但「標示為0」與「天然來源」仍是消費者常見的盲點。與其記住每種脂肪的名稱，不如少吃高度加工的酥炸點心，就同時避開了反式脂肪與過多的飽和脂肪。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'禁用規定、罰則與標示條件引自衛福部與食藥署，未涉及特定品牌或店家。',
    ai_rationale:{basis:['107年7月1日起禁用不完全氫化油（衛福部）','零標示條件（食藥署闢謠專區）'],
      layout_reason:'先用表格整理人工、天然、標示與成分表4個重點，再說明禁用原因，最後給日常飲食建議。',
      tone:'專業易懂', tone_reason:'需釐清法規與標示細節。',
      to_verify:['未查到國人反式脂肪攝取量近年官方統計']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'包裝寫反式脂肪0，就真的沒有嗎？',
    update_date:'2026/11/20',
    intro:'很多人看到包裝上「反式脂肪0公克」就放心了。其實依規定，每100公克食品的反式脂肪不超過0.3公克就可以標0。好消息是，台灣從107年7月1日起，所有食品都不能再用會產生人工反式脂肪的「不完全氫化油」。另外，牛奶、牛肉裡本來就有一點天然的反式脂肪。',
    sections:[
      {heading:'反式脂肪一次搞懂',format:'table',table:TABLE},
      {heading:'為什麼要少吃？',format:'bullets',items:[
        '反式脂肪和心血管疾病風險增加有關。',
        '以前常用來讓油耐炸、餅乾酥脆、放比較久。',
        '現在法規已經禁用不完全氫化油。'
      ]},
      {heading:'聰明吃',format:'bullets',items:[
        '標0不等於完全沒有，看看成分表有沒有「氫化」兩個字。',
        '炸物、酥皮點心偶爾吃就好。',
        '牛奶、肉類正常適量吃就可以。'
      ]}
    ],
    think_tank_view:'少吃酥炸和加工點心，就同時少吃了反式脂肪和多餘的油。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'規定與標示條件引自衛福部與食藥署，未涉及特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以「包裝標0」的疑問切入。', tone:'生活親切', tone_reason:'給會看包裝的消費者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'反式脂肪：107年起禁用不完全氫化油',
    update_date:'2026/11/20',
    intro:'107年7月1日起食品禁用不完全氫化油。每100公克反式脂肪不超過0.3公克即可標0。',
    sections:[
      {heading:'4個重點',format:'table',table:TABLE},
      {heading:'健康影響',format:'bullets',items:[
        '與心血管疾病風險增加相關。'
      ]},
      {heading:'建議',format:'bullets',items:[
        '看成分表。',
        '少吃酥炸點心。'
      ]}
    ],
    think_tank_view:'標0不等於零，少吃加工酥炸食品最實際。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自衛福部與食藥署，未涉及特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為重點、影響、建議三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'反式脂肪', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'標示為 0 不等於完全沒有', primary_visual:'0.3 公克', secondary_message:'107 年起禁用不完全氫化油', action_priority:'看成分表、少吃酥炸'},
    headline_hook:'反式脂肪標 0 就沒有？', headline_main:'反式脂肪 4 個重點一次看', title_accent:'4 個重點',
    hero_message:'≦ 0.3 公克可標 0', hero_support:'每 100 公克食品的反式脂肪含量（食藥署）',
    knowledge_title:'反式脂肪 4 個重點', knowledge_note:'107 年 7 月 1 日起，**食品禁用不完全氫化油**',
    knowledge_cards:[
      {label:'人工來源', icon:'flask', lines:['不完全氫化植物油','已全面禁用']},
      {label:'天然來源', icon:'leaf', lines:['乳品、牛羊肉','反芻動物產生']},
      {label:'標示為 0', icon:'report', lines:['每 100 公克','≦ 0.3 公克']},
      {label:'看成分表', icon:'search', lines:['「部分氫化」','「氫化植物油」']}
    ],
    action_title:'日常這樣吃',
    action_cards:[
      {key:'看', text:'包裝食品看營養標示與成分表'},
      {key:'少', text:'酥炸、酥皮點心偶爾吃'},
      {key:'煮', text:'多用蒸、煮、滷取代油炸'},
      {key:'適', text:'乳品肉類依我的餐盤適量'}
    ],
    carousel_suggestion:{reason:'若想把法規、標示與飲食建議分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'反式脂肪', headline_main:'人工 vs 天然'},
      {layout_type:'knowledge', headline_hook:'標示為 0', headline_main:'不等於完全沒有'},
      {layout_type:'action', headline_hook:'日常這樣吃', headline_main:'看成分表、少酥炸'}]},
    hashtags:['反式脂肪','氫化油','營養標示','食品安全'],
    sources:['衛生福利部','衛生福利部食品藥物管理署'],
    illustration_category:'heart',
    illustration:{topic:'看懂營養標示', audience:'一般消費者', scene:'一位消費者在超市拿起餅乾包裝，仔細看背面的營養標示與成分表',
      emotion:'認真、自主', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A shopper in a supermarket holding a snack package and carefully reading the nutrition label and ingredient list on the back, attentive and empowered, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['禁用規定與零標示條件（衛福部、食藥署）'],
      layout_reason:'核心是破除「標0就沒有」的迷思，選 knowledge：4 個重點當主角，最後給日常行動。',
      tone:'專業易懂', tone_reason:'法規與標示需精確。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自衛福部與食藥署，未涉及特定品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'反式脂肪',
    collect:{
      summary:'衛福部自107年7月1日起禁止食品使用不完全氫化油，人工反式脂肪大幅減少；但乳品、牛羊肉仍含天然反式脂肪，營養標示每100公克不超過0.3公克即可標0。反式脂肪與心血管疾病風險相關，看懂標示與減少酥炸加工食品仍是溝通重點。',
      objective_data:[
        {item:'政策動向',desc:'107年7月1日起全面禁用：衛福部發布「食用氫化油之使用限制」，以製造日期為準，所有食品不得使用不完全氫化油，並給業者3年調整期。',tag:'官方統計',source:{name:'衛福部：自107年7月1日食品中不得使用不完全氫化油',url:'https://www.mohw.gov.tw/cp-3794-41220-1.html'}},
        {item:'盛行率／發生率',desc:'0.3公克以下可標0：依營養標示規定，每100公克食品反式脂肪不超過0.3公克，或總脂肪不超過1公克，反式脂肪得以標示為0。',tag:'官方統計',source:{name:'食藥署：洋芋片標示反式脂肪為0是真的沒有嗎？',url:'https://www.fda.gov.tw/tc/newsContent.aspx?cid=5049&id=19292'}},
        {item:'好發族群年齡層',desc:'天然來源：食藥署說明牛、羊等反芻動物的消化道細菌會將牧草發酵產生天然反式脂肪，乳製品標示中出現反式脂肪屬正常，人工來源則主要為氫化植物油。',tag:'官方統計',source:{name:'食藥署：天然乳製品為什麼還有反式脂肪？',url:'https://www.fda.gov.tw/Tc/newsContent.aspx?id=25820'}},
        {item:'年度趨勢方向',desc:'最高罰300萬元：違反禁用規定者依食品安全衛生管理法命限期改正，屆期未改正可處3萬元以上300萬元以下罰鍰。',tag:'官方統計',source:{name:'食藥署：發布訂定「食用氫化油之使用限制」',url:'https://www.fda.gov.tw/TC/newsContent.aspx?id=19817&cid=4'}}
      ],
      product_view:['機會：反式脂肪與心血管疾病相關，可連結心血管健康管理內容。','機會：看懂營養標示是實用的保戶衛教。','風險：避免點名特定品牌或店家；不宜暗示天然反式脂肪同樣有害而讓民眾不吃乳品。'],
      marketing_view:['機會：「標0就沒有？」是常見疑問，適合闢謠型內容。','機會：可結合超市選購情境。','風險：法規已實施多年，避免寫成新聞事件。'],
      alert_level:'low',
      alert_reason:'屬長期食安與營養議題，法規已實施；無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('天然反式脂肪來自乳品與肉類，依我的餐盤適量攝取即可','MEDICAL_INTERPRETATION','unsupported_reassurance',
          '食藥署說明天然反式脂肪需一併標示，但未表示天然來源「無害」；「適量即可」的說法缺少出處。','low','yes',
          '國健署或食藥署對天然反式脂肪健康影響的說明。','no','confirm','國際對天然反式脂肪健康影響的證據仍有討論。',
          '天然反式脂肪來自乳品與肉類，依國健署我的餐盤建議份量攝取',
          ['牛奶、肉類正常適量吃就可以']),
        F('許多研究證實攝取反式脂肪與心血管疾病風險增加相關','SOURCE_EVIDENCE','unspecified_study',
          '「許多研究」未指出具體研究或機構（如世界衛生組織），讀者無法追溯。','low','no',
          null,'no','clarify','食藥署原文即為此寫法。',
          '食藥署指出，許多研究證實攝取反式脂肪與心血管疾病風險增加相關（可再補世界衛生組織等國際機構立場）',
          ['反式脂肪和心血管疾病風險增加有關。','與心血管疾病風險增加相關。']),
        F('酥炸、烘焙點心少吃，烹調多用蒸、煮、滷','DATA_FACTUAL_ACCURACY','outdated_association',
          '禁用不完全氫化油後，酥炸點心的主要問題已轉為油脂總量與飽和脂肪，文中仍與反式脂肪直接連結，未說明脈絡。','low','no',
          null,'no','clarify','屬建議脈絡說明。',
          '酥炸、烘焙點心少吃，可同時減少油脂與飽和脂肪攝取，烹調多用蒸、煮、滷',
          ['炸物、酥皮點心偶爾吃就好','少吃酥炸點心。'])
      ],
      card:[
        F('乳品、牛羊肉','MEDICAL_INTERPRETATION','missing_context',
          '卡面只列天然來源，未說明乳品仍是建議攝取的食物，讀者可能因此減少乳品。','low','no',
          null,'no','clarify','屬風險溝通平衡。',
          '乳品、牛羊肉（適量攝取）'),
        F('多用蒸、煮、滷取代油炸','DATA_FACTUAL_ACCURACY','outdated_association',
          '人工反式脂肪已禁用，油炸的主要考量是油脂總量。','low','no',
          null,'no','clarify','屬脈絡說明。',
          '多用蒸、煮、滷，減少油脂')
      ]
    },
    title_alts:[
      '反式脂肪禁了嗎？人工與天然的差別、標示為0的真相',
      '包裝寫反式脂肪0，就真的沒有嗎？',
      '107年起禁用不完全氫化油：看懂反式脂肪標示'
    ],
    card_title_alts:[
      ['反式脂肪標 0 就沒有？','反式脂肪 4 個重點一次看'],
      ['人工 vs 天然','反式脂肪怎麼分'],
      ['看成分表','認出「氫化」兩個字']
    ],
    data_addon:[
      '營養標示中無論天然或人工來源的反式脂肪含量都須標示（食藥署）。',
      '衛福部於105年4月22日發布「食用氫化油之使用限制」。',
      '氫化可讓油更耐高溫、穩定並延長保存期限。'
    ],
    cta:'下次買餅乾或零食時，翻到背面看看成分表有沒有「氫化」兩個字。'
  });
})();
