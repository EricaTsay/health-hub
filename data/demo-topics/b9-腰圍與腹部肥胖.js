/* v6 示範主題：腰圍與腹部肥胖（B9 飲食營養與運動）
   查證日期：2026-11-20。數據來源：衛福部111-11-08新聞稿（2017-2020年國民營養健康調查腰圍過大比例、正確量腰圍步驟、量測頻率）、國健署〈40歲以上民眾超過6成腰粗又有代謝症候群〉新聞稿（腰圍標準）。
   注意：既有主題「代謝症候群」已使用別名「腹部肥胖」，本題別名避開。
   參考方向：健康智庫〈維持健康體態，你量腰了嗎？〉2022/11、〈久坐養小腹 瘦小腹運動介紹〉2022/05。 */
(function(){
  const REFS = [
    {title:'19歲以上國人超過5成腰圍過大 BMI正常者 仍有2成腰圍過大',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/fp-16-72293-1.html'},
    {title:'40歲以上民眾超過6成腰粗又有代謝症候群 「量腰圍」有效預防代謝症候群',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4576&pid=15958'},
    {title:'遠離代謝症候群，就從量腰圍開始',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1253&pid=7562&sid=7163'}
  ];
  const TABLE = {headers:['正確量腰圍','怎麼做'], rows:[
    ['時間','早晨空腹時，除去腰部覆蓋衣物'],
    ['姿勢','輕鬆站立，雙手自然下垂'],
    ['位置','皮尺繞過腹部中線（骨盆上緣至肋骨下緣的中間）'],
    ['讀數','維持正常呼吸，在吐氣結束時量取'],
    ['標準','男性小於90公分、女性小於80公分']
  ]};
  const TAGS = ['腰圍','量腰圍','內臟脂肪','體重管理','慢性病預防'];

  const PRO = {
    content_type:'健康文章',
    title:'BMI正常也可能腰太粗：量腰圍4步驟，掌握內臟脂肪',
    update_date:'2026/11/20',
    intro:'依國民健康署2017至2020年國民營養健康調查，19歲以上民眾超過5成腰圍過大；即使BMI屬於正常，仍有近2成腰圍過大。腰圍過大代表腹部肥胖、內臟脂肪多，而BMI無法反映內臟脂肪。研究也指出，隨著腰圍增加，血壓、血糖與壞的膽固醇會顯著上升，罹患心血管疾病與糖尿病的風險也跟著升高。',
    sections:[
      {heading:'國健署建議的量腰方法',format:'table',table:TABLE},
      {heading:'為什麼要看腰圍，不只看體重',format:'bullets',items:[
        '體重要靠體重計，腰圍則能從穿衣、購買褲子時察覺，再以皮尺確認。',
        '判斷內臟脂肪堆積最簡易的方法就是量腰圍。',
        '內臟脂肪堆積過多會影響代謝，與三高風險相關。'
      ]},
      {heading:'量測頻率與後續行動',format:'bullets',items:[
        '從未量過腰圍者，請儘速量測一次。',
        '腰圍在正常範圍者，至少配合每年健檢量1次。',
        '腰圍超標者，配合體重控制，每週至少量1次並記錄。',
        '每年8月9日「量腰日」是提醒自己量腰的好時機。'
      ]}
    ],
    think_tank_view:'體重計上的數字容易讓人安心，但腰圍才透露脂肪藏在哪裡。一條皮尺、一分鐘，就能補上BMI看不到的那一塊；把量腰和量體重一起做，才是完整的體態管理。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'腰圍過大比例引自國健署2017-2020年國民營養健康調查並標明年份，量測方法與頻率引自國健署，未涉及具體減重商品。',
    ai_rationale:{basis:['沿用步驟1洞察：19歲以上超過5成腰圍過大，BMI正常者近2成腰圍過大（國健署2017-2020年調查）','量腰步驟取自國健署新聞稿'],
      layout_reason:'先用表格教正確量腰，再說明腰圍比體重多透露什麼，最後給量測頻率。',
      tone:'專業易懂', tone_reason:'量測方法需要精確步驟。',
      to_verify:['「血壓、血糖及壞膽固醇顯著增加」為國健署引述研究，原始研究年份未標示']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'體重沒變褲子變緊？拿出皮尺量一下腰圍',
    update_date:'2026/11/20',
    intro:'國健署調查發現，19歲以上的人超過一半腰圍過大，就算BMI正常，也有近2成的人腰太粗。肚子上的肉不只是好不好看的問題，腰圍越大，代表內臟脂肪越多，血壓、血糖和壞膽固醇也容易跟著上升。好消息是，量腰圍只需要一條皮尺。',
    sections:[
      {heading:'一分鐘學會量腰',format:'table',table:TABLE},
      {heading:'為什麼要量腰？',format:'bullets',items:[
        '體重計看不出脂肪藏在哪裡，腰圍可以。',
        '褲子變緊、扣子變難扣，就是提醒你量一下。',
        '肚子的脂肪太多，會影響身體代謝。'
      ]},
      {heading:'多久量一次？',format:'bullets',items:[
        '從來沒量過，今天就量。',
        '腰圍正常，每年健檢時至少量一次。',
        '腰圍超標，每週量一次，搭配控制體重。',
        '每年8月9日量腰日，全家一起量。'
      ]}
    ],
    think_tank_view:'把皮尺放在體重計旁邊，量體重時順手量腰。看見數字慢慢變小，比任何口號都更有動力。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明調查年份，量測方法引自國健署，未涉及具體減重商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「褲子變緊」的生活情境切入。', tone:'生活親切', tone_reason:'給在意體態的一般讀者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'量腰圍：男<90、女<80公分',
    update_date:'2026/11/20',
    intro:'19歲以上超過5成腰圍過大，BMI正常者近2成腰圍過大（2017-2020年調查）。量腰圍是判斷內臟脂肪最簡易的方法。',
    sections:[
      {heading:'量腰方法',format:'table',table:TABLE},
      {heading:'為何量腰',format:'bullets',items:[
        'BMI無法反映內臟脂肪。',
        '腰圍增加與三高風險相關。'
      ]},
      {heading:'量測頻率',format:'bullets',items:[
        '正常者每年至少1次。',
        '超標者每週至少1次。',
        '8月9日量腰日。'
      ]}
    ],
    think_tank_view:'量體重也量腰圍，才能看見脂肪藏在哪裡。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據與方法引自國健署並標明年份，未涉及具體減重商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為方法、原因、頻率三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'腰圍與腹部肥胖', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'19 歲以上超過 5 成腰圍過大', primary_visual:'超過 5 成', secondary_message:'BMI 正常者近 2 成腰圍過大', action_priority:'量腰 4 步驟'},
    headline_hook:'BMI 正常也可能腰太粗', headline_main:'量腰圍，4 步驟就學會', title_accent:'4 步驟',
    hero_message:'超過 5 成', hero_support:'19 歲以上民眾腰圍過大（2017–2020 年國健署調查）',
    primary_stat:{value:'超過 5 成', label:'19 歲以上腰圍過大', note:'國健署 2017–2020 年國民營養健康調查'},
    secondary_stats:[
      {value:'近 2 成', label:'BMI 正常仍腰圍過大'}
    ],
    action_title:'正確量腰圍',
    action_cards:[
      {key:'1', text:'早晨空腹、除去腰部衣物'},
      {key:'2', text:'輕鬆站立，雙手自然下垂'},
      {key:'3', text:'皮尺繞過骨盆上緣與肋骨下緣中間'},
      {key:'4', text:'正常呼吸，吐氣結束時讀數'}
    ],
    notice:'男性 **< 90 公分**、女性 **< 80 公分**；超標者每週至少量 1 次。',
    carousel_suggestion:{reason:'若想把量腰方法、腰圍標準與控腰行動分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'BMI 正常也可能腰太粗', headline_main:'超過 5 成腰圍過大'},
      {layout_type:'action', headline_hook:'量腰圍', headline_main:'4 步驟就學會'},
      {layout_type:'knowledge', headline_hook:'腰圍標準', headline_main:'男 < 90、女 < 80 公分'}]},
    hashtags:['腰圍','量腰圍','內臟脂肪','體重管理'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'heart',
    illustration:{topic:'量腰圍', audience:'中壯年上班族', scene:'一位中年人在鏡子前用皮尺量腰圍，旁邊放著記錄本',
      emotion:'認真、自我照顧', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged adult measuring their waist with a tape measure in front of a mirror, a notebook beside them, attentive and self-caring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：19歲以上超過5成腰圍過大（國健署2017-2020年調查）','量腰步驟取自國健署'],
      layout_reason:'重點是「學會量腰」，選 action：4 個量測步驟當主角，腰圍過大比例當背景。',
      tone:'專業易懂', tone_reason:'步驟需精確。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'數據與量測方法引自國健署並標明年份，未涉及具體減重商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'腰圍與腹部肥胖',
    collect:{
      summary:'國健署2017-2020年國民營養健康調查顯示19歲以上民眾超過5成腰圍過大，BMI正常者也有近2成腰圍過大；腰圍反映內臟脂肪，與血壓、血糖、血脂上升相關。量腰圍簡單易行，是體重之外最該建立的自我監測習慣。',
      objective_data:[
        {item:'盛行率／發生率',desc:'超過5成：依2017至2020年國民營養健康調查，19歲以上民眾超過5成有腰圍過大的情形。',tag:'官方統計',source:{name:'國健署：19歲以上國人超過5成腰圍過大',url:'https://www.mohw.gov.tw/fp-16-72293-1.html'}},
        {item:'好發族群年齡層',desc:'近2成：即使BMI屬於正常範圍，仍有近2成民眾腰圍過大，國健署指出民眾較注意體重而容易輕忽腰圍。',tag:'官方統計',source:{name:'國健署：19歲以上國人超過5成腰圍過大',url:'https://www.mohw.gov.tw/fp-16-72293-1.html'}},
        {item:'政策動向',desc:'每週至少量1次：國健署建議從未量過腰圍者儘速量測，正常者配合每年健檢至少量1次，超標者配合體重控制每週至少量1次。',tag:'官方統計',source:{name:'國健署：19歲以上國人超過5成腰圍過大',url:'https://www.mohw.gov.tw/fp-16-72293-1.html'}},
        {item:'年度趨勢方向',desc:'男性90、女性80公分：國健署以男性腰圍90公分以上、女性80公分以上為腰圍過粗，並以每年8月9日量腰日提醒民眾量測。',tag:'官方統計',source:{name:'國健署：「量腰圍」有效預防代謝症候群',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4576&pid=15958'}}
      ],
      product_view:['機會：腹部肥胖與三高、心血管疾病相關，可連結健康管理與慢性病預防服務。','機會：量腰紀錄可作為保戶健康促進活動的簡單指標。','風險：避免推薦減重產品或療程；不宜以腰圍作為未經核保規則支持的保費暗示。'],
      marketing_view:['機會：8月9日量腰日是固定溝通檔期。','機會：「BMI正常也可能腰太粗」的反差訊息適合引發好奇。','風險：避免身材羞辱語氣，聚焦健康而非外表。'],
      alert_level:'low',
      alert_reason:'屬長期健康行為議題；可配合8月9日量腰日與健檢季溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('研究也指出，隨著腰圍增加，血壓、血糖與壞的膽固醇會顯著上升','SOURCE_EVIDENCE','unspecified_study',
          '文中以「研究也指出」帶過，未說明是哪項研究、哪一年；國健署新聞稿有標註文獻，但本文未轉載。','low','yes',
          '國健署新聞稿所引用文獻的作者與年份。','no','confirm','屬出處完整度。',
          '國健署引述研究指出，隨著腰圍增加，血壓、血糖與壞的膽固醇會顯著上升'),
        F('皮尺繞過腹部中線（骨盆上緣至肋骨下緣的中間）','TERMINOLOGY_LANGUAGE','anatomical_term',
          '「骨盆上緣」「肋骨下緣」對一般讀者不易定位，可補充摸得到的參考點（如腰側最下方肋骨與髖骨上緣）。','low','no',
          null,'no','clarify','屬易讀性。',
          '皮尺繞過腹部中線（摸到腰側最下方肋骨與髖骨上緣，取兩者中間）'),
        F('腰圍超標者，配合體重控制，每週至少量1次並記錄','MEDICAL_INTERPRETATION','missing_referral',
          '未提醒腰圍超標者可進一步檢查血壓、血糖、血脂，或利用成人預防保健服務評估代謝風險。','low','no',
          null,'no','clarify','屬建議完整度。',
          '腰圍超標者，配合體重控制，每週至少量1次並記錄，並可利用成人健檢檢查血壓、血糖、血脂',
          ['腰圍超標，每週量一次，搭配控制體重','超標者每週至少1次。'])
      ],
      card:[
        F('19 歲以上民眾腰圍過大（2017–2020 年國健署調查）','DATA_FACTUAL_ACCURACY','definition_unstated',
          '卡面未在同一處說明「腰圍過大」的切點，讀者需看到下方備註才知道是男 90、女 80 公分。','low','no',
          null,'no','clarify','屬資訊位置。',
          '19 歲以上腰圍過大（男 ≥90、女 ≥80 公分）'),
        F('皮尺繞過骨盆上緣與肋骨下緣中間','TERMINOLOGY_LANGUAGE','anatomical_term',
          '解剖位置對一般讀者不易定位。','low','no',
          null,'no','clarify','屬易讀性。',
          '皮尺繞過髖骨上緣與最下肋骨中間')
      ]
    },
    title_alts:[
      'BMI正常也可能腰太粗：量腰圍4步驟，掌握內臟脂肪',
      '體重沒變褲子變緊？拿出皮尺量一下腰圍',
      '超過5成成人腰圍過大：男90、女80公分是界線'
    ],
    card_title_alts:[
      ['BMI 正常也可能腰太粗','量腰圍，4 步驟就學會'],
      ['褲子變緊了？','拿出皮尺量一下'],
      ['男 < 90、女 < 80 公分','你的腰圍及格嗎？']
    ],
    data_addon:[
      '國健署指出，BMI無法反映內臟脂肪，量腰圍是判斷內臟脂肪最簡易的方法。',
      '每年8月9日為「量腰日」，可結合健檢提醒量測。',
      '腰圍過大者可利用成人預防保健服務檢查血壓、血糖與血脂。'
    ],
    cta:'明天早上空腹時，拿皮尺量一次腰圍並記下來；超標的話，接下來每週量一次。'
  });
})();
