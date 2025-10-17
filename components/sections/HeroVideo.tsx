'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function HeroVideo() {
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false)

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

        {/* Main Logo "asight" - Responsive */}
        <h1 className="absolute left-[5%] md:left-[3.5%] z-10 text-white text-left m-0 p-0" style={{ fontSize: 'clamp(48px, 14vw, 18vw)', letterSpacing: '-0.06em', fontWeight: 600, fontFamily: 'Inter, sans-serif', top: '64px', lineHeight: '0.9', width: 'fit-content' }}>
          asight<sup className="align-super ml-[0.1em]" style={{ fontSize: '33%', fontWeight: 600 }}>®</sup>
        </h1>

        {/* "solutions" Unterzeile - rechtsbündig mit "asight" Ende - Responsive */}
        <p className="absolute z-10 font-semibold text-white leading-[1.2] opacity-0 animate-fade-in" style={{ fontSize: 'clamp(16px, 2.4vw, 2.4vw)', letterSpacing: '-0.06em', fontFamily: 'Inter, sans-serif', fontWeight: 600, top: 'calc(64px + clamp(48px, 14vw, 16vw))', left: '5%', width: 'clamp(80px, 18vw, 18vw)', textAlign: 'right', animationDelay: '0.2s' }}>
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

      {/* Mobile - Services List (replaces contact card) */}
      <div className="lg:hidden absolute bottom-[20px] left-[5%] right-[5%] z-[15] bg-white/95 backdrop-blur-sm rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <p className="text-xs font-bold mb-3 text-gray-900">Our Services</p>
        <ul className="space-y-2.5">
          <li className="flex items-center gap-3 text-gray-900">
            <span className="w-1.5 h-1.5 bg-[#3AA6B9] rounded-full flex-shrink-0"></span>
            <span className="text-sm font-semibold">Process Digitalization & Tooling</span>
          </li>
          <li className="flex items-center gap-3 text-gray-900">
            <span className="w-1.5 h-1.5 bg-[#3AA6B9] rounded-full flex-shrink-0"></span>
            <span className="text-sm font-semibold">Web Design and SEO</span>
          </li>
          <li className="flex items-center gap-3 text-gray-900">
            <span className="w-1.5 h-1.5 bg-[#3AA6B9] rounded-full flex-shrink-0"></span>
            <span className="text-sm font-semibold">Full Stack & Low Code Development</span>
          </li>
        </ul>
      </div>

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

      {/* Partner Logos */}
      <div className="absolute bottom-20 right-24 flex items-center gap-4 z-10">
        <span className="text-white text-xs opacity-50">powered by</span>
        <div className="flex gap-3">
          <div className="bg-white/20 rounded px-3 py-1 text-white text-xs">Azure</div>
          <div className="bg-white/20 rounded px-3 py-1 text-white text-xs">OpenAI</div>
        </div>
      </div>
    </section>
  )
}
