/* v6 示範主題：血脂異常（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-21。數據來源：衛福部2025-02-10〈高血脂盛行率達3成「控脂4招」保健康〉（國健署2019-2023年國民營養健康調查、血脂正常值）、
   TVBS 2026-04-02（醫師說明診斷率、《2025台灣血脂管理臨床路徑共識》LDL目標、健保2025年9月放寬PCSK9抑制劑給付）。
   參考方向：健康智庫〈想降血脂，能靠保健食品嗎？〉2022/11、〈高風險族群下修壞膽固醇目標值〉。 */
(function(){
  const REFS = [
    {title:'高血脂盛行率達3成 「控脂4招」保健康',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-81454-1.html'},
    {title:'高血脂沒感覺最恐怖！血管斑塊隨時炸開「血脂針」給付放寬 5千人受惠',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/strong/362084'}
  ];
  const TABLE = {headers:['血脂項目','國健署正常值'], rows:[
    ['總膽固醇','小於200 mg/dL'],
    ['三酸甘油酯（TG）','小於150 mg/dL'],
    ['低密度脂蛋白膽固醇（LDL-C，壞膽固醇）','小於130 mg/dL'],
    ['高密度脂蛋白膽固醇（HDL-C，好膽固醇）','男性大於40 mg/dL、女性大於50 mg/dL']
  ]};
  const TAGS = ['高血脂','壞膽固醇','三酸甘油酯','血脂異常','心血管疾病'];

  const DP_LDL = {id:'dp-lipid-ldl', type:'data_scope', title:'壞膽固醇「正常值」與「治療目標」不同',
    desc:'國健署公布的LDL正常值為小於130 mg/dL，適用一般民眾；《2025台灣血脂管理臨床路徑共識》則依風險分層訂定治療目標，例如已確診動脈硬化心血管疾病者要小於70 mg/dL。AI 文中兩者分開說明，沒有把一般正常值套用到高風險族群。',
    current:'一般正常值LDL小於130 mg/dL（國健署）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'<130', value:'一般民眾正常值', note:'國健署（目前採用）'},
      {label:'<100／<70／<55', value:'依風險分層的治療目標', note:'2025台灣血脂管理臨床路徑共識（醫師說明）'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'高血脂盛行率3成1卻常沒感覺：看懂血脂4項數值與控脂4招',
    update_date:'2026/11/21',
    intro:'依國民健康署2019-2023年國民營養健康調查，20歲以上國人高血脂盛行率達3成1。高血脂早期沒有明顯症狀，卻會讓血管逐漸堆積斑塊，增加心肌梗塞、腦中風等心血管疾病風險；心臟內科醫師指出，高血脂診斷率僅約52%，約一半的人不知道自己血脂偏高。',
    sections:[
      {heading:'看懂血脂4項數值',format:'table',table:TABLE},
      {heading:'高風險族群的目標更嚴格',format:'bullets',items:[
        '醫師引述《2025台灣血脂管理臨床路徑共識》：糖尿病、腎臟病或LDL超過190 mg/dL者，LDL目標小於100 mg/dL；已確診動脈硬化心血管疾病者小於70 mg/dL；曾發生重大心血管事件的冠心病患者小於55 mg/dL。',
        '據媒體報導，健保自2025年9月起放寬降血脂針劑（PCSK9抑制劑）給付，LDL起始門檻由135降至100 mg/dL，預估約5千位患者受惠。',
        '是否需要用藥與目標值，應由醫師依個人風險評估。'
      ]},
      {heading:'國健署控脂4招',format:'bullets',items:[
        '定期健檢：善用成人預防保健，30-39歲每5年、40-64歲每3年、65歲以上每年1次。',
        '評估風險：可利用國健署「科學算病館」估算自身風險。',
        '改變生活型態：規律有氧運動，掌握低油、低鹽、低糖及高纖原則。',
        '戒菸：尼古丁會讓心跳加快、血壓上升，並降低好膽固醇。'
      ]}
    ],
    think_tank_view:'血脂不會痛，所以最需要「看數字」。拿出健檢報告，對照4項正常值；如果本身有糖尿病、腎臟病或心血管疾病，目標還要更嚴格，記得和醫師確認自己的LDL目標是多少。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率與正常值引自國健署並標明調查年份，診斷率、LDL目標與健保給付標明為醫師說明與媒體報導，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['20歲以上高血脂盛行率31%（國健署2019-2023年調查）','血脂正常值（國健署）'],
      layout_reason:'先用表格讓讀者對照4項血脂數值，再說明高風險族群的目標，最後列出國健署控脂4招。',
      tone:'專業易懂', tone_reason:'讀者需要對照自己數值的精確資訊。',
      to_verify:['診斷率52%為醫師說明，原始調查待查','PCSK9給付放寬為媒體報導，健保署公告原文未取得']},
    decision_points:[DP_LDL]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'每3人就有1人血脂高！拿出健檢報告對照這4個數字',
    update_date:'2026/11/21',
    intro:'國健署調查，20歲以上的台灣人有3成1血脂偏高，平均每3人就有1人。可怕的是，高血脂完全沒感覺，醫師說大約一半的人根本不知道自己血脂高。今天就拿出健檢報告，看看這4個數字吧。',
    sections:[
      {heading:'血脂4個數字，正常值在這裡',format:'table',table:TABLE},
      {heading:'有慢性病的人，標準更嚴',format:'bullets',items:[
        '有糖尿病、腎臟病，或已經有心血管疾病的人，壞膽固醇要控制得更低。',
        '自己的目標是多少，問醫師最準。',
        '聽說降血脂針的健保給付放寬了，需要的人可以和醫師討論。'
      ]},
      {heading:'控脂4招',format:'bullets',items:[
        '定期做免費成人健檢。',
        '上國健署「科學算病館」算算自己的風險。',
        '少油少鹽少糖多纖維，常運動。',
        '戒菸，好膽固醇才不會變少。'
      ]}
    ],
    think_tank_view:'血脂高通常不痛不癢，等到心臟或腦血管出事才發現就太晚了。今天花一分鐘看看健檢報告上的血脂數字，就是照顧自己的開始。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，診斷率標明為醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「對照健檢報告」的行動切入。', tone:'生活親切', tone_reason:'給一般上班族閱讀。', to_verify:['診斷率為醫師說明']},
    decision_points:[DP_LDL]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'高血脂：盛行率3成1，看懂4項數值',
    update_date:'2026/11/21',
    intro:'20歲以上高血脂盛行率3成1（2019-2023年國民營養健康調查）。高血脂無症狀，需定期檢查。',
    sections:[
      {heading:'正常值',format:'table',table:TABLE},
      {heading:'高風險族群',format:'bullets',items:[
        '糖尿病、腎臟病、心血管疾病者LDL目標更低。',
        '目標值由醫師評估。'
      ]},
      {heading:'控脂4招',format:'bullets',items:[
        '定期健檢、評估風險。',
        '三低一高飲食、規律運動、戒菸。'
      ]}
    ],
    think_tank_view:'高血脂沒感覺，對照數值、定期檢查是控制的第一步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為正常值、高風險、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['LDL目標為醫學共識']},
    decision_points:[DP_LDL]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'血脂異常', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'20 歲以上 3 成 1 有高血脂', primary_visual:'31%', secondary_message:'約一半的人不知道自己血脂高', action_priority:'對照 4 項數值、控脂 4 招'},
    headline_hook:'每 3 人就有 1 人', headline_main:'血脂 4 項數值一次看', title_accent:'4 項數值',
    hero_message:'高血脂不會痛', hero_support:'20 歲以上盛行率 3 成 1（國健署 2019–2023 年調查）',
    knowledge_title:'國健署正常值', knowledge_note:'有慢性病者 LDL **目標更低**，請問醫師',
    knowledge_cards:[
      {label:'總膽固醇', icon:'heart', lines:['< 200 mg/dL']},
      {label:'三酸甘油酯', icon:'flask', lines:['< 150 mg/dL']},
      {label:'LDL 壞膽固醇', icon:'heart', lines:['< 130 mg/dL']},
      {label:'HDL 好膽固醇', icon:'heart', lines:['男 > 40 mg/dL','女 > 50 mg/dL']}
    ],
    primary_stat:{value:'31%', label:'20 歲以上高血脂盛行率', note:'國健署 2019–2023 年國民營養健康調查'},
    secondary_stats:[
      {value:'約 52%', label:'高血脂診斷率（醫師說明）'},
      {value:'2025 年 9 月', label:'血脂針給付放寬'}
    ],
    action_title:'控脂 4 招',
    action_cards:[
      {key:'檢', text:'善用成人預防保健定期驗血脂'},
      {key:'算', text:'用國健署科學算病館評估風險'},
      {key:'吃', text:'低油低鹽低糖高纖，規律運動'},
      {key:'戒', text:'戒菸，避免好膽固醇下降'}
    ],
    carousel_suggestion:{reason:'若想把數值、高風險目標與控脂方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'看懂健檢報告', headline_main:'血脂 4 項數值'},
      {layout_type:'knowledge', headline_hook:'高風險族群', headline_main:'LDL 目標更低'},
      {layout_type:'action', headline_hook:'控脂 4 招', headline_main:'檢、算、吃、戒'}]},
    hashtags:['高血脂','壞膽固醇','血脂異常','心血管疾病'],
    sources:['衛生福利部國民健康署','TVBS新聞網'],
    illustration_category:'metabolic',
    illustration:{topic:'看懂血脂數值', audience:'中壯年上班族', scene:'一位上班族拿著健檢報告對照血脂數值，桌上放著蔬菜沙拉',
      emotion:'專注、有掌握感', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An office worker comparing lipid values on a health check-up report with a vegetable salad on the desk, focused and in-control mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['盛行率31%與正常值（國健署2025年）'],
      layout_reason:'核心是看懂4項數值，選 knowledge：4 張正常值卡當主角，盛行率與診斷率放下方。',
      tone:'專業易懂', tone_reason:'數值需精確。',
      to_verify:['診斷率52%為醫師說明']},
    decision_points:[Object.assign({}, DP_LDL, {current:'LDL < 130 mg/dL｜一般正常值'})],
    content_check_note:'盛行率與正常值引自國健署並標明年份，診斷率標明為醫師說明，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'血脂異常',
    collect:{
      summary:'國健署調查20歲以上高血脂盛行率達3成1，但醫師指出診斷率僅約一半；健保2025年9月放寬降血脂針劑給付、2025年臨床共識依風險下修LDL目標，「看懂血脂數值、高風險族群目標更嚴」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'20歲以上高血脂盛行率31%：依國健署2019-2023年國民營養健康調查，約每3人有1人血脂偏高，早期多無明顯症狀。',tag:'官方統計',source:{name:'衛生福利部國民健康署：高血脂盛行率達3成「控脂4招」保健康',url:'https://mohw.gov.tw/cp-16-81454-1.html'}},
        {item:'年度趨勢方向',desc:'約52%高血脂診斷率：心臟內科醫師指出約一半患者不知道自己血脂偏高，並引述《2025台灣血脂管理臨床路徑共識》依風險分層訂定LDL目標。',tag:'市場觀察',source:{name:'TVBS新聞網：高血脂沒感覺最恐怖！血脂針給付放寬',url:'https://health.tvbs.com.tw/strong/362084'}},
        {item:'政策動向',desc:'約5千位患者受惠於血脂針給付放寬：據媒體報導，健保自2025年9月起放寬PCSK9抑制劑給付，LDL起始門檻由135降至100 mg/dL。',tag:'市場觀察',source:{name:'TVBS新聞網：高血脂沒感覺最恐怖！血脂針給付放寬',url:'https://health.tvbs.com.tw/strong/362084'}},
        {item:'好發族群年齡層',desc:'LDL正常值小於130 mg/dL：國健署公布血脂正常值為總膽固醇小於200、三酸甘油酯小於150、HDL男性大於40、女性大於50 mg/dL，並建議善用成人預防保健定期檢查。',tag:'官方統計',source:{name:'衛生福利部國民健康署：高血脂盛行率達3成「控脂4招」保健康',url:'https://mohw.gov.tw/cp-16-81454-1.html'}}
      ],
      product_view:['機會：高血脂是心肌梗塞、腦中風的主要風險，可作為心血管保障的前端溝通。','機會：血脂追蹤與生活型態支持適合結合健康管理服務。','風險：避免推薦保健食品或暗示保健食品可取代藥物；不得暗示健康管理可保證不發病。'],
      marketing_view:['機會：「拿出健檢報告對照4個數字」是具體、好執行的行動。','機會：可與心肌梗塞、腦中風、糖尿病串成三高系列。','風險：LDL目標因人而異，避免一體適用的數字建議。'],
      alert_level:'medium',
      alert_reason:'健保給付放寬與新版臨床共識在2025年上路，適合納入三高主題的年度溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('高血脂診斷率僅約52%','SOURCE_EVIDENCE','secondary_citation',
          '診斷率出自醫師受訪說明，未附調查來源與年份。','medium','yes',
          '國健署國民營養健康調查的高血脂知曉率資料。','no','confirm','屬二手引述。',
          null,['大約一半的人根本不知道自己血脂高','約一半的人不知道自己血脂高']),
        F('健保自2025年9月起放寬降血脂針劑（PCSK9抑制劑）給付','SOURCE_EVIDENCE','secondary_citation',
          '給付變更引自媒體報導，未附健保署公告；給付條件細節（適用對象）也未完整說明。','medium','yes',
          '健保署PCSK9抑制劑給付規定修訂公告。','yes','confirm','屬媒體報導。',
          null,['聽說降血脂針的健保給付放寬了']),
        F('聽說降血脂針的健保給付放寬了','BRAND_TONE_CONSISTENCY','hearsay_tone',
          '「聽說」語氣不確定，與衛教內容應有的可信賴感不符；應寫明時間與出處。','low','no',
          null,'no','revise','屬語氣調整。',
          '據報導，健保2025年9月起放寬降血脂針劑給付'),
        F('已確診動脈硬化心血管疾病者小於70 mg/dL','MEDICAL_INTERPRETATION','target_as_self_management',
          '列出多組LDL目標，讀者可能自行套用判斷是否需用藥；應強調由醫師評估所屬風險分層。','low','no',
          null,'no','clarify','數字引自臨床共識。',
          '已確診動脈硬化心血管疾病者小於70 mg/dL（所屬族群與目標請由醫師判定）')
      ],
      card:[
        F('高血脂診斷率（醫師說明）','SOURCE_EVIDENCE','secondary_citation',
          '次數字為醫師說明，無調查來源。','low','yes',
          '診斷率原始調查。','no','confirm','屬二手引述。',
          null),
        F('血脂針給付放寬','SOURCE_EVIDENCE','secondary_citation',
          '次數字為媒體報導，卡面未說明適用條件。','low','yes',
          '健保署公告。','yes','confirm','屬媒體報導。',
          '血脂針給付放寬（依健保規定）')
      ]
    },
    title_alts:[
      '高血脂盛行率3成1卻常沒感覺：看懂血脂4項數值與控脂4招',
      '每3人就有1人血脂高！拿出健檢報告對照這4個數字',
      '壞膽固醇目標因人而異：高風險族群的血脂管理'
    ],
    card_title_alts:[
      ['每 3 人就有 1 人','血脂 4 項數值一次看'],
      ['高血脂不會痛','看懂健檢報告'],
      ['控脂 4 招','檢、算、吃、戒']
    ],
    data_addon:[
      '國健署：112年三高相關疾病死亡人數合計約6萬8千人，高於癌症死亡的5萬3千人。',
      '醫師引述：LDL每降低38.7 mg/dL，心血管事件可減少22%。',
      '行政院於2025年4月推動「三高防治888計畫」。'
    ],
    cta:'今天就拿出最近的健檢報告，對照這4項血脂數值；有紅字就約醫師討論自己的目標值。'
  });
})();
