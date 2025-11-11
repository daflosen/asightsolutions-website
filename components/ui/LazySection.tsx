'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

interface LazySectionProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  fallback?: ReactNode
}

/**
 * Lazy Loading Section Component
 * Only renders children when section is in viewport
 * Reduces initial page load and improves performance
 *
 * @param threshold - Percentage of visibility needed to trigger (0.0 - 1.0)
 * @param rootMargin - Margin around viewport to start loading early (e.g., "200px")
 */
export default function LazySection({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '200px',
  fallback = null,
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsVisible(true)
            setHasLoaded(true)
            // Disconnect after first load
            observer.disconnect()
          }
        })
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin, hasLoaded])

  return (
    <div ref={sectionRef} className={className}>
      {isVisible || hasLoaded ? (
        children
      ) : (
        fallback || (
          <div className="min-h-[400px] bg-gray-50 animate-pulse rounded-lg" />
        )
      )}
    </div>
  )
}
