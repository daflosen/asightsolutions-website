'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Stats() {
  return (
    <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="w-6 h-6 bg-gray-900 rounded-full inline-flex items-center justify-center text-white text-sm font-bold">
              +
            </span>
            <span className="text-sm font-bold">Why choose us</span>
          </div>
          <h2 className="text-[48px] md:text-[56px] font-semibold mb-12 leading-[1.2]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', color: '#2d3436' }}>
            Proven results for every project,<br />
            <span style={{ color: '#B3B4B5' }}>with a focus on precision and<br />
            functionality.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl h-96 md:h-[500px] overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/Laptop_Oben.jpg"
              alt="Development workspace"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl mb-12" style={{ color: '#2d3436' }}>
              No overhead, just tools precisely targeting your<br />
              very individual processual needs. <span style={{ color: '#B3B4B5' }}>Thoughtful, powerful and user centered tools that make your work easier.</span>
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <span className="text-sm text-gray-500">01</span>
                <h3 className="text-6xl font-bold my-4">50+</h3>
                <p>
                  Successful projects<br />
                  completed
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-500">02</span>
                <h3 className="text-6xl font-bold my-4">98%</h3>
                <p>
                  Customer<br />
                  satisfaction rate
                </p>
              </div>
            </div>

            {/* Company Logos */}
            <div className="flex items-center gap-8 opacity-60">
              <div className="relative h-8 w-24">
                <Image
                  src="/images/RmentiX_Logo.jpg"
                  alt="RE Automation"
                  fill
                  className="object-contain filter grayscale"
                />
              </div>
              <div className="relative h-8 w-24">
                <Image
                  src="/images/Logo_Brusa.svg"
                  alt="Brusa"
                  fill
                  className="object-contain filter grayscale"
                />
              </div>
              <div className="relative h-8 w-24">
                <Image
                  src="/images/Logo_JR_Automation.svg"
                  alt="JR Automation"
                  fill
                  className="object-contain filter grayscale"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
