/* v6 示範主題：曬傷與防曬（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-21。數據來源：衛福部／國健署〈防曬5裝備學起來 一起遠離熱傷害！〉（避開10點至14點、5裝備、SPF30以上、外出前30分鐘、每2小時補擦）、〈炎炎夏日需防曬 精心挑選好清涼！〉（UVA／UVB、SPF與PA、CNS 15001 UPF分級）、衛福部112年癌症登記報告新聞稿（皮膚癌為新發生癌症第8位）。
   注意：國健署防曬新聞稿未提供曬傷處置方法；國內查無曬傷就醫人次的官方統計。
   參考方向：健康智庫〈高溫炎熱！出遊曬傷怎麼辦？〉2024/06、〈炎炎夏日，兒童防曬要注意！〉2024/05。 */
(function(){
  const REFS = [
    {title:'防曬5裝備學起來 一起遠離熱傷害！',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/fp-16-70476-1.html'},
    {title:'炎炎夏日需防曬 精心挑選好清涼！',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-3796-42385-1.html'},
    {title:'公布112年國人癌症登記資料分析結果',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-84987-1.html'}
  ];
  const TABLE = {headers:['防曬標示','代表什麼'], rows:[
    ['SPF','防UVB（曬傷紅腫）的效果，數值越高越不易曬紅，戶外建議SPF30以上'],
    ['PA+ 或 ★','防UVA（破壞真皮、產生黑色素）的效果，符號越多防護越好'],
    ['UPF（衣物）','依CNS 15001分A（40以上）、B（25-39）、C（15-24）三級'],
    ['防水防曬乳','流汗或游泳時仍需更頻繁補擦']
  ]};
  const TAGS = ['防曬','曬傷','紫外線','皮膚健康','夏季健康'];

  const PRO = {
    content_type:'健康文章',
    title:'防曬乳要擦多久補一次？國健署防曬5裝備一次看',
    update_date:'2026/11/21',
    intro:'紫外線中的UVB主要傷害皮膚表層、引起曬傷紅腫，UVA則會破壞真皮結構並產生黑色素。國民健康署建議盡量避開上午10點至下午2點進行戶外活動，外出前30分鐘擦上防水、SPF30以上的防曬乳，每2小時補擦1次，流汗或游泳時更要頻繁補充。依衛福部112年癌症登記報告，皮膚癌為國人新發生癌症第8位。',
    sections:[
      {heading:'看懂防曬標示',format:'table',table:TABLE},
      {heading:'國健署防曬5裝備',format:'bullets',items:[
        '寬邊帽或陽傘：避免陽光直射臉、耳朵與脖子。',
        '太陽眼鏡：保護眼睛。',
        '涼爽透氣衣物：可參考UPF分級選擇防曬衣物。',
        '擦防曬乳：SPF30以上，外出前30分鐘擦、每2小時補。',
        '自備水瓶並休息降溫，同時預防熱傷害。'
      ]},
      {heading:'使用防曬乳的小提醒',format:'bullets',items:[
        '防曬乳避免放在高溫處，以免變質。',
        '敏感性肌膚可選擇標示敏感肌使用或無香味的產品。',
        '防曬與涼感產品無法完全預防熱傷害，仍需補水並留意身體狀況。'
      ]}
    ],
    think_tank_view:'防曬最常見的問題不是係數不夠，而是「只擦一次」。一早擦完就整天在外，到了中午防護早就打折。把補擦時間設成手機提醒，搭配帽子和陽傘，比追求更高的SPF更實際。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'防曬建議與標示說明引自國健署，皮膚癌排名引自衛福部112年癌症登記，未推薦特定防曬品牌。',
    ai_rationale:{basis:['防曬5裝備、SPF30、每2小時補擦（國健署）','皮膚癌為新發生癌症第8位（衛福部112年癌登）'],
      layout_reason:'先用表格說明防曬標示，再列國健署5裝備，最後給使用防曬乳提醒。',
      tone:'專業易懂', tone_reason:'標示需具體說明。',
      to_verify:['國健署防曬新聞稿未提供曬傷處置方法']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'出遊曬到脫皮？防曬乳這樣擦才有用',
    update_date:'2026/11/21',
    intro:'夏天出遊最怕曬到紅通通、脫皮。紫外線裡的UVB會讓皮膚曬傷變紅，UVA則會讓皮膚變黑、傷到深層。國健署建議上午10點到下午2點盡量別在戶外曬太陽；出門前30分鐘擦SPF30以上的防水防曬乳，每2小時補一次，流汗或玩水要補得更勤。',
    sections:[
      {heading:'防曬標示怎麼看？',format:'table',table:TABLE},
      {heading:'出門帶齊5樣',format:'bullets',items:[
        '寬邊帽或陽傘，臉、耳朵、脖子都要遮。',
        '太陽眼鏡。',
        '透氣的衣服，可以選有UPF標示的。',
        '防曬乳，記得每2小時補擦。',
        '水瓶，熱了就找陰涼處休息。'
      ]},
      {heading:'防曬乳小提醒',format:'bullets',items:[
        '別放在車上或高溫的地方。',
        '皮膚敏感就挑無香料、敏感肌可用的。',
        '擦了防曬不代表不會中暑，還是要喝水休息。'
      ]}
    ],
    think_tank_view:'出門玩的時候，把手機設個每2小時的鬧鐘提醒補擦防曬，比買最貴的防曬乳更有用。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署，未推薦特定防曬品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以出遊曬傷情境切入。', tone:'生活親切', tone_reason:'給家庭與年輕族群。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'防曬：SPF30、每2小時補擦',
    update_date:'2026/11/21',
    intro:'避開10點至14點日曬；外出前30分鐘擦SPF30以上防水防曬乳，每2小時補擦。皮膚癌為新發生癌症第8位。',
    sections:[
      {heading:'標示',format:'table',table:TABLE},
      {heading:'5裝備',format:'bullets',items:[
        '帽子陽傘、太陽眼鏡、透氣衣物、防曬乳、水瓶。'
      ]},
      {heading:'提醒',format:'bullets',items:[
        '防曬乳勿放高溫處。',
        '防曬不等於防熱傷害。'
      ]}
    ],
    think_tank_view:'定時補擦，比追求高係數更重要。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署與衛福部，未推薦特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為標示、裝備、提醒三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'曬傷與防曬', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'防曬乳每 2 小時補擦一次', primary_visual:'SPF 30', secondary_message:'避開 10 點至 14 點日曬', action_priority:'防曬 5 裝備'},
    headline_hook:'出遊曬到脫皮？', headline_main:'防曬 4 件事這樣做', title_accent:'4 件事',
    hero_message:'每 2 小時補擦', hero_support:'外出前 30 分鐘擦 SPF30 以上防曬乳（國健署）',
    primary_stat:{value:'第 8 位', label:'皮膚癌：新發生癌症排名', note:'衛福部 112 年癌症登記報告'},
    action_title:'防曬這樣做',
    action_cards:[
      {key:'避', text:'避開上午 10 點至下午 2 點'},
      {key:'遮', text:'寬邊帽、陽傘、太陽眼鏡'},
      {key:'擦', text:'SPF30 以上，外出前 30 分鐘擦'},
      {key:'補', text:'每 2 小時補擦，流汗玩水更勤'}
    ],
    notice:'防曬與涼感產品**無法完全預防熱傷害**，記得補水休息。',
    carousel_suggestion:{reason:'若想把標示、裝備與兒童防曬分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'SPF、PA、UPF', headline_main:'防曬標示怎麼看'},
      {layout_type:'action', headline_hook:'防曬 5 裝備', headline_main:'從頭到腳一次帶齊'},
      {layout_type:'action', headline_hook:'防曬乳', headline_main:'每 2 小時補擦'}]},
    hashtags:['防曬','曬傷','紫外線','皮膚健康'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'general',
    illustration:{topic:'戶外防曬', audience:'家庭與出遊族', scene:'海邊一家人戴寬邊帽、太陽眼鏡，家長幫孩子補擦防曬乳，旁邊有陽傘',
      emotion:'愉快、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A family at the beach wearing wide-brimmed hats and sunglasses, a parent reapplying sunscreen on a child under a parasol, cheerful and safe, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['國健署防曬5裝備'],
      layout_reason:'重點是具體防曬行為，選 action：4 個行動當主角，皮膚癌排名當背景。',
      tone:'專業易懂', tone_reason:'具體可做。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自國健署與衛福部，未推薦特定品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'曬傷與防曬',
    collect:{
      summary:'國健署建議避開上午10點至下午2點日曬，外出前30分鐘擦SPF30以上防水防曬乳、每2小時補擦，並以寬邊帽、太陽眼鏡、透氣衣物等5裝備防曬；皮膚癌為112年新發生癌症第8位。夏季出遊與兒童戶外活動是溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'第8位：衛福部112年癌症登記報告中，皮膚癌為國人新發生癌症人數第8位，與111年相比與胃癌序位互換。',tag:'官方統計',source:{name:'衛福部：公布112年國人癌症登記資料分析結果',url:'https://mohw.gov.tw/cp-16-84987-1.html'}},
        {item:'政策動向',desc:'每2小時補擦：國健署建議外出前30分鐘使用防水且SPF30以上防曬乳，每2小時塗抹1次，流汗或游泳需更頻繁補充。',tag:'官方統計',source:{name:'國健署：防曬5裝備學起來',url:'https://www.mohw.gov.tw/fp-16-70476-1.html'}},
        {item:'好發族群年齡層',desc:'避開10點至14點：國健署提醒盡量避開上午10點至下午2點或高溫時段進行戶外活動，並備妥寬邊帽、太陽眼鏡、透氣衣物、防曬乳與水瓶。',tag:'官方統計',source:{name:'國健署：防曬5裝備學起來',url:'https://www.mohw.gov.tw/fp-16-70476-1.html'}},
        {item:'年度趨勢方向',desc:'UPF分A至C三級：依CNS 15001，防紫外線衣物UPF分為A（40以上）、B（25-39）、C（15-24）三級，國健署彙整防曬產品挑選標準。',tag:'官方統計',source:{name:'國健署：炎炎夏日需防曬 精心挑選好清涼',url:'https://www.mohw.gov.tw/cp-3796-42385-1.html'}}
      ],
      product_view:['機會：防曬與皮膚癌預防相關，可作為夏季健康關懷內容。','機會：親子出遊防曬清單適合互動。','風險：避免推薦特定防曬品牌；不宜宣稱防曬可完全預防皮膚癌。'],
      marketing_view:['機會：暑假、連假出遊是溝通時點。','機會：「每2小時補擦」是多數人不知道的重點。','風險：避免以皮膚癌恐嚇。'],
      alert_level:'low',
      alert_reason:'屬季節性議題，夏季可加強溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('依衛福部112年癌症登記報告，皮膚癌為國人新發生癌症第8位','DATA_FACTUAL_ACCURACY','missing_context',
          '皮膚癌包含多種類型，與紫外線的關聯程度不同；文中直接接在防曬建議後，可能讓讀者以為皮膚癌都由日曬造成。','low','no',
          null,'no','clarify','屬因果脈絡。',
          '依衛福部112年癌症登記報告，皮膚癌為國人新發生癌症第8位（日曬是皮膚癌的危險因子之一）',
          ['皮膚癌為新發生癌症第8位。']),
        F('外出前30分鐘擦SPF30以上的防水防曬乳','MEDICAL_INTERPRETATION','missing_amount',
          '未提醒塗抹足夠的量；擦得太薄時實際防護會低於標示係數。','low','no',
          null,'no','clarify','屬使用方法完整度。',
          '外出前30分鐘擦足量、SPF30以上的防水防曬乳',
          ['外出前30分鐘擦SPF30以上防水防曬乳']),
        F('出遊曬到脫皮？防曬乳這樣擦才有用','MEDICAL_INTERPRETATION','missing_aftercare',
          '標題提到曬傷，但內文只談預防，未說明曬傷後怎麼處理及何時就醫（如大面積起水泡、發燒）。','low','no',
          null,'no','clarify','國健署防曬新聞稿未提供處置方法，需另查來源。',
          null)
      ],
      card:[
        F('SPF30 以上，外出前 30 分鐘擦','MEDICAL_INTERPRETATION','missing_amount',
          '未提醒要擦足量。','low','no',
          null,'no','clarify','受字數限制。',
          '足量擦 SPF30 以上，出門前 30 分'),
        F('皮膚癌：新發生癌症排名','DATA_FACTUAL_ACCURACY','missing_context',
          '放在防曬卡上易被讀成皮膚癌皆由日曬造成。','low','no',
          null,'no','clarify','屬因果脈絡。',
          '皮膚癌新發生排名（日曬為危險因子之一）')
      ]
    },
    title_alts:[
      '防曬乳要擦多久補一次？國健署防曬5裝備一次看',
      '出遊曬到脫皮？防曬乳這樣擦才有用',
      'SPF、PA、UPF怎麼看：夏季防曬指南'
    ],
    card_title_alts:[
      ['出遊曬到脫皮？','防曬 4 件事這樣做'],
      ['防曬乳擦一次就夠？','每 2 小時補擦'],
      ['SPF、PA、UPF','防曬標示一次看']
    ],
    data_addon:[
      'UVC穿透大氣層能力弱，對人體影響甚微（國健署）。',
      'SPF數值通常介於15至50，超過50以50+表示。',
      '防曬乳應避免放置於高溫處以免變質（國健署）。'
    ],
    cta:'下次出門前30分鐘先擦好防曬，手機設每2小時提醒補擦，並帶上帽子和水。'
  });
})();
