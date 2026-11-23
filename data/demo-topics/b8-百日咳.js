/* v6 示範主題：百日咳（B8 傳染病防治）
   查證日期：2026-11-20。數據來源：疾管署開放資料 Age_County_Gender_033（依發病年份，2026-11-20 下載）、疾管署新聞稿（2025-05-06，衛福部網站轉載）。
   只用全年統計，不寫當週疫情。
   參考方向：健康智庫〈百日咳家庭群聚！如何預防？〉2024/08。 */
(function(){
  const REFS = [
    {title:'傳染病統計資料查詢系統：百日咳',source:'衛生福利部疾病管制署',url:'https://nidss.cdc.gov.tw/nndss/disease?id=033'},
    {title:'百日咳病例為六年同期新高，籲請家長應按時帶孩童接種疫苗，有疑似症狀應儘速就醫',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-82398-1.html'}
  ];
  const TABLE = {headers:['對象','建議'], rows:[
    ['嬰幼兒','出生滿2、4、6、18個月及滿5歲至入小學前各接種1劑公費百日咳相關疫苗'],
    ['孕婦','每次懷孕自費接種1劑Tdap疫苗，建議於第28至36週接種'],
    ['嬰兒照顧者','可自費接種1劑Tdap疫苗'],
    ['有疑似症狀者','戴口罩儘速就醫，依醫師指示完成治療']
  ]};
  const TAGS = ['百日咳','Tdap疫苗','孕婦疫苗','嬰幼兒疫苗','家庭群聚'];

  const DP_AGE = {id:'dp-pertussis-age', type:'data_scope', title:'嬰兒占比有兩種口徑',
    desc:'疾管署2025年5月新聞稿以當年累計14例計算，3個月（含）以下嬰兒占27%；依開放資料2025年全年45例計算，未滿1歲嬰兒13例、約占29%。兩者分母與年齡切點不同，AI 採用全年統計，供你確認。',
    current:'2025年全年45例，未滿1歲13例（疾管署開放資料）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'13 例／45 例', value:'未滿 1 歲・2025 全年', note:'疾管署開放資料，依發病年份（目前採用）'},
      {label:'27%', value:'3 個月以下・2025 年 5 月前', note:'疾管署新聞稿，當年累計14例'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'百日咳病例回升：2025年45例、近3成是嬰兒，孕婦Tdap是關鍵保護',
    update_date:'2026/11/20',
    intro:'依疾病管制署統計（依發病年份），2025年全年百日咳確定病例45例，高於2024年的34例，也是近年最高；其中未滿1歲嬰兒13例。疾管署指出，近年百日咳以3個月以下嬰兒感染比例最高，家庭群聚的感染源多為照顧者或同住者。嬰兒在完成疫苗接種前最容易受影響，孕婦接種Tdap疫苗可讓抗體傳給胎兒。',
    sections:[
      {heading:'各族群疫苗建議',format:'table',table:TABLE},
      {heading:'認識百日咳',format:'bullets',items:[
        '初期症狀與感冒類似，之後可能出現陣發性嚴重咳嗽、咳嗽後臉潮紅或嘔吐。',
        '嬰兒感染可能出現呼吸困難等重症。',
        '2025年全年45例中，未滿1歲13例、10至19歲19例，嬰兒與青少年是主要族群。'
      ]},
      {heading:'家中有嬰兒這樣做',format:'bullets',items:[
        '外出返家接觸嬰幼兒前，先更衣、洗手。',
        '避免帶嬰幼兒出入醫院、人潮擁擠或空氣不流通的場所。',
        '家長與較大的孩子注意咳嗽禮節與呼吸道衛生。'
      ]}
    ],
    think_tank_view:'百日咳最需要保護的是還沒打完疫苗的小嬰兒，而他們最常從家人身上被傳染。孕期接種Tdap、照顧者一起接種，再加上返家先洗手更衣，就是替新生兒築起的「家庭防護網」。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'病例數引自疾管署開放資料並標明依發病年份，疫苗建議引自疾管署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['2025年45例、2024年34例（疾管署開放資料）','疫苗建議取自疾管署2025-05-06新聞稿'],
      layout_reason:'先用表格讓不同族群找到疫苗建議，再說明症狀與族群，最後給家庭防護做法。',
      tone:'專業易懂', tone_reason:'疫苗資訊需精確對應族群。',
      to_verify:['孕婦Tdap為自費，疾管署新聞稿未提公費']},
    decision_points:[DP_AGE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'家有新生兒，百日咳怎麼防？孕期一劑Tdap保護寶寶',
    update_date:'2026/11/20',
    intro:'百日咳一開始像感冒，後來會一陣一陣咳得很厲害。疾管署統計，2025年一整年有45人確診，比前一年多，其中13位是不到1歲的寶寶。寶寶太小還沒打完疫苗，最常是被家裡的大人傳染，所以全家一起防護很重要。',
    sections:[
      {heading:'全家疫苗檢查表',format:'table',table:TABLE},
      {heading:'百日咳長什麼樣子？',format:'bullets',items:[
        '一開始流鼻水、輕微咳嗽，像一般感冒。',
        '後來一陣一陣猛咳，咳完臉紅或想吐。',
        '小寶寶可能會呼吸困難，要特別小心。'
      ]},
      {heading:'家有寶寶的小提醒',format:'bullets',items:[
        '下班回家先換衣服、洗手再抱寶寶。',
        '少帶寶寶去人多、不通風的地方。',
        '家人咳嗽記得戴口罩。'
      ]}
    ],
    think_tank_view:'懷孕時打一劑Tdap，再請常照顧寶寶的阿公阿嬤一起問問醫師，就是送給寶寶最實在的見面禮。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，語氣親切但未淡化風險，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家有新生兒的情境帶出疫苗與防護。', tone:'生活親切', tone_reason:'給準爸媽與祖父母閱讀。', to_verify:[]},
    decision_points:[DP_AGE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'百日咳：2025年45例，孕婦打Tdap',
    update_date:'2026/11/20',
    intro:'2025年百日咳全年45例，未滿1歲13例。孕期28至36週接種Tdap，抗體可傳給胎兒。',
    sections:[
      {heading:'疫苗建議',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '返家先洗手更衣再抱嬰兒。',
        '咳嗽戴口罩儘速就醫。'
      ]}
    ],
    think_tank_view:'孕婦與照顧者接種，是保護嬰兒最直接的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為建議與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_AGE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'百日咳', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'2025 年百日咳 45 例，近年最高', primary_visual:'45 例', secondary_message:'未滿 1 歲嬰兒 13 例', action_priority:'孕婦 Tdap、嬰兒按時接種'},
    headline_hook:'百日咳病例回升', headline_main:'孕期一劑 Tdap 保護寶寶', title_accent:'Tdap',
    primary_stat:{kicker:'2025 年・全年', value:'45 例', label:'百日咳確定病例', note:'疾管署｜依發病年份'},
    chart:{type:'bar', title:'百日咳全年確定病例（例）', points:[
      {label:'2019', value:32, display:'32'},
      {label:'2020', value:5, display:'5'},
      {label:'2022', value:2, display:'2'},
      {label:'2024', value:34, display:'34'},
      {label:'2025', value:45, display:'45', highlight:true}
    ], note:'疾管署傳染病統計｜2021、2023 年 0 例'},
    secondary_stats:[
      {value:'13 例', label:'2025 年未滿 1 歲嬰兒'},
      {value:'28–36 週', label:'孕婦建議接種 Tdap 時間'}
    ],
    action_title:'全家這樣防',
    action_cards:[
      {key:'孕', text:'每次懷孕第 28–36 週自費接種 Tdap'},
      {key:'嬰', text:'滿 2、4、6、18 個月按時接種'},
      {key:'照', text:'嬰兒照顧者可自費接種 Tdap'},
      {key:'洗', text:'返家先更衣洗手再抱嬰兒'}
    ],
    carousel_suggestion:{reason:'若想把趨勢、疫苗建議與家庭防護分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'百日咳病例回升', headline_main:'2025 年全年 45 例'},
      {layout_type:'knowledge', headline_hook:'全家疫苗檢查表', headline_main:'孕婦、嬰兒、照顧者'},
      {layout_type:'action', headline_hook:'家有新生兒', headline_main:'返家先洗手更衣'}]},
    hashtags:['百日咳','Tdap疫苗','孕婦疫苗','嬰幼兒疫苗'],
    sources:['衛生福利部疾病管制署'],
    illustration_category:'virus-infection',
    illustration:{topic:'百日咳家庭防護', audience:'準爸媽與新生兒家庭', scene:'一位孕婦在診間接種疫苗，伴侶在旁拿著嬰兒用品陪同',
      emotion:'溫暖、有準備', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A pregnant woman receiving a vaccine in a clinic while her partner holds baby supplies beside her, warm and prepared, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['2019-2025年全年病例（疾管署開放資料）','疫苗建議取自疾管署2025-05-06新聞稿'],
      layout_reason:'關鍵訊息是「病例回升、嬰兒最脆弱」，選 data：全年病例當主角，近年趨勢放右側，嬰兒病例與接種時機退到第二層，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'疫苗資訊需精確、不恐嚇。',
      to_verify:['孕婦Tdap為自費']},
    decision_points:[Object.assign({}, DP_AGE, {current:'45 例｜2025 年全年'})],
    content_check_note:'病例數與疫苗建議引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'百日咳',
    collect:{
      summary:'百日咳病例在2020至2023年降至個位數後回升，2024年34例、2025年45例，未滿1歲嬰兒與青少年為主要族群；家庭群聚多由照顧者傳給嬰兒，「孕期接種Tdap、嬰兒按時接種、照顧者一起防護」是新生兒家庭值得長期溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'45例：依疾管署傳染病統計開放資料（依發病年份），2025年全年百日咳確定病例45例，均為本土病例，其中未滿1歲嬰兒13例。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（百日咳）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=033'}},
        {item:'年度趨勢方向',desc:'34例：2024年全年百日咳34例，2020至2023年則僅0至5例，2025年再增至45例，病例數回升至疫情前水準以上。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（百日咳）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=033'}},
        {item:'政策動向',desc:'孕婦第28至36週接種Tdap：疾管署建議女性每次懷孕自費接種1劑Tdap疫苗，嬰兒照顧者也可自費接種，嬰幼兒則於滿2、4、6、18個月及5歲至入小學前接種公費疫苗。',tag:'官方統計',source:{name:'衛生福利部：百日咳病例為六年同期新高，籲請家長應按時帶孩童接種疫苗',url:'https://mohw.gov.tw/cp-16-82398-1.html'}},
        {item:'好發族群年齡層',desc:'13例未滿1歲：2025年45例中未滿1歲13例、10至19歲19例，疾管署指出家庭群聚中感染源多為照顧者或同住者，嬰兒感染可能出現呼吸困難等重症。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（百日咳）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=033'}}
      ],
      product_view:['機會：孕產與新生兒家庭是保障規劃關鍵時點，可搭配孕期疫苗衛教展現陪伴。','機會：嬰幼兒住院醫療保障的條款說明，回應新手父母需求。','風險：疫苗屬醫療決策，避免與保險商品連結推銷。'],
      marketing_view:['機會：孕期衛教與產前課程是溝通Tdap的自然時點。','機會：「全家一起保護寶寶」適合跨世代溝通。','風險：避免以嬰兒重症做恐懼訴求。'],
      alert_level:'medium',
      alert_reason:'近兩年病例回升且集中於嬰兒，適合在孕產衛教中持續溝通；即時疫情交由正式模式查詢。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('也是近年最高','SOURCE_EVIDENCE','comparison_basis_unstated',
          '「近年最高」沒有說明比較區間；開放資料顯示2016至2025年中，2025年45例為最高，但文章沒有寫出比較年份。','low','no',
          null,'no','clarify','補上比較區間即可。',
          '也是2016年以來最高'),
        F('孕婦接種Tdap疫苗可讓抗體傳給胎兒','MEDICAL_INTERPRETATION','cost_unstated',
          '專業易懂版引言只說孕婦接種可保護胎兒，沒提到目前是自費，讀者可能以為產檢時會自動提供。','low','no',
          null,'no','clarify','補上費用性質即可。',
          '孕婦自費接種Tdap疫苗可讓抗體傳給胎兒'),
        F('其中13位是不到1歲的寶寶','SOURCE_EVIDENCE','context_missing',
          '生活親切版沒有提到10至19歲青少年也是主要族群（19例），讀者可能以為只有嬰兒會得病。','low','no',
          null,'no','clarify','補上青少年族群即可。',
          '其中13位是不到1歲的寶寶，青少年也有19位'),
        F('孕期28至36週接種Tdap，抗體可傳給胎兒','MEDICAL_INTERPRETATION','cost_unstated',
          '簡潔有力版沒有說明Tdap為自費，也沒有提到每次懷孕都要接種。','low','no',
          null,'no','clarify','補上關鍵條件即可。',
          '每次懷孕第28至36週自費接種Tdap，抗體可傳給胎兒')
      ],
      card:[
        F('疾管署傳染病統計｜2021、2023 年 0 例','SOURCE_EVIDENCE','chart_gap',
          '直條圖跳過2021與2023年，只在註腳說明為0例，讀者看圖時可能誤以為資料缺漏或趨勢連續上升。','low','no',
          null,'no','clarify','可在圖中補上0例的年份。',
          '疾管署傳染病統計｜依發病年份，2021、2023 年 0 例未列'),
        F('孕婦建議接種 Tdap 時間','MEDICAL_INTERPRETATION','cost_unstated',
          '次數字只寫週數，沒有標示為自費接種與「每次懷孕」，卡面讀者可能誤以為是公費產檢項目。','low','no',
          null,'no','clarify','補上自費與每次懷孕。',
          '每次懷孕自費接種 Tdap 時間')
      ]
    },
    title_alts:[
      '百日咳病例回升：2025年45例、近3成是嬰兒，孕婦Tdap是關鍵保護',
      '家有新生兒，百日咳怎麼防？孕期一劑Tdap保護寶寶',
      '百日咳疫苗怎麼打？嬰兒、孕婦與照顧者的接種建議'
    ],
    card_title_alts:[
      ['百日咳病例回升','孕期一劑 Tdap 保護寶寶'],
      ['2025 年全年 45 例','嬰兒最需要保護'],
      ['家有新生兒','全家一起防百日咳']
    ],
    data_addon:[
      '百日咳全年確定病例：2019年32例、2020年5例、2022年2例、2024年34例、2025年45例（疾管署開放資料，依發病年份；2021、2023年0例）。',
      '疾管署2025年5月：當年累計病例以3個月（含）以下嬰兒占27%為多，其次為13至19歲占24%。',
      '嬰幼兒於出生滿2、4、6、18個月及滿5歲至入小學前各接種1劑百日咳相關疫苗。'
    ],
    cta:'懷孕中的妳，下次產檢問醫師Tdap接種時間；家中常抱寶寶的長輩也一起評估。'
  });
})();
