/* v6 示範主題：高齡多重用藥（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：衛福部〈60類藥品重複用藥管理方案自108年元月上路〉（71歲以上約占重複用藥人數39%）、
   國健署「防跌三步」新聞稿（2025/02/18，65歲以上85%至少一項慢性病、看診請醫師評估用藥）、衛福部〈迎接老年社會，藥事照護服務不缺席〉（偏遠地區長者藥事照護後用藥由6.1種降為5.1種）。
   註：國內65歲以上長者同時使用5種以上藥物的比率查無近年官方統計，本題不寫。
   參考方向：健康智庫〈高齡藥注意：避免多重用藥、重複用藥問題〉2024/11。 */
(function(){
  const REFS = [
    {title:'60類藥品重複用藥管理方案自108年元月上路，用藥安全大家一起來把關',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-3803-45959-1.html'},
    {title:'「防跌三步」守護長者安全',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18870'},
    {title:'迎接老年社會，藥事照護服務不缺席，讓長期照護保護更完整',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-24726-1.html'}
  ];
  const TABLE = {headers:['用藥安全5要','怎麼做'], rows:[
    ['一張清單','整理所有藥品，包括中藥、保健食品與成藥'],
    ['看診帶著','每次看診帶藥袋或藥單，請醫師評估用藥'],
    ['固定藥局','選一家熟悉的藥局，請藥師檢查重複與交互作用'],
    ['不自行增減','不自行停藥、加量或拿別人的藥吃'],
    ['善用健康存摺','用健保快易通APP查看用藥紀錄，家人也能協助']
  ]};
  const TAGS = ['多重用藥','用藥安全','長者健康','重複用藥','健康存摺'];

  const DP_DUP = {id:'dp-poly-dup', type:'data_scope', title:'重複用藥比例的年份',
    desc:'「71歲以上約占重複用藥人數39%」是衛福部在108年推動60類藥品重複用藥管理方案時引用的統計，資料較舊；國內長者同時使用5種以上藥物的比率查無近年官方統計。',
    current:'71歲以上約占重複用藥人數39%（衛福部108年方案說明）',
    options:[{label:'沿用目前資料', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'長輩吃好幾種藥安全嗎？高齡多重用藥的風險與用藥安全5要',
    update_date:'2026/11/20',
    intro:'多重用藥通常指同時使用5種以上藥物，或使用了不必要的藥物。國民健康署指出，65歲以上長者85%至少有一項慢性疾病，看多科、吃多種藥很常見；衛生福利部推動60類藥品重複用藥管理方案時也指出，71歲以上長者約占重複用藥人數的39%，是最多的族群。藥物交互作用可能造成頭暈、跌倒、腸胃不適等問題，定期檢視用藥是長者健康管理的重要一環。',
    sections:[
      {heading:'多重用藥可能帶來的問題',format:'bullets',items:[
        '藥物交互作用或重複成分，造成頭暈、嗜睡、低血壓，增加跌倒風險。',
        '腸胃不適、食慾變差，影響營養。',
        '藥量多、時間複雜，容易漏吃或重複吃。'
      ]},
      {heading:'用藥安全5要',format:'table',table:TABLE},
      {heading:'可以運用的資源',format:'bullets',items:[
        '國健署「防跌三步」建議看診時請醫師評估用藥，避免藥物交互作用。',
        '健保雲端系統讓醫師與藥師查詢病人用藥紀錄，民眾可用「健康存摺」查看自己與家人的用藥。',
        '衛福部推動的藥事照護計畫中，偏遠地區長者經藥師訪視後，平均用藥品項由6.1種降為5.1種。'
      ]}
    ],
    think_tank_view:'長輩的藥常常是「越看越多」：每多一科、多一個症狀，就多一包藥。但不是所有藥都需要一直吃。每年至少一次，把所有藥袋、保健食品一起帶去給醫師或藥師「盤點」，是預防跌倒與藥物副作用最簡單的方法。千萬別自己停藥，有疑問就問專業人員。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'比例標明出處與方案年份，用藥建議引自國健署與衛福部，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['85%至少一項慢性病取自國健署2025/02/18新聞稿','71歲以上約占重複用藥39%取自衛福部108年方案說明'],
      layout_reason:'先說明多重用藥風險，再以表格整理用藥安全5要，最後介紹資源。',
      tone:'專業易懂', tone_reason:'給長者與照顧者具體可行的做法。',
      to_verify:['長者5種以上用藥比率查無近年官方統計','39%為108年方案說明資料','藥事照護6.1→5.1種為早期計畫成果']},
    decision_points:[DP_DUP]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽的藥袋越來越多？5招幫長輩用藥更安全',
    update_date:'2026/11/20',
    intro:'長輩看好幾科、拿好幾包藥很常見。國健署統計，65歲以上長輩85%至少有一種慢性病；衛福部也發現，71歲以上長輩是重複拿藥最多的族群，約占39%。藥吃太多、吃重複，可能頭暈、跌倒，定期幫爸媽整理藥袋很重要。',
    sections:[
      {heading:'藥吃太多可能會怎樣？',format:'bullets',items:[
        '頭暈、想睡、血壓太低，容易跌倒。',
        '胃口變差、肚子不舒服。',
        '藥太多種，容易忘記吃或吃兩次。'
      ]},
      {heading:'用藥安全5招',format:'table',table:TABLE},
      {heading:'家人可以幫忙',format:'bullets',items:[
        '用健保快易通的健康存摺，看看爸媽最近拿了哪些藥。',
        '下次看診陪爸媽帶著藥袋，請醫師一起看。'
      ]}
    ],
    think_tank_view:'幫爸媽把藥袋和保健食品排在桌上拍張照，下次看醫生時拿出來問，常常就能發現重複的藥。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署與衛福部並標明出處，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從子女幫忙整理藥袋的情境切入。', tone:'生活親切', tone_reason:'給照顧長輩的子女閱讀。', to_verify:['39%資料年份']},
    decision_points:[DP_DUP]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'高齡多重用藥：用藥安全5要',
    update_date:'2026/11/20',
    intro:'65歲以上85%至少有一項慢性病（國健署）。多重用藥可能增加頭暈、跌倒風險，定期檢視用藥很重要。',
    sections:[
      {heading:'風險',format:'bullets',items:[
        '交互作用、頭暈跌倒、漏吃重複吃。'
      ]},
      {heading:'用藥安全5要',format:'table',table:TABLE},
      {heading:'資源',format:'bullets',items:[
        '健康存摺查用藥，看診請醫師評估。'
      ]}
    ],
    think_tank_view:'每年至少盤點一次用藥，不自行停藥，有疑問就問醫師藥師。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明出處，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為風險、5要、資源三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['長者5種以上用藥比率']},
    decision_points:[DP_DUP]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'高齡多重用藥', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'長輩藥越吃越多，要定期盤點', primary_visual:'85%', secondary_message:'藥物交互作用可能增加跌倒', action_priority:'帶藥袋給醫師評估'},
    headline_hook:'藥袋越來越多？', headline_main:'長輩用藥安全 4 件事', title_accent:'4 件事',
    hero_message:'85% 有慢性病', hero_support:'65 歲以上至少一項慢性疾病（國健署）',
    primary_stat:{value:'85%', label:'65 歲以上至少一項慢性病', note:'國健署引國民健康訪問調查'},
    action_title:'用藥安全這樣做',
    action_cards:[
      {key:'列', text:'列出所有藥品、中藥與保健食品'},
      {key:'帶', text:'看診帶藥袋，請醫師評估用藥'},
      {key:'問', text:'固定一家藥局，請藥師檢查重複'},
      {key:'查', text:'用健康存摺查看家人用藥紀錄'}
    ],
    notice:'有疑問先問醫師藥師，**不要自行停藥**或拿別人的藥吃。',
    carousel_suggestion:{reason:'若想把風險、檢查清單與資源分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'藥吃太多', headline_main:'可能帶來的 3 個問題'},
      {layout_type:'action', headline_hook:'用藥安全', headline_main:'5 要一起做'},
      {layout_type:'action', headline_hook:'健康存摺', headline_main:'在手機查用藥紀錄'}]},
    hashtags:['多重用藥','用藥安全','長者健康','健康存摺'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'elderly-care',
    illustration:{topic:'長者用藥安全', audience:'長者與家人', scene:'藥師在藥局櫃台和長者及家人一起檢視攤開的藥袋',
      emotion:'安心、被照顧', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A pharmacist at a pharmacy counter reviewing spread-out medicine bags with an older adult and a family member, reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：65歲以上85%至少一項慢性病（國健署）','用藥建議取自國健署防跌三步'],
      layout_reason:'重點是可執行的用藥安全行動，選 action：4 個行動當主角，慢性病比例放在 Hero。',
      tone:'專業易懂', tone_reason:'具體、可執行。',
      to_verify:['85%的調查年份新聞稿未寫']},
    decision_points:[{id:'dp-poly-85', type:'data_scope', title:'慢性病比例未標年份', desc:'國健署2025年新聞稿引用「國民健康訪問調查」，但未寫調查年份。', current:'85%｜65 歲以上至少一項慢性病（國健署）', options:[{label:'沿用目前資料', action:'keep'}]}],
    content_check_note:'比例標明出處，用藥建議引自國健署，未使用療效保證用語，未涉及具體藥品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'高齡多重用藥',
    collect:{
      summary:'長者多病共存、看多科，多重用藥與重複用藥常見；國健署指出65歲以上85%至少有一項慢性病，衛福部重複用藥管理方案說明71歲以上約占重複用藥人數39%，用藥盤點與健康存摺是長者用藥安全的溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'85%至少一項慢性病：國健署依國民健康訪問調查指出，65歲以上長者85%至少有一項慢性疾病（新聞稿未寫調查年份）。',tag:'官方統計',source:{name:'國民健康署：「防跌三步」守護長者安全',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18870'}},
        {item:'好發族群年齡層',desc:'約39%：衛福部推動60類藥品重複用藥管理方案時指出，71歲以上為重複用藥人數最多的族群，約占39%。',tag:'官方統計',source:{name:'衛生福利部：60類藥品重複用藥管理方案',url:'https://www.mohw.gov.tw/cp-3803-45959-1.html'}},
        {item:'政策動向',desc:'60類藥品：健保自108年1月起推動60類藥品重複用藥管理，透過雲端系統讓醫師查詢病人用藥紀錄，民眾可用健康存摺查看家人用藥。',tag:'官方統計',source:{name:'衛生福利部：60類藥品重複用藥管理方案',url:'https://www.mohw.gov.tw/cp-3803-45959-1.html'}},
        {item:'年度趨勢方向',desc:'6.1種降為5.1種：衛福部藥事照護計畫中，偏遠地區長者經五次藥事照護訪視，平均個人用藥品項由6.1種降為5.1種（早期計畫成果）。',tag:'官方統計',source:{name:'衛生福利部：藥事照護服務不缺席',url:'https://mohw.gov.tw/cp-16-24726-1.html'}}
      ],
      product_view:['機會：用藥盤點、藥師諮詢可作為熟齡保戶健康管理服務。','機會：多重用藥與跌倒相關，可串連防跌與長照保障說明。','風險：不得給予個別用藥建議或暗示可自行停藥。'],
      marketing_view:['機會：「幫爸媽盤點藥袋」是具體、好執行的行動訊息。','機會：可結合健康存摺App教學做互動內容。','風險：數據年份較舊，傳播時避免強調數字。'],
      alert_level:'low',
      alert_reason:'屬長期用藥安全議題，無急迫時效事件；適合在重陽節與用藥安全宣導期間溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('71歲以上長者約占重複用藥人數的39%','CURRENCY_TIMELINESS','source_year_unstated',
          '文中寫「推動方案時指出」，但未寫出統計年份，讀者可能以為是近年數字。','low','yes',
          '39%對應的統計期間。','yes','confirm','衛福部108年方案說明，統計期間待確認。',
          '71歲以上長者約占重複用藥人數的39%（衛福部108年方案說明）',
          ['約占39%']),
        F('平均用藥品項由6.1種降為5.1種','SOURCE_EVIDENCE','pilot_result',
          '此為早期偏遠地區藥事照護計畫的成果，樣本與年份未說明，不能推論為全國效果。','low','no',
          null,'no','clarify','屬來源性質說明。',
          '平均用藥品項由6.1種降為5.1種（早期偏遠地區計畫成果）'),
        F('可能造成頭暈、跌倒、腸胃不適等問題','MEDICAL_INTERPRETATION','unsourced_claim',
          '副作用類型未附出處，屬一般衛教說法。','low','no',
          null,'no','clarify','屬出處補充。',
          '可能造成頭暈、跌倒等問題（國健署提醒用藥安全與防跌相關）'),
        F('不是所有藥都需要一直吃','MEDICAL_INTERPRETATION','medication_advice',
          '這句可能被長輩解讀為可以自行停藥，雖後文有提醒，但宜直接寫明由醫師判斷。','medium','no',
          null,'no','clarify','屬用藥安全提醒。',
          '是否每種藥都需要長期吃，應由醫師評估')
      ],
      card:[
        F('65 歲以上至少一項慢性病','CURRENCY_TIMELINESS','source_year_unstated',
          '主數字未標調查年份，國健署新聞稿本身也未寫。','low','yes',
          '85%對應的國民健康訪問調查年份。','yes','confirm','新聞稿未載明年份。',
          '65 歲以上至少一項慢性病（調查年份待確認）'),
        F('列出所有藥品、中藥與保健食品','MEDICAL_INTERPRETATION','incomplete_list',
          '未提醒一併列出外用藥、眼藥水與吸入劑，長輩常漏列。','low','no',
          null,'no','clarify','屬內容補強。',
          '列出所有藥品，含外用、中藥與保健食品')
      ]
    },
    title_alts:[
      '長輩吃好幾種藥安全嗎？高齡多重用藥的風險與用藥安全5要',
      '爸媽的藥袋越來越多？5招幫長輩用藥更安全',
      '65歲以上85%有慢性病：定期盤點用藥，預防頭暈跌倒'
    ],
    card_title_alts:[
      ['藥袋越來越多？','長輩用藥安全 4 件事'],
      ['幫爸媽盤點藥袋','看診帶給醫師看'],
      ['用藥安全','健康存摺查紀錄']
    ],
    data_addon:[
      '多重用藥常以同時使用5種以上藥物為切點，也包括使用不必要的藥物。',
      '國健署防跌三步：看診時請醫師評估用藥，避免藥物交互作用。',
      '健康存摺可在健保快易通App查詢。'
    ],
    cta:'這個週末把家中長輩所有藥袋與保健食品集中拍照建檔，下次看診時帶去請醫師或藥師一起檢視。'
  });
})();
