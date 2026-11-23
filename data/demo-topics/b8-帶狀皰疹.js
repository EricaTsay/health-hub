/* v6 示範主題：帶狀皰疹（B8 傳染病防治）
   查證日期：2026-11-20。查無疾管署可讀取的帶狀疱疹疫苗官方頁面（台北市衛生局資料為圖片PDF），
   以疾管署首長發言（聯合報2025-12-30、2026-06-11）與屏東縣衛生局新聞（中央社2026-11-09）為主；疾病數字為成大醫院醫師引述（二手）。
   參考方向：健康智庫〈皮蛇也有疫苗可以打？〉2023/05、〈帶狀皰疹疫苗也能防失智？〉2025/04。 */
(function(){
  const REFS = [
    {title:'帶狀皰疹疫苗納公費？疾管署評估經費恐破900億元',source:'聯合報',url:'https://udn.com/news/story/7266/9235204'},
    {title:'皮蛇上身讓人憂心 原民會爭取公費帶狀皰疹疫苗…羅一鈞回應了',source:'聯合報',url:'https://udn.com/news/story/7266/9560481'},
    {title:'屏東擴大公費帶狀疱疹疫苗補助 下修至50歲',source:'中央社',url:'https://cna.com.tw/news/aloc/202611090153.aspx'}
  ];
  const TABLE = {headers:['項目','說明'], rows:[
    ['建議對象','50歲以上成人，及18歲以上免疫不全或免疫功能低下者（疾管署建議）'],
    ['接種方式','非活性帶狀疱疹疫苗共2劑，第2劑於第1劑後2至6個月內完成'],
    ['費用','目前以自費為主，部分縣市針對特定族群補助'],
    ['公費進度','疾管署評估成本效益中，結果將送傳染病防治諮詢會（ACIP）討論']
  ]};
  const TAGS = ['帶狀皰疹','皮蛇','帶狀疱疹疫苗','50歲以上','神經痛'];

  const DP_COST = {id:'dp-zoster-cost', type:'data_version', title:'自費價格兩種說法',
    desc:'疾管署副署長2025年12月表示2劑每人自費約2萬元，疾管署長2026年6月則說打完2劑約1萬5,000元。兩者都是官方首長經媒體引述，實際價格依院所而異，AI 沒有替你選定一個數字。',
    current:'2劑自費約1萬5,000至2萬元（疾管署首長經媒體引述）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約 2 萬元', value:'疾管署副署長', note:'聯合報2025-12-30'},
      {label:'約 1 萬 5,000 元', value:'疾管署長', note:'聯合報2026-06-11'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'帶狀皰疹（皮蛇）一生約3成會遇到：50歲以上可評估疫苗，公費仍在評估',
    update_date:'2026/11/20',
    intro:'帶狀皰疹俗稱「皮蛇」，是水痘－帶狀疱疹病毒再次活化引起，好發於50歲以上及免疫低下者。成大醫院家庭醫學部醫師2025年指出，每個人一生中至少有3成機率罹患，年發生率已由千分之7.9上升至千分之9.6，約4成患者會留下長期疼痛、麻木等後遺症。疾管署建議50歲以上成人與18歲以上免疫低下者接種，目前仍以自費為主，公費接種正在評估中。',
    sections:[
      {heading:'帶狀疱疹疫苗重點',format:'table',table:TABLE},
      {heading:'為什麼要重視',format:'bullets',items:[
        '醫師指出，超過5成患者在急性期經歷劇烈疼痛，約4成留下長期疼痛或麻木。',
        '醫師估計目前全台接種過帶狀皰疹疫苗的比例不到1成。',
        '疾管署表示若僅針對65歲以上約450萬名長者公費接種，經費估計高達約900億元，因此正進行成本效益評估。'
      ]},
      {heading:'地方補助與就醫提醒',format:'bullets',items:[
        '部分縣市針對特定族群補助，例如屏東縣2026年11月起將補助年齡下修至50歲，對象需同時符合低收或中低收入戶與特定疾病條件。',
        '各縣市條件不同，接種前可洽戶籍地衛生局或衛生所確認。',
        '皮膚出現單側帶狀分布的疼痛水泡時，應儘早就醫。'
      ]}
    ],
    think_tank_view:'帶狀皰疹不會在人與人之間大規模流行，但對個人的生活品質影響很大，尤其是疼痛後遺症。50歲以上、有慢性病或免疫力較差的族群，可以和醫師討論是否接種；同時留意居住縣市的補助資格，以及疾管署公費評估的後續結果。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'疫苗建議與公費評估引自疾管署首長發言，疾病數字標明為醫師引述，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['疾管署建議對象與2劑時程（屏東縣衛生局引述，中央社2026-11-09）','3成、千分之9.6、4成後遺症為成大醫院醫師（聯合報2025-12-30）'],
      layout_reason:'先用表格整理疫苗重點，再說明疾病負擔，最後給補助與就醫提醒。',
      tone:'專業易懂', tone_reason:'疫苗決策需要清楚的對象與費用資訊。',
      to_verify:['疾管署帶狀疱疹疫苗建議原文頁面未讀取到','疾病數字為醫師引述']},
    decision_points:[DP_COST]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'被「皮蛇」纏上有多痛？50歲以後可以問問帶狀皰疹疫苗',
    update_date:'2026/11/20',
    intro:'帶狀皰疹就是大家說的「皮蛇」，小時候得過水痘的病毒躲在身體裡，年紀大或抵抗力變差時就可能跑出來。醫師說，一個人一輩子大約有3成機會遇到，很多人痛到睡不著，約4成還會留下長期疼痛。疾管署建議50歲以上的人可以考慮打疫苗。',
    sections:[
      {heading:'帶狀皰疹疫苗，先看這張表',format:'table',table:TABLE},
      {heading:'為什麼值得考慮？',format:'bullets',items:[
        '一半以上的人發作時非常痛。',
        '有些人水泡好了，神經痛還會持續很久。',
        '目前台灣打過疫苗的人，醫師估計還不到1成。'
      ]},
      {heading:'有補助嗎？',format:'bullets',items:[
        '現在多半要自費，公費還在評估中。',
        '有些縣市會補助特定族群，可以打電話問衛生所。',
        '身上一側出現會痛的水泡，趕快去看醫生。'
      ]}
    ],
    think_tank_view:'爸媽過了50歲，下次回診時可以順便問問醫師適不適合打帶狀皰疹疫苗，也記得查一下住的縣市有沒有補助。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字標明為醫師說法，疫苗建議引自疾管署，語氣親切，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「皮蛇有多痛」帶出疫苗與補助。', tone:'生活親切', tone_reason:'給熟齡族群與子女閱讀。', to_verify:[]},
    decision_points:[DP_COST]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'帶狀皰疹：50歲以上評估疫苗',
    update_date:'2026/11/20',
    intro:'疾管署建議50歲以上及18歲以上免疫低下者接種帶狀疱疹疫苗，共2劑，目前自費為主，公費評估中。',
    sections:[
      {heading:'疫苗重點',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '查詢戶籍地縣市補助資格。',
        '單側疼痛水泡儘早就醫。'
      ]}
    ],
    think_tank_view:'50歲後和醫師討論接種，留意縣市補助。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'疫苗建議引自疾管署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為疫苗重點與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_COST]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'帶狀皰疹', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'50 歲以上可評估帶狀疱疹疫苗', primary_visual:'約 3 成', secondary_message:'約 4 成留下長期疼痛等後遺症', action_priority:'諮詢醫師、查縣市補助'},
    headline_hook:'被皮蛇纏上有多痛？', headline_main:'50 歲起評估帶狀疱疹疫苗', title_accent:'帶狀疱疹疫苗',
    hero_message:'一生約 3 成會遇到', hero_support:'成大醫院醫師（2025 年媒體引述）',
    primary_stat:{value:'約 4 成', label:'患者留下長期疼痛等後遺症', note:'成大醫院醫師引述｜接種率不到 1 成'},
    action_title:'這樣保護自己',
    action_cards:[
      {key:'問', text:'50 歲以上、免疫低下者問醫師是否接種'},
      {key:'劑', text:'非活性疫苗共 2 劑，間隔 2–6 個月'},
      {key:'查', text:'洽戶籍地衛生所查詢補助資格'},
      {key:'醫', text:'單側疼痛水泡儘早就醫'}
    ],
    notice:'公費接種**仍在評估**，結果將送 ACIP 討論（疾管署）。',
    carousel_suggestion:{reason:'若想把疾病負擔、疫苗與補助分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'皮蛇有多常見', headline_main:'一生約 3 成會遇到'},
      {layout_type:'knowledge', headline_hook:'帶狀疱疹疫苗', headline_main:'對象、劑數、費用'},
      {layout_type:'action', headline_hook:'有補助嗎？', headline_main:'洽衛生所查資格'}]},
    hashtags:['帶狀皰疹','皮蛇','帶狀疱疹疫苗','50歲以上'],
    sources:['衛生福利部疾病管制署（媒體引述）','屏東縣政府衛生局'],
    illustration_category:'virus-infection',
    illustration:{topic:'帶狀疱疹疫苗諮詢', audience:'50 歲以上熟齡族群', scene:'一位熟齡女性在診間和醫師討論疫苗接種，桌上放著衛教單',
      emotion:'安心、有準備', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A woman in her fifties discussing vaccination with a doctor in a clinic, a leaflet on the desk, prepared and reassured, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['3成、4成後遺症、接種率不到1成為成大醫院醫師（聯合報2025-12-30）','建議對象與2劑時程為疾管署建議（中央社2026-11-09引述）'],
      layout_reason:'關鍵是「可評估接種」，選 action：4 個行動當主角，疾病負擔當 hero 與主數字，公費狀態放提醒。',
      tone:'專業易懂', tone_reason:'疫苗資訊需清楚、不推銷。',
      to_verify:['疾病數字為醫師引述']},
    decision_points:[Object.assign({}, DP_COST, {current:'2 劑自費約 1.5–2 萬元'})],
    content_check_note:'疫苗建議與公費狀態引自疾管署，疾病數字標明醫師引述，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'帶狀皰疹',
    collect:{
      summary:'帶狀皰疹（皮蛇）好發於50歲以上及免疫低下者，醫師指出一生約3成機率罹患、約4成留下長期疼痛等後遺症；疾管署建議50歲以上成人評估接種，公費接種正評估成本效益、部分縣市已有補助，是熟齡族群值得長期溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約3成：成大醫院家庭醫學部醫師2025年12月於立法院座談指出，每個人一生中至少有3成機率罹患帶狀皰疹，年發生率已由千分之7.9上升至千分之9.6（媒體引述）。',tag:'市場觀察',source:{name:'聯合報：帶狀皰疹疫苗納公費？疾管署評估經費恐破900億元',url:'https://udn.com/news/story/7266/9235204'}},
        {item:'年度趨勢方向',desc:'約450萬人：疾管署副署長表示若僅針對65歲以上約450萬名長者公費接種，經費估計高達約900億元，已委託專業單位進行成本效益評估，報告將送傳染病防治諮詢會討論。',tag:'市場觀察',source:{name:'聯合報：帶狀皰疹疫苗納公費？疾管署評估經費恐破900億元',url:'https://udn.com/news/story/7266/9235204'}},
        {item:'政策動向',desc:'屏東補助下修至50歲：屏東縣衛生局2026年11月起將帶狀疱疹疫苗補助年齡由65歲下修至50歲，對象須同時具低收或中低收入戶資格及特定疾病或免疫低下條件。',tag:'市場觀察',source:{name:'中央社：屏東擴大公費帶狀疱疹疫苗補助 下修至50歲',url:'https://cna.com.tw/news/aloc/202611090153.aspx'}},
        {item:'好發族群年齡層',desc:'接種率不到1成：醫師估計全台接種過帶狀皰疹疫苗的比例不到1成，疾管署建議50歲以上成人及18歲以上免疫不全或免疫低下者接種，非活性疫苗共2劑、間隔2至6個月。',tag:'市場觀察',source:{name:'中央社：屏東擴大公費帶狀疱疹疫苗補助 下修至50歲',url:'https://cna.com.tw/news/aloc/202611090153.aspx'}}
      ],
      product_view:['機會：熟齡族群關注疫苗與慢性疼痛，可結合健康管理服務提供疫苗資訊。','機會：縣市補助資格查詢是實用的客戶服務內容。','風險：疫苗屬醫療決策，避免與保險商品連結推銷，並依保單條款如實說明。'],
      marketing_view:['機會：公費評估結果出爐時會是溝通時點，可預先準備衛教素材。','機會：「皮蛇」是熟齡族群熟悉的說法，容易引起共鳴。','風險：避免以疼痛恐懼推廣疫苗，以醫師評估為主。'],
      alert_level:'medium',
      alert_reason:'疾管署公費評估預計2026年底出爐，屬有政策時效的議題；評估結果仍待公布，即時政策交由正式模式查詢。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('每個人一生中至少有3成機率罹患','SOURCE_EVIDENCE','secondary_citation',
          '文中已註明是成大醫院醫師指出，但醫師未說明數據出處（國內研究或國際文獻），屬二手引述。','medium','yes',
          '帶狀疱疹終生罹患率與年發生率的研究出處。','no','confirm','屬二手引述。',
          '每個人一生中至少有3成機率罹患（醫師引述，研究出處待查）'),
        F('疾管署建議50歲以上成人與18歲以上免疫低下者接種','SOURCE_EVIDENCE','secondary_citation',
          '這項建議是屏東縣衛生局新聞稿轉述疾管署建議，文章沒有附疾管署原始頁面，讀者無法核對。','low','yes',
          '疾管署成人預防接種建議時程表。','no','confirm','建議內容可信，但缺原始出處。',
          '疾管署建議（成人預防接種建議時程表）50歲以上成人與18歲以上免疫低下者接種'),
        F('一個人一輩子大約有3成機會遇到','SOURCE_EVIDENCE','secondary_citation',
          '生活親切版只寫「醫師說」，沒有醫院與年份，也沒說明不是官方統計。','low','no',
          null,'no','clarify','補上出處即可。',
          '成大醫院醫師2025年說，一個人一輩子大約有3成機會遇到'),
        F('目前自費為主，公費評估中','TERMINOLOGY_LANGUAGE','detail_missing',
          '簡潔有力版沒有提到部分縣市已有補助，讀者可能以為完全沒有補助管道。','low','no',
          null,'no','clarify','補一句地方補助即可。',
          '目前自費為主（部分縣市補助特定族群），公費評估中')
      ],
      card:[
        F('患者留下長期疼痛等後遺症','SOURCE_EVIDENCE','secondary_citation',
          '主數字「約 4 成」是醫師說法，未說明原始研究，也不是專指帶狀疱疹後神經痛的比例。','medium','no',
          null,'no','clarify','屬出處與定義標示。',
          '患者留下疼痛、麻木等後遺症（醫師說法）'),
        F('公費接種**仍在評估**，結果將送 ACIP 討論（疾管署）。','CURRENCY_TIMELINESS','pending_policy',
          '疾管署長2026年6月表示評估結果預計年底出爐，卡面沒有標示這個說法的時間點，評估結果公布後內容就會過時。','low','yes',
          '疾管署帶狀疱疹疫苗成本效益評估結果與ACIP決議。','yes','confirm','政策狀態會隨評估結果改變。',
          '公費接種評估中（疾管署 2026 年 6 月說法）')
      ]
    },
    title_alts:[
      '帶狀皰疹（皮蛇）一生約3成會遇到：50歲以上可評估疫苗，公費仍在評估',
      '被「皮蛇」纏上有多痛？50歲以後可以問問帶狀皰疹疫苗',
      '帶狀疱疹疫苗公費進度與縣市補助：熟齡族群須知'
    ],
    card_title_alts:[
      ['被皮蛇纏上有多痛？','50 歲起評估帶狀疱疹疫苗'],
      ['一生約 3 成會遇到','認識帶狀皰疹'],
      ['有補助嗎？','洽衛生所查資格']
    ],
    data_addon:[
      '成大醫院醫師（2025-12）：年發生率由千分之7.9升至千分之9.6，超過5成患者急性期劇痛。',
      '疾管署副署長（2025-12）：65歲以上約450萬人公費接種估計約900億元。',
      '屏東縣（2026-11）：補助年齡下修至50歲，限低收／中低收入戶且具特定疾病或免疫低下。'
    ],
    cta:'家中50歲以上的長輩，下次回診問醫師適不適合接種，並打給戶籍地衛生所查補助資格。'
  });
})();
