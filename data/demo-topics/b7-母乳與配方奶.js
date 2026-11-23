/* v6 示範主題：母乳與配方奶（B7 女性・男性・生育與兒童）
   查證日期：2026-11-21。數據來源：衛福部／國健署新聞稿（2017-08-05、2025-07-31、2026-07-31）。
   6個月以下純母乳哺育率44.8%為105年（2016）全國調查，國健署未發布更新一期。配方奶與成長奶未查到國健署可引用的比較說明，未寫產品建議。
   參考方向：健康智庫〈母乳、配方奶與成長奶怎麼選？〉2025/09、〈母乳與配方奶的餵養之路〉2024/08。 */
(function(){
  const REFS = [
    {title:'「一口母乳 一生守護」 響應國際母乳週 共創支持哺育友善環境',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-83253-1.html'},
    {title:'響應國際母乳哺育週 邀哺乳媽媽及神隊友分享日常',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-2704-87295-1.html'},
    {title:'國健署響應國際母乳週 全台連線「挺」母乳媽咪',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-37090-1.html'}
  ];
  const TABLE = {headers:['支持資源','內容'], rows:[
    ['孕產兒關懷專線','0800-870-870（抱緊您抱緊您），專人提供媽媽或家人諮詢'],
    ['孕產兒關懷網站／LINE','mammy.hpa.gov.tw、LINE官方帳號@mammy870870'],
    ['母嬰親善醫療院所','全國139家參與認證，協助產後哺餵'],
    ['哺集乳空間','車站、機場、百貨等共4,049處']
  ]};
  const TAGS = ['母乳哺育','配方奶','新手爸媽','哺集乳室','孕產兒關懷'];

  const DP_RATE = {id:'dp-bf-rate', type:'data_version', title:'純母乳哺育率是2016年調查',
    desc:'國健署引用的6個月以下純母乳哺育率44.8%來自105年（2016年）全國調查，2025、2026年國際母乳週新聞稿都沒有更新的哺育率。AI 沒有用其他來源推估現況。',
    current:'6個月以下純母乳哺育率44.8%（國健署105年全國調查）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'44.8%', value:'2016 年調查', note:'國健署最近一次公布的純母乳哺育率（目前採用）'},
      {label:'50%', value:'WHO 2025 年全球目標', note:'國健署2017年新聞稿引述'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'母乳還是配方奶？WHO建議純母乳6個月，國健署：每種選擇都出於愛',
    update_date:'2026/11/21',
    intro:'世界衛生組織建議嬰兒純母乳哺育6個月，之後添加適當副食品並持續哺育母乳至2歲或以上。依國健署105年全國調查，6個月以下純母乳哺育率為44.8%，接近WHO設定的2025年全球目標50%。同時，國健署也強調尊重每位媽媽的選擇，無論母乳或其他哺餵方式，都是出於對寶寶的愛。本文整理哺餵支持資源與家人可以幫忙的地方。',
    sections:[
      {heading:'哺餵支持資源',format:'table',table:TABLE},
      {heading:'母乳的好處（國健署說明）',format:'bullets',items:[
        '國健署引述國際實證研究，母乳可降低寶寶腸胃道感染、呼吸道感染及中耳炎的機會。',
        '媽媽哺餵母乳，產後子宮恢復較快，並可降低乳癌、卵巢癌等風險。',
        '母乳哺育需要家人與職場支持，不是媽媽一個人的責任。'
      ]},
      {heading:'選擇配方奶時',format:'bullets',items:[
        '因身體、工作或其他因素選擇配方奶或混合哺餵，同樣可以讓寶寶健康成長。',
        '依兒科醫師建議與產品標示沖泡，留意寶寶生長曲線。',
        '有哺餵上的疑問，可撥打0800-870-870諮詢。'
      ]}
    ],
    think_tank_view:'哺餵方式沒有標準答案，最重要的是媽媽身心狀態與寶寶的成長。母乳有明確的健康好處，但要哺餵成功，需要伴侶分擔夜奶、職場提供集乳時間；選擇配方奶的家庭，也值得被支持而不是被評價。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'哺育率標明105年調查，母乳好處標明國健署引述國際研究，配方奶部分未涉及具體品牌或產品比較，未使用療效保證用語。',
    ai_rationale:{basis:['純母乳哺育率44.8%（國健署105年調查）','139家母嬰親善院所、4,049處哺集乳空間（國健署2025-07-31）'],
      layout_reason:'先列支持資源，再說明母乳好處，最後給配方奶家庭的提醒。',
      tone:'專業易懂', tone_reason:'避免讓媽媽產生罪惡感。',
      to_verify:['純母乳哺育率為2016年資料，查無更新一期','配方奶建議未引用官方來源']},
    decision_points:[DP_RATE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'親餵、瓶餵都是愛：新手爸媽的哺餵支持指南',
    update_date:'2026/11/21',
    intro:'剛當爸媽，常常為了「要不要全母乳」煩惱。世界衛生組織建議寶寶前6個月喝純母乳，國健署以前的調查發現，台灣大約有4成多的寶寶做到。不過國健署也說，無論選母乳還是其他方式，都是出於對寶寶的愛。',
    sections:[
      {heading:'遇到困難，可以找這些幫手',format:'table',table:TABLE},
      {heading:'母乳有什麼好處？',format:'bullets',items:[
        '寶寶比較不容易腸胃、呼吸道感染。',
        '媽媽產後恢復比較快。'
      ]},
      {heading:'爸爸和家人可以做的事',format:'bullets',items:[
        '幫忙夜間餵奶、拍嗝、換尿布，讓媽媽多休息。',
        '選擇配方奶時，照醫師建議和罐上說明沖泡。',
        '有問題就打0800-870-870。'
      ]}
    ],
    think_tank_view:'不管是親餵、擠奶還是配方奶，寶寶吃得好、媽媽睡得好，就是最棒的選擇。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明調查年份，語氣親切且不評價哺餵選擇，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以新手爸媽的煩惱帶出資源與分工。', tone:'生活親切', tone_reason:'降低哺餵壓力。', to_verify:[]},
    decision_points:[DP_RATE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'母乳與配方奶：支持比選擇更重要',
    update_date:'2026/11/21',
    intro:'WHO建議純母乳6個月，國健署105年調查純母乳哺育率44.8%。國健署尊重每位媽媽的哺餵選擇。',
    sections:[
      {heading:'支持資源',format:'table',table:TABLE},
      {heading:'重點',format:'bullets',items:[
        '家人分擔夜奶與照顧。',
        '配方奶依醫師建議沖泡。'
      ]}
    ],
    think_tank_view:'哺餵方式不同，愛都一樣。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為資源與重點兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_RATE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'母乳與配方奶', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'哺餵方式不同，愛都一樣', primary_visual:'44.8%', secondary_message:'遇到困難打 0800-870-870', action_priority:'善用支持資源、家人分工'},
    headline_hook:'母乳還是配方奶？', headline_main:'親餵瓶餵都是愛', title_accent:'都是愛',
    hero_message:'WHO 建議純母乳 6 個月', hero_support:'之後添加副食品，持續哺餵至 2 歲以上',
    knowledge_title:'支持資源', knowledge_note:'免費諮詢 **0800-870-870**',
    knowledge_cards:[
      {label:'關懷專線', icon:'chat', lines:['0800-870-870','專人諮詢']},
      {label:'母嬰親善院所', icon:'home', lines:['全國 139 家','協助產後哺餵']},
      {label:'哺集乳空間', icon:'people', lines:['車站、百貨等','共 4,049 處']}
    ],
    primary_stat:{value:'44.8%', label:'6 個月以下純母乳哺育率', note:'國健署 105 年（2016）全國調查'},
    secondary_stats:[
      {value:'50%', label:'WHO 2025 年全球目標'},
      {value:'@mammy870870', label:'孕產兒關懷 LINE'}
    ],
    action_title:'家人這樣支持',
    action_cards:[
      {key:'夜', text:'分擔夜間餵奶、拍嗝，讓媽媽多休息'},
      {key:'問', text:'哺餵疑問撥 0800-870-870'},
      {key:'泡', text:'配方奶依醫師建議與標示沖泡'},
      {key:'挺', text:'尊重媽媽的哺餵選擇'}
    ],
    carousel_suggestion:{reason:'若想把WHO建議、支持資源與家人分工分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'WHO 怎麼建議？', headline_main:'純母乳 6 個月'},
      {layout_type:'knowledge', headline_hook:'遇到困難找誰？', headline_main:'0800-870-870'},
      {layout_type:'action', headline_hook:'爸爸也能幫忙', headline_main:'家人分工 4 件事'}]},
    hashtags:['母乳哺育','配方奶','新手爸媽','孕產兒關懷'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'新手爸媽哺餵', audience:'新手爸媽', scene:'爸爸用奶瓶餵寶寶，媽媽在旁休息微笑',
      emotion:'溫暖、分工合作', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A father bottle-feeding a baby while the mother rests and smiles beside them, warm teamwork, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['純母乳哺育率44.8%（105年調查）','139家、4,049處（國健署2025-07-31）'],
      layout_reason:'核心是「支持比選擇重要」，選 knowledge：支持資源放中段，哺育率退到下方，最後給家人 4 個行動。',
      tone:'專業易懂', tone_reason:'不評價哺餵選擇。',
      to_verify:['44.8%為2016年資料']},
    decision_points:[Object.assign({}, DP_RATE, {current:'44.8%｜105 年調查'})],
    content_check_note:'數據引自國健署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'母乳與配方奶',
    collect:{
      summary:'WHO建議純母乳哺育6個月，國健署最近一次調查（2016年）6個月以下純母乳哺育率44.8%；國健署持續推動母嬰親善院所與哺集乳空間，同時強調尊重每位媽媽的哺餵選擇，「善用支持資源、家人分工」是新手家庭值得長期溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'44.8%：依國健署105年全國母乳哺育率調查，6個月以下純母乳哺育率44.8%，高於當時全球平均38%，接近WHO設定的2025年全球目標50%（國健署未發布更新一期）。',tag:'官方統計',source:{name:'衛生福利部：國健署響應國際母乳週 全台連線「挺」母乳媽咪',url:'https://mohw.gov.tw/cp-16-37090-1.html'}},
        {item:'年度趨勢方向',desc:'4049處哺集乳空間：國健署2025年表示，特定公營場所、車站、機場、旅館、百貨與量販店共設有4,049處哺集乳空間，較2017年公布的3,322處增加。',tag:'官方統計',source:{name:'衛生福利部：「一口母乳 一生守護」 響應國際母乳週',url:'https://mohw.gov.tw/cp-16-83253-1.html'}},
        {item:'政策動向',desc:'139家母嬰親善醫療院所：國健署自2001年起依WHO與UNICEF「成功哺餵母乳十大措施」推動認證，2025年全國有139家母嬰親善醫療院所與1家推廣院所參與。',tag:'官方統計',source:{name:'衛生福利部：「一口母乳 一生守護」 響應國際母乳週',url:'https://mohw.gov.tw/cp-16-83253-1.html'}},
        {item:'好發族群年齡層',desc:'0800-870-870孕產兒關懷專線：國健署提供專人諮詢與LINE官方帳號，並強調尊重每位媽媽的選擇，無論母乳或其他哺餵方式，都是出於對寶寶的愛。',tag:'官方統計',source:{name:'衛生福利部：響應國際母乳哺育週 邀哺乳媽媽及神隊友分享日常',url:'https://mohw.gov.tw/cp-2704-87295-1.html'}}
      ],
      product_view:['機會：新生兒家庭是保障規劃關鍵時點，可搭配哺餵支持資源展現陪伴。','機會：職場哺集乳友善可延伸至團體保險客戶的職場健康服務。','風險：不推薦任何配方奶或營養品，避免涉及產品比較。'],
      marketing_view:['機會：每年8月國際母乳週是固定溝通時點。','機會：「爸爸也能幫忙」適合伴侶共同育兒的溝通。','風險：避免讓選擇配方奶的媽媽感到被評價。'],
      alert_level:'low',
      alert_reason:'屬長期育兒議題，適合在國際母乳週前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('依國健署105年全國調查，6個月以下純母乳哺育率為44.8%','CURRENCY_TIMELINESS','old_survey',
          '文中已標明105年調查，但沒有提醒讀者這是近10年前的數據、且國健署之後未再公布，讀者可能當成現況。','low','no',
          null,'no','clarify','補一句資料限制即可。',
          '依國健署105年全國調查（目前最近一次公布），6個月以下純母乳哺育率為44.8%'),
        F('依兒科醫師建議與產品標示沖泡，留意寶寶生長曲線','SOURCE_EVIDENCE','claim_without_source',
          '配方奶的使用建議沒有引用任何官方來源，引用的國健署新聞稿未提及配方奶沖泡或選擇。','low','yes',
          '國健署或食藥署關於嬰兒配方食品的衛教資料。','no','confirm','建議合理，但需補出處。',
          '依兒科醫師建議與產品標示沖泡（可參考國健署孕產兒關懷網站）'),
        F('台灣大約有4成多的寶寶做到','CURRENCY_TIMELINESS','old_survey',
          '生活親切版寫「以前的調查」但沒寫年份（2016年），讀者無法判斷新舊。','low','no',
          null,'no','clarify','補上年份即可。',
          '國健署2016年的調查發現，台灣大約有4成多的寶寶做到'),
        F('國健署105年調查純母乳哺育率44.8%','CURRENCY_TIMELINESS','old_survey',
          '簡潔有力版沒有提醒這是2016年的數據。','low','no',
          null,'no','clarify','補西元年份即可。',
          '國健署105年（2016）調查純母乳哺育率44.8%')
      ],
      card:[
        F('國健署 105 年（2016）全國調查','CURRENCY_TIMELINESS','old_survey',
          '主數字為約10年前的調查，卡面最顯眼位置使用舊數據，分享時容易被當成現況。','medium','no',
          null,'no','clarify','可考慮把主數字改為支持資源。',
          '國健署 105 年（2016）調查，最近一次公布'),
        F('配方奶依醫師建議與標示沖泡','SOURCE_EVIDENCE','claim_without_source',
          '行動卡的配方奶建議沒有對應官方出處。','low','no',
          null,'no','clarify','屬出處補充。',
          '配方奶依醫師建議沖泡')
      ]
    },
    title_alts:[
      '母乳還是配方奶？WHO建議純母乳6個月，國健署：每種選擇都出於愛',
      '親餵、瓶餵都是愛：新手爸媽的哺餵支持指南',
      '母乳哺育支持資源一次看：專線、母嬰親善院所與哺集乳空間'
    ],
    card_title_alts:[
      ['母乳還是配方奶？','親餵瓶餵都是愛'],
      ['遇到哺餵困難？','撥 0800-870-870'],
      ['爸爸也能幫忙','家人分工 4 件事']
    ],
    data_addon:[
      'WHO建議嬰兒純母乳哺育6個月，其後添加副食品並持續哺育母乳至2歲或以上（國健署引述）。',
      '國健署105年調查：6個月以下純母乳哺育率44.8%。',
      '2025年：母嬰親善醫療院所139家、哺集乳空間4,049處（國健署）。'
    ],
    cta:'把0800-870-870存進手機，和另一半先說好夜奶怎麼分工。'
  });
})();
