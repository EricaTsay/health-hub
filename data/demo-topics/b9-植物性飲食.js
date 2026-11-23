/* v6 示範主題：植物性飲食（B9 飲食營養與運動）
   查證日期：2026-11-21。數據來源：國健署《素食飲食指南手冊》（三大營養素比例、維生素B12每日2.4微克、鈣與鐵的植物來源、用餐避免喝茶）、國健署「我的餐盤」新聞稿（豆魚蛋肉優先選豆類）、國健署健康問答〈豆漿有豐富的鈣質？是真的嗎？〉（板豆腐、豆干鈣質豐富）、衛福部〈低碳飲食 愛護地球守護健康〉。
   注意：國內查無素食或植物性飲食人口比例的官方統計。
   參考方向：健康智庫〈吃肉才有力？植物性飲食帶來續航力〉2026/02、〈缺蛋！植物性蛋白質選擇〉2022/02。 */
(function(){
  const REFS = [
    {title:'素食飲食指南手冊',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/List.aspx?nodeid=1211'},
    {title:'國健署首度公布國人「我的餐盤」 聰明吃 營養跟著來',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-16-41108-1.html'},
    {title:'豆漿有豐富的鈣質？是真的嗎？',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1425&pid=11502'},
    {title:'低碳飲食 愛護地球守護健康',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-16-40781-1.html'}
  ];
  const TABLE = {headers:['要特別注意的營養素','植物性來源'], rows:[
    ['維生素B12（每日2.4微克）','紫菜、強化B12的營養酵母，全素者必要時使用補充劑'],
    ['鈣','板豆腐、豆干等高鈣豆製品，芥蘭菜、莧菜、地瓜葉等深綠色蔬菜'],
    ['鐵','豆干、豆腐、黑芝麻、深色蔬菜；餐後搭配維生素C水果，用餐時避免喝茶'],
    ['蛋白質','黃豆製品為優先，搭配全穀雜糧與堅果種子']
  ]};
  const TAGS = ['植物性飲食','素食','蔬食','植物性蛋白質','均衡飲食'];

  const PRO = {
    content_type:'健康文章',
    title:'吃素也能吃得均衡：植物性飲食要注意的4種營養素',
    update_date:'2026/11/21',
    intro:'國民健康署「我的餐盤」建議蛋白質來源以豆類優先，也鼓勵多選新鮮、在地的蔬食。採取植物性飲食或素食時，國健署《素食飲食指南手冊》提醒，同樣要依六大類食物的建議份量攝取，並特別留意維生素B12、鈣、鐵與蛋白質；其中全素者最需注意維生素B12，成人每日建議攝取量為2.4微克。',
    sections:[
      {heading:'植物性飲食的4個營養重點',format:'table',table:TABLE},
      {heading:'素食的三大營養素比例',format:'bullets',items:[
        '醣類約占總熱量50-60%，蛋白質10-20%，脂質20-30%。',
        '食材以當季、在地、較少精製加工為主。',
        '素食加工品（素肉、素火腿）常含較多油、鹽與添加物，宜少吃。'
      ]},
      {heading:'開始吃得更「植物」',format:'bullets',items:[
        '先從一週幾餐以豆腐、豆干取代肉類開始。',
        '主食換成部分全穀雜糧。',
        '每天一湯匙堅果種子。',
        '全素、孕哺婦與兒童，建議諮詢營養師規劃。'
      ]}
    ],
    think_tank_view:'植物性飲食不是只把肉拿掉，而是用豆類、全穀和蔬菜把營養補回來。吃得「原形」比吃得「素」更重要：一盤素炸物，未必比一份豆腐青菜健康。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'營養素建議引自國健署素食飲食指南手冊，未推薦特定素食產品或營養補充品品牌。',
    ai_rationale:{basis:['維生素B12每日2.4微克（國健署素食飲食指南手冊）','豆魚蛋肉優先選豆類（國健署我的餐盤）'],
      layout_reason:'先用表格整理4種需注意的營養素與植物來源，再說明營養素比例，最後給入門做法。',
      tone:'專業易懂', tone_reason:'需具體營養素來源。',
      to_verify:['國內查無植物性飲食人口官方統計','素食加工品含較多油鹽為一般說法，手冊原文需再確認']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'想多吃蔬食？這4種營養別漏掉',
    update_date:'2026/11/21',
    intro:'不管是為了健康、環保還是信仰，越來越多人想多吃植物性食物。國健署的「我的餐盤」也建議，蛋白質優先選豆類。只是吃素或少吃肉時，要特別注意維生素B12、鈣、鐵和蛋白質；全素的人尤其要留意B12，成人每天建議2.4微克。',
    sections:[
      {heading:'這4種營養要顧好',format:'table',table:TABLE},
      {heading:'吃素也要均衡',format:'bullets',items:[
        '主食、豆類、蔬果、堅果都要有。',
        '多選當季、少加工的食材。',
        '素肉、素火腿這類加工品別吃太多。'
      ]},
      {heading:'從這裡開始',format:'bullets',items:[
        '一週先挑幾餐，用豆腐、豆干取代肉。',
        '白飯換一些糙米或雜糧。',
        '每天吃一小把堅果。',
        '全素、懷孕或小朋友吃素，最好問營養師。'
      ]}
    ],
    think_tank_view:'少吃一點肉、多吃一塊豆腐，就是植物性飲食很好的開始。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以想多吃蔬食的動機切入。', tone:'生活親切', tone_reason:'給一般讀者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'植物性飲食：B12、鈣、鐵、蛋白質',
    update_date:'2026/11/21',
    intro:'國健署建議蛋白質優先選豆類。全素者需注意維生素B12，成人每日2.4微克。',
    sections:[
      {heading:'營養重點',format:'table',table:TABLE},
      {heading:'均衡',format:'bullets',items:[
        '六大類都要吃到。',
        '少吃素食加工品。'
      ]},
      {heading:'入門',format:'bullets',items:[
        '以豆製品取代部分肉類。',
        '特殊族群諮詢營養師。'
      ]}
    ],
    think_tank_view:'吃得原形比吃得素更重要。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為重點、均衡、入門三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'植物性飲食', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'植物性飲食要顧好 4 種營養', primary_visual:'2.4 微克', secondary_message:'全素者最需注意維生素 B12', action_priority:'豆類、全穀、深綠蔬菜'},
    headline_hook:'想多吃蔬食？', headline_main:'這 4 種營養別漏掉', title_accent:'4 種營養',
    hero_message:'B12 每日 2.4 微克', hero_support:'全素者最需注意（國健署素食飲食指南）',
    knowledge_title:'植物性飲食營養重點', knowledge_note:'吃得**原形**比吃得素更重要',
    knowledge_cards:[
      {label:'維生素 B12', icon:'flask', lines:['紫菜、強化酵母','必要時補充劑']},
      {label:'鈣', icon:'check', lines:['板豆腐、豆干','深綠色蔬菜']},
      {label:'鐵', icon:'heart', lines:['豆干、黑芝麻','餐時別喝茶']},
      {label:'蛋白質', icon:'leaf', lines:['黃豆製品優先','搭配全穀堅果']}
    ],
    action_title:'從這裡開始',
    action_cards:[
      {key:'豆', text:'每週幾餐以豆腐豆干取代肉類'},
      {key:'穀', text:'主食換成部分全穀雜糧'},
      {key:'果', text:'每天一湯匙堅果種子'},
      {key:'問', text:'全素、孕婦與兒童諮詢營養師'}
    ],
    carousel_suggestion:{reason:'若想把營養重點、入門方法與素食迷思分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'植物性飲食', headline_main:'4 種營養別漏掉'},
      {layout_type:'action', headline_hook:'少肉多豆', headline_main:'從這 4 步開始'},
      {layout_type:'knowledge', headline_hook:'素食加工品', headline_main:'不等於健康'}]},
    hashtags:['植物性飲食','素食','蔬食','植物性蛋白質'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'植物性飲食', audience:'想多吃蔬食的成人', scene:'餐桌上一份豆腐、毛豆、糙米飯、深綠色蔬菜和一小碟堅果的蔬食餐',
      emotion:'清新、滿足', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A plant-based meal on a table with tofu, edamame, brown rice, dark leafy greens and a small dish of nuts, fresh and satisfying, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['國健署素食飲食指南手冊'],
      layout_reason:'核心是需留意的營養素，選 knowledge：4 種營養與植物來源當主角，最後給入門行動。',
      tone:'專業易懂', tone_reason:'具體來源。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自國健署，未推薦特定產品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'植物性飲食',
    collect:{
      summary:'國健署我的餐盤建議蛋白質優先選豆類，素食飲食指南提醒植物性飲食需特別注意維生素B12（成人每日2.4微克）、鈣、鐵與蛋白質。蔬食與低碳飲食關注度提升，但國內缺乏植物性飲食人口統計，溝通重點在「少肉多豆、吃原形」。',
      objective_data:[
        {item:'政策動向',desc:'每日2.4微克B12：國健署素食飲食指南指出全素者需注意攝取足量維生素B12，成人每日建議攝取量為2.4微克，可由紫菜、強化B12的營養酵母或補充劑取得。',tag:'官方統計',source:{name:'國健署：素食飲食指南手冊',url:'https://www.hpa.gov.tw/Pages/List.aspx?nodeid=1211'}},
        {item:'盛行率／發生率',desc:'醣類約5成以上：國健署建議素食者醣類約占總熱量50至60%，蛋白質10至20%，脂質20至30%，並依六大類食物份量攝取。',tag:'官方統計',source:{name:'國健署：素食飲食指南手冊',url:'https://www.hpa.gov.tw/Pages/List.aspx?nodeid=1211'}},
        {item:'好發族群年齡層',desc:'豆類優先：國健署我的餐盤建議豆魚蛋肉類的選擇順序為豆類優先，其次魚類海鮮、蛋類、禽畜肉，並避免加工肉品。',tag:'官方統計',source:{name:'國健署：首度公布國人「我的餐盤」',url:'https://www.mohw.gov.tw/cp-16-41108-1.html'}},
        {item:'年度趨勢方向',desc:'豆漿鈣質約牛奶1/7：國健署提醒豆漿並非良好鈣源，素食者可由添加食用級石膏的板豆腐、豆干等高鈣豆製品補鈣。',tag:'官方統計',source:{name:'國健署：豆漿有豐富的鈣質？是真的嗎？',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1425&pid=11502'}}
      ],
      product_view:['機會：植物性飲食與慢性病預防、ESG低碳議題結合。','機會：「少肉多豆」容易轉為飲食挑戰活動。','風險：避免推薦特定素食產品或補充品；不宜貶低葷食或素食任一方。'],
      marketing_view:['機會：週一無肉日、地球日是溝通時點。','機會：年輕族群對蔬食與環保接受度高。','風險：素食涉及信仰與個人選擇，語氣需尊重。'],
      alert_level:'low',
      alert_reason:'屬長期飲食議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('素食加工品（素肉、素火腿）常含較多油、鹽與添加物，宜少吃','SOURCE_EVIDENCE','unsourced_claim',
          '此說法未見於本文引用的國健署資料，屬常見營養衛教說法。','low','yes',
          '國健署或食藥署關於素食加工品鈉、油脂含量的資料。','no','confirm','需補出處。',
          '素食加工品（素肉、素火腿）購買前看營養標示的鈉與脂肪含量',
          ['素肉、素火腿這類加工品別吃太多。','少吃素食加工品。']),
        F('全素者最需注意維生素B12，成人每日建議攝取量為2.4微克','MEDICAL_INTERPRETATION','missing_risk',
          '未說明B12缺乏可能造成的影響（如貧血、神經症狀），讀者不易理解為什麼要特別注意。','low','no',
          null,'no','clarify','屬說明完整度。',
          '全素者最需注意維生素B12（長期缺乏可能影響造血與神經），成人每日建議攝取量為2.4微克'),
        F('全素、孕哺婦與兒童，建議諮詢營養師規劃','MEDICAL_INTERPRETATION','population_scope',
          '長者也是營養風險較高族群，名單未列入。','low','no',
          null,'no','clarify','屬族群完整度。',
          '全素、孕哺婦、兒童與長者，建議諮詢營養師規劃',
          ['全素、懷孕或小朋友吃素，最好問營養師。','特殊族群諮詢營養師。'])
      ],
      card:[
        F('紫菜、強化酵母','MEDICAL_INTERPRETATION','oversimplification',
          '植物性B12來源有限，全素者多半仍需補充劑，卡面排序可能讓人以為吃紫菜就足夠。','low','no',
          null,'no','clarify','屬建議強度。',
          '多半需補充劑'),
        F('全素、孕婦與兒童諮詢營養師','MEDICAL_INTERPRETATION','population_scope',
          '長者未列入。','low','no',
          null,'no','clarify','屬族群完整度。',
          '全素、孕婦、兒童與長者問營養師')
      ]
    },
    title_alts:[
      '吃素也能吃得均衡：植物性飲食要注意的4種營養素',
      '想多吃蔬食？這4種營養別漏掉',
      '少肉多豆：植物性飲食的B12、鈣、鐵、蛋白質'
    ],
    card_title_alts:[
      ['想多吃蔬食？','這 4 種營養別漏掉'],
      ['全素者注意','B12 每日 2.4 微克'],
      ['少肉多豆','從豆腐豆干開始']
    ],
    data_addon:[
      '一份乾紫菜（約10公克）可提供約6微克維生素B12（國健署素食飲食指南）。',
      '進餐時搭配富含維生素C的水果可幫助鐵吸收，茶類會抑制鐵吸收。',
      '國健署低碳飲食建議選擇新鮮食材取代加工產品。'
    ],
    cta:'這週挑兩餐，把主菜的肉換成豆腐或豆干，再配一盤深綠色蔬菜。'
  });
})();
