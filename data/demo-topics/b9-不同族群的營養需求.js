/* v6 示範主題：不同族群的營養需求（B9 飲食營養與運動）
   查證日期：2026-11-21。數據來源：衛福部／國健署〈孕期關鍵營養3+1 助你好孕〉（孕期葉酸600μg、碘200μg、鐵15→第3期45mg、維生素D 10μg）、國健署《國民營養健康狀況變遷調查成果報告2017-2020年》第七節（育齡婦女碘缺乏與貧血盛行率，2026-11-22改用最新一期）、國健署健康問答（成人蛋白質每公斤1.1公克、70歲以上1.2公克）、衛福部〈及早存骨本 5招鞏固骨骼健康〉（成人鈣1,000毫克、維生素D 15微克）、國健署「國人膳食營養素參考攝取量」第八版專區。
   注意：孕期碘建議量在衛福部新聞稿為200μg，第八版Q&A摘要為225μg，未能直接讀取第八版原表核對，已設決策點。
   參考方向：健康智庫〈營養健康－不同族群營養攝取狀況及建議〉2024/06、〈世界糧食日：營養不良隱藏的健康影響〉2024/10。 */
(function(){
  const REFS = [
    {title:'孕期關鍵營養3+1 助你好孕',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/fp-16-45581-1.html'},
    {title:'老年人容易營養不良，應該多吃高蛋白粉補充營養?',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=127&pid=13140'},
    {title:'及早存骨本 5招鞏固骨骼健康',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-84264-1.html'},
    {title:'國民營養健康狀況變遷調查成果報告2017-2020年',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=3999&pid=15562'},
    {title:'國人膳食營養素參考攝取量',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/List.aspx?nodeid=4613'}
  ];
  const TABLE = {headers:['族群','特別要注意','建議量（國健署）'], rows:[
    ['一般成人','鈣、維生素D、蛋白質','鈣1,000毫克、維生素D 15微克、蛋白質每公斤1.1公克'],
    ['孕婦','葉酸、碘、鐵、維生素D','葉酸600μg、碘200μg、鐵15mg（第3期45mg）、維生素D 10μg'],
    ['70歲以上長者','蛋白質','每公斤體重1.2公克'],
    ['素食者','維生素B12、鈣、鐵','B12每日2.4微克']
  ]};
  const TAGS = ['營養需求','孕期營養','長者營養','膳食營養素','均衡飲食'];

  const DP_IODINE = {id:'dp-iodine-version', type:'data_version', title:'孕期碘建議量有兩個數字',
    desc:'衛福部孕期營養新聞稿寫孕婦碘每日200μg；國健署第八版膳食營養素參考攝取量Q&A摘要則提到孕期由200提高為225μg。目前未能直接讀取第八版原表核對，AI 沒有替你決定採用哪一個。',
    current:'孕婦碘每日建議攝取量200μg（衛福部孕期營養新聞稿）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'200μg', value:'衛福部孕期營養新聞稿', note:'目前採用，可能為第七版數值'},
      {label:'225μg', value:'第八版Q&A摘要', note:'需核對第八版原表'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'孕婦、長者、素食者吃的不一樣：不同族群的營養重點',
    update_date:'2026/11/21',
    intro:'國民健康署訂有「國人膳食營養素參考攝取量」，不同年齡與生理狀態的需求並不相同。例如孕婦每日葉酸建議600μg、懷孕第3期鐵增加到45mg；70歲以上長者蛋白質建議每公斤體重1.2公克，高於一般成人的1.1公克。國健署2017-2020年國民營養健康狀況變遷調查也發現，15-19歲、20-34歲、35-49歲育齡婦女的碘缺乏盛行率分別為22.8%、34.9%、47.5%，貧血盛行率為16.6%、16.5%、21.8%。',
    sections:[
      {heading:'不同族群的營養重點',format:'table',table:TABLE},
      {heading:'孕婦：葉酸、碘、鐵、維生素D',format:'bullets',items:[
        '葉酸：深綠色蔬菜、豆製品、肝臟；懷孕前就要開始注意。',
        '碘：烹飪選用加碘鹽（每天不超過6克），適量攝取海帶、紫菜；甲狀腺疾病者諮詢醫師。',
        '鐵：紅肉、深綠色蔬菜、豆干豆腐。',
        '如需補充品，應在醫師指導下使用孕婦專用產品。'
      ]},
      {heading:'長者與一般成人',format:'bullets',items:[
        '長者三餐分散攝取豆魚蛋肉與乳品，並搭配肌力訓練。',
        '腎功能不佳者，蛋白質攝取量與醫師、營養師討論。',
        '成人鈣與維生素D靠乳品、高鈣豆製品與適度日曬。'
      ]}
    ],
    think_tank_view:'「均衡飲食」是共同原則，但不同人生階段的「重點營養素」不一樣。準備懷孕要提早補葉酸，熟齡要把蛋白質吃夠，素食要顧B12。知道自己屬於哪一群，飲食調整才能抓到重點。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'建議量引自國健署與衛福部並標明來源，育齡婦女營養狀況引自國健署2017-2020年調查成果報告，未推薦特定營養補充品。',
    ai_rationale:{basis:['孕期葉酸600μg、鐵45mg等（衛福部孕期營養新聞稿）','長者蛋白質1.2 g/kg（國健署）','35-49歲育齡婦女碘缺乏47.5%（2017-2020年調查）'],
      layout_reason:'先用表格整理各族群重點，再細說孕婦與長者，最後給成人提醒。',
      tone:'專業易懂', tone_reason:'需精確建議量。',
      to_verify:['孕期碘200 vs 225μg需核對第八版原表']},
    decision_points:[DP_IODINE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'準媽媽、爸媽、吃素的家人，營養重點各不同',
    update_date:'2026/11/21',
    intro:'一家人吃同一桌菜，但每個人需要的營養不太一樣。國健署建議，懷孕的媽媽每天葉酸要600μg，到懷孕後期鐵要增加到45mg；70歲以上的長輩，蛋白質每公斤體重要吃到1.2公克，比年輕人還多。國健署2017-2020年調查也發現，35到49歲的育齡婦女將近一半（47.5%）碘不夠，各年齡層也有1到2成貧血。',
    sections:[
      {heading:'每個人的營養重點',format:'table',table:TABLE},
      {heading:'準媽媽要多注意',format:'bullets',items:[
        '葉酸：多吃深綠色蔬菜、豆製品，打算懷孕就開始注意。',
        '碘：煮菜用加碘鹽，吃點海帶紫菜。',
        '鐵：紅肉、深綠色蔬菜、豆干豆腐。',
        '要吃補充品，先問醫師。'
      ]},
      {heading:'長輩和大人',format:'bullets',items:[
        '長輩每餐都要有一份蛋白質，再加一杯奶。',
        '腎臟不好的長輩，吃多少蛋白質要問醫師。',
        '大人補鈣靠牛奶、豆腐，還有適度曬太陽。'
      ]}
    ],
    think_tank_view:'同一桌菜，幫準媽媽多夾一盤青菜、幫長輩多放一塊魚，就是照顧全家的營養。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'建議量引自國健署與衛福部，未推薦特定補充品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以一家人同桌吃飯的情境切入。', tone:'生活親切', tone_reason:'給家庭讀者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'不同族群營養重點',
    update_date:'2026/11/21',
    intro:'孕婦葉酸600μg、第3期鐵45mg；70歲以上蛋白質每公斤1.2公克；素食者B12每日2.4微克。',
    sections:[
      {heading:'族群重點',format:'table',table:TABLE},
      {heading:'孕婦',format:'bullets',items:[
        '葉酸、碘、鐵、維生素D。',
        '補充品須醫師指導。'
      ]},
      {heading:'長者',format:'bullets',items:[
        '蛋白質分散三餐。',
        '腎功能不佳者諮詢醫師。'
      ]}
    ],
    think_tank_view:'均衡是共同原則，重點營養素依人生階段而不同。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國健署與衛福部，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為重點、孕婦、長者三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'不同族群的營養需求', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'不同族群的重點營養素不同', primary_visual:'600μg', secondary_message:'孕婦葉酸每日建議量', action_priority:'依人生階段調整飲食'},
    headline_hook:'一家人營養都一樣？', headline_main:'4 種族群的營養重點', title_accent:'營養重點',
    hero_message:'35–49 歲婦女 47.5% 碘缺乏', hero_support:'育齡婦女尿碘低於 100 μg/L（國健署 2017–2020 年調查）',
    knowledge_title:'各族群重點營養素', knowledge_note:'均衡是基礎，**重點依人生階段而不同**',
    knowledge_cards:[
      {label:'一般成人', icon:'people', lines:['鈣 1,000 毫克','維生素 D 15 微克']},
      {label:'孕婦', icon:'heart', lines:['葉酸 600μg','第 3 期鐵 45mg']},
      {label:'70 歲以上', icon:'home', lines:['蛋白質每公斤','1.2 公克']},
      {label:'素食者', icon:'leaf', lines:['維生素 B12','每日 2.4 微克']}
    ],
    action_title:'依階段這樣吃',
    action_cards:[
      {key:'孕', text:'準備懷孕就開始補葉酸'},
      {key:'碘', text:'烹調選用加碘鹽'},
      {key:'蛋', text:'長者每餐一份豆魚蛋肉'},
      {key:'醫', text:'補充品先問醫師或營養師'}
    ],
    carousel_suggestion:{reason:'若想把各族群分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'孕婦營養', headline_main:'葉酸、碘、鐵、維生素 D'},
      {layout_type:'knowledge', headline_hook:'長者營養', headline_main:'蛋白質每公斤 1.2 公克'},
      {layout_type:'knowledge', headline_hook:'素食營養', headline_main:'顧好 B12、鈣、鐵'}]},
    hashtags:['營養需求','孕期營養','長者營養','均衡飲食'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'general',
    illustration:{topic:'全家營養', audience:'多代同堂家庭', scene:'一家三代圍坐餐桌，孕婦、長者與年輕人各自盤裡有不同搭配的菜色',
      emotion:'溫暖、團聚', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A three-generation family around a dining table, a pregnant woman, an older adult and young adults each with differently balanced plates, warm and together, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['國健署與衛福部各族群建議量'],
      layout_reason:'核心是族群差異，選 knowledge：4 個族群的重點營養素當主角，最後給行動。',
      tone:'專業易懂', tone_reason:'數值清楚。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自國健署與衛福部並標明年份，未推薦特定補充品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'不同族群的營養需求',
    collect:{
      summary:'國健署「國人膳食營養素參考攝取量」依年齡與生理狀態訂定不同建議量：孕婦葉酸600μg、懷孕第3期鐵45mg，70歲以上蛋白質每公斤1.2公克，素食者需注意B12。國健署2017-2020年調查顯示35-49歲育齡婦女碘缺乏盛行率達47.5%、貧血21.8%，族群化的營養溝通仍有需要。',
      objective_data:[
        {item:'盛行率／發生率',desc:'47.5%：國健署2017-2020年國民營養健康狀況變遷調查（第七節），育齡婦女碘缺乏盛行率於15-19歲、20-34歲、35-49歲分別為22.8%、34.9%、47.5%，貧血盛行率為16.6%、16.5%、21.8%。',tag:'官方統計',source:{name:'國健署：國民營養健康狀況變遷調查成果報告2017-2020年',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=3999&pid=15562'}},
        {item:'政策動向',desc:'葉酸600μg：國健署依膳食營養素參考攝取量建議孕婦每日葉酸600μg、鐵15mg（懷孕第3期增至45mg）、維生素D 10μg。',tag:'官方統計',source:{name:'衛福部：孕期關鍵營養3+1 助你好孕',url:'https://www.mohw.gov.tw/fp-16-45581-1.html'}},
        {item:'好發族群年齡層',desc:'每公斤1.2公克：國健署建議成人每天每公斤體重攝取1.1公克蛋白質，70歲以上長者為1.2公克。',tag:'官方統計',source:{name:'國健署：老年人應該多吃高蛋白粉補充營養?',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=127&pid=13140'}},
        {item:'年度趨勢方向',desc:'鈣1000毫克：衛福部依國人膳食營養素參考攝取量建議成人每日鈣1000毫克、維生素D 15微克，作為骨骼保健基礎。',tag:'官方統計',source:{name:'衛福部：及早存骨本 5招鞏固骨骼健康',url:'https://www.mohw.gov.tw/cp-16-84264-1.html'}}
      ],
      product_view:['機會：孕期、熟齡族群營養可結合保戶生命週期關懷。','機會：各族群營養重點適合做成系列內容。','風險：不推薦特定營養補充品；補充品須醫師或營養師指導。'],
      marketing_view:['機會：母親節、重陽節、孕產相關節點可分眾溝通。','機會：一家人同桌情境高共鳴。','風險：碘缺乏盛行率屬群體營養指標，不宜讓個人據此自行補碘。'],
      alert_level:'low',
      alert_reason:'屬長期營養議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('碘200μg','DATA_FACTUAL_ACCURACY','possible_outdated_value',
          '孕期碘建議量引自衛福部孕期新聞稿（200μg），國健署第八版膳食營養素參考攝取量摘要提到孕期已提高為225μg，兩者不一致。','medium','yes',
          '第八版國人膳食營養素參考攝取量總表中孕期碘建議量。','no','confirm','需核對第八版原表。',
          '碘（依第八版膳食營養素參考攝取量，需核對最新建議量）'),
        F('15-19歲、20-34歲、35-49歲育齡婦女的碘缺乏盛行率分別為22.8%、34.9%、47.5%','TERMINOLOGY_LANGUAGE','definition_unstated',
          '未說明「碘缺乏」的判定方式（尿碘中位數低於100 μg/L），讀者可能以為是醫師診斷的疾病。','low','no',
          null,'no','clarify','屬定義說明。',
          '以尿碘低於100 μg/L評估，15-19歲、20-34歲、35-49歲育齡婦女的碘缺乏盛行率分別為22.8%、34.9%、47.5%'),
        F('35到49歲的育齡婦女將近一半（47.5%）碘不夠','DATA_FACTUAL_ACCURACY','selective_figure',
          '只舉碘缺乏比例最高的35-49歲族群，未提15-19歲為22.8%，讀者可能以為所有育齡婦女都接近一半。','low','no',
          null,'no','clarify','屬引用範圍說明。',
          '育齡婦女碘不夠的比例隨年齡增加，35到49歲將近一半（47.5%）')
      ],
      card:[
        F('育齡婦女尿碘低於 100 μg/L（國健署 2017–2020 年調查）','MEDICAL_INTERPRETATION','population_indicator',
          '尿碘是群體營養評估指標，個人單次檢驗不能據以判斷缺碘，卡面未說明。','low','no',
          null,'no','clarify','屬指標性質說明。',
          null),
        F('第 3 期鐵 45mg','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '鐵的補充應依產檢血液檢查與醫囑，卡面數字可能讓孕婦自行大量補鐵。','low','no',
          null,'no','clarify','屬用藥安全。',
          '第 3 期鐵增加（依醫囑）')
      ]
    },
    title_alts:[
      '孕婦、長者、素食者吃的不一樣：不同族群的營養重點',
      '準媽媽、爸媽、吃素的家人，營養重點各不同',
      '葉酸、蛋白質、B12：依人生階段調整營養'
    ],
    card_title_alts:[
      ['一家人營養都一樣？','4 種族群的營養重點'],
      ['準媽媽注意','葉酸、碘、鐵'],
      ['長者注意','蛋白質要吃夠']
    ],
    data_addon:[
      '105年產檢資料顯示約40.9%孕婦於妊娠第12週後才接受首次產檢（衛福部）。',
      '加碘鹽每天不超過6克（衛福部孕期營養新聞稿）。',
      '維生素D主要由日曬產生，建議避開上午10點至下午2點、每週2-3次、每次10到20分鐘。'
    ],
    cta:'看看家裡誰正在懷孕、誰已經70歲以上、誰吃素，下次備餐時各加一樣他們最需要的食物。'
  });
})();
