/* v6 示範主題：妊娠糖尿病（B7 女性・男性・生育與兒童）
   查證日期：2026-11-20。數據來源：衛福部／國健署新聞稿（2023-11-14、2024-03-05、2025-09-02）。
   參考方向：健康智庫〈妊娠期糖尿病血糖試紙 放寬給付〉2023/08。 */
(function(){
  const REFS = [
    {title:'每6位孕媽咪 有1位妊娠糖尿病 掌握控糖4要訣 降低風險守護母嬰健康',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-76586-1.html'},
    {title:'孕媽咪5招遠離妊娠糖尿病 控糖輕鬆零負擔',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/fp-16-77840-1.html'},
    {title:'14次公費產檢 給媽咪與寶寶最安心的守護',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-83667-1.html'}
  ];
  const TABLE = {headers:['控糖要訣','怎麼做'], rows:[
    ['健康體重','依孕前BMI規劃熱量，可諮詢營養師'],
    ['均衡飲食','六大類均衡，選糙米、地瓜、南瓜等優質澱粉，少量多餐'],
    ['適度運動','每週3-4次，暖身10分鐘後進行30分鐘中等強度有氧運動'],
    ['監測血糖','空腹60-95、餐後1小時60-140、餐後2小時60-120 mg/dl']
  ]};
  const TAGS = ['妊娠糖尿病','孕期控糖','產前檢查','孕婦營養','女性健康'];

  const DP_RATE = {id:'dp-gdm-rate', type:'data_scope', title:'17.2%是「篩檢異常率」',
    desc:'國健署統計2021年7月至2023年6月公費篩檢超過23萬人次、初步異常率約17.2%，新聞稿標題寫成「每6位孕媽咪有1位妊娠糖尿病」。異常率是篩檢結果，不完全等同確診盛行率，AI 沒有替你改寫成盛行率。',
    current:'公費篩檢初步異常率約17.2%（國健署，2021/7–2023/6）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約 17.2%', value:'2021/7–2023/6', note:'公費篩檢初步異常率，超過23萬人次（目前採用）'},
      {label:'約 18%', value:'2021/7–2022/4', note:'國健署2022年新聞稿，補助逾8萬人時的初步數字'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'妊娠糖尿病篩檢怎麼做？24-28週公費篩檢，異常率約17.2%',
    update_date:'2026/11/20',
    intro:'國民健康署自2021年7月起於妊娠第24至28週提供公費妊娠糖尿病篩檢，統計至2023年6月已超過23萬人次受檢，初步異常率約17.2%。國健署指出，妊娠糖尿病孕婦發生妊娠高血壓的風險約為1.9倍、胎兒過大1.6倍，產後也較容易發生第二型糖尿病。本文整理篩檢方式、對母嬰的影響與控糖4要訣。',
    sections:[
      {heading:'國健署控糖4要訣',format:'table',table:TABLE},
      {heading:'篩檢怎麼做',format:'bullets',items:[
        '妊娠第24至28週，攜帶孕婦健康手冊及健保卡至產檢院所。',
        '檢驗前禁食8小時，測空腹血糖後喝下含75公克葡萄糖的糖水，再測1小時及2小時後血糖，共3次。',
        '這項篩檢已納入14次公費產檢，免另外申請。'
      ]},
      {heading:'對母嬰的影響',format:'bullets',items:[
        '國健署分析，妊娠糖尿病孕婦妊娠高血壓風險1.9倍、早產與引產各1.4倍、剖腹產1.3倍。',
        '胎兒過大風險1.6倍，新生兒入住加護病房1.4倍，也可能有肩難產、新生兒低血糖、黃疸等風險。',
        '國健署引述國外文獻，妊娠糖尿病婦女日後罹患第二型糖尿病的風險較一般婦女增加10倍。'
      ]}
    ],
    think_tank_view:'妊娠糖尿病常常沒有症狀，篩檢是唯一能及早發現的方式。好消息是，多數孕媽咪只要調整飲食、規律運動、監測血糖，就能把血糖控制好；產後也別忘了持續追蹤，因為這是提早預防第二型糖尿病的重要提醒。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'篩檢人次與異常率引自國健署並標明期間，風險倍數標明國健署分析與國外文獻，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['公費篩檢23萬人次、異常率17.2%（國健署2023-11-14新聞稿，2021/7–2023/6資料）','風險倍數取自同一新聞稿','10倍取自國健署2024-03-05新聞稿引述國外文獻'],
      layout_reason:'先用表格給控糖做法，再說明篩檢流程，最後說明對母嬰的影響。',
      tone:'專業易懂', tone_reason:'孕婦需要具體可執行的控糖資訊。',
      to_verify:['17.2%為2021/7–2023/6資料，國健署未發布更新一期','異常率不等同確診盛行率']},
    decision_points:[DP_RATE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'懷孕24週要喝糖水？妊娠糖尿病篩檢與控糖4招',
    update_date:'2026/11/20',
    intro:'懷孕到了24至28週，產檢時醫師會請妳空腹喝一杯糖水、抽3次血，這就是妊娠糖尿病篩檢。國健署統計，接受公費篩檢的孕媽咪中，大約每6位就有1位結果異常。別緊張，多數人只要調整飲食和運動，就能把血糖顧好。',
    sections:[
      {heading:'控糖4招，孕期也能吃得安心',format:'table',table:TABLE},
      {heading:'篩檢當天怎麼準備？',format:'bullets',items:[
        '前一晚開始空腹8小時。',
        '帶孕婦健康手冊和健保卡，公費產檢就有，不用另外申請。',
        '喝完75公克糖水後，1小時、2小時各再抽一次血。'
      ]},
      {heading:'為什麼要篩？',format:'bullets',items:[
        '血糖太高，寶寶可能長得太大、生產時比較辛苦。',
        '媽媽得到妊娠高血壓的機會也比較高。',
        '產後要持續追蹤血糖，因為以後比較容易得糖尿病。'
      ]}
    ],
    think_tank_view:'篩檢結果異常不是妳做錯了什麼，而是提早知道、提早照顧。和醫師、營養師一起擬定飲食計畫，另一半也可以陪妳一起散步，控糖會輕鬆很多。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明期間，語氣親切但未淡化風險，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以篩檢當天的情境帶出準備與控糖。', tone:'生活親切', tone_reason:'給孕婦與家人閱讀，降低焦慮。', to_verify:[]},
    decision_points:[DP_RATE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'妊娠糖尿病：24-28週篩檢＋控糖4招',
    update_date:'2026/11/20',
    intro:'公費妊娠糖尿病篩檢異常率約17.2%（國健署）。24至28週做75公克糖水篩檢，控糖靠飲食、運動、監測。',
    sections:[
      {heading:'控糖4要訣',format:'table',table:TABLE},
      {heading:'重點',format:'bullets',items:[
        '空腹8小時，抽血3次。',
        '產後持續追蹤血糖。'
      ]}
    ],
    think_tank_view:'按時篩檢、積極控糖，是保護母嬰最直接的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為要訣與重點兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_RATE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'妊娠糖尿病', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'約每 6 位孕婦有 1 位篩檢異常', primary_visual:'17.2%', secondary_message:'24–28 週公費篩檢', action_priority:'飲食、運動、監測血糖'},
    headline_hook:'懷孕 24 週要喝糖水？', headline_main:'妊娠糖尿病篩檢與控糖', title_accent:'控糖',
    hero_message:'約每 6 位有 1 位', hero_support:'公費篩檢初步異常（國健署 2021–2023）',
    knowledge_title:'對母嬰的影響', knowledge_note:'24–28 週**公費篩檢**，免申請',
    knowledge_cards:[
      {label:'妊娠高血壓', icon:'pressure', lines:['風險約 1.9 倍']},
      {label:'胎兒過大', icon:'people', lines:['風險約 1.6 倍']},
      {label:'早產', icon:'check', lines:['風險約 1.4 倍']},
      {label:'剖腹產', icon:'shield', lines:['風險約 1.3 倍']}
    ],
    primary_stat:{value:'17.2%', label:'公費篩檢初步異常率', note:'國健署｜2021/7–2023/6，逾 23 萬人次'},
    secondary_stats:[
      {value:'75 公克', label:'葡萄糖耐糖試驗'},
      {value:'3 次', label:'空腹、1 小時、2 小時抽血'}
    ],
    action_title:'控糖 4 要訣',
    action_cards:[
      {key:'重', text:'依孕前 BMI 規劃熱量，諮詢營養師'},
      {key:'吃', text:'優質澱粉、高纖、少量多餐'},
      {key:'動', text:'每週 3–4 次、每次 30 分鐘有氧'},
      {key:'測', text:'定期自我監測血糖'}
    ],
    carousel_suggestion:{reason:'若想把篩檢流程、影響與控糖分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'懷孕 24 週要喝糖水？', headline_main:'妊娠糖尿病篩檢怎麼做'},
      {layout_type:'data', headline_hook:'約每 6 位有 1 位', headline_main:'公費篩檢異常率 17.2%'},
      {layout_type:'action', headline_hook:'孕期控糖', headline_main:'4 要訣一次看'}]},
    hashtags:['妊娠糖尿病','孕期控糖','產前檢查','女性健康'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'metabolic',
    illustration:{topic:'孕期控糖', audience:'懷孕中期婦女與伴侶', scene:'一位孕婦和伴侶在餐桌前準備一份有糙米、蔬菜和魚的均衡餐盤，旁邊放著血糖機',
      emotion:'安心、互相支持', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A pregnant woman and her partner preparing a balanced plate of brown rice, vegetables and fish at a dining table, a glucose meter nearby, supportive mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['異常率17.2%與風險倍數取自國健署2023-11-14新聞稿'],
      layout_reason:'核心是「為什麼要篩、怎麼控」，選 knowledge：4 項風險倍數放中段，異常率退到下方，最後給控糖 4 要訣。',
      tone:'專業易懂', tone_reason:'孕婦資訊需精確、不恐嚇。',
      to_verify:['異常率不等同確診盛行率']},
    decision_points:[Object.assign({}, DP_RATE, {current:'17.2%｜公費篩檢初步異常率'})],
    content_check_note:'異常率與風險倍數引自國健署並標明期間，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'妊娠糖尿病',
    collect:{
      summary:'國健署自2021年起將妊娠糖尿病篩檢納入公費產檢，至2023年6月逾23萬人次受檢、初步異常率約17.2%；妊娠糖尿病與妊娠高血壓、胎兒過大及產後第二型糖尿病風險相關，「24至28週篩檢、孕期控糖、產後追蹤」是值得長期溝通的孕產健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約17.2%：國健署統計2021年7月至2023年6月，孕婦於第24至28週接受公費妊娠糖尿病篩檢超過23萬人次，初步發現異常率約17.2%，約每6位孕婦有1位。',tag:'官方統計',source:{name:'衛生福利部：每6位孕媽咪 有1位妊娠糖尿病',url:'https://mohw.gov.tw/cp-16-76586-1.html'}},
        {item:'年度趨勢方向',desc:'約18%降為17.2%：國健署2022年公布補助逾8萬位孕婦時初步異常率約18%，累積至2023年6月逾23萬人次後為17.2%，屬同一篩檢計畫的累計數字。',tag:'官方統計',source:{name:'衛生福利部：每6位孕媽咪 有1位妊娠糖尿病',url:'https://mohw.gov.tw/cp-16-76586-1.html'}},
        {item:'政策動向',desc:'14次公費產檢含妊娠糖尿病篩檢：國健署提供妊娠第24至28週口服75克葡萄糖耐糖試驗，檢驗前禁食8小時，2024年公費產檢利用率達96%以上。',tag:'官方統計',source:{name:'衛生福利部：14次公費產檢 給媽咪與寶寶最安心的守護',url:'https://mohw.gov.tw/cp-16-83667-1.html'}},
        {item:'好發族群年齡層',desc:'妊娠高血壓風險1.9倍：國健署分析妊娠糖尿病孕婦妊娠高血壓1.9倍、胎兒過大1.6倍、早產1.4倍，並引述國外文獻指出日後罹患第二型糖尿病風險增加10倍。',tag:'官方統計',source:{name:'衛生福利部：孕媽咪5招遠離妊娠糖尿病',url:'https://www.mohw.gov.tw/fp-16-77840-1.html'}}
      ],
      product_view:['機會：孕產與女性保障是準父母關注重點，可搭配孕期健康管理衛教。','機會：妊娠糖尿病與日後代謝疾病相關，可延伸至產後長期健康追蹤服務。','風險：須依保單條款如實說明孕期相關等待期與除外，不可暗示保證理賠。'],
      marketing_view:['機會：「懷孕24週喝糖水」是準媽媽社群常討論的話題。','機會：伴侶陪同控糖是溫暖的家庭溝通角度。','風險：避免讓篩檢異常的孕婦產生自責感，以支持語氣為主。'],
      alert_level:'low',
      alert_reason:'屬長期孕產健康議題，無單一時效性事件，適合納入年度溝通規劃。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('較一般婦女增加10倍','SOURCE_EVIDENCE','secondary_citation',
          '文中已註明是國健署引述國外文獻，但沒有說明文獻名稱與年份，也不是國內資料，讀者無法判斷是否適用台灣孕婦。','medium','yes',
          '國健署引用的國外文獻原始出處，或國內妊娠糖尿病產後追蹤研究。','no','confirm','屬二手引述。',
          '較一般婦女增加10倍（國外文獻，國內數據待查）'),
        F('大約每6位就有1位結果異常','SOURCE_EVIDENCE','period_unstated',
          '生活親切版沒寫統計期間（2021年7月至2023年6月），讀者會以為是最新年度數字。','low','no',
          null,'no','clarify','補上期間即可。',
          '2021至2023年的統計中，大約每6位就有1位結果異常'),
        F('產後要持續追蹤血糖，因為以後比較容易得糖尿病','SOURCE_EVIDENCE','advice_without_detail',
          '生活親切版沒有說明產後何時、如何追蹤，引用的國健署新聞稿也沒有具體追蹤時程，讀者無從行動。','low','yes',
          '國健署或糖尿病學會對妊娠糖尿病產後追蹤時程的建議。','no','confirm','建議方向正確，但缺時程與出處。',
          '產後要依醫師建議回診追蹤血糖，因為以後比較容易得糖尿病'),
        F('公費妊娠糖尿病篩檢異常率約17.2%（國健署）','SOURCE_EVIDENCE','period_unstated',
          '簡潔有力版沒有寫統計期間，讀者無法判斷資料新舊。','low','no',
          null,'no','clarify','補上期間即可。',
          '公費妊娠糖尿病篩檢異常率約17.2%（國健署，2021/7–2023/6）')
      ],
      card:[
        F('懷孕 24 週要喝糖水？','TERMINOLOGY_LANGUAGE','oversimplification',
          '公費篩檢時間是懷孕 24 至 28 週，標題只寫 24 週，讀者可能以為只能在第 24 週檢查。','low','no',
          null,'no','clarify','屬時間範圍完整性。',
          '24–28 週要喝糖水？'),
        F('風險約 1.9 倍','SOURCE_EVIDENCE','source_unstated',
          '知識卡的風險倍數沒有標示是國健署分析，也沒有說明是和未患妊娠糖尿病孕婦比較。','low','no',
          null,'no','clarify','補上比較對象即可。',
          '比未患者高約 1.9 倍')
      ]
    },
    title_alts:[
      '妊娠糖尿病篩檢怎麼做？24-28週公費篩檢，異常率約17.2%',
      '懷孕24週要喝糖水？妊娠糖尿病篩檢與控糖4招',
      '妊娠糖尿病對母嬰的影響：風險倍數與孕期控糖重點'
    ],
    card_title_alts:[
      ['懷孕 24 週要喝糖水？','妊娠糖尿病篩檢與控糖'],
      ['約每 6 位有 1 位','孕期血糖要顧好'],
      ['孕期控糖','4 要訣一次看']
    ],
    data_addon:[
      '公費妊娠糖尿病篩檢2021年7月至2023年6月逾23萬人次，初步異常率約17.2%（國健署）。',
      '控糖目標：空腹60-95、餐後1小時60-140、餐後2小時60-120 mg/dl（國健署）。',
      '孕期體重增加以10-14公斤為宜（國健署）。'
    ],
    cta:'懷孕24週前和醫師確認篩檢時間；篩檢前一晚記得空腹8小時。'
  });
})();
