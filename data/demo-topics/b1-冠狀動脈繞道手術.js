/* v6 示範主題：冠狀動脈繞道手術（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計（心臟疾病）、聯合報2026-02-07（林口長庚團隊以健保資料庫分析3.2萬名多條血管繞道手術病人，研究2022年9月發表）、
   國健署三高分析、健保會113年監理指標報告（塗藥支架占率，作為支架與繞道治療背景）。
   衛福部、健保署未查到公開的全國繞道手術量；手術適應症與術後照護未找到官方衛教，文中標明由醫療團隊評估。
   參考方向：健康智庫〈心血管疾病外科治療－冠狀動脈繞道手術〉2025/01。 */
(function(){
  const REFS = [
    {title:'國人死亡人數連續3年下降 十大死因中6項死因人數、死亡率都減少（114年死因統計）',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'},
    {title:'最新研究 心臟曾放支架再繞道 死亡風險增',source:'聯合報',url:'https://udn.com/news/story/7266/9314623'},
    {title:'預防三高 降低心肌梗塞風險',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=17931'},
    {title:'113年全民健康保險監理指標監測結果報告',source:'衛生福利部全民健康保險會',url:'https://www.mohw.gov.tw/dl-98589-4782a345-f250-4d14-8b78-c550439eb29e.html'}
  ];
  const TABLE = {headers:['項目','心導管支架','冠狀動脈繞道手術'], rows:[
    ['做法','經血管放入支架撐開狹窄處','取身體其他部位的血管，在阻塞處另外接一條「新路」'],
    ['傷口','手腕或鼠蹊部小傷口','多為胸部手術傷口'],
    ['常見考量','病灶較單純時常優先考慮','多條血管或複雜病灶時，由心臟內外科團隊評估'],
    ['術後','依醫囑服藥、控制三高','依醫囑服藥、心臟復健、控制三高']
  ]};
  const TAGS = ['冠狀動脈繞道手術','心臟手術','冠心病','心臟支架','心臟復健'];

  const DP_STUDY = {id:'dp-cabg-study', type:'data_scope', title:'研究數字的適用範圍',
    desc:'「術後30天死亡率7.2%比5%」來自林口長庚團隊分析健保資料庫3.2萬名多條血管繞道手術病人的研究，比較的是「術前曾放支架」與「未放支架」兩組，不是繞道手術整體死亡率，也不是支架與繞道的直接比較。AI 沒有把它寫成一般手術風險。',
    current:'曾放支架者術後30天死亡率7.2%、未放者5%（多條血管繞道手術病人）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'7.2%', value:'術前曾放支架', note:'林口長庚健保資料庫研究（2022年發表）'},
      {label:'5%', value:'術前未放支架', note:'同一研究對照組'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'冠狀動脈繞道手術是什麼？和支架怎麼選、術後怎麼顧',
    update_date:'2026/11/20',
    intro:'冠狀動脈阻塞的治療以「支架置放」與「繞道手術」為主。依衛生福利部114年死因統計，心臟疾病死亡2萬2,907人，居十大死因第2位。林口長庚團隊以健保資料庫分析3.2萬名接受多條血管繞道手術的病人，發現術前曾放支架者術後30天死亡率為7.2%，未放支架者為5%（研究2022年9月發表）。治療方式應由心臟內外科團隊依病灶與個人狀況共同評估。',
    sections:[
      {heading:'支架與繞道手術比較',format:'table',table:TABLE},
      {heading:'研究帶來的提醒',format:'bullets',items:[
        '該研究追蹤13年，曾放支架者再次需要支架或手術的比例也較高，放過兩次支架或體內已有多支支架者尤為明顯。',
        '研究團隊建議將結果納入臨床治療指引；病人可在治療前與醫師討論長期的治療規劃。',
        '健保會資料顯示，113年冠狀動脈塗藥支架申報占率達73.1%，支架已是常見治療方式。'
      ]},
      {heading:'術後照護重點',format:'bullets',items:[
        '依醫囑服藥，不自行停藥，並定期回診追蹤。',
        '在醫療團隊指導下進行心臟復健，循序恢復活動量。',
        '控制血壓、血糖、血脂並戒菸；國健署分析，有高血壓者後續罹患心血管疾病的風險為1.8倍。'
      ]}
    ],
    think_tank_view:'支架與繞道手術不是誰比較好，而是「哪一種比較適合這個人的血管」。面對多條血管或複雜病灶時，請醫師把短期風險與長期規劃一起說明清楚；手術完成後，心臟復健與控制三高才是長期保護心臟的關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數引自衛福部114年死因統計，研究數據標明為林口長庚健保資料庫研究與發表年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['心臟疾病114年死亡2萬2,907人（死因統計）','林口長庚健保資料庫研究（聯合報2026-02報導）'],
      layout_reason:'先用表格比較兩種治療，再說明研究提醒，最後給術後照護重點。',
      tone:'專業易懂', tone_reason:'治療選擇需要平衡呈現。',
      to_verify:['全國繞道手術量查無公開官方統計','研究為2022年發表的單一世代研究','表格中適應症描述未引用官方衛教']},
    decision_points:[DP_STUDY]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'醫生說要做心臟繞道手術？一次搞懂和放支架差在哪',
    update_date:'2026/11/20',
    intro:'心臟血管塞住了，常見的治療有兩種：放支架，或做繞道手術。繞道手術就像在塞車的路段旁邊另外開一條新路，讓血液繞過去。林口長庚團隊用健保資料分析3.2萬名繞道手術病人，發現手術前曾放過支架的人，術後30天的死亡率比較高。到底怎麼選，要請醫師依血管狀況一起評估。',
    sections:[
      {heading:'支架和繞道，差在哪？',format:'table',table:TABLE},
      {heading:'研究告訴我們什麼？',format:'bullets',items:[
        '曾放支架再做繞道手術的人，術後30天死亡率7.2%，沒放過的是5%。',
        '放過兩次以上支架的人，之後再需要處理的機會也比較高。',
        '所以治療前，可以請醫師說明長期怎麼規劃。'
      ]},
      {heading:'手術後怎麼照顧？',format:'bullets',items:[
        '藥按時吃，回診不要漏。',
        '跟著醫療團隊做心臟復健，慢慢恢復體力。',
        '血壓、血糖、血脂顧好，菸一定要戒。'
      ]}
    ],
    think_tank_view:'聽到要做心臟手術，家人難免緊張。陪爸媽把問題寫下來帶去門診：為什麼建議這個方式？長期要怎麼追蹤？問清楚了，心也比較安。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'研究數據標明為林口長庚健保資料庫研究，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以「另開一條新路」比喻說明手術。', tone:'生活親切', tone_reason:'給病人家屬閱讀。', to_verify:['研究比較組別說明']},
    decision_points:[DP_STUDY]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'冠狀動脈繞道手術：與支架比較、術後照護',
    update_date:'2026/11/20',
    intro:'冠狀動脈阻塞以支架或繞道手術治療。長庚研究：曾放支架再繞道者術後30天死亡率7.2%，未放者5%。',
    sections:[
      {heading:'兩種治療比較',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '治療前討論長期規劃。',
        '多支支架者風險較高。'
      ]},
      {heading:'術後',format:'bullets',items:[
        '按時服藥、心臟復健。',
        '控制三高、戒菸。'
      ]}
    ],
    think_tank_view:'支架或繞道由醫療團隊依病灶評估，術後照護決定長期成效。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'研究數據標明出處，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為比較、提醒、術後三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['研究適用範圍']},
    decision_points:[DP_STUDY]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'冠狀動脈繞道手術', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'支架或繞道，由醫療團隊依血管狀況評估', primary_visual:'3.2 萬人', secondary_message:'術後心臟復健與控制三高是關鍵', action_priority:'術前問清規劃、術後復健'},
    headline_hook:'要做心臟繞道手術？', headline_main:'術前術後 4 件事', title_accent:'4 件事',
    hero_message:'另開一條新路', hero_support:'繞道手術讓血液繞過阻塞的冠狀動脈',
    primary_stat:{value:'3.2 萬人', label:'長庚研究分析的繞道手術病人', note:'健保資料庫｜曾放支架者術後 30 天死亡率 7.2%、未放者 5%'},
    action_title:'這樣做',
    action_cards:[
      {key:'問', text:'術前請醫師說明支架與繞道的考量'},
      {key:'藥', text:'術後依醫囑服藥、定期回診'},
      {key:'復', text:'在團隊指導下做心臟復健'},
      {key:'控', text:'控制血壓、血糖、血脂並戒菸'}
    ],
    notice:'心臟疾病 114 年死亡 **2 萬 2,907 人**，居十大死因第 2 位。',
    carousel_suggestion:{reason:'若想把比較、研究與術後照護分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'支架還是繞道？', headline_main:'兩種治療差在哪'},
      {layout_type:'data', headline_hook:'長庚研究', headline_main:'3.2 萬名病人分析'},
      {layout_type:'action', headline_hook:'術後照護', headline_main:'服藥、復健、控三高'}]},
    hashtags:['冠狀動脈繞道手術','心臟手術','冠心病','心臟復健'],
    sources:['衛生福利部','聯合報','衛生福利部國民健康署'],
    illustration_category:'heart',
    illustration:{topic:'心臟手術後復健', audience:'術後病人與家屬', scene:'一位長者在復健中心踩固定式腳踏車，治療師在旁記錄心跳',
      emotion:'穩定、有希望', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult riding a stationary bike in a cardiac rehabilitation center while a therapist records heart rate, steady and hopeful mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['林口長庚健保資料庫研究（聯合報2026-02）','心臟疾病114年死亡人數（死因統計）'],
      layout_reason:'繞道手術的核心是術前溝通與術後照護，選 action：4 個行動當主角，研究規模當主數字並標明比較組別。',
      tone:'專業易懂', tone_reason:'手術議題需平衡。',
      to_verify:['研究為單一世代研究']},
    decision_points:[Object.assign({}, DP_STUDY, {current:'7.2% vs 5%｜曾放與未放支架者'})],
    content_check_note:'研究數據標明出處與比較組別，死亡人數引自衛福部，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'冠狀動脈繞道手術',
    collect:{
      summary:'冠狀動脈阻塞以支架與繞道手術為主要治療，心臟疾病仍居十大死因第2位；林口長庚以健保資料庫分析3.2萬名繞道手術病人，提醒術前曾多次放支架者風險較高，「術前完整評估、術後心臟復健」是主要溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'心臟疾病年死亡約2.3萬人：依2025年（114年）死因統計，心臟疾病（高血壓性疾病除外）死亡2萬2,907人，居十大死因第2位，統計涵蓋冠心病等各類心臟疾病。',tag:'官方統計',source:{name:'衛生福利部：國人死亡人數連續3年下降',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'年度趨勢方向',desc:'塗藥支架申報占率73.1%：健保會監理指標顯示，113年冠狀動脈塗藥支架占率連續3年超過7成，支架為常見治療，部分病人日後仍需繞道手術。',tag:'官方統計',source:{name:'衛生福利部全民健康保險會：113年全民健康保險監理指標監測結果報告',url:'https://www.mohw.gov.tw/dl-98589-4782a345-f250-4d14-8b78-c550439eb29e.html'}},
        {item:'政策動向',desc:'3.2萬名繞道手術病人分析：林口長庚團隊以健保資料庫分析多條血管繞道手術病人，曾放支架者術後30天死亡率7.2%、未放者5%，建議納入臨床治療指引（2022年發表）。',tag:'市場觀察',source:{name:'聯合報：最新研究 心臟曾放支架再繞道 死亡風險增',url:'https://udn.com/news/story/7266/9314623'}},
        {item:'好發族群年齡層',desc:'高血壓者心血管疾病風險1.8倍：國健署2018年三高追蹤分析，高血壓、高血糖、高血脂者後續罹患心血管疾病的風險分別為1.8、1.5及1.4倍，三高族群為冠心病主要風險族群。',tag:'官方統計',source:{name:'衛生福利部國民健康署：預防三高 降低心肌梗塞風險',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=17931'}}
      ],
      product_view:['機會：繞道手術屬重大手術，可作為重大疾病與手術醫療保障的溝通情境。','機會：心臟復健與術後慢病管理適合結合健康管理服務。','風險：避免暗示特定治療方式較好，或把治療選擇與保險給付做不當連結。'],
      marketing_view:['機會：「支架還是繞道？」是病人與家屬常見疑問。','機會：可與心肌梗塞、心臟支架主題串連成冠心病系列。','風險：研究結果易被誤讀為「放支架有害」，溝通需說明比較範圍。'],
      alert_level:'low',
      alert_reason:'無政策事件，研究為2022年發表，適合納入冠心病系列的長期溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('術前曾放支架者術後30天死亡率為7.2%，未放支架者為5%','MEDICAL_INTERPRETATION','observational_causation',
          '這是觀察性研究，曾放支架者可能本身病情較複雜；讀者可能誤解為「放支架會害繞道手術死亡率變高」。','medium','no',
          null,'no','clarify','數字引自報導，屬詮釋提醒。',
          '術前曾放支架者術後30天死亡率為7.2%，未放支架者為5%（觀察性研究，兩組病情可能不同）',['曾放支架再做繞道手術的人，術後30天死亡率7.2%，沒放過的是5%']),
        F('研究2022年9月發表','SOURCE_EVIDENCE','primary_source_missing',
          '文中只引用媒體報導，未註明研究刊登的期刊與論文名稱，讀者無法查證原始研究的設計與比較組別。','low','yes',
          '林口長庚團隊2022年9月發表論文的期刊與標題。','no','confirm','數字引自聯合報報導，原始論文未核對。',
          '研究2022年9月發表於《胸腔心臟血管外科雜誌》（聯合報報導）'),
        F('多條血管或複雜病灶時，由心臟內外科團隊評估','SOURCE_EVIDENCE','advice_without_basis',
          '表格中的適應症描述未引用官方或醫學會資料，讀者無法判斷依據。','low','yes',
          '醫學會冠狀動脈繞道手術適應症建議。','no','confirm','屬常見臨床描述。',
          null),
        F('就像在塞車的路段旁邊另外開一條新路','TERMINOLOGY_LANGUAGE','metaphor_check',
          '比喻生動，但未說明「新路」來自身體其他部位的血管，讀者可能以為是人工管路。','low','no',
          null,'no','clarify','屬白話比喻補充。',
          '就像在塞車的路段旁邊，用自己身體其他部位的血管另外開一條新路')
      ],
      card:[
        F('長庚研究分析的繞道手術病人','SOURCE_EVIDENCE','study_as_headline',
          '主數字是研究樣本數，不是全國手術量，讀者可能誤以為每年有3.2萬人接受繞道手術。','medium','no',
          null,'no','clarify','屬數字口徑說明。',
          '長庚研究分析的繞道手術病人數（非每年手術量）'),
        F('健保資料庫｜曾放支架者術後 30 天死亡率 7.2%、未放者 5%','MEDICAL_INTERPRETATION','observational_causation',
          '卡面未說明是觀察性研究，易被誤讀為因果關係。','low','no',
          null,'no','clarify','數字引自報導。',
          null)
      ]
    },
    title_alts:[
      '冠狀動脈繞道手術是什麼？和支架怎麼選、術後怎麼顧',
      '醫生說要做心臟繞道手術？一次搞懂和放支架差在哪',
      '支架還是繞道？冠心病治療選擇與術後照護'
    ],
    card_title_alts:[
      ['要做心臟繞道手術？','術前術後 4 件事'],
      ['支架還是繞道？','兩種治療差在哪'],
      ['另開一條新路','認識繞道手術']
    ],
    data_addon:[
      '長庚研究追蹤13年：曾放支架者再次需要支架或手術的比例較高。',
      '衛福部114年死因統計：心臟疾病死亡男性1萬3,517人、女性9,390人。',
      '國健署：20歲以上國人高血脂盛行率約4成，自述曾經醫師診斷者僅約2成。'
    ],
    cta:'如果家人被建議做心臟手術，下次門診前一起把「為什麼選這個方式、術後怎麼追蹤」寫下來問醫師。'
  });
})();
