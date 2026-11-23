/* v6 示範主題：居家事故傷害（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計（表3、表7、表40：跌倒、溺水、火災、1-14歲與65歲以上事故傷害）、國健署2026-02-25新聞稿「防跌五招+量六力」（110年國民健康訪問調查跌倒比率）。
   參考方向：健康智庫〈事故傷害－居家環境的事故傷害介紹〉2024/10 及特定族群、危險因子篇。 */
(function(){
  const REFS = [
    {title:'114年死因統計',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'},
    {title:'114年死因統計摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'防跌五招+量六力 揪出長者隱形風險',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=5020&pid=19872'},
    {title:'「防跌三步」守護長者安全',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18870'}
  ];
  const TABLE = {headers:['居家角落','檢查重點'], rows:[
    ['走道、樓梯','移除地上雜物與電線，樓梯兩側裝扶手'],
    ['浴室','鋪防滑墊、加裝扶手，地面保持乾燥'],
    ['臥室到廁所','夜間留小夜燈，床邊放好照明開關'],
    ['廚房','熱鍋與熱水壺放在孩子拿不到的地方'],
    ['窗戶、陽台','不在窗邊擺放可攀爬的家具，加裝防護欄']
  ]};
  const TAGS = ['居家安全','事故傷害','防跌','兒童安全','高齡健康'];

  const PRO = {
    content_type:'健康文章',
    title:'家裡最安全？居家事故傷害的5個檢查重點',
    update_date:'2026/11/20',
    intro:'依衛生福利部114年死因統計，事故傷害死亡6,678人，居國人十大死因第7位；其中跌倒死亡1,632人，是僅次於運輸事故的第2大事故死因。國民健康署110年國民健康訪問調查也發現，每6位長者就有1位曾經跌倒、每12位就有1位因跌倒就醫。家中的照明、地面與擺設，正是可以先動手改善的地方。',
    sections:[
      {heading:'居家安全5處檢查',format:'table',table:TABLE},
      {heading:'不同族群的居家風險',format:'bullets',items:[
        '長者：肌力與視力退化、夜間如廁照明不足、同時服用多種藥物，都可能增加跌倒風險。',
        '兒童：1-14歲事故傷害是第2大死因（114年51人），常見墜落、溺水、燙傷等。',
        '65歲以上事故傷害死亡3,528人，居該年齡層死因第10位。'
      ]},
      {heading:'國健署防跌五部曲',format:'bullets',items:[
        '主動詢問長輩近一年有無跌倒或差點跌倒，及早辨識風險。',
        '將簡單的抬腿、踮腳、扶牆單腳站等運動融入日常。',
        '就診時請醫師協助檢視用藥。',
        '改善居家照明與防滑，選對鞋子與輔具。'
      ]}
    ],
    think_tank_view:'居家事故的共同點是「熟悉到看不見」：每天走過的電線、習慣的浴室地面、隨手放在桌邊的熱水壺。把家當成第一次來訪的客人重新走一遍，往往就能找出最需要改善的那個角落。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數與排名引自衛福部114年死因統計，跌倒比率引自國健署110年國民健康訪問調查並標明年份，防跌建議引自國健署，未涉及具體商品。',
    ai_rationale:{basis:['沿用步驟1洞察：114年跌倒死亡1,632人，為第2大事故死因（衛福部）','長者每6人有1人曾跌倒（國健署110年調查）'],
      layout_reason:'先用居家5處檢查表給出可立即行動的清單，再分族群說明風險，最後引用國健署防跌建議。',
      tone:'專業易懂', tone_reason:'居家安全需要具體檢查點。',
      to_verify:['死因統計的跌倒死亡未區分是否發生在家中']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽半夜起床跌一跤？居家安全5個角落一起檢查',
    update_date:'2026/11/20',
    intro:'很多意外不是發生在外面，而是在每天生活的家裡。衛福部114年統計，有1,632人死於跌倒，是交通事故以外最常見的事故死因；國健署調查也發現，每6位長輩就有1位跌倒過。家裡有長輩或小小孩的，更要花點時間把危險角落找出來。',
    sections:[
      {heading:'這5個地方最該檢查',format:'table',table:TABLE},
      {heading:'誰最需要注意？',format:'bullets',items:[
        '長輩：腳力變差、眼睛看不清楚、半夜上廁所燈太暗，都容易跌倒。',
        '小孩：會爬會走之後，墜落、溺水、燙傷都要防，事故傷害是1-14歲孩子的第2大死因。',
        '吃很多種藥的長輩，記得請醫師看看會不會頭暈。'
      ]},
      {heading:'陪長輩這樣防跌',format:'bullets',items:[
        '問問他們最近有沒有差點跌倒。',
        '一起做抬腿、扶牆踮腳的小運動。',
        '幫忙換一雙合腳、防滑的鞋子。',
        '床邊到廁所裝一盞小夜燈。'
      ]}
    ],
    think_tank_view:'這個週末回家，用長輩或小孩的高度在家裡走一圈：哪裡暗、哪裡滑、哪裡會絆倒，改善一個角落，就少一分擔心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部死因統計與國健署調查並標明年份，防跌建議引自國健署，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家中長輩與小孩的生活情境帶出檢查清單。', tone:'生活親切', tone_reason:'給家庭照顧者閱讀。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'居家事故傷害：5處檢查，防跌防墜',
    update_date:'2026/11/20',
    intro:'114年跌倒死亡1,632人，為第2大事故死因；長者每6人就有1人曾跌倒。',
    sections:[
      {heading:'居家5處檢查',format:'table',table:TABLE},
      {heading:'高風險族群',format:'bullets',items:[
        '長者：肌力、視力退化與多重用藥。',
        '兒童：墜落、溺水、燙傷。'
      ]},
      {heading:'防跌重點',format:'bullets',items:[
        '照明充足、地面防滑。',
        '規律肌力與平衡運動。',
        '請醫師檢視用藥。'
      ]}
    ],
    think_tank_view:'居家事故多可預防：照明、防滑、扶手與收納，是成本最低的安全投資。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部與國健署並標明年份，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為檢查表、族群、防跌三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'居家事故傷害', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'跌倒是第 2 大事故死因', primary_visual:'1,632 人', secondary_message:'長者每 6 人就有 1 人曾跌倒', action_priority:'居家 4 處檢查'},
    headline_hook:'家裡最安全？', headline_main:'居家安全，先檢查這 4 處', title_accent:'這 4 處',
    hero_message:'每 6 位長者有 1 位', hero_support:'曾經跌倒（國健署 110 年調查）',
    primary_stat:{value:'1,632 人', label:'114 年跌倒死亡', note:'衛福部死因統計｜事故死因第 2 位'},
    action_title:'居家這樣檢查',
    action_cards:[
      {key:'亮', text:'床邊到廁所留小夜燈'},
      {key:'滑', text:'浴室鋪防滑墊、加裝扶手'},
      {key:'清', text:'走道移除雜物與電線'},
      {key:'高', text:'熱鍋熱水放在孩子拿不到處'}
    ],
    notice:'長輩常走路不穩或差點跌倒，**請醫師檢視用藥**並評估肌力。',
    carousel_suggestion:{reason:'若想把長者防跌與兒童居家安全分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'跌倒是第 2 大事故死因', headline_main:'114 年 1,632 人'},
      {layout_type:'action', headline_hook:'長者防跌', headline_main:'防跌五部曲'},
      {layout_type:'action', headline_hook:'孩子在家', headline_main:'防墜、防溺、防燙'}]},
    hashtags:['居家安全','事故傷害','防跌','兒童安全'],
    sources:['衛生福利部','衛生福利部國民健康署'],
    illustration_category:'elderly-care',
    illustration:{topic:'居家安全', audience:'長者與家庭照顧者', scene:'成年子女在走廊裝上小夜燈，長輩扶著牆邊扶手微笑',
      emotion:'安心、溫暖', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult child installing a night light in a hallway while an older parent holds a wall handrail and smiles, safe and warm, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：114年跌倒死亡1,632人（衛福部）','長者每6人有1人曾跌倒（國健署110年調查）'],
      layout_reason:'居家事故的重點是「可以預防」，選 action：4 個居家檢查行動當主角，跌倒死亡人數退到背景。',
      tone:'專業易懂', tone_reason:'具體可做的檢查項目。',
      to_verify:['跌倒死亡未區分發生地點']},
    decision_points:[],
    content_check_note:'數據引自衛福部死因統計與國健署調查並標明年份，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'居家事故傷害',
    collect:{
      summary:'114年事故傷害死亡6,678人，居十大死因第7位，跌倒死亡1,632人是第2大事故死因；長者每6人就有1人曾跌倒，兒童則以墜落、溺水、燙傷為主。居家照明、防滑與收納是成本低、效果直接的預防重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'1632人死於跌倒：衛福部114年死因統計，事故傷害死亡6,678人，其中跌倒（落）1,632人，僅次於運輸事故，112年至114年均維持在1,600人以上。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'好發族群年齡層',desc:'每6位長者有1位曾跌倒：國健署110年國民健康訪問調查，65歲以上長者每6位就有1位曾經跌倒，每12位就有1位曾因跌倒就醫。',tag:'官方統計',source:{name:'國健署：防跌五招+量六力 揪出長者隱形風險',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=5020&pid=19872'}},
        {item:'年度趨勢方向',desc:'51人：114年1-14歲兒童事故傷害死亡51人，居該年齡層死因第2位，65歲以上事故傷害死亡3,528人，居該年齡層第10位。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'每半年量1次六力：國健署推廣「防跌五部曲」與「長者量六力」LINE官方帳號，建議長者每半年進行一次認知、行動等6大面向功能評估。',tag:'官方統計',source:{name:'國健署：「防跌三步」守護長者安全',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18870'}}
      ],
      product_view:['機會：長者跌倒常導致骨折、失能與長期照護需求，可連結意外傷害、失能與長照保障的說明。','機會：居家安全檢查清單、量六力評估可作為熟齡保戶關懷服務。','風險：避免推薦特定防滑或輔具商品；建議應引用國健署衛教資料。'],
      marketing_view:['機會：子女陪爸媽檢查家裡、寒暑假兒童居家安全是自然的溝通情境。','機會：「用孩子／長輩的高度走一圈」容易轉成互動內容。','風險：死亡數字不宜過度渲染，宜以可立即改善的角落收尾。'],
      alert_level:'low',
      alert_reason:'屬長期事故傷害議題，無急迫時效；可配合寒暑假、敬老節與年節返鄉溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('其中跌倒死亡1,632人，是僅次於運輸事故的第2大事故死因','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '文章主題是「居家」事故，但死因統計的跌倒死亡包含在戶外、街道等地點發生的跌倒，未區分地點；直接引用容易讓讀者以為1,632人都在家中跌倒。','medium','no',
          null,'no','clarify','數字正確，屬統計範圍標註。',
          '其中跌倒死亡1,632人（含居家與戶外），是僅次於運輸事故的第2大事故死因',
          ['有1,632人死於跌倒，是交通事故以外最常見的事故死因']),
        F('每6位長者就有1位曾經跌倒','DATA_FACTUAL_ACCURACY','recall_period_unstated',
          '調查問的是「過去一年」是否跌倒，文中未寫回溯期間，讀者可能理解為一生中曾跌倒的比例。','low','no',
          null,'no','clarify','屬口徑說明。',
          '每6位長者就有1位在過去一年內曾經跌倒',
          ['每6位長輩就有1位跌倒過','長者每6人就有1人曾跌倒']),
        F('常見墜落、溺水、燙傷等','SOURCE_EVIDENCE','unsourced_claim',
          '兒童事故類型的說法未附出處，本文引用的死因統計摘要表沒有提供1-14歲事故傷害的細項類型。','low','yes',
          '兒童事故傷害類型的官方統計（如國健署兒童事故傷害資料）。','no','confirm','屬常見衛教說法，但需補正式出處。',
          '常見類型可參考國健署兒童事故傷害防制資料',
          ['墜落、溺水、燙傷都要防','兒童：墜落、溺水、燙傷。'])
      ],
      card:[
        F('114 年跌倒死亡','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '圖卡主題是居家安全，但主數字為全部地點的跌倒死亡，卡面未標示範圍。','low','no',
          null,'no','clarify','屬統計範圍標註。',
          '114 年跌倒死亡（含戶外）'),
        F('曾經跌倒（國健署 110 年調查）','DATA_FACTUAL_ACCURACY','recall_period_unstated',
          '未標示「過去一年」回溯期間。','low','no',
          null,'no','clarify','屬口徑說明。',
          '過去一年曾跌倒（國健署 110 年調查）')
      ]
    },
    title_alts:[
      '家裡最安全？居家事故傷害的5個檢查重點',
      '爸媽半夜起床跌一跤？居家安全5個角落一起檢查',
      '跌倒是第2大事故死因：長者與孩子的居家安全清單'
    ],
    card_title_alts:[
      ['家裡最安全？','居家安全，先檢查這 4 處'],
      ['半夜起床跌一跤？','小夜燈與扶手先裝好'],
      ['跌倒是第 2 大事故死因','居家防跌 4 件事']
    ],
    data_addon:[
      '跌倒死亡人數：112年1,665人、113年1,654人、114年1,632人（衛福部死因統計）。',
      '長者每12位就有1位曾因跌倒就醫（國健署110年調查）。',
      '114年意外溺死250人、火災與煙霧致死109人（衛福部死因統計）。'
    ],
    cta:'這個週末用長輩或孩子的高度在家裡走一圈，先把最暗、最滑或最容易絆倒的一個角落改善好。'
  });
})();
