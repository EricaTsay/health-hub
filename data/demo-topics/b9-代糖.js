/* v6 示範主題：代糖（B9 飲食營養與運動）
   查證日期：2026-11-20。數據來源：WHO 2023-05-15新聞稿（非糖甜味劑指引：不建議用於體重控制）、WHO 2023-07-14新聞稿（IARC將阿斯巴甜列2B、JECFA維持ADI每公斤40毫克、70公斤成人約9-14罐換算）、食藥署藥物食品安全週報第950期（2023-12-01：26項甜味劑正面表列、阿斯巴甜使用限制與苯酮尿症標示）。
   參考方向：健康智庫〈零卡可樂會致癌？使用代糖的風險〉2023/07。 */
(function(){
  const REFS = [
    {title:'WHO advises not to use non-sugar sweeteners for weight control in newly released guideline',source:'World Health Organization (2023)',url:'https://www.who.int/news/item/15-05-2023-who-advises-not-to-use-non-sugar-sweeteners-for-weight-control-in-newly-released-guideline'},
    {title:'Aspartame hazard and risk assessment results released',source:'World Health Organization (2023)',url:'https://www.who.int/news/item/14-07-2023-aspartame-hazard-and-risk-assessment-results-released'},
    {title:'製造業者照過來，使用甜味劑有秘訣！（藥物食品安全週報第950期）',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/tc/PublishOtherEpaperContent.aspx?id=1485&tid=4553'}
  ];
  const TABLE = {headers:['常見問題','官方說法'], rows:[
    ['代糖能幫助減重嗎','WHO 2023年指引：不建議用非糖甜味劑來控制體重或降低慢性病風險（有條件建議）'],
    ['阿斯巴甜會致癌嗎','IARC列為2B「可能致癌」；JECFA維持每日容許攝取量每公斤體重40毫克'],
    ['國內怎麼管','26項甜味劑正面表列，須符合使用範圍與限量'],
    ['誰要特別注意','苯酮尿症患者不宜使用阿斯巴甜，包裝須標示']
  ]};
  const TAGS = ['代糖','甜味劑','阿斯巴甜','減糖','零卡飲料'];

  const PRO = {
    content_type:'健康文章',
    title:'零卡飲料能幫助減重嗎？WHO：不建議用代糖控制體重',
    update_date:'2026/11/20',
    intro:'世界衛生組織2023年5月發布指引，不建議使用非糖甜味劑（俗稱代糖）來控制體重或降低非傳染性疾病風險，屬有條件建議，不適用於已有糖尿病者。同年7月，國際癌症研究機構將阿斯巴甜列為2B「可能致癌」，但食品添加物聯合專家委員會（JECFA）維持每日容許攝取量為每公斤體重40毫克。國內食藥署以正面表列管理26項甜味劑。',
    sections:[
      {heading:'代糖的4個常見問題',format:'table',table:TABLE},
      {heading:'2B代表什麼',format:'bullets',items:[
        'IARC評估的是「是否可能致癌」的危害，JECFA評估的是一般攝取量下的風險，兩者回答不同問題。',
        'WHO舉例：70公斤成人若每天喝超過9至14罐含200-300毫克阿斯巴甜的無糖飲料，才會超過每日容許量。',
        '阿斯巴甜遇高溫會分解失去甜味，因此不適用於烹煮、熱飲或烘焙。'
      ]},
      {heading:'想減糖可以這樣做',format:'bullets',items:[
        '把目標放在降低對甜味的依賴，而不是用代糖取代糖。',
        '口渴優先喝白開水或無糖茶。',
        '偶爾喝零卡飲料不必過度擔心，但不宜當成每天的水分來源。',
        '糖尿病患者使用甜味劑，可與醫師或營養師討論。'
      ]}
    ],
    think_tank_view:'代糖解決的是「熱量」，不是「想喝甜」的習慣。WHO的提醒重點不在於代糖有毒，而在於長期靠代糖控制體重效果有限。真正的減糖，是讓舌頭慢慢習慣淡一點的味道。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'國際評估引自WHO 2023年新聞稿並標明月份，國內管理規定引自食藥署週報，未點名特定飲料品牌。',
    ai_rationale:{basis:['WHO 2023-05非糖甜味劑指引','IARC 2B與JECFA ADI 40 mg/kg（WHO 2023-07）','國內26項甜味劑正面表列（食藥署）'],
      layout_reason:'先用問答表格整理國際評估與國內管理，再解釋2B意義，最後給減糖做法。',
      tone:'專業易懂', tone_reason:'需區分危害分類與攝取風險。',
      to_verify:['WHO指引為有條件建議，學界仍有討論']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'喝零卡可樂比較健康嗎？代糖的3個真相',
    update_date:'2026/11/20',
    intro:'想喝甜又怕胖，很多人改喝零卡飲料。但世界衛生組織2023年提醒：用代糖來減重，長期效果並不好，不建議這樣做。同年阿斯巴甜被列為「可能致癌」的2B級，聽起來很嚇人，但專家也說，一般人正常喝並不會超過安全量。',
    sections:[
      {heading:'代糖Q&A',format:'table',table:TABLE},
      {heading:'2B到底多危險？',format:'bullets',items:[
        '2B是「可能致癌」，證據有限。',
        '70公斤的大人，一天要喝超過9到14罐無糖飲料才會超量。',
        '阿斯巴甜怕高溫，所以不會用在熱飲和烘焙。'
      ]},
      {heading:'減糖這樣做',format:'bullets',items:[
        '慢慢讓自己習慣淡一點的味道。',
        '口渴就喝白開水或無糖茶。',
        '零卡飲料偶爾喝沒關係，別當水喝。',
        '有糖尿病的人，問問醫師怎麼選。'
      ]}
    ],
    think_tank_view:'與其找更甜又沒熱量的替代品，不如試著把飲料甜度一點一點降下來。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自WHO與食藥署，未點名特定飲料品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以「零卡比較健康嗎」的疑問切入。', tone:'生活親切', tone_reason:'給愛喝飲料的一般讀者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'代糖：WHO不建議用於控制體重',
    update_date:'2026/11/20',
    intro:'WHO 2023年指引不建議以非糖甜味劑控制體重。阿斯巴甜列IARC 2B，JECFA維持ADI每公斤40毫克。',
    sections:[
      {heading:'Q&A',format:'table',table:TABLE},
      {heading:'2B解讀',format:'bullets',items:[
        '危害分類不等於攝取風險。',
        '一般攝取量不易超過ADI。'
      ]},
      {heading:'減糖',format:'bullets',items:[
        '降低甜味依賴。',
        '喝水或無糖茶。'
      ]}
    ],
    think_tank_view:'代糖不是減糖的終點，習慣淡味才是。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自WHO與食藥署，未點名特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為Q&A、解讀、減糖三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'代糖', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'WHO 不建議用代糖控制體重', primary_visual:'40 毫克', secondary_message:'阿斯巴甜列 2B，但一般攝取不易超量', action_priority:'降低甜味依賴'},
    headline_hook:'零卡飲料比較健康？', headline_main:'代糖 4 個問題一次看', title_accent:'4 個問題',
    hero_message:'每公斤 40 毫克', hero_support:'阿斯巴甜每日容許攝取量（JECFA 2023 年維持）',
    knowledge_title:'代糖 Q&A', knowledge_note:'代糖解決熱量，**解決不了想喝甜**',
    knowledge_cards:[
      {label:'能減重嗎', icon:'waist', lines:['WHO 2023：','不建議用來控制體重']},
      {label:'會致癌嗎', icon:'flask', lines:['IARC 列 2B','ADI 維持不變']},
      {label:'國內怎麼管', icon:'report', lines:['26 項甜味劑','正面表列']},
      {label:'誰要注意', icon:'shield', lines:['苯酮尿症患者','不宜阿斯巴甜']}
    ],
    action_title:'減糖這樣做',
    action_cards:[
      {key:'淡', text:'慢慢降低飲料甜度'},
      {key:'水', text:'口渴優先喝白開水或無糖茶'},
      {key:'偶', text:'零卡飲料偶爾喝，不當水喝'},
      {key:'醫', text:'糖尿病患者與醫師討論'}
    ],
    carousel_suggestion:{reason:'若想把減重效果、致癌分類與國內管理分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'零卡飲料能減重？', headline_main:'WHO 不建議'},
      {layout_type:'knowledge', headline_hook:'阿斯巴甜 2B', headline_main:'危害 vs 風險'},
      {layout_type:'action', headline_hook:'減糖', headline_main:'習慣淡一點'}]},
    hashtags:['代糖','甜味劑','阿斯巴甜','減糖'],
    sources:['World Health Organization','衛生福利部食品藥物管理署'],
    illustration_category:'general',
    illustration:{topic:'減糖飲品選擇', audience:'愛喝飲料的上班族', scene:'辦公桌上一瓶水和一杯無糖茶，旁邊的零卡汽水被推到一旁',
      emotion:'輕鬆、自主', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office desk with a water bottle and a cup of unsweetened tea in front, a diet soda can pushed aside, relaxed and in control, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['WHO 2023非糖甜味劑指引與阿斯巴甜評估','食藥署26項甜味劑'],
      layout_reason:'核心是釐清 4 個常見疑問，選 knowledge：4 張問答卡當主角，最後給減糖行動。',
      tone:'專業易懂', tone_reason:'避免恐慌也避免過度安心。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自WHO與食藥署，未點名特定品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'代糖',
    collect:{
      summary:'WHO 2023年指引不建議以非糖甜味劑控制體重；同年IARC將阿斯巴甜列為2B，JECFA維持每日容許攝取量每公斤40毫克。國內以正面表列管理26項甜味劑。零卡飲料普及，「代糖能減重嗎、會致癌嗎」是常見疑問，溝通重點在降低甜味依賴。',
      objective_data:[
        {item:'政策動向',desc:'不建議用於控制體重：WHO於2023年5月15日發布指引，不建議使用非糖甜味劑控制體重或降低非傳染性疾病風險，屬有條件建議，不適用於已有糖尿病者。',tag:'官方統計',source:{name:'WHO：非糖甜味劑指引',url:'https://www.who.int/news/item/15-05-2023-who-advises-not-to-use-non-sugar-sweeteners-for-weight-control-in-newly-released-guideline'}},
        {item:'盛行率／發生率',desc:'每公斤體重40毫克：WHO於2023年7月14日公布，IARC將阿斯巴甜列為2B（可能致癌），JECFA維持每日容許攝取量每公斤體重0至40毫克。',tag:'官方統計',source:{name:'WHO：Aspartame hazard and risk assessment',url:'https://www.who.int/news/item/14-07-2023-aspartame-hazard-and-risk-assessment-results-released'}},
        {item:'年度趨勢方向',desc:'26項甜味劑：食藥署2023年12月週報指出，國內可用於食品加工的甜味劑共26項，採正面表列管理，混用多種時用量比例總和不得大於1。',tag:'官方統計',source:{name:'食藥署：藥物食品安全週報第950期',url:'https://www.fda.gov.tw/tc/PublishOtherEpaperContent.aspx?id=1485&tid=4553'}},
        {item:'好發族群年齡層',desc:'9至14罐：WHO舉例，70公斤成人每天需喝超過9至14罐含200-300毫克阿斯巴甜的無糖飲料，才會超過每日容許攝取量。',tag:'官方統計',source:{name:'WHO：Aspartame hazard and risk assessment',url:'https://www.who.int/news/item/14-07-2023-aspartame-hazard-and-risk-assessment-results-released'}}
      ],
      product_view:['機會：減糖與體重管理、糖尿病預防相關，可作為健康管理內容。','機會：「2B是什麼」是一般民眾常見疑問，適合闢謠。','風險：避免點名特定飲料品牌；不宜將2B寫成「會致癌」。'],
      marketing_view:['機會：夏季飲料旺季、國際組織發布新評估時是溝通時點。','機會：Q&A形式易於傳播。','風險：WHO指引為有條件建議，學界有不同意見，避免絕對化。'],
      alert_level:'low',
      alert_reason:'屬長期飲食議題，2023年國際評估後討論度高；無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('用代糖來減重，長期效果並不好，不建議這樣做','DATA_FACTUAL_ACCURACY','omitted_qualifier',
          'WHO指引為「有條件建議」且不適用於已有糖尿病者，口語版省略了這些前提，語氣比原指引更肯定。','low','no',
          null,'no','clarify','屬建議強度表達。',
          '用代糖來減重，長期效果有限，WHO有條件地不建議這樣做（糖尿病患者除外）'),
        F('偶爾喝零卡飲料不必過度擔心，但不宜當成每天的水分來源','SOURCE_EVIDENCE','unsourced_advice',
          '此飲用建議為本文歸納，WHO與食藥署資料未直接提出「偶爾喝」的頻率建議。','low','no',
          null,'no','clarify','屬建議來源說明。',
          '依目前評估一般攝取量不易超過每日容許量，但WHO不建議依賴代糖控制體重',
          ['零卡飲料偶爾喝沒關係，別當水喝']),
        F('國內食藥署以正面表列管理26項甜味劑','CURRENCY_TIMELINESS','figure_subject_to_change',
          '甜味劑品項數會隨標準修正變動，文中未標示時間點（2023年12月）。','low','no',
          null,'no','clarify','屬時間點標示。',
          '國內食藥署以正面表列管理甜味劑（2023年12月為26項）')
      ],
      card:[
        F('IARC 列 2B','TERMINOLOGY_LANGUAGE','jargon',
          '「2B」對一般讀者不易理解，宜補「可能致癌、證據有限」。','low','no',
          null,'no','clarify','屬易讀性。',
          'IARC 列 2B（證據有限）'),
        F('不建議用來控制體重','DATA_FACTUAL_ACCURACY','omitted_qualifier',
          '未標示為有條件建議、糖尿病患者除外。','low','no',
          null,'no','clarify','受字數限制。',
          '有條件不建議用來控制體重')
      ]
    },
    title_alts:[
      '零卡飲料能幫助減重嗎？WHO：不建議用代糖控制體重',
      '喝零卡可樂比較健康嗎？代糖的3個真相',
      '阿斯巴甜2B是什麼？代糖4個常見問題'
    ],
    card_title_alts:[
      ['零卡飲料比較健康？','代糖 4 個問題一次看'],
      ['阿斯巴甜 2B？','危害分類不等於風險'],
      ['減糖','從習慣淡一點開始']
    ],
    data_addon:[
      'WHO非糖甜味劑指引不涵蓋低熱量糖與糖醇（polyols）。',
      '阿斯巴甜除鮮乳及保久乳外，可於各類食品視需要適量使用，限食品製造或加工必須時（食藥署）。',
      '學界對WHO指引仍有討論，部分研究認為其過度依賴觀察性研究。'
    ],
    cta:'這週點飲料時試著把甜度降一級，口渴時先喝一杯白開水。'
  });
})();
