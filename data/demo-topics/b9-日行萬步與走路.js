/* v6 示範主題：日行萬步與走路（B9 飲食營養與運動）
   查證日期：2026-11-20。數據來源：Ding D. et al., Lancet Public Health 2025;10(8):e668–e681（每日步數統合分析，PubMed 40713949）、Paluch A.E. et al., Lancet Public Health 2022（15個世代研究）、國健署問答（每週150分鐘中等強度、可分次累積）、運動部全民運動署114年運動現況調查。
   注意：國內官方未查到每日步數建議值；步數研究皆為觀察性。
   參考方向：健康智庫〈走越多越健康？破解「日行萬步」迷思〉2026/04、〈每天多走路，健康更有益！〉2023/07。 */
(function(){
  const REFS = [
    {title:'Daily steps and health outcomes in adults: a systematic review and dose-response meta-analysis',source:'The Lancet Public Health (2025)',url:'https://pubmed.ncbi.nlm.nih.gov/40713949/'},
    {title:'Daily steps and all-cause mortality: a meta-analysis of 15 international cohorts',source:'The Lancet Public Health (2022)',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC9289978/'},
    {title:'每天要運動多久才會對體重控制有幫忙？',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=825&pid=14222'},
    {title:'114年運動現況調查成果發表 規律運動人口再增加',source:'運動部全民運動署',url:'https://www.sa.gov.tw/News_Content/362/20136'}
  ];
  const TABLE = {headers:['每日步數','研究怎麼說（與每天2,000步相比）'], rows:[
    ['約5,000-7,000步','全死因死亡風險下降的轉折區間，之後效益增加趨緩'],
    ['7,000步','全死因死亡風險低47%（HR 0.53）'],
    ['10,000步','對活動量較高的人仍是可行目標'],
    ['走路的強度','快走達中等強度，可計入每週150分鐘建議']
  ]};
  const TAGS = ['日行萬步','走路','步數','健走','身體活動'];

  const PRO = {
    content_type:'健康文章',
    title:'一定要日行萬步嗎？研究：每天7,000步就有明顯效益',
    update_date:'2026/11/20',
    intro:'「日行萬步」是很多人熟悉的目標，但不是官方的醫學建議。2025年刊登於《The Lancet Public Health》的統合分析整理57項研究，發現每日步數與全死因死亡風險呈非線性關係，約在每天5,000至7,000步出現轉折；與每天2,000步相比，每天7,000步的全死因死亡風險低47%。研究團隊認為，10,000步對活動量高的人仍可作為目標，7,000步則是許多人較實際可達成的目標。',
    sections:[
      {heading:'步數與健康的關係',format:'table',table:TABLE},
      {heading:'研究的限制',format:'bullets',items:[
        '多數結果的證據確定性為中等，跌倒等部分結果的證據確定性很低。',
        '屬觀察性研究，仍可能有其他生活因素影響，顯示的是關聯而非因果。',
        '研究缺乏依年齡分組的分析，年長者與年輕人適合的步數可能不同。'
      ]},
      {heading:'走路這樣做更有效',format:'bullets',items:[
        '從目前的步數每天多走一點，逐步增加，不必一次衝到一萬步。',
        '把部分走路變成快走：能說話但不能唱歌，就是中等強度。',
        '國健署建議中等強度運動可分次累積，每週達150分鐘。',
        '搭配每週2次肌力訓練，效益更完整。'
      ]}
    ],
    think_tank_view:'步數是好用的工具，但不該變成壓力。對久坐的人來說，從每天3,000步提高到5,000、7,000步，效益可能比從一萬步拚到一萬五更明顯。比起追求數字，持續走、走快一點，才是重點。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'步數研究引自Lancet Public Health原文並說明研究性質與限制，國內建議引自國健署，未使用療效保證用語，未涉及特定計步器商品。',
    ai_rationale:{basis:['7,000步與全死因死亡風險低47%相關（Ding et al., 2025）','國健署每週150分鐘中等強度建議'],
      layout_reason:'先用表格整理不同步數的研究發現，再說明限制，最後給循序漸進的走路方法。',
      tone:'專業易懂', tone_reason:'需破除「一定要一萬步」的迷思並說明證據強度。',
      to_verify:['國內官方未有每日步數建議值']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'走不到一萬步也沒關係！每天7,000步就很棒',
    update_date:'2026/11/20',
    intro:'手機計步器每天提醒你還差幾步到一萬？其實「日行萬步」不是醫學規定的標準。2025年一篇整理了57項研究的大型分析發現，和每天只走2,000步的人比起來，每天走7,000步的人，死亡風險低了47%。走到一萬步當然很好，但7,000步對很多人來說更容易做到。',
    sections:[
      {heading:'走多少步有用？',format:'table',table:TABLE},
      {heading:'要知道的小事',format:'bullets',items:[
        '這類研究看的是「有關係」，不是保證。',
        '不同年紀適合的步數可能不一樣。',
        '有些結果的證據還不夠強。'
      ]},
      {heading:'這樣走更有感',format:'bullets',items:[
        '先比現在多走一點，再慢慢加。',
        '走快一點，走到能說話但唱不了歌。',
        '一週累積150分鐘快走就達標。',
        '再加上每週2次肌力訓練。'
      ]}
    ],
    think_tank_view:'別讓一萬步變成壓力。今天比昨天多走一點，就是進步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'研究數據引自Lancet Public Health並說明為關聯性，未使用療效保證用語，未涉及特定計步器商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以計步器提醒的生活情境切入。', tone:'生活親切', tone_reason:'給在意步數的一般讀者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'步數迷思：7,000步也有明顯效益',
    update_date:'2026/11/20',
    intro:'Lancet Public Health 2025統合分析：與每天2,000步相比，7,000步全死因死亡風險低47%（觀察性研究）。',
    sections:[
      {heading:'步數與效益',format:'table',table:TABLE},
      {heading:'限制',format:'bullets',items:[
        '屬關聯性研究。',
        '缺乏年齡分組分析。'
      ]},
      {heading:'做法',format:'bullets',items:[
        '逐步增加步數。',
        '部分改為快走。',
        '搭配肌力訓練。'
      ]}
    ],
    think_tank_view:'持續走、走快一點，比執著一萬步更重要。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'研究數據引自Lancet Public Health並說明性質，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為步數、限制、做法三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'日行萬步與走路', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'每天 7,000 步就有明顯效益', primary_visual:'7,000 步', secondary_message:'與每天 2,000 步相比全死因風險低 47%', action_priority:'逐步加步數、走快一點'},
    headline_hook:'一定要日行萬步？', headline_main:'每天 7,000 步就很有感', title_accent:'7,000 步',
    primary_stat:{kicker:'2025 年統合分析', value:'7,000 步', label:'全死因死亡風險低 47%', note:'Lancet Public Health｜與每天 2,000 步相比・觀察性研究'},
    secondary_stats:[
      {value:'5,000–7,000', label:'效益轉折的步數區間'},
      {value:'150 分鐘', label:'每週中等強度建議'}
    ],
    action_title:'走路這樣做',
    action_cards:[
      {key:'加', text:'比現在每天多走一點，逐步增加'},
      {key:'快', text:'走到能說話但不能唱歌'},
      {key:'累', text:'分次累積，每週達 150 分鐘'},
      {key:'肌', text:'每週再加 2 次肌力訓練'}
    ],
    carousel_suggestion:{reason:'若想把研究、迷思與走路方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'一定要日行萬步？', headline_main:'7,000 步就很有感'},
      {layout_type:'knowledge', headline_hook:'步數研究', headline_main:'看懂研究限制'},
      {layout_type:'action', headline_hook:'走路這樣做', headline_main:'逐步加、走快一點'}]},
    hashtags:['日行萬步','走路','步數','健走'],
    sources:['The Lancet Public Health','衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'健走', audience:'上班族與熟齡族', scene:'一位中年人戴著運動手錶在公園步道快走，手錶顯示步數',
      emotion:'輕鬆、有成就感', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged person brisk-walking on a park path wearing a fitness watch showing a step count, relaxed and accomplished, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['7,000步與全死因死亡風險低47%相關（Ding et al., 2025）'],
      layout_reason:'核心是一個破除迷思的數字，選 data：7,000 步當主角，轉折區間與國健署建議量放第二層，最後給走路行動。',
      tone:'專業易懂', tone_reason:'數字清楚但標註研究性質。',
      to_verify:['研究為觀察性']},
    decision_points:[],
    content_check_note:'研究引自Lancet Public Health並標註性質，國內建議引自國健署，未使用療效保證用語。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'日行萬步與走路',
    collect:{
      summary:'「日行萬步」並非官方醫學建議；2025年Lancet Public Health統合分析顯示每日步數約在5,000至7,000步出現效益轉折，7,000步與全死因死亡風險低47%相關。走路是最容易開始的身體活動，搭配快走與肌力訓練，可對應國健署每週150分鐘的建議。',
      objective_data:[
        {item:'盛行率／發生率',desc:'低47%：Ding等2025年刊登於Lancet Public Health的統合分析，與每天2,000步相比，每天7,000步的全死因死亡風險低47%（HR 0.53）。',tag:'市場觀察',source:{name:'Lancet Public Health：Daily steps and health outcomes in adults',url:'https://pubmed.ncbi.nlm.nih.gov/40713949/'}},
        {item:'年度趨勢方向',desc:'57項研究：該統合分析納入57項研究（35個世代），全死因死亡風險在每天約5,000至7,000步出現轉折，多數結果證據確定性為中等。',tag:'市場觀察',source:{name:'Lancet Public Health：Daily steps and health outcomes in adults',url:'https://pubmed.ncbi.nlm.nih.gov/40713949/'}},
        {item:'政策動向',desc:'每週150分鐘：國健署建議中等強度運動每週累積150分鐘，可將運動時間「分期付款、零存整付」，快走即屬中等強度活動。',tag:'官方統計',source:{name:'國健署：每天要運動多久才會對體重控制有幫忙？',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=825&pid=14222'}},
        {item:'好發族群年齡層',desc:'83.3%：運動部全民運動署114年調查，國人參與運動人口比例為83.3%，規律運動人口為35.6%，散步、健走是常見的入門活動。',tag:'官方統計',source:{name:'運動部全民運動署：114年運動現況調查',url:'https://www.sa.gov.tw/News_Content/362/20136'}}
      ],
      product_view:['機會：步數是最容易量化的健康行為，適合健康促進與步數挑戰活動。','機會：「7,000步」降低門檻，適合久坐族群。','風險：研究為觀察性，不得寫成「走7,000步可降低死亡率」的保證；避免推薦特定穿戴裝置。'],
      marketing_view:['機會：「破解日行萬步迷思」具話題性。','機會：可結合公司或社群的團體步數挑戰。','風險：避免讓步數變成焦慮或比較。'],
      alert_level:'low',
      alert_reason:'屬長期健康行為議題；2025年新研究帶動討論，可持續溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('每天走7,000步的人，死亡風險低了47%','LEGAL_COMPLIANCE','efficacy_overstatement',
          '口語版省略了「相關」與觀察性研究的前提，容易被讀成走7,000步就能降低近一半死亡風險。','medium','no',
          null,'no','revise','原研究為關聯性結果。',
          '每天走7,000步的人，死亡風險比較低（研究顯示兩者相關）'),
        F('「日行萬步」是很多人熟悉的目標，但不是官方的醫學建議','SOURCE_EVIDENCE','unsourced_claim',
          '「不是官方建議」的說法未附出處或說明查證範圍（國健署、WHO均未訂步數建議）。','low','no',
          null,'no','clarify','屬出處完整度。',
          '「日行萬步」是很多人熟悉的目標，但國健署與世界衛生組織目前都沒有訂定每日步數建議值',
          ['其實「日行萬步」不是醫學規定的標準']),
        F('7,000步則是許多人較實際可達成的目標','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '研究缺乏年齡分組分析，對年長者或行動不便者，7,000步未必適合作為個人目標。','low','no',
          null,'no','clarify','研究限制已在後段提及，但結論句未呼應。',
          '7,000步則是許多人較實際可達成的目標（年長或行動不便者可依自身狀況調整）',
          ['7,000步對很多人來說更容易做到'])
      ],
      card:[
        F('全死因死亡風險低 47%','LEGAL_COMPLIANCE','efficacy_overstatement',
          '主數字標籤以效果語氣呈現，雖註明觀察性研究，仍易被誤讀為保證。','medium','no',
          null,'no','revise','屬法遵風險表達。',
          '與較低全死因死亡風險相關'),
        F('效益轉折的步數區間','DATA_FACTUAL_ACCURACY','definition_unstated',
          '「轉折」指風險下降曲線趨緩的區間，卡面未說明，讀者可能誤解為超過就沒效益。','low','no',
          null,'no','clarify','屬用語說明。',
          '風險下降趨緩的步數區間')
      ]
    },
    title_alts:[
      '一定要日行萬步嗎？研究：每天7,000步就有明顯效益',
      '走不到一萬步也沒關係！每天7,000步就很棒',
      '步數與健康的關係：2025年統合分析一次看'
    ],
    card_title_alts:[
      ['一定要日行萬步？','每天 7,000 步就很有感'],
      ['走不到一萬步？','先從多走一點開始'],
      ['步數研究','5,000–7,000 步是轉折']
    ],
    data_addon:[
      '2022年Lancet Public Health統合15個世代研究：步數最高四分位者全死因死亡風險比最低者低（HR 0.47）。',
      '2025年統合分析也涵蓋心血管疾病、癌症、第2型糖尿病、失智、憂鬱與跌倒等結果。',
      '國健署建議中等強度運動可分次累積，每週達150分鐘。'
    ],
    cta:'看看手機上這週的平均步數，下週每天多走1,000步，並把其中一段改成快走。'
  });
})();
