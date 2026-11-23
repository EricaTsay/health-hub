/* v6 示範主題：憂鬱症（B5 心理健康與精神疾患）
   查證日期：2026-11-20。數據來源：衛福部 115-01-08「115年續推青壯世代心理健康支持方案」新聞稿、
   鏡週刊轉載健康醫療網 2026-09-15（衛福部世界自殺防治日記者會：115年1–8月方案服務量）、中央社 2023-07-31（衛福部引述2016–2021年健保資料）、
   聯合報 2026-07-27 引述健保署（114年精神相關疾病就醫人數）。查無114年後健保署公布的「憂鬱症」單一疾病就醫人數。
   參考方向：健康智庫〈情感性精神疾病〉2023/08。 */
(function(){
  const REFS = [
    {title:'健康「心」生活！115年續推青壯世代心理健康支持方案',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-85046-1.html'},
    {title:'青壯世代心理健康支持方案逾5.7萬人使用 衛福部：求助是改變開始',source:'鏡週刊（健康醫療網）',url:'https://www.mirrormedia.mg/external/healthnews_69733'},
    {title:'近4成年輕憂鬱未就醫 8月起免費諮商1.8萬人受惠',source:'中央社',url:'https://www.cna.com.tw/news/ahel/202307310098.aspx'},
    {title:'台灣去年因精神相關疾病就診逾170萬人 衛福部：疾病汙名化是最大挑戰',source:'聯合報',url:'https://udn.com/news/story/7266/9652507'},
    {title:'安心專線改4碼更好記! 1925依舊愛我 持續服務你和我',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48244-1.html'}
  ];
  const TABLE = {headers:['常見表現','說明'], rows:[
    ['情緒低落','大部分時間感到悲傷、空虛或易怒，持續一段時間未改善'],
    ['失去興趣','對原本喜歡的事提不起勁，不想與人互動'],
    ['身體變化','失眠或嗜睡、食慾與體重明顯改變、容易疲倦'],
    ['想法改變','注意力變差、覺得自己沒有價值或過度自責']
  ]};
  const TAGS = ['憂鬱症','心理健康','免費心理諮商','1925安心專線','求助不丟臉'];

  const DP_USE = {id:'dp-dep-program', type:'data_version', title:'免費諮商使用人數有兩個統計區間',
    desc:'衛福部115年1月新聞稿：方案自113年8月至114年10月底已逾8萬人、20萬人次使用；衛福部2026年9月記者會：115年1至8月服務超過5萬7千人、約14萬人次。兩者統計期間不同，AI 沒有替你決定要用哪一個。',
    current:'逾8萬人（113年8月至114年10月底，衛福部）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'逾8萬人', value:'113年8月–114年10月底', note:'衛福部115年1月新聞稿（目前採用）'},
      {label:'逾5.7萬人', value:'115年1–8月', note:'衛福部2026年9月記者會（媒體報導）'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'憂鬱症不是想太多：認識警訊，15–45歲可用3次免費心理諮商',
    update_date:'2026/11/20',
    intro:'憂鬱症是會影響情緒、想法與身體功能的疾病，不是意志力不足。據聯合報2026年引述健保署統計，114年因精神相關疾病就醫者達170.2萬人。衛福部「青壯世代心理健康支持方案」自113年8月上路，到114年10月底已逾8萬人、超過20萬人次使用，115年持續推動，15至45歲民眾每人可使用3次免費心理諮商。',
    sections:[
      {heading:'憂鬱症的4類常見表現',format:'table',table:TABLE},
      {heading:'可以怎麼求助',format:'bullets',items:[
        '15至45歲民眾可至衛福部「青壯年的心有我傾聽」網站查詢合作機構，預約3次免費心理諮商；113至114年用過的人，115年可再次使用。',
        '情緒困擾影響睡眠、工作或人際超過一段時間，建議到身心科或精神科就醫評估，必要時由醫師決定藥物與心理治療。',
        '需要立即傾訴時，可撥打24小時免付費的1925安心專線。'
      ]},
      {heading:'身邊的人可以這樣陪伴',format:'bullets',items:[
        '多聽少勸，不說「想開一點」「你太脆弱」，讓對方知道感受被理解。',
        '陪同就醫或一起查詢諮商資源，協助跨出第一步。',
        '留意對方是否出現強烈的無望感，必要時主動協助聯繫專業人員或1925。'
      ]}
    ],
    think_tank_view:'憂鬱症最常見的阻礙，是「再撐一下就好」的想法。衛福部方案的數據顯示，願意開口求助的人正在增加；把心理諮商當成和健康檢查一樣平常的事，是照顧自己與家人最實際的一步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'方案使用人數引自衛福部新聞稿並標明期間，就醫人數標明為媒體引述健保署，未使用療效保證用語，未涉及具體商品，已附求助專線且未描述自傷細節。',
    ai_rationale:{basis:['沿用步驟1洞察：青壯世代方案113年8月至114年10月底逾8萬人使用（衛福部）','114年精神相關疾病就醫170.2萬人（聯合報引述健保署）'],
      layout_reason:'先用表格整理4類表現，再給具體求助管道，最後教身邊的人如何陪伴。',
      tone:'專業易懂', tone_reason:'心理健康衛教需去汙名、可行動，避免恐懼訴求。',
      to_verify:['170.2萬人範圍為所有精神相關疾病，非僅憂鬱症','查無健保署公布的憂鬱症單一疾病最新就醫人數']},
    decision_points:[DP_USE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'最近總是提不起勁？認識憂鬱症，求助一點都不丟臉',
    update_date:'2026/11/20',
    intro:'心情一直很低落、對什麼都沒興趣、睡不好又很累？這可能不只是「心情不好」，而是需要被照顧的憂鬱症。衛福部的免費心理諮商方案，從113年8月到114年10月底已經有超過8萬人用過，115年也繼續辦，15到45歲的人每人有3次免費諮商。',
    sections:[
      {heading:'這些變化要留意',format:'table',table:TABLE},
      {heading:'可以找誰聊聊？',format:'bullets',items:[
        '15到45歲：上衛福部「青壯年的心有我傾聽」網站找合作機構，預約3次免費諮商；以前用過的，今年還能再用。',
        '如果已經影響睡眠、上班上課或人際關係，找身心科或精神科醫師聊聊。',
        '想馬上找人說說話，可以打1925安心專線，24小時都有人接，免費。'
      ]},
      {heading:'家人朋友可以這樣陪',format:'bullets',items:[
        '多聽少勸，別說「想開點就好」。',
        '陪他一起找諮商或陪他去看醫生。',
        '如果他說覺得活著沒有希望，請主動幫忙聯絡專業人員或1925。'
      ]}
    ],
    think_tank_view:'憂鬱不是軟弱，求助也不是麻煩別人。就像感冒會去看醫生一樣，心累了找人聊聊、找專業協助，是很正常的事。也給身邊的人多一點耐心，陪伴本身就很有力量。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'方案使用人數引自衛福部並標明期間，語氣親切但未淡化就醫必要，未使用療效保證用語，未涉及具體商品，已附求助專線且未描述自傷細節。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以生活中的低落感受帶出警訊、求助管道與陪伴方式。', tone:'生活親切', tone_reason:'給年輕族群與家人閱讀，降低求助門檻。', to_verify:['方案115年服務起訖日期以衛福部公告為準']},
    decision_points:[DP_USE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'憂鬱症：4類警訊＋3個求助管道',
    update_date:'2026/11/20',
    intro:'衛福部青壯世代心理健康支持方案自113年8月至114年10月底已逾8萬人使用，115年持續提供15至45歲每人3次免費心理諮商。',
    sections:[
      {heading:'4類警訊',format:'table',table:TABLE},
      {heading:'求助管道',format:'bullets',items:[
        '15–45歲：3次免費心理諮商（「青壯年的心有我傾聽」網站查詢）。',
        '身心科、精神科門診評估。',
        '1925安心專線，24小時免付費。'
      ]},
      {heading:'陪伴原則',format:'bullets',items:[
        '多聽少勸，不貼標籤。',
        '陪同就醫或預約諮商。'
      ]}
    ],
    think_tank_view:'認得警訊、及早求助，是面對憂鬱症最重要的兩件事；身邊的人多聽少勸、陪同就醫，就是最好的支持。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'方案使用人數引自衛福部並標明期間，未使用療效保證用語，未涉及具體商品，已附求助專線。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊、求助、陪伴三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['方案115年服務起訖日期']},
    decision_points:[DP_USE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'憂鬱症', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'憂鬱症不是想太多，可以求助', primary_visual:'逾 8 萬人', secondary_message:'15–45 歲每人 3 次免費心理諮商', action_priority:'認得警訊、預約諮商、撥打 1925'},
    headline_hook:'最近總是提不起勁？', headline_main:'憂鬱症求助 4 步驟', title_accent:'4 步驟',
    hero_message:'求助是改變的開始', hero_support:'15–45 歲每人 3 次免費心理諮商（衛福部）',
    primary_stat:{value:'逾 8 萬人', label:'已使用青壯世代免費心理諮商', note:'113 年 8 月至 114 年 10 月底，衛福部'},
    action_title:'這樣開始求助',
    action_cards:[
      {key:'察', text:'情緒低落、失去興趣持續未改善'},
      {key:'約', text:'15–45 歲預約 3 次免費心理諮商'},
      {key:'醫', text:'影響生活時到身心科評估'},
      {key:'援', text:'想找人說話，撥 1925 安心專線'}
    ],
    notice:'陪伴的人**多聽少勸**，不說「想開一點」。',
    carousel_suggestion:{reason:'若想把警訊、求助管道與陪伴分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'不是想太多', headline_main:'憂鬱症 4 類警訊'},
      {layout_type:'action', headline_hook:'15–45 歲', headline_main:'3 次免費心理諮商怎麼約'},
      {layout_type:'action', headline_hook:'身邊的人', headline_main:'陪伴憂鬱的 3 個原則'}]},
    hashtags:['憂鬱症','心理健康','免費心理諮商','1925安心專線'],
    sources:['衛生福利部'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'憂鬱症求助', audience:'15–45 歲青壯族群', scene:'一位年輕上班族坐在諮商室沙發上，對面的諮商師專心傾聽，窗外透進柔和光線',
      emotion:'被傾聽、慢慢放鬆', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young office worker sitting on a sofa in a counselling room while a counsellor listens attentively, soft light through the window, gentle and relieved mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：青壯世代方案逾8萬人使用（衛福部115年1月）'],
      layout_reason:'核心訊息是「可以求助、怎麼求助」，選 action：4 個求助步驟當主角，使用人數放下方，最後以陪伴原則收尾。',
      tone:'專業易懂', tone_reason:'去汙名、降低求助門檻。',
      to_verify:['115年方案服務起訖日期']},
    decision_points:[Object.assign({}, DP_USE, {current:'逾 8 萬人（113 年 8 月至 114 年 10 月底）'})],
    content_check_note:'使用人數引自衛福部並標明期間，未使用療效保證用語，未涉及具體商品，已附求助專線。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'憂鬱症',
    collect:{
      summary:'精神相關疾病就醫人數逐年增加，衛福部自2024年8月推出15至45歲免費心理諮商並於2026年延續，使用人數持續成長；「認得警訊、及早求助、身邊人陪伴」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'170.2萬人因精神相關疾病就醫：據聯合報2026年7月引述健保署統計，114年因精神相關疾病就醫170.2萬人（範圍含憂鬱、焦慮、思覺失調等各類精神疾病，非僅憂鬱症）。',tag:'官方統計',source:{name:'聯合報：台灣去年因精神相關疾病就診逾170萬人（引述健保署統計）',url:'https://udn.com/news/story/7266/9652507'}},
        {item:'年度趨勢方向',desc:'115年1至8月逾5.7萬人使用免費心理諮商：衛福部2026年9月世界自殺防治日記者會指出，青壯世代方案今年已服務約14萬人次，經評估達風險轉介者約占25%。',tag:'官方統計',source:{name:'鏡週刊（健康醫療網）：青壯世代心理健康支持方案逾5.7萬人使用',url:'https://www.mirrormedia.mg/external/healthnews_69733'}},
        {item:'政策動向',desc:'逾8萬人使用、115年續推：衛福部「青壯世代心理健康支持方案」自113年8月上路，到114年10月底已逾8萬人、20萬人次使用，115年持續提供15至45歲每人3次免費心理諮商，合作機構616家。',tag:'官方統計',source:{name:'衛生福利部：健康「心」生活！115年續推青壯世代心理健康支持方案',url:'https://www.mohw.gov.tw/cp-16-85046-1.html'}},
        {item:'好發族群年齡層',desc:'15至30歲精神科相關診斷增加47%：衛福部2023年引述健保資料，2016至2021年15至30歲有精神科相關診斷者由22.1萬人增至29.2萬人，年輕族群是心理健康政策的重點對象。',tag:'官方統計',source:{name:'中央社：近4成年輕憂鬱未就醫 8月起免費諮商1.8萬人受惠',url:'https://www.cna.com.tw/news/ahel/202307310098.aspx'}}
      ],
      product_view:['機會：憂鬱症常伴隨工作能力下降與長期治療，可結合員工協助方案、心理健康支持服務展現陪伴型價值。','機會：可在保戶服務中提供心理諮商資源與1925等專線資訊，強化關懷形象。','風險：避免以「心理健康險」暗示保證理賠或療效；精神疾病相關核保與理賠須依條款如實說明，避免汙名化用語。'],
      marketing_view:['機會：10月心理健康月與9月10日世界自殺防治日是固定溝通檔期。','機會：15至45歲免費心理諮商是具體、可行動的資訊，適合做成社群懶人包。','風險：避免以戲劇化、獵奇的方式描述憂鬱或自傷；內容一律附求助管道。'],
      alert_level:'medium',
      alert_reason:'免費心理諮商方案於2026年延續且使用人數持續成長，社會關注度高；適合在心理健康月與年底壓力高峰前溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('114年因精神相關疾病就醫者達170.2萬人','MEDICAL_INTERPRETATION','scope_broader_than_topic',
          '「精神相關疾病」涵蓋憂鬱、焦慮、失眠、思覺失調等，放在憂鬱症文章開頭，讀者可能以為170萬人都是憂鬱症；且這是媒體引述數字。','medium','no',
          null,'no','clarify','補一句說明統計範圍即可。',
          '114年因各類精神相關疾病（不限憂鬱症）就醫者達170.2萬人'),
        F('持續一段時間未改善','TERMINOLOGY_LANGUAGE','vague_term',
          '「一段時間」沒有具體說明，讀者難以判斷何時該就醫；臨床上常以持續兩週以上作為評估參考。','low','no',
          null,'no','clarify','可補常用的評估參考時間。',
          '持續兩週以上未改善'),
        F('15至45歲民眾每人可使用3次免費心理諮商','CURRENCY_TIMELINESS','service_period_unstated',
          '文中未寫115年方案的服務期間與名額限制，讀者可能以為長期有效或隨時都有名額。','low','yes',
          '衛福部115年方案服務起訖日期與名額說明。','yes','confirm','新聞稿未載明起訖日期。',
          '15至45歲民眾每人可使用3次免費心理諮商（服務期間與名額以衛福部公告為準）',
          ['15到45歲的人每人有3次免費諮商','15至45歲每人3次免費心理諮商']),
        F('多聽少勸，不說「想開一點」「你太脆弱」','TERMINOLOGY_LANGUAGE','tone_ok_but_incomplete',
          '只說不要說什麼，沒有提供可以怎麼說的例子，讀者實際陪伴時仍不知如何開口。','low','no',
          null,'no','clarify','補一句可替代的說法。',
          '多聽少勸，不說「想開一點」「你太脆弱」，可以改說「我在這裡，願意聽你說」')
      ],
      card:[
        F('情緒低落、失去興趣持續未改善','TERMINOLOGY_LANGUAGE','vague_term',
          '卡面未說明持續多久需要留意，讀者難以判斷。','low','no',
          null,'no','clarify','可補參考時間。',
          '情緒低落、失去興趣持續兩週以上'),
        F('15–45 歲預約 3 次免費心理諮商','CURRENCY_TIMELINESS','service_period_unstated',
          '卡面未標示方案年度與名額限制，圖卡流傳後可能在方案結束後仍被轉傳。','low','yes',
          '衛福部方案服務期間。','yes','confirm','新聞稿未載明起訖日期。',
          '15–45 歲預約 3 次免費諮商（115 年方案）')
      ]
    },
    title_alts:[
      '憂鬱症不是想太多：認識警訊，15–45歲可用3次免費心理諮商',
      '最近總是提不起勁？認識憂鬱症，求助一點都不丟臉',
      '逾8萬人用過免費心理諮商：憂鬱症警訊與求助管道一次看'
    ],
    card_title_alts:[
      ['最近總是提不起勁？','憂鬱症求助 4 步驟'],
      ['憂鬱不是想太多','15–45 歲 3 次免費諮商'],
      ['求助是改變的開始','認識憂鬱症警訊']
    ],
    data_addon:[
      '衛福部115年1–8月：青壯世代方案服務逾5.7萬人、約14萬人次，18至30歲約47%、31至45歲約48.4%。',
      '衛福部2026年：全台75處社區心理衛生中心、396處心理諮商服務據點。',
      '男性關懷專線0800-013-999，另有「謝謝你跟我說」文字協談服務。'
    ],
    cta:'如果你或身邊的人情緒低落超過兩週，這週就上「青壯年的心有我傾聽」網站查詢免費諮商名額；需要立即傾訴，撥1925。'
  });
})();
