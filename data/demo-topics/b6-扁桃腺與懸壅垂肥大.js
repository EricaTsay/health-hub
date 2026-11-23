/* v6 示範主題：扁桃腺與懸壅垂肥大（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-21。資料來源：台大醫院〈兒童阻塞性睡眠呼吸中止症〉衛教資料（學齡前兒童打鼾與OSA比例、治療與手術）、
   蕃新聞 2025-12-08（中山醫學大學附設醫院副院長受訪：扁桃腺肥大、懸壅垂與氣道狹窄）。查無國內官方盛行率或手術量統計；比例為衛教資料引述，年份未標示。
   參考方向：健康智庫〈懸壅垂過長與扁桃腺肥大〉2023/12。 */
(function(){
  const NTUH = 'https://www.ntuh.gov.tw/ckfinder_file/SLP/files/%E5%85%92%E7%AB%A5%E9%98%BB%E5%A1%9E%E6%80%A7%E7%9D%A1%E7%9C%A0%E5%91%BC%E5%90%B8%E4%B8%AD%E6%AD%A2%E7%97%87%E8%A1%9B%E6%95%99.pdf';
  const YAM = 'https://n.yam.com/Article/20251208718032';
  const REFS = [
    {title:'兒童阻塞性睡眠呼吸中止症衛教',source:'國立臺灣大學醫學院附設醫院',url:NTUH},
    {title:'鼾聲如雷、半夜總警醒 醫：別忽略「扁桃腺肥大」',source:'蕃新聞',url:YAM}
  ];
  const TABLE = {headers:['警訊','常見表現'], rows:[
    ['大聲打鼾','幾乎每晚打鼾，伴隨喘氣或呼吸暫停'],
    ['張口呼吸','睡覺時嘴巴張開、睡姿怪異、頻繁翻身'],
    ['夜間驚醒','半夜醒來、尿床或睡不安穩'],
    ['白天表現','白天疲倦、注意力不集中，孩子可能反而過動']
  ]};
  const TAGS = ['扁桃腺肥大','懸壅垂','兒童打鼾','睡眠呼吸中止','耳鼻喉'];

  const DP_SURG = {id:'dp-tons-surg', type:'context', title:'不是每個人都需要手術',
    desc:'醫師受訪強調，並非每個扁桃腺腫大的人都需要手術；台大醫院衛教指出，藥物無法改善時，才與醫師討論腺樣體刮除或扁桃腺切除。AI 沒有替你決定要強調保守治療或手術。',
    current:'先評估，藥物無效再討論手術',
    options:[{label:'沿用目前寫法', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'扁桃腺與懸壅垂肥大：孩子打鼾不是睡得香，可能是呼吸中止',
    update_date:'2026/11/21',
    intro:'扁桃腺與腺樣體肥大是兒童阻塞性睡眠呼吸中止症最主要的原因。台大醫院衛教資料指出，約10%到30%的學齡前兒童有習慣性打鼾，其中阻塞性睡眠呼吸中止症約占1%到3%。中山醫學大學附設醫院副院長2025年受訪指出，扁桃腺過大會使懸壅垂相對變長、呼吸道變窄，長期可能增加阻塞型睡眠呼吸中止的風險，成人同樣可能發生。',
    sections:[
      {heading:'需要留意的4個警訊',format:'table',table:TABLE},
      {heading:'治療方式',format:'bullets',items:[
        '先由耳鼻喉科或睡眠中心評估，必要時安排睡眠檢查。',
        '台大醫院衛教指出，藥物無法改善症狀時，可與醫師討論腺樣體刮除或扁桃腺切除；手術經口腔施行，外觀沒有傷口，需全身麻醉、住院約2至3天。',
        '醫師強調，並不是每個扁桃腺腫大的人都需要手術，需依症狀與檢查判斷。'
      ]},
      {heading:'家長與成人可以這樣做',format:'bullets',items:[
        '錄下孩子睡覺時的打鼾與呼吸聲，就診時提供醫師參考。',
        '同時控制過敏性鼻炎，減少鼻塞造成的張口呼吸。',
        '成人打鼾合併白天嗜睡、晨起頭痛，也應就醫評估睡眠呼吸中止。'
      ]}
    ],
    think_tank_view:'很多家長以為孩子打鼾代表睡得香，其實可能是呼吸道被擋住。睡不好會影響白天的專注與情緒，越早評估、越早處理，越能讓孩子睡得安穩。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'比例標明為台大醫院衛教資料，醫師說法標明身分，未使用療效保證用語，未推薦特定院所或止鼾商品。',
    ai_rationale:{basis:['學齡前兒童習慣性打鼾10%至30%、OSA約1%至3%（台大醫院衛教）','扁桃腺過大使懸壅垂相對變長（中山附醫副院長2025年）'],
      layout_reason:'先用表格列出警訊，再說明治療方式，最後給家長與成人的做法。',
      tone:'專業易懂', tone_reason:'破除「打鼾＝睡得香」的迷思。',
      to_verify:['台大衛教比例的原始研究與年份未標示','查無國內手術量統計']},
    decision_points:[DP_SURG]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'孩子睡覺打呼很大聲？可能是扁桃腺太大',
    update_date:'2026/11/21',
    intro:'孩子睡覺打呼很大聲、嘴巴張開、還會突然停一下才喘過氣？這不是睡得香，可能是扁桃腺太大，把呼吸道擋住了。台大醫院的衛教資料說，大約1到3成的學齡前孩子會習慣性打鼾，其中一小部分有睡眠呼吸中止。',
    sections:[
      {heading:'這4個警訊要留意',format:'table',table:TABLE},
      {heading:'要開刀嗎？',format:'bullets',items:[
        '先讓耳鼻喉科醫生檢查，可能要做睡眠檢查。',
        '吃藥改善不了，才會和醫生討論要不要切除扁桃腺或腺樣體，傷口在嘴巴裡、外面看不到。',
        '不是每個扁桃腺大的人都要開刀，醫生會依情況判斷。'
      ]},
      {heading:'爸媽可以這樣做',format:'bullets',items:[
        '用手機錄下孩子睡覺打呼的聲音，帶去給醫生聽。',
        '有過敏性鼻炎要一起治療。',
        '大人打呼又白天很累，也要去檢查。'
      ]}
    ],
    think_tank_view:'孩子睡不好，白天就容易分心、脾氣差。今晚聽聽孩子睡覺的呼吸聲，有疑慮就帶去給醫生看看。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'比例標明為台大醫院衛教，語氣親切，未使用療效保證用語，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以孩子打呼的情境帶出警訊、治療與家長做法。', tone:'生活親切', tone_reason:'給家長閱讀。', to_verify:[]},
    decision_points:[DP_SURG]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'扁桃腺肥大：兒童打鼾4個警訊',
    update_date:'2026/11/21',
    intro:'台大醫院衛教：學齡前兒童約10%到30%習慣性打鼾，阻塞性睡眠呼吸中止約1%到3%，扁桃腺與腺樣體肥大是主因。',
    sections:[
      {heading:'4個警訊',format:'table',table:TABLE},
      {heading:'治療',format:'bullets',items:[
        '耳鼻喉科評估、睡眠檢查。',
        '藥物無效再討論手術。'
      ]},
      {heading:'家長做法',format:'bullets',items:[
        '錄下睡覺呼吸聲就醫。',
        '同時控制過敏。'
      ]}
    ],
    think_tank_view:'打鼾不等於睡得香；及早評估，讓孩子睡得安穩。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'比例標明為台大醫院衛教，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為警訊、治療、做法三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_SURG]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'扁桃腺與懸壅垂肥大', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'孩子打鼾不是睡得香', primary_visual:'1–3 成', secondary_message:'學齡前兒童習慣性打鼾比例', action_priority:'錄音、就醫評估、控制過敏'},
    headline_hook:'孩子打呼很大聲？', headline_main:'扁桃腺肥大 4 個警訊', title_accent:'4 個警訊',
    hero_message:'打鼾不等於睡得香', hero_support:'扁桃腺與腺樣體肥大是兒童睡眠呼吸中止主因',
    primary_stat:{value:'1–3 成', label:'學齡前兒童習慣性打鼾', note:'台大醫院衛教資料'},
    action_title:'爸媽這樣做',
    action_cards:[
      {key:'錄', text:'錄下孩子睡覺的打鼾與呼吸聲'},
      {key:'醫', text:'耳鼻喉科評估，必要時睡眠檢查'},
      {key:'敏', text:'同時控制過敏性鼻炎'},
      {key:'術', text:'藥物無效再與醫師討論手術'}
    ],
    notice:'打鼾合併**呼吸暫停**、白天嗜睡或過動，應盡快就醫。',
    carousel_suggestion:{reason:'若想把警訊、治療與成人打鼾分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'孩子打呼很大聲？', headline_main:'4 個警訊'},
      {layout_type:'knowledge', headline_hook:'要開刀嗎', headline_main:'評估與手術方式'},
      {layout_type:'action', headline_hook:'大人也要注意', headline_main:'打鼾與睡眠呼吸中止'}]},
    hashtags:['扁桃腺肥大','兒童打鼾','睡眠呼吸中止','耳鼻喉'],
    sources:['國立臺灣大學醫學院附設醫院','中山醫學大學附設醫院（媒體受訪）'],
    illustration_category:'sleep',
    illustration:{topic:'兒童睡眠呼吸', audience:'學齡前兒童家長', scene:'媽媽坐在熟睡的孩子床邊，用手機錄下孩子睡覺時的呼吸聲',
      emotion:'關心、細心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A mother sitting beside her sleeping child\'s bed recording the child\'s breathing sounds with a phone, caring and attentive mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['學齡前兒童習慣性打鼾10%至30%（台大醫院衛教）'],
      layout_reason:'選 action：4 個家長行動當主角，打鼾比例放下方，以就醫警訊收尾。',
      tone:'專業易懂', tone_reason:'破除迷思、可行動。',
      to_verify:['衛教比例原始研究年份']},
    decision_points:[DP_SURG],
    content_check_note:'比例標明為台大醫院衛教，未使用療效保證用語，未推薦特定商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'扁桃腺與懸壅垂肥大',
    collect:{
      summary:'扁桃腺與腺樣體肥大是兒童阻塞性睡眠呼吸中止的主因，也可能使懸壅垂相對變長、氣道變窄；「打鼾不等於睡得香、及早評估」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'逾1成學齡前兒童習慣性打鼾：台大醫院衛教資料指出約10%到30%的學齡前兒童有習慣性打鼾，其中阻塞性睡眠呼吸中止約占1%到3%（原始研究年份未標示）。',tag:'市場觀察',source:{name:'台大醫院：兒童阻塞性睡眠呼吸中止症衛教',url:NTUH}},
        {item:'年度趨勢方向',desc:'扁桃腺過大使懸壅垂相對變長：中山醫學大學附設醫院副院長2025年受訪指出，扁桃腺肥大會使呼吸道變窄，長期可能增加阻塞型睡眠呼吸中止風險（查無國內趨勢統計）。',tag:'市場觀察',source:{name:'蕃新聞：鼾聲如雷、半夜總警醒 醫：別忽略「扁桃腺肥大」',url:YAM}},
        {item:'政策動向',desc:'藥物無效再評估手術：台大醫院衛教指出，可依病因討論腺樣體刮除或扁桃腺切除，需全身麻醉、住院約2至3天（健保給付條件未查到官方說明）。',tag:'市場觀察',source:{name:'台大醫院：兒童阻塞性睡眠呼吸中止症衛教',url:NTUH}},
        {item:'好發族群年齡層',desc:'學齡前兒童最常見：扁桃腺與腺樣體肥大是兒童阻塞性睡眠呼吸中止最主要的原因，警訊包括打鼾喘氣、張口呼吸、夜間驚醒與白天過動。',tag:'市場觀察',source:{name:'台大醫院：兒童阻塞性睡眠呼吸中止症衛教',url:NTUH}}
      ],
      product_view:['機會：兒童睡眠與發展是家長高度關注的議題，可作為親子健康關懷內容。','機會：扁桃腺手術為常見兒童手術，可說明手術住院保障。','風險：避免暗示「打鼾就要開刀」；不推薦止鼾商品。'],
      marketing_view:['機會：「打鼾不等於睡得香」能破除常見迷思。','機會：「錄下孩子睡覺的聲音」是具體可行的行動。','風險：比例為衛教引述，需標明。'],
      alert_level:'low',
      alert_reason:'屬常見兒童健康議題，無時效性政策事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('約10%到30%的學齡前兒童有習慣性打鼾','SOURCE_EVIDENCE','unsourced_range',
          '已註明是台大醫院衛教資料，但衛教未標示原始研究與年份，範圍也很寬。','low','yes',
          '兒童習慣性打鼾盛行率的原始研究。','no','confirm','屬引述範圍值。',
          '約10%到30%的學齡前兒童有習慣性打鼾（台大醫院衛教引述，原始研究年份未標示）',
          ['大約1到3成的學齡前孩子會習慣性打鼾','學齡前兒童約10%到30%習慣性打鼾']),
        F('住院約2至3天','CURRENCY_TIMELINESS','practice_may_vary',
          '住院天數依醫院與個案不同，衛教資料年份未知，讀者可能以此作為固定安排。','low','no',
          null,'no','clarify','屬個別差異說明。',
          '住院天數依醫院與個人狀況而定（衛教資料約2至3天）'),
        F('成人同樣可能發生','MEDICAL_INTERPRETATION','missing_detail',
          '成人打鼾與睡眠呼吸中止的成因較多元（體重、下顎結構等），文中只以扁桃腺帶過。','low','no',
          null,'no','clarify','補一句即可。',
          '成人同樣可能發生，但成人的成因較多元（如體重、下顎結構），需整體評估'),
        F('同時控制過敏性鼻炎','MEDICAL_INTERPRETATION','missing_rationale',
          '未說明原因（鼻塞會加重張口呼吸與打鼾）。','low','no',
          null,'no','clarify','補一句即可。',
          '同時控制過敏性鼻炎（鼻塞會加重張口呼吸與打鼾）',
          ['有過敏性鼻炎要一起治療','同時控制過敏。'])
      ],
      card:[
        F('台大醫院衛教資料','SOURCE_EVIDENCE','unsourced_range',
          '主數字為衛教引述範圍，年份未標示。','low','yes',
          '原始研究。','no','confirm','屬引述。',
          '台大醫院衛教資料（引述研究，年份未標示）'),
        F('藥物無效再與醫師討論手術','MEDICAL_INTERPRETATION','oversimplification',
          '未提及手術前通常需睡眠檢查等評估。','low','no',
          null,'no','clarify','屬完整度問題。',
          '經檢查評估、藥物無效再討論手術')
      ]
    },
    title_alts:[
      '扁桃腺與懸壅垂肥大：孩子打鼾不是睡得香，可能是呼吸中止',
      '孩子睡覺打呼很大聲？可能是扁桃腺太大',
      '兒童打鼾4個警訊：扁桃腺肥大的評估與治療'
    ],
    card_title_alts:[
      ['孩子打呼很大聲？','扁桃腺肥大 4 個警訊'],
      ['打鼾不等於睡得香','兒童睡眠呼吸中止'],
      ['今晚聽聽孩子的呼吸','爸媽這樣做']
    ],
    data_addon:[
      '台大醫院衛教：扁桃腺切除經口腔施行，外觀不會有傷口。',
      '兒童睡眠呼吸中止可能出現白天過動、注意力不集中等表現。',
      '醫師受訪：並非每個扁桃腺腫大的患者都需要手術。'
    ],
    cta:'今晚用手機錄下孩子睡覺時的呼吸聲；若有大聲打鼾、呼吸暫停，這週就預約耳鼻喉科。'
  });
})();
