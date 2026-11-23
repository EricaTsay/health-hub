/* v6 示範主題：心肌梗塞（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計（2026-06-22 公布）與摘要表、國健署衛教新聞與闢謠。
   參考方向：健康智庫〈心肌梗塞（Myocardial Infarction, MI）〉2026/04/13。 */
(function(){
  const REFS = [
    {title:'國人死亡人數連續3年下降 十大死因中6項死因人數、死亡率都減少（114年死因統計）',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'},
    {title:'預防三高 降低心肌梗塞風險',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=17931'},
    {title:'心血管疾病發作時，應大聲咳嗽才能救命？',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=127&pid=11946'},
    {title:'中年男天冷泡澡險猝死！醫示警「心梗4症狀」 每年1.7萬人中鏢',source:'TVBS新聞網',url:'https://news.tvbs.com.tw/health/2751133'}
  ];
  const TABLE = {headers:['警訊','常見表現'], rows:[
    ['胸痛、胸悶','左前胸疼痛或緊縮感，可能延伸到左肩、頸部、下巴或左手臂'],
    ['呼吸困難','喘不過氣，休息時仍覺得呼吸短促'],
    ['冒冷汗、噁心','臉色蒼白、冒冷汗，可能伴隨噁心、嘔吐或頭暈']
  ]};
  const TAGS = ['心肌梗塞','心血管疾病','胸痛','急救119','三高'];

  const DP_CLOCK = {id:'dp-mi-clock', type:'data_version', title:'「每幾分鐘 1 人」有兩種說法',
    desc:'國健署衛教文宣常用「每22分鐘1人死於心臟病」；依114年死因統計的2萬2,907人換算，約為每23分鐘1人。兩者來源與年份不同，AI 沒有替你決定要沿用哪一個。',
    current:'約每23分鐘1人（依114年死因統計換算）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約每23分鐘', value:'114年死因統計換算', note:'2萬2,907人 ÷ 全年分鐘數（目前採用）'},
      {label:'每22分鐘', value:'國健署衛教文宣', note:'較早年份的心臟病死亡人數，文宣沿用'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'心肌梗塞警訊有哪些？胸痛冒冷汗別硬撐，立刻打119',
    update_date:'2026/11/20',
    intro:'依衛生福利部114年死因統計，心臟疾病全年奪走2萬2,907條生命，平均約每23分鐘就有1人死於心臟疾病，仍居國人十大死因第2位。其中，急性心肌梗塞發作突然、與時間賽跑，據台灣心肌梗塞學會引述衛福部統計，每年約有1萬7千人罹患心肌梗塞。本文整理心肌梗塞的警訊、高風險族群，以及發作時該怎麼做。',
    sections:[
      {heading:'心肌梗塞的3大警訊',format:'table',table:TABLE},
      {heading:'哪些人風險較高',format:'bullets',items:[
        '三高族群：國健署分析，有高血壓、高血糖與高血脂者，後續罹患心血管疾病的風險分別為1.8、1.5及1.4倍。',
        '高血脂常被忽略：20歲以上國人高血脂盛行率高達4成，但自述曾經醫師診斷者僅約2成。',
        '吸菸、肥胖、缺乏運動，以及有心血管家族史者，都會增加血管阻塞的風險。'
      ]},
      {heading:'發作時與日常預防',format:'bullets',items:[
        '出現警訊時立即撥打119，由救護人員送醫，爭取打通阻塞冠狀動脈的黃金時間；不要自行開車就醫。',
        '大力咳嗽、拍打手肘內彎等民間自救法沒有科學實證，不應採用。',
        '採「少油、少鹽、少糖及高纖」飲食原則，搭配規律有氧運動，並戒菸。',
        '定期健康檢查，並可利用國健署「慢性疾病風險評估平台」估算冠心病風險。'
      ]}
    ],
    think_tank_view:'心肌梗塞的關鍵是「認得警訊、搶時間」。多數風險因子如三高、吸菸，都能在平時被發現與控制；真正發作時，第一時間撥打119比任何偏方都重要。建議把家人的三高數值與警訊口訣放在一起，讓照顧從平常做起。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數與排名引自衛福部114年死因統計並標明年份，「每年約1萬7千人」標明為學會引述，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['沿用步驟1洞察：心臟疾病114年死亡2萬2,907人、居死因第2位（衛福部死因統計）','三高風險倍數取自國健署2018年三高追蹤分析'],
      layout_reason:'先用表格讓讀者對照3大警訊，再說明高風險族群，最後給發作時與日常的具體做法，依「認得→評估自己→行動」排序。',
      tone:'專業易懂', tone_reason:'急症衛教需要精確、可對照的資訊，避免恐嚇。',
      to_verify:['「每年約1萬7千人」為學會引述衛福部112年統計，原始統計表待查','三高風險倍數為2018年分析，是否有更新版本']},
    decision_points:[DP_CLOCK]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'胸口像被石頭壓住？認識心肌梗塞，這時候一定要打119',
    update_date:'2026/11/20',
    intro:'心臟疾病一直是國人十大死因第2名，依114年死因統計，平均約每23分鐘就有1人死於心臟疾病。心肌梗塞來得又急又快，據台灣心肌梗塞學會引述衛福部統計，每年約有1萬7千人罹患心肌梗塞。別擔心，只要認得警訊、知道怎麼做，就能替自己和家人多爭取一分機會。',
    sections:[
      {heading:'這3種不舒服，要特別留意',format:'table',table:TABLE},
      {heading:'我是高風險族群嗎？',format:'bullets',items:[
        '有三高的人要多注意：國健署分析，有高血壓、高血糖與高血脂者，後續罹患心血管疾病的風險分別為1.8、1.5及1.4倍。',
        '高血脂常常沒感覺，20歲以上每10人約有4人血脂偏高，但其中只有約2成曾經被醫師診斷過。',
        '有抽菸、體重過重、很少運動，或家人有心臟病史，也要多留心。'
      ]},
      {heading:'真的發作了，怎麼辦？',format:'bullets',items:[
        '立刻打119，讓救護人員送醫，爭取打通血管的黃金時間；千萬別自己開車去醫院。',
        '網路流傳的大力咳嗽、拍手肘都沒有科學根據，別浪費寶貴時間。',
        '平常吃得少油、少鹽、少糖、多纖維，養成運動習慣，菸能戒就戒。',
        '定期健檢，也可以上國健署「慢性疾病風險評估平台」算算自己的風險。'
      ]}
    ],
    think_tank_view:'心肌梗塞最怕的是「忍一下就好」。平常把三高顧好、把菸戒掉，真的出現胸痛冒冷汗時別猶豫，馬上打119。也建議和家人一起記住這3個警訊，緊要關頭才知道怎麼互相照應。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部死因統計與國健署公開資料並標明年份，語氣親切但未淡化急症風險，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以生活化的問句帶出警訊、自我評估與行動。', tone:'生活親切', tone_reason:'給家人與一般民眾閱讀，降低距離感。', to_verify:['「每年約1萬7千人」原始統計表待查']},
    decision_points:[DP_CLOCK]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'心肌梗塞：3大警訊＋發作時3件事',
    update_date:'2026/11/20',
    intro:'依114年死因統計，平均約每23分鐘就有1人死於心臟疾病。據台灣心肌梗塞學會引述衛福部統計，每年約有1萬7千人罹患心肌梗塞，認得警訊、立刻撥打119是關鍵。',
    sections:[
      {heading:'3大警訊',format:'table',table:TABLE},
      {heading:'高風險族群',format:'bullets',items:[
        '有高血壓、高血糖與高血脂者，後續罹患心血管疾病的風險分別為1.8、1.5及1.4倍。',
        '吸菸、肥胖、缺乏運動、心血管家族史。'
      ]},
      {heading:'發作時這樣做',format:'bullets',items:[
        '立即撥打119，勿自行開車。',
        '不採用咳嗽、拍手肘等無實證偏方。',
        '平日少油少鹽少糖、規律運動、戒菸、定期健檢。'
      ]}
    ],
    think_tank_view:'認得警訊、立刻撥打119，是面對心肌梗塞最重要的兩件事；平日控制三高、戒菸，則是降低風險的根本。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部死因統計與國健署公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊、族群、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['「每年約1萬7千人」原始統計表待查']},
    decision_points:[DP_CLOCK]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'心肌梗塞', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'約每 23 分鐘 1 人死於心臟疾病', primary_visual:'約 2.3 萬人', secondary_message:'出現警訊立刻撥打 119', action_priority:'認得警訊、控制三高'},
    headline_hook:'胸痛冒冷汗別硬撐', headline_main:'心肌梗塞 3 大警訊一次看', title_accent:'3 大警訊',
    hero_message:'約每 23 分鐘 1 人', hero_support:'死於心臟疾病（114 年死因統計換算）',
    knowledge_title:'3 大警訊', knowledge_note:'出現警訊，**立即撥打 119**',
    knowledge_cards:[
      {label:'胸痛、胸悶', icon:'heart', lines:['左前胸疼痛或緊縮','可延伸到肩頸、左臂']},
      {label:'呼吸困難', icon:'pressure', lines:['喘不過氣','休息時仍呼吸短促']},
      {label:'冒冷汗、噁心', icon:'check', lines:['臉色蒼白、冒冷汗','可能噁心、嘔吐、頭暈']}
    ],
    primary_stat:{value:'約 2.3 萬人', label:'114 年心臟疾病死亡人數', note:'衛福部死因統計：2萬2,907人｜居死因第 2 位'},
    secondary_stats:[
      {value:'1.8 倍', label:'高血壓者心血管風險'},
      {value:'約 4 成', label:'20 歲以上高血脂盛行率'}
    ],
    action_title:'平日這樣做',
    action_cards:[
      {key:'急', text:'出現警訊立即撥打 119，勿自行開車'},
      {key:'吃', text:'少油、少鹽、少糖及高纖'},
      {key:'戒', text:'戒菸，搭配規律有氧運動'},
      {key:'檢', text:'定期健檢，評估冠心病風險'}
    ],
    carousel_suggestion:{reason:'若想把警訊、風險與急救分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'心肌梗塞警訊', headline_main:'這 3 種不舒服要留意'},
      {layout_type:'data', headline_hook:'三高與心臟', headline_main:'高血壓者風險 1.8 倍'},
      {layout_type:'action', headline_hook:'發作時怎麼辦', headline_main:'立即撥打 119'}]},
    hashtags:['心肌梗塞','心血管疾病','急救119','三高'],
    sources:['衛生福利部','衛生福利部國民健康署'],
    illustration_category:'heart',
    illustration:{topic:'心肌梗塞', audience:'中壯年與家人', scene:'一位中年男性手按胸口，家人在旁拿起手機撥打急救電話',
      emotion:'警覺但冷靜', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged man holding his chest while a family member calls for emergency help on a phone, calm and alert, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：心臟疾病114年死亡2萬2,907人（衛福部）','三高風險倍數與高血脂盛行率取自國健署'],
      layout_reason:'核心是「認得警訊、立刻行動」，選 knowledge：3 大警訊放在中段當主角，死亡人數與三高風險退到下方，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'急症資訊需清楚、可對照，避免恐嚇。',
      to_verify:['「約每 23 分鐘 1 人」為依死亡人數換算，與國健署文宣「每22分鐘」不同']},
    decision_points:[Object.assign({}, DP_CLOCK, {current:'約每 23 分鐘 1 人（依114年死因統計換算）'})],
    content_check_note:'死亡人數與排名引自衛福部114年死因統計，風險倍數標明國健署分析，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'心肌梗塞',
    collect:{
      summary:'心臟疾病仍居國人十大死因第2位，2025年死亡人數雖較前一年下降，急性心肌梗塞發作突然、與時間賽跑，「認得警訊、立即撥打119」是值得長期溝通的健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'心臟疾病年死亡約2.3萬人：依2025年（114年）死因統計，心臟疾病（高血壓性疾病除外）死亡2萬2,907人（男性約占59%），死亡率每十萬人口98.1人，占全部死亡11.5%，換算約每23分鐘1人。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'年度趨勢方向',desc:'死亡人數減少1.6%、但仍居十大死因第2位：2025年心臟疾病死亡人數較2024年（2萬3,276人）下降，死亡率與標準化死亡率同步下降。',tag:'官方統計',source:{name:'衛生福利部：國人死亡人數連續3年下降 十大死因中6項死因人數、死亡率都減少',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'政策動向',desc:'2026年3月衛福部與台灣心肌梗塞學會推動「門診戒菸」，把戒菸納入心血管疾病照護，讓防治從治療往預防推進。',tag:'官方統計',source:{name:'衛生福利部：預防勝治療 推動戒菸強化心血管防治力',url:'https://mohw.gov.tw/cp-16-85729-1.html'}},
        {item:'好發族群年齡層',desc:'高血壓者後續心血管疾病風險1.8倍：國健署2018年三高追蹤分析，有高血壓、高血糖與高血脂者，後續罹患心血管疾病的風險分別為1.8、1.5及1.4倍，三高族群為核心風險族群。',tag:'官方統計',source:{name:'衛生福利部國民健康署：預防三高 降低心肌梗塞風險',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=17931'}}
      ],
      product_view:['機會：心肌梗塞屬重大疾病常見給付項目，可搭配急性期治療（心導管、支架、繞道手術）的保障說明，協助保戶理解自身保障缺口。','機會：三高與吸菸是主要可控風險，適合結合健康管理服務（血壓、血脂追蹤、戒菸支持），強化預防型價值。','風險：溝通時避免把「健康管理服務」暗示為可降低發病或保證理賠，須依保單條款如實說明。'],
      marketing_view:['機會：秋冬溫差大是心血管事件的常見溝通時點，可用「認得警訊、立刻打119」作為衛教主軸，降低銷售感。','機會：男性占心臟疾病死亡近6成，中壯年男性是核心溝通對象；子女世代可作為提醒父母的切入點。','風險：急症題材容易流於恐懼訴求，宜以具體行動（警訊、119、控制三高）收尾。'],
      alert_level:'medium',
      alert_reason:'屬長年重點疾病，秋冬溫差大時特別適合溝通；無單一時效性政策事件，適合納入年度溝通規劃。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('每年約有1萬7千人罹患心肌梗塞','SOURCE_EVIDENCE','secondary_citation',
          '文中已註明是學會引述衛福部統計，但沒寫資料年份（112年）；且衛福部本身未公布這個數字，目前只能從媒體報導學會記者會查到。','medium','yes',
          '衛福部或健保署公布的急性心肌梗塞年度發生人數原始資料。','yes','confirm','數字本身未必有誤，但屬二手引述。',
          '每年約有1萬7千人罹患心肌梗塞（112年資料）'),
        F('平均約每23分鐘就有1人死於心臟疾病','MEDICAL_INTERPRETATION','scope_broader_than_topic',
          '「心臟疾病」涵蓋心衰竭、心律不整等多種疾病，放在心肌梗塞文章開頭，讀者可能誤以為全部是心肌梗塞死亡。','low','no',
          null,'no','clarify','補一句說明統計範圍即可。',
          '平均約每23分鐘就有1人死於心臟疾病（含心肌梗塞等各類心臟疾病）'),
        F('國健署分析，有高血壓、高血糖與高血脂者','SOURCE_EVIDENCE','analysis_year_unstated',
          '文中已註明出自國健署分析，但沒寫是2018年的三高追蹤分析，讀者無法判斷資料時點。','low','no',
          null,'no','clarify','數字正確，補上年份即可。',
          '國健署2018年三高追蹤分析，有高血壓、高血糖與高血脂者'),
        F('黃金時間','TERMINOLOGY_LANGUAGE','term_unexplained',
          '「黃金時間」未說明具體意義與時間範圍，讀者可能誤解為某個固定分鐘數。','low','no',
          null,'no','clarify','可改寫為具體行動導向的說法。',
          '黃金時間（越早打通血管，心肌受損越少）')
      ],
      card:[
        F('死於心臟疾病（114 年死因統計換算）','MEDICAL_INTERPRETATION','scope_broader_than_topic',
          '卡面主題是心肌梗塞，但主數字的統計範圍是全部心臟疾病，讀者可能誤讀為心肌梗塞死亡人數。','medium','no',
          null,'no','clarify','屬統計範圍標示問題，不代表數據錯誤。',
          '死於心臟疾病，含心肌梗塞（114 年死因統計換算）'),
        F('高血壓者心血管風險','CURRENCY_TIMELINESS','analysis_year_unstated',
          '「1.8 倍」未標示來源與分析年份（國健署2018年三高追蹤分析），卡面讀者無法判斷時效。','low','yes',
          '國健署三高追蹤分析的最新版本與年份。','yes','confirm','未查證是否有更新版本。',
          '高血壓者心血管風險（國健署 2018 年分析）')
      ]
    },
    title_alts:[
      '心肌梗塞警訊有哪些？胸痛冒冷汗別硬撐，立刻打119',
      '胸口像被石頭壓住？心肌梗塞3大警訊與急救做法',
      '三高族群必看：心肌梗塞風險、警訊與日常預防'
    ],
    card_title_alts:[
      ['胸痛冒冷汗別硬撐','心肌梗塞 3 大警訊一次看'],
      ['胸口像被石頭壓住？','認得心梗警訊，立刻打 119'],
      ['三高族群要留意','心肌梗塞警訊與預防']
    ],
    data_addon:[
      '衛福部114年死因統計：心臟疾病死亡2萬2,907人，較113年減少1.6%，仍居十大死因第2位。',
      '男性占心臟疾病死亡約59%（1萬3,517人）。',
      '20歲以上國人高血脂盛行率約4成，自述曾經醫師診斷者僅約2成（國健署2018-2022年國民營養健康調查）。'
    ],
    cta:'今天就和家人一起記下3大警訊，並約好這個月一起量一次血壓、驗一次血脂。'
  });
})();
