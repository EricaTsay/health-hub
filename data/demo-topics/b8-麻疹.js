/* v6 示範主題：麻疹（B8 傳染病防治）
   查證日期：2026-11-20。數據來源：疾管署新聞稿（2025-01-10、2026-02-12，衛福部網站轉載）、
   疾管署開放資料 Age_County_Gender_055（依發病年份，2026-11-20 下載）。只用全年統計，不寫當週疫情。
   參考方向：健康智庫〈傳染疾病－麻疹〉2025/06。 */
(function(){
  const REFS = [
    {title:'今年首例麻疹境外移入 呼籲民眾前往流行地區前先就醫評估接種疫苗',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-85434-1.html'},
    {title:'麻疹醫院群聚事件新增病例侷限於該醫院接觸者，目前幼兒公費MMR疫苗充足',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-81191-1.html'},
    {title:'傳染病統計資料查詢系統：麻疹',source:'衛生福利部疾病管制署',url:'https://nidss.cdc.gov.tw/nndss/disease?id=055'}
  ];
  const TABLE = {headers:['對象','建議'], rows:[
    ['幼兒','出生滿12個月、滿5歲至入小學前各接種1劑公費MMR疫苗'],
    ['6個月以上未滿1歲嬰兒','須前往流行地區時，出發前2至4週諮詢自費接種1劑'],
    ['成人','前往流行地區且不確定免疫力，出國前至旅遊醫學門診評估'],
    ['孕婦、未接種幼兒','屬高危險群，應避免前往流行地區']
  ]};
  const TAGS = ['麻疹','MMR疫苗','出國旅遊','旅遊醫學','傳染病防治'];

  const DP_BIRTH = {id:'dp-measles-birth', type:'data_version', title:'成人評估對象有兩種出生年',
    desc:'疾管署2025年1月新聞稿以「1981年（含）以後出生」的成人為自費MMR評估對象（1981年前出生者多因感染已有抗體）；2026年2月新聞稿則寫「1966年（含）以後出生的成人」。兩份都是官方說法、範圍不同，AI 沒有替你決定要用哪一個。',
    current:'成人前往流行地區且不確定免疫力，出國前至旅遊醫學門診評估',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'1981 年（含）以後出生', value:'疾管署 2025-01-10', note:'依國內血清學調查，1981年前出生者多已有抗體'},
      {label:'1966 年（含）以後出生', value:'疾管署 2026-02-12', note:'較新的新聞稿，範圍較寬'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'麻疹傳染力極強：2025年53例、多與出國有關，出發前先評估MMR疫苗',
    update_date:'2026/11/20',
    intro:'依疾病管制署統計，2025年全年我國累計53例麻疹病例，其中34例為境外移入、19例為國內感染；境外移入感染國家以越南30例最多。麻疹是高傳染性疾病，幼兒2劑MMR疫苗接種完成率近年持續達97%以上，接種2劑疫苗預防效果可達95%以上。本文整理麻疹的症狀、各族群的疫苗建議與出國防護重點。',
    sections:[
      {heading:'各族群MMR疫苗建議',format:'table',table:TABLE},
      {heading:'疑似症狀與就醫',format:'bullets',items:[
        '出現發燒、紅疹、鼻炎、咳嗽、結膜炎等症狀，應戴口罩儘速就醫。',
        '從流行地區返國3週內出現上述症狀，就醫時主動告知旅遊史與接觸史。',
        '入境時有疑似症狀，主動告知機場檢疫人員。'
      ]},
      {heading:'為什麼病例又增加',format:'bullets',items:[
        '2024年全年32例、2025年53例，多數與境外移入或其引起的國內感染有關。',
        '疾管署指出，1981年以前出生者大多因感染而有麻疹抗體；較年輕的成人抗體可能隨時間下降。',
        '國人常前往的東南亞部分國家仍有麻疹流行，出國前2至4週是評估接種的時機。'
      ]}
    ],
    think_tank_view:'麻疹在台灣靠著高接種率維持低發生，但只要出國旅遊、商務往返頻繁，境外移入就可能引發群聚。按時帶孩子接種2劑MMR、出國前先查目的地疫情並評估自身免疫力，是保護自己也保護家中嬰幼兒的關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'病例數與接種率引自疾管署並標明年份，疫苗效果引自疾管署說法，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['2025年全年53例（本土19、境外34），疾管署2026年2月新聞稿','2劑接種完成率97%以上、預防效果95%以上，疾管署2025年1月新聞稿'],
      layout_reason:'先用表格讓不同族群找到自己的疫苗建議，再說明症狀與就醫，最後解釋病例增加原因。',
      tone:'專業易懂', tone_reason:'疫苗資訊需精確對應族群。',
      to_verify:['成人自費評估的出生年在兩份新聞稿不同（1981 vs 1966）']},
    decision_points:[DP_BIRTH]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'出國前想一想：麻疹打過疫苗了嗎？全家MMR檢查表',
    update_date:'2026/11/20',
    intro:'麻疹的傳染力非常強。疾管署統計，2025年台灣一整年有53人得到麻疹，其中34人是在國外被傳染，以越南最多。好在台灣幼兒打完2劑MMR疫苗的比例一直在97%以上，打滿2劑可以有95%以上的保護力。出國前，先幫全家檢查一下疫苗吧！',
    sections:[
      {heading:'全家MMR檢查表',format:'table',table:TABLE},
      {heading:'出現這些症狀要就醫',format:'bullets',items:[
        '發燒、起紅疹、流鼻水、咳嗽、眼睛紅。',
        '出國回來3週內有這些症狀，戴口罩去看醫生，記得說去過哪裡。',
        '下飛機時不舒服，主動告訴檢疫人員。'
      ]},
      {heading:'為什麼最近比較多？',format:'bullets',items:[
        '2024年有32例、2025年53例，大多和出國有關。',
        '大人小時候打的疫苗，保護力可能慢慢下降。',
        '家裡有未滿1歲的寶寶，盡量不要帶去麻疹流行的地方。'
      ]}
    ],
    think_tank_view:'把孩子的兒童健康手冊翻出來，確認2劑MMR都打了；大人如果要去流行地區又不確定自己有沒有抗體，就提早2到4週去旅遊醫學門診問問看。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，語氣親切但未淡化風險，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以出國前檢查的情境帶出疫苗、症狀與原因。', tone:'生活親切', tone_reason:'給家庭與旅遊族群閱讀。', to_verify:[]},
    decision_points:[DP_BIRTH]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'麻疹：2025年53例，出國前評估MMR',
    update_date:'2026/11/20',
    intro:'2025年麻疹全年53例，境外移入34例。2劑MMR預防效果可達95%以上，出國前先評估。',
    sections:[
      {heading:'MMR建議',format:'table',table:TABLE},
      {heading:'就醫提醒',format:'bullets',items:[
        '發燒、紅疹、鼻炎、咳嗽、結膜炎，戴口罩就醫。',
        '返國3週內有症狀，告知旅遊史。'
      ]}
    ],
    think_tank_view:'按時接種、出國前評估，是擋住麻疹最有效的兩步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為建議與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_BIRTH]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'麻疹', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'2025 年麻疹 53 例，6 成多為境外移入', primary_visual:'53 例', secondary_message:'2 劑 MMR 預防效果 95% 以上', action_priority:'按時接種、出國前評估'},
    headline_hook:'麻疹傳染力極強', headline_main:'出國前先評估 MMR 疫苗', title_accent:'MMR 疫苗',
    primary_stat:{kicker:'2025 年・全年', value:'53 例', label:'麻疹確定病例', note:'疾管署｜境外移入 34 例、國內感染 19 例'},
    chart:{type:'bar', title:'麻疹全年確定病例（例）', points:[
      {label:'2019', value:141, display:'141'},
      {label:'2023', value:2, display:'2'},
      {label:'2024', value:32, display:'32'},
      {label:'2025', value:53, display:'53', highlight:true}
    ], note:'疾管署傳染病統計｜依發病年份'},
    secondary_stats:[
      {value:'97% 以上', label:'幼兒 2 劑接種完成率'},
      {value:'95% 以上', label:'2 劑疫苗預防效果'}
    ],
    action_title:'這樣做擋住麻疹',
    action_cards:[
      {key:'打', text:'幼兒滿 12 個月、5 歲各接種 1 劑'},
      {key:'評', text:'出國前 2–4 週至旅遊醫學門診評估'},
      {key:'避', text:'未滿 1 歲、孕婦避免前往流行地區'},
      {key:'報', text:'返國 3 週內發燒出疹，戴口罩就醫'}
    ],
    carousel_suggestion:{reason:'若想把病例趨勢、疫苗建議與症狀分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'麻疹病例回升', headline_main:'2025 年全年 53 例'},
      {layout_type:'knowledge', headline_hook:'全家 MMR 檢查表', headline_main:'各族群疫苗建議'},
      {layout_type:'action', headline_hook:'出國回來發燒出疹', headline_main:'戴口罩就醫告知旅遊史'}]},
    hashtags:['麻疹','MMR疫苗','出國旅遊','傳染病防治'],
    sources:['衛生福利部疾病管制署'],
    illustration_category:'virus-infection',
    illustration:{topic:'麻疹預防', audience:'有幼兒的家庭與旅遊族群', scene:'一家人拿著護照與兒童健康手冊，在旅遊醫學門診和醫師確認疫苗紀錄',
      emotion:'安心、有準備', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A family holding passports and a child health booklet, checking vaccination records with a doctor at a travel clinic, prepared and reassured, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['2025年53例、2024年32例（疾管署）','2019年141例、2023年2例取自疾管署開放資料（依發病年份）'],
      layout_reason:'關鍵訊息是「病例回升、多與出國相關」，選 data：全年病例當主角，近年趨勢放右側，接種率與效果退到第二層，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'疫苗建議需精確、不恐嚇。',
      to_verify:['成人評估出生年兩份新聞稿不同']},
    decision_points:[Object.assign({}, DP_BIRTH, {current:'出國前 2–4 週至旅遊醫學門診評估'})],
    content_check_note:'病例數、接種率與效果引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'麻疹',
    collect:{
      summary:'麻疹病例在2023年僅2例後回升，2024年32例、2025年53例，且多與境外移入相關；幼兒2劑MMR接種完成率雖維持97%以上，但出國旅遊頻繁使群聚風險持續存在，「按時接種、出國前評估免疫力」是值得長期溝通的防疫議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'53例：疾管署公布2025年全年累計53例麻疹病例，其中19例為國內感染、34例為境外移入，感染國家以越南30例最多，年齡介於未滿10歲至60多歲。',tag:'官方統計',source:{name:'衛生福利部：今年首例麻疹境外移入 呼籲民眾前往流行地區前先就醫評估接種疫苗',url:'https://mohw.gov.tw/cp-16-85434-1.html'}},
        {item:'年度趨勢方向',desc:'32例：2024年全年麻疹32例（國內感染20例含4起群聚、境外移入12例），較2023年的2例明顯回升，2025年再增為53例。',tag:'官方統計',source:{name:'衛生福利部：麻疹醫院群聚事件新增病例侷限於該醫院接觸者',url:'https://mohw.gov.tw/cp-16-81191-1.html'}},
        {item:'政策動向',desc:'97%以上：幼兒於出生滿12個月、滿5歲至入小學前各接種1劑公費MMR疫苗，近年2劑接種完成率持續高達97%以上，接種2劑預防效果可達95%以上。',tag:'官方統計',source:{name:'衛生福利部：麻疹醫院群聚事件新增病例侷限於該醫院接觸者',url:'https://mohw.gov.tw/cp-16-81191-1.html'}},
        {item:'好發族群年齡層',desc:'未滿1歲嬰兒與孕婦為高危險群：疾管署建議避免前往流行地區，6個月以上未滿1歲嬰兒如須前往，可於出發前2至4週諮詢自費接種1劑MMR疫苗。',tag:'官方統計',source:{name:'衛生福利部：今年首例麻疹境外移入 呼籲民眾前往流行地區前先就醫評估接種疫苗',url:'https://mohw.gov.tw/cp-16-85434-1.html'}}
      ],
      product_view:['機會：出國旅遊族群可搭配旅遊平安與海外醫療保障的衛教說明，提醒出國前疫苗評估。','機會：有嬰幼兒的家庭可結合疫苗時程提醒服務，強化陪伴形象。','風險：避免用「疫情升溫」做時效性商品訴求，須依保單條款如實說明。'],
      marketing_view:['機會：春節與暑假出國旺季前是溝通「出國前評估MMR」的時點。','機會：「全家MMR檢查表」適合親子族群互動內容。','風險：避免點名特定國家造成歧視，以「流行地區」與官方旅遊疫情建議為準。'],
      alert_level:'medium',
      alert_reason:'近兩年病例回升且多與境外移入相關，適合在出國旺季前溝通；即時疫情交由正式模式查詢。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('較年輕的成人抗體可能隨時間下降','MEDICAL_INTERPRETATION','population_unclear',
          '「較年輕的成人」沒有界定出生年；疾管署兩份新聞稿分別用1981年與1966年作為評估對象，文章未說明讀者該對照哪一個。','medium','yes',
          '疾管署現行成人MMR自費評估對象的出生年。','yes','confirm','兩份官方說法範圍不同，須確認現行建議。',
          '1966年（含）以後出生的成人抗體可能隨時間下降（疾管署2026年說法）'),
        F('打滿2劑可以有95%以上的保護力','COMPLIANCE_RISK','efficacy_claim',
          '生活親切版把「預防效果可達95%以上」改寫成「可以有95%以上的保護力」，語氣接近保證，且未說明這是疾管署的說法。','low','no',
          null,'no','clarify','屬語氣調整，數字出處正確。',
          '疾管署指出，打滿2劑的預防效果可達95%以上'),
        F('大人小時候打的疫苗，保護力可能慢慢下降','MEDICAL_INTERPRETATION','population_unclear',
          '生活親切版沒說明哪些成人需要評估，1981年以前出生者多因感染已有抗體，與小時候是否接種無關。','low','no',
          null,'no','clarify','補上年代範圍即可。',
          '較晚出生的大人，小時候打的疫苗保護力可能慢慢下降'),
        F('境外移入34例','SOURCE_EVIDENCE','context_missing',
          '簡潔有力版只寫境外移入人數，沒有提到另有19例國內感染，讀者可能以為只要不出國就不會感染。','low','no',
          null,'no','clarify','補上國內感染人數即可。',
          '境外移入34例、國內感染19例')
      ],
      card:[
        F('幼兒 2 劑接種完成率','SOURCE_EVIDENCE','period_unstated',
          '「97% 以上」未標示是哪個出生世代、哪一年統計的接種完成率，讀者無法判斷口徑。','low','yes',
          '疾管署 MMR 第二劑接種完成率對應的出生世代與統計年份。','no','confirm','需對照疾管署接種率統計表後補上世代與年份。',
          null),
        F('2 劑疫苗預防效果','SOURCE_EVIDENCE','source_unstated',
          '「95% 以上」沒有標示出處，卡面讀者可能以為是國內實測數據。','low','no',
          null,'no','clarify','補上疾管署即可。',
          '2 劑疫苗預防效果（疾管署）')
      ]
    },
    title_alts:[
      '麻疹傳染力極強：2025年53例、多與出國有關，出發前先評估MMR疫苗',
      '出國前想一想：麻疹打過疫苗了嗎？全家MMR檢查表',
      '麻疹病例為何回升？從年度統計看境外移入與疫苗接種'
    ],
    card_title_alts:[
      ['麻疹傳染力極強','出國前先評估 MMR 疫苗'],
      ['2025 年全年 53 例','麻疹病例回升'],
      ['全家 MMR 檢查表','按時接種最安心']
    ],
    data_addon:[
      '麻疹全年確定病例：2019年141例、2023年2例、2024年32例、2025年53例（疾管署，依發病年份）。',
      '國內血清學調查顯示，1981年以前出生者大多因感染而有麻疹抗體（疾管署）。',
      '返國3週內出現發燒、紅疹、鼻炎、咳嗽、結膜炎，應戴口罩就醫並告知旅遊史。'
    ],
    cta:'翻出孩子的兒童健康手冊確認2劑MMR；要去流行地區的大人，出發前2到4週先到旅遊醫學門診評估。'
  });
})();
