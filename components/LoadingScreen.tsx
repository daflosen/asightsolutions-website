'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [shouldExit, setShouldExit] = useState(false)

  useEffect(() => {
    // Wait for letters to animate, then start exit
    const timer = setTimeout(() => {
      setShouldExit(true)
      // Remove component after animation completes
      setTimeout(() => {
        setIsVisible(false)
      }, 1400)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const letters = 'asightsolutions'.split('')

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {shouldExit ? (
        <motion.div
          key="loading-exit"
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{
            duration: 1.3,
            ease: [0.11, 0, 0.5, 0], // Langsam starten (ease-in), dann stark beschleunigen
          }}
          className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-[#3AA6B9] to-[#2C8A94] flex items-center justify-center z-[9999]"
        >
          <motion.div
            className="flex items-center gap-0 text-white"
            style={{ fontSize: '3rem', fontWeight: 200, letterSpacing: '-0.02em' }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {letters.map((letter, index) => (
              <span
                key={index}
                style={{ display: 'inline-block' }}
              >
                {letter}
              </span>
            ))}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="loading-initial"
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
      )}
    </AnimatePresence>
  )
}
