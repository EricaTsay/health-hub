/* v6 示範主題：家庭醫藥箱與藥品保存（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-21。數據來源：衛福部／食藥署〈新年到！藥品正確儲存及丟棄三撇步〉（113-01-10：保存原則、開封期限、廢棄藥品處理、特殊藥品回收、旅遊常備藥）、衛福部〈夏天高溫炎熱 保存「藥」注意 放冰箱非萬能〉。
   注意：未查到家中剩餘或過期藥品數量的近年官方統計。
   參考方向：健康智庫〈家庭醫藥箱裝什麼？〉2025/10、〈「藥」注意：你的「藥」乾燥嗎？〉2025/04、〈天氣熱，「藥」放哪？〉2023/07。 */
(function(){
  const REFS = [
    {title:'新年到！藥品正確儲存及丟棄三撇步',source:'衛生福利部食品藥物管理署',url:'https://www.mohw.gov.tw/cp-16-77172-1.html'},
    {title:'夏天高溫炎熱 保存「藥」注意 放冰箱非萬能 保存有三不',source:'衛生福利部',url:'https://www.mohw.gov.tw/fp-16-71194-1.html'},
    {title:'藥品該如何安全保存？剩藥又該如何處理？',source:'食藥署食藥好文網',url:'https://article-consumer.fda.gov.tw/subject.aspx?subjectid=2&id=3689'}
  ];
  const TABLE = {headers:['藥品狀況','怎麼處理'], rows:[
    ['療程已結束但沒吃完','依醫囑服用，剩餘藥品建議丟棄'],
    ['過期或變色、粉碎、潮解','丟棄'],
    ['瓶裝口服藥或外用藥膏開封超過半年','丟棄'],
    ['眼藥水（膏）或藥水開封超過1個月','丟棄'],
    ['針劑、抗腫瘤藥、抗生素、荷爾蒙藥、管制藥品','拿回醫療機構或藥局回收']
  ]};
  const TAGS = ['用藥安全','藥品保存','家庭醫藥箱','廢棄藥品','居家安全'];

  const PRO = {
    content_type:'健康文章',
    title:'家裡藥箱該清了！藥品保存與丟棄三撇步',
    update_date:'2026/11/21',
    intro:'食品藥物管理署提醒，藥品包裝上的「保存期限」指的是未開封的狀態；開封後，瓶裝口服藥或外用藥膏超過半年、眼藥水（膏）或藥水超過1個月，或無法確認何時開封，建議丟棄。一般藥品存放於室溫、避免陽光直射或濕熱環境即可，除非標示需冷藏，否則不要隨意放冰箱，以免受潮。',
    sections:[
      {heading:'哪些藥該丟、怎麼丟',format:'table',table:TABLE},
      {heading:'正確保存',format:'bullets',items:[
        '依仿單或藥袋指示儲存，一般室溫保存，避開陽光直射與濕熱處。',
        '非標示需冷藏者不要隨意冷藏，以免藥品受潮。',
        '開封的瓶裝藥註記開封日期，保留原包裝與仿單，用完確實密封。',
        '放在兒童不易取得的地方，避免誤食。'
      ]},
      {heading:'一般藥品這樣丟',format:'bullets',items:[
        '藥錠、膠囊可直接丟進垃圾袋，隨一般垃圾焚化處理。',
        '藥水切勿倒入馬桶或水槽：先在夾鏈袋放入咖啡渣、茶葉或報紙等吸水物質。',
        '把藥水倒入袋中密封，再丟進一般垃圾；包裝容器依規定回收。',
        '就醫帶回的藥依醫囑按時服用，不要囤積。'
      ]}
    ],
    think_tank_view:'家庭醫藥箱最常見的問題不是缺藥，而是「放太久、不知道還能不能吃」。趁年終大掃除或換季，把藥箱整理一次、在瓶身寫上開封日期，就能讓藥箱真的派上用場。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'保存與丟棄原則引自食藥署113年新聞稿，未推薦特定藥品或醫藥箱商品。',
    ai_rationale:{basis:['開封後半年／1個月丟棄原則（食藥署113-01-10）','藥水丟棄三步驟與特殊藥品回收（同上）'],
      layout_reason:'先用表格整理該丟的藥與處理方式，再說明保存原則，最後給一般藥品丟棄步驟。',
      tone:'專業易懂', tone_reason:'需具體期限與步驟。',
      to_verify:['未查到家中剩餘藥品數量的近年官方統計']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'藥箱裡的眼藥水開多久了？過年前大掃除順便清藥箱',
    update_date:'2026/11/21',
    intro:'打開家裡的藥箱，是不是有不知道放多久的感冒藥、開了很久的眼藥水？食藥署提醒，盒子上的保存期限是「沒開封」時的期限；開封後，瓶裝藥和藥膏放超過半年、眼藥水或藥水超過1個月，就建議丟掉。藥品放室溫陰涼處就好，沒有寫要冷藏的，不要放冰箱。',
    sections:[
      {heading:'這些藥該丟了',format:'table',table:TABLE},
      {heading:'藥這樣放',format:'bullets',items:[
        '照藥袋說的放，避開太陽和潮濕的地方。',
        '沒寫要冷藏就不要放冰箱，反而會受潮。',
        '開瓶時寫上日期，包裝和說明書留著。',
        '放在小朋友拿不到的地方。'
      ]},
      {heading:'藥這樣丟',format:'bullets',items:[
        '藥丸、膠囊直接丟一般垃圾。',
        '藥水別倒馬桶，先在夾鏈袋放咖啡渣或茶葉。',
        '把藥水倒進去封好，再丟一般垃圾。',
        '打針的藥、抗生素、癌症用藥要拿回藥局或醫院。'
      ]}
    ],
    think_tank_view:'下次大掃除時，順便把藥箱倒出來檢查一次，用麥克筆在瓶子上寫下開封日期。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自食藥署，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以大掃除清藥箱的情境切入。', tone:'生活親切', tone_reason:'給家庭讀者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'藥品保存與丟棄',
    update_date:'2026/11/21',
    intro:'開封後瓶裝藥、藥膏超過半年，眼藥水、藥水超過1個月建議丟棄。一般藥品室溫保存，勿隨意冷藏。',
    sections:[
      {heading:'該丟的藥',format:'table',table:TABLE},
      {heading:'保存',format:'bullets',items:[
        '室溫避光防潮。',
        '註記開封日期。'
      ]},
      {heading:'丟棄',format:'bullets',items:[
        '藥水勿倒馬桶，吸水物封袋丟棄。',
        '特殊藥品回收藥局醫院。'
      ]}
    ],
    think_tank_view:'定期清藥箱，寫上開封日期。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自食藥署，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為該丟、保存、丟棄三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'家庭醫藥箱與藥品保存', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'開封後的藥品期限比盒子上短', primary_visual:'1 個月', secondary_message:'眼藥水、藥水開封超過 1 個月建議丟棄', action_priority:'放、倒、丟'},
    headline_hook:'藥箱該清了？', headline_main:'藥品保存與丟棄 4 步驟', title_accent:'4 步驟',
    hero_message:'眼藥水開封 > 1 個月', hero_support:'就建議丟棄；瓶裝藥、藥膏開封 > 半年（食藥署）',
    action_title:'藥品這樣處理',
    action_cards:[
      {key:'記', text:'開封時在瓶身寫上日期'},
      {key:'放', text:'室溫避光防潮，非必要不冷藏'},
      {key:'倒', text:'藥水倒入裝咖啡渣的夾鏈袋'},
      {key:'回', text:'針劑、抗生素拿回藥局醫院'}
    ],
    notice:'藥水**切勿倒入馬桶或水槽**；藥品放在兒童拿不到的地方。',
    carousel_suggestion:{reason:'若想把保存、檢查與丟棄分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'這些藥該丟了', headline_main:'開封期限一次看'},
      {layout_type:'action', headline_hook:'藥品保存', headline_main:'室溫避光防潮'},
      {layout_type:'action', headline_hook:'藥水怎麼丟', headline_main:'放、倒、丟三步驟'}]},
    hashtags:['用藥安全','藥品保存','家庭醫藥箱','廢棄藥品'],
    sources:['衛生福利部食品藥物管理署'],
    illustration_category:'general',
    illustration:{topic:'整理家庭醫藥箱', audience:'家庭照顧者', scene:'一家人在客廳把醫藥箱倒在桌上檢查，用麥克筆在藥瓶上寫日期',
      emotion:'整齊、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A family in a living room emptying a medicine box onto a table to check it, writing dates on medicine bottles with a marker, tidy and reassuring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['食藥署113年藥品保存與丟棄三撇步'],
      layout_reason:'重點是具體步驟，選 action：4 個處理行動當主角，開封期限當鉤子。',
      tone:'專業易懂', tone_reason:'具體可做。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自食藥署，未推薦特定商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'家庭醫藥箱與藥品保存',
    collect:{
      summary:'食藥署提醒藥品包裝的保存期限指未開封狀態，開封後瓶裝藥與藥膏超過半年、眼藥水與藥水超過1個月建議丟棄；一般藥品室溫避光防潮保存，非必要不冷藏。藥水勿倒馬桶，特殊藥品應交回藥局或醫院，年節大掃除是溝通時機。',
      objective_data:[
        {item:'盛行率／發生率',desc:'開封超過1個月：食藥署建議眼藥水（膏）或藥水開封超過1個月、瓶裝口服藥或外用藥膏開封超過半年，或無法確認開封時間者，予以丟棄。',tag:'官方統計',source:{name:'食藥署：藥品正確儲存及丟棄三撇步',url:'https://www.mohw.gov.tw/cp-16-77172-1.html'}},
        {item:'政策動向',desc:'特殊藥品回收：針劑、抗腫瘤藥品、抗生素、荷爾蒙藥品及管制藥品需拿回醫療機構或藥局回收，一般藥錠可隨一般垃圾焚化處理。',tag:'官方統計',source:{name:'食藥署：藥品正確儲存及丟棄三撇步',url:'https://www.mohw.gov.tw/cp-16-77172-1.html'}},
        {item:'好發族群年齡層',desc:'兒童誤食：食藥署提醒藥品應存放於兒童不易取得的地方，並保留包裝及仿單、開封註記日期。',tag:'官方統計',source:{name:'食藥署：藥品正確儲存及丟棄三撇步',url:'https://www.mohw.gov.tw/cp-16-77172-1.html'}},
        {item:'年度趨勢方向',desc:'放冰箱非萬能：衛福部提醒多數藥品室溫避光防潮保存即可，非標示需冷藏的藥品放冰箱反而可能受潮變質。',tag:'官方統計',source:{name:'衛福部：夏天高溫炎熱 保存「藥」注意',url:'https://www.mohw.gov.tw/fp-16-71194-1.html'}}
      ],
      product_view:['機會：藥品保存是家庭照顧者的實用內容，可結合年節關懷。','機會：「清藥箱」可作為保戶互動活動。','風險：避免推薦特定藥品或醫藥箱組合；不提供個人用藥建議。'],
      marketing_view:['機會：年終大掃除、梅雨季、夏季高溫是溝通時點。','機會：「開封1個月」的期限多數人不知道，具新鮮感。','風險：避免讓民眾自行判斷特殊藥品處理方式。'],
      alert_level:'low',
      alert_reason:'屬長期用藥安全議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('療程已結束但沒吃完','MEDICAL_INTERPRETATION','adherence_message',
          '表格只寫「剩餘藥品建議丟棄」，可能讓讀者以為抗生素等藥品自覺好轉就可以停；食藥署原文同時強調應依醫囑服用完畢。','low','no',
          null,'no','clarify','屬用藥順從性提醒。',
          '療程已結束但仍有剩藥（應先依醫囑服用，勿自行停藥）'),
        F('藥錠、膠囊可直接丟進垃圾袋，隨一般垃圾焚化處理','MEDICAL_INTERPRETATION','missing_exception',
          '一般藥錠可丟一般垃圾，但抗生素、抗腫瘤藥等即使是錠劑也屬特殊藥品需回收；本句未提醒例外。','low','no',
          null,'no','clarify','屬例外提醒。',
          '一般藥錠、膠囊可直接丟進垃圾袋（抗生素、抗腫瘤藥等除外）',
          ['藥丸、膠囊直接丟一般垃圾。']),
        F('非標示需冷藏者不要隨意冷藏，以免藥品受潮','DATA_FACTUAL_ACCURACY','missing_example',
          '未舉出需冷藏的常見藥品（如未開封胰島素），讀者不易判斷自家藥品是否屬於例外。','low','no',
          null,'no','clarify','屬補充說明。',
          '非標示需冷藏者（如未開封胰島素才需冷藏）不要隨意冷藏，以免藥品受潮',
          ['沒寫要冷藏就不要放冰箱，反而會受潮。','室溫避光防潮。'])
      ],
      card:[
        F('室溫避光防潮，非必要不冷藏','DATA_FACTUAL_ACCURACY','missing_example',
          '未說明哪些藥需冷藏，讀者可能把需冷藏藥品也放室溫。','low','no',
          null,'no','clarify','受字數限制。',
          '依藥袋指示；未標示冷藏者放室溫'),
        F('眼藥水開封 > 1 個月','DATA_FACTUAL_ACCURACY','general_rule_vs_label',
          '此為一般原則，部分藥品仿單另有開封後期限，應以仿單為準。','low','no',
          null,'no','clarify','屬適用範圍。',
          '眼藥水開封 > 1 個月（以仿單為準）')
      ]
    },
    title_alts:[
      '家裡藥箱該清了！藥品保存與丟棄三撇步',
      '藥箱裡的眼藥水開多久了？過年前大掃除順便清藥箱',
      '開封1個月就該丟？藥品保存期限與丟棄方法'
    ],
    card_title_alts:[
      ['藥箱該清了？','藥品保存與丟棄 4 步驟'],
      ['眼藥水開多久了？','開封 1 個月就該丟'],
      ['藥水別倒馬桶','放、倒、丟三步驟']
    ],
    data_addon:[
      '慢性病患者出國或出遊應隨身攜帶藥品（食藥署）。',
      '旅遊常備藥可詢問藥事人員，如暈車藥、腸胃藥、外用藥膏。',
      '就醫帶回的藥品應遵照醫囑按時服用，切勿囤積（食藥署）。'
    ],
    cta:'這個週末把家裡藥箱倒出來檢查一次，過期或開封太久的依規定丟棄，其餘在瓶身寫上開封日期。'
  });
})();
