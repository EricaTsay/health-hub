/* v6 示範主題：口腔癌（B2 癌症）
   查證日期：2026-11-20。數據來源：衛福部112年癌症登記報告新聞稿與附表（2025-12-30 公布，含口腔黏膜檢查資格與效益）、衛福部114年死因統計摘要表（口腔癌死亡時間序列）、
   TVBS 2025-12-30（國健署記者會：男性口腔癌發生率為女性9倍）。
   參考方向：健康智庫〈口腔癌〉（無原文，全數自行查證）、〈長期嘴破，小心為癌前病變警訊〉。 */
(function(){
  const REFS = [
    {title:'公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-84987-1.html'},
    {title:'112年國人十大癌症發生人數附表',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'},
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'112年國人癌症時鐘再快轉！肺癌連3年居首 每3分48秒一人罹癌',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/cancer/360004'}
  ];
  const TABLE = {headers:['公費口腔黏膜檢查','內容'], rows:[
    ['一般民眾','30歲以上有嚼檳榔（含已戒）或吸菸習慣者，每2年1次'],
    ['原住民','18歲以上有嚼檳榔（含已戒）習慣者，每2年1次'],
    ['檢查方式','由醫師目視、觸診口腔黏膜，幾分鐘即可完成'],
    ['篩檢效益','可降低嚼檳榔或吸菸男性26%的口腔癌死亡風險']
  ]};
  const TAGS = ['口腔癌','口腔黏膜檢查','檳榔','戒菸','癌症篩檢'];

  const DP_SCOPE = {id:'dp-oc-scope', type:'data_scope', title:'「口腔癌」統計範圍不同',
    desc:'癌症登記的口腔癌包含口咽及下咽（112年新發8,522人）；死因統計的口腔癌分類（ICD-10 C00-C06、C09-C10、C12-C14）同樣包含口咽與下咽。兩者範圍相近，但文中已標明「含口咽、下咽」，AI 沒有把它當成只有口腔內的癌症。',
    current:'口腔癌（含口咽、下咽）新發8,522人（112年）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'8,522人', value:'新發（含口咽、下咽）', note:'112年癌症登記附表（目前採用）'},
      {label:'3,697人', value:'死亡（C00-C06、C09-C10、C12-C14）', note:'114年死因統計'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'口腔癌男性比女性高9倍：嚼檳榔、吸菸者每2年口腔黏膜檢查',
    update_date:'2026/11/20',
    intro:'依衛生福利部112年癌症登記報告，口腔癌（含口咽、下咽）新發8,522人，居國人癌症發生第6位，診斷年齡中位數60歲，比全癌症的65歲年輕；國健署指出男性發生率約為女性的9倍。114年死因統計中，口腔癌死亡3,697人，居癌症死因第6位、男性第4位。檳榔、菸、酒是主要危險因子，公費口腔黏膜檢查能協助在癌前病變階段發現。',
    sections:[
      {heading:'公費口腔黏膜檢查',format:'table',table:TABLE},
      {heading:'要留意的口腔警訊',format:'bullets',items:[
        '口腔內出現白斑、紅斑，或傷口、潰瘍超過2週未癒合，應盡快就醫。',
        '口腔黏膜變硬、張口困難，或頸部摸到不明腫塊，也應就醫檢查。',
        '國健署指出，口腔癌標準化發生率已呈下降趨勢，但仍是青壯年男性的重要癌症。'
      ]},
      {heading:'降低風險這樣做',format:'bullets',items:[
        '戒除檳榔，已戒者仍屬篩檢對象，持續每2年檢查。',
        '戒菸可利用免付費戒菸專線0800-636363，並減少飲酒。',
        '可用健保快易通APP查詢篩檢資格與院所。'
      ]}
    ],
    think_tank_view:'口腔癌是少數「看得到」的癌症，醫師幾分鐘的目視與觸診就能檢查。嚼過檳榔或有吸菸習慣的人，即使已經戒了，也別忘了每2年做一次口腔黏膜檢查；家人若發現嘴破很久不好，也請提醒他去看醫生。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'發生與死亡人數引自衛福部112年癌症登記與114年死因統計並標明年份，篩檢資格與效益引自衛福部新聞稿，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['112年口腔癌新發8,522人、中位數60歲（癌症登記附表）','114年死亡3,697人（死因統計）','篩檢資格與26%效益（衛福部112年癌登新聞稿）'],
      layout_reason:'先用表格說明公費篩檢資格，再整理口腔警訊，最後給降低風險的行動。',
      tone:'專業易懂', tone_reason:'篩檢資格需要精確。',
      to_verify:['「白斑、紅斑、潰瘍超過2週」為常見臨床衛教說法，未在本次引用的官方頁面中逐字出現']},
    decision_points:[DP_SCOPE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'嘴破2週還沒好？嚼過檳榔、抽菸的人每2年免費檢查',
    update_date:'2026/11/20',
    intro:'口腔癌一年新發8,522人（112年癌症登記），男生得到的機率約是女生的9倍，而且確診年齡中位數只有60歲，很多是家裡的經濟支柱。好消息是，口腔癌看得到、摸得到，只要定期請醫師看一看，就有機會在變成癌症前發現。',
    sections:[
      {heading:'誰可以免費檢查？',format:'table',table:TABLE},
      {heading:'嘴巴出現這些狀況要注意',format:'bullets',items:[
        '嘴巴裡有白白或紅紅的斑塊，或嘴破超過2週還沒好。',
        '嘴巴變硬、張不太開，或脖子摸到腫塊。',
        '有這些狀況，就去看耳鼻喉科或口腔外科。'
      ]},
      {heading:'可以這樣做',format:'bullets',items:[
        '戒檳榔；就算已經戒了，也要每2年檢查1次。',
        '戒菸可以打免費專線0800-636363，酒也少喝。',
        '用健保快易通APP查查能不能做免費檢查。'
      ]}
    ],
    think_tank_view:'很多爸爸、叔叔年輕時嚼過檳榔，現在雖然戒了，風險還在。提醒他們每2年去做一次口腔檢查，幾分鐘就好，卻可能換來很大的安心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以「嘴破不好」的生活經驗切入。', tone:'生活親切', tone_reason:'給青壯年男性與家人閱讀。', to_verify:['警訊描述的出處']},
    decision_points:[DP_SCOPE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'口腔癌：嚼檳榔、吸菸者每2年口腔檢查',
    update_date:'2026/11/20',
    intro:'112年口腔癌新發8,522人，中位數60歲；114年死亡3,697人，居男性癌症死因第4位。',
    sections:[
      {heading:'公費檢查',format:'table',table:TABLE},
      {heading:'警訊',format:'bullets',items:[
        '白斑、紅斑、潰瘍2週未癒。',
        '張口困難、頸部腫塊。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '戒檳榔、戒菸、少喝酒。',
        '已戒者仍每2年檢查。'
      ]}
    ],
    think_tank_view:'戒除檳榔菸酒、定期口腔黏膜檢查，是預防口腔癌最有效的兩件事。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為檢查、警訊、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['26%為群體層次效益']},
    decision_points:[DP_SCOPE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'口腔癌', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'口腔癌一年新發逾 8 千人', primary_visual:'8,522 人', secondary_message:'男性發生率約為女性 9 倍', action_priority:'嚼檳榔、吸菸者每 2 年口腔檢查'},
    headline_hook:'嘴破 2 週還沒好？', headline_main:'口腔癌 每 2 年免費檢查', title_accent:'每 2 年免費檢查',
    primary_stat:{kicker:'112 年・新發個案', value:'8,522 人', label:'口腔癌（含口咽、下咽）', note:'衛福部癌症登記｜診斷年齡中位數 60 歲'},
    chart:{type:'bar', title:'口腔癌死亡人數（人）', points:[
      {label:'2016', value:3180, display:'3,180'},
      {label:'2019', value:3425, display:'3,425'},
      {label:'2022', value:3479, display:'3,479'},
      {label:'2025', value:3697, display:'3,697', highlight:true}
    ], note:'衛福部死因統計｜標準化死亡率 9.0 → 8.3'},
    secondary_stats:[
      {value:'約 9 倍', label:'男性發生率為女性'},
      {value:'26%', label:'篩檢可降低死亡風險'},
      {value:'第 4 位', label:'男性癌症死因'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'篩', text:'30 歲以上嚼檳榔或吸菸者每 2 年檢查'},
      {key:'戒', text:'戒檳榔、戒菸、少喝酒'},
      {key:'看', text:'白斑、紅斑、嘴破 2 週未癒就醫'},
      {key:'查', text:'健保快易通 APP 查資格'}
    ],
    carousel_suggestion:{reason:'若想把趨勢、警訊與篩檢分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'口腔癌', headline_main:'一年新發 8,522 人'},
      {layout_type:'knowledge', headline_hook:'嘴巴警訊', headline_main:'白斑、紅斑、嘴破不癒'},
      {layout_type:'action', headline_hook:'免費檢查', headline_main:'每 2 年 1 次'}]},
    hashtags:['口腔癌','口腔黏膜檢查','檳榔','戒菸'],
    sources:['衛生福利部','衛生福利部國民健康署'],
    illustration_category:'screening-checkup',
    illustration:{topic:'口腔黏膜檢查', audience:'青壯年男性', scene:'一位青壯年男性坐在診間張口，醫師拿手電筒檢查口腔',
      emotion:'輕鬆、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A young adult man sitting in a clinic with his mouth open while a doctor checks his oral cavity with a small flashlight, relaxed and reassuring, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['112年口腔癌新發8,522人（癌症登記）','口腔癌死亡人數時間序列（114年死因統計摘要表）'],
      layout_reason:'口腔癌有清楚的新發與死亡數字，選 data：新發人數當主角，死亡人數趨勢小圖，男女倍數與篩檢效益放第二層。',
      tone:'專業易懂', tone_reason:'篩檢資訊需清楚。',
      to_verify:['男女9倍為國健署記者會說明（媒體轉述）']},
    decision_points:[Object.assign({}, DP_SCOPE, {current:'8,522 人｜含口咽、下咽'})],
    content_check_note:'新發與死亡人數引自衛福部並標明年份，篩檢效益引自衛福部，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'口腔癌',
    collect:{
      summary:'口腔癌（含口咽、下咽）112年新發逾8千人、診斷年齡中位數60歲，男性發生率約為女性9倍，居男性癌症死因第4位；標準化發生率雖下降，嚼檳榔與吸菸者的定期口腔黏膜檢查仍是長期溝通重點。',
      objective_data:[
        {item:'盛行率／發生率',desc:'新發口腔癌約8500人：依2025年12月公布的112年癌症登記，口腔癌（含口咽、下咽）新發8522人，居癌症發生第6位，診斷年齡中位數60歲，比全癌症年輕5歲。',tag:'官方統計',source:{name:'衛生福利部：112年國人十大癌症發生人數附表',url:'https://www.mohw.gov.tw/dl-98499-cd0fe70e-8e08-42cc-be15-3860b40d7f4d.html'}},
        {item:'年度趨勢方向',desc:'標準化死亡率十年下降約8%：2025年口腔癌死亡3,697人，居癌症死因第6位、男性第4位，年齡標準化死亡率由2016年每十萬人9.0降至8.3。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'篩檢可降低26%死亡風險：公費口腔黏膜檢查對象為30歲以上嚼檳榔（含已戒）或吸菸者，及18歲以上嚼檳榔原住民，每2年1次。',tag:'官方統計',source:{name:'衛生福利部：公布112年國人癌症登記資料分析結果',url:'https://mohw.gov.tw/cp-16-84987-1.html'}},
        {item:'好發族群年齡層',desc:'男性發生率約為女性9倍：國健署在112年癌登記者會指出，男性口腔癌標準化發生率為女性的9倍，嚼檳榔、吸菸、飲酒為主要危險因子。',tag:'市場觀察',source:{name:'TVBS新聞網：112年國人癌症時鐘再快轉',url:'https://health.tvbs.com.tw/cancer/360004'}}
      ],
      product_view:['機會：口腔癌好發於青壯年男性，治療常涉及大範圍手術與重建，可作為癌症與失能保障的溝通情境。','機會：結合戒檳、戒菸支持與篩檢提醒的健康管理服務。','風險：避免對嚼檳榔族群汙名化，也不得將篩檢結果與承保條件連動。'],
      marketing_view:['機會：「嘴破2週不好要就醫」是好記的警訊。','機會：已戒檳榔者仍是篩檢對象，常被忽略，值得提醒。','風險：避免以手術後外觀變化等恐懼畫面訴求。'],
      alert_level:'medium',
      alert_reason:'發生率下降但人數仍高、男性負擔重，篩檢政策成熟，適合納入年度溝通規劃。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('口腔內出現白斑、紅斑，或傷口、潰瘍超過2週未癒合，應盡快就醫','SOURCE_EVIDENCE','advice_without_basis',
          '警訊描述沒有引用官方衛教來源，「2週」的時間點讀者無法判斷依據。','low','yes',
          '國健署口腔癌警訊衛教資料。','no','confirm','屬常見臨床衛教說法。',
          null,['嘴巴裡有白白或紅紅的斑塊，或嘴破超過2週還沒好','白斑、紅斑、潰瘍2週未癒']),
        F('可降低嚼檳榔或吸菸男性26%的口腔癌死亡風險','MEDICAL_INTERPRETATION','population_benefit_as_individual',
          '26%是群體層次研究結果，讀者可能理解為個人保證降低26%風險。','medium','no',
          null,'no','clarify','數據引自衛福部。',
          '在嚼檳榔或吸菸男性族群中，篩檢可降低約26%的口腔癌死亡風險'),
        F('國健署指出男性發生率約為女性的9倍','SOURCE_EVIDENCE','secondary_citation',
          '倍數出自記者會說明的媒體轉述，未附官方原始資料。','low','yes',
          '國健署112年癌登男女別口腔癌標準化發生率。','yes','confirm','屬二手引述。',
          null,['男生得到的機率約是女生的9倍']),
        F('很多是家裡的經濟支柱','RISK_COMMUNICATION_SCOPE','emotional_framing',
          '以「經濟支柱」形容病友帶有情緒訴求，接近保險銷售語境，不屬衛教必要資訊。','medium','no',
          null,'no','revise','屬品牌語調調整。',
          '不少是正值工作年齡的青壯年')
      ],
      card:[
        F('篩檢可降低死亡風險','MEDICAL_INTERPRETATION','population_benefit_as_individual',
          '「26%」為嚼檳榔或吸菸男性族群的研究結果，卡面未說明適用族群。','low','no',
          null,'no','clarify','數據引自衛福部。',
          '嚼檳榔、吸菸男性篩檢降低死亡'),
        F('男性發生率為女性','SOURCE_EVIDENCE','secondary_citation',
          '倍數為媒體轉述，卡面未標來源。','low','yes',
          '國健署男女別標準化發生率。','yes','confirm','屬二手引述。',
          null)
      ]
    },
    title_alts:[
      '口腔癌男性比女性高9倍：嚼檳榔、吸菸者每2年口腔黏膜檢查',
      '嘴破2週還沒好？嚼過檳榔、抽菸的人每2年免費檢查',
      '口腔癌看得到也摸得到：公費口腔黏膜檢查資格一次看'
    ],
    card_title_alts:[
      ['嘴破 2 週還沒好？','口腔癌 每 2 年免費檢查'],
      ['嚼過檳榔、抽菸','每 2 年口腔黏膜檢查'],
      ['口腔癌一年','新發 8,522 人']
    ],
    data_addon:[
      '114年死因統計：口腔癌死亡男性3,363人、女性334人。',
      '112年口腔癌標準化發生率每十萬人21.2人，較111年下降0.2人。',
      '112年口腔癌診斷年齡中位數60歲，較111年增加1歲。'
    ],
    cta:'如果你或家人嚼過檳榔或有抽菸，今天就用健保快易通APP查一下上次口腔黏膜檢查的時間。'
  });
})();
