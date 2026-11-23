/* v6 示範主題：梅尼爾氏症（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-20。數據來源：科技新報 2026-06-01（國泰綜合醫院副院長受訪：健保資料庫眩暈急診人次、症狀與生活形態管理）、
   Cochrane 系統性回顧 CD015244（2023-02-27，生活方式與飲食調整證據）。查無國內官方梅尼爾氏症盛行率統計。
   參考方向：健康智庫〈梅尼爾氏症〉2023/12、〈頭暈目眩—簡介梅尼爾氏症〉2023/08。 */
(function(){
  const TN = 'https://technews.tw/2026/06/01/smart-dizziness-butler-app/';
  const CO = 'https://www.cochrane.org/zh-hant/evidence/CD015244_what-are-benefits-and-risks-different-lifestyle-and-dietary-changes-menieres-disease';
  const REFS = [
    {title:'眩暈族告別天旋地轉！國泰醫擬推「智暈管家 App」助患者找回生活',source:'科技新報',url:TN},
    {title:'用於治療梅尼爾氏症的多項生活方式與飲食的調整，其益處與風險為何？',source:'Cochrane',url:CO}
  ];
  const TABLE = {headers:['典型症狀','說明'], rows:[
    ['反覆眩暈','天旋地轉的眩暈，一次可持續數十分鐘到數小時'],
    ['耳鳴','發作前後耳朵出現嗡嗡或低頻聲響'],
    ['耳脹感','單側耳朵悶脹、像有水或被塞住'],
    ['波動性聽力下降','聽力時好時壞，反覆發作後可能逐漸變差']
  ]};
  const TAGS = ['梅尼爾氏症','眩暈','耳鳴','聽力保健','生活形態管理'];

  const DP_DIET = {id:'dp-men-diet', type:'data_scope', title:'低鹽、少咖啡因建議的證據強度',
    desc:'臨床上常建議梅尼爾氏症病人少鹽、少咖啡因，但 Cochrane 2023年系統性回顧指出，生活方式與飲食調整能否改善症狀目前證據不足，且沒有研究評估減鹽或減咖啡因。AI 沒有替你決定要不要在內容中標示證據強度。',
    current:'列為一般建議，並註明證據有限',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'臨床常規建議', value:'少鹽、少咖啡因、規律作息', note:'醫師衛教常見做法（目前採用，並標示證據有限）'},
      {label:'證據不足', value:'Cochrane 2023', note:'2項研究、274人，未評估減鹽'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'梅尼爾氏症：反覆眩暈合併耳鳴、耳悶，生活管理是關鍵',
    update_date:'2026/11/20',
    intro:'梅尼爾氏症是內耳疾病，典型表現為反覆發作的眩暈、耳鳴、耳脹感與波動性聽力下降。國泰綜合醫院副院長2026年受訪引述健保資料庫統計，台灣每年因眩暈掛急診的成年人高達50萬人次（含各種原因的眩暈）。他指出，梅尼爾氏症反覆發作可能逐步損害聽力，屬於需要長期管理的慢性疾病。',
    sections:[
      {heading:'梅尼爾氏症的4個典型症狀',format:'table',table:TABLE},
      {heading:'日常管理重點',format:'bullets',items:[
        '記錄發作日誌：時間、持續多久、當天睡眠、飲食與壓力，回診時提供醫師參考。',
        '規律睡眠、調適壓力，避免長時間處在高噪音環境。',
        '醫師常建議少鹽、少咖啡因與菸酒；但 Cochrane 2023年回顧指出，生活與飲食調整的效果目前證據有限，宜依醫師建議調整。',
        '發作時先坐下或躺下、避免跌倒，不要開車或從事高處作業。'
      ]},
      {heading:'何時要就醫',format:'bullets',items:[
        '反覆眩暈合併耳鳴、耳悶或聽力變化，應到耳鼻喉科檢查聽力與平衡功能。',
        '眩暈合併口齒不清、單側手腳無力、劇烈頭痛或意識改變，可能是中風，請立即撥打119。',
        '確診後定期追蹤聽力，依醫師評估使用藥物或其他治療。'
      ]}
    ],
    think_tank_view:'梅尼爾氏症的難處在於「不知道下一次什麼時候發作」。把發作記錄下來、找出自己的誘發因素，搭配規律作息與定期聽力追蹤，多數人能逐步掌握生活節奏；也提醒家人，眩暈合併中風徵兆時要立刻就醫。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'眩暈急診人次標明為醫師引述健保資料庫，飲食建議標明證據強度，已提醒中風警訊，未使用療效保證用語，未推薦特定藥品或商品。',
    ai_rationale:{basis:['每年約50萬人次成人因眩暈掛急診（國泰醫院副院長引述健保資料庫）','Cochrane 2023：生活與飲食調整證據不足'],
      layout_reason:'先用表格整理典型症狀，再給日常管理重點，最後說明就醫時機與中風警訊。',
      tone:'專業易懂', tone_reason:'慢性內耳疾病需以自我管理為主，並避免誇大飲食療效。',
      to_verify:['50萬人次的統計年份與原始來源未說明','查無國內梅尼爾氏症盛行率官方統計']},
    decision_points:[DP_DIET]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'天旋地轉又耳鳴、耳朵悶悶的？認識梅尼爾氏症',
    update_date:'2026/11/20',
    intro:'突然天旋地轉、耳朵嗡嗡叫又悶悶的，過一陣子又好了，然後又再來？這可能是梅尼爾氏症。國泰醫院副院長說，健保資料顯示台灣每年因為頭暈去急診的大人有50萬人次。梅尼爾氏症雖然很難根治，但好好管理生活，可以減少發作的困擾。',
    sections:[
      {heading:'這4個症狀常一起出現',format:'table',table:TABLE},
      {heading:'平常可以這樣照顧自己',format:'bullets',items:[
        '寫「頭暈日記」：哪天發作、多久、那天睡得好不好、吃了什麼。',
        '睡飽、找方法紓壓，少待在很吵的地方。',
        '醫師常建議少吃鹹、少喝咖啡和酒，不過研究證據還不多，照醫師建議調整就好。',
        '發作時先坐下或躺好，別開車、別爬高。'
      ]},
      {heading:'什麼時候要看醫生？',format:'bullets',items:[
        '常常頭暈又耳鳴、耳悶，去耳鼻喉科檢查聽力和平衡。',
        '頭暈時講話不清楚、一邊手腳沒力，可能是中風，馬上打119。',
        '確診後要定期追蹤聽力。'
      ]}
    ],
    think_tank_view:'頭暈發作時很嚇人，但記下每一次發作、慢慢找出自己的誘發原因，就能比較安心地過生活。家人也要記得：頭暈加上講話不清楚、手腳無力，要立刻打119。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明為醫師引述健保資料，飲食建議標明證據有限，已提醒中風警訊，未使用療效保證用語，未推薦特定藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以發作情境帶出症狀、自我照顧與就醫時機。', tone:'生活親切', tone_reason:'給病人與家人閱讀，降低焦慮。', to_verify:['50萬人次統計年份']},
    decision_points:[DP_DIET]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'梅尼爾氏症：4個症狀＋生活管理',
    update_date:'2026/11/20',
    intro:'梅尼爾氏症典型表現為反覆眩暈、耳鳴、耳脹感與波動性聽力下降，需長期生活管理與聽力追蹤。',
    sections:[
      {heading:'4個症狀',format:'table',table:TABLE},
      {heading:'生活管理',format:'bullets',items:[
        '記錄發作日誌。',
        '規律睡眠、紓壓、避開高噪音。',
        '少鹽少咖啡因為常見建議，但證據有限。'
      ]},
      {heading:'就醫時機',format:'bullets',items:[
        '反覆眩暈合併耳鳴耳悶，看耳鼻喉科。',
        '合併中風徵兆立即撥打119。'
      ]}
    ],
    think_tank_view:'梅尼爾氏症以長期管理為主；記錄發作、規律作息、定期追蹤聽力。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'飲食建議標明證據有限，已提醒中風警訊，未使用療效保證用語，未推薦特定藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為症狀、管理、就醫三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_DIET]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'梅尼爾氏症', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'梅尼爾氏症需要長期生活管理', primary_visual:'50 萬人次', secondary_message:'反覆眩暈、耳鳴、耳悶、聽力波動', action_priority:'記錄發作、規律作息、追蹤聽力'},
    headline_hook:'天旋地轉又耳鳴？', headline_main:'梅尼爾氏症管理 4 件事', title_accent:'4 件事',
    hero_message:'眩暈＋耳鳴＋耳悶', hero_support:'反覆發作、聽力時好時壞，要到耳鼻喉科檢查',
    primary_stat:{value:'50 萬人次', label:'每年成人因眩暈掛急診（各種原因）', note:'國泰醫院副院長引述健保資料庫'},
    action_title:'日常這樣管理',
    action_cards:[
      {key:'記', text:'寫發作日誌：時間、睡眠、飲食'},
      {key:'睡', text:'規律睡眠、調適壓力'},
      {key:'靜', text:'避開高噪音環境'},
      {key:'追', text:'定期追蹤聽力與平衡'}
    ],
    notice:'眩暈合併口齒不清、單側無力，可能是**中風，立即撥打 119**。',
    carousel_suggestion:{reason:'若想把症狀、生活管理與中風警訊分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'天旋地轉又耳鳴？', headline_main:'梅尼爾氏症 4 個症狀'},
      {layout_type:'action', headline_hook:'日常管理', headline_main:'記錄、睡好、避噪音'},
      {layout_type:'knowledge', headline_hook:'這種頭暈要打 119', headline_main:'眩暈合併中風警訊'}]},
    hashtags:['梅尼爾氏症','眩暈','耳鳴','聽力保健'],
    sources:['國泰綜合醫院（媒體受訪）','Cochrane'],
    illustration_category:'general',
    illustration:{topic:'梅尼爾氏症生活管理', audience:'中年上班族', scene:'一位中年上班族坐在沙發上，手拿筆記本記錄頭暈日記，旁邊放著一杯水',
      emotion:'平穩、有掌握感', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged office worker sitting on a sofa writing in a dizziness diary notebook, a glass of water beside them, calm and in control, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['每年約50萬人次成人因眩暈掛急診（醫師引述健保資料庫）'],
      layout_reason:'梅尼爾氏症以自我管理為主，選 action：4 個管理行動當主角，以中風警訊收尾。',
      tone:'專業易懂', tone_reason:'降低焦慮、可行動。',
      to_verify:['50萬人次的統計年份']},
    decision_points:[DP_DIET],
    content_check_note:'數字標明為醫師引述健保資料庫並註明範圍，已提醒中風警訊，未使用療效保證用語，未推薦特定藥品或商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'梅尼爾氏症',
    collect:{
      summary:'眩暈是急診常見主訴，梅尼爾氏症以反覆眩暈、耳鳴、耳悶與聽力波動為特徵，屬需長期管理的內耳疾病；國內醫院正發展數位自我管理工具，「記錄發作、規律作息、追蹤聽力」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'每年約50萬人次成人因眩暈掛急診：國泰綜合醫院副院長2026年受訪引述健保資料庫統計（含各種原因眩暈，非僅梅尼爾氏症，統計年份未說明）。',tag:'市場觀察',source:{name:'科技新報：眩暈族告別天旋地轉！國泰醫擬推「智暈管家 App」',url:TN}},
        {item:'年度趨勢方向',desc:'70歲以上眩暈盛行率接近10%：同一位醫師指出眩暈好發於40歲以上，隨年齡增加而上升（查無國內梅尼爾氏症盛行率官方統計）。',tag:'市場觀察',source:{name:'科技新報：眩暈族告別天旋地轉！國泰醫擬推「智暈管家 App」',url:TN}},
        {item:'政策動向',desc:'生活與飲食調整證據不足：Cochrane 2023年系統性回顧（2項研究、274位受試者）指出，生活方式與飲食調整能否改善梅尼爾氏症症狀目前證據不足，且尚無研究評估減鹽或減咖啡因。',tag:'市場觀察',source:{name:'Cochrane：用於治療梅尼爾氏症的多項生活方式與飲食的調整，其益處與風險為何？',url:CO}},
        {item:'好發族群年齡層',desc:'40歲以上族群較常見：醫師受訪指出眩暈好發於40歲以上，梅尼爾氏症反覆發作可能逐步損害聽力，並增加跌倒與失能風險。',tag:'市場觀察',source:{name:'科技新報：眩暈族告別天旋地轉！國泰醫擬推「智暈管家 App」',url:TN}}
      ],
      product_view:['機會：反覆眩暈影響工作與跌倒風險，可連結意外與失能保障的說明。','機會：數位健康管理（發作日誌、噪音提醒）可作為健康管理服務的延伸。','風險：不推薦特定藥品或App；避免誇大飲食調整效果。'],
      marketing_view:['機會：「頭暈日記」是容易轉成互動工具的題材。','機會：眩暈合併中風警訊的區辨，是實用的安全衛教。','風險：眩暈原因多元，內容需提醒由醫師診斷。'],
      alert_level:'low',
      alert_reason:'屬長期慢性疾病議題，無時效性政策事件；適合季節交替或壓力高峰期溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('台灣每年因眩暈掛急診的成年人高達50萬人次','SOURCE_EVIDENCE','secondary_citation_year_unstated',
          '已註明是醫師引述健保資料庫，但未說明統計年份與原始報告；且統計範圍是所有眩暈，不是梅尼爾氏症。','medium','yes',
          '健保資料庫眩暈急診人次的年份與分析來源。','yes','confirm','屬二手引述，數字本身未必有誤。',
          '台灣每年因各種原因眩暈掛急診的成年人約50萬人次（醫師引述健保資料庫，年份未註明）',
          ['台灣每年因為頭暈去急診的大人有50萬人次']),
        F('梅尼爾氏症反覆發作可能逐步損害聽力','MEDICAL_INTERPRETATION','prognosis_overgeneralized',
          '病程個別差異大，並非所有病人都會明顯聽損；文中未說明，可能加重病人焦慮。','low','no',
          null,'no','clarify','屬表達完整度問題。',
          '梅尼爾氏症反覆發作，部分病人的聽力可能逐步受影響'),
        F('一次可持續數十分鐘到數小時','DATA_FACTUAL_ACCURACY','unsourced_clinical_criterion',
          '發作時間屬診斷標準內容，文中沒有出處；可補充為國際診斷標準的描述。','low','no',
          null,'no','clarify','內容與國際診斷標準一致。',
          '一次可持續約20分鐘到12小時（國際診斷標準）'),
        F('不要開車或從事高處作業','MEDICAL_INTERPRETATION','missing_practical_info',
          '只說發作時不要開車，未提醒頻繁發作者平時開車也需與醫師討論安全性。','low','no',
          null,'no','clarify','補充即可。',
          '不要開車或從事高處作業；發作頻繁者，平時是否適合開車請與醫師討論',
          ['別開車、別爬高'])
      ],
      card:[
        F('每年成人因眩暈掛急診（各種原因）','SOURCE_EVIDENCE','secondary_citation_year_unstated',
          '主數字為醫師受訪引述，未標示年份，且範圍是所有眩暈。','medium','yes',
          '統計年份與原始來源。','yes','confirm','屬二手引述。',
          '每年成人因各種眩暈掛急診（醫師引述，年份未註明）'),
        F('寫發作日誌：時間、睡眠、飲食','MEDICAL_INTERPRETATION','missing_practical_info',
          '沒說明日誌的用途，讀者可能不知道要帶去給醫師看。','low','no',
          null,'no','clarify','補用途即可。',
          '寫發作日誌，回診時給醫師參考')
      ]
    },
    title_alts:[
      '梅尼爾氏症：反覆眩暈合併耳鳴、耳悶，生活管理是關鍵',
      '天旋地轉又耳鳴、耳朵悶悶的？認識梅尼爾氏症',
      '每年50萬人次因眩暈掛急診：梅尼爾氏症症狀與管理'
    ],
    card_title_alts:[
      ['天旋地轉又耳鳴？','梅尼爾氏症管理 4 件事'],
      ['頭暈日記這樣寫','梅尼爾氏症自我管理'],
      ['眩暈＋耳鳴＋耳悶','認識梅尼爾氏症']
    ],
    data_addon:[
      'Cochrane 2023年回顧：納入2項研究、274位受試者，生活與飲食調整效果證據不足。',
      '醫師指出梅尼爾氏症影響控制的關鍵因素包括飲食、噪音、睡眠、情緒與復健。',
      '眩暈合併口齒不清、單側無力、劇烈頭痛，須優先排除中風。'
    ],
    cta:'如果你常常天旋地轉又耳鳴，從今天開始寫一週「頭暈日記」，帶著它去耳鼻喉科門診。'
  });
})();
