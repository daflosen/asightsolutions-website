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

  // Scale image down by 7% as user scrolls (1 to 0.93)
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.93])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
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

        {/* Main Case Study Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Case Study Card with Sophie */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[700px]"
          >
            {/* Teal Background Card - positioned behind and lower */}
            <div className="absolute left-0 right-0 bottom-0 top-[80px] rounded-3xl bg-gradient-to-br from-[#3AA6B9] to-[#2C8A94]">
              {/* Top Content */}
              <div className="absolute top-8 left-8 z-10">
                <p className="text-white text-sm mb-2 opacity-90">Case study (SEO)</p>
                <p className="text-white text-xs opacity-70">
                  ERP Customization,<br />
                  Frontend Optimization,
                </p>
              </div>

              {/* Plus Icon */}
              <button className="absolute top-8 right-8 z-10 text-white text-2xl w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors">
                +
              </button>

              {/* asightsolutions® in center-left - reaches to middle */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 pr-4" style={{ maxWidth: '50%' }}>
                <h2 className="text-white font-light leading-none" style={{ fontSize: 'min(6.5vw, 80px)' }}>
                  asightsolutions®
                </h2>
              </div>

              {/* Bottom Right Content */}
              <div className="absolute bottom-8 right-8 z-10 text-right max-w-[280px]">
                <p className="text-white text-sm mb-3 opacity-90">
                  <span className="font-semibold">From Site Audits, Keyword<br />
                  Strategy and Backlink<br />
                  Analytics...</span>
                </p>
                <div className="flex items-center justify-end gap-3 text-white">
                  <p className="text-xs opacity-80">RE Automation Website</p>
                  <span className="text-xs opacity-60">...we do it all.</span>
                  <span>→</span>
                </div>
              </div>
            </div>

            {/* Sophie Image - OVER the card, positioned right (2/3) */}
            <motion.div
              className="absolute z-20"
              style={{
                scale: imageScale,
                left: '33%',
                right: '-5%',
                top: '0',
                height: '700px'
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
                {/* Bottom Fade Out */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#2C8A94] via-[#2C8A94]/50 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Stats Grid */}
          <div className="grid gap-6">
            {/* Performance Boost */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8"
            >
              <p className="text-xs text-gray-500 mb-3">Performance Boost:</p>
              <h4 className="text-3xl font-bold mb-2">Top Ten Keyword Positionings</h4>
              <p className="text-4xl font-bold mb-1">+20,</p>
              <p className="text-2xl font-bold">Bounce rate -23%</p>

              <div className="mt-6">
                <p className="text-xs text-gray-500 mb-2">Conversion Rate Improvement:</p>
                <p className="text-3xl font-bold">2.2% → 5.9%</p>
              </div>

              {/* Testimonial */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-start gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  "Thanks to the strong methodological approach we were able to increase our e-commerce return by 230%"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-300" />
                  <p className="text-xs text-gray-600">Jürgen Rentscher</p>
                </div>
              </div>
            </motion.div>

            {/* Pagehealth Score */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 flex items-center justify-between"
            >
              <div>
                <p className="text-xs text-gray-500 mb-2">Pagehealth score</p>
                <p className="text-sm text-gray-600">
                  We prioritize performance without<br />
                  sacrificing visual appeal or functionality.
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full border-8 border-gray-200 flex items-center justify-center">
                  <span className="text-3xl font-bold">99</span>
                </div>
              </div>
            </motion.div>

            {/* Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8"
            >
              <div className="flex items-end justify-between gap-2 h-32">
                <div className="flex flex-col justify-end items-center flex-1">
                  <div className="bg-gray-200 w-full h-4 rounded-t" />
                  <span className="text-xs text-gray-500 mt-2">Dec</span>
                </div>
                <div className="flex flex-col justify-end items-center flex-1">
                  <div className="bg-gray-200 w-full h-8 rounded-t" />
                  <span className="text-xs text-gray-500 mt-2">Jan</span>
                </div>
                <div className="flex flex-col justify-end items-center flex-1">
                  <div className="bg-gray-200 w-full h-12 rounded-t" />
                  <span className="text-xs text-gray-500 mt-2">Feb</span>
                </div>
                <div className="flex flex-col justify-end items-center flex-1">
                  <div className="bg-gray-200 w-full h-16 rounded-t" />
                  <span className="text-xs text-gray-500 mt-2">Feb</span>
                </div>
                <div className="flex flex-col justify-end items-center flex-1">
                  <div className="bg-gray-200 w-full h-20 rounded-t" />
                  <span className="text-xs text-gray-500 mt-2">Feb</span>
                </div>
                <div className="flex flex-col justify-end items-center flex-1 relative">
                  <div className="bg-[#3AA6B9] w-full h-full rounded-t" />
                  <div className="absolute -top-6 bg-[#3AA6B9] text-white text-xs px-2 py-1 rounded">
                    +3k
                  </div>
                  <span className="text-xs text-gray-500 mt-2">Mar</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">38K</p>
                  <p className="text-xs text-gray-500">Quarterly visits</p>
                </div>
                <div className="bg-[#3AA6B9] text-white text-xs px-3 py-1 rounded-full">
                  +80%
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
