/* v6 示範主題：兒童近視（B7 女性・男性・生育與兒童）
   查證日期：2026-11-21。數據來源：衛福部／國健署新聞稿（2025-09-19、2026-06-25 學齡前兒童視力篩檢；3010120護眼原則）。
   各年級近視盛行率為國健署引用的較早期調查（106年兒童青少年視力監測），查無更新一期。
   參考方向：健康智庫〈把陽光還給孩子！一場看不見的近視保衛戰〉2026/02、〈幼兒散瞳檢查，把握近視防治黃金期〉2025/09。 */
(function(){
  const REFS = [
    {title:'近視防治向下扎根 醫師入園守護幼兒視力',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-86998-1.html'},
    {title:'學齡前兒童視力篩檢 近視防治向下扎根',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-83963-1.html'},
    {title:'護眼通關密碼「3010120」',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-79374-1.html'}
  ];
  const TABLE = {headers:['護眼原則','怎麼做'], rows:[
    ['30','近距離用眼30分鐘'],
    ['10','休息10分鐘，遠眺窗外或起身活動'],
    ['120','每天戶外活動120分鐘以上'],
    ['定期檢查','學齡前接受視力篩檢，依結果轉介追蹤']
  ]};
  const TAGS = ['兒童近視','3010120','戶外活動','視力篩檢','親子育兒'];

  const DP_SURVEY = {id:'dp-myopia-survey', type:'data_version', title:'各年級盛行率是較早期調查',
    desc:'國健署2025年新聞稿引用「以往調查」大班9%、小一19.8%、小六70.6%，未註明年份；國健署其他新聞稿標示為106年（2017年）兒童青少年視力監測調查。最新的2025學年度篩檢只涵蓋7縣市大班幼兒，不能代表全國各年級。AI 沒有替你混用兩組數字。',
    current:'大班近視9.5%、近視前期48.5%（國健署114學年度7縣市試辦篩檢）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'9.5%＋48.5%', value:'114 學年度大班', note:'7縣市試辦篩檢14,570案（目前採用）'},
      {label:'19.8%→70.6%', value:'小一→小六', note:'國健署引用之較早期全國調查（106年）'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'5歲大班近視與近視前期合計58%：兒童近視防治要從學齡前開始',
    update_date:'2026/11/21',
    intro:'國民健康署與臺大攜手7縣市推動學齡前兒童視力篩檢，114學年度由眼科醫師入園為大班幼兒進行散瞳屈光度數檢查，共完成14,570案，其中近視占9.5%、近視前期占48.5%，合計達58%。國健署引用的較早期調查也顯示，近視盛行率從國小一年級19.8%升至六年級70.6%。及早發現、轉介追蹤並建立用眼習慣，是降低未來高度近視風險的關鍵。',
    sections:[
      {heading:'國健署護眼密碼「3010120」',format:'table',table:TABLE},
      {heading:'為什麼要從學齡前開始',format:'bullets',items:[
        '近視前期代表「遠視儲備」已提早用完，未來成為近視的風險較高。',
        '國健署指出，未接受治療的近視兒童每年可能增加將近100度。',
        '國健署委託研究顯示，每週戶外活動達11小時，可減少近視發生與度數加深。'
      ]},
      {heading:'家長可以這樣做',format:'bullets',items:[
        '配合幼兒園的視力篩檢，散瞳檢查當天幫孩子準備遮陽帽或太陽眼鏡。',
        '篩檢結果異常時，依轉介至眼科追蹤，不要自行判斷。',
        '有家族近視史的孩子，更需要密切追蹤度數變化。'
      ]}
    ],
    think_tank_view:'近視一旦發生就無法逆轉，越早發生、未來度數越可能變深。比起等到上小學才發現看不清楚黑板，學齡前就開始每天2小時戶外活動、讓眼睛定時休息，才是真正的「預防」。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'篩檢數據引自國健署並標明學年度與縣市範圍，各年級盛行率標明為較早期調查，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['114學年度14,570案、近視9.5%、近視前期48.5%（國健署2026-06-25新聞稿）','小一19.8%、小六70.6%（國健署2025-09-19新聞稿引用以往調查）'],
      layout_reason:'先用表格給3010120原則，再說明為何要及早防治，最後給家長行動。',
      tone:'專業易懂', tone_reason:'家長需要具體可執行的護眼方法。',
      to_verify:['各年級盛行率為106年調查，查無更新一期全國調查','試辦篩檢僅7縣市，非全國代表性']},
    decision_points:[DP_SURVEY]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'孩子還沒上小學就近視？每天戶外2小時，護眼從幼兒園開始',
    update_date:'2026/11/21',
    intro:'國健署請眼科醫師到幼兒園幫大班小朋友檢查視力，結果發現每100個孩子裡，大約有58個已經近視或快要近視。以前的調查也發現，到了小學六年級，每10個孩子就有7個近視。好消息是，多到戶外玩、讓眼睛定時休息，就能幫孩子守住視力。',
    sections:[
      {heading:'記住護眼密碼3010120',format:'table',table:TABLE},
      {heading:'為什麼要這麼早注意？',format:'bullets',items:[
        '「近視前期」代表眼睛的本錢快用完了，很容易變成近視。',
        '近視的孩子度數每年可能加深將近100度。',
        '每週在戶外活動11小時以上，近視發生的機會比較低。'
      ]},
      {heading:'爸媽可以這樣做',format:'bullets',items:[
        '幼兒園有視力篩檢時，記得簽同意書。',
        '散瞳檢查那天準備帽子或太陽眼鏡。',
        '週末多帶孩子去公園、操場跑跑跳跳。'
      ]}
    ],
    think_tank_view:'與其擔心孩子以後要戴多厚的眼鏡，不如現在就把週末的行程排到戶外。陽光和遠方的風景，是孩子眼睛最好的保養品。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明範圍，語氣親切，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家長的擔心帶出原則與行動。', tone:'生活親切', tone_reason:'給幼兒家長閱讀。', to_verify:[]},
    decision_points:[DP_SURVEY]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'兒童近視：3010120護眼',
    update_date:'2026/11/21',
    intro:'7縣市大班幼兒篩檢，近視與近視前期合計58%（國健署114學年度）。每天戶外120分鐘、用眼30分鐘休息10分鐘。',
    sections:[
      {heading:'3010120',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '配合學齡前視力篩檢。',
        '異常時轉介眼科追蹤。'
      ]}
    ],
    think_tank_view:'戶外活動是最簡單有效的近視預防。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為原則與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_SURVEY]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'兒童近視', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'大班幼兒近視與近視前期合計 58%', primary_visual:'58%', secondary_message:'每天戶外 120 分鐘', action_priority:'3010120、學齡前篩檢'},
    headline_hook:'還沒上小學就近視？', headline_main:'護眼從幼兒園開始', title_accent:'幼兒園',
    primary_stat:{kicker:'114 學年度・大班', value:'58%', label:'近視與近視前期合計', note:'國健署 7 縣市試辦篩檢｜14,570 案'},
    secondary_stats:[
      {value:'9.5%', label:'大班幼兒已近視'},
      {value:'70.6%', label:'小六近視（較早期調查）'},
      {value:'近 100 度', label:'未治療每年可能增加'}
    ],
    action_title:'護眼密碼 3010120',
    action_cards:[
      {key:'30', text:'近距離用眼 30 分鐘'},
      {key:'10', text:'休息 10 分鐘，遠眺或起身活動'},
      {key:'120', text:'每天戶外活動 120 分鐘以上'},
      {key:'篩', text:'配合學齡前視力篩檢與追蹤'}
    ],
    carousel_suggestion:{reason:'若想把篩檢結果、護眼原則與篩檢須知分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'還沒上小學就近視？', headline_main:'大班合計 58%'},
      {layout_type:'action', headline_hook:'護眼密碼', headline_main:'3010120'},
      {layout_type:'knowledge', headline_hook:'散瞳篩檢', headline_main:'家長須知'}]},
    hashtags:['兒童近視','3010120','戶外活動','視力篩檢'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'兒童戶外活動護眼', audience:'學齡前兒童家長', scene:'家長和幼兒在陽光下的公園玩球，遠處有樹和天空',
      emotion:'輕鬆、有活力', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A parent and a young child playing ball in a sunny park with trees and open sky in the distance, cheerful and active, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['58%、9.5%、14,570案（國健署2026-06-25）','70.6%為國健署引用的較早期調查'],
      layout_reason:'關鍵訊息是「學齡前就該注意」，選 data：大班合計比例當主角，已近視與小六比例退到第二層，最後給 3010120 行動。',
      tone:'專業易懂', tone_reason:'家長需要具體行動。',
      to_verify:['70.6%為106年調查']},
    decision_points:[Object.assign({}, DP_SURVEY, {current:'58%｜114 學年度 7 縣市大班'})],
    content_check_note:'篩檢數據引自國健署並標明範圍，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'兒童近視',
    collect:{
      summary:'國健署114學年度7縣市學齡前視力篩檢發現，大班幼兒近視與近視前期合計達58%；較早期調查顯示小六近視已達7成。學齡前篩檢正逐步擴大，「每天戶外120分鐘、用眼3010、及早篩檢追蹤」是親子族群值得長期溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'58%：國健署與臺大攜手7縣市推動學齡前兒童視力篩檢，114學年度完成14,570案，大班幼兒近視占9.5%、近視前期占48.5%，合計達58%（試辦縣市，非全國代表性）。',tag:'官方統計',source:{name:'衛生福利部：近視防治向下扎根 醫師入園守護幼兒視力',url:'https://mohw.gov.tw/cp-16-86998-1.html'}},
        {item:'年度趨勢方向',desc:'70.6%：國健署引用以往調查，幼兒園大班近視盛行率9%，國小一年級增加至19.8%，國小六年級上升至70.6%（較早期調查，國健署未發布更新一期全國數據）。',tag:'官方統計',source:{name:'衛生福利部：學齡前兒童視力篩檢 近視防治向下扎根',url:'https://mohw.gov.tw/cp-16-83963-1.html'}},
        {item:'政策動向',desc:'75位眼科醫師入園篩檢：國健署114學年度啟動學齡前兒童視力篩檢試辦計畫，由眼科醫師入園提供斜弱視篩檢及散瞳屈光度數檢查，115學年度期待更多縣市加入。',tag:'官方統計',source:{name:'衛生福利部：近視防治向下扎根 醫師入園守護幼兒視力',url:'https://mohw.gov.tw/cp-16-86998-1.html'}},
        {item:'好發族群年齡層',desc:'每年可能增加近100度：國健署指出未接受治療的近視兒童度數每年可能增加將近100度，有家族近視史的孩子需密切追蹤，並建議落實用眼30分鐘休息10分鐘、每天戶外活動120分鐘。',tag:'官方統計',source:{name:'衛生福利部：學齡前兒童視力篩檢 近視防治向下扎根',url:'https://mohw.gov.tw/cp-16-83963-1.html'}}
      ],
      product_view:['機會：親子族群重視兒童視力，可結合兒童健康衛教內容。','機會：高度近視與成年後眼疾相關，可延伸至家庭健康管理。','風險：避免推薦特定眼鏡、藥水或矯正產品。'],
      marketing_view:['機會：寒暑假與開學前是溝通「戶外活動、3C管理」的時點。','機會：「3010120」好記，適合親子互動內容。','風險：避免讓家長焦慮或責怪孩子使用3C。'],
      alert_level:'low',
      alert_reason:'屬長期兒童健康議題，學齡前篩檢政策逐步擴大，適合納入親子族群年度溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('近視盛行率從國小一年級19.8%升至六年級70.6%','SOURCE_EVIDENCE','survey_year_unstated',
          '文中已註明是國健署引用的較早期調查，但沒寫出調查年份（106年），讀者無法判斷資料新舊。','low','no',
          null,'no','clarify','補上年份即可。',
          '近視盛行率從國小一年級19.8%升至六年級70.6%（106年調查）'),
        F('國健署委託研究顯示，每週戶外活動達11小時','SOURCE_EVIDENCE','study_year_unstated',
          '「每週戶外活動11小時」出自國健署較早期的委託研究（102年介入計畫），文中沒寫研究年份與對象。','low','no',
          null,'no','clarify','補上研究年份與對象即可。',
          '國健署102年委託研究（國小低年級學童）顯示，每週戶外活動達11小時'),
        F('大約有58個已經近視或快要近視','MEDICAL_INTERPRETATION','scope_unstated',
          '生活親切版沒有說明這是7縣市試辦篩檢結果，讀者可能以為是全國大班幼兒的比例。','low','no',
          null,'no','clarify','補上範圍即可。',
          '在7個試辦縣市中，大約有58個已經近視或快要近視'),
        F('7縣市大班幼兒篩檢，近視與近視前期合計58%','MEDICAL_INTERPRETATION','term_unexplained',
          '簡潔有力版沒有解釋「近視前期」，讀者可能把58%都當成已近視。','low','no',
          null,'no','clarify','補上已近視比例即可。',
          '7縣市大班幼兒篩檢，已近視9.5%、近視前期48.5%')
      ],
      card:[
        F('小六近視（較早期調查）','SOURCE_EVIDENCE','survey_year_unstated',
          '卡面標示「較早期調查」但沒有年份，與上方114學年度數字並列，讀者可能以為是同一年資料。','low','no',
          null,'no','clarify','補上年份即可。',
          '小六近視（106 年調查）'),
        F('近視與近視前期合計','MEDICAL_INTERPRETATION','term_unexplained',
          '主數字58%包含「近視前期」，卡面沒有解釋，讀者可能以為58%的幼兒已近視。','medium','no',
          null,'no','clarify','可在標籤區分已近視比例。',
          '近視 9.5%＋近視前期 48.5%')
      ]
    },
    title_alts:[
      '5歲大班近視與近視前期合計58%：兒童近視防治要從學齡前開始',
      '孩子還沒上小學就近視？每天戶外2小時，護眼從幼兒園開始',
      '兒童近視怎麼預防？3010120護眼密碼與學齡前視力篩檢'
    ],
    card_title_alts:[
      ['還沒上小學就近視？','護眼從幼兒園開始'],
      ['護眼密碼','3010120'],
      ['每天戶外 2 小時','孩子視力守得住']
    ],
    data_addon:[
      '114學年度7縣市學齡前視力篩檢14,570案：近視9.5%、近視前期48.5%（國健署）。',
      '國健署引用以往調查：大班9%、小一19.8%、小六70.6%。',
      '國健署護眼原則：用眼30分鐘休息10分鐘，每天戶外活動120分鐘以上。'
    ],
    cta:'這週起每天帶孩子到戶外玩滿2小時，並確認幼兒園的視力篩檢時間。'
  });
})();
