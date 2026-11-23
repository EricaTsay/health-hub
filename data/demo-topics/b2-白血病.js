/* v6 示範主題：白血病（B2 癌症）
   查證日期：2026-11-20。數據來源：衛福部114年死因統計摘要表（白血病死亡時間序列）、衛福部112年癌症登記報告新聞稿（男性十大癌症排名）、
   國健署2025-09-26兒童癌症新聞稿（111年癌症登記：0-19歲新發562人、5年存活率約8成）、國健署2021-03-31兒童癌症新聞稿（白血病為兒童最主要癌症）、TVBS 2021-09-30（台大血液腫瘤科醫師說明警訊）。
   112年癌登附表未列白血病新發人數；文中不寫官方新發人數，媒體引述之「約2,550人」標為二手且未用於主數字。
   參考方向：健康智庫〈白血病〉2022/12。 */
(function(){
  const REFS = [
    {title:'114年死因統計結果摘要表',source:'衛生福利部',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'},
    {title:'公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始',source:'衛生福利部',url:'https://mohw.gov.tw/cp-16-84987-1.html'},
    {title:'以家庭為中心照護 兒童癌症早期診治效果佳',source:'衛生福利部國民健康署',url:'https://www.mohw.gov.tw/cp-2704-84076-1.html'},
    {title:'兒童癌症5年存活率8成，早期診治效果佳 九字訣邀父母、師長共同關注兒童健康',source:'衛生福利部國民健康署',url:'https://mohw.gov.tw/cp-2704-58852-1.html'},
    {title:'台大醫曝老人5症狀恐是癌！「這種癌」高致命卻像感冒',source:'TVBS新聞網',url:'https://health.tvbs.com.tw/medical/329935'}
  ];
  const TABLE = {headers:['分類','說明'], rows:[
    ['依細胞來源','分為骨髓性與淋巴性'],
    ['依進展速度','各自再分為急性與慢性'],
    ['急性骨髓性白血病','醫師指出占每年新增白血病3成以上，65歲以上約占5成'],
    ['兒童','白血病是兒童最主要的癌症；111年0-19歲兒童新發癌症562人']
  ]};
  const TAGS = ['白血病','血癌','急性骨髓性白血病','兒童癌症','血液腫瘤'];

  const DP_COUNT = {id:'dp-leu-count', type:'data_scope', title:'白血病新發人數查無最新官方數字',
    desc:'112年癌症登記附表只列十大癌症，白血病不在其中；媒體曾引述「每年新診斷約2,550人」，但未標示登記年份。AI 以官方可查的114年死亡人數當主數字，沒有採用年份不明的新發人數。',
    current:'114年白血病死亡1,266人（死因統計）',
    options:[{label:'沿用目前寫法', action:'keep'}, {label:'查看資料差異', action:'compare'}],
    compare:[
      {label:'1,266人', value:'114年死亡', note:'衛福部死因統計（目前採用）'},
      {label:'約2,550人', value:'每年新診斷', note:'2021年媒體引述國健署資料，年份不明'}
    ]};

  const PRO = {
    content_type:'健康文章',
    title:'白血病症狀像感冒？臉色蒼白、瘀青、發燒不退要警覺',
    update_date:'2026/11/20',
    intro:'白血病俗稱血癌，是造血系統的癌症。依衛生福利部114年死因統計，白血病死亡1,266人，居癌症死因第12位，年齡標準化死亡率每十萬人2.9人、十年來大致持平；112年癌症登記中，白血病居男性癌症標準化發生率第9位。國健署指出白血病是兒童最主要的癌症；依111年癌症登記，0-19歲兒童新發癌症562人，整體5年存活率約8成。由於早期症狀常被誤認為感冒或老化，認得警訊格外重要。',
    sections:[
      {heading:'白血病的分類',format:'table',table:TABLE},
      {heading:'要留意的警訊',format:'bullets',items:[
        '台大血液腫瘤科醫師指出，臉色蒼白、疲倦、發燒、瘀青出血、骨頭疼痛，可能是急性白血病的表現。',
        '這些症狀容易和感冒、老化混淆，若持續不改善，應到內科或血液腫瘤科做血液檢查。',
        '國健署兒童癌症「九字訣」中，「白」指臉色蒼白等貧血現象、「紅」指皮膚瘀青出血，家長可多留意。'
      ]},
      {heading:'治療與就醫',format:'bullets',items:[
        '確診需透過血液及骨髓檢查，治療方式依類型、年齡與身體狀況由醫師評估。',
        '醫師說明，健保已給付部分標靶藥物，讓無法承受高強度化療的年長病人有更多選擇。',
        '治療期間免疫力較差，應依醫囑預防感染並按時接種疫苗。'
      ]}
    ],
    think_tank_view:'白血病的警訊很「普通」：累、臉色差、容易瘀青、發燒不退，因此最容易被忽略。若這些狀況持續一兩週沒有改善，抽個血就能初步了解，比自己猜測安心許多。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'死亡人數與排名引自衛福部114年死因統計並標明年份，兒童資料引自國健署111年癌症登記說明，警訊與治療標明為醫師說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['114年白血病死亡1,266人（死因統計）','112年居男性癌症發生第9位（衛福部新聞稿）','兒童癌症資料（國健署2025年新聞稿，111年癌症登記）'],
      layout_reason:'先用表格說明分類，再整理警訊，最後給就醫與治療重點。',
      tone:'專業易懂', tone_reason:'警訊不典型，需要清楚說明。',
      to_verify:['白血病新發人數需查癌登年報全文','111年兒童癌症新聞稿未列各癌別占比','急性骨髓性白血病占比為醫師說明']},
    decision_points:[DP_COUNT]
  };

  const FRIENDLY = {
    content_type:'健康文章',
    title:'一直累、臉色蒼白、莫名瘀青？別只當太累，抽血檢查一下',
    update_date:'2026/11/20',
    intro:'白血病就是大家說的「血癌」。衛福部統計，114年有1,266人因白血病過世；它也是小朋友最常見的癌症。白血病早期的樣子很像感冒或太累，所以常常被忽略。認得這些訊號，就能早一步就醫。',
    sections:[
      {heading:'白血病有哪幾種？',format:'table',table:TABLE},
      {heading:'出現這些狀況要注意',format:'bullets',items:[
        '臉色很蒼白、一直很累。',
        '發燒一直不退，或沒撞到卻出現瘀青、流鼻血、牙齦出血。',
        '骨頭莫名疼痛。'
      ]},
      {heading:'可以這樣做',format:'bullets',items:[
        '症狀持續一兩週沒改善，就去內科抽血檢查。',
        '小朋友出現臉色蒼白、瘀青不退，帶去給小兒科醫師看。',
        '治療中要特別小心感染，照醫師指示照顧。'
      ]}
    ],
    think_tank_view:'孩子突然變得很沒精神、臉色蒼白，或長輩瘀青總是不退，都值得多問醫師一句。抽一管血，就能幫忙排除很多擔心。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部並標明年份，警訊標明為醫師與國健署說明，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'以容易被忽略的日常症狀切入。', tone:'生活親切', tone_reason:'給家長與家屬閱讀。', to_verify:['「一兩週」為建議時間，非官方標準']},
    decision_points:[DP_COUNT]
  };

  const BRIEF = {
    content_type:'健康文章',
    title:'白血病：蒼白、瘀青、發燒不退要抽血',
    update_date:'2026/11/20',
    intro:'114年白血病死亡1,266人；白血病是兒童最常見的癌症。早期症狀易被誤認為感冒。',
    sections:[
      {heading:'分類',format:'table',table:TABLE},
      {heading:'警訊',format:'bullets',items:[
        '蒼白、疲倦、發燒。',
        '瘀青出血、骨痛。'
      ]},
      {heading:'行動',format:'bullets',items:[
        '症狀持續就醫抽血。',
        '治療中預防感染。'
      ]}
    ],
    think_tank_view:'白血病警訊不典型，持續的蒼白、瘀青、發燒就該抽血檢查。',
    hashtags:TAGS,
    references:REFS,
    content_check_note:'數據引自衛福部並標明年份，未使用療效保證用語，未涉及具體商品。',
    ai_rationale:{basis:['同專業易懂版的已查證數據'], layout_reason:'精簡為分類、警訊、行動三段。', tone:'簡潔有力', tone_reason:'社群短文與快速閱讀。', to_verify:['新發人數待查']},
    decision_points:[DP_COUNT]
  };

  const CARD = {
    content_type:'健康圖卡', topic:'白血病', output_mode:'single', layout_type:'knowledge',
    communication_priority:{primary_message:'白血病症狀像感冒，容易被忽略', primary_visual:'1,266 人', secondary_message:'兒童最常見的癌症', action_priority:'症狀持續就醫抽血'},
    headline_hook:'症狀像感冒？', headline_main:'白血病 4 大警訊', title_accent:'4 大警訊',
    hero_message:'俗稱血癌', hero_support:'白血病是兒童最常見的癌症（國健署）',
    knowledge_title:'4 大警訊', knowledge_note:'症狀持續不改善，**抽血檢查**',
    knowledge_cards:[
      {label:'蒼白疲倦', icon:'check', lines:['臉色蒼白','一直很累']},
      {label:'發燒不退', icon:'shield', lines:['反覆發燒','像感冒']},
      {label:'瘀青出血', icon:'check', lines:['沒撞到就瘀青','流鼻血、牙齦出血']},
      {label:'骨頭疼痛', icon:'check', lines:['不明原因','骨頭痛']}
    ],
    primary_stat:{value:'1,266 人', label:'114 年白血病死亡', note:'衛福部死因統計｜標準化死亡率 2.9 持平'},
    secondary_stats:[
      {value:'第 9 位', label:'男性癌症發生（112 年）'},
      {value:'約 8 成', label:'兒童癌症 5 年存活率'}
    ],
    action_title:'這樣做',
    action_cards:[
      {key:'察', text:'留意蒼白、瘀青、發燒不退'},
      {key:'抽', text:'症狀持續就醫做血液檢查'},
      {key:'童', text:'孩子臉色蒼白瘀青看小兒科'},
      {key:'防', text:'治療中依醫囑預防感染'}
    ],
    carousel_suggestion:{reason:'若想把分類、警訊與兒童白血病分開說明，也可拆成 3 張系列圖卡', slides:[
      {layout_type:'knowledge', headline_hook:'白血病分類', headline_main:'骨髓性與淋巴性'},
      {layout_type:'knowledge', headline_hook:'症狀像感冒？', headline_main:'白血病 4 大警訊'},
      {layout_type:'knowledge', headline_hook:'兒童最常見癌症', headline_main:'家長留意九字訣'}]},
    hashtags:['白血病','血癌','兒童癌症','血液腫瘤'],
    sources:['衛生福利部','衛生福利部國民健康署','TVBS新聞網'],
    illustration_category:'screening-checkup',
    illustration:{topic:'白血病血液檢查', audience:'家長與長輩', scene:'護理師在診所為一位臉色疲倦的成人抽血，家人在旁陪伴',
      emotion:'安心、陪伴', style:'flat vector, single accent colour, friendly', colorPalette:'deep green #17603f on transparent',
      imagePrompt:'A nurse drawing blood from a tired-looking adult at a clinic while a family member sits beside them, reassuring mood, flat vector illustration, single deep-green accent colour, transparent background'},
    ai_rationale:{basis:['114年白血病死亡1,266人（死因統計）','警訊（台大醫師說明、國健署九字訣）'],
      layout_reason:'白血病的核心是警訊不典型，選 knowledge：4 大警訊卡當主角，死亡人數與排名退到下方。',
      tone:'專業易懂', tone_reason:'警訊需清楚。',
      to_verify:['兒童癌症存活率為各癌別整體']},
    decision_points:[Object.assign({}, DP_COUNT, {current:'1,266 人｜114 年白血病死亡'})],
    content_check_note:'死亡人數引自衛福部114年死因統計，兒童資料標明年份，警訊標明出處，未使用療效保證用語，未涉及具體商品。'
  };

  const F = (flagged_text, issue_category, sub, explanation, severity, vn, target, ts, action, note, revision, match) =>
    ({passage_id:'P1', flagged_text, issue_category, issue_subcategory:sub, issue_explanation:explanation, severity,
      verification_needed:vn, verification_target:target, time_sensitive:ts, recommended_action:action, uncertainty_note:note,
      suggested_revision:revision || null, match:match || []});

  registerDemoTopic({
    name:'白血病',
    collect:{
      summary:'白血病2025年死亡1,266人、標準化死亡率十年持平，是兒童最常見的癌症，也居男性癌症發生第9位；早期症狀像感冒、易被忽略，「認得不典型警訊、及早抽血」是主要溝通訊息。',
      objective_data:[
        {item:'盛行率／發生率',desc:'2025年白血病死亡1266人：依114年死因統計，白血病居癌症死因第12位，男性761人、女性505人，年齡標準化死亡率每十萬人2.9人。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'年度趨勢方向',desc:'標準化死亡率持平在每十萬人2.9人：白血病死亡人數2016年1,130人、2025年1,266人，標準化死亡率由3.3降至2.9後大致持平。',tag:'官方統計',source:{name:'衛生福利部：114年死因統計結果摘要表',url:'https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html'}},
        {item:'政策動向',desc:'562人0-19歲兒童新發癌症：依國健署2025年9月公布的111年癌症登記，兒童癌症標準化發生率由101年每十萬人15.5人緩降至14.7人，整體5年存活率約8成。',tag:'官方統計',source:{name:'衛生福利部國民健康署：以家庭為中心照護 兒童癌症早期診治效果佳',url:'https://www.mohw.gov.tw/cp-2704-84076-1.html'}},
        {item:'好發族群年齡層',desc:'65歲以上約占急性骨髓性白血病5成：台大血液腫瘤科醫師指出，急性骨髓性白血病占每年新增白血病3成以上，年長者為主要族群（2021年報導）。',tag:'市場觀察',source:{name:'TVBS新聞網：台大醫曝老人5症狀恐是癌',url:'https://health.tvbs.com.tw/medical/329935'}}
      ],
      product_view:['機會：白血病治療涉及化療、標靶與移植，費用與照護期長，可作為癌症與住院醫療保障的溝通情境。','機會：兒童為重要族群，可作為家長檢視子女保障的切點。','風險：避免以兒童罹癌做情緒性銷售訴求，須依條款如實說明。'],
      marketing_view:['機會：「症狀像感冒」是好懂的警訊切點。','機會：9月兒童癌症月可結合國健署「九字訣」溝通。','風險：兒童癌症議題情感強烈，避免恐懼訴求。'],
      alert_level:'low',
      alert_reason:'死亡率持平、無政策事件，適合以警訊衛教方式長期溝通。'
    },
    article_tones:{'專業易懂':PRO, '生活親切':FRIENDLY, '簡潔有力':BRIEF},
    card:CARD,
    review:{
      article:[
        F('0-19歲兒童新發癌症562人','CONTEXT_CONSISTENCY','age_range_mismatch',
          '新發人數的年齡範圍是0-19歲，但同段與九字訣說明的是18歲以下兒童；年齡區間不一致，讀者可能混淆統計對象。','low','no',
          null,'no','clarify','數字引自國健署，原新聞稿本身即混用兩種年齡範圍。',
          '0-19歲兒童及青少年新發癌症562人'),
        F('醫師說明，健保已給付部分標靶藥物','SOURCE_EVIDENCE','vague_claim',
          '未說明是哪一類白血病、哪些藥物與給付條件，讀者無法判斷自己是否適用；且只引自單一醫師受訪。','medium','yes',
          '健保署白血病標靶藥物給付規定。','yes','confirm','屬醫師說明。',
          null),
        F('症狀持續一兩週沒改善，就去內科抽血檢查','MEDICAL_INTERPRETATION','threshold_unsupported',
          '「一兩週」沒有官方依據；若出現大量出血或高燒等急症，應立即就醫而非等待。','medium','no',
          null,'no','clarify','屬建議時間的表述。',
          '症狀持續沒改善就去內科抽血檢查；若有大量出血或高燒不退，請立即就醫'),
        F('居癌症死因第12位','DATA_FACTUAL_ACCURACY','ranking_basis',
          '排名依死亡人數排序（114年），2021年媒體報導曾寫「癌症死因第9位」，讀者若對照可能疑惑。','low','no',
          null,'no','clarify','114年排名正確。',
          '居癌症死因第12位（114年死因統計，依死亡人數）')
      ],
      card:[
        F('兒童癌症 5 年存活率','MEDICAL_INTERPRETATION','scope_broader_than_topic',
          '約 8 成是兒童各類癌症合計的存活率，放在白血病卡面上，讀者可能誤讀為兒童白血病的存活率。','low','no',
          null,'no','clarify','數字引自國健署，屬統計範圍標示。',
          '兒童各類癌症合計 5 年存活率'),
        F('流鼻血、牙齦出血','SOURCE_EVIDENCE','advice_without_basis',
          '流鼻血、牙齦出血為延伸描述，引用的醫師說法只寫「瘀青出血」。','low','no',
          null,'no','clarify','屬常見臨床描述。',
          '容易出血')
      ]
    },
    title_alts:[
      '白血病症狀像感冒？臉色蒼白、瘀青、發燒不退要警覺',
      '一直累、臉色蒼白、莫名瘀青？別只當太累，抽血檢查一下',
      '兒童最常見的癌症：白血病分類與4大警訊'
    ],
    card_title_alts:[
      ['症狀像感冒？','白血病 4 大警訊'],
      ['俗稱血癌','認識白血病'],
      ['孩子臉色蒼白？','留意白血病警訊']
    ],
    data_addon:[
      '114年死因統計：白血病居男性癌症死因第11位（761人）、女性第11位（505人）。',
      '國健署2025年：癌症是18歲以下兒童及少年第4大死因，兒童各類癌症5年存活率皆近6成以上。',
      '國健署兒童癌症九字訣：白、燒、紅、大、腫、痛、神、視、輕。'
    ],
    cta:'如果家人最近總是臉色蒼白、莫名瘀青或發燒不退，這週就陪他去抽血檢查。'
  });
})();
