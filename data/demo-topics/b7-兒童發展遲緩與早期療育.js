/* v6 示範主題：兒童發展遲緩與早期療育（B7 女性・男性・生育與兒童）
   查證日期：2026-11-20。數據來源：衛福部／國健署新聞稿（2025-04-11、2025-07-16）。
   參考方向：健康智庫〈兒童發展聯合評估中心 把握關鍵療育期〉2024/04、〈今年7月起新增6次「兒童發展篩檢服務」〉2024/07。 */
(function(){
  const REFS = [
    {title:'兒童發展篩檢上路滿週年 服務利用逾40萬人次',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-83078-1.html'},
    {title:'擴大補助88家兒童發展聯合評估中心 提升量能與評估時效',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-82154-1.html'},
    {title:'兒童發展篩檢服務院所查詢',source:'衛生福利部國民健康署',url:'https://healthforkids.mohw.gov.tw/HospitalMap/?id=920da57226144ffab67339c1a5f2fec1'}
  ];
  const TABLE = {headers:['步驟','怎麼做'], rows:[
    ['1. 發展監測','平時用《兒童健康手冊》觀察並記錄孩子的發展'],
    ['2. 發展篩檢','6個月至未滿7歲共6次公費篩檢，由兒科、家醫科等醫師執行'],
    ['3. 轉介評估','篩檢疑似異常者，轉介至兒童發展聯合評估中心或評估醫院'],
    ['4. 早期療育','確認後及早銜接醫療、社會福利或特殊教育等療育服務']
  ]};
  const TAGS = ['兒童發展','發展遲緩','早期療育','兒童發展篩檢','親子育兒'];

  const DP_RATE = {id:'dp-dev-rate', type:'data_version', title:'疑似異常比例有兩個時間點',
    desc:'國健署2025年4月公布截至3月底篩檢逾27萬人次、疑似異常6.2%；7月公布截至6月底40萬2,594人次、疑似異常6.3%。兩者是同一方案的不同截止點，AI 採用較新的一期，供你確認。',
    current:'截至2025年6月底40萬2,594人次，疑似異常6.3%（國健署）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'6.3%', value:'截至2025年6月底', note:'40萬2,594人次（目前採用）'},
      {label:'6.2%', value:'截至2025年3月底', note:'逾27萬人次'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'兒童發展篩檢一年逾40萬人次：6.3%疑似異常，把握早期療育黃金期',
    update_date:'2026/11/20',
    intro:'國民健康署自2024年7月起提供未滿7歲兒童6次公費發展篩檢，上路一年至2025年6月底完成40萬2,594人次，其中6.3%有疑似發展異常情形，發現逾2.5萬名兒童疑似發展遲緩。國健署提醒，篩檢疑似異常不代表就是發展遲緩，需到兒童發展聯合評估中心進一步確認；及早發現、及早療育，才能把握發展的黃金關鍵期。',
    sections:[
      {heading:'從觀察到療育的4步驟',format:'table',table:TABLE},
      {heading:'篩檢與評估資源',format:'bullets',items:[
        '全國超過1,200家醫療機構、2,600餘位兒科、家醫科及幼兒專責醫師參與篩檢服務。',
        '國健署2025年擴大補助全國88家兒童發展聯合評估中心，預計全年可提供4萬3,957人次評估服務。',
        '疑似單一領域遲緩可由單科評估，疑似多重發展遲緩則由跨專業團隊聯合評估。'
      ]},
      {heading:'家長可以這樣做',format:'bullets',items:[
        '依時程帶孩子接受發展篩檢，不要等到上幼兒園才發現。',
        '篩檢結果需追蹤者（約15%），依醫師建議回診與衛教。',
        '可上國健署「兒童發展篩檢服務院所」地圖查詢鄰近院所。'
      ]}
    ],
    think_tank_view:'孩子的發展只有一次。發展篩檢的意義不是替孩子貼標籤，而是讓需要協助的孩子早一點被看見；即使篩檢結果疑似異常，也不必過度焦慮，交給聯合評估中心確認後，早期療育的效果往往比家長想像的好。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'篩檢人次與比例引自國健署並標明截止時間，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['40萬2,594人次、6.3%疑似異常（國健署2025-07-16新聞稿）','88家聯評中心、4萬3,957人次服務量（國健署2025-04-11新聞稿）'],
      layout_reason:'先用表格說明從監測到療育的流程，再介紹資源，最後給家長具體做法。',
      tone:'專業易懂', tone_reason:'家長需要清楚的流程與資源。',
      to_verify:['6次篩檢的各年齡區間未在引用新聞稿中列出']},
    decision_points:[DP_RATE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'孩子說話比較慢？免費兒童發展篩檢，早一點看見需要',
    update_date:'2026/11/20',
    intro:'每個孩子成長的速度不一樣，但有些落後需要專業協助。國健署從2024年7月開始，提供未滿7歲的孩子6次免費發展篩檢，一年就有超過40萬人次參加，大約每100次篩檢有6次結果需要進一步評估。早點發現，就能早點幫上忙。',
    sections:[
      {heading:'從觀察到療育，4個步驟',format:'table',table:TABLE},
      {heading:'去哪裡篩？',format:'bullets',items:[
        '全台超過1,200家診所和醫院都可以做，兒科、家醫科醫師都能幫忙。',
        '上國健署的「兒童發展篩檢服務院所」地圖，就能找到家附近的院所。',
        '需要進一步評估時，醫師會轉介到全國88家兒童發展聯合評估中心。'
      ]},
      {heading:'篩檢結果不理想怎麼辦？',format:'bullets',items:[
        '疑似異常不代表一定是發展遲緩，要再做評估確認。',
        '需要追蹤的孩子，照醫師建議回診就好。',
        '確認後越早開始療育，效果通常越好。'
      ]}
    ],
    think_tank_view:'篩檢不是考試，而是幫孩子做一次健康檢查。把兒童健康手冊放在包包裡，每次看診時順便問問醫生，就是最好的開始。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明時間，語氣親切且避免標籤化，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家長的擔心帶出流程、資源與結果處理。', tone:'生活親切', tone_reason:'降低家長焦慮。', to_verify:[]},
    decision_points:[DP_RATE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'兒童發展篩檢：6次公費、及早療育',
    update_date:'2026/11/20',
    intro:'公費兒童發展篩檢上路一年完成40萬2,594人次，6.3%疑似異常。疑似異常需到聯評中心確認。',
    sections:[
      {heading:'4步驟',format:'table',table:TABLE},
      {heading:'資源',format:'bullets',items:[
        '超過1,200家院所提供篩檢。',
        '全國88家兒童發展聯合評估中心。'
      ]}
    ],
    think_tank_view:'按時篩檢、及早評估，是把握發展黃金期的關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明時間，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為步驟與資源兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_RATE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'兒童發展遲緩與早期療育', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'公費發展篩檢一年逾 40 萬人次', primary_visual:'6.3%', secondary_message:'疑似異常需聯評中心確認', action_priority:'按時篩檢、及早療育'},
    headline_hook:'孩子發展跟上了嗎？', headline_main:'未滿 7 歲 6 次免費篩檢', title_accent:'6 次免費篩檢',
    primary_stat:{kicker:'2024/7–2025/6・第一年', value:'6.3%', label:'篩檢疑似發展異常', note:'國健署｜40 萬 2,594 人次'},
    secondary_stats:[
      {value:'逾 2.5 萬名', label:'疑似發展遲緩兒童'},
      {value:'88 家', label:'兒童發展聯合評估中心'},
      {value:'約 15%', label:'需持續追蹤衛教'}
    ],
    action_title:'家長這樣做',
    action_cards:[
      {key:'記', text:'用兒童健康手冊觀察記錄發展'},
      {key:'篩', text:'6 個月至未滿 7 歲按時接受篩檢'},
      {key:'評', text:'疑似異常轉介聯評中心確認'},
      {key:'療', text:'確認後及早銜接早期療育'}
    ],
    carousel_suggestion:{reason:'若想把篩檢數據、流程與資源分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'發展篩檢第一年', headline_main:'逾 40 萬人次受檢'},
      {layout_type:'knowledge', headline_hook:'從觀察到療育', headline_main:'4 個步驟'},
      {layout_type:'action', headline_hook:'去哪裡篩？', headline_main:'1,200 家院所可查'}]},
    hashtags:['兒童發展','發展遲緩','早期療育','親子育兒'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'兒童發展篩檢', audience:'學齡前兒童家長', scene:'小兒科醫師陪幼兒玩積木觀察發展，家長在旁拿著兒童健康手冊記錄',
      emotion:'溫暖、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A paediatrician playing with building blocks with a toddler to observe development while a parent records notes in a child health booklet, warm and reassuring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['6.3%、40萬2,594人次（國健署2025-07-16新聞稿）'],
      layout_reason:'關鍵訊息是「篩檢已普及、少數需進一步評估」，選 data：疑似異常比例當主角，人數與資源退到第二層，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'避免讓家長恐慌或貼標籤。',
      to_verify:['疑似異常不代表確診']},
    decision_points:[Object.assign({}, DP_RATE, {current:'6.3%｜截至 2025 年 6 月底'})],
    content_check_note:'篩檢數據引自國健署並標明期間，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'兒童發展遲緩與早期療育',
    collect:{
      summary:'國健署2024年7月起提供未滿7歲兒童6次公費發展篩檢，第一年完成逾40萬人次、6.3%疑似發展異常，並擴大補助88家聯合評估中心；「按時篩檢、疑似異常轉介評估、及早療育」是新生代家庭值得長期溝通的育兒議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'6.3%疑似發展異常：國健署兒童發展篩檢服務上路一年，截至2025年6月底完成40萬2,594人次，發現逾2.5萬名兒童疑似發展遲緩，另約15%需持續追蹤及衛教。',tag:'官方統計',source:{name:'衛生福利部：兒童發展篩檢上路滿週年 服務利用逾40萬人次',url:'https://mohw.gov.tw/cp-16-83078-1.html'}},
        {item:'年度趨勢方向',desc:'逾27萬增至40萬人次：截至2025年3月底篩檢逾27萬人次、疑似異常6.2%，至6月底累計40萬2,594人次、疑似異常6.3%，比例大致穩定。',tag:'官方統計',source:{name:'衛生福利部：擴大補助88家兒童發展聯合評估中心',url:'https://mohw.gov.tw/cp-16-82154-1.html'}},
        {item:'政策動向',desc:'88家兒童發展聯合評估中心：國健署2025年擴大補助全國88家聯評中心（含17家重點中心），預計全年可提供4萬3,957人次評估服務，提升評估量能與時效。',tag:'官方統計',source:{name:'衛生福利部：擴大補助88家兒童發展聯合評估中心',url:'https://mohw.gov.tw/cp-16-82154-1.html'}},
        {item:'好發族群年齡層',desc:'未滿7歲共6次篩檢：篩檢服務涵蓋6個月至未滿7歲兒童，全國超過1,200家醫療機構、2,600餘位兒科、家醫科及幼兒專責醫師參與執行。',tag:'官方統計',source:{name:'衛生福利部：兒童發展篩檢上路滿週年 服務利用逾40萬人次',url:'https://mohw.gov.tw/cp-16-83078-1.html'}}
      ],
      product_view:['機會：新生代家庭重視育兒資源，可結合兒童健康衛教與保障規劃說明。','機會：早期療育涉及長期醫療與復健支出，可說明相關醫療保障條款範圍。','風險：發展遲緩議題敏感，避免任何標籤化或核保相關的不當暗示。'],
      marketing_view:['機會：「免費篩檢、全國1,200家院所」是實用、正向的育兒資訊。','機會：祖父母照顧者也可以是溝通對象，協助觀察孩子發展。','風險：避免讓家長產生比較焦慮，強調每個孩子節奏不同。'],
      alert_level:'low',
      alert_reason:'屬長期育兒政策議題，方案已穩定執行，適合納入親子族群年度溝通規劃。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('篩檢結果需追蹤者（約15%）','SOURCE_EVIDENCE','ambiguous_unit',
          '國健署新聞稿寫的是「6.3萬人次需持續追蹤」與「大約有15%屬於須持續追蹤」，文章沒有說明15%是以人次計算，容易和6.3%疑似異常混淆。','low','no',
          null,'no','clarify','補上單位即可。',
          '篩檢結果需追蹤者（約15%的篩檢人次）'),
        F('早期療育的效果往往比家長想像的好','COMPLIANCE_RISK','unsupported_efficacy',
          '智庫觀點對療育效果的評價沒有引用任何研究或官方資料，容易被讀成效果保證。','medium','no',
          null,'no','clarify','改為有出處或較中性的說法。',
          '及早銜接療育，才能把握發展的關鍵期'),
        F('大約每100次篩檢有6次結果需要進一步評估','SOURCE_EVIDENCE','period_unstated',
          '生活親切版沒有寫統計截止時間（2025年6月底），讀者會以為是最新年度結果。','low','no',
          null,'no','clarify','補上截止時間即可。',
          '截至2025年6月底，大約每100次篩檢有6次結果需要進一步評估'),
        F('確認後越早開始療育，效果通常越好','COMPLIANCE_RISK','unsupported_efficacy',
          '生活親切版的療效說法沒有出處，國健署新聞稿只寫「把握發展黃金期」。','low','no',
          null,'no','clarify','改用官方說法。',
          '確認後及早開始療育，把握發展黃金期')
      ],
      card:[
        F('疑似發展遲緩兒童','SOURCE_EVIDENCE','unit_mismatch',
          '主數字6.3%以「人次」計算，次數字「逾2.5萬名」以「人」計算，並列時讀者可能誤以為兩者可互相換算。','low','no',
          null,'no','clarify','標示單位即可。',
          '疑似發展遲緩兒童（人數）'),
        F('需持續追蹤衛教','SOURCE_EVIDENCE','ambiguous_unit',
          '「約 15%」是以篩檢人次計算，卡面沒有標示，可能被讀成15%的兒童。','low','no',
          null,'no','clarify','補單位即可。',
          '篩檢人次需持續追蹤衛教')
      ]
    },
    title_alts:[
      '兒童發展篩檢一年逾40萬人次：6.3%疑似異常，把握早期療育黃金期',
      '孩子說話比較慢？免費兒童發展篩檢，早一點看見需要',
      '未滿7歲6次公費發展篩檢：流程、資源與家長須知'
    ],
    card_title_alts:[
      ['孩子發展跟上了嗎？','未滿 7 歲 6 次免費篩檢'],
      ['發展篩檢第一年','逾 40 萬人次受檢'],
      ['疑似異常別慌','聯評中心幫你確認']
    ],
    data_addon:[
      '兒童發展篩檢截至2025年6月底40萬2,594人次，疑似異常6.3%，逾2.5萬名兒童疑似發展遲緩（國健署）。',
      '2025年補助88家兒童發展聯合評估中心，預計全年4萬3,957人次服務量。',
      '疑似異常不代表發展遲緩，需經聯評中心確認。'
    ],
    cta:'翻開兒童健康手冊確認下一次發展篩檢時間，上國健署地圖找附近院所。'
  });
})();
