/* v6 示範主題：健檢報告解讀與追蹤（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-20。數據來源：國健署2026-10-15新聞稿（114年成人預防保健受檢人數與30-39歲異常比例）、國健署2025-01-14新聞稿（成健服務下修30歲、服務內容與頻率、2019-2023國民營養健康調查30-39歲三高盛行率）。
   參考方向：健康智庫〈做完健檢就沒事？接下來應該這樣做！〉2023/10。 */
(function(){
  const REFS = [
    {title:'三十而立 小心別讓「三高」找上門！善用公費健檢掌握健康',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=5020&pid=20399'},
    {title:'成人預防保健升級 30歲開啟健康檢查新里程',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18755'},
    {title:'健保特約醫事機構查詢',source:'衛生福利部中央健康保險署',url:'https://info.nhi.gov.tw/INAE1000/INAE1000S01'}
  ];
  const TABLE = {headers:['年齡','公費成人預防保健'], rows:[
    ['30-39歲','每5年1次（114年起新增）'],
    ['40-64歲','每3年1次'],
    ['65歲以上','每年1次'],
    ['檢查內容','健康行為調查、身體檢查、抽血、尿液檢查、衛教諮詢']
  ]};
  const TAGS = ['健康檢查','成人預防保健','三高','健檢報告','慢性病預防'];

  const PRO = {
    content_type:'健康文章',
    title:'健檢報告有紅字怎麼辦？看懂結果、做好追蹤4步驟',
    update_date:'2026/11/20',
    intro:'國民健康署自114年起把成人預防保健服務下修到30歲。114年全國30歲以上接受成健服務約265.7萬人，其中30至39歲約35.5萬人；這群年輕受檢者中，有30.8%至少一項三高（血壓、血糖或血脂）相關指標異常，以BMI過重或肥胖近5成最多，其次是血脂異常近2成。健檢的價值不在拿到報告，而在看懂紅字之後的追蹤。',
    sections:[
      {heading:'公費成人預防保健服務',format:'table',table:TABLE},
      {heading:'拿到報告先看這些',format:'bullets',items:[
        '成健服務聚焦6項常見問題：血壓、血糖、血脂、腎功能、肝功能與身體質量指數（BMI）。',
        '找出標示異常的項目，並與上一次報告比較是變好還是變差。',
        '114年起的衛教諮詢增加慢性疾病風險評估與腎病期別提示，可請醫師一併說明。'
      ]},
      {heading:'健檢後的追蹤4步驟',format:'bullets',items:[
        '回診聽報告：由醫師說明異常項目的意義與是否需要複檢。',
        '依建議複檢或轉診：單次異常不一定代表疾病，需要確認。',
        '調整生活習慣：每週運動150分鐘、依健康餐盤均衡飲食。',
        '記下下次檢查時間：把歷年報告放在一起，追蹤長期趨勢。'
      ]}
    ],
    think_tank_view:'很多人把健檢當成「考試」，看到全部及格就放心、看到紅字就焦慮。其實健檢更像儀表板：重點是趨勢與後續行動。年輕時就開始累積自己的健康紀錄，才能在數值剛開始偏移時及早調整。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'受檢人數與異常比例引自國健署114年成健資料並標明年份，服務頻率與內容引自國健署新聞稿，未涉及特定健檢機構或商品。',
    ai_rationale:{basis:['沿用步驟1洞察：114年30-39歲受檢者30.8%至少一項三高指標異常（國健署）','服務頻率取自國健署114年成健服務升級新聞稿'],
      layout_reason:'先用表格說明誰可以做公費健檢，再說明看報告的重點，最後給追蹤4步驟。',
      tone:'專業易懂', tone_reason:'健檢情境需要具體可執行的下一步。',
      to_verify:['30.8%為受檢者比例，不代表全體30-39歲人口']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'30歲就有免費健檢！報告出現紅字別只是收進抽屜',
    update_date:'2026/11/20',
    intro:'從114年開始，30到39歲每5年就能做1次免費成人健檢。國健署統計，114年有35.5萬名30多歲的人去做了檢查，每10位就有約3位至少一項三高指標亮紅燈，最常見的是體重過重，其次是血脂。報告出現紅字不用慌，但也別收進抽屜就忘了。',
    sections:[
      {heading:'免費健檢多久做一次？',format:'table',table:TABLE},
      {heading:'報告這樣看',format:'bullets',items:[
        '主要看6件事：血壓、血糖、血脂、腎功能、肝功能、BMI。',
        '找出有標記的項目，和上次報告比一比。',
        '看不懂就請醫師解釋，現在還會幫你評估慢性病風險。'
      ]},
      {heading:'看完報告之後',format:'bullets',items:[
        '回診聽醫師說明，該複檢就複檢。',
        '一次數字偏高不一定是生病，但要追蹤。',
        '每週動150分鐘、照健康餐盤吃。',
        '把歷年報告收在一起，下次檢查前翻出來比。'
      ]}
    ],
    think_tank_view:'把健檢報告當成自己的健康存摺：每次檢查都存一筆，比較前後變化，比單看這一次及不及格更有用。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，「每10位約3位」依30.8%換算，未涉及特定健檢機構或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「30歲就能免費健檢」的新政策切入。', tone:'生活親切', tone_reason:'給30-40歲上班族。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'健檢報告紅字：回診、複檢、調整、追蹤',
    update_date:'2026/11/20',
    intro:'114年30至39歲成健受檢者中，30.8%至少一項三高指標異常。公費成健已下修至30歲。',
    sections:[
      {heading:'公費成健頻率',format:'table',table:TABLE},
      {heading:'看報告',format:'bullets',items:[
        '血壓、血糖、血脂、腎、肝、BMI。',
        '與前次報告比較。'
      ]},
      {heading:'追蹤',format:'bullets',items:[
        '回診聽報告、依建議複檢。',
        '調整飲食與運動。',
        '保存歷年報告。'
      ]}
    ],
    think_tank_view:'健檢的價值在追蹤：看懂異常、比較趨勢、採取行動。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，未涉及特定健檢機構或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為頻率、看報告、追蹤三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'健檢報告解讀與追蹤', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'30 多歲受檢者約 3 成三高指標異常', primary_visual:'30.8%', secondary_message:'公費成健已下修至 30 歲', action_priority:'健檢後追蹤 4 步驟'},
    headline_hook:'健檢報告有紅字？', headline_main:'看完報告，做好這 4 步', title_accent:'這 4 步',
    hero_message:'每 10 位約有 3 位', hero_support:'30–39 歲受檢者至少一項三高指標異常（114 年）',
    primary_stat:{value:'30.8%', label:'30–39 歲受檢者三高指標異常', note:'國健署成人預防保健資料庫｜114 年'},
    action_title:'健檢後這樣做',
    action_cards:[
      {key:'聽', text:'回診請醫師說明異常項目'},
      {key:'複', text:'依建議複檢或轉診確認'},
      {key:'改', text:'每週運動 150 分鐘、均衡飲食'},
      {key:'存', text:'保存歷年報告，比較長期趨勢'}
    ],
    notice:'30–39 歲每 **5 年 1 次**、40–64 歲每 3 年 1 次、65 歲以上每年 1 次公費健檢。',
    carousel_suggestion:{reason:'若想把健檢資格、報告解讀與追蹤分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'30 歲就能免費健檢', headline_main:'公費成健頻率一次看'},
      {layout_type:'data', headline_hook:'30 多歲也有三高', headline_main:'受檢者 30.8% 指標異常'},
      {layout_type:'action', headline_hook:'報告有紅字', headline_main:'追蹤 4 步驟'}]},
    hashtags:['健康檢查','成人預防保健','三高','健檢報告'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'健檢報告追蹤', audience:'30-40 歲上班族', scene:'一位年輕上班族拿著健檢報告，醫師指著其中一項數值耐心說明',
      emotion:'認真、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young office worker holding a health check-up report while a doctor patiently points at one value and explains, attentive and reassured, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：114年30-39歲受檢者30.8%至少一項三高指標異常（國健署）'],
      layout_reason:'重點是「拿到報告後要做什麼」，選 action：4 個追蹤步驟當主角，異常比例當背景。',
      tone:'專業易懂', tone_reason:'具體下一步，避免焦慮。',
      to_verify:['30.8%為受檢者比例']},
    decision_points:[],
    content_check_note:'數據與服務頻率引自國健署並標明年份，未涉及特定健檢機構或商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'健檢報告解讀與追蹤',
    collect:{
      summary:'公費成人預防保健自114年起下修至30歲，114年全國受檢約265.7萬人；30至39歲受檢者中30.8%至少一項三高指標異常，BMI過重肥胖近5成。健檢後的回診、複檢與長期追蹤，是把檢查轉為健康管理的關鍵。',
      objective_data:[
        {item:'盛行率／發生率',desc:'30.8%：國健署統計114年30至39歲接受成人預防保健者約35.5萬人，其中30.8%至少有一項三高（血壓、血糖或血脂）相關指標異常。',tag:'官方統計',source:{name:'國健署：三十而立 小心別讓「三高」找上門',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=5020&pid=20399'}},
        {item:'好發族群年齡層',desc:'BMI過重肥胖近5成：114年30至39歲受檢者以BMI過重或肥胖最多（近5成），其次為血脂異常近2成、代謝症候群逾1成9、血壓異常逾1成5、血糖異常約4.7%。',tag:'官方統計',source:{name:'國健署：三十而立 小心別讓「三高」找上門',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=5020&pid=20399'}},
        {item:'政策動向',desc:'約265.7萬人受檢：成人預防保健自114年1月1日起新增30至39歲每5年1次，114年全國30歲以上接受服務約265.7萬人，其中30至39歲占約13.4%。',tag:'官方統計',source:{name:'國健署：三十而立 小心別讓「三高」找上門',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=5020&pid=20399'}},
        {item:'年度趨勢方向',desc:'高血脂18.7%：國健署2019-2023年國民營養健康調查顯示，30至39歲三高盛行率為高血脂18.7%、高血壓9.7%、高血糖2.5%，是成健服務下修年齡的依據。',tag:'官方統計',source:{name:'國健署：成人預防保健升級 30歲開啟健康檢查新里程',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18755'}}
      ],
      product_view:['機會：健檢異常追蹤可連結健康管理服務與慢性病預防的衛教說明。','機會：30多歲新增公費健檢，是與年輕族群建立健康關懷接觸點的時機。','風險：不得暗示健檢結果與投保或理賠條件的關係；避免推薦特定自費健檢套餐。'],
      marketing_view:['機會：「30歲就有免費健檢」是年輕族群不熟悉的新資訊，適合做知識型內容。','機會：「報告收進抽屜」的情境容易引起共鳴。','風險：異常比例易被讀成全體人口盛行率，需註明為受檢者比例。'],
      alert_level:'low',
      alert_reason:'屬長期健康管理議題，114年政策新增30歲族群，仍處推廣期，可持續溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('有30.8%至少一項三高（血壓、血糖或血脂）相關指標異常','DATA_FACTUAL_ACCURACY','sample_scope',
          '30.8%是「接受成健服務者」中的比例，主動受檢者可能與全體30多歲人口不同；文中未提醒不能直接當成同齡人口盛行率。','low','no',
          null,'no','clarify','數字正確，屬口徑說明。',
          '有30.8%至少一項三高（血壓、血糖或血脂）相關指標異常（受檢者比例，非全體盛行率）',
          ['每10位就有約3位至少一項三高指標亮紅燈','30.8%至少一項三高指標異常']),
        F('以BMI過重或肥胖近5成最多','TERMINOLOGY_LANGUAGE','category_mixing',
          '同一句把BMI過重歸入「三高相關指標異常」並列，但BMI不屬於三高；讀者可能誤以為近5成是三高異常。','low','no',
          null,'no','clarify','屬分類表達。',
          '另外檢查項目中以BMI過重或肥胖近5成最多',
          ['最常見的是體重過重']),
        F('單次異常不一定代表疾病，需要確認','MEDICAL_INTERPRETATION','reassurance_balance',
          '安撫語氣有助降低焦慮，但未說明哪些情況需要儘快就醫（例如數值明顯偏高），可能讓讀者延後處理。','low','no',
          null,'no','clarify','屬風險溝通平衡。',
          '單次異常不一定代表疾病，需要確認；若醫師標示需儘快就醫，請不要延後',
          ['一次數字偏高不一定是生病，但要追蹤'])
      ],
      card:[
        F('30–39 歲受檢者三高指標異常','DATA_FACTUAL_ACCURACY','sample_scope',
          '卡面已寫「受檢者」，但未說明為「至少一項」異常，讀者可能理解為三項都異常。','low','no',
          null,'no','clarify','屬口徑說明。',
          '30–39 歲受檢者至少一項三高指標異常'),
        F('每週運動 150 分鐘、均衡飲食','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '一般建議量，已有異常或慢性病者應依醫師建議調整運動強度。','low','no',
          null,'no','clarify','屬適用對象說明。',
          '依醫師建議規律運動、均衡飲食')
      ]
    },
    title_alts:[
      '健檢報告有紅字怎麼辦？看懂結果、做好追蹤4步驟',
      '30歲就有免費健檢！報告出現紅字別只是收進抽屜',
      '30多歲受檢者3成三高異常：健檢後的追蹤清單'
    ],
    card_title_alts:[
      ['健檢報告有紅字？','看完報告，做好這 4 步'],
      ['30 歲就有免費健檢','報告別收進抽屜'],
      ['每 10 位約有 3 位','三高指標亮紅燈']
    ],
    data_addon:[
      '114年30至39歲受檢者：代謝症候群逾1成9、血壓異常逾1成5、血糖異常約4.7%（國健署）。',
      '114年起成健衛教增加慢性疾病風險評估與腎病期別提示。',
      '全國約7千多家健保特約醫事機構提供成人預防保健服務。'
    ],
    cta:'翻出最近兩次健檢報告，把標示異常的項目並排比一比，有紅字就預約回診聽醫師說明。'
  });
})();
