/* v6 示範主題：中年代謝下降（B9 飲食營養與運動）
   查證日期：2026-11-21。數據來源：Pontzer H. et al., Science 2021〈Daily energy expenditure through the human life course〉（PMC8370708：6,421人、29國；20-60歲校正後能量消耗穩定，約60歲後每年約−0.7%）、國健署問答〈每天要運動多久才會對體重控制有幫忙？〉（中年後每週300分鐘）、國健署2026-10-15新聞稿（30-39歲受檢者BMI過重肥胖近5成）。
   注意：既有主題「代謝症候群」使用別名「代謝」，本題別名避開。
   參考方向：健康智庫〈中年發福危機？解密影響代謝的關鍵因素〉2024/07。 */
(function(){
  const REFS = [
    {title:'Daily energy expenditure through the human life course',source:'Science (2021)',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC8370708/'},
    {title:'每天要運動多久才會對體重控制有幫忙？',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=825&pid=14222'},
    {title:'三十而立 小心別讓「三高」找上門！善用公費健檢掌握健康',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=5020&pid=20399'}
  ];
  const TABLE = {headers:['年齡階段','研究發現（依體型校正後的每日能量消耗）'], rows:[
    ['約1歲','比成人高約46%，是一生最高'],
    ['1-20歲','逐漸下降到成人水準'],
    ['20-60歲','大致穩定，懷孕期間也是'],
    ['約60歲以後','開始下降，每年約0.7%']
  ]};
  const TAGS = ['中年發福','新陳代謝','體重管理','肌力訓練','熟齡健康'];

  const PRO = {
    content_type:'健康文章',
    title:'中年發福是代謝變慢？研究：60歲前代謝其實很穩定',
    update_date:'2026/11/21',
    intro:'很多人把中年發福歸因於「代謝變慢」。2021年刊登於《Science》的研究分析29個國家、6,421人以雙標記水測得的每日能量消耗，發現依體型校正後，20至60歲的能量消耗大致穩定，約60歲以後才開始下降，每年約0.7%。換句話說，中年體重增加更可能與活動量減少、飲食習慣與肌肉量變化有關。國健署指出，過了中年要有效阻止體重增加，每週可能需要300分鐘以上的中等強度運動。',
    sections:[
      {heading:'一生的能量消耗變化',format:'table',table:TABLE},
      {heading:'中年發福的可能原因',format:'bullets',items:[
        '活動量變少：工作久坐、運動時間減少。',
        '飲食份量沒有隨活動量調整。',
        '研究也發現60歲後下降的不只是脂肪與肌肉量，組織本身的代謝也在改變。'
      ]},
      {heading:'中年體重管理這樣做',format:'bullets',items:[
        '中等強度運動每週累積150分鐘起，想控制體重可逐步增加到300分鐘。',
        '加入肌力訓練，維持肌肉量。',
        '依活動量調整主食與零食份量。',
        '利用成人健檢定期追蹤體重、腰圍與三高。'
      ]}
    ],
    think_tank_view:'「代謝變慢」是很方便的理由，但研究告訴我們，60歲前真正改變的通常是生活：坐得多、動得少、吃得一樣多。好消息是，這些都是可以調整的；中年正是建立運動與肌力習慣、為60歲後做準備的時機。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'研究數據引自Science 2021原文並說明為校正後能量消耗，國內建議引自國健署，未使用療效保證用語，未涉及特定減重產品。',
    ai_rationale:{basis:['20-60歲代謝穩定、60歲後每年約−0.7%（Pontzer et al., Science 2021）','中年後每週300分鐘（國健署）'],
      layout_reason:'先用表格呈現一生代謝變化破除迷思，再說明中年發福原因，最後給體重管理做法。',
      tone:'專業易懂', tone_reason:'需破除常見迷思。',
      to_verify:['研究為校正體型後的數據，個人實際差異仍大']},
    decision_points:[]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'40歲後吃一樣卻變胖？可能不是代謝的錯',
    update_date:'2026/11/21',
    intro:'「年紀大了代謝變慢，喝水都會胖」是很多人的心聲。但2021年一份分析了6,421人的國際研究發現，其實從20歲到60歲，身體每天消耗的能量（扣掉體型差異後）幾乎沒變，要到60歲以後才會慢慢下降，一年大約少0.7%。所以中年變胖，更多是因為動得少了、吃得沒少。',
    sections:[
      {heading:'一生的代謝怎麼變？',format:'table',table:TABLE},
      {heading:'那為什麼會變胖？',format:'bullets',items:[
        '上班一坐就是一整天，運動越來越少。',
        '吃的量還跟年輕時一樣。',
        '60歲以後，身體組織的代謝才真的慢下來。'
      ]},
      {heading:'這樣做比較有效',format:'bullets',items:[
        '每週動滿150分鐘，想瘦可慢慢加到300分鐘。',
        '做一些肌力訓練，留住肌肉。',
        '動得少就吃少一點。',
        '定期做健檢，看看體重、腰圍和三高。'
      ]}
    ],
    think_tank_view:'別再把肚子怪到代謝頭上。從每天多走一段路、多做幾下深蹲開始，身體會給你回應。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'研究數據引自Science 2021，建議引自國健署，未涉及特定減重產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以「喝水都會胖」的常見抱怨切入。', tone:'生活親切', tone_reason:'給中年上班族。', to_verify:[]},
    decision_points:[]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'中年代謝其實穩定：60歲後才下降',
    update_date:'2026/11/21',
    intro:'Science 2021：校正體型後，20-60歲每日能量消耗穩定，約60歲後每年約降0.7%。中年發福多與活動量和飲食有關。',
    sections:[
      {heading:'代謝變化',format:'table',table:TABLE},
      {heading:'原因',format:'bullets',items:[
        '活動量減少。',
        '飲食份量未調整。'
      ]},
      {heading:'做法',format:'bullets',items:[
        '每週150至300分鐘運動。',
        '加入肌力訓練。'
      ]}
    ],
    think_tank_view:'中年發福多是生活改變，而非代謝變慢。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自Science與國健署，未涉及特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為變化、原因、做法三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'中年代謝下降', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'20–60 歲代謝大致穩定', primary_visual:'60 歲', secondary_message:'之後每年約下降 0.7%', action_priority:'多動、肌力訓練、調整份量'},
    headline_hook:'中年發福是代謝變慢？', headline_main:'60 歲前代謝其實很穩定', title_accent:'很穩定',
    hero_message:'約 60 歲後才下降', hero_support:'校正體型後的每日能量消耗（Science 2021，6,421 人）',
    knowledge_title:'一生的代謝變化', knowledge_note:'中年發福，多半是**動得少、吃得沒少**',
    knowledge_cards:[
      {label:'約 1 歲', icon:'people', lines:['比成人高約 46%']},
      {label:'20–60 歲', icon:'check', lines:['大致穩定']},
      {label:'60 歲以後', icon:'heart', lines:['每年約 −0.7%']}
    ],
    action_title:'中年這樣管理體重',
    action_cards:[
      {key:'動', text:'每週 150 分鐘起，逐步加到 300'},
      {key:'肌', text:'加入肌力訓練維持肌肉'},
      {key:'量', text:'依活動量調整飯量與零食'},
      {key:'檢', text:'定期健檢追蹤體重與腰圍'}
    ],
    carousel_suggestion:{reason:'若想把研究發現、發福原因與管理方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'代謝迷思', headline_main:'60 歲前很穩定'},
      {layout_type:'knowledge', headline_hook:'中年發福原因', headline_main:'動得少、吃得沒少'},
      {layout_type:'action', headline_hook:'中年體重管理', headline_main:'多動、肌力、調份量'}]},
    hashtags:['中年發福','新陳代謝','體重管理','肌力訓練'],
    sources:['Science','衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'中年體重管理', audience:'40-60 歲上班族', scene:'一位中年上班族下班後在公園做深蹲，旁邊放著公事包與水壺',
      emotion:'有活力、自我照顧', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged office worker doing squats in a park after work, briefcase and water bottle beside them, energetic and self-caring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['Pontzer et al., Science 2021'],
      layout_reason:'核心是破除迷思，選 knowledge：3 個生命階段的代謝變化當主角，最後給中年行動。',
      tone:'專業易懂', tone_reason:'用研究破迷思。',
      to_verify:[]},
    decision_points:[],
    content_check_note:'內容引自Science 2021與國健署，未涉及特定減重產品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'中年代謝下降',
    collect:{
      summary:'2021年Science研究分析6,421人發現，校正體型後20至60歲每日能量消耗大致穩定，約60歲以後才每年下降約0.7%；中年發福更可能與活動量減少、飲食與肌肉量變化有關。國內30多歲受檢者已近5成BMI過重或肥胖，中年體重管理是健康管理重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'每年約0.7%：Pontzer等2021年Science研究，依體型校正後的每日能量消耗在約60歲以後開始下降，每年約−0.7%。',tag:'市場觀察',source:{name:'Science：Daily energy expenditure through the human life course',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC8370708/'}},
        {item:'年度趨勢方向',desc:'6421人：該研究彙整29個國家、6421人以雙標記水測得的資料，發現20至60歲成人的校正後能量消耗大致穩定，懷孕期間也是。',tag:'市場觀察',source:{name:'Science：Daily energy expenditure through the human life course',url:'https://pmc.ncbi.nlm.nih.gov/articles/PMC8370708/'}},
        {item:'政策動向',desc:'每週300分鐘以上：國健署指出過了中年的男女要有效阻止體重增加，每週至少需要300分鐘以上的中等強度運動，過重者需合併飲食控制。',tag:'官方統計',source:{name:'國健署：每天要運動多久才會對體重控制有幫忙？',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=825&pid=14222'}},
        {item:'好發族群年齡層',desc:'近5成：國健署114年成人預防保健資料顯示，30至39歲受檢者以BMI過重或肥胖最多，近5成。',tag:'官方統計',source:{name:'國健署：三十而立 小心別讓「三高」找上門',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=5020&pid=20399'}}
      ],
      product_view:['機會：中年體重管理與三高、代謝症候群預防相關，可連結健康管理服務。','機會：「代謝迷思」適合知識型內容。','風險：避免推薦減重產品或「提升代謝」商品；研究為群體平均，不代表個人。'],
      marketing_view:['機會：「喝水都會胖？」是高共鳴話題。','機會：可結合中年肌力訓練挑戰。','風險：避免身材焦慮語氣。'],
      alert_level:'low',
      alert_reason:'屬長期健康管理議題，無急迫時效。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('中年體重增加更可能與活動量減少、飲食習慣與肌肉量變化有關','SOURCE_EVIDENCE','inference_beyond_source',
          'Science研究只說明能量消耗的年齡變化，並未直接研究中年發福的原因；此推論為本文延伸，宜改為較保守的說法。','low','no',
          null,'no','clarify','屬推論層級。',
          '研究顯示中年代謝大致穩定，因此中年體重增加可能還有活動量、飲食等其他因素',
          ['所以中年變胖，更多是因為動得少了、吃得沒少']),
        F('每年約0.7%','DATA_FACTUAL_ACCURACY','group_average',
          '0.7%是研究族群的平均變化，個人代謝受體型、肌肉量、健康狀況影響差異很大；文中未提醒不宜直接套用在自己身上。','low','no',
          null,'no','clarify','屬群體與個人差異說明。',
          '平均每年約0.7%（群體平均，個人差異大）',
          ['一年大約少0.7%','每年約降0.7%']),
        F('想控制體重可逐步增加到300分鐘','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '300分鐘是國健署對中年阻止體重增加的研究證據說明，對有慢性病或久未運動者需漸進並諮詢醫師，文中未提醒。','low','no',
          null,'no','clarify','屬適用對象說明。',
          '想控制體重可逐步增加到300分鐘（有慢性病者先諮詢醫師）',
          ['想瘦可慢慢加到300分鐘','每週150至300分鐘運動。'])
      ],
      card:[
        F('中年發福，多半是**動得少、吃得沒少**','SOURCE_EVIDENCE','inference_beyond_source',
          '研究未直接證明中年發福原因，屬延伸推論。','low','no',
          null,'no','clarify','屬推論層級。',
          '中年發福，**活動量與飲食**是關鍵'),
        F('比成人高約 46%','DATA_FACTUAL_ACCURACY','adjusted_metric',
          '為校正體型後的比較，卡面未說明。','low','no',
          null,'no','clarify','屬口徑說明。',
          '校正後比成人高約 46%')
      ]
    },
    title_alts:[
      '中年發福是代謝變慢？研究：60歲前代謝其實很穩定',
      '40歲後吃一樣卻變胖？可能不是代謝的錯',
      '代謝60歲後才下降：中年體重管理4件事'
    ],
    card_title_alts:[
      ['中年發福是代謝變慢？','60 歲前代謝其實很穩定'],
      ['喝水都會胖？','可能不是代謝的錯'],
      ['中年體重管理','多動、肌力、調份量']
    ],
    data_addon:[
      '研究發現約1歲時校正後能量消耗比成人高約46%，20歲左右降到成人水準（Science 2021）。',
      '60歲後能量消耗下降不只是因為脂肪與肌肉量減少，組織代謝也在改變。',
      '國健署建議每週150分鐘中等強度運動並搭配肌力訓練。'
    ],
    cta:'這週在下班後安排兩次20分鐘的快走加深蹲，並把晚餐飯量減少一兩口。'
  });
})();
