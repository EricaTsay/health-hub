/* v6 示範主題：腸躁症（B4 消化・肝膽・呼吸）
   查證日期：2026-11-20。數據來源：國健署健康九九〈惱人的大腸激躁症〉（約一至兩成人口有此症狀、女男約2：1）、
   衛生福利部南投醫院〈腸激躁症〉衛教（依類型的飲食建議）、衛生福利部彰化醫院衛教（需先排除其他疾病）。
   註：健康九九網站查證當天無法開啟，數字取自搜尋摘要；國內腸躁症盛行率查無官方調查，「一至兩成」為衛教文章概估。
   參考方向：健康智庫〈腸胃道健康－腸躁症與小腸菌群過度增生〉2026/05。 */
(function(){
  const REFS = [
    {title:'惱人的大腸激躁症',source:'衛生福利部國民健康署（健康九九）',url:'https://health99.hpa.gov.tw/article/97'},
    {title:'腸激躁症（irritable bowel syndrome）',source:'衛生福利部南投醫院',url:'https://nant.mohw.gov.tw/?aid=509&iid=341&page_name=detail&pid=57'},
    {title:'衛教資訊：大腸急躁症',source:'衛生福利部彰化醫院',url:'https://www.chhw.mohw.gov.tw/zh/news/wellness-infos/aad0031c-0767-49e8-9c88-69e555bf7d82'}
  ];
  const TABLE = {headers:['類型','飲食調整方向'], rows:[
    ['便祕型','增加纖維、減少脂肪，多喝水'],
    ['腹瀉型','減少纖維與乳糖、果糖、山梨醇等糖類'],
    ['共通原則','規律三餐、記錄誘發食物，必要時諮詢營養師']
  ]};
  const TAGS = ['腸躁症','大腸激躁症','腹痛腹瀉','壓力管理','腸胃健康'];

  const DP_EST = {id:'dp-ibs-est', type:'data_scope', title:'盛行率是衛教概估',
    desc:'「約一至兩成人口有腸躁症狀」出自國健署健康九九衛教文章的概估，非官方調查；健康九九網站查證當天無法開啟，數字取自搜尋摘要。AI 標明為概估。',
    current:'約一至兩成人口有腸躁症狀（國健署衛教概估）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'改成不寫比例', action:'replace', from:'國民健康署衛教文章估計，約有一至兩成的人口有此症狀，女性約為男性的2倍。', to:''}]};

  const PRO = {
    content_type:'健康文章',
    title:'壓力一大就跑廁所？認識腸躁症的症狀、診斷與生活調整',
    update_date:'2026/11/20',
    intro:'腸躁症（大腸激躁症）是一種功能性腸道疾病，主要表現是與排便有關的腹部不適或疼痛，常伴隨腹脹、腹瀉或便祕。國民健康署衛教文章估計，約有一至兩成的人口有此症狀，女性約為男性的2倍。腸躁症與腸道蠕動異常、內臟感覺敏感與心理壓力有關，雖無法根治，但可透過生活調整與藥物緩解症狀。',
    sections:[
      {heading:'常見症狀',format:'bullets',items:[
        '反覆腹痛或不適，排便後常會緩解。',
        '腹瀉、便祕或兩者交替，伴隨腹脹。',
        '壓力大或緊張時症狀加重，也可能有頭痛、疲倦等非腸胃症狀。'
      ]},
      {heading:'先排除其他疾病',format:'bullets',items:[
        '腸躁症的症狀不具特異性，診斷前需排除其他疾病，必要時安排糞便檢查或大腸鏡。',
        '出現血便、體重減輕、半夜腹瀉、貧血或年紀較長才開始的症狀，應儘速就醫。',
        '慢性腹瀉不要自行服用止瀉或緩瀉藥，甲狀腺亢進等疾病也可能以慢性腹瀉表現。'
      ]},
      {heading:'依類型調整飲食',format:'table',table:TABLE}
    ],
    think_tank_view:'腸躁症是典型的「腦腸互相影響」：壓力會讓腸子更敏感，腸子不舒服又讓人更焦慮。治療不只是吃藥，規律作息、找出誘發食物、學習放鬆與壓力管理同樣重要。症狀改變或出現警訊時，請先就醫排除其他疾病。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率標明為國健署衛教概估，飲食建議引自衛福部南投醫院衛教，未使用療效保證用語，未推薦益生菌或特定藥品。',
    ai_rationale:{basis:['一至兩成、女男2：1取自國健署健康九九衛教（搜尋摘要）','飲食分型建議取自衛福部南投醫院衛教'],
      layout_reason:'先列症狀，再強調排除其他疾病，最後以表格整理飲食調整。',
      tone:'專業易懂', tone_reason:'避免讀者自我診斷。',
      to_verify:['健康九九原文當天無法開啟，數字需人工確認','國內盛行率查無官方調查']},
    decision_points:[DP_EST]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'一緊張就想跑廁所？可能是腸躁症在作怪',
    update_date:'2026/11/20',
    intro:'考試、開會、塞車時肚子就開始痛、想跑廁所？這可能是腸躁症。國健署的衛教文章估計，大約每10人就有1到2人有這種困擾，女生比男生多。腸躁症跟壓力、腸子太敏感有關，雖然不能根治，但可以靠生活調整讓它比較少出現。',
    sections:[
      {heading:'常見的不舒服',format:'bullets',items:[
        '肚子痛、脹氣，上完廁所會好一點。',
        '一下拉肚子、一下便祕。',
        '壓力大的時候特別嚴重。'
      ]},
      {heading:'先確定不是別的病',format:'bullets',items:[
        '大便有血、變瘦、半夜拉肚子，要趕快看醫生。',
        '不要自己一直吃止瀉藥或軟便藥。'
      ]},
      {heading:'吃東西這樣調整',format:'table',table:TABLE}
    ],
    think_tank_view:'試著記錄每天吃了什麼、心情如何、肚子舒不舒服，一兩週後就比較容易找出自己的地雷。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'比例標明為國健署衛教概估，未使用療效保證用語，未推薦益生菌或特定藥品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'從一緊張就想跑廁所的情境切入。', tone:'生活親切', tone_reason:'給上班族與學生閱讀。', to_verify:['比例需人工確認']},
    decision_points:[Object.assign({}, DP_EST, {options:[{label:'沿用目前資料', action:'keep'}]})]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'腸躁症：症狀、排除與飲食調整',
    update_date:'2026/11/20',
    intro:'國健署衛教概估約一至兩成人口有腸躁症狀。先排除其他疾病，再從飲食與壓力調整。',
    sections:[
      {heading:'症狀',format:'bullets',items:[
        '腹痛、腹脹、腹瀉便祕交替。'
      ]},
      {heading:'警訊',format:'bullets',items:[
        '血便、變瘦、夜間腹瀉要就醫。'
      ]},
      {heading:'飲食',format:'table',table:TABLE}
    ],
    think_tank_view:'腦腸互相影響，壓力管理和飲食調整一樣重要。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'比例標明為衛教概估，未使用療效保證用語，未推薦益生菌或特定藥品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為症狀、警訊、飲食三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['比例需人工確認']},
    decision_points:[Object.assign({}, DP_EST, {options:[{label:'沿用目前資料', action:'keep'}]})]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'腸躁症', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'一緊張就肚子痛，可能是腸躁症', primary_visual:'3 個特徵', secondary_message:'先排除其他疾病', action_priority:'飲食與壓力調整'},
    headline_hook:'一緊張就想跑廁所？', headline_main:'腸躁症 3 個特徵', title_accent:'3 個特徵',
    hero_message:'每 10 人約 1 到 2 人', hero_support:'有腸躁症狀（國健署衛教概估）',
    knowledge_title:'常見特徵', knowledge_note:'有**血便、變瘦、夜間腹瀉**要就醫',
    knowledge_cards:[
      {label:'腹痛不適', lines:['排便後常緩解']},
      {label:'排便改變', lines:['腹瀉、便祕','或兩者交替']},
      {label:'壓力加重', lines:['緊張時更嚴重']}
    ],
    action_title:'這樣調整',
    action_cards:[
      {key:'記', text:'記錄飲食與症狀，找出誘發食物'},
      {key:'吃', text:'依便祕型或腹瀉型調整飲食'},
      {key:'鬆', text:'規律作息，練習放鬆紓壓'},
      {key:'醫', text:'勿自行吃止瀉、軟便藥，先就醫'}
    ],
    carousel_suggestion:{reason:'若想把症狀、警訊與飲食分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'一緊張就想跑廁所？', headline_main:'腸躁症 3 個特徵'},
      {layout_type:'knowledge', headline_hook:'先排除', headline_main:'這些警訊要就醫'},
      {layout_type:'action', headline_hook:'飲食調整', headline_main:'便祕型與腹瀉型'}]},
    hashtags:['腸躁症','大腸激躁症','壓力管理','腸胃健康'],
    sources:['衛生福利部國民健康署','衛生福利部南投醫院'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'腸躁症與壓力', audience:'上班族與學生', scene:'上班族在辦公桌前閉眼深呼吸放鬆，桌上放著溫水',
      emotion:'放鬆、平靜', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker at their desk closing eyes and taking a deep breath to relax with a glass of warm water nearby, calm mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['特徵與飲食建議取自國健署與衛福部醫院衛教'],
      layout_reason:'核心是「認得特徵、先排除其他疾病」，選 knowledge：3 個特徵當主角，比例放在 Hero 並標明概估。',
      tone:'專業易懂', tone_reason:'避免自我診斷。',
      to_verify:['比例為衛教概估']},
    content_check_note:'比例標明為衛教概估，未使用療效保證用語，未推薦益生菌或特定藥品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'腸躁症',
    collect:{
      summary:'腸躁症是常見的功能性腸道疾病，國健署衛教概估約一至兩成人口有症狀、女性多於男性；症狀與壓力密切相關，診斷前需排除其他疾病，飲食與壓力管理是溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'一至兩成（概估）：國健署健康九九衛教文章估計，約有一至兩成的人口有大腸激躁症症狀，國內無官方調查。',tag:'推估',source:{name:'國民健康署：惱人的大腸激躁症',url:'https://health99.hpa.gov.tw/article/97'}},
        {item:'好發族群年齡層',desc:'女性約為男性2倍（概估）：同一衛教文章指出，腸躁症女性與男性比例約為2：1。',tag:'推估',source:{name:'國民健康署：惱人的大腸激躁症',url:'https://health99.hpa.gov.tw/article/97'}},
        {item:'政策動向',desc:'先排除其他疾病：衛福部彰化醫院衛教指出，腸躁症症狀不具特異性，診斷前須排除其他疾病，必要時安排糞便檢查或大腸鏡。',tag:'官方統計',source:{name:'衛福部彰化醫院：衛教資訊',url:'https://www.chhw.mohw.gov.tw/zh/news/wellness-infos/aad0031c-0767-49e8-9c88-69e555bf7d82'}},
        {item:'年度趨勢方向',desc:'依類型調整飲食：衛福部南投醫院衛教建議，便祕型增加纖維、減少脂肪，腹瀉型減少纖維與乳糖、果糖、山梨醇等糖類。',tag:'官方統計',source:{name:'衛福部南投醫院：腸激躁症',url:'https://nant.mohw.gov.tw/?aid=509&iid=341&page_name=detail&pid=57'}}
      ],
      product_view:['機會：腸躁症與職場壓力相關，可作為員工與保戶身心健康內容。','機會：飲食記錄、壓力管理工具適合做互動內容。','風險：避免推薦益生菌、保健品為治療方式。'],
      marketing_view:['機會：考試季、年末工作高峰期是溝通時機。','機會：「一緊張就跑廁所」共鳴度高。','風險：比例為概估，避免強調數字。'],
      alert_level:'low',
      alert_reason:'屬常見功能性腸胃問題，無急迫時效事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國民健康署衛教文章估計，約有一至兩成的人口有此症狀，女性約為男性的2倍','SOURCE_EVIDENCE','educational_estimate',
          '比例出自衛教文章的概估，未說明研究來源與年份，文中寫法容易被當成官方統計。','medium','yes',
          '國健署健康九九〈惱人的大腸激躁症〉原文與所引研究。','yes','confirm','網站當天無法開啟。',
          '國民健康署衛教文章概估（研究來源未載明），約有一至兩成的人口有此症狀，女性約為男性的2倍',
          ['大約每10人就有1到2人有這種困擾','約一至兩成人口有腸躁症狀']),
        F('出現血便、體重減輕、半夜腹瀉、貧血或年紀較長才開始的症狀','MEDICAL_INTERPRETATION','vague_term',
          '「年紀較長」未定義年齡，讀者難以判斷。','low','no',
          null,'no','clarify','屬用語精確度。',
          '出現血便、體重減輕、半夜腹瀉、貧血，或中年以後才開始的症狀'),
        F('雖無法根治，但可透過生活調整與藥物緩解症狀','MEDICAL_INTERPRETATION','balanced','說法平衡，但未說明藥物需依症狀由醫師開立。','low','no',
          null,'no','clarify','屬用藥提醒。',
          '雖無法根治，但可透過生活調整，以及醫師依症狀開立的藥物緩解'),
        F('一兩週後就比較容易找出自己的地雷','MEDICAL_INTERPRETATION','outcome_generalization',
          '時間與效果缺乏依據，個人差異大。','low','no',
          null,'no','clarify','屬語氣調整。',
          '持續記錄，有助和醫師或營養師一起找出誘發因素')
      ],
      card:[
        F('有腸躁症狀（國健署衛教概估）','SOURCE_EVIDENCE','educational_estimate',
          'Hero 比例為衛教概估，卡面已標「概估」，但未說明非官方調查。','low','no',
          null,'no','clarify','屬來源性質說明。',
          '有腸躁症狀（國健署衛教文章概估，非官方調查）'),
        F('依便祕型或腹瀉型調整飲食','MEDICAL_INTERPRETATION','vague_term',
          '未說明分型需經醫師判斷，讀者可能自行歸類。','low','no',
          null,'no','clarify','屬執行細節。',
          '依醫師判斷的類型調整飲食')
      ]
    },
    title_alts:[
      '壓力一大就跑廁所？認識腸躁症的症狀、診斷與生活調整',
      '一緊張就想跑廁所？可能是腸躁症在作怪',
      '腸躁症3個特徵：先排除其他疾病，再調整飲食與壓力'
    ],
    card_title_alts:[
      ['一緊張就想跑廁所？','腸躁症 3 個特徵'],
      ['腦腸互相影響','壓力管理很重要'],
      ['便祕型、腹瀉型','飲食怎麼調整']
    ],
    data_addon:[
      '腸躁症可能伴隨頭痛、頭暈、疲倦、肌肉痛等非腸胃症狀。',
      '甲狀腺亢進等疾病也可能以慢性腹瀉表現，需由醫師鑑別。',
      '行為治療與心理治療也可能改善腸躁症狀。'
    ],
    cta:'這兩週試著記錄每天的飲食、壓力與腸胃症狀，就醫時帶給醫師；若有血便或體重減輕，請立即就醫。'
  });
})();
