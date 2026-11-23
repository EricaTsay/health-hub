/* v6 示範主題：惡性貧血（B6 眼耳鼻喉・免疫血液・骨骼肌肉）
   查證日期：2026-11-20。數據來源：鏡週刊 2025-12-23（台北慈濟醫院醫師與營養師受訪；引述國健署維生素B12建議攝取量）、
   ScienceDaily 2026-06-25（轉載 The Conversation：B12缺乏可能被誤認為老化）。
   查無國內官方惡性貧血或維生素B12缺乏盛行率統計；國健署 DRIs 第八版原文頁面未能直接讀取（網站動態載入），2.4微克為媒體引述。
   參考方向：健康智庫〈惡性貧血〉2022/12。 */
(function(){
  const MM = 'https://www.mirrormedia.mg/story/20251223edi019';
  const SD = 'https://sciencedaily.com/releases/2026/06/260623083116.htm';
  const REFS = [
    {title:'7旬翁反覆頭暈跌倒！「1飲食習慣」釀營養性神經病變惹禍',source:'鏡週刊',url:MM},
    {title:'This common vitamin deficiency can mimic normal aging',source:'ScienceDaily（轉載 The Conversation）',url:SD}
  ];
  const TABLE = {headers:['高風險族群','原因'], rows:[
    ['高齡者','胃酸與內在因子分泌減少，B12吸收變差'],
    ['自體免疫胃炎（惡性貧血）','免疫系統破壞胃壁細胞，缺乏吸收B12所需的內在因子'],
    ['胃切除或腸道手術後','吸收B12的部位或機制受影響'],
    ['全素食者、長期服用特定慢性病藥物','攝取不足，或藥物影響吸收']
  ]};
  const TAGS = ['惡性貧血','維生素B12','巨球性貧血','手腳麻木','高齡營養'];

  const DP_RDA = {id:'dp-pa-rda', type:'data_scope', title:'B12建議量的出處層級',
    desc:'「成人每日2.4微克」是鏡週刊2025年報導引述國健署建議；國健署膳食營養素參考攝取量原文頁面本次未能直接讀取核對。惡性貧血病人的問題在「吸收」而非「攝取」，建議量不適用於治療。AI 沒有替你決定是否保留這個數字。',
    current:'一般成人每日2.4微克（媒體引述國健署）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'改成不寫數字', action:'replace', from:'一般成人每日建議攝取量為2.4微克', to:'一般人可從肉、魚、蛋、奶類攝取足夠B12'}]};

  const PRO = {
    content_type:'健康文章',
    title:'惡性貧血不只是貧血：手腳麻、記憶變差，可能是B12吸收出問題',
    update_date:'2026/11/20',
    intro:'惡性貧血是一種自體免疫疾病：免疫系統破壞胃壁細胞，使身體缺乏吸收維生素B12所需的「內在因子」，造成B12缺乏與巨球性貧血。B12缺乏除了疲倦、臉色蒼白，還可能出現手腳麻木、步態不穩、記憶力下降等神經症狀。2026年一篇科學評論提醒，B12缺乏的表現常被誤認為正常老化，容易延誤發現。',
    sections:[
      {heading:'B12缺乏的高風險族群',format:'table',table:TABLE},
      {heading:'可能出現的症狀',format:'bullets',items:[
        '貧血症狀：疲倦、喘、臉色蒼白、心悸。',
        '口腔變化：舌頭發紅刺痛、舌苔變少、口角炎。',
        '神經症狀：手腳麻木刺痛、平衡變差、頭暈、注意力與記憶力下降；神經損傷若拖延太久可能不易恢復。'
      ]},
      {heading:'檢查與治療',format:'bullets',items:[
        'B12濃度不在一般常規血液檢查內，有上述症狀或屬高風險族群，可請醫師評估是否需要檢驗。',
        '惡性貧血因吸收障礙，通常需在醫師指示下以注射或高劑量補充長期治療，不能只靠飲食。',
        '一般成人每日建議攝取量為2.4微克（媒體引述國健署建議），可從肉、魚、蛋、奶類攝取；全素食者宜與醫師或營養師討論補充。'
      ]}
    ],
    think_tank_view:'B12缺乏最容易被忽略的地方，是它的症狀很像「老了」：記性變差、走路不穩、容易累。家中長輩若同時有長期服藥、胃部手術史或吃全素，又出現手腳麻或頭暈，值得請醫師評估一次B12。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'攝取建議標明為媒體引述國健署，國際觀點標明出處，強調惡性貧血需醫師治療，未使用療效保證用語，未推薦特定保健食品。',
    ai_rationale:{basis:['B12建議量2.4微克（鏡週刊引述國健署）','B12缺乏可能被誤認為老化（ScienceDaily 2026轉載 The Conversation）'],
      layout_reason:'先用表格列出高風險族群，再整理症狀，最後說明檢查與治療，區分「攝取不足」與「吸收障礙」。',
      tone:'專業易懂', tone_reason:'需避免讀者以為吃保健食品就能處理惡性貧血。',
      to_verify:['國健署DRIs第八版B12建議量原文待核對','查無國內惡性貧血盛行率統計']},
    decision_points:[DP_RDA]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'爸媽手腳麻、走路不穩、記性變差？可能是缺B12',
    update_date:'2026/11/20',
    intro:'長輩常說手腳麻麻的、走路有點晃、記性越來越差，很多人以為只是年紀大了。其實這可能是維生素B12不夠。惡性貧血是其中一種原因：身體的免疫系統出錯，讓胃沒辦法吸收B12，吃再多也補不進去，需要醫師治療。',
    sections:[
      {heading:'這些人比較容易缺B12',format:'table',table:TABLE},
      {heading:'缺B12會怎樣？',format:'bullets',items:[
        '容易累、臉色白、走一下就喘。',
        '舌頭紅紅刺刺的、嘴角破。',
        '手腳麻、走路不穩、頭暈、忘東忘西；拖太久神經可能不容易恢復。'
      ]},
      {heading:'怎麼檢查、怎麼補？',format:'bullets',items:[
        '一般抽血不一定會驗B12，有症狀就請醫師評估要不要驗。',
        '惡性貧血是「吸收不了」，通常要打針或照醫師指示補充，光靠吃東西不夠。',
        '一般人從肉、魚、蛋、奶就能攝取；吃全素的人可以問營養師怎麼補。'
      ]}
    ],
    think_tank_view:'別把長輩的手腳麻和健忘都歸給年紀。如果家人吃全素、開過胃部手術或長期吃藥，下次回診時幫他問問醫師：「需要驗一下B12嗎？」',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'內容強調由醫師評估與治療，語氣親切，未使用療效保證用語，未推薦特定保健食品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'以長輩常見抱怨帶出高風險族群、症狀與檢查。', tone:'生活親切', tone_reason:'給子女與長輩閱讀。', to_verify:['國健署建議量原文待核對']},
    decision_points:[Object.assign({}, DP_RDA, {current:'未寫建議量數字', options:[{label:'沿用目前寫法', action:'keep'}]})]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'惡性貧血：B12吸收障礙，手腳麻要警覺',
    update_date:'2026/11/20',
    intro:'惡性貧血是自體免疫造成B12吸收障礙，可能引起貧血與手腳麻、記憶變差等神經症狀，常被誤認為老化。',
    sections:[
      {heading:'高風險族群',format:'table',table:TABLE},
      {heading:'症狀',format:'bullets',items:[
        '疲倦、蒼白、舌頭刺痛。',
        '手腳麻、平衡差、記憶下降。'
      ]},
      {heading:'檢查治療',format:'bullets',items:[
        '有症狀請醫師評估驗B12。',
        '惡性貧血需醫師治療，不能只靠飲食。'
      ]}
    ],
    think_tank_view:'B12缺乏症狀像老化；高風險族群出現手腳麻、健忘，應請醫師評估。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'強調醫師評估與治療，未使用療效保證用語，未推薦特定保健食品。',
    ai_rationale:{basis:['同專業易懂版的已查證資料'], layout_reason:'精簡為族群、症狀、治療三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:[]},
    decision_points:[Object.assign({}, DP_RDA, {current:'未寫建議量數字', options:[{label:'沿用目前寫法', action:'keep'}]})]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'惡性貧血', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'B12缺乏常被誤認為老化', primary_visual:'2.4 微克', secondary_message:'惡性貧血是吸收障礙，需醫師治療', action_priority:'高風險族群有症狀，請醫師評估'},
    headline_hook:'手腳麻、記性差？', headline_main:'惡性貧血與 B12 缺乏', title_accent:'B12 缺乏',
    hero_message:'不只是老了', hero_support:'B12 缺乏的症狀常被誤認為正常老化',
    knowledge_title:'常見症狀', knowledge_note:'惡性貧血是**吸收障礙**，需醫師治療',
    knowledge_cards:[
      {label:'貧血', icon:'heart', lines:['疲倦、蒼白、心悸']},
      {label:'口腔', icon:'check', lines:['舌頭紅、刺痛']},
      {label:'神經', icon:'brain', lines:['手腳麻、走路不穩']},
      {label:'認知', icon:'brain', lines:['注意力、記憶變差']}
    ],
    primary_stat:{value:'2.4 微克', label:'一般成人每日 B12 建議攝取量', note:'媒體引述國健署建議'},
    secondary_stats:[
      {value:'高齡', label:'吸收力下降'},
      {value:'全素', label:'攝取來源少'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'察', text:'手腳麻、健忘別只當老化'},
      {key:'驗', text:'高風險族群請醫師評估驗 B12'},
      {key:'治', text:'惡性貧血依醫囑注射或補充'},
      {key:'吃', text:'一般人從肉魚蛋奶攝取'}
    ],
    carousel_suggestion:{reason:'若想把症狀、高風險族群與治療分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'不只是老了', headline_main:'B12 缺乏 4 類症狀'},
      {layout_type:'knowledge', headline_hook:'誰容易缺 B12', headline_main:'4 種高風險族群'},
      {layout_type:'action', headline_hook:'惡性貧血', headline_main:'檢查與治療重點'}]},
    hashtags:['惡性貧血','維生素B12','手腳麻木','高齡營養'],
    sources:['國民健康署（媒體引述）','台北慈濟醫院（媒體受訪）'],
    illustration_category:'elderly-care',
    illustration:{topic:'B12缺乏與惡性貧血', audience:'長輩與子女', scene:'一位長者坐在診間揉著發麻的手，醫師拿著抽血單向他和陪同的兒子說明',
      emotion:'被理解、安心', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'An older adult in a clinic rubbing a numb hand while a doctor explains a blood test form to him and his accompanying son, reassured mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['B12建議量2.4微克（鏡週刊引述國健署）'],
      layout_reason:'選 knowledge：4 類症狀放中段，建議量與高風險族群退到下方，最後給 4 個行動。',
      tone:'專業易懂', tone_reason:'區分攝取不足與吸收障礙。',
      to_verify:['國健署建議量原文待核對']},
    decision_points:[Object.assign({}, DP_RDA, {current:'2.4 微克（媒體引述國健署）', options:[{label:'沿用目前寫法', action:'keep'}]})],
    content_check_note:'建議量標明為媒體引述國健署，強調醫師治療，未使用療效保證用語，未推薦特定保健食品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'惡性貧血',
    collect:{
      summary:'惡性貧血是自體免疫造成的維生素B12吸收障礙，B12缺乏的神經與認知症狀常被誤認為老化；高齡化、全素飲食與長期用藥使B12議題更受關注，「辨識高風險族群、及早檢驗」是值得溝通的議題。',
      objective_data:[
        {item:'盛行率／發生率',desc:'成人每日B12建議攝取2.4微克：鏡週刊2025年12月報導引述國健署建議，孕婦與哺乳婦女需2.6至2.8微克（查無國內惡性貧血或B12缺乏盛行率官方統計）。',tag:'市場觀察',source:{name:'鏡週刊：7旬翁反覆頭暈跌倒！「1飲食習慣」釀營養性神經病變惹禍',url:MM}},
        {item:'年度趨勢方向',desc:'B12缺乏常被誤認為正常老化：2026年6月 The Conversation 評論（ScienceDaily 轉載）指出，長者、素食者與吸收不良者為高風險，疲倦與腦霧可能在典型缺乏徵兆前出現。',tag:'市場觀察',source:{name:'ScienceDaily：This common vitamin deficiency can mimic normal aging',url:SD}},
        {item:'政策動向',desc:'全素食者與年長者建議以補充劑為主要來源：台北慈濟醫院營養師2025年受訪建議，奶蛋素者可透過每日1至2杯牛奶與1顆雞蛋補足，目前國內無B12常規篩檢政策。',tag:'市場觀察',source:{name:'鏡週刊：7旬翁反覆頭暈跌倒！「1飲食習慣」釀營養性神經病變惹禍',url:MM}},
        {item:'好發族群年齡層',desc:'高齡、胃切除與長期服藥者為高風險：醫師受訪指出，高齡者、曾接受胃切除手術或長期服用慢性病藥物者，可能因吸收下降而缺乏B12，症狀包括手腳麻木、巨球性貧血與頭暈。',tag:'市場觀察',source:{name:'鏡週刊：7旬翁反覆頭暈跌倒！「1飲食習慣」釀營養性神經病變惹禍',url:MM}}
      ],
      product_view:['機會：B12缺乏與跌倒、認知退化相關，可結合熟齡健康管理服務溝通。','機會：素食族群與長期服藥者是可具體點名的關懷對象。','風險：避免推薦特定保健食品，或暗示補充B12可預防失智。'],
      marketing_view:['機會：「不只是老了」能引發子女對長輩狀況的關注。','機會：素食人口多，B12補充是實用的營養資訊。','風險：惡性貧血需醫療處置，內容不可簡化為「多吃就好」。'],
      alert_level:'low',
      alert_reason:'屬長期營養與高齡健康議題，無時效性政策事件。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('一般成人每日建議攝取量為2.4微克（媒體引述國健署建議）','SOURCE_EVIDENCE','secondary_citation',
          '文中已註明是媒體引述，但未連到國健署膳食營養素參考攝取量原文；營養建議應優先引用原始文件。','low','yes',
          '國健署「國人膳食營養素參考攝取量」第八版維生素B12建議量。','no','confirm','數字與一般認知一致，屬出處層級問題。',
          '一般成人每日建議攝取量為2.4微克（國健署國人膳食營養素參考攝取量）'),
        F('2026年一篇科學評論提醒','SOURCE_EVIDENCE','commentary_not_study',
          '引用的是科普評論，不是研究結果，文中「提醒」容易讓讀者以為是新研究發現。','low','no',
          null,'no','clarify','屬證據層級說明。',
          '2026年一篇國外學者的科普評論提醒'),
        F('神經損傷若拖延太久可能不易恢復','MEDICAL_INTERPRETATION','missing_rationale',
          '只說可能不易恢復，沒有說明「及早治療多數可改善」，可能讓讀者過度擔心。','low','no',
          null,'no','clarify','補一句即可。',
          '神經症狀及早治療多可改善，拖延太久則可能不易恢復',
          ['拖太久神經可能不容易恢復']),
        F('長期服用特定慢性病藥物','TERMINOLOGY_LANGUAGE','vague_term',
          '「特定藥物」未舉例，讀者難以判斷自己是否屬於高風險族群。','low','no',
          null,'no','clarify','可建議詢問醫師或藥師。',
          '長期服用特定慢性病藥物（可詢問醫師或藥師是否影響B12吸收）')
      ],
      card:[
        F('媒體引述國健署建議','SOURCE_EVIDENCE','secondary_citation',
          '主數字為媒體轉述，卡面應盡量引用國健署原始文件。','low','yes',
          '國健署DRIs第八版。','no','confirm','屬出處層級問題。',
          '國健署國人膳食營養素參考攝取量'),
        F('一般成人每日 B12 建議攝取量','MEDICAL_INTERPRETATION','population_reference_as_individual',
          '惡性貧血病人是吸收障礙，一般建議量不適用；卡面把建議量當主數字，可能讓讀者以為補足攝取就能處理惡性貧血。','medium','no',
          null,'no','clarify','屬適用對象說明。',
          '一般成人每日 B12 建議攝取量（不適用於惡性貧血治療）')
      ]
    },
    title_alts:[
      '惡性貧血不只是貧血：手腳麻、記憶變差，可能是B12吸收出問題',
      '爸媽手腳麻、走路不穩、記性變差？可能是缺B12',
      '不只是老了：B12缺乏高風險族群與檢查重點'
    ],
    card_title_alts:[
      ['手腳麻、記性差？','惡性貧血與 B12 缺乏'],
      ['不只是老了','認識 B12 缺乏'],
      ['吃全素、長期吃藥？','留意 B12 缺乏']
    ],
    data_addon:[
      '營養師建議：奶蛋素者每日1至2杯牛奶與1顆雞蛋可補足B12建議量。',
      '醫師個案：70多歲長者反覆頭暈跌倒，確診為B12缺乏造成的營養性神經病變。',
      '一般常規血液檢查不一定包含B12濃度，需另行檢驗。'
    ],
    cta:'如果家中長輩吃全素、開過胃部手術或長期服藥，又常手腳麻、頭暈，下次回診時請醫師評估是否需要驗B12。'
  });
})();
