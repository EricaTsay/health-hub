/* v6 示範主題：AI 醫療與數位健康（B12 第三輪擴充）
   查證日期：2026-11-23。數據來源：衛福部（食藥署）114-04-28新聞稿（109年至114年3月底核准180張應用AI技術之醫療器材許可證，國產55張、輸入125張）、
   衛福部（食藥署）114-10-03新聞稿（110年5月成立智慧醫療器材專案辦公室、發布21份指導文件、輔導取證28張）、
   食藥署〈109-114年核准應用AI/ML技術之醫療器材清單〉（2025-02-12發布、2026-09-03維護，115年再增列3筆；清單PDF總數未逐筆計算）、
   衛福部113-10-07新聞稿（三大AI中心：負責任AI執行中心、臨床AI取證驗證中心、AI影響性研究中心；16家醫院19案通過）、
   個人資料保護法第6條（病歷、醫療、健康檢查等為特種個資）。
   參考方向：健康智庫〈AI醫生要來了！？〉2025/04、〈AI 傾聽者？聊天機器人提供的心理慰藉〉2025/03、〈讓大腦被看見：AI與精神醫學〉2026/05。 */
(function(){
  const REFS = [
    {title:'2025智醫材跨域產業鏈結交流會登場',source:'衛生福利部食品藥物管理署',url:'https://mohw.gov.tw/cp-2704-82300-1.html'},
    {title:'109-114年本署核准應用AI/ML技術之醫療器材清單',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/tc/siteListContent.aspx?id=42528'},
    {title:'2025智慧醫療器材諮詢輔導成果發表會',source:'衛生福利部食品藥物管理署',url:'https://mohw.gov.tw/cp-2704-84136-1.html'},
    {title:'衛生福利部三大AI中心啟動記者會',source:'衛生福利部',url:'https://mohw.gov.tw/cp-2704-80155-1.html'},
    {title:'個人資料保護法第6條',source:'全國法規資料庫',url:'https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=I0050021&flno=6'}
  ];
  const TABLE = {headers:['AI 應用','是否屬醫療器材','民眾使用提醒'], rows:[
    ['醫院影像判讀、輔助診斷軟體','用於診斷治療者屬醫療器材，須經食藥署查驗登記','結果由醫師判讀並負責，AI 只是輔助'],
    ['居家血壓計、心電圖等量測裝置','具醫療用途者屬醫療器材','選購時看衛福部醫療器材許可證字號'],
    ['健康App、聊天機器人','一般健康管理用途多非醫療器材','不能取代就醫；留意輸入的健康資料如何被使用']
  ]};
  const TAGS = ['AI醫療','智慧醫材','數位健康','個資保護','醫療器材'];

  const DP_COUNT = {id:'dp-ai-count', type:'data_version', title:'AI醫材核准數有兩種口徑',
    desc:'食藥署114年4月新聞稿稱109年至114年3月底核准180張AI醫材許可證；食藥署清單之後仍持續增列（115年再增3筆），但未公布新的總數。AI 沒有替你推算最新總數。',
    current:'核准180張應用AI技術之醫療器材許可證',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'114年3月底', value:'180 張', note:'食藥署新聞稿（目前採用）'},
      {label:'115年清單', value:'持續增列', note:'清單PDF未公布總數，需逐筆計算'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'AI醫療怎麼管？認識智慧醫材查驗與健康資料保護',
    update_date:'2026/11/23',
    intro:'從醫院的影像判讀到手機上的健康聊天機器人，AI 已進入醫療的各個環節。食藥署統計，109年至114年3月底已核准180張應用AI技術的醫療器材許可證（國產55張、輸入125張）。AI 能協助醫師提高效率，但它是否經過查驗、資料如何被使用，是民眾使用前應了解的兩件事。',
    sections:[
      {heading:'不同 AI 應用的管理差異',format:'table',table:TABLE},
      {heading:'政府怎麼管 AI 醫療',format:'bullets',items:[
        '食藥署110年5月成立智慧醫療器材專案辦公室，並陸續發布21份智慧醫療器材指導文件，界定哪些軟體屬於醫療器材。',
        '食藥署公開「核准應用AI/ML技術之醫療器材清單」，可查詢已取得許可證的產品。',
        '衛福部113年10月成立負責任AI執行中心、臨床AI取證驗證中心、AI影響性研究中心，共16家醫院19案通過，分別處理AI倫理與資安、臨床驗證，以及納入健保給付的評估。'
      ]},
      {heading:'使用健康 AI 前想一想',format:'bullets',items:[
        '依個人資料保護法第6條，病歷、醫療、健康檢查等屬特種個人資料，原則上不得蒐集、處理或利用。',
        '使用健康App或聊天機器人前，看清楚隱私權政策：資料存在哪裡、會不會提供第三方。',
        'AI 的回答可能出錯，出現胸痛、呼吸困難或自傷念頭等情況，應直接就醫或撥打求助專線。'
      ]}
    ],
    think_tank_view:'AI 醫療的價值在「輔助」而非「取代」。對民眾來說，最實用的判斷是兩個問題：這個工具有沒有經過食藥署查驗？我的健康資料會被怎麼用？問清楚這兩點，就能更安心地享受科技帶來的便利。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自食藥署與衛福部新聞稿並標明時間；個資法依條文描述；未推薦特定產品，未誇大AI準確度。',
    ai_rationale:{basis:['AI醫材核准數取自食藥署114-04-28新聞稿','三大AI中心取自衛福部113-10-07新聞稿','個資規定取自個資法第6條'],
      layout_reason:'先用表格區分哪些 AI 屬醫療器材，再介紹政府管理，最後給民眾使用前的個資與安全提醒。',
      tone:'專業易懂', tone_reason:'科技議題容易被炒作，需冷靜、標明出處。',
      to_verify:['AI醫材許可證最新累計數','三大AI中心後續成果']},
    decision_points:[DP_COUNT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'AI醫生可信嗎？用健康App前先問自己2個問題',
    update_date:'2026/11/23',
    intro:'拍張照就能看懂檢查報告、跟聊天機器人聊心事，AI 越來越像身邊的健康小幫手。食藥署統計，到114年3月底已核准180張AI醫療器材許可證。不過，AI 好不好用之外，更重要的是：它有沒有經過把關？你的健康資料安不安全？',
    sections:[
      {heading:'哪些 AI 算醫療器材',format:'table',table:TABLE},
      {heading:'政府怎麼把關',format:'bullets',items:[
        '食藥署有專門的智慧醫材辦公室，幫忙審查和輔導。',
        '上食藥署網站可以查到已核准的AI醫材清單。',
        '衛福部113年也成立三大AI中心，負責AI的安全、驗證和健保評估。'
      ]},
      {heading:'用之前想一想',format:'bullets',items:[
        '病歷和健康資料在法律上是特別保護的個資，別隨便上傳。',
        '看一下App的隱私說明，資料會不會給別人。',
        '身體很不舒服或有傷害自己的念頭，請直接就醫或求助，不要只問AI。'
      ]}
    ],
    think_tank_view:'AI 是好幫手，但不是醫生。用之前多問一句「有沒有核准、資料去哪裡」，就是保護自己最簡單的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自食藥署與衛福部，未推薦特定產品，未誇大AI準確度。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以民眾使用情境帶入，依是否屬醫材、政府把關、使用提醒排列。', tone:'生活親切', tone_reason:'給一般民眾與年輕族群。', to_verify:['AI醫材許可證最新累計數']},
    decision_points:[DP_COUNT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'AI醫療：看核准、顧個資',
    update_date:'2026/11/23',
    intro:'食藥署109年至114年3月底核准180張AI醫療器材許可證。使用健康AI前，先確認是否經查驗與資料如何使用。',
    sections:[
      {heading:'管理差異',format:'table',table:TABLE},
      {heading:'政府把關',format:'bullets',items:[
        '食藥署公開核准AI醫材清單。',
        '衛福部113年成立三大AI中心。'
      ]},
      {heading:'使用提醒',format:'bullets',items:[
        '健康資料屬特種個資。',
        'AI 不能取代就醫。'
      ]}
    ],
    think_tank_view:'AI 是輔助工具，先看核准、再顧個資。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自食藥署與衛福部。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為管理、把關、提醒三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:['AI醫材許可證最新累計數']},
    decision_points:[DP_COUNT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'AI 醫療與數位健康', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'AI 是輔助，先看核准再顧個資', primary_visual:'180 張 AI 醫材許可證', secondary_message:'健康資料屬特種個資', action_priority:'用健康 AI 前問 2 個問題'},
    headline_hook:'AI 醫生可信嗎？', headline_main:'用健康 AI 前先看這些', title_accent:'先看這些',
    hero_message:'AI 是輔助，不能取代醫師', hero_support:'食藥署核准 AI 醫材，109 年至 114 年 3 月',
    knowledge_title:'健康 AI 怎麼分', knowledge_note:'具醫療用途者須經**食藥署查驗登記**',
    knowledge_cards:[
      {label:'影像判讀', icon:'search', lines:['屬醫療器材','醫師判讀負責']},
      {label:'居家量測', icon:'heart', lines:['看醫材','許可證字號']},
      {label:'健康 App', icon:'chat', lines:['多非醫材','不能取代就醫']},
      {label:'健康資料', icon:'shield', lines:['特種個資','看隱私政策']}
    ],
    primary_stat:{value:'180 張', label:'AI 醫療器材許可證', note:'國產 55 張、輸入 125 張'},
    secondary_stats:[
      {value:'3 大中心', label:'衛福部 113 年成立'},
      {value:'21 份', label:'智慧醫材指導文件'}
    ],
    action_title:'使用前這樣做',
    action_cards:[
      {key:'查', text:'上食藥署查核准 AI 醫材清單'},
      {key:'讀', text:'看清楚 App 的隱私權政策'},
      {key:'醫', text:'AI 結果仍由醫師判讀'},
      {key:'急', text:'身體不適直接就醫，不只問 AI'}
    ],
    carousel_suggestion:{reason:'若想把醫材管理、政府把關與個資提醒分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'哪些 AI 是醫材', headline_main:'看許可證字號'},
      {layout_type:'data', headline_hook:'AI 醫材核准', headline_main:'180 張許可證'},
      {layout_type:'action', headline_hook:'健康資料', headline_main:'使用前顧個資'}]},
    hashtags:['AI醫療','智慧醫材','數位健康','個資保護'],
    sources:['衛生福利部食品藥物管理署','衛生福利部'],
    illustration_category:'general',
    illustration:{topic:'AI 輔助醫療與健康資料', audience:'使用健康 App 的成年人', scene:'一位民眾看著手機上的健康 App，醫師在旁的螢幕上檢視 AI 輔助的影像報告',
      emotion:'理性、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A person looking at a health app on a smartphone while a doctor nearby reviews an AI-assisted imaging report on a monitor, rational and reassured mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['AI醫材核准數取自食藥署114年新聞稿'],
      layout_reason:'核心是分辨哪些 AI 受醫材管理，選 knowledge：4 張卡區分應用類型。',
      tone:'專業易懂', tone_reason:'避免科技炒作。',
      to_verify:['AI醫材許可證最新累計數']},
    decision_points:[Object.assign({}, DP_COUNT, {current:'180 張｜截至 114 年 3 月底'})],
    content_check_note:'數據引自食藥署與衛福部，未推薦特定產品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'AI 醫療與數位健康',
    collect:{
      summary:'AI 醫療器材核准數逐年累積，衛福部113年成立三大AI中心推動驗證與健保評估；民眾端健康App與聊天機器人普及，查驗把關與健康資料保護是溝通重點，屬長期趨勢議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'180張：食藥署109年至114年3月底核准應用AI技術之醫療器材許可證180張，其中國產55張、輸入125張。',tag:'官方統計',source:{name:'食藥署：2025智醫材跨域產業鏈結交流會',url:'https://mohw.gov.tw/cp-2704-82300-1.html'}},
        {item:'政策動向',desc:'16家醫院：衛福部113年10月成立負責任AI執行中心、臨床AI取證驗證中心、AI影響性研究中心，30家醫院提案48案，16家醫院19案通過決選。',tag:'官方統計',source:{name:'衛福部：三大AI中心啟動記者會',url:'https://mohw.gov.tw/cp-2704-80155-1.html'}},
        {item:'年度趨勢方向',desc:'21份指導文件：食藥署110年5月成立智慧醫療器材專案辦公室，至114年累計發布21份智慧醫療器材指導文件、輔導取得醫療器材許可證28張。',tag:'官方統計',source:{name:'食藥署：2025智慧醫療器材諮詢輔導成果發表會',url:'https://mohw.gov.tw/cp-2704-84136-1.html'}},
        {item:'好發族群年齡層',desc:'個資法第6條：病歷、醫療、基因、健康檢查等屬特種個人資料，除法定情形外不得蒐集、處理或利用。',tag:'官方統計',source:{name:'全國法規資料庫：個人資料保護法第6條',url:'https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=I0050021&flno=6'}}
      ],
      product_view:['機會：數位健康管理工具可作為保戶服務，但須說明資料用途並取得同意。','機會：可協助保戶分辨醫療器材與一般健康App。','風險：健康資料屬特種個資，蒐集利用須符合個資法；不得誇大AI準確度或暗示以AI判斷核保理賠。'],
      marketing_view:['機會：AI 是高關注議題，以「看核准、顧個資」角度切入具差異化。','機會：可結合年輕族群常用的健康App情境。','風險：避免「AI醫生」「取代醫師」等炒作用語，不推薦特定產品。'],
      alert_level:'low',
      alert_reason:'長期趨勢議題，無即時事件；食藥署AI醫材清單與三大AI中心成果更新時可再溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('原則上不得蒐集、處理或利用','COMPLIANCE_LEGAL','incomplete_legal_statement',
          '只寫原則，未提個資法第6條另有法律明文規定、當事人書面同意等例外，讀者可能誤以為所有健康App都違法。','low','no',
          null,'no','clarify','補例外情形。',
          '原則上不得蒐集、處理或利用，但法律明文規定或經當事人書面同意等情形除外'),
        F('AI 能協助醫師提高效率','SOURCE_EVIDENCE','claim_without_source',
          '提高效率的說法未附研究或官方出處。','low','no',
          null,'no','clarify','可改為描述用途而非成效。',
          'AI 可用於協助醫師判讀影像等工作'),
        F('就能更安心地享受科技帶來的便利','MEDICAL_INTERPRETATION','overreassurance',
          '容易讓讀者以為確認兩點就沒有風險，AI 判讀仍可能出錯。','low','no',
          null,'no','revise','避免過度安心的表述。',
          '就能降低部分使用風險'),
        F('到114年3月底已核准180張AI醫療器材許可證','DATA_FACTUAL_ACCURACY','count_definition',
          '180張是許可證張數，不等於產品或應用種類數，文中未說明，讀者可能誤解為180種AI醫療服務。','low','no',
          null,'no','clarify','標明為許可證張數。',
          '到114年3月底已核准180張應用AI技術的醫療器材許可證（以許可證張數計）')
      ],
      card:[
        F('多非醫材','TERMINOLOGY_LANGUAGE','overgeneralization',
          '卡面未說明判斷依據，部分具診斷宣稱的App仍屬醫療器材軟體。','low','no',
          null,'no','clarify','補判斷原則。',
          '宣稱診斷才算醫材'),
        F('上食藥署查核准 AI 醫材清單','DATA_FACTUAL_ACCURACY','how_to_missing',
          '清單以 PDF 公布且只列 AI/ML 醫材，一般量測裝置應查醫療器材許可證資料庫，卡面未區分。','low','no',
          null,'no','clarify','補一般醫材查詢方式。',
          '上食藥署查醫療器材許可證')
      ]
    },
    title_alts:[
      'AI醫療怎麼管？認識智慧醫材查驗與健康資料保護',
      'AI醫生可信嗎？用健康App前先問自己2個問題',
      '數位健康時代：AI醫療器材管理與個資保護'
    ],
    card_title_alts:[
      ['AI 醫生可信嗎？','用健康 AI 前先看這些'],
      ['AI 是輔助不是醫生','看核准、顧個資'],
      ['健康 App 怎麼選','2 個問題先問清楚']
    ],
    data_addon:[
      '食藥署AI/ML醫材清單115年6月增列1筆國產、8月增列2筆輸入AI醫材。',
      '食藥署智慧醫材輔導計畫累計辦理人才訓練課程170餘場、培育約1萬人次。',
      '衛福部臨床AI取證驗證中心與食藥署合作，目標縮短AI醫療軟體取證時間。'
    ],
    cta:'下載健康App或使用AI健康服務前，先查是否為核准醫療器材，並讀過隱私權政策再決定是否提供資料。'
  });
})();
