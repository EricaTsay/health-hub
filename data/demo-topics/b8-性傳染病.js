/* v6 示範主題：性傳染病（梅毒等）（B8 傳染病防治）
   查證日期：2026-11-20。數據來源：疾管署新聞稿（2026-03-10，衛福部網站轉載）、疾管署開放資料 Age_County_Gender_090（梅毒，依診斷年份）、
   疾管署傳染病統計資料查詢系統（先天性梅毒2025年總數）。
   參考方向：健康智庫〈性傳染病防治新服務與篩檢上線〉2025/07。 */
(function(){
  const REFS = [
    {title:'疾管署呼籲年輕族群善用「性健康友善資源地圖」 保護隱私並守護自身健康',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-85742-1.html'},
    {title:'傳染病統計資料查詢系統：梅毒',source:'衛生福利部疾病管制署',url:'https://nidss.cdc.gov.tw/nndss/disease?id=090'},
    {title:'傳染病統計資料查詢系統：先天性梅毒',source:'衛生福利部疾病管制署',url:'https://nidss.cdc.gov.tw/nndss/disease?id=091'}
  ];
  const TABLE = {headers:['疾病','2025年新增','較2024年'], rows:[
    ['梅毒','9,935例','上升2%'],
    ['梅毒（15至24歲）','1,892例','上升8%'],
    ['淋病','6,417例','下降16%'],
    ['愛滋病毒感染','879例','下降12%']
  ]};
  const TAGS = ['性傳染病','梅毒','淋病','性健康','保險套'];

  const DP_BASIS = {id:'dp-sti-basis', type:'data_scope', title:'梅毒人數統計口徑',
    desc:'疾管署新聞稿公布2025年梅毒新增9,935例；開放資料（依診斷年份）同年也是9,935例。過去幾年人數介於9,400至9,900例之間起伏，「持續增加」是疾管署的說法，逐年看並非每年都上升。AI 保留官方說法，供你決定是否補充逐年數字。',
    current:'2025年梅毒新增9,935例，較2024年略升2%（疾管署）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'9,935 例', value:'2025 年', note:'疾管署新聞稿（目前採用）'},
      {label:'9,737 例', value:'2024 年', note:'疾管署新聞稿'},
      {label:'9,941 例', value:'2023 年', note:'疾管署開放資料，依診斷年份'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'梅毒年增至9,935例、年輕族群升8%：性傳染病篩檢與預防一次看',
    update_date:'2026/11/20',
    intro:'疾病管制署公布，2025年梅毒新增9,935例，較2024年略升2%，其中15至24歲年輕族群新增1,892例、上升8%；同期淋病6,417例、愛滋病毒感染879例，分別下降16%與12%。疾管署指出，未戴保險套的性行為是主要傳染途徑，並在Line@疾管家建置「性健康友善資源地圖」，提供匿名篩檢與諮詢資源。',
    sections:[
      {heading:'2025年主要性傳染病',format:'table',table:TABLE},
      {heading:'篩檢與諮詢資源',format:'bullets',items:[
        'Line@疾管家「性健康友善資源地圖」可查詢匿名篩檢院所、性傳染病匿名諮詢、性健康友善門診與保險套自動服務機。',
        '性傳染病匿名諮詢專線1922（或0800-001922）。',
        '有性行為者應定期篩檢，伴侶也一起檢查。'
      ]},
      {heading:'預防與用藥提醒',format:'bullets',items:[
        '性行為全程正確使用保險套並搭配水性潤滑液。',
        '醫師專業評估下可使用doxy-PEP作為梅毒暴露後預防，但不能取代保險套與定期篩檢。',
        '疾管署不建議以抗生素作為淋病預防，也不要自行購買抗生素服用。'
      ]}
    ],
    think_tank_view:'梅毒在年輕族群持續增加，提醒我們性健康教育不能只談愛滋。保險套、定期篩檢、伴侶一起檢查，是最實際的三件事；而疾管署的匿名資源，讓尋求協助不必擔心隱私。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'病例數引自疾管署並標明年份，用藥建議引自疾管署，避免污名化用語，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['2025年梅毒9,935例、15-24歲1,892例、淋病6,417例（疾管署2026-03-10新聞稿）'],
      layout_reason:'先用表格對照各性傳染病的年度變化，再介紹資源，最後給預防與用藥提醒。',
      tone:'專業易懂', tone_reason:'性健康議題需精確、去污名化。',
      to_verify:['先天性梅毒2025年3例取自NIDSS']},
    decision_points:[DP_BASIS]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'梅毒不是過去式：年輕人增加最多，篩檢可以匿名',
    update_date:'2026/11/20',
    intro:'很多人以為梅毒是很久以前的病，其實2025年台灣新增了9,935例，比前一年還多一點；15到24歲的年輕人增加最多，上升了8%。好在現在篩檢和諮詢都可以匿名，保護自己一點都不難。',
    sections:[
      {heading:'2025年常見性傳染病',format:'table',table:TABLE},
      {heading:'去哪裡篩、問誰？',format:'bullets',items:[
        '加入Line「疾管家」，打開「性健康友善資源地圖」找匿名篩檢的地方。',
        '有問題可以打1922匿名諮詢。',
        '和另一半一起檢查最安心。'
      ]},
      {heading:'這些觀念要記得',format:'bullets',items:[
        '每次都全程戴保險套。',
        '不要自己買抗生素來吃，要讓醫師評估。',
        '預防用藥不能取代保險套和定期篩檢。'
      ]}
    ],
    think_tank_view:'性健康是自己和伴侶共同的責任。定期篩檢就像健康檢查一樣平常，不需要覺得尷尬。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，語氣親切且避免污名化，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以年輕族群的疑問帶出數據與資源。', tone:'生活親切', tone_reason:'降低篩檢門檻。', to_verify:[]},
    decision_points:[DP_BASIS]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'性傳染病：梅毒升、淋病降',
    update_date:'2026/11/20',
    intro:'2025年梅毒新增9,935例，15至24歲上升8%；淋病下降16%。全程戴套、定期篩檢。',
    sections:[
      {heading:'2025年數據',format:'table',table:TABLE},
      {heading:'資源',format:'bullets',items:[
        'Line@疾管家性健康友善資源地圖。',
        '匿名諮詢1922。'
      ]}
    ],
    think_tank_view:'保險套、定期篩檢、伴侶同檢，三件事最實在。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為數據與資源兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_BASIS]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'性傳染病（梅毒等）', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'梅毒 2025 年新增 9,935 例', primary_visual:'9,935 例', secondary_message:'15–24 歲上升 8%', action_priority:'全程戴套、定期篩檢'},
    headline_hook:'梅毒不是過去式', headline_main:'年輕族群增加最多', title_accent:'年輕族群',
    primary_stat:{kicker:'2025 年・新增', value:'9,935 例', label:'梅毒', note:'疾管署｜較 2024 年略升 2%'},
    chart:{type:'bar', title:'梅毒新增病例（例）', points:[
      {label:'2021', value:9413, display:'9,413'},
      {label:'2023', value:9941, display:'9,941'},
      {label:'2024', value:9737, display:'9,737'},
      {label:'2025', value:9935, display:'9,935', highlight:true}
    ], note:'疾管署｜依診斷年份'},
    secondary_stats:[
      {value:'+8%', label:'15–24 歲梅毒新增'},
      {value:'-16%', label:'淋病新增 6,417 例'}
    ],
    action_title:'性健康這樣顧',
    action_cards:[
      {key:'套', text:'全程正確使用保險套與水性潤滑液'},
      {key:'篩', text:'有性行為者定期篩檢，伴侶同檢'},
      {key:'查', text:'疾管家「性健康友善資源地圖」'},
      {key:'醫', text:'不自行買抗生素，讓醫師評估'}
    ],
    carousel_suggestion:{reason:'若想把各性病數據、資源與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'梅毒不是過去式', headline_main:'2025 年新增 9,935 例'},
      {layout_type:'knowledge', headline_hook:'匿名篩檢資源', headline_main:'疾管家資源地圖'},
      {layout_type:'action', headline_hook:'性健康這樣顧', headline_main:'戴套、篩檢、同檢'}]},
    hashtags:['性傳染病','梅毒','性健康','保險套'],
    sources:['衛生福利部疾病管制署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'性健康篩檢', audience:'15 至 39 歲年輕成人', scene:'一對年輕伴侶並肩看著手機上的匿名篩檢地圖，表情自在',
      emotion:'自在、互相支持', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young couple side by side looking at an anonymous testing map on a phone, relaxed and supportive, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['2025年梅毒9,935例、2024年9,737例（疾管署新聞稿）','2021、2023年取自疾管署開放資料'],
      layout_reason:'關鍵訊息是「梅毒在年輕族群增加」，選 data：梅毒人數當主角，近年趨勢放右側，年輕族群與淋病變化退到第二層，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'去污名化。',
      to_verify:['直條圖縱軸差異小，起伏不大']},
    decision_points:[Object.assign({}, DP_BASIS, {current:'9,935 例｜2025 年梅毒新增'})],
    content_check_note:'病例數引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'性傳染病（梅毒等）',
    collect:{
      summary:'2025年梅毒新增9,935例、略升2%，15至24歲年輕族群上升8%，淋病與愛滋則下降；疾管署推出Line@疾管家「性健康友善資源地圖」，「全程戴套、定期篩檢、伴侶同檢」是年輕族群值得長期溝通的性健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'近1萬例：疾管署公布2025年梅毒新增9,935例，較2024年（9,737例）略升2%，淋病新增6,417例、較前一年下降16%。',tag:'官方統計',source:{name:'衛生福利部：疾管署呼籲年輕族群善用「性健康友善資源地圖」',url:'https://mohw.gov.tw/cp-16-85742-1.html'}},
        {item:'年度趨勢方向',desc:'上升8%：15至24歲年輕族群梅毒新增1,892例，較2024年（1,754例）上升8%，為各年齡層中疾管署最關注的族群。',tag:'官方統計',source:{name:'衛生福利部：疾管署呼籲年輕族群善用「性健康友善資源地圖」',url:'https://mohw.gov.tw/cp-16-85742-1.html'}},
        {item:'政策動向',desc:'性健康友善資源地圖：疾管署於Line@疾管家建置資源地圖，可查詢匿名與自我篩檢院所、性傳染病匿名諮詢、PrEP及PEP資源與保險套自動服務機，諮詢專線1922。',tag:'官方統計',source:{name:'衛生福利部：疾管署呼籲年輕族群善用「性健康友善資源地圖」',url:'https://mohw.gov.tw/cp-16-85742-1.html'}},
        {item:'好發族群年齡層',desc:'3例先天性梅毒：依疾管署傳染病統計，2025年先天性梅毒3例，提醒孕期篩檢與伴侶同治的重要性。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（先天性梅毒）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=091'}}
      ],
      product_view:['機會：可從整體性健康與定期篩檢角度，提供年輕族群健康衛教。','風險：性傳染病議題高度敏感，避免任何核保歧視或污名化暗示。','風險：不可將篩檢結果與保險商品連結做行銷。'],
      marketing_view:['機會：情人節、畢業季等時點適合溝通性健康。','機會：「匿名、隱私」是降低年輕族群門檻的關鍵訊息。','風險：避免道德評價語氣，以健康資訊為主。'],
      alert_level:'medium',
      alert_reason:'梅毒在年輕族群持續上升，屬需持續溝通的公衛議題；適合在情人節等時點前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('醫師專業評估下可使用doxy-PEP作為梅毒暴露後預防','MEDICAL_INTERPRETATION','term_unexplained',
          '「doxy-PEP」是專業縮寫，文章沒有說明是什麼藥、在什麼時間內使用，一般讀者無法理解。','low','no',
          null,'no','clarify','補上中文說明即可。',
          '醫師專業評估下可使用doxycycline（一種抗生素）作為梅毒暴露後預防用藥（doxy-PEP）'),
        F('有性行為者應定期篩檢，伴侶也一起檢查','SOURCE_EVIDENCE','frequency_unstated',
          '專業易懂版沒有說明「定期」是多久一次，引用的疾管署新聞稿也沒有梅毒篩檢頻率，讀者無法照做。','low','yes',
          '疾管署性傳染病篩檢頻率建議。','no','confirm','建議方向正確，但缺頻率與出處。',
          '有性行為者應依醫師建議定期篩檢，伴侶也一起檢查'),
        F('比前一年還多一點','TERMINOLOGY_LANGUAGE','vague_quantifier',
          '生活親切版用「還多一點」描述2%的增幅，沒有給出具體比例。','low','no',
          null,'no','clarify','補上比例即可。',
          '比前一年多了約2%'),
        F('淋病下降16%','SOURCE_EVIDENCE','context_missing',
          '簡潔有力版只寫下降比例，沒有說明淋病仍有6,417例，讀者可能以為淋病已不需擔心。','low','no',
          null,'no','clarify','補上人數即可。',
          '淋病下降16%（仍有6,417例）')
      ],
      card:[
        F('疾管署｜依診斷年份','SOURCE_EVIDENCE','mixed_source',
          '直條圖2024、2025年取自新聞稿，2021、2023年取自開放資料，註腳沒有說明兩種來源。','low','no',
          null,'no','clarify','數字口徑一致，屬來源標示。',
          '疾管署新聞稿與開放資料｜依診斷年份'),
        F('15–24 歲梅毒新增','SOURCE_EVIDENCE','base_unstated',
          '「+8%」沒有寫出人數（1,892例），讀者無法判斷規模。','low','no',
          null,'no','clarify','補上人數即可。',
          '15–24 歲梅毒新增 1,892 例')
      ]
    },
    title_alts:[
      '梅毒年增至9,935例、年輕族群升8%：性傳染病篩檢與預防一次看',
      '梅毒不是過去式：年輕人增加最多，篩檢可以匿名',
      '性傳染病年度趨勢：梅毒升、淋病與愛滋降'
    ],
    card_title_alts:[
      ['梅毒不是過去式','年輕族群增加最多'],
      ['匿名篩檢不尷尬','疾管家資源地圖'],
      ['性健康這樣顧','戴套、篩檢、同檢']
    ],
    data_addon:[
      '梅毒新增：2021年9,413例、2023年9,941例、2024年9,737例、2025年9,935例（疾管署）。',
      '2025年先天性梅毒3例（疾管署傳染病統計資料查詢系統）。',
      '性傳染病匿名諮詢專線：1922或0800-001922。'
    ],
    cta:'加入Line@疾管家，打開「性健康友善資源地圖」，找一個自在的篩檢方式，和伴侶一起檢查。'
  });
})();
