/* v6 示範主題：科技頸（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-21。數據來源：TVBS健康2.0 2025-04（陽明交通大學附設醫院神經外科醫師受訪：低頭角度與頸椎受力）、
   科技新報 2014-11-30（引述美國脊椎外科醫師Kenneth Hansraj 研究推算：60度時約27公斤）。
   查無國健署或國內官方科技頸、頸椎病盛行率統計；受力數字為模型推算值。
   參考方向：健康智庫〈低頭族注意！小心滑出科技頸與退化〉2026/05、〈低頭族愛注意 小心「科技頸」〉2023/05。 */
(function(){
  const TV = 'https://health.tvbs.com.tw/regimen/354366';
  const TN = 'https://technews.tw/2014/11/30/text-neck%ef%bc%9ahow-smartphones-are-damaging-our-spines/';
  const REFS = [
    {title:'滑手機滑到頸椎壞掉？低頭到「這個角度」 相當於脖子扛了一個小孩',source:'TVBS健康2.0',url:TV},
    {title:'Text Neck：How smartphones are damaging our spines（報導引述 Hansraj 研究）',source:'科技新報',url:TN}
  ];
  const TABLE = {headers:['低頭角度','頸椎承受（推算）'], rows:[
    ['0度（頭直立）','約5公斤'],
    ['15度','約12公斤'],
    ['30度','約18公斤'],
    ['45度','約22公斤'],
    ['60度','約27公斤（國外研究推算）']
  ]};
  const TAGS = ['科技頸','低頭族','頸椎保健','肩頸痠痛','3C使用'];

  const DP_MODEL = {id:'dp-tn-model', type:'data_scope', title:'受力數字是模型推算值',
    desc:'各角度的頸椎受力數字來自國外脊椎外科醫師2014年的模型推算，並非實測或國內統計；國內醫師受訪時沿用相近數字。AI 沒有替你決定是否在內容中註明「推算」。',
    current:'標示為「推算」並註明來源',
    options:[{label:'沿用目前寫法', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'科技頸：低頭60度，脖子像扛了一個小孩',
    update_date:'2026/11/21',
    intro:'長時間低頭看手機、平板或電腦，頸部肌肉與頸椎承受的負擔會隨低頭角度增加，造成肩頸痠痛、頭痛，長期可能加速頸椎退化，俗稱「科技頸」。陽明交通大學附設醫院神經外科醫師2025年受訪指出，頭直立時頸椎約承受5公斤，低頭15度增至12公斤、30度約18公斤、45度約22公斤；國外研究推算，低頭60度時約達27公斤。',
    sections:[
      {heading:'低頭角度與頸椎受力（推算）',format:'table',table:TABLE},
      {heading:'科技頸的警訊',format:'bullets',items:[
        '後頸、肩膀痠痛僵硬，常伴隨頭痛。',
        '頭部習慣性前傾、圓肩駝背。',
        '若出現手臂麻、無力或刺痛，可能是神經受壓迫，應盡快就醫。'
      ]},
      {heading:'日常預防',format:'bullets',items:[
        '把手機或螢幕抬到接近視線高度，減少低頭角度。',
        '每使用一段時間就起身活動，做收下巴、肩胛後收等伸展。',
        '調整桌椅高度，讓螢幕上緣約與眼睛同高。',
        '睡眠時選擇高度合適的枕頭，避免頸部過度彎曲。'
      ]}
    ],
    think_tank_view:'科技頸不是一天造成的，而是每天幾小時的低頭累積。把螢幕抬高一點、每隔一陣子抬頭動一動，就是最划算的頸椎保健；手麻無力時，則別再拖延，盡早就醫。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'受力數字標明為醫師受訪與國外研究推算，提醒神經症狀就醫，未使用療效保證用語，未推薦特定枕頭或護頸商品。',
    ai_rationale:{basis:['低頭角度與頸椎受力（陽明交大附醫醫師2025年受訪）','60度約27公斤（Hansraj研究，科技新報2014年引述）'],
      layout_reason:'先用表格呈現角度與受力的對照，再列警訊，最後給日常預防。',
      tone:'專業易懂', tone_reason:'以具體數字引起注意，再給可行動的做法。',
      to_verify:['受力數字為模型推算，非實測','查無國內科技頸盛行率統計']},
    decision_points:[DP_MODEL]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'滑手機滑到脖子好痠？小心科技頸找上你',
    update_date:'2026/11/21',
    intro:'一直低頭滑手機，脖子越來越痠、肩膀越來越硬？醫師說，頭抬正時脖子只要撐大約5公斤，低頭45度就要撐22公斤左右，國外研究推算低頭60度時更接近27公斤，就像脖子上掛了一個小孩。',
    sections:[
      {heading:'低頭越多，脖子越累',format:'table',table:TABLE},
      {heading:'這些情況要注意',format:'bullets',items:[
        '脖子、肩膀常常痠痛，還會頭痛。',
        '頭習慣往前伸、背越來越駝。',
        '手開始麻、沒力氣，要趕快去看醫生。'
      ]},
      {heading:'這樣保護脖子',format:'bullets',items:[
        '把手機拿高一點，接近眼睛的高度。',
        '每隔一段時間站起來，做收下巴、夾背的動作。',
        '電腦螢幕上緣和眼睛差不多高。',
        '選一個高度剛好的枕頭。'
      ]}
    ],
    think_tank_view:'不用完全不滑手機，只要把手機抬高一點、記得常常抬頭動一動，脖子就會輕鬆很多。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明為醫師與國外研究推算，語氣親切，未使用療效保證用語，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以滑手機的情境帶出受力、警訊與保護。', tone:'生活親切', tone_reason:'給上班族與學生閱讀。', to_verify:[]},
    decision_points:[DP_MODEL]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'科技頸：低頭角度越大，脖子越累',
    update_date:'2026/11/21',
    intro:'醫師受訪指出，頭直立時頸椎約承受5公斤，低頭45度約22公斤；國外研究推算低頭60度約27公斤。',
    sections:[
      {heading:'角度與受力',format:'table',table:TABLE},
      {heading:'警訊',format:'bullets',items:[
        '肩頸痠痛、頭痛。',
        '手麻無力應就醫。'
      ]},
      {heading:'預防',format:'bullets',items:[
        '螢幕抬高到視線高度。',
        '定時起身伸展。'
      ]}
    ],
    think_tank_view:'抬高螢幕、定時活動，是預防科技頸最簡單的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明為推算，未使用療效保證用語，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為受力、警訊、預防三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_MODEL]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'科技頸', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'低頭越多，頸椎負擔越大', primary_visual:'約 27 公斤', secondary_message:'頭直立時只約 5 公斤', action_priority:'抬高螢幕、定時伸展'},
    headline_hook:'滑手機滑到脖子痠？', headline_main:'低頭 60 度像扛一個小孩', title_accent:'60 度',
    primary_stat:{kicker:'低頭 60 度・推算', value:'約 27 公斤', label:'頸椎承受的重量', note:'國外脊椎外科研究推算'},
    chart:{type:'bar', title:'低頭角度與頸椎受力（公斤，推算）', points:[
      {label:'0°', value:5, display:'5'},
      {label:'15°', value:12, display:'12'},
      {label:'30°', value:18, display:'18'},
      {label:'45°', value:22, display:'22'},
      {label:'60°', value:27, display:'27', highlight:true}
    ], note:'0–45° 為國內醫師受訪說法，60° 為國外研究推算'},
    secondary_stats:[
      {value:'約 5 公斤', label:'頭直立時頸椎受力'},
      {value:'約 12 公斤', label:'只低頭 15 度'}
    ],
    action_title:'這樣保護頸椎',
    action_cards:[
      {key:'抬', text:'手機、螢幕抬到視線高度'},
      {key:'動', text:'定時起身，收下巴、夾背伸展'},
      {key:'調', text:'調整桌椅與枕頭高度'},
      {key:'醫', text:'手麻、無力請盡快就醫'}
    ],
    carousel_suggestion:{reason:'若想把受力數據、警訊與伸展分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'低頭的代價', headline_main:'60 度約 27 公斤'},
      {layout_type:'knowledge', headline_hook:'科技頸警訊', headline_main:'手麻無力要就醫'},
      {layout_type:'action', headline_hook:'每天 3 分鐘', headline_main:'肩頸伸展'}]},
    hashtags:['科技頸','低頭族','頸椎保健','肩頸痠痛'],
    sources:['陽明交通大學附設醫院（媒體受訪）','國外脊椎外科研究（媒體引述）'],
    illustration_category:'bones-joints',
    illustration:{topic:'科技頸預防', audience:'上班族與學生', scene:'一位年輕上班族把手機舉到與視線同高，坐姿挺直，旁邊的筆電架高到眼睛高度',
      emotion:'輕鬆、挺拔', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young office worker holding a phone up at eye level with an upright posture, a laptop raised on a stand to eye height beside them, relaxed and upright mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['低頭角度與頸椎受力（醫師受訪與國外研究推算）'],
      layout_reason:'選 data：用角度與受力的長條圖讓讀者一眼看懂，下方給 4 個保護行動。',
      tone:'專業易懂', tone_reason:'數字具體、行動可照做。',
      to_verify:['受力為模型推算']},
    decision_points:[DP_MODEL],
    content_check_note:'數字標明為推算與出處，未使用療效保證用語，未推薦特定商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'科技頸',
    collect:{
      summary:'長時間低頭使用3C使頸椎負擔隨角度倍增，肩頸痠痛與頸椎退化年輕化成為常見話題；「抬高螢幕、定時伸展、神經症狀及早就醫」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'查無國內官方科技頸盛行率統計：科技頸為長時間低頭造成肩頸負擔的俗稱，並非正式診斷名稱，國健署未公布相關統計。',tag:'市場觀察',source:{name:'TVBS健康2.0：滑手機滑到頸椎壞掉？',url:TV}},
        {item:'年度趨勢方向',desc:'低頭45度頸椎約承受22公斤：陽明交通大學附設醫院神經外科醫師2025年受訪指出，頭直立時約5公斤，低頭15度約12公斤、30度約18公斤。',tag:'市場觀察',source:{name:'TVBS健康2.0：滑手機滑到頸椎壞掉？',url:TV}},
        {item:'政策動向',desc:'低頭60度推算約27公斤：國外脊椎外科醫師Kenneth Hansraj 2014年研究以模型推算，低頭角度越大頸椎負荷越高，常被國內衛教引用。',tag:'推估',source:{name:'科技新報：Text Neck（引述 Hansraj 研究）',url:TN}},
        {item:'好發族群年齡層',desc:'長時間使用手機與電腦者：醫師提醒肩頸痠痛、頭痛為常見表現，若出現手臂麻木無力，可能是神經受壓迫，應盡快就醫。',tag:'市場觀察',source:{name:'TVBS健康2.0：滑手機滑到頸椎壞掉？',url:TV}}
      ],
      product_view:['機會：上班族與學生族群大，可結合職場健康與姿勢衛教服務。','機會：肩頸伸展適合做成健康管理APP或短影音內容。','風險：避免推薦特定枕頭、護頸或按摩商品；數字為推算值需標明。'],
      marketing_view:['機會：「脖子像扛一個小孩」的比喻有記憶點。','機會：長條圖呈現角度與重量，適合社群分享。','風險：避免誇大為「一定會頸椎退化」。'],
      alert_level:'low',
      alert_reason:'屬生活型健康議題，無時效性政策事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國外研究推算，低頭60度時約達27公斤','SOURCE_EVIDENCE','model_estimate',
          '已註明是推算，但未說明是2014年單一醫師的模型研究，讀者可能當成實測數據。','low','no',
          null,'no','clarify','屬證據性質說明。',
          '國外脊椎外科醫師2014年以模型推算，低頭60度時約達27公斤',
          ['國外研究推算低頭60度時更接近27公斤','國外研究推算低頭60度約27公斤']),
        F('長期可能加速頸椎退化','MEDICAL_INTERPRETATION','causation_overstated',
          '長時間低頭與頸椎退化的因果關係，目前研究證據不一，文中語氣可能讓讀者過度擔心。','low','no',
          null,'no','soften','屬表達強度問題。',
          '長期可能增加頸部不適，與頸椎退化的關聯仍在研究中'),
        F('把手機或螢幕抬到接近視線高度','MEDICAL_INTERPRETATION','missing_practical_info',
          '沒說明具體做法（如使用手機支架、筆電架高），讀者不易落實。','low','no',
          null,'no','clarify','補實作即可。',
          '把手機或螢幕抬到接近視線高度（可用支架或架高筆電）',
          ['把手機拿高一點，接近眼睛的高度','螢幕抬高到視線高度']),
        F('每使用一段時間就起身活動','TERMINOLOGY_LANGUAGE','vague_term',
          '「一段時間」沒有具體建議，讀者難以執行。','low','no',
          null,'no','clarify','可給參考做法並標明是一般建議。',
          '每使用約30至60分鐘就起身活動（一般建議）',
          ['每隔一段時間站起來','定時起身伸展'])
      ],
      card:[
        F('國外脊椎外科研究推算','SOURCE_EVIDENCE','model_estimate',
          '主數字為2014年模型推算，卡面未標年份。','low','no',
          null,'no','clarify','補年份即可。',
          '國外脊椎外科研究推算（2014）'),
        F('0–45° 為國內醫師受訪說法，60° 為國外研究推算','SOURCE_EVIDENCE','mixed_source_chart',
          '圖表混用兩個來源，雖已註明，讀者仍可能以為是同一研究。','low','no',
          null,'no','clarify','已標示來源。',
          '各角度數字皆為推算值（0–45° 醫師說法、60° 國外研究）')
      ]
    },
    title_alts:[
      '科技頸：低頭60度，脖子像扛了一個小孩',
      '滑手機滑到脖子好痠？小心科技頸找上你',
      '低頭族必看：頸椎受力與肩頸保健4招'
    ],
    card_title_alts:[
      ['滑手機滑到脖子痠？','低頭 60 度像扛一個小孩'],
      ['低頭族注意','頸椎保健 4 招'],
      ['抬頭挺胸','科技頸預防重點']
    ],
    data_addon:[
      '醫師受訪：頭部約占體重10%，以體重50公斤為例，頭部約5公斤。',
      '另有醫師說法：頭部前傾每增加15度，頸椎壓力增加約5至7公斤，各來源推算方式不完全一致。',
      '手臂麻木、無力可能為神經壓迫徵兆，應就醫評估。'
    ],
    cta:'今天就把手機舉高到眼睛的高度，並設一個每小時提醒，起身做10下收下巴與夾背。'
  });
})();
