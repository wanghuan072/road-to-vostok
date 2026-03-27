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
          'Fan-made Road To Vostok survival wiki: how to play, Steam demo and Early Access, maps and all tasks, loadouts, inverter, medical, saves, and official roadmap context.',
        keywords:
          'Road To Vostok, guide, wiki, survival FPS, Steam demo, Early Access, maps, all tasks, weapons, Area 05, Border Zone, Vostok, roadmap',
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
    path: '/item-database',
    name: 'item-database',
    view: 'ItemDatabaseList',
    meta: {
      sitemap: { priority: 0.9, changefreq: 'weekly' },
      seo: {
        title: 'Road To Vostok Item Database — Gear, Tasks & Crafting Tables',
        description:
          'Browse fan-maintained Road To Vostok item tables: weapons, ammo, core task props, inverter and cables, fishing, and gathering — always confirm values in-game.',
        keywords:
          'Road To Vostok items, database, weapons, ammunition, inverter, gathering, fishing, crafting',
      },
    },
  },
  {
    path: '/item-database/core-tasks',
    name: 'item-database-core-tasks',
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
    path: '/item-database/weapons',
    name: 'item-database-weapons',
    view: 'ItemDatabaseWeapons',
    meta: {
      sitemap: { priority: 0.85, changefreq: 'monthly' },
      seo: {
        title: 'Road To Vostok Weapons List — Guns, SMGs & Attachments',
        description:
          'Road To Vostok weapons overview: rifles, SMGs, shotguns, pistols, primary ammo types, and attachment notes. Values may vary by patch — verify in your build.',
        keywords:
          'Road To Vostok weapons, guns, AKM, MP7, ammo, attachments, survival FPS',
      },
    },
  },
  {
    path: '/item-database/ammunition',
    name: 'item-database-ammunition',
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
    path: '/item-database/fishing',
    name: 'item-database-fishing',
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
    path: '/item-database/gathering',
    name: 'item-database-gathering',
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
    path: '/maps-tasks',
    name: 'maps-tasks',
    view: 'MapsTasksView',
    meta: {
      sitemap: { priority: 0.95, changefreq: 'weekly' },
      seo: {
        title: 'Road To Vostok Map & Tasks — Area 05, Border Zone, Vostok',
        description:
          'Interactive fan map and written guide: Area 05, Border Zone crossings, Vostok permadeath rules, traders, keys, and the “all tasks” milestone — unofficial; verify in-game.',
        keywords:
          'Road To Vostok map, all tasks, Area 05, Border Zone, Vostok, traders, quests, POI',
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
    path: '/tech-support',
    name: 'tech-support',
    view: 'TechSupportView',
    meta: {
      sitemap: { priority: 0.85, changefreq: 'monthly' },
      seo: {
        title: 'Road To Vostok PC Support — Steam Saves, Backup & Fixes',
        description:
          'Road To Vostok on PC: Steam demo install, save backup paths (Godot user data), cloud sync tips, common errors, and when to verify files or contact support.',
        keywords:
          'Road To Vostok Steam, save backup, PC fix, Godot, tech support, demo',
      },
    },
  },
  {
    path: '/guides/load-weapon',
    name: 'guide-load-weapon',
    view: 'LoadWeaponGuide',
    meta: {
      sitemap: { priority: 0.8, changefreq: 'monthly' },
      seo: {
        title: 'How to Load Weapons in Road To Vostok — Shotgun & Magazines',
        description:
          'Load shotgun shells and magazines in Road To Vostok: manual vs magazine flow, common mistakes, and build-specific quirks. Check your key bindings and patch notes.',
        keywords:
          'Road To Vostok load shotgun, reload, magazine, weapons, how to',
      },
    },
  },
  {
    path: '/guides/inverter-location',
    name: 'guide-inverter',
    view: 'InverterLocationGuide',
    meta: {
      sitemap: { priority: 0.8, changefreq: 'monthly' },
      seo: {
        title: 'Road To Vostok Inverter — Location, Shelter Power & Tasks',
        description:
          'Inverter and shelter power in Road To Vostok: where players typically find it, cabling and tasks context, and reminders to confirm coordinates in your build.',
        keywords:
          'Road To Vostok inverter, location, shelter, power, B cable, tasks',
      },
    },
  },
  {
    path: '/guides/medical',
    name: 'guide-medical',
    view: 'MedicalGuide',
    meta: {
      sitemap: { priority: 0.8, changefreq: 'monthly' },
      seo: {
        title: 'Road To Vostok Medical Guide — Injury, Meds & Recovery',
        description:
          'Medical survival in Road To Vostok: fractures, bleeding, meds, and recovery tips from community play. Not medical advice — gameplay only; verify in your version.',
        keywords:
          'Road To Vostok medical, broken bone, healing, meds, survival',
      },
    },
  },
  {
    path: '/guides/roadmap',
    name: 'guide-roadmap',
    view: 'RoadmapGuide',
    meta: {
      sitemap: { priority: 0.85, changefreq: 'weekly' },
      seo: {
        title: 'Road To Vostok Roadmap — Builds, EA Scope & Future Features',
        description:
          'Readable summary of the Road To Vostok public roadmap: Build 1–8 themes, Early Access scope, and systems like fishing and seasons. Cross-check roadtovostok.com and Steam.',
        keywords:
          'Road To Vostok roadmap, Early Access, builds, future updates, official',
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
          'This page does not exist on Road To Vostok Guide. Browse the home page, item database, or maps and quests.',
        keywords: 'Road To Vostok Guide, 404',
        robots: 'noindex, nofollow',
      },
    },
  },
]

const viewLoaders = {
  HomeView: () => import('../views/HomeView.vue'),
  GettingStartedView: () => import('../views/GettingStartedView.vue'),
  ItemDatabaseList: () => import('../views/item-database/ItemDatabaseList.vue'),
  ItemDatabaseCoreTasks: () => import('../views/item-database/ItemDatabaseCoreTasks.vue'),
  ItemDatabaseWeapons: () => import('../views/item-database/ItemDatabaseWeapons.vue'),
  ItemDatabaseAmmunition: () => import('../views/item-database/ItemDatabaseAmmunition.vue'),
  ItemDatabaseFishing: () => import('../views/item-database/ItemDatabaseFishing.vue'),
  ItemDatabaseGathering: () => import('../views/item-database/ItemDatabaseGathering.vue'),
  MapsTasksView: () => import('../views/MapsTasksView.vue'),
  DevUpdatesView: () => import('../views/DevUpdatesView.vue'),
  TechSupportView: () => import('../views/TechSupportView.vue'),
  LoadWeaponGuide: () => import('../views/guides/LoadWeaponGuide.vue'),
  InverterLocationGuide: () => import('../views/guides/InverterLocationGuide.vue'),
  MedicalGuide: () => import('../views/guides/MedicalGuide.vue'),
  RoadmapGuide: () => import('../views/guides/RoadmapGuide.vue'),
  PrivacyPolicyView: () => import('../views/site-pages/PrivacyPolicyView.vue'),
  TermsOfServiceView: () => import('../views/site-pages/TermsOfServiceView.vue'),
  CopyrightView: () => import('../views/site-pages/CopyrightView.vue'),
  AboutUsView: () => import('../views/site-pages/AboutUsView.vue'),
  ContactUsView: () => import('../views/site-pages/ContactUsView.vue'),
  NotFoundView: () => import('../views/site-pages/NotFoundView.vue'),
}

const routes = routeDefs.map((def) => {
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
