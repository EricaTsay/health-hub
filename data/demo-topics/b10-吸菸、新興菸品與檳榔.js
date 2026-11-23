/* v6 示範主題：吸菸、新興菸品與檳榔（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-20。數據來源：國健署「國人吸菸行為調查結果」（113年）、衛福部2026-01-30與2026-08-03新聞稿（職場與家庭二手菸）、衛福部心理及口腔健康司「18歲以上人口嚼檳榔比率」開放資料（110年，最近六個月曾嚼食；2026-11-22由107年改用最新一期）、衛福部114年死因統計（口腔癌）、112年癌症登記報告。
   參考方向：健康智庫〈認識新興菸品，如何區分電子煙與加熱菸？〉2024/01、〈拒菸拒檳與健康更靠近！〉2022/11。 */
(function(){
  const REFS = [
    {title:'國人吸菸行為調查結果',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1718&pid=9913'},
    {title:'無菸尾牙 拒絕紙菸、電子煙與加熱菸（成人吸菸率12.8%、職場二手菸30.3%）',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-85294-1.html'},
    {title:'父親節戒菸 守護家人（家庭二手菸暴露率35.6%）',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-87308-1.html'},
    {title:'18歲以上人口嚼檳榔比率（110年）',source:'衛生福利部心理及口腔健康司（政府資料開放平臺）',url:'https://data.gov.tw/dataset/173036'},
    {title:'114年死因統計',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'},
    {title:'菸害防制法修正通過 全面禁止電子煙等類菸品',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=16551&sid=16790'},
    {title:'近3年調查 電子煙使用率約3倍成長~菸煙都有害 無助於戒菸',source:'衛生福利部',url:'https://www.mohw.gov.tw/fp-16-61822-1.html'},
    {title:'戒菸，打電話嘛ㄟ通',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1135&pid=2913'}
  ];
  const TABLE = {headers:['項目','113年調查（18歲以上）'], rows:[
    ['紙菸吸菸率','12.8%（97年為21.9%，降幅逾4成）'],
    ['電子煙使用率','1.0%（109年最高1.7%）'],
    ['加熱菸使用率','0.1%'],
    ['職場二手菸暴露率','30.3%（室內工作者）'],
    ['家庭二手菸暴露率','35.6%（111年為28.9%）']
  ]};
  const TAGS = ['戒菸','電子煙','加熱菸','檳榔','口腔癌'];

  const DP_BETEL = {id:'dp-betel-def', type:'data_scope', title:'嚼檳率的計算定義',
    desc:'110年資料以「最近六個月曾經嚼食」計算（偶爾應酬嚼食也算），早年新聞稿的成年男性嚼檳率定義可能不同，不宜直接比較升降趨勢，AI 沒有替你做跨年比較。',
    current:'110年18歲以上男性最近六個月曾嚼食檳榔6.6%',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'6.6%', value:'110年・男性・最近六個月曾嚼食', note:'衛福部心理及口腔健康司開放資料（目前採用）'},
      {label:'3.5%', value:'110年・全體18歲以上', note:'同一資料，女性為0.5%'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'吸菸率降到12.8%，二手菸卻變多：紙菸、新興菸品與檳榔一次看',
    update_date:'2026/11/23',
    intro:'依國民健康署113年國人吸菸行為調查，18歲以上成人吸菸率為12.8%，比97年的21.9%降幅超過4成；但家庭二手菸暴露率卻從111年的28.9%升到35.6%。修正後的《菸害防制法》已全面禁止電子煙等類菸品。檳榔則與口腔癌密切相關，114年口腔癌死亡3,697人，男性占九成以上。',
    sections:[
      {heading:'國人菸品使用現況',format:'table',table:TABLE},
      {heading:'新興菸品不是比較安全',format:'bullets',items:[
        '使用電子煙的原因以「好奇」最多（46.3%），其次是受朋友影響（14.8%）、身上不會有菸臭味（11.7%）。',
        '電子煙與加熱菸同樣含尼古丁或有害物質，國健署提醒無助於戒菸。',
        '修正後的《菸害防制法》全面禁止電子煙等類菸品的製造、輸入、販賣與使用。',
        '同一次修法（112年三讀）把禁止吸菸年齡由未滿18歲提高到未滿20歲；加熱菸等「指定菸品」須先通過健康風險評估審查，核定後才能製造、輸入或販售。'
      ]},
      {heading:'檳榔與口腔癌',format:'bullets',items:[
        '依110年調查，18歲以上男性最近六個月曾嚼食檳榔者為6.6%，以40-49歲男性10.7%最高。',
        '口腔癌為男性癌症死因第4位，114年男性口腔癌死亡3,363人。',
        '口腔癌發生年齡中位數為60歲，比全癌症的65歲早（112年癌症登記）。'
      ]},
      {heading:'想戒菸、戒檳可以這樣做',format:'bullets',items:[
        '撥打免付費戒菸專線0800-636363，由專業人員陪伴擬定戒菸計畫。',
        '到二代戒菸合約醫事機構，接受戒菸藥物與衛教服務。',
        '有吸菸或嚼檳榔習慣者，定期接受口腔黏膜檢查。'
      ]}
    ],
    think_tank_view:'吸菸率持續下降，但「看不見的菸」正在轉移：二手菸回到家裡，新興菸品以好奇和無菸味吸引人。對個人來說，戒菸永遠不嫌晚；對家庭來說，「家裡不抽菸」比任何空氣清淨機都有效。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'吸菸率、二手菸暴露率引自國健署113年調查，嚼檳率引自衛福部110年開放資料，口腔癌死亡引自衛福部114年死因統計，未涉及具體商品。',
    ai_rationale:{basis:['沿用步驟1洞察：113年成人吸菸率12.8%（國健署）','家庭二手菸暴露率35.6%（衛福部2026-08新聞稿）','口腔癌死亡取自114年死因統計'],
      layout_reason:'先用表格呈現各類菸品使用率，再分別說明新興菸品、檳榔與戒菸資源。',
      tone:'專業易懂', tone_reason:'議題涉及法規與數據，需要清楚分類。',
      to_verify:['110年嚼檳率定義為最近六個月曾嚼食，與早年數字不宜直接比較']},
    decision_points:[DP_BETEL]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'電子煙比較沒傷害？家人的二手菸、檳榔也要一起顧',
    update_date:'2026/11/23',
    intro:'好消息是，抽菸的人越來越少了：國健署113年調查，成年人吸菸率是12.8%，十幾年來少了4成多。但在家裡吸到二手菸的比例反而變高，從28.9%升到35.6%，等於每3個人就有1個在家裡被迫吸菸。也有人以為電子煙、加熱菸比較安全，其實一樣有害。',
    sections:[
      {heading:'先看看大家的抽菸習慣',format:'table',table:TABLE},
      {heading:'電子煙、加熱菸的迷思',format:'bullets',items:[
        '很多人是「好奇」才開始用電子煙（將近一半）。',
        '新興菸品一樣有尼古丁或有害物質，也不能幫你戒菸。',
        '電子煙在台灣已全面禁止。',
        '現在未滿20歲不能抽菸；加熱菸要先通過政府審查才能賣。'
      ]},
      {heading:'檳榔和口腔癌',format:'bullets',items:[
        '110年調查，成年男性最近半年有嚼檳榔的約6.6%，40多歲的男性最多（10.7%）。',
        '口腔癌每年奪走3千多位男性的生命（114年3,363人）。',
        '有嚼檳榔或抽菸，記得定期做口腔黏膜檢查。'
      ]},
      {heading:'想戒，有人幫你',format:'bullets',items:[
        '打免費戒菸專線0800-636363。',
        '找附近的戒菸門診或藥局。',
        '告訴家人你要戒，請他們一起支持。'
      ]}
    ],
    think_tank_view:'戒菸、戒檳不只是為了自己，也是給家人的禮物。從「家裡和車上不抽菸」開始，就能讓孩子和長輩少吸很多二手菸。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署與衛福部並標明年份，「每3個人就有1個」依35.6%換算，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家庭二手菸與新興菸品迷思切入。', tone:'生活親切', tone_reason:'給吸菸者家人與一般讀者。', to_verify:[]},
    decision_points:[DP_BETEL]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'菸、電子煙、檳榔：數據與戒除資源',
    update_date:'2026/11/23',
    intro:'113年成人吸菸率12.8%，家庭二手菸暴露率升至35.6%。114年口腔癌死亡3,697人。',
    sections:[
      {heading:'使用現況',format:'table',table:TABLE},
      {heading:'新興菸品',format:'bullets',items:[
        '電子煙已全面禁止。',
        '禁菸年齡提高至20歲；加熱菸須通過健康風險評估審查。',
        '新興菸品同樣有害，無助戒菸。'
      ]},
      {heading:'戒除資源',format:'bullets',items:[
        '戒菸專線0800-636363。',
        '二代戒菸合約醫事機構。',
        '定期口腔黏膜檢查。'
      ]}
    ],
    think_tank_view:'吸菸率下降，但家庭二手菸上升；戒菸並落實家中無菸，是保護家人最直接的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署與衛福部並標明年份，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為現況、新興菸品、戒除資源三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'吸菸、新興菸品與檳榔', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'成人吸菸率降到 12.8%', primary_visual:'12.8%', secondary_message:'家庭二手菸暴露率卻升到 35.6%', action_priority:'戒菸專線、家中無菸'},
    headline_hook:'吸菸率下降了', headline_main:'但家裡的二手菸變多了', title_accent:'二手菸變多了',
    primary_stat:{kicker:'113 年・18 歲以上', value:'12.8%', label:'成人吸菸率', note:'國健署國人吸菸行為調查｜97 年為 21.9%'},
    chart:{type:'bar', title:'18 歲以上成人吸菸率（%）', points:[
      {label:'2008', value:21.9, display:'21.9%'},
      {label:'2022', value:14.0, display:'14.0%'},
      {label:'2024', value:12.8, display:'12.8%', highlight:true}
    ], note:'國健署國人吸菸行為調查（標準化）'},
    secondary_stats:[
      {value:'35.6%', label:'家庭二手菸暴露率'},
      {value:'3,697 人', label:'114 年口腔癌死亡'}
    ],
    action_title:'戒菸戒檳這樣做',
    action_cards:[
      {key:'打', text:'撥打免費戒菸專線 0800-636363'},
      {key:'診', text:'到二代戒菸合約醫事機構求助'},
      {key:'家', text:'家裡和車上全面不抽菸'},
      {key:'檢', text:'菸檳習慣者定期口腔黏膜檢查'}
    ],
    carousel_suggestion:{reason:'若想把紙菸、新興菸品與檳榔分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'吸菸率下降了', headline_main:'但家裡的二手菸變多了'},
      {layout_type:'knowledge', headline_hook:'電子煙比較安全？', headline_main:'新興菸品 3 個迷思'},
      {layout_type:'action', headline_hook:'檳榔與口腔癌', headline_main:'戒檳、定期口腔檢查'}]},
    hashtags:['戒菸','電子煙','二手菸','檳榔','口腔癌'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'general',
    illustration:{topic:'戒菸與無菸家庭', audience:'吸菸者與家人', scene:'一位父親把菸盒丟進垃圾桶，孩子在旁邊開心地抱著他',
      emotion:'溫暖、有決心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A father throwing a cigarette pack into a bin while his child happily hugs him, warm and determined, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：113年成人吸菸率12.8%（國健署）','家庭二手菸暴露率35.6%（衛福部）'],
      layout_reason:'有清楚的長期下降趨勢與一個反向上升的指標，選 data：吸菸率當主角，二手菸與口腔癌放第二層，最後給戒菸戒檳行動。',
      tone:'專業易懂', tone_reason:'用數字對比引起注意，避免責備吸菸者。',
      to_verify:['直條圖年份間距不等（97、111、113年）']},
    decision_points:[],
    content_check_note:'吸菸率與二手菸暴露率引自國健署113年調查，口腔癌死亡引自衛福部114年死因統計，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'吸菸、新興菸品與檳榔',
    collect:{
      summary:'國人成人吸菸率已由97年21.9%降至113年12.8%，但家庭二手菸暴露率升至35.6%；電子煙已全面禁止，使用者多因好奇嘗試。檳榔與口腔癌密切相關，114年口腔癌死亡3,697人，為男性癌症死因第4位，戒菸戒檳與口腔黏膜檢查仍是重點溝通議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'12.8%：國健署113年國人吸菸行為調查，18歲以上成人吸菸率為12.8%，較97年21.9%降幅超過4成，與111年14.0%相比微降但未達統計顯著。',tag:'官方統計',source:{name:'國健署：國人吸菸行為調查結果',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1718&pid=9913'}},
        {item:'年度趨勢方向',desc:'35.6%：113年家庭二手菸暴露率為35.6%，較111年28.9%增加，職場二手菸暴露率為30.3%。',tag:'官方統計',source:{name:'衛福部：父親節戒菸 守護家人',url:'https://www.mohw.gov.tw/cp-16-87308-1.html'}},
        {item:'好發族群年齡層',desc:'1.0%：113年18歲以上電子煙使用率為1.0%（109年最高1.7%），以40-49歲男性1.8%、18-29歲女性1.1%最高，使用原因以「好奇」占46.3%最多。',tag:'官方統計',source:{name:'國健署：國人吸菸行為調查結果',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1718&pid=9913'}},
        {item:'政策動向',desc:'3697人死於口腔癌：衛福部114年死因統計口腔癌死亡3,697人，其中男性3,363人、居男性癌症死因第4位，口腔癌是嚼檳與吸菸相關的主要癌症之一。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}}
      ],
      product_view:['機會：吸菸與肺癌、心血管疾病、口腔癌等重大疾病相關，可連結重大疾病與癌症保障的必要性說明。','機會：戒菸專線、口腔黏膜檢查可作為保戶健康管理服務的轉介資源。','風險：避免暗示不吸菸者「保證」不會罹病；不得以吸菸與否做出未經核保規則支持的保費說法。'],
      marketing_view:['機會：5月31日世界無菸日、父親節、12月3日檳榔防制日是固定溝通檔期。','機會：「家裡二手菸變多」的反差數據適合做家庭互動內容。','風險：避免責備或醜化吸菸者，宜以支持與資源導向收尾。'],
      alert_level:'low',
      alert_reason:'屬長期菸害防制議題；新興菸品與家庭二手菸上升為近年新的溝通重點，可在無菸日前後加強。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('18歲以上男性最近六個月曾嚼食檳榔者為6.6%','TERMINOLOGY_LANGUAGE','definition_unstated',
          '「最近六個月曾嚼食」包含偶爾應酬嚼食者，文中未說明定義，讀者可能理解為天天嚼檳榔的比例。','low','no',
          null,'no','clarify','屬定義說明。',
          '18歲以上男性最近六個月曾嚼食檳榔（含偶爾應酬嚼食）者為6.6%',
          ['成年男性最近半年有嚼檳榔的約6.6%']),
        F('家庭二手菸暴露率卻從111年的28.9%升到35.6%','DATA_FACTUAL_ACCURACY','statistical_significance',
          '文中描述為上升趨勢，但未說明兩年差異是否經統計檢定；同一調查的吸菸率下降即註明「未達統計顯著」，二手菸數字的說法宜一致。','low','yes',
          '113年調查報告中家庭二手菸暴露率變化的顯著性檢定結果。','no','confirm','衛福部新聞稿以「增加6.7%」描述，未提顯著性。',
          '家庭二手菸暴露率從111年的28.9%變為35.6%（衛福部新聞稿指出有上升趨勢）',
          ['在家裡吸到二手菸的比例反而變高，從28.9%升到35.6%']),
        F('等於每3個人就有1個在家裡被迫吸菸','DATA_FACTUAL_ACCURACY','derived_figure',
          '35.6%是「暴露率」，指受訪者過去一段時間在家曾接觸二手菸，「被迫吸菸」的說法比原始定義更強烈。','low','no',
          null,'no','clarify','屬表達強度。',
          '等於約每3人就有1人在家裡接觸到二手菸'),
        F('電子煙與加熱菸同樣含尼古丁或有害物質，國健署提醒無助於戒菸','SOURCE_EVIDENCE','attribution_scope',
          '引用的國健署說法（菸煙都有害、無助於戒菸）原文是針對電子煙；文中把加熱菸一併歸入同一句官方說法，超出引用來源的範圍。','low','no',
          null,'no','clarify','加熱菸含尼古丁屬一般事實，但「無助於戒菸」的官方出處需另查。',
          '電子煙含尼古丁等有害物質，國健署提醒無助於戒菸；加熱菸同樣含尼古丁',
          ['新興菸品一樣有尼古丁或有害物質，也不能幫你戒菸','新興菸品同樣有害，無助戒菸'])
      ],
      card:[
        F('家庭二手菸暴露率','DATA_FACTUAL_ACCURACY','missing_year',
          '次數字 35.6% 未標示調查年份，與主數字並列時讀者無法確認是否同期。','low','no',
          null,'no','clarify','屬標示完整度。',
          '家庭二手菸暴露率（113 年）'),
        F('國健署國人吸菸行為調查（標準化）','DATA_FACTUAL_ACCURACY','uneven_axis',
          '直條圖三個年份間距不等（2008、2022、2024），等寬排列容易讓人誤判下降速度。','low','no',
          null,'no','clarify','屬圖表呈現。',
          '國健署國人吸菸行為調查（標準化；年份間距不等）')
      ]
    },
    title_alts:[
      '吸菸率降到12.8%，二手菸卻變多：紙菸、新興菸品與檳榔一次看',
      '電子煙比較沒傷害？家人的二手菸、檳榔也要一起顧',
      '戒菸戒檳有資源：0800-636363與口腔黏膜檢查'
    ],
    card_title_alts:[
      ['吸菸率下降了','但家裡的二手菸變多了'],
      ['電子煙比較安全？','新興菸品一樣有害'],
      ['戒菸戒檳','4 個行動守護家人']
    ],
    data_addon:[
      '113年18歲以上加熱菸使用率0.1%，較111年0.4%下降（國健署）。',
      '113年男性吸菸率以50-64歲最高（22.7%），女性以40-49歲最高（7.2%）。',
      '口腔癌發生年齡中位數60歲，早於全癌症的65歲（112年癌症登記）。'
    ],
    cta:'如果你或家人想戒菸，今天就撥打免付費戒菸專線0800-636363，並從「家裡和車上不抽菸」開始。'
  });
})();
