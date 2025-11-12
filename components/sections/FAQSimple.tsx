'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslations } from '@/hooks/useTranslations'

export default function FAQSimple() {
  const t = useTranslations()
  const faqs = t.faq.items
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[350px_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[48px] md:text-[80px] lg:text-[120px] xl:text-[144px] mb-4 leading-[0.85]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#000' }}>{t.faq.title}</h2>
            <p className="text-sm text-gray-500 leading-relaxed" style={{ fontWeight: 400 }}>
              {t.faq.subtitle}
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left cursor-pointer group min-h-[48px] py-2"
                >
                  <span className="text-base pr-6" style={{ fontWeight: 600 }}>
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <div
                      className={`w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-base font-bold transition-transform ${
                        activeIndex === index ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </div>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-[500px] pt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600" style={{ fontWeight: 400, fontSize: '14px' }}>{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
