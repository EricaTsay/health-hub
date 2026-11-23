/* v6 示範主題：居家黴菌（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-21。數據來源：環境部新聞專區〈維護室內空氣品質篇－清除居家黴菌有撇步〉（原環保署發布，年份較早：48小時內清除、黴斑超過60平方公分、N-95口罩與手套護目鏡、年均相對濕度80%以上）、環境部室內空氣品質標準（真菌1,000 CFU/m³）、衛福部／國健署氣喘衛教（濕度50%-65%、定期清洗濾網）。
   注意：國內查無居家黴菌與健康關係的官方統計；環保署原文引述的「3-5%人口罹患過敏性鼻炎」為美澳研究，未採用。
   參考方向：健康智庫〈環境衛生－黴菌〉2025/07、〈室內晾衣不乾，小心霉味背後的健康危機〉2025/12。 */
(function(){
  const REFS = [
    {title:'維護室內空氣品質篇－清除居家黴菌有撇步',source:'環境部（原環保署發布）',url:'https://enews.moenv.gov.tw/page/3b3c62c78849f32f/aeaa5648-81b1-46c1-b0ba-0fe5f294e489'},
    {title:'室內空氣品質檢驗方法（含法規標準值）',source:'環境部',url:'https://www.moenv.gov.tw/affairs/atmospheric-environment/indoor-air-quality-management/indoor-air-quality-testing-methods/2300.html'},
    {title:'氣喘控制好，自在呼吸沒煩惱 家庭清潔、外出保暖、拒吸二手菸',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-2772-9391-1.html'}
  ];
  const TABLE = {headers:['黴菌好發處','檢查與處理'], rows:[
    ['牆壁、天花板角落','看到錢幣大小黴斑，48小時內清除'],
    ['浴室、磁磚縫','用完開窗或抽風，保持乾燥'],
    ['冷氣、除濕機濾網','定期清洗或更換'],
    ['家具背面、冰箱襯墊','定期移動檢查，避免貼牆不通風'],
    ['室內晾衣處','開除濕機或電風扇，避免長時間潮濕']
  ]};
  const TAGS = ['居家黴菌','除濕','室內空氣品質','過敏','氣喘'];

  const PRO = {
    content_type:'健康文章',
    title:'牆角發霉怎麼辦？居家黴菌檢查與清除步驟',
    update_date:'2026/11/21',
    intro:'臺灣氣候溫暖潮濕，環保署（現環境部）曾指出國內年平均相對濕度高達80%以上，細菌與真菌容易孳生。環境部室內空氣品質標準中，公告場所真菌最高值為1,000 CFU/m³。居家發現錢幣大小的黴斑，應在48小時內清除；黴斑面積超過約60平方公分（中型碗盤大小）時，就可能危害健康。國健署氣喘衛教也建議室內濕度維持在50%至65%，並定期清洗濾網，減少塵蟎與黴菌。',
    sections:[
      {heading:'居家黴菌好發處',format:'table',table:TABLE},
      {heading:'清除黴斑時',format:'bullets',items:[
        '配戴N-95口罩、手套及護目鏡。',
        '使用酒精、漂白水等居家常用消毒劑清除，依產品標示稀釋，保持通風。',
        '清除後保持乾燥，避免再次孳生。',
        '大面積發霉或反覆發生，可能有漏水問題，宜請專業人員檢查。'
      ]},
      {heading:'預防黴菌',format:'bullets',items:[
        '使用除濕機或空調，室內濕度維持在50%至65%。',
        '梅雨季、颱風過後與淹水後特別注意通風乾燥。',
        '定期清洗冷氣與除濕機濾網。',
        '家中有氣喘或過敏者，更要留意黴菌與塵蟎。'
      ]}
    ],
    think_tank_view:'黴菌的關鍵不是清得多乾淨，而是環境夠不夠乾。在臺灣，除濕機和開窗是最基本的居家健康設備；看到小黴斑就處理，別等到整面牆發黑。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'清除方法引自環境部（原環保署）衛教，濕度建議引自國健署氣喘衛教，真菌標準引自環境部，未推薦特定除濕機或清潔劑品牌。',
    ai_rationale:{basis:['48小時內清除、60平方公分（環境部原環保署衛教）','濕度50%-65%（國健署氣喘衛教）'],
      layout_reason:'先用表格整理好發處與處理方式，再說明清除防護，最後給預防做法。',
      tone:'專業易懂', tone_reason:'需具體步驟與防護。',
      to_verify:['環保署衛教原文年份較早','國內查無居家黴菌健康影響官方統計']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'衣服晾不乾、牆角黑黑的？居家黴菌這樣清',
    update_date:'2026/11/21',
    intro:'梅雨季衣服晾不乾、牆角冒出黑點、櫃子有霉味？臺灣又濕又熱，很適合黴菌生長。環境部建議，看到錢幣大小的黴斑就要在48小時內清掉；面積大到像一個中型盤子（約60平方公分）時，就可能影響健康。國健署也建議家裡濕度維持在50%到65%。',
    sections:[
      {heading:'家裡這些地方最容易發霉',format:'table',table:TABLE},
      {heading:'清黴菌要這樣做',format:'bullets',items:[
        '戴N-95口罩、手套和護目鏡。',
        '用酒精或稀釋漂白水擦，照瓶子上的說明稀釋，窗戶打開。',
        '擦完弄乾。',
        '一直發霉或一大片，可能是漏水，要找人檢查。'
      ]},
      {heading:'不讓黴菌回來',format:'bullets',items:[
        '開除濕機，濕度保持50%到65%。',
        '梅雨、颱風過後多通風。',
        '冷氣和除濕機的濾網要常洗。',
        '家裡有人氣喘或過敏，更要注意。'
      ]}
    ],
    think_tank_view:'看到小黑點就處理，別等整面牆都黑了才動手。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自環境部與國健署，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以梅雨季發霉的生活情境切入。', tone:'生活親切', tone_reason:'給家庭讀者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'居家黴菌：48小時內清、濕度50-65%',
    update_date:'2026/11/21',
    intro:'黴斑應在48小時內清除；超過約60平方公分可能危害健康。室內濕度建議50%至65%。',
    sections:[
      {heading:'好發處',format:'table',table:TABLE},
      {heading:'清除',format:'bullets',items:[
        'N-95口罩、手套、護目鏡。',
        '酒精或稀釋漂白水。'
      ]},
      {heading:'預防',format:'bullets',items:[
        '除濕、通風、洗濾網。'
      ]}
    ],
    think_tank_view:'保持乾燥是預防黴菌的關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自環境部與國健署，未推薦特定商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為好發處、清除、預防三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'居家黴菌', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'看到黴斑 48 小時內清除', primary_visual:'48 小時', secondary_message:'室內濕度 50%–65%', action_priority:'防護、清除、除濕、洗濾網'},
    headline_hook:'牆角發霉了？', headline_main:'居家黴菌 4 步驟清乾淨', title_accent:'4 步驟',
    hero_message:'48 小時內清除', hero_support:'發現錢幣大小黴斑就處理（環境部）',
    primary_stat:{value:'50%–65%', label:'建議室內濕度', note:'國健署氣喘衛教｜並定期清洗濾網'},
    action_title:'黴菌這樣處理',
    action_cards:[
      {key:'護', text:'戴 N-95 口罩、手套與護目鏡'},
      {key:'清', text:'酒精或依標示稀釋漂白水擦除'},
      {key:'乾', text:'除濕通風，濕度 50%–65%'},
      {key:'洗', text:'定期清洗冷氣、除濕機濾網'}
    ],
    notice:'黴斑大於約 **60 平方公分** 或反覆發生，可能有漏水，請專業檢查。',
    carousel_suggestion:{reason:'若想把好發處、清除步驟與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'黴菌愛躲哪', headline_main:'5 個好發處'},
      {layout_type:'action', headline_hook:'清除黴斑', headline_main:'先防護再清'},
      {layout_type:'action', headline_hook:'不讓黴菌回來', headline_main:'除濕、通風、洗濾網'}]},
    hashtags:['居家黴菌','除濕','室內空氣品質','過敏'],
    sources:['環境部','衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'居家除濕防黴', audience:'家庭', scene:'一位戴口罩和手套的家長擦拭牆角，旁邊的除濕機正在運轉',
      emotion:'整潔、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A parent wearing a mask and gloves wiping a wall corner while a dehumidifier runs nearby, clean and reassuring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['48小時內清除（環境部）','濕度50%-65%（國健署）'],
      layout_reason:'重點是具體處理步驟，選 action：4 個行動當主角，濕度建議當背景數字。',
      tone:'專業易懂', tone_reason:'具體可做。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自環境部與國健署，未推薦特定商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'居家黴菌',
    collect:{
      summary:'臺灣氣候潮濕，年平均相對濕度高，居家黴菌常見；環境部（原環保署）建議發現錢幣大小黴斑48小時內清除，清除時配戴N-95口罩、手套與護目鏡。國健署氣喘衛教建議室內濕度維持50%至65%並定期清洗濾網，梅雨與颱風後是溝通時機。',
      objective_data:[
        {item:'盛行率／發生率',desc:'80%以上：環保署（現環境部）衛教指出國內年平均相對濕度高達80%以上，細菌及真菌容易孳生繁殖。',tag:'官方統計',source:{name:'環境部：清除居家黴菌有撇步',url:'https://enews.moenv.gov.tw/page/3b3c62c78849f32f/aeaa5648-81b1-46c1-b0ba-0fe5f294e489'}},
        {item:'政策動向',desc:'真菌1000 CFU/m³：環境部室內空氣品質標準規定公告場所真菌最高值為1000 CFU/m³（室內外比值小於等於1.3者不在此限）。',tag:'官方統計',source:{name:'環境部：室內空氣品質檢驗方法與標準值',url:'https://www.moenv.gov.tw/affairs/atmospheric-environment/indoor-air-quality-management/indoor-air-quality-testing-methods/2300.html'}},
        {item:'好發族群年齡層',desc:'濕度不超過65%：國健署氣喘衛教建議使用除濕機、冷暖氣機，濕度最好維持在50%至65%，並時常清洗濾網以減少塵蟎與黴菌孳生。',tag:'官方統計',source:{name:'國健署：氣喘控制好，自在呼吸沒煩惱',url:'https://www.mohw.gov.tw/cp-2772-9391-1.html'}},
        {item:'年度趨勢方向',desc:'48小時內清除：環保署建議發現錢幣般大小黴斑應在48小時內清除，面積超過約60平方公分時就可能危害健康。',tag:'官方統計',source:{name:'環境部：清除居家黴菌有撇步',url:'https://enews.moenv.gov.tw/page/3b3c62c78849f32f/aeaa5648-81b1-46c1-b0ba-0fe5f294e489'}}
      ],
      product_view:['機會：黴菌與過敏、氣喘相關，可作為家庭健康衛教內容。','機會：梅雨、颱風後的居家整理提醒。','風險：避免推薦特定除濕機或清潔劑品牌；不宜誇大黴菌健康風險。'],
      marketing_view:['機會：梅雨季、颱風後、冬季室內晾衣是溝通時點。','機會：「衣服晾不乾、有霉味」高共鳴。','風險：引用資料年份較早，避免寫成新研究。'],
      alert_level:'low',
      alert_reason:'屬季節性居家環境議題；梅雨季可加強溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('環保署（現環境部）曾指出國內年平均相對濕度高達80%以上','CURRENCY_TIMELINESS','old_source',
          '此說法出自環保署時期的衛教稿，年份較早且未說明測量依據；氣象數據宜引用中央氣象署資料。','low','yes',
          '中央氣象署各地年平均相對濕度統計。','no','confirm','屬出處年份與權責。',
          '臺灣氣候溫暖潮濕，各地年平均相對濕度偏高（可補中央氣象署數據）'),
        F('黴斑面積超過約60平方公分（中型碗盤大小）時，就可能危害健康','SOURCE_EVIDENCE','unspecified_threshold',
          '60平方公分門檻出自環保署較早衛教，未說明依據；讀者可能以為小於此面積完全無害。','low','yes',
          '60平方公分門檻的依據來源。','no','confirm','屬門檻依據。',
          '黴斑面積較大時更可能影響健康，小面積也應儘早清除',
          ['面積大到像一個中型盤子（約60平方公分）時，就可能影響健康','超過約60平方公分可能危害健康']),
        F('使用酒精、漂白水等居家常用消毒劑清除，依產品標示稀釋，保持通風','MEDICAL_INTERPRETATION','chemical_safety',
          '未提醒漂白水不可與其他清潔劑（如酸性清潔劑）混用，可能產生有毒氣體。','medium','no',
          null,'no','clarify','屬安全提醒。',
          '使用酒精、漂白水等居家常用消毒劑清除，依產品標示稀釋，保持通風，漂白水勿與其他清潔劑混用',
          ['用酒精或稀釋漂白水擦，照瓶子上的說明稀釋，窗戶打開。','酒精或稀釋漂白水。'])
      ],
      card:[
        F('酒精或依標示稀釋漂白水擦除','MEDICAL_INTERPRETATION','chemical_safety',
          '未提醒漂白水勿與其他清潔劑混用。','medium','no',
          null,'no','clarify','受字數限制但屬安全要點。',
          '稀釋漂白水擦除，勿混用清潔劑'),
        F('發現錢幣大小黴斑就處理（環境部）','CURRENCY_TIMELINESS','old_source',
          '建議出自原環保署時期衛教，卡面標示環境部易被誤以為是近期新聞。','low','no',
          null,'no','clarify','屬出處年份。',
          '發現錢幣大小黴斑就處理（原環保署衛教）')
      ]
    },
    title_alts:[
      '牆角發霉怎麼辦？居家黴菌檢查與清除步驟',
      '衣服晾不乾、牆角黑黑的？居家黴菌這樣清',
      '黴斑48小時內清：除濕、通風、洗濾網'
    ],
    card_title_alts:[
      ['牆角發霉了？','居家黴菌 4 步驟清乾淨'],
      ['衣服晾不乾？','除濕到 50%–65%'],
      ['48 小時內清除','別等整面牆發黑']
    ],
    data_addon:[
      '黴菌粒徑約3微米，容易沉積於肺泡區（環保署衛教）。',
      '梅雨季節、颱風過後及淹水時，更要保持通風乾爽（環保署）。',
      '環境部室內空氣品質標準中細菌最高值為1,500 CFU/m³。'
    ],
    cta:'這週檢查一次浴室、牆角和冷氣濾網，看到小黴斑就戴好口罩手套清掉，並把除濕機設在50%到65%。'
  });
})();
