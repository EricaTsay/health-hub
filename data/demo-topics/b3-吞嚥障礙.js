/* v6 示範主題：吞嚥障礙（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：國健署〈吞嚥沒問題 營養有保障 長者「吃得下」身心快活〉（引國內研究：社區長者21.8%每週至少3次進食嗆到）、
   衛福部「進食、吞嚥困難照護及指導方案指引」（108年6月）、國健署〈全臺醫療單位齊心 陪長輩「量六力」〉（2025/11/26，六力含營養）。
   與「吸入性肺炎」區隔：本題聚焦吞嚥退化的警訊、評估與飲食調整；吸入性肺炎聚焦肺部感染預防。
   參考方向：健康智庫〈吞嚥障礙別輕忽 掌握安全飲水技巧〉2025/11。 */
(function(){
  const REFS = [
    {title:'吞嚥沒問題 營養有保障 長者「吃得下」身心快活',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1137&pid=8068'},
    {title:'進食、吞嚥困難照護及指導方案指引手冊',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-58240-7db4bf9c-5cc7-430a-841e-1760d967e21b.html'},
    {title:'全臺醫療單位齊心 陪長輩「量六力」',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19644'}
  ];
  const TABLE = {headers:['吃得安全','怎麼做'], rows:[
    ['調整質地','依評估選擇軟質、剁碎或泥狀食物，避免乾硬、黏牙、易碎的食物'],
    ['喝水技巧','小口慢喝，用杯子或湯匙，避免仰頭與用吸管大口吸'],
    ['姿勢','坐直、微收下巴吞嚥，一口吞完再吃下一口'],
    ['環境','專心吃飯，不邊說話邊吃，不看電視分心'],
    ['藥物','藥丸難吞時先問醫師或藥師，不要自行磨粉或拌入黏稠食物']
  ]};
  const TAGS = ['吞嚥障礙','長者營養','嗆咳','照顧技巧','吸入性肺炎'];

  const DP_CHOKE = {id:'dp-dys-choke', type:'data_scope', title:'嗆咳比例是研究數字',
    desc:'「社區65歲以上長者21.8%每週至少3次進食嗆到」是國健署衛教文章引用的國內研究結果，非全國性官方調查；國內吞嚥障礙盛行率查無近年官方統計。',
    current:'社區長者21.8%每週至少3次進食嗆到（國健署引國內研究）',
    options:[{label:'沿用目前資料', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'吃飯常嗆、喝水會咳？認識長者吞嚥障礙與安全進食5原則',
    update_date:'2026/11/20',
    intro:'吞嚥障礙是指食物或水從口腔經咽喉到食道的過程出現困難，長者因器官退化、虛弱，或中風、巴金森氏症等疾病，容易發生。國民健康署引用國內研究指出，社區65歲以上長者有21.8%每週至少3次進食時嗆到。吞嚥障礙不只影響營養與體重，也可能導致脫水與吸入性肺炎，及早發現、調整飲食方式很重要。',
    sections:[
      {heading:'吞嚥退化的警訊',format:'bullets',items:[
        '吃飯或喝水時常咳嗽、嗆到，聲音變得濕濕的。',
        '食物含在嘴裡很久、吞不下去，或吞完覺得卡在喉嚨。',
        '吃一餐的時間變長、食量減少、體重下降。',
        '反覆發燒或肺炎，可能是「無聲吸入」的訊號。'
      ]},
      {heading:'安全進食5原則',format:'table',table:TABLE},
      {heading:'評估與資源',format:'bullets',items:[
        '出現警訊時，請醫師或語言治療師評估吞嚥功能，依結果調整食物質地與進食方式。',
        '衛福部「進食、吞嚥困難照護及指導方案指引」提供照顧者進食姿勢、食物製備與口腔照護的做法。',
        '國健署「長者量六力」包含營養評估，可協助發現吃不下、體重減輕等問題。'
      ]}
    ],
    think_tank_view:'很多家庭發現長輩常嗆到，第一個反應是「少吃一點、不要喝太多水」，結果反而造成營養不良與脫水。吞嚥障礙需要的是「吃對方法」而不是「少吃」：先請專業人員評估，再依建議調整食物質地、姿勢與喝水方式，長輩才能吃得安全又吃得夠。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'嗆咳比例標明為國健署引述的國內研究，照護建議引自衛福部指引，未使用療效保證用語，未推薦特定增稠劑或營養品。',
    ai_rationale:{basis:['21.8%取自國健署衛教文章引用的國內研究','照護建議取自衛福部108年進食吞嚥照護指引'],
      layout_reason:'先列警訊，再以表格整理安全進食原則，最後說明評估資源。',
      tone:'專業易懂', tone_reason:'照顧者需要具體可操作的做法。',
      to_verify:['21.8%研究的年份與樣本','國內吞嚥障礙盛行率查無官方統計']},
    decision_points:[DP_CHOKE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽吃飯常嗆到、喝水會咳？5招讓長輩吃得安全',
    update_date:'2026/11/20',
    intro:'年紀大了，吞東西的力氣和協調也會變差。國健署引用國內研究，社區長輩每5人就有1人以上，每週至少嗆到3次。常嗆到不只是吃飯不舒服，還可能吃不夠、喝不夠，甚至引起肺炎。其實只要調整一下吃的方法，就能安全很多。',
    sections:[
      {heading:'這些狀況要注意',format:'bullets',items:[
        '吃飯喝水常咳、聲音像有痰。',
        '食物含在嘴裡很久吞不下去。',
        '吃一頓飯越來越久、越吃越少、變瘦。'
      ]},
      {heading:'安全吃飯5招',format:'table',table:TABLE},
      {heading:'找誰幫忙？',format:'bullets',items:[
        '請醫師或語言治療師評估，看適合吃哪種軟硬度的食物。',
        '用國健署「長者量六力」檢查營養狀況。'
      ]}
    ],
    think_tank_view:'長輩常嗆到，不是要他少吃少喝，而是要換個方法吃。陪他坐直、慢慢吃，就是最好的照顧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明來源性質，「每5人就有1人以上」依21.8%換算，未使用療效保證用語，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從照顧者觀察到的吃飯情況切入。', tone:'生活親切', tone_reason:'給照顧者閱讀。', to_verify:['21.8%研究年份']},
    decision_points:[DP_CHOKE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'吞嚥障礙：警訊與安全進食5原則',
    update_date:'2026/11/20',
    intro:'國健署引用國內研究：社區長者21.8%每週至少3次進食嗆到。吞嚥障礙要調整吃法，不是少吃。',
    sections:[
      {heading:'警訊',format:'bullets',items:[
        '常嗆咳、吞不下、體重下降。'
      ]},
      {heading:'安全進食',format:'table',table:TABLE},
      {heading:'評估',format:'bullets',items:[
        '醫師或語言治療師評估吞嚥功能。'
      ]}
    ],
    think_tank_view:'先評估、再調整質地與姿勢，長輩才能吃得安全又吃得夠。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明來源性質，未使用療效保證用語，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊、進食、評估三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['21.8%研究年份']},
    decision_points:[DP_CHOKE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'吞嚥障礙', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'常嗆咳要調整吃法，不是少吃', primary_visual:'21.8%', secondary_message:'出現警訊請語言治療師評估', action_priority:'安全進食'},
    headline_hook:'吃飯常嗆、喝水會咳？', headline_main:'吞嚥障礙 4 個警訊', title_accent:'4 個警訊',
    hero_message:'每 5 位就有 1 位以上', hero_support:'社區長者每週嗆到 3 次以上（國健署引國內研究）',
    knowledge_title:'吞嚥警訊', knowledge_note:'出現警訊，請**語言治療師**評估',
    knowledge_cards:[
      {label:'常嗆咳', lines:['吃飯喝水會咳','聲音變濕']},
      {label:'吞不下', lines:['食物含很久','卡在喉嚨']},
      {label:'吃得慢', lines:['一餐越吃越久','食量變少']},
      {label:'反覆發燒', lines:['可能無聲吸入','要留意肺炎']}
    ],
    primary_stat:{value:'21.8%', label:'長者每週嗆到 3 次以上', note:'國健署衛教引用國內研究'},
    action_title:'安全進食這樣做',
    action_cards:[
      {key:'坐', text:'坐直、微收下巴，一口吞完再下一口'},
      {key:'調', text:'依評估調整食物軟硬與質地'},
      {key:'喝', text:'小口慢喝，用杯子或湯匙'},
      {key:'問', text:'藥丸難吞先問醫師藥師，勿自行磨粉'}
    ],
    carousel_suggestion:{reason:'若想把警訊、食物質地與喝水技巧分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'吃飯常嗆？', headline_main:'吞嚥障礙 4 個警訊'},
      {layout_type:'action', headline_hook:'安全喝水', headline_main:'小口慢喝 3 技巧'},
      {layout_type:'action', headline_hook:'安全進食', headline_main:'5 個原則'}]},
    hashtags:['吞嚥障礙','長者營養','嗆咳','照顧技巧'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'elderly-care',
    illustration:{topic:'長者吞嚥照護', audience:'長者與照顧者', scene:'長者坐直用湯匙小口喝湯，照顧者在旁陪伴',
      emotion:'耐心、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult sitting upright sipping soup slowly from a spoon while a caregiver sits beside them, patient and calm mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：社區長者21.8%每週至少3次嗆到（國健署引國內研究）','照護建議取自衛福部指引'],
      layout_reason:'核心是「認得吞嚥退化警訊」，選 knowledge：4 個警訊當主角，比例退到下方，最後給安全進食行動。',
      tone:'專業易懂', tone_reason:'照顧者需要可對照的警訊。',
      to_verify:['21.8%為研究數字']},
    decision_points:[Object.assign({}, DP_CHOKE, {current:'21.8%｜社區長者每週嗆到 3 次以上（國健署引國內研究）'})],
    content_check_note:'嗆咳比例標明為國健署引述研究，照護建議引自衛福部指引，未使用療效保證用語，未推薦特定商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'吞嚥障礙',
    collect:{
      summary:'吞嚥障礙常見於退化或中風、巴金森氏症的長者，國健署引用國內研究指出社區長者21.8%每週至少3次進食嗆到；吞嚥問題會造成營養不良、脫水與吸入性肺炎，專業評估與調整進食方式是照顧者的溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'21.8%長者每週嗆到3次以上：國健署衛教文章引用國內研究，社區65歲以上長者有21.8%每週至少3次進食時嗆到。',tag:'官方統計',source:{name:'國民健康署：吞嚥沒問題 營養有保障',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1137&pid=8068'}},
        {item:'好發族群年齡層',desc:'中風、巴金森氏症長者：國健署指出，長者因器官退化、虛弱或中風、巴金森氏症等疾病，容易出現吞嚥困難，進食時造成嗆咳與吸入性肺炎。',tag:'官方統計',source:{name:'國民健康署：吞嚥沒問題 營養有保障',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1137&pid=8068'}},
        {item:'政策動向',desc:'照護指引：衛福部108年制定「進食、吞嚥困難照護及指導方案指引」，提供長照人員進食姿勢、食物製備與口腔照護的操作建議。',tag:'官方統計',source:{name:'衛生福利部：進食、吞嚥困難照護及指導方案指引',url:'https://www.mohw.gov.tw/dl-58240-7db4bf9c-5cc7-430a-841e-1760d967e21b.html'}},
        {item:'年度趨勢方向',desc:'35.5萬人受檢：國健署114年協助35.5萬名長者「量六力」，其中營養評估可協助發現吃不下、體重減輕等問題。',tag:'官方統計',source:{name:'國民健康署：全臺醫療單位齊心 陪長輩「量六力」',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19644'}}
      ],
      product_view:['機會：吞嚥障礙常見於長照家庭，可連結長照與照護規劃說明。','機會：照顧技巧衛教可作為長照家庭的關懷服務。','風險：避免推薦特定增稠劑、營養品或醫材。'],
      marketing_view:['機會：「常嗆咳要換吃法，不是少吃」能糾正常見迷思。','機會：可與吸入性肺炎、口腔健康主題串連。','風險：研究比例非全國調查，傳播時需標明來源性質。'],
      alert_level:'low',
      alert_reason:'屬長期照護議題，無急迫時效事件；適合在長照與照顧者主題中常態溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國民健康署引用國內研究指出，社區65歲以上長者有21.8%每週至少3次進食時嗆到','SOURCE_EVIDENCE','secondary_citation',
          '數字為國健署衛教文章轉引的國內研究，文中未寫研究年份與樣本，讀者無法判斷代表性。','medium','yes',
          '21.8%原始研究的發表年份、樣本數與地區。','yes','confirm','國健署文章未寫研究細節。',
          '國民健康署引用國內社區研究（年份待確認）指出，受訪65歲以上長者有21.8%每週至少3次進食時嗆到',
          ['每5人就有1人以上，每週至少嗆到3次','社區長者21.8%每週至少3次進食嗆到']),
        F('避免仰頭與用吸管大口吸','MEDICAL_INTERPRETATION','individualized_care',
          '是否適合用吸管因人而異，部分患者經評估可使用特定方式，文中寫成一般原則，可能與語言治療師的個別建議衝突。','low','no',
          null,'no','clarify','屬個別化提醒。',
          '避免仰頭；是否使用吸管依語言治療師建議'),
        F('也可能導致脫水與吸入性肺炎','MEDICAL_INTERPRETATION','unsourced_claim',
          '「脫水」未見於引用的國健署文章，缺乏出處。','low','no',
          null,'no','clarify','屬出處補充。',
          '也可能影響水分攝取，並與吸入性肺炎相關'),
        F('結果反而造成營養不良與脫水','MEDICAL_INTERPRETATION','unsourced_claim',
          '因果說法未附依據，雖合理但宜改為較保守表述。','low','no',
          null,'no','clarify','屬表達方式。',
          '反而可能增加營養不良與水分不足的風險')
      ],
      card:[
        F('長者每週嗆到 3 次以上','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '主數字對象為「社區」長者研究樣本，卡面標籤未說明。','low','no',
          null,'no','clarify','屬口徑說明。',
          '社區長者每週嗆到 3 次以上（研究）'),
        F('依評估調整食物軟硬與質地','MEDICAL_INTERPRETATION','vague_term',
          '未說明由誰評估，讀者可能自行判斷質地。','low','no',
          null,'no','clarify','屬執行細節。',
          '依語言治療師評估調整食物質地')
      ]
    },
    title_alts:[
      '吃飯常嗆、喝水會咳？認識長者吞嚥障礙與安全進食5原則',
      '爸媽吃飯常嗆到、喝水會咳？5招讓長輩吃得安全',
      '常嗆咳要換吃法不是少吃：吞嚥障礙照顧指南'
    ],
    card_title_alts:[
      ['吃飯常嗆、喝水會咳？','吞嚥障礙 4 個警訊'],
      ['換吃法，不是少吃','安全進食 4 招'],
      ['長輩常嗆到？','先請語言治療師評估']
    ],
    data_addon:[
      '衛福部進食吞嚥照護指引提醒，不宜經常以果醬或蜂蜜混合磨碎藥物。',
      '國健署指出，吞嚥困難可能在進食時造成嗆咳、吸入性肺炎。',
      '65歲以上長者為公費肺炎鏈球菌疫苗對象。'
    ],
    cta:'這週陪長輩吃一頓飯，觀察他是否常嗆咳、吃得特別慢；若有，就預約醫師或語言治療師做吞嚥評估。'
  });
})();
