/* v6 示範主題：皮膚癌（B2 癌症）
   查證日期：2026-11-20。數據來源：衛福部112年癌症登記報告附表（2025-12-30 公布）、
   工商時報2025-11-12（北榮皮膚部醫師說明ABCDE法則、黑色素瘤每年約200多例）、KingNet國家網路醫藥／癌症希望基金會2026-02-26（台大皮膚部醫師說明皮膚癌類型與防曬）。
   國健署未提供皮膚癌專門衛教新聞稿；類型、警訊與防曬建議皆標明為醫師說明。
   參考方向：健康智庫〈皮膚癌〉2024/02、〈對抗紫外線 遠離皮膚癌〉2023/06。 */
(function(){
  const REFS = [
    {title:'112年國人十大癌症發生人數附表',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'},
    {title:'ABCDE法則，辨識黑色素癌',source:'工商時報',url:'https://www.ctee.com.tw/news/20251112700006-431003'},
    {title:'是痣、斑還是癌？皮膚癌3大類型與徵兆一次看！觀察5變化把握黃金治療期',source:'KingNet國家網路醫藥／癌症希望基金會',url:'https://n.yam.com/Article/20260226830615'}
  ];
  const TABLE = {headers:['類型','特徵'], rows:[
    ['基底細胞癌','最常見，多在臉部、鼻子、眼周等曬得到的部位，早期手術多可治癒'],
    ['鱗狀細胞癌','多在頭頸部與手臂，紅色粗糙、結痂脫屑，常被誤認為皮膚炎'],
    ['黑色素瘤','發生率最低但惡性度最高，亞洲人好發於手掌、腳掌與指甲下']
  ]};
  const TAGS = ['皮膚癌','黑色素瘤','防曬','ABCDE法則','紫外線'];

  const DP_MEL = {id:'dp-sc-melanoma', type:'data_scope', title:'黑色素瘤人數的出處',
    desc:'癌症登記附表只公布「皮膚癌」整體新發4,709人，沒有分類型。「黑色素瘤每年約200多例」出自皮膚科醫師受訪，未標示資料年份；同篇報導中「超過一半會因此過世」也沒有出處，AI 未採用。',
    current:'皮膚癌整體新發4,709人（112年癌登），黑色素瘤人數標為醫師說明',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'4,709人', value:'皮膚癌整體（112年）', note:'癌症登記附表（目前採用）'},
      {label:'200多例', value:'黑色素瘤（每年）', note:'北榮、台大醫師受訪，未標年份'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'皮膚癌一年新發逾4,700人：認識3種類型與ABCDE警訊',
    update_date:'2026/11/20',
    intro:'依衛生福利部112年癌症登記報告，皮膚癌新發4,709人，居國人癌症發生第8位，較111年增加503人，診斷年齡中位數74歲，以高齡族群為主；標準化死亡率每十萬人0.6人，屬死亡率較低的癌症。皮膚科醫師指出，皮膚癌分為基底細胞癌、鱗狀細胞癌與黑色素瘤，其中黑色素瘤人數少但惡性度最高，認得皮膚變化並做好防曬是預防關鍵。',
    sections:[
      {heading:'皮膚癌3大類型',format:'table',table:TABLE},
      {heading:'用ABCDE辨識可疑的痣',format:'bullets',items:[
        'A不對稱、B邊緣不規則、C顏色不均（兩種以上顏色）、D直徑超過0.6公分、E短時間內變大、隆起、破皮或出血。',
        '北榮皮膚科醫師提醒「醜小鴨法則」：身上某顆痣看起來和其他痣特別不同，也應就醫評估。',
        '指甲出現黑色縱紋且顏色、寬度不規則，或色素延伸到甲緣，也是警訊。'
      ]},
      {heading:'防曬與就醫',format:'bullets',items:[
        '台大皮膚科醫師建議避開上午10點到下午2點的強烈紫外線時段，外出穿長袖、戴帽、撐傘。',
        '使用SPF30以上、PA+++的防曬品，每兩小時補擦一次，陰天也要防曬。',
        '傷口長期不癒合、出現不明黑點或痣快速變大，應盡快到皮膚科檢查。'
      ]}
    ],
    think_tank_view:'皮膚癌是少數「看得見」的癌症，自己或家人就能幫忙觀察。洗澡或換衣服時多看一眼身上的痣與斑，長輩的臉部、腳底與指甲也別忽略；平時做好防曬，就是最簡單的預防。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'新發人數、排名與死亡率引自衛福部112年癌症登記附表並標明年份，類型、警訊與防曬建議標明為皮膚科醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['112年皮膚癌新發4,709人、中位數74歲（癌症登記附表）','ABCDE與防曬建議（皮膚科醫師受訪）'],
      layout_reason:'先用表格區分3種類型，再教讀者用ABCDE辨識，最後給防曬與就醫行動。',
      tone:'專業易懂', tone_reason:'辨識方法需要具體標準。',
      to_verify:['皮膚癌各類型占比與黑色素瘤人數需查癌登年報全文','國健署無皮膚癌專門衛教，防曬建議為醫師說明']},
    decision_points:[DP_MEL]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'這顆痣怪怪的？ABCDE教你看懂皮膚癌警訊',
    update_date:'2026/11/20',
    intro:'皮膚癌一年新發4,709人（112年癌症登記），多數是70多歲的長輩。皮膚癌有3種，最常見的是基底細胞癌，最兇的是黑色素瘤。好在皮膚癌「看得見」，平常多留意身上的痣和斑，再把防曬做好，就能幫自己和家人把關。',
    sections:[
      {heading:'皮膚癌有這3種',format:'table',table:TABLE},
      {heading:'痣出現這些變化要注意',format:'bullets',items:[
        'A形狀不對稱、B邊緣鋸齒模糊、C顏色不均、D超過0.6公分、E最近變大或流血。',
        '身上有一顆痣長得跟其他痣都不一樣。',
        '指甲出現黑色直線，而且粗細、顏色不規則。'
      ]},
      {heading:'防曬這樣做',format:'bullets',items:[
        '早上10點到下午2點太陽最毒，盡量避開。',
        '擦SPF30以上、PA+++的防曬，每2小時補擦。',
        '傷口一直不好、痣突然變大，就去看皮膚科。'
      ]}
    ],
    think_tank_view:'幫爸媽洗腳、剪指甲時，順便看看腳底和指甲有沒有奇怪的黑點；自己出門前多擦一層防曬。這些小動作，就是對抗皮膚癌最好的方法。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部癌症登記並標明年份，辨識與防曬建議標明為醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「這顆痣怪怪的」切入，教讀者自我觀察。', tone:'生活親切', tone_reason:'給一般民眾與照顧長輩的家人閱讀。', to_verify:['防曬建議為醫師說明']},
    decision_points:[DP_MEL]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'皮膚癌：ABCDE看痣，防曬補擦',
    update_date:'2026/11/20',
    intro:'112年皮膚癌新發4,709人，中位數74歲。黑色素瘤人數少但惡性度最高。',
    sections:[
      {heading:'3大類型',format:'table',table:TABLE},
      {heading:'ABCDE',format:'bullets',items:[
        '不對稱、邊緣、顏色、直徑0.6公分、變化。',
        '指甲黑線不規則也要注意。'
      ]},
      {heading:'防曬',format:'bullets',items:[
        '避開10點到14點。',
        'SPF30以上、2小時補擦。'
      ]}
    ],
    think_tank_view:'皮膚癌看得見，定期觀察加上防曬是最好的預防。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部癌症登記並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為類型、ABCDE、防曬三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['建議為醫師說明']},
    decision_points:[DP_MEL]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'皮膚癌', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'用 ABCDE 辨識可疑的痣', primary_visual:'4,709 人', secondary_message:'皮膚癌一年新發逾 4,700 人', action_priority:'觀察皮膚變化、做好防曬'},
    headline_hook:'這顆痣怪怪的？', headline_main:'ABCDE 看懂皮膚癌', title_accent:'ABCDE',
    hero_message:'皮膚癌看得見', hero_support:'112 年新發 4,709 人，診斷年齡中位數 74 歲',
    knowledge_title:'ABCDE 法則', knowledge_note:'痣快速變大、流血，**盡快看皮膚科**',
    knowledge_cards:[
      {label:'A 不對稱', icon:'search', lines:['形狀左右','不對稱']},
      {label:'B 邊緣', icon:'search', lines:['邊緣模糊','或鋸齒狀']},
      {label:'C 顏色', icon:'search', lines:['兩種以上','顏色不均']},
      {label:'D 直徑', icon:'search', lines:['超過','0.6 公分']},
      {label:'E 變化', icon:'check', lines:['變大、隆起','破皮或出血']}
    ],
    primary_stat:{value:'4,709 人', label:'112 年皮膚癌新發個案', note:'衛福部癌症登記｜居癌症發生第 8 位'},
    secondary_stats:[
      {value:'74 歲', label:'診斷年齡中位數'},
      {value:'SPF30', label:'以上防曬，2 小時補擦'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'看', text:'洗澡時觀察身上的痣與斑'},
      {key:'避', text:'避開上午 10 點到下午 2 點烈日'},
      {key:'擦', text:'SPF30 以上，每 2 小時補擦'},
      {key:'醫', text:'傷口不癒、痣變大就醫'}
    ],
    carousel_suggestion:{reason:'若想把類型、辨識與防曬分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'皮膚癌 3 類型', headline_main:'基底、鱗狀、黑色素瘤'},
      {layout_type:'knowledge', headline_hook:'這顆痣怪怪的？', headline_main:'ABCDE 看懂皮膚癌'},
      {layout_type:'action', headline_hook:'防曬', headline_main:'避開烈日、2 小時補擦'}]},
    hashtags:['皮膚癌','黑色素瘤','防曬','ABCDE法則'],
    sources:['衛生福利部國民健康署','工商時報','KingNet國家網路醫藥'],
    illustration_category:'general',
    illustration:{topic:'皮膚癌預防', audience:'一般民眾與長輩', scene:'戶外陽傘下，一位成年人幫長輩擦防曬，旁邊放著帽子',
      emotion:'溫暖、照顧', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'Under an outdoor parasol, an adult applying sunscreen for an older family member with a sun hat nearby, warm and caring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['112年皮膚癌新發4,709人（癌症登記附表）','ABCDE法則（皮膚科醫師說明）'],
      layout_reason:'核心是自我辨識，選 knowledge：5 張 ABCDE 卡當主角，新發人數退到下方。',
      tone:'專業易懂', tone_reason:'辨識標準需清楚。',
      to_verify:['ABCDE為醫師說明，非官方衛教']},
    decision_points:[Object.assign({}, DP_MEL, {current:'4,709 人｜皮膚癌整體（112 年）'})],
    content_check_note:'新發人數引自衛福部112年癌症登記附表，辨識與防曬建議標明為醫師說明，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'皮膚癌',
    collect:{
      summary:'皮膚癌112年新發逾4,700人、居癌症發生第8位，以高齡族群為主、死亡率低；黑色素瘤人數少但惡性度高，國健署無專門衛教，「ABCDE看痣＋防曬」是適合長期與季節性（夏季）溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'新發皮膚癌約4700人：依2025年12月公布的112年癌症登記，皮膚癌新發4709人，居癌症發生第8位，診斷年齡中位數74歲，標準化發生率每十萬人9.7人。',tag:'官方統計',source:{name:'衛生福利部：112年國人十大癌症發生人數附表',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'}},
        {item:'年度趨勢方向',desc:'新發人數增加503人：112年較111年4,206人增加，與胃癌互換名次，由第9位升至第8位，標準化死亡率每十萬人0.6人。',tag:'官方統計',source:{name:'衛生福利部：112年國人十大癌症發生人數附表',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'}},
        {item:'政策動向',desc:'約200多例黑色素瘤：北榮皮膚科醫師指出台灣每年約有200多個黑色素瘤新診斷個案，亞洲人約6成發生在肢體末端，常較晚期才發現（未標資料年份）。',tag:'市場觀察',source:{name:'工商時報：ABCDE法則，辨識黑色素癌',url:'https://www.ctee.com.tw/news/20251112700006-431003'}},
        {item:'好發族群年齡層',desc:'診斷年齡中位數74歲：皮膚癌以高齡者為主，台大皮膚科醫師指出長期日曬、有黑色素瘤病史或家族史、免疫抑制者風險較高。',tag:'市場觀察',source:{name:'KingNet國家網路醫藥：皮膚癌3大類型與徵兆一次看',url:'https://n.yam.com/Article/20260226830615'}}
      ],
      product_view:['機會：皮膚癌多以手術治療，可作為手術與癌症醫療保障的溝通情境。','機會：夏季防曬提醒、皮膚自我檢查適合結合健康管理服務。','風險：不得推薦特定防曬品牌，也不得以黑色素瘤高死亡率誇大恐懼。'],
      marketing_view:['機會：夏季與戶外活動季是防曬溝通時點。','機會：「幫爸媽看腳底和指甲」是好執行的家庭照顧行動。','風險：避免與美妝、防曬商品行銷混淆，維持衛教定位。'],
      alert_level:'low',
      alert_reason:'無政策事件，死亡率低，適合在夏季以防曬衛教方式溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('台大皮膚科醫師建議避開上午10點到下午2點的強烈紫外線時段','SOURCE_EVIDENCE','non_official_advice',
          '防曬時段建議引自醫師受訪，非國健署官方衛教；另有資料建議避開10點到16點，時段說法不一。','low','yes',
          '國健署或環境部紫外線防護官方建議。','no','confirm','屬醫師建議，方向一致但時段不同。',
          null,['早上10點到下午2點太陽最毒，盡量避開','避開10點到14點']),
        F('使用SPF30以上、PA+++的防曬品，每兩小時補擦一次','RISK_COMMUNICATION_SCOPE','product_adjacent',
          '具體到SPF與PA等級，容易被解讀為推薦特定規格產品；且未提醒防曬品之外的物理遮蔽同樣重要。','low','no',
          null,'no','clarify','屬醫師建議。',
          '使用SPF30以上的防曬品並定時補擦，同時搭配帽子、長袖等物理遮蔽',['擦SPF30以上、PA+++的防曬，每2小時補擦','SPF30以上、2小時補擦']),
        F('黑色素瘤人數少但惡性度最高','DATA_FACTUAL_ACCURACY','figure_without_count',
          '文中說黑色素瘤人數少，但沒有給出官方人數；癌登附表未分類型，需查年報全文。','low','yes',
          '癌症登記年報黑色素瘤新發人數。','no','confirm','屬醫師說明。',
          null),
        F('多數是70多歲的長輩','DATA_FACTUAL_ACCURACY','median_as_majority',
          '74歲是診斷年齡「中位數」，代表一半患者在74歲以上，不等於「多數是70多歲」。','low','no',
          null,'no','clarify','屬中位數解讀。',
          '確診年齡中位數是74歲，一半以上是長輩')
      ],
      card:[
        F('以上防曬，2 小時補擦','RISK_COMMUNICATION_SCOPE','product_adjacent',
          '次數字以 SPF30 呈現，接近產品規格訴求，與衛教定位略有落差。','low','no',
          null,'no','clarify','屬醫師建議。',
          '防曬並定時補擦'),
        F('112 年新發 4,709 人，診斷年齡中位數 74 歲','CONTEXT_CONSISTENCY','audience_mismatch',
          '插圖與行動以一般民眾防曬為主，但數據顯示患者以高齡為主，兩者連結不夠明確。','low','no',
          null,'no','clarify','屬訊息一致性。',
          null)
      ]
    },
    title_alts:[
      '皮膚癌一年新發逾4,700人：認識3種類型與ABCDE警訊',
      '這顆痣怪怪的？ABCDE教你看懂皮膚癌警訊',
      '皮膚癌看得見：自我觀察與防曬重點一次看'
    ],
    card_title_alts:[
      ['這顆痣怪怪的？','ABCDE 看懂皮膚癌'],
      ['皮膚癌看得見','3 種類型一次認識'],
      ['夏天防曬','2 小時補擦一次']
    ],
    data_addon:[
      '112年皮膚癌標準化發生率每十萬人9.7人，較111年增加0.6人。',
      '112年十大癌症中，皮膚癌與胃癌名次互換，皮膚癌升至第8位。',
      '北榮醫師：先天巨大痣（超過20公分）發生黑色素瘤的風險約5-10%。'
    ],
    cta:'今晚洗澡時花一分鐘看看身上的痣，有ABCDE任一項變化，就約皮膚科門診。'
  });
})();
