/* v6 示範主題：醫學影像檢查與輻射安全（B12 第三輪新主題）
   查證日期：2026-11-23。數據來源：衛福部新聞稿〈放射線檢查輻射量知多少？健康存摺報您知〉（110-12-23，健保署）、
   〈乳房及牙科攝影會增加罹患甲狀腺癌風險嗎？網路謠言不可信〉（104-09-10，國健署，引原能會資料，舊年份）。
   參考方向：判定清單第263、266、259、234列（X光、放射醫學、核子醫學、MRI安全文章）。只取架構，數據重新查證。 */
(function(){
  const REFS = [
    {title:'放射線檢查輻射量知多少？健康存摺報您知',source:'衛生福利部中央健康保險署',url:'https://mohw.gov.tw/cp-16-64571-1.html'},
    {title:'乳房及牙科攝影會增加罹患甲狀腺癌風險嗎？網路謠言不可信',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-20191-1.html'}
  ];
  const TABLE = {headers:['檢查','原理','有無游離輻射'], rows:[
    ['X光攝影','X光穿透身體成像，如胸部X光、牙科X光、乳房攝影','有，劑量較低'],
    ['電腦斷層（CT）','X光多角度掃描後重組成切面影像','有，劑量高於一般X光'],
    ['核子醫學','注射或口服放射性藥物後偵測分布','有，依藥物與檢查而異'],
    ['磁振造影（MRI）','強磁場與無線電波成像','沒有；但須注意體內金屬'],
    ['超音波','聲波反射成像','沒有']
  ]};
  const TAGS = ['醫學影像','輻射安全','電腦斷層','X光','健康存摺'];

  const DP_DOSE = {id:'dp-imaging-dose', type:'source_level', title:'劑量為參考值，個人實際劑量因儀器而異',
    desc:'健保署新聞稿列的胸部X光、頭部電腦斷層劑量為參考值，健保署說明網路搜尋資料，且健保資料未收載儀器種類與照攝面積；天然背景輻射1.62毫西弗出自104年國健署引原能會資料。AI 標註為參考值與年份。',
    current:'胸部X光約0.02毫西弗、頭部CT約1.5–2毫西弗（健保署110-12-23參考值）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'參考值', value:'0.02 / 1.5–2 毫西弗', note:'健保署110-12-23新聞稿（目前採用）'},
      {label:'個人值', value:'健康存摺查詢', note:'依實際檢查紀錄估算，健保資料未含儀器條件'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'照X光、電腦斷層會致癌嗎？醫學影像檢查的輻射劑量與安全',
    update_date:'2026/11/23',
    intro:'醫學影像是診斷疾病的重要工具，其中X光、電腦斷層與核子醫學會用到游離輻射，磁振造影與超音波則沒有。依健保署110年12月23日新聞稿，一次胸部X光約0.02毫西弗、頭部電腦斷層約1.5–2毫西弗；國健署104年引原能會資料，臺灣每人每年接受的天然背景輻射約1.62毫西弗。民眾可用「健康存摺」查詢自己當年度放射線檢查的醫療輻射量。',
    sections:[
      {heading:'常見影像檢查比一比',format:'table',table:TABLE},
      {heading:'劑量與風險怎麼看',format:'bullets',items:[
        '健保署引美國醫學物理學會2011年聲明：單次檢查低於50毫西弗、一年多次總量低於100毫西弗，潛在風險可忽略。',
        '健保署也提醒，劑量會因儀器種類、照攝面積與次數而不同，必要的檢查不應因擔心輻射而延誤。',
        '孕婦或可能懷孕者，檢查前務必告知醫師與放射師。'
      ]},
      {heading:'減少不必要的照射',format:'bullets',items:[
        '用健康存摺查詢個人醫療輻射量，換醫院時主動告知近期做過的檢查。',
        '醫師可透過健保醫療資訊雲端查詢系統看到近期影像，減少重複照射。',
        '自費健檢的電腦斷層，先和醫師討論是否必要與適合的頻率。'
      ]}
    ],
    think_tank_view:'醫學影像的輻射風險要和檢查帶來的診斷效益一起看。必要的檢查不必過度擔心，但重複或不必要的照射可以避免；善用健康存摺記錄、主動告知病史，是最簡單的自我保護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'劑量參考值引自健保署110-12-23新聞稿，天然背景輻射引自國健署104年資料並標明年份，未使用恐嚇性或保證安全用語，未推薦特定院所或健檢方案。',
    ai_rationale:{basis:['胸部X光0.02、頭部CT 1.5–2、牙科全口0.014毫西弗與50／100毫西弗聲明取自健保署110-12-23新聞稿','天然背景1.62、乳房攝影0.7毫西弗取自國健署104-09-10新聞稿'],
      layout_reason:'先用表格分清哪些檢查有輻射，再說明劑量與風險，最後給減少照射的方法。',
      tone:'專業易懂', tone_reason:'輻射議題易引起焦慮，需要精確、中性。',
      to_verify:['天然背景輻射1.62毫西弗為104年引用資料','劑量為參考值']},
    decision_points:[DP_DOSE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'常照X光會怎樣？醫學影像檢查的輻射一次說清楚',
    update_date:'2026/11/23',
    intro:'健檢要照胸部X光、看病又要做電腦斷層，很多人擔心「照太多會不會致癌」。其實照一張胸部X光大約0.02毫西弗，比我們一年從環境中自然接收的輻射少很多；磁振造影和超音波則完全沒有輻射。想知道自己今年照了多少，打開健康存摺就查得到。',
    sections:[
      {heading:'哪些檢查有輻射？',format:'table',table:TABLE},
      {heading:'要擔心嗎？',format:'bullets',items:[
        '醫師開的必要檢查，好處通常大於風險，不要因為怕輻射而不做。',
        '懷孕或可能懷孕，一定要先講。',
        '做MRI前，身上和體內的金屬要先告訴醫護人員。'
      ]},
      {heading:'聰明少照',format:'bullets',items:[
        '用健康存摺看自己的醫療輻射量。',
        '換醫院時，說一下最近做過哪些檢查。',
        '自費健檢的斷層掃描，先問醫師需不需要。'
      ]}
    ],
    think_tank_view:'該照的照，不必要的不重複照。把健康存摺當成自己的檢查紀錄本，就診時拿出來，醫師也更好判斷。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'劑量引自健保署並標明為參考值，未使用恐嚇性或保證安全用語，未推薦特定院所。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從「照太多會怎樣」的擔心出發，再給判斷與減少照射的方法。', tone:'生活親切', tone_reason:'給一般民眾與健檢族群閱讀。', to_verify:['劑量為參考值']},
    decision_points:[DP_DOSE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'影像檢查輻射：劑量與安全重點',
    update_date:'2026/11/23',
    intro:'胸部X光約0.02毫西弗，頭部CT約1.5–2毫西弗；MRI與超音波無輻射。健康存摺可查個人醫療輻射量。',
    sections:[
      {heading:'檢查比較',format:'table',table:TABLE},
      {heading:'風險',format:'bullets',items:[
        '必要檢查效益通常大於風險。',
        '懷孕先告知醫師。'
      ]},
      {heading:'少照',format:'bullets',items:[
        '查健康存摺、告知近期檢查。',
        '自費CT先問是否必要。'
      ]}
    ],
    think_tank_view:'該照就照，避免重複照。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'劑量引自健保署並標明為參考值，未使用恐嚇性或保證安全用語。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為檢查比較、風險、少照三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['劑量為參考值']},
    decision_points:[DP_DOSE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'醫學影像檢查與輻射安全', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'一張胸部X光劑量很低', primary_visual:'0.02 毫西弗', secondary_message:'MRI 與超音波沒有輻射', action_priority:'用健康存摺查醫療輻射量'},
    headline_hook:'照 X 光會致癌嗎？', headline_main:'影像檢查輻射量一次看', title_accent:'一次看',
    primary_stat:{kicker:'健保署參考值', value:'0.02 毫西弗', label:'一次胸部 X 光的輻射劑量', note:'健保署 110-12-23｜實際因儀器而異'},
    chart:{type:'bar', title:'常見檢查與背景輻射（毫西弗）', points:[
      {label:'牙科全口X光', value:0.014, display:'0.014'},
      {label:'胸部X光', value:0.02, display:'0.02'},
      {label:'乳房攝影', value:0.7, display:'0.7'},
      {label:'天然背景/年', value:1.62, display:'1.62'},
      {label:'頭部CT', value:2, display:'1.5–2', highlight:true}
    ], note:'健保署 110 年、國健署 104 年（引原能會）參考值'},
    secondary_stats:[
      {value:'0', label:'MRI、超音波游離輻射'},
      {value:'50 毫西弗', label:'單次風險可忽略門檻'}
    ],
    action_title:'聰明做檢查',
    action_cards:[
      {key:'查', text:'用健康存摺查當年度醫療輻射量'},
      {key:'告', text:'換院時告知近期做過的影像檢查'},
      {key:'孕', text:'懷孕或可能懷孕，檢查前先說'},
      {key:'問', text:'自費斷層先和醫師討論是否必要'}
    ],
    carousel_suggestion:{reason:'若想把檢查種類、劑量與減少照射分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'5 種影像檢查', headline_main:'哪些有輻射'},
      {layout_type:'data', headline_hook:'輻射量比一比', headline_main:'胸部 X 光 0.02 毫西弗'},
      {layout_type:'action', headline_hook:'聰明少照', headline_main:'健康存摺查得到'}]},
    hashtags:['醫學影像','輻射安全','健康存摺','健檢'],
    sources:['衛生福利部中央健康保險署','衛生福利部國民健康署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'影像檢查', audience:'健檢民眾與病人', scene:'放射師在檢查室向受檢者說明胸部X光檢查流程，受檢者手持手機查看健康紀錄',
      emotion:'安心、清楚', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A radiographer in an imaging room explaining a chest X-ray procedure to a patient holding a phone with health records, reassured and clear mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['胸部X光、頭部CT、牙科全口劑量與50毫西弗聲明取自健保署110-12-23新聞稿','乳房攝影與天然背景輻射取自國健署104-09-10新聞稿'],
      layout_reason:'選 data：劑量比較是核心，用長條圖讓讀者看出一般X光與背景輻射的相對大小，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'輻射議題需要具體數字降低焦慮。',
      to_verify:['天然背景輻射為104年引用資料']},
    decision_points:[Object.assign({}, DP_DOSE, {current:'0.02 毫西弗｜胸部 X 光參考值（健保署 110-12-23）'})],
    content_check_note:'劑量引自健保署、國健署並標明年份與參考值性質，未使用恐嚇性或保證安全用語，未推薦特定院所。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'醫學影像檢查與輻射安全',
    collect:{
      summary:'X光、電腦斷層與核子醫學會用到游離輻射，磁振造影與超音波則沒有。一次胸部X光約0.02毫西弗、頭部電腦斷層約1.5–2毫西弗，民眾可用健康存摺查詢個人醫療輻射量。健檢自費影像檢查普及，「照太多會不會致癌」是常見疑問。',
      objective_data:[
        {item:'盛行率／發生率',desc:'0.02毫西弗：健保署表示一次胸部X光約0.02毫西弗、頭部電腦斷層約1.5–2毫西弗、牙科全口X光約0.014毫西弗（參考值，實際因儀器與照攝條件而異）。',tag:'官方統計',source:{name:'衛生福利部：放射線檢查輻射量知多少',url:'https://mohw.gov.tw/cp-16-64571-1.html'}},
        {item:'好發族群年齡層',desc:'1.62毫西弗天然背景輻射：國健署104年引原能會資料，臺灣每人每年接受天然背景輻射約1.62毫西弗，一次乳房X光攝影約0.7毫西弗。',tag:'官方統計',source:{name:'衛生福利部：乳房及牙科攝影會增加罹患甲狀腺癌風險嗎',url:'https://mohw.gov.tw/cp-16-20191-1.html'}},
        {item:'政策動向',desc:'健康存摺可查醫療輻射量：健保署110年起於健康存摺提供當年度放射線檢查醫療輻射量查詢，並透過健保醫療資訊雲端查詢系統減少重複照射。',tag:'官方統計',source:{name:'衛生福利部：放射線檢查輻射量知多少',url:'https://mohw.gov.tw/cp-16-64571-1.html'}},
        {item:'年度趨勢方向',desc:'50毫西弗以下風險可忽略：健保署引美國醫學物理學會2011年聲明，單次檢查低於50毫西弗、一年多次總量低於100毫西弗，潛在風險可忽略。',tag:'市場觀察',source:{name:'衛生福利部：放射線檢查輻射量知多少',url:'https://mohw.gov.tw/cp-16-64571-1.html'}}
      ],
      product_view:['機會：自費健檢影像檢查常見，可提供「必要性與頻率」的中性資訊，建立可信任的健康顧問形象。','機會：可連結健檢後異常追蹤與醫療保障的說明。','風險：不可推薦特定健檢方案，或以恐嚇輻射風險促銷商品。'],
      marketing_view:['機會：「照X光會致癌嗎」是常見焦慮，可做破解迷思與劑量比較內容。','機會：可與健檢報告解讀、肺癌篩檢主題串連。','風險：避免「完全無害」或「一定致癌」等絕對用語。'],
      alert_level:'low',
      alert_reason:'劑量參考值變動不大，但天然背景輻射引用資料年份較舊，可待核安會更新數據後替換。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('比我們一年從環境中自然接收的輻射少很多','DATA_FACTUAL_ACCURACY','comparison_without_number',
          '比較對象（天然背景輻射約1.62毫西弗）未寫出數字與出處，讀者無法自行判斷差距。','low','no',
          null,'no','clarify','數字在專業版有寫。',
          '比我們一年從環境中自然接收的輻射（約1.62毫西弗，國健署104年引原能會資料）少很多'),
        F('做MRI前，身上和體內的金屬要先告訴醫護人員','SOURCE_EVIDENCE','missing_source',
          'MRI金屬安全提醒未附官方或醫學會出處，參考資料中的兩則新聞稿都未涵蓋MRI。','low','yes',
          '醫學會或醫學中心的MRI安全衛教資料','no','clarify','內容屬一般衛教，需補出處。',
          null),
        F('必要的檢查不應因擔心輻射而延誤','MEDICAL_INTERPRETATION','attribution_unclear',
          '此句接在健保署說明後，讀者可能以為是健保署原文；新聞稿原意是說明劑量受儀器等影響，「不應延誤」是本文的建議。','low','no',
          null,'no','clarify','屬引述歸屬。',
          '本文建議：必要的檢查不應因擔心輻射而延誤')
      ],
      card:[
        F('單次風險可忽略門檻','MEDICAL_INTERPRETATION','attribution_unclear',
          '50毫西弗出自美國醫學物理學會2011年聲明，卡面未標示出處，易被當成國內法規標準。','low','no',
          null,'no','clarify','屬出處層級。',
          '單次可忽略（美國醫學物理學會）'),
        F('健保署 110 年、國健署 104 年（引原能會）參考值','DATA_FACTUAL_ACCURACY','outdated_source_flag',
          '天然背景輻射引自104年的二手引述，卡面雖標年份，但未提醒原始機構已改制為核安會，宜註記待更新。','low','yes',
          '核能安全委員會最新天然背景輻射劑量','no','clarify','屬來源層級提醒。',
          '健保署 110 年、國健署 104 年（引原能會，現核安會）參考值')
      ]
    },
    title_alts:[
      '照X光、電腦斷層會致癌嗎？醫學影像檢查的輻射劑量與安全',
      '常照X光會怎樣？醫學影像檢查的輻射一次說清楚',
      '胸部X光只有0.02毫西弗：影像檢查輻射量比一比'
    ],
    card_title_alts:[
      ['照 X 光會致癌嗎？','影像檢查輻射量一次看'],
      ['MRI 有輻射嗎','5 種檢查差在哪'],
      ['醫療輻射量','健康存摺查得到']
    ],
    data_addon:[
      '健保署說明健保資料未收載儀器種類與照攝面積，健康存摺顯示的是參考估算值。',
      '國健署指出乳房X光攝影的甲狀腺劑量，約相當於自然背景輻射暴露30分鐘（104年）。',
      '乳房攝影不建議使用甲狀腺鉛套，因可能遮蔽影像範圍（國健署104年）。'
    ],
    cta:'做影像檢查前，先用健康存摺看看自己近期的醫療輻射量；懷孕或體內有金屬植入物，記得事先告知醫護人員。'
  });
})();
