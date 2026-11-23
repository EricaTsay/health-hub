/* v6 示範主題：慢性腎臟病（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計（2026-06-22 公布）與摘要表、國健署2025年世界腎臟日新聞稿（112年成人預防保健資料，查證時未找到2026年版）、
   工商時報2025-12-06（總統於台灣腎臟醫學會年會致詞之透析數字）。
   參考方向：健康智庫〈慢性腎臟病〉2023/02、〈3月10日世界腎臟日〉2022/03。 */
(function(){
  const REFS = [
    {title:'3成三高患者腎功能亮紅燈 掌握8招「腎」健康',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-81762-1.html'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'國人死亡人數連續3年下降 十大死因中6項死因人數、死亡率都減少（114年死因統計）',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'},
    {title:'賴總統：盼2035居家透析盛行率達18％',source:'工商時報',url:'https://www.ctee.com.tw/news/20251206700062-430101'}
  ];
  const TABLE = {headers:['護腎8招','怎麼做'], rows:[
    ['均衡飲食、飲水充足','多吃原型食物、少加工品；健康成人每日約2,000 c.c.水'],
    ['規律運動、控制體重','每週至少150分鐘中等費力活動，BMI 18.5-24'],
    ['定期量血壓722','連續7天、早晚各量1次、每次2遍，參考值小於120/80 mmHg'],
    ['戒菸保健康','可利用免付費戒菸專線0800-636363'],
    ['謹慎用藥','避免長期服用非類固醇消炎藥、止痛藥及來路不明的中藥'],
    ['控制三高','控制血糖、血壓、血脂，延緩慢性腎臟病發生']
  ]};
  const TAGS = ['慢性腎臟病','護腎8招','成人預防保健','三高','腎功能'];

  const DP_ABN = {id:'dp-ckd-abnormal', type:'data_scope', title:'「15%腎功能異常」的統計對象',
    desc:'15%是國健署112年成人預防保健「受檢者」中腎功能異常的比例，不是全國盛行率；受檢者多為主動健檢的成人，與全體國人不同。國內目前查無官方公布的全國慢性腎臟病盛行率，AI 沒有把它寫成全國數字。',
    current:'112年成健受檢者15%腎功能異常',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'15%', value:'112年成健受檢者', note:'國健署2025年世界腎臟日新聞稿（目前採用）'},
      {label:'約3成', value:'同時有三高的受檢者', note:'同一份新聞稿'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'慢性腎臟病早期沒症狀：護腎8招＋免費成健驗腎功能',
    update_date:'2026/11/20',
    intro:'慢性腎臟病早期通常沒有明顯症狀，糖尿病、高血壓和肥胖是主要原因。依國民健康署112年成人預防保健資料，15%的受檢者有腎功能異常；若同時有高血糖、高血壓、高血脂，異常比例更高達3成。衛生福利部114年死因統計中，腎炎、腎病症候群及腎病變死亡5,980人，居十大死因第8位，且較前一年增加5.3%。',
    sections:[
      {heading:'國健署護腎8招',format:'table',table:TABLE},
      {heading:'為什麼要定期驗腎功能',format:'bullets',items:[
        '國健署分析，有高血糖者約每10人就有3人腎功能異常，有高血壓者約每5人就有1人異常。',
        '114年起成人預防保健擴大：30-39歲每5年1次、40-64歲每3年1次、65歲以上每年1次，並新增「腎病識能衛教指導」，由醫師說明腎功能期別與尿蛋白狀況。',
        '總統2025年12月於台灣腎臟醫學會年會致詞指出，台灣透析人口超過9萬人，相關費用每年近新台幣500億元。'
      ]},
      {heading:'已經腎功能異常怎麼辦',format:'bullets',items:[
        '依醫師建議定期追蹤腎絲球過濾率與尿蛋白，了解自己的期別。',
        '積極控制血糖與血壓，並由醫師或營養師評估合適的飲食。',
        '就醫時主動告知腎功能狀況，避免自行購買止痛藥或來路不明的藥物。'
      ]}
    ],
    think_tank_view:'腎臟是「沉默的器官」，等到出現水腫、疲倦時往往已不是早期。最有效的做法其實很簡單：利用免費成健驗一次腎功能，看懂自己的腎絲球過濾率與尿蛋白，再把三高控制好、不亂吃藥。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'腎功能異常比例引自國健署並標明為112年成健受檢者，死亡人數引自衛福部114年死因統計，透析人數標明為總統致詞，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['112年成健受檢者15%腎功能異常（國健署）','114年腎病死亡5,980人、居第8位（衛福部死因統計）'],
      layout_reason:'先用表格列出護腎8招的具體做法，再說明為何要驗腎功能，最後給已異常者的照護重點。',
      tone:'專業易懂', tone_reason:'預防行動需要具體數值與做法。',
      to_verify:['透析人數「超過9萬人」為總統致詞內容，原始統計（健保署或台灣腎病年報）待核對','查證時未找到2026年世界腎臟日新聞稿']},
    decision_points:[DP_ABN]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'腎臟壞了不會痛！護腎8招，順便把免費健檢用起來',
    update_date:'2026/11/20',
    intro:'腎臟生病初期幾乎沒感覺，很多人是健檢才發現。國健署統計，112年做成人健檢的人當中，每100人就有15人腎功能異常；如果同時有三高，比例更高到3成。好消息是，從114年起，30歲以上就能做免費成人健檢，順便把腎功能也驗一驗。',
    sections:[
      {heading:'護腎8招，每天做得到',format:'table',table:TABLE},
      {heading:'為什麼要去驗？',format:'bullets',items:[
        '血糖高的人，每10人約有3人腎功能出問題；血壓高的人，每5人約有1人。',
        '免費成健：30-39歲每5年1次、40-64歲每3年1次、65歲以上每年1次，醫師還會說明你的腎功能在第幾期。',
        '台灣洗腎的人超過9萬人（總統2025年致詞），早點顧好腎，就少一分走到洗腎的機會。'
      ]},
      {heading:'驗出來有異常，別慌',format:'bullets',items:[
        '照醫師安排定期追蹤，看懂報告上的腎絲球過濾率和尿蛋白。',
        '把血糖、血壓顧好，飲食怎麼吃可以問營養師。',
        '止痛藥、偏方不要自己亂吃，看病時記得說自己腎功能不好。'
      ]}
    ],
    think_tank_view:'腎臟不會喊痛，所以更需要我們主動關心。翻翻自己上次健檢是什麼時候，符合資格就去做一次免費成健；家裡有三高的長輩，更要陪他們把報告看懂。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署與衛福部公開資料並標明年份，「每100人有15人」依15%換算，透析人數標明為總統致詞，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「腎臟不會痛」的生活語言帶出護腎8招、檢查與追蹤。', tone:'生活親切', tone_reason:'給一般民眾與家屬閱讀，鼓勵使用成健。', to_verify:['透析人數原始統計']},
    decision_points:[DP_ABN]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'慢性腎臟病：護腎8招，免費成健驗腎功能',
    update_date:'2026/11/20',
    intro:'112年成健受檢者15%腎功能異常，合併三高者達3成。114年腎病死亡5,980人，居十大死因第8位。',
    sections:[
      {heading:'護腎8招',format:'table',table:TABLE},
      {heading:'定期檢查',format:'bullets',items:[
        '30-39歲每5年、40-64歲每3年、65歲以上每年1次免費成健。',
        '成健新增腎病識能衛教。'
      ]},
      {heading:'異常時',format:'bullets',items:[
        '定期追蹤腎功能期別。',
        '控制血糖血壓。',
        '不自行服用止痛藥。'
      ]}
    ],
    think_tank_view:'腎病早期無症狀，定期檢查與控制三高是最有效的護腎策略。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署與衛福部公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為護腎8招、檢查、異常照護三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['15%為成健受檢者，非全國盛行率']},
    decision_points:[DP_ABN]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'慢性腎臟病', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'腎病早期沒症狀，三高族群更要驗', primary_visual:'15%', secondary_message:'合併三高者腎功能異常達 3 成', action_priority:'免費成健驗腎功能、護腎 8 招'},
    headline_hook:'腎臟壞了不會痛', headline_main:'護腎從這 4 件事開始', title_accent:'這 4 件事',
    hero_message:'每 100 人有 15 人', hero_support:'成健受檢者腎功能異常（國健署 112 年資料）',
    primary_stat:{value:'15%', label:'112 年成健受檢者腎功能異常', note:'國健署｜合併三高者約 3 成'},
    action_title:'護腎這樣做',
    action_cards:[
      {key:'驗', text:'善用免費成健，驗腎功能與尿蛋白'},
      {key:'控', text:'控制血糖、血壓、血脂'},
      {key:'藥', text:'不長期自行服用止痛藥、偏方'},
      {key:'喝', text:'飲水充足、均衡飲食、規律運動'}
    ],
    notice:'114 年腎病死亡 **5,980 人**，居十大死因第 8 位，較前一年增加 5.3%。',
    carousel_suggestion:{reason:'若想把風險、檢查與護腎方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'腎病不會痛', headline_main:'成健受檢者 15% 異常'},
      {layout_type:'knowledge', headline_hook:'免費成健', headline_main:'幾歲可以驗幾次'},
      {layout_type:'action', headline_hook:'護腎 8 招', headline_main:'每天做得到'}]},
    hashtags:['慢性腎臟病','護腎8招','成人預防保健','三高'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'screening-checkup',
    illustration:{topic:'慢性腎臟病預防', audience:'三高族群與中壯年', scene:'一位中年人在診間和醫師一起看健檢報告上的腎功能數值，桌上放著水杯',
      emotion:'安心、掌握', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged person reviewing kidney function results on a health check-up report with a doctor in a clinic, a glass of water on the desk, reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['112年成健受檢者15%腎功能異常（國健署）','114年腎病死亡5,980人（衛福部）'],
      layout_reason:'腎病的關鍵訊息是「早期無症狀、可預防」，選 action：4 個護腎行動當主角，異常比例與死亡人數退到背景。',
      tone:'專業易懂', tone_reason:'預防行動需具體。',
      to_verify:['15%為成健受檢者比例']},
    decision_points:[Object.assign({}, DP_ABN, {current:'15%｜112 年成健受檢者腎功能異常'})],
    content_check_note:'異常比例引自國健署並標明對象與年份，死亡人數引自衛福部114年死因統計，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'慢性腎臟病',
    collect:{
      summary:'腎病相關死亡2025年增加5.3%、居十大死因第8位；國健署成健資料顯示受檢者15%腎功能異常、合併三高者達3成，114年起成健擴大並新增腎病識能衛教，是兼具政策時機與預防價值的長期溝通議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'15%成健受檢者腎功能異常：依國健署112年成人預防保健資料，有高血糖者約每10人有3人異常、有高血壓者約每5人有1人異常，合併三高者達3成（統計對象為受檢者，非全國盛行率）。',tag:'官方統計',source:{name:'衛生福利部國民健康署：3成三高患者腎功能亮紅燈 掌握8招「腎」健康',url:'https://mohw.gov.tw/cp-16-81762-1.html'}},
        {item:'年度趨勢方向',desc:'腎病死亡人數增加5.3%：2025年（114年）腎炎、腎病症候群及腎病變死亡5,980人，較2024年5,679人增加，居十大死因第8位，為少數死亡人數上升的死因。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'30歲以上可做免費成健：2025年起成人預防保健擴大為30-39歲每5年1次、40-64歲每3年1次、65歲以上每年1次，並新增「腎病識能衛教指導」。',tag:'官方統計',source:{name:'衛生福利部國民健康署：3成三高患者腎功能亮紅燈 掌握8招「腎」健康',url:'https://mohw.gov.tw/cp-16-81762-1.html'}},
        {item:'好發族群年齡層',desc:'逾8成腎病死亡者為65歲以上：2025年腎病死亡5,168人，以65歲以上為主、占8成以上，糖尿病、高血壓與肥胖者為主要高風險族群。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}}
      ],
      product_view:['機會：慢性腎臟病進展到透析屬長期重大醫療負擔，可作為說明重大疾病與長期照護保障的情境。','機會：成健擴大與腎病識能衛教，適合結合健檢提醒、報告解讀等健康管理服務。','風險：避免以「洗腎」作為恐懼訴求，或暗示健康管理服務可預防疾病、保證理賠。'],
      marketing_view:['機會：3月世界腎臟日是固定溝通時點，「腎臟不會痛」是好懂的切入點。','機會：三高族群是核心對象，可與糖尿病、高血壓主題串連成系列內容。','風險：飲食建議因期別而異，避免給出一體適用的限制（如一律少喝水或少吃蛋白質）。'],
      alert_level:'medium',
      alert_reason:'腎病死亡人數逆勢上升，加上成健擴大剛上路，適合納入年度溝通規劃，3月世界腎臟日為重點檔期。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('15%的受檢者有腎功能異常','MEDICAL_INTERPRETATION','sample_not_population',
          '15%是成人預防保健受檢者的比例，受檢者多為主動健檢的成人，不能代表全國盛行率；文中未說明這個限制。','medium','no',
          null,'no','clarify','數字正確，屬統計對象說明。',
          '15%的受檢者有腎功能異常（此為健檢受檢者比例，非全國盛行率）'),
        F('台灣透析人口超過9萬人','SOURCE_EVIDENCE','secondary_citation',
          '數字引自總統於學會年會的致詞（媒體報導），沒有原始統計來源與資料年份。','medium','yes',
          '健保署或台灣腎病年報公布的透析人數與年份。','yes','confirm','數字可能正確，但屬二手引述。',
          null,['台灣洗腎的人超過9萬人']),
        F('較前一年增加5.3%','MEDICAL_INTERPRETATION','trend_cause_unstated',
          '只寫死亡人數增加，沒有說明可能與人口老化有關；讀者可能誤以為腎病「突然變嚴重」。死因摘要表顯示標準化死亡率增幅較小。','low','no',
          null,'no','clarify','數字正確，屬趨勢詮釋補充。',
          '較前一年增加5.3%（人口老化是可能原因之一，標準化死亡率增幅較小）'),
        F('由醫師或營養師評估合適的飲食','RISK_COMMUNICATION_SCOPE','advice_too_vague',
          '方向正確，但讀者可能自行上網找「腎病飲食」一律限蛋白或限水；建議點出飲食限制依期別而不同，不宜自行限制。','low','no',
          null,'no','clarify','屬補充提醒。',
          '由醫師或營養師依期別評估合適的飲食，不要自行一律限水或限蛋白質')
      ],
      card:[
        F('成健受檢者腎功能異常（國健署 112 年資料）','MEDICAL_INTERPRETATION','sample_not_population',
          '「每 100 人有 15 人」放大成標題級訊息，容易被讀成全國每 100 人有 15 人腎病。','medium','no',
          null,'no','clarify','卡面已寫受檢者，但字小、主句仍易誤讀。',
          '做成健的人當中有 15% 腎功能異常（國健署 112 年資料）'),
        F('較前一年增加 5.3%','MEDICAL_INTERPRETATION','trend_cause_unstated',
          '只寫死亡人數增加，未提人口老化因素，讀者可能過度解讀。','low','no',
          null,'no','clarify','數字正確。',
          '較前一年增加 5.3%（與人口老化相關）')
      ]
    },
    title_alts:[
      '慢性腎臟病早期沒症狀：護腎8招＋免費成健驗腎功能',
      '腎臟壞了不會痛！護腎8招，順便把免費健檢用起來',
      '三高族群3成腎功能異常：慢性腎臟病預防與追蹤'
    ],
    card_title_alts:[
      ['腎臟壞了不會痛','護腎從這 4 件事開始'],
      ['三高族群注意','3 成腎功能異常'],
      ['30 歲起免費成健','順便驗腎功能']
    ],
    data_addon:[
      '衛福部114年死因統計：腎炎、腎病症候群及腎病變死亡5,980人，男性3,033人、女性2,947人。',
      '45-64歲族群中，腎病死亡730人，居該年齡層死因第10位。',
      '總統2025年12月致詞：盼2035年居家透析盛行率達18%（台灣居家透析白皮書2026-2035）。'
    ],
    cta:'今天就查一下自己上次成人健檢的日期，符合資格就預約，並請醫師說明腎功能在第幾期。'
  });
})();
