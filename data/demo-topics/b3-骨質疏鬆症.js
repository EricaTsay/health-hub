/* v6 示範主題：骨質疏鬆症（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：衛福部／國健署世界骨質疏鬆日新聞稿（2024、2025）、國健署2013-2015年國民營養健康狀況變遷調查（DXA）、國人膳食營養素參考攝取量第八版。
   參考方向：健康智庫〈肌肉與骨骼健康－骨質疏鬆症〉2026/04/13。 */
(function(){
  const REFS = [
    {title:'及早存骨本 5招鞏固骨骼健康',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-84264-1.html'},
    {title:'掌握保骨3要訣 預防骨質疏鬆',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=18493'},
    {title:'刻「骨」銘心的愛-50歲以上12.3%的人有骨質疏鬆症 儘早存骨本降低未來骨折風險',source:'衛生福利部',url:'https://www.mohw.gov.tw/fp-16-14705-1.html'},
    {title:'你是骨質疏鬆症高危險群嗎？預防沈默的殺手',source:'衛生福利部',url:'https://www.mohw.gov.tw/fp-3159-23992-1.html'}
  ];
  const TABLE = {headers:['存骨5招','怎麼做'], rows:[
    ['均衡飲食','成人每日鈣1,000毫克、維生素D 15微克；乳品、高鈣豆製品、小魚乾、深綠色蔬菜'],
    ['規律運動','每週至少150分鐘，負重運動（健走、慢跑、爬樓梯）加肌力訓練'],
    ['適度日曬','每週2-3次、每次10-20分鐘，避開正午'],
    ['戒菸限酒','減少骨質流失'],
    ['維持理想體重','體重過輕者骨本儲備少，骨質容易偏低']
  ]};
  const TAGS = ['骨質疏鬆','存骨本','髖骨骨折','高齡健康','預防跌倒'];

  const DP_PREV = {id:'dp-op-prevalence', type:'data_scope', title:'骨鬆比例有兩組數據',
    desc:'國健署有兩組常被引用的數字：65歲以上「自述」骨鬆18.2%（2021年訪問調查），以及50歲以上以骨密度儀「實測」12.3%（2013-2015年調查）。年齡範圍與測量方式都不同，不宜互相比較，AI 沒有替你挑選。',
    current:'65歲以上自述有骨質疏鬆18.2%（2021年國民健康訪問調查）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'18.2%', value:'65歲以上・自述', note:'2021年國民健康訪問調查（目前採用）'},
      {label:'12.3%', value:'50歲以上・DXA實測', note:'2013-2015年國民營養健康狀況變遷調查；男8.6%、女15.5%'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'骨質疏鬆是無聲的殺手：存骨5招，及早預防骨折',
    update_date:'2026/11/20',
    intro:'依國民健康署2021年國民健康訪問調查，65歲以上國人自述有骨質疏鬆的比率為18.2%，將近每5人就有1人。骨質疏鬆初期幾乎沒有症狀，常在輕微跌倒或碰撞後骨折才發現；其中髖骨骨折最為嚴重，約有20~25%的機率會在一年內死亡。人體骨質約在30歲以前達到巔峰，預防應從年輕開始。',
    sections:[
      {heading:'國健署建議的存骨5招',format:'table',table:TABLE},
      {heading:'骨鬆為什麼要及早預防',format:'bullets',items:[
        '50歲以上國人以骨密度儀實測，12.3%有骨質疏鬆症（男性8.6%、女性15.5%），65歲開始女性比例高出男性一倍以上。',
        '曾發生骨鬆性骨折的人，第二次骨折的機率是沒有骨折過的人的兩倍。',
        '世界骨質疏鬆基金會指出，年輕時多增加10%骨密度，可延緩骨鬆發生達13年。'
      ]},
      {heading:'高風險族群要特別注意',format:'bullets',items:[
        '女性、年長者，以及停經或卵巢切除等雌激素分泌減少者。',
        '體重過輕、營養不均衡，或有骨質疏鬆家族史者。',
        '長期服用影響骨骼健康的特定藥物者，應與醫師討論骨骼健康評估。',
        '居家移除易絆倒的雜物、加強照明，降低跌倒與骨折風險。'
      ]}
    ],
    think_tank_view:'骨質疏鬆最大的風險不是「骨頭變薄」本身，而是它在骨折之前幾乎沒有警訊。骨本像存款，30歲以前存得越多、之後提領得越慢；而已經進入熟齡的人，重點則轉向維持肌力與預防跌倒。從今天起每天一杯乳品、每週三次健走，就是最實在的存骨行動。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率與營養建議量引自國健署並標明調查年份，國際數據標明出處為世界骨質疏鬆基金會，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['沿用步驟1洞察：65歲以上自述骨鬆18.2%（2021年國民健康訪問調查）','鈣與維生素D建議量取自國人膳食營養素參考攝取量第八版'],
      layout_reason:'骨鬆的重點是預防，先用表格列出存骨5招的具體量，再說明為何要及早預防，最後點出高風險族群。',
      tone:'專業易懂', tone_reason:'營養與運動建議需要具體份量與頻率。',
      to_verify:['「20~25%一年內死亡」出自國健署較早期新聞稿，是否有國內新資料','DXA實測盛行率為2013-2015年調查，尚無更新一期']},
    decision_points:[DP_PREV]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽跌一跤就骨折？存骨本5招，從今天開始',
    update_date:'2026/11/20',
    intro:'65歲以上的長輩，每5人就有將近1人自述有骨質疏鬆（國民健康署2021年調查為18.2%）。骨鬆平常不痛不癢，往往是跌一跤、撞一下骨折了才發現；如果是髖骨骨折，約有20~25%的機率會在一年內死亡。好消息是，骨本可以靠日常習慣慢慢存，越早開始越好。',
    sections:[
      {heading:'存骨本，5招就夠',format:'table',table:TABLE},
      {heading:'為什麼不能等？',format:'bullets',items:[
        '50歲以上用儀器實際量骨密度，每100人約有12人有骨鬆，女性比男性更多。',
        '骨折過一次的人，再骨折的機率是一般人的兩倍。',
        '年輕時多存10%骨密度，骨鬆可以晚13年報到（世界骨質疏鬆基金會）。'
      ]},
      {heading:'家裡誰要特別注意？',format:'bullets',items:[
        '停經後的媽媽、長輩，還有體重偏輕的人。',
        '家族裡有人骨鬆，或飲食長期不均衡。',
        '長期吃特定藥物的人，記得問醫師要不要評估骨骼健康。',
        '把家裡容易絆倒的東西收好、燈開亮一點，減少跌倒。'
      ]}
    ],
    think_tank_view:'骨鬆最可怕的地方，是它在骨折前完全不吭聲。陪爸媽每天喝一杯牛奶或吃一份豆腐、一起散步曬曬太陽，再把家裡走道整理乾淨，這些小事就是最好的保骨行動。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部與國健署公開資料並標明年份，「每100人約有12人」依12.3%換算，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家人照顧的情境帶出存骨5招與高風險族群。', tone:'生活親切', tone_reason:'給子女與熟齡讀者閱讀。', to_verify:['「20~25%一年內死亡」的資料年份']},
    decision_points:[DP_PREV]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'骨質疏鬆：存骨5招，預防骨折',
    update_date:'2026/11/20',
    intro:'65歲以上國人自述有骨質疏鬆的比率為18.2%。髖骨骨折約有20~25%的機率會在一年內死亡，存骨本要及早開始。',
    sections:[
      {heading:'存骨5招',format:'table',table:TABLE},
      {heading:'為何及早',format:'bullets',items:[
        '50歲以上骨密度實測12.3%有骨鬆。',
        '骨折過者再骨折機率為兩倍。'
      ]},
      {heading:'高風險族群',format:'bullets',items:[
        '停經女性、年長者、體重過輕者。',
        '有家族史或長期服用特定藥物者。',
        '居家防跌，降低骨折風險。'
      ]}
    ],
    think_tank_view:'骨鬆在骨折前幾乎沒有警訊；均衡飲食、規律負重運動與預防跌倒，是最有效的保骨策略。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部與國健署公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為存骨5招、為何及早、高風險族群三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['「20~25%一年內死亡」的資料年份']},
    decision_points:[DP_PREV]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'骨質疏鬆症', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'骨鬆沒有症狀，骨折了才發現', primary_visual:'18.2%', secondary_message:'髖骨骨折一年內死亡機率約 2 成', action_priority:'存骨 5 招'},
    headline_hook:'骨鬆是無聲的殺手', headline_main:'存骨本，從這 4 件事開始', title_accent:'這 4 件事',
    hero_message:'65 歲以上近 2 成', hero_support:'自述有骨質疏鬆（2021 年國健署調查）',
    primary_stat:{value:'18.2%', label:'65 歲以上自述有骨質疏鬆', note:'2021 年國民健康訪問調查'},
    action_title:'存骨本這樣做',
    action_cards:[
      {key:'吃', text:'每日鈣 1,000 毫克、維生素 D 15 微克'},
      {key:'動', text:'每週 150 分鐘負重運動加肌力訓練'},
      {key:'曬', text:'每週 2–3 次、每次 10–20 分鐘日曬'},
      {key:'戒', text:'戒菸限酒，維持理想體重'}
    ],
    notice:'曾骨折者再次骨折機率是**兩倍**，骨折後要積極治療並預防跌倒。',
    carousel_suggestion:{reason:'若想把風險數據與存骨方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'骨鬆有多常見', headline_main:'65 歲以上近 2 成'},
      {layout_type:'knowledge', headline_hook:'高風險族群', headline_main:'這些人要特別注意'},
      {layout_type:'action', headline_hook:'存骨本', headline_main:'從這 4 件事開始'}]},
    hashtags:['骨質疏鬆','存骨本','高齡健康','預防跌倒'],
    sources:['衛生福利部','衛生福利部國民健康署'],
    illustration_category:'bones-joints',
    illustration:{topic:'骨質疏鬆預防', audience:'熟齡長輩與家人', scene:'一位長者和成年子女在公園健走，陽光下手裡拿著水壺',
      emotion:'輕鬆、有活力', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult and their adult child brisk-walking together in a sunny park, holding water bottles, relaxed and energetic, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：65歲以上自述骨鬆18.2%（2021年調查）','營養建議量取自國人膳食營養素參考攝取量第八版'],
      layout_reason:'骨鬆的關鍵訊息是「可以預防」，選 action：插圖放大、4 個具體存骨行動當主角，盛行率退到下方當背景資訊。',
      tone:'專業易懂', tone_reason:'預防行動需要具體份量與頻率。',
      to_verify:['18.2%為自述比例，與DXA實測12.3%口徑不同']},
    decision_points:[Object.assign({}, DP_PREV, {current:'18.2%｜65 歲以上自述有骨質疏鬆（2021 年調查）'})],
    content_check_note:'盛行率與營養建議量引自國健署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'骨質疏鬆症',
    collect:{
      summary:'65歲以上國人近兩成自述有骨質疏鬆，骨鬆初期無症狀、常在骨折後才發現，髖骨骨折更與失能和死亡風險相關；國健署每年世界骨質疏鬆日持續推廣「存骨5招」，是高齡化社會值得長期溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'65歲以上自述骨鬆18.2%：依2021年國民健康訪問調查，65歲以上國人中自述有骨質疏鬆的比率為18.2%，近兩成。',tag:'官方統計',source:{name:'衛生福利部：及早存骨本 5招鞏固骨骼健康',url:'https://www.mohw.gov.tw/cp-16-84264-1.html'}},
        {item:'年度趨勢方向',desc:'50歲以上實測12.3%：2013-2015年以骨密度儀（DXA）量測，50歲以上12.3%有骨質疏鬆症（男8.6%、女15.5%），隨年齡增加並在65歲驟增，目前尚無更新一期的實測資料可比較趨勢。',tag:'官方統計',source:{name:'衛生福利部：50歲以上12.3%的人有骨質疏鬆症',url:'https://www.mohw.gov.tw/fp-16-14705-1.html'}},
        {item:'政策動向',desc:'每週運動至少150分鐘：國健署於2025年世界骨質疏鬆日推廣「存骨5招」（均衡飲食、規律運動、戒菸限酒、適度日曬、維持理想體重），並依國人膳食營養素參考攝取量建議成人每日鈣1,000毫克、維生素D 15微克。',tag:'官方統計',source:{name:'衛生福利部：及早存骨本 5招鞏固骨骼健康',url:'https://www.mohw.gov.tw/cp-16-84264-1.html'}},
        {item:'好發族群年齡層',desc:'髖骨骨折一年內死亡約2成（20~25%）：骨鬆常在輕微跌倒後才因骨折被發現，女性、年長者、停經或卵巢切除者、體重過輕、有家族史或服用特定藥物者為高風險族群。',tag:'官方統計',source:{name:'衛生福利部：50歲以上12.3%的人有骨質疏鬆症',url:'https://www.mohw.gov.tw/fp-16-14705-1.html'}}
      ],
      product_view:['機會：骨鬆性骨折（尤其髖骨骨折）常導致失能與長期照護需求，可連結失能與長照保障的必要性說明。','機會：骨密度追蹤、肌力訓練與居家防跌可作為熟齡保戶的健康管理服務。','風險：避免暗示保健食品或特定商品可預防骨折；營養建議應引用國健署建議量。'],
      marketing_view:['機會：每年10月20日世界骨質疏鬆日是固定溝通檔期，可結合「存骨5招」的具體份量做互動內容。','機會：子女世代是長輩居家防跌與營養的推動者，適合以「陪爸媽存骨本」切入。','風險：骨折與死亡率數字容易引發焦慮，宜以可做的預防行動收尾。'],
      alert_level:'low',
      alert_reason:'屬長期高齡健康議題，無急迫時效事件；適合在世界骨質疏鬆日（10月20日）前後與長輩照護主題一併溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('約有20~25%的機率會在一年內死亡','CURRENCY_TIMELINESS','source_year_unstated',
          '髖骨骨折一年內死亡率出自國健署較早期新聞稿（首發於2016年），文中未標示資料年份；另一份衛福部資料寫「20-24%」，數值略有差異。','medium','yes',
          '國內髖骨骨折一年內死亡率的最新研究或健保資料分析與年份。','yes','confirm','不同年份資料數值相近但不完全一致。',
          '約有2成的機率會在一年內死亡（國健署衛教資料）'),
        F('自述有骨質疏鬆的比率為18.2%','DATA_FACTUAL_ACCURACY','self_report_vs_measured',
          '18.2%是受訪者「自述」經醫師診斷，未經骨密度實測，可能低估未被診斷的人數。','low','no',
          null,'no','clarify','屬統計口徑說明，數字本身正確。',
          '自述經醫師診斷有骨質疏鬆的比率為18.2%'),
        F('年輕時多增加10%骨密度，可延緩骨鬆發生達13年','SOURCE_EVIDENCE','international_estimate',
          '此為世界骨質疏鬆基金會（IOF）的推估，屬模型估計，文中可補充為國際推估而非國人研究。','low','no',
          null,'no','clarify','數據出處已標示機構，僅需補充性質。',
          '年輕時多增加10%骨密度，可延緩骨鬆發生達13年（國際推估）'),
        F('長期服用影響骨骼健康的特定藥物者','TERMINOLOGY_LANGUAGE','vague_term',
          '「特定藥物」未舉例，讀者難以判斷自己是否屬於高風險族群。','low','no',
          null,'no','clarify','可請醫師或藥師確認個人用藥。',
          '長期服用影響骨骼健康的特定藥物（可詢問醫師或藥師）者',
          ['長期吃特定藥物的人','長期服用特定藥物者'])
      ],
      card:[
        F('65 歲以上自述有骨質疏鬆','DATA_FACTUAL_ACCURACY','self_report_vs_measured',
          '主數字為「自述」比例，卡面未說明口徑，讀者可能理解為實際罹病率。','low','no',
          null,'no','clarify','屬口徑說明。',
          '65 歲以上自述經診斷有骨鬆'),
        F('每日鈣 1,000 毫克、維生素 D 15 微克','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '此為一般成人建議攝取量，孕哺、高齡或已在治療中的個人需求可能不同，卡面未說明適用對象。','low','no',
          null,'no','clarify','建議量引自國人膳食營養素參考攝取量。',
          '成人每日鈣 1,000 毫克、維生素 D 15 微克')
      ]
    },
    title_alts:[
      '骨質疏鬆是無聲的殺手：存骨5招，及早預防骨折',
      '爸媽跌一跤就骨折？存骨本5招，從今天開始',
      '65歲以上近兩成有骨鬆：高風險族群與保骨行動一次看'
    ],
    card_title_alts:[
      ['骨鬆是無聲的殺手','存骨本，從這 4 件事開始'],
      ['爸媽跌一跤就骨折？','存骨 4 招一起做'],
      ['65 歲以上近 2 成','骨鬆預防行動清單']
    ],
    data_addon:[
      '2013-2015年骨密度實測：50歲以上12.3%有骨質疏鬆症，男性8.6%、女性15.5%。',
      '曾發生骨鬆性骨折者，第二次骨折機率是未曾骨折者的兩倍。',
      '人體骨質約在30歲以前達到巔峰，之後隨年齡逐漸流失。'
    ],
    cta:'這週就陪家中長輩檢查一次居家走道與照明，並把每天一杯乳品或一份高鈣豆製品排進三餐。'
  });
})();
