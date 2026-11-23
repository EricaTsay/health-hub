/* v6 示範主題：多囊性卵巢症候群（B7 女性・男性・生育與兒童）
   查證日期：2026-11-21。查無衛福部／國健署的多囊性卵巢症候群官方資料與盛行率統計；
   內容依國泰綜合醫院婦女醫學部醫師經蕃新聞（2025-11-14）說明（二手）。
   媒體報導的2026年「更名為PMOS」與「心肌梗塞風險2.5倍」無原始出處可核對，未採用。
   參考方向：健康智庫〈多囊性卵巢症候群〉2023/10。 */
(function(){
  const REFS = [
    {title:'多囊性卵巢症候群不只影響生育！醫揭「2種慢性病」風險也提高 有效減重能改善（國泰綜合醫院）',source:'蕃新聞',url:'https://n.yam.com/Article/20251114460858'}
  ];
  const TABLE = {headers:['鹿特丹診斷標準（3項符合2項）','說明'], rows:[
    ['排卵異常','月經週期不規律、經常性無排卵或很少排卵'],
    ['高雄性素表現','血中雄性激素升高，或多毛、痤瘡、雄性禿等表徵'],
    ['卵巢多囊樣變化','超音波看到卵巢內多個小卵泡，排列像珍珠項鍊']
  ]};
  const TAGS = ['多囊性卵巢','月經不規則','不孕','胰島素阻抗','女性健康'];

  const DP_PREV = {id:'dp-pcos-prev', type:'data_source', title:'盛行率說法差異很大',
    desc:'媒體與醫師對多囊性卵巢症候群盛行率的說法從5%到20%都有，且大多未註明出處，國內沒有官方統計。另有2026年媒體報導稱國際已將名稱改為「PMOS」，但未附原始文獻。AI 只採用一位醫院醫師的區間說法，並未採用更名資訊。',
    current:'盛行率約6%至15%（國泰綜合醫院醫師，2025年媒體引述）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'6%–15%', value:'國泰醫院醫師', note:'2025-11媒體引述（目前採用）'},
      {label:'5%–20%', value:'其他媒體說法', note:'各篇數字不一，多未註明出處'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'多囊性卵巢症候群：月經不規則、痘痘多毛別輕忽，減重5%至10%就有幫助',
    update_date:'2026/11/21',
    intro:'多囊性卵巢症候群是育齡女性常見的內分泌問題。國泰綜合醫院婦女醫學部醫師2025年受訪指出，其盛行率約6%至15%，依鹿特丹診斷標準，排卵異常、高雄性素表現、卵巢多囊樣變化3項中符合任2項即可診斷。它是女性不孕的主要原因之一，也與第二型糖尿病、代謝症候群、心血管疾病等長期健康風險相關。',
    sections:[
      {heading:'怎麼診斷',format:'table',table:TABLE},
      {heading:'不只是月經問題',format:'bullets',items:[
        '醫師指出，長期風險包括不孕症、第二型糖尿病、代謝症候群、心血管疾病及心理健康問題。',
        '內分泌失衡也可能影響子宮內膜環境，降低著床成功率。',
        '體重過重會加劇胰島素阻抗與荷爾蒙失衡，使病情加重。'
      ]},
      {heading:'生活調整',format:'bullets',items:[
        '醫師表示，即使體重只減輕5%至10%，也能帶來明顯的健康改善，並有助排卵與月經週期。',
        '建議每週至少150分鐘中等強度有氧運動，搭配阻力訓練。',
        '藥物治療依醫師評估，有生育計畫者應及早與婦產科討論。'
      ]}
    ],
    think_tank_view:'多囊性卵巢症候群常被當成「月經不準」而拖延就醫，但它牽涉代謝與長期慢性病風險。好消息是，生活型態調整就能帶來改變；月經長期不規則、合併痘痘或多毛時，找婦產科做一次完整評估，是對自己長期健康的照顧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率與診斷標準標明為醫師受訪說法，未使用療效保證用語，未推薦特定藥品或保健品。',
    ai_rationale:{basis:['6%至15%、鹿特丹標準、長期風險、減重5%至10%（國泰綜合醫院醫師，蕃新聞2025-11-14）'],
      layout_reason:'先用表格說明診斷標準，再說明長期風險，最後給生活調整方向。',
      tone:'專業易懂', tone_reason:'女性健康議題需精確、不恐嚇。',
      to_verify:['查無官方盛行率','「更名PMOS」未採用（無原始文獻）']},
    decision_points:[DP_PREV]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'月經老是不準、痘痘冒不停？認識多囊性卵巢症候群',
    update_date:'2026/11/21',
    intro:'月經常常兩三個月才來一次、臉上痘痘多、毛髮變粗，可能不只是體質問題。國泰醫院婦產科醫師說，多囊性卵巢症候群在育齡女性中相當常見，大約每100人有6到15人。它可能影響懷孕，也和糖尿病等慢性病有關，好消息是減重一點點就能改善。',
    sections:[
      {heading:'醫師怎麼判斷？',format:'table',table:TABLE},
      {heading:'為什麼要注意？',format:'bullets',items:[
        '可能比較不容易懷孕。',
        '以後得糖尿病、心血管疾病的風險較高。'
      ]},
      {heading:'可以怎麼做？',format:'bullets',items:[
        '體重減少5%到10%，月經可能變比較規律。',
        '每週運動150分鐘，有氧加肌力。',
        '有懷孕計畫的話，早點和婦產科醫師討論。'
      ]}
    ],
    think_tank_view:'月經是女生健康的小鏡子。長期不規則時，別只靠調經偏方，讓婦產科醫師幫妳找出原因。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容標明為醫師說法，語氣親切，未推薦特定藥品或保健品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以日常症狀帶出診斷與調整。', tone:'生活親切', tone_reason:'給年輕女性閱讀。', to_verify:[]},
    decision_points:[DP_PREV]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'多囊性卵巢：3項符合2項',
    update_date:'2026/11/21',
    intro:'醫師指出多囊性卵巢症候群盛行率約6%至15%，與不孕、糖尿病、代謝症候群相關。減重5%至10%即有改善。',
    sections:[
      {heading:'診斷標準',format:'table',table:TABLE},
      {heading:'行動',format:'bullets',items:[
        '每週150分鐘運動。',
        '月經長期不規則找婦產科。'
      ]}
    ],
    think_tank_view:'月經不準別硬撐，生活調整很有用。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容標明醫師說法，未推薦特定藥品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為標準與行動兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_PREV]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'多囊性卵巢症候群', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'月經不規則、痘痘多毛可能是多囊性卵巢', primary_visual:'5%–10%', secondary_message:'減重 5% 至 10% 就有改善', action_priority:'減重、運動、就醫評估'},
    headline_hook:'月經老是不準？', headline_main:'認識多囊性卵巢症候群', title_accent:'多囊性卵巢',
    hero_message:'3 項符合 2 項即可診斷', hero_support:'鹿特丹診斷標準（國泰醫院醫師說明）',
    knowledge_title:'診斷 3 項', knowledge_note:'符合**任 2 項**即可診斷',
    knowledge_cards:[
      {label:'排卵異常', icon:'check', lines:['月經週期','不規律']},
      {label:'高雄性素', icon:'flask', lines:['痤瘡、多毛','雄性禿']},
      {label:'卵巢多囊', icon:'search', lines:['超音波看到','多個小卵泡']}
    ],
    primary_stat:{value:'5%–10%', label:'減重即可帶來明顯改善', note:'國泰醫院醫師（2025 年媒體引述）'},
    secondary_stats:[
      {value:'6%–15%', label:'醫師估計盛行率'},
      {value:'150 分鐘', label:'每週中等強度運動'}
    ],
    action_title:'這樣照顧自己',
    action_cards:[
      {key:'重', text:'體重減輕 5% 至 10%'},
      {key:'動', text:'每週 150 分鐘有氧加阻力訓練'},
      {key:'醫', text:'月經長期不規則找婦產科'},
      {key:'孕', text:'有生育計畫及早討論'}
    ],
    carousel_suggestion:{reason:'若想把診斷、風險與生活調整分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'怎麼診斷？', headline_main:'3 項符合 2 項'},
      {layout_type:'knowledge', headline_hook:'不只月經問題', headline_main:'不孕與代謝風險'},
      {layout_type:'action', headline_hook:'生活調整', headline_main:'減重 5% 就有幫助'}]},
    hashtags:['多囊性卵巢','月經不規則','不孕','女性健康'],
    sources:['國泰綜合醫院（媒體引述）'],
    illustration_category:'metabolic',
    illustration:{topic:'女性健康生活', audience:'育齡女性', scene:'一位年輕女性在公園慢跑，手腕戴著運動手錶，表情輕鬆',
      emotion:'自在、有活力', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young woman jogging in a park wearing a fitness watch, relaxed and energetic, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['鹿特丹標準、減重5%至10%、6%至15%（國泰綜合醫院醫師，蕃新聞2025-11-14）'],
      layout_reason:'核心是辨識與診斷，選 knowledge：3 項標準放中段，減重效果退到下方，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'鼓勵就醫、不恐嚇。',
      to_verify:['單一醫師來源']},
    decision_points:[Object.assign({}, DP_PREV, {current:'6%–15%（醫師估計）'})],
    content_check_note:'內容標明醫師說法，未推薦特定藥品，未使用療效保證用語。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'多囊性卵巢症候群',
    collect:{
      summary:'多囊性卵巢症候群是育齡女性常見的內分泌問題，醫師估計盛行率約6%至15%，與不孕、第二型糖尿病、代謝症候群及心血管疾病相關；國內無官方統計。「月經長期不規則就醫、減重5%至10%」是年輕女性值得溝通的健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約6%至15%：國泰綜合醫院婦女醫學部醫師2025年受訪指出，多囊性卵巢症候群盛行率約6%至15%，國內無官方盛行率統計（媒體引述）。',tag:'市場觀察',source:{name:'蕃新聞：多囊性卵巢症候群不只影響生育！（國泰綜合醫院）',url:'https://n.yam.com/Article/20251114460858'}},
        {item:'年度趨勢方向',desc:'3項符合2項：醫師說明依鹿特丹診斷標準，排卵異常、高雄性素表現、卵巢多囊樣變化3項中符合任2項即可診斷。',tag:'市場觀察',source:{name:'蕃新聞：多囊性卵巢症候群不只影響生育！（國泰綜合醫院）',url:'https://n.yam.com/Article/20251114460858'}},
        {item:'政策動向',desc:'減重5%至10%：醫師指出即使體重只減輕5%至10%也能帶來明顯改善，有助排卵與調整月經週期，建議每週至少150分鐘中等強度有氧運動搭配阻力訓練。',tag:'市場觀察',source:{name:'蕃新聞：多囊性卵巢症候群不只影響生育！（國泰綜合醫院）',url:'https://n.yam.com/Article/20251114460858'}},
        {item:'好發族群年齡層',desc:'育齡女性：醫師指出多囊性卵巢症候群是女性不孕的主要原因之一，長期風險包括第二型糖尿病、代謝症候群、心血管疾病與心理健康問題。',tag:'市場觀察',source:{name:'蕃新聞：多囊性卵巢症候群不只影響生育！（國泰綜合醫院）',url:'https://n.yam.com/Article/20251114460858'}}
      ],
      product_view:['機會：年輕女性與生育規劃族群可結合女性健康衛教。','機會：代謝風險相關，可延伸至健康管理服務。','風險：避免推薦藥品、保健品或調經偏方。'],
      marketing_view:['機會：婦女節前後是女性健康議題的溝通時點。','機會：「月經不準不只是體質」容易引起共鳴。','風險：避免以不孕作為恐懼訴求。'],
      alert_level:'low',
      alert_reason:'屬長期女性健康議題，查無官方統計，適合謹慎溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('其盛行率約6%至15%','SOURCE_EVIDENCE','secondary_citation',
          '文中已註明是國泰綜合醫院醫師受訪說法，但醫師沒有說明數字出處，其他媒體說法從5%到20%都有，國內也沒有官方統計。','medium','yes',
          '國內多囊性卵巢症候群盛行率研究或婦產科醫學會資料。','no','confirm','屬二手且口徑不一。',
          '其盛行率約6%至15%（醫師受訪說法，各方估計不一）'),
        F('是對自己長期健康的照顧','COMPLIANCE_RISK','vague_promise',
          '智庫觀點語氣接近勸說，沒有具體行動標準（何時算「長期不規則」）。','low','no',
          null,'no','clarify','補上具體時間標準較佳。',
          '月經週期長期超過35天或經常無排卵時，找婦產科評估'),
        F('月經可能變比較規律','COMPLIANCE_RISK','efficacy_claim',
          '生活親切版把醫師說的「有助調整月經週期」寫成直接效果，讀者可能以為減重一定能恢復規律。','low','no',
          null,'no','clarify','改為「有助於」。',
          '有助於月經變得比較規律'),
        F('醫師指出多囊性卵巢症候群盛行率約6%至15%','SOURCE_EVIDENCE','secondary_citation',
          '簡潔有力版沒有醫院與年份。','low','no',
          null,'no','clarify','補上出處即可。',
          '國泰醫院醫師（2025）指出多囊性卵巢症候群盛行率約6%至15%')
      ],
      card:[
        F('醫師估計盛行率','SOURCE_EVIDENCE','secondary_citation',
          '「6%–15%」為單一醫師說法，各方估計差異大，卡面讀者可能當成官方數字。','low','no',
          null,'no','clarify','屬出處層級提醒。',
          '醫師估計盛行率（各方說法不一）'),
        F('減重即可帶來明顯改善','COMPLIANCE_RISK','efficacy_claim',
          '主數字標籤「即可帶來明顯改善」語氣接近保證，且沒說明改善的是哪些指標。','medium','no',
          null,'no','clarify','改為「有助改善」。',
          '減重有助改善排卵與月經週期')
      ]
    },
    title_alts:[
      '多囊性卵巢症候群：月經不規則、痘痘多毛別輕忽，減重5%至10%就有幫助',
      '月經老是不準、痘痘冒不停？認識多囊性卵巢症候群',
      '多囊性卵巢症候群的診斷標準與長期健康風險'
    ],
    card_title_alts:[
      ['月經老是不準？','認識多囊性卵巢症候群'],
      ['3 項符合 2 項','多囊性卵巢怎麼診斷'],
      ['減重 5% 就有幫助','生活調整這樣做']
    ],
    data_addon:[
      '國泰綜合醫院醫師（2025）：盛行率約6%至15%，依鹿特丹標準3項符合2項即可診斷。',
      '長期風險：不孕、第二型糖尿病、代謝症候群、心血管疾病、心理健康問題。',
      '體重減輕5%至10%有助排卵與調整月經週期。'
    ],
    cta:'月經週期長期不規則，就預約婦產科做一次完整評估。'
  });
})();
