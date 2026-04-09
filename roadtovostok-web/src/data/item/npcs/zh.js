/**
 * 中文界面元数据；未覆盖的字段（如 detailsHtml）沿用 en.js。
 * 若需全文中文，可在对应 addressBar 下增加 detailsHtml。
 */
export default {
  bandits: {
    title: '强盗',
    role: '敌对派系',
    imageAlt: '多种外观的强盗 — 随地图变化',
    summary:
      '在各地图刷新的主力敌人：随机配装、双武器、掩体/伏击/尾随 AI，以及社区整理的行为细节。',
    location: {
      title: '村庄 · 05 区',
      imageAlt: '村庄枢纽 — 05 区地图语境',
      content:
        '强盗在 05 区各图巡逻与伏击；村庄线是常见早期枢纽，敌对刷新会与商人、搜刮路线重叠。密度因地图而异 — 请结合地图钉并在游戏中确认。',
    },
    seo: {
      title: '强盗：敌对 AI、装备与已知特性',
      description:
        'Road To Vostok 强盗：随机配装、尾随伏击 AI、双武器、掩体与视野限制及社区记录的行为备注。战斗参考；请在游戏中核实。',
      keywords: 'Road To Vostok, 强盗, 敌对 AI, 生存射击, NPC 战斗, 敌人生成',
    },
  },
  generalist: {
    title: '通贩',
    role: '友好商人 · 村庄区域',
    imageAlt: '通贩商人',
    summary:
      '友好 NPC，可出售 valuables 换取商人库存；10 分钟补货循环；回避难所再出来可刷新随机库存；1–4 级送货任务。',
    location: {
      title: '村庄',
      imageAlt: '区域枢纽 / 商人语境（Fandom）',
      content:
        '05 区起始枢纽：通贩、搜刮、食物与医疗。强盗可在 05 区各图刷新 — 接近路线保持警惕。',
    },
    seo: {
      title: '通贩：商人任务与村庄路线',
      description:
        '通贩商人：用 valuables 换装备、10 分钟补货、避难所刷新技巧、1–4 级送货任务与村庄走法。Road To Vostok NPC 指南。',
      keywords: 'Road To Vostok, 通贩, 商人 NPC, 村庄, 送货任务, 补货',
    },
  },
  doctor: {
    title: '医生',
    role: '友好商人 · 船坞区域',
    imageAlt: '医生商人',
    summary:
      '医疗向商人：绷带、医疗包、止血带等；10 分钟补货；1–4 级送货任务；位于船坞 Hamikot Logistics 地下室。',
    location: {
      title: '船坞',
      imageAlt: '医生商人语境（Fandom）',
      content:
        '05 区较大地图：Hamikot Logistics 地下室为医生商人，战利品路线更重、风险常高于村庄线。',
    },
    seo: {
      title: '医生：医疗库存与船坞位置',
      description:
        'Road To Vostok 医生商人：医疗用品、补货周期、送货任务、Hamikot Logistics 地下室路线。NPC 指南。',
      keywords: 'Road To Vostok, 医生, 商人, 船坞, 医疗, 任务',
    },
  },
  cat: {
    title: '猫（伙伴）',
    role: '避难所伙伴 · 系统向功能',
    summary:
      '避难所宠物，通过限时救援链解锁（社区常称「失踪的猫」）：前哨地堡/井边拾取、大型猫箱、木屋放置与定期喂食 — 非商人或敌对派系。',
    location: {
      title: '避难所 · 05 区传送链',
      content:
        '非地图 NPC：据社区报告，猫在木屋定居前需跨村庄、学校、前哨等图的救援链；上述地图商人为通贩与医生 — 库存与任务见对应文章。',
    },
    seo: {
      title: '猫伙伴：避难所宠物概览',
      description:
        'Road To Vostok 猫伙伴：避难所宠物、类「失踪的猫」事件、前哨救援、猫箱、喂食要点。短文参考；请在游戏中确认。',
      keywords: 'Road To Vostok, 猫伙伴, 避难所宠物, 失踪的猫, 前哨, 猫箱, 抢先体验',
    },
  },
}
