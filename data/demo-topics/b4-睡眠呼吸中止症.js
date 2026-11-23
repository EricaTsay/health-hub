/* v6 示範主題：睡眠呼吸中止症（B4 消化・肝膽・呼吸）
   查證日期：2026-11-20。數據來源：衛福部（國家衛生研究院）〈失眠、打鼾、嗜睡？ 睡眠呼吸中止症病因 年齡大不同〉（113/02/19）、
   衛福部（食藥署）〈正確選購合法呼吸器，讓你睡得好、沒煩惱〉（115/03/04）。
   註：15%、60歲以上男70%女56%等比例，原文只寫「據統計」未列來源，屬二手引述。
   參考方向：健康智庫〈睡眠呼吸中止症〉2023/09、〈智慧新時代：讀懂睡眠呼吸中止症〉2026/05。 */
(function(){
  const REFS = [
    {title:'失眠、打鼾、嗜睡？ 睡眠呼吸中止症病因 年齡大不同',source:'國家衛生研究院（衛生福利部網站）',url:'https://www.mohw.gov.tw/cp-16-77716-1.html'},
    {title:'正確選購合法呼吸器，讓你睡得好、沒煩惱',source:'衛生福利部食品藥物管理署',url:'https://www.mohw.gov.tw/cp-2704-85701-1.html'}
  ];
  const TABLE = {headers:['治療方式','說明'], rows:[
    ['正壓呼吸器','最常見且有效，睡覺時佩戴，以穩定氣壓撐開呼吸道'],
    ['上呼吸道手術','依阻塞部位評估是否適合'],
    ['藥物治療','部分呼吸模式不穩定者，可由醫師評估使用'],
    ['生活調整','控制體重、側睡、睡前避免飲酒與鎮靜藥物（依醫師建議）']
  ]};
  const TAGS = ['睡眠呼吸中止症','打鼾','正壓呼吸器','睡眠健康','心血管風險'];

  const DP_PREV = {id:'dp-osa-prev', type:'data_scope', title:'盛行率未列原始來源',
    desc:'「一般成人約15%」「60歲以上男性70%、女性56%」出自國衛院在衛福部網站的文章，原文只寫「據統計」，未列調查來源、年份與診斷標準。AI 保留數字並標明為引述。',
    current:'一般成人約15%有睡眠呼吸中止症（國衛院文章引述）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'改成不寫比例', action:'replace', from:'國家衛生研究院在衛生福利部網站的文章引述，一般成人約有15%有睡眠呼吸中止症，60歲以上男性約70%、女性約56%。', to:''}]};

  const PRO = {
    content_type:'健康文章',
    title:'打鼾、白天嗜睡別輕忽：睡眠呼吸中止症的警訊與治療選擇',
    update_date:'2026/11/20',
    intro:'睡眠呼吸中止症是睡覺時呼吸道受阻塞，造成呼吸氣流減少、中止與血氧下降。國家衛生研究院在衛生福利部網站的文章引述，一般成人約有15%有睡眠呼吸中止症，60歲以上男性約70%、女性約56%。它會提高心血管與腦血管疾病風險，也與認知功能退化、白天精神不濟導致的意外有關。高齡者常以失眠表現、甚至沒有明顯症狀，容易被忽略。',
    sections:[
      {heading:'這些警訊要留意',format:'bullets',items:[
        '打鼾很大聲，家人發現睡覺時會突然停止呼吸、喘醒。',
        '白天嗜睡、注意力不集中，開車或開會時容易打瞌睡。',
        '長者可能沒有明顯打鼾或嗜睡，只表現為失眠。',
        '診斷需到睡眠中心做整夜睡眠檢查，平均每小時呼吸中止5次以上即為睡眠呼吸中止症。'
      ]},
      {heading:'常見治療方式',format:'table',table:TABLE},
      {heading:'購買正壓呼吸器的提醒',format:'bullets',items:[
        '正壓呼吸器屬第二等級醫療器材，食藥署提醒「一認、二看、三會用」。',
        '購買時看外盒是否有醫療器材許可字號，可至食藥署醫療器材許可證資料庫查詢。',
        '使用前詳閱說明書；若發生不良反應，可通報食藥署上市後品質管理系統。'
      ]}
    ],
    think_tank_view:'打鼾常被當成「睡得很熟」，但若伴隨呼吸暫停和白天嗜睡，就是值得檢查的訊號。國衛院研究也提醒，睡眠呼吸中止的成因因人而異，治療不只有呼吸器一種選擇。先做睡眠檢查找出類型，再和醫師討論最適合的方式，才能提高持續治療的意願。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'比例標明為國衛院文章引述，購買建議引自食藥署115年衛教，未使用療效保證用語，未推薦特定廠牌呼吸器。',
    ai_rationale:{basis:['15%、男70%女56%、每小時5次以上取自國衛院113/02/19文章','醫材安心三步驟取自食藥署115/03/04衛教'],
      layout_reason:'先列警訊與診斷方式，再以表格整理治療，最後提醒選購合法呼吸器。',
      tone:'專業易懂', tone_reason:'需讓讀者正視打鼾背後的風險。',
      to_verify:['15%、70%、56%原文未列來源與年份']},
    decision_points:[DP_PREV]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'鼾聲如雷還會「停一下」？小心睡眠呼吸中止症',
    update_date:'2026/11/20',
    intro:'家人打鼾打到一半突然安靜、接著大喘一口氣，白天又一直打瞌睡？這可能是睡眠呼吸中止症。國衛院的文章提到，60歲以上的男性約7成、女性約5成多有這個問題。它不只影響睡眠，還和心臟、腦血管疾病有關。',
    sections:[
      {heading:'這些狀況要注意',format:'bullets',items:[
        '打鼾很大聲，睡到一半像停止呼吸。',
        '白天很想睡，開車、開會都會打瞌睡。',
        '長輩可能不打鼾，只是一直睡不好。'
      ]},
      {heading:'怎麼治療？',format:'table',table:TABLE},
      {heading:'買呼吸器要小心',format:'bullets',items:[
        '呼吸器是醫療器材，外盒要有醫療器材許可字號。',
        '先看說明書再用，有問題問醫師或廠商。'
      ]}
    ],
    think_tank_view:'如果枕邊人說你睡覺會「停一下」，別笑笑就算了，去睡眠中心檢查一次，可能會改變你白天的精神和長期健康。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'比例標明為國衛院文章引述，未使用療效保證用語，未推薦特定廠牌呼吸器。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'從枕邊人的觀察切入。', tone:'生活親切', tone_reason:'給一般民眾與家人閱讀。', to_verify:['比例來源未列']},
    decision_points:[Object.assign({}, DP_PREV, {current:'60歲以上男性約7成、女性約5成多（國衛院文章引述）', options:[{label:'沿用目前資料', action:'keep'}]})]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'睡眠呼吸中止症：警訊與治療',
    update_date:'2026/11/20',
    intro:'國衛院文章引述：一般成人約15%有睡眠呼吸中止症。打鼾、睡眠中呼吸暫停、白天嗜睡要檢查。',
    sections:[
      {heading:'警訊',format:'bullets',items:[
        '大聲打鼾、呼吸暫停、白天嗜睡。'
      ]},
      {heading:'治療',format:'table',table:TABLE},
      {heading:'選購',format:'bullets',items:[
        '呼吸器認明醫療器材許可字號。'
      ]}
    ],
    think_tank_view:'先做睡眠檢查找出類型，再選擇適合的治療。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'比例標明為國衛院文章引述，未使用療效保證用語，未推薦特定廠牌呼吸器。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為警訊、治療、選購三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['比例來源未列']},
    decision_points:[Object.assign({}, DP_PREV, {options:[{label:'沿用目前資料', action:'keep'}]})]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'睡眠呼吸中止症', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'打鼾加呼吸暫停要檢查', primary_visual:'4 個警訊', secondary_message:'與心血管、腦血管疾病相關', action_priority:'做睡眠檢查'},
    headline_hook:'鼾聲如雷還會停？', headline_main:'睡眠呼吸中止 4 個警訊', title_accent:'4 個警訊',
    hero_message:'一般成人約 15%', hero_support:'有睡眠呼吸中止症（國衛院文章引述）',
    knowledge_title:'警訊', knowledge_note:'出現警訊，到**睡眠中心**做整夜檢查',
    knowledge_cards:[
      {label:'大聲打鼾', lines:['鼾聲大、不規律']},
      {label:'呼吸暫停', lines:['睡到一半停止','再大喘一口氣']},
      {label:'白天嗜睡', lines:['開車開會打瞌睡']},
      {label:'長者失眠', lines:['可能不打鼾','只是一直睡不好']}
    ],
    primary_stat:{value:'約 15%', label:'一般成人睡眠呼吸中止', note:'國衛院文章引述｜60 歲以上男 70%、女 56%'},
    action_title:'這樣處理',
    action_cards:[
      {key:'檢', text:'到睡眠中心做整夜睡眠檢查'},
      {key:'治', text:'依類型選擇呼吸器、手術或藥物'},
      {key:'控', text:'控制體重，睡前避免飲酒'},
      {key:'認', text:'呼吸器認明醫療器材許可字號'}
    ],
    carousel_suggestion:{reason:'若想把警訊、治療方式與選購呼吸器分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'鼾聲如雷還會停？', headline_main:'4 個警訊'},
      {layout_type:'knowledge', headline_hook:'治療方式', headline_main:'呼吸器、手術、藥物'},
      {layout_type:'action', headline_hook:'選購呼吸器', headline_main:'一認、二看、三會用'}]},
    hashtags:['睡眠呼吸中止症','打鼾','正壓呼吸器','睡眠健康'],
    sources:['國家衛生研究院','衛生福利部食品藥物管理署'],
    illustration_category:'sleep',
    illustration:{topic:'睡眠呼吸中止症', audience:'中壯年與家人', scene:'夜晚床邊，伴侶被打鼾聲吵醒，看著熟睡的另一半',
      emotion:'關心、留意', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'At night, a partner wakes up and looks with concern at their snoring spouse in bed, caring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['15%、男70%女56%取自國衛院文章（據統計，未列來源）','選購建議取自食藥署'],
      layout_reason:'核心是「認得警訊、去做檢查」，選 knowledge：4 個警訊當主角，比例退到下方，最後給處理行動。',
      tone:'專業易懂', tone_reason:'引導就醫檢查。',
      to_verify:['比例未列原始來源']},
    decision_points:[Object.assign({}, DP_PREV, {current:'約 15%｜一般成人睡眠呼吸中止（國衛院文章引述）', options:[{label:'沿用目前資料', action:'keep'}]})],
    content_check_note:'比例標明為國衛院文章引述，未使用療效保證用語，未推薦特定廠牌呼吸器。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'睡眠呼吸中止症',
    collect:{
      summary:'睡眠呼吸中止症與心血管、腦血管疾病及認知退化相關，國衛院文章引述一般成人約15%、60歲以上男性約70%、女性約56%有此問題；長者常以失眠表現而被忽略，睡眠檢查與合法正壓呼吸器是溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約15%：國家衛生研究院在衛福部網站的文章引述，一般成人約有15%有睡眠呼吸中止症（原文未列統計來源）。',tag:'官方統計',source:{name:'衛福部（國衛院）：睡眠呼吸中止症病因 年齡大不同',url:'https://www.mohw.gov.tw/cp-16-77716-1.html'}},
        {item:'好發族群年齡層',desc:'70%：同一文章引述，60歲以上男性約70%、女性約56%有睡眠呼吸中止症，高齡者常以失眠或無症狀表現。',tag:'官方統計',source:{name:'衛福部（國衛院）：睡眠呼吸中止症病因 年齡大不同',url:'https://www.mohw.gov.tw/cp-16-77716-1.html'}},
        {item:'年度趨勢方向',desc:'每小時5次以上：診斷需至睡眠中心做整夜睡眠檢查，平均睡眠呼吸中止指數每小時5次以上即為睡眠呼吸中止症。',tag:'官方統計',source:{name:'衛福部（國衛院）：睡眠呼吸中止症病因 年齡大不同',url:'https://www.mohw.gov.tw/cp-16-77716-1.html'}},
        {item:'政策動向',desc:'第二等級醫療器材：食藥署115年提醒，正壓呼吸器屬第二等級醫療器材，選購時依「一認、二看、三會用」，認明醫療器材許可字號。',tag:'官方統計',source:{name:'食藥署：正確選購合法呼吸器',url:'https://www.mohw.gov.tw/cp-2704-85701-1.html'}}
      ],
      product_view:['機會：睡眠呼吸中止與心血管疾病相關，可作為熟齡保戶健康管理提醒。','機會：睡眠健康內容關注度高，適合結合健檢主題。','風險：避免推薦特定廠牌呼吸器或止鼾產品。'],
      marketing_view:['機會：世界睡眠日（每年3月）是固定溝通檔期。','機會：「枕邊人觀察」的情境容易引發共鳴與轉傳。','風險：比例來源未列，傳播時避免強調數字。'],
      alert_level:'low',
      alert_reason:'屬長期睡眠健康議題，無急迫時效事件；適合在世界睡眠日前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('一般成人約有15%有睡眠呼吸中止症，60歲以上男性約70%、女性約56%','SOURCE_EVIDENCE','secondary_citation',
          '原文只寫「據統計」，未列調查來源、年份與診斷切點，比例偏高可能採用寬鬆標準（每小時5次以上），讀者無法判斷代表性。','medium','yes',
          '15%、70%、56%的原始研究、年份與診斷標準。','yes','confirm','國衛院文章未列來源。',
          '一般成人約有15%有睡眠呼吸中止症，60歲以上男性約70%、女性約56%（國衛院文章引述，原始研究與診斷標準待確認）',
          ['60歲以上的男性約7成、女性約5成多有這個問題']),
        F('睡前避免飲酒與鎮靜藥物（依醫師建議）','MEDICAL_INTERPRETATION','unsourced_claim',
          '生活調整建議未在引用來源中出現，缺乏出處。','low','no',
          null,'no','clarify','屬出處補充。',
          '睡前避免飲酒；鎮靜藥物使用請與醫師討論'),
        F('可能會改變你白天的精神和長期健康','MEDICAL_INTERPRETATION','outcome_generalization',
          '暗示檢查本身就能改善健康，屬過度表述。','low','no',
          null,'no','clarify','屬語氣調整。',
          '及早找出問題，才能討論適合的治療'),
        F('依阻塞部位評估是否適合','MEDICAL_INTERPRETATION','incomplete_info',
          '手術選項未說明需經專科醫師評估與可能的風險。','low','no',
          null,'no','clarify','屬資訊完整性。',
          '依阻塞部位由專科醫師評估是否適合，並說明風險')
      ],
      card:[
        F('一般成人睡眠呼吸中止','SOURCE_EVIDENCE','secondary_citation',
          '主數字原文未列來源，卡面 label 未標示為引述。','low','no',
          null,'no','clarify','note 已註明引述。',
          '一般成人睡眠呼吸中止（引述）'),
        F('控制體重，睡前避免飲酒','SOURCE_EVIDENCE','unsourced_claim',
          '建議未在卡面 sources 中有依據。','low','no',
          null,'no','clarify','屬出處補充。',
          '控制體重，睡前避免飲酒（依醫師建議）')
      ]
    },
    title_alts:[
      '打鼾、白天嗜睡別輕忽：睡眠呼吸中止症的警訊與治療選擇',
      '鼾聲如雷還會「停一下」？小心睡眠呼吸中止症',
      '60歲以上男性約7成有睡眠呼吸中止：認識警訊與合法呼吸器'
    ],
    card_title_alts:[
      ['鼾聲如雷還會停？','睡眠呼吸中止 4 個警訊'],
      ['打鼾不是睡得好','可能是呼吸中止'],
      ['選購呼吸器','一認、二看、三會用']
    ],
    data_addon:[
      '國衛院研究團隊的相關論文分別於2023年6月與2024年1月發表。',
      '醫療器材不良事件通報專線02-2396-0100。',
      '國衛院指出各國研究顯示65歲以上長者約有一半有睡眠困擾。'
    ],
    cta:'如果家人說你睡覺會打鼾又停止呼吸，或白天常打瞌睡，這個月就到醫院睡眠中心預約一次整夜睡眠檢查。'
  });
})();
