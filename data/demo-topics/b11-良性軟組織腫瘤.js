/* v6 示範主題：良性軟組織腫瘤（B11 第二輪擴充）
   查證日期：2026-11-23。資料來源：TVBS健康2.0醫師受訪（粉瘤、脂肪瘤、腱鞘囊腫辨識；脂肪瘤大於5公分、變硬、變色、壓迫神經建議手術）。
   **查無國內良性軟組織腫瘤盛行率或手術量官方統計**，全篇不寫盛行數字。參考方向：健康智庫〈成人常見的良性軟組織與腫瘤〉2023/07/31。 */
(function(){
  const REFS = [
    {title:'身體凸一塊?是粉瘤、脂肪瘤還是腱鞘囊腫 醫師教你1秒分辨差異',source:'TVBS健康2.0',url:'https://health.tvbs.com.tw/medical/342344'},
    {title:'40歲女腋下長脂肪顆粒竟是高血脂找上門!醫警告4種脂肪瘤快開刀 小心癌變',source:'TVBS健康2.0',url:'https://health.tvbs.com.tw/medical/337179'}
  ];
  const TABLE = {headers:['常見腫塊','特徵與處理'], rows:[
    ['粉瘤（表皮囊腫）','皮膚下的囊袋，常見臉、背、耳後，可能擠出有臭味的白色物質；發炎前手術完整切除囊袋較不易復發'],
    ['脂肪瘤','柔軟、可稍微推動、多半不痛，常見背、後頸、手臂；只能以手術移除'],
    ['腱鞘囊腫','關節附近明顯凸起的圓球，常見手腕、腳踝；可抽吸或手術切除'],
    ['需儘快就醫','短期內快速變大、變硬、顏色改變、疼痛、壓迫神經造成麻痛，或大於約5公分']
  ]};
  const TAGS = ['脂肪瘤','粉瘤','腱鞘囊腫','皮膚腫塊','外科'];

  const DP_5CM = {id:'dp-lump-5cm', type:'source_level', title:'「5公分」是醫師經驗門檻',
    desc:'「大於5公分建議評估或切除」出自醫師受訪報導，屬臨床常用參考，並非官方指引；實際是否手術需由醫師觸診、超音波或病理檢查判斷，AI 沒有替你挑選。',
    current:'或大於約5公分',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約5公分', value:'醫師受訪參考值', note:'TVBS報導（目前採用）'},
      {label:'依醫師評估', value:'個別判斷', note:'觸診、超音波、必要時病理檢查'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'身上摸到硬塊別慌：粉瘤、脂肪瘤、腱鞘囊腫怎麼分',
    update_date:'2026/11/23',
    intro:'洗澡時摸到皮膚下有一顆腫塊，很多人第一個念頭是「會不會是癌症」。其實成人身上最常見的是粉瘤（表皮囊腫）、脂肪瘤與腱鞘囊腫，大多屬於良性。不過外科醫師提醒，若腫塊短期內快速變大、變硬或壓迫神經，仍應儘快就醫，排除惡性肉瘤等少見情況。',
    sections:[
      {heading:'3種常見良性腫塊比一比',format:'table',table:TABLE},
      {heading:'處理原則',format:'bullets',items:[
        '粉瘤擠壓或塗藥無法去除囊袋，發炎時可能需先控制感染，完整切除囊袋才能降低復發。',
        '脂肪瘤無法用雷射消除，若持續變大、影響外觀或壓迫神經，可與醫師討論手術。',
        '腱鞘囊腫可先觀察或抽吸，反覆復發再考慮手術切除。'
      ]},
      {heading:'不要自己做的事',format:'bullets',items:[
        '不要自行擠壓粉瘤，容易造成發炎感染，嚴重時可能引發蜂窩性組織炎。',
        '不要用偏方塗抹或針挑，延誤正確診斷。',
        '不要因為「不痛」就放著不管，定期觀察大小與硬度變化。'
      ]}
    ],
    think_tank_view:'身上的腫塊大多是良性，但「良性」要由醫師確認，而不是自己猜。拍照記錄大小、每月摸一摸有沒有變化，出現快速變大、變硬或疼痛就去看外科或皮膚科；在小的時候處理，傷口與疤痕通常也比較小。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'腫塊辨識與就醫時機引自醫師受訪報導並標明來源，查無國內官方統計故未寫盛行數字，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['腫塊特徵與手術時機取自TVBS醫師受訪報導'],
      layout_reason:'讀者最想知道「這顆是什麼、要不要處理」，先用表格對照3種腫塊，再說明處理原則與不要自己做的事。',
      tone:'專業易懂', tone_reason:'需讓讀者安心但不輕忽。',
      to_verify:['查無國內盛行率官方統計','5公分為醫師經驗門檻']},
    decision_points:[DP_5CM]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'背上多一顆小肉球？先別嚇自己',
    update_date:'2026/11/23',
    intro:'背上、脖子後面或手腕突然摸到一顆「肉球」，是不是很緊張？其實大人身上最常見的是粉瘤、脂肪瘤和腱鞘囊腫，大多是良性的。但如果它長得很快、變硬或開始痛，還是要讓醫師看看。',
    sections:[
      {heading:'這3種最常見',format:'table',table:TABLE},
      {heading:'可以怎麼處理',format:'bullets',items:[
        '粉瘤靠擠是擠不乾淨的，要整個囊袋拿掉才不容易再長。',
        '脂肪瘤只能開刀拿掉，雷射沒辦法。',
        '腱鞘囊腫可以先觀察，或請醫師抽掉。'
      ]},
      {heading:'千萬別這樣做',format:'bullets',items:[
        '自己擠粉瘤，很容易發炎化膿。',
        '亂擦偏方或用針挑。',
        '覺得不痛就放著，不看它有沒有變大。'
      ]}
    ],
    think_tank_view:'摸到腫塊先別嚇自己，也別假裝沒看到。拍張照、量一下大小，一個月後再比一次；有變大、變硬或會痛，就去給醫師檢查。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自醫師受訪報導並標明來源，未寫盛行數字，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以摸到腫塊的緊張情境切入，再給辨識與處理。', tone:'生活親切', tone_reason:'降低焦慮、給一般讀者。', to_verify:['5公分為醫師經驗門檻']},
    decision_points:[DP_5CM]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'良性軟組織腫瘤：3種常見腫塊',
    update_date:'2026/11/23',
    intro:'粉瘤、脂肪瘤、腱鞘囊腫是成人最常見的良性腫塊。快速變大、變硬或疼痛應就醫。',
    sections:[
      {heading:'3種腫塊',format:'table',table:TABLE},
      {heading:'處理',format:'bullets',items:[
        '粉瘤需完整切除囊袋。',
        '脂肪瘤只能手術移除。'
      ]},
      {heading:'禁忌',format:'bullets',items:[
        '勿自行擠壓或用偏方。',
        '定期觀察大小變化。'
      ]}
    ],
    think_tank_view:'腫塊是否良性由醫師判斷；有變化就就醫。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自醫師受訪報導，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為腫塊、處理、禁忌三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['5公分為醫師經驗門檻']},
    decision_points:[DP_5CM]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'良性軟組織腫瘤', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'身上腫塊大多是良性', primary_visual:'3 種常見腫塊', secondary_message:'快速變大、變硬要就醫', action_priority:'觀察變化、不自己擠'},
    headline_hook:'身上摸到小肉球？', headline_main:'3 種常見良性腫塊', title_accent:'3 種',
    hero_message:'大多是良性', hero_support:'但仍要由醫師確認（醫師受訪）',
    knowledge_title:'怎麼分辨', knowledge_note:'快速變大、變硬、疼痛，**儘快就醫**',
    knowledge_cards:[
      {label:'粉瘤', icon:'check', lines:['皮下囊袋、可能有臭味','常見臉、背、耳後']},
      {label:'脂肪瘤', icon:'check', lines:['軟、可推動、多不痛','常見背、後頸、手臂']},
      {label:'腱鞘囊腫', icon:'check', lines:['關節旁圓球凸起','常見手腕、腳踝']}
    ],
    primary_stat:{value:'約 5 公分', label:'腫塊超過建議醫師評估', note:'醫師受訪參考值，非官方指引'},
    action_title:'發現腫塊這樣做',
    action_cards:[
      {key:'記', text:'拍照量大小，每月比較一次'},
      {key:'忍', text:'不自己擠、不用偏方或針挑'},
      {key:'看', text:'變大、變硬、變色或疼痛就醫'},
      {key:'治', text:'與外科或皮膚科討論是否切除'}
    ],
    carousel_suggestion:{reason:'若想把3種腫塊分開介紹，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'粉瘤', headline_main:'擠不乾淨要切除囊袋'},
      {layout_type:'knowledge', headline_hook:'脂肪瘤', headline_main:'軟軟的可推動'},
      {layout_type:'knowledge', headline_hook:'腱鞘囊腫', headline_main:'關節旁的小圓球'}]},
    hashtags:['脂肪瘤','粉瘤','腱鞘囊腫','皮膚腫塊'],
    sources:['TVBS健康2.0（醫師受訪）'],
    illustration_category:'screening-checkup',
    illustration:{topic:'皮膚腫塊檢查', audience:'成年人', scene:'一位成年人在診間讓醫師檢查手腕上的小腫塊，醫師拿著超音波探頭',
      emotion:'安心、被照顧', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A doctor examining a small lump on an adult patient\'s wrist with an ultrasound probe in a clinic, reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['腫塊特徵與就醫時機取自TVBS醫師受訪'],
      layout_reason:'核心是辨識，選 knowledge：3 種腫塊特徵當主角，5 公分參考值退到下方，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'安心但不輕忽。',
      to_verify:['5公分為醫師經驗門檻']},
    decision_points:[Object.assign({}, DP_5CM, {current:'約 5 公分｜腫塊超過建議醫師評估'})],
    content_check_note:'內容引自醫師受訪報導並標明，未寫盛行數字，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'良性軟組織腫瘤',
    collect:{
      summary:'粉瘤、脂肪瘤、腱鞘囊腫是成人最常見的良性軟組織腫塊，多數不需緊急處理，但快速變大、變硬或疼痛時需就醫排除惡性肉瘤；查無國內官方盛行統計，屬疾病知識類長期溝通議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'查無國內良性軟組織腫瘤盛行率或手術量官方統計：外科醫師表示，皮膚腫瘤摘除是外科常見手術，粉瘤、脂肪瘤與腱鞘囊腫為最常見的三種。',tag:'市場觀察',source:{name:'TVBS：是粉瘤、脂肪瘤還是腱鞘囊腫 醫師教你分辨',url:'https://health.tvbs.com.tw/medical/342344'}},
        {item:'年度趨勢方向',desc:'無長期趨勢統計：多數為良性、生長緩慢，醫師建議以定期觀察大小與硬度變化為主。',tag:'市場觀察',source:{name:'TVBS：是粉瘤、脂肪瘤還是腱鞘囊腫 醫師教你分辨',url:'https://health.tvbs.com.tw/medical/342344'}},
        {item:'政策動向',desc:'約5公分為手術參考門檻：醫師受訪指出，脂肪瘤大於5公分、變硬、顏色改變或壓迫神經，建議手術移除，脂肪瘤無法以雷射處理。',tag:'市場觀察',source:{name:'TVBS：醫警告4種脂肪瘤快開刀',url:'https://health.tvbs.com.tw/medical/337179'}},
        {item:'好發族群年齡層',desc:'成人常見：粉瘤好發於常摩擦的臉頰、背部、耳後，腱鞘囊腫好發於手腕與腳踝等常活動的關節。',tag:'市場觀察',source:{name:'TVBS：是粉瘤、脂肪瘤還是腱鞘囊腫 醫師教你分辨',url:'https://health.tvbs.com.tw/medical/342344'}}
      ],
      product_view:['機會：良性腫瘤切除屬常見門診或短期手術，可說明手術與住院相關保障的差異。','機會：可結合「自我觀察、及早就醫」的健康管理提醒。','風險：不得暗示良性腫瘤一定會惡化，避免引發不必要焦慮。'],
      marketing_view:['機會：「身上摸到小肉球」是常見疑問，搜尋需求穩定。','機會：圖解3種腫塊差異適合社群分享。','風險：避免用「小心癌變」等恐懼標題。'],
      alert_level:'low',
      alert_reason:'屬疾病知識類長期議題，無時效事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('大多屬於良性','SOURCE_EVIDENCE','claim_without_source',
          '「大多良性」未說明依據，文中沒有比例或出處。','low','no',
          null,'no','clarify','查無國內統計，可標為醫師說法。',
          '醫師表示大多屬於良性',
          ['大多是良性的','最常見的良性腫塊']),
        F('外科醫師提醒','SOURCE_EVIDENCE','single_expert',
          '未說明醫師來源與報導年份，讀者無法判斷資訊層級。','low','no',
          null,'no','clarify','屬出處層級說明。',
          '外科醫師受訪（TVBS報導）提醒'),
        F('在小的時候處理，傷口與疤痕通常也比較小','MEDICAL_INTERPRETATION','generalization',
          '此說法對粉瘤較適用，脂肪瘤與腱鞘囊腫不一定需要提早手術，概括說法可能讓讀者誤以為都應及早切除。','low','no',
          null,'no','revise','是否手術應依醫師評估。',
          '若醫師建議切除，在腫塊較小時處理，傷口通常也比較小'),
        F('完整切除囊袋才能降低復發','MEDICAL_INTERPRETATION','outcome_overstatement',
          '完整切除可降低但無法保證不復發，「才能」語氣偏絕對。','low','no',
          null,'no','revise','避免絕對用語。',
          '完整切除囊袋有助降低復發')
      ],
      card:[
        F('腫塊超過建議醫師評估','SOURCE_EVIDENCE','single_expert',
          '5公分門檻僅來自醫師受訪，卡面下方雖有註記，但標籤本身讀起來像正式標準。','low','no',
          null,'no','clarify','屬出處層級說明。',
          '醫師常用的評估參考大小'),
        F('但仍要由醫師確認（醫師受訪）','TERMINOLOGY_LANGUAGE','redundant',
          '括號中的「醫師受訪」與前文重複，未說明是哪一則報導。','low','no',
          null,'no','revise','屬用語精簡。',
          '但仍要由醫師確認')
      ]
    },
    title_alts:[
      '身上摸到硬塊別慌：粉瘤、脂肪瘤、腱鞘囊腫怎麼分',
      '背上多一顆小肉球？先別嚇自己',
      '成人常見良性腫塊：辨識特徵與就醫時機'
    ],
    card_title_alts:[
      ['身上摸到小肉球？','3 種常見良性腫塊'],
      ['摸到腫塊別慌','先分清楚是哪一種'],
      ['粉瘤、脂肪瘤、腱鞘囊腫','怎麼分辨']
    ],
    data_addon:[
      '粉瘤發炎潰瘍時可能受到感染，嚴重時引發蜂窩性組織炎。',
      '脂肪瘤若長在肌肉層或變硬，需由醫師評估是否為脂肪肉瘤。',
      '腱鞘囊腫與關節過度使用或受傷有關。'
    ],
    cta:'摸到腫塊先拍照、量大小並記下日期，一個月後再比較；若有變大、變硬或疼痛，就預約外科或皮膚科。'
  });
})();
