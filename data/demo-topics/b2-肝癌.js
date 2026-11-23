/* v6 示範主題：肝癌（B2 癌症）
   查證日期：2026-11-20。數據來源：衛福部112年癌症登記報告新聞稿與附表（2025-12-30 公布）、衛福部114年死因統計摘要表（肝癌死亡時間序列）、
   國健署2025世界肝炎日新聞稿（2025-07-25）、國健署B、C肝篩檢擴大新聞稿（2025-11-20）。
   參考方向：健康智庫〈肝癌〉2022/02。 */
(function(){
  const REFS = [
    {title:'公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-84987-1.html'},
    {title:'112年國人十大癌症發生人數附表',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'112年國人癌症時鐘再快轉！肺癌連3年居首 每3分48秒一人罹癌',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/cancer/360004'},
    {title:'2025世界肝炎日：台灣與全球同行，打破阻礙、終結肝炎',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-83197-1.html'},
    {title:'民國75年以前出生民眾 終身一次B、C肝篩檢',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-84593-1.html'}
  ];
  const TABLE = {headers:['項目','重點'], rows:[
    ['誰可以篩','民國75年（含）以前出生至79歲，終身1次免費B、C型肝炎篩檢'],
    ['怎麼篩','到成人預防保健特約院所抽血1次，同時檢驗B、C型肝炎'],
    ['陽性怎麼辦','依醫囑接受追蹤檢查與治療，院所會提供追蹤管理或轉介'],
    ['篩檢現況','截至2025年已逾750萬名45-79歲民眾完成檢查，篩檢率達6成']
  ]};
  const TAGS = ['肝癌','B型肝炎','C型肝炎','肝炎篩檢','癌症防治'];

  const DP_TREND = {id:'dp-liver-trend', type:'data_scope', title:'肝癌死亡「增加」還是「下降」',
    desc:'114年肝癌死亡7,601人，比113年（7,513人）多88人；但年齡標準化死亡率由113年每十萬人15.3降至14.8，十年前（105年）為22.4。人數增加主要與人口老化有關，AI 沒有只挑其中一個說法。',
    current:'標準化死亡率十年下降（22.4→14.8），死亡人數仍約7,600人',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'+1.2%', value:'死亡人數（114 vs 113）', note:'7,601人 vs 7,513人'},
      {label:'22.4→14.8', value:'標準化死亡率（105→114年）', note:'排除人口老化影響（目前採用為主訊息）'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'肝癌死亡率十年降三成：B、C肝篩檢擴大到75年次以前出生',
    update_date:'2026/11/20',
    intro:'依衛生福利部112年癌症登記報告，肝癌（肝及肝內膽管癌）新發10,449人，居癌症發生第4位，診斷年齡中位數68歲。114年死因統計中，肝癌死亡7,601人，仍居癌症死因第2位；不過年齡標準化死亡率已由105年每十萬人22.4降至14.8，國健署指出肝癌標準化發生率與死亡率已連續十多年顯著下降。B、C型肝炎是肝癌的重要危險因子，國健署自2025年8月起把免費篩檢擴大到民國75年以前出生的民眾。',
    sections:[
      {heading:'B、C型肝炎篩檢一次看',format:'table',table:TABLE},
      {heading:'篩檢與治療的成果',format:'bullets',items:[
        '國健署2025年世界肝炎日指出，成健篩檢的B型肝炎陽性率由100年的15.6%降至114年的9.5%，C型肝炎由3.6%降至1.5%。',
        '此次擴大篩檢，約220萬名青壯年可提早受檢；台灣訂定提前於2025年達成C肝消除的目標。',
        '國健署呼籲，接受篩檢並配合治療，有機會避免發展為肝硬化甚至肝癌。'
      ]},
      {heading:'已知是B、C肝帶原者',format:'bullets',items:[
        '依醫囑定期回診追蹤，不要因為沒有症狀就中斷。',
        '避免飲酒，不自行服用來路不明的藥物或偏方。',
        '肝臟沒有痛覺神經，出現黃疸、腹脹、體重減輕時常已不是早期，平時追蹤更重要。'
      ]}
    ],
    think_tank_view:'肝癌死亡率能持續下降，是新生兒B肝疫苗、全民篩檢與C肝治療多年累積的成果。仍有不少人不知道自己是帶原者；民國75年以前出生、還沒做過B、C肝篩檢的人，這次擴大篩檢就是最好的機會。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'發生與死亡人數引自衛福部癌症登記與死因統計並標明年份，篩檢資格與陽性率引自國健署新聞稿，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['112年肝癌新發10,449人（癌症登記附表）','114年死亡7,601人、標準化死亡率14.8（死因統計）','B、C肝篩檢擴大（國健署2025-11）'],
      layout_reason:'先用表格說明篩檢資格與流程，再呈現篩檢成果，最後給帶原者的日常提醒。',
      tone:'專業易懂', tone_reason:'篩檢資格需要精確。',
      to_verify:['2025年C肝消除目標是否已正式宣布達成']},
    decision_points:[DP_TREND]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'民國75年以前出生？免費B、C肝篩檢別錯過',
    update_date:'2026/11/20',
    intro:'肝癌一年新發10,449人（112年癌症登記），114年有7,601人因肝癌過世，仍是癌症死因第2名。好消息是，扣掉人口老化的影響，肝癌死亡率十年來降了三成多。從2025年8月起，民國75年以前出生到79歲的人，都可以免費做一次B、C肝篩檢，抽一次血就搞定。',
    sections:[
      {heading:'B、C肝篩檢這樣做',format:'table',table:TABLE},
      {heading:'篩檢真的有幫助',format:'bullets',items:[
        '國健署統計，篩出B肝的比例從15.6%降到9.5%，C肝從3.6%降到1.5%。',
        '這次擴大篩檢，約220萬名青壯年可以提早檢查。',
        '只要篩檢後配合治療，就有機會避免變成肝硬化或肝癌。'
      ]},
      {heading:'如果你是帶原者',format:'bullets',items:[
        '照醫師安排定期回診，沒症狀也要去。',
        '少喝酒，不亂吃偏方和來路不明的藥。',
        '肝不會痛，等到有黃疸、肚子脹才發現常常太晚，定期追蹤最重要。'
      ]}
    ],
    think_tank_view:'很多人一輩子都不知道自己有B肝或C肝。找個時間問問爸媽、兄姊：「做過B、C肝篩檢了嗎？」抽一次血，就能讓全家更安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部與國健署公開資料並標明年份，「降了三成多」依標準化死亡率22.4降至14.8換算，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以篩檢資格切入，帶出成果與帶原者提醒。', tone:'生活親切', tone_reason:'鼓勵青壯年與長輩一起篩檢。', to_verify:['C肝消除目標達成狀況']},
    decision_points:[DP_TREND]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'肝癌：75年次以前出生，免費篩B、C肝',
    update_date:'2026/11/20',
    intro:'112年肝癌新發10,449人；114年死亡7,601人，居癌症死因第2位，標準化死亡率十年由22.4降至14.8。',
    sections:[
      {heading:'篩檢資格',format:'table',table:TABLE},
      {heading:'成果',format:'bullets',items:[
        'B肝陽性率15.6%降至9.5%。',
        'C肝陽性率3.6%降至1.5%。'
      ]},
      {heading:'帶原者',format:'bullets',items:[
        '依醫囑定期追蹤。',
        '避免飲酒與偏方。'
      ]}
    ],
    think_tank_view:'B、C肝篩檢加上定期追蹤，是預防肝癌最實際的做法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部與國健署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為資格、成果、帶原者三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['陽性率為成健受檢者']},
    decision_points:[DP_TREND]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'肝癌', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'肝癌標準化死亡率十年降三成', primary_visual:'7,601 人', secondary_message:'B、C 肝篩檢擴大到 75 年次以前出生', action_priority:'抽血篩 B、C 肝，帶原者定期追蹤'},
    headline_hook:'75 年次以前出生', headline_main:'免費 B、C 肝篩檢', title_accent:'B、C 肝篩檢',
    hero_message:'肝不會痛', hero_support:'肝癌仍居癌症死因第 2 位（114 年死因統計）',
    knowledge_title:'篩檢重點', knowledge_note:'抽血 1 次，**同時檢驗 B、C 肝**',
    knowledge_cards:[
      {label:'誰可以篩', icon:'people', lines:['75 年（含）以前出生','至 79 歲，終身 1 次']},
      {label:'怎麼篩', icon:'search', lines:['成健特約院所','抽血 1 次']},
      {label:'陽性怎麼辦', icon:'check', lines:['依醫囑追蹤治療','院所協助轉介']},
      {label:'篩檢現況', icon:'report', lines:['逾 750 萬人完成','篩檢率達 6 成']}
    ],
    primary_stat:{value:'7,601 人', label:'114 年肝癌死亡人數', note:'衛福部死因統計：7,601 人｜標準化死亡率 22.4 → 14.8（十年）'},
    secondary_stats:[
      {value:'9.5%', label:'114 年 B 肝陽性率'},
      {value:'1.5%', label:'114 年 C 肝陽性率'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'篩', text:'符合資格抽血篩 B、C 肝'},
      {key:'追', text:'帶原者依醫囑定期追蹤'},
      {key:'治', text:'C 肝陽性積極接受治療'},
      {key:'戒', text:'避免飲酒、不吃來路不明偏方'}
    ],
    carousel_suggestion:{reason:'若想把趨勢、篩檢與帶原者照護分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'肝癌死亡率', headline_main:'十年下降三成'},
      {layout_type:'knowledge', headline_hook:'75 年次以前出生', headline_main:'免費 B、C 肝篩檢'},
      {layout_type:'action', headline_hook:'帶原者', headline_main:'定期追蹤最重要'}]},
    hashtags:['肝癌','B型肝炎','C型肝炎','肝炎篩檢'],
    sources:['衛生福利部','衛生福利部國民健康署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'B、C 肝篩檢', audience:'青壯年與長輩', scene:'一位青壯年陪同父親在診所抽血櫃台，護理師準備抽血',
      emotion:'安心、陪伴', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young adult accompanying their father at a clinic blood draw counter while a nurse prepares, reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['114年肝癌死亡7,601人（死因統計）','B、C肝篩檢擴大與陽性率（國健署2025年新聞稿）'],
      layout_reason:'核心訊息是「篩檢資格擴大」，選 knowledge：4 張篩檢重點卡當主角，死亡人數與陽性率退到下方。',
      tone:'專業易懂', tone_reason:'篩檢資格需清楚。',
      to_verify:['陽性率為成健受檢者比例']},
    decision_points:[Object.assign({}, DP_TREND, {current:'7,601 人｜標準化死亡率十年 22.4 → 14.8'})],
    content_check_note:'死亡人數引自衛福部114年死因統計，篩檢資格與陽性率引自國健署，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'肝癌',
    collect:{
      summary:'肝癌112年新發逾1萬人、仍居癌症死因第2位，但標準化死亡率十年下降約三成；國健署2025年8月起將免費B、C肝篩檢擴大至民國75年以前出生民眾，約220萬名青壯年受惠，是兼具政策時機與預防價值的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'新發肝癌約1萬人：依2025年12月公布的112年癌症登記，肝及肝內膽管癌新發10,449人，居癌症發生第4位，診斷年齡中位數68歲。',tag:'官方統計',source:{name:'衛生福利部：112年國人十大癌症發生人數附表',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'}},
        {item:'年度趨勢方向',desc:'標準化死亡率十年下降約34%：2025年肝癌死亡7,601人，居癌症死因第2位，年齡標準化死亡率由2016年每十萬人22.4降至14.8。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'約220萬名青壯年可提早篩檢：2025年8月1日起，民國75年（含）以前出生至79歲民眾可終身1次免費B、C肝篩檢，截至2025年已逾750萬人完成、篩檢率達6成。',tag:'官方統計',source:{name:'衛生福利部國民健康署：民國75年以前出生民眾 終身一次B、C肝篩檢',url:'https://mohw.gov.tw/cp-16-84593-1.html'}},
        {item:'好發族群年齡層',desc:'B肝陽性率9.5%：國健署成健篩檢資料，B型肝炎陽性率由2011年15.6%降至2025年9.5%，C型肝炎由3.6%降至1.5%，帶原者為肝癌主要高風險族群。',tag:'官方統計',source:{name:'衛生福利部國民健康署：2025世界肝炎日',url:'https://mohw.gov.tw/cp-16-83197-1.html'}}
      ],
      product_view:['機會：肝癌仍是癌症死因第2位，治療與長期追蹤費用可作為癌症保障溝通情境。','機會：B、C肝篩檢擴大至青壯年，適合結合健檢提醒與帶原者追蹤服務。','風險：B、C肝帶原涉及核保議題，溝通篩檢時避免讓民眾因擔心核保而不敢篩檢，也不得暗示篩檢結果與保單條件連動。'],
      marketing_view:['機會：「民國75年以前出生」是明確、好記的對象條件，適合青壯年族群溝通。','機會：7月28日世界肝炎日是固定檔期。','風險：避免以「肝癌是國病」等恐懼標籤訴求，宜強調死亡率下降與篩檢成果。'],
      alert_level:'medium',
      alert_reason:'B、C肝篩檢資格2025年8月剛擴大，屬政策推動期，適合納入年度溝通規劃。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('成健篩檢的B型肝炎陽性率由100年的15.6%降至114年的9.5%','MEDICAL_INTERPRETATION','sample_not_population',
          '陽性率是成人預防保健受檢者的比例，且每年受檢族群不同；讀者可能理解為全國帶原率下降到9.5%。','medium','no',
          null,'no','clarify','數字引自國健署，屬統計對象說明。',
          '成健篩檢受檢者的B型肝炎陽性率由100年的15.6%降至114年的9.5%（非全國帶原率）',['篩出B肝的比例從15.6%降到9.5%','B肝陽性率15.6%降至9.5%']),
        F('台灣訂定提前於2025年達成C肝消除的目標','CONTEXT_CONSISTENCY','goal_status_unstated',
          '文章查證日已是2026年11月，只寫「訂定2025年目標」而未交代是否達成，讀者會疑惑結果。查證時未找到正式宣布達成的官方資料。','low','yes',
          '衛福部是否已正式宣布達成C肝消除目標。','yes','confirm','未找到達成與否的官方說明。',
          '台灣訂定提前於2025年達成C肝消除的目標（達成狀況以衛福部公告為準）'),
        F('肝癌死亡率十年來降了三成多','MEDICAL_INTERPRETATION','standardized_unlabeled',
          '「降了三成多」是年齡標準化死亡率的變化，死亡人數其實仍約7,600人；未標明是標準化死亡率，讀者可能以為死亡人數大減。','medium','no',
          null,'no','clarify','換算正確（22.4→14.8約降34%）。',
          '扣掉人口老化影響的標準化死亡率，十年來降了三成多'),
        F('出現黃疸、腹脹、體重減輕時常已不是早期','RISK_COMMUNICATION_SCOPE','fear_framing',
          '方向正確，但未附出處且語氣偏向恐懼訴求；可改為強調定期追蹤的好處。','low','no',
          null,'no','clarify','屬語氣調整。',
          '肝臟沒有痛覺神經，早期多半沒有症狀，定期追蹤能在早期發現變化',['等到有黃疸、肚子脹才發現常常太晚'])
      ],
      card:[
        F('114 年 B 肝陽性率','MEDICAL_INTERPRETATION','sample_not_population',
          '卡面未說明是成健受檢者的陽性率，可能被讀成全國B肝帶原率。','medium','no',
          null,'no','clarify','數字引自國健署。',
          '114 年成健受檢者 B 肝陽性率'),
        F('肝癌仍居癌症死因第 2 位（114 年死因統計）','CONTEXT_CONSISTENCY','message_tension',
          '主訊息是「死亡率十年降三成」，hero 卻強調仍居第 2 位，兩者並列沒有連結，讀者可能抓不到重點。','low','no',
          null,'no','clarify','兩項事實皆正確。',
          '肝癌仍居癌症死因第 2 位，但死亡率持續下降')
      ]
    },
    title_alts:[
      '肝癌死亡率十年降三成：B、C肝篩檢擴大到75年次以前出生',
      '民國75年以前出生？免費B、C肝篩檢別錯過',
      '肝不會痛：B、C肝帶原者的定期追蹤與篩檢資格'
    ],
    card_title_alts:[
      ['75 年次以前出生','免費 B、C 肝篩檢'],
      ['肝不會痛','抽血篩 B、C 肝'],
      ['肝癌死亡率','十年下降三成']
    ],
    data_addon:[
      '114年死因統計：肝癌死亡男性5,153人、女性2,448人，男性居癌症死因第2位、女性第4位。',
      '截至2025年3月，全國逾734萬名45-79歲民眾完成C型肝炎檢查。',
      '112年肝癌標準化發生率每十萬人22.8人，較111年下降0.9人。'
    ],
    cta:'今天就查一下自己和家人是否做過B、C肝篩檢；民國75年以前出生、還沒做過的，就預約成健抽一次血。'
  });
})();
