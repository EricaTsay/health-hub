/* v6 示範主題：糞便潛血檢查（B13 癌症篩檢工具）
   查證日期：2026-11-23。來源：國健署大腸癌篩檢簡介（更新2026-04-22）、大腸癌篩檢介紹、追陽服務頁、衛福部112年癌登新聞稿、114年死因統計摘要表。
   參考方向：清單232列（#519 健保投入癌篩陽追計畫）。陽追率官方數字未取得，未寫。與「大腸癌」「大腸息肉」分工：本題講檢查工具。 */
(function(){
  registerDemoTopic({
 "name": "糞便潛血檢查",
 "collect": {
  "summary": "糞便潛血檢查是國健署公費大腸癌篩檢工具，45至74歲及40至44歲有家族史者每2年1次，可降低40%大腸癌死亡率、減少34%晚期大腸癌。陽性者需接受大腸鏡確診，國健署並推動追陽服務協助陽性個案完成追蹤。",
  "objective_data": [
   {
    "item": "政策動向",
    "desc": "45至74歲每2年1次：國健署補助45至74歲民眾及40至44歲有大腸癌家族史者，每2年1次定量免疫法糞便潛血檢查。",
    "tag": "官方統計",
    "source": {
     "name": "衛生福利部國民健康署：大腸癌篩檢簡介",
     "url": "https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=621&pid=1136"
    }
   },
   {
    "item": "年度趨勢方向",
    "desc": "40%死亡率降低：每2年1次糞便潛血檢查可降低40%大腸癌死亡率，並減少34%晚期大腸癌。",
    "tag": "官方統計",
    "source": {
     "name": "衛生福利部：公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始",
     "url": "https://mohw.gov.tw/cp-16-84987-1.html"
    }
   },
   {
    "item": "盛行率／發生率",
    "desc": "約55%篩檢個案為早期：國健署說明經篩檢發現的大腸癌約55%為早期，未篩檢者確診時早期比例不到3成。",
    "tag": "官方統計",
    "source": {
     "name": "衛生福利部：公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始",
     "url": "https://mohw.gov.tw/cp-16-84987-1.html"
    }
   },
   {
    "item": "好發族群年齡層",
    "desc": "7146人死於大腸癌：2025年結腸、直腸和肛門癌死亡7,146人，居癌症死因第3位。",
    "tag": "官方統計",
    "source": {
     "name": "衛生福利部：114年死因統計結果摘要表",
     "url": "https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html"
    }
   }
  ],
  "product_view": [
   "機會：在家採便門檻低，適合保戶健康提醒。",
   "機會：陽追議題可說明完成追蹤的重要。",
   "風險：不可暗示陽性即罹癌。"
  ],
  "marketing_view": [
   "機會：「在家就能篩」容易溝通。",
   "機會：可與大腸癌、大腸息肉串連。",
   "風險：自費大腸鏡不宜被包裝成取代公費篩檢。"
  ],
  "alert_level": "medium",
  "alert_reason": "大腸癌新發人數居第2位，陽性未追蹤是長期痛點。"
 },
 "article_tones": {
  "專業易懂": {
   "content_type": "健康文章",
   "update_date": "2026/11/23",
   "title": "糞便潛血檢查：在家採便篩大腸癌，陽性一定要做大腸鏡",
   "intro": "糞便潛血檢查是國健署公費大腸癌篩檢工具，對象為45至74歲民眾及40至44歲有家族史者，每2年1次，採用定量免疫法，在家採便即可。國健署指出每2年1次檢查可降低40%大腸癌死亡率、減少34%晚期大腸癌。陽性者必須接受大腸鏡檢查，才能確認是否有息肉或癌症。",
   "sections": [
    {
     "heading": "公費資格",
     "format": "table",
     "table": {
      "headers": [
       "項目",
       "內容"
      ],
      "rows": [
       [
        "公費對象",
        "45–74歲民眾，及40–44歲有大腸癌家族史者"
       ],
       [
        "間隔",
        "每2年1次"
       ],
       [
        "檢查方式",
        "定量免疫法糞便潛血檢查，在家採便後送回"
       ],
       [
        "陽性後",
        "接受大腸鏡檢查確診"
       ]
      ]
     }
    },
    {
     "heading": "怎麼採便、要準備什麼",
     "format": "bullets",
     "items": [
      "向院所領取採便管，依說明以採便棒刮取糞便表面後放回管中。",
      "定量免疫法只針對人類血紅素，檢查前不需限制飲食。",
      "採完盡快送回院所，依說明保存。"
     ]
    },
    {
     "heading": "結果與追蹤",
     "format": "bullets",
     "items": [
      "陰性：每2年再檢查1次，但有便血、排便習慣改變仍要就醫。",
      "陽性：可能是痔瘡、息肉或癌症，需大腸鏡確診，不能只重驗一次糞便。",
      "大腸鏡發現息肉可當場切除並依醫師指示追蹤，國健署並推動追陽服務協助陽性個案完成大腸鏡。",
      "自費大腸鏡可直接觀察整段大腸，但需清腸準備，有一定風險，適合對象宜與醫師討論。"
     ]
    }
   ],
   "think_tank_view": "糞便潛血最常見的問題不是陰性時的漏網之魚，而是陽性後沒去做大腸鏡。陽性結果是提醒，不是判決，完成大腸鏡才算完成這次篩檢。",
   "hashtags": [
    "糞便潛血",
    "大腸癌篩檢",
    "大腸鏡",
    "國健署"
   ],
   "references": [
    {
     "title": "大腸癌篩檢簡介",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=621&pid=1136"
    },
    {
     "title": "大腸癌篩檢介紹",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=354"
    },
    {
     "title": "公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始",
     "source": "衛生福利部",
     "url": "https://mohw.gov.tw/cp-16-84987-1.html"
    },
    {
     "title": "篩檢疑似異常個案追蹤（追陽服務）",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=4773"
    },
    {
     "title": "114年死因統計結果摘要表",
     "source": "衛生福利部",
     "url": "https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html"
    }
   ],
   "content_check_note": "資格、流程與效益引自國健署並標明年份，未使用療效保證用語，未涉及具體商品。",
   "ai_rationale": {
    "layout_reason": "資格、採便、結果三段，強調陽追。",
    "tone": "專業易懂",
    "tone_reason": "流程需精確。",
    "basis": [
     "資格、檢查方式與陽性流程取自國健署大腸癌篩檢簡介",
     "效益取自衛福部114-12-30新聞稿"
    ],
    "to_verify": [
     "陽性追蹤（陽追）率：國健署追陽服務PDF未讀取，文中未寫數字"
    ]
   },
   "decision_points": [
    {
     "id": "dp-fit-early",
     "type": "data_scope",
     "title": "早期比例的比較對象",
     "desc": "國健署說明經篩檢發現的大腸癌約55%為早期，未篩檢者確診時早期比例不到3成。兩組人群年齡與風險可能不同，比例差距不全是篩檢造成。",
     "current": "篩檢發現的大腸癌約55%為早期",
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
       "label": "約55%",
       "value": "篩檢發現者",
       "note": "國健署"
      },
      {
       "label": "不到3成",
       "value": "未篩檢者",
       "note": "國健署"
      }
     ]
    }
   ]
  },
  "生活親切": {
   "content_type": "健康文章",
   "update_date": "2026/11/23",
   "title": "在家採便就能篩大腸癌！陽性別拖，去做大腸鏡",
   "intro": "45歲以上，每2年可以免費做一次糞便潛血檢查，拿採便管回家刮一點糞便送回去就好。國健署說每2年做一次可降低40%大腸癌死亡率。最重要的是：如果結果是陽性，一定要去做大腸鏡。",
   "sections": [
    {
     "heading": "我可以做嗎？",
     "format": "table",
     "table": {
      "headers": [
       "項目",
       "內容"
      ],
      "rows": [
       [
        "公費對象",
        "45–74歲民眾，及40–44歲有大腸癌家族史者"
       ],
       [
        "間隔",
        "每2年1次"
       ],
       [
        "檢查方式",
        "定量免疫法糞便潛血檢查，在家採便後送回"
       ],
       [
        "陽性後",
        "接受大腸鏡檢查確診"
       ]
      ]
     }
    },
    {
     "heading": "採便小撇步",
     "format": "bullets",
     "items": [
      "用採便棒刮一點糞便表面，放回管子裡。",
      "不用特別忌口。",
      "採完早點送回去。"
     ]
    },
    {
     "heading": "結果出來後",
     "format": "bullets",
     "items": [
      "陰性：兩年後再做，有血便還是要看醫生。",
      "陽性：可能只是痔瘡，也可能是息肉，要做大腸鏡才知道。",
      "有息肉的話，醫師通常可以當場切掉。"
     ]
    }
   ],
   "think_tank_view": "不要因為怕大腸鏡就不理陽性報告，早一步檢查，處理起來簡單很多。",
   "hashtags": [
    "糞便潛血",
    "大腸癌篩檢",
    "大腸鏡",
    "國健署"
   ],
   "references": [
    {
     "title": "大腸癌篩檢簡介",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=621&pid=1136"
    },
    {
     "title": "大腸癌篩檢介紹",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=354"
    },
    {
     "title": "公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始",
     "source": "衛生福利部",
     "url": "https://mohw.gov.tw/cp-16-84987-1.html"
    },
    {
     "title": "篩檢疑似異常個案追蹤（追陽服務）",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=4773"
    },
    {
     "title": "114年死因統計結果摘要表",
     "source": "衛生福利部",
     "url": "https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html"
    }
   ],
   "content_check_note": "數據引自國健署與衛福部公開資料並標明年份，未使用療效保證用語，未涉及具體商品。",
   "ai_rationale": {
    "layout_reason": "口語說明採便與陽追。",
    "tone": "生活親切",
    "tone_reason": "降低排斥感。",
    "basis": [
     "資格、檢查方式與陽性流程取自國健署大腸癌篩檢簡介",
     "效益取自衛福部114-12-30新聞稿"
    ],
    "to_verify": [
     "陽性追蹤（陽追）率：國健署追陽服務PDF未讀取，文中未寫數字"
    ]
   },
   "decision_points": [
    {
     "id": "dp-fit-early",
     "type": "data_scope",
     "title": "早期比例的比較對象",
     "desc": "國健署說明經篩檢發現的大腸癌約55%為早期，未篩檢者確診時早期比例不到3成。兩組人群年齡與風險可能不同，比例差距不全是篩檢造成。",
     "current": "篩檢發現的大腸癌約55%為早期",
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
       "label": "約55%",
       "value": "篩檢發現者",
       "note": "國健署"
      },
      {
       "label": "不到3成",
       "value": "未篩檢者",
       "note": "國健署"
      }
     ]
    }
   ]
  },
  "簡潔有力": {
   "content_type": "健康文章",
   "update_date": "2026/11/23",
   "title": "糞便潛血：45–74歲每2年1次，陽性做大腸鏡",
   "intro": "公費糞便潛血每2年1次，可降低40%大腸癌死亡率。陽性必須做大腸鏡確診。",
   "sections": [
    {
     "heading": "資格",
     "format": "table",
     "table": {
      "headers": [
       "項目",
       "內容"
      ],
      "rows": [
       [
        "公費對象",
        "45–74歲民眾，及40–44歲有大腸癌家族史者"
       ],
       [
        "間隔",
        "每2年1次"
       ],
       [
        "檢查方式",
        "定量免疫法糞便潛血檢查，在家採便後送回"
       ],
       [
        "陽性後",
        "接受大腸鏡檢查確診"
       ]
      ]
     }
    },
    {
     "heading": "採便",
     "format": "bullets",
     "items": [
      "在家採便，免忌口。"
     ]
    },
    {
     "heading": "結果",
     "format": "bullets",
     "items": [
      "陰性：2年後再檢。",
      "陽性：大腸鏡確診，息肉可切除。"
     ]
    }
   ],
   "think_tank_view": "陽性不做大腸鏡，等於沒篩。",
   "hashtags": [
    "糞便潛血",
    "大腸癌篩檢",
    "大腸鏡",
    "國健署"
   ],
   "references": [
    {
     "title": "大腸癌篩檢簡介",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=621&pid=1136"
    },
    {
     "title": "大腸癌篩檢介紹",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=354"
    },
    {
     "title": "公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始",
     "source": "衛生福利部",
     "url": "https://mohw.gov.tw/cp-16-84987-1.html"
    },
    {
     "title": "篩檢疑似異常個案追蹤（追陽服務）",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=4773"
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
     "資格、檢查方式與陽性流程取自國健署大腸癌篩檢簡介",
     "效益取自衛福部114-12-30新聞稿"
    ],
    "to_verify": [
     "陽性追蹤（陽追）率：國健署追陽服務PDF未讀取，文中未寫數字"
    ]
   },
   "decision_points": [
    {
     "id": "dp-fit-early",
     "type": "data_scope",
     "title": "早期比例的比較對象",
     "desc": "國健署說明經篩檢發現的大腸癌約55%為早期，未篩檢者確診時早期比例不到3成。兩組人群年齡與風險可能不同，比例差距不全是篩檢造成。",
     "current": "篩檢發現的大腸癌約55%為早期",
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
       "label": "約55%",
       "value": "篩檢發現者",
       "note": "國健署"
      },
      {
       "label": "不到3成",
       "value": "未篩檢者",
       "note": "國健署"
      }
     ]
    }
   ]
  }
 },
 "card": {
  "content_type": "健康圖卡",
  "topic": "糞便潛血檢查",
  "output_mode": "single",
  "layout_type": "knowledge",
  "communication_priority": {
   "primary_message": "在家採便篩大腸癌，陽性要做大腸鏡",
   "primary_visual": "40%",
   "secondary_message": "每 2 年檢查可降低大腸癌死亡率",
   "action_priority": "陽性完成大腸鏡"
  },
  "headline_hook": "在家採便篩大腸癌",
  "headline_main": "陽性一定要做大腸鏡",
  "title_accent": "做大腸鏡",
  "hero_message": "可降低 40%",
  "hero_support": "大腸癌死亡率（每 2 年 1 次糞便潛血檢查）",
  "knowledge_title": "篩檢 3 步驟",
  "knowledge_note": "陽性**不能只重驗糞便**，要做大腸鏡",
  "knowledge_cards": [
   {
    "label": "在家採便",
    "icon": "home",
    "lines": [
     "採便棒刮取糞便",
     "免忌口、盡快送回"
    ]
   },
   {
    "label": "看報告",
    "icon": "report",
    "lines": [
     "陰性 2 年後再檢",
     "陽性需進一步檢查"
    ]
   },
   {
    "label": "大腸鏡",
    "icon": "search",
    "lines": [
     "確認息肉或癌症",
     "息肉可當場切除"
    ]
   }
  ],
  "primary_stat": {
   "value": "40%",
   "label": "降低大腸癌死亡率",
   "note": "衛福部國健署"
  },
  "secondary_stats": [
   {
    "value": "34%",
    "label": "減少晚期大腸癌"
   },
   {
    "value": "約 55%",
    "label": "篩檢發現為早期"
   }
  ],
  "action_title": "這樣做",
  "action_cards": [
   {
    "key": "45",
    "text": "45–74 歲每 2 年 1 次"
   },
   {
    "key": "家",
    "text": "40–44 歲有家族史也可做"
   },
   {
    "key": "鏡",
    "text": "陽性儘快安排大腸鏡"
   },
   {
    "key": "看",
    "text": "血便或排便改變就醫"
   }
  ],
  "carousel_suggestion": {
   "reason": "若想把採便、報告與大腸鏡分開說明，也可拆成 3 張系列圖卡",
   "slides": [
    {
     "layout_type": "knowledge",
     "headline_hook": "在家採便",
     "headline_main": "3 步驟完成篩檢"
    },
    {
     "layout_type": "action",
     "headline_hook": "陽性怎麼辦",
     "headline_main": "儘快做大腸鏡"
    },
    {
     "layout_type": "data",
     "headline_hook": "篩檢成效",
     "headline_main": "降低 40% 死亡率"
    }
   ]
  },
  "hashtags": [
   "糞便潛血",
   "大腸癌篩檢",
   "大腸鏡",
   "國健署"
  ],
  "sources": [
   "衛生福利部國民健康署"
  ],
  "illustration_category": "screening-checkup",
  "illustration": {
   "topic": "大腸癌篩檢",
   "audience": "45 歲以上成人",
   "scene": "一位中年人在藥局櫃檯從藥師手中接過採便管與說明單",
   "emotion": "輕鬆、主動",
   "style": "flat vector, single accent colour, friendly",
   "colorPalette": "deep green #17603f on transparent",
   "imagePrompt": "A middle-aged person receiving a stool sample kit and leaflet from a pharmacist at a counter, relaxed mood, flat vector illustration, single deep-green accent colour, transparent background"
  },
  "ai_rationale": {
   "layout_reason": "核心是流程，選 knowledge 三步驟。",
   "tone": "專業易懂",
   "tone_reason": "流程導向。",
   "basis": [
    "資格、檢查方式與陽性流程取自國健署大腸癌篩檢簡介",
    "效益取自衛福部114-12-30新聞稿"
   ],
   "to_verify": [
    "陽性追蹤（陽追）率：國健署追陽服務PDF未讀取，文中未寫數字"
   ]
  },
  "decision_points": [
   {
    "id": "dp-fit-early",
    "type": "data_scope",
    "title": "早期比例的比較對象",
    "desc": "國健署說明經篩檢發現的大腸癌約55%為早期，未篩檢者確診時早期比例不到3成。兩組人群年齡與風險可能不同，比例差距不全是篩檢造成。",
    "current": "約 55%｜篩檢發現為早期",
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
      "label": "約55%",
      "value": "篩檢發現者",
      "note": "國健署"
     },
     {
      "label": "不到3成",
      "value": "未篩檢者",
      "note": "國健署"
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
    "flagged_text": "檢查前不需限制飲食",
    "issue_category": "SOURCE_EVIDENCE",
    "issue_subcategory": "unsupported_claim",
    "issue_explanation": "國健署讀到的頁面未明寫飲食限制，宜註明依據。",
    "severity": "low",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "屬出處層級。",
    "suggested_revision": "定量免疫法只針對人類血紅素，一般不需限制飲食",
    "match": [
     "不用特別忌口。"
    ]
   },
   {
    "passage_id": "P1",
    "flagged_text": "可能是痔瘡、息肉或癌症",
    "issue_category": "MEDICAL_INTERPRETATION",
    "issue_subcategory": "overgeneralization",
    "issue_explanation": "列舉未說明比例，讀者可能自行歸因為痔瘡而不追蹤。",
    "severity": "medium",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "屬溝通風險。",
    "suggested_revision": "可能是痔瘡、息肉或癌症，原因要靠大腸鏡判斷，不宜自行認定是痔瘡",
    "match": [
     "可能只是痔瘡，也可能是息肉"
    ]
   },
   {
    "passage_id": "P1",
    "flagged_text": "有一定風險",
    "issue_category": "TERMINOLOGY_LANGUAGE",
    "issue_subcategory": "vague_quantifier",
    "issue_explanation": "未說明風險類型，宜補充（如出血、穿孔、麻醉風險）。",
    "severity": "low",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "補說明。",
    "suggested_revision": "有出血、穿孔等少見風險",
    "match": []
   },
   {
    "passage_id": "P1",
    "flagged_text": "可降低40%大腸癌死亡率",
    "issue_category": "DATA_FACTUAL_ACCURACY",
    "issue_subcategory": "comparison_baseline",
    "issue_explanation": "未寫比較對象（相較未篩檢）。",
    "severity": "low",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "補基準。",
    "suggested_revision": "相較未篩檢，可降低40%大腸癌死亡率",
    "match": []
   }
  ],
  "card": [
   {
    "passage_id": "P1",
    "flagged_text": "篩檢發現為早期",
    "issue_category": "DATA_FACTUAL_ACCURACY",
    "issue_subcategory": "sample_scope",
    "issue_explanation": "未與未篩檢者比較，且兩群體風險不同。",
    "severity": "low",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "已設決策點。",
    "suggested_revision": null,
    "match": []
   },
   {
    "passage_id": "P1",
    "flagged_text": "息肉可當場切除",
    "issue_category": "MEDICAL_INTERPRETATION",
    "issue_subcategory": "overgeneralization",
    "issue_explanation": "部分息肉需另行安排切除。",
    "severity": "low",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "屬精確度。",
    "suggested_revision": "多數息肉可當場切除",
    "match": []
   }
  ]
 },
 "title_alts": [
  "糞便潛血檢查：在家採便篩大腸癌，陽性一定要做大腸鏡",
  "在家採便就能篩大腸癌！陽性別拖，去做大腸鏡",
  "每2年1次可降低40%大腸癌死亡率：糞便潛血檢查怎麼做"
 ],
 "card_title_alts": [
  [
   "在家採便篩大腸癌",
   "陽性一定要做大腸鏡"
  ],
  [
   "45 歲起免費篩",
   "每 2 年 1 次"
  ],
  [
   "陽性別拖延",
   "儘快安排大腸鏡"
  ]
 ],
 "data_addon": [
  "112年癌症登記大腸癌新發19,074人，居第2位。",
  "大腸鏡發現息肉可切除並依醫師指示追蹤。",
  "國健署推動追陽服務，涵蓋大腸、子宮頸、乳及肺癌疑似異常個案。"
 ],
 "cta": "45歲以上兩年沒篩過就領一支採便管，陽性就請醫師安排大腸鏡。"
});
})();
