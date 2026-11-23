/* v6 示範主題：慢性胃炎（B4 消化・肝膽・呼吸）
   查證日期：2026-11-20。數據來源：國健署〈預防胃癌再升級 115年起全面推動公費「胃幽門螺旋桿菌」檢測〉（2026/01/27，成人感染盛行率30%、保胃5招）、
   國健署〈遠離「胃」險 減少幽門螺旋桿菌感染〉（2025/02/24）、衛福部114年死因統計（胃癌）。
   註：國內慢性胃炎盛行率與就醫人數查無官方統計，本題以幽門桿菌感染與胃癌預防數據呈現並標明範圍。
   與「幽門螺旋桿菌感染」區隔：本題聚焦胃炎的症狀、成因與就醫檢查，公費檢測只簡述。
   參考方向：健康智庫〈慢性胃炎〉2022/09、〈腸胃道健康－胃炎與胃食道逆流〉2026/05。 */
(function(){
  const REFS = [
    {title:'預防胃癌再升級 115年起全面推動公費「胃幽門螺旋桿菌」檢測',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=5020&pid=19802'},
    {title:'遠離「胃」險 減少幽門螺旋桿菌感染 讓「胃」來越健康',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18900'},
    {title:'114年死因統計摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}
  ];
  const TABLE = {headers:['常見成因','說明'], rows:[
    ['幽門螺旋桿菌','最常見原因，長期感染可造成慢性發炎、萎縮'],
    ['藥物','長期使用部分止痛消炎藥等，可能刺激胃黏膜'],
    ['菸酒檳榔','吸菸、飲酒、嚼檳榔會增加胃黏膜傷害'],
    ['飲食作息','三餐不定、暴飲暴食、常吃刺激性食物']
  ]};
  const TAGS = ['慢性胃炎','胃痛','幽門螺旋桿菌','胃鏡','腸胃健康'];

  const DP_SCOPE = {id:'dp-cg-scope', type:'data_scope', title:'沒有慢性胃炎的官方盛行率',
    desc:'國內慢性胃炎盛行率與就醫人數查無官方統計。文中30%是國健署公布的「20歲以上成人幽門螺旋桿菌感染盛行率」，感染不等於都有症狀的胃炎，AI 在文中標註範圍。',
    current:'20歲以上成人幽門桿菌感染盛行率30%（國健署）',
    options:[{label:'沿用目前資料', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'胃痛、脹氣反覆發作？認識慢性胃炎的成因、警訊與檢查',
    update_date:'2026/11/20',
    intro:'慢性胃炎是胃黏膜長期發炎的狀態，常見症狀包括上腹痛、脹氣、噁心、食慾不振，但也有人完全沒有症狀。幽門螺旋桿菌感染是最常見的原因之一，國民健康署指出我國20歲以上成年人感染盛行率達30%；長期感染可能從慢性胃炎、萎縮性胃炎逐步進展，增加胃癌風險。依衛生福利部114年死因統計，胃癌死亡2,225人。',
    sections:[
      {heading:'慢性胃炎的常見成因',format:'table',table:TABLE},
      {heading:'這些警訊要就醫',format:'bullets',items:[
        '上腹痛、脹氣反覆超過數週，吃藥後仍常復發。',
        '解黑便、吐血、貧血，或體重不明原因下降。',
        '吞嚥困難、持續嘔吐，或年紀較長才新出現胃部症狀。',
        '醫師可能安排胃鏡檢查與切片，並檢測幽門螺旋桿菌。'
      ]},
      {heading:'日常保胃5招',format:'bullets',items:[
        '保持均衡飲食、養成良好飲食習慣，避免生食與不潔食物。',
        '使用公筷母匙，避免共用杯子與餐具。',
        '規律運動，遠離菸、檳榔、酒；腸胃不適及早就醫。',
        '45至74歲可利用115年起的公費糞便抗原檢測，檢查幽門桿菌。'
      ]}
    ],
    think_tank_view:'很多人胃不舒服就自己買胃藥壓一壓，症狀消了就以為沒事。但慢性胃炎背後若是幽門桿菌感染，或長期吃止痛藥，不處理根本原因就會反覆發作。反覆胃痛、黑便或變瘦都值得做一次胃鏡；感染者完成除菌，才是真正的保胃之道。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'感染盛行率與保胃5招引自國健署，胃癌死亡人數引自衛福部114年死因統計，未寫無官方來源的胃炎盛行率，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['20歲以上感染盛行率30%、保胃5招取自國健署2026/01/27新聞','胃癌死亡2,225人取自衛福部114年死因統計'],
      layout_reason:'先以表格說明成因，再列就醫警訊，最後整理日常保胃。',
      tone:'專業易懂', tone_reason:'需讓讀者知道何時該就醫。',
      to_verify:['慢性胃炎盛行率查無官方統計','30%感染率調查年份新聞未寫']},
    decision_points:[DP_SCOPE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'胃常常悶悶痛痛？別只靠胃藥，慢性胃炎要找原因',
    update_date:'2026/11/20',
    intro:'胃脹、胃悶、胃痛三不五時就來，吃個胃藥好一點又復發，可能是慢性胃炎。最常見的原因之一是幽門桿菌，國健署說20歲以上大人大約每10人就有3人感染。找出原因好好處理，胃才會真的變健康。',
    sections:[
      {heading:'胃炎常見原因',format:'table',table:TABLE},
      {heading:'這些狀況要看醫生',format:'bullets',items:[
        '胃痛脹氣好幾週都沒好。',
        '大便黑黑的、吐血、頭暈貧血或一直變瘦。',
        '吞東西卡卡、一直吐。'
      ]},
      {heading:'平常這樣顧胃',format:'bullets',items:[
        '三餐定時，不暴飲暴食，少吃生食。',
        '吃飯用公筷母匙。',
        '不抽菸、不吃檳榔、少喝酒；45到74歲可以免費驗幽門桿菌。'
      ]}
    ],
    think_tank_view:'胃藥可以暫時舒緩，但如果一直反覆，就要找出原因。驗一下幽門桿菌、必要時照胃鏡，比一直吞胃藥更安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明範圍，「每10人就有3人」依30%換算，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從反覆吃胃藥的經驗切入。', tone:'生活親切', tone_reason:'給一般民眾閱讀。', to_verify:['胃炎盛行率查無官方統計']},
    decision_points:[DP_SCOPE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'慢性胃炎：成因、警訊與保胃',
    update_date:'2026/11/20',
    intro:'幽門桿菌是慢性胃炎常見原因，20歲以上成人感染盛行率30%（國健署）。反覆胃痛要找原因。',
    sections:[
      {heading:'成因',format:'table',table:TABLE},
      {heading:'警訊',format:'bullets',items:[
        '黑便、吐血、變瘦、吞嚥困難。'
      ]},
      {heading:'保胃',format:'bullets',items:[
        '公筷母匙、遠離菸酒檳榔、規律飲食。'
      ]}
    ],
    think_tank_view:'找出原因、處理感染，比長期吃胃藥更根本。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明範圍，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為成因、警訊、保胃三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['胃炎盛行率查無官方統計']},
    decision_points:[DP_SCOPE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'慢性胃炎', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'反覆胃痛別只靠胃藥', primary_visual:'4 大警訊', secondary_message:'找出原因才能根本改善', action_priority:'就醫檢查、保胃5招'},
    headline_hook:'胃痛脹氣一直來？', headline_main:'慢性胃炎 4 個就醫警訊', title_accent:'4 個就醫警訊',
    hero_message:'每 10 位成人約 3 位', hero_support:'感染幽門桿菌（國健署：20 歲以上盛行率 30%）',
    knowledge_title:'就醫警訊', knowledge_note:'出現警訊，醫師可能安排**胃鏡檢查**',
    knowledge_cards:[
      {label:'反覆胃痛', lines:['數週未改善','吃藥後又復發']},
      {label:'黑便吐血', lines:['可能腸胃出血']},
      {label:'體重下降', lines:['不明原因變瘦','或貧血']},
      {label:'吞嚥困難', lines:['卡卡、一直吐']}
    ],
    action_title:'保胃這樣做',
    action_cards:[
      {key:'吃', text:'三餐定時，避免生食與不潔食物'},
      {key:'分', text:'使用公筷母匙，不共用杯子'},
      {key:'戒', text:'遠離菸、檳榔、酒'},
      {key:'篩', text:'45–74 歲公費檢測幽門桿菌'}
    ],
    carousel_suggestion:{reason:'若想把成因、警訊與保胃方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'胃炎從哪來', headline_main:'4 個常見成因'},
      {layout_type:'knowledge', headline_hook:'胃痛一直來？', headline_main:'4 個就醫警訊'},
      {layout_type:'action', headline_hook:'保胃 5 招', headline_main:'從公筷母匙開始'}]},
    hashtags:['慢性胃炎','胃痛','幽門螺旋桿菌','腸胃健康'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'慢性胃炎就醫', audience:'中壯年', scene:'中年人在診間向醫師描述胃部不適，醫師拿著胃部示意圖說明',
      emotion:'安心、被理解', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged person describing stomach discomfort to a doctor who points to a stomach diagram in a clinic, reassured mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['20歲以上幽門桿菌感染盛行率30%取自國健署','保胃5招取自國健署'],
      layout_reason:'國內缺乏胃炎官方盛行率，核心是「反覆胃痛要找原因」，選 knowledge：4 個就醫警訊當主角，不放主數字。',
      tone:'專業易懂', tone_reason:'引導就醫而非自行用藥。',
      to_verify:['Hero 比例為幽門桿菌感染率，非胃炎盛行率']},
    content_check_note:'數據引自國健署並標明範圍，未使用療效保證用語，未涉及具體藥品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'慢性胃炎',
    collect:{
      summary:'慢性胃炎常見症狀為反覆胃痛、脹氣，幽門螺旋桿菌是主要原因之一，國健署指出成人感染盛行率達30%；長期感染與胃癌風險相關，115年起45至74歲公費檢測上路，「找出原因、別只靠胃藥」是溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'30%成人感染幽門桿菌：國健署指出20歲以上成年人幽門螺旋桿菌感染盛行率達30%，國內慢性胃炎本身的盛行率查無官方統計。',tag:'官方統計',source:{name:'國民健康署：預防胃癌再升級',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=5020&pid=19802'}},
        {item:'年度趨勢方向',desc:'2225人死於胃癌：衛福部114年死因統計，胃癌死亡2,225人，國健署指出約8至9成胃癌由幽門螺旋桿菌感染引起。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'終身1次公費檢測：自115年1月1日起，45至74歲民眾可接受公費糞便抗原檢測胃幽門螺旋桿菌，陽性者依醫囑除菌。',tag:'官方統計',source:{name:'國民健康署：預防胃癌再升級',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=5020&pid=19802'}},
        {item:'好發族群年齡層',desc:'保胃5招：國健署建議均衡飲食、良好飲食習慣、規律運動、遠離菸檳酒，腸胃不適及早就醫，並以公筷母匙減少共食傳染。',tag:'官方統計',source:{name:'國民健康署：遠離「胃」險 減少幽門螺旋桿菌感染',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18900'}}
      ],
      product_view:['機會：胃部健康與胃癌預防可結合健檢與篩檢提醒服務。','機會：上班族飲食作息衛教可作為健康促進內容。','風險：避免推薦胃藥、益生菌或保健品取代就醫。'],
      marketing_view:['機會：「別只靠胃藥」貼近民眾經驗。','機會：可與幽門桿菌公費檢測、胃食道逆流主題串連。','風險：缺乏胃炎官方盛行率，避免自行換算人數。'],
      alert_level:'low',
      alert_reason:'屬常見腸胃議題，無急迫時效事件；可搭配115年公費幽門桿菌檢測上路溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('長期感染可能從慢性胃炎、萎縮性胃炎逐步進展','SOURCE_EVIDENCE','unsourced_claim',
          '病程進展描述未附出處，引用的國健署新聞未提到萎縮性胃炎。','low','no',
          null,'no','clarify','屬出處補充。',
          '長期感染可能造成胃黏膜慢性發炎，增加胃癌風險（國健署）'),
        F('長期使用部分止痛消炎藥等，可能刺激胃黏膜','SOURCE_EVIDENCE','unsourced_claim',
          '藥物成因未附出處，且未提醒不可自行停藥。','low','no',
          null,'no','clarify','屬出處與用藥提醒。',
          '長期使用部分止痛消炎藥等，可能刺激胃黏膜（用藥調整請與醫師討論）'),
        F('或年紀較長才新出現胃部症狀','MEDICAL_INTERPRETATION','vague_term',
          '「年紀較長」未定義年齡，讀者難以判斷。','low','no',
          null,'no','clarify','屬用語精確度。',
          '或中年以後才新出現胃部症狀'),
        F('比一直吞胃藥更安心','TERMINOLOGY_LANGUAGE','tone_exaggeration',
          '語氣可能讓讀者以為醫師處方的胃藥也不該吃。','low','no',
          null,'no','clarify','屬語氣調整。',
          '比自行長期吃成藥更能找出問題')
      ],
      card:[
        F('感染幽門桿菌（國健署：20 歲以上盛行率 30%）','DATA_FACTUAL_ACCURACY','scope_mismatch',
          'Hero 比例為幽門桿菌感染率，卡面主題為慢性胃炎，讀者可能誤為胃炎盛行率。','low','no',
          null,'no','clarify','屬範圍說明。',
          '感染幽門桿菌（非胃炎盛行率，國健署）'),
        F('45–74 歲公費檢測幽門桿菌','REGULATORY_COMPLIANCE','eligibility_condition',
          '曾參與吹氣法或試辦檢測者不再提供，卡面未說明。','low','no',
          null,'no','clarify','屬資格說明。',
          '45–74 歲未曾檢測者公費檢測幽門桿菌')
      ]
    },
    title_alts:[
      '胃痛、脹氣反覆發作？認識慢性胃炎的成因、警訊與檢查',
      '胃常常悶悶痛痛？別只靠胃藥，慢性胃炎要找原因',
      '慢性胃炎4個就醫警訊：從幽門桿菌到保胃5招'
    ],
    card_title_alts:[
      ['胃痛脹氣一直來？','慢性胃炎 4 個就醫警訊'],
      ['別只靠胃藥','找出胃炎原因'],
      ['保胃 5 招','從公筷母匙開始']
    ],
    data_addon:[
      '世界衛生組織於1994年將幽門螺旋桿菌列為第一級致癌物。',
      '胃癌早期（0+1期）5年存活率約可達7成5以上，晚期不到1成（國健署）。',
      '國健署指出每年約逾4,000人新診斷胃癌。'
    ],
    cta:'如果胃痛、脹氣已反覆超過一個月，這週就掛腸胃科；45至74歲的人可以同時詢問公費幽門桿菌檢測。'
  });
})();
