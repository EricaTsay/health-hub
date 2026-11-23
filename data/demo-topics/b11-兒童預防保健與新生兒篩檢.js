/* v6 示範主題：兒童預防保健與新生兒篩檢（B11 第二輪擴充）
   查證日期：2026-11-23。數據來源：衛福部／國健署〈兒童預防保健增至9次 7月1日正式上路〉（2026/04/01）、〈未滿7歲7次健檢、6次篩檢 守護兒童健康〉（2025/08/18）、〈新生兒SMA篩檢納公費 產前遺傳診斷補助調升〉（2026/06/26）。
   參考方向：健康智庫兒童預防保健、新生兒篩檢、幼兒專責醫師相關文章（僅取架構）。 */
(function(){
  const REFS = [
    {title:'兒童預防保健增至9次 7月1日正式上路',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-16-85990-1.html'},
    {title:'未滿7歲7次健檢、6次篩檢 守護兒童健康',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-83521-1.html'},
    {title:'從懷孕到出生升級守護! 新生兒SMA篩檢納公費 產前遺傳診斷補助調升',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-2704-87007-1.html'}
  ];
  const TABLE = {headers:['公費服務','內容（生效日期）'], rows:[
    ['新生兒先天性代謝異常疾病篩檢','22項（新增SMA），全額補助750元（115年7月1日起）'],
    ['兒童預防保健','未滿7歲由7次增為9次，含健康檢查與衛教（115年7月1日起）'],
    ['兒童發展篩檢','未滿7歲依時程6次（113年7月起）'],
    ['健檢項目','身高體重頭圍、聽力眼睛口腔、粗動作精細動作與語言發展']
  ]};
  const TAGS = ['兒童預防保健','新生兒篩檢','兒童健檢','發展篩檢','育兒'];

  const DP_USE = {id:'dp-child-use', type:'data_scope', title:'利用率有兩種口徑',
    desc:'國健署兩則新聞稿分別寫「兒童健康檢查服務利用率84.1%、衛教指導75.2%」與「7次服務平均利用率近3年逾8成」。統計項目不同，AI 採用數字較明確的前者。',
    current:'兒童健康檢查服務利用率84.1%（國健署2026年4月新聞稿）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'84.1%', value:'兒童健康檢查服務', note:'國健署2026/04/01新聞稿（目前採用）；衛教指導75.2%'},
      {label:'逾8成', value:'7次服務平均', note:'國健署2025/08/18新聞稿，近3年平均'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'寶寶的公費健康守護：新生兒篩檢22項與兒童健檢9次',
    update_date:'2026/11/23',
    intro:'從出生第一管血到上小學前，政府提供一系列公費健康服務。國民健康署自115年7月1日起，新生兒先天性代謝異常疾病篩檢改為全額補助並增為22項，兒童預防保健也由7次增為9次。目前兒童健康檢查服務利用率為84.1%，但國健署114年初調查發現，近3成家長不知道可依時程帶孩子接受兒童預防保健，逾半數不知道有6次發展篩檢。',
    sections:[
      {heading:'7歲前的公費健康服務',format:'table',table:TABLE},
      {heading:'115年7月起的兩項新制',format:'bullets',items:[
        '新生兒篩檢新增脊髓性肌肉萎縮症（SMA），出生滿48小時後採檢，補助由部分200元提高為全額750元。',
        '兒童預防保健「7+2」：4至10個月拆成4至6個月、6至12個月各一次，3至7歲拆成3至5歲、5至7歲各一次。',
        '新制改為健康檢查與衛教指導一起提供的包裹式補助。'
      ]},
      {heading:'家長可以這樣做',format:'bullets',items:[
        '依兒童健康手冊時程預約，健檢時順便完成發展篩檢。',
        '新生兒篩檢結果若需複檢，應依通知盡快回診確認。',
        '4至10個月注意生長發育與副食品添加，3至7歲留意體重、視力與口腔健康。'
      ]}
    ],
    think_tank_view:'兒童預防保健的價值，在於把問題留在「還能早期處理」的階段。新制讓檢查次數更密、篩檢項目更完整，但服務要被用到才有意義；把健檢時程寫進家庭行事曆，是家長能為孩子做的最簡單投資。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'公費服務次數、補助金額與生效日期引自國健署新聞稿並標明日期，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['兒童預防保健115年7月1日起增為9次（國健署2026/04/01）','新生兒篩檢22項全額補助750元（國健署2026/06/26）'],
      layout_reason:'以表格整理7歲前的公費服務與生效日期，再說明新制與家長行動。',
      tone:'專業易懂', tone_reason:'制度內容需要清楚的次數、時程與日期。',
      to_verify:['新生兒篩檢年篩檢率與確診數未找到官方數字']},
    decision_points:[DP_USE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'新手爸媽必知：寶寶7歲前有這些免費健檢',
    update_date:'2026/11/23',
    intro:'寶寶出生後的第一管血、每次打預防針前後的健檢，其實都是政府送的健康禮物。115年7月1日起，新生兒篩檢變成全額免費、項目增加到22項，兒童健檢也從7次變9次。可是國健署調查發現，近3成家長不知道有這些服務，逾半數不知道還有6次發展篩檢，別讓孩子錯過了。',
    sections:[
      {heading:'7歲前的免費服務一覽',format:'table',table:TABLE},
      {heading:'今年7月起有什麼不一樣？',format:'bullets',items:[
        '新生兒篩檢多了SMA（脊髓性肌肉萎縮症），寶寶出生滿48小時採檢，費用全額補助。',
        '兒童健檢多2次：6至12個月、5至7歲各多一次，追蹤得更仔細。',
        '健檢和衛教一次完成，不用分開跑。'
      ]},
      {heading:'爸媽這樣安排',format:'bullets',items:[
        '翻開兒童健康手冊，把每次健檢時間記在手機行事曆。',
        '如果接到新生兒篩檢複檢通知，不要拖，盡快帶寶寶回診。',
        '小寶寶看生長和副食品，大孩子留意體重、視力和牙齒。'
      ]}
    ],
    think_tank_view:'這些健檢都不用錢，卻能及早發現很多問題。下次帶孩子打疫苗時，順便問醫師健檢和發展篩檢做了沒，就是最簡單的照顧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'服務次數與生效日期引自國健署公開資料，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以新手爸媽視角整理免費服務與新制。', tone:'生活親切', tone_reason:'給家長閱讀。', to_verify:['新生兒篩檢確診數未有官方數字']},
    decision_points:[DP_USE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'兒童健檢9次＋新生兒篩檢22項',
    update_date:'2026/11/23',
    intro:'115年7月1日起，新生兒篩檢全額補助增為22項，兒童預防保健由7次增為9次。兒童健康檢查服務利用率84.1%。',
    sections:[
      {heading:'公費服務',format:'table',table:TABLE},
      {heading:'新制重點',format:'bullets',items:[
        '新生兒篩檢新增SMA，全額補助。',
        '兒童健檢「7+2」，健檢與衛教包裹式提供。'
      ]},
      {heading:'家長行動',format:'bullets',items:[
        '依手冊時程預約健檢與發展篩檢。',
        '收到複檢通知盡快回診。'
      ]}
    ],
    think_tank_view:'公費健檢要用了才有效，把時程排進行事曆。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'服務內容與生效日期引自國健署公開資料，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為服務、新制、行動三段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:['新生兒篩檢確診數']},
    decision_points:[DP_USE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'兒童預防保健與新生兒篩檢', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'7 歲前有一整套公費健康服務', primary_visual:'9 次', secondary_message:'新生兒篩檢 22 項全額補助', action_priority:'依手冊時程預約'},
    headline_hook:'115 年 7 月起新制', headline_main:'兒童健檢增為 9 次', title_accent:'9 次',
    hero_message:'7 歲前公費健檢 9 次', hero_support:'115 年 7 月 1 日起（國健署）',
    knowledge_title:'3 項公費服務', knowledge_note:'帶**兒童健康手冊**與健保卡即可使用',
    knowledge_cards:[
      {label:'新生兒篩檢', icon:'flask', lines:['22 項，新增 SMA','全額補助 750 元']},
      {label:'兒童預防保健', icon:'shield', lines:['未滿 7 歲 9 次','健檢加衛教一次完成']},
      {label:'發展篩檢', icon:'search', lines:['未滿 7 歲 6 次','動作與語言發展']}
    ],
    primary_stat:{value:'84.1%', label:'兒童健康檢查服務利用率', note:'國健署 2026 年 4 月新聞稿'},
    secondary_stats:[
      {value:'近 3 成', label:'家長不知道有健檢'},
      {value:'52.2%', label:'不知道發展篩檢'}
    ],
    action_title:'爸媽這樣做',
    action_cards:[
      {key:'約', text:'依兒童健康手冊時程預約健檢'},
      {key:'篩', text:'健檢時一起完成發展篩檢'},
      {key:'回', text:'收到新生兒篩檢複檢通知盡快回診'},
      {key:'記', text:'把健檢時間寫進手機行事曆'}
    ],
    carousel_suggestion:{reason:'若想把新生兒篩檢與兒童健檢分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'新生兒篩檢', headline_main:'22 項全額補助'},
      {layout_type:'knowledge', headline_hook:'兒童預防保健', headline_main:'7 歲前 9 次'},
      {layout_type:'action', headline_hook:'爸媽這樣做', headline_main:'依時程預約健檢'}]},
    hashtags:['兒童預防保健','新生兒篩檢','兒童健檢','育兒'],
    sources:['衛生福利部國民健康署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'兒童健康檢查', audience:'新手爸媽', scene:'醫師為坐在家長腿上的幼兒量身高體重，家長手拿兒童健康手冊',
      emotion:'安心、溫暖', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A pediatrician measuring a toddler sitting on a parent lap, the parent holding a child health booklet, warm and reassuring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['兒童預防保健9次、新生兒篩檢22項（國健署）','利用率84.1%與家長認知調查（國健署）'],
      layout_reason:'核心是「有哪些公費服務」，選 knowledge：3 項服務當主角，利用率與認知不足退到下方。',
      tone:'專業易懂', tone_reason:'制度資訊需清楚。',
      to_verify:['利用率有兩種口徑']},
    decision_points:[Object.assign({}, DP_USE, {current:'84.1%｜兒童健康檢查服務利用率'})],
    content_check_note:'服務次數、補助與生效日期引自國健署並標明日期，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'兒童預防保健與新生兒篩檢',
    collect:{
      summary:'國健署115年7月1日起把兒童預防保健由7次增為9次、新生兒先天性代謝異常疾病篩檢改為全額補助並增至22項；服務利用率雖逾8成，仍有近3成家長不知道這些公費服務，是適合長期溝通的育兒健康議題。',
      objective_data:[
        {item:'政策動向',desc:'9次兒童預防保健：國健署自115年7月1日起實施「7+2」，未滿7歲兒童預防保健由7次增為9次，並改為健康檢查與衛教指導包裹式補助。',tag:'官方統計',source:{name:'衛生福利部：兒童預防保健增至9次 7月1日正式上路',url:'https://www.mohw.gov.tw/cp-16-85990-1.html'}},
        {item:'政策動向',desc:'22項新生兒篩檢全額公費：115年7月1日起新生兒先天性代謝異常疾病篩檢新增SMA，補助由部分200元提高為全額750元。',tag:'官方統計',source:{name:'衛生福利部：新生兒SMA篩檢納公費',url:'https://mohw.gov.tw/cp-2704-87007-1.html'}},
        {item:'盛行率／發生率',desc:'84.1%兒童健康檢查服務利用率：國健署指出衛教指導服務利用率75.2%，每年使用兒童預防保健服務約84萬人次。',tag:'官方統計',source:{name:'衛生福利部：兒童預防保健增至9次',url:'https://www.mohw.gov.tw/cp-16-85990-1.html'}},
        {item:'好發族群年齡層',desc:'29%家長不知道兒童預防保健：國健署114年初調查，家中有7歲以下兒童的受訪者近3成不知道可依時程接受服務，52.2%不知道有6次發展篩檢。',tag:'官方統計',source:{name:'衛生福利部：未滿7歲7次健檢、6次篩檢',url:'https://mohw.gov.tw/cp-16-83521-1.html'}}
      ],
      product_view:['機會：新生兒與兒童保單可結合公費健檢時程提醒，作為保戶育兒關懷服務。','機會：篩檢發現的先天性疾病與發展遲緩，可連結兒童醫療與重大疾病保障說明。','風險：避免暗示投保可取代公費篩檢，或以罕見疾病製造焦慮。'],
      marketing_view:['機會：115年7月新制上路，適合做「7歲前13次免費檢查」懶人包。','機會：新手爸媽社群對健檢時程表需求高，可做可下載的行事曆。','風險：制度內容需標明生效日期，避免舊制資訊混用。'],
      alert_level:'low',
      alert_reason:'屬長期公費服務，新制已於115年7月1日上路，無急迫時效事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('目前兒童健康檢查服務利用率為84.1%','DATA_FACTUAL_ACCURACY','metric_scope',
          '84.1%為「健康檢查」服務的利用率，衛教指導為75.2%，文中未說明，讀者可能理解為所有兒童預防保健服務。','low','no',
          null,'no','clarify','國健署另有「7次服務平均利用率逾8成」的說法。',
          '目前兒童健康檢查服務利用率為84.1%（衛教指導為75.2%）',
          ['兒童健康檢查服務利用率84.1%']),
        F('出生滿48小時後採檢','COMPLETENESS','missing_key_info',
          '未說明篩檢在出生醫療院所進行、需家長同意，以及結果異常的通知方式。','low','no',
          null,'no','clarify','流程細節見國健署說明。',
          '出生滿48小時後由接生院所採檢（結果異常會通知家長複檢）',
          ['出生滿48小時採檢']),
        F('逾半數不知道有6次發展篩檢','SOURCE_EVIDENCE','survey_detail_missing',
          '調查未說明樣本對象與數值；國健署原文為52.2%，對象是家中有7歲以下兒童的受訪者。','low','no',
          null,'no','clarify','數字來自國健署114年初調查。',
          '逾半數（52.2%）不知道有6次發展篩檢',
          ['逾半數不知道還有6次發展篩檢']),
        F('新生兒篩檢新增SMA，全額補助。','COMPLETENESS','effective_date_missing',
          '簡潔版新制段落未寫補助金額，制度類資訊宜完整標明。','low','no',
          null,'no','clarify','金額見國健署新聞稿。',
          '新生兒篩檢新增SMA，全額補助750元。')
      ],
      card:[
        F('兒童健康檢查服務利用率','DATA_FACTUAL_ACCURACY','metric_scope',
          '卡面未說明84.1%僅指健康檢查服務，不含衛教指導。','low','no',
          null,'no','clarify','屬口徑說明。',
          '兒童健康檢查（不含衛教）利用率'),
        F('家長不知道有健檢','DATA_FACTUAL_ACCURACY','oversimplified',
          '原調查問的是「不知道可依時程接受兒童預防保健服務」，卡面簡化為「不知道有健檢」，語意略有落差。','low','no',
          null,'no','clarify','數字正確，標籤需貼近原題。',
          '家長不清楚健檢時程')
      ]
    },
    title_alts:[
      '寶寶的公費健康守護：新生兒篩檢22項與兒童健檢9次',
      '新手爸媽必知：寶寶7歲前有這些免費健檢',
      '115年7月新制：兒童預防保健7+2一次看懂'
    ],
    card_title_alts:[
      ['115 年 7 月起新制','兒童健檢增為 9 次'],
      ['寶寶 7 歲前','這些健檢都免費'],
      ['新生兒篩檢 22 項','全額補助不用錢']
    ],
    data_addon:[
      '同一方案也調高產前遺傳診斷補助，最高由5,000元提高為7,000元（115年7月1日起）。',
      '兒童發展篩檢自113年7月起全面補助，加上預防保健，7歲前共有多次免費檢查。',
      '國健署指出，4至10個月是生長發育與副食品添加關鍵期，3至7歲須關注肥胖、視力與口腔健康。'
    ],
    cta:'今天就翻開孩子的兒童健康手冊，把下一次健檢與發展篩檢的時間記進手機行事曆。'
  });
})();
