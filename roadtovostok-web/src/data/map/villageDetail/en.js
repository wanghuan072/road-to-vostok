/**
 * Village map pins on /images/map/map-02.png.
 * Normalized x,y: top-left origin; x→right, y→down (CRS.Simple imageOverlay).
 *
 * Fields:
 * - title: short label for marker tooltip and popup (required for display)
 * - category: 'locations' | 'enemies' | 'quests' | 'loot' | 'npc'
 * - kind: subtype key (see taxonomy.js); must match category
 * - content: optional popup body text
 *
 * Counts in the filter panel are computed from this list — add or remove rows to match your map.
 */
export default [
  { id: 'shelter-1', title: 'Shelter', category: 'locations', kind: 'hideout', x: 0.3, y: 0.91, content: 'Main shelter / hideout.' },
  { id: 'landmark-1', title: 'Campsite', category: 'locations', kind: 'landmark', x: 0.18, y: 0.33, content: 'Campsite.' },
  { id: 'landmark-2', title: 'Bridge', category: 'locations', kind: 'landmark', x: 0.5040, y: 0.6028, content: 'Bridge.' },
  { id: 'landmark-3', title: 'Seaside Camp', category: 'locations', kind: 'landmark', x: 0.5541, y: 0.8687, content: 'Seaside Camp.' },
  { id: 'fish-1', title: 'Fishing spot', category: 'locations', kind: 'fishing_spot', x: 0.7054, y: 0.9482, content: 'A suitable area for fishing activities.' },
  { id: 'locked-1', title: 'Locked structure', category: 'locations', kind: 'locked_structure', x: 0.6977, y: 0.5760, content: 'Find specific keys to access these locked locations.' },
  { id: 'extract-1', title: 'To Highway', category: 'locations', kind: 'extraction', x: 0.5097, y: 0.0215, content: 'To Highway' },
  { id: 'extract-2', title: 'To School', category: 'locations', kind: 'extraction', x: 0.9809, y: 0.1596, content: 'Map exit / transition B.' },
  { id: 'crate-1', title: 'Wooden Crate', category: 'loot', kind: 'crate', x: 0.2018, y: 0.6576, content: 'Can be opened for random loot' },
  { id: 'crate-2', title: 'Wooden Crates', category: 'loot', kind: 'crate', x: 0.2536, y: 0.5270, content: 'Can be opened for random loot.' },
  { id: 'crate-3', title: 'Wooden Crate', category: 'loot', kind: 'crate', x: 0.3457, y: 0.6009, content: 'Can be opened for random loot' },
  { id: 'crate-4', title: 'Wooden Crate', category: 'loot', kind: 'crate', x: 0.3592, y: 0.5959, content: 'Can be opened for random loot.' },
  { id: 'fridge-1', title: 'Stove', category: 'loot', kind: 'fridge', x: 0.3302, y: 0.5916, content: 'Can be opened for random loot focusing on food.' },
  { id: 'fridge-2', title: 'Fridge', category: 'loot', kind: 'fridge', x: 0.3305, y: 0.6003, content: 'Can be opened for random loot focusing on food.' },
  { id: 'fridge-3', title: 'Freezer', category: 'loot', kind: 'fridge', x: 0.3356, y: 0.6080, content: 'Can be opened for random loot focusing on food.' },
  { id: 'fridge-4', title: 'Fridge', category: 'loot', kind: 'fridge', x: 0.3750, y: 0.6059, content: 'Can be opened for random loot focusing on food.' },
  { id: 'fridge-5', title: 'Stove', category: 'loot', kind: 'fridge', x: 0.3153, y: 0.4414, content: 'Can be opened for random loot focusing on food.' },
  { id: 'fridge-6', title: 'Fridge', category: 'loot', kind: 'fridge', x: 0.3174, y: 0.4414, content: 'Can be opened for random loot focusing on food.' },
  { id: 'fridge-7', title: 'Freezer', category: 'loot', kind: 'fridge', x: 0.3238, y: 0.4330, content: 'Can be opened for random loot focusing on food.' },
  { id: 'fridge-8', title: 'Fridge', category: 'loot', kind: 'fridge', x: 0.3669, y: 0.4325, content: 'Can be opened for random loot focusing on food.' },
  { id: 'fridge-9', title: 'Stove', category: 'loot', kind: 'fridge', x: 0.3669, y: 0.4370, content: 'Can be opened for random loot focusing on food.' },
  { id: 'fridge-10', title: 'Freezer', category: 'loot', kind: 'fridge', x: 0.3717, y: 0.4331, content: 'Can be opened for random loot focusing on food.' },
  { id: 'cabinet-1', title: 'Kitchen Cabinets', category: 'loot', kind: 'cabinet', x: 0.3129, y: 0.4414, content: 'Can be opened for random loot.' },
  { id: 'cabinet-2', title: 'Nightstand', category: 'loot', kind: 'cabinet', x: 0.3252, y: 0.4485, content: 'Can be opened for random loot.' },
  { id: 'cabinet-3', title: 'Cabinets', category: 'loot', kind: 'cabinet', x: 0.3324, y: 0.4368, content: 'Can be opened for random loot.' },
  { id: 'cabinet-4', title: 'Medical Cabinet', category: 'loot', kind: 'cabinet', x: 0.3332, y: 0.4487, content: 'Can be opened for random loot.' },
  { id: 'cabinet-5', title: 'Kitchen Cabinets', category: 'loot', kind: 'cabinet', x: 0.3671, y: 0.4414, content: 'Can be opened for random loot.' },
  { id: 'cabinet-6', title: 'Nightstand', category: 'loot', kind: 'cabinet', x: 0.3213, y: 0.5891, content: 'Can be opened for random loot.' },
  { id: 'cabinet-7', title: 'Kitchen Cabinets', category: 'loot', kind: 'cabinet', x: 0.3302, y: 0.5851, content: 'Can be opened for random loot.' },
  { id: 'cabinet-8', title: 'Medical Cabinet', category: 'loot', kind: 'cabinet', x: 0.3326, y: 0.6123, content: 'Can be opened for random loot.' },
  { id: 'cabinet-9', title: 'Cabinet', category: 'loot', kind: 'cabinet', x: 0.3356, y: 0.6208, content: 'Can be opened for random loot.' },
  { id: 'cabinet-10', title: 'Nightstand', category: 'loot', kind: 'cabinet', x: 0.3757, y: 0.6015, content: 'Can be opened for random loot.' },
  { id: 'garbage-1', title: 'Garbage', category: 'loot', kind: 'garbage_bag', x: 0.3293, y: 0.4277, content: 'Can be opened for random loot.' },
  { id: 'garbage-2', title: 'Garbage', category: 'loot', kind: 'garbage_bag', x: 0.3302, y: 0.4331, content: 'Can be opened for random loot.' },
  { id: 'garbage-3', title: 'Garbage', category: 'loot', kind: 'garbage_bag', x: 0.3198, y: 0.4414, content: 'Can be opened for random loot.' },
  { id: 'garbage-4', title: 'Garbage', category: 'loot', kind: 'garbage_bag', x: 0.3672, y: 0.4566, content: 'Can be opened for random loot.' },
  { id: 'garbage-5', title: 'Garbage', category: 'loot', kind: 'garbage_bag', x: 0.3159, y: 0.5863, content: 'Can be opened for random loot.' },
  { id: 'garbage-6', title: 'Garbage', category: 'loot', kind: 'garbage_bag', x: 0.3271, y: 0.6008, content: 'Can be opened for random loot.' },
  { id: 'garbage-7', title: 'Garbage', category: 'loot', kind: 'garbage_bag', x: 0.3385, y: 0.6148, content: 'Can be opened for random loot.' },
  { id: 'garbage-8', title: 'Garbage', category: 'loot', kind: 'garbage_bag', x: 0.3692, y: 0.5868, content: 'Can be opened for random loot.' },
  { id: 'garbage-9', title: 'Garbage', category: 'loot', kind: 'garbage_bag', x: 0.3617, y: 0.6157, content: 'Can be opened for random loot.' },
  { id: 'elec-1', title: 'Fuse Box', category: 'loot', kind: 'electronics', x: 0.3272, y: 0.4330, content: 'Can be opened for random loot.' },
  { id: 'elec-2', title: 'Fuse Box', category: 'loot', kind: 'electronics', x: 0.3610, y: 0.4441, content: 'Can be opened for random loot.' },
  { id: 'elec-3', title: 'Fuse Box', category: 'loot', kind: 'electronics', x: 0.3386, y: 0.6115, content: 'Can be opened for random loot.' },
  { id: 'tools-1', title: 'Fireplace', category: 'loot', kind: 'tools', x: 0.3135, y: 0.4492, content: 'Can be opened for random loot.' },
  { id: 'tools-2', title: 'Fireplace', category: 'loot', kind: 'tools', x: 0.3714, y: 0.4380, content: 'Can be opened for random loot.' },
  { id: 'tools-3', title: 'Fireplace', category: 'loot', kind: 'tools', x: 0.3223, y: 0.6005, content: 'Can be opened for random loot.' },
  { id: 'npc-1', title: 'Generalist', category: 'npc', kind: 'trader', x: 0.5857, y: 0.6996, content: 'Items for Sale.' },
  { id: 'tasks-1', title: 'Prime Time', category: 'quests', kind: 'tasks', x: 0.5890, y: 0.6680, content: 'If you bring me that toilet paper, the TV is yours. It has all the channels pre-configured, vibrant colors and prime time shows are running as we speak.' },
  { id: 'tasks-2', title: 'Bad Habits', category: 'quests', kind: 'tasks', x: 0.5965, y: 0.6680, content: 'But if you happen to find one of these (Cigarettes), bring a pack or two and some matches as well.' },
  { id: 'tasks-3', title: 'Back Pains', category: 'quests', kind: 'tasks', x: 0.6040, y: 0.6680, content: 'If you happen to find something that could help me with my back, I would highly appreciate it.' },
  { id: 'tasks-4', title: 'Coffee Reserve', category: 'quests', kind: 'tasks', x: 0.6110, y: 0.6680, content: 'As a matter of fact, I should probably increase my strategic coffee reserve a bit, since the consumption lately has been above average.' },
  { id: 'tasks-5', title: 'Sweaty Business', category: 'quests', kind: 'tasks', x: 0.5890, y: 0.6747, content: "It's a sweaty business, but we just have to figure out some alternative methods to stay fresh."},
  { id: 'tasks-6', title: 'Handyman', category: 'quests', kind: 'tasks', x: 0.5965, y: 0.6747, content: "I'm getting tired of being her handyman, but I promised to help this one last time."},
  { id: 'tasks-7', title: 'Six Pack', category: 'quests', kind: 'tasks', x: 0.6040, y: 0.6747, content: "Speaking of six-packs, I could definitely take one for my road trip, six for the road, as they say." },
  { id: 'tasks-8', title: 'Old Friend', category: 'quests', kind: 'tasks', x: 0.6110, y: 0.6747, content: 'Sometimes I still hear that "prat-prat-prat" sound faintly in my dreams. Damn, I miss that gun. Someday I will once again reunite with my magical old friend, someday.' },
  { id: 'tasks-9', title: 'Road Trip', category: 'quests', kind: 'tasks', x: 0.5890, y: 0.6850, content: "Those filthy Bandits stole my car battery and a bunch of other items from the trunk, so I'm still stuck here. Maybe you could help me with this? Bring back my stolen items and I have something special for you." },
  { id: 'tasks-10', title: 'Homemade', category: 'quests', kind: 'tasks', x: 0.5965, y: 0.6850, content: 'If you can make this new batch for me (Kilju), I will consider giving you a key to my attic, which would be quite an upgrade from your small asbestos cabin.' },
]
