/* v6 示範主題：蔬果農藥殘留（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-20。數據來源：食藥署「115年7-8月市售蔬果農產品農藥殘留監測結果」（2026-11-03發布，隨機抽樣與高風險加強監測）、同頁選購與清洗建議；114年7-8月同系列結果作對照。
   注意：食藥署為雙月公布，查無114年全年彙整合格率；高風險樣本合格率為依件數換算。
   參考方向：健康智庫〈蔬果安心洗 農藥不殘留〉2026/04。 */
(function(){
  const REFS = [
    {title:'115年7-8月市售蔬果農產品農藥殘留監測結果',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/TC/siteContent.aspx?sid=13776'},
    {title:'114年7-8月市售蔬果農產品農藥殘留監測結果',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/TC/siteContent.aspx?sid=13481'},
    {title:'蔬果農藥殘留量監測結果',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/Tc/site.aspx?sid=2428'}
  ];
  const TABLE = {headers:['步驟','食藥署建議'], rows:[
    ['選','選當季，認明有機、產銷履歷或CAS標章，向信譽良好商家購買'],
    ['泡','蔬菜先以流動清水浸泡'],
    ['沖','再用流動清水沖洗'],
    ['切','洗完最後才切，避免農藥從切口滲入或沖掉營養'],
    ['削','水果沖洗後去皮食用']
  ]};
  const TAGS = ['農藥殘留','蔬果清洗','食品安全','產銷履歷','當季蔬果'];

  const PRO = {
    content_type:'健康文章',
    title:'市售蔬果合格率97.4%：選當季、先泡後沖再切，吃得更安心',
    update_date:'2026/11/20',
    intro:'食品藥物管理署與地方衛生局持續監測市售蔬果農藥殘留。115年7-8月共抽驗989件：隨機抽樣的456件中有444件符合規定，合格率97.4%；另針對歷年不合格率較高的品項，精準抽驗533件高風險農產品，其中467件符合規定。食藥署建議民眾選當季、認明標章，清洗時先浸泡再沖洗、最後才切。',
    sections:[
      {heading:'選購與清洗5步驟',format:'table',table:TABLE},
      {heading:'監測結果怎麼看',format:'bullets',items:[
        '隨機抽樣反映一般市售蔬果的狀況，115年7-8月合格率97.4%。',
        '高風險加強監測刻意鎖定問題較多的品項，合格比例較低是預期中的結果，目的是揪出不合格產品。',
        '不合格產品由地方衛生局依法處理。'
      ]},
      {heading:'團膳與餐飲業者',format:'bullets',items:[
        '優先採購有標章或自主檢驗農藥殘留的食材。',
        '留存檢驗報告與進貨紀錄，定期查核供應商。'
      ]}
    ],
    think_tank_view:'農藥殘留的風險控管有兩道關：政府抽驗把關，消費者則靠「選」與「洗」。當季蔬果用藥通常較少，正確清洗又能再降低殘留；與其害怕不吃蔬果，不如把這幾個步驟變成習慣。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'監測結果引自食藥署115年7-8月公告並標明期間，選購與清洗建議引自同一公告，未涉及特定蔬果清潔劑商品。',
    ai_rationale:{basis:['115年7-8月隨機抽樣合格率97.4%（食藥署）','清洗步驟取自同一公告'],
      layout_reason:'先用表格給選購與清洗步驟，再說明兩種抽樣結果的差別，最後提醒團膳業者。',
      tone:'專業易懂', tone_reason:'需說明兩種抽樣口徑。',
      to_verify:['食藥署為雙月公告，未查得全年彙整合格率']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'菜要怎麼洗才乾淨？先泡、再沖、最後才切',
    update_date:'2026/11/20',
    intro:'擔心蔬菜水果有農藥？食藥署定期到市場抽驗，115年7-8月隨機抽的456件蔬果，有444件合格，合格率97.4%。剩下的小部分，靠我們買菜和洗菜的習慣就能再把關一次。記住：選當季、先泡再沖、最後才切。',
    sections:[
      {heading:'買菜洗菜5步驟',format:'table',table:TABLE},
      {heading:'檢驗結果的小知識',format:'bullets',items:[
        '隨便抽的蔬果，將近每100件有97件合格。',
        '政府也會特別盯問題比較多的品項，這部分不合格的比例會比較高。',
        '不合格的產品會由衛生局處理。'
      ]},
      {heading:'小提醒',format:'bullets',items:[
        '當季蔬果通常比較好吃也比較安心。',
        '看到有機、產銷履歷、CAS標章可以優先選。'
      ]}
    ],
    think_tank_view:'蔬果還是要多吃！洗菜多花兩分鐘，換全家吃得安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自食藥署115年7-8月公告並標明期間，未涉及特定商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「菜要怎麼洗」的生活問題切入。', tone:'生活親切', tone_reason:'給家庭備餐者。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'蔬果農藥殘留：選當季、泡沖切',
    update_date:'2026/11/20',
    intro:'115年7-8月市售蔬果隨機抽樣合格率97.4%（食藥署）。正確選購與清洗可再降低風險。',
    sections:[
      {heading:'5步驟',format:'table',table:TABLE},
      {heading:'監測重點',format:'bullets',items:[
        '隨機抽樣反映一般市售狀況。',
        '高風險加強監測合格率較低屬預期。'
      ]},
      {heading:'選購',format:'bullets',items:[
        '選當季、認標章。'
      ]}
    ],
    think_tank_view:'政府抽驗加上個人選洗，是蔬果安全的兩道關卡。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自食藥署並標明期間，未涉及特定商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為步驟、監測、選購三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'蔬果農藥殘留', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'市售蔬果隨機抽樣合格率 97.4%', primary_visual:'97.4%', secondary_message:'正確清洗再把關一次', action_priority:'選、泡、沖、切'},
    headline_hook:'蔬果有農藥殘留？', headline_main:'選、泡、沖、切 4 步驟', title_accent:'4 步驟',
    hero_message:'合格率 97.4%', hero_support:'115 年 7–8 月市售蔬果隨機抽樣（食藥署）',
    primary_stat:{value:'97.4%', label:'市售蔬果隨機抽樣合格率', note:'食藥署 115 年 7–8 月｜456 件中 444 件合格'},
    action_title:'蔬果這樣處理',
    action_cards:[
      {key:'選', text:'選當季，認明產銷履歷或 CAS 標章'},
      {key:'泡', text:'蔬菜先以流動清水浸泡'},
      {key:'沖', text:'再以流動清水沖洗'},
      {key:'切', text:'洗完最後才切，水果沖洗後去皮'}
    ],
    carousel_suggestion:{reason:'若想把監測結果與清洗方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'市售蔬果合格嗎？', headline_main:'隨機抽樣 97.4%'},
      {layout_type:'knowledge', headline_hook:'兩種抽樣', headline_main:'隨機 vs 高風險加強監測'},
      {layout_type:'action', headline_hook:'正確清洗', headline_main:'選、泡、沖、切'}]},
    hashtags:['農藥殘留','蔬果清洗','食品安全','產銷履歷'],
    sources:['衛生福利部食品藥物管理署'],
    illustration_category:'general',
    illustration:{topic:'蔬果清洗', audience:'家庭備餐者', scene:'廚房水槽裡一盆蔬菜泡在流動的清水中，旁邊放著整顆還沒切的高麗菜與水果',
      emotion:'清新、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'Vegetables soaking in a basin under running water in a kitchen sink, an uncut cabbage and fruits beside it, fresh and reassuring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['115年7-8月隨機抽樣合格率97.4%（食藥署）'],
      layout_reason:'重點是可做的清洗步驟，選 action：4 步驟當主角，合格率當安心背景。',
      tone:'專業易懂', tone_reason:'降低恐慌，給具體做法。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'數據與建議引自食藥署並標明期間，未涉及特定商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'蔬果農藥殘留',
    collect:{
      summary:'食藥署與地方衛生局雙月公布市售蔬果農藥殘留監測，115年7-8月隨機抽樣合格率97.4%，另以精準抽樣鎖定高風險品項加強監測。食藥署建議選當季、認標章，清洗時先浸泡再沖洗、最後才切，是兼顧蔬果攝取與食安的溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'97.4%：食藥署115年7-8月市售蔬果監測共抽驗989件，隨機選取456件中444件符合規定，合格率97.4%。',tag:'官方統計',source:{name:'食藥署：115年7-8月市售蔬果農產品農藥殘留監測結果',url:'https://www.fda.gov.tw/TC/siteContent.aspx?sid=13776'}},
        {item:'年度趨勢方向',desc:'97.8%：114年7-8月同期隨機抽樣合格率為97.8%，高風險加強監測合格率83.6%，食藥署以雙月公告持續追蹤。',tag:'官方統計',source:{name:'食藥署：114年7-8月市售蔬果農產品農藥殘留監測結果',url:'https://www.fda.gov.tw/TC/siteContent.aspx?sid=13481'}},
        {item:'政策動向',desc:'533件高風險樣本：食藥署以風險為基礎的精準抽樣鎖定高風險品項，115年7-8月加強監測533件、467件符合規定，提高揪出不合格產品的機率。',tag:'官方統計',source:{name:'食藥署：115年7-8月市售蔬果農產品農藥殘留監測結果',url:'https://www.fda.gov.tw/TC/siteContent.aspx?sid=13776'}},
        {item:'好發族群年齡層',desc:'團膳業者：食藥署提醒學校、餐飲與團膳業者供餐對象眾多，應優先採購有標章或自主檢驗農藥殘留的食材，並留存檢驗報告與進貨紀錄。',tag:'官方統計',source:{name:'食藥署：115年7-8月市售蔬果農產品農藥殘留監測結果',url:'https://www.fda.gov.tw/TC/siteContent.aspx?sid=13776'}}
      ],
      product_view:['機會：食安議題貼近家庭日常，可作為保戶關懷的生活實用內容。','機會：正確清洗步驟易轉為短影音教學。','風險：避免推薦特定蔬果清潔劑或檢測商品；不宜以不合格案例製造恐慌而降低蔬果攝取。'],
      marketing_view:['機會：每雙月食藥署公布結果，可作為定期溝通素材。','機會：「先泡、再沖、最後才切」口訣好記。','風險：高風險樣本合格率較低易被誤讀，需說明抽樣目的。'],
      alert_level:'low',
      alert_reason:'屬長期食安議題，隨機抽樣合格率穩定；可配合雙月監測公告溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('洗完最後才切，避免農藥從切口滲入或沖掉營養','SOURCE_EVIDENCE','unsourced_rationale',
          '食藥署公告只建議「最後才切」，未說明理由；文中補上的「農藥從切口滲入、沖掉營養」未附出處。','low','no',
          null,'no','clarify','屬常見衛教說法，需補出處或刪除理由。',
          '洗完最後才切（食藥署建議）'),
        F('高風險加強監測刻意鎖定問題較多的品項，合格比例較低是預期中的結果','DATA_FACTUAL_ACCURACY','missing_figure',
          '文中提到高風險樣本合格比例較低，但未給出比例（依件數換算約87.6%），讀者無法判斷差距大小。','low','no',
          null,'no','clarify','比例需自行換算，食藥署公告未直接列出。',
          '高風險加強監測刻意鎖定問題較多的品項，115年7-8月533件中467件合格（約87.6%，依件數換算），比例較低是預期中的結果',
          ['政府也會特別盯問題比較多的品項，這部分不合格的比例會比較高','高風險加強監測合格率較低屬預期。']),
        F('115年7-8月共抽驗989件','DATA_FACTUAL_ACCURACY','short_period',
          '引用的是單一雙月期別，讀者可能以為是全年結果；文中未說明食藥署為雙月公告。','low','no',
          null,'no','clarify','屬期間說明。',
          '115年7-8月（食藥署雙月公告）共抽驗989件')
      ],
      card:[
        F('洗完最後才切，水果沖洗後去皮','MEDICAL_INTERPRETATION','overgeneralization',
          '並非所有水果都適合去皮食用（如葡萄、草莓），卡面寫法過於概括。','low','no',
          null,'no','clarify','屬適用範圍。',
          '洗完最後才切，可去皮的水果去皮食用'),
        F('115 年 7–8 月市售蔬果隨機抽樣（食藥署）','DATA_FACTUAL_ACCURACY','short_period',
          '單一雙月期別的合格率，卡面未說明非全年數字。','low','no',
          null,'no','clarify','屬期間說明。',
          '115 年 7–8 月雙月監測・隨機抽樣（食藥署）')
      ]
    },
    title_alts:[
      '市售蔬果合格率97.4%：選當季、先泡後沖再切，吃得更安心',
      '菜要怎麼洗才乾淨？先泡、再沖、最後才切',
      '農藥殘留怎麼防？食藥署監測結果與清洗4步驟'
    ],
    card_title_alts:[
      ['蔬果有農藥殘留？','選、泡、沖、切 4 步驟'],
      ['菜要怎麼洗？','先泡、再沖、最後才切'],
      ['隨機抽樣合格率 97.4%','清洗再把關一次']
    ],
    data_addon:[
      '114年7-8月隨機抽樣合格率97.8%、高風險加強監測83.6%（食藥署）。',
      '食藥署市售蔬果農藥殘留監測結果為雙月公告。',
      '不合格產品由地方衛生局依法處理。'
    ],
    cta:'今天洗菜時試試「先泡、再沖、最後才切」，水果能去皮的就沖洗後去皮再吃。'
  });
})();
