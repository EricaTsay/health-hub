/* v6 示範主題：食品添加物（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-20。數據來源：食藥署藥物食品安全週報第1024期（2025-05-02，18類、798個准用品項、正面表列與審查程序）、食藥署闢謠〈食品中的添加物是否會危害人體健康？〉（2017發布、2022維護）、食藥署「消費者常見之食品添加物列表」。
   參考方向：健康智庫〈食品安全－食品添加物〉2025/12、〈味精真的不健康嗎？〉2024/06。 */
(function(){
  const REFS = [
    {title:'食品添加物的把關（藥物食品安全週報第1024期）',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/tc/PublishOtherEpaperContent.aspx?id=1564&tid=5181'},
    {title:'食品中的添加物是否會危害人體健康？',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/TC/newsContent.aspx?id=22253'},
    {title:'消費者常見之食品添加物列表',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/TC/siteContent.aspx?sid=10160'}
  ];
  const TABLE = {headers:['常見說法','食藥署的說明'], rows:[
    ['添加物都是化學毒物','合法且正確使用不會危害健康；每一品項都規定使用食品範圍與限量'],
    ['業者想加什麼都可以','標準採正面表列：只有表列品項可在限量內使用，其他一律不得添加'],
    ['添加物種類很少人管','目前有18類、798個准用品項，須經專家審查與風險評估'],
    ['看不懂就不用看','購買前閱讀食品標示，優先選新鮮、少加工的食材']
  ]};
  const TAGS = ['食品添加物','食品安全','食品標示','正面表列','加工食品'];

  const PRO = {
    content_type:'健康文章',
    title:'食品添加物一定不好？認識正面表列與18類規範',
    update_date:'2026/11/20',
    intro:'食品藥物管理署依「食品添加物使用範圍及限量暨規格標準」管理食品添加物，目前有18個類別、798個准用品項，包括防腐劑、保色劑、乳化劑、甜味劑、營養添加劑、香料與色素等。標準採「正面表列」：只有表列的品項可以在規定的食品範圍與限量內使用。食藥署指出，合法且正確使用食品添加物，並不會危害人體健康。',
    sections:[
      {heading:'關於食品添加物的常見說法',format:'table',table:TABLE},
      {heading:'添加物怎麼被核准',format:'bullets',items:[
        '申請者須提供理化特性、用途與必要性、使用食品與添加量，以及動物安全性試驗等資料。',
        '食藥署依國人飲食習慣評估攝食風險，並參考國際法規與准用情形。',
        '交由衛福部食品衛生安全與營養諮議會專家審查後，才訂入標準。'
      ]},
      {heading:'消費者可以怎麼做',format:'bullets',items:[
        '購買前閱讀食品與營養標示。',
        '優先選擇新鮮蔬果、全穀與未加工的蛋白質。',
        '加工食品不是不能吃，而是不要占飲食的大部分。'
      ]}
    ],
    think_tank_view:'「零添加」常被當成賣點，但添加物的安全性取決於「品項合法、用量合規」，而不是有或沒有。真正值得在意的，是加工食品在整體飲食中占多少比例；多吃原態食物，自然就少吃了添加物。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'類別數、品項數與審查程序引自食藥署2025年週報，安全性說明引自食藥署闢謠專區，未涉及特定品牌或添加物商品。',
    ai_rationale:{basis:['18類、798個准用品項（食藥署2025-05-02週報）','正面表列管理（同上）'],
      layout_reason:'先用「說法 vs 說明」表格破除迷思，再說明審查流程，最後給消費者建議。',
      tone:'專業易懂', tone_reason:'需平衡恐慌與風險意識。',
      to_verify:['准用品項數會隨標準修正而變動']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'看到成分表一長串就怕？食品添加物這樣看',
    update_date:'2026/11/20',
    intro:'包裝上一長串看不懂的名字，常讓人擔心是不是吃進一堆化學物質。其實台灣的食品添加物是「正面表列」管理：只有政府核准的798種、分成18類的添加物，才能在規定的食品和用量內使用，其他通通不能加。食藥署也說，合法、正確使用的添加物不會危害健康。',
    sections:[
      {heading:'這些說法對嗎？',format:'table',table:TABLE},
      {heading:'添加物是怎麼核准的？',format:'bullets',items:[
        '業者要拿出安全性試驗等資料申請。',
        '政府評估國人吃進去的風險，也參考國外規定。',
        '再經過專家審查，才能列入可以用的名單。'
      ]},
      {heading:'聰明吃',format:'bullets',items:[
        '買東西前看看標示。',
        '多選新鮮的蔬果、全穀和肉蛋豆。',
        '加工食品可以吃，但不要每餐都是。'
      ]}
    ],
    think_tank_view:'與其害怕看不懂的名字，不如讓餐桌上多一點原形食物，自然就少了加工。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自食藥署，未涉及特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以看成分表的焦慮切入。', tone:'生活親切', tone_reason:'給一般消費者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'食品添加物：正面表列、18類798項',
    update_date:'2026/11/20',
    intro:'食藥署以正面表列管理食品添加物，目前18類、798個准用品項；合法正確使用不會危害健康。',
    sections:[
      {heading:'說法與說明',format:'table',table:TABLE},
      {heading:'核准流程',format:'bullets',items:[
        '提交安全性資料。',
        '風險評估與專家審查。'
      ]},
      {heading:'建議',format:'bullets',items:[
        '閱讀標示。',
        '多選原態食物。'
      ]}
    ],
    think_tank_view:'在意的不是有無添加物，而是加工食品在飲食中的比例。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自食藥署，未涉及特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為說法、流程、建議三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'食品添加物', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'食品添加物採正面表列管理', primary_visual:'798 項', secondary_message:'合法正確使用不會危害健康', action_priority:'看標示、多選原態食物'},
    headline_hook:'食品添加物一定不好？', headline_main:'正面表列管理一次看懂', title_accent:'正面表列',
    hero_message:'18 類、798 項', hero_support:'目前准用的食品添加物（食藥署 2025 年）',
    knowledge_title:'添加物怎麼管', knowledge_note:'只有表列品項，才能在**限量內**使用',
    knowledge_cards:[
      {label:'正面表列', icon:'report', lines:['沒列入的','一律不得添加']},
      {label:'限量使用', icon:'flask', lines:['規定使用食品','與最大用量']},
      {label:'專家審查', icon:'search', lines:['安全性試驗','與風險評估']}
    ],
    action_title:'消費者這樣做',
    action_cards:[
      {key:'看', text:'購買前閱讀食品與營養標示'},
      {key:'鮮', text:'優先選新鮮蔬果與全穀'},
      {key:'原', text:'蛋白質選未加工的豆魚蛋肉'},
      {key:'適', text:'加工食品不占飲食大部分'}
    ],
    carousel_suggestion:{reason:'若想把管理制度、迷思與選購建議分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'食品添加物', headline_main:'正面表列怎麼管'},
      {layout_type:'knowledge', headline_hook:'常見說法', headline_main:'4 個迷思破解'},
      {layout_type:'action', headline_hook:'聰明選購', headline_main:'看標示、選原態'}]},
    hashtags:['食品添加物','食品安全','食品標示','正面表列'],
    sources:['衛生福利部食品藥物管理署'],
    illustration_category:'general',
    illustration:{topic:'食品標示', audience:'一般消費者', scene:'一位消費者在超市比較兩包食品的成分表，購物籃裡有新鮮蔬果',
      emotion:'理性、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A shopper comparing ingredient lists on two food packages in a supermarket, a basket of fresh vegetables and fruit on their arm, rational and reassured, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['18類、798個准用品項（食藥署2025年週報）'],
      layout_reason:'核心是理解管理制度，選 knowledge：3 個管理機制當主角，最後給消費者行動。',
      tone:'專業易懂', tone_reason:'降低恐慌、建立正確觀念。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自食藥署，未涉及特定品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'食品添加物',
    collect:{
      summary:'食藥署以「食品添加物使用範圍及限量暨規格標準」正面表列管理添加物，目前18類、798個准用品項，須經安全性資料審查與專家評估；合法正確使用不會危害健康。民眾對「化學添加」的焦慮仍高，閱讀標示與多選原態食物是溝通重點。',
      objective_data:[
        {item:'政策動向',desc:'798個准用品項：食藥署2025年5月週報說明，食品添加物標準目前有18個類別、798個准用品項，包括防腐劑、保色劑、乳化劑、甜味劑、營養添加劑、香料、色素等。',tag:'官方統計',source:{name:'食藥署：藥物食品安全週報第1024期',url:'https://www.fda.gov.tw/tc/PublishOtherEpaperContent.aspx?id=1564&tid=5181'}},
        {item:'盛行率／發生率',desc:'正面表列：只有表列品項可依規定的食品範圍與限量使用，非表列品項、未准許的食品範圍及不符規格者都不能添加。',tag:'官方統計',source:{name:'食藥署：藥物食品安全週報第1024期',url:'https://www.fda.gov.tw/tc/PublishOtherEpaperContent.aspx?id=1564&tid=5181'}},
        {item:'年度趨勢方向',desc:'專家審查：新增添加物須提供理化特性、用途、添加量與動物安全性試驗資料，經食藥署風險評估並由衛福部食品衛生安全與營養諮議會審查後才訂入標準。',tag:'官方統計',source:{name:'食藥署：藥物食品安全週報第1024期',url:'https://www.fda.gov.tw/tc/PublishOtherEpaperContent.aspx?id=1564&tid=5181'}},
        {item:'好發族群年齡層',desc:'合法正確使用不危害健康：食藥署闢謠指出，衛福部標準採正面表列規範使用劑量及用途，合法且正確使用食品添加物並不會危害人體健康。',tag:'官方統計',source:{name:'食藥署：食品中的添加物是否會危害人體健康？',url:'https://www.fda.gov.tw/TC/newsContent.aspx?id=22253'}}
      ],
      product_view:['機會：食安是家庭關心的議題，適合作為保戶生活衛教。','機會：「看懂成分表」可延伸成系列內容。','風險：避免點名特定品牌或添加物商品；不宜以恐懼行銷推薦「零添加」產品。'],
      marketing_view:['機會：食安新聞發生時，民眾對添加物的疑問會增加，可預先備好知識內容。','機會：「迷思 vs 事實」格式適合社群。','風險：避免與特定食安事件連結造成誤解。'],
      alert_level:'low',
      alert_reason:'屬長期食安知識議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('合法且正確使用食品添加物，並不會危害人體健康','MEDICAL_INTERPRETATION','absolute_safety_claim',
          '「不會危害」屬絕對語氣，未提及少數人對特定添加物可能過敏或不耐（如亞硫酸鹽），宜補充個別差異。','low','no',
          null,'no','clarify','食藥署原文即為此寫法，屬補充個別差異。',
          '合法且正確使用食品添加物，一般不會危害人體健康；對特定成分過敏者仍需留意標示',
          ['合法、正確使用的添加物不會危害健康','合法正確使用不會危害健康。']),
        F('加工食品不是不能吃，而是不要占飲食的大部分','SOURCE_EVIDENCE','unsourced_advice',
          '此建議為本文自行歸納，食藥署週報的建議是「閱讀標示、優先選擇新鮮食材」，未直接提到比例。','low','no',
          null,'no','clarify','屬建議來源說明。',
          '食藥署建議優先選擇新鮮食材，加工食品宜適量',
          ['加工食品可以吃，但不要每餐都是']),
        F('目前有18個類別、798個准用品項','CURRENCY_TIMELINESS','figure_subject_to_change',
          '准用品項數會隨標準增修訂而變動，文中未標示數字的時間點（2025年5月）。','low','no',
          null,'no','clarify','屬時間點標示。',
          '截至2025年5月有18個類別、798個准用品項',
          ['只有政府核准的798種、分成18類的添加物','目前18類、798個准用品項'])
      ],
      card:[
        F('沒列入的','TERMINOLOGY_LANGUAGE','incomplete_phrase',
          '「沒列入的／一律不得添加」語意完整但省略了「未准許的食品範圍與超量」也不得使用。','low','no',
          null,'no','clarify','屬精確度。',
          '未表列或超量'),
        F('目前准用的食品添加物（食藥署 2025 年）','CURRENCY_TIMELINESS','figure_subject_to_change',
          '品項數會隨增修訂變動。','low','no',
          null,'no','clarify','已標年份，可再註明月份。',
          '准用食品添加物（食藥署 2025 年 5 月）')
      ]
    },
    title_alts:[
      '食品添加物一定不好？認識正面表列與18類規範',
      '看到成分表一長串就怕？食品添加物這樣看',
      '798個准用品項怎麼管：食品添加物的把關機制'
    ],
    card_title_alts:[
      ['食品添加物一定不好？','正面表列管理一次看懂'],
      ['成分表看不懂？','先認識這 3 個機制'],
      ['18 類、798 項','添加物這樣把關']
    ],
    data_addon:[
      '食品添加物類別包括防腐劑、保色劑、乳化劑、甜味劑、營養添加劑、香料、色素等（食藥署）。',
      '食藥署網站提供「消費者常見之食品添加物列表」可查詢。',
      '食藥署諮詢服務專線(02)2787-8200。'
    ],
    cta:'下次買包裝食品時，花10秒看一下成分表；同類商品比一比，選原料較單純的那一個。'
  });
})();
