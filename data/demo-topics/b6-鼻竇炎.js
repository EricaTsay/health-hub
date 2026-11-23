/* v6 示範主題：鼻竇炎（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-21。數據來源：TVBS健康2.0 2023-09-25（林口長庚醫院：慢性鼻竇炎推估約百萬人、青少年術後復發研究、治療建議）、
   TVBS健康2.0 2025-08-19（外電引述美國醫學會期刊：慢性鼻竇炎對生活品質的影響）。查無健保署公布的鼻竇炎就醫人數最新統計。
   參考方向：健康智庫〈沒有蛀牙卻牙痛？當心鼻竇炎在作祟！〉。 */
(function(){
  const CG = 'https://health.tvbs.com.tw/medical/342226';
  const US = 'https://health.tvbs.com.tw/nutrition/357040';
  const REFS = [
    {title:'百萬人慢性鼻竇炎！鼻塞、記憶差不想吃藥 3步驟消症狀！手術易復發、長庚訂治療指引',source:'TVBS健康2.0',url:CG},
    {title:'鼻竇炎有多痛苦？美研究比巴金森氏症更難受 發炎超過這時間不妙！',source:'TVBS健康2.0',url:US}
  ];
  const TABLE = {headers:['常見症狀','說明'], rows:[
    ['鼻塞與膿鼻涕','黃綠色濃稠鼻涕、鼻涕倒流到喉嚨'],
    ['臉部脹痛','額頭、雙頰或眼睛周圍壓迫感，低頭時更明顯'],
    ['嗅覺下降','聞不太到味道'],
    ['咳嗽與睡眠受影響','慢性咳嗽、睡不好、白天精神差']
  ]};
  const TAGS = ['鼻竇炎','慢性鼻竇炎','鼻塞','鼻息肉','耳鼻喉'];

  const DP_EST = {id:'dp-rs-est', type:'data_scope', title:'「全台約百萬人」是推估',
    desc:'「慢性鼻竇炎推估發生率約3%至6.4%、全台約1百萬人」出自林口長庚醫院2023年報導，未說明推估來源；報導也指出台灣缺乏相關流行病學資料。AI 沒有替你決定是否沿用。',
    current:'約百萬人（2023年長庚報導推估）',
    options:[{label:'沿用目前寫法', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'鼻竇炎：鼻塞、黃鼻涕、臉部脹痛超過3個月，可能是慢性鼻竇炎',
    update_date:'2026/11/21',
    intro:'鼻竇炎是鼻竇黏膜發炎，常見鼻塞、膿鼻涕、臉部脹痛與嗅覺下降；症狀持續超過3個月即屬慢性鼻竇炎。林口長庚醫院2023年報導推估，慢性鼻竇炎發生率約3%至6.4%，全台約百萬人受此病所苦，但台灣缺乏相關流行病學資料。美國醫學會期刊研究也指出，慢性鼻竇炎患者自評的健康相關生活品質，甚至低於部分慢性心肺疾病患者。',
    sections:[
      {heading:'鼻竇炎的4類常見症狀',format:'table',table:TABLE},
      {heading:'治療重點',format:'bullets',items:[
        '林口長庚醫師建議積極控制過敏性鼻炎、規律鼻腔沖洗及使用類固醇鼻噴劑；細菌感染時由醫師評估是否需要抗生素。',
        '藥物治療效果不佳者，可由耳鼻喉科評估鼻竇內視鏡手術。',
        '長庚團隊回溯15年、146位接受鼻竇內視鏡手術的青少年，因鼻息肉復發需再次手術的比例約15%，反覆發作者可依醫師評估個人化治療。'
      ]},
      {heading:'居家照護',format:'bullets',items:[
        '多喝水稀釋黏液，在鼻根敷溫熱毛巾或吸溫熱蒸氣。',
        '睡覺時稍微墊高頭部，減少鼻涕倒流。',
        '避免含咖啡因與酒精的飲料，感冒後鼻塞、膿鼻涕久未改善要就醫。'
      ]}
    ],
    think_tank_view:'很多人把長期鼻塞、黃鼻涕當成「感冒沒好」，拖久了才發現是慢性鼻竇炎。及早到耳鼻喉科檢查、規律洗鼻與用藥，多數人能改善症狀；若常合併過敏性鼻炎，也要一起控制。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率標明為推估與來源年份，研究數字標明醫院與樣本，未使用療效保證用語，未推薦特定藥品或洗鼻器。',
    ai_rationale:{basis:['慢性鼻竇炎推估約百萬人（林口長庚2023年）','青少年術後復發約15%（長庚回溯研究）'],
      layout_reason:'先用表格整理症狀，再說明治療重點，最後給居家照護。',
      tone:'專業易懂', tone_reason:'協助讀者區分感冒與慢性鼻竇炎。',
      to_verify:['百萬人推估來源未說明','查無健保署就醫人數統計']},
    decision_points:[DP_EST]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'感冒好了還一直鼻塞、黃鼻涕？當心鼻竇炎',
    update_date:'2026/11/21',
    intro:'感冒好了，卻還是鼻塞、黃鼻涕流不停，額頭和臉頰悶悶脹脹的，連味道都聞不太到？這可能是鼻竇炎。如果拖超過3個月，就可能變成慢性鼻竇炎。林口長庚醫院曾推估，全台大約有百萬人受慢性鼻竇炎困擾。',
    sections:[
      {heading:'這些症狀要留意',format:'table',table:TABLE},
      {heading:'要怎麼治療？',format:'bullets',items:[
        '醫師常建議規律洗鼻、使用類固醇鼻噴劑；如果有過敏性鼻炎，也要一起控制。',
        '藥物效果不好，可以請耳鼻喉科評估內視鏡手術。',
        '有鼻息肉的人，開刀後還是可能復發，要定期回診。'
      ]},
      {heading:'在家可以這樣做',format:'bullets',items:[
        '多喝水，鼻子熱敷或吸吸溫熱蒸氣。',
        '睡覺把枕頭墊高一點。',
        '少喝咖啡和酒；鼻塞黃鼻涕一直不好就去看醫生。'
      ]}
    ],
    think_tank_view:'長期鼻塞不是忍一忍就會好。早點看耳鼻喉科、照醫師說的洗鼻用藥，呼吸順了，睡眠和精神也會跟著變好。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'推估數字標明來源，語氣親切，未使用療效保證用語，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以感冒後鼻塞不好的情境帶出症狀、治療與居家照護。', tone:'生活親切', tone_reason:'給一般民眾閱讀。', to_verify:[]},
    decision_points:[DP_EST]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'鼻竇炎：症狀超過3個月要就醫',
    update_date:'2026/11/21',
    intro:'林口長庚2023年推估，全台約百萬人受慢性鼻竇炎所苦。鼻塞、膿鼻涕、臉部脹痛超過3個月屬慢性。',
    sections:[
      {heading:'4類症狀',format:'table',table:TABLE},
      {heading:'治療',format:'bullets',items:[
        '洗鼻、類固醇鼻噴劑、控制過敏。',
        '藥物無效評估內視鏡手術。'
      ]},
      {heading:'居家',format:'bullets',items:[
        '多喝水、熱敷、墊高枕頭。'
      ]}
    ],
    think_tank_view:'長期鼻塞膿鼻涕別拖，及早就醫規律治療。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'推估數字標明來源，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為症狀、治療、居家三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_EST]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'鼻竇炎', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'長期鼻塞膿鼻涕，可能是慢性鼻竇炎', primary_visual:'約百萬人', secondary_message:'症狀超過 3 個月屬慢性', action_priority:'就醫、洗鼻、規律用藥'},
    headline_hook:'感冒好了還一直鼻塞？', headline_main:'鼻竇炎照顧 4 件事', title_accent:'4 件事',
    hero_message:'超過 3 個月屬慢性', hero_support:'鼻塞、膿鼻涕、臉部脹痛、嗅覺下降',
    primary_stat:{value:'約百萬人', label:'全台慢性鼻竇炎推估人數', note:'林口長庚醫院 2023 年推估'},
    action_title:'這樣照顧',
    action_cards:[
      {key:'醫', text:'症狀持續就看耳鼻喉科'},
      {key:'洗', text:'依醫囑規律洗鼻、使用鼻噴劑'},
      {key:'敏', text:'同時控制過敏性鼻炎'},
      {key:'暖', text:'多喝水、熱敷鼻根、墊高枕頭'}
    ],
    notice:'藥物效果不佳，可由醫師評估**內視鏡手術**。',
    carousel_suggestion:{reason:'若想把症狀、治療與居家照護分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'不只是感冒', headline_main:'鼻竇炎 4 類症狀'},
      {layout_type:'knowledge', headline_hook:'治療選擇', headline_main:'洗鼻、鼻噴劑到手術'},
      {layout_type:'action', headline_hook:'居家照護', headline_main:'鼻子舒服 3 招'}]},
    hashtags:['鼻竇炎','慢性鼻竇炎','鼻塞','耳鼻喉'],
    sources:['林口長庚醫院（媒體報導）','美國醫學會期刊（外電引述）'],
    illustration_category:'general',
    illustration:{topic:'鼻竇炎照護', audience:'一般成人', scene:'一位成年人在浴室用溫熱毛巾敷鼻根，洗手台旁放著洗鼻用品',
      emotion:'舒緩、照顧自己', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult in a bathroom placing a warm towel over the bridge of the nose, nasal rinse supplies by the sink, soothing self-care mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['全台約百萬人慢性鼻竇炎（長庚2023推估）'],
      layout_reason:'選 action：4 個照顧行動當主角，推估人數放下方。',
      tone:'專業易懂', tone_reason:'實用、鼓勵就醫。',
      to_verify:['推估來源未說明']},
    decision_points:[DP_EST],
    content_check_note:'推估數字標明來源，未使用療效保證用語，未推薦特定商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'鼻竇炎',
    collect:{
      summary:'慢性鼻竇炎推估影響國內約百萬人，常被誤認為感冒未癒而延誤；醫師強調規律洗鼻、鼻噴劑與控制過敏，藥物無效再評估手術，「辨識慢性鼻竇炎、規律治療」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約百萬人受慢性鼻竇炎所苦：林口長庚醫院2023年報導推估發生率約3%至6.4%，並指出台灣缺乏相關流行病學資料（查無健保署就醫人數統計）。',tag:'推估',source:{name:'TVBS健康2.0：百萬人慢性鼻竇炎！長庚訂治療指引',url:CG}},
        {item:'年度趨勢方向',desc:'青少年術後因鼻息肉復發再手術約15%：長庚團隊回溯15年、146位接受鼻竇內視鏡手術的青少年病患研究，2023年發表於Rhinology期刊。',tag:'市場觀察',source:{name:'TVBS健康2.0：百萬人慢性鼻竇炎！長庚訂治療指引',url:CG}},
        {item:'政策動向',desc:'個人化治療指引：長庚研究團隊建議慢性鼻竇炎採個人化醫療，反覆發作者可適當予以生物製劑治療（國內無專屬政策）。',tag:'市場觀察',source:{name:'TVBS健康2.0：百萬人慢性鼻竇炎！長庚訂治療指引',url:CG}},
        {item:'好發族群年齡層',desc:'美國約12%人口受影響：外電引述美國醫學會期刊，慢性鼻竇炎患者自評生活品質低於部分慢性心肺疾病患者（國外數據）。',tag:'市場觀察',source:{name:'TVBS健康2.0：鼻竇炎有多痛苦？',url:US}}
      ],
      product_view:['機會：鼻竇炎就醫與手術普遍，可說明門診、手術醫療保障。','機會：過敏與鼻部保健是家庭常見健康需求。','風險：不推薦特定洗鼻器或鼻噴劑；手術與給付依實際醫療內容說明。'],
      marketing_view:['機會：換季與感冒季後是自然的溝通時點。','機會：「感冒好了還鼻塞」是常見困擾。','風險：盛行率為推估，需標明。'],
      alert_level:'low',
      alert_reason:'屬常見慢性疾病議題，無時效性政策事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('全台約百萬人受此病所苦','SOURCE_EVIDENCE','estimate_source_unstated',
          '已註明是長庚2023年報導推估，但未說明推估依據；同篇報導也承認台灣缺乏流行病學資料。','medium','yes',
          '國內慢性鼻竇炎盛行率研究或健保就醫統計。','no','confirm','屬推估值。',
          '全台推估約百萬人受此病所苦（推估依據未公開）',
          ['全台大約有百萬人受慢性鼻竇炎困擾','全台約百萬人受慢性鼻竇炎所苦']),
        F('因鼻息肉復發需再次手術的比例約15%','DATA_FACTUAL_ACCURACY','sample_specific',
          '研究對象是青少年手術病患（146人），不能代表所有年齡層的復發率。','low','no',
          null,'no','clarify','屬適用範圍說明。',
          '因鼻息肉復發需再次手術的比例約15%（青少年手術病患研究）'),
        F('細菌感染時由醫師評估是否需要抗生素','MEDICAL_INTERPRETATION','antibiotic_overuse_risk',
          '未提醒多數急性鼻竇炎為病毒感染，不需抗生素；讀者可能主動要求開抗生素。','low','no',
          null,'no','clarify','補一句即可。',
          '多數急性鼻竇炎與病毒感染有關，是否需要抗生素由醫師評估'),
        F('症狀持續超過3個月即屬慢性鼻竇炎','DATA_FACTUAL_ACCURACY','definition_precision',
          '臨床定義常以12週為界，文中寫「3個月」大致相同，但未說明急性期的處理建議。','low','no',
          null,'no','clarify','屬精確度問題。',
          '症狀持續超過12週（約3個月）即屬慢性鼻竇炎',
          ['如果拖超過3個月，就可能變成慢性鼻竇炎'])
      ],
      card:[
        F('林口長庚醫院 2023 年推估','SOURCE_EVIDENCE','estimate_source_unstated',
          '主數字為推估且依據未公開。','low','yes',
          '推估依據。','no','confirm','屬推估。',
          '林口長庚醫院 2023 年推估（依據未公開）'),
        F('依醫囑規律洗鼻、使用鼻噴劑','MEDICAL_INTERPRETATION','missing_practical_info',
          '未提醒洗鼻應使用生理食鹽水，避免自來水。','low','no',
          null,'no','clarify','補一句即可。',
          '依醫囑以生理食鹽水洗鼻、使用鼻噴劑')
      ]
    },
    title_alts:[
      '鼻竇炎：鼻塞、黃鼻涕、臉部脹痛超過3個月，可能是慢性鼻竇炎',
      '感冒好了還一直鼻塞、黃鼻涕？當心鼻竇炎',
      '全台推估約百萬人：慢性鼻竇炎症狀與治療重點'
    ],
    card_title_alts:[
      ['感冒好了還一直鼻塞？','鼻竇炎照顧 4 件事'],
      ['超過 3 個月','當心慢性鼻竇炎'],
      ['洗鼻、鼻噴劑、控過敏','鼻竇炎治療重點']
    ],
    data_addon:[
      '長庚報導引述歐洲統計：難治型慢性鼻竇炎病患有6到8成屬第2型發炎反應。',
      '慢性鼻竇炎分為有、無鼻息肉兩類（外電引述）。',
      '醫師提醒：鼻竇炎可能影響睡眠品質與白天專注力。'
    ],
    cta:'如果感冒好了一個月還在鼻塞、流黃鼻涕，這週就預約耳鼻喉科；平常多喝水，睡前把枕頭墊高一點。'
  });
})();
