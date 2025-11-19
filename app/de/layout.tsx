import type { Metadata } from 'next'
import LoadingScreen from '@/components/LoadingScreen'

export const metadata: Metadata = {
  title: 'Digitalisierung Unternehmensberatung Stuttgart | A Sight Solutions',
  description: 'Führende Unternehmensberatung für Digitalisierung in Stuttgart. BAFA-gefördert, 200+ Projekte, KI & Automatisierung für Mittelstand.',
  keywords: [
    'digitalisierung unternehmensberatung',
    'unternehmensberatung digitalisierung',
    'digitalisierung für den mittelstand',
    'digitalisierung mittelstand',
    'beratung digitale transformation',
    'digitale transformation beratung',
    'prozessautomatisierung software',
    'prozessautomatisierung',
    'automation in business',
    'business automation',
    'beratung erp',
    'erp berater',
    'erp beratung',
    'digitalisierung arztpraxis',
    'digitalisierung behörden',
    'wordpress website erstellen lassen',
    'website wordpress erstellen lassen',
    'seo optimierung stuttgart',
    'seo optimierung kosten',
    'digitalagentur stuttgart',
    'digitalisierung stuttgart',
    'digitale prozesse',
    'BAFA-Förderung',
    'KI Beratung',
    'Unternehmensberatung Stuttgart',
    'Prozessoptimierung',
    'Low-Code Entwicklung',
    'Full Stack Development',
  ],
  authors: [{ name: 'A Sight Solutions' }],
  creator: 'A Sight Solutions',
  publisher: 'A Sight Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.asightsolutions.com/de',
    siteName: 'A Sight Solutions',
    title: 'Digitalisierung Unternehmensberatung Stuttgart | A Sight Solutions',
    description: 'Führende Unternehmensberatung für Digitalisierung in Stuttgart. BAFA-gefördert, 200+ Projekte, KI & Automatisierung für Mittelstand.',
    images: [
      {
        url: 'https://www.asightsolutions.com/images/optimized/Laptop_Oben.webp',
        width: 1200,
        height: 630,
        alt: 'A Sight Solutions - Digitalisierung Unternehmensberatung Stuttgart',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digitalisierung Unternehmensberatung Stuttgart | A Sight Solutions',
    description: 'Führende Unternehmensberatung für Digitalisierung in Stuttgart. BAFA-gefördert, 200+ Projekte, KI & Automatisierung.',
    images: ['https://www.asightsolutions.com/images/optimized/Laptop_Oben.webp'],
  },
  verification: {
    google: 'your-google-verification-code', // TODO: Add actual verification code
  },
  alternates: {
    canonical: 'https://www.asightsolutions.com/de',
    languages: {
      'de-DE': 'https://www.asightsolutions.com/de',
      'en': 'https://www.asightsolutions.com',
      'x-default': 'https://www.asightsolutions.com',
    },
  },
}

export default function GermanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
