'use client'

import { useTranslations } from '@/hooks/useTranslations'

export default function FooterSimple() {
  const t = useTranslations()

  return (
    <footer className="py-8" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-gray-700">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  )
}
