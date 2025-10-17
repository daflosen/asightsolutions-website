'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView, animate } from 'framer-motion'

export default function Testimonials() {
  const statsRef = useRef<HTMLDivElement>(null)
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 })
  const [toolsCount, setToolsCount] = useState(0)
  const [projectsCount, setProjectsCount] = useState(0)
  const [satisfactionCount, setSatisfactionCount] = useState(0)

  const testimonials = [
    {
      name: 'Janine Carter',
      role: 'Head of PMO',
      rating: 5,
      text: 'Incredible team! They delivered exactly what we needed, on time and beyond expectations.'
    },
    {
      name: 'Anna Schönbühl',
      role: 'Marketing Director',
      rating: 5,
      text: 'A smooth process from start to finish. It\' crazy what you can achieve these days!'
    },
    {
      name: 'Viola Frederiksen',
      role: 'Startup Hub',
      rating: 5,
      text: 'Impressive methodological approach. The solution from asight is exactly what we envisioned—clean, modern, and unique.'
    }
  ]

  // Counter animations
  useEffect(() => {
    if (isStatsInView) {
      // Tools counter (0 to 17)
      const toolsControls = animate(0, 17, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setToolsCount(Math.round(latest))
        }
      })

      // Projects counter (0 to 50)
      const projectsControls = animate(0, 50, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setProjectsCount(Math.round(latest))
        }
      })

      // Satisfaction counter (0 to 98)
      const satisfactionControls = animate(0, 98, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setSatisfactionCount(Math.round(latest))
        }
      })

      return () => {
        toolsControls.stop()
        projectsControls.stop()
        satisfactionControls.stop()
      }
    }
  }, [isStatsInView])

  return (
    <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16 relative flex items-start">
          <div className="flex items-center gap-2 absolute left-0 top-0">
            <span className="w-2 h-2 bg-black rounded-full" />
            <span className="text-sm font-medium">Testimonials</span>
          </div>

          <div className="flex-1 flex justify-center">
            <div>
              <h2 className="text-[48px] md:text-[80px] lg:text-[120px] font-bold leading-none mb-2">
                Experiences.
              </h2>
              <p className="text-base">©2025</p>
            </div>
          </div>
        </div>

        {/* Grid Layout - 4 gleichbreite Spalten */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mb-20">
          {/* Erste Card - mit Rating UND Company Info */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex gap-4 items-start mb-8">
                <div className="text-6xl font-bold leading-none">
                  4.9<span className="text-2xl text-gray-500">/5</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 pt-2">
                  We've delivered 50+ projects that help companies generate results.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">asightsolutions®</h3>
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Team member"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
                  alt="Team member"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white -ml-3"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
                  alt="Team member"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white -ml-3"
                />
                <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-white -ml-3 flex items-center justify-center text-white text-xs font-semibold">
                  15+
                </div>
              </div>
              <div className="flex gap-1 mb-2 text-orange-500">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-sm text-gray-600 mb-4">Trusted by clients worldwide</p>
              <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform w-full">
                Leave a review
              </button>
            </div>
          </div>

          {/* Zweite Card - Janine (Photo/Stars on top) */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
                  alt={testimonials[0].name}
                  className="w-12 h-12 rounded-full object-cover bg-gray-300"
                />
                <div>
                  <h3 className="text-base font-semibold">{testimonials[0].name}</h3>
                  <p className="text-sm text-gray-600">{testimonials[0].role}</p>
                </div>
              </div>
              <div className="flex gap-1 text-orange-500">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
            </div>
            <p className="text-lg leading-relaxed indent-8">
              {testimonials[0].text}
            </p>
          </div>

          {/* Dritte Card - Anna (Text on top - INVERTED) */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between h-full">
            <p className="text-lg leading-relaxed indent-8">
              {testimonials[1].text}
            </p>
            <div>
              <div className="flex gap-1 mb-4 text-orange-500">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face"
                  alt={testimonials[1].name}
                  className="w-12 h-12 rounded-full object-cover bg-gray-300"
                />
                <div>
                  <h3 className="text-base font-semibold">{testimonials[1].name}</h3>
                  <p className="text-sm text-gray-600">{testimonials[1].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vierte Card - Viola (Photo/Stars on top) */}
          <div className="bg-white rounded-3xl p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
                  alt={testimonials[2].name}
                  className="w-12 h-12 rounded-full object-cover bg-gray-300"
                />
                <div>
                  <h3 className="text-base font-semibold">{testimonials[2].name}</h3>
                  <p className="text-sm text-gray-600">{testimonials[2].role}</p>
                </div>
              </div>
              <div className="flex gap-1 text-orange-500">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
            </div>
            <p className="text-lg leading-relaxed indent-8">
              {testimonials[2].text}
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-6xl font-bold mb-2">{toolsCount}+</h3>
            <p className="text-gray-600">Tools designed</p>
          </div>
          <div>
            <h3 className="text-6xl font-bold mb-2">{projectsCount}+</h3>
            <p className="text-gray-600">Successful<br />projects launched</p>
          </div>
          <div>
            <h3 className="text-6xl font-bold mb-2">{satisfactionCount}%</h3>
            <p className="text-gray-600">Client<br />satisfaction rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
