'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function HeroVideo() {
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false)
  // Toggle between layouts: 'centered', 'stacked', or 'carousel' (Option 4)
  const [mobileLayout, setMobileLayout] = useState<'centered' | 'stacked' | 'carousel'>('carousel')
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const services = [
    { title: 'Process Digitalization', desc: 'Transform manual processes into efficient digital workflows' },
    { title: 'Business Optimization', desc: 'Streamline operations and maximize efficiency' },
    { title: 'Web Design & SEO', desc: 'Beautiful websites that rank and convert' },
    { title: 'Full Stack Development', desc: 'From concept to deployment' }
  ]

  // Carousel rotation effect
  useEffect(() => {
    if (mobileLayout !== 'carousel') return

    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % services.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [mobileLayout, services.length])

  // Touch swipe handler for carousel
  const handleCarouselSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      // Swipe left = next card
      setCurrentCardIndex((prev) => (prev + 1) % services.length)
    } else {
      // Swipe right = previous card
      setCurrentCardIndex((prev) => (prev - 1 + services.length) % services.length)
    }
  }

  // Wait for loading screen to finish (approx 3.9 seconds total)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldPlayVideo(true)
      if (videoRef.current) {
        videoRef.current.currentTime = 0 // Reset to start
        videoRef.current.play().catch(err => console.log('Video play failed:', err))
      }
    }, 3900) // Matches LoadingScreen duration (2500 + 1400)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (videoContainerRef.current) {
            const heroSection = videoContainerRef.current.parentElement
            if (heroSection) {
              const rect = heroSection.getBoundingClientRect()
              const scrollProgress = Math.max(0, Math.min(1, -rect.top / rect.height))
              const scale = 1 - (scrollProgress * 0.05)
              videoContainerRef.current.style.transform = `scale(${scale})`
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#F5F5F5' }}>
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Video Container Background - Rounded on all screens */}
      <div
        ref={videoContainerRef}
        className="absolute inset-2 sm:inset-4 md:inset-8 rounded-2xl md:rounded-3xl overflow-hidden"
        style={{ transition: 'transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)' }}
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/Hero_Video_final.mp4" type="video/mp4" />
        </video>

        {/* Darken Overlay */}
        <div className="absolute inset-0 z-[2] bg-[#0D0D0D] opacity-30" />

        {/* Grain Overlay */}
        <div className="absolute inset-0 z-[3] opacity-5 mix-blend-overlay pointer-events-none grain-overlay" />

        {/* Main Logo "asight" - Responsive, prominent on mobile */}
        <h1 className="absolute left-[5%] md:left-[3.5%] z-10 text-white text-left m-0 p-0" style={{ fontSize: 'clamp(100px, 22vw, 18vw)', letterSpacing: '-0.06em', fontWeight: 600, fontFamily: 'Inter, sans-serif', top: 'clamp(48px, 8vh, 64px)', lineHeight: '0.9', width: 'fit-content' }}>
          asight<sup className="align-super ml-[0.1em]" style={{ fontSize: '33%', fontWeight: 600 }}>®</sup>
        </h1>

        {/* "solutions" Unterzeile - rechtsbündig mit "asight" Ende - Responsive, prominent on mobile */}
        <p className="absolute z-10 font-semibold text-white leading-[1.2] opacity-0 animate-fade-in" style={{ fontSize: 'clamp(26px, 5vw, 2.4vw)', letterSpacing: '-0.06em', fontFamily: 'Inter, sans-serif', fontWeight: 600, top: 'calc(clamp(48px, 8vh, 64px) + clamp(100px, 22vw, 16vw))', left: '5%', width: 'clamp(125px, 28vw, 18vw)', textAlign: 'right', animationDelay: '0.2s' }}>
          solutions
        </p>
      </div>

      {/* Services List Top Right - Hidden on Mobile */}
      <div className="hidden lg:block absolute top-24 right-24 z-10 text-right opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <ul className="space-y-2 leading-relaxed text-white opacity-80" style={{ fontSize: '18px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
          <li>Process Digitalization & Tooling</li>
          <li>Web Design and SEO</li>
          <li>Full Stack & Low Code Development</li>
        </ul>
      </div>

      {/* Static Plus Symbols - Hidden on Mobile */}
      <div
        className="hidden md:block absolute z-10 opacity-0 animate-fade-in"
        style={{
          top: '60%',
          transform: 'translateY(-50%)',
          left: '10%',
          width: 'calc(400px + 300px)',
          animationDelay: '0.3s'
        }}
      >
        <div className="flex justify-between items-center">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-white font-thin opacity-30 text-[32px]">
              +
            </span>
          ))}
        </div>
      </div>

      {/* Tagline - Hidden on mobile, visible on desktop */}
      <div
        className="hidden lg:block absolute z-10 px-4 md:px-0 opacity-0 animate-fade-in"
        style={{
          bottom: '60px',
          left: '5%',
          right: '5%',
          maxWidth: '490px',
          animationDelay: '0.4s'
        }}
      >
        <h1 className="text-white leading-[1.4]" style={{ fontSize: 'clamp(16px, 4vw, 22px)', fontWeight: 600, fontFamily: 'Inter, sans-serif', textIndent: '2em' }}>
          Digital solutions and strategies that help<br />
          your processes thrive and your business grow.
        </h1>
      </div>

      {/* Toggle Button - Only visible on mobile for testing */}
      <button
        onClick={() => {
          if (mobileLayout === 'centered') setMobileLayout('stacked')
          else if (mobileLayout === 'stacked') setMobileLayout('carousel')
          else setMobileLayout('centered')
        }}
        className="lg:hidden fixed top-4 right-4 z-[100] bg-white/20 backdrop-blur-md text-white text-xs px-3 py-2 rounded-full border border-white/30"
      >
        {mobileLayout === 'centered' ? '→ Stacked' : mobileLayout === 'stacked' ? '→ Carousel' : '→ Centered'}
      </button>

      {/* Option 1: Centered Horizontal Cards */}
      {mobileLayout === 'centered' && (
        <div className="lg:hidden absolute top-1/2 -translate-y-1/2 left-0 right-0 z-[15] opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="overflow-x-auto overflow-y-hidden pb-4 px-[5%] scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              <div className="min-w-[85vw] max-w-[320px] bg-white/15 backdrop-blur-md rounded-[24px] p-7 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Process Digitalization</h3>
                <p className="text-sm text-white/90 leading-relaxed">Transform manual processes into efficient digital workflows</p>
              </div>
              <div className="min-w-[85vw] max-w-[320px] bg-white/15 backdrop-blur-md rounded-[24px] p-7 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Business Optimization</h3>
                <p className="text-sm text-white/90 leading-relaxed">Streamline operations and maximize efficiency</p>
              </div>
              <div className="min-w-[85vw] max-w-[320px] bg-white/15 backdrop-blur-md rounded-[24px] p-7 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Web Design & SEO</h3>
                <p className="text-sm text-white/90 leading-relaxed">Beautiful websites that rank and convert</p>
              </div>
              <div className="min-w-[85vw] max-w-[320px] bg-white/15 backdrop-blur-md rounded-[24px] p-7 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Full Stack Development</h3>
                <p className="text-sm text-white/90 leading-relaxed">From concept to deployment</p>
              </div>
            </div>
          </div>
          <p className="text-center text-white/60 text-xs mt-3">← Swipe to explore →</p>
        </div>
      )}

      {/* Option 3: Stacked Vertical Cards */}
      {mobileLayout === 'stacked' && (
        <div className="lg:hidden absolute top-1/2 -translate-y-1/2 left-0 right-0 z-[15] px-[5%] opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="space-y-3 max-h-[60vh] overflow-y-auto scrollbar-hide">
            <div className="bg-white/15 backdrop-blur-md rounded-[20px] p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-2">Process Digitalization</h3>
              <p className="text-sm text-white/90 leading-relaxed">Transform manual processes into efficient digital workflows</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-[20px] p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-2">Business Optimization</h3>
              <p className="text-sm text-white/90 leading-relaxed">Streamline operations and maximize efficiency</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-[20px] p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-2">Web Design & SEO</h3>
              <p className="text-sm text-white/90 leading-relaxed">Beautiful websites that rank and convert</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-[20px] p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-2">Full Stack Development</h3>
              <p className="text-sm text-white/90 leading-relaxed">From concept to deployment</p>
            </div>
          </div>
          <p className="text-center text-white/60 text-xs mt-4">↑ Scroll to explore ↓</p>
        </div>
      )}

      {/* Option 4: 3D Carousel - DRAMATIC Horizontal Stacked Cards with Swipe */}
      {mobileLayout === 'carousel' && (
        <div className="lg:hidden absolute top-1/2 -translate-y-1/2 left-0 right-0 z-[15] px-[5%] opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div
            className="relative h-[240px] w-full"
            style={{ perspective: '1200px' }}
            onTouchStart={(e) => {
              const touch = e.touches[0]
              const startX = touch.clientX

              const handleTouchMove = (moveEvent: TouchEvent) => {
                const currentX = moveEvent.touches[0].clientX
                const diff = startX - currentX

                if (Math.abs(diff) > 50) {
                  handleCarouselSwipe(diff > 0 ? 'left' : 'right')
                  document.removeEventListener('touchmove', handleTouchMove)
                  document.removeEventListener('touchend', handleTouchEnd)
                }
              }

              const handleTouchEnd = () => {
                document.removeEventListener('touchmove', handleTouchMove)
                document.removeEventListener('touchend', handleTouchEnd)
              }

              document.addEventListener('touchmove', handleTouchMove)
              document.addEventListener('touchend', handleTouchEnd)
            }}
          >
            {services.map((service, index) => {
              const position = (index - currentCardIndex + services.length) % services.length

              // Smaller cards with MORE dramatic background depth
              let transform = ''
              let opacity = 1
              let zIndex = services.length - position

              if (position === 0) {
                // Front card - smaller, centered, solid
                transform = 'translateX(0) translateZ(0) scale(0.95) rotateY(0deg)'
                opacity = 1
              } else if (position === 1) {
                // Second card - much further back with subtle rotation
                transform = 'translateX(-20px) translateZ(-80px) scale(0.85) rotateY(3deg)'
                opacity = 0.3
              } else if (position === 2) {
                // Third card - very far back
                transform = 'translateX(-35px) translateZ(-160px) scale(0.75) rotateY(4deg)'
                opacity = 0.15
              } else {
                // Hidden cards - extremely far back
                transform = 'translateX(-45px) translateZ(-240px) scale(0.65) rotateY(5deg)'
                opacity = 0.05
              }

              return (
                <div
                  key={index}
                  className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-[20px] p-6 border border-white/30 transition-all duration-600 ease-out"
                  style={{
                    zIndex,
                    transform,
                    opacity,
                    transformStyle: 'preserve-3d',
                    pointerEvents: position === 0 ? 'auto' : 'none'
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-white/90 leading-snug">{service.desc}</p>
                </div>
              )
            })}
          </div>
          <p className="text-center text-white/60 text-xs mt-5">← Swipe or wait for auto-rotation →</p>
        </div>
      )}

      {/* Desktop - Contact Card (original) */}
      <div
        className="hidden lg:flex absolute bottom-[80px] right-[100px] z-[15] w-[25%] h-[186px] flex-row items-stretch gap-0 p-0 bg-white rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden opacity-0 animate-fade-in"
        style={{
          animationDelay: '0.5s'
        }}
      >
        <div className="w-full md:w-[186px] h-[186px] md:rounded-l-[20px] rounded-t-[20px] md:rounded-t-none overflow-hidden flex-shrink-0" style={{ backgroundColor: '#F5F5F5' }}>
          <Image
            src="/images/Florian_Bartsch_20250925_FBA.png"
            alt="Florian Bartsch"
            width={186}
            height={186}
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="flex-1 flex flex-col gap-[6px] p-5 justify-center">
          <p className="text-[13px] font-medium text-gray-600 m-0">Team Lead</p>
          <p className="text-[12px] text-gray-500 m-0">at asight®</p>
          <h3 className="text-[20px] font-bold text-gray-900 my-2 leading-[1.1]">
            Florian Bartsch
          </h3>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-[18px] py-2 rounded-[18px] text-[13px] font-semibold no-underline transition-all self-start hover:translate-y-[-1px] hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
          >
            Let&apos;s talk
            <span className="text-[11px] ml-[2px]">↗</span>
          </a>
        </div>
      </div>

    </section>
  )
}
