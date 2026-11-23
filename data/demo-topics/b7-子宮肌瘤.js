/* v6 示範主題：子宮肌瘤（B7 女性・男性・生育與兒童）
   查證日期：2026-11-20。查無衛福部／國健署／健保署公開的子宮肌瘤年度統計；數字皆為醫學會與醫院醫師經媒體引述（二手），已標示並埋預審。
   來源：台灣英文新聞2026-03-05（台北市立聯合醫院、台灣婦產科醫學會、台灣更年期醫學會）、TVBS健康2.0 2024-10-23（新北市立土城醫院）。
   參考方向：健康智庫〈女性腫瘤與癌症－子宮肌瘤〉2026/03。 */
(function(){
  const REFS = [
    {title:'經血多到貧血 長期恐加重心臟負擔！（台北市立聯合醫院、台灣婦產科醫學會、台灣更年期醫學會）',source:'台灣英文新聞',url:'https://www.taiwannews.com.tw/zh/news/6314582'},
    {title:'子宮肌瘤 機械手臂治療納健保，傷害小不易影響生育（新北市立土城醫院）',source:'TVBS健康2.0',url:'https://health.tvbs.com.tw/medical/350416'}
  ];
  const TABLE = {headers:['常見症狀','可能影響'], rows:[
    ['經血過多、經期延長','長期可能造成缺鐵性貧血，出現頭暈、疲倦、虛弱'],
    ['壓迫膀胱與腸道','頻尿、便祕、腹脹'],
    ['腹部壓迫感','下腹悶脹，肌瘤較大時可能摸到硬塊'],
    ['生育相關','可能影響受孕與著床，需與醫師討論']
  ]};
  const TAGS = ['子宮肌瘤','經血過多','貧血','婦科超音波','女性健康'];

  const DP_PREV = {id:'dp-fibroid-prev', type:'data_source', title:'盛行率說法不一',
    desc:'子宮肌瘤盛行率目前沒有官方統計，醫師與學會的說法包括「平均每4人就有1人」「約1/3育齡婦女」，以及「20至30歲約2至3成、40至50歲高達4至5成」。口徑與出處都不同，AI 沒有替你選出一個「正確」的數字。',
    current:'20至30歲女性約2至3成、40至50歲約4至5成（台灣婦產科醫學會，2026年媒體引述）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'2–3 成／4–5 成', value:'依年齡', note:'台灣婦產科醫學會秘書長，2026年（目前採用）'},
      {label:'每 4 人有 1 人', value:'女性整體', note:'台北市立聯合醫院醫師，2026年'},
      {label:'約 1/3', value:'育齡婦女', note:'新北市立土城醫院醫師，2024年'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'子宮肌瘤很常見：經血過多、貧血別忽略，30歲起可搭配婦科超音波',
    update_date:'2026/11/20',
    intro:'子宮肌瘤是女性最常見的良性腫瘤之一。據台灣婦產科醫學會2026年於記者會說明，20至30歲女性約有2至3成有子宮肌瘤，40至50歲則高達4至5成；台北市立聯合醫院醫師並指出，每年有超過45萬名女性因子宮肌瘤就醫、約2萬人需手術治療。約一半患者會出現臨床不適，最常見的是經血過多。本文整理子宮肌瘤的症狀、追蹤與治療方向。',
    sections:[
      {heading:'子宮肌瘤常見症狀',format:'table',table:TABLE},
      {heading:'需要開刀嗎？',format:'bullets',items:[
        '子宮肌瘤不一定需要立即手術，但必須定期追蹤大小與症狀變化。',
        '治療方式包括藥物與手術，醫師會依症狀、肌瘤大小位置、年齡與生育計畫評估。',
        '2024年醫師受訪指出，部分婦科機械手臂輔助手術已納入健保給付，實際適用範圍以健保署公告為準。'
      ]},
      {heading:'檢查與就醫時機',format:'bullets',items:[
        '醫師建議30歲以上女性，除了每年子宮頸抹片檢查，也可搭配婦科超音波檢查。',
        '經血量異常增加、經期延長、頭暈疲倦或下腹壓迫感，應及早就醫。',
        '長期經血過多造成的貧血，不一定單靠補鐵就能解決，需找出出血原因。'
      ]}
    ],
    think_tank_view:'子宮肌瘤很常見，多數不會惡化，但「經血多到貧血」常被誤以為是體質問題而拖延就醫。把月經的量與天數當成健康紀錄的一部分，有異常就讓婦產科醫師評估，是女性照顧自己最簡單的開始。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率與就醫人數均為醫學會與醫師經媒體引述並已標明，非官方統計；未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['20至30歲2至3成、40至50歲4至5成（台灣婦產科醫學會，台灣英文新聞2026-03-05）','每年逾45萬人就醫、約2萬人手術（台北市立聯合醫院醫師，同篇）'],
      layout_reason:'先用表格對照症狀，再說明治療方向，最後給檢查與就醫時機。',
      tone:'專業易懂', tone_reason:'女性健康資訊需精確、不恐嚇。',
      to_verify:['子宮肌瘤盛行率與就醫人數無官方統計，均為二手引述','機械手臂納保項目應以健保署公告核對']},
    decision_points:[DP_PREV]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'月經量變多、常頭暈？可能是子宮肌瘤在作怪',
    update_date:'2026/11/20',
    intro:'子宮肌瘤其實很常見。婦產科醫學會醫師說，20到30歲的女性大約每10人有2到3人有子宮肌瘤，到了40到50歲更多達4到5成。大部分是良性的，但約一半的人會不舒服，最常見的就是月經量變多，久了還可能貧血。',
    sections:[
      {heading:'這些狀況，可能和子宮肌瘤有關',format:'table',table:TABLE},
      {heading:'一定要開刀嗎？',format:'bullets',items:[
        '不一定，很多人只要定期追蹤就好。',
        '症狀明顯時，醫師會依年齡、肌瘤大小和生育計畫，建議吃藥或手術。'
      ]},
      {heading:'什麼時候去檢查？',format:'bullets',items:[
        '30歲以後，做子宮頸抹片時可以順便問醫師要不要照超音波。',
        '月經量突然變多、天數變長，或常常頭暈累累的，早點看醫生。',
        '貧血不是只靠補鐵就好，要找出原因。'
      ]}
    ],
    think_tank_view:'很多女生把經血量多當成「體質」，忍了好多年。下次月經來時記錄一下用了幾片衛生棉、來了幾天，帶著紀錄去看醫生，溝通會更有效率。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據為醫師經媒體引述並已標明，語氣親切但未淡化症狀，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以生活症狀帶出就醫與追蹤。', tone:'生活親切', tone_reason:'給育齡女性閱讀。', to_verify:[]},
    decision_points:[DP_PREV]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'子宮肌瘤：經血過多要檢查',
    update_date:'2026/11/20',
    intro:'子宮肌瘤盛行率隨年齡上升，40至50歲女性約4至5成（台灣婦產科醫學會）。經血過多、貧血是常見警訊。',
    sections:[
      {heading:'常見症狀',format:'table',table:TABLE},
      {heading:'重點',format:'bullets',items:[
        '不一定要開刀，但要定期追蹤。',
        '30歲以上可搭配婦科超音波。'
      ]}
    ],
    think_tank_view:'經血異常別硬撐，追蹤比擔心更有用。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據為醫學會經媒體引述，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為症狀與重點兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_PREV]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'子宮肌瘤', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'子宮肌瘤很常見，經血過多要檢查', primary_visual:'4–5 成', secondary_message:'不一定要開刀，但要追蹤', action_priority:'記錄經期、定期超音波'},
    headline_hook:'月經量變多、常頭暈？', headline_main:'認識子宮肌瘤 4 大症狀', title_accent:'4 大症狀',
    hero_message:'40–50 歲約 4–5 成', hero_support:'台灣婦產科醫學會（2026 年媒體引述）',
    knowledge_title:'常見症狀', knowledge_note:'約一半患者**會出現不適**',
    knowledge_cards:[
      {label:'經血過多', icon:'heart', lines:['經期延長','可能貧血']},
      {label:'壓迫膀胱腸道', icon:'pressure', lines:['頻尿、便祕','腹脹']},
      {label:'腹部壓迫', icon:'search', lines:['下腹悶脹','可能摸到硬塊']},
      {label:'影響生育', icon:'people', lines:['可能影響受孕','與著床']}
    ],
    primary_stat:{value:'逾 45 萬人', label:'每年因子宮肌瘤就醫', note:'台北市立聯合醫院醫師引述｜約 2 萬人手術'},
    secondary_stats:[
      {value:'2–3 成', label:'20–30 歲女性'},
      {value:'4–5 成', label:'40–50 歲女性'}
    ],
    action_title:'女性這樣照顧自己',
    action_cards:[
      {key:'記', text:'記錄經血量與經期天數'},
      {key:'照', text:'30 歲起可搭配婦科超音波'},
      {key:'追', text:'確診後依醫囑定期追蹤'},
      {key:'醫', text:'頭暈疲倦、經血暴增及早就醫'}
    ],
    carousel_suggestion:{reason:'若想把症狀、治療與檢查分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'月經量變多？', headline_main:'子宮肌瘤 4 大症狀'},
      {layout_type:'data', headline_hook:'年紀越大越常見', headline_main:'40–50 歲約 4–5 成'},
      {layout_type:'action', headline_hook:'一定要開刀嗎？', headline_main:'定期追蹤最重要'}]},
    hashtags:['子宮肌瘤','經血過多','婦科超音波','女性健康'],
    sources:['台灣婦產科醫學會','台北市立聯合醫院'],
    illustration_category:'screening-checkup',
    illustration:{topic:'婦科檢查', audience:'30 歲以上女性', scene:'一位女性在婦產科診間和女醫師一起看超音波報告',
      emotion:'安心、被理解', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A woman reviewing an ultrasound report with a female doctor in a gynaecology clinic, reassured and understood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['盛行率與就醫人數為醫學會及醫師經媒體引述（2026年）'],
      layout_reason:'核心是辨識症狀，選 knowledge：4 大症狀放中段，就醫人數與盛行率退到下方，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'女性健康資訊需清楚、不恐嚇。',
      to_verify:['數字均為二手引述，無官方統計']},
    decision_points:[Object.assign({}, DP_PREV, {current:'40–50 歲約 4–5 成（台灣婦產科醫學會）'})],
    content_check_note:'數字標明醫學會與醫師引述，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'子宮肌瘤',
    collect:{
      summary:'子宮肌瘤是女性最常見的良性腫瘤之一，醫學會指出盛行率隨年齡上升、40至50歲女性約4至5成，醫師估計每年逾45萬人就醫；官方尚無年度統計。「經血過多別忽略、30歲起搭配婦科超音波、確診定期追蹤」是女性健康值得長期溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'逾4成（40至50歲女性）：台灣婦產科醫學會於2026年記者會說明，子宮肌瘤盛行率20至30歲女性約2至3成，40至50歲高達4至5成，約一半患者出現臨床不適（媒體引述，非官方統計）。',tag:'市場觀察',source:{name:'台灣英文新聞：經血多到貧血 長期恐加重心臟負擔！',url:'https://www.taiwannews.com.tw/zh/news/6314582'}},
        {item:'年度趨勢方向',desc:'逾45萬人：台北市立聯合醫院婦產部醫師2026年引述統計，每年超過45萬名女性因子宮肌瘤就醫，其中約2萬人因症狀嚴重需手術治療（未註明原始資料來源）。',tag:'市場觀察',source:{name:'台灣英文新聞：經血多到貧血 長期恐加重心臟負擔！',url:'https://www.taiwannews.com.tw/zh/news/6314582'}},
        {item:'政策動向',desc:'46項機械手臂輔助手術納健保：新北市立土城醫院醫師2024年受訪指出，健保署當年9月將46項機械手臂輔助手術費納入給付，首次包含7項婦科手術（媒體引述，適用範圍以健保署公告為準）。',tag:'市場觀察',source:{name:'TVBS健康2.0：子宮肌瘤 機械手臂治療納健保',url:'https://health.tvbs.com.tw/medical/350416'}},
        {item:'好發族群年齡層',desc:'約一半患者有症狀：醫師指出經血過多是最常見症狀，長期可能造成缺鐵性貧血，肌瘤也可能壓迫膀胱與腸道，並建議30歲以上女性每年抹片外可搭配婦科超音波。',tag:'市場觀察',source:{name:'台灣英文新聞：經血多到貧血 長期恐加重心臟負擔！',url:'https://www.taiwannews.com.tw/zh/news/6314582'}}
      ],
      product_view:['機會：女性良性腫瘤手術是女性保障常被詢問的項目，可說明手術、住院醫療保障的條款範圍。','機會：可結合女性健康檢查提醒服務，提升30至50歲女性客群互動。','風險：須依保單條款如實說明婦科疾病等待期與除外，不可暗示保證理賠。'],
      marketing_view:['機會：三八婦女節前後是女性健康議題的固定溝通時點。','機會：「經血量多不是體質」是能引起共鳴的切入點。','風險：避免以名人案例或恐懼訴求帶動話題。'],
      alert_level:'low',
      alert_reason:'屬長期女性健康議題，無官方時效性事件，適合在婦女節前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('每年有超過45萬名女性因子宮肌瘤就醫、約2萬人需手術治療','SOURCE_EVIDENCE','secondary_citation',
          '文中已註明是台北市立聯合醫院醫師指出，但醫師只說「根據統計」，沒有說明資料來源（如健保署）與年份，屬二手引述且原始數據無法查核。','medium','yes',
          '健保署子宮肌瘤（ICD-10 D25）年度就醫與手術人數。','yes','confirm','數字可能來自健保資料，但無法核對。',
          '每年有超過45萬名女性因子宮肌瘤就醫、約2萬人需手術治療（醫師引述統計，原始來源待查）'),
        F('部分婦科機械手臂輔助手術已納入健保給付','SOURCE_EVIDENCE','secondary_citation',
          '這項給付資訊來自2024年醫師受訪，不是健保署公告原文，且未說明是哪些手術、適用條件為何。','medium','yes',
          '健保署2024年機械手臂輔助手術納保公告。','yes','confirm','給付細節須以健保署公告核對。',
          '健保署2024年將部分婦科機械手臂輔助手術納入給付（適用項目以健保署公告為準）'),
        F('20到30歲的女性大約每10人有2到3人有子宮肌瘤','SOURCE_EVIDENCE','source_unstated',
          '生活親切版只寫「婦產科醫學會醫師說」，沒有年份，也沒說明這不是官方統計。','low','no',
          null,'no','clarify','補上年份與性質即可。',
          '台灣婦產科醫學會2026年指出，20到30歲的女性大約每10人有2到3人有子宮肌瘤'),
        F('40至50歲女性約4至5成（台灣婦產科醫學會）','SOURCE_EVIDENCE','year_unstated',
          '簡潔有力版沒有寫年份，也沒有說明這是學會說法而非調查統計。','low','no',
          null,'no','clarify','補上年份即可。',
          '40至50歲女性約4至5成（台灣婦產科醫學會，2026年）')
      ],
      card:[
        F('每年因子宮肌瘤就醫','SOURCE_EVIDENCE','secondary_citation',
          '「逾 45 萬人」是醫師引述統計，卡面沒有說明原始資料來源，分享後可能被當成官方數字。','medium','no',
          null,'no','clarify','標示為醫師引述。',
          '每年因子宮肌瘤就醫（醫師引述）'),
        F('台灣婦產科醫學會（2026 年媒體引述）','SOURCE_EVIDENCE','secondary_citation',
          '卡面已標明是學會經媒體引述，但未說明不同醫師與學會的盛行率說法不一致，讀者可能以為是唯一數字。','low','no',
          null,'no','clarify','屬口徑提醒。',
          '台灣婦產科醫學會說法（各方估計不一）')
      ]
    },
    title_alts:[
      '子宮肌瘤很常見：經血過多、貧血別忽略，30歲起可搭配婦科超音波',
      '月經量變多、常頭暈？可能是子宮肌瘤在作怪',
      '子宮肌瘤一定要開刀嗎？症狀、追蹤與治療方向'
    ],
    card_title_alts:[
      ['月經量變多、常頭暈？','認識子宮肌瘤 4 大症狀'],
      ['年紀越大越常見','40–50 歲約 4–5 成'],
      ['一定要開刀嗎？','定期追蹤最重要']
    ],
    data_addon:[
      '台灣婦產科醫學會（2026）：子宮肌瘤盛行率20至30歲約2至3成、40至50歲約4至5成。',
      '台北市立聯合醫院醫師（2026）：每年逾45萬名女性因子宮肌瘤就醫，約2萬人手術。',
      '醫師建議30歲以上女性每年抹片外可搭配婦科超音波。'
    ],
    cta:'下次月經來時記錄經血量與天數；30歲以上的妳，做抹片時順便問醫師要不要照超音波。'
  });
})();
