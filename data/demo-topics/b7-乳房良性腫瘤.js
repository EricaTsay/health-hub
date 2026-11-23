/* v6 示範主題：乳房良性腫瘤（B7 女性・男性・生育與兒童）
   查證日期：2026-11-20。篩檢政策來源：國健署（乳癌篩檢擴大至40-74歲、粉紅十月新聞稿）。
   良性比例與類型占比：查無官方統計，為醫師經TVBS健康2.0引述（2024-12、2026-03、2026-08，二手），已埋預審。
   參考方向：健康智庫〈女性腫瘤與癌症－乳房良性腫瘤〉2026/03。 */
(function(){
  const REFS = [
    {title:'乳癌篩檢年齡擴大至40-74歲婦女',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18916'},
    {title:'粉紅十月！乳癌篩檢突破百萬人次 40開始乳攝篩檢護健康',source:'衛生福利部國民健康署',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19433'},
    {title:'摸到乳房腫塊先別慌！醫：有硬塊不等於得乳癌 但出現6警訊先就醫',source:'TVBS健康2.0',url:'https://health.tvbs.com.tw/nutrition/361956'},
    {title:'乳房脹痛喝咖啡害的？纖維囊腫怎麼辦？（光田醫院乳房外科）',source:'TVBS健康2.0',url:'https://health.tvbs.com.tw/nutrition/351636'},
    {title:'別被「良性」假象蒙蔽！纖維囊腫竟藏原位癌',source:'TVBS健康2.0',url:'https://health.tvbs.com.tw/cancer/365031'}
  ];
  const TABLE = {headers:['就醫警訊','說明'], rows:[
    ['腫塊硬、邊緣不規則','幾乎推不動'],
    ['短時間明顯變大','幾週到幾個月內長大'],
    ['乳頭血色或不明分泌物','非哺乳期出現'],
    ['皮膚凹陷、變厚像橘皮','乳房外觀改變'],
    ['乳頭突然內縮','原本沒有內縮'],
    ['腋下淋巴結腫大','腋下摸到硬塊']
  ]};
  const TAGS = ['乳房良性腫瘤','纖維腺瘤','纖維囊腫','乳房攝影','女性健康'];

  const DP_RATIO = {id:'dp-benign-ratio', type:'data_source', title:'「8成良性」沒有官方統計',
    desc:'「八成乳房腫塊屬於良性」是婦產科醫師受訪說法，其他報導也有「超過9成良性」的說法，國健署沒有公布乳房腫塊良惡性比例。AI 沒有替你選擇較高或較低的數字。',
    current:'八成乳房腫塊屬於良性（婦產科醫師，2026年媒體引述）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'約 8 成', value:'醫師受訪說法', note:'TVBS健康2.0，2026-03（目前採用）'},
      {label:'未公布', value:'官方統計', note:'國健署無乳房腫塊良惡性比例統計'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'摸到乳房腫塊怎麼辦？多數是良性，但6種警訊要就醫',
    update_date:'2026/11/20',
    intro:'摸到乳房腫塊不一定是乳癌。婦產科醫師2026年受訪指出，八成的乳房腫塊屬於良性；光田醫院乳房外科醫師說明，纖維腺瘤約占乳房良性腫瘤的50%至70%，多見於20至40歲女性。不過，良性外觀下也可能合併原位癌，不能只憑觸摸判斷。國健署自2025年起提供40至74歲婦女每2年1次免費乳房X光攝影，是及早區分良惡性的重要工具。',
    sections:[
      {heading:'出現這6種警訊，請盡快就醫',format:'table',table:TABLE},
      {heading:'常見的良性類型',format:'bullets',items:[
        '纖維腺瘤：約占乳房良性腫瘤50%至70%，多見於20至40歲，質地較硬、可移動，通常不痛。',
        '乳腺囊腫：約占20%至25%，常見於30至50歲，與月經週期相關。',
        '多數良性腫瘤不需要過度治療，但應依醫師建議定期追蹤影像變化。'
      ]},
      {heading:'檢查與篩檢',format:'bullets',items:[
        '40至74歲婦女每2年1次免費乳房X光攝影，持健保卡至認證機構受檢。',
        '篩檢結果為0、4、5類時應盡速回診進一步檢查。',
        '影像有可疑病灶時，醫師可能安排穿刺切片確認，不宜只憑觸摸或單一影像判斷。'
      ]}
    ],
    think_tank_view:'摸到腫塊時最常見的兩種反應，一是嚇壞了不敢面對，二是覺得「應該是良性」就不管它。正確的做法是交給影像檢查判斷：多數人會得到安心的答案，少數需要進一步處理的，也能在早期發現。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'篩檢政策引自國健署，良性比例與類型占比標明為醫師受訪說法，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['40-74歲每2年乳攝（國健署）','八成良性、纖維腺瘤50-70%為醫師經媒體引述'],
      layout_reason:'先用表格列出就醫警訊，再說明良性類型，最後給篩檢資訊。',
      tone:'專業易懂', tone_reason:'降低恐慌、引導就醫。',
      to_verify:['良性比例與類型占比無官方統計']},
    decision_points:[DP_RATIO]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'洗澡時摸到乳房硬塊？先別慌，這6個警訊才要特別注意',
    update_date:'2026/11/20',
    intro:'洗澡時突然摸到乳房有一顆硬硬的東西，很多人第一個念頭就是「是不是乳癌」。醫師受訪說，大約8成的乳房腫塊是良性的，像年輕女生常見的纖維腺瘤。但要分辨良性或惡性，還是要靠檢查。40到74歲的女性，每2年可以免費做1次乳房X光攝影。',
    sections:[
      {heading:'這6種狀況，要快點去看醫生',format:'table',table:TABLE},
      {heading:'常見的良性腫塊',format:'bullets',items:[
        '纖維腺瘤：20到40歲最常見，摸起來硬硬的、會滑動、不太痛。',
        '乳腺囊腫：30到50歲常見，和月經週期有關。',
        '良性的通常不用急著開刀，照醫生建議定期追蹤。'
      ]},
      {heading:'檢查怎麼做？',format:'bullets',items:[
        '40到74歲帶健保卡，每2年做1次免費乳房X光攝影。',
        '報告寫0、4、5類，要盡快回診。'
      ]}
    ],
    think_tank_view:'摸到硬塊先深呼吸，然後預約檢查。讓專業影像幫妳判斷，比自己上網查到半夜更安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'篩檢政策引自國健署，比例標明為醫師說法，語氣親切但鼓勵就醫，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以洗澡摸到硬塊的情境帶出警訊與檢查。', tone:'生活親切', tone_reason:'降低焦慮。', to_verify:[]},
    decision_points:[DP_RATIO]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'乳房腫塊：6警訊就醫＋定期乳攝',
    update_date:'2026/11/20',
    intro:'多數乳房腫塊為良性，但6種警訊要就醫。40至74歲每2年1次免費乳房X光攝影。',
    sections:[
      {heading:'6警訊',format:'table',table:TABLE},
      {heading:'重點',format:'bullets',items:[
        '良性腫瘤定期追蹤。',
        '篩檢結果0、4、5類盡速回診。'
      ]}
    ],
    think_tank_view:'交給影像判斷，別只靠手摸。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'篩檢政策引自國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為警訊與重點兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_RATIO]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'乳房良性腫瘤', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'多數乳房腫塊是良性，但要靠檢查判斷', primary_visual:'約 8 成', secondary_message:'出現警訊盡快就醫', action_priority:'定期乳攝、警訊就醫'},
    headline_hook:'摸到乳房硬塊？', headline_main:'先別慌，這些警訊要就醫', title_accent:'警訊要就醫',
    hero_message:'約 8 成腫塊是良性', hero_support:'婦產科醫師受訪說法（2026 年）',
    knowledge_title:'就醫警訊', knowledge_note:'出現警訊**盡快就醫**',
    knowledge_cards:[
      {label:'硬、不規則', icon:'search', lines:['推不太動','短期明顯變大']},
      {label:'乳頭異常', icon:'check', lines:['血色分泌物','突然內縮']},
      {label:'皮膚改變', icon:'shield', lines:['凹陷、變厚','像橘皮']},
      {label:'腋下腫塊', icon:'people', lines:['淋巴結腫大']}
    ],
    primary_stat:{value:'50–70%', label:'良性腫瘤中為纖維腺瘤', note:'光田醫院乳房外科醫師（媒體引述）'},
    secondary_stats:[
      {value:'每 2 年', label:'40–74 歲免費乳攝'},
      {value:'0、4、5 類', label:'結果需盡速回診'}
    ],
    action_title:'女性這樣做',
    action_cards:[
      {key:'篩', text:'40–74 歲每 2 年免費乳房攝影'},
      {key:'看', text:'出現警訊盡快就醫做影像檢查'},
      {key:'回', text:'結果 0、4、5 類盡速回診'},
      {key:'追', text:'良性腫瘤依醫囑定期追蹤'}
    ],
    carousel_suggestion:{reason:'若想把警訊、良性類型與篩檢分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'摸到乳房硬塊？', headline_main:'6 種警訊要就醫'},
      {layout_type:'knowledge', headline_hook:'常見良性類型', headline_main:'纖維腺瘤與囊腫'},
      {layout_type:'action', headline_hook:'40–74 歲', headline_main:'每 2 年免費乳攝'}]},
    hashtags:['乳房良性腫瘤','纖維腺瘤','乳房攝影','女性健康'],
    sources:['衛生福利部國民健康署','光田醫院（媒體引述）'],
    illustration_category:'screening-checkup',
    illustration:{topic:'乳房檢查', audience:'20 至 74 歲女性', scene:'一位女性在乳房門診和醫師一起看超音波影像，表情放鬆',
      emotion:'安心、放下擔憂', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A woman at a breast clinic looking at an ultrasound image with a doctor, relaxed and relieved, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['篩檢政策引自國健署','良性比例與類型占比為醫師經媒體引述'],
      layout_reason:'核心是「多數良性但警訊要就醫」，選 knowledge：警訊放中段，良性類型比例退到下方，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'降低恐慌、鼓勵檢查。',
      to_verify:['比例為二手引述']},
    decision_points:[Object.assign({}, DP_RATIO, {current:'約 8 成腫塊是良性（醫師說法）'})],
    content_check_note:'篩檢引自國健署，比例標明醫師說法，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'乳房良性腫瘤',
    collect:{
      summary:'乳房腫塊多數為良性，但良性外觀下仍可能合併原位癌，需靠影像檢查判斷；國健署自2025年起將免費乳房X光攝影擴大至40至74歲婦女，「警訊就醫、定期乳攝、良性定期追蹤」是女性健康值得長期溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'約8成乳房腫塊屬良性：婦產科醫師2026年受訪指出，摸到乳房腫塊不等於乳癌，但出現腫塊硬且不規則、短期變大、乳頭分泌物等6種警訊應就醫（媒體引述，非官方統計）。',tag:'市場觀察',source:{name:'TVBS健康2.0：摸到乳房腫塊先別慌！但出現6警訊先就醫',url:'https://health.tvbs.com.tw/nutrition/361956'}},
        {item:'年度趨勢方向',desc:'乳癌篩檢較去年同期增加33.57%：國健署2025年起將免費乳房X光攝影由45-69歲擴大至40-74歲，篩檢人數首度突破100萬人，乳房影像檢查的可近性提高。',tag:'官方統計',source:{name:'衛生福利部國民健康署：粉紅十月！乳癌篩檢突破百萬人次',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=19433'}},
        {item:'政策動向',desc:'每2年1次免費乳攝：國健署提供40至74歲婦女每2年1次乳房X光攝影，持健保卡至認證機構受檢，結果為0、4、5類應盡速回診。',tag:'官方統計',source:{name:'衛生福利部國民健康署：乳癌篩檢年齡擴大至40-74歲婦女',url:'https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=4878&pid=18916'}},
        {item:'好發族群年齡層',desc:'纖維腺瘤占良性腫瘤50%至70%：光田醫院乳房外科醫師說明纖維腺瘤多見於20至40歲女性，乳腺囊腫約占20%至25%、常見於30至50歲（媒體引述）。',tag:'市場觀察',source:{name:'TVBS健康2.0：纖維囊腫怎麼辦？醫教9招維護乳房健康',url:'https://health.tvbs.com.tw/nutrition/351636'}}
      ],
      product_view:['機會：女性乳房檢查與篩檢提醒，可結合女性健康服務。','機會：乳房腫瘤切片、手術與住院醫療保障的條款說明，回應女性實際需求。','風險：良性腫瘤是否影響保障須依核保與保單條款如實說明，避免不當暗示。'],
      marketing_view:['機會：10月粉紅十月是固定溝通時點。','機會：「摸到硬塊先別慌」能降低焦慮、引導檢查。','風險：避免以乳癌恐懼訴求包裝良性腫瘤議題。'],
      alert_level:'low',
      alert_reason:'屬長期女性健康議題，適合配合粉紅十月與乳癌篩檢政策溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('八成的乳房腫塊屬於良性','SOURCE_EVIDENCE','secondary_citation',
          '文中已註明是婦產科醫師受訪說法，但沒有統計出處，其他報導也有「超過9成」的說法，國健署未公布此類比例。','medium','yes',
          '乳房腫塊良惡性比例的研究或官方統計。','no','confirm','屬二手引述。',
          '八成的乳房腫塊屬於良性（醫師受訪說法，無官方統計）'),
        F('多數良性腫瘤不需要過度治療','MEDICAL_INTERPRETATION','oversimplified',
          '專業易懂版雖補充要定期追蹤，但沒有提醒部分良性腫瘤（如葉狀腫瘤）或影像難以判別時仍可能需要切片或手術。','low','no',
          null,'no','clarify','補充例外情形即可。',
          '多數良性腫瘤不需要過度治療，但影像難以判別時醫師可能建議切片'),
        F('大約8成的乳房腫塊是良性的','SOURCE_EVIDENCE','secondary_citation',
          '生活親切版只寫「醫師受訪說」，沒有年份，也沒說明不是官方統計。','low','no',
          null,'no','clarify','補上年份即可。',
          '醫師2026年受訪說，大約8成的乳房腫塊是良性的（非官方統計）'),
        F('多數乳房腫塊為良性','SOURCE_EVIDENCE','source_unstated',
          '簡潔有力版沒有任何出處，讀者無法判斷這個說法的依據。','low','no',
          null,'no','clarify','補上出處即可。',
          '醫師指出多數乳房腫塊為良性')
      ],
      card:[
        F('婦產科醫師受訪說法（2026 年）','SOURCE_EVIDENCE','secondary_citation',
          'hero 數字「約 8 成」放在卡面最顯眼的位置，但只是單一醫師說法，容易被當成官方統計分享。','medium','no',
          null,'no','clarify','屬出處層級問題。',
          '單一醫師受訪說法（2026 年，非官方統計）'),
        F('良性腫瘤中為纖維腺瘤','SOURCE_EVIDENCE','secondary_citation',
          '「50–70%」為醫師經媒體引述，未說明原始研究，卡面註腳雖有標示但主數字標籤沒有。','low','no',
          null,'no','clarify','標籤補出處即可。',
          '良性腫瘤中為纖維腺瘤（醫師說法）')
      ]
    },
    title_alts:[
      '摸到乳房腫塊怎麼辦？多數是良性，但6種警訊要就醫',
      '洗澡時摸到乳房硬塊？先別慌，這6個警訊才要特別注意',
      '乳房良性腫瘤有哪些？纖維腺瘤、囊腫與定期乳攝'
    ],
    card_title_alts:[
      ['摸到乳房硬塊？','先別慌，這些警訊要就醫'],
      ['多數是良性','但要靠檢查判斷'],
      ['40–74 歲','每 2 年免費乳攝']
    ],
    data_addon:[
      '國健署：2025年起40-74歲婦女每2年1次免費乳房X光攝影。',
      '光田醫院乳房外科醫師（媒體引述）：纖維腺瘤約占良性腫瘤50%-70%，乳腺囊腫約20%-25%。',
      '良性外觀下仍可能合併原位癌，需影像與必要時切片確認。'
    ],
    cta:'摸到硬塊就預約影像檢查；40歲以上的妳，確認一下上次乳攝是什麼時候。'
  });
})();
