import HeroVideo from '@/components/sections/HeroVideo'
import OurClients from '@/components/sections/OurClients'
import DigitalSolution from '@/components/sections/DigitalSolution'
import Services from '@/components/sections/Services'
import AboutUs from '@/components/sections/AboutUs'
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
      <OurClients />
      <DigitalSolution />
      <Stats />
      <Services />
      <AboutUs />
      <Testimonials />
      <CaseStudy />
      <ServicesSimple />
      <FAQSimple />
      <CTASimple />
      <FooterSimple />
    </main>
  )
}
