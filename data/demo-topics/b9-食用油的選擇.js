/* v6 示範主題：食用油的選擇（B9 飲食營養與運動）
   查證日期：2026-11-21。數據來源：衛福部／國健署〈「好油」「壞油」分清楚 切莫傷健康！用油五撇步報你知〉（家中烹調用不飽和脂肪較高的植物油、低溫烹調、少油炸）、食藥署〈正確選用油品，保障全家健康〉（高溫油炸選飽和度較高油脂、劣變判斷與換油）、國健署《國民營養健康狀況變遷調查成果報告2017-2020年》第三章第三節3.1（19-44歲男女油脂類比建議量多約1份）、國健署問答（每日油脂3-7茶匙）。
   注意：2017-2020年報告未提供「超過建議量比率」，改以報告內文的份數差距說明（2026-11-22移除原用的2013-2016年39%）；未查到國健署公布各油品發煙點數值，未寫。
   參考方向：健康智庫〈植物油與動物油，該如何選擇？〉2024/09。 */
(function(){
  const REFS = [
    {title:'「好油」「壞油」分清楚 切莫傷健康！-用油五撇步報你知',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-3218-22795-1.html'},
    {title:'正確選用油品，保障全家健康',source:'衛生福利部食品藥物管理署',url:'https://www.mohw.gov.tw/cp-3218-22762-1.html'},
    {title:'國民營養健康狀況變遷調查成果報告2017-2020年',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=3999&pid=15562'},
    {title:'橄欖油最健康，烹調可以全都使用橄欖油？',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1425&pid=15183'}
  ];
  const TABLE = {headers:['烹調方式','建議油品'], rows:[
    ['涼拌、低溫油水炒','大豆油、葵花油、橄欖油等不飽和脂肪較高的植物油'],
    ['高溫長時間煎炸','豬油、牛油、椰子油、棕櫚油等飽和度較高、較安定的油脂'],
    ['不論哪種油','油炸食物都應少吃，飽和脂肪攝取過多不利心血管'],
    ['避免','酥油、人造奶油等可能含反式脂肪的油脂']
  ]};
  const TAGS = ['食用油','植物油','烹調方式','心血管健康','減油'];

  const PRO = {
    content_type:'健康文章',
    title:'植物油還是豬油？依烹調方式選油，更要少油少炸',
    update_date:'2026/11/21',
    intro:'依國健署2017-2020年國民營養健康狀況變遷調查，19-44歲男女的油脂類攝取量都比建議量多約1份（男性1份、女性0.8份），是油脂攝取偏多最明顯的年齡層。國民健康署建議，家中烹調使用不飽和脂肪含量較高的植物油，搭配涼拌、低溫油水炒等低溫方式，以減少自由基及致癌物質的生成；食品藥物管理署則說明，高溫長時間油炸可選飽和度較高、較安定的油脂。不過選對油之外，更重要的是減少用油量與油炸。',
    sections:[
      {heading:'依烹調方式選油',format:'table',table:TABLE},
      {heading:'國健署用油撇步',format:'bullets',items:[
        '使用植物油，但避免高溫起鍋，少用糖醋、油炸、油煎、爆炒、油淋。',
        '避免油炸食品，油炸外皮去除後再吃；少吃酥皮、酥脆點心等高油脂零食。',
        '避免反式脂肪，選擇反式脂肪標示為零的油品。',
        '豬油等動物油含較多飽和脂肪，食用過多易使膽固醇沉積在血管壁。'
      ]},
      {heading:'油品保存與換油',format:'bullets',items:[
        '烹調用油最好當次或當日使用，油炸後過濾殘渣，避免新舊油混用。',
        '油色變深、變黏稠，或油炸時白色小泡沫超過鍋面一半，就應換油。',
        '即使是好油，國健署建議每日油脂攝取仍以約3至7茶匙為宜。'
      ]}
    ],
    think_tank_view:'「哪一種油最健康」是很常見的問題，但比油的種類更關鍵的是「用多少、怎麼煮」。把熱炒改成蒸煮、油炸改成烤，比換一瓶更貴的油更有效。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'選油建議引自國健署與食藥署，油脂攝取狀況引自國健署2017-2020年調查成果報告，未推薦特定油品品牌。',
    ai_rationale:{basis:['家中用植物油低溫烹調（國健署）','高溫油炸選飽和度較高油脂（食藥署）','19-44歲油脂類比建議量多約1份（2017-2020年調查）'],
      layout_reason:'先用表格依烹調方式對照油品，再列國健署用油撇步，最後給保存與換油提醒。',
      tone:'專業易懂', tone_reason:'需釐清不同油品的用途。',
      to_verify:['每日3-7茶匙為國健署問答說法']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'炒菜用什麼油好？其實「少油」比換油更重要',
    update_date:'2026/11/21',
    intro:'家裡該用植物油還是豬油？國健署建議，平常在家煮菜用大豆油、葵花油、橄欖油這類植物油，搭配涼拌、水炒等低溫方式最好；食藥署則說，如果要高溫油炸，豬油、棕櫚油這類比較耐高溫。不過國健署2017-2020年的調查發現，19到44歲的年輕成人油吃得比建議量多了約1份，所以比起換油，少油少炸更重要。',
    sections:[
      {heading:'怎麼煮，就用什麼油',format:'table',table:TABLE},
      {heading:'用油小撇步',format:'bullets',items:[
        '用植物油，但別大火爆炒、油炸、油淋。',
        '炸物少吃，吃的話把外皮去掉。',
        '餅乾、酥皮點心少吃。',
        '豬油這類動物油吃多了，膽固醇容易卡在血管。'
      ]},
      {heading:'油要怎麼放、何時換',format:'bullets',items:[
        '炸過的油過濾後隔天用完，不要新舊混著用。',
        '油變深、變黏，或泡泡一直冒，就該換了。',
        '一天的油大概3到7茶匙就夠。'
      ]}
    ],
    think_tank_view:'今晚的菜試試看用蒸或燙取代一道炒菜，少的那一匙油，比換什麼油都有用。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署與食藥署並標明調查年份，未推薦特定油品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以「炒菜用什麼油」的家庭疑問切入。', tone:'生活親切', tone_reason:'給家庭備餐者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'食用油：依烹調選油，少油少炸',
    update_date:'2026/11/21',
    intro:'低溫烹調用植物油，高溫油炸用較安定的油脂。2017-2020年調查19-44歲油脂比建議量多約1份。',
    sections:[
      {heading:'選油',format:'table',table:TABLE},
      {heading:'撇步',format:'bullets',items:[
        '避免高溫爆炒油炸。',
        '避免反式脂肪。'
      ]},
      {heading:'換油',format:'bullets',items:[
        '變深、變黏、起泡就換。'
      ]}
    ],
    think_tank_view:'用多少、怎麼煮，比用哪種油更重要。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署與食藥署，未推薦特定油品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為選油、撇步、換油三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'食用油的選擇', output_mode:'single', layout_type:'comparison',
    communication_priority:{primary_message:'依烹調方式選油，更要少油少炸', primary_visual:'植物油 vs 動物油', secondary_message:'19–44 歲油脂多吃約 1 份', action_priority:'低溫烹調、少油炸'},
    headline_hook:'炒菜用什麼油？', headline_main:'植物油、動物油這樣選', title_accent:'這樣選',
    comparison:{
      a:{title:'植物油', subtitle:'大豆油、葵花油、橄欖油', points:['不飽和脂肪含量較高','適合**涼拌、低溫油水炒**','避免高溫起鍋、油炸','國健署建議家中烹調使用']},
      b:{title:'飽和度較高的油', subtitle:'豬油、牛油、棕櫚油', points:['室溫下為固態、較安定','適合**高溫長時間煎炸**','飽和脂肪較多','吃多易使膽固醇沉積']},
      key_diff:'低溫用植物油，高溫才用**較耐熱的油**',
      same:'油炸食物都**應少吃**',
      how_to_choose:'每日油脂約 3–7 茶匙，少用炸煎爆炒'
    },
    hashtags:['食用油','植物油','烹調方式','減油'],
    sources:['衛生福利部國民健康署','衛生福利部食品藥物管理署'],
    illustration_category:'heart',
    illustration:{topic:'健康用油', audience:'家庭備餐者', scene:'廚房裡家長用少量植物油水炒青菜，旁邊一鍋清蒸魚',
      emotion:'清爽、健康', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A parent in a kitchen stir-frying vegetables with a small amount of vegetable oil and water, a pot of steamed fish nearby, fresh and healthy, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['國健署用油五撇步','食藥署油品選用說明'],
      layout_reason:'核心是兩類油品的對照，選 comparison：左右並列用途與特性，中間點出關鍵差異，底部給共同點與用量。',
      tone:'專業易懂', tone_reason:'清楚區分用途。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自國健署與食藥署，未推薦特定油品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'食用油的選擇',
    collect:{
      summary:'國健署建議家中以不飽和脂肪較高的植物油搭配低溫烹調，食藥署說明高溫長時間油炸可選飽和度較高、較安定的油脂；但國健署2017-2020年調查顯示19-44歲男女油脂類比建議量多約1份，「少油少炸」比換油更關鍵，是心血管預防的溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'多約1份：國健署2017-2020年國民營養健康狀況變遷調查（3.1節），19-44歲男女油脂類攝取量都比建議量多約1份（男性1份、女性0.8份），為偏差最大的年齡層。',tag:'官方統計',source:{name:'國健署：國民營養健康狀況變遷調查成果報告2017-2020年',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=3999&pid=15562'}},
        {item:'政策動向',desc:'低溫烹調：國健署建議家中烹調使用不飽和脂肪含量較高的植物油，以涼拌、低溫油水炒等方式，減少自由基及致癌物質生成。',tag:'官方統計',source:{name:'國健署：用油五撇步報你知',url:'https://www.mohw.gov.tw/cp-3218-22795-1.html'}},
        {item:'年度趨勢方向',desc:'高溫油炸用較安定油脂：食藥署說明高溫長時間煎炸可選豬油、牛油、椰子油或棕櫚油等飽和度較高的油脂，低溫拌炒則選大豆油、葵花油、橄欖油。',tag:'官方統計',source:{name:'食藥署：正確選用油品，保障全家健康',url:'https://www.mohw.gov.tw/cp-3218-22762-1.html'}},
        {item:'好發族群年齡層',desc:'白色泡沫超過鍋面一半：食藥署提醒油脂顏色變深、變黏稠，或油炸時白色小泡沫超過油炸鍋面積一半，表示油脂劣變應儘速換油。',tag:'官方統計',source:{name:'食藥署：正確選用油品，保障全家健康',url:'https://www.mohw.gov.tw/cp-3218-22762-1.html'}}
      ],
      product_view:['機會：用油習慣與心血管疾病預防相關，可結合健康管理內容。','機會：家庭烹調是高共鳴的生活情境。','風險：避免推薦特定油品品牌；不宜將單一油品宣稱為「最健康」。'],
      marketing_view:['機會：食安油品新聞發生時民眾關注度高。','機會：「植物油vs豬油」是常見爭論，適合對照圖卡。','風險：油脂超量集中在19-44歲，不宜套用到所有年齡層。'],
      alert_level:'low',
      alert_reason:'屬長期飲食議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('19-44歲男女的油脂類攝取量都比建議量多約1份','DATA_FACTUAL_ACCURACY','unit_unexplained',
          '「1份」油脂約等於1茶匙（5公克）油，文中未換算，讀者難以想像多吃了多少；也未說明份數是群體平均。','low','no',
          null,'no','clarify','屬單位說明。',
          '19-44歲男女的油脂類攝取量平均都比建議量多約1份（約1茶匙油）',
          ['19到44歲的年輕成人油吃得比建議量多了約1份','19-44歲油脂比建議量多約1份']),
        F('減少自由基及致癌物質的生成','SOURCE_EVIDENCE','unspecified_mechanism',
          '「減少致癌物質生成」為國健署新聞稿說法，但未列研究依據；放在選油段落可能讓讀者以為高溫烹調必然致癌。','low','no',
          null,'no','clarify','屬風險表達強度。',
          '降低高溫烹調產生有害物質的可能'),
        F('一天的油大概3到7茶匙就夠','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '3至7茶匙是依不同熱量需求的範圍，未說明多數成人對應的份量與「已包含烹調用油」。','low','no',
          null,'no','clarify','屬份量說明。',
          '一天的油（含炒菜用油）大概3到7茶匙，依熱量需求不同',
          ['即使是好油，國健署建議每日油脂攝取仍以約3至7茶匙為宜。'])
      ],
      card:[
        F('吃多易使膽固醇沉積','MEDICAL_INTERPRETATION','oversimplification',
          '飽和脂肪與血膽固醇關係受整體飲食影響，卡面語氣較絕對。','low','no',
          null,'no','clarify','屬語氣強度。',
          '吃多可能使膽固醇升高'),
        F('每日油脂約 3–7 茶匙，少用炸煎爆炒','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '份量範圍依熱量需求而異，且包含烹調用油，卡面未說明。','low','no',
          null,'no','clarify','受字數限制。',
          '每日油脂（含烹調）3–7 茶匙')
      ]
    },
    title_alts:[
      '植物油還是豬油？依烹調方式選油，更要少油少炸',
      '炒菜用什麼油好？其實「少油」比換油更重要',
      '低溫用植物油、高溫選安定油脂：食用油選擇指南'
    ],
    card_title_alts:[
      ['炒菜用什麼油？','植物油、動物油這樣選'],
      ['少油比換油重要','4 個用油撇步'],
      ['油變深、變黏','該換油了']
    ],
    data_addon:[
      '國健署引述研究指出每天攝取4-5公克反式脂肪即可使膽固醇升高、心血管疾病風險增加23%。',
      '油炸後過濾殘渣再貯存，最好隔日使用或丟棄（食藥署）。',
      '我的餐盤中油脂類於烹調時添加，不單獨呈現（國健署）。'
    ],
    cta:'今晚的菜色裡，把一道油炒或油炸改成蒸、燙或烤，少用一匙油。'
  });
})();
