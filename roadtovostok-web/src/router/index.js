import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from 'vue-router'
import i18n, { supportedLocales } from '../i18n/index.js'
import { extractLocaleFromPath } from '../composables/useLocalizedPath.js'

const base = import.meta.env?.BASE_URL ?? '/'

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
      seoFromI18n: 'tdk.privacyPolicy',
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
  MapView: () => import('../views/MapView.vue'),
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
// 必须先注册 /zh/:pathMatch…，否则英文兜底会吃掉 /zh 下未命中路径
routes.push(toRouterRoute(notFoundDef, 'zh'))
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

router.beforeEach((to, _from, next) => {
  const loc = extractLocaleFromPath(to.path)
  const gl = i18n.global.locale
  if (typeof gl === 'object' && gl !== null && 'value' in gl) {
    gl.value = loc
  }
  if (typeof document !== 'undefined') {
    document.documentElement.lang = loc === 'zh' ? 'zh-CN' : 'en'
  }
  next()
})

export default router
