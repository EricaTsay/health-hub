/* v6 示範主題：弓形蟲感染（B8 傳染病防治）
   查證日期：2026-11-21。數據來源：疾管署傳染病統計資料查詢系統（弓形蟲感染症2025年總數）、疾管署新聞稿（衛福部網站轉載 cp-16-86978、cp-16-26785）。
   參考方向：健康智庫〈鏟子超人必做防疫三保！〉2025/10。 */
(function(){
  const REFS = [
    {title:'傳染病統計資料查詢系統：弓形蟲感染症',source:'衛生福利部疾病管制署',url:'https://nidss.cdc.gov.tw/nndss/disease?id=130'},
    {title:'國內新增弓形蟲感染症確定病例 籲請民眾避免生食及落實手部衛生',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-86978-1.html'},
    {title:'新生兒垂直感染弓形蟲感染症，疾管局籲孕婦勿生食肉類',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-26785-1.html'},
    {title:'女愛吃生菜、生魚片疑染「弓形蟲感染症」 疾管署要查感染源',source:'聯合報',url:'https://udn.com/news/story/7266/9583413'}
  ];
  const TABLE = {headers:['預防重點','怎麼做'], rows:[
    ['肉類煮熟','肉類加熱至66℃以上，烹調時不要試吃'],
    ['避免生食','少吃生肉、醃製生肉，蔬果洗淨'],
    ['接觸泥土戴手套','整理花園或可能被貓糞污染的泥土，事後澈底洗手'],
    ['家貓照護','餵乾飼料、罐頭或煮熟食物，避免外出覓食'],
    ['孕婦特別注意','避免接觸來路不明的貓']
  ]};
  const TAGS = ['弓形蟲','養貓','孕婦','食品衛生','傳染病防治'];

  const DP_CAT = {id:'dp-toxo-cat', type:'tone', title:'「養貓就會感染」的說法',
    desc:'疾管署指出弓形蟲主要經食入受污染的水或食物、未煮熟的受感染動物組織而感染，貓糞污染是途徑之一，但並非養貓就會感染；2026年的個案甚至家中沒有寵物。AI 沒有把養貓寫成主要風險，供你確認語氣。',
    current:'主要經飲食感染，接觸貓糞污染的泥土也是途徑之一（疾管署）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'飲食為主', value:'疾管署說明', note:'食入受污染水、食物或未煮熟肉類（目前採用）'},
      {label:'貓糞污染', value:'次要途徑', note:'整理花園、接觸泥土時戴手套'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'弓形蟲怎麼預防？肉煮熟、少生食，孕婦與飼主要多一分注意',
    update_date:'2026/11/21',
    intro:'弓形蟲感染症是第四類法定傳染病，依疾病管制署統計，2025年全年確定病例20例。疾管署指出，人類主要因食入受污染的水或食物，或吃到未煮熟的受感染動物組織而感染，不會人傳人；孕婦若在懷孕期間初次感染，可能經胎盤傳給胎兒，造成流產、死胎或胎兒異常。本文整理飲食、居家與養貓的預防重點。',
    sections:[
      {heading:'弓形蟲預防重點',format:'table',table:TABLE},
      {heading:'孕婦為什麼要特別小心',format:'bullets',items:[
        '懷孕期間初次感染，可能經胎盤垂直感染胎兒。',
        '疾管局2010年曾公布孕期生食醃豬肉而發生新生兒垂直感染的個案。',
        '有養貓的孕婦，可請家人協助處理貓的排泄物與園藝工作。'
      ]},
      {heading:'飼主可以這樣做',format:'bullets',items:[
        '家貓餵食乾飼料、罐頭或煮熟食物，不讓貓外出覓食。',
        '接觸可能被貓糞污染的泥土時戴手套，事後澈底洗手。',
        '據聯合報2026年報導，疾管署公布的個案家中沒有養寵物、常吃生魚片與生菜，飲食衛生同樣重要。'
      ]}
    ],
    think_tank_view:'很多人以為弓形蟲只和養貓有關，其實飲食才是主要途徑。肉類煮熟、蔬果洗淨、處理泥土後洗手，就能大幅降低風險；家有孕婦的飼主，只要讓家人分擔清理工作，不需要因此放棄毛小孩。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'病例數引自疾管署並標明年份，傳染途徑與預防建議引自疾管署新聞稿，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['2025年全年20例（疾管署傳染病統計資料查詢系統）','傳染途徑、孕婦風險與預防建議（疾管署新聞稿）'],
      layout_reason:'先用表格列出預防重點，再說明孕婦風險，最後給飼主具體做法。',
      tone:'專業易懂', tone_reason:'避免讓飼主恐慌或棄養。',
      to_verify:['醃豬肉個案為2010年資料']},
    decision_points:[DP_CAT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'養貓就會得弓形蟲？吃對、洗手才是重點',
    update_date:'2026/11/21',
    intro:'聽到弓形蟲，很多人第一個想到「養貓」。其實疾管署說，人主要是吃到被污染的食物、水，或沒煮熟的肉才感染的，而且不會人傳人。2025年台灣一整年有20人確診。懷孕的媽媽要特別注意，因為可能傳給肚子裡的寶寶。',
    sections:[
      {heading:'這樣做就能預防',format:'table',table:TABLE},
      {heading:'懷孕時要注意',format:'bullets',items:[
        '不吃生肉、醃製生肉，肉要煮熟。',
        '貓砂和花園工作請家人幫忙。'
      ]},
      {heading:'給貓奴的提醒',format:'bullets',items:[
        '讓貓吃乾飼料、罐頭或煮熟的食物，不要讓牠在外面亂吃。',
        '整理花園或碰到泥土，記得戴手套、洗手。',
        '不用因為懷孕就把貓送走，家人分工就好。'
      ]}
    ],
    think_tank_view:'毛小孩是家人，弓形蟲的預防重點在「吃熟食、勤洗手」。孕期請家人幫忙清貓砂，全家都安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，語氣親切且避免造成棄養，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「養貓就會得嗎」的迷思帶出預防。', tone:'生活親切', tone_reason:'給飼主與孕婦閱讀。', to_verify:[]},
    decision_points:[DP_CAT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'弓形蟲：肉煮熟、勤洗手',
    update_date:'2026/11/21',
    intro:'2025年弓形蟲感染症全年20例（疾管署）。主要經飲食感染，孕婦初次感染可能傳給胎兒。',
    sections:[
      {heading:'預防重點',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '孕婦避免生食，貓砂交給家人。',
        '接觸泥土戴手套、洗手。'
      ]}
    ],
    think_tank_view:'吃熟食、勤洗手，比遠離貓咪更重要。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為重點與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_CAT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'弓形蟲感染', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'弓形蟲主要經飲食感染', primary_visual:'66℃', secondary_message:'孕婦初次感染可能傳給胎兒', action_priority:'肉煮熟、勤洗手'},
    headline_hook:'養貓就會得弓形蟲？', headline_main:'吃熟食、勤洗手是重點', title_accent:'勤洗手',
    hero_message:'肉類加熱至 66℃ 以上', hero_support:'烹調時不要試吃（疾管署）',
    primary_stat:{value:'20 例', label:'2025 年弓形蟲感染症確定病例', note:'疾管署傳染病統計｜不會人傳人'},
    action_title:'預防弓形蟲',
    action_cards:[
      {key:'熟', text:'肉類煮熟，避免生食與試吃'},
      {key:'洗', text:'接觸泥土戴手套，事後澈底洗手'},
      {key:'貓', text:'家貓吃乾飼料或熟食，不外出覓食'},
      {key:'孕', text:'孕婦貓砂與園藝交給家人'}
    ],
    notice:'孕期初次感染可能**經胎盤傳給胎兒**，孕婦要特別注意飲食。',
    carousel_suggestion:{reason:'若想把傳染途徑、孕婦與飼主分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'弓形蟲怎麼感染？', headline_main:'飲食是主要途徑'},
      {layout_type:'action', headline_hook:'孕婦注意', headline_main:'不生食、貓砂交家人'},
      {layout_type:'action', headline_hook:'給貓奴', headline_main:'餵熟食、勤洗手'}]},
    hashtags:['弓形蟲','養貓','孕婦','食品衛生'],
    sources:['衛生福利部疾病管制署'],
    illustration_category:'general',
    illustration:{topic:'弓形蟲預防', audience:'飼主與孕婦家庭', scene:'一位孕婦在廚房確認肉類煮熟，伴侶在一旁戴手套清理貓砂盆，貓咪坐在旁邊',
      emotion:'安心、分工合作', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A pregnant woman checking that meat is cooked in a kitchen while her partner wears gloves to clean a litter box, a cat sitting nearby, calm teamwork, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['2025年20例（疾管署）','66℃與預防建議取自疾管署新聞稿'],
      layout_reason:'關鍵是可執行的預防行為，選 action：4 個行動當主角，烹調溫度當 hero，全年病例退到下方。',
      tone:'專業易懂', tone_reason:'避免造成棄養恐慌。',
      to_verify:['醃豬肉個案為2010年資料']},
    decision_points:[Object.assign({}, DP_CAT, {current:'飲食為主要途徑（疾管署）'})],
    content_check_note:'病例數與建議引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'弓形蟲感染',
    collect:{
      summary:'弓形蟲感染症2025年全年20例，主要經食入受污染食物、水或未煮熟肉類感染，不會人傳人；孕婦初次感染可能垂直傳給胎兒。「肉煮熟、少生食、勤洗手、家貓吃熟食」是飼主與孕婦家庭值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'20例：依疾管署傳染病統計資料查詢系統（依發病日），2025年弓形蟲感染症全年確定病例20例，屬第四類法定傳染病。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（弓形蟲感染症）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=130'}},
        {item:'年度趨勢方向',desc:'不會人傳人：疾管署2026年新聞稿指出，人類主要因食入受污染的水或食物，或吃到未煮熟的受感染動物組織而感染，不會經由人與人接觸而傳播。',tag:'官方統計',source:{name:'衛生福利部：國內新增弓形蟲感染症確定病例 籲請民眾避免生食及落實手部衛生',url:'https://mohw.gov.tw/cp-16-86978-1.html'}},
        {item:'政策動向',desc:'肉類加熱至66℃以上：疾管署建議烹調肉類加熱至66℃以上、烹調時不要試吃，整理花園或接觸可能被貓糞污染的泥土時戴手套並澈底洗手。',tag:'官方統計',source:{name:'衛生福利部：國內新增弓形蟲感染症確定病例 籲請民眾避免生食及落實手部衛生',url:'https://mohw.gov.tw/cp-16-86978-1.html'}},
        {item:'好發族群年齡層',desc:'孕婦初次感染可能垂直傳染：疾管署指出孕婦於懷孕期間初次感染，可能經胎盤傳給胎兒，造成流產、死胎或胎兒異常，2010年曾有孕期生食醃豬肉的新生兒垂直感染個案。',tag:'官方統計',source:{name:'衛生福利部：新生兒垂直感染弓形蟲感染症，疾管局籲孕婦勿生食肉類',url:'https://mohw.gov.tw/cp-16-26785-1.html'}}
      ],
      product_view:['機會：孕產家庭與飼主族群可結合孕期飲食衛教。','機會：寵物飼主是可經營的族群，可提供人畜共通傳染病衛教。','風險：避免造成對貓的恐慌或鼓勵棄養。'],
      marketing_view:['機會：「養貓就會得弓形蟲？」是常見迷思，適合破除迷思內容。','機會：孕期飲食衛教是自然的溝通情境。','風險：避免以胎兒異常做恐懼訴求。'],
      alert_level:'low',
      alert_reason:'病例數少且穩定，屬長期食品衛生與孕期衛教議題。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('有養貓的孕婦，可請家人協助處理貓的排泄物與園藝工作','SOURCE_EVIDENCE','claim_without_source',
          '疾管署新聞稿建議孕婦避免接觸來路不明的貓、接觸泥土戴手套，但沒有「請家人處理貓排泄物」的建議，本句為延伸建議。','low','no',
          null,'no','clarify','可標示為延伸建議或補出處。',
          '有養貓的孕婦，接觸可能被貓糞污染的泥土時戴手套並洗手'),
        F('就能大幅降低風險','COMPLIANCE_RISK','efficacy_claim',
          '智庫觀點的「大幅降低風險」沒有數據或出處，語氣接近效果保證。','low','no',
          null,'no','clarify','改為中性說法。',
          '就能降低感染風險'),
        F('不用因為懷孕就把貓送走，家人分工就好','SOURCE_EVIDENCE','claim_without_source',
          '生活親切版的這句建議沒有官方出處，雖然立意良好，但疾管署新聞稿未針對是否飼養寵物表態。','low','no',
          null,'no','clarify','可改為事實陳述。',
          '預防重點在飲食與洗手，養貓的家庭可由家人分擔清理'),
        F('主要經飲食感染，孕婦初次感染可能傳給胎兒','SOURCE_EVIDENCE','source_unstated',
          '簡潔有力版沒有標示傳染途徑的說明出自疾管署。','low','no',
          null,'no','clarify','補上出處即可。',
          '疾管署指出主要經飲食感染，孕婦初次感染可能傳給胎兒')
      ],
      card:[
        F('孕婦貓砂與園藝交給家人','SOURCE_EVIDENCE','claim_without_source',
          '行動卡的「貓砂交給家人」為延伸建議，引用的疾管署新聞稿未直接提到貓砂。','low','no',
          null,'no','clarify','屬出處補充。',
          '孕婦接觸泥土戴手套、洗手'),
        F('疾管署傳染病統計｜不會人傳人','MEDICAL_INTERPRETATION','context_missing',
          '「不會人傳人」放在病例數註腳，卻沒有提到孕婦可能垂直傳給胎兒，讀者可能以為完全沒有人與人之間的傳染。','low','no',
          null,'no','clarify','補上垂直感染例外即可。',
          '疾管署傳染病統計｜不經日常接觸傳染')
      ]
    },
    title_alts:[
      '弓形蟲怎麼預防？肉煮熟、少生食，孕婦與飼主要多一分注意',
      '養貓就會得弓形蟲？吃對、洗手才是重點',
      '弓形蟲感染症年度病例與孕期預防重點'
    ],
    card_title_alts:[
      ['養貓就會得弓形蟲？','吃熟食、勤洗手是重點'],
      ['孕婦注意','不生食、勤洗手'],
      ['給貓奴','餵熟食、戴手套']
    ],
    data_addon:[
      '弓形蟲感染症2025年全年確定病例20例（疾管署傳染病統計資料查詢系統）。',
      '疾管署建議肉類加熱至66℃以上，烹調時不要試吃。',
      '孕婦於懷孕期間初次感染，可能經胎盤傳給胎兒。'
    ],
    cta:'今晚料理時確認肉類全熟；家有孕婦的飼主，和家人分配好清理工作。'
  });
})();
