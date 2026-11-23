/* v6 示範主題：子宮內膜異位症（B7 女性・男性・生育與兒童）
   查證日期：2026-11-20。查無衛福部／國健署／健保署公開的子宮內膜異位症統計；數字為台灣子宮內膜異位症學會經媒體引述（二手），已標示並埋預審。
   來源：台灣英文新聞2026-03-13（世界子宮內膜異位日，台灣子宮內膜異位症學會）。
   參考方向：健康智庫〈子宮內膜異位症〉2023/10。 */
(function(){
  const REFS = [
    {title:'經痛別再忍！及早面對身體警訊 子宮內膜異位症平均拖6至8年才確診（台灣子宮內膜異位症學會）',source:'台灣英文新聞',url:'https://www.taiwannews.com.tw/zh/news/6320258'}
  ];
  const TABLE = {headers:['警訊','為什麼要注意'], rows:[
    ['經痛影響工作與日常','不是「忍一下就好」的正常經痛'],
    ['長期依賴止痛藥','止痛只壓住症狀，沒有找出原因'],
    ['症狀反覆出現','每個月都痛、越來越痛，應就醫評估'],
    ['經期伴隨腸胃不適','異位組織可能出現在骨盆腔以外的位置']
  ]};
  const TAGS = ['子宮內膜異位症','經痛','巧克力囊腫','生育規劃','女性健康'];

  const DP_DELAY = {id:'dp-endo-delay', type:'data_source', title:'「平均6至8年才確診」的出處',
    desc:'「平均6至8年才確診」出自2026年世界子宮內膜異位日的媒體報導，為記者整理的說法，報導未註明是國內研究或國際文獻。國內沒有官方的確診延遲統計，AI 沒有替你補上其他來源的數字。',
    current:'平均6至8年才確診（2026年媒體報導，台灣子宮內膜異位症學會活動）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'6–8 年', value:'確診延遲', note:'2026年媒體報導，未註明研究出處（目前採用）'},
      {label:'未公布', value:'官方統計', note:'衛福部、國健署無子宮內膜異位症確診延遲統計'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'經痛別再忍：子宮內膜異位症平均拖6至8年才確診',
    update_date:'2026/11/20',
    intro:'2026年世界子宮內膜異位日活動中，媒體報導指出子宮內膜異位症患者平均需要6至8年才會獲得正式診斷，許多人長期把劇烈經痛當成「體質」。台灣子宮內膜異位症學會理事長說明，超過9成女性曾出現月經逆流，其中約10%育齡女性無法有效清除逆流的內膜組織，可能形成子宮內膜異位症。本文整理需要就醫的警訊與照護方向。',
    sections:[
      {heading:'這些經痛警訊要就醫',format:'table',table:TABLE},
      {heading:'認識子宮內膜異位症',format:'bullets',items:[
        '子宮內膜組織長在子宮腔以外的地方，隨月經週期出血、發炎，造成疼痛。',
        '異位組織長在卵巢時，可能形成俗稱「巧克力囊腫」的卵巢囊腫。',
        '疾病可能影響生育規劃，有懷孕計畫者應及早與醫師討論。'
      ]},
      {heading:'就醫與追蹤',format:'bullets',items:[
        '學會建議，經痛影響工作與生活、長期依賴止痛藥或症狀反覆，應及早尋求專業評估。',
        '確診後依醫師評估選擇藥物或手術，並持續追蹤。',
        '青少女若經痛嚴重影響上學，家長也應陪同就醫，不要只叫她忍耐。'
      ]}
    ],
    think_tank_view:'「經痛很正常」是子宮內膜異位症延誤診斷最大的原因。痛到需要請假、每個月都要吃止痛藥，就是身體在提醒妳該找醫師了；早一點評估，不只是減少疼痛，也是替未來的生育規劃保留更多選擇。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明為學會與媒體報導，非官方統計；未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['平均6至8年才確診、約10%育齡女性（台灣英文新聞2026-03-13，學會活動報導）'],
      layout_reason:'先用表格列出就醫警訊，再說明疾病，最後給就醫與追蹤方向。',
      tone:'專業易懂', tone_reason:'女性健康資訊需去污名化、鼓勵就醫。',
      to_verify:['子宮內膜異位症無官方盛行率與就醫統計','6至8年為媒體整理說法，未註明研究出處']},
    decision_points:[DP_DELAY]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'每個月都痛到請假？經痛可能是子宮內膜異位症',
    update_date:'2026/11/20',
    intro:'很多女生從小被告訴「經痛是正常的，忍一下就好」。但如果痛到要請假、每個月都要吃止痛藥，可能是子宮內膜異位症。2026年的媒體報導指出，這個病平均要拖6到8年才被確診，很多人默默痛了好多年。',
    sections:[
      {heading:'這樣的經痛，不要再忍',format:'table',table:TABLE},
      {heading:'它是怎麼來的？',format:'bullets',items:[
        '子宮內膜跑到子宮外面生長，每次月經來都跟著出血、發炎。',
        '學會醫師說，大多數女生都有月經逆流，但約10%的人沒辦法清掉，就可能形成異位。',
        '長在卵巢的，常被叫做「巧克力囊腫」。'
      ]},
      {heading:'可以怎麼做？',format:'bullets',items:[
        '記錄每次經痛的程度和吃了幾顆止痛藥，帶去給醫師看。',
        '有懷孕計畫的人，早點和醫師討論。',
        '家裡女兒經痛到不能上學，陪她去看醫生。'
      ]}
    ],
    think_tank_view:'經痛不是女生必須默默承受的事。把每次的疼痛記下來，帶著紀錄去看婦產科，是幫自己發聲的第一步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明為學會與媒體報導，語氣親切且鼓勵就醫，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「經痛要不要忍」的情境帶出警訊與行動。', tone:'生活親切', tone_reason:'給年輕女性與家長閱讀。', to_verify:[]},
    decision_points:[DP_DELAY]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'經痛別忍：子宮內膜異位症',
    update_date:'2026/11/20',
    intro:'子宮內膜異位症平均6至8年才確診（2026年媒體報導）。經痛影響生活、長期吃止痛藥，應就醫評估。',
    sections:[
      {heading:'就醫警訊',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '記錄經痛程度與用藥。',
        '有生育計畫及早討論。'
      ]}
    ],
    think_tank_view:'經痛不是體質，及早評估才不會白白痛好幾年。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明媒體報導，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_DELAY]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'子宮內膜異位症', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'經痛影響生活就該就醫', primary_visual:'6–8 年', secondary_message:'平均拖 6 至 8 年才確診', action_priority:'記錄經痛、及早評估'},
    headline_hook:'每個月都痛到請假？', headline_main:'經痛別再忍', title_accent:'別再忍',
    hero_message:'平均拖 6–8 年才確診', hero_support:'2026 年世界子宮內膜異位日媒體報導',
    primary_stat:{value:'約 10%', label:'育齡女性無法清除逆流內膜', note:'台灣子宮內膜異位症學會（媒體引述）'},
    action_title:'經痛這樣面對',
    action_cards:[
      {key:'記', text:'記錄經痛程度與止痛藥用量'},
      {key:'看', text:'痛到影響工作生活就看婦產科'},
      {key:'談', text:'有生育計畫及早和醫師討論'},
      {key:'陪', text:'女兒經痛無法上學，陪她就醫'}
    ],
    notice:'長期依賴止痛藥**不是解方**，要找出疼痛原因。',
    carousel_suggestion:{reason:'若想把警訊、成因與就醫分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'這樣的經痛', headline_main:'不要再忍'},
      {layout_type:'knowledge', headline_hook:'子宮內膜異位症', headline_main:'是怎麼來的？'},
      {layout_type:'action', headline_hook:'經痛別再忍', headline_main:'記錄、就醫、討論'}]},
    hashtags:['子宮內膜異位症','經痛','生育規劃','女性健康'],
    sources:['台灣子宮內膜異位症學會（媒體引述）'],
    illustration_category:'general',
    illustration:{topic:'經痛就醫', audience:'育齡女性與青少女家長', scene:'一位年輕女性和媽媽一起在婦產科診間，向醫師說明經痛紀錄',
      emotion:'被理解、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young woman and her mother at a gynaecology clinic showing a period pain diary to a doctor, understood and reassured, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['6至8年、約10%取自台灣英文新聞2026-03-13學會活動報導'],
      layout_reason:'關鍵訊息是「經痛別忍、及早就醫」，選 action：4 個行動當主角，確診延遲當 hero，比例退到下方。',
      tone:'專業易懂', tone_reason:'鼓勵就醫、去污名化。',
      to_verify:['無官方統計']},
    decision_points:[Object.assign({}, DP_DELAY, {current:'平均拖 6–8 年才確診（媒體報導）'})],
    content_check_note:'數字標明學會與媒體報導，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'子宮內膜異位症',
    collect:{
      summary:'子宮內膜異位症常被誤認為一般經痛，2026年世界子宮內膜異位日的報導指出患者平均拖6至8年才確診；國內尚無官方盛行率統計。「經痛影響生活就就醫、有生育計畫及早討論」是年輕女性值得長期溝通的健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約10%育齡女性：台灣子宮內膜異位症學會理事長於2026年活動中說明，超過9成女性曾出現月經逆流，其中約10%育齡女性無法有效清除，可能形成子宮內膜異位症（媒體引述，非官方統計）。',tag:'市場觀察',source:{name:'台灣英文新聞：經痛別再忍！子宮內膜異位症平均拖6至8年才確診',url:'https://www.taiwannews.com.tw/zh/news/6320258'}},
        {item:'年度趨勢方向',desc:'平均拖6至8年才確診：2026年世界子宮內膜異位日報導指出，患者常把經痛當成正常現象，平均需要6至8年才獲得正式診斷（報導未註明研究出處）。',tag:'市場觀察',source:{name:'台灣英文新聞：經痛別再忍！子宮內膜異位症平均拖6至8年才確診',url:'https://www.taiwannews.com.tw/zh/news/6320258'}},
        {item:'政策動向',desc:'每年3月世界子宮內膜異位日：台灣子宮內膜異位症學會結合企業與地標舉辦倡議活動，呼籲經痛影響工作與生活、長期依賴止痛藥或症狀反覆者及早就醫評估。',tag:'市場觀察',source:{name:'台灣英文新聞：經痛別再忍！子宮內膜異位症平均拖6至8年才確診',url:'https://www.taiwannews.com.tw/zh/news/6320258'}},
        {item:'好發族群年齡層',desc:'育齡女性為主要族群：學會指出疾病可能影響生育規劃，報導中的案例多為長期經痛、經期伴隨腸胃不適的年輕女性，青少女經痛嚴重也應就醫。',tag:'市場觀察',source:{name:'台灣英文新聞：經痛別再忍！子宮內膜異位症平均拖6至8年才確診',url:'https://www.taiwannews.com.tw/zh/news/6320258'}}
      ],
      product_view:['機會：年輕女性與生育規劃族群可結合女性健康衛教，建立早期信任。','機會：婦科手術與住院醫療保障的條款說明，可回應患者的實際需求。','風險：須依保單條款如實說明婦科疾病等待期與除外。'],
      marketing_view:['機會：每年3月世界子宮內膜異位日、三八婦女節是固定溝通時點。','機會：「經痛別再忍」容易引起年輕女性共鳴。','風險：避免以不孕作為恐懼訴求。'],
      alert_level:'low',
      alert_reason:'屬長期女性健康倡議議題，適合在3月婦女節與世界子宮內膜異位日前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('患者平均需要6至8年才會獲得正式診斷','SOURCE_EVIDENCE','secondary_citation',
          '文中已註明出自2026年媒體報導，但報導是記者整理的說法，未說明是國內研究或國際文獻，數字來源無法查核。','medium','yes',
          '子宮內膜異位症確診延遲的研究出處（國內或國際文獻）。','no','confirm','屬二手且出處不明。',
          '患者平均需要6至8年才會獲得正式診斷（報導未註明研究出處）'),
        F('青少女若經痛嚴重影響上學','SOURCE_EVIDENCE','claim_without_source',
          '「青少女經痛嚴重應陪同就醫」是延伸建議，引用的學會報導沒有針對青少女的說法。','low','no',
          null,'no','clarify','建議合理，可改為不額外延伸的寫法或補出處。',
          '經痛嚴重影響上學或工作'),
        F('大多數女生都有月經逆流','SOURCE_EVIDENCE','rewording_drift',
          '學會原說法是「超過9成女性曾出現月經逆流」，生活親切版改成「大多數」，失去數字精確度。','low','no',
          null,'no','clarify','保留原數字即可。',
          '超過9成女性都曾有月經逆流'),
        F('平均6至8年才確診（2026年媒體報導）','SOURCE_EVIDENCE','secondary_citation',
          '簡潔有力版只寫媒體報導，讀者無法知道是哪個單位的說法，也不知道沒有研究出處。','low','no',
          null,'no','clarify','補上學會活動與出處限制。',
          '平均6至8年才確診（2026年學會活動報導，未註明研究出處）')
      ],
      card:[
        F('育齡女性無法清除逆流內膜','MEDICAL_INTERPRETATION','oversimplified',
          '主數字「約 10%」是學會對發病機轉的說明，卡面看起來像盛行率統計，讀者可能誤以為10%女性已確診。','medium','no',
          null,'no','clarify','屬口徑說明。',
          '育齡女性可能發生（學會說明，非盛行率統計）'),
        F('女兒經痛無法上學，陪她就醫','SOURCE_EVIDENCE','claim_without_source',
          '行動卡針對青少女的建議不在引用來源中。','low','no',
          null,'no','clarify','可改為一般性行動。',
          '經痛反覆出現，及早就醫評估')
      ]
    },
    title_alts:[
      '經痛別再忍：子宮內膜異位症平均拖6至8年才確診',
      '每個月都痛到請假？經痛可能是子宮內膜異位症',
      '子宮內膜異位症就醫警訊：經痛、止痛藥與生育規劃'
    ],
    card_title_alts:[
      ['每個月都痛到請假？','經痛別再忍'],
      ['平均拖 6–8 年','才確診的經痛疾病'],
      ['長期吃止痛藥','不是解方']
    ],
    data_addon:[
      '台灣子宮內膜異位症學會（2026）：超過9成女性曾出現月經逆流，約10%育齡女性無法有效清除。',
      '2026年世界子宮內膜異位日報導：患者平均需6至8年才確診。',
      '國內目前無子宮內膜異位症官方盛行率統計。'
    ],
    cta:'這個月起記錄經痛程度與止痛藥用量，痛到影響生活就帶著紀錄去看婦產科。'
  });
})();
