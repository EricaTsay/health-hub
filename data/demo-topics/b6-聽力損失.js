/* v6 示範主題：聽力損失（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-20。數據來源：WHO〈Deafness and hearing loss〉fact sheet 2026-03-03、
   衛福部 112-03-17「長者量六力」新聞稿（國健署：六大能力含聽力、建議每6個月檢測）、優活健康網 2026-03-04（聽力師公會等團體呼籲聽力篩檢納入成人健檢；企業公益稿）。
   查無國內官方公布的聽力損失盛行率最新統計。
   參考方向：健康智庫〈聽力問題別輕忽！預防要趁早〉2023/03、〈耳機怎麼戴才安全？〉2026/03。 */
(function(){
  const WHO = 'https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss';
  const REFS = [
    {title:'Deafness and hearing loss',source:'World Health Organization',url:WHO},
    {title:'「長者量六力」是六項能力的整合式評估 及早發現功能衰退，及早介入，達到延緩失能',source:'衛生福利部',url:'https://www.mohw.gov.tw/fp-16-74037-1.html'},
    {title:'聽力退化是元兇！6旬老翁封口不語 醫提醒：定期聽力篩檢、及早處理聽力問題、使用輔具是關鍵！',source:'優活健康網（蕃新聞轉載）',url:'https://n.yam.com/Article/20260304679336'}
  ];
  const TABLE = {headers:['警訊','生活中的表現'], rows:[
    ['常要別人重複','對話時常說「什麼？」，在吵雜餐廳更聽不清楚'],
    ['電視音量變大','家人覺得電視、手機音量開得特別大'],
    ['高頻聲音聽不到','聽不到電子鍋、門鈴或鳥叫等高音'],
    ['耳鳴、退縮','耳朵嗡嗡響，或因聽不清楚而減少社交']
  ]};
  const TAGS = ['聽力損失','聽力保健','助聽器','安全聆聽','長者量六力'];

  const DP_AGE = {id:'dp-hl-age', type:'data_scope', title:'年長者聽損比例的年齡範圍',
    desc:'WHO 2026年資料是「60歲以上逾25%有致殘性聽損」；坊間常見的「65歲以上每3人就有1人」未找到WHO原文。兩者年齡範圍與定義不同，AI 採用WHO原文數字。',
    current:'60歲以上逾25%有致殘性聽損（WHO 2026）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'逾25%', value:'60歲以上・致殘性聽損', note:'WHO fact sheet 2026年3月（目前採用）'},
      {label:'每3人1人', value:'65歲以上', note:'媒體與企業文宣常見說法，未見WHO原文'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'聽力損失別輕忽：認識警訊，安全聆聽從年輕開始',
    update_date:'2026/11/20',
    intro:'聽力損失會影響溝通、工作與社交，未處理的聽損也與失智及認知加速退化風險相關。世界衛生組織（WHO）2026年資料指出，60歲以上人口中逾25%有致殘性聽損，全球超過10億名年輕人因不安全的聆聽習慣，面臨永久且可避免的聽損風險；推估到2050年，全球將有近25億人有某種程度的聽力損失。',
    sections:[
      {heading:'聽力退化的4個警訊',format:'table',table:TABLE},
      {heading:'安全聆聽與預防',format:'bullets',items:[
        '使用耳機時降低音量、縮短連續聆聽時間，讓耳朵定時休息；在吵雜環境優先選擇降噪耳機，而不是把音量開大。',
        '在噪音職場或演唱會等高噪音場所，配戴耳塞等聽力保護具。',
        '避免自行使用可能傷害聽力的藥物，用藥前與醫師或藥師確認。'
      ]},
      {heading:'檢查與處理',format:'bullets',items:[
        '國健署「長者量六力」把聽力列為六大能力之一，建議家中長輩每6個月檢測一次。',
        '發現聽力變差，到耳鼻喉科接受聽力檢查，由醫師與聽力師評估是否需要助聽器等輔具。',
        '聽力師公會等團體2026年呼籲將專業聽力篩檢納入公費成人健檢，目前成人健檢尚未包含純音聽力檢查。'
      ]}
    ],
    think_tank_view:'聽力損失往往是一點一滴發生的，自己最晚發現，家人反而最早察覺。年輕時養成安全聆聽的習慣，年長後定期檢查、該配戴輔具就配戴，聽得清楚，才能維持與家人朋友的交流。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'全球統計引自WHO 2026年資料並標明年份，國內建議引自衛福部，民間呼籲標明團體，未使用療效保證用語，未推薦特定助聽器品牌。',
    ai_rationale:{basis:['WHO 2026：60歲以上逾25%有致殘性聽損、逾10億年輕人有不安全聆聽風險','國健署「長者量六力」包含聽力評估'],
      layout_reason:'先用表格讓讀者對照生活中的警訊，再給預防做法，最後說明檢查與處理管道。',
      tone:'專業易懂', tone_reason:'聽損常被忽略，需以具體情境提醒。',
      to_verify:['查無國內聽力損失盛行率的官方最新統計']},
    decision_points:[DP_AGE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'電視越開越大聲？聽力退化的4個警訊',
    update_date:'2026/11/20',
    intro:'家人常說「你電視開太大聲」、聊天時常要對方再說一次？這可能是聽力在退化。世界衛生組織2026年的資料說，60歲以上的人有超過四分之一有明顯的聽力損失，而全世界有超過10億個年輕人，因為耳機開太大聲、聽太久，正在冒著聽力受損的風險。',
    sections:[
      {heading:'這4個變化，要留意',format:'table',table:TABLE},
      {heading:'耳朵這樣保護',format:'bullets',items:[
        '戴耳機時音量開小一點、聽一段時間就讓耳朵休息；吵雜的地方用降噪耳機，不要越開越大聲。',
        '去演唱會或在很吵的地方工作，記得戴耳塞。',
        '吃藥前先問醫師或藥師，有些藥可能影響聽力。'
      ]},
      {heading:'聽不清楚怎麼辦？',format:'bullets',items:[
        '國健署建議長輩每6個月做一次「長者量六力」，聽力也是其中一項。',
        '覺得聽力變差，就去耳鼻喉科檢查，看看需不需要助聽器。',
        '目前成人健檢還沒有專業聽力檢查，聽力相關團體正在呼籲納入。'
      ]}
    ],
    think_tank_view:'聽不清楚的人常常自己不覺得，是家人先發現。下次看到爸媽把電視開得很大聲，別急著唸他們，陪他們去做一次聽力檢查吧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字引自WHO 2026年資料，語氣親切，未使用療效保證用語，未推薦特定助聽器品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以電視音量的生活情境帶出警訊、保護與檢查。', tone:'生活親切', tone_reason:'給長輩、子女與耳機族閱讀。', to_verify:[]},
    decision_points:[DP_AGE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'聽力損失：4個警訊＋保護耳朵3件事',
    update_date:'2026/11/20',
    intro:'WHO 2026年資料：60歲以上逾25%有致殘性聽損，全球逾10億年輕人因不安全聆聽而有聽損風險。',
    sections:[
      {heading:'4個警訊',format:'table',table:TABLE},
      {heading:'保護耳朵',format:'bullets',items:[
        '耳機音量調低、定時休息。',
        '高噪音場所戴耳塞。',
        '用藥前確認是否影響聽力。'
      ]},
      {heading:'檢查',format:'bullets',items:[
        '長輩每6個月做「長者量六力」。',
        '聽力變差就到耳鼻喉科檢查。'
      ]}
    ],
    think_tank_view:'年輕時安全聆聽、年長後定期檢查，是保住聽力最實際的兩件事。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字引自WHO 2026年資料，未使用療效保證用語，未推薦特定助聽器品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊、保護、檢查三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_AGE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'聽力損失', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'60 歲以上逾 1/4 有致殘性聽損', primary_visual:'逾 25%', secondary_message:'逾 10 億年輕人有不安全聆聽風險', action_priority:'安全聆聽、定期檢查'},
    headline_hook:'電視越開越大聲？', headline_main:'聽力損失 4 個警訊', title_accent:'4 個警訊',
    primary_stat:{kicker:'WHO 2026・全球', value:'逾 25%', label:'60 歲以上有致殘性聽損', note:'世界衛生組織 fact sheet'},
    secondary_stats:[
      {value:'逾 10 億', label:'年輕人有不安全聆聽風險'},
      {value:'近 25 億', label:'2050 年全球聽損人數推估'}
    ],
    knowledge_title:'4 個警訊',
    knowledge_cards:[
      {label:'要人重複', lines:['常說「什麼？」']},
      {label:'音量變大', lines:['電視、手機越開越大聲']},
      {label:'高音聽不到', lines:['門鈴、電子鍋聲音']},
      {label:'耳鳴退縮', lines:['嗡嗡響、減少社交']}
    ],
    action_title:'這樣保護耳朵',
    action_cards:[
      {key:'低', text:'耳機音量調低，定時讓耳朵休息'},
      {key:'塞', text:'高噪音場所配戴耳塞'},
      {key:'測', text:'長輩每 6 個月做長者量六力'},
      {key:'醫', text:'聽力變差到耳鼻喉科檢查'}
    ],
    carousel_suggestion:{reason:'若想把警訊、安全聆聽與輔具分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'WHO 2026', headline_main:'60 歲以上逾 1/4 有聽損'},
      {layout_type:'action', headline_hook:'耳機族注意', headline_main:'安全聆聽 3 件事'},
      {layout_type:'knowledge', headline_hook:'聽不清楚怎麼辦', headline_main:'檢查與助聽器'}]},
    hashtags:['聽力損失','聽力保健','安全聆聽','助聽器'],
    sources:['World Health Organization','衛生福利部國民健康署'],
    illustration_category:'elderly-care',
    illustration:{topic:'聽力保健', audience:'長輩、子女與耳機族', scene:'一位長者在客廳看電視，女兒把遙控器音量調低並遞上聽力檢查預約單',
      emotion:'體貼、溫暖', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult watching TV in the living room while their adult daughter lowers the volume with the remote and hands over a hearing test appointment card, caring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['WHO 2026：60歲以上逾25%有致殘性聽損'],
      layout_reason:'選 data：WHO 年長者聽損比例當主角，年輕人風險與 2050 推估在右側，下方左列警訊、右列行動。',
      tone:'專業易懂', tone_reason:'兼顧長輩與年輕耳機族。',
      to_verify:['國內盛行率查無官方最新統計']},
    decision_points:[Object.assign({}, DP_AGE, {current:'逾 25%｜60 歲以上（WHO 2026）'})],
    content_check_note:'數字引自WHO 2026年資料並標明出處，未使用療效保證用語，未推薦特定助聽器品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'聽力損失',
    collect:{
      summary:'WHO 2026年資料顯示60歲以上逾四分之一有致殘性聽損、逾10億年輕人有不安全聆聽風險；聽損與失智風險相關，國內團體呼籲將聽力篩檢納入成人健檢，「安全聆聽、定期檢查、及早使用輔具」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'60歲以上逾25%有致殘性聽損：世界衛生組織2026年3月資料指出，60歲以上人口逾25%受致殘性聽損影響（國內查無官方最新盛行率統計）。',tag:'官方統計',source:{name:'World Health Organization：Deafness and hearing loss（2026）',url:WHO}},
        {item:'年度趨勢方向',desc:'每10人約1人：WHO推估到2050年全球約每10人就有1人有致殘性聽損，有某種程度聽力損失者將近25億人。',tag:'官方統計',source:{name:'World Health Organization：Deafness and hearing loss（2026）',url:WHO}},
        {item:'政策動向',desc:'每6個月檢測一次六大能力：國健署「長者量六力」把聽力列為認知、行動、營養、視力、聽力、憂鬱六大能力之一，建議長輩每6個月檢測。聽力師公會等團體2026年呼籲將專業聽力篩檢納入成人健檢。',tag:'官方統計',source:{name:'衛生福利部：「長者量六力」是六項能力的整合式評估',url:'https://www.mohw.gov.tw/fp-16-74037-1.html'}},
        {item:'好發族群年齡層',desc:'逾10億年輕人有不安全聆聽風險：WHO指出全球超過10億名年輕成人因不安全的聆聽習慣，面臨永久且可避免的聽力損失風險，未處理的聽損也與失智風險上升相關。',tag:'官方統計',source:{name:'World Health Organization：Deafness and hearing loss（2026）',url:WHO}}
      ],
      product_view:['機會：聽損與失智、跌倒、社交退縮相關，可結合熟齡健康管理與長照保障溝通。','機會：年輕耳機族是新的溝通對象，可用安全聆聽建立健康品牌形象。','風險：避免推薦特定助聽器品牌或暗示輔具能預防失智；助聽器費用多屬自費，相關保障依條款認定。'],
      marketing_view:['機會：每年3月3日世界聽力日是固定溝通檔期。','機會：「電視越開越大聲」是子女容易察覺的生活情境。','風險：引用聽損與失智關聯時，需說明是風險相關而非因果保證。'],
      alert_level:'low',
      alert_reason:'屬長期健康議題；國內聽力篩檢納入成人健檢仍在呼籲階段，適合世界聽力日前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('未處理的聽損也與失智及認知加速退化風險相關','MEDICAL_INTERPRETATION','association_not_causation',
          '文中說明是「相關」，但未提醒讀者這不代表戴助聽器就能預防失智，讀者容易延伸成因果。','low','no',
          null,'no','clarify','屬詮釋邊界問題。',
          '未處理的聽損也與失智及認知加速退化風險相關（屬風險關聯，處理聽損是否能降低失智風險仍在研究中）'),
        F('60歲以上人口中逾25%有致殘性聽損','TERMINOLOGY_LANGUAGE','term_unexplained',
          '「致殘性聽損」未說明定義（較好的一耳聽力閾值大於35分貝），讀者可能以為是輕微聽力下降都算。','low','no',
          null,'no','clarify','補定義即可。',
          '60歲以上人口中逾25%有致殘性聽損（較好的一耳聽力閾值大於35分貝）',
          ['60歲以上的人有超過四分之一有明顯的聽力損失','60歲以上逾25%有致殘性聽損']),
        F('降低音量、縮短連續聆聽時間','MEDICAL_INTERPRETATION','vague_guidance',
          '只說「降低」「縮短」，沒有可操作的參考標準，讀者不知道要調到多小、聽多久。','low','no',
          null,'no','clarify','可補常見的參考做法並標明是一般建議。',
          '降低音量（一般建議不超過最大音量的六成）、縮短連續聆聽時間',
          ['音量開小一點、聽一段時間就讓耳朵休息','耳機音量調低、定時休息']),
        F('聽力師公會等團體2026年呼籲將專業聽力篩檢納入公費成人健檢','SOURCE_EVIDENCE','advocacy_source',
          '引用來源為企業公益宣傳稿中的團體呼籲，文中未說明國健署是否有回應，讀者可能以為政策即將上路。','low','no',
          null,'no','clarify','屬政策進度說明問題。',
          '聽力師公會等團體2026年呼籲將專業聽力篩檢納入公費成人健檢（屬民間呼籲，尚無政策時程）',
          ['聽力相關團體正在呼籲納入'])
      ],
      card:[
        F('60 歲以上有致殘性聽損','TERMINOLOGY_LANGUAGE','term_unexplained',
          '卡面「致殘性聽損」未說明定義，讀者不易理解。','low','no',
          null,'no','clarify','可換成白話。',
          '60 歲以上有明顯聽損（WHO 定義）'),
        F('耳機音量調低，定時讓耳朵休息','MEDICAL_INTERPRETATION','vague_guidance',
          '沒有可操作的參考標準。','low','no',
          null,'no','clarify','補一般建議。',
          '耳機音量不超過 6 成，定時讓耳朵休息')
      ]
    },
    title_alts:[
      '聽力損失別輕忽：認識警訊，安全聆聽從年輕開始',
      '電視越開越大聲？聽力退化的4個警訊',
      'WHO：60歲以上逾4分之1有聽損，保護耳朵這樣做'
    ],
    card_title_alts:[
      ['電視越開越大聲？','聽力損失 4 個警訊'],
      ['耳機族注意','安全聆聽保護耳朵'],
      ['60 歲以上逾 1/4','聽力保健重點']
    ],
    data_addon:[
      'WHO 2026：全球約9,510萬名5至19歲兒童有聽力損失，近6成兒童聽損可歸因於可避免的原因。',
      'WHO 2026：未處理的聽損每年造成全球近1兆美元的成本。',
      '國健署「長者量六力」：111年服務逾8萬名65歲以上長者，至少1項功能異常者占16%。'
    ],
    cta:'這週陪家中長輩用「長者量六力」做一次聽力自評；自己戴耳機時，把音量調低一格。'
  });
})();
