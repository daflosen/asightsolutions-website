'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Wait for letters to animate
    const timer = setTimeout(() => {
      // Start slide up animation
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  const letters = 'asightsolutions'.split('')

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
      className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-[#3AA6B9] to-[#2C8A94] flex items-center justify-center z-[9999]"
    >
      <div className="flex items-center gap-0 text-white" style={{ fontSize: '3rem', fontWeight: 200, letterSpacing: '-0.02em' }}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.05,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            style={{ display: 'inline-block' }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
