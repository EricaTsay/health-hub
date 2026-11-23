/* v6 示範主題：嬰兒猝死症候群（B7 女性・男性・生育與兒童）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計摘要表（表2 嬰兒主要死亡原因、表32）、
   衛福部／國健署新聞稿（2019、2020、2021「五招安心睡」）。
   參考方向：健康智庫〈預防猝死 寶寶怎麼睡才安心？〉2024/03/11。 */
(function(){
  const REFS = [
    {title:'114年死因統計結果摘要表（表2 嬰兒主要死亡原因）',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'五招安心睡 預防嬰兒猝死症有訣竅',source:'衛生福利部',url:'https://www.mohw.gov.tw/fp-16-62310-1.html'},
    {title:'寶寶五招安心睡，你家做對沒？',source:'衛生福利部',url:'https://www.mohw.gov.tw/fp-16-51421-1.html'},
    {title:'安全的睡眠環境 您幫寶寶盤點了嗎?',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-46182-1.html'}
  ];
  const TABLE = {headers:['五招安心睡','怎麼做'], rows:[
    ['不趴睡','1歲以下每次睡覺都仰睡，側睡也容易翻成趴睡'],
    ['不用枕','1歲以下不需要任何枕頭，也不用墊高或塑頭形枕'],
    ['不同床','同室不同床，不和大人或兄姊同睡一張床'],
    ['不悶熱','房間保持通風，用睡袋型睡衣或包巾並露出手臂'],
    ['不鬆軟','床墊平整堅實，床上不放棉被、填充玩偶、防撞護墊'],
    ['無菸環境','任何人都不在寶寶附近吸菸']
  ]};
  const TAGS = ['嬰兒猝死症候群','SIDS','五招安心睡','安全睡眠','新手爸媽'];

  const DP_RATE = {id:'dp-sids-count', type:'data_version', title:'每年案例數有不同口徑',
    desc:'114年死因統計（排除懷孕未滿22週或出生體重未滿500公克）的嬰兒猝死症候群為12人；國健署2019年新聞稿則用102-106年資料說「每1萬名活產約1-2個」。兩者年份與計算方式不同，AI 沒有替你決定要用哪一組。',
    current:'114年嬰兒猝死症候群死亡12人（衛福部死因統計）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'12 人', value:'114 年死因統計', note:'嬰兒死因第8位、占嬰兒死亡3.2%（目前採用）'},
      {label:'每 1 萬活產 1–2 個', value:'102–106 年', note:'國健署2019年新聞稿；106年23件'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'嬰兒猝死症候群怎麼預防？五招安心睡，1歲以下一律仰睡',
    update_date:'2026/11/20',
    intro:'依衛生福利部114年死因統計，嬰兒猝死症候群（SIDS）全年造成12名嬰兒死亡，居嬰兒主要死因第8位；同年事故傷害則奪走37名嬰兒，居第3位，其中不少與睡眠時窒息有關。國健署指出，遵守「五招安心睡」可大幅下降嬰兒猝死及窒息死亡風險。本文整理安全睡眠的具體做法與常見迷思。',
    sections:[
      {heading:'國健署五招安心睡',format:'table',table:TABLE},
      {heading:'為什麼睡眠環境這麼重要',format:'bullets',items:[
        '國健署2019年引用JAMA Pediatrics文獻回顧，趴睡相較於仰睡，嬰兒猝死風險較高（調整後勝算比2.3–13.1）。',
        '衛福部107年嬰兒死因統計，事故傷害為第4大死因，其中意外窒息死亡約占75%。',
        '國健署案例顯示，趴睡、與大人同床、床上堆放玩具都曾造成嬰兒窒息死亡。'
      ]},
      {heading:'常見迷思與照顧提醒',format:'bullets',items:[
        '擔心仰睡讓頭形變扁：寶寶睡覺時頭會轉動，清醒時可在大人看顧下多趴著玩。',
        '天冷時不要層層包裹，改用一件式或睡袋型睡衣，棉被不要蓋過胸口。',
        '托嬰中心與保母也應遵守同樣原則，交接時主動確認睡姿與床上物品。',
        '兒童健康手冊有「嬰兒猝死防治措施」與「安全睡眠環境」專頁可對照。'
      ]}
    ],
    think_tank_view:'嬰兒猝死症候群無法事先預測，但安全睡眠環境是爸媽能完全掌握的保護。仰睡、不用枕、同室不同床，這些做法不需要花錢，只需要家中所有照顧者——包括祖父母與保母——都有一致的共識。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數與排名引自衛福部114年死因統計並標明年份，風險倍數標明國健署引用的國際文獻，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['114年SIDS死亡12人、事故傷害37人（死因統計表2）','五招安心睡取自國健署2020、2021年新聞稿'],
      layout_reason:'核心是可執行的睡眠原則，先用表格列出五招，再說明原因，最後處理常見迷思。',
      tone:'專業易懂', tone_reason:'新手爸媽需要具體、可照做的資訊，避免恐嚇。',
      to_verify:['意外窒息約占75%為107年資料，國健署未發布更新比例']},
    decision_points:[DP_RATE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'寶寶怎麼睡最安心？五招安心睡，爸媽一起做',
    update_date:'2026/11/20',
    intro:'看著寶寶熟睡是爸媽最幸福的時刻，但睡眠環境沒準備好，也可能藏著風險。依衛福部114年死因統計，嬰兒猝死症候群全年奪走12名嬰兒，是嬰兒死因第8位。好消息是，國健署提醒，只要做到「五招安心睡」，就能大幅降低寶寶猝死和窒息的風險。',
    sections:[
      {heading:'五招安心睡，照著做就對了',format:'table',table:TABLE},
      {heading:'為什麼要這麼小心？',format:'bullets',items:[
        '國外研究發現，趴睡比仰睡的猝死風險高出許多（國健署2019年引用）。',
        '107年的統計中，嬰兒因意外過世的案例裡，約4分之3是睡覺時窒息。',
        '和大人同床、床上放玩偶，都曾發生過寶寶被悶住的憾事。'
      ]},
      {heading:'爸媽常見的疑問',format:'bullets',items:[
        '怕頭睡扁？寶寶睡覺時頭會自己轉，醒著時在大人旁邊多趴著玩就好。',
        '天冷怕著涼？穿睡袋型睡衣，比蓋厚棉被安全。',
        '請阿公阿嬤或保母幫忙時，記得把五招也告訴他們。'
      ]}
    ],
    think_tank_view:'保護寶寶睡覺安全，不用買昂貴的用品，只要全家人都記得：仰睡、不用枕、同房不同床。把這五招貼在嬰兒床旁邊，每位照顧者都能一眼看到。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部死因統計與國健署新聞稿並標明年份，語氣親切但未淡化風險，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以新手爸媽的疑問帶出五招與迷思。', tone:'生活親切', tone_reason:'給新手爸媽與祖父母閱讀，降低焦慮。', to_verify:['107年窒息比例為較早資料']},
    decision_points:[DP_RATE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'預防嬰兒猝死：五招安心睡',
    update_date:'2026/11/20',
    intro:'114年嬰兒猝死症候群死亡12人，居嬰兒死因第8位。國健署指出，五招安心睡可大幅下降猝死及窒息風險。',
    sections:[
      {heading:'五招安心睡',format:'table',table:TABLE},
      {heading:'重點提醒',format:'bullets',items:[
        '1歲以下每次睡覺都仰睡。',
        '天冷用睡袋型睡衣，不堆棉被。',
        '所有照顧者遵守同一套原則。'
      ]}
    ],
    think_tank_view:'仰睡、不用枕、同室不同床，是爸媽最能掌握的保護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部死因統計並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為五招與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_RATE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'嬰兒猝死症候群', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'1 歲以下每次睡覺都仰睡', primary_visual:'12 人', secondary_message:'五招安心睡可大幅降低風險', action_priority:'五招安心睡'},
    headline_hook:'寶寶怎麼睡才安心', headline_main:'記住五招安心睡', title_accent:'五招安心睡',
    hero_message:'1 歲以下一律仰睡', hero_support:'國健署「五招安心睡」第一招',
    primary_stat:{value:'12 人', label:'114 年嬰兒猝死症候群死亡', note:'衛福部死因統計｜嬰兒死因第 8 位'},
    action_title:'五招安心睡',
    action_cards:[
      {key:'仰', text:'不趴睡：每次睡覺都仰睡'},
      {key:'枕', text:'不用枕：1 歲以下不需要枕頭'},
      {key:'床', text:'不同床：同室不同床'},
      {key:'軟', text:'不悶熱、不鬆軟：通風、床上淨空'}
    ],
    notice:'寶寶附近**禁止吸菸**；托嬰與保母也要遵守同樣原則。',
    carousel_suggestion:{reason:'若想把五招逐一放大說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'嬰兒猝死症候群', headline_main:'114 年 12 名嬰兒死亡'},
      {layout_type:'action', headline_hook:'五招安心睡', headline_main:'仰睡、不用枕、不同床'},
      {layout_type:'knowledge', headline_hook:'常見迷思', headline_main:'仰睡會讓頭變扁嗎？'}]},
    hashtags:['嬰兒猝死症候群','五招安心睡','安全睡眠','新手爸媽'],
    sources:['衛生福利部','衛生福利部國民健康署'],
    illustration_category:'sleep',
    illustration:{topic:'嬰兒安全睡眠', audience:'新手爸媽與照顧者', scene:'嬰兒仰睡在平整、淨空的嬰兒床裡，穿著睡袋型睡衣，爸媽在同一房間的床邊安心看著',
      emotion:'安心、溫暖', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A baby sleeping on its back in a clear, flat crib wearing a sleep sack, parents watching calmly from their own bed in the same room, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['114年SIDS死亡12人、嬰兒死因第8位（死因統計表2）','五招安心睡取自國健署'],
      layout_reason:'關鍵訊息是「可以照著做」，選 action：插圖放大、五招合併為 4 張行動卡當主角，死亡人數退到下方。',
      tone:'專業易懂', tone_reason:'照顧原則要具體、好記。',
      to_verify:['死亡人數為排除未滿22週或500公克的口徑']},
    decision_points:[Object.assign({}, DP_RATE, {current:'12 人｜114 年嬰兒猝死症候群死亡'})],
    content_check_note:'死亡人數引自衛福部114年死因統計，睡眠原則引自國健署，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'嬰兒猝死症候群',
    collect:{
      summary:'嬰兒猝死症候群長年在嬰兒前十大死因之列，2025年仍造成12名嬰兒死亡；睡眠窒息另屬事故傷害。國健署持續推廣「五招安心睡」，安全睡眠環境是新手家庭最能掌握、值得長期溝通的育兒議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'12人死於嬰兒猝死症候群：依2025年（114年）死因統計，嬰兒猝死症候群（R95）死亡12人，占嬰兒死亡3.2%，居嬰兒主要死因第8位（排除懷孕未滿22週或出生體重未滿500公克）。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'年度趨勢方向',desc:'事故傷害37人居嬰兒死因第3位：2025年嬰兒死亡378人、死亡率每千活產3.58，事故傷害為第3位死因，衛福部107年統計曾指出意外窒息約占嬰兒事故傷害死亡75%。',tag:'官方統計',source:{name:'衛生福利部：寶寶五招安心睡，你家做對沒？',url:'https://www.mohw.gov.tw/fp-16-51421-1.html'}},
        {item:'政策動向',desc:'五招安心睡：國健署推廣不趴睡、不用枕、不同床、不悶熱、不鬆軟，並要求無菸環境，指出遵守原則可大幅下降嬰兒猝死風險，兒童健康手冊亦列有安全睡眠專頁。',tag:'官方統計',source:{name:'衛生福利部：五招安心睡 預防嬰兒猝死症有訣竅',url:'https://www.mohw.gov.tw/fp-16-62310-1.html'}},
        {item:'好發族群年齡層',desc:'趴睡猝死風險較高（勝算比2.3至13.1）：國健署2019年引用JAMA Pediatrics文獻回顧，1歲以下嬰兒趴睡風險高於仰睡，2至4個月大嬰兒為常見好發期。',tag:'官方統計',source:{name:'衛生福利部：安全的睡眠環境 您幫寶寶盤點了嗎?',url:'https://mohw.gov.tw/cp-16-46182-1.html'}}
      ],
      product_view:['機會：新生兒家庭是保障規劃的關鍵時點，可搭配安全睡眠衛教，展現陪伴新手家庭的品牌形象。','機會：可結合育兒衛教服務（安全睡眠檢核表、照顧者交接提醒）提升互動。','風險：嬰兒死亡題材極度敏感，避免以恐懼訴求連結保險商品。'],
      marketing_view:['機會：冬季保暖常讓家長過度包裹寶寶，是溝通「不悶熱、不鬆軟」的合適時點。','機會：祖父母與保母常是主要照顧者，可設計「交接時一起確認五招」的跨世代溝通。','風險：避免責怪家長的語氣，以具體做法與正向支持為主。'],
      alert_level:'medium',
      alert_reason:'嬰兒死亡屬重大議題，冬季保暖情境特別適合溝通；無單一時效性事件，適合納入年度育兒衛教規劃。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('其中不少與睡眠時窒息有關','SOURCE_EVIDENCE','claim_without_data',
          '114年死因統計只公布事故傷害37人，沒有拆出窒息人數；「不少與睡眠時窒息有關」沒有對應的114年數據，讀者可能以為是當年統計。','medium','yes',
          '衛福部114年嬰兒事故傷害死因細項（意外窒息人數）。','no','confirm','107年資料曾指出窒息約占75%，但未查到114年細項。',
          '其中意外窒息在107年統計約占嬰兒事故傷害死亡75%'),
        F('趴睡比仰睡的猝死風險高出許多','MEDICAL_INTERPRETATION','vague_quantifier',
          '「高出許多」沒有說明程度，且研究結果是範圍很寬的勝算比，生活親切版的說法容易被理解成固定倍數。','low','no',
          null,'no','clarify','可改為較精確但仍易懂的說法。',
          '趴睡比仰睡的猝死風險較高，研究估計的差距從2倍多到10倍以上都有'),
        F('約4分之3是睡覺時窒息','MEDICAL_INTERPRETATION','scope_shift',
          '原始統計是「意外窒息約占事故傷害死亡75%」，並未限定「睡覺時」，改寫後擴大了解讀。','low','no',
          null,'no','clarify','保留原始統計的範圍即可。',
          '約4分之3是意外窒息'),
        F('可大幅下降猝死及窒息風險','COMPLIANCE_RISK','absolute_claim',
          '「大幅下降」引自國健署說法，但簡潔有力版沒有保留「國健署指出」以外的條件，短文中容易被讀成保證效果；建議補上「降低風險、無法完全避免」。','low','no',
          null,'no','clarify','屬語氣提醒，非數據錯誤。',
          '可降低猝死及窒息風險，但無法完全避免，仍需定時查看寶寶')
      ],
      card:[
        F('114 年嬰兒猝死症候群死亡','SOURCE_EVIDENCE','scope_unstated',
          '「12 人」是排除懷孕未滿22週或出生體重未滿500公克的口徑，卡面沒有說明；未排除口徑的人數也是12人，但嬰兒總死亡數不同，分享時可能被拿來與其他數字混用。','low','no',
          null,'no','clarify','數字正確，屬口徑標示。',
          '114 年嬰兒猝死症候群死亡（衛福部死因統計）'),
        F('不悶熱、不鬆軟：通風、床上淨空','TERMINOLOGY_LANGUAGE','merged_items',
          '把兩招合併成一張行動卡，「床上淨空」沒有說明要移除哪些物品，家長可能只拿掉玩偶而保留防撞護墊或厚棉被。','low','no',
          null,'no','clarify','可在行動卡點出具體物品。',
          '不悶熱、不鬆軟：通風，床上不放棉被、玩偶、護墊')
      ]
    },
    title_alts:[
      '嬰兒猝死症候群怎麼預防？五招安心睡，1歲以下一律仰睡',
      '寶寶怎麼睡最安心？國健署五招安心睡一次看',
      '新手爸媽必看：預防嬰兒猝死與睡眠窒息的5個原則'
    ],
    card_title_alts:[
      ['寶寶怎麼睡才安心','記住五招安心睡'],
      ['1 歲以下一律仰睡','預防嬰兒猝死'],
      ['新手爸媽必看','安全睡眠 5 原則']
    ],
    data_addon:[
      '114年出生數10萬5,676人，嬰兒死亡378人（排除未滿22週或500公克），死亡率每千活產3.58。',
      '國健署2019年新聞稿：102-106年每1萬名活產嬰兒約有1-2個發生嬰兒猝死症候群，106年23件。',
      '嬰兒猝死症候群自97年起始終在嬰兒前十大死因之列（國健署）。'
    ],
    cta:'今晚就檢查一次寶寶的床：仰睡、不放枕頭棉被玩偶，並把五招告訴每位照顧者。'
  });
})();
