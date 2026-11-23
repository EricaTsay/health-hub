/* v6 示範主題：異位妊娠（B7 女性・男性・生育與兒童）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計摘要表（表32 孕產婦死亡）、衛福部／國健署14次公費產檢新聞稿（2024、2025）、
   衛福部南投醫院婦產科醫師衛教（早安健康2023年刊載，二手）。
   參考方向：健康智庫〈子宮外孕（Ectopic Pregnancy）〉2023/10/30。 */
(function(){
  const REFS = [
    {title:'14次公費產檢 給媽咪與寶寶最安心的守護',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-83667-1.html'},
    {title:'定期產檢4要訣 助安心懷孕 平安生產',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-80145-1.html'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'驗孕才剛看到兩條線，子宮外孕在這位置，她腹痛出血險要命（衛福部南投醫院）',source:'早安健康',url:'https://edh.tw/articles/uGhqXDb'}
  ];
  const TABLE = {headers:['警訊','常見表現'], rows:[
    ['陰道不正常出血','驗孕陽性後出現與月經不同的出血或褐色分泌物'],
    ['下腹或骨盆疼痛','多為單側悶痛，按壓時加劇'],
    ['破裂徵兆','突發腹部劇痛、肩膀痛、頭暈、冒冷汗甚至昏倒，需立即急診']
  ]};
  const TAGS = ['異位妊娠','子宮外孕','孕期急症','產前檢查','女性健康'];

  const DP_RATE = {id:'dp-ep-rate', type:'data_source', title:'「1–2%」只有醫師衛教來源',
    desc:'子宮外孕約占所有懷孕1–2%，是國內外教科書常見數字，但目前查到的國內出處是衛福部南投醫院醫師的衛教文章（經媒體刊載），衛福部、國健署未公布全國發生率。AI 沒有替你決定是否沿用。',
    current:'約占所有懷孕的1–2%（衛福部南投醫院醫師衛教）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'1–2%', value:'醫師衛教（2023）', note:'衛福部南投醫院婦產科醫師，經早安健康刊載（目前採用）'},
      {label:'未公布', value:'官方全國統計', note:'衛福部、國健署未發布子宮外孕年度發生率'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'異位妊娠是什麼？驗孕陽性後腹痛出血，別等到破裂才就醫',
    update_date:'2026/11/20',
    intro:'異位妊娠俗稱子宮外孕，是受精卵在子宮腔以外的地方著床，約95%發生在輸卵管。據衛福部南投醫院婦產科醫師衛教，子宮外孕約占所有懷孕的1–2%，部分患者早期沒有明顯症狀，一旦輸卵管破裂可能大量內出血而危及生命。本文整理異位妊娠的警訊、高風險族群，以及如何透過早期產檢及早發現。',
    sections:[
      {heading:'異位妊娠的3大警訊',format:'table',table:TABLE},
      {heading:'哪些人風險較高',format:'bullets',items:[
        '曾有骨盆腔發炎、輸卵管沾黏或動過輸卵管手術（含結紮）者。',
        '曾經發生過子宮外孕者，再次發生的風險較高。',
        '吸菸者；子宮內膜異位症或接受人工生殖者也應與醫師討論孕期追蹤。'
      ]},
      {heading:'早期發現與治療',format:'bullets',items:[
        '國健署建議懷孕初期於第8及第12週產檢，並提供孕期前、中、後各1次公費超音波，可確認胚胎是否在子宮內。',
        '早期診斷且情況穩定者，可由醫師評估以藥物治療；已破裂或大量出血者須緊急手術。',
        '治療後需依醫囑抽血追蹤，再次懷孕時應及早就醫確認著床位置。',
        '出現突發劇痛、頭暈或昏倒，應立即撥打119或到急診，不要等待。'
      ]}
    ],
    think_tank_view:'異位妊娠的關鍵不是「能不能預防」，而是「能不能早一步發現」。驗孕陽性後盡早接受第一次產檢、確認胚胎位置，並把「腹痛＋出血」視為需要就醫的訊號，就能大幅降低輸卵管破裂的風險。家人也要知道這些警訊，緊急時才能即時協助送醫。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'發生率標明為醫院醫師衛教，產檢時程引自衛福部／國健署新聞稿，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['約95%發生在輸卵管、發生率1–2%出自衛福部南投醫院醫師衛教（二手）','產檢時程與3次公費超音波取自衛福部2024、2025年新聞稿'],
      layout_reason:'先用表格對照警訊，再說明高風險族群，最後給早期產檢與就醫做法，依「認得→評估→行動」排序。',
      tone:'專業易懂', tone_reason:'孕期急症需要精確、可對照的資訊，避免造成孕婦恐慌。',
      to_verify:['國內子宮外孕全國發生率無官方統計，1–2%為醫師衛教數字']},
    decision_points:[DP_RATE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'驗到兩條線卻肚子痛？認識子宮外孕，這些警訊要就醫',
    update_date:'2026/11/20',
    intro:'驗孕出現兩條線是開心的事，但如果同時肚子痛、有出血，就要想到「子宮外孕」的可能。子宮外孕也叫異位妊娠，是胚胎跑到子宮外面著床，大多卡在輸卵管。據衛福部南投醫院婦產科醫師衛教，每100次懷孕大約有1到2次是子宮外孕。早點產檢、早點發現，就能多一分安心。',
    sections:[
      {heading:'這3種狀況，要特別留意',format:'table',table:TABLE},
      {heading:'我比較容易遇到嗎？',format:'bullets',items:[
        '以前有過骨盆腔發炎、輸卵管手術或結紮。',
        '曾經子宮外孕過，下次懷孕要更早去檢查。',
        '有抽菸習慣，或正在做人工生殖療程。'
      ]},
      {heading:'怎麼及早發現？',format:'bullets',items:[
        '驗到懷孕就去婦產科，國健署建議懷孕初期第8、12週產檢，公費超音波可以確認寶寶在不在子宮裡。',
        '早期發現時，醫師可能用藥物處理；如果已經破裂出血，就要緊急開刀。',
        '肚子突然劇痛、頭暈想昏倒，馬上打119或去急診。'
      ]}
    ],
    think_tank_view:'子宮外孕沒辦法完全預防，但可以「早一點知道」。驗到懷孕就安排第一次產檢，也讓另一半知道腹痛加出血是要立刻就醫的訊號，彼此照應最安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'發生率標明為醫院醫師衛教，產檢時程引自國健署，語氣親切但未淡化急症風險，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以準媽媽的情境問句帶出警訊、風險與行動。', tone:'生活親切', tone_reason:'給孕婦與家人閱讀，降低焦慮感。', to_verify:['1–2%為醫師衛教數字，非官方統計']},
    decision_points:[DP_RATE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'子宮外孕：3大警訊＋早期產檢',
    update_date:'2026/11/20',
    intro:'異位妊娠（子宮外孕）約95%發生在輸卵管，破裂時可能大量內出血。驗孕陽性後及早產檢、認得警訊是關鍵。',
    sections:[
      {heading:'3大警訊',format:'table',table:TABLE},
      {heading:'高風險族群',format:'bullets',items:[
        '骨盆腔發炎、輸卵管手術或結紮史。',
        '曾子宮外孕、吸菸者。'
      ]},
      {heading:'這樣做',format:'bullets',items:[
        '懷孕初期第8、12週產檢，用公費超音波確認著床位置。',
        '突發劇痛、頭暈立即急診。'
      ]}
    ],
    think_tank_view:'早一步產檢、早一步發現，是面對子宮外孕最實際的保護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'產檢時程引自國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊、族群、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['95%出自醫師衛教']},
    decision_points:[DP_RATE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'異位妊娠', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'驗孕陽性後腹痛出血要就醫', primary_visual:'約 95%', secondary_message:'及早產檢確認著床位置', action_priority:'認得警訊、第 8 週產檢'},
    headline_hook:'驗到懷孕卻腹痛？', headline_main:'子宮外孕 3 大警訊', title_accent:'3 大警訊',
    hero_message:'約 95% 在輸卵管', hero_support:'子宮外孕最常見的著床位置（醫師衛教）',
    knowledge_title:'3 大警訊', knowledge_note:'出現破裂徵兆，**立即急診**',
    knowledge_cards:[
      {label:'不正常出血', icon:'check', lines:['與月經不同的出血','或褐色分泌物']},
      {label:'下腹疼痛', icon:'pressure', lines:['多為單側悶痛','按壓時加劇']},
      {label:'破裂徵兆', icon:'heart', lines:['突發劇痛、肩膀痛','頭暈、冒冷汗']}
    ],
    primary_stat:{value:'3 次', label:'孕期公費超音波', note:'國健署：孕期前、中、後各 1 次'},
    secondary_stats:[
      {value:'96%', label:'113 年公費產檢利用率'},
      {value:'12 人', label:'114 年孕產婦死亡'}
    ],
    action_title:'驗孕陽性後這樣做',
    action_cards:[
      {key:'檢', text:'第 8、12 週產檢，確認胚胎在子宮內'},
      {key:'看', text:'腹痛加出血，盡快回婦產科'},
      {key:'急', text:'劇痛、頭暈或昏倒立即撥打 119'},
      {key:'追', text:'曾子宮外孕者，下次懷孕更早檢查'}
    ],
    carousel_suggestion:{reason:'若想把警訊、風險與產檢時程分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'子宮外孕警訊', headline_main:'這 3 種狀況要就醫'},
      {layout_type:'knowledge', headline_hook:'高風險族群', headline_main:'這些人更要早產檢'},
      {layout_type:'action', headline_hook:'驗孕陽性後', headline_main:'第 8 週就去產檢'}]},
    hashtags:['異位妊娠','子宮外孕','產前檢查','女性健康'],
    sources:['衛生福利部','衛生福利部國民健康署','衛福部南投醫院'],
    illustration_category:'screening-checkup',
    illustration:{topic:'異位妊娠', audience:'準備懷孕與懷孕初期女性', scene:'一位女性在婦產科診間接受超音波檢查，醫師指著螢幕說明',
      emotion:'安心、被照顧', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A woman having an early pregnancy ultrasound in a clinic while a doctor points at the screen and explains, reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['約95%在輸卵管出自衛福部南投醫院醫師衛教','公費超音波與產檢利用率取自衛福部2025年新聞稿','孕產婦死亡取自114年死因統計表32'],
      layout_reason:'核心是「認得警訊、及早產檢」，選 knowledge：3 大警訊放中段，超音波與產檢數字退到下方，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'孕期急症資訊需清楚，避免恐嚇。',
      to_verify:['「12 人」為全部孕產婦死亡，非僅子宮外孕']},
    decision_points:[Object.assign({}, DP_RATE, {current:'約 95% 在輸卵管（醫師衛教）'})],
    content_check_note:'產檢數字引自衛福部，著床位置標明醫師衛教，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'異位妊娠',
    collect:{
      summary:'異位妊娠（子宮外孕）是孕期初期的急症，輸卵管破裂可能大量內出血；國健署14次公費產檢與3次公費超音波提供早期確認著床位置的機會，「驗孕陽性後及早產檢、認得腹痛出血警訊」是值得長期溝通的女性健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約95%的子宮外孕發生在輸卵管：衛福部南投醫院婦產科醫師衛教指出，子宮外孕約占所有懷孕的百分之一到二，其他少見位置包括子宮頸、卵巢與腹腔（2023年經媒體刊載，非官方統計）。',tag:'市場觀察',source:{name:'早安健康：驗孕才剛看到兩條線，子宮外孕在這位置（衛福部南投醫院）',url:'https://edh.tw/articles/uGhqXDb'}},
        {item:'年度趨勢方向',desc:'孕產婦死亡12人：依2025年（114年）死因統計，全年孕產婦死亡12人，出生數10萬5,676人，因人數未滿20人，死亡率不具統計可靠性（統計涵蓋全部孕產相關死因，非僅子宮外孕）。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'公費產檢利用率達96%以上：國健署提供14次公費產檢與孕期前、中、後各1次公費超音波，2024年（113年）利用率達96%以上，懷孕初期即可確認胚胎位置與心跳。',tag:'官方統計',source:{name:'衛生福利部：14次公費產檢 給媽咪與寶寶最安心的守護',url:'https://mohw.gov.tw/cp-16-83667-1.html'}},
        {item:'好發族群年齡層',desc:'逾3成新生兒為35歲以上產婦所生：國健署引內政部統計，2023年出生的13萬3千餘名嬰兒中31.97%為35歲以上產婦所生，高齡與人工生殖族群是孕期初期追蹤的重點。',tag:'官方統計',source:{name:'衛生福利部：定期產檢4要訣 助安心懷孕 平安生產',url:'https://mohw.gov.tw/cp-16-80145-1.html'}}
      ],
      product_view:['機會：孕期急症與手術是女性與生育保障常被詢問的項目，可說明住院、手術醫療保障的條款範圍，協助保戶理解自身保障。','機會：可結合產檢提醒與孕期衛教服務，提升準父母對保障規劃的信任感。','風險：須依保單條款如實說明孕期相關除外與等待期，不可暗示所有孕期狀況皆可理賠。'],
      marketing_view:['機會：備孕與懷孕初期族群對「驗孕後該做什麼」資訊需求高，可用產檢時程作為衛教主軸。','機會：伴侶與家人是急症就醫的關鍵協助者，可設計給準爸爸看的警訊提醒。','風險：孕期題材敏感，避免恐懼訴求，以「早產檢、早發現」收尾。'],
      alert_level:'low',
      alert_reason:'屬長期婦產衛教議題，無單一時效性事件，適合納入女性與家庭健康的年度溝通規劃。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('子宮外孕約占所有懷孕的1–2%','SOURCE_EVIDENCE','secondary_citation',
          '文中已註明出自衛福部南投醫院醫師衛教，但這是單一醫師經媒體刊載的說法，衛福部、國健署未公布全國發生率；讀者可能誤認為官方統計。','medium','yes',
          '國內子宮外孕發生率的官方或研究出處（如健保資料庫研究）。','no','confirm','數字與國際教科書常見範圍一致，但屬二手引述。',
          '子宮外孕約占所有懷孕的1–2%（醫師衛教說法，國內無官方統計）'),
        F('每100次懷孕大約有1到2次是子宮外孕','SOURCE_EVIDENCE','secondary_citation',
          '生活親切版改寫成「每100次懷孕」的說法，語氣更像確定統計，但原始出處只是單一醫師衛教。','low','no',
          null,'no','clarify','建議保留「醫師衛教」的限定。',
          '醫師衛教提到，每100次懷孕大約有1到2次是子宮外孕，國內目前沒有官方統計'),
        F('約95%發生在輸卵管','SOURCE_EVIDENCE','source_unstated',
          '「約95%」所在的句子沒有標示出處（專業易懂版要到下一句才出現醫師衛教，簡潔有力版則完全沒寫），讀者可能以為是官方數字。','low','no',
          null,'no','clarify','數字本身與醫師衛教一致。',
          '約95%發生在輸卵管（醫師衛教）'),
        F('可由醫師評估以藥物治療','MEDICAL_INTERPRETATION','condition_unstated',
          '藥物治療有週數、腫塊大小與生命徵象穩定等條件限制，只寫「可由醫師評估」容易讓讀者以為多數人都能免手術。','low','no',
          null,'no','clarify','補充適用條件即可，不需列出藥名。',
          '可由醫師依週數、腫塊大小與身體狀況評估是否適合藥物治療')
      ],
      card:[
        F('114 年孕產婦死亡','MEDICAL_INTERPRETATION','scope_broader_than_topic',
          '卡面主題是子宮外孕，但「12 人」是全部孕產相關死因，讀者可能誤讀為子宮外孕死亡人數。','medium','no',
          null,'no','clarify','屬統計範圍標示問題，不代表數據錯誤。',
          '114 年孕產婦死亡（全部孕產死因）'),
        F('子宮外孕最常見的著床位置（醫師衛教）','SOURCE_EVIDENCE','secondary_citation',
          '主數字出自單一醫院醫師衛教，卡面只寫「醫師衛教」，未標示醫院與年份，分享後難以回溯。','low','no',
          null,'no','clarify','可補上醫院名稱與年份。',
          '子宮外孕最常見的著床位置（衛福部南投醫院醫師衛教，2023）')
      ]
    },
    title_alts:[
      '異位妊娠是什麼？驗孕陽性後腹痛出血，別等到破裂才就醫',
      '驗到兩條線卻肚子痛？子宮外孕3大警訊與產檢時程',
      '懷孕初期必看：子宮外孕的高風險族群與早期發現'
    ],
    card_title_alts:[
      ['驗到懷孕卻腹痛？','子宮外孕 3 大警訊'],
      ['懷孕初期必看','第 8 週產檢確認著床'],
      ['腹痛加出血別忍','認識子宮外孕']
    ],
    data_addon:[
      '國健署建議懷孕初期於第8及第12週產檢，中期每月1次，後期每2週1次，第37週起每週1次。',
      '國健署提供14次公費產檢、3次一般超音波、2次產前衛教指導，2024年產檢利用率達96%以上。',
      '114年孕產婦死亡12人，因人數未滿20人，死亡率以*表示、不具統計可靠性。'
    ],
    cta:'驗到懷孕就預約第一次產檢，並和另一半一起記住「腹痛＋出血要就醫」。'
  });
})();
