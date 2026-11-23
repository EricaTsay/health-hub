/* v6 示範主題：缺鐵性貧血（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-21。數據來源：衛福部／國健署 112-10-17「每6名孕婦就有1位貧血」（107-111年國民營養健康狀況變遷調查、產檢貧血檢驗資料）、
   111-07-14「政府補助產檢之貧血檢驗」（106-108年懷孕婦女營養狀況追蹤調查）、108-12-18「孕前儲鐵」（歷次調查趨勢、鐵建議量、茶與鐵吸收）。
   查無國健署公布的「缺鐵性貧血」單獨盛行率。
   參考方向：健康智庫〈缺鐵性貧血〉2022/12。 */
(function(){
  const P1 = 'https://www.mohw.gov.tw/fp-16-76269-1.html';
  const P2 = 'https://mohw.gov.tw/cp-2704-70534-1.html';
  const P3 = 'https://mohw.gov.tw/cp-16-50572-1.html';
  const REFS = [
    {title:'每6名孕婦就有1位貧血 善用貧血檢驗 掌握飲食4技巧 遠離孕期貧血風險',source:'衛生福利部',url:P1},
    {title:'政府補助產檢之貧血檢驗，請孕媽咪多加利用',source:'衛生福利部',url:P2},
    {title:'預約好孕！孕前儲鐵 為寶寶健康踏出第一步',source:'衛生福利部',url:P3}
  ];
  const TABLE = {headers:['補鐵技巧','怎麼做'], rows:[
    ['吃對食物','紅肉、肝臟、鴨血、文蛤、章魚、蚵仔，豆類與小方豆干'],
    ['搭配維生素C','用餐中或餐後2小時內吃芭樂、柑橘、文旦、小番茄等水果'],
    ['避開吸收干擾','用餐時不喝茶類飲料，茶的單寧酸可減少近50%鐵吸收'],
    ['深綠色蔬菜','莧菜、紅鳳菜等吸收率較低，可作為部分來源']
  ]};
  const TAGS = ['缺鐵性貧血','補鐵','育齡女性','孕期貧血','營養'];

  const DP_AGE = {id:'dp-ida-age', type:'data_version', title:'育齡婦女貧血率有好幾期調查',
    desc:'國健署歷次調查：102-105年22.40%、103-106年19.54%、104-107年18.6%（15-49歲），106-109年19.35%、107-111年19.7%（20-49歲）。年齡範圍不同，不宜直接比較趨勢，AI 採用最新一期。',
    current:'19.7%（20-49歲，107-111年調查）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'19.7%', value:'20-49歲・107-111年', note:'最新一期（目前採用）'},
      {label:'18.6%', value:'15-49歲・104-107年', note:'年齡範圍不同'},
      {label:'22.40%', value:'15-49歲・102-105年', note:'較早期調查'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'缺鐵性貧血：育齡女性每5人就有1人貧血，補鐵這樣吃',
    update_date:'2026/11/21',
    intro:'依國民健康署107-111年國民營養健康狀況變遷調查，20至49歲育齡婦女貧血盛行率為19.7%，約每5人就有1人；缺鐵性貧血是最常見的類型。女性從青春期到更年期前每月經血流失，加上懷孕時血液量增加，對鐵的需求更高；106-108年調查顯示，20歲以上懷孕婦女第三孕期貧血盛行率高達28.9%。貧血可能出現疲勞、嗜睡、頭暈、臉色蒼白等症狀。',
    sections:[
      {heading:'補鐵4技巧',format:'table',table:TABLE},
      {heading:'每天需要多少鐵',format:'bullets',items:[
        '依國人膳食營養素參考攝取量，成年女性每日鐵建議攝取量為15毫克；第三孕期孕婦及哺乳中的媽媽建議增加至45毫克。',
        '肝臟等高鐵食物不宜過量，以均衡飲食為原則。',
        '是否需要鐵劑補充，應由醫師依檢驗結果評估，不建議自行長期服用。'
      ]},
      {heading:'檢查與就醫',format:'bullets',items:[
        '國健署自110年7月起補助妊娠第24至28週貧血檢驗；110年7月至112年6月產檢資料顯示，第24-28週孕婦異常率約17.4%。',
        '懷孕前12週產檢發現貧血，建議就醫釐清是遺傳、疾病或營養不足造成。',
        '男性或停經後女性出現缺鐵性貧血，應就醫檢查是否有腸胃道等慢性出血。'
      ]}
    ],
    think_tank_view:'缺鐵性貧血很常見，卻常被當成「體質虛」而忽略。育齡女性與準媽媽可以從三餐開始補鐵：一份紅肉或海產、餐後一份當季水果、飯桌上不配茶；檢查發現貧血時，再由醫師判斷是否需要補充鐵劑。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率與建議量引自國健署並標明調查年份與年齡範圍，鐵劑提醒由醫師評估，未使用療效保證用語，未推薦特定補充品。',
    ai_rationale:{basis:['20-49歲育齡婦女貧血19.7%（國健署107-111年調查）','成年女性鐵建議量15毫克、第三孕期45毫克（國健署）'],
      layout_reason:'先用表格整理補鐵4技巧，再說明建議攝取量，最後提醒檢查與就醫。',
      tone:'專業易懂', tone_reason:'營養建議需要具體食物與份量。',
      to_verify:['查無缺鐵性貧血單獨盛行率','DRIs建議量為國健署新聞稿引述，原表未直接核對']},
    decision_points:[DP_AGE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'常常頭暈、臉色蒼白？女生要小心缺鐵性貧血',
    update_date:'2026/11/21',
    intro:'常覺得累、愛睏、站起來頭暈、臉色白白的？國健署調查發現，20到49歲的女性大約每5人就有1人貧血，其中最常見的就是缺鐵。女生每個月都會流失經血，懷孕時更需要鐵，第三孕期的準媽媽約有將近3成貧血。好消息是，補鐵可以從三餐開始。',
    sections:[
      {heading:'補鐵4招',format:'table',table:TABLE},
      {heading:'一天要吃多少鐵？',format:'bullets',items:[
        '成年女生每天建議15毫克；懷孕後期和餵母奶的媽媽要到45毫克。',
        '豬肝這類食物很補，但不要吃過量。',
        '要不要吃鐵劑，先讓醫師看過檢驗結果再決定。'
      ]},
      {heading:'檢查別錯過',format:'bullets',items:[
        '懷孕24到28週有政府補助的貧血檢驗，記得做。',
        '懷孕初期就發現貧血，要請醫師找出原因。',
        '男生或停經後的女生如果貧血，要檢查是不是有慢性出血。'
      ]}
    ],
    think_tank_view:'很多女生把頭暈、怕冷當成體質問題。其實只要三餐多一份紅肉或海鮮、飯後吃顆芭樂，吃飯時別配茶，就是很好的開始；有懷孕計畫的人，更要提早把鐵存起來。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字引自國健署並標明調查，語氣親切，鐵劑提醒由醫師評估，未使用療效保證用語，未推薦特定補充品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以常見不適帶出補鐵方法、建議量與檢查。', tone:'生活親切', tone_reason:'給育齡女性與準媽媽閱讀。', to_verify:[]},
    decision_points:[DP_AGE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'缺鐵性貧血：補鐵4技巧',
    update_date:'2026/11/21',
    intro:'國健署107-111年調查：20至49歲育齡婦女貧血盛行率19.7%。成年女性每日鐵建議量15毫克。',
    sections:[
      {heading:'補鐵4技巧',format:'table',table:TABLE},
      {heading:'建議量',format:'bullets',items:[
        '成年女性15毫克；第三孕期與哺乳45毫克。',
        '鐵劑由醫師評估。'
      ]},
      {heading:'檢查',format:'bullets',items:[
        '妊娠24-28週公費貧血檢驗。',
        '男性或停經後貧血需查慢性出血。'
      ]}
    ],
    think_tank_view:'吃對食物、搭配維生素C、避開茶，是補鐵最實際的三件事。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字引自國健署並標明調查，未使用療效保證用語，未推薦特定補充品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為技巧、建議量、檢查三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_AGE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'缺鐵性貧血', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'育齡女性約每 5 人 1 人貧血', primary_visual:'19.7%', secondary_message:'第三孕期貧血近 3 成', action_priority:'吃對鐵、配維生素C、避開茶'},
    headline_hook:'常常頭暈、臉色蒼白？', headline_main:'補鐵 4 技巧從三餐開始', title_accent:'補鐵 4 技巧',
    hero_message:'每 5 位育齡女性約 1 位', hero_support:'有貧血（國健署 107-111 年調查）',
    primary_stat:{value:'19.7%', label:'20–49 歲育齡婦女貧血盛行率', note:'國健署 107-111 年國民營養健康狀況變遷調查'},
    action_title:'補鐵這樣吃',
    action_cards:[
      {key:'肉', text:'紅肉、鴨血、文蛤、章魚、豆干'},
      {key:'C', text:'餐中或餐後吃芭樂、柑橘等水果'},
      {key:'茶', text:'用餐時不喝茶，避免抑制吸收'},
      {key:'檢', text:'孕期 24–28 週做公費貧血檢驗'}
    ],
    notice:'成年女性每日鐵 **15 毫克**，第三孕期與哺乳期 **45 毫克**。',
    carousel_suggestion:{reason:'若想把盛行率、補鐵飲食與孕期檢驗分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'育齡女性要注意', headline_main:'每 5 人約 1 人貧血'},
      {layout_type:'action', headline_hook:'三餐補鐵', headline_main:'補鐵 4 技巧'},
      {layout_type:'knowledge', headline_hook:'準媽媽', headline_main:'孕期貧血檢驗怎麼做'}]},
    hashtags:['缺鐵性貧血','補鐵','育齡女性','孕期貧血'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'補鐵飲食', audience:'育齡女性與準媽媽', scene:'一位年輕女性在餐桌前吃著有紅肉、豆干和青菜的便當，旁邊放著一顆芭樂',
      emotion:'元氣、自在', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young woman at a dining table eating a lunch box with red meat, dried tofu and greens, a guava beside it, energetic and relaxed mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['20-49歲育齡婦女貧血19.7%（國健署107-111年調查）'],
      layout_reason:'選 action：4 個補鐵行動當主角，盛行率放下方，以建議攝取量收尾。',
      tone:'專業易懂', tone_reason:'具體食物與份量。',
      to_verify:[]},
    decision_points:[Object.assign({}, DP_AGE, {current:'19.7%（20-49 歲，107-111 年）'})],
    content_check_note:'數字引自國健署並標明調查年份，未使用療效保證用語，未推薦特定補充品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'缺鐵性貧血',
    collect:{
      summary:'國健署調查顯示育齡婦女約每5人就有1人貧血，孕期後段更高；缺鐵是最常見原因，國健署補助孕期貧血檢驗並推廣補鐵飲食，「育齡女性與準媽媽補鐵」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'20至49歲育齡婦女貧血盛行率19.7%：依國健署107-111年國民營養健康狀況變遷調查（血紅素低於12 g/dL），約每5人就有1人（查無缺鐵性貧血單獨盛行率）。',tag:'官方統計',source:{name:'衛生福利部：每6名孕婦就有1位貧血 善用貧血檢驗',url:P1}},
        {item:'年度趨勢方向',desc:'近10年約在2成上下：國健署歷次調查，15-49歲育齡婦女貧血率102-105年為22.40%、104-107年為18.6%，20-49歲於107-111年為19.7%（年齡範圍不同，不宜直接比較）。',tag:'官方統計',source:{name:'衛生福利部：預約好孕！孕前儲鐵',url:P3}},
        {item:'政策動向',desc:'第24至28週孕婦貧血異常率約17.4%：國健署自110年7月起補助妊娠第24-28週貧血檢驗，110年7月至112年6月產檢資料顯示約每6名孕婦有1位貧血。',tag:'官方統計',source:{name:'衛生福利部：每6名孕婦就有1位貧血 善用貧血檢驗',url:P1}},
        {item:'好發族群年齡層',desc:'第三孕期貧血盛行率28.9%：依國健署106-108年懷孕婦女營養狀況追蹤調查，20歲以上懷孕婦女整體貧血盛行率19.7%，第三孕期最高。',tag:'官方統計',source:{name:'衛生福利部：政府補助產檢之貧血檢驗，請孕媽咪多加利用',url:P2}}
      ],
      product_view:['機會：育齡女性與準媽媽是重要客群，可結合孕期健康管理與營養衛教。','機會：補鐵飲食是低門檻、高實用性的關懷內容。','風險：避免推薦特定鐵劑或保健食品；貧血原因多元，提醒由醫師評估。'],
      marketing_view:['機會：備孕、孕期是自然的溝通情境。','機會：「飯桌不配茶」等具體技巧容易被記住與分享。','風險：避免把疲勞全歸因於缺鐵，造成自行補充過量。'],
      alert_level:'low',
      alert_reason:'屬長期營養與女性健康議題，無時效性政策事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('缺鐵性貧血是最常見的類型','DATA_FACTUAL_ACCURACY','missing_specific_statistic',
          '文中以「育齡婦女貧血19.7%」帶出主題，但這是所有貧血的比例，缺鐵性貧血的單獨比例國健署未公布，讀者可能把19.7%當成缺鐵性貧血盛行率。','medium','no',
          null,'no','clarify','屬統計範圍說明。',
          '缺鐵性貧血是最常見的類型（19.7%為各類貧血合計，缺鐵性貧血單獨比例未公布）',
          ['其中最常見的就是缺鐵']),
        F('第三孕期孕婦及哺乳中的媽媽建議增加至45毫克','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '45毫克為族群建議量，一般飲食不易達到，常需醫師評估補充；文中未說明，讀者可能自行大量補鐵。','low','no',
          null,'no','clarify','補一句即可。',
          '第三孕期孕婦及哺乳中的媽媽建議增加至45毫克（是否需要鐵劑請與產檢醫師討論）',
          ['懷孕後期和餵母奶的媽媽要到45毫克','第三孕期與哺乳45毫克']),
        F('茶的單寧酸可減少近50%鐵吸收','SOURCE_EVIDENCE','single_source_figure',
          '數字出自國健署108年衛教新聞稿，未說明研究依據；不同茶種與濃度影響不同。','low','no',
          null,'no','clarify','屬精確度說明。',
          '茶的單寧酸可能大幅減少鐵吸收（國健署資料指出可達近50%）'),
        F('男性或停經後女性出現缺鐵性貧血，應就醫檢查是否有腸胃道等慢性出血','MEDICAL_INTERPRETATION','missing_urgency',
          '這是重要警訊，但未說明為何需要（可能是腸胃道腫瘤等疾病的表現），讀者可能輕忽。','low','no',
          null,'no','clarify','補一句理由即可。',
          '男性或停經後女性出現缺鐵性貧血，應就醫檢查是否有腸胃道等慢性出血（可能是潰瘍或腫瘤等疾病的徵兆）',
          ['男生或停經後的女生如果貧血，要檢查是不是有慢性出血','男性或停經後貧血需查慢性出血'])
      ],
      card:[
        F('20–49 歲育齡婦女貧血盛行率','DATA_FACTUAL_ACCURACY','missing_specific_statistic',
          '卡面主題是缺鐵性貧血，主數字卻是所有貧血的比例。','medium','no',
          null,'no','clarify','屬統計範圍標示。',
          '20–49 歲育齡婦女各類貧血盛行率'),
        F('紅肉、鴨血、文蛤、章魚、豆干','MEDICAL_INTERPRETATION','missing_balance_note',
          '未提醒肝臟等高鐵食物不宜過量，也未提素食者的替代來源。','low','no',
          null,'no','clarify','屬完整度問題。',
          '紅肉、鴨血、海產、豆干（素食者可多吃豆類）')
      ]
    },
    title_alts:[
      '缺鐵性貧血：育齡女性每5人就有1人貧血，補鐵這樣吃',
      '常常頭暈、臉色蒼白？女生要小心缺鐵性貧血',
      '準媽媽必看：孕期貧血檢驗與補鐵4技巧'
    ],
    card_title_alts:[
      ['常常頭暈、臉色蒼白？','補鐵 4 技巧從三餐開始'],
      ['每 5 位育齡女性約 1 位','有貧血'],
      ['準媽媽補鐵','孕期貧血檢驗別錯過']
    ],
    data_addon:[
      '國健署：懷孕前12週產檢發現貧血，建議就醫釐清遺傳、疾病或營養素不足等成因。',
      '孕期貧血可能造成頭暈、傷口癒合不良、子宮收縮不良、產後憂鬱等影響（國健署）。',
      '深綠色蔬菜如莧菜、甜碗豆、紅鳳菜的鐵吸收率較低，但仍可作為部分來源。'
    ],
    cta:'這週的晚餐加一份紅肉或海鮮、飯後吃一份當季水果，吃飯時改喝白開水；有懷孕計畫的人，下次健檢順便驗一次血紅素。'
  });
})();
