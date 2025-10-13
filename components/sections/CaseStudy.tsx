'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function CaseStudy() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Scale image down by 15% as user scrolls (1 to 0.85) - transform from bottom
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.85])

  return (
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-6">
        {/* Header Text */}
        <div className="mb-16 flex items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <p className="text-sm text-gray-500">
              <span className="font-bold">asightsolutions®</span><br />
              Every project we take on is<br />
              designed for long-term success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <div className="max-w-4xl">
              <h2 className="text-[32px] md:text-[40px] font-semibold mb-8 leading-[1.2]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
                <span className="text-gray-400">Our approach is straight forward: </span><span style={{ color: '#2d3436' }}>we focus on precisely targeting functionality ensuring that every digital solution serves a clear purpose without unnecessary complexity and overhead.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We don't overpromise or use flashy marketing language. We simply build well-designed, functional tools and strategies that help businesses succeed.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Main Container */}
        <div className="relative h-[600px] rounded-3xl mt-32">

          {/* Background - Full Size with gradient */}
          <div
            className="absolute inset-0 rounded-3xl z-[1]"
            style={{
              background: 'linear-gradient(to right, #3AA6B9 60%, #f5f5f5 60%)'
            }}
          />

          {/* Woman Image Container - extends beyond container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute z-[2]"
            style={{
              scale: imageScale,
              transformOrigin: 'bottom center',
              width: '50%',
              left: '15%',
              bottom: 0,
              height: '900px'
            }}
          >
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0"
                style={{
                  maskImage: 'linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.3) 5%, rgba(0, 0, 0, 0.7) 15%, black 25%)',
                  WebkitMaskImage: 'linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.3) 5%, rgba(0, 0, 0, 0.7) 15%, black 25%)'
                }}
              >
                <Image
                  src="/images/Sophie_Gehlert_asightsolutions_WOBG.png"
                  alt="Sophie Gehlert"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Text and Cards Container - on top */}
          <div className="absolute inset-0 z-[3]">

          {/* Case Study - Top Left */}
          <div className="absolute left-0 top-0 w-[60%] p-8 lg:p-12 text-white z-[3] pointer-events-none">
            <div className="pointer-events-auto">
              <p className="text-sm mb-2 opacity-90 font-bold">Case study (SEO)</p>
              <p className="text-xs opacity-70">
                ERP Customization,<br />
                Frontend Optimization,
              </p>
            </div>
          </div>

          {/* Plus Button - Top Right */}
          <div className="absolute right-[40%] top-8 lg:top-12 text-white z-[3]">
            <button className="text-2xl hover:opacity-80 transition-opacity pointer-events-auto">
              +
            </button>
          </div>

          {/* asightsolutions - Center */}
          <div className="absolute left-0 top-0 w-[60%] h-full p-8 lg:p-12 text-white z-[3] pointer-events-none flex flex-col justify-center">
            <h2 className="text-[48px] md:text-[56px] font-semibold leading-[1.2] text-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
              asightsolutions®
            </h2>
          </div>

          {/* Description - Bottom Right in Teal Box */}
          <div className="absolute left-0 bottom-0 w-[60%] p-8 lg:p-12 text-white z-[3] pointer-events-none flex justify-between items-end">
            <a href="https://re-automation.net" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 transition-opacity pointer-events-auto underline">
              RE Automation Website →
            </a>
            <div className="flex flex-col items-end text-right">
              <p className="text-base mb-2 opacity-90">
                <span className="font-semibold">From Site Audits, Keyword Strategy and Backlink Analytics...</span>
              </p>
              <p className="text-sm opacity-80">...we do it all</p>
            </div>
          </div>

          {/* FLOATING CARDS - Right Side (Contained within 600px height) */}
          <div className="absolute right-4 lg:right-8 w-[45%] lg:w-[40%] top-6 lg:top-8 bottom-6 overflow-hidden pr-2 space-y-3">

            {/* Performance Boost Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-3 lg:p-4 shadow-xl"
            >
              <p className="text-[9px] text-gray-500 mb-1">Performance Boost:</p>
              <h4 className="text-base lg:text-lg font-bold mb-1">Top Ten Keyword Positionings</h4>
              <p className="text-xl lg:text-2xl font-bold mb-1">+20,</p>
              <p className="text-base lg:text-lg font-bold">Bounce rate -23%</p>

              <div className="mt-2">
                <p className="text-[9px] text-gray-500 mb-1">Conversion Rate Improvement:</p>
                <p className="text-base lg:text-lg font-bold">2.2% → 5.9%</p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2 lg:gap-3">
              {/* Pagehealth Score */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center"
              >
                <div className="text-center mb-2">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-4 lg:border-6 border-gray-200 flex items-center justify-center mx-auto">
                    <span className="text-lg lg:text-xl font-bold">99</span>
                  </div>
                </div>
                <p className="text-[9px] text-gray-500 text-center">Pagehealth score</p>
              </motion.div>

              {/* Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-3 shadow-lg"
              >
                <div className="flex items-end justify-between gap-1 h-16 lg:h-20 mb-2">
                  <div className="flex flex-col justify-end items-center flex-1">
                    <div className="bg-gray-200 w-full h-3 rounded-t" />
                  </div>
                  <div className="flex flex-col justify-end items-center flex-1">
                    <div className="bg-gray-200 w-full h-6 rounded-t" />
                  </div>
                  <div className="flex flex-col justify-end items-center flex-1">
                    <div className="bg-gray-200 w-full h-10 rounded-t" />
                  </div>
                  <div className="flex flex-col justify-end items-center flex-1 relative">
                    <div className="bg-[#3AA6B9] w-full h-full rounded-t" />
                    <div className="absolute -top-3 bg-[#3AA6B9] text-white text-[8px] px-1 py-0.5 rounded">
                      +3k
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm lg:text-base font-bold">38K</p>
                    <p className="text-[8px] text-gray-500">Visits</p>
                  </div>
                  <div className="bg-[#3AA6B9] text-white text-[8px] px-1.5 py-0.5 rounded-full">
                    +80%
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-3 lg:p-4 shadow-xl"
            >
              <div className="flex items-start gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xs">★</span>
                ))}
              </div>
              <p className="text-[10px] text-gray-700 mb-2 leading-relaxed">
                "Thanks to the strong methodological approach we were able to increase our e-commerce return by 230%"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-300" />
                <p className="text-[10px] text-gray-600">Jürgen Rentscher</p>
              </div>
            </motion.div>

          </div>

          </div>

        </div>
      </div>
    </section>
  )
}
