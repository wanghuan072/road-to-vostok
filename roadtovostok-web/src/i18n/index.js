/**
 * Vue I18n — en / zh；语言由路由首段决定（见 router beforeEach），与 Heartopia 一致。
 */
import { createI18n } from 'vue-i18n'
import en from '../locales/en.json' with { type: 'json' }
import zh from '../locales/zh.json' with { type: 'json' }

/** 默认 en 无前缀；其它语言 URL 加 /{code}/… */
export const supportedLocales = ['en', 'zh']

export const localeNames = {
  en: 'English',
  zh: '中文',
}

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    zh,
  },
})

export default i18n
