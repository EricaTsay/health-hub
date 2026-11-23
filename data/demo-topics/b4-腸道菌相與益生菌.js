/* v6 示範主題：腸道菌相與益生菌（B4 消化・肝膽・呼吸）
   查證日期：2026-11-21。數據來源：食藥署《藥物食品安全週報》第968期〈購買益生菌食品，教您先看懂標示!〉（2024/04/05，53件含乳酸菌產品取得健康食品標章）、
   衛福部（食藥署）〈正確選用健康食品及特定疾病配方食品〉（112/11/15，核准有效健康食品419件、13項保健功效、停看聽）、
   國健署〈您今天膳食纖維吃夠了嗎?〉（2023/10/12，膳食纖維25公克、攝取不足）。
   註：健康食品件數為發布當時數字，可能已有變動；腸道菌相與疾病的關係仍在研究中，本題不寫療效。
   參考方向：健康智庫〈腸胃道健康－解密腸道微生態〉2026/05、〈糞便也可以治療疾病？認識微菌叢植入治療〉2024/01。 */
(function(){
  const REFS = [
    {title:'購買益生菌食品，教您先看懂標示!',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/tc/PublishOtherEpaperContent.aspx?id=1503&tid=4697&r=1438489315'},
    {title:'正確選用健康食品及特定疾病配方食品',source:'衛生福利部食品藥物管理署',url:'https://www.mohw.gov.tw/cp-6558-76599-1.html'},
    {title:'您今天膳食纖維吃夠了嗎? 選國產、多樣吃、餐餐有全榖',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=17556'}
  ];
  const TABLE = {headers:['看懂益生菌標示','重點'], rows:[
    ['菌種名稱','內容物須標示乳酸菌菌種的中英文名稱，不能只寫「益生菌」'],
    ['含菌量','標示含菌量者，須在有效日期前都符合標示值'],
    ['健康食品標章','有「小綠人」標章才代表取得健康食品許可，並須標示建議攝取量與警語'],
    ['不實宣稱','食品不得宣稱醫療效能，看到治病、根治字眼要提高警覺']
  ]};
  const TAGS = ['腸道菌相','益生菌','膳食纖維','健康食品','腸胃健康'];

  const DP_COUNT = {id:'dp-mb-count', type:'data_scope', title:'健康食品件數是發布當時數字',
    desc:'「53件含乳酸菌產品取得健康食品標章」為食藥署2024年4月週報所載；「核准有效健康食品419件」為衛福部112年11月網頁所載。件數會隨審核與到期變動，最新件數請至食藥署健康食品資料查詢。',
    current:'53件含乳酸菌產品取得健康食品標章（食藥署2024年4月）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'53件', value:'含乳酸菌健康食品', note:'食藥署週報2024/04/05（目前採用）'},
      {label:'419件', value:'所有核准有效健康食品', note:'衛福部112/11/15'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'腸道菌相怎麼顧？先吃對纖維，再看懂益生菌標示',
    update_date:'2026/11/21',
    intro:'腸道中住著大量微生物，組成「腸道菌相」，與消化、營養吸收等功能相關，也是近年研究熱點。照顧腸道菌相最基本的方法是吃夠膳食纖維：國民健康署依2017-2020年國民營養健康調查指出，各年齡族群膳食纖維攝取量皆未達建議量。市面上的益生菌產品眾多，食藥署2024年資料指出，有53件含乳酸菌產品取得健康食品標章，選購前應先看懂標示。',
    sections:[
      {heading:'照顧腸道菌相的基本功',format:'bullets',items:[
        '餐餐有全榖雜糧，搭配足夠蔬菜水果；以每日1800大卡為例，國健署建議每天25公克膳食纖維。',
        '飲食多樣化，減少高油、高糖與加工食品。',
        '規律作息與運動，抗生素等藥物依醫囑使用、不自行服用。'
      ]},
      {heading:'看懂益生菌標示',format:'table',table:TABLE},
      {heading:'選購前的停、看、聽',format:'bullets',items:[
        '停：先想想自己是否需要，對健康是否真的有幫助。',
        '看：包裝有無小綠人標章、建議攝取量與警語。',
        '聽：使用前聽取醫師、營養師等專業人員的建議；正在接受治療或免疫力較差者尤其要先諮詢。'
      ]}
    ],
    think_tank_view:'腸道菌相是熱門話題，但目前許多研究仍在探索階段，益生菌也不是人人都需要。比起花大錢買補充品，先把每天的纖維吃夠、飲食吃得多樣，才是對腸道最實在的投資。真的要選益生菌，記得看菌種標示和小綠人標章，並把它當成食品而不是藥品。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'健康食品件數與標示規定引自食藥署並標明發布時間，纖維建議引自國健署，未宣稱益生菌療效，未推薦特定品牌或產品。',
    ai_rationale:{basis:['53件取自食藥署2024/04/05週報','標示三要點與停看聽取自食藥署','膳食纖維建議與攝取不足取自國健署'],
      layout_reason:'先談纖維等基本功，再以表格整理益生菌標示，最後提醒選購停看聽。',
      tone:'專業易懂', tone_reason:'市場資訊多，需理性、避免誇大。',
      to_verify:['健康食品件數為發布當時數字，可至食藥署查最新','腸道菌相與疾病關係的研究仍在進展']},
    decision_points:[DP_COUNT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'益生菌要不要吃？先把纖維吃夠，再學會看標示',
    update_date:'2026/11/21',
    intro:'腸道裡住著很多細菌，大家常說的「腸道菌相」就是指它們。想讓腸道健康，最基本的是吃夠膳食纖維；可惜國健署調查發現，國人各年齡層纖維都吃不夠。至於益生菌，市面上產品很多，食藥署提醒：先看懂標示再買。',
    sections:[
      {heading:'顧腸道先做這些',format:'bullets',items:[
        '白飯換糙米、五穀飯，每餐有蔬菜，每天吃水果。',
        '少吃油炸、甜食和加工食品。',
        '睡飽、多動，抗生素照醫師指示吃。'
      ]},
      {heading:'買益生菌看這4點',format:'table',table:TABLE},
      {heading:'買之前停、看、聽',format:'bullets',items:[
        '停：想想自己真的需要嗎？',
        '看：有沒有小綠人標章、建議吃多少。',
        '聽：先問醫師或營養師，特別是正在治療的人。'
      ]}
    ],
    think_tank_view:'益生菌不是仙丹，先把三餐吃好吃滿，再考慮要不要額外補充。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資訊引自食藥署與國健署並標明時間，未宣稱益生菌療效，未推薦特定品牌或產品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以「要不要吃益生菌」的常見疑問切入。', tone:'生活親切', tone_reason:'給一般消費者閱讀。', to_verify:['健康食品件數為發布當時數字']},
    decision_points:[DP_COUNT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'腸道菌相：纖維優先，益生菌看標示',
    update_date:'2026/11/21',
    intro:'國人膳食纖維普遍攝取不足（國健署）。照顧腸道菌相先吃夠纖維，買益生菌要看懂標示。',
    sections:[
      {heading:'基本功',format:'bullets',items:[
        '全榖、蔬果、多樣飲食。'
      ]},
      {heading:'看標示',format:'table',table:TABLE},
      {heading:'停看聽',format:'bullets',items:[
        '確認需要、看標章、問專業人員。'
      ]}
    ],
    think_tank_view:'纖維吃夠是顧腸道最實在的投資。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資訊引自食藥署與國健署，未宣稱益生菌療效，未推薦特定品牌或產品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為基本功、標示、停看聽三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['健康食品件數為發布當時數字']},
    decision_points:[DP_COUNT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'腸道菌相與益生菌', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'顧腸道先吃夠纖維', primary_visual:'4 個標示重點', secondary_message:'益生菌是食品不是藥', action_priority:'看懂標示再買'},
    headline_hook:'益生菌要不要吃？', headline_main:'看懂益生菌標示 4 重點', title_accent:'4 重點',
    hero_message:'先把纖維吃夠', hero_support:'國人各年齡族群膳食纖維皆未達建議量（國健署）',
    knowledge_title:'看標示', knowledge_note:'食品**不得宣稱醫療效能**',
    knowledge_cards:[
      {label:'菌種名稱', lines:['標示中英文菌種','不能只寫益生菌']},
      {label:'含菌量', lines:['效期內須符合','標示值']},
      {label:'小綠人標章', lines:['取得健康食品許可','附建議攝取量']},
      {label:'不實宣稱', lines:['看到治病、根治','要提高警覺']}
    ],
    action_title:'顧腸道這樣做',
    action_cards:[
      {key:'吃', text:'餐餐有全榖雜糧與蔬果'},
      {key:'停', text:'先想想自己是否需要補充'},
      {key:'看', text:'認明菌種標示與小綠人標章'},
      {key:'聽', text:'治療中或免疫力差先問醫師'}
    ],
    carousel_suggestion:{reason:'若想把纖維、標示與選購原則分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'action', headline_hook:'顧腸道基本功', headline_main:'先把纖維吃夠'},
      {layout_type:'knowledge', headline_hook:'看懂標示', headline_main:'益生菌 4 重點'},
      {layout_type:'action', headline_hook:'選購前', headline_main:'停、看、聽'}]},
    hashtags:['腸道菌相','益生菌','膳食纖維','健康食品'],
    sources:['衛生福利部食品藥物管理署','衛生福利部國民健康署'],
    illustration_category:'nutrition',
    illustration:{topic:'看懂益生菌標示', audience:'一般消費者', scene:'消費者在超市拿著乳酸菌飲品仔細看包裝標示，購物籃裡有蔬果與全穀',
      emotion:'理性、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A shopper in a supermarket carefully reading the label on a probiotic drink, with vegetables, fruit and whole grains in the basket, thoughtful mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['標示規定取自食藥署2024/04/05週報','停看聽取自食藥署'],
      layout_reason:'核心是「看懂標示、理性選購」，選 knowledge：4 個標示重點當主角，不放產品件數。',
      tone:'專業易懂', tone_reason:'避免誇大益生菌效果。',
      to_verify:['健康食品件數會變動，卡面未放']},
    content_check_note:'標示規定引自食藥署，未宣稱益生菌療效，未推薦特定品牌或產品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'腸道菌相與益生菌',
    collect:{
      summary:'腸道菌相是近年熱門健康議題，益生菌產品眾多；食藥署2024年指出53件含乳酸菌產品取得健康食品標章，並提醒看懂菌種、含菌量標示與停看聽選購原則；國健署資料顯示國人膳食纖維普遍攝取不足，「先吃夠纖維、理性選購」是溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'53件取得健康食品標章：食藥署2024年4月指出，臺灣有53件含乳酸菌產品取得健康食品小綠人標章，功效以胃腸功能改善、輔助調整過敏體質、免疫調節最多。',tag:'官方統計',source:{name:'食藥署：購買益生菌食品，教您先看懂標示',url:'https://www.fda.gov.tw/tc/PublishOtherEpaperContent.aspx?id=1503&tid=4697&r=1438489315'}},
        {item:'政策動向',desc:'419件健康食品：衛福部112年11月資料，核准有效之健康食品共419件，保健功效共13項，須有小綠人標章及建議攝取量與警語。',tag:'官方統計',source:{name:'衛福部：正確選用健康食品及特定疾病配方食品',url:'https://www.mohw.gov.tw/cp-6558-76599-1.html'}},
        {item:'年度趨勢方向',desc:'每天25公克膳食纖維：國健署以每日1800大卡計，建議每天攝取25公克膳食纖維，但2017-2020年調查顯示各年齡族群皆未達建議量。',tag:'官方統計',source:{name:'國民健康署：您今天膳食纖維吃夠了嗎?',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=17556'}},
        {item:'好發族群年齡層',desc:'標示3要點：食藥署要求乳酸菌產品標示菌種中英文名稱、標示含菌量須在效期內符合，且不得宣稱醫療效能。',tag:'官方統計',source:{name:'食藥署：購買益生菌食品，教您先看懂標示',url:'https://www.fda.gov.tw/tc/PublishOtherEpaperContent.aspx?id=1503&tid=4697&r=1438489315'}}
      ],
      product_view:['機會：理性選購保健食品的衛教，可建立品牌公信力。','機會：腸道健康與飲食內容受歡迎，適合做系列。','風險：不得推薦特定益生菌產品或暗示保險商品搭配保健品的效果。'],
      marketing_view:['機會：「益生菌要不要吃？」是常見搜尋問題。','機會：「看懂標示4重點」實用易分享。','風險：避免誇大腸道菌相研究結果。'],
      alert_level:'low',
      alert_reason:'屬消費與飲食議題，無急迫時效事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('與消化、營養吸收等功能相關，也是近年研究熱點','SOURCE_EVIDENCE','unsourced_claim',
          '腸道菌相功能描述未附出處，引用的官方資料未談菌相機轉。','low','no',
          null,'no','clarify','屬出處補充。',
          '與消化等功能相關，仍有許多研究在進行中'),
        F('食藥署2024年資料指出，有53件含乳酸菌產品取得健康食品標章','CURRENCY_TIMELINESS','count_as_of_date',
          '件數會隨審核與到期變動，文中未提醒讀者這是發布當時的數字，也未提供查詢管道。','low','no',
          null,'no','clarify','屬時點與查詢管道說明。',
          '食藥署2024年4月資料指出，當時有53件含乳酸菌產品取得健康食品標章（最新件數可至食藥署健康食品資料查詢）'),
        F('才是對腸道最實在的投資','MEDICAL_INTERPRETATION','comparative_claim',
          '與補充品比較的說法屬主觀判斷，缺乏依據。','low','no',
          null,'no','clarify','屬語氣調整。',
          '是照顧腸道的基本做法'),
        F('益生菌不是仙丹','TERMINOLOGY_LANGUAGE','tone_casual',
          '口語化否定可能引起業者或讀者反感，可改為中性描述。','low','no',
          null,'no','clarify','屬語氣調整。',
          '益生菌屬於食品，效果因人而異')
      ],
      card:[
        F('不能只寫益生菌','REGULATORY_COMPLIANCE','paraphrase_precision',
          '食藥署原文是成分中的乳酸菌「不能以益生菌取代」並須標示菌種中英文名，卡面簡化後可能被誤解為包裝上不能出現「益生菌」字樣。','low','no',
          null,'no','clarify','屬法規轉述精確度。',
          '成分不能只寫「益生菌」'),
        F('治療中或免疫力差先問醫師','MEDICAL_INTERPRETATION','safety_caveat',
          '說法合理，但「免疫力差」未舉例，讀者難以判斷。','low','no',
          null,'no','clarify','屬用語說明。',
          '化療中、免疫功能低下者先問醫師')
      ]
    },
    title_alts:[
      '腸道菌相怎麼顧？先吃對纖維，再看懂益生菌標示',
      '益生菌要不要吃？先把纖維吃夠，再學會看標示',
      '看懂益生菌標示4重點：菌種、含菌量、小綠人、不實宣稱'
    ],
    card_title_alts:[
      ['益生菌要不要吃？','看懂益生菌標示 4 重點'],
      ['顧腸道','先把纖維吃夠'],
      ['選購保健食品','停、看、聽']
    ],
    data_addon:[
      '健康食品保健功效共13項，包括胃腸功能改善、免疫調節、輔助調整過敏體質等。',
      '若培養基為終產品內容物一部分，須確認為可食用原料並展開標示。',
      '將三餐精製澱粉換成全榖雜糧，可增加約7.9公克膳食纖維。'
    ],
    cta:'下次買益生菌前，先翻到包裝背面確認菌種中英文名稱與小綠人標章；今天起每餐至少一份全榖或蔬菜。'
  });
})();
