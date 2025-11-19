'use client'

import { motion } from 'framer-motion'
import { useTranslations } from '@/hooks/useTranslations'

export default function ToolsMethoden() {
  const t = useTranslations()
  const content = t.toolsMethoden

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-600">
            <span className="w-6 h-6 bg-[#3AA6B9] rounded-full inline-flex items-center justify-center text-white text-sm font-bold">
              +
            </span>
            {content.badge}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-[36px] md:text-[48px] font-semibold text-gray-900 mb-4 leading-tight">
            {content.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Method Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#3AA6B9] rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-xl font-bold">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
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
