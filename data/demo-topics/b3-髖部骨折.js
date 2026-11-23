/* v6 示範主題：髖部骨折（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計（表40 跌倒(落)）、國健署「防跌三步」新聞稿（2025/02/18，引110年國民健康訪問調查）、
   國健署常見問答（2026/04/27，引113年死因統計）、衛福部骨鬆新聞稿（髖骨骨折一年內死亡20~25%）、健保署99-103年人工髖關節統計（2015發布）、健保署113/12/21新藥給付新聞稿。
   參考方向：健康智庫〈肌肉與骨骼健康－髖關節骨折〉2026/04/27。 */
(function(){
  const REFS = [
    {title:'114年死因統計結果分析',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'},
    {title:'「防跌三步」守護長者安全',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18870'},
    {title:'長者跌倒的問題真的很嚴重嗎？我們該如何預防長輩跌倒？',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=807&pid=20033'},
    {title:'刻「骨」銘心的愛-50歲以上12.3%的人有骨質疏鬆症',source:'衛生福利部',url:'https://www.mohw.gov.tw/fp-16-14705-1.html'},
    {title:'從健保給付人工髖關節，提醒老年人預防跌倒!',source:'衛生福利部',url:'https://www.mohw.gov.tw/fp-16-19906-1.html'}
  ];
  const TABLE = {headers:['保密防跌','怎麼做'], rows:[
    ['保持骨密度','高鈣飲食、適度日曬補充維生素D，依醫師評估治療骨質疏鬆'],
    ['肌力與平衡','規律運動、肌力訓練，練習扶物起站、原地踏步'],
    ['居家環境','光線明亮、地面乾燥、收好電線雜物，浴室與樓梯裝扶手'],
    ['個人習慣','起身放慢、穿防滑鞋，看診帶藥單請醫師評估用藥'],
    ['定期評估','65歲以上至少每半年做一次長者功能評估（長者量六力）']
  ]};
  const TAGS = ['髖部骨折','預防跌倒','骨質疏鬆','高齡健康','長者照護'];

  const DP_MORT = {id:'dp-hip-mortality', type:'data_scope', title:'一年內死亡率有不同數字',
    desc:'衛福部骨鬆衛教資料寫「約20~25%」，國際骨質疏鬆基金會與部分學會引述「20%~24%」，媒體報導另有「20-30%」等說法；來源與年份不同，AI 採用國內官方衛教資料的寫法。',
    current:'約20~25%的機率會在一年內死亡（衛福部骨鬆衛教資料）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'20~25%', value:'衛福部衛教資料', note:'國健署骨鬆新聞稿（目前採用）'},
      {label:'20~24%', value:'國際骨質疏鬆基金會', note:'媒體與學會轉述的國際數字'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'髖部骨折是長者的「最後一次骨折」？認識風險、治療與保密防跌',
    update_date:'2026/11/20',
    intro:'依衛生福利部114年死因統計，全國因跌倒（落）死亡者有1,632人；國民健康署110年國民健康訪問調查也顯示，每6位長者就有1位曾經跌倒、每12位有1位因跌倒就醫。長者跌倒最嚴重的後果之一就是髖部骨折，衛福部骨鬆衛教資料指出，髖骨骨折約有20~25%的機率會在一年內死亡，存活者也常面臨行動能力下降與長期照顧需求。',
    sections:[
      {heading:'誰是髖部骨折的高風險族群',format:'bullets',items:[
        '骨質疏鬆者：骨質變弱是老年骨折兩大因素之一，另一個是跌倒。',
        '肌力不足、平衡不佳，或患有失智症、巴金森氏症等影響行動與判斷的疾病者。',
        '同時服用多種藥物、容易頭暈或血壓不穩的長者。',
        '停經後女性：骨質流失較快，骨鬆比例高於男性。'
      ]},
      {heading:'骨折後：及早手術與復健',format:'bullets',items:[
        '髖部骨折多數需要手術治療，在身體狀況穩定的前提下宜儘早安排，避免長期臥床。',
        '長期臥床容易引發壓瘡、肺炎、泌尿道感染與血栓等併發症，術後應在醫療團隊指導下儘早下床復健。',
        '曾發生骨鬆性骨折者再次骨折機率較高，骨折後應同時評估並治療骨質疏鬆。'
      ]},
      {heading:'預防骨折靠「保密防跌」',format:'table',table:TABLE}
    ],
    think_tank_view:'髖部骨折很少是「突然發生」的意外，背後通常是骨質疏鬆、肌力退化、用藥與居家環境累積的結果。與其等骨折後才處理，不如把防跌當成日常照護：每半年替家中長輩做一次功能評估、整理走道與浴室，並在看診時主動請醫師檢視用藥，這些都比事後治療更能守住長輩的行動力。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數引自衛福部114年死因統計，跌倒比例標明國健署110年調查，一年內死亡率標明為衛福部衛教資料，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['跌倒（落）死亡1,632人取自衛福部114年死因統計表40','每6位長者1位跌倒取自國健署2025/02/18新聞稿（110年國民健康訪問調查）'],
      layout_reason:'先交代高風險族群，再說明骨折後治療與復健重點，最後以表格整理預防行動。',
      tone:'專業易懂', tone_reason:'讀者多為照顧長輩的子女，需要清楚可執行的資訊。',
      to_verify:['「20~25%一年內死亡」為較早期衛教資料，國內尚無更新的官方數字','每6位長者1位跌倒為110年調查，下一期國民健康訪問調查尚未公布']},
    decision_points:[DP_MORT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'長輩跌一跤就站不起來？髖部骨折的風險與預防一次看',
    update_date:'2026/11/20',
    intro:'家裡長輩跌倒，最讓人擔心的就是髖部骨折。國民健康署110年調查發現，每6位長者就有1位曾經跌倒，每12位就有1位因為跌倒去看醫生；衛福部114年死因統計中，因跌倒過世的人有1,632位。髖骨骨折更不能輕忽，約有20~25%的機率會在一年內死亡。好在大多數跌倒是可以預防的。',
    sections:[
      {heading:'這些長輩要特別小心',format:'bullets',items:[
        '有骨質疏鬆、骨頭比較脆的長輩。',
        '腿沒力、走路不穩，或有失智、巴金森氏症的長輩。',
        '吃很多種藥、常頭暈的長輩。',
        '停經後的媽媽們，骨質流失比較快。'
      ]},
      {heading:'萬一骨折了怎麼辦？',format:'bullets',items:[
        '大多需要開刀，身體狀況穩定後越早處理越好。',
        '一直躺著容易生褥瘡、得肺炎，術後要照醫療團隊的指導早點下床復健。',
        '骨折過一次，再骨折的機會比較高，記得一起治療骨鬆。'
      ]},
      {heading:'保密防跌，這樣做',format:'table',table:TABLE}
    ],
    think_tank_view:'很多長輩跌倒後不敢說，怕被唸、怕麻煩家人。陪爸媽把家裡燈換亮一點、浴室加個扶手，看診時一起帶上藥袋請醫師看看，比任何叮嚀都實在。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部與國健署公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家人照顧的角度說明風險、骨折後處理與預防。', tone:'生活親切', tone_reason:'給照顧長輩的子女閱讀。', to_verify:['「20~25%一年內死亡」的資料年份']},
    decision_points:[DP_MORT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'髖部骨折：高風險族群與保密防跌',
    update_date:'2026/11/20',
    intro:'每6位長者就有1位曾經跌倒（國健署110年調查）。髖骨骨折約有20~25%的機率會在一年內死亡，防跌要從日常做起。',
    sections:[
      {heading:'高風險族群',format:'bullets',items:[
        '骨質疏鬆、肌力不足、平衡不佳者。',
        '失智症、巴金森氏症或多重用藥者。'
      ]},
      {heading:'骨折後',format:'bullets',items:[
        '多需手術，狀況穩定後宜儘早處理。',
        '儘早下床復健，避免臥床併發症。'
      ]},
      {heading:'保密防跌',format:'table',table:TABLE}
    ],
    think_tank_view:'髖部骨折是骨鬆、肌力與環境共同造成的結果；保骨、練肌力、改善居家環境與定期評估，缺一不可。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部與國健署公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為高風險族群、骨折後、保密防跌三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['「20~25%一年內死亡」的資料年份']},
    decision_points:[DP_MORT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'髖部骨折', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'每 6 位長者就有 1 位曾跌倒', primary_visual:'1,632 人', secondary_message:'跌倒後髖部痛、站不起來要就醫', action_priority:'保密防跌'},
    headline_hook:'跌一跤可能就臥床', headline_main:'髖部骨折 3 大警訊', title_accent:'3 大警訊',
    hero_message:'每 6 位長者就有 1 位', hero_support:'過去一年曾跌倒（國健署 110 年調查）',
    knowledge_title:'跌倒後留意', knowledge_note:'出現警訊**別硬撐**，儘速就醫評估',
    knowledge_cards:[
      {label:'髖部疼痛', icon:'pressure', lines:['鼠蹊或大腿外側痛','移動時更明顯']},
      {label:'無法站立', icon:'check', lines:['腳無法承重','站不起來或不能走']},
      {label:'腳型改變', icon:'check', lines:['患側腳變短','腳掌向外轉']}
    ],
    primary_stat:{value:'1,632 人', label:'114 年跌倒（落）死亡', note:'衛福部 114 年死因統計｜全年齡'},
    secondary_stats:[
      {value:'20~25%', label:'髖骨骨折一年內死亡機率（衛教資料）'}
    ],
    action_title:'保密防跌這樣做',
    action_cards:[
      {key:'保', text:'高鈣飲食、適度日曬，依醫囑治療骨鬆'},
      {key:'動', text:'規律運動與肌力訓練，練平衡'},
      {key:'改', text:'走道淨空、燈光明亮，浴室裝扶手'},
      {key:'評', text:'每半年做一次長者功能評估'}
    ],
    carousel_suggestion:{reason:'若想把警訊、骨折後照護與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'跌倒後留意', headline_main:'髖部骨折 3 大警訊'},
      {layout_type:'data', headline_hook:'跌倒有多常見', headline_main:'每 6 位長者就有 1 位'},
      {layout_type:'action', headline_hook:'保密防跌', headline_main:'4 件事守住行動力'}]},
    hashtags:['髖部骨折','預防跌倒','骨質疏鬆','長者照護'],
    sources:['衛生福利部','衛生福利部國民健康署'],
    illustration_category:'bones-joints',
    illustration:{topic:'髖部骨折預防', audience:'長者與照顧者', scene:'家人扶著長者在明亮的走廊慢慢行走，牆邊裝有扶手',
      emotion:'安心、被照顧', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult child supporting an older parent walking slowly along a bright hallway with a wall handrail, reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：114年跌倒（落）死亡1,632人（衛福部死因統計）','每6位長者1位跌倒取自國健署110年國民健康訪問調查'],
      layout_reason:'核心是「跌倒後認得骨折警訊、平時保密防跌」，選 knowledge：3 個警訊放中段當主角，死亡人數退到下方，最後給 4 個防跌行動。',
      tone:'專業易懂', tone_reason:'照顧者需要可對照的具體警訊。',
      to_verify:['1,632人為全年齡跌倒（落）死亡，非僅髖部骨折','20~25%為衛教資料寫法']},
    decision_points:[Object.assign({}, DP_MORT, {current:'20~25%｜髖骨骨折一年內死亡機率（衛教資料）'})],
    content_check_note:'死亡人數引自衛福部114年死因統計，跌倒比例標明國健署110年調查，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'髖部骨折',
    collect:{
      summary:'長者跌倒是髖部骨折的主要原因，國健署調查每6位長者就有1位曾跌倒，髖骨骨折一年內死亡機率約兩成，存活者也常因行動力下降而需要長期照顧；超高齡社會下，防跌與骨鬆治療是高齡健康溝通的核心議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'每6位長者就有1位曾跌倒：依國健署110年國民健康訪問調查，每6位長者就有1位曾經跌倒，每12位就有1位因跌倒就醫。',tag:'官方統計',source:{name:'國民健康署：「防跌三步」守護長者安全',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18870'}},
        {item:'年度趨勢方向',desc:'1632人因跌倒（落）死亡：衛福部114年死因統計中，跌倒（落）死亡1,632人，另依113年死因統計，跌倒是65歲以上長者事故傷害死因第二位，每十萬人25.2人。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果分析',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'政策動向',desc:'約13.4萬名骨鬆病友受惠：健保署擴增骨質疏鬆症用藥給付，納入未骨折但具高危險因子者與遠端橈骨、近端肱骨骨折病人，預估年藥費約8.65億元，最快114年2月1日生效。',tag:'官方統計',source:{name:'衛生福利部：健保給付接軌國際 再通過給付多項新藥',url:'https://mohw.gov.tw/cp-16-80934-1.html'}},
        {item:'好發族群年齡層',desc:'約270人／每10萬名長者：健保署99至103年統計，65歲以上因髖部骨折接受髖關節置換手術的就醫發生率為每10萬人267至273人，女性高於男性。',tag:'官方統計',source:{name:'衛生福利部：從健保給付人工髖關節，提醒老年人預防跌倒',url:'https://www.mohw.gov.tw/fp-16-19906-1.html'}}
      ],
      product_view:['機會：髖部骨折常導致失能與長期照顧需求，可連結失能、長照與骨折保障的必要性說明。','機會：居家防跌評估、肌力訓練課程可作為熟齡保戶健康管理服務。','風險：避免以死亡率數字恐嚇銷售，或暗示特定保健品可預防骨折。'],
      marketing_view:['機會：春節返鄉、重陽節是「陪爸媽檢查居家防跌」的溝通時機。','機會：國健署「長者量六力」LINE 帳號可作為互動導流工具。','風險：骨折與死亡數字易引發焦慮，宜搭配可做的預防行動。'],
      alert_level:'low',
      alert_reason:'屬長期高齡健康議題，無急迫時效事件；適合在重陽節、世界骨質疏鬆日（10月20日）前後與防跌主題一併溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('約有20~25%的機率會在一年內死亡','CURRENCY_TIMELINESS','source_year_unstated',
          '一年內死亡率引自衛福部骨鬆衛教資料，文中未標示該數字的資料年份與研究來源，讀者無法判斷時效。','medium','yes',
          '國內髖骨骨折一年內死亡率的研究出處與年份。','yes','confirm','國內外不同研究數值相近但不完全一致。',
          '約有2成的機率會在一年內死亡（衛福部骨鬆衛教資料）'),
        F('全國因跌倒（落）死亡者有1,632人','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '1,632人為全年齡跌倒（落）死亡，並非髖部骨折死亡，放在髖部骨折文章開頭容易被誤讀為骨折死亡人數。','medium','no',
          null,'no','clarify','數字本身正確，屬統計範圍說明。',
          '全國各年齡因跌倒（落）死亡者有1,632人（非僅髖部骨折）'),
        F('同時服用多種藥物、容易頭暈或血壓不穩的長者','MEDICAL_INTERPRETATION','vague_term',
          '「多種藥物」未說明哪些藥物與跌倒相關，讀者難以判斷自己是否屬高風險。','low','no',
          null,'no','clarify','可建議看診時攜帶藥單請醫師評估。',
          '同時服用多種藥物（如安眠、降壓藥等，可請醫師評估）、容易頭暈或血壓不穩的長者',
          ['吃很多種藥、常頭暈的長輩','多重用藥者']),
        F('髖部骨折多數需要手術治療，在身體狀況穩定的前提下宜儘早安排','MEDICAL_INTERPRETATION','individualized_care',
          '手術時機需依個人共病與醫師評估，文中未提醒讀者由醫療團隊決定，可能被理解為一般性指令。','low','no',
          null,'no','clarify','屬臨床決策提醒。',
          '髖部骨折多數需要手術治療，手術時機請由醫療團隊依個人狀況評估後儘早安排',
          ['大多需要開刀，身體狀況穩定後越早處理越好','多需手術，狀況穩定後宜儘早處理'])
      ],
      card:[
        F('114 年跌倒（落）死亡','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '主數字為全年齡跌倒死亡，卡面主題為髖部骨折，讀者可能誤以為是髖部骨折死亡人數。','medium','no',
          null,'no','clarify','屬統計範圍說明，note 已寫全年齡但字級小。',
          '114 年各年齡跌倒死亡'),
        F('患側腳變短','MEDICAL_INTERPRETATION','symptom_not_universal',
          '腳變短、外轉是常見但非必然的表現，部分骨折（如無位移骨折）可能沒有明顯外觀變化，卡面未說明。','low','no',
          null,'no','clarify','可補一句「沒有外觀變化也可能骨折」。',
          '患側腳可能變短')
      ]
    },
    title_alts:[
      '髖部骨折是長者的「最後一次骨折」？認識風險、治療與保密防跌',
      '長輩跌一跤就站不起來？髖部骨折的風險與預防一次看',
      '每6位長者就有1位跌倒：髖部骨折警訊與保密防跌指南'
    ],
    card_title_alts:[
      ['跌一跤可能就臥床','髖部骨折 3 大警訊'],
      ['長輩跌倒別硬撐','這 3 個徵兆要就醫'],
      ['每 6 位長者 1 位跌倒','保密防跌 4 件事']
    ],
    data_addon:[
      '國健署110年國民健康訪問調查：每12位長者就有1位因跌倒就醫。',
      '113年死因統計：跌倒為65歲以上事故傷害死因第二位，每十萬人25.2人。',
      '截至2025年1月，65歲以上人口已超過460萬人，占總人口超過20%。'
    ],
    cta:'這個週末陪家中長輩走一遍家裡的走道、浴室與樓梯，把絆腳的雜物收好、夜燈裝上，並約時間做一次長者功能評估。'
  });
})();
