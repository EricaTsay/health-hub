/* v6 示範主題：小兒發燒（B7 女性・男性・生育與兒童）
   查證日期：2026-11-21。數據來源：衛福部（食藥署）「寶貝發燒家長莫慌，一起學習正確用退燒藥」（2018-02-07）、
   聯合報2026-07-30（北醫附醫新生兒暨小兒重症科醫師談熱性痙攣，二手）。查無較新的官方兒童發燒衛教新聞稿。
   參考方向：健康智庫〈小兒發燒〉2024/11。 */
(function(){
  const REFS = [
    {title:'寶貝發燒家長莫慌，一起學習正確用退燒藥',source:'衛生福利部食品藥物管理署',url:'https://mohw.gov.tw/cp-16-39575-1.html'},
    {title:'5歲以下童發燒易「熱痙攣」 醫示警：家長急著壓手腳恐二度傷害（北醫附醫）',source:'聯合報',url:'https://udn.com/news/story/7266/9660128'}
  ];
  const TABLE = {headers:['情況','怎麼做'], rows:[
    ['孩子發燒','就醫找出原因，不要自行購買退燒藥'],
    ['使用退燒藥','體溫超過38.5℃且感到不舒服時，依醫師處方使用'],
    ['在家觀察','紀錄發燒的溫度與頻率'],
    ['儘速回診','高燒不退、退燒時仍活動力下降或食慾不振'],
    ['熱性痙攣','平放、頭偏一側，不壓手腳、不塞東西，記錄時間']
  ]};
  const TAGS = ['小兒發燒','退燒藥','熱性痙攣','親子育兒','用藥安全'];

  const DP_YEAR = {id:'dp-fever-year', type:'data_version', title:'官方用藥衛教是2018年版',
    desc:'衛福部食藥署的兒童退燒藥衛教發布於2018年，之後未查到更新版本；熱性痙攣的比例與處置則來自2026年醫師受訪。兩者來源層級與年份不同，AI 沒有替你合併成單一官方說法。',
    current:'體溫超過38.5℃且不舒服時，依醫師處方使用退燒藥（食藥署2018）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'食藥署 2018', value:'退燒藥使用時機', note:'官方衛教（目前採用）'},
      {label:'醫師 2026', value:'熱性痙攣處置', note:'北醫附醫醫師經聯合報引述'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'小兒發燒怎麼辦？退燒藥何時用、熱性痙攣怎麼處理',
    update_date:'2026/11/21',
    intro:'衛福部食藥署提醒，發燒是身體出現警訊的「症狀」而不是「病」，孩子發燒應就醫找出原因，切勿自行購買退燒藥；體溫超過38.5℃且感到不舒服時，可依醫師處方適時使用退燒藥。北醫附醫醫師2026年受訪指出，約3%至5%的孩子在5歲前曾發生熱性痙攣，多出現在6個月至5歲之間，家長的正確處置比慌張更重要。',
    sections:[
      {heading:'孩子發燒時這樣做',format:'table',table:TABLE},
      {heading:'認識熱性痙攣',format:'bullets',items:[
        '單純型熱性痙攣全身抽搐不超過15分鐘，24小時內只發作一次。',
        '抽搐持續超過5分鐘仍未停止，應視為神經急症。',
        '第一次發作、發作超過5分鐘，或發作後遲遲無法恢復意識，應立即送醫。'
      ]},
      {heading:'用藥安全提醒',format:'bullets',items:[
        '部分病毒感染可能持續發燒一週或更久，應依醫師指示追蹤。',
        '用藥後出現疹、破、痛、紅、腫、燒等過敏症狀，應停藥並就醫。',
        '不要用湯匙、筷子塞入抽搐孩子的口中，以免受傷。'
      ]}
    ],
    think_tank_view:'發燒本身不可怕，可怕的是慌張下的錯誤處置。記住兩件事：退燒藥依醫師處方使用、不自行購買；孩子抽搐時先讓他平躺、頭偏一側並記錄時間，超過5分鐘就送醫。冷靜，是家長最好的急救工具。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'用藥原則引自食藥署並標明年份，熱性痙攣比例標明為醫師受訪說法，未推薦特定藥品，未使用療效保證用語。',
    ai_rationale:{basis:['38.5℃、不自行購藥、回診時機（食藥署2018-02-07）','3%至5%、5分鐘、處置方式（北醫附醫醫師，聯合報2026-07-30）'],
      layout_reason:'先用表格整理發燒與熱性痙攣的處理，再說明熱性痙攣，最後給用藥安全提醒。',
      tone:'專業易懂', tone_reason:'家長需要冷靜、可照做的步驟。',
      to_verify:['官方用藥衛教為2018年版','3%至5%為醫師說法','3個月以下嬰兒發燒就醫門檻未查到官方說法，未寫']},
    decision_points:[DP_YEAR]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'寶寶發燒別慌！退燒藥怎麼用、抽搐時怎麼辦',
    update_date:'2026/11/21',
    intro:'孩子半夜發燒，爸媽最緊張。食藥署提醒，發燒是身體在發出警訊，要帶去看醫生找原因，不要自己買退燒藥。醫師也說，大約每100個孩子中有3到5個，5歲前曾因發燒抽搐（熱性痙攣），這時候冷靜處理最重要。',
    sections:[
      {heading:'發燒處理小抄',format:'table',table:TABLE},
      {heading:'孩子抽搐了怎麼辦？',format:'bullets',items:[
        '讓孩子平躺在安全的地方，頭偏向一邊。',
        '不要壓住手腳，也不要塞任何東西到嘴裡。',
        '看時間，超過5分鐘或第一次發作，馬上送醫。'
      ]},
      {heading:'這些狀況要回診',format:'bullets',items:[
        '燒一直退不下來。',
        '燒退了但還是沒精神、吃不下。',
        '吃藥後起疹子或不舒服。'
      ]}
    ],
    think_tank_view:'把這張小抄存在手機裡，半夜孩子發燒時，就能一步一步冷靜處理。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自食藥署與醫師說法並標明出處，語氣親切，未推薦特定藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以半夜發燒情境帶出處理步驟。', tone:'生活親切', tone_reason:'給新手爸媽閱讀。', to_verify:[]},
    decision_points:[DP_YEAR]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'小兒發燒：用藥與熱性痙攣',
    update_date:'2026/11/21',
    intro:'發燒應就醫找原因，退燒藥依醫師處方使用（食藥署）。熱性痙攣超過5分鐘立即送醫。',
    sections:[
      {heading:'處理重點',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '不自行購買退燒藥。',
        '抽搐時不壓手腳、不塞東西。'
      ]}
    ],
    think_tank_view:'冷靜處理、依醫囑用藥。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自食藥署與醫師說法，未推薦特定藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為重點與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_YEAR]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'小兒發燒', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'發燒是症狀不是病，就醫找原因', primary_visual:'38.5℃', secondary_message:'熱性痙攣超過 5 分鐘立即送醫', action_priority:'依醫囑用藥、冷靜處置'},
    headline_hook:'寶寶發燒別慌！', headline_main:'發燒與熱性痙攣處理重點', title_accent:'處理重點',
    hero_message:'超過 38.5℃ 且不舒服', hero_support:'依醫師處方使用退燒藥（食藥署）',
    knowledge_title:'熱性痙攣這樣做', knowledge_note:'抽搐超過 5 分鐘，**立即送醫**',
    knowledge_cards:[
      {label:'平放', icon:'home', lines:['放在安全地面','頭偏向一側']},
      {label:'不壓不塞', icon:'shield', lines:['不壓手腳','不塞東西入口']},
      {label:'記時間', icon:'check', lines:['記錄抽搐開始','與持續時間']}
    ],
    primary_stat:{value:'3%–5%', label:'孩子 5 歲前曾發生熱性痙攣', note:'北醫附醫醫師受訪（2026）'},
    secondary_stats:[
      {value:'5 分鐘', label:'抽搐超過即視為急症'},
      {value:'6 個月–5 歲', label:'熱性痙攣好發年齡'}
    ],
    action_title:'發燒時這樣做',
    action_cards:[
      {key:'醫', text:'就醫找原因，不自行買退燒藥'},
      {key:'記', text:'紀錄發燒溫度與頻率'},
      {key:'藥', text:'超過 38.5℃ 且不舒服依處方用藥'},
      {key:'回', text:'高燒不退或沒精神吃不下要回診'}
    ],
    carousel_suggestion:{reason:'若想把用藥、熱性痙攣與回診分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'action', headline_hook:'寶寶發燒別慌', headline_main:'退燒藥依醫囑用'},
      {layout_type:'knowledge', headline_hook:'孩子抽搐了', headline_main:'熱性痙攣 3 步驟'},
      {layout_type:'knowledge', headline_hook:'這些狀況要回診', headline_main:'高燒不退、沒精神'}]},
    hashtags:['小兒發燒','退燒藥','熱性痙攣','親子育兒'],
    sources:['衛生福利部食品藥物管理署','北醫附醫（媒體引述）'],
    illustration_category:'general',
    illustration:{topic:'兒童發燒照護', audience:'新手爸媽', scene:'家長在夜晚床邊替發燒的孩子量體溫並記錄在本子上',
      emotion:'冷靜、細心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A parent at night by the bedside taking a feverish child\'s temperature and writing it in a notebook, calm and attentive, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['38.5℃（食藥署2018）','3%至5%、5分鐘（北醫附醫醫師2026）'],
      layout_reason:'核心是冷靜處置，選 knowledge：熱性痙攣 3 步驟放中段，比例退到下方，最後給發燒處理行動。',
      tone:'專業易懂', tone_reason:'降低家長恐慌。',
      to_verify:['官方衛教為2018年版']},
    decision_points:[Object.assign({}, DP_YEAR, {current:'超過 38.5℃ 且不舒服（食藥署 2018）'})],
    content_check_note:'內容引自食藥署與醫師說法，未推薦特定藥品，未使用療效保證用語。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'小兒發燒',
    collect:{
      summary:'孩子發燒是家長最常見的就醫原因之一，食藥署提醒發燒應就醫找原因、不自行購買退燒藥；醫師指出約3%至5%的孩子5歲前曾發生熱性痙攣。「依醫囑用藥、熱性痙攣冷靜處置、注意回診徵兆」是新手家庭值得長期溝通的育兒議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'3%至5%：北醫附醫新生兒暨小兒重症科醫師2026年受訪指出，約3%至5%的孩子在5歲前曾發生熱性痙攣，多出現在6個月至5歲之間（媒體引述）。',tag:'市場觀察',source:{name:'聯合報：5歲以下童發燒易「熱痙攣」 醫示警',url:'https://udn.com/news/story/7266/9660128'}},
        {item:'年度趨勢方向',desc:'持續發燒可達一週：食藥署指出部分病毒感染可能持續發燒一週甚至更久，家長應紀錄發燒溫度與頻率，高燒不退或退燒後仍活動力下降、食慾不振應儘速回診。',tag:'官方統計',source:{name:'衛生福利部：寶貝發燒家長莫慌，一起學習正確用退燒藥',url:'https://mohw.gov.tw/cp-16-39575-1.html'}},
        {item:'政策動向',desc:'38.5℃且不舒服才用藥：食藥署提醒孩子發燒應就醫治療、切勿自行購買退燒藥，體溫超過38.5℃且感到不舒服時，可依醫師處方適時給予退燒藥（2018年衛教）。',tag:'官方統計',source:{name:'衛生福利部：寶貝發燒家長莫慌，一起學習正確用退燒藥',url:'https://mohw.gov.tw/cp-16-39575-1.html'}},
        {item:'好發族群年齡層',desc:'超過5分鐘視為急症：醫師指出熱性痙攣抽搐持續超過5分鐘應視為神經急症，第一次發作、超過5分鐘或發作後無法恢復意識應立即送醫，處置時勿壓手腳、勿塞物入口。',tag:'市場觀察',source:{name:'聯合報：5歲以下童發燒易「熱痙攣」 醫示警',url:'https://udn.com/news/story/7266/9660128'}}
      ],
      product_view:['機會：新手家庭是保障規劃關鍵時點，可搭配兒童照護衛教。','機會：兒童急診與住院醫療保障的條款說明，回應父母需求。','風險：不推薦任何退燒藥或兒童用藥。'],
      marketing_view:['機會：秋冬換季與流感季是溝通時點。','機會：「發燒處理小抄」是實用、易收藏的內容。','風險：避免以抽搐畫面製造恐慌。'],
      alert_level:'low',
      alert_reason:'屬長期育兒衛教議題，適合在換季時溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('約3%至5%的孩子在5歲前曾發生熱性痙攣','SOURCE_EVIDENCE','secondary_citation',
          '文中已註明是北醫附醫醫師受訪，但沒有研究或官方出處，屬二手引述。','low','yes',
          '熱性痙攣盛行率的研究或兒科醫學會衛教。','no','confirm','屬二手引述。',
          '約3%至5%的孩子在5歲前曾發生熱性痙攣（醫師受訪說法）'),
        F('冷靜，是家長最好的急救工具','COMPLIANCE_RISK','oversimplified',
          '智庫觀點的說法容易讓讀者忽略「超過5分鐘、第一次發作要送醫」的必要行動。','low','no',
          null,'no','clarify','屬語氣調整。',
          '冷靜處置並把握送醫時機，是家長最重要的兩件事'),
        F('食藥署提醒，發燒是身體在發出警訊','CURRENCY_TIMELINESS','old_guidance',
          '生活親切版引用的食藥署衛教是2018年版本，文章沒有標示年份。','low','no',
          null,'no','clarify','補上年份即可。',
          '食藥署2018年提醒，發燒是身體在發出警訊'),
        F('熱性痙攣超過5分鐘立即送醫','SOURCE_EVIDENCE','source_unstated',
          '簡潔有力版沒說明這是醫師受訪說法，也漏掉「第一次發作」同樣要送醫。','low','no',
          null,'no','clarify','補上條件即可。',
          '熱性痙攣超過5分鐘或第一次發作，立即送醫（醫師建議）')
      ],
      card:[
        F('孩子 5 歲前曾發生熱性痙攣','SOURCE_EVIDENCE','secondary_citation',
          '主數字為單一醫師受訪說法，卡面註腳雖標示，但分享時可能被當成官方統計。','low','no',
          null,'no','clarify','屬出處層級提醒。',
          '孩子 5 歲前曾發生熱性痙攣（醫師說法）'),
        F('依醫師處方使用退燒藥（食藥署）','CURRENCY_TIMELINESS','old_guidance',
          'hero 引用的食藥署衛教為2018年版，卡面沒有年份。','low','no',
          null,'no','clarify','補上年份即可。',
          '依醫師處方使用退燒藥（食藥署 2018）')
      ]
    },
    title_alts:[
      '小兒發燒怎麼辦？退燒藥何時用、熱性痙攣怎麼處理',
      '寶寶發燒別慌！退燒藥怎麼用、抽搐時怎麼辦',
      '兒童發燒處理小抄：用藥時機、回診徵兆與熱性痙攣'
    ],
    card_title_alts:[
      ['寶寶發燒別慌！','發燒與熱性痙攣處理重點'],
      ['孩子抽搐了','熱性痙攣 3 步驟'],
      ['退燒藥怎麼用','依醫囑、不自買']
    ],
    data_addon:[
      '食藥署（2018）：體溫超過38.5℃且不舒服時，可依醫師處方使用退燒藥；不要自行購買。',
      '北醫附醫醫師（2026）：約3%至5%的孩子5歲前曾發生熱性痙攣，多在6個月至5歲。',
      '熱性痙攣抽搐超過5分鐘、第一次發作或發作後無法恢復意識，應立即送醫。'
    ],
    cta:'把發燒處理小抄存進手機，並在家準備體溫計與紀錄本。'
  });
})();
