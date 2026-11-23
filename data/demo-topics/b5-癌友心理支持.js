/* v6 示範主題：癌友心理支持（B5 心理健康與精神疾患）
   查證日期：2026-11-20。數據來源：聯合報 2026-01-06（國健署112年癌症登記新發人數、確診初期心理風險）、
   聯合報〈不分癌別！癌友心理諮商方案7月上路〉（衛福部心健司長說明方案內容）、TVBS健康2.0 2026-04-09（台灣心理腫瘤醫學學會健保資料分析、國健署癌症資源中心數）。
   撰寫原則：不描述自傷細節，附求助專線。
   參考方向：健康智庫〈關注癌友心理健康以同理心支持〉2022/08。 */
(function(){
  const REFS = [
    {title:'不分癌別！癌友心理諮商方案7月上路 每人最高12次免費諮商',source:'聯合報',url:'https://udn.com/news/story/7266/9429031'},
    {title:'衛福部推「腫瘤心理支持方案」 接住每一位癌友',source:'聯合報',url:'https://udn.com/news/story/7266/9246696'},
    {title:'癌症傷身更傷心！3成癌友依賴藥物度日 醫揭心理照護缺口：下半年將推免費諮商',source:'TVBS健康2.0',url:'https://health.tvbs.com.tw/nutrition/362213'},
    {title:'安心專線改4碼更好記! 1925依舊愛我 持續服務你和我',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48244-1.html'}
  ];
  const TABLE = {headers:['階段','常見的心理壓力'], rows:[
    ['確診初期','震驚、否認、害怕，對治療與未來充滿不確定'],
    ['治療期間','副作用、外觀改變、工作與經濟壓力，容易失眠、焦慮'],
    ['治療結束後','擔心復發、回歸職場與生活的適應'],
    ['家屬照顧者','長期照顧疲憊、無力感，也需要被支持']
  ]};
  const TAGS = ['癌友心理支持','心理諮商','癌症照護','照顧者','1925安心專線'];

  const DP_GAP = {id:'dp-cpsy-gap', type:'tone', title:'「用藥多、諮商少」的說法',
    desc:'台灣心理腫瘤醫學學會分析健保資料指出，近3成癌友曾用安眠或抗焦慮藥物、接受心理專業協助者不到1成。這組數字可凸顯照護缺口，但也可能讓正在用藥的癌友感到被評價，AI 沒有替你決定要怎麼呈現。',
    current:'近3成曾用安眠或抗焦慮藥物，心理專業協助不到1成',
    options:[{label:'維持目前寫法', action:'keep'}, {label:'改成較中性', action:'replace', from:'接受心理專業協助者不到1成', to:'但接受心理專業協助的比例仍低'}]};

  const DP_GAP_F = Object.assign({}, DP_GAP, {current:'找心理專業協助的人不到1成', options:[{label:'維持目前寫法', action:'keep'}, {label:'改成較中性', action:'replace', from:'找心理專業協助的人不到1成', to:'找心理專業協助的人還不多'}]});
  const DP_GAP_C = Object.assign({}, DP_GAP, {current:'近 3 成｜癌友曾用安眠或抗焦慮藥物', options:[{label:'維持目前寫法', action:'keep'}]});

  const PRO = {
    content_type:'健康文章',
    title:'癌友心理支持：2026年7月起癌友可用免費心理諮商',
    update_date:'2026/11/20',
    intro:'據聯合報報導國健署112年癌症登記，新發生癌症人數達13萬8,051人。癌症衝擊的不只是身體：台灣心理腫瘤醫學學會分析健保資料發現，近3成癌友曾使用安眠或抗焦慮藥物，接受心理專業協助者不到1成。衛福部自2026年7月起推動癌友心理諮商方案，依心理壓力篩檢結果，中風險者可獲6次、高風險者最多12次免費心理諮商。',
    sections:[
      {heading:'不同階段的心理壓力',format:'table',table:TABLE},
      {heading:'癌友心理諮商方案重點',format:'bullets',items:[
        '依心衛福部心健司長說明，方案以肺癌、頭頸癌、乳癌為主但不限癌別，由參與國健署癌症照護相關計畫的醫院執行，期間至2027年底。',
        '醫療團隊以「心情溫度計」等工具評估心理壓力，依低、中、高風險提供衛教、心理諮商或轉介精神科。',
        '家屬也可納入支持；國健署表示全台有105家癌症資源中心提供諮詢與轉介。'
      ]},
      {heading:'家人與朋友可以這樣做',format:'bullets',items:[
        '多陪伴、多傾聽，不急著給建議，也不要求對方「一定要正面」。',
        '協助處理接送、家務、資訊整理等實際事務，減輕治療期間的負擔。',
        '照顧者也要照顧自己；情緒困擾時可撥打24小時免付費的1925安心專線。'
      ]}
    ],
    think_tank_view:'確診後的不安、治療中的疲憊、康復後的擔心，都是正常的反應，不代表不夠堅強。心理支持和治療一樣是癌症照護的一部分；主動告訴醫療團隊自己的情緒，是爭取支持的第一步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'新發人數、方案內容與研究數字均標明為媒體引述國健署、衛福部或學會，未描述自傷細節，已附求助專線，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['沿用步驟1洞察：112年癌症新發13萬8,051人（聯合報引述國健署）','癌友心理諮商方案2026年7月起（聯合報引述衛福部心健司）'],
      layout_reason:'先用表格整理各階段心理壓力，再說明方案怎麼用，最後給家人具體做法。',
      tone:'專業易懂', tone_reason:'需讓癌友與家屬知道有哪些資源，避免悲情訴求。',
      to_verify:['方案細節為媒體引述心健司長，衛福部正式新聞稿待查','「近3成用藥、不到1成諮商」為學會研究，原始論文待查']},
    decision_points:[DP_GAP]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'生病了心也會累：癌友和家人都可以找人聊聊',
    update_date:'2026/11/20',
    intro:'得知罹癌的那一刻，害怕、生氣、睡不著都很正常。研究發現，近3成癌友曾靠安眠或抗焦慮藥物度過難熬的日子，但找心理專業協助的人不到1成。好消息是，衛福部從2026年7月開始提供癌友免費心理諮商，壓力比較大的人最多可以談12次。',
    sections:[
      {heading:'每個階段都有不同的心情',format:'table',table:TABLE},
      {heading:'免費心理諮商怎麼用？',format:'bullets',items:[
        '以肺癌、頭頸癌、乳癌為主，其他癌別有需要也可以由醫療團隊評估。',
        '醫護人員會先用「心情溫度計」了解你的壓力，再安排合適的諮商次數。',
        '家人也可以一起得到支持，各地醫院的癌症資源中心都能幫忙諮詢。'
      ]},
      {heading:'身為家人，可以這樣陪',format:'bullets',items:[
        '多聽少說，不用急著要他「正面一點」。',
        '幫忙接送、煮飯、整理資料，這些實際的幫忙最有感。',
        '照顧的人累了也要休息，心裡悶可以打1925安心專線。'
      ]}
    ],
    think_tank_view:'生病時會害怕、會難過，都不是軟弱。跟醫護人員說一句「我最近睡不好、心情很差」，就能開始得到幫助；家人的陪伴，也是最好的支撐。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'方案內容與研究數字標明為媒體引述，語氣溫和、未淡化心理需求，未描述自傷細節，已附求助專線，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以癌友的心情帶出各階段壓力、方案怎麼用與家人陪伴。', tone:'生活親切', tone_reason:'給癌友與家屬閱讀，降低求助門檻。', to_verify:['方案正式公告待查']},
    decision_points:[DP_GAP_F]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'癌友心理支持：免費諮商最多12次',
    update_date:'2026/11/20',
    intro:'近3成癌友曾用安眠或抗焦慮藥物，接受心理專業協助者不到1成。衛福部2026年7月起提供癌友免費心理諮商。',
    sections:[
      {heading:'各階段心理壓力',format:'table',table:TABLE},
      {heading:'方案重點',format:'bullets',items:[
        '中風險6次、高風險最多12次。',
        '肺癌、頭頸癌、乳癌為主，不限癌別。',
        '家屬也可納入支持。'
      ]},
      {heading:'陪伴原則',format:'bullets',items:[
        '多聽少說，協助實際事務。',
        '照顧者情緒困擾可撥1925。'
      ]}
    ],
    think_tank_view:'心理支持是癌症照護的一部分；主動說出情緒，就能開始得到幫助。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字與方案內容標明為媒體引述，已附求助專線，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為壓力、方案、陪伴三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['方案正式公告待查']},
    decision_points:[DP_GAP]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'癌友心理支持', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'生病了心也會累，可以求助', primary_visual:'最多 12 次', secondary_message:'近 3 成癌友曾用安眠或抗焦慮藥物', action_priority:'說出情緒、使用諮商、家人陪伴'},
    headline_hook:'生病了，心也會累', headline_main:'癌友心理支持 4 件事', title_accent:'4 件事',
    hero_message:'癌友免費心理諮商', hero_support:'2026 年 7 月起，依風險最多 12 次（衛福部）',
    primary_stat:{value:'近 3 成', label:'癌友曾用安眠或抗焦慮藥物', note:'台灣心理腫瘤醫學學會分析健保資料'},
    action_title:'癌友與家人這樣做',
    action_cards:[
      {key:'說', text:'主動告訴醫療團隊自己的情緒'},
      {key:'約', text:'經評估使用免費心理諮商'},
      {key:'陪', text:'家人多聽少說、協助實際事務'},
      {key:'援', text:'照顧者累了，撥 1925 安心專線'}
    ],
    notice:'害怕、難過都是**正常反應**，不代表不夠堅強。',
    carousel_suggestion:{reason:'若想把心理壓力、方案內容與家人陪伴分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'生病了心也會累', headline_main:'各階段的心理壓力'},
      {layout_type:'action', headline_hook:'2026 年 7 月起', headline_main:'癌友免費心理諮商怎麼用'},
      {layout_type:'action', headline_hook:'身為家人', headline_main:'陪伴癌友的 3 個方法'}]},
    hashtags:['癌友心理支持','心理諮商','癌症照護','照顧者'],
    sources:['衛生福利部（媒體引述）','台灣心理腫瘤醫學學會（媒體引述）'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'癌友心理支持', audience:'癌友與家屬', scene:'一位戴著毛帽的癌友坐在醫院諮商室，家人握著他的手，對面的心理師溫和傾聽',
      emotion:'被理解、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A cancer patient wearing a knit cap sitting in a hospital counselling room, a family member holding their hand, a psychologist listening warmly opposite, reassured mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：癌友心理諮商方案2026年7月起（聯合報引述心健司）','近3成用藥取自學會健保資料分析'],
      layout_reason:'核心是「可以求助、怎麼求助」，選 action：4 個行動當主角，用藥比例放下方點出照護缺口。',
      tone:'專業易懂', tone_reason:'溫和、去汙名、以資源為主。',
      to_verify:['方案正式公告待查']},
    decision_points:[DP_GAP_C],
    content_check_note:'方案與研究數字標明來源，已附求助專線，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'癌友心理支持',
    collect:{
      summary:'國內每年新發癌症逾13萬人，癌友心理需求多以藥物處理、專業心理協助比例低；衛福部2026年7月起推動癌友免費心理諮商並公布照護指引，「心理支持是癌症照護的一部分」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約13.8萬人新診斷癌症：據聯合報2026年1月報導國健署112年癌症登記，新發生癌症13萬8,051人，平均每3分48秒就有1人罹癌。',tag:'官方統計',source:{name:'聯合報：衛福部推「腫瘤心理支持方案」 接住每一位癌友',url:'https://udn.com/news/story/7266/9246696'}},
        {item:'年度趨勢方向',desc:'近3成癌友曾用安眠或抗焦慮藥物：台灣心理腫瘤醫學學會分析逾68萬筆健保資料，接受心理專業協助者不到1成，顯示心理照護缺口。',tag:'市場觀察',source:{name:'TVBS健康2.0：癌症傷身更傷心！3成癌友依賴藥物度日',url:'https://health.tvbs.com.tw/nutrition/362213'}},
        {item:'政策動向',desc:'最多12次免費心理諮商：衛福部心健司長表示，癌友心理諮商方案自2026年7月起至2027年底，依風險分級，中風險6次、高風險最多12次，以肺癌、頭頸癌、乳癌為主但不限癌別，家屬也納入。',tag:'市場觀察',source:{name:'聯合報：不分癌別！癌友心理諮商方案7月上路 每人最高12次免費諮商',url:'https://udn.com/news/story/7266/9429031'}},
        {item:'好發族群年齡層',desc:'105家癌症資源中心：國健署副署長2026年4月表示，全台有105家癌症資源中心，並與民間合作提供心理照護，醫師也指出確診初期是心理支持的關鍵期。',tag:'市場觀察',source:{name:'TVBS健康2.0：癌症傷身更傷心！3成癌友依賴藥物度日',url:'https://health.tvbs.com.tw/nutrition/362213'}}
      ],
      product_view:['機會：癌症保障的溝通可延伸到「治療之外的支持」，如心理諮商資源、照顧者支持，展現陪伴型價值。','機會：理賠服務接觸點可主動提供癌症資源中心與心理諮商方案資訊。','風險：避免以癌友的情緒困擾作為銷售訴求；不暗示保險可取代醫療或心理專業。'],
      marketing_view:['機會：2026年7月上路的癌友免費心理諮商是具體、可行動的新資訊。','機會：照顧者也是溝通對象，「家人怎麼陪」容易引發共鳴。','風險：避免悲情、恐懼敘事；內容需附求助管道並尊重癌友感受。'],
      alert_level:'medium',
      alert_reason:'衛福部2026年7月新推癌友心理諮商方案，屬新政策落地期，適合近期溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('依心衛福部心健司長說明','TERMINOLOGY_LANGUAGE','typo',
          '「依心衛福部」多了一個「心」字，屬錯字。','low','no',
          null,'no','clarify','單純錯字。',
          '依衛福部心健司長說明'),
        F('衛福部自2026年7月起推動癌友心理諮商方案','SOURCE_EVIDENCE','secondary_citation',
          '方案內容（次數、癌別、期間）目前只見媒體引述心健司長說法，文中未附衛福部正式公告，細節可能調整。','medium','yes',
          '衛福部心健司癌友心理諮商方案正式公告或新聞稿。','yes','confirm','媒體報導一致，但缺官方原文。',
          '據媒體引述衛福部心健司，自2026年7月起推動癌友心理諮商方案',
          ['衛福部從2026年7月開始提供癌友免費心理諮商','衛福部2026年7月起提供癌友免費心理諮商']),
        F('接受心理專業協助者不到1成','DATA_FACTUAL_ACCURACY','study_period_unstated',
          '已註明出自學會分析健保資料，但未說明資料年份與研究對象範圍，讀者無法判斷是否反映現況。','low','yes',
          '台灣心理腫瘤醫學學會研究的資料年份與發表處。','no','confirm','數字出自研究，期間未標示。',
          '接受心理專業協助者不到1成（研究資料年份待補）',
          ['找心理專業協助的人不到1成']),
        F('不要求對方「一定要正面」','TERMINOLOGY_LANGUAGE','tone_ok_but_incomplete',
          '只說不要做什麼，沒提供可以怎麼說的例子。','low','no',
          null,'no','clarify','可補一句替代說法。',
          '不要求對方「一定要正面」，可以說「你有任何感受都可以跟我說」')
      ],
      card:[
        F('2026 年 7 月起，依風險最多 12 次（衛福部）','SOURCE_EVIDENCE','secondary_citation',
          '卡面標示出處為衛福部，但目前只見媒體引述，且未標示方案期間（至2027年底）與適用醫院。','low','yes',
          '衛福部方案正式公告。','yes','confirm','缺官方原文。',
          '2026 年 7 月起，依風險最多 12 次（參與醫院）'),
        F('癌友曾用安眠或抗焦慮藥物','MEDICAL_INTERPRETATION','possible_stigma',
          '主數字單獨呈現用藥比例，可能讓正在用藥的癌友覺得被評價；用藥本身是合理治療。','low','no',
          null,'no','soften','屬呈現方式問題。',
          '癌友曾需要安眠或抗焦慮藥物協助')
      ]
    },
    title_alts:[
      '癌友心理支持：2026年7月起癌友可用免費心理諮商',
      '生病了心也會累：癌友和家人都可以找人聊聊',
      '近3成癌友曾用安眠或抗焦慮藥物：心理支持怎麼找'
    ],
    card_title_alts:[
      ['生病了，心也會累','癌友心理支持 4 件事'],
      ['2026 年 7 月起','癌友免費心理諮商'],
      ['家人怎麼陪？','癌友心理支持重點']
    ],
    data_addon:[
      '衛福部心健司委託台灣心理腫瘤醫學學會編製《癌友及家屬心理支持照護指引》（一般性癌症、乳癌），已在心健司官網上線。',
      '方案預估約8千人受惠，預算約8千萬元（聯合報引述心健司）。',
      '學會建議以「困擾溫度計」篩檢，依低、中、高風險分層提供衛教、心理師或精神科介入。'
    ],
    cta:'如果你或家人正在接受癌症治療，下次回診時主動跟醫護人員說說最近的心情，詢問是否適用免費心理諮商。'
  });
})();
