/* v6 示範主題：狂犬病與動物咬傷（B8 傳染病防治）
   查證日期：2026-11-20。數據來源：疾管署與農業部防檢署新聞稿（2026-02-10，衛福部網站轉載）。
   參考方向：健康智庫〈被狗咬傷？當心傳染病與健康風險！〉2025/03。 */
(function(){
  const REFS = [
    {title:'戶外活動勿觸碰或逗弄野生動物 遠離狂犬病威脅',source:'衛生福利部疾病管制署',url:'https://mohw.gov.tw/cp-16-85414-1.html'}
  ];
  const TABLE = {headers:['步驟','怎麼做'], rows:[
    ['1. 沖','以肥皂及大量流動清水沖洗傷口至少15分鐘'],
    ['2. 消毒','以優碘或70%酒精消毒傷口'],
    ['3. 就醫','儘速前往人用狂犬病疫苗接種服務醫院或衛生所'],
    ['4. 評估接種','醫師評估有風險時，接種免疫球蛋白與4劑疫苗（第0、3、7、14天）']
  ]};
  const TAGS = ['狂犬病','動物咬傷','鼬獾','傷口處理','寵物疫苗'];

  const DP_HUMAN = {id:'dp-rabies-human', type:'tone', title:'「台灣沒有人得狂犬病」的說法',
    desc:'疾管署統計2002年以來人類狂犬病3例，皆為境外移入；但野生動物（主要是鼬獾）仍持續檢出。寫成「台灣沒有狂犬病」不正確，寫成「人有感染風險」又可能造成恐慌，AI 保留了較中性的說法，供你決定是否調整。',
    current:'人類病例皆為境外移入，但野生動物仍持續檢出',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'3 例（境外移入）', value:'人類病例 2002 年以來', note:'2002、2012、2013年各1例，均死亡'},
      {label:'137 件', value:'動物確診 2023 年至 2026 年 1 月', note:'鼬獾136件、白鼻心1件'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'被動物咬傷怎麼辦？先沖洗15分鐘再就醫，狂犬病發病後致死率近100%',
    update_date:'2026/11/20',
    intro:'疾病管制署與農業部防檢署公布，2023年至2026年1月共監測動物檢體2,597件，確診狂犬病137件，其中鼬獾136件、白鼻心1件，台灣狂犬病仍侷限於野生動物。國內自2002年以來累計3例人類感染，皆為境外移入且均不幸死亡；疾管署提醒，如未及時採取醫療措施，發病後致死率近100%。本文整理被動物抓咬傷後的處理步驟與預防原則。',
    sections:[
      {heading:'被抓咬傷後4步驟',format:'table',table:TABLE},
      {heading:'哪些情況要特別警覺',format:'bullets',items:[
        '每年10月至翌年3月是鼬獾活動頻繁季節，中低海拔山麓丘陵帶為主要活動區域。',
        '遇到行為異常（如不怕人、主動攻擊）、動作狂躁或傷亡的鼬獾，應立即遠離並通知在地動物防疫機關。',
        '出國前往狂犬病流行地區，應避免接觸犬、貓等動物。'
      ]},
      {heading:'「二不一要」預防原則',format:'bullets',items:[
        '不棄（放）養家中寵物。',
        '不接觸、捕捉及飼養野生動物。',
        '要定期帶犬貓及人工飼養之食肉目動物施打狂犬病疫苗。'
      ]}
    ],
    think_tank_view:'狂犬病一旦發病幾乎無法挽回，但在發病前完成暴露後預防接種就能保護自己。被動物抓咬傷時，第一時間沖洗15分鐘、儘速就醫評估，比自行判斷「應該沒事」重要得多；家中寵物按時接種，則是替自己和社區築起第一道防線。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'監測數字與人類病例引自疾管署與防檢署新聞稿並標明年份，處置步驟引自疾管署，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['2023年至2026年1月動物確診137件（疾管署、防檢署2026-02-10新聞稿）','2002年以來人類病例3例皆境外移入'],
      layout_reason:'核心是被咬傷後的處理步驟，先用表格列出4步驟，再說明警覺情境，最後給預防原則。',
      tone:'專業易懂', tone_reason:'緊急處理資訊需步驟明確。',
      to_verify:['動物咬傷就醫或暴露後接種的年度人數未查到官方統計']},
    decision_points:[DP_HUMAN]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爬山遇到鼬獾別靠近！被動物咬傷先沖水15分鐘',
    update_date:'2026/11/20',
    intro:'台灣的狂犬病目前主要出現在野生的鼬獾身上。疾管署和防檢署統計，2023年到2026年1月共確診137件動物狂犬病，幾乎都是鼬獾。人類病例自2002年以來只有3例，都是在國外被感染；但狂犬病一旦發病，幾乎無法救回，所以被動物咬到一定要認真處理。',
    sections:[
      {heading:'被咬傷了，照這4步驟做',format:'table',table:TABLE},
      {heading:'出門在外要注意',format:'bullets',items:[
        '秋冬到春天（10月到隔年3月）是鼬獾常出沒的季節，爬山時多留意。',
        '看到不怕人、會主動攻擊或受傷的鼬獾，趕快離開並通報。',
        '出國時不要隨便摸路邊的狗、貓。'
      ]},
      {heading:'養寵物的你可以這樣做',format:'bullets',items:[
        '不要棄養寵物。',
        '不抓、不摸、不養野生動物。',
        '定期帶狗狗、貓咪打狂犬病疫苗。'
      ]}
    ],
    think_tank_view:'被咬傷時別慌，先用肥皂和大量清水沖15分鐘，再到醫院讓醫師判斷要不要打疫苗。帶毛孩按時打疫苗，也是保護全家人的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，語氣親切但未淡化風險，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以爬山與養寵物情境帶出步驟與預防。', tone:'生活親切', tone_reason:'給登山客與飼主閱讀。', to_verify:[]},
    decision_points:[DP_HUMAN]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'被動物咬傷：沖洗15分鐘＋就醫評估',
    update_date:'2026/11/20',
    intro:'2023年至2026年1月動物狂犬病確診137件，幾乎都是鼬獾。發病後致死率近100%，咬傷後要立即處理。',
    sections:[
      {heading:'4步驟',format:'table',table:TABLE},
      {heading:'預防',format:'bullets',items:[
        '遠離野生動物，異常鼬獾立即通報。',
        '犬貓定期施打狂犬病疫苗。'
      ]}
    ],
    think_tank_view:'沖洗、消毒、就醫評估，一步都不能省。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自疾管署並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為步驟與預防兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_HUMAN]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'狂犬病與動物咬傷', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'被動物抓咬傷先沖洗 15 分鐘再就醫', primary_visual:'15 分鐘', secondary_message:'發病後致死率近 100%', action_priority:'沖、消毒、就醫、評估接種'},
    headline_hook:'被動物抓咬傷？', headline_main:'先沖洗 15 分鐘再就醫', title_accent:'15 分鐘',
    hero_message:'沖洗至少 15 分鐘', hero_support:'肥皂＋大量流動清水（疾管署）',
    primary_stat:{value:'137 件', label:'動物狂犬病確診', note:'2023 年至 2026 年 1 月｜鼬獾 136 件、白鼻心 1 件'},
    action_title:'被抓咬傷 4 步驟',
    action_cards:[
      {key:'沖', text:'肥皂加大量流動清水沖洗至少 15 分鐘'},
      {key:'消', text:'以優碘或 70% 酒精消毒'},
      {key:'醫', text:'儘速到狂犬病疫苗接種服務醫院'},
      {key:'打', text:'依醫師評估接種疫苗與免疫球蛋白'}
    ],
    notice:'鼬獾活動期 **10 月至翌年 3 月**，異常鼬獾立即遠離並通報。',
    carousel_suggestion:{reason:'若想把處理步驟、野生動物與寵物疫苗分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'action', headline_hook:'被動物抓咬傷？', headline_main:'先沖洗 15 分鐘再就醫'},
      {layout_type:'data', headline_hook:'狂犬病在野生動物', headline_main:'鼬獾確診 136 件'},
      {layout_type:'knowledge', headline_hook:'二不一要', headline_main:'寵物按時打疫苗'}]},
    hashtags:['狂犬病','動物咬傷','鼬獾','傷口處理'],
    sources:['衛生福利部疾病管制署','農業部動植物防疫檢疫署'],
    illustration_category:'general',
    illustration:{topic:'動物咬傷處理', audience:'登山客與寵物飼主', scene:'一位登山客在溪邊水龍頭用肥皂和清水沖洗手上的小傷口，遠處山林間有一隻小動物',
      emotion:'冷靜、有準備', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A hiker rinsing a small wound on the hand with soap and running water at an outdoor tap, a small wild animal far away in the hills, calm and prepared, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['動物確診137件（疾管署、防檢署2026年新聞稿）','處置步驟與疫苗時程取自同一新聞稿'],
      layout_reason:'關鍵訊息是「咬傷後立即處理」，選 action：沖洗時間當 hero，4 步驟當主角，動物確診數退到下方。',
      tone:'專業易懂', tone_reason:'急救步驟要好記。',
      to_verify:['137件為跨年度累計（2023年至2026年1月）']},
    decision_points:[Object.assign({}, DP_HUMAN, {current:'137 件｜2023 年至 2026 年 1 月動物確診'})],
    content_check_note:'監測數字與步驟引自疾管署、防檢署並標明期間，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'狂犬病與動物咬傷',
    collect:{
      summary:'台灣狂犬病仍侷限於野生動物，2023年至2026年1月共確診137件、幾乎都是鼬獾，人類病例自2002年以來3例皆為境外移入；發病後致死率近100%，「被抓咬傷先沖洗15分鐘、儘速就醫評估」是登山與飼主族群值得長期溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'137件：疾管署與防檢署公布，2023年至2026年1月共監測動物檢體2,597件，確診狂犬病137件，其中鼬獾136件、白鼻心1件，鼬獾為主要保毒宿主。',tag:'官方統計',source:{name:'衛生福利部：戶外活動勿觸碰或逗弄野生動物 遠離狂犬病威脅',url:'https://mohw.gov.tw/cp-16-85414-1.html'}},
        {item:'年度趨勢方向',desc:'3例人類病例皆為境外移入：國內自2002年以來累計3例人類感染狂犬病，分別於2002年、2012年及2013年，均不幸死亡，此後未再出現人類病例。',tag:'官方統計',source:{name:'衛生福利部：戶外活動勿觸碰或逗弄野生動物 遠離狂犬病威脅',url:'https://mohw.gov.tw/cp-16-85414-1.html'}},
        {item:'政策動向',desc:'4劑人用狂犬病疫苗：被抓咬傷經醫師評估有風險時，應儘速接種免疫球蛋白，並依第0、3、7、14天時程接種4劑疫苗，可至人用狂犬病疫苗接種服務醫院或衛生所就醫。',tag:'官方統計',source:{name:'衛生福利部：戶外活動勿觸碰或逗弄野生動物 遠離狂犬病威脅',url:'https://mohw.gov.tw/cp-16-85414-1.html'}},
        {item:'好發族群年齡層',desc:'鼬獾活動期為每年10月至翌年3月：中低海拔山麓丘陵帶為主要活動區域，登山、郊遊與鄉間居民是較可能接觸的族群，飼主應定期帶犬貓施打狂犬病疫苗。',tag:'官方統計',source:{name:'衛生福利部：戶外活動勿觸碰或逗弄野生動物 遠離狂犬病威脅',url:'https://mohw.gov.tw/cp-16-85414-1.html'}}
      ],
      product_view:['機會：登山、戶外活動族群可結合意外傷害與醫療保障的衛教說明。','機會：寵物飼主是可經營的族群，可提供「寵物疫苗與咬傷處理」衛教。','風險：避免誇大狂犬病在人類的風險，並依保單條款如實說明。'],
      marketing_view:['機會：10月至翌年3月鼬獾活動季與秋冬登山季重疊，是溝通時點。','機會：「沖洗15分鐘」是好記的急救訊息。','風險：避免造成對犬貓或野生動物的恐慌與不當驅趕。'],
      alert_level:'low',
      alert_reason:'人類病例罕見但致死率極高，屬長期衛教議題，適合在秋冬登山季前溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('出國前往狂犬病流行地區，應避免接觸犬、貓等動物','SOURCE_EVIDENCE','claim_without_source',
          '本句不在引用的疾管署2026年新聞稿中，文章參考資料也沒有對應的旅遊醫學來源。','low','yes',
          '疾管署國際旅遊疫情建議或旅遊醫學門診的狂犬病說明。','no','confirm','建議內容合理，但需補對應出處。',
          '出國前往狂犬病流行地區，應避免接觸犬、貓等動物（可參考疾管署國際旅遊疫情建議）'),
        F('狂犬病發病後致死率近100%','COMPLIANCE_RISK','fear_appeal',
          '專業易懂版標題把「發病後致死率近100%」放在標題，但省略了內文的前提「如未及時採取醫療措施」，也沒提到國內人類病例極少，容易形成恐懼訴求。','low','no',
          null,'no','clarify','數字引述正確，屬標題語氣問題。',
          '及早接種可預防狂犬病發病'),
        F('人類病例自2002年以來只有3例，都是在國外被感染','MEDICAL_INTERPRETATION','risk_minimization',
          '生活親切版強調「只有3例」，可能讓讀者低估被野生動物咬傷的風險；應同時提醒動物仍持續檢出。','low','no',
          null,'no','clarify','屬語氣平衡問題。',
          '人類病例自2002年以來有3例，都是在國外被感染，但國內野生動物仍持續檢出狂犬病'),
        F('幾乎都是鼬獾','TERMINOLOGY_LANGUAGE','vague_quantifier',
          '簡潔有力版用「幾乎都是」，沒有寫出136/137的具體數字，讀者無法判斷比例。','low','no',
          null,'no','clarify','數字明確，直接寫出即可。',
          '其中鼬獾136件')
      ],
      card:[
        F('動物狂犬病確診','SOURCE_EVIDENCE','period_unclear',
          '主數字標籤沒有期間，期間只在小字註腳；讀者可能以為是單一年度的數字。','low','no',
          null,'no','clarify','把期間放進標籤。',
          '動物狂犬病確診（2023–2026.1 累計）'),
        F('依醫師評估接種疫苗與免疫球蛋白','TERMINOLOGY_LANGUAGE','detail_missing',
          '行動卡沒有提到疫苗需要依第0、3、7、14天完成4劑，讀者可能只打1劑就以為完成。','low','no',
          null,'no','clarify','可在通知區或行動卡補上劑數。',
          '依醫師評估接種，疫苗共 4 劑要打完')
      ]
    },
    title_alts:[
      '被動物咬傷怎麼辦？先沖洗15分鐘再就醫，狂犬病發病後致死率近100%',
      '爬山遇到鼬獾別靠近！被動物咬傷先沖水15分鐘',
      '台灣狂犬病在哪裡？野生動物監測與被咬傷後的4步驟'
    ],
    card_title_alts:[
      ['被動物抓咬傷？','先沖洗 15 分鐘再就醫'],
      ['爬山遇到鼬獾','別靠近、別觸碰'],
      ['二不一要','寵物按時打狂犬病疫苗']
    ],
    data_addon:[
      '2023年至2026年1月動物狂犬病監測2,597件、確診137件（鼬獾136、白鼻心1）。',
      '人類狂犬病：2002年、2012年、2013年各1例，皆境外移入、均死亡。',
      '疫苗時程：第0、3、7、14天共4劑，傷口暴露後接種第1劑當天為第0天。'
    ],
    cta:'把「沖洗15分鐘、消毒、就醫」記在手機備忘錄；家裡毛孩的狂犬病疫苗，這個月就確認一下有沒有過期。'
  });
})();
