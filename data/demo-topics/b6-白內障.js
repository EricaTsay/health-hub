/* v6 示範主題：白內障（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-20。數據來源：商業周刊 2025-09-05（良醫健康網轉載，引述國健署：2025年5月白內障就醫人數、60歲以上比例）、
   TVBS健康2.0 2024-10-09（中華民國眼科醫學會理事長、祕書長受訪）、衛福部 114-09-19 學齡前兒童視力篩檢新聞稿。
   查無國健署或健保署官網直接公布的白內障就醫人數與手術量最新統計。
   參考方向：健康智庫〈白內障〉2022/06、〈眼部治療手術－白內障手術〉2026/02。 */
(function(){
  const REFS = [
    {title:'台灣青光眼人數成長22%！醫：失明不可逆，「4高風險族群」半年做一次檢查',source:'商業周刊（良醫健康網授權轉載）',url:'https://www.businessweekly.com.tw/style/blog/3019392'},
    {title:'白內障危機大！視力心情都變差 近視逾500度小心 有人38歲就白內障',source:'TVBS健康2.0',url:'https://health.tvbs.com.tw/nutrition/350134'},
    {title:'學齡前兒童視力篩檢 近視防治向下扎根',source:'衛生福利部',url:'https://mohw.gov.tw/cp-7173-83963-1.html'}
  ];
  const TABLE = {headers:['警訊','常見表現'], rows:[
    ['視線模糊','看東西像隔著一層霧，顏色變得偏黃或灰暗'],
    ['怕光、眩光','對陽光或燈光敏感，夜間車燈周圍出現光暈'],
    ['需要更亮的光','室內閱讀、做家事時需要比以前更明亮的燈'],
    ['度數變化快','眼鏡度數短期內改變，換了眼鏡仍看不清楚']
  ]};
  const TAGS = ['白內障','白內障手術','人工水晶體','眼睛保健','高度近視'];

  const DP_COUNT = {id:'dp-cat-count', type:'data_scope', title:'「110萬人」的出處層級',
    desc:'「截至2025年5月白內障就醫人數突破110萬人」出自商業周刊轉載文章，文中寫是國健署資料統計，但國健署官網未查到原始表；AI 沒有替你決定是否沿用這個數字。',
    current:'就醫人數逾110萬人（2025年5月，媒體引述國健署）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'逾110萬人', value:'白內障就醫人數', note:'商業周刊2025年引述國健署（目前採用）'},
      {label:'近22萬件', value:'白內障手術量', note:'健保署106年統計（媒體引述，年份較舊，未採用）'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'白內障：視線霧霧、怕光別硬撐，手術是唯一有效治療',
    update_date:'2026/11/20',
    intro:'白內障是眼睛的水晶體隨年齡老化，由清澈變得混濁、硬化，使影像模糊、對比下降。據商業周刊2025年引述國健署資料，截至2025年5月，台灣白內障就醫人數已突破110萬人，60歲以上族群罹患白內障者高達80%。中華民國眼科醫學會祕書長受訪指出，高度近視可能使白內障提早7到8年發生，年輕族群也不能輕忽。',
    sections:[
      {heading:'白內障的4個警訊',format:'table',table:TABLE},
      {heading:'治療與手術',format:'bullets',items:[
        '醫師指出，目前沒有任何眼藥水、注射劑或保健食品可以治療白內障，唯一直接有效的方法是手術摘除混濁水晶體、置換人工水晶體。',
        '是否需要手術，取決於視力是否影響生活；拖延過久可能使水晶體硬化，增加手術難度。',
        '人工水晶體有健保給付的單焦點鏡片，也有自費的多焦點、散光矯正等選項，術前應與醫師討論生活需求與費用。'
      ]},
      {heading:'日常保護眼睛',format:'bullets',items:[
        '外出配戴可阻擋紫外線的太陽眼鏡與帽子。',
        '控制血糖、戒菸；長期使用類固醇者應定期眼科追蹤。',
        '高度近視者、糖尿病患者及60歲以上長者，建議定期接受眼科檢查。'
      ]}
    ],
    think_tank_view:'白內障幾乎是每個人都會遇到的老化現象，關鍵不在「會不會」，而在「什麼時候處理」。當視力開始影響開車、閱讀或行走安全，就是和眼科醫師討論手術的時機；也提醒家中長輩，視線模糊不只是「老了」，看清楚也能降低跌倒風險。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'就醫人數標明為媒體引述國健署並標示時點，醫師說法標明身分，未使用療效保證用語，未推薦特定水晶體品牌或醫療院所。',
    ai_rationale:{basis:['沿用步驟1洞察：白內障就醫人數逾110萬人（2025年5月，商業周刊引述國健署）','高度近視提早發生取自眼科醫學會祕書長受訪'],
      layout_reason:'先用表格讓讀者對照4個警訊，再說明手術是唯一有效治療與水晶體選擇，最後給日常保護做法。',
      tone:'專業易懂', tone_reason:'需破除「眼藥水可治療白內障」的迷思。',
      to_verify:['110萬人為媒體引述國健署，原始統計待查','60歲以上80%的定義（晶體混濁或確診）未說明']},
    decision_points:[DP_COUNT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'看東西霧霧的、晚上開車好刺眼？可能是白內障',
    update_date:'2026/11/20',
    intro:'白內障就像相機鏡頭慢慢起霧，是眼睛裡的水晶體老化變混濁。商業周刊2025年引述國健署資料，台灣白內障就醫人數已超過110萬人，60歲以上的人有8成都有白內障。高度近視的人還可能提早7到8年出現，年輕人也要留意。',
    sections:[
      {heading:'這4個變化要留意',format:'table',table:TABLE},
      {heading:'白內障要怎麼治療？',format:'bullets',items:[
        '醫師說，眼藥水、保健食品都治不好白內障，唯一有效的是手術換上人工水晶體。',
        '看不清楚已經影響生活時，就可以和醫師討論手術時機，拖太久反而比較難開。',
        '健保有給付基本的人工水晶體，也有自費的多焦點等選擇，先想清楚自己的用眼需求再決定。'
      ]},
      {heading:'平常這樣顧眼睛',format:'bullets',items:[
        '出門戴太陽眼鏡和帽子。',
        '控制血糖、不抽菸；長期用類固醇要定期看眼科。',
        '爸媽60歲以上、自己高度近視或有糖尿病，記得定期檢查眼睛。'
      ]}
    ],
    think_tank_view:'很多長輩覺得看不清楚是年紀大了，忍著不處理。其實白內障手術已經很普遍，看得清楚，走路更安全、生活也更開心。下次回家，陪爸媽聊聊最近看東西清不清楚吧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明為媒體引述國健署並標示時點，語氣親切但未淡化手術評估，未使用療效保證用語，未推薦特定商品或院所。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以生活中看不清楚的情境帶出警訊、治療與保健。', tone:'生活親切', tone_reason:'給長輩與子女閱讀。', to_verify:['110萬人原始統計待查']},
    decision_points:[DP_COUNT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'白內障：4個警訊＋治療重點',
    update_date:'2026/11/20',
    intro:'據媒體引述國健署資料，截至2025年5月台灣白內障就醫人數逾110萬人，60歲以上約8成有白內障。手術是唯一有效治療。',
    sections:[
      {heading:'4個警訊',format:'table',table:TABLE},
      {heading:'治療重點',format:'bullets',items:[
        '眼藥水、保健食品無法治療白內障。',
        '影響生活時與醫師討論手術時機。',
        '人工水晶體有健保與自費選項。'
      ]},
      {heading:'日常保護',format:'bullets',items:[
        '戴太陽眼鏡、控制血糖、戒菸。',
        '高度近視與60歲以上定期檢查。'
      ]}
    ],
    think_tank_view:'白內障是常見的老化現象；視力影響生活時就該評估手術，看清楚也能降低跌倒風險。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明為媒體引述國健署，未使用療效保證用語，未推薦特定商品或院所。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊、治療、保護三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['110萬人原始統計待查']},
    decision_points:[DP_COUNT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'白內障', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'60 歲以上約 8 成有白內障', primary_visual:'逾 110 萬人', secondary_message:'手術是唯一有效治療', action_priority:'認得警訊、定期檢查、適時手術'},
    headline_hook:'看東西霧霧的？', headline_main:'白內障 4 個警訊', title_accent:'4 個警訊',
    hero_message:'60 歲以上約 8 成', hero_support:'有白內障（媒體引述國健署資料）',
    knowledge_title:'4 個警訊', knowledge_note:'影響生活時，**與眼科醫師討論手術**',
    knowledge_cards:[
      {label:'視線模糊', icon:'search', lines:['像隔著一層霧','顏色偏黃灰暗']},
      {label:'怕光眩光', icon:'check', lines:['夜間車燈有光暈']},
      {label:'需要更亮', icon:'home', lines:['閱讀需要更亮的燈']},
      {label:'度數變快', icon:'report', lines:['換了眼鏡仍看不清']}
    ],
    primary_stat:{value:'逾 110 萬人', label:'白內障就醫人數', note:'截至 2025 年 5 月（商業周刊引述國健署）'},
    secondary_stats:[
      {value:'7–8 年', label:'高度近視可能提早發生'},
      {value:'約 8 成', label:'60 歲以上有白內障'}
    ],
    action_title:'這樣保護眼睛',
    action_cards:[
      {key:'檢', text:'60 歲以上、高度近視定期眼科檢查'},
      {key:'術', text:'影響生活時與醫師討論手術時機'},
      {key:'遮', text:'外出戴太陽眼鏡與帽子'},
      {key:'控', text:'控制血糖、戒菸'}
    ],
    carousel_suggestion:{reason:'若想把警訊、手術與水晶體選擇分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'看東西霧霧的？', headline_main:'白內障 4 個警訊'},
      {layout_type:'knowledge', headline_hook:'白內障手術', headline_main:'人工水晶體怎麼選'},
      {layout_type:'action', headline_hook:'日常保護', headline_main:'顧眼睛 4 件事'}]},
    hashtags:['白內障','白內障手術','眼睛保健','高齡健康'],
    sources:['國民健康署（媒體引述）','中華民國眼科醫學會（媒體受訪）'],
    illustration_category:'elderly-care',
    illustration:{topic:'白內障', audience:'60 歲以上長輩與子女', scene:'一位長者戴著老花眼鏡瞇眼看報紙，女兒在旁邊拿著眼科門診預約單',
      emotion:'關心、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult squinting at a newspaper while their adult daughter holds an eye clinic appointment card beside them, caring and reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：白內障就醫人數逾110萬人（2025年5月，媒體引述國健署）'],
      layout_reason:'選 knowledge：4 個警訊放中段，就醫人數退到下方，最後給 4 個保護行動。',
      tone:'專業易懂', tone_reason:'破除迷思、鼓勵適時手術。',
      to_verify:['110萬人原始統計待查']},
    decision_points:[Object.assign({}, DP_COUNT, {current:'逾 110 萬人（2025 年 5 月，媒體引述國健署）'})],
    content_check_note:'數字標明為媒體引述國健署並標示時點，未使用療效保證用語，未推薦特定商品或院所。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'白內障',
    collect:{
      summary:'白內障是高齡最常見的眼睛老化疾病，就醫人數已破百萬，且高度近視使發病提早；國健署2025年起向下推動學齡前視力篩檢，「認得警訊、適時手術、從小防近視」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'逾110萬人因白內障就醫：商業周刊2025年9月轉載文章引述國健署資料，截至2025年5月台灣白內障就醫人數已突破110萬人（國健署官網未查到原始表）。',tag:'市場觀察',source:{name:'商業周刊：台灣青光眼人數成長22%！醫：失明不可逆',url:'https://www.businessweekly.com.tw/style/blog/3019392'}},
        {item:'年度趨勢方向',desc:'高度近視可能使白內障提早7到8年發生：中華民國眼科醫學會祕書長2024年受訪指出，近視族群白內障年輕化，臨床已見38歲個案。',tag:'市場觀察',source:{name:'TVBS健康2.0：白內障危機大！有人38歲就白內障',url:'https://health.tvbs.com.tw/nutrition/350134'}},
        {item:'政策動向',desc:'12個縣市試辦學齡前兒童視力篩檢：國健署114學年度起由眼科醫師到幼兒園為大班兒童做散瞳檢查，署長指出及早防治近視可降低未來白內障、青光眼等風險。',tag:'官方統計',source:{name:'衛生福利部：學齡前兒童視力篩檢 近視防治向下扎根',url:'https://mohw.gov.tw/cp-7173-83963-1.html'}},
        {item:'好發族群年齡層',desc:'60歲以上約8成有白內障：同一篇商業周刊轉載文章引述國健署資料，60歲以上族群患白內障者高達80%，高度近視、糖尿病與長期使用類固醇者為高風險族群。',tag:'市場觀察',source:{name:'商業周刊：台灣青光眼人數成長22%！醫：失明不可逆',url:'https://www.businessweekly.com.tw/style/blog/3019392'}}
      ],
      product_view:['機會：白內障手術普遍且常涉及自費水晶體差額，適合說明醫療費用與實支實付保障的差異。','機會：視力與跌倒、失能相關，可連結熟齡健康管理服務。','風險：避免推薦特定水晶體或院所，不暗示手術效果保證；理賠依條款與實際醫療內容認定。'],
      marketing_view:['機會：每年10月第2個星期四世界視覺日是固定溝通檔期。','機會：「陪爸媽檢查眼睛」適合子女世代的情感溝通。','風險：避免把自費水晶體寫成必要選項，或以「年輕化」製造焦慮。'],
      alert_level:'low',
      alert_reason:'屬長期高齡健康議題，無急迫政策事件；適合在世界視覺日前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('截至2025年5月，台灣白內障就醫人數已突破110萬人','SOURCE_EVIDENCE','secondary_citation',
          '文中已註明是商業周刊引述國健署，但國健署與健保署官網都查不到這組數字的原始統計，且「就醫人數」的計算口徑（年度或累計）未說明。','medium','yes',
          '健保署或國健署公布的白內障就醫人數原始統計與口徑。','yes','confirm','數字本身未必有誤，屬二手引述。',
          '截至2025年5月，台灣白內障就醫人數已突破110萬人（媒體引述，原始統計待確認）',
          ['台灣白內障就醫人數已超過110萬人','截至2025年5月台灣白內障就醫人數逾110萬人']),
        F('60歲以上族群罹患白內障者高達80%','DATA_FACTUAL_ACCURACY','definition_unstated',
          '未說明「罹患」的定義（水晶體有混濁即算，或需治療），讀者可能以為8成長輩都需要手術。','low','no',
          null,'no','clarify','屬定義說明問題。',
          '60歲以上族群約80%有不同程度的水晶體混濁（不一定需要手術）',
          ['60歲以上的人有8成都有白內障','60歲以上約8成有白內障']),
        F('唯一直接有效的方法是手術','MEDICAL_INTERPRETATION','absolute_statement',
          '說法來自醫師受訪且符合醫學共識，但「唯一」語氣絕對；可補充早期可先以配鏡改善生活，再評估手術時機。','low','no',
          null,'no','clarify','屬表達完整度問題。',
          '目前能根本處理白內障的方法是手術；早期可先調整眼鏡度數改善生活',
          ['唯一有效的是手術']),
        F('高度近視可能使白內障提早7到8年發生','SOURCE_EVIDENCE','expert_opinion_as_fact',
          '數字出自醫學會祕書長受訪，未附研究出處；文中只寫「受訪指出」，讀者難以判斷是研究結果或臨床觀察。','low','no',
          null,'no','clarify','說法合理但未見原始研究。',
          '高度近視可能使白內障提早發生（醫師臨床觀察約7到8年）',
          ['高度近視的人還可能提早7到8年出現'])
      ],
      card:[
        F('有白內障（媒體引述國健署資料）','DATA_FACTUAL_ACCURACY','definition_unstated',
          '「有白內障」未說明程度，讀者可能誤以為 8 成長輩都需要手術。','low','no',
          null,'no','clarify','屬定義說明。',
          '有不同程度白內障（媒體引述國健署資料）'),
        F('白內障就醫人數','SOURCE_EVIDENCE','secondary_citation',
          '主數字來源為媒體引述，卡面讀者會以為是官方公告數字。','medium','yes',
          '健保署白內障就醫人數原始統計。','yes','confirm','屬二手引述。',
          '白內障就醫人數（媒體引述）')
      ]
    },
    title_alts:[
      '白內障：視線霧霧、怕光別硬撐，手術是唯一有效治療',
      '看東西霧霧的、晚上開車好刺眼？可能是白內障',
      '60歲以上約8成有白內障：4個警訊與手術時機'
    ],
    card_title_alts:[
      ['看東西霧霧的？','白內障 4 個警訊'],
      ['晚上開車好刺眼？','認識白內障'],
      ['60 歲以上約 8 成','白內障保健重點']
    ],
    data_addon:[
      '中華民國眼科醫學會理事長2024年受訪：研究顯示近視每增加100度，白內障與青光眼風險約增加20%。',
      '醫師提醒：目前沒有眼藥水、注射劑或保健食品可以治療白內障。',
      '國健署114學年度起於12個縣市試辦學齡前兒童散瞳視力篩檢。'
    ],
    cta:'這個週末陪家中60歲以上的長輩做一次視力自我檢查，若看東西霧霧或怕光，就預約眼科門診。'
  });
})();
