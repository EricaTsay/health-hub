/* v6 示範主題：長者跌倒預防（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：國健署「防跌三步」新聞稿（2025/02/18，引110年國民健康訪問調查、112年死因統計）、
   國健署常見問答〈長者跌倒的問題真的很嚴重嗎？〉（2026/04/27，引113年死因統計）、衛福部114年死因統計表40（跌倒(落)）。
   與「髖部骨折」區隔：本題聚焦日常防跌行動（防跌三步、居家環境、長者量六力），不談骨折治療。
   參考方向：健康智庫〈新年到！居家防跌 陪長輩動起來〉2025/01、〈病人安全守護－預防跌倒〉2025/09。 */
(function(){
  const REFS = [
    {title:'「防跌三步」守護長者安全',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18870'},
    {title:'長者跌倒的問題真的很嚴重嗎？我們該如何預防長輩跌倒？',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=807&pid=20033'},
    {title:'114年死因統計結果分析',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}
  ];
  const TABLE = {headers:['防跌三步','怎麼做'], rows:[
    ['充足營養、規律運動','吃夠熱量與蛋白質，定期運動與肌力訓練，增加平衡感'],
    ['慢性病管理、定期量測','定期量血壓、血糖、血脂，避免頭暈、失去平衡'],
    ['用藥安全、自我評估','看診帶藥單請醫師評估用藥，至少每半年做一次長者功能評估']
  ]};
  const TAGS = ['預防跌倒','防跌三步','長者量六力','高齡健康','居家安全'];

  const DP_RATE = {id:'dp-fall-rate', type:'data_scope', title:'跌倒死亡率有兩個年份',
    desc:'國健署2025年新聞稿引用112年死因統計（65歲以上跌倒死亡每10萬人26.4人），2026年常見問答改引113年（每十萬人25.2人）。AI 採用較新的113年數字；114年死因摘要表只公布全年齡跌倒（落）死亡1,632人，未列65歲以上跌倒死亡率。',
    current:'65歲以上跌倒死亡每十萬人25.2人（113年死因統計）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'25.2人', value:'113年・65歲以上', note:'國健署常見問答2026/04/27（目前採用）'},
      {label:'26.4人', value:'112年・65歲以上', note:'國健署「防跌三步」新聞稿2025/02/18'},
      {label:'1,632人', value:'114年・全年齡死亡人數', note:'衛福部114年死因統計表40'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'長者防跌三步：營養運動、慢病管理、用藥評估，守住行動力',
    update_date:'2026/11/20',
    intro:'依國民健康署110年國民健康訪問調查，每6位長者就有1位曾經跌倒，每12位就有1位因跌倒就醫。依113年死因統計，跌倒是65歲以上長者事故傷害死亡原因的第二位，每十萬人有25.2人，僅次於交通事故。跌倒可能造成骨折、長期臥床，甚至死亡，但多數風險可以透過日常行動降低。國健署建議長者落實「防跌三步」，並搭配居家環境改善。',
    sections:[
      {heading:'國健署「防跌三步」',format:'table',table:TABLE},
      {heading:'居家環境這樣改',format:'bullets',items:[
        '保持光線明亮、地面乾燥，收好電線與雜物。',
        '浴室、樓梯加裝穩固扶手，座椅選有扶手的款式。',
        '起身動作放慢，穿著合適的防滑鞋。'
      ]},
      {heading:'每半年「長者量六力」',format:'bullets',items:[
        '國健署參考WHO長者整合式照護（ICOPE）指引，評估認知、行動、營養、視力、聽力及憂鬱（情緒）六大能力。',
        '65歲以上建議至少每半年評估一次，覺得身體狀況變差時也可隨時自我檢測。',
        '可加入國健署LINE官方帳號「@hpaicope」，取得檢測、轉介與資源地圖。'
      ]}
    ],
    think_tank_view:'防跌不是叫長輩「少動一點」，反而是要多動：肌力與平衡感是最好的防跌裝備。國健署統計65歲以上長者85%至少有一項慢性疾病，血壓、血糖控制與用藥安全也直接影響跌倒風險。把運動、慢病管理和每半年一次的六力評估排進行事曆，比任何事後補救都有效。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'跌倒比例標明國健署110年調查，死亡率標明113年死因統計，建議做法引自國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['每6位長者1位跌倒、每12位1位就醫取自國健署2025/02/18新聞稿（110年國民健康訪問調查）','每十萬人25.2人取自國健署2026/04/27常見問答（113年死因統計）'],
      layout_reason:'防跌的重點是可執行的行動，先以表格整理防跌三步，再補居家環境與長者量六力。',
      tone:'專業易懂', tone_reason:'給長者與照顧者具體可行的步驟。',
      to_verify:['每6位長者1位跌倒為110年調查，下一期尚未公布','「85%至少有一項慢性疾病」新聞稿未寫調查年份']},
    decision_points:[DP_RATE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'陪爸媽動起來！3步驟預防跌倒，居家這樣改',
    update_date:'2026/11/20',
    intro:'國民健康署110年調查發現，每6位長輩就有1位曾經跌倒，每12位就有1位因為跌倒去看醫生。依113年統計，跌倒是65歲以上長輩意外死亡的第二大原因。別擔心，國健署整理了「防跌三步」，加上家裡小小的改變，就能讓爸媽走得更穩。',
    sections:[
      {heading:'防跌三步驟',format:'table',table:TABLE},
      {heading:'家裡這樣改',format:'bullets',items:[
        '燈要夠亮、地板保持乾、電線雜物收乾淨。',
        '浴室和樓梯裝扶手，椅子挑有扶手的。',
        '起床、起身慢慢來，穿防滑的鞋子。'
      ]},
      {heading:'每半年量一次六力',format:'bullets',items:[
        '「長者量六力」檢查記憶、走路、營養、看、聽和心情。',
        '65歲以上至少每半年做一次，覺得不對勁也可以隨時測。',
        '加國健署LINE「@hpaicope」，就能自己在家測。'
      ]}
    ],
    think_tank_view:'很多長輩跌倒後怕家人擔心而不說。下次回家，陪爸媽一起散散步、量量血壓，再把家裡走一圈看看哪裡容易絆倒，就是最實在的孝心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以子女陪伴的角度整理防跌行動。', tone:'生活親切', tone_reason:'給子女與熟齡讀者閱讀。', to_verify:['110年調查的下一期資料']},
    decision_points:[DP_RATE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'長者防跌三步：營養運動、慢病管理、用藥評估',
    update_date:'2026/11/20',
    intro:'每6位長者就有1位曾經跌倒（國健署110年調查）。跌倒是65歲以上事故傷害死因第二位，防跌要從日常做起。',
    sections:[
      {heading:'防跌三步',format:'table',table:TABLE},
      {heading:'居家環境',format:'bullets',items:[
        '光線明亮、地面乾燥、收好雜物。',
        '浴室樓梯裝扶手，穿防滑鞋。'
      ]},
      {heading:'定期評估',format:'bullets',items:[
        '每半年做一次長者量六力。'
      ]}
    ],
    think_tank_view:'肌力與平衡是最好的防跌裝備，慢病控制與用藥安全同樣關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為防跌三步、居家、評估三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['110年調查的下一期資料']},
    decision_points:[DP_RATE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'長者跌倒預防', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'每 6 位長者就有 1 位曾跌倒', primary_visual:'每 6 位 1 位', secondary_message:'跌倒是長者事故死因第 2 位', action_priority:'防跌三步'},
    headline_hook:'長輩跌倒不是小事', headline_main:'防跌從這 4 件事做起', title_accent:'這 4 件事',
    hero_message:'每 6 位長者就有 1 位', hero_support:'曾經跌倒（國健署 110 年國民健康訪問調查）',
    primary_stat:{value:'每 6 位 1 位', label:'長者曾經跌倒', note:'國健署 110 年國民健康訪問調查'},
    action_title:'防跌這樣做',
    action_cards:[
      {key:'動', text:'吃夠蛋白質，規律運動與肌力訓練'},
      {key:'量', text:'定期量血壓、血糖，避免頭暈'},
      {key:'藥', text:'看診帶藥單，請醫師評估用藥'},
      {key:'改', text:'燈亮、地乾、收雜物，浴室裝扶手'}
    ],
    notice:'65 歲以上**每半年**做一次「長者量六力」，覺得變差時也可隨時自我檢測。',
    carousel_suggestion:{reason:'若想把風險數據、防跌三步與居家環境分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'跌倒有多常見', headline_main:'每 6 位長者就有 1 位'},
      {layout_type:'action', headline_hook:'防跌三步', headline_main:'營養運動、慢病、用藥'},
      {layout_type:'knowledge', headline_hook:'居家檢查', headline_main:'這些角落最容易跌倒'}]},
    hashtags:['預防跌倒','防跌三步','長者量六力','高齡健康'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'elderly-care',
    illustration:{topic:'長者防跌', audience:'長者與家人', scene:'長者和家人在客廳做扶椅起立的肌力練習，旁邊地面乾淨、燈光明亮',
      emotion:'有活力、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult practicing sit-to-stand exercises holding a sturdy chair in a bright tidy living room while a family member encourages them, energetic and reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：每6位長者1位曾跌倒（國健署110年調查）','防跌三步取自國健署2025/02/18新聞稿'],
      layout_reason:'防跌重點是日常行動，選 action：插圖放大、4 個防跌行動當主角，跌倒比例退到 Hero 當背景。',
      tone:'專業易懂', tone_reason:'具體、可執行。',
      to_verify:['110年調查為最新一期']},
    decision_points:[Object.assign({}, DP_RATE, {current:'跌倒是 65 歲以上事故傷害死因第 2 位（113 年，每十萬人 25.2 人）'})],
    content_check_note:'跌倒比例引自國健署110年調查並標明年份，防跌建議引自國健署，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'長者跌倒預防',
    collect:{
      summary:'國健署調查每6位長者就有1位曾跌倒，跌倒是65歲以上事故傷害死因第二位；超高齡社會下，國健署推動「防跌三步」與「長者量六力」，防跌是高齡健康與失能預防的核心議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'每6位長者就有1位曾跌倒：依國健署110年國民健康訪問調查，每6位長者中就有1位曾經跌倒，每12位就有1位因跌倒就醫。',tag:'官方統計',source:{name:'國民健康署：「防跌三步」守護長者安全',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18870'}},
        {item:'好發族群年齡層',desc:'每十萬人25.2人：依113年死因統計，跌倒是65歲以上長者事故傷害死亡原因的第二位，僅次於交通事故。',tag:'官方統計',source:{name:'國民健康署：長者跌倒的問題真的很嚴重嗎？',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=807&pid=20033'}},
        {item:'年度趨勢方向',desc:'1632人因跌倒（落）死亡：衛福部114年死因統計，全年齡跌倒（落）死亡1,632人，113年為1,654人，近年維持在1,600人以上。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果分析',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'政策動向',desc:'至少每半年評估一次：國健署推動「長者量六力」，參考WHO長者整合式照護（ICOPE）評估認知、行動、營養、視力、聽力、憂鬱六大面向，可透過LINE「@hpaicope」自我檢測。',tag:'官方統計',source:{name:'國民健康署：「防跌三步」守護長者安全',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18870'}}
      ],
      product_view:['機會：跌倒是失能與長照需求的重要起點，可說明意外傷害、失能與長照保障的關聯。','機會：居家防跌評估、肌力課程可作為熟齡保戶健康管理服務。','風險：避免以跌倒死亡數字恐嚇，或推銷特定輔具與保健品。'],
      marketing_view:['機會：春節返鄉、重陽節是「回家幫爸媽做防跌檢查」的溝通時機。','機會：國健署「長者量六力」LINE 工具門檻低，適合互動導流。','風險：「長輩少動比較安全」是常見迷思，內容需強調多運動才能防跌。'],
      alert_level:'low',
      alert_reason:'屬長期高齡健康議題，無急迫時效事件；適合在春節、重陽節前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國健署統計65歲以上長者85%至少有一項慢性疾病','CURRENCY_TIMELINESS','source_year_unstated',
          '新聞稿只寫依「國民健康訪問調查」，未註明調查年份，文中也沒有年份，讀者無法判斷資料時效。','low','yes',
          '「85%至少有一項慢性疾病」對應的國民健康訪問調查年份。','yes','confirm','新聞稿未載明年份。',
          '依國健署國民健康訪問調查（年份待確認），65歲以上長者85%至少有一項慢性疾病'),
        F('多數風險可以透過日常行動降低','MEDICAL_INTERPRETATION','outcome_generalization',
          '「多數風險」未附研究依據，跌倒原因多元，部分（如疾病或視力問題）需醫療處理，說法可能過度簡化。','low','no',
          null,'no','clarify','屬表達方式。',
          '許多風險可以透過日常行動與醫療評估降低'),
        F('跌倒是65歲以上長輩意外死亡的第二大原因','TERMINOLOGY_LANGUAGE','term_simplification',
          '原始統計是「事故傷害死亡原因」的第二位，「意外死亡」雖口語但可能被理解為所有非疾病死因，與統計分類不完全相同。','low','no',
          null,'no','clarify','屬用語精確度。',
          '跌倒是65歲以上長輩事故傷害死亡原因的第二位'),
        F('可加入國健署LINE官方帳號「@hpaicope」','REGULATORY_COMPLIANCE','external_link',
          '引導讀者加入外部帳號，宜說明為國健署官方帳號並提供官方連結，避免讀者誤加仿冒帳號。','low','no',
          null,'no','clarify','屬資訊安全提醒。',
          '可加入國健署LINE官方帳號「@hpaicope」（請由國健署官網連結加入）',
          ['加國健署LINE「@hpaicope」'])
      ],
      card:[
        F('長者曾經跌倒','DATA_FACTUAL_ACCURACY','period_unstated',
          '主數字標籤只寫「曾經跌倒」，未標示是過去一年內或終身經驗，也未寫年齡範圍，讀者無法判斷跌倒頻率。','low','yes',
          '國健署110年國民健康訪問調查中長者跌倒指標的期間定義與年齡範圍。','no','confirm','需對照調查原始定義後再改寫標籤。',
          null),
        F('燈亮、地乾、收雜物，浴室裝扶手','MEDICAL_INTERPRETATION','incomplete_list',
          '居家建議完整，但未提到夜間照明（夜燈）這個長者夜間如廁跌倒的常見情境。','low','no',
          null,'no','clarify','屬內容補強建議。',
          '夜燈、地乾、收雜物，浴室裝扶手')
      ]
    },
    title_alts:[
      '長者防跌三步：營養運動、慢病管理、用藥評估，守住行動力',
      '陪爸媽動起來！3步驟預防跌倒，居家這樣改',
      '每6位長者就有1位跌倒：國健署防跌三步與長者量六力'
    ],
    card_title_alts:[
      ['長輩跌倒不是小事','防跌從這 4 件事做起'],
      ['陪爸媽動起來','防跌三步一起做'],
      ['每 6 位長者 1 位跌倒','居家防跌檢查清單']
    ],
    data_addon:[
      '截至2025年1月，65歲以上人口已超過460萬人，占總人口超過20%，正式進入超高齡社會。',
      '112年死因統計：65歲以上跌倒死亡每10萬人26.4人。',
      '國健署建議衛生所與社區據點座椅設扶手、體重計固定於安全位置。'
    ],
    cta:'這個週末用國健署「長者量六力」陪爸媽做一次自我檢測，再一起把家裡的走道、浴室和夜間照明檢查一遍。'
  });
})();
