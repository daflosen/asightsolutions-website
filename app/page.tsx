import type { Metadata } from 'next'
import HeroVideo from '@/components/sections/HeroVideo'
import OurClients from '@/components/sections/OurClients'
import DigitalSolution from '@/components/sections/DigitalSolution'
import Services from '@/components/sections/Services'
import BAFAFunding from '@/components/sections/BAFAFunding'
import AboutUs from '@/components/sections/AboutUs'
import CaseStudy from '@/components/sections/CaseStudy'
import Team from '@/components/sections/Team'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'
import FAQSimple from '@/components/sections/FAQSimple'
import CTASimple from '@/components/sections/CTASimple'
import PreFooter from '@/components/sections/PreFooter'
import FooterSimple from '@/components/sections/FooterSimple'
import LazySection from '@/components/ui/LazySection'
import IndustriesBranchen from '@/components/sections/IndustriesBranchen'

// Page-specific metadata (overrides layout metadata for this page)
export const metadata: Metadata = {
  title: 'Digitalisierung Unternehmensberatung Stuttgart | A Sight Solutions',
  description: 'Spezialisierte Unternehmensberatung für Digitalisierung und digitale Transformation. BAFA-gefördert. Experten für KI & Automatisierung im Mittelstand.',
  keywords: [
    // Hauptkeywords
    'digitalisierung unternehmensberatung',
    'unternehmensberatung digitalisierung',
    'unternehmensberatung digitalisierung stuttgart',
    'digitalisierung für den mittelstand',
    'digitalisierung mittelstand',
    // Digitale Transformation
    'beratung digitale transformation',
    'digitale transformation beratung',
    'digitale transformation',
    'digitalisierungsberatung',
    // Automatisierung & Prozesse
    'prozessautomatisierung software',
    'prozessautomatisierung',
    'automation in business',
    'business automation',
    'prozessdigitalisierung',
    'digitale prozesse',
    // ERP
    'beratung erp',
    'erp berater',
    'erp beratung',
    // Branchen-spezifisch
    'digitalisierung arztpraxis',
    'digitalisierung behörden',
    // Web & SEO
    'wordpress website erstellen lassen',
    'website wordpress erstellen lassen',
    'seo optimierung stuttgart',
    'seo optimierung kosten',
    'digitalagentur stuttgart',
    // Lokale Keywords
    'digitalisierung stuttgart',
    'unternehmensberatung stuttgart',
    'bafa förderung',
    'bafa berater stuttgart',
    // Services
    'ki beratung mittelstand',
    'automatisierung beratung',
    'digital transformation consulting',
  ],
}

export default function Home() {
  return (
    <main>
      {/* Above the fold - load immediately */}
      <HeroVideo />
      <OurClients />

      {/* Below the fold - lazy load for better performance */}
      <LazySection threshold={0.1} rootMargin="200px">
        <DigitalSolution />
      </LazySection>

      <LazySection threshold={0.1} rootMargin="200px">
        <Stats />
      </LazySection>

      <LazySection threshold={0.1} rootMargin="200px">
        <Services />
      </LazySection>

      <LazySection threshold={0.1} rootMargin="200px">
        <IndustriesBranchen />
      </LazySection>

      <LazySection threshold={0.1} rootMargin="200px">
        <AboutUs />
      </LazySection>

      <LazySection threshold={0.1} rootMargin="200px">
        <Testimonials />
      </LazySection>

      <LazySection threshold={0.1} rootMargin="200px">
        <CaseStudy />
      </LazySection>

      <LazySection threshold={0.1} rootMargin="200px">
        <Team />
      </LazySection>

      <LazySection threshold={0.1} rootMargin="200px">
        <FAQSimple />
      </LazySection>

      {/* BAFA Section - after FAQ for conversion funnel */}
      <BAFAFunding />

      <LazySection threshold={0.1} rootMargin="200px">
        <CTASimple />
      </LazySection>

      {/* Footer - always load */}
      <PreFooter />
      <FooterSimple />
    </main>
  )
}
