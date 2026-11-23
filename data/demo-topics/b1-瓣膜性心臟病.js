/* v6 示範主題：瓣膜性心臟病（B1 心血管・腎臟・內分泌代謝，含瓣膜手術）
   查證日期：2026-11-20。數據來源：衛福部全民健康保險會《113年全民健康保險監理指標監測結果報告》（2025-11，指標4.3特殊材質生物組織心臟瓣膜申報占率）、
   中央社2026-01-14〈極簡經導管心臟瓣膜置換 健保是否擴大適用待議〉（衛福部長石崇良說明、台大醫院醫師說明）、衛福部114年死因統計。
   衛福部、國健署未公布瓣膜性心臟病盛行率；死因統計摘要表未單獨列出瓣膜疾病。
   參考方向：健康智庫〈瓣膜性心臟病〉2022/05、〈心血管疾病外科治療－瓣膜心臟病手術〉2025/01。 */
(function(){
  const REFS = [
    {title:'113年全民健康保險監理指標監測結果報告',source:'衛生福利部全民健康保險會',url:'https://www.mohw.gov.tw/dl-98589-4782a345-f250-4d14-8b78-c550439eb29e.html'},
    {title:'極簡經導管心臟瓣膜置換 健保是否擴大適用待議',source:'中央社',url:'https://www.cna.com.tw/news/ahel/202601140137.aspx'},
    {title:'國人死亡人數連續3年下降 十大死因中6項死因人數、死亡率都減少（114年死因統計）',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}
  ];
  const TABLE = {headers:['類型','說明'], rows:[
    ['狹窄','瓣膜打不開，心臟要更用力才能把血打出去'],
    ['閉鎖不全','瓣膜關不緊，血液逆流，心臟負擔加重'],
    ['外科瓣膜手術','開胸修補或置換瓣膜，置換可選機械瓣或生物組織瓣'],
    ['經導管瓣膜置換','經血管放入人工瓣膜，健保目前有條件給付手術高風險者']
  ]};
  const TAGS = ['瓣膜性心臟病','主動脈瓣狹窄','心臟瓣膜手術','TAVI','高齡健康'];

  const DP_TAVI = {id:'dp-valve-tavi', type:'data_scope', title:'經導管瓣膜置換的給付條件說法',
    desc:'衛福部長2026年1月表示經導管瓣膜置換「在某些條件下已納入健保給付」，是否擴大仍待研議；具體條件（手術高風險、多為高齡或多重共病）來自台大醫院醫師受訪說明，並非健保署公告原文。AI 沒有把醫師說法寫成官方規定。',
    current:'健保目前有條件給付手術高風險者（醫師說明），是否擴大待研議（衛福部長）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'某些條件下給付', value:'衛福部長石崇良', note:'中央社2026-01-14（目前採用）'},
      {label:'限手術高風險者', value:'台大醫院醫師', note:'同篇報導；個案須送審查，非公告原文'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'瓣膜性心臟病：喘、胸悶別當老化，認識瓣膜手術與健保給付',
    update_date:'2026/11/20',
    intro:'心臟有4個瓣膜，負責讓血液單向流動。瓣膜打不開（狹窄）或關不緊（閉鎖不全），都會加重心臟負擔，久了可能導致心臟衰竭。台大醫院院長在2026年1月受訪時指出，隨著疫苗與抗生素普及，瓣膜疾病的主因已由兒童時期感染轉為高齡退化，患者逐年增加。治療上，除了傳統開胸手術，經導管瓣膜置換提供手術高風險者另一種選擇。',
    sections:[
      {heading:'瓣膜疾病類型與治療方式',format:'table',table:TABLE},
      {heading:'給付與費用要先了解',format:'bullets',items:[
        '外科置換的「特殊材質生物組織心臟瓣膜」屬健保自付差額特材，依健保會監理指標報告，113年申報占率為43.2%。',
        '衛福部長石崇良2026年1月表示，經導管瓣膜置換在某些條件下已納入健保給付，是否擴大適用對象，將依健保作業程序與醫療科技評估研議。',
        '台大醫院醫師說明，目前健保有條件給付、個案須送審查，主要限手術高風險的高齡或多重共病者；不符條件者須自費。'
      ]},
      {heading:'什麼時候該就醫',format:'bullets',items:[
        '活動時容易喘、胸悶胸痛、頭暈甚至暈倒，或聽診發現心雜音，應到心臟內科做心臟超音波檢查。',
        '已知有瓣膜疾病者，依醫師建議定期追蹤，症狀加重時提早回診。',
        '置換機械瓣者通常須長期服用抗凝血藥物，看牙或其他手術前要主動告知醫師。'
      ]}
    ],
    think_tank_view:'瓣膜疾病越來越常見於高齡族群，而「喘、累」最容易被當成年紀大。及早用心臟超音波確認，才能在心臟還有餘力時選擇合適的治療；手術方式與瓣膜種類，則建議和醫師把風險、費用與追蹤方式一次問清楚。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'占率引自健保會113年監理指標報告，給付說明標明為衛福部長與台大醫院醫師受訪內容，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['生物組織心臟瓣膜113年自付差額申報占率43.2%（健保會）','經導管瓣膜置換給付現況（中央社2026-01-14）'],
      layout_reason:'先用表格說明瓣膜疾病類型與兩種治療方式，再整理給付，最後給就醫時機。',
      tone:'專業易懂', tone_reason:'治療選擇與費用需要精確、標明出處。',
      to_verify:['經導管瓣膜置換的健保給付條件原文（健保署特材給付規定）','國內瓣膜性心臟病盛行率查無官方統計']},
    decision_points:[DP_TAVI]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽爬樓梯就喘？可能是心臟的「門」卡住了',
    update_date:'2026/11/20',
    intro:'心臟裡有4扇「門」叫瓣膜，讓血液只往一個方向流。門打不開或關不緊，心臟就得更費力工作。台大醫院院長2026年1月受訪時提到，現在瓣膜疾病多半是年紀大、瓣膜退化造成，患者一年比一年多。好消息是，除了開刀，現在還有從血管放入新瓣膜的方式，健保也在某些條件下給付。',
    sections:[
      {heading:'瓣膜出狀況，有這幾種',format:'table',table:TABLE},
      {heading:'費用怎麼算？',format:'bullets',items:[
        '開刀換生物組織瓣膜，健保有給付基本款，選特殊材質要自付差額；113年申報占率是43.2%。',
        '從血管放瓣膜（經導管瓣膜置換），衛福部長說目前在某些條件下健保有給付，要不要擴大還在研議。',
        '醫師說明，目前主要給付開刀風險高的長輩，每個個案都要送審，不符合就要自費。'
      ]},
      {heading:'出現這些狀況，帶長輩去檢查',format:'bullets',items:[
        '走路、爬樓梯特別喘，胸悶、頭暈，甚至昏倒。',
        '醫師聽診說有心雜音，就去做心臟超音波。',
        '換過機械瓣的人通常要長期吃抗凝血藥，看牙前記得告訴醫師。'
      ]}
    ],
    think_tank_view:'長輩說「爬兩層樓就喘」，別只回一句「年紀大了啦」。陪他去做一次心臟超音波，就能知道是不是瓣膜出了問題。早點發現，治療的選擇也比較多。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'占率引自健保會監理指標報告並標明年份，給付說明標明為衛福部長與醫師受訪內容，語氣親切但未淡化疾病風險，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「心臟的門」比喻帶出類型、費用與就醫時機。', tone:'生活親切', tone_reason:'給子女與長輩閱讀，降低醫學名詞距離感。', to_verify:['經導管瓣膜置換給付條件原文']},
    decision_points:[DP_TAVI]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'瓣膜性心臟病：喘、胸悶、暈倒要做心臟超音波',
    update_date:'2026/11/20',
    intro:'瓣膜狹窄或閉鎖不全會加重心臟負擔，高齡退化是主因。治療有外科手術與經導管瓣膜置換，後者健保在某些條件下給付。',
    sections:[
      {heading:'類型與治療',format:'table',table:TABLE},
      {heading:'給付',format:'bullets',items:[
        '生物組織心臟瓣膜屬自付差額特材，113年申報占率43.2%。',
        '經導管瓣膜置換有條件給付，是否擴大待研議。'
      ]},
      {heading:'就醫時機',format:'bullets',items:[
        '活動喘、胸悶、暈倒或有心雜音。',
        '已確診者定期追蹤。',
        '機械瓣術後依醫囑服用抗凝血藥。'
      ]}
    ],
    think_tank_view:'瓣膜疾病的症狀常被當成老化，心臟超音波是確認的第一步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'占率引自健保會監理指標報告並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為類型、給付、就醫三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['給付條件原文']},
    decision_points:[DP_TAVI]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'瓣膜性心臟病', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'瓣膜疾病多為高齡退化，喘、胸悶別當老化', primary_visual:'43.2%', secondary_message:'經導管瓣膜置換健保有條件給付', action_priority:'有症狀做心臟超音波'},
    headline_hook:'爬樓梯就喘？', headline_main:'認識瓣膜性心臟病', title_accent:'瓣膜性心臟病',
    hero_message:'心臟的 4 扇門', hero_support:'打不開或關不緊，都會加重心臟負擔',
    knowledge_title:'類型與治療', knowledge_note:'活動喘、胸悶、暈倒，**做心臟超音波**',
    knowledge_cards:[
      {label:'狹窄', icon:'heart', lines:['瓣膜打不開','心臟更用力']},
      {label:'閉鎖不全', icon:'heart', lines:['瓣膜關不緊','血液逆流']},
      {label:'外科手術', icon:'check', lines:['修補或置換','機械瓣／生物瓣']},
      {label:'經導管置換', icon:'search', lines:['經血管放入','健保有條件給付']}
    ],
    primary_stat:{value:'43.2%', label:'生物組織心臟瓣膜自付差額申報占率', note:'健保會 113 年監理指標監測結果報告'},
    secondary_stats:[
      {value:'4 個', label:'心臟瓣膜'},
      {value:'待研議', label:'經導管置換擴大給付'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'查', text:'活動喘、胸悶、暈倒做心臟超音波'},
      {key:'追', text:'已確診者依醫囑定期追蹤'},
      {key:'問', text:'術前問清瓣膜種類與自付差額'},
      {key:'藥', text:'機械瓣術後依醫囑服用抗凝血藥'}
    ],
    carousel_suggestion:{reason:'若想把類型、治療與給付分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'心臟的 4 扇門', headline_main:'狹窄與閉鎖不全'},
      {layout_type:'knowledge', headline_hook:'治療方式', headline_main:'外科手術與經導管置換'},
      {layout_type:'action', headline_hook:'什麼時候檢查', headline_main:'喘、胸悶做心臟超音波'}]},
    hashtags:['瓣膜性心臟病','心臟瓣膜手術','TAVI','高齡健康'],
    sources:['衛生福利部全民健康保險會','中央社'],
    illustration_category:'heart',
    illustration:{topic:'瓣膜性心臟病', audience:'長輩與家人', scene:'長輩爬樓梯中途停下喘氣，子女在旁扶著並拿出手機預約心臟超音波',
      emotion:'關心、警覺', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult pausing to catch breath on a staircase while an adult child supports them and books a heart ultrasound appointment on a phone, caring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['生物組織心臟瓣膜113年申報占率43.2%（健保會）','經導管瓣膜置換給付現況（中央社2026-01-14）'],
      layout_reason:'核心是認識類型與治療選擇，選 knowledge：4 張卡說明狹窄、閉鎖不全與兩種治療，給付數字退到下方。',
      tone:'專業易懂', tone_reason:'治療與費用需清楚。',
      to_verify:['國內瓣膜疾病盛行率查無官方統計']},
    decision_points:[Object.assign({}, DP_TAVI, {current:'經導管置換健保有條件給付，擴大待研議'})],
    content_check_note:'占率引自健保會113年監理指標報告，給付說明標明出處，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'瓣膜性心臟病',
    collect:{
      summary:'瓣膜性心臟病隨高齡化以退化性為主、患者逐年增加；經導管瓣膜置換健保目前有條件給付，衛福部長2026年1月表示是否擴大仍待研議，生物組織瓣膜則屬自付差額特材，是兼具高齡健康與醫療費用溝通價值的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'生物組織心臟瓣膜申報占率43.2%：依健保會《113年全民健康保險監理指標監測結果報告》，特殊材質生物組織心臟瓣膜屬自付差額特材，111至113年占率分別為43.0%、42.0%、43.2%。國內瓣膜疾病盛行率查無官方統計。',tag:'官方統計',source:{name:'衛生福利部全民健康保險會：113年全民健康保險監理指標監測結果報告',url:'https://www.mohw.gov.tw/dl-98589-4782a345-f250-4d14-8b78-c550439eb29e.html'}},
        {item:'年度趨勢方向',desc:'患者逐年增加、主因轉為高齡退化：台大醫院院長2026年1月受訪指出，隨疫苗與抗生素普及，瓣膜疾病由兒童時期感染轉為老年退化為主。',tag:'市場觀察',source:{name:'中央社：極簡經導管心臟瓣膜置換 健保是否擴大適用待議',url:'https://www.cna.com.tw/news/ahel/202601140137.aspx'}},
        {item:'政策動向',desc:'經導管瓣膜置換擴大給付待研議：衛福部長石崇良2026年1月表示，經導管瓣膜置換在某些條件下已納入健保給付，是否擴大將依醫療科技評估、成本效益與財務研議。',tag:'官方統計',source:{name:'中央社：極簡經導管心臟瓣膜置換 健保是否擴大適用待議',url:'https://www.cna.com.tw/news/ahel/202601140137.aspx'}},
        {item:'好發族群年齡層',desc:'手術高風險的高齡、多重共病者為給付對象：台大醫院醫師說明，健保目前有條件給付、個案須送審查，80歲無共病者或更年輕者不在給付範圍。',tag:'市場觀察',source:{name:'中央社：極簡經導管心臟瓣膜置換 健保是否擴大適用待議',url:'https://www.cna.com.tw/news/ahel/202601140137.aspx'}}
      ],
      product_view:['機會：瓣膜手術常涉及自付差額特材與自費經導管治療，可作為檢視醫療實支保障的溝通情境。','機會：高齡退化為主因，可結合熟齡健康管理與定期心臟檢查提醒。','風險：手術方式屬醫療決策，避免暗示某種瓣膜或術式較好，給付條件須依健保公告與保單條款如實說明。'],
      marketing_view:['機會：「爬樓梯就喘別當老化」是好懂的切點，適合子女提醒父母。','機會：健保若公告擴大經導管瓣膜置換給付，將是時效溝通點。','風險：避免以高額自費金額製造焦慮。'],
      alert_level:'low',
      alert_reason:'給付擴大仍在研議，無明確時程；適合納入高齡心血管主題的長期溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('瓣膜疾病的主因已由兒童時期感染轉為高齡退化，患者逐年增加','SOURCE_EVIDENCE','secondary_citation',
          '已註明是台大醫院院長受訪說法，但「患者逐年增加」沒有任何數據或統計來源，屬醫師觀察。','medium','yes',
          '國內瓣膜性心臟病就醫人數或手術人數的年度統計。','no','confirm','說法方向合理，但無量化資料。',
          '瓣膜疾病的主因已由兒童時期感染轉為高齡退化（醫師觀察，國內尚無官方盛行率統計）'),
        F('113年申報占率為43.2%','TERMINOLOGY_LANGUAGE','term_unexplained',
          '「申報占率」對一般讀者不易理解，可能誤解為43.2%的病人選擇自付差額瓣膜。','low','no',
          null,'no','clarify','數字正確，屬術語轉白話。',
          '113年在健保申報的同類瓣膜中占43.2%',['113年申報占率43.2%','113年申報占率是43.2%']),
        F('主要限手術高風險的高齡或多重共病者','SOURCE_EVIDENCE','non_official_rule',
          '給付條件引自醫師受訪說明，而非健保署特材給付規定原文；讀者可能據此自行判斷是否符合給付。','medium','yes',
          '健保署經導管瓣膜置換特材給付規定原文。','yes','confirm','醫師說法未必有誤，但非公告原文。',
          '主要限手術高風險的高齡或多重共病者（實際條件以健保署給付規定與醫師評估為準）'),
        F('置換機械瓣者通常須長期服用抗凝血藥物','MEDICAL_INTERPRETATION','missing_counterpart',
          '只提機械瓣需抗凝血，沒有說明生物瓣的耐用年限與可能需再次手術的取捨，讀者無法理解兩者差異。','low','no',
          null,'no','clarify','屬補充說明，選擇應與醫師討論。',
          '置換機械瓣者通常須長期服用抗凝血藥物；生物瓣則可能有使用年限，兩者取捨應與醫師討論')
      ],
      card:[
        F('生物組織心臟瓣膜自付差額申報占率','DATA_FACTUAL_ACCURACY','stat_off_message',
          '主數字是自付差額特材占率，與卡面主訊息「喘、胸悶別當老化」關聯不強，讀者可能看不懂這個數字想說什麼。','low','no',
          null,'no','clarify','數字正確，屬訊息主次問題。',
          '開刀換瓣膜，選特殊材質生物瓣的比例'),
        F('健保有條件給付','SOURCE_EVIDENCE','non_official_rule',
          '卡面未說明條件內容與出處，讀者可能以為只要符合年齡就能給付。','low','yes',
          '健保署特材給付規定原文。','yes','confirm','衛福部長說法為「某些條件下」給付。',
          '健保有條件給付（須送審）')
      ]
    },
    title_alts:[
      '瓣膜性心臟病：喘、胸悶別當老化，認識瓣膜手術與健保給付',
      '爸媽爬樓梯就喘？可能是心臟的「門」卡住了',
      '心臟瓣膜狹窄怎麼治療？外科手術與經導管置換一次看'
    ],
    card_title_alts:[
      ['爬樓梯就喘？','認識瓣膜性心臟病'],
      ['心臟的 4 扇門','卡住了怎麼辦'],
      ['開刀或經導管？','瓣膜治療與給付一次看']
    ],
    data_addon:[
      '健保會113年監理指標：特殊材質生物組織心臟瓣膜自付差額申報占率111年43.0%、112年42.0%、113年43.2%。',
      '台大醫院2024年底導入極簡式經導管主動脈瓣膜置換，約1年內有17名病患術後隔天出院（醫院自述成果）。',
      '衛福部長石崇良2026年1月：經導管瓣膜置換是否擴大給付，將依醫療科技評估與財務研議。'
    ],
    cta:'這個週末問問爸媽：最近爬樓梯會不會特別喘？如果會，就幫他們約一次心臟超音波。'
  });
})();
