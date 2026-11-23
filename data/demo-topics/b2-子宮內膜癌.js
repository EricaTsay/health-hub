/* v6 示範主題：子宮內膜癌（B2 癌症）
   查證日期：2026-11-20。數據來源：衛福部112年癌症登記報告附表（子宮體癌，2025-12-30 公布）、衛福部114年死因統計摘要表（子宮體癌死亡時間序列）、
   國健署2024-10-29〈異常出血要注意 小心子宮內膜癌找上門〉（子宮內膜癌占比、期別、危險因子、無篩檢工具）、國健署2022-08-15〈停經後出血非回春〉（危險因子清單）。
   統計分類為「子宮體癌」，子宮內膜癌占其9成以上，文中已標明範圍。
   參考方向：健康智庫〈子宮內膜癌〉2023/10。 */
(function(){
  const REFS = [
    {title:'112年國人十大癌症發生人數附表',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'異常出血要注意 小心子宮內膜癌找上門',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-80346-1.html'},
    {title:'停經後出血非回春，小心子宮內膜癌找上身',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-71039-1.html'}
  ];
  const TABLE = {headers:['項目','重點'], rows:[
    ['異常出血警訊','停經後出血、經期不規則、經血變多、持續陰道出血或紅色分泌物'],
    ['其他症狀','貧血、倦怠、下腹疼痛'],
    ['危險因子','長期月經異常、多囊性卵巢症候群、停經後肥胖、婦癌家族史、僅含雌激素的藥物或補充劑、糖尿病'],
    ['篩檢工具','目前國際上尚無實證有效的篩檢工具，異常出血應儘速就醫'],
    ['確診方式','透過子宮鏡檢查及內膜切片證實']
  ]};
  const TAGS = ['子宮內膜癌','子宮體癌','停經後出血','婦癌','女性健康'];

  const DP_SCOPE = {id:'dp-ec-scope', type:'data_scope', title:'統計是「子宮體癌」不是「子宮內膜癌」',
    desc:'癌症登記與死因統計的分類是「子宮體癌」。國健署說明，子宮內膜癌占新診斷子宮體癌的92.61%（110年資料）。文中人數皆為子宮體癌，AI 沒有把它直接寫成子宮內膜癌人數。',
    current:'子宮體癌新發3,690人（112年，其中9成以上為子宮內膜癌）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'3,690人', value:'子宮體癌（112年）', note:'癌症登記附表（目前採用）'},
      {label:'92.61%', value:'子宮內膜癌占子宮體癌比例', note:'國健署110年資料'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'停經後出血不是回春：子宮內膜癌警訊與預防',
    update_date:'2026/11/20',
    intro:'依衛生福利部112年癌症登記報告，子宮體癌新發3,690人，居國人癌症發生第10位、女性第5位，診斷年齡中位數57歲，較111年增加149人；國健署說明，其中9成以上為子宮內膜癌。114年死因統計中，子宮體癌死亡585人，年齡標準化死亡率由105年每十萬女性1.8升至2.5。子宮內膜癌目前沒有實證有效的篩檢工具，認得異常出血警訊是早期發現的關鍵。',
    sections:[
      {heading:'子宮內膜癌重點整理',format:'table',table:TABLE},
      {heading:'早期發現，預後較好',format:'bullets',items:[
        '國健署110年資料顯示，子宮體癌新診斷個案中71.9%為0期或1期，50歲以上女性占73.5%。',
        '國健署指出，近5年癌登資料平均5年存活率為83.9%。',
        '肥胖是子宮內膜癌的重要因素，國健署引述研究，BMI超過30者風險是BMI 18.5-24者的2至10倍。'
      ]},
      {heading:'預防與就醫',format:'bullets',items:[
        '維持適當體重，國健署引述美國癌症研究所，規律運動、健康飲食與維持適當體重可降低20-30%罹患風險。',
        '停經後出血或經血異常，請儘速至婦產科就醫，不要當成「回春」或經期亂。',
        '使用含荷爾蒙成分的藥品或保健品前，先與醫師討論。'
      ]}
    ],
    think_tank_view:'子宮內膜癌沒有篩檢工具，卻有一個很明確的警訊：異常出血。只要停經後再出血，或經血突然變多、經期亂掉持續一段時間，就值得找婦產科檢查。維持體重與規律運動，則是能自己掌握的預防方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'發生與死亡人數引自衛福部癌症登記與死因統計並標明為子宮體癌，期別、存活率與風險倍數標明為國健署說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['112年子宮體癌新發3,690人（癌症登記附表）','114年子宮體癌死亡585人（死因統計）','危險因子與警訊（國健署2022、2024年新聞稿）'],
      layout_reason:'先用表格整理警訊、危險因子與篩檢現況，再說明早期發現的意義，最後給預防與就醫行動。',
      tone:'專業易懂', tone_reason:'無篩檢工具的癌症需要清楚的警訊說明。',
      to_verify:['期別71.9%與占比92.61%為110年資料，新版待查','5年存活率83.9%未標示資料年份']},
    decision_points:[DP_SCOPE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'停經了又出血？不是回春，快去看婦產科',
    update_date:'2026/11/20',
    intro:'子宮內膜癌是女性第5常見的癌症類別（以子宮體癌統計），112年有3,690人確診，而且人數還在增加。它沒有像抹片那樣的篩檢方式，但有一個很明顯的警訊：不正常出血。只要認得這個訊號，及早就醫，多數都能在早期發現。',
    sections:[
      {heading:'子宮內膜癌，你要知道這些',format:'table',table:TABLE},
      {heading:'早點發現差很多',format:'bullets',items:[
        '國健署資料，子宮體癌新診斷的人有7成以上是0期或1期。',
        '近5年平均5年存活率83.9%。',
        '體重過重是重要風險，BMI超過30的人風險可能高出好幾倍。'
      ]},
      {heading:'可以這樣做',format:'bullets',items:[
        '維持體重、多運動、吃得均衡。',
        '停經後出血或月經突然變多，就去婦產科。',
        '想吃含荷爾蒙的保健品，先問醫師。'
      ]}
    ],
    think_tank_view:'很多姊妹把停經後出血當成「回春」，其實這是身體在提醒你。陪媽媽或自己約一次婦產科，比自己猜測安心多了。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部與國健署公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「停經後出血」常見誤解切入。', tone:'生活親切', tone_reason:'給熟齡女性與子女閱讀。', to_verify:['期別比例為110年資料']},
    decision_points:[DP_SCOPE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'子宮內膜癌：異常出血儘速就醫',
    update_date:'2026/11/20',
    intro:'112年子宮體癌新發3,690人，9成以上為子宮內膜癌。目前無有效篩檢工具，異常出血是關鍵警訊。',
    sections:[
      {heading:'重點',format:'table',table:TABLE},
      {heading:'預後',format:'bullets',items:[
        '71.9%診斷時為0、1期（110年）。',
        '肥胖為重要危險因子。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '維持體重、規律運動。',
        '停經後出血就醫。'
      ]}
    ],
    think_tank_view:'認得異常出血、維持適當體重，是面對子宮內膜癌最重要的兩件事。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部與國健署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為重點、預後、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['人數為子宮體癌']},
    decision_points:[DP_SCOPE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'子宮內膜癌', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'停經後出血不是回春', primary_visual:'3,690 人', secondary_message:'無篩檢工具，異常出血是警訊', action_priority:'異常出血就醫、維持體重'},
    headline_hook:'停經後出血不是回春', headline_main:'子宮內膜癌 4 件事', title_accent:'4 件事',
    hero_message:'異常出血要就醫', hero_support:'子宮內膜癌目前沒有實證有效的篩檢工具',
    primary_stat:{value:'3,690 人', label:'112 年子宮體癌新發個案', note:'衛福部癌症登記｜9 成以上為子宮內膜癌'},
    action_title:'這樣做',
    action_cards:[
      {key:'醫', text:'停經後出血、經血異常儘速就醫'},
      {key:'重', text:'維持適當體重'},
      {key:'動', text:'規律運動、均衡飲食'},
      {key:'問', text:'荷爾蒙藥品或保健品先問醫師'}
    ],
    notice:'BMI 超過 30 者，風險是 BMI 18.5–24 者的 **2 至 10 倍**（國健署引述研究）。',
    carousel_suggestion:{reason:'若想把警訊、風險與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'異常出血警訊', headline_main:'這些狀況要就醫'},
      {layout_type:'data', headline_hook:'子宮體癌', headline_main:'一年新發 3,690 人'},
      {layout_type:'action', headline_hook:'自己能做的', headline_main:'維持體重、規律運動'}]},
    hashtags:['子宮內膜癌','停經後出血','婦癌','女性健康'],
    sources:['衛生福利部','衛生福利部國民健康署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'子宮內膜癌警訊', audience:'熟齡女性', scene:'一位熟齡女性在婦產科診間與女醫師交談，醫師手拿檢查說明單',
      emotion:'安心、被理解', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A mature woman talking with a female gynecologist in a clinic, the doctor holding an examination information sheet, reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['112年子宮體癌新發3,690人（癌症登記）','國健署：無實證有效篩檢工具'],
      layout_reason:'子宮內膜癌的核心訊息是「認得警訊、維持體重」，選 action：4 個行動當主角，新發人數退到背景。',
      tone:'專業易懂', tone_reason:'警訊需清楚。',
      to_verify:['人數為子宮體癌']},
    decision_points:[Object.assign({}, DP_SCOPE, {current:'3,690 人｜112 年子宮體癌（9 成以上為子宮內膜癌）'})],
    content_check_note:'新發人數引自衛福部112年癌症登記並標明為子宮體癌，風險倍數標明為國健署引述研究，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'子宮內膜癌',
    collect:{
      summary:'子宮體癌（9成以上為子宮內膜癌）112年新發3,690人、居女性癌症第5位且持續增加，標準化死亡率十年上升；目前沒有實證有效的篩檢工具，「停經後出血不是回春」是適合熟齡女性的警訊型溝通議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'子宮體癌新發3690人：依2025年12月公布的112年癌症登記，子宮體癌居國人癌症發生第10位、女性第5位，診斷年齡中位數57歲，國健署說明其中9成以上為子宮內膜癌。',tag:'官方統計',source:{name:'衛生福利部：112年國人十大癌症發生人數附表',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'}},
        {item:'年度趨勢方向',desc:'新發人數增加149人：112年較111年3,541人增加，標準化發生率由18.8升至19.3，2025年死亡585人，標準化死亡率由2016年1.8升至2.5。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'0項實證有效篩檢工具：國健署指出目前國際上尚無實證有效的子宮內膜癌篩檢工具，呼籲停經後出血、經期不規則、經血變多應儘速就醫。',tag:'官方統計',source:{name:'衛生福利部國民健康署：異常出血要注意 小心子宮內膜癌找上門',url:'https://mohw.gov.tw/cp-16-80346-1.html'}},
        {item:'好發族群年齡層',desc:'50歲以上占73.5%：國健署110年資料，子宮體癌新診斷者50歲以上占73.5%，肥胖為重要危險因子，BMI超過30者風險為正常體重者2至10倍。',tag:'官方統計',source:{name:'衛生福利部國民健康署：異常出血要注意 小心子宮內膜癌找上門',url:'https://mohw.gov.tw/cp-16-80346-1.html'}}
      ],
      product_view:['機會：子宮內膜癌多在早期發現、需手術治療，可作為女性癌症與手術醫療保障的溝通情境。','機會：肥胖為重要風險，適合結合體重管理與運動促進的健康管理服務。','風險：避免暗示體重管理服務可保證降低罹癌，或將體重與承保條件做不當連結。'],
      marketing_view:['機會：「停經後出血不是回春」是好記、能破除迷思的切點。','機會：可與子宮頸癌、卵巢癌組成婦癌系列，熟齡女性與女兒是溝通對象。','風險：涉及月經與私密症狀，用語需尊重、避免尷尬或恐嚇。'],
      alert_level:'medium',
      alert_reason:'發生人數與標準化發生率持續上升，且無篩檢工具，警訊衛教價值高，適合納入女性健康年度溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('BMI超過30者風險是BMI 18.5-24者的2至10倍','MEDICAL_INTERPRETATION','wide_range_unexplained',
          '「2至10倍」範圍很大，是國健署引述國外研究的整理，未說明研究族群與條件，讀者可能直接套用最高的10倍。','medium','yes',
          '國健署引述之研究出處與族群。','no','confirm','數字引自國健署新聞稿。',
          'BMI超過30者風險較正常體重者高出數倍（國外研究，倍數依研究不同為2至10倍）',['BMI超過30的人風險可能高出好幾倍']),
        F('國健署110年資料顯示，子宮體癌新診斷個案中71.9%為0期或1期','DATA_FACTUAL_ACCURACY','period_mismatch',
          '期別比例為110年資料，但同篇開頭使用112年發生人數，兩者年份不同卻並列，讀者可能誤以為是同一年。','low','no',
          null,'no','clarify','年份已標明，屬並列方式調整。',
          '依國健署較早的110年資料，子宮體癌新診斷個案中71.9%為0期或1期',['子宮體癌新診斷的人有7成以上是0期或1期']),
        F('近5年癌登資料平均5年存活率為83.9%','SOURCE_EVIDENCE','period_unstated',
          '「近5年」沒有寫明是哪幾年的資料，讀者無法判斷時點。','low','yes',
          '國健署83.9%存活率的資料年份。','no','confirm','數字引自國健署新聞稿，原文即未標示年份。',
          null,['近5年平均5年存活率83.9%']),
        F('人數還在增加','MEDICAL_INTERPRETATION','trend_cause_unstated',
          '只寫人數增加，沒有說明標準化發生率也上升（18.8→19.3），讀者無法判斷是否只是人口老化。','low','no',
          null,'no','clarify','數字正確。',
          '人數與標準化發生率都在增加')
      ],
      card:[
        F('112 年子宮體癌新發個案','MEDICAL_INTERPRETATION','scope_broader_than_topic',
          '卡面主題是子宮內膜癌，主數字是子宮體癌，已在 note 註明但字小，讀者可能誤讀。','low','no',
          null,'no','clarify','範圍已註明。',
          '112 年子宮體癌（多為子宮內膜癌）新發個案'),
        F('風險是 BMI 18.5–24 者的 **2 至 10 倍**','MEDICAL_INTERPRETATION','wide_range_unexplained',
          '範圍很大且為國外研究，卡面以粗體放大，容易被誇大解讀。','medium','no',
          null,'no','clarify','數字引自國健署。',
          '風險較正常體重者**高出數倍**')
      ]
    },
    title_alts:[
      '停經後出血不是回春：子宮內膜癌警訊與預防',
      '停經了又出血？不是回春，快去看婦產科',
      '沒有篩檢工具的子宮內膜癌：認得異常出血、維持體重'
    ],
    card_title_alts:[
      ['停經後出血不是回春','子宮內膜癌 4 件事'],
      ['沒有篩檢工具','異常出血就是警訊'],
      ['子宮內膜癌','維持體重是預防關鍵']
    ],
    data_addon:[
      '子宮體癌死亡人數2016年332人、2025年585人，標準化死亡率由1.8升至2.5。',
      '112年子宮體癌標準化發生率每十萬女性19.3人，較111年增加0.5人。',
      '國健署110年資料：新診斷子宮體癌3,181人，其中子宮內膜癌占92.61%。'
    ],
    cta:'如果停經後出現出血，或最近經血明顯異常，這週就約婦產科門診。'
  });
})();
