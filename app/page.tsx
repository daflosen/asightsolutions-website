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
