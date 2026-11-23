/* v6 示範主題：熱傷害與中暑（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-20。數據來源：國健署〈不可忽視熱傷害〉衛教專區（分類、症狀、高危險群、熱適應期）、衛福部114-08-22新聞稿（114年7月熱傷害就診人次、「涼、補、心」3字訣）、國健署〈夏日炎炎 6大高危險族群慎防熱傷害〉。
   參考方向：健康智庫〈夏日多補水，預防熱傷害〉2022/08、〈注意！夏季夜間中暑〉2023/07。未查到114年全年熱傷害就診總數，故不寫全年數字。 */
(function(){
  const REFS = [
    {title:'不可忽視熱傷害',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=577&pid=14098'},
    {title:'近日高溫，留意熱傷害 「涼、補、心」三字訣，守護家中長輩健康',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-83569-1.html'},
    {title:'預防熱傷害的3字訣「涼、補、心」 消暑度過炎熱氣候',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-79003-1.html'},
    {title:'夏日炎炎 6大高危險族群慎防熱傷害！',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=577&pid=902&sid=10748'}
  ];
  const TABLE = {headers:['類型','常見表現'], rows:[
    ['熱衰竭','暈眩、頭痛、噁心、嘔吐、虛弱、心跳加速、體溫升高'],
    ['熱痙攣','高溫下過度運動後，出現不自主肌肉抽搐'],
    ['中暑（重度）','核心體溫高於攝氏40度，合併言行異常、癲癇或昏迷']
  ]};
  const TAGS = ['熱傷害','中暑','夏季健康','補充水分','高齡健康'];

  const PRO = {
    content_type:'健康文章',
    title:'熱衰竭、熱痙攣、中暑怎麼分？記住「涼、補、心」防熱傷害',
    update_date:'2026/11/20',
    intro:'熱傷害依嚴重程度分為熱衰竭、熱痙攣與中暑。國民健康署指出，中暑屬重度熱傷害，核心體溫高於攝氏40度並出現中樞神經症狀，可能導致多重器官衰竭。依衛福部疾管署急診通報資料，114年7月單月因熱傷害就診683人次。熱傷害是可預防的，關鍵在保持涼爽、補充水分、隨時留心。',
    sections:[
      {heading:'熱傷害的3種類型',format:'table',table:TABLE},
      {heading:'哪些人特別容易熱傷害',format:'bullets',items:[
        '長者、慢性病或心肺功能不良者：汗腺與散熱功能較差。',
        '戶外工作者、運動員，以及剛開始在高溫下工作的新手；熱適應期約需7至14天。',
        '肥胖、飲水不足、睡眠不足或感冒腹瀉等身體耗弱者。',
        '服用抗組織胺感冒藥、利尿劑等可能影響排汗或水分的藥物者。'
      ]},
      {heading:'國健署「涼、補、心」3字訣',format:'bullets',items:[
        '涼：穿寬鬆透氣淺色衣物，冷氣建議26至27度並搭配電風扇。',
        '補：不等口渴就規律補充水分。',
        '心：留意天氣預報與身體變化，出現體溫升高、皮膚乾熱變紅、心跳加速時，儘快離開高溫環境休息降溫，必要時立即就醫。'
      ]}
    ],
    think_tank_view:'熱傷害最常被低估的地方在「室內」與「夜間」：長輩為了省電不開冷氣、在悶熱房間睡覺，也可能熱到出事。對家人來說，一通「今天有沒有開冷氣、喝水了嗎」的電話，就是最簡單的防護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'分類、症狀與高危險群引自國健署衛教專區，就診人次引自衛福部114年新聞稿並標明月份，未涉及具體商品。',
    ai_rationale:{basis:['熱傷害分類與中暑定義取自國健署衛教專區','114年7月熱傷害就診683人次（衛福部新聞稿）'],
      layout_reason:'先用表格區分3種熱傷害，再說明高危險群，最後給「涼、補、心」預防原則。',
      tone:'專業易懂', tone_reason:'需讓讀者分辨嚴重程度。',
      to_verify:['未查到114年全年熱傷害就診總數，僅有7月單月數字']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'在家也會中暑？長輩夏天記得「涼、補、心」',
    update_date:'2026/11/20',
    intro:'很多人以為中暑只會發生在大太陽底下，其實待在悶熱的家裡也可能熱傷害。衛福部統計，光是114年7月就有683人次因熱傷害去急診。頭暈、想吐、全身沒力是身體在求救，如果體溫很高、講話怪怪的，可能已經是中暑，要趕快送醫。',
    sections:[
      {heading:'熱傷害分3種',format:'table',table:TABLE},
      {heading:'這些人要特別小心',format:'bullets',items:[
        '家裡的長輩，還有有慢性病、心臟不好的人。',
        '在戶外工作、運動的人，剛開始在大熱天工作的前1到2週最危險。',
        '睡不好、感冒拉肚子、喝水太少的時候。',
        '正在吃感冒藥或利尿劑的人。'
      ]},
      {heading:'記住「涼、補、心」',format:'bullets',items:[
        '涼：穿輕薄淺色衣服，冷氣開26到27度加電風扇。',
        '補：不要等口渴才喝水。',
        '心：體溫升高、皮膚又乾又紅、心跳很快，就先到陰涼處休息降溫，不舒服就去看醫生。'
      ]}
    ],
    think_tank_view:'夏天打電話給爸媽，除了問吃飯沒，也問一句「冷氣有開嗎？水有喝嗎？」。長輩常怕浪費電，一句關心就可能避免一次急診。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'分類與預防建議引自國健署與衛福部，就診人次標明為114年7月，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以長輩在家中暑的情境切入。', tone:'生活親切', tone_reason:'給子女與熟齡讀者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'熱傷害3類型與「涼、補、心」',
    update_date:'2026/11/20',
    intro:'中暑為重度熱傷害，核心體溫高於攝氏40度並有意識異常，需立即就醫。114年7月單月熱傷害就診683人次。',
    sections:[
      {heading:'3種類型',format:'table',table:TABLE},
      {heading:'高危險群',format:'bullets',items:[
        '長者、慢性病與心肺功能不良者。',
        '戶外工作者與運動員。'
      ]},
      {heading:'預防3字訣',format:'bullets',items:[
        '涼：透氣衣物，冷氣26-27度。',
        '補：規律補充水分。',
        '心：留意症狀，及早降溫就醫。'
      ]}
    ],
    think_tank_view:'熱傷害可預防；室內與夜間同樣要注意降溫與補水。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署與衛福部，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為類型、高危險群、預防三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'熱傷害與中暑', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'中暑是重度熱傷害，可能危及生命', primary_visual:'40°C', secondary_message:'意識異常要立即就醫', action_priority:'涼、補、心'},
    headline_hook:'在家也會中暑', headline_main:'熱傷害 3 種類型一次看', title_accent:'3 種類型',
    hero_message:'核心體溫 > 40°C', hero_support:'合併意識異常，就是中暑（國健署）',
    knowledge_title:'熱傷害分 3 種', knowledge_note:'體溫高又意識不清，**立即送醫**',
    knowledge_cards:[
      {label:'熱衰竭', icon:'pressure', lines:['暈眩、頭痛、噁心','虛弱、心跳加速']},
      {label:'熱痙攣', icon:'people', lines:['高溫下運動後','肌肉不自主抽搐']},
      {label:'中暑（重度）', icon:'brain', lines:['核心體溫 > 40°C','言行異常或昏迷']}
    ],
    action_title:'記住涼、補、心',
    action_cards:[
      {key:'涼', text:'冷氣 26–27 度搭配電風扇'},
      {key:'補', text:'不等口渴，規律補充水分'},
      {key:'心', text:'體溫升高、皮膚乾熱變紅就降溫'},
      {key:'醫', text:'意識不清立即就醫'}
    ],
    carousel_suggestion:{reason:'若想把類型、高危險群與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'在家也會中暑', headline_main:'熱傷害 3 種類型'},
      {layout_type:'knowledge', headline_hook:'誰最容易熱傷害', headline_main:'長者與戶外工作者'},
      {layout_type:'action', headline_hook:'預防 3 字訣', headline_main:'涼、補、心'}]},
    hashtags:['熱傷害','中暑','夏季健康','補充水分'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'general',
    illustration:{topic:'預防熱傷害', audience:'長者與家人', scene:'一位長者在開著電風扇的客廳裡喝水，窗外是炎熱的太陽',
      emotion:'清涼、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult drinking water in a cool living room with an electric fan, hot sun outside the window, refreshed and safe, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['熱傷害分類與中暑定義取自國健署衛教專區','「涼、補、心」取自衛福部新聞稿'],
      layout_reason:'核心是分辨嚴重程度，選 knowledge：3 種熱傷害當主角，最後給涼、補、心行動。',
      tone:'專業易懂', tone_reason:'需清楚區分輕重症。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'分類與預防建議引自國健署與衛福部，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'熱傷害與中暑',
    collect:{
      summary:'熱傷害依輕重分為熱衰竭、熱痙攣與中暑，中暑屬重度熱傷害可致命；114年7月單月因熱傷害就診683人次。長者、慢性病患、戶外工作者為高危險群，室內悶熱與夜間同樣可能發生，國健署以「涼、補、心」3字訣推廣預防。',
      objective_data:[
        {item:'盛行率／發生率',desc:'683人次：依衛福部疾管署即時疫情監測及預警系統急診通報資料，114年7月單一月份因熱傷害就診683人次。',tag:'官方統計',source:{name:'衛福部：近日高溫，留意熱傷害',url:'https://www.mohw.gov.tw/cp-16-83569-1.html'}},
        {item:'好發族群年齡層',desc:'長者與戶外工作者最危險：國健署指出長者、慢性病與心肺功能不良者、戶外工作者與運動員、肥胖、飲水不足及剛到高溫環境工作未經熱適應（約需7至14天）者，都是熱傷害高危險群。',tag:'官方統計',source:{name:'國健署：不可忽視熱傷害',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=577&pid=14098'}},
        {item:'年度趨勢方向',desc:'109年7月約為前一年1.6倍：國健署衛教專區指出，109年夏天高溫日數明顯比往年多，7月熱傷害人次約為前一年的1.6倍，夏季高溫已成為每年固定的健康風險。',tag:'官方統計',source:{name:'國健署：不可忽視熱傷害',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=577&pid=14098'}},
        {item:'政策動向',desc:'涼補心3字訣：國健署推廣「涼、補、心」3字訣（保持涼爽、補充水分、隨時留心），並建議冷氣設定26至27度搭配電風扇，提醒長者在家也要注意熱傷害。',tag:'官方統計',source:{name:'衛福部：近日高溫，留意熱傷害',url:'https://www.mohw.gov.tw/cp-16-83569-1.html'}}
      ],
      product_view:['機會：熱傷害多發生於戶外工作者與長者，可連結意外與住院醫療保障的說明。','機會：夏季高溫提醒可作為保戶關懷推播內容。','風險：避免推薦特定電解質飲料或降溫商品；建議應引用國健署衛教資料。'],
      marketing_view:['機會：每年5至9月高溫期是固定溝通檔期，可結合氣象高溫資訊即時推播。','機會：「在家也會中暑」的反直覺訊息適合做子女關心長輩的內容。','風險：不宜以單月就診人次暗示當下疫情，示範資料不會即時更新。'],
      alert_level:'medium',
      alert_reason:'具明顯季節性，夏季高溫期間需提高溝通頻率；非高溫季節可作為衛教常態內容。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('114年7月單月因熱傷害就診683人次','DATA_FACTUAL_ACCURACY','single_period_figure',
          '只引用單一月份就診人次，讀者無法判斷這是多是少；文中沒有提供同期比較或整季數字作為參照。','low','yes',
          '114年整季（4-10月）熱傷害就診人次或與113年同期比較。','no','confirm','衛福部新聞稿僅提供單月數字。',
          '114年7月單月因熱傷害就診683人次（疾管署急診通報，為單月數字）',
          ['光是114年7月就有683人次因熱傷害去急診','114年7月單月熱傷害就診683人次']),
        F('冷氣建議26至27度並搭配電風扇','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '26至27度是一般居家節能與降溫的建議，對已出現熱傷害症狀者需要更積極降溫，文中未區分預防與處置情境。','low','no',
          null,'no','clarify','屬適用情境說明。',
          '平時冷氣建議26至27度並搭配電風扇（已有不適症狀時應更積極降溫）',
          ['冷氣開26到27度加電風扇','冷氣26-27度']),
        F('服用抗組織胺感冒藥、利尿劑等可能影響排汗或水分的藥物者','MEDICAL_INTERPRETATION','medication_advice',
          '列出藥物類別容易讓讀者自行停藥；應補充「勿自行停藥，可與醫師或藥師討論」。','medium','no',
          null,'no','clarify','屬用藥安全提醒。',
          '服用抗組織胺感冒藥、利尿劑等可能影響排汗或水分的藥物者（請勿自行停藥，可詢問醫師或藥師）',
          ['正在吃感冒藥或利尿劑的人'])
      ],
      card:[
        F('體溫升高、皮膚乾熱變紅就降溫','MEDICAL_INTERPRETATION','incomplete_first_aid',
          '未說明降溫方式（移到陰涼處、鬆開衣物、補水），讀者可能不知道如何降溫。','low','no',
          null,'no','clarify','受字數限制，可移到備註補充。',
          '移到陰涼處、鬆衣、補水降溫'),
        F('合併意識異常，就是中暑（國健署）','MEDICAL_INTERPRETATION','diagnostic_language',
          '「就是中暑」屬診斷語氣，一般民眾無法量測核心體溫，宜改為「可能是中暑，應立即就醫」。','low','no',
          null,'no','clarify','屬表達方式。',
          '合併意識異常，可能是中暑（國健署）')
      ]
    },
    title_alts:[
      '熱衰竭、熱痙攣、中暑怎麼分？記住「涼、補、心」防熱傷害',
      '在家也會中暑？長輩夏天記得「涼、補、心」',
      '中暑可能致命：熱傷害高危險群與預防3字訣'
    ],
    card_title_alts:[
      ['在家也會中暑','熱傷害 3 種類型一次看'],
      ['長輩夏天要注意','記住涼、補、心'],
      ['體溫超過 40°C','意識不清立即就醫']
    ],
    data_addon:[
      '中暑分為傳統型（長者、慢性病患）與運動型（運動員、戶外工作者）。',
      '在高溫環境下運動或工作需熱適應期約7至14天。',
      '肥胖、睡眠不足、感冒腹瀉時散熱能力較差，熱傷害風險較高。'
    ],
    cta:'今天就打通電話提醒家中長輩：熱的時候開冷氣、搭配電風扇，不等口渴就喝水。'
  });
})();
