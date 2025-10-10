'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    number: '001',
    name: 'Website Design & SEO',
    description: 'Modern, responsive websites optimized for search engines. We create stunning digital experiences that drive traffic and convert visitors into customers.'
  },
  {
    number: '002',
    name: 'Full Stack & Low-Code Development',
    description: 'End-to-end application development using cutting-edge technologies and low-code platforms. From concept to deployment, we build scalable solutions tailored to your needs.'
  },
  {
    number: '003',
    name: 'Our Personal Tech AI',
    description: 'Custom AI solutions that automate workflows, enhance decision-making, and provide intelligent insights. Leverage the power of AI to transform your business operations.'
  },
  {
    number: '004',
    name: 'View all',
    description: 'Explore our complete portfolio of digital services and solutions. From consulting to implementation, we offer comprehensive support for your digital transformation journey.'
  }
]

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleService = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-[#3AA6B9] relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="grain-overlay" style={{ opacity: 0.1 }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* "What we do" Label - Top Left */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white/90">
            <span className="w-6 h-6 bg-white rounded-full inline-flex items-center justify-center text-[#3AA6B9] text-sm font-bold">
              +
            </span>
            What we do
          </span>
        </motion.div>

        {/* "Services (4)" - Centered Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[48px] md:text-[56px] font-semibold text-white mb-16 leading-[1.2]"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          Services (4)
        </motion.h2>

        {/* Service List - Full Width */}
        <div className="max-w-5xl mx-auto mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-white/20"
            >
              <div
                onClick={() => toggleService(index)}
                className="flex items-center justify-between py-6 group cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span className="text-white/60 text-lg font-medium">
                    {service.number}
                  </span>
                  <span className="text-white text-2xl font-medium group-hover:translate-x-2 transition-transform">
                    {service.name}
                  </span>
                </div>

                <motion.div
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center group-hover:bg-white transition-all"
                  animate={{ rotate: expandedIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white text-xl font-light group-hover:text-[#3AA6B9] transition-colors">
                    +
                  </span>
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-20">
                      <p className="text-white/80 text-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* "Get started" Button - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <button className="px-8 py-3 bg-white text-[#3AA6B9] rounded-full font-medium hover:bg-white/90 transition-colors">
            Get started
          </button>
        </motion.div>
      </div>
    </section>
  )
}
