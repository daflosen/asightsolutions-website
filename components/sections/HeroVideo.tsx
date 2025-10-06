'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function HeroVideo() {
  const videoContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (videoContainerRef.current) {
        const heroSection = videoContainerRef.current.parentElement
        if (heroSection) {
          const rect = heroSection.getBoundingClientRect()
          const scrollProgress = Math.max(0, Math.min(1, -rect.top / rect.height))
          const scale = 1 - (scrollProgress * 0.05)
          videoContainerRef.current.style.transform = `scale(${scale})`
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Video Container Background */}
      <div
        ref={videoContainerRef}
        className="absolute inset-4 md:inset-8 rounded-3xl overflow-hidden transition-transform duration-300"
      >
        {/* Video Background */}
        <video
          autoPlay
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

        {/* Main Logo "asight" */}
        <h1 className="absolute left-[3.5%] top-[10%] z-10 font-semibold text-white leading-[1.2] text-left m-0 p-0 w-[57%]" style={{ fontSize: '20vw', letterSpacing: '-0.06em' }}>
          asight<sup className="text-[33%] font-semibold align-super ml-[0.1em]">®</sup>
        </h1>
      </div>

      {/* Services List Top Right */}
      <div className="absolute top-24 right-24 z-10 text-right opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <ul className="space-y-2 text-sm font-normal leading-relaxed text-white opacity-80">
          <li>Process Digitalization & Tooling</li>
          <li>Web Design and SEO</li>
          <li>Full Stack & Low Code Development</li>
        </ul>
      </div>

      {/* "solutions" Unterzeile */}
      <div
        className="absolute z-10 w-[20%] h-fit opacity-0 animate-fade-in"
        style={{
          top: 'calc(50% + 100px)',
          left: 'calc(10% + 400px)',
          animationDelay: '0.2s'
        }}
      >
        <p className="relative w-[20%] h-[43px] font-semibold text-white leading-[1.2] text-left opacity-100 visible rotate-[2deg] origin-center m-0 p-0" style={{ fontSize: '98%', letterSpacing: '-0.06em' }}>
          solutions
        </p>
      </div>

      {/* Static Plus Symbols */}
      <div
        className="absolute z-10 opacity-0 animate-fade-in"
        style={{
          top: 'calc(50% + 170px)',
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

      {/* Tagline links unten */}
      <div
        className="absolute z-10 max-w-[490px] opacity-0 animate-fade-in"
        style={{
          bottom: '60px',
          left: '10%',
          animationDelay: '0.4s'
        }}
      >
        <h1 className="text-white text-[22px] font-normal leading-[1.4]">
          Digital solutions and strategies that help<br />
          your processes thrive and your business grow.
        </h1>
      </div>

      {/* Contact Card */}
      <div
        className="absolute z-[15] w-[25%] h-[186px] flex items-stretch gap-0 p-0 bg-white rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden opacity-0 animate-fade-in"
        style={{
          bottom: '80px',
          right: '100px',
          animationDelay: '0.5s'
        }}
      >
        <div className="w-[186px] h-[186px] rounded-l-[20px] overflow-hidden flex-shrink-0 bg-gray-100">
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

      {/* Bottom Text */}
      <div className="absolute bottom-20 left-10 text-white text-sm font-light z-10 opacity-60">
        © 2024 asightsolutions®
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
