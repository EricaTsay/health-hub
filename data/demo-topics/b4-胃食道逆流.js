/* v6 示範主題：胃食道逆流（B4 消化・肝膽・呼吸）
   查證日期：2026-11-20。數據來源：衛福部（食藥署）〈胃食道逆流怎麼辦-從生活型態及藥品治療來改善〉（112/12/06）、
   醫藥品查驗中心〈福星定膜衣錠醫療科技評估報告〉（健保署網站，引用盛行率約8.5%、糜爛性食道炎新發個案推估）、
   衛福部〈制酸劑減少胃液分泌 腸胃道感染風險將增加為五倍〉（健保資料庫研究）。
   註：國內胃食道逆流盛行率與就醫人數查無官方統計，只採評估報告中標明不確定性的推估值。
   參考方向：健康智庫〈腸胃道健康－胃炎與胃食道逆流〉2026/05。 */
(function(){
  const REFS = [
    {title:'胃食道逆流怎麼辦-從生活型態及藥品治療來改善',source:'衛生福利部食品藥物管理署',url:'https://www.mohw.gov.tw/cp-16-76856-1.html'},
    {title:'福星定膜衣錠醫療科技評估報告',source:'財團法人醫藥品查驗中心（健保署網站）',url:'https://www.nhi.gov.tw/ch/dl-11606-f5870092ed7b49b89e841981ccd46b4b-1.pdf'},
    {title:'制酸劑減少胃液分泌 腸胃道感染風險將增加為五倍',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-20582-1.html'}
  ];
  const TABLE = {headers:['藥物類別','作用與注意'], rows:[
    ['傳統制酸劑','中和胃酸、快速緩解，作用時間短'],
    ['胃酸分泌抑制劑','包括H2阻斷劑、氫離子幫浦抑制劑（PPI）等，PPI是目前主流藥品'],
    ['輔助藥品','胃食道黏膜保護劑、胃腸蠕動劑'],
    ['用藥提醒','依醫師處方使用，有疑問諮詢藥師，勿自行長期購買服用']
  ]};
  const TAGS = ['胃食道逆流','火燒心','腸胃健康','生活習慣','用藥安全'];

  const DP_EST = {id:'dp-gerd-est', type:'data_scope', title:'盛行率只有評估報告的推估',
    desc:'約8.5%的盛行率出自醫藥品查驗中心評估報告的引用，報告本身註明計算方式有不確定性；國內查無官方公布的胃食道逆流盛行率或就醫人數。AI 在收集頁標「推估」，文章與圖卡不放比例。',
    current:'國內胃食道逆流盛行率查無官方統計',
    options:[{label:'沿用目前資料', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'火燒心、嘔酸水？胃食道逆流的成因、生活調整與用藥原則',
    update_date:'2026/11/20',
    intro:'胃食道逆流是胃酸或胃內容物逆流到食道，造成胸口灼熱（火燒心）、嘔酸水、胃脹胸悶、喉嚨異物感，甚至慢性咳嗽。衛生福利部食品藥物管理署指出，下食道括約肌鬆弛與不良生活習慣是主要原因，肥胖、懷孕與長期緊張焦慮者風險較高。多數人可透過調整生活型態改善，症狀持續時應就醫並依醫囑用藥。',
    sections:[
      {heading:'常見原因',format:'bullets',items:[
        '三餐不正常、暴飲暴食、狼吞虎嚥、吃飽就躺平。',
        '常喝咖啡、酒、茶、碳酸飲料，或吃高糖、高油脂、過酸過辣的食物。',
        '抽菸、熬夜、作息不正常；中廣型身材或懷孕使腹壓升高。'
      ]},
      {heading:'生活這樣調整',format:'bullets',items:[
        '定時定量、細嚼慢嚥，避免吃太飽，飯後不要馬上躺下。',
        '減少咖啡、酒、碳酸飲料與油炸、辛辣食物。',
        '戒菸、規律作息，腰圍過粗者控制體重。'
      ]},
      {heading:'用藥原則',format:'table',table:TABLE}
    ],
    think_tank_view:'胃食道逆流很常見，也很容易「自己買胃藥吃一吃」就算了。但長期反覆、吞嚥困難或體重減輕，都需要就醫檢查。衛福部也曾提醒，使用制酸劑會減少胃酸的保護作用，健保資料庫研究顯示腸胃道感染風險上升；用藥應依醫師處方，生活習慣調整才是根本。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'成因與藥物分類引自食藥署112年衛教，未寫無官方來源的盛行率，未使用療效保證用語，未推薦特定藥品或廠牌。',
    ai_rationale:{basis:['症狀、成因與藥物分類取自食藥署112/12/06衛教','制酸劑感染風險取自衛福部新聞引述健保資料庫研究'],
      layout_reason:'先說明成因，再整理生活調整，最後以表格說明用藥原則。',
      tone:'專業易懂', tone_reason:'生活與用藥建議需清楚。',
      to_verify:['國內盛行率查無官方統計','制酸劑感染風險新聞年份較早']},
    decision_points:[DP_EST]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'吃飽就躺、愛喝咖啡？小心胃食道逆流找上門',
    update_date:'2026/11/20',
    intro:'胸口熱熱燒燒、嘴巴冒酸水、喉嚨卡卡，甚至一直咳，可能是胃食道逆流。食藥署提醒，吃太飽、吃完就躺、常喝咖啡碳酸飲料、熬夜，都容易讓胃酸往上跑。好消息是，很多人改掉這些習慣就會舒服很多。',
    sections:[
      {heading:'這些習慣容易逆流',format:'bullets',items:[
        '吃太快、吃太飽，吃完馬上躺。',
        '咖啡、茶、酒、汽水不離手，愛吃油炸辛辣。',
        '抽菸、熬夜，肚子大一圈。'
      ]},
      {heading:'改這幾件事',format:'bullets',items:[
        '三餐定時，吃七八分飽，飯後先別躺。',
        '少喝咖啡汽水、少吃油炸辣食。',
        '戒菸、早點睡，控制腰圍。'
      ]},
      {heading:'需要吃藥怎麼辦？',format:'table',table:TABLE}
    ],
    think_tank_view:'胃藥不是糖果，吃了舒服就一直吃不太好。如果常常火燒心，或吞東西卡卡、變瘦，請看腸胃科醫師。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料引自食藥署衛教，未使用療效保證用語，未推薦特定藥品或廠牌。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'從日常壞習慣切入。', tone:'生活親切', tone_reason:'給上班族與一般民眾閱讀。', to_verify:['盛行率查無官方統計']},
    decision_points:[DP_EST]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'胃食道逆流：成因、生活調整與用藥',
    update_date:'2026/11/20',
    intro:'火燒心、嘔酸水是胃食道逆流常見症狀，食藥署指出生活習慣是主要原因之一。',
    sections:[
      {heading:'成因',format:'bullets',items:[
        '暴飲暴食、吃飽就躺、咖啡酒、肥胖。'
      ]},
      {heading:'調整',format:'bullets',items:[
        '定時定量、飯後不躺、戒菸控重。'
      ]},
      {heading:'用藥',format:'table',table:TABLE}
    ],
    think_tank_view:'生活習慣調整是根本，用藥依醫囑。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料引自食藥署衛教，未使用療效保證用語，未推薦特定藥品或廠牌。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為成因、調整、用藥三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['盛行率查無官方統計']},
    decision_points:[DP_EST]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'胃食道逆流', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'火燒心不只是胃不舒服', primary_visual:'5 大症狀', secondary_message:'吃飽就躺最容易逆流', action_priority:'調整生活習慣'},
    headline_hook:'胸口熱熱燒燒？', headline_main:'胃食道逆流 5 大症狀', title_accent:'5 大症狀',
    hero_message:'胃酸往上跑', hero_support:'下食道括約肌鬆弛與生活習慣是主因（食藥署）',
    knowledge_title:'常見症狀', knowledge_note:'症狀反覆或吞嚥困難、變瘦，**請就醫**',
    knowledge_cards:[
      {label:'火燒心', lines:['胸口灼熱疼痛']},
      {label:'嘔酸水', lines:['酸水湧到嘴裡']},
      {label:'胃脹胸悶', lines:['飯後特別明顯']},
      {label:'喉嚨異物感', lines:['卡卡、想清喉嚨']},
      {label:'慢性咳嗽', lines:['久咳不癒']}
    ],
    action_title:'生活這樣改',
    action_cards:[
      {key:'吃', text:'定時定量、細嚼慢嚥，不吃太飽'},
      {key:'坐', text:'飯後不要馬上躺下'},
      {key:'少', text:'少咖啡、酒、汽水與油炸辛辣'},
      {key:'戒', text:'戒菸、規律作息、控制腰圍'}
    ],
    carousel_suggestion:{reason:'若想把症狀、生活調整與用藥原則分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'胸口熱熱燒燒？', headline_main:'胃食道逆流 5 大症狀'},
      {layout_type:'action', headline_hook:'生活這樣改', headline_main:'4 個習慣減少逆流'},
      {layout_type:'knowledge', headline_hook:'用藥原則', headline_main:'4 類藥物怎麼分'}]},
    hashtags:['胃食道逆流','火燒心','腸胃健康','生活習慣'],
    sources:['衛生福利部食品藥物管理署'],
    illustration_category:'general',
    illustration:{topic:'胃食道逆流', audience:'上班族', scene:'上班族飯後在辦公桌旁散步，桌上放著溫水而不是咖啡',
      emotion:'輕鬆、自在', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker taking a short walk after lunch beside their desk with a glass of warm water instead of coffee, relaxed mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['症狀與成因取自食藥署衛教'],
      layout_reason:'國內缺乏官方盛行率，核心是「認得症狀、改生活習慣」，選 knowledge：5 個症狀當主角，不放主數字。',
      tone:'專業易懂', tone_reason:'具體、可對照。',
      to_verify:['卡面未放比例，因查無官方統計']},
    content_check_note:'資料引自食藥署衛教，未使用療效保證用語，未推薦特定藥品或廠牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'胃食道逆流',
    collect:{
      summary:'胃食道逆流是常見的腸胃問題，症狀包括火燒心、嘔酸水與慢性咳嗽，與飲食作息密切相關；食藥署建議從生活型態與正確用藥改善，國內盛行率僅有評估報告中的推估值，是上班族與熟齡族群都關心的日常健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約8.5%（推估）：醫藥品查驗中心評估報告引用國內胃食道逆流盛行率約8.5%，並註明此數字計算方式有不確定性。',tag:'推估',source:{name:'醫藥品查驗中心：福星定膜衣錠醫療科技評估報告',url:'https://www.nhi.gov.tw/ch/dl-11606-f5870092ed7b49b89e841981ccd46b4b-1.pdf'}},
        {item:'年度趨勢方向',desc:'約96萬至141萬人（推估）：同一報告推估糜爛性食道炎新發個案由2015年約96萬人增至2019年約141萬人，屬評估報告推估值。',tag:'推估',source:{name:'醫藥品查驗中心：福星定膜衣錠醫療科技評估報告',url:'https://www.nhi.gov.tw/ch/dl-11606-f5870092ed7b49b89e841981ccd46b4b-1.pdf'}},
        {item:'政策動向',desc:'四類藥物：食藥署112年衛教將治療藥物分為傳統制酸劑、胃酸分泌抑制劑（含PPI）與黏膜保護劑、胃腸蠕動劑等輔助藥品，提醒用藥有疑問諮詢藥師。',tag:'官方統計',source:{name:'食藥署：胃食道逆流怎麼辦',url:'https://www.mohw.gov.tw/cp-16-76856-1.html'}},
        {item:'好發族群年齡層',desc:'約5倍感染風險：衛福部引用健保資料庫研究，正在使用制酸劑者腸胃道感染風險上升約5倍，提醒勿長期自行用藥。',tag:'官方統計',source:{name:'衛生福利部：制酸劑減少胃液分泌 腸胃道感染風險將增加為五倍',url:'https://www.mohw.gov.tw/cp-16-20582-1.html'}}
      ],
      product_view:['機會：生活習慣衛教可作為保戶健康促進內容。','機會：上班族族群對腸胃健康關注高，適合搭配飲食作息主題。','風險：避免推薦特定胃藥或保健品；不得暗示可自行長期用藥。'],
      marketing_view:['機會：年節大餐、尾牙後是溝通時機。','機會：「吃飽就躺」等生活情境容易引起共鳴。','風險：盛行率僅為推估，傳播時不宜強調數字。'],
      alert_level:'low',
      alert_reason:'屬常見慢性症狀議題，無急迫時效事件；適合在節慶聚餐季節溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('健保資料庫研究顯示腸胃道感染風險上升','SOURCE_EVIDENCE','study_unspecified',
          '未說明研究年份、對象與風險倍數，且該新聞年份較早，讀者無法判斷適用性。','low','yes',
          '衛福部制酸劑感染風險新聞的發布年份與研究出處。','no','confirm','新聞年份待確認。',
          '衛福部引述的健保資料庫研究顯示，正在使用制酸劑者腸胃道感染風險上升（研究年份待確認）'),
        F('多數人可透過調整生活型態改善','MEDICAL_INTERPRETATION','outcome_generalization',
          '「多數人」缺乏依據，引用的食藥署衛教並未提供改善比例。','low','no',
          null,'no','clarify','屬表達方式。',
          '許多人可透過調整生活型態減輕症狀',
          ['很多人改掉這些習慣就會舒服很多']),
        F('飯後不要馬上躺下','MEDICAL_INTERPRETATION','vague_term',
          '未說明飯後應間隔多久，讀者難以執行；引用的食藥署衛教亦未提供具體時間，建議補充專業建議來源。','low','no',
          null,'no','clarify','屬執行細節。',
          '飯後不要馬上躺下（間隔時間可詢問醫師）',
          ['飯後先別躺']),
        F('長期反覆、吞嚥困難或體重減輕，都需要就醫檢查','SOURCE_EVIDENCE','unsourced_claim',
          '就醫警訊未附出處，食藥署衛教僅寫「出現症狀應就醫」。','low','no',
          null,'no','clarify','屬出處補充。',
          '症狀長期反覆，或出現吞嚥困難、體重減輕時，應就醫檢查')
      ],
      card:[
        F('飯後不要馬上躺下','MEDICAL_INTERPRETATION','vague_term',
          '未說明飯後應間隔多久，讀者難以執行。','low','no',
          null,'no','clarify','屬執行細節。',
          '飯後不要馬上躺下，先散步或坐著'),
        F('症狀反覆或吞嚥困難、變瘦，**請就醫**','SOURCE_EVIDENCE','unsourced_claim',
          '警訊條件未在卡面 sources 中有依據。','low','no',
          null,'no','clarify','屬出處補充。',
          '症狀反覆或吞嚥困難、變瘦，**請就醫**評估')
      ]
    },
    title_alts:[
      '火燒心、嘔酸水？胃食道逆流的成因、生活調整與用藥原則',
      '吃飽就躺、愛喝咖啡？小心胃食道逆流找上門',
      '胃食道逆流5大症狀：從生活習慣開始改善'
    ],
    card_title_alts:[
      ['胸口熱熱燒燒？','胃食道逆流 5 大症狀'],
      ['吃飽就躺最傷','4 個習慣減少逆流'],
      ['火燒心別硬撐','生活調整與用藥原則']
    ],
    data_addon:[
      '鉀離子競爭性胃酸抑制劑（P-CAB）是近年新研發的胃酸分泌抑制劑。',
      '肥胖（中廣型身材）、懷孕與長期緊張焦慮者為高風險族群。',
      '胃食道逆流也可能表現為喉嚨異物感與慢性咳嗽。'
    ],
    cta:'這週試著把晚餐提早、吃七八分飽，飯後散步15分鐘再休息，並記錄火燒心的次數；若持續兩週以上，請掛腸胃科。'
  });
})();
