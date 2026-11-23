/* v6 示範主題：青光眼（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-20。數據來源：健康醫療網 2026-03-09（蕃新聞轉載；引述衛福部全民健康保險醫療統計年報113年：患者數、50歲以下人數）、
   三立新聞網 2026-03-09（台灣青光眼關懷協會理事長受訪）、商業周刊 2025-09-05（醫師受訪：高風險族群）。
   衛福部統計處醫療統計年報原始表未直接取得。
   參考方向：健康智庫〈青光眼〉2022/06。 */
(function(){
  const YAM = 'https://n.yam.com/Article/20260309164165';
  const REFS = [
    {title:'年輕也難倖免！亞洲人青光眼恐「早期無症狀」 醫籲留意檢查1趨勢',source:'健康醫療網（蕃新聞轉載）',url:YAM},
    {title:'男患青光眼「視野剩一半」！全台52萬人陷危機 醫：愛用3C注意',source:'三立新聞網',url:'https://www.setn.com/ampnews/1804735'},
    {title:'台灣青光眼人數成長22%！醫：失明不可逆，「4高風險族群」半年做一次檢查',source:'商業周刊（良醫健康網授權轉載）',url:'https://www.businessweekly.com.tw/style/blog/3019392'}
  ];
  const TABLE = {headers:['類型','特徵'], rows:[
    ['慢性（隅角開放型、正常眼壓型）','早期幾乎沒有症狀，視野從周邊慢慢缺損，常在檢查時才發現'],
    ['急性隅角閉鎖型','眼壓突然升高，出現劇烈眼痛、頭痛、噁心、視力驟降，須立即就醫']
  ]};
  const TAGS = ['青光眼','視野缺損','眼壓','定期眼科檢查','高度近視'];

  const DP_COUNT = {id:'dp-glc-count', type:'data_version', title:'青光眼人數有兩個時點的說法',
    desc:'健康醫療網2026年引述衛福部醫療統計年報：截至113年（2024年）底患者逾52.5萬人；商業周刊2025年轉載文章引述健保資料庫：2022年突破45萬人。兩者年份不同，AI 沒有替你決定要用哪一個。',
    current:'逾52.5萬人（113年底，媒體引述衛福部醫療統計年報）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'逾52.5萬人', value:'截至113年底', note:'健康醫療網引述衛福部醫療統計年報（目前採用）'},
      {label:'逾45萬人', value:'2022年', note:'商業周刊轉載文章引述健保資料庫'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'青光眼是「視力小偷」：早期沒症狀，35歲後做一次完整眼科檢查',
    update_date:'2026/11/20',
    intro:'青光眼是視神經逐漸受損、視野慢慢缺損的疾病，受損後無法恢復。據健康醫療網2026年引述衛福部全民健康保險醫療統計年報，截至113年底全台青光眼患者逾52.5萬人，每年平均增加約5%；其中50歲以下患者12萬2,659人，約占四分之一。台灣青光眼關懷協會理事長指出，臨床估計50%至80%的患者並不知道自己罹病。',
    sections:[
      {heading:'青光眼的2種類型',format:'table',table:TABLE},
      {heading:'哪些人要特別注意',format:'bullets',items:[
        '500度以上高度近視、有青光眼家族史、長期使用類固醇者。',
        '有三高或眼球曾受外傷者。',
        '醫師提醒，亞洲族群多屬正常眼壓型青光眼，「眼壓正常」不代表沒有青光眼，需搭配眼底與視野檢查。'
      ]},
      {heading:'檢查與治療',format:'bullets',items:[
        '醫師建議一般民眾35歲後做一次完整眼科檢查；高風險族群依醫師建議定期追蹤。',
        '完整檢查包含眼壓、眼底攝影、視神經斷層掃描（OCT）與視野檢查。',
        '治療以眼藥水為第一線，必要時再評估雷射或手術；目標是減緩視神經惡化，需長期規律用藥與回診。'
      ]}
    ],
    think_tank_view:'青光眼最可怕的不是疼痛，而是「沒感覺」。視野從周邊慢慢缺一角，大腦會自動補償，等自己察覺時，視神經往往已受損不少。對高度近視的上班族和家中長輩來說，一次完整的眼科檢查，就是對視力最實際的保險。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'患者人數標明為媒體引述衛福部醫療統計年報並標示年份，醫師說法標明身分，未使用療效保證用語，未推薦特定藥品或院所。',
    ai_rationale:{basis:['沿用步驟1洞察：113年底青光眼患者逾52.5萬人（健康醫療網引述衛福部醫療統計年報）','50%至80%未自覺為協會理事長臨床估計'],
      layout_reason:'先用表格區分慢性與急性兩型，再列高風險族群，最後給檢查與治療原則。',
      tone:'專業易懂', tone_reason:'需破除「眼壓正常就沒事」的迷思。',
      to_verify:['52.5萬人與12萬2,659人為媒體引述，衛福部醫療統計年報原始表待查','「50%至80%不知道自己罹病」為臨床估計']},
    decision_points:[DP_COUNT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'眼睛不痛不癢也可能是青光眼！高度近視的你要注意',
    update_date:'2026/11/20',
    intro:'青光眼被稱為「視力小偷」，因為它會悄悄偷走視野，而且偷走就要不回來。媒體引述衛福部統計，到113年底台灣有超過52.5萬人有青光眼，50歲以下就占了約四分之一。醫師說，有一半以上的人根本不知道自己得了青光眼。',
    sections:[
      {heading:'青光眼有兩種',format:'table',table:TABLE},
      {heading:'我需要特別注意嗎？',format:'bullets',items:[
        '近視500度以上、家人有青光眼、長期用類固醇。',
        '有三高，或眼睛曾經受過傷。',
        '亞洲人很多是「眼壓正常」的青光眼，量眼壓正常也不代表沒事。'
      ]},
      {heading:'怎麼檢查、怎麼治療？',format:'bullets',items:[
        '醫師建議35歲以後做一次完整的眼科檢查。',
        '完整檢查會量眼壓、拍眼底、做視神經掃描和視野檢查。',
        '大多先用眼藥水控制，要每天乖乖點、定期回診。'
      ]}
    ],
    think_tank_view:'青光眼不會痛、不會癢，所以最容易被忽略。如果你是高度近視族，或家裡有人得過青光眼，找一天去做完整的眼科檢查，替眼睛買一份安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明為媒體引述衛福部統計，語氣親切但未淡化檢查必要，未使用療效保證用語，未推薦特定藥品或院所。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「不痛不癢」的特性帶出類型、高風險族群與檢查。', tone:'生活親切', tone_reason:'給高度近視上班族與家人閱讀。', to_verify:['52.5萬人原始統計待查']},
    decision_points:[DP_COUNT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'青光眼：早期沒症狀，35歲後檢查一次',
    update_date:'2026/11/20',
    intro:'媒體引述衛福部醫療統計年報，113年底青光眼患者逾52.5萬人，50歲以下約占四分之一。臨床估計5至8成患者不知道自己罹病。',
    sections:[
      {heading:'2種類型',format:'table',table:TABLE},
      {heading:'高風險族群',format:'bullets',items:[
        '高度近視、家族史、長期使用類固醇。',
        '三高、眼球外傷。'
      ]},
      {heading:'檢查治療',format:'bullets',items:[
        '35歲後做一次完整眼科檢查。',
        '眼壓正常不代表沒事。',
        '規律點藥、定期回診。'
      ]}
    ],
    think_tank_view:'青光眼損傷不可逆，早期沒有症狀；定期完整的眼科檢查，是唯一能及早發現的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明為媒體引述衛福部統計，未使用療效保證用語，未推薦特定藥品或院所。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為類型、族群、檢查三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['52.5萬人原始統計待查']},
    decision_points:[DP_COUNT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'青光眼', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'青光眼早期沒症狀，損傷不可逆', primary_visual:'逾 52.5 萬人', secondary_message:'50 歲以下約占 1/4', action_priority:'35 歲後完整眼科檢查'},
    headline_hook:'不痛不癢的視力小偷', headline_main:'青光眼，35 歲後檢查一次', title_accent:'35 歲後',
    primary_stat:{kicker:'113 年底・患者數', value:'逾 52.5 萬人', label:'全台青光眼患者', note:'媒體引述衛福部醫療統計年報｜每年約增 5%'},
    secondary_stats:[
      {value:'約 1/4', label:'50 歲以下患者'},
      {value:'5–8 成', label:'不知道自己罹病（臨床估計）'},
      {value:'約 85%', label:'亞洲多屬正常眼壓型'}
    ],
    action_title:'這樣守護視野',
    action_cards:[
      {key:'檢', text:'35 歲後做一次完整眼科檢查'},
      {key:'追', text:'高度近視、家族史者定期追蹤'},
      {key:'點', text:'確診後規律點藥、定期回診'},
      {key:'急', text:'眼痛頭痛、視力驟降立即就醫'}
    ],
    carousel_suggestion:{reason:'若想把數據、類型與檢查分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'不痛不癢的視力小偷', headline_main:'全台逾 52.5 萬人'},
      {layout_type:'knowledge', headline_hook:'青光眼有兩種', headline_main:'慢性與急性怎麼分'},
      {layout_type:'action', headline_hook:'守護視野', headline_main:'35 歲後檢查一次'}]},
    hashtags:['青光眼','視野缺損','眼壓','眼科檢查'],
    sources:['衛生福利部（媒體引述）','台灣青光眼關懷協會（媒體受訪）'],
    illustration_category:'screening-checkup',
    illustration:{topic:'青光眼檢查', audience:'35 歲以上上班族與長輩', scene:'一位戴眼鏡的上班族在眼科診間接受眼壓與視野檢查，醫師在旁說明',
      emotion:'安心、有掌握感', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker with glasses taking an eye pressure and visual field test at an eye clinic while a doctor explains, reassured mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：113年底患者逾52.5萬人、50歲以下約1/4（媒體引述衛福部）'],
      layout_reason:'選 data：患者數當主角，年輕化、未自覺與正常眼壓型比例在右側，下方給 4 個行動。',
      tone:'專業易懂', tone_reason:'強調早期無症狀與檢查的必要。',
      to_verify:['5–8 成、85% 為醫師受訪說法']},
    decision_points:[Object.assign({}, DP_COUNT, {current:'逾 52.5 萬人（113 年底）'})],
    content_check_note:'人數標明為媒體引述衛福部統計，比例標明為醫師說法，未使用療效保證用語，未推薦特定藥品或院所。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'青光眼',
    collect:{
      summary:'青光眼患者逾50萬人且逐年增加、年輕化，早期幾乎無症狀、視神經損傷不可逆；醫師呼籲35歲後做一次完整眼科檢查，「早期篩檢、規律治療」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'逾52.5萬人罹患青光眼：健康醫療網2026年3月引述衛福部全民健康保險醫療統計年報，截至113年底全台青光眼患者逾52.5萬人。',tag:'官方統計',source:{name:'健康醫療網（蕃新聞轉載）：年輕也難倖免！亞洲人青光眼恐「早期無症狀」',url:YAM}},
        {item:'年度趨勢方向',desc:'每年平均增加約5%：同一報導指出青光眼患者每年平均增加約5%，2022年時約45萬人（商業周刊轉載文章引述健保資料庫）。',tag:'市場觀察',source:{name:'健康醫療網（蕃新聞轉載）：年輕也難倖免！亞洲人青光眼恐「早期無症狀」',url:YAM}},
        {item:'政策動向',desc:'50%至80%患者不知道自己罹病：台灣青光眼關懷協會理事長2026年世界青光眼週受訪指出此臨床估計，呼籲35歲後做一次完整眼科檢查，目前尚無全國性青光眼篩檢政策。',tag:'市場觀察',source:{name:'三立新聞網：男患青光眼「視野剩一半」！全台52萬人陷危機',url:'https://www.setn.com/ampnews/1804735'}},
        {item:'好發族群年齡層',desc:'50歲以下患者約12.3萬人：報導引述113年統計，50歲以下青光眼患者12萬2,659人、約占四分之一，高度近視、長時間使用3C被認為與年輕化有關。',tag:'官方統計',source:{name:'健康醫療網（蕃新聞轉載）：年輕也難倖免！亞洲人青光眼恐「早期無症狀」',url:YAM}}
      ],
      product_view:['機會：青光眼需長期用藥與追蹤，嚴重時影響工作與生活自理，可連結視力相關失能保障的說明。','機會：年輕化趨勢讓上班族也成為溝通對象，可結合健康檢查服務。','風險：不推薦特定藥品或手術；失能與理賠須依條款與醫學評估認定。'],
      marketing_view:['機會：每年3月第2週世界青光眼週是固定溝通檔期。','機會：「眼壓正常≠沒事」是容易引發討論的迷思破解題材。','風險：避免以「失明」製造恐懼，宜以檢查行動收尾。'],
      alert_level:'low',
      alert_reason:'屬長期眼睛健康議題，無急迫政策事件；適合世界青光眼週（3月）前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('據健康醫療網2026年引述衛福部全民健康保險醫療統計年報','SOURCE_EVIDENCE','secondary_citation',
          '已註明出處層級，但文章引用的是媒體轉述，未直接連到衛福部統計處的醫療統計年報原始表，讀者無法查證口徑（就醫人數或確診人數）。','medium','yes',
          '衛福部統計處113年全民健康保險醫療統計年報中青光眼（H40-H42）門診人數。','yes','confirm','數字本身未必有誤，屬二手引述。',
          '依衛福部113年全民健康保險醫療統計年報（媒體引述，原始表待補連結）',
          ['媒體引述衛福部統計','媒體引述衛福部醫療統計年報']),
        F('臨床估計50%至80%的患者並不知道自己罹病','SOURCE_EVIDENCE','expert_estimate_wide_range',
          '範圍很寬，且為醫師臨床估計，並非國內調查結果；文中語氣接近事實陳述。','low','no',
          null,'no','clarify','屬估計值標示問題。',
          '醫師臨床估計，約有一半以上的患者並不知道自己罹病',
          ['有一半以上的人根本不知道自己得了青光眼','臨床估計5至8成患者不知道自己罹病']),
        F('醫師建議一般民眾35歲後做一次完整眼科檢查','MEDICAL_INTERPRETATION','frequency_unstated',
          '只說35歲後做「一次」，沒說明之後多久再檢查，讀者可能以為一次就夠。','low','no',
          null,'no','clarify','可補後續追蹤原則。',
          '醫師建議一般民眾35歲後做一次完整眼科檢查，之後依醫師建議定期追蹤',
          ['醫師建議35歲以後做一次完整的眼科檢查','35歲後做一次完整眼科檢查']),
        F('隅角開放型、正常眼壓型','TERMINOLOGY_LANGUAGE','term_unexplained',
          '「隅角」「正常眼壓型」等專有名詞未解釋，一般讀者不易理解。','low','no',
          null,'no','clarify','可補白話說明。',
          '隅角開放型（眼內房水排出口沒有阻塞）、正常眼壓型（眼壓在正常範圍仍發生視神經損傷）')
      ],
      card:[
        F('不知道自己罹病（臨床估計）','SOURCE_EVIDENCE','expert_estimate_wide_range',
          '「5–8 成」範圍很寬，卡面未標示說法來源。','low','no',
          null,'no','clarify','補出處即可。',
          '不知道自己罹病（醫師臨床估計）'),
        F('亞洲多屬正常眼壓型','SOURCE_EVIDENCE','expert_opinion_unsourced',
          '「約 85%」出自醫師受訪，未附研究出處，卡面讀者會以為是統計數字。','low','yes',
          '亞洲族群正常眼壓型青光眼比例的研究出處。','no','confirm','與部分亞洲研究相近，但出處未標示。',
          '亞洲多屬正常眼壓型（醫師說法）')
      ]
    },
    title_alts:[
      '青光眼是「視力小偷」：早期沒症狀，35歲後做一次完整眼科檢查',
      '眼睛不痛不癢也可能是青光眼！高度近視的你要注意',
      '全台逾52.5萬人有青光眼：2種類型與檢查重點'
    ],
    card_title_alts:[
      ['不痛不癢的視力小偷','青光眼，35 歲後檢查一次'],
      ['眼壓正常≠沒事','認識青光眼'],
      ['全台逾 52.5 萬人','青光眼守護視野 4 件事']
    ],
    data_addon:[
      '113年統計：50歲以下青光眼患者12萬2,659人，占整體約23.3%（媒體引述）。',
      '醫師提醒：季節交替、溫差大時，或服用含副交感神經阻斷劑的感冒藥、腸胃藥，可能誘發急性隅角閉鎖型青光眼。',
      '完整檢查包含眼壓、眼底攝影、視神經斷層掃描（OCT）與視野檢查。'
    ],
    cta:'如果你已滿35歲、或近視超過500度，今年就預約一次包含眼底與視野的完整眼科檢查。'
  });
})();
