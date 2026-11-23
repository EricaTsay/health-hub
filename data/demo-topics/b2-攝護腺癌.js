/* v6 示範主題：攝護腺癌（B2 癌症）
   查證日期：2026-11-20。數據來源：衛福部112年癌症登記報告附表（2025-12-30 公布）、衛福部114年死因統計摘要表（攝護腺癌死亡時間序列與男性癌症死因排名）、
   國健署2025-10-30〈攝護腺癌為男性常見癌症 出現異常症狀應及早就醫〉（PSA篩檢立場、症狀、危險因子；該稿使用111年癌登與113年死因資料，文中已改用最新一期）。
   參考方向：健康智庫〈攝護腺癌〉2023/09。 */
(function(){
  const REFS = [
    {title:'112年國人十大癌症發生人數附表',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'攝護腺癌為男性常見癌症 出現異常症狀應及早就醫',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-84354-1.html'}
  ];
  const TABLE = {headers:['項目','重點'], rows:[
    ['常見症狀','頻尿、夜尿頻繁、排尿困難，或不明原因骨骼疼痛'],
    ['危險因子','年齡、家族史（基因）、種族、飲食與環境等，非單一因素造成'],
    ['PSA檢驗','國際研究尚無充分證據顯示可有效降低死亡率，且可能過度診斷'],
    ['國健署引述建議','55-69歲男性與醫師討論利弊後再決定是否檢測PSA；70歲以上不建議篩檢']
  ]};
  const TAGS = ['攝護腺癌','前列腺癌','PSA','男性健康','排尿異常'];

  const DP_PSA = {id:'dp-pc-psa', type:'tone', title:'PSA檢驗要寫「建議做」還是「討論後決定」',
    desc:'國健署立場是PSA檢驗「與醫師討論利弊後再決定」，並非公費篩檢；部分醫師與病友團體主張應推動普篩。AI 依國健署立場撰寫，沒有寫成「建議男性定期驗PSA」。',
    current:'55-69歲與醫師討論利弊後再決定（國健署引述USPSTF）',
    options:[{label:'維持目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'討論後決定', value:'國健署（2025-10）', note:'引述美國預防服務工作組建議（目前採用）'},
      {label:'推動普篩', value:'部分醫師與病友團體', note:'媒體報導中的主張，非官方政策'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'攝護腺癌是男性第3常見癌症：排尿異常別忍，PSA檢驗先和醫師談',
    update_date:'2026/11/20',
    intro:'依衛生福利部112年癌症登記報告，攝護腺癌新發9,985人，居國人癌症發生第5位、男性標準化發生率第3位，診斷年齡中位數72歲，較111年增加923人。114年死因統計中，攝護腺癌死亡1,895人，居男性癌症死因第5位，年齡標準化死亡率每十萬男性7.5人。國民健康署提醒，攝護腺癌風險與年齡、家族史等多種因素有關，出現排尿異常或不明骨骼疼痛應及早就醫。',
    sections:[
      {heading:'攝護腺癌重點整理',format:'table',table:TABLE},
      {heading:'PSA檢驗的利與弊',format:'bullets',items:[
        '國健署指出，國際研究顯示PSA檢測是否能有效降低攝護腺癌死亡率尚無充分證據。',
        '過度診斷與治療可能帶來勃起功能障礙、尿失禁等副作用，影響生活品質。',
        '有家族史或症狀者，可與泌尿科醫師討論個人風險，再決定是否檢測。'
      ]},
      {heading:'日常預防與就醫',format:'bullets',items:[
        '避免吸菸、規律運動、多吃蔬果，養成良好生活習慣。',
        '頻尿、排尿困難、夜尿變多，不要只當成年紀大或攝護腺肥大，應就醫評估。',
        '不明原因的骨骼疼痛也應就醫，由醫師判斷需要的檢查。'
      ]}
    ],
    think_tank_view:'攝護腺癌多發生在高齡男性，進展速度因人而異，所以「要不要驗PSA」沒有一體適用的答案。比較重要的是：排尿出現變化時願意就醫，並和醫師把檢查的好處與可能的副作用談清楚，再做決定。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'發生與死亡人數引自衛福部112年癌症登記與114年死因統計並標明年份，PSA立場引自國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['112年攝護腺癌新發9,985人（癌症登記附表）','114年死亡1,895人（死因統計）','PSA篩檢立場（國健署2025-10）'],
      layout_reason:'先用表格整理症狀、風險與PSA立場，再說明PSA利弊，最後給預防與就醫建議。',
      tone:'專業易懂', tone_reason:'篩檢利弊需要平衡、精確的說明。',
      to_verify:['國健署2025年新聞稿使用111年癌登與113年死因資料，文中已改用最新一期數字']},
    decision_points:[DP_PSA]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸爸半夜一直起來上廁所？攝護腺問題別硬撐',
    update_date:'2026/11/20',
    intro:'攝護腺癌是台灣男性第3常見的癌症，依112年癌症登記，一年有9,985人確診，大多是70歲上下的長輩。很多爸爸把頻尿、夜尿當成「年紀大正常」，其實這些都值得讓醫師看一看。至於要不要抽血驗PSA，國健署建議先和醫師聊聊利弊再決定。',
    sections:[
      {heading:'攝護腺癌，先認識這些',format:'table',table:TABLE},
      {heading:'驗PSA，先問清楚',format:'bullets',items:[
        '國健署說，目前還沒有足夠證據證明驗PSA能降低攝護腺癌死亡率。',
        '有時會驗出不需要治療的小腫瘤，過度治療可能影響性功能或造成漏尿。',
        '家裡有人得過攝護腺癌，可以跟泌尿科醫師討論自己的風險。'
      ]},
      {heading:'爸爸可以這樣顧',format:'bullets',items:[
        '不抽菸、常運動、多吃蔬果。',
        '頻尿、尿不出來、半夜一直跑廁所，就去看泌尿科。',
        '骨頭莫名其妙痛很久，也要讓醫師檢查。'
      ]}
    ],
    think_tank_view:'男人常常「能忍就忍」，但排尿出問題真的不必忍。父親節前後，不妨陪爸爸約一次泌尿科，把困擾好好問清楚。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部與國健署公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以爸爸夜尿的生活情境切入。', tone:'生活親切', tone_reason:'給子女與熟齡男性閱讀。', to_verify:['PSA利弊說明引自國健署']},
    decision_points:[DP_PSA]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'攝護腺癌：排尿異常就醫，PSA與醫師討論',
    update_date:'2026/11/20',
    intro:'112年攝護腺癌新發9,985人，男性發生第3位；114年死亡1,895人。PSA檢驗與醫師討論利弊後再決定。',
    sections:[
      {heading:'重點',format:'table',table:TABLE},
      {heading:'PSA',format:'bullets',items:[
        '降低死亡率證據不足。',
        '可能過度診斷與治療。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '排尿異常、骨痛就醫。',
        '戒菸、運動、多蔬果。'
      ]}
    ],
    think_tank_view:'攝護腺癌重在症狀就醫與知情決定，PSA檢驗應與醫師討論利弊。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部與國健署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為重點、PSA、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['PSA立場引自國健署']},
    decision_points:[DP_PSA]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'攝護腺癌', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'攝護腺癌是男性第 3 常見癌症', primary_visual:'1,895 人', secondary_message:'PSA 檢驗先和醫師討論利弊', action_priority:'排尿異常就醫'},
    headline_hook:'夜尿頻尿別硬撐', headline_main:'認識攝護腺癌', title_accent:'攝護腺癌',
    hero_message:'男性第 3 常見', hero_support:'112 年新發 9,985 人，診斷年齡中位數 72 歲',
    knowledge_title:'重點整理', knowledge_note:'PSA 檢驗，**先和醫師討論利弊**',
    knowledge_cards:[
      {label:'常見症狀', icon:'check', lines:['頻尿、夜尿','排尿困難、骨痛']},
      {label:'危險因子', icon:'people', lines:['年齡、家族史','種族、飲食、環境']},
      {label:'PSA 檢驗', icon:'search', lines:['降低死亡率','證據尚不充分']},
      {label:'55–69 歲', icon:'chat', lines:['與醫師討論','再決定是否檢測']}
    ],
    primary_stat:{value:'1,895 人', label:'114 年攝護腺癌死亡', note:'衛福部死因統計｜男性癌症死因第 5 位'},
    secondary_stats:[
      {value:'72 歲', label:'診斷年齡中位數'},
      {value:'+923 人', label:'112 年新發較前一年'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'醫', text:'頻尿、排尿困難、夜尿變多看泌尿科'},
      {key:'談', text:'PSA 檢驗先與醫師討論利弊'},
      {key:'戒', text:'避免吸菸'},
      {key:'動', text:'規律運動、多吃蔬果'}
    ],
    carousel_suggestion:{reason:'若想把趨勢、症狀與 PSA 利弊分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'男性第 3 常見', headline_main:'一年新發近萬人'},
      {layout_type:'knowledge', headline_hook:'排尿異常', headline_main:'這些症狀要就醫'},
      {layout_type:'knowledge', headline_hook:'要不要驗 PSA', headline_main:'先了解利與弊'}]},
    hashtags:['攝護腺癌','PSA','男性健康','排尿異常'],
    sources:['衛生福利部','衛生福利部國民健康署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'攝護腺健康', audience:'熟齡男性與子女', scene:'成年子女陪同父親在泌尿科診間與醫師討論，醫師指著說明圖',
      emotion:'安心、溝通', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult child accompanying their older father in a urology clinic, the doctor pointing to an explanatory chart, calm and communicative mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['112年新發9,985人（癌症登記）','114年死亡1,895人（死因統計）','PSA立場（國健署2025-10）'],
      layout_reason:'核心是認識症狀與 PSA 知情決定，選 knowledge：4 張卡說明症狀、風險與 PSA 立場，數據退到下方。',
      tone:'專業易懂', tone_reason:'篩檢利弊需平衡呈現。',
      to_verify:['男性發生排名依標準化發生率']},
    decision_points:[Object.assign({}, DP_PSA, {current:'55–69 歲與醫師討論後再決定'})],
    content_check_note:'發生與死亡人數引自衛福部並標明年份，PSA立場引自國健署，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'攝護腺癌',
    collect:{
      summary:'攝護腺癌112年新發近萬人、居男性標準化發生率第3位且持續上升，主要與人口老化有關；國健署對PSA檢驗採「與醫師討論利弊後決定」立場，是需要平衡溝通篩檢利弊的男性健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'新發攝護腺癌約1萬人：依2025年12月公布的112年癌症登記，攝護腺癌新發9985人，居國人癌症發生第5位、男性標準化發生率第3位，診斷年齡中位數72歲。',tag:'官方統計',source:{name:'衛生福利部：112年國人十大癌症發生人數附表',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'}},
        {item:'年度趨勢方向',desc:'新發人數增加923人：112年較111年9,062人增加，標準化發生率由41.6升至43.9，2025年死亡1,895人，標準化死亡率每十萬男性7.5人、大致持平。',tag:'官方統計',source:{name:'衛生福利部：112年國人十大癌症發生人數附表',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'}},
        {item:'政策動向',desc:'55-69歲男性與醫師討論後再決定PSA檢測：國健署2025年10月引述美國預防服務工作組建議，指出PSA檢測降低死亡率的證據尚不充分，70歲以上不建議篩檢。',tag:'官方統計',source:{name:'衛生福利部國民健康署：攝護腺癌為男性常見癌症 出現異常症狀應及早就醫',url:'https://mohw.gov.tw/cp-16-84354-1.html'}},
        {item:'好發族群年齡層',desc:'診斷年齡中位數72歲：攝護腺癌好發於高齡男性，國健署指出風險與年齡、家族史、種族、飲食及環境等多重因素有關。',tag:'官方統計',source:{name:'衛生福利部國民健康署：攝護腺癌為男性常見癌症 出現異常症狀應及早就醫',url:'https://mohw.gov.tw/cp-16-84354-1.html'}}
      ],
      product_view:['機會：攝護腺癌好發高齡男性，治療方式多元（手術、放射、荷爾蒙治療），可作為熟齡男性癌症保障溝通情境。','機會：可設計排尿症狀自我檢視與就醫提醒的健康服務。','風險：PSA屬自費檢驗且有過度診斷爭議，不宜以保險商品搭配推廣PSA篩檢，也不得暗示篩檢可保證早期發現。'],
      marketing_view:['機會：父親節是固定溝通時點，子女提醒爸爸是自然切點。','機會：「頻尿夜尿別硬撐」貼近熟齡男性日常困擾。','風險：PSA議題有不同立場，溝通時應呈現國健署的平衡說法，避免一面倒鼓勵篩檢。'],
      alert_level:'medium',
      alert_reason:'發生人數與標準化發生率持續上升，國健署2025年10月剛發布衛教新聞稿，適合在父親節等檔期溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('居男性癌症死因第5位','DATA_FACTUAL_ACCURACY','ranking_differs_by_year',
          '依114年死因統計為男性癌症死因第5位；國健署2025年10月新聞稿以113年資料寫「死亡率居第六」。兩者年份與排序依據不同，讀者若對照官方新聞稿可能疑惑。','low','no',
          null,'no','clarify','114年排名正確，屬年份差異說明。',
          '居男性癌症死因第5位（114年死因統計，依死亡人數排序）'),
        F('有家族史或症狀者，可與泌尿科醫師討論個人風險','MEDICAL_INTERPRETATION','advice_scope',
          '國健署原文是引述USPSTF的55-69歲討論建議，並未特別針對家族史者另訂建議；文中把家族史者單獨列出，可能被理解為官方建議高風險者主動檢測。','low','no',
          null,'no','clarify','屬建議範圍表述。',
          '有家族史或症狀者，可與泌尿科醫師討論個人風險（屬個別評估，非官方篩檢建議）',['可以跟泌尿科醫師討論自己的風險']),
        F('有時會驗出不需要治療的小腫瘤','MEDICAL_INTERPRETATION','oversimplification',
          '國健署原文是「過度診斷與治療」，改寫成「不需要治療的小腫瘤」過度簡化，可能讓讀者誤以為驗出來的多半不用治療。','medium','no',
          null,'no','clarify','屬白話改寫的準確度問題。',
          '有時會驗出進展很慢、可能不會影響健康的腫瘤，接受治療反而可能帶來副作用'),
        F('不要只當成年紀大或攝護腺肥大','MEDICAL_INTERPRETATION','symptom_overlap',
          '頻尿、夜尿最常見的原因其實是良性攝護腺肥大，文中語氣可能讓讀者把排尿症狀直接聯想為癌症而過度焦慮。','low','no',
          null,'no','clarify','屬語氣平衡。',
          '不論是攝護腺肥大或其他原因，都應就醫評估')
      ],
      card:[
        F('112 年新發較前一年','MEDICAL_INTERPRETATION','trend_cause_unstated',
          '「+923 人」未說明與人口老化有關，讀者可能過度解讀為罹癌風險急升。','low','no',
          null,'no','clarify','數字正確。',
          '112 年新發較前一年（含人口老化影響）'),
        F('降低死亡率','MEDICAL_INTERPRETATION','oversimplification',
          'knowledge 卡只寫「降低死亡率／證據尚不充分」，讀者可能誤解為 PSA 沒有用處；國健署原意是需權衡利弊。','low','no',
          null,'no','clarify','屬卡面字數限制下的表達。',
          null)
      ]
    },
    title_alts:[
      '攝護腺癌是男性第3常見癌症：排尿異常別忍，PSA檢驗先和醫師談',
      '爸爸半夜一直起來上廁所？攝護腺問題別硬撐',
      '要不要驗PSA？攝護腺癌篩檢的利與弊'
    ],
    card_title_alts:[
      ['夜尿頻尿別硬撐','認識攝護腺癌'],
      ['男性第 3 常見','攝護腺癌重點整理'],
      ['要不要驗 PSA？','先和醫師談利弊']
    ],
    data_addon:[
      '攝護腺癌死亡人數由2016年1,422人增至2025年1,895人，標準化死亡率約7.2-8.0持平。',
      '112年攝護腺癌標準化發生率每十萬男性43.9人，較111年增加2.3人。',
      '國健署2025年10月：過度診斷與治療可能帶來勃起功能障礙或尿失禁等副作用。'
    ],
    cta:'這個週末問問爸爸：最近晚上起來上廁所幾次？若明顯變多，就陪他約一次泌尿科。'
  });
})();
