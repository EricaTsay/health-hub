/* v6 示範主題：復健治療（物理、職能、語言治療）（B12 第三輪擴充）
   查證日期：2026-11-23。數據來源：衛福部（健保署）115-08-14新聞稿〈長照3.0新亮點：健保署復健病房啟航〉（3億元、首波10家醫院、每年約1,600人、每年新增中風病人3–5萬人、黃金復健期3個月拉長到6個月、跨專業團隊含PT/OT/ST）、
   衛福部（健保署）106-06-27新聞稿〈擴大急性後期照護對象〉（PAC六類對象、105年收案逾4,000人、87.6%功能進步、巴氏量表39.1→63.4分——舊年份，未見新的全國統計）、
   衛福部114年死因統計（腦血管疾病死亡12,425人）。
   參考方向：健康智庫〈醫事人員大集合－物理治療師、職能治療師〉〈語言治療師、聽力師〉2023/05、〈復健電療用錯有風險〉2023/10。 */
(function(){
  const REFS = [
    {title:'長照3.0新亮點：賴總統出席健保署復健病房啟航記者會',source:'衛生福利部中央健康保險署',url:'https://mohw.gov.tw/cp-2704-87457-1.html'},
    {title:'擴大急性後期照護對象，建立社區化整合照護模式',source:'衛生福利部中央健康保險署',url:'https://mohw.gov.tw/cp-16-36563-1.html'},
    {title:'黃金治療期給予高強度復健，免於失能－急性後期整合照護計畫經驗分享',source:'衛生福利部中央健康保險署',url:'https://mohw.gov.tw/cp-16-63657-1.html'},
    {title:'114年死因統計',source:'衛生福利部',url:'https://www.mohw.gov.tw/lp-4964-113.html'}
  ];
  const TABLE = {headers:['復健專業','處理重點','常見對象'], rows:[
    ['物理治療（PT）','肌力、關節活動、平衡與行走等身體動作功能','中風、骨折與關節置換術後、下背痛'],
    ['職能治療（OT）','進食、穿衣、盥洗等日常生活自理與輔具建議','中風、失智、手部外傷、發展遲緩兒'],
    ['語言治療（ST）','說話、理解溝通與吞嚥功能','中風後失語或吞嚥困難、頭頸癌術後']
  ]};
  const TAGS = ['復健','物理治療','職能治療','語言治療','失能預防'];

  const DP_PAC = {id:'dp-rehab-pac', type:'data_version', title:'急性後期照護成效只有舊年份全國數字',
    desc:'PAC功能進步87.6%是健保署106年新聞稿引用105年的資料，之後未查到更新的全國統計；115年新上路的復健病房試辦計畫尚無成效數據。AI 沒有替你挑選，請決定是否引用。',
    current:'87.6%整體功能有進步',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'全國', value:'87.6%', note:'105年收案逾4,000人（目前採用）'},
      {label:'雲嘉南區', value:'85%', note:'8年累計8,381人，區域資料（110年）'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'中風、骨折後的關鍵期：認識物理、職能、語言治療',
    update_date:'2026/11/23',
    intro:'中風、骨折或長期臥床後，能不能回到自己走路、吃飯、說話，往往取決於發病後幾個月的復健。健保署指出，國內每年新增中風病人3至5萬人，115年8月啟動「全民健康保險復健病房試辦計畫」，投入3億元、首波10家醫院，預計每年提供約1,600名具復健潛能的病人積極住院復健。',
    sections:[
      {heading:'三種復健專業各管什麼',format:'table',table:TABLE},
      {heading:'健保的復健銜接資源',format:'bullets',items:[
        '急性後期整合照護（PAC）：106年7月起適用腦中風、燒燙傷、創傷性神經損傷、脆弱性骨折、心臟衰竭及衰弱高齡病人，出院後可接續高強度復健。',
        '健保署106年新聞稿引用105年資料：PAC收案逾4,000人，87.6%整體功能有進步，巴氏量表平均由39.1分進步至63.4分。',
        '115年復健病房試辦計畫以中風病人為主，由復健科醫師、物理、職能、語言治療師等跨專業團隊照護，並將居家情境模擬納入訓練。'
      ]},
      {heading:'家屬可以怎麼做',format:'bullets',items:[
        '住院期間就詢問出院準備服務，了解是否符合PAC或復健病房收案條件。',
        '出院後持續門診或居家復健，並依治療師建議在家練習。',
        '電療等物理儀器治療由專業人員評估使用，有心臟節律器等植入式電子醫材者應先告知。'
      ]}
    ],
    think_tank_view:'復健是失能與長照之間的關鍵一段，及早、足量的復健讓病人有機會重回生活自理。對家庭而言，把握出院前的銜接安排，比事後尋找照顧資源更能減少長期負擔；失能相關保障則是復健期間收入與照顧費用的支撐。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自健保署新聞稿並標明年份，PAC成效為105年舊資料已註明；未保證復健成效，未推薦特定院所。',
    ai_rationale:{basis:['復健病房計畫內容取自健保署115-08-14新聞稿','PAC對象與成效取自健保署106年新聞稿'],
      layout_reason:'先用表格區分三種治療，再介紹健保銜接資源，最後給家屬行動建議。',
      tone:'專業易懂', tone_reason:'給病人與家屬，需清楚區分專業與資源。',
      to_verify:['PAC最新全國收案與成效數字','復健病房試辦的收案條件細節']},
    decision_points:[DP_PAC]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'家人中風或骨折後，復健怎麼安排？3種治療師一次認識',
    update_date:'2026/11/23',
    intro:'家人突然中風或跌倒骨折，出院後還能不能自己走路、吃飯？答案常常藏在接下來幾個月的復健裡。健保署說，台灣每年新增3到5萬名中風病人，115年8月起還開辦了「復健病房」試辦，首波10家醫院，每年可照顧約1,600人。',
    sections:[
      {heading:'物理、職能、語言治療差在哪',format:'table',table:TABLE},
      {heading:'健保有哪些復健資源',format:'bullets',items:[
        '急性後期照護（PAC）：中風、骨折、心臟衰竭等出院後，可以接著做密集復健。',
        '健保署105年的資料顯示，接受PAC的病人87.6%功能有進步。',
        '新的復健病房以中風病人為主，會練習回家後的生活情境。'
      ]},
      {heading:'家屬小提醒',format:'bullets',items:[
        '住院時就問出院準備服務，看能不能接PAC或復健病房。',
        '回家後照治療師教的動作每天練習。',
        '電療要由專業人員評估，裝心臟節律器的人要先說。'
      ]}
    ],
    think_tank_view:'復健是一場接力賽，出院不是終點。及早把復健接上，家人就更有機會回到自己的生活。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自健保署並標明年份，未保證復健成效。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以家屬角度依治療、資源、提醒排列。', tone:'生活親切', tone_reason:'給照顧者與中高齡讀者。', to_verify:['PAC最新成效數字']},
    decision_points:[DP_PAC]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'中風骨折後：復健黃金期別錯過',
    update_date:'2026/11/23',
    intro:'國內每年新增中風病人3至5萬人。健保署115年8月啟動復健病房試辦，首波10家醫院、每年約1,600人。',
    sections:[
      {heading:'三種治療',format:'table',table:TABLE},
      {heading:'健保資源',format:'bullets',items:[
        'PAC：中風、脆弱性骨折等六類出院後接續復健。',
        '復健病房：以中風病人為主的住院復健。'
      ]},
      {heading:'家屬行動',format:'bullets',items:[
        '住院時就詢問出院準備服務。',
        '出院後持續復健與居家練習。'
      ]}
    ],
    think_tank_view:'出院前就安排好復健銜接，是減少失能的關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自健保署並標明年份。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為治療、資源、行動三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:['PAC最新成效數字']},
    decision_points:[DP_PAC]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'復健治療（物理、職能、語言治療）', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'中風、骨折後把握復健黃金期', primary_visual:'每年新增 3–5 萬中風病人', secondary_message:'健保復健病房首波 10 家醫院', action_priority:'出院前安排復健銜接'},
    headline_hook:'中風、骨折出院後', headline_main:'認識 3 種復健治療', title_accent:'3 種復健治療',
    hero_message:'黃金復健期拉長到 6 個月', hero_support:'健保署 115 年復健病房試辦計畫',
    knowledge_title:'三種復健專業', knowledge_note:'住院時就問**出院準備服務**',
    knowledge_cards:[
      {label:'物理治療 PT', icon:'people', lines:['肌力、平衡','練習走路']},
      {label:'職能治療 OT', icon:'home', lines:['吃飯、穿衣','生活自理']},
      {label:'語言治療 ST', icon:'chat', lines:['說話溝通','吞嚥訓練']},
      {label:'跨專業團隊', icon:'shield', lines:['復健科醫師','護理、營養師']}
    ],
    primary_stat:{value:'3–5 萬人', label:'每年新增中風病人', note:'健保署 115 年復健病房新聞稿'},
    secondary_stats:[
      {value:'10 家', label:'復健病房首波醫院'},
      {value:'87.6%', label:'PAC 功能進步（105年）'}
    ],
    action_title:'家屬這樣做',
    action_cards:[
      {key:'問', text:'住院時詢問出院準備服務'},
      {key:'接', text:'評估是否符合急性後期照護'},
      {key:'練', text:'出院後依治療師建議居家練習'},
      {key:'告', text:'裝心臟節律器者電療前先告知'}
    ],
    carousel_suggestion:{reason:'若想把三種治療、健保資源與家屬行動分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'復健分三種', headline_main:'物理、職能、語言治療'},
      {layout_type:'data', headline_hook:'健保復健資源', headline_main:'復健病房首波 10 家'},
      {layout_type:'action', headline_hook:'出院前', headline_main:'先安排復健銜接'}]},
    hashtags:['復健','中風','骨折','失能預防'],
    sources:['衛生福利部中央健康保險署'],
    illustration_category:'elderly-care',
    illustration:{topic:'中風後復健訓練', audience:'中風或骨折後的中高齡病人與家屬', scene:'治療師在復健室扶著一位長者練習走路，家屬在旁陪伴',
      emotion:'鼓勵、希望', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A physical therapist supporting an older adult practicing walking in a rehabilitation room while a family member watches, encouraging and hopeful mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['中風新增人數與復健病房取自健保署115年新聞稿'],
      layout_reason:'核心是認識三種復健專業，選 knowledge：4 張卡區分專業與團隊。',
      tone:'專業易懂', tone_reason:'家屬需快速分辨。',
      to_verify:['PAC最新成效數字']},
    decision_points:[Object.assign({}, DP_PAC, {current:'87.6% 功能進步（105 年資料）'})],
    content_check_note:'數據引自健保署並標明年份，未保證復健成效。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'復健治療（物理、職能、語言治療）',
    collect:{
      summary:'健保署115年8月啟動復健病房試辦，將中風黃金復健期由3個月拉長到6個月，「減少失能」成為長照3.0與健保的政策焦點；復健是失能與長照之前的關鍵階段，與失能保障高度相關。',
      objective_data:[
        {item:'盛行率／發生率',desc:'逾3萬人：健保署指出國內每年新增中風病人3至5萬人，114年腦血管疾病死亡12,425人，居十大死因第4位。',tag:'官方統計',source:{name:'健保署：復健病房啟航記者會',url:'https://mohw.gov.tw/cp-2704-87457-1.html'}},
        {item:'政策動向',desc:'3億元：健保署115年挹注3億元推動復健病房試辦計畫，首波10家醫院承作，預計每年提供約1,600名具復健潛能病人積極住院復健。',tag:'官方統計',source:{name:'健保署：復健病房啟航記者會',url:'https://mohw.gov.tw/cp-2704-87457-1.html'}},
        {item:'年度趨勢方向',desc:'87.6%：健保署106年新聞稿引用105年資料，急性後期整合照護收案逾4,000人，整體功能有進步者87.6%，巴氏量表平均由39.1分進步至63.4分（舊年份，未見更新全國統計）。',tag:'官方統計',source:{name:'健保署：擴大急性後期照護對象',url:'https://mohw.gov.tw/cp-16-36563-1.html'}},
        {item:'好發族群年齡層',desc:'6類對象：急性後期整合照護自106年7月起適用腦中風、燒燙傷、創傷性神經損傷、脆弱性骨折、心臟衰竭及衰弱高齡病人。',tag:'官方統計',source:{name:'健保署：急性後期整合照護經驗分享',url:'https://mohw.gov.tw/cp-16-63657-1.html'}}
      ],
      product_view:['機會：復健期是失能險、長照險理賠前的關鍵階段，可說明失能保障與復健的關係。','機會：「出院前復健銜接清單」可作為保戶與家屬服務。','風險：不得保證復健成效或暗示保險給付特定復健療程。'],
      marketing_view:['機會：復健病房上路與長照3.0是政策溝通時點。','機會：中風、髖部骨折家屬是主要受眾，可用三種治療師對照呈現。','風險：避免以病人前後對比或個案見證作為訴求。'],
      alert_level:'medium',
      alert_reason:'健保署115年8月啟動復健病房試辦，後續擴大與成效公布可作為溝通時點。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('87.6%整體功能有進步','DATA_FACTUAL_ACCURACY','metric_definition',
          '未說明「功能進步」以什麼量表判定、追蹤多久，讀者可能誤解為多數人完全恢復。','low','no',
          null,'no','clarify','可補巴氏量表說明。',
          '87.6%整體功能有進步（以巴氏量表等評估，不代表完全恢復）',
          ['接受PAC的病人87.6%功能有進步']),
        F('及早、足量的復健讓病人有機會重回生活自理','MEDICAL_INTERPRETATION','evidence_unspecified',
          '未附任何研究或官方出處支持此敘述。','low','no',
          null,'no','clarify','可引用健保署PAC新聞稿的再住院率比較。',
          '健保署資料顯示，接受急性後期高強度復健的病人多數功能有進步'),
        F('失能相關保障則是復健期間收入與照顧費用的支撐','COMPLIANCE_LEGAL','insurance_promotion',
          '在衛教文章中直接連結保險保障，可能被視為招攬，且未說明理賠需符合條款定義。','medium','no',
          null,'no','revise','衛教內容不宜帶入商品訴求。',
          '家庭也可提早檢視照顧費用與收入中斷的因應方式'),
        F('預計每年提供約1,600名具復健潛能的病人積極住院復健','CURRENCY_TIMELINESS','pilot_status',
          '試辦計畫剛上路，1,600人是預估值，文中未標示「預估」，可能被誤讀為實際服務人數。','low','no',
          null,'no','clarify','標明為預估。',
          '預估每年可提供約1,600名具復健潛能的病人積極住院復健')
      ],
      card:[
        F('87.6%','DATA_FACTUAL_ACCURACY','old_data_label',
          '卡面數字雖標 105 年，但與 115 年新計畫並列，讀者可能誤以為是復健病房成效。','low','no',
          null,'no','clarify','可移到註解或改標示「舊制 PAC」。',
          '87.6%（舊制 PAC，105 年）'),
        F('黃金復健期拉長到 6 個月','MEDICAL_INTERPRETATION','overgeneralization',
          '卡面未說明這是復健病房計畫對中風病人的照護期，可能被理解為所有疾病的醫學定論。','low','no',
          null,'no','clarify','補適用範圍。',
          '中風復健病房照護期最長 6 個月')
      ]
    },
    title_alts:[
      '中風、骨折後的關鍵期：認識物理、職能、語言治療',
      '家人中風或骨折後，復健怎麼安排？3種治療師一次認識',
      '減少失能從復健開始：健保復健病房與急性後期照護'
    ],
    card_title_alts:[
      ['中風、骨折出院後','認識 3 種復健治療'],
      ['復健黃金期別錯過','PT、OT、ST 怎麼分'],
      ['出院不是終點','復健銜接 4 步驟']
    ],
    data_addon:[
      '健保署106年新聞稿：腦中風PAC組30日再住院率15.2%，對照組31.2%（105年資料）。',
      '健保署南區業務組：雲嘉南PAC 8年累計照顧8,381人，85%失能恢復（110年區域資料）。',
      '復健病房團隊含復健科醫師、護理師、物理治療師、職能治療師、語言治療師、營養師。'
    ],
    cta:'家人住院時，就向醫院出院準備服務詢問是否符合急性後期照護或復健病房收案條件。'
  });
})();
