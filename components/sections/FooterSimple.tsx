'use client'

import { motion } from 'framer-motion'

export default function FooterSimple() {
  return (
    <footer className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-light mb-4">asight®</h3>
            <p className="text-sm opacity-70">Solutions</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Process Digitalization</li>
              <li>Web Design</li>
              <li>SEO Optimization</li>
              <li>Full Stack Development</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>About Us</li>
              <li>Case Studies</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <span className="w-8 h-8 bg-white/10 rounded-full"></span>
              <span className="w-8 h-8 bg-white/10 rounded-full"></span>
              <span className="w-8 h-8 bg-white/10 rounded-full"></span>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm opacity-70">
            © 2025 asightsolutions®. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
