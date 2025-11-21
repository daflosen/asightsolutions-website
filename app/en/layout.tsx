import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Transformation Consulting Stuttgart | A Sight Solutions',
  description: 'Leading digital transformation consultancy in Stuttgart, Germany. BAFA-funded, 200+ projects, AI & automation for SMEs. Expert digitalization services.',
  keywords: [
    'digital transformation consulting',
    'digitalization consulting',
    'business process automation',
    'digital transformation services',
    'SME digitalization',
    'AI consulting',
    'process optimization',
    'ERP consulting',
    'web design Stuttgart',
    'SEO optimization',
    'digital agency Stuttgart',
    'full stack development',
    'low-code development',
    'BAFA funding',
    'business automation',
    'workflow automation',
    'digital solutions',
    'IT consulting Germany',
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
    locale: 'en_US',
    url: 'https://asightsolutions.com/en',
    siteName: 'A Sight Solutions',
    title: 'Digital Transformation Consulting Stuttgart | A Sight Solutions',
    description: 'Leading digital transformation consultancy in Stuttgart, Germany. BAFA-funded, 200+ projects, AI & automation for SMEs.',
    images: [
      {
        url: 'https://asightsolutions.com/images/optimized/Laptop_Oben.webp',
        width: 1200,
        height: 630,
        alt: 'A Sight Solutions - Digital Transformation Consulting Stuttgart',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Transformation Consulting Stuttgart | A Sight Solutions',
    description: 'Leading digital transformation consultancy in Stuttgart, Germany. BAFA-funded, 200+ projects, AI & automation for SMEs.',
    images: ['https://asightsolutions.com/images/optimized/Laptop_Oben.webp'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://asightsolutions.com/en',
    languages: {
      'en': 'https://asightsolutions.com/en',
      'de-DE': 'https://asightsolutions.com/de',
      'x-default': 'https://asightsolutions.com',
    },
  },
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
