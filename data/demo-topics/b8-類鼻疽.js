/* v6 示範主題：類鼻疽（B8 傳染病防治）
   查證日期：2026-11-20。數據來源：疾管署開放資料 Age_County_Gender_025（依發病年份，2026-11-20 下載）、
   疾管署新聞稿（2025-07-22、2025-08-13，衛福部網站轉載）。只用全年統計，不寫當週疫情。
   參考方向：健康智庫〈颱風過後帶來的疫情－類鼻疽〉2024/08。 */
(function(){
  const REFS = [
    {title:'傳染病統計資料查詢系統：類鼻疽',source:'衛生福利部疾病管制署',url:'https://nidss.cdc.gov.tw/nndss/disease?id=025'},
    {title:'新增6例丹娜絲颱風後類鼻疽個案，提醒高風險族群如有相關症狀，請速就醫並告知相關暴露史',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-83172-1.html'},
    {title:'楊柳颱風來襲，請民眾務必落實防疫措施，如有身體不適請儘速就醫',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-83489-1.html'}
  ];
  const TABLE = {headers:['感染途徑','怎麼防'], rows:[
    ['皮膚傷口接觸','清理家園戴防水手套、穿長靴，有傷口先包紮'],
    ['吸入','風災後清掃戴口罩，避免吸入受汙染的塵土或水滴'],
    ['食入','颱風後飲用水煮沸再喝']
  ]};
  const TAGS = ['類鼻疽','颱風後防疫','清理家園','慢性病','傳染病防治'];

  const DP_COMP = {id:'dp-melio-compare', type:'data_version', title:'歷年比較有兩組數字',
    desc:'疾管署2025年8月兩份新聞稿在比較「歷年同期」時，一份寫2024年61例、2005年54例，另一份寫2024年69例、2005年57例，口徑未說明。本文改用開放資料的全年統計（依發病年份），AI 沒有替你採用其中任何一組同期數字。',
    current:'2024年全年123例、2025年全年79例（疾管署開放資料，依發病年份）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'123 → 79 例', value:'全年（依發病年份）', note:'疾管署開放資料（目前採用）'},
      {label:'61 例／69 例', value:'2024 年同期', note:'兩份2025年8月新聞稿數字不同'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'颱風後要小心類鼻疽：慢性病族群清理家園，手套、長靴、口罩缺一不可',
    update_date:'2026/11/20',
    intro:'類鼻疽是存在於土壤與汙水中的細菌感染，颱風豪雨後病菌容易隨泥水暴露。依疾病管制署統計（依發病年份），2025年全年類鼻疽確定病例79例、2024年123例，病例多集中在7、8月風災後，且以高雄市最多。疾管署提醒，糖尿病、肺病、肝病、腎病、癌症或免疫功能受損者感染後重症機率較高。本文整理類鼻疽的感染途徑、症狀與清理家園的防護重點。',
    sections:[
      {heading:'3種感染途徑與防護',format:'table',table:TABLE},
      {heading:'症狀與就醫',format:'bullets',items:[
        '潛伏期平均9天，短則數小時，亦可長達21天；感染者可能無症狀。',
        '常見症狀包括發燒、頭痛、局部腫痛、潰瘍、胸痛、咳嗽、咳血及淋巴結腫大，嚴重時可能併發肺炎、腦炎或敗血症。',
        '風災後出現發燒、咳嗽等症狀，應儘速就醫並主動告知颱風後清理或泥水接觸史。'
      ]},
      {heading:'高風險族群要特別注意',format:'bullets',items:[
        '糖尿病、肺病、肝病、腎病、癌症或免疫功能受損者，感染後重症機率較高。',
        '2025年全年79例中，65歲以上占逾5成，長者清理家園可請家人代勞。',
        '疾管署指出，風災後1個月內確診個案可能增加，這段期間有症狀更要警覺。'
      ]}
    ],
    think_tank_view:'類鼻疽平常少見，卻會在颱風後集中出現，而且好發在有慢性病的長者身上。颱風過後清理家園時，與其「穿雨鞋就好」，不如把手套、長靴、口罩一次備齊；家中有慢性病長輩的，也可以由年輕家人負責接觸泥水的工作。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'病例數引自疾管署開放資料並標明依發病年份，症狀與高風險族群引自疾管署新聞稿，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['2024年123例、2025年79例（疾管署開放資料，依發病年份）','潛伏期、症狀與高風險族群取自疾管署2025-07-22新聞稿'],
      layout_reason:'先用表格對照3種感染途徑與防護，再說明症狀，最後點出高風險族群。',
      tone:'專業易懂', tone_reason:'風災後衛教需具體可執行。',
      to_verify:['2025年全年死亡人數未查到官方全年統計']},
    decision_points:[DP_COMP]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'颱風過後清家園，小心泥水裡的類鼻疽',
    update_date:'2026/11/20',
    intro:'颱風走了，大家忙著清理家園，但泥水和土壤裡可能藏著一種叫「類鼻疽」的細菌。疾管署統計，2025年一整年有79人感染，2024年更有123人，大多發生在夏天颱風過後。家裡有糖尿病、腎臟病等慢性病的長輩，感染後比較容易變嚴重，要特別小心。',
    sections:[
      {heading:'細菌從哪裡來？怎麼防？',format:'table',table:TABLE},
      {heading:'這些症狀要去看醫生',format:'bullets',items:[
        '發燒、咳嗽、胸痛，或傷口紅腫、潰爛。',
        '颱風後幾天到3週都可能發病，看醫生時記得說有清理過泥水。'
      ]},
      {heading:'長輩怎麼保護？',format:'bullets',items:[
        '有慢性病的長輩，盡量不要親自清泥水，交給年輕人。',
        '清完環境記得洗手、洗澡，傷口要好好消毒包紮。'
      ]}
    ],
    think_tank_view:'颱風後的清掃常常一家人一起動手，記得先幫每個人準備好手套、長靴和口罩；也別忘了把喝的水煮開，簡單幾步就能少很多擔心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，語氣親切但未淡化風險，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以清理家園情境帶出途徑、症狀與長輩保護。', tone:'生活親切', tone_reason:'給家庭與長輩照顧者閱讀。', to_verify:[]},
    decision_points:[DP_COMP]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'類鼻疽：颱風後清家園3防護',
    update_date:'2026/11/20',
    intro:'2025年類鼻疽全年79例，多發生在風災後。慢性病族群感染後重症機率較高。',
    sections:[
      {heading:'感染途徑與防護',format:'table',table:TABLE},
      {heading:'就醫提醒',format:'bullets',items:[
        '風災後發燒、咳嗽，儘速就醫並告知泥水接觸史。',
        '慢性病長者避免親自清理泥水。'
      ]}
    ],
    think_tank_view:'手套、長靴、口罩備齊，水煮沸再喝，是颱風後最實在的保護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為途徑與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_COMP]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'類鼻疽', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'颱風後清家園要防類鼻疽', primary_visual:'79 例', secondary_message:'慢性病族群重症機率較高', action_priority:'手套、長靴、口罩、煮沸水'},
    headline_hook:'颱風過後清家園', headline_main:'小心泥水裡的類鼻疽', title_accent:'類鼻疽',
    hero_message:'3 種感染途徑', hero_support:'接觸、吸入、食入（疾管署）',
    knowledge_title:'3 種感染途徑', knowledge_note:'慢性病族群**重症機率較高**',
    knowledge_cards:[
      {label:'傷口接觸', icon:'shield', lines:['土壤、汙水','經皮膚傷口感染']},
      {label:'吸入', icon:'leaf', lines:['受汙染的','塵土或水滴']},
      {label:'食入', icon:'flask', lines:['受汙染的水','未煮沸就飲用']}
    ],
    primary_stat:{value:'79 例', label:'2025 年類鼻疽確定病例', note:'疾管署｜依發病年份；2024 年 123 例'},
    secondary_stats:[
      {value:'逾 5 成', label:'2025 年病例為 65 歲以上'},
      {value:'平均 9 天', label:'潛伏期，最長 21 天'}
    ],
    action_title:'清理家園這樣做',
    action_cards:[
      {key:'手', text:'戴防水手套、穿長靴，傷口先包紮'},
      {key:'罩', text:'戴口罩，避免吸入汙染塵土水滴'},
      {key:'煮', text:'颱風後飲用水煮沸再喝'},
      {key:'醫', text:'發燒咳嗽就醫，告知泥水接觸史'}
    ],
    carousel_suggestion:{reason:'若想把途徑、症狀與族群分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'類鼻疽怎麼感染', headline_main:'接觸、吸入、食入'},
      {layout_type:'data', headline_hook:'風災後病例增加', headline_main:'2025 年全年 79 例'},
      {layout_type:'action', headline_hook:'清理家園', headline_main:'手套、長靴、口罩'}]},
    hashtags:['類鼻疽','颱風後防疫','清理家園','傳染病防治'],
    sources:['衛生福利部疾病管制署'],
    illustration_category:'virus-infection',
    illustration:{topic:'颱風後清理家園防護', audience:'家庭與慢性病長者', scene:'年輕人戴手套、口罩、穿長靴清理門口泥水，長輩在屋內遞水',
      emotion:'互相照應、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young adult wearing gloves, a mask and rubber boots clearing mud at a front door after a typhoon, an older family member handing water from inside, caring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['2025年79例、2024年123例（疾管署開放資料）','感染途徑與潛伏期取自疾管署新聞稿'],
      layout_reason:'關鍵是「知道怎麼感染才知道怎麼防」，選 knowledge：3 種途徑放中段，年度病例與族群退到下方，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'風災後衛教需具體。',
      to_verify:['全年死亡數未查到官方全年統計']},
    decision_points:[Object.assign({}, DP_COMP, {current:'79 例｜2025 年類鼻疽確定病例'})],
    content_check_note:'病例數與途徑引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'類鼻疽',
    collect:{
      summary:'類鼻疽病例與颱風豪雨高度相關，2024年全年123例、2025年79例，多集中於7、8月風災後與高雄地區，且慢性病長者重症風險高；「清理家園做好手套、長靴、口罩防護」是每年颱風季都值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'79例：依疾管署傳染病統計開放資料（依發病年份），2025年全年類鼻疽確定病例79例（本土77例），其中7、8月各18例，與颱風豪雨時間相符。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（類鼻疽）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=025'}},
        {item:'年度趨勢方向',desc:'123例：2024年全年類鼻疽確定病例123例，為2021至2023年（每年21至25例）的約5倍，2025年降為79例，病例數隨當年颱風與豪雨情況大幅波動。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（類鼻疽）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=025'}},
        {item:'政策動向',desc:'潛伏期平均9天：疾管署提醒風災後1個月內確診個案可能增加，醫師遇疑似個案應儘速給予抗生素並於24小時內通報，民眾清理家園應戴防水手套、穿長靴並戴口罩。',tag:'官方統計',source:{name:'衛生福利部：新增6例丹娜絲颱風後類鼻疽個案',url:'https://mohw.gov.tw/cp-16-83172-1.html'}},
        {item:'好發族群年齡層',desc:'逾5成病例為65歲以上：2025年79例中65歲以上42例，高雄市55例占約7成，疾管署指出糖尿病、肺病、肝病、腎病、癌症或免疫功能受損者感染後重症機率較高。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（類鼻疽）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=025'}}
      ],
      product_view:['機會：慢性病長者是重症高風險族群，可結合颱風季健康提醒與家庭照護衛教。','機會：住院與重症醫療保障的條款說明，適合搭配風災後就醫提醒。','風險：避免以天災恐懼做商品訴求，並依保單條款如實說明。'],
      marketing_view:['機會：颱風警報與颱風過後是固定的溝通時點，可預先準備「清理家園防護清單」。','機會：南部地區與家有慢性病長輩的家庭是核心溝通對象。','風險：避免標籤化特定地區，以防護行動為主。'],
      alert_level:'medium',
      alert_reason:'每年颱風季後病例集中出現，適合在颱風季前預先溝通；即時疫情交由正式模式查詢。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('65歲以上占逾5成','SOURCE_EVIDENCE','derived_figure',
          '「逾5成」是由開放資料42÷79換算，文中沒有寫出原始人數與出處，讀者無法自行核對。','low','no',
          null,'no','clarify','數字正確，屬換算標示。',
          '65歲以上有42例、占逾5成（疾管署開放資料）'),
        F('長者清理家園可請家人代勞','MEDICAL_INTERPRETATION','advice_scope',
          '專業易懂版這句建議只對「長者」說，但疾管署列的高風險族群是各年齡的慢性病與免疫功能受損者，年輕的糖尿病或洗腎患者也應避免。','low','no',
          null,'no','clarify','把對象改成高風險族群即可。',
          '慢性病或免疫功能受損者清理家園可請家人代勞'),
        F('颱風後幾天到3週都可能發病','MEDICAL_INTERPRETATION','oversimplified',
          '潛伏期短則數小時、平均9天、最長21天；生活親切版寫成「幾天到3週」，漏掉可能數小時內就發病。','low','no',
          null,'no','clarify','補上下限即可。',
          '颱風後幾小時到3週都可能發病'),
        F('多發生在風災後','SOURCE_EVIDENCE','claim_without_data',
          '簡潔有力版只寫「多發生在風災後」，沒有給出支持的數據（2025年7、8月各18例），讀者無從判斷集中程度。','low','no',
          null,'no','clarify','補上月份數據即可。',
          '7、8月各18例，多發生在風災後')
      ],
      card:[
        F('2025 年病例為 65 歲以上','SOURCE_EVIDENCE','derived_figure',
          '「逾 5 成」是換算值，卡面沒有原始人數，也沒說明出處是疾管署開放資料。','low','no',
          null,'no','clarify','數字正確，屬標示問題。',
          '2025 年 42 例為 65 歲以上'),
        F('慢性病族群**重症機率較高**','TERMINOLOGY_LANGUAGE','population_unclear',
          '「慢性病族群」範圍太廣，疾管署列的是糖尿病、肺病、肝病、腎病、癌症或免疫功能受損者，高血壓單一病史不一定在列。','low','no',
          null,'no','clarify','可列出主要疾病。',
          '糖尿病、腎病等族群**重症機率較高**')
      ]
    },
    title_alts:[
      '颱風後要小心類鼻疽：慢性病族群清理家園，手套、長靴、口罩缺一不可',
      '颱風過後清家園，小心泥水裡的類鼻疽',
      '類鼻疽為何集中在颱風後？年度病例與高風險族群一次看'
    ],
    card_title_alts:[
      ['颱風過後清家園','小心泥水裡的類鼻疽'],
      ['3 種感染途徑','接觸、吸入、食入'],
      ['慢性病長輩注意','類鼻疽重症風險較高']
    ],
    data_addon:[
      '類鼻疽全年確定病例：2021年21例、2022年25例、2023年25例、2024年123例、2025年79例（疾管署開放資料，依發病年份）。',
      '潛伏期平均9天，短則數小時，最長21天（疾管署）。',
      '疾管署提醒風災後1個月內確診個案可能增加。'
    ],
    cta:'颱風季前先備好防水手套、長靴和口罩；有慢性病的家人，清理泥水交給年輕人。'
  });
})();
