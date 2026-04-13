/** Village map filter taxonomy (categories → kinds). Kind ids are unique across the map. */

export const VILLAGE_CATEGORY_ORDER = ['locations', 'loot', 'npc', 'quests']

/** @type {Record<string, string[]>} */
export const VILLAGE_KINDS = {
  locations: ['hideout', 'landmark', 'fishing_spot', 'locked_structure', 'extraction'],
  // enemies: ['enemy_spawn'],
  loot: ['crate', 'fridge', 'cabinet', 'garbage_bag', 'electronics', 'tools'],
  npc: ['trader'],
  quests: ['tasks'],
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
