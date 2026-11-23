/* v6 示範主題：漢他病毒（B8 傳染病防治）
   查證日期：2026-11-20。數據來源：疾管署傳染病統計資料查詢系統（漢他病毒症候群，2025年總數，2026-11-20 查詢）、
   疾管署新聞稿（2025-03-11、2026-05-19，衛福部網站轉載）。只用全年統計，不寫當週疫情。
   參考方向：健康智庫〈雙北鼠患？漢他病毒不遙遠〉2026/05。 */
(function(){
  const REFS = [
    {title:'傳染病統計資料查詢系統：漢他病毒症候群',source:'衛生福利部疾病管制署',url:'https://nidss.cdc.gov.tw/nndss/disease?id=HANTA'},
    {title:'國內新增1例漢他病毒症候群病例，提醒民眾落實防鼠「三不」措施',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-81810-1.html'},
    {title:'國內新增1例漢他病毒症候群確定病例 請民眾落實「防鼠三不」措施',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-86446-1.html'}
  ];
  const TABLE = {headers:['防鼠三不','怎麼做'], rows:[
    ['不讓鼠來','封堵管線孔洞、門縫，排水孔加蓋'],
    ['不讓鼠住','清除雜物堆，整理防火巷、水溝與牆垣'],
    ['不讓鼠吃','廚餘與食物密封收好，垃圾每天清']
  ]};
  const TAGS = ['漢他病毒','防鼠三不','鼠類防治','居家清潔','傳染病防治'];

  const DP_BLEACH = {id:'dp-hanta-bleach', type:'data_version', title:'漂白水比例有兩種寫法',
    desc:'疾管署2025年3月新聞稿建議「100cc市售漂白水＋1公升清水、作用30分鐘」，2026年5月新聞稿則寫「1份漂白水＋9份清水、作用5分鐘」。兩者濃度接近但作用時間不同，AI 沒有替你決定要採用哪一個。',
    current:'稀釋漂白水潑灑後，靜置作用再清理（依疾管署建議比例）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'100cc＋1公升，30分鐘', value:'疾管署 2025-03-11', note:'作用時間較長'},
      {label:'1份＋9份，5分鐘', value:'疾管署 2026-05-19', note:'較新的新聞稿'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'漢他病毒怎麼預防？做好防鼠三不，清理鼠跡別直接掃',
    update_date:'2026/11/20',
    intro:'漢他病毒症候群由鼠類傳播，人類吸入或接觸被帶病毒鼠類糞便、尿液、唾液污染的塵土或物體，或被鼠類咬傷，就有感染風險。依疾病管制署統計，2024年與2025年全年各有3例確診，自2016年起累計46例，以男性與40歲以上為多。疾管署指出，落實「不讓鼠來、不讓鼠住、不讓鼠吃」是預防漢他病毒最有效的方法。',
    sections:[
      {heading:'防鼠三不',format:'table',table:TABLE},
      {heading:'發現鼠跡，這樣清理',format:'bullets',items:[
        '先戴口罩、橡膠或塑膠手套，打開門窗通風。',
        '以稀釋漂白水潑灑在可能被污染的地方，靜置作用後再清理，不要直接用掃把乾掃揚起灰塵。',
        '用拋棄式紙巾、抹布或舊報紙清除污物，再以垃圾袋密封丟棄。'
      ]},
      {heading:'哪些環境要特別注意',format:'bullets',items:[
        '防火巷、下水道、水溝蓋、雜物堆與牆垣是鼠類常出沒的地方。',
        '餐飲業、倉儲等容易有鼠類的工作場所，員工應落實防護。',
        '曾接觸鼠跡或被鼠咬傷後出現發燒、頭痛等症狀，就醫時主動告知接觸史。'
      ]}
    ],
    think_tank_view:'漢他病毒的病例雖少，但感染源就在生活周遭。比起看到老鼠才緊張，不如平時就把家裡的縫隙封好、食物收好、雜物清掉；真的發現鼠跡時，記得「先消毒、再清理」，千萬別拿掃把直接掃。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'病例數引自疾管署並標明年份，傳染途徑與清理方式引自疾管署新聞稿，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['2025年全年3例（疾管署傳染病統計資料查詢系統）','2024年3例、2016年起累計46例（疾管署2025-03-11新聞稿）'],
      layout_reason:'核心是可執行的防鼠與清理方法，先用表格列出防鼠三不，再說明鼠跡清理，最後點出高風險環境。',
      tone:'專業易懂', tone_reason:'居家與職場防治需具體步驟。',
      to_verify:['累計46例的起算年兩份新聞稿不同（2016 vs 2017）','漂白水比例與作用時間兩份新聞稿不同']},
    decision_points:[DP_BLEACH]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'家裡出現老鼠屎怎麼辦？先消毒再清，遠離漢他病毒',
    update_date:'2026/11/20',
    intro:'老鼠的糞便、尿液和口水可能帶有漢他病毒，打掃時如果把灰塵揚起來吸進去，就可能被感染。疾管署統計，2024年和2025年各有3人確診，人數不多，但只要家裡或工作場所有老鼠，就不能大意。',
    sections:[
      {heading:'防鼠三不，讓老鼠不上門',format:'table',table:TABLE},
      {heading:'看到老鼠屎，別急著掃',format:'bullets',items:[
        '先戴口罩和手套，把窗戶打開。',
        '用稀釋的漂白水噴灑，放一段時間再擦乾淨。',
        '擦過的紙巾、抹布裝進垃圾袋綁好丟掉。'
      ]},
      {heading:'這些地方要多留意',format:'bullets',items:[
        '防火巷、水溝、雜物堆最容易藏老鼠。',
        '在餐廳、倉庫工作的人更要注意防護。',
        '清過鼠跡後發燒、頭痛，看醫生時要說有接觸老鼠。'
      ]}
    ],
    think_tank_view:'把家裡的食物收好、縫隙補好、雜物清掉，老鼠自然不會來。真的看到老鼠屎，記得先消毒、不要用掃把直接掃。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，語氣親切但未淡化風險，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以居家打掃情境帶出防鼠與清理。', tone:'生活親切', tone_reason:'給一般家庭閱讀。', to_verify:[]},
    decision_points:[DP_BLEACH]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'漢他病毒：防鼠三不＋先消毒再清',
    update_date:'2026/11/20',
    intro:'2025年漢他病毒症候群全年3例。防鼠三不是最有效的預防方法。',
    sections:[
      {heading:'防鼠三不',format:'table',table:TABLE},
      {heading:'清理鼠跡',format:'bullets',items:[
        '戴口罩手套、開窗，稀釋漂白水消毒後再清。',
        '不要乾掃。'
      ]}
    ],
    think_tank_view:'不讓鼠來、住、吃，發現鼠跡先消毒。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為三不與清理兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_BLEACH]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'漢他病毒', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'防鼠三不是預防漢他病毒最有效的方法', primary_visual:'3 例', secondary_message:'清理鼠跡先消毒再清', action_priority:'不讓鼠來、住、吃'},
    headline_hook:'家裡出現老鼠屎？', headline_main:'防漢他病毒 先消毒再清', title_accent:'先消毒再清',
    hero_message:'防鼠三不', hero_support:'不讓鼠來、不讓鼠住、不讓鼠吃（疾管署）',
    primary_stat:{value:'3 例', label:'2025 年漢他病毒症候群', note:'疾管署｜2024 年亦為 3 例'},
    action_title:'清理鼠跡 4 步驟',
    action_cards:[
      {key:'戴', text:'戴口罩、橡膠或塑膠手套'},
      {key:'開', text:'打開門窗通風'},
      {key:'消', text:'稀釋漂白水潑灑，靜置作用'},
      {key:'封', text:'紙巾清除後裝袋密封丟棄'}
    ],
    notice:'**不要用掃把乾掃**，以免揚起受污染的塵土。',
    carousel_suggestion:{reason:'若想把防鼠、清理與高風險環境分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'action', headline_hook:'防鼠三不', headline_main:'不讓鼠來、住、吃'},
      {layout_type:'action', headline_hook:'家裡出現老鼠屎？', headline_main:'先消毒再清'},
      {layout_type:'knowledge', headline_hook:'鼠類常出沒處', headline_main:'防火巷、水溝、雜物堆'}]},
    hashtags:['漢他病毒','防鼠三不','居家清潔','傳染病防治'],
    sources:['衛生福利部疾病管制署'],
    illustration_category:'virus-infection',
    illustration:{topic:'清理鼠跡防漢他病毒', audience:'一般家庭與餐飲業者', scene:'一位戴口罩和手套的人打開窗戶，用噴瓶在牆角噴灑稀釋漂白水',
      emotion:'謹慎、有條理', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A person wearing a mask and gloves opening a window and spraying diluted bleach in a corner with a spray bottle, careful and organised, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['2025年3例（疾管署傳染病統計）','防鼠三不與清理步驟取自疾管署新聞稿'],
      layout_reason:'關鍵是「先消毒再清」的步驟，選 action：清理 4 步驟當主角，病例數退到下方。',
      tone:'專業易懂', tone_reason:'清理步驟要具體好記。',
      to_verify:['漂白水比例兩份新聞稿不同']},
    decision_points:[Object.assign({}, DP_BLEACH, {current:'稀釋漂白水潑灑，靜置作用'})],
    content_check_note:'病例數與步驟引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'漢他病毒',
    collect:{
      summary:'漢他病毒症候群病例雖少，2024、2025年全年各3例，但感染源是生活周遭的鼠類；都市鼠患與餐飲、倉儲等工作環境是溝通重點，「防鼠三不、清理鼠跡先消毒」是值得長期溝通的居家衛生議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'3例：依疾管署傳染病統計資料查詢系統，2025年漢他病毒症候群全年確定病例3例，2024年同為3例（台中市、彰化縣、高雄市各1例）。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（漢他病毒症候群）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=HANTA'}},
        {item:'年度趨勢方向',desc:'累計46例：疾管署2025年3月新聞稿指出，自2016年起累計46例，男性29例占63%，1例為境外移入（印尼），每年病例數少但持續出現。',tag:'官方統計',source:{name:'衛生福利部：國內新增1例漢他病毒症候群病例，提醒民眾落實防鼠「三不」措施',url:'https://mohw.gov.tw/cp-16-81810-1.html'}},
        {item:'政策動向',desc:'防鼠三不：疾管署指出落實「不讓鼠來、不讓鼠住、不讓鼠吃」是預防漢他病毒最有效的方法，清理鼠跡應戴口罩手套、開窗並以稀釋漂白水消毒後再清理。',tag:'官方統計',source:{name:'衛生福利部：國內新增1例漢他病毒症候群確定病例 請民眾落實「防鼠三不」措施',url:'https://mohw.gov.tw/cp-16-86446-1.html'}},
        {item:'好發族群年齡層',desc:'約67%病例為40歲以上：累計46例中40歲以上31例，近年病例包括餐飲業人員與工作時遭老鼠咬傷者，防火巷、下水道與雜物堆是鼠類常出沒環境。',tag:'官方統計',source:{name:'衛生福利部：國內新增1例漢他病毒症候群確定病例 請民眾落實「防鼠三不」措施',url:'https://mohw.gov.tw/cp-16-86446-1.html'}}
      ],
      product_view:['機會：餐飲、倉儲等職場可結合團體保險客戶的職場衛生衛教。','機會：居家環境衛生是一般家庭容易執行的預防主題。','風險：病例數極少，避免誇大風險做商品訴求。'],
      marketing_view:['機會：都市鼠患新聞常引發關注，可用「防鼠三不」提供實用資訊。','機會：「不要乾掃」是反直覺、容易被分享的知識點。','風險：避免點名特定地區或行業造成標籤化。'],
      alert_level:'low',
      alert_reason:'病例數少且穩定，屬長期居家衛生議題，適合配合環境清潔時點溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('自2016年起累計46例','SOURCE_EVIDENCE','conflicting_sources',
          '疾管署2025年3月新聞稿寫「自2016年起累計46例」，2026年5月新聞稿卻寫「自2017年起迄今累計46例」，兩者起算年不同且2026年已有新病例，累計數可能已更新。','medium','yes',
          '疾管署漢他病毒症候群歷年確定病例數。','yes','confirm','兩份官方新聞稿說法不一致。',
          '2016年至2025年3月累計46例'),
        F('靜置作用後再清理','TERMINOLOGY_LANGUAGE','detail_missing',
          '專業易懂版沒有寫出漂白水稀釋比例與作用時間，讀者無法照做；兩份新聞稿的作用時間分別為30分鐘與5分鐘。','medium','no',
          null,'no','clarify','建議依決策點選定後補上具體數字。',
          '靜置作用（如1份漂白水加9份清水，作用5分鐘以上）後再清理'),
        F('放一段時間再擦乾淨','TERMINOLOGY_LANGUAGE','vague_quantifier',
          '生活親切版的「放一段時間」沒有具體時間，讀者可能噴完馬上擦掉。','low','no',
          null,'no','clarify','補上作用時間即可。',
          '放至少5分鐘再擦乾淨'),
        F('2025年漢他病毒症候群全年3例','SOURCE_EVIDENCE','context_missing',
          '簡潔有力版只寫3例，沒有說明傳染途徑，讀者可能不理解為何病例少仍需防鼠。','low','no',
          null,'no','clarify','補一句傳染途徑即可。',
          '2025年漢他病毒症候群全年3例，主要經吸入鼠類排泄物污染的塵土感染')
      ],
      card:[
        F('稀釋漂白水潑灑，靜置作用','TERMINOLOGY_LANGUAGE','detail_missing',
          '行動卡沒有寫出比例與時間，卡面讀者無法照做。','medium','no',
          null,'no','clarify','依決策點補上數字。',
          '漂白水 1:9 潑灑，靜置 5 分鐘'),
        F('疾管署｜2024 年亦為 3 例','SOURCE_EVIDENCE','context_missing',
          '卡面只有近兩年病例數，沒有說明感染途徑，讀者可能把病例少誤解為風險低、不用防護。','low','no',
          null,'no','clarify','屬脈絡補充。',
          '疾管署｜經鼠類排泄物傳播')
      ]
    },
    title_alts:[
      '漢他病毒怎麼預防？做好防鼠三不，清理鼠跡別直接掃',
      '家裡出現老鼠屎怎麼辦？先消毒再清，遠離漢他病毒',
      '漢他病毒每年有幾例？病例數、傳染途徑與防鼠重點'
    ],
    card_title_alts:[
      ['家裡出現老鼠屎？','防漢他病毒 先消毒再清'],
      ['防鼠三不','不讓鼠來、住、吃'],
      ['不要用掃把乾掃','清理鼠跡 4 步驟']
    ],
    data_addon:[
      '漢他病毒症候群全年確定病例：2024年3例、2025年3例（疾管署）。',
      '自2016年起累計46例，男性占63%，40歲以上占67%（疾管署2025年3月）。',
      '鼠類常出沒處：防火巷、下水道、水溝蓋、雜物堆、牆垣。'
    ],
    cta:'這個週末檢查一次廚房與陽台：食物封好、縫隙補好、雜物清掉。'
  });
})();
