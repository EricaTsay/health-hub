/* v6 示範主題：健康職場與職場健康促進（B11 第二輪擴充）
   查證日期：2026-11-23。數據來源：衛福部／國健署〈健康職場新制上路〉（2025/07/03）、〈114年績優健康職場出爐〉（2025/12/10）、勞工健康保護規則（全國法規資料庫）。
   參考方向：健康智庫健康職場系列5篇（僅取架構）。 */
(function(){
  const REFS = [
    {title:'健康職場新制上路 與企業攜手打造健康台灣',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-16-82947-1.html'},
    {title:'職場新策略，永續勞動力 114年績優健康職場出爐 企業參與度創新高',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-16-84797-1.html'},
    {title:'勞工健康保護規則',source:'全國法規資料庫',url:'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=N0060004'}
  ];
  const TABLE = {headers:['健康職場面向','可以怎麼做'], rows:[
    ['健康檢查','依勞工健康保護規則辦理一般健檢，並追蹤三高等異常結果'],
    ['身體活動','推動站立會議、工間伸展、樓梯健走等日常活動'],
    ['健康飲食','員工餐廳與會議點心提供低油、低糖、高纖選擇'],
    ['心理健康','建立員工協助方案與主管關懷機制'],
    ['無菸職場','落實職場禁菸並提供戒菸資源']
  ]};
  const TAGS = ['健康職場','職場健康促進','員工健康','企業永續','團體保險'];

  const DP_CHECK = {id:'dp-work-check', type:'policy_change', title:'勞工健檢頻率可能修正',
    desc:'現行勞工健康保護規則：65歲以上每年1次、40至未滿65歲每3年1次、未滿40歲每5年1次。媒體報導勞動部2026年4月預告擬縮短頻率，AI 未查到正式公告生效，沿用現行規定。',
    current:'65歲以上每年、40至64歲每3年、未滿40歲每5年',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'現行規定', value:'1年／3年／5年', note:'勞工健康保護規則（目前採用）'},
      {label:'預告草案', value:'1年／2年／3年', note:'媒體報導勞動部2026年4月預告，尚未確認生效'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'健康職場怎麼做：5個面向打造員工健康與企業永續',
    update_date:'2026/11/23',
    intro:'多數人一天有超過三分之一的時間在職場，工作環境直接影響健康。國民健康署自96年起推動的「健康職場認證」，於114年轉型為「職場健康促進自主評核制度」；114年全國績優健康職場評選共有311家職場報名、65家獲獎，企業參與度創新高。依勞保局資料，113年底投保單位約63萬家，其中小型職場占98.6%，中小企業是推動健康職場的關鍵。',
    sections:[
      {heading:'健康職場的5個面向',format:'table',table:TABLE},
      {heading:'法定健檢是基本功',format:'bullets',items:[
        '依勞工健康保護規則，雇主應定期為勞工辦理一般健康檢查。',
        '現行頻率為65歲以上每年1次、40至未滿65歲每3年1次、未滿40歲每5年1次。',
        '健檢結果異常者，應安排健康指導與追蹤，而不是只發報告。'
      ]},
      {heading:'企業推動小訣竅',format:'bullets',items:[
        '從員工健檢結果找出主要風險，例如體重、血壓或久坐。',
        '小型職場可從簡單活動開始，國健署新制也為99人以下職場設計「健康促進啟動職場」。',
        '把健康促進納入企業永續（ESG）報告，並搭配團體保險規劃員工保障。'
      ]}
    ],
    think_tank_view:'健康職場不是福利加碼，而是對勞動力的長期投資。從法定健檢出發、找出員工的主要健康風險，再用日常可做的小改變累積成效，是不同規模企業都能起步的方式。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'評選家數、投保單位與制度轉型引自國健署新聞稿並標明年份，健檢頻率引自勞工健康保護規則，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['114年績優健康職場311家報名、65家獲獎（國健署2025/12/10）','113年底投保單位約63萬家、小型98.6%（國健署2025/07/03）'],
      layout_reason:'先用表格整理5個面向，再說明法定健檢與企業推動方法。',
      tone:'專業易懂', tone_reason:'對象為企業與HR，需具體可執行。',
      to_verify:['勞工健檢頻率修正草案是否已公告生效','國健署未公布累計認證家數']},
    decision_points:[DP_CHECK]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'每天待最久的地方，也能讓你更健康',
    update_date:'2026/11/23',
    intro:'一天有超過三分之一的時間在公司，辦公室其實就是第二個家。越來越多企業重視員工健康，114年國健署評選績優健康職場，就有311家職場報名、65家獲獎。全台約63萬家投保單位裡，98.6%是小型職場，就算公司不大，也能從小地方開始。',
    sections:[
      {heading:'健康職場可以這樣做',format:'table',table:TABLE},
      {heading:'公司健檢別放著不看',format:'bullets',items:[
        '公司依法要定期安排員工健康檢查。',
        '65歲以上每年1次，40到64歲每3年1次，40歲以下每5年1次。',
        '報告有紅字，記得找醫護人員諮詢、追蹤。'
      ]},
      {heading:'從小地方開始',format:'bullets',items:[
        '開會站著開、午休後一起伸展5分鐘。',
        '小公司也有國健署的「健康促進啟動職場」可以參加。',
        '問問HR公司有沒有員工協助方案或團體保險。'
      ]}
    ],
    think_tank_view:'健康不是下班後才開始的事。和同事一起爬樓梯、少點一杯含糖飲料，就是最簡單的健康職場。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署與勞工健康保護規則，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以上班族視角介紹健康職場。', tone:'生活親切', tone_reason:'給一般員工閱讀。', to_verify:['健檢頻率可能修正']},
    decision_points:[DP_CHECK]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'健康職場：5面向＋法定健檢',
    update_date:'2026/11/23',
    intro:'114年績優健康職場311家報名、65家獲獎。投保單位約63萬家，98.6%為小型職場。',
    sections:[
      {heading:'5個面向',format:'table',table:TABLE},
      {heading:'法定健檢',format:'bullets',items:[
        '65歲以上每年、40至64歲每3年、未滿40歲每5年。',
        '異常結果要追蹤。'
      ]},
      {heading:'企業起步',format:'bullets',items:[
        '從健檢結果找主要風險。',
        '小型職場可參加健康促進啟動職場。'
      ]}
    ],
    think_tank_view:'健康職場是勞動力投資，從法定健檢起步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署與勞工健康保護規則，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為面向、健檢、起步三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:['健檢頻率可能修正']},
    decision_points:[DP_CHECK]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'健康職場與職場健康促進', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'職場是推動健康最好的場域', primary_visual:'311 家', secondary_message:'98.6% 是小型職場', action_priority:'健檢、活動、飲食、心理'},
    headline_hook:'一天 1/3 在職場', headline_main:'健康職場 4 件事', title_accent:'4 件事',
    hero_message:'311 家職場報名', hero_support:'114 年全國績優健康職場評選（國健署）',
    primary_stat:{value:'311 家', label:'114 年健康職場評選報名', note:'國健署｜65 家獲獎，參與度創新高'},
    action_title:'企業可以這樣做',
    action_cards:[
      {key:'檢', text:'依法辦理員工健檢，追蹤異常結果'},
      {key:'動', text:'站立會議、工間伸展、樓梯健走'},
      {key:'食', text:'會議點心換成低糖高纖選擇'},
      {key:'心', text:'建立員工協助方案與主管關懷'}
    ],
    notice:'全台投保單位約 63 萬家，**98.6% 為小型職場**，小公司也能從簡單活動開始。',
    carousel_suggestion:{reason:'若想把法定健檢與健康促進分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'勞工健檢', headline_main:'多久要做一次'},
      {layout_type:'action', headline_hook:'健康職場', headline_main:'4 件事一起做'},
      {layout_type:'data', headline_hook:'企業參與', headline_main:'311 家報名評選'}]},
    hashtags:['健康職場','職場健康促進','員工健康','企業永續'],
    sources:['衛生福利部國民健康署','勞動部'],
    illustration_category:'general',
    illustration:{topic:'健康職場', audience:'企業員工與HR', scene:'辦公室同事在會議室旁一起做伸展操，桌上有水瓶與水果',
      emotion:'輕鬆、有活力', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'Office coworkers doing stretching exercises together next to a meeting room, water bottles and fruit on the table, relaxed and energetic, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['114年健康職場評選311家報名（國健署）','投保單位小型職場98.6%（國健署引用勞保局）'],
      layout_reason:'重點是企業可採取的行動，選 action：4 個行動當主角，報名家數當背景。',
      tone:'專業易懂', tone_reason:'對象為企業與HR。',
      to_verify:['311家為評選報名家數，非認證總數']},
    decision_points:[Object.assign({}, DP_CHECK, {current:'65 歲以上每年、40–64 歲每 3 年、未滿 40 歲每 5 年'})],
    content_check_note:'評選家數與投保單位引自國健署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'健康職場與職場健康促進',
    collect:{
      summary:'國健署推動多年的健康職場認證於114年轉型為自主評核制度，114年績優健康職場評選報名家數創新高；全台投保單位以小型職場為主，企業健康促進結合法定健檢與團體保險，是企業客戶長期適用的議題。',
      objective_data:[
        {item:'年度趨勢方向',desc:'311家職場報名：國健署114年全國績優健康職場評選共311家職場與35位推動人員報名，65家職場與6位推動人員獲獎，企業參與度創新高。',tag:'官方統計',source:{name:'衛生福利部：114年績優健康職場出爐',url:'https://www.mohw.gov.tw/cp-16-84797-1.html'}},
        {item:'好發族群年齡層',desc:'98.6%為小型職場：國健署引用勞保局資料，113年底投保單位約63萬家，大型職場占0.4%、中型職場占1%。',tag:'官方統計',source:{name:'衛生福利部：健康職場新制上路',url:'https://www.mohw.gov.tw/cp-16-82947-1.html'}},
        {item:'政策動向',desc:'自96年起推動健康職場認證：國健署於114年將其轉型為「職場健康促進自主評核制度」，並為99人以下職場新增「健康促進啟動職場」。',tag:'官方統計',source:{name:'衛生福利部：114年績優健康職場出爐',url:'https://www.mohw.gov.tw/cp-16-84797-1.html'}},
        {item:'盛行率／發生率',desc:'65歲以上勞工每年健檢1次：依勞工健康保護規則，40至未滿65歲每3年1次、未滿40歲每5年1次，費用由雇主負擔。',tag:'官方統計',source:{name:'全國法規資料庫：勞工健康保護規則',url:'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=N0060004'}}
      ],
      product_view:['機會：團體保險可結合企業健康促進方案，提供員工健康管理與保障。','機會：員工健檢結果的群體分析可作為企業客戶的加值服務。','風險：涉及員工健康資料時須注意個資保護，不可作為核保或差別待遇依據。'],
      marketing_view:['機會：每年國健署健康職場評選與ESG報告季是企業溝通時機。','機會：中小企業可做「從零開始的健康職場」懶人包。','風險：避免把健康職場簡化成商品促銷。'],
      alert_level:'low',
      alert_reason:'屬長期企業健康議題；勞工健檢頻率有修正預告，需留意正式公告。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('企業參與度創新高','DATA_FACTUAL_ACCURACY','unsupported_comparison',
          '「創新高」引自國健署新聞稿，但文中未提供往年報名家數比較，讀者無法判斷幅度。','low','no',
          null,'no','clarify','說法出自國健署。',
          '國健署表示企業參與度創新高'),
        F('並搭配團體保險規劃員工保障','COMPLIANCE_MARKETING','product_mention',
          '衛教文章直接建議團體保險，對外發布時可能被視為招攬。','medium','no',
          null,'no','clarify','屬法遵提醒。',
          '並檢視員工福利與保障規劃',
          ['問問HR公司有沒有員工協助方案或團體保險。']),
        F('現行頻率為65歲以上每年1次、40至未滿65歲每3年1次、未滿40歲每5年1次。','CURRENCY_TIMELINESS','pending_regulation',
          '勞動部已預告修正健檢頻率，文中未提醒讀者留意後續公告。','low','yes',
          '勞工健康保護規則修正是否已公告生效。','yes','confirm','預告內容尚未確認生效。',
          '現行頻率為65歲以上每年1次、40至未滿65歲每3年1次、未滿40歲每5年1次（勞動部已預告修正，請留意最新公告）。',
          ['65歲以上每年1次，40到64歲每3年1次，40歲以下每5年1次。','65歲以上每年、40至64歲每3年、未滿40歲每5年。'])
      ],
      card:[
        F('114 年健康職場評選報名','DATA_FACTUAL_ACCURACY','metric_scope',
          '311家是績優評選的報名家數，不是全國健康職場或認證總數，卡面容易被誤讀。','low','no',
          null,'no','clarify','屬口徑說明。',
          '114 年績優健康職場評選報名家數'),
        F('會議點心換成低糖高纖選擇','COMPLETENESS','vague_term',
          '「低糖高纖」未給具體例子，企業較難執行。','low','no',
          null,'no','clarify','屬表達建議。',
          '會議點心換成水果、無糖飲品')
      ]
    },
    title_alts:[
      '健康職場怎麼做：5個面向打造員工健康與企業永續',
      '每天待最久的地方，也能讓你更健康',
      '114年健康職場評選創新高：中小企業也能起步'
    ],
    card_title_alts:[
      ['一天 1/3 在職場','健康職場 4 件事'],
      ['小公司也能做','健康職場起步清單'],
      ['員工健康是投資','企業健康促進 4 招']
    ],
    data_addon:[
      '國健署預估健康職場新制每年至少3,000家企業申請，可促進超過80萬工作者健康（推估）。',
      '114年績優健康職場最高榮譽「健康職場永續卓越獎」與勞動部職業安全衛生署共同頒發。',
      '健康職場評選首度與運動部全民運動署合作，將運動企業認證納入加分項目。'
    ],
    cta:'這個月找HR或職安人員，把員工健檢的異常項目整理出來，選一項作為明年的健康促進主題。'
  });
})();
