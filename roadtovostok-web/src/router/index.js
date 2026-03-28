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
        title: 'Road To Vostok Guide — Maps, Tasks, Weapons & Survival Wiki',
        description:
          'Fan-made Road To Vostok survival wiki: how to play, Steam demo and Early Access, map and tasks pages, loadouts, guides, mods notes, and official roadmap context.',
        keywords:
          'Road To Vostok, guide, wiki, survival FPS, Steam demo, Early Access, map, tasks, weapons, Area 05, Border Zone, Vostok, roadmap',
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
        title: 'Road To Vostok Wiki — Gear, Tasks & Crafting Tables',
        description:
          'Browse fan-maintained Road To Vostok wiki tables: weapons, ammo, core task props, inverter and cables, fishing, and gathering — always confirm values in-game.',
        keywords:
          'Road To Vostok wiki, items, weapons, ammunition, inverter, gathering, fishing, crafting',
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
        title: '武器 · Road To Vostok — Knives, Guns, SMGs & Calibers',
        description:
          'Road To Vostok weapon categories: knives, pistols, rifles, SMGs & PDWs, shotguns, bolt-action, semi-auto. Community wiki–style stats and loot hints — verify in your build.',
        keywords:
          'Road To Vostok weapons, 武器, AKM, MP7, Mosin, SVD, ammo, survival FPS',
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
          'Gathering and raw materials in Road To Vostok: resources, typical sources, and crafting relevance. Community-sourced; compare with your installed version.',
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
          'Fan wiki NPC and hub notes for Road To Vostok: Generalist and Doctor traders, Village hub context, and links from the interactive map.',
        keywords:
          'Road To Vostok NPCs, traders, Generalist, Doctor, Village, Area 05, wiki',
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
        title: 'NPC — Road To Vostok Wiki',
        description: 'Fan wiki NPC article for Road To Vostok.',
        keywords: 'Road To Vostok, NPC, wiki',
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
          'Interactive fan map: Area 05, Border Zone, and Vostok pins, location index, and regional overview. Unofficial overlay — verify against your in-game map.',
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
          'Trader tasks vs roadmap questline, practical progression order, Border Zone crossings, and Vostok permadeath rules — unofficial; confirm in your build.',
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
          'Player guides for Road To Vostok: loading weapons, medical survival, inverter and shelter power, and Early Access roadmap context. Unofficial fan articles.',
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
        description: 'Player guide article for Road To Vostok.',
        keywords: 'Road To Vostok, guide',
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
          'Road To Vostok dev updates and roadmap summary: Early Access builds, release timing vs Steam, and planned features. Unofficial digest — trust official sites for dates.',
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
        title: 'Road To Vostok Mods — Community Packs & Early Access Notes',
        description:
          'Unofficial modding notes for Road To Vostok: Early Access expectations, community packs, and safe experimentation. No hosted downloads — verify every file.',
        keywords:
          'Road To Vostok mods, modding, Early Access, community, unofficial',
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
        description: 'Community modding article for Road To Vostok.',
        keywords: 'Road To Vostok, mods',
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
          'Privacy Policy for roadtovostok.org: what data may be collected when you browse this fan wiki, cookies, third parties, and how to contact the site operator.',
        keywords:
          'Road To Vostok Guide, privacy policy, roadtovostok.org, fan wiki, data protection',
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
          'Terms of Service for using Road To Vostok Guide: unofficial fan site disclaimer, use of content, no warranty, and contact email.',
        keywords:
          'Road To Vostok Guide, terms of service, disclaimer, fan site',
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
          'Road To Vostok, copyright, trademark, fan wiki, DMCA',
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
          'About Road To Vostok Guide: an unofficial English wiki for maps, items, and survival help — not affiliated with the official game.',
        keywords:
          'Road To Vostok Guide, about, fan wiki, unofficial',
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

const redirectRoutes = [
  { path: '/item-database', redirect: '/wiki' },
  { path: '/item-database/core-tasks', redirect: '/wiki/core-tasks' },
  { path: '/item-database/weapons', redirect: '/wiki/weapons' },
  { path: '/item-database/ammunition', redirect: '/wiki/ammunition' },
  { path: '/item-database/fishing', redirect: '/wiki/fishing' },
  { path: '/item-database/gathering', redirect: '/wiki/gathering' },
  { path: '/maps-tasks', redirect: '/map' },
  { path: '/tech-support', redirect: '/mods' },
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

const routes = [...redirectRoutes, ...mappedRoutes]

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
