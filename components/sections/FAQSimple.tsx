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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[48px] md:text-[56px] font-semibold mb-8 leading-[1.2]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#2d3436' }}>FAQ.</h2>
            <p className="text-xl text-gray-600">
              Got questions? We&apos;ve got answers. Here&apos;s<br />
              everything you need to know about working with us.
            </p>
          </motion.div>

          <div>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-200 py-8"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center text-left cursor-pointer group"
                >
                  <span className="text-lg font-medium group-hover:text-[#3AA6B9] transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`text-2xl font-light transition-transform ${
                      activeIndex === index ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-[500px] pt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
