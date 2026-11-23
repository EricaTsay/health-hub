/* v6 示範主題：減重藥物與瘦瘦針（B11 第二輪擴充）
   查證日期：2026-11-23。數據來源：食藥署2026-02-07新聞稿（核准3種成分、不良反應21件）、國健署2026-03-04世界肥胖日新聞稿（2020-2024年國民營養健康調查51.3%）、
   國健署2013-2016年國民營養健康狀況變遷調查（45.4%）、聯合報2026-07引述食藥署（48件、36張許可證、風險管控計畫）。
   參考方向：健康智庫〈想打瘦瘦針減重？施打前必讀指南〉2025/12/29。不鼓吹使用、不提及品牌。 */
(function(){
  const REFS = [
    {title:'誤用瘦瘦針恐傷身！食藥署提醒：勿網購、須醫師開立並留意不良反應',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/tc/newsContent.aspx?cid=4&id=t624106'},
    {title:'響應世界肥胖日 兩招啟動健康管理',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-85702-1.html'},
    {title:'肥胖是慢性疾病! 調整飲食及運動生活是最佳處方',source:'衛生福利部',url:'https://www.mohw.gov.tw/fp-3796-42429-1.html'},
    {title:'瘦瘦針不良反應累計48件 食藥署要求提供急性腎損傷、脫水等用藥警語',source:'聯合報',url:'https://udn.com/news/story/7266/9658558'}
  ];
  const TABLE = {headers:['你該知道的事','重點'], rows:[
    ['核准成分','食藥署核准「體重控制」適應症的GLP-1類藥品共3種成分：tirzepatide、semaglutide、liraglutide'],
    ['取得方式','屬處方藥，須醫師評估開立、藥師調劑，切勿網購或從來路不明管道購買'],
    ['使用對象','多數限成人使用，且須符合BMI等條件；部分品項經醫師評估可用於12歲以上青少年'],
    ['健保給付','健保給付此類藥物用於第二型糖尿病血糖控制，用於體重控制需自費（媒體報導，以健保署公告為準）'],
    ['常見副作用','噁心、嘔吐、腸胃不適、低血糖、注射部位不適；出現劇烈腹痛等異狀應儘速就醫']
  ]};
  const TAGS = ['減重藥物','瘦瘦針','肥胖症','用藥安全','體重管理'];

  const DP_ADR = {id:'dp-glp1-adr', type:'data_scope', title:'不良反應通報有兩個數字',
    desc:'食藥署2026年2月新聞稿統計112-114年共21件疑似不良反應；媒體於2026年7月引述食藥署，累計至115年7月16日為48件。統計期間不同，AI 沒有替你挑選。',
    current:'112年至114年共接獲21件疑似不良反應通報',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'21件', value:'112/1/1–114/12/31', note:'食藥署2026-02-07新聞稿（目前採用）'},
      {label:'48件', value:'累計至115/7/16', note:'聯合報2026-07引述食藥署，原始公告未直接取得'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'瘦瘦針不是萬靈丹：減重藥物的適應症、給付與風險',
    update_date:'2026/11/23',
    intro:'依國民健康署2020-2024年國民營養健康調查，我國51.3%成年人達到過重及肥胖標準。俗稱「瘦瘦針」的GLP-1受體促效劑類藥品近年討論度高，但它屬於處方藥，須經醫師評估才能使用。食藥署2026年2月提醒，目前國內核准用於「體重控制」的此類藥品共3種成分，民眾切勿網購，並應留意不良反應。',
    sections:[
      {heading:'使用減重藥物前必知5件事',format:'table',table:TABLE},
      {heading:'藥物不能取代生活型態調整',format:'bullets',items:[
        '國健署將肥胖視為需要長期管理的慢性疾病，建議成人每週累計150分鐘中等強度運動，過重或肥胖者每週250~300分鐘並搭配飲食調整。',
        '減重藥物是在醫師評估後，搭配飲食與運動的輔助選項，不是「打了就瘦」。',
        '停藥後若生活習慣沒有改變，體重可能回升，治療計畫應與醫師討論。'
      ]},
      {heading:'這些情況要特別小心',format:'bullets',items:[
        '112年至114年共接獲21件疑似不良反應通報，症狀包括腸胃疾病、低血糖、噁心、嘔吐與注射部位不適。',
        '食藥署要求藥商提供「病人用藥安全指引」，列出過敏反應、嚴重胃腸疾病及脫水、急性腎損傷等風險。',
        '有胰臟炎病史、懷孕或準備懷孕、正在使用其他降血糖藥物者，應主動告知醫師。'
      ]}
    ],
    think_tank_view:'減重藥物讓肥胖治療多了一個選項，但它是處方藥，不是美容消費品。真正決定長期成效的，仍是飲食、活動量與睡眠等生活習慣。若BMI已達過重或肥胖，先到醫療院所做完整評估，再與醫師討論適合自己的方式，比在網路上找「最快瘦」的方法更安全。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'核准成分與警語引自食藥署2026年新聞稿，盛行率引自國健署並標明調查年份；健保給付現況為媒體報導，已標示以健保署公告為準；未提及品牌、未使用療效保證或鼓吹使用的用語。',
    ai_rationale:{basis:['沿用步驟1洞察：51.3%成年人過重及肥胖（國健署2020-2024年調查）','核准成分、處方規定與不良反應通報取自食藥署2026-02-07新聞稿'],
      layout_reason:'讀者最需要的是「能不能用、怎麼取得、誰付錢、有什麼風險」，先用表格一次說清楚，再強調藥物不能取代生活型態，最後列出要小心的情況。',
      tone:'專業易懂', tone_reason:'用藥資訊需要精確、中性，避免鼓吹使用。',
      to_verify:['健保給付範圍為媒體報導，請以健保署藥品給付規定核對','48件為媒體引述，食藥署原始公告未直接取得']},
    decision_points:[DP_ADR]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'想打瘦瘦針？先搞懂這5件事再決定',
    update_date:'2026/11/23',
    intro:'身邊好像越來越多人在聊「瘦瘦針」。國內每2位成年人就有1位過重或肥胖（國民健康署2020-2024年調查為51.3%），想變瘦的心情很能理解。不過瘦瘦針是處方藥，要醫師看過、開處方才能用；食藥署2026年2月也提醒，千萬別在網路上買，以免買到假藥。',
    sections:[
      {heading:'打之前先知道',format:'table',table:TABLE},
      {heading:'藥不是魔法',format:'bullets',items:[
        '國健署建議過重的人每週活動250~300分鐘，再搭配飲食調整。',
        '瘦瘦針是醫師評估後的輔助選項，還是要配合吃得對、動得夠。',
        '如果停藥後習慣沒改，體重可能又回來，記得和醫師一起規劃。'
      ]},
      {heading:'這些狀況先問醫師',format:'bullets',items:[
        '112年至114年共接獲21件疑似不良反應通報，多數是腸胃不舒服、噁心、嘔吐或低血糖。',
        '肚子劇痛、一直吐、尿量變少，都要趕快就醫。',
        '曾經得過胰臟炎、懷孕或準備懷孕，或正在吃降血糖藥，一定要先跟醫師說。'
      ]}
    ],
    think_tank_view:'瘦瘦針可以是減重路上的幫手，但不是捷徑。先找醫師做完整評估，再決定要不要用、怎麼用；同時把每天多走10分鐘、少喝一杯含糖飲料這些小事做起來，瘦下來才留得住。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自食藥署與國健署公開資料並標明年份，「每2位就有1位」依51.3%換算；健保給付為媒體報導並已註明；未提及品牌、未鼓吹使用。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以想嘗試的讀者角度，依「打之前、打的時候、要注意」排列。', tone:'生活親切', tone_reason:'給正在考慮使用的一般讀者。', to_verify:['健保給付範圍請以健保署公告核對']},
    decision_points:[DP_ADR]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'瘦瘦針：處方藥，不是捷徑',
    update_date:'2026/11/23',
    intro:'國內51.3%成年人過重及肥胖。食藥署核准「體重控制」的GLP-1類藥品共3種成分，屬處方藥，切勿網購。',
    sections:[
      {heading:'必知5件事',format:'table',table:TABLE},
      {heading:'生活型態仍是基礎',format:'bullets',items:[
        '過重者每週活動250~300分鐘並調整飲食。',
        '停藥後若習慣未改，體重可能回升。'
      ]},
      {heading:'用藥風險',format:'bullets',items:[
        '112年至114年共接獲21件疑似不良反應通報。',
        '劇烈腹痛、持續嘔吐應儘速就醫。'
      ]}
    ],
    think_tank_view:'減重藥物須經醫師評估使用，飲食與運動才是長期維持體重的關鍵。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自食藥署與國健署公開資料並標明年份，未提及品牌、未鼓吹使用。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為必知事項、生活型態、用藥風險三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['健保給付範圍請以健保署公告核對']},
    decision_points:[DP_ADR]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'減重藥物與瘦瘦針', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'每 2 位成人就有 1 位過重或肥胖', primary_visual:'51.3%', secondary_message:'瘦瘦針是處方藥，須醫師評估', action_priority:'不網購、看醫師、顧生活'},
    headline_hook:'瘦瘦針不是萬靈丹', headline_main:'用藥前先問醫師 4 件事', title_accent:'4 件事',
    primary_stat:{kicker:'2020–2024 年・18 歲以上', value:'51.3%', label:'成人過重及肥胖比率', note:'國健署國民營養健康調查'},
    chart:{type:'bar', title:'成人過重及肥胖比率（%）', points:[
      {label:'2013–16', value:45.4, display:'45.4%'},
      {label:'2020–24', value:51.3, display:'51.3%', highlight:true}
    ], note:'國健署國民營養健康調查'},
    secondary_stats:[
      {value:'3 種', label:'核准體重控制成分'},
      {value:'21 件', label:'112–114 年不良反應通報'}
    ],
    action_title:'考慮用藥前',
    action_cards:[
      {key:'診', text:'先就醫評估，處方藥須醫師開立'},
      {key:'拒', text:'不網購、不買來路不明的針劑'},
      {key:'付', text:'減重用途健保不給付，費用先問清楚'},
      {key:'動', text:'搭配飲食調整，每週活動 250–300 分鐘'}
    ],
    carousel_suggestion:{reason:'若想把肥胖現況、藥物規定與副作用分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'成人過重及肥胖', headline_main:'每 2 人就有 1 人'},
      {layout_type:'knowledge', headline_hook:'瘦瘦針規定', headline_main:'處方藥 3 種成分'},
      {layout_type:'action', headline_hook:'用藥安全', headline_main:'出現這些症狀快就醫'}]},
    hashtags:['減重藥物','瘦瘦針','用藥安全','肥胖症'],
    sources:['衛生福利部食品藥物管理署','衛生福利部國民健康署'],
    illustration_category:'metabolic',
    illustration:{topic:'減重藥物諮詢', audience:'考慮減重的成年人', scene:'一位成年人在診間與醫師討論體重管理，桌上有體重計與飲食紀錄本',
      emotion:'理性、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult discussing weight management with a doctor in a clinic, a bathroom scale and a food diary on the desk, calm and rational mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['沿用步驟1洞察：51.3%成年人過重及肥胖（國健署2020-2024年調查）','核准成分與不良反應通報取自食藥署2026-02-07新聞稿'],
      layout_reason:'用肥胖比率上升說明需求背景，選 data：主數字與兩期比較當主角，核准成分與通報數放第二層，最後給 4 個「用藥前」行動，避免把藥物當主角。',
      tone:'專業易懂', tone_reason:'用藥議題需中性、避免鼓吹。',
      to_verify:['兩期調查方法是否完全可比','健保給付範圍為媒體報導']},
    decision_points:[Object.assign({}, DP_ADR, {current:'21 件｜112–114 年不良反應通報'})],
    content_check_note:'盛行率引自國健署並標明調查年份，核准成分與通報數引自食藥署，未提及品牌、未使用療效保證或鼓吹用語。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'減重藥物與瘦瘦針',
    collect:{
      summary:'國內逾半數成年人過重或肥胖，俗稱「瘦瘦針」的GLP-1類減重藥物使用快速增加；食藥署已核准3種成分用於體重控制，並於2026年提醒勿網購、要求藥商提供用藥安全指引，屬需要中性、長期溝通的用藥安全議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'51.3%成年人過重及肥胖：依國民健康署2020-2024年國民營養健康調查，18歲以上成年人有51.3%達到過重及肥胖標準。',tag:'官方統計',source:{name:'衛生福利部國民健康署：響應世界肥胖日 兩招啟動健康管理',url:'https://mohw.gov.tw/cp-16-85702-1.html'}},
        {item:'年度趨勢方向',desc:'45.4%上升至51.3%：2013-2016年國民營養健康狀況變遷調查成人過重及肥胖盛行率為45.4%（男53.4%、女38.3%），2020-2024年調查為51.3%，兩期調查方法可能略有差異。',tag:'官方統計',source:{name:'衛生福利部：肥胖是慢性疾病! 調整飲食及運動生活是最佳處方',url:'https://www.mohw.gov.tw/fp-3796-42429-1.html'}},
        {item:'政策動向',desc:'3種成分核准用於體重控制：食藥署2026年2月表示，國內核准「體重控制」適應症的GLP-1受體促效劑有tirzepatide、semaglutide及liraglutide，屬處方藥，須醫師評估開立、藥師調劑，並提醒切勿網購。',tag:'官方統計',source:{name:'食藥署：誤用瘦瘦針恐傷身！勿網購、須醫師開立並留意不良反應',url:'https://www.fda.gov.tw/tc/newsContent.aspx?cid=4&id=t624106'}},
        {item:'好發族群年齡層',desc:'21件疑似不良反應通報：112年1月至114年12月全國藥物不良反應通報系統共接獲21件，症狀包括腸胃疾病、低血糖、噁心、嘔吐及注射部位不適，食藥署表示尚未觀察到整體安全性異常。',tag:'官方統計',source:{name:'食藥署：誤用瘦瘦針恐傷身！勿網購、須醫師開立並留意不良反應',url:'https://www.fda.gov.tw/tc/newsContent.aspx?cid=4&id=t624106'}}
      ],
      product_view:['機會：肥胖與糖尿病、心血管疾病等慢性病相關，可從慢性病風險與健康管理切入保障需求說明。','機會：體重管理、營養諮詢與運動追蹤可作為健康管理服務內容。','風險：不得推薦、暗示或連結任何減重藥物或品牌，也不得暗示用藥可改善核保條件。'],
      marketing_view:['機會：每年3月4日世界肥胖日是固定溝通檔期，可結合國健署「每天多走10分鐘」等生活行動。','機會：「瘦瘦針」搜尋熱度高，以用藥安全、勿網購為主軸可建立可信形象。','風險：避免身材焦慮與前後對比式訴求，不得出現療效保證或鼓吹使用。'],
      alert_level:'medium',
      alert_reason:'減重藥物使用快速增加且食藥署2026年持續發布安全提醒與風險管控措施，屬持續關注的用藥安全議題。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('用於體重控制需自費（媒體報導，以健保署公告為準）','SOURCE_EVIDENCE','secondary_source',
          '健保給付現況引自媒體報導，健保署藥品給付規定原文未列入參考資料，讀者無法自行核對。','medium','yes',
          '健保署藥品給付規定中GLP-1受體促效劑的給付條件。','yes','confirm','給付規定可能隨公告調整。',
          '用於體重控制需自費（依健保署藥品給付規定，給付限糖尿病血糖控制）'),
        F('停藥後若生活習慣沒有改變，體重可能回升','SOURCE_EVIDENCE','claim_without_source',
          '此句為臨床研究常見結論，但文中參考資料（食藥署、國健署）未提及，缺少出處。','low','no',
          null,'no','clarify','屬一般醫學共識，建議補研究或指引出處。',
          '停藥後若生活習慣沒有改變，體重可能回升（臨床研究觀察）',
          ['如果停藥後習慣沒改，體重可能又回來','停藥後若習慣未改，體重可能回升']),
        F('有胰臟炎病史、懷孕或準備懷孕、正在使用其他降血糖藥物者','MEDICAL_INTERPRETATION','individual_advice',
          '列出的禁忌與注意族群屬藥品仿單內容，文中未說明出處，且不同成分的仿單內容可能不同。','low','no',
          null,'no','clarify','建議改為以仿單與醫師評估為準。',
          '有胰臟炎病史、懷孕或準備懷孕、正在使用其他降血糖藥物者（各藥品仿單規定不同）',
          ['曾經得過胰臟炎、懷孕或準備懷孕']),
        F('瘦瘦針可以是減重路上的幫手','COMPLIANCE_LEGAL','promotional_tone',
          '描述語氣偏正面推薦，處方藥衛教內容宜保持中性，避免被解讀為鼓勵使用。','medium','no',
          null,'no','revise','藥事法對處方藥廣告有限制。',
          '瘦瘦針是醫師評估後可能使用的治療選項之一')
      ],
      card:[
        F('減重用途健保不給付，費用先問清楚','SOURCE_EVIDENCE','secondary_source',
          '卡面直接寫健保不給付，但依據為媒體報導，卡上來源未列健保署。','medium','yes',
          '健保署藥品給付規定。','yes','confirm','給付規定可能調整。',
          '減重用途多為自費，費用先問清楚'),
        F('2020–2024 年・18 歲以上','DATA_FACTUAL_ACCURACY','comparison_scope',
          '長條圖比較兩期調查，但兩期調查名稱與方法不同，卡面未提示可比性限制。','low','no',
          null,'no','clarify','屬口徑說明。',
          '2020–2024 年・18 歲以上（與前期調查方法略有差異）')
      ]
    },
    title_alts:[
      '瘦瘦針不是萬靈丹：減重藥物的適應症、給付與風險',
      '想打瘦瘦針？先搞懂這5件事再決定',
      '國內逾半成人過重：減重藥物的正確使用觀念'
    ],
    card_title_alts:[
      ['瘦瘦針不是萬靈丹','用藥前先問醫師 4 件事'],
      ['想打瘦瘦針？','先搞懂這 4 件事'],
      ['每 2 位成人 1 位過重','減重用藥安全須知']
    ],
    data_addon:[
      '2013-2016年成人過重及肥胖盛行率45.4%，男性53.4%、女性38.3%。',
      '媒體2026年7月引述食藥署，累計至115年7月16日不良反應通報48件，核准許可證共36張。',
      '食藥署要求藥商提供病人用藥安全指引，列出過敏反應、嚴重胃腸疾病及脫水、急性腎損傷等風險。'
    ],
    cta:'考慮減重藥物前，先帶著近期體重與健檢報告到醫療院所評估，並從每天多走10分鐘開始調整生活習慣。'
  });
})();
