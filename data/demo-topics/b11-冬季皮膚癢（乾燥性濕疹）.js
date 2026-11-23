/* v6 示範主題：冬季皮膚癢（乾燥性濕疹）（B11 第二輪擴充）
   查證日期：2026-11-23。數據來源：聯合報2026-01-18（長庚皮膚科吳吉妮醫師：洗澡15分鐘內、水溫不超過體溫、浴後立即保濕、高風險族群）、
   早安健康2018-11-30（食藥署藥物食品安全週報邀國泰皮膚科陳怡安醫師：清潔一天一次即足夠、勿擦痱子膏或熱毛巾止癢）。
   **查無國內冬季癢盛行率或就醫人數官方統計**，全篇不寫盛行數字。參考方向：健康智庫〈改善冬季癢！正確止癢是關鍵〉2023/01/09。 */
(function(){
  const REFS = [
    {title:'健康主題館/冬天防皮膚乾癢 洗澡後擦乳液更鎖水',source:'聯合報',url:'https://udn.com/news/story/7266/9273317'},
    {title:'冬季癢越抓越癢無限輪迴！食藥署教3招冬季癢好得快',source:'早安健康（引述食藥署藥物食品安全週報）',url:'https://www.edh.tw/article/20640'}
  ];
  const TABLE = {headers:['止癢4招','怎麼做'], rows:[
    ['洗澡別太燙','水溫溫熱、不超過體溫，時間控制在15分鐘內，避免泡到全身通紅'],
    ['洗完立刻保濕','擦乾後趁皮膚微濕馬上塗抹；乾癢明顯可選油脂含量高的乳霜或凡士林'],
    ['清潔不過度','一天清潔一次通常足夠，避免清潔力過強的沐浴產品'],
    ['癢了不抓','以輕拍或冰敷取代搔抓；不擦痱子膏、不用熱毛巾燙'],
    ['穿著要透氣','貼身衣物選刺激性低的棉質，減少毛料、尼龍摩擦']
  ]};
  const TAGS = ['冬季癢','乾燥性濕疹','皮膚保濕','皮膚乾癢','熟齡保養'];

  const DP_BATH = {id:'dp-itch-bath', type:'source_level', title:'洗澡建議來自不同年份的醫師說法',
    desc:'「15分鐘內、不超過體溫」出自2026年長庚皮膚科醫師受訪；「清潔一天一次通常足夠」出自2018年食藥署安全週報邀請的皮膚科醫師。兩者都不是正式臨床指引，AI 沒有替你挑選。',
    current:'時間控制在15分鐘內',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'15分鐘內', value:'洗澡時間', note:'聯合報2026-01，長庚皮膚科醫師（目前採用）'},
      {label:'一天一次', value:'清潔頻率', note:'早安健康2018-11，引述食藥署安全週報'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'冬季癢越抓越癢？洗澡與保濕做對，皮膚不再乾裂',
    update_date:'2026/11/23',
    intro:'冬季癢又稱乾燥性濕疹或缺脂性濕疹，天氣變冷時皮脂與汗腺分泌減少，加上室內暖氣讓水分蒸發更快，皮膚容易乾燥脫屑、發癢，嚴重時出現龜裂與紅疹。長庚醫院皮膚科醫師指出，中老年人皮脂分泌下降，是最常受影響的族群；異位性皮膚炎、糖尿病及肝腎功能不全者，抓出傷口後也容易惡化。',
    sections:[
      {heading:'皮膚科醫師建議的止癢4招',format:'table',table:TABLE},
      {heading:'這些習慣會讓冬季癢更嚴重',format:'bullets',items:[
        '用很燙的水沖澡或泡澡，短暫止癢後反而帶走更多皮脂。',
        '反覆搔抓造成傷口，可能引起細菌感染，甚至蜂窩性組織炎。',
        '擦痱子膏、用熱毛巾擦皮膚止癢，或自行塗抹來路不明的藥膏。'
      ]},
      {heading:'什麼時候該看皮膚科',format:'bullets',items:[
        '保濕一段時間仍持續乾癢，需排除脂漏性皮膚炎等其他皮膚疾病。',
        '皮膚紅腫、滲液、出現傷口，表示已經發炎，應儘早就醫。',
        '全身性搔癢且皮膚外觀變化不明顯，也可能與糖尿病、肝腎疾病有關，應請醫師評估。'
      ]}
    ],
    think_tank_view:'冬季癢的關鍵不是止癢，而是「保住皮膚的油和水」。把洗澡水溫調低一點、時間縮短一點，浴室放一瓶乳液、洗完立刻擦，就能減少大部分不適。家中長輩若抓到破皮或紅腫，別只靠偏方，帶去看皮膚科才能避免感染。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'洗澡與保濕建議引自皮膚科醫師受訪並標明來源與年份，查無國內盛行率官方統計故未寫數字，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['洗澡時間與保濕時機取自聯合報2026年長庚皮膚科醫師受訪','清潔頻率與NG行為取自食藥署安全週報（早安健康2018年轉載）'],
      layout_reason:'冬季癢以日常照護為主，先用表格列出止癢做法，再提醒常見NG行為，最後說明就醫時機。',
      tone:'專業易懂', tone_reason:'照護做法需要具體可執行。',
      to_verify:['查無國內冬季癢盛行率','食藥署安全週報原文未直接讀取']},
    decision_points:[DP_BATH]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'一到冬天小腿就癢到抓破？保濕這樣做',
    update_date:'2026/11/23',
    intro:'天氣一冷，小腿、手臂就乾到起白屑、越抓越癢？這就是常說的「冬季癢」，也叫乾燥性濕疹。皮膚科醫師說，年紀越大皮膚的油脂越少，長輩特別容易中招；本身有異位性皮膚炎或糖尿病的人，抓破了也比較難好。',
    sections:[
      {heading:'止癢4招一起做',format:'table',table:TABLE},
      {heading:'這些做法反而更癢',format:'bullets',items:[
        '洗很燙的熱水澡，當下很舒服，洗完更乾。',
        '一直抓，抓破皮可能感染。',
        '擦痱子膏、拿熱毛巾燙，都會讓皮膚更乾。'
      ]},
      {heading:'這時候去看醫生',format:'bullets',items:[
        '擦了一陣子乳液還是很癢。',
        '皮膚紅腫、流湯、有傷口。',
        '全身都癢但看不出明顯疹子，記得讓醫師檢查。'
      ]}
    ],
    think_tank_view:'對付冬季癢，最簡單的一步就是在浴室放一瓶乳液，洗完澡擦乾馬上擦。也幫家裡長輩把洗澡水調溫一點，別讓他們越洗越癢。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'建議引自皮膚科醫師受訪並標明來源，未寫盛行數字，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'以小腿乾癢的日常情境切入，再給做法與就醫時機。', tone:'生活親切', tone_reason:'給熟齡讀者與照顧長輩的子女。', to_verify:['查無國內盛行率']},
    decision_points:[DP_BATH]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'冬季癢：洗澡別太燙，洗完就保濕',
    update_date:'2026/11/23',
    intro:'冬季癢是皮膚缺油缺水引起的乾燥性濕疹，中老年人最常見。洗澡時間控制在15分鐘內、洗完立刻保濕是關鍵。',
    sections:[
      {heading:'止癢4招',format:'table',table:TABLE},
      {heading:'NG行為',format:'bullets',items:[
        '熱水燙洗、反覆搔抓。',
        '擦痱子膏或熱毛巾止癢。'
      ]},
      {heading:'就醫時機',format:'bullets',items:[
        '保濕後仍癢、紅腫或有傷口。',
        '全身搔癢原因不明。'
      ]}
    ],
    think_tank_view:'冬季保養重點是保濕；紅腫破皮就看皮膚科，避免感染。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'建議引自皮膚科醫師受訪，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的資料'], layout_reason:'精簡為止癢4招、NG行為、就醫時機三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['查無國內盛行率']},
    decision_points:[DP_BATH]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'冬季皮膚癢（乾燥性濕疹）', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'冬季癢是皮膚缺油缺水', primary_visual:'15 分鐘內', secondary_message:'洗完澡立刻保濕', action_priority:'止癢 4 招'},
    headline_hook:'冬天越抓越癢？', headline_main:'冬季癢，做好這 4 件事', title_accent:'這 4 件事',
    hero_message:'洗澡 15 分鐘內', hero_support:'水溫不超過體溫（皮膚科醫師建議）',
    primary_stat:{value:'15 分鐘內', label:'建議洗澡時間', note:'長庚皮膚科醫師受訪，2026 年'},
    action_title:'止癢這樣做',
    action_cards:[
      {key:'洗', text:'水溫不超過體溫，洗澡 15 分鐘內'},
      {key:'擦', text:'擦乾後馬上塗乳霜，趁皮膚微濕鎖水'},
      {key:'拍', text:'癢了輕拍或冰敷，不抓、不用熱毛巾'},
      {key:'醫', text:'紅腫、破皮或擦了仍癢，看皮膚科'}
    ],
    notice:'中老年人、異位性皮膚炎與**糖尿病**患者，抓破皮更容易感染。',
    carousel_suggestion:{reason:'若想把成因、NG行為與照護方法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'冬季癢怎麼來', headline_main:'皮膚缺油又缺水'},
      {layout_type:'knowledge', headline_hook:'越做越癢', headline_main:'這 3 個 NG 習慣'},
      {layout_type:'action', headline_hook:'止癢 4 招', headline_main:'洗完澡立刻保濕'}]},
    hashtags:['冬季癢','乾燥性濕疹','皮膚保濕','熟齡保養'],
    sources:['聯合報（長庚皮膚科醫師）','食藥署藥物食品安全週報（媒體轉載）'],
    illustration_category:'general',
    illustration:{topic:'冬季皮膚保濕', audience:'熟齡長輩與家人', scene:'一位長者洗完澡穿著棉質衣服，坐在床邊為小腿塗抹乳霜，窗外是冬天',
      emotion:'舒緩、溫暖', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult in a cotton shirt sitting on the bed applying moisturizing cream to their lower leg after a bath, winter outside the window, soothing and warm, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['洗澡時間取自聯合報2026年長庚皮膚科醫師受訪'],
      layout_reason:'冬季癢以自我照護為主、查無盛行率，選 action：4 個照護行動當主角，以洗澡時間作為唯一數字。',
      tone:'專業易懂', tone_reason:'照護做法需具體。',
      to_verify:['15分鐘為單一醫師建議，非正式指引']},
    decision_points:[Object.assign({}, DP_BATH, {current:'15 分鐘內｜建議洗澡時間'})],
    content_check_note:'建議引自皮膚科醫師受訪並標明年份，未寫盛行數字，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'冬季皮膚癢（乾燥性濕疹）',
    collect:{
      summary:'冬季癢（乾燥性濕疹）每年天氣轉冷時固定出現，中老年人與慢性病患者最常受影響；查無國內盛行率官方統計，但洗澡、保濕等照護方法明確可行，適合列入冬季時令溝通。',
      objective_data:[
        {item:'盛行率／發生率',desc:'查無國內冬季癢盛行率或就醫人數的官方統計：皮膚科醫師指出，冬季癢在老年人較常見、發生率隨年齡增高，最常見於小腿前側，嚴重時大腿、軀幹與手臂也會出現。',tag:'市場觀察',source:{name:'早安健康：冬季癢越抓越癢無限輪迴！食藥署教3招',url:'https://www.edh.tw/article/20640'}},
        {item:'年度趨勢方向',desc:'每年冬季固定出現：天氣轉冷時皮脂與汗腺分泌減少，加上室內暖氣加速水分蒸發，是季節性反覆發生的皮膚問題，無長期趨勢統計。',tag:'市場觀察',source:{name:'聯合報：冬天防皮膚乾癢 洗澡後擦乳液更鎖水',url:'https://udn.com/news/story/7266/9273317'}},
        {item:'政策動向',desc:'15分鐘內完成洗澡：長庚皮膚科醫師2026年建議水溫不超過體溫、洗澡控制在15分鐘內，擦乾後立刻塗抹保濕品，食藥署安全週報也曾提醒「越抓越癢、越癢越抓」。',tag:'市場觀察',source:{name:'聯合報：冬天防皮膚乾癢 洗澡後擦乳液更鎖水',url:'https://udn.com/news/story/7266/9273317'}},
        {item:'好發族群年齡層',desc:'中老年人最常見：皮脂分泌隨年齡下降，異位性皮膚炎、糖尿病及肝腎功能不全者抓出傷口後容易惡化，反覆搔抓可能引發蜂窩性組織炎。',tag:'市場觀察',source:{name:'聯合報：冬天防皮膚乾癢 洗澡後擦乳液更鎖水',url:'https://udn.com/news/story/7266/9273317'}}
      ],
      product_view:['機會：可作為熟齡保戶冬季關懷內容，傳遞貼近生活的照護資訊。','機會：連結糖尿病、慢性腎臟病等慢性病患者的皮膚照護提醒。','風險：避免推薦特定保養品或藥膏，用藥應由醫師評估。'],
      marketing_view:['機會：每年寒流來襲時是固定溝通檔期，可列入時令內容表。','機會：「浴室放一瓶乳液」這類小行動容易分享。','風險：避免誇大保養品止癢效果，不得出現療效保證用語。'],
      alert_level:'low',
      alert_reason:'屬季節性生活健康議題，無急迫時效事件，適合每年入冬時溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('長庚醫院皮膚科醫師指出','SOURCE_EVIDENCE','single_expert',
          '高風險族群的說法來自單一醫師受訪，文中未標示報導年份，讀者無法判斷資料時點。','low','no',
          null,'no','clarify','屬出處層級說明。',
          '長庚醫院皮膚科醫師2026年受訪指出'),
        F('也可能與糖尿病、肝腎疾病有關','MEDICAL_INTERPRETATION','differential_diagnosis',
          '全身搔癢的鑑別診斷不只糖尿病與肝腎疾病，條列可能讓讀者過度自我診斷或忽略其他原因。','low','no',
          null,'no','clarify','建議以「需由醫師評估原因」為主。',
          '也可能與全身性疾病有關，原因需由醫師評估'),
        F('就能減少大部分不適','MEDICAL_INTERPRETATION','outcome_overstatement',
          '「大部分」缺乏數據支持，屬效果推論。','low','no',
          null,'no','revise','避免效果量化暗示。',
          '有助減少乾癢不適'),
        F('時間控制在15分鐘內','SOURCE_EVIDENCE','single_expert',
          '15分鐘為單一醫師建議，表格與內文未說明出處層級。','low','no',
          null,'no','clarify','非正式臨床指引。',
          '時間控制在15分鐘內（皮膚科醫師建議）')
      ],
      card:[
        F('水溫不超過體溫，洗澡 15 分鐘內','SOURCE_EVIDENCE','single_expert',
          '行動卡數字為單一醫師建議，卡面未標出處。','low','no',
          null,'no','clarify','卡面上方已標「皮膚科醫師建議」，可於來源欄補報導年份。',
          '水溫不超過體溫，洗澡 15 分鐘內（醫師建議）'),
        F('擦乾後馬上塗乳霜，趁皮膚微濕鎖水','TERMINOLOGY_LANGUAGE','ambiguous_instruction',
          '「擦乾」與「微濕」並列，讀者可能不知道要擦到什麼程度。','low','no',
          null,'no','revise','屬用語清晰度。',
          '輕拍擦乾後馬上塗乳霜，鎖住水分')
      ]
    },
    title_alts:[
      '冬季癢越抓越癢？洗澡與保濕做對，皮膚不再乾裂',
      '一到冬天小腿就癢到抓破？保濕這樣做',
      '乾燥性濕疹好發熟齡：冬季皮膚照護4招'
    ],
    card_title_alts:[
      ['冬天越抓越癢？','冬季癢，做好這 4 件事'],
      ['小腿乾到起白屑？','冬季保濕 4 招'],
      ['冬季癢不是小事','洗完澡立刻保濕']
    ],
    data_addon:[
      '冬季癢最常見於小腿前側，嚴重時大腿、軀幹、手臂也會出現。',
      '皮膚科醫師建議清潔一天一次通常足夠，長輩可視情況調整。',
      '皮膚紅腫癢已屬發炎，反覆搔抓恐有蜂窩性組織炎的危險。'
    ],
    cta:'今天就在浴室放一瓶乳液，洗完澡擦乾馬上擦；家中長輩的洗澡水溫也一起調低一點。'
  });
})();
