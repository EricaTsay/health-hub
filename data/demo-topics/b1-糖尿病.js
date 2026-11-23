/* v6 示範主題：糖尿病（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-21。數據來源：衛福部2026-11-03〈「健康5行動 改變高血糖」20歲以上糖尿病盛行率為13.1%〉（2020-2024年國民營養健康調查、代謝症候群防治計畫成果）、
   衛福部114年死因統計摘要表（糖尿病死亡）。
   參考方向：健康智庫〈11月14日 世界糖尿病日〉2022/11、〈世界糖尿病日：關注糖友心理健康〉2024/11。 */
(function(){
  const REFS = [
    {title:'「健康5行動 改變高血糖」20歲以上糖尿病盛行率為13.1%',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-88356-1.html'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'國人死亡人數連續3年下降 十大死因中6項死因人數、死亡率都減少（114年死因統計）',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}
  ];
  const TABLE = {headers:['國健署健康5行動','怎麼做'], rows:[
    ['均衡飲食少負擔','少油、少鹽、少糖及高纖，多選全穀雜糧、蔬菜與適量水果，減少含糖飲料'],
    ['規律運動融日常','每週累積至少150分鐘中等強度身體活動，搭配每週至少2天肌力訓練'],
    ['管理代謝顧健康','控制體重，留意腰圍、血壓與血脂'],
    ['定期檢查早發現','善用成人預防保健，定期掌握血糖、血壓、血脂'],
    ['血糖變化常留意','血糖異常或糖尿病前期者，依醫療專業建議定期檢查']
  ]};
  const TAGS = ['糖尿病','糖尿病前期','血糖','世界糖尿病日','三高'];

  const DP_PREV = {id:'dp-dm-prev', type:'data_version', title:'糖尿病盛行率有兩期數字',
    desc:'國健署2026年世界糖尿病日公布2020-2024年國民營養健康調查，20歲以上糖尿病盛行率13.1%；前一期（2019-2023年）為12.8%。兩期調查年份重疊，AI 採用最新一期，沒有把差異解讀為明確上升趨勢。',
    current:'13.1%（2020-2024年國民營養健康調查）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'13.1%', value:'2020-2024年調查', note:'國健署2026年11月新聞稿（目前採用）'},
      {label:'12.8%', value:'2019-2023年調查', note:'前一期公布數字'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'20歲以上每8人約1人有糖尿病：國健署「健康5行動」改變高血糖',
    update_date:'2026/11/21',
    intro:'依國民健康署2020-2024年國民營養健康調查，臺灣20歲以上國人糖尿病盛行率為13.1%。衛生福利部114年死因統計中，糖尿病死亡10,524人，居十大死因第5位。2026年世界糖尿病日主題為「及早行動－防治糖尿病」，國健署提醒，血糖偏高、糖尿病前期或代謝症候群者，及早調整飲食、運動與體重，就有機會改變血糖走向。',
    sections:[
      {heading:'國健署健康5行動',format:'table',table:TABLE},
      {heading:'糖尿病前期可以逆轉',format:'bullets',items:[
        '糖尿病前期是指血糖已高於正常範圍，但尚未達糖尿病診斷標準。',
        '國健署代謝症候群防治計畫累計收案約67萬人，其中約16萬人符合糖尿病前期，經3次以上追蹤，約2.2萬人（14%）的糖化血色素已改善至正常範圍。',
        '國健署署長指出，糖尿病前期不代表一定會進展為糖尿病。'
      ]},
      {heading:'已經是糖尿病怎麼辦',format:'bullets',items:[
        '依醫囑服藥或注射，定期回診追蹤糖化血色素。',
        '同時控制血壓與血脂，並定期檢查腎功能、眼睛與足部。',
        '戒菸，維持規律運動與均衡飲食。'
      ]}
    ],
    think_tank_view:'糖尿病最值得把握的時間點是「前期」：血糖剛偏高時，飲食和運動的改變最有效。健檢報告上的空腹血糖或糖化血色素若被標紅字，別只是看看，把它當成開始調整生活的訊號。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率與計畫成果引自國健署2026年新聞稿並標明調查年份，死亡人數引自衛福部114年死因統計，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['20歲以上糖尿病盛行率13.1%（2020-2024年國民營養健康調查）','114年糖尿病死亡10,524人（死因統計）'],
      layout_reason:'先用表格列出國健署健康5行動，再說明糖尿病前期可以改善，最後給已確診者的照護重點。',
      tone:'專業易懂', tone_reason:'慢性病管理需要具體行動。',
      to_verify:['「定期檢查腎功能、眼睛與足部」未引用本次官方新聞稿']},
    decision_points:[DP_PREV]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'健檢血糖紅字別忽略！5個小行動把血糖拉回來',
    update_date:'2026/11/21',
    intro:'國健署最新調查，20歲以上的台灣人，每8人約有1人有糖尿病（13.1%）。114年有10,524人因糖尿病過世，是十大死因第5名。好消息是，如果只是血糖偏高的「糖尿病前期」，現在開始改變，很有機會把血糖拉回正常。',
    sections:[
      {heading:'國健署建議的5個行動',format:'table',table:TABLE},
      {heading:'真的有人改善了',format:'bullets',items:[
        '國健署的計畫追蹤了約16萬名糖尿病前期的人，其中約2.2萬人的糖化血色素回到正常。',
        '署長說，糖尿病前期不一定會變成糖尿病。',
        '關鍵是飲食、運動和體重，越早開始越好。'
      ]},
      {heading:'已經有糖尿病的人',format:'bullets',items:[
        '藥按時吃，定期回診看糖化血色素。',
        '血壓、血脂也要一起顧。',
        '戒菸、多走路、少喝含糖飲料。'
      ]}
    ],
    think_tank_view:'從今天起把手搖飲換成無糖茶、飯後散步十分鐘，這些小事累積起來，就是改變血糖的開始。也可以約家人一起做，互相提醒更容易堅持。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署與衛福部並標明年份，「每8人約1人」依13.1%換算，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以健檢紅字的情境切入，帶出可做的小行動。', tone:'生活親切', tone_reason:'給血糖偏高的上班族與家人閱讀。', to_verify:['換算值']},
    decision_points:[DP_PREV]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'糖尿病：盛行率13.1%，健康5行動控血糖',
    update_date:'2026/11/21',
    intro:'20歲以上糖尿病盛行率13.1%（2020-2024年調查）；114年糖尿病死亡10,524人，居十大死因第5位。',
    sections:[
      {heading:'健康5行動',format:'table',table:TABLE},
      {heading:'糖尿病前期',format:'bullets',items:[
        '約16萬名前期個案中，約2.2萬人糖化血色素改善至正常。',
        '前期不一定會進展為糖尿病。'
      ]},
      {heading:'確診者',format:'bullets',items:[
        '依醫囑治療、定期回診。',
        '同時控制血壓血脂。'
      ]}
    ],
    think_tank_view:'把握糖尿病前期，飲食、運動與體重管理越早開始越有效。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署與衛福部並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為行動、前期、確診三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['計畫成果為國健署公布']},
    decision_points:[DP_PREV]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'糖尿病', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'20 歲以上每 8 人約 1 人有糖尿病', primary_visual:'13.1%', secondary_message:'糖尿病前期及早行動可改善', action_priority:'健康 5 行動'},
    headline_hook:'血糖紅字別忽略', headline_main:'健康 5 行動改變高血糖', title_accent:'健康 5 行動',
    hero_message:'每 8 人約 1 人', hero_support:'20 歲以上糖尿病盛行率（2020–2024 年國健署調查）',
    primary_stat:{value:'13.1%', label:'20 歲以上糖尿病盛行率', note:'國健署 2020–2024 年國民營養健康調查'},
    action_title:'健康 5 行動',
    action_cards:[
      {key:'吃', text:'少油少鹽少糖高纖，少喝含糖飲料'},
      {key:'動', text:'每週 150 分鐘中強度＋2 天肌力'},
      {key:'檢', text:'善用成人預防保健定期驗血糖'},
      {key:'管', text:'控制體重，留意腰圍、血壓、血脂'}
    ],
    notice:'約 16 萬名糖尿病前期個案中，**約 2.2 萬人**糖化血色素改善至正常範圍。',
    carousel_suggestion:{reason:'若想把盛行率、前期與行動分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'糖尿病盛行率', headline_main:'20 歲以上 13.1%'},
      {layout_type:'knowledge', headline_hook:'糖尿病前期', headline_main:'不一定會變糖尿病'},
      {layout_type:'action', headline_hook:'健康 5 行動', headline_main:'改變高血糖'}]},
    hashtags:['糖尿病','糖尿病前期','血糖','三高'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'metabolic',
    illustration:{topic:'糖尿病前期改善', audience:'中壯年上班族', scene:'一位上班族飯後和同事一起散步，手上拿著無糖茶',
      emotion:'輕鬆、有活力', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker taking an after-meal walk with a colleague, holding an unsweetened tea, relaxed and energetic mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['20歲以上糖尿病盛行率13.1%（國健署2026年）','代謝症候群防治計畫成果'],
      layout_reason:'核心是「及早行動」，選 action：健康 5 行動中的 4 項當主角，盛行率放主數字，前期改善成果放提醒。',
      tone:'專業易懂', tone_reason:'行動需具體。',
      to_verify:['卡面僅列 4 項行動，第 5 項「血糖變化常留意」併入檢查']},
    decision_points:[Object.assign({}, DP_PREV, {current:'13.1%｜2020–2024 年調查'})],
    content_check_note:'盛行率與計畫成果引自國健署2026年新聞稿，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'糖尿病',
    collect:{
      summary:'國健署2026年公布20歲以上糖尿病盛行率13.1%，糖尿病居十大死因第5位；代謝症候群防治計畫顯示糖尿病前期及早介入可改善血糖，「及早行動、健康5行動」是11月世界糖尿病日的重點溝通議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'20歲以上糖尿病盛行率13.1%：依國健署2020-2024年國民營養健康調查，約每8人有1人罹患糖尿病，前一期（2019-2023年）為12.8%。',tag:'官方統計',source:{name:'衛生福利部國民健康署：健康5行動 改變高血糖',url:'https://mohw.gov.tw/cp-16-88356-1.html'}},
        {item:'年度趨勢方向',desc:'糖尿病死亡人數減少1.3%：2025年糖尿病死亡10524人，較2024年10,663人略減，居十大死因第5位，男性5,420人、女性5,104人。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'約2.2萬名糖尿病前期個案血糖改善：國健署代謝症候群防治計畫累計收案約67萬人，約16萬人符合糖尿病前期，經3次以上追蹤約14%糖化血色素改善至正常範圍。',tag:'官方統計',source:{name:'衛生福利部國民健康署：健康5行動 改變高血糖',url:'https://mohw.gov.tw/cp-16-88356-1.html'}},
        {item:'好發族群年齡層',desc:'65歲以上糖尿病死亡8601人：2025年糖尿病死亡以65歲以上為主，居該年齡層死因第5位，血糖偏高、糖尿病前期與代謝症候群者為重點預防族群。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}}
      ],
      product_view:['機會：糖尿病是常見慢性病，併發症（腎病、心血管、視網膜病變）可作為長期醫療與失能保障的溝通情境。','機會：血糖追蹤、飲食運動支持適合結合健康管理服務。','風險：糖尿病涉及核保，避免讓民眾因擔心核保而不敢檢查；不得暗示健康管理服務可保證逆轉。'],
      marketing_view:['機會：11月14日世界糖尿病日是固定檔期，「健檢紅字別忽略」貼近上班族。','機會：「前期可以改善」是正向、具行動力的訊息。','風險：避免以截肢、洗腎等恐懼畫面訴求。'],
      alert_level:'medium',
      alert_reason:'國健署2026年11月剛公布最新盛行率與世界糖尿病日主題，具時效溝通價值。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('約2.2萬人（14%）的糖化血色素已改善至正常範圍','MEDICAL_INTERPRETATION','denominator_unclear',
          '14%是以約16萬名前期個案為分母，但「經3次以上追蹤」才計入，實際完成追蹤人數未說明；讀者可能理解為參加計畫就有14%機會恢復正常。','medium','no',
          null,'no','clarify','數字引自國健署。',
          '約2.2萬人（占糖尿病前期個案14%）經3次以上追蹤後糖化血色素改善至正常範圍',['約2.2萬人的糖化血色素回到正常','約2.2萬人糖化血色素改善至正常']),
        F('定期檢查腎功能、眼睛與足部','SOURCE_EVIDENCE','advice_without_basis',
          '併發症追蹤建議未引用本次國健署新聞稿或其他官方資料。','low','yes',
          '國健署或糖尿病學會的併發症追蹤建議。','no','confirm','屬常見臨床建議。',
          null),
        F('每8人約有1人有糖尿病','DATA_FACTUAL_ACCURACY','derived_figure_unlabeled',
          '「每8人約1人」是由13.1%換算，且對象是20歲以上，文中未完整標示。','low','no',
          null,'no','clarify','換算正確（13.1%約1/7.6）。',
          '20歲以上的台灣人，每8人約有1人有糖尿病（依13.1%換算）'),
        F('現在開始改變，很有機會把血糖拉回正常','RISK_COMMUNICATION_SCOPE','overpromise',
          '「很有機會」可能誇大效果；國健署資料顯示約14%前期個案改善至正常，多數仍需持續努力。','medium','no',
          null,'no','revise','屬語氣調整。',
          '現在開始改變，有機會讓血糖改善')
      ],
      card:[
        F('**約 2.2 萬人**糖化血色素改善至正常範圍','MEDICAL_INTERPRETATION','denominator_unclear',
          '卡面未說明是經3次以上追蹤、占前期個案約14%。','low','no',
          null,'no','clarify','數字引自國健署。',
          '**約 2.2 萬人（14%）**經追蹤後糖化血色素改善至正常範圍'),
        F('每 8 人約 1 人','DATA_FACTUAL_ACCURACY','derived_figure_unlabeled',
          'hero 為換算值，未標「約」以外的換算說明。','low','no',
          null,'no','clarify','換算正確。',
          null)
      ]
    },
    title_alts:[
      '20歲以上每8人約1人有糖尿病：國健署「健康5行動」改變高血糖',
      '健檢血糖紅字別忽略！5個小行動把血糖拉回來',
      '糖尿病前期不一定變糖尿病：及早行動的5個方法'
    ],
    card_title_alts:[
      ['血糖紅字別忽略','健康 5 行動改變高血糖'],
      ['每 8 人約 1 人','有糖尿病'],
      ['糖尿病前期','及早行動可改善']
    ],
    data_addon:[
      '2026年世界糖尿病日主題：「及早行動－防治糖尿病」。',
      '45-64歲族群中，糖尿病死亡1,728人，居該年齡層死因第5位。',
      '國健署建議成人每週至少150分鐘中等強度身體活動，並搭配每週至少2天肌力訓練。'
    ],
    cta:'今天就找出最近一次健檢報告，看看空腹血糖和糖化血色素有沒有紅字，有就從這週開始飯後散步。'
  });
})();
