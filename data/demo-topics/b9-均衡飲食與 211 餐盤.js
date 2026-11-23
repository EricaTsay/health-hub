/* v6 示範主題：均衡飲食與 211 餐盤（B9 飲食營養與運動）
   查證日期：2026-11-20。數據來源：國健署107-05-08新聞稿「首度公布國人我的餐盤」（六口訣）、國健署《國民營養健康狀況變遷調查成果報告2017-2020年》（表3.3.2蔬果達建議份數、表3.3.3乳品不足1份、3.1節堅果攝取）。2026-11-22改用最新一期。
   注意：「211餐盤」為坊間與醫療院所常用的說法，未查到國健署官方版本；本題以國健署「我的餐盤」為主，211餐盤僅作對照說明。
   參考方向：健康智庫〈211餐盤：黃金比例，吃出健康體態〉、〈營養健康－均衡飲食〉2024/06。 */
(function(){
  const REFS = [
    {title:'國健署首度公布國人「我的餐盤」 聰明吃 營養跟著來',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-16-41108-1.html'},
    {title:'國健署公布107年最新版「每日飲食指南」 提倡均衡飲食更健康',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-16-40152-1.html'},
    {title:'我的餐盤',source:'衛生福利部國民健康署健康九九網站',url:'https://health99.hpa.gov.tw/theme/content/411'},
    {title:'國民營養健康狀況變遷調查成果報告2017-2020年',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=3999&pid=15562'}
  ];
  const TABLE = {headers:['我的餐盤六口訣','怎麼做'], rows:[
    ['每天早晚一杯奶','早晚各一杯240毫升乳品'],
    ['每餐水果拳頭大','1份約1個拳頭大，每天至少2份'],
    ['菜比水果多一點','深色蔬菜占1/3以上'],
    ['飯跟蔬菜一樣多','至少1/3為未精製全穀雜糧'],
    ['豆魚蛋肉一掌心','優先順序：豆＞魚＞蛋＞禽畜肉，避免加工肉品'],
    ['堅果種子一茶匙','每天1湯匙，可分配到三餐']
  ]};
  const TAGS = ['均衡飲食','我的餐盤','211餐盤','蔬果攝取','飲食營養'];

  const DP_211 = {id:'dp-211-official', type:'data_scope', title:'211餐盤與我的餐盤不同',
    desc:'「211餐盤」（蔬菜2：全穀雜糧1：豆魚蛋肉1）是坊間常用的比例說法，未查到國健署官方版本；國健署公布的是包含乳品、水果與堅果種子的「我的餐盤」六大類。對外溝通若標註官方，應使用我的餐盤，AI 沒有替你決定是否保留211說法。',
    current:'以國健署「我的餐盤」為主，211餐盤作為對照',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'我的餐盤', value:'六大類食物', note:'國健署107年依每日飲食指南公布（目前採用）'},
      {label:'211餐盤', value:'蔬菜2：全穀1：蛋白質1', note:'坊間說法，未含乳品、水果、堅果的份量'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'211餐盤和我的餐盤差在哪？國健署六口訣吃出均衡',
    update_date:'2026/11/20',
    intro:'國民健康署依107年版每日飲食指南公布「我的餐盤」，把全穀雜糧、豆魚蛋肉、蔬菜、水果、乳品與堅果種子六大類，依建議份量轉成餐盤比例。依國健署2017-2020年國民營養健康狀況變遷調查，19歲以上成人每日乳品攝取不足1份的比例達92.1%，每日蔬菜達3份者僅22.8%、水果達2份者僅11.2%。坊間流行的「211餐盤」強調蔬菜、全穀與蛋白質的比例，但沒有涵蓋乳品、水果與堅果。',
    sections:[
      {heading:'國健署我的餐盤六口訣',format:'table',table:TABLE},
      {heading:'211餐盤可以怎麼看',format:'bullets',items:[
        '211餐盤把一餐分成蔬菜2、全穀雜糧1、豆魚蛋肉1，概念與我的餐盤「飯跟蔬菜一樣多」「豆魚蛋肉一掌心」相近。',
        '211餐盤沒有把乳品、水果與堅果種子放進比例，容易讓這幾類吃不夠。',
        '想用211概念配餐，可再加上每天兩杯奶、兩份水果與一湯匙堅果。'
      ]},
      {heading:'國人最常缺的幾類',format:'bullets',items:[
        '乳品：19歲以上成人92.1%每日不足1份。',
        '堅果種子：44歲以下族群平均每日不到0.4份，遠低於建議的1份。',
        '蔬菜與水果：每日蔬菜達3份者22.8%、水果達2份者11.2%。'
      ]}
    ],
    think_tank_view:'各種「黃金比例」餐盤都在講同一件事：多吃蔬菜、主食換成原態全穀、蛋白質適量。但最容易被忘記的是乳品、水果和堅果。用國健署六口訣檢查一天的飲食，比追求單一餐的完美比例更實際。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'六口訣引自國健署，攝取狀況引自國健署2017-2020年調查成果報告並標明表號，211餐盤標明為坊間說法，未涉及具體食品品牌。',
    ai_rationale:{basis:['國健署「我的餐盤」六口訣（107年）','國健署2017-2020年調查：乳品不足1份92.1%、水果達2份11.2%'],
      layout_reason:'先用表格呈現官方六口訣，再比較211餐盤的異同，最後點出國人最常缺的食物類別。',
      tone:'專業易懂', tone_reason:'需釐清官方工具與坊間說法。',
      to_verify:['211餐盤無官方出處']},
    decision_points:[DP_211]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'便當怎麼裝才均衡？記住國健署「我的餐盤」六句口訣',
    update_date:'2026/11/20',
    intro:'很多人聽過「211餐盤」：半盤蔬菜、四分之一主食、四分之一蛋白質。這個概念很好記，但國健署公布的「我的餐盤」還提醒了三樣常被忘記的東西：牛奶、水果和堅果。國健署2017-2020年調查發現，9成以上成人（92.1%）每天喝不到1份乳品，每天吃到2份水果的人只有約1成（11.2%）。',
    sections:[
      {heading:'六句口訣，便當這樣裝',format:'table',table:TABLE},
      {heading:'211餐盤和我的餐盤',format:'bullets',items:[
        '211餐盤：蔬菜2份、主食1份、蛋白質1份，好記又好用。',
        '但它沒提到牛奶、水果、堅果，很容易漏掉。',
        '用211裝便當，再加上早晚一杯奶、兩份水果、一小把堅果就更完整。'
      ]},
      {heading:'大家最常吃不夠的',format:'bullets',items:[
        '牛奶：9成以上的人每天不到1份。',
        '堅果：44歲以下的人平均每天吃不到半份。',
        '蔬菜水果：吃夠蔬菜的約2成，吃夠水果的約1成。'
      ]}
    ],
    think_tank_view:'不用每餐都完美，只要一天結束前想想：今天有喝奶嗎？有吃到兩份水果嗎？補上缺的那一塊，就是很好的開始。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'口訣與數據引自國健署並標明調查年份，211餐盤標明為坊間說法，未涉及具體食品品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以裝便當的生活情境切入。', tone:'生活親切', tone_reason:'給上班族與家庭備餐者。', to_verify:[]},
    decision_points:[DP_211]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'我的餐盤六口訣：補足奶、果、堅果',
    update_date:'2026/11/20',
    intro:'國健署「我的餐盤」涵蓋六大類食物。2017-2020年調查：成人92.1%每日乳品不足1份，水果達2份者僅11.2%。',
    sections:[
      {heading:'六口訣',format:'table',table:TABLE},
      {heading:'與211餐盤',format:'bullets',items:[
        '211餐盤為坊間說法，未含乳品、水果、堅果。',
        '可搭配六口訣補足。'
      ]},
      {heading:'最常不足',format:'bullets',items:[
        '乳品、堅果種子。',
        '蔬菜與水果。'
      ]}
    ],
    think_tank_view:'用六口訣檢查一天飲食，比追求單餐完美比例更實際。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署並標明年份，未涉及具體食品品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為口訣、對照、不足三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'均衡飲食與 211 餐盤', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'國健署我的餐盤六口訣', primary_visual:'92.1%', secondary_message:'成人乳品攝取不足比例最高', action_priority:'六口訣檢查一天飲食'},
    headline_hook:'211 餐盤還不夠', headline_main:'我的餐盤六口訣一次看', title_accent:'六口訣',
    hero_message:'92.1% 乳品不足 1 份', hero_support:'19 歲以上成人每日乳品不足 1 份（國健署 2017–2020 年調查）',
    knowledge_title:'我的餐盤六口訣', knowledge_note:'211 餐盤之外，**別忘了奶、果、堅果**',
    knowledge_cards:[
      {label:'乳品', icon:'check', lines:['每天早晚一杯奶']},
      {label:'水果', icon:'leaf', lines:['每餐水果拳頭大']},
      {label:'蔬菜', icon:'leaf', lines:['菜比水果多一點']},
      {label:'全穀雜糧', icon:'check', lines:['飯跟蔬菜一樣多']},
      {label:'豆魚蛋肉', icon:'heart', lines:['豆魚蛋肉一掌心']},
      {label:'堅果種子', icon:'check', lines:['堅果種子一茶匙']}
    ],
    action_title:'日常這樣吃',
    action_cards:[
      {key:'奶', text:'早晚各一杯 240 毫升乳品'},
      {key:'果', text:'每天至少 2 份水果'},
      {key:'穀', text:'至少 1/3 主食換成未精製全穀'},
      {key:'豆', text:'蛋白質優先選豆類與魚'}
    ],
    carousel_suggestion:{reason:'若想把六口訣、211 對照與國人攝取不足分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'我的餐盤', headline_main:'六口訣一次看'},
      {layout_type:'knowledge', headline_hook:'211 餐盤 vs 我的餐盤', headline_main:'差在奶、果、堅果'},
      {layout_type:'data', headline_hook:'國人最缺什麼', headline_main:'92.1% 乳品不足 1 份'}]},
    hashtags:['均衡飲食','我的餐盤','211餐盤','飲食營養'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'均衡飲食', audience:'上班族與家庭', scene:'餐桌上一個分格餐盤，裝有蔬菜、糙米飯、魚、水果，旁邊一杯牛奶和一小碟堅果',
      emotion:'清爽、愉快', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A divided dinner plate with vegetables, brown rice, fish and fruit, a glass of milk and a small dish of nuts beside it, fresh and cheerful, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['國健署我的餐盤六口訣','2017-2020年調查乳品不足1份92.1%'],
      layout_reason:'核心是六口訣，選 knowledge：6 張口訣卡當主角，攝取不足比例當鉤子，最後給 4 個日常行動。',
      tone:'專業易懂', tone_reason:'口訣好記、可對照。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'口訣與數據引自國健署並標明年份，未涉及具體食品品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'均衡飲食與 211 餐盤',
    collect:{
      summary:'國健署「我的餐盤」以六口訣呈現每日飲食指南，但2017-2020年調查顯示19歲以上成人92.1%每日乳品不足1份，水果達2份者僅11.2%；坊間流行的「211餐盤」好記但未涵蓋乳品、水果與堅果。均衡飲食溝通可用211作入口，再以官方六口訣補足。',
      objective_data:[
        {item:'盛行率／發生率',desc:'92.1%：國健署2017-2020年國民營養健康狀況變遷調查（表3.3.3），19歲以上成人每日乳品類攝取不足1份的比例為92.1%，飲食指南建議量為1.5份。',tag:'官方統計',source:{name:'國健署：國民營養健康狀況變遷調查成果報告2017-2020年',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=3999&pid=15562'}},
        {item:'好發族群年齡層',desc:'11.2%：同一調查（表3.3.2）19歲以上成人每日水果達2份者僅11.2%、蔬菜達3份者22.8%，19-44歲族群更低（水果5.9%、蔬菜17.6%）。',tag:'官方統計',source:{name:'國健署：國民營養健康狀況變遷調查成果報告2017-2020年',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=3999&pid=15562'}},
        {item:'政策動向',desc:'六大類食物：國健署依107年版每日飲食指南公布「我的餐盤」與六口訣，涵蓋全穀雜糧、豆魚蛋肉、蔬菜、水果、乳品及堅果種子。',tag:'官方統計',source:{name:'國健署：公布107年最新版每日飲食指南',url:'https://www.mohw.gov.tw/cp-16-40152-1.html'}},
        {item:'年度趨勢方向',desc:'至少1/3未精製全穀：我的餐盤建議全穀雜糧份量約與蔬菜相同，且至少1/3為糙米、全麥、燕麥等未精製全穀雜糧，深色蔬菜需占1/3以上。',tag:'官方統計',source:{name:'國健署：首度公布國人「我的餐盤」',url:'https://www.mohw.gov.tw/cp-16-41108-1.html'}}
      ],
      product_view:['機會：均衡飲食是所有慢性病預防的基礎，可作為保戶健康管理的入門內容。','機會：六口訣容易轉為打卡或飲食記錄活動。','風險：避免推薦特定食品或保健品；211餐盤非官方工具，對外引用需註明。'],
      marketing_view:['機會：「211餐盤」是社群熱門關鍵字，可作為引流入口。','機會：便當、外食情境容易引起上班族共鳴。','風險：「不足1份」與飲食指南建議量1.5份不同，引用時需說明統計門檻。'],
      alert_level:'low',
      alert_reason:'屬長期飲食教育議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('19歲以上成人每日乳品攝取不足1份的比例達92.1%','DATA_FACTUAL_ACCURACY','threshold_vs_guideline',
          '調查以「不足1份」為統計門檻，但飲食指南建議量是每日1.5份（早晚各一杯）；讀者可能以為喝到1份就達標，實際未達建議量的比例更高。','low','no',
          null,'no','clarify','屬統計門檻說明。',
          '19歲以上成人每日乳品攝取不足1份的比例達92.1%（建議量為1.5份，未達建議量者更多）',
          ['9成以上成人（92.1%）每天喝不到1份乳品','成人92.1%每日乳品不足1份']),
        F('211餐盤把一餐分成蔬菜2、全穀雜糧1、豆魚蛋肉1','SOURCE_EVIDENCE','unsourced_definition',
          '211餐盤的比例定義未附出處，坊間說法版本不一（有些以「份」、有些以「面積」計算）。','low','yes',
          '提出211餐盤的原始來源（醫療院所或學會）與定義方式。','no','confirm','屬坊間說法。',
          '坊間常見的211餐盤以餐盤面積分為蔬菜2、全穀雜糧1、豆魚蛋肉1（各版本定義略有不同）',
          ['211餐盤：蔬菜2份、主食1份、蛋白質1份，好記又好用。','半盤蔬菜、四分之一主食、四分之一蛋白質']),
        F('優先順序：豆＞魚＞蛋＞禽畜肉，避免加工肉品','MEDICAL_INTERPRETATION','missing_rationale',
          '只列優先順序未說明理由（避免同時攝取過多飽和脂肪），讀者可能誤以為肉類不宜吃。','low','no',
          null,'no','clarify','屬說明完整度。',
          '為減少飽和脂肪，優先順序：豆＞魚＞蛋＞禽畜肉，避免加工肉品')
      ],
      card:[
        F('92.1% 乳品不足 1 份','DATA_FACTUAL_ACCURACY','threshold_vs_guideline',
          '卡面以「不足 1 份」呈現，但口訣是早晚各一杯（1.5 份），兩個份量並列容易混淆。','low','no',
          null,'no','clarify','屬統計門檻說明。',
          '9 成成人乳品不到 1 份'),
        F('211 餐盤之外，**別忘了奶、果、堅果**','SOURCE_EVIDENCE','unsourced_definition',
          '卡面提及 211 餐盤但未說明其非官方工具。','low','no',
          null,'no','clarify','屬出處說明。',
          '國健署我的餐盤：**別忘了奶、果、堅果**')
      ]
    },
    title_alts:[
      '211餐盤和我的餐盤差在哪？國健署六口訣吃出均衡',
      '便當怎麼裝才均衡？記住國健署「我的餐盤」六句口訣',
      '9成以上成人乳品不足：用六口訣補上餐盤缺的那一塊'
    ],
    card_title_alts:[
      ['211 餐盤還不夠','我的餐盤六口訣一次看'],
      ['便當怎麼裝？','記住六句口訣'],
      ['最常吃不夠的','奶、果、堅果']
    ],
    data_addon:[
      '1份水果約1個拳頭大，切塊約大半碗到1碗（國健署）。',
      '1份堅果種子約1湯匙（約杏仁果5粒、花生10粒、腰果5粒）。',
      '油脂類在烹調時已添加，因此不在我的餐盤中單獨呈現。'
    ],
    cta:'今天晚餐前，用六口訣檢查一天吃了什麼，把缺的那一類（常常是奶或水果）補上。'
  });
})();
