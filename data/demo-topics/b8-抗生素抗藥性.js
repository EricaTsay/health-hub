/* v6 示範主題：抗生素抗藥性（B8 傳染病防治）
   查證日期：2026-11-20。數據來源：疾管署新聞稿（2025-12-13、2026-09-08、2026-11-17，衛福部網站轉載）。
   查無疾管署公開新聞稿中的國內抗藥性比率與抗生素使用量，未寫。
   參考方向：健康智庫〈全球十大健康威脅之一：抗生素抗藥性〉2023/11、〈用藥安全－抗生素〉2024/04。 */
(function(){
  const REFS = [
    {title:'響應世界抗生素週 疾管署舉辦多元活動 歡迎民眾共襄盛舉',source:'衛生福利部疾病管制署',url:'https://www.mohw.gov.tw/cp-16-88514-1.html'},
    {title:'抗生素管理與感染管制卓越中心與品質提升成果亮眼，疾管署頒獎成效績優之醫院與診所',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-84826-1.html'},
    {title:'我國啟動「國家級防疫一體抗生素抗藥性管理行動計畫外部評核」',source:'衛生福利部疾病管制署',url:'https://www.mohw.gov.tw/cp-16-87830-1.html'}
  ];
  const TABLE = {headers:['四不一要','為什麼'], rows:[
    ['不主動要求抗生素','感冒多為病毒感染，抗生素無效'],
    ['不隨便自己買抗生素吃','未經診斷可能用錯藥、延誤治療'],
    ['不吃他人的抗生素','每個人的感染原因與劑量不同'],
    ['不隨便停藥','症狀好轉就停，可能讓細菌存活並產生抗藥性'],
    ['要遵守醫囑使用抗生素','依醫師指示的劑量與天數用完']
  ]};
  const TAGS = ['抗生素','抗藥性','四不一要','用藥安全','防疫一體'];

  const DP_DATA = {id:'dp-amr-data', type:'data_source', title:'國內抗藥性比率未在新聞稿公布',
    desc:'疾管署新聞稿強調抗藥性是WHO列出的全球健康十大威脅之一，並說明國家行動計畫與醫院計畫成果，但未在新聞稿中公布國內抗藥性比率或抗生素使用量。AI 沒有用其他國家或媒體數字補上。',
    current:'抗生素抗藥性為WHO全球健康十大威脅之一（疾管署引述）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'十大威脅之一', value:'WHO 定位', note:'疾管署2026-11-17新聞稿引述（目前採用）'},
      {label:'未公布', value:'國內抗藥性比率', note:'需查疾管署抗藥性監測年報'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'抗生素抗藥性是全球十大健康威脅：記住「四不一要」，別讓好藥失效',
    update_date:'2026/11/20',
    intro:'抗生素抗藥性已被世界衛生組織列為全球健康十大威脅之一。疾病管制署推動「國家級防疫一體抗生素抗藥性管理行動計畫（114年至118年）」，由衛福部、農業部、環境部跨部門合作，並自2020年起推動醫院抗生素管理與感染管制卓越計畫，至2025年底已有14家主責醫院通過卓越中心認證、69家聯盟醫院通過品質提升評核。民眾端最重要的，是做到疾管署的「四不一要」。',
    sections:[
      {heading:'用藥「四不一要」',format:'table',table:TABLE},
      {heading:'國家怎麼做',format:'bullets',items:[
        '行動計畫涵蓋人類健康、動物健康、食品安全、農業及環境，採「防疫一體」跨部門治理。',
        '2026年9月邀請5位國際專家，針對認知與教育、抗生素使用與抗藥性監測、感染預防與控制等5大面向進行外部評核。',
        '醫院端由卓越中心帶領聯盟醫院與診所，至2025年底已輔導67家診所。'
      ]},
      {heading:'民眾可以這樣做',format:'bullets',items:[
        '平時保持良好衛生、勤洗手、依建議接種疫苗，不生病就不需要使用抗生素。',
        '每年11月下旬世界抗生素週，可透過LINE@疾管家「抗生素專區」學習正確觀念。',
        '看診時說明完整症狀，由醫師判斷是否需要抗生素。'
      ]}
    ],
    think_tank_view:'抗藥性不是醫院才需要擔心的事，而是每個人用藥習慣累積出來的結果。感冒不要求抗生素、拿到抗生素就照醫囑吃完，這兩件小事做到了，就是替自己和下一代保留「有藥可用」的未來。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'計畫成果與四不一要引自疾管署新聞稿並標明年份，WHO定位標明為疾管署引述，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['四不一要、WHO十大威脅（疾管署2026-11-17新聞稿）','14家、69家、67家診所（疾管署2025-12-13新聞稿）'],
      layout_reason:'先用表格說明四不一要，再介紹國家政策，最後給民眾行動。',
      tone:'專業易懂', tone_reason:'用藥觀念需清楚易記。',
      to_verify:['國內抗藥性比率與抗生素使用量未在新聞稿中公布']},
    decision_points:[DP_DATA]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'感冒要吃抗生素嗎？記住「四不一要」，好藥才不會失效',
    update_date:'2026/11/20',
    intro:'很多人感冒就想拿抗生素，覺得「比較快好」。但感冒大多是病毒引起的，抗生素沒有效，亂吃反而會讓細菌產生抗藥性。世界衛生組織已經把抗藥性列為全球十大健康威脅之一，疾管署整理了簡單好記的「四不一要」。',
    sections:[
      {heading:'四不一要，一次記住',format:'table',table:TABLE},
      {heading:'政府在做什麼？',format:'bullets',items:[
        '衛福部、農業部、環境部一起推動抗藥性行動計畫。',
        '全國有醫院和診所組成聯盟，一起把關抗生素的使用。'
      ]},
      {heading:'我可以怎麼做？',format:'bullets',items:[
        '勤洗手、打疫苗，少生病就少用藥。',
        '醫生開的抗生素，照指示吃完，不要自己停。',
        '加入LINE@疾管家，玩「抗生素專區」的小測驗。'
      ]}
    ],
    think_tank_view:'家裡藥櫃裡剩下的抗生素，不要留著下次自己吃，也不要分給家人。好的用藥習慣，是全家人一起守護的健康資產。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自疾管署並標明出處，語氣親切，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「感冒要不要吃抗生素」帶出原則與行動。', tone:'生活親切', tone_reason:'給一般家庭閱讀。', to_verify:[]},
    decision_points:[DP_DATA]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'抗生素：四不一要',
    update_date:'2026/11/20',
    intro:'抗生素抗藥性是WHO全球十大健康威脅之一。正確用藥從「四不一要」開始。',
    sections:[
      {heading:'四不一要',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '勤洗手、打疫苗，減少用藥需求。',
        '每年11月下旬世界抗生素週。'
      ]}
    ],
    think_tank_view:'照醫囑用完、不亂用，是對抗抗藥性最基本的一步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自疾管署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為原則與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_DATA]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'抗生素抗藥性', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'抗藥性是全球十大健康威脅之一', primary_visual:'四不一要', secondary_message:'照醫囑用完、不亂用', action_priority:'四不一要'},
    headline_hook:'感冒要吃抗生素嗎？', headline_main:'記住四不一要', title_accent:'四不一要',
    hero_message:'全球十大健康威脅之一', hero_support:'世界衛生組織（疾管署引述）',
    primary_stat:{value:'14 家', label:'醫院通過抗生素管理卓越中心認證', note:'疾管署｜截至 2025 年底，另 69 家聯盟醫院'},
    action_title:'四不一要',
    action_cards:[
      {key:'不', text:'不主動要求、不自己買抗生素'},
      {key:'不', text:'不吃他人的抗生素'},
      {key:'不', text:'不隨便停藥'},
      {key:'要', text:'要遵守醫囑使用抗生素'}
    ],
    notice:'不生病就不需要抗生素：**勤洗手、按時接種疫苗**。',
    carousel_suggestion:{reason:'若想把原則、國家政策與民眾行動分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'抗藥性是什麼？', headline_main:'全球十大健康威脅'},
      {layout_type:'action', headline_hook:'正確用藥', headline_main:'記住四不一要'},
      {layout_type:'data', headline_hook:'醫院一起把關', headline_main:'14 家卓越中心認證'}]},
    hashtags:['抗生素','抗藥性','四不一要','用藥安全'],
    sources:['衛生福利部疾病管制署'],
    illustration_category:'general',
    illustration:{topic:'正確使用抗生素', audience:'一般家庭', scene:'醫師在診間向家長說明藥袋上的服藥天數，孩子在旁點頭',
      emotion:'信任、清楚', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A doctor explaining the number of days on a medicine bag to a parent in a clinic while a child nods beside them, trusting and clear, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['四不一要與WHO定位（疾管署2026-11-17）','卓越中心14家（疾管署2025-12-13）'],
      layout_reason:'關鍵是用藥行為，選 action：四不一要合併為 4 張行動卡當主角，政策成果退到下方。',
      tone:'專業易懂', tone_reason:'原則要好記。',
      to_verify:['國內抗藥性比率未公布於新聞稿']},
    decision_points:[Object.assign({}, DP_DATA, {current:'全球十大健康威脅之一（WHO）'})],
    content_check_note:'原則與成果引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'抗生素抗藥性',
    collect:{
      summary:'抗生素抗藥性被WHO列為全球健康十大威脅之一，我國推動114至118年國家級防疫一體行動計畫並於2026年接受國際外部評核；民眾端「四不一要」是最直接的行動，每年11月世界抗生素週是固定溝通時點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'全球十大健康威脅之一：疾管署指出抗生素抗藥性已被世界衛生組織列為全球健康十大威脅之一，每年11月下旬為世界抗生素週。',tag:'官方統計',source:{name:'衛生福利部：響應世界抗生素週 疾管署舉辦多元活動',url:'https://www.mohw.gov.tw/cp-16-88514-1.html'}},
        {item:'年度趨勢方向',desc:'14家主責醫院通過卓越中心認證：疾管署自2020年起推動抗生素管理與感染管制卓越計畫，截至2025年底另有69家聯盟醫院通過品質提升評核，並輔導67家診所。',tag:'官方統計',source:{name:'衛生福利部：抗生素管理與感染管制卓越中心與品質提升成果亮眼',url:'https://mohw.gov.tw/cp-16-84826-1.html'}},
        {item:'政策動向',desc:'5位國際專家外部評核：我國「國家級防疫一體抗生素抗藥性管理行動計畫（114年至118年）」由衛福部、農業部、環境部共同推動，2026年9月接受國際專家4天實地評核。',tag:'官方統計',source:{name:'衛生福利部：我國啟動「國家級防疫一體抗生素抗藥性管理行動計畫外部評核」',url:'https://www.mohw.gov.tw/cp-16-87830-1.html'}},
        {item:'好發族群年齡層',desc:'四不一要：疾管署呼籲全民不主動要求抗生素、不隨便自己買抗生素吃、不吃他人的抗生素、不隨便停藥、要遵守醫囑使用抗生素，並於LINE@疾管家上線「抗生素專區」。',tag:'官方統計',source:{name:'衛生福利部：響應世界抗生素週 疾管署舉辦多元活動',url:'https://www.mohw.gov.tw/cp-16-88514-1.html'}}
      ],
      product_view:['機會：用藥安全是全齡適用的健康衛教，可結合健康管理服務。','機會：「藥櫃整理」等家庭互動內容能提升品牌好感。','風險：避免提供任何個人用藥建議，以醫師指示為準。'],
      marketing_view:['機會：每年11月世界抗生素週是固定溝通時點。','機會：「感冒要吃抗生素嗎？」是常見迷思，適合破除迷思型內容。','風險：避免讓民眾對必要的抗生素治療產生排斥。'],
      alert_level:'low',
      alert_reason:'屬長期用藥安全議題，適合在每年11月世界抗生素週前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('感冒多為病毒感染，抗生素無效','SOURCE_EVIDENCE','claim_without_source',
          '表格中說明四不一要理由的文字是延伸解釋，引用的疾管署新聞稿只列出原則本身，沒有這些理由說明。','low','no',
          null,'no','clarify','可標示為一般衛教說明或補上疾管署衛教頁出處。',
          '感冒多為病毒感染，抗生素對病毒無效（一般衛教說明）'),
        F('民眾端最重要的，是做到疾管署的「四不一要」','MEDICAL_INTERPRETATION','overstatement',
          '「最重要」是撰稿人的判斷，疾管署新聞稿同時強調勤洗手、接種疫苗等預防措施。','low','no',
          null,'no','clarify','改為較中性的說法。',
          '民眾端可以從疾管署的「四不一要」做起'),
        F('亂吃反而會讓細菌產生抗藥性','MEDICAL_INTERPRETATION','oversimplified',
          '生活親切版把「不當使用增加抗藥性風險」簡化為因果必然，語氣較絕對。','low','no',
          null,'no','clarify','改為風險說法。',
          '亂吃反而會增加細菌產生抗藥性的風險'),
        F('抗生素抗藥性是WHO全球十大健康威脅之一','SOURCE_EVIDENCE','source_unstated',
          '簡潔有力版沒有說明這是疾管署引述WHO的說法，也沒有年份。','low','no',
          null,'no','clarify','補上出處即可。',
          '疾管署引述WHO，抗生素抗藥性是全球十大健康威脅之一')
      ],
      card:[
        F('醫院通過抗生素管理卓越中心認證','MEDICAL_INTERPRETATION','metric_relevance',
          '主數字是醫院認證家數，屬政策執行指標，不能反映國內抗藥性程度，讀者可能誤以為抗藥性已改善。','low','no',
          null,'no','clarify','屬指標解讀提醒。',
          '醫院通過抗生素管理卓越中心認證（政策執行指標）'),
        F('不主動要求、不自己買抗生素','TERMINOLOGY_LANGUAGE','merged_items',
          '行動卡把兩項原則合併，卡面看起來只有「三不一要」，與疾管署的「四不一要」對不上。','low','no',
          null,'no','clarify','可在標題或註解說明合併。',
          '不主動要求、不自己買（四不之二）')
      ]
    },
    title_alts:[
      '抗生素抗藥性是全球十大健康威脅：記住「四不一要」，別讓好藥失效',
      '感冒要吃抗生素嗎？記住「四不一要」，好藥才不會失效',
      '對抗抗藥性：國家行動計畫與民眾的四不一要'
    ],
    card_title_alts:[
      ['感冒要吃抗生素嗎？','記住四不一要'],
      ['全球十大健康威脅','抗生素抗藥性'],
      ['好藥不失效','照醫囑用完']
    ],
    data_addon:[
      '疾管署「四不一要」：不主動要求抗生素、不隨便自己買抗生素吃、不吃他人的抗生素、不隨便停藥、要遵守醫囑使用抗生素。',
      '截至2025年底，14家主責醫院通過卓越中心認證、69家聯盟醫院通過品質提升評核、輔導67家診所。',
      '國家級防疫一體抗生素抗藥性管理行動計畫（114年至118年）由衛福部、農業部、環境部共同推動。'
    ],
    cta:'今天就整理一次家中藥櫃，剩下的抗生素不要留著下次自己吃，也不要分給家人。'
  });
})();
