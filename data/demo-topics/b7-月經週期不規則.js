/* v6 示範主題：月經週期不規則（B7 女性・男性・生育與兒童）
   查證日期：2026-11-21。查無國健署／衛福部月經不規則官方衛教；臺大醫院健康電子報PDF伺服器拒絕連線未能讀取。
   內容依國泰綜合醫院婦女醫學部生殖醫學科主任經NOW健康報導（蕃新聞2025-05-27、世界新聞網2025-06-13轉載，二手）。
   參考方向：健康智庫〈月經週期不規律怎麼辦？〉2024/06。 */
(function(){
  const REFS = [
    {title:'月經不規則愛注意！ 醫：可能導致不孕、子宮內膜癌變（國泰綜合醫院，NOW健康）',source:'蕃新聞',url:'https://n.yam.com/Article/20250527288498'},
    {title:'月經不規則或是身體警訊 5方法減少風險（NOW健康）',source:'世界新聞網',url:'https://www.worldjournal.com/wj/story/121240/8794256'}
  ];
  const TABLE = {headers:['醫師建議的5個方法','說明'], rows:[
    ['保持健康體重','BMI控制在18至24之間'],
    ['規律運動與飲食','改善胰島素敏感性'],
    ['避免熬夜與過度壓力','維持內分泌穩定'],
    ['不濫用荷爾蒙或減重藥','避免干擾月經與排卵'],
    ['定期婦科檢查','早期發現內膜異常或卵巢問題']
  ]};
  const TAGS = ['月經不規則','異常子宮出血','排卵障礙','女性健康','婦產科'];

  const DP_SOURCE = {id:'dp-menses-source', type:'data_source', title:'正常範圍出自醫師說明',
    desc:'「週期21至35天、出血2至7天、經血量20至80毫升」是國泰綜合醫院醫師依國際婦產科分類的說明，國健署近期沒有月經不規則的官方衛教；「排卵障礙占女性不孕25%至30%」為醫師引述2023年國際文獻。AI 沒有改寫成官方標準。',
    current:'週期21至35天、出血2至7天屬正常範圍（國泰醫院醫師說明）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'21–35 天', value:'醫師說明', note:'國泰綜合醫院，NOW健康2025（目前採用）'},
      {label:'未公布', value:'國健署衛教', note:'查無近期官方月經衛教'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'月經不規則是警訊：正常週期21至35天，排卵障礙可能影響生育與子宮內膜',
    update_date:'2026/11/21',
    intro:'國泰綜合醫院婦女醫學部生殖醫學科主任2025年受訪說明，月經週期的正常範圍為21至35天，出血時間2至7天，總經血量約20至80毫升，超出範圍就屬於異常子宮出血。月經不規則是一個症狀而非疾病，最常見的原因之一是排卵障礙，常見於青春期、多囊性卵巢症候群與高泌乳素血症；長期不排卵也可能增加子宮內膜增生甚至癌變的風險。',
    sections:[
      {heading:'醫師建議的5個方法',format:'table',table:TABLE},
      {heading:'可能的原因',format:'bullets',items:[
        '國際婦產科分類把原因分為結構性（瘜肉、子宮肌腺症、肌瘤、內膜增生或惡性病變）與非結構性（凝血異常、排卵障礙、藥物影響等）。',
        '高泌乳素血症或甲狀腺異常也可能影響排卵，需盡早治療。',
        '醫師引述2023年國際文獻，排卵障礙約占女性不孕症的25%至30%。'
      ]},
      {heading:'就醫與檢查',format:'bullets',items:[
        '月經不規則合併痘痘、多毛、體重上升或不孕問題，應尋求婦產科醫師協助。',
        '醫師會詢問初經年齡、週期、經血量與用藥史，並安排荷爾蒙抽血與骨盆超音波。',
        '長期無排卵或異常出血者，必要時會做子宮內膜取樣。'
      ]}
    ],
    think_tank_view:'月經是女性健康的「生命徵象」之一。偶爾一次延遲不必緊張，但長期不規則、經期拉長或經血量異常，就值得找婦產科醫師聊聊；早點找出原因，不只是為了生育，也是在保護子宮內膜的長期健康。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'正常範圍與原因標明為醫師說明，不孕比例標明為醫師引述國際文獻，未推薦特定藥品，未使用療效保證用語。',
    ai_rationale:{basis:['正常範圍、PALM-COEIN、5個方法（國泰綜合醫院醫師，NOW健康2025）','排卵障礙占不孕25%至30%（醫師引述2023年Human Reproduction Update）'],
      layout_reason:'先用表格給生活建議，再說明可能原因，最後給就醫與檢查。',
      tone:'專業易懂', tone_reason:'女性健康資訊需具體、不恐嚇。',
      to_verify:['查無國健署官方月經衛教','臺大醫院健康電子報未能讀取']},
    decision_points:[DP_SOURCE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'月經老是亂來？先看看是不是在正常範圍',
    update_date:'2026/11/21',
    intro:'月經一下早一下晚，到底要不要看醫生？國泰醫院婦產科醫師說，月經大約21到35天來一次、每次2到7天，都算正常範圍。如果常常超出這個範圍，可能是排卵出了狀況，像多囊性卵巢症候群就是常見原因之一。',
    sections:[
      {heading:'讓月經穩定的5個方法',format:'table',table:TABLE},
      {heading:'可能是什麼原因？',format:'bullets',items:[
        '排卵不正常，例如多囊性卵巢症候群。',
        '甲狀腺或泌乳激素出了問題。',
        '子宮肌瘤、瘜肉等子宮本身的問題。'
      ]},
      {heading:'什麼時候該看醫生？',format:'bullets',items:[
        '常常超過35天才來，或經期拖超過7天。',
        '同時有痘痘、多毛、體重變重。',
        '想懷孕卻一直沒消息。'
      ]}
    ],
    think_tank_view:'用手機記下每次月經的日期和天數，看醫生時就能一目了然，也能更早發現身體的變化。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容標明為醫師說法，語氣親切，未推薦特定藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以月經亂來的困擾帶出範圍與就醫時機。', tone:'生活親切', tone_reason:'給年輕女性閱讀。', to_verify:[]},
    decision_points:[DP_SOURCE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'月經不規則：正常是21至35天',
    update_date:'2026/11/21',
    intro:'國泰醫院醫師：週期21至35天、出血2至7天屬正常。長期不規則可能是排卵障礙，應就醫。',
    sections:[
      {heading:'5個方法',format:'table',table:TABLE},
      {heading:'就醫時機',format:'bullets',items:[
        '合併痘痘、多毛、體重上升。',
        '有生育計畫卻不易懷孕。'
      ]}
    ],
    think_tank_view:'記錄月經、及早評估，保護生育與子宮健康。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容標明醫師說法，未推薦特定藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為方法與就醫兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_SOURCE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'月經週期不規則', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'月經長期超出正常範圍要就醫', primary_visual:'21–35 天', secondary_message:'排卵障礙可能影響生育', action_priority:'記錄週期、維持體重、就醫評估'},
    headline_hook:'月經老是亂來？', headline_main:'先看是否在正常範圍', title_accent:'正常範圍',
    hero_message:'週期 21–35 天屬正常', hero_support:'國泰綜合醫院醫師說明（2025）',
    knowledge_title:'月經正常範圍', knowledge_note:'超出範圍屬**異常子宮出血**',
    knowledge_cards:[
      {label:'週期', icon:'check', lines:['21 至 35 天']},
      {label:'出血天數', icon:'heart', lines:['2 至 7 天']},
      {label:'經血量', icon:'flask', lines:['約 20 至 80 毫升']}
    ],
    primary_stat:{value:'25%–30%', label:'女性不孕與排卵障礙相關', note:'醫師引述 2023 年國際文獻'},
    secondary_stats:[
      {value:'18–24', label:'醫師建議 BMI 範圍'},
      {value:'抽血＋超音波', label:'常見檢查'}
    ],
    action_title:'讓月經穩定這樣做',
    action_cards:[
      {key:'記', text:'記錄每次月經日期與天數'},
      {key:'重', text:'維持 BMI 18 至 24'},
      {key:'睡', text:'避免長期熬夜與過度壓力'},
      {key:'醫', text:'合併痘痘、多毛、不孕找婦產科'}
    ],
    carousel_suggestion:{reason:'若想把正常範圍、原因與檢查分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'月經正常範圍', headline_main:'21–35 天、2–7 天'},
      {layout_type:'knowledge', headline_hook:'可能的原因', headline_main:'排卵障礙最常見'},
      {layout_type:'action', headline_hook:'讓月經穩定', headline_main:'5 個方法'}]},
    hashtags:['月經不規則','異常子宮出血','排卵障礙','女性健康'],
    sources:['國泰綜合醫院（媒體引述）'],
    illustration_category:'general',
    illustration:{topic:'月經週期記錄', audience:'育齡女性', scene:'一位年輕女性用手機月曆標記月經日期，桌上放著筆記本與水杯',
      emotion:'自在、掌握自己', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young woman marking period dates on a phone calendar, a notebook and a glass of water on the desk, calm and in control, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['正常範圍與25%至30%（國泰綜合醫院醫師，NOW健康2025）'],
      layout_reason:'核心是讓讀者自行對照，選 knowledge：3 項正常範圍放中段，不孕關聯退到下方，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'具體可對照。',
      to_verify:['單一醫師來源']},
    decision_points:[Object.assign({}, DP_SOURCE, {current:'週期 21–35 天（醫師說明）'})],
    content_check_note:'內容標明醫師說法，未推薦特定藥品，未使用療效保證用語。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'月經週期不規則',
    collect:{
      summary:'醫師說明月經週期正常範圍為21至35天、出血2至7天，超出即屬異常子宮出血，最常見原因之一是排卵障礙，可能影響生育並增加子宮內膜病變風險；國健署近期無相關衛教。「記錄週期、維持體重、長期異常就醫」是年輕女性值得溝通的健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'21至35天為正常週期：國泰綜合醫院婦女醫學部生殖醫學科主任2025年受訪說明，月經週期21至35天、出血2至7天、經血量約20至80毫升屬正常範圍，超出即歸類為異常子宮出血（媒體引述）。',tag:'市場觀察',source:{name:'蕃新聞（NOW健康）：月經不規則愛注意！（國泰綜合醫院）',url:'https://n.yam.com/Article/20250527288498'}},
        {item:'年度趨勢方向',desc:'25%至30%不孕與排卵障礙相關：醫師引述2023年國際文獻指出，排卵障礙約占女性不孕症的25%至30%，長期無排卵也會增加子宮內膜增生甚至癌變風險。',tag:'市場觀察',source:{name:'蕃新聞（NOW健康）：月經不規則愛注意！（國泰綜合醫院）',url:'https://n.yam.com/Article/20250527288498'}},
        {item:'政策動向',desc:'BMI建議18至24：醫師提出5個方法，包括保持健康體重、規律運動飲食、避免熬夜與過度壓力、不濫用荷爾蒙或減重藥物、定期婦科檢查。',tag:'市場觀察',source:{name:'世界新聞網（NOW健康）：月經不規則或是身體警訊 5方法減少風險',url:'https://www.worldjournal.com/wj/story/121240/8794256'}},
        {item:'好發族群年齡層',desc:'青春期與多囊性卵巢症候群：醫師指出排卵障礙最常見於青春期、多囊性卵巢症候群與高泌乳素血症，合併痘痘、多毛、體重上升或不孕應就醫。',tag:'市場觀察',source:{name:'蕃新聞（NOW健康）：月經不規則愛注意！（國泰綜合醫院）',url:'https://n.yam.com/Article/20250527288498'}}
      ],
      product_view:['機會：年輕女性與生育規劃族群可結合女性健康衛教。','風險：避免推薦調經產品、荷爾蒙或保健品。','風險：須依保單條款如實說明婦科疾病相關給付。'],
      marketing_view:['機會：婦女節、開學季是溝通青少女月經保健的時點。','機會：「用手機記月經」是容易實踐的行動。','風險：避免以不孕或癌變作為恐懼訴求。'],
      alert_level:'low',
      alert_reason:'屬長期女性健康議題，查無官方統計，適合以醫師衛教謹慎溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('醫師引述2023年國際文獻，排卵障礙約占女性不孕症的25%至30%','SOURCE_EVIDENCE','secondary_citation',
          '文中已註明是醫師引述2023年國際文獻，但沒有寫出文獻名稱，也不是國內數據，讀者無法查核是否適用台灣。','low','yes',
          '醫師引述的2023年文獻原文，或國內不孕原因統計。','no','confirm','屬二手引述國外資料。',
          '醫師引述2023年國際文獻（Human Reproduction Update），排卵障礙約占女性不孕症的25%至30%（國外資料）'),
        F('長期不排卵也可能增加子宮內膜增生甚至癌變的風險','COMPLIANCE_RISK','fear_appeal',
          '在引言就提到「癌變」，沒有說明風險程度，可能造成年輕讀者過度恐慌。','low','no',
          null,'no','clarify','補上就醫可評估的說法。',
          '長期不排卵可能影響子宮內膜健康，應由醫師評估'),
        F('常常超過35天才來，或經期拖超過7天','SOURCE_EVIDENCE','derived_criteria',
          '生活親切版的就醫時機是由正常範圍反推，醫師原文沒有直接以此作為就醫標準。','low','no',
          null,'no','clarify','可改為「長期超出正常範圍」。',
          '長期超出正常範圍（例如常常超過35天才來，或經期拖超過7天）'),
        F('國泰醫院醫師：週期21至35天、出血2至7天屬正常','SOURCE_EVIDENCE','single_source',
          '簡潔有力版只依單一醫師說法，沒有年份。','low','no',
          null,'no','clarify','補上年份即可。',
          '國泰醫院醫師（2025）：週期21至35天、出血2至7天屬正常')
      ],
      card:[
        F('女性不孕與排卵障礙相關','SOURCE_EVIDENCE','secondary_citation',
          '主數字「25%–30%」是國外文獻比例，卡面讀者可能以為是台灣女性數據；標籤也容易被讀成「25%至30%女性不孕」。','medium','no',
          null,'no','clarify','改寫標籤避免誤讀。',
          '不孕個案中與排卵障礙相關（國外文獻）'),
        F('國泰綜合醫院醫師說明（2025）','SOURCE_EVIDENCE','single_source',
          '卡面主要依據單一醫師受訪內容，分享時可能被當成官方標準。','low','no',
          null,'no','clarify','屬出處層級提醒。',
          '國泰綜合醫院醫師受訪說明（2025）')
      ]
    },
    title_alts:[
      '月經不規則是警訊：正常週期21至35天，排卵障礙可能影響生育與子宮內膜',
      '月經老是亂來？先看看是不是在正常範圍',
      '月經不規則的原因、檢查與5個穩定方法'
    ],
    card_title_alts:[
      ['月經老是亂來？','先看是否在正常範圍'],
      ['21–35 天才正常','月經不規則要注意'],
      ['記錄月經','5 個方法讓週期穩定']
    ],
    data_addon:[
      '國泰綜合醫院醫師（2025）：週期21至35天、出血2至7天、經血量約20至80毫升屬正常。',
      '醫師引述2023年國際文獻：排卵障礙約占女性不孕症25%至30%。',
      '醫師建議BMI維持18至24，避免熬夜、過度壓力與濫用荷爾蒙或減重藥物。'
    ],
    cta:'從這個月開始用手機記下月經日期和天數；長期不規則就帶著紀錄找婦產科。'
  });
})();
