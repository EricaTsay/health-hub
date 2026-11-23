/* v6 示範主題：兒童蛀牙（B7 女性・男性・生育與兒童）
   查證日期：2026-11-21。數據來源：衛福部「兒童齲齒之性別差異分析」（依據112–113年度我國6歲以下兒童口腔健康調查計畫，PDF）。
   參考方向：健康智庫〈小孩蛀牙沒關係，長大換牙就好?〉2024/08。 */
(function(){
  const REFS = [
    {title:'兒童齲齒之性別差異分析（112–113年度我國6歲以下兒童口腔健康調查計畫）',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-102756-6ae396d4-711d-4199-abee-929f3277c0f1.html'}
  ];
  const TABLE = {headers:['衛福部建議','怎麼做'], rows:[
    ['含氟牙膏','長牙後使用含氟牙膏'],
    ['家長協助刷牙','幼童手部動作還不熟練，由家長幫忙刷'],
    ['避免含糖飲料','少喝含糖飲料，不養成甜食習慣'],
    ['避免夜間餵食','睡前不含奶瓶、不喝奶就睡'],
    ['定期檢查','定期帶孩子看牙醫，及早發現']
  ]};
  const TAGS = ['兒童蛀牙','乳牙','含氟牙膏','兒童口腔','親子育兒'];

  const DP_COMPARE = {id:'dp-caries-compare', type:'data_version', title:'與107年調查的比較',
    desc:'衛福部112–113年度調查0至5歲早發性兒童齲齒（ECC）加權盛行率21.9%；107年度調查分性別為男童31.57%、女童31.31%。報告只提供107年分性別數字，AI 沒有自行合併成整體盛行率。',
    current:'0至5歲ECC盛行率21.9%（112–113年度調查）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'21.9%', value:'112–113 年度', note:'0至5歲，加權後盛行率（目前採用）'},
      {label:'男 31.57%／女 31.31%', value:'107 年度', note:'報告僅列分性別數字'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'5歲兒童近半數已有早發性齲齒：乳牙蛀牙不能等換牙',
    update_date:'2026/11/21',
    intro:'依衛生福利部112–113年度「我國6歲以下兒童口腔健康調查計畫」，10,400名兒童中，0至5歲早發性兒童齲齒（ECC）加權盛行率為21.9%，嚴重性早發性兒童齲齒（S-ECC）為16.2%，各項指標均較107年度調查改善。但齲齒隨年齡快速累積，ECC由0歲的1.4%增加至5歲的46.3%。乳牙蛀牙不是「換牙就好」，而是需要及早介入的健康問題。',
    sections:[
      {heading:'衛福部兒童齲齒防治建議',format:'table',table:TABLE},
      {heading:'調查告訴我們什麼',format:'bullets',items:[
        '5歲兒童乳牙齲齒經驗指數（dmft）加權平均為2.07顆。',
        '男女童齲齒差異不顯著，年齡、家長教育程度、飲食及生活習慣的影響較明顯。',
        '與107年度相比，男女童的ECC與S-ECC均下降。'
      ]},
      {heading:'為什麼乳牙蛀牙要處理',format:'bullets',items:[
        '衛福部指出，兒童齲齒防治應著重及早介入與隨年齡累積的風險。',
        '從0到5歲，ECC盛行率增加超過30倍，越晚處理越多顆受影響。',
        '家長的口腔健康知識與協助刷牙，是可以改變的關鍵因素。'
      ]}
    ],
    think_tank_view:'「反正會換牙」是乳牙蛀牙最大的迷思。調查顯示，5歲時已有將近一半的孩子有早發性齲齒，而飲食與生活習慣才是關鍵。從第一顆牙開始用含氟牙膏、家長幫忙刷、睡前不含奶瓶，就是孩子最早的健康投資。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'盛行率引自衛福部112–113年度調查並標明年齡範圍，防治建議引自同一報告，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['ECC 21.9%、S-ECC 16.2%、5歲46.3%（衛福部112–113年度調查分析）'],
      layout_reason:'先用表格列出防治建議，再說明調查發現，最後破除換牙迷思。',
      tone:'專業易懂', tone_reason:'家長需要具體可執行的口腔照護方法。',
      to_verify:['塗氟補助條件未在引用報告中，未寫']},
    decision_points:[DP_COMPARE]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'小孩蛀牙沒關係，換牙就好？5歲已有近半數孩子蛀牙',
    update_date:'2026/11/21',
    intro:'很多爸媽覺得乳牙反正會換，蛀了也沒關係。衛福部最新的調查卻發現，5歲的孩子已經有將近一半（46.3%）有早發性蛀牙。好消息是，跟幾年前比，孩子的蛀牙情況已經有改善，只要從小養成好習慣，就能守住孩子的牙。',
    sections:[
      {heading:'顧好乳牙這樣做',format:'table',table:TABLE},
      {heading:'調查發現',format:'bullets',items:[
        '0歲時只有1.4%有蛀牙，到5歲增加到46.3%。',
        '男生女生差不多，飲食和生活習慣影響比較大。',
        '和107年比，蛀牙的孩子變少了。'
      ]},
      {heading:'爸媽可以做的事',format:'bullets',items:[
        '孩子自己刷完，爸媽再幫忙刷一次。',
        '睡前不要喝奶就睡，也少給含糖飲料。',
        '定期帶孩子看牙醫，不要等到牙痛。'
      ]}
    ],
    think_tank_view:'乳牙陪孩子吃飯、說話好幾年，是恆牙的「領路人」。今晚就從爸媽幫忙刷牙開始吧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部調查並標明年齡，語氣親切，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以換牙迷思帶出數據與做法。', tone:'生活親切', tone_reason:'給學齡前兒童家長閱讀。', to_verify:[]},
    decision_points:[DP_COMPARE]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'兒童蛀牙：5歲近半數有齲齒',
    update_date:'2026/11/21',
    intro:'衛福部112–113年度調查：0至5歲早發性兒童齲齒21.9%，5歲達46.3%。乳牙蛀牙要及早處理。',
    sections:[
      {heading:'防治建議',format:'table',table:TABLE},
      {heading:'重點',format:'bullets',items:[
        '家長協助刷牙、用含氟牙膏。',
        '避免含糖飲料與夜間餵食。'
      ]}
    ],
    think_tank_view:'乳牙不是換掉就好，從第一顆牙開始照顧。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部調查，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為建議與重點兩段。', tone:'簡潔有力', tone_reason:'社群短文。', to_verify:[]},
    decision_points:[DP_COMPARE]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'兒童蛀牙', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'5 歲兒童近半數有早發性齲齒', primary_visual:'46.3%', secondary_message:'乳牙蛀牙不能等換牙', action_priority:'含氟牙膏、家長協助刷牙'},
    headline_hook:'蛀牙換牙就好？', headline_main:'5 歲近半數已有齲齒', title_accent:'近半數',
    primary_stat:{kicker:'112–113 年度・5 歲', value:'46.3%', label:'早發性兒童齲齒盛行率', note:'衛福部 6 歲以下兒童口腔健康調查'},
    chart:{type:'bar', title:'早發性兒童齲齒盛行率（%）', points:[
      {label:'0 歲', value:1.4, display:'1.4'},
      {label:'0–5 歲', value:21.9, display:'21.9'},
      {label:'5 歲', value:46.3, display:'46.3', highlight:true}
    ], note:'衛福部 112–113 年度調查｜10,400 名兒童'},
    secondary_stats:[
      {value:'16.2%', label:'0–5 歲嚴重性齲齒'},
      {value:'2.07 顆', label:'5 歲平均齲齒經驗'}
    ],
    action_title:'顧好乳牙這樣做',
    action_cards:[
      {key:'氟', text:'使用含氟牙膏'},
      {key:'刷', text:'家長協助幼童刷牙'},
      {key:'糖', text:'避免含糖飲料與夜間餵食'},
      {key:'檢', text:'定期帶孩子看牙醫'}
    ],
    carousel_suggestion:{reason:'若想把調查數據、迷思與做法分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'data', headline_hook:'蛀牙隨年齡累積', headline_main:'5 歲達 46.3%'},
      {layout_type:'knowledge', headline_hook:'換牙就好？', headline_main:'乳牙蛀牙的迷思'},
      {layout_type:'action', headline_hook:'顧好乳牙', headline_main:'4 件事從今晚開始'}]},
    hashtags:['兒童蛀牙','乳牙','含氟牙膏','兒童口腔'],
    sources:['衛生福利部'],
    illustration_category:'general',
    illustration:{topic:'親子刷牙', audience:'學齡前兒童家長', scene:'家長在浴室幫幼兒刷牙，旁邊放著兒童牙膏與水杯',
      emotion:'溫馨、輕鬆', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A parent helping a toddler brush teeth in a bathroom, children\'s toothpaste and a cup nearby, warm and relaxed, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['ECC 0歲1.4%、0-5歲21.9%、5歲46.3%（衛福部112–113年度調查）'],
      layout_reason:'關鍵是「蛀牙隨年齡快速累積」，選 data：5 歲盛行率當主角，年齡比較放右側，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'破除迷思、給具體做法。',
      to_verify:['直條圖「0–5 歲」為整體加權值，與單一年齡並列']},
    decision_points:[Object.assign({}, DP_COMPARE, {current:'46.3%｜5 歲 ECC（112–113 年度）'})],
    content_check_note:'數據與建議引自衛福部調查，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'兒童蛀牙',
    collect:{
      summary:'衛福部112–113年度6歲以下兒童口腔健康調查顯示，0至5歲早發性兒童齲齒盛行率21.9%、較107年度改善，但5歲時仍高達46.3%；「含氟牙膏、家長協助刷牙、避免含糖飲料與夜間餵食、定期檢查」是學齡前家庭值得長期溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'21.9%：衛福部112–113年度調查10,400名6歲以下兒童，0至5歲早發性兒童齲齒（ECC）加權盛行率21.9%，嚴重性早發性兒童齲齒（S-ECC）16.2%。',tag:'官方統計',source:{name:'衛生福利部：兒童齲齒之性別差異分析（112–113年度調查）',url:'https://www.mohw.gov.tw/dl-102756-6ae396d4-711d-4199-abee-929f3277c0f1.html'}},
        {item:'年度趨勢方向',desc:'男童22.2%（107年度31.57%）：與107年度調查相比，男童ECC盛行率由31.57%降至22.2%、女童由31.31%降至22.5%，S-ECC亦同步下降。',tag:'官方統計',source:{name:'衛生福利部：兒童齲齒之性別差異分析（112–113年度調查）',url:'https://www.mohw.gov.tw/dl-102756-6ae396d4-711d-4199-abee-929f3277c0f1.html'}},
        {item:'政策動向',desc:'含氟牙膏與家長協助刷牙：衛福部依調查結果提出加強家長口腔健康識能並定期檢查、使用含氟牙膏、家長協助幼童刷牙、避免含糖飲料及夜間餵食等策略。',tag:'官方統計',source:{name:'衛生福利部：兒童齲齒之性別差異分析（112–113年度調查）',url:'https://www.mohw.gov.tw/dl-102756-6ae396d4-711d-4199-abee-929f3277c0f1.html'}},
        {item:'好發族群年齡層',desc:'5歲達46.3%：ECC由0歲的1.4%增加至5歲的46.3%，5歲兒童乳牙齲齒經驗平均2.07顆，年齡、家長教育程度、飲食及生活習慣的影響比性別更明顯。',tag:'官方統計',source:{name:'衛生福利部：兒童齲齒之性別差異分析（112–113年度調查）',url:'https://www.mohw.gov.tw/dl-102756-6ae396d4-711d-4199-abee-929f3277c0f1.html'}}
      ],
      product_view:['機會：親子族群關注兒童健康，可結合口腔保健衛教內容。','機會：家庭健康管理服務可加入看牙提醒。','風險：避免推薦特定牙膏或口腔產品。'],
      marketing_view:['機會：「換牙就好？」是常見迷思，適合破除迷思型內容。','機會：開學前、寒暑假是安排看牙的時點。','風險：避免責怪家長，以支持語氣為主。'],
      alert_level:'low',
      alert_reason:'屬長期兒童健康議題，調查顯示持續改善，適合納入親子族群年度溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('ECC盛行率增加超過30倍','MEDICAL_INTERPRETATION','derived_figure',
          '「超過30倍」是由1.4%與46.3%自行換算，報告本身沒有這個說法；且0歲比例本來就極低，倍數容易誇大印象。','low','no',
          null,'no','clarify','改用原始數字即可。',
          'ECC盛行率由0歲的1.4%增加至5歲的46.3%'),
        F('就是孩子最早的健康投資','COMPLIANCE_RISK','marketing_tone',
          '智庫觀點使用「投資」字眼，在壽險公司內容中容易被聯想為商品訴求。','low','no',
          null,'no','clarify','屬語氣調整。',
          '就是照顧孩子健康最早的一步'),
        F('5歲的孩子已經有將近一半（46.3%）有早發性蛀牙','MEDICAL_INTERPRETATION','term_unexplained',
          '生活親切版沒有說明「早發性兒童齲齒」的定義與調查年份，讀者可能以為是全國所有5歲兒童的最新普查。','low','no',
          null,'no','clarify','補上調查年度即可。',
          '5歲的孩子已經有將近一半（46.3%，112–113年度抽樣調查）有早發性蛀牙'),
        F('0至5歲早發性兒童齲齒21.9%，5歲達46.3%','SOURCE_EVIDENCE','sample_unstated',
          '簡潔有力版沒有說明是10,400名兒童的抽樣調查，也沒有提到加權。','low','no',
          null,'no','clarify','補上樣本即可。',
          '0至5歲早發性兒童齲齒21.9%（10,400名兒童抽樣），5歲達46.3%')
      ],
      card:[
        F('衛福部 112–113 年度調查｜10,400 名兒童','SOURCE_EVIDENCE','chart_mixed_basis',
          '直條圖把0歲、5歲的單一年齡數字與「0–5歲」整體加權值並列，讀者可能誤以為是三個年齡層。','low','no',
          null,'no','clarify','可標示中間長條為整體值。',
          '衛福部 112–113 年度調查｜中間為 0–5 歲整體'),
        F('5 歲平均齲齒經驗','TERMINOLOGY_LANGUAGE','term_unexplained',
          '「齲齒經驗」包含未治療、因蛀牙缺牙與已填補的牙，卡面沒有說明，讀者可能以為2.07顆都是未治療蛀牙。','low','no',
          null,'no','clarify','補上定義即可。',
          '5 歲平均蛀過的牙（含已補）')
      ]
    },
    title_alts:[
      '5歲兒童近半數已有早發性齲齒：乳牙蛀牙不能等換牙',
      '小孩蛀牙沒關係，換牙就好？5歲已有近半數孩子蛀牙',
      '衛福部兒童口腔調查：齲齒改善但隨年齡累積，家長這樣做'
    ],
    card_title_alts:[
      ['蛀牙換牙就好？','5 歲近半數已有齲齒'],
      ['顧好乳牙','從第一顆牙開始'],
      ['家長幫忙刷','含氟牙膏不能少']
    ],
    data_addon:[
      '衛福部112–113年度調查：0至5歲ECC 21.9%、S-ECC 16.2%，5歲ECC 46.3%。',
      '107年度ECC：男童31.57%、女童31.31%；112–113年度：男童22.2%、女童22.5%。',
      '5歲兒童乳牙齲齒經驗指數（dmft）加權平均2.07顆。'
    ],
    cta:'今晚孩子刷完牙後，爸媽再幫忙刷一次，並預約下一次看牙時間。'
  });
})();
