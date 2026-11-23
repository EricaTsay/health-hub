/* v6 示範主題：全身性紅斑狼瘡（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-20。數據來源：健保署「重大傷病各疾病別有效領證統計表」115年9月（資料日期115/10/1；同一網址每月更新）、
   TVBS新聞網 2026-08-17（北榮過敏免疫風濕科主任受訪：性別比、早期症狀）、台灣英文新聞 2026-02-11（狼瘡腎炎新藥核准、併發腎炎比例）。
   參考方向：健康智庫〈全身性紅斑狼瘡〉2022/07。 */
(function(){
  const NHI = 'https://www.nhi.gov.tw/ch/dl-17701-bd02ea37ebc946f4af6246b85b085013-1.pdf';
  const REFS = [
    {title:'全民健康保險重大傷病各疾病別有效領證統計表',source:'衛生福利部中央健康保險署',url:NHI},
    {title:'女性罹紅斑性狼瘡是男性7倍！醫師：出現「這5大症狀」別只當過敏',source:'TVBS新聞網',url:'https://news.tvbs.com.tw/health/4008467'},
    {title:'狼瘡腎炎治療新里程碑！新標靶生物製劑獲核准 類固醇減量露曙光',source:'台灣英文新聞',url:'https://www.taiwannews.com.tw/zh/news/6300818'}
  ];
  const TABLE = {headers:['可能的表現','說明'], rows:[
    ['疲倦、發燒','長期不明原因疲倦、無力或反覆微燒'],
    ['皮膚與黏膜','日曬後臉部紅斑、口腔破洞、掉髮'],
    ['關節','關節腫脹、疼痛，常被誤以為一般痠痛'],
    ['腎臟','泡泡尿、下肢水腫；部分病人以腎臟侵犯為首發表現']
  ]};
  const TAGS = ['紅斑性狼瘡','SLE','自體免疫疾病','狼瘡腎炎','重大傷病'];

  const DP_RATIO = {id:'dp-sle-ratio', type:'data_version', title:'女性與男性的比例有兩種說法',
    desc:'北榮過敏免疫風濕科主任2026年8月受訪說台灣資料庫的女男比約7比1；台灣英文新聞2026年2月的報導寫女性發病率為男性的9倍，未註明出處。兩者來源不同，AI 沒有替你決定要用哪一個。',
    current:'女性約為男性的7倍（北榮醫師引述台灣資料庫）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約7比1', value:'北榮醫師引述台灣資料庫', note:'TVBS 2026年8月（目前採用）'},
      {label:'約9倍', value:'報導敘述，未註明出處', note:'台灣英文新聞 2026年2月'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'全身性紅斑狼瘡：不只是臉上紅斑，留意腎臟與全身警訊',
    update_date:'2026/11/20',
    intro:'全身性紅斑狼瘡（SLE）是免疫系統攻擊自身組織的慢性疾病，可能侵犯皮膚、關節、腎臟、血液與神經等多個器官。依健保署重大傷病統計，截至115年9月領有全身性紅斑性狼瘡重大傷病證明者有2萬6,115人。北榮過敏免疫風濕科主任2026年受訪指出，台灣資料庫中女性與男性的比例約為7比1，好發於年輕女性。',
    sections:[
      {heading:'常見的4類表現',format:'table',table:TABLE},
      {heading:'為什麼要及早診斷與持續追蹤',format:'bullets',items:[
        '早期症狀多變，常被當成過敏、感冒或疲勞而延誤；長期疲倦合併怕曬、紅斑、口破或關節痛時，應就醫檢查。',
        '據報導引述統計，5至6成病友一生中會併發狼瘡腎炎，腎功能受損後不易恢復，定期驗尿、驗血很重要。',
        '2026年衛福部已核准新的狼瘡腎炎適應症標靶生物製劑，治療選項持續增加，用藥需由風濕免疫科醫師評估。'
      ]},
      {heading:'日常照顧重點',format:'bullets',items:[
        '避免長時間日曬，選擇廣譜防曬並搭配帽子、防曬衣等物理防曬。',
        '依醫囑規律服藥與回診，不要自行增減或停用類固醇等藥物。',
        '戒菸、規律作息、管理壓力；計畫懷孕前先與醫師討論病情與用藥。'
      ]}
    ],
    think_tank_view:'紅斑性狼瘡最棘手的是「症狀多變、不易被聯想」。對年輕女性來說，長期疲倦、怕曬、臉上紅斑、關節痛同時出現時，值得到風濕免疫科做一次檢查；確診後的關鍵則是規律追蹤腎臟功能，把病情穩定在可控制的範圍。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'重大傷病人數引自健保署統計並標明時點，性別比與併發症比例標明為醫師受訪或報導引述，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['沿用步驟1洞察：全身性紅斑性狼瘡重大傷病證明2萬6,115人（健保署115年9月）','性別比取自TVBS 2026年8月北榮醫師受訪'],
      layout_reason:'先用表格整理4類表現，再說明為何要及早診斷與追蹤腎臟，最後給日常照顧重點。',
      tone:'專業易懂', tone_reason:'症狀多變，需要清楚整理以利讀者對照。',
      to_verify:['「5至6成併發狼瘡腎炎」為報導引述統計，原始研究待查','性別比7比1與9倍兩種說法']},
    decision_points:[DP_RATIO]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'怕曬、臉上長紅斑又一直很累？認識紅斑性狼瘡',
    update_date:'2026/11/20',
    intro:'紅斑性狼瘡是身體的免疫系統「打錯對象」，攻擊自己的皮膚、關節、腎臟等器官。健保署統計，到115年9月有2萬6,115人領有紅斑性狼瘡的重大傷病證明，北榮醫師說女性約是男性的7倍，而且多半是年輕女性。它的症狀很會「偽裝」，認得警訊就能早點找到答案。',
    sections:[
      {heading:'這些表現要多留意',format:'table',table:TABLE},
      {heading:'為什麼要早點檢查？',format:'bullets',items:[
        '一開始常被當成過敏或太累；如果一直很疲倦，又怕曬、長紅斑、嘴破或關節痛，就該去檢查。',
        '報導引述統計，5至6成病友一生中會出現狼瘡腎炎，所以要定期驗尿、驗血，顧好腎臟。',
        '2026年有新的狼瘡腎炎標靶藥物通過核准，治療選擇變多了，用藥請和醫師討論。'
      ]},
      {heading:'平常這樣照顧自己',format:'bullets',items:[
        '出門做好防曬，帽子、防曬衣一起用。',
        '照醫師的指示吃藥、回診，類固醇不要自己停。',
        '不抽菸、睡飽一點、找方法紓壓；想懷孕先跟醫師討論。'
      ]}
    ],
    think_tank_view:'紅斑性狼瘡常讓人跑了好幾科才確診。如果身邊年輕的女兒、姊妹一直說很累、怕曬、臉上發紅，陪她去風濕免疫科看看，可能就少走很多冤枉路。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'人數引自健保署統計並標明時點，比例標明為醫師受訪或報導引述，語氣親切但未淡化追蹤必要，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以生活中的不適帶出警訊、檢查理由與日常照顧。', tone:'生活親切', tone_reason:'給年輕女性與家人閱讀。', to_verify:['「5至6成併發狼瘡腎炎」原始研究待查']},
    decision_points:[DP_RATIO]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'紅斑性狼瘡：4類警訊＋照顧3重點',
    update_date:'2026/11/20',
    intro:'依健保署統計，截至115年9月領有全身性紅斑性狼瘡重大傷病證明者2萬6,115人，好發於年輕女性。症狀多變，及早診斷、追蹤腎臟是關鍵。',
    sections:[
      {heading:'4類警訊',format:'table',table:TABLE},
      {heading:'追蹤重點',format:'bullets',items:[
        '定期驗尿、驗血，留意狼瘡腎炎。',
        '用藥由風濕免疫科醫師評估。'
      ]},
      {heading:'日常照顧',format:'bullets',items:[
        '做好防曬。',
        '規律服藥，勿自行停用類固醇。',
        '戒菸、規律作息；懷孕前與醫師討論。'
      ]}
    ],
    think_tank_view:'紅斑性狼瘡症狀多變；長期疲倦合併怕曬、紅斑、關節痛時應及早就醫，確診後定期追蹤腎臟功能。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'人數引自健保署統計並標明時點，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊、追蹤、日常三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['健保署統計表月份']},
    decision_points:[DP_RATIO]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'全身性紅斑狼瘡', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'紅斑性狼瘡症狀多變，容易被誤認', primary_visual:'約 2.6 萬人', secondary_message:'女性約為男性 7 倍', action_priority:'及早就醫、追蹤腎臟、做好防曬'},
    headline_hook:'不只是過敏或太累', headline_main:'紅斑性狼瘡 4 類警訊', title_accent:'4 類警訊',
    hero_message:'女性約為男性 7 倍', hero_support:'好發於年輕女性（北榮醫師引述台灣資料庫）',
    knowledge_title:'4 類常見表現', knowledge_note:'多項同時出現，**到風濕免疫科檢查**',
    knowledge_cards:[
      {label:'疲倦發燒', icon:'check', lines:['長期疲倦、反覆微燒']},
      {label:'皮膚黏膜', icon:'leaf', lines:['日曬後臉部紅斑','口破、掉髮']},
      {label:'關節', icon:'check', lines:['關節腫脹、疼痛']},
      {label:'腎臟', icon:'flask', lines:['泡泡尿、下肢水腫']}
    ],
    primary_stat:{value:'約 2.6 萬人', label:'紅斑性狼瘡重大傷病證明', note:'健保署統計：2萬6,115人（115 年 9 月）'},
    secondary_stats:[
      {value:'5–6 成', label:'一生中併發狼瘡腎炎'},
      {value:'約 7 倍', label:'女性患者約為男性'}
    ],
    action_title:'確診後這樣做',
    action_cards:[
      {key:'追', text:'定期驗尿、驗血，追蹤腎功能'},
      {key:'藥', text:'規律服藥，勿自行停用類固醇'},
      {key:'曬', text:'廣譜防曬加帽子、防曬衣'},
      {key:'孕', text:'計畫懷孕前先與醫師討論'}
    ],
    carousel_suggestion:{reason:'若想把警訊、腎臟追蹤與日常照顧分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'不只是過敏', headline_main:'紅斑性狼瘡 4 類警訊'},
      {layout_type:'data', headline_hook:'顧好腎臟', headline_main:'5–6 成會併發狼瘡腎炎'},
      {layout_type:'action', headline_hook:'日常照顧', headline_main:'防曬、規律用藥、追蹤'}]},
    hashtags:['紅斑性狼瘡','自體免疫疾病','狼瘡腎炎','防曬'],
    sources:['衛生福利部中央健康保險署','醫師受訪（TVBS、台灣英文新聞）'],
    illustration_category:'screening-checkup',
    illustration:{topic:'紅斑性狼瘡', audience:'年輕女性與家人', scene:'一位年輕女性戴著寬帽走在陽光下，手上拿著回診的驗尿檢查單',
      emotion:'安心、有掌握感', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young woman wearing a wide-brimmed hat walking in the sunshine, holding a clinic lab test form, reassured mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：重大傷病證明2萬6,115人（健保署115年9月）','性別比取自北榮醫師2026年受訪'],
      layout_reason:'症狀多變是溝通重點，選 knowledge：4 類表現放中段當主角，人數與腎炎比例退到下方，最後給 4 個照顧行動。',
      tone:'專業易懂', tone_reason:'幫助讀者把分散的症狀串起來。',
      to_verify:['5–6 成併發腎炎為報導引述統計']},
    decision_points:[Object.assign({}, DP_RATIO, {current:'女性約為男性 7 倍（北榮醫師引述台灣資料庫）'})],
    content_check_note:'人數引自健保署統計並標明時點，比例標明為醫師或報導引述，未使用療效保證用語，未涉及具體藥品或商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'全身性紅斑狼瘡',
    collect:{
      summary:'全身性紅斑狼瘡屬健保重大傷病，好發於年輕女性，症狀多變常延誤診斷；2026年狼瘡腎炎新標靶藥物取得核准，「及早辨識、追蹤腎臟、規律治療」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約2.6萬人領有重大傷病證明：依健保署重大傷病統計，截至115年9月領有全身性紅斑性狼瘡重大傷病證明者2萬6,115人（未申請證明的病人不在其中）。',tag:'官方統計',source:{name:'衛生福利部中央健康保險署：全民健康保險重大傷病各疾病別有效領證統計表（115年9月）',url:NHI}},
        {item:'年度趨勢方向',desc:'5成以上病友一生中會併發狼瘡腎炎：台灣英文新聞2026年2月報導引述統計為5至6成，狼瘡腎炎是影響預後的重要併發症，腎臟受損後不易恢復（報導未註明原始研究）。',tag:'市場觀察',source:{name:'台灣英文新聞：狼瘡腎炎治療新里程碑！新標靶生物製劑獲核准',url:'https://www.taiwannews.com.tw/zh/news/6300818'}},
        {item:'政策動向',desc:'2026年狼瘡腎炎新增標靶生物製劑適應症：報導指出衛福部已核准新的標靶生物製劑用於活動性狼瘡腎炎，醫師期待有助減少類固醇用量。',tag:'市場觀察',source:{name:'台灣英文新聞：狼瘡腎炎治療新里程碑！新標靶生物製劑獲核准',url:'https://www.taiwannews.com.tw/zh/news/6300818'}},
        {item:'好發族群年齡層',desc:'女性約為男性的7倍：北榮過敏免疫風濕科主任2026年8月受訪指出，台灣資料庫中女男比約7比1，好發於年輕女性。',tag:'市場觀察',source:{name:'TVBS新聞網：女性罹紅斑性狼瘡是男性7倍！',url:'https://news.tvbs.com.tw/health/4008467'}}
      ],
      product_view:['機會：紅斑性狼瘡屬健保重大傷病，可能併發腎臟病變，適合說明長期醫療與腎臟疾病相關保障。','機會：好發於年輕女性，可結合女性保障與孕前健康規劃的溝通。','風險：避免暗示特定藥物療效；自體免疫疾病的核保與理賠須依條款如實說明。'],
      marketing_view:['機會：每年5月10日世界狼瘡日是固定溝通檔期，夏季防曬也是自然切點。','機會：「不只是過敏或太累」的症狀辨識內容，適合年輕女性社群。','風險：避免以「不治之症」等恐懼字眼描述；新藥資訊只做中立整理，不推薦特定藥品。'],
      alert_level:'low',
      alert_reason:'屬長期慢性疾病議題；適合在世界狼瘡日（5月10日）與夏季防曬期間溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('5至6成病友一生中會併發狼瘡腎炎','SOURCE_EVIDENCE','secondary_citation',
          '文中只寫「據報導引述統計」，沒有說明是哪一份研究、哪個國家或族群的資料，讀者無法判斷適用性。','medium','yes',
          '國內狼瘡腎炎盛行比例的研究或醫學會資料。','no','confirm','數字與國際文獻範圍相近，但出處不明。',
          '5至6成病友一生中會併發狼瘡腎炎（國際文獻常見範圍，國內比例待確認）',
          ['5至6成病友一生中會出現狼瘡腎炎']),
        F('領有全身性紅斑性狼瘡重大傷病證明者有2萬6,115人','MEDICAL_INTERPRETATION','certificate_holders_not_prevalence',
          '這是領有重大傷病證明的人數，未申請證明的病人不在其中，讀者可能當成全國患者總數。','low','no',
          null,'no','clarify','數字正確，屬統計口徑說明。',
          '領有全身性紅斑性狼瘡重大傷病證明者有2萬6,115人（未申請證明的病人不在其中）',
          ['有2萬6,115人領有紅斑性狼瘡的重大傷病證明','領有全身性紅斑性狼瘡重大傷病證明者2萬6,115人']),
        F('治療選項持續增加','MEDICAL_INTERPRETATION','benefit_overstated',
          '新藥核准的是狼瘡腎炎適應症，不代表所有紅斑性狼瘡病人都適用；也未說明健保是否給付。','low','no',
          null,'no','clarify','屬適用範圍說明。',
          '狼瘡腎炎的治療選項增加，是否適用與健保給付需由醫師評估',
          ['治療選擇變多了']),
        F('計畫懷孕前先與醫師討論病情與用藥','MEDICAL_INTERPRETATION','missing_rationale',
          '只寫要討論，沒說明原因（病情活動度與部分藥物會影響懷孕），讀者可能不重視。','low','no',
          null,'no','clarify','補一句理由即可。',
          '計畫懷孕前先與醫師討論病情與用藥（病情穩定期懷孕較安全，部分藥物需提前調整）',
          ['想懷孕先跟醫師討論','懷孕前與醫師討論'])
      ],
      card:[
        F('一生中併發狼瘡腎炎','SOURCE_EVIDENCE','secondary_citation',
          '卡面次數字「5–6 成」沒有出處，屬報導引述的統計，讀者無法查證。','medium','yes',
          '國內狼瘡腎炎比例的原始研究。','no','confirm','出處不明。',
          '一生中併發狼瘡腎炎（報導引述）'),
        F('好發於年輕女性（北榮醫師引述台灣資料庫）','SOURCE_EVIDENCE','single_expert_source',
          '性別比只引用單一醫師受訪說法，另有報導寫「9倍」，卡面未提醒數字有不同版本。','low','no',
          null,'no','clarify','兩種說法都指向女性明顯較多。',
          '好發於年輕女性（醫師受訪，另有 9 倍之說）')
      ]
    },
    title_alts:[
      '全身性紅斑狼瘡：不只是臉上紅斑，留意腎臟與全身警訊',
      '怕曬、臉上長紅斑又一直很累？認識紅斑性狼瘡',
      '女性約為男性7倍：紅斑性狼瘡4類警訊與照顧重點'
    ],
    card_title_alts:[
      ['不只是過敏或太累','紅斑性狼瘡 4 類警訊'],
      ['怕曬又一直很累？','認識紅斑性狼瘡'],
      ['顧好腎臟','紅斑性狼瘡照顧重點']
    ],
    data_addon:[
      '健保署重大傷病統計（115年9月）：全身性紅斑性狼瘡重大傷病證明2萬6,115人。',
      '北榮醫師2026年受訪：早期表現多樣，可能從微燒、關節腫痛、口破、掉髮開始，也有人先出現腎臟侵犯。',
      '2026年衛福部核准新的標靶生物製劑用於活動性狼瘡腎炎（台灣英文新聞報導）。'
    ],
    cta:'如果長期疲倦又怕曬、臉上紅斑或關節痛反覆出現，這個月就到風濕免疫科做一次檢查，並記得驗尿。'
  });
})();
