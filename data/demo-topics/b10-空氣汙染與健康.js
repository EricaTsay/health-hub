/* v6 示範主題：空氣汙染與健康（B10 食品安全・事故傷害・用藥與環境）
   查證日期：2026-11-20。數據來源：環境部即時新聞澄清（2026，引用115-03-15公布之114年空氣品質監測年報、108-114年PM2.5趨勢）、環境部113-09-30新聞稿（空氣品質標準修正）、國健署空污自我防護「3招6式」與防霾口罩衛教頁。
   參考方向：健康智庫〈致命隱形殺手－空氣汙染〉2022/12、〈霧霾來襲 如何保護眼睛健康〉2024/11。 */
(function(){
  const REFS = [
    {title:'澄清媒體誤解國外報告空品排名定義 臺灣空氣品質全球排名持續進步中（含114年空氣品質監測年報數據）',source:'環境部',url:'https://enews.moenv.gov.tw/moenv-news/zh-tw/News/1844'},
    {title:'接軌國際 環境部修正發布「空氣品質標準」並調整空氣品質指標 達亞洲最嚴',source:'環境部',url:'https://enews.moenv.gov.tw/moenv-news/zh-tw/News/2791'},
    {title:'秋冬季節易空品狀況不佳，國民健康署提醒民眾做好空污自我防護「3招6式」',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1405&pid=9887'},
    {title:'面對空污，民眾該如何選配適合的口罩？',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=578&pid=14519&sid=14142'}
  ];
  const TABLE = {headers:['年度','全國PM2.5年平均（µg/m³）'], rows:[
    ['108年','16.2'],
    ['110年','14.4'],
    ['112年','13.7'],
    ['113年','12.8'],
    ['114年','12.8（年平均標準已加嚴為12）']
  ]};
  const TAGS = ['空氣汙染','PM2.5','呼吸道健康','空品指標','口罩'];

  const DP_STD = {id:'dp-air-standard', type:'data_scope', title:'「改善」與「達標」是兩件事',
    desc:'全國PM2.5年平均由108年16.2降至114年12.8 µg/m³，改善21%；但環境部113年9月已把年平均標準由15加嚴為12 µg/m³，114年全國平均仍略高於新標準。強調改善或強調未達新標，訊息方向不同，AI 沒有替你決定。',
    current:'全國PM2.5年平均由108年16.2降至114年12.8 µg/m³，改善率21%',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'12.8', value:'114年全國年平均', note:'環境部114年空氣品質監測年報（目前採用）'},
      {label:'12', value:'新年平均標準', note:'113年9月30日修正發布，原為15 µg/m³'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'PM2.5六年降了21%：空品不良時，敏感族群怎麼自我防護',
    update_date:'2026/11/20',
    intro:'依環境部115年3月公布的114年空氣品質監測年報，全國PM2.5年平均濃度為12.8 µg/m³，與113年持平，較108年的16.2 µg/m³改善21%；中南部地區由19.6降至14.8 µg/m³。環境部並於113年9月把PM2.5年平均標準由15加嚴為12 µg/m³。整體空品雖持續改善，秋冬季節與中南部仍常出現空品不良，心肺疾病患者、長者與孩童需要特別留意。',
    sections:[
      {heading:'全國PM2.5年平均趨勢',format:'table',table:TABLE},
      {heading:'誰是空污的敏感族群',format:'bullets',items:[
        '患有心臟、呼吸道或心血管疾病的成人與孩童。',
        '老年人。',
        '有氣喘的人，空品不良時可能需要增加吸入劑使用頻率，應依醫囑調整。'
      ]},
      {heading:'空品不良時的自我防護',format:'bullets',items:[
        '出門前查詢環境部空氣品質指標，敏感族群避免戶外與耗費體力的活動。',
        '必要外出時配戴與臉部密合的口罩，PM2.5濃度偏高時可選符合CNS 15980的防霾口罩。',
        '避開交通尖峰時段與路段，進入室內後洗手、洗臉並清潔鼻腔。',
        '出現眼痛、咳嗽或喉嚨痛時，避免戶外活動。'
      ]}
    ],
    think_tank_view:'空氣品質是整體在變好，但個人感受取決於「當天、當地」。把查空品指標變成和看天氣一樣的出門習慣，對心肺疾病患者與長輩來說，是成本最低、效果最直接的保護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'PM2.5濃度與標準引自環境部並標明年份，防護建議引自國健署，未涉及具體口罩或清淨機品牌。',
    ai_rationale:{basis:['沿用步驟1洞察：114年全國PM2.5年平均12.8 µg/m³，較108年改善21%（環境部）','空品標準加嚴為12 µg/m³（環境部113年新聞稿）'],
      layout_reason:'先用表格呈現長期改善趨勢，再說明敏感族群，最後給空品不良日的防護步驟。',
      tone:'專業易懂', tone_reason:'需同時呈現改善與仍需防護的訊息。',
      to_verify:['國健署防護衛教頁發布年份較早，空品指標分級已隨113年標準修正調整']},
    decision_points:[DP_STD]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'天空灰灰的要不要出門？空污日的自保小撇步',
    update_date:'2026/11/20',
    intro:'台灣的空氣其實有在變好：環境部統計，全國PM2.5年平均從108年的16.2降到114年的12.8 µg/m³，6年少了2成多。不過到了秋冬，中南部還是常出現灰濛濛的日子。家裡有長輩、小孩，或有氣喘、心臟病的人，出門前記得先看一下空品指標。',
    sections:[
      {heading:'這幾年的PM2.5變化',format:'table',table:TABLE},
      {heading:'誰最怕空污？',format:'bullets',items:[
        '有心臟病、氣喘或呼吸道疾病的大人和小孩。',
        '家中長輩。',
        '有氣喘的人，空污日可能要依醫師指示調整用藥。'
      ]},
      {heading:'空污日這樣保護自己',format:'bullets',items:[
        '出門前看空品指標，空氣差就改成室內活動。',
        '一定要出門就戴口罩，記得要貼合臉部。',
        '避開上下班車多的路段，回家先洗手洗臉。',
        '眼睛痛、咳嗽、喉嚨痛就別再待在外面。'
      ]}
    ],
    think_tank_view:'就像出門前看天氣決定帶不帶傘，順手看一下空品指標，就能決定今天帶長輩去公園還是改去室內走走。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自環境部並標明年份，「少了2成多」依改善率21%描述，防護建議引自國健署，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「要不要出門」的生活決定切入。', tone:'生活親切', tone_reason:'給家有長輩、孩童的讀者。', to_verify:[]},
    decision_points:[DP_STD]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'空污防護：查指標、戴口罩、減少戶外',
    update_date:'2026/11/20',
    intro:'114年全國PM2.5年平均12.8 µg/m³，較108年改善21%；PM2.5年平均標準已加嚴為12 µg/m³。',
    sections:[
      {heading:'PM2.5趨勢',format:'table',table:TABLE},
      {heading:'敏感族群',format:'bullets',items:[
        '心肺與呼吸道疾病患者。',
        '長者與孩童。'
      ]},
      {heading:'空污日防護',format:'bullets',items:[
        '查空品指標，減少戶外活動。',
        '外出配戴密合口罩。',
        '回室內洗手洗臉、清潔鼻腔。'
      ]}
    ],
    think_tank_view:'空品整體改善，但秋冬與中南部仍需留意；敏感族群出門前查指標是基本功。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自環境部並標明年份，防護建議引自國健署，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為趨勢、族群、防護三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'空氣汙染與健康', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'PM2.5 六年改善 21%', primary_visual:'12.8', secondary_message:'敏感族群空污日仍需防護', action_priority:'查指標、戴口罩、減少戶外'},
    headline_hook:'空氣變好了嗎？', headline_main:'PM2.5 六年降 21%', title_accent:'降 21%',
    primary_stat:{kicker:'114 年・全國年平均', value:'12.8', label:'PM2.5（µg/m³）', note:'環境部空氣品質監測年報｜108 年為 16.2'},
    chart:{type:'bar', title:'全國 PM2.5 年平均（µg/m³）', points:[
      {label:'2019', value:16.2, display:'16.2'},
      {label:'2021', value:14.4, display:'14.4'},
      {label:'2023', value:13.7, display:'13.7'},
      {label:'2024', value:12.8, display:'12.8'},
      {label:'2025', value:12.8, display:'12.8', highlight:true}
    ], note:'環境部手動標準方法｜年平均標準 113 年起加嚴為 12'},
    secondary_stats:[
      {value:'-21%', label:'108→114 年改善率'},
      {value:'14.8', label:'114 年中南部平均'}
    ],
    action_title:'空污日這樣做',
    action_cards:[
      {key:'查', text:'出門前查空氣品質指標'},
      {key:'減', text:'敏感族群減少戶外與劇烈活動'},
      {key:'戴', text:'外出配戴密合口罩'},
      {key:'洗', text:'回室內洗手洗臉、清潔鼻腔'}
    ],
    carousel_suggestion:{reason:'若想把趨勢、敏感族群與防護分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'空氣變好了嗎？', headline_main:'PM2.5 六年降 21%'},
      {layout_type:'knowledge', headline_hook:'誰最怕空污', headline_main:'3 類敏感族群'},
      {layout_type:'action', headline_hook:'空污日', headline_main:'4 個自我防護動作'}]},
    hashtags:['空氣汙染','PM2.5','呼吸道健康','空品指標'],
    sources:['環境部','衛生福利部國民健康署'],
    illustration_category:'general',
    illustration:{topic:'空污自我防護', audience:'長者、孩童與家長', scene:'家長出門前用手機查看空氣品質指標，孩子戴好口罩準備出門',
      emotion:'謹慎、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A parent checking an air quality index app on a phone before going out while a child wears a well-fitted face mask, careful and calm, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：114年全國PM2.5年平均12.8 µg/m³（環境部）','108-114年趨勢取自環境部新聞稿圖一'],
      layout_reason:'有清楚的年度趨勢，選 data：年平均濃度當主角、直條圖呈現改善，最後給空污日 4 個防護動作。',
      tone:'專業易懂', tone_reason:'先肯定改善，再提醒防護。',
      to_verify:['直條圖年份間距不等（略去109、111年）']},
    decision_points:[Object.assign({}, DP_STD, {current:'12.8｜114 年全國 PM2.5 年平均（µg/m³）'})],
    content_check_note:'濃度與標準引自環境部並標明年份，防護建議引自國健署，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'空氣汙染與健康',
    collect:{
      summary:'114年全國PM2.5年平均12.8 µg/m³，較108年改善21%，但環境部已將年平均標準加嚴為12 µg/m³，全國平均仍略高於新標準；秋冬與中南部空品不良日仍多，心肺疾病患者、長者與孩童是需要防護的敏感族群。',
      objective_data:[
        {item:'盛行率／發生率',desc:'12.8 µg/m³：環境部115年3月15日公布114年空氣品質監測年報，全國PM2.5平均濃度為12.8 µg/m³，與113年持平。',tag:'官方統計',source:{name:'環境部：臺灣空氣品質全球排名持續進步中',url:'https://enews.moenv.gov.tw/moenv-news/zh-tw/News/1844'}},
        {item:'年度趨勢方向',desc:'改善率21%：全國PM2.5年平均由108年16.2 µg/m³降至114年12.8 µg/m³，中南部地區由19.6降至14.8 µg/m³、改善24.4%。',tag:'官方統計',source:{name:'環境部：臺灣空氣品質全球排名持續進步中',url:'https://enews.moenv.gov.tw/moenv-news/zh-tw/News/1844'}},
        {item:'政策動向',desc:'年平均標準加嚴為12 µg/m³：環境部113年9月30日修正發布空氣品質標準，PM2.5年平均與日平均分別由15、35加嚴為12、30 µg/m³，並調整空氣品質指標。',tag:'官方統計',source:{name:'環境部：修正發布「空氣品質標準」',url:'https://enews.moenv.gov.tw/moenv-news/zh-tw/News/2791'}},
        {item:'好發族群年齡層',desc:'3類敏感族群：國健署提醒心臟、呼吸道及心血管疾病患者（成人與孩童）與老年人，在空品不良時應避免戶外與耗費體力的活動，必要外出配戴密合口罩。',tag:'官方統計',source:{name:'國健署：空污自我防護「3招6式」',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=1405&pid=9887'}}
      ],
      product_view:['機會：空污與呼吸道、心血管疾病相關，可連結醫療與重大疾病保障的衛教說明。','機會：空品不良日的推播提醒可作為保戶健康關懷服務。','風險：避免推薦特定口罩或空氣清淨機品牌；不宜誇大空污與單一疾病的因果關係。'],
      marketing_view:['機會：秋冬季節是空品不良高峰，可固定溝通。','機會：「出門前看空品指標」可設計成簡單的生活習慣挑戰。','風險：「空氣變好」與「仍未達新標準」兩種訊息易混淆，宜清楚說明。'],
      alert_level:'low',
      alert_reason:'屬長期環境健康議題，整體趨勢改善；秋冬空品不良季節可加強溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('中南部地區由19.6降至14.8 µg/m³','DATA_FACTUAL_ACCURACY','scope_unstated',
          '「中南部地區」未說明包含哪些縣市或空品區，讀者無法對照自己所在地；各縣市114年平均差異大（約6.5至18.2 µg/m³）。','low','no',
          null,'no','clarify','屬範圍說明。',
          '中南部地區（依環境部空品區劃分）由19.6降至14.8 µg/m³'),
        F('較108年的16.2 µg/m³改善21%','DATA_FACTUAL_ACCURACY','baseline_choice',
          '改善率以108年為基準（環境部說法）；若以102年24.0 µg/m³為基準，改善幅度約47%。不同基準年會讓改善幅度差很多，文中未說明為何選108年。','low','no',
          null,'no','clarify','屬基準年說明。',
          '較108年（第一期空污防制方案前一年）的16.2 µg/m³改善21%',
          ['從108年的16.2降到114年的12.8 µg/m³，6年少了2成多','較108年改善21%']),
        F('有氣喘的人，空品不良時可能需要增加吸入劑使用頻率，應依醫囑調整','MEDICAL_INTERPRETATION','medication_advice',
          '「增加吸入劑使用頻率」屬個人用藥調整，即使加上「依醫囑」，仍可能被讀成可自行增加；宜改為「事先與醫師討論空污日的用藥計畫」。','medium','no',
          null,'no','clarify','屬用藥安全表達。',
          '有氣喘的人，宜事先與醫師討論空品不良時的用藥計畫',
          ['有氣喘的人，空污日可能要依醫師指示調整用藥'])
      ],
      card:[
        F('PM2.5（µg/m³）','DATA_FACTUAL_ACCURACY','missing_context',
          '主數字 12.8 未對照新標準 12，讀者無法判斷這個數值是好是壞。','low','no',
          null,'no','clarify','可在標籤補上標準值。',
          'PM2.5（µg/m³，標準 12）'),
        F('108→114 年改善率','DATA_FACTUAL_ACCURACY','baseline_choice',
          '改善率依基準年不同差異很大，卡面未說明以 108 年為基準的理由。','low','no',
          null,'no','clarify','屬基準年說明。',
          '108→114 年改善率（環境部）')
      ]
    },
    title_alts:[
      'PM2.5六年降了21%：空品不良時，敏感族群怎麼自我防護',
      '天空灰灰的要不要出門？空污日的自保小撇步',
      '空氣變好但標準更嚴：PM2.5現況與4個防護動作'
    ],
    card_title_alts:[
      ['空氣變好了嗎？','PM2.5 六年降 21%'],
      ['天空灰灰的要出門嗎？','空污日 4 個防護動作'],
      ['標準加嚴為 12','敏感族群仍需防護']
    ],
    data_addon:[
      '108-114年全國PM2.5年平均：16.2、14.1、14.4、12.4、13.7、12.8、12.8 µg/m³（環境部）。',
      '中南部地區PM2.5由108年19.6降至114年14.8 µg/m³，改善24.4%。',
      'PM2.5日平均標準由35加嚴為30 µg/m³（113年9月30日修正）。'
    ],
    cta:'把環境部空氣品質指標加到手機常用工具，出門前和看天氣一起查一次。'
  });
})();
