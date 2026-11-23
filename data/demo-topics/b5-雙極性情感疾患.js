/* v6 示範主題：雙極性情感疾患（B5 心理健康與精神疾患）
   查證日期：2026-11-20。數據來源：台灣英文新聞 2022-10-28（台灣精神醫學會理事長：盛行率、推估人數、發病年齡；國外研究發病高峰）、
   聯合報 2026-07-08（台中榮總嘉義分院精神科醫師：誤診與治療）、衛福部 115-07-30 精神衛生法新制新聞稿。
   查無2023年後國內官方或學會公布的雙極性疾患盛行率與人數。
   撰寫原則：附求助專線，不描述自傷細節。
   參考方向：健康智庫〈情感性精神疾病〉2023/08。 */
(function(){
  const TN = 'https://www.taiwannews.com.tw/ch/news/4700918';
  const UDN = 'https://udn.com/news/story/7266/9614615';
  const REFS = [
    {title:'幾乎不用睡還狂購物 28歲女不是病好了而是躁期發作',source:'聯合報',url:UDN},
    {title:'研究：躁鬱症首波發病高峰為17歲 情緒過度高昂、低落要當心！',source:'台灣英文新聞',url:TN},
    {title:'精神衛生法新制 法院裁定強制住院治療8/1施行',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-87291-1.html'},
    {title:'安心專線改4碼更好記! 1925依舊愛我 持續服務你和我',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48244-1.html'}
  ];
  const TABLE = {headers:['','躁期／輕躁期','鬱期'], rows:[
    ['情緒','異常高昂、亢奮或易怒','長時間低落、空虛'],
    ['睡眠與精力','睡很少仍精力旺盛','失眠早醒或嗜睡、提不起勁'],
    ['想法與行為','話多、思考跳躍、過度自信、衝動花錢','反應變慢、自責、覺得沒希望'],
    ['容易被誤會成','「病好了」「心情很好」','一般憂鬱症']
  ]};
  const TAGS = ['雙極性情感疾患','躁鬱症','情緒穩定','規律治療','1925安心專線'];

  const DP_OLD = {id:'dp-bp-year', type:'data_version', title:'盛行率與人數是2022年的說法',
    desc:'「在台盛行率約0.3%至0.5%、推估逾6萬9,594人」出自台灣精神醫學會理事長2022年記者會，報導未說明資料年份與推估方法；目前查無較新的國內官方數字。AI 沒有替你決定是否沿用。',
    current:'盛行率約0.3%至0.5%（學會理事長2022年說法）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'改成不寫數字', action:'replace', from:'台灣精神醫學會理事長2022年指出，國內盛行率約0.3%至0.5%', to:'這是一種需要長期治療的慢性精神疾病'}]};

  const PRO = {
    content_type:'健康文章',
    title:'雙極性情感疾患：不只是憂鬱，躁期也是警訊',
    update_date:'2026/11/20',
    intro:'雙極性情感疾患（俗稱躁鬱症）是情緒在「躁期」與「鬱期」之間起伏的精神疾病。台灣精神醫學會理事長2022年指出，國內盛行率約0.3%至0.5%，發病平均年齡在20至30歲。台中榮總嘉義分院精神科醫師2026年提醒，必須曾出現躁期或輕躁期才能確診，因此病程初期常被誤認為憂鬱症；躁期時精神亢奮、睡很少，也常被誤以為「病好了」。',
    sections:[
      {heading:'躁期與鬱期的差別',format:'table',table:TABLE},
      {heading:'治療重點',format:'bullets',items:[
        '躁期常以情緒穩定劑為主，必要時搭配新型抗精神病藥物；目前也有長效針劑，可減輕每天服藥的負擔。',
        '鬱期依病情由醫師評估是否搭配抗憂鬱劑，通常規律用藥2至3週後才逐漸見效。',
        '雙極性疾患如同高血壓、糖尿病，需要長期治療；症狀改善後切勿自行停藥，以免復發。'
      ]},
      {heading:'本人與家人可以這樣做',format:'bullets',items:[
        '維持規律作息與睡眠，留意睡眠突然變少、花錢變多等躁期前兆。',
        '和醫師一起擬定復發警訊清單，家人發現變化時及早陪同回診。',
        '若出現強烈無望感或想傷害自己的念頭，請立即撥打24小時免付費的1925安心專線或尋求醫療協助。'
      ]}
    ],
    think_tank_view:'雙極性疾患最容易被忽略的是躁期：精神很好、點子很多、不太需要睡，看起來像是「狀態很好」。若曾經憂鬱、又出現這樣的時期，值得把兩段經驗都告訴醫師。穩定治療、規律作息，多數人可以把情緒起伏控制在可生活的範圍。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率標明為學會理事長2022年說法，治療說明標明醫師身分，未描述自傷細節並附求助專線，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['盛行率0.3%至0.5%、發病平均20至30歲（台灣精神醫學會理事長2022年）','必須曾出現躁期才能確診、長效針劑（台中榮總嘉義分院醫師2026年）'],
      layout_reason:'核心是「躁期與鬱期」兩種狀態的對照，先用表格對照，再說明治療與自我管理。',
      tone:'專業易懂', tone_reason:'需破除「躁期＝病好了」的誤解，避免汙名。',
      to_verify:['盛行率與6萬9,594人為2022年說法，查無較新官方數字']},
    decision_points:[DP_OLD]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'突然精神超好、不用睡又狂購物？可能是躁鬱症的躁期',
    update_date:'2026/11/20',
    intro:'躁鬱症（雙極性情感疾患）不是單純的「情緒化」，而是心情會在很亢奮和很低落之間擺盪的疾病。台灣精神醫學會理事長2022年提到，它多半在20到30歲開始出現。醫師說，很多人一開始只被當成憂鬱症；等到突然變得精神超好、幾乎不睡、一直買東西，家人還以為是病好了，其實是躁期來了。',
    sections:[
      {heading:'躁期和鬱期，差在哪？',format:'table',table:TABLE},
      {heading:'怎麼治療？',format:'bullets',items:[
        '醫師會用情緒穩定劑等藥物幫忙穩住情緒，現在也有一個月打一次的長效針劑。',
        '低落的時候，醫師可能再搭配其他藥物，通常要吃2到3週才會慢慢有效。',
        '它跟高血壓一樣需要長期照顧，就算感覺變好了，也不要自己停藥。'
      ]},
      {heading:'生活中可以這樣做',format:'bullets',items:[
        '固定時間睡覺起床，留意突然睡很少、花很多錢的變化。',
        '跟醫師和家人一起列出「快要發作」的跡象，提早回診。',
        '如果覺得撐不下去，請打1925安心專線，24小時都有人聽你說。'
      ]}
    ],
    think_tank_view:'家人最容易誤會的，是躁期那段「狀態很好」的日子。多一點了解，就能在變化剛出現時提醒他回診；穩定治療的人，也能好好工作、好好生活。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'年齡與治療說明標明學會與醫師說法，語氣親切、去汙名，附求助專線，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以家人觀察到的變化帶出躁鬱兩期、治療與生活管理。', tone:'生活親切', tone_reason:'給病人家屬與年輕族群閱讀。', to_verify:['發病年齡為2022年說法']},
    decision_points:[Object.assign({}, DP_OLD, {current:'未寫盛行率數字', options:[{label:'沿用目前寫法', action:'keep'}]})]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'躁鬱症：躁期、鬱期一次看',
    update_date:'2026/11/20',
    intro:'台灣精神醫學會理事長2022年指出，國內盛行率約0.3%至0.5%。必須曾有躁期或輕躁期才能確診，初期常被誤認為憂鬱症。',
    sections:[
      {heading:'躁期vs鬱期',format:'table',table:TABLE},
      {heading:'治療',format:'bullets',items:[
        '情緒穩定劑為主，另有長效針劑。',
        '長期治療，勿自行停藥。'
      ]},
      {heading:'自我管理',format:'bullets',items:[
        '規律作息，留意躁期前兆。',
        '需要時撥1925安心專線。'
      ]}
    ],
    think_tank_view:'躁期不是病好了；規律治療與作息，是穩定情緒的關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率標明為學會2022年說法，附求助專線，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為對照、治療、管理三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['盛行率為2022年說法']},
    decision_points:[DP_OLD]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'雙極性情感疾患', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'躁期不是病好了', primary_visual:'躁期 vs 鬱期', secondary_message:'必須曾有躁期才能確診，常被誤認為憂鬱症', action_priority:'規律治療、勿自行停藥'},
    headline_hook:'不只是憂鬱', headline_main:'躁鬱症：躁期 vs 鬱期', title_accent:'躁期 vs 鬱期',
    hero_message:'躁期不是病好了', hero_support:'曾出現躁期或輕躁期，是醫師診斷的關鍵',
    knowledge_title:'躁期與鬱期', knowledge_note:'情緒起伏影響生活，**到身心科評估**',
    knowledge_cards:[
      {label:'躁期：情緒', icon:'brain', lines:['異常高昂或易怒']},
      {label:'躁期：行為', icon:'check', lines:['睡很少仍精力旺盛','和平常判若兩人地衝動花錢']},
      {label:'鬱期：情緒', icon:'chat', lines:['長時間低落、空虛']},
      {label:'鬱期：行為', icon:'home', lines:['失眠早醒、提不起勁']}
    ],
    primary_stat:{value:'0.3–0.5%', label:'國內盛行率（學會理事長 2022 年說法）', note:'發病平均年齡 20–30 歲'},
    secondary_stats:[
      {value:'2–3 週', label:'鬱期用藥逐漸見效'},
      {value:'每月 1 次', label:'長效針劑可評估使用'}
    ],
    action_title:'穩定生活這樣做',
    action_cards:[
      {key:'醫', text:'規律回診，勿自行停藥'},
      {key:'睡', text:'固定作息，留意睡眠突然變少'},
      {key:'察', text:'和家人列出復發前兆清單'},
      {key:'援', text:'需要傾訴，撥 1925 安心專線'}
    ],
    carousel_suggestion:{reason:'若想把躁期、鬱期與治療分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'躁期不是病好了', headline_main:'認識躁期的表現'},
      {layout_type:'knowledge', headline_hook:'不只是憂鬱', headline_main:'鬱期與一般憂鬱'},
      {layout_type:'action', headline_hook:'穩定生活', headline_main:'規律治療 4 件事'}]},
    hashtags:['雙極性情感疾患','躁鬱症','心理健康','1925安心專線'],
    sources:['台中榮總嘉義分院（媒體受訪）','台灣精神醫學會（媒體受訪，2022）'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'雙極性情感疾患', audience:'年輕族群與家人', scene:'一位年輕人坐在窗邊，家人陪在身旁一起看著手機上的回診提醒',
      emotion:'穩定、被支持', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young adult sitting by a window with a family member beside them, both looking at a clinic follow-up reminder on a phone, steady and supported mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['必須曾出現躁期才能確診（台中榮總嘉義分院醫師2026年）'],
      layout_reason:'核心是辨識躁期與鬱期，選 knowledge：4 張卡對照兩期表現，盛行率退到下方，最後給 4 個穩定生活行動。',
      tone:'專業易懂', tone_reason:'去汙名、破除「躁期＝病好了」。',
      to_verify:[]},
    decision_points:[{id:'dp-bp-card', type:'tone', title:'「躁鬱症」與正式病名', desc:'卡面標題用俗稱「躁鬱症」較易懂，正式病名為「雙極性情感疾患」；部分病友團體偏好正式病名以減少標籤。AI 沒有替你決定。',
      current:'標題使用俗稱「躁鬱症」',
      options:[{label:'維持俗稱', action:'keep'}, {label:'改用正式病名', action:'replace', from:'躁鬱症：躁期 vs 鬱期', to:'雙極性疾患：躁期 vs 鬱期'}]}],
    content_check_note:'診斷原則引自醫師受訪，附求助專線，未使用療效保證用語，未涉及具體藥品或商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'雙極性情感疾患',
    collect:{
      summary:'雙極性情感疾患常在年輕時發病，初期多被誤認為憂鬱症，躁期又常被誤以為「病好了」；長效針劑等治療選項增加，精神衛生法新制2026年上路，「辨識躁期、規律治療、去汙名」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'盛行率約0.3%至0.5%：台灣精神醫學會理事長2022年記者會指出國內盛行率約0.3%至0.5%，推估患者逾6.9萬人（未說明資料年份與推估方法，查無較新官方統計）。',tag:'市場觀察',source:{name:'台灣英文新聞：研究：躁鬱症首波發病高峰為17歲',url:TN}},
        {item:'年度趨勢方向',desc:'170.2萬人因精神相關疾病就醫：據聯合報2026年7月引述健保署統計，114年因精神相關疾病就醫170.2萬人（範圍含各類精神疾病，非僅雙極性疾患）。',tag:'官方統計',source:{name:'聯合報：台灣去年因精神相關疾病就診逾170萬人（引述健保署統計）',url:'https://udn.com/news/story/7266/9652507'}},
        {item:'政策動向',desc:'2026年8月1日起強制住院改由法院裁定：精神衛生法新制施行，強化病人權益與社區支持。',tag:'官方統計',source:{name:'衛生福利部：精神衛生法新制 法院裁定強制住院治療8/1施行',url:'https://www.mohw.gov.tw/cp-16-87291-1.html'}},
        {item:'好發族群年齡層',desc:'發病平均年齡20至30歲：學會理事長2022年指出，並引述國外研究發病有17歲、26歲、42歲三個高峰，較早發病者物質濫用等共病比例較高。',tag:'市場觀察',source:{name:'台灣英文新聞：研究：躁鬱症首波發病高峰為17歲',url:TN}}
      ],
      product_view:['機會：雙極性疾患需長期治療，可說明慢性精神疾病對工作與家庭經濟的影響。','機會：結合心理健康支持服務與求助資源，展現陪伴型價值。','風險：避免汙名化用語；精神疾病核保與理賠須依條款如實說明，不暗示特定族群不可投保。'],
      marketing_view:['機會：每年3月30日世界雙極日是可用的溝通檔期。','機會：「躁期不是病好了」是能引發家屬共鳴的迷思破解。','風險：避免以戲劇化或娛樂化方式描述躁期行為；內容附求助管道。'],
      alert_level:'low',
      alert_reason:'屬長期心理健康議題，無專屬時效政策；可在世界雙極日或心理健康月溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('台灣精神醫學會理事長2022年指出，國內盛行率約0.3%至0.5%','SOURCE_EVIDENCE','secondary_citation_method_unstated',
          '已註明出處與年份，但報導沒有說明盛行率來自哪一項研究或資料庫，讀者無法判斷依據。','low','yes',
          '國內雙極性疾患盛行率研究或健保資料分析的原始出處。','no','confirm','數字與國際文獻範圍相近，但出處未明。',
          '台灣精神醫學會理事長2022年引述，國內盛行率約0.3%至0.5%（研究出處待補）'),
        F('目前也有長效針劑，可減輕每天服藥的負擔','MEDICAL_INTERPRETATION','benefit_unqualified',
          '長效針劑不一定適用每位病人，文中未說明需由醫師評估，讀者可能主動要求更換。','low','no',
          null,'no','clarify','屬適用範圍說明。',
          '目前也有長效針劑可供醫師評估使用，減輕每天服藥的負擔',
          ['現在也有一個月打一次的長效針劑','另有長效針劑']),
        F('多數人可以把情緒起伏控制在可生活的範圍','MEDICAL_INTERPRETATION','unsupported_generalization',
          '「多數人」沒有附上研究依據，可能讓讀者對治療效果有過高預期。','medium','yes',
          '雙極性疾患規律治療後穩定比例的研究。','no','soften','治療目標確實如此，但比例未查證。',
          '許多人可以逐步把情緒起伏控制在可生活的範圍'),
        F('維持規律作息與睡眠','MEDICAL_INTERPRETATION','missing_rationale',
          '沒有說明為什麼規律作息重要（睡眠剝奪可能誘發躁期），讀者不易重視。','low','no',
          null,'no','clarify','補一句理由即可。',
          '維持規律作息與睡眠（睡眠突然減少可能誘發躁期）',
          ['固定時間睡覺起床','規律作息，留意躁期前兆'])
      ],
      card:[
        F('國內盛行率（學會理事長 2022 年說法）','SOURCE_EVIDENCE','secondary_citation_method_unstated',
          '主數字出自學會理事長2022年記者會，研究出處與年份未說明，且已是數年前的說法。','low','yes',
          '國內雙極性疾患盛行率原始研究。','no','confirm','查無較新官方統計。',
          '國內盛行率（學會理事長 2022 年引述，研究出處待補）'),
        F('每月 1 次','MEDICAL_INTERPRETATION','benefit_unqualified',
          '長效針劑的給藥間隔依藥物與病人而不同，卡面寫「每月 1 次」可能讓讀者以為都是如此。','low','no',
          null,'no','clarify','屬適用範圍說明。',
          '最長每月 1 次')
      ]
    },
    title_alts:[
      '雙極性情感疾患：不只是憂鬱，躁期也是警訊',
      '突然精神超好、不用睡又狂購物？可能是躁鬱症的躁期',
      '躁期不是病好了：雙極性疾患的辨識與治療'
    ],
    card_title_alts:[
      ['不只是憂鬱','躁鬱症：躁期 vs 鬱期'],
      ['躁期不是病好了','認識雙極性疾患'],
      ['情緒雲霄飛車？','躁期與鬱期怎麼分']
    ],
    data_addon:[
      '學會理事長2022年引述國外研究：分析1萬3,626名患者，發病高峰為17歲、26歲與42歲。',
      '醫師提醒：部分藥物可能造成體重增加，有困擾應與醫師討論調整，不要自行停藥。',
      '鬱期用藥通常需規律使用2至3週後才逐漸見效。'
    ],
    cta:'如果你曾經憂鬱，又有過幾天不太需要睡、精神異常亢奮的時期，下次就診時把兩段經驗都告訴醫師；需要傾訴，撥1925。'
  });
})();
