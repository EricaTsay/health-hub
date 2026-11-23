/* v6 示範主題：塑膠微粒（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-20。數據來源：食藥署闢謠〈喝瓶裝水，會致癌，是真的嗎?〉（2021發布、2025維護：定義、健康風險無明確證據、容器標示規定）、食藥署科技計畫〈食品中塑膠微粒之安全及暴露風險評估〉、環境部POPs資訊網轉載綠色和平推估（每人每年經海鮮1.63萬個微塑膠，NGO文獻推估）。
   注意：塑膠微粒對人體健康影響國際尚無定論，國內外均未訂食品中限量。
   參考方向：健康智庫〈塑膠微粒對健康的危害〉2024/05、〈食品安全－食品容器〉2025/12。 */
(function(){
  const REFS = [
    {title:'喝瓶裝水，會致癌，是真的嗎?',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/tc/newsContent.aspx?id=27393'},
    {title:'食品中塑膠微粒之安全及暴露風險評估',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/tc/technologyContent2.aspx?id=MOHW110-FDA-F-114-000374'},
    {title:'綠色和平揭海鮮「塑據」：台灣人每年吃下1.63萬個微塑膠（轉載）',source:'環境部持久性有機污染物資訊網',url:'https://topic.moenv.gov.tw/pops/cp-366-9379-7fa41-2.html'}
  ];
  const TABLE = {headers:['問題','目前的官方說法'], rows:[
    ['塑膠微粒是什麼','長度小於5公釐的塑膠碎片，由塑膠分解產生'],
    ['怎麼進入食物','經空氣、水體進入環境循環，並透過食物鏈累積'],
    ['對健康有害嗎','國際尚無明確證據，也還沒訂定食品中限量規範'],
    ['塑膠容器能用嗎','依標示的材質與耐熱溫度正確使用，可安心使用']
  ]};
  const TAGS = ['塑膠微粒','食品容器','減塑','環境健康','食品安全'];

  const PRO = {
    content_type:'健康文章',
    title:'塑膠微粒會傷身嗎？目前證據與日常減塑做法',
    update_date:'2026/11/20',
    intro:'塑膠微粒是長度小於5公釐的塑膠碎片，已在空氣、地下水、海水與食物鏈中被發現。食品藥物管理署指出，國際間尚未針對食品中塑膠微粒訂定管理規範，其對人體健康風險也沒有明確證據，仍需更多研究。環境保護團體綠色和平依文獻推估，台灣每人每年可能經由海鮮吃下約1.63萬個微塑膠。在證據未定之前，正確使用塑膠容器與源頭減塑，是最實際的做法。',
    sections:[
      {heading:'塑膠微粒的4個問答',format:'table',table:TABLE},
      {heading:'塑膠食品容器的規範',format:'bullets',items:[
        '食藥署「食品器具容器包裝衛生標準」訂有塑化劑材質及溶出試驗限量。',
        '塑膠類食品器具容器包裝須標示材質名稱與耐熱溫度等資訊。',
        '食藥署持續執行稽查專案，避免不合格產品流入市面。'
      ]},
      {heading:'日常可以怎麼做',format:'bullets',items:[
        '看清容器標示的材質與耐熱溫度，不超溫使用。',
        '熱湯熱食優先使用不鏽鋼、玻璃或陶瓷容器。',
        '減少一次性塑膠用品，自備餐具與購物袋。',
        '不必因此不吃海鮮，均衡飲食仍是原則。'
      ]}
    ],
    think_tank_view:'塑膠微粒是一個「證據還在累積」的議題：不需要恐慌，但也值得預防。比起追蹤每天吃進多少顆，減少一次性塑膠、熱食不用不耐熱的塑膠容器，是對自己和環境都有益的選擇。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'定義與健康風險說明引自食藥署，1.63萬個為綠色和平依文獻推估（環境部網站轉載）已標明出處性質，未點名特定品牌。',
    ai_rationale:{basis:['食藥署：國際尚無塑膠微粒健康風險明確證據與管理規範','綠色和平推估每人每年經海鮮1.63萬個（NGO推估）'],
      layout_reason:'先用問答表格說明定義、途徑與證據現況，再介紹容器規範，最後給日常減塑做法。',
      tone:'專業易懂', tone_reason:'需傳達「證據未定、仍可預防」的平衡訊息。',
      to_verify:['1.63萬個為NGO依文獻推估，非官方統計']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'我們每天都吃進塑膠？塑膠微粒的真相',
    update_date:'2026/11/20',
    intro:'新聞常說我們吃下很多塑膠微粒，聽起來很可怕。塑膠微粒是小於5公釐的塑膠碎片，已經在海水、空氣、食物裡被發現。不過食藥署說，目前全世界都還沒有明確證據證明它會危害健康，也還沒有訂定標準。綠色和平推估，台灣人每年可能從海鮮吃下約1.63萬個微塑膠。',
    sections:[
      {heading:'塑膠微粒4問',format:'table',table:TABLE},
      {heading:'塑膠容器有管嗎？',format:'bullets',items:[
        '政府有規定塑膠容器的材質和溶出標準。',
        '塑膠容器要標示材質和耐熱溫度。',
        '食藥署也會定期抽查。'
      ]},
      {heading:'生活中這樣做',format:'bullets',items:[
        '看清楚耐熱溫度，不要裝太燙的東西。',
        '熱湯熱飯用不鏽鋼、玻璃或陶瓷碗。',
        '自備餐具和環保袋，少用一次性塑膠。',
        '海鮮還是可以吃，均衡最重要。'
      ]}
    ],
    think_tank_view:'不用害怕到什麼都不敢吃，從自備一個保溫杯、一個便當盒開始就好。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自食藥署，1.63萬個為綠色和平推估，未點名特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以新聞常見的恐慌切入。', tone:'生活親切', tone_reason:'給關心環境與健康的一般讀者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'塑膠微粒：證據未定，仍可減塑',
    update_date:'2026/11/20',
    intro:'塑膠微粒為小於5公釐的塑膠碎片。食藥署指出其健康風險國際尚無明確證據。',
    sections:[
      {heading:'4問',format:'table',table:TABLE},
      {heading:'容器規範',format:'bullets',items:[
        '須標示材質與耐熱溫度。'
      ]},
      {heading:'做法',format:'bullets',items:[
        '熱食用不鏽鋼、玻璃、陶瓷。',
        '少用一次性塑膠。'
      ]}
    ],
    think_tank_view:'不恐慌、不輕忽，從減少一次性塑膠做起。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自食藥署，未點名特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為問答、規範、做法三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'塑膠微粒', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'塑膠微粒健康風險尚無明確證據', primary_visual:'< 5 公釐', secondary_message:'正確使用容器、減少一次性塑膠', action_priority:'熱食不用不耐熱塑膠'},
    headline_hook:'每天都在吃塑膠？', headline_main:'塑膠微粒 4 個問題一次看', title_accent:'4 個問題',
    hero_message:'小於 5 公釐', hero_support:'的塑膠碎片就是塑膠微粒（食藥署）',
    knowledge_title:'塑膠微粒 4 問', knowledge_note:'健康影響國際**尚無定論**，仍值得預防',
    knowledge_cards:[
      {label:'是什麼', icon:'search', lines:['< 5 公釐','塑膠分解碎片']},
      {label:'怎麼進來', icon:'leaf', lines:['空氣、水體','食物鏈累積']},
      {label:'有害嗎', icon:'shield', lines:['尚無明確證據','也未訂限量']},
      {label:'容器能用嗎', icon:'check', lines:['看材質與','耐熱溫度']}
    ],
    action_title:'日常這樣做',
    action_cards:[
      {key:'看', text:'看清容器材質與耐熱溫度'},
      {key:'熱', text:'熱食用不鏽鋼、玻璃或陶瓷'},
      {key:'減', text:'自備餐具，少用一次性塑膠'},
      {key:'衡', text:'海鮮照常吃，均衡飲食'}
    ],
    carousel_suggestion:{reason:'若想把定義、證據與減塑做法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'塑膠微粒', headline_main:'是什麼、怎麼進來'},
      {layout_type:'knowledge', headline_hook:'會傷身嗎', headline_main:'目前證據怎麼說'},
      {layout_type:'action', headline_hook:'日常減塑', headline_main:'4 個做法'}]},
    hashtags:['塑膠微粒','食品容器','減塑','環境健康'],
    sources:['衛生福利部食品藥物管理署'],
    illustration_category:'general',
    illustration:{topic:'日常減塑', audience:'上班族與家庭', scene:'一位上班族用自備的不鏽鋼便當盒和玻璃杯外帶午餐，桌上沒有一次性塑膠',
      emotion:'輕鬆、環保', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker taking out lunch in their own stainless-steel lunch box and glass cup, no single-use plastics on the table, relaxed and eco-friendly, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['食藥署塑膠微粒定義與健康風險說明'],
      layout_reason:'核心是釐清觀念，選 knowledge：4 個問答當主角，最後給減塑行動。',
      tone:'專業易懂', tone_reason:'平衡恐慌與預防。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自食藥署，未點名特定品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'塑膠微粒',
    collect:{
      summary:'塑膠微粒指小於5公釐的塑膠碎片，已廣泛存在於環境與食物鏈中；食藥署指出國際尚無明確證據顯示其對人體健康的風險，也未訂定食品中限量。民眾焦慮度高，溝通重點在「證據未定、仍可預防」：正確使用塑膠容器與源頭減塑。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約1.63萬個：綠色和平依國內文獻推估，台灣每人每年平均經由海鮮吃下約1.63萬個微塑膠（環境部POPs資訊網轉載），屬NGO推估而非官方統計。',tag:'推估',source:{name:'環境部POPs資訊網：綠色和平揭海鮮「塑據」',url:'https://topic.moenv.gov.tw/pops/cp-366-9379-7fa41-2.html'}},
        {item:'政策動向',desc:'尚無管理規範：食藥署表示國際間尚未針對食品中塑膠微粒訂有管理規範，其對人體健康風險危害亦無明確證據，後續仍需更詳細研究。',tag:'官方統計',source:{name:'食藥署：喝瓶裝水，會致癌，是真的嗎?',url:'https://www.fda.gov.tw/tc/newsContent.aspx?id=27393'}},
        {item:'好發族群年齡層',desc:'長度小於5公釐：食藥署定義塑膠微粒為長度小於5公釐的塑膠碎片，可經空氣、地下水、海水進入環境循環，並經由生物累積轉移到食物鏈上層。',tag:'官方統計',source:{name:'食藥署：喝瓶裝水，會致癌，是真的嗎?',url:'https://www.fda.gov.tw/tc/newsContent.aspx?id=27393'}},
        {item:'年度趨勢方向',desc:'標示耐熱溫度：塑膠類食品器具容器包裝依食品安全衛生管理法須標示材質名稱及耐熱溫度等資訊，並訂有塑化劑材質與溶出試驗限量標準。',tag:'官方統計',source:{name:'食藥署：喝瓶裝水，會致癌，是真的嗎?',url:'https://www.fda.gov.tw/tc/newsContent.aspx?id=27393'}}
      ],
      product_view:['機會：環境健康是新世代關注議題，適合連結ESG與減塑倡議。','機會：容器使用小知識是實用生活內容。','風險：健康影響尚無定論，不得誇大致癌或疾病風險；避免推薦特定容器品牌。'],
      marketing_view:['機會：國際研究常登上新聞，可作為知識補充。','機會：自備餐具挑戰適合互動活動。','風險：NGO推估數字需標明性質，避免當作官方統計。'],
      alert_level:'low',
      alert_reason:'屬新興環境健康議題，證據仍在累積；無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('台灣每人每年可能經由海鮮吃下約1.63萬個微塑膠','SOURCE_EVIDENCE','ngo_estimate',
          '此數字為綠色和平依文獻推估，文中雖寫出團體名稱，但未說明為推估值與資料年份，讀者可能當成官方量測結果。','medium','yes',
          '綠色和平推估的原始文獻、方法與發布年份。','no','confirm','屬NGO推估。',
          '台灣每人每年可能經由海鮮吃下約1.63萬個微塑膠（綠色和平依文獻推估，非官方量測）',
          ['台灣人每年可能從海鮮吃下約1.63萬個微塑膠']),
        F('熱湯熱食優先使用不鏽鋼、玻璃或陶瓷容器','SOURCE_EVIDENCE','unsourced_advice',
          '食藥署原文建議「依產品資訊正確使用」塑膠容器即可安心，並未建議改用其他材質；此建議為本文延伸，未附出處。','low','no',
          null,'no','clarify','屬建議來源說明。',
          '依標示的耐熱溫度使用塑膠容器；若有疑慮，熱湯熱食可改用不鏽鋼、玻璃或陶瓷容器',
          ['熱湯熱飯用不鏽鋼、玻璃或陶瓷碗','熱食用不鏽鋼、玻璃、陶瓷。']),
        F('國際間尚未針對食品中塑膠微粒訂定管理規範','CURRENCY_TIMELINESS','evolving_regulation',
          '此說法出自食藥署2021年闢謠文（2025年維護），國際法規仍在發展；文中宜標示說法時間點。','low','no',
          null,'no','clarify','屬時間點標示。',
          '依食藥署說明（2025年維護版），國際間尚未針對食品中塑膠微粒訂定管理規範')
      ],
      card:[
        F('尚無明確證據','MEDICAL_INTERPRETATION','absence_of_evidence',
          '「尚無明確證據」可能被讀成「確定無害」，宜補充「仍在研究中」。','low','no',
          null,'no','clarify','屬風險溝通。',
          '證據不足、仍在研究'),
        F('熱食用不鏽鋼、玻璃或陶瓷','SOURCE_EVIDENCE','unsourced_advice',
          '食藥署建議依標示正確使用塑膠容器，此為延伸建議。','low','no',
          null,'no','clarify','屬建議來源。',
          '熱食依耐熱溫度選容器')
      ]
    },
    title_alts:[
      '塑膠微粒會傷身嗎？目前證據與日常減塑做法',
      '我們每天都吃進塑膠？塑膠微粒的真相',
      '小於5公釐的塑膠碎片：塑膠微粒4個問答'
    ],
    card_title_alts:[
      ['每天都在吃塑膠？','塑膠微粒 4 個問題一次看'],
      ['塑膠微粒會傷身嗎？','證據還在累積'],
      ['日常減塑','從自備餐具開始']
    ],
    data_addon:[
      '歐洲食品安全局與聯合國報告指出，塑膠微粒的毒性研究仍不足（食藥署科技計畫說明）。',
      '同篇報導提到鹽、啤酒與飲用水中也曾驗出塑膠微粒。',
      '食藥署持續執行塑膠食品容器稽查專案。'
    ],
    cta:'明天帶一個自己的杯子或便當盒出門，並看看家裡塑膠保鮮盒標示的耐熱溫度。'
  });
})();
