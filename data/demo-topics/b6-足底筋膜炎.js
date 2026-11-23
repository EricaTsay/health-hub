/* v6 示範主題：足底筋膜炎（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-21。數據來源：TVBS健康2.0 2025-06-09（桃園長庚醫院副院長受訪：高風險族群、震波、預防）、
   聯合報健保大數據 2020-09-20（多位骨科、復健科醫師與物理治療師受訪：保守治療、手術件數、伸展方式）。
   查無國健署或健保署公布的足底筋膜炎就醫人數最新統計。
   參考方向：健康智庫〈足底筋膜炎〉2023/11。 */
(function(){
  const TV = 'https://health.tvbs.com.tw/nutrition/355449';
  const U1 = 'https://health.udn.com/health/story/5967/4871051';
  const U2 = 'https://health.udn.com/health/story/5967/4871052';
  const REFS = [
    {title:'足底筋膜炎怎麼治都不好？醫師揭「混合式療法」成功率超過8成',source:'TVBS健康2.0',url:TV},
    {title:'別急著積極治療治足底筋膜炎 釐清原因為首要',source:'聯合報',url:U1},
    {title:'治療足底筋膜炎 4大醫療院所',source:'聯合報',url:U2}
  ];
  const TABLE = {headers:['高風險族群','原因'], rows:[
    ['久站、走路多','廚師、服務業、工廠作業員等長時間站立'],
    ['足型問題','扁平足或高弓足，足底受力不平均'],
    ['體重過重','短時間體重增加，足底負擔變大'],
    ['鞋子不合適','鞋底過硬、缺乏足弓支撐或長時間穿高跟鞋']
  ]};
  const TAGS = ['足底筋膜炎','腳跟痛','久站','伸展運動','足部健康'];

  const DP_OLD = {id:'dp-pf-old', type:'data_version', title:'「9成保守治療可改善」是2020年報導',
    desc:'「足底筋膜炎患者多達9成可透過保守治療改善」出自聯合報2020年報導，未註明研究來源；震波「成功率超過8成」為醫師2025年受訪說法，針對頑固型。AI 沒有替你決定是否沿用。',
    current:'約9成可透過保守治療改善（2020年報導）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約9成', value:'保守治療改善', note:'聯合報2020年報導（目前採用）'},
      {label:'逾8成', value:'頑固型以震波等混合療法', note:'桃園長庚醫院副院長2025年受訪'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'足底筋膜炎：早上下床第一步最痛，伸展與穿對鞋是關鍵',
    update_date:'2026/11/21',
    intro:'足底筋膜炎典型的表現是早上下床踩地的第一步，腳跟像被針刺般劇痛，走一走稍微緩解，久站後又加劇。桃園長庚醫院副院長2025年受訪指出，扁平足或高弓足、過重、鞋子選擇不當者風險較高；骨科醫師則表示好發於40至60歲，女性較多。聯合報2020年報導指出，多達9成患者可透過伸展、休息、調整鞋子等保守治療改善。',
    sections:[
      {heading:'足底筋膜炎的高風險族群',format:'table',table:TABLE},
      {heading:'治療方式',format:'bullets',items:[
        '保守治療為主：減少久站與長距離走路、伸展足底與小腿、調整鞋子，必要時短期使用消炎止痛藥。',
        '頑固型可由醫師評估體外震波治療，醫師2025年受訪指出混合式療法成功率可超過8成；2020年報導時震波無健保給付，費用請向院所確認。',
        '少數經半年以上治療仍無效者，才考慮手術；局部注射等處置由醫師評估。'
      ]},
      {heading:'日常預防',format:'bullets',items:[
        '選擇有足弓支撐的鞋子與鞋墊，避免長時間穿高跟鞋或硬底鞋。',
        '維持適當體重，運動前做好暖身與伸展。',
        '「前弓後箭」小腿伸展：每次維持10到30秒、換腳，每天數次。',
        '疼痛時避免用力按摩痛點，症狀持續應就醫。'
      ]}
    ],
    think_tank_view:'足底筋膜炎很少危及健康，卻會讓人連走路都卻步。多數人透過伸展、休息與換一雙合適的鞋就能改善；若晨起第一步痛已持續數週，及早到骨科或復健科評估，比一直忍著更省時間。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'比例與治療說法標明為醫師受訪或報導年份，提醒震波給付以院所為準，未使用療效保證用語，未推薦特定鞋款或鞋墊。',
    ai_rationale:{basis:['高風險族群與震波成功率（桃園長庚醫院副院長2025年）','9成保守治療改善（聯合報2020年）'],
      layout_reason:'先用表格列出高風險族群，再說明治療方式，最後給日常預防做法。',
      tone:'專業易懂', tone_reason:'以實用行動為主。',
      to_verify:['「9成保守治療改善」為2020年報導，未註明研究來源','震波現行健保給付狀況待確認','查無官方就醫人數統計']},
    decision_points:[DP_OLD]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'早上下床第一步腳跟超痛？可能是足底筋膜炎',
    update_date:'2026/11/21',
    intro:'早上起床一踩地，腳跟就像被針刺，走幾步才慢慢好一點，下午站久了又痛起來？這很可能是足底筋膜炎。醫師說，扁平足、體重過重、鞋子不合腳的人比較容易發生；好消息是，大部分人靠伸展、休息、換雙好鞋就能改善。',
    sections:[
      {heading:'這些人比較容易發生',format:'table',table:TABLE},
      {heading:'要怎麼治療？',format:'bullets',items:[
        '先少站少走、做伸展、換合適的鞋子，必要時吃點消炎止痛藥。',
        '一直好不了，可以請醫師評估震波治療；費用和健保給付先問清楚。',
        '只有很少數人需要開刀。'
      ]},
      {heading:'平常這樣保養',format:'bullets',items:[
        '穿有足弓支撐的鞋，少穿高跟鞋和硬底鞋。',
        '控制體重，運動前先暖身。',
        '扶著牆做「前弓後箭」拉小腿，每次10到30秒。',
        '腳痛時別用力按痛點，一直不好就去看醫生。'
      ]}
    ],
    think_tank_view:'腳痛雖然不危險，卻很影響生活。給腳一雙好鞋、每天拉拉筋，是最划算的投資。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'說法標明為醫師受訪，語氣親切，未使用療效保證用語，未推薦特定鞋款或鞋墊。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以晨起腳痛的情境帶出族群、治療與保養。', tone:'生活親切', tone_reason:'給上班族與長輩閱讀。', to_verify:[]},
    decision_points:[DP_OLD]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'足底筋膜炎：高風險族群＋保養4招',
    update_date:'2026/11/21',
    intro:'晨起第一步腳跟劇痛是典型表現。聯合報2020年報導指出，多數患者可透過保守治療改善。',
    sections:[
      {heading:'高風險族群',format:'table',table:TABLE},
      {heading:'治療',format:'bullets',items:[
        '休息、伸展、換鞋為主。',
        '頑固型評估震波；手術為少數。'
      ]},
      {heading:'保養',format:'bullets',items:[
        '足弓支撐鞋、控制體重。',
        '小腿伸展、痛時勿按壓。'
      ]}
    ],
    think_tank_view:'伸展、休息與合適的鞋，是改善足底筋膜炎最實際的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'說法標明出處年份，未使用療效保證用語，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為族群、治療、保養三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_OLD]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'足底筋膜炎', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'多數足底筋膜炎可靠保守治療改善', primary_visual:'約 9 成', secondary_message:'晨起第一步腳跟痛是典型表現', action_priority:'伸展、休息、穿對鞋'},
    headline_hook:'下床第一步腳跟痛？', headline_main:'足底筋膜炎保養 4 招', title_accent:'保養 4 招',
    hero_message:'晨起第一步最痛', hero_support:'久站、扁平足、過重的人要特別留意',
    primary_stat:{value:'約 9 成', label:'患者可透過保守治療改善', note:'聯合報 2020 年報導'},
    action_title:'這樣保養',
    action_cards:[
      {key:'拉', text:'前弓後箭拉小腿，每次 10–30 秒'},
      {key:'鞋', text:'穿有足弓支撐的鞋，少穿高跟鞋'},
      {key:'坐', text:'發炎期少站少走，改騎車或游泳'},
      {key:'醫', text:'疼痛持續數週，看骨科或復健科'}
    ],
    notice:'腳痛時**避免用力按摩痛點**。',
    carousel_suggestion:{reason:'若想把族群、伸展與治療分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'誰容易腳跟痛', headline_main:'足底筋膜炎 4 種高風險族群'},
      {layout_type:'action', headline_hook:'每天 3 分鐘', headline_main:'足底與小腿伸展'},
      {layout_type:'knowledge', headline_hook:'一直好不了？', headline_main:'震波與其他治療'}]},
    hashtags:['足底筋膜炎','腳跟痛','伸展運動','足部健康'],
    sources:['桃園長庚醫院（媒體受訪）','聯合報健保大數據（2020）'],
    illustration_category:'bones-joints',
    illustration:{topic:'足底筋膜炎保養', audience:'久站上班族與長輩', scene:'一位中年人扶著牆做前弓後箭的小腿伸展，旁邊放著一雙有足弓支撐的運動鞋',
      emotion:'輕鬆、有改善', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged person leaning on a wall doing a calf stretch in a lunge position, a pair of supportive sneakers beside them, relaxed and improving mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['9成保守治療改善（聯合報2020年）'],
      layout_reason:'選 action：4 個保養行動當主角，保守治療比例放下方。',
      tone:'專業易懂', tone_reason:'實用可照做。',
      to_verify:['9成為2020年報導']},
    decision_points:[Object.assign({}, DP_OLD, {current:'約 9 成（2020 年報導）'})],
    content_check_note:'比例標明出處年份，未使用療效保證用語，未推薦特定商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'足底筋膜炎',
    collect:{
      summary:'足底筋膜炎是常見的腳跟痛原因，好發於中年、久站與體重過重者；多數可透過伸展、休息與合適的鞋子改善，「辨識晨起腳跟痛、做好足部保養」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'查無官方就醫人數統計：足底筋膜炎好發於40至60歲民眾、女性較多（骨科醫師2020年受訪），國健署與健保署未公布最新就醫人數。',tag:'市場觀察',source:{name:'聯合報：治療足底筋膜炎 4大醫療院所',url:U2}},
        {item:'年度趨勢方向',desc:'約9成可透過保守治療改善：聯合報2020年報導指出多數患者經伸展、休息、調整鞋子與消炎藥可改善，108年手術件數僅69件。',tag:'市場觀察',source:{name:'聯合報：別急著積極治療治足底筋膜炎 釐清原因為首要',url:U1}},
        {item:'政策動向',desc:'頑固型混合療法成功率逾8成：桃園長庚醫院副院長2025年受訪指出，針對頑固型足底筋膜炎，結合震波等治療成功率可超過8成（2020年報導時震波無健保給付）。',tag:'市場觀察',source:{name:'TVBS健康2.0：足底筋膜炎怎麼治都不好？',url:TV}},
        {item:'好發族群年齡層',desc:'扁平足、高弓足與過重者風險高：醫師指出久站、走路多、鞋子不合適者也是高風險族群，預防關鍵是穿對鞋與控制體重。',tag:'市場觀察',source:{name:'TVBS健康2.0：足底筋膜炎怎麼治都不好？',url:TV}}
      ],
      product_view:['機會：久站職業族群多，可結合職場健康與足部保養衛教。','機會：腳痛影響活動量，可連結運動與體重管理的健康服務。','風險：避免推薦特定鞋款、鞋墊或療程；震波等自費治療費用依院所說明。'],
      marketing_view:['機會：「下床第一步腳跟痛」是極具共鳴的情境。','機會：伸展動作適合做成短影音或圖解。','風險：腳跟痛原因多元，需提醒持續不適應就醫。'],
      alert_level:'low',
      alert_reason:'屬常見生活型疾病，無時效性政策事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('多達9成患者可透過伸展、休息、調整鞋子等保守治療改善','CURRENCY_TIMELINESS','old_report_unsourced',
          '已註明出自聯合報2020年報導，但報導本身未說明數字依據，且距今已有數年。','low','yes',
          '足底筋膜炎保守治療成功率的研究文獻。','no','confirm','與臨床經驗相符，但出處未明。',
          '多數患者可透過伸展、休息、調整鞋子等保守治療改善（2020年報導，約9成）',
          ['大部分人靠伸展、休息、換雙好鞋就能改善','多數患者可透過保守治療改善']),
        F('混合式療法成功率可超過8成','SOURCE_EVIDENCE','expert_opinion_as_statistic',
          '「成功率」出自醫師受訪，未說明成功的定義與追蹤期間。','low','no',
          null,'no','clarify','屬證據層級說明。',
          '醫師臨床經驗顯示混合式療法多數有效（受訪稱成功率逾8成）'),
        F('2020年報導時震波無健保給付，費用請向院所確認','CURRENCY_TIMELINESS','policy_status_unverified',
          '健保給付資訊停在2020年，現行是否給付未查證，讀者可能據此做錯誤決定。','low','yes',
          '健保署現行體外震波治療給付規定。','yes','confirm','給付規定可能已變動。',
          '震波是否有健保給付，請以健保署現行規定與院所說明為準',
          ['費用和健保給付先問清楚']),
        F('疼痛時避免用力按摩痛點','MEDICAL_INTERPRETATION','missing_rationale',
          '沒說明原因（發炎期按壓可能加重發炎），讀者可能不以為意。','low','no',
          null,'no','clarify','補一句理由即可。',
          '疼痛時避免用力按摩痛點（發炎期按壓可能加重疼痛）',
          ['腳痛時別用力按痛點','痛時勿按壓'])
      ],
      card:[
        F('聯合報 2020 年報導','CURRENCY_TIMELINESS','old_report_unsourced',
          '主數字出自數年前報導，且報導未註明研究來源。','low','yes',
          '研究出處。','no','confirm','出處未明。',
          '媒體報導（2020，研究出處未註明）'),
        F('發炎期少站少走，改騎車或游泳','MEDICAL_INTERPRETATION','missing_practical_info',
          '「發炎期」讀者難以自行判斷。','low','no',
          null,'no','clarify','可改為具體情境。',
          '腳跟痛明顯時少站少走，改騎車或游泳')
      ]
    },
    title_alts:[
      '足底筋膜炎：早上下床第一步最痛，伸展與穿對鞋是關鍵',
      '早上下床第一步腳跟超痛？可能是足底筋膜炎',
      '久站族必看：足底筋膜炎高風險族群與保養4招'
    ],
    card_title_alts:[
      ['下床第一步腳跟痛？','足底筋膜炎保養 4 招'],
      ['久站族注意','足底筋膜炎高風險族群'],
      ['每天 3 分鐘','足底與小腿伸展']
    ],
    data_addon:[
      '新光醫院骨科醫師（2020）：僅約1成頑固型患者經半年以上治療無效才需手術，術後仍可能復發。',
      '物理治療師提醒：急性發炎期使用凸起鞋墊可能擠壓足底筋膜，可改用足跟墊片。',
      '復健科醫師建議改以騎腳踏車、游泳等運動減少足底負擔。'
    ],
    cta:'今天睡前扶著牆做3組小腿伸展，再檢查一下常穿的鞋有沒有足弓支撐；腳跟痛超過幾週就去看骨科或復健科。'
  });
})();
