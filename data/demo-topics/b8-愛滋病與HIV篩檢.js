/* v6 示範主題：愛滋病與 HIV 篩檢（B8 傳染病防治）
   查證日期：2026-11-20。數據來源：疾管署新聞稿（2026-02-10、2026-03-10，衛福部網站轉載）、
   疾管署開放資料 Age_County_Gender_044（HIV感染，依診斷年份，2026-11-20 下載）。
   參考方向：健康智庫〈12/1世界愛滋病日－匿名篩檢報你知〉2023/12。 */
(function(){
  const REFS = [
    {title:'新春巧遇情人節，籲請民眾落實安全防護及主動篩檢',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-85413-1.html'},
    {title:'疾管署呼籲年輕族群善用「性健康友善資源地圖」 保護隱私並守護自身健康',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-85742-1.html'},
    {title:'傳染病統計資料查詢系統：HIV感染',source:'衛生福利部疾病管制署',url:'https://nidss.cdc.gov.tw/nndss/disease?id=044'}
  ];
  const TABLE = {headers:['情況','建議篩檢頻率'], rows:[
    ['有性行為者','一生至少篩檢1次'],
    ['曾有不安全性行為','每年篩檢1次'],
    ['有風險行為或伴侶有風險行為','每3至6個月篩檢1次'],
    ['72小時內有不安全性行為','儘速就醫評估暴露後預防性投藥（PEP），連續服藥28天']
  ]};
  const TAGS = ['愛滋','HIV篩檢','匿名篩檢','自我篩檢','性健康'];

  const DP_COUNT = {id:'dp-hiv-count', type:'data_scope', title:'新增人數有兩種口徑',
    desc:'疾管署新聞稿的「2025年新增879例」是本國籍愛滋病毒感染者；開放資料若含非本國籍，2025年為1,027例。兩者都是官方數字但範圍不同，AI 沒有替你決定要用哪一個。',
    current:'2025年本國籍新增愛滋病毒感染879例（疾管署）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'879 例', value:'本國籍', note:'疾管署新聞稿，2004年以來新低（目前採用）'},
      {label:'1,027 例', value:'含非本國籍', note:'疾管署開放資料，依診斷年份'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'HIV篩檢怎麼做？2025年新增879例創新低，仍有約7%感染者不知情',
    update_date:'2026/11/20',
    intro:'依疾病管制署公布，2025年新增確診通報本國籍愛滋病毒感染879人，較2024年的1,000例下降12%，創2004年以來新低。疾管署預估我國2025年可達「93-96-95」，代表仍有約7%的愛滋感染者尚未知道自己已感染，篩檢是補上這個缺口的關鍵。本文整理建議篩檢頻率、匿名與自我篩檢管道，以及暴露後預防的重點。',
    sections:[
      {heading:'多久篩檢一次？',format:'table',table:TABLE},
      {heading:'篩檢管道與資源',format:'bullets',items:[
        'Line@「疾管家」的「性健康友善資源地圖」可查詢愛滋自我篩檢與匿名篩檢院所、PrEP及PEP資源、保險套自動服務機等。',
        '疾管署自我篩檢計畫官網提供自我篩檢試劑購買管道，在家即可完成。',
        '性傳染病匿名諮詢可撥打1922（或0800-001922）。'
      ]},
      {heading:'預防與觀念',format:'bullets',items:[
        '未戴保險套的性行為是主要傳染途徑，性行為時應全程正確使用保險套並搭配水性潤滑液。',
        '暴露後預防性投藥（PEP）須在72小時內就醫評估，連續服藥28天，可大幅降低感染風險，但不能取代保險套與定期篩檢。',
        '確診後及早治療、穩定服藥，可讓病毒量受到抑制。'
      ]}
    ],
    think_tank_view:'愛滋新增人數持續下降，代表篩檢、治療與預防性投藥的策略正在發揮作用；但「約7%不知道自己感染」提醒我們，最後一哩路在於讓篩檢變得更容易、更沒有壓力。匿名篩檢與自我篩檢的存在，就是為了讓每個人都能在保有隱私的前提下照顧自己的健康。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'新增人數與93-96-95引自疾管署新聞稿並標明年份與本國籍口徑，PEP效果引自疾管署說法，未使用療效保證用語，未涉及具體商品，避免污名化用語。',
    ai_rationale:{basis:['2025年本國籍新增879人、2024年1,000例（疾管署2026年新聞稿）','93-96-95為疾管署預估值'],
      layout_reason:'先用表格讓讀者對照自己的篩檢頻率，再介紹管道，最後說明預防觀念。',
      tone:'專業易懂', tone_reason:'性健康議題需要精確、去污名化的資訊。',
      to_verify:['93-96-95為預估值，正式數字待疾管署公布']},
    decision_points:[DP_COUNT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'做HIV篩檢不用怕：匿名、自我篩檢都可以，保護自己也保護另一半',
    update_date:'2026/11/20',
    intro:'疾管署公布，2025年本國籍新增的愛滋病毒感染者有879人，是2004年以來最少的一年。不過，大約每100位感染者中，還有7位不知道自己已經感染。篩檢其實很簡單，也可以完全匿名，甚至在家自己做。',
    sections:[
      {heading:'我需要多久篩一次？',format:'table',table:TABLE},
      {heading:'去哪裡篩？',format:'bullets',items:[
        '加入Line「疾管家」，打開「性健康友善資源地圖」，就能找到匿名篩檢的醫院、自我篩檢的購買點。',
        '在家自我篩檢，結果只有自己知道。',
        '有疑問可以打1922匿名諮詢。'
      ]},
      {heading:'這些觀念要記得',format:'bullets',items:[
        '每次都全程戴保險套，搭配水性潤滑液。',
        '萬一有不安全性行為，72小時內趕快就醫，問醫師要不要吃預防藥。',
        '就算確診，好好接受治療也能控制病毒。'
      ]}
    ],
    think_tank_view:'篩檢不是因為「做錯了什麼」，而是對自己和伴侶負責。如果覺得去醫院有壓力，可以先從自我篩檢開始。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，語氣親切且避免污名化，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以讀者的疑問帶出頻率、管道與觀念。', tone:'生活親切', tone_reason:'降低篩檢的心理門檻。', to_verify:[]},
    decision_points:[DP_COUNT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'HIV篩檢：頻率、管道、72小時PEP',
    update_date:'2026/11/20',
    intro:'2025年本國籍新增愛滋病毒感染879人，創2004年以來新低，但仍有約7%感染者不知情。',
    sections:[
      {heading:'篩檢頻率',format:'table',table:TABLE},
      {heading:'資源',format:'bullets',items:[
        'Line@疾管家「性健康友善資源地圖」查匿名與自我篩檢。',
        '全程正確使用保險套。'
      ]}
    ],
    think_tank_view:'定期篩檢加上全程使用保險套，是最簡單的自我保護。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為頻率與資源兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_COUNT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'愛滋病與 HIV 篩檢', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'2025 年本國籍新增 879 人創新低', primary_visual:'879 人', secondary_message:'仍有約 7% 感染者不知情', action_priority:'定期篩檢、全程戴套'},
    headline_hook:'愛滋新增創新低', headline_main:'篩檢補上最後 7% 缺口', title_accent:'最後 7%',
    primary_stat:{kicker:'2025 年・本國籍', value:'879 人', label:'新增愛滋病毒感染', note:'疾管署｜2004 年以來新低'},
    chart:{type:'bar', title:'本國籍新增 HIV 感染（人）', points:[
      {label:'2021', value:1244, display:'1,244'},
      {label:'2023', value:939, display:'939'},
      {label:'2024', value:1000, display:'1,000'},
      {label:'2025', value:879, display:'879', highlight:true}
    ], note:'疾管署｜依診斷年份'},
    secondary_stats:[
      {value:'約 7%', label:'感染者尚不知已感染'},
      {value:'72 小時', label:'PEP 須在此時間內就醫'}
    ],
    action_title:'這樣保護自己',
    action_cards:[
      {key:'篩', text:'有性行為者一生至少篩 1 次'},
      {key:'定', text:'有風險行為每 3–6 個月篩 1 次'},
      {key:'套', text:'全程正確使用保險套與水性潤滑液'},
      {key:'急', text:'不安全性行為 72 小時內就醫評估'}
    ],
    carousel_suggestion:{reason:'若想把趨勢、篩檢頻率與管道分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'愛滋新增創新低', headline_main:'2025 年本國籍 879 人'},
      {layout_type:'knowledge', headline_hook:'多久篩一次？', headline_main:'依風險選擇篩檢頻率'},
      {layout_type:'action', headline_hook:'匿名、自我篩檢', headline_main:'疾管家資源地圖'}]},
    hashtags:['愛滋','HIV篩檢','匿名篩檢','性健康'],
    sources:['衛生福利部疾病管制署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'HIV自我篩檢', audience:'年輕成人', scene:'一位年輕人在家中書桌前，安心地看著手機上的篩檢資源地圖，旁邊放著篩檢試劑盒',
      emotion:'自在、有掌控感', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young adult at a home desk calmly looking at a screening resource map on a phone, a self-test kit box beside them, private and in control, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['2025年879人、2024年1,000例（疾管署新聞稿）','2021、2023年取自疾管署開放資料本國籍口徑'],
      layout_reason:'關鍵訊息是「創新低但仍有缺口」，選 data：新增人數當主角，近年趨勢放右側，未知感染比例退到第二層，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'去污名化、強調篩檢可近性。',
      to_verify:['約7%為依93-96-95預估值換算']},
    decision_points:[Object.assign({}, DP_COUNT, {current:'879 人｜2025 年本國籍新增'})],
    content_check_note:'新增人數引自疾管署並標明年份與口徑，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'愛滋病與 HIV 篩檢',
    collect:{
      summary:'本國籍新增愛滋病毒感染人數2025年降至879人、創2004年以來新低，但仍有約7%感染者不知道自己已感染；疾管署推動匿名篩檢、自我篩檢與性健康友善資源地圖，「定期篩檢、全程戴套、72小時PEP」是值得長期溝通的性健康議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'879人：疾管署公布2025年新增確診通報本國籍愛滋病毒感染人數為879人，創2004年以來新低。',tag:'官方統計',source:{name:'衛生福利部：新春巧遇情人節，籲請民眾落實安全防護及主動篩檢',url:'https://mohw.gov.tw/cp-16-85413-1.html'}},
        {item:'年度趨勢方向',desc:'下降12%：2025年全國新增愛滋病毒感染879例，較2024年的1,000例下降12%，同期淋病也下降16%，但梅毒新增9,935例、略升2%。',tag:'官方統計',source:{name:'衛生福利部：疾管署呼籲年輕族群善用「性健康友善資源地圖」',url:'https://mohw.gov.tw/cp-16-85742-1.html'}},
        {item:'政策動向',desc:'約7%感染者尚未知情：疾管署預估2025年可達UNAIDS「93-96-95」，即93%感染者知道自己感染，並建議有性行為者至少篩檢1次、有風險行為者每3至6個月篩檢1次。',tag:'官方統計',source:{name:'衛生福利部：新春巧遇情人節，籲請民眾落實安全防護及主動篩檢',url:'https://mohw.gov.tw/cp-16-85413-1.html'}},
        {item:'好發族群年齡層',desc:'約5成7為25至39歲：依疾管署開放資料，2025年HIV感染通報1,027例（含非本國籍）中，25至39歲共581例，為主要年齡層。',tag:'官方統計',source:{name:'衛生福利部疾病管制署：傳染病統計資料查詢系統（HIV感染）',url:'https://nidss.cdc.gov.tw/nndss/disease?id=044'}}
      ],
      product_view:['機會：可從整體性健康與定期篩檢的角度，提供年輕族群健康管理衛教。','風險：愛滋議題高度敏感，避免任何暗示核保歧視或污名化的表述，依法令與保單條款如實說明。','風險：不可將篩檢結果與保險商品連結做行銷。'],
      marketing_view:['機會：12月1日世界愛滋日與2月情人節是固定溝通時點。','機會：「匿名、在家就能做」能降低年輕族群的篩檢門檻。','風險：避免點名特定族群，以「有性行為者」為溝通對象。'],
      alert_level:'low',
      alert_reason:'新增人數持續下降，屬長期性健康議題，適合在世界愛滋日前後納入年度溝通規劃。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('可讓病毒量受到抑制','MEDICAL_INTERPRETATION','claim_without_source',
          '「確診後及早治療可讓病毒量受到抑制」沒有附出處，也沒有說明疾管署93-96-95中「95%接受治療者病毒量成功抑制」的對應數字，讀者無法判斷有多少人能達到。','low','no',
          null,'no','clarify','可直接引用93-96-95的第三個95。',
          '可讓病毒量受到抑制（疾管署預估2025年接受治療者約95%達到病毒抑制）'),
        F('大約每100位感染者中，還有7位不知道自己已經感染','SOURCE_EVIDENCE','derived_figure',
          '「每100位有7位」是由疾管署預估的93%換算，生活親切版沒有說明這是預估值，讀者可能以為是實際調查結果。','low','no',
          null,'no','clarify','補上「疾管署預估」即可。',
          '依疾管署預估，大約每100位感染者中，還有7位不知道自己已經感染'),
        F('結果只有自己知道','COMPLIANCE_RISK','absolute_claim',
          '自我篩檢若結果為陽性，仍需至醫療院所確認並依法通報；「結果只有自己知道」可能讓讀者誤以為陽性後也不必就醫。','medium','no',
          null,'no','clarify','補上陽性後的下一步。',
          '結果先由自己判讀，若為陽性要到醫院進一步確認'),
        F('仍有約7%感染者不知情','SOURCE_EVIDENCE','estimate_unlabeled',
          '簡潔有力版沒有標示「約7%」來自疾管署對2025年的預估（93-96-95），讀者可能以為是已確定的統計。','low','no',
          null,'no','clarify','補上預估字樣。',
          '依疾管署預估，仍有約7%感染者不知情')
      ],
      card:[
        F('感染者尚不知已感染','SOURCE_EVIDENCE','estimate_unlabeled',
          '「約 7%」是依疾管署預估的93%換算，卡面沒有標示「預估」。','low','no',
          null,'no','clarify','屬推估標示問題。',
          '感染者尚不知已感染（疾管署預估）'),
        F('疾管署｜依診斷年份','SOURCE_EVIDENCE','mixed_source',
          '直條圖2025、2024年取自新聞稿，2021、2023年取自開放資料的本國籍口徑，註腳沒有說明是兩種來源。','low','no',
          null,'no','clarify','數字口徑一致，屬來源標示。',
          '疾管署新聞稿與開放資料｜本國籍、依診斷年份')
      ]
    },
    title_alts:[
      'HIV篩檢怎麼做？2025年新增879例創新低，仍有約7%感染者不知情',
      '做HIV篩檢不用怕：匿名、自我篩檢都可以，保護自己也保護另一半',
      '愛滋防治最後一哩路：篩檢頻率、管道與72小時PEP'
    ],
    card_title_alts:[
      ['愛滋新增創新低','篩檢補上最後 7% 缺口'],
      ['匿名、自我篩檢','HIV 篩檢一點都不難'],
      ['不安全性行為後','72 小時內就醫評估']
    ],
    data_addon:[
      '本國籍新增HIV感染：2021年1,244例、2023年939例、2024年1,000例、2025年879例（疾管署）。',
      '疾管署預估2025年可達「93-96-95」。',
      'PEP須於72小時內就醫評估，連續服藥28天。'
    ],
    cta:'加入Line@疾管家，打開「性健康友善資源地圖」，找一個你覺得自在的篩檢方式。'
  });
})();
