/* v6 示範主題：過敏性鼻炎（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-21。數據來源：中央社 2025-09-02（台灣兒童過敏氣喘免疫及風濕病醫學會理事長等受訪）、
   聯合報 2026-07-08（台灣過敏氣喘暨臨床免疫醫學會引述國內200萬名兒童世代研究）、TVBS健康2.0 2024-12-18（亞東醫院耳鼻喉部醫師：治療與環境控制）。
   查無國健署或健保署公布的過敏性鼻炎盛行率或就醫人數最新統計。
   參考方向：健康智庫〈過敏性鼻炎的好朋友──洗鼻器〉2025/02、〈春暖花開，過敏走開〉2023/02。 */
(function(){
  const CNA = 'https://www.cna.com.tw/news/ahel/202509020135.aspx';
  const UDN = 'https://health.udn.com/health/story/5963/9613581';
  const TV = 'https://health.tvbs.com.tw/medical/351768';
  const REFS = [
    {title:'20歲以下近4成有過敏性鼻炎 醫師籲遵醫囑治療',source:'中央社',url:CNA},
    {title:'醫揭過敏進行曲 早期預防時機別錯過',source:'聯合報',url:UDN},
    {title:'過敏性鼻炎患者暴增！醫曝台灣1大元兇成嚴重過敏溫床 這4招比治療更有效',source:'TVBS健康2.0',url:TV}
  ];
  const TABLE = {headers:['環境控制','怎麼做'], rows:[
    ['控制濕度','室內濕度維持在50%左右，抑制塵蟎與黴菌'],
    ['寢具清潔','定期用熱水清洗寢具，可選用防蟎寢具'],
    ['減少積塵','減少地毯、絨毛玩具與厚重布窗簾'],
    ['空氣清淨','使用空氣清淨機減少塵蟎與毛髮等過敏原']
  ]};
  const TAGS = ['過敏性鼻炎','塵蟎','鼻塞','兒童過敏','鼻過敏'];

  const DP_PREV = {id:'dp-ar-prev', type:'data_scope', title:'盛行率有兩組說法',
    desc:'中央社2025年報導：20歲以下過敏性鼻炎盛行率37.8%（醫學會理事長引述「統計」，未說明來源）；聯合報2026年報導：國內追蹤16年、逾200萬名兒童的研究，兒童盛行率近5成。族群與定義不同，AI 沒有替你挑選。',
    current:'20歲以下37.8%（醫學會理事長引述統計）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'37.8%', value:'20歲以下', note:'中央社2025年，醫學會理事長引述（目前採用）'},
      {label:'近5成', value:'兒童世代研究', note:'聯合報2026年，200萬名兒童、追蹤16年'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'過敏性鼻炎：鼻塞打噴嚏不是小事，塵蟎是頭號過敏原',
    update_date:'2026/11/21',
    intro:'過敏性鼻炎是由免疫球蛋白E（IgE）主導的發炎反應，常見症狀為打噴嚏、流鼻水、鼻塞與鼻癢。台灣兒童過敏氣喘免疫及風濕病醫學會理事長2025年受訪引述統計，國內20歲以下族群過敏性鼻炎盛行率高達37.8%，約每5人就有2人；他並指出塵蟎是最主要的過敏原，約占一半以上。台灣濕熱的氣候，正是塵蟎孳生的溫床。',
    sections:[
      {heading:'居家環境控制4重點',format:'table',table:TABLE},
      {heading:'治療原則',format:'bullets',items:[
        '醫師依嚴重度採階梯式治療，常用藥物包括口服抗組織胺、鼻內類固醇、鼻內抗組織胺與白三烯素拮抗劑。',
        '藥物控制不佳或鼻腔結構問題明顯者，可由耳鼻喉科評估下鼻甲微創或鼻中膈手術。',
        '醫師提醒勿輕信偏方或保健食品，應在醫囑下規律治療。'
      ]},
      {heading:'別忽略對生活的影響',format:'bullets',items:[
        '兒童與青少年夜間鼻塞，可能入睡困難、睡不安穩，白天精神與專注力變差。',
        '過敏體質可能從異位性皮膚炎、食物過敏發展到過敏性鼻炎與氣喘，夜間反覆咳嗽、喘鳴應就醫評估。',
        '症狀持續或反覆，請至耳鼻喉科或過敏免疫科檢查過敏原。'
      ]}
    ],
    think_tank_view:'過敏性鼻炎常被當成「小毛病」，但長期鼻塞影響睡眠、學習與工作表現。把環境控制做好、依醫囑規律用藥，多數人可以把症狀控制在不影響生活的程度；家長也別輕忽孩子夜裡的鼻塞與咳嗽。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率與塵蟎比例標明為醫學會理事長受訪引述，治療與環境控制標明醫師說法，未使用療效保證用語，未推薦特定藥品、清淨機或保健食品。',
    ai_rationale:{basis:['20歲以下盛行率37.8%、塵蟎占過敏原一半以上（中央社2025年醫學會理事長）','兒童世代研究盛行率近5成（聯合報2026年）'],
      layout_reason:'先用表格整理居家環境控制，再說明治療原則，最後提醒睡眠與過敏進行曲。',
      tone:'專業易懂', tone_reason:'需讓讀者知道環境控制與規律治療同樣重要。',
      to_verify:['37.8%的原始統計來源未說明','查無國健署或健保署最新統計']},
    decision_points:[DP_PREV]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'早上起床噴嚏打不停、鼻塞睡不好？過敏性鼻炎這樣顧',
    update_date:'2026/11/21',
    intro:'一起床就噴嚏連發、鼻水流不停，晚上又鼻塞到睡不好？這可能是過敏性鼻炎。醫學會理事長說，台灣20歲以下大約每5個人就有2個有過敏性鼻炎，最常見的元兇就是躲在床上的塵蟎。',
    sections:[
      {heading:'家裡這樣整理，過敏少一點',format:'table',table:TABLE},
      {heading:'要怎麼治療？',format:'bullets',items:[
        '醫師會依嚴重程度開口服藥或鼻噴劑，要照指示規律使用。',
        '藥物效果不好，或鼻子結構有問題，可以請耳鼻喉科評估手術。',
        '別亂試偏方或保健食品，先讓醫師檢查。'
      ]},
      {heading:'孩子鼻塞別輕忽',format:'bullets',items:[
        '晚上鼻塞會讓孩子睡不好，白天上課沒精神。',
        '夜裡一直咳、呼吸有咻咻聲，要去看醫生，可能跟氣喘有關。',
        '一直反覆發作，可以檢查看看對什麼過敏。'
      ]}
    ],
    think_tank_view:'鼻子不舒服看起來是小事，卻會影響每天的睡眠和精神。先從寢具和濕度下手，再搭配醫師的治療，一家人都能睡得更好。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明為醫學會理事長說法，語氣親切，未使用療效保證用語，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以早晨噴嚏的情境帶出環境控制、治療與孩子的影響。', tone:'生活親切', tone_reason:'給家長與鼻過敏族閱讀。', to_verify:[]},
    decision_points:[DP_PREV]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'過敏性鼻炎：環境控制4重點＋治療原則',
    update_date:'2026/11/21',
    intro:'醫學會理事長引述統計，20歲以下過敏性鼻炎盛行率37.8%；塵蟎是最主要過敏原，約占一半以上。',
    sections:[
      {heading:'環境控制',format:'table',table:TABLE},
      {heading:'治療',format:'bullets',items:[
        '階梯式治療：抗組織胺、鼻內類固醇等。',
        '勿信偏方，依醫囑規律用藥。'
      ]},
      {heading:'留意',format:'bullets',items:[
        '夜間鼻塞影響睡眠。',
        '反覆咳嗽、喘鳴需評估氣喘。'
      ]}
    ],
    think_tank_view:'環境控制加規律治療，是控制過敏性鼻炎的兩大關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明為醫學會理事長說法，未使用療效保證用語，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為環境、治療、留意三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_PREV]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'過敏性鼻炎', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'20 歲以下約每 5 人 2 人有過敏性鼻炎', primary_visual:'37.8%', secondary_message:'塵蟎占過敏原一半以上', action_priority:'環境控制、規律治療'},
    headline_hook:'噴嚏打不停、鼻塞睡不好？', headline_main:'過敏性鼻炎這樣顧', title_accent:'這樣顧',
    primary_stat:{kicker:'20 歲以下・盛行率', value:'37.8%', label:'過敏性鼻炎', note:'醫學會理事長引述統計（2025）'},
    secondary_stats:[
      {value:'一半以上', label:'過敏原為塵蟎'},
      {value:'50%', label:'室內濕度建議'}
    ],
    knowledge_title:'常見症狀',
    knowledge_cards:[
      {label:'打噴嚏', lines:['早晨連續噴嚏']},
      {label:'流鼻水', lines:['清澈鼻水']},
      {label:'鼻塞', lines:['夜間更明顯']},
      {label:'鼻癢眼癢', lines:['眼睛紅癢、喉嚨癢']}
    ],
    action_title:'這樣控制',
    action_cards:[
      {key:'濕', text:'室內濕度維持約 50%'},
      {key:'洗', text:'寢具定期熱水清洗、防蟎寢具'},
      {key:'減', text:'減少地毯、絨毛玩具'},
      {key:'醫', text:'依醫囑規律用藥，勿信偏方'}
    ],
    carousel_suggestion:{reason:'若想把症狀、環境控制與治療分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'20 歲以下', headline_main:'每 5 人約 2 人鼻過敏'},
      {layout_type:'action', headline_hook:'塵蟎退散', headline_main:'居家環境控制 4 重點'},
      {layout_type:'knowledge', headline_hook:'治療原則', headline_main:'階梯式用藥怎麼做'}]},
    hashtags:['過敏性鼻炎','塵蟎','鼻過敏','兒童過敏'],
    sources:['台灣兒童過敏氣喘免疫及風濕病醫學會（媒體受訪）','亞東醫院（媒體受訪）'],
    illustration_category:'general',
    illustration:{topic:'過敏性鼻炎', audience:'家長與學齡兒童', scene:'一位家長在臥室更換乾淨床單，旁邊的除濕機運轉中，孩子在床邊開心地抱著枕頭',
      emotion:'清爽、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A parent changing to clean bed sheets in a bedroom with a dehumidifier running, a child happily hugging a pillow by the bed, fresh and reassured mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['20歲以下盛行率37.8%（中央社2025年醫學會理事長）'],
      layout_reason:'選 data：盛行率當主角，塵蟎比例在右側，下方左列症狀、右列控制行動。',
      tone:'專業易懂', tone_reason:'實用、可照做。',
      to_verify:['37.8%原始來源']},
    decision_points:[Object.assign({}, DP_PREV, {current:'37.8%（20 歲以下）'})],
    content_check_note:'數字標明為醫學會理事長說法，未使用療效保證用語，未推薦特定商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'過敏性鼻炎',
    collect:{
      summary:'國內20歲以下近4成有過敏性鼻炎，塵蟎是頭號過敏原；醫學會持續呼籲依醫囑治療、勿信偏方，並重視夜間鼻塞對兒童睡眠與學習的影響，「環境控制＋規律治療」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'20歲以下盛行率37.8%：台灣兒童過敏氣喘免疫及風濕病醫學會理事長2025年受訪引述統計，是全年齡的1.4倍（報導未說明統計來源）。',tag:'市場觀察',source:{name:'中央社：20歲以下近4成有過敏性鼻炎 醫師籲遵醫囑治療',url:CNA}},
        {item:'年度趨勢方向',desc:'兒童過敏性鼻炎近5成：台灣過敏氣喘暨臨床免疫醫學會2026年引述國內追蹤16年、逾200萬名兒童的研究，氣喘約2至3成、異位性皮膚炎超過1成。',tag:'市場觀察',source:{name:'聯合報：醫揭過敏進行曲 早期預防時機別錯過',url:UDN}},
        {item:'政策動向',desc:'約40%病患6歲前發病：醫學會理事長引述亞洲回顧性研究，另約30%於青春期發病，呼籲依醫囑治療、勿信偏方與保健食品。',tag:'市場觀察',source:{name:'中央社：20歲以下近4成有過敏性鼻炎 醫師籲遵醫囑治療',url:CNA}},
        {item:'好發族群年齡層',desc:'塵蟎占過敏原5成以上：醫學會理事長指出塵蟎是最主要過敏原，耳鼻喉科醫師建議室內濕度維持在50%左右、熱水清洗寢具。',tag:'市場觀察',source:{name:'TVBS健康2.0：過敏性鼻炎患者暴增！醫曝台灣1大元兇',url:TV}}
      ],
      product_view:['機會：兒童過敏是家長高度關注的題材，可結合親子健康管理服務。','機會：環境控制建議實用，適合做成保戶關懷內容。','風險：避免推薦特定清淨機、除濕機或保健食品；不暗示保險給付相關商品。'],
      marketing_view:['機會：換季與梅雨季是過敏高峰的溝通時點。','機會：「早上噴嚏打不停」是普遍經驗，容易引起共鳴。','風險：不同來源盛行率差異大，需標明族群與出處。'],
      alert_level:'low',
      alert_reason:'屬長期常見疾病議題，無時效性政策事件；適合換季或梅雨季溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國內20歲以下族群過敏性鼻炎盛行率高達37.8%','SOURCE_EVIDENCE','secondary_citation_source_unstated',
          '已註明是醫學會理事長引述統計，但報導未說明統計來源與年份；另有大型兒童研究顯示近5成，數字差異大。','medium','yes',
          '37.8%的原始研究或健保資料分析。','no','confirm','數字本身未必有誤，出處未明。',
          '國內20歲以下族群過敏性鼻炎盛行率約37.8%（醫學會引述統計，研究出處待補）',
          ['台灣20歲以下大約每5個人就有2個有過敏性鼻炎','20歲以下過敏性鼻炎盛行率37.8%']),
        F('約占一半以上','DATA_FACTUAL_ACCURACY','vague_quantifier',
          '「一半以上」沒有說明是過敏原檢測陽性比例或致病原比例，口徑不清。','low','no',
          null,'no','clarify','屬口徑說明。',
          '在過敏原檢測中占一半以上'),
        F('多數人可以把症狀控制在不影響生活的程度','MEDICAL_INTERPRETATION','unsupported_generalization',
          '「多數」缺乏數據支持，可能讓讀者對治療效果有過高預期。','low','no',
          null,'no','soften','屬表達強度問題。',
          '許多人可以把症狀控制在不影響生活的程度'),
        F('室內濕度維持在50%左右','MEDICAL_INTERPRETATION','missing_practical_info',
          '未說明如何量測與維持（如濕度計、除濕機），讀者難以落實。','low','no',
          null,'no','clarify','補實作方式即可。',
          '室內濕度維持在50%左右（可用濕度計搭配除濕機）')
      ],
      card:[
        F('醫學會理事長引述統計（2025）','SOURCE_EVIDENCE','secondary_citation_source_unstated',
          '主數字未標示原始研究，卡面讀者無法查證。','low','yes',
          '原始研究出處。','no','confirm','出處未明。',
          '醫學會理事長引述（研究出處待補）'),
        F('依醫囑規律用藥，勿信偏方','MEDICAL_INTERPRETATION','missing_practical_info',
          '未提及鼻噴劑需持續使用一段時間才見效，讀者可能用幾天就停。','low','no',
          null,'no','clarify','補一句即可。',
          '依醫囑規律用藥，鼻噴劑需持續使用')
      ]
    },
    title_alts:[
      '過敏性鼻炎：鼻塞打噴嚏不是小事，塵蟎是頭號過敏原',
      '早上起床噴嚏打不停、鼻塞睡不好？過敏性鼻炎這樣顧',
      '20歲以下近4成有過敏性鼻炎：環境控制與治療重點'
    ],
    card_title_alts:[
      ['噴嚏打不停、鼻塞睡不好？','過敏性鼻炎這樣顧'],
      ['塵蟎退散','居家環境控制 4 重點'],
      ['20 歲以下近 4 成','過敏性鼻炎照顧重點']
    ],
    data_addon:[
      '醫學會2026年：約一半過敏兒來自沒有明顯過敏病史的家庭，建議家族過敏風險評估。',
      '耳鼻喉科醫師：可用藥物包括口服抗組織胺、鼻內類固醇、鼻內抗組織胺與白三烯素拮抗劑。',
      '過敏性鼻炎可能導致兒童夜間入睡困難、睡不安穩，白天疲倦。'
    ],
    cta:'這個週末用熱水把全家寢具洗一遍、量一次室內濕度；孩子若夜裡常鼻塞咳嗽，就預約耳鼻喉科或小兒過敏科。'
  });
})();
