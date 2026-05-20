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
  'armed-enhancement-weapon-attachment-spawner': {
    title: '武装强化：武器配件生成（Armed Enhancement）',
    imageAlt: 'Road to Vostok「武装强化 — 武器配件生成」模组（Nexus Mods）',
    tags: ['玩法', '武器', '战利品多样性', 'MCM'],
    comments: [
      {
        author: '战利品观感',
        body: '地上枪偶尔带镜和消音，搜刮没那么千篇一律——仍是随机，但上限更刺激。',
      },
      {
        author: 'MCM',
        body: '1.1.0 后的上膛相关选项值得扫一眼；我信任流程前一直用默认。',
      },
      {
        author: '叠模组',
        body: '若还叠大型武器大修，先在 Nexus 上看加载顺序说明，别单怪这一包。',
      },
    ],
    seo: {
      title:
        'Road to Vostok 武装强化模组：随机武器配件与上膛选项（Peter4Master）| Road To Vostok 指南',
      description:
        'Road to Vostok Nexus 模组 Armed Enhancement — Weapon Attachment Spawner（Peter4Master）：世界、容器与敌人武器可随机带瞄准镜、消音器与激光；MCM 可调校上膛等行为。需 Metro Mod Loader；在 Nexus Mods 下载。',
      keywords:
        'Road to Vostok 模组, Armed Enhancement, Weapon Attachment Spawner, Peter4Master, Nexus Mods, 武器配件, 消音器掉落, Metro Mod Loader, MCM, 战利品多样性',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  本站<strong>不托管</strong>模组文件。请用侧栏 <strong>在 Nexus Mods 打开</strong> 进入作者页，再在 <strong>Files</strong> 标签取当前压缩包、校验信息与热修说明。
</p>

<p><strong>玩家向功能</strong></p>
<ul>
  <li>你在世界、容器与敌人身上捡到的武器，有机会自带 <strong>瞄准镜</strong>、<strong>消音器</strong> 与 <strong>激光</strong>，减少「光杆枪 + 空弹匣」的单调感。</li>
  <li>作者强调是更<strong>可信的随机多样性</strong>，而不是每次必出满配。</li>
  <li>近期更新（见 Nexus changelog）收紧了重复配件等边界情况，并改进<strong>管式供弹 / 上膛</strong>逻辑；<strong>MCM</strong> 可配置上膛策略（如始终预上膛、装备时自动、手动等，默认有混合方案）。</li>
</ul>

<h2>适合谁</h2>
<p>
  想要<strong>随机武器上的配件花样</strong>、又不想自己一个个手摆步枪时选用。若在做最小模组集调试可先不加；待 Metro Mod Loader 与基础 QoL 稳定后再启用更省心。
</p>

<h2>安装（常见步骤）</h2>
<ol>
  <li>按你的 Road to Vostok 版本（试玩 / 抢先体验）安装 <strong>Metro Mod Loader</strong>。</li>
  <li>在 Nexus 打开 <strong>Files</strong>，按作者当前说明把包放入游戏 <code>mods</code> 目录，与其它 <code>.vmz</code> 并列。</li>
  <li>若页面列出 <strong>MCM</strong>，请安装以便调节上膛等开关而无需手改脚本。</li>
  <li>大版本后开新长跑前，再看 Nexus <strong>Posts</strong> 是否有热修。</li>
</ol>

<h2>兼容与加载顺序</h2>
<p>
  与其它武器包是否冲突以 Nexus 正文与帖子为准。若叠大型玩法包（例如本站对
  <a href="/mods/oldmans-immersive-overhaul">Oldman 沉浸大修</a> 的介绍），请交叉阅读双方说明，别把弹道异常全归到本生成器上。
</p>

<h2>安全提示</h2>
<p>
  只从侧栏 Nexus 链接下载；核对文首版本号；中途改加载顺序前请备份存档。
</p>
`,
  },
  'lootmodifier': {
    title: 'LootModifier（战利品修改器）',
    loaderName: 'Metro 模组加载器 + MCM',
    imageAlt: 'Road to Vostok LootModifier — 掉率、容器重掷与耐久区间（Nexus Mods）',
    tags: ['体验优化', '战利品', 'MCM', '开发中'],
    comments: [
      {
        author: '难度旋钮',
        body: '分开调地面与柜子概率后，终于不再连空三栋楼——又不至于像作弊；MCM 数值要轻手调。',
      },
      {
        author: '重掷逻辑',
        body: '最小/最大重掷是我最爱：对「太穷」的柜子轻轻推一把，已经大红的不会强行压下去。',
      },
      {
        author: '注意',
        body: '作者提醒「保证地面掉落」偶发穿地——我只在测路线时开，铁人档不敢乱试。',
      },
    ],
    seo: {
      title:
        'Road to Vostok LootModifier：掉率、容器重掷与装备耐久区间（HumbleCorpse）| Road To Vostok 指南',
      description:
        'Road to Vostok Nexus 模组 LootModifier（HumbleCorpse）：调节地面与容器掉落概率；低于最小时的容器可重掷到最小～最大之间；可调武器、夜视、手电等耐久生成区间；可选保证地面掉落（有已知穿地风险）。需 MCM 与 Metro Mod Loader。',
      keywords:
        'Road to Vostok 模组, LootModifier, HumbleCorpse, Nexus Mods, 掉率, 容器重掷, Metro Mod Loader, MCM, 耐久, 战利品',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  本站<strong>不托管</strong>模组文件。请用侧栏 <strong>在 Nexus Mods 打开</strong> 查看作者页，安装前务必阅读 <strong>Requirements</strong> 与 <strong>Files</strong>。
</p>

<p><strong>玩家向功能</strong></p>
<ul>
  <li><strong>掉率调节</strong>：调整地面与容器物品出现频率，让流程不那么「饿死」或更慷慨，而无需手改整个随机种子。</li>
  <li><strong>容器重掷</strong>：若容器生成数量低于你设的<strong>最小值</strong>，可在<strong>最小～最大</strong>之间重掷；已超过<strong>最大值</strong>的欧气结果不会被压回去。</li>
  <li><strong>耐久区间</strong>：为可磨损装备（武器、夜视、手电等）调整生成时的耐久带，贴合你想要的搜刮体验。</li>
  <li><strong>可选保证地面掉落</strong>：作者注明偶发会因本体问题穿地——请知情后使用。</li>
</ul>

<p>
  Nexus 页将该工具标为<strong>开发中</strong>，并提到后续可能包含武器带配件/弹匣、AI 战利品等方向——以作者页为最新路线图。
</p>

<h2>依赖</h2>
<p>
  作者写明需要 <strong>MCM（Mod Configuration Menu）</strong> 与 <strong>Metro Mod Loader</strong>。请按你的版本安装二者，再回到 Nexus 取 LootModifier 压缩包并查看 <strong>Posts</strong> 中的兼容说明。
</p>

<h2>安装（作者摘要）</h2>
<ol>
  <li>将下载的压缩包放入游戏 <code>mods</code> 目录。</li>
  <li>若使用 Vostok 注入器或新版 Metro 工作流需要 <code>.vmz</code>，请按 Nexus 说明将 <strong><code>.zip</code> 改名为 <code>.vmz</code></strong>。</li>
  <li>进游戏打开 <strong>MCM</strong>，在确认模组加载无误后再调概率、重掷阈值、耐久曲线与实验项。</li>
</ol>

<h2>兼容思路</h2>
<p>
  战利品模组会牵动经济与囤货节奏。若同时装大型玩法包（例如本站
  <a href="/mods/oldmans-immersive-overhaul">Oldman 沉浸大修</a>），请交叉阅读双方说明，别把异常掉落只怪某一个条目。
</p>

<h2>安全提示</h2>
<p>
  只从侧栏 Nexus 链接下载；与文首版本对齐；长跑中途改滑条前请备份存档——多模组同时动战利品表时预期很容易被打乱。
</p>
`,
  },
  'suspend-save-resume-exploration': {
    title: '挂起存档系统（或「继续探索」）',
    imageAlt: 'Road to Vostok「挂起存档 / 继续探索」模组 — 非庇护所退出与回到上一张图（Nexus Mods）',
    tags: ['玩法', '界面', '体验优化', '存档'],
    comments: [
      {
        author: '分段玩家',
        body: '终于能长跑后不必先冲回庇护所再关游戏——知道这不是快速存档，紧张感还在。',
      },
      {
        author: '地图重掷',
        body: '我读细则：恢复后世界搜刮会重掷，所以不会把它当「暂停刷同一间房两次」的漏洞。',
      },
      {
        author: '习惯',
        body: '崩溃或强退不会写挂起档——只有游戏内菜单退出才算，逼我每次都正规退出。',
      },
    ],
    seo: {
      title:
        'Road to Vostok 挂起存档：非庇护所退出与主菜单「继续探索」（Levrault）| Road To Vostok 指南',
      description:
        'Road to Vostok Nexus 模组 Suspend Save System（继续探索，Levrault）：在游戏内菜单退出时保留背包与最后地图入口；主菜单「继续探索」回到该点；一次性读取后删除，非快速存档。死亡仍丢携带品；地图状态不冻结。',
      keywords:
        'Road to Vostok 模组, Suspend Save, Resume Exploration, Levrault, Nexus Mods, 非庇护所存档, 挂起存档, Metro Mod Loader, 体验优化存档',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  本站<strong>不托管</strong>模组文件。请用侧栏 <strong>在 Nexus Mods 打开</strong> 查看作者页，在 <strong>Files</strong> 标签获取当前包体及补丁后的安装说明。
</p>

<p><strong>玩家向功能</strong></p>
<ul>
  <li>允许你在野外时通过<strong>游戏内菜单退出</strong>，而不必先赶回庇护所，同时保留<strong>背包内战利品</strong>与<strong>最后使用的地图入口点</strong>。</li>
  <li>在主菜单新增<strong>继续探索</strong>：加载角色并回到上一张图你最后经过的入口。</li>
  <li>挂起槽在<strong>读取后即删除</strong>：作者明确这不是<strong>快速存档</strong>，以保留整体硬核节奏。</li>
  <li><strong>死亡仍会失去携带品</strong>——与本体预期一致。</li>
</ul>

<h2>刻意不保存的内容</h2>
<p>
  作者说明挂起文件只携带<strong>背包</strong>与<strong>最后入口点</strong>。<strong>地图状态</strong>（敌人分布、商人库存、野外容器内容等）不会冻结；恢复后<strong>世界战利品可能重新随机</strong>，因为本体存档模型主要围绕玩家与庇护所。把它当作设计边界，而不是「暂停同一仓库」的漏洞。
</p>

<h2>何时不会写入挂起档</h2>
<ul>
  <li><strong>游戏崩溃</strong>或在<strong>游戏内菜单之外</strong>退出——仅覆盖模组挂钩的正常退出流程。</li>
  <li>测试新叠装前务必<strong>手动备份</strong>；挂起档是安全网，不能替代拷贝存档目录。</li>
</ul>

<h2>安装</h2>
<ol>
  <li>按 Nexus <strong>Files</strong> 标签中的确切文件名与目录结构操作。</li>
  <li>多数 Road to Vostok 环境使用 <strong>Metro Mod Loader</strong> 风格的 <code>mods</code> 文件夹；若需将包重命名为 <code>.vmz</code>，请严格照作者页印刷的步骤。</li>
  <li>装好后请用<strong>弃档</strong>先跑一轮挂起循环，再投入长期铁人角色。</li>
</ol>

<h2>兼容思路</h2>
<p>
  任何改写主菜单、死亡处理或庇护所存档的模组都可能与挂起逻辑交互。若叠大型玩法包（例如本站
  <a href="/mods/oldmans-immersive-overhaul">Oldman 沉浸大修</a>），请阅读双方说明与 Nexus <strong>Posts</strong>，别默认每次都能干净恢复。
</p>

<h2>安全提示</h2>
<p>
  只从侧栏 Nexus 链接下载；压缩包版本与 Nexus 页眉一致；多留备份——挂起工具触及与永久死亡设计相同的不安点，务必先在自己的版本上验证稳定。
</p>
`,
  },
}
