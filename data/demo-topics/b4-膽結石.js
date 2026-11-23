/* v6 示範主題：膽結石（B4 消化・肝膽・呼吸）
   查證日期：2026-11-20。數據來源：衛生福利部臺北醫院〈好膽邁走－談膽結石〉（2021-11-29張貼）。
   註：國內膽結石盛行率與膽囊切除手術人數查無官方公布統計，本題不寫盛行率，收集頁以部立醫院衛教的臨床資訊為主。
   參考方向：健康智庫〈膽結石〉2022/08。 */
(function(){
  const REFS = [
    {title:'好膽邁走－談膽結石',source:'衛生福利部臺北醫院',url:'https://www.tph.mohw.gov.tw/?aid=801&pid=10&page_name=detail&iid=942'}
  ];
  const TABLE = {headers:['治療選擇','說明'], rows:[
    ['膽囊切除術','有症狀或曾有膽囊炎者建議施行；腹腔鏡手術只需在腹壁打四個小洞'],
    ['無症狀者','多可追蹤；合併糖尿病、結石太多、膽囊壁過厚或鈣化時仍建議切除'],
    ['藥物溶石','只適用少部分膽固醇結石，需長期服用、停藥後易再發'],
    ['體外震波碎石','不適用於膽結石']
  ]};
  const TAGS = ['膽結石','膽囊炎','腹腔鏡手術','腸胃健康','飲食控制'];

  const DP_NONE = {id:'dp-gs-data', type:'data_scope', title:'沒有官方盛行率',
    desc:'國內膽結石盛行率與膽囊切除手術人數查無官方公布統計，AI 沒有寫入任何比例，文章以衛福部臺北醫院的衛教內容為主。',
    current:'未引用盛行率',
    options:[{label:'沿用目前資料', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'飯後右上腹痛？認識膽結石的警訊、檢查與治療選擇',
    update_date:'2026/11/20',
    intro:'膽結石是膽汁成分在膽囊內沉積形成的結石，衛生福利部臺北醫院衛教指出，發生率隨年齡上升，尤其好發於四十歲以上的肥胖女性；台灣傳統上以膽色素結石為主，近年膽固醇結石比例增加。大多數患者沒有症狀，常在健檢超音波意外發現；一旦出現右上腹痛合併發燒、黃疸，就要懷疑急性膽囊炎。',
    sections:[
      {heading:'這些症狀要就醫',format:'bullets',items:[
        '右上腹疼痛，尤其是吃完油膩食物後不適。',
        '腹痛合併發燒、畏寒，或皮膚、眼白變黃（黃疸）。',
        '腹部超音波是最迅速確實的檢查，空腹八小時後檢查較準確。'
      ]},
      {heading:'治療怎麼選',format:'table',table:TABLE},
      {heading:'日常預防',format:'bullets',items:[
        '高卡路里與高油脂飲食容易產生膽固醇結石，建議採高纖清淡飲食。',
        '維持理想體重，避免肥胖。',
        '健檢發現膽結石，依醫師建議定期追蹤。'
      ]}
    ],
    think_tank_view:'健檢報告寫「膽結石」不必驚慌，多數人終身沒有症狀。真正要注意的是右上腹痛合併發燒或黃疸，這可能是膽囊炎或膽管阻塞，延誤可能引發嚴重感染。腹腔鏡手術傷口小、住院時間短，有症狀時與外科醫師討論治療時機，比一再忍痛更好。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'臨床資訊引自衛福部臺北醫院衛教，未寫無官方來源的盛行率，未使用療效保證用語，未推薦溶石保健品。',
    ai_rationale:{basis:['好發族群、症狀、檢查與治療取自衛福部臺北醫院衛教'],
      layout_reason:'先列就醫警訊，再以表格整理治療選擇，最後提醒預防。',
      tone:'專業易懂', tone_reason:'健檢發現膽結石的讀者需要清楚判斷何時就醫。',
      to_verify:['國內膽結石盛行率查無官方統計','臺北醫院衛教為2021年張貼']},
    decision_points:[DP_NONE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'健檢發現膽結石怎麼辦？這些症狀出現才要緊張',
    update_date:'2026/11/20',
    intro:'很多人是在健檢照超音波時，才知道自己有膽結石。衛福部臺北醫院提醒，大多數人沒有症狀，不用太擔心；但如果吃完油膩的東西右上腹痛，還發燒、眼睛變黃，就要趕快看醫生。',
    sections:[
      {heading:'這些情況要就醫',format:'bullets',items:[
        '右上腹痛，吃油膩後特別明顯。',
        '肚子痛又發燒、發冷。',
        '皮膚或眼白變黃。'
      ]},
      {heading:'要開刀嗎？',format:'table',table:TABLE},
      {heading:'平常這樣吃',format:'bullets',items:[
        '少吃高油、高熱量食物，多吃高纖清淡的餐點。',
        '維持理想體重。',
        '健檢有結石就照醫師建議追蹤。'
      ]}
    ],
    think_tank_view:'沒症狀就定期追蹤，有症狀別一直忍。現在的腹腔鏡手術傷口小、恢復快，可以和醫師好好討論。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資訊引自衛福部臺北醫院衛教，未使用療效保證用語，未推薦溶石保健品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'從健檢報告的情境切入。', tone:'生活親切', tone_reason:'給健檢族群閱讀。', to_verify:['盛行率查無官方統計']},
    decision_points:[DP_NONE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'膽結石：警訊與治療選擇',
    update_date:'2026/11/20',
    intro:'膽結石多數無症狀（衛福部臺北醫院）。右上腹痛合併發燒、黃疸要就醫。',
    sections:[
      {heading:'警訊',format:'bullets',items:[
        '飯後右上腹痛、發燒、黃疸。'
      ]},
      {heading:'治療',format:'table',table:TABLE},
      {heading:'預防',format:'bullets',items:[
        '高纖清淡飲食、維持理想體重。'
      ]}
    ],
    think_tank_view:'無症狀追蹤、有症狀及早處理。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資訊引自衛福部臺北醫院衛教，未使用療效保證用語，未推薦溶石保健品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為警訊、治療、預防三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['盛行率查無官方統計']},
    decision_points:[DP_NONE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'膽結石', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'多數膽結石沒有症狀', primary_visual:'3 個警訊', secondary_message:'腹痛加發燒、黃疸要就醫', action_priority:'有症狀及早處理'},
    headline_hook:'健檢發現膽結石？', headline_main:'這 3 個警訊要就醫', title_accent:'3 個警訊',
    hero_message:'大多數人沒有症狀', hero_support:'常在健檢超音波意外發現（衛福部臺北醫院）',
    knowledge_title:'就醫警訊', knowledge_note:'出現警訊，可能是**急性膽囊炎**',
    knowledge_cards:[
      {label:'右上腹痛', lines:['吃油膩後明顯']},
      {label:'發燒畏寒', lines:['合併腹痛']},
      {label:'黃疸', lines:['皮膚、眼白變黃']}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'吃', text:'高纖清淡，少高油高熱量'},
      {key:'控', text:'維持理想體重'},
      {key:'追', text:'無症狀依醫師建議定期追蹤'},
      {key:'醫', text:'有症狀與外科醫師討論手術'}
    ],
    carousel_suggestion:{reason:'若想把警訊、治療選擇與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'健檢發現膽結石？', headline_main:'3 個就醫警訊'},
      {layout_type:'knowledge', headline_hook:'要不要開刀', headline_main:'4 種情況怎麼選'},
      {layout_type:'action', headline_hook:'日常預防', headline_main:'高纖清淡、控制體重'}]},
    hashtags:['膽結石','膽囊炎','腹腔鏡手術','腸胃健康'],
    sources:['衛生福利部臺北醫院'],
    illustration_category:'screening-checkup',
    illustration:{topic:'膽結石檢查', audience:'中壯年', scene:'醫師在診間指著腹部超音波影像向病人說明',
      emotion:'安心、清楚', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A doctor pointing at an abdominal ultrasound image while explaining to a patient in a clinic, reassured mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['症狀與治療取自衛福部臺北醫院衛教'],
      layout_reason:'國內缺乏官方盛行率，核心是「多數無症狀，但要認得警訊」，選 knowledge：3 個警訊當主角，不放主數字。',
      tone:'專業易懂', tone_reason:'避免恐慌，引導適時就醫。',
      to_verify:['卡面未放比例，因查無官方統計']},
    content_check_note:'資訊引自衛福部臺北醫院衛教，未使用療效保證用語，未推薦溶石保健品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'膽結石',
    collect:{
      summary:'膽結石多數無症狀、常在健檢超音波發現，好發於四十歲以上肥胖女性；右上腹痛合併發燒、黃疸需警覺急性膽囊炎。國內缺乏官方盛行率，溝通重點是「無症狀追蹤、有症狀及早處理」與腹腔鏡手術資訊。',
      objective_data:[
        {item:'好發族群年齡層',desc:'四十歲以上：衛福部臺北醫院衛教指出，膽結石發生率隨年齡上升，尤其好發於四十歲以上的肥胖女性，國內盛行率查無官方統計。',tag:'官方統計',source:{name:'衛福部臺北醫院：好膽邁走－談膽結石',url:'https://www.tph.mohw.gov.tw/?aid=801&pid=10&page_name=detail&iid=942'}},
        {item:'盛行率／發生率',desc:'大多數無症狀：膽結石患者大多數沒有症狀，常因腹部超音波意外發現，近年國人膽固醇結石比例增加。',tag:'官方統計',source:{name:'衛福部臺北醫院：好膽邁走－談膽結石',url:'https://www.tph.mohw.gov.tw/?aid=801&pid=10&page_name=detail&iid=942'}},
        {item:'政策動向',desc:'住院2-3天：腹腔鏡膽囊切除只需在腹壁打四個小洞，住院日數縮短至2-3天，傳統手術切口約15-20公分。',tag:'官方統計',source:{name:'衛福部臺北醫院：好膽邁走－談膽結石',url:'https://www.tph.mohw.gov.tw/?aid=801&pid=10&page_name=detail&iid=942'}},
        {item:'年度趨勢方向',desc:'空腹8小時：腹部超音波是最迅速確實的檢查方式，空腹八小時後檢查較準確。',tag:'官方統計',source:{name:'衛福部臺北醫院：好膽邁走－談膽結石',url:'https://www.tph.mohw.gov.tw/?aid=801&pid=10&page_name=detail&iid=942'}}
      ],
      product_view:['機會：健檢常見發現，可提供健檢報告解讀與追蹤提醒服務。','機會：可說明住院手術醫療保障的基本觀念。','風險：避免推薦溶石、排石保健品。'],
      marketing_view:['機會：健檢季「報告看不懂」系列內容。','機會：「多數無症狀，不必驚慌」的安心訊息。','風險：缺乏官方盛行率，不宜自行估算人數。'],
      alert_level:'low',
      alert_reason:'屬常見消化系統議題，無急迫時效事件；適合在健檢季溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('尤其好發於四十歲以上的肥胖女性','TERMINOLOGY_LANGUAGE','stigmatizing_language',
          '「肥胖女性」的描述引自醫院衛教，但在大眾傳播中可能造成標籤化，可改為風險因子的中性描述。','low','no',
          null,'no','clarify','屬用語調整。',
          '四十歲以上、女性與體重過重者風險較高'),
        F('多數人終身沒有症狀','DATA_FACTUAL_ACCURACY','overgeneralization',
          '引用的衛教只寫「大多數患者無症狀」，未說明是否「終身」，文中說法比來源更強。','low','no',
          null,'no','clarify','屬表述精確度。',
          '大多數人沒有症狀'),
        F('延誤可能引發嚴重感染','SOURCE_EVIDENCE','unsourced_claim',
          '併發症說法未在引用的衛教中出現，缺乏出處。','low','no',
          null,'no','clarify','屬出處補充。',
          '應儘速就醫評估'),
        F('只適用少部分膽固醇結石，需長期服用、停藥後易再發','MEDICAL_INTERPRETATION','incomplete_info',
          '未說明台灣常見的膽色素結石對溶石藥物無效，讀者可能誤以為可先嘗試吃藥。','low','no',
          null,'no','clarify','屬資訊完整性。',
          '只適用少部分膽固醇結石，對膽色素結石無效，且需長期服用、停藥後易再發')
      ],
      card:[
        F('大多數人沒有症狀','MEDICAL_INTERPRETATION','reassurance_balance',
          'Hero 強調無症狀，可能讓讀者忽略追蹤，宜在同區塊提醒依醫師建議追蹤。','low','no',
          null,'no','clarify','屬訊息平衡。',
          '多數沒症狀，仍要定期追蹤'),
        F('有症狀與外科醫師討論手術','MEDICAL_INTERPRETATION','incomplete_info',
          '未提到曾有膽囊炎病史或合併糖尿病等情況也建議評估手術。','low','no',
          null,'no','clarify','屬適應症補充。',
          '有症狀或膽囊炎病史，與外科討論手術')
      ]
    },
    title_alts:[
      '飯後右上腹痛？認識膽結石的警訊、檢查與治療選擇',
      '健檢發現膽結石怎麼辦？這些症狀出現才要緊張',
      '膽結石多數沒症狀：3個就醫警訊與腹腔鏡手術'
    ],
    card_title_alts:[
      ['健檢發現膽結石？','這 3 個警訊要就醫'],
      ['多數膽結石沒症狀','但要認得警訊'],
      ['要不要開刀？','膽結石治療怎麼選']
    ],
    data_addon:[
      '膽結石可分為膽色素結石與膽固醇結石，台灣過去以膽色素結石為主。',
      '膽囊切除術後部分患者有短期腹瀉，藥物控制後通常改善。',
      '部分膽結石可在腹部X光看見。'
    ],
    cta:'如果健檢報告寫膽結石，先確認有沒有右上腹痛、發燒或黃疸；沒有症狀就依醫師建議定期追蹤，有症狀請掛一般外科或腸胃科。'
  });
})();
