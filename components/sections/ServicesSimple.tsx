'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ServicesSimple() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-gray-900">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="text-sm text-gray-500">● Services</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[48px] md:text-[56px] font-semibold mb-12 leading-[1.2]"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#2d3436' }}
            >
              Services.
            </motion.h2>

            <div className="space-y-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-900">Process Digitalization & Tools</h3>
                <p className="text-sm text-gray-600">Streamline your workflows with custom digital solutions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-900">Web Design & SEO</h3>
                <p className="text-sm text-gray-600">Beautiful, optimized websites that drive results</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-900">Full Stack & Low Code Development</h3>
                <p className="text-sm text-gray-600">...and Trusted even :)</p>
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#3AA6B9] text-white px-8 py-3 rounded-full hover:bg-[#2d8a9a] transition-colors font-medium"
            >
              All services
            </motion.button>
          </div>

          {/* Right Side - Laptop Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/optimized/Laptop_Oben.webp"
                alt="Development workspace"
                fill
                className="object-cover"
                priority
                quality={85}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
