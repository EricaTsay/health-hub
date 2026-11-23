/* v6 示範主題：屈公病（B8 傳染病防治）
   查證日期：2026-11-21。數據來源：疾管署傳染病統計資料查詢系統（屈公病2025年總數）、疾管署新聞稿（2025-08-07、2025-10-21，衛福部網站轉載）。
   只用全年統計，新聞稿中的「截至某日累計」數字未引用。疾管署開放資料當日連線失敗，未取得2024年以前全年數字。
   參考方向：健康智庫〈屈公病疫情升溫，防蚊刻不容緩〉2025/09。 */
(function(){
  const REFS = [
    {title:'傳染病統計資料查詢系統：屈公病',source:'衛生福利部疾病管制署',url:'https://nidss.cdc.gov.tw/nndss/disease?id=A920'},
    {title:'國內新增屈公病境外移入病例，赴流行地區請落實防蚊措施',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-83446-1.html'},
    {title:'國內新增2例屈公病境外移入病例，出國旅遊請做好防蚊措施',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-84298-1.html'}
  ];
  const TABLE = {headers:['項目','說明'], rows:[
    ['傳播方式','經病媒蚊叮咬傳播，與登革熱相同的斑蚊'],
    ['常見症狀','發燒、關節痛、紅疹，也可能頭痛、肌肉痛'],
    ['返國提醒','入境有疑似症狀主動告知機場檢疫人員'],
    ['就醫提醒','就醫時告知醫師旅遊史']
  ]};
  const TAGS = ['屈公病','境外移入','防蚊','出國旅遊','病媒蚊'];

  const DP_YEAR = {id:'dp-chik-year', type:'data_scope', title:'只寫全年統計',
    desc:'疾管署2025年新聞稿多次公布「截至某日累計」病例，並與「近6年同期」比較；示範資料只採用全年統計（2025年39例，依發病日）。AI 沒有引用會過時的同期數字。',
    current:'2025年屈公病確定病例39例（疾管署，依發病日）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'39 例', value:'2025 年全年', note:'疾管署傳染病統計資料查詢系統（目前採用）'},
      {label:'同期比較', value:'新聞稿說法', note:'2025年境外移入為近6年同期最高，屬當時時點說法'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'屈公病是什麼？發燒、關節痛、紅疹，出國防蚊與返國申報很重要',
    update_date:'2026/11/21',
    intro:'屈公病由病媒蚊傳播，症狀包括發燒、關節痛與紅疹。依疾病管制署傳染病統計，2025年全年屈公病確定病例39例；疾管署2025年新聞稿指出，病例以境外移入為主，多與前往中國廣東省等流行地區旅遊有關。屈公病與登革熱由相同的斑蚊傳播，出國防蚊與返國主動申報，是避免境外移入引發本土傳播的關鍵。',
    sections:[
      {heading:'認識屈公病',format:'table',table:TABLE},
      {heading:'出國前與旅途中',format:'bullets',items:[
        '前往流行地區時，穿著淺色長袖衣褲，使用政府核可的防蚊藥劑。',
        '住宿選擇有紗窗、紗門或空調的環境。',
        '出國前可參考疾管署國際旅遊疫情建議。'
      ]},
      {heading:'返國後',format:'bullets',items:[
        '入境時有發燒、四肢痠痛、頭痛、肌肉痛、骨骼關節痛等症狀，主動告知機場檢疫人員。',
        '返國後出現症狀儘速就醫，並告知醫師旅遊史。',
        '居家落實「巡、倒、清、刷」，避免病媒蚊孳生。'
      ]}
    ],
    think_tank_view:'屈公病在台灣多是旅遊帶回來的，但它和登革熱共用同樣的病媒蚊，一旦進到社區就可能擴散。出國時防蚊、回國時主動申報、家裡清除積水，三件事環環相扣。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'全年病例數引自疾管署並標明年份，症狀與建議引自疾管署新聞稿，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['2025年全年39例（疾管署傳染病統計資料查詢系統）','境外移入為主、症狀與檢疫建議（疾管署2025-08-07、10-21新聞稿）'],
      layout_reason:'先用表格說明疾病，再分出國前與返國後的行動。',
      tone:'專業易懂', tone_reason:'旅遊防疫資訊需具體。',
      to_verify:['2024年以前全年病例未取得（開放資料連線失敗）','2025年39例中本土與境外比例未確認']},
    decision_points:[DP_YEAR]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'出國回來發燒、關節痛？小心屈公病',
    update_date:'2026/11/21',
    intro:'屈公病是被蚊子叮咬傳染的病，會發燒、關節痛、起紅疹。疾管署統計，2025年一整年台灣有39人確診，大多是出國旅遊時被感染。它和登革熱是同一種蚊子傳的，所以出國防蚊、回國後清積水都很重要。',
    sections:[
      {heading:'屈公病小檔案',format:'table',table:TABLE},
      {heading:'出國時',format:'bullets',items:[
        '穿淺色長袖長褲，擦政府核可的防蚊液。',
        '住有紗窗或冷氣的房間。'
      ]},
      {heading:'回國後',format:'bullets',items:[
        '下飛機時不舒服，告訴檢疫人員。',
        '回家後發燒、關節痛，看醫生時說去過哪裡。',
        '家裡的積水倒掉、容器刷乾淨。'
      ]}
    ],
    think_tank_view:'旅行帶回美好回憶就好，別把病毒也帶回來。出發前把防蚊液放進行李箱吧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，語氣親切，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以旅遊情境帶出防護。', tone:'生活親切', tone_reason:'給旅遊族群閱讀。', to_verify:[]},
    decision_points:[DP_YEAR]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'屈公病：出國防蚊、返國申報',
    update_date:'2026/11/21',
    intro:'2025年屈公病全年39例，以境外移入為主（疾管署）。症狀為發燒、關節痛、紅疹。',
    sections:[
      {heading:'重點',format:'table',table:TABLE},
      {heading:'行動',format:'bullets',items:[
        '出國穿長袖、用防蚊液。',
        '返國有症狀主動申報、就醫告知旅遊史。'
      ]}
    ],
    think_tank_view:'防蚊、申報、清積水，三步擋住境外移入。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為重點與行動兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_YEAR]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'屈公病', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'屈公病多為境外移入，出國要防蚊', primary_visual:'39 例', secondary_message:'返國有症狀主動申報', action_priority:'防蚊、申報、清積水'},
    headline_hook:'出國回來關節痛？', headline_main:'小心屈公病', title_accent:'屈公病',
    hero_message:'以境外移入為主', hero_support:'疾管署 2025 年新聞稿',
    knowledge_title:'常見症狀', knowledge_note:'返國後出現症狀，**就醫告知旅遊史**',
    knowledge_cards:[
      {label:'發燒', icon:'check', lines:['突然發燒']},
      {label:'關節痛', icon:'pressure', lines:['四肢、骨骼','關節疼痛']},
      {label:'紅疹', icon:'shield', lines:['皮膚出疹']}
    ],
    primary_stat:{value:'39 例', label:'2025 年屈公病確定病例', note:'疾管署傳染病統計｜依發病日'},
    secondary_stats:[
      {value:'斑蚊', label:'與登革熱相同的病媒蚊'},
      {value:'入境申報', label:'有症狀告知檢疫人員'}
    ],
    action_title:'這樣防屈公病',
    action_cards:[
      {key:'衣', text:'出國穿淺色長袖衣褲'},
      {key:'液', text:'使用政府核可防蚊藥劑'},
      {key:'報', text:'入境有症狀主動告知檢疫人員'},
      {key:'清', text:'居家落實巡倒清刷'}
    ],
    carousel_suggestion:{reason:'若想把症狀、出國防護與返國行動分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'屈公病是什麼？', headline_main:'發燒、關節痛、紅疹'},
      {layout_type:'action', headline_hook:'出國這樣防', headline_main:'長袖＋防蚊液'},
      {layout_type:'action', headline_hook:'返國後', headline_main:'有症狀主動申報'}]},
    hashtags:['屈公病','境外移入','防蚊','出國旅遊'],
    sources:['衛生福利部疾病管制署'],
    illustration_category:'virus-infection',
    illustration:{topic:'旅遊防蚊', audience:'出國旅遊族群', scene:'一位旅客在行李箱旁把防蚊液和長袖衣物放進行李',
      emotion:'有準備、輕鬆', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A traveller packing insect repellent and long-sleeved clothes into a suitcase, prepared and relaxed, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['2025年39例（疾管署）','症狀與建議取自疾管署新聞稿'],
      layout_reason:'核心是辨識症狀與旅遊防護，選 knowledge：3 個症狀放中段，全年病例退到下方，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'旅遊防疫要具體。',
      to_verify:['39例中本土與境外比例未確認']},
    decision_points:[Object.assign({}, DP_YEAR, {current:'39 例｜2025 年全年'})],
    content_check_note:'病例數與建議引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'屈公病',
    collect:{
      summary:'屈公病2025年全年39例，疾管署指出以境外移入為主、多與赴中國廣東等流行地區旅遊相關；由與登革熱相同的斑蚊傳播，「出國防蚊、返國主動申報、居家清積水」是旅遊旺季前值得溝通的防疫議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'39例：依疾管署傳染病統計資料查詢系統（依發病日），2025年屈公病全年確定病例39例。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（屈公病）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=A920'}},
        {item:'年度趨勢方向',desc:'境外移入為主：疾管署2025年新聞稿指出，當年病例以境外移入為主，多與前往中國廣東省佛山、潮州等流行地區有關。',tag:'官方統計',source:{name:'衛生福利部：國內新增2例屈公病境外移入病例',url:'https://mohw.gov.tw/cp-16-84298-1.html'}},
        {item:'政策動向',desc:'入境主動申報：疾管署提醒入境時若有發燒、四肢痠痛、頭痛、肌肉痛、骨骼關節痛等疑似症狀，應主動告知機場檢疫人員，就醫時告知旅遊史。',tag:'官方統計',source:{name:'衛生福利部：國內新增屈公病境外移入病例，赴流行地區請落實防蚊措施',url:'https://mohw.gov.tw/cp-16-83446-1.html'}},
        {item:'好發族群年齡層',desc:'青壯年旅遊族群：依疾管署統計年齡別發生率，2025年以20至39歲較高，與出國旅遊、商務往來族群重疊。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（屈公病）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=A920'}}
      ],
      product_view:['機會：旅遊族群可結合旅遊平安與海外醫療保障的衛教說明。','機會：出國前防蚊檢核清單是實用的服務內容。','風險：避免以疫情升溫做時效性商品訴求。'],
      marketing_view:['機會：暑假與國慶連假出國旺季前是溝通時點。','機會：與登革熱「巡倒清刷」可共同溝通。','風險：避免標籤化特定旅遊地區。'],
      alert_level:'low',
      alert_reason:'以境外移入為主，屬旅遊防疫議題；國際疫情變化交由正式模式查詢。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('病例以境外移入為主，多與前往中國廣東省等流行地區旅遊有關','SOURCE_EVIDENCE','partial_year_basis',
          '「以境外移入為主」出自2025年8月與10月的新聞稿，當時累計病例尚未涵蓋全年；全年39例中本土與境外的比例，新聞稿沒有公布。','low','yes',
          '疾管署2025年屈公病全年本土與境外移入病例數。','no','confirm','說法方向應無誤，但需全年數字確認。',
          '依疾管署2025年新聞稿，病例以境外移入為主（全年本土與境外比例待確認）'),
        F('住宿選擇有紗窗、紗門或空調的環境','SOURCE_EVIDENCE','claim_without_source',
          '引用的兩份屈公病新聞稿沒有住宿環境的建議，本句為一般防蚊衛教。','low','no',
          null,'no','clarify','可標示為一般防蚊建議或補出處。',
          '住宿盡量選擇有紗窗、紗門或空調的環境（一般防蚊建議）'),
        F('大多是出國旅遊時被感染','SOURCE_EVIDENCE','partial_year_basis',
          '生活親切版把新聞稿的時點說法套用到全年39例，全年本土與境外比例未公布。','low','no',
          null,'no','clarify','補上出處與時點即可。',
          '疾管署2025年新聞稿指出，大多是出國旅遊時被感染'),
        F('2025年屈公病全年39例，以境外移入為主（疾管署）','SOURCE_EVIDENCE','partial_year_basis',
          '簡潔有力版把全年病例數與新聞稿的時點說法合在同一句，讀者可能以為39例全是境外移入。','low','no',
          null,'no','clarify','拆開兩個資訊即可。',
          '2025年屈公病全年39例（疾管署），當年新聞稿指出以境外移入為主')
      ],
      card:[
        F('疾管署 2025 年新聞稿','SOURCE_EVIDENCE','partial_year_basis',
          'hero 說法「以境外移入為主」出自年中新聞稿，卡面沒有說明是當時累計情形，與下方全年病例並列時容易被當成全年結論。','low','no',
          null,'no','clarify','屬時點標示。',
          '疾管署 2025 年 8、10 月新聞稿'),
        F('與登革熱相同的病媒蚊','TERMINOLOGY_LANGUAGE','term_unexplained',
          '次數字只寫「斑蚊」，沒有說明是埃及斑蚊與白線斑蚊，也沒有點出居家清積水的關聯。','low','no',
          null,'no','clarify','可補一句清積水。',
          '與登革熱相同，清積水可防')
      ]
    },
    title_alts:[
      '屈公病是什麼？發燒、關節痛、紅疹，出國防蚊與返國申報很重要',
      '出國回來發燒、關節痛？小心屈公病',
      '屈公病年度病例與旅遊防蚊重點'
    ],
    card_title_alts:[
      ['出國回來關節痛？','小心屈公病'],
      ['出國這樣防','長袖＋防蚊液'],
      ['返國有症狀','主動告知檢疫人員']
    ],
    data_addon:[
      '屈公病2025年全年確定病例39例（疾管署傳染病統計資料查詢系統，依發病日）。',
      '疾管署2025年新聞稿：病例以境外移入為主，多與中國廣東省流行地區相關。',
      '症狀：發燒、關節痛、紅疹，可能伴隨頭痛、肌肉痛。'
    ],
    cta:'出國前把防蚊液與長袖衣物放進行李；回國後發燒、關節痛，就醫記得說旅遊史。'
  });
})();
