/* v6 示範主題：腦中風（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計（2026-06-22 公布）與摘要表、國健署2023年腦中風8大危險因子新聞稿、國健署2018年FAST口訣新聞稿。
   參考方向：健康智庫〈腦中風〉2022/05。 */
(function(){
  const REFS = [
    {title:'國人死亡人數連續3年下降 十大死因中6項死因人數、死亡率都減少（114年死因統計）',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'遠離腦中風 自我監控揪出危險因子 8大危險因子符合其中3項屬高危險群',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-16-74897-1.html'},
    {title:'牢記中風症狀 把握搶救黃金3小時',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/fp-3791-39530-1.html'}
  ];
  const TABLE = {headers:['FAST口訣','怎麼判斷'], rows:[
    ['F 臉歪','請對方微笑，看兩邊臉是否不對稱'],
    ['A 手垂','請對方雙手平舉，看是否有一隻手無力垂下'],
    ['S 大舌頭','請對方說一句話，看是否口齒不清'],
    ['T 記下時間','記下發作時間，立刻撥打119送醫']
  ]};
  const TAGS = ['腦中風','FAST口訣','急救119','高血壓','心房顫動'];

  const DP_SCOPE = {id:'dp-stroke-scope', type:'data_scope', title:'死亡人數的統計範圍',
    desc:'衛福部死因統計的分類是「腦血管疾病」，包含腦中風及其他腦血管疾病，沒有單獨公布「腦中風」死亡人數。國健署新聞稿也以「腦血管疾病（包含腦中風）」描述，AI 沒有替你把兩者畫上等號。',
    current:'腦血管疾病死亡1萬2,425人（114年，含腦中風）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'1萬2,425人', value:'腦血管疾病（ICD-10 I60-I69）', note:'114年死因統計（目前採用）'},
      {label:'未單獨公布', value:'腦中風', note:'死因統計沒有單獨的「腦中風」分類'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'腦中風搶時間！記住FAST口訣：臉歪手垂大舌頭，立刻打119',
    update_date:'2026/11/20',
    intro:'依衛生福利部114年死因統計，腦血管疾病全年死亡1萬2,425人，居國人十大死因第4位，平均約每42分鐘就有1人死於腦血管疾病（包含腦中風）。其中65歲以上占約8成，男性多於女性。國民健康署提醒，腦中風發生前通常沒有症狀，平日控制危險因子、發作時認得警訊並立刻送醫，是降低傷害的兩大關鍵。',
    sections:[
      {heading:'FAST口訣：認得腦中風警訊',format:'table',table:TABLE},
      {heading:'8大危險因子，符合3項要當心',format:'bullets',items:[
        '國健署列出腦中風8大危險因子：吸菸、運動量不足、肥胖、高血壓、糖尿病、膽固醇過高、心房顫動及腦中風家族史，符合其中3項即屬高危險族群。',
        '心房顫動會讓心臟打出的血量減少，更容易提高中風機率；心跳不規則、不明原因胸悶或心悸，應及早就醫。',
        '天冷時血管收縮、血壓上升，研究顯示低溫引發的腦中風最常發生在暴露於低溫環境的前2-3小時。'
      ]},
      {heading:'日常預防這樣做',format:'bullets',items:[
        '戒菸：可利用戒菸門診或免費戒菸專線0800-636363。',
        '量血壓掌握「722原則」：連續7天、每天早晚2次、每次量2遍，血壓值維持在120/80 mmHg以下。',
        '每天30分鐘以上中等強度身體活動，維持BMI 18.5-24、腰圍男性小於90公分、女性小於80公分。',
        '定期健檢追蹤血糖與血脂，出現警訊把握搶救黃金3小時，撥打119並記下發作時間。'
      ]}
    ],
    think_tank_view:'腦中風的兩個關鍵都和「時間」有關：平日越早控制三高與心房顫動，發生機率越低；真的發作時，越快送醫，留下後遺症的機會越小。建議把FAST口訣和家人的血壓紀錄放在一起，讓長輩與照顧者都知道該怎麼做。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數與排名引自衛福部114年死因統計並標明年份，危險因子與預防建議引自國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['沿用步驟1洞察：腦血管疾病114年死亡1萬2,425人、居死因第4位（衛福部死因統計）','8大危險因子取自國健署2023年新聞稿'],
      layout_reason:'先用FAST表格讓讀者記住警訊，再對照8大危險因子自我評估，最後給日常預防的具體數值。',
      tone:'專業易懂', tone_reason:'急症衛教需要清楚可對照的判斷方法，避免恐嚇。',
      to_verify:['「黃金3小時」出自國健署2018年新聞稿，臨床治療時窗依醫師判斷','死因統計為「腦血管疾病」，範圍大於腦中風']},
    decision_points:[DP_SCOPE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽突然嘴歪、手舉不起來？記住FAST，馬上打119',
    update_date:'2026/11/20',
    intro:'腦血管疾病是國人十大死因第4名，依114年死因統計，平均約每42分鐘就有1人因腦血管疾病（包含腦中風）過世，而且大多是65歲以上的長輩。腦中風來之前常常沒有徵兆，所以平常把危險因子顧好、家人都記得警訊，緊要關頭才能爭取時間。',
    sections:[
      {heading:'臉歪手垂大舌頭，記下時間快送醫',format:'table',table:TABLE},
      {heading:'我是高危險群嗎？',format:'bullets',items:[
        '國健署提醒這8項要注意：抽菸、很少運動、體重過重、高血壓、糖尿病、膽固醇太高、心房顫動，還有家人曾中風。8項中有3項就屬於高危險族群。',
        '常常心跳亂跳、心悸或莫名胸悶，可能是心房顫動，記得去看醫生。',
        '天冷時血壓容易飆高，出門把頭、脖子、手腳包暖，多喝溫開水。'
      ]},
      {heading:'每天可以做的小事',format:'bullets',items:[
        '菸能戒就戒，可以打免費戒菸專線0800-636363。',
        '在家量血壓記住「722」：連續7天、早晚各1次、每次量2遍。',
        '每天動30分鐘，腰圍男生小於90公分、女生小於80公分。',
        '看到家人臉歪、手垂、講話不清楚，馬上打119，把握搶救黃金3小時。'
      ]}
    ],
    think_tank_view:'腦中風最怕的是「先休息看看」。只要看到臉歪、手垂、講話不清楚其中一項，就別猶豫，記下時間馬上打119。平常也可以陪爸媽一起量血壓、記下數字，讓照顧從每天的小事開始。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部死因統計與國健署公開資料並標明年份，語氣親切但未淡化急症風險，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家人照顧情境帶出警訊、自我評估與日常行動。', tone:'生活親切', tone_reason:'給子女與長輩一起閱讀，降低距離感。', to_verify:['「黃金3小時」的資料年份']},
    decision_points:[DP_SCOPE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'腦中風FAST：臉歪、手垂、大舌頭，快打119',
    update_date:'2026/11/20',
    intro:'114年腦血管疾病死亡1萬2,425人，居十大死因第4位，約每42分鐘1人。認得FAST警訊、立刻撥打119是關鍵。',
    sections:[
      {heading:'FAST口訣',format:'table',table:TABLE},
      {heading:'8大危險因子',format:'bullets',items:[
        '吸菸、運動不足、肥胖、高血壓、糖尿病、膽固醇過高、心房顫動、家族史。',
        '符合其中3項即屬高危險族群。'
      ]},
      {heading:'日常預防',format:'bullets',items:[
        '戒菸、每天動30分鐘。',
        '居家量血壓掌握722原則。',
        '出現警訊立即撥打119。'
      ]}
    ],
    think_tank_view:'控制危險因子降低發生機率，認得警訊爭取送醫時間，是面對腦中風最重要的兩件事。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部死因統計與國健署公開資料並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊、危險因子、預防三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['死因統計為腦血管疾病，範圍大於腦中風']},
    decision_points:[DP_SCOPE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'腦中風', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'約每 42 分鐘 1 人死於腦血管疾病', primary_visual:'約 1.2 萬人', secondary_message:'認得 FAST 警訊，立刻撥打 119', action_priority:'控制血壓、戒菸、留意心房顫動'},
    headline_hook:'臉歪手垂大舌頭', headline_main:'腦中風 FAST 口訣一次記', title_accent:'FAST 口訣',
    hero_message:'約每 42 分鐘 1 人', hero_support:'死於腦血管疾病（114 年死因統計換算）',
    knowledge_title:'FAST 警訊', knowledge_note:'記下發作時間，**立即撥打 119**',
    knowledge_cards:[
      {label:'F 臉歪', icon:'check', lines:['微笑時','兩邊臉不對稱']},
      {label:'A 手垂', icon:'check', lines:['雙手平舉','一隻手無力垂下']},
      {label:'S 大舌頭', icon:'chat', lines:['說一句話','口齒不清楚']},
      {label:'T 記時間', icon:'brain', lines:['記下發作時間','立刻打 119']}
    ],
    primary_stat:{value:'約 1.2 萬人', label:'114 年腦血管疾病死亡人數', note:'衛福部死因統計：1萬2,425人｜居死因第 4 位'},
    secondary_stats:[
      {value:'8 大', label:'腦中風危險因子'},
      {value:'約 8 成', label:'死亡者為 65 歲以上'}
    ],
    action_title:'平日這樣做',
    action_cards:[
      {key:'量', text:'在家量血壓掌握 722 原則'},
      {key:'戒', text:'戒菸，善用戒菸專線 0800-636363'},
      {key:'動', text:'每天 30 分鐘中等強度活動'},
      {key:'查', text:'心跳不規則、心悸及早就醫'}
    ],
    carousel_suggestion:{reason:'若想把警訊、危險因子與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'腦中風警訊', headline_main:'FAST 口訣一次記'},
      {layout_type:'knowledge', headline_hook:'8 大危險因子', headline_main:'符合 3 項要當心'},
      {layout_type:'action', headline_hook:'日常預防', headline_main:'量血壓、戒菸、多活動'}]},
    hashtags:['腦中風','FAST口訣','急救119','高血壓'],
    sources:['衛生福利部','衛生福利部國民健康署'],
    illustration_category:'brain',
    illustration:{topic:'腦中風', audience:'長輩與家人', scene:'家人發現長輩微笑時嘴角歪斜，一人扶著長輩、一人拿手機撥打急救電話',
      emotion:'警覺但冷靜', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A family noticing an older adult with a drooping smile, one person supporting the elder while another calls emergency services on a phone, calm and alert, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：腦血管疾病114年死亡1萬2,425人（衛福部）','FAST口訣與8大危險因子取自國健署'],
      layout_reason:'核心是「認得警訊、搶時間」，選 knowledge：FAST 四張卡當主角，死亡人數與危險因子退到下方，最後給 4 個日常行動。',
      tone:'專業易懂', tone_reason:'急症資訊需清楚、可照著做。',
      to_verify:['主數字為腦血管疾病，範圍大於腦中風']},
    decision_points:[Object.assign({}, DP_SCOPE, {current:'約 1.2 萬人｜114 年腦血管疾病死亡（含腦中風）'})],
    content_check_note:'死亡人數與排名引自衛福部114年死因統計，口訣與危險因子引自國健署，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'腦中風',
    collect:{
      summary:'腦血管疾病居國人十大死因第4位，2025年死亡人數與前一年相近，約8成為65歲以上長者；腦中風發作前常無症狀，「控制危險因子＋認得FAST警訊」是適合長期溝通、秋冬加強的健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約每42分鐘1人死於腦血管疾病：依2025年（114年）死因統計，腦血管疾病死亡1萬2,425人，死亡率每十萬人口53.2人，居十大死因第4位（統計範圍含腦中風及其他腦血管疾病）。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'年度趨勢方向',desc:'死亡人數減少0.3%：2025年腦血管疾病死亡較2024年（1萬2,463人）略減，標準化死亡率同步下降，排名維持第4位。',tag:'官方統計',source:{name:'衛生福利部：國人死亡人數連續3年下降 十大死因中6項死因人數、死亡率都減少',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'政策動向',desc:'8大危險因子符合3項即屬高危險群：國健署2023年提醒民眾自我檢視吸菸、運動量不足、肥胖、高血壓、糖尿病、膽固醇過高、心房顫動及家族史，並推廣居家量血壓「722原則」。',tag:'官方統計',source:{name:'衛生福利部國民健康署：遠離腦中風 自我監控揪出危險因子',url:'https://www.mohw.gov.tw/cp-16-74897-1.html'}},
        {item:'好發族群年齡層',desc:'約8成死亡者為65歲以上：2025年腦血管疾病死亡者中65歲以上9,861人，男性7,218人、女性5,207人，男性多於女性。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}}
      ],
      product_view:['機會：腦中風屬重大疾病與失能照護的常見情境，可搭配急性期治療與後續復健、長期照護費用說明，協助保戶檢視保障缺口。','機會：高血壓、心房顫動為主要可控風險，適合結合居家量血壓提醒等健康管理服務。','風險：避免把健康管理服務暗示為可降低發病或保證理賠，失能與重大疾病給付條件須依條款如實說明。'],
      marketing_view:['機會：秋冬低溫是腦中風的常見溝通時點，可用FAST口訣作為衛教主軸，降低銷售感。','機會：死亡者約8成為65歲以上，子女世代是提醒父母的關鍵溝通對象。','風險：避免以失能、臥床等恐懼畫面訴求，宜以具體行動（FAST、119、量血壓）收尾。'],
      alert_level:'medium',
      alert_reason:'屬長年重點疾病，秋冬低溫時特別適合溝通；無單一時效性政策事件，適合納入年度溝通規劃。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('平均約每42分鐘就有1人死於腦血管疾病','MEDICAL_INTERPRETATION','derived_figure_unlabeled',
          '「每42分鐘1人」是用114年死亡人數換算出來的值，文中沒有標示為換算，讀者可能以為是官方公布的數字。','low','no',
          null,'no','clarify','換算本身正確（全年分鐘數÷1萬2,425≈42.3）。',
          '依死亡人數換算，平均約每42分鐘就有1人死於腦血管疾病',['約每42分鐘1人']),
        F('符合其中3項即屬高危險族群','MEDICAL_INTERPRETATION','threshold_misread',
          '「3項」是國健署的自我檢視提醒，不是診斷標準；讀者若只符合1-2項（例如只有高血壓或心房顫動），可能誤以為不必在意。','medium','no',
          null,'no','clarify','原文引用正確，屬表達方式調整。',
          '符合其中3項即屬高危險族群；即使只有1-2項，例如高血壓或心房顫動，也應積極控制',['8項中有3項就屬於高危險族群']),
        F('把握搶救黃金3小時','MEDICAL_INTERPRETATION','time_window_oversimplified',
          '「黃金3小時」容易被理解為超過3小時就不必送醫，或3小時內不急；實際治療方式與時窗由醫師判斷，關鍵是越早送醫越好。','medium','no',
          null,'no','clarify','數字出自國健署衛教用語，屬表達方式調整。',
          '越早送醫越好，不要等症狀自行緩解'),
        F('居家量血壓掌握722原則','TERMINOLOGY_LANGUAGE','term_unexplained',
          '簡潔版只寫「722原則」，沒有說明是「連續7天、早晚各1次、每次量2遍」，讀者無法照做。','low','no',
          null,'no','clarify','專業易懂版與生活親切版已有說明，僅簡潔版缺。',
          '居家量血壓掌握722原則（連續7天、早晚各1次、每次2遍）')
      ],
      card:[
        F('死於腦血管疾病（114 年死因統計換算）','MEDICAL_INTERPRETATION','scope_broader_than_topic',
          '卡面主題是腦中風，但主數字的統計範圍是全部腦血管疾病，讀者可能誤讀為腦中風死亡人數。','medium','no',
          null,'no','clarify','屬統計範圍標示問題，不代表數據錯誤。',
          '死於腦血管疾病，含腦中風（114 年死因統計換算）'),
        F('在家量血壓掌握 722 原則','TERMINOLOGY_LANGUAGE','term_unexplained',
          '「722 原則」在卡面沒有說明，第一次看到的讀者不知道怎麼量。','low','no',
          null,'no','clarify','字數有限，可改成具體做法。',
          '連續 7 天、早晚量血壓')
      ]
    },
    title_alts:[
      '腦中風搶時間！記住FAST口訣：臉歪手垂大舌頭，立刻打119',
      '爸媽突然嘴歪、手舉不起來？腦中風FAST口訣與預防',
      '8大危險因子中3項就要當心：腦中風警訊與日常預防'
    ],
    card_title_alts:[
      ['臉歪手垂大舌頭','腦中風 FAST 口訣一次記'],
      ['爸媽突然嘴歪？','認得中風警訊，立刻打 119'],
      ['8 大危險因子','符合 3 項要當心']
    ],
    data_addon:[
      '衛福部114年死因統計：腦血管疾病死亡1萬2,425人，較113年減少0.3%，居十大死因第4位。',
      '45-64歲族群中，腦血管疾病死亡2,243人，居該年齡層死因第3位。',
      '國健署建議血壓維持120/80 mmHg以下、空腹血糖70-99 mg/dL、總膽固醇低於200 mg/dL。'
    ],
    cta:'今天就和家人一起記下FAST口訣，並從這週開始用「722原則」幫爸媽量一次血壓。'
  });
})();
