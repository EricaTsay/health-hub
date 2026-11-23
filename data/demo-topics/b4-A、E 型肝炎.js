/* v6 示範主題：A、E 型肝炎（B4 消化・肝膽・呼吸）
   查證日期：2026-11-20。數據來源：疾管署傳染病統計資料查詢系統（急性病毒性A型肝炎、E型肝炎，2025年全年總數，依發病日，資料更新2026/11/20）、
   疾管署〈A型肝炎疫情為近9年新高 提醒民眾注意飲食衛生 避免不安全性行為並建議接種疫苗〉（2026/01/06）。
   依傳染病撰寫規範只用年度統計，不寫當年度累計與每週疫情。
   參考方向：健康智庫〈病毒性A、E肝炎〉2022/08。 */
(function(){
  const REFS = [
    {title:'A型肝炎疫情為近9年新高 提醒民眾注意飲食衛生 避免不安全性行為並建議接種疫苗',source:'衛生福利部疾病管制署',url:'https://www.cdc.gov.tw/Bulletin/Detail/MpyGmB7q3cFrNGGn1AzHMg?typeid=MmgtpeidAR5Ooai4-fgHzQ'},
    {title:'傳染病統計資料查詢系統：急性病毒性A型肝炎',source:'衛生福利部疾病管制署',url:'https://nidss.cdc.gov.tw/nndss/disease?id=0701'},
    {title:'傳染病統計資料查詢系統：急性病毒性E型肝炎',source:'衛生福利部疾病管制署',url:'https://nidss.cdc.gov.tw/nndss/disease?id=070e'}
  ];
  const TABLE = {headers:['項目','A型肝炎','E型肝炎'], rows:[
    ['傳染途徑','糞口傳染：受污染食物、與感染者親密接觸','主要經糞口傳染，與飲食衛生相關'],
    ['2025年確定病例','485例（依發病日）','4例'],
    ['疫苗','有，2劑可維持20年以上免疫力','國內無常規疫苗'],
    ['預防重點','接種疫苗、洗手、公筷母匙、避免不安全性行為','注意飲食衛生，食物煮熟、飲水安全']
  ]};
  const TAGS = ['A型肝炎','E型肝炎','A肝疫苗','飲食衛生','傳染病防治'];

  const DP_COUNT = {id:'dp-hav-count', type:'data_scope', title:'2025年A肝病例有兩個數字',
    desc:'疾管署2026/01/06新聞稿寫2025年累計477例（本土447例、境外30例），為發布當時的統計；傳染病統計資料查詢系統依發病日統計的2025年總數為485例（資料更新至2026/11/20）。AI 採用查詢系統的年度總數，並保留新聞稿的本土病例說明。',
    current:'2025年A型肝炎確定病例485例（疾管署統計系統，依發病日）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'485例', value:'統計系統・依發病日', note:'資料更新2026/11/20（目前採用）'},
      {label:'477例', value:'新聞稿・2026/01/06', note:'本土447例、境外移入30例'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'A型肝炎病例創近9年新高：認識A、E型肝炎與疫苗保護',
    update_date:'2026/11/20',
    intro:'A型與E型肝炎都是經糞口途徑傳染的急性病毒性肝炎。疾病管制署統計，2025年急性病毒性A型肝炎確定病例485例（依發病日），疾管署並指出本土病例數為近9年最高，男性占82.8%，以30-39歲（36.2%）與20-29歲（28.4%）最多；同年E型肝炎4例。依2020年國民免疫力調查，21-40歲民眾A肝抗體陽性率約10%，青壯年多數缺乏保護力。',
    sections:[
      {heading:'A型與E型肝炎比一比',format:'table',table:TABLE},
      {heading:'症狀與風險',format:'bullets',items:[
        '潛伏期15至50天，平均28至30天；症狀包括發燒、倦怠、食慾不振、腹部不適與黃疸。',
        'A型肝炎致死率約0.1~0.3%，老年人或慢性肝病患者風險較高。',
        '疾管署提醒，不安全性行為與共食是近年本土疫情的重要風險。'
      ]},
      {heading:'預防與疫苗',format:'bullets',items:[
        '2017年以後出生、滿12個月以上幼兒可公費接種A肝疫苗；確定病例的接觸者可於最後接觸後14天內公費接種1劑。',
        '未具A肝抗體的成人，可就醫評估自費接種2劑（間隔6-12個月）；出國旅遊或暴露風險較高者建議主動接種。',
        '以肥皂和清水洗手、共食使用公筷母匙，性行為前後清潔雙手並避免不安全性行為。'
      ]}
    ],
    think_tank_view:'很多人以為A肝是衛生條件差的年代才有的疾病，但正因為現在的青壯年小時候沒被感染過、也沒打過疫苗，反而成為最容易感染的族群。如果你是20-40歲、沒打過A肝疫苗，出國或聚餐頻繁，不妨到醫院驗抗體、補打疫苗，2劑就能長期保護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'病例數為疾管署2025年度統計，抗體陽性率標明2020年調查，未使用當年度或每週疫情數字，未使用療效保證用語，未涉及具體疫苗廠牌。',
    ai_rationale:{basis:['2025年A肝485例、E肝4例取自疾管署傳染病統計資料查詢系統','性別年齡分布、抗體陽性率取自疾管署2026/01/06新聞稿'],
      layout_reason:'以表格對照A、E肝，再說明症狀風險與預防疫苗。',
      tone:'專業易懂', tone_reason:'傳染病資訊需清楚、避免恐慌。',
      to_verify:['477例與485例口徑差異','公費幼兒A肝疫苗捐贈計畫目前執行狀態']},
    decision_points:[DP_COUNT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'20到40歲小心A肝！聚餐、出國前先看這篇',
    update_date:'2026/11/20',
    intro:'A型肝炎是吃到被污染的食物、或和感染者親密接觸傳染的肝炎。疾管署統計，2025年有485人確診A肝，本土病例是近9年最多，而且大多是20到40歲的男性。因為這個年紀的人小時候多半沒打過疫苗，身上也沒有抗體。E型肝炎同樣是吃進去傳染的，2025年有4例。',
    sections:[
      {heading:'A肝、E肝哪裡不一樣？',format:'table',table:TABLE},
      {heading:'感染了會怎樣？',format:'bullets',items:[
        '大約一個月後開始發燒、很累、吃不下、肚子不舒服，眼睛皮膚變黃。',
        '老人家或本來就有肝病的人比較容易變嚴重。'
      ]},
      {heading:'怎麼預防？',format:'bullets',items:[
        '沒打過A肝疫苗的大人，可以問醫師自費打2劑。',
        '飯前便後用肥皂洗手，聚餐用公筷母匙。',
        '避免不安全性行為，出國注意飲食衛生。'
      ]}
    ],
    think_tank_view:'打2劑A肝疫苗可以保護20年以上。出國或常聚餐的你，不妨趁下次健檢順便問問醫師。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'病例數為疾管署2025年度統計，未使用當年度或每週疫情數字，未使用療效保證用語，未涉及具體疫苗廠牌。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以高風險年齡層的生活情境切入。', tone:'生活親切', tone_reason:'給青壯年讀者閱讀。', to_verify:['477例與485例口徑差異']},
    decision_points:[DP_COUNT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'A、E型肝炎：病例與疫苗',
    update_date:'2026/11/20',
    intro:'2025年A型肝炎確定485例，本土病例為近9年最高；E型肝炎4例（疾管署）。',
    sections:[
      {heading:'A肝vs E肝',format:'table',table:TABLE},
      {heading:'風險',format:'bullets',items:[
        '20-40歲男性為主，多數缺乏抗體。'
      ]},
      {heading:'預防',format:'bullets',items:[
        'A肝疫苗2劑、洗手、公筷母匙。'
      ]}
    ],
    think_tank_view:'青壯年缺乏A肝抗體，接種疫苗是最有效的保護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'病例數為疾管署2025年度統計，未使用療效保證用語，未涉及具體疫苗廠牌。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為對照、風險、預防三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['477例與485例口徑差異']},
    decision_points:[DP_COUNT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'A、E 型肝炎', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'A 肝本土病例創近 9 年新高', primary_visual:'485 例', secondary_message:'20–40 歲多數沒有抗體', action_priority:'補打 A 肝疫苗'},
    headline_hook:'A 肝病例近 9 年新高', headline_main:'青壯年快補 A 肝疫苗', title_accent:'A 肝疫苗',
    primary_stat:{kicker:'2025 年・全年', value:'485 例', label:'A 型肝炎確定病例', note:'疾管署統計系統（依發病日）｜E 肝 4 例'},
    chart:{type:'hbar', title:'2025 年 A 肝病例年齡分布（%）', max:100, points:[
      {label:'30–39 歲', value:36.2, display:'36.2%', highlight:true},
      {label:'20–29 歲', value:28.4, display:'28.4%'}
    ], note:'疾管署 2026/01/06 新聞稿'},
    secondary_stats:[
      {value:'82.8%', label:'A 肝病例為男性'},
      {value:'約 10%', label:'21–40 歲 A 肝抗體陽性率（2020 年）'}
    ],
    action_title:'預防 A 肝這樣做',
    action_cards:[
      {key:'打', text:'無抗體成人自費接種 A 肝疫苗 2 劑'},
      {key:'洗', text:'飯前便後用肥皂和清水洗手'},
      {key:'分', text:'聚餐使用公筷母匙'},
      {key:'防', text:'避免不安全性行為，出國注意飲食'}
    ],
    carousel_suggestion:{reason:'若想把疫情數據、A/E肝差異與疫苗資訊分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'A 肝近 9 年新高', headline_main:'2025 年 485 例'},
      {layout_type:'comparison', headline_hook:'A 肝 vs E 肝', headline_main:'傳染途徑與疫苗'},
      {layout_type:'action', headline_hook:'青壯年', headline_main:'補打 A 肝疫苗 2 劑'}]},
    hashtags:['A型肝炎','E型肝炎','A肝疫苗','飲食衛生'],
    sources:['衛生福利部疾病管制署'],
    illustration_category:'virus-infection',
    illustration:{topic:'A型肝炎預防', audience:'青壯年', scene:'年輕人在診所接種疫苗，背景有行李箱代表即將出國',
      emotion:'安心、有準備', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young adult receiving a vaccine at a clinic with a travel suitcase nearby, prepared and reassured mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：2025年A肝485例（疾管署統計系統）','年齡性別分布取自疾管署2026/01/06新聞稿'],
      layout_reason:'關鍵訊息是「青壯年病例增加、缺乏抗體」，選 data：年度病例數當主角，年齡分布橫條圖說明族群，最後給預防行動。',
      tone:'專業易懂', tone_reason:'傳染病資訊以年度統計呈現。',
      to_verify:['年齡分布基於477例新聞稿']},
    decision_points:[Object.assign({}, DP_COUNT, {current:'485 例｜2025 年 A 型肝炎確定病例（依發病日）'})],
    content_check_note:'病例數為疾管署2025年度統計，未使用當年度或每週疫情數字，未使用療效保證用語，未涉及具體疫苗廠牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'A、E 型肝炎',
    collect:{
      summary:'A型肝炎2025年確定病例485例，疾管署指出本土病例為近9年最高，以20-39歲男性為主，青壯年多數缺乏抗體；E型肝炎同年4例。兩者皆經糞口傳染，A肝疫苗與飲食、性行為衛生是預防重點。',
      objective_data:[
        {item:'年度趨勢方向',desc:'485例：疾管署傳染病統計資料查詢系統，2025年急性病毒性A型肝炎確定病例485例（依發病日），疾管署指出本土病例為近9年最高。',tag:'官方統計',source:{name:'疾管署：傳染病統計資料查詢系統（A型肝炎）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=0701'}},
        {item:'好發族群年齡層',desc:'82.8%為男性：疾管署分析2025年A肝病例，男性占82.8%，年齡以30-39歲占36.2%最多、20-29歲占28.4%次之。',tag:'官方統計',source:{name:'疾管署：A型肝炎疫情為近9年新高',url:'https://www.cdc.gov.tw/Bulletin/Detail/MpyGmB7q3cFrNGGn1AzHMg?typeid=MmgtpeidAR5Ooai4-fgHzQ'}},
        {item:'盛行率／發生率',desc:'約10%有抗體：依2020年國民免疫力調查，全國A肝抗體陽性率約30%，21-40歲約10%，41-50歲未達4成。',tag:'官方統計',source:{name:'疾管署：A型肝炎疫情為近9年新高',url:'https://www.cdc.gov.tw/Bulletin/Detail/MpyGmB7q3cFrNGGn1AzHMg?typeid=MmgtpeidAR5Ooai4-fgHzQ'}},
        {item:'政策動向',desc:'4例E型肝炎：2025年急性病毒性E型肝炎確定病例4例，A肝則提供2017年以後出生幼兒公費疫苗，確定病例接觸者14天內可公費接種1劑。',tag:'官方統計',source:{name:'疾管署：傳染病統計資料查詢系統（E型肝炎）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=070e'}}
      ],
      product_view:['機會：出國旅遊與青壯年保戶可提供A肝疫苗與飲食衛生提醒。','機會：可與旅遊平安險相關的健康提醒內容結合。','風險：避免污名化特定族群；傳染病只用年度統計，不寫即時疫情。'],
      marketing_view:['機會：暑假與年節出國旺季前是溝通時機。','機會：「20-40歲多數沒有抗體」反差強，易引起關注。','風險：涉及性行為傳染時，用語需中性、避免標籤化。'],
      alert_level:'medium',
      alert_reason:'2025年A肝本土病例為近9年最高，青壯年缺乏抗體；溝通以年度統計與疫苗建議為主。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('疾管署並指出本土病例數為近9年最高','DATA_FACTUAL_ACCURACY','mixed_sources',
          '485例取自統計系統，「近9年最高」與性別年齡分布則出自新聞稿的477例統計，兩者口徑不同，文中未說明。','low','no',
          null,'no','clarify','屬口徑說明。',
          '疾管署2026年1月新聞稿（當時統計477例）並指出本土病例數為近9年最高'),
        F('不安全性行為與共食是近年本土疫情的重要風險','SOURCE_EVIDENCE','overstated_attribution',
          '疾管署新聞稿是提醒民眾避免不安全性行為、共食用公筷母匙，並未量化說明這兩者是本土疫情的主要原因，文中說法比原始資料更強。','low','no',
          null,'no','clarify','屬因果表述精確度。',
          '疾管署提醒，避免不安全性行為、共食使用公筷母匙，可降低感染風險'),
        F('2劑就能長期保護','MEDICAL_INTERPRETATION','vaccine_efficacy',
          '疾管署寫的是「依時程完成2劑，免疫力可維持20年以上」，文中「長期保護」未說明需按時程完成。','low','no',
          null,'no','clarify','屬疫苗效果表達。',
          '依時程完成2劑，免疫力可維持20年以上',
          ['打2劑A肝疫苗可以保護20年以上']),
        F('2017年以後出生、滿12個月以上幼兒可公費接種A肝疫苗','REGULATORY_COMPLIANCE','program_status',
          '此為2018年起由基金會捐贈疫苗的方案，新聞稿未說明目前是否仍持續，文中寫成現行政策。','medium','yes',
          '幼兒公費A肝疫苗目前的提供對象與經費來源。','yes','confirm','需查疾管署現行公費疫苗時程。',
          '2017年以後出生、滿12個月以上幼兒依疾管署公費疫苗時程接種A肝疫苗（請以現行公告為準）')
      ],
      card:[
        F('A 肝病例為男性','DATA_FACTUAL_ACCURACY','mixed_sources',
          '82.8%出自新聞稿的477例統計，主數字為統計系統485例，卡面未說明。','low','no',
          null,'no','clarify','屬口徑說明。',
          'A 肝病例為男性（新聞稿統計）'),
        F('無抗體成人自費接種 A 肝疫苗 2 劑','MEDICAL_INTERPRETATION','dose_interval',
          '未說明2劑間隔6-12個月，讀者可能只打1劑。','low','no',
          null,'no','clarify','屬接種時程補充。',
          '無抗體成人自費接種 2 劑（間隔 6–12 個月）')
      ]
    },
    title_alts:[
      'A型肝炎病例創近9年新高：認識A、E型肝炎與疫苗保護',
      '20到40歲小心A肝！聚餐、出國前先看這篇',
      '2025年A肝485例：青壯年缺乏抗體，補打疫苗正是時候'
    ],
    card_title_alts:[
      ['A 肝病例近 9 年新高','青壯年快補 A 肝疫苗'],
      ['20–40 歲小心 A 肝','多數沒有抗體'],
      ['A 肝 vs E 肝','都是吃進去的肝炎']
    ],
    data_addon:[
      'A型肝炎潛伏期15至50天，平均28至30天。',
      '接種1劑A肝疫苗約有9成以上保護力，可持續3至5年。',
      '疾管署防疫專線1922（或0800-001922）。'
    ],
    cta:'如果你20到40歲、不確定有沒有打過A肝疫苗，下次看診或健檢時請醫師評估抗體，需要的話完成2劑接種。'
  });
})();
