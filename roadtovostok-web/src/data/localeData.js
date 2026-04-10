/**
 * 按界面语言合并 en + 各语言补丁；`withLocale` 需要 `{ zh, de, ru, … }` 等补丁表（可省略某语言则回退 en）。
 */
import {
  mergeLocaleRowsByKey,
  mergeLocaleRowsByIndex,
  mergeMapPoints,
} from './withLocale.js'

import guideArticlesEn from './guides/articles/en.js'
import guideArticlesZh from './guides/articles/zh.js'
import guideArticlesDe from './guides/articles/de.js'
import guideArticlesRu from './guides/articles/ru.js'
import guideArticlesFi from './guides/articles/fi.js'
import guideArticlesFr from './guides/articles/fr.js'

import fishingEn from './item/fishing/en.js'
import fishingZh from './item/fishing/zh.js'
import fishingDe from './item/fishing/de.js'
import fishingRu from './item/fishing/ru.js'
import fishingFi from './item/fishing/fi.js'
import fishingFr from './item/fishing/fr.js'

import coreTasksEn from './item/coreTasks/en.js'
import coreTasksZh from './item/coreTasks/zh.js'
import coreTasksDe from './item/coreTasks/de.js'
import coreTasksRu from './item/coreTasks/ru.js'
import coreTasksFi from './item/coreTasks/fi.js'
import coreTasksFr from './item/coreTasks/fr.js'

import gatheringEn from './item/gathering/en.js'
import gatheringZh from './item/gathering/zh.js'
import gatheringDe from './item/gathering/de.js'
import gatheringRu from './item/gathering/ru.js'
import gatheringFi from './item/gathering/fi.js'
import gatheringFr from './item/gathering/fr.js'

import npcsEn from './item/npcs/en.js'
import npcsZh from './item/npcs/zh.js'
import npcsDe from './item/npcs/de.js'
import npcsRu from './item/npcs/ru.js'
import npcsFi from './item/npcs/fi.js'
import npcsFr from './item/npcs/fr.js'

import weaponsEn, { weaponCategories } from './item/weapons/en.js'
import weaponsZh from './item/weapons/zh.js'
import weaponsDe from './item/weapons/de.js'
import weaponsRu from './item/weapons/ru.js'
import weaponsFi from './item/weapons/fi.js'
import weaponsFr from './item/weapons/fr.js'

import ammunitionEn, { ammunitionFilters } from './item/ammunition/en.js'
import ammunitionZh from './item/ammunition/zh.js'
import ammunitionDe from './item/ammunition/de.js'
import ammunitionRu from './item/ammunition/ru.js'
import ammunitionFi from './item/ammunition/fi.js'
import ammunitionFr from './item/ammunition/fr.js'

import mapPointsEn from './map/mapPoints/en.js'
import mapPointsZh from './map/mapPoints/zh.js'
import mapPointsDe from './map/mapPoints/de.js'
import mapPointsRu from './map/mapPoints/ru.js'
import mapPointsFi from './map/mapPoints/fi.js'
import mapPointsFr from './map/mapPoints/fr.js'

import posterShotsEn from './poster/screenshots/en.js'
import posterShotsZh from './poster/screenshots/zh.js'
import posterShotsDe from './poster/screenshots/de.js'
import posterShotsRu from './poster/screenshots/ru.js'
import posterShotsFi from './poster/screenshots/fi.js'
import posterShotsFr from './poster/screenshots/fr.js'

import modArticlesEn from './mods/mods/en.js'
import modArticlesZh from './mods/mods/zh.js'
import modArticlesDe from './mods/mods/de.js'
import modArticlesRu from './mods/mods/ru.js'
import modArticlesFi from './mods/mods/fi.js'
import modArticlesFr from './mods/mods/fr.js'

const guidePatches = {
  zh: guideArticlesZh,
  de: guideArticlesDe,
  ru: guideArticlesRu,
  fi: guideArticlesFi,
  fr: guideArticlesFr,
}
const fishingPatches = {
  zh: fishingZh,
  de: fishingDe,
  ru: fishingRu,
  fi: fishingFi,
  fr: fishingFr,
}
const coreTaskPatches = {
  zh: coreTasksZh,
  de: coreTasksDe,
  ru: coreTasksRu,
  fi: coreTasksFi,
  fr: coreTasksFr,
}
const gatheringPatches = {
  zh: gatheringZh,
  de: gatheringDe,
  ru: gatheringRu,
  fi: gatheringFi,
  fr: gatheringFr,
}
const npcPatches = { zh: npcsZh, de: npcsDe, ru: npcsRu, fi: npcsFi, fr: npcsFr }
const weaponPatches = { zh: weaponsZh, de: weaponsDe, ru: weaponsRu, fi: weaponsFi, fr: weaponsFr }
const ammunitionPatches = {
  zh: ammunitionZh,
  de: ammunitionDe,
  ru: ammunitionRu,
  fi: ammunitionFi,
  fr: ammunitionFr,
}
const mapPatches = {
  zh: mapPointsZh,
  de: mapPointsDe,
  ru: mapPointsRu,
  fi: mapPointsFi,
  fr: mapPointsFr,
}
const posterPatches = {
  zh: posterShotsZh,
  de: posterShotsDe,
  ru: posterShotsRu,
  fi: posterShotsFi,
  fr: posterShotsFr,
}
const modPatches = {
  zh: modArticlesZh,
  de: modArticlesDe,
  ru: modArticlesRu,
  fi: modArticlesFi,
  fr: modArticlesFr,
}

export function getGuideArticles(locale) {
  return mergeLocaleRowsByKey(locale, guideArticlesEn, guidePatches, 'addressBar')
}

export function getFishingRows(locale) {
  return mergeLocaleRowsByIndex(locale, fishingEn, fishingPatches)
}

export function getCoreTaskRows(locale) {
  return mergeLocaleRowsByIndex(locale, coreTasksEn, coreTaskPatches)
}

export function getGatheringRows(locale) {
  return mergeLocaleRowsByIndex(locale, gatheringEn, gatheringPatches)
}

export function getNpcList(locale) {
  return mergeLocaleRowsByKey(locale, npcsEn, npcPatches, 'addressBar')
}

export { weaponCategories }

export function getWeaponsData(locale) {
  return mergeLocaleRowsByKey(locale, weaponsEn, weaponPatches, 'id')
}

export { ammunitionFilters }

export function getAmmunitionRows(locale) {
  return mergeLocaleRowsByKey(locale, ammunitionEn, ammunitionPatches, 'id')
}

export function getMapPoints(locale) {
  return mergeMapPoints(locale, mapPointsEn, mapPatches)
}

export function getPosterShots(locale) {
  return mergeLocaleRowsByIndex(locale, posterShotsEn, posterPatches)
}

export function getModArticles(locale) {
  return mergeLocaleRowsByKey(locale, modArticlesEn, modPatches, 'addressBar')
}
