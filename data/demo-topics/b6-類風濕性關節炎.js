/* v6 示範主題：類風濕性關節炎（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-20。數據來源：健保署「重大傷病各疾病別有效領證統計表」115年9月（資料日期115/10/1；同一網址每月更新）、
   公視新聞網 2026-03-22（健保署審議放寬進階藥給付、病友團體估計人數）、NOWnews 2021-10-13（風濕病醫學會理事長受訪：好發年齡）。
   參考方向：健康智庫〈類風溼性關節炎〉2022/07。 */
(function(){
  const NHI = 'https://www.nhi.gov.tw/ch/dl-17701-bd02ea37ebc946f4af6246b85b085013-1.pdf';
  const REFS = [
    {title:'全民健康保險重大傷病各疾病別有效領證統計表',source:'衛生福利部中央健康保險署',url:NHI},
    {title:'類風溼性關節炎無法根治 病團籲放寬健保給付進階藥',source:'公視新聞網',url:'https://news.pts.org.tw/article/800136'},
    {title:'10/12世界關節炎日 醫盼放寬生物製劑健保給付條件',source:'NOWnews今日新聞（健康醫療網）',url:'https://www.nownews.com/news/5408821'}
  ];
  const TABLE = {headers:['警訊','常見表現'], rows:[
    ['晨間僵硬','早上起床關節僵硬，要活動一段時間才慢慢緩解'],
    ['對稱性關節腫痛','左右兩側的手指、手腕或腳趾小關節同時腫脹、疼痛'],
    ['全身症狀','容易疲倦、輕微發燒、食慾或體重下降'],
    ['關節變形','長期發炎未控制，可能出現關節變形與活動受限']
  ]};
  const TAGS = ['類風濕性關節炎','自體免疫疾病','關節腫痛','重大傷病','風濕免疫科'];

  const DP_COUNT = {id:'dp-ra-count', type:'data_scope', title:'患者人數有兩種說法',
    desc:'健保署統計的「5萬4,787人」是領有類風濕性關節炎重大傷病證明的人數；公視2026年報導的「約15萬人」為全台患者概估，報導未說明出處。兩者口徑不同，AI 沒有替你決定要用哪一個。',
    current:'5萬4,787人（重大傷病證明，健保署115年9月）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約5.5萬人', value:'重大傷病證明持有者', note:'健保署重大傷病統計，115年9月（目前採用）'},
      {label:'約15萬人', value:'全台患者概估', note:'公視2026年報導，未註明統計來源'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'類風濕性關節炎：早上關節僵硬別輕忽，及早治療護關節',
    update_date:'2026/11/20',
    intro:'類風濕性關節炎是免疫系統誤攻擊自身關節滑膜所造成的慢性發炎疾病，並非單純的關節老化。依健保署重大傷病統計，截至115年9月，領有類風濕性關節炎重大傷病證明者有5萬4,787人。中華民國風濕病醫學會理事長曾於2021年受訪指出，此病好發於30至50歲女性；若未及早控制發炎，關節可能逐步受損變形，影響工作與生活。',
    sections:[
      {heading:'類風濕性關節炎的4個警訊',format:'table',table:TABLE},
      {heading:'治療重點',format:'bullets',items:[
        '確診與治療由風濕免疫科醫師評估，常以傳統抗風濕藥物為基礎，控制不佳時再依健保規定評估生物製劑等進階藥物。',
        '治療目標是讓發炎緩解或維持低疾病活動度，減少關節破壞；症狀改善後仍要依醫囑規律回診與服藥。',
        '健保署表示，病友團體2025年提出放寬進階藥給付的建議，已召開第1次專家會議，目前仍在審議中。'
      ]},
      {heading:'日常照顧',format:'bullets',items:[
        '在醫師或物理治療師指導下維持關節活動度與肌力，急性腫痛期則以休息、保護關節為主。',
        '戒菸、維持理想體重，並留意長期用藥可能的副作用，定期抽血追蹤。',
        '家中可改用粗握柄餐具、拉桿式門把等輔具，減少手部小關節負擔。'
      ]}
    ],
    think_tank_view:'類風濕性關節炎的關鍵是「早」：早期的晨間僵硬與對稱性關節腫痛，常被當成太累或退化而延誤就醫。及早由風濕免疫科確診、持續治療，多數病友能把發炎控制下來，維持工作與生活品質。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'重大傷病人數引自健保署統計並標明時點，好發年齡標明為學會理事長受訪說法與年份，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['沿用步驟1洞察：類風濕性關節炎重大傷病證明5萬4,787人（健保署115年9月）','進階藥給付審議進度取自公視2026年3月報導'],
      layout_reason:'先用表格讓讀者對照4個警訊，再說明治療原則與健保動向，最後給日常照顧做法。',
      tone:'專業易懂', tone_reason:'慢性免疫疾病需要清楚區分它與退化性關節炎，並說明持續治療的重要。',
      to_verify:['「好發於30至50歲女性」為2021年學會理事長受訪說法','健保署統計表同一網址每月更新，引用前確認月份']},
    decision_points:[DP_COUNT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'早上起床手指僵硬、腫痛？可能是類風濕性關節炎',
    update_date:'2026/11/20',
    intro:'早上起床手指卡卡、要動一陣子才順，兩手的小關節又同時腫痛？這可能不是單純累到，而是類風濕性關節炎。它是免疫系統「認錯人」去攻擊自己的關節。健保署統計，到115年9月有5萬4,787人領有類風濕性關節炎的重大傷病證明。越早找風濕免疫科醫師，越能把關節保護好。',
    sections:[
      {heading:'這4個變化要留意',format:'table',table:TABLE},
      {heading:'看醫生之後呢？',format:'bullets',items:[
        '風濕免疫科醫師會先用口服的抗風濕藥物控制發炎，效果不好時，再依健保規定評估生物製劑等進階藥物。',
        '目標是讓發炎安靜下來、保護關節；症狀變好了也要繼續回診，不要自己停藥。',
        '病友團體希望健保放寬進階藥的給付條件，健保署表示還在審議中。'
      ]},
      {heading:'生活中可以這樣做',format:'bullets',items:[
        '照著醫師或物理治療師的建議做關節運動；腫痛發作時先讓關節休息。',
        '戒菸、維持體重，定期抽血追蹤用藥狀況。',
        '換成握把粗一點的湯匙、拉桿式門把，讓手指輕鬆一點。'
      ]}
    ],
    think_tank_view:'很多人把手指晨僵當成「太累」或「年紀到了」，結果拖了好一陣子才就醫。類風濕性關節炎越早治療越好，也提醒家人：兩手同時腫痛超過幾週，就該請風濕免疫科醫師看看。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'人數引自健保署統計並標明時點，語氣親切但未淡化治療必要性，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以晨僵的生活情境帶出警訊、就醫後的治療與日常照顧。', tone:'生活親切', tone_reason:'給中年女性與家人閱讀，降低就醫門檻。', to_verify:['健保署統計表月份']},
    decision_points:[DP_COUNT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'類風濕性關節炎：4個警訊＋治療3重點',
    update_date:'2026/11/20',
    intro:'依健保署統計，截至115年9月，領有類風濕性關節炎重大傷病證明者5萬4,787人。晨間僵硬、對稱性小關節腫痛要及早就醫。',
    sections:[
      {heading:'4個警訊',format:'table',table:TABLE},
      {heading:'治療重點',format:'bullets',items:[
        '風濕免疫科確診，傳統抗風濕藥物為基礎。',
        '控制不佳時，依健保規定評估進階藥物。',
        '症狀改善後仍規律回診，勿自行停藥。'
      ]},
      {heading:'日常照顧',format:'bullets',items:[
        '依指導做關節運動，急性期休息。',
        '戒菸、維持體重、定期抽血追蹤。'
      ]}
    ],
    think_tank_view:'類風濕性關節炎要及早確診、持續治療，才能減少關節破壞、維持生活功能。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'人數引自健保署統計並標明時點，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊、治療、日常三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['健保署統計表月份']},
    decision_points:[DP_COUNT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'類風濕性關節炎', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'類風濕性關節炎是自體免疫疾病，不是老化', primary_visual:'5.5 萬人', secondary_message:'晨僵、對稱性關節腫痛要及早就醫', action_priority:'風濕免疫科確診、持續治療'},
    headline_hook:'早上手指僵硬腫痛？', headline_main:'認識類風濕性關節炎', title_accent:'類風濕性關節炎',
    primary_stat:{kicker:'115 年 9 月・重大傷病', value:'約 5.5 萬人', label:'類風濕性關節炎重大傷病證明', note:'健保署統計：5萬4,787人'},
    secondary_stats:[
      {value:'30–50 歲', label:'好發年齡（學會說法）'},
      {value:'女性較多', label:'好發於中年女性'}
    ],
    knowledge_title:'4 個警訊',
    knowledge_cards:[
      {label:'晨間僵硬', lines:['起床後關節僵硬，活動後緩解']},
      {label:'對稱腫痛', lines:['兩側手指、手腕小關節同時腫痛']},
      {label:'全身症狀', lines:['疲倦、輕微發燒、體重下降']},
      {label:'關節變形', lines:['長期未控制可能變形、受限']}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'醫', text:'找風濕免疫科確診'},
      {key:'治', text:'依醫囑規律用藥，勿自行停藥'},
      {key:'動', text:'在指導下維持關節活動與肌力'},
      {key:'戒', text:'戒菸、維持理想體重'}
    ],
    carousel_suggestion:{reason:'若想把警訊、治療與日常照顧分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'不是老化', headline_main:'類風濕性關節炎 4 個警訊'},
      {layout_type:'data', headline_hook:'重大傷病', headline_main:'約 5.5 萬人領有證明'},
      {layout_type:'action', headline_hook:'日常照顧', headline_main:'保護關節 4 件事'}]},
    hashtags:['類風濕性關節炎','自體免疫疾病','關節腫痛','風濕免疫科'],
    sources:['衛生福利部中央健康保險署','中華民國風濕病醫學會（媒體受訪）'],
    illustration_category:'bones-joints',
    illustration:{topic:'類風濕性關節炎', audience:'中年女性與家人', scene:'一位中年女性早晨坐在床邊輕揉手指關節，桌上放著回診提醒卡',
      emotion:'察覺不適、願意就醫', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged woman sitting on the edge of her bed in the morning gently rubbing her stiff finger joints, a clinic appointment card on the bedside table, calm mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：重大傷病證明5萬4,787人（健保署115年9月）','好發年齡取自風濕病醫學會理事長2021年受訪'],
      layout_reason:'選 data：重大傷病人數當主角，好發年齡與族群在右側，下方左列 4 個警訊、右列 4 個行動。',
      tone:'專業易懂', tone_reason:'區分免疫性關節炎與退化，鼓勵及早就醫。',
      to_verify:['好發年齡為2021年受訪說法']},
    decision_points:[Object.assign({}, DP_COUNT, {current:'約 5.5 萬人（重大傷病證明，115 年 9 月）'})],
    content_check_note:'人數引自健保署統計並標明時點，好發年齡標明為學會說法，未使用療效保證用語，未涉及具體藥品或商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'類風濕性關節炎',
    collect:{
      summary:'類風濕性關節炎是常見的自體免疫關節疾病，屬健保重大傷病；2026年病友團體呼籲放寬進階藥物給付、健保署審議中，「早期辨識、持續治療、保護關節功能」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約5.5萬人領有重大傷病證明：依健保署重大傷病統計，截至115年9月領有類風濕性關節炎重大傷病證明者5萬4,787人（未申請證明的病人不在其中）。',tag:'官方統計',source:{name:'衛生福利部中央健康保險署：全民健康保險重大傷病各疾病別有效領證統計表（115年9月）',url:NHI}},
        {item:'年度趨勢方向',desc:'全台患者約15萬人：公視2026年3月報導估計全台類風濕性關節炎患者約15萬人，病友團體並反映長期用藥的副作用負擔（報導未註明人數統計來源）。',tag:'市場觀察',source:{name:'公視新聞網：類風溼性關節炎無法根治 病團籲放寬健保給付進階藥',url:'https://news.pts.org.tw/article/800136'}},
        {item:'政策動向',desc:'健保署已召開1次專家會議審議放寬進階藥給付：病友團體2025年提出放寬生物製劑等進階藥物給付條件的建議，健保署2026年3月表示已完成第1次專家會議，目前仍在審議、尚無時程。',tag:'市場觀察',source:{name:'公視新聞網：類風溼性關節炎無法根治 病團籲放寬健保給付進階藥',url:'https://news.pts.org.tw/article/800136'}},
        {item:'好發族群年齡層',desc:'好發於30至50歲中年女性：中華民國風濕病醫學會理事長2021年受訪指出，類風濕性關節炎好發於30至50歲中年女性，未及早治療者可能在發病後2年內出現關節損壞。',tag:'市場觀察',source:{name:'NOWnews：10/12世界關節炎日 醫盼放寬生物製劑健保給付條件',url:'https://www.nownews.com/news/5408821'}}
      ],
      product_view:['機會：類風濕性關節炎屬健保重大傷病，長期用藥與可能的關節失能，適合連結醫療與失能保障的說明。','機會：好發於30至50歲女性，正值工作與家庭責任高峰，可結合女性保障規劃溝通。','風險：避免暗示特定藥物療效或保證理賠；自體免疫疾病的核保與理賠說明須依條款如實揭露。'],
      marketing_view:['機會：每年10月12日世界關節炎日是固定溝通檔期，可用「晨僵自我檢查」做互動內容。','機會：健保進階藥給付審議是2026年的病友議題，可做中立的衛教整理。','風險：避免把類風濕性關節炎與退化性關節炎混為一談，也避免推薦保健食品。'],
      alert_level:'low',
      alert_reason:'屬長期慢性疾病議題，健保給付審議尚無時程；適合在世界關節炎日（10月12日）前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('中華民國風濕病醫學會理事長曾於2021年受訪指出，此病好發於30至50歲女性','SOURCE_EVIDENCE','expert_opinion_as_fact',
          '好發年齡已註明出處與年份，但屬單一受訪說法，並非統計資料；文中語氣接近定論，讀者可能以為30歲以下或50歲以上不會發病。','low','no',
          null,'no','clarify','說法本身與臨床常識一致，屬表達強度問題。',
          '中華民國風濕病醫學會理事長曾於2021年受訪指出，此病較常見於30至50歲女性，但其他年齡與男性也可能發生'),
        F('領有類風濕性關節炎重大傷病證明者有5萬4,787人','MEDICAL_INTERPRETATION','certificate_holders_not_prevalence',
          '這是領有重大傷病證明的人數，未申請證明的病人不在其中，讀者可能當成全國患者總數。','medium','no',
          null,'no','clarify','數字正確，屬統計口徑說明。',
          '領有類風濕性關節炎重大傷病證明者有5萬4,787人（未申請證明的病人不在其中）',
          ['有5萬4,787人領有類風濕性關節炎的重大傷病證明','領有類風濕性關節炎重大傷病證明者5萬4,787人']),
        F('多數病友能把發炎控制下來','MEDICAL_INTERPRETATION','unsupported_generalization',
          '「多數」沒有附上研究或統計依據，可能讓讀者對治療效果有過高預期。','medium','yes',
          '國內類風濕性關節炎治療達緩解或低疾病活動度比例的研究。','no','soften','臨床上治療目標確實如此，但比例未查證。',
          '許多病友能逐步把發炎控制下來'),
        F('戒菸、維持理想體重','MEDICAL_INTERPRETATION','missing_rationale',
          '只列出做法、未說明理由，讀者不知道吸菸與類風濕性關節炎有關。','low','no',
          null,'no','clarify','可補一句理由。',
          '戒菸（吸菸是已知的危險因子之一）、維持理想體重',
          ['戒菸、維持體重'])
      ],
      card:[
        F('類風濕性關節炎重大傷病證明','MEDICAL_INTERPRETATION','certificate_holders_not_prevalence',
          '主數字只計入領有重大傷病證明者，卡面讀者可能誤讀為全國患者總數。','medium','no',
          null,'no','clarify','屬口徑標示問題，不代表數據錯誤。',
          '領有重大傷病證明者（不含未申請者）'),
        F('好發年齡（學會說法）','SOURCE_EVIDENCE','source_year_unstated',
          '卡面未標示這是2021年的受訪說法，讀者無法判斷出處時點。','low','no',
          null,'no','clarify','補年份即可。',
          '好發年齡（學會 2021 年說法）')
      ]
    },
    title_alts:[
      '類風濕性關節炎：早上關節僵硬別輕忽，及早治療護關節',
      '早上起床手指僵硬、腫痛？可能是類風濕性關節炎',
      '不是老化！類風濕性關節炎4個警訊與治療重點'
    ],
    card_title_alts:[
      ['早上手指僵硬腫痛？','認識類風濕性關節炎'],
      ['不是老化','類風濕性關節炎 4 個警訊'],
      ['及早治療護關節','類風濕性關節炎照顧重點']
    ],
    data_addon:[
      '健保署重大傷病統計（115年9月）：類風濕性關節炎重大傷病證明5萬4,787人。',
      '同表全身性紅斑性狼瘡2萬6,115人、全身性硬化症2,681人，同屬自體免疫重大傷病。',
      '健保署2026年3月表示，進階藥物給付放寬已召開第1次專家會議，仍在審議中。'
    ],
    cta:'如果早上手指僵硬、兩側小關節同時腫痛超過幾週，這個月就預約一次風濕免疫科門診。'
  });
})();
