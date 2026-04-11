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
  // { id: 'spawn-1', title: 'Enemy spawn', category: 'enemies', kind: 'enemy_spawn', x: 0.5, y: 0.4, content: 'Enemy spawn volume (approx.).' },
  { id: 'crate-1', title: 'Wooden Crate', category: 'loot', kind: 'crate', x: 0.2018, y: 0.6576, content: 'Can be opened for random loot' },
  { id: 'crate-2', title: 'Wooden Crates', category: 'loot', kind: 'crate', x: 0.2536, y: 0.5270, content: 'Can be opened for random loot.' },
  // { id: 'crate-3', title: 'Crate', category: 'loot', kind: 'crate', x: 0.4, y: 0.58, content: 'Loot: crate.' },
  // { id: 'crate-4', title: 'Crate', category: 'loot', kind: 'crate', x: 0.58, y: 0.42, content: 'Loot: crate.' },
  // { id: 'fridge-1', title: 'Fridge', category: 'loot', kind: 'fridge', x: 0.46, y: 0.44, content: 'Food storage spawn.' },
  // { id: 'fridge-2', title: 'Fridge', category: 'loot', kind: 'fridge', x: 0.54, y: 0.5, content: 'Food storage spawn.' },
  // { id: 'cabinet-1', title: 'Cabinet', category: 'loot', kind: 'cabinet', x: 0.5, y: 0.52, content: 'Cabinet loot.' },
  // { id: 'cabinet-2', title: 'Cabinet', category: 'loot', kind: 'cabinet', x: 0.43, y: 0.47, content: 'Cabinet loot.' },
  // { id: 'trash-1', title: 'Trash', category: 'loot', kind: 'trash', x: 0.6, y: 0.55, content: 'Trash / bin roll.' },
  // { id: 'trash-2', title: 'Trash', category: 'loot', kind: 'trash', x: 0.38, y: 0.5, content: 'Trash / bin roll.' },
  // { id: 'elec-1', title: 'Electronics', category: 'loot', kind: 'electronics', x: 0.52, y: 0.56, content: 'Electronics pile.' },
  // { id: 'elec-2', title: 'Electronics', category: 'loot', kind: 'electronics', x: 0.47, y: 0.53, content: 'Electronics pile.' },
  // { id: 'elec-3', title: 'Electronics', category: 'loot', kind: 'electronics', x: 0.56, y: 0.48, content: 'Electronics pile.' },
  // { id: 'tools-1', title: 'Tools', category: 'loot', kind: 'tools', x: 0.45, y: 0.54, content: 'Tool spawn.' },
  // { id: 'tools-2', title: 'Tools', category: 'loot', kind: 'tools', x: 0.51, y: 0.44, content: 'Tool spawn.' },
  // { id: 'trader-1', title: 'Trader', category: 'npc', kind: 'trader', x: 0.5, y: 0.46, content: 'Trader / merchant.' },
]
