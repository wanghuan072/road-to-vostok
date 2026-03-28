/**
 * Wiki NPC articles — /wiki/npcs/:addressBar
 * Community-sourced gameplay notes; verify in your build.
 *
 * SEO (`seo`): page `title` + global suffix ` | Road To Vostok Guide` (seo/config.js) should stay near ~60 chars total.
 * `description` ≈145–160 chars, unique per NPC, main terms early. `keywords`: 5–8 comma-separated phrases (no stuffing).
 * `ogType: 'article'` for Open Graph on wiki-style NPC pages.
 */

export default [
  {
    addressBar: 'bandits',
    mapLocationId: 'village',
    title: 'Bandits',
    role: 'Hostile faction',
    imageUrl: '/images/wiki/npc/bandits.webp',
    imageAlt: 'Range of different bandits — designs vary based on map',
    summary:
      'Main enemies that spawn throughout the maps: random loadouts, two-weapon setups, cover / ambush / stalking AI, and community-documented quirks.',
    seo: {
      title: 'Bandits: enemy AI, gear & bug notes',
      description:
        'Bandits in Road To Vostok: random loadouts, stalk & ambush AI, dual weapons, cover, vision limits, and common bugs. Unofficial enemy survival guide.',
      keywords:
        'Road To Vostok, Bandits, enemy AI, survival shooter, NPC combat, enemy spawns',
      ogType: 'article',
    },
    detailsHtml: `
<p class="npc-lead">Bandits are the <strong>main enemies</strong> in the game that spawn throughout the maps.</p>
<p class="npc-see-also">See also: enemy <strong>spawn locations and rates</strong> vary by map — confirm in-game.</p>

<h2>Equipment</h2>
<ul>
  <li>Bandits spawn with a range of <strong>weapons, equipment, and loot</strong>. What a bandit has equipped depends on the <strong>map</strong> and the <strong>random loot pool</strong> assigned when the NPC is spawned.</li>
  <li>Bandits can carry <strong>two weapons</strong>: one in hands and a second on a <strong>sling</strong> on the NPC’s back.</li>
  <li>In addition to firearms, bandits can wear <strong>head equipment</strong> (e.g. Polaris) or various <strong>backpacks</strong> that the player can take from corpses.</li>
</ul>

<h2>Behaviours</h2>
<dl class="npc-dl">
  <dt>Running away</dt>
  <dd>This behaviour triggers when the player has scared the bandit with gunshots or heavily wounded it.</dd>
  <dt>Taking cover</dt>
  <dd>This behaviour usually shows up as bandits firing at the player from behind protection — for example, from a window.</dd>
  <dt>Ambush mode</dt>
  <dd>The bandit tries to crouch in one spot (often a room in a building, frequently with the door closed) to surprise-attack the player.</dd>
  <dt>Stalking</dt>
  <dd>The bandit tries to sneak up by crouch-walking or slow-walking toward the player’s last known position, using vision or the sound of footsteps.</dd>
</dl>

<h2>Additional notes</h2>
<ul>
  <li>Bandits will sometimes <strong>fire one shot</strong>, then run to the nearest cover or building.</li>
  <li>Bandits have a <strong>limited field of vision</strong> — they may not see the player if the player walks up from behind.</li>
</ul>

<h2>Bugs (community-reported)</h2>
<p class="npc-muted">Community reports; may be fixed or changed in your build.</p>
<ul class="npc-bug-list">
  <li>Players inside <strong>bushes or small trees</strong> are nearly invisible to bandits, so they may not shoot — but bandits can keep walking toward the rough player location, which is still risky.</li>
  <li>If the player looks <strong>through a window from outside</strong> while a bandit is in <strong>ambush mode</strong> crouched inside, the bandit can appear completely unaware — almost <strong>frozen</strong>.</li>
  <li>Some bandits react <strong>very slowly</strong> to footstep audio and may look like they are walking away while the player stands only a few metres away.</li>
</ul>
`,
  },
  {
    addressBar: 'generalist',
    mapLocationId: 'village',
    title: 'Generalist',
    role: 'Friendly trader · Village area',
    imageUrl: '/images/wiki/npc/generalist.webp',
    imageAlt: 'Generalist trader',
    summary:
      'Friendly NPC who trades a wide mix of goods: sell valuables for trader stock, 10-minute restock loop, shelter shortcut for rerolls, and tiered delivery tasks.',
    seo: {
      title: 'Generalist: trader tasks & Village path',
      description:
        'Generalist trader: sell valuables for gear, 10-minute restocks, shelter reroll trick, Level 1–4 delivery tasks, Village walkthrough. Road To Vostok NPC guide.',
      keywords:
        'Road To Vostok, Generalist, trader NPC, Village, delivery tasks, restock',
      ogType: 'article',
    },
    detailsHtml: `
<p class="npc-lead">Generalist is a <strong>friendly NPC</strong> in the Road to Vostok world, offering to trade goods for a variety of items.</p>

<h2>Item trade</h2>
<p>You can sell any <strong>items of value</strong> from your inventory to the Generalist in exchange for items in the trader’s inventory. Stocked items often include:</p>
<ul>
  <li>Consumables (e.g. food and water)</li>
  <li>Quest items (e.g. Polaris)</li>
  <li>Crafting materials (e.g. wire spool or cooking plate)</li>
  <li>Medicaments (e.g. bandages, medkits)</li>
  <li>Weapons (e.g. Makarov)</li>
</ul>

<h2>Restocking</h2>
<ul>
  <li>This NPC <strong>restocks every 10 minutes</strong>.</li>
  <li>When the restock timer reaches <strong>0:00</strong>, the NPC restocks, <strong>overriding</strong> any item offered before, and the counter starts again toward the next restock.</li>
  <li>Items are <strong>random</strong> each time after a restock.</li>
  <li>It is faster to restock by running back to the <strong>Shelter</strong> and exiting immediately — the Generalist can spawn with a <strong>new random inventory</strong> on load when leaving the Shelter.</li>
  <li>Increases in <strong>level</strong> affect <strong>fees only</strong> and do <strong>not</strong> change the stock table.</li>
</ul>

<h2>Task items</h2>
<p class="npc-muted">Task names and items from community sources. Weapons for deliveries often do not need to be at 100% condition.</p>

<h3>Level 1</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Task</th><th>Deliver</th><th>Receive</th></tr></thead>
<tbody>
<tr><td>Duty Calls</td><td>Toilet Paper</td><td>Jeans</td></tr>
<tr><td>Coffe Break</td><td>Coffe, Crackers</td><td>Duct Tape</td></tr>
<tr><td>Canned Goods</td><td>Tuna, Meat, Peaches</td><td>Bandage</td></tr>
<tr><td>Weapon Delivery 1</td><td>Makarov, AKM (not necessarily 100%)</td><td>Duffel (Retro)</td></tr>
</tbody>
</table>
</div>

<h3>Level 2</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Task</th><th>Deliver</th><th>Receive</th></tr></thead>
<tbody>
<tr><td>Bookworm</td><td>B. Fishing, B. Coocking, B. Religion</td><td>PBS</td></tr>
<tr><td>Leather Goods</td><td>Leather Gloves, Fabric Leather</td><td>Peanuts (Salted)</td></tr>
<tr><td>Finnish Dinner</td><td>Pea Soup (Cocked), Mustard</td><td>Jacked M62, Armor III+</td></tr>
</tbody>
</table>
</div>

<h3>Level 3</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Task</th><th>Deliver</th><th>Receive</th></tr></thead>
<tbody>
<tr><td>High Voltage</td><td>3× Battery</td><td>Mosin</td></tr>
<tr><td>Fishing Suplies</td><td>Tackle Box</td><td>Splint, Windbreacker (Green)</td></tr>
<tr><td>Weapon Delivery 1</td><td>RK-95, AK-12</td><td>PRO, Medkit</td></tr>
<tr><td>Swedish Delights</td><td>Snus Original, Snus Mint, Snus Licorice, Snus Strong</td><td>Field Ration</td></tr>
</tbody>
</table>
</div>

<h3>Level 4</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Task</th><th>Deliver</th><th>Receive</th></tr></thead>
<tbody>
<tr><td>Bad Santa</td><td>Santa Jacked, KP-31</td><td>Monster, ACOG, MK-18</td></tr>
</tbody>
</table>
</div>
<p><strong>Obs:</strong> Weapons don’t need to be at 100% condition.</p>

<h2>Location</h2>
<p>Generalist is located just outside the <strong>Village</strong> spawn area. Directions:</p>
<ol class="npc-steps">
  <li>After exiting the Village shelter, go <strong>down the ramp</strong>.</li>
  <li>Turn <strong>right</strong> into the passage between garages of the building.</li>
  <li>Turn <strong>right</strong> again and walk straight along the garages.</li>
  <li>Finally turn <strong>last right</strong> into half-open doors near a skip filled with rocks.</li>
</ol>
`,
  },
  {
    addressBar: 'doctor',
    mapLocationId: 'shipyard',
    title: 'Doctor',
    role: 'Friendly trader · Shipyard (medical)',
    imageUrl: '/images/wiki/npc/doctor.webp',
    imageAlt: 'Doctor trader',
    summary:
      'Medical-only trader: bandages, medkits, tourniquets, 10-minute restock, fee scaling by level, and combat-medic task lines through Level 4.',
    seo: {
      title: 'Doctor: medical trader & Shipyard tasks',
      description:
        'Doctor medical trader (Shipyard): med stock, restock rules, Level 1–4 medic tasks, route to Hamikot Logistics basement. Road To Vostok NPC guide.',
      keywords:
        'Road To Vostok, Doctor NPC, medical trader, Shipyard, Hamikot Logistics, tasks',
      ogType: 'article',
    },
    detailsHtml: `
<p class="npc-lead">Doctor is a <strong>friendly NPC</strong> that trades <strong>medical items</strong>.</p>

<h2>Item trade</h2>
<p>Doctor only trades <strong>medical items</strong> — bandage, Medkit, Tourniquet, etc. (some community write-ups say “medial”; here that is treated as <em>medical</em>.)</p>

<h2>Restocking</h2>
<ul>
  <li>This NPC <strong>restocks every 10 minutes</strong>.</li>
  <li>At <strong>0:00</strong>, the NPC restocks and <strong>overrides</strong> the previous offer; the timer starts again.</li>
  <li>Items are <strong>random</strong> after each restock.</li>
  <li>Higher <strong>level</strong> changes <strong>fees only</strong>, not the stock tables.</li>
</ul>

<h2>Task items</h2>

<h3>Level 1</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Task</th><th>Deliver</th><th>Receive</th></tr></thead>
<tbody>
<tr><td>Flu Season</td><td>Cold Medicine</td><td>Tomatoes</td></tr>
<tr><td>Bad Plumbing</td><td>Duct Tape</td><td>Bandage</td></tr>
<tr><td>Burning Sensation</td><td>Lotion</td><td>Matches, Gas Canister</td></tr>
<tr><td>Drug Delivery 1</td><td>3× Painkillers</td><td>Mess Kit</td></tr>
</tbody>
</table>
</div>

<h3>Level 2</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Task</th><th>Deliver</th><th>Receive</th></tr></thead>
<tbody>
<tr><td>Night Surgery</td><td>Polaris</td><td>Hybrid</td></tr>
<tr><td>Deep Sleep</td><td>Melatonin</td><td>EXPS</td></tr>
<tr><td>Drug Delivery 2</td><td>3× Antibiotics</td><td>Inverter</td></tr>
</tbody>
</table>
</div>

<h3>Level 3</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Task</th><th>Deliver</th><th>Receive</th></tr></thead>
<tbody>
<tr><td>Steady Hands</td><td>Cigar Box</td><td>Jääkäri Backpack (M05)</td></tr>
<tr><td>Field Trauma</td><td>3× IFAK</td><td>Plate Carrier, Armor III</td></tr>
</tbody>
</table>
</div>

<h3>Level 4</h3>
<div class="npc-table-wrap">
<table class="npc-wiki-table">
<thead><tr><th>Task</th><th>Deliver</th><th>Receive</th></tr></thead>
<tbody>
<tr><td>Patient Report</td><td>Doctor Notes</td><td>VSS, 3× Medkit</td></tr>
</tbody>
</table>
</div>

<h2>Location</h2>
<p>You can find Doctor on the <strong>Shipyard</strong> map, in the basement of <strong>Hamikot Logistics</strong> — the <strong>first building on the left</strong> as soon as you enter the map, coming from the village.</p>
<ol class="npc-steps">
  <li>Go forward until the <strong>first gate in the grill</strong>.</li>
  <li>Enter and go <strong>left</strong>.</li>
  <li><strong>Watch for enemies</strong> when entering the building.</li>
  <li>Go <strong>down the stairs</strong> at the opposite corner of the building.</li>
  <li>The Doctor’s room is the <strong>last one in the basement</strong>.</li>
</ol>
`,
  },
]
