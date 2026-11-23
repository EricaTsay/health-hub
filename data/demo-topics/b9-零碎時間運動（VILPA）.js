/* v6 示範主題：零碎時間運動（VILPA）（B9 飲食營養與運動）
   查證日期：2026-11-20。數據來源：Stamatakis E. et al., Nature Medicine 2022（英國生物樣本庫25,241名無運動習慣者，平均追蹤6.9年）、國健署問答〈每天要運動多久才會對體重控制有幫忙？〉（每次至少10分鐘累積）、運動部全民運動署114年運動現況調查（規律運動人口35.6%）。
   注意：國內官方尚未查到引用VILPA的衛教資料；研究為觀察性，只能說「相關」。
   參考方向：健康智庫〈日常五分鐘 VILPA運動助健康〉2025/05、〈只在周末運動，效果也不差！〉2022/10。 */
(function(){
  const REFS = [
    {title:'Association of wearable device-measured vigorous intermittent lifestyle physical activity with mortality',source:'Nature Medicine (2022)',url:'https://www.nature.com/articles/s41591-022-02100-x'},
    {title:'Brief bursts of vigorous activity in daily life are linked to lower mortality（研究摘要）',source:'Nature Medicine (2022)',url:'https://www.nature.com/articles/s41591-022-02101-w'},
    {title:'每天要運動多久才會對體重控制有幫忙？',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=825&pid=14222'},
    {title:'114年運動現況調查成果發表 規律運動人口再增加',source:'運動部全民運動署',url:'https://www.sa.gov.tw/News_Content/362/20136'}
  ];
  const TABLE = {headers:['生活場景','VILPA 怎麼做（每次約1-2分鐘）'], rows:[
    ['通勤','趕公車、轉乘時用很快的速度走'],
    ['上下樓','改走樓梯，快步爬1-2層'],
    ['出門辦事','提著採買的東西快步走一段'],
    ['在家','做家事時加快速度，如快速拖地、搬東西']
  ]};
  const TAGS = ['VILPA','零碎時間運動','爬樓梯','身體活動','上班族健康'];

  const DP_BOUT = {id:'dp-vilpa-bout', type:'guideline_difference', title:'「每次至少10分鐘」與新觀念不同',
    desc:'國健署既有問答寫「每次至少維持10分鐘，總和達30分鐘」才累積；VILPA研究引述的新版國際指引則強調「每一次活動都算數」，不再要求每次10分鐘。兩者是不同時期的建議，AI 沒有替你判斷是否要提及差異。',
    current:'VILPA：每次1-2分鐘的生活中高強度活動也與健康效益相關',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'1-2分鐘', value:'VILPA 研究', note:'Nature Medicine 2022，引述新版國際指引「all activity counts」'},
      {label:'10分鐘', value:'國健署既有問答', note:'每次至少10分鐘、每日累積30分鐘'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'沒時間運動？每天3次、每次1分鐘的「VILPA」也有效益',
    update_date:'2026/11/20',
    intro:'VILPA（劇烈間歇性生活型身體活動）指日常生活中短暫、高強度的動作，例如快步爬樓梯、趕公車。2022年刊登於《Nature Medicine》的研究分析英國生物樣本庫25,241名沒有運動習慣的成人，平均追蹤6.9年，發現每天約3次、每次1-2分鐘的VILPA，與全死因及癌症死亡風險降低38%至40%、心血管疾病死亡風險降低48%至49%相關。對國內規律運動人口僅35.6%的現況，VILPA提供了另一個起點。',
    sections:[
      {heading:'把VILPA放進生活',format:'table',table:TABLE},
      {heading:'研究怎麼看',format:'bullets',items:[
        '受試者配戴腕式加速度計，研究對象平均61.8歲、閒暇時間沒有運動習慣。',
        '每天累積約4.4分鐘的VILPA，與全死因及癌症死亡風險降低26%至30%相關。',
        '此為觀察性研究，顯示的是關聯而非因果，仍需更多研究確認。'
      ]},
      {heading:'安全提醒',format:'bullets',items:[
        'VILPA屬高強度，有心血管疾病或久未活動者，先與醫師討論。',
        '從自己能負荷的速度開始，不必勉強衝刺。',
        'VILPA不取代每週150分鐘中等強度運動的建議，而是額外的起步方式。'
      ]}
    ],
    think_tank_view:'「沒時間運動」是最常見的理由，VILPA的意義在於把門檻降到最低：不用換衣服、不用去健身房，只要把每天本來就要做的事加快一點。從一天三次快步爬樓梯開始，比等待完美的運動計畫更實際。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'研究數據引自Nature Medicine 2022原文並標明研究對象與性質為觀察性研究，國內規律運動比例引自運動部114年調查，未使用療效保證用語。',
    ai_rationale:{basis:['VILPA研究：每天3次、每次1-2分鐘與死亡風險降低38-40%相關（Nature Medicine 2022）','114年規律運動人口35.6%（運動部）'],
      layout_reason:'先用生活場景表格說明怎麼做，再說明研究內容與限制，最後給安全提醒。',
      tone:'專業易懂', tone_reason:'需清楚區分「相關」與「因果」。',
      to_verify:['國內官方尚未查到VILPA相關衛教資料','國健署既有「每次10分鐘」說法與新指引不同']},
    decision_points:[DP_BOUT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'沒空上健身房？趕公車、爬樓梯也算運動',
    update_date:'2026/11/20',
    intro:'忙到沒時間運動？有個好消息：國外研究發現，生活中短短1到2分鐘的快走、爬樓梯，一天做個3次，就和比較低的死亡風險有關。這種「零碎時間運動」叫做VILPA。2022年的研究追蹤了2萬5千多位平常不運動的人，發現有做VILPA的人，心血管疾病死亡風險低了將近一半。',
    sections:[
      {heading:'生活中的VILPA',format:'table',table:TABLE},
      {heading:'研究說了什麼？',format:'bullets',items:[
        '研究對象平均60歲左右，平常都沒有運動。',
        '每天大約累積4分多鐘，就和較低的死亡風險有關。',
        '這是觀察研究，不代表一定有效，但值得試試。'
      ]},
      {heading:'開始前提醒',format:'bullets',items:[
        '心臟不好或很久沒動的人，先問醫師。',
        '用自己可以的速度就好，不用衝。',
        '有時間的話，還是建議每週運動150分鐘。'
      ]}
    ],
    think_tank_view:'明天上班試試看：放棄電梯，快步走樓梯上一層。一天三次，就是一個好的開始。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'研究數據引自Nature Medicine 2022並說明為觀察性研究，「將近一半」依48-49%描述，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以「沒空運動」的上班族情境切入。', tone:'生活親切', tone_reason:'給忙碌上班族。', to_verify:[]},
    decision_points:[DP_BOUT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'VILPA：每天3次1分鐘的生活運動',
    update_date:'2026/11/20',
    intro:'Nature Medicine 2022研究：每天約3次、每次1-2分鐘的VILPA，與全死因死亡風險降低38-40%相關（觀察性研究）。',
    sections:[
      {heading:'生活場景',format:'table',table:TABLE},
      {heading:'研究重點',format:'bullets',items:[
        '25,241名無運動習慣者，追蹤6.9年。',
        '屬關聯性研究。'
      ]},
      {heading:'提醒',format:'bullets',items:[
        '心血管疾病者先諮詢醫師。',
        '不取代每週150分鐘建議。'
      ]}
    ],
    think_tank_view:'把每天要做的事加快一點，就是最低門檻的運動起點。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'研究數據引自Nature Medicine 2022並說明研究性質，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為場景、研究、提醒三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'零碎時間運動（VILPA）', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'每天 3 次、每次 1–2 分鐘生活高強度活動', primary_visual:'3 次', secondary_message:'與較低死亡風險相關（觀察性研究）', action_priority:'爬樓梯、快步走'},
    headline_hook:'沒時間運動？', headline_main:'每天 3 次、每次 1 分鐘', title_accent:'每次 1 分鐘',
    hero_message:'每天約 3 次', hero_support:'每次 1–2 分鐘的生活中高強度活動（Nature Medicine 2022）',
    primary_stat:{value:'38–40%', label:'全死因與癌症死亡風險較低', note:'英國 25,241 名無運動習慣者・觀察性研究'},
    action_title:'生活中這樣做',
    action_cards:[
      {key:'梯', text:'改走樓梯，快步爬 1–2 層'},
      {key:'走', text:'趕車、轉乘時用很快的速度走'},
      {key:'提', text:'提採買物品快步走一段'},
      {key:'家', text:'做家事時加快速度'}
    ],
    notice:'有心血管疾病或久未活動者，**先與醫師討論**。',
    carousel_suggestion:{reason:'若想把研究、做法與安全提醒分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'VILPA 研究', headline_main:'每天 3 次 1 分鐘'},
      {layout_type:'action', headline_hook:'生活中的 VILPA', headline_main:'4 個場景'},
      {layout_type:'knowledge', headline_hook:'開始之前', headline_main:'安全提醒'}]},
    hashtags:['VILPA','零碎時間運動','爬樓梯','身體活動'],
    sources:['Nature Medicine','運動部全民運動署'],
    illustration_category:'general',
    illustration:{topic:'零碎時間運動', audience:'忙碌上班族', scene:'一位上班族背著公事包快步爬樓梯，旁邊是電梯門',
      emotion:'有活力、俐落', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker with a briefcase briskly climbing stairs next to closed elevator doors, energetic and brisk, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['VILPA研究（Nature Medicine 2022）'],
      layout_reason:'重點是可融入生活的動作，選 action：4 個場景當主角，研究數字當背景並標註觀察性研究。',
      tone:'專業易懂', tone_reason:'降低門檻，同時避免誇大。',
      to_verify:['研究結果為關聯性']},
    decision_points:[],
    content_check_note:'研究數據引自Nature Medicine 2022並標註研究性質，未使用療效保證用語。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'零碎時間運動（VILPA）',
    collect:{
      summary:'VILPA指生活中每次1-2分鐘的高強度動作，2022年Nature Medicine研究發現每天約3次與全死因死亡風險降低38-40%相關；國內規律運動人口35.6%，多數人有「沒時間運動」的障礙。VILPA可作為低門檻的身體活動起點，但屬觀察性研究，國內官方尚未納入衛教。',
      objective_data:[
        {item:'盛行率／發生率',desc:'38%至40%：Nature Medicine 2022研究，英國25,241名無運動習慣成人中，每天約3次、每次1-2分鐘的VILPA與全死因及癌症死亡風險降低38-40%相關。',tag:'市場觀察',source:{name:'Nature Medicine：VILPA與死亡風險研究',url:'https://www.nature.com/articles/s41591-022-02100-x'}},
        {item:'好發族群年齡層',desc:'48%至49%：同一研究中，每天約3次VILPA與心血管疾病死亡風險降低48-49%相關，研究對象平均61.8歲、平均追蹤6.9年。',tag:'市場觀察',source:{name:'Nature Medicine：VILPA與死亡風險研究',url:'https://www.nature.com/articles/s41591-022-02100-x'}},
        {item:'年度趨勢方向',desc:'35.6%：運動部全民運動署114年運動現況調查，國內規律運動人口比例為35.6%，仍有多數人未達規律運動。',tag:'官方統計',source:{name:'運動部全民運動署：114年運動現況調查',url:'https://www.sa.gov.tw/News_Content/362/20136'}},
        {item:'政策動向',desc:'每次至少10分鐘：國健署既有問答建議中等強度運動可分次累積，但每次至少維持10分鐘，新版國際指引則強調各種長度的活動都算數。',tag:'官方統計',source:{name:'國健署：每天要運動多久才會對體重控制有幫忙？',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=825&pid=14222'}}
      ],
      product_view:['機會：VILPA降低運動門檻，適合結合計步或爬樓梯的健康促進活動。','機會：上班族保戶的職場健康內容。','風險：研究為觀察性，不得寫成「降低死亡率」的保證；避免與保險保障效果連結。'],
      marketing_view:['機會：「每天3分鐘」的數字很有吸引力。','機會：爬樓梯挑戰容易做成互動活動。','風險：死亡風險數字需謹慎呈現，並說明是關聯而非因果。'],
      alert_level:'low',
      alert_reason:'屬新興運動觀念，無急迫時效；國內官方尚未納入，宜以國際研究角度介紹。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('心血管疾病死亡風險低了將近一半','LEGAL_COMPLIANCE','efficacy_overstatement',
          '「低了將近一半」把觀察性研究的關聯寫成近似因果的效果，容易被理解為做VILPA就能減半死亡風險。','high','no',
          null,'no','revise','原研究為關聯性結果。',
          '心血管疾病死亡風險較低（研究顯示兩者相關）'),
        F('對國內規律運動人口僅35.6%的現況，VILPA提供了另一個起點','SOURCE_EVIDENCE','population_mismatch',
          '研究對象為英國、平均61.8歲、沒有運動習慣的族群，直接延伸到國內一般民眾，未說明族群差異。','low','no',
          null,'no','clarify','屬適用族群說明。',
          '研究對象為英國中高齡、無運動習慣者；對國內規律運動人口僅35.6%的現況，VILPA可作為參考的起點'),
        F('每天約3次、每次1-2分鐘的VILPA，與全死因及癌症死亡風險降低38%至40%','DATA_FACTUAL_ACCURACY','relative_risk',
          '38-40%為相對風險降低，研究期間共852人死亡，絕對風險差距較小；文中未說明是相對風險。','low','no',
          null,'no','clarify','屬風險呈現方式。',
          '每天約3次、每次1-2分鐘的VILPA，與全死因及癌症死亡風險相對降低38%至40%',
          ['每天約3次、每次1-2分鐘的VILPA，與全死因死亡風險降低38-40%相關'])
      ],
      card:[
        F('全死因與癌症死亡風險較低','LEGAL_COMPLIANCE','efficacy_overstatement',
          '主數字 38–40% 放大呈現，即使標註觀察性研究，仍容易被讀成保證效果；保險業對外內容宜更保守。','medium','no',
          null,'no','revise','屬法遵風險表達。',
          '與全死因死亡風險較低相關'),
        F('有心血管疾病或久未活動者，**先與醫師討論**。','MEDICAL_INTERPRETATION','missing_red_flags',
          '未提醒活動中出現胸痛、喘不過氣應立即停止。','low','no',
          null,'no','clarify','受版面限制。',
          '有心血管疾病或久未活動者先與醫師討論；胸痛喘不過氣**立即停止**。')
      ]
    },
    title_alts:[
      '沒時間運動？每天3次、每次1分鐘的「VILPA」也有效益',
      '沒空上健身房？趕公車、爬樓梯也算運動',
      '每天3分鐘的生活運動：VILPA研究告訴我們什麼'
    ],
    card_title_alts:[
      ['沒時間運動？','每天 3 次、每次 1 分鐘'],
      ['趕公車、爬樓梯','也算運動'],
      ['生活中的 VILPA','4 個場景開始動']
    ],
    data_addon:[
      '研究中VILPA的回合有92.3%不超過1分鐘、97.7%不超過2分鐘（Nature Medicine 2022）。',
      '每天累積約4.4分鐘VILPA，與全死因及癌症死亡風險降低26-30%相關。',
      '114年國人參與運動人口比例83.3%（運動部全民運動署）。'
    ],
    cta:'明天開始，把一趟電梯換成快步爬樓梯，一天做3次。'
  });
})();
