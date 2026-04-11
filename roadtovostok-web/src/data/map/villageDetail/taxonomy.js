/** Village map filter taxonomy (categories → kinds). Kind ids are unique across the map. */

export const VILLAGE_CATEGORY_ORDER = ['locations', 'enemies', 'quests', 'loot', 'npc']

/** @type {Record<string, string[]>} */
export const VILLAGE_KINDS = {
  locations: ['hideout', 'landmark', 'fishing_spot', 'locked_structure', 'extraction'],
  enemies: ['enemy_spawn'],
  quests: ['quest'],
  loot: ['crate', 'fridge', 'cabinet', 'trash', 'electronics', 'tools'],
  npc: ['trader'],
}

/**
 * @param {string} kind
 * @returns {string | null}
 */
export function categoryForKind(kind) {
  for (const cat of VILLAGE_CATEGORY_ORDER) {
    if (VILLAGE_KINDS[cat].includes(kind)) return cat
  }
  return null
}
