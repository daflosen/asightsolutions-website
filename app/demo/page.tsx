'use client'

import {
  DigitalSolution,
  Services,
  Stats,
  About,
  Testimonials,
  Team,
  FAQ,
  CTA,
  Footer
} from '../../components'

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
      <About />
      <Testimonials />
      <Team />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}