export default [
  {
    id: 'cabin',
    x: 0.373,
    y: 0.31,
    title: 'Cabin (shelter)',
    type: 'area05',
    content: 'Player shelter: sleep, stash, and shelter systems — hub for early tasks.',
    entries: [
      {
        kind: 'note',
        title: 'Shelter loop',
        content: 'Stash gear, recover, and branch into early tasks from a fixed safe point.',
      },
    ],
  },
  {
    id: 'village',
    x: 0.325,
    y: 0.52,
    title: 'Village',
    type: 'area05',
    content:'Starting hub in Area 05: Generalist trader, scavenging, food and meds. Hostile bandits can spawn across Area 05 maps — stay alert on approach routes.',
    image: '/images/map/village.webp',
    imageAlt: 'Area hub / trader context (Fandom)',
    entries: [
      {
        kind: 'npc',
        title: 'Generalist',
        content:
          'Friendly trader: mixed consumables, meds, crafting materials, and weapons; 10-minute restock; tiered delivery tasks.',
        image:'/images/wiki/npc/generalist.webp',
        imageAlt: 'Generalist trader (Fandom)',
        link: '/wiki/npcs/generalist',
      },
      {
        kind: 'faction',
        title: 'Bandits',
        content:
          'Main hostile faction on maps: varied loadouts, cover, ambush, and stalking behaviours — spawns depend on map and pools.',
        image:'/images/wiki/npc/bandits.webp',
        imageAlt: 'Bandits — designs vary by map (Fandom)',
        link: '/wiki/npcs/bandits',
      },
      {
        kind: 'loot',
        title: 'Scavenging & meds',
        content: 'Early food, medical supplies, and junk to sell — typical starter hub loot profile.',
      },
      {
        kind: 'task',
        title: 'Trader tasks',
        content: 'Generalist delivery lines (levels 1–4); see wiki for item lists.',
        link: '/wiki/npcs/generalist',
      },
      {
        kind: 'note',
        title: 'Village detail map',
        content:
          'Closer Leaflet layout of the Village play space with multiple editorial pins — same tooling as the world overview.',
        link: '/map/village',
      },
    ],
  },
  {
    id: 'shipyard',
    x: 0.175,
    y: 0.755,
    title: 'Shipyard',
    type: 'area05',
    content:
      'Larger Area 05 map: Doctor trader in Hamikot Logistics basement, heavier loot routes, and higher risk than the Village line (community maps).',
    image: '/images/map/shipyard.webp',
    imageAlt: 'Doctor trader context (Fandom)',
    entries: [
      {
        kind: 'npc',
        title: 'Doctor',
        content:
          'Medical trader: bandages, medkits, tourniquets; 10-minute restock; delivery tasks through level 4.',
        image: '/images/wiki/npc/doctor.webp',
        imageAlt: 'Doctor trader (Fandom)',
        link: '/wiki/npcs/doctor',
      },
      {
        kind: 'loot',
        title: 'Heavier routes',
        content: 'Better payoff loops than the open highway — plan weight, meds, and exit timing.',
      },
      {
        kind: 'note',
        title: 'Basement access',
        content: 'Hamikot Logistics: enter from village side, watch for enemies on stairs down to the Doctor room.',
      },
    ],
  },
  {
    id: 'highway',
    x: 0.325,
    y: 0.43,
    title: 'Highway',
    type: 'area05',
    content: 'Open connector from the Village line; exposed travel, lighter farming spots.',
    entries: [
      {
        kind: 'faction',
        title: 'Bandit patrols',
        content: 'Open ground favors sight lines — noise and movement draw attention.',
        link: '/wiki/npcs/bandits',
      },
      {
        kind: 'loot',
        title: 'Roadside scavenging',
        content: 'Lighter pickups along connectors; balance speed vs exposure.',
      },
    ],
  },
  {
    id: 'school',
    x: 0.36,
    y: 0.456,
    title: 'School',
    type: 'area05',
    content: 'School: early access to science and engineering tasks.',
    entries: [
      {
        kind: 'task',
        title: 'Science & engineering tasks',
        content: 'Task hooks tied to school setting — confirm objectives in your build.',
      },
      {
        kind: 'loot',
        title: 'Institutional loot',
        content: 'Books, tools, and crafting-adjacent spawns vary by patch.',
      },
    ],
  },
  {
    id: 'outpost',
    x: 0.643,
    y: 0.52,
    title: 'Outpost',
    type: 'border',
    content: 'Outpost: early access to Border Zone tasks and loot.',
    entries: [
      {
        kind: 'task',
        title: 'Border progression',
        content: 'Stepping stone before harder crossings — check Tasks page for rules.',
        link: '/tasks',
      },
      {
        kind: 'loot',
        title: 'Border-tier gear',
        content: 'Better than Area 05 starter tier; still prep for guards and hazards.',
      },
    ],
  },
  {
    id: 'border-crossing',
    x: 0.823,
    y: 0.367,
    title: 'Border crossing',
    type: 'border',
    content: 'Finland–Russia frontier checkpoint style beat; guards, obstacles, or water per route.',
    entries: [
      {
        kind: 'note',
        title: 'Guards & air support',
        content: 'Official pitch: corrupt guards, armed checkpoints, possible air call-ins.',
      },
      {
        kind: 'task',
        title: 'Crossing tasks',
        content: 'See Tasks for practical border / Vostok guidance.',
        link: '/tasks',
      },
    ],
  },
  {
    id: 'minefield',
    x: 0.79,
    y: 0.46,
    title: 'Minefield',
    type: 'border',
    content: 'Border Zone hazard: mine lines — plan pathing and stamina before crossing.',
    entries: [
      {
        kind: 'note',
        title: 'Hazard navigation',
        content: 'Slow, deliberate movement; avoid sprinting blind through marked ground.',
      },
    ],
  },
  {
    id: 'water-crossing',
    x: 0.71,
    y: 0.84,
    title: 'Water crossing',
    type: 'border',
    content: 'Some border maps use boats or fords — check route prep and loadout weight.',
    entries: [
      {
        kind: 'note',
        title: 'Boats / fords',
        content: 'Weight and stamina matter more when water is the choke point.',
      },
    ],
  },
  {
    id: 'vostok',
    x: 0.9,
    y: 0.5,
    title: 'Vostok',
    type: 'vostok',
    content: 'Russia-side endgame: high stakes; store copy ties permadeath-style risk to this arc.',
    entries: [
      {
        kind: 'faction',
        title: 'Military',
        content: 'Heavy weapons and armored pressure — pace meds, ammo, and extraction.',
      },
      {
        kind: 'loot',
        title: 'Endgame loot',
        content: 'Highest-value rewards; death rules are harsher than Area 05.',
      },
      {
        kind: 'task',
        title: 'Vostok rules',
        content: 'Read the Tasks page before committing a geared run.',
        link: '/tasks',
      },
    ],
  },
  {
    id: 'vostok-military',
    x: 0.9,
    y: 0.4,
    title: 'Military pressure (east)',
    type: 'vostok',
    content: 'Heavier opposition and loot as you push east — pace meds and ammo.',
    entries: [
      {
        kind: 'faction',
        title: 'Eastern pressure',
        content: 'Tighter AI and better gear on corpses — don’t outstay your supplies.',
      },
      {
        kind: 'loot',
        title: 'High-tier pickups',
        content: 'Loot quality rises with risk; permadeath stakes apply in Vostok maps.',
      },
    ],
  },
]
