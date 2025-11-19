'use client'

import { motion } from 'framer-motion'
import { useTranslations } from '@/hooks/useTranslations'

export default function BAFAFunding() {
  const t = useTranslations()
  const funding = t.funding

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F5F5F5' }}>
      {/* Grain Overlay */}
      <div className="grain-overlay" style={{ opacity: 0.03 }} />

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
                €
              </span>
              <span className="text-sm font-bold">{funding.badge}</span>
            </div>

            <div>
              <h2 className="leading-[1.2] mb-4" style={{ fontSize: 'clamp(28px, 7vw, 60px)', fontWeight: 600, fontFamily: 'Inter, sans-serif', color: '#2d3436' }}>
                {funding.title}
              </h2>
              <p className="text-xl" style={{ color: '#B3B4B5' }}>
                {funding.subtitle}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="prose max-w-4xl mb-16"
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            {funding.intro}
          </p>
        </motion.div>

        {/* Funding Programs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            {funding.programsTitle}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {funding.programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h4 className="text-xl font-semibold text-[#3AA6B9] mb-4">
                  {program.name}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#3AA6B9] mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Service */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-[#3AA6B9] to-[#2C8A94] rounded-3xl p-8 md:p-12 text-white mb-12"
        >
          <h3 className="text-3xl font-semibold mb-6">
            {funding.ourService.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {funding.ourService.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-white/90 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            {funding.benefits.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {funding.benefits.items.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                <span className="text-[#3AA6B9] text-xl">✓</span>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-gray-100 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {funding.example.title}
          </h3>
          <p className="text-gray-700 mb-4">{funding.example.description}</p>
          <ul className="space-y-2 mb-4">
            {funding.example.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <span className="text-[#3AA6B9]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xl font-semibold text-[#3AA6B9]">
            {funding.example.result}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <p className="text-lg text-gray-700 mb-6">
            {funding.cta.text}
          </p>
          <button className="px-8 py-4 bg-[#3AA6B9] text-white rounded-full font-semibold hover:bg-[#2C8A94] transition-colors text-lg">
            {funding.cta.button}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
