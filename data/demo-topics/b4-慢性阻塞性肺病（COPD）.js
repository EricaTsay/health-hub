/* v6 示範主題：慢性阻塞性肺病（COPD）（B4 消化・肝膽・呼吸）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計（表1、表7 慢性下呼吸道疾病）、
   國健署〈遠離肺阻塞從戒菸開始 五大行動助您保肺護心〉（2025/11/04，引台灣胸腔暨重症加護醫學會千位病人普查、113年戒菸服務）、
   衛福部〈「早篩早治」戒菸遠離肺阻塞〉（113/11/14）、衛福部〈吸菸為引起COPD之高風險行為〉（111/11/10，肺功能檢查與症狀定義）。
   註：死因統計的「慢性下呼吸道疾病」含氣喘等，範圍大於COPD，已於文中標註。
   參考方向：健康智庫〈慢性阻塞性肺病(COPD)〉2022/11。 */
(function(){
  const REFS = [
    {title:'遠離肺阻塞從戒菸開始 五大行動助您保肺護心',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19555'},
    {title:'「早篩早治」戒菸遠離肺阻塞',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-80510-1.html'},
    {title:'「吸菸」為引起慢性阻塞性肺病(COPD)之高風險行為 即刻戒菸 遠離肺傷害',source:'衛生福利部',url:'https://www.mohw.gov.tw/fp-16-72340-1.html'},
    {title:'114年死因統計結果分析',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}
  ];
  const TABLE = {headers:['五大抗惡化行動','重點'], rows:[
    ['戒菸','首要關鍵；可撥免費戒菸專線0800-636363或至合約醫事機構'],
    ['規律使用吸入劑','依醫師處方每天使用，不因症狀減輕自行停藥'],
    ['疫苗接種','依公費資格接種流感、肺炎鏈球菌等疫苗'],
    ['肺復原','呼吸訓練與運動，提升活動耐力'],
    ['營養補充','維持體重與肌肉量，避免營養不良']
  ]};
  const TAGS = ['慢性阻塞性肺病','COPD','肺阻塞','戒菸','肺功能檢查'];

  const DP_SCOPE = {id:'dp-copd-scope', type:'data_scope', title:'死亡人數的統計範圍較大',
    desc:'死因統計的「慢性下呼吸道疾病」（ICD-10 J40-J47）包含COPD、氣喘等，範圍大於COPD；衛福部未在摘要表單獨公布COPD死亡人數。AI 在文中標註範圍。',
    current:'114年慢性下呼吸道疾病死亡5,796人（含COPD、氣喘等）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'5,796人', value:'114年・全年齡', note:'慢性下呼吸道疾病，十大死因第9位（目前採用）'},
      {label:'5,336人', value:'114年・65歲以上', note:'占該死因逾9成'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'咳、痰、喘別當老毛病：認識慢性阻塞性肺病與五大抗惡化行動',
    update_date:'2026/11/20',
    intro:'慢性阻塞性肺病（COPD，又稱肺阻塞）是呼吸道長期發炎、氣流受阻的疾病，吸菸是最主要的危險因子。依衛生福利部114年死因統計，慢性下呼吸道疾病（含COPD、氣喘等）死亡5,796人，居十大死因第9位，其中65歲以上占5,336人。國民健康署引用台灣胸腔暨重症加護醫學會對國內千位肺阻塞病人的普查，61%伴隨心血管共病，曾急性惡化者發生心血管事件的風險提高4.6倍。',
    sections:[
      {heading:'這些情況要做肺功能檢查',format:'bullets',items:[
        '40歲以上、吸菸或常接觸二手菸、三手菸者。',
        '咳嗽、咳痰、喘等症狀持續3週以上，或爬樓梯、走路容易喘。',
        '可先填寫「肺阻塞自我評估問卷（PUMA）」，再由醫師安排肺功能檢查確認。'
      ]},
      {heading:'國健署建議的五大抗惡化行動',format:'table',table:TABLE},
      {heading:'急性惡化要特別小心',format:'bullets',items:[
        '喘得比平常厲害、痰變多或顏色改變，可能是急性惡化，應儘速就醫。',
        '急性惡化會加速肺功能下降，也和心血管事件風險上升有關。',
        '國健署113年提供近43萬人次戒菸服務，戒菸永遠不嫌晚。'
      ]}
    ],
    think_tank_view:'肺阻塞最大的問題是「被習慣」：抽菸的人常把咳痰當成正常，把喘歸咎於年紀。其實一次簡單的肺功能檢查就能確認。確診後，戒菸、規律用藥、打疫苗和肺復原四件事一起做，才能減少急性惡化，也同時保護心臟。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數引自衛福部114年死因統計並標註統計範圍，共病比例標明為學會普查，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['慢性下呼吸道疾病死亡5,796人取自衛福部114年死因統計','61%心血管共病、4.6倍取自國健署2025/11/04新聞稿引述學會普查'],
      layout_reason:'先說明誰該做肺功能檢查，再以表格整理五大抗惡化行動，最後提醒急性惡化。',
      tone:'專業易懂', tone_reason:'需讓吸菸族群正視症狀。',
      to_verify:['學會千位病人普查未註明年份','死因統計範圍含氣喘等，非僅COPD']},
    decision_points:[DP_SCOPE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'抽菸又常咳痰、走路會喘？可能是肺阻塞在作怪',
    update_date:'2026/11/20',
    intro:'很多抽菸的人覺得咳嗽有痰很正常，走路容易喘是年紀到了，其實這可能是慢性阻塞性肺病（肺阻塞）。衛福部114年統計，慢性下呼吸道疾病（包含肺阻塞、氣喘等）有5,796人過世。國健署也提醒，肺阻塞病人有61%同時有心血管問題（學會普查），顧肺也是顧心。',
    sections:[
      {heading:'這些人該去檢查肺功能',format:'bullets',items:[
        '40歲以上、有抽菸或常吸到二手菸的人。',
        '咳嗽、有痰、會喘超過3週。',
        '可以先做「肺阻塞自我評估問卷（PUMA）」，再請醫師安排檢查。'
      ]},
      {heading:'五個行動顧好肺',format:'table',table:TABLE},
      {heading:'突然變喘要注意',format:'bullets',items:[
        '比平常更喘、痰變多或變色，要趕快看醫生。',
        '戒菸任何時候開始都有幫助，打0800-636363就有免費諮詢。'
      ]}
    ],
    think_tank_view:'如果家裡有抽菸的長輩總是咳個不停，別再說「老毛病」了，陪他去做一次肺功能檢查。戒菸很難，但有專線和門診可以幫忙，一起努力最有效。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部與國健署公開資料並標明範圍，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從「咳痰喘被當成老毛病」切入。', tone:'生活親切', tone_reason:'給吸菸者與家人閱讀。', to_verify:['學會普查年份']},
    decision_points:[DP_SCOPE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'肺阻塞：咳痰喘要檢查，五大行動防惡化',
    update_date:'2026/11/20',
    intro:'114年慢性下呼吸道疾病（含COPD、氣喘等）死亡5,796人，居十大死因第9位。吸菸者咳、痰、喘別輕忽。',
    sections:[
      {heading:'檢查對象',format:'bullets',items:[
        '40歲以上吸菸者，咳痰喘超過3週。'
      ]},
      {heading:'五大行動',format:'table',table:TABLE},
      {heading:'急性惡化',format:'bullets',items:[
        '喘加劇、痰變多變色，儘速就醫。'
      ]}
    ],
    think_tank_view:'戒菸、規律用藥、疫苗與肺復原，是減少肺阻塞惡化的四根支柱。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部公開資料並標明範圍，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為檢查對象、五大行動、急性惡化三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['死因統計範圍']},
    decision_points:[DP_SCOPE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'慢性阻塞性肺病（COPD）', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'咳、痰、喘不是老毛病', primary_visual:'5,796 人', secondary_message:'61% 肺阻塞病人有心血管共病', action_priority:'戒菸、做肺功能檢查'},
    headline_hook:'咳痰喘別當老毛病', headline_main:'肺阻塞 3 大警訊', title_accent:'3 大警訊',
    hero_message:'吸菸是主要危險因子', hero_support:'40 歲以上吸菸者症狀達 3 週應檢查',
    knowledge_title:'3 大警訊', knowledge_note:'症狀**持續 3 週以上**，請做肺功能檢查',
    knowledge_cards:[
      {label:'慢性咳嗽', lines:['長期咳個不停','早上特別明顯']},
      {label:'咳痰', lines:['痰多、清不乾淨','惡化時變多變色']},
      {label:'喘', lines:['爬樓梯、走路會喘','活動力下降']}
    ],
    primary_stat:{value:'5,796 人', label:'114 年慢性下呼吸道疾病死亡', note:'衛福部死因統計｜含 COPD、氣喘等，居第 9 位'},
    secondary_stats:[
      {value:'61%', label:'肺阻塞病人伴隨心血管共病（學會普查）'}
    ],
    action_title:'五大抗惡化行動',
    action_cards:[
      {key:'戒', text:'戒菸，撥打 0800-636363 免費諮詢'},
      {key:'藥', text:'依處方每天使用吸入劑'},
      {key:'打', text:'依資格接種流感、肺鏈疫苗'},
      {key:'動', text:'肺復原運動，加上營養補充'}
    ],
    carousel_suggestion:{reason:'若想把警訊、心肺風險與五大行動分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'咳痰喘別當老毛病', headline_main:'肺阻塞 3 大警訊'},
      {layout_type:'data', headline_hook:'顧肺也顧心', headline_main:'61% 有心血管共病'},
      {layout_type:'action', headline_hook:'防惡化', headline_main:'五大抗惡化行動'}]},
    hashtags:['慢性阻塞性肺病','COPD','戒菸','肺功能檢查'],
    sources:['衛生福利部','衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'肺阻塞檢查', audience:'40 歲以上吸菸者', scene:'中年男性在診間對著肺功能檢查儀吹氣，醫師在旁說明',
      emotion:'認真、願意改變', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged man blowing into a spirometer at a clinic while a doctor explains the results, determined mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：114年慢性下呼吸道疾病死亡5,796人（衛福部）','61%心血管共病取自國健署引述學會普查'],
      layout_reason:'核心是「認得咳痰喘、去做肺功能檢查」，選 knowledge：3 大警訊當主角，死亡人數與共病比例退到下方，最後給五大行動。',
      tone:'專業易懂', tone_reason:'需讓吸菸族群正視症狀。',
      to_verify:['5,796人含氣喘等，非僅COPD']},
    decision_points:[Object.assign({}, DP_SCOPE, {current:'5,796 人｜114 年慢性下呼吸道疾病死亡（含 COPD、氣喘等）'})],
    content_check_note:'死亡人數引自衛福部114年死因統計並標註範圍，共病比例標明為學會普查，未使用療效保證用語，未涉及具體藥品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'慢性阻塞性肺病（COPD）',
    collect:{
      summary:'慢性下呼吸道疾病（含COPD）居114年十大死因第9位，死亡5,796人；國健署引述學會普查，61%肺阻塞病人伴隨心血管共病，2025年起推動「保肺護心」五大抗惡化行動與PUMA自我評估問卷，吸菸者早篩早治是溝通重點。',
      objective_data:[
        {item:'年度趨勢方向',desc:'5796人死於慢性下呼吸道疾病：衛福部114年死因統計，慢性下呼吸道疾病（含COPD、氣喘等）死亡5,796人，居十大死因第9位，113年為6,193人。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果分析',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'好發族群年齡層',desc:'5336人為65歲以上：114年65歲以上慢性下呼吸道疾病死亡5,336人，占該死因逾9成，居65歲以上死因第7位。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果分析',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'盛行率／發生率',desc:'61%伴隨心血管共病：國健署引用台灣胸腔暨重症加護醫學會對國內千位肺阻塞病人的普查，9成病人符合至少一項高風險指標，61%伴隨心血管共病。',tag:'官方統計',source:{name:'國民健康署：遠離肺阻塞從戒菸開始 五大行動助您保肺護心',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19555'}},
        {item:'政策動向',desc:'近43萬人次戒菸服務：國健署113年提供近43萬人次戒菸服務，合約醫事機構涵蓋99.5%鄉鎮市區，並推廣「肺阻塞自我評估問卷（PUMA）」早篩早治。',tag:'官方統計',source:{name:'國民健康署：遠離肺阻塞從戒菸開始 五大行動助您保肺護心',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19555'}}
      ],
      product_view:['機會：肺阻塞病程長、易急性惡化住院，可連結住院醫療與長期照護保障說明。','機會：戒菸支持與肺功能檢查提醒可作為保戶健康促進服務。','風險：避免暗示特定保健品可改善肺功能；吸入劑使用應遵醫囑。'],
      marketing_view:['機會：每年11月世界肺阻塞日與台灣胸腔暨重症加護醫學會「肺功能檢測月」是固定溝通檔期。','機會：「咳痰喘不是老毛病」貼近吸菸者日常，容易引起共鳴。','風險：避免責怪吸菸者，宜以支持戒菸的語氣溝通。'],
      alert_level:'low',
      alert_reason:'屬長期慢性病議題，無急迫時效事件；適合在11月世界肺阻塞日與秋冬疫苗季前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國民健康署引用台灣胸腔暨重症加護醫學會對國內千位肺阻塞病人的普查','SOURCE_EVIDENCE','secondary_citation',
          '61%與4.6倍為學會臨床普查結果，經國健署新聞稿轉述，文中未說明普查年份，且千位病人為就醫個案，不代表所有肺阻塞患者。','medium','yes',
          '台灣胸腔暨重症加護醫學會普查的執行年份與收案方式。','yes','confirm','國健署新聞稿未註明普查年份。',
          '國民健康署2025年新聞稿引用台灣胸腔暨重症加護醫學會對國內千位就醫肺阻塞病人的普查（普查年份待確認）'),
        F('曾急性惡化者發生心血管事件的風險提高4.6倍','MEDICAL_INTERPRETATION','relative_risk_framing',
          '4.6倍為相對風險，文中未說明比較對象（未曾急性惡化的肺阻塞病人），讀者可能誤解為與一般人比較。','low','no',
          null,'no','clarify','屬風險表達精確度。',
          '曾急性惡化者發生心血管事件的風險，是未曾急性惡化病人的4.6倍'),
        F('肺阻塞病人有61%同時有心血管問題（學會普查）','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '「心血管問題」比原文「心血管共病」寬鬆，可能讓讀者以為包含一般高血壓以外的所有心臟不適。','low','no',
          null,'no','clarify','屬用語精確度。',
          '肺阻塞病人有61%伴隨心血管共病（學會普查）'),
        F('戒菸永遠不嫌晚','MEDICAL_INTERPRETATION','outcome_generalization',
          '「永遠不嫌晚」是常見倡議用語，但文中未說明戒菸可帶來的具體好處，說服力較弱。','low','no',
          null,'no','clarify','屬內容補強。',
          '任何時候戒菸，都能降低肺阻塞惡化與心血管惡化的風險')
      ],
      card:[
        F('114 年慢性下呼吸道疾病死亡','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '卡面主題為肺阻塞，主數字為範圍較大的慢性下呼吸道疾病，note 已註明但字級小，讀者可能誤為COPD死亡人數。','low','no',
          null,'no','clarify','屬統計範圍說明。',
          '114 年慢性下呼吸道疾病（含 COPD）死亡'),
        F('肺阻塞病人伴隨心血管共病（學會普查）','SOURCE_EVIDENCE','secondary_citation',
          '學會普查對象為千位就醫病人，卡面未說明樣本，比例可能高於全體病人。','low','no',
          null,'no','clarify','屬來源性質說明。',
          '就醫肺阻塞病人伴隨心血管共病（學會普查）')
      ]
    },
    title_alts:[
      '咳、痰、喘別當老毛病：認識慢性阻塞性肺病與五大抗惡化行動',
      '抽菸又常咳痰、走路會喘？可能是肺阻塞在作怪',
      '慢性下呼吸道疾病居十大死因第9位：肺阻塞早篩早治'
    ],
    card_title_alts:[
      ['咳痰喘別當老毛病','肺阻塞 3 大警訊'],
      ['抽菸又常喘？','去做肺功能檢查'],
      ['顧肺也顧心','五大抗惡化行動']
    ],
    data_addon:[
      '國健署推廣「肺阻塞自我評估問卷（PUMA）」協助早期發現。',
      '台灣胸腔暨重症加護醫學會自111年起訂每年11月為「肺功能檢測月」。',
      '免費戒菸專線0800-636363，LINE ID「@tsh0800636363」。'
    ],
    cta:'如果你或家人40歲以上、有抽菸且咳痰喘超過3週，這個月就先填PUMA問卷，並到胸腔科做一次肺功能檢查。'
  });
})();
