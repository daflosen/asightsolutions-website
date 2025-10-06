'use client'

import { motion } from 'framer-motion'

const services = [
  'Website Design & SEO',
  'Full Stack & Low-Code Development',
  'Our Personal Tech AI',
  'View all'
]

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#3AA6B9] to-[#06B6D4] relative overflow-hidden">
      {/* Grain Overlay */}
      <div className="grain-overlay" style={{ opacity: 0.1 }} />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-white/80 mb-8">
                <span className="w-6 h-6 bg-white rounded-full inline-flex items-center justify-center text-[#3AA6B9] text-sm font-bold">
                  +
                </span>
                Services
              </span>
            </div>

            <h2 className="text-7xl md:text-8xl font-bold text-white mb-6">
              Services.
            </h2>

            <p className="text-white/90 text-lg mb-8">
              Perfectly tailored towards<br />
              your digital needs.
            </p>
          </motion.div>

          {/* Right Side - Services List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="text-white/60 text-sm font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-white text-xl font-medium group-hover:translate-x-2 transition-transform">
                    {service}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all">
                  <span className="text-white text-xl font-light group-hover:text-[#3AA6B9]">+</span>
                </div>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 px-8 py-3 bg-white text-[#3AA6B9] rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              Get in touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
