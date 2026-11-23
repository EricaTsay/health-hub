/* v6 示範主題：甲狀腺癌（B2 癌症）
   查證日期：2026-11-20。數據來源：衛福部112年癌症登記報告新聞稿與附表（2025-12-30 公布）、TVBS 2025-12-30（國健署：甲狀腺癌發生率仍上升）、
   國健署2015-09-10〈乳房及牙科攝影會增加罹患甲狀腺癌風險嗎？網路謠言不可信〉。
   衛福部死因摘要表前15大癌症死因未列甲狀腺癌；死亡面向僅引用附表的標準化死亡率。
   參考方向：健康智庫〈甲狀腺癌〉2023/01。 */
(function(){
  const REFS = [
    {title:'112年國人十大癌症發生人數附表',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'},
    {title:'公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-84987-1.html'},
    {title:'112年國人癌症時鐘再快轉！肺癌連3年居首 每3分48秒一人罹癌',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/cancer/360004'},
    {title:'乳房及牙科攝影會增加罹患甲狀腺癌風險嗎？網路謠言不可信',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-20191-1.html'}
  ];
  const TABLE = {headers:['項目','112年癌症登記'], rows:[
    ['新發人數','6,045人（較111年增加444人）'],
    ['排名','國人癌症發生第7位、女性第4位'],
    ['診斷年齡中位數','50歲（比全癌症65歲年輕15歲）'],
    ['標準化發生率','每十萬人18.9人'],
    ['標準化死亡率','每十萬人0.5人']
  ]};
  const TAGS = ['甲狀腺癌','頸部腫塊','甲狀腺超音波','癌症登記','女性健康'];

  const DP_DIAG = {id:'dp-tc-diagnosis', type:'tone', title:'發生率上升要怎麼說',
    desc:'甲狀腺癌新發人數持續增加，但標準化死亡率每十萬人僅0.5人。國際上常討論影像檢查普及可能帶來更多小型腫瘤被發現，但國健署未就此發表正式結論。AI 沒有把上升原因寫成定論。',
    current:'發生率上升、死亡率很低，原因未下定論',
    options:[{label:'維持目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'18.9', value:'標準化發生率（每十萬人）', note:'112年癌症登記（目前採用）'},
      {label:'0.5', value:'標準化死亡率（每十萬人）', note:'同一份附表'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'甲狀腺癌新發逾6千人、中位數50歲：認識發生多、死亡少的癌症',
    update_date:'2026/11/20',
    intro:'依衛生福利部112年癌症登記報告，甲狀腺癌新發6,045人，居國人癌症發生第7位、女性第4位，較111年增加444人；診斷年齡中位數50歲，是十大癌症中最年輕的。國健署指出甲狀腺癌發生率仍呈上升趨勢；但同一份附表中，甲狀腺癌標準化死亡率僅每十萬人0.5人，是十大癌症中最低的。',
    sections:[
      {heading:'甲狀腺癌數據一次看',format:'table',table:TABLE},
      {heading:'正確認識甲狀腺癌',format:'bullets',items:[
        '甲狀腺癌好發年齡比多數癌症年輕，女性在十大癌症中排第4位。',
        '國健署2015年澄清，目前沒有任何實證顯示乳房及牙科X光攝影與甲狀腺癌相關，不要因網路謠言拒絕必要檢查。',
        '發生人數增加的原因可能與多種因素有關，是否需要治療與治療方式，應與醫師討論。'
      ]},
      {heading:'這樣做',format:'bullets',items:[
        '頸部摸到腫塊、聲音沙啞持續或吞嚥困難，應就醫檢查。',
        '健檢發現甲狀腺結節時，依醫師建議追蹤或進一步檢查，不必過度恐慌。',
        '對X光檢查有疑慮，可與醫師討論，而非自行拒絕檢查。'
      ]}
    ],
    think_tank_view:'甲狀腺癌是「常見但死亡率很低」的癌症，發現時不必驚慌，但也不要輕忽。最好的態度是：有症狀就醫、檢查結果與醫師好好討論，再一起決定追蹤或治療的方式。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'發生人數、排名、發生率與死亡率引自衛福部112年癌症登記附表並標明年份，X光謠言澄清引自國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['112年甲狀腺癌新發6,045人、中位數50歲、標準化死亡率0.5（癌症登記附表）'],
      layout_reason:'先用表格呈現「發生多、死亡少」的數據對比，再澄清常見迷思，最後給就醫建議。',
      tone:'專業易懂', tone_reason:'需平衡呈現，避免恐慌也避免輕忽。',
      to_verify:['頸部腫塊等症狀描述未引用官方衛教頁面','X光謠言澄清為2015年新聞稿']},
    decision_points:[DP_DIAG]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'健檢發現甲狀腺有東西？先別慌，認識甲狀腺癌',
    update_date:'2026/11/20',
    intro:'甲狀腺癌一年新發6,045人（112年癌症登記），確診年齡中位數只有50歲，女性特別多。聽起來很嚇人，但它其實是十大癌症中死亡率最低的一種。了解它、不恐慌，有狀況就和醫師好好討論。',
    sections:[
      {heading:'甲狀腺癌的數字',format:'table',table:TABLE},
      {heading:'常見的疑問',format:'bullets',items:[
        '照乳房X光、牙科X光會得甲狀腺癌嗎？國健署說，目前沒有證據顯示兩者有關。',
        '甲狀腺癌在女性是第4常見的癌症，年紀也比其他癌症輕。',
        '要不要開刀、怎麼治療，交給醫師依個人狀況判斷。'
      ]},
      {heading:'可以這樣做',format:'bullets',items:[
        '脖子摸到硬塊、聲音一直沙啞、吞東西卡卡，就去看醫生。',
        '健檢報告寫有結節，照醫師說的時間回去追蹤。',
        '對檢查有疑慮就問醫師，別因網路謠言不做檢查。'
      ]}
    ],
    think_tank_view:'收到「甲狀腺結節」的健檢報告，很多人會徹夜難眠。其實大多數結節是良性的，就算是甲狀腺癌，死亡率也很低。按時追蹤、和醫師好好溝通，就是最好的做法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部癌症登記並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以健檢發現結節的焦慮情境切入。', tone:'生活親切', tone_reason:'降低讀者焦慮。', to_verify:['「大多數結節是良性」未附出處']},
    decision_points:[DP_DIAG]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'甲狀腺癌：發生多、死亡率低，有症狀就醫',
    update_date:'2026/11/20',
    intro:'112年甲狀腺癌新發6,045人，中位數50歲，女性第4位；標準化死亡率每十萬人0.5人。',
    sections:[
      {heading:'數據',format:'table',table:TABLE},
      {heading:'迷思',format:'bullets',items:[
        '乳房、牙科X光與甲狀腺癌無實證相關。',
        '治療方式與醫師討論。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '頸部腫塊、沙啞就醫。',
        '結節依醫囑追蹤。'
      ]}
    ],
    think_tank_view:'甲狀腺癌常見但死亡率低，有症狀就醫、依醫囑追蹤即可。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部癌症登記並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為數據、迷思、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['症狀描述出處']},
    decision_points:[DP_DIAG]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'甲狀腺癌', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'甲狀腺癌發生多、死亡率低', primary_visual:'6,045 人', secondary_message:'診斷年齡中位數 50 歲', action_priority:'頸部腫塊就醫、結節依醫囑追蹤'},
    headline_hook:'健檢發現結節？', headline_main:'認識甲狀腺癌', title_accent:'甲狀腺癌',
    hero_message:'發生多、死亡少', hero_support:'標準化死亡率每十萬人 0.5 人（112 年）',
    knowledge_title:'112 年癌症登記', knowledge_note:'有症狀就醫，**結節依醫囑追蹤**',
    knowledge_cards:[
      {label:'新發人數', icon:'report', lines:['6,045 人','癌症發生第 7 位']},
      {label:'女性', icon:'people', lines:['女性癌症','第 4 位']},
      {label:'中位數', icon:'check', lines:['50 歲','十大癌症最年輕']},
      {label:'X 光謠言', icon:'shield', lines:['乳房、牙科 X 光','無實證相關']}
    ],
    primary_stat:{value:'6,045 人', label:'112 年甲狀腺癌新發個案', note:'衛福部癌症登記｜較 111 年增加 444 人'},
    secondary_stats:[
      {value:'18.9', label:'標準化發生率'},
      {value:'0.5', label:'標準化死亡率'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'摸', text:'頸部腫塊、持續沙啞就醫'},
      {key:'追', text:'結節依醫師建議追蹤'},
      {key:'問', text:'治療方式與醫師討論'},
      {key:'辨', text:'不因網路謠言拒絕檢查'}
    ],
    carousel_suggestion:{reason:'若想把數據、迷思與就醫分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'甲狀腺癌', headline_main:'發生多、死亡少'},
      {layout_type:'knowledge', headline_hook:'X 光會致癌？', headline_main:'網路謠言別相信'},
      {layout_type:'action', headline_hook:'健檢發現結節', headline_main:'依醫囑追蹤'}]},
    hashtags:['甲狀腺癌','頸部腫塊','甲狀腺超音波','女性健康'],
    sources:['衛生福利部','衛生福利部國民健康署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'甲狀腺檢查', audience:'中年女性', scene:'醫師用超音波探頭檢查一位中年女性的頸部，螢幕顯示影像',
      emotion:'冷靜、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A doctor performing a neck ultrasound on a middle-aged woman with an image on the monitor, calm and reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['112年甲狀腺癌數據（癌症登記附表）','X光謠言澄清（國健署2015）'],
      layout_reason:'核心是「發生多、死亡少」的平衡認識，選 knowledge：4 張卡呈現關鍵數字與迷思澄清。',
      tone:'專業易懂', tone_reason:'避免恐慌也避免輕忽。',
      to_verify:['標準化死亡率取自附表']},
    decision_points:[Object.assign({}, DP_DIAG, {current:'標準化發生率 18.9、死亡率 0.5（112 年）'})],
    content_check_note:'數據引自衛福部112年癌症登記附表並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'甲狀腺癌',
    collect:{
      summary:'甲狀腺癌112年新發逾6千人、居女性癌症第4位，診斷年齡中位數50歲為十大癌症最年輕，發生率仍上升但標準化死亡率每十萬人僅0.5人；「發生多、死亡少」需要平衡溝通，避免恐慌也避免輕忽。',
      objective_data:[
        {item:'盛行率／發生率',desc:'新發甲狀腺癌約6千人：依2025年12月公布的112年癌症登記，甲狀腺癌新發6045人，居癌症發生第7位、女性第4位，診斷年齡中位數50歲。',tag:'官方統計',source:{name:'衛生福利部：112年國人十大癌症發生人數附表',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'}},
        {item:'年度趨勢方向',desc:'新發人數增加444人：112年較111年5,601人增加，標準化發生率由18.0升至18.9，國健署指出甲狀腺癌發生率仍呈上升。',tag:'官方統計',source:{name:'衛生福利部：112年國人十大癌症發生人數附表',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'}},
        {item:'政策動向',desc:'0項實證顯示X光攝影與甲狀腺癌相關：國健署澄清乳房及牙科X光攝影與甲狀腺癌無實證關聯，呼籲民眾不要因謠言拒絕必要檢查（2015年新聞稿）。',tag:'官方統計',source:{name:'衛生福利部國民健康署：乳房及牙科攝影會增加罹患甲狀腺癌風險嗎？',url:'https://mohw.gov.tw/cp-16-20191-1.html'}},
        {item:'好發族群年齡層',desc:'標準化死亡率每十萬人0.5人：甲狀腺癌是十大癌症中死亡率最低者，診斷年齡比全癌症年輕15歲，女性為主要族群。',tag:'官方統計',source:{name:'衛生福利部：112年國人十大癌症發生人數附表',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'}}
      ],
      product_view:['機會：甲狀腺癌好發於青壯年女性、預後佳，術後長期追蹤與服藥可作為癌症保障與醫療保障的溝通情境。','機會：結節追蹤提醒適合結合健檢報告解讀服務。','風險：甲狀腺癌常被討論「是否過度診斷」，溝通時不得以「年輕女性也會得癌」製造焦慮促銷。'],
      marketing_view:['機會：「健檢發現結節別慌」貼近上班族女性的真實焦慮。','機會：可與良性甲狀腺結節主題串連。','風險：避免宣稱特定檢查能「早期發現救命」，宜呈現發生多、死亡少的平衡事實。'],
      alert_level:'low',
      alert_reason:'發生人數上升但死亡率極低，無政策事件，適合以平衡衛教方式長期溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('頸部摸到腫塊、聲音沙啞持續或吞嚥困難，應就醫檢查','SOURCE_EVIDENCE','advice_without_basis',
          '症狀描述未引用官方衛教來源，讀者無法判斷依據。','low','yes',
          '國健署或醫學會甲狀腺癌症狀衛教資料。','no','confirm','屬常見臨床衛教說法。',
          null,['脖子摸到硬塊、聲音一直沙啞、吞東西卡卡，就去看醫生','頸部腫塊、沙啞就醫']),
        F('其實大多數結節是良性的','SOURCE_EVIDENCE','claim_without_basis',
          '「大多數結節是良性」沒有引用任何數據或來源。','medium','yes',
          '甲狀腺結節良惡性比例的醫學會或官方資料。','no','confirm','說法方向合理，但未附出處。',
          '健檢發現的結節不一定是癌症，需由醫師評估'),
        F('國健署2015年澄清，目前沒有任何實證顯示乳房及牙科X光攝影與甲狀腺癌相關','MEDICAL_INTERPRETATION','overgeneralization',
          '國健署原文同時提到，牙科X光可依情況提供甲狀腺防護領；只寫「無實證相關」，讀者可能誤解為所有X光檢查都完全不需防護。','low','no',
          null,'no','clarify','澄清內容正確，屬補充說明。',
          '國健署2015年澄清，目前沒有任何實證顯示乳房及牙科X光攝影與甲狀腺癌相關；牙科X光是否使用甲狀腺防護領可與醫師討論',['國健署說，目前沒有證據顯示兩者有關','乳房、牙科X光與甲狀腺癌無實證相關']),
        F('是十大癌症中最年輕的','DATA_FACTUAL_ACCURACY','ranking_basis',
          '「最年輕」指十大癌症中診斷年齡中位數最低（50歲），文中未說明比較依據，可能被誤解為最常見於年輕人。','low','no',
          null,'no','clarify','數字正確，屬比較依據說明。',
          '診斷年齡中位數50歲，是十大癌症中最低的')
      ],
      card:[
        F('十大癌症最年輕','DATA_FACTUAL_ACCURACY','ranking_basis',
          '卡面「最年輕」未說明是診斷年齡中位數。','low','no',
          null,'no','clarify','數字正確。',
          '十大癌症中位數最低'),
        F('無實證相關','SOURCE_EVIDENCE','source_unlabeled',
          '卡面未標示澄清的出處與年份（國健署2015年）。','low','no',
          null,'no','clarify','屬來源標示。',
          null)
      ]
    },
    title_alts:[
      '甲狀腺癌新發逾6千人、中位數50歲：認識發生多、死亡少的癌症',
      '健檢發現甲狀腺有東西？先別慌，認識甲狀腺癌',
      '甲狀腺癌是女性第4常見癌症：數據、迷思與就醫時機'
    ],
    card_title_alts:[
      ['健檢發現結節？','認識甲狀腺癌'],
      ['發生多、死亡少','甲狀腺癌數據一次看'],
      ['X 光會致癌？','網路謠言別相信']
    ],
    data_addon:[
      '112年女性十大癌症：乳癌、肺癌、大腸癌、甲狀腺癌依序居前4位。',
      '112年口腔癌、子宮體癌、乳癌、甲狀腺癌的診斷年齡中位數低於全癌症的65歲。',
      '國健署2015年引述原能會：台灣每人每年天然背景輻射約1.62毫西弗，一次乳房X光約0.7毫西弗。'
    ],
    cta:'健檢報告若寫有甲狀腺結節，今天就把下次追蹤日期記到行事曆，按時回診。'
  });
})();
