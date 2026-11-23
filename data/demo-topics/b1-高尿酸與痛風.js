/* v6 示範主題：高尿酸與痛風（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-21。數據來源：早安健康2023-08-01（引述衛福部2017-2020年國民營養健康狀況變遷調查之高尿酸血症盛行率，並整理多家醫院建議）、
   衛福部2013-01-03〈冬天不囤油 聰明也能吃好鍋〉（國民健康局：肉湯湯底高普林、酒精阻礙尿酸排出）、國健署2017-11-03〈吃鍋健康選材7秘訣〉。
   國健署未有高尿酸專屬新聞稿；盛行率為媒體引述調查結果，原始報告未核對。
   參考方向：健康智庫〈吃鍋要注意、避免高普林〉2024/01。 */
(function(){
  const REFS = [
    {title:'冬天不囤油 聰明也能吃好鍋',source:'衛生福利部國民健康局',url:'https://mohw.gov.tw/cp-16-23801-1.html'},
    {title:'吃鍋健康選材7秘訣 暖身暖心又暖胃',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-38278-1.html'},
    {title:'黃豆高普林，吃豆花易痛風？醫揭1習慣更可怕！飲食5招專剋高尿酸',source:'早安健康',url:'https://www.edh.tw/article/34346'}
  ];
  const TABLE = {headers:['吃鍋這樣選','原因'], rows:[
    ['少喝久煮的肉湯湯底','肉湯含高普林，會使血中尿酸升高'],
    ['避開燒酒雞、麻油雞等含酒湯底','酒精會阻礙尿酸排出'],
    ['選昆布、蔬菜清湯底','熱量與普林較低'],
    ['白開水或無糖茶取代含糖飲料','含糖飲料熱量高；多喝水有助尿酸排出']
  ]};
  const TAGS = ['高尿酸','痛風','普林','吃火鍋','飲食控制'];

  const DP_PREV = {id:'dp-gout-prev', type:'data_scope', title:'高尿酸盛行率的出處與範圍',
    desc:'「45-64歲男性16.5%、女性9.0%」是媒體引述衛福部2017-2020年國民營養健康狀況變遷調查，只涵蓋45-64歲；另有報導寫「30歲以上痛風盛行率3.3%」但未註明出處，AI 未採用。原始調查報告尚未核對。',
    current:'45-64歲男性16.5%、女性9.0%（2017-2020年調查，媒體引述）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'16.5%／9.0%', value:'45-64歲高尿酸血症', note:'2017-2020年調查（媒體引述，目前採用）'},
      {label:'3.3%', value:'30歲以上痛風', note:'媒體報導，未註明出處（未採用）'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'冬天吃鍋小心痛風：高尿酸飲食4原則，湯底別喝太多',
    update_date:'2026/11/21',
    intro:'尿酸是普林代謝後的產物，血中尿酸過高可能引發痛風急性發作。據媒體引述衛福部2017-2020年國民營養健康狀況變遷調查，45-64歲男性高尿酸血症盛行率為16.5%、女性9.0%。冬天是吃火鍋的季節，衛福部提醒，火鍋湯底久煮後普林含量高，攝取過多可能引發痛風，痛風病友更應避開肉類熬製與含酒精的湯底。',
    sections:[
      {heading:'吃火鍋的護尿酸原則',format:'table',table:TABLE},
      {heading:'高尿酸要注意什麼',format:'bullets',items:[
        '營養師指出，體內約80%的尿酸由人體代謝產生，其餘來自飲食中的普林。',
        '醫師建議避免攝取過多高普林食物，例如內臟、貝類、香菇，以及花生、腰果等油脂類堅果。',
        '果糖會加速普林合成，含糖飲料與甜湯的糖水也要節制。'
      ]},
      {heading:'日常這樣做',format:'bullets',items:[
        '多喝水以增加尿酸排出，醫師建議每日至少2,000 c.c.（腎臟病或心臟病患者依醫囑）。',
        '避免暴飲暴食與飲酒，維持健康體重。',
        '關節突然紅腫熱痛應就醫；已確診者依醫囑用藥，不自行停藥。'
      ]}
    ],
    think_tank_view:'痛風常在一頓大餐後找上門。冬天吃鍋時，先舀一碗剛煮的清湯、肉片涮完就撈起、飲料換成白開水，就能減少不少負擔。尿酸偏高的人，也別忘了定期抽血追蹤。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'火鍋建議引自衛福部新聞稿並標明年份，盛行率標明為媒體引述調查，飲食建議標明為營養師與醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['45-64歲高尿酸盛行率（媒體引述2017-2020年調查）','火鍋湯底高普林（衛福部2013年新聞稿）'],
      layout_reason:'以冬季吃鍋情境為主軸，先用表格整理選湯原則，再說明高尿酸飲食重點，最後給日常行動。',
      tone:'專業易懂', tone_reason:'飲食建議需具體可行。',
      to_verify:['盛行率需核對國民營養健康調查原始報告','火鍋新聞稿為2013年，年份較舊']},
    decision_points:[DP_PREV]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'吃完火鍋腳趾痛？痛風族吃鍋4撇步',
    update_date:'2026/11/21',
    intro:'冬天圍爐吃火鍋，最怕隔天腳趾頭又紅又腫。據媒體引述衛福部調查，45到64歲的男性約每6人就有1人尿酸偏高。衛福部也提醒，火鍋湯煮越久普林越高，痛風的人喝多了容易發作。',
    sections:[
      {heading:'吃鍋這樣選',format:'table',table:TABLE},
      {heading:'尿酸高要小心這些',format:'bullets',items:[
        '內臟、貝類、香菇、花生腰果，少吃一點。',
        '手搖飲、甜湯的糖水也會讓尿酸升高。',
        '其實大部分尿酸是身體自己做出來的，所以體重和生活習慣更重要。'
      ]},
      {heading:'平常這樣顧',format:'bullets',items:[
        '多喝白開水，有腎臟或心臟病的人喝多少先問醫生。',
        '少喝酒、別暴飲暴食。',
        '關節突然紅腫痛，就去看醫生。'
      ]}
    ],
    think_tank_view:'下次吃火鍋，先喝一碗剛煮好的清湯，最後那鍋濃湯就讓它留在鍋裡吧。吃得開心，也要顧好關節。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'建議引自衛福部與醫師說明，「每6人約1人」依16.5%換算，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以吃鍋後痛風發作的情境切入。', tone:'生活親切', tone_reason:'給中壯年男性與家人閱讀。', to_verify:['換算值']},
    decision_points:[DP_PREV]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'痛風：吃鍋少喝湯、避酒、多喝水',
    update_date:'2026/11/21',
    intro:'45-64歲男性高尿酸盛行率16.5%（媒體引述2017-2020年調查）。火鍋湯底久煮高普林，痛風者應少喝。',
    sections:[
      {heading:'吃鍋原則',format:'table',table:TABLE},
      {heading:'飲食',format:'bullets',items:[
        '少內臟、貝類、含糖飲料。',
        '避免飲酒。'
      ]},
      {heading:'日常',format:'bullets',items:[
        '多喝水、控制體重。',
        '關節紅腫痛就醫。'
      ]}
    ],
    think_tank_view:'少喝濃湯、避酒、多喝水，是高尿酸族最實用的吃鍋原則。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料標明出處與年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為原則、飲食、日常三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['盛行率為媒體引述']},
    decision_points:[DP_PREV]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'高尿酸與痛風', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'冬天吃鍋，湯底別喝太多', primary_visual:'16.5%', secondary_message:'久煮肉湯高普林，可能引發痛風', action_priority:'少喝湯、避酒、多喝水'},
    headline_hook:'吃完火鍋腳趾痛？', headline_main:'痛風族吃鍋 4 撇步', title_accent:'4 撇步',
    hero_message:'湯底別喝太多', hero_support:'衛福部：火鍋湯底久煮高普林，可能引發痛風',
    primary_stat:{value:'16.5%', label:'45–64 歲男性高尿酸血症盛行率', note:'媒體引述衛福部 2017–2020 年調查｜女性 9.0%'},
    action_title:'吃鍋這樣做',
    action_cards:[
      {key:'湯', text:'剛煮時先喝清湯，少喝久煮肉湯'},
      {key:'酒', text:'避開燒酒雞、麻油雞等含酒湯底'},
      {key:'水', text:'白開水或無糖茶取代含糖飲料'},
      {key:'少', text:'內臟、貝類少吃，避免暴飲暴食'}
    ],
    notice:'關節突然**紅腫熱痛**，請就醫；已確診者依醫囑用藥。',
    carousel_suggestion:{reason:'若想把盛行率、飲食與吃鍋撇步分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'尿酸偏高', headline_main:'中年男性約每 6 人 1 人'},
      {layout_type:'knowledge', headline_hook:'高普林食物', headline_main:'這些要少吃'},
      {layout_type:'action', headline_hook:'吃完火鍋腳趾痛？', headline_main:'痛風族吃鍋 4 撇步'}]},
    hashtags:['高尿酸','痛風','普林','吃火鍋'],
    sources:['衛生福利部','早安健康'],
    illustration_category:'nutrition',
    illustration:{topic:'健康吃火鍋', audience:'中壯年男性與家人', scene:'冬天家人圍著清湯火鍋，桌上放著白開水與蔬菜盤',
      emotion:'溫暖、節制', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A family gathered around a clear-broth hot pot in winter with water glasses and vegetable plates on the table, warm and balanced mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['火鍋湯底高普林（衛福部）','高尿酸盛行率（媒體引述調查）'],
      layout_reason:'以冬季吃鍋情境為主，選 action：4 個吃鍋撇步當主角，盛行率當主數字並標出處。',
      tone:'專業易懂', tone_reason:'行動需具體。',
      to_verify:['盛行率原始報告']},
    decision_points:[Object.assign({}, DP_PREV, {current:'16.5%｜45–64 歲男性（媒體引述）'})],
    content_check_note:'建議引自衛福部，盛行率標明為媒體引述，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'高尿酸與痛風',
    collect:{
      summary:'據媒體引述衛福部2017-2020年調查，45-64歲男性高尿酸血症盛行率16.5%；衛福部提醒火鍋湯底久煮高普林、含酒湯底阻礙尿酸排出，冬季吃鍋是溝通高尿酸飲食的時機點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'45-64歲男性高尿酸盛行率16.5%：據早安健康引述衛福部2017-2020年國民營養健康狀況變遷調查，同年齡女性為9.0%，約一成患者有痛風現象（原始報告未核對）。',tag:'市場觀察',source:{name:'早安健康：黃豆高普林，吃豆花易痛風？',url:'https://www.edh.tw/article/34346'}},
        {item:'年度趨勢方向',desc:'約80%尿酸由人體代謝產生：營養師指出飲食中的普林只占尿酸來源的一部分，體重、果糖與飲酒等生活習慣影響更大。',tag:'市場觀察',source:{name:'早安健康：黃豆高普林，吃豆花易痛風？',url:'https://www.edh.tw/article/34346'}},
        {item:'政策動向',desc:'5項吃鍋健康原則：衛福部提醒火鍋湯底久煮會有高普林，痛風病友應避免肉類熬製及含酒精湯底，並以無糖茶或白開水取代含糖飲料（2013年新聞稿）。',tag:'官方統計',source:{name:'衛生福利部：冬天不囤油 聰明也能吃好鍋',url:'https://mohw.gov.tw/cp-16-23801-1.html'}},
        {item:'好發族群年齡層',desc:'7項吃鍋選材秘訣：國健署建議選擇清湯底、低脂白肉與大量蔬菜，避免含糖飲料與甜食，冬季聚餐時更需節制。',tag:'官方統計',source:{name:'衛生福利部國民健康署：吃鍋健康選材7秘訣',url:'https://mohw.gov.tw/cp-16-38278-1.html'}}
      ],
      product_view:['機會：痛風與高尿酸常合併三高與腎病，可作為慢性病健康管理的溝通切點。','機會：冬季飲食提醒適合結合健康管理服務。','風險：避免推薦降尿酸保健食品，或暗示飲食控制可取代醫療。'],
      marketing_view:['機會：冬季火鍋季是固定溝通時點，「吃鍋4撇步」好執行好分享。','機會：中壯年男性是主要對象。','風險：避免一刀切的「不能吃」清單，宜以「少喝濃湯、多喝水」等正向行動呈現。'],
      alert_level:'low',
      alert_reason:'無政策事件，適合在冬季吃鍋季節性溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('據媒體引述衛福部2017-2020年國民營養健康狀況變遷調查','SOURCE_EVIDENCE','secondary_citation',
          '盛行率經由媒體轉引，未核對調查原始報告；且只涵蓋45-64歲。','medium','yes',
          '國民營養健康狀況變遷調查2017-2020年報告的高尿酸血症章節。','yes','confirm','屬二手引述。',
          null,['據媒體引述衛福部調查']),
        F('衛福部提醒，火鍋湯底久煮後普林含量高','CURRENCY_TIMELINESS','old_statement',
          '引用的是2013年國民健康局新聞稿，文中未標年份；讀者可能以為是近期提醒。','low','no',
          null,'no','clarify','建議內容仍合理，屬年份標示。',
          '衛福部（2013年新聞稿）提醒，火鍋湯底久煮後普林含量高',['衛福部也提醒，火鍋湯煮越久普林越高']),
        F('醫師建議每日至少2,000 c.c.','MEDICAL_INTERPRETATION','advice_scope',
          '飲水量建議出自單一醫院醫師說法，文中已加註腎臟病或心臟病患者依醫囑，但未說明一般人也應視體重與活動量調整。','low','no',
          null,'no','clarify','屬建議範圍說明。',
          null),
        F('其實大部分尿酸是身體自己做出來的，所以體重和生活習慣更重要','MEDICAL_INTERPRETATION','oversimplification',
          '「更重要」是改寫推論，原說法只說約80%尿酸由代謝產生；可能讓讀者以為飲食完全不重要。','low','no',
          null,'no','clarify','屬表達方式調整。',
          '其實大部分尿酸是身體代謝產生的，飲食之外，體重和生活習慣也很重要')
      ],
      card:[
        F('45–64 歲男性高尿酸血症盛行率','SOURCE_EVIDENCE','secondary_citation',
          '主數字為媒體引述調查。','medium','yes',
          '調查原始報告。','yes','confirm','屬二手引述。',
          null),
        F('衛福部：火鍋湯底久煮高普林，可能引發痛風','CURRENCY_TIMELINESS','old_statement',
          '出自2013年新聞稿，卡面未標年份。','low','no',
          null,'no','clarify','屬年份標示。',
          '衛福部（2013）：火鍋湯底久煮高普林，可能引發痛風')
      ]
    },
    title_alts:[
      '冬天吃鍋小心痛風：高尿酸飲食4原則，湯底別喝太多',
      '吃完火鍋腳趾痛？痛風族吃鍋4撇步',
      '高尿酸不只是普林：飲食、喝水與體重管理'
    ],
    card_title_alts:[
      ['吃完火鍋腳趾痛？','痛風族吃鍋 4 撇步'],
      ['湯底別喝太多','高尿酸吃鍋原則'],
      ['尿酸偏高','中年男性約每 6 人 1 人']
    ],
    data_addon:[
      '醫師說明：豆花、豆腐、豆干、豆漿等黃豆製品通常不被視為高普林食物（林口長庚，媒體報導）。',
      '醫師建議：蛋豆魚肉類每日男性不超過6份、女性不超過4份（國泰醫院，媒體報導）。',
      '國健署：健康體重成人一天所需熱量約1,800大卡（以60公斤靜態工作者為例）。'
    ],
    cta:'這個冬天吃火鍋時，先喝一碗剛煮好的清湯，飲料換成白開水，濃湯留在鍋裡。'
  });
})();
