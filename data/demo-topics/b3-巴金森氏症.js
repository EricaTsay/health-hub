/* v6 示範主題：巴金森氏症（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計（表7 65歲以上、表34 歷年帕金森(氏)病）、
   衛福部109-112年全國社區失智症流行病學調查（巴金森氏症失智症7.12%）、健保署深層腦部刺激術醫材給付新聞（111/06/01起）。
   註：國內巴金森氏症總病人數未查到官方公布數字，本題不寫盛行人數。
   參考方向：健康智庫〈巴金森氏症〉2023/03。 */
(function(){
  const REFS = [
    {title:'114年死因統計結果分析',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'},
    {title:'114年死因統計摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'衛福部公布最新臺灣社區失智症流行病學調查結果',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-78102-1.html'},
    {title:'自111年6月1日起巴金森氏症病人執行深腦刺激術所需之全套醫材，皆納入健保',source:'衛生福利部中央健康保險署',url:'https://www.nhi.gov.tw/ch/cp-1932-76866-3255-1.html'}
  ];
  const TABLE = {headers:['典型動作症狀','常見表現'], rows:[
    ['靜止型顫抖','休息時手或腳抖動，常從單側開始，活動時減輕'],
    ['動作遲緩','動作變慢變小，寫字越寫越小、走路步伐變小'],
    ['肢體僵硬','肌肉緊繃，轉身、起身不靈活，臉部表情減少'],
    ['姿勢不穩','平衡變差、容易跌倒，多出現在病程較後期']
  ]};
  const TAGS = ['巴金森氏症','帕金森氏症','神經退化','高齡健康','預防跌倒'];

  const DP_DEATH = {id:'dp-pd-death', type:'data_scope', title:'死亡人數有兩種範圍',
    desc:'114年死因統計中，帕金森(氏)病全年齡死亡1,740人（表34），65歲以上為1,670人（表7，居65歲以上死因第13位）。兩者範圍不同，AI 文章採全年齡、圖卡同時註明。另108年起死因選取準則改版，跨年比較宜保守解讀。',
    current:'114年帕金森(氏)病死亡1,740人（全年齡）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'1,740人', value:'全年齡', note:'114年死因統計表34（目前採用）'},
      {label:'1,670人', value:'65歲以上', note:'114年死因統計表7，65歲以上死因第13位'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'巴金森氏症不只是手抖：4大動作症狀與早期非動作警訊',
    update_date:'2026/11/20',
    intro:'巴金森氏症是大腦中製造多巴胺的神經細胞逐漸退化所造成的疾病，好發於中老年人。依衛生福利部死因統計，帕金森(氏)病死亡人數由104年的1,100人增加到114年的1,740人，65歲以上族群中居死因第13位。巴金森氏症雖無法根治，但經規律治療與復健，多數患者能維持相當程度的生活品質。',
    sections:[
      {heading:'4大典型動作症狀',format:'table',table:TABLE},
      {heading:'容易被忽略的早期非動作症狀',format:'bullets',items:[
        '嗅覺變差、長期便祕。',
        '睡眠中大聲說夢話、手腳揮動（快速動眼期睡眠行為障礙）。',
        '情緒低落、焦慮，或姿勢性低血壓造成頭暈。',
        '病程後期可能出現認知退化；全國調查中，巴金森氏症失智症占失智類型的7.12%。'
      ]},
      {heading:'治療與日常照護',format:'bullets',items:[
        '藥物以補充或模擬多巴胺作用為主，劑量與服藥時間需依醫師指示調整，不可自行停藥。',
        '藥物效果不穩定的患者，可經醫師評估深層腦部刺激術；自111年6月1日起，所需全套醫材皆納入健保給付。',
        '規律運動與復健（步態、平衡、伸展訓練）有助維持活動能力，並降低跌倒風險。'
      ]}
    ],
    think_tank_view:'很多人以為巴金森氏症就是「手抖」，其實嗅覺變差、便祕、睡夢中拳打腳踢等非動作症狀，可能比手抖更早出現。長輩若同時出現動作變慢、寫字變小與這些變化，值得到神經內科評估。確診後，按時服藥加上每天規律活動，是維持行動力最重要的兩件事。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數引自衛福部114年死因統計並標明年份，健保給付引自健保署公告，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['帕金森(氏)病104年1,100人、114年1,740人取自衛福部死因統計表34','巴金森氏症失智症7.12%取自衛福部109-112年全國失智症調查'],
      layout_reason:'先用表格說明典型動作症狀，再補充早期非動作警訊，最後整理治療與照護。',
      tone:'專業易懂', tone_reason:'症狀辨識需要具體描述。',
      to_verify:['國內巴金森氏症總病人數未查到官方統計','108年起死因選取準則改版，104年與114年比較需保守解讀']},
    decision_points:[DP_DEATH]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽走路變慢、寫字變小？認識巴金森氏症的早期徵兆',
    update_date:'2026/11/20',
    intro:'巴金森氏症是腦部神經慢慢退化的疾病，常見於中老年人。衛福部統計，因帕金森(氏)病過世的人從104年的1,100人增加到114年的1,740人。它不只是手抖，很多徵兆藏在日常小地方；早點發現、好好治療，多數人都能維持不錯的生活。',
    sections:[
      {heading:'4個常見動作變化',format:'table',table:TABLE},
      {heading:'這些小變化也要留意',format:'bullets',items:[
        '聞不太到味道、常常便祕。',
        '睡覺時大聲說夢話、手腳亂揮。',
        '心情變低落，或站起來時頭暈。'
      ]},
      {heading:'確診後怎麼照顧？',format:'bullets',items:[
        '照醫師指示按時吃藥，不要自己停藥或改劑量。',
        '藥效不穩的人，可以問醫師是否適合深層腦部刺激術，所需醫材已納入健保。',
        '每天動一動：走路、伸展、平衡練習，也能減少跌倒。'
      ]}
    ],
    think_tank_view:'陪長輩看診時，把「寫字變小、聞不到味道、睡覺會揮手」這些小事告訴醫師，常常能幫助更早判斷。確診後，家人陪著一起散步運動，就是很好的復健。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部死因統計並標明年份，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從家人觀察得到的日常變化切入。', tone:'生活親切', tone_reason:'給照顧長輩的子女閱讀。', to_verify:['跨年死亡人數比較的口徑']},
    decision_points:[DP_DEATH]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'巴金森氏症：4大症狀與早期警訊',
    update_date:'2026/11/20',
    intro:'114年帕金森(氏)病死亡1,740人（衛福部死因統計）。巴金森氏症不只手抖，及早就醫、規律治療很重要。',
    sections:[
      {heading:'動作症狀',format:'table',table:TABLE},
      {heading:'非動作警訊',format:'bullets',items:[
        '嗅覺變差、便祕。',
        '睡夢中說話、揮動手腳。'
      ]},
      {heading:'治療照護',format:'bullets',items:[
        '依醫囑服藥，不自行停藥。',
        '規律運動與復健，預防跌倒。'
      ]}
    ],
    think_tank_view:'按時服藥加上每天規律活動，是巴金森氏症患者維持行動力的關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部死因統計並標明年份，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為動作症狀、非動作警訊、治療照護三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['死亡人數範圍為全年齡']},
    decision_points:[DP_DEATH]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'巴金森氏症', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'帕金森病死亡人數 10 年增加約 6 成', primary_visual:'1,740 人', secondary_message:'不只手抖，動作變慢也要留意', action_priority:'及早就醫、規律活動'},
    headline_hook:'不只是手抖', headline_main:'巴金森氏症，留意 4 大症狀', title_accent:'4 大症狀',
    primary_stat:{kicker:'114 年・全年齡', value:'1,740 人', label:'帕金森(氏)病死亡人數', note:'衛福部死因統計｜65 歲以上 1,670 人'},
    chart:{type:'bar', title:'帕金森(氏)病死亡人數（人）', points:[
      {label:'2015', value:1100, display:'1,100'},
      {label:'2018', value:1223, display:'1,223'},
      {label:'2021', value:1600, display:'1,600'},
      {label:'2025', value:1740, display:'1,740', highlight:true}
    ], note:'衛福部死因統計｜108 年起選取準則改版'},
    secondary_stats:[
      {value:'7.12%', label:'失智症中巴金森氏症失智症'},
      {value:'第 13 位', label:'65 歲以上死因排名（114 年）'}
    ],
    action_title:'這樣照顧自己',
    action_cards:[
      {key:'察', text:'手抖、動作變慢、寫字變小要就醫'},
      {key:'藥', text:'依醫囑按時服藥，不自行停藥'},
      {key:'動', text:'每天步態、平衡與伸展訓練'},
      {key:'防', text:'居家防跌，起身動作放慢'}
    ],
    carousel_suggestion:{reason:'若想把數據、症狀與照護分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'死亡人數趨勢', headline_main:'10 年增加約 6 成'},
      {layout_type:'knowledge', headline_hook:'不只是手抖', headline_main:'4 大動作症狀'},
      {layout_type:'action', headline_hook:'確診後', headline_main:'按時服藥、每天活動'}]},
    hashtags:['巴金森氏症','神經退化','高齡健康','預防跌倒'],
    sources:['衛生福利部','衛生福利部中央健康保險署'],
    illustration_category:'brain',
    illustration:{topic:'巴金森氏症照護', audience:'中老年患者與家人', scene:'長者在家人陪伴下於公園做伸展與平衡運動',
      emotion:'穩定、互相扶持', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult doing gentle stretching and balance exercises in a park with a family member beside them, steady and supportive mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：114年帕金森(氏)病死亡1,740人（衛福部死因統計）','歷年死亡人數取自死因統計表34'],
      layout_reason:'核心是「人數逐年增加、但症狀可辨識」，選 data：死亡人數與 10 年趨勢當主角，症狀辨識與照護放在行動區。',
      tone:'專業易懂', tone_reason:'議題莊重，以可做的行動收尾。',
      to_verify:['「約 6 成」為1,100→1,740換算','108年選取準則改版對趨勢的影響']},
    decision_points:[Object.assign({}, DP_DEATH, {current:'1,740 人｜114 年帕金森(氏)病死亡（全年齡）'})],
    content_check_note:'死亡人數引自衛福部114年死因統計並標明年份，未使用療效保證用語，未涉及具體藥品或商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'巴金森氏症',
    collect:{
      summary:'巴金森氏症是常見的神經退化疾病，衛福部死因統計顯示帕金森(氏)病死亡人數由104年1,100人增至114年1,740人；症狀除手抖外還包括動作遲緩、僵硬與非動作症狀，長期照顧與跌倒風險高，是高齡化下值得溝通的疾病議題。',
      objective_data:[
        {item:'年度趨勢方向',desc:'1740人死於帕金森(氏)病：衛福部114年死因統計，帕金森(氏)病死亡1,740人，104年為1,100人（108年起死因選取準則改版，跨年比較宜保守）。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果分析',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'好發族群年齡層',desc:'65歲以上1670人：114年死因統計中，65歲以上帕金森(氏)病死亡1,670人，居65歲以上死因第13位。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'盛行率／發生率',desc:'失智症中7.12%為巴金森氏症失智症：衛福部109至112年全國社區失智症流行病學調查，巴金森氏症失智症是第三大失智類型。',tag:'官方統計',source:{name:'衛生福利部：最新臺灣社區失智症流行病學調查結果',url:'https://www.mohw.gov.tw/cp-16-78102-1.html'}},
        {item:'政策動向',desc:'約300名病人受惠：健保署自111年6月1日起將巴金森氏症深層腦部刺激術所需全套醫材納入給付，估計每年約300名病人受惠。',tag:'官方統計',source:{name:'健保署：深腦刺激術全套醫材納入健保',url:'https://www.nhi.gov.tw/ch/cp-1932-76866-3255-1.html'}}
      ],
      product_view:['機會：巴金森氏症病程長，後期常伴隨跌倒、失能與失智，可連結長照與失能保障說明。','機會：運動復健、居家防跌可作為熟齡健康管理服務內容。','風險：避免暗示特定保健品或療法可治癒或延緩病程。'],
      marketing_view:['機會：每年4月11日世界巴金森日是固定溝通檔期。','機會：以「不只是手抖」打破常見迷思，容易引起分享。','風險：症狀描述需避免讓讀者自我診斷，應引導就醫。'],
      alert_level:'low',
      alert_reason:'屬長期神經退化議題，無急迫時效事件；適合在4月世界巴金森日前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('由104年的1,100人增加到114年的1,740人','DATA_FACTUAL_ACCURACY','series_break',
          '108年起死因統計改採新版死因選取準則，104年與114年的數字口徑不完全相同，文中未提醒，直接比較可能高估增幅。','medium','no',
          null,'no','clarify','衛福部附註建議不宜回推過長時間數列。',
          '由104年的1,100人增加到114年的1,740人（108年起死因選取準則改版，跨年比較宜保守）',
          ['從104年的1,100人增加到114年的1,740人']),
        F('多數患者能維持相當程度的生活品質','MEDICAL_INTERPRETATION','outcome_generalization',
          '「多數患者」的說法未附研究依據，個別病程差異大，可能讓讀者對預後有過度樂觀的期待。','low','no',
          null,'no','clarify','屬預後表達方式。',
          '許多患者能延緩症狀對生活的影響',
          ['多數人都能維持不錯的生活']),
        F('睡眠中大聲說夢話、手腳揮動（快速動眼期睡眠行為障礙）','MEDICAL_INTERPRETATION','symptom_not_specific',
          '睡眠行為障礙與巴金森氏症相關，但並非出現就代表罹病，文中未說明，可能造成讀者過度擔心。','low','no',
          null,'no','clarify','屬症狀解讀提醒。',
          '睡眠中大聲說夢話、手腳揮動（快速動眼期睡眠行為障礙，可能與巴金森氏症相關，需醫師評估）'),
        F('自111年6月1日起，所需全套醫材皆納入健保給付','REGULATORY_COMPLIANCE','coverage_condition',
          '健保給付有適應症與事前審查條件，文中未說明，讀者可能以為所有患者都能使用。','low','no',
          null,'no','clarify','給付條件依健保署規定。',
          '自111年6月1日起，符合給付條件者所需全套醫材皆納入健保給付')
      ],
      card:[
        F('失智症中巴金森氏症失智症','SOURCE_EVIDENCE','label_unclear',
          '7.12% 的分母是全國失智症個案，卡面標籤容易被讀成「巴金森氏症患者有 7.12% 失智」，也未標示出處與調查期間。','low','no',
          null,'no','clarify','數字取自衛福部109-112年全國社區失智症流行病學調查。',
          '失智類型占比（衛福部 109–112 年調查）'),
        F('手抖、動作變慢、寫字變小要就醫','MEDICAL_INTERPRETATION','symptom_not_specific',
          '手抖也可能來自原發性顫抖等其他原因，卡面未說明需由醫師鑑別。','low','no',
          null,'no','clarify','屬症狀解讀提醒。',
          '手抖、動作變慢、寫字變小，請醫師評估')
      ]
    },
    title_alts:[
      '巴金森氏症不只是手抖：4大動作症狀與早期非動作警訊',
      '爸媽走路變慢、寫字變小？認識巴金森氏症的早期徵兆',
      '114年帕金森病死亡1,740人：從症狀辨識到治療照護'
    ],
    card_title_alts:[
      ['不只是手抖','巴金森氏症，留意 4 大症狀'],
      ['走路變慢、寫字變小？','巴金森氏症早期徵兆'],
      ['死亡人數 10 年持續增加','認識巴金森氏症']
    ],
    data_addon:[
      '114年65歲以上帕金森(氏)病死亡：男性886人、女性784人。',
      '健保署自104年1月1日起將深層腦部刺激器納入給付。',
      '巴金森氏症失智症在全國失智類型中排名第三（7.12%），次於阿茲海默型與血管型。'
    ],
    cta:'如果家中長輩最近動作變慢、寫字變小或常說夢話揮手，這個月就陪他到神經內科做一次評估。'
  });
})();
