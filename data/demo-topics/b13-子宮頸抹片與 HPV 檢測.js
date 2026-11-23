/* v6 示範主題：子宮頸抹片與 HPV 檢測（B13 癌症篩檢工具）
   查證日期：2026-11-23。來源：國健署女性子宮頸癌篩檢頁（nodeid=198）、子宮頸癌篩檢介紹（nodeid=357）、HPV後續處置流程（2025-01-22）、衛福部112年癌登新聞稿、114年死因統計摘要表。
   參考方向：清單231列（#554 國際婦女節，定期篩檢護健康）。與「子宮頸癌」「HPV 感染與疫苗」分工：本題講檢查工具。 */
(function(){
  registerDemoTopic({
 "name": "子宮頸抹片與 HPV 檢測",
 "collect": {
  "summary": "國健署補助25至29歲每3年1次、30歲以上每年1次子宮頸抹片，並在35、45、65歲加做HPV檢測。抹片看細胞變化、HPV檢測看高風險病毒感染，定期抹片可降低約70%子宮頸癌死亡率，2025年子宮頸癌死亡625人。",
  "objective_data": [
   {
    "item": "政策動向",
    "desc": "30歲以上每年1次抹片：國健署補助25至29歲每3年1次、30歲以上每年1次子宮頸抹片，建議至少每3年做1次。",
    "tag": "官方統計",
    "source": {
     "name": "衛生福利部國民健康署：女性子宮頸癌篩檢",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=198"
    }
   },
   {
    "item": "年度趨勢方向",
    "desc": "35、45、65歲加做HPV檢測：國健署於這3個年齡提供當年1次人類乳突病毒檢測，並公布後續處置流程。",
    "tag": "官方統計",
    "source": {
     "name": "衛生福利部國民健康署：35、45、65歲子宮頸抹片合併HPV檢測後續處置流程",
     "url": "https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=625&pid=18775"
    }
   },
   {
    "item": "盛行率／發生率",
    "desc": "約70%死亡率降低：衛福部指出定期子宮頸抹片可降低約70%子宮頸癌死亡率。",
    "tag": "官方統計",
    "source": {
     "name": "衛生福利部：公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始",
     "url": "https://mohw.gov.tw/cp-16-84987-1.html"
    }
   },
   {
    "item": "好發族群年齡層",
    "desc": "625人死於子宮頸癌：2025年子宮頸及部位未明示子宮癌死亡625人，居女性癌症死因第8位。",
    "tag": "官方統計",
    "source": {
     "name": "衛生福利部：114年死因統計結果摘要表",
     "url": "https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html"
    }
   }
  ],
  "product_view": [
   "機會：抹片資格每年可用，適合年度健康提醒。",
   "機會：可串連HPV疫苗與女性健康。",
   "風險：避免把HPV陽性描述成罹癌。"
  ],
  "marketing_view": [
   "機會：「抹片與HPV差在哪」是常見疑問。",
   "機會：可結合婦女節溝通。",
   "風險：涉及私密部位，用語需尊重。"
  ],
  "alert_level": "low",
  "alert_reason": "長期公費服務，無急迫事件，適合常態衛教。"
 },
 "article_tones": {
  "專業易懂": {
   "content_type": "健康文章",
   "update_date": "2026/11/23",
   "title": "子宮頸抹片與HPV檢測：差在哪、多久做一次、異常怎麼辦",
   "intro": "子宮頸抹片是看子宮頸細胞有沒有變化，HPV檢測則是看有沒有感染高風險人類乳突病毒。國健署補助25至29歲每3年1次抹片、30歲以上每年1次，並在35、45、65歲加做1次HPV檢測。衛福部指出定期抹片可降低約70%子宮頸癌死亡率，2025年子宮頸癌死亡625人。",
   "sections": [
    {
     "heading": "公費資格",
     "format": "table",
     "table": {
      "headers": [
       "年齡",
       "公費服務"
      ],
      "rows": [
       [
        "25–29歲",
        "子宮頸抹片每3年1次"
       ],
       [
        "30歲以上",
        "子宮頸抹片每年1次（建議至少每3年1次）"
       ],
       [
        "35、45、65歲",
        "當年加做1次人類乳突病毒（HPV）檢測"
       ]
      ]
     }
    },
    {
     "heading": "檢查怎麼做",
     "format": "bullets",
     "items": [
      "醫師以擴陰器撐開陰道，從子宮頸刮取少量細胞，送顯微鏡檢查。",
      "過程約幾分鐘，可能有輕微不適，避開月經期間受檢。",
      "HPV檢測同樣從子宮頸取樣，檢驗高風險型病毒。"
     ]
    },
    {
     "heading": "結果與追蹤",
     "format": "bullets",
     "items": [
      "抹片正常：持續每3年至少1次。",
      "意義不明的鱗狀細胞變化：3至6個月內再做抹片或HPV檢測。",
      "重度癌前病變或疑似癌症：陰道鏡檢查並切片確診。",
      "HPV陽性不等於罹癌，多數感染會自行清除，但需依醫師建議追蹤。"
     ]
    }
   ],
   "think_tank_view": "抹片和HPV檢測是互補的兩道關卡：HPV檢測找出高風險的人，抹片看細胞是否已有變化。打過HPV疫苗也要定期篩檢，因為疫苗並未涵蓋所有高風險型別。",
   "hashtags": [
    "子宮頸抹片",
    "HPV檢測",
    "女性健康"
   ],
   "references": [
    {
     "title": "女性子宮頸癌篩檢",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=198"
    },
    {
     "title": "子宮頸癌篩檢介紹",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=357"
    },
    {
     "title": "35、45、65歲子宮頸抹片合併HPV檢測後續處置流程",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=625&pid=18775"
    },
    {
     "title": "公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始",
     "source": "衛生福利部",
     "url": "https://mohw.gov.tw/cp-16-84987-1.html"
    },
    {
     "title": "114年死因統計結果摘要表",
     "source": "衛生福利部",
     "url": "https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html"
    }
   ],
   "content_check_note": "服務資格與效益引自國健署、衛福部並標明年份，未使用療效保證用語，未涉及具體商品。",
   "ai_rationale": {
    "layout_reason": "先釐清兩種檢查差異，再說資格、過程、結果。",
    "tone": "專業易懂",
    "tone_reason": "結果分級需精確。",
    "basis": [
     "服務年齡與頻率取自國健署女性子宮頸癌篩檢頁",
     "異常結果流程取自國健署子宮頸癌篩檢介紹頁"
    ],
    "to_verify": [
     "35、45、65歲HPV檢測是否與抹片同次採檢（後續處置PDF未讀取）"
    ]
   },
   "decision_points": [
    {
     "id": "dp-cc-effect",
     "type": "data_version",
     "title": "抹片降低死亡率有兩個數字",
     "desc": "衛福部112年癌登新聞稿寫「可降低約70%子宮頸癌死亡率」；國健署子宮頸癌篩檢介紹頁寫「可降低6-9成」。AI 採用新聞稿的單一數字。",
     "current": "定期抹片可降低約70%子宮頸癌死亡率",
     "options": [
      {
       "label": "沿用目前資料",
       "action": "keep"
      },
      {
       "label": "查看資料差異",
       "action": "compare"
      }
     ],
     "compare": [
      {
       "label": "約70%",
       "value": "衛福部114-12-30新聞稿",
       "note": "目前採用"
      },
      {
       "label": "6–9成",
       "value": "國健署篩檢介紹頁",
       "note": "頁面未標年份"
      }
     ]
    }
   ]
  },
  "生活親切": {
   "content_type": "健康文章",
   "update_date": "2026/11/23",
   "title": "抹片和HPV檢測有什麼不同？30歲以上每年都能免費做",
   "intro": "抹片是看子宮頸的細胞有沒有變化，HPV檢測是看有沒有感染高風險病毒。30歲以上女生每年都能免費做一次抹片，35、45、65歲那年還會加做HPV檢測。定期抹片可降低約70%子宮頸癌死亡率，幾分鐘的檢查很值得。",
   "sections": [
    {
     "heading": "我可以做什麼？",
     "format": "table",
     "table": {
      "headers": [
       "年齡",
       "公費服務"
      ],
      "rows": [
       [
        "25–29歲",
        "子宮頸抹片每3年1次"
       ],
       [
        "30歲以上",
        "子宮頸抹片每年1次（建議至少每3年1次）"
       ],
       [
        "35、45、65歲",
        "當年加做1次人類乳突病毒（HPV）檢測"
       ]
      ]
     }
    },
    {
     "heading": "檢查過程",
     "format": "bullets",
     "items": [
      "躺上內診台，醫師用器械輕輕撐開，刷一點子宮頸細胞。",
      "幾分鐘就好，可能有點不舒服，避開生理期。"
     ]
    },
    {
     "heading": "報告異常怎麼辦",
     "format": "bullets",
     "items": [
      "輕微變化：3到6個月內再檢查一次。",
      "比較嚴重：醫師會用陰道鏡看並切片確認。",
      "HPV陽性別嚇到，很多感染身體會自己清掉，照醫師說的追蹤就好。"
     ]
    }
   ],
   "think_tank_view": "打過疫苗也別忘了抹片，疫苗沒辦法擋下所有高風險HPV。",
   "hashtags": [
    "子宮頸抹片",
    "HPV檢測",
    "女性健康"
   ],
   "references": [
    {
     "title": "女性子宮頸癌篩檢",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=198"
    },
    {
     "title": "子宮頸癌篩檢介紹",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=357"
    },
    {
     "title": "35、45、65歲子宮頸抹片合併HPV檢測後續處置流程",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=625&pid=18775"
    },
    {
     "title": "公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始",
     "source": "衛生福利部",
     "url": "https://mohw.gov.tw/cp-16-84987-1.html"
    },
    {
     "title": "114年死因統計結果摘要表",
     "source": "衛生福利部",
     "url": "https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html"
    }
   ],
   "content_check_note": "數據引自國健署與衛福部公開資料並標明年份，未使用療效保證用語，未涉及具體商品。",
   "ai_rationale": {
    "layout_reason": "以常見疑問帶出差異與流程。",
    "tone": "生活親切",
    "tone_reason": "降低羞怯與恐懼。",
    "basis": [
     "服務年齡與頻率取自國健署女性子宮頸癌篩檢頁",
     "異常結果流程取自國健署子宮頸癌篩檢介紹頁"
    ],
    "to_verify": [
     "35、45、65歲HPV檢測是否與抹片同次採檢（後續處置PDF未讀取）"
    ]
   },
   "decision_points": [
    {
     "id": "dp-cc-effect",
     "type": "data_version",
     "title": "抹片降低死亡率有兩個數字",
     "desc": "衛福部112年癌登新聞稿寫「可降低約70%子宮頸癌死亡率」；國健署子宮頸癌篩檢介紹頁寫「可降低6-9成」。AI 採用新聞稿的單一數字。",
     "current": "定期抹片可降低約70%子宮頸癌死亡率",
     "options": [
      {
       "label": "沿用目前資料",
       "action": "keep"
      },
      {
       "label": "查看資料差異",
       "action": "compare"
      }
     ],
     "compare": [
      {
       "label": "約70%",
       "value": "衛福部114-12-30新聞稿",
       "note": "目前採用"
      },
      {
       "label": "6–9成",
       "value": "國健署篩檢介紹頁",
       "note": "頁面未標年份"
      }
     ]
    }
   ]
  },
  "簡潔有力": {
   "content_type": "健康文章",
   "update_date": "2026/11/23",
   "title": "子宮頸抹片＋HPV檢測：公費資格與追蹤",
   "intro": "30歲以上每年1次公費抹片，35、45、65歲加做HPV檢測。定期抹片可降低約70%子宮頸癌死亡率。",
   "sections": [
    {
     "heading": "資格",
     "format": "table",
     "table": {
      "headers": [
       "年齡",
       "公費服務"
      ],
      "rows": [
       [
        "25–29歲",
        "子宮頸抹片每3年1次"
       ],
       [
        "30歲以上",
        "子宮頸抹片每年1次（建議至少每3年1次）"
       ],
       [
        "35、45、65歲",
        "當年加做1次人類乳突病毒（HPV）檢測"
       ]
      ]
     }
    },
    {
     "heading": "差異",
     "format": "bullets",
     "items": [
      "抹片：看細胞變化。",
      "HPV檢測：看高風險病毒感染。"
     ]
    },
    {
     "heading": "異常",
     "format": "bullets",
     "items": [
      "依結果再檢或陰道鏡切片。",
      "HPV陽性需追蹤，不等於罹癌。"
     ]
    }
   ],
   "think_tank_view": "疫苗加篩檢，雙重防護。",
   "hashtags": [
    "子宮頸抹片",
    "HPV檢測",
    "女性健康"
   ],
   "references": [
    {
     "title": "女性子宮頸癌篩檢",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=198"
    },
    {
     "title": "子宮頸癌篩檢介紹",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=357"
    },
    {
     "title": "35、45、65歲子宮頸抹片合併HPV檢測後續處置流程",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=625&pid=18775"
    },
    {
     "title": "公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始",
     "source": "衛生福利部",
     "url": "https://mohw.gov.tw/cp-16-84987-1.html"
    },
    {
     "title": "114年死因統計結果摘要表",
     "source": "衛生福利部",
     "url": "https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html"
    }
   ],
   "content_check_note": "數據引自國健署與衛福部公開資料並標明年份，未使用療效保證用語，未涉及具體商品。",
   "ai_rationale": {
    "layout_reason": "精簡三段。",
    "tone": "簡潔有力",
    "tone_reason": "社群短文。",
    "basis": [
     "服務年齡與頻率取自國健署女性子宮頸癌篩檢頁",
     "異常結果流程取自國健署子宮頸癌篩檢介紹頁"
    ],
    "to_verify": [
     "35、45、65歲HPV檢測是否與抹片同次採檢（後續處置PDF未讀取）"
    ]
   },
   "decision_points": [
    {
     "id": "dp-cc-effect",
     "type": "data_version",
     "title": "抹片降低死亡率有兩個數字",
     "desc": "衛福部112年癌登新聞稿寫「可降低約70%子宮頸癌死亡率」；國健署子宮頸癌篩檢介紹頁寫「可降低6-9成」。AI 採用新聞稿的單一數字。",
     "current": "定期抹片可降低約70%子宮頸癌死亡率",
     "options": [
      {
       "label": "沿用目前資料",
       "action": "keep"
      },
      {
       "label": "查看資料差異",
       "action": "compare"
      }
     ],
     "compare": [
      {
       "label": "約70%",
       "value": "衛福部114-12-30新聞稿",
       "note": "目前採用"
      },
      {
       "label": "6–9成",
       "value": "國健署篩檢介紹頁",
       "note": "頁面未標年份"
      }
     ]
    }
   ]
  }
 },
 "card": {
  "content_type": "健康圖卡",
  "topic": "子宮頸抹片與 HPV 檢測",
  "output_mode": "single",
  "layout_type": "knowledge",
  "communication_priority": {
   "primary_message": "抹片看細胞、HPV 檢測看病毒",
   "primary_visual": "約 70%",
   "secondary_message": "定期抹片可降低子宮頸癌死亡率",
   "action_priority": "30 歲以上每年可做抹片"
  },
  "headline_hook": "抹片和 HPV 差在哪",
  "headline_main": "子宮頸癌篩檢一次看懂",
  "title_accent": "一次看懂",
  "hero_message": "可降低約 70%",
  "hero_support": "子宮頸癌死亡率（定期子宮頸抹片）",
  "knowledge_title": "兩種檢查",
  "knowledge_note": "HPV 陽性**不等於罹癌**，依醫師建議追蹤",
  "knowledge_cards": [
   {
    "label": "子宮頸抹片",
    "icon": "search",
    "lines": [
     "看子宮頸細胞變化",
     "30 歲以上每年 1 次"
    ]
   },
   {
    "label": "HPV 檢測",
    "icon": "flask",
    "lines": [
     "看高風險病毒感染",
     "35、45、65 歲各 1 次"
    ]
   },
   {
    "label": "異常追蹤",
    "icon": "report",
    "lines": [
     "3–6 個月再檢",
     "或陰道鏡切片確診"
    ]
   }
  ],
  "primary_stat": {
   "value": "約 70%",
   "label": "定期抹片降低死亡率",
   "note": "衛福部 114 年新聞稿"
  },
  "secondary_stats": [
   {
    "value": "625 人",
    "label": "2025 年子宮頸癌死亡"
   },
   {
    "value": "3 個年齡",
    "label": "加做 HPV 檢測"
   }
  ],
  "action_title": "這樣做",
  "action_cards": [
   {
    "key": "抹",
    "text": "30 歲以上每年可做 1 次抹片"
   },
   {
    "key": "驗",
    "text": "35、45、65 歲加做 HPV 檢測"
   },
   {
    "key": "避",
    "text": "避開生理期受檢"
   },
   {
    "key": "回",
    "text": "報告異常依醫師建議回診"
   }
  ],
  "carousel_suggestion": {
   "reason": "若想把差異、資格與異常流程分開說明，也可拆成 3 張系列圖卡",
   "slides": [
    {
     "layout_type": "knowledge",
     "headline_hook": "抹片 vs HPV",
     "headline_main": "兩種檢查差在哪"
    },
    {
     "layout_type": "action",
     "headline_hook": "公費資格",
     "headline_main": "30 歲以上每年 1 次"
    },
    {
     "layout_type": "knowledge",
     "headline_hook": "報告異常",
     "headline_main": "追蹤流程一次看"
    }
   ]
  },
  "hashtags": [
   "子宮頸抹片",
   "HPV檢測",
   "女性健康"
  ],
  "sources": [
   "衛生福利部國民健康署",
   "衛生福利部"
  ],
  "illustration_category": "screening-checkup",
  "illustration": {
   "topic": "25 歲以上女性",
   "audience": "一位女性在婦產科診間和女醫師對話，桌上有檢查說明單",
   "scene": "安心、信任",
   "emotion": "A woman talking with a female gynecologist in a clinic, an exam leaflet on the desk, trusting mood",
   "style": "flat vector, single accent colour, friendly",
   "colorPalette": "deep green #17603f on transparent",
   "imagePrompt": "undefined, flat vector illustration, single deep-green accent colour, transparent background"
  },
  "ai_rationale": {
   "layout_reason": "核心是釐清兩種檢查，選 knowledge。",
   "tone": "專業易懂",
   "tone_reason": "概念說明。",
   "basis": [
    "服務年齡與頻率取自國健署女性子宮頸癌篩檢頁",
    "異常結果流程取自國健署子宮頸癌篩檢介紹頁"
   ],
   "to_verify": [
    "35、45、65歲HPV檢測是否與抹片同次採檢（後續處置PDF未讀取）"
   ]
  },
  "decision_points": [
   {
    "id": "dp-cc-effect",
    "type": "data_version",
    "title": "抹片降低死亡率有兩個數字",
    "desc": "衛福部112年癌登新聞稿寫「可降低約70%子宮頸癌死亡率」；國健署子宮頸癌篩檢介紹頁寫「可降低6-9成」。AI 採用新聞稿的單一數字。",
    "current": "約 70%｜定期抹片",
    "options": [
     {
      "label": "沿用目前資料",
      "action": "keep"
     },
     {
      "label": "查看資料差異",
      "action": "compare"
     }
    ],
    "compare": [
     {
      "label": "約70%",
      "value": "衛福部114-12-30新聞稿",
      "note": "目前採用"
     },
     {
      "label": "6–9成",
      "value": "國健署篩檢介紹頁",
      "note": "頁面未標年份"
     }
    ]
   }
  ],
  "content_check_note": "數據引自國健署與衛福部公開資料並標明年份，未使用療效保證用語，未涉及具體商品。"
 },
 "review": {
  "article": [
   {
    "passage_id": "P1",
    "flagged_text": "多數感染會自行清除",
    "issue_category": "SOURCE_EVIDENCE",
    "issue_subcategory": "unsupported_claim",
    "issue_explanation": "未附出處，宜註明依據。",
    "severity": "low",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "屬出處層級。",
    "suggested_revision": "醫學上多數HPV感染可由身體自行清除",
    "match": [
     "很多感染身體會自己清掉"
    ]
   },
   {
    "passage_id": "P1",
    "flagged_text": "過程約幾分鐘",
    "issue_category": "TERMINOLOGY_LANGUAGE",
    "issue_subcategory": "vague_quantifier",
    "issue_explanation": "時間描述為一般經驗，國健署頁面未載明。",
    "severity": "low",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "屬用語精確度。",
    "suggested_revision": "過程通常不長",
    "match": [
     "幾分鐘就好"
    ]
   },
   {
    "passage_id": "P1",
    "flagged_text": "疫苗並未涵蓋所有高風險型別",
    "issue_category": "MEDICAL_INTERPRETATION",
    "issue_subcategory": "scope_condition_missing",
    "issue_explanation": "未說明公費疫苗型別，讀者難以理解為何仍要篩檢。",
    "severity": "low",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "補背景。",
    "suggested_revision": null,
    "match": [
     "疫苗沒辦法擋下所有高風險HPV"
    ]
   },
   {
    "passage_id": "P1",
    "flagged_text": "可降低約70%子宮頸癌死亡率",
    "issue_category": "DATA_FACTUAL_ACCURACY",
    "issue_subcategory": "source_version",
    "issue_explanation": "國健署介紹頁另寫「6-9成」。",
    "severity": "low",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "已設決策點。",
    "suggested_revision": null,
    "match": []
   }
  ],
  "card": [
   {
    "passage_id": "P1",
    "flagged_text": "30 歲以上每年 1 次",
    "issue_category": "DATA_FACTUAL_ACCURACY",
    "issue_subcategory": "scope_condition_missing",
    "issue_explanation": "未提國健署建議至少每 3 年 1 次。",
    "severity": "low",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "補建議頻率。",
    "suggested_revision": "30 歲以上每年補助、至少 3 年 1 次",
    "match": []
   },
   {
    "passage_id": "P1",
    "flagged_text": "可降低約 70%",
    "issue_category": "DATA_FACTUAL_ACCURACY",
    "issue_subcategory": "source_version",
    "issue_explanation": "國健署另寫 6–9 成。",
    "severity": "low",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "已設決策點。",
    "suggested_revision": null,
    "match": []
   }
  ]
 },
 "title_alts": [
  "子宮頸抹片與HPV檢測：差在哪、多久做一次、異常怎麼辦",
  "抹片和HPV檢測有什麼不同？30歲以上每年都能免費做",
  "定期抹片可降低約70%死亡率：子宮頸癌篩檢一次看懂"
 ],
 "card_title_alts": [
  [
   "抹片和 HPV 差在哪",
   "子宮頸癌篩檢一次看懂"
  ],
  [
   "30 歲以上",
   "每年免費做抹片"
  ],
  [
   "HPV 陽性別慌",
   "依醫師建議追蹤"
  ]
 ],
 "data_addon": [
  "子宮頸癌標準化死亡率由2016年每十萬人3.4降至2025年2.6。",
  "國健署HPV檢測補助每案1,400元。",
  "2025年9月起公費HPV疫苗擴大至國中男女。"
 ],
 "cta": "查一下上次抹片是什麼時候，超過3年就這個月預約，35、45、65歲記得加做HPV檢測。"
});
})();
