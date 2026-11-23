/* v6 示範主題：惡性淋巴瘤（B2 癌症）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計摘要表（非何杰金氏淋巴瘤死亡時間序列）、衛福部112年癌症登記報告新聞稿（男性十大癌症排名）、
   TVBS 2026-09-03（2026世界淋巴瘤日記者會：癌症希望基金會6大警訊、血液病學會醫師說明、病友調查）。
   112年癌登附表未列淋巴瘤新發人數；死因統計僅含非何杰金氏淋巴瘤（C82-C85）。
   參考方向：健康智庫〈惡性淋巴瘤〉2022/12。 */
(function(){
  const REFS = [
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-84987-1.html'},
    {title:'一直感冒竟是淋巴癌！4成3病友確診前不知警訊 6大徵兆「這時候流汗」最危險',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/cancer/365732'}
  ];
  const TABLE = {headers:['6大警訊','說明'], rows:[
    ['燒','不明原因發燒'],
    ['腫','無痛性淋巴結腫大，例如頸部、腋下、鼠蹊部'],
    ['癢','持續搔癢'],
    ['汗','夜間盜汗'],
    ['咳','持續咳嗽'],
    ['瘦','莫名體重減輕']
  ]};
  const TAGS = ['淋巴瘤','淋巴癌','血液腫瘤','夜間盜汗','癌症防治'];

  const DP_SCOPE = {id:'dp-ly-scope', type:'data_scope', title:'死亡統計只含非何杰金氏淋巴瘤',
    desc:'衛福部死因統計的癌症分類是「非何杰金氏淋巴瘤」（ICD-10 C82-C85），不含何杰金氏淋巴瘤；淋巴瘤新發人數則不在112年十大癌症附表內。AI 以非何杰金氏淋巴瘤死亡人數當主數字並標明範圍。',
    current:'非何杰金氏淋巴瘤死亡1,482人（114年）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'1,482人', value:'非何杰金氏淋巴瘤死亡（114年）', note:'衛福部死因統計（目前採用）'},
      {label:'未單獨列出', value:'何杰金氏淋巴瘤', note:'死因摘要表前15大癌症未列'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'淋巴瘤6大警訊：燒、腫、癢、汗、咳、瘦，別當成感冒',
    update_date:'2026/11/20',
    intro:'惡性淋巴瘤（淋巴癌）是淋巴系統的癌症。依衛生福利部114年死因統計，非何杰金氏淋巴瘤死亡1,482人，居癌症死因第11位，年齡標準化死亡率每十萬人2.9人、十年大致持平；112年癌症登記中，非何杰金氏淋巴瘤居男性癌症標準化發生率第10位。癌症希望基金會調查發現，43.3%病友確診前完全不知道淋巴瘤的警訊。',
    sections:[
      {heading:'淋巴瘤6大警訊',format:'table',table:TABLE},
      {heading:'為什麼容易被忽略',format:'bullets',items:[
        '淋巴瘤的症狀常像感冒或疲勞，且淋巴結腫大通常不會痛，容易被忽略。',
        '血液病學會醫師指出，夜間盜汗是較特別的警訊，有些病友會整條棉被都濕掉。',
        '血液病學會醫師提到，依國健署癌症登記資料，近20年淋巴瘤新診斷人數增加超過1倍，20-39歲年輕族群也有上升趨勢。'
      ]},
      {heading:'這樣做',format:'bullets',items:[
        '摸到不痛的腫塊持續變大，或警訊持續不改善，應到血液腫瘤科或內科就醫。',
        '確診後了解自己的淋巴瘤亞型，與醫師討論治療方式與追蹤計畫。',
        '治療期間依醫囑預防感染，有疑問主動和醫療團隊溝通。'
      ]}
    ],
    think_tank_view:'淋巴瘤的警訊都是很日常的不舒服，單獨出現一項不必驚慌，但若持續存在、或好幾項同時出現，就值得讓醫師評估。記住「燒腫癢汗咳瘦」，是給自己多一層保障。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數與排名引自衛福部114年死因統計並標明範圍與年份，警訊與調查標明為基金會與醫學會說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['114年非何杰金氏淋巴瘤死亡1,482人（死因統計）','6大警訊（癌症希望基金會，2026年記者會）'],
      layout_reason:'先用表格列出6大警訊，再說明為何易被忽略，最後給就醫行動。',
      tone:'專業易懂', tone_reason:'警訊需要具體列出。',
      to_verify:['淋巴瘤新發人數需查癌登年報全文','「近20年增加超過1倍」為醫師引述，未標起訖年','病友調查未標示調查年份']},
    decision_points:[DP_SCOPE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'脖子摸到不痛的腫塊、晚上流汗濕透？淋巴瘤6警訊',
    update_date:'2026/11/20',
    intro:'淋巴瘤又叫淋巴癌，114年有1,482人因非何杰金氏淋巴瘤過世。癌症希望基金會調查發現，有4成多的病友在確診前完全不知道淋巴瘤有哪些警訊。記住6個字：燒、腫、癢、汗、咳、瘦，就能多一分警覺。',
    sections:[
      {heading:'淋巴瘤6大警訊',format:'table',table:TABLE},
      {heading:'為什麼常被忽略？',format:'bullets',items:[
        '這些症狀很像感冒或太累，腫塊又不會痛。',
        '醫師說，晚上流汗流到整條被子都濕，是比較特別的警訊。',
        '醫師提到，年輕人得淋巴瘤的趨勢也在上升，不只是長輩的病。'
      ]},
      {heading:'可以這樣做',format:'bullets',items:[
        '腫塊一直變大，或這些症狀一直沒好，就去看醫生。',
        '確診後問清楚自己是哪一型，和醫師一起討論治療。',
        '治療中小心感染，有問題就問醫療團隊。'
      ]}
    ],
    think_tank_view:'把「燒腫癢汗咳瘦」這6個字分享給家人朋友，下次誰說「最近晚上一直流汗」「脖子有顆不痛的腫塊」，你就知道該提醒他去看醫生。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部並標明範圍與年份，警訊標明為基金會與醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以常被忽略的症狀切入，6字口訣好記。', tone:'生活親切', tone_reason:'給一般民眾與年輕族群閱讀。', to_verify:['年輕族群上升為醫師說明']},
    decision_points:[DP_SCOPE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'淋巴瘤：燒腫癢汗咳瘦，持續就醫',
    update_date:'2026/11/20',
    intro:'114年非何杰金氏淋巴瘤死亡1,482人。43.3%病友確診前不知警訊。',
    sections:[
      {heading:'6大警訊',format:'table',table:TABLE},
      {heading:'特點',format:'bullets',items:[
        '腫塊通常不痛。',
        '夜間盜汗是特別警訊。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '症狀持續就醫。',
        '確診後了解亞型。'
      ]}
    ],
    think_tank_view:'淋巴瘤警訊日常且不典型，記住6字口訣、持續症狀就醫。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊、特點、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['調查年份']},
    decision_points:[DP_SCOPE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'惡性淋巴瘤', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'記住淋巴瘤 6 大警訊', primary_visual:'43.3%', secondary_message:'4 成多病友確診前不知警訊', action_priority:'症狀持續就醫'},
    headline_hook:'像感冒卻一直不好？', headline_main:'淋巴瘤 6 大警訊', title_accent:'6 大警訊',
    hero_message:'燒腫癢汗咳瘦', hero_support:'癌症希望基金會推廣的淋巴瘤警訊口訣',
    knowledge_title:'6 大警訊', knowledge_note:'症狀持續不改善，**就醫評估**',
    knowledge_cards:[
      {label:'燒', icon:'check', lines:['不明原因發燒']},
      {label:'腫', icon:'search', lines:['無痛淋巴結腫大']},
      {label:'癢', icon:'check', lines:['持續搔癢']},
      {label:'汗', icon:'check', lines:['夜間盜汗']},
      {label:'咳', icon:'check', lines:['持續咳嗽']},
      {label:'瘦', icon:'waist', lines:['莫名體重減輕']}
    ],
    primary_stat:{value:'43.3%', label:'病友確診前完全不知道警訊', note:'癌症希望基金會病友調查（2026 年發布）'},
    secondary_stats:[
      {value:'1,482 人', label:'114 年非何杰金氏淋巴瘤死亡'},
      {value:'第 10 位', label:'男性癌症發生（112 年）'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'摸', text:'留意頸部、腋下不痛的腫塊'},
      {key:'醫', text:'警訊持續不改善就醫'},
      {key:'問', text:'確診後了解亞型與治療'},
      {key:'防', text:'治療中依醫囑預防感染'}
    ],
    carousel_suggestion:{reason:'若想把警訊、數據與治療分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'像感冒卻一直不好？', headline_main:'淋巴瘤 6 大警訊'},
      {layout_type:'data', headline_hook:'4 成多病友', headline_main:'確診前不知警訊'},
      {layout_type:'action', headline_hook:'確診之後', headline_main:'了解亞型、討論治療'}]},
    hashtags:['淋巴瘤','淋巴癌','血液腫瘤','夜間盜汗'],
    sources:['衛生福利部','癌症希望基金會','TVBS新聞網'],
    illustration_category:'general',
    illustration:{topic:'淋巴瘤警訊', audience:'青壯年與家人', scene:'一位青壯年在鏡子前摸頸部，旁邊的家人拿著手機準備幫忙掛號',
      emotion:'警覺、互相關心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young adult touching the side of their neck in front of a mirror while a family member holds a phone ready to book a doctor appointment, alert and caring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['6大警訊與病友調查（癌症希望基金會2026年記者會）','114年非何杰金氏淋巴瘤死亡1,482人'],
      layout_reason:'核心是認得 6 大警訊，選 knowledge：6 張警訊卡當主角，調查與死亡數據退到下方。',
      tone:'專業易懂', tone_reason:'警訊需清楚好記。',
      to_verify:['病友調查年份']},
    decision_points:[Object.assign({}, DP_SCOPE, {current:'1,482 人｜114 年非何杰金氏淋巴瘤死亡'})],
    content_check_note:'死亡人數引自衛福部並標明範圍，警訊與調查標明為基金會資料，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'惡性淋巴瘤',
    collect:{
      summary:'非何杰金氏淋巴瘤2025年死亡1,482人、居癌症死因第11位，男性發生居第10位；醫師指出近20年淋巴瘤新診斷人數倍增且年輕族群上升，但4成多病友確診前不知警訊，「燒腫癢汗咳瘦」是值得推廣的警訊口訣。',
      objective_data:[
        {item:'盛行率／發生率',desc:'2025年非何杰金氏淋巴瘤死亡1482人：依114年死因統計，居癌症死因第11位，男性881人、女性601人，年齡標準化死亡率每十萬人2.9人。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'年度趨勢方向',desc:'死亡人數十年增加約23%：非何杰金氏淋巴瘤死亡由2016年1203人增至2025年1482人，標準化死亡率由3.2降至2.9，人數增加主要與人口老化有關。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'43.3%病友確診前不知警訊：癌症希望基金會於2026年世界淋巴瘤日公布病友調查，並持續推廣「燒腫癢汗咳瘦」6大警訊口訣。',tag:'市場觀察',source:{name:'TVBS新聞網：一直感冒竟是淋巴癌！4成3病友確診前不知警訊',url:'https://health.tvbs.com.tw/cancer/365732'}},
        {item:'好發族群年齡層',desc:'近20年新診斷人數增加超過1倍：血液病學會醫師引述國健署癌症登記資料，20-39歲年輕族群發生率也呈上升趨勢（未標起訖年）。',tag:'市場觀察',source:{name:'TVBS新聞網：一直感冒竟是淋巴癌！4成3病友確診前不知警訊',url:'https://health.tvbs.com.tw/cancer/365732'}}
      ],
      product_view:['機會：淋巴瘤治療涉及化療、標靶與部分自費新藥，可作為癌症醫療保障的溝通情境。','機會：年輕族群上升，可作為青壯年檢視保障的切點。','風險：避免以自費新藥金額製造焦慮，或暗示特定保單可涵蓋所有自費治療。'],
      marketing_view:['機會：9月15日世界淋巴瘤日是固定檔期，6字口訣好記好傳播。','機會：「不痛的腫塊也要看」能破除常見迷思。','風險：警訊多為常見症狀，避免讓讀者過度焦慮自我診斷。'],
      alert_level:'low',
      alert_reason:'無政策事件，適合在世界淋巴瘤日以警訊衛教方式溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('癌症希望基金會調查發現，43.3%病友確診前完全不知道淋巴瘤的警訊','SOURCE_EVIDENCE','survey_unspecified',
          '調查未說明樣本數、調查期間與方法，屬基金會病友調查，不能代表全體病人。','medium','yes',
          '癌症希望基金會調查的樣本數與調查期間。','yes','confirm','數字引自媒體報導基金會記者會。',
          '癌症希望基金會病友調查發現，43.3%受訪病友確診前完全不知道淋巴瘤的警訊',['有4成多的病友在確診前完全不知道淋巴瘤有哪些警訊','43.3%病友確診前不知警訊']),
        F('近20年淋巴瘤新診斷人數增加超過1倍','SOURCE_EVIDENCE','secondary_citation',
          '醫師引述國健署資料，但未標明起訖年份與實際人數，且人數增加可能受人口老化影響。','medium','yes',
          '國健署癌症登記淋巴瘤新發人數的年度序列。','no','confirm','屬二手引述。',
          null),
        F('年輕人得淋巴瘤的趨勢也在上升','DATA_FACTUAL_ACCURACY','claim_without_figure',
          '「年輕族群上升」沒有提供數字或年份，讀者無法判斷幅度。','low','yes',
          '20-39歲淋巴瘤發生率的年度變化。','no','confirm','屬醫師說明。',
          null,['20-39歲年輕族群也有上升趨勢']),
        F('單獨出現一項不必驚慌','RISK_COMMUNICATION_SCOPE','reassurance_scope',
          '「單獨一項不必驚慌」可能讓讀者忽略持續存在的單一症狀（例如持續變大的無痛腫塊）；應強調「持續」比「項數」更重要。','low','no',
          null,'no','clarify','屬語氣平衡。',
          '單獨出現一項不必驚慌，但若持續不改善或腫塊持續變大')
      ],
      card:[
        F('病友確診前完全不知道警訊','SOURCE_EVIDENCE','survey_unspecified',
          '主數字為基金會病友調查，卡面未說明樣本與方法。','low','yes',
          '調查樣本數與期間。','yes','confirm','屬基金會調查。',
          '受訪病友確診前完全不知道警訊'),
        F('114 年非何杰金氏淋巴瘤死亡','MEDICAL_INTERPRETATION','scope_narrower_than_topic',
          '卡面主題是惡性淋巴瘤，但死亡數字只含非何杰金氏淋巴瘤。','low','no',
          null,'no','clarify','範圍已標明。',
          null)
      ]
    },
    title_alts:[
      '淋巴瘤6大警訊：燒、腫、癢、汗、咳、瘦，別當成感冒',
      '脖子摸到不痛的腫塊、晚上流汗濕透？淋巴瘤6警訊',
      '4成多病友確診前不知警訊：認識惡性淋巴瘤'
    ],
    card_title_alts:[
      ['像感冒卻一直不好？','淋巴瘤 6 大警訊'],
      ['燒腫癢汗咳瘦','記住淋巴瘤警訊'],
      ['不痛的腫塊','也要給醫師看']
    ],
    data_addon:[
      '114年死因統計：非何杰金氏淋巴瘤居男性癌症死因第9位（881人）、女性第9位（601人）。',
      '112年癌症登記：非何杰金氏淋巴瘤居男性癌症標準化發生率第10位。',
      '癌症希望基金會病友調查：50.5%病友不了解自己的淋巴瘤亞型名稱。'
    ],
    cta:'把「燒腫癢汗咳瘦」6個字傳給家人，誰有不痛的腫塊或夜間盜汗持續不好，就提醒他就醫。'
  });
})();
