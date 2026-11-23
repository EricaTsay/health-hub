/* v6 示範主題：藥品安全使用（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-21。數據來源：食藥署藥物食品安全週報第1025期（2025-05-09：處方藥、指示藥、成藥分級與包裝標示）、衛福部〈成藥、指示藥分不清？藥師來解答！〉（甲乙類成藥販售通路、網路僅可販售乙類成藥、指示藥症狀持續三天未改善應就醫）、食藥署「正確用藥五大核心能力」宣導教材。
   注意：未查到國人自行購藥或用藥錯誤的近年官方統計。
   參考方向：健康智庫〈用藥安全－認識藥品分級、顏色、劑型〉2024/04 及胃藥、抗組織胺、止痛藥篇。 */
(function(){
  const REFS = [
    {title:'筋骨痠痛貼布，過量恐傷肝腎!（藥物食品安全週報第973期，2024）',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/TC/PublishOtherEpaperContent.aspx?id=1508&tid=4735'},
    {title:'正確服用安眠藥 睡個暢快甭煩惱（藥物食品安全週報第955期，2024）',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/TC/PublishOtherEpaperContent.aspx?id=1490&tid=4594'},
    {title:'藥品分級知多少（藥物食品安全週報第1025期）',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/TC/PublishOtherEpaperContent.aspx?id=1565&tid=5192'},
    {title:'成藥、指示藥分不清？藥師來解答！',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-81248-1.html'},
    {title:'正確用藥五大核心能力口語化宣導教材',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/tc/includes/GetFile.ashx?id=f636694574335308581'}
  ];
  const TABLE = {headers:['分級','怎麼取得','包裝標示'], rows:[
    ['處方藥','醫師診斷開處方，藥事人員調劑','「須由醫師處方使用」或「限由醫師使用」'],
    ['指示藥','藥局或有藥事人員的藥妝店，依醫師、藥師、藥劑生指示','「醫師藥師藥劑生指示藥品」'],
    ['甲類成藥','只能在藥局或零售藥商購買','「甲類成藥」'],
    ['乙類成藥','一般通路與網路皆可購買','「乙類成藥」']
  ]};
  const TAGS = ['用藥安全','藥品分級','處方藥','成藥','網購藥品'];

  const PRO = {
    content_type:'健康文章',
    title:'處方藥、指示藥、成藥怎麼分？看懂包裝標示用藥更安全',
    update_date:'2026/11/23',
    intro:'食品藥物管理署依藥品使用風險，將藥品分為處方藥、指示藥與成藥三級。處方藥藥性較強，須由醫師診斷開立處方，只能給處方上的病人使用；指示藥須在醫師、藥師或藥劑生指導下購買使用，若症狀持續三天以上未改善應儘速就醫；成藥又分甲類與乙類，其中只有乙類成藥可以在網路上販售。',
    sections:[
      {heading:'藥品三級怎麼分',format:'table',table:TABLE},
      {heading:'正確用藥五大核心能力',format:'bullets',items:[
        '做身體的主人。',
        '清楚表達自己的身體狀況（過敏史、正在使用的藥品）。',
        '看清楚藥品標示（品名、許可證字號、用法、警語）。',
        '清楚用藥方法與時間。',
        '與醫師、藥師做朋友。'
      ]},
      {heading:'網路購藥要小心',format:'bullets',items:[
        '目前僅允許乙類成藥於網路販售，外包裝有明顯「乙類成藥」標示。',
        '網路販售壯陽藥、減肥藥或國外藥品皆屬違法，可能買到假藥。',
        '使用非法藥品出現嚴重不良反應，無法申請藥害救濟。',
        '可至食藥署「西藥、醫療器材許可證相關查詢」確認藥品許可證。'
      ]},
      {heading:'痠痛貼布與安眠藥也是藥',format:'bullets',items:[
        '痠痛貼布的成分會經皮膚吸收，食藥署提醒一片貼四至六小時就要取下，每天總量不要過量；同時吃口服止痛藥時，應選擇與貼布不同成分的藥品，避免同一成分累積而增加肝腎負擔。',
        '安眠藥屬管制藥品，須經醫師診治開立處方；不可自行增減量或停藥、避免與酒精併用，也不要把藥轉讓給他人，否則恐有觸法之虞（食藥署）。'
      ]}
    ],
    think_tank_view:'很多用藥風險不是來自藥本身，而是「不知道自己吃的是什麼」。養成看外盒標示、確認許可證字號的習慣，有疑問就問藥師，是成本最低的用藥保險。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'藥品分級與販售規定引自食藥署2025年週報與衛福部說明，五大核心能力引自食藥署宣導教材，未點名特定藥品品牌。',
    ai_rationale:{basis:['藥品三級分類與標示（食藥署週報第1025期）','僅乙類成藥可網路販售（衛福部）'],
      layout_reason:'先用表格整理三級藥品的取得方式與標示，再列五大核心能力，最後提醒網購風險。',
      tone:'專業易懂', tone_reason:'需清楚區分分級與通路。',
      to_verify:['未查到國人用藥錯誤近年官方統計']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'藥局買的感冒藥、網路賣的藥，哪些可以自己買？',
    update_date:'2026/11/23',
    intro:'藥品其實分三級：醫生開的「處方藥」、要問藥師的「指示藥」、可以自己買的「成藥」。食藥署提醒，包裝上都會標示是哪一級。像感冒藥、止痛藥常是指示藥，吃了三天還沒好要去看醫生。網路上只能賣「乙類成藥」，網路賣的減肥藥、壯陽藥都是違法的。',
    sections:[
      {heading:'藥品三級一次看',format:'table',table:TABLE},
      {heading:'用藥5個好習慣',format:'bullets',items:[
        '自己的身體自己顧。',
        '看病時說清楚症狀、過敏和正在吃的藥。',
        '看清楚藥盒上的名字、字號和注意事項。',
        '照醫師藥師說的時間和方法吃。',
        '有問題就問藥師。'
      ]},
      {heading:'網路買藥要小心',format:'bullets',items:[
        '網路只能賣「乙類成藥」，包裝上會寫。',
        '網購減肥藥、壯陽藥、國外藥都違法，可能是假藥。',
        '吃了出問題，無法申請藥害救濟。',
        '可以上食藥署網站查藥品許可證。'
      ]},
      {heading:'貼布和安眠藥也要小心',format:'bullets',items:[
        '痠痛貼布也是藥，一片貼4到6小時就要撕掉；如果同時吃止痛藥，要選和貼布不同成分的，免得同一種藥吃太多傷肝腎。',
        '安眠藥是管制藥品，要醫師開才能用；不要自己加減量、不要配酒，也不要分給家人朋友吃。'
      ]}
    ],
    think_tank_view:'買藥前翻一下外盒，看看是哪一級、有沒有字號，就能避開很多風險。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自食藥署與衛福部，未點名特定藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以自行買藥的生活情境切入。', tone:'生活親切', tone_reason:'給一般家庭。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'藥品三級：處方、指示、成藥',
    update_date:'2026/11/23',
    intro:'藥品分處方藥、指示藥、成藥三級；網路僅可販售乙類成藥。指示藥症狀三天未改善應就醫。',
    sections:[
      {heading:'三級分類',format:'table',table:TABLE},
      {heading:'五大核心能力',format:'bullets',items:[
        '表達身體狀況、看清標示、清楚用法、與藥師做朋友。'
      ]},
      {heading:'網購',format:'bullets',items:[
        '非乙類成藥網售皆違法。',
        '非法藥品無法申請藥害救濟。'
      ]},
      {heading:'貼布與安眠藥',format:'bullets',items:[
        '痠痛貼布一片貼4至6小時；併用口服止痛藥應選不同成分。',
        '安眠藥屬管制藥品，依處方使用、不併用酒精、不轉讓他人。'
      ]}
    ],
    think_tank_view:'看標示、問藥師，是最基本的用藥安全。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自食藥署與衛福部，未點名特定藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為分級、能力、網購三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'藥品安全使用', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'藥品分三級，包裝上看得到', primary_visual:'3 級', secondary_message:'網路只能賣乙類成藥', action_priority:'看標示、問藥師'},
    headline_hook:'這個藥可以自己買嗎？', headline_main:'藥品 3 級分類一次看', title_accent:'3 級分類',
    hero_message:'網路只能賣乙類成藥', hero_support:'其他藥品網售皆違法（衛福部）',
    knowledge_title:'藥品 3 級', knowledge_note:'指示藥用了**三天未改善**就就醫',
    knowledge_cards:[
      {label:'處方藥', icon:'report', lines:['醫師開處方','只限本人使用']},
      {label:'指示藥', icon:'chat', lines:['藥師指導購買','如部分止痛藥']},
      {label:'甲類成藥', icon:'home', lines:['限藥局販售']},
      {label:'乙類成藥', icon:'check', lines:['一般通路、網路','可購買']}
    ],
    action_title:'用藥這樣做',
    action_cards:[
      {key:'看', text:'看清外盒分級、字號與警語'},
      {key:'說', text:'看病說清楚過敏與正在用的藥'},
      {key:'問', text:'有疑問就問藥師'},
      {key:'查', text:'上食藥署網站查藥品許可證'}
    ],
    carousel_suggestion:{reason:'若想把藥品分級、五大核心能力與網購風險分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'藥品分 3 級', headline_main:'處方、指示、成藥'},
      {layout_type:'action', headline_hook:'正確用藥', headline_main:'五大核心能力'},
      {layout_type:'knowledge', headline_hook:'網路買藥', headline_main:'只有乙類成藥合法'}]},
    hashtags:['用藥安全','藥品分級','成藥','網購藥品'],
    sources:['衛生福利部食品藥物管理署','衛生福利部'],
    illustration_category:'general',
    illustration:{topic:'用藥諮詢', audience:'一般家庭', scene:'藥局櫃台前，藥師拿著藥盒指著外包裝標示向民眾說明',
      emotion:'安心、信任', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'At a pharmacy counter, a pharmacist holding a medicine box and pointing to the label while explaining to a customer, reassuring and trustworthy, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['藥品三級分類（食藥署週報第1025期）'],
      layout_reason:'核心是分級與取得方式，選 knowledge：4 種藥品分類當主角，最後給用藥行動。',
      tone:'專業易懂', tone_reason:'分類需精確。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自食藥署與衛福部，未點名特定藥品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'藥品安全使用',
    collect:{
      summary:'國內藥品依風險分為處方藥、指示藥、成藥（甲類、乙類）三級，包裝上皆有標示；網路僅可販售乙類成藥，網購減肥藥、壯陽藥、國外藥品均屬違法且無法申請藥害救濟。食藥署以「正確用藥五大核心能力」推廣看標示、問藥師的用藥習慣。',
      objective_data:[
        {item:'政策動向',desc:'藥品分3級：食藥署2025年週報說明，依使用風險藥品分為處方藥、指示藥與成藥，處方藥包裝標示「須由醫師處方使用」，指示藥標示「醫師藥師藥劑生指示藥品」。',tag:'官方統計',source:{name:'食藥署：藥物食品安全週報第1025期',url:'https://www.fda.gov.tw/TC/PublishOtherEpaperContent.aspx?id=1565&tid=5192'}},
        {item:'盛行率／發生率',desc:'僅乙類成藥可網售：衛福部指出我國僅允許外包裝標示「乙類成藥」者在網路販售，其他如壯陽藥、減肥藥或國外藥品網售皆屬違法。',tag:'官方統計',source:{name:'衛福部：成藥、指示藥分不清？藥師來解答！',url:'https://www.mohw.gov.tw/cp-16-81248-1.html'}},
        {item:'好發族群年齡層',desc:'症狀持續三天以上：使用指示藥（如解熱鎮痛藥、感冒藥）應依說明書或藥事人員指示，若症狀持續三天以上未改善應儘速就醫。',tag:'官方統計',source:{name:'衛福部：成藥、指示藥分不清？藥師來解答！',url:'https://www.mohw.gov.tw/cp-16-81248-1.html'}},
        {item:'年度趨勢方向',desc:'五大核心能力：食藥署推廣做身體的主人、清楚表達身體狀況、看清楚藥品標示、清楚用藥方法與時間、與醫師藥師做朋友。',tag:'官方統計',source:{name:'食藥署：正確用藥五大核心能力宣導教材',url:'https://www.fda.gov.tw/tc/includes/GetFile.ashx?id=f636694574335308581'}}
      ],
      product_view:['機會：用藥安全是熟齡與家庭保戶的實用關懷內容。','機會：網購藥品風險可結合藥害救濟知識。','風險：避免點名或推薦特定藥品；不得提供個人用藥建議。'],
      marketing_view:['機會：感冒季、網購節日是溝通時點。','機會：「這個藥可以自己買嗎？」貼近日常。','風險：避免讓民眾以為成藥可以隨意使用。'],
      alert_level:'low',
      alert_reason:'屬長期用藥安全議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('像感冒藥、止痛藥常是指示藥','DATA_FACTUAL_ACCURACY','overgeneralization',
          '感冒藥、止痛藥依成分與劑量可能屬處方藥、指示藥或成藥，「常是指示藥」容易讓讀者誤以為都可自行購買。','low','no',
          null,'no','clarify','屬分類精確度。',
          '部分感冒藥、止痛藥屬指示藥，實際分級以外盒標示為準'),
        F('若症狀持續三天以上未改善應儘速就醫','MEDICAL_INTERPRETATION','missing_red_flags',
          '僅提到三天的時間點，未提醒出現高燒、呼吸困難等嚴重症狀時應立即就醫，不必等三天。','low','no',
          null,'no','clarify','屬就醫指引完整度。',
          '若症狀持續三天以上未改善應儘速就醫；症狀嚴重時應立即就醫',
          ['吃了三天還沒好要去看醫生','指示藥症狀三天未改善應就醫']),
        F('使用非法藥品出現嚴重不良反應，無法申請藥害救濟','TERMINOLOGY_LANGUAGE','jargon',
          '「藥害救濟」未說明是什麼（正當使用合法藥品發生嚴重不良反應時的救濟制度），一般讀者不易理解其意義。','low','no',
          null,'no','clarify','屬名詞說明。',
          '使用非法藥品出現嚴重不良反應，無法申請藥害救濟（正當使用合法藥品受害時的政府救濟制度）',
          ['吃了出問題，無法申請藥害救濟。','非法藥品無法申請藥害救濟。'])
      ],
      card:[
        F('如部分止痛藥','DATA_FACTUAL_ACCURACY','overgeneralization',
          '止痛藥分級依成分劑量而定，卡面舉例可能被過度解讀。','low','no',
          null,'no','clarify','已寫「部分」，屬輕微。',
          '以外盒標示為準'),
        F('其他藥品網售皆違法（衛福部）','LEGAL_COMPLIANCE','missing_consequence',
          '未提醒網購非法藥品出事無法申請藥害救濟，少了最關鍵的後果。','low','no',
          null,'no','clarify','屬補充提醒。',
          '其他藥品網售皆違法，出事無法申請藥害救濟')
      ]
    },
    title_alts:[
      '處方藥、指示藥、成藥怎麼分？看懂包裝標示用藥更安全',
      '藥局買的感冒藥、網路賣的藥，哪些可以自己買？',
      '網路只能賣乙類成藥：藥品分級與正確用藥5能力'
    ],
    card_title_alts:[
      ['這個藥可以自己買嗎？','藥品 3 級分類一次看'],
      ['網路買藥要小心','只有乙類成藥合法'],
      ['正確用藥','看標示、問藥師']
    ],
    data_addon:[
      '甲類成藥常見如胃腸藥、浣腸劑；乙類成藥常見如清涼劑、外用軟油膏（衛福部）。',
      '處方藥只能由處方箋上所列的病人使用（食藥署）。',
      '網購非法藥品可能以買家名義輸入，有觸犯藥事法輸入禁藥規定的風險（衛福部）。'
    ],
    cta:'這週打開家裡的藥箱，看看每盒藥是哪一級、有沒有許可證字號，不確定的拿去問藥師。'
  });
})();
