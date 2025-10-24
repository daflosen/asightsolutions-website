'use client'

import DigitalSolution from '@/components/sections/DigitalSolution'
import Services from '@/components/sections/Services'
import Stats from '@/components/sections/Stats'
import AboutUs from '@/components/sections/AboutUs'
import Testimonials from '@/components/sections/Testimonials'
import Team from '@/components/sections/Team'
import FAQSimple from '@/components/sections/FAQSimple'
import CTASimple from '@/components/sections/CTASimple'
import FooterSimple from '@/components/sections/FooterSimple'

export default function DemoPage() {
  return (
    <main className="min-h-screen">
      {/* Demo header */}
      <section className="py-12 bg-gray-100 border-b">
        <div className="container text-center">
          <h1 className="text-4xl font-light mb-4">Component Demo</h1>
          <p className="text-gray-600">All asightsolutions components in minimalist design</p>
        </div>
      </section>

      {/* All components */}
      <DigitalSolution />
      <Services />
      <Stats />
      <AboutUs />
      <Testimonials />
      <Team />
      <FAQSimple />
      <CTASimple />
      <FooterSimple />
    </main>
  )
}