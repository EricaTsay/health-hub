/* v6 示範主題：肺癌（B2 癌症）
   查證日期：2026-11-20。數據來源：衛福部112年癌症登記報告新聞稿與附表（2025-12-30 公布）、衛福部114年死因統計摘要表（肺癌死亡時間序列）、
   TVBS 2025-08（國健署公費LDCT篩檢滿3年成果，媒體轉述）。
   參考方向：健康智庫〈肺癌〉2022/11。 */
(function(){
  const REFS = [
    {title:'公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-84987-1.html'},
    {title:'112年國人十大癌症發生人數附表',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'112年國人癌症時鐘再快轉！肺癌連3年居首 每3分48秒一人罹癌',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/cancer/360004'},
    {title:'肺癌公費篩檢3年 早期檢出逾8成 權威醫：50歲以上都應受檢',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/nutrition/356913'}
  ];
  const TABLE = {headers:['公費LDCT篩檢對象','條件'], rows:[
    ['肺癌家族史','父母、子女或兄弟姊妹曾罹患肺癌之男性45-74歲、女性40-74歲'],
    ['重度吸菸者','50-74歲、吸菸史達20包-年以上'],
    ['篩檢頻率','每2年1次低劑量電腦斷層（LDCT）'],
    ['篩檢效益','重度吸菸者以LDCT篩檢，相較胸部X光可降低20%肺癌死亡']
  ]};
  const TAGS = ['肺癌','LDCT','肺癌篩檢','低劑量電腦斷層','癌症防治'];

  const DP_EARLY = {id:'dp-lung-early', type:'data_version', title:'篩檢早期比例有兩組數字',
    desc:'國健署說明經LDCT篩檢發現的肺癌「85%為早期」；媒體報導公費篩檢滿3年的累積成果則為「逾8成（83%）為早期」。兩者統計期間不同，AI 沒有替你挑選。',
    current:'逾8成為早期（公費篩檢滿3年累積）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'逾8成（83%）', value:'公費篩檢3年累積', note:'2025年8月媒體轉述國健署成果（目前採用）'},
      {label:'85%', value:'篩檢發現個案', note:'國健署112年癌登記者會說明，統計期間未標示'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'肺癌連3年居新發第1位：符合資格每2年1次免費LDCT',
    update_date:'2026/11/20',
    intro:'依衛生福利部112年癌症登記報告，肺癌新發個案19,986人，較111年增加2,004人，連續3年居國人癌症發生人數第1位，診斷年齡中位數66歲；其中女性9,707人。114年死因統計中，肺癌死亡10,831人，仍是癌症死因第1位。肺癌早期常沒有症狀，國健署自111年7月推出公費低劑量電腦斷層（LDCT）篩檢，協助高風險族群早期發現。',
    sections:[
      {heading:'誰可以做公費LDCT篩檢',format:'table',table:TABLE},
      {heading:'為什麼要早期發現',format:'bullets',items:[
        '據媒體轉述國健署成果，公費LDCT篩檢滿3年，累積逾21萬人次受檢、找出2,506名肺癌個案，其中逾8成為早期。',
        '國健署指出，未經篩檢者確診時早期比例不到4成；早期（0-1期）肺癌5年存活率可超過9成。',
        '不吸菸也可能罹患肺癌，女性肺癌新發人數接近男性，有家族史者應把握篩檢資格。'
      ]},
      {heading:'日常預防與注意',format:'bullets',items:[
        '戒菸並避免二手菸，可利用免付費戒菸專線0800-636363。',
        '烹調時開抽油煙機、減少高溫油炸，降低油煙暴露。',
        '久咳不癒、咳血、胸痛或體重不明原因減輕，應盡快就醫。',
        '可上國健署癌症篩檢網站或健保快易通APP查詢篩檢資格。'
      ]}
    ],
    think_tank_view:'肺癌仍是發生與死亡人數雙第1的癌症，但公費LDCT讓高風險族群有機會在沒有症狀時就發現。若家人曾罹患肺癌或有長期吸菸史，建議把篩檢排進行事曆；同時也別忘了戒菸與減少油煙，才是降低風險的根本。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'發生與死亡人數引自衛福部112年癌症登記與114年死因統計並標明年份，篩檢成果標明為媒體轉述，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['112年肺癌新發19,986人（癌症登記附表）','114年肺癌死亡10,831人（死因統計）'],
      layout_reason:'先用表格讓讀者確認自己是否符合公費篩檢，再說明早期發現的效益，最後給日常預防與就醫警訊。',
      tone:'專業易懂', tone_reason:'篩檢資格需要精確條件。',
      to_verify:['篩檢3年累積成果為媒體轉述，國健署原始新聞稿待核對']},
    decision_points:[DP_EARLY]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'不抽菸也會得肺癌？家人有肺癌史，40歲就能免費篩',
    update_date:'2026/11/20',
    intro:'肺癌已經連續3年是台灣新發人數最多的癌症，依112年癌症登記，一年有19,986人確診，其中將近一半是女性。很多人以為不抽菸就沒事，但家族史、二手菸、油煙都可能有關。好消息是，符合資格的人每2年可以免費做1次低劑量電腦斷層（LDCT）。',
    sections:[
      {heading:'這些人可以免費篩',format:'table',table:TABLE},
      {heading:'篩檢真的有用嗎？',format:'bullets',items:[
        '媒體報導國健署成果，公費篩檢3年找到2,506位肺癌病友，8成以上是早期。',
        '沒有篩檢的人，被診斷時早期的不到4成；早期肺癌5年存活率可以超過9成。',
        '女性肺癌新發人數將近一半，不抽菸的女性也別掉以輕心。'
      ]},
      {heading:'平常可以這樣做',format:'bullets',items:[
        '戒菸、遠離二手菸，需要幫忙可以打0800-636363。',
        '煮飯記得開抽油煙機，少用大火油炸。',
        '一直咳不好、咳血或胸痛，要趕快看醫生。',
        '打開健保快易通APP，查查自己和家人能不能篩。'
      ]}
    ],
    think_tank_view:'如果爸媽或兄弟姊妹曾經得過肺癌，記得提醒家裡符合年齡的人去做LDCT。不抽菸不代表零風險，早一點檢查，就多一分安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部癌症登記並標明年份，篩檢成果標明為媒體轉述，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「不抽菸也會得」的常見迷思切入，帶出篩檢資格與預防。', tone:'生活親切', tone_reason:'給一般民眾與有家族史的家庭閱讀。', to_verify:['篩檢3年成果原始新聞稿']},
    decision_points:[DP_EARLY]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'肺癌：高風險族群每2年1次免費LDCT',
    update_date:'2026/11/20',
    intro:'112年肺癌新發19,986人，連3年居第1；114年死亡10,831人，居癌症死因第1位。家族史與重度吸菸者可做公費LDCT。',
    sections:[
      {heading:'篩檢資格',format:'table',table:TABLE},
      {heading:'篩檢效益',format:'bullets',items:[
        '公費篩檢3年，逾8成為早期發現。',
        '早期肺癌5年存活率可超過9成。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '戒菸、遠離二手菸與油煙。',
        '久咳、咳血盡快就醫。',
        '查詢篩檢資格。'
      ]}
    ],
    think_tank_view:'肺癌發生與死亡雙居第1，高風險族群把握公費LDCT，是早期發現的關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部癌症登記與死因統計並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為資格、效益、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['篩檢成果為媒體轉述']},
    decision_points:[DP_EARLY]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'肺癌', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'肺癌一年新發近 2 萬人，連 3 年居第 1', primary_visual:'約 2 萬人', secondary_message:'公費 LDCT 篩檢逾 8 成早期發現', action_priority:'家族史、重度吸菸者每 2 年篩 1 次'},
    headline_hook:'肺癌連 3 年居第 1', headline_main:'高風險族群免費 LDCT', title_accent:'免費 LDCT',
    primary_stat:{kicker:'112 年・新發個案', value:'約 2 萬人', label:'新診斷肺癌', note:'衛福部癌症登記：19,986 人｜女性 9,707 人'},
    chart:{type:'bar', title:'肺癌死亡人數（人）', points:[
      {label:'2016', value:9460, display:'9,460'},
      {label:'2019', value:9701, display:'9,701'},
      {label:'2022', value:10053, display:'10,053'},
      {label:'2025', value:10831, display:'10,831', highlight:true}
    ], note:'衛福部死因統計｜標準化死亡率由 24.6 降至 21.3'},
    secondary_stats:[
      {value:'逾 8 成', label:'公費篩檢早期發現'},
      {value:'第 1 位', label:'癌症死因'},
      {value:'66 歲', label:'診斷年齡中位數'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'篩', text:'符合資格每 2 年 1 次免費 LDCT'},
      {key:'戒', text:'戒菸、遠離二手菸'},
      {key:'煙', text:'烹調開抽油煙機、少高溫油炸'},
      {key:'醫', text:'久咳、咳血、胸痛盡快就醫'}
    ],
    carousel_suggestion:{reason:'若想把趨勢、篩檢資格與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'肺癌連 3 年居第 1', headline_main:'一年新發近 2 萬人'},
      {layout_type:'knowledge', headline_hook:'誰可以免費篩', headline_main:'家族史與重度吸菸者'},
      {layout_type:'action', headline_hook:'日常預防', headline_main:'戒菸、減油煙'}]},
    hashtags:['肺癌','LDCT','肺癌篩檢','癌症防治'],
    sources:['衛生福利部','衛生福利部國民健康署','TVBS新聞網'],
    illustration_category:'screening-checkup',
    illustration:{topic:'肺癌篩檢', audience:'有家族史的中壯年與家人', scene:'一對中年姊弟一起在醫院電腦斷層檢查室外等候，手裡拿著篩檢通知單',
      emotion:'安心、互相陪伴', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'Two middle-aged siblings waiting together outside a hospital CT scan room holding a screening notice, reassuring and supportive, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['112年肺癌新發19,986人（癌症登記）','肺癌死亡人數時間序列取自114年死因統計摘要表'],
      layout_reason:'肺癌有清楚的新發與死亡數字，選 data：新發人數當主角，十年死亡人數小圖顯示人數上升但標準化死亡率下降，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'篩檢資訊需清楚可行。',
      to_verify:['死亡人數上升與人口老化的關係（標準化死亡率下降）']},
    decision_points:[Object.assign({}, DP_EARLY, {current:'逾 8 成｜公費篩檢早期發現（3 年累積）'})],
    content_check_note:'新發與死亡人數引自衛福部癌症登記與死因統計並標明年份，篩檢成果標明出處，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'肺癌',
    collect:{
      summary:'肺癌連續3年居國人癌症新發人數第1位、死亡人數也居第1，112年新發近2萬人且女性占近半；公費LDCT篩檢上路3年、逾8成早期發現，是兼具篩檢政策與高關注度的長期溝通議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'新發肺癌約2萬人：依2025年12月公布的112年癌症登記，肺癌新發19,986人，連續3年居癌症發生人數第1位，診斷年齡中位數66歲，女性9,707人。',tag:'官方統計',source:{name:'衛生福利部：112年國人十大癌症發生人數附表',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'}},
        {item:'年度趨勢方向',desc:'死亡人數增加3.2%：2025年肺癌死亡10,831人，較2024年10,495人增加，仍居癌症死因第1位，但標準化死亡率由2016年每十萬人24.6人降至21.3人。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'逾8成篩檢個案為早期：公費LDCT篩檢自2022年7月上路，據媒體轉述國健署成果，滿3年累積逾21萬人次受檢、找出2,506名肺癌個案。',tag:'市場觀察',source:{name:'TVBS新聞網：肺癌公費篩檢3年 早期檢出逾8成',url:'https://health.tvbs.com.tw/nutrition/356913'}},
        {item:'好發族群年齡層',desc:'重度吸菸者LDCT可降低20%死亡：公費篩檢對象為有家族史之男性45-74歲、女性40-74歲，及50-74歲吸菸史20包-年以上者，每2年1次。',tag:'官方統計',source:{name:'衛生福利部：公布112年國人癌症登記資料分析結果',url:'https://mohw.gov.tw/cp-16-84987-1.html'}}
      ],
      product_view:['機會：肺癌為癌症保障需求最高的癌別之一，早期與晚期治療（手術、標靶、免疫治療）費用差異大，可協助保戶檢視保障缺口。','機會：LDCT篩檢資格明確，適合設計篩檢提醒與結果追蹤等健康管理服務。','風險：不得暗示篩檢可保證早期發現，或將篩檢結果與承保、理賠條件連動。'],
      marketing_view:['機會：「不抽菸也會得肺癌」是高關注切點，女性與有家族史族群是核心溝通對象。','機會：8月1日世界肺癌日可作為固定檔期。','風險：篩檢存在偽陽性與過度診斷爭議，溝通時宜同時說明篩檢限制，避免一味鼓勵所有人自費篩檢。'],
      alert_level:'medium',
      alert_reason:'新發與死亡人數持續居首，公費篩檢量逐年擴大，適合納入年度溝通規劃，8月世界肺癌日為重點檔期。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('累積逾21萬人次受檢、找出2,506名肺癌個案，其中逾8成為早期','SOURCE_EVIDENCE','secondary_citation',
          '文中已註明為媒體轉述國健署成果，但未附國健署原始新聞稿；統計期間「滿3年」的起訖時間也沒寫。','medium','yes',
          '國健署公費LDCT篩檢3年成果新聞稿原文與統計期間。','yes','confirm','數字可能正確，但屬二手引述。',
          '累積逾21萬人次受檢、找出2,506名肺癌個案，其中逾8成為早期（2022年7月至2025年6月）',['公費篩檢3年找到2,506位肺癌病友']),
        F('早期（0-1期）肺癌5年存活率可超過9成','MEDICAL_INTERPRETATION','population_stat_as_individual',
          '「超過9成」是篩檢發現早期個案的群體存活率，讀者可能理解為個人只要早期就一定能存活。','low','no',
          null,'no','clarify','數據引自國健署說明。',
          '經篩檢發現的早期（0-1期）肺癌，群體5年存活率可超過9成',['早期肺癌5年存活率可以超過9成','早期肺癌5年存活率可超過9成']),
        F('不抽菸的女性也別掉以輕心','RISK_COMMUNICATION_SCOPE','screening_scope_unclear',
          '提醒方向合理，但讀者可能誤以為所有不抽菸女性都該做LDCT；公費資格限有家族史或重度吸菸者，一般人自費篩檢的效益與偽陽性風險應與醫師討論。','medium','no',
          null,'no','clarify','屬適用對象說明。',
          '不抽菸的女性也別掉以輕心，是否需要篩檢可與醫師討論'),
        F('烹調時開抽油煙機、減少高溫油炸，降低油煙暴露','SOURCE_EVIDENCE','advice_without_basis',
          '油煙與肺癌的關聯在文中沒有引用任何來源，讀者無法判斷依據。','low','yes',
          '國健署關於烹調油煙與肺癌風險的衛教資料。','no','confirm','屬常見衛教建議，未附出處。',
          null,['煮飯記得開抽油煙機，少用大火油炸','戒菸、遠離二手菸與油煙'])
      ],
      card:[
        F('公費篩檢早期發現','SOURCE_EVIDENCE','secondary_citation',
          '「逾 8 成」未標示統計期間，也不是國健署原始公告數字，卡面讀者無法判斷依據。','low','yes',
          '國健署篩檢成果原始資料。','yes','confirm','屬二手引述。',
          '公費篩檢早期發現（2022–2025 累積）'),
        F('衛福部死因統計｜標準化死亡率由 24.6 降至 21.3','MEDICAL_INTERPRETATION','trend_cause_unstated',
          '死亡人數上升但標準化死亡率下降，兩者並列沒有說明原因（人口老化），讀者可能看不懂。','low','no',
          null,'no','clarify','數字正確。',
          '衛福部死因統計｜人數增加主因人口老化，標準化死亡率下降')
      ]
    },
    title_alts:[
      '肺癌連3年居新發第1位：符合資格每2年1次免費LDCT',
      '不抽菸也會得肺癌？家人有肺癌史，40歲就能免費篩',
      '肺癌篩檢資格與早期發現：一年新發近2萬人的關鍵行動'
    ],
    card_title_alts:[
      ['肺癌連 3 年居第 1','高風險族群免費 LDCT'],
      ['不抽菸也會得？','家族史 40 歲起免費篩'],
      ['肺癌早期沒症狀','每 2 年篩 1 次']
    ],
    data_addon:[
      '112年癌症登記：肺癌標準化發生率每十萬人44.9人，較111年增加3.2人。',
      '114年死因統計：肺癌死亡男性6,673人、女性4,158人，男女皆居癌症死因第1位。',
      '據媒體報導，2024年7月至2025年6月LDCT受檢114,445人，確診1,401人，早期占83.2%。'
    ],
    cta:'今天就問問家人：家裡有沒有人得過肺癌？若有，幫符合年齡的家人查一下LDCT篩檢資格。'
  });
})();
