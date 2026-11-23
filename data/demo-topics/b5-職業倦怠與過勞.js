/* v6 示範主題：職業倦怠與過勞（B5 心理健康與精神疾患）
   查證日期：2026-11-20。數據來源：WHO 2019-05-28〈Burn-out an "occupational phenomenon"〉、勞動部2016年職業促發腦心血管疾病認定指引修正說明（搜尋引擎摘錄，原頁跳轉未能直接讀取）、
   衛福部 113-10-10「世界心理健康日：優先關注職場心理健康」、鏡週刊轉載健康醫療網 2026-09-15（青壯世代方案使用者年齡分布）。
   參考方向：健康智庫〈職場警報：「烤吐司症候群」來襲〉2025/08、〈你累了嗎？認識過勞甩開疲勞〉2024/04。 */
(function(){
  const WHO = 'https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases';
  const MOL = 'https://www.mol.gov.tw/1607/1632/1640/43513/';
  const MOHW = 'https://mohw.gov.tw/cp-16-80206-1.html';
  const REFS = [
    {title:'Burn-out an "occupational phenomenon": International Classification of Diseases',source:'World Health Organization',url:WHO},
    {title:'世界心理健康日：優先關注職場心理健康',source:'衛生福利部',url:MOHW},
    {title:'職業促發腦血管及心臟疾病認定參考指引修正說明',source:'勞動部',url:MOL},
    {title:'青壯世代心理健康支持方案逾5.7萬人使用 衛福部：求助是改變開始',source:'鏡週刊（健康醫療網）',url:'https://www.mirrormedia.mg/external/healthnews_69733'},
    {title:'安心專線改4碼更好記! 1925依舊愛我 持續服務你和我',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48244-1.html'}
  ];
  const TABLE = {headers:['WHO職業倦怠3面向','可能的表現'], rows:[
    ['能量耗竭','休息後仍覺得疲憊，早上一想到上班就累'],
    ['與工作疏離','對工作越來越冷淡、負面，覺得做什麼都沒意義'],
    ['工作效能下降','專注力變差、效率降低，覺得自己做不好']
  ]};
  const TAGS = ['職業倦怠','過勞','職場心理健康','工作壓力','免費心理諮商'];

  const DP_DEF = {id:'dp-bo-def', type:'data_scope', title:'職業倦怠不是疾病診斷',
    desc:'WHO 在ICD-11把職業倦怠定義為「職業現象」，明確表示不屬於醫療疾病；但長期倦怠可能合併憂鬱、焦慮或身體疾病。AI 沒有替你決定要不要在標題用「症候群」等較醫療化的字眼。',
    current:'稱為「職業倦怠」，說明是職業現象而非疾病',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'職業現象', value:'WHO ICD-11（2019）', note:'因未妥善處理的慢性職場壓力造成（目前採用）'},
      {label:'烤吐司症候群等俗稱', value:'媒體用語', note:'非正式醫學名稱'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'職業倦怠與過勞：累到不想上班，是身心在求救',
    update_date:'2026/11/20',
    intro:'世界衛生組織（WHO）在國際疾病分類第11版（ICD-11）中，把職業倦怠定義為「因未能妥善處理的慢性職場壓力所導致的症候群」，屬於職業現象而非疾病，包含能量耗竭、與工作疏離、工作效能下降3個面向。長時間工作也可能促發腦心血管疾病：勞動部2016年修正的認定參考指引，以發病前1個月加班超過100小時，或發病前2至6個月月平均加班超過80小時，作為與發病高度相關的判斷基準。',
    sections:[
      {heading:'職業倦怠的3個面向',format:'table',table:TABLE},
      {heading:'過勞的身體警訊',format:'bullets',items:[
        '長期睡眠不足、休假也無法恢復精神，經常頭痛、胸悶、心悸。',
        '血壓、血糖、血脂變差，或出現胃痛、失眠等壓力相關症狀。',
        '出現胸痛、單側無力、口齒不清等心肌梗塞或中風警訊時，請立即撥打119。'
      ]},
      {heading:'個人與職場可以怎麼做',format:'bullets',items:[
        '盤點工時與工作量，與主管討論優先順序；下班與休假時刻意與工作「斷線」。',
        '維持睡眠、運動與社交，留意自己是否出現持續低落或焦慮。',
        '15至45歲可使用衛福部3次免費心理諮商；需要傾訴時撥24小時免付費的1925安心專線。',
        '衛福部指出，修正後的精神衛生法已請勞動部強化職場心理健康的規劃與推動。'
      ]}
    ],
    think_tank_view:'職業倦怠不是個人不夠努力，而是長期壓力沒有出口的結果。及早察覺「累到不想上班」的訊號，調整工作負荷、找回休息，必要時尋求專業協助；企業也能從工時管理與心理支持著手，讓員工走得更長遠。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'定義引自WHO並標明年份，加班時數引自勞動部指引並標明修正年份，保留心血管急症119提醒，附求助專線，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['WHO 2019：職業倦怠為職業現象，3面向','勞動部認定指引：1個月加班逾100小時、2至6個月月均逾80小時'],
      layout_reason:'先用表格說明WHO定義的3個面向，再列過勞的身體警訊，最後給個人與職場的做法。',
      tone:'專業易懂', tone_reason:'需區分「倦怠」與疾病，並提醒過勞的身體風險。',
      to_verify:['勞動部指引原頁（mol.gov.tw）跳轉未能直接讀取，加班時數取自搜尋摘錄，待人工核對現行版本']},
    decision_points:[DP_DEF]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'一想到上班就好累？可能是職業倦怠在敲門',
    update_date:'2026/11/20',
    intro:'週日晚上就開始焦慮、放完假還是很累、對工作越來越提不起勁？這可能是職業倦怠。世界衛生組織說，它是長期工作壓力沒有好好被處理所造成的，不是你不夠努力。另外，長時間加班也會傷身，勞動部的認定指引把「發病前1個月加班超過100小時」當成與心血管疾病高度相關的參考。',
    sections:[
      {heading:'職業倦怠的3個樣子',format:'table',table:TABLE},
      {heading:'身體在提醒你',format:'bullets',items:[
        '睡不飽、放假也恢復不了，常頭痛、胸悶、心跳快。',
        '健檢數字變差，常胃痛、失眠。',
        '如果胸痛、手腳一邊沒力、講話不清楚，馬上打119。'
      ]},
      {heading:'可以這樣調整',format:'bullets',items:[
        '跟主管聊聊工作量和優先順序，下班後試著不看工作訊息。',
        '睡飽、動一動、多跟朋友聚聚。',
        '15到45歲有3次免費心理諮商；想找人說說話，打1925安心專線。'
      ]}
    ],
    think_tank_view:'累了不是你的錯，是在提醒你該照顧自己了。把休息當成工作的一部分，該求助就求助，才能走得長久。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'定義引自WHO，加班時數引自勞動部指引，保留119提醒，附求助專線，語氣親切，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以上班族的日常感受帶出倦怠、身體警訊與調整方法。', tone:'生活親切', tone_reason:'給上班族閱讀，去汙名。', to_verify:['勞動部指引現行版本待核對']},
    decision_points:[DP_DEF]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'職業倦怠：3個面向＋過勞警訊',
    update_date:'2026/11/20',
    intro:'WHO定義職業倦怠為未妥善處理的慢性職場壓力所致，屬職業現象。勞動部指引以發病前1個月加班逾100小時作為過勞高度相關參考。',
    sections:[
      {heading:'3個面向',format:'table',table:TABLE},
      {heading:'過勞警訊',format:'bullets',items:[
        '休息也恢復不了、頭痛胸悶。',
        '胸痛、單側無力立即撥119。'
      ]},
      {heading:'調整',format:'bullets',items:[
        '盤點工時、下班斷線。',
        '15–45歲3次免費心理諮商、1925安心專線。'
      ]}
    ],
    think_tank_view:'職業倦怠是壓力沒有出口的訊號；調整負荷、找回休息、及早求助。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'定義引自WHO，加班時數引自勞動部指引，附求助專線，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為面向、警訊、調整三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_DEF]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'職業倦怠與過勞', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'職業倦怠是長期職場壓力的訊號', primary_visual:'100 小時', secondary_message:'1 個月加班逾 100 小時與心血管疾病高度相關', action_priority:'察覺訊號、調整負荷、求助'},
    headline_hook:'一想到上班就好累？', headline_main:'職業倦怠的 3 個訊號', title_accent:'3 個訊號',
    hero_message:'不是你不夠努力', hero_support:'WHO：未妥善處理的慢性職場壓力所致',
    knowledge_title:'WHO 職業倦怠 3 面向', knowledge_note:'持續低落、失眠，**及早求助**',
    knowledge_cards:[
      {label:'能量耗竭', icon:'check', lines:['休息後仍疲憊']},
      {label:'與工作疏離', icon:'chat', lines:['冷淡、負面、無意義感']},
      {label:'效能下降', icon:'brain', lines:['專注差、覺得做不好']}
    ],
    primary_stat:{value:'100 小時', label:'發病前 1 個月加班，與腦心血管疾病高度相關', note:'勞動部認定參考指引（2016 年修正）'},
    secondary_stats:[
      {value:'80 小時', label:'發病前 2–6 個月月平均加班'},
      {value:'3 次', label:'15–45 歲免費心理諮商'}
    ],
    action_title:'這樣調整',
    action_cards:[
      {key:'盤', text:'盤點工時，與主管討論優先順序'},
      {key:'斷', text:'下班、休假與工作斷線'},
      {key:'睡', text:'顧好睡眠、運動與社交'},
      {key:'援', text:'需要傾訴，撥 1925 安心專線'}
    ],
    carousel_suggestion:{reason:'若想把倦怠、過勞與調整方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'一想到上班就累？', headline_main:'職業倦怠 3 面向'},
      {layout_type:'data', headline_hook:'過勞警戒線', headline_main:'1 個月加班逾 100 小時'},
      {layout_type:'action', headline_hook:'找回能量', headline_main:'倦怠調整 4 件事'}]},
    hashtags:['職業倦怠','過勞','職場心理健康','工作壓力'],
    sources:['World Health Organization','勞動部','衛生福利部'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'職業倦怠', audience:'25 至 45 歲上班族', scene:'一位上班族闔上筆電、把手機放進抽屜，走向窗邊伸展，窗外是傍晚的天空',
      emotion:'放下、重新充電', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker closing a laptop and putting a phone in a drawer, then stretching by the window with an evening sky outside, relieved and recharging mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['WHO 2019：職業倦怠3面向','勞動部認定指引加班時數'],
      layout_reason:'選 knowledge：WHO 定義的 3 面向放中段，過勞加班門檻退到下方，最後給 4 個調整行動。',
      tone:'專業易懂', tone_reason:'去汙名、兼顧心理與身體風險。',
      to_verify:['勞動部指引現行版本待核對']},
    decision_points:[DP_DEF],
    content_check_note:'定義引自WHO，加班時數引自勞動部指引並標明修正年份，附求助專線，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'職業倦怠與過勞',
    collect:{
      summary:'職業倦怠被WHO定義為慢性職場壓力造成的職業現象，長時間工作則與腦心血管疾病相關；衛福部推動職場心理健康並提供15至45歲免費心理諮商，「察覺倦怠訊號、管理工時、及早求助」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'職業倦怠3個面向：WHO 2019年在ICD-11中定義職業倦怠為「未妥善處理的慢性職場壓力所致的症候群」，包含能量耗竭、與工作疏離、工作效能下降，屬職業現象而非疾病。',tag:'官方統計',source:{name:'World Health Organization：Burn-out an "occupational phenomenon"',url:WHO}},
        {item:'年度趨勢方向',desc:'95%以上使用者為18至45歲：衛福部2026年9月表示，青壯世代心理健康支持方案115年1至8月使用者中18至30歲約47%、31至45歲約48.4%，正值職場主力年齡。',tag:'官方統計',source:{name:'鏡週刊（健康醫療網）：青壯世代心理健康支持方案逾5.7萬人使用',url:'https://www.mirrormedia.mg/external/healthnews_69733'}},
        {item:'政策動向',desc:'6年投入56.3億元：行政院2024年8月核定「全民心理健康韌性計畫（114-119年）」結合13部會，修正後的精神衛生法並請勞動部強化職場心理健康的規劃與推動。',tag:'官方統計',source:{name:'衛生福利部：世界心理健康日：優先關注職場心理健康',url:MOHW}},
        {item:'好發族群年齡層',desc:'發病前1個月加班逾100小時：勞動部職業促發腦心血管疾病認定參考指引（2016年修正）以此，或發病前2至6個月月平均加班逾80小時，作為工作負荷與發病高度相關的判斷基準。',tag:'官方統計',source:{name:'勞動部：職業促發腦血管及心臟疾病認定參考指引修正說明',url:MOL}}
      ],
      product_view:['機會：企業團體保險客戶重視員工心理健康，可結合員工協助方案（EAP）與健康管理服務。','機會：過勞與心血管疾病相關，可連結重大疾病與失能保障的說明。','風險：避免以「過勞死」製造恐懼；不暗示保險可取代工時管理或心理專業。'],
      marketing_view:['機會：年終、績效考核前後是上班族壓力高峰。','機會：「烤吐司症候群」等俗稱容易引起共鳴，但需搭配正確定義。','風險：避免把倦怠歸咎於個人抗壓性不足。'],
      alert_level:'medium',
      alert_reason:'職場心理健康為衛福部與勞動部近年重點，全民心理健康韌性計畫執行中；年底壓力高峰適合溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('勞動部2016年修正的認定參考指引','CURRENCY_TIMELINESS','guideline_version_unverified',
          '文中已標示修正年份，但未確認之後是否有再修訂；勞動部原頁目前無法直接開啟核對現行版本。','medium','yes',
          '勞動部職安署現行「職業促發腦血管及心臟疾病（外傷導致者除外）之認定參考指引」全文。','yes','confirm','加班門檻與一般報導一致，但現行版本未經原文核對。',
          '勞動部現行認定參考指引（2016年修正加班時數基準）',
          ['勞動部的認定指引','勞動部指引以發病前1個月加班逾100小時']),
        F('屬於職業現象而非疾病','MEDICAL_INTERPRETATION','definition_may_minimize',
          '強調「不是疾病」，讀者可能因此認為不需要就醫；長期倦怠可能合併憂鬱、焦慮等需要治療的狀況。','low','no',
          null,'no','clarify','屬表達完整度問題。',
          '屬於職業現象而非疾病，但若合併持續低落、失眠等症狀，仍應就醫評估'),
        F('與發病高度相關的判斷基準','TERMINOLOGY_LANGUAGE','legal_term_unexplained',
          '「判斷基準」是職業病認定用語，讀者可能誤以為加班未達100小時就不算過勞或不會生病。','low','no',
          null,'no','clarify','補一句說明即可。',
          '與發病高度相關的判斷基準（未達此時數仍可能因其他工作負荷促發疾病）',
          ['與心血管疾病高度相關的參考']),
        F('下班與休假時刻意與工作「斷線」','MEDICAL_INTERPRETATION','individual_burden_only',
          '建議都放在個人層面，未提及雇主依職業安全衛生法負有預防異常工作負荷的責任，可能讓讀者覺得倦怠只能靠自己解決。','low','no',
          null,'no','clarify','可補職場責任面。',
          '下班與休假時刻意與工作「斷線」；雇主也有預防異常工作負荷的責任',
          ['下班後試著不看工作訊息','下班斷線'])
      ],
      card:[
        F('勞動部認定參考指引（2016 年修正）','CURRENCY_TIMELINESS','guideline_version_unverified',
          '卡面標示2016年修正版，未確認是否為現行版本。','low','yes',
          '現行指引全文。','yes','confirm','待人工核對。',
          '勞動部認定參考指引（現行版本）'),
        F('發病前 1 個月加班，與腦心血管疾病高度相關','MEDICAL_INTERPRETATION','threshold_misread',
          '讀者可能把100小時當成「安全上限」，以為未達就沒有風險。','low','no',
          null,'no','clarify','屬詮釋問題。',
          '發病前 1 個月加班逾此時數，與腦心血管疾病高度相關（未達也可能有風險）')
      ]
    },
    title_alts:[
      '職業倦怠與過勞：累到不想上班，是身心在求救',
      '一想到上班就好累？可能是職業倦怠在敲門',
      'WHO定義的職業倦怠3面向：過勞警訊與調整方法'
    ],
    card_title_alts:[
      ['一想到上班就好累？','職業倦怠的 3 個訊號'],
      ['不是你不夠努力','認識職業倦怠'],
      ['過勞警戒線','1 個月加班逾 100 小時']
    ],
    data_addon:[
      'WHO：職業倦怠的定義限於職場情境，不應用於描述生活其他領域的經驗。',
      '勞動部指引以每週40小時以外的時數計算加班，並自發病日往前推算。',
      '衛福部將每年10月訂為心理健康月。'
    ],
    cta:'這週替自己盤點一次工時：如果連續幾週休假都恢復不了精神，就約主管聊聊工作量，或預約一次免費心理諮商。'
  });
})();
