/**
 * 按界面语言合并 en + zh 补丁；视图只从此文件导入 get*，不在各子目录放 index.js。
 */
import {
  mergeLocaleRowsByKey,
  mergeLocaleRowsByIndex,
  mergeMapPoints,
} from './withLocale.js'

import guideArticlesEn from './guides/articles/en.js'
import guideArticlesZh from './guides/articles/zh.js'

import fishingEn from './item/fishing/en.js'
import fishingZh from './item/fishing/zh.js'

import coreTasksEn from './item/coreTasks/en.js'
import coreTasksZh from './item/coreTasks/zh.js'

import gatheringEn from './item/gathering/en.js'
import gatheringZh from './item/gathering/zh.js'

import npcsEn from './item/npcs/en.js'
import npcsZh from './item/npcs/zh.js'

import weaponsEn, { weaponCategories } from './item/weapons/en.js'
import weaponsZh from './item/weapons/zh.js'

import ammunitionEn, { ammunitionFilters } from './item/ammunition/en.js'
import ammunitionZh from './item/ammunition/zh.js'

import mapPointsEn from './map/mapPoints/en.js'
import mapPointsZh from './map/mapPoints/zh.js'

import posterShotsEn from './poster/screenshots/en.js'
import posterShotsZh from './poster/screenshots/zh.js'

import modArticlesEn from './mods/mods/en.js'
import modArticlesZh from './mods/mods/zh.js'

export function getGuideArticles(locale) {
  return mergeLocaleRowsByKey(locale, guideArticlesEn, guideArticlesZh, 'addressBar')
}

export function getFishingRows(locale) {
  return mergeLocaleRowsByIndex(locale, fishingEn, fishingZh)
}

export function getCoreTaskRows(locale) {
  return mergeLocaleRowsByIndex(locale, coreTasksEn, coreTasksZh)
}

export function getGatheringRows(locale) {
  return mergeLocaleRowsByIndex(locale, gatheringEn, gatheringZh)
}

export function getNpcList(locale) {
  return mergeLocaleRowsByKey(locale, npcsEn, npcsZh, 'addressBar')
}

export { weaponCategories }

export function getWeaponsData(locale) {
  return mergeLocaleRowsByKey(locale, weaponsEn, weaponsZh, 'id')
}

export { ammunitionFilters }

export function getAmmunitionRows(locale) {
  return mergeLocaleRowsByKey(locale, ammunitionEn, ammunitionZh, 'id')
}

export function getMapPoints(locale) {
  return mergeMapPoints(locale, mapPointsEn, mapPointsZh)
}

export function getPosterShots(locale) {
  return mergeLocaleRowsByIndex(locale, posterShotsEn, posterShotsZh)
}

export function getModArticles(locale) {
  return mergeLocaleRowsByKey(locale, modArticlesEn, modArticlesZh, 'addressBar')
}
