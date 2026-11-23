/* v6 示範主題：全穀雜糧（B9 飲食營養與運動）
   查證日期：2026-11-20。數據來源：國健署《國民營養健康狀況變遷調查成果報告2017-2020年》第三章第三節3.1（全穀雜糧攝取份數接近建議量、豆魚蛋肉高於建議量）、國健署我的餐盤新聞稿（至少1/3未精製）、國健署營養問答〈全穀和精製穀類相比，營養差在哪？〉〈外食中主食如何吃得更健康？〉（2023-03-07）。
   注意：未查到國人「未精製全穀」攝取比例的官方統計。2017-2020年報告未提供「超過建議量比率」，改以報告內文結論說明；2026-11-22移除原用的2013-2016年49%。
   參考方向：健康智庫〈你也不吃米嗎？不可不知米的重要性〉2024/07、〈掌握燕麥營養價值與食用指南〉2024/09。 */
(function(){
  const REFS = [
    {title:'國民營養健康狀況變遷調查成果報告2017-2020年',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=3999&pid=15562'},
    {title:'國健署首度公布國人「我的餐盤」 聰明吃 營養跟著來',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-16-41108-1.html'},
    {title:'全穀和精製穀類相比，營養差在哪？',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4560&pid=16715'},
    {title:'外食中主食如何吃得更健康？營養師教你輕鬆吃到全穀及未精製雜糧！',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4560&pid=16720'}
  ];
  const TABLE = {headers:['穀物','保留的部分'], rows:[
    ['糙米','去除穀殼，保留糠層、胚芽與胚乳'],
    ['胚芽米','保留胚芽與胚乳'],
    ['白米','去除胚芽、糠層、穀殼，只剩胚乳（精製穀物）'],
    ['其他未精製雜糧','燕麥、全麥製品、玉米、甘藷等']
  ]};
  const TAGS = ['全穀雜糧','糙米','未精製','膳食纖維','均衡飲食'];

  const PRO = {
    content_type:'健康文章',
    title:'主食至少1/3換成全穀：糙米、燕麥、地瓜怎麼吃',
    update_date:'2026/11/20',
    intro:'國民健康署「我的餐盤」建議「飯跟蔬菜一樣多」，每餐主食約比一個拳頭多一點，且一整天至少1/3為全穀及未精製雜糧，例如糙米、全麥製品、燕麥、玉米、甘藷。依國健署2017-2020年國民營養健康狀況變遷調查，國人全穀雜糧的攝取份數大致接近飲食指南的建議量；但國健署也提醒，外食主食多為白飯、麵條等精製澱粉，全穀及未精製雜糧選項較少。',
    sections:[
      {heading:'精製與未精製差在哪',format:'table',table:TABLE},
      {heading:'為什麼要換成全穀',format:'bullets',items:[
        '白飯、麵食等精製澱粉升糖指數較高，糖類吸收快，血糖容易不穩定。',
        '國健署指出攝取過多精製澱粉，血壓、血脂也更容易失控。',
        '全穀保留糠層與胚芽，膳食纖維與營養素較多。'
      ]},
      {heading:'日常這樣換',format:'bullets',items:[
        '在家煮飯時把部分白米換成糙米或雜糧米。',
        '早餐選燕麥、全麥吐司，或以地瓜、玉米取代部分精製主食。',
        '外食時留意主食份量，有雜糧飯、地瓜等選項就優先選。',
        '腸胃不適應時循序漸進增加比例，並多喝水。'
      ]}
    ],
    think_tank_view:'全穀不是要「多吃」，而是要「換著吃」：份量不變，把一部分白飯換成糙米或地瓜。對外食族來說，從早餐的燕麥或全麥吐司開始，是最容易持續的第一步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'建議份量與比例引自國健署我的餐盤，攝取狀況引自國健署2017-2020年調查成果報告，未點名特定品牌。',
    ai_rationale:{basis:['至少1/3未精製全穀（國健署我的餐盤）','全穀雜糧攝取份數接近建議量（國健署2017-2020年調查）'],
      layout_reason:'先用表格說明精製與未精製的差別，再說明為什麼要換，最後給在家與外食的替換方法。',
      tone:'專業易懂', tone_reason:'需具體說明比例與替換方式。',
      to_verify:['未查到國人未精製全穀攝取比例的官方統計']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'白飯吃太多？把1/3換成糙米、地瓜就好',
    update_date:'2026/11/20',
    intro:'國健署建議，每天吃的飯麵裡，至少1/3要換成糙米、燕麥、地瓜、玉米這類「全穀和未精製雜糧」。國健署2017-2020年調查發現，大家主食的份量其實差不多夠了，問題是外食常常只有白飯、白麵這類精製澱粉可以選。',
    sections:[
      {heading:'這些米差在哪？',format:'table',table:TABLE},
      {heading:'為什麼要換？',format:'bullets',items:[
        '白飯白麵吃下去血糖上升快。',
        '精製澱粉吃太多，血壓、血脂也容易失控。',
        '糙米、燕麥保留比較多纖維和營養。'
      ]},
      {heading:'這樣換最簡單',format:'bullets',items:[
        '煮飯時加一些糙米或雜糧米。',
        '早餐吃燕麥或全麥吐司。',
        '外食有地瓜、雜糧飯就選它。',
        '剛開始腸胃不習慣，就慢慢加、多喝水。'
      ]}
    ],
    think_tank_view:'份量不用變，換一部分就好。今晚煮飯就加一把糙米試試看。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署並標明調查年份，未點名特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以「白飯吃太多」的生活情境切入。', tone:'生活親切', tone_reason:'給家庭與外食族。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'全穀雜糧：主食至少1/3未精製',
    update_date:'2026/11/20',
    intro:'國健署建議主食至少1/3為全穀及未精製雜糧。2017-2020年調查顯示國人全穀雜糧份數接近建議量，重點在換成未精製。',
    sections:[
      {heading:'精製 vs 未精製',format:'table',table:TABLE},
      {heading:'原因',format:'bullets',items:[
        '精製澱粉升糖快。',
        '全穀纖維較多。'
      ]},
      {heading:'做法',format:'bullets',items:[
        '白米混糙米。',
        '早餐選燕麥、全麥。'
      ]}
    ],
    think_tank_view:'份量不變、換著吃，是最容易持續的全穀策略。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署並標明年份，未點名特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為比較、原因、做法三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'全穀雜糧', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'主食至少 1/3 換成全穀', primary_visual:'1/3', secondary_message:'外食主食多為精製澱粉', action_priority:'白米混糙米、早餐選燕麥'},
    headline_hook:'白飯吃太多？', headline_main:'主食 1/3 換成全穀', title_accent:'1/3',
    hero_message:'至少 1/3', hero_support:'主食換成全穀及未精製雜糧（國健署我的餐盤）',
    primary_stat:{value:'1/3', label:'主食至少換成未精製全穀', note:'國健署我的餐盤｜如糙米、燕麥、地瓜'},
    action_title:'這樣換著吃',
    action_cards:[
      {key:'米', text:'煮飯時部分白米換成糙米'},
      {key:'早', text:'早餐選燕麥或全麥吐司'},
      {key:'薯', text:'用地瓜、玉米取代部分主食'},
      {key:'外', text:'外食有雜糧飯、地瓜就優先選'}
    ],
    notice:'剛開始吃全穀腸胃不適應，**循序漸進、多喝水**。',
    carousel_suggestion:{reason:'若想把精製差異、健康影響與替換方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'糙米 vs 白米', headline_main:'差在糠層與胚芽'},
      {layout_type:'knowledge', headline_hook:'外食主食', headline_main:'多為精製澱粉'},
      {layout_type:'action', headline_hook:'換著吃', headline_main:'主食 1/3 換全穀'}]},
    hashtags:['全穀雜糧','糙米','未精製','均衡飲食'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'全穀主食', audience:'家庭與外食族', scene:'一碗糙米雜糧飯旁邊放著烤地瓜、玉米與一碗燕麥',
      emotion:'溫暖、樸實', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A bowl of brown multigrain rice next to a roasted sweet potato, corn on the cob and a bowl of oats, warm and wholesome, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['至少1/3未精製（國健署我的餐盤）'],
      layout_reason:'重點是替換方法，選 action：4 個替換行動當主角，1/3 當背景數字。',
      tone:'專業易懂', tone_reason:'具體可做。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自國健署並標明年份，未點名特定品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'全穀雜糧',
    collect:{
      summary:'國健署建議主食「飯跟蔬菜一樣多」，且至少1/3為全穀及未精製雜糧；國健署2017-2020年調查顯示國人全穀雜糧份數大致接近建議量，但外食主食多為精製澱粉。精製澱粉升糖快、與三高控制有關，「份量不變、換著吃」是溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'接近建議量：國健署2017-2020年國民營養健康狀況變遷調查（3.1節）指出，國人全穀雜糧攝取份數大致接近飲食指南稍低至適度活動量的建議量。',tag:'官方統計',source:{name:'國健署：國民營養健康狀況變遷調查成果報告2017-2020年',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=3999&pid=15562'}},
        {item:'政策動向',desc:'至少1/3未精製：國健署我的餐盤建議全穀雜糧份量約與蔬菜相同，且至少1/3為糙米、全麥製品、燕麥、玉米、甘藷等未精製全穀雜糧。',tag:'官方統計',source:{name:'國健署：首度公布國人「我的餐盤」',url:'https://www.mohw.gov.tw/cp-16-41108-1.html'}},
        {item:'好發族群年齡層',desc:'外食族：國健署指出外食主食多為白飯、麵條等精製澱粉，全穀及未精製雜糧選項較少，膳食纖維攝取因此降低。',tag:'官方統計',source:{name:'國健署：外食中主食如何吃得更健康？',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4560&pid=16720'}},
        {item:'年度趨勢方向',desc:'升糖較快：國健署說明精製澱粉升糖指數較高、糖類吸收快，攝取過多也使血壓、血脂更容易失控，改吃全穀有助預防三高。',tag:'官方統計',source:{name:'國健署：外食中主食如何吃得更健康？',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4560&pid=16720'}}
      ],
      product_view:['機會：全穀飲食與三高預防相關，可結合慢性病健康管理。','機會：「白米混糙米」簡單易推廣。','風險：避免推薦特定穀物品牌；腎臟病等特殊飲食需求者需依醫囑。'],
      marketing_view:['機會：減醣話題熱門，可導向「換對主食」而非不吃主食。','機會：外食族的主食選擇是共鳴點。','風險：不宜說成「國人主食吃太多」，最新調查顯示份數大致接近建議量。'],
      alert_level:'low',
      alert_reason:'屬長期飲食議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國人全穀雜糧的攝取份數大致接近飲食指南的建議量','DATA_FACTUAL_ACCURACY','benchmark_unstated',
          '建議量依活動量等級（稍低、適度）不同，報告比較的是群體平均；文中未說明比較基準，個人可能高於或低於建議量。','low','no',
          null,'no','clarify','屬比較基準說明。',
          '國人全穀雜糧的攝取份數平均大致接近飲食指南建議量（依活動量而異）',
          ['大家主食的份量其實差不多夠了','國人全穀雜糧份數接近建議量']),
        F('國健署指出攝取過多精製澱粉，血壓、血脂也更容易失控','SOURCE_EVIDENCE','secondary_citation',
          '國健署原文為「研究報告指出」，未列研究出處；文中改寫為國健署直接指出，出處層級被拉高。','low','no',
          null,'no','clarify','屬出處層級。',
          '國健署引述研究指出，攝取過多精製澱粉，血壓、血脂也更容易失控',
          ['精製澱粉吃太多，血壓、血脂也容易失控']),
        F('腸胃不適應時循序漸進增加比例，並多喝水','SOURCE_EVIDENCE','unsourced_advice',
          '此建議未見於本文引用的國健署資料。','low','no',
          null,'no','clarify','屬常見營養衛教說法。',
          null,
          ['剛開始腸胃不習慣，就慢慢加、多喝水。'])
      ],
      card:[
        F('主食至少換成未精製全穀','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '腎臟病等需限磷限鉀者，未精製全穀攝取需依醫囑，卡面未提醒。','low','no',
          null,'no','clarify','屬適用對象說明。',
          '主食至少換成未精製全穀（特殊疾病依醫囑）'),
        F('剛開始吃全穀腸胃不適應，**循序漸進、多喝水**。','SOURCE_EVIDENCE','unsourced_advice',
          '此建議未見於引用的國健署資料。','low','no',
          null,'no','clarify','屬常見衛教說法。',
          null)
      ]
    },
    title_alts:[
      '主食至少1/3換成全穀：糙米、燕麥、地瓜怎麼吃',
      '白飯吃太多？把1/3換成糙米、地瓜就好',
      '外食主食多精製：全穀雜糧換著吃'
    ],
    card_title_alts:[
      ['白飯吃太多？','主食 1/3 換成全穀'],
      ['糙米 vs 白米','差在糠層與胚芽'],
      ['換著吃','份量不變、改選全穀']
    ],
    data_addon:[
      '107年起「全穀根莖類」用詞修正為「全穀雜糧類」（國健署每日飲食指南）。',
      '2017-2020年調查19-44歲男性豆魚蛋肉每日攝取9.8份，高於建議的6-7份（國健署）。',
      '每餐主食約比一個拳頭多一點（國健署）。'
    ],
    cta:'今晚煮飯時，把三分之一的白米換成糙米或雜糧米試試看。'
  });
})();
