/* v6 示範主題：溜溜球效應（B9 飲食營養與運動）
   查證日期：2026-11-21。數據來源：衛福部／國健署〈減重迷思大破解——少喝水、吃代餐、減肥藥、禁食是會傷身易復胖〉（禁食致肌肉流失與代謝率下降、代餐停用易復胖、非法減肥藥）、〈健康體重管理，打破減重迷思〉（天天量體重、國際期刊證實定期量體重有助不復胖）、國健署2025-03-04世界肥胖日新聞稿（2018-2022成人過重及肥胖率50.8%）。
   注意：國內未查到減重後復胖比例的官方統計。
   參考方向：健康智庫〈減重不復胖！帶你克服溜溜球效應〉2025/09、〈夏日節食減重 小心減過頭！〉2022/08。 */
(function(){
  const REFS = [
    {title:'減重迷思大破解-----少喝水、吃代餐、減肥藥、禁食是會傷身易復胖',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-3217-22897-1.html'},
    {title:'健康體重管理，打破減重迷思',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/fp-3160-24997-1.html'},
    {title:'響應世界肥胖日 健康吃 動起來 維持健康體位更健康',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18922'}
  ];
  const TABLE = {headers:['常見快速減重法','國健署的提醒'], rows:[
    ['不吃東西、禁食','營養素缺乏、肌肉流失、代謝率下降，下一餐容易吃更多'],
    ['只靠代餐','營養不均衡、纖維不足，停用後易復胖'],
    ['自己買減肥藥','非法減肥藥可能含安非他命、利尿劑等成分，傷身甚至危及生命'],
    ['少喝水','水沒有熱量，喝水不會胖；每天至少1,500毫升']
  ]};
  const TAGS = ['溜溜球效應','復胖','體重管理','減重迷思','天天量體重'];

  const PRO = {
    content_type:'健康文章',
    title:'越減越胖？溜溜球效應的原因與不復胖3原則',
    update_date:'2026/11/21',
    intro:'依國民健康署2018-2022年國民營養健康調查，18歲以上成人有50.8%達過重及肥胖標準，減重是許多人的課題，但「瘦了又胖回來」的溜溜球效應也很常見。國健署指出，禁食會使體重下降過快、肌肉流失、代謝率下降，還容易在下一餐吃更多；代餐若沒有改變飲食習慣，停用後也容易復胖。',
    sections:[
      {heading:'快速減重法為什麼容易復胖',format:'table',table:TABLE},
      {heading:'不復胖3原則',format:'bullets',items:[
        '均衡飲食：三餐定時定量，用未精製全穀取代部分精製澱粉，不吃宵夜。',
        '規律運動：身體活動是維持體重、避免復胖的重要關鍵。',
        '天天量體重：每天固定時間量，發現上升就檢視飲食與活動量。'
      ]},
      {heading:'給正在減重的人',format:'bullets',items:[
        '目標設定在每週約0.5公斤的速度，不追求快速。',
        '減重後的維持期和減重期一樣重要，習慣要繼續。',
        '有慢性病或想用藥物輔助者，先與醫師討論。'
      ]}
    ],
    think_tank_view:'溜溜球效應的根源，是用「短期手段」解決「長期習慣」的問題。節食、代餐可以讓體重計數字快速下降，但一停就回到原點，甚至流失更多肌肉。真正能維持的減重，靠的是每天都做得到的吃法和動法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'減重方法的風險說明引自國健署，過重肥胖率標明調查年份，未推薦特定代餐或減重產品。',
    ai_rationale:{basis:['禁食致肌肉流失與代謝率下降（國健署減重迷思新聞稿）','2018-2022成人過重肥胖率50.8%（國健署）'],
      layout_reason:'先用表格說明各種快速減重法的問題，再給不復胖3原則，最後提醒減重者。',
      tone:'專業易懂', tone_reason:'需破除快速減重迷思。',
      to_verify:['國內未查到減重後復胖比例的官方統計']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'瘦了又胖回來？3招擺脫溜溜球效應',
    update_date:'2026/11/21',
    intro:'好不容易瘦下來，沒多久又胖回去，甚至比以前更重？這就是常聽到的「溜溜球效應」。國健署提醒，靠不吃東西減肥，會讓肌肉流失、代謝變慢，下一餐還更容易吃太多；靠代餐也一樣，一停就容易復胖。台灣成年人有一半以上（50.8%）過重或肥胖，想瘦更要用對方法。',
    sections:[
      {heading:'這些方法為什麼會復胖？',format:'table',table:TABLE},
      {heading:'不復胖3招',format:'bullets',items:[
        '好好吃：三餐定時定量，不吃宵夜。',
        '動起來：規律運動，維持體重的關鍵。',
        '天天量：每天同一時間量體重，變重了就調整。'
      ]},
      {heading:'正在減重的你',format:'bullets',items:[
        '一週瘦半公斤就很好，不用急。',
        '瘦下來之後，好習慣要繼續。',
        '想吃藥減重，一定要先問醫師。'
      ]}
    ],
    think_tank_view:'減重不是短跑而是馬拉松，能持續的方法才是好方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署並標明年份，未推薦特定減重產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以「瘦了又胖回來」的挫折切入。', tone:'生活親切', tone_reason:'給反覆減重的讀者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'溜溜球效應：快速減重易復胖',
    update_date:'2026/11/21',
    intro:'國健署指出禁食會造成肌肉流失、代謝率下降；代餐停用後易復胖。不復胖靠均衡飲食、規律運動、天天量體重。',
    sections:[
      {heading:'快速減重法',format:'table',table:TABLE},
      {heading:'不復胖',format:'bullets',items:[
        '三餐定時定量。',
        '規律運動。',
        '天天量體重。'
      ]},
      {heading:'提醒',format:'bullets',items:[
        '每週約減0.5公斤。'
      ]}
    ],
    think_tank_view:'用長期習慣取代短期手段，才能擺脫溜溜球。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為方法、原則、提醒三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'溜溜球效應', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'快速減重容易復胖', primary_visual:'50.8%', secondary_message:'禁食會流失肌肉、降低代謝率', action_priority:'均衡吃、規律動、天天量'},
    headline_hook:'瘦了又胖回來？', headline_main:'這 4 種減重法最容易復胖', title_accent:'最容易復胖',
    hero_message:'50.8% 成人過重肥胖', hero_support:'18 歲以上（國健署 2018–2022 年調查）',
    knowledge_title:'容易復胖的減重法', knowledge_note:'減重無捷徑，**習慣要能持續**',
    knowledge_cards:[
      {label:'禁食', icon:'glucose', lines:['肌肉流失','代謝率下降']},
      {label:'只靠代餐', icon:'flask', lines:['營養不均衡','停用易復胖']},
      {label:'自買減肥藥', icon:'shield', lines:['可能含違法成分','傷身危險']},
      {label:'少喝水', icon:'leaf', lines:['水沒有熱量','喝水不會胖']}
    ],
    action_title:'不復胖這樣做',
    action_cards:[
      {key:'吃', text:'三餐定時定量，不吃宵夜'},
      {key:'動', text:'規律運動，維持體重的關鍵'},
      {key:'量', text:'每天固定時間量體重'},
      {key:'慢', text:'每週約減 0.5 公斤就好'}
    ],
    carousel_suggestion:{reason:'若想把復胖原因與維持方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'瘦了又胖回來？', headline_main:'4 種容易復胖的減重法'},
      {layout_type:'knowledge', headline_hook:'禁食的代價', headline_main:'肌肉流失、代謝下降'},
      {layout_type:'action', headline_hook:'不復胖', headline_main:'吃、動、量'}]},
    hashtags:['溜溜球效應','復胖','體重管理','減重迷思'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'維持體重', audience:'正在減重的成人', scene:'一位成人早上起床後站上體重計，旁邊的筆記本記錄著每天的體重曲線',
      emotion:'穩定、有信心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult stepping on a bathroom scale in the morning, a notebook beside showing a steady daily weight chart, calm and confident, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['國健署減重迷思新聞稿','2018-2022成人過重肥胖率50.8%'],
      layout_reason:'核心是認出容易復胖的方法，選 knowledge：4 種減重法當主角，最後給不復胖行動。',
      tone:'專業易懂', tone_reason:'破除迷思並給方法。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自國健署並標明年份，未推薦特定減重產品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'溜溜球效應',
    collect:{
      summary:'18歲以上成人過重及肥胖率達50.8%（2018-2022），減重需求高但復胖常見；國健署指出禁食會造成肌肉流失與代謝率下降，代餐停用後易復胖，非法減肥藥更有健康風險。均衡飲食、規律運動與天天量體重是不復胖的核心。',
      objective_data:[
        {item:'盛行率／發生率',desc:'50.8%：國健署2025年3月引用2018-2022年國民營養健康調查，18歲以上成人達過重及肥胖標準者為50.8%。',tag:'官方統計',source:{name:'國健署：響應世界肥胖日 維持健康體位更健康',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18922'}},
        {item:'政策動向',desc:'禁食降低代謝率：國健署指出禁食會造成營養素缺乏，使體重下降過快、肌肉流失、代謝率下降，也容易在下一餐吃進更多食物。',tag:'官方統計',source:{name:'國健署：減重迷思大破解',url:'https://www.mohw.gov.tw/cp-3217-22897-1.html'}},
        {item:'好發族群年齡層',desc:'代餐停用易復胖：國健署提醒代餐價格昂貴、膳食纖維不足，長期使用可能營養不良，若未改變飲食習慣，停用後容易復胖。',tag:'官方統計',source:{name:'國健署：減重迷思大破解',url:'https://www.mohw.gov.tw/cp-3217-22897-1.html'}},
        {item:'年度趨勢方向',desc:'天天量體重：國健署建議每天量體重掌握變化，並指出國際肥胖專業期刊證實定期量體重是確保減重不復胖的良方。',tag:'官方統計',source:{name:'國健署：健康體重管理，打破減重迷思',url:'https://www.mohw.gov.tw/fp-3160-24997-1.html'}}
      ],
      product_view:['機會：體重管理是健康管理服務的長期需求。','機會：「天天量體重」可結合健康記錄工具。','風險：不得推薦代餐、減重產品或藥物；避免任何快速減重暗示。'],
      marketing_view:['機會：年後、夏季前的減重潮是溝通時點。','機會：「越減越胖」是高共鳴話題。','風險：避免身材焦慮語氣。'],
      alert_level:'low',
      alert_reason:'屬長期健康管理議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('身體活動是維持體重、避免復胖的重要關鍵','SOURCE_EVIDENCE','unsourced_claim',
          '此說法出自國健署另一篇衛教，本文參考資料未列該來源。','low','no',
          null,'no','clarify','屬出處完整度。',
          null,
          ['規律運動，維持體重的關鍵。','規律運動。']),
        F('靠不吃東西減肥，會讓肌肉流失、代謝變慢','DATA_FACTUAL_ACCURACY','oversimplification',
          '國健署原文是「禁食」造成肌肉流失與代謝率下降；口語版把「不吃東西減肥」與所有節食混為一談，可能讓讀者以為任何減少熱量都會降低代謝。','low','no',
          null,'no','clarify','屬用語精確度。',
          '靠完全不吃東西（禁食）減肥，會讓肌肉流失、代謝變慢'),
        F('每天至少1,500毫升','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '飲水建議量對心臟衰竭、腎臟病等需限水者不適用，表格未說明。','low','no',
          null,'no','clarify','屬適用對象。',
          '一般成人每天至少1,500毫升（需限水者依醫囑）')
      ],
      card:[
        F('可能含違法成分','DATA_FACTUAL_ACCURACY','vague_term',
          '未說明可能含安非他命、利尿劑等成分，讀者難以理解風險。','low','no',
          null,'no','clarify','受字數限制。',
          '可能含安非他命等'),
        F('每週約減 0.5 公斤就好','SOURCE_EVIDENCE','unsourced_claim',
          '此速度出自國健署另一篇新聞稿（每日少500大卡），本卡來源未列。','low','no',
          null,'no','clarify','屬出處完整度。',
          '每週約減 0.5 公斤（國健署）')
      ]
    },
    title_alts:[
      '越減越胖？溜溜球效應的原因與不復胖3原則',
      '瘦了又胖回來？3招擺脫溜溜球效應',
      '禁食、代餐為什麼容易復胖：國健署減重迷思破解'
    ],
    card_title_alts:[
      ['瘦了又胖回來？','這 4 種減重法最容易復胖'],
      ['禁食的代價','肌肉流失、代謝下降'],
      ['不復胖 3 招','吃、動、量']
    ],
    data_addon:[
      '非法減肥藥常含安非他命、緩瀉劑、利尿劑、甲狀腺素等成分，可能造成心悸、腎衰竭甚至死亡（國健署）。',
      '國健署建議起床1杯水、飯前1杯水、外出要帶水。',
      '不吃某一類或只吃某一類食物的減重法都不建議（國健署）。'
    ],
    cta:'明天起每天早上起床如廁後量一次體重並記下來，一週後看看趨勢。'
  });
})();
