/* v6 示範主題：偏頭痛（B11 第二輪擴充）
   查證日期：2026-11-23。數據來源：元氣網2026-03-05整理（健保署長陳亮妤：113年健保主診斷就醫20萬2,450人、推估近200萬人、女男約3:1、CGRP與肉毒桿菌素給付條件；
   北榮王嚴鋒醫師54321口訣）、TVBS 2021/2023（盛行率9.1%、慢性偏頭痛定義，台灣頭痛學會時任理事長陳韋達）。查無健保署或頭痛學會官網原始公告，皆為媒體引述。
   參考方向：健康智庫〈飲食也會引發偏頭痛?〉2023/02/06。 */
(function(){
  const REFS = [
    {title:'全台20萬人確診偏頭痛！女性是男性3倍，專家揭示「54321」辨識口訣與就醫指南',source:'元氣網（引述健保署）',url:'https://health.udn.com/health/story/5965/9358128'},
    {title:'難纏偏頭痛 全台200萬人深受其害 醫：出現這些症狀快就醫別再吃止痛藥',source:'TVBS健康2.0',url:'https://health.tvbs.com.tw/medical/329310'}
  ];
  const TABLE = {headers:['54321口訣','內容'], rows:[
    ['5','頭痛發作5次以上'],
    ['4','每次持續4小時到3天'],
    ['3（疼痛特徵）','至少2項：單側、搏動性、中重度疼痛、活動時加劇'],
    ['2（伴隨症狀）','至少1項：噁心、嘔吐、畏光、怕吵'],
    ['1','符合以上，很可能是偏頭痛，建議由神經內科醫師診斷']
  ]};
  const TAGS = ['偏頭痛','頭痛','慢性偏頭痛','神經內科','女性健康'];

  const DP_N = {id:'dp-migraine-n', type:'data_scope', title:'偏頭痛人數有兩種算法',
    desc:'健保署長2026年指出，113年以偏頭痛為主診斷就醫約20萬人；依流行病學盛行率（約9.1%）推估，實際受影響者近200萬人。一個是就醫人數、一個是推估人數，AI 沒有替你挑選。',
    current:'113年以偏頭痛為主診斷就醫的有20萬2,450人',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約20萬人', value:'113年健保主診斷就醫', note:'元氣網2026-03引述健保署長（目前採用）'},
      {label:'近200萬人', value:'依盛行率推估', note:'盛行率9.1%，TVBS 2021報導；屬推估'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'偏頭痛不只是頭痛：54321口訣辨識，別讓止痛藥越吃越痛',
    update_date:'2026/11/23',
    intro:'元氣網2026年引述健保署長，113年以偏頭痛為主診斷就醫的有20萬2,450人，但依盛行率推估，實際受偏頭痛困擾的人近200萬，女性約為男性的3倍。偏頭痛常被當成一般頭痛自行吃止痛藥處理，患者平均要多年才獲得正確診斷；學會與醫師建議以「54321」口訣初步辨識。',
    sections:[
      {heading:'偏頭痛「54321」辨識口訣',format:'table',table:TABLE},
      {heading:'慢性偏頭痛與止痛藥過度使用',format:'bullets',items:[
        '慢性偏頭痛指每月頭痛15天以上、其中8天具偏頭痛特徵，且持續3個月以上（台灣頭痛學會時任理事長，TVBS報導）。',
        '長期自行服用止痛藥，可能演變成「藥物過度使用頭痛」，反而讓頭痛更頻繁。',
        '發作頻繁者可與醫師討論預防性治療，規律使用至少6個月再評估調整，不要自行中斷。'
      ]},
      {heading:'健保給付與就醫建議',format:'bullets',items:[
        '健保有條件給付CGRP單株抗體與肉毒桿菌素治療慢性偏頭痛，須至少3種口服預防藥治療無效、由神經專科醫師處方並經事前審查。',
        '記錄頭痛日記（日期、時間長短、可能誘因、用藥），有助醫師診斷與評估療效。',
        '睡眠不規律、壓力、飲酒、空腹或特定食物都可能是誘發因素，個人誘因各不相同。'
      ]}
    ],
    think_tank_view:'偏頭痛是會影響工作與生活品質的神經疾病，不是「忍一下就好」的小毛病。若一個月痛好幾次、每次都要吃止痛藥，就是該看神經內科的訊號。透過頭痛日記找出自己的誘因、在醫師指導下使用預防性治療，比一痛就吞止痛藥更能把生活拿回來。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'就醫人數與健保給付條件為媒體引述健保署長，盛行率與定義為媒體引述學會，皆已標示出處；未使用療效保證用語，未涉及具體藥品品牌。',
    ai_rationale:{basis:['沿用步驟1洞察：113年健保主診斷就醫20萬2,450人（元氣網引述健保署）','54321口訣與健保給付條件取自同篇報導'],
      layout_reason:'偏頭痛最常見的問題是「不知道自己是偏頭痛」，先用54321口訣表格幫助辨識，再談止痛藥過度使用，最後給健保資源與就醫建議。',
      tone:'專業易懂', tone_reason:'診斷與給付條件需要精確描述。',
      to_verify:['健保給付條件請以健保署藥品給付規定原文核對','9.1%盛行率的原始研究與年份']},
    decision_points:[DP_N]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'頭痛到想躲進黑暗房間？可能是偏頭痛',
    update_date:'2026/11/23',
    intro:'一痛就是大半天、怕光怕吵、還會想吐？這可能不是普通頭痛。媒體引述健保署長，113年有20萬2,450人因偏頭痛就醫，但推估真正受困擾的人近200萬，女生大約是男生的3倍。很多人習慣一痛就吞止痛藥，結果越吃越痛。',
    sections:[
      {heading:'用「54321」檢查一下',format:'table',table:TABLE},
      {heading:'止痛藥別越吃越多',format:'bullets',items:[
        '一個月痛超過15天、連續3個月，就屬於慢性偏頭痛。',
        '止痛藥吃太頻繁，可能變成「吃藥吃出來的頭痛」。',
        '常常發作的人，可以請醫師評估預防性的治療。'
      ]},
      {heading:'看醫生前可以先做',format:'bullets',items:[
        '寫頭痛日記：哪天痛、痛多久、前面吃了什麼、睡得好不好。',
        '健保對難治的慢性偏頭痛有條件給付新型治療，可問神經內科醫師。',
        '留意自己的誘因，像熬夜、壓力、喝酒或空腹。'
      ]}
    ],
    think_tank_view:'偏頭痛不是想太多，也不是忍忍就好。如果每個月都被它打亂好幾天，就帶著頭痛日記去看神經內科，讓醫師幫你找出更適合的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'就醫人數與給付條件為媒體引述健保署長並已標明，未使用療效保證用語，未涉及具體藥品品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以典型發作情境切入，再給自我檢查與就醫準備。', tone:'生活親切', tone_reason:'給常頭痛的上班族與女性讀者。', to_verify:['健保給付條件以健保署規定為準']},
    decision_points:[DP_N]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'偏頭痛：54321口訣辨識',
    update_date:'2026/11/23',
    intro:'113年有20萬2,450人以偏頭痛為主診斷就醫（媒體引述健保署），推估受影響者近200萬人，女性約為男性3倍。',
    sections:[
      {heading:'54321口訣',format:'table',table:TABLE},
      {heading:'止痛藥過度使用',format:'bullets',items:[
        '每月頭痛15天以上、持續3個月屬慢性偏頭痛。',
        '頻繁吃止痛藥可能引發藥物過度使用頭痛。'
      ]},
      {heading:'就醫',format:'bullets',items:[
        '健保有條件給付慢性偏頭痛的CGRP單株抗體與肉毒桿菌素。',
        '記錄頭痛日記再就醫。'
      ]}
    ],
    think_tank_view:'頻繁頭痛別只靠止痛藥，找神經內科確診並評估預防性治療。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據為媒體引述健保署長並已標明，未使用療效保證用語，未涉及具體藥品品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為口訣、止痛藥、就醫三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['健保給付條件以健保署規定為準']},
    decision_points:[DP_N]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'偏頭痛', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'偏頭痛不是普通頭痛', primary_visual:'約 20 萬人', secondary_message:'女性約為男性 3 倍', action_priority:'用 54321 辨識、別亂吃止痛藥'},
    headline_hook:'頭痛怕光又想吐？', headline_main:'偏頭痛 54321 口訣', title_accent:'54321',
    hero_message:'女性約為男性 3 倍', hero_support:'偏頭痛就醫者女男比約 3:1（媒體引述健保署）',
    knowledge_title:'54321 辨識口訣', knowledge_note:'符合口訣，**建議看神經內科**',
    knowledge_cards:[
      {label:'5 次以上', icon:'check', lines:['頭痛發作','5 次以上']},
      {label:'4 小時–3 天', icon:'pressure', lines:['每次發作','持續 4 小時到 3 天']},
      {label:'2 項疼痛特徵', icon:'brain', lines:['單側、搏動性','中重度、活動加劇']},
      {label:'1 項伴隨症狀', icon:'check', lines:['噁心、嘔吐','畏光、怕吵']}
    ],
    primary_stat:{value:'約 20 萬人', label:'113 年偏頭痛主診斷就醫', note:'媒體引述健保署：20萬2,450人｜推估受影響近 200 萬人'},
    secondary_stats:[
      {value:'3:1', label:'女性與男性比例'},
      {value:'15 天', label:'每月頭痛達此屬慢性'}
    ],
    action_title:'頭痛這樣處理',
    action_cards:[
      {key:'記', text:'寫頭痛日記，記錄時間、誘因與用藥'},
      {key:'避', text:'規律作息，留意熬夜、飲酒、空腹等誘因'},
      {key:'限', text:'別一痛就吃止痛藥，避免越吃越痛'},
      {key:'醫', text:'頻繁發作看神經內科，評估預防治療'}
    ],
    carousel_suggestion:{reason:'若想把辨識、止痛藥與治療資源分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'是不是偏頭痛', headline_main:'54321 口訣自我檢查'},
      {layout_type:'data', headline_hook:'偏頭痛有多常見', headline_main:'推估近 200 萬人'},
      {layout_type:'action', headline_hook:'止痛藥別亂吃', headline_main:'頭痛日記這樣寫'}]},
    hashtags:['偏頭痛','頭痛','神經內科','女性健康'],
    sources:['衛生福利部中央健康保險署（媒體引述）','台灣頭痛學會（媒體引述）'],
    illustration_category:'brain',
    illustration:{topic:'偏頭痛', audience:'上班族與女性', scene:'一位女性在昏暗安靜的房間裡閉眼休息，手扶額頭，桌上放著筆記本記錄頭痛日記',
      emotion:'疲憊但有方法應對', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A woman resting with eyes closed in a dim quiet room, hand on her forehead, a notebook headache diary on the table, tired but coping, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：113年健保主診斷就醫20萬2,450人（媒體引述健保署）','54321口訣取自北榮醫師受訪'],
      layout_reason:'偏頭痛的關鍵是辨識，選 knowledge：54321 四個條件當主角，就醫人數退到下方，最後給 4 個處理方式。',
      tone:'專業易懂', tone_reason:'辨識條件需清楚可對照。',
      to_verify:['就醫人數為媒體引述，健保署原始資料未取得']},
    decision_points:[Object.assign({}, DP_N, {current:'約 20 萬人｜113 年偏頭痛主診斷就醫'})],
    content_check_note:'就醫人數與比例為媒體引述健保署並標明，口訣引述醫師，未使用療效保證用語，未涉及具體藥品品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'偏頭痛',
    collect:{
      summary:'偏頭痛是常見且影響工作與生活品質的神經疾病，健保主診斷就醫約20萬人、推估受影響者近200萬人，女性約為男性3倍；健保已有條件給付慢性偏頭痛新型治療，但許多人仍自行服用止痛藥延誤診斷，是值得長期溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約20萬人以偏頭痛為主診斷就醫：健保署長於2026年3月指出，113年健保資料中以偏頭痛為主診斷就醫者20萬2,450人，依流行病學推估實際受影響者近200萬人。',tag:'官方統計',source:{name:'元氣網：全台20萬人確診偏頭痛！女性是男性3倍',url:'https://health.udn.com/health/story/5965/9358128'}},
        {item:'年度趨勢方向',desc:'約18萬人增至約20萬人：同一報導列出健保主診斷就醫人數，109年18萬486人、111年20萬2,752人、112年21萬51人、113年20萬2,450人，近年大致持平在20萬人上下。',tag:'官方統計',source:{name:'元氣網：全台20萬人確診偏頭痛！女性是男性3倍',url:'https://health.udn.com/health/story/5965/9358128'}},
        {item:'政策動向',desc:'至少3種口服預防藥無效才給付：健保有條件給付CGRP單株抗體與肉毒桿菌素治療慢性偏頭痛，須經神經專科醫師處方與事前審查，醫界反映給付期間較國外指引短。',tag:'官方統計',source:{name:'元氣網：全台20萬人確診偏頭痛！女性是男性3倍',url:'https://health.udn.com/health/story/5965/9358128'}},
        {item:'好發族群年齡層',desc:'女性約為男性3倍：女性青春期後盛行率快速上升，40至49歲為另一高峰，盛行率約9.1%（台灣頭痛學會時任理事長受訪，2021年報導）。',tag:'市場觀察',source:{name:'TVBS：難纏偏頭痛 全台200萬人深受其害',url:'https://health.tvbs.com.tw/medical/329310'}}
      ],
      product_view:['機會：偏頭痛好發於工作年齡女性，可從失能與工作生產力角度說明健康管理的重要。','機會：頭痛日記、就醫提醒可作為健康管理服務內容。','風險：不得暗示特定藥物或療法的療效，給付條件應以健保署公告為準。'],
      marketing_view:['機會：「54321」口訣好記，適合做互動自我檢查內容。','機會：職場女性是核心溝通對象，可結合工作壓力與作息主題。','風險：避免把頭痛一律歸因為偏頭痛，需提醒由醫師診斷。'],
      alert_level:'low',
      alert_reason:'屬長期慢性疾病議題，無急迫時效事件；健保給付條件若有調整可作為溝通時點。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('患者平均要多年才獲得正確診斷','SOURCE_EVIDENCE','claim_without_source',
          '「平均多年才確診」未標示出處與具體年數，參考資料中僅有媒體報導的描述。','low','no',
          null,'no','clarify','建議補出處或刪除。',
          '不少患者經過一段時間才獲得正確診斷'),
        F('113年以偏頭痛為主診斷就醫的有20萬2,450人','SOURCE_EVIDENCE','secondary_source',
          '就醫人數為媒體引述健保署長說法，健保署原始統計未列入參考資料；報導中「偏頭痛」與「慢性偏頭痛」主診斷口徑也不一致。','medium','yes',
          '健保署偏頭痛主診斷就醫人數統計與ICD代碼範圍。','no','confirm','媒體報導內文口徑不一。',
          '媒體引述健保署長，113年以偏頭痛為主診斷就醫約20萬人',
          ['113年有20萬2,450人']),
        F('長期自行服用止痛藥，可能演變成「藥物過度使用頭痛」','MEDICAL_INTERPRETATION','threshold_missing',
          '未說明多頻繁算「過度使用」，讀者無法判斷自己的用藥是否需要調整。','low','no',
          null,'no','clarify','國際頭痛分類對不同藥物訂有每月使用天數門檻，建議由醫師評估。',
          '長期頻繁自行服用止痛藥（例如每月多日使用），可能演變成「藥物過度使用頭痛」，用藥頻率宜與醫師討論',
          ['止痛藥吃太頻繁','頻繁吃止痛藥可能引發藥物過度使用頭痛']),
        F('健保對難治的慢性偏頭痛有條件給付新型治療','DATA_FACTUAL_ACCURACY','condition_unstated',
          '「難治」的條件未說明（至少3種口服預防藥無效、事前審查），讀者可能誤以為容易取得。','low','no',
          null,'no','clarify','屬條件說明。',
          '健保對試過至少3種口服預防藥仍無效的慢性偏頭痛，有條件給付新型治療')
      ],
      card:[
        F('約 20 萬人','SOURCE_EVIDENCE','secondary_source',
          '主數字來自媒體引述健保署長，卡上來源寫「媒體引述」但未標年份與報導名稱。','low','no',
          null,'no','clarify','屬出處層級說明。',
          '約 20 萬人（2026 年媒體引述健保署）'),
        F('每月頭痛達此屬慢性','MEDICAL_INTERPRETATION','definition_incomplete',
          '慢性偏頭痛定義還需其中8天具偏頭痛特徵、持續3個月，卡面只寫15天容易誤解。','low','no',
          null,'no','revise','屬定義完整性。',
          '每月 15 天以上且持續 3 個月')
      ]
    },
    title_alts:[
      '偏頭痛不只是頭痛：54321口訣辨識，別讓止痛藥越吃越痛',
      '頭痛到想躲進黑暗房間？可能是偏頭痛',
      '推估近200萬人受偏頭痛所苦：辨識、用藥與健保給付一次看'
    ],
    card_title_alts:[
      ['頭痛怕光又想吐？','偏頭痛 54321 口訣'],
      ['女性約為男性 3 倍','偏頭痛辨識與處理'],
      ['止痛藥越吃越痛？','認識偏頭痛']
    ],
    data_addon:[
      '健保主診斷就醫人數：109年18萬486人、111年20萬2,752人、112年21萬51人、113年20萬2,450人（媒體引述健保署）。',
      '健保署長表示，健保給付的偏頭痛用藥約七成為預防性治療、三成為急性緩解藥物。',
      '慢性偏頭痛定義：每月頭痛15天以上、其中8天具偏頭痛特徵，持續3個月以上。'
    ],
    cta:'這個月開始寫頭痛日記，記下每次頭痛的時間、長短與用藥；若一個月發作多次，帶著日記去看神經內科。'
  });
})();
