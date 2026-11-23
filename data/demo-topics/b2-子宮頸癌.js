/* v6 示範主題：子宮頸癌（B2 癌症）
   查證日期：2026-11-20。數據來源：衛福部112年癌症登記報告新聞稿（2025-12-30，篩檢資格與效益、女性十大癌症排名）、衛福部114年死因統計摘要表（子宮頸癌死亡時間序列）、
   衛福部2025-08-12 HPV疫苗擴大接種新聞稿、健康醫療網／鏡週刊2026-08-31（首年接種率，媒體報導）。
   112年癌登附表未列子宮頸癌新發人數（非十大），故文中不寫新發人數。
   參考方向：健康智庫〈女性腫瘤與癌症－子宮頸癌〉2026/03。 */
(function(){
  const REFS = [
    {title:'公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-84987-1.html'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'112年國人癌症時鐘再快轉！肺癌連3年居首 每3分48秒一人罹癌',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/cancer/360004'},
    {title:'男孩女孩齊接種 HPV遠離我 公費人類乳突病毒（HPV）疫苗擴大施打',source:'衛生福利部',url:'https://mohw.gov.tw/cp-7175-83470-1.html'},
    {title:'東亞第一推HPV疫苗男女公費接種 首年男生接種率突破81.6%',source:'健康醫療網／鏡週刊',url:'https://www.mirrormedia.mg/external/healthnews_69585'}
  ];
  const TABLE = {headers:['對象','公費服務'], rows:[
    ['25-29歲女性','每3年1次子宮頸抹片檢查'],
    ['30歲以上女性','每年1次子宮頸抹片檢查（建議至少每3年1次）'],
    ['35、45、65歲女性','提供HPV檢測'],
    ['國中生（男女）','自2025年9月起公費接種HPV疫苗，15歲以下接種2劑、間隔6個月以上']
  ]};
  const TAGS = ['子宮頸癌','子宮頸抹片','HPV疫苗','HPV檢測','女性健康'];

  const DP_RATE = {id:'dp-cc-vaccine-rate', type:'data_version', title:'HPV疫苗接種率的來源',
    desc:'首年男生第一劑81.6%、女生91.9%出自2026年8月健康醫療網報導，文中未註明統計截止日與官方出處；2025年12月另有報導寫男生約79%、女生91%。AI 未找到國健署原始公告，因此在文中標示為媒體報導。',
    current:'男生81.6%、女生91.9%（2026年8月媒體報導，首年第一劑）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'81.6%／91.9%', value:'首年第一劑', note:'健康醫療網2026-08-31（目前採用）'},
      {label:'約79%／91%', value:'截至2025年11月底', note:'聯合報2025年12月報導'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'子宮頸癌可以預防：抹片＋HPV檢測＋疫苗，三道防線一次看',
    update_date:'2026/11/20',
    intro:'子宮頸癌與人類乳突病毒（HPV）持續感染密切相關，是少數能透過篩檢與疫苗有效預防的癌症。依衛生福利部114年死因統計，子宮頸癌死亡625人，年齡標準化死亡率由105年每十萬人3.4降至2.6；112年癌症登記中，子宮頸癌居女性癌症發生第10位，標準化發生率呈下降趨勢。衛福部指出，定期接受子宮頸抹片檢查可降低約70%的子宮頸癌死亡率。',
    sections:[
      {heading:'公費篩檢與疫苗怎麼用',format:'table',table:TABLE},
      {heading:'為什麼篩檢與疫苗都要做',format:'bullets',items:[
        '抹片能發現癌前病變，在演變成癌症前處理；HPV檢測則能找出高危險型病毒持續感染的族群。',
        '衛福部說明，HPV疫苗可預防70%以上HPV感染，完整接種保護力至少10年；高危險型包括第16、18、52、58型。',
        '接種過疫苗仍無法涵蓋所有致癌型別，成年後仍應依建議定期接受子宮頸癌篩檢。'
      ]},
      {heading:'這樣做最安心',format:'bullets',items:[
        '25歲以上女性依資格定期做抹片，可用健保快易通APP查詢上次檢查時間。',
        '收到HPV檢測通知（35、45、65歲）時把握受檢。',
        '異常出血、性行為後出血或分泌物異常，應盡快就醫，不必等篩檢。',
        '家中有國中生，留意學校HPV疫苗接種通知，錯過可依補接種通知單到合約院所接種。'
      ]}
    ],
    think_tank_view:'子宮頸癌從感染到癌症通常要經過多年，這段時間正是抹片、HPV檢測與疫苗發揮作用的地方。媽媽定期抹片、孩子按時接種疫苗，一家人一起把這三道防線補齊，就是最實在的預防。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數與標準化死亡率引自衛福部114年死因統計，篩檢資格與效益引自衛福部112年癌登新聞稿，疫苗資訊引自衛福部2025年新聞稿，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['114年子宮頸癌死亡625人、標準化死亡率2.6（死因統計）','篩檢資格與70%效益（衛福部112年癌登新聞稿）','HPV疫苗擴大至國中男女（衛福部2025-08）'],
      layout_reason:'先用表格整理篩檢與疫苗的公費資格，再說明三者如何互補，最後給具體行動。',
      tone:'專業易懂', tone_reason:'篩檢資格需要精確年齡與頻率。',
      to_verify:['112年子宮頸癌新發人數不在十大癌症附表，需查癌登年報全文','接種率為媒體報導']},
    decision_points:[DP_RATE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'媽媽做抹片、孩子打疫苗：一起擋下子宮頸癌',
    update_date:'2026/11/20',
    intro:'子宮頸癌大多和HPV病毒長期感染有關，好消息是，它是少數可以靠篩檢和疫苗預防的癌症。衛福部統計，114年有625位女性因子宮頸癌過世，死亡率比十年前下降不少；衛福部也指出，定期做抹片可以降低約70%的子宮頸癌死亡率。',
    sections:[
      {heading:'免費篩檢和疫苗，看看你能用哪些',format:'table',table:TABLE},
      {heading:'為什麼抹片和疫苗都要？',format:'bullets',items:[
        '抹片可以在變成癌症前就找到異常細胞，及早處理。',
        '衛福部說，HPV疫苗可以預防70%以上的HPV感染，保護力至少10年。',
        '打過疫苗也不代表百分之百安全，長大後還是要定期做抹片。'
      ]},
      {heading:'全家一起這樣做',format:'bullets',items:[
        '25歲以上的姊妹，打開健保快易通APP看看上次抹片是什麼時候。',
        '35、45、65歲收到HPV檢測通知，記得去做。',
        '不正常出血或分泌物變多，別等，直接去看醫生。',
        '家裡有國中生，男生女生都可以打公費HPV疫苗，注意學校通知。'
      ]}
    ],
    think_tank_view:'很多媽媽會記得帶孩子打疫苗，卻忘了自己的抹片。這次孩子在學校打HPV疫苗時，也順便幫自己約一次抹片吧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以親子情境帶出篩檢與疫苗的互補。', tone:'生活親切', tone_reason:'給媽媽與家長閱讀。', to_verify:['接種率為媒體報導']},
    decision_points:[DP_RATE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'子宮頸癌：抹片、HPV檢測、疫苗三道防線',
    update_date:'2026/11/20',
    intro:'114年子宮頸癌死亡625人，標準化死亡率十年由3.4降至2.6。定期抹片可降低約70%死亡率。',
    sections:[
      {heading:'公費資格',format:'table',table:TABLE},
      {heading:'重點',format:'bullets',items:[
        'HPV疫苗可預防70%以上HPV感染。',
        '接種後仍須定期抹片。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '25歲以上定期抹片。',
        '異常出血立即就醫。'
      ]}
    ],
    think_tank_view:'抹片、HPV檢測與疫苗互補，是預防子宮頸癌的完整策略。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為資格、重點、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['70%為群體層次效益']},
    decision_points:[DP_RATE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'子宮頸癌', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'子宮頸癌可以預防', primary_visual:'約 70%', secondary_message:'定期抹片可降低約 70% 死亡率', action_priority:'抹片、HPV 檢測、疫苗'},
    headline_hook:'子宮頸癌可以預防', headline_main:'公費篩檢與疫苗一次看', title_accent:'篩檢與疫苗',
    hero_message:'三道防線', hero_support:'抹片＋HPV 檢測＋疫苗',
    knowledge_title:'公費資格', knowledge_note:'接種疫苗後，成年仍要**定期抹片**',
    knowledge_cards:[
      {label:'25–29 歲', icon:'search', lines:['抹片','每 3 年 1 次']},
      {label:'30 歲以上', icon:'search', lines:['抹片每年 1 次','至少每 3 年 1 次']},
      {label:'35、45、65 歲', icon:'report', lines:['HPV 檢測']},
      {label:'國中生', icon:'shield', lines:['男女公費 HPV 疫苗','2 劑、間隔 6 個月']}
    ],
    primary_stat:{value:'約 70%', label:'定期抹片可降低子宮頸癌死亡率', note:'衛福部 112 年癌症登記新聞稿'},
    secondary_stats:[
      {value:'625 人', label:'114 年子宮頸癌死亡'},
      {value:'3.4→2.6', label:'標準化死亡率（十年）'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'抹', text:'25 歲以上依資格定期抹片'},
      {key:'檢', text:'35、45、65 歲把握 HPV 檢測'},
      {key:'苗', text:'國中生留意學校 HPV 疫苗通知'},
      {key:'醫', text:'異常出血盡快就醫'}
    ],
    carousel_suggestion:{reason:'若想把篩檢、疫苗與症狀分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'子宮頸癌可以預防', headline_main:'公費篩檢資格'},
      {layout_type:'knowledge', headline_hook:'男孩女孩都能打', headline_main:'公費 HPV 疫苗'},
      {layout_type:'data', headline_hook:'死亡率下降', headline_main:'十年 3.4 → 2.6'}]},
    hashtags:['子宮頸癌','子宮頸抹片','HPV疫苗','女性健康'],
    sources:['衛生福利部','衛生福利部國民健康署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'子宮頸癌預防', audience:'媽媽與國中生子女', scene:'媽媽拿著抹片預約單，國中生孩子拿著學校疫苗接種通知，兩人相視微笑',
      emotion:'安心、互相提醒', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A mother holding a Pap smear appointment slip and her teenage child holding a school vaccination notice, smiling at each other, reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['篩檢資格與70%效益（衛福部112年癌登新聞稿）','HPV疫苗擴大（衛福部2025-08）'],
      layout_reason:'核心是「各年齡能用哪些公費服務」，選 knowledge：4 張資格卡當主角，死亡數據退到下方。',
      tone:'專業易懂', tone_reason:'資格需清楚。',
      to_verify:['70%為群體層次效益']},
    decision_points:[Object.assign({}, DP_RATE, {current:'首年第一劑男 81.6%、女 91.9%（媒體報導）'})],
    content_check_note:'篩檢資格與效益引自衛福部，死亡數據引自114年死因統計，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'子宮頸癌',
    collect:{
      summary:'子宮頸癌標準化死亡率十年下降、居女性癌症發生第10位，是少數可由抹片、HPV檢測與疫苗預防的癌症；2025年9月起公費HPV疫苗擴大至國中男女，是兼具政策時機與家庭溝通價值的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'2025年子宮頸癌死亡625人：依114年死因統計，子宮頸及部位未明示子宮癌死亡625人，居女性癌症死因第8位，112年癌症登記中居女性癌症發生第10位。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'年度趨勢方向',desc:'標準化死亡率十年下降約24%：子宮頸癌年齡標準化死亡率由2016年每十萬人3.4降至2025年2.6，國健署指出其發生率亦呈下降趨勢。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'2025年9月起公費HPV疫苗擴大至國中男女：衛福部宣布113年入學全體國中生（含男生）可公費接種，台灣成為東亞第一個提供男生完整2劑公費HPV疫苗的國家。',tag:'官方統計',source:{name:'衛生福利部：男孩女孩齊接種 HPV遠離我',url:'https://mohw.gov.tw/cp-7175-83470-1.html'}},
        {item:'好發族群年齡層',desc:'定期抹片可降低約70%死亡率：公費抹片對象為25-29歲每3年1次、30歲以上每年1次，並於35、45、65歲提供HPV檢測。',tag:'官方統計',source:{name:'衛生福利部：公布112年國人癌症登記資料分析結果',url:'https://mohw.gov.tw/cp-16-84987-1.html'}}
      ],
      product_view:['機會：子宮頸癌與癌前病變的治療（錐狀切除、手術）可作為女性癌症保障的溝通情境。','機會：抹片提醒、HPV疫苗接種提醒適合結合家庭健康管理服務。','風險：HPV涉及性傳染議題，溝通時避免汙名化，也不得將篩檢或疫苗接種與核保連動。'],
      marketing_view:['機會：「媽媽抹片、孩子疫苗」適合親子共同溝通，學校接種季（9月）是時機點。','機會：男生納入公費疫苗是新議題，可破除「HPV只與女性有關」的迷思。','風險：避免暗示接種疫苗後就不必篩檢。'],
      alert_level:'medium',
      alert_reason:'公費HPV疫苗擴大至男生後進入第2年，學校接種季為重點溝通期，篩檢則適合長期溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('定期接受子宮頸抹片檢查可降低約70%的子宮頸癌死亡率','MEDICAL_INTERPRETATION','population_benefit_as_individual',
          '約70%是群體層次的效益，讀者可能理解為個人做抹片就能降低70%死亡風險。','medium','no',
          null,'no','clarify','數據引自衛福部。',
          '定期接受子宮頸抹片檢查，在群體層次可降低約70%的子宮頸癌死亡率',['定期做抹片可以降低約70%的子宮頸癌死亡率','定期抹片可降低約70%死亡率']),
        F('子宮頸癌居女性癌症發生第10位，標準化發生率呈下降趨勢','SOURCE_EVIDENCE','figure_without_count',
          '只寫排名與趨勢，沒有新發人數與標準化發生率數值，讀者無法掌握規模；112年附表未列子宮頸癌人數，需查癌登年報全文補上。','low','yes',
          '112年癌症登記年報子宮頸癌新發人數與標準化發生率。','no','confirm','排名引自衛福部新聞稿。',
          null),
        F('HPV疫苗可預防70%以上HPV感染','MEDICAL_INTERPRETATION','vaccine_scope',
          '「70%以上」的對象是HPV感染型別，讀者可能理解為疫苗能預防70%的子宮頸癌；也未說明須在感染前接種效果最好。','low','no',
          null,'no','clarify','數字引自衛福部新聞稿。',
          'HPV疫苗可預防70%以上的HPV感染（在尚未感染前接種效果最好）',['HPV疫苗可以預防70%以上的HPV感染']),
        F('男生女生都可以打公費HPV疫苗','CONTEXT_CONSISTENCY','eligibility_overgeneralized',
          '公費對象是特定入學年度的國中生，並非所有國中生或所有男生女生；說法過廣，家長可能誤以為任何年齡都能公費接種。','medium','no',
          null,'no','clarify','資格引自衛福部，屬適用對象說明。',
          '國中生依入學年度可公費接種HPV疫苗，男生女生都包含')
      ],
      card:[
        F('定期抹片可降低子宮頸癌死亡率','MEDICAL_INTERPRETATION','population_benefit_as_individual',
          '主數字「約 70%」為群體效益，卡面未說明。','medium','no',
          null,'no','clarify','數據引自衛福部。',
          '定期抹片可降低群體子宮頸癌死亡率'),
        F('男女公費 HPV 疫苗','CONTEXT_CONSISTENCY','eligibility_overgeneralized',
          '未註明是特定入學年度的國中生，讀者可能以為所有國中生都適用。','low','no',
          null,'no','clarify','資格引自衛福部。',
          '依入學年度公費接種')
      ]
    },
    title_alts:[
      '子宮頸癌可以預防：抹片＋HPV檢測＋疫苗，三道防線一次看',
      '媽媽做抹片、孩子打疫苗：一起擋下子宮頸癌',
      '25歲起定期抹片：子宮頸癌公費篩檢與HPV疫苗資格'
    ],
    card_title_alts:[
      ['子宮頸癌可以預防','公費篩檢與疫苗一次看'],
      ['媽媽抹片、孩子疫苗','一起擋下子宮頸癌'],
      ['25 歲起','定期做抹片']
    ],
    data_addon:[
      '子宮頸癌死亡人數由2016年667人降至2025年625人。',
      '衛福部：HPV高危險型為第16、18、52、58型，完整接種保護力至少10年。',
      '據2026年8月媒體報導，首年公費HPV疫苗男生第一劑接種率81.6%、女生91.9%。'
    ],
    cta:'今天就打開健保快易通APP，查一下自己或媽媽上次做抹片的時間，超過就預約這個月受檢。'
  });
})();
