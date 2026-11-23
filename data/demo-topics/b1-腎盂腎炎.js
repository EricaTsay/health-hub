/* v6 示範主題：腎盂腎炎（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-21。數據來源：臺北醫學大學附設醫院衛教〈急性腎盂腎炎〉（2017年版：危險因子、症狀、檢查、抗生素10-14天、居家保健）、
   TVBS 2026-01-22（臺中榮總臨床毒物科主任、高雄長庚腎臟科醫師說明：膀胱炎上行感染、敗血症、SGLT2抑制劑族群喝水建議）。
   國內查無腎盂腎炎官方統計；「女性一生3-4成會發生膀胱炎」為醫師說明，未附出處。
   參考方向：健康智庫〈腎盂腎炎〉2023/02。 */
(function(){
  const REFS = [
    {title:'急性腎盂腎炎（護理衛教）',source:'臺北醫學大學附設醫院',url:'https://www.tmuh.org.tw/UploadFile/files/074%E6%80%A5%E6%80%A7%E8%85%8E%E7%9B%82%E8%85%8E%E7%82%8E.pdf'},
    {title:'文素利突發急性腎盂腎炎！嚴重恐敗血症致命 吃排糖藥要小心',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/medical/360563'}
  ];
  const TABLE = {headers:['階段','常見症狀'], rows:[
    ['膀胱炎（下泌尿道）','頻尿、尿急、解尿灼熱感或疼痛、下腹脹'],
    ['腎盂腎炎（上泌尿道）','發燒、寒顫、單側腰背痛，可能噁心嘔吐'],
    ['嚴重時','可能引發敗血症，需住院治療']
  ]};
  const TAGS = ['腎盂腎炎','泌尿道感染','膀胱炎','發燒腰痛','女性健康'];

  const DP_RATE = {id:'dp-pyelo-rate', type:'data_scope', title:'膀胱炎比例的出處',
    desc:'「女性一生約3-4成會發生膀胱炎」是臺中榮總醫師受訪時提到的「統計數字」，報導未註明研究來源；國內亦查無腎盂腎炎官方統計。AI 標示為醫師說明。',
    current:'女性一生約3-4成發生膀胱炎（醫師說明）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'3-4成', value:'女性一生膀胱炎機率', note:'臺中榮總醫師說明（目前採用）'},
      {label:'未公布', value:'官方腎盂腎炎統計', note:'衛福部、國健署查無資料'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'發燒加腰痛小心腎盂腎炎：膀胱炎別拖，憋尿少喝水是元凶',
    update_date:'2026/11/21',
    intro:'腎盂腎炎是細菌由尿道、膀胱往上逆行，或經血流進入腎盂所造成的上泌尿道感染。臺中榮總醫師指出，女性一生約有3至4成機率發生膀胱炎，若忽略早期徵兆，細菌可能上行到腎臟，引起發燒、腰痛，嚴重時甚至導致敗血症、需住院1至2週。北醫附醫衛教指出，水喝太少、憋尿、尿路結石、懷孕、長期留置導尿管、糖尿病與免疫功能低下者風險較高。',
    sections:[
      {heading:'從膀胱炎到腎盂腎炎',format:'table',table:TABLE},
      {heading:'治療與檢查',format:'bullets',items:[
        '醫院衛教指出，一般先使用廣效性抗生素10-14天，並依尿液與血液細菌培養結果調整。',
        '會以腎臟超音波評估是否有結構異常、阻塞或結石；重複感染且有逆流或阻塞時才考慮手術。',
        '醫師提醒，高燒、腰痛加上尿路症狀時應盡速就醫，不要自行吃退燒止痛藥拖延。'
      ]},
      {heading:'預防這樣做',format:'bullets',items:[
        '多喝水、不憋尿；醫師建議可設鬧鐘每1-2小時提醒上廁所、喝水。',
        '女性如廁後由前往後擦拭，性行為後排尿。',
        '服用SGLT2抑制劑（排糖藥）的糖尿病患者，醫師建議每日要比一般建議多喝500至800 c.c.水（心腎疾病者依醫囑）。'
      ]}
    ],
    think_tank_view:'很多人覺得「尿尿痛一下忍忍就好」，但膀胱炎拖久了可能往上變成腎盂腎炎。尿尿灼熱、頻尿時就早點就醫；如果還發燒、腰痛，更不能等。平常最簡單的預防，就是多喝水、不憋尿。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'症狀、危險因子與治療引自醫院衛教，比例與用藥族群建議標明為醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['危險因子、症狀與抗生素療程（北醫附醫衛教）','上行感染與敗血症風險（醫師受訪，TVBS 2026）'],
      layout_reason:'先用表格呈現膀胱炎到腎盂腎炎的症狀變化，再說明治療檢查，最後給預防做法。',
      tone:'專業易懂', tone_reason:'需強調及早就醫。',
      to_verify:['北醫附醫衛教為2017年版','「女性一生3-4成膀胱炎」未附出處']},
    decision_points:[DP_RATE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'尿尿痛又發燒腰痛？小心膀胱炎變腎盂腎炎',
    update_date:'2026/11/21',
    intro:'醫師說，女生一輩子大約有3到4成機會得到膀胱炎。尿尿灼熱、一直跑廁所時如果忍著不看醫生，細菌可能往上跑到腎臟，變成腎盂腎炎，發燒、腰痛，嚴重還可能敗血症要住院。',
    sections:[
      {heading:'從膀胱到腎臟，症狀這樣變',format:'table',table:TABLE},
      {heading:'這些人要特別注意',format:'bullets',items:[
        '常憋尿、水喝太少的人。',
        '有糖尿病、結石、懷孕或免疫力差的人。',
        '有在吃排糖藥的糖友，要比一般人多喝水。'
      ]},
      {heading:'這樣預防',format:'bullets',items:[
        '多喝水、不憋尿，可以設鬧鐘提醒自己。',
        '上完廁所由前往後擦。',
        '尿尿痛、發燒、腰痛，趕快看醫生，別自己吃止痛藥撐。'
      ]}
    ],
    think_tank_view:'上班忙到忘記喝水、一直憋尿，是很多人的日常。設個鬧鐘提醒自己起來喝水、上廁所，就是對腎臟最好的照顧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料標明為醫院衛教與醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以常見的尿尿痛經驗切入。', tone:'生活親切', tone_reason:'給女性與上班族閱讀。', to_verify:['比例為醫師說明']},
    decision_points:[DP_RATE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'腎盂腎炎：發燒腰痛就醫，多喝水不憋尿',
    update_date:'2026/11/21',
    intro:'膀胱炎若忽略，細菌可能上行至腎臟造成腎盂腎炎，嚴重時可能敗血症。',
    sections:[
      {heading:'症狀',format:'table',table:TABLE},
      {heading:'治療',format:'bullets',items:[
        '廣效性抗生素10-14天（醫院衛教）。',
        '必要時超音波評估結構。'
      ]},
      {heading:'預防',format:'bullets',items:[
        '多喝水、不憋尿。',
        '排糖藥使用者多補水。'
      ]}
    ],
    think_tank_view:'尿路症狀早就醫、平日多喝水不憋尿，是預防腎盂腎炎的關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料標明出處，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為症狀、治療、預防三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['無官方統計']},
    decision_points:[DP_RATE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'腎盂腎炎', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'膀胱炎別拖，可能變腎盂腎炎', primary_visual:'3–4 成', secondary_message:'發燒加腰痛要盡快就醫', action_priority:'多喝水、不憋尿'},
    headline_hook:'尿尿痛又發燒？', headline_main:'認識腎盂腎炎', title_accent:'腎盂腎炎',
    hero_message:'膀胱炎別拖', hero_support:'細菌可能往上感染到腎臟',
    knowledge_title:'症狀變化', knowledge_note:'發燒、腰痛加尿路症狀，**盡快就醫**',
    knowledge_cards:[
      {label:'膀胱炎', icon:'check', lines:['頻尿、尿急','解尿灼熱疼痛']},
      {label:'腎盂腎炎', icon:'check', lines:['發燒、寒顫','單側腰背痛']},
      {label:'嚴重時', icon:'shield', lines:['可能敗血症','需住院治療']}
    ],
    primary_stat:{value:'3–4 成', label:'女性一生發生膀胱炎的機率', note:'臺中榮總醫師說明（未附出處）'},
    secondary_stats:[
      {value:'10–14 天', label:'抗生素療程（醫院衛教）'},
      {value:'+500–800 c.c.', label:'排糖藥使用者每日多喝水'}
    ],
    action_title:'這樣預防',
    action_cards:[
      {key:'喝', text:'多喝水，心腎疾病者依醫囑'},
      {key:'尿', text:'不憋尿，設鬧鐘提醒上廁所'},
      {key:'淨', text:'如廁後由前往後擦拭'},
      {key:'醫', text:'尿痛發燒腰痛，不自行吃止痛藥撐'}
    ],
    carousel_suggestion:{reason:'若想把症狀、高風險族群與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'尿尿痛又發燒？', headline_main:'膀胱炎到腎盂腎炎'},
      {layout_type:'knowledge', headline_hook:'高風險族群', headline_main:'憋尿、糖尿病、結石'},
      {layout_type:'action', headline_hook:'這樣預防', headline_main:'多喝水、不憋尿'}]},
    hashtags:['腎盂腎炎','泌尿道感染','膀胱炎','女性健康'],
    sources:['臺北醫學大學附設醫院','TVBS新聞網'],
    illustration_category:'general',
    illustration:{topic:'預防泌尿道感染', audience:'女性上班族', scene:'一位女性上班族手機跳出喝水提醒，起身拿水壺去裝水',
      emotion:'輕鬆、自律', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A female office worker getting a water reminder on her phone and standing up to refill her water bottle, relaxed and disciplined mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['醫院衛教與醫師說明'],
      layout_reason:'核心是症狀變化與及早就醫，選 knowledge：3 張症狀階段卡當主角，膀胱炎比例當主數字並標出處。',
      tone:'專業易懂', tone_reason:'需強調就醫時機。',
      to_verify:['主數字為醫師說明']},
    decision_points:[Object.assign({}, DP_RATE, {current:'3–4 成｜女性一生膀胱炎（醫師說明）'})],
    content_check_note:'資料標明為醫院衛教與醫師說明，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'腎盂腎炎',
    collect:{
      summary:'腎盂腎炎多由膀胱炎上行感染造成，醫師指出女性一生約3至4成會發生膀胱炎，嚴重時可能敗血症需住院；國內無官方統計，「尿路症狀早就醫、多喝水不憋尿」是主要溝通訊息，服用排糖藥的糖友更需注意補水。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約3成以上女性一生會發生膀胱炎：臺中榮總醫師估計約3至4成，2026年1月受訪指出，若忽略早期徵兆，細菌可能上行至腎臟（未附研究出處，國內查無官方統計）。',tag:'市場觀察',source:{name:'TVBS新聞網：文素利突發急性腎盂腎炎',url:'https://health.tvbs.com.tw/medical/360563'}},
        {item:'年度趨勢方向',desc:'需住院1至2週：醫師指出腎盂腎炎嚴重時可能導致敗血症，需住院治療，及早使用抗生素可避免惡化。',tag:'市場觀察',source:{name:'TVBS新聞網：文素利突發急性腎盂腎炎',url:'https://health.tvbs.com.tw/medical/360563'}},
        {item:'政策動向',desc:'抗生素療程10至14天：北醫附醫衛教指出一般先使用廣效性抗生素，並以尿液、血液細菌培養與腎臟超音波評估（2017年版衛教）。',tag:'市場觀察',source:{name:'臺北醫學大學附設醫院：急性腎盂腎炎',url:'https://www.tmuh.org.tw/UploadFile/files/074%E6%80%A5%E6%80%A7%E8%85%8E%E7%9B%82%E8%85%8E%E7%82%8E.pdf'}},
        {item:'好發族群年齡層',desc:'排糖藥使用者每日多喝500至800 c.c.：高雄長庚腎臟科醫師指出SGLT2抑制劑可能造成輕微脫水，糖尿病、結石、懷孕、免疫低下者為高風險族群。',tag:'市場觀察',source:{name:'TVBS新聞網：文素利突發急性腎盂腎炎',url:'https://health.tvbs.com.tw/medical/360563'}}
      ],
      product_view:['機會：腎盂腎炎常需住院治療，可作為住院醫療保障的溝通情境。','機會：喝水與如廁提醒適合結合健康管理服務。','風險：不得推薦蔓越莓等保健品作為治療，或暗示可取代抗生素。'],
      marketing_view:['機會：「尿尿痛別忍」貼近女性與上班族日常。','機會：可與腎結石、糖尿病主題串連（排糖藥補水）。','風險：涉及私密症狀，用語需尊重、避免尷尬。'],
      alert_level:'low',
      alert_reason:'無政策事件與官方統計，適合長期衛教溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('女性一生約有3至4成機率發生膀胱炎','SOURCE_EVIDENCE','secondary_citation',
          '比例出自醫師受訪時的「統計數字」，未附研究來源。','medium','yes',
          '國內女性膀胱炎終生盛行率研究。','no','confirm','屬二手引述。',
          null,['女生一輩子大約有3到4成機會得到膀胱炎']),
        F('一般先使用廣效性抗生素10-14天','MEDICAL_INTERPRETATION','adherence_missing',
          '只寫療程天數，沒提醒「症狀改善也要依醫囑把抗生素吃完、不可自行停藥」，讀者可能退燒後就停藥，增加復發與抗藥性風險。','medium','no',
          null,'no','clarify','屬用藥提醒補充，療程實際依醫師判斷。',
          '一般先使用廣效性抗生素10-14天，症狀改善也要依醫囑吃完療程',['廣效性抗生素10-14天（醫院衛教）']),
        F('醫師建議每日要比一般建議多喝500至800 c.c.水','MEDICAL_INTERPRETATION','individualized_advice',
          '補水量建議出自單一醫師，已註明心腎疾病者依醫囑，但糖友應與自己的醫師確認，避免自行大量喝水。','low','no',
          null,'no','clarify','屬建議範圍說明。',
          null),
        F('嚴重還可能敗血症要住院','RISK_COMMUNICATION_SCOPE','fear_framing',
          '直接提到敗血症可能引起恐慌，應同時說明及早治療多可控制。','low','no',
          null,'no','clarify','屬語氣平衡。',
          '嚴重時可能敗血症要住院，但及早治療多能控制')
      ],
      card:[
        F('女性一生發生膀胱炎的機率','SOURCE_EVIDENCE','secondary_citation',
          '主數字為醫師說明，未附出處。','medium','yes',
          '研究來源。','no','confirm','屬二手引述。',
          null),
        F('排糖藥使用者每日多喝水','MEDICAL_INTERPRETATION','individualized_advice',
          '補水建議應依醫囑，卡面未提醒。','low','no',
          null,'no','clarify','屬建議範圍說明。',
          '排糖藥使用者每日多喝水（依醫囑）')
      ]
    },
    title_alts:[
      '發燒加腰痛小心腎盂腎炎：膀胱炎別拖，憋尿少喝水是元凶',
      '尿尿痛又發燒腰痛？小心膀胱炎變腎盂腎炎',
      '多喝水不憋尿：預防腎盂腎炎的日常習慣'
    ],
    card_title_alts:[
      ['尿尿痛又發燒？','認識腎盂腎炎'],
      ['膀胱炎別拖','小心往上感染'],
      ['多喝水、不憋尿','預防泌尿道感染']
    ],
    data_addon:[
      '醫院衛教：急性期採高熱量均衡飲食，避免刺激性食物、酒與咖啡。',
      '醫師說明：一般建議每日喝水約2,000 c.c.或體重×30至35 c.c.。',
      '醫院衛教：重複感染且有抗藥性，或因尿液逆流、阻塞造成時，才考慮手術治療。'
    ],
    cta:'今天就在手機設個每2小時的提醒：起來喝杯水、上個廁所。'
  });
})();
