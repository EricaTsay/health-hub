/* v6 示範主題：高度加工食品（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-20。數據來源：Lane M.M. et al., BMJ 2024 傘狀回顧（45項統合分析、近990萬人，BMJ Group 2024-02-29新聞稿）、衛福部／國健署〈國人嗜食加工肉品及紅肉 要保命 少吃肉、定期篩檢〉（IARC加工肉品與大腸癌、防癌飲食）、國健署〈「鹽」多必失 少食用加工或調理食品 看營養標示鈉含量〉。
   注意：國內官方查無「超加工食品／高度加工食品」的定義或攝取量統計；BMJ研究為觀察性研究的彙整。
   參考方向：健康智庫〈國小生瘋「魔芋爽」？認識高度加工食品的危害〉2023/12、〈食品安全－加工食品〉2025/12。 */
(function(){
  const REFS = [
    {title:'Ultra-processed food exposure and adverse health outcomes: umbrella review of epidemiological meta-analyses',source:'BMJ (2024)',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC10899807/'},
    {title:'Consistent evidence links ultra-processed food to over 30 damaging health outcomes',source:'BMJ Group (2024)',url:'https://bmjgroup.com/consistent-evidence-links-ultra-processed-food-to-over-30-damaging-health-outcomes/'},
    {title:'國人嗜食加工肉品及紅肉 國民健康署提醒：要保命 少吃肉、定期篩檢！',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/fp-2649-20047-1.html'},
    {title:'「鹽」多必失！天然A卡好 少食用加工或調理食品 看營養標示鈉含量',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1131&pid=2233'}
  ];
  const TABLE = {headers:['研究結果（證據等級：令人信服）','與較高的高度加工食品攝取相關'], rows:[
    ['心血管疾病相關死亡','風險約高50%'],
    ['焦慮與常見精神疾患','風險高48%至53%'],
    ['第2型糖尿病','風險高12%'],
    ['研究範圍','45項統合分析、近990萬人，共32項健康結果']
  ]};
  const TAGS = ['高度加工食品','超加工食品','加工肉品','原態食物','飲食營養'];

  const DP_DEF = {id:'dp-upf-def', type:'data_scope', title:'「高度加工」沒有國內官方定義',
    desc:'BMJ研究採用國際常用的NOVA分類定義「超加工食品」；國內衛福部與國健署目前沒有官方定義，衛教多以「加工食品、加工肉品、調理食品」描述。兩者範圍不完全相同，AI 沒有替你決定用哪個說法。',
    current:'以BMJ 2024研究的「超加工食品」定義說明健康風險',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'超加工食品', value:'NOVA分類', note:'BMJ 2024傘狀回顧採用（目前採用）'},
      {label:'加工食品', value:'國健署衛教用語', note:'防癌、減鹽衛教中建議少吃加工食品與加工肉品'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'超加工食品吃太多有風險？BMJ研究整理32項健康影響',
    update_date:'2026/11/20',
    intro:'2024年刊登於《BMJ》的傘狀回顧，彙整45項統合分析、近990萬名研究對象，發現較高的超加工食品攝取與32項不良健康結果相關；其中證據等級為「令人信服」的包括心血管疾病相關死亡風險約高50%、焦慮與常見精神疾患風險高48%至53%、第2型糖尿病風險高12%。國民健康署也長期提醒，多吃新鮮食物、少吃加工食品與加工肉品。',
    sections:[
      {heading:'BMJ研究的主要發現',format:'table',table:TABLE},
      {heading:'國內衛教怎麼說',format:'bullets',items:[
        '國健署防癌飲食第一招：多吃新鮮食物，加工食品Out。',
        '國際癌症研究機構指出，食用較多加工肉品與紅肉和大腸癌風險增加有關。',
        '麵包、餅乾、加工肉品與調味料是容易被忽略的鈉來源。'
      ]},
      {heading:'日常減少高度加工食品',format:'bullets',items:[
        '主食、蛋白質、蔬果盡量選原態食材。',
        '香腸、火腿、培根等加工肉品少吃。',
        '零食與含糖飲料不當正餐，買前看營養標示的鈉與糖。',
        '外食選看得出原本食材樣子的菜色。'
      ]}
    ],
    think_tank_view:'「加工」本身不是問題，冷凍蔬菜、無糖豆漿也是加工；值得注意的是那些經過大量配方調整、很難看出原本食材的產品。用「看得出原本的樣子嗎？」來挑選，是最簡單的判斷方式。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'研究數據引自BMJ 2024傘狀回顧並標示證據等級，國內建議引自國健署，未點名特定品牌或產品，研究屬觀察性已說明為「相關」。',
    ai_rationale:{basis:['BMJ 2024傘狀回顧：心血管疾病相關死亡風險約高50%等','國健署防癌與減鹽衛教'],
      layout_reason:'先用表格整理研究發現，再對照國內衛教，最後給日常減少高度加工食品的做法。',
      tone:'專業易懂', tone_reason:'需說明證據等級與研究性質。',
      to_verify:['國內查無超加工食品官方定義與攝取統計']},
    decision_points:[DP_DEF]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'泡麵、香腸、零食常常吃？認識「超加工食品」',
    update_date:'2026/11/20',
    intro:'忙的時候，泡麵、微波食品、零食最方便。但2024年一篇整理了近990萬人資料的大型研究發現，吃比較多「超加工食品」的人，和心血管疾病死亡、焦慮、第2型糖尿病等32種健康問題都有關。國健署也一直提醒：多吃新鮮食物，少吃加工食品和加工肉品。',
    sections:[
      {heading:'研究發現了什麼？',format:'table',table:TABLE},
      {heading:'國健署這樣提醒',format:'bullets',items:[
        '多吃新鮮食物，加工食品少一點。',
        '香腸、培根、火腿這類加工肉品和大腸癌風險有關。',
        '麵包、餅乾、醬料裡也藏了不少鹽。'
      ]},
      {heading:'從今天開始',format:'bullets',items:[
        '三餐多選原本樣子的食物。',
        '加工肉品偶爾吃就好。',
        '零食不當正餐，買前看看鈉和糖。',
        '外食挑看得出食材的菜。'
      ]}
    ],
    think_tank_view:'不用完全不吃，先把每天一包零食換成一份水果，就是很好的開始。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'研究數據引自BMJ 2024並說明為相關，國內建議引自國健署，未點名特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以忙碌時的便利食物切入。', tone:'生活親切', tone_reason:'給外食族與家長。', to_verify:[]},
    decision_points:[DP_DEF]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'超加工食品：32項健康風險相關',
    update_date:'2026/11/20',
    intro:'BMJ 2024傘狀回顧：超加工食品攝取較多與心血管疾病相關死亡風險約高50%相關。國健署建議多吃新鮮食物。',
    sections:[
      {heading:'主要發現',format:'table',table:TABLE},
      {heading:'國內衛教',format:'bullets',items:[
        '少吃加工肉品。',
        '注意隱形鈉。'
      ]},
      {heading:'做法',format:'bullets',items:[
        '多選原態食物。',
        '看營養標示。'
      ]}
    ],
    think_tank_view:'看得出原本樣子的食物，是最簡單的選擇標準。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自BMJ與國健署，未點名特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為發現、衛教、做法三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'高度加工食品', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'超加工食品與 32 項健康問題相關', primary_visual:'約 50%', secondary_message:'心血管疾病相關死亡風險較高', action_priority:'多選原態食物'},
    headline_hook:'超加工食品吃太多？', headline_main:'看得出原本樣子再吃', title_accent:'原本樣子',
    hero_message:'32 項健康問題', hero_support:'與較高的超加工食品攝取相關（BMJ 2024 傘狀回顧）',
    primary_stat:{value:'約 50%', label:'心血管疾病相關死亡風險較高', note:'BMJ 2024｜45 項統合分析・觀察性研究彙整'},
    action_title:'日常這樣選',
    action_cards:[
      {key:'原', text:'主食、蛋白質、蔬果選原態食材'},
      {key:'肉', text:'香腸、火腿、培根少吃'},
      {key:'看', text:'零食買前看鈉與糖含量'},
      {key:'外', text:'外食選看得出食材的菜色'}
    ],
    carousel_suggestion:{reason:'若想把研究、國內衛教與選購方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'超加工食品', headline_main:'32 項健康問題相關'},
      {layout_type:'knowledge', headline_hook:'加工肉品', headline_main:'與大腸癌風險有關'},
      {layout_type:'action', headline_hook:'日常這樣選', headline_main:'看得出原本樣子'}]},
    hashtags:['高度加工食品','超加工食品','加工肉品','原態食物'],
    sources:['BMJ','衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'原態食物', audience:'外食族與家庭', scene:'一張桌子左邊是包裝零食和泡麵，右邊是新鮮蔬菜、雞蛋、地瓜，一隻手把右邊的籃子拉近',
      emotion:'清新、做選擇', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A table with packaged snacks and instant noodles on the left and fresh vegetables, eggs and sweet potatoes on the right, a hand pulling the fresh basket closer, fresh and decisive, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['BMJ 2024傘狀回顧','國健署防癌與減鹽衛教'],
      layout_reason:'重點是可做的選擇，選 action：4 個選購行動當主角，研究數字當背景並標註研究性質。',
      tone:'專業易懂', tone_reason:'避免恐慌，強調選擇。',
      to_verify:['國內無超加工食品官方定義']},
    decision_points:[],
    content_check_note:'內容引自BMJ與國健署並標註研究性質，未點名特定品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'高度加工食品',
    collect:{
      summary:'2024年BMJ傘狀回顧彙整近990萬人資料，發現超加工食品攝取較多與心血管疾病相關死亡、焦慮、第2型糖尿病等32項健康問題相關；國內雖無官方定義，國健署長期建議多吃新鮮食物、少吃加工食品與加工肉品。學童零食與上班族外食是主要溝通族群。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約50%：BMJ 2024傘狀回顧中，證據等級「令人信服」的結果顯示，較高的超加工食品攝取與心血管疾病相關死亡風險約高50%相關。',tag:'市場觀察',source:{name:'BMJ Group：超加工食品與30多項健康結果相關',url:'https://bmjgroup.com/consistent-evidence-links-ultra-processed-food-to-over-30-damaging-health-outcomes/'}},
        {item:'年度趨勢方向',desc:'48%至53%：同一研究中，超加工食品攝取較多與焦慮及常見精神疾患風險高48-53%、第2型糖尿病風險高12%相關，研究彙整45項統合分析。',tag:'市場觀察',source:{name:'BMJ：Ultra-processed food umbrella review',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC10899807/'}},
        {item:'政策動向',desc:'加工食品Out：國健署防癌飲食建議「多吃新鮮食物是王道」，並引述國際癌症研究機構指出食用較多加工肉品與紅肉和大腸癌風險增加有關。',tag:'官方統計',source:{name:'國健署：國人嗜食加工肉品及紅肉',url:'https://www.mohw.gov.tw/fp-2649-20047-1.html'}},
        {item:'好發族群年齡層',desc:'隱形鈉：國健署提醒麵包、餅乾、加工肉品與調理食品是容易被忽略的鈉來源，建議少食用加工或調理食品並看營養標示鈉含量。',tag:'官方統計',source:{name:'國健署：「鹽」多必失 少食用加工或調理食品',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1131&pid=2233'}}
      ],
      product_view:['機會：飲食型態與慢性病、癌症相關，可作為健康管理的衛教內容。','機會：「看得出原本樣子」的判斷法簡單好記。','風險：避免點名特定品牌或產品；研究為相關性，不得寫成因果或保證。'],
      marketing_view:['機會：超加工食品是國際熱門議題，關注度高。','機會：可結合兒童零食、外食族便當情境。','風險：國內無官方定義，引用時需說明出處與定義。'],
      alert_level:'low',
      alert_reason:'屬長期飲食議題，國際研究持續累積；無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('心血管疾病相關死亡風險約高50%','DATA_FACTUAL_ACCURACY','relative_risk',
          '50%為相對風險，且比較的是「較高 vs 較低攝取」族群，文中未說明比較基準，讀者可能誤以為吃超加工食品就會增加一半死亡率。','medium','no',
          null,'no','clarify','屬風險呈現方式。',
          '攝取較多者與較少者相比，心血管疾病相關死亡風險約高50%（相對風險）',
          ['風險約高50%']),
        F('國民健康署也長期提醒，多吃新鮮食物、少吃加工食品與加工肉品','SOURCE_EVIDENCE','dated_source',
          '引用的國健署衛教新聞稿發布年份較早（加工肉品議題約2015年），文中「長期提醒」未標示年份。','low','no',
          null,'no','clarify','屬出處年份標示。',
          '國民健康署防癌與減鹽衛教也提醒，多吃新鮮食物、少吃加工食品與加工肉品',
          ['國健署也一直提醒：多吃新鮮食物，少吃加工食品和加工肉品']),
        F('外食選看得出原本食材樣子的菜色','TERMINOLOGY_LANGUAGE','vague_heuristic',
          '「看得出原本樣子」是簡化判斷法，部分加工程度低的食品（如豆腐、優格）也看不出原料樣子，可能造成誤解。','low','no',
          null,'no','clarify','屬簡化說法的限制。',
          '外食優先選食材單純、少醬料與裹粉油炸的菜色',
          ['外食挑看得出食材的菜'])
      ],
      card:[
        F('心血管疾病相關死亡風險較高','LEGAL_COMPLIANCE','efficacy_overstatement',
          '主數字放大死亡風險，易引發恐慌，宜補「攝取較多者」與「相關」。','medium','no',
          null,'no','revise','屬風險表達。',
          '攝取較多者心血管死亡風險較高（相關）'),
        F('看得出原本樣子再吃','TERMINOLOGY_LANGUAGE','vague_heuristic',
          '簡化判斷法對豆腐、優格等不適用。','low','no',
          null,'no','clarify','屬簡化說法。',
          '多選原態、少加工食物')
      ]
    },
    title_alts:[
      '超加工食品吃太多有風險？BMJ研究整理32項健康影響',
      '泡麵、香腸、零食常常吃？認識「超加工食品」',
      '多吃原態食物：超加工食品與健康的研究一次看'
    ],
    card_title_alts:[
      ['超加工食品吃太多？','看得出原本樣子再吃'],
      ['泡麵零食常常吃？','認識超加工食品'],
      ['32 項健康問題','與超加工食品相關']
    ],
    data_addon:[
      'BMJ 2024傘狀回顧共評估45項統合分析，研究對象近990萬人。',
      '研究作者表示，傘狀回顧無法排除其他未測量因素的影響。',
      '國健署建議烹調少油、少鹽、少糖，避免高溫燒烤肉類。'
    ],
    cta:'這週把一餐的泡麵或微波食品，換成一份有蔬菜、蛋白質和全穀的原態餐。'
  });
})();
