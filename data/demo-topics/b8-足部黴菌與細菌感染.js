/* v6 示範主題：足部黴菌與細菌感染（B8 傳染病防治）
   查證日期：2026-11-21。查無衛福部／國健署足癬官方衛教與盛行率統計；內容依醫院衛教：
   亞洲大學附屬醫院「足癬」兩篇（未標日期）、長庚醫療財團法人「蜂窩性組織炎照護須知」（2018年檔案）。不寫盛行率數字。
   參考方向：健康智庫〈雨天襪子濕，足部感染別輕忽！〉2025/07。 */
(function(){
  const REFS = [
    {title:'足癬 治療及預防',source:'亞洲大學附屬醫院',url:'https://www.auh.org.tw/NewsInfo/HealthEducationInfo?docid=38'},
    {title:'足癬（足癬根治、足癬治療）',source:'亞洲大學附屬醫院',url:'https://www.auh.org.tw/NewsInfo/HealthEducationInfo?docid=1058'},
    {title:'蜂窩性組織炎照護須知',source:'長庚醫療財團法人',url:'https://webapp.cgmh.org.tw/article/document/art_atch/697-20181116-123017.pdf'}
  ];
  const TABLE = {headers:['預防重點','怎麼做'], rows:[
    ['擦乾趾縫','洗澡後把腳和趾縫完全擦乾'],
    ['透氣鞋襪','穿棉質或棉毛混紡吸汗襪、透氣鞋，減少穿包鞋時間'],
    ['勤換鞋襪','襪子濕了就換，鞋襪分開洗'],
    ['不共用','不使用公用拖鞋，患病時不赤腳走動'],
    ['不抓破','避免搔抓，以防續發細菌感染']
  ]};
  const TAGS = ['香港腳','足癬','蜂窩性組織炎','糖尿病足','足部保健'];

  const DP_DURATION = {id:'dp-foot-duration', type:'data_version', title:'症狀消失後還要擦多久',
    desc:'同一家醫院的兩篇衛教說法不同：一篇建議症狀完全消失後再持續治療1個月，另一篇建議皮膚看起來完全正常後再多擦2週。兩者都強調不要症狀一好就停藥，AI 沒有替你選定天數。',
    current:'症狀消失後仍要依醫師指示持續擦藥一段時間',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'再 1 個月', value:'亞洲大學附屬醫院衛教（docid=38）', note:'每天塗抹2次'},
      {label:'再 2 週', value:'亞洲大學附屬醫院衛教（docid=1058）', note:'早晚擦藥'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'香港腳別拖：趾縫龜裂可能讓細菌入侵，引發蜂窩性組織炎',
    update_date:'2026/11/21',
    intro:'足癬俗稱香港腳，是足部的表淺性黴菌感染，常在高溫潮濕的季節惡化。醫院衛教指出，足癬可能出現脫屑、趾間糜爛、水泡等症狀，皮膚破損時容易伴有細菌感染，嚴重時可能併發淋巴管炎或下肢蜂窩性組織炎。長庚醫院也將香港腳患者與糖尿病皮膚慢性潰瘍者列為蜂窩性組織炎的高危險族群。',
    sections:[
      {heading:'足部感染預防重點',format:'table',table:TABLE},
      {heading:'從香港腳到蜂窩性組織炎',format:'bullets',items:[
        '蜂窩性組織炎發作前常先有小傷口，例如香港腳造成的皮膚龜裂，細菌由此侵入。',
        '患部會紅、腫、熱、痛，可能伴隨發燒、畏寒或淋巴腺腫，嚴重時可能併發敗血症。',
        '糖尿病及慢性病患者抵抗力與傷口癒合力較弱，應控制好病情並同時治療香港腳。'
      ]},
      {heading:'治療要有耐心',format:'bullets',items:[
        '依醫師指示用藥，不要因為不癢了就自行停藥。',
        '外用藥對灰指甲效果有限，可能需要皮膚科醫師評估口服藥物。',
        '家中有人患足癬，鞋襪毛巾分開使用，全家一起注意。'
      ]}
    ],
    think_tank_view:'香港腳常被當成「小毛病」，但它造成的皮膚裂縫，正是細菌入侵的入口。對糖尿病或下肢循環不好的人來說，一個沒處理的香港腳可能演變成需要住院的蜂窩性組織炎。保持雙腳乾燥、確實治療到底，是最划算的預防。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自醫院衛教並標明出處，未寫盛行率數字，未推薦特定藥品或產品，未使用療效保證用語。',
    ai_rationale:{basis:['足癬症狀、併發症與預防（亞洲大學附屬醫院衛教）','蜂窩性組織炎高危險族群與照護（長庚醫療財團法人）'],
      layout_reason:'先用表格整理預防重點，再說明香港腳與蜂窩性組織炎的關聯，最後強調治療耐心。',
      tone:'專業易懂', tone_reason:'常見小病需要實用、具體的建議。',
      to_verify:['查無官方衛教與盛行率','兩篇醫院衛教的持續用藥時間不同']},
    decision_points:[DP_DURATION]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'下雨天襪子濕了？小心香港腳變成蜂窩性組織炎',
    update_date:'2026/11/21',
    intro:'雨天鞋襪濕答答，腳一直悶著，香港腳就容易找上門。醫院提醒，香港腳會讓腳趾縫脫皮、裂開，細菌可能從裂縫跑進去，引起又紅又腫又痛的蜂窩性組織炎。有糖尿病的人更要特別小心。',
    sections:[
      {heading:'保持雙腳乾爽5件事',format:'table',table:TABLE},
      {heading:'這些狀況要看醫生',format:'bullets',items:[
        '腳紅、腫、熱、痛，或開始發燒。',
        '趾縫一直爛、會流湯。',
        '有糖尿病的人腳上有傷口。'
      ]},
      {heading:'擦藥別半途而廢',format:'bullets',items:[
        '不癢了不代表好了，照醫生說的擦完。',
        '灰指甲光擦藥效果有限，要問皮膚科。'
      ]}
    ],
    think_tank_view:'回家第一件事，脫掉濕鞋襪、把腳擦乾，就是對雙腳最好的照顧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自醫院衛教，語氣親切，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以雨天濕襪的情境帶出預防與就醫。', tone:'生活親切', tone_reason:'給一般民眾閱讀。', to_verify:[]},
    decision_points:[DP_DURATION]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'香港腳：保持乾燥、治療到底',
    update_date:'2026/11/21',
    intro:'香港腳造成的皮膚龜裂可能讓細菌入侵，引發蜂窩性組織炎；糖尿病患者風險較高（醫院衛教）。',
    sections:[
      {heading:'預防',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '紅腫熱痛或發燒立即就醫。',
        '不癢也要依醫囑擦完藥。'
      ]}
    ],
    think_tank_view:'腳乾燥、藥擦完，小病不變大病。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自醫院衛教，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為預防與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_DURATION]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'足部黴菌與細菌感染', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'香港腳的裂縫可能讓細菌入侵', primary_visual:'擦乾趾縫', secondary_message:'糖尿病患者更要小心蜂窩性組織炎', action_priority:'擦乾、透氣、勤換、治療到底'},
    headline_hook:'雨天襪子濕了？', headline_main:'香港腳別拖成蜂窩性組織炎', title_accent:'蜂窩性組織炎',
    hero_message:'保持雙腳乾爽', hero_support:'香港腳患者是蜂窩性組織炎高危險族群（長庚衛教）',
    primary_stat:{value:'紅腫熱痛', label:'出現就要就醫', note:'醫院衛教｜合併發燒、畏寒更要儘速就醫'},
    action_title:'雙腳這樣保養',
    action_cards:[
      {key:'乾', text:'洗後擦乾腳與趾縫'},
      {key:'襪', text:'穿吸汗棉襪、透氣鞋，濕了就換'},
      {key:'拖', text:'不用公用拖鞋，鞋襪分開洗'},
      {key:'藥', text:'依醫囑擦藥，不癢也別自行停藥'}
    ],
    notice:'糖尿病患者腳部有傷口或香港腳，**應同時治療並控制血糖**。',
    carousel_suggestion:{reason:'若想把預防、併發症與治療分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'action', headline_hook:'雨天襪子濕了？', headline_main:'保持雙腳乾爽'},
      {layout_type:'knowledge', headline_hook:'從香港腳到', headline_main:'蜂窩性組織炎'},
      {layout_type:'action', headline_hook:'擦藥別半途而廢', headline_main:'不癢也要擦完'}]},
    hashtags:['香港腳','足癬','蜂窩性組織炎','足部保健'],
    sources:['亞洲大學附屬醫院','長庚醫療財團法人'],
    illustration_category:'general',
    illustration:{topic:'雨天足部保健', audience:'通勤族與糖尿病患者', scene:'一位上班族回家後脫下濕鞋襪，用毛巾擦乾腳趾縫，旁邊晾著乾淨的棉襪',
      emotion:'放鬆、照顧自己', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker at home taking off wet shoes and socks and drying between the toes with a towel, clean cotton socks hanging nearby, relaxed self-care, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['預防與治療（亞洲大學附屬醫院）','高危險族群與症狀（長庚醫療財團法人）'],
      layout_reason:'關鍵是日常保養，選 action：4 個行動當主角，警訊放主數字區，糖尿病提醒放通知。',
      tone:'專業易懂', tone_reason:'實用、具體。',
      to_verify:['無官方衛教與數字']},
    decision_points:[Object.assign({}, DP_DURATION, {current:'依醫囑擦藥，不癢也別自行停藥'})],
    content_check_note:'內容引自醫院衛教，未寫盛行率，未推薦特定產品，未使用療效保證用語。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'足部黴菌與細菌感染',
    collect:{
      summary:'香港腳（足癬）是常見的足部黴菌感染，高溫潮濕時容易惡化，皮膚龜裂可能讓細菌入侵，引發淋巴管炎或下肢蜂窩性組織炎；糖尿病與慢性病患者風險較高。國內無官方統計，「擦乾、透氣、勤換鞋襪、治療到底」是雨季與夏季值得溝通的保健議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'表淺性黴菌感染：亞洲大學附屬醫院衛教指出，足癬俗稱香港腳，是足部的表淺性黴菌感染，常在高溫多濕的夏季惡化（國內無官方盛行率統計）。',tag:'市場觀察',source:{name:'亞洲大學附屬醫院：足癬 治療及預防',url:'https://www.auh.org.tw/NewsInfo/HealthEducationInfo?docid=38'}},
        {item:'年度趨勢方向',desc:'可能併發蜂窩性組織炎：醫院衛教指出足癬易伴有細菌感染，有時可併發淋巴管炎、下肢蜂窩組織炎，而產生疼痛或發燒。',tag:'市場觀察',source:{name:'亞洲大學附屬醫院：足癬 治療及預防',url:'https://www.auh.org.tw/NewsInfo/HealthEducationInfo?docid=38'}},
        {item:'政策動向',desc:'不癢也要擦完藥：醫院衛教提醒不管癢與否都應依指示擦藥，皮膚恢復正常後仍需持續一段時間，外用藥對灰指甲效果有限，需由皮膚科醫師評估口服藥物。',tag:'市場觀察',source:{name:'亞洲大學附屬醫院：足癬（足癬根治、足癬治療）',url:'https://www.auh.org.tw/NewsInfo/HealthEducationInfo?docid=1058'}},
        {item:'好發族群年齡層',desc:'香港腳與糖尿病患者為高危險族群：長庚衛教將香港腳患者、糖尿病皮膚慢性潰瘍者、肢體循環不良與免疫力低者列為蜂窩性組織炎高危險族群，並建議同時治療香港腳與控制糖尿病。',tag:'市場觀察',source:{name:'長庚醫療財團法人：蜂窩性組織炎照護須知',url:'https://webapp.cgmh.org.tw/article/document/art_atch/697-20181116-123017.pdf'}}
      ],
      product_view:['機會：蜂窩性組織炎可能需要住院，可說明住院醫療保障的條款範圍。','機會：糖尿病客群的足部照護是健康管理服務的延伸。','風險：避免推薦特定藥品、鞋襪或足部保養產品。'],
      marketing_view:['機會：梅雨季與夏季是溝通「保持雙腳乾爽」的時點。','機會：「回家先擦乾腳」是簡單好記的行動。','風險：避免以腳部病灶畫面引起不適。'],
      alert_level:'low',
      alert_reason:'屬季節性日常保健議題，無官方統計，適合在雨季前溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('醫院衛教指出','SOURCE_EVIDENCE','source_level',
          '主要內容來自單一醫院（亞洲大學附屬醫院）未標日期的衛教頁，不是衛福部或皮膚科醫學會的官方資料，文中也沒說明衛教日期。','low','yes',
          '台灣皮膚科醫學會或衛福部醫院的足癬衛教資料。','no','confirm','醫院衛教可信度尚可，但層級與時間不明。',
          '亞洲大學附屬醫院衛教（未標日期）指出'),
        F('是最划算的預防','COMPLIANCE_RISK','value_claim',
          '智庫觀點使用「最划算」這類比較語氣，沒有依據，且在保險公司內容中容易被聯想為成本效益訴求。','low','no',
          null,'no','clarify','改為中性說法。',
          '是最實際的預防'),
        F('醫院提醒，香港腳會讓腳趾縫脫皮、裂開','SOURCE_EVIDENCE','source_unstated',
          '生活親切版沒說是哪家醫院，讀者無法查證。','low','no',
          null,'no','clarify','補上醫院名稱即可。',
          '亞洲大學附屬醫院提醒，香港腳會讓腳趾縫脫皮、裂開'),
        F('糖尿病患者風險較高（醫院衛教）','SOURCE_EVIDENCE','source_unstated',
          '簡潔有力版只寫「醫院衛教」，沒說明是長庚的蜂窩性組織炎衛教。','low','no',
          null,'no','clarify','補上出處即可。',
          '糖尿病患者風險較高（長庚蜂窩性組織炎衛教）')
      ],
      card:[
        F('香港腳患者是蜂窩性組織炎高危險族群（長庚衛教）','MEDICAL_INTERPRETATION','risk_framing',
          'hero 說法可能讓一般香港腳患者過度擔心；長庚衛教列出的是多項高危險族群之一，且多與皮膚破損、糖尿病等共同存在。','low','no',
          null,'no','clarify','補上破損條件。',
          '香港腳造成皮膚破損時，細菌可能入侵（長庚衛教）'),
        F('出現就要就醫','TERMINOLOGY_LANGUAGE','detail_missing',
          '主數字區只寫「紅腫熱痛」，沒有說明就醫科別；長庚衛教建議看感染科或一般內科。','low','no',
          null,'no','clarify','補上科別。',
          '出現就要就醫（感染科、內科）')
      ]
    },
    title_alts:[
      '香港腳別拖：趾縫龜裂可能讓細菌入侵，引發蜂窩性組織炎',
      '下雨天襪子濕了？小心香港腳變成蜂窩性組織炎',
      '足癬預防與治療：保持乾爽、治療到底、糖尿病患者要更小心'
    ],
    card_title_alts:[
      ['雨天襪子濕了？','香港腳別拖成蜂窩性組織炎'],
      ['回家先擦乾腳','5 件事保持雙腳乾爽'],
      ['不癢也要擦完','香港腳治療要耐心']
    ],
    data_addon:[
      '亞洲大學附屬醫院：足癬是足部表淺性黴菌感染，高溫多濕時易惡化，可能併發淋巴管炎、下肢蜂窩組織炎。',
      '長庚衛教：香港腳患者、糖尿病皮膚慢性潰瘍者為蜂窩性組織炎高危險族群。',
      '兩篇醫院衛教對症狀消失後持續用藥時間說法不同（1個月 vs 2週）。'
    ],
    cta:'今天回家先把濕鞋襪換掉、趾縫擦乾；有糖尿病的家人，每天看一下雙腳有沒有傷口。'
  });
})();
