/* v6 示範主題：癌症放射治療（質子、重粒子）（B12 第三輪新主題）
   查證日期：2026-11-23。數據來源：衛福部新聞稿〈健保115年1月起新增高血脂及兒童癌症質子治療等醫療服務〉（115-01-12，健保署）、
   衛福部新聞稿（104年，醫用粒子治療設備納入特管辦法管理）、衛福部〈112年癌症登記報告〉新聞稿。
   參考方向：判定清單第256、457、523、315列（放射醫學、質子、重粒子文章）。只取架構，數據重新查證。
   自費金額：未找到官方或醫學中心公開的收費資料，文中不寫金額。 */
(function(){
  const REFS = [
    {title:'健保115年1月起新增高血脂及兒童癌症質子治療等醫療服務',source:'衛生福利部中央健康保險署',url:'https://mohw.gov.tw/cp-16-85076-1.html'},
    {title:'醫用粒子治療設備納入特定醫療技術檢查檢驗醫療儀器施行或使用管理辦法管理',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-19815-1.html'},
    {title:'112年癌症登記報告',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-84987-1.html'}
  ];
  const TABLE = {headers:['項目','傳統放射治療（光子）','質子／重粒子治療'], rows:[
    ['原理','X光（光子）穿過身體，腫瘤前後的組織都會受到劑量','粒子在特定深度釋放大部分能量，腫瘤後方劑量較低'],
    ['常見用途','多數癌症的根治、術後輔助或緩解症狀','鄰近重要器官的局部腫瘤、兒童腫瘤等，由醫師評估'],
    ['健保給付','依健保支付標準給付','115年1月1日起僅兒童癌症特定病類質子治療納入給付；成人多為自費'],
    ['管理方式','一般醫療服務','粒子治療設備依特管辦法管理，適應症與收費受衛福部監督']
  ]};
  const TAGS = ['放射治療','質子治療','重粒子治療','癌症治療','自費醫療'];

  const DP_PAY = {id:'dp-proton-pay', type:'data_scope', title:'健保質子給付僅限兒童特定癌別',
    desc:'115年1月1日新增的質子治療給付限兒童癌症特定病類，依吸收劑量分三級；成人質子與重粒子治療仍未納入健保。AI 依健保署公告標明適用範圍。',
    current:'兒童癌症質子治療給付（115年1月1日起；成人未給付）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'兒童特定癌別', value:'健保給付', note:'健保署115-01-12新聞稿（目前採用）'},
      {label:'成人', value:'多為自費', note:'粒子治療依特管辦法管理，收費依院所公告'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'質子、重粒子治療是什麼？適應症、優缺點與健保給付界線',
    update_date:'2026/11/23',
    intro:'放射治療與手術、藥物並列癌症的主要治療方式。依112年癌症登記報告，國人新發癌症13萬8,051人，其中不少人治療過程會用到放射治療。質子與重粒子屬於「粒子治療」，能把劑量較集中在腫瘤，減少周邊正常組織受到的照射。健保自115年1月1日起首度給付兒童癌症質子治療；成人質子與重粒子治療目前仍需自費。',
    sections:[
      {heading:'光子與粒子治療比一比',format:'table',table:TABLE},
      {heading:'優點與限制',format:'bullets',items:[
        '優點：腫瘤後方幾乎沒有出口劑量，對鄰近脊髓、腦幹、眼睛等重要器官的腫瘤，以及仍在發育的兒童較有意義。',
        '限制：衛福部說明書範本指出，目前證據較支持局部腫瘤的副作用較少，腫瘤控制效果的直接證據仍在臨床試驗中。',
        '不是每種癌症都適合，已廣泛轉移的癌症通常不是粒子治療的對象。'
      ]},
      {heading:'健保與自費的界線',format:'bullets',items:[
        '115年1月1日起，兒童癌症（如中樞神經腫瘤、骨肉瘤、神經母細胞瘤等）依劑量分低、中、高度三級給付質子治療。',
        '成人質子與重粒子治療未納入健保，費用依各院所經主管機關核定的收費公告。',
        '治療前請院所提供書面費用說明，並確認保單對「自費醫療」「放射線治療」的給付條件。'
      ]}
    ],
    think_tank_view:'粒子治療讓部分病人多了一個降低副作用的選擇，但不代表比傳統放射治療更能治癒癌症。是否適合，應由放射腫瘤科醫師依腫瘤位置、期別與整體治療計畫評估；費用與保障則要在治療前就問清楚。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'給付範圍與生效日期引自健保署115-01-12新聞稿，管理方式引自衛福部，未寫無官方依據的自費金額，未使用療效保證用語，未推薦特定醫院或設備。',
    ai_rationale:{basis:['兒童質子治療三級給付、115年1月1日生效、每年約100名兒童取自健保署新聞稿','新發癌症13萬8,051人取自112年癌症登記報告'],
      layout_reason:'先用表格比較光子與粒子治療，再談優缺點，最後說明健保與自費界線。',
      tone:'專業易懂', tone_reason:'治療選擇與費用議題需要精確、中性。',
      to_verify:['成人粒子治療收費以院所公告為準','健保給付適應症可能再擴大']},
    decision_points:[DP_PAY]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'醫師提到質子治療？先搞懂3件事再決定',
    update_date:'2026/11/23',
    intro:'聽到「質子」「重粒子」，很多人第一個問題是：比較好嗎？要花多少錢？簡單說，它們是更「瞄準」腫瘤的放射治療，可以少照到旁邊的好組織。好消息是，健保從115年1月1日起開始給付兒童癌症的質子治療；不過大人做質子或重粒子，目前還是要自費。',
    sections:[
      {heading:'和一般電療差在哪？',format:'table',table:TABLE},
      {heading:'適合誰？',format:'bullets',items:[
        '腫瘤很靠近重要器官，例如腦、脊髓、眼睛。',
        '還在長大的孩子，希望減少對發育的影響。',
        '是不是適合，要由放射腫瘤科醫師評估，不是越貴越好。'
      ]},
      {heading:'錢的部分先問清楚',format:'bullets',items:[
        '兒童特定癌症：健保給付。',
        '大人：多為自費，請醫院給書面費用說明。',
        '翻出保單看看「放射線治療」「自費醫療」怎麼賠。'
      ]}
    ],
    think_tank_view:'質子、重粒子是多一個選擇，不是保證治好的神器。跟醫師把適不適合、費用、副作用一次問清楚，再和家人一起決定。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'給付資訊引自健保署並標明生效日期，未寫自費金額，未使用療效保證用語，未推薦特定醫院。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從病人最常問的「差在哪、適合誰、多少錢」展開。', tone:'生活親切', tone_reason:'給病人與家屬閱讀。', to_verify:['成人收費以院所公告為準']},
    decision_points:[DP_PAY]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'質子、重粒子治療：給付與自費重點',
    update_date:'2026/11/23',
    intro:'粒子治療可減少正常組織受照。115年1月1日起健保給付兒童癌症質子治療，成人多為自費。',
    sections:[
      {heading:'比較',format:'table',table:TABLE},
      {heading:'重點',format:'bullets',items:[
        '適合鄰近重要器官的局部腫瘤與兒童腫瘤。',
        '副作用較少有證據，控制效果仍在研究。'
      ]},
      {heading:'治療前',format:'bullets',items:[
        '請醫師評估是否適合。',
        '索取書面費用說明，確認保單條款。'
      ]}
    ],
    think_tank_view:'多一個選擇，不等於保證有效；先評估、再決定。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'給付資訊引自健保署並標明生效日期，未使用療效保證用語，未推薦特定醫院。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為比較、重點、治療前三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['成人收費以院所公告為準']},
    decision_points:[DP_PAY]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'癌症放射治療（質子、重粒子）', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'健保首度給付兒童癌症質子治療', primary_visual:'115.1.1', secondary_message:'依劑量分三級給付，成人多為自費', action_priority:'治療前先問適應症與費用'},
    headline_hook:'質子、重粒子治療', headline_main:'健保給付界線一次看', title_accent:'給付界線',
    primary_stat:{kicker:'健保署公告', value:'115.1.1', label:'兒童癌症質子治療納入健保', note:'每年約 100 名兒童受惠'},
    chart:{type:'bar', title:'兒童質子治療健保支付（萬點）', points:[
      {label:'低度', value:67.6, display:'67.6'},
      {label:'中度', value:103, display:'103'},
      {label:'高度', value:126, display:'126', highlight:true}
    ], note:'健保署 115-01-12｜依吸收劑量分級'},
    secondary_stats:[
      {value:'多為自費', label:'成人質子與重粒子'},
      {value:'約 13.8 萬人', label:'112 年新發癌症'}
    ],
    action_title:'治療前先問',
    action_cards:[
      {key:'評', text:'請放射腫瘤科醫師評估是否適合'},
      {key:'比', text:'了解與傳統放療的差異與副作用'},
      {key:'費', text:'索取書面費用說明，確認是否給付'},
      {key:'保', text:'檢視保單對放射治療的給付條件'}
    ],
    carousel_suggestion:{reason:'若想把原理、適應症與費用分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'comparison', headline_hook:'光子 vs 粒子', headline_main:'差在劑量分布'},
      {layout_type:'knowledge', headline_hook:'適合誰', headline_main:'鄰近重要器官的腫瘤'},
      {layout_type:'data', headline_hook:'健保給付', headline_main:'兒童癌症三級給付'}]},
    hashtags:['質子治療','重粒子','放射治療','癌症治療'],
    sources:['衛生福利部中央健康保險署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'放射治療諮詢', audience:'癌症病人與家屬', scene:'病人與家屬在診間聽放射腫瘤科醫師說明，螢幕上顯示治療計畫示意圖',
      emotion:'安心、理性', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A patient and family member listening to a radiation oncologist in a clinic, a screen showing a treatment plan diagram, reassured and rational mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['三級支付點數、115年1月1日生效、每年約100名兒童取自健保署115-01-12新聞稿','新發癌症人數取自112年癌症登記報告'],
      layout_reason:'選 data：給付生效日當主角，三級支付點數做長條圖，最後給治療前的 4 個確認動作。',
      tone:'專業易懂', tone_reason:'治療與費用資訊需要中性、具體。',
      to_verify:['支付點數不等於病人自付金額']},
    decision_points:[Object.assign({}, DP_PAY, {current:'115.1.1｜兒童癌症質子治療給付（成人未給付）'})],
    content_check_note:'給付資訊引自健保署並標明日期，未寫自費金額，未使用療效保證用語，未推薦特定醫院。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'癌症放射治療（質子、重粒子）',
    collect:{
      summary:'放射治療是癌症主要治療之一，質子與重粒子等粒子治療能降低周邊正常組織劑量。健保自115年1月1日起首度給付兒童癌症質子治療，依劑量分三級；成人粒子治療仍多為自費，是癌症自費醫療與保障缺口的代表議題。',
      objective_data:[
        {item:'政策動向',desc:'115年1月1日起健保給付兒童癌症質子治療：依吸收劑量分低、中、高度三級，支付點數分別為67.6萬點、103萬點及126萬點，預估每年約100名兒童受惠。',tag:'官方統計',source:{name:'衛生福利部：健保115年1月起新增兒童癌症質子治療',url:'https://mohw.gov.tw/cp-16-85076-1.html'}},
        {item:'好發族群年齡層',desc:'3類兒童癌症分級給付：低度適用威爾姆氏腫瘤、何杰金氏淋巴瘤、神經母細胞瘤，中度適用骨肉瘤以外的惡性軟組織肉瘤、非何杰金氏淋巴瘤、生殖細胞瘤，高度適用中樞神經腫瘤、眼部腫瘤及骨肉瘤。',tag:'官方統計',source:{name:'衛生福利部：健保115年1月起新增兒童癌症質子治療',url:'https://mohw.gov.tw/cp-16-85076-1.html'}},
        {item:'盛行率／發生率',desc:'約13.8萬人新發癌症：112年癌症登記報告新發癌症13萬8,051人，放射治療是手術、藥物之外的主要治療方式之一。',tag:'官方統計',source:{name:'衛生福利部：112年癌症登記報告',url:'https://mohw.gov.tw/cp-16-84987-1.html'}},
        {item:'年度趨勢方向',desc:'粒子治療設備依特管辦法管理：衛福部將醫用粒子治療設備納入特定醫療技術檢查檢驗醫療儀器施行或使用管理辦法，適應症與收費由醫用粒子治療設備監督會審議（104年新聞稿）。',tag:'官方統計',source:{name:'衛生福利部：醫用粒子治療設備管理',url:'https://mohw.gov.tw/cp-16-19815-1.html'}}
      ],
      product_view:['機會：成人粒子治療多為自費，可說明癌症險、實支實付對「放射線治療」「自費醫療」的給付差異，引導保戶檢視保單。','機會：兒童給付新制可結合家長關心的兒童癌症保障議題。','風險：不可暗示粒子治療保證治癒，或保證特定商品可全額給付自費療程。'],
      marketing_view:['機會：「質子比較好嗎？」「要花多少錢？」是常見搜尋問題，可做問答式內容。','機會：可與各癌別主題串連，說明治療選擇。','風險：不可點名或推薦特定醫院、設備品牌。'],
      alert_level:'medium',
      alert_reason:'健保115年剛納入兒童質子治療，適應症未來可能擴大；成人收費與新設中心持續變動，宜定期更新。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('其中不少人治療過程會用到放射治療','DATA_FACTUAL_ACCURACY','vague_quantifier',
          '「不少人」沒有數據支持，癌登報告有治療方式統計，未引用就用模糊量詞。','low','yes',
          '癌症登記報告中接受放射治療的比例','no','clarify','需查癌登治療方式統計後再寫比例，否則刪除。',
          '放射治療是其中常見的治療方式之一'),
        F('能把劑量較集中在腫瘤，減少周邊正常組織受到的照射','MEDICAL_INTERPRETATION','benefit_without_limitation',
          '只寫優點，未在同段說明並非所有癌症都適合、腫瘤控制效果仍在研究，易讓讀者以為粒子治療全面優於傳統放療。','medium','no',
          null,'no','clarify','限制在後段才出現。',
          '能把劑量較集中在腫瘤，減少周邊正常組織受到的照射，但並非所有癌症都適合'),
        F('費用依各院所經主管機關核定的收費公告','LEGAL_COMPLIANCE','missing_source',
          '未說明讀者可在哪裡查到收費資訊，也未附出處。','low','no',
          null,'no','clarify','可補查詢管道。',
          '費用依各院所經主管機關核定的收費公告，治療前可向院所索取書面說明'),
        F('可以少照到旁邊的好組織','MEDICAL_INTERPRETATION','benefit_without_limitation',
          '白話寫法未提醒仍可能有副作用，可能被理解為沒有副作用。','low','no',
          null,'no','clarify','屬白話簡化。',
          '可以少照到旁邊的好組織，但仍可能有副作用')
      ],
      card:[
        F('兒童癌症質子治療納入健保','DATA_FACTUAL_ACCURACY','scope_condition_missing',
          '給付限特定兒童癌別，卡面主標籤未說明，可能讓讀者以為所有兒童癌症都給付。','medium','no',
          null,'no','clarify','需補範圍。',
          '特定兒童癌症質子治療納入健保'),
        F('兒童質子治療健保支付（萬點）','TERMINOLOGY_LANGUAGE','jargon_unexplained',
          '「點」是健保支付單位，不等於病人自付金額，一般讀者容易誤解為治療費用。','low','no',
          null,'no','clarify','屬用語說明。',
          '兒童質子治療健保支付點數（萬點，非自付額）')
      ]
    },
    title_alts:[
      '質子、重粒子治療是什麼？適應症、優缺點與健保給付界線',
      '醫師提到質子治療？先搞懂3件事再決定',
      '115年起健保給付兒童質子治療：粒子治療的給付與自費界線'
    ],
    card_title_alts:[
      ['質子、重粒子治療','健保給付界線一次看'],
      ['兒童質子治療','115 年起健保給付'],
      ['粒子治療要自費嗎','治療前先問這 4 件事']
    ],
    data_addon:[
      '兒童質子治療新制預估健保挹注1.05億點（健保署115-01-12）。',
      '同一波新制另含高血脂醫療給付改善方案與重大外傷加成，三項合計挹注3.7億元。',
      '衛福部訂有質子／重粒子放射治療的同意書與說明書範本，收費欄位須載明自費費用。'
    ],
    cta:'醫師建議粒子治療時，先問清楚適合的理由、和傳統放療的差異，並索取書面費用說明，再對照自己的保單條款。'
  });
})();
