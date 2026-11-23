/* v6 示範主題：鼻咽癌（B2 癌症）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計摘要表（男性主要癌症死亡原因）、
   健康醫療網／鏡週刊2026-11-18（台灣頭頸部腫瘤醫學會發布首部鼻咽癌治療共識：每年新增逾1400人、男性74.5%、2023年42.5%確診時為第四期）、
   TVBS 2026-03-18（耳鼻喉科醫師說明警訊與危險因子）。
   112年癌登附表未列鼻咽癌；死因摘要表僅男性前15大癌症列出鼻咽癌。新發人數與期別比例皆為醫學會說明，未註明原始資料來源。
   參考方向：健康智庫〈鼻咽癌〉（無原文，全數自行查證）。 */
(function(){
  const REFS = [
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'鼻咽癌逾4成確診已第四期！台灣首部治療共識 明訂用藥與手術評估',source:'健康醫療網／鏡週刊',url:'https://www.mirrormedia.mg/external/healthnews_70388'},
    {title:'以為是過敏鼻塞？醫揪鼻咽癌「4大初期徵兆」：耳朵悶悶的竟是癌',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/cancer/361717'}
  ];
  const TABLE = {headers:['警訊','常見表現'], rows:[
    ['頸部腫塊','最常見，脖子摸到不規則、無法移動的硬塊'],
    ['鼻部症狀','不明原因流鼻血、鼻涕帶血絲，或持續鼻塞'],
    ['耳朵悶塞','單側耳朵悶悶的、聽不清楚，捏鼻吹氣也無法改善']
  ]};
  const TAGS = ['鼻咽癌','頸部腫塊','耳鼻喉科','EB病毒','頭頸癌'];

  const DP_SRC = {id:'dp-npc-source', type:'data_scope', title:'鼻咽癌人數只有醫學會說法',
    desc:'鼻咽癌不在112年十大癌症附表，死因摘要表也只在男性列出（114年448人）。「每年新增逾1400人」「42.5%確診時為第四期」來自台灣頭頸部腫瘤醫學會記者會，媒體報導未註明原始資料來源。AI 以官方男性死亡人數當主數字，醫學會數字標為二手。',
    current:'114年男性鼻咽癌死亡448人（死因統計）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'448人', value:'114年男性死亡', note:'衛福部死因統計（目前採用）'},
      {label:'逾1400人', value:'每年新增', note:'台灣頭頸部腫瘤醫學會2026年11月記者會，未註明出處'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'鼻咽癌逾4成確診已晚期：頸部腫塊、耳悶、鼻涕帶血要警覺',
    update_date:'2026/11/20',
    intro:'鼻咽癌被稱為「華人好發癌」，位置隱密、早期症狀不明顯。台灣頭頸部腫瘤醫學會2026年11月指出，台灣每年新增逾1400名病人、男性占74.5%，好發於40至64歲，2023年有42.5%病人確診時已是第四期。依衛生福利部114年死因統計，男性鼻咽癌死亡448人，居男性癌症死因第12位。認得早期警訊、及早到耳鼻喉科檢查，是提早發現的關鍵。',
    sections:[
      {heading:'鼻咽癌3大警訊',format:'table',table:TABLE},
      {heading:'誰要特別注意',format:'bullets',items:[
        '耳鼻喉科醫師指出，有鼻咽癌家族史、曾感染EB病毒、愛吃醃製食品、長期吸菸或長期暴露甲醛環境者，風險較高。',
        '很多病人把鼻塞當成過敏，延誤就醫，確診時已是晚期。',
        '醫學會指出，第四期5年相對存活率為59%；治療後復發者近6成發生在2年內，需定期追蹤。'
      ]},
      {heading:'這樣做',format:'bullets',items:[
        '頸部摸到硬塊，或耳悶、鼻涕帶血絲持續未改善，應到耳鼻喉科檢查。',
        '有家族史者可與醫師討論檢查方式。',
        '戒菸、少吃醃製食品；確診後依醫師建議接受治療並定期回診。'
      ]}
    ],
    think_tank_view:'鼻咽癌的早期症狀很像過敏或感冒，最大的風險是「拖」。尤其是40到64歲的男性，若頸部摸到不會移動的硬塊、單側耳朵一直悶悶的，請直接找耳鼻喉科，用內視鏡看一眼就能安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'男性死亡人數引自衛福部114年死因統計並標明年份，新發人數、期別與存活率標明為醫學會說明，警訊與危險因子標明為醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['114年男性鼻咽癌死亡448人（死因統計）','醫學會2026年11月記者會（新發、期別、存活率）','醫師說明警訊與危險因子'],
      layout_reason:'先用表格列出3大警訊，再說明高風險族群與晚期比例，最後給就醫行動。',
      tone:'專業易懂', tone_reason:'早期症狀易被忽略，需要清楚警訊。',
      to_verify:['新發人數與42.5%需核對癌登年報原始資料','女性鼻咽癌死亡人數未在摘要表列出']},
    decision_points:[DP_SRC]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'以為是過敏鼻塞？耳朵悶、鼻涕帶血要看耳鼻喉科',
    update_date:'2026/11/20',
    intro:'鼻咽癌常被說是「華人好發的癌症」。醫學會指出，台灣每年新增1400多人，大多是40到64歲的男性，而且有4成多的人確診時已經是第四期。因為早期症狀很像過敏、感冒，很容易被忽略。',
    sections:[
      {heading:'這3個訊號要注意',format:'table',table:TABLE},
      {heading:'這些人要更小心',format:'bullets',items:[
        '家裡有人得過鼻咽癌、曾感染EB病毒。',
        '愛吃醃漬食物、長期抽菸。',
        '鼻塞一直以為是過敏，拖很久都沒看醫生。'
      ]},
      {heading:'可以這樣做',format:'bullets',items:[
        '脖子摸到硬硬、推不動的腫塊，馬上去耳鼻喉科。',
        '耳朵悶、鼻涕帶血一直沒好，也去檢查。',
        '菸戒掉、醃漬物少吃。'
      ]}
    ],
    think_tank_view:'爸爸常說「鼻子過敏啦」？如果單側耳朵一直悶、鼻涕還帶血絲，就陪他去耳鼻喉科看一下，內視鏡檢查很快。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據標明為醫學會說明，警訊標明為醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以「以為是過敏」的常見誤解切入。', tone:'生活親切', tone_reason:'給中壯年男性與家人閱讀。', to_verify:['新發人數為醫學會說明']},
    decision_points:[DP_SRC]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'鼻咽癌：頸部腫塊、耳悶、鼻涕帶血就醫',
    update_date:'2026/11/20',
    intro:'114年男性鼻咽癌死亡448人。醫學會指出逾4成確診時已是第四期，早期警訊易被誤認為過敏。',
    sections:[
      {heading:'3大警訊',format:'table',table:TABLE},
      {heading:'高風險',format:'bullets',items:[
        '家族史、EB病毒感染。',
        '醃製食品、吸菸。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '警訊持續看耳鼻喉科。',
        '戒菸、少吃醃製品。'
      ]}
    ],
    think_tank_view:'鼻咽癌早期像過敏，頸部腫塊與單側耳悶持續就該檢查。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為警訊、高風險、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['晚期比例為醫學會說明']},
    decision_points:[DP_SRC]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'鼻咽癌', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'鼻咽癌早期像過敏，逾 4 成確診已晚期', primary_visual:'42.5%', secondary_message:'頸部腫塊是最常見症狀', action_priority:'警訊持續看耳鼻喉科'},
    headline_hook:'以為是過敏鼻塞？', headline_main:'鼻咽癌 3 大警訊', title_accent:'3 大警訊',
    hero_message:'逾 4 成確診已晚期', hero_support:'2023 年 42.5% 病人確診時為第四期（醫學會說明）',
    knowledge_title:'3 大警訊', knowledge_note:'警訊持續，**到耳鼻喉科檢查**',
    knowledge_cards:[
      {label:'頸部腫塊', icon:'search', lines:['不規則','推不動的硬塊']},
      {label:'鼻部症狀', icon:'check', lines:['流鼻血、鼻涕帶血','持續鼻塞']},
      {label:'耳朵悶塞', icon:'check', lines:['單側耳悶','聽不清楚']}
    ],
    primary_stat:{value:'448 人', label:'114 年男性鼻咽癌死亡', note:'衛福部死因統計｜男性癌症死因第 12 位'},
    secondary_stats:[
      {value:'74.5%', label:'患者為男性（醫學會）'},
      {value:'40–64 歲', label:'好發年齡'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'摸', text:'頸部硬塊推不動，盡快就醫'},
      {key:'看', text:'耳悶、鼻涕帶血持續看耳鼻喉科'},
      {key:'戒', text:'戒菸、少吃醃製食品'},
      {key:'追', text:'治療後依醫囑定期回診'}
    ],
    carousel_suggestion:{reason:'若想把警訊、風險與治療分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'以為是過敏？', headline_main:'鼻咽癌 3 大警訊'},
      {layout_type:'data', headline_hook:'逾 4 成', headline_main:'確診時已是第四期'},
      {layout_type:'action', headline_hook:'高風險族群', headline_main:'家族史、EB 病毒'}]},
    hashtags:['鼻咽癌','頸部腫塊','耳鼻喉科','頭頸癌'],
    sources:['衛生福利部','台灣頭頸部腫瘤醫學會','TVBS新聞網'],
    illustration_category:'general',
    illustration:{topic:'鼻咽癌警訊', audience:'中壯年男性', scene:'一位中年男性在耳鼻喉科診間，醫師用內視鏡檢查鼻腔',
      emotion:'安心、主動', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged man in an ENT clinic while a doctor examines his nasal cavity with an endoscope, reassuring and proactive mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['114年男性鼻咽癌死亡448人（死因統計）','醫學會2026年11月：42.5%確診時第四期'],
      layout_reason:'核心是早期警訊易被忽略，選 knowledge：3 大警訊卡當主角，晚期比例放在 hero，死亡人數退到下方。',
      tone:'專業易懂', tone_reason:'警訊需清楚。',
      to_verify:['42.5%原始資料來源']},
    decision_points:[Object.assign({}, DP_SRC, {current:'448 人｜114 年男性鼻咽癌死亡'})],
    content_check_note:'死亡人數引自衛福部，晚期比例與患者特徵標明為醫學會說明，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'鼻咽癌',
    collect:{
      summary:'鼻咽癌為「華人好發癌」，醫學會指出每年新增逾1400人、男性占7成多，2023年逾4成確診時已是第四期；2026年11月國內首部鼻咽癌治療共識發布，「早期警訊易誤認為過敏」是主要溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'每年新增逾1400人：台灣頭頸部腫瘤醫學會2026年11月指出，鼻咽癌好發於40至64歲，男性占74.5%（媒體報導未註明原始資料年份）。',tag:'市場觀察',source:{name:'健康醫療網／鏡週刊：鼻咽癌逾4成確診已第四期',url:'https://www.mirrormedia.mg/external/healthnews_70388'}},
        {item:'年度趨勢方向',desc:'2025年男性鼻咽癌死亡448人：依114年死因統計，鼻咽癌居男性癌症死因第12位，死亡率每十萬男性3.9人。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'22項共識：台灣頭頸部腫瘤醫學會2026年11月發布國內首部鼻咽癌治療共識，涵蓋局部晚期、復發轉移與手術評估，並呼籲評估免疫治療健保給付。',tag:'市場觀察',source:{name:'健康醫療網／鏡週刊：台灣首部治療共識',url:'https://www.mirrormedia.mg/external/healthnews_70388'}},
        {item:'好發族群年齡層',desc:'42.5%確診時為第四期：醫學會引述2023年資料，鼻咽癌位置隱密、早期症狀不明顯，高風險族群包括家族史、EB病毒感染、愛吃醃製食品與長期吸菸者。',tag:'市場觀察',source:{name:'TVBS新聞網：以為是過敏鼻塞？醫揪鼻咽癌4大初期徵兆',url:'https://health.tvbs.com.tw/cancer/361717'}}
      ],
      product_view:['機會：鼻咽癌好發於中壯年男性、晚期比例高，放射與化學治療期長，可作為癌症保障的溝通情境。','機會：免疫治療尚未健保給付，自費議題受關注，但溝通須謹慎。','風險：不得以自費新藥金額製造焦慮，或暗示保單可涵蓋所有自費治療。'],
      marketing_view:['機會：「以為是過敏鼻塞」貼近生活，季節性過敏期可搭配溝通。','機會：40-64歲男性與家人是核心溝通對象。','風險：避免讓所有鼻塞患者過度焦慮，宜強調「持續、單側、帶血」等特徵。'],
      alert_level:'medium',
      alert_reason:'國內首部治療共識2026年11月剛發布，醫學會呼籲擴大給付，具時效溝通價值。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('2023年有42.5%病人確診時已是第四期','SOURCE_EVIDENCE','secondary_citation',
          '期別比例出自醫學會記者會的媒體報導，未註明是癌症登記或特定醫院資料。','medium','yes',
          '國健署癌症登記鼻咽癌期別分布。','yes','confirm','數字可能正確，但屬二手引述。',
          '2023年有42.5%病人確診時已是第四期（醫學會引述）',['有4成多的人確診時已經是第四期','逾4成確診時已是第四期']),
        F('台灣每年新增逾1400名病人','SOURCE_EVIDENCE','secondary_citation',
          '新增人數未附原始資料與年份；另有報導寫「約1500人」，兩者口徑不明。','medium','yes',
          '癌症登記年報鼻咽癌新發人數。','yes','confirm','屬醫學會說明。',
          null,['台灣每年新增1400多人']),
        F('第四期5年相對存活率為59%','MEDICAL_INTERPRETATION','survival_stat_context',
          '存活率未註明資料年份與來源，且「相對存活率」與一般存活率不同，讀者可能誤解。','low','yes',
          '存活率的資料來源與年份。','no','confirm','屬醫學會說明。',
          null),
        F('用內視鏡看一眼就能安心','RISK_COMMUNICATION_SCOPE','overreassurance',
          '「看一眼就能安心」可能過度簡化，內視鏡檢查後有時仍需切片或其他檢查才能確認。','low','no',
          null,'no','clarify','屬語氣調整。',
          '用內視鏡檢查，由醫師判斷是否需要進一步檢查')
      ],
      card:[
        F('2023 年 42.5% 病人確診時為第四期（醫學會說明）','SOURCE_EVIDENCE','secondary_citation',
          'hero 主訊息採用二手數據，未附原始來源。','medium','yes',
          '癌登期別分布原始資料。','yes','confirm','屬醫學會說明。',
          null),
        F('患者為男性（醫學會）','SOURCE_EVIDENCE','secondary_citation',
          '男性比例未附原始資料年份。','low','yes',
          '癌登男女別資料。','no','confirm','屬醫學會說明。',
          null)
      ]
    },
    title_alts:[
      '鼻咽癌逾4成確診已晚期：頸部腫塊、耳悶、鼻涕帶血要警覺',
      '以為是過敏鼻塞？耳朵悶、鼻涕帶血要看耳鼻喉科',
      '華人好發的鼻咽癌：3大警訊與高風險族群'
    ],
    card_title_alts:[
      ['以為是過敏鼻塞？','鼻咽癌 3 大警訊'],
      ['逾 4 成確診已晚期','鼻咽癌早期警訊'],
      ['頸部摸到硬塊','看耳鼻喉科']
    ],
    data_addon:[
      '醫學會：鼻咽癌治療後復發者近6成發生在2年內，8.1%在5年後才復發。',
      '2026年9月食藥署核准首個用於復發或轉移性鼻咽癌的PD-1免疫治療，截至報導時尚未健保給付。',
      '衛福部常務次長莊人祥表示，將透過健保機制逐步改善用藥可近性（未提時程）。'
    ],
    cta:'如果家人單側耳朵悶、鼻涕帶血或脖子有硬塊超過幾週，這週就陪他去耳鼻喉科。'
  });
})();
