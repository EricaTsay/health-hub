/* v6 示範主題：運動傷害處置（B9 飲食營養與運動）
   查證日期：2026-11-20。數據來源：臺北榮民總醫院玉里分院衛教〈淺談運動傷害處理原則〉（PRICE原則，2020-11-23更新）、國健署問答（運動前暖身5至10分鐘、不適就醫）、運動部全民運動署114年運動現況調查（運動人口83.3%）。
   注意：未查到國內官方的運動傷害發生率統計，也未查到國健署或運動部的官方急性處置指引；冰敷時間各醫院說法不一，未寫具體分鐘數。
   參考方向：健康智庫〈跑步不慎扭傷？運動傷害處置指南〉2024/12。 */
(function(){
  const REFS = [
    {title:'淺談運動傷害處理原則',source:'臺北榮民總醫院玉里分院',url:'https://org.vghtpe.gov.tw/vhyl/freePage/-1/54'},
    {title:'運動越激烈越能預防心血管疾病?',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=127&pid=13267'},
    {title:'114年運動現況調查成果發表 規律運動人口再增加',source:'運動部全民運動署',url:'https://www.sa.gov.tw/News_Content/362/20136'}
  ];
  const TABLE = {headers:['PRICE','怎麼做'], rows:[
    ['P 保護','立即停止運動，保護受傷部位，避免進一步傷害'],
    ['R 休息','讓患部休息，不勉強繼續活動'],
    ['I 冰敷','急性期冰敷可消腫止痛，冰塊用毛巾包覆避免凍傷'],
    ['C 壓迫','彈性繃帶由末梢往心臟方向包紮，不宜太緊'],
    ['E 抬高','把患部抬高，幫助血液回流消腫']
  ]};
  const TAGS = ['運動傷害','PRICE原則','扭傷','冰敷','運動安全'];

  const PRO = {
    content_type:'健康文章',
    title:'運動扭傷怎麼辦？記住PRICE五步驟',
    update_date:'2026/11/20',
    intro:'運動部全民運動署114年運動現況調查顯示，國人參與運動人口比例達83.3%，運動越普及，扭傷、挫傷也越常見。臺北榮民總醫院衛教資料指出，疑似挫傷或扭傷時，最基本的處置口訣是PRICE：保護、休息、冰敷、壓迫、抬高，其中最重要的是立即停止運動並保護患部。',
    sections:[
      {heading:'急性運動傷害PRICE原則',format:'table',table:TABLE},
      {heading:'包紮與冰敷的注意事項',format:'bullets',items:[
        '包紮後隨時觀察手指或腳趾，若越來越麻痛、顏色變白或變紫，應放鬆重新固定。',
        '放鬆後仍無法恢復，應儘速就醫。',
        '有研究認為冰敷可能影響發炎修復，但實務上急性期短暫冰敷仍有止腫鎮痛的好處。'
      ]},
      {heading:'預防勝於治療',format:'bullets',items:[
        '運動前至少暖身5至10分鐘（國健署建議）。',
        '依體能漸進增加運動量，不做超出能力的動作。',
        '運動中出現不適持續未改善，應儘速就醫。',
        '疑似骨折、關節變形或無法承重時，不要自行處理，儘速就醫。'
      ]}
    ],
    think_tank_view:'運動傷害當下最常見的錯誤是「忍一下繼續」。PRICE的第一步其實就是停下來；先保護、再處理，才能避免小扭傷變成長期的反覆受傷。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'PRICE原則引自臺北榮民總醫院衛教資料，暖身建議引自國健署，運動人口引自運動部114年調查，未涉及特定護具或藥品。',
    ai_rationale:{basis:['PRICE原則（臺北榮總玉里分院衛教）','114年運動人口83.3%（運動部）'],
      layout_reason:'先用表格教PRICE五步驟，再說明包紮與冰敷注意事項，最後給預防與就醫時機。',
      tone:'專業易懂', tone_reason:'急性處置需要明確步驟。',
      to_verify:['國內官方查無急性運動傷害處置指引','冰敷時間各醫院說法不一']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'打球扭到腳先別揉！PRICE五步驟這樣做',
    update_date:'2026/11/20',
    intro:'越來越多人運動，114年調查有83.3%的國人有參與運動，扭到腳、撞到瘀青也很常見。這時候先別急著揉或繼續打，醫院衛教建議記住PRICE：保護、休息、冰敷、壓迫、抬高。第一件事就是停下來。',
    sections:[
      {heading:'扭傷了，這樣做',format:'table',table:TABLE},
      {heading:'包紮冰敷小提醒',format:'bullets',items:[
        '包好後看看腳趾手指，越來越麻、變白變紫就鬆開重包。',
        '鬆開還是不好，就要去看醫生。',
        '冰塊要用毛巾包著，不要直接貼皮膚。'
      ]},
      {heading:'下次這樣預防',format:'bullets',items:[
        '運動前暖身5到10分鐘。',
        '慢慢增加運動量，不要逞強。',
        '覺得骨頭怪怪的、腳不能踩地，馬上就醫。'
      ]}
    ],
    think_tank_view:'受傷當下最難的是停下來。先停、先保護，才能早點回到球場。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'處置原則引自醫院衛教，暖身建議引自國健署，未涉及特定護具或藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以打球扭傷情境切入。', tone:'生活親切', tone_reason:'給運動愛好者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'運動傷害：PRICE五步驟',
    update_date:'2026/11/20',
    intro:'疑似扭傷、挫傷：保護、休息、冰敷、壓迫、抬高。最重要的是立即停止運動。',
    sections:[
      {heading:'PRICE',format:'table',table:TABLE},
      {heading:'注意',format:'bullets',items:[
        '包紮後觀察末梢循環。',
        '疑似骨折儘速就醫。'
      ]},
      {heading:'預防',format:'bullets',items:[
        '暖身5-10分鐘。',
        '漸進增加運動量。'
      ]}
    ],
    think_tank_view:'先停、先保護，避免小傷變大傷。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自醫院衛教與國健署，未涉及特定商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為原則、注意、預防三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'運動傷害處置', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'扭傷先停下來，記住 PRICE', primary_visual:'PRICE', secondary_message:'疑似骨折立即就醫', action_priority:'暖身與漸進'},
    headline_hook:'運動扭傷別硬撐', headline_main:'PRICE 五步驟一次看', title_accent:'PRICE',
    hero_message:'第一步：立刻停下來', hero_support:'保護受傷部位，避免進一步傷害（醫院衛教）',
    knowledge_title:'PRICE 五步驟', knowledge_note:'疑似骨折、無法承重，**儘速就醫**',
    knowledge_cards:[
      {label:'保護 Protect', icon:'shield', lines:['立即停止運動']},
      {label:'休息 Rest', icon:'home', lines:['不勉強繼續活動']},
      {label:'冰敷 Ice', icon:'check', lines:['冰塊包毛巾','避免凍傷']},
      {label:'壓迫 Compression', icon:'check', lines:['由末梢往心臟包紮','不宜太緊']},
      {label:'抬高 Elevation', icon:'heart', lines:['幫助血液回流','消腫']}
    ],
    action_title:'下次這樣預防',
    action_cards:[
      {key:'暖', text:'運動前暖身 5–10 分鐘'},
      {key:'漸', text:'依體能漸進增加運動量'},
      {key:'看', text:'包紮後觀察末梢麻痛與顏色'},
      {key:'醫', text:'疑似骨折或無法承重儘速就醫'}
    ],
    carousel_suggestion:{reason:'若想把 PRICE、包紮注意事項與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'運動扭傷', headline_main:'PRICE 五步驟'},
      {layout_type:'knowledge', headline_hook:'包紮冰敷', headline_main:'這些細節要注意'},
      {layout_type:'action', headline_hook:'預防運動傷害', headline_main:'暖身與漸進'}]},
    hashtags:['運動傷害','PRICE原則','扭傷','運動安全'],
    sources:['臺北榮民總醫院','衛生福利部國民健康署'],
    illustration_category:'bones-joints',
    illustration:{topic:'運動傷害處置', audience:'運動愛好者', scene:'一位跑者坐在場邊，腳踝包著彈性繃帶並抬高放在背包上，旁邊有包著毛巾的冰袋',
      emotion:'冷靜、照護', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A runner sitting on the sideline with an elastic bandage on the ankle, the leg raised on a backpack, an ice pack wrapped in a towel beside them, calm and caring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['PRICE原則（臺北榮總玉里分院衛教）'],
      layout_reason:'核心是 5 個步驟，選 knowledge：PRICE 五卡當主角，最後給預防與就醫行動。',
      tone:'專業易懂', tone_reason:'步驟需清楚。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自醫院衛教與國健署，未涉及特定護具或藥品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'運動傷害處置',
    collect:{
      summary:'國人參與運動人口比例達83.3%，扭傷、挫傷等急性運動傷害常見；醫院衛教以PRICE（保護、休息、冰敷、壓迫、抬高）為基本處置原則，最重要的是立即停止運動。國健署也提醒運動前暖身與不適就醫，預防勝於治療。',
      objective_data:[
        {item:'盛行率／發生率',desc:'83.3%：運動部全民運動署114年運動現況調查，國人參與運動人口比例達83.3%，運動普及也讓運動傷害預防與處置更受重視。',tag:'官方統計',source:{name:'運動部全民運動署：114年運動現況調查',url:'https://www.sa.gov.tw/News_Content/362/20136'}},
        {item:'政策動向',desc:'暖身至少5分鐘：國健署提醒運動前至少暖身5至10分鐘，依身體狀況漸進增加運動量，運動中不適持續未改善應就醫。',tag:'官方統計',source:{name:'國健署：運動越激烈越能預防心血管疾病?',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=127&pid=13267'}},
        {item:'好發族群年齡層',desc:'PRICE五步驟：臺北榮總玉里分院衛教指出疑似挫傷或扭傷時，以保護、休息、冰敷、壓迫、抬高為基本處置，最重要的是休息與保護。',tag:'官方統計',source:{name:'臺北榮總玉里分院：淺談運動傷害處理原則',url:'https://org.vghtpe.gov.tw/vhyl/freePage/-1/54'}},
        {item:'年度趨勢方向',desc:'35.6%規律運動：114年規律運動人口比例35.6%，較113年增加，運動參與持續成長。',tag:'官方統計',source:{name:'運動部全民運動署：114年運動現況調查',url:'https://www.sa.gov.tw/News_Content/362/20136'}}
      ],
      product_view:['機會：運動傷害與意外醫療保障相關，可作為意外險衛教內容。','機會：路跑、球類活動贊助時可搭配運動安全提醒。','風險：避免推薦特定護具、貼紮或止痛藥品；不得取代專業醫療判斷。'],
      marketing_view:['機會：馬拉松、路跑季是溝通時點。','機會：PRICE口訣好記，適合做圖卡。','風險：冰敷時間等細節各家說法不一，避免寫死數字。'],
      alert_level:'low',
      alert_reason:'屬長期運動安全議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('急性期冰敷可消腫止痛，冰塊用毛巾包覆避免凍傷','MEDICAL_INTERPRETATION','missing_duration',
          '未說明每次冰敷多久、間隔多久，讀者可能冰敷過久造成凍傷；但各醫院建議時間不一，宜標示「依醫療人員建議」。','low','no',
          null,'no','clarify','冰敷時間各醫院說法不同。',
          '急性期冰敷可消腫止痛，冰塊用毛巾包覆避免凍傷，每次時間不宜過長並依醫療人員建議',
          ['冰塊要用毛巾包著，不要直接貼皮膚']),
        F('國人參與運動人口比例達83.3%，運動越普及，扭傷、挫傷也越常見','DATA_FACTUAL_ACCURACY','unsupported_inference',
          '「運動越普及、傷害越常見」是推論，文中沒有運動傷害發生率的數據支持。','low','yes',
          '國內運動傷害發生率或就醫人次的官方統計。','no','confirm','國內未查到相關官方統計。',
          '國人參與運動人口比例達83.3%，運動傷害的預防與處置因此更值得重視',
          ['扭到腳、撞到瘀青也很常見']),
        F('疑似骨折、關節變形或無法承重時，不要自行處理，儘速就醫','SOURCE_EVIDENCE','unsourced_claim',
          '就醫時機的判斷標準未附出處，本文引用的衛教資料只寫「視需求就醫」。','low','no',
          null,'no','clarify','屬常見急救原則，宜補出處。',
          null,
          ['覺得骨頭怪怪的、腳不能踩地，馬上就醫','疑似骨折儘速就醫。'])
      ],
      card:[
        F('疑似骨折或無法承重儘速就醫','SOURCE_EVIDENCE','unsourced_claim',
          '就醫判斷標準未見於引用的衛教資料。','low','no',
          null,'no','clarify','屬常見急救原則。',
          null),
        F('冰塊包毛巾','MEDICAL_INTERPRETATION','missing_duration',
          '未提醒冰敷時間不宜過長。','low','no',
          null,'no','clarify','受版面限制。',
          '包毛巾、時間別太長')
      ]
    },
    title_alts:[
      '運動扭傷怎麼辦？記住PRICE五步驟',
      '打球扭到腳先別揉！PRICE五步驟這樣做',
      '運動傷害第一步是停下來：保護、休息、冰敷、壓迫、抬高'
    ],
    card_title_alts:[
      ['運動扭傷別硬撐','PRICE 五步驟一次看'],
      ['扭到腳先別揉','PRICE 這樣做'],
      ['第一步：停下來','保護受傷部位']
    ],
    data_addon:[
      '包紮宜由肢體末梢往心臟方向纏繞，力道適當（臺北榮總玉里分院衛教）。',
      '有研究認為冰敷可能影響發炎修復，但急性期短暫冰敷仍建議使用。',
      '114年國人規律運動人口比例35.6%（運動部全民運動署）。'
    ],
    cta:'下次運動前花5到10分鐘暖身；若扭傷，先停下來照PRICE處理，疑似骨折就直接就醫。'
  });
})();
