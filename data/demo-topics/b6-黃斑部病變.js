/* v6 示範主題：黃斑部病變（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-20。數據來源：TVBS健康2.0 2025-10-22（中華民國眼科醫學會理事長、愛盲協會理事長、醫學中心眼底病變中心主任受訪）、
   TVBS健康2.0 2024-10-09（眼科醫學會：近視度數與眼疾風險）、健保署「新生血管抑制劑健保給付問答集」。
   查無國內官方公布的黃斑部病變盛行率或就醫人數最新統計。
   參考方向：健康智庫〈黃斑部病變〉2022/06、〈認識保護眼睛的好夥伴－葉黃素〉2025/01。 */
(function(){
  const TV = 'https://health.tvbs.com.tw/nutrition/358517';
  const NHI = 'https://www.nhi.gov.tw/ch/dl-8776-c4b6081d7f2d4742aec2ba85c72fd7fe-1.docx';
  const REFS = [
    {title:'不是老花眼！黃斑部病變提早找上壯世代 延誤治療恐永久失明',source:'TVBS健康2.0',url:TV},
    {title:'白內障危機大！視力心情都變差 近視逾500度小心 有人38歲就白內障',source:'TVBS健康2.0',url:'https://health.tvbs.com.tw/nutrition/350134'},
    {title:'新生血管抑制劑健保給付問答集',source:'衛生福利部中央健康保險署',url:NHI}
  ];
  const TABLE = {headers:['自我檢查','怎麼做'], rows:[
    ['準備方格表','印出或用手機開啟阿姆斯勒方格表，在光線充足處'],
    ['距離與姿勢','距離約30公分，平常戴眼鏡者先戴上眼鏡'],
    ['單眼注視','遮住一眼，注視方格中心點，再換另一眼'],
    ['出現異常就醫','線條扭曲、模糊、缺角或出現黑點，盡快看眼科']
  ]};
  const TAGS = ['黃斑部病變','阿姆斯勒方格表','高度近視','視力保健','眼底檢查'];

  const DP_PREV = {id:'dp-amd-prev', type:'data_scope', title:'「65歲以上約9%」的出處層級',
    desc:'TVBS 2025年報導寫「台灣研究指出，65歲以上族群早期盛行率約9%」，但未說明是哪一項研究、哪一年，也找不到國內官方統計可對照。AI 沒有替你決定是否沿用這個數字。',
    current:'65歲以上早期盛行率約9%（媒體引述台灣研究）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'改成不寫比例', action:'replace', from:'65歲以上族群早期黃斑部病變的盛行率約9%', to:'黃斑部病變好發於中高齡族群'}]};

  const PRO = {
    content_type:'健康文章',
    title:'黃斑部病變不是老花眼：每月30秒，用方格表自我檢查',
    update_date:'2026/11/20',
    intro:'黃斑部是視網膜中負責看清細節與顏色的部位，一旦病變，會出現視線中央扭曲、模糊或黑影，嚴重時可能造成永久視力損失。TVBS 2025年報導引述台灣研究，65歲以上族群早期黃斑部病變的盛行率約9%。中華民國眼科醫學會理事長受訪指出，研究顯示近視每增加100度，黃斑部病變風險約增加60%，中壯年高度近視族也要提高警覺。',
    sections:[
      {heading:'阿姆斯勒方格表自我檢查',format:'table',table:TABLE},
      {heading:'哪些人要特別注意',format:'bullets',items:[
        '50歲以上、有家族病史者。',
        '吸菸者，以及有高血壓、高血糖或心血管疾病者。',
        '高度近視者，可能出現病理性近視引起的黃斑部病變。'
      ]},
      {heading:'治療與追蹤',format:'bullets',items:[
        '濕性黃斑部病變常見治療為眼內注射新生血管抑制劑（抗VEGF），另有雷射或光動力療法，由眼科醫師評估。',
        '健保對眼內注射新生血管抑制劑訂有適應症與給付針數規定，需經醫師評估申請。',
        '治療後仍需定期回診，並持續以方格表自我監測。'
      ]}
    ],
    think_tank_view:'黃斑部病變的早期變化，常被當成老花或眼睛累。每月花30秒、遮住一眼看方格表，是在家就能做的早期警報；一旦線條變彎、出現黑點，及早就醫才有機會保住中心視力。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率與風險數字標明為媒體引述研究或醫師說法，健保給付引自健保署問答集，未使用療效保證用語，未推薦特定藥品或保健食品。',
    ai_rationale:{basis:['沿用步驟1洞察：65歲以上早期盛行率約9%（TVBS引述台灣研究）','近視每增加100度風險增加約60%（眼科醫學會理事長受訪）'],
      layout_reason:'先用表格教方格表自我檢查，再列高風險族群，最後說明治療與健保。',
      tone:'專業易懂', tone_reason:'自我檢查需要具體步驟。',
      to_verify:['9%盛行率的原始研究名稱與年份','「每100度增加60%」的研究出處']},
    decision_points:[DP_PREV]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'看東西線條歪歪的？30秒方格表，在家檢查黃斑部',
    update_date:'2026/11/20',
    intro:'黃斑部是眼睛裡負責「看清楚」的地方。黃斑部病變會讓視線中間變彎、變模糊，甚至出現黑影，很多人以為只是老花。眼科醫學會理事長說，研究發現近視每多100度，黃斑部病變的風險大約多6成，不只長輩，高度近視的人也要留意。',
    sections:[
      {heading:'方格表這樣看',format:'table',table:TABLE},
      {heading:'誰要特別注意？',format:'bullets',items:[
        '50歲以上，或家人有黃斑部病變。',
        '抽菸，或有高血壓、高血糖、心血管疾病。',
        '近視度數很深的人。'
      ]},
      {heading:'如果真的有問題？',format:'bullets',items:[
        '眼科醫師會評估是否需要眼內注射或雷射治療。',
        '健保有給付眼內注射藥物，但有適應症和針數規定，醫師會幫忙評估。',
        '治療後也要定期回診，每月繼續用方格表檢查。'
      ]}
    ],
    think_tank_view:'把方格表印出來貼在冰箱上，每個月陪爸媽一起看30秒，就是最簡單的護眼習慣。線條一變彎，就早點去看眼科。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'風險數字標明為醫師引述研究，健保給付引自健保署，語氣親切但未淡化就醫必要，未使用療效保證用語，未推薦特定藥品或保健食品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以生活中的視覺變化帶出自我檢查、高風險族群與治療。', tone:'生活親切', tone_reason:'給熟齡族群與子女閱讀。', to_verify:['「每100度增加60%」研究出處']},
    decision_points:[Object.assign({}, DP_PREV, {current:'不寫盛行率，以風險族群說明', options:[{label:'沿用目前寫法', action:'keep'}]})]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'黃斑部病變：每月30秒方格表自我檢查',
    update_date:'2026/11/20',
    intro:'媒體引述台灣研究，65歲以上族群早期黃斑部病變的盛行率約9%。視線中央扭曲、模糊或黑點，要盡快就醫。',
    sections:[
      {heading:'方格表4步驟',format:'table',table:TABLE},
      {heading:'高風險族群',format:'bullets',items:[
        '50歲以上、家族史、吸菸。',
        '三高、心血管疾病、高度近視。'
      ]},
      {heading:'治療追蹤',format:'bullets',items:[
        '眼內注射或雷射由醫師評估。',
        '健保給付有適應症與針數規定。'
      ]}
    ],
    think_tank_view:'每月30秒的方格表自我檢查，是及早發現黃斑部病變最簡單的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率標明為媒體引述研究，未使用療效保證用語，未推薦特定藥品或保健食品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為檢查、族群、治療三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['9%盛行率原始研究']},
    decision_points:[Object.assign({}, DP_PREV, {options:[{label:'沿用目前寫法', action:'keep'}, {label:'改成不寫比例', action:'replace', from:'65歲以上族群早期黃斑部病變的盛行率約9%', to:'黃斑部病變好發於中高齡族群'}]})]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'黃斑部病變', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'黃斑部病變不是老花眼', primary_visual:'約 60%', secondary_message:'近視每增加 100 度，風險約增 6 成', action_priority:'每月方格表自我檢查'},
    headline_hook:'線條歪歪的不是老花', headline_main:'黃斑部 30 秒自我檢查', title_accent:'30 秒',
    hero_message:'每月 1 次方格表', hero_support:'遮住一眼、注視中心點，線條扭曲就就醫',
    primary_stat:{value:'約 60%', label:'近視每增加 100 度，黃斑部病變風險增加', note:'眼科醫學會理事長引述研究'},
    action_title:'方格表這樣看',
    action_cards:[
      {key:'距', text:'距離約 30 公分，戴上平常的眼鏡'},
      {key:'遮', text:'遮住一眼，注視方格中心點'},
      {key:'換', text:'再換另一眼重複檢查'},
      {key:'醫', text:'線條扭曲、模糊或黑點，盡快就醫'}
    ],
    notice:'50 歲以上、吸菸、三高、**高度近視**者要特別留意。',
    carousel_suggestion:{reason:'若想把自我檢查、高風險族群與治療分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'action', headline_hook:'線條歪歪的不是老花', headline_main:'方格表 30 秒自我檢查'},
      {layout_type:'knowledge', headline_hook:'誰要特別注意', headline_main:'黃斑部病變高風險族群'},
      {layout_type:'knowledge', headline_hook:'治療與健保', headline_main:'眼內注射怎麼給付'}]},
    hashtags:['黃斑部病變','阿姆斯勒方格表','高度近視','視力保健'],
    sources:['中華民國眼科醫學會（媒體受訪）','衛生福利部中央健康保險署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'黃斑部自我檢查', audience:'50 歲以上與高度近視族群', scene:'一位中年女性在客廳用手遮住一隻眼睛，注視貼在冰箱上的方格表',
      emotion:'專注、有掌握感', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged woman in her living room covering one eye with her hand and looking at an Amsler grid chart stuck on the fridge, focused mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['近視每增加100度風險增加約60%（眼科醫學會理事長引述研究）','方格表自我檢查方法取自愛盲協會理事長受訪'],
      layout_reason:'核心是在家可做的自我檢查，選 action：4 個檢查步驟當主角，風險數字放下方。',
      tone:'專業易懂', tone_reason:'步驟需清楚可照做。',
      to_verify:['60%風險的研究出處']},
    decision_points:[{id:'dp-amd-risk', type:'tone', title:'風險數字的說法', desc:'主數字「約 60%」是相對風險增加，單獨放大可能讓高度近視族過度擔心；AI 沒有替你決定要不要改成較中性的寫法。',
      current:'約 60%｜近視每增加 100 度，黃斑部病變風險增加',
      options:[{label:'維持目前寫法', action:'keep'}, {label:'改成較中性', action:'replace', from:'近視每增加 100 度，黃斑部病變風險增加', to:'近視度數越深，黃斑部病變風險越高'}]}],
    content_check_note:'風險數字標明為醫師引述研究，未使用療效保證用語，未推薦特定藥品或保健食品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'黃斑部病變',
    collect:{
      summary:'黃斑部病變好發於中高齡，也因高度近視而有年輕化趨勢；早期常被誤認為老花，眼科醫師推廣每月以阿姆斯勒方格表自我檢查，「早期自我監測、及早治療」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'65歲以上早期盛行率約9%：TVBS 2025年10月報導引述台灣研究，65歲以上族群早期黃斑部病變盛行率約9%（報導未註明研究名稱與年份）。',tag:'市場觀察',source:{name:'TVBS健康2.0：不是老花眼！黃斑部病變提早找上壯世代',url:TV}},
        {item:'年度趨勢方向',desc:'近視每增加100度風險約增加60%：中華民國眼科醫學會理事長受訪引述研究，近視度數與黃斑部病變風險相關，愛盲協會理事長並指出40至50歲罹病者近年明顯增加。',tag:'市場觀察',source:{name:'TVBS健康2.0：不是老花眼！黃斑部病變提早找上壯世代',url:TV}},
        {item:'政策動向',desc:'健保眼內注射給付訂有適應症與針數上限：健保署對新生血管抑制劑（抗VEGF）眼內注射訂有給付規定，依疾病別限制給付針數並需事前審查。',tag:'官方統計',source:{name:'衛生福利部中央健康保險署：新生血管抑制劑健保給付問答集',url:NHI}},
        {item:'好發族群年齡層',desc:'亞洲濕性黃斑部病變約6成為PCV型：醫學中心眼底病變中心主任受訪指出，多足型脈絡膜血管病變（PCV）在亞洲比例明顯高於歐美，病灶易反覆復發。',tag:'市場觀察',source:{name:'TVBS健康2.0：不是老花眼！黃斑部病變提早找上壯世代',url:TV}}
      ],
      product_view:['機會：濕性黃斑部病變需長期眼內注射，常涉及健保給付限制與自費，適合說明醫療費用保障。','機會：視力損失與失能相關，可連結熟齡健康管理與失能保障。','風險：避免暗示葉黃素等保健食品可預防或治療；不推薦特定藥品。'],
      marketing_view:['機會：方格表自我檢查是容易做成互動內容的題材（可下載、可貼冰箱）。','機會：世界視覺日（10月）是固定溝通檔期。','風險：避免以「失明」製造恐懼；風險倍數需標明來源。'],
      alert_level:'low',
      alert_reason:'屬長期眼睛健康議題，無急迫政策事件；適合世界視覺日前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('65歲以上族群早期黃斑部病變的盛行率約9%','SOURCE_EVIDENCE','unnamed_study',
          '文中只寫「台灣研究」，沒有研究名稱、年份與樣本範圍，讀者無法查證。','medium','yes',
          '國內黃斑部病變盛行率研究（如社區流行病學研究）的名稱與年份。','no','confirm','數字與部分國內研究範圍相近，但出處未明。',
          '65歲以上族群早期黃斑部病變的盛行率約9%（媒體引述國內研究，研究名稱待補）'),
        F('近視每增加100度，黃斑部病變風險約增加60%','SOURCE_EVIDENCE','expert_cites_unnamed_study',
          '醫學會理事長引述「研究顯示」，但沒說明是哪一項研究；相對風險數字單獨呈現，讀者可能高估個人風險。','low','yes',
          '近視度數與黃斑部病變風險的研究出處。','no','confirm','屬引述出處問題。',
          '近視度數越深，黃斑部病變風險越高（醫師引述研究，每增加100度約增加60%）',
          ['近視每多100度，黃斑部病變的風險大約多6成']),
        F('健保對眼內注射新生血管抑制劑訂有適應症與給付針數規定','MEDICAL_INTERPRETATION','missing_practical_info',
          '只說有規定，沒說明病人實際上要怎麼做（由醫師事前審查申請），讀者可能以為要自己申請。','low','no',
          null,'no','clarify','補一句實際流程。',
          '健保對眼內注射新生血管抑制劑訂有適應症與給付針數規定，由醫師評估後向健保署事前申請',
          ['健保有給付眼內注射藥物，但有適應症和針數規定','健保給付有適應症與針數規定']),
        F('抗VEGF','TERMINOLOGY_LANGUAGE','term_unexplained',
          '「抗VEGF」為英文縮寫，未解釋意義。','low','no',
          null,'no','clarify','補白話說明。',
          '抗VEGF（抑制眼內異常血管新生的藥物）')
      ],
      card:[
        F('眼科醫學會理事長引述研究','SOURCE_EVIDENCE','expert_cites_unnamed_study',
          '主數字出自醫師引述未具名研究，卡面讀者無法查證。','low','yes',
          '研究出處。','no','confirm','屬出處層級問題。',
          '眼科醫學會理事長受訪引述研究（研究名稱待補）'),
        F('線條扭曲、模糊或黑點，盡快就醫','MEDICAL_INTERPRETATION','urgency_unclear',
          '「盡快」沒有具體時間，濕性病變出血需及早處理，讀者可能拖延。','low','no',
          null,'no','clarify','可補一週內等具體建議。',
          '線條扭曲、模糊或黑點，一週內就醫')
      ]
    },
    title_alts:[
      '黃斑部病變不是老花眼：每月30秒，用方格表自我檢查',
      '看東西線條歪歪的？30秒方格表，在家檢查黃斑部',
      '高度近視也要注意：黃斑部病變風險族群與自我檢查'
    ],
    card_title_alts:[
      ['線條歪歪的不是老花','黃斑部 30 秒自我檢查'],
      ['每月 1 次','方格表自我檢查 4 步驟'],
      ['高度近視要注意','黃斑部病變自我檢查']
    ],
    data_addon:[
      '愛盲協會理事長建議：阿姆斯勒方格表每月自我檢測一次，約30秒即可完成。',
      '眼科醫學會：白內障、青光眼、黃斑部病變為高齡3大視力問題，可能同時發生。',
      '健保署問答集：病理性近視續發脈絡膜血管新生，新生血管抑制劑給付3支。'
    ],
    cta:'今天就把阿姆斯勒方格表印出來貼在冰箱上，每個月第一天和家人一起做30秒自我檢查。'
  });
})();
