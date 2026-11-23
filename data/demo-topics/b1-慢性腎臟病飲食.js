/* v6 示範主題：慢性腎臟病飲食（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-21。數據來源：臺北榮總新竹分院營養科〈慢性腎臟病飲食〉（107年制訂、112年6月二修：理想體重、蛋白質、熱量、鉀磷鈉、水分原則）、
   國健署2025年世界腎臟日新聞稿（112年成健受檢者15%腎功能異常、謹慎用藥）。
   飲食原則需依腎功能分期、是否透析由醫師與營養師個別調整，文中不給一體適用的蛋白質克數。
   參考方向：健康智庫〈腎友夏日飲食大作戰〉2022/07。 */
(function(){
  const REFS = [
    {title:'慢性腎臟病飲食（營養科衛教，112年6月修訂）',source:'臺北榮民總醫院新竹分院',url:'https://org.vghtpe.gov.tw/vhct/files/files/25_%E6%85%A2%E6%80%A7%E8%85%8E%E8%87%9F%E7%97%85%E9%A3%B2%E9%A3%9F-11206%E7%89%88.pdf'},
    {title:'3成三高患者腎功能亮紅燈 掌握8招「腎」健康',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-81762-1.html'}
  ];
  const TABLE = {headers:['要控制的','怎麼做（醫院營養科衛教）'], rows:[
    ['蛋白質','適量限制，一半以上來自蛋、肉類、豆製品等高生理價值蛋白質'],
    ['熱量','吃夠熱量，避免身體分解蛋白質；可用植物油、冬粉、米粉等低氮澱粉補充'],
    ['鉀','蔬菜用大量滾水燙過再炒或拌油，水果控制份量，少喝湯汁、果菜汁、雞精'],
    ['磷','少吃奶製品、糙米、麥片、內臟、堅果、乾豆類、碳酸飲料'],
    ['鈉','少吃醃漬、燻製、罐頭、調味醬與加工食品'],
    ['水分','少尿或水腫時限水：前一天尿量再加500至700毫升']
  ]};
  const TAGS = ['腎臟病飲食','慢性腎臟病','低蛋白飲食','限鉀限磷','腎友'];

  const DP_STAGE = {id:'dp-ckd-diet-stage', type:'data_scope', title:'飲食限制依分期而不同',
    desc:'醫院營養科衛教強調「腎臟病飲食需配合不同病程而作不同的調整」，鉀、磷、鈉是「視個人情形」控制。網路常見的「每公斤0.6-0.8公克蛋白質」只適用部分未透析患者，透析後反而需要較多蛋白質。AI 文中不給一體適用的克數。',
    current:'依分期與個人狀況，由醫師與營養師調整',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'個別調整', value:'醫院營養科衛教', note:'臺北榮總新竹分院（目前採用）'},
      {label:'0.6-0.8 g/kg', value:'網路常見數字', note:'適用部分未透析者，未採用為通則'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'腎臟病怎麼吃？蛋白質、鉀、磷、鈉、水分5個重點',
    update_date:'2026/11/21',
    intro:'腎臟功能不良時，排泄廢物與水分的能力下降，飲食調整能減少含氮廢物產生、延緩腎功能惡化。國民健康署112年成人預防保健資料顯示，15%的受檢者有腎功能異常。臺北榮總新竹分院營養科衛教指出，腎臟病飲食需配合不同病程調整，鉀、磷、鈉等電解質視個人情形控制，並應禁食楊桃及其製品與未經證實的偏方。',
    sections:[
      {heading:'腎臟病飲食重點',format:'table',table:TABLE},
      {heading:'先掌握這兩件事',format:'bullets',items:[
        '維持理想體重：理想體重為22×身高（公尺）²，理想範圍為±10%。',
        '吃夠熱量很重要：熱量不足時身體會分解自身蛋白質，反而增加含氮廢物。',
        '禁食楊桃及其製品，不使用未經證實的偏方。'
      ]},
      {heading:'容易忽略的地方',format:'bullets',items:[
        '市售低鈉鹽、薄鹽醬油多含鉀，腎友不宜任意使用。',
        '雞精、果菜汁、茶與咖啡含鉀，也要留意份量。',
        '國健署提醒避免長期服用非類固醇消炎藥、止痛藥及來路不明的中藥。'
      ]}
    ],
    think_tank_view:'腎臟病飲食沒有一套標準答案，同樣是腎友，第3期和洗腎後的吃法可能完全不同。最好的做法是帶著最新的抽血報告找營養師，量身訂做自己的菜單；在那之前，先避開楊桃、偏方和低鈉鹽，就是最安全的第一步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'飲食原則引自臺北榮總新竹分院營養科衛教並標明修訂年份，腎功能異常比例引自國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['腎臟病飲食原則（臺北榮總新竹分院營養科，112年修訂）','112年成健受檢者15%腎功能異常（國健署）'],
      layout_reason:'先用表格整理5項要控制的營養素與水分，再強調體重與熱量，最後提醒常被忽略的地雷。',
      tone:'專業易懂', tone_reason:'飲食建議需具體但避免一體適用。',
      to_verify:['各分期蛋白質建議量依醫師與營養師評估']},
    decision_points:[DP_STAGE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'腎友吃東西好難？5個重點＋3個地雷一次看',
    update_date:'2026/11/21',
    intro:'被醫生說腎功能不好，很多人第一個問題是：「那我還能吃什麼？」醫院營養師說，腎臟病飲食要看你在第幾期來調整，不是什麼都不能吃。先掌握5個重點，再避開幾個常見地雷，吃得安心又不委屈。',
    sections:[
      {heading:'腎友吃東西的5個重點',format:'table',table:TABLE},
      {heading:'先顧好這兩件事',format:'bullets',items:[
        '體重維持在理想範圍。',
        '熱量要吃夠，不然身體會分解肌肉，反而增加腎臟負擔。',
        '楊桃一定不能吃，偏方也別試。'
      ]},
      {heading:'小心這些地雷',format:'bullets',items:[
        '低鈉鹽、薄鹽醬油多半含鉀，別亂用。',
        '雞精、果菜汁、咖啡也有鉀。',
        '止痛藥、來路不明的中藥不要自己吃。'
      ]}
    ],
    think_tank_view:'陪家裡的腎友一起去找營養師，帶著抽血報告問清楚：「我這個階段可以怎麼吃？」比上網看一堆不能吃的清單更有用。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'飲食建議引自醫院營養科衛教，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以腎友常見疑問切入。', tone:'生活親切', tone_reason:'給腎友與家屬閱讀。', to_verify:['分期差異']},
    decision_points:[DP_STAGE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'腎臟病飲食：依分期調整，禁楊桃偏方',
    update_date:'2026/11/21',
    intro:'腎臟病飲食需配合病程調整，控制蛋白質、鉀、磷、鈉與水分，並吃夠熱量。',
    sections:[
      {heading:'5重點',format:'table',table:TABLE},
      {heading:'基本',format:'bullets',items:[
        '維持理想體重、熱量吃夠。',
        '禁食楊桃與偏方。'
      ]},
      {heading:'地雷',format:'bullets',items:[
        '低鈉鹽、薄鹽醬油含鉀。',
        '避免自行服用止痛藥。'
      ]}
    ],
    think_tank_view:'腎友飲食因人而異，找營養師依分期量身規劃最安全。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'建議引自醫院營養科衛教，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為重點、基本、地雷三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['分期差異']},
    decision_points:[DP_STAGE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'慢性腎臟病飲食', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'腎臟病飲食依分期調整', primary_visual:'15%', secondary_message:'楊桃、偏方、低鈉鹽要避開', action_priority:'找營養師量身規劃'},
    headline_hook:'腎友吃東西好難？', headline_main:'腎臟病飲食 4 重點', title_accent:'4 重點',
    hero_message:'依分期調整', hero_support:'腎臟病飲食需配合不同病程，視個人情形控制',
    primary_stat:{value:'15%', label:'112 年成健受檢者腎功能異常', note:'國健署｜飲食原則：臺北榮總新竹分院營養科'},
    action_title:'這樣吃',
    action_cards:[
      {key:'熱', text:'熱量吃夠，避免分解自身蛋白質'},
      {key:'燙', text:'蔬菜滾水燙過再炒，減少鉀'},
      {key:'磷', text:'少吃奶製品、內臟、堅果、碳酸飲料'},
      {key:'禁', text:'禁食楊桃、偏方，低鈉鹽勿亂用'}
    ],
    notice:'少尿或水腫時要限水，飲水量請**依醫師或營養師指示**。',
    carousel_suggestion:{reason:'若想把蛋白質、電解質與地雷分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'腎友怎麼吃', headline_main:'5 個控制重點'},
      {layout_type:'action', headline_hook:'限鉀小技巧', headline_main:'蔬菜先燙再炒'},
      {layout_type:'knowledge', headline_hook:'腎友地雷', headline_main:'楊桃、偏方、低鈉鹽'}]},
    hashtags:['腎臟病飲食','慢性腎臟病','限鉀限磷','腎友'],
    sources:['臺北榮民總醫院新竹分院','衛生福利部國民健康署'],
    illustration_category:'nutrition',
    illustration:{topic:'腎友飲食', audience:'腎友與家屬', scene:'家人在廚房把青菜放進滾水汆燙，旁邊貼著營養師給的飲食單',
      emotion:'用心、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A family member blanching vegetables in boiling water in a kitchen, with a dietitian meal plan posted nearby, caring and reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['腎臟病飲食原則（醫院營養科衛教）'],
      layout_reason:'核心是具體飲食行動，選 action：4 個做法當主角，腎功能異常比例當背景數字。',
      tone:'專業易懂', tone_reason:'行動需具體。',
      to_verify:['分期差異']},
    decision_points:[Object.assign({}, DP_STAGE, {current:'依分期由醫師營養師調整'})],
    content_check_note:'飲食原則引自醫院營養科衛教，比例引自國健署，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'慢性腎臟病飲食',
    collect:{
      summary:'國健署成健資料顯示受檢者15%腎功能異常，腎臟病飲食能減少含氮廢物、延緩腎功能惡化；醫院營養科強調飲食需依病程與個人情形調整，「熱量吃夠、控制鉀磷鈉、避開楊桃偏方」是腎友與家屬最需要的實用資訊。',
      objective_data:[
        {item:'盛行率／發生率',desc:'15%成健受檢者腎功能異常：依國健署112年成人預防保健資料，合併三高者異常比例達3成（統計對象為受檢者）。',tag:'官方統計',source:{name:'衛生福利部國民健康署：3成三高患者腎功能亮紅燈',url:'https://mohw.gov.tw/cp-16-81762-1.html'}},
        {item:'年度趨勢方向',desc:'5大飲食控制重點：臺北榮總新竹分院營養科衛教（112年修訂）列出蛋白質、熱量、鉀、磷、鈉與水分控制原則，並強調需配合不同病程調整。',tag:'市場觀察',source:{name:'臺北榮民總醫院新竹分院：慢性腎臟病飲食',url:'https://org.vghtpe.gov.tw/vhct/files/files/25_%E6%85%A2%E6%80%A7%E8%85%8E%E8%87%9F%E7%97%85%E9%A3%B2%E9%A3%9F-11206%E7%89%88.pdf'}},
        {item:'政策動向',desc:'8招護腎含謹慎用藥：國健署呼籲避免長期服用非類固醇消炎藥、止痛藥及來路不明之中藥，並提供成人預防保健腎病識能衛教。',tag:'官方統計',source:{name:'衛生福利部國民健康署：3成三高患者腎功能亮紅燈',url:'https://mohw.gov.tw/cp-16-81762-1.html'}},
        {item:'好發族群年齡層',desc:'理想體重22×身高平方：醫院營養科建議腎友維持理想體重±10%，並吃夠熱量以防身體分解蛋白質，少尿或水腫時，每日水分以前一天尿量加500至700毫升估算。',tag:'市場觀察',source:{name:'臺北榮民總醫院新竹分院：慢性腎臟病飲食',url:'https://org.vghtpe.gov.tw/vhct/files/files/25_%E6%85%A2%E6%80%A7%E8%85%8E%E8%87%9F%E7%97%85%E9%A3%B2%E9%A3%9F-11206%E7%89%88.pdf'}}
      ],
      product_view:['機會：腎友飲食需長期營養諮詢，適合結合營養師諮詢等健康管理服務。','機會：可延伸說明慢性腎臟病與透析的保障需求。','風險：不得推薦特定低蛋白商品或保健品，也不得暗示飲食可取代醫療。'],
      marketing_view:['機會：「腎友吃東西好難」是家屬共鳴點，實用清單易分享。','機會：可與慢性腎臟病、透析主題串連。','風險：飲食限制因分期而異，避免一體適用的數字建議。'],
      alert_level:'low',
      alert_reason:'無政策事件，屬實用衛教，適合長期溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('前一天尿量再加500至700毫升','MEDICAL_INTERPRETATION','individualized_advice',
          '限水公式出自醫院衛教，適用少尿或水腫者；放在通用表格中，一般腎友可能誤以為都要限水。','medium','no',
          null,'no','clarify','屬適用對象說明。',
          '少尿或水腫者，依醫師指示限水（常見估算為前一天尿量再加500至700毫升）'),
        F('適量限制，一半以上來自蛋、肉類、豆製品等高生理價值蛋白質','MEDICAL_INTERPRETATION','stage_dependent',
          '「適量限制」未說明透析前後不同：透析患者通常需要較多蛋白質，讀者可能一律少吃蛋白質。','medium','no',
          null,'no','clarify','屬分期差異說明。',
          '依分期調整（未透析者多需適量限制，透析後需求較高），一半以上來自高生理價值蛋白質'),
        F('國民健康署112年成人預防保健資料顯示，15%的受檢者有腎功能異常','CONTEXT_CONSISTENCY','stat_relevance',
          '開頭的腎功能異常比例與飲食主題關聯不直接，且為受檢者比例而非全國盛行率。','low','no',
          null,'no','clarify','數字正確，屬脈絡安排。',
          null),
        F('楊桃一定不能吃，偏方也別試','RISK_COMMUNICATION_SCOPE','reason_missing',
          '只寫禁止未說明原因，讀者可能不重視；醫院衛教僅列禁食，未說明機轉。','low','yes',
          '楊桃對腎友危害的官方說明。','no','confirm','屬醫院衛教明列禁食項目。',
          null)
      ],
      card:[
        F('112 年成健受檢者腎功能異常','CONTEXT_CONSISTENCY','stat_relevance',
          '主數字與飲食行動關聯不直接。','low','no',
          null,'no','clarify','數字正確。',
          null),
        F('蔬菜滾水燙過再炒，減少鉀','MEDICAL_INTERPRETATION','individualized_advice',
          '限鉀做法適用需限鉀的腎友，並非所有腎友都要限鉀。','low','no',
          null,'no','clarify','屬適用對象說明。',
          '需限鉀者：蔬菜滾水燙過再炒')
      ]
    },
    title_alts:[
      '腎臟病怎麼吃？蛋白質、鉀、磷、鈉、水分5個重點',
      '腎友吃東西好難？5個重點＋3個地雷一次看',
      '腎臟病飲食依分期調整：營養師的實用原則'
    ],
    card_title_alts:[
      ['腎友吃東西好難？','腎臟病飲食 4 重點'],
      ['依分期調整','腎友怎麼吃'],
      ['腎友地雷','楊桃、偏方、低鈉鹽']
    ],
    data_addon:[
      '醫院營養科：高熱量低蛋白食物包括植物油、冬粉、米粉、粉圓、太白粉等。',
      '醫院營養科：限鈉需少吃麵線、速食麵、榨菜、香腸、醬瓜、沙茶醬、番茄醬、蜜餞等加工食品。',
      '國健署：一般健康成人建議每日約2,000 c.c.水，但腎友飲水量需依醫囑。'
    ],
    cta:'下次回診時，帶著最新的抽血報告請醫師轉介營養師，問清楚「我這個階段可以怎麼吃」。'
  });
})();
