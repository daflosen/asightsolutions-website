'use client'

import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from '@/hooks/useTranslations'

export default function CaseStudy() {
  const t = useTranslations()
  const sectionRef = useRef<HTMLElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const isCounterInView = useInView(counterRef, { once: true, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Scale image down by 15% as user scrolls (1 to 0.85) - transform from bottom
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.85])

  // Mobile sticky photo transforms
  const mobilePhotoScale = useTransform(scrollYProgress, [0, 0.5], [0.7, 1])
  const mobilePhotoOpacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1])

  // Counter animation
  useEffect(() => {
    if (isCounterInView) {
      const controls = animate(0, 35, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest))
        }
      })
      return controls.stop
    }
  }, [isCounterInView])

  return (
    <section ref={sectionRef} className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-6">
        {/* Header Text */}
        <div className="mb-16 flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <p className="text-sm text-gray-500">
              <span className="font-bold">{t.caseStudy.badge}</span><br />
              {t.caseStudy.tagline.split('. ')[0]}.<br />
              {t.caseStudy.tagline.split('. ')[1] || 'designed for long-term success.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 lg:flex lg:justify-center"
          >
            <div className="max-w-4xl">
              <h2 className="text-[24px] md:text-[32px] lg:text-[40px] font-semibold mb-6 lg:mb-8 leading-[1.2]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
                <span className="text-gray-400">{t.caseStudy.mainHeadingGray}</span><span style={{ color: '#2d3436' }}>{t.caseStudy.mainHeadingBlack}</span>
              </h2>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                {t.caseStudy.description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Main Container - Responsive height */}
        <div className="relative h-auto md:h-[500px] lg:h-[650px] rounded-3xl mt-16 lg:mt-32">

          {/* Background - Full Size with gradient - Hidden on mobile, show on lg */}
          <div
            className="hidden lg:block absolute inset-0 rounded-3xl z-[1]"
            style={{
              background: 'linear-gradient(to right, #3AA6B9 60%, #f5f5f5 60%)'
            }}
          />

          {/* Mobile Background - Full teal */}
          <div
            className="lg:hidden absolute inset-0 rounded-3xl z-[1]"
            style={{
              background: '#3AA6B9'
            }}
          />

          {/* Woman Image Container - Hidden on mobile - Behind text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block absolute z-[2]"
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
                  src="/images/optimized/Sophie_Gehlert_asightsolutions_WOBG.webp"
                  alt="Sophie Gehlert - Senior Frontend Engineer"
                  fill
                  className="object-contain object-bottom"
                  priority
                  quality={85}
                />
              </div>
            </div>
          </motion.div>

          {/* Left Content - Large centered text - Desktop Only - In front of Sophie */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block absolute z-[4] left-0 top-0 w-[60%] h-full px-12 py-12"
          >
            <div className="h-full flex flex-col justify-between">
              {/* Top Info - Small - Top Left */}
              <div>
                <p className="text-sm mb-2 text-white opacity-90 font-bold">{t.caseStudy.caseTitle}</p>
                <p className="text-xs text-white opacity-70">
                  {t.caseStudy.caseSubtitle}
                </p>
              </div>

              {/* Large Heading - Quarter of container height */}
              <div className="flex-1 flex items-center">
                <h2
                  className="font-semibold leading-[0.85] text-white"
                  style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                    fontSize: 'clamp(27px, 4vw, 60px)'
                  }}
                >
                  {t.caseStudy.brandName}
                </h2>
              </div>

              {/* Bottom Section - Link left, Text right */}
              <div className="flex justify-between items-end">
                <a href="https://re-automation.net" target="_blank" rel="noopener noreferrer" className="text-sm text-white opacity-80 hover:opacity-100 transition-opacity underline inline-block">
                  {t.caseStudy.websiteLink}
                </a>

                {/* Right aligned multi-line text */}
                <div className="text-right text-white">
                  <p className="text-[22px] leading-tight mb-1">{t.caseStudy.performanceTitle}</p>
                  <p className="text-[22px] leading-tight mb-1">{t.caseStudy.performanceSubtitle1}</p>
                  <p className="text-[22px] leading-tight mb-2">{t.caseStudy.performanceSubtitle2}</p>
                  <p className="text-sm opacity-80">{t.caseStudy.performanceNote}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* DESKTOP LAYOUT - Right Content Panel - Stats Only */}
          <div className="hidden lg:block absolute z-[3] right-0 top-0 w-[40%] h-full px-12 py-12">
            <div className="flex flex-col justify-center h-full">

              {/* Stats Section - Larger */}
              <div className="space-y-6">

                {/* Performance Boost Card with Testimonial */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-xl flex gap-6"
                >
                  {/* Left Side - Performance Data (2/3) */}
                  <div className="flex-[2]">
                    <p className="text-xs text-gray-500 mb-2">{t.caseStudy.boostLabel}</p>
                    <h4 className="text-xl font-bold mb-2">{t.caseStudy.boostTitle}</h4>
                    <p className="text-3xl font-bold mb-2">{t.caseStudy.boostKeywords}</p>
                    <p className="text-xl font-bold mb-4">{t.caseStudy.boostBounce}</p>

                    <div className="mt-4">
                      <p className="text-xs text-gray-500 mb-2">{t.caseStudy.conversionLabel}</p>
                      <p className="text-xl font-bold">{t.caseStudy.conversionValue}</p>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="border-l border-gray-200"></div>

                  {/* Right Side - Testimonial (1/3) */}
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex items-start gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                      {t.caseStudy.testimonialText}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-300" />
                      <p className="text-xs text-gray-600">{t.caseStudy.testimonialAuthor}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Pagehealth Score */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center"
                  >
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full border-8 border-gray-200 flex items-center justify-center mx-auto mb-3">
                        <span className="text-3xl font-bold">99</span>
                      </div>
                      <p className="text-xs text-gray-500 text-center mb-3">{t.caseStudy.pagehealthLabel}</p>
                      <p className="text-xs text-gray-600 text-center leading-tight px-2">
                        {t.caseStudy.pagehealthDescription}
                      </p>
                    </div>
                  </motion.div>

                  {/* Chart */}
                  <motion.div
                    ref={counterRef}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white rounded-2xl p-6 shadow-lg flex flex-col"
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2">
                        <p className="text-4xl font-bold">
                          {displayValue}K
                        </p>
                        <span className="bg-[#3AA6B9] text-white text-xs px-3 py-1 rounded-full font-semibold">+30%</span>
                      </div>
                      <p className="text-xs text-gray-500">{t.caseStudy.visitsLabel}</p>
                    </div>

                    {/* Chart Bars */}
                    <div className="flex items-end justify-between gap-1.5" style={{ height: '120px' }}>
                      <div className="flex flex-col justify-end items-center flex-1 relative h-full">
                        <div className="bg-gray-200 w-full rounded-t flex items-end justify-center pb-1" style={{ height: '13.2%' }}>
                          <span className="text-[10px] text-gray-600 font-medium">+5k</span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-end items-center flex-1 relative h-full">
                        <div className="bg-gray-200 w-full rounded-t flex items-end justify-center pb-1" style={{ height: '18.4%' }}>
                          <span className="text-[10px] text-gray-600 font-medium">+7k</span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-end items-center flex-1 relative h-full">
                        <div className="bg-gray-200 w-full rounded-t flex items-end justify-center pb-1" style={{ height: '31.6%' }}>
                          <span className="text-[10px] text-gray-600 font-medium">+12k</span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-end items-center flex-1 relative h-full">
                        <div className="bg-gray-200 w-full rounded-t flex items-end justify-center pb-1" style={{ height: '47.4%' }}>
                          <span className="text-[10px] text-gray-600 font-medium">+18k</span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-end items-center flex-1 relative h-full">
                        <div className="bg-gray-200 w-full rounded-t flex items-end justify-center pb-1" style={{ height: '73.7%' }}>
                          <span className="text-[10px] text-gray-600 font-medium">+28k</span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-end items-center flex-1 relative h-full">
                        <div className="bg-[#3AA6B9] w-full rounded-t flex items-end justify-center pb-1" style={{ height: '100%' }}>
                          <span className="text-[10px] text-white font-semibold">+38k</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>

            </div>
          </div>

          {/* MOBILE LAYOUT - Vertical Scroll Story with Sticky Photo */}
          <div className="lg:hidden relative" style={{ minHeight: '100vh' }}>

            {/* Sticky Photo at Bottom - Scales up as you scroll */}
            <motion.div
              className="sticky bottom-0 z-[2] h-[500px] pointer-events-none"
              style={{
                y: -200,
                scale: mobilePhotoScale,
                opacity: mobilePhotoOpacity
              }}
            >
              <div className="relative w-full h-full">
                <div
                  className="absolute inset-0"
                  style={{
                    maskImage: 'linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 0.7) 25%, black 40%)',
                    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 0.7) 25%, black 40%)'
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

            {/* Scrollable Content Above Photo */}
            <div className="relative z-[3] space-y-3 pt-4 pb-[50px]">

              {/* Top Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white bg-gradient-to-b from-[#3AA6B9]/90 to-transparent backdrop-blur-sm rounded-2xl p-6"
              >
                <p className="text-sm mb-2 opacity-90 font-bold">{t.caseStudy.caseTitle}</p>
                <p className="text-xs opacity-70 mb-4">
                  {t.caseStudy.caseSubtitle}
                </p>
                <h2 className="text-[32px] font-semibold leading-[1.2] text-white mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
                  {t.caseStudy.brandName}
                </h2>
                <a href="https://re-automation.net" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 transition-opacity underline inline-block">
                  {t.caseStudy.websiteLink}
                </a>
              </motion.div>

            {/* Stats Cards - Animated on Scroll */}
            <div className="space-y-4">

            {/* Performance Boost Card with Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl flex gap-3"
            >
              {/* Left Side - Performance Data (2/3) */}
              <div className="flex-[2]">
                <p className="text-[9px] text-gray-500 mb-1">{t.caseStudy.boostLabel}</p>
                <h4 className="text-base lg:text-lg font-bold mb-1">{t.caseStudy.boostTitle}</h4>
                <p className="text-xl lg:text-2xl font-bold mb-1">{t.caseStudy.boostKeywords}</p>
                <p className="text-base lg:text-lg font-bold">{t.caseStudy.boostBounce}</p>

                <div className="mt-2">
                  <p className="text-[9px] text-gray-500 mb-1">{t.caseStudy.conversionLabel}</p>
                  <p className="text-base lg:text-lg font-bold">{t.caseStudy.conversionValue}</p>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="border-l border-gray-200"></div>

              {/* Right Side - Testimonial (1/3) */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-start gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs">★</span>
                  ))}
                </div>
                <p className="text-[10px] text-gray-700 mb-2 leading-relaxed">
                  {t.caseStudy.testimonialText}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-300" />
                  <p className="text-[10px] text-gray-600">{t.caseStudy.testimonialAuthor}</p>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* Pagehealth Score */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center"
              >
                <div className="text-center mb-3">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-8 border-gray-200 flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl lg:text-2xl font-bold">99</span>
                  </div>
                  <p className="text-[9px] text-gray-500 text-center mb-2">{t.caseStudy.pagehealthLabel}</p>
                  <p className="text-[8px] text-gray-600 text-center leading-tight px-1">
                    {t.caseStudy.pagehealthDescription}
                  </p>
                </div>
              </motion.div>

              {/* Chart */}
              <motion.div
                ref={counterRef}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg flex flex-col"
              >
                {/* Header */}
                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl lg:text-3xl font-bold">
                      {displayValue}K
                    </p>
                    <span className="bg-[#3AA6B9] text-white text-[8px] px-2 py-1 rounded-full font-semibold">+30%</span>
                  </div>
                  <p className="text-[9px] text-gray-500">{t.caseStudy.visitsLabel}</p>
                </div>

                {/* Chart Bars - Heights scaled to fit card better */}
                <div className="flex items-end justify-between gap-1" style={{ height: '100px' }}>
                  <div className="flex flex-col justify-end items-center flex-1 relative h-full">
                    <div className="bg-gray-200 w-full rounded-t flex items-end justify-center pb-1" style={{ height: '13.2%' }}>
                      <span className="text-[9px] text-gray-600 font-medium">+5k</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-center flex-1 relative h-full">
                    <div className="bg-gray-200 w-full rounded-t flex items-end justify-center pb-1" style={{ height: '18.4%' }}>
                      <span className="text-[9px] text-gray-600 font-medium">+7k</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-center flex-1 relative h-full">
                    <div className="bg-gray-200 w-full rounded-t flex items-end justify-center pb-1" style={{ height: '31.6%' }}>
                      <span className="text-[9px] text-gray-600 font-medium">+12k</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-center flex-1 relative h-full">
                    <div className="bg-gray-200 w-full rounded-t flex items-end justify-center pb-1" style={{ height: '47.4%' }}>
                      <span className="text-[9px] text-gray-600 font-medium">+18k</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-center flex-1 relative h-full">
                    <div className="bg-gray-200 w-full rounded-t flex items-end justify-center pb-1" style={{ height: '73.7%' }}>
                      <span className="text-[9px] text-gray-600 font-medium">+28k</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-center flex-1 relative h-full">
                    <div className="bg-[#3AA6B9] w-full rounded-t flex items-end justify-center pb-1" style={{ height: '100%' }}>
                      <span className="text-[9px] text-white font-semibold">+38k</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          </div>

          </div>

        </div>
      </div>
    </section>
  )
}
