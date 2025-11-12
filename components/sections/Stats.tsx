'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslations } from '@/hooks/useTranslations'

export default function Stats() {
  const t = useTranslations()

  return (
    <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-24 mb-12">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 bg-gray-900 rounded-full inline-flex items-center justify-center text-white text-sm font-bold">
                +
              </span>
              <span className="text-sm font-bold">{t.stats.badge}</span>
            </div>

            <h2 className="leading-[1.2]" style={{ fontSize: 'clamp(28px, 7vw, 60px)', fontWeight: 600, fontFamily: 'Inter, sans-serif', color: '#2d3436' }}>
              {t.stats.mainTitle}<br className="hidden md:block" />
              <span style={{ color: '#B3B4B5' }}>{t.stats.mainTitleGray}</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl h-96 md:h-[500px] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/optimized/Laptop_Oben.webp"
              alt="Development workspace"
              fill
              className="object-cover"
              priority
              quality={85}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl mb-12" style={{ color: '#2d3436' }}>
              {t.stats.description}<br />
              {t.stats.descriptionBr} <span style={{ color: '#B3B4B5' }}>{t.stats.descriptionGray}</span>
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <span className="text-sm text-gray-500">01</span>
                <h3 className="text-6xl font-bold my-4">{t.stats.stat1Value}</h3>
                <p>
                  {t.stats.stat1Label}
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-500">02</span>
                <h3 className="text-6xl font-bold my-4">{t.stats.stat2Value}</h3>
                <p>
                  {t.stats.stat2Label}
                </p>
              </div>
            </div>

            {/* Company Logos */}
            <div className="flex items-center gap-8 opacity-60">
              <div className="relative h-8 w-24">
                <Image
                  src="/images/optimized/RmentiX_Logo.webp"
                  alt="RE Automation"
                  fill
                  className="object-contain filter grayscale"
                  quality={85}
                />
              </div>
              <div className="relative h-8 w-24">
                <Image
                  src="/images/Logo_Brusa.svg"
                  alt="Brusa"
                  fill
                  className="object-contain filter grayscale"
                />
              </div>
              <div className="relative h-8 w-24">
                <Image
                  src="/images/Logo_JR_Automation.svg"
                  alt="JR Automation"
                  fill
                  className="object-contain filter grayscale"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
