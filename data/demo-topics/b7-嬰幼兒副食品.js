/* v6 示範主題：嬰幼兒副食品（B7 女性・男性・生育與兒童）
   查證日期：2026-11-21。數據來源：衛福部網站轉載之國民健康局衛教（2008-06-16、2011-01-16、2012-10-01）。
   查無國健署2013年以後的副食品新聞稿；蜂蜜、質地進程等未查到官方說明，未寫。2008年衛教的「果汁稀釋餵食」建議未採用。
   參考方向：健康智庫〈寶寶副食品指南：健康發展不卡關！〉2025/04。 */
(function(){
  const REFS = [
    {title:'何時添加副食品較好？國健局與專家提出剖析！',source:'衛生福利部',url:'https://www.mohw.gov.tw/fp-16-25780-1.html'},
    {title:'吃得對，哺乳寶寶「鐵」定更健康',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-28405-1.html'},
    {title:'母乳媽媽別煩惱：副食品添加時機，國健局講詳細',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-23956-1.html'}
  ];
  const TABLE = {headers:['重點','說明'], rows:[
    ['開始時機','建議純母乳哺育到6個月，之後添加副食品並持續哺乳'],
    ['可提早的情況','奶水明顯不足、寶寶吃不飽等，可考慮滿4個月後開始'],
    ['準備好的徵兆','頸部挺直、扶持可坐、咀嚼時頭不晃、舌頭不再把食物頂出'],
    ['補充鐵質','6個月左右寶寶鐵存量不足，應給予富含鐵質的食物'],
    ['7個月起','加入蛋黃、紅肉、豬肝等富含鐵質的蛋豆魚肉類']
  ]};
  const TAGS = ['副食品','嬰幼兒營養','補鐵','新手爸媽','親子育兒'];

  const DP_AGE = {id:'dp-solids-age', type:'data_version', title:'4個月還是6個月開始',
    desc:'國際上有「4個月」與「6個月」兩種建議；衛福部轉載的國民健康局衛教（2011、2012）採用純母乳哺育到6個月，在特定情況下可考慮滿4個月後開始。這些衛教距今已十多年，AI 沒有用其他來源改寫建議時機。',
    current:'純母乳哺育到6個月後添加副食品（國民健康局衛教）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'6 個月', value:'我國建議', note:'國民健康局2011、2012年衛教（目前採用）'},
      {label:'滿 4 個月後', value:'特定情況', note:'奶水不足、寶寶吃不飽且神經發展準備好'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'副食品什麼時候開始？6個月前後的判斷重點與補鐵原則',
    update_date:'2026/11/21',
    intro:'衛福部網站轉載的國民健康局衛教建議，以純母乳哺育到6個月，之後添加副食品並持續哺乳；若奶水明顯不足或寶寶吃不飽，可考慮滿4個月後開始，但前提是寶寶的神經發展已準備好。衛教也指出，6個月左右寶寶體內的鐵存量不足，無論喝母乳或配方奶，都應給予富含鐵質的食物。',
    sections:[
      {heading:'副食品添加重點',format:'table',table:TABLE},
      {heading:'寶寶準備好了嗎',format:'bullets',items:[
        '台灣母乳哺育聯合學會理事長指出，寶寶頸部挺直、扶持可維持坐姿、咀嚼時頭不晃動。',
        '用湯匙餵食時，舌頭不會一直把食物頂出。',
        '滿4個月之前不要給任何副食品、水或配方奶（純母乳哺育者）。'
      ]},
      {heading:'補鐵與飲食提醒',format:'bullets',items:[
        '傳統「大骨湯煮稀飯加蔬菜、吻仔魚」容易造成鐵攝取不足。',
        '7個月起開始給予蛋豆魚肉類時，多提供蛋黃、紅肉及豬肝等富含鐵質的食物。',
        '市售果汁常添加糖，不適合餵食寶寶。'
      ]}
    ],
    think_tank_view:'副食品不只是「讓寶寶吃飽」，更是補鐵與學習進食的關鍵階段。比起糾結4個月或6個月，更重要的是觀察寶寶是否準備好，並在副食品中放入富含鐵質的食物；有疑問時，帶著寶寶的生長曲線和兒科醫師討論最可靠。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'建議引自衛福部轉載之國民健康局衛教並已標示年份較舊，未推薦特定副食品產品，未使用療效保證用語。',
    ai_rationale:{basis:['6個月、4個月條件、神經發展徵兆（國民健康局2011年衛教）','鐵質與蛋黃紅肉豬肝（國民健康局2008年衛教）'],
      layout_reason:'先用表格整理添加重點，再說明準備好的徵兆，最後給補鐵提醒。',
      tone:'專業易懂', tone_reason:'新手父母需要可判斷的具體指標。',
      to_verify:['官方衛教為2008至2012年，查無國健署更新版','蜂蜜、質地進程、過敏原引入未查到官方說明']},
    decision_points:[DP_AGE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'寶寶要吃副食品了嗎？看這4個徵兆、記得補鐵',
    update_date:'2026/11/21',
    intro:'寶寶快半歲，爸媽開始煩惱：副食品什麼時候開始？衛福部的衛教建議，喝母乳的寶寶大約6個月後開始吃副食品；如果奶水不夠、寶寶吃不飽，也可以在滿4個月後和醫師討論提早開始。最重要的是，寶寶到了6個月左右，身體裡的鐵快用完了，要記得補鐵。',
    sections:[
      {heading:'副食品小抄',format:'table',table:TABLE},
      {heading:'寶寶準備好的4個徵兆',format:'bullets',items:[
        '脖子挺得直。',
        '扶著可以坐穩。',
        '咀嚼時頭不會晃。',
        '湯匙餵食時，舌頭不再把食物推出來。'
      ]},
      {heading:'補鐵小提醒',format:'bullets',items:[
        '大骨湯稀飯鐵質不夠，要加點蛋黃或紅肉。',
        '市售果汁常加糖，不適合給寶寶喝。'
      ]}
    ],
    think_tank_view:'每個寶寶準備好的時間不一樣，觀察寶寶的反應，比照著日曆更重要。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自衛福部轉載之國民健康局衛教，語氣親切，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以爸媽的煩惱帶出徵兆與補鐵。', tone:'生活親切', tone_reason:'給新手爸媽閱讀。', to_verify:[]},
    decision_points:[DP_AGE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'副食品：6個月開始、記得補鐵',
    update_date:'2026/11/21',
    intro:'國民健康局衛教建議純母乳到6個月後添加副食品；6個月左右寶寶鐵存量不足，要給富含鐵質的食物。',
    sections:[
      {heading:'重點',format:'table',table:TABLE},
      {heading:'提醒',format:'bullets',items:[
        '觀察寶寶準備好的徵兆。',
        '7個月起加入蛋黃、紅肉。'
      ]}
    ],
    think_tank_view:'看徵兆、補鐵質，副食品順利起步。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容引自國民健康局衛教，未推薦特定產品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為重點與提醒兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_AGE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'嬰幼兒副食品', output_mode:'single', layout_type:'action',
    communication_priority:{primary_message:'6 個月左右開始副食品並補鐵', primary_visual:'6 個月', secondary_message:'看寶寶準備好的徵兆', action_priority:'看徵兆、補鐵、少糖'},
    headline_hook:'寶寶要吃副食品了嗎？', headline_main:'看徵兆、記得補鐵', title_accent:'補鐵',
    hero_message:'約 6 個月開始添加', hero_support:'持續哺乳（國民健康局衛教）',
    primary_stat:{value:'6 個月', label:'寶寶體內鐵存量漸不足', note:'國民健康局衛教｜母乳或配方奶寶寶都要補鐵'},
    action_title:'副食品這樣開始',
    action_cards:[
      {key:'看', text:'頸部挺直、扶坐穩、不頂出食物'},
      {key:'鐵', text:'給予富含鐵質的食物'},
      {key:'肉', text:'7 個月起加入蛋黃、紅肉、豬肝'},
      {key:'糖', text:'不給市售加糖果汁'}
    ],
    notice:'奶水不足或寶寶吃不飽，可和醫師討論**滿 4 個月後**提早開始。',
    carousel_suggestion:{reason:'若想把開始時機、徵兆與補鐵分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'4 個月還是 6 個月？', headline_main:'副食品開始時機'},
      {layout_type:'knowledge', headline_hook:'寶寶準備好了嗎', headline_main:'4 個徵兆'},
      {layout_type:'action', headline_hook:'記得補鐵', headline_main:'蛋黃、紅肉、豬肝'}]},
    hashtags:['副食品','嬰幼兒營養','補鐵','新手爸媽'],
    sources:['衛生福利部（國民健康局衛教）'],
    illustration_category:'nutrition',
    illustration:{topic:'寶寶副食品', audience:'新手爸媽', scene:'坐在餐椅上的寶寶張嘴準備吃湯匙上的副食品，家長在旁微笑餵食',
      emotion:'溫馨、有趣', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A baby in a high chair opening its mouth for a spoonful of puree while a smiling parent feeds it, warm and playful, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['開始時機、徵兆與補鐵（國民健康局2008至2012年衛教）'],
      layout_reason:'關鍵是可執行的開始步驟，選 action：4 個行動當主角，開始時機當 hero，鐵存量退到下方。',
      tone:'專業易懂', tone_reason:'具體好記。',
      to_verify:['官方衛教年份較舊']},
    decision_points:[Object.assign({}, DP_AGE, {current:'約 6 個月開始（國民健康局衛教）'})],
    content_check_note:'內容引自國民健康局衛教，未推薦特定產品，未使用療效保證用語。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'嬰幼兒副食品',
    collect:{
      summary:'衛福部轉載的國民健康局衛教建議純母乳哺育到6個月後添加副食品，特定情況可滿4個月後開始，並提醒6個月左右寶寶鐵存量不足、應補充富含鐵質的食物；官方衛教年份較舊，「看徵兆、補鐵、少糖」是新手家庭值得溝通的育兒議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'6個月左右鐵存量不足：國民健康局衛教指出，寶寶6個月左右體內鐵存量不夠，無論喝母乳或配方奶都應給予富含鐵質的食物（2008年衛教）。',tag:'官方統計',source:{name:'衛生福利部：吃得對，哺乳寶寶「鐵」定更健康',url:'https://mohw.gov.tw/cp-16-28405-1.html'}},
        {item:'年度趨勢方向',desc:'4個月與6個月兩種建議：國際間有兩種副食品開始時機的建議，我國國民健康局採用純母乳哺育到6個月，之後添加副食品並持續哺乳（2012年衛教）。',tag:'官方統計',source:{name:'衛生福利部：母乳媽媽別煩惱：副食品添加時機，國健局講詳細',url:'https://mohw.gov.tw/cp-16-23956-1.html'}},
        {item:'政策動向',desc:'滿4個月後可考慮提早：純餵到6個月有困難、奶水明顯降低、寶寶吃不飽或主動要求其他食物時，可考慮滿4個月後開始，前提是神經發展已準備好（2011年衛教）。',tag:'官方統計',source:{name:'衛生福利部：何時添加副食品較好？國健局與專家提出剖析！',url:'https://www.mohw.gov.tw/fp-16-25780-1.html'}},
        {item:'好發族群年齡層',desc:'7個月起加入蛋豆魚肉類：國民健康局衛教建議7個月起多提供蛋黃、紅肉及豬肝等富含鐵質的食物，並提醒傳統大骨湯稀飯容易造成鐵攝取不足。',tag:'官方統計',source:{name:'衛生福利部：吃得對，哺乳寶寶「鐵」定更健康',url:'https://mohw.gov.tw/cp-16-28405-1.html'}}
      ],
      product_view:['機會：新手家庭是保障規劃關鍵時點，可搭配育兒營養衛教。','風險：不推薦特定副食品、營養品或品牌。','風險：避免提供個別嬰兒的營養建議，以兒科醫師評估為準。'],
      marketing_view:['機會：寶寶滿4至6個月是自然的溝通時點。','機會：「大骨湯稀飯鐵不夠」是破除迷思型內容。','風險：避免讓選擇不同開始時機的家長感到被評價。'],
      alert_level:'low',
      alert_reason:'屬長期育兒營養議題，官方衛教年份較舊，適合納入親子族群溝通並提醒依醫師建議。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('衛福部網站轉載的國民健康局衛教建議','CURRENCY_TIMELINESS','old_guidance',
          '引用的衛教發布於2008至2012年（國民健康局時期），文章沒有標示年份，讀者可能以為是最新官方建議。','medium','yes',
          '國健署現行嬰幼兒飲食或副食品衛教手冊。','yes','confirm','建議方向可能仍適用，但需確認現行版本。',
          '衛福部網站轉載的國民健康局衛教（2011至2012年）建議'),
        F('滿4個月之前不要給任何副食品、水或配方奶（純母乳哺育者）','SOURCE_EVIDENCE','source_unstated',
          '這句出自2011年衛教中台灣母乳哺育聯合學會理事長的說法，文章沒有標示出處。','low','no',
          null,'no','clarify','補上出處即可。',
          '台灣母乳哺育聯合學會建議，滿4個月之前不要給任何副食品、水或配方奶（純母乳哺育者）'),
        F('衛福部的衛教建議，喝母乳的寶寶大約6個月後開始吃副食品','CURRENCY_TIMELINESS','old_guidance',
          '生活親切版沒有說明衛教年份較舊。','low','no',
          null,'no','clarify','補上年份即可。',
          '衛福部轉載的2011年衛教建議，喝母乳的寶寶大約6個月後開始吃副食品'),
        F('國民健康局衛教建議純母乳到6個月後添加副食品','CURRENCY_TIMELINESS','old_guidance',
          '簡潔有力版沒有說明這是十多年前的衛教。','low','no',
          null,'no','clarify','補上年份即可。',
          '國民健康局（2011）衛教建議純母乳到6個月後添加副食品')
      ],
      card:[
        F('持續哺乳（國民健康局衛教）','CURRENCY_TIMELINESS','old_guidance',
          '卡面出處寫「國民健康局」但沒有年份，讀者可能不知道是2011年前的資料。','low','no',
          null,'no','clarify','補上年份即可。',
          '持續哺乳（國民健康局 2011–2012 年衛教）'),
        F('寶寶體內鐵存量漸不足','MEDICAL_INTERPRETATION','oversimplified',
          '主數字「6 個月」的標籤容易被讀成「6個月一定缺鐵」，原文是鐵存量不足、應給予富含鐵質食物。','low','no',
          null,'no','clarify','改為行動導向的說法。',
          '開始給予富含鐵質的食物')
      ]
    },
    title_alts:[
      '副食品什麼時候開始？6個月前後的判斷重點與補鐵原則',
      '寶寶要吃副食品了嗎？看這4個徵兆、記得補鐵',
      '嬰幼兒副食品入門：開始時機、準備徵兆與鐵質補充'
    ],
    card_title_alts:[
      ['寶寶要吃副食品了嗎？','看徵兆、記得補鐵'],
      ['4 個月還是 6 個月？','副食品開始時機'],
      ['大骨湯稀飯鐵不夠','加入蛋黃紅肉']
    ],
    data_addon:[
      '國民健康局衛教（2011、2012）：純母乳哺育到6個月後添加副食品，特定情況可滿4個月後開始。',
      '國民健康局衛教（2008）：6個月左右寶寶鐵存量不足，7個月起多提供蛋黃、紅肉、豬肝。',
      '寶寶準備好的徵兆：頸部挺直、扶持可坐、咀嚼時頭不晃、舌頭不頂出食物。'
    ],
    cta:'寶寶接近半歲時，帶著生長曲線和兒科醫師討論副食品開始時機與補鐵方式。'
  });
})();
