/* v6 示範主題：心理諮商與求助管道（B5 心理健康與精神疾患）
   查證日期：2026-11-20。數據來源：衛福部 115-01-08「115年續推青壯世代心理健康支持方案」、115-09-12 世界自殺防治日記者會新聞稿（社區心理衛生中心、諮商據點、專線）、
   鏡週刊轉載健康醫療網 2026-09-15（115年1–8月方案服務量）、衛福部 108-07-01 1925安心專線新聞稿。
   參考方向：健康智庫〈精神疾患－心理諮商〉2025/03、〈情緒找不到出口？我們聽你說〉2023/08、〈諮商、臨床心理師〉2023/05。 */
(function(){
  const P115 = 'https://www.mohw.gov.tw/cp-16-85046-1.html';
  const SP = 'https://mohw.gov.tw/cp-16-87918-1.html';
  const MM = 'https://www.mirrormedia.mg/external/healthnews_69733';
  const REFS = [
    {title:'健康「心」生活！115年續推青壯世代心理健康支持方案',source:'衛生福利部',url:P115},
    {title:'世界自殺防治日記者會「改變自殺敘事–綻放韌性 共築未來」',source:'衛生福利部',url:SP},
    {title:'青壯世代心理健康支持方案逾5.7萬人使用 衛福部：求助是改變開始',source:'鏡週刊（健康醫療網）',url:MM},
    {title:'安心專線改4碼更好記! 1925依舊愛我 持續服務你和我',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48244-1.html'}
  ];
  const TABLE = {headers:['管道','適合誰、怎麼用'], rows:[
    ['1925安心專線','24小時免付費，想立即找人說話或情緒危機時'],
    ['男性關懷專線0800-013-999','不限議題，有心理困擾都可撥打'],
    ['青壯世代免費心理諮商','15至45歲每人3次，至「青壯年的心有我傾聽」網站查合作機構'],
    ['社區心理衛生中心、諮商據點','全台75處中心、396處據點，提供諮詢與轉介'],
    ['身心科、精神科門診','症狀影響睡眠、工作或生活，需要診斷與治療時']
  ]};
  const TAGS = ['心理諮商','求助管道','1925安心專線','免費心理諮商','心理健康'];

  const DP_PERIOD = {id:'dp-cs-period', type:'data_version', title:'方案使用人數有兩個統計區間',
    desc:'衛福部115年1月新聞稿：113年8月至114年10月底逾8萬人使用；衛福部115年9月記者會：115年1至8月逾5.7萬人、約14萬人次。兩者期間不同，AI 沒有替你決定要用哪一個。',
    current:'115年1至8月逾5.7萬人（衛福部記者會）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'逾5.7萬人', value:'115年1–8月', note:'衛福部2026年9月記者會（目前採用）'},
      {label:'逾8萬人', value:'113年8月–114年10月底', note:'衛福部115年1月新聞稿'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'心情卡關找誰談？心理諮商與求助管道一次看',
    update_date:'2026/11/20',
    intro:'心理諮商不是「有病才去」，而是在壓力、情緒或關係卡關時，和專業人員一起整理、找出因應方法。衛福部「青壯世代心理健康支持方案」提供15至45歲每人3次免費心理諮商，衛福部2026年9月表示，115年1至8月已服務逾5.7萬人、約14萬人次，其中約25%經評估達風險轉介；全台另有75處社區心理衛生中心與396處心理諮商服務據點。',
    sections:[
      {heading:'5種求助管道',format:'table',table:TABLE},
      {heading:'諮商心理師、臨床心理師與精神科醫師',format:'bullets',items:[
        '諮商心理師：著重生活適應、情緒與關係議題的心理諮商。',
        '臨床心理師：除心理治療外，也進行心理衡鑑（評估）。',
        '精神科、身心科醫師：負責診斷，可開立藥物，並視需要轉介心理治療。'
      ]},
      {heading:'第一次諮商前的準備',format:'bullets',items:[
        '想一想最困擾自己的是什麼、希望改變什麼，寫下來帶去。',
        '諮商內容受專業倫理保密規範；有疑問可在第一次會談時直接詢問。',
        '和諮商師合不來可以提出或更換，找到信任的關係很重要。'
      ]}
    ],
    think_tank_view:'求助是照顧自己的能力，不是軟弱。把1925存進手機、知道免費諮商怎麼約，等需要的那一天，就能少一點猶豫、多一點支持；也記得把這些管道分享給身邊的人。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'方案人數與資源數量引自衛福部並標明期間，專線資訊引自衛福部，未使用療效保證用語，未推薦特定諮商機構。',
    ai_rationale:{basis:['115年1至8月方案服務逾5.7萬人、約25%風險轉介（衛福部2026年9月）','75處社區心理衛生中心、396處諮商據點（衛福部115年9月新聞稿）'],
      layout_reason:'先用表格整理5種求助管道，再區分不同專業人員，最後給第一次諮商的準備。',
      tone:'專業易懂', tone_reason:'讓讀者知道「有哪些路可以走」。',
      to_verify:['115年方案服務起訖日期新聞稿未載明']},
    decision_points:[DP_PERIOD]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'心裡卡卡想找人聊？這5個管道都可以',
    update_date:'2026/11/20',
    intro:'工作壓力大、感情不順、家裡的事放不下，想找人聊聊卻不知道找誰？心理諮商就是一個安全的地方。衛福部的免費心理諮商，今年1到8月已經有超過5.7萬人用過，15到45歲的人每人可以免費談3次。',
    sections:[
      {heading:'這5個管道，都可以找',format:'table',table:TABLE},
      {heading:'心理師、醫師，差在哪？',format:'bullets',items:[
        '諮商心理師：陪你聊生活、情緒和人際關係。',
        '臨床心理師：除了談話治療，也會做心理評估。',
        '精神科、身心科醫師：可以診斷、開藥，必要時再轉介心理治療。'
      ]},
      {heading:'第一次去之前',format:'bullets',items:[
        '先想想最困擾你的事，寫在手機裡帶去。',
        '諮商內容會保密，有疑問可以直接問。',
        '覺得不合適可以換諮商師，找到聊得來的很重要。'
      ]}
    ],
    think_tank_view:'找人聊聊不需要等到撐不住。先把1925存起來、查查附近的免費諮商，給自己多一個選擇。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字引自衛福部，語氣親切，未使用療效保證用語，未推薦特定諮商機構。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以生活中想找人聊的情境帶出管道、專業差異與準備。', tone:'生活親切', tone_reason:'降低求助門檻。', to_verify:[]},
    decision_points:[DP_PERIOD]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'心理求助管道：5種一次看',
    update_date:'2026/11/20',
    intro:'衛福部青壯世代方案提供15至45歲每人3次免費心理諮商，115年1至8月已服務逾5.7萬人。',
    sections:[
      {heading:'5種管道',format:'table',table:TABLE},
      {heading:'專業差異',format:'bullets',items:[
        '心理師：諮商、心理治療與衡鑑。',
        '醫師：診斷、開藥、轉介。'
      ]},
      {heading:'準備',format:'bullets',items:[
        '寫下困擾與期待。',
        '不合適可更換諮商師。'
      ]}
    ],
    think_tank_view:'求助是照顧自己的能力；先認識管道，需要時就不會猶豫。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字引自衛福部，未使用療效保證用語，未推薦特定機構。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為管道、差異、準備三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_PERIOD]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'心理諮商與求助管道', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'心情卡關，有很多管道可以找', primary_visual:'逾 5.7 萬人', secondary_message:'15–45 歲每人 3 次免費心理諮商', action_priority:'存專線、約諮商、找門診'},
    headline_hook:'心情卡關找誰談？', headline_main:'心理求助管道一次看', title_accent:'一次看',
    hero_message:'求助是照顧自己', hero_support:'不用撐到受不了，現在就可以開始',
    primary_stat:{value:'逾 5.7 萬人', label:'115 年 1–8 月使用免費心理諮商', note:'衛福部青壯世代心理健康支持方案'},
    action_title:'這 4 個管道',
    action_cards:[
      {key:'線', text:'1925 安心專線，24 小時免付費'},
      {key:'約', text:'15–45 歲預約 3 次免費心理諮商'},
      {key:'區', text:'全台 75 處社區心理衛生中心'},
      {key:'醫', text:'影響生活時到身心科、精神科'}
    ],
    notice:'男性關懷專線 **0800-013-999**，不限議題都可撥打。',
    carousel_suggestion:{reason:'若想把各管道、專業人員差異與準備分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'action', headline_hook:'心情卡關找誰談？', headline_main:'5 種求助管道'},
      {layout_type:'knowledge', headline_hook:'心理師與醫師', headline_main:'差在哪裡？'},
      {layout_type:'action', headline_hook:'第一次諮商', headline_main:'出發前的 3 個準備'}]},
    hashtags:['心理諮商','求助管道','1925安心專線','心理健康'],
    sources:['衛生福利部'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'心理諮商', audience:'15 至 45 歲青壯族群', scene:'一位年輕人拿著手機查詢諮商預約網站，背景是溫暖明亮的諮商室門口',
      emotion:'踏出第一步、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young adult holding a phone browsing a counselling booking website, standing at the door of a warm, bright counselling room, first-step and reassured mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['115年1至8月方案服務逾5.7萬人（衛福部2026年9月）'],
      layout_reason:'選 action：4 個求助管道當主角，使用人數放下方，以男性關懷專線收尾。',
      tone:'專業易懂', tone_reason:'實用、降低求助門檻。',
      to_verify:[]},
    decision_points:[Object.assign({}, DP_PERIOD, {current:'逾 5.7 萬人（115 年 1–8 月）'})],
    content_check_note:'數字與資源引自衛福部，未使用療效保證用語，未推薦特定機構。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'心理諮商與求助管道',
    collect:{
      summary:'衛福部免費心理諮商方案使用人數持續成長，社區心理衛生中心與諮商據點陸續布建，但民眾對「去哪裡求助」仍不熟悉；「認識管道、降低求助門檻」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'115年1至8月逾5.7萬人使用免費心理諮商：衛福部2026年9月記者會指出，青壯世代方案今年服務約14萬人次，約25%經評估達風險轉介。',tag:'官方統計',source:{name:'鏡週刊（健康醫療網）：青壯世代心理健康支持方案逾5.7萬人使用',url:MM}},
        {item:'年度趨勢方向',desc:'合作機構由523家增至616家：衛福部115年1月新聞稿指出，方案自113年8月上路，到114年10月底已逾8萬人、超過20萬人次使用。',tag:'官方統計',source:{name:'衛生福利部：115年續推青壯世代心理健康支持方案',url:P115}},
        {item:'政策動向',desc:'75處社區心理衛生中心：衛福部2026年9月表示，全台另有396處心理諮商服務據點，男性關懷專線自114年8月底起不限議題服務。',tag:'官方統計',source:{name:'衛生福利部：世界自殺防治日記者會',url:SP}},
        {item:'好發族群年齡層',desc:'18至30歲約47%、31至45歲約48.4%：衛福部說明115年1至8月方案使用者年齡結構，15至17歲約4.6%。',tag:'官方統計',source:{name:'鏡週刊（健康醫療網）：青壯世代心理健康支持方案逾5.7萬人使用',url:MM}}
      ],
      product_view:['機會：在保戶服務中整理心理求助管道，是低成本、高價值的關懷內容。','機會：員工協助方案可結合政府免費諮商資源。','風險：不推薦特定諮商機構；避免把心理諮商包裝成保險附加給付，依實際條款說明。'],
      marketing_view:['機會：「心情卡關找誰談？」懶人包適合社群分享與收藏。','機會：10月心理健康月與年底壓力高峰是溝通時點。','風險：資源資訊須定期更新（方案年度、專線時段）。'],
      alert_level:'medium',
      alert_reason:'免費心理諮商方案於2026年延續且使用量成長，資訊具即時實用性。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('其中約25%經評估達風險轉介','MEDICAL_INTERPRETATION','statistic_may_alarm',
          '「風險轉介」未說明意思，讀者可能誤以為四分之一使用者有嚴重問題而卻步。','low','no',
          null,'no','clarify','補一句說明即可。',
          '其中約25%經評估需要轉介其他醫療或心理資源'),
        F('諮商內容受專業倫理保密規範','MEDICAL_INTERPRETATION','missing_exception',
          '沒有說明保密的例外（如有立即危險時），讀者可能誤解為任何情況都絕對保密。','low','no',
          null,'no','clarify','補一句例外即可。',
          '諮商內容受專業倫理保密規範（有立即安全危險時例外）',
          ['諮商內容會保密']),
        F('臨床心理師：除心理治療外，也進行心理衡鑑（評估）','TERMINOLOGY_LANGUAGE','term_unexplained',
          '「心理衡鑑」對一般讀者陌生，括號說明仍抽象。','low','no',
          null,'no','clarify','可舉例。',
          '臨床心理師：除心理治療外，也進行心理衡鑑（例如用量表與測驗評估情緒、認知狀態）',
          ['臨床心理師：除了談話治療，也會做心理評估']),
        F('15至45歲每人3次，至「青壯年的心有我傾聽」網站查合作機構','CURRENCY_TIMELINESS','service_period_unstated',
          '未標示方案年度與名額限制，資訊流傳後可能過期。','low','yes',
          '衛福部當年度方案公告。','yes','confirm','方案逐年檢討。',
          '15至45歲每人3次（115年方案），至「青壯年的心有我傾聽」網站查合作機構')
      ],
      card:[
        F('15–45 歲預約 3 次免費心理諮商','CURRENCY_TIMELINESS','service_period_unstated',
          '卡面未標示方案年度，轉傳後可能已過期。','low','yes',
          '當年度方案公告。','yes','confirm','方案逐年檢討。',
          '15–45 歲預約 3 次免費諮商（115 年方案）'),
        F('115 年 1–8 月使用免費心理諮商','DATA_FACTUAL_ACCURACY','partial_year',
          '主數字只到8月，讀者可能以為是全年人數。','low','no',
          null,'no','clarify','已標期間。',
          '115 年 1–8 月（未滿全年）使用免費心理諮商')
      ]
    },
    title_alts:[
      '心情卡關找誰談？心理諮商與求助管道一次看',
      '心裡卡卡想找人聊？這5個管道都可以',
      '15–45歲免費心理諮商怎麼約？5種求助管道整理'
    ],
    card_title_alts:[
      ['心情卡關找誰談？','心理求助管道一次看'],
      ['求助是照顧自己','5 種管道都可以找'],
      ['15–45 歲','3 次免費心理諮商怎麼約']
    ],
    data_addon:[
      '衛福部另有「心快活」心理健康學習平台，以及「謝謝你跟我說」青少年文字協談服務。',
      '衛福部：114年方案初步評估，完成3次諮商者整體情緒困擾與生活品質呈現改善。',
      '方案亦納入通訊心理諮商服務。'
    ],
    cta:'現在就把1925存進手機通訊錄，再花3分鐘到「青壯年的心有我傾聽」網站看看離你最近的合作機構。'
  });
})();
