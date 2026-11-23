/* v6 示範主題：食道癌（B2 癌症）
   查證日期：2026-11-20。數據來源：國健署2025-05-02〈遠離食道癌，「食」在要注意！〉（111年癌登新發人數、風險倍數、行為比例、症狀、預防建議）、
   衛福部114年死因統計摘要表（食道癌死亡時間序列與男性排名）、TVBS 2025-12-30（國健署：男性發生率為女性11倍）。
   112年癌登附表未列食道癌（非男女合計十大），新發人數沿用國健署公布之111年資料並標明年份。
   參考方向：健康智庫〈食道癌〉2024/02。 */
(function(){
  const REFS = [
    {title:'遠離食道癌，「食」在要注意！',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-82374-1.html'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'112年國人癌症時鐘再快轉！肺癌連3年居首 每3分48秒一人罹癌',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/cancer/360004'}
  ];
  const TABLE = {headers:['習慣','罹患食道癌機率（與無此習慣者相比）'], rows:[
    ['飲酒','3.80倍'],
    ['嚼檳榔','2.62倍'],
    ['吸菸','2.29倍']
  ]};
  const TAGS = ['食道癌','菸酒檳榔','吞嚥困難','男性健康','癌症防治'];

  const DP_YEAR = {id:'dp-ec-year', type:'data_version', title:'新發人數與死亡人數年份不同',
    desc:'食道癌不在112年男女合計十大癌症附表內，國健署最新公布的新發人數為111年2,831人；死亡人數則已有114年資料（1,981人）。兩者年份不同，AI 分別標示，沒有混為同一年。',
    current:'111年新發2,831人、114年死亡1,981人',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'2,831人', value:'111年新發', note:'國健署2025年5月新聞稿（目前採用）'},
      {label:'1,981人', value:'114年死亡', note:'衛福部114年死因統計'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'食道癌9成以上是男性：遠離菸酒檳榔，吞嚥困難要就醫',
    update_date:'2026/11/20',
    intro:'依國民健康署公布的111年癌症登記資料，食道癌新發2,831人，其中男性2,600人、占9成以上，居男性癌症發生第6名；國健署在112年癌登記者會指出，男性發生率約為女性的11倍。衛生福利部114年死因統計中，食道癌死亡1,981人，居男性癌症死因第6位。食道癌目前沒有實證有效的篩檢工具，預防的關鍵在於遠離菸、酒、檳榔。',
    sections:[
      {heading:'菸酒檳榔讓風險倍增',format:'table',table:TABLE},
      {heading:'認識食道癌的警訊',format:'bullets',items:[
        '食道癌初期大多沒有明顯症狀。',
        '常見症狀包括吞嚥困難、吞嚥時有異物感或痛感、食物逆流、火燒心、聲音沙啞、胸後痛、體重減輕與久咳。',
        '111年新診斷個案中，75.6%有吸菸、50.8%有飲酒、46.8%有嚼檳榔的行為。'
      ]},
      {heading:'國健署6項預防建議',format:'bullets',items:[
        '遠離菸、酒、檳榔。',
        '減少過燙（超過攝氏65度）的食物與飲料。',
        '少吃香腸、臘肉等含亞硝酸鹽食物，多吃原型食物、減少加工食品。',
        '保持口腔清潔、維持規律運動；出現症狀應及早就醫，不要上網查詢後自行判定沒事。'
      ]}
    ],
    think_tank_view:'食道癌沒有篩檢工具，能做的就是把風險從生活中移除。菸、酒、檳榔每一項都讓風險加倍，同時有多項習慣的人更要警覺；一旦吞嚥卡卡、聲音沙啞或體重莫名下降，請直接就醫。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'新發人數與風險倍數引自國健署並標明111年資料，死亡人數引自衛福部114年死因統計，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['111年食道癌新發2,831人、風險倍數（國健署2025-05）','114年死亡1,981人（死因統計）'],
      layout_reason:'先用表格呈現菸酒檳的風險倍數，再說明警訊，最後列出國健署6項預防建議。',
      tone:'專業易懂', tone_reason:'無篩檢工具的癌症，預防行為需具體。',
      to_verify:['新發人數為111年資料，112年數字需查癌登年報全文','風險倍數引自台灣社區世代研究，研究年份未標示']},
    decision_points:[DP_YEAR]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'吞東西卡卡、聲音沙啞？愛喝酒的男人要注意食道癌',
    update_date:'2026/11/20',
    intro:'食道癌是「男人的癌症」：國健署統計，111年新發2,831人，9成以上是男性。114年有1,981人因食道癌過世。食道癌沒有篩檢工具，早期也沒什麼症狀，最好的方法就是把菸、酒、檳榔戒掉。',
    sections:[
      {heading:'這些習慣，風險加倍',format:'table',table:TABLE},
      {heading:'身體出現這些訊號要注意',format:'bullets',items:[
        '吞東西卡卡、會痛，或食物一直往上逆流。',
        '火燒心、聲音沙啞、胸口後面痛、一直咳。',
        '體重莫名其妙一直掉。'
      ]},
      {heading:'可以這樣做',format:'bullets',items:[
        '菸、酒、檳榔能戒就戒。',
        '太燙的湯和茶放涼一點再喝。',
        '少吃香腸、臘肉，多吃天然食物。',
        '有症狀就去看醫生，別自己上網查完就說沒事。'
      ]}
    ],
    think_tank_view:'聚餐時大口喝酒、喝熱湯，再配根菸，都是食道的負擔。提醒身邊的男性朋友，少一杯、放涼一點，就是在保護自己。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署與衛福部並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以男性常見的生活習慣切入。', tone:'生活親切', tone_reason:'給中壯年男性與家人閱讀。', to_verify:['新發人數年份']},
    decision_points:[DP_YEAR]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'食道癌：遠離菸酒檳榔，少吃過燙食物',
    update_date:'2026/11/20',
    intro:'111年食道癌新發2,831人，9成以上為男性；114年死亡1,981人。目前無有效篩檢工具。',
    sections:[
      {heading:'風險倍數',format:'table',table:TABLE},
      {heading:'警訊',format:'bullets',items:[
        '吞嚥困難、異物感。',
        '聲音沙啞、體重減輕。'
      ]},
      {heading:'預防',format:'bullets',items:[
        '戒菸酒檳榔。',
        '避免超過65度的燙食。'
      ]}
    ],
    think_tank_view:'沒有篩檢工具的食道癌，預防就靠遠離菸酒檳榔與過燙食物。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自國健署與衛福部並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為風險、警訊、預防三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['新發人數為111年']},
    decision_points:[DP_YEAR]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'食道癌', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'飲酒者食道癌風險 3.8 倍', primary_visual:'3.80 倍', secondary_message:'9 成以上患者是男性', action_priority:'遠離菸酒檳榔、少吃過燙食物'},
    headline_hook:'吞東西卡卡？', headline_main:'遠離食道癌 4 件事', title_accent:'4 件事',
    hero_message:'9 成以上是男性', hero_support:'111 年食道癌新發 2,831 人（國健署）',
    primary_stat:{value:'3.80 倍', label:'飲酒者罹患食道癌機率', note:'國健署引述台灣社區世代研究｜嚼檳榔 2.62 倍、吸菸 2.29 倍'},
    action_title:'這樣做',
    action_cards:[
      {key:'戒', text:'遠離菸、酒、檳榔'},
      {key:'涼', text:'超過攝氏 65 度的燙食放涼再吃'},
      {key:'少', text:'少吃香腸、臘肉等加工食品'},
      {key:'醫', text:'吞嚥困難、聲音沙啞及早就醫'}
    ],
    notice:'食道癌目前**沒有實證有效的篩檢工具**，預防靠生活習慣。',
    carousel_suggestion:{reason:'若想把風險、警訊與預防分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'菸酒檳榔', headline_main:'食道癌風險加倍'},
      {layout_type:'knowledge', headline_hook:'吞東西卡卡？', headline_main:'食道癌警訊'},
      {layout_type:'action', headline_hook:'國健署建議', headline_main:'遠離食道癌 6 招'}]},
    hashtags:['食道癌','菸酒檳榔','吞嚥困難','男性健康'],
    sources:['衛生福利部國民健康署','衛生福利部'],
    illustration_category:'nutrition',
    illustration:{topic:'食道癌預防', audience:'中壯年男性', scene:'聚餐時一位中年男性把酒杯換成茶杯，等熱湯放涼再喝',
      emotion:'輕鬆、自律', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A middle-aged man at a dinner gathering swapping his wine glass for a cup of tea and letting hot soup cool before drinking, relaxed and self-disciplined mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['風險倍數與預防建議（國健署2025-05）'],
      layout_reason:'食道癌無篩檢工具，核心是避開風險，選 action：4 個預防行動當主角，風險倍數當主數字。',
      tone:'專業易懂', tone_reason:'預防行動需具體。',
      to_verify:['風險倍數研究年份']},
    decision_points:[Object.assign({}, DP_YEAR, {current:'111 年新發 2,831 人、114 年死亡 1,981 人'})],
    content_check_note:'風險倍數與預防建議引自國健署，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'食道癌',
    collect:{
      summary:'食道癌9成以上患者為男性、男性發生率約為女性11倍，2025年死亡1,981人、居男性癌症死因第6位；目前沒有實證有效的篩檢工具，「遠離菸酒檳榔、少吃過燙食物」是核心溝通訊息。',
      objective_data:[
        {item:'盛行率／發生率',desc:'9成以上食道癌患者為男性：國健署公布111年食道癌新發2831人，其中男性2600人，居男性癌症發生第6名。',tag:'官方統計',source:{name:'衛生福利部國民健康署：遠離食道癌，「食」在要注意！',url:'https://mohw.gov.tw/cp-16-82374-1.html'}},
        {item:'年度趨勢方向',desc:'死亡人數減少4.6%：2025年食道癌死亡1,981人，較2024年2,076人下降，年齡標準化死亡率由2016年每十萬人5.1降至4.4。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'0項實證有效篩檢工具：國健署指出食道癌尚無實證有效的篩檢工具，提出遠離菸酒檳榔、少吃超過攝氏65度燙食等6項預防建議。',tag:'官方統計',source:{name:'衛生福利部國民健康署：遠離食道癌，「食」在要注意！',url:'https://mohw.gov.tw/cp-16-82374-1.html'}},
        {item:'好發族群年齡層',desc:'飲酒者罹患機率3.80倍：國健署引述台灣社區世代研究，飲酒、嚼檳榔、吸菸者罹患食道癌機率分別為無此習慣者的3.80、2.62及2.29倍。',tag:'官方統計',source:{name:'衛生福利部國民健康署：遠離食道癌，「食」在要注意！',url:'https://mohw.gov.tw/cp-16-82374-1.html'}}
      ],
      product_view:['機會：食道癌多在晚期發現、治療強度高，可作為男性癌症保障的溝通情境。','機會：戒菸、節酒、戒檳支持服務適合結合健康管理。','風險：避免對菸酒族群說教或汙名化，也不得將生活習慣與理賠條件做不當連結。'],
      marketing_view:['機會：「熱湯放涼再喝」「少一杯」是好執行的小行動。','機會：可與口腔癌組成「菸酒檳」系列內容。','風險：避免以「男人的癌症」做性別刻板標籤，宜聚焦習慣。'],
      alert_level:'low',
      alert_reason:'死亡人數下降、無政策事件，適合納入男性健康或菸酒檳主題的長期溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('國健署在112年癌登記者會指出，男性發生率約為女性的11倍','SOURCE_EVIDENCE','secondary_citation',
          '倍數出自記者會說明的媒體轉述，未附官方原始數據；且與文中111年新發人數年份不同。','low','yes',
          '國健署112年癌登男女別食道癌標準化發生率。','yes','confirm','屬二手引述。',
          null),
        F('111年新診斷個案中，75.6%有吸菸、50.8%有飲酒、46.8%有嚼檳榔的行為','MEDICAL_INTERPRETATION','prevalence_as_causation',
          '這是患者中有該習慣的比例，不是習慣造成食道癌的比例；讀者可能誤讀為「75.6%的食道癌是吸菸造成」。','low','no',
          null,'no','clarify','數字引自國健署。',
          '111年新診斷個案中，有吸菸行為者占75.6%、有飲酒者占50.8%、有嚼檳榔者占46.8%（為患者的習慣比例）'),
        F('食道癌是「男人的癌症」','RISK_COMMUNICATION_SCOPE','stereotype_framing',
          '以性別標籤描述疾病，可能讓女性讀者忽略自身風險，也帶有刻板印象；實際關鍵是菸酒檳習慣。','medium','no',
          null,'no','revise','屬語氣調整。',
          '食道癌患者以男性為主'),
        F('太燙的湯和茶放涼一點再喝','MEDICAL_INTERPRETATION','threshold_missing',
          '生活親切版沒寫國健署提到的具體溫度（攝氏65度），讀者難以判斷多燙算太燙。','low','no',
          null,'no','clarify','國健署原文有溫度標準。',
          '超過攝氏65度的熱湯和茶，放涼一點再喝')
      ],
      card:[
        F('飲酒者罹患食道癌機率','MEDICAL_INTERPRETATION','relative_risk_unexplained',
          '「3.80 倍」是相對風險，讀者可能誤讀為絕對機率；卡面也未說明比較對象。','low','no',
          null,'no','clarify','數字引自國健署。',
          '飲酒者罹患食道癌機率（與不飲酒者相比）'),
        F('9 成以上是男性','RISK_COMMUNICATION_SCOPE','stereotype_framing',
          'hero 大字只強調男性比例，女性讀者可能以為自己不必注意；實際風險關鍵在菸酒檳習慣。','low','no',
          null,'no','clarify','比例引自國健署（2,600／2,831人）。',
          '患者以男性為主')
      ]
    },
    title_alts:[
      '食道癌9成以上是男性：遠離菸酒檳榔，吞嚥困難要就醫',
      '吞東西卡卡、聲音沙啞？愛喝酒的男人要注意食道癌',
      '沒有篩檢工具的食道癌：國健署6項預防建議'
    ],
    card_title_alts:[
      ['吞東西卡卡？','遠離食道癌 4 件事'],
      ['飲酒者風險 3.8 倍','遠離菸酒檳榔'],
      ['熱湯放涼再喝','預防食道癌']
    ],
    data_addon:[
      '114年死因統計：食道癌死亡男性1,800人，居男性癌症死因第6位。',
      '國健署：112年食道癌死亡2,064人，其中男性1,915人。',
      '國健署引述美國臨床腫瘤學會，危險因子包括不健康飲食、菸酒檳、胃食道逆流。'
    ],
    cta:'下次聚餐，熱湯先放涼、酒少一杯；家人若吞嚥卡卡超過幾週，陪他去看醫生。'
  });
})();
