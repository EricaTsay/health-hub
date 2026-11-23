/* v6 示範主題：吸入性肺炎（B4 消化・肝膽・呼吸）
   查證日期：2026-11-20。數據來源：國健署〈吞嚥沒問題 營養有保障 長者「吃得下」身心快活〉（引國內研究：社區長者21.8%每週至少3次進食嗆到）、
   衛福部114年死因統計（表7 65歲以上肺炎）、衛福部「進食、吞嚥困難照護及指導方案指引」（108年6月）、疾管署成人公費肺鏈疫苗新制（2026）。
   註：死因統計未單獨公布成人吸入性肺炎人數，本題肺炎數字一律標註為「所有肺炎」。
   參考方向：健康智庫〈守護長者病患，當心吸入性肺炎〉2025/12。 */
(function(){
  const REFS = [
    {title:'吞嚥沒問題 營養有保障 長者「吃得下」身心快活',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1137&pid=8068'},
    {title:'進食、吞嚥困難照護及指導方案指引手冊',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-58240-7db4bf9c-5cc7-430a-841e-1760d967e21b.html'},
    {title:'114年死因統計摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'成人公費肺炎鏈球菌疫苗全面升級為20價或21價新型疫苗',source:'衛生福利部疾病管制署',url:'https://www.cdc.gov.tw/Bulletin/Detail/vwMq9VkXIaV7FHyJgpk-5w?typeid=9'}
  ];
  const TABLE = {headers:['防嗆咳重點','怎麼做'], rows:[
    ['姿勢','進食時坐直，吞嚥時微收下巴，避免仰頭吞'],
    ['進食','小口慢吃，確認吞完再吃下一口，用湯匙代替吸管'],
    ['飯後','進食後維持上半身直立約1小時，避免馬上躺下'],
    ['口腔','每天清潔牙齒、假牙與舌頭，減少口中細菌'],
    ['評估','常嗆咳、聲音變濕，請醫師或語言治療師評估吞嚥']
  ]};
  const TAGS = ['吸入性肺炎','吞嚥障礙','口腔照護','長者照護','肺炎'];

  const DP_CHOKE = {id:'dp-asp-choke', type:'data_scope', title:'嗆咳比例是研究數字',
    desc:'「社區65歲以上長者21.8%每週至少3次進食嗆到」是國健署衛教文章引用的國內研究結果，不是全國性官方調查；死因統計也未單獨公布成人吸入性肺炎死亡人數。AI 保留此數字並標明來源性質。',
    current:'社區長者21.8%每週至少3次進食嗆到（國健署引國內研究）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'改成不寫比例', action:'replace', from:'國民健康署引用國內研究指出，社區65歲以上長者有21.8%每週至少3次進食時嗆到；', to:''}]};

  const PRO = {
    content_type:'健康文章',
    title:'吸入性肺炎：長者嗆咳別輕忽，5個防嗆咳重點',
    update_date:'2026/11/20',
    intro:'吸入性肺炎是食物、飲料、口水或胃內容物誤入氣管和肺部所引起的感染。長者因器官退化、虛弱，或有中風、巴金森氏症等疾病，容易出現吞嚥困難。國民健康署引用國內研究指出，社區65歲以上長者有21.8%每週至少3次進食時嗆到；而依衛生福利部114年死因統計，65歲以上長者因肺炎（所有類型）死亡16,001人，居65歲以上死因第3位。',
    sections:[
      {heading:'容易發生吸入性肺炎的族群',format:'bullets',items:[
        '中風、巴金森氏症、失智症等影響吞嚥或意識的疾病患者。',
        '長期臥床、使用鼻胃管，或口腔衛生不佳的長者。',
        '服用鎮靜安眠藥物、意識較不清醒者。'
      ]},
      {heading:'嗆咳不一定看得到',format:'bullets',items:[
        '吃東西或喝水時咳嗽、聲音變得濕濕的、需要清喉嚨。',
        '也可能出現「無聲吸入」：沒有明顯嗆咳，卻反覆發燒或肺炎。',
        '吃飯時間變長、體重下降，也可能是吞嚥退化的訊號。'
      ]},
      {heading:'5個防嗆咳重點',format:'table',table:TABLE}
    ],
    think_tank_view:'吸入性肺炎的預防，關鍵在「吃」與「口腔」兩件日常小事。衛福部的進食吞嚥照護指引提醒，照顧者調整姿勢、食物質地與進食速度，加上每天確實清潔口腔，能降低細菌進入肺部的機會。若長輩已反覆嗆咳或發燒，請儘早讓醫師與語言治療師評估吞嚥功能，並完成公費肺炎鏈球菌疫苗接種。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'嗆咳比例標明為國健署引述的國內研究，肺炎死亡數字標明為所有類型肺炎，照護建議引自衛福部指引，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['21.8%取自國健署衛教文章引用的國內研究','65歲以上肺炎死亡16,001人取自衛福部114年死因統計表7'],
      layout_reason:'先說明高風險族群與不明顯的嗆咳表現，再以表格整理防嗆咳重點。',
      tone:'專業易懂', tone_reason:'照顧者需要具體可操作的做法。',
      to_verify:['21.8%研究的年份與樣本，國健署文章未寫明','死因統計未單獨公布吸入性肺炎人數']},
    decision_points:[DP_CHOKE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'長輩吃飯常嗆到？小心吸入性肺炎，5招吃得更安全',
    update_date:'2026/11/20',
    intro:'吸入性肺炎是吃東西、喝水或口水不小心跑進氣管和肺部，引起的感染。國健署引用國內研究，社區裡65歲以上長輩，每5人就有1人以上每週至少嗆到3次。中風、巴金森氏症或常躺床的長輩更要小心。只要調整吃飯的方式、把嘴巴清乾淨，就能降低風險。',
    sections:[
      {heading:'哪些長輩要特別注意？',format:'bullets',items:[
        '中風過、有巴金森氏症或失智的長輩。',
        '常躺床、插鼻胃管，或牙口不好的長輩。',
        '有吃安眠藥、常昏昏沉沉的長輩。'
      ]},
      {heading:'嗆到不一定會咳',format:'bullets',items:[
        '吃飯喝水會咳、聲音變得像有痰。',
        '有些長輩沒咳嗽，卻一直反覆發燒。',
        '吃一頓飯越吃越久、變瘦，也要留意。'
      ]},
      {heading:'5招吃得更安全',format:'table',table:TABLE}
    ],
    think_tank_view:'陪長輩吃飯時別催，讓他坐直、小口慢慢吃，吃完先別躺。每天幫忙刷牙、清假牙，是預防肺炎很重要的一步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明來源性質與年份，「每5人就有1人以上」依21.8%換算，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從照顧者陪吃飯的情境切入。', tone:'生活親切', tone_reason:'給照顧者閱讀。', to_verify:['21.8%研究年份']},
    decision_points:[Object.assign({}, DP_CHOKE, {options:[{label:'沿用目前資料', action:'keep'}, {label:'改成不寫比例', action:'replace', from:'國健署引用國內研究，社區裡65歲以上長輩，每5人就有1人以上每週至少嗆到3次。', to:''}]})]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'吸入性肺炎：5個防嗆咳重點',
    update_date:'2026/11/20',
    intro:'國健署引用國內研究：社區長者21.8%每週至少3次進食嗆到。吸入性肺炎可從姿勢、進食與口腔照護預防。',
    sections:[
      {heading:'高風險族群',format:'bullets',items:[
        '中風、巴金森氏症、失智、長期臥床者。'
      ]},
      {heading:'警訊',format:'bullets',items:[
        '進食嗆咳、聲音變濕、反覆發燒。'
      ]},
      {heading:'防嗆咳',format:'table',table:TABLE}
    ],
    think_tank_view:'坐直、慢吃、飯後不躺、口腔清潔，是預防吸入性肺炎的基本功。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明來源性質，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為族群、警訊、防嗆咳三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['21.8%研究年份']},
    decision_points:[Object.assign({}, DP_CHOKE, {options:[{label:'沿用目前資料', action:'keep'}, {label:'改成不寫比例', action:'replace', from:'國健署引用國內研究：社區長者21.8%每週至少3次進食嗆到。', to:''}]})]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'吸入性肺炎', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'長輩常嗆到，小心吸入性肺炎', primary_visual:'21.8%', secondary_message:'沒咳嗽也可能嗆入肺部', action_priority:'坐直慢吃、口腔清潔'},
    headline_hook:'長輩吃飯常嗆到？', headline_main:'防吸入性肺炎 4 招', title_accent:'4 招',
    hero_message:'每 5 位就有 1 位以上', hero_support:'社區長者每週嗆到 3 次以上（國健署引國內研究）',
    primary_stat:{value:'21.8%', label:'長者每週嗆到 3 次以上', note:'國健署衛教引用國內研究'},
    action_title:'吃得更安全',
    action_cards:[
      {key:'坐', text:'坐直進食，吞嚥時微收下巴'},
      {key:'慢', text:'小口慢吃，吞完再吃下一口'},
      {key:'停', text:'飯後上半身直立約 1 小時'},
      {key:'刷', text:'每天清潔牙齒、假牙與舌頭'}
    ],
    notice:'常嗆咳、聲音變濕或**反覆發燒**，請醫師或語言治療師評估吞嚥。',
    carousel_suggestion:{reason:'若想把警訊、高風險族群與照護方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'嗆到不一定會咳', headline_main:'吸入性肺炎 3 個警訊'},
      {layout_type:'knowledge', headline_hook:'高風險族群', headline_main:'中風、巴金森、臥床長者'},
      {layout_type:'action', headline_hook:'吃得更安全', headline_main:'防嗆咳 4 招'}]},
    hashtags:['吸入性肺炎','吞嚥障礙','口腔照護','長者照護'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'elderly-care',
    illustration:{topic:'長者進食照護', audience:'長者與照顧者', scene:'照顧者陪坐姿端正的長者用湯匙慢慢吃飯',
      emotion:'耐心、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A caregiver sitting beside an upright older adult who is eating slowly with a spoon at a dining table, patient and calm mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：社區長者21.8%每週至少3次嗆到（國健署引國內研究）','照護建議取自衛福部進食吞嚥照護指引'],
      layout_reason:'重點是日常照護行動，選 action：4 個防嗆咳做法當主角，嗆咳比例放在 Hero。',
      tone:'專業易懂', tone_reason:'照顧者需要具體可操作的做法。',
      to_verify:['21.8%為研究數字，非官方全國調查']},
    decision_points:[{id:'dp-asp-choke-card', type:'data_scope', title:'嗆咳比例是研究數字', desc:DP_CHOKE.desc,
      current:'21.8%｜長者每週嗆到 3 次以上（國健署引國內研究）', options:[{label:'沿用目前資料', action:'keep'}]}],
    content_check_note:'嗆咳比例標明為國健署引述研究，照護建議引自衛福部指引，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'吸入性肺炎',
    collect:{
      summary:'吸入性肺炎多發生在吞嚥功能退化的長者，國健署引用國內研究指出社區長者21.8%每週至少3次進食嗆到；肺炎是65歲以上死因第3位，吞嚥評估、進食姿勢與口腔照護是照顧者最能著力的預防重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'21.8%長者每週嗆到3次以上：國健署衛教文章引用國內研究，社區65歲以上長者有21.8%每週至少3次進食時嗆到。',tag:'官方統計',source:{name:'國民健康署：吞嚥沒問題 營養有保障',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1137&pid=8068'}},
        {item:'好發族群年齡層',desc:'約1.6萬名長者死於肺炎：114年65歲以上肺炎（所有類型）死亡16,001人，居65歲以上死因第3位，死因統計未單獨公布吸入性肺炎人數。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'照護指引：衛福部於108年制定「進食、吞嚥困難照護及指導方案指引」，提供長照人員進食姿勢、食物質地與口腔照護的操作建議。',tag:'官方統計',source:{name:'衛生福利部：進食、吞嚥困難照護及指導方案指引',url:'https://www.mohw.gov.tw/dl-58240-7db4bf9c-5cc7-430a-841e-1760d967e21b.html'}},
        {item:'政策動向',desc:'1劑完成：疾管署2026年起將成人公費肺炎鏈球菌疫苗改為1劑PCV20或PCV21，65歲以上長者為公費對象。',tag:'官方統計',source:{name:'疾管署：成人公費肺炎鏈球菌疫苗全面升級',url:'https://www.cdc.gov.tw/Bulletin/Detail/vwMq9VkXIaV7FHyJgpk-5w?typeid=9'}}
      ],
      product_view:['機會：吸入性肺炎常反覆住院，可連結住院醫療、長照與照護規劃說明。','機會：吞嚥評估、口腔照護衛教可作為長照家庭的健康服務內容。','風險：避免推銷特定增稠劑或營養品；吞嚥評估應交由專業人員。'],
      marketing_view:['機會：「沒咳嗽也可能嗆入肺部」具反差，能提醒照顧者注意無聲吸入。','機會：可與吞嚥障礙、口腔健康主題串連成系列內容。','風險：研究比例非全國調查，傳播時需標明來源性質。'],
      alert_level:'low',
      alert_reason:'屬長期照護議題，無急迫時效事件；適合在長照、照顧者主題中常態溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國民健康署引用國內研究指出，社區65歲以上長者有21.8%每週至少3次進食時嗆到','SOURCE_EVIDENCE','secondary_citation',
          '數字為國健署衛教文章轉引的國內研究，文中未寫研究年份、作者與樣本範圍，讀者無法判斷代表性。','medium','yes',
          '21.8%原始研究的發表年份、樣本數與地區。','yes','confirm','國健署文章未寫研究出處細節。',
          '國民健康署引用國內社區研究（年份待確認）指出，受訪65歲以上長者有21.8%每週至少3次進食時嗆到',
          ['每5人就有1人以上每週至少嗆到3次','社區長者21.8%每週至少3次進食嗆到']),
        F('65歲以上長者因肺炎（所有類型）死亡16,001人','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '雖已標註「所有類型」，但放在吸入性肺炎文章開頭，讀者仍可能把16,001人理解為吸入性肺炎死亡人數；建議補一句說明吸入性肺炎未單獨統計。','low','no',
          null,'no','clarify','屬統計範圍說明。',
          '65歲以上長者因肺炎（所有類型，吸入性肺炎未單獨統計）死亡16,001人'),
        F('也可能出現「無聲吸入」','TERMINOLOGY_LANGUAGE','jargon',
          '「無聲吸入」為專業用語，一般讀者不易理解，可補白話說明。','low','no',
          null,'no','clarify','屬用語說明。',
          '也可能出現「無聲吸入」（食物或口水進入氣管卻沒有引起咳嗽）'),
        F('服用鎮靜安眠藥物、意識較不清醒者','MEDICAL_INTERPRETATION','medication_advice',
          '未提醒讀者不可自行停藥，可能讓家屬自行減少長輩用藥。','low','no',
          null,'no','clarify','屬用藥安全提醒。',
          '服用鎮靜安眠藥物、意識較不清醒者（用藥調整請與醫師討論，勿自行停藥）',
          ['有吃安眠藥、常昏昏沉沉的長輩'])
      ],
      card:[
        F('長者每週嗆到 3 次以上','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '主數字的對象是「社區」65歲以上長者，且為研究樣本，卡面標籤未說明。','low','no',
          null,'no','clarify','屬口徑說明。',
          '社區長者每週嗆到 3 次以上（研究）'),
        F('飯後上半身直立約 1 小時','MEDICAL_INTERPRETATION','individualized_care',
          '臥床或使用鼻胃管的長者姿勢需依照護人員指導調整，卡面未說明。','low','no',
          null,'no','clarify','屬個別化照護提醒。',
          '飯後上半身直立約 1 小時（臥床者依照護指導）')
      ]
    },
    title_alts:[
      '吸入性肺炎：長者嗆咳別輕忽，5個防嗆咳重點',
      '長輩吃飯常嗆到？小心吸入性肺炎，5招吃得更安全',
      '沒咳嗽也可能嗆入肺部：照顧者必學的吸入性肺炎預防'
    ],
    card_title_alts:[
      ['長輩吃飯常嗆到？','防吸入性肺炎 4 招'],
      ['嗆到不一定會咳','小心吸入性肺炎'],
      ['坐直、慢吃、飯後不躺','吃得更安全']
    ],
    data_addon:[
      '衛福部進食吞嚥照護指引建議使用含氟牙膏，並避免以果醬或蜂蜜混合磨碎藥物。',
      '國健署指出，長者因器官退化、虛弱或中風、巴金森氏症等疾病，容易有吞嚥困難。',
      '65歲以上長者為公費肺炎鏈球菌疫苗對象，新制1劑完成。'
    ],
    cta:'下一餐陪長輩吃飯時，確認他坐直、小口慢吃，飯後陪他坐著聊天約1小時，並在睡前幫忙清潔口腔或假牙。'
  });
})();
