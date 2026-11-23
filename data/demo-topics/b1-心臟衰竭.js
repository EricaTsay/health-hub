/* v6 示範主題：心臟衰竭（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計（2026-06-22 公布）與摘要表；心衰竭人數為中華民國心臟基金會以全球盛行率推估（2022年世界心臟日記者會，健康醫療網／NOWnews轉載）。
   衛福部、國健署未公布心臟衰竭的專屬盛行率或死亡人數，文中以「心臟疾病」統計並標明範圍。
   參考方向：健康智庫〈心臟衰竭〉2022/05。 */
(function(){
  const REFS = [
    {title:'國人死亡人數連續3年下降 十大死因中6項死因人數、死亡率都減少（114年死因統計）',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'洗腎死亡者近5成有「心衰竭」 出現「累、喘、腫」快就醫（2022世界心臟日記者會）',source:'健康醫療網／NOWnews',url:'https://www.nownews.com/news/5942978'},
    {title:'預防三高 降低心肌梗塞風險',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=17931'}
  ];
  const TABLE = {headers:['警訊','常見表現'], rows:[
    ['累','容易疲倦、體力和活動量明顯變差'],
    ['喘','走幾步路或爬樓梯就喘，躺平時更喘、夜裡喘醒'],
    ['腫','腳踝、小腿水腫，短時間內體重明顯增加']
  ]};
  const TAGS = ['心臟衰竭','心衰竭','累喘腫','心血管疾病','慢性病管理'];

  const DP_EST = {id:'dp-hf-estimate', type:'data_scope', title:'「近70萬人」是推估值',
    desc:'台灣沒有官方公布的心臟衰竭盛行率。「近70萬人」是中華民國心臟基金會以全球盛行率約3%套用台灣人口的推估；官方能查到的是「心臟疾病」整體死亡人數。兩者性質不同，AI 沒有替你決定要放哪一個當主數字。',
    current:'心臟疾病死亡2萬2,907人（114年死因統計）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'2萬2,907人', value:'心臟疾病死亡（114年）', note:'衛福部死因統計，含心衰竭等各類心臟疾病（目前採用）'},
      {label:'近70萬人', value:'心衰竭人數推估', note:'心臟基金會2022年以全球盛行率約3%推估，非官方統計'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'心臟衰竭不是心臟停了：認得「累、喘、腫」，做好每日自我照護',
    update_date:'2026/11/20',
    intro:'心臟衰竭是指心臟打出的血量不足以供應身體需要，常是高血壓、冠心病、心肌梗塞等疾病長期發展的結果。依衛生福利部114年死因統計，心臟疾病全年死亡2萬2,907人，居國人十大死因第2位（統計涵蓋心衰竭等各類心臟疾病）。中華民國心臟基金會2022年以全球盛行率推估，台灣約有近70萬人受心衰竭影響。本文整理常見警訊與日常自我照護。',
    sections:[
      {heading:'「累、喘、腫」3大警訊',format:'table',table:TABLE},
      {heading:'為什麼要及早就醫',format:'bullets',items:[
        '心衰竭症狀容易被誤認為年紀大、體力差，延誤就醫；出現警訊應到心臟內科檢查，常見檢查包括心臟超音波與血液檢查。',
        '心衰竭常與其他慢性病互相影響，心臟基金會指出約5成心衰竭病友會罹患慢性腎臟病。',
        '高血壓、高血糖、高血脂是心血管疾病的主要風險因子，國健署分析三高族群後續罹患心血管疾病的風險分別為1.8、1.5及1.4倍。'
      ]},
      {heading:'每日自我照護',format:'bullets',items:[
        '每天固定時間量體重並記錄，短時間內體重明顯增加或水腫加劇，應提早回診。',
        '依醫師指示限制鹽分與水分，少吃醃漬、加工食品與重口味外食。',
        '按時服藥，不自行停藥或增減劑量；戒菸、避免過量飲酒。',
        '在醫師評估下規律從事適度活動，並控制血壓、血糖與血脂。'
      ]}
    ],
    think_tank_view:'心臟衰竭多半是慢慢走到的，「累、喘、腫」往往被當成老化而忽略。把量體重、限鹽、按時服藥變成每天的固定習慣，搭配定期回診，是穩定病情、減少反覆住院最實在的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數引自衛福部114年死因統計並標明為心臟疾病整體範圍，「近70萬人」與「約5成」標明為心臟基金會說法，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['沿用步驟1洞察：心臟疾病114年死亡2萬2,907人、居死因第2位（衛福部死因統計）','心衰竭人數為心臟基金會2022年推估'],
      layout_reason:'先用表格認識3大警訊，再說明及早就醫的理由，最後給每日自我照護做法。',
      tone:'專業易懂', tone_reason:'慢性病照護需要具體、可每天執行的做法。',
      to_verify:['台灣無官方心衰竭盛行率，「近70萬人」為推估','「約5成病友罹患慢性腎臟病」未見原始研究出處']},
    decision_points:[DP_EST]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'走幾步就喘、腳又腫？可能是心臟在求救',
    update_date:'2026/11/20',
    intro:'心臟衰竭不是心臟停止跳動，而是心臟「力氣不夠」，打出去的血不夠身體用。心臟疾病是國人十大死因第2名，依114年死因統計，全年有2萬2,907人因各類心臟疾病過世。心臟基金會估計，台灣約有近70萬人受心衰竭影響。如果家裡長輩最近特別累、容易喘、腳又腫，別只當成老了，帶去給醫師看看。',
    sections:[
      {heading:'累、喘、腫，3個訊號別忽略',format:'table',table:TABLE},
      {heading:'為什麼不能拖？',format:'bullets',items:[
        '這些症狀很容易被當成「年紀大體力差」，結果越拖越嚴重；心臟內科做個心臟超音波就能幫忙判斷。',
        '心臟和腎臟常常互相拖累，心臟基金會提到約一半的心衰竭病友也有慢性腎臟病。',
        '有三高的人要多留意，三高都會增加心血管疾病的風險。'
      ]},
      {heading:'每天這樣照顧自己',format:'bullets',items:[
        '每天早上固定量體重，體重突然增加或腳更腫，就提早回診。',
        '照醫師說的少鹽、控制喝水量，醃漬品和重口味外食少吃。',
        '藥要按時吃，不要覺得好了就自己停藥。',
        '問過醫師後，每天做適合自己的活動，菸能戒就戒。'
      ]}
    ],
    think_tank_view:'照顧心衰竭的家人，最重要的是陪他養成每天量體重、少鹽、按時吃藥的習慣。一本小筆記本記下體重和症狀，回診時帶給醫師看，就是最好的幫忙。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數引自衛福部死因統計並標明為各類心臟疾病，推估人數標明為心臟基金會，語氣親切但未淡化疾病風險，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以家人照顧情境帶出警訊、就醫理由與每日照護。', tone:'生活親切', tone_reason:'給病友與家屬閱讀，降低距離感。', to_verify:['「近70萬人」為推估值']},
    decision_points:[DP_EST]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'心臟衰竭：累、喘、腫要就醫，每天量體重',
    update_date:'2026/11/20',
    intro:'114年心臟疾病死亡2萬2,907人，居十大死因第2位。心衰竭常見警訊是累、喘、腫，及早就醫並做好每日自我照護是關鍵。',
    sections:[
      {heading:'3大警訊',format:'table',table:TABLE},
      {heading:'及早就醫',format:'bullets',items:[
        '症狀易被誤認為老化，應至心臟內科檢查。',
        '三高為主要風險因子。'
      ]},
      {heading:'每日照護',format:'bullets',items:[
        '每天量體重，短期明顯增加就回診。',
        '依醫師指示限鹽限水、按時服藥。',
        '戒菸、適度活動。'
      ]}
    ],
    think_tank_view:'心衰竭的照護重點在每天：量體重、限鹽、按時服藥、定期回診。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部死因統計並標明範圍，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊、就醫、照護三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['死亡人數為心臟疾病整體']},
    decision_points:[DP_EST]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'心臟衰竭', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'累、喘、腫可能是心臟在求救', primary_visual:'約 2.3 萬人', secondary_message:'心臟疾病居十大死因第 2 位', action_priority:'每天量體重、限鹽、按時服藥'},
    headline_hook:'走幾步就喘、腳又腫？', headline_main:'心衰竭每日照護 4 件事', title_accent:'4 件事',
    hero_message:'累・喘・腫', hero_support:'心臟衰竭 3 大警訊，出現就到心臟內科檢查',
    primary_stat:{value:'約 2.3 萬人', label:'114 年心臟疾病死亡人數', note:'衛福部死因統計：2萬2,907人｜含心衰竭等各類心臟疾病'},
    action_title:'每天這樣做',
    action_cards:[
      {key:'量', text:'每天固定時間量體重並記錄'},
      {key:'限', text:'依醫師指示限制鹽分與水分'},
      {key:'藥', text:'按時服藥，不自行停藥'},
      {key:'回', text:'體重突增或水腫加劇提早回診'}
    ],
    notice:'心衰竭症狀常被當成**老化**，出現累、喘、腫請及早就醫。',
    carousel_suggestion:{reason:'若想把警訊、風險與照護分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'心衰竭警訊', headline_main:'累、喘、腫別忽略'},
      {layout_type:'data', headline_hook:'心臟疾病', headline_main:'十大死因第 2 位'},
      {layout_type:'action', headline_hook:'每日照護', headline_main:'量體重、限鹽、按時服藥'}]},
    hashtags:['心臟衰竭','心衰竭','累喘腫','慢性病管理'],
    sources:['衛生福利部','中華民國心臟基金會'],
    illustration_category:'heart',
    illustration:{topic:'心臟衰竭自我照護', audience:'中高齡病友與家屬', scene:'一位長者早上站在體重計上，家人在旁用筆記本記錄數字，桌上放著藥盒',
      emotion:'安心、規律', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult standing on a bathroom scale in the morning while a family member writes the number in a notebook, a pill organizer on the table, calm and routine, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['心臟疾病114年死亡2萬2,907人（衛福部）','台灣無官方心衰竭盛行率，不放推估值當主數字'],
      layout_reason:'心衰竭的關鍵在每日自我照護，選 action：4 個照護行動當主角，死亡人數退到下方並標明範圍。',
      tone:'專業易懂', tone_reason:'照護行動需要清楚可執行。',
      to_verify:['主數字為心臟疾病整體，非心衰竭專屬']},
    decision_points:[Object.assign({}, DP_EST, {current:'約 2.3 萬人｜114 年心臟疾病死亡（含心衰竭）'})],
    content_check_note:'死亡人數引自衛福部114年死因統計並標明範圍，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'心臟衰竭',
    collect:{
      summary:'心臟疾病居國人十大死因第2位，心臟衰竭是多種心臟病的共同終點，但台灣沒有官方心衰竭盛行率；「累、喘、腫」常被誤認為老化，及早就醫與每日自我照護是適合長期溝通的重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'心臟疾病年死亡約2.3萬人：依2025年（114年）死因統計，心臟疾病（高血壓性疾病除外）死亡2萬2,907人，居十大死因第2位，統計涵蓋心衰竭等各類心臟疾病，未單獨公布心衰竭死亡人數。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'年度趨勢方向',desc:'心臟疾病死亡人數減少1.6%：2025年較2024年（2萬3,276人）下降，死亡率與標準化死亡率同步下降。',tag:'官方統計',source:{name:'衛生福利部：國人死亡人數連續3年下降 十大死因中6項死因人數、死亡率都減少',url:'https://www.mohw.gov.tw/cp-7400-86970-1.html'}},
        {item:'政策動向',desc:'近70萬人受心衰竭影響（推估）：中華民國心臟基金會2022年世界心臟日記者會以全球盛行率約3%推估台灣人數，並呼籲出現「累、喘、腫」及早就醫。',tag:'推估',source:{name:'健康醫療網／NOWnews：洗腎死亡者近5成有「心衰竭」',url:'https://www.nownews.com/news/5942978'}},
        {item:'好發族群年齡層',desc:'高血壓者心血管疾病風險1.8倍：國健署2018年三高追蹤分析，高血壓、高血糖、高血脂者後續罹患心血管疾病的風險分別為1.8、1.5及1.4倍，三高與冠心病患者是心衰竭的主要高風險族群。',tag:'官方統計',source:{name:'衛生福利部國民健康署：預防三高 降低心肌梗塞風險',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4809&pid=17931'}}
      ],
      product_view:['機會：心衰竭屬長期慢性病，反覆住院與長期用藥的費用負擔，可作為檢視住院醫療與失能保障的溝通切點。','機會：每日量體重、服藥提醒等照護行為，適合結合健康管理服務。','風險：心衰竭的重大疾病或失能給付條件依條款而定，溝通時不得暗示「確診即理賠」。'],
      marketing_view:['機會：9月29日世界心臟日是固定溝通時點，可用「累、喘、腫」作為好記的衛教口訣。','機會：照顧者（子女）是重要溝通對象，可從「幫爸媽記體重」等具體照護行為切入。','風險：官方統計有限，溝通時避免把推估值當成官方數字。'],
      alert_level:'low',
      alert_reason:'無單一時效性事件，官方專屬統計有限，適合在世界心臟日或秋冬心血管主題中搭配溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('台灣約有近70萬人受心衰竭影響','SOURCE_EVIDENCE','estimate_unlabeled',
          '文中已註明出自心臟基金會，但沒說明這是以全球盛行率約3%套用台灣人口的推估，讀者可能當成實際統計人數。','medium','yes',
          '台灣心衰竭盛行率的實測研究或健保資料分析。','no','confirm','數字本身是推估，並非錯誤。',
          '台灣約有近70萬人受心衰竭影響（以全球盛行率約3%推估）'),
        F('約5成心衰竭病友會罹患慢性腎臟病','SOURCE_EVIDENCE','secondary_citation',
          '這個比例來自基金會在記者會的口頭說明，沒有原始研究出處與年份。','medium','yes',
          '心衰竭合併慢性腎臟病比例的原始研究或年報。','no','confirm','屬二手引述，尚未找到原始資料。',
          null,['約一半的心衰竭病友也有慢性腎臟病']),
        F('短時間內體重明顯增加或水腫加劇，應提早回診','MEDICAL_INTERPRETATION','threshold_unstated',
          '「短時間內明顯增加」沒有具體標準，病友無法判斷何時該回診；各醫院衛教的門檻不同，應請病友向主治醫師確認自己的標準。','low','no',
          null,'no','clarify','文中刻意未寫具體公斤數，避免與各院標準不一致。',
          '短時間內體重明顯增加（請向主治醫師確認自己的回診標準）或水腫加劇，應提早回診'),
        F('居國人十大死因第2位（統計涵蓋心衰竭等各類心臟疾病）','MEDICAL_INTERPRETATION','scope_broader_than_topic',
          '範圍已標明，但放在心衰竭定義後面，讀者仍可能把2萬2,907人理解成心衰竭死亡人數；可再明確說明心衰竭沒有單獨統計。','low','no',
          null,'no','clarify','屬表達方式調整。',
          '居國人十大死因第2位（此為各類心臟疾病合計，心衰竭沒有單獨統計）')
      ],
      card:[
        F('含心衰竭等各類心臟疾病','MEDICAL_INTERPRETATION','scope_broader_than_topic',
          '主數字放在心衰竭卡面上，即使註明範圍，讀者仍容易誤讀為心衰竭死亡人數。','medium','no',
          null,'no','clarify','可考慮把主數字改為警訊或照護行動。',
          '各類心臟疾病合計，非心衰竭單獨統計'),
        F('體重突增或水腫加劇提早回診','MEDICAL_INTERPRETATION','threshold_unstated',
          '「突增」沒有標準，卡面讀者無法判斷；可提醒依醫師給的標準。','low','no',
          null,'no','clarify','各院門檻不同，不宜在卡面寫死數字。',
          '體重超過醫師給的標準就提早回診')
      ]
    },
    title_alts:[
      '心臟衰竭不是心臟停了：認得「累、喘、腫」，做好每日自我照護',
      '走幾步就喘、腳又腫？可能是心臟在求救',
      '心衰竭照護4件事：量體重、限鹽水、按時服藥、及早回診'
    ],
    card_title_alts:[
      ['走幾步就喘、腳又腫？','心衰竭每日照護 4 件事'],
      ['累・喘・腫','心臟衰竭 3 大警訊'],
      ['心臟在求救','每天量體重，及早回診']
    ],
    data_addon:[
      '衛福部114年死因統計：心臟疾病死亡2萬2,907人，較113年減少1.6%，男性1萬3,517人、女性9,390人。',
      '65歲以上心臟疾病死亡1萬7,532人，居該年齡層死因第2位。',
      '心臟基金會2022年世界心臟日記者會：以全球盛行率約3%推估，台灣近70萬人受心衰竭影響（推估值）。'
    ],
    cta:'今天就準備一本小筆記本，陪家人每天早上量體重並記下來，下次回診帶給醫師看。'
  });
})();
