'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PreFooter() {
  return (
    <section className="py-20 relative" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-6">

        {/* Main Content - Flex Layout */}
        <div className="flex flex-col md:flex-row gap-12 mb-20 relative">

          {/* Column 1: Contact Info */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Plus Sign above content */}
            <span className="absolute left-0 -top-12 text-2xl text-gray-400">+</span>

            <p className="text-sm text-black mb-4">tel: +49 151 571 65 903</p>
            <a
              href="mailto:hello@asightsolutions.com"
              className="inline-flex items-center gap-2 text-2xl font-semibold text-black hover:opacity-70 transition-opacity"
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

          {/* Spacer to push nav/social to align with logo */}
          <div className="flex-1"></div>

          {/* Column 2 & 3: Navigation and Social - Grouped closer together, aligned with logo */}
          <div className="flex gap-20">
            {/* Navigation */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {/* Plus Sign above content */}
              <span className="absolute left-0 -top-12 text-2xl text-gray-400">+</span>

              <p className="text-sm text-black mb-6">Navigation</p>
              <nav className="space-y-4">
                <Link href="#home" className="block text-2xl font-medium text-black hover:opacity-70 transition-opacity">
                  Home
                </Link>
                <Link href="#about" className="block text-2xl font-medium text-black hover:opacity-70 transition-opacity">
                  This is us
                </Link>
                <Link href="#projects" className="block text-2xl font-medium text-black hover:opacity-70 transition-opacity">
                  Projects
                </Link>
                <Link href="#blog" className="block text-2xl font-medium text-black hover:opacity-70 transition-opacity">
                  Blog
                </Link>
              </nav>
            </motion.div>

            {/* Social */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Plus Sign above content */}
              <span className="absolute left-0 -top-12 text-2xl text-gray-400">+</span>

              <p className="text-sm text-black mb-6">Social</p>
              <nav className="space-y-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-2xl font-medium text-black hover:opacity-70 transition-opacity"
                >
                  Twitter <span className="text-lg">↗</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-2xl font-medium text-black hover:opacity-70 transition-opacity"
                >
                  Instagram <span className="text-lg">↗</span>
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-2xl font-medium text-black hover:opacity-70 transition-opacity"
                >
                  Dribbble <span className="text-lg">↗</span>
                </a>
              </nav>
            </motion.div>
          </div>

        </div>

        {/* Large Logo Bottom Right */}
        <motion.div
          className="flex justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <h2
              className="font-bold leading-[0.85] text-black"
              style={{
                fontFamily: 'Inter, sans-serif'
              }}
            >
              <span style={{ fontSize: 'clamp(100px, 14vw, 200px)' }}>
                asight<span style={{ fontSize: '0.6em', verticalAlign: 'super' }}>®</span>
              </span>
              <br />
              <span style={{ fontSize: 'clamp(30px, 4vw, 60px)' }}>
                solutions
              </span>
            </h2>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
