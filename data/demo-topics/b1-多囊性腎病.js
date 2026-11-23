/* v6 示範主題：多囊性腎病（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-20。數據來源：財團法人醫藥品查驗中心 tolvaptan（Jinarc）醫療科技評估報告補充資料（健保署網站公開，載明我國許可適應症與建議給付條件）、
   TVBS 2019-12-13（聖馬爾定醫院腎臟科醫師說明遺傳機率、約50%患者60歲前進入洗腎、健保給付條件）、國健署2025年世界腎臟日新聞稿（護腎8招）、衛福部114年死因統計。
   衛福部、國健署未公布多囊性腎病盛行率；健保最終給付規定原文未能取得，文中標明為醫師說明。
   參考方向：健康智庫〈多囊性腎病〉2023/02。 */
(function(){
  const REFS = [
    {title:'醫療科技評估報告補充資料：佳腎康錠 Jinarc（tolvaptan）',source:'財團法人醫藥品查驗中心',url:'https://www.nhi.gov.tw/ch/dl-11689-f7f9070776ed49deb86c33274d679f25-1.pdf'},
    {title:'「多囊腎」病友新曙光！延緩洗腎時間，做更多想做的事',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/nutrition/322055'},
    {title:'3成三高患者腎功能亮紅燈 掌握8招「腎」健康',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-81762-1.html'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}
  ];
  const TABLE = {headers:['項目','重點'], rows:[
    ['疾病特性','基因變異造成的遺傳性腎臟病，多在中年後腎臟出現大量囊泡，腎功能逐漸下降'],
    ['遺傳機率','父母一方患病，子女遺傳機率約50%；約5%為新發突變'],
    ['怎麼診斷','腎臟超音波、電腦斷層、核磁共振或基因檢測'],
    ['藥物治療','tolvaptan 我國許可用於病情迅速惡化的成人患者，用以延緩囊泡生長與腎功能惡化'],
    ['日常照護','控制血壓、定期追蹤腎功能，遵循護腎原則']
  ]};
  const TAGS = ['多囊腎','遺傳性腎病','慢性腎臟病','洗腎','腎功能'];

  const DP_PAY = {id:'dp-pkd-pay', type:'data_scope', title:'健保給付條件的出處',
    desc:'健保對 tolvaptan 的給付條件，目前能查到的是醫師2019年受訪說明（慢性腎臟病第3期、18-50歲、一年內腎功能下降一定程度），以及醫藥品查驗中心評估報告中的「建議給付規定」草案；健保署最終公告原文未能取得。AI 沒有把草案寫成現行規定。',
    current:'健保有條件給付（醫師說明），細節依健保署現行規定',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'第3期、18-50歲', value:'醫師受訪說明（2019年）', note:'TVBS報導（目前採用）'},
      {label:'第1-3b期、50歲以下', value:'廠商建議給付規定', note:'醫藥品查驗中心評估報告，非最終規定'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'多囊腎是遺傳性腎病：家族史者及早檢查，控制血壓延緩惡化',
    update_date:'2026/11/20',
    intro:'自體顯性多囊腎是一種基因變異造成的遺傳性腎臟疾病，患者多在中年後腎臟出現大量囊泡，使腎功能逐漸下降。腎臟科醫師指出，父母一方患病時，子女遺傳機率約50%，約50%患者在60歲前會進入洗腎階段。衛生福利部114年死因統計中，腎炎、腎病症候群及腎病變死亡5,980人，居十大死因第8位（統計範圍涵蓋各類腎臟疾病）。',
    sections:[
      {heading:'認識多囊腎',format:'table',table:TABLE},
      {heading:'治療進展',format:'bullets',items:[
        '依醫藥品查驗中心評估報告，tolvaptan 我國許可適應症為 eGFR 大於25、已出現病情迅速惡化跡象的成人多囊腎患者，用以延緩囊泡生長與腎功能惡化。',
        '腎臟科醫師2019年說明，健保已有條件給付，須符合慢性腎臟病第3期、年齡18-50歲、一年內腎功能下降一定程度等條件；實際條件以健保署現行規定為準。',
        '藥物並非適合所有患者，需由腎臟專科醫師評估。'
      ]},
      {heading:'日常照護',format:'bullets',items:[
        '有多囊腎家族史者，可與醫師討論以超音波檢查。',
        '控制血壓，並依國健署護腎原則均衡飲食、避免長期自行服用止痛藥。',
        '定期追蹤腎功能，與醫師討論飲水量與飲食調整。'
      ]}
    ],
    think_tank_view:'多囊腎是「家族的事」：一位家人確診，其他成員也值得檢查。雖然無法改變基因，但及早發現、控制血壓並與腎臟科醫師討論治療時機，能盡量延緩走到洗腎的那一天。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'遺傳機率與洗腎比例標明為醫師說明，藥物適應症引自醫藥品查驗中心評估報告，腎病死亡人數標明統計範圍，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['tolvaptan 我國許可適應症（醫藥品查驗中心評估報告）','遺傳機率與洗腎比例（腎臟科醫師2019年說明）'],
      layout_reason:'先用表格整理疾病特性、遺傳與治療，再說明藥物進展，最後給日常照護。',
      tone:'專業易懂', tone_reason:'遺傳疾病需清楚、不製造恐慌。',
      to_verify:['國內多囊腎盛行率查無官方統計','健保 tolvaptan 現行給付規定原文','「50%患者60歲前洗腎」為醫師說明']},
    decision_points:[DP_PAY]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽有多囊腎，我也會有嗎？認識遺傳性腎病',
    update_date:'2026/11/20',
    intro:'多囊腎是會遺傳的腎臟病，腎臟裡會慢慢長出一顆顆囊泡。醫師說，爸媽其中一人有多囊腎，孩子遺傳到的機率大約一半，而且約一半的病友在60歲前需要洗腎。別太擔心，及早知道、好好照顧，能延緩腎功能變差。',
    sections:[
      {heading:'多囊腎重點',format:'table',table:TABLE},
      {heading:'現在有藥可以用嗎？',format:'bullets',items:[
        '有一種藥（tolvaptan）可以延緩囊泡變大和腎功能變差，但只適合病情惡化較快的成人。',
        '醫師說健保有條件給付，要符合年齡和腎功能等條件，請和腎臟科醫師討論。',
        '吃藥前醫師會先評估肝功能等狀況。'
      ]},
      {heading:'家人可以這樣做',format:'bullets',items:[
        '家裡有人有多囊腎，其他人可以問醫師要不要做超音波。',
        '血壓要顧好，止痛藥不要亂吃。',
        '定期回診追蹤腎功能，喝水和飲食照醫師建議。'
      ]}
    ],
    think_tank_view:'知道家族有多囊腎，不是壞消息，而是提早準備的機會。全家一起量血壓、定期檢查，就是彼此照顧的方式。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'遺傳與洗腎比例標明為醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以家人遺傳的疑問切入。', tone:'生活親切', tone_reason:'給病友家屬閱讀，降低焦慮。', to_verify:['給付條件以健保署現行規定為準']},
    decision_points:[DP_PAY]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'多囊腎：遺傳機率50%，控制血壓延緩惡化',
    update_date:'2026/11/20',
    intro:'多囊腎為遺傳性腎病，醫師指出子女遺傳機率約50%、約半數患者60歲前需洗腎。',
    sections:[
      {heading:'重點',format:'table',table:TABLE},
      {heading:'治療',format:'bullets',items:[
        'tolvaptan 可延緩病情迅速惡化者的腎功能下降。',
        '健保有條件給付，由醫師評估。'
      ]},
      {heading:'照護',format:'bullets',items:[
        '家族成員可討論超音波檢查。',
        '控制血壓、定期追蹤。'
      ]}
    ],
    think_tank_view:'多囊腎及早發現、控制血壓、與醫師討論治療時機，是延緩洗腎的關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料標明出處，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為重點、治療、照護三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['比例為醫師說明']},
    decision_points:[DP_PAY]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'多囊性腎病', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'多囊腎會遺傳，家族成員及早檢查', primary_visual:'約 50%', secondary_message:'約半數患者 60 歲前需洗腎', action_priority:'超音波檢查、控制血壓'},
    headline_hook:'爸媽有多囊腎？', headline_main:'認識遺傳性多囊腎', title_accent:'多囊腎',
    hero_message:'遺傳機率約一半', hero_support:'父母一方患病，子女遺傳機率約 50%（醫師說明）',
    knowledge_title:'多囊腎重點', knowledge_note:'家族成員可與醫師討論**超音波檢查**',
    knowledge_cards:[
      {label:'遺傳', icon:'people', lines:['子女遺傳','機率約 50%']},
      {label:'病程', icon:'check', lines:['中年後囊泡增加','腎功能下降']},
      {label:'診斷', icon:'search', lines:['超音波、CT','MRI、基因檢測']},
      {label:'治療', icon:'flask', lines:['tolvaptan','健保有條件給付']}
    ],
    primary_stat:{value:'約 50%', label:'患者 60 歲前進入洗腎', note:'腎臟科醫師說明（2019 年）'},
    secondary_stats:[
      {value:'5,980 人', label:'114 年腎病死亡（各類腎病）'},
      {value:'約 5%', label:'為新發突變'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'查', text:'家族有多囊腎，討論超音波檢查'},
      {key:'壓', text:'控制血壓'},
      {key:'追', text:'定期追蹤腎功能'},
      {key:'藥', text:'不長期自行服用止痛藥'}
    ],
    carousel_suggestion:{reason:'若想把遺傳、治療與照護分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'爸媽有多囊腎？', headline_main:'遺傳機率約一半'},
      {layout_type:'knowledge', headline_hook:'治療進展', headline_main:'延緩腎功能惡化'},
      {layout_type:'action', headline_hook:'日常照護', headline_main:'控制血壓、定期追蹤'}]},
    hashtags:['多囊腎','遺傳性腎病','慢性腎臟病','腎功能'],
    sources:['財團法人醫藥品查驗中心','TVBS新聞網','衛生福利部'],
    illustration_category:'general',
    illustration:{topic:'多囊腎家族檢查', audience:'病友與家人', scene:'一家三代在診間，醫師拿著腎臟超音波報告向家人說明',
      emotion:'安心、團結', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'Three generations of a family in a clinic while a doctor explains a kidney ultrasound report, reassuring and united mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['遺傳機率、洗腎比例（醫師說明）','藥物適應症（醫藥品查驗中心）'],
      layout_reason:'核心是遺傳與家族檢查，選 knowledge：4 張重點卡當主角，醫師說明的比例放主數字並標出處。',
      tone:'專業易懂', tone_reason:'避免恐慌。',
      to_verify:['主數字為醫師說明，非官方統計']},
    decision_points:[Object.assign({}, DP_PAY, {current:'健保有條件給付（醫師說明）'})],
    content_check_note:'比例標明為醫師說明，藥物資訊引自醫藥品查驗中心，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'多囊性腎病',
    collect:{
      summary:'多囊性腎病是遺傳性腎臟病，醫師指出子女遺傳機率約50%、約半數患者60歲前需洗腎；國內無官方盛行率統計，tolvaptan 已在我國核准並由健保有條件給付，「家族成員及早檢查、控制血壓」是主要溝通訊息。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約50%子女遺傳機率：腎臟科醫師指出，父母一方患自體顯性多囊腎，子女遺傳機率約50%，約5%為新發突變（國內查無官方盛行率統計）。',tag:'市場觀察',source:{name:'TVBS新聞網：多囊腎病友新曙光',url:'https://health.tvbs.com.tw/nutrition/322055'}},
        {item:'年度趨勢方向',desc:'約50%患者60歲前進入洗腎：腎臟科醫師2019年說明，多囊腎患者中年後囊泡增加、腎功能逐漸下降。',tag:'市場觀察',source:{name:'TVBS新聞網：多囊腎病友新曙光',url:'https://health.tvbs.com.tw/nutrition/322055'}},
        {item:'政策動向',desc:'eGFR大於25的病情迅速惡化成人可用tolvaptan：醫藥品查驗中心評估報告載明我國許可適應症，健保已有條件給付，現行條件以健保署規定為準。',tag:'官方統計',source:{name:'財團法人醫藥品查驗中心：tolvaptan醫療科技評估報告補充資料',url:'https://www.nhi.gov.tw/ch/dl-11689-f7f9070776ed49deb86c33274d679f25-1.pdf'}},
        {item:'好發族群年齡層',desc:'2025年腎病死亡5980人：依114年死因統計，腎炎、腎病症候群及腎病變居十大死因第8位，統計範圍涵蓋各類腎臟疾病，未單獨列出多囊腎。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}}
      ],
      product_view:['機會：多囊腎進展至洗腎屬長期重大醫療負擔，可作為重大疾病保障的溝通情境。','機會：家族檢查提醒適合結合健康管理服務。','風險：遺傳疾病涉及核保議題，溝通時避免讓家屬因擔心核保而不敢檢查，也不得做歧視性表述。'],
      marketing_view:['機會：「爸媽有多囊腎，我也會有嗎？」是家屬最關心的問題。','機會：可與慢性腎臟病、透析主題串連。','風險：官方統計有限，避免把醫師說明的比例當成官方數字。'],
      alert_level:'low',
      alert_reason:'屬罕見度較高的遺傳疾病，無政策事件，適合以家族衛教方式長期溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('約50%患者在60歲前會進入洗腎階段','SOURCE_EVIDENCE','secondary_citation',
          '比例出自單一醫師2019年受訪說明，未附研究或統計來源，讀者可能當成確定的官方數字。','medium','yes',
          '國內外多囊腎進展至末期腎病比例的研究資料。','no','confirm','說法與國際文獻方向相近，但未附出處。',
          null,['約一半的病友在60歲前需要洗腎','約半數患者60歲前需洗腎']),
        F('健保已有條件給付，須符合慢性腎臟病第3期、年齡18-50歲、一年內腎功能下降一定程度等條件','TERMINOLOGY_LANGUAGE','vague_criterion',
          '「下降一定程度」沒有具體標準，讀者無法判斷自己是否可能符合；給付條件也是醫師受訪說法，而非健保署公告原文。','medium','yes',
          '健保署 tolvaptan 藥品給付規定原文。','no','confirm','屬醫師說明。',
          null),
        F('腎炎、腎病症候群及腎病變死亡5,980人','MEDICAL_INTERPRETATION','scope_broader_than_topic',
          '死因統計涵蓋各類腎臟疾病，放在多囊腎文章開頭，讀者可能誤以為是多囊腎死亡人數。','low','no',
          null,'no','clarify','已標明統計範圍，屬位置調整。',
          '腎炎、腎病症候群及腎病變死亡5,980人（各類腎臟疾病合計，未單獨列出多囊腎）'),
        F('與醫師討論飲水量與飲食調整','MEDICAL_INTERPRETATION','advice_vague',
          '方向正確但過於籠統，讀者可能自行大量喝水或限水；應強調依醫師評估。','low','no',
          null,'no','clarify','屬建議表述。',
          '飲水量與飲食調整請依腎臟科醫師評估，不要自行大量增減',['喝水和飲食照醫師建議'])
      ],
      card:[
        F('患者 60 歲前進入洗腎','SOURCE_EVIDENCE','secondary_citation',
          '主數字為醫師說明，卡面以大字呈現，讀者可能當成官方統計。','medium','yes',
          '研究或統計來源。','no','confirm','已標註醫師說明。',
          null),
        F('114 年腎病死亡（各類腎病）','MEDICAL_INTERPRETATION','scope_broader_than_topic',
          '次數字為各類腎病死亡，與多囊腎主題關聯不直接。','low','no',
          null,'no','clarify','已標註範圍。',
          null)
      ]
    },
    title_alts:[
      '多囊腎是遺傳性腎病：家族史者及早檢查，控制血壓延緩惡化',
      '爸媽有多囊腎，我也會有嗎？認識遺傳性腎病',
      '多囊腎治療進展：延緩腎功能惡化的新選擇'
    ],
    card_title_alts:[
      ['爸媽有多囊腎？','認識遺傳性多囊腎'],
      ['遺傳機率約一半','家族成員及早檢查'],
      ['多囊腎','控制血壓、定期追蹤']
    ],
    data_addon:[
      '醫藥品查驗中心評估報告：tolvaptan 用藥前須確認肝功能正常、尿酸控制良好等條件。',
      '醫師說明：若父母雙方皆患多囊腎，子女遺傳機率約75%。',
      '國健署護腎8招：均衡飲食、飲水充足、規律運動、量血壓722、控制體重、戒菸、謹慎用藥、控制三高。'
    ],
    cta:'如果家族中有人確診多囊腎，這個月就和家人一起約腎臟科，討論是否需要超音波檢查。'
  });
})();
