/* v6 示範主題：病人安全與醫療爭議處理（B11 第二輪擴充）
   查證日期：2026-11-23。數據來源：台灣病人安全通報系統（TPR）2024年第4季季報、衛福部〈立法院三讀通過醫療事故預防及爭議處理法〉（2022/05/31）、〈認識醫預法 數位課程上線〉（2024/04/25）、115～116年度醫療品質及病人安全工作目標（診所版）。
   參考方向：健康智庫病人安全系列4篇與醫療爭議處理文章（僅取架構）。 */
(function(){
  const REFS = [
    {title:'台灣病人安全通報系統 2024年第四季季報表',source:'衛生福利部病人安全資訊網',url:'https://www.patientsafety.mohw.gov.tw/files/file_pool/1/0p181384568501266131/2024%e5%b9%b4%e7%ac%ac%e5%9b%9b%e5%ad%a3%e5%ad%a3%e5%a0%b1%e8%a1%a8.pdf'},
    {title:'立法院三讀通過「醫療事故預防及爭議處理法」營造醫病和諧關係',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-69786-1.html'},
    {title:'認識「醫療事故預防及爭議處理法」 數位課程上線',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-78488-1.html'}
  ];
  const TABLE = {headers:['醫預法三大原則','民眾可以知道的事'], rows:[
    ['即時關懷','醫院應組成醫療事故關懷小組，99床以下醫院及診所可指定專業人員或委託專業團體'],
    ['調解先行','民、刑事醫療訴訟都須先經地方衛生局醫療爭議調解會調解，期間3個月、必要時可延長3個月'],
    ['事故預防','醫院建立不責難的病安通報機制，重大醫療事故須進行根因分析並通報主管機關'],
    ['陳述保護','關懷與調解過程中的陳述，不得採為訴訟證據或裁判基礎']
  ]};
  const TAGS = ['病人安全','醫療爭議','醫預法','用藥安全','預防跌倒'];

  const DP_TPR = {id:'dp-ps-tpr', type:'data_scope', title:'病安通報數字不等於全國事件數',
    desc:'TPR 為自願匿名通報系統，報表註明數據不代表全國醫療機構現況。AI 採用最新可取得的2024年第4季季報，未找到2024全年或2025年報。',
    current:'2024年第4季收案19,263件，藥物事件37.6%',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'19,263件', value:'2024年Q4', note:'TPR季報（目前採用）'},
      {label:'18,152件', value:'2024年Q2', note:'TPR季報；藥物37.9%、跌倒22.6%'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'看病也要顧安全：病人安全4重點與醫療爭議怎麼處理',
    update_date:'2026/11/23',
    intro:'台灣病人安全通報系統（TPR）2024年第4季共收案19,263件，其中藥物事件占37.6%、跌倒事件占24.1%、管路事件占11.5%。病人安全不只是醫院的事，病人與家屬主動說明用藥、確認身分，都能降低風險。萬一發生醫療爭議，《醫療事故預防及爭議處理法》自113年1月1日施行，以「即時關懷、調解先行、事故預防」處理。',
    sections:[
      {heading:'醫預法怎麼保障病人',format:'table',table:TABLE},
      {heading:'病人與家屬能做的4件事',format:'bullets',items:[
        '主動告知過敏史與正在使用的藥品，領藥時核對姓名與藥名。',
        '住院長輩起身前先坐穩，夜間開小燈，降低跌倒風險。',
        '對檢查、手術與治療有疑問就提問，確認自己理解風險與替代方案。',
        '注意手部衛生，探病時配合醫院感染管制規定。'
      ]},
      {heading:'發生醫療爭議時',format:'bullets',items:[
        '先向醫院的關懷小組或病人服務窗口反映，取得說明與病歷複製本。',
        '可向地方衛生局申請醫療爭議調解，調解成立送法院核定後具司法效果。',
        '調解期間以3個月為限，必要時可延長3個月。'
      ]}
    ],
    think_tank_view:'病人安全靠醫病雙方共同守護。醫預法把重點從「事後究責」轉向「即時溝通與預防」，民眾最有力的角色是當一個會發問、會核對的病人；真的有爭議時，先走關懷與調解，通常比直接訴訟更快釐清事實。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'通報件數引自TPR季報並標明季別，法規內容引自衛福部說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['TPR 2024年第4季收案19,263件（病人安全資訊網）','醫預法113年1月1日施行（衛福部）'],
      layout_reason:'先用表格說明醫預法三大原則，再給病人可做的事與爭議處理步驟。',
      tone:'專業易懂', tone_reason:'法規與流程需要準確。',
      to_verify:['TPR為自願通報，未有2024全年報','醫預法施行後的全國調解成立率未逐表核對，未採用']},
    decision_points:[DP_TPR]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'陪家人看病住院，這4件事讓醫療更安全',
    update_date:'2026/11/23',
    intro:'醫院每一季都會通報上萬件病人安全事件，2024年第4季就有19,263件，最多的是用藥問題，再來是跌倒。其實很多風險，病人和家屬多問一句、多看一眼就能避免。如果真的和醫院有爭議，113年起也有醫預法，先關懷、先調解，不必一開始就上法院。',
    sections:[
      {heading:'醫預法幫你做了什麼',format:'table',table:TABLE},
      {heading:'家屬陪病小提醒',format:'bullets',items:[
        '把過敏和正在吃的藥告訴醫師，拿藥時對一下名字和藥名。',
        '長輩下床先坐一下再站，晚上留一盞小燈。',
        '看不懂檢查或手術說明就問，問到懂為止。',
        '進出病房記得洗手。'
      ]},
      {heading:'覺得醫療出了問題怎麼辦',format:'bullets',items:[
        '先找醫院的關懷小組或病人服務窗口，申請病歷。',
        '可以到地方衛生局申請調解，成立後具司法效果。',
        '調解最長3個月，需要時可再延3個月。'
      ]}
    ],
    think_tank_view:'陪病很累，但家屬的一雙眼睛很重要。多問、多核對，就是在幫家人守住安全。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據與法規內容引自病人安全資訊網與衛福部公開資料，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以陪病家屬視角整理安全提醒與爭議處理。', tone:'生活親切', tone_reason:'給家屬閱讀。', to_verify:['TPR為季報數字']},
    decision_points:[DP_TPR]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'病人安全與醫療爭議：重點整理',
    update_date:'2026/11/23',
    intro:'TPR 2024年第4季收案19,263件，藥物事件37.6%居首。醫預法113年1月1日施行，先關懷、先調解。',
    sections:[
      {heading:'醫預法原則',format:'table',table:TABLE},
      {heading:'病人可以做',format:'bullets',items:[
        '告知過敏與用藥，核對姓名藥名。',
        '預防跌倒，有疑問就提問。'
      ]},
      {heading:'爭議處理',format:'bullets',items:[
        '先找醫院關懷小組。',
        '向衛生局申請調解。'
      ]}
    ],
    think_tank_view:'醫病共同守護安全；有爭議先溝通、先調解。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據與法規內容引自官方公開資料，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為原則、病人行動、爭議處理。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:['TPR為季報數字']},
    decision_points:[DP_TPR]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'病人安全與醫療爭議處理', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'用藥與跌倒是最常見的病安事件', primary_visual:'37.6%', secondary_message:'醫療爭議先關懷、先調解', action_priority:'多問、多核對'},
    headline_hook:'看病也要顧安全', headline_main:'病安事件前 3 名', title_accent:'前 3 名',
    hero_message:'每季上萬件通報', hero_support:'2024 年第 4 季 TPR 收案 19,263 件',
    knowledge_title:'最常見的病安事件', knowledge_note:'TPR 為自願通報，**不代表全國事件數**',
    knowledge_cards:[
      {label:'藥物事件', icon:'flask', lines:['占 37.6%','核對姓名與藥名']},
      {label:'跌倒事件', icon:'home', lines:['占 24.1%','起身先坐穩再站']},
      {label:'管路事件', icon:'check', lines:['占 11.5%','不自行拉扯管路']}
    ],
    primary_stat:{value:'19,263 件', label:'2024 年第 4 季病安通報', note:'台灣病人安全通報系統（TPR）季報'},
    secondary_stats:[
      {value:'113 年 1 月', label:'醫預法施行'},
      {value:'3 個月', label:'調解期限可延長'}
    ],
    action_title:'病人與家屬這樣做',
    action_cards:[
      {key:'說', text:'主動告知過敏史與正在用的藥'},
      {key:'對', text:'領藥、檢查前核對姓名'},
      {key:'問', text:'對治療有疑問就提問'},
      {key:'調', text:'有爭議先找關懷小組或衛生局調解'}
    ],
    carousel_suggestion:{reason:'若想把病安與爭議處理分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'病安事件', headline_main:'用藥與跌倒最常見'},
      {layout_type:'action', headline_hook:'陪病小提醒', headline_main:'多問、多核對'},
      {layout_type:'knowledge', headline_hook:'醫療爭議', headline_main:'先關懷、先調解'}]},
    hashtags:['病人安全','醫療爭議','醫預法','用藥安全'],
    sources:['衛生福利部','台灣病人安全通報系統'],
    illustration_category:'general',
    illustration:{topic:'病人安全', audience:'病人與陪病家屬', scene:'護理師在病床旁與病人和家屬一起核對藥袋上的姓名',
      emotion:'信任、專注', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A nurse at a hospital bedside checking the name on a medicine bag together with the patient and a family member, trustful and attentive, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['TPR 2024年第4季事件類別占比','醫預法施行日與調解期限（衛福部）'],
      layout_reason:'核心是「常見風險與怎麼防」，選 knowledge：3 大事件類別當主角，通報數與法規退到下方。',
      tone:'專業易懂', tone_reason:'需避免引發對醫療的不信任。',
      to_verify:['TPR為自願通報']},
    decision_points:[Object.assign({}, DP_TPR, {current:'19,263 件｜2024 年第 4 季病安通報'})],
    content_check_note:'事件占比引自TPR季報並標明季別，法規內容引自衛福部，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'病人安全與醫療爭議處理',
    collect:{
      summary:'台灣病人安全通報系統每季收案上萬件，用藥與跌倒事件最常見；《醫療事故預防及爭議處理法》113年1月1日施行，以即時關懷、調解先行與事故預防為原則，是醫病溝通與醫療保障長期適用的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'19263件病安通報：台灣病人安全通報系統2024年第4季共收案19,263件，系統為自願匿名通報，數據不代表全國醫療機構現況。',tag:'官方統計',source:{name:'病人安全資訊網：TPR 2024年第四季季報',url:'https://www.patientsafety.mohw.gov.tw/files/file_pool/1/0p181384568501266131/2024%e5%b9%b4%e7%ac%ac%e5%9b%9b%e5%ad%a3%e5%ad%a3%e5%a0%b1%e8%a1%a8.pdf'}},
        {item:'好發族群年齡層',desc:'37.6%為藥物事件：同季藥物事件7,239件居首，其次為跌倒事件24.1%、管路事件11.5%。',tag:'官方統計',source:{name:'病人安全資訊網：TPR 2024年第四季季報',url:'https://www.patientsafety.mohw.gov.tw/files/file_pool/1/0p181384568501266131/2024%e5%b9%b4%e7%ac%ac%e5%9b%9b%e5%ad%a3%e5%ad%a3%e5%a0%b1%e8%a1%a8.pdf'}},
        {item:'政策動向',desc:'調解期間3個月：醫預法規定民、刑事醫療訴訟均應先經地方衛生局醫療爭議調解會調解，必要時可延長3個月，調解成立送法院核定具司法效果。',tag:'官方統計',source:{name:'衛生福利部：醫療事故預防及爭議處理法三讀通過',url:'https://www.mohw.gov.tw/cp-16-69786-1.html'}},
        {item:'年度趨勢方向',desc:'113年1月1日施行：衛福部說明醫預法以即時關懷、調解先行、事故預防為三大原則，醫院應建立不責難的病安通報與風險管控機制。',tag:'官方統計',source:{name:'衛生福利部：認識醫預法數位課程上線',url:'https://www.mohw.gov.tw/cp-16-78488-1.html'}}
      ],
      product_view:['機會：醫療事故與醫療爭議相關的醫師責任保險、病人意外保障可做制度說明。','機會：用藥核對、預防跌倒可作為住院保戶的關懷內容。','風險：避免暗示醫療機構不安全或鼓勵訴訟，內容應強調醫病合作。'],
      marketing_view:['機會：每年病人安全週是固定溝通檔期。','機會：「陪病家屬小提醒」貼近照顧者需求。','風險：通報數字容易被誤解為醫療疏失數，需說明為自願通報。'],
      alert_level:'low',
      alert_reason:'屬長期制度與醫療品質議題，醫預法已於113年施行，無急迫時效事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('醫院每一季都會通報上萬件病人安全事件','DATA_FACTUAL_ACCURACY','surveillance_coverage',
          'TPR 是自願匿名通報，並非所有醫院都通報，「醫院都會通報」的說法不精確，也可能讓讀者誤以為是疏失件數。','medium','no',
          null,'no','clarify','數字引自TPR季報。',
          '台灣病人安全通報系統每季收到上萬件自願通報'),
        F('其中藥物事件占37.6%、跌倒事件占24.1%、管路事件占11.5%','SOURCE_EVIDENCE','period_scope',
          '占比為單一季別（2024年第4季）的數據，句中延續上文未再標示，各季比例略有差異。','low','no',
          null,'no','clarify','前句已寫季別。',
          '其中藥物事件占37.6%、跌倒事件占24.1%、管路事件占11.5%（同季統計）'),
        F('通常比直接訴訟更快釐清事實','MEDICAL_INTERPRETATION','unsupported_claim',
          '此為觀點推論，文中無統計佐證調解比訴訟更快。','low','no',
          null,'no','clarify','可改為較保守的說法。',
          '也是法律規定訴訟前必經的程序',
          []),
        F('向衛生局申請調解。','COMPLETENESS','missing_key_info',
          '簡潔版未說明調解期限與調解成立的效力，讀者無法判斷流程。','low','no',
          null,'no','clarify','見醫預法說明。',
          '向衛生局申請調解（3個月內完成，成立後送法院核定）。')
      ],
      card:[
        F('不自行拉扯管路','MEDICAL_INTERPRETATION','oversimplified',
          '管路事件多為非計畫性移除，也與照護固定方式有關，卡面只提醒病人，可能讓讀者以為責任全在病人。','low','no',
          null,'no','clarify','屬表達問題。',
          '管路不適告知護理師'),
        F('2024 年第 4 季病安通報','DATA_FACTUAL_ACCURACY','surveillance_coverage',
          '主數字未說明為自願通報，讀者可能理解為醫療疏失件數。','low','no',
          null,'no','clarify','卡面下方已有提醒。',
          '2024 年第 4 季病安自願通報')
      ]
    },
    title_alts:[
      '看病也要顧安全：病人安全4重點與醫療爭議怎麼處理',
      '陪家人看病住院，這4件事讓醫療更安全',
      '醫預法上路後：先關懷、先調解的醫療爭議處理'
    ],
    card_title_alts:[
      ['看病也要顧安全','病安事件前 3 名'],
      ['陪病家屬必看','多問、多核對'],
      ['醫療爭議怎麼辦','先關懷、先調解']
    ],
    data_addon:[
      '115～116年度醫療品質及病人安全工作目標（診所版）包括有效溝通、用藥安全、手術安全、預防跌倒、感染管制與孕產兒安全。',
      '醫預法全文共45條，衛福部於107年提出草案。',
      '關懷與調解過程中的陳述、自主通報與根因分析內容，不得採為訴訟證據或裁判基礎。'
    ],
    cta:'下次陪家人看診或住院，記得帶一份用藥與過敏清單，領藥時一起核對姓名與藥名。'
  });
})();
