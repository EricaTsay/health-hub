/* v6 示範主題：阿茲海默症（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：衛福部委託國衛院「全國社區失智症流行病學調查」（109-112年，2024/03發布）、衛福部失智分流照顧新聞（114/01/20）、
   衛福部長照司真相說明（112/08/22，失智據點與共照中心布建數）。
   與既有「失智症預防」區隔：本題聚焦阿茲海默症的病程、警訊、診斷與照護，不重複預防行動。
   參考方向：健康智庫〈阿茲海默症〉2023/03。 */
(function(){
  const REFS = [
    {title:'衛福部公布最新失智症盛行率調查結果',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-78102-1.html'},
    {title:'推動失智分流照顧，優化服務模式',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-81280-1.html'},
    {title:'衛福部澄清已於106年將失智症者納入長照服務對象',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-4343-75724-1.html'},
    {title:'失智症防治照護政策綱領暨行動方案2.0：114年1-12月辦理情形',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-88957-3f85385a-8809-42ee-805e-a07118df6e5d.html'}
  ];
  const TABLE = {headers:['病程階段','常見表現'], rows:[
    ['輕度','近期記憶變差、重複問同樣問題，複雜家務與理財出現困難'],
    ['中度','時間地點混淆、迷路，穿衣盥洗需要提醒，可能出現妄想或日夜顛倒'],
    ['重度','認不得家人、語言能力明顯退化，行走與吞嚥困難，需全天照顧']
  ]};
  const TAGS = ['阿茲海默症','失智症','記憶力','高齡照護','長照'];

  const DP_RATE = {id:'dp-ad-rate', type:'data_scope', title:'盛行率與類型比例是兩件事',
    desc:'7.99%是65歲以上「所有失智症」的盛行率；56.88%是失智者當中「阿茲海默型」所占比例。兩者相乘約可推算阿茲海默症在長者中的比例，但調查未直接公布，AI 沒有自行換算成人數。',
    current:'阿茲海默型占失智症56.88%（109-112年全國調查）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'7.99%', value:'65歲以上・所有失智症', note:'109-112年全國社區失智症流行病學調查'},
      {label:'56.88%', value:'失智者中・阿茲海默型', note:'同一調查（目前採用）'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'阿茲海默症：最常見的失智類型，病程、警訊與照護一次看',
    update_date:'2026/11/20',
    intro:'衛生福利部委託國家衛生研究院於109至112年進行全國社區失智症流行病學調查，65歲以上長者失智症盛行率為7.99%，其中阿茲海默型失智症占56.88%，是最常見的類型，其次為血管型（22.91%）。盛行率隨年齡快速上升，85歲以上達23.23%。阿茲海默症是大腦逐漸退化的疾病，及早辨識警訊、確診與規劃照護，能讓患者與家人有更多準備時間。',
    sections:[
      {heading:'阿茲海默症的病程變化',format:'table',table:TABLE},
      {heading:'和一般老化不同的警訊',format:'bullets',items:[
        '記憶減退影響生活：剛發生的事很快忘記，且事後也想不起來。',
        '對時間、地點感到混淆，在熟悉的地方迷路。',
        '計畫事情或處理熟悉的工作（如煮飯、算帳）出現困難。',
        '個性、情緒明顯改變，或對原本的嗜好失去興趣。'
      ]},
      {heading:'確診與照護資源',format:'bullets',items:[
        '出現警訊應至神經內科或精神科（老年精神科）就醫，醫師會透過認知評估、血液檢查與腦部影像排除其他原因。',
        '治療目前以藥物延緩症狀、非藥物活動與照護調整為主，是否適用新型藥物需由專科醫師依病程評估。',
        '長照2.0已納入50歲以上失智者，可撥打1966長照專線申請評估；截至114年底，全國布建失智共同照護中心133處、失智社區服務據點（含權責型）580處。'
      ]}
    ],
    think_tank_view:'阿茲海默症的病程通常以年計，家人最大的挑戰往往不是確診那一刻，而是後續長期的照顧安排。衛福部推估114年極輕度與輕度失智者約19萬餘人，占失智人口51%，這段時間正是患者還能參與決定的關鍵期：趁早討論照顧意願、財務與醫療安排，並連結共照中心與據點，能讓之後的路走得更從容。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率與類型比例引自衛福部109-112年全國調查，據點數標明統計截止時間，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['65歲以上失智盛行率7.99%、阿茲海默型56.88%取自衛福部全國社區失智症流行病學調查（109-112年）','極輕度與輕度約19萬餘人取自衛福部114/01/20新聞'],
      layout_reason:'先以表格說明病程，再列出與老化不同的警訊，最後整理確診與長照資源；預防行動留給「失智症預防」主題。',
      tone:'專業易懂', tone_reason:'疾病資訊需清楚、避免恐慌。',
      to_verify:['共照中心與據點數為114年底資料，取自失智綱領2.0辦理情形','新型抗類澱粉蛋白藥物在國內的上市與給付狀態']},
    decision_points:[DP_RATE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽常忘東忘西是老了，還是阿茲海默症？',
    update_date:'2026/11/20',
    intro:'衛福部最新全國調查（109至112年）發現，65歲以上長輩約每100人有8人失智，而失智的長輩裡，超過一半是阿茲海默症（56.88%）。年紀越大越常見，85歲以上每100人就有23人。阿茲海默症會慢慢影響記憶和生活能力，早點發現、早點安排，全家都能少一點慌亂。',
    sections:[
      {heading:'阿茲海默症會怎麼變化？',format:'table',table:TABLE},
      {heading:'這些不是單純老了',format:'bullets',items:[
        '剛講過的事一轉頭就忘，提醒了也想不起來。',
        '搞不清楚今天幾號，在熟悉的地方迷路。',
        '原本拿手的煮飯、算帳突然做不來。',
        '脾氣、個性變了很多，對以前的興趣都沒感覺。'
      ]},
      {heading:'懷疑的話可以怎麼做？',format:'bullets',items:[
        '陪長輩看神經內科或精神科，醫師會做認知評估和檢查。',
        '治療以延緩症狀和調整照顧方式為主，用藥請和專科醫師討論。',
        '撥打1966長照專線，可以申請照顧服務，也能找附近的失智據點。'
      ]}
    ],
    think_tank_view:'確診之後，最重要的是趁長輩還能表達的時候，一起聊聊他想怎麼被照顧。照顧是長跑，善用共照中心和據點，家人也要記得替自己留喘息的空間。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部全國失智症調查並標明年份，「每100人有8人」依7.99%換算，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從「是不是單純老化」的家人疑問切入。', tone:'生活親切', tone_reason:'給照顧長輩的子女閱讀。', to_verify:['新型藥物國內上市狀態']},
    decision_points:[DP_RATE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'阿茲海默症：病程、警訊與照護資源',
    update_date:'2026/11/20',
    intro:'65歲以上失智盛行率7.99%，阿茲海默型占56.88%（衛福部109-112年調查），是最常見的失智類型。',
    sections:[
      {heading:'病程',format:'table',table:TABLE},
      {heading:'警訊',format:'bullets',items:[
        '記憶減退影響生活、時間地點混淆。',
        '熟悉的工作做不來、個性改變。'
      ]},
      {heading:'照護資源',format:'bullets',items:[
        '神經內科或精神科就醫評估。',
        '1966長照專線申請服務。'
      ]}
    ],
    think_tank_view:'及早確診、趁輕度期規劃照顧，是面對阿茲海默症最務實的做法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部全國失智症調查並標明年份，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為病程、警訊、資源三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['據點數的最新統計']},
    decision_points:[DP_RATE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'阿茲海默症', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'失智者中超過一半是阿茲海默症', primary_visual:'56.88%', secondary_message:'85 歲以上每 4 人近 1 人失智', action_priority:'認得警訊、及早就醫'},
    headline_hook:'最常見的失智類型', headline_main:'阿茲海默症，年紀越大越常見', title_accent:'年紀越大',
    primary_stat:{kicker:'109–112 年全國調查', value:'56.88%', label:'失智症中阿茲海默型', note:'衛福部委託國衛院｜65 歲以上失智盛行率 7.99%'},
    chart:{type:'bar', title:'各年齡失智盛行率（%）', points:[
      {label:'65–69', value:2.40, display:'2.40'},
      {label:'70–74', value:5.16, display:'5.16'},
      {label:'75–79', value:9.10, display:'9.10'},
      {label:'80–84', value:16.00, display:'16.00'},
      {label:'85+', value:23.23, display:'23.23', highlight:true}
    ], note:'所有失智類型｜109–112 年全國調查'},
    secondary_stats:[
      {value:'7.99%', label:'65 歲以上失智症盛行率'},
      {value:'約 19 萬人', label:'114 年極輕度及輕度失智推估'}
    ],
    action_title:'發現警訊這樣做',
    action_cards:[
      {key:'察', text:'記憶減退影響生活、迷路，要留意'},
      {key:'醫', text:'至神經內科或精神科做認知評估'},
      {key:'談', text:'輕度期就與長輩討論照顧意願'},
      {key:'撥', text:'撥 1966 長照專線申請評估'}
    ],
    carousel_suggestion:{reason:'若想把數據、病程與照護資源分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'最常見的失智類型', headline_main:'失智者超過一半是阿茲海默症'},
      {layout_type:'knowledge', headline_hook:'病程變化', headline_main:'輕度、中度、重度怎麼分'},
      {layout_type:'action', headline_hook:'發現警訊', headline_main:'4 步驟及早因應'}]},
    hashtags:['阿茲海默症','失智症','高齡照護','長照'],
    sources:['衛生福利部'],
    illustration_category:'brain',
    illustration:{topic:'阿茲海默症照護', audience:'長者與家庭照顧者', scene:'成年子女陪長者在客廳翻看舊相簿，一起回想往事',
      emotion:'溫暖、耐心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult child sitting with an older parent in a living room looking through an old photo album together, warm and patient mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：阿茲海默型占失智症56.88%（109-112年全國調查）','年齡別盛行率取自同一調查'],
      layout_reason:'關鍵訊息是「最常見、且隨年齡上升」，選 data：56.88% 當主角，年齡別盛行率長條圖說明趨勢，最後給 4 個因應行動。',
      tone:'專業易懂', tone_reason:'議題莊重，避免恐嚇。',
      to_verify:['長條圖為所有失智類型的盛行率，非僅阿茲海默症']},
    decision_points:[Object.assign({}, DP_RATE, {current:'56.88%｜失智症中阿茲海默型（109–112 年調查）'})],
    content_check_note:'盛行率與類型比例引自衛福部全國調查並標明年份，推估值標明推估，未使用療效保證用語，未涉及具體藥品或商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'阿茲海默症',
    collect:{
      summary:'阿茲海默症是最常見的失智類型，衛福部109-112年全國調查顯示65歲以上失智盛行率7.99%，其中阿茲海默型占56.88%；病程以年計、照顧負擔沉重，隨高齡化人數持續增加，是長照與家庭照顧規劃的重要議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'阿茲海默型占失智症56.88%：衛福部委託國衛院109至112年全國社區失智症流行病學調查，65歲以上失智盛行率7.99%，類型以阿茲海默型最多（56.88%），其次為血管型（22.91%）。',tag:'官方統計',source:{name:'衛生福利部：最新失智症盛行率調查結果',url:'https://www.mohw.gov.tw/cp-16-78102-1.html'}},
        {item:'好發族群年齡層',desc:'85歲以上23.23%：同一調查中，失智盛行率隨年齡上升，65-69歲2.40%、80-84歲16.00%、85歲以上23.23%，女性（9.36%）高於男性（6.35%）。',tag:'官方統計',source:{name:'衛生福利部：最新失智症盛行率調查結果',url:'https://www.mohw.gov.tw/cp-16-78102-1.html'}},
        {item:'年度趨勢方向',desc:'近68萬人（2041年推估）：衛福部推估2031年65歲以上失智人口將逾47萬人，2041年近68萬人，盛行率9.95%，為推估值。',tag:'官方統計',source:{name:'衛生福利部：最新失智症盛行率調查結果',url:'https://www.mohw.gov.tw/cp-16-78102-1.html'}},
        {item:'政策動向',desc:'約19萬餘人屬極輕度及輕度：衛福部推估114年極輕度與輕度失智者約19萬餘人（占51%），自114年起推動失智分流照顧，中重度個案轉介至立案長照機構。',tag:'官方統計',source:{name:'衛生福利部：推動失智分流照顧，優化服務模式',url:'https://www.mohw.gov.tw/cp-16-81280-1.html'}}
      ],
      product_view:['機會：阿茲海默症病程長、照顧成本高，可連結失能、長照與特定傷病保障的規劃說明。','機會：輕度期是規劃意定監護、財務與照顧安排的關鍵時間，可提供家庭照顧規劃資訊。','風險：避免暗示特定保健品或檢測可預防、治癒阿茲海默症；新藥資訊需引用主管機關資料。'],
      marketing_view:['機會：每年9月21日世界阿茲海默症日是固定溝通檔期。','機會：以「是老化還是失智」的家人疑問切入，容易引發共鳴。','風險：失智議題易引發焦慮與污名，用語應尊重患者，避免「老人癡呆」等字眼。'],
      alert_level:'medium',
      alert_reason:'失智人口隨高齡化持續增加，114年起推動分流照顧政策，加上新型藥物話題，民眾關注度提高；適合在9月世界阿茲海默症日前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('全國布建失智共同照護中心133處、失智社區服務據點（含權責型）580處','DATA_FACTUAL_ACCURACY','term_unexplained',
          '「含權責型」為政策用語，一般讀者不易理解，且未說明民眾如何找到住家附近的據點。','low','no',
          null,'no','clarify','屬用語與可及性說明。',
          '全國布建失智共同照護中心133處、失智社區服務據點580處，可透過1966長照專線查詢住家附近的服務'),
        F('是否適用新型藥物需由專科醫師依病程評估','MEDICAL_INTERPRETATION','vague_term',
          '「新型藥物」未說明所指的藥物類別與適用對象（多限早期患者），讀者可能誤以為所有患者都能使用。','low','no',
          null,'no','clarify','國內上市與給付狀態需另行查證。',
          '新型抗類澱粉蛋白藥物多限早期患者評估使用，是否適用需由專科醫師依病程評估'),
        F('約每100人有8人失智','DATA_FACTUAL_ACCURACY','rounding',
          '7.99%換算為「每100人有8人」屬合理約略，但文中未說明是65歲以上所有失智類型，緊接著談阿茲海默症，可能被誤讀為阿茲海默症的比例。','low','no',
          null,'no','clarify','屬統計範圍說明。',
          '約每100人有8人有失智症（各種類型合計）'),
        F('盛行率隨年齡快速上升，85歲以上達23.23%','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '23.23%為85歲以上「所有失智類型」盛行率，放在阿茲海默症文章中未標註範圍，易被理解為阿茲海默症盛行率。','low','no',
          null,'no','clarify','數字正確，屬口徑說明。',
          '失智症（各類型合計）盛行率隨年齡快速上升，85歲以上達23.23%',
          ['85歲以上每100人就有23人'])
      ],
      card:[
        F('各年齡失智盛行率（%）','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '長條圖為所有失智類型的盛行率，卡面標題為阿茲海默症，讀者可能理解為阿茲海默症各年齡盛行率。','low','no',
          null,'no','clarify','note 已註明但字級小。',
          '各年齡失智症（全類型）盛行率（%）'),
        F('114 年極輕度及輕度失智推估','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '約19萬人為所有失智類型的推估，非僅阿茲海默症。','low','no',
          null,'no','clarify','屬統計範圍說明。',
          '114 年極輕度及輕度失智（全類型）推估')
      ]
    },
    title_alts:[
      '阿茲海默症：最常見的失智類型，病程、警訊與照護一次看',
      '爸媽常忘東忘西是老了，還是阿茲海默症？',
      '失智者超過一半是阿茲海默症：從警訊到照護資源'
    ],
    card_title_alts:[
      ['最常見的失智類型','阿茲海默症，年紀越大越常見'],
      ['是老化還是失智？','阿茲海默症警訊一次看'],
      ['失智者超過一半','是阿茲海默症']
    ],
    data_addon:[
      '109-112年全國調查：失智類型第三名為巴金森氏症失智症，占7.12%。',
      '女性失智盛行率9.36%，高於男性6.35%。',
      '長照2.0自106年起已納入50歲以上失智者為服務對象。'
    ],
    cta:'如果家中長輩出現記憶減退影響生活或在熟悉地方迷路，這個月就陪他到神經內科或精神科做一次認知評估。'
  });
})();
