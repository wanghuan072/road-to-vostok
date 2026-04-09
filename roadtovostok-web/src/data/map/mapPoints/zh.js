/** 地图钉中文：与 en 的 id、entries 顺序一致，仅覆盖文案字段 */
export default {
  cabin: {
    title: '木屋（避难所）',
    content: '玩家避难所：睡眠、储藏与避难所系统 — 前期任务枢纽。',
    entries: [{ title: '避难所循环', content: '存放装备、恢复状态，并从固定安全点接取早期任务。' }],
  },
  village: {
    title: '村庄',
    content:
      '05 区起始枢纽：通贩商人、搜刮、食物与医疗。强盗可在 05 区各图刷新 — 接近路线保持警惕。',
    imageAlt: '区域枢纽 / 商人语境（Fandom）',
    entries: [
      {
        title: '通贩',
        content:
          '友好商人：杂项消耗品、医疗、制作材料与武器；10 分钟补货；分级送货任务。',
        imageAlt: '通贩商人（Fandom）',
      },
      {
        title: '强盗',
        content:
          '地图主力敌对派系：随机配装、掩体、伏击与尾随行为 — 刷新因地图与池而异。',
        imageAlt: '强盗 — 外观随地图变化（Fandom）',
      },
      { title: '搜刮与医疗', content: '前期食物、医疗用品与可出售杂物 — 典型新手枢纽战利品。' },
      {
        title: '商人任务',
        content: '通贩送货线（1–4 级）；物品列表见维基。',
      },
    ],
  },
  shipyard: {
    title: '船坞',
    content:
      '05 区较大地图：Hamikot Logistics 地下室有医生商人，战利品路线更重、风险通常高于村庄线（社区地图）。',
    imageAlt: '医生商人语境（Fandom）',
    entries: [
      {
        title: '医生',
        content: '医疗商人：绷带、医疗包、止血带；10 分钟补货；1–4 级送货任务。',
        imageAlt: '医生商人（Fandom）',
      },
      { title: '高收益路线', content: '比开阔公路回报更好 — 规划负重、药品与撤离时机。' },
      {
        title: '地下室入口',
        content: 'Hamikot Logistics：从村庄侧进入，下楼梯前往医生房间时注意敌人。',
      },
    ],
  },
  highway: {
    title: '公路',
    content: '连接村庄线的开阔通道；暴露移动，农点相对较轻。',
    entries: [
      {
        title: '强盗巡逻',
        content: '开阔地利于视野 — 噪音与移动易引来注意。',
      },
      { title: '路边搜刮', content: '连接路上的轻量拾取；权衡速度与暴露。' },
    ],
  },
  school: {
    title: '学校',
    content: '学校：可较早接到科学与工程类任务。',
    entries: [
      { title: '科学与工程任务', content: '与学校场景挂钩的任务节点 — 目标请在游戏中确认。' },
      { title: '机构类战利品', content: '书籍、工具与制作相关刷新随补丁变化。' },
    ],
  },
  outpost: {
    title: '前哨',
    content: '前哨：可较早进入边境地带任务与战利品。',
    entries: [
      {
        title: '边境推进',
        content: '更难过境前的跳板 — 规则见任务页。',
      },
      { title: '边境级装备', content: '优于 05 区起步装；仍需准备应对卫兵与环境危害。' },
    ],
  },
  'border-crossing': {
    title: '边境过境点',
    content: '芬兰—俄罗斯式检查站关卡；卫兵、障碍或水路因路线而异。',
    entries: [
      { title: '卫兵与空中支援', content: '官方描述：腐败卫兵、武装检查站，可能呼叫空中支援。' },
      {
        title: '过境任务',
        content: '实用边境 / 符拉迪沃斯托克说明见任务页。',
      },
    ],
  },
  minefield: {
    title: '雷区',
    content: '边境地带危害：雷线 — 过境前规划路线与体力。',
    entries: [
      { title: '危险通过', content: '缓慢、谨慎移动；避免盲冲刺穿越可疑地面。' },
    ],
  },
  'water-crossing': {
    title: '水道过境',
    content: '部分边境图使用船只或浅滩 — 注意负重与体力。',
    entries: [{ title: '船只 / 浅滩', content: '当水路成为瓶颈时，负重与耐力更为关键。' }],
  },
  vostok: {
    title: 'Vostok',
    content: '俄罗斯一侧终局向：高风险；商店文案将类永久死亡规则与此弧绑定。',
    entries: [
      { title: '军方', content: '重火力与装甲压力 — 控制医疗、弹药与撤离节奏。' },
      { title: '终局战利品', content: '回报最高；死亡规则严于 05 区。' },
      {
        title: 'Vostok 规则',
        content: '满装跑图前请先阅读任务页。',
      },
    ],
  },
  'vostok-military': {
    title: '军方高压（东侧）',
    content: '越向东 opposition 与战利品越强 — 控制药品与弹药。',
    entries: [
      { title: '东侧压力', content: 'AI 更紧、尸体上装备更好 — 勿在补给不足时久留。' },
      { title: '高级拾取', content: '战利品品质随风险上升；Vostok 地图适用更严死亡规则。' },
    ],
  },
}
