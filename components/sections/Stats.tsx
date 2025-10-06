'use client'

import { motion } from 'framer-motion'

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <span className="text-sm">● Why choose us</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-12 leading-tight">
            Proven results for every project,<br />
            with a focus on precision and<br />
            functionality.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-96 md:h-[500px]"
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-8">
              No overhead, just tools precisely targeting your<br />
              very individual processual needs.
            </h3>
            <p className="text-gray-600 mb-12">
              Thoughtful, powerful<br />
              and user centered tools that make your work easier.
            </p>

            <div className="grid grid-cols-2 gap-8">
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
