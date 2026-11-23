/* v6 示範主題：社交時差與睡眠（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-21。數據來源：衛福部轉載國家衛生研究院新聞〈您有社交時差嗎？手機程式「作息足跡」幫您瞭解自己的睡眠規律性〉（社交時差定義、引述2017年美國睡眠醫學會研究每1小時社交時差心血管疾病風險高11%、2019年Current Biology週末補眠研究）、國健署世界肥胖日新聞稿（睡眠不足為肥胖危險因子）、中央社報導兒福聯盟2020年調查（國高中職生平均睡眠6.9小時）。
   注意：國內查無成人社交時差或睡眠不足比率的官方統計；11%為國衛院新聞轉引國外研究（二手引述）。
   參考方向：健康智庫〈週末補眠？當心社交時差陷阱〉2025/10、〈入睡環境太溫暖，降低睡眠品質！〉2023/01。 */
(function(){
  const REFS = [
    {title:'您有社交時差嗎？ 手機程式「作息足跡」幫您瞭解自己的睡眠規律性',source:'衛生福利部（國家衛生研究院）',url:'https://www.mohw.gov.tw/cp-4251-50246-1.html'},
    {title:'邀全民響應世界肥胖日 一起認識肥胖 改變觀點互相支持與陪伴',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=16703'},
    {title:'國高中職生平均睡不到7小時 喝咖啡提神反成惡性循環（兒福聯盟調查）',source:'中央社',url:'https://www.cna.com.tw/news/ahel/202008170163.aspx'}
  ];
  const TABLE = {headers:['常見作息','可能的影響'], rows:[
    ['平日睡太少、週末晚睡晚起補眠','形成「社交時差」，像每週往返有時差的地方'],
    ['長期社交時差','研究指出與肥胖、糖尿病、心血管疾病風險增加相關'],
    ['週末補眠','研究發現無法恢復胰島素敏感性，甚至可能更差'],
    ['睡眠不足','國健署指出是肥胖危險因子，可能使荷爾蒙不平衡、增加進食']
  ]};
  const TAGS = ['社交時差','睡眠','週末補眠','規律作息','上班族健康'];

  const PRO = {
    content_type:'健康文章',
    title:'週末補眠補得回來嗎？認識「社交時差」與規律作息',
    update_date:'2026/11/21',
    intro:'平日因工作早起睡不夠、週末晚睡晚起補眠，就像每週在不同時區之間來回，被稱為「社交時差」。國家衛生研究院團隊指出，不規律的睡眠作息對健康的影響可能比單純睡眠不足更明顯，並引述2017年美國睡眠醫學會研究：每1小時的社交時差，心血管疾病罹病風險高11%。2019年《Current Biology》研究也發現，週末補眠無法恢復胰島素敏感性，甚至可能更差。',
    sections:[
      {heading:'社交時差怎麼影響健康',format:'table',table:TABLE},
      {heading:'你可能有社交時差',format:'bullets',items:[
        '週末起床時間比平日晚很多。',
        '週一早上特別難起床、整天昏沉。',
        '平日靠咖啡撐，假日一睡就到中午。'
      ]},
      {heading:'把作息調回來',format:'bullets',items:[
        '平日與週末的上床、起床時間盡量一致。',
        '想補眠時，以提早就寢取代週末睡到中午。',
        '睡前減少使用手機與3C產品。',
        '長期失眠或白天嚴重嗜睡，請就醫評估。'
      ]}
    ],
    think_tank_view:'週末補眠像是刷卡還債，看似補上了，其實讓生理時鐘每週都在跨時區。比起睡得更久，睡得更「規律」可能更重要：先把週末起床時間往平日靠近一小時，就是好的開始。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'社交時差定義與研究引自國家衛生研究院新聞（衛福部網站），風險數字標明為國外研究轉引，睡眠與肥胖引自國健署，未推薦特定助眠產品或App。',
    ai_rationale:{basis:['社交時差與11%心血管風險（國衛院新聞轉引美國睡眠醫學會2017）','週末補眠與胰島素敏感性（國衛院新聞轉引Current Biology 2019）'],
      layout_reason:'先用表格說明社交時差的健康影響，再列自我檢查線索，最後給調整作息做法。',
      tone:'專業易懂', tone_reason:'需說明研究來源性質。',
      to_verify:['11%為二手引述國外研究','國內查無成人社交時差官方統計']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'週間熬夜、週末睡到中午？小心「社交時差」',
    update_date:'2026/11/21',
    intro:'上班日早起睡不飽，週末就睡到中午補回來？這種作息叫做「社交時差」，就像每個禮拜都在出國倒時差。國家衛生研究院的研究團隊提醒，作息不規律對健康的影響，可能比睡不夠還明顯；國外研究也發現，每差1小時，心血管疾病風險就高11%，而且週末補眠並沒有辦法真的補回來。',
    sections:[
      {heading:'社交時差對身體的影響',format:'table',table:TABLE},
      {heading:'你有社交時差嗎？',format:'bullets',items:[
        '週末比平常晚起好幾個小時。',
        '星期一早上特別爬不起來。',
        '平日靠咖啡撐，假日睡整個上午。'
      ]},
      {heading:'這樣調回來',format:'bullets',items:[
        '平日和週末盡量同一時間睡、同一時間起。',
        '真的累，就早點睡，不要隔天睡到中午。',
        '睡前少滑手機。',
        '長期睡不好，記得去看醫生。'
      ]}
    ],
    think_tank_view:'這個週末試試看，比平常只多睡一小時就起床，星期一可能會輕鬆很多。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國家衛生研究院與國健署，風險數字標明為國外研究，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以週末補眠的生活情境切入。', tone:'生活親切', tone_reason:'給上班族與學生。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'社交時差：週末補眠補不回來',
    update_date:'2026/11/21',
    intro:'國衛院新聞引述研究：每1小時社交時差心血管疾病風險高11%；週末補眠無法恢復胰島素敏感性。',
    sections:[
      {heading:'健康影響',format:'table',table:TABLE},
      {heading:'警訊',format:'bullets',items:[
        '週末晚起數小時。',
        '週一難起床。'
      ]},
      {heading:'調整',format:'bullets',items:[
        '固定上床與起床時間。',
        '以早睡取代晚起。'
      ]}
    ],
    think_tank_view:'睡得規律，比睡得多更重要。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國家衛生研究院與國健署，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為影響、警訊、調整三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'社交時差與睡眠', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'週末補眠形成社交時差', primary_visual:'11%', secondary_message:'每 1 小時社交時差心血管風險較高', action_priority:'固定起床時間'},
    headline_hook:'週末睡到中午？', headline_main:'小心「社交時差」3 個影響', title_accent:'社交時差',
    hero_message:'每差 1 小時', hero_support:'心血管疾病風險高 11%（國衛院引述 2017 年國外研究）',
    knowledge_title:'社交時差的影響', knowledge_note:'週末補眠**補不回來**，規律比睡久重要',
    knowledge_cards:[
      {label:'心血管', icon:'heart', lines:['每 1 小時時差','風險高 11%']},
      {label:'血糖', icon:'glucose', lines:['補眠無法恢復','胰島素敏感性']},
      {label:'體重', icon:'waist', lines:['睡眠不足是','肥胖危險因子']}
    ],
    action_title:'作息這樣調',
    action_cards:[
      {key:'固', text:'平日週末同一時間起床'},
      {key:'早', text:'想補眠就提早睡，不睡到中午'},
      {key:'機', text:'睡前少用手機與 3C'},
      {key:'醫', text:'長期失眠或嗜睡請就醫'}
    ],
    carousel_suggestion:{reason:'若想把社交時差概念、健康影響與調整方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'什麼是社交時差', headline_main:'每週都在倒時差'},
      {layout_type:'knowledge', headline_hook:'週末補眠', headline_main:'3 個健康影響'},
      {layout_type:'action', headline_hook:'作息調回來', headline_main:'固定起床時間'}]},
    hashtags:['社交時差','睡眠','週末補眠','規律作息'],
    sources:['國家衛生研究院','衛生福利部國民健康署'],
    illustration_category:'sleep',
    illustration:{topic:'規律作息', audience:'上班族', scene:'週六早上一位上班族在固定時間被鬧鐘叫醒，拉開窗簾迎接陽光',
      emotion:'清爽、有精神', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'On a Saturday morning, an office worker waking up to an alarm at a regular time and opening the curtains to sunlight, refreshed and energetic, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['國衛院社交時差新聞（引述國外研究）'],
      layout_reason:'核心是理解社交時差的影響，選 knowledge：3 個健康影響當主角，最後給作息調整行動。',
      tone:'專業易懂', tone_reason:'需標註研究來源。',
      to_verify:['11%為二手引述']},
    decision_points:[],
    content_check_note:'內容引自國衛院與國健署並標明研究來源，未推薦特定產品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'社交時差與睡眠',
    collect:{
      summary:'平日睡不夠、週末補眠形成的「社交時差」，國家衛生研究院團隊指出其健康影響可能比單純睡眠不足更明顯，並引述研究每1小時社交時差心血管疾病風險高11%、週末補眠無法恢復胰島素敏感性。國內缺乏成人官方統計，上班族與學生是主要溝通族群。',
      objective_data:[
        {item:'盛行率／發生率',desc:'高11%：國家衛生研究院新聞引述2017年美國睡眠醫學會研究，每1小時的社交時差，心血管疾病罹病風險高11%（國外研究、二手引述）。',tag:'市場觀察',source:{name:'衛福部（國衛院）：您有社交時差嗎？',url:'https://www.mohw.gov.tw/cp-4251-50246-1.html'}},
        {item:'年度趨勢方向',desc:'週末補眠補不回：同篇引述2019年Current Biology研究，睡眠不足會降低胰島素敏感性，週末補眠不但無法恢復，還可能使其更差。',tag:'市場觀察',source:{name:'衛福部（國衛院）：您有社交時差嗎？',url:'https://www.mohw.gov.tw/cp-4251-50246-1.html'}},
        {item:'好發族群年齡層',desc:'平均6.9小時：兒福聯盟2020年調查顯示國高中職生平均睡眠時間為6.9小時，不到7小時（中央社報導，民間團體調查）。',tag:'市場觀察',source:{name:'中央社：國高中職生平均睡不到7小時',url:'https://www.cna.com.tw/news/ahel/202008170163.aspx'}},
        {item:'政策動向',desc:'睡眠不足是肥胖危險因子：國健署指出睡眠不足可能導致荷爾蒙不平衡、增加進食機會與疲憊感而造成肥胖。',tag:'官方統計',source:{name:'國健署：邀全民響應世界肥胖日',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=16703'}}
      ],
      product_view:['機會：睡眠與心血管、代謝健康相關，可連結健康管理服務。','機會：「週末補眠」是上班族共同經驗。','風險：避免推薦特定助眠產品或App；風險數字為國外研究，不得寫成定論。'],
      marketing_view:['機會：連假前後、開學季是溝通時點。','機會：「每週都在倒時差」的比喻好理解。','風險：國內缺乏官方統計，引用時需註明國外研究。'],
      alert_level:'low',
      alert_reason:'屬長期生活型態議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('每1小時的社交時差，心血管疾病罹病風險高11%','SOURCE_EVIDENCE','secondary_citation',
          '數字為國衛院新聞轉引2017年美國睡眠醫學會研究，屬國外族群資料；文中雖標明出處，但未說明為相關性研究、不能直接推論國人。','low','yes',
          '原始研究的期刊、研究設計與族群。','no','confirm','屬二手引述與適用族群。',
          '每1小時的社交時差，與心血管疾病罹病風險高11%相關（美國研究）',
          ['每差1小時，心血管疾病風險就高11%','每1小時社交時差心血管疾病風險高11%']),
        F('對健康的影響可能比單純睡眠不足更明顯','SOURCE_EVIDENCE','unsupported_comparison',
          '國衛院新聞以「更多研究發現」帶過，未列出比較兩者影響的具體研究。','low','yes',
          '比較不規律作息與睡眠不足健康影響的研究。','no','confirm','屬出處完整度。',
          '對健康的影響可能不亞於單純睡眠不足（國衛院研究團隊說法）',
          ['作息不規律對健康的影響，可能比睡不夠還明顯']),
        F('睡前減少使用手機與3C產品','SOURCE_EVIDENCE','unsourced_advice',
          '此建議未見於本文引用的國衛院或國健署資料。','low','no',
          null,'no','clarify','屬常見衛教。',
          null,
          ['睡前少滑手機。'])
      ],
      card:[
        F('心血管疾病風險高 11%（國衛院引述 2017 年國外研究）','SOURCE_EVIDENCE','secondary_citation',
          '國外研究的關聯數字放在主視覺位置，易被讀成國人定論。','low','no',
          null,'no','clarify','已標示出處，屬呈現強度。',
          '與心血管風險較高相關（國外研究）'),
        F('睡前少用手機與 3C','SOURCE_EVIDENCE','unsourced_advice',
          '卡面引用來源未提及此建議。','low','no',
          null,'no','clarify','屬常見衛教。',
          null)
      ]
    },
    title_alts:[
      '週末補眠補得回來嗎？認識「社交時差」與規律作息',
      '週間熬夜、週末睡到中午？小心「社交時差」',
      '每差1小時風險高11%：社交時差與睡眠規律'
    ],
    card_title_alts:[
      ['週末睡到中午？','小心「社交時差」3 個影響'],
      ['週末補眠','補不回來'],
      ['規律比睡久重要','固定起床時間']
    ],
    data_addon:[
      '國衛院團隊開發手機程式「作息足跡」，推算睡眠時間準確度達90.4%（2019年發表）。',
      '研究團隊指出不規律作息也可能與癌症及精神疾病風險相關。',
      '國健署建議兒童與家庭維持充足睡眠，每天至少8小時。'
    ],
    cta:'這個週末試著只比平日多睡一小時就起床，連續兩週看看週一的精神有沒有比較好。'
  });
})();
