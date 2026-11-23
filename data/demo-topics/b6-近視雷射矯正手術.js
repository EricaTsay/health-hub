/* v6 示範主題：近視雷射矯正手術（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-21。資料來源：TVBS健康2.0 2026-02（眼科醫師受訪：近視雷射與老花、術後檢查）、衛福部 114-09-19 學齡前兒童視力篩檢新聞稿（近視盛行率）、
   TVBS健康2.0 2024-10-09（眼科醫學會：雷射不改變高度近視眼底風險的相關說法）。查無國內官方近視雷射手術量或併發症統計。
   參考方向：健康智庫〈眼部治療手術－視力矯正手術〉2026/02。 */
(function(){
  const TV = 'https://health.tvbs.com.tw/nutrition/360194';
  const MOHW = 'https://mohw.gov.tw/cp-7173-83963-1.html';
  const TV2 = 'https://health.tvbs.com.tw/nutrition/350134';
  const REFS = [
    {title:'做完近視雷射 老花眼會更嚴重？眼科醫師教壯世代如何規劃視力照護',source:'TVBS健康2.0',url:TV},
    {title:'學齡前兒童視力篩檢 近視防治向下扎根',source:'衛生福利部',url:MOHW},
    {title:'白內障危機大！視力心情都變差 近視逾500度小心 有人38歲就白內障',source:'TVBS健康2.0',url:TV2}
  ];
  const TABLE = {headers:['術前要知道','說明'], rows:[
    ['度數穩定','近視度數需穩定一段時間，由醫師評估是否適合'],
    ['完整檢查','角膜厚度、角膜地形、乾眼與眼底檢查都很重要'],
    ['不防老花','雷射是減少對近視眼鏡的依賴，不會預防老花'],
    ['眼底風險仍在','高度近視的視網膜與眼底風險不會因雷射消失']
  ]};
  const TAGS = ['近視雷射','視力矯正','高度近視','乾眼','眼睛保健'];

  const DP_EXP = {id:'dp-lasik-exp', type:'context', title:'對手術的期待',
    desc:'近視雷射是自費醫療，常見宣傳強調「告別眼鏡」；但眼科醫師提醒雷射不會預防老花、也不會降低高度近視的眼底疾病風險。AI 已在文中說明限制，是否保留由你決定。',
    current:'說明手術限制與術後追蹤',
    options:[{label:'沿用目前寫法', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'近視雷射矯正手術：術前檢查、術後追蹤與3個常見迷思',
    update_date:'2026/11/21',
    intro:'台灣近視盛行率高，衛福部2025年引述以往調查，國小六年級近視比例達70.6%，許多成人考慮以近視雷射矯正手術減少對眼鏡的依賴。眼科醫師2026年受訪提醒，近視雷射與老花眼沒有直接關係，既不會預防、也不會加重老花；中華民國眼科醫學會也曾指出，高度近視造成的視網膜與眼底疾病風險，並不會因配鏡或雷射而改變。',
    sections:[
      {heading:'術前要知道的4件事',format:'table',table:TABLE},
      {heading:'術後照護',format:'bullets',items:[
        '依醫囑點藥、回診，避免揉眼與眼睛碰水、碰撞。',
        '術後可能有暫時性乾眼、夜間光暈或眩光，多數會逐漸改善，持續不適應回診。',
        '高度近視者術後仍須定期散瞳檢查眼底，留意飛蚊突然增加、閃光等警訊。'
      ]},
      {heading:'3個常見迷思',format:'bullets',items:[
        '「做了雷射就不會老花」：錯，老花是水晶體老化，約40歲後仍會出現。',
        '「雷射後眼睛就沒問題了」：錯，高度近視的眼底風險仍在。',
        '「每個人都能做」：錯，角膜條件、乾眼與眼睛疾病都可能不適合，需由醫師評估。'
      ]}
    ],
    think_tank_view:'近視雷射可以改善生活便利性，但它是自費、不可逆的手術。術前把檢查做完整、了解限制與風險，術後仍維持定期眼科追蹤，才是對眼睛負責的選擇。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'近視盛行率引自衛福部並註明為以往調查，醫師與學會說法標明身分，未使用療效保證用語，未推薦特定術式、院所或費用方案。',
    ai_rationale:{basis:['國小六年級近視70.6%（衛福部2025年引述以往調查）','近視雷射不影響老花（眼科醫師2026年受訪）'],
      layout_reason:'先用表格整理術前須知，再說明術後照護，最後破除3個迷思。',
      tone:'專業易懂', tone_reason:'自費醫療需中立呈現效益與限制。',
      to_verify:['查無國內近視雷射手術量與併發症統計','70.6%調查年份新聞稿未註明']},
    decision_points:[DP_EXP]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'想做近視雷射？術前先搞懂這4件事',
    update_date:'2026/11/21',
    intro:'戴眼鏡好麻煩，想做近視雷射一勞永逸？先別急。眼科醫師說，雷射可以讓你少戴近視眼鏡，但不會預防老花；高度近視的人，眼底的風險也不會因為雷射就消失。了解清楚再決定，才不會期待落空。',
    sections:[
      {heading:'做之前要知道',format:'table',table:TABLE},
      {heading:'做完之後',format:'bullets',items:[
        '照醫生說的點藥、回診，別揉眼睛。',
        '一開始可能眼睛乾、晚上看燈有光暈，大多會慢慢改善，一直不舒服就回診。',
        '高度近視的人還是要定期檢查眼底，飛蚊突然變多要馬上看醫生。'
      ]},
      {heading:'常見誤會',format:'bullets',items:[
        '做了雷射就不會老花？不會，40歲左右還是會老花。',
        '做完眼睛就沒問題？高度近視的眼底風險還在。',
        '每個人都能做？要先檢查角膜和乾眼狀況。'
      ]}
    ],
    think_tank_view:'近視雷射是一個選擇，不是終點。檢查做完整、期待放合理，做完後也要好好顧眼睛。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'醫師說法標明身分，語氣親切，未使用療效保證用語，未推薦特定院所。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以想擺脫眼鏡的情境帶出須知、術後與迷思。', tone:'生活親切', tone_reason:'給考慮手術的成人閱讀。', to_verify:[]},
    decision_points:[DP_EXP]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'近視雷射：術前4須知＋3迷思',
    update_date:'2026/11/21',
    intro:'眼科醫師提醒：近視雷射不會預防或加重老花，高度近視的眼底風險也不因雷射消失。',
    sections:[
      {heading:'術前4須知',format:'table',table:TABLE},
      {heading:'術後',format:'bullets',items:[
        '依醫囑點藥回診。',
        '高度近視持續追蹤眼底。'
      ]},
      {heading:'迷思',format:'bullets',items:[
        '雷射不防老花。',
        '不是每個人都適合。'
      ]}
    ],
    think_tank_view:'完整術前檢查、合理期待、術後持續追蹤。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'醫師說法標明身分，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為須知、術後、迷思三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_EXP]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'近視雷射矯正手術', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'近視雷射前，先了解限制', primary_visual:'70.6%', secondary_message:'雷射不防老花、眼底風險仍在', action_priority:'完整檢查、合理期待、術後追蹤'},
    headline_hook:'想做近視雷射？', headline_main:'術前先懂這 4 件事', title_accent:'4 件事',
    hero_message:'告別眼鏡≠告別風險', hero_support:'雷射不防老花，高度近視仍需追蹤眼底',
    knowledge_title:'術前 4 須知', knowledge_note:'術後飛蚊突增、閃光，**立即就醫**',
    knowledge_cards:[
      {label:'度數穩定', icon:'report', lines:['由醫師評估是否適合']},
      {label:'完整檢查', icon:'search', lines:['角膜、乾眼、眼底']},
      {label:'不防老花', icon:'check', lines:['40 歲後仍會老花']},
      {label:'眼底風險', icon:'shield', lines:['高度近視風險仍在']}
    ],
    primary_stat:{value:'70.6%', label:'國小六年級近視盛行率', note:'衛福部 2025 年引述以往調查'},
    secondary_stats:[
      {value:'約 40 歲', label:'老花常見開始年齡'},
      {value:'自費', label:'近視雷射屬自費醫療'}
    ],
    action_title:'這樣做決定',
    action_cards:[
      {key:'檢', text:'術前做完整眼科檢查'},
      {key:'問', text:'問清楚風險、限制與費用'},
      {key:'護', text:'術後依醫囑點藥回診'},
      {key:'追', text:'高度近視持續追蹤眼底'}
    ],
    carousel_suggestion:{reason:'若想把術前、術後與迷思分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'想做近視雷射？', headline_main:'術前 4 須知'},
      {layout_type:'action', headline_hook:'術後照護', headline_main:'這樣保護眼睛'},
      {layout_type:'knowledge', headline_hook:'破解迷思', headline_main:'雷射不會防老花'}]},
    hashtags:['近視雷射','視力矯正','高度近視','眼睛保健'],
    sources:['眼科醫師（媒體受訪）','衛生福利部'],
    illustration_category:'screening-checkup',
    illustration:{topic:'近視雷射術前檢查', audience:'20 至 40 歲近視族', scene:'一位年輕上班族拿著眼鏡，在眼科診間做角膜檢查',
      emotion:'謹慎、有準備', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young office worker holding glasses while undergoing a corneal examination at an eye clinic, careful and prepared mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['國小六年級近視70.6%（衛福部）','雷射不影響老花（眼科醫師）'],
      layout_reason:'選 knowledge：4 個術前須知放中段，近視盛行率退到下方，最後給 4 個決策行動。',
      tone:'專業易懂', tone_reason:'中立呈現自費醫療。',
      to_verify:['70.6%調查年份']},
    decision_points:[DP_EXP],
    content_check_note:'近視盛行率引自衛福部，醫師說法標明身分，未使用療效保證用語，未推薦特定院所。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'近視雷射矯正手術',
    collect:{
      summary:'台灣近視盛行率高，近視雷射是常見的自費選擇；眼科醫師提醒雷射不防老花、高度近視眼底風險仍在，「完整術前評估、合理期待、術後持續追蹤」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'國小六年級近視盛行率70.6%：衛福部2025年引述以往調查，幼兒園大班9%、國小一年級19.8%，近視族群是近視雷射的主要潛在對象（調查年份未註明）。',tag:'官方統計',source:{name:'衛生福利部：學齡前兒童視力篩檢 近視防治向下扎根',url:MOHW}},
        {item:'年度趨勢方向',desc:'近視雷射不會預防或加重老花：眼科醫師2026年受訪指出，雷射是幫助擺脫近視眼鏡，而非抵抗老化，建議約40歲開始定期檢查眼睛。',tag:'市場觀察',source:{name:'TVBS健康2.0：做完近視雷射 老花眼會更嚴重？',url:TV}},
        {item:'政策動向',desc:'查無官方手術量與併發症統計：近視雷射屬自費醫療，國內未公布手術量，術前應由眼科醫師評估角膜與眼睛狀況。',tag:'市場觀察',source:{name:'TVBS健康2.0：做完近視雷射 老花眼會更嚴重？',url:TV}},
        {item:'好發族群年齡層',desc:'高度近視眼底風險不因雷射消失：中華民國眼科醫學會受訪指出，近視度數越深，白內障、青光眼、黃斑部病變與視網膜剝離風險越高。',tag:'市場觀察',source:{name:'TVBS健康2.0：白內障危機大！近視逾500度小心',url:TV2}}
      ],
      product_view:['機會：近視族群年輕，可結合眼睛保健與健康管理服務。','機會：說明自費醫療與保障範圍的差異。','風險：不推薦特定術式或院所；不暗示保險給付自費雷射。'],
      marketing_view:['機會：「雷射不防老花」是有效的迷思破解。','機會：畢業、求職季前是考慮手術的時點。','風險：避免像醫美廣告般強調效果。'],
      alert_level:'low',
      alert_reason:'屬自費醫療資訊，無時效性政策事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國小六年級近視比例達70.6%','CURRENCY_TIMELINESS','survey_year_unstated',
          '衛福部新聞稿寫「以往調查」，未註明年份；且學童近視與成人是否適合雷射的族群不同。','low','yes',
          '國健署兒童及青少年視力監測調查年份。','yes','confirm','新聞稿未註明年份。',
          '國小六年級近視比例達70.6%（國健署以往調查）'),
        F('多數會逐漸改善','MEDICAL_INTERPRETATION','unsupported_generalization',
          '「多數」沒有數據支持，也未說明恢復期可能長達數月。','low','no',
          null,'no','soften','屬表達強度問題。',
          '許多人會在數週到數月內逐漸改善',
          ['大多會慢慢改善']),
        F('角膜條件、乾眼與眼睛疾病都可能不適合','MEDICAL_INTERPRETATION','missing_detail',
          '未列舉常見不適合情況（如角膜過薄、圓錐角膜、嚴重乾眼、懷孕），讀者難以初步判斷。','low','no',
          null,'no','clarify','補例子即可。',
          '角膜過薄、圓錐角膜、嚴重乾眼或懷孕期間等情況可能不適合'),
        F('依醫囑點藥、回診，避免揉眼與眼睛碰水、碰撞','MEDICAL_INTERPRETATION','missing_duration',
          '未說明需注意多久，讀者可能過早恢復游泳等活動。','low','no',
          null,'no','clarify','補一句即可。',
          '依醫囑點藥、回診，術後一段時間內避免揉眼與眼睛碰水、碰撞（時間依醫師指示）',
          ['照醫生說的點藥、回診，別揉眼睛'])
      ],
      card:[
        F('國小六年級近視盛行率','DATA_FACTUAL_ACCURACY','population_mismatch',
          '主數字是學童近視，卡面主題是成人手術，族群不同，可能讓讀者誤解。','low','no',
          null,'no','clarify','屬呈現方式問題。',
          '國小六年級近視盛行率（說明近視普遍）'),
        F('40 歲後仍會老花','MEDICAL_INTERPRETATION','age_generalization',
          '老花出現年齡因人而異。','low','no',
          null,'no','clarify','屬精確度問題。',
          '約 40 歲後多會出現老花')
      ]
    },
    title_alts:[
      '近視雷射矯正手術：術前檢查、術後追蹤與3個常見迷思',
      '想做近視雷射？術前先搞懂這4件事',
      '近視雷射不防老花：做決定前要知道的事'
    ],
    card_title_alts:[
      ['想做近視雷射？','術前先懂這 4 件事'],
      ['告別眼鏡≠告別風險','近視雷射須知'],
      ['雷射不防老花','破解 3 個迷思']
    ],
    data_addon:[
      '眼科醫學會：近視每增加100度，視網膜剝離風險約增加30%（醫師引述研究）。',
      '國健署：學齡前兒童近視若不介入，每年度數可能增加近100度。',
      '眼科醫師建議約40歲開始定期檢查，規劃老花與眼睛照護。'
    ],
    cta:'考慮近視雷射前，先預約一次完整眼科檢查，把角膜、乾眼與眼底狀況都問清楚。'
  });
})();
