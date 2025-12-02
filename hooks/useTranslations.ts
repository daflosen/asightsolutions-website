import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations } from '@/lib/getTranslations'

/**
 * Hook for translations in Client Components
 * Uses getTranslations which is SSR-safe
 */
export function useTranslations() {
  const { language } = useLanguage()
  return getTranslations(language)
}
