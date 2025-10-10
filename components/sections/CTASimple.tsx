'use client'

import { motion } from 'framer-motion'

export default function CTASimple() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#3AA6B9] to-[#06B6D4]">
      <div className="max-w-7xl mx-auto px-8 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[48px] md:text-[56px] font-semibold mb-8 leading-[1.2]"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        >
          Let&apos;s talk.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl mb-8"
        >
          Tell us about your project—whether it&apos;s process<br />
          optimization, UX/UI or your digital presence on the web.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="mb-2 text-lg">hello@asightsolutions.com</p>
          <p className="text-lg">+49 151 571 65 903</p>
        </motion.div>
      </div>
    </section>
  )
}
