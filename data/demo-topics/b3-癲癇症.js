/* v6 示範主題：癲癇症（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：衛福部〈頑固性癲癇病人的一大福音，「迷走神經刺激醫材」自109年12月1日起納入健保給付〉、
   台灣癲癇醫學會〈癲癇發作時的處置〉（2019/12/25，蔡明蘭醫師提供）與「癲癇知識」列表（約兩成病人多種藥物仍控制不佳）。
   註：國內癲癇病人數查無官方公布統計，本題不寫人數。
   參考方向：健康智庫〈癲癇症〉2023/03。 */
(function(){
  const REFS = [
    {title:'癲癇發作時的處置',source:'台灣癲癇醫學會',url:'https://www.epilepsy.org.tw/knowledge/46'},
    {title:'癲癇知識',source:'台灣癲癇醫學會',url:'https://www.epilepsy.org.tw/knowledge'},
    {title:'頑固性癲癇病人的一大福音，「迷走神經刺激醫材」自109年12月1日起納入健保給付',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-4625-56976-1.html'}
  ];
  const TABLE = {headers:['發作時','怎麼做'], rows:[
    ['要做','保持冷靜、留在身旁，移開尖銳物品，頭下墊軟物'],
    ['要做','抽搐停止後讓病人側臥，避免口水或嘔吐物嗆到'],
    ['要做','記錄發作時間、部位與型態，提供醫師參考'],
    ['不要做','不要強壓肢體、不要搖晃，絕對不要塞東西進嘴巴'],
    ['不要做','尚未完全清醒前不要餵水餵食，也不要強迫走動']
  ]};
  const TAGS = ['癲癇','癲癇急救','腦神經疾病','側臥','用藥安全'];

  const DP_FIRSTAID = {id:'dp-epi-119', type:'tone', title:'送醫時機的寫法',
    desc:'台灣癲癇醫學會列出的送醫條件包括連續抽搐5分鐘以上、發作間未恢復意識、撞到頭、呼吸困難等，原文未提到「119」。AI 文中加入「撥打119」以便讀者行動，可選擇改回學會原文的「送醫」。',
    current:'連續抽搐5分鐘以上，請立即撥打119',
    options:[{label:'維持目前寫法', action:'keep'}, {label:'改成學會原文', action:'replace', from:'請立即撥打119送醫', to:'應立即送醫'}]};

  const PRO = {
    content_type:'健康文章',
    title:'看到有人癲癇發作怎麼辦？5個要做、5個不要做',
    update_date:'2026/11/20',
    intro:'癲癇是大腦神經細胞不正常放電所引起的慢性疾病，發作時可能出現意識喪失、全身抽搐，或單側手腳抽動、感覺異常。多數病人規律服藥可以控制發作，但台灣癲癇醫學會指出，約有兩成病人即使使用第二、第三種藥物仍難以良好控制。遇到有人發作時，旁人正確的處置，能大幅減少受傷的風險。',
    sections:[
      {heading:'癲癇發作時的處置',format:'table',table:TABLE},
      {heading:'這些情況要送醫',format:'bullets',items:[
        '連續抽搐5分鐘以上，或連續發作之間意識沒有恢復，請立即撥打119送醫。',
        '發作中頭部撞到硬物，或發作後呼吸困難、胸痛、身體異常疼痛、有燙傷。',
        '發作後意識模糊超過1小時。'
      ]},
      {heading:'病人與家屬的日常管理',format:'bullets',items:[
        '依醫囑規律服藥，不可自行停藥或調整劑量。',
        '睡眠不足、飲酒等可能誘發發作，應維持規律作息。',
        '藥物治療效果不佳的頑固性癲癇，可由醫師評估手術或迷走神經刺激術；迷走神經刺激醫材自109年12月1日起納入健保給付。'
      ]}
    ],
    think_tank_view:'癲癇發作的畫面常讓旁人慌張，第一反應往往是「壓住他」或「塞東西防止咬舌」，偏偏這兩件事都是錯的。記住三個原則：保護環境、不壓不塞、抽完側躺，再看時間判斷是否要送醫。對病人來說，社會的理解與正確的協助，和藥物一樣重要。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'處置原則引自台灣癲癇醫學會，健保給付引自衛福部，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['發作處置與送醫條件取自台灣癲癇醫學會〈癲癇發作時的處置〉','迷走神經刺激醫材健保給付取自衛福部新聞'],
      layout_reason:'重點是旁人急救，先以表格整理要做與不要做，再說明送醫時機與日常管理。',
      tone:'專業易懂', tone_reason:'急救資訊需清楚、可記憶。',
      to_verify:['國內癲癇病人數查無官方統計','學會處置文章為2019年版']},
    decision_points:[DP_FIRSTAID]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'有人突然倒地抽搐？記住「不壓、不塞、抽完側躺」',
    update_date:'2026/11/20',
    intro:'癲癇是大腦放電不正常造成的疾病，發作時可能突然倒地、全身抽搐。看到的人常常很慌，忍不住想壓住他或塞東西到嘴裡，其實這些都是錯的。台灣癲癇醫學會整理了正確做法，一起學起來。',
    sections:[
      {heading:'遇到發作這樣做',format:'table',table:TABLE},
      {heading:'什麼時候要叫救護車？',format:'bullets',items:[
        '抽搐超過5分鐘，或一直發作、中間都沒醒過來，請立即撥打119送醫。',
        '撞到頭、喘不過氣、胸痛或受傷。',
        '抽完之後超過1小時還是迷迷糊糊。'
      ]},
      {heading:'如果家人有癲癇',format:'bullets',items:[
        '提醒按時吃藥，不要自己停藥。',
        '睡飽、少喝酒，避免誘發發作。',
        '藥物控制不好的話，可以和醫師討論手術或其他治療。'
      ]}
    ],
    think_tank_view:'多數癲癇病人吃藥就能好好生活、工作。大家多懂一點正確處置，他們在外面就多一分安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'處置原則引自台灣癲癇醫學會，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'用好記的口訣帶出急救步驟。', tone:'生活親切', tone_reason:'給一般民眾閱讀。', to_verify:['學會處置文章年份']},
    decision_points:[DP_FIRSTAID]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'癲癇發作：不壓、不塞、抽完側躺',
    update_date:'2026/11/20',
    intro:'癲癇發作時，旁人保持冷靜、保護環境、不壓不塞，抽完讓病人側躺。',
    sections:[
      {heading:'處置',format:'table',table:TABLE},
      {heading:'送醫',format:'bullets',items:[
        '連續抽搐5分鐘以上，請立即撥打119送醫。'
      ]},
      {heading:'日常',format:'bullets',items:[
        '規律服藥、睡眠充足、少喝酒。'
      ]}
    ],
    think_tank_view:'正確的旁人處置，是對癲癇病人最實在的支持。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'處置原則引自台灣癲癇醫學會，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為處置、送醫、日常三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['學會處置文章年份']},
    decision_points:[DP_FIRSTAID]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'癲癇症', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'不壓、不塞、抽完側躺', primary_visual:'5 分鐘', secondary_message:'抽搐超過 5 分鐘立即送醫', action_priority:'正確處置發作'},
    headline_hook:'有人倒地抽搐？', headline_main:'癲癇發作 4 步驟處置', title_accent:'4 步驟',
    hero_message:'抽搐超過 5 分鐘', hero_support:'立即撥打 119 送醫（台灣癲癇醫學會建議送醫）',
    action_title:'發作時這樣做',
    action_cards:[
      {key:'護', text:'移開尖銳物品，頭下墊軟物'},
      {key:'禁', text:'不壓肢體、不塞東西進嘴巴'},
      {key:'側', text:'抽搐停止後讓病人側臥'},
      {key:'記', text:'記錄發作時間與型態給醫師'}
    ],
    notice:'撞到頭、呼吸困難或發作後**意識模糊超過 1 小時**，也要送醫。',
    carousel_suggestion:{reason:'若想把要做、不要做與送醫時機分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'action', headline_hook:'有人倒地抽搐？', headline_main:'5 個要做'},
      {layout_type:'knowledge', headline_hook:'常見錯誤', headline_main:'5 個不要做'},
      {layout_type:'knowledge', headline_hook:'何時送醫', headline_main:'這些情況撥打 119'}]},
    hashtags:['癲癇','癲癇急救','腦神經疾病','側臥'],
    sources:['台灣癲癇醫學會','衛生福利部'],
    illustration_category:'brain',
    illustration:{topic:'癲癇發作處置', audience:'一般民眾', scene:'路人跪在側臥的人旁邊，看著手錶計時，旁邊有人撥打電話',
      emotion:'冷靜、可靠', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A calm bystander kneeling beside a person lying on their side, checking a wristwatch, while another person makes a phone call, calm and capable mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['處置步驟取自台灣癲癇醫學會','送醫條件取自同一文章'],
      layout_reason:'重點是旁人急救行動，選 action：4 個處置步驟當主角，5 分鐘送醫門檻放在 Hero。',
      tone:'專業易懂', tone_reason:'急救資訊需清楚、好記。',
      to_verify:['國內病人數查無官方統計，未放主數字']},
    decision_points:[Object.assign({}, DP_FIRSTAID, {current:'抽搐超過 5 分鐘｜立即撥打 119 送醫', options:[{label:'維持目前寫法', action:'keep'}, {label:'改成學會原文', action:'replace', from:'立即撥打 119 送醫（台灣癲癇醫學會建議送醫）', to:'應立即送醫（台灣癲癇醫學會）'}]})],
    content_check_note:'處置原則引自台灣癲癇醫學會，未使用療效保證用語，未涉及具體藥品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'癲癇症',
    collect:{
      summary:'癲癇是大腦神經不正常放電的慢性疾病，多數病人可藉規律服藥控制，但台灣癲癇醫學會指出約兩成病人多種藥物仍難以控制；旁人發作時的正確處置與社會理解，是降低傷害與污名的溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約2成難以藥物控制：台灣癲癇醫學會指出，約有兩成左右的病人即使加上第二、第三種藥物仍無法得到很好的控制，國內病人總數查無官方統計。',tag:'推估',source:{name:'台灣癲癇醫學會：癲癇知識',url:'https://www.epilepsy.org.tw/knowledge'}},
        {item:'政策動向',desc:'近100名病患受惠：衛福部自109年12月1日起將「迷走神經刺激」醫材納入健保給付，適用藥物治療無效的頑固性癲癇病人，估計每年近100名病患受惠。',tag:'官方統計',source:{name:'衛生福利部：迷走神經刺激醫材納入健保給付',url:'https://www.mohw.gov.tw/cp-4625-56976-1.html'}},
        {item:'好發族群年齡層',desc:'5分鐘：台灣癲癇醫學會建議，連續抽搐五分鐘以上或連續發作之間意識未恢復，可能引發癲癇重積狀態，應立即送醫。',tag:'官方統計',source:{name:'台灣癲癇醫學會：癲癇發作時的處置',url:'https://www.epilepsy.org.tw/knowledge/46'}},
        {item:'年度趨勢方向',desc:'超過1小時：發作後意識模糊很常見，但若超過一小時仍未清醒，台灣癲癇醫學會建議送醫。',tag:'官方統計',source:{name:'台灣癲癇醫學會：癲癇發作時的處置',url:'https://www.epilepsy.org.tw/knowledge/46'}}
      ],
      product_view:['機會：以正確急救知識建立品牌的社會責任形象。','機會：癲癇病人與家屬需要長期用藥與生活管理資訊。','風險：避免任何污名化或暗示癲癇病人投保受限的說法。'],
      marketing_view:['機會：3月26日紫色日（國際癲癇關懷日）是固定溝通檔期。','機會：「不壓、不塞、抽完側躺」口訣好記，適合短影音。','風險：發作畫面描述需避免獵奇，尊重病人。'],
      alert_level:'low',
      alert_reason:'屬長期慢性疾病與急救教育議題，無急迫時效事件；適合在3月紫色日前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('約有兩成病人即使使用第二、第三種藥物仍難以良好控制','SOURCE_EVIDENCE','professional_society',
          '數字出自台灣癲癇醫學會衛教摘要，未註明研究依據與年份，屬專業學會概估。','low','yes',
          '「約兩成藥物難治」所依據的國內研究或指引。','no','confirm','學會網頁未寫出處。',
          '台灣癲癇醫學會衛教資料指出，約有兩成病人即使使用第二、第三種藥物仍難以良好控制（概估）'),
        F('多數病人規律服藥可以控制發作','MEDICAL_INTERPRETATION','outcome_generalization',
          '「多數」未附數據；雖與「約兩成難治」相呼應，宜直接用同一來源的表述，避免讀者以為是另一項統計。','low','no',
          null,'no','clarify','屬表達一致性。',
          '約八成病人規律服藥可以控制發作（依學會「約兩成難治」推得）'),
        F('睡眠不足、飲酒等可能誘發發作','SOURCE_EVIDENCE','unsourced_claim',
          '誘發因素未附出處，引用的學會處置文章並未列出飲酒。','low','no',
          null,'no','clarify','屬出處補充。',
          '睡眠不足等可能誘發發作（個人誘發因素請與醫師討論）',
          ['睡飽、少喝酒，避免誘發發作']),
        F('能大幅減少受傷的風險','MEDICAL_INTERPRETATION','outcome_generalization',
          '「大幅」缺乏數據支持，屬誇大用語。','low','no',
          null,'no','clarify','屬語氣調整。',
          '能減少病人受傷的風險')
      ],
      card:[
        F('不壓肢體、不塞東西進嘴巴','MEDICAL_INTERPRETATION','incomplete_instruction',
          '卡面未說明「若發作一開始口中有食物或假牙可取出」的例外，讀者可能連明顯異物都不敢處理。','low','no',
          null,'no','clarify','屬處置細節補充。',
          '不壓肢體、不塞東西進嘴巴（發作初口中有食物可取出）'),
        F('記錄發作時間與型態給醫師','MEDICAL_INTERPRETATION','priority_order',
          '記錄很重要，但旁人應以保護病人為優先，卡面未提醒不要為了找人或拍攝而離開病人。','low','no',
          null,'no','clarify','屬優先順序提醒。',
          '留在身旁，記錄發作時間與型態')
      ]
    },
    title_alts:[
      '看到有人癲癇發作怎麼辦？5個要做、5個不要做',
      '有人突然倒地抽搐？記住「不壓、不塞、抽完側躺」',
      '癲癇發作超過5分鐘要送醫：旁人急救與日常管理'
    ],
    card_title_alts:[
      ['有人倒地抽搐？','癲癇發作 4 步驟處置'],
      ['不壓、不塞','抽完側躺'],
      ['抽搐超過 5 分鐘','立即送醫']
    ],
    data_addon:[
      '移動病人時推動身軀，不要拉手臂，以免肩關節脫臼。',
      '發作時不要為了找人幫忙而離開病人。',
      '頑固性癲癇可由醫師評估手術治療或迷走神經刺激術。'
    ],
    cta:'今天花一分鐘記下「不壓、不塞、抽完側躺、超過5分鐘撥119」，並轉傳給家人與同事。'
  });
})();
