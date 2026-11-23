/* v6 示範主題：失眠與助眠藥物（B5 心理健康與精神疾患）
   查證日期：2026-11-20。數據來源：TVBS 2026-06-09（引述健保署2023年安眠藥開立量、台灣睡眠醫學學會2019年慢性失眠盛行率）、
   鏡週刊轉載健康醫療網 2026-11-03（台灣睡眠醫學學會理事受訪：失眠定義、多版本盛行率）、NOW健康 2025-07-02（振興醫院精神醫學部主任：CBT-I與用藥）、
   三立新聞網 2026-08-12（義大醫院醫師：睡眠衛生）。查無2020年後國內官方慢性失眠盛行率調查。
   參考方向：健康智庫〈半夜睡不著覺 失眠怎麼辦？〉2024/03、〈常常睡不好？教你正確使用安眠藥！〉2024/12。 */
(function(){
  const TV = 'https://news.tvbs.com.tw/life/3216345';
  const MM = 'https://www.mirrormedia.mg/external/amp/healthnews_70231';
  const YAM = 'https://n.yam.com/Article/20250702670824';
  const SET = 'https://www.setn.com/news/1888139';
  const REFS = [
    {title:'睡眠階級化／醫療塞車撐起千億級睡眠消費鏈 揭「好眠」真相',source:'TVBS新聞網',url:TV},
    {title:'睡不飽、睡醒還疲倦就是失眠？醫教觀察重點 這些人要留意',source:'鏡週刊（健康醫療網）',url:MM},
    {title:'失眠分成3種型態！醫揭非單一成因 常與身心問題共病',source:'NOW健康（蕃新聞轉載）',url:YAM},
    {title:'半夜常驚醒小心是睡眠障礙！醫揭5大成因，靠「睡眠衛生」找回一夜好眠',source:'三立新聞網',url:SET}
  ];
  const TABLE = {headers:['睡眠衛生6關鍵','怎麼做'], rows:[
    ['規律作息','平日、週末都固定就寢與起床時間'],
    ['睡前放鬆','睡前一小時避免使用電子產品與高度專注工作'],
    ['控制小睡','午睡20至30分鐘內，避免下午3點後補眠'],
    ['規律運動','避免睡前2至3小時內高強度運動'],
    ['優化環境','臥室安靜、涼爽、黑暗'],
    ['避開刺激飲品','睡前4至6小時避免酒精與含咖啡因飲品']
  ]};
  const TAGS = ['失眠','安眠藥','睡眠衛生','失眠認知行為治療','睡眠健康'];

  const DP_PREV = {id:'dp-ins-prev', type:'data_scope', title:'失眠盛行率有好幾種說法',
    desc:'常見數字包括：慢性失眠10.7%（台灣睡眠醫學學會2019年調查）、成人失眠症狀23.5%（國健署2019年）、失眠約17%（世界睡眠協會2023年調查）。定義、年份與調查單位都不同，AI 沒有替你挑選。',
    current:'慢性失眠10.7%（台灣睡眠醫學學會2019年調查）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'10.7%', value:'慢性失眠', note:'台灣睡眠醫學學會2019年調查（目前採用；另有報導歸為國健署）'},
      {label:'23.5%', value:'成人失眠症狀', note:'國健署2019年報告（媒體引述）'},
      {label:'約17%', value:'失眠盛行率', note:'世界睡眠協會2023年調查（媒體引述）'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'失眠與助眠藥物：先調整睡眠習慣，用藥要遵醫囑',
    update_date:'2026/11/20',
    intro:'依精神醫學診斷標準，每週至少3個晚上難以入睡或維持睡眠、且持續至少3個月，才屬慢性失眠。依台灣睡眠醫學學會2019年調查，國內慢性失眠盛行率約10.7%；另據TVBS 2026年引述健保署統計，2023年全台醫療院所開立安眠藥達11億6,725萬顆。改善失眠的第一步是調整睡眠習慣，必要時再由醫師評估用藥或失眠認知行為治療。',
    sections:[
      {heading:'睡眠衛生6關鍵',format:'table',table:TABLE},
      {heading:'失眠認知行為治療與用藥',format:'bullets',items:[
        '振興醫院精神醫學部主任指出，睡眠衛教、壓力管理與失眠認知行為治療（CBT-I）都是有實證、能有效改善失眠的方式。',
        '經醫師診斷並建議用藥時，短期服用安眠藥在多數情況下安全有效；切勿突然停藥或自行加量，減藥應由醫師協助逐步進行。',
        '打鼾、白天嗜睡者可能有睡眠呼吸中止症，醫師提醒未確診前自行服用安眠藥可能掩蓋問題、增加風險。'
      ]},
      {heading:'何時該就醫',format:'bullets',items:[
        '失眠已持續數週以上，且影響白天精神、情緒或工作表現。',
        '合併打鼾、睡眠中呼吸暫停、腳部不適，或明顯憂鬱、焦慮。',
        '長輩服用安眠藥後出現頭暈、走路不穩，應回診調整，預防跌倒。'
      ]}
    ],
    think_tank_view:'安眠藥不是敵人，但也不是唯一的解方。先把作息、光線、咖啡因這些基本功做好，再讓醫師判斷是否需要藥物或失眠認知行為治療；用藥時遵照醫囑、不自行加減，才能真正睡得安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率標明調查單位與年份，安眠藥用量標明為媒體引述健保署，用藥建議標明醫師身分，未使用療效保證用語，未推薦特定藥品或助眠商品。',
    ai_rationale:{basis:['慢性失眠盛行率10.7%（台灣睡眠醫學學會2019年，TVBS引述）','2023年安眠藥開立11億6,725萬顆（TVBS引述健保署）'],
      layout_reason:'先用表格整理睡眠衛生6關鍵，再說明CBT-I與用藥原則，最後列出就醫時機。',
      tone:'專業易懂', tone_reason:'需兼顧去汙名（用藥）與正確使用。',
      to_verify:['10.7%的歸屬（學會或國健署）不同報導說法不一','11億6,725萬顆的健保署原始統計待查']},
    decision_points:[DP_PREV]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'躺了好久還睡不著？失眠先這樣做，安眠藥這樣吃',
    update_date:'2026/11/20',
    intro:'翻來覆去睡不著、半夜醒來就睡不回去，隔天整天昏昏沉沉？台灣睡眠醫學學會2019年調查，大約每10個人就有1個長期失眠。媒體引述健保署統計，2023年全台開出的安眠藥超過11億顆。其實改善失眠，可以先從生活習慣開始。',
    sections:[
      {heading:'好眠6件事',format:'table',table:TABLE},
      {heading:'關於治療和吃藥',format:'bullets',items:[
        '醫師說，調整睡眠習慣、紓解壓力，以及「失眠認知行為治療」都有研究證實有效。',
        '醫師開的安眠藥，短期照指示吃通常是安全的；不要突然停藥、也不要自己加量。',
        '常打呼、白天很想睡的人，先別自己買藥吃，可能是睡眠呼吸中止症，要先檢查。'
      ]},
      {heading:'這些時候去看醫生',format:'bullets',items:[
        '睡不好好幾週了，白天精神、心情都受影響。',
        '打呼很大聲、睡覺會停止呼吸，或心情一直很低落。',
        '爸媽吃安眠藥後頭暈、走路不穩，要回診調整。'
      ]}
    ],
    think_tank_view:'睡不好別硬撐，也別一下就怪自己。先試著把作息固定、睡前放下手機，還是不行就交給醫師評估，好好睡一覺是值得被認真對待的事。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明來源與年份，語氣親切，未使用療效保證用語，未推薦特定藥品或助眠商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以睡不著的情境帶出生活調整、用藥與就醫時機。', tone:'生活親切', tone_reason:'給失眠族與家人閱讀。', to_verify:['安眠藥用量原始統計']},
    decision_points:[DP_PREV]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'失眠：睡眠衛生6關鍵＋用藥原則',
    update_date:'2026/11/20',
    intro:'台灣睡眠醫學學會2019年調查，慢性失眠盛行率約10.7%。媒體引述健保署，2023年安眠藥開立11億6,725萬顆。',
    sections:[
      {heading:'睡眠衛生',format:'table',table:TABLE},
      {heading:'用藥原則',format:'bullets',items:[
        'CBT-I有實證。',
        '遵醫囑短期使用，勿自行停藥或加量。'
      ]},
      {heading:'就醫時機',format:'bullets',items:[
        '失眠數週以上影響白天。',
        '合併打鼾、憂鬱或服藥後頭暈。'
      ]}
    ],
    think_tank_view:'先做好睡眠衛生，必要時由醫師評估CBT-I或用藥。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明來源與年份，未使用療效保證用語，未推薦特定藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為衛生、用藥、就醫三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_PREV]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'失眠與助眠藥物', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'失眠先調整睡眠習慣，用藥遵醫囑', primary_visual:'約 11.7 億顆', secondary_message:'慢性失眠約每 10 人 1 人', action_priority:'睡眠衛生、CBT-I、正確用藥'},
    headline_hook:'躺了好久還睡不著？', headline_main:'失眠與安眠藥這樣面對', title_accent:'安眠藥',
    primary_stat:{kicker:'2023 年・全台', value:'約 11.7 億顆', label:'醫療院所開立安眠藥', note:'TVBS 引述健保署：11億6,725萬顆'},
    secondary_stats:[
      {value:'10.7%', label:'慢性失眠盛行率（2019 調查）'},
      {value:'3 個月', label:'每週 3 晚以上失眠且持續'}
    ],
    knowledge_title:'好眠 4 件事',
    knowledge_cards:[
      {label:'規律作息', lines:['固定起床時間']},
      {label:'睡前放鬆', lines:['睡前一小時放下手機']},
      {label:'控制小睡', lines:['午睡 30 分鐘內']},
      {label:'避開刺激', lines:['睡前 4–6 小時不喝酒、咖啡']}
    ],
    action_title:'用藥原則',
    action_cards:[
      {key:'評', text:'由醫師評估失眠原因'},
      {key:'行', text:'可考慮失眠認知行為治療'},
      {key:'遵', text:'短期依醫囑用藥，勿自行加量'},
      {key:'減', text:'停藥減藥與醫師討論'}
    ],
    carousel_suggestion:{reason:'若想把睡眠衛生、CBT-I 與用藥分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'2023 年', headline_main:'安眠藥開立約 11.7 億顆'},
      {layout_type:'action', headline_hook:'好眠基本功', headline_main:'睡眠衛生 6 關鍵'},
      {layout_type:'knowledge', headline_hook:'安眠藥這樣吃', headline_main:'正確用藥 4 原則'}]},
    hashtags:['失眠','安眠藥','睡眠衛生','睡眠健康'],
    sources:['健保署（媒體引述）','台灣睡眠醫學學會（媒體引述）'],
    illustration_category:'sleep',
    illustration:{topic:'失眠與好眠', audience:'失眠的上班族與長輩', scene:'一位成年人在昏暗的臥室把手機放到床頭櫃外，準備關燈入睡，床頭放著一杯溫水',
      emotion:'放鬆、安穩', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult in a dim bedroom placing a phone away from the bed and reaching to turn off the lamp, a glass of warm water on the nightstand, relaxed and calm mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['2023年安眠藥開立11億6,725萬顆（TVBS引述健保署）','慢性失眠10.7%（台灣睡眠醫學學會2019年）'],
      layout_reason:'選 data：安眠藥用量當主角引起關注，下方左列好眠習慣、右列用藥原則。',
      tone:'專業易懂', tone_reason:'不汙名化用藥，強調正確使用。',
      to_verify:['用藥量原始統計待查']},
    decision_points:[Object.assign({}, DP_PREV, {current:'10.7%（慢性失眠，2019 年調查）'})],
    content_check_note:'數字標明來源與年份，未使用療效保證用語，未推薦特定藥品或助眠商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'失眠與助眠藥物',
    collect:{
      summary:'國內慢性失眠約一成，安眠藥年開立量逾11億顆；醫師強調睡眠衛生與失眠認知行為治療是有實證的第一步，用藥則需遵醫囑，「好眠習慣＋正確用藥」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'慢性失眠盛行率約10.7%：TVBS 2026年引述台灣睡眠醫學學會2019年調查（另有報導將此數字歸為國健署報告），查無2020年後國內官方慢性失眠調查。',tag:'市場觀察',source:{name:'TVBS新聞網：睡眠階級化／醫療塞車撐起千億級睡眠消費鏈',url:TV}},
        {item:'年度趨勢方向',desc:'約11.7億顆安眠藥：TVBS 2026年引述健保署統計，2023年全台醫療院所開立安眠藥約11.7億顆（報導原文為11億6千7百餘萬顆）。',tag:'官方統計',source:{name:'TVBS新聞網：睡眠階級化／醫療塞車撐起千億級睡眠消費鏈',url:TV}},
        {item:'政策動向',desc:'CBT-I為實證有效的失眠治療：振興醫院精神醫學部主任指出，睡眠衛教、壓力管理與失眠認知行為治療都能有效改善失眠，短期遵醫囑用藥多數安全有效。',tag:'市場觀察',source:{name:'NOW健康：失眠分成3種型態！醫揭非單一成因',url:YAM}},
        {item:'好發族群年齡層',desc:'40.9%民眾睡眠狀況不佳：精神健康基金會2024年全國精神健康指數調查（NOW健康引述），失眠常與焦慮、憂鬱等身心問題共病。',tag:'市場觀察',source:{name:'NOW健康：失眠分成3種型態！醫揭非單一成因',url:YAM}}
      ],
      product_view:['機會：睡眠是健康管理的基礎指標，可結合穿戴裝置或睡眠衛教服務。','機會：長輩服用安眠藥與跌倒相關，可連結意外與長照保障說明。','風險：避免推薦助眠保健食品或特定藥品；不暗示服務可治療失眠。'],
      marketing_view:['機會：3月世界睡眠日是固定溝通檔期。','機會：「睡眠衛生6關鍵」適合做成可收藏的清單。','風險：安眠藥議題易汙名化，需同時說明正確用藥。'],
      alert_level:'low',
      alert_reason:'屬長期健康議題，無時效性政策事件；適合世界睡眠日（3月）前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('2023年全台醫療院所開立安眠藥達11億6,725萬顆','SOURCE_EVIDENCE','secondary_citation',
          '已註明是TVBS引述健保署，但未連到健保署原始統計；且「開立顆數」不等於實際服用量或使用人數。','medium','yes',
          '健保署安眠鎮靜藥物年度申報量原始統計。','yes','confirm','數字本身未必有誤，屬二手引述與口徑說明。',
          '2023年全台醫療院所開立安眠藥達11億6,725萬顆（媒體引述健保署，為開立量而非服用人數）',
          ['2023年全台開出的安眠藥超過11億顆','2023年安眠藥開立11億6,725萬顆']),
        F('國內慢性失眠盛行率約10.7%','SOURCE_EVIDENCE','conflicting_attribution',
          '同一數字在不同報導中分別歸為台灣睡眠醫學學會調查與國健署報告，出處歸屬不一致。','low','yes',
          '10.7%的原始調查報告。','no','confirm','出處歸屬待確認。',
          '國內慢性失眠盛行率約10.7%（台灣睡眠醫學學會2019年調查，出處待確認）',
          ['大約每10個人就有1個長期失眠','慢性失眠盛行率約10.7%']),
        F('短期服用安眠藥在多數情況下安全有效','MEDICAL_INTERPRETATION','benefit_unqualified',
          '語氣偏肯定，未說明長者、合併飲酒或睡眠呼吸中止症者的風險較高。','low','no',
          null,'no','clarify','屬適用範圍說明。',
          '經醫師評估後短期服用安眠藥，多數情況下安全有效（長者、飲酒或有睡眠呼吸中止症者需特別注意）',
          ['短期照指示吃通常是安全的']),
        F('失眠認知行為治療（CBT-I）','TERMINOLOGY_LANGUAGE','term_unexplained',
          '未說明CBT-I是什麼、去哪裡做，讀者難以採取行動。','low','no',
          null,'no','clarify','補一句說明即可。',
          '失眠認知行為治療（CBT-I，由醫師或心理師引導調整睡眠習慣與想法，常見於睡眠中心與身心科）')
      ],
      card:[
        F('TVBS 引述健保署：11億6,725萬顆','SOURCE_EVIDENCE','secondary_citation',
          '主數字為媒體引述，卡面讀者會當成官方公告。','medium','yes',
          '健保署原始統計。','yes','confirm','屬二手引述。',
          '健保署統計（媒體引述）：11億6,725萬顆'),
        F('醫療院所開立安眠藥','DATA_FACTUAL_ACCURACY','metric_definition',
          '「開立顆數」不等於使用人數，讀者可能誤解為很多人濫用。','low','no',
          null,'no','clarify','屬口徑說明。',
          '醫療院所開立安眠藥總顆數（非使用人數）')
      ]
    },
    title_alts:[
      '失眠與助眠藥物：先調整睡眠習慣，用藥要遵醫囑',
      '躺了好久還睡不著？失眠先這樣做，安眠藥這樣吃',
      '一年開出11億顆安眠藥：失眠的正確面對方式'
    ],
    card_title_alts:[
      ['躺了好久還睡不著？','失眠與安眠藥這樣面對'],
      ['好眠基本功','睡眠衛生 6 關鍵'],
      ['安眠藥這樣吃','正確用藥 4 原則']
    ],
    data_addon:[
      '世界睡眠協會2023年調查：台灣失眠盛行率約17%，推估近400萬人（媒體引述）。',
      '醫師依失眠型態建議：入睡困難者躺床超過30分鐘可起床轉移注意力；提早醒來者可延後就寢、限制白天午睡。',
      '醫師提醒：長者服用安眠藥若代謝不佳，可能出現意識下降與跌倒。'
    ],
    cta:'這週先試著固定起床時間、睡前一小時放下手機；若失眠已超過一個月並影響白天，就預約身心科或睡眠門診。'
  });
})();
