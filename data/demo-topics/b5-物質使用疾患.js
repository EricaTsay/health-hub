/* v6 示範主題：物質使用疾患（B5 心理健康與精神疾患）
   查證日期：2026-11-20。數據來源：衛福部 115-11-13「成癮治療走入25家矯正機關」、115-06-25「626世界禁毒日 毒品危害防制中心助藥癮者重返社會」、
   113-04-16「酒精致癌又傷身，酒防中心來相助」（引述2018年全國物質使用調查、酒癮治療費用補助）。
   全國物質使用調查最新一期仍為2018年（查無更新一期公布）。
   參考方向：健康智庫〈物質使用疾患〉2023/08。 */
(function(){
  const M1 = 'https://www.mohw.gov.tw/cp-16-88465-1.html';
  const M2 = 'https://mohw.gov.tw/cp-16-86990-1.html';
  const M3 = 'https://mohw.gov.tw/cp-16-78364-1.html';
  const REFS = [
    {title:'成癮治療走入25家矯正機關 復歸社會連續性支持不中斷',source:'衛生福利部',url:M1},
    {title:'626世界禁毒日 毒品危害防制中心助藥癮者重返社會',source:'衛生福利部',url:M2},
    {title:'酒精致癌又傷身，酒防中心來相助',source:'衛生福利部',url:M3}
  ];
  const TABLE = {headers:['可能的警訊','說明'], rows:[
    ['用量越來越多','需要更多的量才有同樣效果，或比原本打算的用得更多、更久'],
    ['想停停不下來','多次想減量或戒除卻做不到，一停就不舒服'],
    ['影響生活','因使用而耽誤工作、學業、家庭責任或人際關係'],
    ['明知有害仍使用','已出現身體或心理問題，仍持續使用']
  ]};
  const TAGS = ['物質使用疾患','酒癮','藥癮','戒癮治療','成癮求助'];

  const DP_OLD = {id:'dp-sud-year', type:'data_version', title:'飲酒問題盛行率是2018年調查',
    desc:'「有害性酒精使用盛行率5.87%、推估近100萬人」出自2018年全國物質使用調查（衛福部113年新聞稿引述），目前查無更新一期公布。AI 沒有替你決定是否沿用。',
    current:'5.87%（2018年全國物質使用調查）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'5.87%', value:'有害性酒精使用盛行率', note:'2018年全國物質使用調查（目前採用）'},
      {label:'逾2萬人', value:'毒防中心每日服務藥癮個案', note:'衛福部114年資料（服務量，非盛行率）'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'物質使用疾患：酒癮、藥癮是可以治療的疾病',
    update_date:'2026/11/20',
    intro:'物質使用疾患是指持續使用酒精、藥物或毒品，即使已造成身體、心理與生活的傷害仍難以停止，是需要治療的疾病，而非單純意志力問題。衛福部引述2018年全國物質使用調查，有害性酒精使用盛行率為5.87%，推估近100萬國人有飲酒問題；衛福部表示，114年全國毒品危害防制中心每日服務藥癮個案逾2萬人。',
    sections:[
      {heading:'物質使用疾患的4個警訊',format:'table',table:TABLE},
      {heading:'治療資源',format:'bullets',items:[
        '各縣市衛生局指定酒癮治療機構，衛福部酒癮治療費用補助方案每人每年最高補助4萬元（113年資料），包含門診、藥物、心理與家庭治療。',
        '全國22縣市設有毒品危害防制中心，提供個案管理與轉介；24小時免費諮詢專線0800-770-885。',
        '酒癮諮詢專線0800-255959（週一至週六上午9時至下午5時）。',
        '衛福部115年資料：已有25家矯正機關提供藥癮、酒癮治療與出監轉銜服務。'
      ]},
      {heading:'家人可以怎麼做',format:'bullets',items:[
        '以關心取代責備，表達擔心的具體事件，而不是貼標籤。',
        '陪同就醫或撥打諮詢專線，了解治療選項。',
        '照顧好自己的身心，家屬也可以向酒防、毒防中心尋求支持。'
      ]}
    ],
    think_tank_view:'成癮不是道德問題，而是會影響大腦與行為的疾病。衛福部資料顯示，酒癮個案接受治療後近9成飲酒頻率或飲酒量下降；越早求助、越有機會重建健康與家庭關係。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部新聞稿並標明調查與資料年份，附免費諮詢專線，未使用療效保證用語，未涉及具體商品，避免汙名化用語。',
    ai_rationale:{basis:['有害性酒精使用盛行率5.87%（2018年全國物質使用調查，衛福部113年引述）','114年毒防中心每日服務藥癮個案逾2萬人（衛福部115年）'],
      layout_reason:'先用表格列出4個警訊，再整理治療與諮詢資源，最後給家人具體做法。',
      tone:'專業易懂', tone_reason:'去汙名、以治療資源為主。',
      to_verify:['全國物質使用調查是否有2018年後新一期','酒癮補助115年度上限是否仍為4萬元']},
    decision_points:[DP_OLD]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'喝酒停不下來、離不開藥？成癮是病，可以治療',
    update_date:'2026/11/20',
    intro:'越喝越多、想戒卻戒不掉，還影響到工作和家人？這可能是物質使用疾患，也就是常說的「成癮」。它是一種需要治療的病，不是不夠有毅力。衛福部引述調查，推估全台近100萬人有飲酒問題；全國毒品危害防制中心每天也服務超過2萬名藥癮個案。',
    sections:[
      {heading:'這4個警訊，要留意',format:'table',table:TABLE},
      {heading:'可以找誰幫忙？',format:'bullets',items:[
        '酒癮可以到衛生局指定的治療機構，政府有治療費用補助（113年資料：每人每年最高4萬元）。',
        '毒品問題可以找各縣市毒品危害防制中心，24小時免費專線0800-770-885。',
        '想戒酒、想找人聊聊，可以打0800-255959酒癮諮詢專線。'
      ]},
      {heading:'身為家人，可以這樣陪',format:'bullets',items:[
        '多關心、少責罵，說出你擔心的具體事情。',
        '陪他打專線或去看醫生。',
        '家人也要照顧自己，可以向酒防、毒防中心求助。'
      ]}
    ],
    think_tank_view:'成癮的人往往也很想停下來，只是做不到。用陪伴取代責備，一起找專業協助，戒癮之路會走得比較穩。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部並標明年份，語氣溫和、去汙名，附免費諮詢專線，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以家庭生活情境帶出警訊、資源與陪伴。', tone:'生活親切', tone_reason:'給成癮者家屬閱讀。', to_verify:['酒癮補助現行上限']},
    decision_points:[DP_OLD]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'物質使用疾患：4個警訊＋求助專線',
    update_date:'2026/11/20',
    intro:'衛福部引述2018年調查，有害性酒精使用盛行率5.87%。成癮是可以治療的疾病。',
    sections:[
      {heading:'4個警訊',format:'table',table:TABLE},
      {heading:'求助資源',format:'bullets',items:[
        '毒防中心專線0800-770-885（24小時）。',
        '酒癮諮詢專線0800-255959。',
        '酒癮治療費用補助。'
      ]},
      {heading:'家人原則',format:'bullets',items:[
        '關心取代責備，陪同求助。'
      ]}
    ],
    think_tank_view:'成癮是疾病，越早治療越有機會恢復健康與家庭關係。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部並標明年份，附諮詢專線，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為警訊、資源、家人三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_OLD]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'物質使用疾患', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'成癮是疾病，可以治療', primary_visual:'逾 2 萬人', secondary_message:'近 100 萬人有飲酒問題（2018 年調查推估）', action_priority:'辨識警訊、撥打專線、接受治療'},
    headline_hook:'想停停不下來？', headline_main:'成癮是病，可以治療', title_accent:'可以治療',
    primary_stat:{kicker:'114 年・毒防中心', value:'逾 2 萬人', label:'每日服務藥癮個案', note:'衛福部｜個案管理涵蓋率 99.72%'},
    secondary_stats:[
      {value:'5.87%', label:'有害性飲酒盛行率（2018）'},
      {value:'近 9 成', label:'酒癮治療後飲酒量下降'},
      {value:'25 家', label:'矯正機關提供成癮治療'}
    ],
    knowledge_title:'4 個警訊',
    knowledge_cards:[
      {label:'用量增加', lines:['用得更多、更久']},
      {label:'停不下來', lines:['想戒戒不掉']},
      {label:'影響生活', lines:['耽誤工作與家庭']},
      {label:'明知有害', lines:['出問題仍持續使用']}
    ],
    action_title:'這樣求助',
    action_cards:[
      {key:'毒', text:'毒防中心 24 小時專線 0800-770-885'},
      {key:'酒', text:'酒癮諮詢專線 0800-255959'},
      {key:'治', text:'指定酒癮治療機構，有費用補助'},
      {key:'陪', text:'家人以關心取代責備'}
    ],
    carousel_suggestion:{reason:'若想把警訊、資源與家人支持分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'想停停不下來？', headline_main:'成癮的 4 個警訊'},
      {layout_type:'data', headline_hook:'治療有效', headline_main:'酒癮治療後近 9 成飲酒量下降'},
      {layout_type:'action', headline_hook:'求助資源', headline_main:'2 支免費專線'}]},
    hashtags:['物質使用疾患','酒癮','藥癮','戒癮治療'],
    sources:['衛生福利部'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'戒癮求助', audience:'成癮者與家屬', scene:'一位中年男性坐在諮詢室，家人陪在旁邊，諮詢人員遞上一份治療資源手冊',
      emotion:'願意改變、被支持', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged man sitting in a counselling room with a family member beside him while a counsellor hands over a treatment resources booklet, hopeful and supported mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['114年毒防中心每日服務藥癮個案逾2萬人（衛福部）','酒癮治療後近9成飲酒量下降（衛福部深耕計畫成果）'],
      layout_reason:'選 data：服務量與治療成效數字當主角，傳達「可以治療」，下方左列警訊、右列求助管道。',
      tone:'專業易懂', tone_reason:'去汙名、強調治療資源。',
      to_verify:['2018年調查是否有新一期']},
    decision_points:[Object.assign({}, DP_OLD, {current:'次數字標示 5.87%（2018）'})],
    content_check_note:'數據引自衛福部並標明年份，附免費諮詢專線，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'物質使用疾患',
    collect:{
      summary:'推估近百萬國人有飲酒問題，毒防中心每日服務藥癮個案逾2萬人；衛福部持續擴大酒癮、藥癮治療補助與矯正機關成癮治療，「成癮是疾病、可以治療」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'有害性酒精使用盛行率5.87%：衛福部引述2018年全國物質使用調查，推估近100萬國人有飲酒問題（查無更新一期調查公布）。',tag:'官方統計',source:{name:'衛生福利部：酒精致癌又傷身，酒防中心來相助',url:M3}},
        {item:'年度趨勢方向',desc:'每日服務藥癮個案逾2萬人：衛福部表示114年全國22縣市毒品危害防制中心每日服務藥癮個案逾2萬人，個案管理服務涵蓋率達99.72%。',tag:'官方統計',source:{name:'衛生福利部：626世界禁毒日 毒品危害防制中心助藥癮者重返社會',url:M2}},
        {item:'政策動向',desc:'矯正機關涵蓋率由9.8%提升至49%：衛福部推動矯正機關整合性藥癮治療，115年已有21家醫療機構進入25家矯正機關，115年1至8月收治藥癮1,399人、酒癮807人。',tag:'官方統計',source:{name:'衛生福利部：成癮治療走入25家矯正機關',url:M1}},
        {item:'好發族群年齡層',desc:'近9成酒癮個案治療後飲酒下降：衛福部酒癮治療深耕計畫成果顯示，接受治療後近9成個案飲酒頻率或飲酒量下降，酒癮治療費用補助每人每年最高4萬元（113年資料）。',tag:'官方統計',source:{name:'衛生福利部：酒精致癌又傷身，酒防中心來相助',url:M3}}
      ],
      product_view:['機會：酒精與多種癌症、肝病相關，可結合健康管理服務推廣節酒。','機會：員工協助方案可納入成癮諮詢資源。','風險：避免汙名化描述；不暗示保險涵蓋成癮治療，相關除外條款依實際條款說明。'],
      marketing_view:['機會：6月26日世界禁毒日是固定溝通檔期；年節聚餐前是節酒溝通時機。','機會：「近9成治療後飲酒量下降」是正向、有希望感的數據。','風險：避免恐嚇式或獵奇式描述毒品使用。'],
      alert_level:'low',
      alert_reason:'屬長期公共衛生議題；衛福部持續擴大成癮治療，適合在世界禁毒日或年節前溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('有害性酒精使用盛行率為5.87%','CURRENCY_TIMELINESS','survey_year_old',
          '已註明是2018年調查，但文中與114年的服務數字並列，讀者可能以為兩者是同一時期的現況。','low','no',
          null,'no','clarify','屬時點對照問題，非數據錯誤。',
          '有害性酒精使用盛行率為5.87%（2018年調查，為目前最新一期公布資料）',
          ['有害性酒精使用盛行率5.87%']),
        F('每人每年最高補助4萬元（113年資料）','CURRENCY_TIMELINESS','policy_detail_may_change',
          '已標明是113年資料，但補助方案逐年公告，文中未提醒讀者查詢當年度方案。','low','yes',
          '衛福部當年度酒癮治療費用補助方案說明書。','yes','confirm','補助額度可能逐年調整。',
          '每人每年最高補助4萬元（113年資料，以當年度方案公告為準）',
          ['每人每年最高4萬元']),
        F('近9成飲酒頻率或飲酒量下降','SOURCE_EVIDENCE','program_outcome_not_trial',
          '這是計畫執行成果，並非對照研究；也未說明追蹤期間，讀者可能理解為9成能成功戒酒。','low','no',
          null,'no','clarify','屬證據性質說明。',
          '近9成個案在治療期間飲酒頻率或飲酒量下降（計畫執行成果）'),
        F('以關心取代責備','TERMINOLOGY_LANGUAGE','tone_ok_but_incomplete',
          '沒有提供具體可說的話，家屬實際開口時仍不知怎麼說。','low','no',
          null,'no','clarify','補一句範例即可。',
          '以關心取代責備，例如「我注意到你最近喝得比較多，我很擔心你的身體」',
          ['關心取代責備','多關心、少責罵'])
      ],
      card:[
        F('有害性飲酒盛行率（2018）','CURRENCY_TIMELINESS','survey_year_old',
          '卡面同時呈現114年與2018年資料，雖有標年份，轉傳時容易被忽略。','low','no',
          null,'no','clarify','已標年份。',
          '有害性飲酒盛行率（2018 年調查）'),
        F('酒癮治療後飲酒量下降','SOURCE_EVIDENCE','program_outcome_not_trial',
          '計畫成果非對照研究，卡面讀者可能理解為戒酒成功率。','low','no',
          null,'no','clarify','屬證據性質說明。',
          '酒癮治療期間飲酒量下降（計畫成果）')
      ]
    },
    title_alts:[
      '物質使用疾患：酒癮、藥癮是可以治療的疾病',
      '喝酒停不下來、離不開藥？成癮是病，可以治療',
      '近100萬人有飲酒問題：成癮警訊與免費求助專線'
    ],
    card_title_alts:[
      ['想停停不下來？','成癮是病，可以治療'],
      ['酒癮、藥癮','2 支免費求助專線'],
      ['以關心取代責備','陪家人走過戒癮路']
    ],
    data_addon:[
      '衛福部：全台指定酒癮治療機構共138家（113年資料）。',
      'IARC：停酒4週以上，可降低口腔癌、喉癌、食道癌、大腸直腸癌及女性乳癌等風險（衛福部引述）。',
      '115年1至8月矯正機關成癮治療：藥癮收治者重度占56%、酒癮重度占44%。'
    ],
    cta:'把0800-770-885與0800-255959存進手機；若家人飲酒或用藥已影響生活，這週就陪他打一通諮詢專線。'
  });
})();
