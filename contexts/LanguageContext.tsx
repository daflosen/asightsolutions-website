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
  const isGerman = pathname.startsWith('/de')
  const language: Language = isGerman ? 'de' : 'en'

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
