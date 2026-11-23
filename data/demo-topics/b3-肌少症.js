/* v6 示範主題：肌少症（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：國健署〈全臺醫療單位齊心 陪長輩「量六力」〉（2025/11/26，114年35.5萬名長者檢測結果、114年10月65歲以上逾467萬人）、
   國健署〈長者評量缺肌力 保持健康9項功〉（2022/06/23發布、2025/03/25更新）、國健署〈長者量六力是六項能力的整合式評估〉（2023/03/17）。
   註：國內肌少症盛行率僅在搜尋摘要看到國健署教材轉引的數字，原文頁面（健康九九）當天無法開啟，查證不到，本題不寫盛行率；
   握力、小腿圍切點同理未寫，改以「由醫療人員評估」表述。
   參考方向：健康智庫〈肌肉與骨骼健康－力弱症與肌少症〉2026/04、〈肌少症〉2022/03。 */
(function(){
  const REFS = [
    {title:'全臺醫療單位齊心 陪長輩「量六力」',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19644'},
    {title:'長者評量缺肌力 保持健康9項功',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4576&pid=15751'},
    {title:'「長者量六力」是六項能力的整合式評估 及早發現功能衰退，及早介入，達到延緩失能',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=16771'}
  ];
  const TABLE = {headers:['國健署9項功（節選）','怎麼做'], rows:[
    ['輕鬆步行','速度以能和旁人對話、但稍感費力為準'],
    ['起立坐下','坐在有扶手的穩固椅子，站起後維持1秒再坐下'],
    ['舉水瓶','雙手各握水瓶，手肘彎曲舉到與肩同高'],
    ['扭毛巾','緩慢扭小毛巾、盡量用力，訓練握力'],
    ['走8字步','地上放2瓶水間隔1公尺以上，在瓶間走8字']
  ]};
  const TAGS = ['肌少症','肌力訓練','蛋白質','長者量六力','健康老化'];

  const DP_ICOPE = {id:'dp-sarc-icope', type:'data_scope', title:'異常比例不等於肌少症',
    desc:'20.6%是114年「長者量六力」檢測中，六大能力（含行動、營養等）至少一項異常的比例，涵蓋範圍大於肌少症；國內肌少症盛行率當天查無可開啟的官方來源，AI 沒有寫入。',
    current:'114年長者量六力：35.5萬名長者中20.6%有一項能力異常',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'20.6%', value:'一項能力異常', note:'114年量六力，35.5萬人受檢（目前採用）'},
      {label:'7.2%', value:'兩項能力異常', note:'同上'},
      {label:'2.6%', value:'三項能力異常', note:'同上'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'肌少症不是老了沒力而已：及早發現、練肌力加吃對蛋白質',
    update_date:'2026/11/20',
    intro:'肌少症是指隨年齡增長，肌肉量、肌力與身體活動功能同時下降的狀態，會增加跌倒、骨折與失能的風險。依內政部統計，114年10月我國65歲以上人口已逾467萬人。國民健康署114年協助35.5萬名長者「量六力」，其中一項能力異常者占20.6%、兩項異常者占7.2%；國健署也提醒，能力異常不代表生病，而是身體功能需要再加強。',
    sections:[
      {heading:'這些變化可能是肌少症警訊',format:'bullets',items:[
        '拿東西、開瓶蓋變得吃力，握力明顯變差。',
        '從椅子站起來需要撐扶手，或走路速度變慢。',
        '小腿、手臂明顯變細，體重在沒有刻意減重下減輕。',
        '可先用「長者量六力」自我檢測行動與營養，必要時請醫療人員以握力、起坐測驗等工具評估。'
      ]},
      {heading:'國健署建議的居家肌力運動',format:'table',table:TABLE},
      {heading:'運動之外，還要吃對',format:'bullets',items:[
        '國健署建議每週至少訓練5天、每天30分鐘，搭配肌力、平衡與心肺運動。',
        '多攝取肉類、魚類、牛奶和蛋等蛋白質食物，三餐平均分配。',
        '運動時出現疼痛、呼吸困難、暈眩或心悸應立即停止，有慢性病者先與醫師討論運動強度。'
      ]}
    ],
    think_tank_view:'肌肉是長者的「行動存款」，過了中年每年都在默默流失。肌少症的好消息是：不論幾歲開始練，肌力都能進步。與其等到站不起來才著急，不如從今天起把起立坐下、舉水瓶排進看電視的時間，三餐都有一份蛋白質，並每半年做一次長者量六力追蹤。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'量六力結果引自國健署2025/11/26新聞稿，運動建議引自國健署9項功，未寫無法查證的盛行率與切點，未使用療效保證用語，未推薦特定營養品。',
    ai_rationale:{basis:['35.5萬人、20.6%取自國健署2025/11/26新聞稿','9項功與每週5天、每天30分鐘取自國健署2022年新聞（2025更新）'],
      layout_reason:'先列警訊，再以表格整理居家肌力運動，最後補充營養與安全提醒。',
      tone:'專業易懂', tone_reason:'給長者與照顧者具體可行的方法。',
      to_verify:['國內肌少症盛行率（健康九九教材頁面當天無法開啟）','握力、小腿圍等診斷切點的官方版本']},
    decision_points:[DP_ICOPE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽開瓶蓋變吃力、起身要撐扶手？小心肌少症',
    update_date:'2026/11/20',
    intro:'年紀大了覺得沒力氣，不一定只是老了，可能是肌少症：肌肉變少、力氣變小、走路變慢。國健署114年幫35.5萬名長輩做「量六力」檢測，每5位就有1位以上至少有一項能力需要加強。好消息是，肌肉什麼時候開始練都來得及。',
    sections:[
      {heading:'這些小事要留意',format:'bullets',items:[
        '開瓶蓋、提東西變吃力。',
        '從椅子站起來要撐扶手，走路變慢。',
        '手腳變細，沒減肥卻變瘦。'
      ]},
      {heading:'在家就能練',format:'table',table:TABLE},
      {heading:'吃對也很重要',format:'bullets',items:[
        '每週5天、每天30分鐘，看電視時也能做。',
        '三餐都要有肉、魚、蛋或牛奶。',
        '運動時如果痛、喘、頭暈，要馬上停下來。'
      ]}
    ],
    think_tank_view:'陪爸媽一起扭毛巾、舉水瓶，既是運動也是陪伴。吃飯時幫他們多夾一份蛋白質，肌肉就有材料慢慢長回來。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，「每5位就有1位以上」依20.6%換算，未使用療效保證用語，未推薦特定營養品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從子女觀察到的生活小事切入。', tone:'生活親切', tone_reason:'給照顧長輩的子女閱讀。', to_verify:['肌少症盛行率']},
    decision_points:[DP_ICOPE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'肌少症：警訊、居家肌力運動與蛋白質',
    update_date:'2026/11/20',
    intro:'114年35.5萬名長者量六力，20.6%有一項能力異常（國健署）。肌少症可透過運動與營養改善。',
    sections:[
      {heading:'警訊',format:'bullets',items:[
        '握力變差、起身吃力、走路變慢。'
      ]},
      {heading:'居家運動',format:'table',table:TABLE},
      {heading:'營養',format:'bullets',items:[
        '三餐都有蛋白質食物。'
      ]}
    ],
    think_tank_view:'肌力任何年齡都能練，運動加蛋白質是對抗肌少症的基本功。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，未使用療效保證用語，未推薦特定營養品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊、運動、營養三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['肌少症盛行率']},
    decision_points:[DP_ICOPE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'肌少症', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'肌肉什麼時候練都來得及', primary_visual:'每週 5 天', secondary_message:'起身吃力、握力變差要留意', action_priority:'練肌力、吃蛋白質'},
    headline_hook:'起身要撐扶手？', headline_main:'對抗肌少症 4 件事', title_accent:'4 件事',
    hero_message:'每週 5 天、每天 30 分鐘', hero_support:'國健署建議長者居家肌力與平衡運動',
    action_title:'在家這樣練',
    action_cards:[
      {key:'站', text:'扶椅起立坐下，站起維持 1 秒'},
      {key:'舉', text:'雙手握水瓶舉到與肩同高'},
      {key:'吃', text:'三餐都有肉、魚、蛋或牛奶'},
      {key:'量', text:'每半年做一次長者量六力'}
    ],
    notice:'運動時出現**疼痛、暈眩或心悸**立即停止，有慢性病先問醫師。',
    carousel_suggestion:{reason:'若想把警訊、9項功動作與營養分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'這些小事要留意', headline_main:'肌少症 3 個警訊'},
      {layout_type:'action', headline_hook:'國健署 9 項功', headline_main:'在家就能練肌力'},
      {layout_type:'action', headline_hook:'吃對蛋白質', headline_main:'三餐都要有一份'}]},
    hashtags:['肌少症','肌力訓練','蛋白質','長者量六力'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'bones-joints',
    illustration:{topic:'長者肌力訓練', audience:'長者', scene:'長者坐在椅子上雙手握著水瓶向上舉，旁邊放著毛巾',
      emotion:'有活力、自信', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult seated on a chair lifting two water bottles to shoulder height with a towel nearby, energetic and confident mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['運動建議取自國健署9項功','量六力取自國健署2025/11/26新聞稿'],
      layout_reason:'重點是居家可做的肌力訓練，選 action：插圖放大、4 個行動當主角；盛行率查無可靠來源，不放主數字。',
      tone:'專業易懂', tone_reason:'具體、可執行。',
      to_verify:['卡面未放盛行率，因查無可開啟的官方來源']},
    content_check_note:'運動建議引自國健署，未放未經查證的盛行率，未使用療效保證用語，未推薦特定營養品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'肌少症',
    collect:{
      summary:'肌少症是肌肉量、肌力與活動功能同時下降的狀態，會增加跌倒與失能風險；國健署114年協助35.5萬名長者「量六力」，20.6%有一項能力異常，並推廣每週5天、每天30分鐘的居家「9項功」，肌力訓練與蛋白質攝取是溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'20.6%有一項能力異常：國健署114年協助約35.5萬名65歲以上長者「量六力」，一項異常者7.3萬人（20.6%）、兩項異常者2.5萬人（7.2%），六力涵蓋行動、營養等，非僅肌少症。',tag:'官方統計',source:{name:'國民健康署：全臺醫療單位齊心 陪長輩「量六力」',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19644'}},
        {item:'年度趨勢方向',desc:'逾467萬人：依內政部統計，114年10月我國65歲以上人口逾467萬人，占19.9%。',tag:'官方統計',source:{name:'國民健康署：全臺醫療單位齊心 陪長輩「量六力」',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19644'}},
        {item:'政策動向',desc:'每週至少5天、每天30分鐘：國健署參考歐盟Vivifrail手冊推廣「9項功」居家運動，包括步行、起立坐下、舉水瓶、扭毛巾等，並建議多攝取蛋白質。',tag:'官方統計',source:{name:'國民健康署：長者評量缺肌力 保持健康9項功',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4576&pid=15751'}},
        {item:'好發族群年齡層',desc:'75歲以上為高風險：國健署指出，多重慢性疾病或75歲以上長者為功能衰退高風險族群，建議至專業單位深入評估。',tag:'官方統計',source:{name:'國民健康署：長者量六力是六項能力的整合式評估',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=16771'}}
      ],
      product_view:['機會：肌少症與跌倒、失能相關，可連結長照與失能保障說明。','機會：居家肌力課程、營養衛教可作為熟齡保戶健康管理服務。','風險：市面增肌營養品多，避免推薦或暗示特定商品可治療肌少症。'],
      marketing_view:['機會：「肌肉什麼時候練都來得及」正向易傳播。','機會：9項功動作簡單，適合做成短影音互動。','風險：盛行率缺少可查證的官方來源，傳播時避免引用未經查證的比例。'],
      alert_level:'low',
      alert_reason:'屬長期高齡健康議題，無急迫時效事件；適合在重陽節與運動推廣活動中溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('其中一項能力異常者占20.6%、兩項異常者占7.2%','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '量六力涵蓋認知、視力、聽力等六項能力，異常比例不等於肌少症比例，文中未說明，讀者可能誤以為是肌少症盛行率。','medium','no',
          null,'no','clarify','屬統計範圍說明。',
          '其中六大能力（含行動、營養、認知等）有一項異常者占20.6%、兩項異常者占7.2%（非肌少症盛行率）',
          ['每5位就有1位以上至少有一項能力需要加強','20.6%有一項能力異常']),
        F('不論幾歲開始練，肌力都能進步','MEDICAL_INTERPRETATION','outcome_generalization',
          '未附依據，且部分長者因疾病限制效果有限，說法可能過度保證。','low','no',
          null,'no','clarify','屬療效表達。',
          '多數長者在安全範圍內規律訓練，肌力都有機會進步'),
        F('三餐平均分配','MEDICAL_INTERPRETATION','unsourced_claim',
          '「三餐平均分配」蛋白質的建議未在引用的國健署資料中出現，缺乏出處。','low','no',
          null,'no','clarify','屬出處補充。',
          '三餐都包含蛋白質食物'),
        F('肌肉是長者的「行動存款」，過了中年每年都在默默流失','MEDICAL_INTERPRETATION','unsourced_claim',
          '「每年流失」未附幅度與出處，屬概括說法。','low','no',
          null,'no','clarify','屬出處補充。',
          '肌肉是長者的「行動存款」，隨年齡增長會逐漸流失')
      ],
      card:[
        F('每週 5 天、每天 30 分鐘','MEDICAL_INTERPRETATION','individualized_care',
          '此為國健署給一般長者的建議，衰弱或有慢性病者需依醫療人員調整，卡面 notice 只提到慢性病，未提衰弱長者。','low','no',
          null,'no','clarify','屬個別化提醒。',
          '每週 5 天、每天 30 分鐘（依體能漸進）'),
        F('三餐都有肉、魚、蛋或牛奶','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '慢性腎臟病等需限制蛋白質的長者不適用，卡面未提醒。','low','no',
          null,'no','clarify','屬適用對象說明。',
          '三餐都有肉、魚、蛋或牛奶（腎病者依醫囑）')
      ]
    },
    title_alts:[
      '肌少症不是老了沒力而已：及早發現、練肌力加吃對蛋白質',
      '爸媽開瓶蓋變吃力、起身要撐扶手？小心肌少症',
      '肌肉什麼時候練都來得及：國健署9項功對抗肌少症'
    ],
    card_title_alts:[
      ['起身要撐扶手？','對抗肌少症 4 件事'],
      ['肌肉什麼時候練都來得及','在家就能練'],
      ['練肌力、吃蛋白質','肌少症預防清單']
    ],
    data_addon:[
      '國健署9項功還包括上下樓梯、拍氣球、手臂向上與腿部伸展。',
      '運動應在光線充足、無障礙物的空間，穿著舒適運動鞋進行。',
      '114年量六力檢測中，三項能力異常者約9千人（2.6%）。'
    ],
    cta:'今天晚上看電視時，陪爸媽做10次扶椅起立坐下和10次舉水瓶，並把明天三餐的蛋白質食物先規劃好。'
  });
})();
