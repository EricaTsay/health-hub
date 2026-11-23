/* v6 示範主題：視網膜剝離（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-20。數據來源：衛福部 114-09-19 學齡前兒童視力篩檢新聞稿（國健署：學童近視盛行率、近視與視網膜剝離風險）、
   TVBS健康2.0 2024-10-09（中華民國眼科醫學會理事長：近視度數與視網膜剝離風險）、TVBS健康2.0 2026-07（亞東醫院眼科醫師：高度近視與警訊）。
   查無國內官方公布的視網膜剝離發生率或就醫人數統計。
   參考方向：健康智庫〈視網膜剝離〉2022/06。 */
(function(){
  const MOHW = 'https://mohw.gov.tw/cp-7173-83963-1.html';
  const REFS = [
    {title:'學齡前兒童視力篩檢 近視防治向下扎根',source:'衛生福利部',url:MOHW},
    {title:'白內障危機大！視力心情都變差 近視逾500度小心 有人38歲就白內障',source:'TVBS健康2.0',url:'https://health.tvbs.com.tw/nutrition/350134'},
    {title:'近視700度飛蚊暴增！67歲婦黃斑部裂孔拖20年險失明 醫揭關鍵警訊',source:'TVBS健康2.0',url:'https://health.tvbs.com.tw/nutrition/364464'}
  ];
  const TABLE = {headers:['警訊','常見表現'], rows:[
    ['飛蚊突然變多','眼前黑點、絲狀物突然增加或型態改變'],
    ['閃光','沒有光源時，眼角出現像閃電般的閃光'],
    ['黑幕、視野缺損','視野某一側像被窗簾遮住，範圍逐漸擴大'],
    ['影像扭曲','看直線變彎、物體變形或視力突然下降']
  ]};
  const TAGS = ['視網膜剝離','高度近視','飛蚊症','眼科急症','近視防治'];

  const DP_RISK = {id:'dp-rd-risk', type:'tone', title:'風險數字的說法',
    desc:'「近視每增加100度，視網膜剝離風險約增加30%」是醫學會理事長引述研究的相對風險，對高度近視讀者可能造成過度擔心；AI 沒有替你決定要不要改成較中性的說法。',
    current:'近視每增加100度，視網膜剝離風險約增加30%',
    options:[{label:'維持目前寫法', action:'keep'}, {label:'改成較中性', action:'replace', from:'近視每增加100度，視網膜剝離風險約增加30%', to:'近視度數越深，視網膜剝離風險越高'}]};

  const PRO = {
    content_type:'健康文章',
    title:'視網膜剝離是眼科急症：飛蚊暴增、閃光、黑幕，立刻就醫',
    update_date:'2026/11/20',
    intro:'視網膜剝離是指視網膜從眼球壁上分離，若未及時處理，可能造成永久視力喪失，屬於眼科急症。中華民國眼科醫學會理事長2024年受訪引述研究，近視每增加100度，視網膜剝離風險約增加30%。國健署2025年也提醒，學童近視若未及早介入，未來高度近視、視網膜剝離甚至失明的風險都會增加。',
    sections:[
      {heading:'視網膜剝離的4個警訊',format:'table',table:TABLE},
      {heading:'哪些人要特別注意',format:'bullets',items:[
        '高度近視者：眼球較長、視網膜長期受牽拉而變薄，裂孔與剝離風險較高。',
        '曾接受眼睛手術、眼睛受過撞擊或外傷者。',
        '中高年齡、玻璃體退化者，以及有視網膜剝離家族史者。',
        '醫師提醒，配戴眼鏡、隱形眼鏡或做過近視雷射，都不會改變高度近視眼球本身的結構風險。'
      ]},
      {heading:'出現警訊怎麼做',format:'bullets',items:[
        '飛蚊、閃光或黑影突然改變時，盡快到眼科接受散瞳眼底檢查，不要只當成老化或疲勞。',
        '早期發現視網膜裂孔，可能以雷射治療封住裂孔；已剝離者常需手術，越早處理越有機會保住視力。',
        '高度近視者即使沒有症狀，也建議定期接受散瞳眼底檢查。'
      ]}
    ],
    think_tank_view:'飛蚊症多半是良性的，但「突然變多、合併閃光或黑幕」就是需要當天處理的警訊。台灣高度近視人口多，把這幾個警訊告訴家人與同事，關鍵時刻就能少走一段延誤的路。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'風險數字標明為醫學會理事長引述研究，國健署說法引自衛福部新聞稿，未使用療效保證用語，未推薦特定院所。',
    ai_rationale:{basis:['近視每增加100度視網膜剝離風險約增加30%（眼科醫學會理事長受訪）','國健署：學童近視若不介入將增加視網膜剝離風險（衛福部114年新聞稿）'],
      layout_reason:'視網膜剝離是急症，先用表格讓讀者認得4個警訊，再列高風險族群，最後給出現警訊時的做法。',
      tone:'專業易懂', tone_reason:'急症衛教需清楚、可立即行動，避免恐嚇。',
      to_verify:['「每100度增加30%」研究出處','查無國內視網膜剝離發生率官方統計']},
    decision_points:[DP_RISK]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'眼前突然好多黑點、閃光？當心視網膜剝離',
    update_date:'2026/11/20',
    intro:'視網膜就像相機的底片，如果從眼球壁上脫落，就叫視網膜剝離，拖久了可能看不見。眼科醫學會理事長說，研究發現近視每增加100度，視網膜剝離風險約增加30%。台灣近視的人那麼多，這幾個警訊一定要記起來。',
    sections:[
      {heading:'這4個警訊，當天就要看眼科',format:'table',table:TABLE},
      {heading:'誰比較容易發生？',format:'bullets',items:[
        '近視很深的人，視網膜比較薄、容易破洞。',
        '眼睛開過刀、被撞過或受過傷。',
        '年紀漸長、家人有人得過視網膜剝離。',
        '戴眼鏡、隱形眼鏡或雷射過，眼球結構的風險還是在。'
      ]},
      {heading:'出現警訊怎麼辦？',format:'bullets',items:[
        '別以為是太累，盡快去眼科做散瞳檢查。',
        '如果只是破洞，可能用雷射補起來；已經剝離通常要手術。',
        '高度近視的人，沒症狀也要定期檢查眼底。'
      ]}
    ],
    think_tank_view:'很多人眼前偶爾有小黑點，那通常沒關係；但如果突然變多、還有閃光或像被窗簾遮住，請當天就去看眼科。把這句話分享給近視很深的家人朋友吧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'風險數字標明為醫師引述研究，語氣親切但清楚傳達急症性質，未使用療效保證用語，未推薦特定院所。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以生活中看到黑點、閃光的情境帶出警訊與行動。', tone:'生活親切', tone_reason:'給高度近視族群與家人閱讀。', to_verify:['「每100度增加30%」研究出處']},
    decision_points:[DP_RISK]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'視網膜剝離：4個警訊，當天就醫',
    update_date:'2026/11/20',
    intro:'眼科醫學會理事長引述研究，近視每增加100度，視網膜剝離風險約增加30%。飛蚊暴增、閃光、黑幕是急症警訊。',
    sections:[
      {heading:'4個警訊',format:'table',table:TABLE},
      {heading:'高風險族群',format:'bullets',items:[
        '高度近視、眼睛手術或外傷史。',
        '中高齡、家族史。'
      ]},
      {heading:'這樣做',format:'bullets',items:[
        '警訊出現當天就醫，散瞳檢查。',
        '高度近視定期檢查眼底。'
      ]}
    ],
    think_tank_view:'飛蚊突然變多、合併閃光或黑幕，是需要當天處理的眼科急症。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'風險數字標明為醫師引述研究，未使用療效保證用語，未推薦特定院所。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊、族群、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['研究出處']},
    decision_points:[DP_RISK]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'視網膜剝離', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'視網膜剝離是眼科急症', primary_visual:'約 30%', secondary_message:'近視每增加 100 度，風險約增 3 成', action_priority:'警訊出現當天就醫'},
    headline_hook:'眼前突然好多黑點？', headline_main:'視網膜剝離 4 個警訊', title_accent:'4 個警訊',
    hero_message:'出現警訊當天就醫', hero_support:'越早處理，越有機會保住視力',
    knowledge_title:'4 個警訊', knowledge_note:'任一項突然出現，**當天看眼科**',
    knowledge_cards:[
      {label:'飛蚊暴增', icon:'search', lines:['黑點、絲狀物突然變多']},
      {label:'閃光', icon:'check', lines:['眼角出現閃電般閃光']},
      {label:'黑幕', icon:'shield', lines:['視野像被窗簾遮住']},
      {label:'影像扭曲', icon:'report', lines:['直線變彎、視力驟降']}
    ],
    primary_stat:{value:'約 30%', label:'近視每增加 100 度，視網膜剝離風險增加', note:'眼科醫學會理事長引述研究'},
    secondary_stats:[
      {value:'70.6%', label:'國小六年級近視盛行率'},
      {value:'約 100 度', label:'學齡前近視未介入每年可能增加'}
    ],
    action_title:'這樣保護視網膜',
    action_cards:[
      {key:'急', text:'警訊出現當天到眼科散瞳檢查'},
      {key:'檢', text:'高度近視者定期檢查眼底'},
      {key:'護', text:'運動時避免眼睛受撞擊'},
      {key:'防', text:'孩子從小防近視，戶外活動多一點'}
    ],
    carousel_suggestion:{reason:'若想把警訊、高風險族群與治療分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'眼前突然好多黑點？', headline_main:'視網膜剝離 4 個警訊'},
      {layout_type:'data', headline_hook:'高度近視要注意', headline_main:'每 100 度風險約增 3 成'},
      {layout_type:'action', headline_hook:'從小防近視', headline_main:'保護視網膜 4 件事'}]},
    hashtags:['視網膜剝離','高度近視','飛蚊症','眼科急症'],
    sources:['衛生福利部國民健康署','中華民國眼科醫學會（媒體受訪）'],
    illustration_category:'screening-checkup',
    illustration:{topic:'視網膜剝離警訊', audience:'高度近視上班族', scene:'一位戴眼鏡的上班族在電腦前揉眼睛，旁邊手機顯示眼科急診的地圖',
      emotion:'警覺、立即行動', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker with glasses at a computer rubbing one eye, a smartphone beside them showing a map to an eye clinic, alert and ready to act, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['近視每增加100度風險約增加30%（眼科醫學會理事長受訪）','國小六年級近視70.6%（衛福部114年新聞稿引述以往調查）'],
      layout_reason:'急症的關鍵是認得警訊，選 knowledge：4 個警訊放中段，風險數字退到下方，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'清楚傳達急症性質。',
      to_verify:['70.6%的調查年份新聞稿未註明']},
    decision_points:[Object.assign({}, DP_RISK, {current:'約 30%｜近視每增加 100 度', options:[{label:'維持目前寫法', action:'keep'}, {label:'改成較中性', action:'replace', from:'近視每增加 100 度，視網膜剝離風險增加', to:'近視度數越深，視網膜剝離風險越高'}]})],
    content_check_note:'風險數字標明為醫師引述研究，近視盛行率引自衛福部，未使用療效保證用語，未推薦特定院所。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'視網膜剝離',
    collect:{
      summary:'台灣高度近視人口多，視網膜剝離是可能造成永久視力喪失的眼科急症；國健署2025年起將近視防治向下延伸到學齡前，「認得急症警訊、高度近視定期檢查」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'國小六年級近視盛行率70.6%：衛福部2025年9月新聞稿引述以往調查，幼兒園大班9%、國小一年級19.8%、國小六年級70.6%，近視是日後視網膜剝離的重要風險（調查年份未註明）。',tag:'官方統計',source:{name:'衛生福利部：學齡前兒童視力篩檢 近視防治向下扎根',url:MOHW}},
        {item:'年度趨勢方向',desc:'近視每增加100度視網膜剝離風險約增加30%：中華民國眼科醫學會理事長2024年受訪引述研究，近視度數越深，白內障、青光眼、黃斑部病變與視網膜剝離風險都上升。',tag:'市場觀察',source:{name:'TVBS健康2.0：白內障危機大！近視逾500度小心',url:'https://health.tvbs.com.tw/nutrition/350134'}},
        {item:'政策動向',desc:'12個縣市試辦學齡前兒童視力篩檢：國健署114學年度起由眼科醫師到幼兒園為大班兒童做散瞳檢查，署長指出學齡前近視若不介入，每年度數可能增加近100度。',tag:'官方統計',source:{name:'衛生福利部：學齡前兒童視力篩檢 近視防治向下扎根',url:MOHW}},
        {item:'好發族群年齡層',desc:'高度近視族群風險較高：亞東醫院眼科醫師2026年受訪指出，高度近視眼球較長、視網膜長期受牽拉而變薄，飛蚊、閃光或黑影突然改變時應立即就醫。',tag:'市場觀察',source:{name:'TVBS健康2.0：近視700度飛蚊暴增！醫揭關鍵警訊',url:'https://health.tvbs.com.tw/nutrition/364464'}}
      ],
      product_view:['機會：視網膜剝離屬急症手術，可說明手術住院與實支實付保障。','機會：高度近視族群年輕，可結合上班族眼睛保健服務溝通。','風險：避免暗示特定檢查或手術效果保證；理賠依條款與實際醫療內容認定。'],
      marketing_view:['機會：「飛蚊暴增、閃光、黑幕」三個警訊容易做成記憶口訣。','機會：學齡前視力篩檢是新政策，可做家長向的近視防治內容。','風險：飛蚊症多為良性，需避免造成過度恐慌。'],
      alert_level:'low',
      alert_reason:'屬長期眼睛健康議題；可配合世界視覺日或寒暑假學童視力檢查時點溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('近視每增加100度，視網膜剝離風險約增加30%','SOURCE_EVIDENCE','expert_cites_unnamed_study',
          '已註明是醫學會理事長引述研究，但未說明研究名稱與族群；相對風險數字單獨呈現，可能讓高度近視讀者高估自己的絕對風險。','low','yes',
          '近視度數與視網膜剝離風險的研究出處。','no','confirm','屬引述出處與詮釋問題。',
          '近視度數越深，視網膜剝離風險越高（醫師引述研究，每增加100度約增加30%）'),
        F('屬於眼科急症','MEDICAL_INTERPRETATION','urgency_unclear',
          '說是急症，但文中沒有說明「多快」要就醫；讀者可能等到隔週門診。','low','no',
          null,'no','clarify','補具體時間。',
          '屬於眼科急症，出現警訊應當天就醫'),
        F('可能以雷射治療封住裂孔','MEDICAL_INTERPRETATION','treatment_oversimplified',
          '治療方式取決於裂孔位置與是否已剝離，文中未說明需由醫師評估，讀者可能以為一定能用雷射處理。','low','no',
          null,'no','clarify','補一句由醫師評估。',
          '可能以雷射治療封住裂孔（是否適用由醫師評估）',
          ['可能用雷射補起來']),
        F('不會改變高度近視眼球本身的結構風險','TERMINOLOGY_LANGUAGE','vague_term',
          '「結構風險」用語抽象，讀者不易理解為什麼雷射後仍有風險。','low','no',
          null,'no','clarify','可改為具體說法。',
          '不會讓已經拉長、變薄的視網膜恢復原狀，風險仍在',
          ['眼球結構的風險還是在'])
      ],
      card:[
        F('眼科醫學會理事長引述研究','SOURCE_EVIDENCE','expert_cites_unnamed_study',
          '主數字出自醫師引述未具名研究，卡面讀者無法查證。','low','yes',
          '研究出處。','no','confirm','屬出處層級問題。',
          '眼科醫學會理事長受訪引述研究（研究名稱待補）'),
        F('國小六年級近視盛行率','CURRENCY_TIMELINESS','survey_year_unstated',
          '「70.6%」未標示調查年份，衛福部新聞稿也只寫「以往調查」，讀者無法判斷時效。','low','yes',
          '國健署兒童及青少年視力監測調查的年份。','yes','confirm','新聞稿未註明年份。',
          '國小六年級近視盛行率（國健署以往調查）')
      ]
    },
    title_alts:[
      '視網膜剝離是眼科急症：飛蚊暴增、閃光、黑幕，立刻就醫',
      '眼前突然好多黑點、閃光？當心視網膜剝離',
      '高度近視要注意：視網膜剝離4個警訊與保護方法'
    ],
    card_title_alts:[
      ['眼前突然好多黑點？','視網膜剝離 4 個警訊'],
      ['飛蚊、閃光、黑幕','當天就要看眼科'],
      ['高度近視要注意','保護視網膜 4 件事']
    ],
    data_addon:[
      '衛福部2025年新聞稿：國際近視研究學會2023年資料，全球近視人口約占30%。',
      '國健署署長：學齡前兒童近視若不介入，每年度數可能增加近100度。',
      '眼科醫師提醒：飛蚊、閃光或黑影突然改變，不要只當成老化或近視加深。'
    ],
    cta:'如果你近視超過500度，今年就安排一次散瞳眼底檢查；並把「飛蚊暴增、閃光、黑幕要當天就醫」告訴家人。'
  });
})();
