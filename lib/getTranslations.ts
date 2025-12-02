/**
 * Server-side Translation Helper
 * Use this in Server Components or to pass translations as props
 * This ensures all SEO-critical text is in the HTML source
 */
import { translations, type TranslationKeys } from '@/translations'

export type Language = 'de' | 'en'
export type Translations = TranslationKeys

/**
 * Get translations for a specific language
 * Can be used in Server Components without any hooks
 */
export function getTranslations(language: Language = 'de'): Translations {
  return translations[language] as Translations
}

/**
 * Determine language from pathname
 * Default is German, English only for /en paths
 */
export function getLanguageFromPath(pathname: string): Language {
  return pathname.startsWith('/en') ? 'en' : 'de'
}
