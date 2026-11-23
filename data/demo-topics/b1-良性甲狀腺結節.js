/* v6 示範主題：良性甲狀腺結節（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-21。數據來源：聯合報元氣周報2025-08-10（土城醫院新陳代謝科主任說明：約每4人1人有結節、女男比約3-4比1、良轉惡約3%、追蹤頻率、手術考量）、
   衛福部112年癌症登記附表（甲狀腺癌新發6,045人，作為結節評估背景）。
   國內查無甲狀腺結節官方盛行率；結節相關比例皆為醫師說明。
   參考方向：健康智庫〈良性甲狀腺結節〉2023/01、〈微創手術－甲狀腺射頻消融術〉2024/01。 */
(function(){
  const REFS = [
    {title:'40歲以上女性最常見 甲狀腺結節多屬良性但仍須穿刺檢查確認',source:'聯合報元氣周報',url:'https://health.udn.com/health/story/5974/8926460'},
    {title:'112年國人十大癌症發生人數附表',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'}
  ];
  const TABLE = {headers:['步驟','重點（醫師說明）'], rows:[
    ['發現','多半沒有症狀，常在健檢、超音波或摸到頸部腫塊時發現'],
    ['評估','以超音波觀察，必要時以細針穿刺抽取細胞判斷良惡性，不需麻醉'],
    ['追蹤','良性且無明顯壓迫者，每半年至一年做一次超音波'],
    ['處理','超過4公分可考慮切除但並非一定要處理；惡性結節應盡早切除']
  ]};
  const TAGS = ['甲狀腺結節','良性結節','甲狀腺超音波','細針穿刺','女性健康'];

  const DP_SRC = {id:'dp-nod-src', type:'data_scope', title:'結節比例的出處',
    desc:'「約每4人1人有結節」「女男比約3-4比1」「良性轉惡性約3%」皆為土城醫院醫師受訪說明，報導未附研究來源；醫師亦表示惡性檢出比率並無特別統計。AI 將這些比例標為醫師說明。',
    current:'約每4人1人有甲狀腺結節（醫師說明）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約每4人1人', value:'結節常見程度', note:'土城醫院醫師說明（目前採用）'},
      {label:'無特別統計', value:'惡性檢出比率', note:'同一報導'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'健檢發現甲狀腺結節別慌：多數良性，但要評估與追蹤',
    update_date:'2026/11/21',
    intro:'甲狀腺結節相當常見，土城醫院新陳代謝科醫師指出，平均約每4人中就有1人會出現甲狀腺結節，女性發生率約為男性的3至4倍，40歲以上風險明顯增加。結節多屬良性，醫師說明良性結節轉變為惡性的比例約3%，其餘約97%維持穩定；但仍需透過超音波與必要時的細針穿刺確認。依112年癌症登記，甲狀腺癌新發6,045人。',
    sections:[
      {heading:'發現結節後的4個步驟',format:'table',table:TABLE},
      {heading:'認識甲狀腺結節',format:'bullets',items:[
        '醫師指出，甲狀腺結節並無特殊症狀，多在自摸、家人發現頸部腫大或健檢時發現。',
        '囊腫型結節僅占所有結節約1%，惡性風險很低；實心結節較常見，需進一步評估。',
        '結節大小與惡性風險不一定成正比，是否處理應由醫師依檢查結果判斷。'
      ]},
      {heading:'治療與追蹤',format:'bullets',items:[
        '良性且無明顯壓迫者，以定期超音波追蹤為主。',
        '傳統甲狀腺切除手術有健保給付；達文西機械手臂等微創手術需自費。',
        '若出現吞嚥卡卡、聲音沙啞或結節快速變大，應提早回診。'
      ]}
    ],
    think_tank_view:'健檢報告寫「甲狀腺結節」時，最常見的反應是擔心是不是癌症。其實多數結節是良性的，重點是完成評估、按時追蹤。把下一次超音波的日期記在行事曆上，就是最實在的照顧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'結節相關比例與處理建議標明為醫師說明，甲狀腺癌新發人數引自衛福部112年癌症登記，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['結節常見程度、良轉惡比例、追蹤建議（土城醫院醫師說明，元氣周報2025-08）','112年甲狀腺癌新發6,045人（癌症登記）'],
      layout_reason:'以健檢發現結節的情境，用表格整理發現、評估、追蹤、處理4步驟，再補充認識與治療重點。',
      tone:'專業易懂', tone_reason:'降低焦慮並提供具體做法。',
      to_verify:['國內甲狀腺結節官方盛行率查無資料','射頻消融術給付與適應症未查證，文中未寫']},
    decision_points:[DP_SRC]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'甲狀腺長了結節怎麼辦？大多是良性，按時追蹤就好',
    update_date:'2026/11/21',
    intro:'健檢報告上寫著「甲狀腺結節」，是不是很緊張？醫師說，大約每4個人就有1人有甲狀腺結節，女生比男生多3到4倍，40歲以後更常見。好消息是，大部分結節都是良性的，只要做好評估、定期追蹤就可以。',
    sections:[
      {heading:'發現結節，這樣做',format:'table',table:TABLE},
      {heading:'你可能想知道',format:'bullets',items:[
        '結節通常沒感覺，很多人是健檢才發現。',
        '醫師說，良性結節變成惡性的比例約3%。',
        '結節大小不一定代表危險程度，要看醫生怎麼判斷。'
      ]},
      {heading:'什麼時候要提早回診',format:'bullets',items:[
        '吞東西卡卡、聲音沙啞。',
        '結節突然變大。',
        '照醫生安排的時間回去做超音波。'
      ]}
    ],
    think_tank_view:'很多人知道有結節後就一直擔心，卻忘了回去追蹤。與其擔心，不如把下次檢查日期寫下來，按時回診最安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料標明為醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以健檢報告的焦慮情境切入。', tone:'生活親切', tone_reason:'給上班族女性閱讀，降低焦慮。', to_verify:['比例為醫師說明']},
    decision_points:[DP_SRC]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'甲狀腺結節：多數良性，定期超音波追蹤',
    update_date:'2026/11/21',
    intro:'醫師指出約每4人1人有甲狀腺結節，女性較多，多屬良性，良轉惡比例約3%。',
    sections:[
      {heading:'4步驟',format:'table',table:TABLE},
      {heading:'重點',format:'bullets',items:[
        '多數無症狀。',
        '大小不等於惡性風險。'
      ]},
      {heading:'回診',format:'bullets',items:[
        '吞嚥卡卡、沙啞、快速變大提早回診。',
        '良性者每半年至一年超音波。'
      ]}
    ],
    think_tank_view:'甲狀腺結節多數良性，完成評估、按時追蹤最重要。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'資料標明為醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為步驟、重點、回診三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['無官方統計']},
    decision_points:[DP_SRC]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'良性甲狀腺結節', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'甲狀腺結節多屬良性，按時追蹤', primary_visual:'約 97%', secondary_message:'約每 4 人 1 人有結節', action_priority:'超音波評估、定期追蹤'},
    headline_hook:'健檢發現結節？', headline_main:'甲狀腺結節 4 步驟', title_accent:'4 步驟',
    hero_message:'多數是良性', hero_support:'醫師指出約每 4 人 1 人有甲狀腺結節',
    primary_stat:{value:'約 97%', label:'良性結節維持穩定的比例', note:'土城醫院醫師說明｜轉變為惡性約 3%'},
    action_title:'發現結節這樣做',
    action_cards:[
      {key:'評', text:'超音波評估，必要時細針穿刺'},
      {key:'追', text:'良性者每半年至一年超音波'},
      {key:'察', text:'吞嚥卡卡、沙啞、變大提早回診'},
      {key:'問', text:'是否手術由醫師依檢查判斷'}
    ],
    notice:'女性發生率約為男性 **3–4 倍**，40 歲以上更常見（醫師說明）。',
    carousel_suggestion:{reason:'若想把常見程度、評估與治療分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'甲狀腺結節', headline_main:'約每 4 人 1 人'},
      {layout_type:'action', headline_hook:'健檢發現結節？', headline_main:'甲狀腺結節 4 步驟'},
      {layout_type:'knowledge', headline_hook:'什麼時候要處理', headline_main:'手術考量一次看'}]},
    hashtags:['甲狀腺結節','良性結節','甲狀腺超音波','女性健康'],
    sources:['聯合報元氣周報','衛生福利部國民健康署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'甲狀腺結節追蹤', audience:'40 歲以上女性', scene:'一位女性在診間接受頸部超音波，醫師指著螢幕說明',
      emotion:'冷靜、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A woman receiving a neck ultrasound in a clinic while the doctor points at the screen and explains, calm and reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['醫師說明（元氣周報2025-08）'],
      layout_reason:'核心是發現結節後怎麼做，選 action：4 個步驟當主角，良性比例當主數字並標出處。',
      tone:'專業易懂', tone_reason:'降低焦慮。',
      to_verify:['主數字為醫師說明']},
    decision_points:[Object.assign({}, DP_SRC, {current:'約 97% 維持良性（醫師說明）'})],
    content_check_note:'比例標明為醫師說明，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'良性甲狀腺結節',
    collect:{
      summary:'醫師指出約每4人1人有甲狀腺結節、女性為男性3至4倍，多屬良性但仍需超音波與必要時穿刺確認；國內無官方盛行率，「健檢發現結節別慌、完成評估按時追蹤」是適合女性健檢族群的溝通議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約每4人1人有甲狀腺結節：土城醫院新陳代謝科主任2025年8月受訪指出，女性發生率約為男性3至4倍，40歲以上風險明顯增加（國內查無官方盛行率）。',tag:'市場觀察',source:{name:'聯合報元氣周報：40歲以上女性最常見 甲狀腺結節多屬良性',url:'https://health.udn.com/health/story/5974/8926460'}},
        {item:'年度趨勢方向',desc:'約3%良性結節轉變為惡性：醫師說明其餘約97%維持穩定良性，惡性檢出比率並無特別統計，囊腫型結節僅占約1%。',tag:'市場觀察',source:{name:'聯合報元氣周報：40歲以上女性最常見 甲狀腺結節多屬良性',url:'https://health.udn.com/health/story/5974/8926460'}},
        {item:'政策動向',desc:'傳統切除手術有健保給付：醫師說明傳統甲狀腺切除手術由健保給付、傷口約4至5公分，達文西機械手臂微創手術需自費。',tag:'市場觀察',source:{name:'聯合報元氣周報：40歲以上女性最常見 甲狀腺結節多屬良性',url:'https://health.udn.com/health/story/5974/8926460'}},
        {item:'好發族群年齡層',desc:'112年甲狀腺癌新發6045人：依衛福部癌症登記，甲狀腺癌診斷年齡中位數50歲，女性居癌症發生第4位，結節評估的目的在於排除惡性。',tag:'官方統計',source:{name:'衛生福利部：112年國人十大癌症發生人數附表',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'}}
      ],
      product_view:['機會：結節手術與自費微創手術可作為醫療保障的溝通情境。','機會：超音波追蹤提醒適合結合健檢報告解讀服務。','風險：結節涉及核保，避免讓民眾因擔心核保而不敢追蹤；不得推薦特定自費術式。'],
      marketing_view:['機會：「健檢發現結節別慌」貼近40歲以上女性的真實焦慮。','機會：可與甲狀腺癌、甲亢、甲低串成甲狀腺系列。','風險：避免以「可能是癌」製造焦慮。'],
      alert_level:'low',
      alert_reason:'無政策事件與官方統計，適合以健檢衛教方式長期溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('平均約每4人中就有1人會出現甲狀腺結節','SOURCE_EVIDENCE','secondary_citation',
          '比例出自單一醫師受訪，未說明是以超音波或觸診計算、針對哪個族群。','medium','yes',
          '國內甲狀腺結節盛行率研究。','no','confirm','屬醫師說明。',
          null,['大約每4個人就有1人有甲狀腺結節','約每4人1人有甲狀腺結節']),
        F('良性結節轉變為惡性的比例約3%','MEDICAL_INTERPRETATION','statistic_context',
          '「轉變為惡性」與「初次檢出即為惡性」不同；醫師也表示惡性檢出率並無特別統計，讀者可能誤以為所有結節只有3%是癌。','medium','no',
          null,'no','clarify','屬口徑說明。',
          '經評估為良性的結節，日後轉變為惡性的比例約3%（醫師說明）',['良性結節變成惡性的比例約3%','良轉惡比例約3%']),
        F('依112年癌症登記，甲狀腺癌新發6,045人','CONTEXT_CONSISTENCY','topic_drift',
          '良性結節文章引用甲狀腺癌人數，可能讓讀者把結節與癌症直接連結而增加焦慮。','low','no',
          null,'no','clarify','屬脈絡安排。',
          null),
        F('達文西機械手臂等微創手術需自費','BRAND_TONE_CONSISTENCY','product_mention',
          '提及特定品牌手術系統，可能被解讀為推薦自費術式；可改為一般性說明。','low','no',
          null,'no','revise','屬品牌中立調整。',
          '部分微創手術需自費')
      ],
      card:[
        F('良性結節維持穩定的比例','SOURCE_EVIDENCE','secondary_citation',
          '主數字為醫師說明，未附研究出處。','medium','yes',
          '研究來源。','no','confirm','屬醫師說明。',
          null),
        F('女性發生率約為男性 **3–4 倍**','SOURCE_EVIDENCE','secondary_citation',
          '倍數為醫師說明。','low','no',
          null,'no','clarify','已標註醫師說明。',
          null)
      ]
    },
    title_alts:[
      '健檢發現甲狀腺結節別慌：多數良性，但要評估與追蹤',
      '甲狀腺長了結節怎麼辦？大多是良性，按時追蹤就好',
      '甲狀腺結節4步驟：發現、評估、追蹤、處理'
    ],
    card_title_alts:[
      ['健檢發現結節？','甲狀腺結節 4 步驟'],
      ['多數是良性','按時追蹤最重要'],
      ['約每 4 人 1 人','有甲狀腺結節']
    ],
    data_addon:[
      '醫師說明：結節超過4公分可考慮切除，但並非一定要處理。',
      '醫師說明：細針穿刺如同抽血般取細胞，不需麻醉。',
      '112年癌症登記：甲狀腺癌標準化死亡率每十萬人0.5人。'
    ],
    cta:'健檢報告若寫有甲狀腺結節，今天就把下一次超音波追蹤的日期記到行事曆。'
  });
})();
