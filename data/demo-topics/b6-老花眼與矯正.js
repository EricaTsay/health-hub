/* v6 示範主題：老花眼與矯正（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-21。資料來源：TVBS健康2.0 2026-02（眼科醫師受訪：老花與近視雷射、40歲起定期檢查）、
   天下雜誌〈近視老花雷射〉報導（自費費用、術後適應、再次微調比例；本次僅經搜尋摘錄查證，未讀全文）、
   TVBS健康2.0 2024-10-09（國人眼睛老化疾病認知調查、白內障治療迷思）。查無國內官方老花盛行率統計。
   參考方向：健康智庫〈眼部治療手術－老花眼矯正手術〉2026/02。 */
(function(){
  const TV = 'https://health.tvbs.com.tw/nutrition/360194';
  const CW = 'https://www.cw.com.tw/article/5120361';
  const TV2 = 'https://health.tvbs.com.tw/nutrition/350134';
  const REFS = [
    {title:'做完近視雷射 老花眼會更嚴重？眼科醫師教壯世代如何規劃視力照護',source:'TVBS健康2.0',url:TV},
    {title:'近視老花雷射手術報導',source:'天下雜誌',url:CW},
    {title:'白內障危機大！視力心情都變差 近視逾500度小心 有人38歲就白內障',source:'TVBS健康2.0',url:TV2}
  ];
  const TABLE = {headers:['矯正方式','適合情況與注意事項'], rows:[
    ['老花眼鏡','最簡單，需看近時配戴；度數由眼科或驗光評估'],
    ['多焦點眼鏡','一副眼鏡兼顧遠近，需要一段時間適應'],
    ['多焦點隱形眼鏡','不想戴框架者可考慮，需注意乾眼與清潔'],
    ['老花雷射或手術','自費，需完整評估角膜與水晶體，不一定完全不用眼鏡']
  ]};
  const TAGS = ['老花眼','視力保健','多焦點眼鏡','老花雷射','熟齡健康'];

  const DP_COST = {id:'dp-pres-cost', type:'data_scope', title:'手術費用與成效的出處',
    desc:'「近視老花雷射自費6至16萬、約1%需再次微調」出自天下雜誌報導，本次僅透過搜尋摘錄查證，未讀全文，且費用依院所不同。AI 沒有替你決定是否保留這些數字。',
    current:'寫入費用範圍並註明依院所而異',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'改成不寫數字', action:'replace', from:'報導指出近視老花雷射自費約6萬至16萬元，約1%需再次雷射微調', to:'手術屬自費且費用依院所不同，術後也可能需要微調'}]};

  const PRO = {
    content_type:'健康文章',
    title:'老花眼與矯正：40歲後看近模糊，眼鏡、隱形眼鏡到手術怎麼選',
    update_date:'2026/11/21',
    intro:'老花眼是水晶體隨年齡逐漸失去調節能力，使看近處變得模糊，常在40歲前後出現。眼科醫師2026年受訪指出，近視雷射與老花沒有直接關係，既不會預防、也不會加重老花，建議約40歲起定期接受眼科檢查。老花症狀除了看近模糊，也可能以眼睛痠澀、疲勞表現，有時與乾眼合併出現；看近模糊也可能是白內障等其他眼疾，需由醫師區分。',
    sections:[
      {heading:'4種老花矯正方式',format:'table',table:TABLE},
      {heading:'選擇手術前要知道',format:'bullets',items:[
        '老花矯正需依生活型態、工作需求與用眼習慣規劃，術前檢查項目多。',
        '報導指出近視老花雷射自費約6萬至16萬元，約1%需再次雷射微調；多數人約1個月內適應，也有人需要較長時間。',
        '術後夜間開車可能出現光暈、眩光，部分情況仍需老花眼鏡輔助。'
      ]},
      {heading:'日常護眼',format:'bullets',items:[
        '看近時保持充足照明，近距離用眼一段時間就休息、看遠。',
        '眼睛乾澀時與醫師討論乾眼治療，不要自行長期使用來路不明的眼藥水。',
        '40歲以上定期眼科檢查，同時篩檢白內障、青光眼與黃斑部病變。'
      ]}
    ],
    think_tank_view:'老花幾乎是每個人都會遇到的變化，重點是選對適合自己生活的矯正方式。先做完整檢查、排除其他眼疾，再依需求在眼鏡、隱形眼鏡與手術之間做選擇。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'醫師說法標明身分，手術費用與比例標明為媒體報導並註明依院所而異，未使用療效保證用語，未推薦特定術式、鏡片品牌或院所。',
    ai_rationale:{basis:['近視雷射與老花無直接關係、40歲起定期檢查（眼科醫師2026年）','老花雷射費用與術後適應（天下雜誌報導）'],
      layout_reason:'先用表格比較4種矯正方式，再說明手術須知，最後給日常護眼。',
      tone:'專業易懂', tone_reason:'自費醫療需中立呈現選項與限制。',
      to_verify:['天下雜誌報導僅經搜尋摘錄查證，全文與日期未讀取','查無官方老花盛行率統計']},
    decision_points:[DP_COST]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'看手機要拿遠遠的？老花眼的4種解決方法',
    update_date:'2026/11/21',
    intro:'看手機、看菜單都要拿遠一點才看得清楚？這是老花眼，大多在40歲左右開始，是眼睛裡的水晶體老化、調節能力變差。眼科醫師說，就算做過近視雷射也還是會老花。好消息是，現在有很多種方式可以幫你看清楚。',
    sections:[
      {heading:'4種老花解決方法',format:'table',table:TABLE},
      {heading:'想做手術的話',format:'bullets',items:[
        '要先做很多項檢查，依你的工作和生活習慣來規劃。',
        '手術是自費，費用每家不同；做完可能要一段時間適應，少數人需要再微調。',
        '晚上開車可能會看到光暈，有時還是需要老花眼鏡。'
      ]},
      {heading:'平常這樣顧眼睛',format:'bullets',items:[
        '看書、滑手機時燈要夠亮，看一陣子就抬頭看遠方。',
        '眼睛乾澀先問醫師，別亂點眼藥水。',
        '40歲以後定期檢查眼睛，順便看看有沒有白內障或青光眼。'
      ]}
    ],
    think_tank_view:'老花不可怕，選一個適合自己的方式就好。先做完整檢查，也順便替眼睛做一次健康檢查。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'醫師說法標明身分，語氣親切，未使用療效保證用語，未推薦特定商品或院所。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以看手機要拿遠的情境帶出矯正方式、手術與護眼。', tone:'生活親切', tone_reason:'給40歲以上讀者閱讀。', to_verify:[]},
    decision_points:[Object.assign({}, DP_COST, {current:'未寫費用數字', options:[{label:'沿用目前寫法', action:'keep'}]})]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'老花眼：4種矯正方式比一比',
    update_date:'2026/11/21',
    intro:'老花眼約40歲前後出現；眼科醫師提醒，近視雷射不會預防或加重老花。',
    sections:[
      {heading:'4種矯正方式',format:'table',table:TABLE},
      {heading:'手術須知',format:'bullets',items:[
        '自費、需完整評估。',
        '術後可能需適應或微調。'
      ]},
      {heading:'護眼',format:'bullets',items:[
        '充足照明、定時看遠。',
        '40歲以上定期眼科檢查。'
      ]}
    ],
    think_tank_view:'先檢查、再依生活需求選擇矯正方式。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'醫師說法標明身分，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為方式、須知、護眼三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[Object.assign({}, DP_COST, {current:'未寫費用數字', options:[{label:'沿用目前寫法', action:'keep'}]})]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'老花眼與矯正', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'老花是正常老化，選對矯正方式', primary_visual:'約 40 歲', secondary_message:'近視雷射不防老花', action_priority:'檢查、選擇、護眼'},
    headline_hook:'看手機要拿遠遠的？', headline_main:'老花眼 4 種解決方法', title_accent:'4 種解決方法',
    hero_message:'約 40 歲起', hero_support:'水晶體調節變差，看近模糊；近視雷射也不會預防',
    action_title:'這樣面對老花',
    action_cards:[
      {key:'檢', text:'40 歲起定期眼科檢查'},
      {key:'鏡', text:'老花或多焦點眼鏡最簡單'},
      {key:'術', text:'考慮手術先完整評估、問清費用'},
      {key:'光', text:'看近照明充足，定時看遠'}
    ],
    notice:'看近模糊也可能是**白內障**等眼疾，請先檢查。',
    carousel_suggestion:{reason:'若想把矯正方式、手術須知與護眼分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'老花怎麼辦', headline_main:'4 種矯正方式比一比'},
      {layout_type:'knowledge', headline_hook:'老花手術', headline_main:'做之前要知道'},
      {layout_type:'action', headline_hook:'熟齡護眼', headline_main:'日常 4 件事'}]},
    hashtags:['老花眼','視力保健','多焦點眼鏡','熟齡健康'],
    sources:['眼科醫師（媒體受訪）','天下雜誌'],
    illustration_category:'elderly-care',
    illustration:{topic:'老花眼', audience:'40 歲以上熟齡族', scene:'一位中年人戴上老花眼鏡輕鬆看手機，旁邊檯燈照亮桌面',
      emotion:'輕鬆、清楚', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged person wearing reading glasses comfortably reading a phone under a bright desk lamp, relaxed and clear mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['近視雷射與老花無直接關係、40歲起定期檢查（眼科醫師2026年）'],
      layout_reason:'查無官方統計，選 action：4 個面對老花的行動當主角，以排除白內障提醒收尾。',
      tone:'專業易懂', tone_reason:'實用、中立。',
      to_verify:['查無官方統計']},
    decision_points:[Object.assign({}, DP_COST, {current:'卡面未寫費用', options:[{label:'沿用目前寫法', action:'keep'}]})],
    content_check_note:'醫師說法標明身分，未使用療效保證用語，未推薦特定商品或院所。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'老花眼與矯正',
    collect:{
      summary:'老花是40歲前後幾乎人人會遇到的眼睛老化，矯正方式從眼鏡、隱形眼鏡到自費手術；眼科醫師提醒近視雷射不防老花、看近模糊需排除其他眼疾，「定期檢查、依需求選擇矯正方式」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約40歲前後開始出現：老花是水晶體調節能力隨年齡下降，眼科醫師建議約40歲起定期眼科檢查（查無國內官方老花盛行率統計）。',tag:'市場觀察',source:{name:'TVBS健康2.0：做完近視雷射 老花眼會更嚴重？',url:TV}},
        {item:'年度趨勢方向',desc:'近視雷射不會預防或加重老花：眼科醫師2026年受訪指出，近視雷射是減少對近視眼鏡的依賴，不是抵抗老化，老花治療需依生活型態量身規劃。',tag:'市場觀察',source:{name:'TVBS健康2.0：做完近視雷射 老花眼會更嚴重？',url:TV}},
        {item:'政策動向',desc:'約1%需再次雷射微調：天下雜誌報導近視老花雷射屬自費醫療，費用約6萬至16萬元，術後夜間可能出現光暈眩光（費用依院所而異）。',tag:'市場觀察',source:{name:'天下雜誌：近視老花雷射手術報導',url:CW}},
        {item:'好發族群年齡層',desc:'逾9成民眾認為老花與白內障是常見老年眼疾：TVBS 2024年報導引述國人眼睛老化疾病認知調查，近半數民眾誤以為白內障可用眼藥水治療（調查單位未註明）。',tag:'市場觀察',source:{name:'TVBS健康2.0：白內障危機大！',url:TV2}}
      ],
      product_view:['機會：40歲以上熟齡族群是主要客群，可結合眼睛健康檢查服務。','機會：說明自費醫療與保障範圍的差異。','風險：不推薦特定術式、鏡片品牌或院所；不暗示保險給付自費手術。'],
      marketing_view:['機會：「看手機要拿遠遠的」是熟齡族普遍經驗。','機會：可與白內障、青光眼內容系列化溝通。','風險：避免像醫美廣告般強調效果。'],
      alert_level:'low',
      alert_reason:'屬普遍熟齡健康議題，無時效性政策事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('報導指出近視老花雷射自費約6萬至16萬元，約1%需再次雷射微調','SOURCE_EVIDENCE','media_figure_unverified',
          '費用與比例出自單一媒體報導，文中未說明報導年份，費用也可能隨院所與年份變動。','medium','yes',
          '報導原文與年份；院所實際收費。','yes','confirm','數字未經全文核對。',
          '近視老花雷射屬自費，費用依院所與術式不同，術後少數人可能需要再次微調'),
        F('常在40歲前後出現','MEDICAL_INTERPRETATION','age_generalization',
          '出現年齡因人而異，遠視者可能較早感覺到，文中未說明。','low','no',
          null,'no','clarify','屬精確度問題。',
          '常在40歲前後出現（遠視者可能較早察覺）',
          ['大多在40歲左右開始','約40歲前後出現']),
        F('不一定完全不用眼鏡','MEDICAL_INTERPRETATION','expectation_management',
          '這是重要的期待管理，但寫在表格中不夠醒目，讀者可能忽略。','low','no',
          null,'no','clarify','屬呈現問題。',
          '術後在部分情況（如長時間閱讀、夜間）仍可能需要眼鏡輔助'),
        F('近距離用眼一段時間就休息、看遠','TERMINOLOGY_LANGUAGE','vague_term',
          '「一段時間」沒有具體建議。','low','no',
          null,'no','clarify','可補一般建議。',
          '近距離用眼約30至40分鐘就休息、看遠（一般建議）',
          ['看一陣子就抬頭看遠方','定時看遠'])
      ],
      card:[
        F('水晶體調節變差，看近模糊；近視雷射也不會預防','MEDICAL_INTERPRETATION','oversimplification',
          '卡面只提近視雷射，讀者可能以為其他手術可以預防老花。','low','no',
          null,'no','clarify','屬表達問題。',
          '水晶體調節變差，看近模糊；目前沒有方法能預防老花'),
        F('考慮手術先完整評估、問清費用','MEDICAL_INTERPRETATION','missing_detail',
          '未提醒手術可能有光暈、需微調等限制。','low','no',
          null,'no','clarify','補一句即可。',
          '考慮手術先完整評估、問清費用與限制')
      ]
    },
    title_alts:[
      '老花眼與矯正：40歲後看近模糊，眼鏡、隱形眼鏡到手術怎麼選',
      '看手機要拿遠遠的？老花眼的4種解決方法',
      '近視雷射不防老花：熟齡族的老花矯正選擇'
    ],
    card_title_alts:[
      ['看手機要拿遠遠的？','老花眼 4 種解決方法'],
      ['約 40 歲起','老花矯正怎麼選'],
      ['熟齡護眼','老花與定期檢查']
    ],
    data_addon:[
      '新聞報導：老花症狀可分為視力模糊型與眼部不適型，後者可能與乾眼合併。',
      '眼科醫師：老花治療需依生活型態、工作需求與用眼習慣量身規劃。',
      '40歲以上建議同時篩檢白內障、青光眼與黃斑部病變。'
    ],
    cta:'如果你已經開始把手機拿遠看，這個月就預約一次眼科檢查，確認是老花還是其他眼疾，再決定矯正方式。'
  });
})();
