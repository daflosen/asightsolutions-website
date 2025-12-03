'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ServicesAnimationWrapperProps {
  children: ReactNode
  delay?: number
}

/**
 * Client Component for Framer Motion animations
 * Wraps server-rendered content with scroll animations
 */
export default function ServicesAnimationWrapper({
  children,
  delay = 0,
}: ServicesAnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
