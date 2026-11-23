/* v6 示範主題：職場霸凌與身心健康（B5 心理健康與精神疾患）
   查證日期：2026-11-21。數據來源：勞動部 2026-07-01「職安法新修條文與11部子法7月1日同步上路」、2026-07-14「勞動部公告新版《職場不法侵害預防指引》」、
   行政院 2025-05-13「推動修正《職業安全衛生法》」。查無國內官方職場霸凌盛行率統計；條文定義與罰鍰金額未直接讀取條文原文。
   參考方向：健康智庫〈遇到職場霸凌，如何守護身心健康？〉2024/12。 */
(function(){
  const M1 = 'https://www.mol.gov.tw/1607/1632/1633/93216/';
  const M2 = 'https://www.mol.gov.tw/1607/1632/1633/95463/';
  const EY = 'https://www.ey.gov.tw/Page/5A8A0CB5B41DA11E/252895a8-2fdd-4f4c-8246-6df636874bfc';
  const REFS = [
    {title:'職安法新修條文與11部子法7月1日同步上路！聚焦源頭防災及友善職場新制度',source:'勞動部',url:M1},
    {title:'配合職安法新制 勞動部公告新版《職場不法侵害預防指引》 強化職場內外部暴力預防機制',source:'勞動部',url:M2},
    {title:'推動修正《職業安全衛生法》',source:'行政院',url:EY},
    {title:'安心專線改4碼更好記! 1925依舊愛我 持續服務你和我',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48244-1.html'}
  ];
  const TABLE = {headers:['遇到霸凌時','怎麼做'], rows:[
    ['保留紀錄','記下時間、地點、經過與在場者，保存訊息、郵件與錄音等證據'],
    ['內部申訴','向公司的職場霸凌申訴窗口或專責人員提出'],
    ['外部申訴','行為人為公司最高負責人時，可直接向地方主管機關申訴'],
    ['尋求諮詢','勞工諮詢申訴專線1955；情緒困擾可撥1925安心專線']
  ]};
  const TAGS = ['職場霸凌','職場心理健康','職業安全衛生法','申訴管道','1925安心專線'];

  const DP_LAW = {id:'dp-wb-law', type:'context', title:'法規細節以條文原文為準',
    desc:'職業安全衛生法職場霸凌專章自2026年7月1日施行。勞動部與行政院新聞稿說明了雇主義務與申訴管道，但霸凌的條文定義與罰鍰金額未在新聞稿列出。AI 沒有寫入條文細節，是否補充由你決定。',
    current:'只寫新聞稿已說明的制度重點',
    options:[{label:'沿用目前寫法', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'職場霸凌防治上路：被霸凌不是你的錯，申訴與求助管道一次看',
    update_date:'2026/11/21',
    intro:'長期遭受貶低、排擠、刻意刁難或公開羞辱，不只影響工作表現，也可能造成焦慮、失眠與憂鬱。修正後的《職業安全衛生法》自2026年7月1日起施行，首次建立職場霸凌防治專章：勞動部說明，事業單位必須建立職場霸凌的預防、申訴、調查及處理機制；若行為人是事業單位最高負責人，受害者可直接向地方主管機關申訴。國內目前查無官方職場霸凌盛行率統計。',
    sections:[
      {heading:'遇到霸凌時的4個步驟',format:'table',table:TABLE},
      {heading:'霸凌對身心的影響',format:'bullets',items:[
        '常見反應包括焦慮、失眠、頭痛胃痛、自我懷疑，甚至不想上班。',
        '若情緒低落、無望感持續兩週以上，應尋求身心科或心理諮商協助。',
        '15至45歲可使用衛福部3次免費心理諮商；需要傾訴可撥24小時免付費的1925安心專線。'
      ]},
      {heading:'雇主與同事可以做什麼',format:'bullets',items:[
        '行政院說明，修法要求雇主知悉勞工遭受職場霸凌時，須立即採取有效適當措施。',
        '勞動部新版指引建議事業單位設置並公開多元申訴管道，指定專責人員受理。',
        '同事看到霸凌時，可以表達支持、陪同申訴，避免沉默旁觀。'
      ]}
    ],
    think_tank_view:'職場霸凌從「個人忍耐」走向「制度處理」，是2026年職場的重要轉變。被霸凌的人先照顧好自己的身心、保留紀錄、善用申訴與諮詢管道；企業則需把防治機制落實到日常管理。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'法規內容引自勞動部與行政院新聞稿並標明施行日期，說明查無盛行率統計，附求助專線，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['職安法職場霸凌專章2026年7月1日施行（勞動部）','最高負責人為行為人時可向地方主管機關申訴（勞動部）'],
      layout_reason:'先用表格整理遇到霸凌時的步驟，再說明身心影響與求助，最後說明雇主與同事的角色。',
      tone:'專業易懂', tone_reason:'法規資訊需正確，同時同理受害者。',
      to_verify:['職場霸凌條文定義與罰鍰金額待查條文原文','查無官方盛行率統計']},
    decision_points:[DP_LAW]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'在公司被排擠、被羞辱？職場霸凌不是你的錯',
    update_date:'2026/11/21',
    intro:'被主管當眾羞辱、被同事故意排擠、工作一直被刁難……這些都可能是職場霸凌。從2026年7月1日起，修正後的職業安全衛生法正式把職場霸凌納入規範，公司必須有預防、申訴和處理的機制；如果霸凌你的是老闆本人，也可以直接向地方政府申訴。',
    sections:[
      {heading:'遇到霸凌，可以這樣做',format:'table',table:TABLE},
      {heading:'別忽略心裡的傷',format:'bullets',items:[
        '睡不著、胃痛、一想到上班就害怕，都是常見的反應。',
        '心情低落超過兩週，記得找身心科或心理師聊聊。',
        '15到45歲有3次免費心理諮商；想找人說說話，打1925安心專線。'
      ]},
      {heading:'身為同事，可以這樣幫忙',format:'bullets',items:[
        '私下關心、表達支持，讓他知道不是一個人。',
        '可以陪他一起申訴，或幫忙作證。',
        '不跟著起鬨、不沉默旁觀。'
      ]}
    ],
    think_tank_view:'被霸凌不是你不夠好。保護自己、留下紀錄、找人幫忙，現在法律也站在你這邊。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'法規內容引自勞動部，語氣親切，附求助專線，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以被霸凌的情境帶出步驟、身心照顧與同事角色。', tone:'生活親切', tone_reason:'給受害者與同事閱讀。', to_verify:[]},
    decision_points:[DP_LAW]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'職場霸凌：申訴4步驟＋身心照顧',
    update_date:'2026/11/21',
    intro:'職安法職場霸凌防治專章2026年7月1日施行，事業單位須建立預防、申訴、調查及處理機制。',
    sections:[
      {heading:'4步驟',format:'table',table:TABLE},
      {heading:'身心照顧',format:'bullets',items:[
        '低落超過兩週尋求專業協助。',
        '1925安心專線、3次免費諮商。'
      ]},
      {heading:'同事角色',format:'bullets',items:[
        '表達支持、陪同申訴。'
      ]}
    ],
    think_tank_view:'保留紀錄、善用申訴與諮詢管道，照顧好自己的身心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'法規內容引自勞動部，附求助專線，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為步驟、身心、同事三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_LAW]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'職場霸凌與身心健康', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'職場霸凌防治2026年7月上路', primary_visual:'2026/7/1', secondary_message:'公司須建立預防、申訴、調查及處理機制', action_priority:'保留紀錄、申訴、求助'},
    headline_hook:'被排擠、被羞辱？', headline_main:'職場霸凌申訴 4 步驟', title_accent:'4 步驟',
    hero_message:'不是你的錯', hero_support:'職安法職場霸凌專章 2026 年 7 月 1 日施行',
    knowledge_title:'遇到霸凌這樣做', knowledge_note:'情緒困擾持續，**撥 1925 或就醫**',
    knowledge_cards:[
      {label:'保留紀錄', icon:'report', lines:['時間、經過、證據']},
      {label:'內部申訴', icon:'chat', lines:['公司申訴窗口']},
      {label:'外部申訴', icon:'shield', lines:['老闆霸凌找地方主管機關']},
      {label:'諮詢專線', icon:'chat', lines:['勞工 1955','心理 1925']}
    ],
    primary_stat:{value:'2026/7/1', label:'職場霸凌防治專章施行', note:'勞動部｜同步施行 11 部子法'},
    secondary_stats:[
      {value:'1955', label:'勞工諮詢申訴專線'},
      {value:'1925', label:'24 小時安心專線'}
    ],
    action_title:'照顧自己',
    action_cards:[
      {key:'錄', text:'記下時間地點經過，保存證據'},
      {key:'訴', text:'向公司窗口或地方主管機關申訴'},
      {key:'談', text:'低落兩週以上，找心理師或身心科'},
      {key:'援', text:'需要傾訴，撥 1925 安心專線'}
    ],
    carousel_suggestion:{reason:'若想把法規、申訴步驟與身心照顧分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'2026 新制', headline_main:'職場霸凌防治上路'},
      {layout_type:'action', headline_hook:'被霸凌了怎麼辦', headline_main:'申訴 4 步驟'},
      {layout_type:'action', headline_hook:'別忽略心裡的傷', headline_main:'身心照顧資源'}]},
    hashtags:['職場霸凌','職場心理健康','申訴管道','1925安心專線'],
    sources:['勞動部','行政院','衛生福利部'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'職場霸凌支持', audience:'上班族', scene:'一位上班族在安靜的會議室向人資專責人員說明情況，同事在旁陪同',
      emotion:'被支持、有方向', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker in a quiet meeting room explaining a situation to an HR officer while a supportive colleague sits beside them, supported and hopeful mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['職場霸凌專章2026年7月1日施行（勞動部）'],
      layout_reason:'選 knowledge：4 個應對步驟放中段，施行日期與專線放下方，最後給 4 個照顧行動。',
      tone:'專業易懂', tone_reason:'同理受害者、提供明確管道。',
      to_verify:['條文定義與罰鍰金額']},
    decision_points:[DP_LAW],
    content_check_note:'法規引自勞動部與行政院，附求助專線，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'職場霸凌與身心健康',
    collect:{
      summary:'修正後的職業安全衛生法於2026年7月1日施行、首次建立職場霸凌防治專章，事業單位須建立預防、申訴與處理機制；「辨識霸凌、善用申訴管道、照顧身心」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'查無官方職場霸凌盛行率統計：勞動部與衛福部未公布全國職場霸凌發生比例，新制施行後的申訴與處理統計尚待公布。',tag:'市場觀察',source:{name:'勞動部：職安法新修條文與11部子法7月1日同步上路',url:M1}},
        {item:'年度趨勢方向',desc:'11部配套子法同步施行：勞動部2026年7月1日表示，職安法新修條文與職場霸凌防治措施準則等11部子法全面施行，首次建立職場霸凌防治法制。',tag:'官方統計',source:{name:'勞動部：職安法新修條文與11部子法7月1日同步上路',url:M1}},
        {item:'政策動向',desc:'最高負責人霸凌可向地方主管機關申訴：勞動部說明，事業單位須建立預防、申訴、調查及處理機制，行為人為最高負責人時由公權力介入調查。',tag:'官方統計',source:{name:'勞動部：職安法新修條文與11部子法7月1日同步上路',url:M1}},
        {item:'好發族群年齡層',desc:'第一線勞工遭顧客不當對待也納入保護：勞動部2026年7月公告新版職場不法侵害預防指引，要求雇主優先保障勞工安全，並視需要提供法律、醫療或心理諮商協助。',tag:'官方統計',source:{name:'勞動部：公告新版《職場不法侵害預防指引》',url:M2}}
      ],
      product_view:['機會：企業客戶需落實霸凌防治，可結合員工協助方案與心理支持服務。','機會：內部也可作為友善職場的溝通素材。','風險：不提供個案法律意見；法規細節請以條文與主管機關說明為準。'],
      marketing_view:['機會：2026年新制上路是具時效性的溝通題材。','機會：「申訴4步驟」實用易分享。','風險：避免渲染個案或指名道姓；附求助管道。'],
      alert_level:'medium',
      alert_reason:'職場霸凌防治專章2026年7月施行，屬新制落地期，企業與勞工關注度高。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('長期遭受貶低、排擠、刻意刁難或公開羞辱','TERMINOLOGY_LANGUAGE','definition_not_legal',
          '文中列舉的行為是一般描述，並非法規條文定義；讀者可能以此判斷是否符合法律上的職場霸凌。','medium','yes',
          '職業安全衛生法職場霸凌專章的條文定義。','no','confirm','條文原文未讀取。',
          '長期遭受貶低、排擠、刻意刁難或公開羞辱（是否構成法律上的職場霸凌，以條文定義與調查結果為準）'),
        F('國內目前查無官方職場霸凌盛行率統計','SOURCE_EVIDENCE','no_statistic_available',
          '文章沒有任何量化數據，讀者無法判斷問題規模；新制施行後的申訴統計可留意後續公布。','low','no',
          null,'no','clarify','屬資料可得性說明。',
          '國內目前查無官方職場霸凌盛行率統計（新制施行後的申訴統計可留意勞動部公布）'),
        F('保存訊息、郵件與錄音等證據','MEDICAL_INTERPRETATION','legal_caution',
          '錄音涉及個資與法律界線，文中未提醒需留意合法性，建議諮詢專業意見。','low','no',
          null,'no','clarify','補一句即可。',
          '保存訊息、郵件等證據（錄音等方式建議先諮詢專業意見）'),
        F('同事看到霸凌時，可以表達支持、陪同申訴，避免沉默旁觀','MEDICAL_INTERPRETATION','bystander_safety',
          '未提醒旁觀者也需留意自身安全與界線，避免讓衝突擴大。','low','no',
          null,'no','clarify','補一句即可。',
          '同事看到霸凌時，可以在安全的前提下表達支持、陪同申訴',
          ['表達支持、陪同申訴。','可以陪他一起申訴，或幫忙作證。'])
      ],
      card:[
        F('老闆霸凌找地方主管機關','TERMINOLOGY_LANGUAGE','oversimplification',
          '「老闆」與法規用語「事業單位最高負責人」不完全相同，讀者可能誤以為直屬主管也適用。','low','no',
          null,'no','clarify','屬用語精確度。',
          '最高負責人霸凌找地方主管機關'),
        F('記下時間地點經過，保存證據','MEDICAL_INTERPRETATION','legal_caution',
          '未提醒證據保存方式需合法。','low','no',
          null,'no','clarify','補充即可。',
          '記下時間地點經過，合法保存證據')
      ]
    },
    title_alts:[
      '職場霸凌防治上路：被霸凌不是你的錯，申訴與求助管道一次看',
      '在公司被排擠、被羞辱？職場霸凌不是你的錯',
      '2026職場霸凌新制：申訴4步驟與身心照顧'
    ],
    card_title_alts:[
      ['被排擠、被羞辱？','職場霸凌申訴 4 步驟'],
      ['2026 新制上路','職場霸凌防治'],
      ['不是你的錯','照顧自己的身心']
    ],
    data_addon:[
      '行政院：修法提高罰鍰上限，經裁罰者應公布單位名稱、負責人姓名與罰鍰金額等。',
      '勞動部新版指引：建議整合職場霸凌、職場性騷擾等申訴窗口，指定專責人員受理。',
      '性騷擾、跟蹤騷擾、就業歧視等事件仍優先依各該專屬法規辦理。'
    ],
    cta:'如果你正承受職場霸凌，今天就開始記錄經過；需要諮詢可撥1955，心裡太累就撥1925。'
  });
})();
