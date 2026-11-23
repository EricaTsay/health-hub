/* v6 示範主題：極端氣候與防災健康（B11 第二輪擴充）
   查證日期：2026-11-23。數據來源：衛福部／國健署熱傷害新聞稿（2025/08/22）、衛福部低溫保暖新聞稿、內政部消防署〈緊急避難包準備清單〉（2025/06/26 發布、2025/12/08 更新）。
   參考方向：健康智庫颱風、熱浪、寒流、地震避難包系列文章（僅取架構）。 */
(function(){
  const REFS = [
    {title:'豪雨來襲造成多處積水或淹水 請民眾清理家園務必落實防疫三步驟（2026/06/25）',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-2704-87003-1.html'},
    {title:'近日高溫，留意熱傷害 「涼、補、心」三字訣，守護家中長輩健康',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-16-83569-1.html'},
    {title:'緊急避難包準備清單',source:'內政部消防署',url:'https://www.nfa.gov.tw/cht/index.php?code=list&flag=detail&ids=214&article_id=18937'},
    {title:'低溫來襲 注意保暖 預防心血管疾病',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-80871-1.html'}
  ];
  const TABLE = {headers:['天氣情境','健康重點'], rows:[
    ['熱浪高溫','冷氣26-27度搭配電風扇，不要等口渴才喝水，長輩與慢性病人最需留意'],
    ['寒流低溫','洋蔥式穿法、頭頸與四肢保暖；清晨與夜間外出或運動要特別小心'],
    ['颱風豪雨','停電前備妥飲水與照明，慢性病藥物與醫療器材預留備用電源'],
    ['地震避難','每人一個避難包放玄關，含飲水、乾糧、急救用品、證件影本與個人藥品']
  ]};
  const TAGS = ['防災','極端氣候','熱浪','寒流','緊急避難包'];

  const DP_HEAT = {id:'dp-climate-heat', type:'data_scope', title:'熱傷害人數只有單月數字',
    desc:'衛福部新聞稿引用疾管署急診通報，114年7月單月因熱傷害就診683人次。通報系統並未涵蓋所有醫療院所，媒體報導的全年人次未找到官方原始出處，AI 沒有採用。',
    current:'114年7月單月熱傷害就診683人次（疾管署急診通報）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'683人次', value:'114年7月單月', note:'衛福部新聞稿引用疾管署急診通報（目前採用）'},
      {label:'全年人次', value:'未採用', note:'媒體報導有全年數字，但未找到官方原始出處'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'熱浪、寒流、颱風、地震：極端天氣的4種健康防護',
    update_date:'2026/11/23',
    intro:'極端天氣對健康的影響，往往落在長輩、慢性病人與嬰幼兒身上。衛福部引用疾管署急診通報資料，114年7月單月因熱傷害就診達683人次；低溫時血管收縮、血壓上升，心血管疾病風險也跟著增加。颱風與地震則可能造成停電、斷水與撤離，平時備好緊急避難包，是最實際的防災健康準備。',
    sections:[
      {heading:'4種極端天氣的健康重點',format:'table',table:TABLE},
      {heading:'熱浪與寒流：照顧好體溫調節',format:'bullets',items:[
        '國健署「涼、補、心」三字訣：穿寬鬆淺色衣物、適時開冷氣，不要等口渴才喝水，並留意體溫升高、皮膚乾熱發紅等警訊。',
        '經醫囑限制飲水或鹽分者，補水量應遵循醫師建議。',
        '低溫時以洋蔥式穿法保暖，戴帽子、圍巾與手套；出現胸痛、胸悶或中風徵兆，立即撥打119。'
      ]},
      {heading:'緊急避難包怎麼準備',format:'bullets',items:[
        '消防署建議每人準備1個避難包，放在玄關等隨手可取處，並標註更新日期、每半年檢查一次。',
        '飲用水以「體重每公斤×15毫升」估算每日最低水分攝取量，搭配不需烹煮的乾糧。',
        '放入急救用品、個人藥品、體溫計、口罩，以及身分證與健保卡影本。',
        '家中有嬰幼兒、長者或寵物，另備奶粉尿布、假牙助聽器、寵物糧食等特殊需求物品。'
      ]},
      {heading:'豪雨淹水後清理家園',format:'bullets',items:[
        '疾管署提醒，豪雨後土壤與汙泥中的病原菌（如類鼻疽、鉤端螺旋體）可能經傷口、黏膜或吸入感染；清理時應戴防水手套、長靴與口罩，居家環境可用市售含氯漂白水稀釋100倍擦拭，泡過水的食物不要食用。',
        '糖尿病、肺病、肝病、腎病、癌症患者或免疫功能受損者，退水後如有發燒、咳嗽應儘速就醫，並告知醫師是否有汙水、汙泥接觸史。'
      ]}
    ],
    think_tank_view:'極端天氣不再是偶發事件，而是每年都要面對的健康風險。與其在警報響起時才手忙腳亂，不如把防災當成日常健康管理：夏天顧好補水與降溫、冬天顧好保暖與血壓，再為全家備妥一個每半年檢查的避難包。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'熱傷害人次引自衛福部新聞稿並標明月份與資料來源，避難包內容引自消防署清單，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['114年7月熱傷害就診683人次（衛福部引用疾管署急診通報）','避難包清單與飲水估算取自內政部消防署'],
      layout_reason:'四種天氣情境先用表格並列，再分別說明體溫調節與避難包準備。',
      tone:'專業易懂', tone_reason:'防災建議需要具體、可照做的清單。',
      to_verify:['熱傷害為單月通報數字，無官方全年統計可引用']},
    decision_points:[DP_HEAT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'熱浪寒流颱風地震來了，家人準備好了嗎？',
    update_date:'2026/11/23',
    intro:'夏天熱到發昏、冬天冷到血壓飆高、颱風地震說來就來，最辛苦的常是家裡的長輩和小朋友。光是114年7月一個月，就有683人次因熱傷害到急診（疾管署急診通報）。花一個週末幫全家整理避難包、聊聊天氣變化時怎麼照顧自己，比什麼都實在。',
    sections:[
      {heading:'不同天氣，照顧重點不一樣',format:'table',table:TABLE},
      {heading:'熱的時候、冷的時候',format:'bullets',items:[
        '熱：穿淺色寬鬆的衣服，冷氣開26-27度配電風扇，不要等口渴才喝水。',
        '醫師交代要限水的人，喝多少水照醫師說的做。',
        '冷：洋蔥式穿法，帽子圍巾手套都戴上；胸口悶痛、講話不清楚，馬上打119。'
      ]},
      {heading:'避難包裡放什麼',format:'bullets',items:[
        '一人一包放門口，外面寫上日期，每半年檢查一次。',
        '水的量可以用「體重每公斤×15毫升」來算一天最少要喝多少。',
        '急救用品、平常吃的藥、口罩，還有身分證、健保卡影本。',
        '有寶寶、長輩或毛小孩，別忘了奶粉尿布、假牙助聽器、寵物糧食。'
      ]},
      {heading:'淹水後清家裡要注意',format:'bullets',items:[
        '大雨淹水後，泥巴和髒水裡可能有細菌，會從傷口或吸進去感染；清理時要戴防水手套、穿雨鞋、戴口罩，泡過水的食物不要吃。',
        '家裡有糖尿病、腎臟病或癌症的長輩，清完後如果發燒、咳嗽，要趕快看醫生，並說有碰過汙水汙泥。'
      ]}
    ],
    think_tank_view:'防災不用等到警報響。趁換季陪爸媽檢查一次避難包、把藥和證件影本放進去，天氣再怎麼變，家人都能多一分安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部與消防署公開資料並標明月份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以全家防災的情境帶出四種天氣與避難包。', tone:'生活親切', tone_reason:'給家庭照顧者閱讀。', to_verify:['熱傷害為單月數字']},
    decision_points:[DP_HEAT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'極端天氣防護：4情境＋避難包',
    update_date:'2026/11/23',
    intro:'114年7月單月熱傷害就診683人次（疾管署急診通報）。熱浪、寒流、颱風、地震都要提前準備，長輩與慢性病人優先。',
    sections:[
      {heading:'4種情境',format:'table',table:TABLE},
      {heading:'體溫調節',format:'bullets',items:[
        '熱：涼、補、心三字訣，主動補水。',
        '冷：洋蔥式穿法，胸痛立即撥打119。'
      ]},
      {heading:'避難包',format:'bullets',items:[
        '每人1包放玄關，每半年檢查一次。',
        '飲水、乾糧、急救用品、個人藥品、證件影本。'
      ]},
      {heading:'淹水後',format:'bullets',items:[
        '清理戴防水手套、長靴、口罩；泡水食物丟棄（疾管署）。',
        '慢性病患者退水後發燒、咳嗽應就醫並告知汙水接觸史。'
      ]}
    ],
    think_tank_view:'把防災當日常健康管理：夏防熱、冬防寒，避難包每半年檢查。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部與消防署公開資料並標明月份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為情境、體溫調節、避難包三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:['熱傷害為單月數字']},
    decision_points:[DP_HEAT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'極端氣候與防災健康', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'極端天氣最傷長輩與慢性病人', primary_visual:'683 人次', secondary_message:'每人一個避難包、每半年檢查', action_priority:'防熱、防寒、備包'},
    headline_hook:'極端天氣說來就來', headline_main:'全家防災 4 件事', title_accent:'4 件事',
    hero_message:'單月 683 人次', hero_support:'因熱傷害就診（114 年 7 月急診通報）',
    primary_stat:{value:'683 人次', label:'114 年 7 月熱傷害就診', note:'衛福部引用疾管署急診通報'},
    action_title:'平時這樣準備',
    action_cards:[
      {key:'熱', text:'冷氣 26–27 度配電扇，不等口渴就喝水'},
      {key:'冷', text:'洋蔥式穿法，頭頸與手腳保暖'},
      {key:'包', text:'每人一個避難包，放玄關'},
      {key:'檢', text:'每半年檢查飲水、乾糧與藥品'}
    ],
    notice:'出現胸痛、胸悶或中風徵兆，**立即撥打 119**。',
    carousel_suggestion:{reason:'若想把各種天氣分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'action', headline_hook:'熱浪來了', headline_main:'涼、補、心三字訣'},
      {layout_type:'action', headline_hook:'寒流來了', headline_main:'保暖顧血壓'},
      {layout_type:'knowledge', headline_hook:'緊急避難包', headline_main:'這些東西要放'}]},
    hashtags:['防災','極端氣候','緊急避難包','熱傷害預防'],
    sources:['衛生福利部國民健康署','內政部消防署'],
    illustration_category:'general',
    illustration:{topic:'家庭防災準備', audience:'家庭照顧者與長輩', scene:'一家人在玄關整理緊急避難包，桌上有水瓶、手電筒與急救包',
      emotion:'安心、有準備', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A family packing an emergency go-bag at the entrance of their home, water bottles, flashlight and first-aid kit on a table, calm and prepared, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['114年7月熱傷害就診683人次（衛福部引用疾管署急診通報）','避難包建議取自消防署清單'],
      layout_reason:'核心是「平時就準備」，選 action：4 個準備行動當主角，熱傷害人次退到下方當背景。',
      tone:'專業易懂', tone_reason:'防災行動需要具體。',
      to_verify:['熱傷害為單月通報數字']},
    decision_points:[Object.assign({}, DP_HEAT, {current:'683 人次｜114 年 7 月熱傷害就診'})],
    content_check_note:'熱傷害人次引自衛福部並標明月份，避難包建議引自消防署，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'極端氣候與防災健康',
    collect:{
      summary:'熱浪、寒流、颱風與地震每年都會發生，健康衝擊集中在長輩、慢性病人與嬰幼兒；衛福部與消防署分別提供防熱、保暖與緊急避難包的具體建議，適合做成換季固定溝通的防災健康內容。',
      objective_data:[
        {item:'盛行率／發生率',desc:'單月683人次因熱傷害就診：衛福部引用疾管署急診通報，114年7月單一月份因熱傷害就診683人次，通報系統未涵蓋所有醫療院所，宜視為趨勢參考。',tag:'官方統計',source:{name:'衛生福利部：近日高溫，留意熱傷害',url:'https://www.mohw.gov.tw/cp-16-83569-1.html'}},
        {item:'好發族群年齡層',desc:'冷氣建議26-27度：國健署指出長者汗腺功能較差、體溫調節能力弱，有慢性病或心血管疾病的長者更需注意，建議冷氣搭配電風扇並主動補水。',tag:'官方統計',source:{name:'衛生福利部：近日高溫，留意熱傷害',url:'https://www.mohw.gov.tw/cp-16-83569-1.html'}},
        {item:'政策動向',desc:'每人1個緊急避難包：消防署2025年發布、同年12月更新的清單，建議避難包放在玄關、標註更新日期並每半年檢查，飲水以體重每公斤×15毫升估算每日最低攝取量。',tag:'官方統計',source:{name:'內政部消防署：緊急避難包準備清單',url:'https://www.nfa.gov.tw/cht/index.php?code=list&flag=detail&ids=214&article_id=18937'}},
        {item:'年度趨勢方向',desc:'低溫時心血管風險上升：衛福部提醒氣溫驟降會使血管收縮、血壓上升，65歲以上長者與三高、心血管疾病患者為高風險族群，應採洋蔥式穿法並避免清晨與夜間在低溫下運動。',tag:'官方統計',source:{name:'衛生福利部：低溫來襲 注意保暖',url:'https://mohw.gov.tw/cp-16-80871-1.html'}}
      ],
      product_view:['機會：極端天氣造成的意外、住院與急診，可連結意外險與住院醫療保障的說明。','機會：可提供保戶天氣警報提醒、避難包檢查清單等健康關懷服務。','風險：避免在災害發生期間以恐懼訴求推銷，災時溝通以關懷與資訊為主。'],
      marketing_view:['機會：夏季高溫、颱風季與寒流前都是固定溝通檔期，可做成年度系列。','機會：「陪爸媽檢查避難包」適合子女世代互動內容。','風險：災害當下的貼文需避免商業化，宜改為純資訊與關懷。'],
      alert_level:'medium',
      alert_reason:'屬每年重複出現的季節性風險，颱風季與寒流前後需求集中；本主題以長期準備為主，不提供即時氣象或災情資訊。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('114年7月單月因熱傷害就診達683人次','DATA_FACTUAL_ACCURACY','surveillance_coverage',
          '此數字來自疾管署急診通報系統，該系統未涵蓋所有醫療院所，文中未說明，讀者可能誤以為是全國實際就診總數。','low','no',
          null,'no','clarify','數字本身引自衛福部新聞稿。',
          '114年7月單月經急診通報系統統計，因熱傷害就診達683人次（未涵蓋所有醫療院所）'),
        F('低溫時血管收縮、血壓上升，心血管疾病風險也跟著增加','SOURCE_EVIDENCE','source_unstated',
          '此段為衛福部衛教說法，但文中未標示出處，與前後段已標明機構的寫法不一致。','low','no',
          null,'no','clarify','內容與衛福部新聞稿一致。',
          '衛福部提醒，低溫時血管收縮、血壓上升，心血管疾病風險也跟著增加'),
        F('不要等口渴才喝水','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '補水建議未提醒心臟、腎臟疾病等限水病人例外；專業易懂版已寫，其他版本缺漏或過於簡略。','medium','no',
          null,'no','clarify','國健署原文有提醒經醫囑限水者遵循醫師建議。',
          '不要等口渴才喝水（經醫師限水者依醫囑）',
          ['主動補水']),
        F('每人1包放玄關，每半年檢查一次。','COMPLETENESS','missing_key_info',
          '簡潔版未說明避難包的基本內容與飲水量估算方式，讀者難以照做。','low','no',
          null,'no','clarify','完整清單見消防署網站。',
          '每人1包放玄關，每半年檢查一次；飲水以體重每公斤×15毫升估算（消防署清單）。')
      ],
      card:[
        F('114 年 7 月熱傷害就診','DATA_FACTUAL_ACCURACY','surveillance_coverage',
          '卡面未說明這是急診通報系統的單月數字，讀者可能理解為全國全年總數。','low','no',
          null,'no','clarify','屬口徑說明。',
          '114 年 7 月急診通報熱傷害就診'),
        F('冷氣 26–27 度配電扇，不等口渴就喝水','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '限水病人（如心衰竭、洗腎）不適用主動大量補水，卡面未提醒。','low','no',
          null,'no','clarify','國健署原文有例外說明。',
          '冷氣 26–27 度配電扇，主動補水（限水者依醫囑）')
      ]
    },
    title_alts:[
      '熱浪、寒流、颱風、地震：極端天氣的4種健康防護',
      '熱浪寒流颱風地震來了，家人準備好了嗎？',
      '一個避難包、三個天氣守則：全家防災健康清單'
    ],
    card_title_alts:[
      ['極端天氣說來就來','全家防災 4 件事'],
      ['颱風地震寒流熱浪','你家準備好了嗎？'],
      ['每人一個避難包','每半年檢查一次']
    ],
    data_addon:[
      '消防署建議避難包重量：男性約15公斤、女性約10公斤，以雙肩背包為佳。',
      '可用「消防防災e點通」APP檢核避難包物品，系統會在半年後提醒更新。',
      '國健署建議高溫時每日飲食「3蔬2果」，也能幫助補充水分。'
    ],
    cta:'這個週末就為家裡每個人準備一個避難包，放在玄關並寫上日期，半年後再檢查一次。'
  });
})();
