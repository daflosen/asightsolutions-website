'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PreFooter() {
  return (
    <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-6">

        {/* Plus Signs */}
        <div className="flex justify-between mb-16">
          <span className="text-2xl text-gray-400">+</span>
          <span className="text-2xl text-gray-400">+</span>
          <span className="text-2xl text-gray-400">+</span>
        </div>

        {/* Main Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">

          {/* Column 1: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-600 mb-4">tel: +49 151 571 65 903</p>
            <a
              href="mailto:hello@asightsolutions.com"
              className="inline-flex items-center gap-2 text-2xl font-semibold hover:opacity-70 transition-opacity"
              style={{
                textDecoration: 'underline',
                textDecorationThickness: '2px',
                textUnderlineOffset: '4px'
              }}
            >
              <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-xs">
                ✉
              </span>
              hello@asightsolutions.com
            </a>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-sm text-gray-500 mb-4">Navigation</p>
            <nav className="space-y-3">
              <Link href="#home" className="block text-xl font-medium hover:opacity-70 transition-opacity">
                Home
              </Link>
              <Link href="#about" className="block text-xl font-medium hover:opacity-70 transition-opacity">
                This is us
              </Link>
              <Link href="#projects" className="block text-xl font-medium hover:opacity-70 transition-opacity">
                Projects
              </Link>
              <Link href="#blog" className="block text-xl font-medium hover:opacity-70 transition-opacity">
                Blog
              </Link>
            </nav>
          </motion.div>

          {/* Column 3: Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-sm text-gray-500 mb-4">Social</p>
            <nav className="space-y-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xl font-medium hover:opacity-70 transition-opacity"
              >
                Twitter <span className="text-base">↗</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xl font-medium hover:opacity-70 transition-opacity"
              >
                Instagram <span className="text-base">↗</span>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xl font-medium hover:opacity-70 transition-opacity"
              >
                Dribbble <span className="text-base">↗</span>
              </a>
            </nav>
          </motion.div>

        </div>

        {/* Large Logo Bottom Right */}
        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-right">
            <h2
              className="font-bold leading-[0.9]"
              style={{
                fontSize: 'clamp(60px, 10vw, 120px)',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              asight<span style={{ fontSize: '0.6em', verticalAlign: 'super' }}>®</span>
              <br />
              Solutions
            </h2>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
