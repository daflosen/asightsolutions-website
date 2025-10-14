'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'How long does it take to build my digital solution?',
    answer: 'Typically, projects take 4-12 weeks depending on complexity and scope. We\'ll provide a detailed timeline during our initial consultation.'
  },
  {
    question: 'Do you offer custom websites or use templates?',
    answer: 'We create fully custom solutions tailored to your specific needs and brand identity. No templates - everything is built from scratch.'
  },
  {
    question: 'What\'s included in your SEO services?',
    answer: 'Our SEO services include keyword research, on-page optimization, technical SEO, content strategy, and monthly performance reports.'
  },
  {
    question: 'How come you are willing to teach us how to do all this by ourselves?',
    answer: 'We believe in empowering our clients. By teaching you the fundamentals, we create long-term partnerships and help you maintain and grow your digital presence independently.'
  },
  {
    question: 'Can you redesign my existing processes taking into account the given infrastructure?',
    answer: 'Absolutely! We specialize in optimizing existing workflows and processes while working within your current infrastructure constraints.'
  },
  {
    question: 'How do I get started?',
    answer: 'Simply reach out via email or phone. We\'ll schedule a free consultation to discuss your project and provide a custom proposal.'
  }
]

export default function FAQSimple() {
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
            <h2 className="text-[144px] mb-4 leading-[0.85]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#000' }}>FAQ.</h2>
            <p className="text-sm text-gray-500 leading-relaxed" style={{ fontWeight: 400 }}>
              Got questions? We&apos;ve got answers. Here&apos;s everything you need to know about working with us.
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
                  className="w-full flex justify-between items-center text-left cursor-pointer group"
                >
                  <span className="text-base pr-6" style={{ fontWeight: 600 }}>
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <div
                      className={`w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold transition-transform ${
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
