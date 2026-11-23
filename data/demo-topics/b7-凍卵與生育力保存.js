/* v6 示範主題：凍卵與生育力保存（B7 女性・男性・生育與兒童）
   查證日期：2026-11-21。數據來源：衛福部／國健署新聞稿（2025-08-15「114年起癌友生育保存補助 最高7萬元」）、
   中央社2025-12-03（國健署公布試辦3個月審查人次，經聯合新聞網刊載）。非醫療因素（社會性）凍卵未查到官方統計與補助，未寫。
   參考方向：健康智庫〈凍卵懶人包：凍卵前的必知關鍵〉2026/05、〈凍卵懶人包：年齡、風險、補助費用報你知！〉2023/10。 */
(function(){
  const REFS = [
    {title:'114年起癌友生育保存補助 最高7萬元',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-83501-1.html'},
    {title:'癌友生育保存補助已62人過審 民團籲放寬對象（中央社）',source:'聯合新聞網',url:'https://udn.com/news/story/7266/9179468'}
  ];
  const TABLE = {headers:['項目','內容'], rows:[
    ['補助對象','具我國國籍、18至40歲的乳癌或血液癌患者'],
    ['補助金額','女性取卵療程每次上限7萬元，男性取精處置保存每次上限8千元'],
    ['補助次數','每人一生至多2個療程，實際支出低於上限則依實支補助'],
    ['申請流程','癌症治療前完成知情同意，轉介同院或鄰近分院人工生殖單位，取得資格後2個月內施術']
  ]};
  const TAGS = ['凍卵','生育力保存','癌友','人工生殖','生育規劃'];

  const DP_SCOPE = {id:'dp-fp-scope', type:'data_scope', title:'補助只限醫療性生育保存',
    desc:'國健署2025年9月開辦的是「醫療性生育保存補助試辦方案」，僅補助乳癌與血液癌患者；一般民眾因延後生育規劃的「社會性凍卵」不在補助範圍，國健署也沒有公布社會性凍卵人數。AI 沒有用媒體或診所的數字補上。',
    current:'醫療性生育保存補助：18至40歲乳癌、血液癌患者（國健署）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'有補助', value:'醫療性（癌友）', note:'乳癌、血液癌，取卵每次最高7萬元（目前採用）'},
      {label:'無官方補助／統計', value:'社會性凍卵', note:'國健署未公布'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'癌友生育保存最高補助7萬元：凍卵前要知道的資格與流程',
    update_date:'2026/11/21',
    intro:'癌症治療可能影響生育能力。衛福部自2025年9月1日起開辦「醫療性生育保存補助試辦方案」，補助具我國國籍、18至40歲的乳癌或血液癌患者凍卵或凍精，女性取卵療程每次最高7萬元、每人一生至多2個療程，預估首年約600位癌友受惠。據中央社報導，國健署表示開辦3個月已有62人次通過資格審查。',
    sections:[
      {heading:'醫療性生育保存補助重點',format:'table',table:TABLE},
      {heading:'為什麼要在治療前討論',format:'bullets',items:[
        '化療、放療等癌症治療可能影響生育能力，生育保存需在治療開始前完成評估。',
        '試辦方案要求在癌症診療品質認證醫院完成治療與生育保存的知情同意，再轉介人工生殖單位。',
        '日後要使用保存的卵子或精子，須依人工生殖法相關規定辦理。'
      ]},
      {heading:'還在討論中的議題',format:'bullets',items:[
        '病友團體呼籲擴大癌別、放寬年齡，並解除癌症治療與生育保存須在同院的限制。',
        '國健署表示將蒐集實證、分析試辦情形，研議擴大補助對象與跨機構轉介機制。',
        '人工生殖相關問題可洽國健署人工生殖諮詢專線02-2558-0900。'
      ]}
    ],
    think_tank_view:'對年輕癌友來說，確診時最先想到的通常是治療，生育常常來不及討論。這項補助的意義在於提醒：在開始治療前，主動問醫師「我的生育能力會受影響嗎？要不要先保存？」，是替未來多留一個選擇。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'補助內容引自國健署，審查人次標明中央社報導，未涉及特定醫療院所或療效保證，未使用法遵禁語。',
    ai_rationale:{basis:['補助對象、金額、次數、600人預估（國健署2025-08-15新聞稿）','62人次通過審查（中央社2025-12-03）'],
      layout_reason:'先用表格說明補助重點，再說明為何要在治療前討論，最後交代政策討論方向。',
      tone:'專業易懂', tone_reason:'癌友與家屬需要清楚的資格與流程。',
      to_verify:['62人次為2025年11月底累計，之後未查到更新','社會性凍卵無官方統計']},
    decision_points:[DP_SCOPE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'確診癌症還想當爸媽？生育保存補助怎麼申請',
    update_date:'2026/11/21',
    intro:'年輕時確診癌症，除了治療，很多人也擔心以後還能不能生小孩。政府從2025年9月開始，補助18到40歲的乳癌、血液癌病友在治療前凍卵或凍精，女生取卵每次最多補助7萬元，一輩子最多2次。',
    sections:[
      {heading:'補助怎麼申請？',format:'table',table:TABLE},
      {heading:'一定要在治療前問',format:'bullets',items:[
        '化療、放療可能影響生育，要在治療開始前和醫師討論。',
        '醫師說明後，會轉介到同一家醫院或附近分院的人工生殖中心。',
        '拿到資格後2個月內要完成療程。'
      ]},
      {heading:'還有疑問嗎？',format:'bullets',items:[
        '目前只補助乳癌和血液癌，病友團體正在爭取擴大。',
        '可以打國健署人工生殖諮詢專線02-2558-0900。'
      ]}
    ],
    think_tank_view:'確診的當下很慌亂，但請記得多問醫師一句「治療會影響生育嗎？」。這一句話，可能就是為未來保留的一個機會。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'補助內容引自國健署，語氣親切，未涉及特定醫療院所或療效保證。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以病友的擔心帶出申請與時機。', tone:'生活親切', tone_reason:'給年輕癌友與家屬閱讀。', to_verify:[]},
    decision_points:[DP_SCOPE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'癌友凍卵補助：最高7萬元',
    update_date:'2026/11/21',
    intro:'2025年9月起，18至40歲乳癌、血液癌患者生育保存可獲補助，取卵每次最高7萬元，一生至多2次。',
    sections:[
      {heading:'補助重點',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '癌症治療前和醫師討論。',
        '諮詢專線02-2558-0900。'
      ]}
    ],
    think_tank_view:'治療前多問一句，為未來保留選擇。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'補助內容引自國健署，未涉及特定醫療院所或療效保證。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為重點與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_SCOPE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'凍卵與生育力保存', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'癌友生育保存補助最高 7 萬元', primary_visual:'7 萬元', secondary_message:'治療前和醫師討論', action_priority:'問、轉介、2 個月內施術'},
    headline_hook:'確診還想當爸媽？', headline_main:'癌友生育保存補助', title_accent:'生育保存補助',
    hero_message:'取卵每次最高 7 萬元', hero_support:'18–40 歲乳癌、血液癌患者（國健署）',
    primary_stat:{value:'約 600 位', label:'國健署預估首年受惠癌友', note:'2025 年 9 月開辦｜每人一生至多 2 次'},
    action_title:'申請 4 步驟',
    action_cards:[
      {key:'問', text:'癌症治療前問醫師生育保存'},
      {key:'轉', text:'轉介同院或鄰近分院人工生殖單位'},
      {key:'審', text:'確認資格並備妥診斷證明'},
      {key:'做', text:'取得資格後 2 個月內完成療程'}
    ],
    notice:'人工生殖諮詢專線 **02-2558-0900**（國健署）。',
    carousel_suggestion:{reason:'若想把資格、流程與政策討論分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'誰可以申請？', headline_main:'18–40 歲乳癌、血液癌'},
      {layout_type:'action', headline_hook:'申請 4 步驟', headline_main:'治療前就要問'},
      {layout_type:'data', headline_hook:'開辦 3 個月', headline_main:'62 人次通過審查'}]},
    hashtags:['凍卵','生育力保存','癌友','生育規劃'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'癌友生育保存諮詢', audience:'18 至 40 歲癌友與伴侶', scene:'一對年輕伴侶在診間和醫師討論治療計畫，桌上放著生育保存說明單',
      emotion:'有希望、被支持', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young couple discussing a treatment plan with a doctor in a clinic, a fertility preservation leaflet on the desk, hopeful and supported, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['補助內容與600人預估（國健署2025-08-15）'],
      layout_reason:'關鍵是「治療前就要申請」，選 action：申請 4 步驟當主角，補助上限當 hero，預估人數退到下方。',
      tone:'專業易懂', tone_reason:'流程需清楚。',
      to_verify:['600人為預估值']},
    decision_points:[Object.assign({}, DP_SCOPE, {current:'取卵每次最高 7 萬元（醫療性）'})],
    content_check_note:'補助內容引自國健署，未涉及特定醫療院所或療效保證。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'凍卵與生育力保存',
    collect:{
      summary:'衛福部2025年9月起開辦醫療性生育保存補助試辦方案，補助18至40歲乳癌、血液癌患者凍卵或凍精，女性取卵每次最高7萬元，病友團體持續爭取擴大對象；「癌症治療前先討論生育保存」是年輕癌友與家庭值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約600位癌友：國健署預估醫療性生育保存補助試辦方案首年約600位癌友受惠，補助對象為具我國國籍、18至40歲的乳癌或血液癌患者。',tag:'官方統計',source:{name:'衛生福利部：114年起癌友生育保存補助 最高7萬元',url:'https://mohw.gov.tw/cp-16-83501-1.html'}},
        {item:'年度趨勢方向',desc:'62人次通過審查：據中央社報導，國健署表示自2025年9月開辦至11月30日，共62人次通過資格審查，其中乳癌37人、血液癌25人。',tag:'市場觀察',source:{name:'聯合新聞網（中央社）：癌友生育保存補助已62人過審 民團籲放寬對象',url:'https://udn.com/news/story/7266/9179468'}},
        {item:'政策動向',desc:'取卵每次最高7萬元：女性取卵療程每次補助上限7萬元、男性取精處置保存每次上限8千元，每人一生至多2個療程，須在取得資格後2個月內施術。',tag:'官方統計',source:{name:'衛生福利部：114年起癌友生育保存補助 最高7萬元',url:'https://mohw.gov.tw/cp-16-83501-1.html'}},
        {item:'好發族群年齡層',desc:'18至40歲乳癌、血液癌患者：病友團體呼籲擴大癌別、放寬至18歲以下並解除同院限制，國健署表示將研議擴大補助對象與跨機構轉介機制。',tag:'市場觀察',source:{name:'聯合新聞網（中央社）：癌友生育保存補助已62人過審 民團籲放寬對象',url:'https://udn.com/news/story/7266/9179468'}}
      ],
      product_view:['機會：年輕癌友的生育與重大疾病保障是可延伸的溝通主題。','機會：癌症保單理賠服務可加入生育保存補助資訊提醒。','風險：不可暗示保單給付生育保存費用，須依條款如實說明。'],
      marketing_view:['機會：補助政策若擴大對象，會是新的溝通時點。','機會：「治療前多問一句」是溫和、實用的訊息。','風險：避免對未保存生育能力的病友造成罪惡感。'],
      alert_level:'medium',
      alert_reason:'補助方案仍在試辦、可能擴大對象，屬有政策時效的議題；最新條件交由正式模式查詢。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國健署表示開辦3個月已有62人次通過資格審查','SOURCE_EVIDENCE','secondary_citation',
          '文中已註明是中央社報導，但這是2025年11月底的累計數字，國健署沒有公開更新統計，讀者可能以為是目前總數。','low','yes',
          '國健署醫療性生育保存補助試辦方案的最新審查人數。','yes','confirm','屬二手引述，時點需標明。',
          '國健署表示開辦3個月（至2025年11月底）已有62人次通過資格審查'),
        F('化療、放療等癌症治療可能影響生育能力','SOURCE_EVIDENCE','claim_without_source',
          '引用的國健署新聞稿沒有說明哪些治療會影響生育，本句為一般醫學說明，沒有附出處。','low','no',
          null,'no','clarify','可標示為一般說明。',
          '部分癌症治療可能影響生育能力，應由醫師個別評估'),
        F('政府從2025年9月開始，補助18到40歲的乳癌、血液癌病友','TERMINOLOGY_LANGUAGE','criteria_incomplete',
          '生活親切版漏掉「具我國國籍」的條件，且沒有說明須在癌症診療品質認證醫院進行。','low','no',
          null,'no','clarify','補上條件即可。',
          '政府從2025年9月開始，補助具我國國籍、18到40歲的乳癌、血液癌病友'),
        F('取卵每次最高7萬元，一生至多2次','TERMINOLOGY_LANGUAGE','detail_missing',
          '簡潔有力版沒有提到男性取精也有補助，也沒說明實際支出低於上限時依實支補助。','low','no',
          null,'no','clarify','補上男性補助即可。',
          '取卵每次最高7萬元、取精每次最高8千元，一生至多2次')
      ],
      card:[
        F('國健署預估首年受惠癌友','SOURCE_EVIDENCE','estimate_vs_actual',
          '主數字「約 600 位」是預估值，卡面沒有同時呈現實際審查人次（開辦3個月62人次），讀者可能以為是實際受惠人數。','low','no',
          null,'no','clarify','屬預估標示。',
          '國健署預估首年受惠癌友（推估）'),
        F('癌症治療前問醫師生育保存','TERMINOLOGY_LANGUAGE','criteria_unstated',
          '行動卡沒有提醒目前只補助乳癌與血液癌，其他癌別病友可能誤以為也能申請補助。','low','no',
          null,'no','clarify','補上癌別即可。',
          '乳癌、血液癌治療前問醫師生育保存')
      ]
    },
    title_alts:[
      '癌友生育保存最高補助7萬元：凍卵前要知道的資格與流程',
      '確診癌症還想當爸媽？生育保存補助怎麼申請',
      '醫療性生育保存補助試辦：對象、金額與擴大討論'
    ],
    card_title_alts:[
      ['確診還想當爸媽？','癌友生育保存補助'],
      ['取卵最高 7 萬元','治療前就要申請'],
      ['申請 4 步驟','問、轉介、審核、施術']
    ],
    data_addon:[
      '醫療性生育保存補助：2025年9月1日開辦，18至40歲乳癌、血液癌患者，取卵每次最高7萬元、取精每次最高8千元，一生至多2次（國健署）。',
      '開辦至2025年11月30日共62人次通過審查：乳癌37人、血液癌25人（中央社）。',
      '國健署人工生殖諮詢專線：02-2558-0900。'
    ],
    cta:'身邊有年輕親友確診乳癌或血液癌，提醒他們在治療前先問醫師生育保存。'
  });
})();
