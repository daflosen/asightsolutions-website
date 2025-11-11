'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { ImageProps } from 'next/image'

interface OptimizedImageProps extends Omit<ImageProps, 'placeholder' | 'blurDataURL'> {
  fallbackSrc?: string
}

/**
 * Optimized Image Component with:
 * - Automatic lazy loading
 * - WebP support with fallback
 * - Blur placeholder
 * - Error handling
 * - Loading skeleton
 */
export default function OptimizedImage({
  src,
  alt,
  fallbackSrc,
  className = '',
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Check if we have a WebP version available
  const getWebPSource = (source: string | any): string => {
    if (typeof source !== 'string') return source

    // If it's already WebP, return as-is
    if (source.endsWith('.webp')) return source

    // Check if optimized version exists
    const optimizedPath = source.replace(/\.(png|jpg|jpeg)$/i, '.webp')
    const isInOptimizedFolder = source.includes('/optimized/')

    if (!isInOptimizedFolder) {
      // Try optimized folder first
      const pathParts = source.split('/')
      const fileName = pathParts.pop()
      const webpFileName = fileName?.replace(/\.(png|jpg|jpeg)$/i, '.webp')
      return [...pathParts, 'optimized', webpFileName].join('/')
    }

    return optimizedPath
  }

  const handleError = () => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      // Try fallback source
      setImgSrc(fallbackSrc)
    } else if (typeof src === 'string' && typeof imgSrc === 'string' && !imgSrc.includes('/optimized/')) {
      // Fallback to original if WebP fails
      setImgSrc(src)
    } else {
      setHasError(true)
    }
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  // Try WebP source first
  const imageSrc = typeof imgSrc === 'string' ? getWebPSource(imgSrc) : imgSrc

  return (
    <div className={`relative ${className}`}>
      {/* Loading skeleton */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded" />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}

      {/* Actual image */}
      {!hasError && (
        <Image
          {...props}
          src={imageSrc}
          alt={alt}
          className={className}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IGZpbGw9IiNmM2Y0ZjYiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48L3N2Zz4="
          onLoad={handleLoad}
          onError={handleError}
          quality={85}
        />
      )}
    </div>
  )
}
