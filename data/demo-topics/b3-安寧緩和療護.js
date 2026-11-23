/* v6 示範主題：安寧緩和療護（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：衛福部「預立安寧緩和意願達109.7萬人」新聞（114/10/18建檔、115/03/13更新）、
   衛福部「健保擴大安寧療護收案對象 落實生命善終」（111年）、衛福部「安寧緩和醫療條例20週年推廣有成」（109年，安寧照護人數至108年底）。
   參考方向：健康智庫〈尊嚴地走完最後一哩路-「安寧療護」〉2024/09、〈安寧善終〉2024/06。 */
(function(){
  const REFS = [
    {title:'預立安寧緩和意願達109.7萬人 響應世界安寧日路跑另類體驗',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-84258-1.html'},
    {title:'健保擴大安寧療護收案對象 落實生命善終',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-5266-67794-1.html'},
    {title:'「耕耘二十 時時守護」安寧緩和醫療條例20週年推廣有成',source:'衛生福利部',url:'https://mohw.gov.tw/cp-4625-56496-1.html'},
    {title:'預立醫療決定、安寧緩和醫療及器官捐贈意願資訊系統',source:'衛生福利部',url:'https://hpcod.mohw.gov.tw/HospWeb/'}
  ];
  const TABLE = {headers:['照護方式','適合情境'], rows:[
    ['住院安寧','症狀較複雜、需密集照護，入住安寧病房'],
    ['安寧共同照護','住在一般病房，由安寧團隊與原醫療團隊共同照顧'],
    ['居家安寧','希望在家中，由醫護人員定期到宅訪視'],
    ['機構安寧','住在住宿式長照機構，由安寧團隊到機構照護']
  ]};
  const TAGS = ['安寧緩和療護','善終','預立醫療','病人自主','長期照顧'];

  const DP_COUNT = {id:'dp-hospice-count', type:'data_scope', title:'安寧照護人數是較早期資料',
    desc:'「接受安寧照護人數至108年底5萬7千餘人」出自衛福部109年安寧條例20週年新聞，之後未查到官方更新的年度人數。109.7萬人則是「預立安寧緩和意願」的線上簽署人數，兩者對象不同。',
    current:'預立安寧緩和意願線上簽署109.7萬人（衛福部114年）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'109.7萬人', value:'預立意願簽署', note:'衛福部114年世界安寧日新聞（目前採用）'},
      {label:'5.7萬餘人', value:'當年接受安寧照護', note:'至108年底，衛福部109年新聞'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'安寧緩和療護不是放棄：認識4種照護方式與預立意願',
    update_date:'2026/11/20',
    intro:'安寧緩和療護是以末期病人為中心，由醫師、護理師、社工、心理師等團隊共同緩解身體不適與心理壓力，並陪伴家屬，讓病人在生命最後一段路保有尊嚴與生活品質。依衛生福利部114年世界安寧日新聞，國內預立安寧緩和療護意願的線上簽署人數已達109.7萬人；臺灣在2025年《全球安寧緩和醫療地圖》評比中名列世界第3、亞洲第1。',
    sections:[
      {heading:'健保安寧的4種照護方式',format:'table',table:TABLE},
      {heading:'安寧療護常見的誤解',format:'bullets',items:[
        '安寧不是放棄治療，而是把重點放在控制疼痛、呼吸困難等症狀，以及心理與靈性支持。',
        '不只癌症病人：健保安寧照護範圍最初為癌症與漸凍人，之後陸續擴大至多種重症末期病人，111年再放寬收案對象。',
        '不一定要住院：可選擇在家或在住宿式長照機構接受安寧照護。'
      ]},
      {heading:'及早表達自己的意願',format:'bullets',items:[
        '可持健保卡或自然人憑證，至衛福部「預立醫療決定、安寧緩和醫療及器官捐贈意願資訊系統」線上預立安寧緩和意願。',
        '病人自主權利法另提供「預立醫療照護諮商」，可在醫療機構與醫療團隊、家人討論後簽署預立醫療決定。',
        '最重要的是趁身體狀況好時與家人談，讓家人在關鍵時刻知道你的想法。'
      ]}
    ],
    think_tank_view:'許多家庭在病人進入加護病房後才第一次討論「要不要急救」，往往陷入兩難與愧疚。預立意願不是悲觀，而是把選擇權留在自己手上。建議在年度健檢、家族聚會等平常的時機，就把「希望在哪裡、以什麼方式被照顧」說出來，並完成註記。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'簽署人數與國際排名引自衛福部114年新聞，健保給付範圍引自衛福部說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['預立安寧緩和意願線上簽署109.7萬人取自衛福部114/10/18新聞','111年擴大收案對象取自衛福部新聞'],
      layout_reason:'先以表格說明4種照護方式，再澄清常見誤解，最後引導預立意願。',
      tone:'專業易懂', tone_reason:'議題敏感，需清楚、溫和。',
      to_verify:['近年接受安寧照護人數未查到官方更新數字（最新為108年底5.7萬餘人）','109.7萬人新聞未載明統計截止日']},
    decision_points:[DP_COUNT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'和家人好好聊聊：安寧療護是陪伴，不是放棄',
    update_date:'2026/11/20',
    intro:'安寧療護是在生命的最後一段路，由醫護、社工、心理師一起幫忙減輕病痛，也照顧家人的心情。衛福部114年的資料顯示，已經有109.7萬人在線上預先表達了安寧緩和療護的意願。越早說出自己的想法，家人在重要時刻就越不用猶豫。',
    sections:[
      {heading:'安寧照顧可以在哪裡？',format:'table',table:TABLE},
      {heading:'你可能誤會了',format:'bullets',items:[
        '安寧不是放棄，是讓病人少受苦、好好過每一天。',
        '不只有癌症病人可以接受安寧，很多重症末期病人都可以。',
        '不一定要住院，在家或在長照機構也能接受安寧照顧。'
      ]},
      {heading:'現在就可以做的事',format:'bullets',items:[
        '用健保卡或自然人憑證，上衛福部系統線上預立安寧意願。',
        '想更完整安排，可以和家人一起去醫院做「預立醫療照護諮商」。',
        '找個輕鬆的時間，跟家人聊聊自己希望被怎麼照顧。'
      ]}
    ],
    think_tank_view:'這個話題不容易開口，可以從看一部電影、聊聊親友的經驗開始。把想法說出來，是送給家人最溫柔的禮物。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家人對話的角度切入。', tone:'生活親切', tone_reason:'議題敏感，語氣需溫和。', to_verify:['109.7萬人的統計截止日']},
    decision_points:[DP_COUNT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'安寧緩和療護：4種照護方式與預立意願',
    update_date:'2026/11/20',
    intro:'預立安寧緩和意願線上簽署已達109.7萬人（衛福部114年）。安寧不是放棄，而是以舒適與尊嚴為目標的照護。',
    sections:[
      {heading:'照護方式',format:'table',table:TABLE},
      {heading:'常見誤解',format:'bullets',items:[
        '不是放棄治療，是症狀控制與心理支持。',
        '不限癌症，在家也能接受。'
      ]},
      {heading:'預立意願',format:'bullets',items:[
        '健保卡或自然人憑證線上預立。',
        '與家人討論，讓意願被看見。'
      ]}
    ],
    think_tank_view:'把選擇權留在自己手上：及早預立意願、及早和家人溝通。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為照護方式、誤解、預立意願三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['109.7萬人的統計截止日']},
    decision_points:[DP_COUNT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'安寧緩和療護', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'安寧是陪伴，不是放棄', primary_visual:'109.7 萬人', secondary_message:'在家、病房、機構都能接受', action_priority:'及早預立意願'},
    headline_hook:'安寧不是放棄', headline_main:'為自己預作準備的 4 件事', title_accent:'4 件事',
    hero_message:'109.7 萬人已預立', hero_support:'安寧緩和療護意願線上簽署（衛福部 114 年）',
    primary_stat:{value:'109.7 萬人', label:'預立安寧緩和意願', note:'衛福部 114 年世界安寧日新聞'},
    action_title:'現在就可以做',
    action_cards:[
      {key:'談', text:'趁健康時和家人聊照護意願'},
      {key:'簽', text:'健保卡或自然人憑證線上預立'},
      {key:'諮', text:'到醫院做預立醫療照護諮商'},
      {key:'選', text:'了解住院、居家、機構安寧'}
    ],
    notice:'安寧照護範圍已擴大到**多種重症末期**病人，不只癌症。',
    carousel_suggestion:{reason:'若想把觀念、照護方式與預立流程分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'安寧不是放棄', headline_main:'3 個常見誤解'},
      {layout_type:'knowledge', headline_hook:'照護方式', headline_main:'住院、共照、居家、機構'},
      {layout_type:'action', headline_hook:'預立意願', headline_main:'現在就能做的 4 件事'}]},
    hashtags:['安寧緩和療護','善終','預立醫療','病人自主'],
    sources:['衛生福利部'],
    illustration_category:'elderly-care',
    illustration:{topic:'安寧緩和療護', audience:'熟齡與家人', scene:'一家人圍坐在客廳沙發，長者握著家人的手輕鬆聊天',
      emotion:'溫暖、平靜', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A family sitting together on a living room sofa, an older adult holding a family member hand while talking calmly, warm and peaceful mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：預立安寧緩和意願109.7萬人（衛福部114年）','照護方式取自衛福部健保安寧說明'],
      layout_reason:'核心是「及早表達意願」，選 action：4 個準備行動當主角，簽署人數放在 Hero 當社會共識的背景。',
      tone:'專業易懂', tone_reason:'議題敏感，語氣溫和不說教。',
      to_verify:['109.7萬人的統計截止日']},
    decision_points:[Object.assign({}, DP_COUNT, {current:'109.7 萬人｜預立安寧緩和意願（衛福部 114 年）'})],
    content_check_note:'簽署人數引自衛福部114年新聞，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'安寧緩和療護',
    collect:{
      summary:'預立安寧緩和意願線上簽署已達109.7萬人，臺灣安寧緩和醫療在2025年國際評比名列世界第3；健保安寧收案對象持續擴大，並可在住院、居家與長照機構接受照護，善終與預立醫療是高齡社會的重要溝通議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'109.7萬人已預立安寧緩和意願：衛福部114年世界安寧日新聞指出，預立安寧緩和療護意願線上簽署人數達109.7萬人，並新增以健保卡預立的管道。',tag:'官方統計',source:{name:'衛生福利部：預立安寧緩和意願達109.7萬人',url:'https://www.mohw.gov.tw/cp-16-84258-1.html'}},
        {item:'年度趨勢方向',desc:'世界第3名：2025年《全球安寧緩和醫療地圖》評估6個面向、14項指標，臺灣名列世界第3、亞洲第1，2015年為世界第6。',tag:'官方統計',source:{name:'衛生福利部：預立安寧緩和意願達109.7萬人',url:'https://www.mohw.gov.tw/cp-16-84258-1.html'}},
        {item:'政策動向',desc:'約700人受惠：健保111年放寬安寧療護收案對象，推估約700人受惠，並將住宿式長照機構納入安寧居家療護服務場域。',tag:'官方統計',source:{name:'衛生福利部：健保擴大安寧療護收案對象',url:'https://www.mohw.gov.tw/cp-5266-67794-1.html'}},
        {item:'好發族群年齡層',desc:'5.7萬餘人接受安寧照護：衛福部109年資料指出，接受安寧照護人數至108年底已攀升至5萬7千餘人，較102年增加超過2.2倍。',tag:'官方統計',source:{name:'衛生福利部：安寧緩和醫療條例20週年推廣有成',url:'https://mohw.gov.tw/cp-4625-56496-1.html'}}
      ],
      product_view:['機會：安寧與預立醫療可連結保戶家庭的照護規劃、長照與醫療保障說明。','機會：提供預立意願線上簽署與預立醫療照護諮商的資訊服務，建立品牌溫度。','風險：議題敏感，避免把善終與商品銷售直接連結，也不得暗示保險給付條件與安寧選擇有關。'],
      marketing_view:['機會：每年10月第2個星期六世界安寧日是固定溝通檔期。','機會：以「和家人好好聊聊」的情感角度切入，容易引發共鳴。','風險：避免「放棄治療」等負面字眼，用語需尊重病人與家屬。'],
      alert_level:'low',
      alert_reason:'屬長期議題，無急迫時效事件；適合在10月世界安寧日前後溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國內預立安寧緩和療護意願的線上簽署人數已達109.7萬人','DATA_FACTUAL_ACCURACY','stat_as_of_date',
          '新聞未載明統計截止日，文中也只寫「114年世界安寧日新聞」，讀者不清楚是何時的累計數。','low','yes',
          '109.7萬人的統計截止日期。','yes','confirm','新聞稿未寫截止日。',
          '國內預立安寧緩和療護意願的線上簽署人數，至114年10月已達109.7萬人（衛福部）'),
        F('臺灣在2025年《全球安寧緩和醫療地圖》評比中名列世界第3、亞洲第1','SOURCE_EVIDENCE','secondary_citation',
          '國際評比由西班牙那瓦拉大學ATLANTES觀察站發布，文中未寫出原始發布機構，屬衛福部轉述。','low','no',
          null,'no','clarify','屬出處補充。',
          '臺灣在西班牙那瓦拉大學ATLANTES觀察站2025年《全球安寧緩和醫療地圖》評比中名列世界第3、亞洲第1'),
        F('之後陸續擴大至多種重症末期病人，111年再放寬收案對象','DATA_FACTUAL_ACCURACY','vague_term',
          '「多種重症末期病人」未列出類別，讀者無法判斷自己或家人是否符合收案條件。','low','no',
          null,'no','clarify','收案條件依健保署規定。',
          '之後陸續擴大至失智、器官衰竭等多種重症末期病人（詳細條件以健保署公告為準），111年再放寬收案對象'),
        F('安寧不是放棄，是讓病人少受苦、好好過每一天','TERMINOLOGY_LANGUAGE','tone_assurance',
          '「少受苦」語意正向，但未說明安寧仍有症狀無法完全緩解的情形，可能形成過高期待。','low','no',
          null,'no','clarify','屬表達方式。',
          '安寧不是放棄，是盡量減輕病痛、陪病人好好過每一天')
      ],
      card:[
        F('109.7 萬人已預立','DATA_FACTUAL_ACCURACY','scope_mismatch',
          '109.7萬人為「線上簽署」累計數，卡面未說明是累計值與簽署管道，讀者可能誤以為是年度人數。','low','no',
          null,'no','clarify','屬口徑說明。',
          '累計 109.7 萬人已預立'),
        F('安寧照護範圍已擴大到**多種重症末期**病人，不只癌症。','REGULATORY_COMPLIANCE','coverage_condition',
          '健保安寧收案有末期判定條件，卡面未提醒需經醫師評估。','low','no',
          null,'no','clarify','屬給付條件說明。',
          '經醫師評估符合末期條件者，**多種重症末期**病人都可接受安寧照護。')
      ]
    },
    title_alts:[
      '安寧緩和療護不是放棄：認識4種照護方式與預立意願',
      '和家人好好聊聊：安寧療護是陪伴，不是放棄',
      '109.7萬人已預立意願：安寧緩和療護與善終準備一次看'
    ],
    card_title_alts:[
      ['安寧不是放棄','為自己預作準備的 4 件事'],
      ['和家人好好聊聊','預立意願 4 步驟'],
      ['109.7 萬人已預立','你準備好了嗎？']
    ],
    data_addon:[
      '社區安寧療護自103年起納入健保給付。',
      '2015年臺灣安寧緩和醫療評比為世界第6名、亞洲第1名，2021年起為世界第3名。',
      '病人自主權利法自108年1月6日施行，提供預立醫療照護諮商與預立醫療決定。'
    ],
    cta:'這個月找一個輕鬆的家庭時間，和家人聊聊彼此希望被照顧的方式，並用健保卡上網完成預立安寧緩和意願。'
  });
})();
