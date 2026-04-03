import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from 'vue-router'

const base = import.meta.env?.BASE_URL ?? '/'

/**
 * 路由表：path / name / 视图键 / meta（TDK + sitemap）
 * 命名导出供 scripts/generate-sitemap.js 使用（Node 下用 MemoryHistory，不访问 window）
 */
export const routeDefs = [
  {
    path: '/',
    name: 'home',
    view: 'HomeView',
    meta: {
      sitemap: { priority: 1.0, changefreq: 'weekly' },
      seo: {
        title: 'Road To Vostok Guide — Maps, Tasks, Weapons & Survival Database',
        description:
          'Road To Vostok survival guide and database: gameplay basics, Steam demo and Early Access, interactive map, task progression, weapon and item tables, strategy articles, mods overview, and roadmap context. Verify details against your build.',
        keywords:
          'Road To Vostok, survival guide, game database, Steam, Early Access, map, tasks, weapons, Area 05, Border Zone, Vostok, roadmap',
      },
    },
  },
  {
    path: '/getting-started',
    name: 'getting-started',
    view: 'GettingStartedView',
    meta: {
      sitemap: { priority: 0.95, changefreq: 'weekly' },
      seo: {
        title: 'How to Play Road To Vostok — Controls, First Steps & Tips',
        description:
          'Start here: Road To Vostok controls, first-session goals, shelter loop, loading shotguns, medical basics, and what to verify in your PC or Steam build.',
        keywords:
          'Road To Vostok how to play, controls, tutorial, first steps, load shotgun, shelter, Steam, PC',
      },
    },
  },
  {
    path: '/wiki',
    name: 'wiki',
    view: 'ItemDatabaseList',
    meta: {
      sitemap: { priority: 0.9, changefreq: 'weekly' },
      seo: {
        title: 'Road To Vostok Database — Gear, Tasks & Crafting Tables',
        description:
          'Curated Road To Vostok item and resource tables: weapons, ammunition, core quest items, shelter power, fishing, and gathering. Cross-check every value with your installed version.',
        keywords:
          'Road To Vostok database, item guide, weapons, ammunition, inverter, gathering, fishing, crafting',
      },
    },
  },
  {
    path: '/wiki/core-tasks',
    name: 'wiki-core-tasks',
    view: 'ItemDatabaseCoreTasks',
    meta: {
      sitemap: { priority: 0.85, changefreq: 'monthly' },
      seo: {
        title: 'Road To Vostok Core Tasks — Inverter, B Cables & Quest Items',
        description:
          'Table of core task and power items in Road To Vostok: inverter, B cables, keys, and quest-related props. Cross-check with your installed demo or Early Access build.',
        keywords:
          'Road To Vostok inverter, B cable, core tasks, quest items, shelter power, all tasks',
      },
    },
  },
  {
    path: '/wiki/weapons',
    name: 'wiki-weapons',
    view: 'ItemDatabaseWeapons',
    meta: {
      sitemap: { priority: 0.85, changefreq: 'monthly' },
      seo: {
        title: 'Road To Vostok Weapons — Knives, Guns, SMGs & Calibers',
        description:
          'Road To Vostok weapon reference: knives through precision rifles and SMGs, with category notes, stat summaries, and loot context. Validate against your current patch.',
        keywords:
          'Road To Vostok weapons, AKM, MP7, Mosin, SVD, ammo, survival FPS',
      },
    },
  },
  {
    path: '/wiki/ammunition',
    name: 'wiki-ammunition',
    view: 'ItemDatabaseAmmunition',
    meta: {
      sitemap: { priority: 0.85, changefreq: 'monthly' },
      seo: {
        title: 'Road To Vostok Ammunition — Calibers & Ammo Types',
        description:
          'Ammunition and caliber reference for Road To Vostok: cartridge names, typical weapons, and notes for loadout planning. Confirm against your current game version.',
        keywords:
          'Road To Vostok ammunition, calibers, 7.62, 5.45, shotgun shells, ammo types',
      },
    },
  },
  {
    path: '/wiki/fishing',
    name: 'wiki-fishing',
    view: 'ItemDatabaseFishing',
    meta: {
      sitemap: { priority: 0.8, changefreq: 'monthly' },
      seo: {
        title: 'Road To Vostok Fishing Guide — Checklist & Patch Notes',
        description:
          'Fishing in Road To Vostok: what to check in patch notes and demos, roadmap timing, and a practical checklist. Fishing systems evolve — verify in your build.',
        keywords:
          'Road To Vostok fishing, how to fish, roadmap, survival, Steam',
      },
    },
  },
  {
    path: '/wiki/gathering',
    name: 'wiki-gathering',
    view: 'ItemDatabaseGathering',
    meta: {
      sitemap: { priority: 0.8, changefreq: 'monthly' },
      seo: {
        title: 'Road To Vostok Gathering — Materials & Resource Table',
        description:
          'Gathering and raw materials in Road To Vostok: resource types, typical sources, and crafting relevance. Compare entries with your installed version.',
        keywords:
          'Road To Vostok gathering, materials, crafting, loot, survival',
      },
    },
  },
  {
    path: '/wiki/npcs',
    name: 'wiki-npcs',
    view: 'NpcListView',
    meta: {
      sitemap: { priority: 0.82, changefreq: 'monthly' },
      seo: {
        title: 'Road To Vostok NPCs — Traders & Area 05 Hubs',
        description:
          'Road To Vostok NPC reference: Generalist and Doctor traders, Village and Shipyard hubs, stock behavior, and cross-links from the interactive map.',
        keywords:
          'Road To Vostok NPCs, traders, Generalist, Doctor, Village, Area 05, game guide',
      },
    },
  },
  {
    path: '/wiki/npcs/:addressBar',
    name: 'wiki-npc-detail',
    view: 'NpcDetailView',
    meta: {
      sitemap: false,
      seo: {
        title: 'NPC — Road To Vostok Reference',
        description:
          'Road To Vostok NPC reference: trader stock, tasks, locations, or combat behavior. Supplement official materials; confirm in your build.',
        keywords: 'Road To Vostok, NPC, traders, game guide, reference',
      },
    },
  },
  {
    path: '/map',
    name: 'map',
    view: 'MapView',
    meta: {
      sitemap: { priority: 0.95, changefreq: 'weekly' },
      seo: {
        title: 'Road To Vostok Map — Area 05, POIs & Regional Overview',
        description:
          'Road To Vostok Interactive map: Area 05, Border Zone, and Vostok points of interest, searchable index, and regional overview. Use alongside the in-game map and confirm coordinates in-client.',
        keywords:
          'Road To Vostok map, Area 05, Border Zone, Vostok, POI, location index',
      },
    },
  },
  {
    path: '/tasks',
    name: 'tasks',
    view: 'TasksView',
    meta: {
      sitemap: { priority: 0.92, changefreq: 'weekly' },
      seo: {
        title: 'Road To Vostok Tasks — Progression, Border & Vostok Rules',
        description:
          'Road To Vostok tasks and progression reference: trader objectives, Border Zone crossings, Vostok permadeath rules, and suggested route order. Confirm quest behavior in your build.',
        keywords:
          'Road To Vostok all tasks, Border Zone, Vostok, traders, quests, permadeath',
      },
    },
  },
  {
    path: '/guides',
    name: 'guides',
    view: 'GuidesListView',
    meta: {
      sitemap: { priority: 0.88, changefreq: 'weekly' },
      seo: {
        title: 'Road To Vostok Guides — Weapons, Medical, Power & Roadmap',
        description:
          'Road To Vostok strategy guides: weapon loading, medical survival, shelter power, and Early Access roadmap context. Editorial reference — validate mechanics in your installed version.',
        keywords:
          'Road To Vostok guides, load shotgun, medical, inverter, roadmap',
      },
    },
  },
  {
    path: '/guides/:addressBar',
    name: 'guide-article',
    view: 'GuideArticleView',
    meta: {
      sitemap: false,
      seo: {
        title: 'Guide — Road To Vostok',
        description:
          'In-depth Road To Vostok guide: tactics, systems, or roadmap analysis. Validate gameplay details against your installed build.',
        keywords: 'Road To Vostok, strategy guide, walkthrough, Early Access',
      },
    },
  },
  {
    path: '/dev-updates',
    name: 'dev-updates',
    view: 'DevUpdatesView',
    meta: {
      sitemap: { priority: 0.9, changefreq: 'weekly' },
      seo: {
        title: 'Road To Vostok Updates & Early Access Roadmap',
        description:
          'Road To Vostok development updates and Early Access roadmap digest: build milestones, Steam release timing, and announced features. Editorial summary — confirm dates on Steam and the official site.',
        keywords:
          'Road To Vostok roadmap, Early Access, dev updates, release date, Steam, builds',
      },
    },
  },
  {
    path: '/mods',
    name: 'mods',
    view: 'ModsListView',
    meta: {
      sitemap: { priority: 0.85, changefreq: 'weekly' },
      seo: {
        title: 'Road To Vostok Mods — Editorial Spotlights & Recommended Packs',
        description:
          'Curated Road To Vostok mod recommendations: editorial spotlights on gameplay packs and tools we review—features, Metro Mod Loader notes, and safe install guidance. Not a full ModWorkshop mirror; no hosted .vmz files—downloads only via linked author pages.',
        keywords:
          'Road To Vostok mods, modding, Early Access, ModWorkshop, Metro Mod Loader, game guide',
      },
    },
  },
  {
    path: '/mods/:addressBar',
    name: 'mod-article',
    view: 'ModArticleView',
    meta: {
      sitemap: false,
      seo: {
        title: 'Mod article — Road To Vostok',
        description:
          'Road To Vostok mod spotlight: feature overview, compatibility notes, loader requirements, and authoritative download links.',
        keywords: 'Road To Vostok, mods, modding guide, Early Access',
      },
    },
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    view: 'PrivacyPolicyView',
    meta: {
      sitemap: { priority: 0.45, changefreq: 'monthly' },
      seo: {
        title: 'Privacy Policy — Road To Vostok Guide',
        description:
          'Privacy Policy for roadtovostok.org: browsing data, cookies, third-party services, retention, and how to contact the site operator.',
        keywords:
          'Road To Vostok Guide, privacy policy, roadtovostok.org, data protection, cookies',
      },
    },
  },
  {
    path: '/terms-of-service',
    name: 'terms-of-service',
    view: 'TermsOfServiceView',
    meta: {
      sitemap: { priority: 0.45, changefreq: 'monthly' },
      seo: {
        title: 'Terms of Service — Road To Vostok Guide',
        description:
          'Terms of Service for Road To Vostok Guide: acceptable use, intellectual property notice, disclaimers, limitation of liability, and contact information.',
        keywords:
          'Road To Vostok Guide, terms of service, disclaimer, legal, reference site',
      },
    },
  },
  {
    path: '/copyright',
    name: 'copyright',
    view: 'CopyrightView',
    meta: {
      sitemap: { priority: 0.45, changefreq: 'monthly' },
      seo: {
        title: 'Copyright — Road To Vostok Guide',
        description:
          'Copyright notice: game trademarks and IP belong to respective owners; original site content and how to request takedowns for Road To Vostok Guide.',
        keywords:
          'Road To Vostok, copyright, trademark, DMCA, intellectual property',
      },
    },
  },
  {
    path: '/about',
    name: 'about',
    view: 'AboutUsView',
    meta: {
      sitemap: { priority: 0.55, changefreq: 'monthly' },
      seo: {
        title: 'About Us — Road To Vostok Guide',
        description:
          'About Road To Vostok Guide: English-language reference for maps, items, tasks, and survival systems. Independent resource; not affiliated with the developer or publisher.',
        keywords:
          'Road To Vostok Guide, about, game reference, survival guide, independent',
      },
    },
  },
  {
    path: '/contact',
    name: 'contact',
    view: 'ContactUsView',
    meta: {
      sitemap: { priority: 0.55, changefreq: 'monthly' },
      seo: {
        title: 'Contact — Road To Vostok Guide',
        description:
          'Contact Road To Vostok Guide by email for site feedback, corrections, or legal notices. No contact form — mailto wyong@roadtovostok.org.',
        keywords:
          'Road To Vostok Guide, contact, email, roadtovostok.org',
      },
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    view: 'NotFoundView',
    meta: {
      sitemap: false,
      seo: {
        title: 'Page not found',
        description:
          'This page does not exist on Road To Vostok Guide. Browse the home page, wiki, map, tasks, or guides.',
        keywords: 'Road To Vostok Guide, 404',
        robots: 'noindex, nofollow',
      },
    },
  },
]

const viewLoaders = {
  HomeView: () => import('../views/HomeView.vue'),
  GettingStartedView: () => import('../views/GettingStartedView.vue'),
  ItemDatabaseList: () => import('../views/wiki/ItemDatabaseList.vue'),
  ItemDatabaseCoreTasks: () => import('../views/wiki/ItemDatabaseCoreTasks.vue'),
  ItemDatabaseWeapons: () => import('../views/wiki/ItemDatabaseWeapons.vue'),
  ItemDatabaseAmmunition: () => import('../views/wiki/ItemDatabaseAmmunition.vue'),
  ItemDatabaseFishing: () => import('../views/wiki/ItemDatabaseFishing.vue'),
  ItemDatabaseGathering: () => import('../views/wiki/ItemDatabaseGathering.vue'),
  NpcListView: () => import('../views/wiki/NpcListView.vue'),
  NpcDetailView: () => import('../views/wiki/NpcDetailView.vue'),
  MapView: () => import('../views/MapView.vue'),
  TasksView: () => import('../views/TasksView.vue'),
  GuidesListView: () => import('../views/guides/GuidesListView.vue'),
  GuideArticleView: () => import('../views/guides/GuideArticleView.vue'),
  DevUpdatesView: () => import('../views/DevUpdatesView.vue'),
  ModsListView: () => import('../views/mods/ModsListView.vue'),
  ModArticleView: () => import('../views/mods/ModArticleView.vue'),
  PrivacyPolicyView: () => import('../views/site-pages/PrivacyPolicyView.vue'),
  TermsOfServiceView: () => import('../views/site-pages/TermsOfServiceView.vue'),
  CopyrightView: () => import('../views/site-pages/CopyrightView.vue'),
  AboutUsView: () => import('../views/site-pages/AboutUsView.vue'),
  ContactUsView: () => import('../views/site-pages/ContactUsView.vue'),
  NotFoundView: () => import('../views/site-pages/NotFoundView.vue'),
}

const mappedRoutes = routeDefs.map((def) => {
  const load = viewLoaders[def.view]
  if (!load) {
    throw new Error(`[router] Unknown view key: ${def.view}`)
  }
  return {
    path: def.path,
    name: def.name,
    component: load,
    meta: def.meta,
  }
})

const routes = mappedRoutes

const history =
  typeof window !== 'undefined' ? createWebHistory(base) : createMemoryHistory(base)

const router = createRouter({
  history,
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 72 }
    }
    return { top: 0 }
  },
})

export default router
