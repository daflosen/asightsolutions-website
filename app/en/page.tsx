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
import IndustriesBranchen from '@/components/sections/IndustriesBranchen'
import BAFAFunding from '@/components/sections/BAFAFunding'

// Page-specific metadata (overrides layout metadata for this page)
export const metadata: Metadata = {
  title: 'Digital Transformation Consulting Stuttgart | A Sight Solutions',
  description: 'Expert digital transformation and business process consulting. BAFA-funded. AI & automation specialists for SMEs in Germany.',
  alternates: {
    canonical: 'https://asightsolutions.com/en',
    languages: {
      'en': 'https://asightsolutions.com/en',
      'de-DE': 'https://asightsolutions.com/de',
      'x-default': 'https://asightsolutions.com',
    },
  },
  keywords: [
    // Main keywords
    'digital transformation consulting',
    'business digitalization',
    'digital transformation Germany',
    'SME digitalization',
    // Digital Transformation
    'digital transformation services',
    'digitalization consulting',
    'business process digitalization',
    // Automation & Processes
    'process automation software',
    'business process automation',
    'workflow automation',
    'digital processes',
    // ERP
    'ERP consulting',
    'ERP implementation',
    // Industry-specific
    'healthcare digitalization',
    'government digitalization',
    // Web & SEO
    'web design Germany',
    'SEO optimization',
    'digital agency Stuttgart',
    // Local keywords
    'IT consulting Stuttgart',
    'digital consulting Germany',
    'BAFA funding',
    // Services
    'AI consulting SME',
    'automation consulting',
    'digital transformation expert',
  ],
}

export default function EnglishHome() {
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
        <Services lang="en" />
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
