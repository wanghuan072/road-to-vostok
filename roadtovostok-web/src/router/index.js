import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from 'vue-router'
import i18n, { supportedLocales, documentHtmlLang } from '../i18n/index.js'
import { extractLocaleFromPath } from '../composables/useLocalizedPath.js'

const base = import.meta.env?.BASE_URL ?? '/'

/**
 * 栅格图 m02–m07：与 `/map/village-map` 一致采用 kebab-case 路径，供 `routeDefs` 与顶栏 `MAP_GAME_MAPS_NAV`。
 * 旧路径 `/map/m02` … `/map/m07` 在路由层重定向到新 URL。
 */
export const MAP_RASTER_NAV = [
  {
    id: 'm02',
    path: '/map/highway-map',
    name: 'map-raster-m02',
    view: 'MapRasterM02View',
    i18nKey: 'mapRasterM02',
    seoFromI18n: 'tdk.mapRasterM02Page',
  },
  {
    id: 'm03',
    path: '/map/school-map',
    name: 'map-raster-m03',
    view: 'MapRasterM03View',
    i18nKey: 'mapRasterM03',
    seoFromI18n: 'tdk.mapRasterM03Page',
  },
  {
    id: 'm04',
    path: '/map/outpost-map',
    name: 'map-raster-m04',
    view: 'MapRasterM04View',
    i18nKey: 'mapRasterM04',
    seoFromI18n: 'tdk.mapRasterM04Page',
  },
  {
    id: 'm05',
    path: '/map/minefield-map',
    name: 'map-raster-m05',
    view: 'MapRasterM05View',
    i18nKey: 'mapRasterM05',
    seoFromI18n: 'tdk.mapRasterM05Page',
  },
  {
    id: 'm06',
    path: '/map/apartments-map',
    name: 'map-raster-m06',
    view: 'MapRasterM06View',
    i18nKey: 'mapRasterM06',
    seoFromI18n: 'tdk.mapRasterM06Page',
  },
  {
    id: 'm07',
    path: '/map/terminal-map',
    name: 'map-raster-m07',
    view: 'MapRasterM07View',
    i18nKey: 'mapRasterM07',
    seoFromI18n: 'tdk.mapRasterM07Page',
  },
]

/** 旧版短路径 → 与 village-map 一致的 slug（按 locale 前缀重定向） */
const MAP_RASTER_LEGACY_PATHS = [
  ['/map/m02', '/map/highway-map'],
  ['/map/m03', '/map/school-map'],
  ['/map/m04', '/map/outpost-map'],
  ['/map/m05', '/map/minefield-map'],
  ['/map/m06', '/map/apartments-map'],
  ['/map/m07', '/map/terminal-map'],
]

/** 顶栏「地图」下拉：村庄 + 各栅格图（`labelKey` → vue-i18n） */
export const MAP_GAME_MAPS_NAV = [
  { path: '/map/village-map', labelKey: 'site.navMapVillage' },
  ...MAP_RASTER_NAV.map((r) => ({
    path: r.path,
    labelKey: `${r.i18nKey}.navLabel`,
  })),
]

