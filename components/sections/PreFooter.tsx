'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PreFooter() {
  return (
    <section className="py-20 relative" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-6">

        {/* Plus Signs Row - All on same vertical height */}
        <div className="flex justify-between mb-12 relative">
          <span className="text-[32px] font-thin opacity-30 text-black">+</span>
          <div className="flex gap-20 absolute right-0">
            <span className="text-[32px] font-thin opacity-30 text-black">+</span>
            <span className="text-[32px] font-thin opacity-30 text-black">+</span>
          </div>
        </div>

        {/* Main Content - Contact on left, Nav/Social on right aligned with logo */}
        <div className="flex justify-between mb-20">

          {/* Column 1: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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

          {/* Navigation and Social - Aligned with logo (right side) */}
          <div className="flex gap-20">
            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
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
