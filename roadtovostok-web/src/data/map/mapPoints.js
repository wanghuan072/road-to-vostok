/**
 * Map POIs for the site’s Leaflet overlay (CRS.Simple on the static world image).
 * nx, ny: normalized 0–1 from the image top-left (x → right, y → down). Used only to place pins;
 * keep them aligned with the artwork when the map asset changes.
 *
 * Labels follow common community / official region names: Area 05, Border Zone, Vostok.
 */
export default [
  {
    id: 'cabin',
    label: 'Cabin (shelter)',
    nx: 0.2,
    ny: 0.36,
    region: 'area05',
    blurb: 'Player shelter: sleep, stash, and shelter systems — hub for early tasks.',
  },
  {
    id: 'village',
    label: 'Village',
    nx: 0.26,
    ny: 0.44,
    region: 'area05',
    blurb: 'Starting hub; Generalist trader, scavenging, food and meds (Area 05).',
  },
  {
    id: 'shipyard',
    label: 'Shipyard',
    nx: 0.31,
    ny: 0.52,
    region: 'area05',
    blurb: 'Larger Area 05 map; Doctor trader and heavier loot routes (per community maps).',
  },
  {
    id: 'highway',
    label: 'Highway',
    nx: 0.22,
    ny: 0.56,
    region: 'area05',
    blurb: 'Open connector from the Village line; exposed travel, lighter farming spots.',
  },
  {
    id: 'border-crossing',
    label: 'Border crossing',
    nx: 0.48,
    ny: 0.47,
    region: 'border',
    blurb: 'Finland–Russia frontier checkpoint style beat; guards, obstacles, or water per route.',
  },
  {
    id: 'minefield',
    label: 'Minefield',
    nx: 0.54,
    ny: 0.4,
    region: 'border',
    blurb: 'Border Zone hazard: mine lines — plan pathing and stamina before crossing.',
  },
  {
    id: 'water-crossing',
    label: 'Water crossing',
    nx: 0.44,
    ny: 0.58,
    region: 'border',
    blurb: 'Some border maps use boats or fords — check route prep and loadout weight.',
  },
  {
    id: 'vostok',
    label: 'Vostok',
    nx: 0.78,
    ny: 0.46,
    region: 'vostok',
    blurb: 'Russia-side endgame: high stakes; store copy ties permadeath-style risk to this arc.',
  },
  {
    id: 'vostok-military',
    label: 'Military pressure (east)',
    nx: 0.66,
    ny: 0.43,
    region: 'vostok',
    blurb: 'Heavier opposition and loot as you push east — pace meds and ammo.',
  },
]
