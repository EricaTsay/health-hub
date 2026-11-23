/* v6 示範主題：孕產健康照護（孕前、產檢、產後）（B11 第二輪擴充）
   查證日期：2026-11-23。數據來源：衛福部／國健署〈14次公費產檢〉（2025/09/02）、〈定期產檢4要訣〉（2024/10/04）、產後健康照護服務新聞稿（114年5月1日起）、孕產兒關懷專線新聞稿（2026/03/12）。
   參考方向：健康智庫孕前檢查、產檢、產後照護相關文章（僅取架構）。 */
(function(){
  const REFS = [
    {title:'14次公費產檢 給媽咪與寶寶最安心的守護',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-16-83667-1.html'},
    {title:'定期產檢4要訣 助安心懷孕 平安生產',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-16-80145-1.html'},
    {title:'產後健康照護服務上路',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-2704-82435-1.html'},
    {title:'孕產兒關懷專線服務成果',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-2704-85766-1.html'}
  ];
  const TABLE = {headers:['階段','公費服務與重點'], rows:[
    ['孕前','準備懷孕可先做健康檢查，部分縣市另有孕前健檢補助，可洽當地衛生局'],
    ['孕期產檢','14次公費產檢（110年起），含3次超音波、妊娠糖尿病與貧血檢驗、乙型鏈球菌篩檢'],
    ['孕期衛教','2次產前健康照護衛教指導（第1、第3孕期各1次）'],
    ['產後','2次產後健康照護（114年5月1日起），含產後憂鬱量表評估，須於產後3個月內完成'],
    ['全程諮詢','孕產兒關懷專線0800-870-870，週一至週五9至17時']
  ]};
  const TAGS = ['產檢','孕產健康','產後照護','孕前檢查','孕媽咪'];

  const DP_AGE = {id:'dp-preg-age', type:'data_year', title:'高齡產婦比例的年份',
    desc:'國健署2024年新聞稿引用內政部資料：112年出生嬰兒中31.97%為35歲以上產婦所生。國健署2025年新聞稿僅寫「三成以上」，未提供更新年度精確比例，AI 沿用112年數字並標明年份。',
    current:'112年出生嬰兒31.97%為35歲以上產婦所生',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'31.97%', value:'112年', note:'國健署2024/10/04新聞稿引用內政部資料（目前採用）'},
      {label:'三成以上', value:'未標年份', note:'國健署2025/11新聞稿；第二胎35歲以上產婦占37%'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'從孕前到產後：公費孕產照護一次看懂',
    update_date:'2026/11/23',
    intro:'國民健康署提供孕婦14次公費產檢，113年利用率達96%以上；自114年5月1日起，又在產檢之外加碼2次產後健康照護服務，把照顧延伸到產後3個月。依國健署引用內政部資料，112年出生嬰兒有31.97%為35歲以上產婦所生，孕前準備與產後追蹤的重要性越來越高。',
    sections:[
      {heading:'孕前、孕期、產後的公費服務',format:'table',table:TABLE},
      {heading:'產檢時程與重點檢查',format:'bullets',items:[
        '懷孕初期第8、12週，中期每月1次，後期第30至36週每2週1次，第37週起每週1次。',
        '妊娠第24至28週進行妊娠糖尿病篩檢與貧血檢驗；國健署指出10~20%的孕婦初期產檢時有貧血。',
        '懷孕第35至37週進行乙型鏈球菌篩檢，約近2成孕婦產道帶有此細菌。'
      ]},
      {heading:'產後別忘了照顧自己',format:'bullets',items:[
        '第1次產後照護建議在產後1至2週，第2次在產後6至8週。',
        '產後照護會以愛丁堡產後憂鬱量表自我評估，並追蹤體重、血壓與孕期疾病。',
        '孕產兒關懷專線114年接聽14,417通，新生兒照護與母乳哺育是最常見的諮詢主題。'
      ]}
    ],
    think_tank_view:'孕產照護過去常停在「生完就結束」，114年起的產後服務把媽媽自己的身心健康也納入公費。把孕前檢查、14次產檢與2次產後照護視為一條完整路徑，才能同時守住寶寶與媽媽的健康。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'產檢次數、利用率與產後服務生效日期引自國健署新聞稿並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['14次公費產檢、113年利用率96%以上（國健署2025/09/02）','產後健康照護114年5月1日起2次（國健署）'],
      layout_reason:'依孕前、孕期、產後的順序整理公費服務，再說明產檢時程與產後照護。',
      tone:'專業易懂', tone_reason:'制度與檢查時程需要精確。',
      to_verify:['全國性孕前健檢補助未找到，僅有縣市方案','35歲以上產婦比例為112年資料']},
    decision_points:[DP_AGE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'懷孕到坐月子，政府幫你準備了這些照顧',
    update_date:'2026/11/23',
    intro:'懷孕的這段路，政府其實一路陪著：14次免費產檢，113年有96%以上的孕媽咪都用了；114年5月1日起，生完寶寶後還多了2次產後照護，專門關心媽媽自己的身體和心情。現在超過3成的寶寶是35歲以上媽媽生的（112年31.97%），好好規劃每一次檢查更重要。',
    sections:[
      {heading:'每個階段有什麼服務',format:'table',table:TABLE},
      {heading:'產檢什麼時候去？',format:'bullets',items:[
        '前期第8、12週各一次，中期每個月一次，後期越來越密，37週起每週一次。',
        '24到28週會做妊娠糖尿病和貧血檢查，孕初期每10個媽咪就有1到2個貧血。',
        '35到37週做乙型鏈球菌篩檢，近2成孕婦身上帶有這種細菌。'
      ]},
      {heading:'生完也要顧好自己',format:'bullets',items:[
        '產後1至2週、6至8週各回診一次，3個月內做完。',
        '醫師會用量表關心心情，也會幫忙量體重、血壓。',
        '有問題可以打0800-870-870，114年就有1萬4千多通電話求助。'
      ]}
    ],
    think_tank_view:'照顧寶寶之前，先照顧好媽媽。產後情緒低落不是軟弱，善用產後照護和關懷專線，讓家人一起分擔。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署公開資料並標明年份，「每10個媽咪就有1到2個」依10~20%換算，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以孕媽咪的時間軸整理服務。', tone:'生活親切', tone_reason:'給孕婦與家人閱讀。', to_verify:['35歲以上產婦比例為112年資料']},
    decision_points:[DP_AGE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'孕產照護：14次產檢＋2次產後',
    update_date:'2026/11/23',
    intro:'14次公費產檢113年利用率96%以上；114年5月1日起加碼2次產後健康照護。',
    sections:[
      {heading:'公費服務',format:'table',table:TABLE},
      {heading:'產檢重點',format:'bullets',items:[
        '24至28週：妊娠糖尿病、貧血檢驗。',
        '35至37週：乙型鏈球菌篩檢。'
      ]},
      {heading:'產後照護',format:'bullets',items:[
        '產後3個月內完成2次，含產後憂鬱評估。',
        '關懷專線0800-870-870。'
      ]}
    ],
    think_tank_view:'孕前、孕期到產後是一條完整路徑，媽媽的身心健康同樣重要。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'服務內容與生效日期引自國健署公開資料，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為服務、產檢、產後三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:['孕前健檢補助僅縣市方案']},
    decision_points:[DP_AGE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'孕產健康照護（孕前、產檢、產後）', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'公費孕產照護從孕期延伸到產後', primary_visual:'96%', secondary_message:'114 年起加碼 2 次產後照護', action_priority:'14 次產檢＋2 次產後'},
    headline_hook:'孕前到產後都有照顧', headline_main:'14 次產檢＋2 次產後', title_accent:'2 次產後',
    primary_stat:{kicker:'113 年・公費產檢', value:'96% 以上', label:'14 次公費產檢利用率', note:'國健署 2025 年 9 月新聞稿'},
    secondary_stats:[
      {value:'31.97%', label:'35 歲以上產婦所生'},
      {value:'近 2 成', label:'孕婦帶乙型鏈球菌'},
      {value:'14,417 通', label:'114 年關懷專線諮詢'}
    ],
    action_title:'孕媽咪這樣做',
    action_cards:[
      {key:'前', text:'準備懷孕先做健康檢查'},
      {key:'檢', text:'依手冊時程完成 14 次產檢'},
      {key:'後', text:'產後 3 個月內完成 2 次產後照護'},
      {key:'問', text:'有疑問撥 0800-870-870'}
    ],
    carousel_suggestion:{reason:'若想把孕期與產後分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'14 次公費產檢', headline_main:'各孕期檢查重點'},
      {layout_type:'action', headline_hook:'產後照護', headline_main:'3 個月內回診 2 次'},
      {layout_type:'data', headline_hook:'高齡產婦增加', headline_main:'超過 3 成 35 歲以上'}]},
    hashtags:['產檢','孕產健康','產後照護','孕媽咪'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'孕產健康照護', audience:'孕婦與伴侶', scene:'孕婦與伴侶一起在診間看超音波螢幕，醫師在旁說明',
      emotion:'期待、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A pregnant woman and her partner looking at an ultrasound screen in a clinic while a doctor explains, hopeful and reassuring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['113年產檢利用率96%以上（國健署）','112年35歲以上產婦所生31.97%（國健署引用內政部）'],
      layout_reason:'主訊息是「公費服務多數人都在用」，選 data：利用率當主角，高齡產婦與專線數字當第二層，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'制度數據需清楚。',
      to_verify:['35歲以上產婦比例為112年資料']},
    decision_points:[Object.assign({}, DP_AGE, {current:'31.97%｜112 年 35 歲以上產婦所生'})],
    content_check_note:'利用率、產婦年齡與專線數字引自國健署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'孕產健康照護（孕前、產檢、產後）',
    collect:{
      summary:'國健署提供14次公費產檢、2次產前衛教，並自114年5月1日起加碼2次產後健康照護；高齡產婦已超過三成，孕前準備與產後身心追蹤都更重要，是長期適用的女性與家庭健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'96%以上產檢利用率：國健署提供孕婦14次公費產檢（含3次超音波、妊娠糖尿病與貧血檢驗、乙型鏈球菌篩檢），113年利用率達96%以上。',tag:'官方統計',source:{name:'衛生福利部：14次公費產檢',url:'https://www.mohw.gov.tw/cp-16-83667-1.html'}},
        {item:'好發族群年齡層',desc:'31.97%為35歲以上產婦所生：國健署引用內政部資料，112年出生的13萬3千餘名嬰兒中超過3成為35歲以上產婦所生，53.43%為第一胎。',tag:'官方統計',source:{name:'衛生福利部：定期產檢4要訣',url:'https://www.mohw.gov.tw/cp-16-80145-1.html'}},
        {item:'政策動向',desc:'2次產後健康照護：自114年5月1日起，具健保身分的產後婦女可於產後3個月內接受2次公費照護，內容含愛丁堡產後憂鬱量表評估與體重、血壓追蹤。',tag:'官方統計',source:{name:'衛生福利部：產後健康照護服務',url:'https://mohw.gov.tw/cp-2704-82435-1.html'}},
        {item:'年度趨勢方向',desc:'14417通專線諮詢：孕產兒關懷專線114年接聽14,417通，60.5%為初次懷孕或剛生第一胎的家長，新生兒照護（33%）與母乳哺育（29%）為主要主題。',tag:'官方統計',source:{name:'衛生福利部：孕產兒關懷專線服務成果',url:'https://mohw.gov.tw/cp-2704-85766-1.html'}}
      ],
      product_view:['機會：孕產期併發症與新生兒住院可連結女性保單與新生兒保障說明。','機會：產後憂鬱評估與專線資訊可作為保戶關懷內容。','風險：避免以妊娠併發症製造焦慮，或暗示保單可取代公費產檢。'],
      marketing_view:['機會：「從孕前到產後」時間軸懶人包適合準爸媽社群。','機會：114年新增產後照護仍有許多人不知道，具資訊價值。','風險：制度內容需標明生效日期；孕前健檢補助為縣市方案，不可寫成全國制度。'],
      alert_level:'low',
      alert_reason:'屬長期公費服務，無急迫時效事件；產後照護為114年新制，可持續宣導。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('部分縣市另有孕前健檢補助','COMPLETENESS','vague_term',
          '未說明哪些縣市與資格條件，讀者難以查詢；國健署目前沒有全國性孕前健檢補助。','low','yes',
          '各縣市孕前健康檢查補助方案與資格。','yes','clarify','縣市方案年年變動。',
          '部分縣市另有孕前健檢補助（資格與項目依各縣市衛生局公告）'),
        F('112年出生嬰兒有31.97%為35歲以上產婦所生','SOURCE_EVIDENCE','secondary_citation',
          '此比例為國健署新聞稿轉引內政部人口統計，文中只寫國健署，宜註明原始資料為內政部。','low','no',
          null,'no','clarify','數字正確。',
          '112年出生嬰兒有31.97%為35歲以上產婦所生（內政部人口統計）',
          ['112年31.97%']),
        F('孕初期每10個媽咪就有1到2個貧血','DATA_FACTUAL_ACCURACY','rounding_conversion',
          '原文為「10~20%的孕媽咪在初期產檢時為貧血」，換算後未標示出處。','low','no',
          null,'no','clarify','換算正確。',
          '孕初期每10個媽咪就有1到2個貧血（國健署）',
          ['國健署指出10~20%的孕婦初期產檢時有貧血']),
        F('產後3個月內完成2次，含產後憂鬱評估。','COMPLETENESS','effective_date_missing',
          '簡潔版未寫產後照護的生效日期與適用對象（具健保身分的產後婦女）。','low','no',
          null,'no','clarify','制度類內容需標明生效日期。',
          '114年5月1日起，產後3個月內完成2次，含產後憂鬱評估。')
      ],
      card:[
        F('35 歲以上產婦所生','CURRENCY_TIMELINESS','source_year_unstated',
          '次數字未標示資料年份（112年），讀者可能以為是最新年度。','low','no',
          null,'no','clarify','屬標示問題。',
          '112 年 35 歲以上產婦所生'),
        F('準備懷孕先做健康檢查','COMPLETENESS','vague_term',
          '未說明孕前健檢並非全國公費服務，讀者可能誤以為可免費接受。','low','no',
          null,'no','clarify','部分縣市有補助。',
          '準備懷孕先做健康檢查（洽縣市衛生局）')
      ]
    },
    title_alts:[
      '從孕前到產後：公費孕產照護一次看懂',
      '懷孕到坐月子，政府幫你準備了這些照顧',
      '14次產檢加2次產後照護：孕媽咪時間軸'
    ],
    card_title_alts:[
      ['孕前到產後都有照顧','14 次產檢＋2 次產後'],
      ['孕媽咪必看','公費照護時間軸'],
      ['生完寶寶別忘了','產後也要回診 2 次']
    ],
    data_addon:[
      '國健署指出，產檢的孕婦健康手冊於114年推出實體手冊，產檢時攜帶手冊與健保卡即可。',
      '孕產兒關懷專線114年服務滿意度98.9%，提供4種語言服務。',
      '國健署2025年新聞稿指出，生第二胎的產婦中35歲以上占37%。'
    ],
    cta:'把孕婦健康手冊上的產檢時程與產後2次照護時間，一起記進家人共用的行事曆。'
  });
})();
