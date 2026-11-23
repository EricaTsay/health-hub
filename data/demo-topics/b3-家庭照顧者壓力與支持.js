/* v6 示範主題：家庭照顧者壓力與支持（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：衛福部「失智症防治照護政策綱領暨行動方案2.0」114年1-12月辦理情形（喘息服務252,719人、家照據點137處、關懷專線12,946人次）、
   衛福部〈照顧的路上不孤單！全國家庭照顧者支持服務交流經驗更升級〉（近190處家照據點含共融據點）、1966長照專區〈長照平安五守則〉。
   註：全國家庭照顧者總人數查無官方統計，本題不寫。
   參考方向：健康智庫〈照顧者的神隊友--「家庭照顧者支持性服務」〉2023/12、〈「互助喘息服務」減輕家庭照顧者之負擔〉2024/05。 */
(function(){
  const REFS = [
    {title:'失智症防治照護政策綱領暨行動方案2.0：114年1-12月辦理情形',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-88957-3f85385a-8809-42ee-805e-a07118df6e5d.html'},
    {title:'照顧的路上不孤單！全國家庭照顧者支持服務交流經驗更升級',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-2704-84552-1.html'},
    {title:'「長照平安五守則」提供家庭照顧者「照顧救生圈」',source:'衛福部長照專區（1966）',url:'https://1966.gov.tw/LTC/cp-6455-75309-207.html'},
    {title:'長照服務及家庭照顧者支持性服務 相挺家庭照顧者',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-5274-72446-1.html'}
  ];
  const TABLE = {headers:['照顧者資源','可以做什麼'], rows:[
    ['1966長照專線','申請長照需要評估，媒合居家、日照、喘息等服務'],
    ['喘息服務','由居家、日照或機構短暫接手照顧，讓照顧者休息'],
    ['家照據點','個案管理、心理支持、照顧技巧課程與支持團體'],
    ['0800-507272','家庭照顧者關懷專線，傾訴壓力、詢問資源']
  ]};
  const TAGS = ['家庭照顧者','喘息服務','長照','1966','照顧壓力'];

  const DP_HUB = {id:'dp-cg-hub', type:'data_scope', title:'家照據點數有兩種算法',
    desc:'114年底全國累計布建137處家庭照顧者支持服務據點（衛福部失智綱領辦理情形）；衛福部新聞另提到「近190處」，包含長照與身障共融據點。兩者口徑不同，AI 採用137處並註明。',
    current:'114年底全國137處家照據點（不含共融據點）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'137處', value:'家照據點', note:'114年底，衛福部失智綱領辦理情形（目前採用）'},
      {label:'近190處', value:'含共融據點', note:'衛福部新聞稿'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'照顧家人也要照顧自己：家庭照顧者壓力警訊與4大支持資源',
    update_date:'2026/11/20',
    intro:'家中長輩失能或失智時，照顧責任往往落在配偶或子女身上，長期下來容易身心俱疲。衛生福利部統計，114年全年喘息服務共服務252,719人，全國已布建137處家庭照顧者支持服務據點（另含共融據點近190處），家庭照顧者關懷專線0800-507272全年服務12,946人次。照顧是長跑，善用資源、適時喘息，才能走得長久。',
    sections:[
      {heading:'照顧者的壓力警訊',format:'bullets',items:[
        '長期睡不好、身體疼痛，自己的病拖著不看。',
        '常感到焦慮、易怒、無助，或對被照顧者生氣後又自責。',
        '和朋友、社交活動漸漸斷了聯繫，覺得只有自己一個人。',
        '出現「撐不下去」的念頭時，請立即尋求協助。'
      ]},
      {heading:'4大支持資源',format:'table',table:TABLE},
      {heading:'給照顧者的提醒',format:'bullets',items:[
        '先申請長照需要評估，再依失能等級使用居家、日照與喘息服務。',
        '家照據點提供個案管理、心理協談與照顧技巧課程，不需要一個人摸索。',
        '和其他家人分工、定期安排喘息時間，照顧者的健康也是照顧品質的一部分。'
      ]}
    ],
    think_tank_view:'很多照顧者覺得「申請喘息服務就是偷懶」，結果累到自己生病，反而讓整個家庭陷入困境。照顧者的身心健康，是長期照顧能持續下去的前提。把1966和0800-507272存進手機，在壓力還沒爆表前就先開口求助。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'服務人數與據點數引自衛福部114年辦理情形並標明口徑，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['喘息服務252,719人、家照據點137處、專線12,946人次取自衛福部失智綱領114年辦理情形','近190處取自衛福部新聞'],
      layout_reason:'先列照顧者壓力警訊，再以表格整理資源，最後提醒申請流程。',
      tone:'專業易懂', tone_reason:'照顧者需要清楚的資源路徑。',
      to_verify:['全國家庭照顧者總人數查無官方統計','據點數口徑（137處 vs 近190處）']},
    decision_points:[DP_HUB]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'照顧爸媽好累？你不用一個人扛，這些資源可以用',
    update_date:'2026/11/20',
    intro:'照顧生病或失能的家人，是一條很長的路。衛福部統計，114年有25萬多人使用喘息服務，全國也有137處家庭照顧者支持據點。累了、撐不住的時候，記得還有人可以幫你。',
    sections:[
      {heading:'你是不是也這樣？',format:'bullets',items:[
        '睡不好、全身痠痛，自己的病一直沒空看。',
        '常常焦慮、容易生氣，生完氣又很自責。',
        '很久沒跟朋友見面，覺得只剩自己一個人。'
      ]},
      {heading:'這些資源可以用',format:'table',table:TABLE},
      {heading:'給自己一點空間',format:'bullets',items:[
        '打1966先申請長照評估，喘息服務不是偷懶。',
        '去家照據點上課、參加支持團體，認識同樣在照顧家人的人。',
        '跟兄弟姊妹分工，排好自己的休息時間。'
      ]}
    ],
    think_tank_view:'照顧者也需要被照顧。今天就把1966和0800-507272存進手機，不用等到撐不住才打。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以照顧者的心聲切入。', tone:'生活親切', tone_reason:'給照顧者閱讀，語氣溫暖。', to_verify:['據點數口徑']},
    decision_points:[DP_HUB]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'家庭照顧者：壓力警訊與4大資源',
    update_date:'2026/11/20',
    intro:'114年喘息服務252,719人使用，全國137處家照據點（衛福部）。照顧者也要照顧自己。',
    sections:[
      {heading:'壓力警訊',format:'bullets',items:[
        '失眠、易怒、孤立、撐不下去。'
      ]},
      {heading:'4大資源',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '先申請長照評估，定期安排喘息。'
      ]}
    ],
    think_tank_view:'照顧是長跑，適時喘息、善用資源，才能走得長久。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊、資源、提醒三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['據點數口徑']},
    decision_points:[DP_HUB]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'家庭照顧者壓力與支持', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'照顧者也需要被照顧', primary_visual:'約 25.3 萬人', secondary_message:'喘息服務不是偷懶', action_priority:'撥 1966 申請評估'},
    headline_hook:'照顧家人好累？', headline_main:'照顧者的 4 個求助管道', title_accent:'4 個求助管道',
    hero_message:'約 25.3 萬人用過喘息', hero_support:'114 年喘息服務使用人數（衛福部）',
    primary_stat:{value:'約 25.3 萬人', label:'114 年使用喘息服務', note:'衛福部｜252,719 人'},
    action_title:'這些資源可以用',
    action_cards:[
      {key:'撥', text:'撥 1966 申請長照需要評估'},
      {key:'喘', text:'申請喘息服務，排出休息時間'},
      {key:'找', text:'到家照據點上課、參加支持團體'},
      {key:'說', text:'撥 0800-507272 關懷專線傾訴'}
    ],
    notice:'出現「**撐不下去**」的念頭，請立即撥打專線或 1925 安心專線求助。',
    carousel_suggestion:{reason:'若想把壓力警訊、資源與申請流程分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'你是不是也這樣？', headline_main:'照顧者 4 個壓力警訊'},
      {layout_type:'action', headline_hook:'求助管道', headline_main:'4 大支持資源'},
      {layout_type:'knowledge', headline_hook:'怎麼申請', headline_main:'從 1966 開始'}]},
    hashtags:['家庭照顧者','喘息服務','長照','照顧壓力'],
    sources:['衛生福利部'],
    illustration_category:'elderly-care',
    illustration:{topic:'家庭照顧者支持', audience:'中年照顧者', scene:'中年照顧者在支持團體中和其他人圍坐聊天，表情放鬆',
      emotion:'被支持、放鬆', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged caregiver sitting in a circle with others at a support group, chatting with a relaxed expression, supportive mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：114年喘息服務252,719人（衛福部）','專線與據點取自衛福部'],
      layout_reason:'重點是求助資源，選 action：4 個求助管道當主角，喘息服務人數放在 Hero。',
      tone:'專業易懂', tone_reason:'溫暖、具體。',
      to_verify:['喘息服務人數口徑（人數非人次）']},
    decision_points:[{id:'dp-cg-respite', type:'data_scope', title:'喘息服務人數口徑', desc:'252,719人為衛福部失智綱領114年1-12月辦理情形所列的喘息服務提供服務人數，涵蓋所有長照喘息使用者，不限失智家庭。', current:'約 25.3 萬人｜114 年使用喘息服務', options:[{label:'沿用目前資料', action:'keep'}]}],
    content_check_note:'服務人數引自衛福部114年辦理情形，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'家庭照顧者壓力與支持',
    collect:{
      summary:'家庭照顧者長期承受身心壓力，衛福部114年喘息服務共服務252,719人，全國布建137處家照據點，關懷專線全年服務12,946人次；長照3.0持續強化照顧者支持，「照顧者也需要被照顧」是高齡社會的重要溝通議題。',
      objective_data:[
        {item:'年度趨勢方向',desc:'約25.3萬人使用喘息服務：衛福部114年1至12月喘息服務提供服務人數為252,719人。',tag:'官方統計',source:{name:'衛生福利部：失智症防治照護政策綱領2.0 114年辦理情形',url:'https://www.mohw.gov.tw/dl-88957-3f85385a-8809-42ee-805e-a07118df6e5d.html'}},
        {item:'政策動向',desc:'137處家照據點：截至114年底，全國22縣市累計布建137處家庭照顧者支持服務據點，提供個案管理、心理支持與照顧技巧課程（含共融據點近190處）。',tag:'官方統計',source:{name:'衛生福利部：失智症防治照護政策綱領2.0 114年辦理情形',url:'https://www.mohw.gov.tw/dl-88957-3f85385a-8809-42ee-805e-a07118df6e5d.html'}},
        {item:'盛行率／發生率',desc:'12946人次：家庭照顧者關懷專線0800-507272於114年全年共服務12,946人次。',tag:'官方統計',source:{name:'衛生福利部：失智症防治照護政策綱領2.0 114年辦理情形',url:'https://www.mohw.gov.tw/dl-88957-3f85385a-8809-42ee-805e-a07118df6e5d.html'}},
        {item:'政策動向',desc:'長照3.0（115-124年）：行政院於114年12月31日核定長期照顧十年計畫3.0，持續擴充長照與家庭照顧者支持服務。',tag:'官方統計',source:{name:'衛生福利部：長期照顧十年計畫3.0（核定本）',url:'https://www.mohw.gov.tw/dl-98526-31ea7422-1b07-414b-a2a4-51e38c070ee4.html'}}
      ],
      product_view:['機會：照顧者壓力與家庭財務、工作安排高度相關，可連結長照保障與家庭照顧規劃說明。','機會：照顧者喘息、心理支持資訊能展現品牌溫度。','風險：避免以「照顧拖垮家庭」等恐嚇訴求銷售長照商品。'],
      marketing_view:['機會：每年11月第4個星期日為台灣家庭照顧者日，可作為溝通檔期。','機會：「喘息服務不是偷懶」能打破照顧者的心理障礙。','風險：照顧者議題情緒強烈，需附求助專線。'],
      alert_level:'medium',
      alert_reason:'長照3.0自115年起推動，照顧者支持服務持續擴充，民眾對申請方式有資訊需求。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('114年全年喘息服務共服務252,719人','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '數字出自失智症政策綱領的辦理情形，但涵蓋所有長照喘息使用者，文中未說明範圍，讀者可能誤以為僅失智家庭。','low','no',
          null,'no','clarify','屬統計範圍說明。',
          '114年全年長照喘息服務（不限失智家庭）共服務252,719人'),
        F('結果累到自己生病，反而讓整個家庭陷入困境','TERMINOLOGY_LANGUAGE','fear_framing',
          '以「家庭陷入困境」描述後果偏向恐嚇訴求，也缺乏依據，可改為中性描述。','low','no',
          null,'no','clarify','屬語氣調整。',
          '結果自己的健康也可能受到影響'),
        F('喘息服務不是偷懶','REGULATORY_COMPLIANCE','eligibility_condition',
          '鼓勵使用喘息服務，但未說明需經長照需要等級評估、有額度與部分負擔，讀者可能以為隨時可免費申請。','low','no',
          null,'no','clarify','屬申請條件說明。',
          '喘息服務不是偷懶（需先經長照評估，依等級有額度與部分負擔）',
          ['打1966先申請長照評估，喘息服務不是偷懶']),
        F('出現「撐不下去」的念頭時，請立即尋求協助','REGULATORY_COMPLIANCE','suicide_reporting',
          '提到「撐不下去」時宜就近附上求助專線（如1925安心專線），文中專線在後段。','low','no',
          null,'no','clarify','屬求助資訊位置。',
          '出現「撐不下去」的念頭時，請立即撥打1925安心專線或0800-507272尋求協助')
      ],
      card:[
        F('114 年使用喘息服務','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '主數字為全體長照喘息使用人數，卡面未說明。','low','no',
          null,'no','clarify','屬範圍說明。',
          '114 年長照喘息服務使用人數'),
        F('撥 1966 申請長照需要評估','REGULATORY_COMPLIANCE','eligibility_condition',
          '長照服務有申請資格（如65歲以上失能、50歲以上失智等），卡面未說明，可能讓不符資格者撲空。','low','no',
          null,'no','clarify','屬申請條件說明。',
          '撥 1966 確認資格、申請長照評估')
      ]
    },
    title_alts:[
      '照顧家人也要照顧自己：家庭照顧者壓力警訊與4大支持資源',
      '照顧爸媽好累？你不用一個人扛，這些資源可以用',
      '114年25萬人使用喘息服務：照顧者的求助地圖'
    ],
    card_title_alts:[
      ['照顧家人好累？','照顧者的 4 個求助管道'],
      ['喘息服務不是偷懶','照顧者也要休息'],
      ['照顧者也需要被照顧','1966 從這裡開始']
    ],
    data_addon:[
      '114年底全國失智社區服務據點（含權責型）580處、失智共同照護中心133處。',
      '長期照顧十年計畫3.0（115-124年）於114年12月31日經行政院核定。',
      '1966長照專區提供「長照平安五守則」等照顧者資訊。'
    ],
    cta:'今天就把1966長照專線與0800-507272照顧者關懷專線存進手機，並和家人約一次分工討論，排出你自己的休息時間。'
  });
})();
