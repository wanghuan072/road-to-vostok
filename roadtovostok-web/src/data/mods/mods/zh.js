export default {
  'item-spawner': {
    title: '物品生成器（Item Spawner）',
    imageAlt: 'Road to Vostok 物品生成器模组缩略图',
    tags: ['体验优化', '自更新', 'Next Fest 试玩（Godot 4.6）'],
    comments: [
      {
        author: '背包流程',
        body: 'Insert 打开面板不必退出搜刮循环 — 测新档装备时很方便。',
      },
      {
        author: '持久化',
        body: '生成 UI 在下次开背包仍在，符合我跑图节奏：少记一个热键。',
      },
      {
        author: '加载顺序',
        body: '若叠大型玩法包，启用前先看 Workshop 上与其它包的冲突说明。',
      },
    ],
    seo: {
      title: 'Road to Vostok 物品生成器模组（Ryhon）：QoL 生成菜单与安装 | Road To Vostok 指南',
      description:
        'Road to Vostok 模组：Ryhon 的 Item Spawner — Insert 打开背包内物品生成菜单（ItemSpawner.vmz）。Metro Mod Loader、安装步骤与大型整合包兼容性。',
      keywords:
        'Road to Vostok 模组, Item Spawner, Ryhon, Road to Vostok QoL, Metro Mod Loader, 背包生成, ItemSpawner vmz, Next Fest',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  本站<strong>不托管</strong>模组文件。请用侧栏 <strong>在 ModWorkshop 打开</strong> 下载 <strong>ItemSpawner.vmz</strong>，并确认与你的 Next Fest 试玩或抢先体验版本一致。
</p>

<p><strong>功能</strong></p>
<ul>
  <li>打开<strong>背包</strong>时按 <strong>Insert</strong> 呼出生成菜单。</li>
  <li>生成窗口在下次开背包前会<strong>一直保持</strong>，直到再按 <strong>Insert</strong> 关闭。</li>
  <li>作者页体积较小；标注自更新 — 大版本后请重测。</li>
</ul>

<p><img src="/images/mods/item-spawner-full.webp" alt="Road to Vostok Item Spawner 模组截图" width="640" loading="lazy" decoding="async" style="max-width: 100%; height: auto;" /></p>

<h2>安装（常见步骤）</h2>
<ol>
  <li>按游戏当前说明安装 <strong>Metro Mod Loader</strong>。</li>
  <li>将 <code>ItemSpawner.vmz</code> 放入游戏 <code>mods</code> 目录（若步骤有变以作者页为准）。</li>
  <li>若使用 Mod Organizer 2，请按作者说明操作。</li>
</ol>

<h2>兼容性提示</h2>
<p>
  大型整合可能在部分顺序下列为不兼容（例如
  <a href="/mods/oldmans-immersive-overhaul">Oldman 沉浸大修</a> 提及某些组合会崩溃 — 有玩家固定用 v1.1.0）。
  叠包前务必阅读作者的兼容性章节。
</p>
`,
  },
  'oldmans-immersive-overhaul': {
    title: "Oldman 沉浸大修（模组合集）",
    imageAlt: 'Oldman 沉浸大修缩略图',
    tags: ['玩法', '合集', 'Next Fest 试玩', 'Godot 4.6'],
    comments: [
      {
        author: 'Workshop 常客',
        body: 'MCM 调 AI 数量、夜视很方便 — 长跑前把各页扫一遍。',
      },
      {
        author: '加载顺序',
        body: '先卸掉作者的独立分包再装本合集；重复加载很容易冲突。',
      },
      {
        author: '玩法',
        body: '分段装填打一局就顺手了 — 压力下中断换枪比整夹丢失更合理。',
      },
      {
        author: '兼容性',
        body: '叠 QoL 前看不兼容列表；闹钟时间显示类模组会破坏捆绑武器逻辑。',
      },
    ],
    seo: {
      title:
        'Road to Vostok 沉浸大修模组（Oldman）：AI、夜视、MCM 与武器 | Road To Vostok 指南',
      description:
        'Road to Vostok 模组：Oldman 沉浸大修（ImmersiveXP）— 卡壳、分段装填、AI 视听、沉浸夜视、MCM 开关。Metro Mod Loader、vmz 安装与加载顺序。',
      keywords:
        'Road to Vostok 模组, 沉浸大修, ImmersiveXP, Oldman, Metro Mod Loader, MCM, 武器卡壳, AI 模组',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  本站<strong>不托管</strong>模组文件。请用侧栏 <strong>在 ModWorkshop 打开</strong> 下载 <strong>ImmersiveXP.vmz</strong>，并核对你的试玩或抢先体验版本。
</p>

<p><strong>安装前</strong></p>
<ul>
  <li>与其它模组混用可能毁档；叠包前先看作者页的不兼容列表。</li>
  <li>作者多数独立包已合并于此 — 请从加载顺序里移除重复项。</li>
</ul>

<div class="mod-video-embed">
  <iframe
    src="https://www.youtube.com/embed/0XhwWrmSkVk"
    title="实机视频 1"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    referrerpolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>

<h2>武器与操作</h2>
<ul>
  <li>武器耐久与卡壳：影响精度、后坐、卡弹概率；可用工具箱修理。</li>
  <li>分段装填：换枪可中断，再从上一阶段继续（背包满时弹匣可能掉落）。</li>
  <li>空槽自动装备武器、刀、手雷；空手时自动拔出。</li>
  <li>沉浸交互：开门、容器、拾取前有低枪戒备与短延迟。</li>
</ul>

<h2>AI 大修（摘要）</h2>
<ul>
  <li>视觉：距离受光照、天气、移动、室内、手电、消音器等影响；锥角在最大距离先窄后宽。</li>
  <li>听觉：地表、室内、交互、天气（如雷暴）；AI 会对其它 AI 枪声/爆炸反应；玩家未消音枪声传播更远。</li>
  <li>换弹（MCM）：较真实的弹匣容量、空仓换弹（音效）、偶发战术换弹、基于余弹的决策。</li>
  <li>压制（MCM）：更多全自动；丢失视野时对最后已知位置短点射。</li>
  <li>数量与行为（MCM）：更高活动/地图上限、对火力与门的反应、精度/移动微调。</li>
  <li>超音速弹头掠过玩家时的音爆，延迟随距离缩放。</li>
</ul>

<h2>夜视、地图与体验优化</h2>
<ul>
  <li>沉浸夜视：大倍镜与夜视冲突（红点可用）、武器模糊、噪点降低（部分可在 MCM 关闭）。</li>
  <li>公寓：更多路径点让 AI 使用室内房间。</li>
  <li>手电、天气、开镜缩放及大量 UI/交互修复（如背包装弹不自动上膛、膛内弹动画、冲刺跳退出蹲伏、冲刺自动低枪、补刀、卡弹药检查修复、换枪后弹匣可见子弹等）。</li>
</ul>

<h2>安装</h2>
<ol>
  <li>安装 <strong>Metro Mod Loader</strong>（步骤以作者当前页为准）。</li>
  <li>将 <code>ImmersiveXP.vmz</code> 放入游戏安装目录 <code>mods</code> 文件夹。</li>
  <li>用 <strong>MCM（Mod Configuration Menu）</strong> 开关各功能组。</li>
</ol>
<p>不必一次全开所有系统。</p>

<div class="mod-video-embed">
  <iframe
    src="https://www.youtube.com/embed/OiEtQQ0xY5s"
    title="实机视频 2"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    referrerpolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>

<h2>更新摘要（2.2.2）</h2>
<p>修复 Always Permadeath 挑战；靠近火堆时玩家更易被看见；回滚导致公寓缺门的 waypoint 改动 — 完整 changelog 以作者页为准。</p>

<h2>已知不兼容模组（节选）</h2>
<p>线上列表可能已变；以作者页为权威来源。</p>
<ul>
  <li><strong>Armour &amp; Helmet Repair</strong> — 重载崩溃；2.1.5+ 可尝试改名 workaround 调整顺序。</li>
  <li><strong>(Bigger) Font Size</strong> — 破坏分段装填；需加载在 ImmersiveXP 之后。</li>
  <li><strong>Fly mode</strong> — Controller.gd 冲突；飞行已捆绑在本包。</li>
  <li><strong>Inventory Improvements</strong> — 破坏工具箱修理；可尝试先于 ImmersiveXP 加载。</li>
  <li><strong>Item Spawner</strong> — 有崩溃报告；部分用户留在 v1.1.0。</li>
  <li><strong>Quest Marker</strong> — 同开可能严重掉帧。</li>
  <li><strong>Shelter Anywhere</strong> — 用户报告冲突。</li>
  <li><strong>Show Time of Day When Looking At Placed Alarm Clock</strong> — 破坏卡壳、分段装填与武器逻辑。</li>
  <li><strong>Smooth Hold Reload</strong> — 冲突；已获授权并入 — 请用 MCM。</li>
</ul>
`,
  },
}
