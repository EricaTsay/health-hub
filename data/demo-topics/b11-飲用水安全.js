/* v6 示範主題：飲用水安全（B11 第二輪擴充）
   查證日期：2026-11-23。數據來源：行政院〈無自來水地區供水改善執行成效〉（2024/12/19）、飲用水連續供水固定設備使用及維護管理辦法（臺北市法規查詢系統轉載全文）、台灣自來水公司對外說明（聯合報2026/04/13報導）。
   參考方向：健康智庫家庭飲水處理、水質檢驗相關文章（僅取架構）。 */
(function(){
  const REFS = [
    {title:'無自來水地區供水改善執行成效',source:'行政院',url:'https://www.ey.gov.tw/Page/448DE008087A1971/abcde435-ea81-4580-a53b-87bdc7855920'},
    {title:'飲用水連續供水固定設備使用及維護管理辦法',source:'臺北市法規查詢系統（轉載環境部主管法規）',url:'https://www.laws.taipei.gov.tw/law/LawSearch/LawExport/FL015495?type=2'},
    {title:'守護飲水安全 台水建構全流程水質監控',source:'聯合新聞網',url:'https://udn.com/news/story/7266/9439188'}
  ];
  const TABLE = {headers:['家中用水環節','安全重點'], rows:[
    ['自來水','普及率逾95%，煮沸後飲用；長時間未用水時，先放流一段時間再取用'],
    ['水塔蓄水池','定期清洗並加蓋，地方政府多建議至少每半年清洗一次'],
    ['淨水器','依說明書更換濾心，濾心過期反而可能孳生細菌'],
    ['公共飲水機','管理單位每月至少維護一次，每3個月檢驗大腸桿菌群'],
    ['山泉水井水','未經處理的水源應送驗，確認符合飲用水水質標準再飲用']
  ]};
  const TAGS = ['飲用水','水質安全','飲水機','淨水器','水塔清洗'];

  const DP_QUAL = {id:'dp-water-quality', type:'source_level', title:'水質合格率的來源層級',
    desc:'「水質合格率99.9%以上」為台灣自來水公司對外說明、經媒體報導，非環境部年度抽驗統計原文。AI 未查到標明年度的環境部官方數字，因此只放在補充資訊，不做主數字。',
    current:'台水表示全台自來水水質合格率持續維持在99.9%以上（2026年報導）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'99.9%以上', value:'台水自述', note:'聯合報2026/04/13報導（目前採用）'},
      {label:'環境部抽驗', value:'未取得', note:'未查到標明年度的官方原文'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'喝得安心：家庭飲用水安全的5個檢查點',
    update_date:'2026/11/23',
    intro:'依行政院資料，臺灣自來水普及率截至2024年已達95.81%，台水也表示自來水水質合格率持續維持在99.9%以上。不過，水從淨水場送到水龍頭之後，還會經過水塔、管線、淨水器或飲水機，這些「最後一哩」的設備若疏於維護，才是家庭飲水安全的主要風險。',
    sections:[
      {heading:'家中用水的5個檢查點',format:'table',table:TABLE},
      {heading:'公共飲水機有法定維護規範',format:'bullets',items:[
        '依飲用水連續供水固定設備使用及維護管理辦法，管理單位應每月至少維護一次，紀錄保存2年。',
        '接用自來水的飲水機，處理後水質應每隔3個月檢測大腸桿菌群。',
        '使用前可留意機身是否張貼登記使用證明與最近的檢驗紀錄。'
      ]},
      {heading:'家庭可以這樣做',format:'bullets',items:[
        '水塔、蓄水池定期清洗並保持加蓋，避免落葉、蚊蟲與小動物進入。',
        '淨水器濾心依建議時間更換，並記下更換日期。',
        '老舊住宅可請水電業者檢查屋內管線，必要時更新。'
      ]}
    ],
    think_tank_view:'臺灣自來水的源頭品質穩定，家庭飲水安全的關鍵反而在自己家裡。把水塔清洗、濾心更換排進固定時程，比購買昂貴設備更能確保每一口水的品質。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'普及率引自行政院並標明年份，飲水機規範引自法規全文，水質合格率標明為台水說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['自來水普及率95.81%（行政院2024/12/19）','飲水機每月維護、每3個月驗大腸桿菌群（法規）'],
      layout_reason:'以家中用水環節整理檢查點，再說明法定飲水機規範與家庭行動。',
      tone:'專業易懂', tone_reason:'需清楚區分自來水與家中設備的責任。',
      to_verify:['水質合格率為台水自述','水塔清洗頻率為地方政府建議，中央無統一規定']},
    decision_points:[DP_QUAL]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'家裡的水真的乾淨嗎？5個地方檢查一下',
    update_date:'2026/11/23',
    intro:'臺灣大部分家庭都接自來水，普及率在2024年已達95.81%，台水也說水質合格率維持在99.9%以上。可是水進到家裡後，還要經過水塔、水管、淨水器，這些地方沒顧好，水就可能變得不乾淨。',
    sections:[
      {heading:'家裡用水這5個地方要注意',format:'table',table:TABLE},
      {heading:'外面的飲水機能喝嗎？',format:'bullets',items:[
        '依規定，公共飲水機每個月至少要保養一次。',
        '接自來水的飲水機，每3個月要驗一次大腸桿菌群。',
        '喝之前看看機器上有沒有貼檢驗紀錄。'
      ]},
      {heading:'在家這樣做',format:'bullets',items:[
        '水塔記得定期洗、蓋子要蓋好。',
        '淨水器濾心到期就換，貼張便條紙記日期。',
        '老房子可以請水電師傅看看水管。'
      ]}
    ],
    think_tank_view:'好水從家裡開始顧。洗水塔、換濾心這些小事做好，全家喝得更安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自行政院與法規，水質合格率標明為台水說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家庭生活情境介紹飲水安全。', tone:'生活親切', tone_reason:'給一般家庭閱讀。', to_verify:['水質合格率為台水自述']},
    decision_points:[DP_QUAL]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'飲用水安全：5個檢查點',
    update_date:'2026/11/23',
    intro:'自來水普及率95.81%（2024年）。家庭飲水風險多在水塔、管線、淨水器與飲水機。',
    sections:[
      {heading:'5個檢查點',format:'table',table:TABLE},
      {heading:'公共飲水機',format:'bullets',items:[
        '每月維護，每3個月驗大腸桿菌群。',
        '留意檢驗紀錄。'
      ]},
      {heading:'家庭行動',format:'bullets',items:[
        '水塔定期清洗加蓋。',
        '濾心按時更換。'
      ]}
    ],
    think_tank_view:'源頭穩定，關鍵在家中設備維護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自行政院與法規，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為檢查點、飲水機、家庭行動。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:['水塔清洗頻率為地方建議']},
    decision_points:[DP_QUAL]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'飲用水安全', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'飲水風險多在家中最後一哩', primary_visual:'95.81%', secondary_message:'水塔、濾心、飲水機要定期維護', action_priority:'洗水塔、換濾心'},
    headline_hook:'家裡的水乾淨嗎', headline_main:'飲水安全 3 個檢查點', title_accent:'3 個檢查點',
    hero_message:'自來水普及率 95.81%', hero_support:'截至 2024 年（行政院）',
    knowledge_title:'最後一哩要顧好', knowledge_note:'未經處理的山泉水、井水**應先送驗**',
    knowledge_cards:[
      {label:'水塔蓄水池', icon:'home', lines:['定期清洗並加蓋','地方多建議每半年一次']},
      {label:'淨水器', icon:'leaf', lines:['依說明書更換濾心','濾心過期易孳生細菌']},
      {label:'公共飲水機', icon:'flask', lines:['每月至少維護一次','每 3 個月驗大腸桿菌群']}
    ],
    primary_stat:{value:'95.81%', label:'全國自來水普及率', note:'行政院｜截至 2024 年'},
    secondary_stats:[
      {value:'每 3 個月', label:'飲水機水質檢驗'},
      {value:'每月 1 次', label:'飲水機維護'}
    ],
    action_title:'在家這樣做',
    action_cards:[
      {key:'洗', text:'水塔蓄水池定期清洗並加蓋'},
      {key:'換', text:'淨水器濾心到期就換，記下日期'},
      {key:'看', text:'喝公共飲水機前看檢驗紀錄'},
      {key:'驗', text:'山泉水、井水先送驗再飲用'}
    ],
    carousel_suggestion:{reason:'若想把家庭與公共飲水分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'家中用水', headline_main:'水塔與濾心怎麼顧'},
      {layout_type:'knowledge', headline_hook:'公共飲水機', headline_main:'法定維護規範'},
      {layout_type:'action', headline_hook:'喝得安心', headline_main:'4 件事這樣做'}]},
    hashtags:['飲用水','水質安全','飲水機','水塔清洗'],
    sources:['行政院','環境部主管法規'],
    illustration_category:'general',
    illustration:{topic:'家庭飲用水安全', audience:'一般家庭', scene:'一位家長在廚房更換淨水器濾心，孩子拿著水杯在旁等待',
      emotion:'安心、乾淨', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A parent replacing a water filter cartridge in a kitchen while a child waits holding a glass, clean and reassuring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['自來水普及率95.81%（行政院）','飲水機維護與檢驗頻率（法規）'],
      layout_reason:'核心是「家中哪些環節要顧」，選 knowledge：3 個設備檢查點當主角，普及率退到下方。',
      tone:'專業易懂', tone_reason:'實用生活資訊。',
      to_verify:['水塔清洗頻率為地方建議']},
    decision_points:[Object.assign({}, DP_QUAL, {current:'99.9% 以上｜台水自述水質合格率'})],
    content_check_note:'普及率引自行政院並標明年份，飲水機規範引自法規，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'飲用水安全',
    collect:{
      summary:'臺灣自來水普及率逾95%，源頭水質穩定，家庭飲水風險多來自水塔、管線、淨水器與飲水機等末端設備；公共飲水機有法定維護與檢驗規範，是長期適用的生活健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'95.81%自來水普及率：行政院資料指出，全國自來水普及率由90.80%提升至95.81%（截至2024年），屏東縣等地區仍有未接管住戶。',tag:'官方統計',source:{name:'行政院：無自來水地區供水改善執行成效',url:'https://www.ey.gov.tw/Page/448DE008087A1971/abcde435-ea81-4580-a53b-87bdc7855920'}},
        {item:'政策動向',desc:'每3個月檢驗大腸桿菌群：依飲用水連續供水固定設備使用及維護管理辦法，接用自來水的公共飲水機應定期檢測，管理單位每月至少維護一次並保存紀錄2年。',tag:'官方統計',source:{name:'飲用水連續供水固定設備使用及維護管理辦法',url:'https://www.laws.taipei.gov.tw/law/LawSearch/LawExport/FL015495?type=2'}},
        {item:'年度趨勢方向',desc:'99.9%以上水質合格率：台灣自來水公司2026年對外說明，全台自來水水質合格率持續維持在99.9%以上，並公開68項飲用水水質平均數據。',tag:'市場觀察',source:{name:'聯合新聞網：守護飲水安全 台水建構全流程水質監控',url:'https://udn.com/news/story/7266/9439188'}},
        {item:'好發族群年齡層',desc:'約6萬戶將受惠：行政院核定無自來水供水改善計畫第五期，未來5年投入106億元，改善偏遠或未接管家戶供水。',tag:'官方統計',source:{name:'行政院：無自來水地區供水改善執行成效',url:'https://www.ey.gov.tw/Page/448DE008087A1971/abcde435-ea81-4580-a53b-87bdc7855920'}}
      ],
      product_view:['機會：可作為保戶居家健康關懷內容，例如水塔清洗提醒。','機會：水媒傳染病與腸胃炎住院可連結醫療保障說明。','風險：避免推薦特定淨水器品牌或暗示自來水不安全。'],
      marketing_view:['機會：颱風後、換季時是提醒清洗水塔的時機。','機會：「家中5個用水檢查點」適合做互動檢查清單。','風險：水質議題易引發恐慌，需以官方數據平衡說明。'],
      alert_level:'low',
      alert_reason:'屬長期生活健康議題，無急迫時效事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('台水也表示自來水水質合格率持續維持在99.9%以上','SOURCE_EVIDENCE','secondary_citation',
          '此數字為台水對外說明、經媒體報導，非環境部年度抽驗統計，文中未說明資料年份與來源層級。','medium','yes',
          '環境部最新年度自來水水質抽驗合格率。','no','confirm','未查到標明年度的官方原文。',
          '台水2026年對外說明，自來水水質合格率持續維持在99.9%以上',
          ['台水也說水質合格率維持在99.9%以上']),
        F('這些「最後一哩」的設備若疏於維護，才是家庭飲水安全的主要風險','MEDICAL_INTERPRETATION','unsupported_claim',
          '「主要風險」的判斷缺乏統計佐證，宜改為較保守的說法。','low','no',
          null,'no','clarify','屬推論。',
          '這些「最後一哩」的設備若疏於維護，就可能影響家中水質'),
        F('水塔記得定期洗、蓋子要蓋好。','COMPLETENESS','vague_term',
          '未說明清洗頻率；地方政府多建議至少每半年清洗一次。','low','no',
          null,'no','clarify','中央無統一規定。',
          '水塔記得定期洗（地方政府多建議至少每半年一次）、蓋子要蓋好。',
          ['水塔定期清洗加蓋。']),
        F('老舊住宅可請水電業者檢查屋內管線，必要時更新。','COMPLETENESS','missing_key_info',
          '未說明屋內管線屬住戶自有財產、部分縣市有老舊管線汰換補助。','low','no',
          null,'no','clarify','補助依縣市而定。',
          '老舊住宅可請水電業者檢查屋內管線（屬住戶自有），並查詢縣市是否有汰換補助。',
          ['老房子可以請水電師傅看看水管。'])
      ],
      card:[
        F('地方多建議每半年一次','SOURCE_EVIDENCE','source_level',
          '清洗頻率為地方政府建議，卡面未說明中央無統一規定。','low','no',
          null,'no','clarify','屬來源層級說明。',
          '多數縣市建議每半年一次'),
        F('濾心過期易孳生細菌','MEDICAL_INTERPRETATION','unsupported_claim',
          '卡面為一般衛教說法，未標示依據，宜改為依廠商建議更換的中性寫法。','low','no',
          null,'no','clarify','屬表達建議。',
          '依廠商建議時間更換')
      ]
    },
    title_alts:[
      '喝得安心：家庭飲用水安全的5個檢查點',
      '家裡的水真的乾淨嗎？5個地方檢查一下',
      '自來水普及率逾95%：飲水安全關鍵在家中設備'
    ],
    card_title_alts:[
      ['家裡的水乾淨嗎','飲水安全 3 個檢查點'],
      ['水塔多久沒洗了？','家中用水檢查清單'],
      ['喝得安心','顧好最後一哩']
    ],
    data_addon:[
      '經濟部供水改善計畫自2002年起推動，屏東縣普及率由49.39%提升至71.53%。',
      '台水表示每年產生約12.7億筆線上監測數據，設有14座國際認證實驗室。',
      '公共飲水機使用前須向主管機關登記，並將登記使用證明張貼於明顯處。'
    ],
    cta:'這週末查一下家中淨水器濾心的更換日期，並確認水塔上次清洗是什麼時候。'
  });
})();
