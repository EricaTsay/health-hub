/* v6 示範主題：飲食中的致癌物質（B2 癌症）
   查證日期：2026-11-21。數據來源：食藥署2023-09-29〈中秋烤肉不烤焦，兼顧美味與健康〉（烤焦食材多環芳香族碳氫化合物顯著增加）、
   食藥署〈食品中黃麴毒素從何而來？如何避免吃下肚？〉（2023-11發布、2026-05維護）、TVBS 2025-11-05（引述食藥署2025年7-9月抽驗271件黃麴毒素結果）、
   國健署2015-10-31加工肉品與紅肉新聞稿。
   黃麴毒素限量值在不同資料中說法不一（依食品類別不同），文中不寫限量數字。
   參考方向：健康智庫〈飲食致癌物質〉2024/08、〈中秋烤肉這樣吃不致癌、不怕胖！〉2024/09。 */
(function(){
  const REFS = [
    {title:'中秋烤肉不烤焦，兼顧美味與健康',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/TC/newsContent.aspx?cid=4&id=t622147'},
    {title:'食品中黃麴毒素從何而來？如何避免吃下肚？',source:'衛生福利部食品藥物管理署',url:'https://www.fda.gov.tw/TC/siteListContent.aspx?id=51094'},
    {title:'又是花生粉！抽驗市售食品黃麴毒素 不合格含量是上限25倍',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/nutrition/358790'},
    {title:'會致癌！國人肉食族多，國健署呼籲：少吃、趕快做大腸癌篩檢！',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-16-20041-1.html'}
  ];
  const TABLE = {headers:['常見來源','怎麼減少（官方建議）'], rows:[
    ['燒烤烤焦','食藥署：烤焦會使多環芳香族碳氫化合物顯著增加，避免烤焦，烤焦就不要吃'],
    ['黃麴毒素','食藥署：選信譽良好店家、包裝完整，開封後密封存放於低溫乾燥處；發霉整包丟棄'],
    ['加工肉品','國健署：培根、香腸、火腿屬IARC第1組，建議少吃'],
    ['紅肉','國健署：紅肉屬第2A組，以魚肉、瘦禽肉替代，少燒烤']
  ]};
  const TAGS = ['致癌物','黃麴毒素','烤肉','加工肉品','食品安全'];

  const DP_AFLA = {id:'dp-food-afla', type:'data_scope', title:'黃麴毒素限量值為何沒寫',
    desc:'食藥署文章引用的花生類總黃麴毒素限量，與媒體報導花生粉抽驗案引用的限量不同，可能因食品類別（原料或加工品）不同而異。AI 無法確認個案適用的類別，因此文中只寫抽驗結果，不寫限量數字。',
    current:'2025年7-9月抽驗271件，1件花生粉不合格（媒體引述食藥署）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'271件、1件不合格', value:'2025年7-9月抽驗', note:'TVBS引述食藥署（目前採用）'},
      {label:'限量值', value:'依食品類別不同', note:'各來源數字不一，未採用'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'飲食中的致癌物從哪來？烤焦、黃麴毒素、加工肉品3招避開',
    update_date:'2026/11/21',
    intro:'飲食中的致癌物常見來源包括高溫燒烤產生的多環芳香族碳氫化合物、黴菌產生的黃麴毒素，以及加工肉品。食藥署檢驗發現，食材烤焦後所含的多環芳香族碳氫化合物顯著增加；黃麴毒素中以B1的毒性與致癌性最強，而且耐高溫、難以用一般烹煮方式去除。據媒體引述食藥署，2025年7至9月抽驗市售食品271件，有1件花生粉黃麴毒素超標。',
    sections:[
      {heading:'3類常見來源與減少方法',format:'table',table:TABLE},
      {heading:'烤肉這樣做',format:'bullets',items:[
        '食藥署建議盡量避免烤焦，一旦烤焦就不要再食用。',
        '較厚的食材切小片，或先蒸、煮、微波後再烤，縮短燒烤時間。',
        '食藥署檢驗也發現，市售烤網、烤盤未使肉片檢出重金屬，可安心選用。'
      ]},
      {heading:'花生、穀類這樣存',format:'bullets',items:[
        '購買時確認包裝完整、無發霉或變色。',
        '開封後以乾燥密封罐存放於低溫、乾燥處，並在期限內吃完。',
        '發現發霉，不要因為可惜而只挑掉發霉的部分。'
      ]}
    ],
    think_tank_view:'致癌物不可能完全避開，但可以大幅減少。烤肉別烤焦、花生製品放密封罐、加工肉品改成偶爾吃，這3個小習慣，就能把餐桌上的風險降下來。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'烤焦與黃麴毒素建議引自食藥署並標明年份，抽驗結果標明為媒體引述，加工肉品建議引自國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['烤焦食材PAHs增加（食藥署2023）','黃麴毒素B1致癌性最強、耐高溫（食藥署）','2025年7-9月抽驗271件（媒體引述食藥署）'],
      layout_reason:'先用表格整理3類常見來源與官方建議，再分別給烤肉與保存的具體做法。',
      tone:'專業易懂', tone_reason:'食安資訊需平衡、避免恐慌。',
      to_verify:['抽驗結果為媒體引述，食藥署原始公告待查','黃麴毒素限量依食品類別不同']},
    decision_points:[DP_AFLA]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'烤肉、花生粉、香腸：餐桌上的致癌物怎麼躲？',
    update_date:'2026/11/21',
    intro:'中秋烤肉、花生湯圓、早餐的培根……生活中的美食，有時也藏著致癌物。食藥署檢驗發現，食材烤焦後有害物質明顯增加；花生、穀類保存不當長出的黃麴毒素，煮熟也去不掉。好消息是，只要掌握幾個小習慣，就能大大降低風險。',
    sections:[
      {heading:'3種常見的致癌物來源',format:'table',table:TABLE},
      {heading:'烤肉不烤焦',format:'bullets',items:[
        '烤焦的部分就別吃了。',
        '厚肉先切小片，或先煮熟再烤。',
        '烤網烤盤不用太擔心，食藥署驗過沒有重金屬跑到肉裡。'
      ]},
      {heading:'花生、穀類這樣存',format:'bullets',items:[
        '買包裝完整的，開封後放密封罐、陰涼乾燥處。',
        '發霉了整包丟，不要只挑掉發霉的地方。',
        '香腸、培根偶爾吃就好。'
      ]}
    ],
    think_tank_view:'不用因為怕致癌就什麼都不敢吃，記得「不吃焦、不吃霉、少吃加工肉」，就能吃得安心又開心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'建議引自食藥署與國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以日常飲食情境切入。', tone:'生活親切', tone_reason:'給家庭主要採買者閱讀。', to_verify:['抽驗結果出處']},
    decision_points:[DP_AFLA]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'飲食致癌物：不吃焦、不吃霉、少加工肉',
    update_date:'2026/11/21',
    intro:'烤焦食材多環芳香族碳氫化合物顯著增加；黃麴毒素耐高溫、煮不掉；加工肉品屬IARC第1組。',
    sections:[
      {heading:'3類來源',format:'table',table:TABLE},
      {heading:'烤肉',format:'bullets',items:[
        '避免烤焦，焦了不吃。',
        '先蒸煮再烤縮短時間。'
      ]},
      {heading:'保存',format:'bullets',items:[
        '花生穀類密封低溫乾燥存放。',
        '發霉整包丟棄。'
      ]}
    ],
    think_tank_view:'不吃焦、不吃霉、少加工肉，是減少飲食致癌物最簡單的三原則。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'建議引自食藥署與國健署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為來源、烤肉、保存三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['抽驗結果出處']},
    decision_points:[DP_AFLA]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'飲食中的致癌物質', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'不吃焦、不吃霉、少加工肉', primary_visual:'271 件',
      secondary_message:'黃麴毒素耐高溫，煮不掉', action_priority:'烤肉不烤焦、花生密封存'},
    headline_hook:'餐桌上的致癌物', headline_main:'3 招避開飲食致癌物', title_accent:'3 招',
    hero_message:'不焦・不霉・少加工', hero_support:'食藥署、國健署建議的日常做法',
    primary_stat:{value:'271 件', label:'2025 年 7–9 月黃麴毒素抽驗', note:'媒體引述食藥署｜1 件花生粉不合格'},
    action_title:'這樣做',
    action_cards:[
      {key:'焦', text:'烤肉避免烤焦，焦了就不吃'},
      {key:'霉', text:'花生穀類密封低溫存，發霉整包丟'},
      {key:'少', text:'香腸、培根、火腿偶爾吃'},
      {key:'煮', text:'厚食材先蒸煮再烤，縮短燒烤時間'}
    ],
    notice:'黃麴毒素**耐高溫**，一般水煮、炒、蒸都難以去除。',
    carousel_suggestion:{reason:'若想把烤肉、黃麴毒素與加工肉品分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'action', headline_hook:'中秋烤肉', headline_main:'不烤焦最重要'},
      {layout_type:'knowledge', headline_hook:'黃麴毒素', headline_main:'煮不掉，要靠保存'},
      {layout_type:'action', headline_hook:'加工肉品', headline_main:'改成偶爾吃'}]},
    hashtags:['致癌物','黃麴毒素','烤肉','食品安全'],
    sources:['衛生福利部食品藥物管理署','衛生福利部國民健康署','TVBS新聞網'],
    illustration_category:'nutrition',
    illustration:{topic:'健康烤肉與食物保存', audience:'家庭', scene:'家人在烤肉架旁把食材切小片，旁邊放著裝花生的密封罐',
      emotion:'溫馨、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A family cutting food into small pieces beside a barbecue grill with a sealed jar of peanuts nearby, warm and reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['食藥署烤焦與黃麴毒素說明','國健署加工肉品建議'],
      layout_reason:'核心是日常行動，選 action：4 個做法當主角，抽驗數量當主數字並標出處。',
      tone:'專業易懂', tone_reason:'食安避免恐慌。',
      to_verify:['抽驗結果為媒體引述']},
    decision_points:[Object.assign({}, DP_AFLA, {current:'271 件抽驗、1 件不合格（媒體引述）'})],
    content_check_note:'建議引自食藥署與國健署，抽驗結果標明為媒體引述，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'飲食中的致癌物質',
    collect:{
      summary:'飲食致癌物常見於燒烤烤焦、黴菌產生的黃麴毒素與加工肉品；食藥署檢驗顯示烤焦食材有害物質顯著增加、黃麴毒素煮不掉，2025年抽驗仍有花生粉超標，「不吃焦、不吃霉、少加工肉」是適合中秋與年節的食安溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'271件市售食品黃麴毒素抽驗：據媒體引述食藥署，2025年7至9月與地方衛生局抽驗花生、穀類、咖啡等271件，1件花生粉不合格並處罰鍰3萬元。',tag:'市場觀察',source:{name:'TVBS新聞網：又是花生粉！抽驗市售食品黃麴毒素',url:'https://health.tvbs.com.tw/nutrition/358790'}},
        {item:'年度趨勢方向',desc:'4種黃麴毒素中B1毒性最強：食藥署說明黃麴毒素是目前所知致癌性最強的真菌毒素，耐高溫，一般水煮、火炒、炊煮難以去除。',tag:'官方統計',source:{name:'衛生福利部食品藥物管理署：食品中黃麴毒素從何而來？',url:'https://www.fda.gov.tw/TC/siteListContent.aspx?id=51094'}},
        {item:'政策動向',desc:'4種烤肉食材檢驗：食藥署2023年檢驗甜不辣、吐司、肉片、香腸，烤焦後多環芳香族碳氫化合物含量顯著增加，市售烤網烤盤則未使肉片檢出重金屬。',tag:'官方統計',source:{name:'衛生福利部食品藥物管理署：中秋烤肉不烤焦',url:'https://www.fda.gov.tw/TC/newsContent.aspx?cid=4&id=t622147'}},
        {item:'好發族群年齡層',desc:'每天50克加工肉品增加18%大腸癌風險：國健署2015年引述IARC，加工肉品為第1組、紅肉為第2A組，建議少吃並以白肉替代。',tag:'官方統計',source:{name:'衛生福利部國民健康署：會致癌！國人肉食族多',url:'https://mohw.gov.tw/cp-16-20041-1.html'}}
      ],
      product_view:['機會：食安知識適合作為癌症保障溝通的前端衛教。','機會：中秋、年節可結合健康飲食提醒服務。','風險：不得點名特定業者或產品，也不得以抽驗個案製造恐慌。'],
      marketing_view:['機會：中秋烤肉季是固定時點，「不烤焦」好執行。','機會：花生、堅果保存是家庭採買者關心的實用資訊。','風險：避免「這個不能吃、那個不能吃」的恐嚇式清單。'],
      alert_level:'low',
      alert_reason:'無單一政策事件，適合在中秋、年節季節性溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('據媒體引述食藥署，2025年7至9月抽驗市售食品271件，有1件花生粉黃麴毒素超標','SOURCE_EVIDENCE','secondary_citation',
          '抽驗結果引自媒體報導，未附食藥署原始公告；且未提到超標倍數所依據的限量標準。','medium','yes',
          '食藥署2025年第3季黃麴毒素抽驗公告。','yes','confirm','屬二手引述。',
          null),
        F('食藥署檢驗也發現，市售烤網、烤盤未使肉片檢出重金屬，可安心選用','RISK_COMMUNICATION_SCOPE','overgeneralization',
          '檢驗範圍為特定烤網烤盤與肉片，「可安心選用」可能被理解為所有烤具都沒問題。','low','no',
          null,'no','clarify','屬適用範圍說明。',
          '食藥署檢驗的市售烤網、烤盤未使肉片檢出重金屬',['烤網烤盤不用太擔心，食藥署驗過沒有重金屬跑到肉裡']),
        F('加工肉品屬IARC第1組','MEDICAL_INTERPRETATION','classification_misread',
          '未說明IARC分組代表證據強度而非毒性，讀者可能誤以為加工肉品和菸、檳榔一樣危險。','low','no',
          null,'no','clarify','屬分級意義說明。',
          '加工肉品屬IARC第1組（代表致癌證據充分，不代表與其他第1組物質一樣危險）',['培根、香腸、火腿屬IARC第1組']),
        F('發霉了整包丟，不要只挑掉發霉的地方','MEDICAL_INTERPRETATION','advice_paraphrase',
          '食藥署原文是「不要因可惜而把沒發霉的部分吃掉」，「整包丟」為改寫延伸，語意一致但更絕對。','low','no',
          null,'no','clarify','屬改寫準確度。',
          null,['發霉整包丟棄'])
      ],
      card:[
        F('2025 年 7–9 月黃麴毒素抽驗','SOURCE_EVIDENCE','secondary_citation',
          '主數字為媒體引述，未附原始公告。','medium','yes',
          '食藥署原始公告。','yes','confirm','屬二手引述。',
          null),
        F('花生穀類密封低溫存，發霉整包丟','MEDICAL_INTERPRETATION','advice_paraphrase',
          '「整包丟」為改寫延伸。','low','no',
          null,'no','clarify','語意與食藥署一致。',
          null)
      ]
    },
    title_alts:[
      '飲食中的致癌物從哪來？烤焦、黃麴毒素、加工肉品3招避開',
      '烤肉、花生粉、香腸：餐桌上的致癌物怎麼躲？',
      '不吃焦、不吃霉、少加工肉：減少飲食致癌物的日常習慣'
    ],
    card_title_alts:[
      ['餐桌上的致癌物','3 招避開飲食致癌物'],
      ['中秋烤肉','不烤焦最重要'],
      ['黃麴毒素煮不掉','花生要密封存']
    ],
    data_addon:[
      '食藥署：黃麴毒素有B1、B2、G1、G2四種，以B1毒性和致癌性最大。',
      '食藥署：烤肉時可先將厚食材切小片，或先蒸、煮、微波後再烤以縮短燒烤時間。',
      '國健署：每天吃100克紅肉增加17%大腸癌風險（2015年引述IARC）。'
    ],
    cta:'今天就檢查家裡的花生、堅果和五穀雜糧，開封的改放進密封罐，發霉的整包丟掉。'
  });
})();
