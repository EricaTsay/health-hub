/* v6 示範主題：微創與機器手臂手術（達文西）（B12 第三輪新主題）
   查證日期：2026-11-23。數據來源：衛福部新聞稿〈「肝部分切除術」等17項達文西手術費納入健保給付，近千人受惠〉（111-12-28，健保署）。
   參考方向：判定清單第467、464、437、440、460列（達文西、機械手臂、各類微創手術文章）。只取架構，數據重新查證。
   自費金額：未找到官方公開的醫材收費範圍，文中不寫金額；113年起再擴增項目的說法只見醫療網站，未取得健保署原文，不寫。 */
(function(){
  const REFS = [
    {title:'「肝部分切除術」等17項達文西手術費納入健保給付，近千人受惠',source:'衛生福利部中央健康保險署',url:'https://mohw.gov.tw/cp-16-72990-1.html'},
    {title:'全民健康保險醫療服務給付項目及支付標準',source:'衛生福利部中央健康保險署',url:'https://www.nhi.gov.tw/'}
  ];
  const TABLE = {headers:['項目','健保怎麼處理','病人負擔'], rows:[
    ['手術費','列入健保項目的達文西手術，比照胸（腹）腔鏡手術申報','依一般部分負擔'],
    ['達文西相關醫材','未納入健保','自費，金額依院所收費公告'],
    ['未列入的術式','手術費與醫材都不在健保給付範圍','全額自費'],
    ['執行條件','醫師須經訓練並由特定學會認證；院所須回報術後資料','—']
  ]};
  const TAGS = ['達文西手術','機器手臂手術','微創手術','腹腔鏡','自費醫材'];

  const DP_ITEMS = {id:'dp-davinci-items', type:'time_sensitive', title:'17項為111年底決議的擴增批次',
    desc:'健保署111-12-28新聞稿表示17項達文西手術預計最快112年3月1日公告實施；之後是否再擴增，需以健保署最新支付標準為準。AI 沿用新聞稿並標註日期。',
    current:'17項達文西手術費比照胸（腹）腔鏡申報（111-12-28決議）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'17項', value:'111年底擴增', note:'健保署111-12-28新聞稿（目前採用）'},
      {label:'最新項目數', value:'待查', note:'以健保署現行支付標準為準'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'達文西手術健保有給付嗎？微創與機器手臂手術的自費界線',
    update_date:'2026/11/23',
    intro:'微創手術用幾個小切口放入內視鏡與器械完成手術，機器手臂（如達文西系統）則由醫師操控機械臂進行，提供放大的立體影像與較靈活的器械角度。健保自106年1月起陸續將部分達文西手術的手術費納入給付；111年12月共同擬訂會議再通過肝部分切除術等17項，手術費比照胸（腹）腔鏡項目申報，但達文西相關醫材仍須自費。',
    sections:[
      {heading:'健保與自費怎麼分',format:'table',table:TABLE},
      {heading:'優點與限制',format:'bullets',items:[
        '優點：傷口較小，有助於術後疼痛控制與恢復；在骨盆腔等狹窄部位操作較靈活。',
        '限制：醫材自費、手術準備時間可能較長；機器手臂是工具，手術結果仍取決於病情與醫療團隊。',
        '不是每位病人都適合，過去腹部手術造成的沾黏、體能狀況等都需評估。'
      ]},
      {heading:'手術前可以問',format:'bullets',items:[
        '這項術式是否在健保給付項目內？手術費與醫材各怎麼收費？',
        '傳統手術、腹腔鏡與機器手臂手術，對我的病情各有什麼利弊？',
        '自費醫材的明細與收據要保留，方便對照實支實付等保單條款。'
      ]}
    ],
    think_tank_view:'機器手臂讓微創手術多了一種工具，但「較新」不等於「較適合每個人」。手術方式應由醫師依病情建議，病人則要在手術前弄清楚哪些是健保、哪些自費，避免術後才面對帳單。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'給付範圍引自健保署111-12-28新聞稿並標明日期，未寫無官方依據的自費金額，未使用療效保證用語，未推薦特定醫院或廠牌（達文西為系統名稱，僅作說明）。',
    ai_rationale:{basis:['106年1月、109年12月前例與17項擴增取自健保署111-12-28新聞稿','醫師認證與術後資料回報規定取自同一新聞稿'],
      layout_reason:'先用表格把健保與自費分清楚，再談優缺點，最後列手術前可問的問題。',
      tone:'專業易懂', tone_reason:'自費醫材議題需要精確、中性。',
      to_verify:['17項的實際公告實施日期','之後是否再擴增項目']},
    decision_points:[DP_ITEMS]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'醫師問要不要做達文西？3個問題先問清楚',
    update_date:'2026/11/23',
    intro:'開刀前，醫師可能問你：要傳統手術、腹腔鏡，還是達文西機器手臂？機器手臂是醫師坐在操作台控制的精細工具，傷口比較小。健保已經把部分達文西手術的「手術費」納入給付，像111年底就再通過17項，不過機器手臂用的醫材還是要自己付。',
    sections:[
      {heading:'哪些健保付、哪些自己付？',format:'table',table:TABLE},
      {heading:'好處和要注意的地方',format:'bullets',items:[
        '傷口小，通常比較好照顧。',
        '醫材要自費，花費比傳統手術高。',
        '機器是工具，手術做得好不好還是看病情和醫療團隊。'
      ]},
      {heading:'開刀前問3件事',format:'bullets',items:[
        '我的手術健保有給付手術費嗎？',
        '醫材要自費多少？可以給我明細嗎？',
        '我的保單能不能理賠？收據記得留好。'
      ]}
    ],
    think_tank_view:'機器手臂不是越先進越好，適不適合要聽醫師評估。費用先問清楚、收據留好，術後申請理賠也比較順。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'給付資訊引自健保署並標明日期，未寫自費金額，未使用療效保證用語，未推薦特定醫院。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從開刀前的選擇題帶出給付界線與提問清單。', tone:'生活親切', tone_reason:'給病人與家屬閱讀。', to_verify:['17項的實際公告實施日期']},
    decision_points:[DP_ITEMS]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'達文西手術：健保與自費界線',
    update_date:'2026/11/23',
    intro:'111年12月健保再通過17項達文西手術費比照腔鏡申報，相關醫材仍自費。',
    sections:[
      {heading:'給付界線',format:'table',table:TABLE},
      {heading:'重點',format:'bullets',items:[
        '傷口小，但醫材自費。',
        '是否適合由醫師依病情評估。'
      ]},
      {heading:'術前',format:'bullets',items:[
        '確認術式是否在給付項目內。',
        '索取醫材明細並保留收據。'
      ]}
    ],
    think_tank_view:'工具較新不等於人人適合；先問清楚費用，再做決定。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'給付資訊引自健保署並標明日期，未使用療效保證用語，未推薦特定醫院。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為給付界線、重點、術前三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['17項的實際公告實施日期']},
    decision_points:[DP_ITEMS]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'微創與機器手臂手術（達文西）', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'達文西手術費部分健保給付，醫材自費', primary_visual:'17 項', secondary_message:'手術方式依病情評估', action_priority:'術前問清楚給付與自費'},
    headline_hook:'要不要做達文西？', headline_main:'3 種手術方式先看懂', title_accent:'先看懂',
    hero_message:'再增 17 項', hero_support:'達文西手術費比照腔鏡給付（健保署 111.12）',
    knowledge_title:'3 種手術方式', knowledge_note:'機器手臂醫材**多為自費**，術前先問清楚',
    knowledge_cards:[
      {label:'傳統開刀', icon:'report', lines:['較大切口直接操作','依健保支付標準給付']},
      {label:'腹腔鏡微創', icon:'search', lines:['數個小切口放入器械','依健保支付標準給付']},
      {label:'機器手臂', icon:'check', lines:['醫師操控機械臂','部分術式手術費給付']}
    ],
    primary_stat:{value:'17 項', label:'111 年底新增給付手術費', note:'健保署 111-12-28｜比照胸（腹）腔鏡申報'},
    secondary_stats:[
      {value:'自費', label:'達文西相關醫材'},
      {value:'2 個月內', label:'院所須回報術後資料'}
    ],
    action_title:'手術前先問',
    action_cards:[
      {key:'給', text:'這項術式健保有給付手術費嗎'},
      {key:'比', text:'傳統、腹腔鏡、機器手臂的利弊'},
      {key:'費', text:'索取自費醫材明細與估價'},
      {key:'留', text:'保留收據，對照保單理賠條件'}
    ],
    carousel_suggestion:{reason:'若想把手術方式、給付與理賠分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'3 種手術方式', headline_main:'差在切口與操作'},
      {layout_type:'data', headline_hook:'健保給付', headline_main:'再增 17 項手術費'},
      {layout_type:'action', headline_hook:'開刀前', headline_main:'先問這 4 件事'}]},
    hashtags:['達文西手術','微創手術','機器手臂','自費醫材'],
    sources:['衛生福利部中央健康保險署'],
    illustration_category:'general',
    illustration:{topic:'手術方式諮詢', audience:'準備手術的病人與家屬', scene:'外科醫師在診間用平板向病人與家屬說明不同手術方式與費用',
      emotion:'理性、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A surgeon using a tablet to explain different surgical options and costs to a patient and family member in a clinic, rational and reassured mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['17項、比照腔鏡申報、醫材自費、2個月內回報取自健保署111-12-28新聞稿'],
      layout_reason:'選 knowledge：病人最需要先分辨 3 種手術方式與給付差異，數字退到下方，最後給術前 4 個提問。',
      tone:'專業易懂', tone_reason:'自費醫材資訊需要中性、具體。',
      to_verify:['17項的實際公告實施日期']},
    decision_points:[Object.assign({}, DP_ITEMS, {current:'17 項｜111 年底新增（實施日以公告為準）'})],
    content_check_note:'給付資訊引自健保署並標明日期，未寫自費金額，未使用療效保證用語，未推薦特定醫院。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'微創與機器手臂手術（達文西）',
    collect:{
      summary:'微創與機器手臂手術傷口較小，近年使用增加。健保自106年起陸續將部分達文西手術的手術費納入給付，111年底再通過17項比照腔鏡申報，但機器手臂相關醫材仍自費，是實支實付理賠與自費差額最常被詢問的項目之一。',
      objective_data:[
        {item:'政策動向',desc:'17項達文西手術費比照腔鏡申報：111年12月22日健保共同擬訂會議通過肝部分切除術等17項，預計最快112年3月1日公告實施，推估近千人受惠，病人僅需負擔達文西相關醫材費用。',tag:'官方統計',source:{name:'衛生福利部：17項達文西手術費納入健保給付',url:'https://mohw.gov.tw/cp-16-72990-1.html'}},
        {item:'年度趨勢方向',desc:'106年1月起首項給付：前列腺切除術手術費自106年1月起、部分腎切除術自109年12月起，比照腹腔鏡項目申報。',tag:'官方統計',source:{name:'衛生福利部：17項達文西手術費納入健保給付',url:'https://mohw.gov.tw/cp-16-72990-1.html'}},
        {item:'好發族群年齡層',desc:'2個月內回報術後資料：健保要求執行醫師須經訓練並由特定學會認證，院所須於申報後2個月內上傳術後14天內是否發生不良事件、術中出血量等資料。',tag:'官方統計',source:{name:'衛生福利部：17項達文西手術費納入健保給付',url:'https://mohw.gov.tw/cp-16-72990-1.html'}}
      ],
      product_view:['機會：達文西醫材自費是實支實付最常見的理賠情境之一，可說明「手術費健保、醫材自費」的分界與收據保存。','機會：可提醒保戶確認保單對自費醫材的限額與條件。','風險：不可暗示機器手臂手術效果較好，或保證特定商品可全額理賠。'],
      marketing_view:['機會：「達文西健保有給付嗎」是常見疑問，適合問答式內容。','機會：可與攝護腺癌、子宮肌瘤、大腸直腸癌等手術主題串連。','風險：不可推薦特定醫院、醫師或設備廠牌。'],
      alert_level:'medium',
      alert_reason:'健保給付術式可能持續擴增，院所醫材收費也會調整，宜定期以健保署支付標準更新。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('手術費比照胸（腹）腔鏡項目申報，但達文西相關醫材仍須自費','DATA_FACTUAL_ACCURACY','time_reference_missing',
          '新聞稿寫的是「預計最快112年3月1日公告實施」，文中未交代實施時間，讀者無法判斷何時起適用。','medium','yes',
          '健保署17項達文西手術的實際公告實施日','no','clarify','需以健保署公告確認實施日。',
          '手術費比照胸（腹）腔鏡項目申報（預計最快112年3月1日實施，以健保署公告為準），但達文西相關醫材仍須自費'),
        F('傷口較小，有助於術後疼痛控制與恢復','MEDICAL_INTERPRETATION','benefit_without_source',
          '恢復效益未附出處，且因術式與病人而異，宜改為較保守的描述或補文獻。','low','yes',
          '機器手臂手術與傳統手術的術後恢復比較文獻','no','clarify','屬一般描述，缺出處。',
          '傷口較小，部分病人術後恢復較快，實際情況因術式與病情而異'),
        F('機器手臂是醫師坐在操作台控制的精細工具，傷口比較小','MEDICAL_INTERPRETATION','benefit_without_limitation',
          '只寫優點，同段未提醒醫材自費與不是每人都適合。','low','no',
          null,'no','clarify','限制在後段才出現。',
          '機器手臂是醫師坐在操作台控制的精細工具，傷口比較小，但不是每個人都適合')
      ],
      card:[
        F('部分術式手術費給付','LEGAL_COMPLIANCE','scope_condition_missing',
          '未說明醫材仍自費，卡片讀者可能以為機器手臂手術由健保全額給付。','medium','no',
          null,'no','clarify','卡面下方有註記，但卡片本身未寫。',
          '部分術式手術費給付，醫材自費'),
        F('達文西手術費比照腔鏡給付（健保署 111.12）','DATA_FACTUAL_ACCURACY','time_reference_missing',
          '111.12 是決議日期，不是實施日期，易讓讀者誤會生效時間。','low','no',
          null,'no','clarify','屬日期口徑。',
          '達文西手術費比照腔鏡給付（111.12 決議）')
      ]
    },
    title_alts:[
      '達文西手術健保有給付嗎？微創與機器手臂手術的自費界線',
      '醫師問要不要做達文西？3個問題先問清楚',
      '健保再增17項達文西手術費：醫材自費怎麼看'
    ],
    card_title_alts:[
      ['要不要做達文西？','3 種手術方式先看懂'],
      ['達文西手術','手術費給付、醫材自費'],
      ['開刀前','先問健保給付範圍']
    ],
    data_addon:[
      '17項的第1項為肝部分切除術，比照腹腔鏡肝部分切除術申報（健保署對照表）。',
      '健保署訂有執行醫師專科別限制。',
      '院所回報的資料包含術後14天內不良事件與術中出血量，作為後續追蹤。'
    ],
    cta:'醫師建議機器手臂手術時，先確認術式是否在健保給付項目內、自費醫材明細與金額，並保留收據以便對照保單理賠。'
  });
})();
