/* v6 示範主題：低劑量電腦斷層（LDCT）（B13 癌症篩檢工具）
   查證日期：2026-11-23。來源：國健署LDCT服務頁（nodeid=4619）、衛福部112年癌登新聞稿（114-12-30）、114年死因統計摘要表、TVBS轉述公費篩檢3年成果。
   參考方向：清單229列（#621 肺癌高風險公費篩檢上路、#660）。只取架構，數據重新查證。與「肺癌」分工：本題講檢查工具。 */
(function(){
  registerDemoTopic({
 "name": "低劑量電腦斷層（LDCT）",
 "collect": {
  "summary": "低劑量電腦斷層（LDCT）是國健署公費肺癌篩檢工具，對象為50至74歲重度吸菸者與有肺癌家族史者，每2年1次，可降低重度吸菸者20%肺癌死亡率。公費篩檢滿3年累積逾21萬人次、找出2,506名肺癌，逾8成為早期，但肺結節偽陽性與追蹤負擔也是溝通重點。",
  "objective_data": [
   {
    "item": "政策動向",
    "desc": "50至74歲重度吸菸者每2年1次：吸菸史20包-年以上且仍吸菸或戒菸未滿15年者，及有肺癌家族史的女性40至74歲、男性45至74歲，可接受公費LDCT。",
    "tag": "官方統計",
    "source": {
     "name": "衛生福利部國民健康署：胸部低劑量電腦斷層檢查服務",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=4619"
    }
   },
   {
    "item": "年度趨勢方向",
    "desc": "20%肺癌死亡率降低：國健署引用國際實證，LDCT相較胸部X光可降低重度吸菸者20%肺癌死亡率。",
    "tag": "官方統計",
    "source": {
     "name": "衛生福利部：公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始",
     "url": "https://mohw.gov.tw/cp-16-84987-1.html"
    }
   },
   {
    "item": "盛行率／發生率",
    "desc": "逾8成篩檢個案為早期：據媒體轉述國健署成果，公費LDCT上路滿3年累積逾21萬人次受檢，找出2,506名肺癌個案。",
    "tag": "市場觀察",
    "source": {
     "name": "TVBS新聞網：肺癌公費篩檢3年 早期檢出逾8成 權威醫：50歲以上都應受檢",
     "url": "https://health.tvbs.com.tw/nutrition/356913"
    }
   },
   {
    "item": "好發族群年齡層",
    "desc": "10831人死於肺癌：2025年肺癌死亡10,831人，仍居癌症死因第1位。",
    "tag": "官方統計",
    "source": {
     "name": "衛生福利部：114年死因統計結果摘要表",
     "url": "https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html"
    }
   }
  ],
  "product_view": [
   "機會：LDCT資格明確，適合做保戶健康提醒與篩檢衛教。",
   "機會：篩檢發現早期肺癌比例高，可說明及早診斷的重要性。",
   "風險：不可暗示做過篩檢即可降低保費或影響核保；肺結節偽陽性應避免恐嚇式溝通。"
  ],
  "marketing_view": [
   "機會：「不抽菸也可能符合資格（家族史）」有話題性。",
   "機會：可與肺癌、戒菸、醫學影像與輻射安全主題串連。",
   "風險：自費LDCT不宜被包裝成人人都該做。"
  ],
  "alert_level": "medium",
  "alert_reason": "肺癌連年居癌症死因第1位，公費LDCT持續推動，資格與結節追蹤常引發疑問，適合常態溝通。"
 },
 "article_tones": {
  "專業易懂": {
   "content_type": "健康文章",
   "update_date": "2026/11/23",
   "title": "低劑量電腦斷層（LDCT）：公費肺癌篩檢資格、過程與結果怎麼看",
   "intro": "低劑量電腦斷層（LDCT）是目前國健署公費肺癌篩檢使用的工具，對象為50至74歲重度吸菸者，以及有肺癌家族史的女性40至74歲、男性45至74歲，每2年1次。國健署引用國際實證指出，LDCT相較胸部X光可降低重度吸菸者20%肺癌死亡率。據媒體轉述國健署成果，公費篩檢滿3年累積逾21萬人次受檢、找出2,506名肺癌個案，逾8成為早期。",
   "sections": [
    {
     "heading": "誰可以做公費LDCT",
     "format": "table",
     "table": {
      "headers": [
       "公費對象",
       "條件"
      ],
      "rows": [
       [
        "重度吸菸者",
        "50–74歲，吸菸史20包-年以上，仍在吸菸或戒菸未滿15年（吸菸者須同意接受戒菸衛教）"
       ],
       [
        "肺癌家族史",
        "父母、子女或兄弟姊妹曾確診肺癌：女性40–74歲、男性45–74歲"
       ],
       [
        "檢查間隔",
        "每2年1次（公費篩檢自111年7月上路）"
       ]
      ]
     }
    },
    {
     "heading": "檢查怎麼做、結果怎麼看",
     "format": "bullets",
     "items": [
      "檢查時平躺在檢查台上，依指示短暫閉氣，不需打針，過程不會痛。",
      "報告常見「肺結節」，多數為良性，醫師會依大小與型態安排間隔追蹤的電腦斷層。",
      "偽陽性：發現結節但最後不是癌症，可能帶來焦慮與額外檢查，篩檢前宜與醫師討論利弊。",
      "偽陰性：仍有極少數病灶可能未被發現，出現久咳、咳血等症狀仍應就醫。"
     ]
    },
    {
     "heading": "陽性後的追蹤與自費檢查差異",
     "format": "bullets",
     "items": [
      "疑似惡性時，醫師會安排進一步影像、切片或手術確診。",
      "不符合公費資格者可自費做LDCT，費用依院所而異，但非高風險族群的效益與偽陽性取捨需與醫師討論。",
      "吸菸者篩檢同時要接受戒菸衛教，戒菸才是降低肺癌風險的根本。"
     ]
    }
   ],
   "think_tank_view": "LDCT的價值在於把肺癌找在可以開刀的早期，但它也會找到許多不會致命的小結節。符合資格就按時篩檢，拿到報告後依醫師建議追蹤，不必因一顆結節過度恐慌，也不要因為一次正常就停止回診。",
   "hashtags": [
    "LDCT",
    "低劑量電腦斷層",
    "國健署"
   ],
   "references": [
    {
     "title": "胸部低劑量電腦斷層檢查服務",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=4619"
    },
    {
     "title": "公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始",
     "source": "衛生福利部",
     "url": "https://mohw.gov.tw/cp-16-84987-1.html"
    },
    {
     "title": "肺癌公費篩檢3年 早期檢出逾8成 權威醫：50歲以上都應受檢",
     "source": "TVBS新聞網",
     "url": "https://health.tvbs.com.tw/nutrition/356913"
    },
    {
     "title": "114年死因統計結果摘要表",
     "source": "衛生福利部",
     "url": "https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html"
    }
   ],
   "content_check_note": "公費資格、篩檢效益引自國健署並標明年份，媒體轉述數字已標示出處，未使用療效保證用語，未涉及具體商品。",
   "ai_rationale": {
    "layout_reason": "先說資格，再說過程與結果判讀，最後說陽性追蹤與自費差異。",
    "tone": "專業易懂",
    "tone_reason": "篩檢資格與結果判讀需要精確。",
    "basis": [
     "公費資格取自國健署LDCT服務頁",
     "20%死亡率降低取自衛福部114-12-30新聞稿",
     "3年累積成果為TVBS轉述國健署"
    ],
    "to_verify": [
     "3年累積成果的國健署原始公告",
     "檢查過程的時間與輻射劑量描述"
    ]
   },
   "decision_points": [
    {
     "id": "dp-ldct-early",
     "type": "data_version",
     "title": "篩檢早期比例有兩組數字",
     "desc": "國健署說明經LDCT篩檢發現的肺癌「85%為早期」；媒體轉述公費篩檢滿3年的累積成果為「逾8成（83%）為早期」。兩者統計期間不同，AI 採用有明確期間的累積成果。",
     "current": "公費篩檢滿3年，找出的肺癌逾8成為早期",
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
       "label": "逾8成（83%）",
       "value": "公費篩檢滿3年累積",
       "note": "TVBS新聞網轉述國健署（目前採用）"
      },
      {
       "label": "85%",
       "value": "統計期間未載明",
       "note": "國健署說明"
      }
     ]
    }
   ]
  },
  "生活親切": {
   "content_type": "健康文章",
   "update_date": "2026/11/23",
   "title": "家人有肺癌、抽菸20包-年？低劑量電腦斷層免費做",
   "intro": "抽菸很多年、或家裡有人得過肺癌，可以免費做低劑量電腦斷層（LDCT）：50到74歲的重度吸菸者，以及有家族史的女性40歲、男性45歲起，每2年一次。據媒體轉述國健署成果，公費篩檢滿3年已找出2,506名肺癌個案，逾8成是早期，治療選擇多很多。",
   "sections": [
    {
     "heading": "我符合資格嗎？",
     "format": "table",
     "table": {
      "headers": [
       "公費對象",
       "條件"
      ],
      "rows": [
       [
        "重度吸菸者",
        "50–74歲，吸菸史20包-年以上，仍在吸菸或戒菸未滿15年（吸菸者須同意接受戒菸衛教）"
       ],
       [
        "肺癌家族史",
        "父母、子女或兄弟姊妹曾確診肺癌：女性40–74歲、男性45–74歲"
       ],
       [
        "檢查間隔",
        "每2年1次（公費篩檢自111年7月上路）"
       ]
      ]
     }
    },
    {
     "heading": "檢查會痛嗎？報告怎麼看？",
     "format": "bullets",
     "items": [
      "躺著聽指示閉氣幾秒，不用打針，不會痛。",
      "報告寫「肺結節」先別慌，大部分是良性，醫師會約你定期再照。",
      "有可能虛驚一場（偽陽性），也可能漏看小病灶，有久咳、咳血還是要看醫生。"
     ]
    },
    {
     "heading": "有問題怎麼辦？",
     "format": "bullets",
     "items": [
      "如果懷疑是癌症，醫師會安排切片或進一步檢查。",
      "不符合資格也能自費做，先和醫師聊聊適不適合。",
      "抽菸的朋友，順便把菸戒掉最划算。"
     ]
    }
   ],
   "think_tank_view": "把LDCT想成肺部的定期保養：符合資格就排進行事曆，報告有結節就照醫師說的回診，比自己上網查到睡不著實際多了。",
   "hashtags": [
    "LDCT",
    "低劑量電腦斷層",
    "國健署"
   ],
   "references": [
    {
     "title": "胸部低劑量電腦斷層檢查服務",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=4619"
    },
    {
     "title": "公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始",
     "source": "衛生福利部",
     "url": "https://mohw.gov.tw/cp-16-84987-1.html"
    },
    {
     "title": "肺癌公費篩檢3年 早期檢出逾8成 權威醫：50歲以上都應受檢",
     "source": "TVBS新聞網",
     "url": "https://health.tvbs.com.tw/nutrition/356913"
    },
    {
     "title": "114年死因統計結果摘要表",
     "source": "衛生福利部",
     "url": "https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html"
    }
   ],
   "content_check_note": "數據引自國健署與衛福部公開資料並標明年份，未使用療效保證用語，未涉及具體商品。",
   "ai_rationale": {
    "layout_reason": "以高風險族群視角說明資格、過程與追蹤。",
    "tone": "生活親切",
    "tone_reason": "降低對檢查的恐懼。",
    "basis": [
     "公費資格取自國健署LDCT服務頁",
     "20%死亡率降低取自衛福部114-12-30新聞稿",
     "3年累積成果為TVBS轉述國健署"
    ],
    "to_verify": [
     "3年累積成果的國健署原始公告",
     "檢查過程的時間與輻射劑量描述"
    ]
   },
   "decision_points": [
    {
     "id": "dp-ldct-early",
     "type": "data_version",
     "title": "篩檢早期比例有兩組數字",
     "desc": "國健署說明經LDCT篩檢發現的肺癌「85%為早期」；媒體轉述公費篩檢滿3年的累積成果為「逾8成（83%）為早期」。兩者統計期間不同，AI 採用有明確期間的累積成果。",
     "current": "公費篩檢滿3年，找出的肺癌逾8成為早期",
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
       "label": "逾8成（83%）",
       "value": "公費篩檢滿3年累積",
       "note": "TVBS新聞網轉述國健署（目前採用）"
      },
      {
       "label": "85%",
       "value": "統計期間未載明",
       "note": "國健署說明"
      }
     ]
    }
   ]
  },
  "簡潔有力": {
   "content_type": "健康文章",
   "update_date": "2026/11/23",
   "title": "LDCT：高風險族群每2年1次免費肺癌篩檢",
   "intro": "公費LDCT對象為50–74歲重度吸菸者與有肺癌家族史者，每2年1次，可降低重度吸菸者20%肺癌死亡率。",
   "sections": [
    {
     "heading": "資格",
     "format": "table",
     "table": {
      "headers": [
       "公費對象",
       "條件"
      ],
      "rows": [
       [
        "重度吸菸者",
        "50–74歲，吸菸史20包-年以上，仍在吸菸或戒菸未滿15年（吸菸者須同意接受戒菸衛教）"
       ],
       [
        "肺癌家族史",
        "父母、子女或兄弟姊妹曾確診肺癌：女性40–74歲、男性45–74歲"
       ],
       [
        "檢查間隔",
        "每2年1次（公費篩檢自111年7月上路）"
       ]
      ]
     }
    },
    {
     "heading": "結果",
     "format": "bullets",
     "items": [
      "肺結節多為良性，依醫師建議定期追蹤。",
      "疑似惡性再安排切片確診。"
     ]
    },
    {
     "heading": "提醒",
     "format": "bullets",
     "items": [
      "有偽陽性與偽陰性，症狀仍要就醫。",
      "吸菸者同步戒菸。"
     ]
    }
   ],
   "think_tank_view": "符合資格就篩，有結節就追蹤。",
   "hashtags": [
    "LDCT",
    "低劑量電腦斷層",
    "國健署"
   ],
   "references": [
    {
     "title": "胸部低劑量電腦斷層檢查服務",
     "source": "衛生福利部國民健康署",
     "url": "https://www.hpa.gov.tw/Pages/List.aspx?nodeid=4619"
    },
    {
     "title": "公布112年國人癌症登記資料分析結果 守護健康未來 從癌症篩檢開始",
     "source": "衛生福利部",
     "url": "https://mohw.gov.tw/cp-16-84987-1.html"
    },
    {
     "title": "肺癌公費篩檢3年 早期檢出逾8成 權威醫：50歲以上都應受檢",
     "source": "TVBS新聞網",
     "url": "https://health.tvbs.com.tw/nutrition/356913"
    },
    {
     "title": "114年死因統計結果摘要表",
     "source": "衛生福利部",
     "url": "https://www.mohw.gov.tw/dl-100920-e5938c74-aa2a-4994-a15c-054787318303.html"
    }
   ],
   "content_check_note": "數據引自國健署與衛福部公開資料並標明年份，未使用療效保證用語，未涉及具體商品。",
   "ai_rationale": {
    "layout_reason": "精簡為資格、結果、提醒。",
    "tone": "簡潔有力",
    "tone_reason": "社群短文。",
    "basis": [
     "公費資格取自國健署LDCT服務頁",
     "20%死亡率降低取自衛福部114-12-30新聞稿",
     "3年累積成果為TVBS轉述國健署"
    ],
    "to_verify": [
     "3年累積成果的國健署原始公告",
     "檢查過程的時間與輻射劑量描述"
    ]
   },
   "decision_points": [
    {
     "id": "dp-ldct-early",
     "type": "data_version",
     "title": "篩檢早期比例有兩組數字",
     "desc": "國健署說明經LDCT篩檢發現的肺癌「85%為早期」；媒體轉述公費篩檢滿3年的累積成果為「逾8成（83%）為早期」。兩者統計期間不同，AI 採用有明確期間的累積成果。",
     "current": "公費篩檢滿3年，找出的肺癌逾8成為早期",
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
       "label": "逾8成（83%）",
       "value": "公費篩檢滿3年累積",
       "note": "TVBS新聞網轉述國健署（目前採用）"
      },
      {
       "label": "85%",
       "value": "統計期間未載明",
       "note": "國健署說明"
      }
     ]
    }
   ]
  }
 },
 "card": {
  "content_type": "健康圖卡",
  "topic": "低劑量電腦斷層（LDCT）",
  "output_mode": "single",
  "layout_type": "data",
  "communication_priority": {
   "primary_message": "公費LDCT找出的肺癌逾8成為早期",
   "primary_visual": "逾 8 成",
   "secondary_message": "可降低重度吸菸者 20% 肺癌死亡率",
   "action_priority": "符合資格每 2 年篩 1 次"
  },
  "headline_hook": "肺癌死因連年第 1",
  "headline_main": "高風險者每 2 年做 LDCT",
  "title_accent": "每 2 年做 LDCT",
  "primary_stat": {
   "kicker": "公費篩檢滿 3 年",
   "value": "逾 8 成",
   "label": "篩檢找出的肺癌為早期",
   "note": "媒體轉述國健署：2,506 名個案"
  },
  "chart": {
   "type": "bar",
   "title": "肺癌死亡人數（人）",
   "points": [
    {
     "label": "2016",
     "value": 9460,
     "display": "9,460"
    },
    {
     "label": "2019",
     "value": 9701,
     "display": "9,701"
    },
    {
     "label": "2022",
     "value": 10053,
     "display": "10,053"
    },
    {
     "label": "2025",
     "value": 10831,
     "display": "10,831",
     "highlight": true
    }
   ],
   "note": "衛福部死因統計"
  },
  "secondary_stats": [
   {
    "value": "20%",
    "label": "重度吸菸者死亡率降低"
   },
   {
    "value": "逾 21 萬",
    "label": "3 年累積受檢人次"
   }
  ],
  "action_title": "符合資格這樣做",
  "action_cards": [
   {
    "key": "菸",
    "text": "50–74 歲、20 包-年以上吸菸者"
   },
   {
    "key": "家",
    "text": "家族史：女 40 歲、男 45 歲起"
   },
   {
    "key": "追",
    "text": "有結節依醫師建議定期追蹤"
   },
   {
    "key": "戒",
    "text": "吸菸者同步接受戒菸衛教"
   }
  ],
  "carousel_suggestion": {
   "reason": "若想把資格、檢查過程與結果判讀分開說明，也可拆成 3 張系列圖卡",
   "slides": [
    {
     "layout_type": "action",
     "headline_hook": "誰能免費做",
     "headline_main": "公費 LDCT 資格"
    },
    {
     "layout_type": "knowledge",
     "headline_hook": "報告有結節",
     "headline_main": "多數為良性"
    },
    {
     "layout_type": "data",
     "headline_hook": "篩檢成效",
     "headline_main": "逾 8 成早期發現"
    }
   ]
  },
  "hashtags": [
   "LDCT",
   "低劑量電腦斷層",
   "國健署"
  ],
  "sources": [
   "衛生福利部國民健康署",
   "衛生福利部"
  ],
  "illustration_category": "screening-checkup",
  "illustration": {
   "topic": "50 歲以上吸菸者與有家族史者",
   "audience": "一位中年男性躺在電腦斷層檢查台上，技術員在控制室透過玻璃比讚",
   "scene": "安心、主動",
   "emotion": "A middle-aged man lying on a CT scanner table while a technician gives a thumbs-up from the control room, reassuring mood",
   "style": "flat vector, single accent colour, friendly",
   "colorPalette": "deep green #17603f on transparent",
   "imagePrompt": "undefined, flat vector illustration, single deep-green accent colour, transparent background"
  },
  "ai_rationale": {
   "layout_reason": "核心是篩檢成效，選 data：早期比例當主角，死亡人數趨勢放小圖，最後給資格行動卡。",
   "tone": "專業易懂",
   "tone_reason": "數據導向。",
   "basis": [
    "公費資格取自國健署LDCT服務頁",
    "20%死亡率降低取自衛福部114-12-30新聞稿",
    "3年累積成果為TVBS轉述國健署"
   ],
   "to_verify": [
    "3年累積成果的國健署原始公告",
    "檢查過程的時間與輻射劑量描述"
   ]
  },
  "decision_points": [
   {
    "id": "dp-ldct-early",
    "type": "data_version",
    "title": "篩檢早期比例有兩組數字",
    "desc": "國健署說明經LDCT篩檢發現的肺癌「85%為早期」；媒體轉述公費篩檢滿3年的累積成果為「逾8成（83%）為早期」。兩者統計期間不同，AI 採用有明確期間的累積成果。",
    "current": "逾 8 成｜公費篩檢滿 3 年",
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
      "label": "逾8成（83%）",
      "value": "公費篩檢滿3年累積",
      "note": "TVBS新聞網轉述國健署（目前採用）"
     },
     {
      "label": "85%",
      "value": "統計期間未載明",
      "note": "國健署說明"
     }
    ]
   }
  ],
  "content_check_note": "成效數字標明為媒體轉述國健署，未使用療效保證用語，未涉及具體商品。"
 },
 "review": {
  "article": [
   {
    "passage_id": "P1",
    "flagged_text": "過程不會痛",
    "issue_category": "MEDICAL_INTERPRETATION",
    "issue_subcategory": "overgeneralization",
    "issue_explanation": "檢查本身不痛，但部分人平躺或閉氣會不適，寫成絕對說法可能不夠精確。",
    "severity": "low",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "屬用語精確度。",
    "suggested_revision": "過程通常不會痛",
    "match": [
     "不會痛。"
    ]
   },
   {
    "passage_id": "P1",
    "flagged_text": "逾8成為早期",
    "issue_category": "DATA_FACTUAL_ACCURACY",
    "issue_subcategory": "source_level",
    "issue_explanation": "此數字為媒體轉述國健署成果，國健署另有「85%為早期」的說法，兩者期間不同，宜標明統計期間。",
    "severity": "medium",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "已設決策點。",
    "suggested_revision": "公費篩檢滿3年找出的個案中逾8成為早期（媒體轉述國健署）",
    "match": [
     "逾8成是早期"
    ]
   },
   {
    "passage_id": "P1",
    "flagged_text": "多數為良性",
    "issue_category": "MEDICAL_INTERPRETATION",
    "issue_subcategory": "unsupported_claim",
    "issue_explanation": "未提供良性比例的出處，宜改為較保守的描述或補上來源。",
    "severity": "low",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "屬證據層級問題。",
    "suggested_revision": "許多屬良性變化",
    "match": [
     "大部分是良性"
    ]
   },
   {
    "passage_id": "P1",
    "flagged_text": "可降低重度吸菸者20%肺癌死亡率",
    "issue_category": "DATA_FACTUAL_ACCURACY",
    "issue_subcategory": "comparison_baseline",
    "issue_explanation": "20%是相較胸部X光篩檢的結果，未寫比較對象，讀者可能以為是相較不篩檢。",
    "severity": "low",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "補比較基準。",
    "suggested_revision": "相較胸部X光，可降低重度吸菸者20%肺癌死亡率",
    "match": []
   }
  ],
  "card": [
   {
    "passage_id": "P1",
    "flagged_text": "篩檢找出的肺癌為早期",
    "issue_category": "DATA_FACTUAL_ACCURACY",
    "issue_subcategory": "source_level",
    "issue_explanation": "卡面主數字為媒體轉述，國健署另有85%的說法。",
    "severity": "low",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "已設決策點。",
    "suggested_revision": "公費篩檢 3 年找出的肺癌為早期",
    "match": []
   },
   {
    "passage_id": "P1",
    "flagged_text": "重度吸菸者死亡率降低",
    "issue_category": "DATA_FACTUAL_ACCURACY",
    "issue_subcategory": "comparison_baseline",
    "issue_explanation": "未標比較基準（相較胸部 X 光）。",
    "severity": "low",
    "verification_needed": "no",
    "verification_target": null,
    "time_sensitive": "no",
    "recommended_action": "clarify",
    "uncertainty_note": "補比較基準。",
    "suggested_revision": "比胸部 X 光多降死亡率",
    "match": []
   }
  ]
 },
 "title_alts": [
  "低劑量電腦斷層（LDCT）：公費肺癌篩檢資格、過程與結果怎麼看",
  "家人有肺癌、抽菸20包-年？低劑量電腦斷層免費做",
  "公費LDCT找出的肺癌逾8成為早期：資格與結節追蹤"
 ],
 "card_title_alts": [
  [
   "肺癌死因連年第 1",
   "高風險者每 2 年做 LDCT"
  ],
  [
   "家人有肺癌史",
   "40 歲起免費 LDCT"
  ],
  [
   "肺結節別慌",
   "依醫師建議定期追蹤"
  ]
 ],
 "data_addon": [
  "肺癌標準化死亡率由103年每十萬人25.3人降至113年21.2人（國健署）。",
  "111年確診肺癌中4期占47.4%，1期約9成5年存活、4期約1成（國健署）。",
  "112年癌症登記肺癌新發19,986人，連續3年居第1位。"
 ],
 "cta": "打開健保快易通查一下資格，符合就預約公費低劑量電腦斷層，抽菸的話同時預約戒菸門診。"
});
})();
