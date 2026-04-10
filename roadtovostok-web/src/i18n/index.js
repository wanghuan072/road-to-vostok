/**
 * Vue I18n — en / zh / de / ru / fi / fr；语言由路由首段决定（见 router beforeEach），与 Heartopia 一致。
 */
import { createI18n } from 'vue-i18n'
import en from '../locales/en.json' with { type: 'json' }
import zh from '../locales/zh.json' with { type: 'json' }
import de from '../locales/de.json' with { type: 'json' }
import ru from '../locales/ru.json' with { type: 'json' }
import fi from '../locales/fi.json' with { type: 'json' }
import fr from '../locales/fr.json' with { type: 'json' }

/** 默认 en 无前缀；其它语言 URL 加 /{code}/… */
export const supportedLocales = ['en', 'zh', 'de', 'ru', 'fi', 'fr']

export const localeNames = {
  en: 'English',
  zh: '中文',
  de: 'Deutsch',
  ru: 'Русский',
  fi: 'Suomi',
  fr: 'Français',
}

/** <html lang> BCP 47 */
export function documentHtmlLang(locale) {
  if (locale === 'zh') return 'zh-CN'
  if (locale === 'de') return 'de'
  if (locale === 'ru') return 'ru'
  if (locale === 'fi') return 'fi'
  if (locale === 'fr') return 'fr'
  return 'en'
}

/** Open Graph og:locale (Unterstrich) */
export const localeOg = Object.freeze({
  en: 'en_US',
  zh: 'zh_CN',
  de: 'de_DE',
  ru: 'ru_RU',
  fi: 'fi_FI',
  fr: 'fr_FR',
})

/** JSON-LD inLanguage */
export const localeJsonLd = Object.freeze({
  en: 'en-US',
  zh: 'zh-CN',
  de: 'de-DE',
  ru: 'ru-RU',
  fi: 'fi-FI',
  fr: 'fr-FR',
})

/** link[rel=alternate] hreflang */
export const localeHreflang = Object.freeze({
  en: 'en',
  zh: 'zh-CN',
  de: 'de',
  ru: 'ru',
  fi: 'fi',
  fr: 'fr',
})

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    zh,
    de,
    ru,
    fi,
    fr,
  },
})

export default i18n
