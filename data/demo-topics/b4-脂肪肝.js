/* v6 示範主題：脂肪肝（B4 消化・肝膽・呼吸）
   查證日期：2026-11-20。數據來源：衛福部（國健署）〈養成良好生活習慣搭配四大訣竅 遠離脂肪肝 向肝癌說不〉（111/07/28，引研究：我國脂肪肝盛行率33.29%）、
   國健署〈2成肝癌與飲食生活有關 均衡吃 規律動 向脂肪肝說NO！〉（2021/07/29，2025/03/19更新；107年癌登：75.7%肝癌由B、C肝引起）、衛福部114年死因統計（肝癌、慢性肝病）。
   註：國內脂肪肝盛行率查無官方全國調查，33.29%為國健署文章引用的研究數字。
   參考方向：健康智庫〈脂肪肝〉2022/08。 */
(function(){
  const REFS = [
    {title:'養成良好生活習慣搭配四大訣竅 遠離脂肪肝 向肝癌說不',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-5270-70706-1.html'},
    {title:'2成肝癌與飲食生活有關 均衡吃 規律動 向脂肪肝說NO！',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4306&pid=14354'},
    {title:'114年死因統計摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}
  ];
  const TABLE = {headers:['遠離脂肪肝4訣竅','怎麼做'], rows:[
    ['認識自己的BMI','BMI過高或腰圍過粗，是脂肪肝的警訊'],
    ['聰明吃','依「我的餐盤」均衡飲食，少喝含糖飲料、少吃油炸'],
    ['快樂動','每週至少150分鐘中等強度的規律運動，避免久坐'],
    ['天天量體重','掌握體重變化，循序漸進減重']
  ]};
  const TAGS = ['脂肪肝','肝癌預防','體重控制','我的餐盤','代謝健康'];

  const DP_PREV = {id:'dp-fl-prev', type:'data_scope', title:'脂肪肝盛行率是研究數字',
    desc:'33.29%是國健署文章引用的研究數字，非官方全國調查；國健署另一篇文章引用亞洲研究的29.62%。兩篇對「每1000人年轉變成肝癌」的數字也不同（0.3名與1.8名），AI 文中不寫轉變率。',
    current:'我國脂肪肝盛行率33.29%（國健署文章引研究）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'33.29%', value:'臺灣・研究', note:'國健署111年文章引用（目前採用）'},
      {label:'29.62%', value:'亞洲・研究', note:'國健署2021年文章引用Lancet 2019'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'脂肪肝不是胖子專利：認識風險與國健署遠離脂肪肝4訣竅',
    update_date:'2026/11/20',
    intro:'脂肪肝是肝細胞堆積過多脂肪，常見原因包括肥胖、高血壓、高血脂、糖尿病控制不良與過度飲酒。國民健康署文章引用研究指出，我國脂肪肝盛行率為33.29%；約2成肝癌與脂肪性肝炎等非B、C肝原因有關。依衛生福利部114年死因統計，肝和肝內膽管癌死亡7,601人，居癌症死因第2位。脂肪肝初期多無症狀，但可透過生活型態調整改善。',
    sections:[
      {heading:'脂肪肝的常見原因',format:'bullets',items:[
        '肥胖、腰圍過粗，或體重在短時間內明顯增加。',
        '高血壓、高血脂、糖尿病控制不良等代謝問題。',
        '過度飲酒；長期久坐、缺乏運動，常喝含糖飲料。'
      ]},
      {heading:'國健署遠離脂肪肝4訣竅',format:'table',table:TABLE},
      {heading:'追蹤與就醫',format:'bullets',items:[
        '健檢腹部超音波或肝功能異常時，依醫師建議定期回診追蹤。',
        '同時檢查是否有B、C型肝炎；民國75年以前出生至79歲可接受一生一次免費篩檢。',
        '減重應循序漸進，不建議極端節食。'
      ]}
    ],
    think_tank_view:'很多人看到健檢報告寫「輕度脂肪肝」就覺得沒什麼，但脂肪肝其實是代謝出問題的訊號，常和三高一起出現。好消息是，肝臟的修復能力很強，控制體重、少喝含糖飲料、每週動滿150分鐘，往往就能看到改善。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率標明為國健署引用研究，肝癌死亡引自衛福部114年死因統計，建議做法引自國健署，未使用療效保證用語，未推薦保肝產品。',
    ai_rationale:{basis:['33.29%取自國健署111年文章引用研究','肝癌死亡7,601人取自衛福部114年死因統計'],
      layout_reason:'先說明原因，再以表格整理4訣竅，最後提醒追蹤。',
      tone:'專業易懂', tone_reason:'健檢後讀者需要具體做法。',
      to_verify:['脂肪肝盛行率查無官方全國調查','「約2成肝癌與脂肪性肝炎有關」引自107年癌登，可能有更新']},
    decision_points:[DP_PREV]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'健檢報告寫脂肪肝？4招把肝養回來',
    update_date:'2026/11/20',
    intro:'健檢報告上寫「脂肪肝」，很多人看了就放一邊。國健署文章引用研究，臺灣大約每3人就有1人有脂肪肝，而且它常和肥胖、三高、喝酒一起出現。好消息是，脂肪肝多半可以靠生活習慣改善。',
    sections:[
      {heading:'為什麼會有脂肪肝？',format:'bullets',items:[
        '體重過重、肚子大一圈。',
        '血壓、血脂、血糖控制不好。',
        '常喝酒、手搖飲，久坐不動。'
      ]},
      {heading:'國健署4招',format:'table',table:TABLE},
      {heading:'別忘了追蹤',format:'bullets',items:[
        '照醫師建議定期回診，追蹤肝功能和超音波。',
        '沒篩過B、C肝的話，記得一起篩。'
      ]}
    ],
    think_tank_view:'把手搖飲換成無糖茶、晚餐後散步30分鐘，幾個月後再照一次超音波，你會看到努力的成果。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明為研究數字，「每3人就有1人」依33.29%換算，未使用療效保證用語，未推薦保肝產品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從拿到健檢報告的情境切入。', tone:'生活親切', tone_reason:'給上班族閱讀。', to_verify:['盛行率為研究數字']},
    decision_points:[DP_PREV]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'脂肪肝：原因與國健署4訣竅',
    update_date:'2026/11/20',
    intro:'國健署文章引用研究：我國脂肪肝盛行率33.29%。脂肪肝多可透過生活型態改善。',
    sections:[
      {heading:'原因',format:'bullets',items:[
        '肥胖、三高、飲酒、久坐。'
      ]},
      {heading:'4訣竅',format:'table',table:TABLE},
      {heading:'追蹤',format:'bullets',items:[
        '定期回診，並篩檢B、C肝。'
      ]}
    ],
    think_tank_view:'控制體重、少糖少油、規律運動，是逆轉脂肪肝的基本功。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明為研究數字，未使用療效保證用語，未推薦保肝產品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為原因、訣竅、追蹤三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['盛行率為研究數字']},
    decision_points:[DP_PREV]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'脂肪肝', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'約每 3 人就有 1 人有脂肪肝', primary_visual:'33.29%', secondary_message:'脂肪肝多可靠生活習慣改善', action_priority:'遠離脂肪肝 4 訣竅'},
    headline_hook:'健檢寫脂肪肝？', headline_main:'遠離脂肪肝 4 訣竅', title_accent:'4 訣竅',
    hero_message:'約每 3 人就有 1 人', hero_support:'我國脂肪肝盛行率 33.29%（國健署引研究）',
    primary_stat:{value:'33.29%', label:'我國脂肪肝盛行率', note:'國健署文章引用研究'},
    action_title:'遠離脂肪肝這樣做',
    action_cards:[
      {key:'量', text:'認識自己的 BMI，天天量體重'},
      {key:'吃', text:'依我的餐盤，少喝含糖飲料'},
      {key:'動', text:'每週 150 分鐘中等強度運動'},
      {key:'追', text:'定期回診，篩檢 B、C 肝'}
    ],
    notice:'約 **2 成肝癌**與脂肪性肝炎等非 B、C 肝原因有關，別輕忽健檢異常。',
    carousel_suggestion:{reason:'若想把原因、4訣竅與追蹤分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'為什麼會脂肪肝', headline_main:'4 個常見原因'},
      {layout_type:'action', headline_hook:'國健署 4 訣竅', headline_main:'聰明吃、快樂動'},
      {layout_type:'data', headline_hook:'肝癌與脂肪肝', headline_main:'約 2 成與生活有關'}]},
    hashtags:['脂肪肝','肝癌預防','體重控制','我的餐盤'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'metabolic',
    illustration:{topic:'脂肪肝預防', audience:'上班族', scene:'上班族把手搖飲換成一瓶水，下班後在公園快走',
      emotion:'有活力、自律', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker swapping a sugary bubble tea for a water bottle and brisk-walking in a park after work, energetic mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：脂肪肝盛行率33.29%（國健署引研究）','4訣竅取自國健署'],
      layout_reason:'脂肪肝的重點是生活調整，選 action：4 訣竅當主角，盛行率放在 Hero。',
      tone:'專業易懂', tone_reason:'具體、可執行。',
      to_verify:['33.29%為研究數字，非官方調查']},
    decision_points:[Object.assign({}, DP_PREV, {current:'33.29%｜我國脂肪肝盛行率（國健署引研究）'})],
    content_check_note:'盛行率標明為研究數字，建議做法引自國健署，未使用療效保證用語，未推薦保肝產品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'脂肪肝',
    collect:{
      summary:'脂肪肝與肥胖、三高與飲酒密切相關，國健署文章引用研究指出我國盛行率33.29%，約2成肝癌與脂肪性肝炎等非B、C肝原因有關；114年肝癌死亡7,601人，健檢常見的脂肪肝是代謝健康與肝癌預防的溝通切入點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'33.29%：國健署文章引用研究指出，我國脂肪肝盛行率為33.29%，國內尚無官方全國調查。',tag:'官方統計',source:{name:'國民健康署：遠離脂肪肝 向肝癌說不',url:'https://www.mohw.gov.tw/cp-5270-70706-1.html'}},
        {item:'年度趨勢方向',desc:'7601人死於肝癌：衛福部114年死因統計，肝和肝內膽管癌死亡7,601人，居癌症死因第2位，慢性肝病及肝硬化死亡3,510人。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'好發族群年齡層',desc:'約2成肝癌：國健署依107年癌症登記指出，75.7%肝癌由B、C型肝炎引起，約2成由脂肪性肝炎等其他原因引起。',tag:'官方統計',source:{name:'國民健康署：2成肝癌與飲食生活有關',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4306&pid=14354'}},
        {item:'政策動向',desc:'每週至少150分鐘：國健署建議以「認識BMI、聰明吃、快樂動、天天量體重」4訣竅預防脂肪肝，每週至少150分鐘中等強度運動。',tag:'官方統計',source:{name:'國民健康署：2成肝癌與飲食生活有關',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4306&pid=14354'}}
      ],
      product_view:['機會：脂肪肝與代謝症候群、肝癌相關，可作為健檢後健康管理服務的切入點。','機會：體重管理、飲食衛教可結合保戶健康促進活動。','風險：市面保肝保健品眾多，避免推薦或暗示其療效。'],
      marketing_view:['機會：健檢季後「報告寫脂肪肝怎麼辦」需求高。','機會：「手搖飲換無糖」等具體行動易擴散。','風險：盛行率為研究數字，傳播時需標明來源性質。'],
      alert_level:'low',
      alert_reason:'屬長期代謝健康議題，無急迫時效事件；適合在健檢季與減重主題溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國民健康署文章引用研究指出，我國脂肪肝盛行率為33.29%','SOURCE_EVIDENCE','secondary_citation',
          '33.29%為國健署文章轉引的研究，文中未說明研究年份與檢測方式（如超音波），讀者可能當成官方調查。','medium','yes',
          '33.29%原始研究的年份、樣本與診斷方式。','yes','confirm','國健署文章參考資料列有2012年臺灣研究，需確認。',
          '國民健康署文章引用國內研究（年份待確認）指出，我國脂肪肝盛行率為33.29%',
          ['臺灣大約每3人就有1人有脂肪肝','國健署文章引用研究：我國脂肪肝盛行率33.29%']),
        F('約2成肝癌與脂肪性肝炎等非B、C肝原因有關','DATA_FACTUAL_ACCURACY','source_year_unstated',
          '此比例出自107年癌症登記，文中未寫年份。','low','yes',
          '肝癌病因分布的最新癌登年份。','no','confirm','引用的是國健署2021年文章。',
          '約2成肝癌與脂肪性肝炎等非B、C肝原因有關（107年癌症登記）'),
        F('肝臟的修復能力很強','MEDICAL_INTERPRETATION','outcome_generalization',
          '說法缺乏依據，已進展為肝纖維化或肝硬化者未必能逆轉。','low','no',
          null,'no','clarify','屬療效表達。',
          '早期脂肪肝透過生活調整有機會改善'),
        F('幾個月後再照一次超音波，你會看到努力的成果','MEDICAL_INTERPRETATION','outcome_guarantee',
          '暗示一定會改善，屬過度保證，且追蹤時間應依醫師建議。','low','no',
          null,'no','clarify','屬療效保證用語。',
          '依醫師建議時間回診追蹤，觀察改善情形')
      ],
      card:[
        F('我國脂肪肝盛行率','SOURCE_EVIDENCE','secondary_citation',
          '主數字為研究數字，卡面 label 未標示，讀者可能當成官方統計。','low','no',
          null,'no','clarify','note 已標「引用研究」但字級小。',
          '我國脂肪肝盛行率（研究）'),
        F('約 **2 成肝癌**與脂肪性肝炎等非 B、C 肝原因有關，別輕忽健檢異常。','CURRENCY_TIMELINESS','source_year_unstated',
          '比例出自107年癌症登記，卡面未標年份。','low','no',
          null,'no','clarify','屬年份補充。',
          '約 **2 成肝癌**與脂肪性肝炎等非 B、C 肝原因有關（107 年癌登），別輕忽健檢異常。')
      ]
    },
    title_alts:[
      '脂肪肝不是胖子專利：認識風險與國健署遠離脂肪肝4訣竅',
      '健檢報告寫脂肪肝？4招把肝養回來',
      '約每3人就有1人有脂肪肝：聰明吃、快樂動、天天量體重'
    ],
    card_title_alts:[
      ['健檢寫脂肪肝？','遠離脂肪肝 4 訣竅'],
      ['約每 3 人就有 1 人','脂肪肝要當一回事'],
      ['聰明吃、快樂動','把肝養回來']
    ],
    data_addon:[
      '國健署「我的餐盤」：每天早晚一杯奶、每餐水果拳頭大、菜比水果多一點、飯跟蔬菜一樣多、豆魚蛋肉一掌心、堅果種子一茶匙。',
      '國健署文章引用亞洲研究，亞洲脂肪肝盛行率為29.62%。',
      '114年慢性肝病及肝硬化死亡3,510人。'
    ],
    cta:'如果健檢報告寫了脂肪肝，這週先把每天的含糖飲料換成無糖茶或水，並安排每週3次、每次50分鐘的快走。'
  });
})();
