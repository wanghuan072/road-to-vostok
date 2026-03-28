/**
 * Mod spotlight — https://modworkshop.net/mod/50811
 *
 * Main column: `detailsHtml` only.
 * Right rail (data): image, external URL, stats, dates, tags, `comments[]`, plus `seo` for summary/TDK.
 */
export default [
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
      title: "Oldman's Immersive Overhaul — Road to Vostok Mod (ModWorkshop)",
      description:
        'Large gameplay pack on ModWorkshop: weapon condition & jams, staged reloads, AI overhaul, immersive NVG, QoL—toggled in MCM. Needs Metro Mod Loader; we do not host files.',
      keywords:
        'Road to Vostok mod, ImmersiveXP, Oldman, ModWorkshop, Metro Mod Loader, MCM',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  This fan site does <strong>not</strong> host downloads. Get <strong>ImmersiveXP.vmz</strong> from
  <a href="https://modworkshop.net/mod/50811" target="_blank" rel="noopener noreferrer">ModWorkshop</a>
  and confirm it matches your demo or Early Access build.
</p>

<p><strong>Before you install</strong></p>
<ul>
  <li>Mixing with other mods can break runs; read the incompatible-mod section on ModWorkshop before stacking packs.</li>
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
  <li>Install <strong>Metro Mod Loader</strong> (the listing previously mentioned another loader—follow current Workshop text).</li>
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
<p>Fixed Always Permadeath challenge; higher player visibility near fires; reverted Apartments waypoint changes that caused missing doors—see ModWorkshop for the full log.</p>

<h2>Known incompatible mods (excerpt)</h2>
<p>The live list may differ; trust ModWorkshop.</p>
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
