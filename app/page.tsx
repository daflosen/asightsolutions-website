import HeroVideo from '@/components/sections/HeroVideo'
import LogoGrid from '@/components/sections/LogoGrid'
import DigitalSolution from '@/components/sections/DigitalSolution'
import Services from '@/components/sections/Services'
import CaseStudy from '@/components/sections/CaseStudy'
import ServicesSimple from '@/components/sections/ServicesSimple'
import Stats from '@/components/sections/Stats'
import Testimonials from '@/components/sections/Testimonials'
import FAQSimple from '@/components/sections/FAQSimple'
import CTASimple from '@/components/sections/CTASimple'
import FooterSimple from '@/components/sections/FooterSimple'

export default function Home() {
  return (
    <main>
      <HeroVideo />
      <LogoGrid />
      <DigitalSolution />
      <Services />
      <Stats />
      <CaseStudy />
      <ServicesSimple />
      <Testimonials />
      <FAQSimple />
      <CTASimple />
      <FooterSimple />
    </main>
  )
}
