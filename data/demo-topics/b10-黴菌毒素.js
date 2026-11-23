/* v6 示範主題：黴菌毒素（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-20。數據來源：食品藥物研究年報第16卷（2025）〈市售即食花生製品黃麴毒素及赭麴毒素A監測分析〉（108-113年1,618件，PDF英文摘要本機解碼）、食藥署藥物食品安全週報第1013期（2025-02-13，IARC一級致癌物、無法以加工去除、保存建議）、食藥好文〈食品中黃麴毒素從何而來？如何避免吃下肚？〉（2023發布、2026維護）。
   參考方向：健康智庫〈發霉水果別再吃！當心「黴菌毒素」〉2025/02、〈「食」在安全：發芽的食材安全嗎？〉2025/02。 */
(function(){
  const REFS = [
    {title:'市售即食花生製品黃麴毒素及赭麴毒素A污染監測分析（食品藥物研究年報第16卷）',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/tc/includes/GetFile.ashx?id=f639027888393517340'},
    {title:'乾燥陰涼，妥善保存，防止花生製品滋生黃麴毒素（藥物食品安全週報第1013期）',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/Tc/PublishOtherEpaperContent.aspx?id=1549&tid=5061'},
    {title:'食品中黃麴毒素從何而來？如何避免吃下肚？',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/TC/siteListContent.aspx?id=51094&sid=13694'},
    {title:'台灣45﹪的花生都含有黃麴毒素，是真的嗎？',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/tc/newsContent.aspx?cid=5049&id=13674'}
  ];
  const TABLE = {headers:['黴菌毒素','重點'], rows:[
    ['黃麴毒素B1','國際癌症研究機構列為一級致癌物，無耐受量，無法藉由加工製程去除'],
    ['赭麴毒素A','會影響腎臟功能，可能引發急性腎衰竭'],
    ['好發食品','花生及其製品（花生粉最高）、穀類等易受潮的食品'],
    ['好發環境','高溫潮濕；臺灣氣候特別需要注意保存']
  ]};
  const TAGS = ['黴菌毒素','黃麴毒素','花生','食品保存','食品安全'];

  const PRO = {
    content_type:'健康文章',
    title:'發霉了切掉還能吃嗎？黃麴毒素耐熱，加工也去不掉',
    update_date:'2026/11/20',
    intro:'食品藥物管理署監測108至113年市售即食花生製品共1,618件，有10.6%的黃麴毒素或赭麴毒素A超過限量，其中以花生粉超標比例最高（黃麴毒素13.2%、赭麴毒素A 14.1%），超標產品均已下架。國際癌症研究機構將黃麴毒素B1列為一級致癌物，無耐受量，而且無法藉由加工製程去除。',
    sections:[
      {heading:'認識常見黴菌毒素',format:'table',table:TABLE},
      {heading:'發霉食物怎麼處理',format:'bullets',items:[
        '食物發霉不要因為可惜而只切掉發霉的部分，毒素不一定看得出來。',
        '黃麴毒素一般烹調、烘焙難以完全去除，加熱不能讓發霉食物變安全。',
        '花生、穀類、堅果有霉味或變色，整包丟棄。'
      ]},
      {heading:'食藥署保存建議',format:'bullets',items:[
        '選擇信譽良好的商家，注意包裝完整。',
        '購買後放入密封罐或袋中避免受潮。',
        '開封後儘早食用完畢，或存放冰箱維持低溫。'
      ]}
    ],
    think_tank_view:'黴菌毒素的麻煩在於「看不見、煮不掉」。在高溫潮濕的臺灣，與其事後判斷能不能吃，不如從買小包裝、密封、冷藏做起；一旦發霉，捨得丟才是最省的選擇。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'監測數據引自食藥署研究年報並標明期間，毒性與保存建議引自食藥署週報與食藥好文，未點名特定品牌。',
    ai_rationale:{basis:['108-113年即食花生製品1,618件，10.6%超標（食藥署研究年報）','黃麴毒素B1一級致癌物、無法加工去除（食藥署週報）'],
      layout_reason:'先用表格介紹兩種主要毒素，再說明發霉處理原則，最後給保存建議。',
      tone:'專業易懂', tone_reason:'需破除「切掉就好」的迷思。',
      to_verify:['研究年報PDF由本機解碼讀取英文摘要，建議人工對照原檔']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'麵包發霉一小塊，切掉還能吃嗎？',
    update_date:'2026/11/20',
    intro:'看到麵包、水果發霉一小塊，很多人會切掉繼續吃。但黴菌產生的毒素看不見，也不怕高溫，煮過一樣在。食藥署抽驗市售即食花生製品，108到113年有1成多（10.6%）的毒素超過標準，花生粉最常超標。其中黃麴毒素B1是一級致癌物。',
    sections:[
      {heading:'這些黴菌毒素要小心',format:'table',table:TABLE},
      {heading:'發霉了怎麼辦？',format:'bullets',items:[
        '不要只切掉發霉的地方，看起來沒事不代表沒毒素。',
        '煮過、烤過也去不掉。',
        '花生、米、堅果有霉味或變色，就整包丟掉。'
      ]},
      {heading:'這樣保存',format:'bullets',items:[
        '買包裝完整、店家可靠的。',
        '回家放密封罐，不要受潮。',
        '開了就早點吃完，或放冰箱。'
      ]}
    ],
    think_tank_view:'花生、堅果買小包就好，吃不完放冰箱；發霉就丟，別心疼。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據與建議引自食藥署並標明期間，未點名特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「發霉切掉能吃嗎」的日常疑問切入。', tone:'生活親切', tone_reason:'給家庭讀者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'黴菌毒素：發霉就丟，加熱去不掉',
    update_date:'2026/11/20',
    intro:'108-113年即食花生製品1,618件，10.6%黴菌毒素超標。黃麴毒素B1為一級致癌物，無法以加工去除。',
    sections:[
      {heading:'主要毒素',format:'table',table:TABLE},
      {heading:'處理',format:'bullets',items:[
        '發霉不只切除，整個丟棄。',
        '加熱無法去除。'
      ]},
      {heading:'保存',format:'bullets',items:[
        '密封防潮、開封儘早吃完。'
      ]}
    ],
    think_tank_view:'看不見、煮不掉，預防靠保存。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自食藥署並標明期間，未點名特定品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為毒素、處理、保存三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'黴菌毒素', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'黃麴毒素是一級致癌物，加工也去不掉', primary_visual:'10.6%', secondary_message:'即食花生製品超標比例', action_priority:'發霉就丟、密封防潮'},
    headline_hook:'發霉切掉還能吃？', headline_main:'黴菌毒素煮不掉，這樣防', title_accent:'煮不掉',
    hero_message:'加熱也去不掉', hero_support:'黃麴毒素B1為一級致癌物，無法以加工去除（食藥署）',
    primary_stat:{value:'10.6%', label:'即食花生製品黴菌毒素超標', note:'食藥署 108–113 年監測 1,618 件｜花生粉最高'},
    action_title:'這樣處理與保存',
    action_cards:[
      {key:'丟', text:'發霉不要只切掉，整個丟棄'},
      {key:'密', text:'花生堅果放密封罐防潮'},
      {key:'冷', text:'開封後儘早吃完或冷藏'},
      {key:'選', text:'選包裝完整、信譽良好商家'}
    ],
    carousel_suggestion:{reason:'若想把毒素知識、監測結果與保存方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'黴菌毒素', headline_main:'黃麴毒素與赭麴毒素'},
      {layout_type:'data', headline_hook:'花生製品監測', headline_main:'10.6% 超標'},
      {layout_type:'action', headline_hook:'發霉怎麼辦', headline_main:'整個丟、密封防潮'}]},
    hashtags:['黴菌毒素','黃麴毒素','花生','食品保存'],
    sources:['衛生福利部食品藥物管理署'],
    illustration_category:'general',
    illustration:{topic:'食品保存', audience:'家庭', scene:'廚房裡一人把花生和堅果倒進密封玻璃罐，旁邊冰箱門打開',
      emotion:'整齊、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A person in a kitchen pouring peanuts and nuts into an airtight glass jar, an open refrigerator nearby, tidy and reassuring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['108-113年即食花生製品10.6%超標（食藥署研究年報）'],
      layout_reason:'重點是發霉處理與保存，選 action：4 個行動當主角，監測數字當背景。',
      tone:'專業易懂', tone_reason:'破除迷思並給具體做法。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自食藥署並標明期間，未點名特定品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'黴菌毒素',
    collect:{
      summary:'食藥署監測108至113年市售即食花生製品1,618件，10.6%黃麴毒素或赭麴毒素A超標，花生粉最高；黃麴毒素B1為一級致癌物，無法以加工去除。臺灣高溫潮濕，「發霉切掉還能吃」的迷思與居家保存是主要溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'10.6%：食藥署108至113年監測市售即食花生製品共1,618件，其中172件（10.6%）黃麴毒素或赭麴毒素A超過限量，超標產品均已下架。',tag:'官方統計',source:{name:'食藥署：即食花生製品黴菌毒素監測分析',url:'https://www.fda.gov.tw/tc/includes/GetFile.ashx?id=f639027888393517340'}},
        {item:'好發族群年齡層',desc:'13.2%：依花生製品類別，花生粉的黃麴毒素超標比例最高（13.2%）、赭麴毒素A為14.1%，加工花生仁較低（2.2%、1.6%）。',tag:'官方統計',source:{name:'食藥署：即食花生製品黴菌毒素監測分析',url:'https://www.fda.gov.tw/tc/includes/GetFile.ashx?id=f639027888393517340'}},
        {item:'年度趨勢方向',desc:'4.4%至11.0%：108至113年各年度黃麴毒素超標比例介於4.4%到11.0%之間，赭麴毒素A介於1.4%到8.4%。',tag:'官方統計',source:{name:'食藥署：即食花生製品黴菌毒素監測分析',url:'https://www.fda.gov.tw/tc/includes/GetFile.ashx?id=f639027888393517340'}},
        {item:'政策動向',desc:'一級致癌物：食藥署2025年週報指出，黃麴毒素B1被國際癌症研究機構列為一級致癌物，無耐受量且無法藉由加工去除，建議密封防潮、開封儘早食用或冷藏。',tag:'官方統計',source:{name:'食藥署：防止花生製品滋生黃麴毒素',url:'https://www.fda.gov.tw/Tc/PublishOtherEpaperContent.aspx?id=1549&tid=5061'}}
      ],
      product_view:['機會：黃麴毒素與肝臟健康相關，可作為肝病預防衛教的延伸內容。','機會：居家食品保存是實用的生活內容。','風險：避免點名特定品牌；不宜誇大單次誤食的風險造成恐慌。'],
      marketing_view:['機會：梅雨季、夏季高溫潮濕時是溝通時點。','機會：「發霉切掉還能吃？」是高互動問題。','風險：監測數字為即食花生製品，不代表所有花生或食品。'],
      alert_level:'low',
      alert_reason:'屬長期食安議題；梅雨與夏季可加強提醒。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('食物發霉不要因為可惜而只切掉發霉的部分，毒素不一定看得出來','MEDICAL_INTERPRETATION','overgeneralization',
          '本文引用的食藥署資料主要針對花生與穀類；文中把原則擴大到所有發霉食物，未區分不同食品（如硬質乳酪等國際上另有處理建議）。','low','no',
          null,'no','clarify','一般民眾採保守原則較安全。',
          '花生、穀類等食物發霉時，不要因為可惜而只切掉發霉的部分，毒素不一定看得出來',
          ['不要只切掉發霉的地方，看起來沒事不代表沒毒素','發霉不只切除，整個丟棄。']),
        F('有10.6%的黃麴毒素或赭麴毒素A超過限量','DATA_FACTUAL_ACCURACY','sampling_bias',
          '監測多為風險導向抽樣，超標比例不能直接代表所有市售花生製品的污染率，文中未說明。','low','no',
          null,'no','clarify','屬抽樣口徑說明。',
          '有10.6%的黃麴毒素或赭麴毒素A超過限量（監測抽驗結果，不等同全部市售產品）',
          ['有1成多（10.6%）的毒素超過標準','10.6%黴菌毒素超標']),
        F('黃麴毒素一般烹調、烘焙難以完全去除，加熱不能讓發霉食物變安全','SOURCE_EVIDENCE','unsourced_claim',
          '「一般烹調烘焙難以完全去除」出自食藥署研究報告，但本文參考資料未列該來源；週報原文為「無法藉由加工製程去除」。','low','no',
          null,'no','clarify','屬出處對應。',
          '黃麴毒素無法藉由加工製程去除（食藥署），加熱不能讓發霉食物變安全',
          ['煮過、烤過也去不掉。','加熱無法去除。'])
      ],
      card:[
        F('即食花生製品黴菌毒素超標','DATA_FACTUAL_ACCURACY','sampling_bias',
          '監測抽驗比例不等同全部市售產品污染率。','low','no',
          null,'no','clarify','屬抽樣口徑。',
          '即食花生製品抽驗超標比例'),
        F('發霉不要只切掉，整個丟棄','MEDICAL_INTERPRETATION','overgeneralization',
          '原則主要針對花生與穀類，卡面未說明適用範圍。','low','no',
          null,'no','clarify','保守原則。',
          '花生穀類發霉，整包丟棄')
      ]
    },
    title_alts:[
      '發霉了切掉還能吃嗎？黃麴毒素耐熱，加工也去不掉',
      '麵包發霉一小塊，切掉還能吃嗎？',
      '花生製品抽驗1成超標：黴菌毒素怎麼防'
    ],
    card_title_alts:[
      ['發霉切掉還能吃？','黴菌毒素煮不掉，這樣防'],
      ['花生粉最常超標','密封防潮、早點吃完'],
      ['黃麴毒素','一級致癌物、加熱去不掉']
    ],
    data_addon:[
      '黃麴毒素是目前所知致癌性最強的真菌毒素，具高度肝臟毒性（食藥署食藥好文）。',
      '花生貯存宜低溫乾燥，相對溼度保持在55-65%（食藥署週報）。',
      '食藥署闢謠指出「台灣45%花生含黃麴毒素」並非普遍現象，關鍵在保存條件。'
    ],
    cta:'今天檢查一下家裡的花生、堅果與米，有霉味或變色就整包丟掉，其餘改放密封罐。'
  });
})();
