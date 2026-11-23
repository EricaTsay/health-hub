/* v6 示範主題：含糖飲料（B9 飲食營養與運動）
   查證日期：2026-11-20。數據來源：國健署107-06-25新聞稿（103-106年國民營養健康狀況變遷調查含糖飲料頻率、107年國民飲食指標添加糖上限、減糖3技巧）、國健署105-07-22新聞稿（手搖飲與碳酸飲料糖含量、飲料標示規定）。
   注意：2026-11-22查核國健署《國民營養健康狀況變遷調查成果報告2017-2020年》全文（第三章第三節六大類食物、第九節飲食習慣），未納入含糖飲料飲用頻率指標；國健署最新公開的此項統計為103-106年調查，文中已寫明。
   參考方向：健康智庫〈含糖危機：喝了這杯甜，代謝多負擔！〉2025/06。 */
(function(){
  const REFS = [
    {title:'糖飲消暑？ 越喝越渴且熱量趁機上身 國健署推出減糖3技巧助民眾清涼一夏',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-3795-42064-1.html'},
    {title:'消暑一夏多喝水 遠離甜飲增健康 全糖手搖飲 糖含量超過每日上限1倍',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/fp-16-18989-1.html'},
    {title:'國民營養健康調查',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/List.aspx?nodeid=3998'}
  ];
  const TABLE = {headers:['飲品','糖含量'], rows:[
    ['每日添加糖上限（以2000大卡計）','50公克，約10顆方糖'],
    ['連鎖店大杯全糖紅茶（650-700毫升）','約40-54公克'],
    ['碳酸飲料1罐（330毫升）','35公克'],
    ['原味鮮乳、無糖茶、白開水','無添加糖']
  ]};
  const TAGS = ['含糖飲料','減糖','手搖飲','營養標示','飲食營養'];

  const DP_YEAR = {id:'dp-ssb-year', type:'data_version', title:'含糖飲料頻率的最新公開統計為103-106年',
    desc:'國健署2017-2020年國民營養健康狀況變遷調查成果報告未納入含糖飲料飲用頻率指標，目前最新公開的是103-106年調查（國健署107年新聞稿）。AI 沒有用推估值替代。',
    current:'103-106年調查：19-64歲成人74.7%每週至少喝1次含糖飲料',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'改成較保守寫法', action:'replace', from:'74.7%的19-64歲成人', to:'約7成5的19-64歲成人'}]};

  const PRO = {
    content_type:'健康文章',
    title:'一杯全糖手搖飲就快超標：每日添加糖上限50克怎麼算',
    update_date:'2026/11/20',
    intro:'國民健康署107年發布的國民飲食指標建議，每日添加糖攝取量不宜超過總熱量的10%；以每日2000大卡計算，約50公克糖、相當於10顆方糖。國健署最新公開的含糖飲料飲用頻率統計（103-106年國民營養健康狀況變遷調查）顯示，74.7%的19-64歲成人、94.8%的國中生每週至少喝1次含糖飲料，其中4成民眾每週喝7次以上。連鎖店一大杯全糖紅茶，糖量就可能達40至54公克。',
    sections:[
      {heading:'常見飲品的糖含量',format:'table',table:TABLE},
      {heading:'含糖飲料對健康的影響',format:'bullets',items:[
        '含糖飲料營養密度低，主要提供熱量而缺乏必需營養素。',
        '攝取過多糖可能造成肥胖、代謝異常與齲齒，並增加代謝症候群與心血管疾病風險。',
        '含糖飲料無法真正解渴，反而可能越喝越渴。'
      ]},
      {heading:'國健署減糖3技巧',format:'bullets',items:[
        '喝白開水最好：成人每日建議6-8杯水（每杯240毫升），分次小口喝。',
        '飲料聰明選：看營養標示選糖量低者，手搖飲選無糖或微糖並減少配料。',
        '原味乳好健康：原味乳的糖不是添加糖，每日建議1.5-2杯。'
      ]}
    ],
    think_tank_view:'減糖最難的不是知識，而是習慣：一天一杯手搖飲很難戒，但從「全糖」改「微糖」、從大杯改中杯，一年下來就能少掉可觀的糖。把無糖當成預設、把甜飲當成偶爾的享受，是最容易持續的做法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'添加糖上限引自國健署國民飲食指標，飲用頻率標明為國健署最新公開的103-106年調查，糖含量引自國健署新聞稿，未涉及特定飲料品牌。',
    ai_rationale:{basis:['添加糖不超過總熱量10%（國健署107年國民飲食指標）','含糖飲料飲用頻率取自103-106年國民營養健康狀況變遷調查'],
      layout_reason:'先用表格對照每日上限與常見飲品糖量，再說明健康影響，最後給國健署減糖技巧。',
      tone:'專業易懂', tone_reason:'需要具體公克數讓讀者自行換算。',
      to_verify:[]},
    decision_points:[DP_YEAR]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'下午茶一杯全糖奶茶？你的糖可能已經爆表',
    update_date:'2026/11/20',
    intro:'國健署建議，一天的添加糖最好不要超過50公克（以每天吃2000大卡來算），大約是10顆方糖。但一杯大杯全糖紅茶就可能有40到54公克糖，一杯就快用完一天的額度。國健署最新公開的調查（103-106年）也發現，74.7%的19-64歲成人每週至少喝1次含糖飲料。',
    sections:[
      {heading:'這些飲料有多少糖？',format:'table',table:TABLE},
      {heading:'喝太甜會怎樣？',format:'bullets',items:[
        '甜飲料熱量高，但幾乎沒有營養。',
        '喝多了容易變胖、蛀牙，也和代謝症候群、心血管疾病有關。',
        '而且越喝越渴，不如一杯白開水。'
      ]},
      {heading:'減糖小撇步',format:'bullets',items:[
        '多喝白開水，大人一天6到8杯。',
        '買飲料先看標示，選無糖或微糖、少加配料。',
        '想喝點有味道的，可以選原味鮮乳。'
      ]}
    ],
    think_tank_view:'不用一下子戒掉手搖飲，先從「全糖改微糖、大杯改中杯」開始，身體和荷包都會感謝你。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明調查年份，未涉及特定飲料品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以下午茶手搖飲情境切入。', tone:'生活親切', tone_reason:'給上班族與年輕讀者。', to_verify:[]},
    decision_points:[DP_YEAR]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'含糖飲料：每日添加糖上限50克',
    update_date:'2026/11/20',
    intro:'添加糖不宜超過總熱量10%（2000大卡約50公克）。大杯全糖紅茶約40-54公克糖。',
    sections:[
      {heading:'糖含量對照',format:'table',table:TABLE},
      {heading:'健康影響',format:'bullets',items:[
        '肥胖、代謝異常、齲齒。',
        '增加代謝症候群與心血管疾病風險。'
      ]},
      {heading:'減糖3技巧',format:'bullets',items:[
        '喝白開水。',
        '看標示選無糖或微糖。',
        '選原味乳。'
      ]}
    ],
    think_tank_view:'把無糖當預設、甜飲當偶爾，是最容易持續的減糖方式。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署，未涉及特定飲料品牌。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為對照、影響、技巧三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'含糖飲料', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'一杯全糖手搖飲就快達每日上限', primary_visual:'50 公克', secondary_message:'每日添加糖不超過總熱量 10%', action_priority:'喝水、選無糖、看標示'},
    headline_hook:'一杯就快超標', headline_main:'常見飲料含糖量一次看', title_accent:'含糖量',
    hero_message:'每日上限約 50 公克', hero_support:'添加糖不超過總熱量 10%（以 2000 大卡計，國健署）',
    knowledge_title:'這些飲料有多少糖', knowledge_note:'選**無糖或微糖**，少加配料',
    knowledge_cards:[
      {label:'每日上限', icon:'glucose', lines:['約 50 公克','約 10 顆方糖']},
      {label:'大杯全糖紅茶', icon:'flask', lines:['約 40–54 公克','650–700 毫升']},
      {label:'碳酸飲料 1 罐', icon:'flask', lines:['35 公克','330 毫升']},
      {label:'原味鮮乳', icon:'leaf', lines:['無添加糖','每日 1.5–2 杯']}
    ],
    action_title:'減糖這樣做',
    action_cards:[
      {key:'水', text:'成人每日 6–8 杯白開水'},
      {key:'看', text:'買飲料先看營養標示的糖量'},
      {key:'選', text:'手搖飲選無糖或微糖、少配料'},
      {key:'乳', text:'想喝有味道的，選原味乳'}
    ],
    carousel_suggestion:{reason:'若想把糖量對照、健康影響與減糖技巧分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'一杯就快超標', headline_main:'常見飲料含糖量'},
      {layout_type:'data', headline_hook:'每週都在喝', headline_main:'7 成以上成人每週喝甜飲'},
      {layout_type:'action', headline_hook:'減糖 3 技巧', headline_main:'喝水、聰明選、原味乳'}]},
    hashtags:['含糖飲料','減糖','手搖飲','營養標示'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'減糖飲食', audience:'上班族與年輕族群', scene:'一位上班族在飲料店前看菜單，手指著「無糖」選項，旁邊放著水壺',
      emotion:'輕鬆、自主', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker at a drinks stand pointing at the sugar-free option on the menu, a reusable water bottle beside them, relaxed and in control, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['添加糖上限取自國健署107年國民飲食指標','飲品糖含量取自國健署新聞稿'],
      layout_reason:'核心是讓讀者對照糖量，選 knowledge：每日上限與常見飲品糖量並列，最後給 4 個減糖行動。',
      tone:'專業易懂', tone_reason:'具體公克數最有說服力。',
      to_verify:['大杯全糖紅茶糖量出自105年新聞稿']},
    decision_points:[],
    content_check_note:'糖量與建議引自國健署，未涉及特定飲料品牌。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'含糖飲料',
    collect:{
      summary:'國健署建議每日添加糖不超過總熱量10%（2000大卡約50公克），但一大杯全糖手搖飲就可能有40至54公克糖；國健署最新公開的103-106年調查顯示7成以上成人、9成以上中小學生每週至少喝1次含糖飲料。減糖是肥胖、代謝症候群與齲齒預防的共同議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'74.7%的19-64歲成人：國健署最新公開的含糖飲料飲用頻率統計（103-106年國民營養健康狀況變遷調查）顯示，74.7%的19-64歲成人、94.8%國中生、90.9%高中生每週至少喝1次含糖飲料，其中4成民眾每週喝7次以上。',tag:'官方統計',source:{name:'國健署：糖飲消暑？越喝越渴且熱量趁機上身',url:'https://www.mohw.gov.tw/cp-3795-42064-1.html'}},
        {item:'政策動向',desc:'不超過總熱量10%：國健署107年新版國民飲食指標首次增列「每日添加糖攝取量不宜超過總熱量的10%」，以每日2000大卡計約50公克糖。',tag:'官方統計',source:{name:'國健署：糖飲消暑？越喝越渴且熱量趁機上身',url:'https://www.mohw.gov.tw/cp-3795-42064-1.html'}},
        {item:'年度趨勢方向',desc:'超過每日上限1倍：依連鎖飲料現場調製飲料標示規定，104年7月31日起須標示全糖添加量，連鎖店大杯全糖紅茶（約650-700毫升）糖量可能達40-54公克。',tag:'官方統計',source:{name:'國健署：全糖手搖飲 糖含量超過每日上限1倍',url:'https://www.mohw.gov.tw/fp-16-18989-1.html'}},
        {item:'好發族群年齡層',desc:'94.8%國中生：學童與青少年每週至少喝1次含糖飲料的比例最高（國小91.7%、國中94.8%、高中90.9%），65歲以上長者為40.5%。',tag:'官方統計',source:{name:'國健署：糖飲消暑？越喝越渴且熱量趁機上身',url:'https://www.mohw.gov.tw/cp-3795-42064-1.html'}}
      ],
      product_view:['機會：含糖飲料與肥胖、糖尿病、代謝症候群相關，可連結慢性病預防的健康管理服務。','機會：「減糖挑戰」可作為保戶健康促進活動。','風險：避免點名特定飲料品牌；不宜將單一飲品與疾病劃上因果等號。'],
      marketing_view:['機會：夏季消暑、手搖飲文化是年輕族群高度共鳴的話題。','機會：「一杯就快超標」的糖量對照容易轉為圖卡或互動測驗。','風險：「每週至少1次」是頻率不是飲用量，對外引用需說明口徑與調查期間。'],
      alert_level:'low',
      alert_reason:'屬長期飲食習慣議題；夏季為溝通高峰，可配合消暑主題。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('其中4成民眾每週喝7次以上','DATA_FACTUAL_ACCURACY','denominator_unclear',
          '「4成」未說明分母是全體受訪者還是每週有喝含糖飲料的人，兩者意義差很多。','low','yes',
          '國健署107年新聞稿中「4成民眾每週至少喝7次」的計算分母。','no','confirm','原新聞稿未說明分母。',
          '其中約4成民眾（依國健署新聞稿）每週喝7次以上'),
        F('連鎖店一大杯全糖紅茶，糖量就可能達40至54公克','SOURCE_EVIDENCE','dated_example',
          '糖量範例出自國健署105年新聞稿，業者配方與杯量可能已調整；文中未標示資料年份。','low','no',
          null,'no','clarify','屬範例年份標示。',
          '依國健署105年資料，連鎖店一大杯全糖紅茶糖量可能達40至54公克',
          ['一杯大杯全糖紅茶就可能有40到54公克糖','大杯全糖紅茶約40-54公克糖']),
        F('攝取過多糖可能造成肥胖、代謝異常與齲齒，並增加代謝症候群與心血管疾病風險','MEDICAL_INTERPRETATION','causal_language',
          '「造成」與「增加風險」並列，前者屬因果語氣；肥胖與代謝異常是多因素結果，宜統一為「與…相關」或「可能增加風險」。','low','no',
          null,'no','clarify','屬因果用語強度。',
          '攝取過多糖與肥胖、代謝異常、齲齒相關，並可能增加代謝症候群與心血管疾病風險',
          ['喝多了容易變胖、蛀牙，也和代謝症候群、心血管疾病有關'])
      ],
      card:[
        F('每日上限約 50 公克','DATA_FACTUAL_ACCURACY','assumption_unstated',
          '50 公克是以每日 2000 大卡計算；熱量需求較低的人（如多數女性、長者）上限更低，主標未說明前提。','low','no',
          null,'no','clarify','副標已註明 2000 大卡，屬呈現位置問題。',
          '每日上限約 50 公克（2000 大卡）'),
        F('約 40–54 公克','SOURCE_EVIDENCE','dated_example',
          '大杯全糖紅茶糖量引自 105 年資料，卡面未標示年份。','low','no',
          null,'no','clarify','屬範例年份標示。',
          '約 40–54 公克（105 年資料）')
      ]
    },
    title_alts:[
      '一杯全糖手搖飲就快超標：每日添加糖上限50克怎麼算',
      '下午茶一杯全糖奶茶？你的糖可能已經爆表',
      '7成以上成人每週喝甜飲：國健署減糖3技巧'
    ],
    card_title_alts:[
      ['一杯就快超標','常見飲料含糖量一次看'],
      ['每日添加糖上限','約 50 公克、10 顆方糖'],
      ['減糖 3 技巧','喝水、聰明選、原味乳']
    ],
    data_addon:[
      '世界衛生組織建議游離糖低於總熱量10%，並鼓勵進一步降至5%（國健署105年新聞稿引述）。',
      '包裝食品自104年7月1日起營養標示須列糖含量。',
      '原味乳的乳糖不屬添加糖，國健署建議每日1.5-2杯。'
    ],
    cta:'下次點手搖飲時，先試著從全糖改成微糖、大杯改成中杯，連續兩週看看。'
  });
})();
