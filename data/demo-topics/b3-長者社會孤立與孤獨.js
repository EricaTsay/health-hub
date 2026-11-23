/* v6 示範主題：長者社會孤立與孤獨（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：行政院／衛福部〈卓揆：四大面向強化高齡者福利照顧措施〉（115/10/15，2027年完成70萬位獨居老人訪查、送餐擴大至7萬位）、
   衛福部社家署〈落實健康台灣國政願景 建構全方位高齡照顧支持體系〉（115/10/15，逾5,200處社區照顧關懷據點）、
   內政部統計通報113年第24週（112年6月底65歲以上419萬人，獨居占23.3%）。
   註：國內長者孤獨感盛行率查無官方統計。
   參考方向：健康智庫〈獨老普查：面對孤立與孤獨的起點〉2025/11。 */
(function(){
  const REFS = [
    {title:'卓揆：四大面向強化高齡者福利照顧措施 落實「健康老化、在地安老、安寧善終」願景',source:'衛生福利部（行政院新聞）',url:'https://www.mohw.gov.tw/cp-16-88206-1.html'},
    {title:'落實健康台灣國政願景 建構全方位高齡照顧支持體系',source:'衛生福利部社會及家庭署',url:'https://www.mohw.gov.tw/cp-16-88204-1.html'},
    {title:'內政統計通報113年第24週：銀髮安居',source:'內政部統計處',url:'https://ws.moi.gov.tw/Download.ashx?u=LzAwMS9VcGxvYWQvNDAwL3JlbGZpbGUvOTAwOS8zMTY2NTQvYTA2OWJkY2UtYWM0Zi00NDc5LTk1OWEtY2Y5MTEzYTMwZjk3LnBkZg%3D%3D&n=MTEz5bm056ysMjTpgLHlhafmlL%2FntbHoqIjpgJrloLFf6YqA6auu5a6J5bGFLnBkZg%3D%3D'},
    {title:'衛福部加強弱勢民生照顧 擴大推動獨居老人關懷',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7173-83786-1.html'}
  ];
  const TABLE = {headers:['孤立與孤獨','差別'], rows:[
    ['社會孤立','客觀狀態：獨居、很少與人往來、缺少社會連結'],
    ['孤獨感','主觀感受：覺得沒人理解、沒人可以說話，即使身邊有人也可能出現'],
    ['共同影響','可能與憂鬱、失智、慢性病惡化及活動量減少相關']
  ]};
  const TAGS = ['長者孤獨','獨居老人','社區關懷據點','高齡心理健康','社會參與'];

  const DP_SOLO = {id:'dp-iso-solo', type:'data_scope', title:'獨居人數與比例的口徑',
    desc:'「70萬位獨居老人」是行政院2026年政策新聞的訪查目標人數；「65歲以上獨居占23.3%」是內政部112年6月底的統計（以戶籍與居住安排推估）。兩者時間與口徑不同，AI 分開呈現。',
    current:'2027年完成70萬位獨居老人訪查及需求分級（行政院115/10/15）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'70萬位', value:'訪查目標', note:'行政院115/10/15新聞（目前採用）'},
      {label:'23.3%', value:'65歲以上獨居比例', note:'內政部112年6月底統計'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'長者孤立與孤獨不是小事：認識警訊與社區關懷資源',
    update_date:'2026/11/20',
    intro:'社會孤立是指與人互動少、缺乏社會連結的客觀狀態，孤獨則是覺得沒人理解、沒人可以說話的主觀感受。內政部統計，112年6月底65歲以上長者419萬人中，獨居者占23.3%。行政院於115年10月宣布，將在2027年完成70萬位獨居老人的訪查與需求分級，送餐服務對象擴大至7萬位；全國也已布建逾5,200處社區照顧關懷據點。',
    sections:[
      {heading:'孤立和孤獨有什麼不同',format:'table',table:TABLE},
      {heading:'這些變化可能是警訊',format:'bullets',items:[
        '很少出門、不再參加原本的聚會或宗教活動。',
        '電話不接、家裡環境變得凌亂，三餐不定時。',
        '常說「沒人會在乎我」「活著沒意思」，情緒低落。'
      ]},
      {heading:'可以運用的資源',format:'bullets',items:[
        '社區照顧關懷據點提供關懷訪視、電話問安、共餐服務與健康促進活動。',
        '政府擴大獨居老人關懷送暖、送餐服務，並放寬緊急救援裝置補助資格。',
        '長輩情緒低落或有輕生念頭時，可撥打1925安心專線；福利諮詢可撥1957。'
      ]}
    ],
    think_tank_view:'孤立與孤獨常是慢慢發生的：退休、喪偶、子女搬遠、行動不便，一個個連結斷掉。重建連結不一定需要很大的改變，一個固定的共餐時間、一通每週的電話、一位熟悉的據點志工，都能讓長輩重新被看見。對家人來說，「常聯絡」本身就是最實在的照顧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'獨居比例引自內政部112年統計，政策目標引自行政院與衛福部115年新聞，附求助專線，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['獨居占23.3%取自內政部統計通報（112年6月底）','70萬位、7萬位取自行政院115/10/15新聞','逾5,200處據點取自社家署115/10/15新聞'],
      layout_reason:'先以表格區分孤立與孤獨，再列警訊與資源。',
      tone:'專業易懂', tone_reason:'議題敏感，需提供明確資源。',
      to_verify:['國內長者孤獨感盛行率查無官方統計','獨居比例為112年資料']},
    decision_points:[DP_SOLO]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽一個人住還好嗎？別讓孤單悄悄找上長輩',
    update_date:'2026/11/20',
    intro:'內政部統計，65歲以上長輩大約每4位就有1位獨居（112年為23.3%）。一個人住不一定孤單，但如果很少出門、不太跟人說話，心情和身體都可能慢慢變差。政府也正在擴大關懷獨居長輩，全國有超過5,200處社區關懷據點可以去。',
    sections:[
      {heading:'孤立跟孤獨不一樣',format:'table',table:TABLE},
      {heading:'這些小改變要留意',format:'bullets',items:[
        '越來越少出門，以前的朋友都不聯絡了。',
        '電話常常沒接，家裡變亂、吃飯不定時。',
        '常說「沒人在乎我」。'
      ]},
      {heading:'可以怎麼幫忙？',format:'bullets',items:[
        '固定時間打電話、視訊，讓長輩有期待。',
        '陪長輩去附近的社區關懷據點參加共餐、活動。',
        '長輩心情很低落時，可以打1925安心專線。'
      ]}
    ],
    think_tank_view:'每週一通固定時間的電話，對獨居的爸媽來說，可能是一整週最期待的事。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自內政部與衛福部並標明年份，「每4位就有1位」依23.3%換算，附求助專線，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從子女關心獨居爸媽切入。', tone:'生活親切', tone_reason:'溫暖、可行。', to_verify:['獨居比例為112年資料']},
    decision_points:[DP_SOLO]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'長者孤立與孤獨：警訊與資源',
    update_date:'2026/11/20',
    intro:'112年65歲以上獨居占23.3%（內政部）。政府目標2027年完成70萬位獨居老人訪查。',
    sections:[
      {heading:'孤立vs孤獨',format:'table',table:TABLE},
      {heading:'警訊',format:'bullets',items:[
        '少出門、不接電話、情緒低落。'
      ]},
      {heading:'資源',format:'bullets',items:[
        '社區關懷據點、送餐、1925安心專線。'
      ]}
    ],
    think_tank_view:'常聯絡、多陪伴，就是最實在的照顧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自內政部與衛福部並標明年份，附求助專線，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為對照、警訊、資源三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['獨居比例為112年資料']},
    decision_points:[DP_SOLO]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'長者社會孤立與孤獨', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'約每 4 位長者就有 1 位獨居', primary_visual:'23.3%', secondary_message:'2027 年完成 70 萬位獨老訪查', action_priority:'常聯絡、去據點'},
    headline_hook:'爸媽一個人住還好嗎？', headline_main:'別讓孤單悄悄找上長輩', title_accent:'孤單',
    primary_stat:{kicker:'112 年 6 月底・65 歲以上', value:'23.3%', label:'長者獨居比例', note:'內政部統計｜65 歲以上 419 萬人'},
    secondary_stats:[
      {value:'70 萬位', label:'2027 年完成獨居老人訪查'},
      {value:'逾 5,200 處', label:'社區照顧關懷據點'},
      {value:'7 萬位', label:'送餐服務擴大對象'}
    ],
    action_title:'家人可以這樣做',
    action_cards:[
      {key:'打', text:'每週固定時間打電話或視訊'},
      {key:'陪', text:'陪長輩到社區據點共餐、活動'},
      {key:'察', text:'留意少出門、不接電話等變化'},
      {key:'撥', text:'情緒低落撥 1925 安心專線'}
    ],
    carousel_suggestion:{reason:'若想把數據、孤立與孤獨的差異與資源分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'獨居長者', headline_main:'約每 4 位就有 1 位'},
      {layout_type:'comparison', headline_hook:'孤立 vs 孤獨', headline_main:'客觀狀態與主觀感受'},
      {layout_type:'action', headline_hook:'重建連結', headline_main:'家人與社區一起來'}]},
    hashtags:['長者孤獨','獨居老人','社區關懷據點','社會參與'],
    sources:['內政部','衛生福利部'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'長者社會連結', audience:'獨居長者與家人', scene:'長者在社區據點與其他長輩一起共餐聊天，志工在旁協助',
      emotion:'溫暖、熱絡', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'Older adults sharing a meal and chatting together at a community center while a volunteer helps, warm and lively mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：65歲以上獨居占23.3%（內政部112年）','政策目標取自行政院與社家署115年新聞'],
      layout_reason:'關鍵訊息是「獨居普遍、政府擴大關懷」，選 data：獨居比例當主角，政策數字放第二層，最後給家人行動。',
      tone:'專業易懂', tone_reason:'溫暖、避免標籤化。',
      to_verify:['獨居比例為112年資料']},
    decision_points:[Object.assign({}, DP_SOLO, {current:'23.3%｜112 年 6 月底 65 歲以上獨居比例（內政部）'})],
    content_check_note:'數據引自內政部與衛福部並標明年份，附求助專線，未使用療效保證用語。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'長者社會孤立與孤獨',
    collect:{
      summary:'內政部統計112年6月底65歲以上長者中獨居占23.3%，行政院於115年10月宣布2027年完成70萬位獨居老人訪查、送餐擴大至7萬位，全國社區照顧關懷據點逾5,200處；長者孤立與孤獨是超高齡社會的新興政策議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'23.3%獨居：內政部統計，112年6月底65歲以上長者419萬人，其中獨居者占23.3%。',tag:'官方統計',source:{name:'內政部：內政統計通報113年第24週',url:'https://ws.moi.gov.tw/Download.ashx?u=LzAwMS9VcGxvYWQvNDAwL3JlbGZpbGUvOTAwOS8zMTY2NTQvYTA2OWJkY2UtYWM0Zi00NDc5LTk1OWEtY2Y5MTEzYTMwZjk3LnBkZg%3D%3D&n=MTEz5bm056ysMjTpgLHlhafmlL%2FntbHoqIjpgJrloLFf6YqA6auu5a6J5bGFLnBkZg%3D%3D'}},
        {item:'政策動向',desc:'70萬位獨居老人訪查：行政院115年10月宣布2027年完成70萬位獨居老人訪查及需求分級，送餐服務對象擴大至7萬位，並放寬緊急救援裝置補助資格。',tag:'官方統計',source:{name:'衛生福利部：卓揆四大面向強化高齡者福利照顧措施',url:'https://www.mohw.gov.tw/cp-16-88206-1.html'}},
        {item:'年度趨勢方向',desc:'逾5,200處據點：截至115年10月，全國布建逾5,200處社區照顧關懷據點，提供關懷訪視、電話問安、共餐與健康促進。',tag:'官方統計',source:{name:'社家署：建構全方位高齡照顧支持體系',url:'https://www.mohw.gov.tw/cp-16-88204-1.html'}},
        {item:'好發族群年齡層',desc:'115-116年獨老關懷送暖：衛福部114年9月宣布與內政部民政體系合作，115至116年擴大推動獨居老人關懷送暖，分級提供服務。',tag:'官方統計',source:{name:'衛生福利部：擴大推動獨居老人關懷',url:'https://www.mohw.gov.tw/cp-7173-83786-1.html'}}
      ],
      product_view:['機會：獨居長者的關懷與緊急救援，可結合保戶家庭關懷服務。','機會：社區據點、共餐活動可作為企業社會責任合作方向。','風險：避免以孤獨死等恐嚇訴求，用語需尊重長者自主。'],
      marketing_view:['機會：重陽節、春節是「打電話給爸媽」的溝通時機。','機會：政府70萬獨老訪查政策具新聞性。','風險：議題情緒性強，需附求助專線。'],
      alert_level:'medium',
      alert_reason:'行政院115年10月宣布擴大獨居老人關懷政策，議題具新聞性與政策時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('可能與憂鬱、失智、慢性病惡化及活動量減少相關','SOURCE_EVIDENCE','unsourced_claim',
          '健康影響未附研究或官方出處，引用的政策新聞未提及。','low','no',
          null,'no','clarify','屬出處補充。',
          '國際研究顯示，可能與憂鬱、失智、慢性病惡化相關（出處待補）'),
        F('獨居者占23.3%','DATA_FACTUAL_ACCURACY','definition_unclear',
          '未說明「獨居」的統計定義（如戶籍或實際居住），與政策訪查的「70萬位獨居老人」口徑可能不同。','low','no',
          null,'no','clarify','屬定義說明。',
          '獨居者占23.3%（內政部依居住安排統計）'),
        F('一個固定的共餐時間、一通每週的電話、一位熟悉的據點志工，都能讓長輩重新被看見','MEDICAL_INTERPRETATION','outcome_generalization',
          '效果描述缺乏依據，屬鼓勵性說法，可改為較中性的表述。','low','no',
          null,'no','clarify','屬語氣調整。',
          '一個固定的共餐時間、一通每週的電話、一位熟悉的據點志工，都是重建連結的開始'),
        F('可能是一整週最期待的事','TERMINOLOGY_LANGUAGE','assumption',
          '對長輩感受的推測，可能不適用每位長者。','low','no',
          null,'no','clarify','屬語氣調整。',
          '可以成為長輩生活中的固定連結')
      ],
      card:[
        F('2027 年完成獨居老人訪查','REGULATORY_COMPLIANCE','policy_status',
          '這是行政院宣布的政策目標，尚未完成，卡面可能讓讀者以為已訪查。','low','no',
          null,'no','clarify','屬政策狀態說明。',
          '目標 2027 年完成獨居老人訪查'),
        F('長者獨居比例','DATA_FACTUAL_ACCURACY','definition_unclear',
          '未說明統計定義與年份差異（112年），卡面 kicker 雖有年份但 label 未說明口徑。','low','no',
          null,'no','clarify','屬定義說明。',
          '長者獨居比例（內政部居住安排統計）')
      ]
    },
    title_alts:[
      '長者孤立與孤獨不是小事：認識警訊與社區關懷資源',
      '爸媽一個人住還好嗎？別讓孤單悄悄找上長輩',
      '約每4位長者就有1位獨居：政府2027年完成70萬位獨老訪查'
    ],
    card_title_alts:[
      ['爸媽一個人住還好嗎？','別讓孤單悄悄找上長輩'],
      ['約每 4 位長者 1 位獨居','常聯絡就是照顧'],
      ['孤立 vs 孤獨','認識差別與資源']
    ],
    data_addon:[
      '社區照顧關懷據點四大核心任務：關懷訪視、電話問安、共餐服務、健康促進。',
      '行政院目標社區照顧關懷據點村里涵蓋率逾90%。',
      '福利諮詢專線1957。'
    ],
    cta:'這週和家中長輩約好每週固定的通話時間，並一起查查住家附近的社區照顧關懷據點有哪些活動。'
  });
})();
