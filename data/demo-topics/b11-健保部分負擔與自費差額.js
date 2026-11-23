/* v6 示範主題：健保部分負擔與自費差額（B11 第二輪新主題）
   查證日期：2026-11-23。數據來源：健保署「部分負擔及免部分負擔說明」各頁（門急診、住院、免除對象）、健保署「全年及每次住院部分負擔之核退金額上限」、全民健康保險法。
   參考方向：判定清單第503、529、537、547、653列（住院自付上限、自費醫材、看護等健保缺口文章）。只取架構，數據重新查證。 */
(function(){
  const REFS = [
    {title:'癌症新藥暫時性支付專款作業流程問答集（114/6/2第2版）',source:'衛生福利部中央健康保險署',url:'https://www.nhi.gov.tw/ch/dl-100701-054c8c0fd4ff4b79811514cad51549ea-1.pdf'},
    {title:'門、急診部分負擔',source:'衛生福利部中央健康保險署',url:'https://www.nhi.gov.tw/ch/cp-5163-9803c-2737-1.html'},
    {title:'住院部分負擔',source:'衛生福利部中央健康保險署',url:'https://www.nhi.gov.tw/ch/cp-5161-28ca5-2737-1.html'},
    {title:'全年及每次住院部分負擔之核退金額上限',source:'衛生福利部中央健康保險署',url:'https://www.nhi.gov.tw/ch/cp-5184-4d67b-2743-1.html'},
    {title:'免除所有部分負擔者',source:'衛生福利部中央健康保險署',url:'https://www.nhi.gov.tw/ch/cp-5158-91a83-2737-1.html'},
    {title:'全民健康保險法',source:'全國法規資料庫',url:'https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0060001'}
  ];
  const TABLE = {headers:['就醫情境','部分負擔怎麼算（生效日）'], rows:[
    ['西醫門診','依院所層級與是否轉診：醫學中心經轉診170元、未經轉診420元；診所50元（106年4月15日起）'],
    ['急診','醫學中心750元、區域醫院400元、地區醫院與基層150元（112年7月1日起）'],
    ['門診藥品','藥費100元以下免付，之後每100元加收20元；醫院最高300元、基層與地區醫院最高200元（112年7月1日起）'],
    ['住院','急性病房30日內10%、31–60日20%、61日後30%；慢性病房30日內5%起'],
    ['住院上限','115年每次住院57,000元、全年95,000元，超過可申請核退（急性病房30日內、慢性病房180日內）']
  ]};
  const TAGS = ['健保部分負擔','自付差額','住院費用','醫療費用','健保制度'];

  const DP_CAP = {id:'dp-copay-cap', type:'data_scope', title:'住院自付上限有兩個數字在流傳',
    desc:'媒體在2025年9月報導的是預告草案，全年上限寫9.4萬元；健保署核退上限頁公布的115年全年上限是95,000元。兩者差1,000元，AI 採用健保署頁面數字，若要引用草案報導需另外說明。',
    current:'115年全年住院部分負擔上限95,000元（健保署核退上限頁）',
    options:[{label:'沿用目前資料', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'95,000元', value:'健保署公布', note:'全年及每次住院部分負擔之核退金額上限（目前採用）'},
      {label:'9.4萬元', value:'預告草案', note:'2025年9月媒體報導之草案數字'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'看病自己要付多少？一次看懂健保部分負擔與自付差額',
    update_date:'2026/11/23',
    intro:'健保不是「看病全免費」。依全民健康保險法，民眾就醫要負擔一部分費用，稱為「部分負擔」，目的是讓醫療資源用在需要的地方、鼓勵分級就醫。門診依院所層級收固定金額，住院則依病房類別與天數收5%到30%；為避免重病負擔過重，住院另有每次與全年上限，115年分別為57,000元與95,000元。此外，選用健保只給付部分的特殊材料時，還要自付差額。',
    sections:[
      {heading:'各類就醫的部分負擔',format:'table',table:TABLE},
      {heading:'自付差額與自費：健保之外的錢',format:'bullets',items:[
        '自付差額：健保給付同功能基本品項的費用，民眾選用較高價的特殊材料（例如塗藥血管支架、特殊功能人工水晶體）時，只需自付超出的差額。',
        '完全自費：健保不給付的項目（例如部分新藥、指定醫師、病房費差額、住院看護）需全額自付，且不計入住院部分負擔上限。',
        '自費或差額項目，醫院應事先說明費用並取得同意；可先查詢健保署「自費醫材比價網」了解各院收費。'
      ]},
      {heading:'哪些人可以免除部分負擔',format:'bullets',items:[
        '重大傷病（就醫該疾病）、分娩，以及在山地離島地區就醫者。',
        '低收入戶、百歲人瑞、健保卡註記「榮」字的榮民與榮民遺眷之家戶代表。',
        '3歲以下兒童、職業傷病等由其他單位補助部分負擔。',
        '身心障礙者門診基本部分負擔一律按診所層級收50元，急診與藥品亦有減收。'
      ]},
      {heading:'癌症新藥的「暫時性支付」',format:'bullets',items:[
        '114年起健保設「癌症新藥暫時性支付專款」：已完成三期臨床試驗、療效證據明確但受總額預算限制尚未收載的癌症新藥或新適應症，可先納入給付，同時蒐集真實世界資料再評估；協議期間以二至三年為原則，最長不超過五年（健保署）。',
        '若廠商未於期限內提交再評估報告，即終止暫時性支付，廠商須協助病人轉換其他適切治療，轉換期間無償供藥最長一年；因此「已有健保給付」的新藥，未來仍可能退場，用藥計畫宜與醫師保持討論。'
      ]}
    ],
    think_tank_view:'部分負擔本身金額有限，又有住院上限保護，真正造成家庭壓力的通常是「不在健保裡」的支出：自費藥物、特殊材料差額、病房差額與住院看護。了解制度怎麼算，就能在就醫前先問清楚費用，也能檢視自己的保障是否涵蓋這些缺口。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'各項金額引自健保署部分負擔說明頁並標明生效日期，住院上限採健保署公布之115年數字，未使用療效保證或誇大保障用語，未涉及具體商品。',
    ai_rationale:{basis:['門急診、藥品、住院部分負擔取自健保署說明頁（112年7月1日起急診與藥品新制）','115年住院上限取自健保署核退上限頁'],
      layout_reason:'先用表格說明制度怎麼算，再區分自付差額與自費，最後列免除對象。',
      tone:'專業易懂', tone_reason:'制度與金額需要精確、標明生效日期。',
      to_verify:['115年全年上限：健保署頁面95,000元與草案報導9.4萬元不同','門診基本部分負擔仍為106年版本，留意是否再調整']},
    decision_points:[DP_CAP]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'掛號費以外還要付什麼？健保部分負擔與自付差額白話說',
    update_date:'2026/11/23',
    intro:'帶爸媽去大醫院看病，櫃檯收的錢裡有一筆叫「部分負擔」，就是健保要求我們自己出的一小部分。去醫學中心沒有轉診單，門診要付420元；住院則是醫療費的5%到30%。好在住院有上限，115年同一次住院最多付57,000元、一整年最多95,000元，多的可以申請退回。比較容易讓人荷包失血的，是健保只給一部分的「自付差額」和完全「自費」的項目。',
    sections:[
      {heading:'看病要付多少，一張表看懂',format:'table',table:TABLE},
      {heading:'差額和自費差在哪？',format:'bullets',items:[
        '自付差額：健保付基本款的錢，你選比較貴的特殊材料（像塗藥支架、特殊人工水晶體），只要補差價。',
        '完全自費：健保不給付的，例如部分新藥、病房差額、請看護，要全部自己付，也不算進住院上限。',
        '開刀前記得請醫院說清楚要不要自費、大概多少錢，也可以上健保署「自費醫材比價網」比一比。'
      ]},
      {heading:'這些人可以不用付',format:'bullets',items:[
        '重大傷病看那個病、生小孩，以及在山地離島看病。',
        '低收入戶、百歲人瑞，還有健保卡上有「榮」字的榮民家戶代表。',
        '3歲以下小朋友、因工作受傷生病，由其他單位幫忙出。',
        '有身心障礙證明的人，門診不論去哪一級醫院都只收50元。'
      ]},
      {heading:'癌症新藥可以「先給付、再評估」',format:'bullets',items:[
        '從114年開始，健保對一些已證實有效、但還沒正式納入給付的癌症新藥，可以先給付，同時蒐集用藥成效，原則上2到3年、最長5年後再決定要不要繼續給付（健保署）。',
        '如果之後沒有繼續給付，藥廠要協助病人換藥，換藥期間最長一年免費供藥。所以就算現在健保有給付，也要和醫師討論後續怎麼安排。'
      ]}
    ],
    think_tank_view:'健保的部分負擔其實有上限保護，比較需要事先準備的是健保不給付的自費藥、特材差額和看護費。下次陪家人住院前，先問清楚哪些要自費，也趁機看看家裡的保障有沒有涵蓋這些。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'金額引自健保署公開資料並標明年份，未使用誇大保障用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以陪家人就醫的情境帶出部分負擔、差額與免除對象。', tone:'生活親切', tone_reason:'給一般家庭讀者閱讀。', to_verify:['115年全年上限數字差異']},
    decision_points:[DP_CAP]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'健保部分負擔與自付差額：重點一次看',
    update_date:'2026/11/23',
    intro:'就醫要自付部分負擔：門診依院所層級收固定金額，住院收5%到30%。115年住院上限為每次57,000元、全年95,000元。',
    sections:[
      {heading:'怎麼算',format:'table',table:TABLE},
      {heading:'健保之外',format:'bullets',items:[
        '特殊材料只自付超出健保給付的差額。',
        '自費藥、病房差額、看護全額自付，不計入上限。'
      ]},
      {heading:'免部分負擔',format:'bullets',items:[
        '重大傷病、分娩、山地離島就醫。',
        '低收入戶、百歲人瑞、榮民家戶代表。'
      ]},
      {heading:'暫時性支付',format:'bullets',items:[
        '癌症新藥可先納入健保給付，協議期間原則二至三年、最長五年後再評估（健保署，114年起）。',
        '未續給付時，廠商須協助轉換治療並無償供藥最長一年。'
      ]}
    ],
    think_tank_view:'部分負擔有上限，真正的缺口在健保不給付的自費項目；就醫前先問清楚費用。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'金額引自健保署公開資料並標明年份，未使用誇大保障用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為怎麼算、健保之外、免部分負擔三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['115年全年上限數字差異']},
    decision_points:[DP_CAP]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'健保部分負擔與自費差額', output_mode:'single', layout_type:'data',
    communication_priority:{primary_message:'住院部分負擔有上限，自費項目才是缺口', primary_visual:'5.7 萬元', secondary_message:'115 年全年上限 9.5 萬元', action_priority:'就醫前問清楚自費'},
    headline_hook:'看病自己付多少？', headline_main:'健保部分負擔一次看懂', title_accent:'一次看懂',
    primary_stat:{kicker:'115 年・每次住院', value:'5.7 萬元', label:'住院部分負擔上限', note:'健保署公布｜全年上限 95,000 元'},
    chart:{type:'bar', title:'每次住院部分負擔上限（元）', points:[
      {label:'112', value:48000, display:'4.8 萬'},
      {label:'113', value:50000, display:'5.0 萬'},
      {label:'114', value:51000, display:'5.1 萬'},
      {label:'115', value:57000, display:'5.7 萬', highlight:true}
    ], note:'健保署核退上限頁｜依每人平均國民所得調整'},
    secondary_stats:[
      {value:'420 元', label:'醫學中心未轉診門診'},
      {value:'750 元', label:'醫學中心急診'},
      {value:'10–30%', label:'急性病房住院'}
    ],
    action_title:'就醫前這樣做',
    action_cards:[
      {key:'轉', text:'先看診所，需要時轉診到大醫院'},
      {key:'問', text:'開刀前問清楚自費與差額項目'},
      {key:'比', text:'上自費醫材比價網比較收費'},
      {key:'退', text:'超過住院上限，次年6月底前申請核退'}
    ],
    carousel_suggestion:{reason:'若想把門診、住院與自費分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'門急診怎麼收', headline_main:'看院所層級與轉診'},
      {layout_type:'data', headline_hook:'住院有上限', headline_main:'115 年每次 5.7 萬元'},
      {layout_type:'action', headline_hook:'健保之外', headline_main:'自費前先問清楚'}]},
    hashtags:['健保部分負擔','自付差額','住院費用','健保制度'],
    sources:['衛生福利部中央健康保險署'],
    illustration_category:'general',
    illustration:{topic:'健保就醫費用', audience:'成年人與陪病家屬', scene:'一位成年子女陪長輩在醫院櫃檯看收據與費用說明，櫃檯人員指著表單解釋',
      emotion:'清楚、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An adult child and an older parent at a hospital billing counter reviewing a receipt while a staff member explains the form, calm and clear mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['115年每次住院上限57,000元、全年95,000元（健保署核退上限頁）','門急診金額取自健保署部分負擔說明頁'],
      layout_reason:'制度類主題用 data：住院上限當主數字，近 4 年上限走勢放小圖，門急診金額放第二層，最後給就醫前行動。',
      tone:'專業易懂', tone_reason:'金額需要精確並標明年份。',
      to_verify:['全年上限 95,000 元與草案報導 9.4 萬元不同']},
    decision_points:[Object.assign({}, DP_CAP, {current:'全年上限 95,000 元（健保署公布）'})],
    content_check_note:'金額引自健保署並標明年份，未使用誇大保障用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'健保部分負擔與自費差額',
    collect:{
      summary:'健保部分負擔依門診、急診、藥品與住院分別計收，112年7月起急診與藥品調整；住院另有每次與全年上限，115年調升為57,000元與95,000元。民眾常把部分負擔、自付差額與完全自費混為一談，是醫療費用溝通中最常被問的「健保缺口」。',
      objective_data:[
        {item:'政策動向',desc:'115年每次住院上限57000元：健保署公布115年每次住院部分負擔上限為57,000元、全年95,000元，適用急性病房30日內與慢性病房180日內，超過部分可於次年6月30日前申請核退。',tag:'官方統計',source:{name:'健保署：全年及每次住院部分負擔之核退金額上限',url:'https://www.nhi.gov.tw/ch/cp-5184-4d67b-2743-1.html'}},
        {item:'年度趨勢方向',desc:'每次住院上限由112年48000元調升到115年57000元：上限依每人平均國民所得計算，近年隨國民所得增加逐年調升，115年單次上限較114年增加6,000元。',tag:'官方統計',source:{name:'健保署：全年及每次住院部分負擔之核退金額上限',url:'https://www.nhi.gov.tw/ch/cp-5184-4d67b-2743-1.html'}},
        {item:'政策動向',desc:'醫學中心急診750元：112年7月1日起醫學中心急診部分負擔為750元、區域醫院400元，門診藥品部分負擔在醫學中心與區域醫院最高300元，醫院慢性病連續處方箋第1次調劑也要計收。',tag:'官方統計',source:{name:'健保署：門、急診部分負擔',url:'https://www.nhi.gov.tw/ch/cp-5163-9803c-2737-1.html'}},
        {item:'好發族群年齡層',desc:'住院部分負擔10%到30%：急性病房住院30日內收10%、31到60日20%、61日後30%，慢性病房30日內5%起，重大傷病、分娩、低收入戶等免除部分負擔。',tag:'官方統計',source:{name:'健保署：住院部分負擔',url:'https://www.nhi.gov.tw/ch/cp-5161-28ca5-2737-1.html'}}
      ],
      product_view:['機會：住院部分負擔有上限，但自費藥物、特材差額、病房差額與看護不在上限內，可用來說明實支實付醫療保障的定位。','機會：以「部分負擔、自付差額、完全自費」三層架構協助保戶理解理賠範圍。','風險：不可誇大健保不足或暗示特定商品可涵蓋所有自費支出；金額需標明年度。'],
      marketing_view:['機會：每年1月住院上限調整時是固定溝通檔期，可用「今年住院最多付多少」做說明內容。','機會：陪病子女是就醫費用的主要詢問者，適合以「陪爸媽住院前先問這幾件事」切入。','風險：金額每年調整，舊年度圖卡需下架或標註年份。'],
      alert_level:'low',
      alert_reason:'屬長期存在的健保制度，金額每年1月依國民所得調整；無急迫時效事件，適合年初與住院相關主題一併溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('例如部分新藥、指定醫師、病房費差額、住院看護','MEDICAL_INTERPRETATION','overgeneralization',
          '「部分新藥」範圍模糊，健保收載新藥後即可給付，未說明是「尚未收載或不符給付規定」的藥品，讀者可能以為新藥一律自費。','low','no',
          null,'no','clarify','屬用語精確度問題。',
          '例如尚未納入健保或不符給付規定的藥品、指定醫師、病房費差額、住院看護',
          ['例如部分新藥、病房差額、請看護']),
        F('住院另有每次與全年上限，115年分別為57,000元與95,000元','DATA_FACTUAL_ACCURACY','scope_condition_missing',
          '上限只適用急性病房30日內、慢性病房180日內的部分負擔，超過天數的部分不受上限保護，導言未說明適用範圍。','medium','no',
          null,'yes','clarify','適用範圍在表格中有提到，但導言單獨引用時容易誤解。',
          '住院另有每次與全年上限（限急性病房30日內、慢性病房180日內），115年分別為57,000元與95,000元'),
        F('醫學中心經轉診170元、未經轉診420元','SOURCE_EVIDENCE','scope_condition_missing',
          '此為西醫門診「基本部分負擔」，不含藥品部分負擔；讀者可能以為看一次門診總共只付這個金額。','low','no',
          null,'no','clarify','金額本身正確。',
          '醫學中心經轉診170元、未經轉診420元（不含藥品部分負擔）'),
        F('只需自付超出的差額','LEGAL_COMPLIANCE','consent_requirement',
          '自付差額特材依規定須由醫療院所事先說明並取得病人同意，此句僅講費用，未提醒病人權益。','low','no',
          null,'no','clarify','同意程序在下一點有提到。',
          '只需自付超出的差額，並應在使用前由院所說明、經病人同意')
      ],
      card:[
        F('醫學中心未轉診門診','DATA_FACTUAL_ACCURACY','scope_condition_missing',
          '420 元為西醫門診基本部分負擔，卡面未說明不含藥品部分負擔。','low','no',
          null,'no','clarify','屬口徑說明。',
          '醫學中心未轉診門診（不含藥費）'),
        F('超過住院上限，次年6月底前申請核退','MEDICAL_INTERPRETATION','scope_condition_missing',
          '核退只限急性病房30日內、慢性病房180日內的部分負擔，不含自費與差額，卡面可能讓人以為所有住院花費都能退。','medium','no',
          null,'no','clarify','適用範圍需補充。',
          '住院部分負擔超過上限，可申請核退')
      ]
    },
    title_alts:[
      '看病自己要付多少？一次看懂健保部分負擔與自付差額',
      '掛號費以外還要付什麼？健保部分負擔與自付差額白話說',
      '115年住院最多付5.7萬：部分負擔、差額、自費三層一次看'
    ],
    card_title_alts:[
      ['看病自己付多少？','健保部分負擔一次看懂'],
      ['住院有上限','115 年每次 5.7 萬元'],
      ['部分負擔 vs 自費','健保之外的錢怎麼算']
    ],
    data_addon:[
      '115年全年住院部分負擔上限95,000元，114年為86,000元。',
      '身心障礙者門診基本部分負擔不論院所層級均收50元。',
      '持醫院慢性病連續處方箋，第2、3次調劑免藥品部分負擔。'
    ],
    cta:'下次陪家人住院或開刀前，先請醫院列出自費與自付差額項目，再對照健保署自費醫材比價網。'
  });
})();
