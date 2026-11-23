/* v6 示範主題：食物中毒預防（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-20。數據來源：食藥署「歷年食品中毒資料」114年食品中毒發生狀況（表一至表四，PDF 以本機解碼讀取）、113年月別統計表、食藥署「五要二不記得牢 歡慶喜迎蛇年到」新聞稿。
   注意：食藥署註明數據可能因未來修正而更新。
   參考方向：健康智庫〈拒絕食物中毒 從「五要二不」做起〉2026/03、〈食物中毒！該怎麼吃才安全？〉2023/07。 */
(function(){
  const REFS = [
    {title:'歷年食品中毒資料（114年食品中毒發生狀況）',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/TC/sitecontent.aspx?sid=323'},
    {title:'食品中毒案件月別統計表（民國113年）',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/tc/includes/GetFile.ashx?id=f638906793326636642&type=4'},
    {title:'五要二不記得牢 歡慶喜迎蛇年到',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/tc/newsContent.aspx?cid=4&id=t623392'},
    {title:'小心食品中毒！「五要二不原則」必遵守',source:'食藥署食藥好文網',url:'https://article-consumer.fda.gov.tw/subject.aspx?subjectid=1&id=3659&parentid=57'}
  ];
  const TABLE = {headers:['五要二不','怎麼做'], rows:[
    ['要洗手','調理食物前後徹底洗手，有傷口要包紮'],
    ['要新鮮','食材要新鮮，用水要衛生'],
    ['要生熟食分開','生熟食使用不同器具，避免交叉污染'],
    ['要徹底加熱','食品中心溫度超過70℃'],
    ['要低溫保存','儘速冷藏於7℃以下，易腐敗食物5℃以下'],
    ['二不','不飲用山泉水、不食用不明的動植物']
  ]};
  const TAGS = ['食品中毒','食品安全','諾羅病毒','五要二不','外食安全'];

  const PRO = {
    content_type:'健康文章',
    title:'食品中毒近8成發生在外食場所：記住「五要二不」',
    update_date:'2026/11/20',
    intro:'依食品藥物管理署統計，114年全國食品中毒通報1,212案、患者5,650人，較113年的1,750案、9,045人減少；在判明病因的案件中，諾羅病毒以165案、1,478名患者最多，其次為仙人掌桿菌與金黃色葡萄球菌。攝食場所以「供膳之營業場所」957案最多，約占全部案件近8成。食藥署呼籲落實「五要二不」原則。',
    sections:[
      {heading:'食藥署五要二不原則',format:'table',table:TABLE},
      {heading:'114年食品中毒重點',format:'bullets',items:[
        '病毒：諾羅病毒165案、1,478人，是案件數最多的病因物質。',
        '細菌：仙人掌桿菌61案、753人；金黃色葡萄球菌55案、608人；沙門氏桿菌17案、499人。',
        '場所：供膳之營業場所957案最多，其次為自宅159案、學校31案。',
        '月份：1月403案、2月263案最多，冬季為高峰。'
      ]},
      {heading:'外食與在家的提醒',format:'bullets',items:[
        '選擇環境衛生、食物有妥善冷藏與加熱的店家。',
        '剩菜儘速冷藏，再次食用前徹底加熱。',
        '出現嘔吐、腹瀉、腹痛、發燒等症狀，儘速就醫並告知醫師飲食史。',
        '若多人同時出現症狀，可通報衛生局協助調查。'
      ]}
    ],
    think_tank_view:'食品中毒多數是「小地方」累積出來的：手沒洗乾淨、砧板生熟混用、便當放在室溫太久。把五要二不變成廚房與外食的檢查清單，比事後吃止瀉藥更重要；冬季諾羅病毒高峰，更要從洗手做起。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'案件數、病因與場所統計引自食藥署114年食品中毒資料並標明年份，五要二不引自食藥署，未涉及特定店家或品牌。',
    ai_rationale:{basis:['114年食品中毒1,212案、5,650人（食藥署）','諾羅病毒165案居判明病因首位'],
      layout_reason:'先用表格呈現五要二不，再整理114年統計重點，最後給外食與居家提醒。',
      tone:'專業易懂', tone_reason:'食安資訊需要具體溫度與做法。',
      to_verify:['食藥署註明數據可能因後續修正而更新','114年PDF由本機解碼讀取，建議人工對照原檔']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'吃完上吐下瀉？外食、聚餐記住「五要二不」',
    update_date:'2026/11/20',
    intro:'食藥署統計，114年全台有5,650人因食品中毒送醫或就診，最常見的元兇是諾羅病毒。而且將近8成的案件發生在餐廳、小吃店這類供餐的營業場所。冬天又是高峰期，不管外食還是在家煮，都記得「五要二不」。',
    sections:[
      {heading:'五要二不，這樣做',format:'table',table:TABLE},
      {heading:'114年食品中毒怎麼發生？',format:'bullets',items:[
        '諾羅病毒最多，冬天特別常見。',
        '細菌類以仙人掌桿菌、金黃色葡萄球菌最常見。',
        '大部分發生在餐廳、便當店等外食場所，其次是自己家裡。',
        '1、2月是一年中案件最多的時候。'
      ]},
      {heading:'這樣吃比較安心',format:'bullets',items:[
        '挑乾淨、食物有冷藏的店家。',
        '剩菜快點放冰箱，要吃前熱透。',
        '上吐下瀉、肚子痛、發燒就去看醫生，說說吃了什麼。',
        '好幾個人一起不舒服，可以通報衛生局。'
      ]}
    ],
    think_tank_view:'冬天聚餐多，飯前先洗手、剩菜不放室溫，就是最簡單的防護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自食藥署114年統計並標明年份，「將近8成」依957案÷1,212案換算，未涉及特定店家。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以外食聚餐情境切入。', tone:'生活親切', tone_reason:'給外食族與家庭讀者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'食品中毒：五要二不',
    update_date:'2026/11/20',
    intro:'114年食品中毒1,212案、5,650人；諾羅病毒居判明病因首位，近8成發生在供膳營業場所。',
    sections:[
      {heading:'五要二不',format:'table',table:TABLE},
      {heading:'114年重點',format:'bullets',items:[
        '諾羅病毒165案最多。',
        '冬季1、2月為高峰。'
      ]},
      {heading:'提醒',format:'bullets',items:[
        '剩菜冷藏、徹底加熱。',
        '有症狀儘速就醫。'
      ]}
    ],
    think_tank_view:'洗手、生熟分開、徹底加熱、低溫保存，是預防食品中毒的基本功。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自食藥署並標明年份，未涉及特定店家。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為原則、重點、提醒三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'食物中毒預防', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'114 年食品中毒 5,650 人', primary_visual:'5,650 人', secondary_message:'諾羅病毒是最常見病因', action_priority:'五要二不'},
    headline_hook:'冬季是食品中毒高峰', headline_main:'記住五要二不，吃得安心', title_accent:'五要二不',
    primary_stat:{kicker:'114 年・全國', value:'5,650 人', label:'食品中毒患者', note:'食藥署｜1,212 案，113 年為 9,045 人'},
    secondary_stats:[
      {value:'165 案', label:'諾羅病毒（病因第 1）'},
      {value:'近 8 成', label:'發生在供膳營業場所'},
      {value:'70℃', label:'食品中心溫度要超過'}
    ],
    action_title:'五要這樣做',
    action_cards:[
      {key:'洗', text:'調理前後徹底洗手'},
      {key:'分', text:'生熟食器具分開'},
      {key:'熱', text:'徹底加熱，中心溫度超過 70℃'},
      {key:'存', text:'儘速冷藏於 7℃ 以下'}
    ],
    notice:'二不：**不飲用山泉水、不食用不明的動植物**。',
    carousel_suggestion:{reason:'若想把統計、病因與五要二不分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'114 年食品中毒', headline_main:'5,650 人'},
      {layout_type:'knowledge', headline_hook:'最常見病因', headline_main:'諾羅病毒與 3 種細菌'},
      {layout_type:'action', headline_hook:'預防食品中毒', headline_main:'五要二不'}]},
    hashtags:['食品中毒','食品安全','諾羅病毒','五要二不'],
    sources:['衛生福利部食品藥物管理署'],
    illustration_category:'virus-infection',
    illustration:{topic:'預防食品中毒', audience:'家庭與外食族', scene:'廚房裡一人在洗手，旁邊砧板分成生食與熟食兩塊，冰箱門打開正放入剩菜',
      emotion:'乾淨、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A person washing hands in a kitchen with separate cutting boards for raw and cooked food, leftovers being placed in an open fridge, clean and reassuring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['114年食品中毒5,650人（食藥署）','五要二不（食藥署新聞稿）'],
      layout_reason:'有清楚的年度數字與病因排行，選 data：患者人數當主角，病因與場所放第二層，最後給五要行動。',
      tone:'專業易懂', tone_reason:'數字加具體做法。',
      to_verify:['數據可能因食藥署後續修正而更新']},
    decision_points:[],
    content_check_note:'數據與原則引自食藥署並標明年份，未涉及特定店家。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'食物中毒預防',
    collect:{
      summary:'食藥署統計114年食品中毒1,212案、5,650人，較113年減少；判明病因以諾羅病毒最多，近8成案件發生在供膳之營業場所，1、2月為高峰。食藥署持續以「五要二不」推廣居家與外食的食品中毒預防。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約5650人：食藥署114年食品中毒發生狀況，全年通報1,212案、患者5,650人、無死亡，113年為1,750案、9,045人、10人死亡。',tag:'官方統計',source:{name:'食藥署：歷年食品中毒資料',url:'https://www.fda.gov.tw/TC/sitecontent.aspx?sid=323'}},
        {item:'年度趨勢方向',desc:'約1500人：114年判明病因的案件中，諾羅病毒165案、患者1478人最多，仙人掌桿菌61案、金黃色葡萄球菌55案、沙門氏桿菌17案。',tag:'官方統計',source:{name:'食藥署：歷年食品中毒資料',url:'https://www.fda.gov.tw/TC/sitecontent.aspx?sid=323'}},
        {item:'好發族群年齡層',desc:'近8成：114年攝食場所以供膳之營業場所957案最多，其次為自宅159案、學校31案（患者536人）。',tag:'官方統計',source:{name:'食藥署：歷年食品中毒資料',url:'https://www.fda.gov.tw/TC/sitecontent.aspx?sid=323'}},
        {item:'政策動向',desc:'中心溫度超過70℃：食藥署推廣「五要二不」原則，要洗手、要新鮮、要生熟食分開、要徹底加熱、要低溫保存，不飲用山泉水、不食用不明動植物。',tag:'官方統計',source:{name:'食藥署：五要二不記得牢 歡慶喜迎蛇年到',url:'https://www.fda.gov.tw/tc/newsContent.aspx?cid=4&id=t623392'}}
      ],
      product_view:['機會：食品中毒可能導致急診與住院，可連結住院醫療保障的衛教說明。','機會：年節聚餐、團膳的食安提醒可作為保戶關懷內容。','風險：避免點名特定店家或事件；不宜以單一事件渲染恐慌。'],
      marketing_view:['機會：春節圍爐、尾牙、夏季外食是固定溝通時點。','機會：「五要二不」口訣好記，適合做互動題。','風險：統計數字可能被食藥署修正，需標明資料年份。'],
      alert_level:'medium',
      alert_reason:'冬季（1、2月）為食品中毒高峰，年節前後適合加強溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('攝食場所以「供膳之營業場所」957案最多，約占全部案件近8成','DATA_FACTUAL_ACCURACY','derived_figure',
          '「近8成」是以957案÷1,212案自行換算；食藥署總計已扣除多場所重複計數（34案），直接相除會略有誤差，文中未說明是換算值。','low','no',
          null,'no','clarify','換算方向正確，屬表達說明。',
          '攝食場所以「供膳之營業場所」957案最多（約占通報案件近8成，依統計表換算）',
          ['將近8成的案件發生在餐廳、小吃店這類供餐的營業場所','近8成發生在供膳營業場所']),
        F('較113年的1,750案、9,045人減少','DATA_FACTUAL_ACCURACY','comparison_caveat',
          '113年包含寶林茶室邦克列酸事件等重大事件，兩年案件組成不同；直接比較增減容易被解讀為整體食安改善。','low','no',
          null,'no','clarify','數字正確，屬比較解讀。',
          '較113年的1,750案、9,045人減少（各年度受重大事件影響，宜審慎比較）'),
        F('出現嘔吐、腹瀉、腹痛、發燒等症狀，儘速就醫並告知醫師飲食史','MEDICAL_INTERPRETATION','missing_red_flags',
          '未區分輕重症狀；脫水、血便、持續高燒或嬰幼兒與長者，需特別儘速就醫。','low','no',
          null,'no','clarify','屬就醫指引完整度。',
          '出現嘔吐、腹瀉、腹痛、發燒等症狀，儘速就醫並告知醫師飲食史；嬰幼兒、長者或有脫水、血便時更需立即就醫',
          ['上吐下瀉、肚子痛、發燒就去看醫生，說說吃了什麼','有症狀儘速就醫。'])
      ],
      card:[
        F('發生在供膳營業場所','DATA_FACTUAL_ACCURACY','derived_figure',
          '「近 8 成」為換算值，未標示是案件數比例。','low','no',
          null,'no','clarify','屬口徑說明。',
          '案件發生在供膳營業場所'),
        F('儘速冷藏於 7℃ 以下','MEDICAL_INTERPRETATION','incomplete_guidance',
          '食藥署另建議易腐敗食物存放於 5℃ 以下，卡面只列 7℃。','low','no',
          null,'no','clarify','受字數限制。',
          '冷藏 7℃ 以下，易腐食物 5℃ 以下')
      ]
    },
    title_alts:[
      '食品中毒近8成發生在外食場所：記住「五要二不」',
      '吃完上吐下瀉？外食、聚餐記住「五要二不」',
      '114年食品中毒5,650人：諾羅病毒居首，冬季要小心'
    ],
    card_title_alts:[
      ['冬季是食品中毒高峰','記住五要二不，吃得安心'],
      ['吃完上吐下瀉？','預防食品中毒 4 要'],
      ['諾羅病毒居首','洗手、加熱、冷藏']
    ],
    data_addon:[
      '114年1月403案、2月263案，為全年案件最多的月份（食藥署）。',
      '114年學校食品中毒31案、患者536人。',
      '113年食品中毒1,750案、9,045人、10人死亡（食藥署）。'
    ],
    cta:'今晚收拾剩菜時，記得兩小時內放進冰箱，明天吃前徹底加熱。'
  });
})();
