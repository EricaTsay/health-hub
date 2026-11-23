/* v6 示範主題：創傷後壓力症候群（B5 心理健康與精神疾患）
   查證日期：2026-11-20。數據來源：WHO〈Post-traumatic stress disorder〉fact sheet（2026-09-11）、
   中國醫藥大學附設醫院精神醫學部衛教單張（2026-04-08）、衛福部 115-01-08 青壯世代心理健康支持方案新聞稿。
   查無國內官方PTSD盛行率統計。撰寫原則：不描述創傷事件細節與自傷細節，附求助專線。
   參考方向：健康智庫〈創傷後壓力症候群是什麼？〉2024/01。 */
(function(){
  const WHO = 'https://www.who.int/news-room/fact-sheets/detail/post-traumatic-stress-disorder';
  const CMU = 'https://www.cmuh.cmu.edu.tw/HealthEdus/Detail?no=7393';
  const REFS = [
    {title:'Post-traumatic stress disorder',source:'World Health Organization',url:WHO},
    {title:'Posttraumatic Stress Disorder 創傷後壓力症候群（衛教單張）',source:'中國醫藥大學附設醫院',url:CMU},
    {title:'健康「心」生活！115年續推青壯世代心理健康支持方案',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-16-85046-1.html'},
    {title:'安心專線改4碼更好記! 1925依舊愛我 持續服務你和我',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-48244-1.html'}
  ];
  const TABLE = {headers:['症狀類型','可能的表現'], rows:[
    ['重新經歷','創傷畫面反覆闖入腦中，或做相關的惡夢'],
    ['迴避','刻意避開會想起事件的人、地方或話題'],
    ['情緒與想法改變','麻木、自責、對原本喜歡的活動失去興趣'],
    ['過度警覺','容易受驚嚇、緊繃、失眠、難以專心']
  ]};
  const TAGS = ['創傷後壓力症候群','PTSD','心理創傷','心理諮商','1925安心專線'];

  const DP_RATE = {id:'dp-ptsd-rate', type:'data_scope', title:'「3.9%」是全球終生盛行率',
    desc:'WHO 的3.9%是全球人口一生中曾發生PTSD的比例，並非台灣數據；國內查無官方PTSD盛行率統計。AI 沒有替你決定是否要在內容中使用國際數字。',
    current:'全球約3.9%一生中曾有PTSD（WHO 2026）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'3.9%', value:'全球終生盛行率', note:'WHO fact sheet 2026（目前採用）'},
      {label:'5.6%', value:'經歷創傷者中發展為PTSD的比例', note:'同一份WHO資料'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'創傷後壓力症候群：經歷重大事件後走不出來，可以求助',
    update_date:'2026/11/20',
    intro:'經歷重大事故、災害、暴力或親人驟逝等事件後，出現害怕、失眠、反覆想起是常見的壓力反應；若症狀持續且影響生活，可能是創傷後壓力症候群（PTSD）。世界衛生組織（WHO）2026年資料指出，全球約70%的人一生中會經歷可能造成創傷的事件，其中約5.6%會發展為PTSD；全球約3.9%的人一生中曾有PTSD。WHO並指出，最多約40%的患者在一年內康復。',
    sections:[
      {heading:'PTSD的4類常見症狀',format:'table',table:TABLE},
      {heading:'治療方式',format:'bullets',items:[
        'WHO指出，以實證為基礎的心理介入是第一線治療，其中證據最多的是「創傷焦點認知行為治療」與「眼動減敏與歷程更新（EMDR）」。',
        '醫院衛教資料指出，許多PTSD患者經治療可以改善，可依醫師評估使用藥物、心理治療或兩者並用。',
        '15至45歲民眾可使用衛福部3次免費心理諮商，作為初步評估與轉介的起點。'
      ]},
      {heading:'身邊的人可以這樣支持',format:'bullets',items:[
        '尊重對方的步調，不追問事件細節，也不急著要他「放下」。',
        '協助恢復日常作息，陪伴就醫或預約諮商。',
        '若對方出現強烈的無望感或傷害自己的念頭，請立即協助聯繫1925安心專線或醫療單位。'
      ]}
    ],
    think_tank_view:'創傷後的反應不是軟弱，而是大腦在保護自己。多數人會隨時間慢慢恢復；若幾個月過去仍被回憶困住、無法正常生活，代表需要專業協助。及早接受有實證的心理治療，就有機會重新找回日常。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'統計引自WHO 2026年資料並標明為全球數據，治療建議引自WHO與醫院衛教，未描述創傷與自傷細節，附求助專線，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['WHO 2026：約70%一生經歷創傷事件、5.6%發展為PTSD、3.9%終生盛行率','WHO：創傷焦點CBT與EMDR證據最多'],
      layout_reason:'先用表格整理4類症狀，再說明有實證的治療方式，最後給身邊的人支持原則。',
      tone:'專業易懂', tone_reason:'創傷議題需謹慎、不描述細節、強調希望與資源。',
      to_verify:['查無國內PTSD盛行率官方統計']},
    decision_points:[DP_RATE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'經歷重大事件後一直走不出來？認識創傷後壓力症候群',
    update_date:'2026/11/20',
    intro:'經歷車禍、災難或重大打擊後，會害怕、睡不好、一直想起來，都是正常的反應。但如果過了好一陣子還是走不出來、影響到生活，可能是創傷後壓力症候群。世界衛生組織說，大約7成的人一生中會遇到可能造成創傷的事，其中只有少數（約5.6%）會發展成這個疾病，而且是可以治療的。',
    sections:[
      {heading:'這4類變化，要多留意',format:'table',table:TABLE},
      {heading:'可以怎麼治療？',format:'bullets',items:[
        '世界衛生組織說，最有效的是針對創傷的心理治療，例如創傷焦點認知行為治療和EMDR。',
        '醫師也可能依狀況搭配藥物。',
        '15到45歲有3次免費心理諮商，可以先從這裡開始。'
      ]},
      {heading:'身為家人朋友，可以這樣陪',format:'bullets',items:[
        '不要一直追問發生了什麼，也別催他「趕快忘掉」。',
        '陪他恢復日常作息，一起去看醫生或預約諮商。',
        '如果他說不想活了，請馬上幫忙聯絡1925安心專線或醫院。'
      ]}
    ],
    think_tank_view:'走不出來不是你不夠堅強。給自己一點時間，也給自己一個求助的機會；專業的陪伴，能幫你慢慢把生活找回來。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字引自WHO並標明為全球數據，語氣溫和，未描述創傷與自傷細節，附求助專線，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以生活中的壓力反應帶出症狀、治療與陪伴。', tone:'生活親切', tone_reason:'降低汙名、鼓勵求助。', to_verify:[]},
    decision_points:[DP_RATE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'PTSD：4類症狀＋有實證的治療',
    update_date:'2026/11/20',
    intro:'WHO 2026年資料：全球約70%的人一生經歷創傷事件，約5.6%發展為PTSD，最多約40%在一年內康復。',
    sections:[
      {heading:'4類症狀',format:'table',table:TABLE},
      {heading:'治療',format:'bullets',items:[
        '創傷焦點認知行為治療、EMDR。',
        '依醫師評估搭配藥物。'
      ]},
      {heading:'支持原則',format:'bullets',items:[
        '不追問細節，陪伴就醫。',
        '危急時聯繫1925。'
      ]}
    ],
    think_tank_view:'PTSD可以治療；持續影響生活時，尋求有實證的心理治療。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數字引自WHO並標明為全球數據，附求助專線，未使用療效保證用語。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為症狀、治療、支持三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[DP_RATE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'創傷後壓力症候群', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'經歷創傷後走不出來，可以求助', primary_visual:'約 70%', secondary_message:'只有少數（5.6%）發展為 PTSD', action_priority:'辨識症狀、接受實證治療'},
    headline_hook:'走不出來不是軟弱', headline_main:'認識創傷後壓力症候群', title_accent:'創傷後壓力症候群',
    primary_stat:{kicker:'WHO 2026・全球', value:'約 70%', label:'一生中會經歷可能造成創傷的事件', note:'世界衛生組織 fact sheet'},
    secondary_stats:[
      {value:'5.6%', label:'其中發展為 PTSD'},
      {value:'最多 40%', label:'患者一年內康復'},
      {value:'3.9%', label:'全球終生盛行率'}
    ],
    knowledge_title:'4 類症狀',
    knowledge_cards:[
      {label:'重新經歷', lines:['畫面反覆闖入、惡夢']},
      {label:'迴避', lines:['避開相關人事物']},
      {label:'情緒改變', lines:['麻木、自責、失去興趣']},
      {label:'過度警覺', lines:['易受驚、失眠']}
    ],
    action_title:'這樣求助',
    action_cards:[
      {key:'認', text:'症狀持續影響生活，正視它'},
      {key:'療', text:'創傷焦點認知行為治療、EMDR'},
      {key:'約', text:'15–45 歲可用 3 次免費心理諮商'},
      {key:'援', text:'需要傾訴，撥 1925 安心專線'}
    ],
    carousel_suggestion:{reason:'若想把症狀、治療與陪伴分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'WHO 2026', headline_main:'多數人經歷創傷不會發病'},
      {layout_type:'knowledge', headline_hook:'走不出來？', headline_main:'PTSD 4 類症狀'},
      {layout_type:'action', headline_hook:'身邊的人', headline_main:'陪伴創傷者 3 原則'}]},
    hashtags:['創傷後壓力症候群','PTSD','心理健康','1925安心專線'],
    sources:['World Health Organization','中國醫藥大學附設醫院'],
    illustration_category:'mental-wellbeing',
    illustration:{topic:'創傷後支持', audience:'經歷重大事件的人與家屬', scene:'一位成年人在溫暖的室內抱著抱枕坐著，旁邊的朋友安靜陪伴，窗外天色漸亮',
      emotion:'安全、慢慢恢復', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult sitting indoors hugging a cushion while a friend quietly sits beside them, the sky outside the window gradually brightening, safe and recovering mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['WHO 2026：約70%經歷創傷事件、5.6%發展為PTSD'],
      layout_reason:'選 data：用「多數人經歷創傷不會發病」的數據降低恐懼，下方左列症狀、右列求助行動。',
      tone:'專業易懂', tone_reason:'不描述創傷細節，強調希望。',
      to_verify:['國內盛行率查無官方統計']},
    decision_points:[Object.assign({}, DP_RATE, {current:'約 70%｜全球一生經歷創傷事件（WHO 2026）'})],
    content_check_note:'數字引自WHO並標明為全球數據，附求助專線，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'創傷後壓力症候群',
    collect:{
      summary:'多數人一生都可能經歷創傷事件，其中少數會發展為PTSD；WHO 2026年資料強調以實證心理治療為第一線，國內免費心理諮商方案提供初步評估管道，「辨識、求助、陪伴」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約3.9%一生中曾有PTSD：WHO 2026年資料指出全球約3.9%人口一生中曾發生創傷後壓力症候群（國內查無官方盛行率統計）。',tag:'官方統計',source:{name:'World Health Organization：Post-traumatic stress disorder（2026）',url:WHO}},
        {item:'年度趨勢方向',desc:'約70%的人一生經歷創傷事件：WHO指出其中約5.6%會發展為PTSD，最多約40%的患者在一年內康復。',tag:'官方統計',source:{name:'World Health Organization：Post-traumatic stress disorder（2026）',url:WHO}},
        {item:'政策動向',desc:'逾8萬人使用免費心理諮商：衛福部青壯世代心理健康支持方案提供15至45歲每人3次免費心理諮商，115年持續推動。',tag:'官方統計',source:{name:'衛生福利部：115年續推青壯世代心理健康支持方案',url:'https://www.mohw.gov.tw/cp-16-85046-1.html'}},
        {item:'好發族群年齡層',desc:'經歷重大事故、災害、暴力或親人驟逝者：醫院衛教資料指出，症狀可能在事件數週後出現，也可能延遲發作，許多患者經治療可以改善。',tag:'市場觀察',source:{name:'中國醫藥大學附設醫院：創傷後壓力症候群衛教單張',url:CMU}}
      ],
      product_view:['機會：意外、災害理賠的接觸點，可同步提供心理支持資源與專線資訊。','機會：員工協助方案與創傷後關懷服務能展現陪伴型價值。','風險：不以創傷事件作為銷售情境；避免描述事件細節造成二度傷害。'],
      marketing_view:['機會：重大災害或公共事件後，提供「正常的壓力反應 vs 需要求助」的衛教是社會需要的內容。','機會：「走不出來不是軟弱」能降低求助門檻。','風險：避免在事件發生當下以品牌行銷角度切入；不描述細節、附求助管道。'],
      alert_level:'low',
      alert_reason:'屬長期心理健康議題；重大災害或公共事件後有即時溝通需求，平時可在心理健康月溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('全球約3.9%的人一生中曾有PTSD','DATA_FACTUAL_ACCURACY','international_data_as_local',
          '文中已標示為全球數據，但沒有提醒讀者國內查無官方統計，讀者可能直接套用到台灣。','low','no',
          null,'no','clarify','屬適用範圍說明。',
          '全球約3.9%的人一生中曾有PTSD（國內尚無官方統計）'),
        F('若症狀持續且影響生活','TERMINOLOGY_LANGUAGE','vague_term',
          '「持續」沒有說明多久；臨床上常以症狀持續超過1個月作為診斷參考。','low','no',
          null,'no','clarify','可補參考時間。',
          '若症狀持續超過1個月且影響生活',
          ['過了好一陣子還是走不出來']),
        F('最多約40%的患者在一年內康復','MEDICAL_INTERPRETATION','statistic_may_discourage',
          '單獨呈現「最多40%」，讀者可能解讀為「大部分人一年內好不了」而灰心；未說明治療可提升恢復機會。','low','no',
          null,'no','clarify','屬詮釋問題。',
          '最多約40%的患者在一年內康復，接受實證治療有助於恢復',
          ['最多約40%在一年內康復']),
        F('眼動減敏與歷程更新（EMDR）','TERMINOLOGY_LANGUAGE','term_unexplained',
          'EMDR 名稱難懂，未用一句話說明是什麼樣的治療。','low','no',
          null,'no','clarify','補白話說明。',
          '眼動減敏與歷程更新（EMDR，在治療師引導下處理創傷記憶的心理治療）',
          ['創傷焦點認知行為治療和EMDR','創傷焦點認知行為治療、EMDR'])
      ],
      card:[
        F('一生中會經歷可能造成創傷的事件','SOURCE_EVIDENCE','international_data_as_local',
          '主數字為全球數據，卡面「WHO 2026・全球」標示不夠醒目，轉傳後可能被當成台灣數據。','low','no',
          null,'no','clarify','屬標示問題。',
          '全球一生中會經歷可能造成創傷的事件'),
        F('創傷焦點認知行為治療、EMDR','TERMINOLOGY_LANGUAGE','term_unexplained',
          '卡面直接列治療名稱，一般讀者不知道去哪裡找、是否適合自己。','low','no',
          null,'no','clarify','可改為行動導向。',
          '找身心科或心理師評估合適的心理治療')
      ]
    },
    title_alts:[
      '創傷後壓力症候群：經歷重大事件後走不出來，可以求助',
      '經歷重大事件後一直走不出來？認識創傷後壓力症候群',
      'WHO：約7成人一生經歷創傷事件，PTSD的症狀與治療'
    ],
    card_title_alts:[
      ['走不出來不是軟弱','認識創傷後壓力症候群'],
      ['經歷重大事件後','PTSD 4 類症狀'],
      ['可以求助','創傷後的治療與陪伴']
    ],
    data_addon:[
      'WHO 2026：低中收入國家中，約每4名PTSD患者只有1人尋求任何形式的治療。',
      '醫院衛教：症狀可能在事件數週後出現，也可能延遲至6個月以後才出現。',
      '衛福部全台有75處社區心理衛生中心，可提供心理諮詢與轉介。'
    ],
    cta:'如果經歷重大事件已超過1個月，仍常做惡夢、刻意迴避或難以入睡，這個月就預約一次身心科或心理諮商；需要傾訴，撥1925。'
  });
})();
