/**
 * 中文补丁：与 `en.js` 按 addressBar 合并。
 * 正文 `detailsHtml` 为中文；游戏内任务名、物品名多保留英文以便对照客户端。
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
    detailsHtml: `
<p class="npc-lead">强盗是游戏中在各地图刷新的<strong>主要敌人</strong>。</p>
<p class="npc-see-also">另见：敌人<strong>刷新位置与频率</strong>因地图而异 — 请在游戏内确认。</p>

<h2>装备</h2>
<ul>
  <li>强盗会携带多种<strong>武器、装备与战利品</strong>；具体配装取决于<strong>地图</strong>以及生成 NPC 时分配的<strong>随机战利品池</strong>。</li>
  <li>强盗可同时携带<strong>两把武器</strong>：一把手持，另一把背在<strong>枪带</strong>上。</li>
  <li>除枪械外，强盗可能穿戴<strong>头部装备</strong>（如 Polaris）或各类<strong>背包</strong>，玩家可从尸体上拾取。</li>
</ul>

<h2>行为</h2>
<dl class="npc-dl">
  <dt>逃跑</dt>
  <dd>当玩家用枪声惊吓强盗或将其打成重伤时，可能触发该行为。</dd>
  <dt>利用掩体</dt>
  <dd>常见表现为强盗在掩体后向玩家射击 — 例如从窗口开火。</dd>
  <dt>伏击模式</dt>
  <dd>强盗会蹲守一处（多为建筑内房间，常关门），试图突袭接近的玩家。</dd>
  <dt>尾随</dt>
  <dd>强盗会蹲走或慢走向玩家最后已知位置潜近，依赖视野或脚步声。</dd>
</dl>

<h2>其他说明</h2>
<ul>
  <li>强盗有时会<strong>只开一枪</strong>，然后跑向最近的掩体或建筑。</li>
  <li>强盗<strong>视野有限</strong> — 若玩家从背后接近，可能不会被发现。</li>
</ul>

<h2>已知问题（社区反馈）</h2>
<p class="npc-muted">来自社区报告；可能已在你的版本中修复或改动。</p>
<ul class="npc-bug-list">
  <li>玩家躲在<strong>灌木或小树</strong>中时，强盗几乎看不见，可能不开火 — 但仍可能朝大致位置移动，仍有风险。</li>
  <li>若玩家在<strong>室外透过窗户</strong>观察，而室内强盗处于<strong>伏击模式</strong>蹲守，可能出现强盗<strong>完全无反应</strong>、近乎<strong>定住</strong>的情况。</li>
  <li>部分强盗对脚步声的响应<strong>很慢</strong>，可能表现为玩家近在咫尺时仍在朝反方向走。</li>
</ul>
`,
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
    detailsHtml: `
<p class="npc-lead">通贩（Generalist）是 Road to Vostok 世界中的<strong>友好 NPC</strong>，可用多种物品与其<strong>交易货物</strong>。</p>

<h2>物品交易</h2>
<p>可将背包中有<strong>价值的物品</strong>卖给通贩，换取商人库存中的物品。常见库存包括：</p>
<ul>
  <li>消耗品（如食物、水）</li>
  <li>任务物品（如 Polaris）</li>
  <li>制作材料（如线轴、烹饪板）</li>
  <li>药品（如绷带、医疗包）</li>
  <li>武器（如 Makarov）</li>
</ul>

<h2>补货</h2>
<ul>
  <li>该 NPC 每<strong>10 分钟</strong>补货一次。</li>
  <li>计时到 <strong>0:00</strong> 时会补货并<strong>覆盖</strong>此前展示的商品，随后重新计时。</li>
  <li>每次补货后商品为<strong>随机</strong>。</li>
  <li>更快刷新方式：返回<strong>避难所</strong>并立刻再出门 — 离开避难所加载时，通贩可能带有<strong>新的随机库存</strong>。</li>
  <li><strong>等级</strong>提升仅影响<strong>手续费</strong>，<strong>不改变</strong>商品表。</li>
</ul>

<h2>任务物品</h2>
<p class="npc-muted">任务名与物品来自社区整理；送货类武器通常不必 100% 耐久。</p>

<h3>等级 1</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>任务</th><th>交付</th><th>获得</th></tr></thead>
<tbody>
<tr><td>Duty Calls</td><td>Toilet Paper</td><td>Jeans</td></tr>
<tr><td>Coffe Break</td><td>Coffe, Crackers</td><td>Duct Tape</td></tr>
<tr><td>Canned Goods</td><td>Tuna, Meat, Peaches</td><td>Bandage</td></tr>
<tr><td>Weapon Delivery 1</td><td>Makarov, AKM（不必满耐久）</td><td>Duffel (Retro)</td></tr>
</tbody>
</table>
</div>

<h3>等级 2</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>任务</th><th>交付</th><th>获得</th></tr></thead>
<tbody>
<tr><td>Bookworm</td><td>B. Fishing, B. Coocking, B. Religion</td><td>PBS</td></tr>
<tr><td>Leather Goods</td><td>Leather Gloves, Fabric Leather</td><td>Peanuts (Salted)</td></tr>
<tr><td>Finnish Dinner</td><td>Pea Soup (Cocked), Mustard</td><td>Jacked M62, Armor III+</td></tr>
</tbody>
</table>
</div>

<h3>等级 3</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>任务</th><th>交付</th><th>获得</th></tr></thead>
<tbody>
<tr><td>High Voltage</td><td>3× Battery</td><td>Mosin</td></tr>
<tr><td>Fishing Suplies</td><td>Tackle Box</td><td>Splint, Windbreacker (Green)</td></tr>
<tr><td>Weapon Delivery 1</td><td>RK-95, AK-12</td><td>PRO, Medkit</td></tr>
<tr><td>Swedish Delights</td><td>Snus Original, Snus Mint, Snus Licorice, Snus Strong</td><td>Field Ration</td></tr>
</tbody>
</table>
</div>

<h3>等级 4</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>任务</th><th>交付</th><th>获得</th></tr></thead>
<tbody>
<tr><td>Bad Santa</td><td>Santa Jacked, KP-31</td><td>Monster, ACOG, MK-18</td></tr>
</tbody>
</table>
</div>
<p><strong>备注：</strong>武器不必处于 100% 耐久。</p>

<h2>位置</h2>
<p>通贩位于<strong>村庄</strong>出生点外不远处。路线：</p>
<ol class="npc-steps">
  <li>离开村庄避难所后沿<strong>坡道</strong>向下。</li>
  <li><strong>右转</strong>进入楼间车库之间的通道。</li>
  <li>再<strong>右转</strong>，沿车库直行。</li>
  <li>最后<strong>再右转</strong>，进入半开大门，旁有装满石块的废料箱。</li>
</ol>
`,
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
    detailsHtml: `
<p class="npc-lead">医生（Doctor）是交易<strong>医疗物品</strong>的<strong>友好 NPC</strong>。</p>

<h2>物品交易</h2>
<p>医生仅交易<strong>医疗物品</strong> — 绷带、医疗包、止血带等（部分社区文档误写为 “medial”，此处按<strong>医疗</strong>理解。）</p>

<h2>补货</h2>
<ul>
  <li>每<strong>10 分钟</strong>补货一次。</li>
  <li>到 <strong>0:00</strong> 时会补货并<strong>覆盖</strong>上一批商品，计时重新开始。</li>
  <li>每次补货后商品<strong>随机</strong>。</li>
  <li>更高<strong>等级</strong>只影响<strong>手续费</strong>，不改变库存表。</li>
</ul>

<h2>任务物品</h2>

<h3>等级 1</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>任务</th><th>交付</th><th>获得</th></tr></thead>
<tbody>
<tr><td>Flu Season</td><td>Cold Medicine</td><td>Tomatoes</td></tr>
<tr><td>Bad Plumbing</td><td>Duct Tape</td><td>Bandage</td></tr>
<tr><td>Burning Sensation</td><td>Lotion</td><td>Matches, Gas Canister</td></tr>
<tr><td>Drug Delivery 1</td><td>3× Painkillers</td><td>Mess Kit</td></tr>
</tbody>
</table>
</div>

<h3>等级 2</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>任务</th><th>交付</th><th>获得</th></tr></thead>
<tbody>
<tr><td>Night Surgery</td><td>Polaris</td><td>Hybrid</td></tr>
<tr><td>Deep Sleep</td><td>Melatonin</td><td>EXPS</td></tr>
<tr><td>Drug Delivery 2</td><td>3× Antibiotics</td><td>Inverter</td></tr>
</tbody>
</table>
</div>

<h3>等级 3</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>任务</th><th>交付</th><th>获得</th></tr></thead>
<tbody>
<tr><td>Steady Hands</td><td>Cigar Box</td><td>Jääkäri Backpack (M05)</td></tr>
<tr><td>Field Trauma</td><td>3× IFAK</td><td>Plate Carrier, Armor III</td></tr>
</tbody>
</table>
</div>

<h3>等级 4</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>任务</th><th>交付</th><th>获得</th></tr></thead>
<tbody>
<tr><td>Patient Report</td><td>Doctor Notes</td><td>VSS, 3× Medkit</td></tr>
</tbody>
</table>
</div>

<h2>位置</h2>
<p>医生位于<strong>船坞</strong>地图 <strong>Hamikot Logistics</strong> 地下室 — 从村庄方向进入地图后，<strong>左手第一栋建筑</strong>。</p>
<div style="display: flex; justify-content: space-between;">
<ol class="npc-steps">
  <li>直行到<strong>铁栅栏第一道门</strong>。</li>
  <li>进入后向<strong>左</strong>。</li>
  <li>进楼时<strong>注意敌人</strong>。</li>
  <li>到建筑对角<strong>下楼梯</strong>。</li>
  <li>医生房间在地下室<strong>最里侧</strong>。</li>
</ol>
  <img src="/images/wiki/npc/doctor-01.webp" alt="医生位置示意" style="width: 100%; max-width: 300px;">
</div>

`,
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
    detailsHtml: `
<p class="npc-lead">游戏中的<strong>猫</strong>是<strong>避难所伙伴</strong>与<strong>系统向功能</strong>，并非商人或强盗。官方演示曾展示可<strong>领养</strong>、有配音细节的猫；社区游玩报告则补充了<strong>类任务的时间节奏</strong>、<strong>跨多图救援</strong>与<strong>木屋照料</strong>。</p>
<p class="npc-see-also">分步路线、准备与存档注意将放在<strong>攻略长文</strong>（本站 <a href="/guides">攻略</a> 栏目规划）中，本页保持短文参考。</p>

<h2>作用</h2>
<ul>
  <li>领养后，猫与<strong>木屋 / 避难所</strong>绑定，在多数报告版本中为<strong>持久伙伴</strong>。</li>
  <li>功能不同于<strong>通贩</strong>或<strong>医生</strong> — 无以物易物界面；照料主要体现在<strong>喂食</strong>与<strong>放置</strong>机制。</li>
</ul>

<h2>获取（概要）</h2>
<ul>
  <li>社区报告常将解锁与<strong>「失踪的猫」</strong>类节奏关联，需若干游戏日，通过正常游玩与<strong>睡眠</strong>推进。</li>
  <li>救援通常涉及<strong>多次换图</strong>（常见顺序 <strong>村庄 → 学校 → 前哨</strong> 等往返）、<strong>前哨</strong>地堡场景（井口 / 盖板 / 箱子）以及将大型<strong>猫箱</strong>带回木屋。</li>
  <li>具体触发<strong>哪一处地堡</strong>可能因玩家与补丁而异 — 请在客户端内核实。</li>
</ul>

<h2>避难所内行为</h2>
<ul>
  <li>玩家将<strong>猫箱</strong>放在<strong>木屋内</strong>；等待片刻后箱子会<strong>打开</strong>。</li>
  <li><strong>喂食</strong>在社区笔记中约为每 <strong>~36 游戏小时</strong>；可用<strong>猫粮</strong>、<strong>鱼</strong>、<strong>肉</strong>等；物资可放在<strong>木屋储物</strong>，不必全程背在身上。</li>
  <li>部分版本可能<strong>无抚摸</strong>互动。</li>
</ul>

<h2>另见</h2>
<ul>
  <li><a href="/wiki/npcs/generalist">通贩</a> · <a href="/wiki/npcs/doctor">医生</a> — 同一传送链上常用商人。</li>
  <li><a href="/wiki/fishing">钓鱼</a> — 鱼可作为饲料来源。</li>
  <li><a href="/map">地图</a> — 枢纽与出口。</li>
  <li><a href="/guides">攻略</a> — 完整猫咪流程（发布后）。</li>
</ul>

<p class="npc-muted">社区行为整理，非官方补丁原文。若与游戏不符，请以客户端与一手公告为准。</p>
`,
  },
}
