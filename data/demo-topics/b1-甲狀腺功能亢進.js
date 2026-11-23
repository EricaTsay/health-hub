/* v6 示範主題：甲狀腺功能亢進（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-21。數據來源：亞洲大學附屬醫院衛教〈甲狀腺機能亢進的診斷與治療〉（症狀、成因、三種治療、藥物療程與緩解率、放射碘後功能不足比例、飲食）、
   中國醫藥大學附設醫院衛教（2026-06，追蹤頻率）、國健署2015-05-20〈食用「碘」鹽 健康多一點〉（甲狀腺病人用鹽建議）、元氣網2020-01（營養師引述國健署2013-2016年調查尿碘中位數，查證時未找到更新一期公開數字）、TVBS 2024-04-26（新陳代謝科醫師說明碘與甲狀腺）。
   國內查無甲狀腺功能亢進官方盛行率；醫院衛教中的男女比例疑似誤植，未採用。
   參考方向：健康智庫〈甲狀腺功能亢進〉2023/01。 */
(function(){
  const REFS = [
    {title:'甲狀腺機能亢進的診斷與治療',source:'亞洲大學附屬醫院',url:'https://www.auh.org.tw/NewsInfo/HealthEducationInfo?docid=63'},
    {title:'甲狀腺機能亢進的診斷與治療（衛教單張）',source:'中國醫藥大學附設醫院',url:'https://www.cmuh.cmu.edu.tw/HealthEdus/Detail?no=5891'},
    {title:'食用「碘」鹽 健康多一點 逾半數國人碘營養不足',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-20718-1.html'},
    {title:'缺碘恐生長遲緩、工作表現不佳…營養師告訴你補碘吃這些、這樣煮',source:'元氣網（國泰綜合醫院營養師）',url:'https://health.udn.com/health/story/6037/4284947'},
    {title:'缺碘小心甲狀腺亢進、甲狀腺結節！醫示警：5成民眾缺碘',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/nutrition/346526'}
  ];
  const TABLE = {headers:['治療方式','說明（醫院衛教）'], rows:[
    ['抗甲狀腺藥物','甲狀腺荷爾蒙通常1-2個月內降至正常，一般需持續約2年；18-24個月療程緩解率約50%'],
    ['放射碘治療','不需住院，但可能造成甲狀腺功能不足，第一年約20%、15年後約50%需終生服用甲狀腺素'],
    ['手術','可較快解除症狀，但可能有手術併發症，部分患者術後功能不足'],
    ['如何選擇','三種方式各有利弊，依年齡、心臟狀況、懷孕計畫、甲狀腺大小等由醫師評估']
  ]};
  const TAGS = ['甲狀腺亢進','葛瑞夫氏病','心悸','甲狀腺','內分泌'];

  const DP_SRC = {id:'dp-hyper-src', type:'data_scope', title:'治療數字來自醫院衛教',
    desc:'藥物緩解率約50%、放射碘後功能不足20%至50%等數字，出自亞洲大學附屬醫院衛教單張，未標示資料來源與年份；國內也查無甲狀腺亢進官方盛行率。AI 標示為醫院衛教，並提醒治療選擇由醫師評估。',
    current:'18-24個月藥物治療緩解率約50%（醫院衛教）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約50%', value:'藥物治療緩解率', note:'亞洲大學附屬醫院衛教（目前採用）'},
      {label:'未提供', value:'官方盛行率', note:'衛福部、國健署未公布'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'心悸、手抖、變瘦？認識甲狀腺功能亢進與三種治療',
    update_date:'2026/11/21',
    intro:'甲狀腺功能亢進是甲狀腺分泌過多荷爾蒙，常見症狀包括心悸、緊張、多汗、怕熱、手發抖、體重減輕、大便次數增加、月經異常，部分病人會合併凸眼。醫院衛教指出，最常見的原因是葛瑞夫氏病（一種自體免疫疾病，通常有家族史）。治療有藥物、放射碘與手術三種，各有利弊。',
    sections:[
      {heading:'甲亢的三種治療',format:'table',table:TABLE},
      {heading:'藥物治療要注意',format:'bullets',items:[
        '醫院衛教提醒，少於6個月的藥物治療復發率極高，不要症狀改善就自行停藥。',
        '服藥期間若出現喉嚨痛、發燒，應檢查白血球數；出現皮膚癢或疹子也不要自行停藥，先與醫師聯絡。',
        '停藥後至少追蹤甲狀腺功能3年以上，第一年每3-6個月、之後每6-12個月檢查。'
      ]},
      {heading:'飲食與碘',format:'bullets',items:[
        '醫院衛教建議甲亢期間禁吃紫菜、海苔、海帶，避免咖啡、茶與吸菸。',
        '國健署指出，罹患高碘性甲狀腺腫或需接受碘131檢查治療者，應依醫師指示選用無碘鹽。',
        '據營養師引述國健署2013-2016年調查，國人7歲以上尿碘中位數104.3微克/升，僅達WHO充足標準下限；但甲亢患者是否補碘須依醫師指示。'
      ]}
    ],
    think_tank_view:'甲亢的症狀很像壓力大或更年期，容易被忽略。若持續心悸、手抖、明明吃很多卻變瘦，抽個血檢查甲狀腺功能就能釐清。確診後最重要的是「按時服藥、不要自行停藥」，並和醫師一起選擇最適合的治療方式。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'症狀、治療與追蹤引自醫院衛教並標明出處，碘營養資料引自國健署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['甲亢症狀與三種治療（亞洲大學附屬醫院、中國醫大附醫衛教）','碘營養（國健署2015年新聞稿、2013-2016年調查經營養師引述）'],
      layout_reason:'先用表格比較三種治療，再說明藥物治療注意事項，最後說明飲食與碘。',
      tone:'專業易懂', tone_reason:'治療選擇需平衡呈現。',
      to_verify:['國內甲亢官方盛行率查無資料','醫院衛教數字未標示來源與年份','尿碘中位數為營養師引述，原始調查報告未核對']},
    decision_points:[DP_SRC]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'吃很多卻一直瘦、心跳好快？可能是甲狀腺亢進',
    update_date:'2026/11/21',
    intro:'明明吃很多卻一直變瘦、心跳很快、手會抖、一直流汗怕熱……這些可能是甲狀腺功能亢進的訊號。醫院衛教指出，最常見的原因是葛瑞夫氏病，常有家族史。好消息是甲亢有藥物、放射碘和手術三種治療，配合醫師就能控制。',
    sections:[
      {heading:'三種治療，各有優缺點',format:'table',table:TABLE},
      {heading:'吃藥這樣注意',format:'bullets',items:[
        '藥要吃夠久，吃不到半年就停，很容易復發。',
        '喉嚨痛、發燒要記得驗白血球。',
        '停藥後也要回診追蹤至少3年。'
      ]},
      {heading:'吃東西要小心',format:'bullets',items:[
        '甲亢期間別吃紫菜、海苔、海帶。',
        '咖啡、茶先少喝，菸要戒。',
        '要不要吃碘鹽，照醫生說的。'
      ]}
    ],
    think_tank_view:'甲亢的人常被說「是不是太緊張了」，其實是甲狀腺在搗蛋。家人如果最近明顯變瘦、心跳快、脾氣急，陪他去抽個血檢查甲狀腺吧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料引自醫院衛教與國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以常見症狀切入。', tone:'生活親切', tone_reason:'給一般民眾與家屬閱讀。', to_verify:['治療數字為醫院衛教']},
    decision_points:[DP_SRC]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'甲狀腺亢進：心悸手抖變瘦，按時服藥別自停',
    update_date:'2026/11/21',
    intro:'甲亢常見心悸、多汗、手抖、體重減輕，最常見原因為葛瑞夫氏病。治療有藥物、放射碘與手術。',
    sections:[
      {heading:'三種治療',format:'table',table:TABLE},
      {heading:'服藥',format:'bullets',items:[
        '療程不足6個月復發率高。',
        '停藥後追蹤3年以上。'
      ]},
      {heading:'飲食',format:'bullets',items:[
        '避免紫菜、海帶、咖啡、茶。',
        '碘鹽依醫囑。'
      ]}
    ],
    think_tank_view:'甲亢可以控制，關鍵在按時服藥與定期追蹤。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料引自醫院衛教與國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為治療、服藥、飲食三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['數字為醫院衛教']},
    decision_points:[DP_SRC]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'甲狀腺功能亢進', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'心悸手抖變瘦，可能是甲亢', primary_visual:'約 50%', secondary_message:'藥物療程夠久才不易復發', action_priority:'抽血檢查、按時服藥'},
    headline_hook:'吃很多卻變瘦？', headline_main:'認識甲狀腺亢進', title_accent:'甲狀腺亢進',
    hero_message:'心悸、手抖、怕熱', hero_support:'最常見原因為葛瑞夫氏病（醫院衛教）',
    knowledge_title:'三種治療', knowledge_note:'各有利弊，**由醫師依個人狀況評估**',
    knowledge_cards:[
      {label:'藥物', icon:'flask', lines:['療程約 2 年','不要自行停藥']},
      {label:'放射碘', icon:'shield', lines:['不需住院','可能功能不足']},
      {label:'手術', icon:'check', lines:['較快緩解','術後可能不足']}
    ],
    primary_stat:{value:'約 50%', label:'18–24 個月藥物治療緩解率', note:'亞洲大學附屬醫院衛教｜療程少於 6 個月復發率極高'},
    secondary_stats:[
      {value:'3 年以上', label:'停藥後持續追蹤'},
      {value:'104.3', label:'國人尿碘中位數（微克/升）'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'檢', text:'心悸、手抖、變瘦抽血驗甲狀腺'},
      {key:'藥', text:'按時服藥，不自行停藥'},
      {key:'避', text:'甲亢期間避免紫菜、海帶、咖啡'},
      {key:'追', text:'停藥後追蹤甲狀腺功能 3 年以上'}
    ],
    carousel_suggestion:{reason:'若想把症狀、治療與飲食分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'吃很多卻變瘦？', headline_main:'甲亢常見症狀'},
      {layout_type:'knowledge', headline_hook:'三種治療', headline_main:'藥物、放射碘、手術'},
      {layout_type:'action', headline_hook:'甲亢飲食', headline_main:'這些先別吃'}]},
    hashtags:['甲狀腺亢進','葛瑞夫氏病','心悸','甲狀腺'],
    sources:['亞洲大學附屬醫院','中國醫藥大學附設醫院','衛生福利部國民健康署'],
    illustration_category:'metabolic',
    illustration:{topic:'甲狀腺功能檢查', audience:'青壯年女性', scene:'一位年輕女性在診間抽血，醫師在旁看著甲狀腺功能報告',
      emotion:'冷靜、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young woman having blood drawn in a clinic while a doctor reviews a thyroid function report, calm and reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['三種治療與緩解率（亞洲大學附屬醫院衛教）'],
      layout_reason:'核心是治療選擇，選 knowledge：3 張治療卡當主角，緩解率當主數字並標出處。',
      tone:'專業易懂', tone_reason:'治療需平衡說明。',
      to_verify:['數字為醫院衛教']},
    decision_points:[Object.assign({}, DP_SRC, {current:'約 50%｜藥物治療緩解率（醫院衛教）'})],
    content_check_note:'治療資訊引自醫院衛教，碘資料引自國健署並標明年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'甲狀腺功能亢進',
    collect:{
      summary:'甲狀腺功能亢進以葛瑞夫氏病最常見，症狀像壓力或更年期而易被忽略；國內無官方盛行率，治療有藥物、放射碘與手術三種，「按時服藥不自停、長期追蹤」是主要溝通訊息。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約50%藥物治療緩解率：醫院衛教指出，18-24個月抗甲狀腺藥物療程緩解率約50%，少於6個月療程復發率極高（國內查無官方盛行率統計）。',tag:'市場觀察',source:{name:'亞洲大學附屬醫院：甲狀腺機能亢進的診斷與治療',url:'https://www.auh.org.tw/NewsInfo/HealthEducationInfo?docid=63'}},
        {item:'年度趨勢方向',desc:'約20%放射碘治療者第一年出現功能不足：醫院衛教指出，15年後約50%患者會產生甲狀腺功能不足，需終生服用甲狀腺素。',tag:'市場觀察',source:{name:'亞洲大學附屬醫院：甲狀腺機能亢進的診斷與治療',url:'https://www.auh.org.tw/NewsInfo/HealthEducationInfo?docid=63'}},
        {item:'政策動向',desc:'7歲以上尿碘中位數104.3微克每升：國泰醫院營養師引述國健署2013-2016年國民營養健康狀況變遷調查，僅達WHO充足標準下限，45歲以上未達充足標準。',tag:'市場觀察',source:{name:'元氣網：缺碘恐生長遲緩、工作表現不佳',url:'https://health.udn.com/health/story/6037/4284947'}},
        {item:'好發族群年齡層',desc:'停藥後至少追蹤3年：醫院衛教指出葛瑞夫氏病為自體免疫疾病、常有家族史，停藥後第一年每3-6個月、之後每6-12個月追蹤甲狀腺功能。',tag:'市場觀察',source:{name:'中國醫藥大學附設醫院：甲狀腺機能亢進的診斷與治療',url:'https://www.cmuh.cmu.edu.tw/HealthEdus/Detail?no=5891'}}
      ],
      product_view:['機會：甲亢需長期服藥與追蹤，可作為慢性病醫療保障的溝通情境。','機會：回診與服藥提醒適合結合健康管理服務。','風險：甲狀腺疾病涉及核保，避免讓民眾因擔心核保而不敢就醫；不得推薦補碘產品。'],
      marketing_view:['機會：「吃很多卻變瘦」是反直覺、易引起注意的切點。','機會：青壯年女性是主要溝通對象。','風險：避免以凸眼等外觀變化做負面訴求。'],
      alert_level:'low',
      alert_reason:'無政策事件與官方統計，適合以衛教方式長期溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('18-24個月療程緩解率約50%','SOURCE_EVIDENCE','hospital_leaflet',
          '緩解率出自單一醫院衛教單張，未標示資料來源與年份。','medium','yes',
          '醫學會或研究的抗甲狀腺藥物緩解率資料。','no','confirm','說法與常見臨床資料方向一致，但未附出處。',
          null),
        F('第一年約20%、15年後約50%需終生服用甲狀腺素','SOURCE_EVIDENCE','hospital_leaflet',
          '放射碘後功能不足比例出自醫院衛教，未附研究來源；讀者可能據此自行排除放射碘治療。','medium','yes',
          '放射碘治療後甲狀腺功能低下比例的研究資料。','no','confirm','屬醫院衛教。',
          null),
        F('國人7歲以上尿碘中位數104.3微克/升','SOURCE_EVIDENCE','secondary_citation',
          '數字經由營養師文章轉述國健署調查，未附國健署原始報告；且全體中位數無法反映甲亢患者個人的碘需求。','low','yes',
          '國健署2013-2016年國民營養健康狀況變遷調查尿碘結果原文。','no','confirm','屬二手引述。',
          null),
        F('甲亢的人常被說「是不是太緊張了」','BRAND_TONE_CONSISTENCY','stigma_tone',
          '語句可能被讀成貶抑患者情緒，與品牌溫暖語調略有落差。','low','no',
          null,'no','clarify','屬語氣調整。',
          '甲亢的人常以為只是壓力大')
      ],
      card:[
        F('18–24 個月藥物治療緩解率','SOURCE_EVIDENCE','hospital_leaflet',
          '主數字為醫院衛教數字。','medium','yes',
          '研究來源。','no','confirm','屬醫院衛教。',
          null),
        F('國人尿碘中位數（微克/升）','CONTEXT_CONSISTENCY','stat_off_message',
          '次數字是全國碘營養狀況，與卡面甲亢治療主題關聯不直接，讀者可能誤以為甲亢患者應該補碘。','low','no',
          null,'no','clarify','數字為營養師引述國健署調查。',
          '國人尿碘中位數（與甲亢治療無直接關係）')
      ]
    },
    title_alts:[
      '心悸、手抖、變瘦？認識甲狀腺功能亢進與三種治療',
      '吃很多卻一直瘦、心跳好快？可能是甲狀腺亢進',
      '甲亢治療怎麼選？藥物、放射碘、手術一次看'
    ],
    card_title_alts:[
      ['吃很多卻變瘦？','認識甲狀腺亢進'],
      ['甲亢三種治療','各有利弊'],
      ['按時服藥','不要自行停藥']
    ],
    data_addon:[
      '國健署：19歲以上成人每日碘建議攝取量為140微克。',
      '醫院衛教：服藥期間若白血球低於3,000，應與醫師聯絡。',
      'TVBS引述新陳代謝科醫師：甲亢急性期應避免高碘食物並使用無碘鹽。'
    ],
    cta:'如果家人最近明顯變瘦、心跳快、手抖，這週陪他去抽血檢查甲狀腺功能。'
  });
})();
