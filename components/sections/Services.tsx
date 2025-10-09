'use client'

import { motion } from 'framer-motion'

const services = [
  { number: '001', name: 'Website Design & SEO' },
  { number: '002', name: 'Full Stack & Low-Code Development' },
  { number: '003', name: 'Our Personal Tech AI' },
  { number: '004', name: 'View all' }
]

export default function Services() {
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
          className="text-center text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-16"
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
              className="flex items-center justify-between py-6 border-b border-white/20 group cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <span className="text-white/60 text-lg font-medium">
                  {service.number}
                </span>
                <span className="text-white text-2xl font-medium group-hover:translate-x-2 transition-transform">
                  {service.name}
                </span>
              </div>

              <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center group-hover:bg-white transition-all">
                <span className="text-white text-xl font-light group-hover:text-[#3AA6B9] transition-colors">
                  +
                </span>
              </div>
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
