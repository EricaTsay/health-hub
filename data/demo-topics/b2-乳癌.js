/* v6 示範主題：乳癌（B2 癌症）
   查證日期：2026-11-20。數據來源：衛福部112年癌症登記報告（2025-12-30 公布）、114年死因統計摘要表（女性乳癌死亡時間序列）、國健署乳癌防治專區與2025年篩檢新聞稿。
   參考方向：健康智庫〈女性腫瘤與癌症－乳癌〉2026/03/09。 */
(function(){
  const REFS = [
    {title:'公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-84987-1.html'},
    {title:'癌症時鐘快轉14秒！每3分48秒有1人罹癌 肺癌再奪癌王（國健署112年癌症登記報告記者會）',source:'聯合報',url:'https://udn.com/news/story/7266/9233973'},
    {title:'乳癌篩檢年齡擴大至40-74歲婦女',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18916'},
    {title:'粉紅十月！乳癌篩檢突破百萬人次 40開始乳攝篩檢護健康',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19433'},
    {title:'乳癌防治',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=614&pid=1124'},
  ];
  const TABLE = {headers:['期別','5年存活率'], rows:[
    ['第0期','97.4%'],
    ['第1期','96.2%'],
    ['第2期','90.9%'],
    ['第3期','77.3%'],
    ['第4期','39.5%']
  ]};
  const TAGS = ['乳癌','乳癌篩檢','乳房X光攝影','女性健康','癌症防治'];

  const DP_SURV = {id:'dp-bc-survival', type:'data_version', title:'早期乳癌存活率有兩組數字',
    desc:'國健署新聞稿引用107-111年資料「早期乳癌5年存活率99%以上」；乳癌防治專區的分期表則是第0期97.4%、第1期96.2%。兩者年份與分組方式不同，AI 沒有替你挑選要用哪一組。',
    current:'早期乳癌5年存活率達99%以上（107-111年）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'99%以上', value:'早期乳癌（107-111年）', note:'國健署2025年新聞稿（目前採用）'},
      {label:'97.4%／96.2%', value:'第0期／第1期', note:'國健署乳癌防治專區分期存活率表，未標示資料年份'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'乳癌篩檢擴大到40-74歲！每2年1次乳房X光攝影',
    update_date:'2026/11/20',
    intro:'乳癌是我國女性癌症發生率第1位、死亡率第2位的癌症。依衛生福利部112年癌症登記報告，女性乳癌新發個案17,779人；114年死因統計則有3,116名女性死於乳癌。好消息是，乳癌是少數能靠篩檢早期發現的癌症，國健署自114年起已將免費乳房X光攝影擴大到40至74歲婦女。',
    sections:[
      {heading:'越早發現，存活率越高',format:'table',table:TABLE},
      {heading:'為什麼要定期篩檢',format:'bullets',items:[
        '國內研究顯示，每2年接受1次乳房X光攝影，可降低41%的乳癌死亡率，並減少30%的晚期乳癌發生率。',
        '依107-111年資料，早期乳癌5年存活率達99%以上，若延誤到晚期才發現，5年存活率僅約39.2%。',
        '乳房X光攝影能發現摸不到的鈣化點與0期乳癌；但約15%的乳癌無法由乳房X光攝影偵測，檢查正常後若有異狀仍應就醫。'
      ]},
      {heading:'誰該注意、怎麼做',format:'bullets',items:[
        '40至74歲婦女：每2年1次免費乳房X光攝影，可用健保快易通APP查詢資格，攜帶健保卡至認證醫療機構受檢。',
        '危險因子包括乳癌家族史、初經早或停經晚、未曾生育或30歲後才生第一胎、未曾哺乳、長期使用賀爾蒙補充劑。',
        '檢查避開月經來前乳房腫脹期；結果為0、4、5類時應盡速回診進一步檢查。',
        '日常多運動、少吃高脂肪食物，並留意乳房腫塊、乳頭分泌物或皮膚凹陷等變化。'
      ]}
    ],
    think_tank_view:'乳癌的關鍵不在「會不會遇到」，而在「多早發現」。0期與第4期的5年存活率差距超過一倍，而每2年一次、約十分鐘的乳房X光攝影，就是把機率拉向早期的最有效方法。建議把篩檢排進行事曆，也提醒身邊40歲以上的家人一起做。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'發生與死亡人數引自國健署癌症登記及衛福部死因統計並標明年份，篩檢效益標明為國內研究，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['沿用步驟1洞察：112年新發17,779人（癌症登記）、114年死亡3,116人（死因統計）','分期存活率取自國健署乳癌防治專區'],
      layout_reason:'先用分期存活率表讓讀者看見「早期發現」的差距，再說明篩檢效益，最後給篩檢資格與做法。',
      tone:'專業易懂', tone_reason:'篩檢衛教需要精確的資格與數據，避免恐嚇。',
      to_verify:['17,779人為國健署於112年癌症登記報告記者會說明，官方附表數字待核對','分期存活率表的資料年份']},
    decision_points:[DP_SURV]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'40歲以上姊妹注意！乳房X光攝影現在每2年免費1次',
    update_date:'2026/11/20',
    intro:'乳癌是台灣女性最常見的癌症。依衛生福利部112年癌症登記報告，女性乳癌新發個案17,779人，平均每天約有49位女性被診斷出乳癌。別緊張，乳癌只要早點發現，治療效果很好；而且從114年起，40到74歲的女性每2年就能免費做1次乳房X光攝影。',
    sections:[
      {heading:'早一點發現，差很多',format:'table',table:TABLE},
      {heading:'為什麼一定要去篩檢？',format:'bullets',items:[
        '國內研究發現，每2年做1次乳房X光攝影，可降低41%的乳癌死亡率。',
        '依107-111年資料，早期乳癌5年存活率達99%以上；拖到晚期才發現，只剩約39.2%。',
        '乳房X光攝影可以找到摸不到的小鈣化點；不過約15%的乳癌照不出來，平常發現異狀還是要去看醫生。'
      ]},
      {heading:'我可以怎麼做？',format:'bullets',items:[
        '40到74歲：打開健保快易通APP查查自己能不能篩，帶健保卡到認證醫院就可以做。',
        '家人有乳癌、初經早、停經晚、沒生過小孩或沒餵過母奶，都要更有警覺。',
        '避開月經前乳房脹痛的時候去檢查會比較舒服；報告是0、4、5類要趕快回診。',
        '多運動、少吃油膩食物，洗澡時順便留意乳房有沒有硬塊或皮膚凹陷。'
      ]}
    ],
    think_tank_view:'很多人怕乳房攝影會痛，其實只要避開月經前脹痛的時間就舒服很多。每2年一次、十分鐘左右的檢查，換來的是早期發現的機會。今天就約上媽媽、姊妹或好朋友，一起把篩檢排進行事曆吧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署與衛福部公開資料並標明年份，「平均每天約49位」依17,779人換算，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以生活化語氣帶出存活率差距、篩檢理由與具體做法。', tone:'生活親切', tone_reason:'給40歲以上女性與家人閱讀，降低對檢查的恐懼。', to_verify:['「平均每天約49位」為換算值']},
    decision_points:[DP_SURV]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'乳癌：40-74歲每2年1次免費乳攝',
    update_date:'2026/11/20',
    intro:'乳癌為女性癌症發生率第1位，112年女性乳癌新發個案17,779人。114年起，40至74歲婦女每2年可免費接受1次乳房X光攝影。',
    sections:[
      {heading:'分期5年存活率',format:'table',table:TABLE},
      {heading:'篩檢效益',format:'bullets',items:[
        '每2年1次乳房X光攝影，可降低41%的乳癌死亡率。',
        '早期乳癌5年存活率達99%以上，晚期約39.2%。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '40-74歲：健保卡至認證機構受檢。',
        '結果0、4、5類盡速回診。',
        '有家族史等危險因子者提高警覺。'
      ]}
    ],
    think_tank_view:'乳癌越早發現、存活率越高；每2年一次的乳房X光攝影，是40至74歲女性最實在的保護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署與衛福部公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為存活率、效益、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['17,779人的官方附表數字待核對']},
    decision_points:[DP_SURV]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'乳癌', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'每年約 1.8 萬名女性新診斷乳癌', primary_visual:'約 1.8 萬人', secondary_message:'定期乳攝可降低 41% 死亡率', action_priority:'40–74 歲每 2 年免費乳攝'},
    headline_hook:'乳癌是女性癌症第 1 位', headline_main:'40 歲起，每 2 年乳攝 1 次', title_accent:'每 2 年乳攝 1 次',
    primary_stat:{kicker:'112 年・新發個案', value:'約 1.8 萬人', label:'新診斷乳癌女性', note:'衛福部癌症登記：17,779 人'},
    chart:{type:'bar', title:'女性乳癌死亡人數（人）', points:[
      {label:'2015', value:2223, display:'2,223'},
      {label:'2018', value:2511, display:'2,511'},
      {label:'2021', value:2913, display:'2,913'},
      {label:'2025', value:3116, display:'3,116', highlight:true}
    ], note:'衛福部死因統計｜標準化死亡率約 12–13 持平'},
    secondary_stats:[
      {value:'41%', label:'定期乳攝可降低死亡率'},
      {value:'99%', label:'早期乳癌 5 年存活率'},
      {value:'39.2%', label:'晚期發現 5 年存活率'}
    ],
    action_title:'40–74 歲這樣做',
    action_cards:[
      {key:'篩', text:'每 2 年 1 次免費乳房 X 光攝影'},
      {key:'查', text:'健保快易通 APP 查詢資格'},
      {key:'回', text:'結果 0、4、5 類盡速回診'},
      {key:'看', text:'乳房有硬塊或凹陷就醫'}
    ],
    carousel_suggestion:{reason:'若想把趨勢、存活率與篩檢方式分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'乳癌是女性癌症第 1 位', headline_main:'每年約 1.8 萬人新診斷'},
      {layout_type:'knowledge', headline_hook:'越早發現越好', headline_main:'各期 5 年存活率'},
      {layout_type:'action', headline_hook:'40–74 歲', headline_main:'每 2 年免費乳攝 1 次'}]},
    hashtags:['乳癌','乳癌篩檢','乳房X光攝影','女性健康'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'screening-checkup',
    illustration:{topic:'乳癌篩檢', audience:'40 歲以上女性', scene:'兩位不同年齡的女性一起看手機上的篩檢預約，旁邊是醫院的乳房攝影檢查室指示牌',
      emotion:'安心、互相提醒', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'Two women of different ages looking at a screening appointment on a phone together, a hospital mammography room sign nearby, reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：112年新發17,779人（癌症登記）','女性乳癌死亡人數時間序列取自衛福部114年死因統計摘要表'],
      layout_reason:'關鍵訊息是「常見但能早期發現」，選 data：新發人數當主角，死亡人數趨勢放右側小圖，存活率差距放第二層，最後給 4 個篩檢行動。',
      tone:'專業易懂', tone_reason:'篩檢資訊需要清楚可行，避免恐嚇。',
      to_verify:['死亡人數上升與人口老化的關係（標準化死亡率持平）','17,779人的官方附表數字']},
    decision_points:[Object.assign({}, DP_SURV, {current:'早期乳癌 5 年存活率 99%（107-111年）'})],
    content_check_note:'新發與死亡人數引自國健署癌症登記與衛福部死因統計並標明年份，篩檢效益標明研究來源，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'乳癌',
    collect:{
      summary:'乳癌是我國女性癌症發生率第1位、死亡率第2位，國健署自2025年起將免費乳房X光攝影擴大至40-74歲婦女，篩檢人數創新高，是兼具政策時機與早期發現價值的長期溝通議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'每年新發乳癌約1.8萬人：依2025年12月公布的112年癌症登記報告，女性乳癌新發個案17,779人（國健署癌症防治組說明），標準化發生率居女性癌症第1位，發生年齡中位數57歲。',tag:'官方統計',source:{name:'聯合報：國健署公布112年癌症登記報告',url:'https://udn.com/news/story/7266/9233973'}},
        {item:'年度趨勢方向',desc:'死亡人數增加2.2%：2025年女性乳癌死亡3,116人，較2024年3,050人增加，十年前（2015年）為2,223人，但標準化死亡率大致持平（每十萬人約13人）。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'篩檢人數較去年同期增加33.57%：2025年起免費乳房X光攝影由45-69歲擴大至40-74歲婦女、每2年1次，截至9月中旬篩檢人數首度突破100萬人，其中新增擴大族群約26.2萬人。',tag:'官方統計',source:{name:'衛生福利部國民健康署：粉紅十月！乳癌篩檢突破百萬人次',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19433'}},
        {item:'好發族群年齡層',desc:'發生高峰在45至69歲之間：家族史、初經早或停經晚、未曾生育或30歲後才生第一胎、未曾哺乳者風險較高。',tag:'官方統計',source:{name:'衛生福利部國民健康署：乳癌防治',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=614&pid=1124'}}
      ],
      product_view:['機會：乳癌為女性常見的癌症保障需求，可搭配不同期別治療（手術、化療、標靶）的費用差異，協助保戶檢視保障缺口。','機會：篩檢年齡下修至40歲，可設計鼓勵定期篩檢的健康管理服務（篩檢提醒、結果追蹤）。','風險：溝通篩檢時不得暗示篩檢可「保證」早期發現或與理賠條件連動，須依條款如實說明。'],
      marketing_view:['機會：40-44歲為新納入篩檢族群，首次篩檢是溝通黃金時機，可用「每2年一次」的具體行動切入。','機會：十月粉紅月是年度固定溝通時點，適合結合女性保戶關懷活動。','風險：乳癌議題情感強烈，避免恐懼訴求與病友個案的過度渲染，宜聚焦早期發現與可行動資訊。'],
      alert_level:'medium',
      alert_reason:'2025年篩檢擴大政策剛上路且篩檢量創新高，適合納入年度溝通規劃，十月粉紅月可作為重點檔期。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('可降低41%的乳癌死亡率','MEDICAL_INTERPRETATION','population_benefit_as_individual',
          '41%是群體層次的研究結果，讀者可能理解為「個人做了篩檢就能降低41%死亡風險」。','medium','no',
          null,'no','clarify','屬表達方式調整，數據本身引自國健署。',
          '可降低41%的乳癌死亡率（國內研究，群體層次的效益）'),
        F('早期乳癌5年存活率達99%以上','DATA_FACTUAL_ACCURACY','definition_unstated',
          '「早期」未說明涵蓋哪些期別，且與文中分期表（第0期97.4%、第1期96.2%）數字不一致，讀者可能困惑。','medium','yes',
          '國健署「早期乳癌5年存活率99%以上」的期別定義與資料年份。','yes','confirm','兩組數字來源與分組不同，未必有誤。',
          '早期乳癌5年存活率達99%以上（107-111年資料，期別定義依國健署）'),
        F('平均每天約有49位女性被診斷出乳癌','SOURCE_EVIDENCE','derived_figure_unlabeled',
          '「每天約49位」是由年度新發人數換算的推估值，文中未標示為換算。','low','no',
          null,'no','clarify','換算本身正確（17,779÷365≈48.7）。',
          '平均每天約有49位女性被診斷出乳癌（依112年新發人數換算）')
      ],
      card:[
        F('定期乳攝可降低死亡率','SOURCE_EVIDENCE','stat_without_basis',
          '「41%」未標示研究來源與條件（每2年1次），卡面讀者無法判斷依據。','medium','no',
          null,'no','clarify','數據引自國健署。',
          '每 2 年乳攝可降低死亡率（國內研究）'),
        F('早期乳癌 5 年存活率','DATA_FACTUAL_ACCURACY','definition_unstated',
          '「99%」未說明「早期」的期別範圍與資料年份。','low','yes',
          '國健署「早期乳癌」的期別定義。','yes','confirm','待確認定義。',
          '早期乳癌 5 年存活率（107–111 年）')
      ]
    },
    title_alts:[
      '乳癌篩檢擴大到40-74歲！每2年1次乳房X光攝影',
      '40歲以上姊妹注意！乳房X光攝影現在每2年免費1次',
      '乳癌越早發現越好：分期存活率與篩檢資格一次看'
    ],
    card_title_alts:[
      ['乳癌是女性癌症第 1 位','40 歲起，每 2 年乳攝 1 次'],
      ['早期發現差很多','乳癌各期 5 年存活率'],
      ['40–74 歲免費篩檢','乳房 X 光攝影怎麼做']
    ],
    data_addon:[
      '114年乳癌篩檢截至9月中旬達104萬人，較去年同期增加33.57%，新增擴大的40-44歲及70-74歲族群約26.2萬人。',
      '篩檢發現的乳癌有62.9%屬早期（0、1期），臨床發現個案僅34.9%。',
      '113年乳癌篩檢服務91.6萬人次，兩年篩檢率39.8%，發現5,250位乳癌個案。'
    ],
    cta:'今天就打開健保快易通APP，查一下自己或媽媽上次做乳房X光攝影的時間，符合資格就預約這個月受檢。'
  });
})();