function createRoutePath(path, locale) {
  if (locale === 'en') return path
  return `/${locale}${path}`
}

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
      seoFromI18n: 'tdk.homePage',
    },
  },
  {
    path: '/getting-started',
    name: 'getting-started',
    view: 'GettingStartedView',
    meta: {
      sitemap: { priority: 0.95, changefreq: 'weekly' },
      seoFromI18n: 'tdk.gettingStartedPage',
    },
  },
  {
    path: '/wiki',
    name: 'wiki',
    view: 'ItemDatabaseList',
    meta: {
      sitemap: { priority: 0.9, changefreq: 'weekly' },
      seoFromI18n: 'tdk.wikiHubPage',
    },
  },
  {
    path: '/wiki/core-tasks',
    name: 'wiki-core-tasks',
    view: 'ItemDatabaseCoreTasks',
    meta: {
      sitemap: { priority: 0.85, changefreq: 'monthly' },
      seoFromI18n: 'tdk.wikiCoreTasksPage',
    },
  },
  {
    path: '/wiki/weapons',
    name: 'wiki-weapons',
    view: 'ItemDatabaseWeapons',
    meta: {
      sitemap: { priority: 0.85, changefreq: 'monthly' },
      seoFromI18n: 'tdk.wikiWeaponsPage',
    },
  },
  {
    path: '/wiki/ammunition',
    name: 'wiki-ammunition',
    view: 'ItemDatabaseAmmunition',
    meta: {
      sitemap: { priority: 0.85, changefreq: 'monthly' },
      seoFromI18n: 'tdk.wikiAmmunitionPage',
    },
  },
  {
    path: '/wiki/fishing',
    name: 'wiki-fishing',
    view: 'ItemDatabaseFishing',
    meta: {
      sitemap: { priority: 0.8, changefreq: 'monthly' },
      seoFromI18n: 'tdk.wikiFishingPage',
    },
  },
  {
    path: '/wiki/gathering',
    name: 'wiki-gathering',
    view: 'ItemDatabaseGathering',
    meta: {
      sitemap: { priority: 0.8, changefreq: 'monthly' },
      seoFromI18n: 'tdk.wikiGatheringPage',
    },
  },
  {
    path: '/wiki/npcs',
    name: 'wiki-npcs',
    view: 'NpcListView',
    meta: {
      sitemap: { priority: 0.82, changefreq: 'monthly' },
      seoFromI18n: 'tdk.npcListPage',
    },
  },
  {
    path: '/wiki/npcs/:addressBar',
    name: 'wiki-npc-detail',
    view: 'NpcDetailView',
    meta: {
      sitemap: false,
      seoFromI18n: 'tdk.npcDetailPage',
    },
  },
  {
    path: '/map',
    name: 'map',
    view: 'MapView',
    meta: {
      sitemap: { priority: 0.95, changefreq: 'weekly' },
      seoFromI18n: 'tdk.mapPage',
    },
  },
  {
    path: '/map/village-map',
    name: 'map-village-detail',
    view: 'MapRasterM01View',
    meta: {
      sitemap: { priority: 0.88, changefreq: 'weekly' },
      seoFromI18n: 'tdk.mapVillagePage',
    },
  },
  ...MAP_RASTER_NAV.map((r) => ({
    path: r.path,
    name: r.name,
    view: r.view,
    meta: {
      sitemap: { priority: 0.78, changefreq: 'weekly' },
      seoFromI18n: r.seoFromI18n,
    },
  })),
  {
    path: '/tasks',
    name: 'tasks',
    view: 'TasksView',
    meta: {
      sitemap: { priority: 0.92, changefreq: 'weekly' },
      seoFromI18n: 'tdk.tasksPage',
    },
  },
  {
    path: '/guides',
    name: 'guides',
    view: 'GuidesListView',
    meta: {
      sitemap: { priority: 0.88, changefreq: 'weekly' },
      seoFromI18n: 'tdk.guidesListPage',
    },
  },
  {
    path: '/guides/:addressBar',
    name: 'guide-article',
    view: 'GuideArticleView',
    meta: {
      sitemap: false,
      seoFromI18n: 'tdk.guideArticlePage',
    },
  },
  {
    path: '/dev-updates',
    name: 'dev-updates',
    view: 'DevUpdatesView',
    meta: {
      sitemap: { priority: 0.9, changefreq: 'weekly' },
      seoFromI18n: 'tdk.devUpdatesPage',
    },
  },
  {
    path: '/road-to-vostok-poster',
    name: 'poster',
    view: 'PosterView',
    meta: {
      sitemap: { priority: 0.84, changefreq: 'monthly' },
      seoFromI18n: 'tdk.posterPage',
      seo: {
        image: '/images/poster/Road_to_Vostok_Screenshot_01.jpg',
      },
    },
  },
  {
    path: '/mods',
    name: 'mods',
    view: 'ModsListView',
    meta: {
      sitemap: { priority: 0.85, changefreq: 'weekly' },
      seoFromI18n: 'tdk.modsListPage',
    },
  },
  {
    path: '/mods/:addressBar',
    name: 'mod-article',
    view: 'ModArticleView',
    meta: {
      sitemap: false,
      seoFromI18n: 'tdk.modArticlePage',
    },
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    view: 'PrivacyPolicyView',
    meta: {
      sitemap: { priority: 0.45, changefreq: 'monthly' },
      seoFromI18n: 'tdk.privacyPolicyPage',
    },
  },
  {
    path: '/terms-of-service',
    name: 'terms-of-service',
    view: 'TermsOfServiceView',
    meta: {
      sitemap: { priority: 0.45, changefreq: 'monthly' },
      seoFromI18n: 'tdk.termsOfServicePage',
    },
  },
  {
    path: '/copyright',
    name: 'copyright',
    view: 'CopyrightView',
    meta: {
      sitemap: { priority: 0.45, changefreq: 'monthly' },
      seoFromI18n: 'tdk.copyrightPage',
    },
  },
  {
    path: '/about',
    name: 'about',
    view: 'AboutUsView',
    meta: {
      sitemap: { priority: 0.55, changefreq: 'monthly' },
      seoFromI18n: 'tdk.aboutPage',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    view: 'ContactUsView',
    meta: {
      sitemap: { priority: 0.55, changefreq: 'monthly' },
      seoFromI18n: 'tdk.contactPage',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    view: 'NotFoundView',
    meta: {
      sitemap: false,
      seoFromI18n: 'tdk.notFoundPage',
      seo: {
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
  MapView: () => import('../views/map/MapView.vue'),
  MapRasterM01View: () => import('../views/map/MapRasterM01View.vue'),
  MapRasterM02View: () => import('../views/map/MapRasterM02View.vue'),
  MapRasterM03View: () => import('../views/map/MapRasterM03View.vue'),
  MapRasterM04View: () => import('../views/map/MapRasterM04View.vue'),
  MapRasterM05View: () => import('../views/map/MapRasterM05View.vue'),
  MapRasterM06View: () => import('../views/map/MapRasterM06View.vue'),
  MapRasterM07View: () => import('../views/map/MapRasterM07View.vue'),
  TasksView: () => import('../views/TasksView.vue'),
  GuidesListView: () => import('../views/guides/GuidesListView.vue'),
  GuideArticleView: () => import('../views/guides/GuideArticleView.vue'),
  DevUpdatesView: () => import('../views/DevUpdatesView.vue'),
  PosterView: () => import('../views/PosterView.vue'),
  ModsListView: () => import('../views/mods/ModsListView.vue'),
  ModArticleView: () => import('../views/mods/ModArticleView.vue'),
  PrivacyPolicyView: () => import('../views/site-pages/PrivacyPolicyView.vue'),
  TermsOfServiceView: () => import('../views/site-pages/TermsOfServiceView.vue'),
  CopyrightView: () => import('../views/site-pages/CopyrightView.vue'),
  AboutUsView: () => import('../views/site-pages/AboutUsView.vue'),
  ContactUsView: () => import('../views/site-pages/ContactUsView.vue'),
  NotFoundView: () => import('../views/site-pages/NotFoundView.vue'),
}

function toRouterRoute(def, locale) {
  const load = viewLoaders[def.view]
  if (!load) {
    throw new Error(`[router] Unknown view key: ${def.view}`)
  }
  const path = createRoutePath(def.path, locale)
  const name = locale === 'en' ? def.name : `${def.name}-${locale}`
  return {
    path,
    name,
    component: load,
    meta: { ...def.meta, locale },
  }
}

const notFoundDef = routeDefs.find((d) => d.name === 'not-found')
const defsNo404 = routeDefs.filter((d) => d.name !== 'not-found')

const routes = []
for (const def of defsNo404) {
  for (const loc of supportedLocales) {
    routes.push(toRouterRoute(def, loc))
  }
}
/** Legacy URL /map/village → /map/village-map (per locale prefix). */
for (const loc of supportedLocales) {
  routes.push({
    path: createRoutePath('/map/village', loc),
    redirect: createRoutePath('/map/village-map', loc),
  })
}
for (const loc of supportedLocales) {
  for (const [fromPath, toPath] of MAP_RASTER_LEGACY_PATHS) {
    routes.push({
      path: createRoutePath(fromPath, loc),
      redirect: createRoutePath(toPath, loc),
    })
  }
}
// 先注册各非 en 语言的 404，再注册 en 兜底，避免 /zh/…、/de/… 被英文通配吃掉
for (const loc of supportedLocales) {
  if (loc !== 'en') routes.push(toRouterRoute(notFoundDef, loc))
}
routes.push(toRouterRoute(notFoundDef, 'en'))

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

router.beforeEach((to) => {
  const loc = extractLocaleFromPath(to.path)
  const gl = i18n.global.locale
  if (typeof gl === 'object' && gl !== null && 'value' in gl) {
    gl.value = loc
  }
  if (typeof document !== 'undefined') {
    document.documentElement.lang = documentHtmlLang(loc)
  }
})

export default router
