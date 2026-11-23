/* v6 示範主題：老年憂鬱症（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計（表1、表41 自殺年齡別死亡率）、國健署〈全臺醫療單位齊心 陪長輩「量六力」〉（2025/11/26，六力含憂鬱）。
   註：國內老年憂鬱症盛行率查無近年官方統計，本題以長者自殺死亡率與量六力情緒評估呈現，不寫盛行率。
   參考方向：健康智庫〈老年憂鬱症〉2022/04。 */
(function(){
  const REFS = [
    {title:'114年死因統計結果分析',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'},
    {title:'114年死因統計摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'全臺醫療單位齊心 陪長輩「量六力」',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19644'}
  ];
  const TABLE = {headers:['和一般老化不同的警訊','可能表現'], rows:[
    ['情緒','持續兩週以上心情低落、常說「活著沒意思」'],
    ['興趣','對原本喜歡的事、親友聚會都提不起勁'],
    ['身體','常抱怨疼痛、疲倦、失眠或食慾改變，檢查卻找不到原因'],
    ['認知','注意力、記憶力變差，容易被誤以為是失智'],
    ['行為','退縮少出門、整理遺物、交代後事']
  ]};
  const TAGS = ['老年憂鬱症','長者心理健康','自殺防治','1925安心專線','長者量六力'];

  const DP_SUI = {id:'dp-ldep-suicide', type:'data_scope', title:'自殺死亡率不等於憂鬱症比例',
    desc:'65歲以上自殺死亡率每十萬人24.1人，是全人口（16.9人）的約1.4倍，常被用來說明長者心理健康風險；但自殺原因多元，不等於憂鬱症盛行率。國內老年憂鬱症盛行率查無近年官方統計，AI 沒有寫入。',
    current:'114年65歲以上自殺死亡率每十萬人24.1人',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'24.1人', value:'65歲以上', note:'114年自殺死亡率（每十萬人，目前採用）'},
      {label:'16.9人', value:'全人口', note:'114年粗死亡率'},
      {label:'33.5人', value:'80-84歲', note:'114年各年齡層中最高'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'老年憂鬱症常被當成「老了」：5個警訊與陪伴長輩的方法',
    update_date:'2026/11/20',
    intro:'老年憂鬱症常以身體不適、失眠、記憶變差等方式表現，容易被誤認為正常老化或失智。依衛生福利部114年死因統計，65歲以上自殺死亡率為每十萬人24.1人，高於全人口的16.9人，其中80至84歲達33.5人，是各年齡層最高。及早辨識情緒變化、陪伴就醫，是守護長輩心理健康的關鍵。',
    sections:[
      {heading:'和一般老化不同的5個警訊',format:'table',table:TABLE},
      {heading:'容易發生的情境',format:'bullets',items:[
        '退休、喪偶、搬家或親友離世等生活重大改變。',
        '慢性疼痛、行動不便、失能，或罹患重大疾病。',
        '獨居、社會互動減少，或照顧壓力大。'
      ]},
      {heading:'可以怎麼做',format:'bullets',items:[
        '國健署「長者量六力」包含憂鬱（情緒）評估，可作為定期自我檢測工具。',
        '警訊持續兩週以上，陪長輩到精神科、身心科或家醫科評估；憂鬱症是可以治療的疾病。',
        '長輩若透露輕生念頭，不要迴避，耐心傾聽並陪伴就醫，可撥打1925安心專線或1995生命線。'
      ]}
    ],
    think_tank_view:'長輩很少說「我很憂鬱」，比較常說「我睡不好」「全身都痛」「活著拖累你們」。這些話值得認真聽。憂鬱症不是個性問題，也不是老了就會這樣，治療與陪伴能明顯改善生活。每週一通電話、每月一次聚會，持續的連結本身就是保護因子。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'自殺死亡率引自衛福部114年死因統計並標明年份，未寫無法查證的盛行率，提供求助專線，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['65歲以上自殺死亡率24.1、全人口16.9、80-84歲33.5取自衛福部114年死因統計表41','量六力含憂鬱評估取自國健署2025/11/26新聞稿'],
      layout_reason:'先以表格說明警訊，再說明好發情境與求助方式。',
      tone:'專業易懂', tone_reason:'議題敏感，需清楚且提供求助資源。',
      to_verify:['國內老年憂鬱症盛行率查無近年官方統計']},
    decision_points:[DP_SUI]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽常說睡不好、全身痛？可能是心情生病了',
    update_date:'2026/11/20',
    intro:'長輩心情不好，常常不會直接說，而是說睡不好、這裡痛那裡痛，或變得什麼都不想做。衛福部114年統計，65歲以上長輩的自殺死亡率每十萬人24.1人，比全國平均16.9人高。多留意一點、多陪一點，就能及早發現。',
    sections:[
      {heading:'這5個變化要留意',format:'table',table:TABLE},
      {heading:'什麼時候特別容易發生？',format:'bullets',items:[
        '剛退休、另一半過世、搬家。',
        '身體常痛、行動不方便。',
        '一個人住、很少跟人來往。'
      ]},
      {heading:'家人可以這樣做',format:'bullets',items:[
        '用國健署「長者量六力」幫爸媽檢查心情。',
        '變化持續兩週以上，陪他去身心科或家醫科。',
        '聽到「不想活了」別迴避，好好聽他說，也可以打1925安心專線。'
      ]}
    ],
    think_tank_view:'憂鬱不是想太多，也不是老了就該這樣。固定打電話、約吃飯，讓爸媽知道有人在乎，就是最好的開始。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部並標明年份，提供求助專線，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從長輩常見的「身體抱怨」切入。', tone:'生活親切', tone_reason:'給子女閱讀，語氣溫和。', to_verify:['老年憂鬱症盛行率']},
    decision_points:[DP_SUI]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'老年憂鬱症：5個警訊與求助方式',
    update_date:'2026/11/20',
    intro:'114年65歲以上自殺死亡率每十萬人24.1人，高於全人口16.9人（衛福部）。長輩情緒變化要及早留意。',
    sections:[
      {heading:'警訊',format:'table',table:TABLE},
      {heading:'好發情境',format:'bullets',items:[
        '退休、喪偶、慢性病、獨居。'
      ]},
      {heading:'求助',format:'bullets',items:[
        '持續兩週以上就醫，1925安心專線。'
      ]}
    ],
    think_tank_view:'辨識警訊、陪伴就醫、保持連結，是守護長輩心理健康的三步驟。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部並標明年份，提供求助專線，未使用療效保證用語，未涉及具體藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊、情境、求助三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['老年憂鬱症盛行率']},
    decision_points:[DP_SUI]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'老年憂鬱症', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'長輩憂鬱常被當成老化', primary_visual:'24.1 人', secondary_message:'警訊持續 2 週以上要就醫', action_priority:'辨識、陪伴、求助'},
    headline_hook:'不只是老了累了', headline_main:'老年憂鬱 5 個警訊', title_accent:'5 個警訊',
    hero_message:'情緒變化常藏在身體抱怨裡', hero_support:'失眠、疼痛、記憶差，可能是憂鬱',
    knowledge_title:'5 個警訊', knowledge_note:'持續**兩週以上**，陪長輩就醫評估',
    knowledge_cards:[
      {label:'心情低落', lines:['常說活著沒意思']},
      {label:'失去興趣', lines:['不想出門、不想見人']},
      {label:'身體抱怨', lines:['疼痛、失眠','檢查找不到原因']},
      {label:'記憶變差', lines:['易被誤認為失智']},
      {label:'交代後事', lines:['整理遺物、退縮']}
    ],
    primary_stat:{value:'24.1 人', label:'65 歲以上自殺死亡率（每十萬）', note:'衛福部 114 年死因統計｜全人口 16.9 人'},
    secondary_stats:[
      {value:'33.5 人', label:'80–84 歲自殺死亡率，各年齡最高'}
    ],
    action_title:'家人可以這樣做',
    action_cards:[
      {key:'察', text:'用長者量六力定期檢查情緒'},
      {key:'聽', text:'聽到輕生念頭不迴避，耐心傾聽'},
      {key:'醫', text:'陪長輩到身心科或家醫科評估'},
      {key:'撥', text:'撥 1925 安心專線或 1995 生命線'}
    ],
    carousel_suggestion:{reason:'若想把警訊、風險數據與求助資源分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'不只是老了累了', headline_main:'老年憂鬱 5 個警訊'},
      {layout_type:'data', headline_hook:'長者心理健康', headline_main:'65 歲以上自殺率高於平均'},
      {layout_type:'action', headline_hook:'家人可以做', headline_main:'辨識、陪伴、求助'}]},
    hashtags:['老年憂鬱症','長者心理健康','自殺防治','1925安心專線'],
    sources:['衛生福利部','衛生福利部國民健康署'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'長者心理健康', audience:'長者與家人', scene:'成年子女坐在長者身旁，握著手傾聽他說話',
      emotion:'溫暖、被理解', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult child sitting beside an older parent, holding their hand and listening attentively, warm and understanding mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：114年65歲以上自殺死亡率24.1（衛福部）','警訊整理自老年憂鬱症常見表現'],
      layout_reason:'核心是「辨識被當成老化的憂鬱」，選 knowledge：5 個警訊當主角，自殺死亡率退到下方，最後給求助行動。',
      tone:'專業易懂', tone_reason:'議題敏感，提供明確求助管道。',
      to_verify:['自殺死亡率不等於憂鬱症比例']},
    decision_points:[Object.assign({}, DP_SUI, {current:'24.1 人｜114 年 65 歲以上自殺死亡率（每十萬）'})],
    content_check_note:'自殺死亡率引自衛福部114年死因統計，提供求助專線，未使用療效保證用語，未涉及具體藥品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'老年憂鬱症',
    collect:{
      summary:'老年憂鬱症常以身體不適或記憶變差表現，易被誤認為老化或失智；114年65歲以上自殺死亡率每十萬人24.1人，高於全人口16.9人，80至84歲最高，及早辨識與陪伴就醫是長者心理健康溝通重點。',
      objective_data:[
        {item:'好發族群年齡層',desc:'每十萬人24.1人：衛福部114年死因統計，65歲以上自殺死亡率為每十萬人24.1人，高於全人口的16.9人，其中80-84歲為33.5人，是各年齡層最高。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'年度趨勢方向',desc:'3951人死於自殺：114年蓄意自我傷害（自殺）死亡3,951人，居十大死因第10位，較113年4,062人減少。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果分析',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'盛行率／發生率',desc:'20.6%有一項能力異常：國健署114年協助35.5萬名長者「量六力」，六力包含憂鬱（情緒），一項異常者占20.6%（各能力別比例未公布），老年憂鬱症盛行率查無近年官方統計。',tag:'官方統計',source:{name:'國民健康署：全臺醫療單位齊心 陪長輩「量六力」',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19644'}},
        {item:'政策動向',desc:'1925安心專線：衛福部提供24小時免付費1925安心專線，長者或家屬遇到情緒困擾、輕生念頭可撥打求助。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果分析',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}}
      ],
      product_view:['機會：長者心理健康與失能、慢性病相互影響，可作為熟齡保戶關懷服務的一環。','機會：家屬陪伴、喪偶支持等內容能展現品牌溫度。','風險：自殺議題需遵守媒體報導原則，不描述方法，並一律附求助專線。'],
      marketing_view:['機會：重陽節、父親節、母親節是「關心爸媽心情」的溝通時機。','機會：「長輩憂鬱常藏在身體抱怨裡」貼近家庭經驗。','風險：避免聳動標題與自殺細節，避免污名化精神疾病。'],
      alert_level:'medium',
      alert_reason:'長者自殺死亡率高於全人口，議題敏感；溝通時需遵守自殺防治報導原則並附求助專線。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('65歲以上自殺死亡率為每十萬人24.1人，高於全人口的16.9人','DATA_FACTUAL_ACCURACY','crude_vs_standardized',
          '16.9是全人口「粗死亡率」，65歲以上為年齡別死亡率，兩者可比較，但文中未說明全人口的標準化死亡率為12.9，讀者可能誤解差距。','low','no',
          null,'no','clarify','屬統計口徑說明。',
          '65歲以上自殺死亡率為每十萬人24.1人，高於全人口粗死亡率的16.9人',
          ['比全國平均16.9人高','高於全人口16.9人']),
        F('憂鬱症是可以治療的疾病','MEDICAL_INTERPRETATION','treatment_claim',
          '說法正確但未提醒治療需時間與持續追蹤，長輩可能期待短期見效而中斷治療。','low','no',
          null,'no','clarify','屬療程期待提醒。',
          '憂鬱症是可以治療的疾病，通常需要一段時間並持續追蹤'),
        F('治療與陪伴能明顯改善生活','MEDICAL_INTERPRETATION','outcome_generalization',
          '「明顯改善」缺乏依據，屬過度保證。','low','no',
          null,'no','clarify','屬療效表達。',
          '治療與陪伴有助改善生活'),
        F('整理遺物、交代後事','REGULATORY_COMPLIANCE','suicide_reporting',
          '警訊描述合宜，但專業版與親切版的表格未在同一段附上求助專線，依自殺防治報導原則宜就近附上。','low','no',
          null,'no','clarify','求助專線在後段，屬位置調整。',
          '整理遺物、交代後事（遇到請撥1925安心專線）',
          ['退縮少出門、整理遺物、交代後事'])
      ],
      card:[
        F('65 歲以上自殺死亡率（每十萬）','REGULATORY_COMPLIANCE','suicide_reporting',
          '自殺數字當主數字較醒目，依自殺防治報導原則宜搭配求助資訊；卡面行動區雖有專線，但距離主數字較遠。','low','no',
          null,'no','clarify','屬版面配置建議。',
          '65 歲以上自殺死亡率（每十萬）｜求助請撥 1925'),
        F('檢查找不到原因','MEDICAL_INTERPRETATION','diagnostic_caution',
          '可能讓讀者把所有身體不適都歸為心理因素而延誤其他疾病診治。','low','no',
          null,'no','clarify','屬鑑別診斷提醒。',
          '經醫師排除其他原因')
      ]
    },
    title_alts:[
      '老年憂鬱症常被當成「老了」：5個警訊與陪伴長輩的方法',
      '爸媽常說睡不好、全身痛？可能是心情生病了',
      '65歲以上自殺死亡率高於平均：辨識長輩憂鬱、及早求助'
    ],
    card_title_alts:[
      ['不只是老了累了','老年憂鬱 5 個警訊'],
      ['爸媽常說全身痛？','可能是心情生病了'],
      ['辨識、陪伴、求助','守護長輩心理健康']
    ],
    data_addon:[
      '114年自殺標準化死亡率每十萬人12.9人。',
      '114年各年齡層自殺死亡率：65-69歲18.7人、70-74歲23.9人、85歲以上32.6人。',
      '國健署建議65歲以上長者至少每半年做一次長者量六力。'
    ],
    cta:'這週撥一通電話給家中長輩，多問一句「最近睡得好嗎、心情怎麼樣」，並把1925安心專線存進他的手機。'
  });
})();
