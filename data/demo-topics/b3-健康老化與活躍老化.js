/* v6 示範主題：健康老化與活躍老化（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：內政部〈113年國人平均壽命80.77歲〉（114年8月）、衛福部統計處「健康平均餘命指標資料表」（115/08/17更新，113年72.86歲）、
   國健署〈全臺醫療單位齊心 陪長輩「量六力」〉（2025/11/26）、行政院／衛福部〈卓揆：四大面向強化高齡者福利照顧措施〉（115/10/15）。
   參考方向：健康智庫〈掌握「活躍老化」邁向自主老年〉2025/06、〈不只長壽 更要「健康老化」〉2023/02。 */
(function(){
  const REFS = [
    {title:'113年國人平均壽命80.77歲，較上年增加0.54歲',source:'內政部',url:'https://www.moi.gov.tw/News_Content.aspx?n=4&s=330934'},
    {title:'健康平均餘命指標資料表',source:'衛生福利部統計處',url:'https://dep.mohw.gov.tw/DOS/cp-5082-55400-113.html'},
    {title:'全臺醫療單位齊心 陪長輩「量六力」',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19644'},
    {title:'卓揆：四大面向強化高齡者福利照顧措施 落實「健康老化、在地安老、安寧善終」願景',source:'衛生福利部（行政院新聞）',url:'https://www.mohw.gov.tw/cp-16-88206-1.html'}
  ];
  const TABLE = {headers:['活躍老化4面向','可以怎麼做'], rows:[
    ['身體活動','每週累積150分鐘中等強度運動，加上肌力與平衡訓練'],
    ['營養','三餐有蛋白質、蔬果，維持體重不過瘦'],
    ['社會參與','參加社區據點、志工、課程，維持人際連結'],
    ['定期評估','每半年做一次長者量六力，按時做成人健檢']
  ]};
  const TAGS = ['健康老化','活躍老化','健康餘命','長者量六力','高齡健康'];

  const DP_HALE = {id:'dp-ha-hale', type:'data_scope', title:'平均壽命與健康餘命來自不同機關',
    desc:'平均壽命80.77歲出自內政部113年簡易生命表；健康平均餘命72.86歲出自衛福部統計處指標資料表。兩者相減約7.9年，為AI依兩項官方數字換算的「不健康存活年數」概估，非官方直接公布數字。',
    current:'113年平均壽命80.77歲、健康平均餘命72.86歲',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'80.77歲', value:'平均壽命', note:'內政部113年簡易生命表'},
      {label:'72.86歲', value:'健康平均餘命', note:'衛福部統計處113年'},
      {label:'約7.9年', value:'相差年數', note:'AI 換算，非官方公布'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'不只活得久，更要活得好：健康老化的關鍵是縮短「不健康的那幾年」',
    update_date:'2026/11/20',
    intro:'依內政部113年簡易生命表，國人平均壽命為80.77歲；衛生福利部統計處公布的113年健康平均餘命為72.86歲，兩者相差約7.9年，意味著平均有近8年處於帶病或失能狀態。世界衛生組織提倡的「活躍老化」，強調在健康、參與與安全三個面向維持機會，讓長者盡可能延長自主生活的時間。國健署推動「長者量六力」，114年已服務35.5萬名長者。',
    sections:[
      {heading:'活躍老化的4個面向',format:'table',table:TABLE},
      {heading:'健康餘命的變化',format:'bullets',items:[
        '衛福部統計，健康平均餘命由104年的71.87歲、110年的73.30歲，到113年的72.86歲，近年呈現波動。',
        '平均壽命持續延長的同時，縮短「不健康存活年數」是政策重點。',
        '行政院115年提出強化高齡者福利照顧措施，以「健康老化、在地安老、安寧善終」為願景。'
      ]},
      {heading:'從中年就開始準備',format:'bullets',items:[
        '控制三高、戒菸限酒、維持肌力，是延緩失能的基礎。',
        '退休前就培養興趣與社交圈，避免退休後突然與社會斷線。',
        '提早規劃居住環境、財務與照顧意願。'
      ]}
    ],
    think_tank_view:'延長壽命是醫療進步的成果，但多出來的歲月是否能自己走路、自己吃飯、和朋友聚會，才是健康老化的真正指標。健康餘命停在72歲上下，提醒我們：失能的那幾年，往往是中年以後一點一滴累積的。從今天開始動起來、吃夠蛋白質、多出門，就是替未來的自己存「健康餘命」。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'平均壽命引自內政部113年簡易生命表，健康平均餘命引自衛福部統計處，相差年數標明為換算，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['平均壽命80.77歲取自內政部114年8月新聞','健康平均餘命72.86歲（113年）取自衛福部統計處指標資料表'],
      layout_reason:'先以表格說明活躍老化4面向，再說明健康餘命變化與中年準備。',
      tone:'專業易懂', tone_reason:'議題正向，強調可準備。',
      to_verify:['健康平均餘命資料表欄位以原檔確認','約7.9年為換算值']},
    decision_points:[DP_HALE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'活到80歲，能自己走的有幾年？健康老化從現在開始',
    update_date:'2026/11/20',
    intro:'內政部統計，113年國人平均可以活到80.77歲；但衛福部算出的「健康平均餘命」是72.86歲，中間差了將近8年，可能要在生病或需要照顧中度過。想讓健康的日子多一點，越早開始準備越好。',
    sections:[
      {heading:'活躍老化4件事',format:'table',table:TABLE},
      {heading:'健康的日子有變長嗎？',format:'bullets',items:[
        '健康平均餘命從104年的71.87歲，到113年的72.86歲，這幾年有升有降。',
        '活得久之外，更要讓不健康的時間變短。'
      ]},
      {heading:'中年就可以開始',format:'bullets',items:[
        '顧好血壓、血糖、血脂，戒菸少喝酒。',
        '退休前先培養興趣、交朋友。',
        '提早想想以後想住哪、想被怎麼照顧。'
      ]}
    ],
    think_tank_view:'健康存摺跟銀行存摺一樣，越早存越多。今天多走一點路、多吃一份蛋白質，都是在替以後的自己存本錢。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自內政部與衛福部並標明年份，「將近8年」為兩數相減，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'用「能自己走的有幾年」的問題切入。', tone:'生活親切', tone_reason:'給中年與熟齡讀者閱讀。', to_verify:['約8年為換算值']},
    decision_points:[DP_HALE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'健康老化：縮短不健康的那幾年',
    update_date:'2026/11/20',
    intro:'113年平均壽命80.77歲（內政部），健康平均餘命72.86歲（衛福部），相差約7.9年。',
    sections:[
      {heading:'活躍老化4面向',format:'table',table:TABLE},
      {heading:'趨勢',format:'bullets',items:[
        '健康平均餘命近年在72至73歲之間波動。'
      ]},
      {heading:'準備',format:'bullets',items:[
        '中年控三高、練肌力、維持社交。'
      ]}
    ],
    think_tank_view:'延長健康餘命，從中年開始。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自內政部與衛福部並標明年份，相差年數為換算，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為面向、趨勢、準備三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['約7.9年為換算值']},
    decision_points:[DP_HALE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'健康老化與活躍老化', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'平均壽命與健康餘命差近 8 年', primary_visual:'72.86 歲', secondary_message:'縮短不健康的那幾年', action_priority:'動、吃、社交、評估'},
    headline_hook:'不只活得久', headline_main:'更要多幾年健康自主', title_accent:'健康自主',
    primary_stat:{kicker:'113 年', value:'72.86 歲', label:'健康平均餘命', note:'衛福部統計處｜平均壽命 80.77 歲（內政部）'},
    chart:{type:'bar', title:'健康平均餘命（歲）', points:[
      {label:'2015', value:71.87, display:'71.87'},
      {label:'2018', value:72.28, display:'72.28'},
      {label:'2021', value:73.30, display:'73.30'},
      {label:'2024', value:72.86, display:'72.86', highlight:true}
    ], note:'衛福部統計處｜健康平均餘命指標資料表'},
    secondary_stats:[
      {value:'80.77 歲', label:'113 年國人平均壽命'},
      {value:'約 7.9 年', label:'兩者相差（換算）'}
    ],
    action_title:'活躍老化這樣做',
    action_cards:[
      {key:'動', text:'每週 150 分鐘運動，加肌力平衡'},
      {key:'吃', text:'三餐有蛋白質與蔬果'},
      {key:'聚', text:'參加社區據點、志工或課程'},
      {key:'量', text:'每半年量六力，按時做健檢'}
    ],
    carousel_suggestion:{reason:'若想把壽命數據、活躍老化面向與行動分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'不只活得久', headline_main:'健康餘命 72.86 歲'},
      {layout_type:'knowledge', headline_hook:'活躍老化', headline_main:'4 個面向'},
      {layout_type:'action', headline_hook:'從中年開始', headline_main:'替未來存健康'}]},
    hashtags:['健康老化','活躍老化','健康餘命','長者量六力'],
    sources:['衛生福利部','內政部','衛生福利部國民健康署'],
    illustration_category:'elderly-care',
    illustration:{topic:'活躍老化', audience:'熟齡族群', scene:'幾位熟齡長者在公園一起做伸展操、談笑',
      emotion:'有活力、愉快', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'Several older adults doing stretching exercises together in a park, laughing and chatting, energetic and cheerful mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：113年健康平均餘命72.86歲（衛福部統計處）','歷年數值取自同一資料表'],
      layout_reason:'關鍵訊息是「壽命與健康餘命的差距」，選 data：健康餘命當主角，歷年趨勢長條圖，平均壽命與相差年數放第二層。',
      tone:'專業易懂', tone_reason:'正向、強調可準備。',
      to_verify:['約7.9年為換算值']},
    decision_points:[Object.assign({}, DP_HALE, {current:'72.86 歲｜113 年健康平均餘命（衛福部統計處）'})],
    content_check_note:'數據引自衛福部與內政部並標明年份，相差年數標明換算，未使用療效保證用語。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'健康老化與活躍老化',
    collect:{
      summary:'113年國人平均壽命80.77歲，衛福部健康平均餘命72.86歲，兩者相差近8年；政府以「健康老化、在地安老、安寧善終」為願景推動高齡政策，國健署長者量六力114年服務35.5萬人，延長健康餘命是超高齡社會的核心議題。',
      objective_data:[
        {item:'年度趨勢方向',desc:'平均壽命80.77歲：內政部113年簡易生命表，國人平均壽命80.77歲，較112年增加0.54歲，男性77.42歲、女性84.30歲。',tag:'官方統計',source:{name:'內政部：113年國人平均壽命80.77歲',url:'https://www.moi.gov.tw/News_Content.aspx?n=4&s=330934'}},
        {item:'盛行率／發生率',desc:'健康平均餘命72.86歲：衛福部統計處資料，113年健康平均餘命72.86歲，與平均壽命相差約7.9年（換算）。',tag:'官方統計',source:{name:'衛福部統計處：健康平均餘命指標資料表',url:'https://dep.mohw.gov.tw/DOS/cp-5082-55400-113.html'}},
        {item:'政策動向',desc:'35.5萬名長者量六力：國健署114年協助35.5萬名長者完成「長者量六力」，及早發現功能衰退、延緩失能。',tag:'官方統計',source:{name:'國民健康署：全臺醫療單位齊心 陪長輩「量六力」',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19644'}},
        {item:'好發族群年齡層',desc:'四大面向強化高齡福利：行政院115年10月宣布擴大獨居老人關懷、扎根社區照顧、精進長照3.0、強化經濟安全，並推動銀髮健身俱樂部。',tag:'官方統計',source:{name:'衛生福利部：卓揆四大面向強化高齡者福利照顧措施',url:'https://www.mohw.gov.tw/cp-16-88206-1.html'}}
      ],
      product_view:['機會：「健康餘命」概念可連結長照、失能與健康管理服務。','機會：熟齡運動、社交活動可作為保戶健康促進方案。','風險：避免以「不健康的8年」恐嚇銷售；強調可準備的正向訊息。'],
      marketing_view:['機會：重陽節、國際老人日（10月1日）是固定溝通檔期。','機會：「活到80歲，能自己走的有幾年？」具話題性。','風險：相差年數為換算，需標明。'],
      alert_level:'low',
      alert_reason:'屬長期政策議題，無急迫時效事件；適合在重陽節與高齡政策發布時溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('意味著平均有近8年處於帶病或失能狀態','DATA_FACTUAL_ACCURACY','calculation_interpretation',
          '約7.9年是兩個不同機關的數字相減，且健康平均餘命的計算方式（以健康狀態加權）不等於「帶病或失能」的年數，解讀過於直接。','medium','no',
          null,'no','clarify','屬換算口徑說明。',
          '兩者相差約7.9年（依兩項官方數字換算），代表平均有一段時間健康狀態不佳'),
        F('近年呈現波動','DATA_FACTUAL_ACCURACY','trend_interpretation',
          '110年73.30歲後下降，可能與疫情期間死亡與健康狀態變化有關，文中未說明可能原因，讀者可能誤解為長期退步。','low','no',
          null,'no','clarify','屬趨勢解讀。',
          '近年在72至73歲之間波動（110年後的變化原因需進一步分析）'),
        F('失能的那幾年，往往是中年以後一點一滴累積的','MEDICAL_INTERPRETATION','unsourced_claim',
          '說法合理但未附出處。','low','no',
          null,'no','clarify','屬出處補充。',
          '許多失能風險因子，如三高、肌力流失，是從中年開始累積的'),
        F('可能要在生病或需要照顧中度過','DATA_FACTUAL_ACCURACY','calculation_interpretation',
          '與專業版同樣，將相差年數直接解讀為生病或需要照顧的時間，過於簡化。','low','no',
          null,'no','clarify','屬換算口徑說明。',
          '代表有一段時間健康狀態可能不佳')
      ],
      card:[
        F('兩者相差（換算）','DATA_FACTUAL_ACCURACY','calculation_interpretation',
          '已標明換算，但未說明來自不同機關的數字，讀者可能以為是官方公布。','low','no',
          null,'no','clarify','屬來源說明。',
          '平均壽命減健康餘命（AI 換算）'),
        F('每半年量六力，按時做健檢','MEDICAL_INTERPRETATION','population_unclear',
          '「長者量六力」是給 65 歲以上長者的自我檢測，卡面未標示適用年齡，年輕讀者不知道是否適用。','low','no',
          null,'no','clarify','屬適用對象說明。',
          '65 歲以上每半年量六力，按時做健檢')
      ]
    },
    title_alts:[
      '不只活得久，更要活得好：健康老化的關鍵是縮短「不健康的那幾年」',
      '活到80歲，能自己走的有幾年？健康老化從現在開始',
      '健康平均餘命72.86歲：活躍老化4面向一次看'
    ],
    card_title_alts:[
      ['不只活得久','更要多幾年健康自主'],
      ['活到 80 歲','能自己走的有幾年？'],
      ['活躍老化','動、吃、聚、量']
    ],
    data_addon:[
      '內政部統計，若排除惡性腫瘤死因，113年國人平均壽命可提高至84.36歲。',
      '社區照顧關懷據點全國逾5,200處（115年10月）。',
      '國健署建議65歲以上長者至少每半年做一次長者量六力。'
    ],
    cta:'今天就為自己的「健康存摺」存一筆：走路30分鐘、晚餐加一份蛋白質，並約一位朋友本週見面聊天。'
  });
})();
