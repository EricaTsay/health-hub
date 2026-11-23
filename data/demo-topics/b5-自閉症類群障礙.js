/* v6 示範主題：自閉症類群障礙（B5 心理健康與精神疾患）
   查證日期：2026-11-20。數據來源：台北市自閉兒社會福利基金會「自閉症人口統計」（引述衛福部114年底身障證明人數）、
   中華民國自閉症基金會「2023最新自閉症人數比例」（引述衛福部112年第四季）、衛福部舊新聞稿（102年13,072人、兒童發展聯合評估中心）、
   衛福部統計處身心障礙統計專區（原始表，未逐格核對）。
   參考方向：健康智庫〈自閉症類群障礙〉2023/08、〈如何與自閉症類群障礙患者相處〉2022/08。 */
(function(){
  const ICAN = 'https://www.ican.org.tw/OnePage.aspx?tid=147';
  const FACT = 'https://www.fact.org.tw/contents/news_ct?id=170';
  const DOS = 'https://dep.mohw.gov.tw/dos/cp-5224-62359-113.html';
  const MOHW = 'https://mohw.gov.tw/cp-16-21991-1.html';
  const REFS = [
    {title:'身心障礙統計專區',source:'衛生福利部統計處',url:DOS},
    {title:'自閉症人口統計',source:'台北市自閉兒社會福利基金會',url:ICAN},
    {title:'2023最新自閉症人數比例（第四季）',source:'中華民國自閉症基金會',url:FACT},
    {title:'自閉症個案申請身心障礙者人數統計與早期療育',source:'衛生福利部',url:MOHW}
  ];
  const TABLE = {headers:['核心特徵','可能的表現'], rows:[
    ['社交溝通困難','不太看人眼睛、不易理解別人的表情與話中含意、難以維持對話'],
    ['重複或固著行為','重複動作或語句，對特定事物有強烈且狹窄的興趣'],
    ['堅持固定模式','對環境或作息的改變很不安，需要可預期的安排'],
    ['感官反應不同','對聲音、光線、觸覺特別敏感或特別遲鈍']
  ]};
  const TAGS = ['自閉症類群障礙','自閉症','早期療育','發展遲緩','友善共融'];

  const DP_SRC = {id:'dp-asd-src', type:'data_scope', title:'人數是「領有身障證明」的自閉症者',
    desc:'「114年底24,586人」是領有身心障礙證明的自閉症者，數字由民間基金會引述衛福部統計；未申請證明或未確診者不在其中。AI 沒有替你決定是否另外說明實際人數可能更多。',
    current:'114年底24,586人（身障證明，基金會引述衛福部）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'24,586人', value:'114年底身障證明', note:'台北市自閉兒基金會引述衛福部（目前採用）'},
      {label:'20,656人', value:'112年第四季身障證明', note:'中華民國自閉症基金會引述衛福部'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'自閉症類群障礙：認識核心特徵，及早評估與療育',
    update_date:'2026/11/20',
    intro:'自閉症類群障礙是一種神經發展疾患，核心特徵是社交溝通困難，以及重複、固著的行為與興趣，每個人的表現與程度差異很大。據台北市自閉兒社會福利基金會引述衛福部統計，截至114年底領有身心障礙證明的自閉症者共24,586人，是人數成長最快的障礙類別之一；中華民國自閉症基金會引述112年底資料，男性約占85.7%。',
    sections:[
      {heading:'自閉症的4個核心特徵',format:'table',table:TABLE},
      {heading:'及早評估與療育',format:'bullets',items:[
        '幼兒若較少回應叫名、少用手指指物、語言發展慢或很少與人互動，可先諮詢小兒科或兒童心智科醫師。',
        '衛福部設有兒童發展聯合評估中心，提供疑似發展遲緩兒童評估，確診後可銜接早期療育。',
        '療育以語言、職能、社交技巧訓練與家長參與為主，依孩子的需求調整。'
      ]},
      {heading:'與自閉症者相處',format:'bullets',items:[
        '說話具體、清楚，一次說一件事，避免反諷或模糊的暗示。',
        '提前告知行程變化，給予可預期的安排與安靜的空間。',
        '尊重每個人的特質與節奏，以「友善共融」取代標籤；照顧者也需要支持與喘息。'
      ]}
    ],
    think_tank_view:'自閉症不是「教不好」，也不是單一樣貌。越早被理解、越早得到合適的療育與環境調整，孩子越能發揮自己的長處；社會能做的，是把「不一樣」當成多元的一部分，而不是需要被糾正的缺點。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'人數標明為基金會引述衛福部並註明是身障證明口徑，未使用療效保證用語，未涉及具體商品，避免負面標籤用語。',
    ai_rationale:{basis:['114年底身障證明自閉症者24,586人（台北市自閉兒基金會引述衛福部）','112年底男性占85.7%（中華民國自閉症基金會引述衛福部）'],
      layout_reason:'先用表格整理核心特徵，再說明評估與療育管道，最後給相處原則。',
      tone:'專業易懂', tone_reason:'需去標籤、尊重多元，兼顧家長與一般大眾。',
      to_verify:['24,586人待以衛福部統計處原始表核對','兒童發展聯合評估中心最新家數']},
    decision_points:[DP_SRC]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'孩子叫名字不太回應、喜歡排排站？認識自閉症',
    update_date:'2026/11/20',
    intro:'自閉症是一種大腦發展上的差異，不是父母教得不好。每個自閉症孩子都不一樣，有的人很少說話，有的人很會說但不太懂別人的意思。台北市自閉兒基金會引述衛福部統計，到114年底有24,586位自閉症者領有身心障礙證明，而且男生比女生多很多。',
    sections:[
      {heading:'自閉症常見的4個特徵',format:'table',table:TABLE},
      {heading:'覺得孩子怪怪的，怎麼辦？',format:'bullets',items:[
        '如果孩子很少回應叫名、不太用手指東西、說話比較慢，可以先問小兒科或兒童心智科醫師。',
        '各地有兒童發展聯合評估中心，可以幫忙做完整評估。',
        '越早開始療育（語言、職能、社交訓練），越能幫孩子找到適合的學習方式。'
      ]},
      {heading:'和自閉症朋友相處',format:'bullets',items:[
        '說話直接清楚，一次說一件事。',
        '要改變計畫時，提早告訴他。',
        '尊重他的節奏與喜好，也別忘了給照顧的家人一點支持。'
      ]}
    ],
    think_tank_view:'自閉症的孩子不是不想和你互動，只是用不一樣的方式感受世界。多一點理解和耐心，他們也能在自己的位置上發光。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'人數標明為基金會引述衛福部，語氣親切、去標籤，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以家長觀察到的情境帶出特徵、評估與相處。', tone:'生活親切', tone_reason:'給家長與一般大眾閱讀。', to_verify:['24,586人原始表核對']},
    decision_points:[DP_SRC]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'自閉症類群障礙：4個特徵＋及早療育',
    update_date:'2026/11/20',
    intro:'據基金會引述衛福部統計，114年底領有身心障礙證明的自閉症者24,586人。及早評估、及早療育是關鍵。',
    sections:[
      {heading:'4個特徵',format:'table',table:TABLE},
      {heading:'評估療育',format:'bullets',items:[
        '發展疑慮先諮詢小兒科、兒童心智科。',
        '兒童發展聯合評估中心完整評估。'
      ]},
      {heading:'相處原則',format:'bullets',items:[
        '具體清楚、提前告知變化。',
        '尊重特質，支持照顧者。'
      ]}
    ],
    think_tank_view:'及早理解與療育，能幫助自閉症孩子發揮長處；友善環境是全社會的功課。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'人數標明為基金會引述衛福部，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為特徵、療育、相處三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_SRC]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'自閉症類群障礙', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'自閉症是發展上的差異，及早療育很重要', primary_visual:'約 2.5 萬人', secondary_message:'男性約占 85.7%', action_priority:'及早評估、友善相處'},
    headline_hook:'不是教不好', headline_main:'認識自閉症類群障礙', title_accent:'自閉症類群障礙',
    primary_stat:{kicker:'114 年底・身障證明', value:'約 2.5 萬人', label:'領有身心障礙證明的自閉症者', note:'24,586 人（基金會引述衛福部）'},
    chart:{type:'bar', title:'身障證明自閉症者（人）', points:[
      {label:'2013', value:13072, display:'13,072'},
      {label:'2023', value:20656, display:'20,656'},
      {label:'2025', value:24586, display:'24,586', highlight:true}
    ], note:'衛福部統計（2023、2025 為基金會引述）'},
    secondary_stats:[
      {value:'85.7%', label:'男性占比（112 年底）'},
      {value:'4 大', label:'核心特徵'}
    ],
    action_title:'及早評估與相處',
    action_cards:[
      {key:'察', text:'叫名少回應、語言慢，諮詢醫師'},
      {key:'評', text:'兒童發展聯合評估中心完整評估'},
      {key:'療', text:'及早開始語言、職能與社交療育'},
      {key:'容', text:'說話具體、提前告知變化'}
    ],
    carousel_suggestion:{reason:'若想把特徵、評估與相處分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'不是教不好', headline_main:'自閉症 4 個核心特徵'},
      {layout_type:'data', headline_hook:'人數持續增加', headline_main:'114 年底約 2.5 萬人'},
      {layout_type:'action', headline_hook:'友善共融', headline_main:'與自閉症者相處 4 原則'}]},
    hashtags:['自閉症','早期療育','發展遲緩','友善共融'],
    sources:['衛生福利部（基金會引述）','台北市自閉兒社會福利基金會'],
    illustration_category:'general',
    illustration:{topic:'自閉症友善共融', audience:'家長與一般大眾', scene:'一位家長蹲下與孩子平視，一起看著繪本上的作息圖卡，旁邊放著耳罩',
      emotion:'耐心、理解', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A parent kneeling at eye level with a child, looking together at a picture schedule card book, a pair of ear defenders beside them, patient and understanding mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['114年底24,586人（基金會引述衛福部）','2013年13,072人（衛福部）'],
      layout_reason:'選 data：身障證明人數與成長趨勢當主角，下方給 4 個評估與相處行動。',
      tone:'專業易懂', tone_reason:'去標籤、強調及早療育。',
      to_verify:['人數待以統計處原始表核對']},
    decision_points:[Object.assign({}, DP_SRC, {current:'約 2.5 萬人（114 年底身障證明）'})],
    content_check_note:'人數標明為基金會引述衛福部並註明口徑，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'自閉症類群障礙',
    collect:{
      summary:'領有身心障礙證明的自閉症者持續增加，是成長最快的障礙類別之一；早期評估與療育、家庭支持與社會友善共融，是值得長期溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約2.5萬人領有身障證明：台北市自閉兒社會福利基金會引述衛福部統計，截至114年底領有身心障礙證明的自閉症者24,586人（未申請證明者不在其中）。',tag:'官方統計',source:{name:'台北市自閉兒社會福利基金會：自閉症人口統計（引述衛福部）',url:ICAN}},
        {item:'年度趨勢方向',desc:'約為2013年的1.9倍：衛福部資料顯示102年自閉症身障證明者13,072人，114年底增至24,586人，是人數成長最快的障礙類別之一。',tag:'官方統計',source:{name:'衛生福利部：自閉症個案申請身心障礙者人數統計',url:MOHW}},
        {item:'政策動向',desc:'兒童發展聯合評估中心：衛福部補助醫院設置兒童發展聯合評估中心，提供疑似發展遲緩兒童早期確診並銜接療育（各年度家數以衛福部公告為準）。',tag:'官方統計',source:{name:'衛生福利部：自閉症個案申請身心障礙者人數統計與早期療育',url:MOHW}},
        {item:'好發族群年齡層',desc:'男性約占85.7%：中華民國自閉症基金會引述衛福部112年第四季資料，自閉症者20,656人中男性17,705人、女性2,951人。',tag:'官方統計',source:{name:'中華民國自閉症基金會：2023最新自閉症人數比例',url:FACT}}
      ],
      product_view:['機會：自閉症家庭需要長期療育與照顧，可說明家庭保障與照顧者支持的重要性。','機會：可結合早療資源資訊與家長支持服務，展現陪伴價值。','風險：避免以「疾病」「缺陷」等負面語言描述；身心障礙者投保權益須依法規與條款公平說明。'],
      marketing_view:['機會：每年4月2日世界自閉症關懷日是固定溝通檔期。','機會：「與自閉症者相處」的實用指南容易被分享。','風險：避免刻板印象（如「都是天才」或「都無法溝通」）。'],
      alert_level:'low',
      alert_reason:'屬長期社會議題，無時效性政策事件；適合在世界自閉症關懷日（4月2日）前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('截至114年底領有身心障礙證明的自閉症者共24,586人','SOURCE_EVIDENCE','secondary_citation',
          '已註明是基金會引述衛福部，但未連到衛福部統計處原始表；且只計入領有身障證明者。','low','yes',
          '衛福部統計處「身心障礙者人數按類別及縣市別分」114年底自閉症人數。','yes','confirm','屬二手引述，數字本身未必有誤。',
          '截至114年底領有身心障礙證明的自閉症者共24,586人（衛福部統計處；未申請證明者不在其中）',
          ['到114年底有24,586位自閉症者領有身心障礙證明','114年底領有身心障礙證明的自閉症者24,586人']),
        F('是人數成長最快的障礙類別之一','DATA_FACTUAL_ACCURACY','unsupported_ranking',
          '「成長最快」出自基金會說法，文中未提供比較數據；人數增加也可能反映診斷與申請率提高，而非實際發生率上升。','low','no',
          null,'no','clarify','屬詮釋問題。',
          '近年人數持續增加（可能與認識提升、診斷與申請增加有關）'),
        F('男性約占85.7%','DATA_FACTUAL_ACCURACY','outdated_within_article',
          '性別比例是112年底資料，與文中114年底的人數年份不同，文中只寫了來源年份但放在同一段，讀者容易混為同一時點。','low','no',
          null,'no','clarify','屬時點標示問題。',
          '男性約占85.7%（112年底資料）'),
        F('一次說一件事','TERMINOLOGY_LANGUAGE','overgeneralization',
          '相處建議寫成通則，但自閉症者個別差異大，部分人並不需要這樣的調整。','low','no',
          null,'no','clarify','補一句個別差異即可。',
          '一次說一件事（實際需求因人而異，可直接詢問本人或家人偏好）',
          ['一次說一件事。'])
      ],
      card:[
        F('衛福部統計（2023、2025 為基金會引述）','SOURCE_EVIDENCE','mixed_source_chart',
          '圖表三個時點來源層級不同（官方新聞稿與基金會引述），卡面讀者不易分辨。','low','yes',
          '衛福部統計處各年度原始表。','yes','confirm','屬來源混用問題。',
          '衛福部統計處身障證明人數'),
        F('男性占比（112 年底）','DATA_FACTUAL_ACCURACY','outdated_within_card',
          '次數字年份（112年底）與主數字（114年底）不同，卡面並列容易混淆。','low','no',
          null,'no','clarify','已標年份，可再強調。',
          '男性占比（112 年底資料）')
      ]
    },
    title_alts:[
      '自閉症類群障礙：認識核心特徵，及早評估與療育',
      '孩子叫名字不太回應、喜歡排排站？認識自閉症',
      '114年底約2.5萬人：自閉症的特徵、療育與相處'
    ],
    card_title_alts:[
      ['不是教不好','認識自閉症類群障礙'],
      ['叫名字不太回應？','自閉症及早評估'],
      ['友善共融','與自閉症者相處 4 原則']
    ],
    data_addon:[
      '台北市與新北市合計約占全國身障證明自閉症者的44.4%（台北市自閉兒基金會）。',
      '102年資料：自閉症身障證明者以6至11歲最多（30.7%），障礙等級以輕度最多（60.3%）。',
      '世界自閉症關懷日為每年4月2日。'
    ],
    cta:'如果孩子叫名字很少回應、語言發展慢，這個月就帶他做一次兒童發展評估；身邊有自閉症朋友，試著說話更具體、提早告知變化。'
  });
})();
