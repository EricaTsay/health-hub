/* v6 示範主題：漸凍人症（ALS）（B3 高齡與神經退化）
   查證日期：2026-11-20。數據來源：健保署重大傷病申請須知（運動神經元疾病）、衛福部「健保擴大安寧療護收案對象」新聞（111年）、
   衛福部「健保居家照護呼吸器支付制度之說明」、中央社2020/11/24報導（全台患者約千人為推估）。
   註：國內漸凍人總病人數查無官方公布數字，僅以媒體轉述的推估值呈現並標「推估」。
   參考方向：健康智庫〈漸凍人症〉2023/03。 */
(function(){
  const REFS = [
    {title:'重大傷病專區：申請須知及文件下載',source:'衛生福利部中央健康保險署',url:'https://www.nhi.gov.tw/ch/cp-6091-08ad9-2957-1.html'},
    {title:'健保擴大安寧療護收案對象 落實生命善終',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-5266-67794-1.html'},
    {title:'健保居家照護呼吸器支付制度之說明',source:'衛生福利部',url:'https://www.mohw.gov.tw/cp-3161-26161-1.html'},
    {title:'幫漸凍人留下聲音 專屬合成系統找回說話溫度',source:'中央社',url:'https://www.cna.com.tw/news/ahel/202011240316.aspx'}
  ];
  const TABLE = {headers:['常見初期表現','可能情形'], rows:[
    ['手部無力','扣釦子、拿筷子、轉鑰匙變困難，手部肌肉萎縮'],
    ['腳步不穩','容易絆倒、抬腳無力，走路拖步'],
    ['說話吞嚥','口齒不清、喝水嗆咳、吞嚥變慢'],
    ['肌肉跳動','肌肉不自主抽動、抽筋，伴隨無力感']
  ]};
  const TAGS = ['漸凍人','ALS','運動神經元疾病','罕見疾病','安寧療護'];

  const DP_COUNT = {id:'dp-als-count', type:'data_scope', title:'病人數只有推估值',
    desc:'國內漸凍人總病人數查無官方公布統計；「約千人」來自中央社2020年報導引用的推估。健保重大傷病只涵蓋身心障礙中度以上或須使用呼吸器者，領證數也不等於總病人數。AI 只在文中以推估值呈現。',
    current:'全台患者約千人（推估，中央社2020年報導）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'改成不寫人數', action:'replace', from:'推估全台約有千名患者（中央社2020年報導）', to:'國內尚無官方公布的病人數'}]};

  const PRO = {
    content_type:'健康文章',
    title:'漸凍人症（ALS）：認識運動神經元疾病的初期徵兆與照護資源',
    update_date:'2026/11/20',
    intro:'漸凍人症又稱肌萎縮性側索硬化症（ALS），是運動神經元逐漸退化、造成全身肌肉無力與萎縮的疾病，患者意識與感覺通常仍清楚。推估全台約有千名患者（中央社2020年報導），屬少見但照護需求極高的疾病。目前雖無法根治，但透過早期診斷、呼吸與營養照護，以及健保重大傷病、居家呼吸器與安寧療護等資源，能幫助患者與家人維持生活品質。',
    sections:[
      {heading:'初期徵兆常從局部開始',format:'table',table:TABLE},
      {heading:'診斷與治療',format:'bullets',items:[
        '出現持續性肌肉無力或萎縮，應至神經內科就醫，醫師會以神經學檢查、肌電圖等排除其他疾病。',
        '藥物治療以延緩病程為目標，並搭配復健、營養與呼吸評估，由跨專業團隊共同照護。',
        '病程中期後常需評估呼吸器與餵食方式，宜及早與醫療團隊討論個人意願。'
      ]},
      {heading:'可以運用的照護資源',format:'bullets',items:[
        '健保重大傷病：運動神經元疾病之身心障礙等級在中度以上或須使用呼吸器者，可申請重大傷病證明。',
        '居家呼吸器：經評估確需使用非侵襲性呼吸器的ALS患者，可直接進入健保居家照護階段。',
        '安寧療護：漸凍人是健保安寧療護最早納入的收案對象之一，可接受住院、居家與共同照護服務。'
      ]}
    ],
    think_tank_view:'漸凍人症最困難的地方，是病程進展時每個階段都需要做決定：何時用呼吸器、是否插鼻胃管或胃造口、希望在哪裡被照顧。這些決定越早在意識清楚、能溝通時討論越好，透過預立醫療照護諮商把意願記錄下來，能減少家人在緊急時刻的掙扎。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'病人數標明為推估並寫出引述媒體與年份，給付資格引自健保署與衛福部公開資料，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['重大傷病資格取自健保署申請須知','居家呼吸器與安寧療護資格取自衛福部說明'],
      layout_reason:'先以表格說明初期徵兆，再整理診斷治療與照護資源。',
      tone:'專業易懂', tone_reason:'罕見疾病資訊需清楚、避免恐慌。',
      to_verify:['全台患者約千人為2020年媒體引用的推估，查無官方統計','居家呼吸器與安寧給付規定以健保署最新公告為準']},
    decision_points:[DP_COUNT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'手越來越沒力、說話含糊？認識漸凍人症與可以求助的資源',
    update_date:'2026/11/20',
    intro:'漸凍人症（ALS）會讓控制肌肉的神經慢慢退化，手腳和說話吞嚥的力氣一點一點變弱，但病人的頭腦和感覺通常都很清楚。推估全台約有千名患者（中央社2020年報導）。雖然目前還不能根治，但早點確診、善用醫療和照護資源，病人和家人都能少一點無助。',
    sections:[
      {heading:'一開始可能是這些小變化',format:'table',table:TABLE},
      {heading:'懷疑的話怎麼做？',format:'bullets',items:[
        '手腳持續沒力、肌肉變細，請到神經內科檢查。',
        '治療目標是延緩病程，復健、營養和呼吸照顧都很重要。',
        '趁還能好好溝通時，和家人、醫師聊聊之後想怎麼被照顧。'
      ]},
      {heading:'這些資源可以用',format:'bullets',items:[
        '符合條件可以申請健保重大傷病證明。',
        '需要呼吸器的漸凍人，經評估可以在家使用健保居家呼吸器照護。',
        '漸凍人可以接受健保安寧療護，在醫院或家裡都可以。'
      ]}
    ],
    think_tank_view:'照顧漸凍人是一段很長的路，家人不必一個人扛。主動問醫院的社工師、個管師，連結病友團體與長照資源，都能讓照顧的路走得穩一點。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'病人數標明為推估，給付資訊引自健保署與衛福部，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'從病人與家人會察覺的變化切入。', tone:'生活親切', tone_reason:'給病人家屬閱讀。', to_verify:['病人數推估的年份']},
    decision_points:[DP_COUNT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'漸凍人症：初期徵兆與照護資源',
    update_date:'2026/11/20',
    intro:'漸凍人症（ALS）是運動神經元退化造成的肌肉無力與萎縮，推估全台約有千名患者（中央社2020年報導），屬少見但照護需求高的疾病。',
    sections:[
      {heading:'初期徵兆',format:'table',table:TABLE},
      {heading:'就醫',format:'bullets',items:[
        '持續無力或萎縮，至神經內科評估。',
        '及早討論呼吸與餵食的照護意願。'
      ]},
      {heading:'資源',format:'bullets',items:[
        '重大傷病、居家呼吸器、安寧療護。'
      ]}
    ],
    think_tank_view:'及早確診、及早表達照護意願，是面對漸凍人症最重要的準備。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'病人數標明為推估，給付資訊引自健保署與衛福部，未使用療效保證用語，未涉及具體藥品或商品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為徵兆、就醫、資源三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['病人數推估的年份']},
    decision_points:[DP_COUNT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'漸凍人症（ALS）', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'持續肌肉無力、萎縮要就醫', primary_visual:'4 大初期徵兆', secondary_message:'意識清楚，及早表達照護意願', action_priority:'善用健保照護資源'},
    headline_hook:'手越來越沒力？', headline_main:'漸凍人症 4 大初期徵兆', title_accent:'4 大初期徵兆',
    hero_message:'運動神經元退化', hero_support:'肌肉逐漸無力萎縮，意識通常清楚',
    knowledge_title:'初期徵兆', knowledge_note:'持續無力或萎縮，**至神經內科**評估',
    knowledge_cards:[
      {label:'手部無力', lines:['扣釦子、拿筷子難','手部肌肉變細']},
      {label:'腳步不穩', lines:['容易絆倒','抬腳無力、拖步']},
      {label:'說話吞嚥', lines:['口齒不清','喝水嗆咳']},
      {label:'肌肉跳動', lines:['不自主抽動','伴隨無力感']}
    ],
    action_title:'可以運用的資源',
    action_cards:[
      {key:'醫', text:'神經內科確診，跨團隊照護'},
      {key:'申', text:'符合條件申請健保重大傷病'},
      {key:'呼', text:'經評估可用健保居家呼吸器照護'},
      {key:'談', text:'及早預立醫療照護諮商表達意願'}
    ],
    carousel_suggestion:{reason:'若想把徵兆、治療與照護資源分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'手越來越沒力？', headline_main:'漸凍人症 4 大初期徵兆'},
      {layout_type:'knowledge', headline_hook:'確診之後', headline_main:'呼吸、營養與復健照護'},
      {layout_type:'action', headline_hook:'照護資源', headline_main:'重大傷病、居家呼吸器、安寧'}]},
    hashtags:['漸凍人','ALS','罕見疾病','安寧療護'],
    sources:['衛生福利部中央健康保險署','衛生福利部'],
    illustration_category:'brain',
    illustration:{topic:'漸凍人照護', audience:'病人與家庭照顧者', scene:'家人陪伴坐輪椅的病人，旁邊有醫療團隊人員說明照護計畫',
      emotion:'溫暖、被支持', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A family member beside a person in a wheelchair while a healthcare worker explains a care plan, warm and supportive mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['初期徵兆依神經內科一般衛教整理','照護資源取自健保署與衛福部說明'],
      layout_reason:'漸凍人症缺乏可靠的國內官方人數，核心是「認得徵兆、知道資源」，選 knowledge：4 個初期徵兆當主角，資源放行動區，不放主數字。',
      tone:'專業易懂', tone_reason:'罕見疾病資訊需清楚、避免恐慌。',
      to_verify:['卡面未放人數，因查無官方統計']},
    content_check_note:'給付資訊引自健保署與衛福部公開資料，未放未經查證的人數，未使用療效保證用語，未涉及具體藥品或商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'漸凍人症（ALS）',
    collect:{
      summary:'漸凍人症（ALS）是運動神經元退化造成全身肌肉無力的少見疾病，國內病人數僅有媒體引述的推估（約千人）；病程中需要呼吸器、營養與長期照顧，健保重大傷病、居家呼吸器與安寧療護是主要支持資源。',
      objective_data:[
        {item:'盛行率／發生率',desc:'全台約千名患者（推估）：中央社2020年報導引述的推估，全台漸凍人患者約千人，國內查無官方公布的總病人數。',tag:'推估',source:{name:'中央社：幫漸凍人留下聲音',url:'https://www.cna.com.tw/news/ahel/202011240316.aspx'}},
        {item:'政策動向',desc:'重大傷病資格：運動神經元疾病之身心障礙等級在中度以上或須使用呼吸器者，可申請健保重大傷病證明，並須檢附身心障礙等級評鑑證明。',tag:'官方統計',source:{name:'健保署：重大傷病申請須知',url:'https://www.nhi.gov.tw/ch/cp-6091-08ad9-2957-1.html'}},
        {item:'政策動向',desc:'約700人受惠：健保111年擴大安寧療護收案對象，推估約700人受惠，安寧療護照護範圍最初即包含癌症與漸凍人。',tag:'官方統計',source:{name:'衛生福利部：健保擴大安寧療護收案對象',url:'https://www.mohw.gov.tw/cp-5266-67794-1.html'}},
        {item:'政策動向',desc:'居家呼吸器直接收案：ALS患者經評估確需使用非侵襲性呼吸器者，可直接進入健保居家照護階段，減少往返醫院。',tag:'官方統計',source:{name:'衛生福利部：健保居家照護呼吸器支付制度之說明',url:'https://www.mohw.gov.tw/cp-3161-26161-1.html'}}
      ],
      product_view:['機會：漸凍人照護期長、需呼吸器與全天照顧，可說明失能、長照與特定傷病保障的意義。','機會：預立醫療照護諮商（ACP）資訊可作為保戶家庭的照護規劃服務。','風險：罕見疾病不宜作為行銷恐嚇素材，避免暗示特定療法或產品可延緩病程。'],
      marketing_view:['機會：每年6月21日世界漸凍人日是固定溝通檔期。','機會：以「意識清楚但身體逐漸無力」的同理角度，帶出預立醫療決定的重要性。','風險：人數僅為推估，傳播時不宜放大數字。'],
      alert_level:'low',
      alert_reason:'屬少見疾病，無急迫時效事件；適合在6月世界漸凍人日前後，與安寧緩和、預立醫療決定主題一併溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('推估全台約有千名患者（中央社2020年報導）','SOURCE_EVIDENCE','secondary_citation',
          '病人數引自媒體報導的推估，非主管機關公布統計，文中未說明原始推估者與計算方式。','medium','yes',
          '國健署或健保署是否有運動神經元疾病就醫人數或重大傷病領證數統計。','yes','confirm','查無官方總病人數。',
          '國內尚無官方公布的總病人數，媒體曾引述推估約千名患者（中央社2020年報導）'),
        F('漸凍人是健保安寧療護最早納入的收案對象之一','SOURCE_EVIDENCE','history_claim',
          '「最早納入」為衛福部新聞中「照護範圍由原有的癌症及漸凍人」的轉述，文中未寫出處，讀者無法查證。','low','no',
          null,'no','clarify','屬出處補充。',
          '健保安寧療護照護範圍最初即包含癌症與漸凍人（衛福部）'),
        F('藥物治療以延緩病程為目標','MEDICAL_INTERPRETATION','vague_term',
          '未說明藥物效果有限且因人而異，讀者可能高估藥物效益。','low','no',
          null,'no','clarify','屬療效表達提醒。',
          '藥物治療以延緩病程為目標，效果因人而異，需與醫師討論'),
        F('可直接進入健保居家照護階段','REGULATORY_COMPLIANCE','coverage_condition',
          '居家呼吸器給付有評估與計畫收案條件，文中未提醒以健保署現行規定為準。','low','no',
          null,'no','clarify','給付規定可能修訂。',
          '可依健保規定評估後直接進入居家照護階段')
      ],
      card:[
        F('經評估可用健保居家呼吸器照護','REGULATORY_COMPLIANCE','coverage_condition',
          '居家呼吸器給付限經評估確需使用非侵襲性呼吸器者，卡面未說明條件。','low','no',
          null,'no','clarify','屬給付條件說明。',
          '符合條件者可用健保居家呼吸器照護'),
        F('及早預立醫療照護諮商表達意願','TERMINOLOGY_LANGUAGE','term_unexplained',
          '「預立醫療照護諮商」是專有名詞，卡面未說明是依《病人自主權利法》到醫院諮商並簽署預立醫療決定，讀者不知道去哪裡辦。','low','no',
          null,'no','clarify','屬用語說明。',
          '到醫院做預立醫療照護諮商，及早表達意願')
      ]
    },
    title_alts:[
      '漸凍人症（ALS）：認識運動神經元疾病的初期徵兆與照護資源',
      '手越來越沒力、說話含糊？認識漸凍人症與可以求助的資源',
      '漸凍人症照護指南：重大傷病、居家呼吸器與安寧療護'
    ],
    card_title_alts:[
      ['手越來越沒力？','漸凍人症 4 大初期徵兆'],
      ['認識漸凍人症','意識清楚，身體逐漸無力'],
      ['漸凍人照護資源','重大傷病、呼吸器、安寧']
    ],
    data_addon:[
      '健保重大傷病類別中，運動神經元疾病須附身心障礙等級中度以上證明。',
      '社區安寧療護自103年起納入健保，照護對象包含漸凍人。',
      '111年起住宿式長照機構納入安寧居家療護服務場域。'
    ],
    cta:'若家人確診漸凍人症，這個月就請醫院社工或個管師協助申請重大傷病證明，並預約一次預立醫療照護諮商。'
  });
})();
