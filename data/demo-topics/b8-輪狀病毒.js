/* v6 示範主題：輪狀病毒（B8 傳染病防治）
   查證日期：2026-11-21。數據來源：衛福部／疾管署新聞稿（2025-12-23、2026-06-30）。
   輪狀病毒腸胃炎非個案通報疾病，查無全國年度病例或住院統計，未寫。
   參考方向：健康智庫〈秋冬幼兒健康守護：遠離輪狀病毒〉2026/01。 */
(function(){
  const REFS = [
    {title:'輪狀病毒疫苗將於明(2027)年1月1日納入幼兒公費疫苗接種 併同提供2劑型及3劑型疫苗',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-87058-1.html'},
    {title:'115年國家公費疫苗新政策 3箭齊發保障國人健康',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-84921-1.html'}
  ];
  const TABLE = {headers:['項目','內容'], rows:[
    ['公費開始','2027年1月1日起納入幼兒公費疫苗'],
    ['2劑型','出生滿2、4個月各1劑'],
    ['3劑型','出生滿2、4、6個月各1劑'],
    ['年齡限制','最早出生滿6週，最晚不得超過8個月，每劑最短間隔4週'],
    ['保護力','2種廠牌預防嚴重輪狀病毒腸胃炎達90%以上']
  ]};
  const TAGS = ['輪狀病毒','公費疫苗','嬰幼兒腸胃炎','新手爸媽','疫苗時程'];

  const DP_POLICY = {id:'dp-rota-policy', type:'data_version', title:'公費時程兩份新聞稿寫法不同',
    desc:'疾管署2025年12月新聞稿寫「預計116年實施」，2026年6月新聞稿明確寫「2027年1月1日實施」。兩者一致但後者較具體，AI 採用較新的寫法；實際開辦前仍可能調整。',
    current:'2027年1月1日起納入幼兒公費疫苗（疾管署2026-06-30）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'2027 年 1 月 1 日', value:'疾管署 2026-06-30', note:'較新、較具體（目前採用）'},
      {label:'116 年實施', value:'疾管署 2025-12-23', note:'行政院2025年12月18日同意納入'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'輪狀病毒疫苗2027年起公費：2劑型、3劑型怎麼選，8個月內要完成',
    update_date:'2026/11/21',
    intro:'輪狀病毒是5歲以下幼兒腸胃炎的主要原因之一，幼兒感染可能因嚴重水瀉而需住院。行政院已於2025年12月18日同意將輪狀病毒疫苗納入幼兒公費疫苗，疾管署宣布自2027年1月1日起實施，同時提供2劑型與3劑型，預計首年約12萬名幼兒受惠。兩種廠牌預防嚴重輪狀病毒腸胃炎的效果都達90%以上。',
    sections:[
      {heading:'輪狀病毒疫苗重點',format:'table',table:TABLE},
      {heading:'公費開辦前後',format:'bullets',items:[
        '公費實施前，已有16個縣市以自購或補助方式提供轄內幼兒接種，可洽戶籍地衛生局。',
        '疫苗為口服，有最小與最大接種年齡限制，超過8個月就不能再接種。',
        '世界衛生組織建議所有國家將輪狀病毒疫苗納入國家免疫接種計畫。'
      ]},
      {heading:'家長可以這樣做',format:'bullets',items:[
        '寶寶滿2個月接種其他常規疫苗時，一併和醫師討論輪狀病毒疫苗。',
        '選定2劑型或3劑型後，依時程完成全部劑次。',
        '寶寶出現嚴重水瀉、精神變差時，儘速就醫。'
      ]}
    ],
    think_tank_view:'輪狀病毒疫苗有嚴格的接種年齡窗口，錯過8個月就不能補打。2027年起公費化後，最重要的是別因為等公費而錯過時程；出生在開辦前的寶寶，可先了解戶籍地縣市是否已有補助。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'公費時程、劑型與保護力引自疾管署新聞稿並標明日期，未使用療效保證用語，未涉及具體廠牌或商品。',
    ai_rationale:{basis:['2027年1月1日公費、2劑型與3劑型時程、保護力90%以上、16縣市、首年12萬人（疾管署2026-06-30）'],
      layout_reason:'先用表格整理疫苗時程，再說明公費前後差異，最後給家長行動。',
      tone:'專業易懂', tone_reason:'疫苗時程需精確。',
      to_verify:['公費開辦細節以疾管署2027年實施公告為準','全國輪狀病毒住院人數無官方年度統計']},
    decision_points:[DP_POLICY]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'寶寶的輪狀病毒疫苗2027年起免費！8個月前要打完',
    update_date:'2026/11/21',
    intro:'輪狀病毒是讓5歲以下小朋友拉肚子的常見原因，嚴重時可能要住院。好消息是，疾管署宣布從2027年1月1日起，輪狀病毒疫苗改成公費，爸媽可以選2劑型或3劑型，兩種保護力都超過9成。',
    sections:[
      {heading:'輪狀病毒疫苗怎麼打？',format:'table',table:TABLE},
      {heading:'爸媽要注意',format:'bullets',items:[
        '這是口服疫苗，不用打針。',
        '寶寶超過8個月就不能打，一定要把握時間。',
        '2027年前出生的寶寶，可以問問所在縣市有沒有補助，目前已有16個縣市提供。'
      ]},
      {heading:'寶寶拉肚子時',format:'bullets',items:[
        '水瀉很嚴重、尿變少、沒精神，要趕快看醫生。'
      ]}
    ],
    think_tank_view:'寶寶滿2個月去打預防針時，順便問醫生輪狀病毒疫苗的事，就不會錯過時間。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自疾管署並標明日期，語氣親切，未使用療效保證用語，未涉及具體廠牌或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以公費好消息帶出時程與注意事項。', tone:'生活親切', tone_reason:'給新手爸媽閱讀。', to_verify:[]},
    decision_points:[DP_POLICY]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'輪狀病毒疫苗：2027年起公費',
    update_date:'2026/11/21',
    intro:'2027年1月1日起輪狀病毒疫苗納入幼兒公費，2劑型或3劑型，8個月內完成。',
    sections:[
      {heading:'時程',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '最早滿6週、最晚8個月。',
        '公費前可洽縣市補助。'
      ]}
    ],
    think_tank_view:'把握接種窗口，別等過了8個月。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自疾管署，未使用療效保證用語，未涉及具體廠牌或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為時程與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_POLICY]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'輪狀病毒', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'輪狀病毒疫苗 2027 年起公費', primary_visual:'90% 以上', secondary_message:'8 個月內要完成', action_priority:'滿 2 個月開始接種'},
    headline_hook:'寶寶拉肚子要住院？', headline_main:'輪狀病毒疫苗明年公費', title_accent:'明年公費',
    hero_message:'2027 年 1 月 1 日起公費', hero_support:'2 劑型、3 劑型都提供（疾管署）',
    primary_stat:{value:'90% 以上', label:'預防嚴重輪狀病毒腸胃炎', note:'疾管署｜首年預計約 12 萬名幼兒受惠'},
    action_title:'疫苗這樣打',
    action_cards:[
      {key:'2', text:'2 劑型：滿 2、4 個月各 1 劑'},
      {key:'3', text:'3 劑型：滿 2、4、6 個月各 1 劑'},
      {key:'限', text:'最早滿 6 週，最晚不超過 8 個月'},
      {key:'問', text:'公費前可洽縣市衛生局補助'}
    ],
    notice:'口服疫苗，**超過 8 個月就不能接種**，請把握時程。',
    carousel_suggestion:{reason:'若想把公費政策、劑型與縣市補助分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'輪狀病毒是什麼？', headline_main:'幼兒腸胃炎主因之一'},
      {layout_type:'action', headline_hook:'2 劑型或 3 劑型', headline_main:'8 個月內完成'},
      {layout_type:'data', headline_hook:'2027 年起公費', headline_main:'首年約 12 萬名受惠'}]},
    hashtags:['輪狀病毒','公費疫苗','嬰幼兒腸胃炎','新手爸媽'],
    sources:['衛生福利部疾病管制署'],
    illustration_category:'virus-infection',
    illustration:{topic:'嬰兒口服疫苗', audience:'新手爸媽', scene:'護理師在診間讓家長抱著的嬰兒服用口服疫苗',
      emotion:'溫柔、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A nurse giving an oral vaccine to a baby held by a parent in a clinic, gentle and reassuring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['公費時程、劑型、保護力、12萬人（疾管署2026-06-30）'],
      layout_reason:'關鍵是接種時程，選 action：兩種劑型時程與年齡限制當主角，保護力退到下方。',
      tone:'專業易懂', tone_reason:'時程要精確。',
      to_verify:['「明年公費」以2026年為基準，2027年後需改寫']},
    decision_points:[Object.assign({}, DP_POLICY, {current:'2027 年 1 月 1 日起公費'})],
    content_check_note:'內容引自疾管署並標明日期，未使用療效保證用語，未涉及具體廠牌或商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'輪狀病毒',
    collect:{
      summary:'輪狀病毒是5歲以下幼兒腸胃炎主因之一，行政院2025年12月同意納入公費，疾管署宣布自2027年1月1日起提供2劑型與3劑型幼兒公費疫苗，預計首年約12萬名幼兒受惠；「把握6週至8個月接種窗口」是新生兒家庭值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約12萬名幼兒：疾管署預計輪狀病毒疫苗納入公費後首年約12萬名幼兒受惠，輪狀病毒是5歲以下幼兒腸胃炎的主要原因之一，可能因嚴重水瀉需住院。',tag:'官方統計',source:{name:'衛生福利部：輪狀病毒疫苗將於2027年1月1日納入幼兒公費疫苗接種',url:'https://mohw.gov.tw/cp-16-87058-1.html'}},
        {item:'年度趨勢方向',desc:'16個縣市已提供：公費實施前，已有16個縣市以自購或補助方式提供轄內幼兒接種，2027年起全面納入國家公費。',tag:'官方統計',source:{name:'衛生福利部：輪狀病毒疫苗將於2027年1月1日納入幼兒公費疫苗接種',url:'https://mohw.gov.tw/cp-16-87058-1.html'}},
        {item:'政策動向',desc:'90%以上：疾管署表示2劑型與3劑型兩種廠牌併同提供，皆可預防嚴重輪狀病毒腸胃炎達90%以上，行政院已於2025年12月18日同意納入公費。',tag:'官方統計',source:{name:'衛生福利部：輪狀病毒疫苗將於2027年1月1日納入幼兒公費疫苗接種',url:'https://mohw.gov.tw/cp-16-87058-1.html'}},
        {item:'好發族群年齡層',desc:'出生滿6週至8個月：口服疫苗最小接種年齡為出生滿6週、最大不得超過8個月，2劑型於滿2、4個月，3劑型於滿2、4、6個月接種。',tag:'官方統計',source:{name:'衛生福利部：輪狀病毒疫苗將於2027年1月1日納入幼兒公費疫苗接種',url:'https://mohw.gov.tw/cp-16-87058-1.html'}}
      ],
      product_view:['機會：新生兒家庭是保障規劃關鍵時點，可搭配疫苗時程提醒服務。','機會：嬰幼兒住院醫療保障的條款說明，回應新手父母需求。','風險：疫苗屬醫療決策，避免與保險商品連結推銷或比較廠牌。'],
      marketing_view:['機會：2027年1月公費開辦前後是溝通時點。','機會：「8個月內打完」是好記的關鍵訊息。','風險：避免推薦特定廠牌疫苗。'],
      alert_level:'medium',
      alert_reason:'2027年1月公費開辦屬明確政策時點，適合在開辦前後溝通；開辦細節以疾管署公告為準。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('寶寶出現嚴重水瀉、精神變差時，儘速就醫','SOURCE_EVIDENCE','claim_without_source',
          '疾管署兩份新聞稿只談疫苗政策，沒有說明輪狀病毒腸胃炎的就醫徵兆，本句沒有對應出處。','low','yes',
          '疾管署或國健署嬰幼兒腹瀉就醫徵兆衛教。','no','confirm','建議合理，但需補出處。',
          '寶寶出現嚴重水瀉、精神變差時，儘速就醫（可參考兒科醫師建議）'),
        F('錯過8個月就不能補打','MEDICAL_INTERPRETATION','overstatement',
          '疾管署原文是「最大不得超過8個月」，智庫觀點寫成「錯過8個月就不能補打」，可能讓已開始接種但未完成的家長誤以為前面劑次白打。','low','no',
          null,'no','clarify','保留原文說法即可。',
          '最大接種年齡不得超過8個月'),
        F('兩種保護力都超過9成','COMPLIANCE_RISK','efficacy_claim',
          '生活親切版把「預防嚴重輪狀病毒腸胃炎達90%以上」簡化為「保護力超過9成」，省略了「嚴重」的範圍。','low','no',
          null,'no','clarify','補回範圍即可。',
          '兩種預防嚴重輪狀病毒腸胃炎的效果都超過9成'),
        F('2027年1月1日起輪狀病毒疫苗納入幼兒公費','CURRENCY_TIMELINESS','pending_policy',
          '公費開辦日期是預定時程，簡潔有力版沒有說明可能隨公告調整，開辦後也需要改寫。','low','yes',
          '疾管署2027年輪狀病毒公費疫苗開辦公告。','yes','confirm','政策時程可能調整。',
          '依疾管署規劃，2027年1月1日起輪狀病毒疫苗納入幼兒公費')
      ],
      card:[
        F('輪狀病毒疫苗明年公費','CURRENCY_TIMELINESS','relative_date',
          '標題用「明年」是相對時間，示範資料在2027年後再顯示就會錯誤。','medium','no',
          null,'no','clarify','改用絕對年份。',
          '輪狀病毒疫苗 2027 年公費'),
        F('預防嚴重輪狀病毒腸胃炎','MEDICAL_INTERPRETATION','scope_unstated',
          '主數字「90% 以上」沒有在標籤中說明是兩種廠牌各自的效果，也沒有提到需完成全部劑次。','low','no',
          null,'no','clarify','補上完成劑次條件。',
          '完成接種可預防嚴重輪狀病毒腸胃炎')
      ]
    },
    title_alts:[
      '輪狀病毒疫苗2027年起公費：2劑型、3劑型怎麼選，8個月內要完成',
      '寶寶的輪狀病毒疫苗2027年起免費！8個月前要打完',
      '輪狀病毒疫苗公費化：時程、年齡限制與縣市補助'
    ],
    card_title_alts:[
      ['寶寶拉肚子要住院？','輪狀病毒疫苗明年公費'],
      ['8 個月內打完','2 劑型或 3 劑型'],
      ['2027 年起公費','首年約 12 萬名受惠']
    ],
    data_addon:[
      '行政院2025年12月18日同意輪狀病毒疫苗納入幼兒公費，疾管署規劃2027年1月1日實施。',
      '2劑型：出生滿2、4個月；3劑型：出生滿2、4、6個月；最早滿6週、最晚不超過8個月，每劑最短間隔4週。',
      '公費前已有16個縣市自購或補助；首年預計約12萬名幼兒受惠。'
    ],
    cta:'寶寶滿2個月打預防針時，和醫師確認輪狀病毒疫苗的劑型與時程。'
  });
})();
