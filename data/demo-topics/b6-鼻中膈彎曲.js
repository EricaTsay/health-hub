/* v6 示範主題：鼻中膈彎曲（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-21。資料來源：TVBS健康2.0 2026-05（耳鼻喉科醫師受訪：是否需要手術的評估、保守治療）、
   長庚醫訊 2023-11（鼻中膈矯正合併鼻甲手術、過度切除鼻甲的風險）。查無國內官方鼻中膈彎曲盛行率或手術量統計，本題不寫統計數字。
   參考方向：健康智庫〈鼻中膈彎曲〉2023/12。 */
(function(){
  const TV = 'https://health.tvbs.com.tw/medical/363016';
  const CG = 'https://www.cgmh.org.tw/cgmn/cgmn_file/2311010.pdf';
  const REFS = [
    {title:'鼻塞、頭痛好不了？恐是「鼻中膈彎曲」惹禍 2招不用手術也能改善生活品質',source:'TVBS健康2.0',url:TV},
    {title:'長庚醫訊：鼻中膈彎曲與鼻甲手術',source:'長庚紀念醫院',url:CG}
  ];
  const TABLE = {headers:['常見表現','說明'], rows:[
    ['鼻塞','常偏一側，或左右輪流塞，躺下時更明顯'],
    ['張口呼吸、打鼾','睡覺時鼻子不通，影響睡眠品質'],
    ['頭痛、臉部悶脹','可能與鼻竇引流不良有關'],
    ['反覆鼻竇炎','鼻腔通氣與引流變差，容易反覆發炎']
  ]};
  const TAGS = ['鼻中膈彎曲','鼻塞','打鼾','鼻中膈矯正手術','耳鼻喉'];

  const DP_SURG = {id:'dp-ds-surg', type:'context', title:'是否需要手術',
    desc:'鼻中膈多少都有些彎曲，不是每個人都需要處理；醫師受訪指出，不嚴重時可先以噴劑或藥物治療，保守治療無效且明確影響健康時才評估手術。AI 沒有替你決定文章要強調保守治療或手術。',
    current:'先保守治療，必要時評估手術',
    options:[{label:'沿用目前寫法', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'鼻中膈彎曲：鼻塞、打鼾好不了，先評估再決定要不要手術',
    update_date:'2026/11/21',
    intro:'鼻中膈是分隔左右鼻腔的軟骨與骨頭，多數人或多或少都有些彎曲，但彎曲明顯時可能造成單側鼻塞、張口呼吸、打鼾、頭痛，甚至反覆鼻竇炎。耳鼻喉科醫師2026年受訪指出，彎曲不嚴重時可先以鼻噴劑或藥物改善症狀，只有保守治療無效、且結構問題明確影響健康時，才需要評估手術。國內目前查無鼻中膈彎曲的官方統計。',
    sections:[
      {heading:'鼻中膈彎曲的4種表現',format:'table',table:TABLE},
      {heading:'治療方式',format:'bullets',items:[
        '保守治療：依醫師建議使用鼻噴劑或藥物，同時控制過敏性鼻炎等合併問題。',
        '手術治療：鼻中膈矯正手術多從鼻孔內進行，移除或調整彎曲的軟骨與硬骨，常視情況合併鼻甲手術。',
        '長庚醫訊提醒，鼻甲若過度切除，可能造成術後鼻腔異常，手術範圍應由醫師審慎評估。'
      ]},
      {heading:'就醫前可以先觀察',format:'bullets',items:[
        '記錄鼻塞是單側或雙側、什麼時候最嚴重。',
        '留意是否合併打鼾、睡眠中呼吸暫停或白天嗜睡。',
        '反覆鼻竇炎或頭痛，請到耳鼻喉科以內視鏡檢查鼻腔結構。'
      ]}
    ],
    think_tank_view:'鼻中膈彎曲很常見，但「有彎」不等於「要開刀」。先讓耳鼻喉科醫師評估症狀與結構，試過保守治療仍明顯影響呼吸與睡眠，再討論手術，才是最適合自己的選擇。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自醫師受訪與醫院醫訊，註明查無官方統計，未使用療效保證用語，未推薦特定院所或療程。',
    ai_rationale:{basis:['醫師受訪：不嚴重先保守治療，必要時評估手術（TVBS 2026年）','長庚醫訊：合併鼻甲手術與過度切除風險'],
      layout_reason:'先用表格整理表現，再說明治療方式，最後給就醫前的觀察重點。',
      tone:'專業易懂', tone_reason:'避免讀者以為「有彎就要開刀」。',
      to_verify:['查無官方統計','長庚醫訊PDF標題以原文為準']},
    decision_points:[DP_SURG]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'一邊鼻子總是塞住？認識鼻中膈彎曲',
    update_date:'2026/11/21',
    intro:'總是一邊鼻子不通、睡覺要張嘴呼吸、打鼾很大聲？可能是鼻中膈彎曲。其實大部分人的鼻中膈都有點彎，不一定要處理；醫師說，不嚴重時先用噴劑或藥物改善，真的影響生活再考慮手術。',
    sections:[
      {heading:'這些狀況要留意',format:'table',table:TABLE},
      {heading:'要怎麼處理？',format:'bullets',items:[
        '先照醫師建議用鼻噴劑或藥物，有過敏也要一起控制。',
        '保守治療沒效、又明顯影響呼吸睡眠，可以和醫師討論手術。',
        '手術範圍要由醫師評估，不是切越多越好。'
      ]},
      {heading:'看醫生前，先觀察',format:'bullets',items:[
        '是哪一邊塞、什麼時候最塞。',
        '有沒有打鼾、睡覺呼吸會停、白天很想睡。',
        '常常鼻竇炎或頭痛，就去耳鼻喉科檢查。'
      ]}
    ],
    think_tank_view:'鼻子有點彎很正常，重點是有沒有影響生活。先讓醫生看看，再一起決定怎麼處理最適合你。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自醫師與醫院資料，語氣親切，未使用療效保證用語，未推薦特定院所。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以單側鼻塞的情境帶出表現、處理與觀察重點。', tone:'生活親切', tone_reason:'給一般民眾閱讀。', to_verify:[]},
    decision_points:[DP_SURG]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'鼻中膈彎曲：先保守治療，必要時評估手術',
    update_date:'2026/11/21',
    intro:'鼻中膈彎曲可能造成單側鼻塞、打鼾與反覆鼻竇炎。不嚴重時可先用鼻噴劑或藥物改善。',
    sections:[
      {heading:'4種表現',format:'table',table:TABLE},
      {heading:'治療',format:'bullets',items:[
        '鼻噴劑、藥物，控制過敏。',
        '保守治療無效再評估手術。'
      ]},
      {heading:'觀察',format:'bullets',items:[
        '鼻塞側別、打鼾與睡眠狀況。'
      ]}
    ],
    think_tank_view:'有彎不等於要開刀；先評估、先保守治療。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自醫師與醫院資料，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為表現、治療、觀察三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_SURG]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'鼻中膈彎曲', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'有彎不等於要開刀', primary_visual:'4 種表現', secondary_message:'保守治療無效再評估手術', action_priority:'觀察症狀、就醫評估'},
    headline_hook:'一邊鼻子總是塞？', headline_main:'鼻中膈彎曲 4 種表現', title_accent:'4 種表現',
    hero_message:'有彎不等於要開刀', hero_support:'多數人鼻中膈都有些彎，影響生活才需處理',
    knowledge_title:'4 種表現', knowledge_note:'保守治療無效，**再評估手術**',
    knowledge_cards:[
      {label:'單側鼻塞', icon:'check', lines:['躺下時更明顯']},
      {label:'打鼾', icon:'home', lines:['張口呼吸、睡不好']},
      {label:'頭痛', icon:'brain', lines:['臉部悶脹']},
      {label:'反覆鼻竇炎', icon:'shield', lines:['引流不良易發炎']}
    ],
    action_title:'這樣處理',
    action_cards:[
      {key:'察', text:'記錄哪一側塞、何時最塞'},
      {key:'醫', text:'耳鼻喉科內視鏡檢查'},
      {key:'藥', text:'先用鼻噴劑或藥物改善'},
      {key:'術', text:'無效且影響生活再談手術'}
    ],
    carousel_suggestion:{reason:'若想把症狀、保守治療與手術分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'一邊鼻子總是塞？', headline_main:'鼻中膈彎曲 4 種表現'},
      {layout_type:'action', headline_hook:'先不用開刀', headline_main:'保守治療怎麼做'},
      {layout_type:'knowledge', headline_hook:'需要手術嗎', headline_main:'評估重點與術後照護'}]},
    hashtags:['鼻中膈彎曲','鼻塞','打鼾','耳鼻喉'],
    sources:['耳鼻喉科醫師（媒體受訪）','長庚紀念醫院'],
    illustration_category:'general',
    illustration:{topic:'鼻中膈彎曲', audience:'一般成人', scene:'一位成年人在耳鼻喉科診間，醫師拿著鼻腔模型向他說明',
      emotion:'理解、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult in an ENT clinic while a doctor explains using a nasal cavity model, understanding and reassured mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['醫師受訪：先保守治療再評估手術'],
      layout_reason:'查無統計，選 knowledge：4 種表現放中段，最後給 4 個處理步驟，不放統計數字。',
      tone:'專業易懂', tone_reason:'避免過度醫療化。',
      to_verify:['查無官方統計']},
    decision_points:[DP_SURG],
    content_check_note:'內容引自醫師與醫院資料，未使用療效保證用語，未推薦特定院所。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'鼻中膈彎曲',
    collect:{
      summary:'鼻中膈彎曲很常見，明顯時造成鼻塞、打鼾與反覆鼻竇炎；醫師強調先保守治療，無效且影響健康才評估手術，「有彎不等於要開刀」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'查無官方盛行率統計：多數人的鼻中膈都有不同程度的彎曲，國內未公布鼻中膈彎曲盛行率或手術量統計。',tag:'市場觀察',source:{name:'TVBS健康2.0：鼻塞、頭痛好不了？恐是「鼻中膈彎曲」惹禍',url:TV}},
        {item:'年度趨勢方向',desc:'不嚴重可先以噴劑或藥物改善：耳鼻喉科醫師2026年受訪指出，醫師會評估症狀與結構，保守治療無效且明確影響健康時才需手術。',tag:'市場觀察',source:{name:'TVBS健康2.0：鼻塞、頭痛好不了？恐是「鼻中膈彎曲」惹禍',url:TV}},
        {item:'政策動向',desc:'矯正手術常合併鼻甲手術：長庚醫訊指出，鼻中膈矯正時常視情況處理鼻甲，但過度切除鼻甲可能造成術後鼻腔異常。',tag:'市場觀察',source:{name:'長庚醫訊：鼻中膈彎曲與鼻甲手術',url:CG}},
        {item:'好發族群年齡層',desc:'單側鼻塞、打鼾、反覆鼻竇炎者宜評估：彎曲可能阻礙鼻竇引流，矯正結構可改善通氣、減少反覆發炎。',tag:'市場觀察',source:{name:'TVBS健康2.0：鼻塞、頭痛好不了？恐是「鼻中膈彎曲」惹禍',url:TV}}
      ],
      product_view:['機會：鼻中膈手術為常見耳鼻喉手術，可說明手術醫療保障。','機會：打鼾與睡眠議題可連結健康管理服務。','風險：避免暗示「有彎就該開刀」；不推薦特定院所。'],
      marketing_view:['機會：「一邊鼻子總是塞」是常見困擾。','機會：可與過敏性鼻炎、打鼾內容系列化。','風險：無統計數據，避免自行推估。'],
      alert_level:'low',
      alert_reason:'屬常見結構性問題，無時效性政策事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('多數人或多或少都有些彎曲','DATA_FACTUAL_ACCURACY','unsourced_generalization',
          '「多數人」沒有數據或研究出處。','low','no',
          null,'no','clarify','屬臨床常識，但缺出處。',
          '臨床上許多人都有輕微的鼻中膈彎曲',
          ['其實大部分人的鼻中膈都有點彎']),
        F('鼻甲若過度切除，可能造成術後鼻腔異常','TERMINOLOGY_LANGUAGE','vague_term',
          '「鼻腔異常」未說明是什麼（如空鼻症的乾燥、悶塞感），讀者不易理解風險。','low','no',
          null,'no','clarify','補一句即可。',
          '鼻甲若過度切除，可能造成術後鼻腔乾燥、反常悶塞等「空鼻症」問題'),
        F('留意是否合併打鼾、睡眠中呼吸暫停或白天嗜睡','MEDICAL_INTERPRETATION','missing_referral',
          '這些可能是睡眠呼吸中止症的徵兆，文中未提醒可能需要睡眠檢查。','low','no',
          null,'no','clarify','補一句即可。',
          '留意是否合併打鼾、睡眠中呼吸暫停或白天嗜睡（可能需要睡眠檢查）',
          ['有沒有打鼾、睡覺呼吸會停、白天很想睡']),
        F('先照醫師建議用鼻噴劑或藥物','MEDICAL_INTERPRETATION','missing_caution',
          '未提醒市售去充血鼻噴劑不宜長期自行使用，可能造成藥物性鼻炎。','low','no',
          null,'no','clarify','補一句即可。',
          '先照醫師建議用鼻噴劑或藥物（市售去鼻塞噴劑不宜自行長期使用）',
          ['依醫師建議使用鼻噴劑或藥物'])
      ],
      card:[
        F('無效且影響生活再談手術','MEDICAL_INTERPRETATION','oversimplification',
          '未提及手術範圍需由醫師評估、可能合併鼻甲手術。','low','no',
          null,'no','clarify','屬完整度問題。',
          '無效且影響生活，與醫師討論手術範圍'),
        F('先用鼻噴劑或藥物改善','MEDICAL_INTERPRETATION','missing_caution',
          '未提醒去鼻塞噴劑不宜自行長期使用。','low','no',
          null,'no','clarify','補一句即可。',
          '依醫囑使用鼻噴劑或藥物')
      ]
    },
    title_alts:[
      '鼻中膈彎曲：鼻塞、打鼾好不了，先評估再決定要不要手術',
      '一邊鼻子總是塞住？認識鼻中膈彎曲',
      '有彎不等於要開刀：鼻中膈彎曲的處理重點'
    ],
    card_title_alts:[
      ['一邊鼻子總是塞？','鼻中膈彎曲 4 種表現'],
      ['有彎不等於要開刀','鼻中膈彎曲怎麼處理'],
      ['打鼾、鼻塞好不了？','先評估再決定']
    ],
    data_addon:[
      '醫師指出：鼻中膈彎曲可能阻礙鼻竇引流，矯正後可改善通氣、減少反覆發炎。',
      '長庚醫訊：術後仍可能因黏膜狀況導致鼻道狹窄，需定期回診。',
      '鼻中膈彎曲常與過敏性鼻炎同時存在，需一併處理。'
    ],
    cta:'這週記錄一下自己哪一側鼻子比較常塞、晚上有沒有打鼾；若已影響睡眠，就預約耳鼻喉科做一次內視鏡檢查。'
  });
})();
