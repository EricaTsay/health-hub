/* v6 示範主題：遠距醫療（通訊診察）（B11 第二輪新主題）
   查證日期：2026-11-23。數據來源：衛福部新聞稿〈衛福部發布修正通訊診察治療辦法 提升醫療近便性〉（113-01-22，醫事司）。
   參考方向：判定清單第463列（通訊診察文章）。只取架構，數據重新查證。 */
(function(){
  const REFS = [
    {title:'衛福部發布修正通訊診察治療辦法 提升醫療近便性',source:'衛生福利部',url:'https://mohw.gov.tw/cp-2704-77322-1.html'},
    {title:'通訊診察治療辦法',source:'全國法規資料庫',url:'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0020197'}
  ];
  const TABLE = {headers:['113年7月1日起新增的情形','說明'], rows:[
    ['慢性病照護計畫收案病人','已加入慢性病照護計畫的病人'],
    ['疾病末期照護','末期病人的照護需求'],
    ['矯正機關收容照護','監所等矯正機關的收容人'],
    ['行動不便照護','行動不便、外出就醫困難者'],
    ['災害、傳染病或其他重大變故','發生災害或重大疫情等情形']
  ]};
  const TAGS = ['遠距醫療','通訊診察','視訊看診','醫療近便性','數位醫療'];

  const DP_SCOPE = {id:'dp-tele-scope', type:'data_scope', title:'「適用對象幾類」說法不同',
    desc:'衛福部新聞稿只寫「新增5類特殊情形」；部分報導寫「從5類擴大到10類」，是把原有情形與新增情形合計。AI 依新聞稿只列新增的5類，未採用合計數字。',
    current:'113年7月1日起新增5類特殊情形（衛福部新聞稿）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'新增5類', value:'衛福部新聞稿', note:'113-01-22醫事司新聞稿（目前採用）'},
      {label:'共10類', value:'媒體合計', note:'原有＋新增，新聞稿未直接寫出'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'視訊看診可以嗎？通訊診察制度的規定與限制',
    update_date:'2026/11/23',
    intro:'通訊診察是醫師透過視訊等通訊方式提供診療。衛福部於113年1月22日發布修正「通訊診察治療辦法」，自113年7月1日施行，新增慢性病照護、疾病末期、行動不便等5類特殊情形，並有條件開放醫師以通訊方式開立處方，衛福部預估受惠民眾可達247萬人。不過通訊診察仍有適用條件，並非所有人、所有疾病都能視訊看診。',
    sections:[
      {heading:'新增的5類特殊情形',format:'table',table:TABLE},
      {heading:'可以做哪些事',format:'bullets',items:[
        '有條件開立處方，以及醫療諮詢、會診、精神科心理治療。',
        '可開立檢查、檢驗單，方便後續到院所檢查。',
        '醫療機構須擬具通訊診療實施計畫，經地方衛生局核准後才能實施；已加入健保相關計畫者，以健保署核定文件送衛生局備查。'
      ]},
      {heading:'使用時要注意',format:'bullets',items:[
        '醫師若判斷不適合通訊診察，可以拒絕並建議改到院所就醫。',
        '急症或病情變化時，仍應立即到急診或撥打119。',
        '先確認院所是否有核准的通訊診療服務，以及是否屬於適用對象。'
      ]}
    ],
    think_tank_view:'通訊診察讓慢性病追蹤、行動不便者與偏遠地區就醫更方便，但它是「補充」而不是取代面對面看診。醫師需要觸診或檢查時，視訊仍有限制；把通訊診察用在穩定追蹤與諮詢，急症則直接就醫，才是安全的用法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'制度內容引自衛福部新聞稿並標明發布與施行日期，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['新增5類、開立處方、247萬人取自衛福部113-01-22新聞稿'],
      layout_reason:'先用表格列出新增適用情形，再說明可提供的服務與限制。',
      tone:'專業易懂', tone_reason:'法規與條件需要精確。',
      to_verify:['「247萬人」為衛福部預估，實際使用人數未公布','健保對通訊診察的給付條件']},
    decision_points:[DP_SCOPE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'在家用手機看醫生？視訊看診的規定白話說',
    update_date:'2026/11/23',
    intro:'疫情後大家對視訊看診不陌生，但它不是想用就能用。衛福部修正的「通訊診察治療辦法」從113年7月1日開始施行，新增慢性病照護、末期病人、行動不便等5種情形可以視訊看診，醫師也能有條件開藥，衛福部估計約247萬人受惠。',
    sections:[
      {heading:'哪些情況可以視訊看診？',format:'table',table:TABLE},
      {heading:'視訊看診可以做什麼？',format:'bullets',items:[
        '在條件允許下開藥、諮詢、會診，也可以做精神科心理治療。',
        '醫師可以開檢查單，讓你之後去院所做檢查。',
        '醫院或診所要先經衛生局核准，才能提供視訊看診。'
      ]},
      {heading:'這些要記得',format:'bullets',items:[
        '醫師覺得不適合視訊，會請你到院看診。',
        '胸痛、呼吸困難這類急症，請直接撥119。',
        '先問清楚院所有沒有提供、自己是否符合資格。'
      ]}
    ],
    think_tank_view:'視訊看診對行動不便的長輩和慢性病追蹤很方便，但它沒辦法取代所有面對面看診。穩定時用視訊，有變化就到院，是最安心的方式。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部公開資料並標明日期，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以視訊看診的常見疑問帶出適用情形、服務與限制。', tone:'生活親切', tone_reason:'給一般讀者與照顧者閱讀。', to_verify:['247萬人為預估']},
    decision_points:[DP_SCOPE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'通訊診察：誰能視訊看診',
    update_date:'2026/11/23',
    intro:'修正通訊診察治療辦法自113年7月1日施行，新增5類特殊情形，有條件開放處方，預估247萬人受惠。',
    sections:[
      {heading:'新增情形',format:'table',table:TABLE},
      {heading:'服務',format:'bullets',items:[
        '有條件開處方、諮詢、會診、心理治療。',
        '院所須經衛生局核准。'
      ]},
      {heading:'限制',format:'bullets',items:[
        '醫師可判斷不適合而建議到院。',
        '急症直接就醫或撥119。'
      ]}
    ],
    think_tank_view:'通訊診察是補充，不是取代面對面看診。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部公開資料並標明日期，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為新增情形、服務、限制三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['247萬人為預估']},
    decision_points:[DP_SCOPE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'遠距醫療（通訊診察）', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'通訊診察擴大適用，但有條件', primary_visual:'247 萬人', secondary_message:'新增 5 類特殊情形', action_priority:'穩定追蹤用視訊，急症到院'},
    headline_hook:'在家能視訊看診嗎？', headline_main:'通訊診察 5 類新增情形', title_accent:'5 類新增情形',
    hero_message:'預估 247 萬人受惠', hero_support:'修正通訊診察治療辦法（113 年 7 月 1 日施行）',
    knowledge_title:'新增 5 類情形', knowledge_note:'急症請直接**撥打 119**，不適用視訊看診',
    knowledge_cards:[
      {label:'慢性病照護', icon:'heart', lines:['慢性病照護計畫','收案病人']},
      {label:'行動不便', icon:'home', lines:['外出就醫困難者','在家接受診療']},
      {label:'疾病末期', icon:'people', lines:['末期病人照護','減少往返奔波']},
      {label:'矯正機關', icon:'shield', lines:['監所等收容人','照護需求']},
      {label:'災害疫情', icon:'chat', lines:['災害、傳染病','或重大變故時']}
    ],
    primary_stat:{value:'247 萬人', label:'衛福部預估受惠民眾', note:'113 年 1 月 22 日發布修正'},
    action_title:'使用前確認',
    action_cards:[
      {key:'查', text:'確認院所有核准的通訊診療服務'},
      {key:'符', text:'確認自己屬於適用情形'},
      {key:'藥', text:'處方為有條件開立，依醫師判斷'},
      {key:'急', text:'急症或病情變化立即到院'}
    ],
    carousel_suggestion:{reason:'若想把適用對象、可做的事與限制分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'誰可以視訊看診', headline_main:'新增 5 類情形'},
      {layout_type:'knowledge', headline_hook:'視訊看診可以', headline_main:'開藥、諮詢、開檢查單'},
      {layout_type:'action', headline_hook:'這些情況', headline_main:'請直接到院'}]},
    hashtags:['遠距醫療','通訊診察','視訊看診','數位醫療'],
    sources:['衛生福利部'],
    illustration_category:'general',
    illustration:{topic:'視訊看診', audience:'慢性病患者與行動不便者', scene:'一位長者在家用平板和醫師視訊，桌上有藥盒和血壓計，家屬在旁協助',
      emotion:'便利、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult at home having a video consultation with a doctor on a tablet, a pill box and blood pressure monitor on the table, a family member helping beside, convenient and reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['新增5類、247萬人取自衛福部113-01-22新聞稿'],
      layout_reason:'核心是「誰可以用」，選 knowledge：5 類新增情形當主卡，預估人數當背景，最後給使用前確認事項。',
      tone:'專業易懂', tone_reason:'法規條件需要清楚。',
      to_verify:['247 萬人為預估值']},
    decision_points:[Object.assign({}, DP_SCOPE, {current:'新增 5 類特殊情形（衛福部新聞稿）'})],
    content_check_note:'制度內容引自衛福部並標明日期，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'遠距醫療（通訊診察）',
    collect:{
      summary:'衛福部修正通訊診察治療辦法自113年7月1日施行，新增慢性病照護、疾病末期、行動不便等5類特殊情形並有條件開放處方，預估247萬人受惠；通訊診察已成為長期就醫方式之一，但仍有適用條件與院所核准規定。',
      objective_data:[
        {item:'政策動向',desc:'預估247萬人受惠：衛福部於113年1月22日發布修正通訊診察治療辦法，自113年7月1日施行，衛福部預估受惠民眾可達247萬人。',tag:'推估',source:{name:'衛生福利部：發布修正通訊診察治療辦法',url:'https://mohw.gov.tw/cp-2704-77322-1.html'}},
        {item:'好發族群年齡層',desc:'新增5類特殊情形：包括慢性病照護計畫收案病人、疾病末期照護、矯正機關收容照護、行動不便照護，以及災害、傳染病或其他重大變故照護。',tag:'官方統計',source:{name:'衛生福利部：發布修正通訊診察治療辦法',url:'https://mohw.gov.tw/cp-2704-77322-1.html'}},
        {item:'年度趨勢方向',desc:'113年7月1日起有條件開放處方：修正後醫師可有條件以通訊方式開立處方，並可提供醫療諮詢、會診、精神科心理治療及開立檢查檢驗單。',tag:'官方統計',source:{name:'衛生福利部：發布修正通訊診察治療辦法',url:'https://mohw.gov.tw/cp-2704-77322-1.html'}},
        {item:'政策動向',desc:'須經地方衛生局核准：醫療機構須擬具通訊診療實施計畫，載明實施方式、對象、期間與資料安全措施，經地方主管機關核准後實施，醫師判斷不適合時可建議改到院就醫。',tag:'官方統計',source:{name:'衛生福利部：發布修正通訊診察治療辦法',url:'https://mohw.gov.tw/cp-2704-77322-1.html'}}
      ],
      product_view:['機會：通訊診察便利慢性病追蹤與行動不便者就醫，可作為保戶健康管理服務的資訊內容。','機會：可說明遠距醫療與居家醫療、長照的分工，協助保戶規劃照護資源。','風險：不可暗示視訊看診可取代所有面對面診療，或將特定遠距服務包裝為保障內容。'],
      marketing_view:['機會：「在家能看醫生嗎？」是常見問題，適合做問答型內容。','機會：可與居家醫療、慢性病照護主題串連。','風險：避免讓人以為所有疾病都能視訊看診，需標明適用條件。'],
      alert_level:'low',
      alert_reason:'屬113年7月起施行的長期就醫制度，無急迫時效事件；健保給付與院所參與情形可能逐步調整。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('衛福部預估受惠民眾可達247萬人','SOURCE_EVIDENCE','estimate_as_fact',
          '此為修法時的預估值，並非實際使用人數，且未說明是潛在適用人口；讀者可能以為已有247萬人使用。','medium','yes',
          '通訊診察實際使用人數統計。','no','clarify','實際人數未查得公開統計。',
          '衛福部修法時預估適用民眾可達247萬人',
          ['衛福部估計約247萬人受惠']),
        F('並有條件開放醫師以通訊方式開立處方','MEDICAL_INTERPRETATION','scope_condition_missing',
          '「有條件」未說明條件內容，讀者無從判斷自己的藥能否透過視訊開立。','low','no',
          null,'no','clarify','詳細條件依辦法條文。',
          '並在符合辦法規定的條件下，開放醫師以通訊方式開立處方'),
        F('急症或病情變化時，仍應立即到急診或撥打119','TERMINOLOGY_LANGUAGE','vague_term',
          '「病情變化」範圍模糊，可補充常見警訊（如胸痛、呼吸困難、意識改變）讓讀者判斷。','low','no',
          null,'no','clarify','屬用語具體化。',
          '出現胸痛、呼吸困難、意識改變等急症或病情明顯變化時，應立即到急診或撥打119')
      ],
      card:[
        F('衛福部預估受惠民眾','SOURCE_EVIDENCE','estimate_as_fact',
          '247 萬人為修法時預估的適用人口，卡面未說明不是實際使用人數。','low','no',
          null,'no','clarify','屬標示問題。',
          '衛福部修法時預估適用人數'),
        F('處方為有條件開立，依醫師判斷','LEGAL_COMPLIANCE','scope_condition_missing',
          '處方條件由辦法規定，不只是醫師判斷，卡面可能讓人以為醫師可自由決定。','low','no',
          null,'no','clarify','條件需補充。',
          '處方依辦法規定有條件開立')
      ]
    },
    title_alts:[
      '視訊看診可以嗎？通訊診察制度的規定與限制',
      '在家用手機看醫生？視訊看診的規定白話說',
      '預估247萬人受惠：通訊診察新增5類情形一次看'
    ],
    card_title_alts:[
      ['在家能視訊看診嗎？','通訊診察 5 類新增情形'],
      ['視訊看醫生','先確認這 4 件事'],
      ['預估 247 萬人受惠','通訊診察規定一次看']
    ],
    data_addon:[
      '修正後的通訊診察治療辦法於113年1月22日發布，113年7月1日施行。',
      '已加入健保相關計畫的醫療機構，僅須以健保署核定文件送衛生局備查。',
      '醫師判斷不適合通訊診察時，可拒絕並建議改以其他方式就醫。'
    ],
    cta:'家中有慢性病或行動不便的長輩，下次回診時問醫師：「之後的穩定追蹤可以改用視訊嗎？」'
  });
})();
