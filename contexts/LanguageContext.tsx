'use client'

import { createContext, useContext, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

type Language = 'en' | 'de'

interface LanguageContextType {
  language: Language
  isGerman: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  // Default to German, switch to English only on /en path
  const isEnglish = pathname.startsWith('/en')
  const language: Language = isEnglish ? 'en' : 'de'
  const isGerman = !isEnglish

  return (
    <LanguageContext.Provider value={{ language, isGerman }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
