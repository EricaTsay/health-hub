/* v6 示範主題：自殺防治與守門人（B5 心理健康與精神疾患）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計摘要表（表1、表40：自殺死亡人數與排名）、
   衛福部 115-09-12 世界自殺防治日記者會新聞稿（守門人1問2應3轉介、求助資源）、理財周刊轉載健康醫療網 2026-09-20（全國自殺防治中心主任受訪）。
   撰寫原則：不描述自傷方法與細節，內容一律附求助專線。
   參考方向：無參考文章，全數自行查證。 */
(function(){
  const REFS = [
    {title:'國人死亡人數連續3年下降 十大死因中6項死因人數、死亡率都減少（114年死因統計）',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'},
    {title:'世界自殺防治日記者會「改變自殺敘事–綻放韌性 共築未來」',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-87918-1.html'},
    {title:'7至8成自殺前曾發出求助訊號！僅半數民眾敢開口問 專家揭防治要點',source:'理財周刊（健康醫療網）',url:'https://www.moneyweekly.com.tw/ArticleData/Info/Article/249935'},
    {title:'安心專線改4碼更好記! 1925依舊愛我 持續服務你和我',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48244-1.html'}
  ];
  const TABLE = {headers:['守門人3步驟','怎麼做'], rows:[
    ['1 問','主動關心、直接詢問對方最近的狀況與想法，讓他知道有人在意'],
    ['2 應','耐心傾聽、不批評不說教，接納對方的感受'],
    ['3 轉介','陪同或協助連結專業資源：1925安心專線、身心科、社區心理衛生中心']
  ]};
  const TAGS = ['自殺防治','守門人','1925安心專線','心理健康','求助不丟臉'];

  const DP_RANK = {id:'dp-sp-trend', type:'data_scope', title:'自殺死亡要看「人數」還是「排名」',
    desc:'114年自殺死亡3,951人，較113年的4,062人減少，但仍連續2年居十大死因第10名。人數下降與排名維持是兩件事，AI 沒有替你決定要強調哪一面。',
    current:'114年自殺死亡3,951人、較113年減少（衛福部死因統計）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'3,951人', value:'114年自殺死亡人數', note:'較113年4,062人減少2.7%（目前採用）'},
      {label:'第10名', value:'十大死因排名', note:'113、114年連續2年'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'一句關心的力量：人人都能當自殺防治守門人',
    update_date:'2026/11/20',
    intro:'依衛生福利部114年死因統計，蓄意自我傷害（自殺）死亡3,951人，較113年的4,062人減少，但仍連續2年居國人十大死因第10名。全國自殺防治中心主任2026年受訪指出，臨床上約7至8成自殺身亡者生前曾發出求助訊號。衛福部推動「自殺防治守門人」，以「1問2應3轉介」讓每個人都能在關鍵時刻接住身邊的人。',
    sections:[
      {heading:'守門人「1問2應3轉介」',format:'table',table:TABLE},
      {heading:'可能需要關心的訊號',format:'bullets',items:[
        '情緒持續低落、退縮，不再參與原本喜歡的活動。',
        '說出無望、覺得自己是負擔，或交代事情、與人道別。',
        '生活出現重大變故，如失業、失戀、重病或失去親人。',
        '「只是說說而已」是迷思；聽到這類話語，請認真看待並主動關心。'
      ]},
      {heading:'求助資源',format:'bullets',items:[
        '1925安心專線：24小時免付費。',
        '生命線1995、張老師1980；男性關懷專線0800-013-999。',
        '衛福部表示，全台現有75處社區心理衛生中心、396處心理諮商服務據點；15至45歲可使用3次免費心理諮商。',
        '遇到立即危險時，請撥打119或110。'
      ]}
    ],
    think_tank_view:'自殺防治不只是專業人員的工作。多數人在最艱難的時候，其實曾經以各種方式說出口；一句「你最近還好嗎？」、一段不打斷的傾聽、一次陪同求助，都可能是轉折點。把守門人的三個步驟記起來，就是給身邊的人多一層保護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數與排名引自衛福部114年死因統計並標明年份，「7至8成」標明為專家受訪說法，未描述任何自傷方法與細節，已附多個求助專線，未涉及具體商品。',
    ai_rationale:{basis:['沿用步驟1洞察：114年自殺死亡3,951人、連續2年居十大死因第10名（衛福部死因統計）','守門人1問2應3轉介取自衛福部115年世界自殺防治日新聞稿'],
      layout_reason:'先教「怎麼做」（守門人3步驟），再列出需要關心的訊號，最後集中整理求助資源。',
      tone:'專業易懂', tone_reason:'依自殺新聞報導原則，強調希望與求助管道，避免細節描述。',
      to_verify:['「7至8成曾發出求助訊號」為專家受訪說法，原始研究待查']},
    decision_points:[DP_RANK]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'一句「你還好嗎？」也能救人：學會守門人3步驟',
    update_date:'2026/11/20',
    intro:'114年有3,951人因自殺離世，比前一年少了一些，但自殺仍然排在國人十大死因第10名。全國自殺防治中心主任說，很多人在最難熬的時候，其實都曾經用各種方式說出口。只要學會「1問2應3轉介」，你也可以成為身邊人的守門人。',
    sections:[
      {heading:'守門人3步驟',format:'table',table:TABLE},
      {heading:'這些時候，多問一句',format:'bullets',items:[
        '最近總是很低落、不想出門，也不跟朋友聯絡。',
        '常說「活著好累」「我是大家的負擔」，或突然交代事情。',
        '剛經歷失業、分手、生病或家人過世。',
        '別把這些話當成「只是說說」，認真聽、主動關心。'
      ]},
      {heading:'可以打給誰？',format:'bullets',items:[
        '1925安心專線，24小時免費。',
        '生命線1995、張老師1980；男性也可以打0800-013-999。',
        '15到45歲有3次免費心理諮商，全台也有社區心理衛生中心。',
        '如果有立即的危險，直接打119或110。'
      ]}
    ],
    think_tank_view:'不用是專家，也能當守門人。一句「你最近還好嗎？」、願意聽完不打斷、陪他打一通電話或去一次診所，都可能讓對方撐過最難的那一段。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字引自衛福部死因統計並標明年份，語氣溫和、強調希望與求助，未描述任何自傷方法與細節，已附多個求助專線，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以日常對話帶出守門人步驟、關心時機與求助資源。', tone:'生活親切', tone_reason:'讓一般民眾覺得自己也做得到。', to_verify:['「7至8成」原始研究待查']},
    decision_points:[DP_RANK]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'自殺防治守門人：1問2應3轉介',
    update_date:'2026/11/20',
    intro:'114年自殺死亡3,951人，連續2年居十大死因第10名。學會守門人3步驟，接住身邊的人。',
    sections:[
      {heading:'守門人3步驟',format:'table',table:TABLE},
      {heading:'留意訊號',format:'bullets',items:[
        '持續低落、退縮。',
        '說出無望或覺得自己是負擔。',
        '剛經歷重大變故。'
      ]},
      {heading:'求助資源',format:'bullets',items:[
        '1925安心專線（24小時免付費）。',
        '生命線1995、張老師1980。',
        '立即危險撥119或110。'
      ]}
    ],
    think_tank_view:'自殺是可以預防的；主動詢問、耐心傾聽、協助轉介，人人都能成為守門人。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字引自衛福部死因統計並標明年份，未描述任何自傷方法與細節，已附求助專線，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為步驟、訊號、資源三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_RANK]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'自殺防治與守門人', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'自殺是可以預防的，人人都能當守門人', primary_visual:'3,951 人', secondary_message:'1問2應3轉介', action_priority:'主動關心、傾聽、轉介 1925'},
    headline_hook:'一句關心的力量', headline_main:'人人都能當自殺防治守門人', title_accent:'守門人',
    primary_stat:{kicker:'114 年・死因統計', value:'3,951 人', label:'自殺死亡人數，較 113 年減少', note:'連續 2 年居十大死因第 10 名'},
    chart:{type:'bar', title:'自殺死亡人數（人）', points:[
      {label:'2019', value:3864, display:'3,864'},
      {label:'2021', value:3585, display:'3,585'},
      {label:'2023', value:3898, display:'3,898'},
      {label:'2024', value:4062, display:'4,062'},
      {label:'2025', value:3951, display:'3,951', highlight:true}
    ], note:'衛福部死因統計'},
    secondary_stats:[
      {value:'7–8 成', label:'生前曾發出求助訊號'},
      {value:'24 小時', label:'1925 安心專線免付費'},
      {value:'75 處', label:'社區心理衛生中心'}
    ],
    action_title:'守門人這樣做',
    action_cards:[
      {key:'問', text:'主動關心：「你最近還好嗎？」'},
      {key:'應', text:'耐心傾聽，不批評、不說教'},
      {key:'轉', text:'陪同連結 1925、身心科資源'},
      {key:'急', text:'立即危險時撥打 119 或 110'}
    ],
    carousel_suggestion:{reason:'若想把趨勢、守門人步驟與求助資源分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'114 年死因統計', headline_main:'自殺死亡 3,951 人'},
      {layout_type:'action', headline_hook:'一句關心的力量', headline_main:'守門人 1問2應3轉介'},
      {layout_type:'knowledge', headline_hook:'可以打給誰？', headline_main:'求助專線一次看'}]},
    hashtags:['自殺防治','守門人','1925安心專線','心理健康'],
    sources:['衛生福利部','全國自殺防治中心（媒體受訪）'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'自殺防治守門人', audience:'一般民眾、同事與家人', scene:'兩位朋友坐在公園長椅上，一人把手輕放在另一人肩上專心傾聽',
      emotion:'溫暖、被接住', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'Two friends sitting on a park bench, one gently resting a hand on the other\'s shoulder and listening attentively, warm and supportive mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：114年自殺死亡3,951人（衛福部死因統計表1、表40）','守門人步驟取自衛福部115年9月新聞稿'],
      layout_reason:'選 data：死亡人數與近 5 年趨勢當主角，下方給守門人 4 個行動與求助專線，以希望與行動收尾。',
      tone:'專業易懂', tone_reason:'依自殺新聞報導原則，不描述細節、強調求助。',
      to_verify:['7–8 成為專家受訪說法']},
    decision_points:[Object.assign({}, DP_RANK, {current:'3,951 人（114 年，較 113 年減少）'})],
    content_check_note:'死亡人數引自衛福部死因統計並標明年份，未描述任何自傷方法與細節，已附求助專線，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'自殺防治與守門人',
    collect:{
      summary:'114年自殺死亡人數較前一年減少，但仍連續2年居十大死因第10名；衛福部2026年世界自殺防治日以「改變自殺敘事」為主題，推動人人都是守門人，「主動關心、傾聽、轉介」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'近4000人因自殺死亡：依衛福部114年死因統計，蓄意自我傷害（自殺）死亡3,951人，死亡率每十萬人口16.9人，男性2,543人、女性1,408人。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'年度趨勢方向',desc:'減少2.7%、仍居第10名：114年自殺死亡人數低於113年的4,062人，但自殺連續2年排在國人十大死因第10名。',tag:'官方統計',source:{name:'衛生福利部：國人死亡人數連續3年下降（114年死因統計）',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'政策動向',desc:'75處社區心理衛生中心：衛福部2026年9月世界自殺防治日記者會推動「1問2應3轉介」守門人訓練，並說明全台有75處社區心理衛生中心、396處心理諮商服務據點及24小時1925安心專線。',tag:'官方統計',source:{name:'衛生福利部：世界自殺防治日記者會「改變自殺敘事–綻放韌性 共築未來」',url:'https://mohw.gov.tw/cp-16-87918-1.html'}},
        {item:'好發族群年齡層',desc:'7成以上自殺身亡者生前曾發出求助訊號：全國自殺防治中心主任2026年受訪指出，臨床上約7至8成自殺身亡者生前曾發出訊號，並引述中心調查，僅約一半民眾敢主動詢問對方是否有自殺想法。',tag:'市場觀察',source:{name:'理財周刊（健康醫療網）：7至8成自殺前曾發出求助訊號！',url:'https://www.moneyweekly.com.tw/ArticleData/Info/Article/249935'}}
      ],
      product_view:['機會：可在員工與保戶關懷服務中加入守門人觀念與求助專線，展現企業社會責任。','機會：業務同仁常是保戶生活變故（失業、重病、喪親）時的接觸者，守門人訓練有實際價值。','風險：衛教內容不連結任何保險條款或理賠說明，避免造成誤解或二度傷害。'],
      marketing_view:['機會：9月10日世界自殺防治日與10月心理健康月是固定溝通檔期。','機會：「一句關心的力量」適合以溫暖、希望導向的社群內容呈現。','風險：嚴守自殺新聞報導原則：不描述方法與細節、不簡化成單一原因，內容一律附求助專線。'],
      alert_level:'medium',
      alert_reason:'自殺連續2年居十大死因第10名，屬持續性公共衛生議題；溝通須遵循報導原則，適合在9月世界自殺防治日前後規劃。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('臨床上約7至8成自殺身亡者生前曾發出求助訊號','SOURCE_EVIDENCE','expert_opinion_unsourced',
          '已註明是全國自殺防治中心主任受訪說法，但未說明出自哪些研究，讀者無法查證；屬臨床觀察而非國內統計。','low','yes',
          '國內外心理解剖研究中，自殺身亡者生前曾表達意圖的比例。','no','confirm','數字與國際文獻相近，但原始研究未標示。',
          '臨床研究顯示，多數自殺身亡者生前曾以言語或行為發出求助訊號（專家估計約7至8成）'),
        F('較113年的4,062人減少','DATA_FACTUAL_ACCURACY','trend_single_year',
          '只比較單一年度，可能讓讀者以為趨勢已經下降；近10年人數在3,500至4,100人之間波動。','low','no',
          null,'no','clarify','數字正確，屬趨勢詮釋問題。',
          '較113年的4,062人減少，但近年人數仍在高點波動',
          ['比前一年少了一些']),
        F('說出無望、覺得自己是負擔，或交代事情、與人道別','MEDICAL_INTERPRETATION','warning_sign_without_action',
          '列出警訊後未立即接上「怎麼做」，讀者可能不知道看到訊號後的下一步。','low','no',
          null,'no','clarify','可在同一點補上行動提示。',
          '說出無望、覺得自己是負擔，或交代事情、與人道別——看到時請直接關心並協助聯繫1925',
          ['常說「活著好累」「我是大家的負擔」，或突然交代事情']),
        F('15至45歲可使用3次免費心理諮商','CURRENCY_TIMELINESS','service_period_unstated',
          '未標示方案年度與名額限制，文章流傳後方案條件可能已改變。','low','yes',
          '衛福部青壯世代心理健康支持方案當年度服務期間。','yes','confirm','方案逐年檢討。',
          '15至45歲可使用3次免費心理諮商（115年方案，名額以衛福部公告為準）',
          ['15到45歲有3次免費心理諮商'])
      ],
      card:[
        F('生前曾發出求助訊號','SOURCE_EVIDENCE','expert_opinion_unsourced',
          '「7–8 成」未標示出處，屬專家受訪的臨床觀察。','low','no',
          null,'no','clarify','補出處即可。',
          '生前曾發出求助訊號（專家估計）'),
        F('自殺死亡人數，較 113 年減少','DATA_FACTUAL_ACCURACY','trend_single_year',
          '卡面只呈現單年減少，搭配圖表看得出人數仍在高點波動，標籤可能讓讀者誤以為問題已改善。','low','no',
          null,'no','clarify','屬表達問題。',
          '自殺死亡人數（114 年）')
      ]
    },
    title_alts:[
      '一句關心的力量：人人都能當自殺防治守門人',
      '一句「你還好嗎？」也能救人：學會守門人3步驟',
      '自殺連續2年居十大死因第10名：守門人1問2應3轉介'
    ],
    card_title_alts:[
      ['一句關心的力量','人人都能當自殺防治守門人'],
      ['你最近還好嗎？','守門人 1問2應3轉介'],
      ['自殺是可以預防的','學會守門人 3 步驟']
    ],
    data_addon:[
      '衛福部114年死因統計：自殺死亡率每十萬人口16.9人，男性2,543人、女性1,408人。',
      '全國自殺防治中心調查：約50.7%民眾敢主動詢問對方是否有自殺想法，僅18.4%了解守門人功能（健康醫療網2026年9月報導）。',
      '男性關懷專線0800-013-999自114年8月底起不限議題，有心理困擾都可撥打。'
    ],
    cta:'今天就把1925存進手機通訊錄，並傳給一位你在意的朋友：「最近還好嗎？想聊聊隨時找我。」'
  });
})();
