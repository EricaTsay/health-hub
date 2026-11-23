/* v6 示範主題：硬皮症（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-20。數據來源：健保署「重大傷病各疾病別有效領證統計表」115年9月（資料日期115/10/1；同一網址每月更新）、
   優活健康網 2020-04-09（中國醫藥大學附設醫院風濕免疫科教授受訪：好發年齡、性別比、器官侵犯）。查無2021年後的國內官方或學會統計。
   參考方向：健康智庫〈硬皮症〉2022/07。 */
(function(){
  const NHI = 'https://www.nhi.gov.tw/ch/dl-17701-bd02ea37ebc946f4af6246b85b085013-1.pdf';
  const UHO = 'https://n.yam.com/Article/20200409892912';
  const REFS = [
    {title:'全民健康保險重大傷病各疾病別有效領證統計表',source:'衛生福利部中央健康保險署',url:NHI},
    {title:'硬皮症不只皮膚變硬 內臟也會遭殃',source:'優活健康網（蕃新聞轉載）',url:UHO}
  ];
  const TABLE = {headers:['侵犯部位','可能的表現'], rows:[
    ['手指與皮膚','遇冷手指發白、發紫、發紅（雷諾氏現象），之後手指浮腫、皮膚變緊變硬'],
    ['肺臟','間質性肺病、肺纖維化或肺動脈高壓，出現活動後喘、乾咳'],
    ['腸胃道','食道蠕動變差，吞嚥困難、胃食道逆流，便秘或腹瀉'],
    ['腎臟','少數人出現急性腎危機，血壓突然升高、腎功能惡化']
  ]};
  const TAGS = ['硬皮症','全身性硬化症','雷諾氏現象','肺纖維化','重大傷病'];

  const DP_COUNT = {id:'dp-ssc-count', type:'data_version', title:'患者人數有兩個時點的數字',
    desc:'健保署115年9月統計，領有全身性硬化症重大傷病證明者2,681人；醫師2020年受訪時說台灣約有3千名患者。兩者時點與口徑不同（證明人數 vs 估計患者數），AI 沒有替你決定要用哪一個。',
    current:'2,681人（重大傷病證明，健保署115年9月）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'2,681人', value:'重大傷病證明持有者', note:'健保署115年9月（目前採用）'},
      {label:'約3千人', value:'醫師估計患者數', note:'2020年受訪，未說明統計來源'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'硬皮症不只皮膚變硬：認識雷諾氏現象與肺部警訊',
    update_date:'2026/11/20',
    intro:'硬皮症（全身性硬化症）是一種少見的自體免疫疾病，免疫異常使小血管受損、組織纖維化，除了皮膚變硬，也可能侵犯肺、腸胃、心臟與腎臟。依健保署重大傷病統計，截至115年9月領有全身性硬化症重大傷病證明者有2,681人。中國醫藥大學附設醫院風濕免疫科教授2020年受訪指出，發病年齡多在30至50歲，女性約為男性的3至4倍。',
    sections:[
      {heading:'硬皮症可能侵犯的4個部位',format:'table',table:TABLE},
      {heading:'為什麼要及早診斷',format:'bullets',items:[
        '多數病人最早出現的是雷諾氏現象；手指浮腫、變硬後才就醫，常已錯過早期評估時機。',
        '同一位醫師指出，間質性肺病與肺纖維化是目前硬皮症主要的死亡原因，且肺部纖維化多屬不可逆。',
        '確診後應定期接受肺功能、胸部影像與心臟超音波等追蹤，由風濕免疫科與胸腔科等跨科照護。'
      ]},
      {heading:'日常照顧重點',format:'bullets',items:[
        '手腳保暖、避免碰冷水，戒菸以減少血管收縮。',
        '少量多餐、飯後不要立刻躺下，減輕胃食道逆流。',
        '在醫師或治療師指導下做手指與關節伸展，維持活動度；定期量血壓。'
      ]}
    ],
    think_tank_view:'硬皮症雖然少見，但「冬天手指一碰冷就變白變紫」這個早期線索並不難被注意到。若雷諾氏現象合併手指浮腫、皮膚變緊，或活動後越來越喘，應及早到風濕免疫科評估，把肺部追蹤做在前面。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'重大傷病人數引自健保署統計並標明時點，好發年齡與性別比標明為醫師2020年受訪說法，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['沿用步驟1洞察：全身性硬化症重大傷病證明2,681人（健保署115年9月）','好發年齡、性別比與器官侵犯取自2020年醫師受訪'],
      layout_reason:'硬皮症是多器官疾病，先用表格整理4個侵犯部位，再說明及早診斷的理由，最後給日常照顧做法。',
      tone:'專業易懂', tone_reason:'少見疾病需要把散落的症狀串成可辨識的線索。',
      to_verify:['好發年齡、性別比為2020年單一醫師受訪說法，查無較新國內統計']},
    decision_points:[DP_COUNT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'冬天手指一碰冷就發白發紫？認識硬皮症',
    update_date:'2026/11/20',
    intro:'硬皮症是一種少見的免疫疾病，身體的小血管受傷、組織慢慢變硬，不只皮膚，連肺、腸胃也可能受影響。健保署統計，到115年9月有2,681人領有全身性硬化症的重大傷病證明。醫師在2020年受訪時提到，它多半在30到50歲出現，女性比男性多3到4倍。',
    sections:[
      {heading:'硬皮症會影響哪裡？',format:'table',table:TABLE},
      {heading:'為什麼要早點檢查？',format:'bullets',items:[
        '很多人最早的變化是手指遇冷變白、變紫再變紅，等到手指腫、皮膚變硬才去看醫生。',
        '醫師提醒，肺部纖維化是影響最大的併發症，而且受損後很難恢復。',
        '確診後要定期做肺功能、胸部影像和心臟超音波檢查。'
      ]},
      {heading:'平常這樣照顧',format:'bullets',items:[
        '手腳保暖、洗碗用溫水或戴手套，菸一定要戒。',
        '吃飯少量多餐，吃完別馬上躺下。',
        '照治療師教的動作伸展手指；記得定期量血壓。'
      ]}
    ],
    think_tank_view:'硬皮症很少見，所以更容易被忽略。冬天手指一冷就變色，加上手指腫、皮膚緊，別只當成血液循環不好，陪家人去風濕免疫科看一次，安心比較重要。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'人數引自健保署統計並標明時點，好發年齡與性別比標明為醫師受訪說法，語氣親切但未淡化追蹤必要，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以冬天手指變色的生活情境帶出硬皮症。', tone:'生活親切', tone_reason:'給一般民眾與家人閱讀。', to_verify:['好發年齡、性別比為2020年說法']},
    decision_points:[DP_COUNT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'硬皮症：雷諾氏現象是警訊，肺部要追蹤',
    update_date:'2026/11/20',
    intro:'依健保署統計，截至115年9月領有全身性硬化症重大傷病證明者2,681人。硬皮症可侵犯皮膚、肺、腸胃與腎臟，雷諾氏現象常是最早的警訊。',
    sections:[
      {heading:'侵犯部位',format:'table',table:TABLE},
      {heading:'追蹤重點',format:'bullets',items:[
        '定期肺功能、胸部影像、心臟超音波。',
        '風濕免疫科與胸腔科跨科照護。'
      ]},
      {heading:'日常照顧',format:'bullets',items:[
        '手腳保暖、戒菸。',
        '少量多餐，飯後勿立刻躺下。',
        '定期量血壓、做手指伸展。'
      ]}
    ],
    think_tank_view:'雷諾氏現象合併手指浮腫、皮膚變硬時應及早就醫；確診後把肺部追蹤放在第一位。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'人數引自健保署統計並標明時點，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為部位、追蹤、日常三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['健保署統計表月份']},
    decision_points:[DP_COUNT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'硬皮症', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'硬皮症不只皮膚變硬，也會侵犯內臟', primary_visual:'2,681 人', secondary_message:'雷諾氏現象常是最早警訊', action_priority:'及早就醫、追蹤肺部、保暖戒菸'},
    headline_hook:'手指遇冷就變色？', headline_main:'硬皮症會侵犯這 4 個部位', title_accent:'4 個部位',
    hero_message:'不只皮膚變硬', hero_support:'免疫異常使血管受損、組織纖維化',
    knowledge_title:'可能侵犯的部位', knowledge_note:'活動後越來越喘，**盡快評估肺部**',
    knowledge_cards:[
      {label:'手指皮膚', icon:'check', lines:['遇冷發白發紫','手指浮腫變硬']},
      {label:'肺臟', icon:'leaf', lines:['肺纖維化','肺動脈高壓']},
      {label:'腸胃道', icon:'check', lines:['吞嚥困難','胃食道逆流']},
      {label:'腎臟', icon:'pressure', lines:['血壓突然升高']}
    ],
    primary_stat:{value:'2,681 人', label:'全身性硬化症重大傷病證明', note:'健保署統計（115 年 9 月）'},
    secondary_stats:[
      {value:'3–4 倍', label:'女性患者約為男性'},
      {value:'30–50 歲', label:'常見發病年齡'}
    ],
    action_title:'日常這樣做',
    action_cards:[
      {key:'暖', text:'手腳保暖、避免碰冷水'},
      {key:'戒', text:'戒菸，減少血管收縮'},
      {key:'追', text:'定期追蹤肺功能與心臟'},
      {key:'食', text:'少量多餐，飯後勿立刻躺下'}
    ],
    carousel_suggestion:{reason:'若想把早期警訊、器官侵犯與照顧分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'手指遇冷就變色？', headline_main:'認識雷諾氏現象'},
      {layout_type:'knowledge', headline_hook:'不只皮膚變硬', headline_main:'硬皮症侵犯的 4 個部位'},
      {layout_type:'action', headline_hook:'日常照顧', headline_main:'保暖、戒菸、追蹤肺部'}]},
    hashtags:['硬皮症','全身性硬化症','雷諾氏現象','肺纖維化'],
    sources:['衛生福利部中央健康保險署','醫師受訪（優活健康網，2020）'],
    illustration_category:'general',
    illustration:{topic:'硬皮症', audience:'中年女性與家人', scene:'一位中年女性在冬天戴著手套、捧著溫熱的杯子，旁邊放著肺功能檢查的回診單',
      emotion:'溫暖、有準備', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged woman wearing gloves in winter holding a warm cup, a lung function test appointment slip beside her, warm and prepared mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：重大傷病證明2,681人（健保署115年9月）','器官侵犯整理自2020年醫師受訪'],
      layout_reason:'硬皮症的辨識重點是多器官侵犯，選 knowledge：4 個部位放中段，人數與性別比退到下方，最後給 4 個日常行動。',
      tone:'專業易懂', tone_reason:'少見疾病需要清楚的辨識線索。',
      to_verify:['性別比與發病年齡為2020年說法']},
    decision_points:[Object.assign({}, DP_COUNT, {current:'2,681 人（重大傷病證明，115 年 9 月）'})],
    content_check_note:'人數引自健保署統計並標明時點，比例標明為醫師受訪說法，未使用療效保證用語，未涉及具體藥品或商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'硬皮症',
    collect:{
      summary:'硬皮症（全身性硬化症）是少見的自體免疫疾病、屬健保重大傷病，雷諾氏現象常是最早的線索，肺纖維化是主要的預後威脅；「早期辨識、跨科追蹤肺部」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'2681人領有重大傷病證明：依健保署重大傷病統計，截至115年9月領有全身性硬化症重大傷病證明者2,681人，屬少見疾病。',tag:'官方統計',source:{name:'衛生福利部中央健康保險署：全民健康保險重大傷病各疾病別有效領證統計表（115年9月）',url:NHI}},
        {item:'年度趨勢方向',desc:'間質性肺病與肺纖維化是主要死亡原因：中國醫藥大學附設醫院風濕免疫科教授2020年受訪指出，廣泛型較易侵犯肺臟，肺部纖維化多屬不可逆。查無較新的國內趨勢統計。',tag:'市場觀察',source:{name:'優活健康網：硬皮症不只皮膚變硬 內臟也會遭殃',url:UHO}},
        {item:'政策動向',desc:'列入健保重大傷病範圍：全身性硬化症屬健保重大傷病項目，病人可申請重大傷病證明，相關就醫免部分負擔。',tag:'官方統計',source:{name:'衛生福利部中央健康保險署：全民健康保險重大傷病各疾病別有效領證統計表',url:NHI}},
        {item:'好發族群年齡層',desc:'女性患者為男性3倍以上：同一位醫師2020年受訪指出，發病年齡大多在30至50歲，女性為男性的3至4倍。',tag:'市場觀察',source:{name:'優活健康網：硬皮症不只皮膚變硬 內臟也會遭殃',url:UHO}}
      ],
      product_view:['機會：硬皮症屬重大傷病，可能併發肺纖維化與腎危機，適合說明長期醫療與失能保障。','機會：少見疾病的衛教內容能展現專業與陪伴，對病友家庭有實際幫助。','風險：避免暗示特定藥物或另類療法的效果；核保與理賠須依條款如實說明。'],
      marketing_view:['機會：冬季是雷諾氏現象明顯的時節，可用「手指遇冷變色」做衛教切點。','機會：每年6月29日世界硬皮症日可作為溝通檔期。','風險：少見疾病避免製造焦慮，雷諾氏現象本身不等於硬皮症，需提醒由醫師評估。'],
      alert_level:'low',
      alert_reason:'屬少見慢性疾病議題，無時效性政策事件；適合冬季或世界硬皮症日（6月29日）前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('中國醫藥大學附設醫院風濕免疫科教授2020年受訪指出，發病年齡多在30至50歲，女性約為男性的3至4倍','SOURCE_EVIDENCE','single_expert_source',
          '已註明出處與年份，但屬單一醫師受訪說法，並非國內統計；讀者可能當成正式流行病學數據。','low','yes',
          '國內全身性硬化症性別與年齡分布的研究或健保資料分析。','no','confirm','說法與臨床常識一致，但未經統計資料佐證。',
          '中國醫藥大學附設醫院風濕免疫科教授2020年受訪時表示，臨床上發病年齡多在30至50歲，女性約為男性的3至4倍'),
        F('多數病人最早出現的是雷諾氏現象','MEDICAL_INTERPRETATION','symptom_not_specific',
          '雷諾氏現象在一般人中也常見，多數有雷諾氏現象的人並沒有硬皮症；文中未提醒，可能造成不必要的擔心。','medium','no',
          null,'no','clarify','屬讀者理解問題，不是事實錯誤。',
          '多數病人最早出現的是雷諾氏現象（但有雷諾氏現象的人多數並非硬皮症，需由醫師評估）',
          ['最早的變化是手指遇冷變白、變紫再變紅','雷諾氏現象常是最早的警訊']),
        F('間質性肺病與肺纖維化是目前硬皮症主要的死亡原因','SOURCE_EVIDENCE','outdated_expert_statement',
          '此說法出自2020年單一醫師受訪，文中用「目前」描述，讀者會以為是最新統計。','low','no',
          null,'no','clarify','國際文獻亦有相近結論，屬時點表達問題。',
          '間質性肺病與肺纖維化是硬皮症主要的死亡原因之一（醫師2020年受訪）'),
        F('少數人出現急性腎危機','TERMINOLOGY_LANGUAGE','term_unexplained',
          '「急性腎危機」未說明是什麼、該怎麼察覺，讀者不知道與「定期量血壓」的關聯。','low','no',
          null,'no','clarify','補一句說明即可。',
          '少數人出現急性腎危機（血壓突然飆高、腎功能快速變差，需立即就醫）')
      ],
      card:[
        F('女性患者約為男性','SOURCE_EVIDENCE','source_year_unstated',
          '「3–4 倍」未標示出處與年份，實為2020年單一醫師受訪說法。','low','no',
          null,'no','clarify','補出處即可。',
          '女性患者約為男性（醫師 2020 年說法）'),
        F('遇冷發白發紫','MEDICAL_INTERPRETATION','symptom_not_specific',
          '卡面把雷諾氏現象列為硬皮症表現，沒提醒多數有此現象者並非硬皮症，可能引起不必要焦慮。','low','no',
          null,'no','clarify','屬讀者理解問題。',
          '遇冷發白發紫（非人人都是硬皮症）')
      ]
    },
    title_alts:[
      '硬皮症不只皮膚變硬：認識雷諾氏現象與肺部警訊',
      '冬天手指一碰冷就發白發紫？認識硬皮症',
      '少見但要及早：硬皮症侵犯的4個部位與照顧重點'
    ],
    card_title_alts:[
      ['手指遇冷就變色？','硬皮症會侵犯這 4 個部位'],
      ['不只皮膚變硬','認識硬皮症'],
      ['保暖、戒菸、追蹤肺部','硬皮症日常照顧']
    ],
    data_addon:[
      '健保署重大傷病統計（115年9月）：全身性硬化症重大傷病證明2,681人。',
      '醫師2020年受訪：部分男性患者沒有雷諾氏現象、直接進入浮腫期，病情可能較嚴重。',
      '同一報導指出，免疫抑制劑搭配抗纖維化藥物有助延緩肺纖維化，用藥由醫師評估。'
    ],
    cta:'如果冬天手指一冷就變白變紫，又合併手指腫脹或皮膚變緊，這個月就預約一次風濕免疫科門診。'
  });
})();
