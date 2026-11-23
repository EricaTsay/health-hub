/* v6 示範主題：腎結石（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-21。數據來源：TVBS 2026-04-17（泌尿科醫師說明警訊、高風險族群、每日飲水量）、
   NOWnews 2024-01-01（國泰醫院泌尿科醫師說明：泌尿道結石盛行率約10%、鈉與高草酸飲食建議、三種治療方式）、國健署2025年世界腎臟日新聞稿（健康成人每日約2,000 c.c.水）。
   國內查無腎結石官方盛行率；盛行率為醫師說明且範圍為泌尿道結石。
   參考方向：健康智庫〈腎結石〉2023/02、〈結石風險？菠菜配豆腐行不行〉2025/03、〈微創手術－經皮腎臟造廔取石術〉2024/01。 */
(function(){
  const REFS = [
    {title:'春暖不是花先開 是「結石」先暴增？醫教1招預防結石',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/regimen/362415'},
    {title:'她尿液混濁不清！元凶竟是腎結石 新手術碎石超威2天出院',source:'NOWnews今日新聞',url:'https://www.nownews.com/news/6332683'},
    {title:'3成三高患者腎功能亮紅燈 掌握8招「腎」健康',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-81762-1.html'}
  ];
  const TABLE = {headers:['治療方式','說明（醫師受訪）'], rows:[
    ['體外震波碎石','非侵入、免住院免麻醉，效果較難預期；大於2公分的結石不推薦'],
    ['輸尿管鏡雷射碎石','經尿道進入、無傷口，可處理腎臟角落的結石，術後1-2天出院'],
    ['經皮腎造廔取石','腰部開小口以內視鏡取石，適合較大結石，但感染、出血等風險較高']
  ]};
  const TAGS = ['腎結石','泌尿道結石','多喝水','腰痛血尿','泌尿科'];

  const DP_SRC = {id:'dp-stone-src', type:'data_scope', title:'盛行率的出處與範圍',
    desc:'「盛行率約10%」是國泰醫院泌尿科醫師受訪說明，範圍為「泌尿道結石」（含腎、輸尿管、膀胱等），並非專指腎結石，也非官方統計。AI 標示為醫師說明。',
    current:'泌尿道結石盛行率約10%（醫師說明）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約10%', value:'泌尿道結石', note:'國泰醫院醫師說明（目前採用）'},
      {label:'未公布', value:'官方腎結石盛行率', note:'衛福部、國健署查無資料'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'腎結石痛起來要命：4大警訊、預防飲食與3種治療',
    update_date:'2026/11/21',
    intro:'腎結石是尿液中的礦物質結晶沉積形成的結石。國泰醫院泌尿科醫師指出，台灣泌尿道結石盛行率約10%、高於世界平均，以男性居多。泌尿科醫師提醒，天氣轉暖流汗增加，若喝水量沒跟著增加，尿液濃縮更容易形成結石。結石留在腎臟時可能沒有症狀，掉到輸尿管則可能引發劇烈腰痛。',
    sections:[
      {heading:'腎結石3種治療方式',format:'table',table:TABLE},
      {heading:'4大警訊與高風險族群',format:'bullets',items:[
        '泌尿科醫師列出警訊：腰側劇烈疼痛可能延伸到下腹、噁心嘔吐、血尿、尿量稀少或尿液混濁，應及早就醫。',
        '高風險族群包括喝水少、高鹽與蛋白質攝取過量、有家族史或曾經結石者，以中年男性最常見。',
        '結石若造成腎臟腫脹（腎水腫）或感染，需積極處理。'
      ]},
      {heading:'預防這樣做',format:'bullets',items:[
        '多喝水：醫師建議每天約2,000至2,500毫升（心臟、腎臟病患者依醫囑）。',
        '少鹽：醫師建議每日鈉攝取少於2,300毫克（約6公克鹽）。',
        '減少高草酸飲食，例如濃茶、巧克力、菠菜等；不要大魚大肉，適量攝取鈣質。',
        '肥胖者應減重並養成運動習慣。'
      ]}
    ],
    think_tank_view:'預防腎結石最簡單也最便宜的方法就是「喝夠水」。在桌上放一個大水壺、天熱或運動後記得補水，再把重口味的飲食調淡一點；曾經結石過的人，更要把喝水當成每天的功課。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率、警訊、飲食與治療標明為泌尿科醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['泌尿道結石盛行率約10%、治療方式（國泰醫院醫師說明）','警訊與飲水建議（泌尿科醫師，TVBS 2026）'],
      layout_reason:'先用表格比較3種治療，再整理警訊與高風險族群，最後給預防做法。',
      tone:'專業易懂', tone_reason:'治療與預防需具體。',
      to_verify:['國內腎結石官方盛行率查無資料','復發率未查到可靠來源，文中未寫']},
    decision_points:[DP_SRC]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'腰痛到冒冷汗、尿裡有血？可能是腎結石',
    update_date:'2026/11/21',
    intro:'腎結石發作時的痛，很多人形容比生小孩還痛。醫師說，台灣約每10人就有1人有泌尿道結石，男生比較多。天氣變熱流汗多、水又喝太少，尿液變濃就容易結石。好消息是，多喝水就是最好的預防。',
    sections:[
      {heading:'結石怎麼處理？',format:'table',table:TABLE},
      {heading:'出現這些狀況快就醫',format:'bullets',items:[
        '腰側突然劇痛，痛到下腹。',
        '噁心想吐、尿裡有血。',
        '尿變少、尿液混濁。'
      ]},
      {heading:'這樣預防結石',format:'bullets',items:[
        '每天喝水2,000到2,500毫升，有心臟或腎臟病的人先問醫生。',
        '少鹽、少大魚大肉。',
        '濃茶、巧克力、菠菜別吃太多。'
      ]}
    ],
    think_tank_view:'買一個有刻度的水壺，每天看著它慢慢喝完，是預防結石最簡單的方法。家裡有人曾經結石，更要互相提醒多喝水。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料標明為醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以劇痛的發作經驗切入。', tone:'生活親切', tone_reason:'給一般民眾閱讀。', to_verify:['「比生小孩還痛」為常見形容，非醫學比較']},
    decision_points:[DP_SRC]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'腎結石：多喝水、少鹽，劇烈腰痛就醫',
    update_date:'2026/11/21',
    intro:'醫師指出台灣泌尿道結石盛行率約10%，男性較多。每天喝水2,000至2,500毫升是最基本的預防。',
    sections:[
      {heading:'3種治療',format:'table',table:TABLE},
      {heading:'警訊',format:'bullets',items:[
        '腰側劇痛、血尿。',
        '噁心嘔吐、尿液混濁。'
      ]},
      {heading:'預防',format:'bullets',items:[
        '多喝水、少鹽。',
        '少高草酸食物。'
      ]}
    ],
    think_tank_view:'喝夠水是預防腎結石最有效也最省錢的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料標明為醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為治療、警訊、預防三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['盛行率為醫師說明']},
    decision_points:[DP_SRC]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'腎結石', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'喝夠水是預防結石的關鍵', primary_visual:'約 10%', secondary_message:'劇烈腰痛、血尿要就醫', action_priority:'每天 2,000–2,500 毫升水'},
    headline_hook:'腰痛到冒冷汗？', headline_main:'認識腎結石', title_accent:'腎結石',
    hero_message:'多喝水', hero_support:'醫師建議每天約 2,000–2,500 毫升',
    knowledge_title:'4 大警訊', knowledge_note:'出現警訊，**及早到泌尿科就醫**',
    knowledge_cards:[
      {label:'腰側劇痛', icon:'check', lines:['可能延伸','到下腹']},
      {label:'噁心嘔吐', icon:'check', lines:['疼痛時','伴隨不適']},
      {label:'血尿', icon:'search', lines:['尿中帶血']},
      {label:'尿液異常', icon:'flask', lines:['尿量少','尿液混濁']}
    ],
    primary_stat:{value:'約 10%', label:'泌尿道結石盛行率（醫師說明）', note:'國泰醫院泌尿科醫師｜以男性居多'},
    secondary_stats:[
      {value:'< 2300 毫克', label:'每日鈉攝取建議'},
      {value:'2 公分', label:'以上不建議震波碎石'}
    ],
    action_title:'這樣預防',
    action_cards:[
      {key:'喝', text:'每天喝水約 2,000–2,500 毫升'},
      {key:'鹽', text:'少鹽，鈉每日少於 2,300 毫克'},
      {key:'草', text:'濃茶、巧克力、菠菜別過量'},
      {key:'動', text:'少大魚大肉，肥胖者減重運動'}
    ],
    carousel_suggestion:{reason:'若想把警訊、治療與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'腰痛到冒冷汗？', headline_main:'腎結石 4 大警訊'},
      {layout_type:'knowledge', headline_hook:'結石怎麼處理', headline_main:'3 種治療方式'},
      {layout_type:'action', headline_hook:'預防結石', headline_main:'多喝水、少鹽'}]},
    hashtags:['腎結石','泌尿道結石','多喝水','泌尿科'],
    sources:['NOWnews今日新聞','TVBS新聞網'],
    illustration_category:'general',
    illustration:{topic:'預防腎結石', audience:'上班族與中年男性', scene:'一位上班族在辦公桌旁拿著有刻度的大水壺喝水',
      emotion:'清爽、自律', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker at a desk drinking from a large water bottle with volume markings, fresh and self-disciplined mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['醫師說明（TVBS 2026、NOWnews 2024）'],
      layout_reason:'核心是辨識警訊與預防，選 knowledge：4 張警訊卡當主角，盛行率當主數字並標出處。',
      tone:'專業易懂', tone_reason:'警訊需清楚。',
      to_verify:['盛行率為泌尿道結石']},
    decision_points:[Object.assign({}, DP_SRC, {current:'約 10%｜泌尿道結石（醫師說明）'})],
    content_check_note:'資料標明為醫師說明，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'腎結石',
    collect:{
      summary:'醫師指出台灣泌尿道結石盛行率約10%、高於世界平均，以中年男性居多；天氣轉暖流汗增加是結石增加的時機，「喝夠水、少鹽、認得劇烈腰痛與血尿」是主要溝通訊息。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約10%泌尿道結石盛行率：國泰醫院泌尿科醫師指出台灣盛行率高於世界平均，以男性居多（範圍為泌尿道結石，國內查無官方腎結石統計）。',tag:'市場觀察',source:{name:'NOWnews：她尿液混濁不清！元凶竟是腎結石',url:'https://www.nownews.com/news/6332683'}},
        {item:'年度趨勢方向',desc:'每天約2000至2500毫升水分：泌尿科醫師提醒春夏流汗增加，若飲水量未增加，尿液濃縮易使礦物質結晶，中年男性、喝水少者風險較高。',tag:'市場觀察',source:{name:'TVBS新聞網：春暖不是花先開 是「結石」先暴增？',url:'https://health.tvbs.com.tw/regimen/362415'}},
        {item:'政策動向',desc:'約2000 c.c.每日飲水建議：國健署護腎8招建議一般健康成人每日攝取約2,000 c.c.的水，並均衡飲食、控制體重。',tag:'官方統計',source:{name:'衛生福利部國民健康署：3成三高患者腎功能亮紅燈',url:'https://mohw.gov.tw/cp-16-81762-1.html'}},
        {item:'好發族群年齡層',desc:'2公分以上結石不推薦震波碎石：醫師說明治療包括體外震波碎石、輸尿管鏡雷射碎石與經皮腎造廔取石，依結石大小與位置評估。',tag:'市場觀察',source:{name:'NOWnews：她尿液混濁不清！元凶竟是腎結石',url:'https://www.nownews.com/news/6332683'}}
      ],
      product_view:['機會：結石手術與碎石常涉及門診或短期住院，可作為醫療保障的溝通情境。','機會：喝水提醒適合結合健康管理服務。','風險：不得推薦特定排石保健品或偏方。'],
      marketing_view:['機會：春夏天熱是溝通時點，「喝夠水」好執行。','機會：中年男性上班族是核心對象。','風險：避免誇大疼痛做恐懼訴求。'],
      alert_level:'low',
      alert_reason:'無政策事件，適合在天熱季節性溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('台灣泌尿道結石盛行率約10%、高於世界平均','SOURCE_EVIDENCE','secondary_citation',
          '盛行率出自醫師受訪，未附研究來源；範圍為泌尿道結石，並非專指腎結石。','medium','yes',
          '國內泌尿道結石盛行率研究。','no','confirm','屬二手引述。',
          null,['台灣約每10人就有1人有泌尿道結石','台灣泌尿道結石盛行率約10%']),
        F('很多人形容比生小孩還痛','RISK_COMMUNICATION_SCOPE','exaggeration',
          '以「比生小孩還痛」形容屬誇張比較，可能造成不必要的恐懼。','low','no',
          null,'no','revise','屬語氣調整。',
          '很多人形容痛到難以忍受'),
        F('醫師建議每天約2,000至2,500毫升','MEDICAL_INTERPRETATION','advice_scope',
          '飲水量建議已註明心臟、腎臟病患者依醫囑，但未說明需依體重、活動量與天氣調整。','low','no',
          null,'no','clarify','屬建議範圍說明。',
          null,['每天喝水2,000到2,500毫升']),
        F('減少高草酸飲食，例如濃茶、巧克力、菠菜等','MEDICAL_INTERPRETATION','stone_type_dependent',
          '限草酸建議主要適用草酸鈣結石，結石成分不同飲食建議也不同；文中未說明。','low','no',
          null,'no','clarify','屬適用範圍說明。',
          '減少高草酸飲食（主要針對草酸鈣結石，結石成分可請醫師分析），例如濃茶、巧克力、菠菜等')
      ],
      card:[
        F('泌尿道結石盛行率（醫師說明）','SOURCE_EVIDENCE','secondary_citation',
          '主數字為醫師說明，範圍為泌尿道結石。','medium','yes',
          '研究來源。','no','confirm','屬二手引述。',
          null),
        F('以上不建議震波碎石','MEDICAL_INTERPRETATION','threshold_context',
          '2 公分為單一醫師說法，治療選擇仍依位置與成分評估。','low','no',
          null,'no','clarify','屬醫師說明。',
          null)
      ]
    },
    title_alts:[
      '腎結石痛起來要命：4大警訊、預防飲食與3種治療',
      '腰痛到冒冷汗、尿裡有血？可能是腎結石',
      '預防腎結石最便宜的方法：喝夠水、少鹽'
    ],
    card_title_alts:[
      ['腰痛到冒冷汗？','認識腎結石'],
      ['預防結石','每天喝夠水'],
      ['結石怎麼處理','3 種治療方式']
    ],
    data_addon:[
      '醫師說明：輸尿管鏡雷射碎石術前不需停用抗凝血劑，術後1-2天可出院。',
      '醫師說明：適量攝取鈣質、多吃蔬果有助預防結石。',
      '泌尿科醫師：有家族史或曾經結石者屬高風險族群。'
    ],
    cta:'今天開始在桌上放一個有刻度的水壺，下班前確認自己喝到2,000毫升。'
  });
})();
