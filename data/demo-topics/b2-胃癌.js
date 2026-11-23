/* v6 示範主題：胃癌（B2 癌症）
   查證日期：2026-11-20。數據來源：衛福部112年癌症登記報告附表（2025-12-30 公布）、衛福部114年死因統計摘要表（胃癌死亡時間序列）、
   衛福部2026-01-27〈預防胃癌再升級 115年起全面推動公費「胃幽門螺旋桿菌」檢測〉。
   參考方向：健康智庫〈胃癌〉2024/02。 */
(function(){
  const REFS = [
    {title:'預防胃癌再升級 115年起全面推動公費「胃幽門螺旋桿菌」檢測',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-85266-1.html'},
    {title:'112年國人十大癌症發生人數附表',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}
  ];
  const TABLE = {headers:['公費幽門桿菌檢測','內容'], rows:[
    ['對象','45-74歲民眾，終身1次'],
    ['開始時間','2026年1月1日起全國推動'],
    ['方式','糞便抗原檢測，到提供癌篩服務的院所領取採檢套組'],
    ['可與大腸癌篩檢併做','同時符合大腸癌篩檢資格者，2項篩檢1次完成'],
    ['陽性怎麼辦','無須驚慌，帶報告回診，依醫囑接受除菌治療或進一步檢查']
  ]};
  const TAGS = ['胃癌','幽門螺旋桿菌','癌症篩檢','公勺公筷','癌症防治'];

  const DP_HP = {id:'dp-gc-hp', type:'data_scope', title:'胃癌新發人數要不要含GIST',
    desc:'112年癌登附表的胃癌新發4,518人包含胃腸道基質細胞瘤（GIST）；國健署附註因GIST成因不同，另列不含GIST為3,551人。與幽門桿菌相關的是不含GIST的胃癌，AI 在文中兩者都標示。',
    current:'胃癌新發4,518人（不含GIST為3,551人）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'4,518人', value:'含GIST', note:'112年癌登附表主欄位（目前採用）'},
      {label:'3,551人', value:'不含GIST', note:'附表括號數字，標準化發生率7.6'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'胃癌8至9成與幽門桿菌有關：45-74歲公費檢測上路',
    update_date:'2026/11/20',
    intro:'國民健康署指出，胃癌約有8至9成是幽門螺旋桿菌感染引起，20歲以上國人感染盛行率達30%。依衛生福利部112年癌症登記報告，胃癌新發4,518人（不含胃腸道基質細胞瘤為3,551人），診斷年齡中位數69歲；114年死因統計中，胃癌死亡2,225人，年齡標準化死亡率由105年每十萬人6.1降至4.3。為進一步預防胃癌，國健署自2026年1月1日起，提供45-74歲民眾終身1次公費糞便抗原檢測。',
    sections:[
      {heading:'公費幽門桿菌檢測怎麼做',format:'table',table:TABLE},
      {heading:'早期發現與除菌的重要',format:'bullets',items:[
        '國健署指出，早期（0+1期）胃癌5年存活率約可達7成5以上，晚期（第4期）不到1成。',
        '檢測陽性者依醫囑接受除菌治療，並鼓勵同住家人一起檢測。',
        '除了糞便抗原檢測，也有碳13尿素呼氣試驗、血清檢測，以及胃鏡切片等方式。'
      ]},
      {heading:'保胃生活習慣',format:'bullets',items:[
        '用餐使用公筷母匙，避免共用杯子與餐具。',
        '避免嚼檳榔、戒菸、減少飲酒。',
        '避免生食及不潔食物，均衡飲食、規律運動。',
        '上腹痛、黑便、吞嚥困難或體重不明原因減輕，應盡快就醫。'
      ]}
    ],
    think_tank_view:'幽門桿菌常在家人之間傳染，檢測與除菌也最好「全家一起來」。這次公費檢測可以和大腸癌篩檢一次完成，45歲以上的家人領採便管時，記得兩項一起做。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'發生與死亡人數引自衛福部112年癌症登記與114年死因統計並標明年份，幽門桿菌相關比例與公費資格引自國健署2026年新聞稿，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['公費幽門桿菌檢測2026年上路（國健署2026-01）','112年胃癌新發4,518人（癌症登記附表）','114年死亡2,225人（死因統計）'],
      layout_reason:'先用表格說明公費檢測的資格與流程，再說明早期發現與除菌，最後給保胃生活習慣。',
      tone:'專業易懂', tone_reason:'新政策需要清楚的資格與流程。',
      to_verify:['5年存活率未標示資料年份']},
    decision_points:[DP_HP]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'45歲以上免費驗幽門桿菌！和大腸癌篩檢一次搞定',
    update_date:'2026/11/20',
    intro:'你知道嗎？國健署說，胃癌有8到9成和幽門螺旋桿菌有關，而20歲以上的人約3成都有感染。從2026年起，45到74歲的人可以免費驗1次，方式就是採便，還能和大腸癌篩檢一起做。',
    sections:[
      {heading:'免費檢測，這樣做',format:'table',table:TABLE},
      {heading:'驗出來陽性怎麼辦？',format:'bullets',items:[
        '不用緊張，帶報告去看醫生，照醫師說的吃藥除菌就好。',
        '幽門桿菌常在家人之間傳來傳去，家人也一起去驗比較安心。',
        '早期胃癌5年存活率有7成5以上，晚期不到1成，早發現差很多。'
      ]},
      {heading:'顧胃的小習慣',format:'bullets',items:[
        '吃飯用公筷母匙，杯子餐具不共用。',
        '不嚼檳榔、不抽菸、少喝酒。',
        '少吃生食，胃一直痛、大便黑黑的要去看醫生。'
      ]}
    ],
    think_tank_view:'很多家庭習慣一起夾菜、共用湯匙，這正是幽門桿菌容易傳染的地方。下次全家吃飯時，試試加一雙公筷吧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署與衛福部並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以新上路的免費檢測切入。', tone:'生活親切', tone_reason:'鼓勵中壯年與家人一起檢測。', to_verify:['存活率資料年份']},
    decision_points:[DP_HP]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'胃癌：45-74歲公費驗幽門桿菌，終身1次',
    update_date:'2026/11/20',
    intro:'胃癌8至9成與幽門桿菌有關。2026年起45-74歲可公費糞便抗原檢測，並可與大腸癌篩檢併做。',
    sections:[
      {heading:'公費檢測',format:'table',table:TABLE},
      {heading:'數據',format:'bullets',items:[
        '112年胃癌新發4,518人。',
        '114年胃癌死亡2,225人。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '陽性依醫囑除菌。',
        '使用公筷母匙。'
      ]}
    ],
    think_tank_view:'檢測、除菌加上公筷母匙，是預防胃癌最直接的方式。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署與衛福部並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為檢測、數據、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['新發人數含GIST']},
    decision_points:[DP_HP]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'胃癌', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'胃癌 8 至 9 成與幽門桿菌有關', primary_visual:'8–9 成', secondary_message:'45–74 歲公費檢測終身 1 次', action_priority:'驗幽門桿菌、陽性除菌、公筷母匙'},
    headline_hook:'45 歲起免費驗', headline_main:'幽門桿菌檢測 4 步驟', title_accent:'4 步驟',
    hero_message:'胃癌 8 至 9 成', hero_support:'與幽門螺旋桿菌感染有關（國健署）',
    primary_stat:{value:'8–9 成', label:'胃癌由幽門桿菌感染引起', note:'國健署 2026 年｜20 歲以上感染盛行率 30%'},
    action_title:'這樣做',
    action_cards:[
      {key:'領', text:'45–74 歲到癌篩院所領採檢套組'},
      {key:'併', text:'可與大腸癌篩檢一次完成'},
      {key:'除', text:'陽性依醫囑接受除菌治療'},
      {key:'筷', text:'公筷母匙，杯子餐具不共用'}
    ],
    notice:'早期胃癌 5 年存活率約 **7 成 5 以上**，晚期不到 1 成。',
    carousel_suggestion:{reason:'若想把成因、檢測與生活習慣分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'胃癌與幽門桿菌', headline_main:'8 至 9 成有關'},
      {layout_type:'action', headline_hook:'45 歲起免費驗', headline_main:'幽門桿菌檢測 4 步驟'},
      {layout_type:'action', headline_hook:'保胃五招', headline_main:'公筷母匙從餐桌做起'}]},
    hashtags:['胃癌','幽門螺旋桿菌','癌症篩檢','公勺公筷'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'nutrition',
    illustration:{topic:'幽門桿菌預防', audience:'家庭', scene:'一家人圍著餐桌吃飯，每道菜旁都放著公筷與公匙',
      emotion:'溫暖、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A family eating together around a dining table with serving chopsticks and spoons beside each dish, warm and reassuring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['幽門桿菌與胃癌關聯、公費檢測（國健署2026-01）'],
      layout_reason:'核心是新上路的公費檢測，選 action：4 個檢測與預防步驟當主角，成因比例放在主數字。',
      tone:'專業易懂', tone_reason:'新政策需清楚可行。',
      to_verify:['8至9成為國健署說法']},
    decision_points:[Object.assign({}, DP_HP, {current:'胃癌新發 4,518 人（不含 GIST 3,551 人）'})],
    content_check_note:'比例與資格引自國健署2026年新聞稿，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'胃癌',
    collect:{
      summary:'胃癌標準化死亡率十年下降，但仍每年新發逾4千人；國健署2026年1月起全國推動45-74歲公費幽門桿菌糞便抗原檢測，成為第6項公費癌症相關篩檢，是兼具新政策時機與家庭預防價值的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'逾8成胃癌與幽門桿菌有關：國健署指出胃癌約有8至9成由幽門桿菌感染引起，20歲以上國人幽門桿菌感染盛行率達30%，112年癌症登記胃癌新發4518人（不含胃腸道基質細胞瘤為3551人），診斷年齡中位數69歲。',tag:'官方統計',source:{name:'衛生福利部國民健康署：預防胃癌再升級 115年起全面推動公費「胃幽門螺旋桿菌」檢測',url:'https://mohw.gov.tw/cp-16-85266-1.html'}},
        {item:'年度趨勢方向',desc:'標準化死亡率十年下降約30%：2025年胃癌死亡2,225人，年齡標準化死亡率由2016年每十萬人6.1降至4.3。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'45-74歲終身1次公費檢測：2026年1月1日起全國推動糞便抗原檢測胃幽門螺旋桿菌，可與大腸癌篩檢併做，陽性者依醫囑除菌。',tag:'官方統計',source:{name:'衛生福利部國民健康署：預防胃癌再升級 115年起全面推動公費「胃幽門螺旋桿菌」檢測',url:'https://mohw.gov.tw/cp-16-85266-1.html'}},
        {item:'好發族群年齡層',desc:'早期5年存活率7成5以上：國健署指出早期（0+1期）胃癌5年存活率約可達7成5以上，晚期（第4期）不到1成，45歲以上為檢測對象。',tag:'官方統計',source:{name:'衛生福利部國民健康署：預防胃癌再升級 115年起全面推動公費「胃幽門螺旋桿菌」檢測',url:'https://mohw.gov.tw/cp-16-85266-1.html'}}
      ],
      product_view:['機會：胃癌治療以手術為主，可作為癌症與手術醫療保障的溝通情境。','機會：幽門桿菌檢測與除菌提醒，適合結合家庭健康管理服務。','風險：不得暗示除菌即可保證不罹患胃癌，或把檢測結果與承保條件連動。'],
      marketing_view:['機會：2026年新上路政策，「與大腸癌篩檢一次完成」是便利訴求。','機會：「公筷母匙」可延伸為家庭共餐的生活溝通。','風險：避免讓陽性民眾過度焦慮，宜強調「陽性無須驚慌、除菌即可」。'],
      alert_level:'high',
      alert_reason:'公費幽門桿菌檢測2026年1月全國上路，屬新政策推動期，時效性高。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('胃癌約有8至9成是幽門螺旋桿菌感染引起','MEDICAL_INTERPRETATION','attribution_as_causation',
          '「8至9成」是族群層次的歸因比例，讀者可能理解為感染幽門桿菌就有8至9成機率得胃癌；實際上多數感染者不會發展成胃癌。','medium','no',
          null,'no','clarify','比例引自國健署，屬表達方式調整。',
          '胃癌約有8至9成與幽門螺旋桿菌感染有關（感染者多數不會發展成胃癌，但除菌可降低風險）',['胃癌有8到9成和幽門螺旋桿菌有關','胃癌8至9成與幽門桿菌有關']),
        F('早期（0+1期）胃癌5年存活率約可達7成5以上','SOURCE_EVIDENCE','period_unstated',
          '存活率沒有標示資料年份與統計範圍，讀者無法判斷時點。','low','yes',
          '國健署胃癌期別5年存活率的資料年份。','no','confirm','數字引自國健署新聞稿，原文即未標示年份。',
          null,['早期胃癌5年存活率有7成5以上']),
        F('胃癌新發4,518人（不含胃腸道基質細胞瘤為3,551人）','TERMINOLOGY_LANGUAGE','term_unexplained',
          '「胃腸道基質細胞瘤」對一般讀者陌生，沒說明為何要分開計算（成因不同、與幽門桿菌無關）。','low','no',
          null,'no','clarify','數字正確。',
          '胃癌新發4,518人（其中胃腸道基質細胞瘤成因不同，扣除後為3,551人）'),
        F('照醫師說的吃藥除菌就好','RISK_COMMUNICATION_SCOPE','oversimplification',
          '「除菌就好」可能讓讀者以為除菌後就完全沒事；國健署原文是「依醫囑接受除菌治療或進一步檢查」，部分人可能需要胃鏡追蹤。','low','no',
          null,'no','clarify','屬語氣過度簡化。',
          '照醫師說的接受除菌治療，需要時再做進一步檢查')
      ],
      card:[
        F('胃癌由幽門桿菌感染引起','MEDICAL_INTERPRETATION','attribution_as_causation',
          '主數字標籤可能被讀成「感染者8至9成會得胃癌」。','medium','no',
          null,'no','clarify','比例引自國健署。',
          '胃癌與幽門桿菌感染有關的比例'),
        F('早期胃癌 5 年存活率約 **7 成 5 以上**，晚期不到 1 成。','SOURCE_EVIDENCE','period_unstated',
          '卡面存活率未標示資料來源與年份。','low','no',
          null,'no','clarify','數字引自國健署。',
          '早期胃癌 5 年存活率約 **7 成 5 以上**，晚期不到 1 成（國健署）。')
      ]
    },
    title_alts:[
      '胃癌8至9成與幽門桿菌有關：45-74歲公費檢測上路',
      '45歲以上免費驗幽門桿菌！和大腸癌篩檢一次搞定',
      '預防胃癌從餐桌開始：公筷母匙與幽門桿菌檢測'
    ],
    card_title_alts:[
      ['45 歲起免費驗','幽門桿菌檢測 4 步驟'],
      ['胃癌 8 至 9 成','與幽門桿菌有關'],
      ['保胃從餐桌開始','公筷母匙一起來']
    ],
    data_addon:[
      '114年死因統計：胃癌死亡男性1,318人、女性907人。',
      '112年胃癌標準化發生率每十萬人9.8人（不含GIST為7.6人），與111年持平。',
      '國健署：完成檢測後院所每案可獲450元補助，確認完成除菌另有追蹤獎勵。'
    ],
    cta:'家裡有45-74歲的家人，下次領大腸癌篩檢採便管時，提醒他一併做幽門桿菌檢測。'
  });
})();
