/* v6 示範主題：一氧化碳中毒（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-20。數據來源：內政部112-11-24新聞稿（107-111年統計）、基隆市政府2025-12-31新聞稿引述消防署114年統計、國健署衛教頁（症狀）、消防署消防防災館（處置）、衛福部114年死因統計（意外中毒）。
   參考方向：無過去文章，全數自行查證。消防署官網有人機驗證無法讀取，114年數字為地方政府引述。 */
(function(){
  const REFS = [
    {title:'今年一氧化碳中毒已奪3命 內政部提醒：使用瓦斯熱水器要注意通風',source:'內政部',url:'https://www.moi.gov.tw/News_Content.aspx?n=4&s=298370'},
    {title:'冬季防範一氧化碳中毒 基隆市啟動熱水器補助措施（引述消防署114年統計）',source:'基隆市政府',url:'https://www.klcg.gov.tw/tw/klcg1/3168-311283.html'},
    {title:'防範無形殺手-一氧化碳中毒',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1128&pid=1898'},
    {title:'一氧化碳中毒怎麼辦',source:'內政部消防署消防防災館',url:'https://www.tfdp.com.tw/cht/index.php?code=list&flag=detail&ids=64&article_id=200'},
    {title:'114年死因統計',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}
  ];
  const TABLE = {headers:['熱水器5要','怎麼做'], rows:[
    ['要安全品牌','選購貼有CNS檢驗合格標示的產品'],
    ['要正確型式','屋外式裝在屋外；室內或加蓋陽台改用強制排氣型'],
    ['要安全安裝','由合格承裝業技術士施工'],
    ['要定期檢修','定期檢查、老舊就汰換'],
    ['要保持通風','洗澡時也要開窗，陽台不加裝窗戶、不堆曬衣物']
  ]};
  const TAGS = ['一氧化碳中毒','熱水器安全','居家安全','冬季防災','事故傷害'];

  const DP_STAT = {id:'dp-co-stat', type:'data_version', title:'中毒統計有兩組常用數字',
    desc:'114年全年數字（22件、5人死亡、59人送醫）目前查到的是基隆市政府新聞稿引述消防署統計；107-111年五年合計（149件、24人死亡、436人送醫）則是內政部新聞稿原文。兩組期間長短不同，AI 沒有替你挑選。',
    current:'114年全國22件、5人死亡、59人送醫（基隆市政府引述消防署統計）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'5人死亡', value:'114年全年', note:'基隆市政府2025-12-31新聞稿引述消防署（目前採用）'},
      {label:'24人死亡', value:'107-111年合計', note:'內政部112-11-24新聞稿；約8成與屋外式熱水器裝在通風不良處有關'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'一氧化碳無色無味：熱水器5要原則，冬天洗澡也要開窗',
    update_date:'2026/11/20',
    intro:'一氧化碳無色、無臭，吸入後常在不知不覺中頭暈、昏迷。依內政部統計，107至111年全國共發生149件一氧化碳中毒，造成24人死亡、436人送醫，其中約80%是屋外式熱水器裝在通風不良的地方；114年全國又發生22件、5人死亡、59人送醫（基隆市政府引述消防署統計）。每年12月到隔年2月是高峰期，冬天門窗緊閉洗澡時最危險。',
    sections:[
      {heading:'內政部建議的熱水器5要',format:'table',table:TABLE},
      {heading:'中毒會有哪些症狀',format:'bullets',items:[
        '輕微時像感冒或疲倦：頭痛、頭昏、噁心、嘔吐、心悸、四肢無力、嗜睡。',
        '嚴重時可能心律不整、抽搐、昏迷，甚至死亡。',
        '同一屋內多人同時頭痛、頭暈，或一離開浴室就好轉，要優先懷疑一氧化碳。'
      ]},
      {heading:'懷疑中毒時怎麼做',format:'bullets',items:[
        '立刻關閉熱水器或瓦斯開關，打開門窗讓空氣流通。',
        '把人移到室外通風處，撥打119求救。',
        '患者沒有呼吸、心跳時，施行心肺復甦術（CPR）直到救護人員到場。',
        '不要在現場開關電器或點火，避免瓦斯外洩時引燃。'
      ]}
    ],
    think_tank_view:'一氧化碳中毒幾乎都能事先預防：問題多半不在熱水器本身，而在「裝錯地方」。陽台加裝窗戶、堆滿晾曬衣物，就把屋外變成了室內。趁入冬前花五分鐘檢查家裡熱水器的位置與型式，比任何事後補救都有效。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'事故統計引自內政部新聞稿與地方政府引述消防署數據並標明年份，症狀引自國健署，處置步驟引自消防署消防防災館，未涉及具體商品品牌。',
    ai_rationale:{basis:['沿用步驟1洞察：107-111年149件、24人死亡、436人送醫（內政部）','114年22件、5人死亡、59人送醫為基隆市政府引述消防署'],
      layout_reason:'先用熱水器5要表格給出可檢查的重點，再說明症狀與緊急處置。',
      tone:'專業易懂', tone_reason:'安全資訊需要具體步驟，避免恐嚇。',
      to_verify:['114年全年數字目前為地方政府引述，消防署原始新聞稿因網站人機驗證未能直接讀取']},
    decision_points:[DP_STAT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'冬天洗澡頭暈想睡？小心熱水器裝錯位置',
    update_date:'2026/11/20',
    intro:'天冷洗熱水澡最舒服，但如果熱水器裝在不通風的地方，看不見也聞不到的一氧化碳就會悄悄累積。內政部統計107至111年共有24人因一氧化碳中毒死亡、436人送醫，8成跟屋外式熱水器裝錯地方有關；114年全國又有5人死亡、59人送醫。12月到隔年2月最常發生，現在就是檢查的好時機。',
    sections:[
      {heading:'熱水器記住這5要',format:'table',table:TABLE},
      {heading:'這些不舒服要提高警覺',format:'bullets',items:[
        '頭痛、頭暈、想吐、心跳變快、全身沒力、一直想睡。',
        '家裡好幾個人同時頭痛，或走出浴室就好一點。',
        '嚴重時會昏迷、抽搐，甚至危及生命。'
      ]},
      {heading:'萬一發生了',format:'bullets',items:[
        '先關掉熱水器或瓦斯，打開門窗。',
        '把人帶到外面空氣好的地方，打119。',
        '沒有呼吸心跳就做CPR，等救護車來。',
        '現場先不要開關電器或點火。'
      ]}
    ],
    think_tank_view:'陽台加了窗戶、晾滿衣服，屋外式熱水器就等於裝在屋內。這個週末回家看看爸媽家的熱水器裝在哪裡，洗澡時順手推開窗，就是給全家最實在的保護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自內政部與地方政府引述消防署統計並標明年份，症狀與處置引自國健署與消防署，未涉及具體商品品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以冬天洗澡的生活情境帶出5要原則與警訊。', tone:'生活親切', tone_reason:'給一般家庭與照顧長輩的子女閱讀。', to_verify:['114年數字為地方政府引述']},
    decision_points:[DP_STAT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'一氧化碳中毒：熱水器5要，洗澡要開窗',
    update_date:'2026/11/20',
    intro:'107至111年全國一氧化碳中毒149件、24人死亡，約8成與屋外式熱水器裝在通風不良處有關。每年12月至隔年2月為高峰期。',
    sections:[
      {heading:'熱水器5要',format:'table',table:TABLE},
      {heading:'中毒警訊',format:'bullets',items:[
        '頭痛、頭昏、噁心、嗜睡、四肢無力。',
        '多人同時不適或離開浴室即好轉。'
      ]},
      {heading:'緊急處置',format:'bullets',items:[
        '關熱水器、開窗通風。',
        '移到室外，撥打119。',
        '無呼吸心跳即施行CPR。'
      ]}
    ],
    think_tank_view:'一氧化碳中毒多源於熱水器裝錯位置；入冬前檢查安裝型式與通風，是最有效的預防。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自內政部新聞稿並標明年份，症狀與處置引自國健署與消防署，未涉及具體商品品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為5要、警訊、處置三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'一氧化碳中毒', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'約 8 成中毒與熱水器裝在不通風處有關', primary_visual:'約 8 成', secondary_message:'頭痛頭暈想睡，先開窗再打 119', action_priority:'熱水器 5 要原則'},
    headline_hook:'看不見也聞不到', headline_main:'一氧化碳中毒 4 大警訊', title_accent:'4 大警訊',
    hero_message:'約 8 成', hero_support:'與屋外式熱水器裝在通風不良處有關（107–111 年）',
    knowledge_title:'中毒警訊', knowledge_note:'懷疑中毒，**先開窗、再打 119**',
    knowledge_cards:[
      {label:'頭痛、頭昏', icon:'brain', lines:['像感冒或疲倦','容易被忽略']},
      {label:'噁心、嘔吐', icon:'check', lines:['可能伴隨心悸']},
      {label:'四肢無力、嗜睡', icon:'people', lines:['一直想睡','站不穩']},
      {label:'多人同時不適', icon:'home', lines:['離開浴室就好轉','要優先懷疑']}
    ],
    primary_stat:{value:'約 8 成', label:'與屋外式熱水器裝錯位置有關', note:'內政部：107–111 年 149 件中 119 件'},
    secondary_stats:[
      {value:'24 人', label:'107–111 年死亡'},
      {value:'12–2 月', label:'每年中毒高峰期'}
    ],
    action_title:'熱水器這樣用',
    action_cards:[
      {key:'型', text:'室內或加蓋陽台改用強制排氣型'},
      {key:'裝', text:'由合格承裝業技術士安裝'},
      {key:'修', text:'定期檢修，老舊就汰換'},
      {key:'窗', text:'洗澡時也要開窗保持通風'}
    ],
    carousel_suggestion:{reason:'若想把警訊、熱水器檢查與緊急處置分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'看不見也聞不到', headline_main:'一氧化碳中毒 4 大警訊'},
      {layout_type:'action', headline_hook:'熱水器 5 要', headline_main:'入冬前檢查一次'},
      {layout_type:'action', headline_hook:'懷疑中毒時', headline_main:'開窗、移到戶外、打 119'}]},
    hashtags:['一氧化碳中毒','熱水器安全','居家安全','冬季防災'],
    sources:['內政部','衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'一氧化碳中毒預防', audience:'一般家庭', scene:'一位家長在陽台推開窗戶，旁邊是牆上的熱水器，窗外有新鮮空氣流入',
      emotion:'安心、警覺', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A parent opening a window on a balcony next to a wall-mounted gas water heater, fresh air flowing in, calm and safe, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：107-111年約80%中毒與屋外式熱水器裝在通風不良處有關（內政部）','症狀取自國健署衛教資料'],
      layout_reason:'核心是「認得警訊、知道原因」，選 knowledge：4 個中毒警訊當主角，約 8 成的成因比例放下方，最後給 4 個熱水器行動。',
      tone:'專業易懂', tone_reason:'居家安全資訊要具體可檢查。',
      to_verify:['「12–2 月」高峰期出自內政部112年新聞稿']},
    decision_points:[],
    content_check_note:'成因比例與死亡人數引自內政部新聞稿並標明期間，症狀引自國健署，未涉及具體商品品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'一氧化碳中毒',
    collect:{
      summary:'一氧化碳無色無臭，冬季門窗緊閉洗澡時最容易中毒；內政部統計107至111年共149件、24人死亡，約8成與屋外式熱水器裝在通風不良處有關，114年仍有22件、5人死亡。每年入冬前是溝通熱水器安全與「5要原則」的關鍵時機。',
      objective_data:[
        {item:'盛行率／發生率',desc:'5人死亡：依基隆市政府2025年12月31日新聞稿引述消防署114年統計，全國共發生22件一氧化碳中毒事故，造成5人死亡、59人送醫。',tag:'官方統計',source:{name:'基隆市政府：冬季防範一氧化碳中毒（引述消防署114年統計）',url:'https://www.klcg.gov.tw/tw/klcg1/3168-311283.html'}},
        {item:'年度趨勢方向',desc:'24人死亡、436人送醫：內政部統計107至111年共發生149件一氧化碳中毒，其中約80%（119件）是屋外式熱水器安裝在通風不良場所造成。',tag:'官方統計',source:{name:'內政部：今年一氧化碳中毒已奪3命',url:'https://www.moi.gov.tw/News_Content.aspx?n=4&s=298370'}},
        {item:'政策動向',desc:'每年12月至隔年2月為高峰期：內政部呼籲安裝瓦斯熱水器遵守「要安全品牌、要正確型式、要安全安裝、要定期檢修、要保持通風」5要原則，安裝不當應委託合格承裝業者遷移。',tag:'官方統計',source:{name:'內政部：今年一氧化碳中毒已奪3命',url:'https://www.moi.gov.tw/News_Content.aspx?n=4&s=298370'}},
        {item:'好發族群年齡層',desc:'488人死於意外中毒：衛福部114年死因統計中「因暴露與接觸有毒物質所致的意外中毒」死亡488人，此分類包含一氧化碳以外的藥物、化學物質中毒，範圍大於本主題。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}}
      ],
      product_view:['機會：一氧化碳中毒多發生在家中，可連結意外傷害保障與居家安全檢查服務的說明。','機會：熱水器型式與通風檢查可作為保戶關懷的冬季提醒內容。','風險：避免推薦特定熱水器品牌或偵測器商品；安全建議應引用內政部「5要原則」。'],
      marketing_view:['機會：每年入冬、寒流來襲前是固定溝通檔期，可結合「洗澡順手開窗」的簡單口訣。','機會：子女提醒長輩檢查熱水器，適合以家庭關懷角度切入。','風險：死亡案例容易引發恐慌，宜以可立即做的檢查與處置步驟收尾。'],
      alert_level:'medium',
      alert_reason:'具明顯季節性，每年12月至隔年2月為高峰；寒流來襲前後適合即時溝通，平時可作為居家安全常態內容。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('114年全國又發生22件、5人死亡、59人送醫（基隆市政府引述消防署統計）','SOURCE_EVIDENCE','secondary_citation',
          '114年全年數字目前引用的是地方政府新聞稿轉述，並非消防署原始發布；正式對外前宜改引消防署原始統計。','medium','yes',
          '消防署114年一氧化碳中毒事故統計原始新聞稿或統計表。','no','confirm','地方政府引述可能與原始數字一致，但出處層級較低。',
          '114年全國又發生22件、5人死亡、59人送醫（消防署統計）',
          ['114年全國又有5人死亡、59人送醫']),
        F('其中約80%是屋外式熱水器裝在通風不良的地方','DATA_FACTUAL_ACCURACY','scope_unstated',
          '80%是107至111年事故「件數」的比例（149件中119件），不是死亡人數的比例；句子容易被讀成死亡原因占比。','low','no',
          null,'no','clarify','數字本身正確，屬口徑說明。',
          '其中約80%的事故件數（149件中119件）是屋外式熱水器裝在通風不良的地方',
          ['8成跟屋外式熱水器裝錯地方有關','約8成與屋外式熱水器裝在通風不良處有關']),
        F('不要在現場開關電器或點火，避免瓦斯外洩時引燃','MEDICAL_INTERPRETATION','advice_scope',
          '一氧化碳本身不會因開關電器而引燃，這句是針對「可能同時有瓦斯外洩」的情況；未說明前提，容易讓讀者混淆一氧化碳與瓦斯。','low','no',
          null,'no','clarify','屬說明清晰度問題。',
          '若同時聞到瓦斯味，不要在現場開關電器或點火，避免引燃',
          ['現場先不要開關電器或點火']),
        F('同一屋內多人同時頭痛、頭暈，或一離開浴室就好轉，要優先懷疑一氧化碳','SOURCE_EVIDENCE','unsourced_heuristic',
          '此判斷線索為常見臨床經驗，但本文引用的國健署與消防署頁面沒有這句說法，文中未標示依據。','low','no',
          null,'no','clarify','屬常見衛教說法，建議改為較保守的語氣或補充出處。',
          '同一屋內多人同時頭痛、頭暈，或一離開浴室就好轉，應提高警覺',
          ['家裡好幾個人同時頭痛，或走出浴室就好一點','多人同時不適或離開浴室即好轉'])
      ],
      card:[
        F('與屋外式熱水器裝錯位置有關','DATA_FACTUAL_ACCURACY','scope_unstated',
          '約8成是事故「件數」比例，卡面標籤未說明，讀者可能理解為死亡人數占比。','low','no',
          null,'no','clarify','屬口徑說明。',
          '的事故與屋外式熱水器裝錯位置有關'),
        F('多人同時不適','SOURCE_EVIDENCE','unsourced_heuristic',
          '此警訊未見於卡面引用的國健署症狀列表，屬經驗判斷，宜改為輔助提示而非並列症狀。','low','no',
          null,'no','clarify','可移到備註或改寫為提醒。',
          '同住者也不舒服')
      ]
    },
    title_alts:[
      '一氧化碳無色無味：熱水器5要原則，冬天洗澡也要開窗',
      '冬天洗澡頭暈想睡？小心熱水器裝錯位置',
      '8成一氧化碳中毒與熱水器有關：入冬前必做的居家檢查'
    ],
    card_title_alts:[
      ['看不見也聞不到','一氧化碳中毒 4 大警訊'],
      ['冬天洗澡頭暈想睡？','先開窗、再打 119'],
      ['約 8 成與熱水器有關','入冬前檢查這 4 件事']
    ],
    data_addon:[
      '107至111年一氧化碳中毒共149件、24人死亡、436人送醫（內政部）。',
      '114年全國22件、5人死亡、59人送醫（基隆市政府引述消防署統計）。',
      '屋外式熱水器裝在室內或加蓋窗戶的陽台，應改用有強制排氣功能的熱水器。'
    ],
    cta:'這個週末就檢查家裡（和爸媽家）熱水器裝在哪裡、是什麼型式，洗澡時記得順手推開窗。'
  });
})();
