import type { Metadata } from 'next'
import HeroVideo from '@/components/sections/HeroVideo'
import OurClients from '@/components/sections/OurClients'
import DigitalSolution from '@/components/sections/DigitalSolution'
import Services from '@/components/sections/Services'
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

// Page-specific metadata (overrides layout metadata for this page)
export const metadata: Metadata = {
  title: 'Digitalisierung Unternehmensberatung Stuttgart | A Sight Solutions',
  description: 'Spezialisierte Unternehmensberatung für Digitalisierung und digitale Transformation. BAFA-gefördert. Experten für KI & Automatisierung im Mittelstand.',
  keywords: [
    'digitalisierung unternehmensberatung',
    'unternehmensberatung digitalisierung stuttgart',
    'digitale transformation',
    'bafa förderung',
    'digitalisierungsberatung',
    'prozessdigitalisierung',
    'ki beratung mittelstand',
    'automatisierung beratung',
    'unternehmensberatung stuttgart',
    'digital transformation consulting',
    'bafa berater stuttgart',
    'digitalisierung mittelstand',
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

      <LazySection threshold={0.1} rootMargin="200px">
        <CTASimple />
      </LazySection>

      {/* Footer - always load */}
      <PreFooter />
      <FooterSimple />
    </main>
  )
}
