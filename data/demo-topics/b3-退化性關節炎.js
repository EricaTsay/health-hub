/* v6 示範主題：退化性關節炎（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：衛福部（食藥署）〈膝關節養護勤落實 膝蓋卡卡遠離你〉（103/09/24，約每10位長輩2位膝關節退化）、
   國健署「防跌三步」新聞稿（2025/02/18，65歲以上逾460萬人）、衛福部〈及早存骨本 5招鞏固骨骼健康〉（每週運動150分鐘）。
   註：國內退化性關節炎盛行率與人工膝關節置換人數，查到的官方資料多為十年以上舊資料；健保醫療品質資訊公開網無法讀取，本題不寫置換人數。
   參考方向：健康智庫〈肌肉與骨骼健康－退化性關節炎〉2026/04/20。 */
(function(){
  const REFS = [
    {title:'膝關節養護勤落實 膝蓋卡卡遠離你',source:'衛生福利部食品藥物管理署',url:'https://www.mohw.gov.tw/cp-3205-21630-1.html'},
    {title:'「防跌三步」守護長者安全',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18870'},
    {title:'及早存骨本 5招鞏固骨骼健康',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-84264-1.html'}
  ];
  const TABLE = {headers:['護膝4招','怎麼做'], rows:[
    ['控制體重','體重減輕可降低膝關節承受的壓力'],
    ['適度運動','每週累積150分鐘，選擇快走、騎腳踏車、游泳等對膝蓋較友善的運動'],
    ['練大腿肌力','坐姿抬腿、靠牆微蹲等，穩定膝關節'],
    ['減少傷膝動作','避免長時間蹲跪、頻繁爬樓梯與提重物，疼痛時適時休息']
  ]};
  const TAGS = ['退化性關節炎','膝關節','護膝','高齡健康','肌力訓練'];

  const DP_PREV = {id:'dp-oa-prev', type:'data_scope', title:'盛行率只有較舊的官方說法',
    desc:'「每10位長輩約2位膝關節退化」出自食藥署103年衛教新聞，未說明調查名稱與年份；其他常見的「15%」「65歲以上20%」多為醫院或媒體轉述。國內尚無近年官方調查，AI 採用官方說法並標示年份。',
    current:'約每10位長輩就有2位膝關節退化（食藥署103年衛教資料）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'改成不寫比例', action:'replace', from:'依衛生福利部食品藥物管理署103年衛教資料，約每10位長輩就有2位有膝關節退化問題。', to:''}]};

  const PRO = {
    content_type:'健康文章',
    title:'膝蓋卡卡、上下樓梯痛？退化性關節炎的警訊與護膝4招',
    update_date:'2026/11/20',
    intro:'退化性關節炎是關節軟骨隨年齡增長、長期使用或受力不均而逐漸磨損所造成的慢性疾病，最常發生在膝關節。依衛生福利部食品藥物管理署103年衛教資料，約每10位長輩就有2位有膝關節退化問題。截至2025年1月，臺灣65歲以上人口已超過460萬人，膝關節保養是維持行動力的重要課題。',
    sections:[
      {heading:'常見警訊',format:'bullets',items:[
        '關節疼痛：活動後加劇，休息後稍微緩解。',
        '關節僵硬：早上起床或久坐後特別明顯。',
        '活動時有卡卡聲或摩擦感，嚴重時關節腫脹、變形，走路與上下樓梯困難。'
      ]},
      {heading:'護膝4招',format:'table',table:TABLE},
      {heading:'治療怎麼選',format:'bullets',items:[
        '初期以運動、體重控制與復健為主，疼痛時依醫師建議使用止痛藥物。',
        '注射治療、輔具（護膝、拐杖）需由醫師評估，購買醫療器材可至食藥署醫療器材許可證資料庫查詢。',
        '嚴重退化經保守治療無效時，醫師可能評估人工膝關節置換；術後須配合復健，並避免受傷或感染。'
      ]}
    ],
    think_tank_view:'許多人膝蓋痛就減少走路，結果大腿肌力流失、關節更不穩，形成惡性循環。退化性關節炎的保養，是「動得對」而不是「不動」：控制體重、練好大腿肌肉、選擇對膝蓋友善的運動，比任何保健食品都實在。疼痛持續或影響生活時，再請骨科或復健科醫師評估。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率標明食藥署103年衛教資料，運動建議引自衛福部，未使用療效保證用語，未推薦特定保健食品或醫材。',
    ai_rationale:{basis:['每10位長輩約2位取自食藥署103年衛教新聞','65歲以上逾460萬人取自國健署2025/02/18新聞稿'],
      layout_reason:'先列警訊，再以表格整理護膝4招，最後說明治療選擇。',
      tone:'專業易懂', tone_reason:'給熟齡讀者具體可行的保養方式。',
      to_verify:['盛行率為103年衛教資料且未載調查來源，國內無近年官方調查','人工膝關節置換人數查無近年官方公開數字']},
    decision_points:[DP_PREV]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽膝蓋卡卡、上樓梯會痛？護膝4招一起做',
    update_date:'2026/11/20',
    intro:'膝蓋卡卡、蹲下站起來會痛，常是退化性關節炎在提醒你。食藥署103年的衛教資料提到，大約每10位長輩就有2位膝關節退化。好消息是，只要動得對、體重控制好，很多人都能讓膝蓋用得更久。',
    sections:[
      {heading:'膝蓋發出的警訊',format:'bullets',items:[
        '走一走就痛，休息一下比較好。',
        '早上起床或坐久了，膝蓋卡卡不好動。',
        '動的時候有喀喀聲，嚴重時會腫、變形。'
      ]},
      {heading:'護膝4招',format:'table',table:TABLE},
      {heading:'痛起來怎麼辦？',format:'bullets',items:[
        '先找骨科或復健科醫師評估，不要自己亂買藥。',
        '要用護膝、拐杖或打針，先問醫師適不適合。',
        '真的很嚴重，醫師可能會建議換人工關節。'
      ]}
    ],
    think_tank_view:'膝蓋痛不代表要整天坐著。陪爸媽一起散步、做簡單的抬腿運動，膝蓋周圍的肌肉變強壯了，走路反而更穩、更不痛。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明年份與出處，未使用療效保證用語，未推薦特定保健食品或醫材。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家人觀察到的膝蓋困擾切入。', tone:'生活親切', tone_reason:'給子女與熟齡讀者閱讀。', to_verify:['盛行率資料年份較舊']},
    decision_points:[Object.assign({}, DP_PREV, {options:[{label:'沿用目前資料', action:'keep'}, {label:'改成不寫比例', action:'replace', from:'食藥署103年的衛教資料提到，大約每10位長輩就有2位膝關節退化。', to:''}]})]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'退化性關節炎：警訊與護膝4招',
    update_date:'2026/11/20',
    intro:'約每10位長輩有2位膝關節退化（食藥署103年衛教資料）。護膝重點是動得對，不是不動。',
    sections:[
      {heading:'警訊',format:'bullets',items:[
        '活動後痛、晨起僵硬、卡卡聲。'
      ]},
      {heading:'護膝4招',format:'table',table:TABLE},
      {heading:'治療',format:'bullets',items:[
        '運動復健為主，嚴重時由醫師評估手術。'
      ]}
    ],
    think_tank_view:'控制體重、練大腿肌力、選對運動，是膝關節保養的三個重點。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明年份與出處，未使用療效保證用語，未推薦特定保健食品或醫材。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊、護膝、治療三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['盛行率資料年份較舊']},
    decision_points:[Object.assign({}, DP_PREV, {options:[{label:'沿用目前資料', action:'keep'}, {label:'改成不寫比例', action:'replace', from:'約每10位長輩有2位膝關節退化（食藥署103年衛教資料）。', to:''}]})]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'退化性關節炎', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'膝蓋痛不是不動，而是動得對', primary_visual:'每 10 位 2 位', secondary_message:'晨起僵硬、上下樓痛要留意', action_priority:'護膝 4 招'},
    headline_hook:'膝蓋卡卡上樓痛？', headline_main:'護膝從這 4 件事做起', title_accent:'這 4 件事',
    hero_message:'每 10 位長輩有 2 位', hero_support:'膝關節退化（食藥署 103 年衛教資料）',
    primary_stat:{value:'每 10 位 2 位', label:'長輩膝關節退化', note:'食藥署 103 年衛教資料'},
    action_title:'護膝這樣做',
    action_cards:[
      {key:'控', text:'控制體重，減輕膝蓋負擔'},
      {key:'動', text:'每週 150 分鐘快走、騎車或游泳'},
      {key:'練', text:'坐姿抬腿，強化大腿肌力'},
      {key:'避', text:'少蹲跪、少提重物，痛時休息'}
    ],
    notice:'疼痛持續、腫脹或影響走路，請**骨科或復健科**評估，勿自行購藥。',
    carousel_suggestion:{reason:'若想把警訊、護膝方法與治療選擇分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'膝蓋發出警訊', headline_main:'退化性關節炎 3 個徵兆'},
      {layout_type:'action', headline_hook:'護膝 4 招', headline_main:'動得對比不動更重要'},
      {layout_type:'knowledge', headline_hook:'治療怎麼選', headline_main:'從復健到人工關節'}]},
    hashtags:['退化性關節炎','膝關節','護膝','肌力訓練'],
    sources:['衛生福利部食品藥物管理署','衛生福利部國民健康署'],
    illustration_category:'bones-joints',
    illustration:{topic:'膝關節保養', audience:'熟齡長輩', scene:'長者坐在椅子上做抬腿運動，旁邊放著運動鞋與水壺',
      emotion:'輕鬆、有活力', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult sitting on a chair doing leg-raise exercises, sneakers and a water bottle nearby, relaxed and energetic mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：約每10位長輩2位膝關節退化（食藥署103年）','運動建議取自衛福部'],
      layout_reason:'重點是日常護膝行動，選 action：4 個護膝做法當主角，比例放在 Hero。',
      tone:'專業易懂', tone_reason:'具體、可執行。',
      to_verify:['盛行率為較舊衛教資料']},
    decision_points:[{id:'dp-oa-prev-card', type:'data_scope', title:'盛行率只有較舊的官方說法', desc:DP_PREV.desc,
      current:'每 10 位長輩 2 位膝關節退化（食藥署 103 年）', options:[{label:'沿用目前資料', action:'keep'}]}],
    content_check_note:'比例標明食藥署103年衛教資料，未使用療效保證用語，未推薦特定保健食品或醫材。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'退化性關節炎',
    collect:{
      summary:'退化性關節炎是高齡族群最常見的關節問題，以膝關節最多；食藥署衛教資料指出約每10位長輩有2位膝關節退化，65歲以上人口已逾460萬，膝關節保養與肌力訓練是維持行動力、預防失能的重要議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約2成長輩膝關節退化：食藥署103年衛教資料指出，約每10位長輩就有2位有膝關節退化問題（未載明調查年份），國內尚無近年官方盛行率調查。',tag:'官方統計',source:{name:'衛福部：膝關節養護勤落實 膝蓋卡卡遠離你',url:'https://www.mohw.gov.tw/cp-3205-21630-1.html'}},
        {item:'年度趨勢方向',desc:'逾460萬人：截至2025年1月，臺灣65歲以上人口已超過460萬人、占總人口超過20%，退化性關節炎的照護需求隨高齡化增加。',tag:'官方統計',source:{name:'國民健康署：「防跌三步」守護長者安全',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18870'}},
        {item:'政策動向',desc:'每週運動至少150分鐘：衛福部建議規律運動並搭配肌力訓練，有助維持肌肉骨骼健康。',tag:'官方統計',source:{name:'衛生福利部：及早存骨本 5招鞏固骨骼健康',url:'https://www.mohw.gov.tw/cp-16-84264-1.html'}},
        {item:'政策動向',desc:'醫材查詢：食藥署提醒，護膝、人工關節等醫療器材可至食藥署醫療器材許可證資料庫查詢，人工膝關節置換後要注意保養與避免感染。',tag:'官方統計',source:{name:'衛福部：膝關節養護勤落實 膝蓋卡卡遠離你',url:'https://www.mohw.gov.tw/cp-3205-21630-1.html'}}
      ],
      product_view:['機會：退化性關節炎影響行動力與獨立生活能力，可連結長照與失能保障說明。','機會：肌力訓練、體重管理課程可作為熟齡保戶健康管理服務。','風險：市面護膝保健食品眾多，避免推薦或暗示特定保健品、醫材療效。'],
      marketing_view:['機會：重陽節是「陪爸媽護膝」的溝通時機。','機會：「膝蓋痛要動得對」打破「不動才能護膝」的迷思。','風險：盛行率資料較舊，傳播時避免強調數字。'],
      alert_level:'low',
      alert_reason:'屬長期高齡健康議題，無急迫時效事件；適合在重陽節與秋季運動主題中溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('約每10位長輩就有2位有膝關節退化問題','SOURCE_EVIDENCE','survey_unspecified',
          '食藥署原文只寫「經調查」，未說明調查名稱、對象年齡與年份，文中雖標103年，但那是新聞發布年份，不是調查年份。','medium','yes',
          '「每10位長輩2位膝關節退化」所依據的調查名稱與年份。','yes','confirm','原始調查不明。',
          '約每10位長輩就有2位有膝關節退化問題（食藥署103年衛教新聞引述，原始調查未載明）',
          ['大約每10位長輩就有2位膝關節退化','約每10位長輩有2位膝關節退化']),
        F('體重減輕可降低膝關節承受的壓力','MEDICAL_INTERPRETATION','unsourced_claim',
          '說法合理但未附出處或幅度，可補充引用來源或改為較保守表述。','low','no',
          null,'no','clarify','屬出處補充。',
          '體重過重者減重，有助降低膝關節負擔（請與醫師或營養師討論目標）'),
        F('比任何保健食品都實在','REGULATORY_COMPLIANCE','comparative_claim',
          '與保健食品比較的說法缺乏依據，且可能引起業者或讀者爭議，宜改為中性表述。','low','no',
          null,'no','clarify','屬用語風險。',
          '是膝關節保養最基本、也最重要的做法'),
        F('很多人都能讓膝蓋用得更久','MEDICAL_INTERPRETATION','outcome_generalization',
          '「很多人」缺乏依據，個人退化程度差異大。','low','no',
          null,'no','clarify','屬預後表達。',
          '有助延緩膝關節退化帶來的影響')
      ],
      card:[
        F('每週 150 分鐘快走、騎車或游泳','MEDICAL_INTERPRETATION','individualized_care',
          '已有明顯疼痛或腫脹者，運動量與種類需依醫師或物理治療師建議調整，卡面未說明。','low','no',
          null,'no','clarify','屬個別化提醒。',
          '每週 150 分鐘快走、騎車或游泳（疼痛時依醫囑調整）'),
        F('膝關節退化（食藥署 103 年衛教資料）','SOURCE_EVIDENCE','survey_unspecified',
          '103年為新聞發布年份，原始調查年份不明，卡面讀者可能以為是103年調查結果。','low','no',
          null,'no','clarify','屬來源性質說明。',
          '膝關節退化（食藥署衛教資料，調查年份未載）')
      ]
    },
    title_alts:[
      '膝蓋卡卡、上下樓梯痛？退化性關節炎的警訊與護膝4招',
      '爸媽膝蓋卡卡、上樓梯會痛？護膝4招一起做',
      '膝蓋痛要動得對：退化性關節炎的保養與治療選擇'
    ],
    card_title_alts:[
      ['膝蓋卡卡上樓痛？','護膝從這 4 件事做起'],
      ['膝蓋痛不是不動','是要動得對'],
      ['每 10 位長輩 2 位','膝關節退化保養指南']
    ],
    data_addon:[
      '退化性關節炎常見於膝關節、髖關節、脊椎與手指關節，以膝關節最常見。',
      '人工膝關節置換術後須注意保養與避免感染，以免需要再次置換。',
      '國健署「長者量六力」包含行動能力評估，可協助及早發現行動退化。'
    ],
    cta:'這週開始每天做10分鐘坐姿抬腿，並把每週3次、每次30分鐘以上的快走或騎車排進行事曆。'
  });
})();
