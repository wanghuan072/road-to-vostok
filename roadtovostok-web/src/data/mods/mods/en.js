/**
 * Mod spotlights — ModWorkshop and Nexus Mods listings.
 *
 * Main column: `detailsHtml` only.
 * Right rail (data): image, external URL (download CTA), stats, dates, tags, `comments[]`, plus `seo` for TDK.
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
    imageUrl: '/images/mod/mod01.webp',
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
  {
    id: 17,
    addressBar: 'armed-enhancement-weapon-attachment-spawner',
    title: 'Armed Enhancement - Weapon Attachment Spawner',
    author: 'Peter4Master',
    version: '1.2.0',
    publishDate: '2026-04-24',
    externalUrl: 'https://www.nexusmods.com/roadtovostok/mods/17',
    loaderName: 'Metro Mod Loader',
    imageUrl: '/images/mod/mod03.webp',
    imageAlt: 'Armed Enhancement — Weapon Attachment Spawner mod for Road to Vostok (Nexus Mods)',
    tags: ['Gameplay', 'Weapons', 'Loot variety', 'MCM'],
    comments: [
      {
        author: 'Loot readability',
        body: 'Seeing optics and cans on world guns makes stash pulls feel less samey—still RNG, but the highs are higher.',
      },
      {
        author: 'MCM',
        body: 'Chamber behaviour options are worth a skim after 1.1.0; I left defaults on until I trusted the flow.',
      },
      {
        author: 'Stacking mods',
        body: 'If you run big weapon overhauls too, compare load order notes on Nexus before blaming this pack.',
      },
    ],
    seo: {
      title:
        'Road to Vostok Armed Enhancement Mod: weapon attachments on spawns (Peter4Master) | Road To Vostok Guide',
      description:
        'Road to Vostok Nexus mod Armed Enhancement — Weapon Attachment Spawner by Peter4Master: world, container, and enemy weapons can roll scopes, suppressors, and lasers; optional chamber behaviour via MCM. Metro Mod Loader install; download on Nexus Mods.',
      keywords:
        'Road to Vostok mod, Armed Enhancement, Weapon Attachment Spawner, Peter4Master, Road to Vostok Nexus Mods, weapon attachments mod, suppressor spawn mod, Metro Mod Loader, MCM Road to Vostok, loot variety mod',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  This site does <strong>not</strong> host mod files. Use <strong>Open on Nexus Mods</strong> in the sidebar to reach the official listing, then use the <strong>Files</strong> tab for the current archive, checksums, and any hotfix notes.
</p>

<p><strong>What it does (player-facing)</strong></p>
<ul>
  <li>Weapons you find in the world, in containers, and on enemies get a chance to spawn with <strong>scopes</strong>, <strong>suppressors</strong>, and <strong>laser</strong> attachments—so loot feels less “bare tube + empty mag” every time.</li>
  <li>The author pitches it as more <strong>believable variety</strong> on spawned guns rather than a guaranteed kit every pull.</li>
  <li>Recent updates (see the listing changelog) tightened duplicate-attachment edge cases and improved <strong>tube-fed / chamber</strong> behaviour; <strong>Mod Configuration Menu (MCM)</strong> exposes chambering options such as always pre-chambered, auto on equip, or manual (default mix).</li>
</ul>

<h2>Who it is for</h2>
<p>
  Pick this if you want <strong>attachment variety on random weapon rolls</strong> without hand-placing every rifle. Skip or defer it if you are debugging a minimal mod list—add it once Metro Mod Loader and your baseline QoL mods are stable.
</p>

<h2>Installation (typical)</h2>
<ol>
  <li>Install <strong>Metro Mod Loader</strong> using the steps that match your Road to Vostok build (demo vs Early Access).</li>
  <li>On Nexus, open <strong>Files</strong> and follow the author’s current layout—usually placing the packaged mod into the game’s <code>mods</code> folder next to your other <code>.vmz</code> packs.</li>
  <li>If the listing lists <strong>MCM</strong>, install it so you can tune chambering and any toggles without editing files by hand.</li>
  <li>After a major game patch, re-check the Nexus <strong>Posts</strong> tab for hotfixes before starting a long run.</li>
</ol>

<h2>Compatibility &amp; load order</h2>
<p>
  Treat the Nexus description and posts as the source of truth for clashes with other weapon packs. If you stack large gameplay mods (for example our spotlight on
  <a href="/mods/oldmans-immersive-overhaul">Oldman’s Immersive Overhaul</a>),
  confirm both authors’ notes before blaming odd ballistics on this spawner alone.
</p>

<h2>Safety note</h2>
<p>
  Download only from the sidebar Nexus link, verify the file version matches what you read in the article header, and keep backups of saves before you change load order mid-campaign.
</p>
`,
  },
  {
    id: 12,
    addressBar: 'lootmodifier',
    title: 'LootModifier',
    author: 'HumbleCorpse aka False_Hope',
    version: '1.1.5',
    publishDate: '2026-04-20',
    externalUrl: 'https://www.nexusmods.com/roadtovostok/mods/12',
    loaderName: 'Metro Mod Loader + MCM',
    imageUrl: '/images/mod/mod04.webp',
    imageAlt: 'LootModifier mod for Road to Vostok — loot tuning and container rerolls (Nexus Mods)',
    tags: ['Quality of Life', 'Loot', 'MCM', 'Work in progress'],
    comments: [
      {
        author: 'Difficulty dial',
        body: 'Tuning floor vs stash odds finally stopped my “empty three buildings” streak without feeling like cheat mode—MCM numbers need a light touch.',
      },
      {
        author: 'Reroll logic',
        body: 'The min/max reroll is the star for me: it nudges sad containers without nuking rolls that already hit big.',
      },
      {
        author: 'Heads-up',
        body: 'Author warns floor-loot guarantee can rarely clip through the world—I only flipped it on when I was testing routes, not on ironman saves.',
      },
    ],
    seo: {
      title:
        'Road to Vostok LootModifier Mod: loot odds, container rerolls & condition ranges | Road To Vostok Guide',
      description:
        'Road to Vostok Nexus mod LootModifier by HumbleCorpse: tweak floor and container loot chances, reroll sparse containers between min/max, adjust item condition ranges; optional guaranteed floor loot (known edge case). Requires MCM and Metro Mod Loader.',
      keywords:
        'Road to Vostok mod, LootModifier, HumbleCorpse, Road to Vostok Nexus Mods, loot chance mod, container reroll mod, Metro Mod Loader, MCM Road to Vostok, item condition mod, QoL loot',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  This site does <strong>not</strong> host mod files. Use <strong>Open on Nexus Mods</strong> in the sidebar for the official listing, then read <strong>Requirements</strong> and <strong>Files</strong> there before you install anything.
</p>

<p><strong>What it does (player-facing)</strong></p>
<ul>
  <li><strong>Loot tuning</strong>: adjust how often floor loot and container loot appear so runs feel less starved—or more generous—without re-rolling the entire game seed by hand.</li>
  <li><strong>Container reroll</strong>: if a container spawns fewer items than your configured minimum, the mod can reroll up to an amount between your <strong>minimum and maximum</strong>; rolls that already exceed your maximum are left alone.</li>
  <li><strong>Condition ranges</strong>: change the condition bands for items that support wear—think weapons, NVGs, lights, and similar gear—so “found in the wild” gear matches the fantasy you want.</li>
  <li><strong>Optional floor guarantee</strong>: you can force floor loot to spawn, but the author notes a rare case where items can fall through the ground due to a base-game quirk—use that mode knowingly.</li>
</ul>

<p>
  The Nexus page describes the project as a <strong>work-in-progress</strong> loot tool aimed at giving you more freedom; planned directions mentioned there include weapons spawning with attachments and magazines, plus AI loot tuning—treat the listing as the live roadmap.
</p>

<h2>Requirements</h2>
<p>
  The author lists <strong>Mod Configuration Menu (MCM)</strong> and <strong>Metro Mod Loader</strong> as required. Install both using the versions that match your build, then return to Nexus for the LootModifier archive and any compatibility notes in <strong>Posts</strong>.
</p>

<h2>Installation (from the author summary)</h2>
<ol>
  <li>Place the downloaded archive into your game’s <code>mods</code> folder.</li>
  <li>If you use the Vostok mods injector or a newer Metro loader workflow that expects packaged mods, <strong>rename the <code>.zip</code> extension to <code>.vmz</code></strong> as stated on the Nexus page.</li>
  <li>Open <strong>MCM</strong> in-game to adjust chances, reroll thresholds, condition curves, and experimental toggles after you confirm the pack loads cleanly.</li>
</ol>

<h2>Compatibility mindset</h2>
<p>
  Loot mods interact with economy and stash pacing. If you also run large gameplay packs (for example our spotlight on
  <a href="/mods/oldmans-immersive-overhaul">Oldman’s Immersive Overhaul</a>),
  skim both authors’ notes before blaming odd spawns on a single entry.
</p>

<h2>Safety note</h2>
<p>
  Download only from the sidebar Nexus link, match the archive to the version shown in the header, and back up saves before changing sliders mid-run—loot tables can invalidate expectations quickly when several mods touch the same systems.
</p>
`,
  },
  {
    id: 15,
    addressBar: 'suspend-save-resume-exploration',
    title: 'Suspend Save System (or Resume Exploration)',
    author: 'Levrault',
    version: '1',
    publishDate: '2026-04-21',
    externalUrl: 'https://www.nexusmods.com/roadtovostok/mods/15',
    loaderName: 'Metro Mod Loader',
    imageUrl: '/images/mod/mod05.webp',
    imageAlt:
      'Suspend Save System (Resume Exploration) mod for Road to Vostok — suspend run and return to the last map (Nexus Mods)',
    tags: ['Gameplay', 'User Interface', 'Quality of Life', 'Saves'],
    comments: [
      {
        author: 'Session saver',
        body: 'Finally I can bail after a long raid without sprinting back to the shelter first—knowing it is not a quick-save keeps the tension honest.',
      },
      {
        author: 'Map reset',
        body: 'I read the fine print: world loot reshuffles when I resume, so I do not treat this like a tactical pause for farming the same room twice.',
      },
      {
        author: 'Discipline',
        body: 'Crash or alt-F4 means no suspend file—only the in-game quit path counts, which trained me to exit through the menu every time.',
      },
    ],
    seo: {
      title:
        'Road to Vostok Suspend Save Mod: quit outside shelter & Resume Exploration (Levrault) | Road To Vostok Guide',
      description:
        'Road to Vostok Nexus mod Suspend Save System (Resume Exploration) by Levrault: save inventory and last map entry on in-game exit, then use a main-menu Resume Exploration button; one-time suspend slot, not quick-save. Death still strips you; map state does not persist.',
      keywords:
        'Road to Vostok mod, Suspend Save System, Resume Exploration, Levrault, Road to Vostok Nexus Mods, save outside shelter, suspend save mod, Metro Mod Loader, Road to Vostok QoL save',
    },
    detailsHtml: `
<p class="mod-prose-lead">
  This site does <strong>not</strong> host mod files. Use <strong>Open on Nexus Mods</strong> in the sidebar for the official listing, then use the <strong>Files</strong> tab for the current package and any install notes the author updates after patches.
</p>

<p><strong>What it does (player-facing)</strong></p>
<ul>
  <li>Lets you <strong>quit through the in-game menu</strong> while you are still out in the world—without forcing a shelter trip first—while keeping the <strong>loot in your inventory</strong> and a reference to the <strong>last map entry point</strong> you used.</li>
  <li>Adds a <strong>Resume Exploration</strong> control on the main menu that loads your character and places you back at that last entry point on the last map you played.</li>
  <li>The suspend slot is <strong>consumed when you load it</strong>: the author frames this as <strong>not a quick-save</strong>, so the broader hardcore loop stays intact.</li>
  <li><strong>Death still costs you</strong>—if you die on foot, you lose your carried loot the same way vanilla expects.</li>
</ul>

<h2>What it deliberately does not save</h2>
<p>
  The listing explains that only your <strong>inventory</strong> and <strong>last entry point</strong> ride along in the suspend file. <strong>Map state</strong>—enemy placements, trader stock, container contents out in the world, and similar simulation details—is not frozen; when you resume, <strong>world loot can roll again</strong> because the base game’s save model centers on the player and shelter. Treat that as a feature boundary, not a bug, before you plan routes around “paused” stashes.
</p>

<h2>When the suspend file is not written</h2>
<ul>
  <li>No suspend if the <strong>game crashes</strong> or you <strong>quit outside the in-game menu</strong>—only the normal quit flow the mod hooks is covered.</li>
  <li>Always keep <strong>manual backups</strong> before testing new mod stacks; suspend saves are a safety net, not a substitute for copying your profile folder.</li>
</ul>

<h2>Installation</h2>
<ol>
  <li>Follow the <strong>Files</strong> tab on Nexus for the exact archive name and layout.</li>
  <li>Most Road to Vostok setups expect a <strong>Metro Mod Loader</strong>–style <code>mods</code> folder; if your loader expects a <code>.vmz</code> rename step, mirror what the author prints on the listing.</li>
  <li>After installing, test one suspend cycle on a throwaway save before committing a long ironman character.</li>
</ol>

<h2>Compatibility mindset</h2>
<p>
  Anything that rewrites menus, death handling, or shelter saves can interact with suspend logic. If you stack heavy gameplay packs (for example our spotlight on
  <a href="/mods/oldmans-immersive-overhaul">Oldman’s Immersive Overhaul</a>),
  read both authors’ notes and Nexus <strong>Posts</strong> before you assume a clean resume every time.
</p>

<h2>Safety note</h2>
<p>
  Download only from the sidebar Nexus link, verify the archive version against the header on Nexus, and keep spare saves—suspend tooling touches the same anxiety points as permadeath design, so prove it stable on your exact build first.
</p>
`,
  },
]
