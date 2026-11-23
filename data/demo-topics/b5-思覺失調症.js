/* v6 示範主題：思覺失調症（B5 心理健康與精神疾患）
   查證日期：2026-11-20。數據來源：聯合報 2026-07-27 引述健保署統計（114年精神相關疾病就醫人數、慢性精神病重大傷病卡）、
   衛福部 111-05-03 健保思覺失調症方案新聞稿（110年就醫人數）、衛福部 115-07-30 精神衛生法新制新聞稿、聯合報 2026-05-14 八里療養院醫師受訪。
   重大傷病人數：健保署「重大傷病各疾病別有效領證統計表」115年9月（資料日期115/10/1；同一網址每月更新）。
   參考方向：健康智庫〈思覺失調症〉2023/08。 */
(function(){
  const REFS = [
    {title:'全民健康保險重大傷病各疾病別有效領證統計表',source:'衛生福利部中央健康保險署',url:'https://www.nhi.gov.tw/ch/dl-17701-bd02ea37ebc946f4af6246b85b085013-1.pdf'},
    {title:'精神衛生法新制 法院裁定強制住院治療8/1施行',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-87291-1.html'},
    {title:'健保增列思覺失調症病人出院後訪視服務，提升病人延續性照護',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-69339-1.html'},
    {title:'台灣去年因精神相關疾病就診逾170萬人 衛福部：疾病汙名化是最大挑戰',source:'聯合報',url:'https://udn.com/news/story/7266/9652507'},
    {title:'思覺失調、失智症容易混淆？醫：老年發病最容易誤診',source:'聯合報',url:'https://udn.com/news/story/7266/9503055'},
    {title:'安心專線改4碼更好記! 1925依舊愛我 持續服務你和我',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48244-1.html'}
  ];
  const TABLE = {headers:['症狀類型','可能的表現'], rows:[
    ['幻覺','聽到別人聽不到的聲音，例如有人在批評或命令自己'],
    ['妄想','堅信被跟蹤、被監視或被陷害，旁人解釋也難以動搖'],
    ['思考與言語混亂','說話跳躍、前後不連貫，行為變得難以理解'],
    ['負性症狀','退縮、不想與人互動、缺乏動機、情緒表達變少']
  ]};
  const TAGS = ['思覺失調症','精神健康','早期就醫','去汙名化','1925安心專線'];

  const DP_COUNT = {id:'dp-sz-count', type:'data_scope', title:'思覺失調症人數有兩種說法',
    desc:'健保署統計的「約9.8萬人」是領有思覺失調症重大傷病證明的人數；八里療養院醫師引述國內研究的「14萬至15萬人」是接受醫療照護的估計。兩者口徑不同，AI 沒有替你決定要用哪一個。',
    current:'約9.8萬人（領有重大傷病證明，健保署115年9月）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約9.8萬人', value:'重大傷病證明持有者', note:'健保署重大傷病統計，115年9月（目前採用）'},
      {label:'14萬至15萬人', value:'接受醫療照護者（估計）', note:'八里療養院醫師引述國內研究，盛行率約千分之六'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'認識思覺失調症：早期警訊、治療與家人支持',
    update_date:'2026/11/20',
    intro:'思覺失調症是一種影響思考、知覺與行為的精神疾病，並非性格問題，也不是「被附身」。據聯合報2026年引述健保署統計，114年因精神相關疾病就醫者達170.2萬人；依健保署重大傷病統計，截至115年9月，領有思覺失調症重大傷病證明者有9萬8,279人。這個疾病好發於15至30歲，越早就醫、持續治療，越有機會穩定回到學業、工作與家庭生活。',
    sections:[
      {heading:'常見的4類症狀',format:'table',table:TABLE},
      {heading:'為什麼要及早就醫',format:'bullets',items:[
        '早期常先出現睡眠混亂、成績或工作表現下滑、變得孤立等變化，容易被誤認為壓力大或叛逆。',
        '目前治療以抗精神病藥物為主，搭配心理社會治療與復健；病情穩定後仍需依醫囑持續治療，自行停藥容易復發。',
        '健保自99年起推動「思覺失調症醫療給付改善方案」，111年再增列出院後追蹤訪視，加強出院後的延續照護。'
      ]},
      {heading:'家人與社會可以怎麼做',format:'bullets',items:[
        '以平穩的語氣陪伴、不和症狀內容爭辯，鼓勵並陪同就醫。',
        '協助規律服藥與回診，留意睡眠、壓力與復發前兆。',
        '精神衛生法新制自115年8月1日起施行，強制住院改由法院裁定，強調病人權益與社區支持。',
        '照顧者也需要喘息；情緒困擾時可撥打24小時免付費的1925安心專線。'
      ]}
    ],
    think_tank_view:'思覺失調症最大的阻礙往往不是疾病本身，而是汙名讓人不敢就醫、家人不敢說出口。把它當成需要長期照護的慢性疾病來看待：早一點就醫、穩定治療、家人一起學習與病共處，病人就有機會維持工作與生活功能。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'重大傷病人數引自健保署統計、就醫人數標明為媒體引述健保署，政策引自衛福部新聞稿，未使用療效保證用語，未涉及具體商品，已附求助專線。',
    ai_rationale:{basis:['沿用步驟1洞察：114年精神相關疾病就醫170.2萬人（聯合報引述健保署）、思覺失調症重大傷病證明9萬8,279人（健保署115年9月）','精神衛生法第五章115年8月1日施行（衛福部）'],
      layout_reason:'先用表格讓讀者認得4類症狀，再說明為何要及早就醫與持續治療，最後給家人具體做法與求助管道。',
      tone:'專業易懂', tone_reason:'精神疾病衛教需要精確、去汙名，避免獵奇或恐懼。',
      to_verify:['170.2萬人為媒體引述健保署數字，健保署原始統計待查','「好發於15至30歲」為醫師受訪說法']},
    decision_points:[DP_COUNT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'家人最近怪怪的？認識思覺失調症，陪他走向治療',
    update_date:'2026/11/20',
    intro:'思覺失調症是一種會影響想法和感覺的疾病，不是個性不好，也不是中邪。據聯合報2026年引述健保署統計，114年因精神相關疾病看診的人超過170萬，而健保署統計，到115年9月領有思覺失調症重大傷病證明的約9.8萬人。它常在15到30歲出現，越早看醫生、好好治療，越有機會把生活過回來。',
    sections:[
      {heading:'這4種變化，要多留意',format:'table',table:TABLE},
      {heading:'為什麼不要等？',format:'bullets',items:[
        '一開始可能只是睡不好、成績或工作變差、不想出門，很容易被當成壓力大。',
        '治療主要靠藥物，加上心理與復健的協助；穩定了也要照醫師說的繼續治療，自己停藥很容易再發作。',
        '健保有專門的思覺失調症照護方案，出院後也有人到家裡追蹤關心。'
      ]},
      {heading:'身為家人，可以這樣做',format:'bullets',items:[
        '用平穩的語氣陪伴，不跟他爭論聽到或相信的內容，陪他一起去看醫生。',
        '幫忙提醒吃藥、回診，留意睡眠和壓力的變化。',
        '從115年8月1日起，強制住院改由法院決定，更重視病人的權益。',
        '照顧的人也要照顧自己，心裡累的時候可以打1925安心專線，24小時免付費。'
      ]}
    ],
    think_tank_view:'很多家庭面對思覺失調症時，最難的是說出口。其實它就像其他慢性病一樣，需要長期照顧，也能慢慢穩定下來。多一點理解、少一點標籤，就是給病人和家人最大的支持。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字引自健保署統計並標明時點，政策引自衛福部，語氣親切但未淡化治療必要性，未使用療效保證用語，未涉及具體商品，已附求助專線。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家人的角度帶出症狀、及早就醫與陪伴方式。', tone:'生活親切', tone_reason:'給病人家屬與一般民眾閱讀，降低汙名與距離感。', to_verify:['170.2萬人為媒體引述健保署數字']},
    decision_points:[DP_COUNT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'思覺失調症：4類症狀＋家人3件事',
    update_date:'2026/11/20',
    intro:'依健保署統計，截至115年9月領有思覺失調症重大傷病證明者約9.8萬人。好發於15至30歲，及早就醫、持續治療是穩定的關鍵。',
    sections:[
      {heading:'4類症狀',format:'table',table:TABLE},
      {heading:'治療重點',format:'bullets',items:[
        '藥物治療搭配心理社會治療與復健。',
        '穩定後仍依醫囑持續治療，勿自行停藥。'
      ]},
      {heading:'家人這樣做',format:'bullets',items:[
        '平穩陪伴、不爭辯症狀內容、陪同就醫。',
        '協助規律服藥與回診。',
        '照顧者情緒困擾可撥1925安心專線。'
      ]}
    ],
    think_tank_view:'思覺失調症是可以治療的慢性疾病；及早就醫、持續治療與家人支持，是穩定生活的三個關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字引自健保署統計並標明時點，未使用療效保證用語，未涉及具體商品，已附求助專線。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為症狀、治療、家人行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['170.2萬人為媒體引述健保署數字']},
    decision_points:[DP_COUNT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'思覺失調症', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'思覺失調症是可治療的疾病', primary_visual:'約 9.8 萬人', secondary_message:'好發 15–30 歲，及早就醫', action_priority:'認得症狀、持續治療、家人支持'},
    headline_hook:'不是個性問題', headline_main:'認識思覺失調症 4 類症狀', title_accent:'4 類症狀',
    hero_message:'好發 15–30 歲', hero_support:'越早就醫、持續治療，越有機會穩定',
    knowledge_title:'4 類常見症狀', knowledge_note:'出現變化，**陪同及早就醫**',
    knowledge_cards:[
      {label:'幻覺', icon:'chat', lines:['聽到別人聽不到的聲音']},
      {label:'妄想', icon:'brain', lines:['堅信被跟蹤或被陷害']},
      {label:'思考混亂', icon:'brain', lines:['說話跳躍、不連貫']},
      {label:'負性症狀', icon:'home', lines:['退縮、缺乏動機']}
    ],
    primary_stat:{value:'約 9.8 萬人', label:'思覺失調症重大傷病證明', note:'健保署統計：9萬8,279人（115 年 9 月）'},
    secondary_stats:[
      {value:'170.2 萬人', label:'114 年精神相關疾病就醫'},
      {value:'115/8/1', label:'強制住院改法院裁定'}
    ],
    action_title:'家人可以這樣做',
    action_cards:[
      {key:'陪', text:'平穩陪伴，不爭辯症狀內容'},
      {key:'醫', text:'鼓勵並陪同及早就醫'},
      {key:'續', text:'協助規律服藥與回診，勿自行停藥'},
      {key:'援', text:'照顧者累了，撥 1925 安心專線'}
    ],
    carousel_suggestion:{reason:'若想把症狀、治療與家人支持分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'不是個性問題', headline_main:'思覺失調症 4 類症狀'},
      {layout_type:'data', headline_hook:'精神健康就醫', headline_main:'114 年逾 170 萬人'},
      {layout_type:'action', headline_hook:'家人可以這樣做', headline_main:'陪伴、就醫、持續治療'}]},
    hashtags:['思覺失調症','精神健康','去汙名化','1925安心專線'],
    sources:['衛生福利部','衛生福利部中央健康保險署'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'思覺失調症家人支持', audience:'病人家屬與年輕族群', scene:'一位年輕人和家人並肩坐在長椅上，家人溫和地陪他看著前方的診所指示牌',
      emotion:'安心、被理解', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young adult sitting on a bench beside a supportive family member who gently points toward a clinic sign, calm and reassuring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：思覺失調症重大傷病證明9萬8,279人（健保署115年9月）','精神衛生法第五章115年8月1日施行（衛福部）'],
      layout_reason:'核心是「認得症狀、及早就醫」，選 knowledge：4 類症狀放中段當主角，人數退到下方，最後給家人 4 個行動與求助專線。',
      tone:'專業易懂', tone_reason:'去汙名、具體可行，避免獵奇描寫。',
      to_verify:['重大傷病證明人數不含未申請證明的病人']},
    decision_points:[Object.assign({}, DP_COUNT, {current:'約 9.8 萬人（重大傷病證明，115 年 9 月）'})],
    content_check_note:'人數引自健保署重大傷病統計並標明月份，政策引自衛福部，未使用療效保證用語，未涉及具體商品，已附求助專線。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'思覺失調症',
    collect:{
      summary:'精神相關疾病就醫人數逐年增加，思覺失調症是慢性精神病重大傷病的最大宗；精神衛生法新制於2026年8月1日全面施行、強制住院改由法院裁定，「去汙名、及早就醫、社區支持」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約9.8萬人領有思覺失調症重大傷病證明：依健保署重大傷病統計，截至115年9月領有思覺失調症重大傷病證明者9萬8,279人，是慢性精神病重大傷病中人數最多的一類（未申請證明的病人不在其中）。',tag:'官方統計',source:{name:'衛生福利部中央健康保險署：全民健康保險重大傷病各疾病別有效領證統計表（115年9月）',url:'https://www.nhi.gov.tw/ch/dl-17701-bd02ea37ebc946f4af6246b85b085013-1.pdf'}},
        {item:'年度趨勢方向',desc:'170.2萬人因精神相關疾病就醫：據聯合報2026年7月引述健保署統計，114年因精神相關疾病就醫170.2萬人，較健保署公布的110年145.4萬人持續增加（範圍含所有精神相關疾病，非僅思覺失調症）。',tag:'官方統計',source:{name:'聯合報：台灣去年因精神相關疾病就診逾170萬人（引述健保署統計）',url:'https://udn.com/news/story/7266/9652507'}},
        {item:'政策動向',desc:'2026年8月1日起強制住院改由法院裁定：精神衛生法第五章新制施行，由法官與精神科專科醫師、病人權益促進團體代表組成合議庭審理，強化病人權益保障。',tag:'官方統計',source:{name:'衛生福利部：精神衛生法新制 法院裁定強制住院治療8/1施行',url:'https://www.mohw.gov.tw/cp-16-87291-1.html'}},
        {item:'好發族群年齡層',desc:'好發於15至30歲：衛福部八里療養院醫師受訪指出，思覺失調症好發於15至30歲，並引述國內研究估計盛行率約千分之六。',tag:'市場觀察',source:{name:'聯合報：思覺失調、失智症容易混淆？醫：老年發病最容易誤診',url:'https://udn.com/news/story/7266/9503055'}}
      ],
      product_view:['機會：思覺失調症屬慢性精神病重大傷病範圍，可說明長期治療、住院與失能對家庭經濟的影響，協助理解保障規劃。','機會：照顧者壓力大，可結合家屬支持與心理健康資源介紹，展現陪伴型價值。','風險：避免以疾病標籤作負面描述或暗示特定族群不可投保；核保與理賠說明須依條款如實揭露。'],
      marketing_view:['機會：精神衛生法新制上路是2026年的公共議題，可藉機做去汙名、認識症狀的衛教內容。','機會：好發於15至30歲，家長與年輕族群是核心溝通對象，可用「家人怎麼陪」切入。','風險：避免獵奇、暴力連結的敘事與圖像；內容一律附1925等求助管道。'],
      alert_level:'medium',
      alert_reason:'精神衛生法新制於2026年8月施行，社會討論度高；屬長期議題，適合在世界精神衛生日（10月10日）前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('領有思覺失調症重大傷病證明者有9萬8,279人','MEDICAL_INTERPRETATION','certificate_holders_not_prevalence',
          '這是領有重大傷病證明的人數，未申請證明或尚未確診的病人不在其中；文中直接接在「這個疾病」的介紹前，讀者可能當成全國病人總數。','medium','no',
          null,'no','clarify','數字正確，屬統計口徑說明。',
          '領有思覺失調症重大傷病證明者有9萬8,279人（未申請證明的病人不在其中）',
          ['領有思覺失調症重大傷病證明的約9.8萬人','領有思覺失調症重大傷病證明者約9.8萬人']),
        F('114年因精神相關疾病就醫者達170.2萬人','MEDICAL_INTERPRETATION','scope_broader_than_topic',
          '「精神相關疾病」涵蓋憂鬱、焦慮、失眠等多種疾病，放在思覺失調症文章開頭，讀者可能誤以為170萬人都是思覺失調症。','low','no',
          null,'no','clarify','補一句說明統計範圍即可。',
          '114年因各類精神相關疾病（含憂鬱、焦慮等）就醫者達170.2萬人'),
        F('這個疾病好發於15至30歲','SOURCE_EVIDENCE','expert_opinion_unattributed',
          '好發年齡出自八里療養院醫師受訪說法，文中未標示出處，讀者會以為是官方統計。','low','no',
          null,'no','clarify','屬醫師臨床經驗與文獻共識，補上說法來源即可。',
          '據衛福部八里療養院醫師說明，這個疾病好發於15至30歲',
          ['好發於15至30歲','它常在15到30歲出現']),
        F('心理社會治療','TERMINOLOGY_LANGUAGE','term_unexplained',
          '「心理社會治療」未說明包含哪些內容，一般讀者不易理解。','low','no',
          null,'no','clarify','可補例子，如社交技巧訓練、職能復健、家屬衛教。',
          '心理社會治療（如社交技巧訓練、職能復健、家屬衛教）')
      ],
      card:[
        F('思覺失調症重大傷病證明','MEDICAL_INTERPRETATION','certificate_holders_not_prevalence',
          '主數字只計入領有重大傷病證明者，卡面讀者可能誤讀為全國病人總數。','medium','no',
          null,'no','clarify','屬口徑標示問題，不代表數據錯誤。',
          '思覺失調症重大傷病證明（不含未申請者）'),
        F('好發 15–30 歲','SOURCE_EVIDENCE','expert_opinion_unattributed',
          '主視覺旁的好發年齡未標示出處，屬醫師受訪說法而非官方統計。','low','no',
          null,'no','clarify','補出處即可。',
          '好發 15–30 歲（醫師說明）')
      ]
    },
    title_alts:[
      '認識思覺失調症：早期警訊、治療與家人支持',
      '家人最近怪怪的？認識思覺失調症，陪他走向治療',
      '思覺失調症不是個性問題：4類症狀與及早就醫的理由'
    ],
    card_title_alts:[
      ['不是個性問題','認識思覺失調症 4 類症狀'],
      ['家人最近怪怪的？','思覺失調症警訊一次看'],
      ['好發 15–30 歲','及早就醫、持續治療']
    ],
    data_addon:[
      '健保署重大傷病統計（115年9月）：領有思覺失調症重大傷病證明9萬8,279人。',
      '健保署110年統計：因精神相關疾病就醫145.4萬人，較101年的94.0萬人成長54.8%（衛福部111年新聞稿）。',
      '健保思覺失調症醫療給付改善方案自99年推動，111年5月起增列出院後追蹤訪視與居家追蹤訪視。',
      '精神衛生法新制強制住院審理由法官1人與精神科專科醫師、病人權益促進團體代表各1人組成合議庭。'
    ],
    cta:'如果身邊有人最近出現睡眠混亂、退縮或說話不連貫，這週就陪他預約一次身心科門診；照顧者累了，記得撥1925安心專線。'
  });
})();
