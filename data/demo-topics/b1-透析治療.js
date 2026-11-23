/* v6 示範主題：透析治療（血液與腹膜透析）（B1 心血管・腎臟・內分泌代謝）
   查證日期：2026-11-20。數據來源：台灣腎臟醫學會《2024台灣腎病年報》第二章「發生」（資料年度2022年，健保署提供資料、國衛院協助分析；查證時為最新一期）、
   聯合報2025-12-05（衛福部長石崇良於居家透析白皮書發表會說明）、TVBS 2025-12（健保署居家透析獎勵預算）、工商時報2025-12-06（總統致詞）。
   參考方向：健康智庫〈洗腎除了跑醫院，在家也能做？〉2026/04、〈洗腎王國觀察報告〉2026/03。 */
(function(){
  const REFS = [
    {title:'2024台灣腎病年報 第二章 發生',source:'台灣腎臟醫學會',url:'https://www.tsn.org.tw/twrds/20251111/827aad6f-0932-4009-9c34-007f8af9c636/827aad6f-0932-4009-9c34-007f8af9c636.pdf'},
    {title:'洗腎人口近10萬…居家透析目標2035年達18% 石崇良曝三大考量',source:'聯合報',url:'https://udn.com/news/story/7266/9184919'},
    {title:'鼓勵居家透析！健保署砸4.3億加碼獎勵 2035年居家洗腎率要翻倍',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/medical/360525'},
    {title:'3成三高患者腎功能亮紅燈 掌握8招「腎」健康',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-81762-1.html'}
  ];
  const TABLE = {headers:['項目','血液透析','腹膜透析'], rows:[
    ['在哪裡做','多在醫院或透析院所','多在家中自行操作'],
    ['頻率','一般每週約3次、每次約4小時','每天進行，依醫師處方換液或夜間機器透析'],
    ['需要的通路','手臂動靜脈瘻管或人工血管','腹部植入腹膜透析導管'],
    ['新發患者占比','90.5%（2022年）','9.5%（2022年）']
  ]};
  const TAGS = ['透析','洗腎','腹膜透析','居家透析','慢性腎臟病'];

  const DP_POP = {id:'dp-dialysis-pop', type:'data_version', title:'透析總人數有不同說法',
    desc:'透析「新發」人數可在《2024台灣腎病年報》查到（2022年12,459人）；透析「總人數」則來自2025年12月總統致詞「超過9萬人」與衛福部長發表會「近10萬人」等口頭說明，尚未查到年報的盛行人數原表。AI 以年報的新發人數當主數字。',
    current:'2022年新發透析12,459人（2024台灣腎病年報）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'12,459人', value:'2022年新發透析', note:'2024台灣腎病年報（目前採用）'},
      {label:'超過9萬／近10萬人', value:'透析總人數', note:'2025年12月總統致詞、衛福部長說明（媒體報導）'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'洗腎不只能去醫院：認識血液透析與腹膜透析',
    update_date:'2026/11/20',
    intro:'當慢性腎臟病進展到末期，就需要透析（俗稱洗腎）替代腎臟清除廢物與水分。依台灣腎臟醫學會《2024台灣腎病年報》，2022年新發透析患者12,459人，其中46.1%主要原因為糖尿病；年齡標準化透析發生率為每百萬人口290人，自2018年起呈下降趨勢。衛福部2025年12月發布《台灣居家透析白皮書》，目標2035年居家透析盛行率達18%。',
    sections:[
      {heading:'血液透析與腹膜透析比較',format:'table',table:TABLE},
      {heading:'透析現況與政策',format:'bullets',items:[
        '2022年新發透析患者中，75歲以上占33.7%、40-64歲占32.8%，男性占57.4%。',
        '新發患者選擇腹膜透析的比率多年維持在約9.5%，絕大多數仍在院所接受血液透析。',
        '據媒體報導，健保署2025年編列約4.3億元專款，鼓勵院所推動居家腹膜透析與居家血液透析。'
      ]},
      {heading:'選擇透析方式前可以這樣做',format:'bullets',items:[
        '腎功能進入晚期時，與腎臟科醫師、衛教師討論各種透析方式與腎臟移植的利弊。',
        '考量工作、交通、居家空間與家人支持，選擇適合自己生活的方式。',
        '透析前後都要持續控制血糖、血壓，並依營養師建議調整飲食與水分。'
      ]}
    ],
    think_tank_view:'透析不是只有「每週三次去醫院」一種樣貌。腹膜透析與居家血液透析能讓部分病友保留更多工作與家庭時間，但也需要自我照護能力與家人支持。及早和醫療團隊討論，才能選到最貼近自己生活的方式；而控制三高、延緩腎功能惡化，永遠是第一步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'新發人數、發生率與透析模式比率引自台灣腎臟醫學會2024台灣腎病年報並標明資料年份，政策內容標明出處，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['2022年新發透析12,459人、標準化發生率每百萬290人（2024台灣腎病年報）','居家透析白皮書目標2035年18%（衛福部2025年12月）'],
      layout_reason:'先用對照表說明兩種透析方式，再整理現況與政策，最後給選擇前的具體做法。',
      tone:'專業易懂', tone_reason:'治療選擇需要清楚、可比較的資訊。',
      to_verify:['年報資料年度為2022年，為查證時可取得的最新一期','健保署4.3億元專款為媒體報導，原始公告待查']},
    decision_points:[DP_POP]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'洗腎一定要每週跑醫院3次嗎？在家也有選擇',
    update_date:'2026/11/20',
    intro:'聽到「洗腎」，很多人想到的是每週三次、每次好幾個小時待在醫院。依台灣腎病年報，2022年有12,459人開始透析，將近一半和糖尿病有關。其實除了到醫院做血液透析，還有可以在家做的腹膜透析；衛福部也希望到2035年，有18%的透析病友能在家透析。',
    sections:[
      {heading:'兩種洗腎方式，差在哪？',format:'table',table:TABLE},
      {heading:'現在大家怎麼選？',format:'bullets',items:[
        '新開始洗腎的人，10人裡約有9人選擇到院所做血液透析。',
        '新開始洗腎的人當中，75歲以上的長輩約占三分之一。',
        '健保署也加碼鼓勵醫院推動居家透析，讓病友有更多選擇。'
      ]},
      {heading:'家人可以怎麼幫忙？',format:'bullets',items:[
        '陪長輩一起跟醫師、衛教師聊聊，每種方式的優缺點都問清楚。',
        '想想上班、接送、家裡空間，哪一種比較適合全家的生活。',
        '不管選哪一種，血糖、血壓和飲食都要繼續顧好。'
      ]}
    ],
    think_tank_view:'洗腎是一段長期的旅程，選對方式能讓生活過得更像自己。不妨把「想繼續上班」「想多陪孫子」這些心願告訴醫療團隊，一起找出最適合的安排。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自台灣腎病年報並標明年份，「10人裡約有9人」依90.5%換算，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以病友與家屬的疑問帶出兩種方式、現況與家人支持。', tone:'生活親切', tone_reason:'給病友與家屬閱讀，降低對洗腎的恐懼。', to_verify:['健保署專款金額原始公告']},
    decision_points:[DP_POP]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'透析：血液或腹膜，選擇適合自己的方式',
    update_date:'2026/11/20',
    intro:'2022年新發透析12,459人，46.1%主因為糖尿病。衛福部目標2035年居家透析盛行率達18%。',
    sections:[
      {heading:'兩種方式比較',format:'table',table:TABLE},
      {heading:'現況',format:'bullets',items:[
        '新發患者腹膜透析比率約9.5%。',
        '75歲以上占新發患者33.7%。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '晚期腎病及早與醫療團隊討論透析方式。',
        '持續控制血糖、血壓。',
        '依營養師建議調整飲食。'
      ]}
    ],
    think_tank_view:'及早討論透析方式，選擇最貼近生活的治療；控制三高延緩腎功能惡化是根本。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自台灣腎病年報並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為比較、現況、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['年報資料年度為2022年']},
    decision_points:[DP_POP]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'透析治療（血液與腹膜透析）', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'每年約 1.2 萬人開始透析', primary_visual:'約 1.2 萬人', secondary_message:'近一半新發透析與糖尿病有關', action_priority:'及早討論透析方式、控制三高'},
    headline_hook:'洗腎只能去醫院？', headline_main:'認識血液與腹膜透析', title_accent:'血液與腹膜透析',
    primary_stat:{kicker:'2022 年・新發透析', value:'約 1.2 萬人', label:'開始透析的病友', note:'2024 台灣腎病年報：12,459 人'},
    chart:{type:'bar', title:'新發透析人數（人）', points:[
      {label:'2018', value:12342, display:'12,342'},
      {label:'2019', value:12471, display:'12,471'},
      {label:'2020', value:12375, display:'12,375'},
      {label:'2021', value:12207, display:'12,207'},
      {label:'2022', value:12459, display:'12,459', highlight:true}
    ], note:'台灣腎臟醫學會｜標準化發生率 2018 年起下降'},
    secondary_stats:[
      {value:'46.1%', label:'主因為糖尿病'},
      {value:'9.5%', label:'新發選擇腹膜透析'},
      {value:'18%', label:'2035 居家透析目標'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'控', text:'控制血糖、血壓，延緩腎功能惡化'},
      {key:'問', text:'晚期腎病及早和醫師討論透析方式'},
      {key:'想', text:'考量工作、交通與家人支持'},
      {key:'吃', text:'依營養師建議調整飲食與水分'}
    ],
    carousel_suggestion:{reason:'若想把現況、兩種方式與居家透析政策分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'透析現況', headline_main:'每年約 1.2 萬人開始透析'},
      {layout_type:'knowledge', headline_hook:'兩種方式', headline_main:'血液透析與腹膜透析'},
      {layout_type:'action', headline_hook:'居家透析', headline_main:'2035 年目標 18%'}]},
    hashtags:['透析','洗腎','腹膜透析','居家透析'],
    sources:['台灣腎臟醫學會','衛生福利部'],
    illustration_category:'elderly-care',
    illustration:{topic:'居家透析', audience:'透析病友與家屬', scene:'一位長者在家中客廳舒適地坐著進行腹膜透析，家人在旁陪伴聊天',
      emotion:'安心、自在', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult sitting comfortably in a living room doing home peritoneal dialysis while a family member keeps them company, relaxed mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['2018-2022年新發透析人數（2024台灣腎病年報）','居家透析白皮書2035年目標18%'],
      layout_reason:'透析議題有清楚的年度人數，選 data：新發人數當主角、5 年長條圖顯示持平，糖尿病占比與腹膜透析比率放第二層，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'治療選擇需要清楚、避免恐嚇。',
      to_verify:['年報資料年度為2022年']},
    decision_points:[Object.assign({}, DP_POP, {current:'約 1.2 萬人｜2022 年新發透析'})],
    content_check_note:'新發人數與比率引自2024台灣腎病年報並標明資料年份，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'透析治療（血液與腹膜透析）',
    collect:{
      summary:'台灣每年約1.2萬人開始透析、近半與糖尿病有關，年齡標準化發生率自2018年起下降；衛福部2025年12月發布居家透析白皮書，目標2035年居家透析盛行率18%，健保署也加碼獎勵，是兼具政策時機與病友生活品質溝通價值的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'2022年新發透析約1.2萬人：依《2024台灣腎病年報》，新發透析患者12,459人，男性占57.4%，主診斷為糖尿病者占46.1%。',tag:'官方統計',source:{name:'台灣腎臟醫學會：2024台灣腎病年報 第二章 發生',url:'https://www.tsn.org.tw/twrds/20251111/827aad6f-0932-4009-9c34-007f8af9c636/827aad6f-0932-4009-9c34-007f8af9c636.pdf'}},
        {item:'年度趨勢方向',desc:'標準化發生率每百萬人口290人：以WHO人口結構標準化後，2011-2018年約每百萬307-318人，2018年起下降，2022年為290人（年報由健保署提供資料）。',tag:'官方統計',source:{name:'台灣腎臟醫學會：2024台灣腎病年報 第二章 發生',url:'https://www.tsn.org.tw/twrds/20251111/827aad6f-0932-4009-9c34-007f8af9c636/827aad6f-0932-4009-9c34-007f8af9c636.pdf'}},
        {item:'政策動向',desc:'2035年居家透析盛行率目標18%：衛福部與台灣腎臟醫學會2025年12月發布《台灣居家透析白皮書（2026-2035）》，衛福部長石崇良說明透析人口近10萬人、多數在院所接受血液透析。',tag:'市場觀察',source:{name:'聯合報：洗腎人口近10萬…居家透析目標2035年達18%',url:'https://udn.com/news/story/7266/9184919'}},
        {item:'好發族群年齡層',desc:'75歲以上占新發透析33.7%：2022年新發透析以75歲以上4,202人最多，40-64歲4,085人次之，65-74歲人數自2018年起增加。',tag:'官方統計',source:{name:'台灣腎臟醫學會：2024台灣腎病年報 第二章 發生',url:'https://www.tsn.org.tw/twrds/20251111/827aad6f-0932-4009-9c34-007f8af9c636/827aad6f-0932-4009-9c34-007f8af9c636.pdf'}}
      ],
      product_view:['機會：透析屬長期、高額的醫療照護，可作為說明重大疾病（末期腎病）與長期照護保障的情境。','機會：居家透析政策推動中，交通、照護人力等非醫療支出是保戶實際關心的問題。','風險：重大疾病給付條件依條款定義而定，溝通時不得暗示「開始洗腎即理賠」。'],
      marketing_view:['機會：居家透析白皮書剛發布，可用「洗腎不只能去醫院」作為新知切點。','機會：近半新發透析與糖尿病有關，可與糖尿病、慢性腎臟病主題串連。','風險：透析病友與家屬是敏感族群，避免以「洗腎王國」等負面標籤或恐懼訴求。'],
      alert_level:'medium',
      alert_reason:'居家透析白皮書與健保獎勵於2025年底推出，屬政策推動期，適合納入年度溝通規劃。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('年齡標準化透析發生率為每百萬人口290人，自2018年起呈下降趨勢','MEDICAL_INTERPRETATION','standardized_vs_crude',
          '只寫標準化發生率下降，沒有說明粗發生率（每百萬536人）仍在上升；讀者可能誤以為新洗腎的人越來越少，但新發人數其實持平、受高齡化影響。','medium','no',
          null,'no','clarify','數字正確，屬趨勢詮釋補充。',
          '年齡標準化透析發生率為每百萬人口290人，自2018年起呈下降趨勢，但因人口老化，每年新發人數仍維持約1.2萬人'),
        F('健保署2025年編列約4.3億元專款','SOURCE_EVIDENCE','secondary_citation',
          '金額引自媒體報導，未附健保署公告或總額協商資料。','low','yes',
          '健保署2025年居家透析專款的正式公告或總額協商紀錄。','yes','confirm','數字可能正確，但屬二手引述。',
          null),
        F('衛福部也希望到2035年，有18%的透析病友能在家透析','MEDICAL_INTERPRETATION','target_definition',
          '白皮書目標是「居家透析盛行率18%」，媒體對此是否專指腹膜透析或含居家血液透析說法不一；改寫成「18%的病友在家透析」可能過度簡化。','low','yes',
          '《台灣居家透析白皮書》目標原文定義。','no','confirm','目標數字一致，定義範圍待確認。',
          '衛福部白皮書目標2035年居家透析盛行率達18%（含腹膜透析等居家透析方式）'),
        F('一般每週約3次、每次約4小時','MEDICAL_INTERPRETATION','individualized_regimen',
          '表格以「一般」描述透析頻率，但實際次數與時間依病情與醫囑調整，讀者可能當成固定標準。','low','no',
          null,'no','clarify','屬常見安排的描述，非錯誤。',
          '常見為每週3次、每次約4小時，實際依醫囑調整')
      ],
      card:[
        F('2035 居家透析目標','MEDICAL_INTERPRETATION','target_definition',
          '卡面未說明18%是「居家透析盛行率」，也未標出處，讀者可能誤解為腹膜透析占比或新發比例。','low','no',
          null,'no','clarify','數字引自白皮書。',
          '2035 居家透析盛行率目標'),
        F('台灣腎臟醫學會｜標準化發生率 2018 年起下降','MEDICAL_INTERPRETATION','standardized_vs_crude',
          '長條圖是新發人數（持平），註腳卻寫標準化發生率下降，兩者口徑不同並列，容易讓讀者混淆。','low','no',
          null,'no','clarify','數字皆正確。',
          '台灣腎臟醫學會｜新發人數持平，標準化發生率 2018 年起下降')
      ]
    },
    title_alts:[
      '洗腎不只能去醫院：認識血液透析與腹膜透析',
      '洗腎一定要每週跑醫院3次嗎？在家也有選擇',
      '每年約1.2萬人開始透析：兩種方式與居家透析政策一次看'
    ],
    card_title_alts:[
      ['洗腎只能去醫院？','認識血液與腹膜透析'],
      ['每年約 1.2 萬人','開始透析'],
      ['在家也能洗腎','居家透析 2035 年目標 18%']
    ],
    data_addon:[
      '2024台灣腎病年報：透析粗發生率由2011年每百萬431人增加至2022年536人。',
      '2022年新發透析開始時，男性發生率每百萬人口621人、女性452人。',
      '衛福部114年死因統計：腎炎、腎病症候群及腎病變死亡5,980人，居十大死因第8位。'
    ],
    cta:'如果家人已在腎臟科追蹤，下次回診時一起問醫師：「我們適合哪一種透析方式？」'
  });
})();
