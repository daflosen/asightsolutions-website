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
 * SSR-Friendly Lazy Animation Section Component
 * ALWAYS renders children for SEO - only animation is lazy
 * Content is visible in HTML source for search engines
 *
 * @param threshold - Percentage of visibility needed to trigger animation (0.0 - 1.0)
 * @param rootMargin - Margin around viewport to start animation early (e.g., "200px")
 */
export default function LazySection({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '200px',
}: LazySectionProps) {
  // Start with true for SSR - content is visible immediately
  // After hydration, we'll animate elements as they scroll into view
  const [hasAnimated, setHasAnimated] = useState(true)
  const [isHydrated, setIsHydrated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Mark as hydrated and reset animation state
    setIsHydrated(true)
    setHasAnimated(false)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true)
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
  }, [threshold, rootMargin])

  return (
    <div
      ref={sectionRef}
      className={className}
      style={isHydrated ? {
        opacity: hasAnimated ? 1 : 0,
        transform: hasAnimated ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      } : undefined}
    >
      {/* ALWAYS render children for SEO - content is in HTML source */}
      {children}
    </div>
  )
}
