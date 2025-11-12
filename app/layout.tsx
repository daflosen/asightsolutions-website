import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LoadingScreen from '@/components/LoadingScreen'
import Navigation from '@/components/common/Navigation'
import FloatingContactWidget from '@/components/ui/FloatingContactWidget'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

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
    url: 'https://asightsolutions.com',
    siteName: 'A Sight Solutions',
    title: 'Digitalisierung Unternehmensberatung Stuttgart | A Sight Solutions',
    description: 'Führende Unternehmensberatung für Digitalisierung in Stuttgart. BAFA-gefördert, 200+ Projekte, KI & Automatisierung für Mittelstand.',
    images: [
      {
        url: 'https://asightsolutions.com/images/optimized/Laptop_Oben.webp',
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
    images: ['https://asightsolutions.com/images/optimized/Laptop_Oben.webp'],
  },
  verification: {
    google: 'your-google-verification-code', // TODO: Add actual verification code
  },
  alternates: {
    canonical: 'https://asightsolutions.com',
    languages: {
      'en': 'https://asightsolutions.com',
      'de-DE': 'https://asightsolutions.com/de',
      'x-default': 'https://asightsolutions.com',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <LanguageProvider>
          <LoadingScreen />
          <Navigation />
          <FloatingContactWidget />
          {children}
        </LanguageProvider>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'A Sight Solutions',
              alternateName: 'asightsolutions',
              url: 'https://asightsolutions.com',
              logo: 'https://asightsolutions.com/images/Asight_Trademark.png',
              description: 'Führende Unternehmensberatung für Digitalisierung in Stuttgart. BAFA-gefördert, 200+ Projekte, KI & Automatisierung für Mittelstand.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Stuttgart',
                addressRegion: 'Baden-Württemberg',
                addressCountry: 'DE',
              },
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: '48.7758',
                  longitude: '9.1829',
                },
                geoRadius: '100000', // 100km radius
              },
              priceRange: '€€€',
              serviceType: [
                'Digitalisierung',
                'Unternehmensberatung',
                'KI Beratung',
                'Prozessoptimierung',
                'Web Design',
                'SEO',
                'Full Stack Development',
                'Low-Code Development',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '50',
              },
              founder: {
                '@type': 'Person',
                name: 'Florian Bartsch',
                jobTitle: 'Founder',
              },
              sameAs: [
                'https://www.linkedin.com/company/asightsolutions',
                'https://github.com/daflosen',
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
