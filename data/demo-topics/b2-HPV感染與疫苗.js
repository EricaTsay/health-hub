/* v6 示範主題：HPV 感染與疫苗（B2 癌症）
   查證日期：2026-11-21。數據來源：衛福部2025-08-12〈男孩女孩齊接種 HPV遠離我〉（公費HPV疫苗擴大至國中男女、劑次、保護力、高危險型別）、
   健康醫療網／鏡週刊2026-08-31（首年接種率、HPV相關癌症歸因比例，醫學會理事長受訪）、衛福部112年癌症登記新聞稿（子宮頸抹片與HPV檢測資格）。
   參考方向：健康智庫〈預防癌症，男生也應接種HPV！〉2025/06。 */
(function(){
  const REFS = [
    {title:'男孩女孩齊接種 HPV遠離我 公費人類乳突病毒（HPV）疫苗擴大施打',source:'衛生福利部',url:'https://mohw.gov.tw/cp-7175-83470-1.html'},
    {title:'東亞第一推HPV疫苗男女公費接種 首年男生接種率突破81.6%',source:'健康醫療網／鏡週刊',url:'https://www.mirrormedia.mg/external/healthnews_69585'},
    {title:'公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-84987-1.html'}
  ];
  const TABLE = {headers:['項目','重點'], rows:[
    ['HPV是什麼','人類乳突病毒，高危險型（如第16、18、52、58型）與子宮頸癌、肛門生殖器癌及口咽癌有關'],
    ['公費對象','2025年9月起擴大至113年入學的全體國中生（男女），校園集中接種'],
    ['接種劑次','九價疫苗15歲以下接種2劑，第2劑與第1劑間隔6個月以上'],
    ['保護效果','衛福部說明可預防70%以上HPV感染，完整接種保護力至少10年'],
    ['接種後仍要篩檢','女性成年後仍應依建議接受子宮頸抹片與HPV檢測']
  ]};
  const TAGS = ['HPV','HPV疫苗','人類乳突病毒','子宮頸癌','男生也要打'];

  const DP_RATE = {id:'dp-hpv-rate', type:'data_version', title:'接種率數字的出處',
    desc:'首年男生第一劑81.6%、女生91.9%出自2026年8月健康醫療網報導，未註明統計截止日與官方出處；2025年12月報導則為男生約79%、女生約91%。AI 未找到國健署原始公告，在文中標示為媒體報導。',
    current:'男生81.6%、女生91.9%（2026年8月報導，首年第一劑）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'81.6%／91.9%', value:'首年第一劑', note:'健康醫療網2026-08-31（目前採用）'},
      {label:'約79%／91%', value:'截至2025年11月底', note:'2025年12月媒體報導'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'HPV不只是女生的事：國中男女公費疫苗，預防多種HPV相關癌症',
    update_date:'2026/11/21',
    intro:'人類乳突病毒（HPV）是常見的病毒感染，持續感染高危險型HPV與子宮頸癌、肛門生殖器癌及口咽癌有關。衛生福利部自2025年9月起將公費HPV疫苗擴大到國中男生，台灣成為東亞第一個提供男生完整2劑公費HPV疫苗的國家。據媒體報導，首年男生第一劑接種率突破81.6%、女生91.9%。',
    sections:[
      {heading:'HPV與疫苗重點',format:'table',table:TABLE},
      {heading:'為什麼男生也要打',format:'bullets',items:[
        '衛福部指出，HPV疫苗可預防男性的口咽癌、肛門癌、生殖器癌及尖形濕疣。',
        '醫學會理事長引述衛福部資料，HPV相關癌症中，子宮頸癌100%、肛門癌88.0%、陰莖癌50.0%、口咽癌30.8%與HPV有關。',
        '男女都接種，也能減少病毒在族群中傳播。'
      ]},
      {heading:'家長與成人可以這樣做',format:'bullets',items:[
        '留意學校接種通知，錯過校園接種可依補接種通知單到合約院所接種。',
        '女性25歲以上依資格定期抹片，35、45、65歲把握公費HPV檢測。',
        '非公費對象若想自費接種，可與醫師討論適合的年齡與劑次。'
      ]}
    ],
    think_tank_view:'HPV疫苗是少數能「預防癌症」的疫苗，越早在接觸病毒前接種效果越好。家中有國中生的家長，不論男孩女孩，都別錯過學校的公費接種；而媽媽們也別忘了，打過疫苗或孩子打了疫苗，自己的抹片仍要定期做。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'公費資格、劑次與保護力引自衛福部2025年新聞稿，接種率與癌症歸因比例標明為媒體報導與醫學會說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['公費HPV疫苗擴大至國中男女（衛福部2025-08）','首年接種率（媒體報導2026-08）'],
      layout_reason:'先用表格整理HPV與疫苗重點，再說明男生接種的理由，最後給家長與成人的行動。',
      tone:'專業易懂', tone_reason:'疫苗資格與劑次需要精確。',
      to_verify:['接種率為媒體報導','HPV相關癌症歸因比例為醫學會引述，原始資料待查']},
    decision_points:[DP_RATE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'兒子也要打HPV疫苗？國中男女都能免費打',
    update_date:'2026/11/21',
    intro:'很多爸媽以為HPV疫苗是「女生打的子宮頸癌疫苗」，其實HPV也和男生的口咽癌、肛門癌等有關。從2025年9月起，國中男生女生都能在學校免費打HPV疫苗，台灣是東亞第一個讓男生也公費打2劑的國家。',
    sections:[
      {heading:'HPV疫苗，爸媽要知道這些',format:'table',table:TABLE},
      {heading:'男生為什麼也要打？',format:'bullets',items:[
        '衛福部說，HPV疫苗可以預防男生的口咽癌、肛門癌和生殖器疣。',
        '醫師提到，肛門癌約88%、口咽癌約3成和HPV有關。',
        '男生女生都打，大家都更安全。'
      ]},
      {heading:'爸媽可以這樣做',format:'bullets',items:[
        '注意學校的接種通知單，錯過了可以到合約院所補打。',
        '媽媽自己也要記得定期做抹片。',
        '不是公費對象想自費打，先問醫師。'
      ]}
    ],
    think_tank_view:'打HPV疫苗，是爸媽能送給孩子的一份長期保護。收到學校通知時，和孩子聊聊為什麼要打，也是很好的健康教育時間。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資格與劑次引自衛福部，比例標明為醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以家長常見疑問切入。', tone:'生活親切', tone_reason:'給國中生家長閱讀。', to_verify:['比例為醫師引述']},
    decision_points:[DP_RATE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'HPV疫苗：國中男女公費2劑',
    update_date:'2026/11/21',
    intro:'2025年9月起公費HPV疫苗擴大至國中男生。九價疫苗15歲以下2劑，可預防70%以上HPV感染。',
    sections:[
      {heading:'重點',format:'table',table:TABLE},
      {heading:'男生接種',format:'bullets',items:[
        '預防口咽癌、肛門癌、生殖器癌。',
        '首年男生第一劑接種率81.6%（媒體報導）。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '留意學校通知、錯過補接種。',
        '女性仍定期抹片。'
      ]}
    ],
    think_tank_view:'HPV疫苗男女都需要，接種後女性仍要定期篩檢。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資格引自衛福部，接種率標明為媒體報導，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為重點、男生、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['接種率出處']},
    decision_points:[DP_RATE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'HPV 感染與疫苗', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'國中男女都能公費打 HPV 疫苗', primary_visual:'81.6%', secondary_message:'HPV 不只是女生的事', action_priority:'留意學校通知、女性定期抹片'},
    headline_hook:'男生也要打？', headline_main:'HPV 疫苗重點一次看', title_accent:'HPV 疫苗',
    hero_message:'男孩女孩都能打', hero_support:'2025 年 9 月起公費擴大至國中男女',
    knowledge_title:'疫苗重點', knowledge_note:'接種後，女性成年仍要**定期抹片**',
    knowledge_cards:[
      {label:'公費對象', icon:'people', lines:['113 年入學','全體國中生']},
      {label:'接種劑次', icon:'shield', lines:['15 歲以下 2 劑','間隔 6 個月以上']},
      {label:'保護效果', icon:'shield', lines:['預防 7 成以上','HPV 感染']},
      {label:'男生預防', icon:'check', lines:['口咽、肛門','生殖器癌']}
    ],
    primary_stat:{value:'81.6%', label:'首年男生第一劑接種率', note:'2026 年 8 月媒體報導｜女生 91.9%'},
    secondary_stats:[
      {value:'至少 10 年', label:'完整接種保護力'},
      {value:'東亞第一', label:'男生公費 2 劑'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'看', text:'留意學校 HPV 疫苗接種通知'},
      {key:'補', text:'錯過可持補接種單到合約院所'},
      {key:'抹', text:'女性 25 歲以上定期抹片'},
      {key:'問', text:'非公費對象自費前先問醫師'}
    ],
    carousel_suggestion:{reason:'若想把疫苗、男生接種與篩檢分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'HPV 是什麼？', headline_main:'不只是女生的事'},
      {layout_type:'data', headline_hook:'首年接種率', headline_main:'男生 81.6%'},
      {layout_type:'action', headline_hook:'打完疫苗', headline_main:'女性仍要定期抹片'}]},
    hashtags:['HPV','HPV疫苗','人類乳突病毒','子宮頸癌'],
    sources:['衛生福利部','健康醫療網'],
    illustration_category:'virus-infection',
    illustration:{topic:'HPV 疫苗接種', audience:'國中生與家長', scene:'校園保健室裡，一位國中男生和一位國中女生排隊準備接種疫苗，護理師微笑說明',
      emotion:'安心、輕鬆', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'In a school health room, a middle-school boy and girl lining up for a vaccination while a nurse smiles and explains, reassuring and relaxed mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['公費HPV疫苗擴大（衛福部2025-08）','首年接種率（媒體報導）'],
      layout_reason:'核心是疫苗資格與男生接種，選 knowledge：4 張重點卡當主角，接種率放主數字並標出處。',
      tone:'專業易懂', tone_reason:'資格需清楚。',
      to_verify:['接種率為媒體報導']},
    decision_points:[Object.assign({}, DP_RATE, {current:'81.6%｜首年男生第一劑（媒體報導）'})],
    content_check_note:'資格與保護力引自衛福部，接種率標明為媒體報導，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'HPV 感染與疫苗',
    collect:{
      summary:'衛福部2025年9月起將公費HPV疫苗擴大至國中男生，台灣成為東亞第一個提供男生完整2劑公費HPV疫苗的國家，首年接種率男生逾8成、女生逾9成；「HPV不只是女生的事」是第2年接種季的溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'首年男生第一劑接種率81.6%：據2026年8月媒體報導，公費HPV疫苗首年約21.3萬名國中生受惠，女生接種率91.9%（未註明統計截止日）。',tag:'市場觀察',source:{name:'健康醫療網／鏡週刊：東亞第一推HPV疫苗男女公費接種',url:'https://www.mirrormedia.mg/external/healthnews_69585'}},
        {item:'年度趨勢方向',desc:'70%以上HPV感染可預防：衛福部說明九價HPV疫苗涵蓋9種型別，完整接種保護力至少10年，15歲以下接種2劑、間隔6個月以上。',tag:'官方統計',source:{name:'衛生福利部：男孩女孩齊接種 HPV遠離我',url:'https://mohw.gov.tw/cp-7175-83470-1.html'}},
        {item:'政策動向',desc:'2025年9月起公費擴大至國中男女：113年入學全體國中生可於校園集中接種，台灣為東亞第一個提供男生完整2劑公費HPV疫苗的國家。',tag:'官方統計',source:{name:'衛生福利部：男孩女孩齊接種 HPV遠離我',url:'https://mohw.gov.tw/cp-7175-83470-1.html'}},
        {item:'好發族群年齡層',desc:'88.0%肛門癌與HPV有關：醫學會理事長引述衛福部資料，子宮頸癌100%、肛門癌88.0%、陰莖癌50.0%、口咽癌30.8%與HPV相關。',tag:'市場觀察',source:{name:'健康醫療網／鏡週刊：東亞第一推HPV疫苗男女公費接種',url:'https://www.mirrormedia.mg/external/healthnews_69585'}}
      ],
      product_view:['機會：HPV疫苗與篩檢屬預防醫學，適合結合家庭健康管理與接種提醒服務。','機會：可延伸說明HPV相關癌症（子宮頸、口咽）的保障需求。','風險：HPV涉及性傳染議題，避免汙名化或暗示接種與否影響核保。'],
      marketing_view:['機會：9月開學接種季是溝通時機，家長是主要對象。','機會：「男生也要打」是新議題，能破除迷思。','風險：避免以「性」相關話題引起家長反感，宜聚焦「預防癌症」。'],
      alert_level:'medium',
      alert_reason:'公費擴大至男生進入第2年，學校接種季具時效溝通價值。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('首年男生第一劑接種率突破81.6%、女生91.9%','SOURCE_EVIDENCE','secondary_citation',
          '接種率出自媒體報導，未附國健署原始公告與統計截止日；另有報導數字不同。','medium','yes',
          '國健署公費HPV疫苗首年接種率公告。','yes','confirm','屬媒體報導。',
          null,['首年男生第一劑接種率81.6%（媒體報導）']),
        F('子宮頸癌100%、肛門癌88.0%、陰莖癌50.0%、口咽癌30.8%與HPV有關','SOURCE_EVIDENCE','secondary_citation',
          '歸因比例為醫學會理事長引述「衛福部資料」，未附原始資料與年份。','medium','yes',
          '衛福部或國健署HPV相關癌症歸因比例原始資料。','no','confirm','屬二手引述。',
          null,['肛門癌約88%、口咽癌約3成和HPV有關']),
        F('可預防70%以上HPV感染','MEDICAL_INTERPRETATION','vaccine_scope',
          '「70%以上」指感染型別的涵蓋，讀者可能理解為可預防70%以上的HPV相關癌症；且未提醒須在感染前接種效果最好。','low','no',
          null,'no','clarify','數字引自衛福部。',
          '可預防70%以上HPV感染（在尚未感染前接種效果最好）',['預防 7 成以上']),
        F('男生女生都打，大家都更安全','MEDICAL_INTERPRETATION','oversimplification',
          '群體保護的說法方向正確，但「大家都更安全」較籠統，未說明是減少病毒傳播。','low','no',
          null,'no','clarify','屬表達方式調整。',
          '男生女生都打，可減少病毒在族群中傳播')
      ],
      card:[
        F('首年男生第一劑接種率','SOURCE_EVIDENCE','secondary_citation',
          '主數字為媒體報導，未附官方出處。','medium','yes',
          '國健署原始公告。','yes','confirm','屬媒體報導。',
          null),
        F('預防 7 成以上','MEDICAL_INTERPRETATION','vaccine_scope',
          '卡面未說明是預防「感染」，可能被誤讀為預防7成癌症。','low','no',
          null,'no','clarify','數字引自衛福部。',
          null)
      ]
    },
    title_alts:[
      'HPV不只是女生的事：國中男女公費疫苗，預防多種HPV相關癌症',
      '兒子也要打HPV疫苗？國中男女都能免費打',
      'HPV疫苗接種重點：資格、劑次與接種後的篩檢'
    ],
    card_title_alts:[
      ['男生也要打？','HPV 疫苗重點一次看'],
      ['男孩女孩都能打','公費 HPV 疫苗'],
      ['打完疫苗','女性仍要定期抹片']
    ],
    data_addon:[
      '衛福部：HPV高危險型為第16、18、52、58型。',
      '據報導，公費HPV疫苗首年約21.3萬名國中生受惠。',
      '女性25-29歲每3年1次、30歲以上每年1次公費抹片，35、45、65歲提供HPV檢測。'
    ],
    cta:'家中有國中生的話，這學期留意學校的HPV疫苗通知單，和孩子一起聊聊為什麼要打。'
  });
})();
