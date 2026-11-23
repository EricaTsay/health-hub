/* v6 示範主題：便祕（B4 消化・肝膽・呼吸）
   查證日期：2026-11-21。數據來源：國健署〈您今天膳食纖維吃夠了嗎? 選國產、多樣吃、餐餐有全榖〉（2023/10/12發布、2024/10/11更新，引2017-2020年國民營養健康調查）、
   衛福部新營醫院〈痔瘡護理〉（排便習慣建議）、衛福部114年死因統計（結腸、直腸和肛門癌）。
   註：國內便祕盛行率查無官方統計，本題以膳食纖維攝取不足的官方數據呈現。
   參考方向：健康智庫〈便祕困擾如何解〉2023/12、〈天天排便就健康？糞便細節要注意！〉2025/03。 */
(function(){
  const REFS = [
    {title:'您今天膳食纖維吃夠了嗎? 選國產、多樣吃、餐餐有全榖',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=17556'},
    {title:'痔瘡護理',source:'衛生福利部新營醫院',url:'https://www.syh.mohw.gov.tw/?aid=626&pid=105&page_name=detail&iid=38'},
    {title:'114年死因統計摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}
  ];
  const TABLE = {headers:['改善便祕','怎麼做'], rows:[
    ['吃夠纖維','三餐把精製澱粉換成全榖雜糧，搭配足夠蔬菜水果'],
    ['喝夠水','纖維需要水分才能讓大便鬆軟'],
    ['規律排便','每天固定時間如廁，有便意不要忍'],
    ['動起來','規律運動、減少久坐，幫助腸道蠕動'],
    ['如廁習慣','不在馬桶上滑手機、看書報，避免久蹲']
  ]};
  const TAGS = ['便祕','膳食纖維','全榖雜糧','腸道健康','排便習慣'];

  const DP_FIBER = {id:'dp-con-fiber', type:'data_scope', title:'用纖維攝取說明便祕風險',
    desc:'國內便祕盛行率查無官方統計。文中「各年齡族群膳食纖維攝取皆未達建議量、青少年僅33~38%」出自國健署引用的2017-2020年國民營養健康調查，是飲食狀況，不等於便祕比例。',
    current:'青少年膳食纖維攝取僅達建議量33~38%（2017-2020年國民營養健康調查）',
    options:[{label:'沿用目前資料', action:'keep'}]};

  const PRO = {
    content_type:'健康文章',
    title:'便祕不只是小事：從膳食纖維、喝水到排便習慣的5個改善方法',
    update_date:'2026/11/21',
    intro:'便祕常見的表現包括排便次數變少、大便乾硬、排便費力或有排不乾淨的感覺。飲食中膳食纖維不足是重要原因之一：國民健康署依2017-2020年國民營養健康調查指出，各年齡族群膳食纖維平均攝取量皆未達建議量，青少年最不足，僅達建議量的33~38%。以每日1800大卡計，建議每天攝取25公克膳食纖維；把三餐精製澱粉換成全榖雜糧，就能增加約7.9公克。',
    sections:[
      {heading:'改善便祕5個方法',format:'table',table:TABLE},
      {heading:'這些情況要就醫',format:'bullets',items:[
        '排便習慣突然改變，持續數週未改善。',
        '大便帶血、黑便，或伴隨體重減輕、貧血。',
        '腹痛、腹脹嚴重，或長期依賴瀉藥才能排便。',
        '大腸直腸疾病也可能造成排便改變，114年結腸、直腸和肛門癌死亡7,146人，有警訊應及早檢查。'
      ]},
      {heading:'使用軟便藥的提醒',format:'bullets',items:[
        '瀉藥或軟便劑應依醫師、藥師建議使用，避免長期自行服用。',
        '同時服用多種藥物的長者，部分藥物可能造成便祕，可請醫師評估。'
      ]}
    ],
    think_tank_view:'很多人便祕就買瀉藥，卻忽略最基本的纖維和水分。國健署資料顯示國人纖維普遍吃不夠，把白飯換成糙米或五穀飯、每餐多一份蔬菜，往往就能改善。但若排便習慣突然改變或出現血便，別只當成便祕，請儘早就醫檢查。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'膳食纖維數據引自國健署並標明調查年份，排便習慣建議引自衛福部醫院衛教，未寫無官方來源的便祕盛行率，未使用療效保證用語，未推薦特定保健品。',
    ai_rationale:{basis:['膳食纖維攝取不足、青少年33~38%、25公克、7.9公克取自國健署2023/10/12新聞（2017-2020年調查）','大腸直腸癌死亡7,146人取自衛福部114年死因統計'],
      layout_reason:'以表格整理5個改善方法，再列就醫時機與用藥提醒。',
      tone:'專業易懂', tone_reason:'給一般民眾具體可行的方法。',
      to_verify:['國內便祕盛行率查無官方統計','2017-2020年為目前查到的最新一期營養調查']},
    decision_points:[DP_FIBER]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'好幾天上不出來？5招找回順暢',
    update_date:'2026/11/21',
    intro:'好幾天沒上大號、大便又乾又硬，真的很難受。國健署調查發現，各年齡層的人膳食纖維都吃不夠，青少年更只吃到建議量的三成多。其實把白飯換成糙米、多吃蔬菜水果、多喝水，很多時候就能改善。',
    sections:[
      {heading:'5招找回順暢',format:'table',table:TABLE},
      {heading:'這些狀況要看醫生',format:'bullets',items:[
        '排便習慣突然改變，好幾週都沒好。',
        '大便有血、黑黑的，或一直變瘦。',
        '肚子很脹很痛，或不吃瀉藥就上不出來。'
      ]},
      {heading:'瀉藥不要亂吃',format:'bullets',items:[
        '軟便藥、瀉藥要問過醫師或藥師。',
        '長輩吃的藥如果很多種，也可能造成便祕，可以請醫師看看。'
      ]}
    ],
    think_tank_view:'從明天早餐開始，白吐司換成全麥、加一份水果，再配一大杯水，腸子會慢慢給你回應。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明調查年份，未使用療效保證用語，未推薦特定保健品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從便祕的不適感切入。', tone:'生活親切', tone_reason:'給一般民眾閱讀。', to_verify:['便祕盛行率查無官方統計']},
    decision_points:[DP_FIBER]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'便祕：5個改善方法與就醫警訊',
    update_date:'2026/11/21',
    intro:'國人各年齡族群膳食纖維攝取皆未達建議量（國健署，2017-2020年調查）。改善便祕從纖維、水分與排便習慣開始。',
    sections:[
      {heading:'改善方法',format:'table',table:TABLE},
      {heading:'就醫警訊',format:'bullets',items:[
        '排便習慣改變、血便、變瘦。'
      ]},
      {heading:'用藥',format:'bullets',items:[
        '瀉藥依醫師藥師建議使用。'
      ]}
    ],
    think_tank_view:'纖維、水分、運動、規律如廁，是改善便祕的四大基本功。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署並標明調查年份，未使用療效保證用語，未推薦特定保健品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為方法、警訊、用藥三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['便祕盛行率查無官方統計']},
    decision_points:[DP_FIBER]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'便祕', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'國人膳食纖維普遍吃不夠', primary_visual:'25 公克', secondary_message:'排便習慣改變或血便要就醫', action_priority:'纖維、水、動、定時'},
    headline_hook:'好幾天上不出來？', headline_main:'找回順暢 4 件事', title_accent:'4 件事',
    hero_message:'每天 25 公克膳食纖維', hero_support:'以每日 1800 大卡計（國健署）',
    action_title:'找回順暢這樣做',
    action_cards:[
      {key:'換', text:'精製澱粉換全榖，多吃蔬果'},
      {key:'喝', text:'喝夠水，讓纖維發揮作用'},
      {key:'動', text:'規律運動，減少久坐'},
      {key:'定', text:'固定時間如廁，有便意別忍'}
    ],
    notice:'排便習慣突然改變、**血便或黑便**，請就醫檢查，不要自行長期吃瀉藥。',
    carousel_suggestion:{reason:'若想把纖維數據、改善方法與就醫警訊分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'纖維吃夠了嗎', headline_main:'青少年只吃到建議量 3 成多'},
      {layout_type:'action', headline_hook:'找回順暢', headline_main:'4 件事一起做'},
      {layout_type:'knowledge', headline_hook:'不只是便祕', headline_main:'這些警訊要就醫'}]},
    hashtags:['便祕','膳食纖維','全榖雜糧','腸道健康'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'nutrition',
    illustration:{topic:'高纖飲食', audience:'一般民眾', scene:'早餐桌上擺著糙米飯糰、水果和一大杯水',
      emotion:'清爽、輕鬆', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A breakfast table with a brown rice ball, fresh fruit and a large glass of water, fresh and light mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['25公克膳食纖維取自國健署（以每日1800大卡計）','排便習慣建議取自衛福部醫院衛教'],
      layout_reason:'便祕重點是日常改善行動，選 action：4 個行動當主角，纖維建議量放在 Hero。',
      tone:'專業易懂', tone_reason:'具體、可執行。',
      to_verify:['25公克以1800大卡計，實際依熱量需求不同']},
    content_check_note:'數據引自國健署，未使用療效保證用語，未推薦特定保健品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'便祕',
    collect:{
      summary:'便祕常與膳食纖維與水分不足、久坐有關，國健署依2017-2020年國民營養健康調查指出各年齡族群膳食纖維攝取皆未達建議量，青少年僅達33~38%；改善飲食與排便習慣、留意排便改變等警訊是溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'青少年僅達建議量3成多：國健署依2017-2020年國民營養健康調查指出，各年齡族群膳食纖維平均攝取量皆未達建議量，青少年最不足，僅達建議量的33%至38%（國內便祕盛行率查無官方統計）。',tag:'官方統計',source:{name:'國民健康署：您今天膳食纖維吃夠了嗎?',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=17556'}},
        {item:'政策動向',desc:'每天25公克：國健署以每日1800大卡計，建議每天攝取3碗全榖雜糧類、25公克膳食纖維，推廣「選國產、多樣吃、餐餐有全榖」。',tag:'官方統計',source:{name:'國民健康署：您今天膳食纖維吃夠了嗎?',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=17556'}},
        {item:'年度趨勢方向',desc:'一天建議量的30%：將三餐精製澱粉換成全榖及未精製雜糧，可增加約7.9公克膳食纖維。',tag:'官方統計',source:{name:'國民健康署：您今天膳食纖維吃夠了嗎?',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4705&pid=17556'}},
        {item:'好發族群年齡層',desc:'7146人死於大腸直腸癌：114年結腸、直腸和肛門癌死亡7,146人，排便習慣突然改變或血便時應就醫，不宜只當成便祕。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}}
      ],
      product_view:['機會：腸道健康、高纖飲食是保戶健康促進的日常主題。','機會：可串連大腸癌篩檢提醒。','風險：避免推薦酵素、益生菌、瀉藥等產品為便祕解方。'],
      marketing_view:['機會：「好幾天上不出來？」共鳴度高。','機會：全榖替換的具體做法適合做成料理內容。','風險：議題較私密，用語輕鬆但不低俗。'],
      alert_level:'low',
      alert_reason:'屬常見生活型態議題，無急迫時效事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('飲食中膳食纖維不足是重要原因之一','SOURCE_EVIDENCE','unsourced_claim',
          '國健署文章談的是纖維攝取不足，未直接說明與便祕的因果；文中將兩者連結，缺乏出處。','low','no',
          null,'no','clarify','屬出處補充。',
          '膳食纖維不足可能是原因之一（請依個人狀況就醫評估）'),
        F('以每日1800大卡計，建議每天攝取25公克膳食纖維','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '25公克是以1800大卡為例的換算，熱量需求不同的人建議量也不同，文中未提醒。','low','no',
          null,'no','clarify','屬適用範圍說明。',
          '以每日1800大卡為例，建議每天攝取25公克膳食纖維（實際依個人熱量需求調整）'),
        F('往往就能改善','MEDICAL_INTERPRETATION','outcome_generalization',
          '「往往」缺乏依據，可能讓需要就醫的人延誤。','low','no',
          null,'no','clarify','屬語氣調整。',
          '有助於改善',
          ['很多時候就能改善']),
        F('腸子會慢慢給你回應','TERMINOLOGY_LANGUAGE','tone_casual',
          '擬人化說法可能讓讀者期待一定改善。','low','no',
          null,'no','clarify','屬語氣調整。',
          '持續一段時間，觀察排便是否改善')
      ],
      card:[
        F('以每日 1800 大卡計（國健署）','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '建議量依熱量需求不同，卡面未提醒個人差異。','low','no',
          null,'no','clarify','屬適用範圍說明。',
          '以每日 1800 大卡為例（國健署），依個人需求調整'),
        F('喝夠水，讓纖維發揮作用','MEDICAL_INTERPRETATION','individualized_care',
          '心臟、腎臟疾病需限水者不適用，卡面未提醒。','low','no',
          null,'no','clarify','屬適用對象說明。',
          '喝夠水（需限水者依醫囑），讓纖維發揮作用')
      ]
    },
    title_alts:[
      '便祕不只是小事：從膳食纖維、喝水到排便習慣的5個改善方法',
      '好幾天上不出來？5招找回順暢',
      '國人纖維普遍吃不夠：改善便祕從餐餐有全榖開始'
    ],
    card_title_alts:[
      ['好幾天上不出來？','找回順暢 4 件事'],
      ['纖維吃夠了嗎？','每天 25 公克'],
      ['不只是便祕','排便改變要就醫']
    ],
    data_addon:[
      '國健署指出，攝取足夠全榖及未精製雜糧可降低21%糖尿病、15%高血壓、29%心血管疾病風險。',
      '國健署推廣「選國產、多樣吃、餐餐有全榖」。',
      '坐馬桶時避免看書報、滑手機，減少久蹲。'
    ],
    cta:'從明天起把一餐的白飯換成糙米或五穀飯、多喝一杯水，並固定每天早餐後如廁；若有血便或排便習慣突然改變，請就醫。'
  });
})();
