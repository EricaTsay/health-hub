/* v6 示範主題：大腸癌（B2 癌症）
   查證日期：2026-11-20。數據來源：衛福部112年癌症登記報告新聞稿與附表（2025-12-30 公布）、衛福部114年死因統計摘要表（大腸癌死亡時間序列）、
   TVBS 2025-12-30（國健署112年癌登記者會說明篩檢早期比例）。
   參考方向：健康智庫〈大腸癌〉2022/02。 */
(function(){
  const REFS = [
    {title:'公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-84987-1.html'},
    {title:'112年國人十大癌症發生人數附表',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'112年國人癌症時鐘再快轉！肺癌連3年居首 每3分48秒一人罹癌',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/cancer/360004'}
  ];
  const TABLE = {headers:['公費糞便潛血檢查','內容'], rows:[
    ['一般民眾','45-74歲，每2年1次'],
    ['有家族史','40-44歲且父母、子女或兄弟姊妹曾患大腸癌，每2年1次'],
    ['檢查方式','在家採便，送回醫療院所檢驗'],
    ['陽性怎麼辦','應盡快接受大腸鏡檢查確認'],
    ['篩檢效益','每2年1次可降低40%大腸癌死亡、減少34%晚期發生']
  ]};
  const TAGS = ['大腸癌','糞便潛血檢查','大腸鏡','癌症篩檢','癌症防治'];

  const DP_INC = {id:'dp-crc-increase', type:'data_version', title:'大腸癌增加人數有兩個版本',
    desc:'部分媒體報導112年大腸癌新發人數較111年增加1,611人；依國健署附表，112年19,074人、111年17,643人，增加1,431人。AI 採用官方附表的數字。',
    current:'較111年增加1,431人（國健署附表）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'1,431人', value:'19,074 − 17,643', note:'國健署112年癌登附表（目前採用）'},
      {label:'1,611人', value:'媒體報導', note:'與附表數字相減不符'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'大腸癌一年新發逾1.9萬人：45歲起每2年1次糞便潛血檢查',
    update_date:'2026/11/20',
    intro:'依衛生福利部112年癌症登記報告，大腸癌新發19,074人，居國人癌症發生人數第2位，較111年增加1,431人，診斷年齡中位數67歲；在男性，大腸癌是標準化發生率第1位的癌症。114年死因統計中，結腸、直腸和肛門癌死亡7,146人，居癌症死因第3位。大腸癌多由息肉慢慢演變而來，定期篩檢能在早期甚至癌前病變階段發現。',
    sections:[
      {heading:'公費大腸癌篩檢怎麼做',format:'table',table:TABLE},
      {heading:'為什麼篩檢很重要',format:'bullets',items:[
        '國健署指出，經篩檢發現的大腸癌約55%為早期，5年存活率可超過9成；未經篩檢者確診時早期比例不到3成。',
        '糞便潛血檢查陽性者，務必接受大腸鏡檢查，才能確認是否有息肉或腫瘤，並可同時切除息肉。',
        '有排便習慣改變、血便、不明原因貧血或體重減輕，不論年齡都應就醫，不必等篩檢。'
      ]},
      {heading:'日常預防',format:'bullets',items:[
        '多吃蔬菜水果與全穀類等高纖食物，少吃紅肉與加工肉品。',
        '規律運動、維持健康體重。',
        '戒菸、避免過量飲酒。',
        '可用健保快易通APP或國健署癌症篩檢網站查詢資格。'
      ]}
    ],
    think_tank_view:'大腸癌是少數「看得到前身」的癌症，息肉從出現到變成癌症通常需要多年，定期篩檢正好卡在這段時間。糞便潛血檢查在家就能採檢，陽性後的大腸鏡更是關鍵一步，別因為怕麻煩而錯過。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'發生與死亡人數引自衛福部112年癌症登記與114年死因統計並標明年份，篩檢效益引自衛福部新聞稿，早期比例標明為國健署說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['112年大腸癌新發19,074人（癌症登記附表）','114年死亡7,146人（死因統計）'],
      layout_reason:'先用表格說明篩檢資格與方式，再強調篩檢與陽性追蹤的重要，最後給日常預防。',
      tone:'專業易懂', tone_reason:'篩檢資格需要精確。',
      to_verify:['「55%早期」「不到3成」為國健署記者會說明（媒體轉述）']},
    decision_points:[DP_INC]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'在家採便就能篩大腸癌！45歲起每2年1次',
    update_date:'2026/11/20',
    intro:'大腸癌一年有19,074人確診，是台灣第2常見的癌症，也是男性最常見的癌症（依標準化發生率）。聽起來很可怕，但大腸癌大多是息肉慢慢變來的，只要定期篩檢，很有機會在變成癌症前就發現。現在45到74歲每2年就能免費做1次糞便潛血檢查，在家採便就好。',
    sections:[
      {heading:'免費篩檢這樣做',format:'table',table:TABLE},
      {heading:'篩檢陽性，別拖',format:'bullets',items:[
        '國健署說，靠篩檢發現的大腸癌，約一半以上是早期；沒篩檢的人，確診時早期的不到3成。',
        '檢查結果陽性，一定要去做大腸鏡，看到息肉還可以當場切掉。',
        '大便習慣改變、有血便、莫名貧血或變瘦，不管幾歲都要去看醫生。'
      ]},
      {heading:'平常吃動這樣顧',format:'bullets',items:[
        '多吃蔬菜水果和全穀類，少吃香腸、培根這類加工肉。',
        '每天動一動，體重控制好。',
        '少喝酒、不抽菸。',
        '打開健保快易通APP，查查自己能不能篩。'
      ]}
    ],
    think_tank_view:'很多人篩出陽性後因為怕痛、怕麻煩而沒有去做大腸鏡，其實這才是最關鍵的一步。家裡有45歲以上的家人，記得提醒他把採便管領回家，陽性就陪他去做大腸鏡。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部癌症登記與國健署說明並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「在家就能篩」降低門檻，帶出陽性追蹤與日常預防。', tone:'生活親切', tone_reason:'鼓勵一般民眾參與篩檢。', to_verify:['早期比例為記者會說明']},
    decision_points:[DP_INC]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'大腸癌：45-74歲每2年1次糞便潛血',
    update_date:'2026/11/20',
    intro:'112年大腸癌新發19,074人，居癌症發生第2位；114年死亡7,146人。每2年1次糞便潛血檢查可降低40%死亡。',
    sections:[
      {heading:'篩檢資格',format:'table',table:TABLE},
      {heading:'關鍵',format:'bullets',items:[
        '陽性務必做大腸鏡。',
        '有血便或排便改變立即就醫。'
      ]},
      {heading:'預防',format:'bullets',items:[
        '高纖飲食、少加工肉品。',
        '規律運動、戒菸限酒。'
      ]}
    ],
    think_tank_view:'大腸癌可從息肉階段發現，篩檢加上陽性後的大腸鏡是最有效的防線。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部癌症登記與死因統計並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為資格、關鍵、預防三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['篩檢效益為群體層次']},
    decision_points:[DP_INC]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'大腸癌', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'大腸癌一年新發逾 1.9 萬人', primary_visual:'約 1.9 萬人', secondary_message:'每 2 年篩檢可降低 40% 死亡', action_priority:'45–74 歲糞便潛血檢查、陽性做大腸鏡'},
    headline_hook:'在家採便就能篩', headline_main:'大腸癌篩檢 4 步驟', title_accent:'4 步驟',
    hero_message:'一年新發約 1.9 萬人', hero_support:'居癌症發生人數第 2 位（112 年癌症登記）',
    primary_stat:{value:'約 1.9 萬人', label:'112 年大腸癌新發個案', note:'衛福部癌症登記：19,074 人｜診斷年齡中位數 67 歲'},
    action_title:'篩檢這樣做',
    action_cards:[
      {key:'領', text:'45–74 歲每 2 年領 1 次採便管'},
      {key:'採', text:'在家採便，送回醫療院所檢驗'},
      {key:'鏡', text:'結果陽性，盡快做大腸鏡'},
      {key:'吃', text:'高纖飲食、少加工肉、規律運動'}
    ],
    notice:'每 2 年 1 次糞便潛血檢查，可降低 **40%** 大腸癌死亡。',
    carousel_suggestion:{reason:'若想把趨勢、篩檢與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'大腸癌居第 2 位', headline_main:'一年新發約 1.9 萬人'},
      {layout_type:'action', headline_hook:'在家採便', headline_main:'大腸癌篩檢 4 步驟'},
      {layout_type:'knowledge', headline_hook:'這些症狀要就醫', headline_main:'血便、排便習慣改變'}]},
    hashtags:['大腸癌','糞便潛血檢查','大腸鏡','癌症篩檢'],
    sources:['衛生福利部','衛生福利部國民健康署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'大腸癌篩檢', audience:'45 歲以上中壯年', scene:'一位中年男性在藥局櫃台領取糞便潛血採檢管，藥師微笑說明使用方式',
      emotion:'輕鬆、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged man picking up a stool test kit at a clinic counter while a pharmacist smiles and explains how to use it, relaxed mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['112年大腸癌新發19,074人（癌症登記）','篩檢效益引自衛福部112年癌登新聞稿'],
      layout_reason:'大腸癌的核心訊息是「篩檢簡單、陽性要追」，選 action：4 個篩檢步驟當主角，新發人數退到背景。',
      tone:'專業易懂', tone_reason:'篩檢流程需清楚。',
      to_verify:['40%為群體層次效益']},
    decision_points:[Object.assign({}, DP_INC, {current:'較 111 年增加 1,431 人（附表）'})],
    content_check_note:'新發人數引自衛福部112年癌症登記並標明年份，篩檢效益引自衛福部，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'大腸癌',
    collect:{
      summary:'大腸癌112年新發逾1.9萬人、居癌症發生第2位，男性標準化發生率連續居首；死亡居癌症第3位。糞便潛血篩檢可降低40%死亡，但陽性後的大腸鏡追蹤是關鍵，是兼具篩檢政策與預防價值的長期溝通議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'新發大腸癌約1.9萬人：依2025年12月公布的112年癌症登記，大腸癌新發19,074人，居癌症發生人數第2位，診斷年齡中位數67歲，標準化發生率每十萬人43.1人。',tag:'官方統計',source:{name:'衛生福利部：112年國人十大癌症發生人數附表',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'}},
        {item:'年度趨勢方向',desc:'死亡人數增加2.0%：2025年結腸、直腸和肛門癌死亡7,146人，較2024年7,007人增加，居癌症死因第3位，標準化死亡率十年來大致持平（每十萬人約14人）。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'每2年篩檢可降低40%死亡：公費糞便潛血檢查對象為45-74歲民眾，及40-44歲有大腸癌家族史者，每2年1次，並可減少34%晚期大腸癌。',tag:'官方統計',source:{name:'衛生福利部：公布112年國人癌症登記資料分析結果',url:'https://mohw.gov.tw/cp-16-84987-1.html'}},
        {item:'好發族群年齡層',desc:'約55%篩檢個案為早期：國健署說明，經篩檢發現的大腸癌約55%為早期、5年存活率逾9成，未篩檢者確診時早期比例不到3成。',tag:'市場觀察',source:{name:'TVBS新聞網：112年國人癌症時鐘再快轉',url:'https://health.tvbs.com.tw/cancer/360004'}}
      ],
      product_view:['機會：大腸癌為常見癌症保障需求，早期手術與晚期化療、標靶治療的費用差異，可協助保戶檢視保障缺口。','機會：篩檢流程簡單，適合設計採檢提醒與陽性追蹤的健康管理服務。','風險：避免暗示篩檢可保證不罹癌，或把篩檢結果與承保條件連動。'],
      marketing_view:['機會：「在家採便就能篩」降低參與門檻，45歲剛納入篩檢的族群是溝通重點。','機會：陽性後未做大腸鏡是常見斷點，可設計家人互相提醒的內容。','風險：避免以排便、腸道等畫面造成不適，宜以清爽、生活化的方式呈現。'],
      alert_level:'medium',
      alert_reason:'新發人數持續增加，篩檢政策成熟且資格明確，適合納入年度溝通規劃。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('每2年1次可降低40%大腸癌死亡、減少34%晚期發生','MEDICAL_INTERPRETATION','population_benefit_as_individual',
          '40%與34%是群體層次的研究結果，讀者可能理解為個人做了篩檢就能降低40%死亡風險；且效益建立在陽性後完成大腸鏡的前提上。','medium','no',
          null,'no','clarify','數據引自衛福部，屬表達方式調整。',
          '每2年1次並在陽性後完成大腸鏡，可在群體層次降低40%大腸癌死亡、減少34%晚期發生',['可降低40%死亡']),
        F('經篩檢發現的大腸癌約55%為早期','SOURCE_EVIDENCE','secondary_citation',
          '數字來自國健署記者會說明的媒體轉述，未附原始資料與統計年份。','low','yes',
          '國健署篩檢發現大腸癌期別分布的原始資料。','yes','confirm','數字可能正確，但屬二手引述。',
          null,['靠篩檢發現的大腸癌，約一半以上是早期']),
        F('也是男性最常見的癌症（依標準化發生率）','DATA_FACTUAL_ACCURACY','ranking_basis',
          '大腸癌在男性是「標準化發生率」第1位，但以男女合計的新發「人數」則是第2位（肺癌第1）；同一段落混用兩種排名依據，讀者可能混淆。','low','no',
          null,'no','clarify','排名正確，屬口徑說明。',
          '在男性中，大腸癌是標準化發生率最高的癌症'),
        F('少吃紅肉與加工肉品','SOURCE_EVIDENCE','advice_without_basis',
          '飲食建議沒有引用國健署或其他來源，讀者無法判斷依據。','low','yes',
          '國健署大腸癌預防飲食衛教資料。','no','confirm','屬常見衛教建議，未附出處。',
          null,['少吃香腸、培根這類加工肉','少加工肉品'])
      ],
      card:[
        F('可降低 **40%** 大腸癌死亡','MEDICAL_INTERPRETATION','population_benefit_as_individual',
          '卡面把群體效益放大成粗體重點，讀者可能理解為個人保證效果。','medium','no',
          null,'no','clarify','數據引自衛福部。',
          '在群體層次可降低 **40%** 大腸癌死亡'),
        F('高纖飲食、少加工肉、規律運動','SOURCE_EVIDENCE','advice_without_basis',
          '卡面飲食建議未標示來源。','low','no',
          null,'no','clarify','屬常見衛教建議。',
          null)
      ]
    },
    title_alts:[
      '大腸癌一年新發逾1.9萬人：45歲起每2年1次糞便潛血檢查',
      '在家採便就能篩大腸癌！45歲起每2年1次',
      '大腸癌篩檢陽性怎麼辦？大腸鏡是關鍵一步'
    ],
    card_title_alts:[
      ['在家採便就能篩','大腸癌篩檢 4 步驟'],
      ['大腸癌居第 2 位','45 歲起每 2 年篩 1 次'],
      ['篩檢陽性別拖','盡快做大腸鏡']
    ],
    data_addon:[
      '114年死因統計：大腸癌死亡男性4,103人、女性3,043人，男女皆居癌症死因第3位。',
      '112年大腸癌標準化發生率每十萬人43.1人，較111年增加2.0人。',
      '大腸癌死亡人數由2016年5,990人增加至2025年7,146人，標準化死亡率由15.3降至14.2。'
    ],
    cta:'今天就提醒家中45歲以上的家人，查一下上次做糞便潛血檢查的時間，該做就去領採便管。'
  });
})();
