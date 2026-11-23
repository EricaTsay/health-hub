/* v6 示範主題：大腸息肉（B2 癌症，癌前病變）
   查證日期：2026-11-21。數據來源：國健署2024-03-21〈腸篩異常別僥倖 健康不是靠運氣〉（陽性者大腸鏡發現息肉與癌症比例、延遲大腸鏡風險）、
   國健署2024-06-19〈小心大腸癌上身 定期篩檢保平安〉、衛福部112年癌症登記新聞稿（2025-12-30，現行篩檢資格45-74歲與40-44歲家族史）。
   上述2024年新聞稿篩檢年齡為50-74歲（舊制），文中改用2025年12月公布的現行資格。
   參考方向：健康智庫〈大腸息肉〉2022/09。 */
(function(){
  const REFS = [
    {title:'腸篩異常別僥倖 健康不是靠運氣 大腸癌篩檢為陽性民眾，每20人中1人大腸癌！',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-6653-78095-1.html'},
    {title:'小心大腸癌上身 定期篩檢保平安',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-6650-79092-1.html'},
    {title:'公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-84987-1.html'}
  ];
  const TABLE = {headers:['延遲做大腸鏡','風險變化（國健署）'], rows:[
    ['超過6個月','罹癌風險增加30%'],
    ['超過1年','晚期大腸癌風險為2.8倍'],
    ['一直未確診','大腸癌死亡風險增加64%']
  ]};
  const TAGS = ['大腸息肉','大腸鏡','糞便潛血檢查','大腸癌篩檢','癌前病變'];

  const DP_AGE = {id:'dp-polyp-age', type:'data_version', title:'篩檢年齡已更新',
    desc:'國健署2024年新聞稿的公費糞便潛血檢查對象是50-74歲；2025年起已擴大為45-74歲，及40-44歲有家族史者（衛福部2025年12月新聞稿）。AI 文中採用現行資格，息肉與延遲風險數字則沿用2024年新聞稿。',
    current:'45-74歲，及40-44歲有家族史者，每2年1次',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'45–74 歲', value:'現行資格', note:'衛福部2025年12月新聞稿（目前採用）'},
      {label:'50–74 歲', value:'舊制資格', note:'國健署2024年新聞稿'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'糞便潛血陽性別僥倖：每2人約1人有息肉，大腸鏡可同時切除',
    update_date:'2026/11/21',
    intro:'大腸癌多由大腸息肉慢慢演變而來。國民健康署指出，大腸癌篩檢為陽性的民眾接受大腸鏡檢查後，平均每2人中有1人發現息肉、每20人中有1人罹患大腸癌。大腸鏡發現息肉時多可當下切除，不必另外手術；但若陽性後延遲做大腸鏡，風險會隨時間增加。現行公費糞便潛血檢查對象為45-74歲民眾，以及40-44歲有家族史者，每2年1次。',
    sections:[
      {heading:'陽性後拖越久，風險越高',format:'table',table:TABLE},
      {heading:'認識大腸息肉',format:'bullets',items:[
        '息肉是大腸黏膜長出的突起，部分可能隨時間演變成大腸癌。',
        '國健署指出，大部分息肉在大腸鏡發現的當下即可切除。',
        '即使重複做糞便潛血檢查結果為陰性，第一次陽性仍應接受大腸鏡確認。'
      ]},
      {heading:'做大腸鏡前後',format:'bullets',items:[
        '檢查前3日採低渣飲食，依醫師指示飲用清腸藥劑並補充大量水分。',
        '切除息肉後，依病理報告與醫師建議安排下次追蹤時間。',
        '多吃蔬果、規律運動、戒菸限酒，並持續定期篩檢。'
      ]}
    ],
    think_tank_view:'糞便潛血陽性不等於罹癌，反而是一個「把息肉在變成癌症前拿掉」的機會。最可惜的是陽性後一直拖著不做大腸鏡；只要清腸準備好，多數息肉當下就能處理。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'息肉比例與延遲風險引自國健署2024年新聞稿，篩檢資格引自衛福部2025年新聞稿，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['陽性者每2人1人有息肉、每20人1人有大腸癌（國健署2024）','延遲大腸鏡風險（國健署2024）','現行篩檢資格（衛福部2025-12）'],
      layout_reason:'先用表格呈現延遲大腸鏡的風險，再說明息肉與切除，最後給大腸鏡前後的具體做法。',
      tone:'專業易懂', tone_reason:'陽性後的行動需要清楚。',
      to_verify:['「每2人1人」未附原始研究樣本','延遲風險為國內實證估計，原始研究待查']},
    decision_points:[DP_AGE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'大腸癌篩檢陽性怎麼辦？別怕，做大腸鏡把息肉拿掉',
    update_date:'2026/11/21',
    intro:'糞便潛血檢查陽性，很多人第一個反應是害怕，然後就……拖著不去做大腸鏡。國健署說，陽性的人做完大腸鏡，平均每2人就有1人有息肉，但大部分息肉當下就能切掉，不用另外開刀。拖越久，風險反而越高。',
    sections:[
      {heading:'拖著不做大腸鏡，風險會增加',format:'table',table:TABLE},
      {heading:'息肉是什麼？',format:'bullets',items:[
        '大腸裡長出來的小突起，有些放著會慢慢變成癌症。',
        '做大腸鏡看到息肉，大多當場就能切掉。',
        '就算再驗一次是陰性，第一次陽性還是要做大腸鏡。'
      ]},
      {heading:'做大腸鏡這樣準備',format:'bullets',items:[
        '檢查前3天吃低渣飲食，少吃蔬菜水果和有籽的食物。',
        '照醫師說的喝清腸藥，多喝水。',
        '切完息肉，照醫師說的時間回去追蹤。'
      ]}
    ],
    think_tank_view:'陽性報告不是壞消息，而是提早處理的機會。家人收到陽性通知時，陪他一起約大腸鏡，比任何鼓勵都有用。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「陽性後害怕拖延」的常見情境切入。', tone:'生活親切', tone_reason:'給收到陽性通知的民眾與家人閱讀。', to_verify:['低渣飲食細節依各院衛教']},
    decision_points:[DP_AGE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'大腸息肉：篩檢陽性盡快做大腸鏡',
    update_date:'2026/11/21',
    intro:'篩檢陽性者做大腸鏡，每2人1人有息肉、每20人1人有大腸癌。延遲超過6個月，罹癌風險增加30%。',
    sections:[
      {heading:'延遲風險',format:'table',table:TABLE},
      {heading:'息肉',format:'bullets',items:[
        '多數可在大腸鏡當下切除。',
        '陽性即使複驗陰性仍應做大腸鏡。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '45-74歲每2年篩檢。',
        '陽性盡快大腸鏡。'
      ]}
    ],
    think_tank_view:'篩檢陽性後盡快做大腸鏡，是把息肉擋在癌症之前的關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為風險、息肉、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['延遲風險原始研究']},
    decision_points:[DP_AGE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'大腸息肉', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'篩檢陽性者每 2 人約 1 人有息肉', primary_visual:'每 2 人 1 人', secondary_message:'延遲大腸鏡，風險隨時間增加', action_priority:'陽性盡快做大腸鏡'},
    headline_hook:'篩檢陽性別僥倖', headline_main:'做大腸鏡 4 步驟', title_accent:'4 步驟',
    hero_message:'每 2 人約 1 人', hero_support:'篩檢陽性者做大腸鏡發現息肉（國健署）',
    primary_stat:{value:'30%', label:'陽性超過 6 個月未做大腸鏡，罹癌風險增加', note:'國健署 2024 年｜超過 1 年晚期風險 2.8 倍'},
    action_title:'陽性後這樣做',
    action_cards:[
      {key:'約', text:'陽性後盡快預約大腸鏡'},
      {key:'備', text:'檢查前 3 天低渣飲食、依指示清腸'},
      {key:'切', text:'發現息肉多可當下切除'},
      {key:'追', text:'依病理報告安排下次追蹤'}
    ],
    notice:'重複驗出陰性也不能取代大腸鏡，**第一次陽性就要確認**。',
    carousel_suggestion:{reason:'若想把息肉、風險與準備分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'篩檢陽性', headline_main:'每 2 人約 1 人有息肉'},
      {layout_type:'knowledge', headline_hook:'拖越久越危險', headline_main:'延遲大腸鏡的風險'},
      {layout_type:'action', headline_hook:'大腸鏡準備', headline_main:'低渣飲食、清腸'}]},
    hashtags:['大腸息肉','大腸鏡','糞便潛血檢查','癌前病變'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'screening-checkup',
    illustration:{topic:'大腸鏡檢查', audience:'45 歲以上中壯年', scene:'一位中年人在診間看著糞便潛血陽性報告，醫師在旁說明大腸鏡安排，家人陪同',
      emotion:'安心、有支持', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged person looking at a positive stool test report in a clinic while a doctor explains the colonoscopy plan and a family member accompanies them, reassuring and supportive, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['陽性後延遲大腸鏡風險（國健署2024）'],
      layout_reason:'核心是「陽性後盡快做大腸鏡」，選 action：4 個步驟當主角，延遲風險當主數字。',
      tone:'專業易懂', tone_reason:'行動需清楚。',
      to_verify:['延遲風險原始研究']},
    decision_points:[Object.assign({}, DP_AGE, {current:'45–74 歲每 2 年（現行資格）'})],
    content_check_note:'比例與風險引自國健署2024年新聞稿，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'大腸息肉',
    collect:{
      summary:'大腸癌多由息肉演變而來，國健署指出糞便潛血陽性者做大腸鏡，平均每2人有1人發現息肉、每20人有1人罹患大腸癌；陽性後延遲大腸鏡會增加風險，「陽性別僥倖、盡快做大腸鏡」是核心溝通訊息。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約5成陽性者發現息肉：國健署指出，大腸癌篩檢陽性民眾經大腸鏡檢查，平均每2人中1人有息肉、每20人中1人罹患大腸癌。',tag:'官方統計',source:{name:'衛生福利部國民健康署：腸篩異常別僥倖 健康不是靠運氣',url:'https://mohw.gov.tw/cp-6653-78095-1.html'}},
        {item:'年度趨勢方向',desc:'超過6個月未做大腸鏡罹癌風險增加30%：國健署引述國內資料，超過1年才做大腸鏡者晚期大腸癌風險為2.8倍，一直未確診者大腸癌死亡風險增加64%。',tag:'官方統計',source:{name:'衛生福利部國民健康署：腸篩異常別僥倖 健康不是靠運氣',url:'https://mohw.gov.tw/cp-6653-78095-1.html'}},
        {item:'政策動向',desc:'45-74歲每2年1次公費糞便潛血檢查：2025年起篩檢對象擴大為45-74歲民眾，及40-44歲有家族史者。',tag:'官方統計',source:{name:'衛生福利部：公布112年國人癌症登記資料分析結果',url:'https://mohw.gov.tw/cp-16-84987-1.html'}},
        {item:'好發族群年齡層',desc:'早期大腸癌5年存活率逾9成：國健署指出第0、1期大腸癌5年存活率均超過9成，第4期不到2成，息肉多可在大腸鏡當下切除。',tag:'官方統計',source:{name:'衛生福利部國民健康署：小心大腸癌上身 定期篩檢保平安',url:'https://mohw.gov.tw/cp-6650-79092-1.html'}}
      ],
      product_view:['機會：大腸鏡息肉切除屬常見門診或住院處置，可作為醫療保障的溝通情境。','機會：篩檢陽性追蹤提醒適合結合健康管理服務。','風險：不得暗示切除息肉即保證不罹癌，或將篩檢結果與承保條件連動。'],
      marketing_view:['機會：「陽性別僥倖」能針對篩檢後不追蹤的斷點溝通。','機會：可與大腸癌主題串連。','風險：避免讓陽性民眾過度恐慌，宜強調「多數是息肉、可當下處理」。'],
      alert_level:'low',
      alert_reason:'無新政策事件，屬大腸癌篩檢的延伸溝通，適合長期衛教。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('平均每2人中有1人發現息肉、每20人中有1人罹患大腸癌','SOURCE_EVIDENCE','sample_unstated',
          '比例引自國健署新聞稿，但未說明統計期間與樣本數；讀者無法判斷資料時點。','low','yes',
          '國健署篩檢陽性者大腸鏡結果的原始統計。','no','confirm','數字引自國健署。',
          null,['平均每2人就有1人有息肉','每2人1人有息肉、每20人1人有大腸癌']),
        F('超過6個月','MEDICAL_INTERPRETATION','relative_risk_unexplained',
          '表格中「增加30%」「2.8倍」「增加64%」是相對風險，讀者可能誤解為絕對機率。','low','no',
          null,'no','clarify','數字引自國健署。',
          null),
        F('部分可能隨時間演變成大腸癌','MEDICAL_INTERPRETATION','polyp_type_unstated',
          '未說明哪些息肉較可能癌化（如腺瘤性息肉），讀者可能以為所有息肉都會變癌或都不會。','low','no',
          null,'no','clarify','屬補充說明，息肉類型需依病理報告判斷。',
          '部分息肉（依病理類型而定）可能隨時間演變成大腸癌',['有些放著會慢慢變成癌症']),
        F('少吃蔬菜水果和有籽的食物','MEDICAL_INTERPRETATION','prep_detail_unsourced',
          '低渣飲食的具體內容未引用國健署說明，各院衛教細節不同。','low','yes',
          '各醫院大腸鏡前低渣飲食衛教。','no','confirm','屬常見衛教說法。',
          '依醫院提供的低渣飲食衛教準備')
      ],
      card:[
        F('陽性超過 6 個月未做大腸鏡，罹癌風險增加','MEDICAL_INTERPRETATION','relative_risk_unexplained',
          '主數字 30% 為相對風險增加，可能被誤讀為 30% 機率罹癌。','medium','no',
          null,'no','clarify','數字引自國健署。',
          '陽性超過 6 個月未做大腸鏡，罹癌風險相對增加'),
        F('篩檢陽性者做大腸鏡發現息肉（國健署）','SOURCE_EVIDENCE','sample_unstated',
          'hero 數字未標統計期間。','low','no',
          null,'no','clarify','引自國健署2024年新聞稿。',
          '篩檢陽性者做大腸鏡發現息肉（國健署 2024 年）')
      ]
    },
    title_alts:[
      '糞便潛血陽性別僥倖：每2人約1人有息肉，大腸鏡可同時切除',
      '大腸癌篩檢陽性怎麼辦？別怕，做大腸鏡把息肉拿掉',
      '拖越久風險越高：陽性後做大腸鏡的4個步驟'
    ],
    card_title_alts:[
      ['篩檢陽性別僥倖','做大腸鏡 4 步驟'],
      ['每 2 人約 1 人','有大腸息肉'],
      ['拖越久越危險','盡快做大腸鏡']
    ],
    data_addon:[
      '衛福部2025年12月：每2年1次糞便潛血檢查可降低40%大腸癌死亡、減少34%晚期發生。',
      '112年癌症登記：大腸癌新發19,074人，居癌症發生第2位。',
      '國健署：第2期大腸癌5年存活率尚達8成以上。'
    ],
    cta:'如果你或家人收到糞便潛血陽性通知，這週就預約大腸鏡，不要等。'
  });
})();
