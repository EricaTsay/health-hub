/* v6 示範主題：心臟血管支架（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-20。數據來源：衛福部全民健康保險會《113年全民健康保險監理指標監測結果報告》（2025-11 彙製，指標4.3自付差額特材申報占率，查證時為最新一期）、
   健保會〈健保會委員關切112年全民健康保險自付差額特殊材料之執行情形〉（2025-01-17，含109-113年9月占率附圖）、衛福部114年死因統計、國健署三高分析。
   參考方向：健康智庫〈心臟血管支架〉2022/05、〈冠狀動脈支架〉2023/06。 */
(function(){
  const REFS = [
    {title:'113年全民健康保險監理指標監測結果報告',source:'衛生福利部全民健康保險會',url:'https://www.mohw.gov.tw/dl-98589-4782a345-f250-4d14-8b78-c550439eb29e.html'},
    {title:'健保會委員關切112年全民健康保險自付差額特殊材料之執行情形',source:'衛生福利部全民健康保險會',url:'https://dep.mohw.gov.tw/NHIC/cp-4039-81271-116.html'},
    {title:'國人死亡人數連續3年下降 十大死因中6項死因人數、死亡率都減少（114年死因統計）',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'},
    {title:'預防三高 降低心肌梗塞風險',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=17931'}
  ];
  const TABLE = {headers:['項目','說明'], rows:[
    ['支架做什麼','以心導管把狹窄或阻塞的冠狀動脈撐開，恢復心肌血流'],
    ['健保怎麼給付','一般支架健保給付；塗藥支架屬「自付差額」特材，健保依一般支架價格給付，差額由病人負擔'],
    ['塗藥支架占率','113年健保自付差額特材申報占率73.1%'],
    ['給付規劃','健保署朝診療項目包裹支付，優先全額給付ST段上升之心肌梗塞病人'],
    ['術後照護','依醫囑服用抗血小板等藥物、定期回診，並控制三高、戒菸']
  ]};
  const TAGS = ['心臟支架','塗藥支架','心導管','自付差額','冠心病'];

  const DP_SHARE = {id:'dp-stent-share', type:'data_version', title:'塗藥支架占率有兩個版本',
    desc:'健保會2025年1月的說明附圖列出113年「截至9月」占率72.8%；2025年11月的監理指標報告則是113年全年73.1%。兩者統計期間不同，AI 採用全年版本，沒有混用。',
    current:'73.1%（113年全年，監理指標監測結果報告）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'73.1%', value:'113年全年', note:'健保會《113年監理指標監測結果報告》（目前採用）'},
      {label:'72.8%', value:'113年截至9月', note:'健保會2025年1月說明附圖'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'心臟支架怎麼選？塗藥支架占7成，健保給付規劃一次看',
    update_date:'2026/11/20',
    intro:'冠狀動脈狹窄或阻塞時，醫師常以心導管放置支架撐開血管。依衛生福利部全民健康保險會《113年全民健康保險監理指標監測結果報告》，屬自付差額特材的「冠狀動脈塗藥支架」113年申報占率達73.1%，已連續3年超過7成，近乎常態使用。健保署表示，將朝診療項目包裹支付方向，優先全額給付ST段上升之心肌梗塞病人。本文整理支架的給付方式與術後照護重點。',
    sections:[
      {heading:'心臟支架重點整理',format:'table',table:TABLE},
      {heading:'選擇支架前可以先了解',format:'bullets',items:[
        '塗藥支架屬健保「自付差額」項目：健保依一般支架價格給付，超出部分由病人自付，各院收費可在健保署醫材比價網查詢。',
        '健保署要求醫療院所應在手術前向病人或家屬充分說明自付差額品項與費用。',
        '選擇哪一種支架，應由心臟專科醫師依病灶位置、出血風險與病人狀況評估討論。'
      ]},
      {heading:'放完支架之後',format:'bullets',items:[
        '依醫囑服用抗血小板等藥物，不可自行停藥，牙科或其他手術前要主動告知醫師。',
        '支架只處理狹窄的那一段血管，仍須控制血壓、血糖、血脂並戒菸；國健署分析，有高血壓者後續罹患心血管疾病的風險為1.8倍。',
        '若再出現胸痛、胸悶、喘或冒冷汗，應立即就醫或撥打119。'
      ]}
    ],
    think_tank_view:'支架是把阻塞的血管撐開，但造成阻塞的三高、吸菸等原因還在。術前問清楚支架種類與自付差額、術後按時服藥與回診，再把生活習慣調整好，才是長期保護心臟的完整做法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'占率引自健保會113年監理指標監測結果報告並標明年份，給付規劃標明為健保署規劃方向，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['113年塗藥支架申報占率73.1%（健保會監理指標報告）','健保署規劃：包裹支付優先全額給付STEMI病人'],
      layout_reason:'先用表格整理支架用途、給付與規劃，再提醒術前要問的事，最後給術後照護重點。',
      tone:'專業易懂', tone_reason:'給付與醫療選擇需要精確、可查證的資訊。',
      to_verify:['STEMI全額給付為規劃方向，查證時未找到正式公告的生效日期']},
    decision_points:[DP_SHARE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽要裝心臟支架？自付差額、術後照顧先搞懂',
    update_date:'2026/11/20',
    intro:'醫師說要「放支架」，很多家人第一個問題是：要選哪一種？要自己付多少？依衛福部健保會的報告，113年選用塗藥支架的申報占率達73.1%，也就是10支裡有7支多是塗藥支架。健保署也規劃，未來ST段上升型心肌梗塞的病人有機會由健保全額給付。先把重點弄清楚，跟醫師討論時就不慌。',
    sections:[
      {heading:'支架的5個重點',format:'table',table:TABLE},
      {heading:'跟醫師討論前，先問這幾件事',format:'bullets',items:[
        '這次建議的是哪一種支架？需要自付差額嗎？大概多少錢？各醫院價格可以上健保署的醫材比價網查。',
        '醫院在手術前應該說明自付差額的品項和費用，有疑問一定要問清楚再簽同意書。',
        '支架怎麼選要看血管狀況，交給心臟科醫師評估最準。'
      ]},
      {heading:'裝完支架，日常這樣顧',format:'bullets',items:[
        '藥要按時吃，不要覺得沒事就自己停；看牙或其他手術前記得說自己有放支架。',
        '支架不是一勞永逸，血壓、血糖、血脂還是要顧，菸一定要戒。',
        '再有胸痛、胸悶、喘或冒冷汗，馬上就醫或打119。'
      ]}
    ],
    think_tank_view:'支架放進去只是開始，後面每天的吃藥、回診和生活習慣才是關鍵。陪爸媽把藥盒準備好、把回診日期記在月曆上，比什麼都實在。也建議提前檢視自己的醫療保障，裝支架時就能安心選最好的。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'占率引自健保會監理指標報告並標明年份，「10支裡有7支多」依73.1%換算，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家屬陪同就醫的情境帶出給付、術前提問與術後照護。', tone:'生活親切', tone_reason:'給病人家屬閱讀，降低面對手術選擇的焦慮。', to_verify:['STEMI全額給付為規劃方向']},
    decision_points:[DP_SHARE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'心臟支架：塗藥支架占73.1%，術後按時服藥',
    update_date:'2026/11/20',
    intro:'113年冠狀動脈塗藥支架的健保申報占率73.1%，屬自付差額特材；健保署規劃優先全額給付ST段上升之心肌梗塞病人。',
    sections:[
      {heading:'重點整理',format:'table',table:TABLE},
      {heading:'術前',format:'bullets',items:[
        '問清支架種類與自付差額，可查醫材比價網。',
        '支架選擇由心臟專科醫師評估。'
      ]},
      {heading:'術後',format:'bullets',items:[
        '依醫囑服藥，不自行停藥。',
        '控制三高、戒菸。',
        '胸痛復發立即就醫。'
      ]}
    ],
    think_tank_view:'支架撐開血管，但長期保護心臟仍要靠按時服藥、控制三高與戒菸。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'占率引自健保會監理指標報告並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為重點、術前、術後三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['STEMI全額給付生效日期']},
    decision_points:[DP_SHARE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'心臟血管支架', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'塗藥支架健保申報占率逾 7 成', primary_visual:'73.1%', secondary_message:'健保規劃優先全額給付 STEMI 病人', action_priority:'術前問清差額、術後按時服藥'},
    headline_hook:'要裝心臟支架？', headline_main:'塗藥支架占率逾 7 成', title_accent:'逾 7 成',
    primary_stat:{kicker:'113 年・自付差額特材', value:'73.1%', label:'冠狀動脈塗藥支架申報占率', note:'健保會 113 年監理指標監測結果報告'},
    chart:{type:'bar', title:'塗藥支架申報占率（%）', points:[
      {label:'109', value:66.3, display:'66.3'},
      {label:'110', value:68.4, display:'68.4'},
      {label:'111', value:70.2, display:'70.2'},
      {label:'112', value:72.3, display:'72.3'},
      {label:'113', value:73.1, display:'73.1', highlight:true}
    ], note:'健保會｜109–110 年取自 2025 年 1 月說明附圖'},
    secondary_stats:[
      {value:'連續 3 年', label:'占率超過 7 成'},
      {value:'STEMI', label:'規劃優先全額給付'}
    ],
    action_title:'裝支架前後這樣做',
    action_cards:[
      {key:'問', text:'術前問清支架種類與自付差額'},
      {key:'查', text:'健保署醫材比價網查各院收費'},
      {key:'藥', text:'依醫囑服藥，不自行停藥'},
      {key:'顧', text:'控制三高、戒菸，胸痛復發就醫'}
    ],
    carousel_suggestion:{reason:'若想把給付、選擇與術後照護分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'健保怎麼給付', headline_main:'塗藥支架占率逾 7 成'},
      {layout_type:'knowledge', headline_hook:'術前先問', headline_main:'支架種類與自付差額'},
      {layout_type:'action', headline_hook:'術後照護', headline_main:'按時服藥、控制三高'}]},
    hashtags:['心臟支架','塗藥支架','自付差額','冠心病'],
    sources:['衛生福利部全民健康保險會','衛生福利部國民健康署'],
    illustration_category:'heart',
    illustration:{topic:'心臟支架', audience:'病人與家屬', scene:'醫師在診間用心臟模型向病人和家屬說明支架，家屬手拿筆記本',
      emotion:'安心、理解', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A cardiologist explaining a coronary stent with a heart model to a patient and a family member holding a notebook in a clinic, reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['塗藥支架申報占率109-113年（健保會）','健保署規劃：包裹支付優先全額給付STEMI病人'],
      layout_reason:'支架議題最具體的數據是給付占率的逐年變化，選 data：73.1% 當主角，5 年占率長條圖放右側，最後給術前術後 4 個行動。',
      tone:'專業易懂', tone_reason:'醫療費用與選擇需要精確、可查證。',
      to_verify:['109-110年與111-113年取自兩份健保會文件','STEMI全額給付生效日期']},
    decision_points:[Object.assign({}, DP_SHARE, {current:'73.1%｜113 年全年申報占率'})],
    content_check_note:'占率引自健保會監理指標報告並標明年份，給付規劃標明為規劃方向，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'心臟血管支架',
    collect:{
      summary:'冠狀動脈塗藥支架屬健保自付差額特材，113年申報占率73.1%、連續3年超過7成，健保會多次要求評估全額給付，健保署規劃以包裹支付優先全額給付ST段上升之心肌梗塞病人，是兼具政策動態與醫療費用溝通價值的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'塗藥支架申報占率73.1%：依健保會《113年全民健康保險監理指標監測結果報告》，冠狀動脈塗藥支架為自付差額特材中占率第2高的類別，僅次於特殊功能及材質髓內釘組。',tag:'官方統計',source:{name:'衛生福利部全民健康保險會：113年全民健康保險監理指標監測結果報告',url:'https://www.mohw.gov.tw/dl-98589-4782a345-f250-4d14-8b78-c550439eb29e.html'}},
        {item:'年度趨勢方向',desc:'占率連續3年超過70%：111年70.2%、112年72.3%、113年73.1%，健保會認定已近常態使用。',tag:'官方統計',source:{name:'衛生福利部全民健康保險會：113年全民健康保險監理指標監測結果報告',url:'https://www.mohw.gov.tw/dl-98589-4782a345-f250-4d14-8b78-c550439eb29e.html'}},
        {item:'政策動向',desc:'健保會多次請健保署加快全額給付：健保署說明將朝診療項目包裹支付方向，優先全額給付ST段上升之心肌梗塞（STEMI）病人，查證時尚未找到正式生效公告。',tag:'官方統計',source:{name:'衛生福利部全民健康保險會：健保會委員關切112年自付差額特殊材料之執行情形',url:'https://dep.mohw.gov.tw/NHIC/cp-4039-81271-116.html'}},
        {item:'好發族群年齡層',desc:'高血壓者心血管疾病風險1.8倍：國健署2018年三高追蹤分析，高血壓、高血糖、高血脂者後續罹患心血管疾病的風險分別為1.8、1.5及1.4倍，三高族群是冠狀動脈疾病的主要風險族群。',tag:'官方統計',source:{name:'衛生福利部國民健康署：預防三高 降低心肌梗塞風險',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=17931'}}
      ],
      product_view:['機會：塗藥支架自付差額是病人實際面對的醫療支出，可作為說明實支實付型醫療保障用途的情境。','機會：術後長期服藥與回診適合結合慢病管理服務。','風險：健保給付規劃尚未正式生效，溝通時不得暗示「已全額給付」或以自付差額製造焦慮促銷。'],
      marketing_view:['機會：「術前要問的3件事」是實用型內容，適合家屬族群分享。','機會：健保若正式公告STEMI全額給付，將是重要時效溝通點，可預先規劃。','風險：支架選擇屬醫療決策，避免任何暗示某類支架較好或推薦品牌。'],
      alert_level:'medium',
      alert_reason:'健保會持續追蹤全額給付規劃，正式公告後時效性將提高；目前適合以給付觀念與術後照護為主軸。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('10支裡有7支多是塗藥支架','DATA_FACTUAL_ACCURACY','definition_unstated',
          '73.1%是健保「申報占率」（同類特材申報中塗藥支架的比例），不等於每10位病人有7位選用；換算成「10支裡有7支多」容易被理解為使用者比例。','medium','no',
          null,'no','clarify','數字正確，屬口徑說明。',
          '在健保申報的同類支架中，塗藥支架占7成以上'),
        F('未來ST段上升型心肌梗塞的病人有機會由健保全額給付','RISK_COMMUNICATION_SCOPE','policy_not_effective',
          '健保署目前是「規劃方向」，查證時未找到正式公告與生效日期；寫「有機會」仍可能讓病人以為已可免付差額，影響就醫時的費用預期。','medium','yes',
          '健保署特材共同擬訂會議決議與正式公告日期。','yes','confirm','規劃內容引自健保會報告，生效時程未定。',
          '健保署規劃優先全額給付ST段上升型心肌梗塞病人，實際生效時間以健保署公告為準'),
        F('裝支架時就能安心選最好的','BRAND_TONE_CONSISTENCY','sales_implication',
          '衛教文章結尾暗示「有保險就能選最好的支架」，帶有銷售引導，且隱含塗藥支架一定比較好，與前文「由醫師評估」的立場不一致。','high','no',
          null,'no','revise','屬品牌語調與法遵風險，建議刪除。',
          '裝支架時就能專心和醫師討論最適合的治療'),
        F('支架只處理狹窄的那一段血管','MEDICAL_INTERPRETATION','oversimplification',
          '說法方向正確，但沒有說明原因；可補充「其他血管仍可能因三高、吸菸持續硬化」，讓讀者理解為何術後仍須控制風險。','low','no',
          null,'no','clarify','屬補充說明。',
          '支架只處理狹窄的那一段血管，其他血管仍可能因三高、吸菸持續硬化')
      ],
      card:[
        F('規劃優先全額給付','RISK_COMMUNICATION_SCOPE','policy_not_effective',
          '卡面只寫「規劃優先全額給付」，未說明尚未生效，分享後容易被誤讀為已經全額給付。','medium','yes',
          '健保署正式公告與生效日期。','yes','confirm','規劃內容引自健保會報告。',
          '規劃中，尚未生效'),
        F('冠狀動脈塗藥支架申報占率','DATA_FACTUAL_ACCURACY','definition_unstated',
          '「申報占率」對一般讀者不易理解，可能被當成「7成病人用塗藥支架」。','low','no',
          null,'no','clarify','數字正確，屬口徑說明。',
          '健保申報的同類支架中塗藥支架占比')
      ]
    },
    title_alts:[
      '心臟支架怎麼選？塗藥支架占7成，健保給付規劃一次看',
      '爸媽要裝心臟支架？自付差額、術後照顧先搞懂',
      '心臟支架術前問3件事、術後顧3件事'
    ],
    card_title_alts:[
      ['要裝心臟支架？','塗藥支架占率逾 7 成'],
      ['自付差額怎麼算？','心臟支架給付一次看'],
      ['支架不是一勞永逸','術後按時服藥、控制三高']
    ],
    data_addon:[
      '健保會113年監理指標：自付差額特材占率最高為特殊功能及材質髓內釘組，其次為冠狀動脈塗藥支架73.1%。',
      '特殊材質生物組織心臟瓣膜113年申報占率43.2%。',
      '衛福部114年死因統計：心臟疾病死亡2萬2,907人，居十大死因第2位。'
    ],
    cta:'下次陪家人回診前，先把「支架種類、自付差額、術後用藥」三個問題寫在手機備忘錄裡。'
  });
})();
