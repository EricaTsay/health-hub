/* v6 示範主題：肺炎（B4 消化・肝膽・呼吸）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計（表1、表7、表34）、疾管署成人公費肺炎鏈球菌疫苗新聞（2026/01/15起PCV20、2026/08/10起PCV20或PCV21）。
   參考方向：健康智庫〈肺炎〉2026/05。 */
(function(){
  const REFS = [
    {title:'114年死因統計結果分析',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'},
    {title:'114年死因統計摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'成人公費肺炎鏈球菌疫苗自2026年8月10日起全面升級為20價或21價新型疫苗 接種「1劑搞定」',source:'衛生福利部疾病管制署',url:'https://www.cdc.gov.tw/Bulletin/Detail/vwMq9VkXIaV7FHyJgpk-5w?typeid=9'},
    {title:'成人肺炎鏈球菌疫苗',source:'衛生福利部疾病管制署',url:'https://www.cdc.gov.tw/Category/Page/U_hY1WCfa5BU6fuqW9FIXg'}
  ];
  const TABLE = {headers:['公費肺鏈疫苗','說明'], rows:[
    ['公費對象','65歲以上民眾、55-64歲原住民、19-64歲侵襲性肺炎鏈球菌感染症高風險對象'],
    ['疫苗種類','2026年8月10日起提供20價（PCV20）或21價（PCV21）結合型疫苗'],
    ['未曾接種','接種1劑PCV20或PCV21'],
    ['已完整接種','曾打過13價或15價加23價各1劑，或已打20價、21價者，不需再接種']
  ]};
  const TAGS = ['肺炎','肺炎鏈球菌疫苗','長者健康','呼吸道感染','十大死因'];

  const DP_TREND = {id:'dp-pneu-trend', type:'data_scope', title:'歷年死亡人數口徑不同',
    desc:'衛福部死因統計自108年起改採2016年版ICD-10死因選取準則，部分原歸肺炎的死亡改歸其他死因，108年前後數字不宜直接比較。AI 圖表仍列出104年至114年供參考，並在註記說明。',
    current:'114年肺炎死亡17,468人（第3位）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'17,468人', value:'114年', note:'全年齡，居十大死因第3位（目前採用）'},
      {label:'16,001人', value:'114年・65歲以上', note:'占肺炎死亡逾9成'},
      {label:'11,387人', value:'104年', note:'舊版選取準則，比較時宜保守'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'肺炎是國人第3大死因：認識高風險族群與公費肺鏈疫苗新制',
    update_date:'2026/11/20',
    intro:'依衛生福利部114年死因統計，肺炎死亡17,468人，居國人十大死因第3位；其中65歲以上16,001人，占肺炎死亡逾9成。肺炎是肺部受到細菌、病毒等感染引起的發炎，長者症狀可能不典型，常只表現為食慾變差、精神不佳或意識改變。疾病管制署自2026年起將成人公費肺炎鏈球菌疫苗改為1劑新型疫苗，是長者預防肺炎的重要工具。',
    sections:[
      {heading:'這些人是肺炎高風險族群',format:'bullets',items:[
        '65歲以上長者，以及長期臥床、吞嚥功能不佳者。',
        '有慢性肺病、心臟病、糖尿病、慢性腎臟病等慢性病者。',
        '免疫力較差（如接受化療、長期使用類固醇）或吸菸者。'
      ]},
      {heading:'長者肺炎的不典型警訊',format:'bullets',items:[
        '典型症狀為發燒、咳嗽、有痰、呼吸急促或胸痛。',
        '長者可能沒有發燒，只出現食慾下降、精神變差、嗜睡或突然意識混亂。',
        '出現呼吸急促、嘴唇發紫或意識改變時，應儘速就醫。'
      ]},
      {heading:'公費肺炎鏈球菌疫苗新制',format:'table',table:TABLE}
    ],
    think_tank_view:'肺炎之所以能長年高居死因前段，主要是高齡化與慢性病的累積效應。預防肺炎可以分三層：接種肺鏈與流感等疫苗、控制慢性病與戒菸、照顧好口腔與吞嚥功能。新制只要1劑就完成肺鏈疫苗接種，陪家中長輩到合約院所問一聲，就是最簡單的保護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數與排名引自衛福部114年死因統計，疫苗政策引自疾管署公告，未使用療效保證用語，未涉及具體廠牌。',
    ai_rationale:{basis:['肺炎死亡17,468人、65歲以上16,001人取自衛福部114年死因統計表1、表7','公費肺鏈疫苗新制取自疾管署2026年公告'],
      layout_reason:'先說明高風險族群與長者不典型症狀，再以表格整理疫苗新制。',
      tone:'專業易懂', tone_reason:'疫苗政策需清楚可查證。',
      to_verify:['108年起死因選取準則改版，歷年比較需保守','疫苗接種原則依疾管署最新公告']},
    decision_points:[DP_TREND]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽沒發燒也可能是肺炎？長輩肺炎警訊與公費疫苗',
    update_date:'2026/11/20',
    intro:'肺炎是國人第3大死因，衛福部114年統計有17,468人因肺炎過世，其中超過9成是65歲以上長輩。長輩得肺炎常常不發燒，只是吃不下、沒精神，很容易被忽略。好消息是，公費肺炎鏈球菌疫苗現在只要打1劑就完成。',
    sections:[
      {heading:'哪些人要特別小心？',format:'bullets',items:[
        '65歲以上，或常躺床、吞東西容易嗆到的長輩。',
        '有心臟病、糖尿病、腎臟病或慢性肺病的人。',
        '抵抗力比較差、正在治療重大疾病，或有抽菸習慣的人。'
      ]},
      {heading:'長輩肺炎可能長這樣',format:'bullets',items:[
        '咳嗽、有痰、發燒、喘。',
        '也可能不發燒，只是突然吃不下、一直想睡、反應變慢。',
        '喘得厲害、嘴唇發紫或意識不清，要馬上就醫。'
      ]},
      {heading:'公費肺鏈疫苗怎麼打？',format:'table',table:TABLE}
    ],
    think_tank_view:'爸媽如果最近「怪怪的」，吃得少、精神差，別只當成老了累了。陪他們把肺鏈疫苗打好，平常幫忙照顧口腔清潔，都是預防肺炎的好方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部與疾管署公開資料並標明年份，未使用療效保證用語，未涉及具體廠牌。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以長輩不典型症狀切入，最後帶出疫苗。', tone:'生活親切', tone_reason:'給子女與熟齡讀者閱讀。', to_verify:['疫苗接種原則依疾管署最新公告']},
    decision_points:[DP_TREND]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'肺炎第3大死因：高風險族群與公費肺鏈疫苗',
    update_date:'2026/11/20',
    intro:'114年肺炎死亡17,468人，居十大死因第3位，65歲以上占逾9成（衛福部）。公費肺鏈疫苗已改為1劑完成。',
    sections:[
      {heading:'高風險族群',format:'bullets',items:[
        '65歲以上、慢性病、吞嚥不佳、吸菸者。'
      ]},
      {heading:'長者警訊',format:'bullets',items:[
        '可能不發燒，只有食慾差、嗜睡、意識改變。'
      ]},
      {heading:'公費疫苗',format:'table',table:TABLE}
    ],
    think_tank_view:'疫苗、慢病控制與口腔吞嚥照護，是長者預防肺炎的三道防線。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部與疾管署公開資料並標明年份，未使用療效保證用語，未涉及具體廠牌。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為族群、警訊、疫苗三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['疫苗接種原則依疾管署最新公告']},
    decision_points:[DP_TREND]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'肺炎', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'肺炎是國人第 3 大死因', primary_visual:'約 1.7 萬人', secondary_message:'65 歲以上占逾 9 成', action_priority:'公費肺鏈疫苗 1 劑完成'},
    headline_hook:'國人第 3 大死因', headline_main:'長輩肺炎，疫苗 1 劑完成', title_accent:'1 劑完成',
    primary_stat:{kicker:'114 年・全年齡', value:'約 1.7 萬人', label:'肺炎死亡人數', note:'衛福部死因統計：17,468 人｜居死因第 3 位'},
    chart:{type:'bar', title:'肺炎死亡人數（人）', points:[
      {label:'2015', value:11387, display:'11,387'},
      {label:'2018', value:14202, display:'14,202'},
      {label:'2021', value:13549, display:'13,549'},
      {label:'2025', value:17468, display:'17,468', highlight:true}
    ], note:'衛福部死因統計｜108 年起選取準則改版'},
    secondary_stats:[
      {value:'逾 9 成', label:'肺炎死亡為 65 歲以上'},
      {value:'1 劑', label:'公費肺鏈疫苗新制完成接種'}
    ],
    action_title:'預防肺炎這樣做',
    action_cards:[
      {key:'打', text:'65 歲以上接種公費肺鏈疫苗 1 劑'},
      {key:'控', text:'控制慢性病，戒菸'},
      {key:'護', text:'每天清潔口腔，留意吞嚥嗆咳'},
      {key:'醫', text:'長輩食慾差、嗜睡、喘要就醫'}
    ],
    carousel_suggestion:{reason:'若想把數據、警訊與疫苗新制分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'國人第 3 大死因', headline_main:'114 年肺炎死亡約 1.7 萬人'},
      {layout_type:'knowledge', headline_hook:'長輩肺炎', headline_main:'不發燒也要留意的警訊'},
      {layout_type:'action', headline_hook:'公費肺鏈疫苗', headline_main:'新制 1 劑完成'}]},
    hashtags:['肺炎','肺炎鏈球菌疫苗','長者健康','十大死因'],
    sources:['衛生福利部','衛生福利部疾病管制署'],
    illustration_category:'virus-infection',
    illustration:{topic:'長者肺炎預防', audience:'65 歲以上長者與家人', scene:'長者在診所由護理師接種疫苗，家人在旁陪伴',
      emotion:'安心、被照顧', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult receiving a vaccine from a nurse at a clinic while a family member stands beside them, reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：114年肺炎死亡17,468人（衛福部）','歷年死亡人數取自死因統計表34'],
      layout_reason:'關鍵訊息是「死因第 3 位、以長者為主」，選 data：死亡人數與趨勢當主角，65 歲以上比例與疫苗新制放第二層，最後給 4 個預防行動。',
      tone:'專業易懂', tone_reason:'疫苗資訊需清楚可行。',
      to_verify:['108年選取準則改版對趨勢的影響']},
    decision_points:[Object.assign({}, DP_TREND, {current:'約 1.7 萬人｜114 年肺炎死亡（17,468 人）'})],
    content_check_note:'死亡人數引自衛福部114年死因統計並標明年份，疫苗政策引自疾管署，未使用療效保證用語，未涉及具體廠牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'肺炎',
    collect:{
      summary:'肺炎居國人十大死因第3位，114年死亡17,468人且逾9成為65歲以上長者；疾管署2026年起將成人公費肺炎鏈球菌疫苗改為1劑新型疫苗，高齡化下肺炎預防是長者健康溝通的重點。',
      objective_data:[
        {item:'年度趨勢方向',desc:'約1.7萬人死於肺炎：衛福部114年死因統計，肺炎死亡17,468人，居十大死因第3位，每十萬人口死亡率74.8人。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果分析',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'好發族群年齡層',desc:'約1.6萬人為65歲以上：114年65歲以上肺炎死亡16,001人，占肺炎死亡逾9成，居65歲以上死因第3位。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'1劑完成：疾管署自2026年1月15日起以1劑PCV20取代PCV13加PPV23兩劑，8月10日起提供PCV20或PCV21，公費對象為65歲以上、55-64歲原住民及19-64歲高風險對象。',tag:'官方統計',source:{name:'疾管署：成人公費肺炎鏈球菌疫苗全面升級',url:'https://www.cdc.gov.tw/Bulletin/Detail/vwMq9VkXIaV7FHyJgpk-5w?typeid=9'}},
        {item:'盛行率／發生率',desc:'36%完成接種：疾管署指出，65歲以上長者肺炎鏈球菌疫苗接種完成率由政策實施前的31%提升至36%。',tag:'官方統計',source:{name:'疾管署：成人公費肺炎鏈球菌疫苗全面升級',url:'https://www.cdc.gov.tw/Bulletin/Detail/vwMq9VkXIaV7FHyJgpk-5w?typeid=9'}}
      ],
      product_view:['機會：肺炎是長者住院與死亡的主因之一，可連結住院醫療與長者保障說明。','機會：陪長輩接種疫苗、口腔照護可作為熟齡保戶健康管理提醒。','風險：避免暗示特定保健品可預防肺炎；疫苗資訊需引用疾管署公告。'],
      marketing_view:['機會：每年10月公費流感、肺鏈疫苗開打是固定溝通檔期，可左右手同時接種。','機會：「長輩沒發燒也可能是肺炎」具反差，適合社群傳播。','風險：疫苗政策近年多次調整，內容需標明實施日期。'],
      alert_level:'medium',
      alert_reason:'2026年成人公費肺鏈疫苗兩度升級，民眾對接種資格與是否需補打有疑問；秋冬疫苗季前後關注度高。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('常只表現為食慾變差、精神不佳或意識改變','MEDICAL_INTERPRETATION','overgeneralization',
          '「常只表現為」可能讓讀者以為長者肺炎多半不會發燒咳嗽，實際上典型症狀仍常見，宜改為「可能」。','low','no',
          null,'no','clarify','屬表達精確度。',
          '可能只表現為食慾變差、精神不佳或意識改變'),
        F('新制只要1劑就完成肺鏈疫苗接種','REGULATORY_COMPLIANCE','eligibility_condition',
          '「1劑完成」適用於未曾接種或僅接種部分疫苗者，已打過PCV13/15者的間隔規定不同，文中未提醒依個人接種史判斷。','medium','no',
          null,'no','clarify','接種原則依疾管署公告。',
          '新制下多數長者只要1劑就完成肺鏈疫苗接種（已接種過部分疫苗者依間隔規定，可詢問合約院所）',
          ['公費肺炎鏈球菌疫苗現在只要打1劑就完成','公費肺鏈疫苗已改為1劑完成']),
        F('肺炎之所以能長年高居死因前段','DATA_FACTUAL_ACCURACY','series_break',
          '108年起死因選取準則改版，肺炎的排名與人數受口徑影響，「長年高居」宜註明統計口徑變動。','low','no',
          null,'no','clarify','屬統計口徑提醒。',
          '肺炎近年持續位居死因前段（108年起死因選取準則改版）'),
        F('其中超過9成是65歲以上長輩','DATA_FACTUAL_ACCURACY','rounding',
          '16,001÷17,468約為91.6%，「超過9成」正確，但文中未給出長者死亡人數，讀者無法自行核對。','low','no',
          null,'no','clarify','屬資訊補充。',
          '其中16,001人、超過9成是65歲以上長輩')
      ],
      card:[
        F('公費肺鏈疫苗新制完成接種','REGULATORY_COMPLIANCE','eligibility_condition',
          '「1劑」適用條件依接種史不同，卡面未提醒。','low','no',
          null,'no','clarify','屬適用條件說明。',
          '多數長者 1 劑完成接種'),
        F('65 歲以上接種公費肺鏈疫苗 1 劑','REGULATORY_COMPLIANCE','eligibility_condition',
          '公費對象還包括55-64歲原住民與19-64歲高風險對象，卡面只寫65歲以上，可能讓其他符合資格者以為自己不能打。','low','no',
          null,'no','clarify','屬對象補充。',
          '65 歲以上等公費對象接種肺鏈疫苗')
      ]
    },
    title_alts:[
      '肺炎是國人第3大死因：認識高風險族群與公費肺鏈疫苗新制',
      '爸媽沒發燒也可能是肺炎？長輩肺炎警訊與公費疫苗',
      '114年肺炎死亡約1.7萬人：長者預防肺炎的三道防線'
    ],
    card_title_alts:[
      ['國人第 3 大死因','長輩肺炎，疫苗 1 劑完成'],
      ['沒發燒也可能是肺炎','長輩警訊一次看'],
      ['公費肺鏈疫苗新制','1 劑完成接種']
    ],
    data_addon:[
      '114年肺炎標準化死亡率每十萬人29.3人，男性高於女性。',
      '23價肺鏈疫苗自新制實施後回收，不再提供接種。',
      '公費流感與肺鏈疫苗可左右手同時接種。'
    ],
    cta:'這個月確認家中65歲以上長輩的肺鏈疫苗接種紀錄，還沒打完就陪他到合約院所接種1劑。'
  });
})();
