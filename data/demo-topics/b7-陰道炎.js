/* v6 示範主題：陰道炎（B7 女性・男性・生育與兒童）
   查證日期：2026-11-21。查無國健署／衛福部陰道炎官方衛教原文與盛行率統計；
   內容依早安健康2026-06-16整理之多家醫院衛教與國健署婦幼健康組專家說法（二手），分泌物對照另參考NOW健康2024-09-01。
   參考方向：健康智庫〈陰道炎〉2023/10。 */
(function(){
  const REFS = [
    {title:'陰道炎會自己好嗎？症狀對照、治療藥物與預防復發方法（引述台北慈濟、國健署婦幼健康組等）',source:'早安健康',url:'https://edh.tw/articles/PoMGckO'},
    {title:'妹妹癢癢為哪樁？ 專家盤點女性常見3大感染性陰道炎',source:'NOW健康（LINE TODAY轉載）',url:'https://today.line.me/tw/v3/article/XY32QpZ'}
  ];
  const TABLE = {headers:['類型','常見分泌物與症狀'], rows:[
    ['念珠菌陰道炎','白色豆腐渣或乳酪狀分泌物，通常無臭味，外陰非常癢'],
    ['細菌性陰道炎','稀薄、灰白色分泌物，帶魚腥味，性行為後更明顯'],
    ['滴蟲陰道炎','黃綠色、帶泡沫分泌物，惡臭，屬性傳染病，伴侶需一起治療']
  ]};
  const TAGS = ['陰道炎','念珠菌','私密處保養','女性健康','婦產科'];

  const DP_SOURCE = {id:'dp-vag-source', type:'data_source', title:'沒有官方盛行率數字',
    desc:'網路常見「女性一生多數會得過陰道炎」等說法，國內沒有官方統計；本文唯一的比例是台北慈濟醫院說明「7至9成陰道炎由感染引起」，經媒體引述。AI 沒有採用其他未註明出處的盛行率。',
    current:'將近7成到9成陰道炎由感染引起（台北慈濟醫院，經媒體引述）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'7–9 成', value:'感染性陰道炎比例', note:'台北慈濟醫院（目前採用）'},
      {label:'未公布', value:'官方盛行率', note:'國內無陰道炎年度統計'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'陰道炎有3種：分泌物顏色氣味不同，別自行買藥或灌洗',
    update_date:'2026/11/21',
    intro:'陰道炎是女性常見的婦科問題。台北慈濟醫院說明，將近7成到9成的陰道炎由感染引起，常見類型包括念珠菌、細菌性與滴蟲陰道炎，分泌物的顏色、氣味各不相同，治療藥物也不一樣。國健署婦幼健康組專家提醒，用強力清潔產品或灌洗陰道，容易把益菌一起沖走，反而增加感染機會。',
    sections:[
      {heading:'3種常見陰道炎',format:'table',table:TABLE},
      {heading:'常見誘發因素',format:'bullets',items:[
        '使用抗生素、懷孕、更年期雌激素下降。',
        '頻繁陰道灌洗，破壞正常菌叢。',
        '免疫功能較差，或長期穿著不透氣的緊身衣褲。'
      ]},
      {heading:'預防與就醫',format:'bullets',items:[
        '穿棉質透氣內褲，避免長時間穿緊身褲。',
        '如廁後由前往後擦拭，避免把腸道細菌帶到陰部。',
        '出現症狀應到婦產科就診，不要自行買藥或用清潔液灌洗，症狀改善也要依醫囑用完藥。'
      ]}
    ],
    think_tank_view:'陰道炎很常見，但因為尷尬，很多人選擇自己買藥或拚命清洗，結果反而讓菌叢更失衡。三種陰道炎用藥不同，交給婦產科醫師判斷最快；平時保持透氣、不過度清潔，就是最好的保養。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容標明為醫院與國健署專家經媒體引述，未推薦特定私密處清潔產品或藥品，未使用療效保證用語。',
    ai_rationale:{basis:['7至9成感染引起（台北慈濟醫院）、避免灌洗（國健署婦幼健康組專家），早安健康2026-06-16','分泌物對照（NOW健康2024-09-01）'],
      layout_reason:'先用表格對照3種類型，再說明誘發因素，最後給預防與就醫建議。',
      tone:'專業易懂', tone_reason:'私密議題需直白、去羞恥化。',
      to_verify:['查無官方衛教原文','復發定義未在引用來源中']},
    decision_points:[DP_SOURCE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'私密處好癢、分泌物變多？陰道炎3種類型一次看懂',
    update_date:'2026/11/21',
    intro:'私密處癢、分泌物變多又有味道，很多女生不好意思去看醫生。其實陰道炎非常常見，醫院醫師說大部分是感染引起，常見的有念珠菌、細菌性、滴蟲3種，用的藥都不一樣。國健署專家也提醒：洗太乾淨反而容易感染！',
    sections:[
      {heading:'分泌物長這樣，可能是…',format:'table',table:TABLE},
      {heading:'為什麼會反覆發生？',format:'bullets',items:[
        '吃抗生素、懷孕、更年期都可能讓好菌變少。',
        '常常沖洗私密處，反而把好菌沖掉。'
      ]},
      {heading:'這樣做比較好',format:'bullets',items:[
        '穿棉質內褲，少穿緊身褲。',
        '上完廁所從前往後擦。',
        '不舒服就看婦產科，不要自己買藥塞。'
      ]}
    ],
    think_tank_view:'看婦產科不用不好意思，醫生每天都在處理這些問題。早點看、用對藥，就不用一直反覆癢。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容標明醫院與專家說法，語氣親切，未推薦特定產品或藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以私密處不適的情境帶出類型與做法。', tone:'生活親切', tone_reason:'降低就醫羞恥感。', to_verify:[]},
    decision_points:[DP_SOURCE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'陰道炎：3種類型，別自行灌洗',
    update_date:'2026/11/21',
    intro:'陰道炎7至9成由感染引起（台北慈濟醫院）。念珠菌、細菌性、滴蟲用藥不同，應就醫。',
    sections:[
      {heading:'3種類型',format:'table',table:TABLE},
      {heading:'預防',format:'bullets',items:[
        '不灌洗、穿透氣棉褲。',
        '由前往後擦拭。'
      ]}
    ],
    think_tank_view:'不過度清潔，有症狀找婦產科。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容標明醫院說法，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為類型與預防兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_SOURCE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'陰道炎', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'陰道炎多由感染引起，3種用藥不同', primary_visual:'7–9 成', secondary_message:'別自行買藥或灌洗', action_priority:'透氣、不灌洗、看婦產科'},
    headline_hook:'私密處好癢？', headline_main:'陰道炎 3 種類型一次看', title_accent:'3 種類型',
    hero_message:'7 至 9 成由感染引起', hero_support:'台北慈濟醫院（媒體引述）',
    knowledge_title:'3 種常見陰道炎', knowledge_note:'用藥不同，**請婦產科判斷**',
    knowledge_cards:[
      {label:'念珠菌', icon:'leaf', lines:['白色豆腐渣狀','很癢、少異味']},
      {label:'細菌性', icon:'flask', lines:['稀薄灰白色','魚腥味']},
      {label:'滴蟲', icon:'people', lines:['黃綠色泡沫狀','伴侶需同治']}
    ],
    primary_stat:{value:'7–9 成', label:'陰道炎由感染引起', note:'台北慈濟醫院說明（媒體引述）'},
    secondary_stats:[
      {value:'不灌洗', label:'國健署專家：避免沖掉益菌'},
      {value:'前往後', label:'如廁擦拭方向'}
    ],
    action_title:'私密處這樣保養',
    action_cards:[
      {key:'棉', text:'穿棉質透氣內褲，少穿緊身褲'},
      {key:'洗', text:'不灌洗、不用強力清潔產品'},
      {key:'擦', text:'如廁後由前往後擦拭'},
      {key:'醫', text:'有症狀看婦產科，不自行買藥'}
    ],
    carousel_suggestion:{reason:'若想把類型、誘因與保養分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'分泌物看一看', headline_main:'3 種陰道炎'},
      {layout_type:'knowledge', headline_hook:'為什麼反覆發作', headline_main:'常見誘發因素'},
      {layout_type:'action', headline_hook:'私密處保養', headline_main:'透氣、不灌洗'}]},
    hashtags:['陰道炎','念珠菌','私密處保養','女性健康'],
    sources:['台北慈濟醫院（媒體引述）','國民健康署婦幼健康組專家（媒體引述）'],
    illustration_category:'general',
    illustration:{topic:'女性私密健康', audience:'育齡女性', scene:'一位女性在婦產科診間輕鬆地和女醫師談話，桌上放著衛教單張',
      emotion:'安心、被理解', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A woman talking comfortably with a female gynaecologist in a clinic, a health leaflet on the desk, reassured and understood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['7至9成（台北慈濟醫院，早安健康2026-06-16）'],
      layout_reason:'核心是辨識類型，選 knowledge：3 種類型放中段，感染比例退到下方，最後給 4 個保養行動。',
      tone:'專業易懂', tone_reason:'去羞恥化。',
      to_verify:['均為媒體引述']},
    decision_points:[Object.assign({}, DP_SOURCE, {current:'7–9 成由感染引起（台北慈濟醫院）'})],
    content_check_note:'內容標明醫院與專家說法，未推薦特定產品，未使用療效保證用語。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'陰道炎',
    collect:{
      summary:'陰道炎是女性常見婦科問題，醫院說明7至9成由感染引起，念珠菌、細菌性與滴蟲3類用藥不同；國健署專家提醒過度灌洗反而增加感染。國內無官方統計，「透氣、不灌洗、有症狀看婦產科」是值得以去羞恥化方式溝通的女性健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'逾7成由感染引起：台北慈濟醫院說明，將近7成到9成的陰道炎由感染引起，常見類型為念珠菌、細菌性與滴蟲陰道炎（媒體引述，國內無官方統計）。',tag:'市場觀察',source:{name:'早安健康：陰道炎會自己好嗎？症狀對照、治療藥物與預防復發方法',url:'https://edh.tw/articles/PoMGckO'}},
        {item:'年度趨勢方向',desc:'容易反覆發作：醫院衛教指出使用抗生素、懷孕、更年期雌激素下降、頻繁灌洗與免疫功能較差，都是陰道炎反覆發生的常見誘因。',tag:'市場觀察',source:{name:'早安健康：陰道炎會自己好嗎？症狀對照、治療藥物與預防復發方法',url:'https://edh.tw/articles/PoMGckO'}},
        {item:'政策動向',desc:'避免灌洗：國健署婦幼健康組專家提醒，用強力清潔產品或灌洗陰道容易把益菌一起沖走，太常灌洗也會增加陰道炎或尿道感染機會（媒體引述）。',tag:'市場觀察',source:{name:'早安健康：陰道炎會自己好嗎？症狀對照、治療藥物與預防復發方法',url:'https://edh.tw/articles/PoMGckO'}},
        {item:'好發族群年齡層',desc:'性行為活躍者與孕婦：衛教指出性行為活躍者較易發生細菌性陰道炎，滴蟲陰道炎屬性傳染病、伴侶需同時治療，懷孕與更年期女性也較易發生。',tag:'市場觀察',source:{name:'NOW健康：專家盤點女性常見3大感染性陰道炎',url:'https://today.line.me/tw/v3/article/XY32QpZ'}}
      ],
      product_view:['機會：女性健康衛教可提升年輕女性客群信任。','風險：避免推薦私密處清潔產品、益生菌或藥品。','風險：私密議題敏感，避免羞辱或獵奇語氣。'],
      marketing_view:['機會：夏季悶熱、雨季是溝通透氣保養的時點。','機會：「洗太乾淨反而容易感染」是破除迷思型內容。','風險：避免與商品廣告連結。'],
      alert_level:'low',
      alert_reason:'屬長期女性健康議題，查無官方統計，適合以衛教方式溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('將近7成到9成的陰道炎由感染引起','SOURCE_EVIDENCE','secondary_citation',
          '文中已註明是台北慈濟醫院說明，但這是經媒體整理引述，沒有原始研究或醫院衛教頁連結。','low','yes',
          '台北慈濟醫院陰道炎衛教原文。','no','confirm','屬二手引述。',
          '將近7成到9成的陰道炎由感染引起（台北慈濟醫院說明，經媒體引述）'),
        F('交給婦產科醫師判斷最快','COMPLIANCE_RISK','overstatement',
          '智庫觀點的「最快」是主觀判斷，沒有依據。','low','no',
          null,'no','clarify','改為中性說法。',
          '交給婦產科醫師判斷較能對症治療'),
        F('洗太乾淨反而容易感染','MEDICAL_INTERPRETATION','oversimplified',
          '生活親切版把「灌洗或用強力清潔產品」簡化成「洗太乾淨」，可能讓讀者誤以為日常外陰清潔也不好。','low','no',
          null,'no','clarify','明確指出是灌洗與強力清潔。',
          '灌洗陰道或用強力清潔產品，反而容易感染'),
        F('陰道炎7至9成由感染引起（台北慈濟醫院）','SOURCE_EVIDENCE','secondary_citation',
          '簡潔有力版沒說明是經媒體引述。','low','no',
          null,'no','clarify','補上性質即可。',
          '陰道炎7至9成由感染引起（台北慈濟醫院，媒體引述）')
      ],
      card:[
        F('台北慈濟醫院（媒體引述）','SOURCE_EVIDENCE','secondary_citation',
          'hero 主數字為單一醫院經媒體引述，分享時可能被當成官方統計。','low','no',
          null,'no','clarify','屬出處層級提醒。',
          '台北慈濟醫院說明（非官方統計）'),
        F('國健署專家：避免沖掉益菌','SOURCE_EVIDENCE','secondary_citation',
          '國健署專家說法是經媒體引述，不是國健署正式衛教文件。','low','no',
          null,'no','clarify','補上引述性質。',
          '國健署專家受訪：避免沖掉益菌')
      ]
    },
    title_alts:[
      '陰道炎有3種：分泌物顏色氣味不同，別自行買藥或灌洗',
      '私密處好癢、分泌物變多？陰道炎3種類型一次看懂',
      '陰道炎反覆發作？誘發因素與私密處保養重點'
    ],
    card_title_alts:[
      ['私密處好癢？','陰道炎 3 種類型一次看'],
      ['洗太乾淨反而糟','別灌洗私密處'],
      ['用藥不同','有症狀找婦產科']
    ],
    data_addon:[
      '台北慈濟醫院（媒體引述）：將近7成到9成的陰道炎由感染引起。',
      '國健署婦幼健康組專家（媒體引述）：灌洗或強力清潔容易沖走益菌。',
      '滴蟲陰道炎屬性傳染病，伴侶需同時治療。'
    ],
    cta:'私密處不適持續幾天，就預約婦產科；平時穿棉質內褲、不灌洗。'
  });
})();
