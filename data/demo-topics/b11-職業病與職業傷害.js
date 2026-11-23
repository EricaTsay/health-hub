/* v6 示範主題：職業病與職業傷害（B11 第二輪擴充）
   查證日期：2026-11-23。數據來源：勞動部重大職災統計新聞稿（2026/01/15）、勞動部〈勞工職業災害保險及保護法〉說明頁。
   參考方向：健康智庫職業衛生系列文章（僅取架構）。 */
(function(){
  const REFS = [
    {title:'114年重大職業災害死亡人數統計',source:'勞動部',url:'https://www.mol.gov.tw/1607/1632/1633/87515/post'},
    {title:'勞工職業災害保險及保護法',source:'勞動部',url:'https://www.mol.gov.tw/1607/1632/1640/49315/post'}
  ];
  const TABLE = {headers:['職災保障重點','內容'], rows:[
    ['施行日期','勞工職業災害保險及保護法自111年5月1日施行'],
    ['納保範圍','受僱於登記有案事業單位的勞工，不論僱用人數一律強制納保'],
    ['投保薪資','上限72,800元，下限等同基本工資並逐年調整'],
    ['常見職業病','肌肉骨骼疾病、腦心血管疾病（過勞）、噪音性聽力損失、化學物質中毒'],
    ['發生職災時','立即就醫並告知醫師是工作造成，保留就醫與工作紀錄，向勞保局申請給付']
  ]};
  const TAGS = ['職業傷害','職業病','職災保險','勞工安全','團體保險'];

  const DP_DEATH = {id:'dp-occ-death', type:'data_scope', title:'重大職災死亡只是職災的一部分',
    desc:'勞動部公布的是「重大職業災害死亡人數」，不含非重大職災、職業病與一般傷病。職災保險給付人次另有統計，AI 未取得114年完整報表，因此只採用死亡人數。',
    current:'114年重大職災死亡251人（勞動部）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'251人', value:'114年', note:'勞動部2026/01/15新聞稿（目前採用）'},
      {label:'287人', value:'113年', note:'同新聞稿；112年為300人'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'職業傷害與職業病：認識職災保障，工作安全從預防做起',
    update_date:'2026/11/23',
    intro:'依勞動部統計，114年全產業重大職業災害死亡251人，較113年減少36人，其中營造業105人、占42%。職災不只是墜落、被夾等意外，長期姿勢不良、噪音、化學暴露與過勞也可能造成職業病。《勞工職業災害保險及保護法》自111年5月1日施行，擴大納保範圍並提高投保薪資上限，是勞工發生職災時的重要保障。',
    sections:[
      {heading:'職災保險重點一次看',format:'table',table:TABLE},
      {heading:'職災趨勢',format:'bullets',items:[
        '重大職災死亡人數由112年300人、113年287人，降至114年251人。',
        '營造業仍是高風險行業，113年營造業墜落死亡83人。',
        '統計範圍為重大職業災害死亡，不含一般職災傷病與職業病。'
      ]},
      {heading:'勞工自我保護',format:'bullets',items:[
        '高處作業確實使用安全帶與護欄，機械作業前確認防護裝置。',
        '長期搬重或久坐，注意正確姿勢並安排伸展休息。',
        '出現疑似職業病症狀，可至職業醫學科評估。',
        '企業可規劃團體保險，補足職災保險以外的醫療與失能保障。'
      ]}
    ],
    think_tank_view:'職災預防是企業與勞工共同的責任。重大職災死亡人數雖然逐年下降，但營造業比例仍高，職業病也常因症狀緩慢出現而被忽略。了解職災保險的權益，再以團體保險補足缺口，才能讓員工安心工作。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'職災死亡人數引自勞動部新聞稿並標明年份與統計範圍，法規內容引自勞動部，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['114年重大職災死亡251人（勞動部2026/01/15）','職保法111年5月1日施行（勞動部）'],
      layout_reason:'先整理職災保險重點，再說明趨勢與自我保護。',
      tone:'專業易懂', tone_reason:'法規與保障需要精確。',
      to_verify:['職災保險給付人次與千人率的114年報表未取得']},
    decision_points:[DP_DEATH]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'上班受傷或做出病來，你的保障有哪些？',
    update_date:'2026/11/23',
    intro:'114年全台有251人因重大職災失去生命，雖然比前一年少了36人，但每一個數字背後都是一個家庭。工作造成的傷害不只是意外，久坐腰痠、長期噪音、過勞也可能變成職業病。從111年5月1日起，職災保險有了專法，保障比以前更完整。',
    sections:[
      {heading:'職災保險你該知道的事',format:'table',table:TABLE},
      {heading:'這幾年的變化',format:'bullets',items:[
        '重大職災死亡從112年300人、113年287人，降到114年251人。',
        '營造業還是最危險，113年光是墜落就有83人死亡。',
        '這些是重大職災死亡的數字，不包含一般受傷和職業病。'
      ]},
      {heading:'保護自己這樣做',format:'bullets',items:[
        '爬高一定要繫安全帶，機器防護不要拆。',
        '常搬重物或久坐，記得姿勢正確、定時起來動一動。',
        '懷疑是工作造成的病，可以掛職業醫學科。',
        '公司如果有團體保險，可以先了解保障內容。'
      ]}
    ],
    think_tank_view:'安全回家是最基本的事。多一分防護、多了解自己的保障，萬一發生職災也不會手足無措。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自勞動部公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以勞工切身權益出發。', tone:'生活親切', tone_reason:'給一般勞工閱讀。', to_verify:['給付人次未取得']},
    decision_points:[DP_DEATH]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'職災保障與預防重點',
    update_date:'2026/11/23',
    intro:'114年重大職災死亡251人，營造業占42%。職保法111年5月1日施行，擴大納保範圍。',
    sections:[
      {heading:'職災保險重點',format:'table',table:TABLE},
      {heading:'趨勢',format:'bullets',items:[
        '重大職災死亡112年300人，114年251人。',
        '營造業墜落仍是主要風險。'
      ]},
      {heading:'預防',format:'bullets',items:[
        '高處作業用安全帶，注意工作姿勢。',
        '疑似職業病看職業醫學科。'
      ]}
    ],
    think_tank_view:'了解職災權益，再以團體保險補足缺口。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自勞動部公開資料，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為保險、趨勢、預防三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:['給付人次未取得']},
    decision_points:[DP_DEATH]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'職業病與職業傷害', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'重大職災死亡逐年下降但營造業仍高', primary_visual:'251 人', secondary_message:'職保法擴大納保範圍', action_priority:'防護、姿勢、就醫、了解保障'},
    headline_hook:'工作安全不能等', headline_main:'認識職災保障與預防', title_accent:'職災保障',
    primary_stat:{kicker:'114 年・重大職災', value:'251 人', label:'全產業重大職災死亡', note:'勞動部統計｜較 113 年減少 36 人'},
    chart:{type:'bar', title:'重大職災死亡人數（人）', points:[
      {label:'112 年', value:300, display:'300'},
      {label:'113 年', value:287, display:'287'},
      {label:'114 年', value:251, display:'251', highlight:true}
    ], note:'勞動部｜不含一般傷病與職業病'},
    secondary_stats:[
      {value:'42%', label:'營造業占比'},
      {value:'111 年 5 月', label:'職保法施行'},
      {value:'72,800 元', label:'月投保薪資上限'}
    ],
    action_title:'勞工與企業這樣做',
    action_cards:[
      {key:'防', text:'高處作業確實使用安全帶與護欄'},
      {key:'姿', text:'搬重久坐注意姿勢，定時伸展'},
      {key:'醫', text:'疑似職業病至職業醫學科評估'},
      {key:'保', text:'了解職災保險，團體保險補足缺口'}
    ],
    carousel_suggestion:{reason:'若想把職災趨勢與保障分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'重大職災死亡', headline_main:'114 年 251 人'},
      {layout_type:'knowledge', headline_hook:'常見職業病', headline_main:'這 4 類要注意'},
      {layout_type:'action', headline_hook:'發生職災時', headline_main:'這樣申請保障'}]},
    hashtags:['職業傷害','職業病','職災保險','勞工安全'],
    sources:['勞動部'],
    illustration_category:'general',
    illustration:{topic:'職業安全', audience:'勞工與企業', scene:'戴安全帽的工人在鷹架上扣好安全帶，同事在下方比讚',
      emotion:'安心、專業', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A construction worker wearing a hard hat clipping a safety harness on scaffolding while a coworker below gives a thumbs up, safe and professional, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['重大職災死亡112-114年（勞動部2026/01/15）','職保法投保薪資上限（勞動部）'],
      layout_reason:'有清楚的三年趨勢，選 data：死亡人數當主角配長條圖，營造業與法規退到第二層。',
      tone:'專業易懂', tone_reason:'避免恐嚇，強調預防與保障。',
      to_verify:['統計範圍僅重大職災死亡']},
    decision_points:[Object.assign({}, DP_DEATH, {current:'251 人｜114 年重大職災死亡'})],
    content_check_note:'死亡人數引自勞動部並標明年份與範圍，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'職業病與職業傷害',
    collect:{
      summary:'勞動部統計114年重大職災死亡251人、連續下降，但營造業仍占四成以上；《勞工職業災害保險及保護法》111年施行後擴大納保，職災保障與職業病預防是團體保險與企業客戶長期關注的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'251人重大職災死亡：勞動部統計114年全產業重大職業災害死亡251人，較113年減少36人。',tag:'官方統計',source:{name:'勞動部：114年重大職業災害死亡人數統計',url:'https://www.mol.gov.tw/1607/1632/1633/87515/post'}},
        {item:'好發族群年齡層',desc:'營造業占42%：114年營造業重大職災死亡105人，較113年減少40人，113年營造業墜落死亡83人。',tag:'官方統計',source:{name:'勞動部：114年重大職業災害死亡人數統計',url:'https://www.mol.gov.tw/1607/1632/1633/87515/post'}},
        {item:'年度趨勢方向',desc:'300人降至251人：重大職災死亡人數由112年300人、113年287人降至114年251人，統計不含一般職災傷病與職業病。',tag:'官方統計',source:{name:'勞動部：114年重大職業災害死亡人數統計',url:'https://www.mol.gov.tw/1607/1632/1633/87515/post'}},
        {item:'政策動向',desc:'111年5月1日施行職保法：受僱於登記有案事業單位的勞工不論僱用人數一律強制納保，月投保薪資上限72,800元、下限等同基本工資。',tag:'官方統計',source:{name:'勞動部：勞工職業災害保險及保護法',url:'https://www.mol.gov.tw/1607/1632/1640/49315/post'}}
      ],
      product_view:['機會：團體保險可補足職災保險以外的醫療、失能與身故保障，適合企業客戶。','機會：高風險行業可搭配職安教育與健康管理服務。','風險：說明職災保險與商業保險的差異時，不可誤導為商業保險可取代法定保險。'],
      marketing_view:['機會：企業HR與職安人員是團體保險溝通對象。','機會：「職災發生時怎麼申請」實用流程具高收藏價值。','風險：避免以職災死亡個案做情緒訴求。'],
      alert_level:'low',
      alert_reason:'屬長期勞工安全與保障議題，無急迫時效事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('提高投保薪資上限','COMPLETENESS','missing_key_info',
          '未寫出投保薪資上限的實際金額，讀者無從比較。','low','no',
          null,'no','clarify','金額見勞動部說明。',
          '提高月投保薪資上限至72,800元'),
        F('每一個數字背後都是一個家庭','TERMINOLOGY_LANGUAGE','emotional_appeal',
          '情緒性描述可接受，但緊接死亡數字，宜避免過度渲染。','low','no',
          null,'no','clarify','屬語氣建議。',
          '每一起職災都值得重視'),
        F('營造業仍是高風險行業，113年營造業墜落死亡83人。','DATA_FACTUAL_ACCURACY','period_mismatch',
          '前段引用114年資料，此處改用113年墜落數字，年份不一致容易混淆。','low','no',
          null,'no','clarify','數字正確，年份需清楚對照。',
          '營造業仍是高風險行業（114年占全產業42%），113年營造業墜落死亡83人。'),
        F('企業可規劃團體保險，補足職災保險以外的醫療與失能保障。','COMPLIANCE_MARKETING','product_mention',
          '健康衛教文章提及保險商品，需確認符合內部行銷規範，避免成為招攬。','medium','no',
          null,'no','clarify','屬法遵提醒。',
          '企業可檢視員工福利，了解職災保險以外的醫療與失能保障需求。',
          ['公司如果有團體保險，可以先了解保障內容。','再以團體保險補足缺口'])
      ],
      card:[
        F('了解職災保險，團體保險補足缺口','COMPLIANCE_MARKETING','product_mention',
          '圖卡直接提及團體保險，對外發布時可能被視為商品招攬。','medium','no',
          null,'no','clarify','屬法遵提醒。',
          '了解職災保險權益與申請方式'),
        F('全產業重大職災死亡','DATA_FACTUAL_ACCURACY','metric_scope',
          '主數字為重大職災死亡，不含職業病與一般傷病，讀者可能誤以為是所有職災人數。','low','no',
          null,'no','clarify','圖表註記已說明。',
          '全產業重大職災死亡（不含職業病）')
      ]
    },
    title_alts:[
      '職業傷害與職業病：認識職災保障，工作安全從預防做起',
      '上班受傷或做出病來，你的保障有哪些？',
      '114年重大職災死亡251人：營造業風險與職災保險重點'
    ],
    card_title_alts:[
      ['工作安全不能等','認識職災保障與預防'],
      ['上班受傷怎麼辦？','職災保障一次看'],
      ['重大職災 114 年','251 人死亡']
    ],
    data_addon:[
      '投保薪資下限等同基本工資，每年隨基本工資調整。',
      '雇主為自己投保職災保險時，應以最高級距投保。',
      '113年全產業重大職災死亡287人，112年為300人。'
    ],
    cta:'這週花10分鐘確認自己的勞保與職災保險投保薪資，並記下發生職災時的申請窗口。'
  });
})();
