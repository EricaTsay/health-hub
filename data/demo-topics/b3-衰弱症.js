/* v6 示範主題：衰弱症（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：國健署〈「長者量六力」是六項能力的整合式評估〉（2023/03/17，引106年老人狀況調查17.5%衰弱風險）、
   衛福部〈評估長者功能的6個關鍵指標〉（108年社區長者篩檢：85歲以上約每4人1人可能衰弱）、衛福部性別分析（111年老人狀況調查：75歲以上女性53.1%下肢功能衰退）、
   國健署〈長者評量缺肌力 保持健康9項功〉（2022/06/23）。
   註：111年老人狀況調查的整體衰弱比率未查到官方摘要數字，本題沿用106年數字並標註。
   參考方向：健康智庫〈衰弱症〉2022/04、〈單腳站立預測長者死亡率〉2022/07。 */
(function(){
  const REFS = [
    {title:'「長者量六力」是六項能力的整合式評估 及早發現功能衰退，及早介入，達到延緩失能',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=16771'},
    {title:'評估長者功能的6個關鍵指標',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-5266-67608-1.html'},
    {title:'111年老人狀況調查性別分析',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-88992-090ac205-5240-49d9-af95-b9936469ce20.html'},
    {title:'長者評量缺肌力 保持健康9項功',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4576&pid=15751'}
  ];
  const TABLE = {headers:['衰弱常見徵兆','可能表現'], rows:[
    ['體重減輕','沒有刻意減重，體重卻明顯下降'],
    ['容易疲憊','做什麼都覺得累、提不起勁'],
    ['肌力變差','握力變弱，從椅子站起來需要撐扶手'],
    ['行走變慢','走路速度變慢，過馬路來不及'],
    ['活動量下降','出門、做家事、社交活動明顯減少']
  ]};
  const TAGS = ['衰弱症','長者量六力','肌力訓練','健康老化','延緩失能'];

  const DP_RATE = {id:'dp-frail-rate', type:'data_scope', title:'衰弱比例的年份與定義',
    desc:'國健署引用的「17.5%有衰弱風險」出自106年老人狀況調查；111年老人狀況調查已發布，但未查到整體衰弱比率的官方摘要，只查到「75歲以上女性53.1%下肢功能衰退」。兩者定義不同，AI 沿用106年數字並標註年份。',
    current:'65歲以上長者17.5%有衰弱風險（106年老人狀況調查）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'17.5%', value:'65歲以上・衰弱風險', note:'106年老人狀況調查（目前採用）'},
      {label:'53.1%', value:'75歲以上女性・下肢功能衰退', note:'111年老人狀況調查，定義不同'},
      {label:'約每4人1人', value:'85歲以上・可能衰弱', note:'108年國健署社區長者篩檢'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'衰弱症不是正常老化：5個徵兆與逆轉衰弱的運動、營養處方',
    update_date:'2026/11/20',
    intro:'衰弱症是指長者身體儲備能力下降，面對生病、跌倒或住院等壓力時，更容易失能、住院甚至死亡的狀態。國民健康署引用衛生福利部106年老人狀況調查，65歲以上長者有17.5%有衰弱風險；108年社區長者篩檢也發現，年齡越高衰弱比例越高，85歲以上約每4人就有1人可能衰弱。衰弱是可以介入、甚至逆轉的，關鍵在及早發現。',
    sections:[
      {heading:'衰弱的5個常見徵兆',format:'table',table:TABLE},
      {heading:'及早發現：長者量六力',format:'bullets',items:[
        '國健署「長者量六力」評估認知、行動、營養、視力、聽力及憂鬱六大能力，65歲以上建議每6個月檢測一次。',
        '多重慢性疾病或75歲以上長者，是功能衰退的高風險族群，建議到專業單位深入評估。',
        '異常不代表生病，而是提醒需要加強，醫療人員可轉介社區據點的運動或營養課程。'
      ]},
      {heading:'逆轉衰弱：運動加營養',format:'bullets',items:[
        '國健署參考歐盟Vivifrail手冊，建議每週至少5天、每天30分鐘，練習步行、起立坐下、上下樓梯、舉水瓶等9項動作。',
        '多攝取肉類、魚類、牛奶和蛋等蛋白質食物，避免體重持續下降。',
        '維持社交互動，參加社區據點活動，減少久坐與獨處。'
      ]}
    ],
    think_tank_view:'衰弱像是身體的「存款」變少：平常看不出來，一場感冒或一次跌倒就可能讓長輩從此臥床。好在衰弱是可以逆轉的狀態，研究與國健署推廣的方向都指向同一件事：動起來、吃夠蛋白質、多出門。每半年用「長者量六力」幫長輩記帳一次，就能及早看見變化。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'衰弱比例標明106年老人狀況調查與108年篩檢，運動建議引自國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['17.5%衰弱風險取自國健署引106年老人狀況調查','85歲以上約每4人1人取自衛福部108年社區長者篩檢'],
      layout_reason:'先以表格說明5個徵兆，再介紹長者量六力與運動營養處方。',
      tone:'專業易懂', tone_reason:'給長者與照顧者具體可行的方向。',
      to_verify:['111年老人狀況調查的整體衰弱比率','17.5%為106年調查，資料較舊']},
    decision_points:[DP_RATE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽越來越沒力、常喊累？可能是衰弱，及早動起來',
    update_date:'2026/11/20',
    intro:'衰弱不是「老了本來就這樣」，而是身體的力氣和抵抗力都變少了，一點小病小傷就可能讓長輩倒下。國健署引用106年調查，65歲以上大約每6位就有1位有衰弱風險，85歲以上更是約每4人就有1人。好消息是，只要早點發現、動起來、吃夠營養，衰弱是可以改善的。',
    sections:[
      {heading:'這5個變化要留意',format:'table',table:TABLE},
      {heading:'先量量看',format:'bullets',items:[
        '用國健署「長者量六力」，每半年幫爸媽檢查一次。',
        '75歲以上或有好幾種慢性病的長輩，建議找醫療院所做完整評估。'
      ]},
      {heading:'一起動、一起吃',format:'bullets',items:[
        '每週5天、每天30分鐘：散步、扶椅子起立坐下、舉水瓶都可以。',
        '三餐都要有肉、魚、蛋、牛奶這類蛋白質。',
        '多帶爸媽出門走走，參加社區據點活動。'
      ]}
    ],
    think_tank_view:'陪爸媽做運動不用複雜，看電視時一起做起立坐下、扭毛巾，就是很好的開始。吃飯時多夾一塊魚、一顆蛋，力氣會慢慢回來。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明調查年份，「每6位就有1位」依17.5%換算，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從子女觀察到的變化切入。', tone:'生活親切', tone_reason:'給照顧長輩的子女閱讀。', to_verify:['111年調查的衰弱比率']},
    decision_points:[DP_RATE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'衰弱症：5個徵兆與逆轉處方',
    update_date:'2026/11/20',
    intro:'65歲以上長者17.5%有衰弱風險（106年老人狀況調查）。衰弱可以及早發現、透過運動與營養改善。',
    sections:[
      {heading:'5個徵兆',format:'table',table:TABLE},
      {heading:'及早發現',format:'bullets',items:[
        '每6個月做一次長者量六力。'
      ]},
      {heading:'逆轉處方',format:'bullets',items:[
        '每週5天、每天30分鐘運動，吃夠蛋白質。'
      ]}
    ],
    think_tank_view:'動起來、吃夠蛋白質、多出門，是逆轉衰弱的三個關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明調查年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為徵兆、發現、處方三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['17.5%為106年資料']},
    decision_points:[DP_RATE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'衰弱症', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'衰弱不是正常老化，可以逆轉', primary_visual:'17.5%', secondary_message:'5 個徵兆符合越多越要留意', action_priority:'運動加蛋白質'},
    headline_hook:'不是老了才這樣', headline_main:'衰弱症 5 個徵兆', title_accent:'5 個徵兆',
    hero_message:'約每 6 位就有 1 位', hero_support:'65 歲以上有衰弱風險（106 年老人狀況調查）',
    knowledge_title:'衰弱徵兆', knowledge_note:'出現徵兆，做一次**長者量六力**',
    knowledge_cards:[
      {label:'體重減輕', lines:['沒減肥卻變瘦']},
      {label:'容易疲憊', lines:['常喊累、提不起勁']},
      {label:'肌力變差', lines:['握力弱、起身要撐扶手']},
      {label:'行走變慢', lines:['走路速度變慢']},
      {label:'活動量少', lines:['少出門、少社交']}
    ],
    primary_stat:{value:'17.5%', label:'65 歲以上有衰弱風險', note:'衛福部 106 年老人狀況調查'},
    secondary_stats:[
      {value:'約每 4 人 1 人', label:'85 歲以上可能衰弱（108 年篩檢）'}
    ],
    action_title:'逆轉衰弱這樣做',
    action_cards:[
      {key:'動', text:'每週 5 天、每天 30 分鐘肌力平衡運動'},
      {key:'吃', text:'三餐都有肉、魚、蛋、奶等蛋白質'},
      {key:'量', text:'每 6 個月做一次長者量六力'},
      {key:'出', text:'多出門，參加社區據點活動'}
    ],
    carousel_suggestion:{reason:'若想把徵兆、評估工具與運動處方分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'不是老了才這樣', headline_main:'衰弱症 5 個徵兆'},
      {layout_type:'data', headline_hook:'衰弱有多常見', headline_main:'約每 6 位長者 1 位'},
      {layout_type:'action', headline_hook:'逆轉衰弱', headline_main:'國健署 9 項功'}]},
    hashtags:['衰弱症','長者量六力','肌力訓練','延緩失能'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'elderly-care',
    illustration:{topic:'逆轉衰弱', audience:'長者與家人', scene:'長者在家中扶著椅背做起立坐下運動，家人在旁一起做',
      emotion:'有活力、互相鼓勵', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult doing sit-to-stand exercises holding the back of a chair at home while a family member exercises alongside, encouraging mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：65歲以上17.5%有衰弱風險（106年老人狀況調查）','運動建議取自國健署9項功'],
      layout_reason:'核心是「認得衰弱徵兆」，選 knowledge：5 個徵兆當主角，比例退到下方，最後給 4 個逆轉行動。',
      tone:'專業易懂', tone_reason:'避免讓長輩覺得被貼標籤，強調可逆。',
      to_verify:['17.5%為106年資料']},
    decision_points:[Object.assign({}, DP_RATE, {current:'17.5%｜65 歲以上衰弱風險（106 年調查）'})],
    content_check_note:'比例標明調查年份，運動建議引自國健署，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'衰弱症',
    collect:{
      summary:'衰弱症是長者走向失能的前期狀態，國健署引用106年老人狀況調查指出65歲以上17.5%有衰弱風險，85歲以上約每4人就有1人可能衰弱；衰弱可透過運動與營養介入逆轉，「長者量六力」是早期發現的主要工具。',
      objective_data:[
        {item:'盛行率／發生率',desc:'17.5%有衰弱風險：國健署引用衛福部106年老人狀況調查，65歲以上長者有17.5%有衰弱風險。',tag:'官方統計',source:{name:'國民健康署：長者量六力是六項能力的整合式評估',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=16771'}},
        {item:'好發族群年齡層',desc:'約每4人1人：衛福部108年社區長者篩檢顯示衰弱比例隨年齡上升，85歲以上約每4人就有1人可能衰弱。',tag:'官方統計',source:{name:'衛生福利部：評估長者功能的6個關鍵指標',url:'https://www.mohw.gov.tw/cp-5266-67608-1.html'}},
        {item:'年度趨勢方向',desc:'53.1%下肢功能衰退：依111年老人狀況調查，75歲以上女性有53.1%出現下肢功能衰退，較65至74歲者增加34.7個百分點。',tag:'官方統計',source:{name:'衛生福利部：111年老人狀況調查性別分析',url:'https://www.mohw.gov.tw/dl-88992-090ac205-5240-49d9-af95-b9936469ce20.html'}},
        {item:'政策動向',desc:'每週至少5天、每天30分鐘：國健署參考歐盟Vivifrail手冊推廣「9項功」居家運動，並以「長者量六力」協助長者每6個月自我檢測。',tag:'官方統計',source:{name:'國民健康署：長者評量缺肌力 保持健康9項功',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4576&pid=15751'}}
      ],
      product_view:['機會：衰弱是失能與長照需求的前兆，可說明長照與失能保障的規劃時機。','機會：肌力運動課程、營養衛教可作為熟齡保戶健康管理服務。','風險：避免推銷營養補充品作為逆轉衰弱的主要方法。'],
      marketing_view:['機會：「衰弱可以逆轉」是正向訊息，適合搭配居家運動影片互動。','機會：可與肌少症、長者量六力主題串連。','風險：「衰弱」一詞可能讓長輩感到被貼標籤，用語宜溫和。'],
      alert_level:'low',
      alert_reason:'屬長期高齡健康議題，無急迫時效事件；適合在重陽節與長者健康週溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國民健康署引用衛生福利部106年老人狀況調查，65歲以上長者有17.5%有衰弱風險','DATA_FACTUAL_ACCURACY','screening_vs_diagnosis',
          '17.5%是以問卷工具篩出的「衰弱風險」，不等於經醫師診斷的衰弱症，文中標題與內文交替使用「衰弱症」，讀者可能把風險比例當成罹病率。','medium','no',
          null,'no','clarify','屬統計口徑說明。',
          '國民健康署引用衛生福利部106年老人狀況調查，65歲以上長者有17.5%經問卷篩檢屬衰弱風險（非診斷）'),
        F('衰弱是可以介入、甚至逆轉的','MEDICAL_INTERPRETATION','outcome_generalization',
          '文中未附研究或指引依據，且逆轉程度因人而異，可能形成過高期待。','low','no',
          null,'no','clarify','屬療效表達。',
          '衰弱是可以介入改善的，部分長者有機會恢復到較好的狀態'),
        F('研究與國健署推廣的方向都指向同一件事','SOURCE_EVIDENCE','vague_citation',
          '「研究」未指明出處，讀者無法查證。','low','no',
          null,'no','clarify','屬出處補充。',
          '國健署參考歐盟Vivifrail手冊推廣的方向都指向同一件事'),
        F('大約每6位就有1位有衰弱風險','DATA_FACTUAL_ACCURACY','rounding',
          '17.5%約為每5.7人1人，「每6位1位」略為低估，宜寫「將近每6位」或直接寫百分比。','low','no',
          null,'no','clarify','屬換算精確度。',
          '將近每6位就有1位（17.5%）有衰弱風險')
      ],
      card:[
        F('約每 6 位就有 1 位','DATA_FACTUAL_ACCURACY','rounding',
          '17.5%換算為每6位1位略為低估。','low','no',
          null,'no','clarify','屬換算精確度。',
          '將近每 6 位就有 1 位'),
        F('衰弱症 5 個徵兆','MEDICAL_INTERPRETATION','diagnostic_criteria',
          '常用衰弱評估以符合3項以上為衰弱、1-2項為衰弱前期，卡面只列出 5 個徵兆、未說明判讀方式，讀者可能符合 1 項就自認衰弱。','low','no',
          null,'no','clarify','判定工具不只一種，需醫療人員評估。',
          '5 個衰弱徵兆，符合多項請就醫評估')
      ]
    },
    title_alts:[
      '衰弱症不是正常老化：5個徵兆與逆轉衰弱的運動、營養處方',
      '爸媽越來越沒力、常喊累？可能是衰弱，及早動起來',
      '65歲以上17.5%有衰弱風險：從長者量六力到9項功'
    ],
    card_title_alts:[
      ['不是老了才這樣','衰弱症 5 個徵兆'],
      ['爸媽越來越沒力？','衰弱可以逆轉'],
      ['動起來、吃夠蛋白質','逆轉衰弱 4 件事']
    ],
    data_addon:[
      '111年底65歲以上人口逾408萬人，占總人口17.6%。',
      '國健署9項功包含步行、扭毛巾、舉水瓶、起立坐下、上下樓梯、拍氣球、走8字步、手臂向上、腿部伸展。',
      '運動時若出現疼痛、呼吸困難、暈眩或心悸應立即停止。'
    ],
    cta:'這週用國健署「長者量六力」LINE帳號幫爸媽做一次檢測，並從每天一起做10次扶椅起立坐下開始。'
  });
})();
