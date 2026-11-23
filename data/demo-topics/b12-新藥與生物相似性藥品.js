/* v6 示範主題：新藥與生物相似性藥品（B12 第三輪新主題）
   查證日期：2026-11-23。數據來源：衛福部新聞稿〈健保推動使用生物相似性藥品及學名藥 共創醫病健保三贏〉（114-06-28，健保署）、
   〈癌症治療接軌國際再向前 健保同步擴大罕病用藥照護〉（115-10-02，健保署）、衛福部生物相似性藥品說明（食藥署）。
   參考方向：判定清單第551、635、491列（生物相似性藥品、糖尿病新藥、新藥平行審查文章）。只取架構，數據重新查證。 */
(function(){
  const REFS = [
    {title:'健保推動使用生物相似性藥品及學名藥 共創醫病健保三贏',source:'衛生福利部中央健康保險署',url:'https://mohw.gov.tw/cp-16-82878-1.html'},
    {title:'癌症治療接軌國際再向前 健保同步擴大罕病用藥照護',source:'衛生福利部中央健康保險署',url:'https://mohw.gov.tw/cp-16-88129-1.html'},
    {title:'生物相似性藥品說明',source:'衛生福利部食品藥物管理署',url:'https://www.mohw.gov.tw/cp-2623-19621-1.html'}
  ];
  const TABLE = {headers:['類別','是什麼','健保與自費'], rows:[
    ['原開發新藥','首次上市的新成分藥品，須經食藥署查驗登記核准','取得許可證後，須另經健保收載程序才給付；未收載前多為自費'],
    ['學名藥','化學合成藥專利到期後，成分相同的藥品','已收載者依健保給付'],
    ['生物相似性藥品','與已核准原開發生物藥在品質、安全及功效上相似的生物藥','已收載者依健保給付；113年7月1日起健保試辦鼓勵使用']
  ]};
  const TAGS = ['生物相似性藥品','新藥','學名藥','健保藥品給付','用藥安全'];

  const DP_SHARE = {id:'dp-biosim-share', type:'data_scope', title:'11.9%為醫令量占同成分比例',
    desc:'健保署公布生物相似藥占同成分藥品比例11.9%，是以已收載的10個成分計算，不是全部生物藥。AI 沿用官方數字並標明口徑。',
    current:'11.9%（10個成分、36個項目，健保署114-06-28）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'11.9%', value:'試辦後', note:'健保署114-06-28新聞稿（目前採用）'},
      {label:'7.38%', value:'112年', note:'同一新聞稿'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'生物相似性藥品是「仿冒藥」嗎？新藥上市與健保給付的流程',
    update_date:'2026/11/23',
    intro:'生物藥（如單株抗體、胰島素、生長激素）來自活細胞製造，專利到期後出現的「生物相似性藥品」，經食藥署審查確認在品質、安全及功效上與原開發藥相似才能上市。健保自113年7月1日起試辦鼓勵使用生物相似藥，依健保署114年6月28日新聞稿，已收載10個成分、36個項目，占同成分藥品比例由112年的7.38%提升至11.9%。',
    sections:[
      {heading:'新藥、學名藥、生物相似藥比一比',format:'table',table:TABLE},
      {heading:'新藥從核准到給付',format:'bullets',items:[
        '取得食藥署許可證代表可以上市販售，但不等於健保給付。',
        '健保收載須經藥物給付項目及支付標準共同擬訂會議等程序，給付常附有適應症與用藥條件。',
        '健保持續擴大給付，例如115年10月1日起擴大多項癌症藥品給付，預估約2,600名病人受惠。'
      ]},
      {heading:'病人可以怎麼做',format:'bullets',items:[
        '換用生物相似藥時，可請醫師或藥師說明成分、劑型與注射方式是否改變。',
        '使用自費新藥前，確認是否有健保給付的替代藥物，以及自費藥品的價格與療程長度。',
        '保留自費藥品收據，並確認保單對門診或住院自費藥品的給付條件。'
      ]}
    ],
    think_tank_view:'生物相似藥不是仿冒品，而是經過審查、讓更多人用得起生物藥的選擇；新藥則要經過核准與健保收載兩道關卡。了解這個流程，能幫助病人和醫師討論用藥選擇與費用。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'占比與試辦日期引自健保署114-06-28新聞稿，癌症藥擴大給付引自115-10-02新聞稿，定義引自衛福部，未使用療效保證用語，未提及特定藥廠或商品名。',
    ai_rationale:{basis:['10個成分、36個項目、11.9%、7.38%、113年7月1日試辦取自健保署114-06-28新聞稿','115年10月1日癌症藥擴大給付2,600名取自健保署115-10-02新聞稿'],
      layout_reason:'先用表格區分三類藥品，再說明新藥到給付的流程，最後給病人行動建議。',
      tone:'專業易懂', tone_reason:'藥品制度議題需要精確。',
      to_verify:['生物相似藥占比為已收載成分口徑']},
    decision_points:[DP_SHARE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'醫師說要換「生物相似藥」？別擔心，先看這篇',
    update_date:'2026/11/23',
    intro:'有些病人打的針劑，某天被告知要換成「生物相似藥」，心裡難免嘀咕：是便宜的仿冒品嗎？其實它要經過食藥署審查，品質、安全和效果都要和原廠藥相似才能上市。健保從113年7月1日開始鼓勵使用，目前已有10個成分、36個品項。',
    sections:[
      {heading:'這幾種藥差在哪？',format:'table',table:TABLE},
      {heading:'新藥為什麼要自費？',format:'bullets',items:[
        '新藥拿到許可證只代表可以賣，還要通過健保審查才會給付。',
        '健保每年都在擴大給付，像115年10月起又擴大多項癌症藥。',
        '健保給付常有條件，符合才能用健保。'
      ]},
      {heading:'可以這樣問',format:'bullets',items:[
        '換藥後打法、劑量有沒有不一樣？',
        '自費新藥有沒有健保的替代選擇？',
        '自費藥品收據記得留好，對照保單。'
      ]}
    ],
    think_tank_view:'生物相似藥是經過把關的選擇，換藥有疑問就直接問醫師藥師。自費新藥則先問替代方案與總花費，再和家人討論。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自健保署並標明日期，未使用療效保證用語，未提及特定藥廠或商品名。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'從換藥的疑慮出發，再談新藥自費與提問清單。', tone:'生活親切', tone_reason:'給病人與家屬閱讀。', to_verify:['占比為已收載成分口徑']},
    decision_points:[DP_SHARE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'生物相似藥與新藥：給付重點',
    update_date:'2026/11/23',
    intro:'生物相似藥經審查與原開發藥相似。健保113年7月起試辦鼓勵使用，占比升至11.9%。',
    sections:[
      {heading:'三類藥品',format:'table',table:TABLE},
      {heading:'新藥',format:'bullets',items:[
        '許可證不等於健保給付。',
        '給付常附適應症條件。'
      ]},
      {heading:'病人',format:'bullets',items:[
        '換藥有疑問先問醫師藥師。',
        '自費新藥先問替代方案。'
      ]}
    ],
    think_tank_view:'相似藥不是仿冒；新藥要過核准與給付兩關。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自健保署並標明日期，未使用療效保證用語，未提及特定藥廠或商品名。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為三類藥品、新藥、病人三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['占比為已收載成分口徑']},
    decision_points:[DP_SHARE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'新藥與生物相似性藥品', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'生物相似藥經審查，不是仿冒藥', primary_visual:'11.9%', secondary_message:'新藥須經核准與健保收載兩道關卡', action_priority:'換藥、自費前先問清楚'},
    headline_hook:'生物相似藥不是仿冒藥', headline_main:'換藥、用新藥前先問 4 件事', title_accent:'先問 4 件事',
    hero_message:'占比升至 11.9%', hero_support:'生物相似藥占同成分藥品（健保署 114.6）',
    primary_stat:{value:'11.9%', label:'生物相似藥占同成分藥品', note:'健保署 114-06-28｜112 年為 7.38%'},
    action_title:'用藥前這樣問',
    action_cards:[
      {key:'換', text:'換用相似藥：劑量、注射方式有無改變'},
      {key:'給', text:'新藥是否已納入健保、有無給付條件'},
      {key:'替', text:'自費前先問有無健保替代藥物'},
      {key:'留', text:'保留自費藥品收據，對照保單條款'}
    ],
    notice:'許可證代表可以上市，**不等於健保給付**；給付常附有適應症條件。',
    carousel_suggestion:{reason:'若想把藥品分類、給付流程與提問分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'三類藥品', headline_main:'新藥、學名藥、相似藥'},
      {layout_type:'data', headline_hook:'健保鼓勵', headline_main:'相似藥占比 11.9%'},
      {layout_type:'action', headline_hook:'用藥前', headline_main:'先問這 4 件事'}]},
    hashtags:['生物相似藥','新藥','健保給付','用藥安全'],
    sources:['衛生福利部中央健康保險署','衛生福利部食品藥物管理署'],
    illustration_category:'general',
    illustration:{topic:'用藥諮詢', audience:'長期用藥的病人', scene:'藥師在藥局櫃檯拿著藥盒向病人說明，病人手裡拿著處方箋',
      emotion:'安心、清楚', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A pharmacist at a pharmacy counter holding a medicine box and explaining it to a patient holding a prescription, reassured and clear mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['11.9%、7.38%、113年7月1日試辦取自健保署114-06-28新聞稿'],
      layout_reason:'選 action：病人最需要的是換藥與用新藥前的具體提問，占比退到下方當背景資訊。',
      tone:'專業易懂', tone_reason:'藥品制度需要中性、具體。',
      to_verify:['占比為已收載成分口徑']},
    decision_points:[Object.assign({}, DP_SHARE, {current:'11.9%｜已收載 10 成分（健保署 114-06-28）'})],
    content_check_note:'數據引自健保署並標明日期，未使用療效保證用語，未提及特定藥廠或商品名。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'新藥與生物相似性藥品',
    collect:{
      summary:'生物相似性藥品經食藥署審查，品質、安全及功效與原開發生物藥相似，價格較低。健保自113年7月1日起試辦鼓勵使用，占同成分藥品比例升至11.9%；新藥則須經核准與健保收載兩道程序，未收載前多為自費，與病人自費負擔直接相關。',
      objective_data:[
        {item:'盛行率／發生率',desc:'11.9%生物相似藥占比：健保收載生物相似藥10個成分、36個項目，占同成分藥品比例11.9%，較112年7.38%提升（健保署114年6月28日）。',tag:'官方統計',source:{name:'衛生福利部：健保推動使用生物相似性藥品及學名藥',url:'https://mohw.gov.tw/cp-16-82878-1.html'}},
        {item:'政策動向',desc:'113年7月1日起試辦：健保推動使用生物相似藥品鼓勵試辦計畫，114年8月1日起擴大納入癌症化學治療學名藥，處方開立每張獎勵150點。',tag:'官方統計',source:{name:'衛生福利部：健保推動使用生物相似性藥品及學名藥',url:'https://mohw.gov.tw/cp-16-82878-1.html'}},
        {item:'年度趨勢方向',desc:'約2600名癌症病人受惠：健保自115年10月1日起擴大多項癌症藥品給付，挹注藥費約19.76億元。',tag:'官方統計',source:{name:'衛生福利部：癌症治療接軌國際再向前',url:'https://mohw.gov.tw/cp-16-88129-1.html'}}
      ],
      product_view:['機會：自費新藥是癌症險、實支實付與重大疾病保障常被討論的缺口，可說明「許可證≠健保給付」。','機會：可提醒保戶確認保單對門診自費藥品與住院自費藥品的給付差異。','風險：不可推薦特定藥品或廠牌，也不可暗示新藥保證有效。'],
      marketing_view:['機會：「生物相似藥是仿冒藥嗎」是病人常見疑慮，適合破解迷思的內容。','機會：可與癌症精準醫療、慢性病用藥主題串連。','風險：不可出現藥品商品名或藥廠名稱，避免藥品廣告疑慮。'],
      alert_level:'medium',
      alert_reason:'健保新藥收載與給付規定每月都有變動，鼓勵試辦計畫也滾動檢討，宜定期更新。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('占同成分藥品比例由112年的7.38%提升至11.9%','DATA_FACTUAL_ACCURACY','scope_condition_missing',
          '未說明11.9%以哪種用量口徑計算、統計到何時，讀者可能誤以為是全部生物藥的使用比例。','medium','yes',
          '健保署生物相似藥占比的計算口徑與統計期間','no','clarify','數字正確，需補口徑。',
          '占已收載10個成分同成分藥品的比例由112年的7.38%提升至11.9%'),
        F('品質、安全和效果都要和原廠藥相似才能上市','TERMINOLOGY_LANGUAGE','informal_term',
          '「原廠藥」是俗稱，正式用語為「原開發生物藥品」，白話版可並列。','low','no',
          null,'no','clarify','屬用語。',
          '品質、安全和效果都要和原開發藥（俗稱原廠藥）相似才能上市'),
        F('健保收載須經藥物給付項目及支付標準共同擬訂會議等程序','SOURCE_EVIDENCE','missing_source',
          '收載流程未附健保署出處，參考資料中也沒有對應的流程說明連結。','low','yes',
          '健保署新藥收載流程說明頁','no','clarify','需補官方流程出處。',
          null)
      ],
      card:[
        F('生物相似藥占同成分藥品（健保署 114.6）','DATA_FACTUAL_ACCURACY','scope_condition_missing',
          '未說明只計已收載的10個成分，卡片讀者可能理解為全部生物藥。','low','no',
          null,'no','clarify','屬口徑說明。',
          '已收載 10 成分中相似藥占比（健保署 114.6）'),
        F('換用相似藥：劑量、注射方式有無改變','MEDICAL_INTERPRETATION','safety_info_missing',
          '未提醒換藥後若有不適應回診告知醫師。','low','no',
          null,'no','clarify','可補安全提醒。',
          '換用相似藥：問清劑量與注射方式，不適就回診')
      ]
    },
    title_alts:[
      '生物相似性藥品是「仿冒藥」嗎？新藥上市與健保給付的流程',
      '醫師說要換「生物相似藥」？別擔心，先看這篇',
      '生物相似藥占比升至11.9%：新藥、學名藥、相似藥一次看懂'
    ],
    card_title_alts:[
      ['生物相似藥不是仿冒藥','換藥、用新藥前先問 4 件事'],
      ['新藥要自費嗎','許可證不等於健保給付'],
      ['相似藥占比 11.9%','健保鼓勵使用']
    ],
    data_addon:[
      '癌症化療學名藥試辦納入15個成分、100個學名藥項目，目標醫令量占率70%（健保署114-06-28）。',
      '我國第一張生物相似性藥品許可證的主成分為人類生長激素（衛福部說明）。',
      '115年6月1日起健保另有多項藥品給付措施生效，預估嘉惠約8,200名癌症病人。'
    ],
    cta:'醫師建議換藥或使用自費新藥時，先問清楚差異、有無健保替代選擇與總花費，並保留收據對照保單條款。'
  });
})();
