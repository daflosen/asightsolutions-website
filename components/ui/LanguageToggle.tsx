'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LanguageToggle() {
  const pathname = usePathname()
  const router = useRouter()
  const [isChanging, setIsChanging] = useState(false)

  // Determine current language from pathname
  const isGerman = pathname.startsWith('/de')
  const currentLang = isGerman ? 'DE' : 'EN'

  const handleLanguageChange = () => {
    setIsChanging(true)

    // Set cookie for language preference
    const newLang = isGerman ? 'en' : 'de'
    document.cookie = `preferred-lang=${newLang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`

    // Navigate to the appropriate URL
    const newPath = isGerman ? '/' : '/de'
    router.push(newPath)

    // Reset changing state after navigation
    setTimeout(() => setIsChanging(false), 300)
  }

  return (
    <button
      onClick={handleLanguageChange}
      disabled={isChanging}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 0.75rem',
        borderRadius: '12px',
        border: '1px solid #e5e5e5',
        background: isChanging ? '#f5f5f5' : 'white',
        color: '#333',
        fontSize: '0.85rem',
        fontWeight: '500',
        cursor: isChanging ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
        minWidth: '60px',
        minHeight: '36px',
        justifyContent: 'center',
      }}
      onMouseEnter={(e) => {
        if (!isChanging) {
          e.currentTarget.style.background = '#f9f9f9'
          e.currentTarget.style.borderColor = '#d0d0d0'
        }
      }}
      onMouseLeave={(e) => {
        if (!isChanging) {
          e.currentTarget.style.background = 'white'
          e.currentTarget.style.borderColor = '#e5e5e5'
        }
      }}
      aria-label={`Switch to ${isGerman ? 'English' : 'German'}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          opacity: 0.6,
        }}
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span>{currentLang}</span>
    </button>
  )
}
