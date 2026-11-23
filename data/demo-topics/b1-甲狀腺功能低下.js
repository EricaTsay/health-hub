/* v6 示範主題：甲狀腺功能低下（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-21。數據來源：亞洲大學附屬醫院衛教〈甲狀腺機能低下〉（成因、症狀出現比例、十字花科飲食）、
   元氣網疾病百科〈甲狀腺機能低下〉（2023-09更新，國泰醫院內分泌新陳代謝科醫師審訂：症狀、併發症、好發族群、成因）、
   亞洲大學附屬醫院〈甲狀腺機能亢進的診斷與治療〉（放射碘治療後功能不足需終生服用甲狀腺素）、國健署2015年碘鹽新聞稿。
   國內查無甲狀腺功能低下官方盛行率；醫院衛教的症狀比例未標示資料來源。
   參考方向：健康智庫〈甲狀腺功能低下〉2023/01。 */
(function(){
  const REFS = [
    {title:'甲狀腺機能低下',source:'亞洲大學附屬醫院',url:'https://www.auh.org.tw/NewsInfo/HealthEducationInfo?docid=788'},
    {title:'一次了解甲狀腺機能低下的症狀、原因、危險族群和預防',source:'元氣網（國泰醫院醫師審訂）',url:'https://health.udn.com/disease/sole/245'},
    {title:'甲狀腺機能亢進的診斷與治療',source:'亞洲大學附屬醫院',url:'https://www.auh.org.tw/NewsInfo/HealthEducationInfo?docid=63'},
    {title:'食用「碘」鹽 健康多一點 逾半數國人碘營養不足',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-20718-1.html'},
    {title:'缺碘恐生長遲緩、工作表現不佳…營養師告訴你補碘吃這些、這樣煮',source:'元氣網（國泰綜合醫院營養師）',url:'https://health.udn.com/health/story/6037/4284947'}
  ];
  const TABLE = {headers:['常見症狀','出現比例（醫院衛教）'], rows:[
    ['虛弱','99%'],
    ['皮膚乾燥','97%'],
    ['嗜睡','91%'],
    ['畏寒','89%'],
    ['便秘','61%'],
    ['體重增加','59%']
  ]};
  const TAGS = ['甲狀腺低下','橋本氏甲狀腺炎','疲倦怕冷','甲狀腺','內分泌'];

  const DP_SRC = {id:'dp-hypo-src', type:'data_scope', title:'症狀比例的出處',
    desc:'表格中的症狀出現比例出自亞洲大學附屬醫院衛教單張，未標示研究來源與年份；國內亦查無甲狀腺功能低下官方盛行率。AI 標示為醫院衛教，並提醒症狀比例不代表個人罹病機率。',
    current:'虛弱99%、畏寒89%等（醫院衛教，未標來源）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'99%／89%', value:'症狀出現比例', note:'亞洲大學附屬醫院衛教（目前採用）'},
      {label:'未提供', value:'國內盛行率', note:'衛福部、國健署未公布'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'一直累、怕冷、變胖？認識甲狀腺功能低下',
    update_date:'2026/11/21',
    intro:'甲狀腺功能低下是甲狀腺荷爾蒙分泌不足，身體代謝變慢，常見疲倦、怕冷、皮膚乾燥、便秘、體重增加等症狀，容易被誤認為老化或過勞。國泰醫院內分泌科醫師審訂的衛教資料指出，40-50歲以上的中老年女性是好發族群；成因包括橋本氏甲狀腺炎等自體免疫疾病、甲狀腺手術或放射碘治療後、腦下垂體失調等。',
    sections:[
      {heading:'甲狀腺低下常見症狀',format:'table',table:TABLE},
      {heading:'為什麼要及早治療',format:'bullets',items:[
        '醫師審訂資料指出，甲狀腺低下若未治療，可能出現骨質疏鬆、記憶力衰退、心臟衰竭等併發症。',
        '甲亢接受放射碘或手術治療後，可能轉為功能不足，需依醫囑長期服用甲狀腺素。',
        '台灣實施食鹽加碘，元氣網資料指出目前因缺碘而患病者已極少。'
      ]},
      {heading:'日常照護',format:'bullets',items:[
        '依醫囑補充甲狀腺素並定期抽血追蹤，不自行調整劑量或停藥。',
        '亞洲大學附屬醫院衛教建議避免攝取過量十字花科蔬菜，例如芥蘭、花椰菜、高麗菜等。',
        '戒菸限酒、少喝含咖啡因飲料，維持規律運動與充足睡眠。'
      ]}
    ],
    think_tank_view:'甲狀腺低下的症狀都很「普通」：累、怕冷、變胖、便秘，因此最容易被當成年紀大或太忙。若這些狀況持續一段時間，抽血檢查甲狀腺功能就能釐清；確診後按時服藥，多數人都能恢復正常生活。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'症狀、成因與照護建議引自醫院衛教與醫師審訂資料並標明出處，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['症狀與成因（亞洲大學附屬醫院衛教、元氣網醫師審訂資料）'],
      layout_reason:'先用表格列出常見症狀，再說明及早治療的理由，最後給日常照護。',
      tone:'專業易懂', tone_reason:'症狀不典型，需清楚說明。',
      to_verify:['國內甲狀腺低下官方盛行率查無資料','症狀比例未標示來源','「多數人能恢復正常生活」未附出處']},
    decision_points:[DP_SRC]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'總是很累、很怕冷？可能是甲狀腺在偷懶',
    update_date:'2026/11/21',
    intro:'甲狀腺就像身體的「油門」，分泌不足時，整個人會變得慢吞吞：一直累、怕冷、皮膚乾、便秘、體重增加。這種狀況叫甲狀腺功能低下，常見於40到50歲以上的女性，很容易被當成更年期或太累。',
    sections:[
      {heading:'這些症狀你有幾項？',format:'table',table:TABLE},
      {heading:'為什麼要去檢查？',format:'bullets',items:[
        '放著不管，可能影響骨頭、記憶力和心臟。',
        '甲亢治療後，有些人會變成甲狀腺低下，要長期吃藥。',
        '抽一次血就能知道甲狀腺功能。'
      ]},
      {heading:'可以這樣做',format:'bullets',items:[
        '確診後照醫生說的吃藥，定期回診抽血。',
        '芥蘭、花椰菜、高麗菜這類十字花科蔬菜別吃過量。',
        '少喝咖啡、戒菸、多運動、睡飽一點。'
      ]}
    ],
    think_tank_view:'媽媽最近總說好累、好怕冷，別只回一句「多休息」。陪她去抽個血檢查甲狀腺，可能就找到原因了。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料引自醫院衛教，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以「身體的油門」比喻切入。', tone:'生活親切', tone_reason:'給中年女性與家人閱讀。', to_verify:['症狀比例出處']},
    decision_points:[DP_SRC]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'甲狀腺低下：累、怕冷、變胖要抽血',
    update_date:'2026/11/21',
    intro:'甲狀腺功能低下使代謝變慢，常見疲倦、畏寒、便秘、體重增加，好發於中老年女性。',
    sections:[
      {heading:'常見症狀',format:'table',table:TABLE},
      {heading:'及早治療',format:'bullets',items:[
        '未治療可能影響骨骼、記憶與心臟。',
        '甲亢治療後可能轉為低下。'
      ]},
      {heading:'照護',format:'bullets',items:[
        '依醫囑服藥、定期追蹤。',
        '十字花科蔬菜勿過量。'
      ]}
    ],
    think_tank_view:'症狀不典型的甲狀腺低下，抽血檢查就能確認。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料引自醫院衛教，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為症狀、治療、照護三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['無官方統計']},
    decision_points:[DP_SRC]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'甲狀腺功能低下', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'一直累、怕冷，可能是甲狀腺低下', primary_visual:'99%', secondary_message:'好發於 40–50 歲以上女性', action_priority:'抽血檢查、按時服藥'},
    headline_hook:'總是很累、很怕冷？', headline_main:'認識甲狀腺低下', title_accent:'甲狀腺低下',
    hero_message:'代謝變慢', hero_support:'常被誤認為老化、更年期或過勞',
    knowledge_title:'常見成因', knowledge_note:'症狀持續，**抽血檢查甲狀腺功能**',
    knowledge_cards:[
      {label:'自體免疫', icon:'shield', lines:['橋本氏','甲狀腺炎']},
      {label:'治療後', icon:'check', lines:['甲狀腺手術','放射碘治療']},
      {label:'腦下垂體', icon:'brain', lines:['腦下垂體','失調']},
      {label:'藥物等', icon:'flask', lines:['部分精神科','心律不整藥物']}
    ],
    primary_stat:{value:'99%', label:'患者出現虛弱症狀的比例', note:'亞洲大學附屬醫院衛教（未標來源）｜畏寒 89%'},
    secondary_stats:[
      {value:'40–50 歲以上', label:'女性為好發族群'},
      {value:'終生服藥', label:'放射碘治療後可能需要'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'檢', text:'疲倦怕冷持續，抽血驗甲狀腺'},
      {key:'藥', text:'依醫囑補充甲狀腺素，不自行停藥'},
      {key:'追', text:'定期回診抽血追蹤'},
      {key:'食', text:'十字花科蔬菜勿過量'}
    ],
    carousel_suggestion:{reason:'若想把症狀、成因與照護分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'總是很累？', headline_main:'甲狀腺低下常見症狀'},
      {layout_type:'knowledge', headline_hook:'為什麼會低下', headline_main:'4 種常見成因'},
      {layout_type:'action', headline_hook:'確診之後', headline_main:'按時服藥、定期追蹤'}]},
    hashtags:['甲狀腺低下','橋本氏甲狀腺炎','疲倦怕冷','甲狀腺'],
    sources:['亞洲大學附屬醫院','元氣網'],
    illustration_category:'metabolic',
    illustration:{topic:'甲狀腺低下', audience:'中年女性與家人', scene:'一位中年女性披著外套、捧著熱茶，女兒在旁陪她看抽血報告',
      emotion:'溫暖、關心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged woman wrapped in a cardigan holding a warm tea while her daughter reviews a blood test report with her, warm and caring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['症狀比例與成因（亞洲大學附屬醫院衛教）'],
      layout_reason:'核心是認識成因與症狀，選 knowledge：4 張成因卡當主角，症狀比例當主數字並標出處。',
      tone:'專業易懂', tone_reason:'症狀不典型需清楚說明。',
      to_verify:['症狀比例未標來源']},
    decision_points:[Object.assign({}, DP_SRC, {current:'99%｜虛弱症狀出現比例（醫院衛教）'})],
    content_check_note:'資料引自醫院衛教與醫師審訂資料，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'甲狀腺功能低下',
    collect:{
      summary:'甲狀腺功能低下使代謝變慢，常見疲倦、怕冷、便秘、體重增加，好發於中老年女性，症狀易被誤認為老化或更年期；國內無官方盛行率統計，「症狀持續就抽血檢查、確診後按時服藥」是主要溝通訊息。',
      objective_data:[
        {item:'盛行率／發生率',desc:'99%患者出現虛弱：醫院衛教列出甲狀腺低下症狀出現比例，皮膚乾燥97%、嗜睡91%、畏寒89%、便秘61%、體重增加59%（未標示資料來源，國內查無官方盛行率）。',tag:'市場觀察',source:{name:'亞洲大學附屬醫院：甲狀腺機能低下',url:'https://www.auh.org.tw/NewsInfo/HealthEducationInfo?docid=788'}},
        {item:'年度趨勢方向',desc:'約20%放射碘治療者第一年出現功能不足：甲亢接受放射碘治療後，醫院衛教指出15年後約50%患者需終生服用甲狀腺素。',tag:'市場觀察',source:{name:'亞洲大學附屬醫院：甲狀腺機能亢進的診斷與治療',url:'https://www.auh.org.tw/NewsInfo/HealthEducationInfo?docid=63'}},
        {item:'政策動向',desc:'7歲以上尿碘中位數104.3微克每升：國泰醫院營養師引述國健署2013-2016年國民營養健康狀況變遷調查，僅達WHO充足標準下限，45歲以上未達充足標準。',tag:'市場觀察',source:{name:'元氣網：缺碘恐生長遲緩、工作表現不佳',url:'https://health.udn.com/health/story/6037/4284947'}},
        {item:'好發族群年齡層',desc:'40-50歲以上女性為好發族群：國泰醫院內分泌科醫師審訂資料指出，成因包括橋本氏甲狀腺炎、甲狀腺切除或放射碘治療後、腦下垂體失調等。',tag:'市場觀察',source:{name:'元氣網：一次了解甲狀腺機能低下',url:'https://health.udn.com/disease/sole/245'}}
      ],
      product_view:['機會：甲狀腺低下需長期服藥追蹤，可作為慢性病醫療保障的溝通情境。','機會：服藥與回診提醒適合結合健康管理服務。','風險：避免推薦補碘或保健產品，不得暗示保健品可取代甲狀腺素治療。'],
      marketing_view:['機會：「總是很累、很怕冷」貼近中年女性日常。','機會：可與甲亢、甲狀腺結節組成甲狀腺系列。','風險：飲食建議（十字花科、含碘食物）各來源說法不一，避免絕對化。'],
      alert_level:'low',
      alert_reason:'無政策事件與官方統計，適合以衛教方式長期溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('虛弱','DATA_FACTUAL_ACCURACY','source_unstated',
          '表格中的症狀出現比例出自醫院衛教單張，未標示研究來源、年份與樣本，讀者可能誤解為有症狀就有高機率罹病。','medium','yes',
          '症狀比例的原始研究來源。','no','confirm','屬醫院衛教數字。',
          null),
        F('避免攝取過量十字花科蔬菜','MEDICAL_INTERPRETATION','diet_advice_context',
          '十字花科建議出自單一醫院衛教，「過量」未定義；讀者可能因此避開健康蔬菜。','low','yes',
          '內分泌醫學會對甲狀腺低下飲食的建議。','no','confirm','屬醫院衛教。',
          '避免「大量」攝取十字花科蔬菜（一般飲食份量不需刻意避免，可與醫師討論）',['十字花科蔬菜別吃過量','十字花科蔬菜勿過量']),
        F('多數人都能恢復正常生活','RISK_COMMUNICATION_SCOPE','reassurance_unsourced',
          '安撫語句未附出處，部分患者仍需長期調整劑量。','low','no',
          null,'no','clarify','屬語氣調整。',
          '多數人可透過規律服藥與追蹤穩定控制'),
        F('目前因缺碘而患病者已極少','MEDICAL_INTERPRETATION','claim_without_figure',
          '「已極少」沒有數據支持，而營養師引述的國健署調查顯示國人尿碘中位數僅達充足下限、45歲以上未達標；兩者並列未說明，讀者可能誤以為完全不必注意碘營養。','low','no',
          null,'no','clarify','輕微碘不足不等於致病，屬表達方式調整。',
          '台灣實施食鹽加碘，因嚴重缺碘而患病者已少見，但仍應均衡攝取碘')
      ],
      card:[
        F('患者出現虛弱症狀的比例','DATA_FACTUAL_ACCURACY','source_unstated',
          '主數字為醫院衛教，未標研究來源。','medium','yes',
          '原始研究。','no','confirm','屬醫院衛教。',
          null),
        F('放射碘治療後可能需要','MEDICAL_INTERPRETATION','scope_note',
          '次數字只提到放射碘治療後，未說明其他成因的患者也多需長期服藥。','low','no',
          null,'no','clarify','屬範圍說明。',
          null)
      ]
    },
    title_alts:[
      '一直累、怕冷、變胖？認識甲狀腺功能低下',
      '總是很累、很怕冷？可能是甲狀腺在偷懶',
      '甲狀腺低下的成因、症狀與日常照護'
    ],
    card_title_alts:[
      ['總是很累、很怕冷？','認識甲狀腺低下'],
      ['代謝變慢','甲狀腺低下 4 種成因'],
      ['確診之後','按時服藥、定期追蹤']
    ],
    data_addon:[
      '醫師審訂資料：甲狀腺低下併發症可能包括低血鉀麻痺、骨質疏鬆、記憶力衰退、心臟衰竭。',
      '亞洲大學附屬醫院：部分精神科與心律不整藥物可能導致甲狀腺功能低下。',
      '國健署：甲狀腺疾病患者應依醫師指示選擇是否使用碘鹽。'
    ],
    cta:'如果家人總說很累、很怕冷超過一段時間，這週陪他去抽血檢查甲狀腺功能。'
  });
})();
