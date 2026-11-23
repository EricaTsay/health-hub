/* v6 示範主題：主動脈疾病與置換手術（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-20。數據來源：台灣英文新聞／NOWnews 2020-10（林口長庚心臟外科團隊以健保資料庫分析23,868名主動脈剝離患者，2020年9月發表於JACC）、
   衛福部114年死因統計（高血壓性疾病）、國健署三高分析與腦中風新聞稿（722量血壓原則）。
   衛福部、國健署未公布主動脈剝離或主動脈瘤的專屬統計；發生人數與手術說明皆標明為長庚團隊說明。
   參考方向：健康智庫〈心血管疾病外科治療－主動脈外科置換手術〉2025/01。 */
(function(){
  const REFS = [
    {title:'台灣每年約2千人主動脈剝離 林口長庚：半數與遺傳有關',source:'台灣英文新聞',url:'https://www.taiwannews.com.tw/ch/news/4030948'},
    {title:'主動脈剝離跟家族史有關？長庚研究：最高增6.82倍風險',source:'NOWnews今日新聞',url:'https://www.nownews.com/news/5086820'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'遠離腦中風 自我監控揪出危險因子',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-16-74897-1.html'}
  ];
  const TABLE = {headers:['類型','說明與治療'], rows:[
    ['A型主動脈剝離','撕裂範圍涉及升主動脈，需緊急開胸手術進行人工血管置換'],
    ['B型主動脈剝離','多以藥物控制血壓，發生併發症時可考慮主動脈支架治療'],
    ['主動脈瘤','主動脈異常擴大，剝離後長期也可能形成，需追蹤並視情況手術'],
    ['術後追蹤','長期控制血壓，並依醫囑定期接受電腦斷層追蹤']
  ]};
  const TAGS = ['主動脈剝離','主動脈瘤','人工血管置換','高血壓','胸痛'];

  const DP_EST = {id:'dp-aorta-est', type:'data_scope', title:'「每年近2000人」的出處',
    desc:'衛福部、國健署未公布主動脈剝離專屬統計。「每年近2000人、發生率約每十萬人5到10人」是林口長庚團隊2020年發表健保資料庫研究時的說明，研究分析23,868名患者。AI 標示為研究團隊說法，並提醒資料年份較早。',
    current:'每年近2000人（林口長庚團隊2020年說明）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'近2000人', value:'每年發病人數', note:'林口長庚2020年說明（目前採用）'},
      {label:'每十萬人5–10人', value:'年發生率', note:'同一說明，為範圍值'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'主動脈剝離是急症：撕裂般胸背痛立刻就醫，控制血壓是關鍵',
    update_date:'2026/11/20',
    intro:'主動脈是人體最大的血管，主動脈剝離是血管內膜撕裂、血液灌入血管壁的急症。林口長庚團隊2020年以健保資料庫分析23,868名患者指出，國內每年約有近2000人發生主動脈剝離，一等親有家族史者發病風險可達6.82倍。A型主動脈剝離若不手術，80-90%的病人會死亡，早期每小時約增加1%死亡率。依衛生福利部114年死因統計，高血壓性疾病死亡8,517人，居十大死因第6位，而高血壓正是主動脈剝離最重要的風險因子之一。',
    sections:[
      {heading:'主動脈疾病類型與治療',format:'table',table:TABLE},
      {heading:'誰要特別注意',format:'bullets',items:[
        '長庚團隊指出，最重要的風險因子為高血壓、吸菸、主動脈疾病、懷孕以及劇烈運動等。',
        '主動脈剝離好發於中老年、男性居多；有家族史者發病年齡較輕，也更常需要手術。',
        '研究顯示遺傳因素占比超過一半，一等親曾發生主動脈剝離者應主動告知醫師。'
      ]},
      {heading:'這樣做',format:'bullets',items:[
        '突然出現劇烈、撕裂般的胸痛並延伸到背部，應立即撥打119。',
        '在家量血壓掌握國健署「722原則」，血壓值維持在120/80 mmHg以下，按時服用降血壓藥。',
        '戒菸；已接受手術或藥物治療者，依醫囑長期控制血壓並定期電腦斷層追蹤。'
      ]}
    ],
    think_tank_view:'主動脈剝離來得突然、與時間賽跑，但它最重要的風險因子——高血壓——其實每天都能自己掌握。把血壓量起來、藥按時吃，家族中有人發生過的成員主動告訴醫師，就是最實際的預防。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'發生人數、家族史風險與死亡率標明為林口長庚團隊研究說明（2020年），高血壓性疾病死亡人數引自衛福部114年死因統計，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['林口長庚健保資料庫研究（2020年發表，媒體報導）','114年高血壓性疾病死亡8,517人（死因統計）'],
      layout_reason:'先用表格說明疾病類型與治療，再點出高風險族群，最後給急症辨識與日常控制血壓的行動。',
      tone:'專業易懂', tone_reason:'急症衛教需清楚、避免恐嚇。',
      to_verify:['研究為2020年發表，查無較新的國內官方統計','主動脈瘤盛行率查無官方資料']},
    decision_points:[DP_EST]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'胸口像被撕開、痛到背？主動脈剝離要馬上打119',
    update_date:'2026/11/20',
    intro:'主動脈是身體最大的血管，主動脈剝離就是血管壁裂開，是非常危急的狀況。林口長庚團隊研究指出，台灣每年約有近2000人發生；如果家裡一等親曾經發生，自己的風險最高可達6.82倍。好消息是，最重要的風險因子之一——高血壓——是可以自己控制的。',
    sections:[
      {heading:'主動脈疾病有哪些？',format:'table',table:TABLE},
      {heading:'這些人要多留意',format:'bullets',items:[
        '有高血壓、抽菸的人。',
        '家裡有人發生過主動脈剝離。',
        '中老年男性。'
      ]},
      {heading:'可以這樣做',format:'bullets',items:[
        '突然胸口像被撕開一樣痛、還延伸到背部，馬上打119。',
        '每天量血壓，記住「722」：連續7天、早晚各1次、每次量2遍。',
        '降血壓藥按時吃，菸一定要戒。'
      ]}
    ],
    think_tank_view:'很多人覺得血壓高「沒感覺就不用吃藥」，但主動脈剝離常常就是這樣發生的。陪家人把血壓量起來、藥按時吃，是最好的保護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明為長庚團隊研究說明，語氣親切但未淡化急症風險，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以典型症狀切入，帶出風險族群與血壓控制。', tone:'生活親切', tone_reason:'給高血壓族群與家人閱讀。', to_verify:['研究年份較早']},
    decision_points:[DP_EST]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'主動脈剝離：撕裂般胸背痛打119，控制血壓',
    update_date:'2026/11/20',
    intro:'長庚研究指出國內每年近2000人主動脈剝離，A型不手術80-90%會死亡。高血壓為重要風險因子。',
    sections:[
      {heading:'類型與治療',format:'table',table:TABLE},
      {heading:'高風險',format:'bullets',items:[
        '高血壓、吸菸。',
        '一等親家族史風險最高6.82倍。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '撕裂般胸背痛立即撥打119。',
        '722量血壓、按時服藥。'
      ]}
    ],
    think_tank_view:'控制血壓、認得撕裂般胸背痛，是面對主動脈剝離最重要的兩件事。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明出處與年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為類型、高風險、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['研究為2020年']},
    decision_points:[DP_EST]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'主動脈疾病與置換手術', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'撕裂般胸背痛，立刻打 119', primary_visual:'6.82 倍', secondary_message:'一等親家族史風險最高 6.82 倍', action_priority:'控制血壓、戒菸'},
    headline_hook:'胸痛痛到背？', headline_main:'認識主動脈剝離', title_accent:'主動脈剝離',
    hero_message:'立刻撥打 119', hero_support:'突然撕裂般胸痛延伸到背',
    knowledge_title:'類型與治療', knowledge_note:'術後**長期控制血壓**',
    knowledge_cards:[
      {label:'A 型剝離', icon:'heart', lines:['緊急開胸','人工血管置換']},
      {label:'B 型剝離', icon:'pressure', lines:['多以藥物控制','必要時放支架']},
      {label:'主動脈瘤', icon:'search', lines:['血管異常擴大','追蹤或手術']},
      {label:'高風險', icon:'people', lines:['高血壓、吸菸','家族史']}
    ],
    primary_stat:{value:'6.82 倍', label:'一等親家族史發病風險', note:'林口長庚健保資料庫研究（2020 年）'},
    secondary_stats:[
      {value:'近 2000 人', label:'每年發生主動脈剝離'},
      {value:'80–90%', label:'A 型不手術死亡率'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'急', text:'撕裂般胸背痛立即撥打 119'},
      {key:'量', text:'722 原則量血壓，按時服藥'},
      {key:'戒', text:'戒菸'},
      {key:'告', text:'家族曾發生，主動告知醫師'}
    ],
    carousel_suggestion:{reason:'若想把急症辨識、類型與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'胸痛痛到背？', headline_main:'主動脈剝離要打 119'},
      {layout_type:'knowledge', headline_hook:'A 型與 B 型', headline_main:'治療方式不同'},
      {layout_type:'action', headline_hook:'預防關鍵', headline_main:'控制血壓、戒菸'}]},
    hashtags:['主動脈剝離','主動脈瘤','人工血管置換','高血壓'],
    sources:['台灣英文新聞','NOWnews今日新聞','衛生福利部'],
    illustration_category:'heart',
    illustration:{topic:'主動脈剝離急症', audience:'高血壓族群與家人', scene:'一位中年男性在家量血壓，家人在旁記錄數值，牆上貼著急救電話',
      emotion:'穩定、警覺', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged man measuring blood pressure at home while a family member records the reading, an emergency number note on the wall, steady and alert mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['林口長庚健保資料庫研究（2020年）','高血壓為主要風險因子'],
      layout_reason:'核心是急症辨識與類型差異，選 knowledge：4 張卡說明類型與風險，家族史倍數當主數字。',
      tone:'專業易懂', tone_reason:'急症資訊需清楚。',
      to_verify:['研究為2020年發表']},
    decision_points:[Object.assign({}, DP_EST, {current:'近 2000 人｜每年（長庚 2020 年說明）'})],
    content_check_note:'數據標明為長庚研究說明與年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'主動脈疾病與置換手術',
    collect:{
      summary:'主動脈剝離是與時間賽跑的急症，林口長庚研究指出國內每年近2000人發生、半數以上與遺傳有關；高血壓是最重要的可控風險因子，「認得撕裂般胸背痛、控制血壓」是主要溝通訊息。',
      objective_data:[
        {item:'盛行率／發生率',desc:'每年近2000人發生主動脈剝離：林口長庚團隊2020年說明，國內發生率約每十萬人5到10人，研究以健保資料庫分析23,868名患者（官方未公布專屬統計）。',tag:'市場觀察',source:{name:'台灣英文新聞：台灣每年約2千人主動脈剝離',url:'https://www.taiwannews.com.tw/ch/news/4030948'}},
        {item:'年度趨勢方向',desc:'高血壓性疾病死亡減少4.6%：2025年高血壓性疾病死亡8,517人，居十大死因第6位，高血壓是主動脈剝離最重要的風險因子之一。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'一等親發病風險可達6.82倍：長庚研究發表於2020年9月美國心臟病學會期刊，指出遺傳因素占比超過一半，有家族史者發病較早、更常需要手術。',tag:'市場觀察',source:{name:'NOWnews：主動脈剝離跟家族史有關？長庚研究',url:'https://www.nownews.com/news/5086820'}},
        {item:'好發族群年齡層',desc:'逾8成A型患者不手術會死亡：長庚團隊說明A型不手術80-90%死亡，A型主動脈剝離需緊急開胸進行人工血管置換，好發於中老年男性，高血壓、吸菸、懷孕與劇烈運動為風險因子。',tag:'市場觀察',source:{name:'NOWnews：主動脈剝離跟家族史有關？長庚研究',url:'https://www.nownews.com/news/5086820'}}
      ],
      product_view:['機會：主動脈置換手術屬重大手術，可作為重大疾病與手術醫療保障的溝通情境。','機會：居家血壓管理適合結合健康管理服務。','風險：家族史涉及核保，避免讓民眾因此隱瞞病史；不得暗示血壓管理可保證不發病。'],
      marketing_view:['機會：「胸痛痛到背要打119」是好記的急症口訣。','機會：可與高血壓、腦中風主題串連成血壓系列。','風險：急症題材避免恐懼訴求，宜以血壓控制等具體行動收尾。'],
      alert_level:'low',
      alert_reason:'無政策事件，研究資料較早（2020年），適合納入血壓與心血管急症的長期溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國內每年約有近2000人發生主動脈剝離','DATA_FACTUAL_ACCURACY','derived_estimate',
          '「近2000人」是研究團隊依「每十萬人5到10人」的發生率範圍換算的估計，並非實際統計的發生人數；文中未說明是估算。','medium','no',
          null,'no','clarify','數字引自研究團隊說明，屬口徑標示。',
          '國內每年約有近2000人發生主動脈剝離（依每十萬人5至10人的發生率估算）',['台灣每年約有近2000人發生','國內每年近2000人主動脈剝離']),
        F('一等親有家族史者發病風險可達6.82倍','MEDICAL_INTERPRETATION','max_as_typical',
          '6.82倍是研究中的最高風險倍數（媒體標題寫「最高」），讀者可能理解為所有家族史者都有6.82倍風險。','medium','no',
          null,'no','clarify','數字引自報導。',
          '一等親有家族史者發病風險最高可達6.82倍',['自己的風險最高可達6.82倍','一等親家族史風險最高6.82倍']),
        F('A型主動脈剝離若不手術，80-90%的病人會死亡','RISK_COMMUNICATION_SCOPE','fear_framing',
          '數字正確引用，但放在開頭容易造成恐慌；建議緊接著說明「及早手術可大幅提升存活機會」，但原始報導未提供手術後存活率，不宜自行補數字。','low','no',
          null,'no','clarify','屬呈現順序調整。',
          null),
        F('高血壓性疾病死亡8,517人，居十大死因第6位','MEDICAL_INTERPRETATION','scope_broader_than_topic',
          '高血壓性疾病死亡與主動脈剝離沒有直接對應，放在主動脈文章開頭可能讓讀者混淆兩者。','low','no',
          null,'no','clarify','數字正確，屬脈絡說明。',
          '高血壓性疾病死亡8,517人，居十大死因第6位（此為高血壓相關疾病整體，非主動脈剝離人數）')
      ],
      card:[
        F('一等親家族史發病風險','MEDICAL_INTERPRETATION','max_as_typical',
          '主數字 6.82 倍為「最高」倍數，卡面未標「最高」。','medium','no',
          null,'no','clarify','數字引自報導。',
          '一等親家族史發病風險（最高）'),
        F('每年發生主動脈剝離','SOURCE_EVIDENCE','source_unlabeled',
          '「近 2000 人」為研究團隊估計，卡面未標出處與年份。','low','no',
          null,'no','clarify','屬來源標示。',
          '每年發生主動脈剝離（2020 年估計）')
      ]
    },
    title_alts:[
      '主動脈剝離是急症：撕裂般胸背痛立刻就醫，控制血壓是關鍵',
      '胸口像被撕開、痛到背？主動脈剝離要馬上打119',
      '家族史風險最高6.82倍：認識主動脈剝離與置換手術'
    ],
    card_title_alts:[
      ['胸痛痛到背？','認識主動脈剝離'],
      ['家族史要注意','主動脈剝離風險'],
      ['控制血壓','預防主動脈剝離']
    ],
    data_addon:[
      '長庚研究：A型主動脈剝離早期每小時約增加1%死亡率。',
      '長庚團隊：主動脈剝離不論A型或B型，長期都可能形成主動脈瘤而需後續手術。',
      '國健署：居家量血壓722原則，血壓值維持在120/80 mmHg以下。'
    ],
    cta:'家裡有高血壓的長輩，這週開始用722原則量血壓，並把119和就醫醫院寫在冰箱上。'
  });
})();
