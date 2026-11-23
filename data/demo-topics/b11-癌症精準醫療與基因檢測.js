/* v6 示範主題：癌症精準醫療與基因檢測（B11 第二輪新主題）
   查證日期：2026-11-23。數據來源：衛福部新聞稿〈健保5月1日起給付癌症精準醫療「實體癌/血癌次世代基因定序檢測(NGS)」〉（113-04-19）、衛福部114年死因統計。
   參考方向：判定清單第401、493、648列（NGS、標靶與免疫治療費用文章）。只取架構，數據重新查證。 */
(function(){
  const REFS = [
    {title:'健保5月1日起給付癌症精準醫療「實體癌/血癌次世代基因定序檢測(NGS)」2萬多名癌友受惠',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-78416-1.html'},
    {title:'114年死因統計摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'全民健康保險法',source:'全國法規資料庫',url:'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0060001'}
  ];
  const TABLE = {headers:['健保NGS給付','內容（113年5月1日起）'], rows:[
    ['BRCA基因檢測','支付1萬點'],
    ['小套組（100個基因以下）','支付2萬點'],
    ['大套組（超過100個基因）','支付3萬點'],
    ['給付次數','每人每癌別終生給付一次'],
    ['可申報院所','區域級以上或癌症診療品質認證醫院，須為衛福部核定實驗室開發檢測（LDTs）表列機構，並設分子腫瘤委員會（MTB）']
  ]};
  const TAGS = ['精準醫療','基因檢測','NGS','標靶治療','癌症治療'];

  const DP_TYPES = {id:'dp-ngs-types', type:'data_scope', title:'「幾種癌別」有不同算法',
    desc:'衛福部新聞稿寫實體腫瘤14大類可用單基因檢測或NGS挑選標靶藥物，其中實體瘤9癌、血液腫瘤3癌可用NGS套組；坊間報導常寫「19種癌別」。AI 依新聞稿區分「NGS套組」與「單基因檢測」，未採用合併數字。',
    current:'實體瘤9癌、血液腫瘤3癌可申請NGS套組（衛福部新聞稿）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'9＋3癌', value:'NGS套組', note:'衛福部113-04-19新聞稿（目前採用）'},
      {label:'19種', value:'媒體合併數字', note:'含單基因檢測癌別，計算方式未說明'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'癌症精準醫療怎麼走？健保基因檢測的給付條件一次看',
    update_date:'2026/11/23',
    intro:'精準醫療是先檢測腫瘤的基因變異，再依結果選擇合適的標靶藥物或治療。依衛福部114年死因統計，惡性腫瘤死亡54,838人，占死亡人數27.5%，長年居死因首位。健保自113年5月1日起給付次世代基因定序（NGS），採定額給付：BRCA檢測1萬點、小套組2萬點、大套組3萬點，每人每癌別終生一次，健保署預估每年約2萬多名癌症病人受惠。',
    sections:[
      {heading:'健保NGS給付怎麼運作',format:'table',table:TABLE},
      {heading:'哪些癌別可以做',format:'bullets',items:[
        '實體腫瘤可用NGS套組的有9癌：非小細胞肺癌、三陰性乳癌、卵巢癌（含輸卵管癌、原發性腹膜癌）、攝護腺癌、胰臟癌、NTRK基因融合實體腫瘤、肝內膽管癌、甲狀腺癌、甲狀腺髓質癌。',
        '大腸直腸癌、胃癌、泌尿道上皮癌、黑色素瘤、腸胃道間質瘤採單基因檢測。',
        '血液腫瘤中，急性骨髓性白血病、高風險骨髓化生不良症候群、急性淋巴芽細胞白血病新增NGS套組給付。'
      ]},
      {heading:'檢測之後要注意什麼',format:'bullets',items:[
        '找到基因變異不代表一定有對應藥物；藥物是否健保給付，還要符合各藥品的給付規定。',
        '不符給付規定的標靶或免疫治療需自費，開始治療前請向醫師確認費用與療程。',
        '檢測結果會上傳健保署，用於提升品質與評估療效。'
      ]}
    ],
    think_tank_view:'基因檢測納入健保，讓更多癌友能以較低負擔找出適合的標靶藥物；但「檢測有給付」和「藥物有給付」是兩件事。與醫師討論檢測時，也一併問清楚後續藥物的給付條件與可能的自費金額，才能做好治療與財務的準備。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'NGS給付內容引自衛福部新聞稿並標明生效日期，死亡人數引自114年死因統計，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['NGS定額給付、終生一次、院所資格取自衛福部113-04-19新聞稿','惡性腫瘤死亡54,838人取自114年死因統計摘要表'],
      layout_reason:'先用表格說明給付怎麼運作，再列癌別，最後提醒檢測與藥物給付是兩回事。',
      tone:'專業易懂', tone_reason:'給付條件需要精確。',
      to_verify:['「每年約2萬多名受惠」為健保署開辦前預估，實際申報人數待查','給付癌別是否已再擴增']},
    decision_points:[DP_TYPES]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'得了癌症要驗基因嗎？健保給付的精準醫療白話說',
    update_date:'2026/11/23',
    intro:'癌症是國人死因第一名，114年有54,838人因此過世。現在很多癌症治療會先「驗基因」，看腫瘤有沒有特定變異，再挑適合的標靶藥。好消息是，健保從113年5月1日起開始給付次世代基因定序（NGS），依檢測大小給1萬到3萬點，每個人每種癌症一輩子給付一次。',
    sections:[
      {heading:'健保怎麼給付',format:'table',table:TABLE},
      {heading:'哪些癌症適用？',format:'bullets',items:[
        '可以做NGS套組的實體癌有9種，像非小細胞肺癌、三陰性乳癌、卵巢癌、攝護腺癌、胰臟癌等。',
        '大腸直腸癌、胃癌等則是做單一基因檢測。',
        '血癌中的急性骨髓性白血病、高風險骨髓化生不良症候群、急性淋巴芽細胞白血病也可以做。'
      ]},
      {heading:'驗完之後',format:'bullets',items:[
        '驗到變異，不一定就有藥可用。',
        '標靶或免疫藥物要符合健保規定才給付，不符合就得自費，記得先問醫師大概多少錢。',
        '可以請醫師說明報告上每個結果代表什麼。'
      ]}
    ],
    think_tank_view:'驗基因有健保幫忙，但後面的藥不一定都有給付。陪家人看診時，可以一起問：驗出來的結果有哪些藥、健保有沒有給付、自費大概多少，心裡比較有底。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家人罹癌的情境帶出給付方式、適用癌別與後續費用。', tone:'生活親切', tone_reason:'給癌友家屬閱讀。', to_verify:['給付癌別是否已再擴增']},
    decision_points:[DP_TYPES]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'癌症基因檢測：健保給付重點',
    update_date:'2026/11/23',
    intro:'健保自113年5月1日起給付NGS，依檢測大小1萬到3萬點，每人每癌別終生一次。114年惡性腫瘤死亡54,838人。',
    sections:[
      {heading:'給付方式',format:'table',table:TABLE},
      {heading:'適用癌別',format:'bullets',items:[
        '實體瘤9癌可做NGS套組，另有癌別採單基因檢測。',
        '血液腫瘤3癌新增NGS套組。'
      ]},
      {heading:'注意',format:'bullets',items:[
        '檢測給付不等於藥物給付。',
        '不符規定的標靶或免疫藥物需自費。'
      ]}
    ],
    think_tank_view:'檢測有健保，藥物另有給付規定；治療前先問清楚費用。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為給付方式、適用癌別、注意三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['給付癌別是否已再擴增']},
    decision_points:[DP_TYPES]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'癌症精準醫療與基因檢測', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'健保給付癌症基因檢測，每人每癌別終生一次', primary_visual:'1–3 萬點', secondary_message:'檢測給付不等於藥物給付', action_priority:'問清楚檢測與藥物費用'},
    headline_hook:'癌症治療先驗基因', headline_main:'健保 NGS 給付重點', title_accent:'NGS 給付',
    hero_message:'每人每癌別終生 1 次', hero_support:'健保給付次世代基因定序（113 年 5 月起）',
    knowledge_title:'3 種定額給付', knowledge_note:'驗到變異**不一定有藥**，藥物另有給付規定',
    knowledge_cards:[
      {label:'BRCA 檢測', icon:'flask', lines:['支付 1 萬點','乳癌、卵巢癌等適用']},
      {label:'小套組', icon:'search', lines:['100 個基因以下','支付 2 萬點']},
      {label:'大套組', icon:'report', lines:['超過 100 個基因','支付 3 萬點']}
    ],
    primary_stat:{value:'約 5.5 萬人', label:'114 年惡性腫瘤死亡人數', note:'衛福部死因統計：54,838 人｜居死因第 1 位'},
    secondary_stats:[
      {value:'9＋3 癌', label:'實體瘤與血癌可做套組'},
      {value:'2 萬多人', label:'健保署預估每年受惠'}
    ],
    action_title:'與醫師討論時',
    action_cards:[
      {key:'問', text:'我的癌別適合做哪種基因檢測'},
      {key:'確', text:'確認院所可申報健保 NGS'},
      {key:'看', text:'請醫師說明報告與可用藥物'},
      {key:'算', text:'問清楚藥物給付條件與自費金額'}
    ],
    carousel_suggestion:{reason:'若想把給付方式、癌別與藥物費用分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'健保 NGS', headline_main:'3 種定額給付'},
      {layout_type:'knowledge', headline_hook:'哪些癌別適用', headline_main:'實體瘤 9 癌、血癌 3 癌'},
      {layout_type:'action', headline_hook:'驗完之後', headline_main:'藥物費用先問清楚'}]},
    hashtags:['精準醫療','基因檢測','NGS','癌症治療'],
    sources:['衛生福利部','衛生福利部中央健康保險署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'癌症基因檢測', audience:'癌友與家屬', scene:'醫師在診間用平板向病人和家屬說明基因檢測報告，桌上有檢體管',
      emotion:'專注、有希望', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A doctor explaining a genetic test report on a tablet to a patient and family member in a clinic, sample tubes on the desk, focused and hopeful mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['NGS定額給付與終生一次取自衛福部113-04-19新聞稿','惡性腫瘤死亡54,838人取自114年死因統計'],
      layout_reason:'核心是「給付怎麼運作」，選 knowledge：3 種定額給付當主卡，死亡人數放背景，最後給看診時可問的 4 件事。',
      tone:'專業易懂', tone_reason:'制度說明需要精確。',
      to_verify:['「2 萬多人」為開辦前預估']},
    decision_points:[Object.assign({}, DP_TYPES, {current:'9＋3 癌｜實體瘤與血癌可做套組'})],
    content_check_note:'給付內容引自衛福部並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'癌症精準醫療與基因檢測',
    collect:{
      summary:'健保自113年5月1日起給付次世代基因定序（NGS），以1萬到3萬點定額給付、每人每癌別終生一次；但後續標靶與免疫藥物仍需符合各自給付規定，不符者需自費，是癌症治療費用溝通的重點議題。',
      objective_data:[
        {item:'政策動向',desc:'每年約2萬多名癌友受惠：衛福部公告NGS自113年5月1日起納入健保，健保署預估每年約2萬多名癌症病人受惠、挹注經費約3億元。',tag:'推估',source:{name:'衛生福利部：健保5月1日起給付癌症精準醫療NGS',url:'https://www.mohw.gov.tw/cp-16-78416-1.html'}},
        {item:'政策動向',desc:'大套組支付3萬點：健保採3種定額給付，BRCA檢測1萬點、100個基因以下小套組2萬點、超過100個基因大套組3萬點，每人每癌別終生給付一次。',tag:'官方統計',source:{name:'衛生福利部：健保5月1日起給付癌症精準醫療NGS',url:'https://www.mohw.gov.tw/cp-16-78416-1.html'}},
        {item:'好發族群年齡層',desc:'實體瘤9癌可做NGS套組：包括非小細胞肺癌、三陰性乳癌、卵巢癌、攝護腺癌、胰臟癌等，血液腫瘤另有3癌新增套組給付，大腸直腸癌與胃癌等採單基因檢測。',tag:'官方統計',source:{name:'衛生福利部：健保5月1日起給付癌症精準醫療NGS',url:'https://www.mohw.gov.tw/cp-16-78416-1.html'}},
        {item:'盛行率／發生率',desc:'27.5%死亡人數為惡性腫瘤：114年惡性腫瘤死亡54,838人，長年居國人死因首位，是精準醫療需求的背景。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}}
      ],
      product_view:['機會：基因檢測有健保，但標靶與免疫藥物不符給付規定時需自費，可說明癌症保障與實支實付的定位。','機會：以「檢測給付 vs 藥物給付」協助保戶理解癌症治療費用結構。','風險：不可暗示基因檢測或特定藥物保證有效；不可誇大自費金額製造焦慮。'],
      marketing_view:['機會：癌友家屬是治療資訊的主要搜尋者，適合以「看診時可以問的4件事」切入。','機會：可與各癌別篩檢主題串連，從篩檢、確診到治療形成系列內容。','風險：給付癌別與條件會調整，引用時需標明生效日期。'],
      alert_level:'low',
      alert_reason:'屬長期健保給付制度，113年5月起實施；給付範圍可能逐步擴增，無急迫時效事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('健保署預估每年約2萬多名癌症病人受惠','SOURCE_EVIDENCE','estimate_as_fact',
          '此為健保署在開辦前（113年4月）的預估值，並非實際申報人數，文中應標明為「預估」與時間點。','medium','yes',
          '健保署NGS實際申報人數統計。','no','clarify','實際人數尚未查得公開統計。',
          '健保署於開辦前預估每年約2萬多名癌症病人受惠'),
        F('再依結果選擇合適的標靶藥物或治療','MEDICAL_INTERPRETATION','overstatement',
          '並非所有檢測結果都有對應的核准藥物，此句可能讓讀者以為檢測後必定能找到合適藥物。','low','no',
          null,'no','clarify','後段已提醒「不代表一定有對應藥物」。',
          '再依結果評估是否有合適的標靶藥物或治療'),
        F('每人每癌別終生給付一次','DATA_FACTUAL_ACCURACY','scope_condition_missing',
          '未說明各癌別另有適用條件（如期別、治療階段），讀者可能以為確診即可申請。','low','no',
          null,'no','clarify','詳細條件依健保支付標準。',
          '每人每癌別終生給付一次，並須符合各癌別的適用條件',
          ['每人每癌別終生一次']),
        F('長年居死因首位','TERMINOLOGY_LANGUAGE','scope_mismatch',
          '惡性腫瘤死亡數涵蓋所有癌症，並非都與精準醫療適用癌別相關，引用時應說明是背景數據。','low','no',
          null,'no','clarify','數字本身正確。',
          '長年居死因首位（為所有癌症合計）')
      ],
      card:[
        F('健保署預估每年受惠','SOURCE_EVIDENCE','estimate_as_fact',
          '「2 萬多人」為開辦前預估，卡面未標時間點，容易被當成實際人數。','low','no',
          null,'no','clarify','屬標示問題。',
          '健保署開辦前預估'),
        F('乳癌、卵巢癌等適用','DATA_FACTUAL_ACCURACY','scope_condition_missing',
          'BRCA 給付限三陰性乳癌、卵巢癌等特定癌別，寫「乳癌」可能讓讀者以為所有乳癌都適用。','medium','no',
          null,'no','clarify','需標明亞型。',
          '三陰性乳癌、卵巢癌等適用')
      ]
    },
    title_alts:[
      '癌症精準醫療怎麼走？健保基因檢測的給付條件一次看',
      '得了癌症要驗基因嗎？健保給付的精準醫療白話說',
      '健保NGS 1到3萬點：癌症基因檢測與藥物費用一次看'
    ],
    card_title_alts:[
      ['癌症治療先驗基因','健保 NGS 給付重點'],
      ['驗基因有健保','每人每癌別終生 1 次'],
      ['檢測≠藥物給付','精準醫療費用先問清楚']
    ],
    data_addon:[
      '可申報健保NGS的院所須為區域級以上或癌症診療品質認證醫院，並設分子腫瘤委員會（MTB）。',
      '檢測結果須上傳健保署，用於提升品質與評估療效。',
      '114年惡性腫瘤死亡54,838人，占全部死亡人數27.5%。'
    ],
    cta:'陪家人看診時，帶著「我的癌別適合哪種檢測、驗出來有沒有藥、藥物健保有沒有給付」三個問題問醫師。'
  });
})();
