'use client'

import { motion } from 'framer-motion'

export default function ServicesSimple() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-sm opacity-70">● Services</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl lg:text-8xl font-light mb-12"
        >
          Services.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-medium mb-2">Process Digitalization & Tools</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-medium mb-2">Web Design & SEO</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-medium mb-2">Full Stack & Low Code Development</h3>
            <p className="text-sm opacity-70">...and Trusted even :)</p>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white text-cyan-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium"
        >
          All services
        </motion.button>
      </div>
    </section>
  )
}
