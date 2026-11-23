/* v6 示範主題：健康資訊識讀（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-21。數據來源：衛福部／食藥署〈公布113年度十大違規食藥廣告〉（2025-03-19：113年全國裁處違規廣告8,006件、罰鍰3億7,765萬元；名人代言加權裁罰最高3倍）、臺北市政府衛生局114年違規廣告查緝情形（食藥署網站轉載，2026-04-13：網路占78.3%、減肥瘦身類居首）、食藥署112年度十大違規廣告新聞稿（法定罰則）。
   注意：「關聯與因果」等判讀原則為一般研究方法概念，未查到國內官方專文，文中以通用原則呈現。
   參考方向：健康智庫〈解讀健康資訊？分清「關聯」與「因果」〉2025/06、〈AI生成假專家影片，成健康隱憂！〉2025/10、健康廣告識讀系列2026/01。 */
(function(){
  const REFS = [
    {title:'食藥署公布113年度十大違規食藥廣告',source:'衛生福利部食品藥物管理署',url:'https://mohw.gov.tw/cp-16-81938-1.html'},
    {title:'誇大廣告別輕信，選購商品停看聽 臺北市政府衛生局公布114年違規廣告查緝情形',source:'臺北市政府衛生局（食藥署網站轉載）',url:'https://www.fda.gov.tw/tc/csmnewsContent.aspx?mid=267&id=t624202'},
    {title:'食藥署公布112年度十大違規食藥廣告',source:'衛生福利部食品藥物管理署',url:'https://www.mohw.gov.tw/cp-16-78245-1.html'}
  ];
  const TABLE = {headers:['看到健康資訊時問自己','為什麼'], rows:[
    ['誰說的？','是政府機關、醫療專業團體，還是賣產品的人'],
    ['有沒有寫出處與年份？','沒有來源或年份很舊的數字要保留'],
    ['是「有關」還是「造成」？','研究發現兩件事一起出現，不代表一定是因果'],
    ['有沒有要你買東西？','食品、化粧品宣稱治病屬違規'],
    ['跟醫師說的一樣嗎？','與醫囑不同時，先問醫師或藥師再決定']
  ]};
  const TAGS = ['健康識讀','違規廣告','誇大療效','假訊息','聰明消費'];

  const PRO = {
    content_type:'健康文章',
    title:'網路健康資訊怎麼判斷？5個問題看穿誇大廣告',
    update_date:'2026/11/21',
    intro:'食品藥物管理署統計，113年全國衛生機關裁處食品、藥物、化粧品違規廣告共8,006件，較112年的10,526件減少，罰鍰3億7,765萬元，十大違規廣告多涉及宣稱醫療效能。臺北市衛生局114年的查緝結果更顯示，違規廣告有78.3%出現在網路，食品類以宣稱減肥瘦身最多。面對大量健康資訊，學會判斷來源與說法，是保護自己與家人的第一步。',
    sections:[
      {heading:'看健康資訊的5個問題',format:'table',table:TABLE},
      {heading:'常見的違規廣告手法',format:'bullets',items:[
        '食品宣稱可治療疾病，例如治療關節炎、肌少症。',
        '以長篇幅節目、主持人叫賣或名人代言加強說服力。',
        '食品違規廣告常見宣稱減肥瘦身、皮膚美容、提升免疫力。',
        '食藥署113年起修正處理原則，名人代言等情形裁罰最高可加權3倍。'
      ]},
      {heading:'遇到可疑資訊怎麼辦',format:'bullets',items:[
        '先不轉傳，查證官方來源（如衛福部、食藥署、國健署）。',
        '產品宣稱治病，可向地方衛生局檢舉。',
        '正在治療中的人，任何改變先與醫師討論。',
        '對研究結果保留「相關不等於因果」的判斷。'
      ]}
    ],
    think_tank_view:'健康資訊最危險的不是明顯的謊言，而是「半真半假」：引用真的研究、卻得出誇大的結論。習慣問一句「誰說的、根據什麼、想賣我什麼」，就能過濾掉大部分的誤導內容。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'違規廣告統計引自食藥署113年新聞稿與臺北市衛生局114年資料並標明範圍，判讀原則為一般資訊識讀方法，未點名本文以外的特定產品。',
    ai_rationale:{basis:['113年全國違規廣告8,006件（食藥署）','臺北市114年違規廣告網路占78.3%（臺北市衛生局）'],
      layout_reason:'先用5個問題表格提供判讀方法，再說明違規廣告手法，最後給應對做法。',
      tone:'專業易懂', tone_reason:'需提供可操作的判斷步驟。',
      to_verify:['78.3%為臺北市資料，非全國','判讀原則未查到國內官方專文']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'長輩群組的健康訊息可以信嗎？5個問題幫你判斷',
    update_date:'2026/11/21',
    intro:'LINE群組、影片、節目裡的健康資訊越來越多，哪些可以信？食藥署統計，113年全國光是被開罰的違規食品、藥品、化粧品廣告就有8,006件。臺北市衛生局發現，114年違規廣告有將近8成出現在網路上，最常見的是說吃了會瘦、會變漂亮、提升免疫力。',
    sections:[
      {heading:'先問這5個問題',format:'table',table:TABLE},
      {heading:'這些手法要小心',format:'bullets',items:[
        '說食品可以治病，像是治關節、治肌少症。',
        '用名人代言或主持人大力推銷。',
        '強調吃了會瘦、會變美、增強免疫力。',
        '現在名人代言違規罰得更重，最高加倍到3倍。'
      ]},
      {heading:'看到可疑訊息',format:'bullets',items:[
        '先別轉傳，上衛福部、食藥署網站查一下。',
        '覺得是誇大廣告，可以向衛生局檢舉。',
        '正在看病吃藥，有任何改變先問醫生。',
        '「有關係」不一定是「因為它」。'
      ]}
    ],
    think_tank_view:'轉傳健康訊息給家人前，先花一分鐘問：誰說的？想賣我什麼？',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自食藥署與臺北市衛生局並標明範圍，未點名特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以長輩群組轉傳訊息的情境切入。', tone:'生活親切', tone_reason:'給子女與熟齡讀者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'健康資訊識讀：5個問題',
    update_date:'2026/11/21',
    intro:'113年全國違規食藥化粧品廣告8,006件（食藥署）。臺北市114年違規廣告78.3%在網路。',
    sections:[
      {heading:'5個問題',format:'table',table:TABLE},
      {heading:'違規手法',format:'bullets',items:[
        '食品宣稱治病。',
        '名人代言、節目叫賣。'
      ]},
      {heading:'應對',format:'bullets',items:[
        '先查證再轉傳。',
        '可向衛生局檢舉。'
      ]}
    ],
    think_tank_view:'誰說的、根據什麼、想賣什麼——三問過濾誤導資訊。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自食藥署與臺北市衛生局，未點名特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為問題、手法、應對三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'健康資訊識讀', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'113 年違規食藥廣告 8,006 件', primary_visual:'8,006 件', secondary_message:'違規廣告多在網路', action_priority:'先查證再轉傳'},
    headline_hook:'這則健康訊息可信嗎？', headline_main:'5 個問題幫你判斷', title_accent:'5 個問題',
    hero_message:'8,006 件違規廣告', hero_support:'113 年全國衛生機關裁處食品、藥物、化粧品廣告（食藥署）',
    knowledge_title:'先問這 5 個問題', knowledge_note:'「有關」**不等於**「造成」',
    knowledge_cards:[
      {label:'誰說的', icon:'people', lines:['政府、專業團體','還是賣家']},
      {label:'有出處嗎', icon:'search', lines:['來源與年份']},
      {label:'有關或造成', icon:'chat', lines:['相關不等於因果']},
      {label:'要你買嗎', icon:'shield', lines:['食品宣稱治病','屬違規']},
      {label:'和醫囑一樣嗎', icon:'report', lines:['不同先問','醫師藥師']}
    ],
    action_title:'看到可疑訊息',
    action_cards:[
      {key:'停', text:'先不轉傳'},
      {key:'查', text:'到衛福部、食藥署網站查證'},
      {key:'報', text:'誇大療效廣告向衛生局檢舉'},
      {key:'問', text:'治療中有任何改變先問醫師'}
    ],
    carousel_suggestion:{reason:'若想把判讀方法、違規廣告手法與應對分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'健康資訊', headline_main:'5 個問題判斷'},
      {layout_type:'data', headline_hook:'違規廣告', headline_main:'113 年 8,006 件'},
      {layout_type:'action', headline_hook:'看到可疑訊息', headline_main:'停、查、報、問'}]},
    hashtags:['健康識讀','違規廣告','誇大療效','假訊息'],
    sources:['衛生福利部食品藥物管理署','臺北市政府衛生局'],
    illustration_category:'general',
    illustration:{topic:'查證健康資訊', audience:'熟齡長輩與子女', scene:'子女陪長輩看手機上的健康訊息，一起在官方網站查證',
      emotion:'理性、溫暖', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult child sitting with an older parent looking at a health message on a phone and checking it on an official website together, rational and warm, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['113年全國違規廣告8,006件（食藥署）'],
      layout_reason:'核心是判斷方法，選 knowledge：5 個問題當主角，違規件數當鉤子，最後給應對行動。',
      tone:'專業易懂', tone_reason:'可操作。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自食藥署與臺北市衛生局，未點名特定產品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'健康資訊識讀',
    collect:{
      summary:'食藥署統計113年全國裁處食品、藥物、化粧品違規廣告8,006件、罰鍰3億7,765萬元，臺北市114年違規廣告近8成出現在網路，減肥瘦身類宣稱最多。網路與群組健康訊息氾濫，教民眾判斷來源、分辨「相關與因果」是健康傳播的基本功。',
      objective_data:[
        {item:'盛行率／發生率',desc:'8006件：食藥署公布113年全國衛生機關裁處食品、藥物、化粧品違規廣告共8006件，罰鍰金額近3.8億元，件數較112年減少。',tag:'官方統計',source:{name:'食藥署：公布113年度十大違規食藥廣告',url:'https://mohw.gov.tw/cp-16-81938-1.html'}},
        {item:'好發族群年齡層',desc:'78.3%：臺北市衛生局114年違規廣告查緝，網路407件（78.3%）最多，電視87件次之，食品廣告以宣稱減肥瘦身類16.5%居首（臺北市資料，非全國）。',tag:'官方統計',source:{name:'臺北市衛生局：114年違規廣告查緝情形',url:'https://www.fda.gov.tw/tc/csmnewsContent.aspx?mid=267&id=t624202'}},
        {item:'政策動向',desc:'最高加權3倍：食藥署113年1月31日修正廣告處理原則，將違規情狀與名人代言等納入加權，裁罰最高可加權3倍。',tag:'官方統計',source:{name:'食藥署：公布113年度十大違規食藥廣告',url:'https://mohw.gov.tw/cp-16-81938-1.html'}},
        {item:'年度趨勢方向',desc:'最高罰2500萬元：非藥物宣稱醫療效能違反藥事法第69條，可處60萬元以上2,500萬元以下罰鍰，食品廣告涉及醫療效能可處60萬元以上500萬元以下。',tag:'官方統計',source:{name:'食藥署：公布112年度十大違規食藥廣告',url:'https://www.mohw.gov.tw/cp-16-78245-1.html'}}
      ],
      product_view:['機會：健康識讀是保戶長期信任的基礎，可作為品牌健康傳播核心內容。','機會：可結合「查證後再轉傳」的社群活動。','風險：自身健康內容也需經法遵與正確性檢核；避免點名特定產品造成爭議。'],
      marketing_view:['機會：食藥署每年公布十大違規廣告時是溝通時點。','機會：長輩群組轉傳訊息是高共鳴情境。','風險：避免嘲諷長輩，以陪伴查證的角度切入。'],
      alert_level:'low',
      alert_reason:'屬長期健康傳播議題；AI生成假專家影片等新手法持續出現。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('產品宣稱治病，可向地方衛生局檢舉','TERMINOLOGY_LANGUAGE','missing_channel',
          '只說可檢舉，未說明檢舉管道（如各縣市衛生局網站或電話），讀者不易實際行動。','low','no',
          null,'no','clarify','屬行動指引完整度。',
          '產品宣稱治病，可向所在縣市衛生局（官網或電話）檢舉',
          ['覺得是誇大廣告，可以向衛生局檢舉。','可向衛生局檢舉。']),
        F('研究發現兩件事一起出現，不代表一定是因果','SOURCE_EVIDENCE','unsourced_principle',
          '判讀原則為一般研究方法概念，文中未附官方或學術出處。','low','no',
          null,'no','clarify','屬通識原則。',
          null,
          ['相關不等於因果']),
        F('較112年的10,526件減少','DATA_FACTUAL_ACCURACY','inconsistent_figures',
          '112年件數在112年新聞稿為10,645件、113年新聞稿為10,526件，兩份官方數字不一致，宜註明資料版本。','low','yes',
          '112年違規廣告件數的最終確定值。','no','confirm','兩份新聞稿數字不同。',
          '較112年（113年新聞稿數字）的10,526件減少')
      ],
      card:[
        F('8,006 件違規廣告','DATA_FACTUAL_ACCURACY','count_definition',
          '件數為裁處件數，同一產品可能多次裁處，不等於違規產品數。','low','no',
          null,'no','clarify','屬口徑說明。',
          '8,006 件違規廣告裁處'),
        F('食品宣稱治病','LEGAL_COMPLIANCE','incomplete_scope',
          '化粧品與一般商品宣稱醫療效能同樣違規，卡面只寫食品。','low','no',
          null,'no','clarify','屬範圍完整度。',
          '非藥品宣稱治病')
      ]
    },
    title_alts:[
      '網路健康資訊怎麼判斷？5個問題看穿誇大廣告',
      '長輩群組的健康訊息可以信嗎？5個問題幫你判斷',
      '113年違規食藥廣告8,006件：健康資訊識讀指南'
    ],
    card_title_alts:[
      ['這則健康訊息可信嗎？','5 個問題幫你判斷'],
      ['群組訊息先別轉','停、查、報、問'],
      ['8,006 件違規廣告','誇大療效別輕信']
    ],
    data_addon:[
      '113年十大違規廣告罰鍰介於100萬至1,124萬元，多涉及醫療效能宣稱（食藥署）。',
      '臺北市114年違規化粧品廣告以宣稱促進細胞活動或膠原蛋白增生類最多（27.5%）。',
      '111年全國違規廣告裁處6,889件、罰鍰2億5,860萬元（食藥署）。'
    ],
    cta:'下次在群組看到健康訊息，轉傳前先問：誰說的？有出處嗎？想賣我什麼？'
  });
})();
