'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [currentService, setCurrentService] = useState(0)
  const services = [
    'Process Digitalization & Tooling',
    'Business Optimization & Tooling',
    'Web Design and SEO',
    'Full Stack & Low Code Development'
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
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 bg-white/20" 
             style={{ transform: 'translate(30%, -30%)' }}/>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full opacity-10 bg-white/20" 
             style={{ transform: 'translate(-40%, 40%)' }}/>
      </div>

      <div className="container relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Column */}
          <div className="text-white">
            <div className="flex items-start gap-4 mb-2">
              <h1 className="headline-xl text-white">
                asight
              </h1>
              <span className="text-8xl font-light text-white mt-2">®</span>
            </div>
            <h2 className="text-6xl font-light text-white mb-8 text-right">Solutions</h2>

            {/* Service Rotation */}
            <div className="mb-12">
              <div className="h-24 relative">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === currentService
                        ? 'opacity-100 transform translate-y-0'
                        : 'opacity-0 transform translate-y-4'
                    }`}
                  >
                    <p className="text-xl font-light text-white">{service}</p>
                  </div>
                ))}
              </div>

              {/* Progress dots */}
              <div className="flex gap-2">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 transition-all duration-300 ${
                      index === currentService ? 'w-8 bg-white' : 'w-1 bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-lg text-white opacity-90 mb-8">
              Digital solutions and strategies that help<br />
              your processes thrive and your business grow.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:pl-20">
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
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container">
          <p className="text-white text-sm opacity-60">© 2025 asightsolutions®</p>
        </div>
      </div>
    </section>
  )
}