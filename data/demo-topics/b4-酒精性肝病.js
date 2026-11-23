/* v6 示範主題：酒精性肝病（B4 消化・肝膽・呼吸）
   查證日期：2026-11-20。數據來源：國健署〈18歲以上國人 每4人有1人飲酒 拒絕勸酒5招 巧妙適當運用〉（引110年國民健康訪問調查）、
   國健署〈飲酒無安全量 每一口都是風險 拒酒顧肝，找回彩色人生〉、衛福部114年死因統計（表1 慢性肝病及肝硬化，分性別）。
   註：死因統計「慢性肝病及肝硬化」（K70、K73-K74）包含酒精性肝病，摘要表未單獨列出酒精性肝病死亡人數。
   參考方向：健康智庫〈酒精性肝炎〉2022/08。 */
(function(){
  const REFS = [
    {title:'18歲以上國人 每4人有1人飲酒 拒絕勸酒5招 巧妙適當運用',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=18104'},
    {title:'飲酒無安全量 每一口都是風險 拒酒顧肝，找回彩色人生',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4141&pid=13343'},
    {title:'114年死因統計摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}
  ];
  const TABLE = {headers:['酒精性肝病進程','說明'], rows:[
    ['酒精性脂肪肝','長期飲酒使肝細胞堆積脂肪，多半沒有症狀，戒酒後可改善'],
    ['酒精性肝炎','肝臟發炎，可能出現疲倦、食慾差、黃疸、腹痛'],
    ['肝纖維化、肝硬化','肝臟結構受損，可能出現腹水、靜脈曲張出血等併發症']
  ]};
  const TAGS = ['酒精性肝病','飲酒無安全量','肝硬化','拒絕勸酒','護肝'];

  const DP_SCOPE = {id:'dp-ald-scope', type:'data_scope', title:'死亡人數的範圍較大',
    desc:'死因統計的「慢性肝病及肝硬化」包含酒精性肝病（K70）與其他慢性肝病（K73-K74），摘要表未單獨公布酒精性肝病死亡人數。AI 用此數字說明肝病負擔並標註範圍。',
    current:'114年慢性肝病及肝硬化死亡3,510人（含酒精性與其他原因）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'2,480人', value:'男性', note:'114年，男性死因第11位'},
      {label:'1,030人', value:'女性', note:'114年，女性死因第15位'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'飲酒沒有安全量：酒精性肝病從脂肪肝到肝硬化的3個階段',
    update_date:'2026/11/20',
    intro:'長期飲酒會讓肝臟從酒精性脂肪肝、酒精性肝炎，逐步走向肝纖維化與肝硬化。國民健康署依110年國民健康訪問調查指出，18歲以上國人過去一個月飲酒率為24.4%（男性32%、女性17.1%），暴飲率（一次喝6杯以上）為3.9%。依衛生福利部114年死因統計，慢性肝病及肝硬化（含酒精性與其他原因）死亡3,510人，男性2,480人、約為女性的2.4倍。國健署提醒，世界衛生組織指出飲酒沒有安全量。',
    sections:[
      {heading:'酒精性肝病的3個階段',format:'table',table:TABLE},
      {heading:'這些情況要就醫',format:'bullets',items:[
        '長期飲酒，且出現疲倦、食慾變差、體重下降。',
        '皮膚或眼白變黃、肚子變大、腳水腫。',
        '吐血、解黑便或意識混亂，應立即就醫。'
      ]},
      {heading:'減酒與戒酒',format:'bullets',items:[
        '最有效的護肝方法是減少或停止飲酒，酒精性脂肪肝在戒酒後有機會改善。',
        '面對勸酒，可善用國健署「拒絕勸酒5招」，以茶代酒、事先表明不喝。',
        '難以自行戒酒時，可尋求精神科、身心科或戒酒門診協助；同時篩檢B、C型肝炎。'
      ]}
    ],
    think_tank_view:'酒精性肝病最麻煩的地方，是前期幾乎沒有症狀，等到黃疸、腹水才就醫，往往已是肝硬化。肝功能異常的飲酒者，最重要的治療就是戒酒；家人朋友的支持與「不勸酒」的社交文化，往往比藥物更關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'飲酒率引自國健署110年國民健康訪問調查，死亡人數引自衛福部114年死因統計並標註範圍，未使用療效保證用語，未推薦保肝產品。',
    ai_rationale:{basis:['飲酒率24.4%、暴飲率3.9%取自國健署（110年國民健康訪問調查）','慢性肝病及肝硬化分性別死亡取自衛福部114年死因統計表1'],
      layout_reason:'以表格說明疾病進程，再列就醫時機與減酒方法。',
      tone:'專業易懂', tone_reason:'需讓飲酒者正視風險。',
      to_verify:['110年調查為目前查到的最新一期','酒精性肝病死亡人數未單獨公布']},
    decision_points:[DP_SCOPE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'應酬喝不停，肝在默默喊救命：酒精性肝病要早知道',
    update_date:'2026/11/20',
    intro:'很多人覺得小酌沒關係，但國健署提醒，世界衛生組織說飲酒沒有安全量。國健署110年調查發現，18歲以上國人每4人就有1人在過去一個月喝過酒。長期喝酒會讓肝從脂肪肝、肝炎一路走到肝硬化，而且前期幾乎沒有感覺。',
    sections:[
      {heading:'肝會怎麼變化？',format:'table',table:TABLE},
      {heading:'出現這些要看醫生',format:'bullets',items:[
        '常喝酒又覺得很累、吃不下、變瘦。',
        '皮膚、眼白變黃，肚子變大、腳腫。',
        '吐血、大便黑黑的，要馬上就醫。'
      ]},
      {heading:'怎麼少喝一點？',format:'bullets',items:[
        '聚餐先說「我今天不喝」，用茶代酒。',
        '朋友勸酒時，可以用國健署的拒絕勸酒5招。',
        '真的戒不掉，可以找身心科或戒酒門診幫忙。'
      ]}
    ],
    think_tank_view:'下次聚餐，不勸別人喝、也替自己留一杯茶。對喝酒的家人，陪他去做肝功能檢查，比唸他更有用。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，「每4人就有1人」依24.4%換算，未使用療效保證用語，未推薦保肝產品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從應酬文化切入。', tone:'生活親切', tone_reason:'給上班族與家人閱讀。', to_verify:['110年調查為最新一期']},
    decision_points:[DP_SCOPE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'酒精性肝病：3階段與減酒',
    update_date:'2026/11/20',
    intro:'18歲以上國人過去一個月飲酒率24.4%（國健署110年調查）。飲酒沒有安全量，長期飲酒傷肝。',
    sections:[
      {heading:'3階段',format:'table',table:TABLE},
      {heading:'就醫',format:'bullets',items:[
        '黃疸、腹水、吐血、黑便。'
      ]},
      {heading:'減酒',format:'bullets',items:[
        '拒絕勸酒、必要時戒酒門診。'
      ]}
    ],
    think_tank_view:'戒酒是酒精性肝病最重要的治療。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，未使用療效保證用語，未推薦保肝產品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為階段、就醫、減酒三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['110年調查為最新一期']},
    decision_points:[DP_SCOPE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'酒精性肝病', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'每 4 人就有 1 人過去一個月喝酒', primary_visual:'24.4%', secondary_message:'飲酒沒有安全量', action_priority:'減酒、拒絕勸酒'},
    headline_hook:'飲酒沒有安全量', headline_main:'喝酒傷肝，3 階段走向肝硬化', title_accent:'3 階段',
    primary_stat:{kicker:'110 年・18 歲以上', value:'24.4%', label:'過去一個月飲酒率', note:'國健署國民健康訪問調查｜男 32%、女 17.1%'},
    chart:{type:'hbar', title:'慢性肝病及肝硬化死亡（人）', points:[
      {label:'男性', value:2480, display:'2,480', highlight:true},
      {label:'女性', value:1030, display:'1,030'}
    ], note:'114 年死因統計｜含酒精性與其他原因'},
    secondary_stats:[
      {value:'3.9%', label:'過去一個月暴飲率（一次 6 杯以上）'}
    ],
    action_title:'護肝這樣做',
    action_cards:[
      {key:'減', text:'減少飲酒，最好不喝'},
      {key:'拒', text:'用茶代酒，善用拒絕勸酒 5 招'},
      {key:'檢', text:'飲酒者定期檢查肝功能'},
      {key:'醫', text:'黃疸、腹水、黑便立即就醫'}
    ],
    carousel_suggestion:{reason:'若想把飲酒數據、疾病進程與減酒方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'飲酒有多普遍', headline_main:'每 4 人就有 1 人'},
      {layout_type:'knowledge', headline_hook:'肝怎麼壞掉', headline_main:'酒精性肝病 3 階段'},
      {layout_type:'action', headline_hook:'拒絕勸酒', headline_main:'5 招巧妙應對'}]},
    hashtags:['酒精性肝病','飲酒無安全量','肝硬化','拒絕勸酒'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'general',
    illustration:{topic:'拒絕勸酒', audience:'上班族', scene:'聚餐時一位上班族舉起茶杯婉拒同事遞來的酒',
      emotion:'自在、堅定', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker at a dinner gathering raising a cup of tea to politely decline a glass of alcohol offered by a colleague, confident mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：18歲以上過去一個月飲酒率24.4%（國健署110年調查）','分性別肝病死亡取自114年死因統計'],
      layout_reason:'關鍵訊息是「飲酒普遍、傷肝」，選 data：飲酒率當主角，分性別肝病死亡用橫條圖，最後給護肝行動。',
      tone:'專業易懂', tone_reason:'避免說教，以可做的行動收尾。',
      to_verify:['死亡人數含非酒精性原因']},
    decision_points:[Object.assign({}, DP_SCOPE, {current:'114 年慢性肝病及肝硬化：男 2,480 人、女 1,030 人'})],
    content_check_note:'飲酒率引自國健署110年調查，死亡人數引自衛福部114年死因統計並標註範圍，未使用療效保證用語，未推薦保肝產品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'酒精性肝病',
    collect:{
      summary:'國健署110年調查顯示18歲以上國人過去一個月飲酒率24.4%、暴飲率3.9%，長期飲酒可造成酒精性脂肪肝、肝炎與肝硬化；114年慢性肝病及肝硬化死亡3,510人且男性約為女性2.4倍，「飲酒無安全量」是肝病預防的溝通主軸。',
      objective_data:[
        {item:'盛行率／發生率',desc:'24.4%過去一個月曾飲酒：國健署110年國民健康訪問調查，18歲以上人口過去一個月飲酒率24.4%（男32%、女17.1%），暴飲率3.9%。',tag:'官方統計',source:{name:'國民健康署：18歲以上國人 每4人有1人飲酒',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=18104'}},
        {item:'好發族群年齡層',desc:'男性2480人：114年慢性肝病及肝硬化死亡男性2,480人、女性1,030人，男性約為女性的2.4倍（含酒精性與其他原因）。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'年度趨勢方向',desc:'3510人死於慢性肝病及肝硬化：衛福部114年死因統計，慢性肝病及肝硬化死亡3,510人，較104年4,878人下降。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'飲酒無安全量：國健署引用世界衛生組織指出飲酒沒有安全量，推廣「拒絕勸酒5招」與拒酒顧肝。',tag:'官方統計',source:{name:'國民健康署：飲酒無安全量 每一口都是風險',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4141&pid=13343'}}
      ],
      product_view:['機會：飲酒與肝病、事故傷害相關，可作為保戶健康促進與節制飲酒內容。','機會：尾牙春酒季可推出「不勸酒」友善聚餐倡議。','風險：避免推薦解酒、保肝產品，或暗示可「喝了再補」。'],
      marketing_view:['機會：尾牙春酒、年節是溝通檔期。','機會：「拒絕勸酒5招」實用好分享。','風險：避免批評飲酒者，語氣宜支持。'],
      alert_level:'low',
      alert_reason:'屬長期生活型態議題，無急迫時效事件；適合在尾牙春酒季溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('男性2,480人、約為女性的2.4倍','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '性別差異為所有慢性肝病及肝硬化，非僅酒精性肝病，放在本文中可能被理解為飲酒造成的差距。','low','no',
          null,'no','clarify','屬統計範圍說明。',
          '男性2,480人、約為女性的2.4倍（所有慢性肝病，非僅酒精性）'),
        F('酒精性脂肪肝在戒酒後有機會改善','MEDICAL_INTERPRETATION','treatment_claim',
          '說法合理但未附出處，也未說明需要多久、仍需追蹤。','low','no',
          null,'no','clarify','屬出處補充。',
          '酒精性脂肪肝在戒酒後有機會改善，仍需依醫師建議追蹤'),
        F('往往比藥物更關鍵','MEDICAL_INTERPRETATION','comparative_claim',
          '與藥物比較缺乏依據，可能讓讀者輕忽必要的醫療。','low','no',
          null,'no','clarify','屬用語風險。',
          '與醫療同樣重要'),
        F('暴飲率（一次喝6杯以上）為3.9%','DATA_FACTUAL_ACCURACY','definition_unclear',
          '「一杯」的酒精量未定義，國健署另有以60克純酒精定義暴飲的說法，讀者無法對照自己的飲酒量。','low','no',
          null,'no','clarify','屬定義說明。',
          '暴飲率（過去一個月曾一次喝6杯以上，杯數依國健署調查定義）為3.9%')
      ],
      card:[
        F('慢性肝病及肝硬化死亡（人）','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '圖表為所有原因的慢性肝病，卡面主題為酒精性肝病。','low','no',
          null,'no','clarify','note 已註明，字級小。',
          '慢性肝病及肝硬化死亡（各原因，人）'),
        F('減少飲酒，最好不喝','MEDICAL_INTERPRETATION','safety_caveat',
          '與國健署「飲酒無安全量」一致，但對已有酒精依賴者，驟然停酒可能出現戒斷症狀，卡面未提醒尋求協助。','low','no',
          null,'no','clarify','屬安全提醒。',
          '減少飲酒，酒癮者戒酒請尋求醫療協助')
      ]
    },
    title_alts:[
      '飲酒沒有安全量：酒精性肝病從脂肪肝到肝硬化的3個階段',
      '應酬喝不停，肝在默默喊救命：酒精性肝病要早知道',
      '每4人就有1人過去一個月喝酒：拒酒顧肝從聚餐開始'
    ],
    card_title_alts:[
      ['飲酒沒有安全量','喝酒傷肝，3 階段走向肝硬化'],
      ['應酬喝不停？','肝在默默喊救命'],
      ['拒絕勸酒','護肝從聚餐開始']
    ],
    data_addon:[
      '110年國民健康訪問調查：男性暴飲率6.5%、女性1.4%。',
      '肝和肝內膽管癌114年死亡7,601人，居癌症死因第2位。',
      '飲酒者也應篩檢B、C型肝炎，民國75年以前出生至79歲可免費篩檢一次。'
    ],
    cta:'下次聚餐前先決定「今天不喝」，用茶代酒；若你或家人長期飲酒，這個月就去做一次肝功能與腹部超音波檢查。'
  });
})();
