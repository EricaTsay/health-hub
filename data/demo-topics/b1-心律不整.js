/* v6 示範主題：心律不整（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-21。數據來源：國健署2023-06〈遠離腦中風 自我監控揪出危險因子〉（心房顫動為腦中風8大危險因子之一、就醫建議）、
   TVBS 2024-10-31（長庚醫師受訪：引述衛福部及國健署資料2020年約14萬人診斷心房顫動、2022年盛行率1.5%、中風風險5倍）、衛福部114年死因統計（心臟疾病）。
   國健署未公布心律不整專屬統計；盛行率與中風倍數標明為媒體報導醫師說明。
   參考方向：健康智庫〈心律不整〉2022/05。 */
(function(){
  const REFS = [
    {title:'遠離腦中風 自我監控揪出危險因子 8大危險因子符合其中3項屬高危險群',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-16-74897-1.html'},
    {title:'「這種」心臟病讓中風發生率增5倍！長庚最新技術3個小洞解決心臟問題',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/medical/350626'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}
  ];
  const TABLE = {headers:['類型','常見表現'], rows:[
    ['心跳過快','心悸、心跳像在狂奔'],
    ['心跳過慢','頭暈、疲倦，嚴重時可能昏倒'],
    ['心跳不規則（如心房顫動）','心跳忽快忽慢、亂跳，部分人沒有明顯症狀']
  ]};
  const TAGS = ['心律不整','心房顫動','心悸','腦中風','心臟健康'];

  const DP_AF = {id:'dp-arr-af', type:'data_scope', title:'心房顫動數字的出處',
    desc:'「2020年約14萬人診斷、2022年盛行率1.5%」是長庚醫師受訪時引述衛福部及國健署資料，報導未註明原始報告；「中風風險5倍」只寫「研究顯示」。國健署官方新聞稿則僅說明心房顫動「更容易提高中風機率」，沒有給倍數。AI 將倍數標為醫師說明。',
    current:'心房顫動會提高中風機率（國健署），倍數標為醫師說明',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'更容易提高中風機率', value:'國健署2023年', note:'官方新聞稿（目前採用為主訊息）'},
      {label:'約5倍', value:'醫師引述研究', note:'TVBS 2024年報導，未註明研究'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'心律不整：心跳亂跳別輕忽，心房顫動是腦中風危險因子',
    update_date:'2026/11/21',
    intro:'心律不整是指心跳過快、過慢或不規則，其中「心房顫動」最受關注。國民健康署將心房顫動列為腦中風8大危險因子之一，指出心房顫動會讓心臟打出的血量減少，更容易提高中風機率。據媒體報導，長庚醫師引述衛福部及國健署資料，2020年約14萬人被診斷為心房顫動，2022年盛行率達1.5%，且隨年齡增加而上升。',
    sections:[
      {heading:'心律不整的常見類型',format:'table',table:TABLE},
      {heading:'為什麼要重視心房顫動',format:'bullets',items:[
        '國健署指出，心房顫動會讓心臟打出的血量減少，更容易提高中風機率。',
        '醫師指出，研究顯示心房顫動患者中風風險約是一般人的5倍，且即使沒有明顯症狀，仍可能因血栓而導致中風。',
        '心房顫動發生率隨年齡增加，65歲以上更需留意，男性盛行率高於女性。'
      ]},
      {heading:'這樣做',format:'bullets',items:[
        '心跳不規則、不明原因胸悶、心悸或容易疲累，應及早就醫，由醫師安排心電圖等檢查。',
        '已確診者依醫囑治療與追蹤，不自行停藥。',
        '控制血壓、血糖、血脂，戒菸並減少飲酒，降低心血管風險。'
      ]}
    ],
    think_tank_view:'心律不整有些只是短暫的心悸，有些卻可能悄悄增加中風風險。若常感覺心跳亂跳、胸悶或莫名疲累，請讓醫師做個心電圖；特別是65歲以上的長輩，定期檢查比自己猜測更安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'心房顫動與中風關聯引自國健署，盛行率與中風倍數標明為醫師引述的媒體報導，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['心房顫動為腦中風危險因子（國健署2023年）','盛行率1.5%、中風風險5倍（醫師受訪，TVBS 2024年）'],
      layout_reason:'先用表格區分3種心律不整，再說明心房顫動與中風的關聯，最後給就醫與預防行動。',
      tone:'專業易懂', tone_reason:'需區分輕重，避免恐慌。',
      to_verify:['14萬人、1.5%未見衛福部原始報告','中風風險5倍未註明研究出處']},
    decision_points:[DP_AF]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'心臟突然亂跳、胸悶？認識心律不整與心房顫動',
    update_date:'2026/11/21',
    intro:'偶爾心跳漏一拍，很多人不以為意。但如果是「心房顫動」，可能會讓中風的機會變高。國健署把心房顫動列為腦中風的8大危險因子之一；醫師也提到，台灣心房顫動的盛行率約1.5%，年紀越大越常見。',
    sections:[
      {heading:'心律不整有這幾種',format:'table',table:TABLE},
      {heading:'心房顫動為什麼要注意？',format:'bullets',items:[
        '國健署說，心房顫動會讓心臟打出去的血變少，比較容易中風。',
        '醫師提醒，有些人完全沒感覺，也可能因為血栓而中風。',
        '65歲以上的長輩、男性要多留意。'
      ]},
      {heading:'可以這樣做',format:'bullets',items:[
        '常常心悸、胸悶、莫名很累，就去看心臟科。',
        '確診後藥要按時吃，不要自己停。',
        '血壓、血糖、血脂顧好，菸酒少碰。'
      ]}
    ],
    think_tank_view:'陪爸媽回診時，可以順便請醫師聽聽心跳、做個心電圖。早點發現心房顫動，就能早點預防中風。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料標明出處，盛行率標明為醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以「心跳漏一拍」的日常經驗切入。', tone:'生活親切', tone_reason:'給長輩與家屬閱讀。', to_verify:['盛行率為醫師引述']},
    decision_points:[DP_AF]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'心律不整：心房顫動提高中風機率',
    update_date:'2026/11/21',
    intro:'國健署將心房顫動列為腦中風危險因子。醫師引述2022年盛行率約1.5%，隨年齡增加。',
    sections:[
      {heading:'類型',format:'table',table:TABLE},
      {heading:'心房顫動',format:'bullets',items:[
        '心臟打出血量減少，易提高中風機率。',
        '部分患者無明顯症狀。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '心悸、胸悶及早就醫。',
        '依醫囑治療、控制三高。'
      ]}
    ],
    think_tank_view:'心跳不規則及早就醫，是預防心房顫動引發中風的關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料標明出處，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為類型、心房顫動、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['盛行率出處']},
    decision_points:[DP_AF]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'心律不整', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'心房顫動會提高中風機率', primary_visual:'約 1.5%', secondary_message:'部分患者沒有明顯症狀', action_priority:'心悸胸悶就醫做心電圖'},
    headline_hook:'心臟突然亂跳？', headline_main:'認識心律不整', title_accent:'心律不整',
    hero_message:'心房顫動', hero_support:'國健署列為腦中風 8 大危險因子之一',
    knowledge_title:'常見類型', knowledge_note:'心跳不規則，**請醫師做心電圖**',
    knowledge_cards:[
      {label:'心跳過快', icon:'heart', lines:['心悸','像在狂奔']},
      {label:'心跳過慢', icon:'heart', lines:['頭暈、疲倦','嚴重時昏倒']},
      {label:'心房顫動', icon:'brain', lines:['忽快忽慢','提高中風機率']}
    ],
    primary_stat:{value:'約 1.5%', label:'心房顫動盛行率（2022 年）', note:'醫師引述衛福部及國健署資料（媒體報導）'},
    secondary_stats:[
      {value:'約 5 倍', label:'中風風險（醫師引述研究）'},
      {value:'65 歲以上', label:'發生率明顯增加'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'醫', text:'心悸、胸悶、易疲累及早就醫'},
      {key:'測', text:'由醫師安排心電圖檢查'},
      {key:'藥', text:'確診後依醫囑治療，不自行停藥'},
      {key:'控', text:'控制三高、戒菸限酒'}
    ],
    carousel_suggestion:{reason:'若想把類型、心房顫動與中風關聯分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'心臟突然亂跳？', headline_main:'認識心律不整'},
      {layout_type:'data', headline_hook:'心房顫動', headline_main:'提高中風機率'},
      {layout_type:'action', headline_hook:'這樣做', headline_main:'心悸胸悶就醫'}]},
    hashtags:['心律不整','心房顫動','心悸','腦中風'],
    sources:['衛生福利部國民健康署','TVBS新聞網'],
    illustration_category:'heart',
    illustration:{topic:'心房顫動檢查', audience:'長輩與家人', scene:'醫師為長輩做心電圖檢查，家人在旁陪伴看著螢幕上的心跳波形',
      emotion:'安心、陪伴', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A doctor performing an ECG on an older adult while a family member watches the heartbeat waveform on the monitor, reassuring and supportive mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['心房顫動為腦中風危險因子（國健署）','盛行率約1.5%（醫師引述）'],
      layout_reason:'核心是辨識心律不整類型，選 knowledge：3 張類型卡當主角，盛行率與中風倍數退到下方並標出處。',
      tone:'專業易懂', tone_reason:'避免恐慌。',
      to_verify:['數字為媒體報導醫師說明']},
    decision_points:[Object.assign({}, DP_AF, {current:'約 1.5%｜2022 年（醫師引述）'})],
    content_check_note:'心房顫動與中風關聯引自國健署，數字標明為醫師說明，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'心律不整',
    collect:{
      summary:'心律不整中以心房顫動最受關注，國健署將其列為腦中風8大危險因子之一；醫師引述盛行率約1.5%且隨年齡上升，部分患者沒有症狀，「心跳亂跳及早就醫、預防中風」是主要溝通訊息。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約1.5%心房顫動盛行率：長庚醫師受訪引述衛福部及國健署資料，2022年台灣心房顫動盛行率達1.5%，2020年約14萬人被診斷（媒體報導，未註明原始報告）。',tag:'市場觀察',source:{name:'TVBS新聞網：「這種」心臟病讓中風發生率增5倍',url:'https://health.tvbs.com.tw/medical/350626'}},
        {item:'年度趨勢方向',desc:'65歲以上發生率明顯增加：醫師指出心房顫動發生率隨年齡增加而提高，男性盛行率高於女性，高齡化使患者人數逐年增加。',tag:'市場觀察',source:{name:'TVBS新聞網：「這種」心臟病讓中風發生率增5倍',url:'https://health.tvbs.com.tw/medical/350626'}},
        {item:'政策動向',desc:'8大腦中風危險因子之一：國健署將心房顫動列為腦中風危險因子，呼籲心跳不規則、不明原因胸悶或心悸者及早就醫。',tag:'官方統計',source:{name:'衛生福利部國民健康署：遠離腦中風 自我監控揪出危險因子',url:'https://www.mohw.gov.tw/cp-16-74897-1.html'}},
        {item:'好發族群年齡層',desc:'心臟疾病年死亡約2.3萬人：依2025年（114年）死因統計，心臟疾病（含心律不整等各類）死亡2萬2,907人，居十大死因第2位，未單獨列出心律不整。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}}
      ],
      product_view:['機會：心房顫動相關的中風與心臟治療可作為心血管保障的溝通情境。','機會：結合穿戴裝置心律提醒與就醫轉介的健康管理服務。','風險：不得推薦特定穿戴裝置品牌，也不得暗示裝置可取代醫療診斷。'],
      marketing_view:['機會：「心跳漏一拍」貼近日常經驗，可與腦中風主題串連。','機會：65歲以上長輩與子女是溝通對象。','風險：多數心悸為良性，避免讓讀者過度焦慮。'],
      alert_level:'low',
      alert_reason:'官方專屬統計有限，無政策事件，適合與腦中風主題搭配長期溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('2020年約14萬人被診斷為心房顫動，2022年盛行率達1.5%','SOURCE_EVIDENCE','secondary_citation',
          '數字為醫師受訪引述「衛福部及國健署資料」，報導未註明原始報告；兩個數字年份與口徑不同。','medium','yes',
          '衛福部或國健署心房顫動盛行率的原始資料。','no','confirm','屬二手引述。',
          null,['台灣心房顫動的盛行率約1.5%','醫師引述2022年盛行率約1.5%']),
        F('研究顯示心房顫動患者中風風險約是一般人的5倍','SOURCE_EVIDENCE','study_unnamed',
          '「5倍」未註明研究出處；國健署官方新聞稿只說「更容易提高中風機率」，未給倍數。','medium','yes',
          '心房顫動中風風險倍數的研究來源。','no','confirm','說法與國際文獻方向一致，但未附出處。',
          null),
        F('心跳過慢','MEDICAL_INTERPRETATION','advice_without_basis',
          '表格中各類型的表現描述未引用官方衛教來源。','low','yes',
          '醫學會心律不整衛教資料。','no','confirm','屬常見臨床描述。',
          null),
        F('常常心悸、胸悶、莫名很累，就去看心臟科','RISK_COMMUNICATION_SCOPE','urgency_unspecified',
          '未區分急症：若伴隨胸痛、昏倒或呼吸困難，應立即撥打119，而非等待門診。','medium','no',
          null,'no','clarify','屬就醫時機補充。',
          '常常心悸、胸悶、莫名很累，就去看心臟科；若胸痛、昏倒或喘不過氣，立刻打119')
      ],
      card:[
        F('心房顫動盛行率（2022 年）','SOURCE_EVIDENCE','secondary_citation',
          '主數字為醫師引述，非官方公布。','medium','yes',
          '官方原始資料。','no','confirm','屬二手引述。',
          null),
        F('中風風險（醫師引述研究）','SOURCE_EVIDENCE','study_unnamed',
          '「約 5 倍」未附研究出處。','low','yes',
          '研究來源。','no','confirm','屬醫師說明。',
          null)
      ]
    },
    title_alts:[
      '心律不整：心跳亂跳別輕忽，心房顫動是腦中風危險因子',
      '心臟突然亂跳、胸悶？認識心律不整與心房顫動',
      '心房顫動提高中風機率：心律不整的類型與就醫時機'
    ],
    card_title_alts:[
      ['心臟突然亂跳？','認識心律不整'],
      ['心房顫動','提高中風機率'],
      ['心悸胸悶','請醫師做心電圖']
    ],
    data_addon:[
      '國健署腦中風8大危險因子：吸菸、運動量不足、肥胖、高血壓、糖尿病、膽固醇過高、心房顫動及腦中風家族史。',
      '醫師引述研究：心房顫動產生的血塊約9成源自左心耳。',
      '衛福部114年死因統計：腦血管疾病死亡1萬2,425人，居十大死因第4位。'
    ],
    cta:'下次陪長輩回診時，請醫師聽聽心跳；若常心悸或心跳亂跳，安排一次心電圖檢查。'
  });
})();
