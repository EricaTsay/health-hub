/* v6 示範主題：乳品與植物奶（B9 飲食營養與運動）
   查證日期：2026-11-21。數據來源：國健署健康問答〈燕麥奶可以取代牛奶嗎?〉（每100克燕麥奶與鮮奶營養成分）、〈豆漿有豐富的鈣質？是真的嗎？〉（2019：豆漿鈣質約牛奶1/7、板豆腐豆干鈣質豐富）、國健署「我的餐盤」新聞稿（每天早晚一杯奶240毫升）、國健署《國民營養健康狀況變遷調查成果報告2017-2020年》表3.3.3（19歲以上成人乳品不足1份92.1%）。2026-11-22改用最新一期、衛福部骨質保健新聞稿（成人每日鈣1,000毫克）。
   參考方向：健康智庫〈鮮乳和保久乳，誰比較好？〉2024/06、〈植物奶不是「奶」！〉2022/11、〈奶精、鮮乳大不同！〉2024/07。 */
(function(){
  const REFS = [
    {title:'燕麥奶可以取代牛奶嗎?',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=127&pid=14849'},
    {title:'豆漿有豐富的鈣質？是真的嗎？',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1425&pid=11502'},
    {title:'國健署首度公布國人「我的餐盤」 聰明吃 營養跟著來',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-16-41108-1.html'},
    {title:'國民營養健康狀況變遷調查成果報告2017-2020年',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=3999&pid=15562'},
    {title:'及早存骨本 5招鞏固骨骼健康',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-84264-1.html'}
  ];
  const TABLE = {headers:['每100克','鮮奶','燕麥奶'], rows:[
    ['蛋白質','3.1公克','1.0公克'],
    ['鈣','107毫克','4毫克'],
    ['碳水化合物','4.8公克','8.1公克'],
    ['食物分類','乳品類','全穀雜糧類']
  ]};
  const TAGS = ['乳品','植物奶','鈣質','燕麥奶','豆漿'];


  const PRO = {
    content_type:'健康文章',
    title:'燕麥奶、豆漿能取代牛奶嗎？國健署：營養價值不同',
    update_date:'2026/11/21',
    intro:'國民健康署「我的餐盤」建議每天早晚各一杯240毫升乳品，是補充鈣質最方便的方式；衛福部建議成人每日鈣攝取1,000毫克。但依國健署2017-2020年國民營養健康狀況變遷調查，19歲以上成人乳品每日攝取不足1份的比例達92.1%。越來越多人改喝燕麥奶、豆漿等植物奶，國健署提醒，植物奶與牛奶屬於不同食物類別，營養價值不同，不可互相取代。',
    sections:[
      {heading:'鮮奶與燕麥奶營養比較',format:'table',table:TABLE},
      {heading:'豆漿也不是高鈣飲品',format:'bullets',items:[
        '國健署指出，豆漿的鈣質含量僅約同重量牛奶的1/7。',
        '添加食用級石膏製成的板豆腐、豆干，鈣質含量則十分豐富。',
        '豆漿屬豆魚蛋肉類的蛋白質來源，不能當成乳品補鈣。'
      ]},
      {heading:'喝不了牛奶怎麼辦',format:'bullets',items:[
        '乳糖不耐者可從少量開始，或選擇優酪乳、起司等乳品。',
        '素食者可多吃板豆腐、豆干與深綠色蔬菜補鈣。',
        '選植物奶時看營養標示的鈣與蛋白質含量。',
        '嚴格素食或補鈣困難者，可諮詢營養師是否需要補充品。'
      ]}
    ],
    think_tank_view:'植物奶可以是喜好的選擇，但不該是「以為喝了就等於補鈣」。喝燕麥奶的人，記得把鈣從其他地方補回來：一塊板豆腐、一份深綠色蔬菜，都能接手牛奶的角色。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'營養成分與建議引自國健署健康問答，攝取不足比率引自國健署2017-2020年調查成果報告，未推薦特定乳品或植物奶品牌。',
    ai_rationale:{basis:['燕麥奶與鮮奶營養成分（國健署）','豆漿鈣質約牛奶1/7（國健署）','19歲以上乳品不足1份92.1%（2017-2020年調查）'],
      layout_reason:'先用表格比較鮮奶與燕麥奶，再說明豆漿，最後給不喝牛奶者的補鈣方式。',
      tone:'專業易懂', tone_reason:'需具體營養數據。',
      to_verify:[]},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'早餐改喝燕麥奶，鈣質夠嗎？',
    update_date:'2026/11/21',
    intro:'燕麥奶、杏仁奶、豆漿越來越受歡迎，很多人以為和牛奶差不多。但國健署比較過：每100克鮮奶有107毫克鈣，燕麥奶只有4毫克；豆漿的鈣也只有牛奶的大約1/7。國健署建議每天早晚各一杯奶，可是國健署2017-2020年調查發現，9成以上成人（92.1%）每天喝不到1份乳品。',
    sections:[
      {heading:'鮮奶和燕麥奶差多少？',format:'table',table:TABLE},
      {heading:'豆漿可以補鈣嗎？',format:'bullets',items:[
        '豆漿的鈣只有牛奶的大約1/7。',
        '板豆腐、豆干的鈣反而很多。',
        '豆漿比較像蛋白質來源，不能當牛奶補鈣。'
      ]},
      {heading:'不喝牛奶的人',format:'bullets',items:[
        '乳糖不耐可以少量開始，或改吃優格、起司。',
        '吃素的人多吃板豆腐、豆干和深綠色蔬菜。',
        '買植物奶時看看標示上的鈣和蛋白質。',
        '真的補不夠，問問營養師。'
      ]}
    ],
    think_tank_view:'喜歡燕麥奶沒問題，只要記得午餐多夾一塊豆腐、一盤青菜，把鈣補回來。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明調查年份，未推薦特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以早餐換喝植物奶的情境切入。', tone:'生活親切', tone_reason:'給年輕族群與素食者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'植物奶不能取代牛奶',
    update_date:'2026/11/21',
    intro:'每100克鮮奶含鈣107毫克，燕麥奶4毫克；豆漿鈣質約牛奶1/7。國健署建議早晚各一杯奶。',
    sections:[
      {heading:'營養比較',format:'table',table:TABLE},
      {heading:'豆漿',format:'bullets',items:[
        '鈣質低，屬蛋白質來源。',
        '板豆腐、豆干鈣質高。'
      ]},
      {heading:'替代補鈣',format:'bullets',items:[
        '優酪乳、起司。',
        '板豆腐、深綠色蔬菜。'
      ]}
    ],
    think_tank_view:'喝植物奶，記得從別處補鈣。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署，未推薦特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為比較、豆漿、替代三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'乳品與植物奶', output_mode:'single', layout_type:'comparison',
    communication_priority:{primary_message:'植物奶不能取代牛奶', primary_visual:'107 vs 4 毫克', secondary_message:'每 100 克鮮奶與燕麥奶的鈣', action_priority:'早晚一杯奶，或從豆腐蔬菜補鈣'},
    headline_hook:'燕麥奶能取代牛奶？', headline_main:'鮮奶 vs 植物奶營養比一比', title_accent:'比一比',
    comparison:{
      a:{title:'鮮奶', subtitle:'乳品類', points:['每 100 克鈣 **107 毫克**','蛋白質 3.1 公克','鈣質的良好來源','建議早晚各一杯']},
      b:{title:'燕麥奶', subtitle:'全穀雜糧類', points:['每 100 克鈣 **4 毫克**','蛋白質 1.0 公克','主要是碳水化合物','豆漿鈣也只有牛奶約 1/7']},
      key_diff:'不同食物類別，營養價值**不能互相取代**',
      same:'都可以是飲品選擇，但要看**營養標示**',
      how_to_choose:'不喝奶：多吃板豆腐、豆干、深綠蔬菜'
    },
    hashtags:['乳品','植物奶','鈣質','燕麥奶'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'bones-joints',
    illustration:{topic:'乳品與植物奶', audience:'年輕族群與素食者', scene:'早餐桌上一杯牛奶和一杯燕麥奶並排，旁邊有一盤板豆腐和青菜',
      emotion:'清爽、理性選擇', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A breakfast table with a glass of milk and a glass of oat milk side by side, a plate of firm tofu and greens nearby, fresh and thoughtful, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['燕麥奶與鮮奶營養成分（國健署）'],
      layout_reason:'核心是兩種飲品的對照，選 comparison：左右並列鈣與蛋白質，中間點出不可互換，底部給替代補鈣方式。',
      tone:'專業易懂', tone_reason:'數據對照清楚。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自國健署，未推薦特定品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'乳品與植物奶',
    collect:{
      summary:'國健署建議每天早晚各一杯乳品，但2017-2020年調查19歲以上成人92.1%每日乳品不足1份；植物奶興起，國健署指出每100克燕麥奶鈣僅4毫克、鮮奶107毫克，豆漿鈣質約牛奶1/7，不可互相取代。溝通重點在「喝植物奶也要補足鈣」。',
      objective_data:[
        {item:'盛行率／發生率',desc:'92.1%：國健署2017-2020年國民營養健康狀況變遷調查（表3.3.3），19歲以上成人每日乳品類攝取不足1份的比例為92.1%，僅75歲以上男性不足比例較低（64.3%）。',tag:'官方統計',source:{name:'國健署：國民營養健康狀況變遷調查成果報告2017-2020年',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=3999&pid=15562'}},
        {item:'年度趨勢方向',desc:'鈣107對4毫克：國健署比較每100克鮮奶含鈣107毫克、蛋白質3.1公克，燕麥奶鈣僅4毫克、蛋白質1.0公克，兩者營養價值不同不可互為替代。',tag:'官方統計',source:{name:'國健署：燕麥奶可以取代牛奶嗎?',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=127&pid=14849'}},
        {item:'好發族群年齡層',desc:'約牛奶的1/7：國健署指出豆漿鈣質僅約同重量牛奶的1/7，對素食者並非良好鈣源，板豆腐、豆干等添加食用級石膏的豆製品鈣質豐富。',tag:'官方統計',source:{name:'國健署：豆漿有豐富的鈣質？是真的嗎？',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1425&pid=11502'}},
        {item:'政策動向',desc:'每天早晚一杯奶：國健署我的餐盤建議每天早晚各喝一杯240毫升乳品，衛福部建議成人每日鈣1000毫克。',tag:'官方統計',source:{name:'國健署：首度公布國人「我的餐盤」',url:'https://www.mohw.gov.tw/cp-16-41108-1.html'}}
      ],
      product_view:['機會：鈣質與骨質疏鬆預防相關，可結合骨骼健康衛教。','機會：植物奶是年輕族群熱門話題。','風險：避免推薦特定乳品或植物奶品牌；不宜貶低素食或植物奶選擇。'],
      marketing_view:['機會：「燕麥奶能取代牛奶嗎？」是高搜尋問題。','機會：營養數字對照適合圖卡。','風險：調查以「不足1份」為門檻，與建議量1.5份不同，引用需說明。'],
      alert_level:'low',
      alert_reason:'屬長期飲食議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('19歲以上成人乳品每日攝取不足1份的比例達92.1%','DATA_FACTUAL_ACCURACY','threshold_vs_guideline',
          '調查門檻是「不足1份」，而本文前段建議的是每天早晚各一杯（1.5份）；兩個份量並列，讀者可能以為喝到1份就足夠。','low','no',
          null,'no','clarify','屬統計門檻說明。',
          '19歲以上成人乳品每日攝取不足1份的比例達92.1%（建議量為1.5份）',
          ['9成以上成人（92.1%）每天喝不到1份乳品']),
        F('選植物奶時看營養標示的鈣與蛋白質含量','DATA_FACTUAL_ACCURACY','missing_nuance',
          '市售部分植物奶有額外添加鈣，國健署比較的是未強化的燕麥奶；文中未說明「強化鈣」產品的差異，讀者無法判斷看標示時的標準。','low','no',
          null,'no','clarify','屬補充說明。',
          '選植物奶時看營養標示的鈣與蛋白質含量（部分產品有額外添加鈣）',
          ['買植物奶時看看標示上的鈣和蛋白質。']),
        F('豆漿屬豆魚蛋肉類的蛋白質來源，不能當成乳品補鈣','SOURCE_EVIDENCE','unsourced_classification',
          '國健署問答說明豆漿鈣質低，但「屬豆魚蛋肉類」的分類說法未見於本文引用資料。','low','no',
          null,'no','clarify','屬出處完整度。',
          '豆漿的鈣質低，不能當成乳品補鈣',
          ['豆漿比較像蛋白質來源，不能當牛奶補鈣。','鈣質低，屬蛋白質來源。'])
      ],
      card:[
        F('每 100 克鈣 **4 毫克**','DATA_FACTUAL_ACCURACY','missing_nuance',
          '數據為國健署比較的燕麥奶，部分市售產品有強化鈣，卡面未說明。','low','no',
          null,'no','clarify','屬產品差異。',
          '每 100 克鈣 **4 毫克**（未強化）'),
        F('豆漿鈣也只有牛奶約 1/7','DATA_FACTUAL_ACCURACY','category_mixing',
          '燕麥奶欄位中放入豆漿資訊，讀者可能混淆兩者。','low','no',
          null,'no','clarify','屬版面資訊歸類。',
          '植物奶多半鈣質偏低')
      ]
    },
    title_alts:[
      '燕麥奶、豆漿能取代牛奶嗎？國健署：營養價值不同',
      '早餐改喝燕麥奶，鈣質夠嗎？',
      '鮮奶107毫克 vs 燕麥奶4毫克：植物奶的補鈣真相'
    ],
    card_title_alts:[
      ['燕麥奶能取代牛奶？','鮮奶 vs 植物奶營養比一比'],
      ['豆漿補鈣嗎？','鈣只有牛奶 1/7'],
      ['不喝牛奶','從豆腐、青菜補鈣']
    ],
    data_addon:[
      '每100克鮮奶含碳水化合物4.8公克，燕麥奶8.1公克（國健署）。',
      '嚴格素食或補鈣困難者，可諮詢營養師是否需要補充品（國健署）。',
      '我的餐盤口訣：每天早晚一杯奶。'
    ],
    cta:'明天看一下你常喝的植物奶標示，鈣不夠的話，午餐多加一份板豆腐或深綠色蔬菜。'
  });
})();
