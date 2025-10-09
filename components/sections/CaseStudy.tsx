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

  // Scale image down by 7% as user scrolls (1 to 0.93) - transform from bottom
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.93])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mb-16"
        >
          <p className="text-sm text-gray-500 mb-8">
            asightsolutions®<br />
            Every project we take on is<br />
            designed for long-term success.
          </p>
          <h2 className="text-5xl font-normal mb-8 leading-tight text-gray-900">
            Our approach is straight forward: <span className="font-semibold">we focus on precisely targeting functionality</span> ensuring that every digital solution serves a clear purpose without unnecessary complexity and overhead.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We don't overpromise or use flashy marketing language. We simply build well-designed, functional tools and strategies that help businesses succeed.
          </p>
        </motion.div>

        {/* Main Container */}
        <div className="relative h-[600px]">

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
              transformOrigin: 'bottom left',
              width: '50%',
              left: '5%',
              bottom: 0,
              height: '900px'
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/Sophie_Gehlert_asightsolutions_WOBG.png"
                alt="Sophie Gehlert"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </motion.div>

          {/* Text and Cards Container - on top */}
          <div className="absolute inset-0 z-[3]">

          {/* Text Overlay on Teal Background (Top Left) */}
          <div className="absolute left-0 top-0 w-[60%] p-12 text-white z-[3] pointer-events-none">
            <div className="mb-8 pointer-events-auto">
              <div className="flex items-start justify-between mb-6 max-w-xl">
                <div>
                  <p className="text-sm mb-2 opacity-90">Case study (SEO)</p>
                  <p className="text-xs opacity-70">
                    ERP Customization,<br />
                    Frontend Optimization,
                  </p>
                </div>
                <button className="text-2xl w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                  +
                </button>
              </div>
            </div>

            {/* Large Title */}
            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-none">
                asightsolutions®
              </h2>
            </div>

            {/* Description */}
            <div className="max-w-md">
              <p className="text-base mb-3 opacity-90">
                <span className="font-semibold">From Site Audits, Keyword Strategy and Backlink Analytics...</span>
              </p>
              <div className="flex items-center gap-3">
                <p className="text-sm opacity-80">RE Automation Website</p>
                <span className="text-sm opacity-60">...we do it all.</span>
                <span>→</span>
              </div>
            </div>
          </div>

          {/* FLOATING CARDS - Right Side (OVER the woman) */}
          <div className="lg:absolute lg:right-[5%] lg:w-[45%] lg:top-[10%] mt-8 lg:mt-0 space-y-6">

            {/* Performance Boost Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <p className="text-xs text-gray-500 mb-3">Performance Boost:</p>
              <h4 className="text-3xl font-bold mb-2">Top Ten Keyword Positionings</h4>
              <p className="text-4xl font-bold mb-1">+20,</p>
              <p className="text-2xl font-bold">Bounce rate -23%</p>

              <div className="mt-6">
                <p className="text-xs text-gray-500 mb-2">Conversion Rate Improvement:</p>
                <p className="text-3xl font-bold">2.2% → 5.9%</p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Pagehealth Score */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-xl flex flex-col items-center justify-center"
              >
                <div className="text-center mb-3">
                  <div className="w-20 h-20 rounded-full border-8 border-gray-200 flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold">99</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-center">Pagehealth score</p>
              </motion.div>

              {/* Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-4 shadow-xl"
              >
                <div className="flex items-end justify-between gap-1 h-24 mb-2">
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
                    <div className="absolute -top-4 bg-[#3AA6B9] text-white text-[9px] px-1 py-0.5 rounded">
                      +3k
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold">38K</p>
                    <p className="text-[9px] text-gray-500">Visits</p>
                  </div>
                  <div className="bg-[#3AA6B9] text-white text-[9px] px-2 py-0.5 rounded-full">
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
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex items-start gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4">
                "Thanks to the strong methodological approach we were able to increase our e-commerce return by 230%"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-300" />
                <p className="text-sm text-gray-600">Jürgen Rentscher</p>
              </div>
            </motion.div>

          </div>

          </div>

        </div>
      </div>
    </section>
  )
}
