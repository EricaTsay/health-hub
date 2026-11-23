/* v6 示範主題：登革熱（B8 傳染病防治）
   查證日期：2026-11-20。數據來源：疾管署傳染病統計資料查詢系統／開放資料（登革熱 依發病年份，2026-11-20 查詢）、
   疾管署新聞稿（2025-09-02、2026-05-26，衛福部網站轉載）。只用全年統計，不寫當週疫情。
   參考方向：健康智庫〈傳染疾病－登革熱〉2025/06。 */
(function(){
  const REFS = [
    {title:'傳染病統計資料查詢系統：登革熱',source:'衛生福利部疾病管制署',url:'https://nidss.cdc.gov.tw/nndss/disease?id=061'},
    {title:'防範登革熱 梅雨季節期間請民眾加強清除積水容器 落實「巡、倒、清、刷」',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-86654-1.html'},
    {title:'籲請民眾落實「巡、倒、清、刷」，出現疑似症狀請儘速就醫',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-83673-1.html'}
  ];
  const TABLE = {headers:['巡倒清刷','怎麼做'], rows:[
    ['巡','主動巡檢室內外，雨後加強檢查積水'],
    ['倒','留下的器物妥善收拾或倒置，不讓它積水'],
    ['清','清除廢棄輪胎、鐵鋁罐、帆布、寶特瓶、盆栽墊盤'],
    ['刷','使用中的儲水容器每週至少刷洗內壁1次，去除蟲卵']
  ]};
  const TAGS = ['登革熱','巡倒清刷','防蚊','病媒蚊','出國旅遊'];

  const DP_YEAR = {id:'dp-dengue-year', type:'data_scope', title:'年度病例差異很大',
    desc:'登革熱病例數每年起伏很大：2023年本土大流行全年2萬6,706例，2025年則為293例且以境外移入為主。只寫2025年可能讓讀者低估風險，只寫2023年又可能造成恐慌，AI 沒有替你決定要放哪一年。',
    current:'2025年全年293例（本土29例、境外移入264例）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'293 例', value:'2025 年', note:'本土29例、境外移入264例（目前採用）'},
      {label:'約 2.7 萬例', value:'2023 年', note:'本土2萬6,429例，近10年最高'},
      {label:'521 例', value:'2024 年', note:'本土255例、境外移入266例'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'登革熱怎麼預防？落實巡倒清刷，出國回來發燒要告知旅遊史',
    update_date:'2026/11/20',
    intro:'依疾病管制署傳染病統計資料，2025年全年登革熱確定病例293例，其中境外移入264例、本土29例；但2023年曾爆發本土大流行，全年確定病例達2萬6,706例。登革熱由病媒蚊傳播，沒有積水就沒有病媒蚊，清除孳生源是最根本的預防方法。本文整理疾管署建議的「巡、倒、清、刷」與防蚊、就醫重點。',
    sections:[
      {heading:'疾管署「巡、倒、清、刷」',format:'table',table:TABLE},
      {heading:'認識疑似症狀',format:'bullets',items:[
        '疾管署提醒，出現發燒、頭痛、後眼窩痛、肌肉關節痛、出疹等疑似症狀，應儘速就醫。',
        '就醫時主動告知醫師近期旅遊與活動史，協助及早診斷。',
        '2025年境外移入病例多來自東南亞，以印尼、越南、菲律賓、泰國為主。'
      ]},
      {heading:'防蚊與出國提醒',format:'bullets',items:[
        '戶外活動穿著淺色長袖衣褲，使用政府核可含敵避（DEET）、派卡瑞丁（Picaridin）或伊默克（IR-3535）的防蚊藥劑。',
        '返國入境時如有發燒、頭痛、肌肉關節痛、出疹，主動告知機場檢疫人員。',
        '居家可裝設紗窗紗門，社區與學校共同清除積水容器。'
      ]}
    ],
    think_tank_view:'登革熱的病例數每年起伏很大，2023年的大流行提醒我們，只要環境中有積水，境外移入就可能演變成社區傳播。每週花10分鐘巡一次家裡的積水容器，是每個人都做得到、也最有效的防疫行動。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'病例數引自疾管署傳染病統計資料並標明年份，防治做法引自疾管署新聞稿，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['2025年全年293例、本土29例、境外移入264例（疾管署傳染病統計，依發病年份）','2023年全年2萬6,706例'],
      layout_reason:'核心是可執行的孳生源清除，先用表格列出巡倒清刷，再說明症狀與就醫，最後給防蚊與出國提醒。',
      tone:'專業易懂', tone_reason:'防疫行動需要具體、可照做。',
      to_verify:['年度病例依發病年份統計，2026-11-20查詢，後續仍可能微幅修正']},
    decision_points:[DP_YEAR]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'家裡的積水倒了嗎？巡倒清刷4步驟，一起遠離登革熱',
    update_date:'2026/11/20',
    intro:'登革熱是被蚊子叮咬傳染的疾病。疾管署統計，2025年全年有293人確診，大多是出國被感染後回台；可是2023年曾經一年就有超過2萬6千人得病。蚊子最愛在積水裡產卵，所以把家裡的積水清乾淨，就是最好的預防。',
    sections:[
      {heading:'巡倒清刷，4步驟就上手',format:'table',table:TABLE},
      {heading:'這些不舒服要去看醫生',format:'bullets',items:[
        '發燒、頭痛、眼睛後面痛、肌肉關節痛、出疹子。',
        '看醫生時記得說最近去過哪裡、有沒有出國。',
        '2025年境外移入的病例，多半是從東南亞國家回來。'
      ]},
      {heading:'出門防蚊小撇步',format:'bullets',items:[
        '穿淺色長袖長褲，噴政府核可的防蚊液。',
        '從國外回來有發燒等症狀，入境時主動告訴檢疫人員。',
        '家裡裝好紗窗紗門，鄰居一起清積水效果更好。'
      ]}
    ],
    think_tank_view:'每週找一天，帶著家人把陽台盆栽墊盤、水桶、花瓶都巡一遍，把積水倒掉、刷一刷。小小的習慣，就能讓蚊子沒地方住。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，語氣親切但未淡化風險，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以居家情境帶出巡倒清刷、症狀與防蚊。', tone:'生活親切', tone_reason:'給家庭與社區居民閱讀。', to_verify:[]},
    decision_points:[DP_YEAR]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'防登革熱：巡倒清刷4步驟',
    update_date:'2026/11/20',
    intro:'2025年登革熱全年293例，境外移入占9成；2023年曾達2萬6,706例。清除積水是最根本的預防。',
    sections:[
      {heading:'巡倒清刷',format:'table',table:TABLE},
      {heading:'重點提醒',format:'bullets',items:[
        '發燒、頭痛、後眼窩痛、肌肉關節痛、出疹，儘速就醫並告知旅遊史。',
        '戶外穿淺色長袖，使用核可防蚊藥劑。'
      ]}
    ],
    think_tank_view:'沒有積水就沒有病媒蚊，每週巡一次最實在。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為步驟與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_YEAR]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'登革熱', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'沒有積水就沒有病媒蚊', primary_visual:'293 例', secondary_message:'出國回來發燒要告知旅遊史', action_priority:'巡、倒、清、刷'},
    headline_hook:'沒有積水就沒有蚊子', headline_main:'防登革熱 巡倒清刷 4 步驟', title_accent:'巡倒清刷',
    hero_message:'每週巡一次積水', hero_support:'疾管署「巡、倒、清、刷」',
    primary_stat:{value:'293 例', label:'2025 年登革熱確定病例', note:'疾管署｜境外移入 264 例、本土 29 例'},
    action_title:'巡倒清刷這樣做',
    action_cards:[
      {key:'巡', text:'巡檢室內外，雨後加強檢查積水'},
      {key:'倒', text:'留下的器物收好或倒置'},
      {key:'清', text:'清除廢輪胎、寶特瓶、盆栽墊盤'},
      {key:'刷', text:'儲水容器每週刷洗內壁去蟲卵'}
    ],
    notice:'發燒、頭痛、後眼窩痛、出疹，**儘速就醫並告知旅遊史**。',
    carousel_suggestion:{reason:'若想把病例趨勢、症狀與防蚊分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'登革熱年年不同', headline_main:'2023 年曾達 2.7 萬例'},
      {layout_type:'action', headline_hook:'沒有積水就沒有蚊子', headline_main:'巡倒清刷 4 步驟'},
      {layout_type:'knowledge', headline_hook:'出國回來發燒', headline_main:'就醫告知旅遊史'}]},
    hashtags:['登革熱','巡倒清刷','防蚊','傳染病防治'],
    sources:['衛生福利部疾病管制署'],
    illustration_category:'virus-infection',
    illustration:{topic:'登革熱預防', audience:'家庭與社區居民', scene:'一家人在陽台把盆栽墊盤和水桶的積水倒掉，旁邊有刷子與紗窗',
      emotion:'積極、輕鬆', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A family on a balcony emptying standing water from plant saucers and buckets, with a scrub brush and window screen nearby, active and cheerful, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['2025年全年293例（疾管署傳染病統計，依發病年份）','巡倒清刷做法取自疾管署2026年新聞稿'],
      layout_reason:'關鍵訊息是「人人可做的孳生源清除」，選 action：插圖放大、巡倒清刷 4 張行動卡當主角，年度病例退到下方。',
      tone:'專業易懂', tone_reason:'防疫行動要好記、可照做。',
      to_verify:['年度病例數可能隨疫調微幅修正']},
    decision_points:[Object.assign({}, DP_YEAR, {current:'293 例｜2025 年登革熱確定病例'})],
    content_check_note:'病例數引自疾管署並標明年份，做法引自疾管署，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'登革熱',
    collect:{
      summary:'登革熱病例數年年起伏，2023年曾爆發全年2萬6,706例的本土大流行，2025年則為293例且約9成為境外移入；疾管署每年持續推廣「巡、倒、清、刷」，清除積水與防蚊是值得在夏秋季前長期溝通的防疫議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'293例：依疾管署傳染病統計資料（依發病年份），2025年全年登革熱確定病例293例，其中境外移入264例、本土29例（2026年11月查詢）。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（登革熱）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=061'}},
        {item:'年度趨勢方向',desc:'約2.7萬例：2023年登革熱全年確定病例2萬6,706例（本土2萬6,429例）為近10年最高，2024年降為521例、2025年再降為293例，病例數隨本土疫情大幅波動。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（登革熱）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=061'}},
        {item:'政策動向',desc:'巡倒清刷：疾管署呼籲主動巡檢室內外、清除廢棄容器、器物收拾或倒置，使用中的儲水容器每週至少刷洗內壁一次，並於返國入境有疑似症狀時主動告知機場檢疫人員。',tag:'官方統計',source:{name:'衛生福利部：防範登革熱 落實「巡、倒、清、刷」',url:'https://mohw.gov.tw/cp-16-86654-1.html'}},
        {item:'好發族群年齡層',desc:'約5成病例為20至39歲：依疾管署統計，2025年293例中20至39歲共148例，境外移入多來自印尼、越南、菲律賓與泰國等東南亞國家，與青壯年旅遊、工作往來相關。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（登革熱）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=061'}}
      ],
      product_view:['機會：出國旅遊與商務往來族群是境外移入主力，可結合旅遊平安與海外醫療保障的衛教說明。','機會：可提供防蚊、旅遊史告知等出國前檢核清單，強化預防型服務。','風險：避免以「疫情升溫」等時效性字眼做商品訴求，須依保單條款如實說明。'],
      marketing_view:['機會：梅雨與颱風季前是溝通「巡倒清刷」的固定時點。','機會：家庭與社區共同清積水，適合親子互動式內容。','風險：本土疫情常集中特定縣市，溝通時避免標籤化特定地區。'],
      alert_level:'medium',
      alert_reason:'每年夏秋季都有本土傳播風險，2023年曾大流行；適合在梅雨季前納入年度溝通，即時疫情交由正式模式查詢。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('沒有積水就沒有病媒蚊','MEDICAL_INTERPRETATION','overstatement',
          '「沒有積水就沒有病媒蚊」是防疫標語，但寫在專業易懂版的說明段落中，容易被讀成絕對事實；鄰近環境的積水仍可能孳生病媒蚊。','low','no',
          null,'no','clarify','屬語氣提醒，非數據錯誤。',
          '清除積水可大幅減少病媒蚊孳生'),
        F('2023年曾經一年就有超過2萬6千人得病','SOURCE_EVIDENCE','year_context_missing',
          '生活親切版提到2023年人數，但沒有說明那年是本土大流行、與2025年以境外移入為主的情況不同，讀者可能以為每年都可能有這麼多人。','low','no',
          null,'no','clarify','補一句背景即可。',
          '2023年本土大流行時，曾經一年就有超過2萬6千人得病'),
        F('境外移入占9成','SOURCE_EVIDENCE','derived_figure',
          '「9成」是由264÷293換算（約90.1%），簡潔有力版沒有寫出原始人數，讀者無法自行核對。','low','no',
          null,'no','clarify','數字正確，補原始人數即可。',
          '境外移入264例、約占9成'),
        F('噴政府核可的防蚊液','TERMINOLOGY_LANGUAGE','detail_missing',
          '生活親切版刪掉了有效成分名稱，讀者到賣場仍不知道怎麼判斷「核可」，可補上有效成分讓讀者對照標示。','low','no',
          null,'no','clarify','可用括號補上成分名稱。',
          '噴含敵避、派卡瑞丁或伊默克等成分的政府核可防蚊液')
      ],
      card:[
        F('2025 年登革熱確定病例','SOURCE_EVIDENCE','counting_basis_unstated',
          '「293 例」是依發病年份統計並於2026年11月查詢，卡面沒有說明統計口徑；與依通報日統計的數字可能略有差異。','low','no',
          null,'no','clarify','數字正確，屬口徑標示。',
          '2025 年登革熱確定病例（依發病年份）'),
        F('每週巡一次積水','TERMINOLOGY_LANGUAGE','frequency_mismatch',
          '疾管署建議的「每週至少一次」是針對儲水容器刷洗，巡檢則建議雨後加強；hero 訊息把兩者合併成「每週巡一次」，可能讓讀者忽略雨後要再巡。','low','no',
          null,'no','clarify','屬行動說明精確度問題。',
          '每週巡、雨後再巡')
      ]
    },
    title_alts:[
      '登革熱怎麼預防？落實巡倒清刷，出國回來發燒要告知旅遊史',
      '家裡的積水倒了嗎？巡倒清刷4步驟，一起遠離登革熱',
      '登革熱年度病例怎麼看？從2023年大流行到2025年境外移入為主'
    ],
    card_title_alts:[
      ['沒有積水就沒有蚊子','防登革熱 巡倒清刷 4 步驟'],
      ['家裡積水倒了嗎？','巡倒清刷一起做'],
      ['出國回來發燒','記得告知旅遊史']
    ],
    data_addon:[
      '登革熱全年確定病例：2021年12例、2022年88例、2023年2萬6,706例、2024年521例、2025年293例（疾管署，依發病年份）。',
      '2025年境外移入多來自印尼、越南、菲律賓與泰國（疾管署）。',
      '防蚊藥劑有效成分：敵避（DEET）、派卡瑞丁（Picaridin）、伊默克（IR-3535）。'
    ],
    cta:'這個週末就和家人巡一次陽台與庭院，把積水倒掉、容器刷乾淨。'
  });
})();
