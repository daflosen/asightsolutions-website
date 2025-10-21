'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [currentService, setCurrentService] = useState(0)

  // Mobile-optimized: Short service names for better readability
  const services = [
    { mobile: 'Process\nDigitalization', desktop: 'Process Digitalization & Tooling' },
    { mobile: 'Business\nOptimization', desktop: 'Business Optimization & Tooling' },
    { mobile: 'Web Design\n& SEO', desktop: 'Web Design and SEO' },
    { mobile: 'Full Stack\nDevelopment', desktop: 'Full Stack & Low Code Development' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3AA6B9, #2C8A94)' }}>
      {/* Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full opacity-10 bg-white/20"
             style={{ transform: 'translate(30%, -30%)' }}/>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] rounded-full opacity-10 bg-white/20"
             style={{ transform: 'translate(-40%, 40%)' }}/>
      </div>

      <div className="container relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 md:py-20 w-full">
          {/* Left Column */}
          <div className="text-white">
            {/* Brand - Mobile Optimized */}
            <div className="flex items-start gap-2 md:gap-4 mb-1 md:mb-2">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white">
                asight
              </h1>
              <span className="text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-light text-white mt-1 md:mt-2">®</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 md:mb-8 text-right">Solutions</h2>

            {/* Service Rotation - BOLD KINETIC TYPOGRAPHY */}
            <div className="mb-8 md:mb-12">
              {/* Mobile: Large bold text, Desktop: Even larger */}
              <div className="h-[140px] md:h-[100px] lg:h-[80px] relative mb-4 md:mb-5">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === currentService
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {/* Mobile: Show multi-line, Desktop: Show single line */}
                    <p className="text-4xl md:text-3xl lg:text-4xl font-bold md:font-light text-white whitespace-pre-line md:whitespace-normal leading-tight">
                      <span className="md:hidden">{service.mobile}</span>
                      <span className="hidden md:inline">{service.desktop}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress dots - Larger on mobile */}
              <div className="flex gap-2 md:gap-2">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 md:h-1 rounded-full transition-all duration-300 ${
                      index === currentService
                        ? 'w-12 md:w-10 lg:w-12 bg-white'
                        : 'w-1.5 md:w-1 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-base md:text-lg text-white opacity-90 mb-6 md:mb-8 leading-relaxed">
              Digital solutions and strategies that help<br />
              your processes thrive and your business grow.
            </p>

            {/* CTA Button - Mobile optimized */}
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-100 transition-colors lg:hidden">
              Let&apos;s Talk
            </button>
          </div>

          {/* Right Column - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block lg:pl-20">
            <div className="text-white mb-12">
              <p className="text-sm opacity-70 mb-2">
                Process Digitalization & Tooling<br />
                Business Optimization & Tooling
              </p>
              <p className="text-sm opacity-70 mb-8">
                Let&apos;s build your digital business<br />
                Full Stack & Low Code Development
              </p>

              <div className="text-sm opacity-60">
                Call 0049 2 234 567 654<br />
                hello@asightsolutions.com
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-6 inline-block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-medium">Personal</p>
                  <p className="text-sm text-gray-600">Project Manager</p>
                </div>
              </div>
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-900 transition-colors">
                Let&apos;s Talk
              </button>
            </div>

            <div className="mt-8">
              <a href="#" className="text-white text-sm opacity-70 hover:opacity-100 transition-opacity">
                📥 Pitch Deck
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0">
        <div className="container">
          <p className="text-white text-xs md:text-sm opacity-60">© 2025 asightsolutions®</p>
        </div>
      </div>
    </section>
  )
}