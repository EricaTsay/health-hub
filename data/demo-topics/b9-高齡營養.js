/* v6 示範主題：高齡營養（B9 飲食營養與運動）
   查證日期：2026-11-20。數據來源：國健署2025-02-18新聞稿「防跌三步」（65歲以上人口逾460萬、超高齡社會、量六力、攝取足夠熱量與蛋白質）、國健署2020-10-06問答（成人與70歲以上蛋白質建議量、過量蛋白粉與腎臟負擔）、國健署2026-02-25新聞稿（防跌五部曲、長者肌力）。
   注意：長者營養攝取不足比率目前只查到2013-2014年等較舊調查，未採用；本題以建議量與政策為主。
   參考方向：健康智庫〈營造高齡友善飲食環境之關鍵〉2023/11。 */
(function(){
  const REFS = [
    {title:'「防跌三步」守護長者安全',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18870'},
    {title:'老年人容易營養不良，應該多吃高蛋白粉補充營養?',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=127&pid=13140'},
    {title:'防跌五招+量六力 揪出長者隱形風險',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=5020&pid=19872'}
  ];
  const TABLE = {headers:['重點','建議'], rows:[
    ['蛋白質','70歲以上每天每公斤體重1.2公克（60公斤約72公克）'],
    ['熱量','攝取足夠熱量，避免體重不明原因下降'],
    ['定期評估','每半年用「長者量六力」評估認知、行動等功能'],
    ['運動搭配','抬腿、踮腳、扶牆單腳站等肌力與平衡運動'],
    ['特殊狀況','腎功能不佳者，蛋白質攝取量請與醫師、營養師討論']
  ]};
  const TAGS = ['高齡營養','蛋白質','肌少症','長者健康','預防衰弱'];

  const PRO = {
    content_type:'健康文章',
    title:'長輩吃得夠嗎？高齡營養看蛋白質與熱量，搭配肌力防衰弱',
    update_date:'2026/11/20',
    intro:'截至2025年1月，臺灣65歲以上人口已超過460萬人、占總人口超過20%，正式邁入超高齡社會。國民健康署建議70歲以上長者每天每公斤體重攝取1.2公克蛋白質，高於一般成人的1.1公克，並提醒長者平時要攝取足夠熱量與蛋白質、定期做肌力訓練，以提升日常獨立活動能力、降低跌倒風險。',
    sections:[
      {heading:'長者營養5個重點',format:'table',table:TABLE},
      {heading:'長者為什麼容易吃不夠',format:'bullets',items:[
        '隨年齡增加肌肉量可能逐漸流失，走路變慢、上下樓梯費力。',
        '咀嚼、視力退化與多重用藥，都可能影響進食與活動。',
        '肌力不足與營養攝取不足，會增加跌倒與失能風險。'
      ]},
      {heading:'蛋白質怎麼補比較好',format:'bullets',items:[
        '優先從三餐的豆魚蛋肉類與乳品取得，分散在各餐。',
        '不必自行大量補充高蛋白粉；過多蛋白質會增加腎臟負擔。',
        '咀嚼不便時，可改變食物質地（如切碎、燉軟），必要時諮詢社區營養師。'
      ]}
    ],
    think_tank_view:'長輩的「吃少一點沒關係」，常是營養與肌力一起下滑的起點。比起買營養品，更實際的是每餐確認有一份蛋白質、每天一起做幾分鐘抬腿踮腳，再每半年量一次六力，及早看見變化。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'人口數據與建議引自國健署並標明日期，蛋白質建議量引自國健署衛教問答，未推薦特定營養補充品。',
    ai_rationale:{basis:['65歲以上人口逾460萬（國健署2025-02新聞稿）','70歲以上蛋白質每公斤1.2公克（國健署衛教問答）'],
      layout_reason:'先用表格整理營養重點，再說明長者吃不夠的原因，最後給補充蛋白質的方式。',
      tone:'專業易懂', tone_reason:'需要具體份量。',
      to_verify:['蛋白質建議量引自國健署2020年問答，宜對照國人膳食營養素參考攝取量第八版確認年齡分組']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽胃口變小、腳變沒力？長輩營養從蛋白質開始顧',
    update_date:'2026/11/20',
    intro:'台灣已經是超高齡社會，65歲以上長輩超過460萬人。很多長輩年紀大了胃口變小、牙口不好，吃得越來越少，力氣也跟著變差。國健署建議70歲以上長輩，每天每公斤體重要吃到1.2公克蛋白質，比年輕人還多一點，再搭配簡單的肌力運動，才能走得穩、少跌倒。',
    sections:[
      {heading:'長輩吃飯的5個重點',format:'table',table:TABLE},
      {heading:'為什麼長輩容易吃不夠？',format:'bullets',items:[
        '肌肉慢慢變少，走路變慢、爬樓梯很吃力。',
        '牙口不好、看不清楚、藥吃很多，都會影響吃飯。',
        '吃不夠又沒力氣，比較容易跌倒。'
      ]},
      {heading:'蛋白質這樣補',format:'bullets',items:[
        '每餐都有一份豆腐、魚、蛋或肉，再加一杯牛奶。',
        '不用自己買很多蛋白粉，吃太多反而傷腎。',
        '咬不動就切碎、燉軟，也可以問社區營養師。'
      ]}
    ],
    think_tank_view:'下次回家吃飯，看看爸媽碗裡有沒有一份蛋白質，飯後陪他們扶著椅子做幾下抬腿。小小的陪伴，就是最好的營養補給。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據與建議引自國健署並標明日期，未推薦特定營養補充品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以子女觀察爸媽胃口變小的情境切入。', tone:'生活親切', tone_reason:'給照顧長輩的子女。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'高齡營養：蛋白質每公斤1.2公克',
    update_date:'2026/11/20',
    intro:'65歲以上人口逾460萬。國健署建議70歲以上每天每公斤體重攝取1.2公克蛋白質，並搭配肌力訓練。',
    sections:[
      {heading:'營養重點',format:'table',table:TABLE},
      {heading:'風險',format:'bullets',items:[
        '肌肉流失、咀嚼退化、多重用藥。',
        '攝取不足增加跌倒與失能風險。'
      ]},
      {heading:'補充方式',format:'bullets',items:[
        '三餐分散攝取豆魚蛋肉與乳品。',
        '勿自行大量補充蛋白粉。',
        '咀嚼不便可調整質地。'
      ]}
    ],
    think_tank_view:'吃足蛋白質、做肌力訓練、定期量六力，是長者預防衰弱的三件事。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據與建議引自國健署，未推薦特定營養補充品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為重點、風險、補充三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'高齡營養', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'70 歲以上蛋白質需求比成人高', primary_visual:'1.2 公克', secondary_message:'65 歲以上人口逾 460 萬', action_priority:'吃足蛋白質、做肌力訓練'},
    headline_hook:'長輩吃得夠嗎？', headline_main:'高齡營養，從這 4 件事做起', title_accent:'這 4 件事',
    hero_message:'每公斤 1.2 公克', hero_support:'70 歲以上每日蛋白質建議量（國健署）',
    primary_stat:{value:'1.2 公克', label:'70 歲以上每公斤體重蛋白質', note:'國健署｜一般成人為 1.1 公克'},
    action_title:'長輩營養這樣顧',
    action_cards:[
      {key:'蛋', text:'每餐一份豆魚蛋肉，分散攝取'},
      {key:'乳', text:'每天搭配乳品補充蛋白質與鈣'},
      {key:'動', text:'抬腿、踮腳等肌力與平衡運動'},
      {key:'量', text:'每半年用長者量六力評估'}
    ],
    notice:'腎功能不佳者，蛋白質攝取量請**與醫師、營養師討論**。',
    carousel_suggestion:{reason:'若想把營養需求、吃不夠的原因與肌力運動分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'超高齡社會', headline_main:'65 歲以上逾 460 萬人'},
      {layout_type:'knowledge', headline_hook:'長輩為什麼吃不夠', headline_main:'3 個常見原因'},
      {layout_type:'action', headline_hook:'長輩營養', headline_main:'從這 4 件事做起'}]},
    hashtags:['高齡營養','蛋白質','肌少症','長者健康'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'elderly-care',
    illustration:{topic:'高齡營養', audience:'長者與家人', scene:'一家人一起吃飯，子女為長輩夾一塊魚，桌上有豆腐、蛋和牛奶',
      emotion:'溫暖、團聚', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A family sharing a meal, an adult child serving a piece of fish to an older parent, tofu, eggs and milk on the table, warm and together, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['70歲以上蛋白質每公斤1.2公克（國健署）'],
      layout_reason:'重點是可做的營養行動，選 action：4 個行動當主角，蛋白質建議量當背景。',
      tone:'專業易懂', tone_reason:'具體可做。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'建議引自國健署，未推薦特定營養補充品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'高齡營養',
    collect:{
      summary:'臺灣65歲以上人口已逾460萬、進入超高齡社會；國健署建議70歲以上每天每公斤體重攝取1.2公克蛋白質，並搭配肌力訓練與每半年量六力，預防肌力下降、跌倒與失能。長者常因咀嚼退化、多重用藥而吃不夠，是家庭照顧的重要議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'逾460萬人：截至2025年1月，臺灣65歲以上人口已超過460萬人、占總人口超過20%，正式成為超高齡社會。',tag:'官方統計',source:{name:'國健署：「防跌三步」守護長者安全',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18870'}},
        {item:'政策動向',desc:'每公斤體重1.2公克：國健署建議成人每天每公斤體重攝取1.1公克蛋白質，70歲以上長者為1.2公克，並提醒過多蛋白質會增加腎臟負擔。',tag:'官方統計',source:{name:'國健署：老年人應該多吃高蛋白粉補充營養?',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=127&pid=13140'}},
        {item:'好發族群年齡層',desc:'每6位長者有1位曾跌倒：國健署指出長者肌力流失、視力退化與多重用藥增加跌倒風險，建議攝取足夠熱量與蛋白質並規律肌力訓練。',tag:'官方統計',source:{name:'國健署：防跌五招+量六力',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=5020&pid=19872'}},
        {item:'年度趨勢方向',desc:'每半年量1次六力：國健署推廣「長者量六力」LINE官方帳號，建議長者每半年評估認知、行動等6大面向，及早發現肌力與營養問題。',tag:'官方統計',source:{name:'國健署：「防跌三步」守護長者安全',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18870'}}
      ],
      product_view:['機會：長者營養不足與衰弱、失能相關，可連結長照與失能保障的說明。','機會：量六力、營養諮詢轉介可作為熟齡保戶關懷服務。','風險：避免推薦特定營養補充品或蛋白粉；建議應引用國健署建議量。'],
      marketing_view:['機會：重陽節、母親節、父親節是固定溝通時點。','機會：「陪爸媽吃飯看一份蛋白質」適合子女視角內容。','風險：避免讓長輩覺得被說教，以陪伴角度切入。'],
      alert_level:'low',
      alert_reason:'屬長期高齡健康議題，無急迫時效；可配合敬老節日溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國民健康署建議70歲以上長者每天每公斤體重攝取1.2公克蛋白質','SOURCE_EVIDENCE','dated_reference',
          '蛋白質建議量引自國健署2020年衛教問答，國人膳食營養素參考攝取量已於2022年改版（第八版），文中未說明依據版本與年齡分組。','low','yes',
          '國人膳食營養素參考攝取量第八版中71歲以上蛋白質建議量。','no','confirm','需確認新版年齡分組是否仍為70歲以上。',
          '國民健康署依國人膳食營養素參考攝取量建議70歲以上長者每天每公斤體重攝取1.2公克蛋白質',
          ['國健署建議70歲以上長輩，每天每公斤體重要吃到1.2公克蛋白質','國健署建議70歲以上每天每公斤體重攝取1.2公克蛋白質']),
        F('70歲以上每天每公斤體重1.2公克（60公斤約72公克）','DATA_FACTUAL_ACCURACY','derived_figure',
          '「60公斤約72公克」為依建議量自行換算的範例，表格未標示是換算值；體重過重或過輕者以實際體重計算可能不適用。','low','no',
          null,'no','clarify','換算正確，屬表達說明。',
          '70歲以上每天每公斤體重1.2公克（例：60公斤約72公克，為換算範例）'),
        F('不必自行大量補充高蛋白粉；過多蛋白質會增加腎臟負擔','MEDICAL_INTERPRETATION','risk_scope',
          '國健署原文是指「腎功能已變差」時過量蛋白質會增加負擔；文中語氣讓人以為所有長者補充蛋白粉都會傷腎，可能造成反效果（不敢補充）。','medium','no',
          null,'no','clarify','屬風險適用範圍。',
          '不必自行大量補充高蛋白粉；腎功能已變差者過多蛋白質會增加腎臟負擔',
          ['不用自己買很多蛋白粉，吃太多反而傷腎','勿自行大量補充蛋白粉。'])
      ],
      card:[
        F('70 歲以上每日蛋白質建議量（國健署）','SOURCE_EVIDENCE','dated_reference',
          '未標示依據的膳食營養素參考攝取量版本。','low','no',
          null,'no','clarify','屬出處完整度。',
          '70 歲以上每日蛋白質建議量（國人膳食營養素參考攝取量）'),
        F('每天搭配乳品補充蛋白質與鈣','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '乳糖不耐或有特殊飲食限制的長者需替代選擇，卡面未說明。','low','no',
          null,'no','clarify','屬適用對象說明。',
          '每天搭配乳品或高鈣豆製品')
      ]
    },
    title_alts:[
      '長輩吃得夠嗎？高齡營養看蛋白質與熱量，搭配肌力防衰弱',
      '爸媽胃口變小、腳變沒力？長輩營養從蛋白質開始顧',
      '超高齡社會的餐桌：70歲以上蛋白質每公斤1.2公克'
    ],
    card_title_alts:[
      ['長輩吃得夠嗎？','高齡營養，從這 4 件事做起'],
      ['爸媽胃口變小？','蛋白質要吃夠'],
      ['每公斤 1.2 公克','長者蛋白質建議量']
    ],
    data_addon:[
      '一般成人蛋白質建議量為每天每公斤體重1.1公克（國健署）。',
      '65歲以上長者每6位就有1位曾跌倒（國健署110年調查）。',
      '咀嚼不便時可調整食物質地，必要時諮詢社區營養師。'
    ],
    cta:'下次陪爸媽吃飯時，確認每餐都有一份豆魚蛋肉，飯後一起扶著椅子做5下抬腿。'
  });
})();
