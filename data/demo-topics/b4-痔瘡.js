/* v6 示範主題：痔瘡（B4 消化・肝膽・呼吸）
   查證日期：2026-11-20。數據來源：衛生福利部新營醫院〈痔瘡護理〉（2023-08-23張貼）、衛福部114年死因統計（表13 結腸、直腸和肛門癌）。
   註：國內痔瘡盛行率與手術人數查無官方統計，本題不寫盛行率；大腸直腸癌死亡人數僅用於說明「出血要排除癌症」。
   參考方向：健康智庫〈微創手術－治療痔瘡〉2024/01。 */
(function(){
  const REFS = [
    {title:'痔瘡護理',source:'衛生福利部新營醫院',url:'https://www.syh.mohw.gov.tw/?aid=626&pid=105&page_name=detail&iid=38'},
    {title:'114年死因統計摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}
  ];
  const TABLE = {headers:['治療方式','適用情況'], rows:[
    ['保守療法','改善排便習慣、局部塗藥，適用輕度痔瘡'],
    ['局部注射、橡皮圈結紮','門診可做的處置，依痔瘡程度由醫師評估'],
    ['手術切除','嚴重或保守治療無效時才考慮'],
    ['無症狀','不需要手術']
  ]};
  const TAGS = ['痔瘡','便祕','排便習慣','大腸直腸健康','溫水坐浴'];

  const DP_BLEED = {id:'dp-hem-bleed', type:'data_scope', title:'癌症數字的使用範圍',
    desc:'文中引用114年結腸、直腸和肛門癌死亡7,146人，是為了說明「肛門出血不能一律當痔瘡」，並非痔瘡相關統計；國內痔瘡盛行率查無官方統計。',
    current:'114年結腸、直腸和肛門癌死亡7,146人（衛福部）',
    options:[{label:'沿用目前資料', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'痔瘡出血別自己判斷：認識痔瘡的成因、照護與治療',
    update_date:'2026/11/20',
    intro:'痔瘡是肛門周圍靜脈長期受壓而擴張所形成，便祕、腹瀉、懷孕、遺傳與久站久坐都是常見原因。衛生福利部新營醫院衛教指出，痔瘡不一定有症狀，且無症狀者居多；常見表現為解便出血、脫出、疼痛或搔癢。需要注意的是，肛門出血也可能來自大腸直腸疾病，依衛生福利部114年死因統計，結腸、直腸和肛門癌死亡7,146人，有疑慮時應安排大腸鏡檢查。',
    sections:[
      {heading:'居家照護與預防',format:'bullets',items:[
        '避免久站、久坐、久蹲，坐馬桶時不要看書報、滑手機。',
        '養成定時排便習慣；多喝水、多吃蔬菜水果等高纖食物，讓大便鬆軟。',
        '便後用水沖洗，保持肛門清潔乾燥；避免熬夜、喝酒與辛辣刺激食物。',
        '溫水坐浴：臀部浸泡約10分鐘，每天2-3次。'
      ]},
      {heading:'治療方式',format:'table',table:TABLE},
      {heading:'這些情況要就醫',format:'bullets',items:[
        '解便出血，尤其是第一次出血、出血量多或伴隨排便習慣改變。',
        '痔瘡脫出無法推回、劇烈疼痛或腫脹。',
        '醫師可能安排肛診、直腸鏡，必要時以乙狀結腸鏡或大腸鏡排除瘜肉與大腸直腸癌。'
      ]}
    ],
    think_tank_view:'很多人看到馬桶裡有血，就自行判斷是痔瘡、買藥膏擦一擦。痔瘡雖然常見，但出血也可能是大腸瘜肉或大腸直腸癌的警訊。第一次出血、年紀較長或排便習慣改變時，請先就醫確認，再談痔瘡治療；平時多喝水、多吃纖維、別在馬桶上久坐，就是最好的預防。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'照護建議引自衛福部新營醫院衛教，癌症死亡人數引自衛福部114年死因統計並說明用途，未使用療效保證用語，未推薦特定藥膏。',
    ai_rationale:{basis:['成因、症狀、照護與治療取自衛福部新營醫院衛教','結腸直腸肛門癌死亡7,146人取自衛福部114年死因統計'],
      layout_reason:'先整理居家照護，再以表格說明治療，最後強調出血就醫。',
      tone:'專業易懂', tone_reason:'需提醒讀者不要自行判斷出血原因。',
      to_verify:['國內痔瘡盛行率查無官方統計']},
    decision_points:[DP_BLEED]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'坐馬桶滑手機？小心痔瘡找上門，出血要先看醫生',
    update_date:'2026/11/20',
    intro:'上廁所滑手機、常常便祕、一坐就是一整天，都可能讓痔瘡找上門。衛福部新營醫院提醒，很多人的痔瘡沒有症狀，但如果解便出血，別急著自己擦藥，因為出血也可能是腸道其他問題。',
    sections:[
      {heading:'這樣照顧屁屁',format:'bullets',items:[
        '上廁所不滑手機、不看報紙，別蹲太久。',
        '每天固定時間上廁所，多喝水、多吃蔬果。',
        '便後用水沖洗，少熬夜、少喝酒、少吃辣。',
        '溫水坐浴約10分鐘，一天2到3次。'
      ]},
      {heading:'痔瘡怎麼治療？',format:'table',table:TABLE},
      {heading:'出血先看醫生',format:'bullets',items:[
        '第一次出血、出血很多，或排便習慣改變。',
        '痔瘡跑出來推不回去、很痛。'
      ]}
    ],
    think_tank_view:'屁股的小毛病常讓人不好意思看醫生，但大腸直腸外科醫師每天都在看。早點檢查，安心又省事。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'照護建議引自衛福部新營醫院衛教，未使用療效保證用語，未推薦特定藥膏。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'從上廁所滑手機的日常習慣切入。', tone:'生活親切', tone_reason:'降低就醫的尷尬感。', to_verify:['痔瘡盛行率查無官方統計']},
    decision_points:[DP_BLEED]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'痔瘡：照護、治療與出血警訊',
    update_date:'2026/11/20',
    intro:'痔瘡多無症狀（衛福部新營醫院）。解便出血不要自行判斷，需排除大腸直腸疾病。',
    sections:[
      {heading:'照護',format:'bullets',items:[
        '不久坐馬桶、多喝水高纖、溫水坐浴。'
      ]},
      {heading:'治療',format:'table',table:TABLE},
      {heading:'就醫',format:'bullets',items:[
        '出血、脫出無法推回、劇痛。'
      ]}
    ],
    think_tank_view:'出血先就醫確認，再談痔瘡治療。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'照護建議引自衛福部新營醫院衛教，未使用療效保證用語，未推薦特定藥膏。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為照護、治療、就醫三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['痔瘡盛行率查無官方統計']},
    decision_points:[DP_BLEED]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'痔瘡', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'解便出血別自己當痔瘡', primary_visual:'約 10 分鐘', secondary_message:'出血要排除大腸直腸疾病', action_priority:'改排便習慣'},
    headline_hook:'坐馬桶滑手機？', headline_main:'遠離痔瘡 4 件事', title_accent:'4 件事',
    hero_message:'多數痔瘡沒有症狀', hero_support:'但解便出血要先就醫確認（衛福部新營醫院）',
    action_title:'這樣照顧',
    action_cards:[
      {key:'坐', text:'不久坐馬桶，不滑手機看報紙'},
      {key:'喝', text:'多喝水、多吃蔬果高纖食物'},
      {key:'定', text:'養成定時排便習慣'},
      {key:'浴', text:'溫水坐浴約 10 分鐘，每天 2–3 次'}
    ],
    notice:'解便出血、排便習慣改變時，請就醫，必要時以**大腸鏡**排除瘜肉或癌症。',
    carousel_suggestion:{reason:'若想把照護、治療與出血警訊分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'action', headline_hook:'坐馬桶滑手機？', headline_main:'遠離痔瘡 4 件事'},
      {layout_type:'knowledge', headline_hook:'痔瘡怎麼治療', headline_main:'從保守療法到手術'},
      {layout_type:'knowledge', headline_hook:'出血別自己判斷', headline_main:'這些情況要就醫'}]},
    hashtags:['痔瘡','便祕','排便習慣','大腸直腸健康'],
    sources:['衛生福利部新營醫院','衛生福利部'],
    illustration_category:'general',
    illustration:{topic:'痔瘡預防', audience:'上班族', scene:'上班族在辦公室起身伸展，桌上放著水杯與水果',
      emotion:'輕鬆、健康', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker standing up to stretch at their desk with a water glass and fruit on the table, relaxed and healthy mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['照護建議取自衛福部新營醫院衛教'],
      layout_reason:'痔瘡重點是日常排便與照護習慣，選 action：4 個行動當主角，不放盛行率。',
      tone:'專業易懂', tone_reason:'降低就醫尷尬，強調出血要檢查。',
      to_verify:['卡面未放盛行率，因查無官方統計']},
    content_check_note:'照護建議引自衛福部新營醫院衛教，未使用療效保證用語，未推薦特定藥膏。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'痔瘡',
    collect:{
      summary:'痔瘡與便祕、久坐久站等習慣相關，多數人沒有症狀；但解便出血也可能來自大腸瘜肉或大腸直腸癌，114年結腸直腸肛門癌死亡7,146人。國內缺乏痔瘡官方盛行率，溝通重點是排便習慣與「出血先就醫」。',
      objective_data:[
        {item:'盛行率／發生率',desc:'無症狀者居多：衛福部新營醫院衛教指出，痔瘡不一定有症狀，且無症狀者居多，國內盛行率查無官方統計。',tag:'官方統計',source:{name:'衛福部新營醫院：痔瘡護理',url:'https://www.syh.mohw.gov.tw/?aid=626&pid=105&page_name=detail&iid=38'}},
        {item:'年度趨勢方向',desc:'7146人死於大腸直腸癌：114年結腸、直腸和肛門癌死亡7,146人，提醒肛門出血不能一律當成痔瘡。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'好發族群年齡層',desc:'便祕、懷孕、久站久坐：痔瘡常見原因包括便祕、腹瀉習慣、懷孕、遺傳與久站久坐，肛門出血有疑慮時應安排乙狀結腸鏡或大腸鏡。',tag:'官方統計',source:{name:'衛福部新營醫院：痔瘡護理',url:'https://www.syh.mohw.gov.tw/?aid=626&pid=105&page_name=detail&iid=38'}},
        {item:'政策動向',desc:'約10分鐘：居家照護建議溫水坐浴約10分鐘、每天2-3次，並養成定時排便、多喝水與高纖飲食。',tag:'官方統計',source:{name:'衛福部新營醫院：痔瘡護理',url:'https://www.syh.mohw.gov.tw/?aid=626&pid=105&page_name=detail&iid=38'}}
      ],
      product_view:['機會：排便習慣與大腸癌篩檢提醒可結合為腸道健康內容。','機會：上班族久坐議題可延伸至職場健康。','風險：避免推薦特定痔瘡藥膏或保健品；不宜暗示出血一定是痔瘡。'],
      marketing_view:['機會：「上廁所滑手機」是高共鳴的生活情境。','機會：可與便祕、大腸癌篩檢主題串連。','風險：議題較私密，用語宜輕鬆但不低俗。'],
      alert_level:'low',
      alert_reason:'屬常見生活型態議題，無急迫時效事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('結腸、直腸和肛門癌死亡7,146人','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '癌症死亡人數與痔瘡無直接關係，放在痔瘡文章開頭可能造成讀者過度恐慌，宜說明引用目的。','low','no',
          null,'no','clarify','屬引用目的說明。',
          '結腸、直腸和肛門癌死亡7,146人（引用以說明出血需排除癌症，非痔瘡統計）'),
        F('第一次出血、年紀較長或排便習慣改變時','MEDICAL_INTERPRETATION','vague_term',
          '「年紀較長」未定義，引用的衛教也未提供年齡切點。','low','no',
          null,'no','clarify','屬用語精確度。',
          '第一次出血或排便習慣改變時'),
        F('大腸直腸外科醫師每天都在看','TERMINOLOGY_LANGUAGE','tone_casual',
          '口語化說法無依據，可改為鼓勵就醫的中性表述。','low','no',
          null,'no','clarify','屬語氣調整。',
          '這是大腸直腸外科常見的問題'),
        F('就是最好的預防','MEDICAL_INTERPRETATION','overgeneralization',
          '「最好」屬絕對用語，缺乏依據。','low','no',
          null,'no','clarify','屬語氣調整。',
          '是重要的預防方法')
      ],
      card:[
        F('溫水坐浴約 10 分鐘，每天 2–3 次','MEDICAL_INTERPRETATION','individualized_care',
          '坐浴頻率出自醫院術後與症狀期照護衛教，無症狀者不一定需要，卡面未說明使用時機。','low','no',
          null,'no','clarify','屬適用情境說明。',
          '不適時溫水坐浴約 10 分鐘，每天 2–3 次'),
        F('多數痔瘡沒有症狀','MEDICAL_INTERPRETATION','reassurance_balance',
          'Hero 強調無症狀，可能讓有出血者也自認沒事，宜與出血警訊並列。','low','no',
          null,'no','clarify','屬訊息平衡。',
          '痔瘡常見，出血要先查原因')
      ]
    },
    title_alts:[
      '痔瘡出血別自己判斷：認識痔瘡的成因、照護與治療',
      '坐馬桶滑手機？小心痔瘡找上門，出血要先看醫生',
      '遠離痔瘡4件事：定時排便、多喝水、不久坐'
    ],
    card_title_alts:[
      ['坐馬桶滑手機？','遠離痔瘡 4 件事'],
      ['解便出血','別自己當痔瘡'],
      ['屁屁保養','從排便習慣開始']
    ],
    data_addon:[
      '內痔依脫出程度分為一至四度，另有外痔與混合痔。',
      '門診以肛診與直腸鏡即可診斷痔瘡。',
      '痔瘡出血或脫出時，坐浴後可趴臥休息。'
    ],
    cta:'從今天起上廁所不帶手機、控制在5分鐘內，每天多喝一杯水；若有解便出血，這週就掛大腸直腸外科。'
  });
})();
