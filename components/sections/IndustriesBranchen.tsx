'use client'

import { motion } from 'framer-motion'
import { useTranslations } from '@/hooks/useTranslations'

export default function IndustriesBranchen() {
  const t = useTranslations()
  const content = t.industriesBranchen

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header - Stats Style */}
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
              <span className="text-sm font-bold">{content.badge}</span>
            </div>

            <div>
              <h2 className="leading-[1.2] mb-4" style={{ fontSize: 'clamp(28px, 7vw, 60px)', fontWeight: 600, fontFamily: 'Inter, sans-serif', color: '#2d3436' }}>
                {content.title}
              </h2>
              <p className="text-xl" style={{ color: '#B3B4B5' }}>
                {content.subtitle}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>
              <ul className="space-y-2">
                {item.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 bg-[#3AA6B9] rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
