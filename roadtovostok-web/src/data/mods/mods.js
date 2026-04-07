/**
 * Mod spotlights — ModWorkshop listings (e.g. 50811, 49777).
 *
 * Main column: `detailsHtml` only.
 * Right rail (data): image, external URL (ModWorkshop CTA), stats, dates, tags, `comments[]`, plus `seo` for TDK.
 * Main column must not include external links—send downloads to the sidebar button.
 */
export default [
  {
    id: 49777,
    addressBar: 'item-spawner',
    title: 'Item Spawner',
    author: 'Ryhon',
    version: '1.2.0',
    publishDate: '2026-03-04',
    externalUrl: 'https://modworkshop.net/mod/49777',
    loaderName: 'Metro Mod Loader',
    stats: {
      downloads: '2,492',
      views: '4,837',
    },
    imageUrl: '/images/mods/item-spawner-thumbnail.webp',
    imageAlt: 'Item Spawner mod thumbnail for Road to Vostok',
    tags: ['Quality of Life', 'Self-updating', 'Next Fest Demo (Godot 4.6)'],
    comments: [
      {
        author: 'Inventory flow',
        body: 'Insert toggles the panel without leaving the loot loop—handy when you are testing gear on a fresh character.',
      },
      {
        author: 'Persistence',
        body: 'The spawn UI staying attached to the next inventory open matches how I raid: one less hotkey to remember mid-run.',
      },
      {
        author: 'Load order',
        body: 'If you stack big gameplay packs, skim the incompatible notes on Workshop before enabling this alongside everything else.',
      },
    ],
    seo: {
      title:
        'Road to Vostok Item Spawner Mod (Ryhon): QoL spawn menu & install | Road To Vostok Guide',
      description:
        'Road to Vostok mod: Item Spawner by Ryhon—Insert toggles an inventory item spawn menu (ItemSpawner.vmz). Metro Mod Loader, install steps, and compatibility with overhaul packs.',
      keywords:
        'Road to Vostok mod, Road to Vostok Item Spawner, Item Spawner Ryhon, Road to Vostok QoL mod, Metro Mod Loader, inventory spawn mod, ItemSpawner vmz, Road to Vostok Next Fest mod',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  This site does <strong>not</strong> host mod files. Use <strong>Open on ModWorkshop</strong> in the sidebar to download <strong>ItemSpawner.vmz</strong> and confirm it matches your Next Fest demo or Early Access build.
</p>

<p><strong>What it does</strong></p>
<ul>
  <li>While your <strong>inventory</strong> is open, press <strong>Insert</strong> to open the spawn menu.</li>
  <li>The spawn window <strong>stays available</strong> the next time you open inventory until you press <strong>Insert</strong> again to hide it.</li>
  <li>Small package size on the author listing; labelled self-updating—re-test after major game patches.</li>
</ul>

<p><img src="/images/mods/item-spawner-full.webp" alt="Item Spawner mod screenshot for Road to Vostok" width="640" loading="lazy" decoding="async" style="max-width: 100%; height: auto;" /></p>

<h2>Installation (typical)</h2>
<ol>
  <li>Install <strong>Metro Mod Loader</strong> per the game’s current modding instructions.</li>
  <li>Place <code>ItemSpawner.vmz</code> in the game’s <code>mods</code> folder (check the author’s install notes on the listing if steps change).</li>
  <li>Some setups use Mod Organizer 2; see the listing instructions if you use that workflow.</li>
</ol>

<h2>Compatibility note</h2>
<p>
  Large compilations may list this mod as incompatible in some load orders (for example
  <a href="/mods/oldmans-immersive-overhaul">Oldman’s Immersive Overhaul</a> notes crash reports for certain stacks—some players stay on v1.1.0).
  Read the author’s compatibility section before stacking packs.
</p>
`,
  },
  {
    id: 50811,
    addressBar: 'oldmans-immersive-overhaul',
    title: "Oldman's Immersive Overhaul (Mods Compilation)",
    author: 'Oldman',
    version: '2.2.2',
    publishDate: '2025-01-01',
    externalUrl: 'https://modworkshop.net/mod/50811',
    loaderName: 'Metro Mod Loader',
    stats: {
      downloads: '1000+',
      views: '5000+',
    },
    imageUrl: '/images/logo.webp',
    imageAlt: "Oldman's Immersive Overhaul thumbnail",
    tags: ['Gameplay', 'Compilation', 'Next Fest Demo', 'Godot 4.6'],
    comments: [
      {
        author: 'Workshop regular',
        body: 'MCM makes it easy to tune AI counts and NVG—skim every section before a long run.',
      },
      {
        author: 'Load-order note',
        body: 'Removed the author’s separate packs first; duplicate loads cause conflicts fast.',
      },
      {
        author: 'Gameplay',
        body: 'Staged reloads clicked after one session—interrupting a swap under pressure feels fairer than losing a full mag.',
      },
      {
        author: 'Compatibility',
        body: 'Check the incompatible list before stacking QoL; the alarm-clock time mod breaks bundled weapon systems.',
      },
    ],
    seo: {
      title:
        "Road to Vostok Immersive Overhaul Mod (Oldman): AI, NVG, MCM & weapons | Road To Vostok Guide",
      description:
        "Road to Vostok mod: Oldman's Immersive Overhaul (ImmersiveXP)—weapon jams, staged reloads, AI hearing/vision, immersive NVG, MCM toggles. Metro Mod Loader, vmz install, load order.",
      keywords:
        'Road to Vostok mod, Road to Vostok Immersive Overhaul, ImmersiveXP, Oldman Road to Vostok, Metro Mod Loader, MCM mod, Road to Vostok gameplay overhaul, weapon jam mod, Road to Vostok AI mod',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  This site does <strong>not</strong> host mod files. Use <strong>Open on ModWorkshop</strong> in the sidebar to download <strong>ImmersiveXP.vmz</strong> and verify it matches your demo or Early Access build.
</p>

<p><strong>Before you install</strong></p>
<ul>
  <li>Mixing with other mods can break runs; read the author’s incompatible-mod list on the listing before stacking packs.</li>
  <li>Most of the author’s standalone packs are merged here—remove duplicates from your load order.</li>
</ul>

<div class="mod-video-embed">
  <iframe
    src="https://www.youtube.com/embed/0XhwWrmSkVk"
    title="Gameplay video 1"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    referrerpolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>

<h2>Weapons &amp; handling</h2>
<ul>
  <li>Weapon condition and jamming: affects accuracy, recoil, jam chance; repair with a toolbox.</li>
  <li>Staged reloads: interrupt by switching weapons, resume from the last stage (mag may drop if no inventory space).</li>
  <li>Auto-equip weapons, knives, and grenades when a slot is free; auto-draw if hands are empty.</li>
  <li>Immersive interactions: lower weapon and a short delay on doors, containers, and pickups.</li>
</ul>

<h2>AI overhaul (summary)</h2>
<ul>
  <li>Vision: range uses light, weather, movement, indoors, flashlight, suppressor; cone narrows at max range then widens.</li>
  <li>Hearing: surfaces, indoors, interactions, weather (e.g. storms); AIs react to other AI shots/explosions; unsuppressed player shots carry farther.</li>
  <li>Reloading (MCM): realistic mag sizes, dry reloads (audio), occasional tactical reloads, ammo-aware decisions.</li>
  <li>Suppression (MCM): more full-auto; brief fire on last known position when sight is lost.</li>
  <li>Counts &amp; behaviour (MCM): higher active/map caps, reactions to fire, doors, accuracy/movement tweaks.</li>
  <li>Supersonic crack when rounds pass the player, delay scales with distance.</li>
</ul>

<h2>NVG, maps &amp; QoL</h2>
<ul>
  <li>Immersive NVG: large scopes blocked with NVG (red dots OK), weapon blur, less noise (parts optional in MCM).</li>
  <li>Apartments: more waypoints so AI uses interior rooms.</li>
  <li>Flashlight, weather, ADS zoom, and many UI/interaction fixes (inventory mag attach doesn’t chamber free round, chamber-round reload anim, sprint/jump exits crouch, sprint lowers weapon, mercy kill, stuck ammo-check fix, mag bullet visibility after weapon swap, etc.).</li>
</ul>

<h2>Installation</h2>
<ol>
  <li>Install <strong>Metro Mod Loader</strong> (follow the loader name and steps on the author’s current listing).</li>
  <li>Place <code>ImmersiveXP.vmz</code> in the game install <code>mods</code> folder.</li>
  <li>Use <strong>Mod Configuration Menu (MCM)</strong> to enable or disable feature groups.</li>
</ol>
<p>You do not need every system enabled at once.</p>

<div class="mod-video-embed">
  <iframe
    src="https://www.youtube.com/embed/OiEtQQ0xY5s"
    title="Gameplay video 2"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    referrerpolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>

<h2>Changelog highlight (2.2.2)</h2>
<p>Fixed Always Permadeath challenge; higher player visibility near fires; reverted Apartments waypoint changes that caused missing doors—the author’s listing carries the full changelog.</p>

<h2>Known incompatible mods (excerpt)</h2>
<p>The live list on the author’s page may differ; treat that source as authoritative.</p>
<ul>
  <li><strong>Armour &amp; Helmet Repair</strong> — crash on reload; 2.1.5+ rename workaround for load order.</li>
  <li><strong>(Bigger) Font Size</strong> — breaks staged reloads; load after ImmersiveXP.</li>
  <li><strong>Fly mode</strong> — Controller.gd clash; fly bundled here.</li>
  <li><strong>Inventory Improvements</strong> — breaks toolbox repair; try loading before ImmersiveXP.</li>
  <li><strong>Item Spawner</strong> — crash reports; some use v1.1.0.</li>
  <li><strong>Quest Marker</strong> — low FPS together.</li>
  <li><strong>Shelter Anywhere</strong> — users report conflicts.</li>
  <li><strong>Show Time of Day When Looking At Placed Alarm Clock</strong> — breaks jams, staged reloads, weapon logic.</li>
  <li><strong>Smooth Hold Reload</strong> — conflicts; included here with permission—use MCM.</li>
</ul>
`,
  },
]
