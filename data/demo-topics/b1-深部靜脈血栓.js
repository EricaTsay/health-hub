/* v6 示範主題：深部靜脈血栓（經濟艙症候群）（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-21。數據來源：臺北榮總家庭醫學部2024-02〈終於可以出國！你知道什麼是經濟艙症候群嗎？〉（症狀、高風險族群、預防）、
   健康醫療網／財訊2020-01-26（引述衛福部疾管署：風險分級、壓力襪、每2-3小時活動）。
   國內查無深部靜脈血栓官方發生率統計；疾管署建議經媒體轉述，原始頁面未取得。
   參考方向：健康智庫〈久坐恐致血栓？當心經濟艙症候群〉2025/08、〈站起來動一動吧！避免久坐引發血栓！〉2023/10。 */
(function(){
  const REFS = [
    {title:'終於可以出國！你知道什麼是經濟艙症候群嗎？',source:'臺北榮民總醫院家庭醫學部',url:'https://wd.vghtpe.gov.tw/fm/files/11302%E6%A6%AE%E7%B8%BD%E4%BA%BA_%E5%90%B3%E5%85%86%E6%9D%B1%E9%86%AB%E5%B8%AB_%E7%B5%82%E6%96%BC%E5%8F%AF%E4%BB%A5%E5%87%BA%E5%9C%8B%EF%BC%81%E4%BD%A0%E7%9F%A5%E9%81%93%E4%BB%80%E9%BA%BC%E6%98%AF%E7%B6%93%E6%BF%9F%E8%89%99%E7%97%87%E5%80%99%E7%BE%A4%E5%97%8E%EF%BC%9F.pdf'},
    {title:'「機艙症候群」真要命！如何預防靠這六項健身操',source:'健康醫療網／財訊',url:'https://www.moneyweekly.com.tw/_Article?AID=39351'}
  ];
  const TABLE = {headers:['警訊','表現'], rows:[
    ['下肢腫脹疼痛','常從小腿開始，多為單側'],
    ['皮膚變化','發紅或發紫，局部感覺異常溫暖'],
    ['肺栓塞警訊','呼吸困難、心跳加快、頭暈、咳血，應立即就醫'],
    ['無症狀','初期可能完全沒有症狀']
  ]};
  const TAGS = ['深部靜脈血栓','經濟艙症候群','久坐','肺栓塞','長途飛行'];

  const DP_SRC = {id:'dp-dvt-src', type:'data_scope', title:'疾管署建議的出處',
    desc:'「每2-3小時活動一次」「壓力襪腳踝處壓力約15-30 mmHg」與風險分級，是2020年媒體報導引述衛福部疾管署的說法，原始頁面未取得；其他報導亦有「每1小時」「每2小時」等不同說法。AI 標示為引述，並以榮總2024年衛教為主要依據。',
    current:'每2-3小時活動一次（媒體引述疾管署，2020年）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'每2-3小時', value:'疾管署（媒體引述）', note:'健康醫療網2020年（目前採用）'},
      {label:'定期活動下肢', value:'臺北榮總2024年衛教', note:'未給固定時間，建議定期活動或變換姿勢'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'久坐、長途飛行小心深部靜脈血栓：認識經濟艙症候群',
    update_date:'2026/11/21',
    intro:'深部靜脈血栓俗稱「經濟艙症候群」，是長時間維持坐姿、下肢不活動，使血液循環變差而在靜脈內形成血栓。臺北榮總家庭醫學部指出，血栓初期可能完全沒有症狀，若隨血流跑到肺部，可能出現呼吸困難、心跳加快、頭暈、咳血等嚴重症狀。不只搭飛機，長時間久坐辦公、開車也要留意。',
    sections:[
      {heading:'深部靜脈血栓的警訊',format:'table',table:TABLE},
      {heading:'哪些人風險較高',format:'bullets',items:[
        '臺北榮總列出：長期吸菸、肥胖（BMI大於30）、使用避孕藥或荷爾蒙替代治療、懷孕、曾有靜脈栓塞病史、有惡性腫瘤病史、近期開刀或接受手術者。',
        '媒體引述疾管署，將旅客分為低、中、高度風險，40歲以上、懷孕或近期分娩、6星期內接受大手術等屬中高風險。',
        '有上述風險因子者，長途旅行前可先諮詢醫師。'
      ]},
      {heading:'預防這樣做',format:'bullets',items:[
        '定期活動下肢或變換姿勢，安全時起身走動；媒體引述疾管署建議每2-3小時活動一次、每次3-5分鐘。',
        '有風險因子或靜脈曲張病史者，可穿著彈性襪（遠端壓力較大的分段式設計）。',
        '多喝水，避免飲用過量酒精或咖啡；不要未經醫師指示自行服用抗凝血藥物。'
      ]}
    ],
    think_tank_view:'經濟艙症候群的預防其實很簡單：別讓腳一直不動。長途飛行、追劇或加班時，設個鬧鐘提醒自己起身走走、動動腳踝；如果有風險因子，出發前先和醫師聊聊是否需要彈性襪。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'症狀、高風險族群與預防建議引自臺北榮總衛教，疾管署建議標明為媒體引述，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['臺北榮總家醫部2024年衛教','疾管署風險分級（媒體引述2020年）'],
      layout_reason:'先用表格列出警訊，再說明高風險族群，最後給預防做法。',
      tone:'專業易懂', tone_reason:'需清楚辨識急症警訊。',
      to_verify:['國內無官方發生率統計','疾管署原始頁面未取得']},
    decision_points:[DP_SRC]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'搭飛機、追劇坐太久？小心腿裡長血栓',
    update_date:'2026/11/21',
    intro:'「經濟艙症候群」聽起來好像只跟搭飛機有關，其實只要長時間坐著不動，腿部血液循環變差，就可能在靜脈裡形成血栓。臺北榮總醫師提醒，血栓一開始可能沒感覺，但如果跑到肺部，就可能喘不過氣、頭暈甚至咳血。',
    sections:[
      {heading:'這些狀況要注意',format:'table',table:TABLE},
      {heading:'這些人要特別小心',format:'bullets',items:[
        '抽菸、體重過重、懷孕。',
        '吃避孕藥或荷爾蒙、最近開過刀。',
        '曾經有過血栓，或有癌症病史。'
      ]},
      {heading:'這樣預防',format:'bullets',items:[
        '每隔一段時間站起來走走，坐著也能動動腳踝。',
        '有風險的人可以穿彈性襪，記得選對壓力。',
        '多喝水，少喝酒和咖啡；抗凝血藥別自己亂吃。'
      ]}
    ],
    think_tank_view:'下次長途飛行，選個靠走道的位置，每隔一陣子起來走走、上個廁所；在家追劇也一樣，一集結束就起來伸伸腿吧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'建議引自臺北榮總衛教，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以搭機與追劇情境切入。', tone:'生活親切', tone_reason:'給一般民眾與常旅行者閱讀。', to_verify:['活動間隔說法不一']},
    decision_points:[DP_SRC]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'經濟艙症候群：久坐要起身，喘不過氣立即就醫',
    update_date:'2026/11/21',
    intro:'長時間坐著不動可能形成深部靜脈血栓，血栓跑到肺部會出現呼吸困難、咳血等症狀。',
    sections:[
      {heading:'警訊',format:'table',table:TABLE},
      {heading:'高風險',format:'bullets',items:[
        '吸菸、肥胖、懷孕、荷爾蒙藥物。',
        '近期手術、血栓或癌症病史。'
      ]},
      {heading:'預防',format:'bullets',items:[
        '定期起身活動下肢。',
        '多喝水、少酒精咖啡。'
      ]}
    ],
    think_tank_view:'別讓腳一直不動，是預防經濟艙症候群最簡單的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'建議引自臺北榮總衛教，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為警訊、高風險、預防三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['無官方統計']},
    decision_points:[DP_SRC]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'深部靜脈血栓（經濟艙症候群）', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'久坐不動可能形成腿部血栓', primary_visual:'每 2–3 小時', secondary_message:'血栓到肺部會喘不過氣', action_priority:'定期起身、多喝水'},
    headline_hook:'坐太久腿腫痛？', headline_main:'認識經濟艙症候群', title_accent:'經濟艙症候群',
    hero_message:'別讓腳一直不動', hero_support:'久坐使下肢循環變差，靜脈可能形成血栓',
    knowledge_title:'4 個警訊', knowledge_note:'呼吸困難、咳血，**立即就醫**',
    knowledge_cards:[
      {label:'腫脹疼痛', icon:'check', lines:['常從小腿開始','多為單側']},
      {label:'皮膚變化', icon:'check', lines:['發紅、發紫','局部溫熱']},
      {label:'肺栓塞', icon:'heart', lines:['呼吸困難','頭暈、咳血']},
      {label:'無症狀', icon:'search', lines:['初期可能','完全沒感覺']}
    ],
    primary_stat:{value:'每 2–3 小時', label:'起身活動 3–5 分鐘', note:'媒體引述疾管署建議（2020 年）'},
    secondary_stats:[
      {value:'BMI > 30', label:'肥胖為高風險因子'},
      {value:'15–30 mmHg', label:'壓力襪腳踝處壓力'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'動', text:'定期起身走動，坐著也動腳踝'},
      {key:'喝', text:'多喝水，少喝酒精與咖啡'},
      {key:'襪', text:'有風險因子者可穿彈性襪'},
      {key:'問', text:'高風險者出發前先問醫師'}
    ],
    carousel_suggestion:{reason:'若想把警訊、高風險族群與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'坐太久腿腫痛？', headline_main:'經濟艙症候群警訊'},
      {layout_type:'knowledge', headline_hook:'高風險族群', headline_main:'這些人要小心'},
      {layout_type:'action', headline_hook:'長途飛行', headline_main:'定期起身動一動'}]},
    hashtags:['深部靜脈血栓','經濟艙症候群','久坐','肺栓塞'],
    sources:['臺北榮民總醫院','健康醫療網'],
    illustration_category:'general',
    illustration:{topic:'長途飛行預防血栓', audience:'旅客與上班族', scene:'機艙走道上一位乘客起身伸展小腿，旁邊乘客喝著水',
      emotion:'輕鬆、自在', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A passenger standing in an airplane aisle stretching their calves while another passenger drinks water, relaxed mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['臺北榮總衛教（2024年）','疾管署建議（媒體引述2020年）'],
      layout_reason:'核心是辨識警訊，選 knowledge：4 張警訊卡當主角，活動間隔當主數字。',
      tone:'專業易懂', tone_reason:'急症警訊需清楚。',
      to_verify:['主數字為媒體引述疾管署']},
    decision_points:[Object.assign({}, DP_SRC, {current:'每 2–3 小時活動（媒體引述疾管署）'})],
    content_check_note:'警訊與高風險族群引自臺北榮總，疾管署建議標明為媒體引述，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'深部靜脈血栓（經濟艙症候群）',
    collect:{
      summary:'深部靜脈血栓（經濟艙症候群）與久坐、長途飛行相關，初期可能無症狀，血栓到肺部可能危及生命；國內無官方發生率統計，「定期起身活動、認得肺栓塞警訊」是適合旅遊季與上班族溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'起身走動3分鐘以上：媒體引述衛福部疾管署建議每2-3小時活動一次、每次3至5分鐘，中高度風險旅客可穿膝下分段壓力襪，並諮詢醫師是否需要抗凝血藥物（2020年報導，國內無官方發生率統計）。',tag:'市場觀察',source:{name:'健康醫療網／財訊：「機艙症候群」真要命！',url:'https://www.moneyweekly.com.tw/_Article?AID=39351'}},
        {item:'年度趨勢方向',desc:'7類高風險族群：臺北榮總家醫部列出長期吸菸、肥胖、使用避孕藥或荷爾蒙、懷孕、靜脈栓塞病史、惡性腫瘤病史、近期手術者風險較高。',tag:'市場觀察',source:{name:'臺北榮民總醫院家庭醫學部：你知道什麼是經濟艙症候群嗎？',url:'https://wd.vghtpe.gov.tw/fm/files/11302%E6%A6%AE%E7%B8%BD%E4%BA%BA_%E5%90%B3%E5%85%86%E6%9D%B1%E9%86%AB%E5%B8%AB_%E7%B5%82%E6%96%BC%E5%8F%AF%E4%BB%A5%E5%87%BA%E5%9C%8B%EF%BC%81%E4%BD%A0%E7%9F%A5%E9%81%93%E4%BB%80%E9%BA%BC%E6%98%AF%E7%B6%93%E6%BF%9F%E8%89%99%E7%97%87%E5%80%99%E7%BE%A4%E5%97%8E%EF%BC%9F.pdf'}},
        {item:'政策動向',desc:'3級旅客風險分級：媒體引述疾管署，將旅客分為低、中、高度風險，40歲以上、懷孕或近期分娩、6星期內大手術等屬中高風險。',tag:'市場觀察',source:{name:'健康醫療網／財訊：「機艙症候群」真要命！',url:'https://www.moneyweekly.com.tw/_Article?AID=39351'}},
        {item:'好發族群年齡層',desc:'40歲以上屬中度風險：疾管署分級將中高齡、肥胖（BMI大於30）或身高超過190公分者列為中度風險（媒體引述）。',tag:'市場觀察',source:{name:'健康醫療網／財訊：「機艙症候群」真要命！',url:'https://www.moneyweekly.com.tw/_Article?AID=39351'}}
      ],
      product_view:['機會：旅遊季可結合旅平險與旅遊健康提醒的溝通。','機會：上班族久坐問題適合結合健康管理服務的活動提醒。','風險：不得推薦特定壓力襪品牌，也不得暗示產品可取代醫療評估。'],
      marketing_view:['機會：連假與暑假出國潮是溝通時點。','機會：「追劇一集起來動一動」能擴大到居家久坐族群。','風險：避免以猝死個案做恐懼訴求。'],
      alert_level:'low',
      alert_reason:'無政策事件與官方統計，適合在旅遊季節性溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('媒體引述疾管署建議每2-3小時活動一次、每次3-5分鐘','SOURCE_EVIDENCE','secondary_citation',
          '建議出自2020年媒體報導引述，未附疾管署原始頁面；其他報導亦有每1小時、每2小時等不同說法。','medium','yes',
          '疾管署旅遊醫學深部靜脈血栓衛教原文。','yes','confirm','屬二手引述。',
          null),
        F('40歲以上、懷孕或近期分娩、6星期內接受大手術等屬中高風險','SOURCE_EVIDENCE','secondary_citation',
          '風險分級為媒體引述疾管署，原始分級表未取得；讀者可能直接套用判斷自己是否需要用藥。','low','yes',
          '疾管署風險分級原文。','yes','confirm','屬二手引述。',
          null),
        F('有風險的人可以穿彈性襪，記得選對壓力','RISK_COMMUNICATION_SCOPE','advice_vague',
          '「選對壓力」沒說明標準，讀者可能自行購買不適合的彈性襪；應建議諮詢醫師或藥師。','low','no',
          null,'no','clarify','屬建議補充。',
          '有風險的人可以穿彈性襪，壓力等級請先問醫師或藥師'),
        F('不只搭飛機，長時間久坐辦公、開車也要留意','MEDICAL_INTERPRETATION','extrapolation',
          '引用的衛教資料以長途交通為主，延伸到辦公久坐屬合理推論，但未附來源。','low','no',
          null,'no','clarify','屬合理延伸。',
          null)
      ],
      card:[
        F('起身活動 3–5 分鐘','SOURCE_EVIDENCE','secondary_citation',
          '主數字為媒體引述疾管署，且其他說法不一。','medium','yes',
          '疾管署原文。','yes','confirm','屬二手引述。',
          null),
        F('壓力襪腳踝處壓力','RISK_COMMUNICATION_SCOPE','product_adjacent',
          '卡面列出壓力規格，可能被理解為推薦自行購買。','low','no',
          null,'no','clarify','屬語境提醒。',
          '壓力襪需選對規格（問醫師）')
      ]
    },
    title_alts:[
      '久坐、長途飛行小心深部靜脈血栓：認識經濟艙症候群',
      '搭飛機、追劇坐太久？小心腿裡長血栓',
      '經濟艙症候群警訊與預防：別讓腳一直不動'
    ],
    card_title_alts:[
      ['坐太久腿腫痛？','認識經濟艙症候群'],
      ['長途飛行','定期起身動一動'],
      ['別讓腳一直不動','預防腿部血栓']
    ],
    data_addon:[
      '臺北榮總：彈性襪原理為遠端壓力較大、往近端逐漸減小，以促進血液回流。',
      '媒體引述疾管署：高度風險包括遺傳性凝血異常、癌症、6星期內接受大手術者。',
      '臺北榮總：長途飛行時可在確保飛行安全下起身走動、上廁所，減少風險。'
    ],
    cta:'下次長途飛行或連續追劇時，設個鬧鐘提醒自己每隔一陣子起身走走、動動腳踝。'
  });
})();
