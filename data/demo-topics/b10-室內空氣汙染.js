/* v6 示範主題：室內空氣汙染（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-21。數據來源：環境部「室內空氣品質檢驗方法」頁（室內空氣品質標準值：CO2 1,000 ppm、甲醛0.08 ppm、PM2.5 35 μg/m³、細菌1,500 CFU/m³、真菌1,000 CFU/m³等，112年發布）、衛福部2026-08-03新聞稿（113年家庭二手菸暴露率35.6%）、衛福部／國健署〈響應世界肺癌日 護肺4招顧健康〉（WHO肺癌危險因子含二手菸、炒菜油煙、室內燃煤；開抽油煙機、水煮清蒸）、國健署空污「3招6式」（少焚香、少燒紙錢）。
   注意：室內空氣品質標準適用於公告場所，一般住家無法定檢測義務；國健署「未用抽油煙機肺癌風險8.3倍」頁面讀不到，未引用。
   參考方向：健康智庫〈環境衛生－室內空氣汙染〉2025/07、〈上班不適？病態大樓症候群作祟！〉2025/03。 */
(function(){
  const REFS = [
    {title:'室內空氣品質檢驗方法（含法規標準值）',source:'環境部',url:'https://www.moenv.gov.tw/affairs/atmospheric-environment/indoor-air-quality-management/indoor-air-quality-testing-methods/2300.html'},
    {title:'父親節戒菸 守護家人（家庭二手菸暴露率35.6%）',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-87308-1.html'},
    {title:'響應世界肺癌日 護肺4招顧健康',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/fp-16-55052-1.html'},
    {title:'秋冬季節易空品狀況不佳，國民健康署提醒民眾做好空污自我防護「3招6式」',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1405&pid=9887'}
  ];
  const TABLE = {headers:['室內汙染來源','怎麼改善'], rows:[
    ['二手菸','家中、車內全面禁菸'],
    ['烹調油煙','開抽油煙機，多用水煮、清蒸'],
    ['焚香、燒紙錢','少焚香、少燒紙錢，可用鮮花素果替代'],
    ['人多不通風（二氧化碳累積）','定時開窗或開啟換氣設備'],
    ['燃氣熱水器','裝在通風處，洗澡時保持通風']
  ]};
  const TAGS = ['室內空氣品質','二手菸','廚房油煙','通風','肺部健康'];

  const PRO = {
    content_type:'健康文章',
    title:'在家也有空汙？室內空氣5大汙染源與改善方法',
    update_date:'2026/11/21',
    intro:'一般人大部分時間待在室內，室內空氣品質同樣重要。國民健康署113年調查顯示，家庭二手菸暴露率為35.6%，較111年的28.9%上升。依世界衛生組織資料，除了吸菸，二手菸、炒菜油煙、室內燃煤等也都是肺癌危險因子。環境部訂有室內空氣品質標準，例如二氧化碳8小時值1,000 ppm、甲醛1小時值0.08 ppm，適用於公告的公共場所。',
    sections:[
      {heading:'室內汙染來源與改善',format:'table',table:TABLE},
      {heading:'環境部室內空氣品質標準（節錄）',format:'bullets',items:[
        '二氧化碳：1,000 ppm；甲醛：0.08 ppm；總揮發性有機化合物：0.56 ppm。',
        '細懸浮微粒PM2.5：35 μg/m³。',
        '細菌：1,500 CFU/m³；真菌：1,000 CFU/m³。',
        '標準適用於環境部公告列管的公共場所，一般住家沒有法定檢測義務。'
      ]},
      {heading:'居家改善做法',format:'bullets',items:[
        '拒吸二手菸，家中與車內不吸菸。',
        '烹煮時開啟抽油煙機，多選擇水煮、清蒸方式。',
        '少焚香、少燒紙錢。',
        '定時開窗通風，人多的空間更要注意換氣。'
      ]}
    ],
    think_tank_view:'室內空汙看不見，但來源多半在自己能控制的範圍：一根菸、一鍋熱炒、一炷香。只要「不吸菸、開油煙機、多開窗」，就能大幅改善家裡的空氣。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'二手菸暴露率引自國健署113年調查，室內空品標準引自環境部，肺癌危險因子標明引述WHO，未推薦特定空氣清淨機或抽油煙機品牌。',
    ai_rationale:{basis:['113年家庭二手菸暴露率35.6%（衛福部）','室內空氣品質標準值（環境部）','WHO肺癌危險因子（國健署引述）'],
      layout_reason:'先用表格整理5大居家汙染源與改善方式，再節錄法規標準，最後給居家做法。',
      tone:'專業易懂', tone_reason:'需說明標準適用範圍。',
      to_verify:['室內空品標準適用公告場所，非住家法定標準']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'關緊門窗就安全？家裡的空氣可能更差',
    update_date:'2026/11/21',
    intro:'大家都會注意外面的空污，卻常忘了家裡的空氣。國健署113年調查發現，在家吸到二手菸的比例是35.6%，比兩年前還高。炒菜油煙、燒香、人多又不開窗，都會讓室內空氣變差。世界衛生組織也把二手菸和炒菜油煙列為肺癌的危險因子。',
    sections:[
      {heading:'家裡5個空汙來源',format:'table',table:TABLE},
      {heading:'政府對公共場所的標準',format:'bullets',items:[
        '二氧化碳不超過1,000 ppm。',
        '甲醛不超過0.08 ppm。',
        'PM2.5不超過35 μg/m³。',
        '這是公共場所的標準，家裡可以拿來參考。'
      ]},
      {heading:'這樣改善最簡單',format:'bullets',items:[
        '家裡和車上都不抽菸。',
        '炒菜一定開抽油煙機，多用蒸和煮。',
        '拜拜少燒香、少燒紙錢。',
        '每天開窗讓空氣流通。'
      ]}
    ],
    think_tank_view:'今天煮飯時記得先開抽油煙機，飯後開窗10分鐘，就是最簡單的室內空氣保養。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署與環境部並標明年份，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以「關緊門窗就安全」的誤解切入。', tone:'生活親切', tone_reason:'給家庭讀者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'室內空汙：菸、油煙、香、通風',
    update_date:'2026/11/21',
    intro:'113年家庭二手菸暴露率35.6%。WHO列二手菸、炒菜油煙為肺癌危險因子。',
    sections:[
      {heading:'汙染源',format:'table',table:TABLE},
      {heading:'標準（公共場所）',format:'bullets',items:[
        'CO2 1,000 ppm、甲醛0.08 ppm、PM2.5 35 μg/m³。'
      ]},
      {heading:'改善',format:'bullets',items:[
        '不吸菸、開油煙機、少焚香、多開窗。'
      ]}
    ],
    think_tank_view:'室內空汙多半可以自己控制。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署與環境部，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為來源、標準、改善三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'室內空氣汙染', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'家庭二手菸暴露率升到 35.6%', primary_visual:'35.6%', secondary_message:'二手菸、油煙都是肺癌危險因子', action_priority:'不吸菸、開油煙機、多開窗'},
    headline_hook:'在家也有空汙？', headline_main:'室內 4 大汙染源一次看', title_accent:'4 大汙染源',
    hero_message:'35.6% 家庭二手菸暴露', hero_support:'113 年國健署調查（111 年為 28.9%）',
    knowledge_title:'室內汙染來源', knowledge_note:'二手菸、炒菜油煙都是**肺癌危險因子**（WHO）',
    knowledge_cards:[
      {label:'二手菸', icon:'shield', lines:['家中車內禁菸']},
      {label:'烹調油煙', icon:'flask', lines:['開抽油煙機','多水煮清蒸']},
      {label:'焚香燒紙', icon:'leaf', lines:['少焚香','少燒紙錢']},
      {label:'不通風', icon:'home', lines:['二氧化碳累積','定時開窗']}
    ],
    action_title:'居家空氣這樣顧',
    action_cards:[
      {key:'菸', text:'家中與車內全面禁菸'},
      {key:'煙', text:'烹煮全程開抽油煙機'},
      {key:'香', text:'少焚香、以鮮花素果替代紙錢'},
      {key:'窗', text:'每天定時開窗通風'}
    ],
    carousel_suggestion:{reason:'若想把汙染來源、法規標準與改善方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'家庭二手菸', headline_main:'暴露率升到 35.6%'},
      {layout_type:'knowledge', headline_hook:'室內空品標準', headline_main:'CO2、甲醛、PM2.5'},
      {layout_type:'action', headline_hook:'居家改善', headline_main:'菸、煙、香、窗'}]},
    hashtags:['室內空氣品質','二手菸','廚房油煙','通風'],
    sources:['衛生福利部國民健康署','環境部'],
    illustration_category:'general',
    illustration:{topic:'室內通風', audience:'家庭', scene:'廚房裡家長炒菜時開著抽油煙機，客廳窗戶敞開，空氣流動',
      emotion:'清爽、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A parent cooking with the range hood on in a kitchen while the living room window is open and air flows through, fresh and reassuring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['113年家庭二手菸暴露率35.6%（衛福部）','WHO肺癌危險因子（國健署引述）'],
      layout_reason:'核心是認出居家汙染源，選 knowledge：4 個來源當主角，最後給改善行動。',
      tone:'專業易懂', tone_reason:'具體可做。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自國健署與環境部並標明年份，未推薦特定商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'室內空氣汙染',
    collect:{
      summary:'113年家庭二手菸暴露率升至35.6%；WHO將二手菸、炒菜油煙、室內燃煤列為肺癌危險因子。環境部訂有室內空氣品質標準（如CO2 1,000 ppm、甲醛0.08 ppm），適用於公告公共場所。居家改善重點在不吸菸、開抽油煙機、少焚香與通風。',
      objective_data:[
        {item:'盛行率／發生率',desc:'35.6%：國健署113年國人吸菸行為調查，家庭二手菸暴露率為35.6%，較111年28.9%增加。',tag:'官方統計',source:{name:'衛福部：父親節戒菸 守護家人',url:'https://www.mohw.gov.tw/cp-16-87308-1.html'}},
        {item:'政策動向',desc:'二氧化碳1000 ppm：環境部室內空氣品質標準規定二氧化碳1000 ppm、甲醛0.08 ppm、PM2.5 35 μg/m³、細菌1500 CFU/m³、真菌1000 CFU/m³等，適用於公告場所。',tag:'官方統計',source:{name:'環境部：室內空氣品質檢驗方法與標準值',url:'https://www.moenv.gov.tw/affairs/atmospheric-environment/indoor-air-quality-management/indoor-air-quality-testing-methods/2300.html'}},
        {item:'好發族群年齡層',desc:'炒菜油煙：國健署引述世界衛生組織資料，二手菸、炒菜油煙、室內燃煤、空氣污染等皆是肺癌危險因子，建議烹煮時開啟抽油煙機並多用水煮、清蒸。',tag:'官方統計',source:{name:'國健署：響應世界肺癌日 護肺4招顧健康',url:'https://www.mohw.gov.tw/fp-16-55052-1.html'}},
        {item:'年度趨勢方向',desc:'少焚香少紙錢：國健署空污自我防護建議少焚香、少燒紙錢、少放鞭炮，多以米、鮮花、素果取代燒紙錢。',tag:'官方統計',source:{name:'國健署：空污自我防護「3招6式」',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1405&pid=9887'}}
      ],
      product_view:['機會：室內空品與呼吸道、肺部健康相關，可作為家庭健康衛教。','機會：「家庭無菸」可連結戒菸資源。','風險：避免推薦特定空氣清淨機或抽油煙機品牌；不宜誇大單一來源的致癌風險。'],
      marketing_view:['機會：秋冬關窗季、年節拜拜前後是溝通時點。','機會：「在家也有空汙」反直覺訊息。','風險：焚香涉及宗教習俗，宜尊重並以「減量」表達。'],
      alert_level:'low',
      alert_reason:'屬長期環境健康議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('這是公共場所的標準，家裡可以拿來參考','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '室內空氣品質標準是針對公告場所的法規，住家條件不同；「拿來參考」未說明一般家庭難以自行準確量測甲醛等項目。','low','no',
          null,'no','clarify','屬適用範圍說明。',
          '這是公告公共場所的法規標準，一般住家沒有檢測義務，僅供了解'),
        F('世界衛生組織也把二手菸和炒菜油煙列為肺癌的危險因子','SOURCE_EVIDENCE','secondary_citation',
          'WHO資料轉引自國健署新聞稿，文中未標示國健署為轉述來源與年份。','low','no',
          null,'no','clarify','屬出處層級。',
          '國健署引述世界衛生組織資料，二手菸和炒菜油煙都是肺癌的危險因子',
          ['依世界衛生組織資料，除了吸菸，二手菸、炒菜油煙、室內燃煤等也都是肺癌危險因子','WHO列二手菸、炒菜油煙為肺癌危險因子']),
        F('少焚香、少燒紙錢，可用鮮花素果替代','TERMINOLOGY_LANGUAGE','cultural_sensitivity',
          '焚香涉及宗教與習俗，直接建議替代可能引起反感；宜搭配「拜拜時保持通風」等兼顧習俗的作法。','low','no',
          null,'no','clarify','屬溝通語氣。',
          '焚香時保持通風，可減量焚香、以鮮花素果替代部分紙錢')
      ],
      card:[
        F('二手菸、炒菜油煙都是**肺癌危險因子**（WHO）','SOURCE_EVIDENCE','secondary_citation',
          'WHO說法為國健署轉引，卡面未標示。','low','no',
          null,'no','clarify','屬出處層級。',
          '二手菸、炒菜油煙都是**肺癌危險因子**（國健署引述 WHO）'),
        F('少焚香、以鮮花素果替代紙錢','TERMINOLOGY_LANGUAGE','cultural_sensitivity',
          '涉及宗教習俗，宜加「保持通風」。','low','no',
          null,'no','clarify','屬溝通語氣。',
          '焚香時開窗，減量燒紙錢')
      ]
    },
    title_alts:[
      '在家也有空汙？室內空氣5大汙染源與改善方法',
      '關緊門窗就安全？家裡的空氣可能更差',
      '家庭二手菸暴露升到35.6%：室內空氣這樣顧'
    ],
    card_title_alts:[
      ['在家也有空汙？','室內 4 大汙染源一次看'],
      ['關緊門窗就安全？','家裡空氣可能更差'],
      ['菸、煙、香、窗','居家空氣 4 件事']
    ],
    data_addon:[
      '環境部室內空氣品質標準另含一氧化碳9 ppm、臭氧0.06 ppm、總揮發性有機化合物0.56 ppm。',
      '國健署引述WHO指出吸菸占肺癌危險因子的70-80%。',
      '燃氣熱水器裝在通風不良處可能造成一氧化碳中毒（內政部）。'
    ],
    cta:'今天煮飯前先開抽油煙機，飯後開窗10分鐘；家裡若有人吸菸，約好家中與車內不抽。'
  });
})();
