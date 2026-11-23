/* v6 示範主題：兒童 3C 使用（B7 女性・男性・生育與兒童）
   查證日期：2026-11-21。數據來源：國健署《110年國民健康訪問調查報告》（2024-10-28公布，第2篇第3章第6節「2至11歲兒童視力健康相關行為」）、
   國健署新聞稿（2017-01-31「假期少看螢幕多走戶外」2024年更新、2018-06-13、2021-04-08）。
   110年調查為目前最新一期；106年兒童青少年視力監測調查只保留110年調查未涵蓋的「近視風險2.34倍」並標明年份。
   參考方向：健康智庫〈陪伴，可降低3C對孩子的傷害〉2022/11、〈參與青少年 3C 使用 維持身心健康〉2022/08。 */
(function(){
  const REFS = [
    {title:'民國110年國民健康訪問調查（110年國民健康訪問調查報告）',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=364&pid=18514'},
    {title:'假期少看螢幕多走戶外 親子同護眼 遠離惡視力',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-9361-1.html'},
    {title:'幼童手機使用率超過4成 近視防治 家長動起來',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/fp-3795-41749-1.html'},
    {title:'手機還我 孩子不哭~用創意妙招 解鎖3C育兒困境',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/fp-16-58958-1.html'}
  ];
  const TABLE = {headers:['國健署「2不3要」','怎麼做'], rows:[
    ['一不','未滿2歲不看螢幕'],
    ['二不','2歲以上每日看螢幕不超過1小時'],
    ['一要','看書保持35至40公分距離'],
    ['二要','近距離用眼每30分鐘休息10分鐘'],
    ['三要','每日戶外活動2至3小時']
  ]};
  const TAGS = ['兒童3C','螢幕時間','近視','親子育兒','2不3要'];

  const DP_SCOPE = {id:'dp-3c-scope', type:'data_scope', title:'「3C」包含看電視',
    desc:'國健署110年國民健康訪問調查的「每日使用3C超過1小時」包含看電視、使用電腦及使用手機、平板等；106年兒童青少年視力監測調查則單獨統計手機使用。兩次調查的定義與對象不同，AI 以110年調查為主，不把兩者直接比較成趨勢。',
    current:'2至11歲兒童非假日每日使用3C超過1小時77.7%（110年國民健康訪問調查，含看電視）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'77.7%／91.5%', value:'110 年・2 至 11 歲', note:'非假日／假日每日3C超過1小時，含看電視（目前採用）'},
      {label:'44.9%', value:'106 年・幼兒園', note:'平日放學後使用手機比例，僅手機'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'近8成兒童平日螢幕超過1小時：國健署「2不3要」與最新調查',
    update_date:'2026/11/21',
    intro:'依國民健康署110年國民健康訪問調查（2024年公布），2至11歲兒童每日使用3C（含看電視、電腦、手機與平板）超過1小時的比例，非假日為77.7%、假日達91.5%，小學兒童假日更高達94.0%。同一調查顯示2至11歲兒童近視率為24.1%，有近視的兒童花在手機、平板與補習等靜態活動的時間較多。國健署建議「未滿2歲不看螢幕、2歲以上每日不超過1小時」。',
    sections:[
      {heading:'國健署「2不3要」',format:'table',table:TABLE},
      {heading:'調查告訴我們什麼',format:'bullets',items:[
        '尚未入小學兒童每日3C超過1小時：非假日76.5%、假日87.4%；小學兒童非假日78.5%、假日94.0%。',
        '主要照顧者知道「2歲以下避免看螢幕」「2歲以上每日不超過1小時」的比例達8成8以上，但實際做到的家庭仍是少數。',
        '國健署106年兒童青少年視力監測調查曾發現，每天3C使用1小時以上的學童，近視風險是未滿1小時者的2.34倍。'
      ]},
      {heading:'家長可以這樣做',format:'bullets',items:[
        '家長以身作則，放下3C、多陪孩子到戶外活動。',
        '不要用手機、平板安撫孩子情緒，也避免用3C陪伴幼兒。',
        '需要使用時，和孩子一起約定使用規則；國健署編有《手機還我 孩子不哭》手冊可參考。'
      ]}
    ],
    think_tank_view:'調查顯示，家長幾乎都知道「每天不超過1小時」，但近8成孩子平日就超過了。知道和做到之間的落差，正是家庭可以著力的地方：與其禁止，不如和孩子一起訂規則、一起走出戶外，讓螢幕時間變成可以討論的家庭約定。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'使用比例與近視率引自國健署110年國民健康訪問調查並標明含看電視，2.34倍標明為106年調查，未推薦特定產品或App，未使用療效保證用語。',
    ai_rationale:{basis:['77.7%、91.5%、76.5%、78.5%、94.0%、近視24.1%、照顧者認知8成8（國健署110年國民健康訪問調查報告）','2不3要（國健署2017年新聞稿，2024年更新）','2.34倍（國健署106年兒童青少年視力監測調查）'],
      layout_reason:'先用表格說明2不3要，再整理最新調查，最後給家長做法。',
      tone:'專業易懂', tone_reason:'家長需要具體的時間門檻。',
      to_verify:['110年調查的3C定義含看電視，與106年僅手機的定義不同']},
    decision_points:[DP_SCOPE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'孩子一直滑手機怎麼辦？「2不3要」親子護眼約定',
    update_date:'2026/11/21',
    intro:'國健署最新的國民健康訪問調查發現，2到11歲的孩子，平日每天看電視、玩手機平板加起來超過1小時的將近8成，假日更超過9成。國健署建議：未滿2歲不看螢幕，2歲以上每天不要超過1小時。很多爸媽都知道這個原則，難的是做到。',
    sections:[
      {heading:'2不3要，全家一起做',format:'table',table:TABLE},
      {heading:'3C用多了會怎樣？',format:'bullets',items:[
        '同一份調查中，有近視的孩子花在手機、平板的時間比較多。',
        '國健署提醒，也可能影響語言發展、睡眠和情緒。'
      ]},
      {heading:'爸媽可以這樣做',format:'bullets',items:[
        '自己先放下手機，陪孩子玩。',
        '孩子哭鬧時，用抱抱和聊天代替手機。',
        '和孩子一起訂好使用時間，用計時器提醒。'
      ]}
    ],
    think_tank_view:'孩子會模仿大人。全家吃飯時一起把手機放進籃子裡，就是最好的開始。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署110年調查並標明出處，語氣親切，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以孩子滑手機的日常情境帶出約定與做法。', tone:'生活親切', tone_reason:'給家長閱讀。', to_verify:[]},
    decision_points:[DP_SCOPE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'兒童3C：2不3要',
    update_date:'2026/11/21',
    intro:'2至11歲兒童平日每日3C超過1小時77.7%、假日91.5%（國健署110年國民健康訪問調查）。未滿2歲不看螢幕、2歲以上每日不超過1小時。',
    sections:[
      {heading:'2不3要',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '家長以身作則。',
        '每天戶外活動2至3小時。'
      ]}
    ],
    think_tank_view:'少螢幕、多戶外，從家長開始。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署110年調查，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為約定與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_SCOPE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'兒童 3C 使用', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'近 8 成兒童平日螢幕超過 1 小時', primary_visual:'77.7%', secondary_message:'假日更達 91.5%', action_priority:'2不3要'},
    headline_hook:'孩子一直滑手機？', headline_main:'記住 2不3要 護眼約定', title_accent:'2不3要',
    primary_stat:{kicker:'110 年調查・2 至 11 歲', value:'77.7%', label:'非假日每日 3C 超過 1 小時', note:'國健署國民健康訪問調查｜含看電視'},
    chart:{type:'bar', title:'每日 3C 超過 1 小時（%）', points:[
      {label:'學前・平日', value:76.5, display:'76.5'},
      {label:'小學・平日', value:78.5, display:'78.5'},
      {label:'學前・假日', value:87.4, display:'87.4'},
      {label:'小學・假日', value:94.0, display:'94.0', highlight:true}
    ], note:'國健署 110 年國民健康訪問調查（2024 公布）'},
    secondary_stats:[
      {value:'24.1%', label:'2 至 11 歲兒童近視率'},
      {value:'8 成 8', label:'照顧者知道每日不超過 1 小時'}
    ],
    action_title:'2不3要',
    action_cards:[
      {key:'不', text:'未滿 2 歲不看螢幕'},
      {key:'不', text:'2 歲以上每日不超過 1 小時'},
      {key:'要', text:'用眼 30 分鐘休息 10 分鐘'},
      {key:'要', text:'每日戶外活動 2 至 3 小時'}
    ],
    carousel_suggestion:{reason:'若想把調查數據、影響與家長做法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'孩子螢幕時間多長？', headline_main:'近 8 成平日超過 1 小時'},
      {layout_type:'action', headline_hook:'護眼約定', headline_main:'2不3要'},
      {layout_type:'knowledge', headline_hook:'不只近視', headline_main:'語言、睡眠、情緒'}]},
    hashtags:['兒童3C','螢幕時間','近視','親子育兒'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'親子遠離螢幕', audience:'學齡前與學齡兒童家長', scene:'家長和孩子把手機放進客廳的收納籃，一起拿著球準備出門',
      emotion:'輕鬆、有默契', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A parent and child putting their phones into a basket in the living room and heading out together with a ball, relaxed and in sync, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['77.7%、76.5%、78.5%、87.4%、94.0%、24.1%、8成8（國健署110年國民健康訪問調查報告）'],
      layout_reason:'關鍵訊息是「知道但做不到」，選 data：平日超過1小時的比例當主角，學制與假日差異放右側，近視率與照顧者認知退到第二層，最後給 2不3要。',
      tone:'專業易懂', tone_reason:'避免責怪家長。',
      to_verify:['3C定義含看電視']},
    decision_points:[Object.assign({}, DP_SCOPE, {current:'77.7%｜110 年 2 至 11 歲非假日'})],
    content_check_note:'數據引自國健署110年國民健康訪問調查並標明定義，未推薦特定產品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'兒童 3C 使用',
    collect:{
      summary:'國健署110年國民健康訪問調查顯示，2至11歲兒童非假日每日使用3C超過1小時77.7%、假日91.5%，兒童近視率24.1%；照顧者多數知道「2歲以上每日不超過1小時」，但實際做到的仍是少數。「親子共訂3C約定、多戶外」是親子族群值得長期溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'77.7%：國健署110年國民健康訪問調查（2024年公布）顯示，2至11歲兒童非假日每日使用3C（含看電視、電腦、手機與平板）超過1小時的比例為77.7%，假日為91.5%。',tag:'官方統計',source:{name:'衛生福利部國民健康署：民國110年國民健康訪問調查',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=364&pid=18514'}},
        {item:'年度趨勢方向',desc:'94.0%（小學假日）：同一調查中，尚未入小學兒童非假日76.5%、假日87.4%，小學兒童非假日78.5%、假日94.0%，年齡越大、假日螢幕時間越長。',tag:'官方統計',source:{name:'衛生福利部國民健康署：民國110年國民健康訪問調查',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=364&pid=18514'}},
        {item:'政策動向',desc:'2不3要：國健署建議未滿2歲不看螢幕、2歲以上每日看螢幕不超過1小時、看書保持35至40公分、用眼30分鐘休息10分鐘、每日戶外活動2至3小時。',tag:'官方統計',source:{name:'衛生福利部：假期少看螢幕多走戶外 親子同護眼 遠離惡視力',url:'https://mohw.gov.tw/cp-16-9361-1.html'}},
        {item:'好發族群年齡層',desc:'24.1%：110年調查2至11歲兒童近視率24.1%（小學兒童35.3%），有近視的兒童花在手機、平板與補習等靜態活動的時間較多，主要照顧者知道螢幕時間原則者達8成8以上。',tag:'官方統計',source:{name:'衛生福利部國民健康署：民國110年國民健康訪問調查',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=364&pid=18514'}}
      ],
      product_view:['機會：親子族群關注3C教養，可結合兒童健康衛教內容。','機會：家庭健康管理服務可加入視力檢查提醒。','風險：避免推薦特定護眼產品或App。'],
      marketing_view:['機會：寒暑假前是溝通「少螢幕多戶外」的時點。','機會：「知道但做不到」是能引起家長共鳴的切入點。','風險：避免責怪家長或使用恐嚇語氣。'],
      alert_level:'low',
      alert_reason:'屬長期親子健康議題，最新一期國健調查已公布，適合在寒暑假前溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('但實際做到的家庭仍是少數','SOURCE_EVIDENCE','inference_unlabeled',
          '「實際做到的是少數」是由77.7%反推的說法，調查本身沒有直接統計「知道且做到」的家庭比例，文中沒有說明是推論。','low','no',
          null,'no','clarify','改為呈現兩個數字讓讀者自行對照。',
          '但同一調查中，近8成兒童平日螢幕時間仍超過1小時'),
        F('近視風險是未滿1小時者的2.34倍','MEDICAL_INTERPRETATION','causal_overreach',
          '2.34倍是106年調查的相關性結果，文中與110年數據並列，讀者可能誤以為是110年調查的因果結論。','low','no',
          null,'no','clarify','補上「相關」與調查名稱。',
          '近視風險是未滿1小時者的2.34倍（106年調查，屬相關性）'),
        F('平日每天看電視、玩手機平板加起來超過1小時的將近8成','SOURCE_EVIDENCE','year_unstated',
          '生活親切版寫「最新的調查」但沒有寫是110年的調查、2024年公布，讀者無法判斷資料時點。','low','no',
          null,'no','clarify','補上年份即可。',
          '110年的調查中，平日每天看電視、玩手機平板加起來超過1小時的將近8成'),
        F('2至11歲兒童平日每日3C超過1小時77.7%','MEDICAL_INTERPRETATION','definition_unstated',
          '簡潔有力版沒有說明這裡的3C包含看電視，讀者可能以為只算手機平板。','low','no',
          null,'no','clarify','補上定義即可。',
          '2至11歲兒童平日每日3C（含看電視）超過1小時77.7%')
      ],
      card:[
        F('照顧者知道每日不超過 1 小時','SOURCE_EVIDENCE','rounding',
          '「8 成 8」是由88.3%四捨五入，另一題「2歲以下避免看螢幕」為89.3%，卡面沒說明是哪一題。','low','no',
          null,'no','clarify','標示題目即可。',
          '照顧者知道 2 歲以上每日不超過 1 小時'),
        F('國健署國民健康訪問調查｜含看電視','SOURCE_EVIDENCE','sample_unstated',
          '主數字註腳沒有寫是抽樣調查、以主要照顧者回答，讀者可能以為是普查或實際測量。','low','no',
          null,'no','clarify','補上調查方式即可。',
          '國健署 110 年國民健康訪問調查（照顧者回答）｜含看電視')
      ]
    },
    title_alts:[
      '近8成兒童平日螢幕超過1小時：國健署「2不3要」與最新調查',
      '孩子一直滑手機怎麼辦？「2不3要」親子護眼約定',
      '兒童3C使用與近視：110年國民健康訪問調查重點'
    ],
    card_title_alts:[
      ['孩子一直滑手機？','記住 2不3要 護眼約定'],
      ['近 8 成平日超過 1 小時','螢幕時間要節制'],
      ['未滿 2 歲不看螢幕','2 歲以上每天 1 小時內']
    ],
    data_addon:[
      '國健署110年國民健康訪問調查：2至11歲兒童每日3C超過1小時，非假日77.7%、假日91.5%；小學兒童假日94.0%。',
      '同一調查：2至11歲兒童近視率24.1%，小學兒童35.3%，尚未入小學6.5%。',
      '國健署2不3要：未滿2歲不看螢幕、2歲以上每日不超過1小時、35至40公分、30分鐘休息10分鐘、每日戶外2至3小時。'
    ],
    cta:'今晚和孩子一起訂好3C使用時間，吃飯時全家手機都放進籃子裡。'
  });
})();
