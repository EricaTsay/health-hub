/* v6 示範主題：卵巢癌（B2 癌症）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計摘要表（卵巢癌死亡時間序列、與上年比較）、衛福部112年癌症登記報告新聞稿（女性十大癌症排名）、
   聯合報2024-06-18（婦癌醫師說明症狀與危險因子）。
   112年癌登附表未列卵巢癌新發人數（非男女合計十大），文中不寫新發人數；國內目前沒有公費卵巢癌篩檢。
   參考方向：健康智庫〈女性腫瘤與癌症－卵巢癌〉2026/03。 */
(function(){
  const REFS = [
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-84987-1.html'},
    {title:'卵巢癌無明顯症狀、也不會流異樣分泌物！只能從2端倪發現',source:'聯合報',url:'https://health.udn.com/health/story/6019/8036724'}
  ];
  const TABLE = {headers:['項目','重點'], rows:[
    ['早期症狀','多半不明顯，常是腹部變大、按壓不適或持續腹脹才發現'],
    ['篩檢工具','不像子宮頸癌有抹片，目前沒有公費卵巢癌篩檢'],
    ['較高風險','未生育、不孕、初經早、停經晚、子宮內膜異位症'],
    ['怎麼檢查','婦產科內診與超音波，由醫師評估是否需進一步檢查']
  ]};
  const TAGS = ['卵巢癌','婦癌','腹脹','女性健康','癌症防治'];

  const DP_TREND = {id:'dp-ov-trend', type:'data_scope', title:'死亡人數單年增加12.5%怎麼解讀',
    desc:'114年卵巢癌死亡899人，比113年（799人）增加12.5%；標準化死亡率由3.6升至3.9。單年變化可能受隨機波動影響，十年來標準化死亡率大致在3.3-3.9之間。AI 沒有把單年增加寫成「快速惡化」。',
    current:'899人，較前一年增加12.5%（標準化死亡率3.9）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'+12.5%', value:'死亡人數（114 vs 113）', note:'899人 vs 799人（目前採用）'},
      {label:'3.3–3.9', value:'標準化死亡率（105-114年區間）', note:'十年大致持平、略有起伏'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'卵巢癌早期沒症狀：持續腹脹別只當腸胃問題',
    update_date:'2026/11/20',
    intro:'依衛生福利部114年死因統計，卵巢癌死亡899人，較113年增加12.5%，居女性癌症死因第7位，年齡標準化死亡率每十萬女性3.9人；112年癌症登記中，卵巢癌居女性癌症發生第7位。卵巢位在骨盆腔深處，早期多半沒有明顯症狀，也不像子宮頸癌有抹片可以篩檢，認識警訊與高風險族群格外重要。',
    sections:[
      {heading:'認識卵巢癌',format:'table',table:TABLE},
      {heading:'為什麼常常發現得晚',format:'bullets',items:[
        '婦癌醫師指出，卵巢癌早期沒有明顯症狀，也不會出現異常分泌物，常是腹部愈來愈大才發現。',
        '醫師引述國外資料，卵巢癌確診時逾7成已是第3、4期。',
        '腹脹、消化不良容易被當成腸胃問題，延誤就醫。'
      ]},
      {heading:'可以怎麼做',format:'bullets',items:[
        '持續腹脹、腹圍變大、骨盆或下腹不適超過數週，應到婦產科檢查。',
        '有卵巢癌、乳癌家族史者，可與醫師討論是否需要遺傳諮詢。',
        '定期接受婦科檢查時，可請醫師一併評估骨盆腔狀況。'
      ]}
    ],
    think_tank_view:'卵巢癌最大的挑戰是「沒有篩檢工具、早期又不明顯」，所以身體的細微變化就是最重要的線索。持續腹脹不要只吃胃藥了事，找婦產科做一次檢查，比自己猜測安心得多。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數、排名與標準化死亡率引自衛福部114年死因統計並標明年份，症狀與危險因子標明為醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['114年卵巢癌死亡899人、較113年增加12.5%（死因統計）','112年居女性癌症發生第7位（衛福部新聞稿）'],
      layout_reason:'先用表格整理症狀、篩檢現況與風險，再說明為何常晚期發現，最後給就醫時機。',
      tone:'專業易懂', tone_reason:'缺乏篩檢工具的癌症，需要清楚的警訊說明。',
      to_verify:['卵巢癌新發人數需查112年癌登年報全文','「逾7成確診時為3、4期」為醫師引述國外資料']},
    decision_points:[DP_TREND]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'肚子越來越大、一直脹氣？姊妹們別只吃胃藥',
    update_date:'2026/11/20',
    intro:'卵巢癌是很「安靜」的癌症。衛福部統計，114年有899位女性因卵巢癌過世，比前一年多了100人。它早期幾乎沒有症狀，也沒有像抹片那樣的篩檢方式，所以很多人是肚子越來越大才發現。認識警訊，是保護自己最好的方法。',
    sections:[
      {heading:'卵巢癌，你要知道這些',format:'table',table:TABLE},
      {heading:'為什麼常常太晚發現？',format:'bullets',items:[
        '婦癌醫師說，卵巢癌早期沒什麼症狀，也不會有奇怪的分泌物。',
        '醫師提到，國外資料顯示7成以上的人發現時已經是第3、4期。',
        '脹氣、吃不下很容易被當成胃不好，就拖過去了。'
      ]},
      {heading:'出現這些狀況，去看婦產科',format:'bullets',items:[
        '一直脹氣、肚子變大、下腹不舒服好幾個禮拜都沒好。',
        '家裡有人得過卵巢癌或乳癌，可以問醫師要不要做遺傳諮詢。',
        '做婦科檢查時，也可以請醫師順便看看卵巢。'
      ]}
    ],
    think_tank_view:'女生常常把不舒服忍下來，但卵巢癌最需要的就是「不要忍」。脹氣、腹圍變大持續好幾週，就約個婦產科門診吧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部死因統計並標明年份，症狀標明為醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以常見的腹脹經驗切入，帶出警訊與就醫時機。', tone:'生活親切', tone_reason:'給女性讀者閱讀，鼓勵及早就醫。', to_verify:['「多了100人」為單年變化']},
    decision_points:[DP_TREND]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'卵巢癌：無篩檢工具，持續腹脹要就醫',
    update_date:'2026/11/20',
    intro:'114年卵巢癌死亡899人，居女性癌症死因第7位。早期症狀不明顯，持續腹脹應就醫。',
    sections:[
      {heading:'重點',format:'table',table:TABLE},
      {heading:'常晚期發現',format:'bullets',items:[
        '早期無明顯症狀。',
        '腹脹易被誤認為腸胃問題。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '持續腹脹數週就醫。',
        '有家族史者討論遺傳諮詢。'
      ]}
    ],
    think_tank_view:'卵巢癌缺乏篩檢工具，留意持續腹脹等警訊、及早就醫是關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部死因統計並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為重點、原因、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['新發人數待查']},
    decision_points:[DP_TREND]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'卵巢癌', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'卵巢癌早期沒症狀、沒有篩檢工具', primary_visual:'899 人', secondary_message:'持續腹脹別只當腸胃問題', action_priority:'持續腹脹數週看婦產科'},
    headline_hook:'持續腹脹別輕忽', headline_main:'卵巢癌警訊要認得', title_accent:'警訊',
    primary_stat:{kicker:'114 年・死亡人數', value:'899 人', label:'卵巢癌死亡', note:'衛福部死因統計｜居女性癌症死因第 7 位'},
    chart:{type:'bar', title:'卵巢癌死亡人數（人）', points:[
      {label:'2016', value:677, display:'677'},
      {label:'2019', value:683, display:'683'},
      {label:'2022', value:765, display:'765'},
      {label:'2025', value:899, display:'899', highlight:true}
    ], note:'衛福部死因統計｜標準化死亡率 3.3–3.9 起伏'},
    secondary_stats:[
      {value:'+12.5%', label:'較前一年死亡人數'},
      {value:'第 7 位', label:'女性癌症發生排名'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'察', text:'持續腹脹、腹圍變大留意'},
      {key:'醫', text:'症狀數週未改善看婦產科'},
      {key:'問', text:'有家族史可討論遺傳諮詢'},
      {key:'檢', text:'婦科檢查請醫師評估骨盆腔'}
    ],
    carousel_suggestion:{reason:'若想把趨勢、症狀與就醫時機分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'卵巢癌死亡', headline_main:'一年 899 人'},
      {layout_type:'knowledge', headline_hook:'早期沒症狀', headline_main:'認得腹脹警訊'},
      {layout_type:'action', headline_hook:'不要忍', headline_main:'持續腹脹看婦產科'}]},
    hashtags:['卵巢癌','婦癌','腹脹','女性健康'],
    sources:['衛生福利部','聯合報'],
    illustration_category:'screening-checkup',
    illustration:{topic:'卵巢癌警訊', audience:'中年女性', scene:'一位中年女性手扶腹部，正在手機上預約婦產科門診',
      emotion:'警覺、主動', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged woman with a hand on her abdomen booking a gynecology appointment on her phone, alert and proactive mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['卵巢癌死亡人數時間序列（114年死因統計摘要表）'],
      layout_reason:'卵巢癌缺乏發生人數與篩檢數據，選 data：以死亡人數與十年趨勢當主角，搭配 4 個就醫行動。',
      tone:'專業易懂', tone_reason:'避免恐嚇，聚焦警訊。',
      to_verify:['單年增加12.5%可能含隨機波動']},
    decision_points:[Object.assign({}, DP_TREND, {current:'899 人｜較前一年 +12.5%'})],
    content_check_note:'死亡人數與排名引自衛福部114年死因統計，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'卵巢癌',
    collect:{
      summary:'卵巢癌2025年死亡899人、較前一年增加12.5%，居女性癌症死因第7位；早期症狀不明顯且沒有公費篩檢工具，「持續腹脹別只當腸胃問題」是值得溝通的警訊型議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'2025年卵巢癌死亡899人：依114年死因統計，卵巢癌居女性癌症死因第7位，年齡標準化死亡率每十萬女性3.9人，112年癌症登記居女性癌症發生第7位。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'年度趨勢方向',desc:'死亡人數增加12.5%：2025年較2024年799人增加100人，為十大癌症死因中增幅最大者，十年前（2016年）為677人。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'0項公費篩檢：卵巢癌不像子宮頸癌有抹片，目前沒有公費篩檢工具，醫師建議做子宮頸抹片等婦科檢查時一併留意骨盆腔狀況。',tag:'市場觀察',source:{name:'聯合報：卵巢癌無明顯症狀、也不會流異樣分泌物',url:'https://health.udn.com/health/story/6019/8036724'}},
        {item:'好發族群年齡層',desc:'逾7成確診時為第3、4期（國外資料）：婦癌醫師指出，未生育、不孕、初經早、停經晚及子宮內膜異位症者風險較高。',tag:'市場觀察',source:{name:'聯合報：卵巢癌無明顯症狀、也不會流異樣分泌物',url:'https://health.udn.com/health/story/6019/8036724'}}
      ],
      product_view:['機會：卵巢癌多在晚期發現，手術與化療、標靶治療費用負擔大，可作為女性癌症保障的溝通情境。','機會：缺乏篩檢工具，適合推廣「症狀自我覺察」的女性健康服務。','風險：避免以晚期比例製造恐懼，或暗示特定檢查能保證早期發現。'],
      marketing_view:['機會：「腹脹別只吃胃藥」是貼近生活的切入點。','機會：可與子宮頸癌、子宮內膜癌組成婦癌系列內容。','風險：死亡人數單年大增可能含波動，避免過度渲染趨勢。'],
      alert_level:'medium',
      alert_reason:'2025年死亡人數為癌症死因中增幅最大，值得關注；無政策事件，適合納入女性健康年度溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('較113年增加12.5%','MEDICAL_INTERPRETATION','single_year_change',
          '只呈現單年增幅，讀者可能誤以為卵巢癌死亡快速惡化；十年標準化死亡率大致在3.3-3.9之間起伏，單年變化可能含隨機波動。','medium','no',
          null,'no','clarify','數字正確，屬趨勢詮釋。',
          '較113年增加12.5%（十年來標準化死亡率大致持平、略有起伏）',['比前一年多了100人']),
        F('醫師引述國外資料，卵巢癌確診時逾7成已是第3、4期','SOURCE_EVIDENCE','foreign_data',
          '引用的是國外資料，未說明國家與年份，也不是國內癌登的期別分布，讀者可能當成台灣現況。','medium','yes',
          '國內癌症登記卵巢癌期別分布。','no','confirm','屬醫師引述國外資料。',
          null,['國外資料顯示7成以上的人發現時已經是第3、4期']),
        F('居女性癌症發生第7位','SOURCE_EVIDENCE','figure_without_count',
          '只寫排名、沒有新發人數與發生率，讀者難以掌握規模；112年附表未列卵巢癌人數。','low','yes',
          '112年癌症登記年報卵巢癌新發人數。','no','confirm','排名引自衛福部新聞稿。',
          null),
        F('有卵巢癌、乳癌家族史者，可與醫師討論是否需要遺傳諮詢','SOURCE_EVIDENCE','advice_without_basis',
          '遺傳諮詢建議未引用來源，也沒說明與哪些基因相關，讀者無法判斷依據。','low','yes',
          '國內醫學會或國健署關於遺傳性婦癌諮詢的建議。','no','confirm','屬常見臨床建議，未附出處。',
          null,['可以問醫師要不要做遺傳諮詢','有家族史者討論遺傳諮詢'])
      ],
      card:[
        F('較前一年死亡人數','MEDICAL_INTERPRETATION','single_year_change',
          '「+12.5%」放大成次數字，讀者可能過度解讀為快速惡化。','low','no',
          null,'no','clarify','數字正確。',
          '較前一年死亡人數（單年波動）'),
        F('有家族史可討論遺傳諮詢','SOURCE_EVIDENCE','advice_without_basis',
          '卡面建議未標來源。','low','no',
          null,'no','clarify','屬常見臨床建議。',
          null)
      ]
    },
    title_alts:[
      '卵巢癌早期沒症狀：持續腹脹別只當腸胃問題',
      '肚子越來越大、一直脹氣？姊妹們別只吃胃藥',
      '沒有篩檢工具的卵巢癌：警訊、風險與就醫時機'
    ],
    card_title_alts:[
      ['持續腹脹別輕忽','卵巢癌警訊要認得'],
      ['一直脹氣？','別只吃胃藥'],
      ['卵巢癌沒有篩檢','認得警訊最重要']
    ],
    data_addon:[
      '114年死因統計：卵巢癌標準化死亡率每十萬女性3.9人，較113年3.6人上升。',
      '卵巢癌死亡人數2016年677人、2019年683人、2022年765人、2025年899人。',
      '112年癌症登記：女性十大癌症依序為乳癌、肺癌、大腸癌、甲狀腺癌、子宮體癌、肝癌、卵巢癌、皮膚癌、胃癌、子宮頸癌。'
    ],
    cta:'如果最近常脹氣、腹圍變大超過幾週，這週就約一次婦產科門診。'
  });
})();
