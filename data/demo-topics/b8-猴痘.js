/* v6 示範主題：猴痘（M 痘）（B8 傳染病防治）
   查證日期：2026-11-20。數據來源：疾管署開放資料 Age_County_Gender_MPXV（依發病年份，2026-11-20 下載）、
   疾管署傳染病統計資料查詢系統（2025年總數）、疾管署新聞稿（2026-02-10，衛福部網站轉載）。只用全年統計，不寫當週疫情。
   參考方向：健康智庫〈猴痘會大流行嗎？〉2022/05。 */
(function(){
  const REFS = [
    {title:'傳染病統計資料查詢系統：M痘',source:'衛生福利部疾病管制署',url:'https://nidss.cdc.gov.tw/nndss/disease?id=MPXV'},
    {title:'新春巧遇情人節，籲請民眾落實安全防護及主動篩檢、風險族群儘早完成2劑M痘疫苗接種',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-85413-1.html'}
  ];
  const TABLE = {headers:['項目','說明'], rows:[
    ['公費接種對象','近1年有風險性行為者、過去曾罹患性病，或性接觸對象有前述情形者'],
    ['劑數','共2劑，符合條件者儘速完成2劑'],
    ['接種地點','全國312家合作醫療院所提供公費接種'],
    ['不符公費但有風險','經醫師評估，可至8家旅遊醫學合約醫院自費接種']
  ]};
  const TAGS = ['M痘','猴痘','M痘疫苗','性健康','傳染病防治'];

  const DP_COUNT = {id:'dp-mpox-count', type:'data_scope', title:'全年數字與累計數字',
    desc:'疾管署2026年2月新聞稿公布自2022年6月列為法定傳染病以來累計518例（截至2026年2月9日）；本文使用依發病年份的全年統計（2025年64例）。兩者時間範圍不同，AI 沒有把累計數當成年度數字。',
    current:'2025年M痘確定病例64例（疾管署，依發病年份）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'64 例', value:'2025 年全年', note:'疾管署傳染病統計（目前採用）'},
      {label:'518 例', value:'2022/6–2026/2/9 累計', note:'疾管署新聞稿，483例本土、35例境外'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'M痘（猴痘）病例逐年下降：2025年64例，風險族群仍應完成2劑公費疫苗',
    update_date:'2026/11/20',
    intro:'依疾病管制署統計（依發病年份），M痘在2023年全年確定病例達355例後逐年下降，2024年93例、2025年64例。疾管署指出，WHO評估一般民眾傳播風險為低，但有風險性行為族群、特別是無固定性伴侶者，傳播風險為中；符合條件者可至全國312家合作醫療院所接種公費M痘疫苗，並應完成2劑。',
    sections:[
      {heading:'M痘疫苗接種重點',format:'table',table:TABLE},
      {heading:'國際疫情背景',format:'bullets',items:[
        '疾管署引述，2025年全球98國報告5萬2千餘例M痘病例、215例死亡。',
        '非洲病例以Ib型為主，歐洲部分國家也出現Ib型社區傳播；非洲以外病例仍以IIb型為主。',
        '出國前可參考疾管署國際旅遊疫情建議。'
      ]},
      {heading:'自我保護',format:'bullets',items:[
        '性行為時全程正確使用保險套。',
        '符合公費條件者儘速完成2劑疫苗接種。',
        '有疑似症狀或接觸史時，儘速就醫並告知醫師。'
      ]}
    ],
    think_tank_view:'M痘病例逐年下降，與高風險族群積極接種疫苗、提高警覺有關。對一般民眾而言傳播風險低，不需要恐慌；對有風險行為的族群來說，完成2劑疫苗是最直接的保護，也不用擔心費用，公費資源就在身邊。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'病例數引自疾管署並標明依發病年份，疫苗資訊引自疾管署新聞稿，避免污名化用語，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['2023年355例、2024年93例、2025年64例（疾管署開放資料／NIDSS）','疫苗對象與312家院所取自疾管署2026-02-10新聞稿'],
      layout_reason:'先用表格整理疫苗重點，再說明國際背景，最後給自我保護方式。',
      tone:'專業易懂', tone_reason:'去污名化、強調資源可近。',
      to_verify:['2劑間隔未在引用新聞稿中說明']},
    decision_points:[DP_COUNT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'M痘還需要擔心嗎？病例下降，但這些人建議打2劑疫苗',
    update_date:'2026/11/20',
    intro:'2022年M痘（以前叫猴痘）在全球引起關注。疾管署統計，台灣2023年有355例，之後逐年減少，2025年降到64例。對大多數人來說，被傳染的風險很低；但如果近一年有風險性行為，建議盡快打完2劑公費疫苗。',
    sections:[
      {heading:'誰可以打公費疫苗？',format:'table',table:TABLE},
      {heading:'國外的情況',format:'bullets',items:[
        '2025年全球有98個國家回報病例。',
        '非洲有另一型（Ib型）在流行，出國前可以先查疾管署的旅遊建議。'
      ]},
      {heading:'保護自己',format:'bullets',items:[
        '性行為全程戴保險套。',
        '符合條件就去打疫苗，2劑都要打完。',
        '身體不舒服就醫時，主動說明接觸史。'
      ]}
    ],
    think_tank_view:'疫苗資源很充足，全國有300多家醫院診所可以打。符合條件的人，不用猶豫，早點完成2劑最安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，語氣親切且避免污名化，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「還需要擔心嗎」的疑問帶出數據與疫苗。', tone:'生活親切', tone_reason:'降低恐慌與污名。', to_verify:[]},
    decision_points:[DP_COUNT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'M痘：2025年64例，風險族群打2劑',
    update_date:'2026/11/20',
    intro:'M痘全年病例由2023年355例降至2025年64例。風險族群可至312家院所接種公費疫苗。',
    sections:[
      {heading:'疫苗重點',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '全程使用保險套。',
        '完成2劑。'
      ]}
    ],
    think_tank_view:'一般民眾風險低，風險族群完成2劑。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為疫苗與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_COUNT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'猴痘（M 痘）', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'M 痘病例逐年下降，2025 年 64 例', primary_visual:'64 例', secondary_message:'風險族群完成 2 劑公費疫苗', action_priority:'戴套、接種 2 劑'},
    headline_hook:'M 痘還要擔心嗎？', headline_main:'風險族群完成 2 劑疫苗', title_accent:'2 劑疫苗',
    primary_stat:{kicker:'2025 年・全年', value:'64 例', label:'M 痘確定病例', note:'疾管署｜依發病年份'},
    chart:{type:'bar', title:'M 痘全年確定病例（例）', points:[
      {label:'2022', value:4, display:'4'},
      {label:'2023', value:355, display:'355'},
      {label:'2024', value:93, display:'93'},
      {label:'2025', value:64, display:'64', highlight:true}
    ], note:'疾管署傳染病統計｜2022 年自 6 月列為法定傳染病'},
    secondary_stats:[
      {value:'312 家', label:'公費疫苗合作院所'},
      {value:'2 劑', label:'符合條件者儘速完成'}
    ],
    action_title:'這樣保護自己',
    action_cards:[
      {key:'套', text:'性行為全程正確使用保險套'},
      {key:'打', text:'符合公費條件者完成 2 劑疫苗'},
      {key:'查', text:'疾管署 M 痘專區查合作院所'},
      {key:'醫', text:'疑似症狀就醫，主動告知接觸史'}
    ],
    carousel_suggestion:{reason:'若想把趨勢、疫苗資格與國際疫情分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'M 痘病例下降', headline_main:'2025 年全年 64 例'},
      {layout_type:'knowledge', headline_hook:'誰可以打公費疫苗？', headline_main:'M 痘疫苗資格'},
      {layout_type:'action', headline_hook:'保護自己', headline_main:'戴套、完成 2 劑'}]},
    hashtags:['M痘','猴痘','M痘疫苗','性健康'],
    sources:['衛生福利部疾病管制署'],
    illustration_category:'virus-infection',
    illustration:{topic:'M痘疫苗接種', audience:'有風險行為的成年人', scene:'一位年輕成人在診所接種疫苗，護理師在旁說明第二劑的時間',
      emotion:'自在、被尊重', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young adult receiving a vaccine at a clinic while a nurse explains when to return for the second dose, respectful and relaxed, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['2022-2025年全年病例（疾管署開放資料／NIDSS）','疫苗資訊取自疾管署2026-02-10新聞稿'],
      layout_reason:'關鍵訊息是「病例下降但風險族群仍需接種」，選 data：全年病例當主角，趨勢放右側，疫苗資源退到第二層，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'去污名化。',
      to_verify:['2022年僅6月後資料']},
    decision_points:[Object.assign({}, DP_COUNT, {current:'64 例｜2025 年全年'})],
    content_check_note:'病例數與疫苗資訊引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'猴痘（M 痘）',
    collect:{
      summary:'M痘自2022年列為法定傳染病，2023年全年355例後逐年下降，2025年64例；WHO評估一般民眾風險低、有風險性行為族群風險為中，疾管署提供312家院所公費疫苗，「風險族群完成2劑、全程戴套」是性健康議題的延伸溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'64例：依疾管署傳染病統計（依發病年份），2025年M痘確定病例64例，其中本土57例、境外移入7例。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（M痘）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=MPXV'}},
        {item:'年度趨勢方向',desc:'355例：2023年M痘全年確定病例355例為高峰，2024年降至93例、2025年再降至64例，自2022年6月至2026年2月9日累計518例。',tag:'官方統計',source:{name:'衛生福利部：風險族群儘早完成2劑M痘疫苗接種',url:'https://mohw.gov.tw/cp-16-85413-1.html'}},
        {item:'政策動向',desc:'312家合作醫療院所：疾管署提供符合條件者公費M痘疫苗，對象包括近1年有風險性行為者、曾罹患性病者或其性接觸對象，並呼籲儘速完成2劑。',tag:'官方統計',source:{name:'衛生福利部：風險族群儘早完成2劑M痘疫苗接種',url:'https://mohw.gov.tw/cp-16-85413-1.html'}},
        {item:'好發族群年齡層',desc:'近8成為30至44歲：依疾管署開放資料，2025年64例中30至44歲共49例，疾管署2026年1月新增病例亦均為本國籍青壯年男性。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（M痘）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=MPXV'}}
      ],
      product_view:['機會：可從整體性健康角度提供疫苗資源資訊。','風險：議題高度敏感，避免任何核保歧視或污名化暗示。','風險：不可將疫苗接種與保險商品連結做行銷。'],
      marketing_view:['機會：情人節、國際旅遊旺季前是溝通時點。','機會：「一般民眾風險低」能降低不必要的恐慌。','風險：避免點名特定族群造成標籤化。'],
      alert_level:'low',
      alert_reason:'國內病例逐年下降，屬持續防治議題；國際Ib型疫情變化交由正式模式查詢。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('與高風險族群積極接種疫苗、提高警覺有關','SOURCE_EVIDENCE','causal_claim',
          '智庫觀點把病例下降歸因於疫苗接種與警覺，但疾管署新聞稿沒有提出這個因果說法，也沒有疫苗涵蓋率數據。','medium','no',
          null,'no','clarify','改為不推論因果的寫法。',
          '病例逐年下降，疾管署仍呼籲風險族群完成接種'),
        F('有疑似症狀或接觸史時，儘速就醫並告知醫師','SOURCE_EVIDENCE','detail_missing',
          '文章沒有說明M痘的疑似症狀是什麼，引用的疾管署新聞稿也未列症狀，讀者無法判斷何時該就醫。','low','yes',
          '疾管署M痘專區的症狀說明。','no','confirm','需補症狀與出處。',
          '出現皮疹等疑似症狀或有接觸史時（症狀請參考疾管署M痘專區），儘速就醫並告知醫師'),
        F('全國有300多家醫院診所可以打','TERMINOLOGY_LANGUAGE','vague_quantifier',
          '生活親切版把312家寫成「300多家」，且沒說明是公費合作院所、需符合資格。','low','no',
          null,'no','clarify','補上資格即可。',
          '全國有312家合作院所，符合資格就可以打公費疫苗'),
        F('M痘全年病例由2023年355例降至2025年64例','SOURCE_EVIDENCE','counting_basis_unstated',
          '簡潔有力版沒有說明是依發病年份統計，也沒提到2022年只有6月以後的資料。','low','no',
          null,'no','clarify','補上口徑即可。',
          'M痘全年病例（依發病年份）由2023年355例降至2025年64例')
      ],
      card:[
        F('疾管署傳染病統計｜2022 年自 6 月列為法定傳染病','SOURCE_EVIDENCE','partial_year',
          '直條圖2022年只有4例，是因為6月才列為法定傳染病，卡面讀者可能誤以為2022年疫情很輕。','low','no',
          null,'no','clarify','可在長條標籤標示部分年度。',
          '疾管署傳染病統計｜2022 年僅 6 月後'),
        F('符合條件者儘速完成','TERMINOLOGY_LANGUAGE','criteria_unstated',
          '卡面沒有說明哪些人符合公費條件，一般讀者可能以為人人都該接種。','low','no',
          null,'no','clarify','補上對象即可。',
          '有風險行為者儘速完成')
      ]
    },
    title_alts:[
      'M痘（猴痘）病例逐年下降：2025年64例，風險族群仍應完成2劑公費疫苗',
      'M痘還需要擔心嗎？病例下降，但這些人建議打2劑疫苗',
      'M痘疫苗誰可以打？公費資格、劑數與接種地點'
    ],
    card_title_alts:[
      ['M 痘還要擔心嗎？','風險族群完成 2 劑疫苗'],
      ['病例逐年下降','2025 年全年 64 例'],
      ['公費疫苗','全國 312 家院所']
    ],
    data_addon:[
      'M痘全年確定病例：2022年4例（6月起）、2023年355例、2024年93例、2025年64例（疾管署，依發病年份）。',
      '2022年6月至2026年2月9日累計518例（483例本土、35例境外移入）。',
      '疾管署引述：2025年全球98國報告5萬2千餘例、215例死亡。'
    ],
    cta:'符合公費條件的你，上疾管署M痘專區查合作院所，完成2劑接種。'
  });
})();
