/* v6 示範主題：致癌物質分級（B2 癌症）
   查證日期：2026-11-21。數據來源：IARC Monographs〈Agents Classified by the IARC Monographs, Volumes 1–142〉（2026-10-30 更新，各組數量）、
   IARC Monographs Preamble（2019修訂：Group 1 定義、「strong 指證據強度而非效力」）、國健署2015-10-31加工肉品與紅肉新聞稿、國健署2021-03-23檳榔新聞稿。
   參考方向：健康智庫〈致癌物質分級〉2024/08。 */
(function(){
  const REFS = [
    {title:'Agents Classified by the IARC Monographs, Volumes 1–142',source:'國際癌症研究機構（IARC）',url:'https://monographs.iarc.who.int/agents-classified-by-the-iarc/'},
    {title:'Preamble to the IARC Monographs（2019修訂）',source:'國際癌症研究機構（IARC）',url:'https://monographs.iarc.who.int/wp-content/uploads/2019/07/Preamble-2019.pdf'},
    {title:'會致癌！國人肉食族多，國健署呼籲：少吃、趕快做大腸癌篩檢！',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-20041-1.html'},
    {title:'檳榔是一級致癌物 拒檳三招「麥哺、麥揪、麥請」',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-2704-58752-1.html'}
  ];
  const TABLE = {headers:['IARC分組','意思','項目數（2026年10月）'], rows:[
    ['第1組','對人類致癌（Carcinogenic）','135項'],
    ['第2A組','很可能對人類致癌（Probably）','98項'],
    ['第2B組','可能對人類致癌（Possibly）','329項'],
    ['第3組','無法歸類是否對人類致癌','498項']
  ]};
  const TAGS = ['致癌物','IARC','加工肉品','癌症預防','食品安全'];

  const DP_MEAN = {id:'dp-iarc-mean', type:'tone', title:'「一級致癌物」要怎麼說才不誤導',
    desc:'IARC分組反映的是「致癌證據有多充分」，不是「致癌威力有多強」或「吃多少就會得癌」。IARC前言明言其判斷中的「strong」指證據強度而非效力。AI 在文中避免把同組物質寫成「一樣危險」。',
    current:'分組＝證據強度，不等於危險程度',
    options:[{label:'維持目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'證據強度', value:'IARC分組的意義', note:'IARC Preamble（目前採用）'},
      {label:'危險程度', value:'常見誤解', note:'例如「加工肉品和菸一樣毒」的說法'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'「一級致癌物」是什麼意思？看懂IARC致癌物4組分級',
    update_date:'2026/11/21',
    intro:'世界衛生組織轄下的國際癌症研究機構（IARC）將物質依「對人類致癌證據的強弱」分為4組。依IARC官網2026年10月更新的第1至142冊評估結果，第1組（對人類致癌）共135項、第2A組（很可能致癌）98項、第2B組（可能致癌）329項、第3組（無法歸類）498項。分組代表的是證據是否充分，而不是致癌威力的大小。',
    sections:[
      {heading:'IARC致癌物4組分級',format:'table',table:TABLE},
      {heading:'看懂分級的3個重點',format:'bullets',items:[
        'IARC前言指出，只要對人類致癌有「充分證據」，就歸入第1組；判斷中的「strong」指證據強度，而非致癌效力。',
        '同一組的物質不代表危險程度相同，實際風險還要看暴露量與暴露時間。',
        'IARC提醒，尚未被分類的物質，不能推論為不致癌或安全。'
      ]},
      {heading:'生活中的例子（國健署說明）',format:'bullets',items:[
        '加工肉品（培根、香腸、火腿等）為第1組，紅肉為第2A組；國健署引述IARC，每天吃50克加工肉品增加18%大腸癌風險，每天吃100克紅肉增加17%。',
        '檳榔子為第1組致癌物，即使不加添加物也會致癌。',
        '國健署建議少吃加工肉品與紅肉，以魚肉、瘦禽肉等白肉替代，並定期接受癌症篩檢。'
      ]}
    ],
    think_tank_view:'看到「一級致癌物」不必恐慌，也不該輕忽。分級告訴我們「證據有多確定」，真正影響風險的是吃多少、吃多久。把加工肉品從每天的餐桌上請下來、改成偶爾吃，就是把知識變成行動的第一步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'分組數量與定義引自IARC官網與前言並標明更新日期，生活例子引自國健署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['IARC各組數量（2026-10-30更新）','IARC Preamble分組定義','國健署加工肉品（2015）與檳榔（2021）說明'],
      layout_reason:'先用表格呈現4組分級與數量，再說明如何正確解讀，最後用國健署說明的生活例子收尾。',
      tone:'專業易懂', tone_reason:'需破除常見誤解，避免恐慌。',
      to_verify:['加工肉品風險數字引自國健署2015年新聞稿']},
    decision_points:[DP_MEAN]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'香腸火腿是一級致癌物，跟菸一樣毒嗎？看懂致癌物分級',
    update_date:'2026/11/21',
    intro:'新聞常說「某某是一級致癌物」，聽了好緊張。其實國際癌症研究機構（IARC）的分級，是看「證據夠不夠確定」，而不是看「有多毒」。同樣是第1組，不代表危險程度一樣，實際風險還是要看吃多少、吃多久。',
    sections:[
      {heading:'致癌物分成4組',format:'table',table:TABLE},
      {heading:'分級怎麼看才對？',format:'bullets',items:[
        '第1組代表「確定會讓人致癌」的證據很充分。',
        '同一組不代表一樣危險，吃一點和天天吃差很多。',
        '還沒被分類的東西，也不代表就一定安全。'
      ]},
      {heading:'生活中可以怎麼做',format:'bullets',items:[
        '香腸、培根、火腿偶爾吃就好，國健署建議少吃。',
        '紅肉（豬、牛、羊）少吃一點，改吃魚和雞肉。',
        '檳榔是第1組致癌物，能不碰就不碰。'
      ]}
    ],
    think_tank_view:'下次看到「一級致癌物」的新聞，先別急著恐慌，想想「我多久吃一次？吃多少？」把高風險的食物變成偶爾吃，就已經在幫自己降低風險了。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料引自IARC與國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以常見的新聞疑問切入。', tone:'生活親切', tone_reason:'破除誤解、降低恐慌。', to_verify:['分組數量會隨IARC新評估變動']},
    decision_points:[DP_MEAN]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'致癌物分級：看證據強度，不是毒性大小',
    update_date:'2026/11/21',
    intro:'IARC將物質分為4組：第1組135項、2A組98項、2B組329項、3組498項（2026年10月）。分級代表證據強度。',
    sections:[
      {heading:'4組分級',format:'table',table:TABLE},
      {heading:'解讀',format:'bullets',items:[
        '同組不代表同樣危險。',
        '風險取決於暴露量與時間。'
      ]},
      {heading:'例子',format:'bullets',items:[
        '加工肉品、檳榔為第1組。',
        '紅肉為第2A組。'
      ]}
    ],
    think_tank_view:'看懂分級的意義，才能理性減少高風險暴露。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料引自IARC與國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為分級、解讀、例子三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['數量會變動']},
    decision_points:[DP_MEAN]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'致癌物質分級', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'分級看的是證據強度，不是毒性大小', primary_visual:'135 項', secondary_message:'同組不代表同樣危險', action_priority:'少吃加工肉品、遠離檳榔'},
    headline_hook:'一級致癌物是什麼？', headline_main:'看懂 IARC 4 組分級', title_accent:'4 組分級',
    hero_message:'看證據，不是看毒性', hero_support:'IARC 分級反映對人類致癌的證據強弱',
    knowledge_title:'4 組分級', knowledge_note:'同一組**不代表一樣危險**，要看暴露量與時間',
    knowledge_cards:[
      {label:'第 1 組', icon:'shield', lines:['對人類致癌','135 項']},
      {label:'第 2A 組', icon:'search', lines:['很可能致癌','98 項']},
      {label:'第 2B 組', icon:'search', lines:['可能致癌','329 項']},
      {label:'第 3 組', icon:'check', lines:['無法歸類','498 項']}
    ],
    primary_stat:{value:'135 項', label:'IARC 第 1 組致癌物', note:'IARC 第 1–142 冊評估｜2026 年 10 月更新'},
    secondary_stats:[
      {value:'+18%', label:'每天 50 克加工肉品，大腸癌風險（國健署引述）'},
      {value:'第 1 組', label:'檳榔子'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'少', text:'香腸、培根、火腿改成偶爾吃'},
      {key:'換', text:'紅肉以魚肉、瘦禽肉替代'},
      {key:'拒', text:'遠離檳榔'},
      {key:'篩', text:'符合資格定期做癌症篩檢'}
    ],
    carousel_suggestion:{reason:'若想把分級、解讀與生活例子分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'一級致癌物是什麼？', headline_main:'看懂 IARC 4 組分級'},
      {layout_type:'knowledge', headline_hook:'常見誤解', headline_main:'同組不代表一樣毒'},
      {layout_type:'action', headline_hook:'生活中', headline_main:'少加工肉、遠離檳榔'}]},
    hashtags:['致癌物','IARC','加工肉品','癌症預防'],
    sources:['國際癌症研究機構（IARC）','衛生福利部國民健康署'],
    illustration_category:'nutrition',
    illustration:{topic:'看懂致癌物分級', audience:'一般民眾', scene:'一家人在超市看食品標示，購物籃裡多是蔬菜與魚肉，加工肉品放回架上',
      emotion:'理性、輕鬆', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A family reading food labels in a supermarket, their basket full of vegetables and fish while putting processed meat back on the shelf, rational and relaxed mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['IARC各組數量與定義','國健署生活例子'],
      layout_reason:'核心是看懂分級，選 knowledge：4 組分級卡當主角，第 1 組數量當主數字。',
      tone:'專業易懂', tone_reason:'破除誤解。',
      to_verify:['數量隨IARC新評估變動']},
    decision_points:[Object.assign({}, DP_MEAN, {current:'分級＝證據強度'})],
    content_check_note:'分組資料引自IARC官網並標明更新日期，生活例子引自國健署，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'致癌物質分級',
    collect:{
      summary:'IARC依致癌證據強弱將物質分為4組，2026年10月更新時第1組共135項；分級代表證據是否充分而非毒性大小，「看懂一級致癌物新聞、理性減少暴露」是適合破除迷思的長期衛教議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'135項第1組致癌物：依IARC第1至142冊評估（2026年10月30日更新），第2A組98項、第2B組329項、第3組498項。',tag:'官方統計',source:{name:'IARC：Agents Classified by the IARC Monographs',url:'https://monographs.iarc.who.int/agents-classified-by-the-iarc/'}},
        {item:'年度趨勢方向',desc:'4組分級依證據強度而定：IARC前言指出，只要對人類致癌有充分證據即歸入第1組，判斷中的「strong」指證據強度而非效力。',tag:'官方統計',source:{name:'IARC：Preamble to the IARC Monographs（2019）',url:'https://monographs.iarc.who.int/wp-content/uploads/2019/07/Preamble-2019.pdf'}},
        {item:'政策動向',desc:'每天50克加工肉品增加18%大腸癌風險：國健署2015年引述IARC，加工肉品為第1組、紅肉為第2A組，每天100克紅肉增加17%風險，呼籲少吃並定期篩檢。',tag:'官方統計',source:{name:'衛生福利部國民健康署：會致癌！國人肉食族多',url:'https://mohw.gov.tw/cp-16-20041-1.html'}},
        {item:'好發族群年齡層',desc:'檳榔子為第1組致癌物：國健署2021年指出即使不加添加物也會致癌，並推廣拒檳三招「麥哺、麥揪、麥請」。',tag:'官方統計',source:{name:'衛生福利部國民健康署：檳榔是一級致癌物',url:'https://mohw.gov.tw/cp-2704-58752-1.html'}}
      ],
      product_view:['機會：致癌物知識適合作為癌症保障溝通的前端衛教內容。','機會：可結合飲食與生活習慣管理服務。','風險：避免以「一級致癌物」製造恐慌促銷，或點名特定品牌產品。'],
      marketing_view:['機會：每當新聞出現「一級致癌物」話題時，是破除迷思的時效溝通點。','機會：「同組不代表一樣毒」是好懂的關鍵訊息。','風險：避免誇大風險或淡化風險，維持平衡。'],
      alert_level:'low',
      alert_reason:'屬長期知識型衛教，可在相關新聞出現時搭配溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('每天吃50克加工肉品增加18%大腸癌風險','CURRENCY_TIMELINESS','old_statement',
          '數字引自國健署2015年新聞稿，文中未標年份；讀者可能以為是最新研究結論。','low','no',
          null,'no','clarify','數字仍為IARC 2015年評估結論。',
          '每天吃50克加工肉品增加18%大腸癌風險（國健署2015年引述IARC）'),
        F('同一組的物質不代表危險程度相同','MEDICAL_INTERPRETATION','missing_example',
          '方向正確，但沒有舉例說明，讀者仍可能誤解；可補充「風險取決於暴露量」的具體說明。','low','no',
          null,'no','clarify','屬補充說明。',
          '同一組的物質不代表危險程度相同，例如偶爾吃與天天吃的風險差異很大',['同組不代表同樣危險']),
        F('香腸火腿是一級致癌物，跟菸一樣毒嗎？','BRAND_TONE_CONSISTENCY','clickbait_title',
          '標題以問句連結菸品，雖內文有澄清，但分享時只看標題可能強化誤解。','low','no',
          null,'no','revise','屬標題語氣調整。',
          '香腸火腿是一級致癌物，代表什麼？看懂致癌物分級'),
        F('還沒被分類的東西，也不代表就一定安全','SOURCE_EVIDENCE','paraphrase_check',
          '改寫自IARC說明「未分類者不能推論為不致癌或安全」，語意一致但未標出處。','low','no',
          null,'no','clarify','屬出處標示。',
          '還沒被IARC分類的東西，也不代表就一定安全')
      ],
      card:[
        F('每天 50 克加工肉品，大腸癌風險（國健署引述）','CURRENCY_TIMELINESS','old_statement',
          '次數字出自2015年，卡面未標年份。','low','no',
          null,'no','clarify','屬年份標示。',
          '每天 50 克加工肉品，大腸癌風險（國健署 2015）'),
        F('IARC 第 1 組致癌物','MEDICAL_INTERPRETATION','count_misread',
          '主數字「135 項」可能被理解為日常生活中有135種東西會致癌；其中包含職業暴露、藥物、感染等，並非都是一般人會接觸的食物或用品。','low','no',
          null,'no','clarify','數字正確，屬口徑說明。',
          'IARC 第 1 組（含職業、感染、生活習慣等各類因子）')
      ]
    },
    title_alts:[
      '「一級致癌物」是什麼意思？看懂IARC致癌物4組分級',
      '香腸火腿是一級致癌物，跟菸一樣毒嗎？看懂致癌物分級',
      '致癌物分級看證據不看毒性：生活中怎麼理性因應'
    ],
    card_title_alts:[
      ['一級致癌物是什麼？','看懂 IARC 4 組分級'],
      ['看證據，不是看毒性','致癌物分級'],
      ['同組不代表一樣毒','理性看待致癌物']
    ],
    data_addon:[
      'IARC：第2B組「可能致癌」共329項，是4組中數量第二多的類別。',
      '國健署：加工肉品指以煙燻、鹽漬或加入防腐劑或化學物質處理過的肉製品。',
      '國健署：紅肉經燻烤或高溫烹調易產生有害物質，建議以汆燙取代油炸或燒烤。'
    ],
    cta:'這週檢視一下家裡的冰箱，把香腸、培根、火腿從「常備菜」改成「偶爾吃」。'
  });
})();
