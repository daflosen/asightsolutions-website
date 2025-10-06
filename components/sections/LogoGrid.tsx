'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function LogoGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top
        const triggerPoint = window.innerHeight * 0.9

        if (sectionTop < triggerPoint) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`py-16 bg-gray-50 transition-all duration-200 ${
        isScrolled ? 'blur-0 opacity-100' : 'blur-[2px] opacity-85'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between mb-12">
          <p className="text-sm text-gray-900 flex items-center gap-2">
            <span className="w-6 h-6 bg-black rounded-full inline-flex items-center justify-center text-white text-lg font-bold">
              +
            </span>
            Our clients
          </p>
          <p className="text-sm text-gray-600">(2016-25©)</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="bg-white rounded-2xl p-8 flex items-center justify-center aspect-square hover:shadow-lg transition-shadow">
            <Image
              src="/images/Logo_JR_Automation.svg"
              alt="JR Automation"
              width={100}
              height={64}
              className="max-w-full max-h-16 opacity-60 grayscale"
            />
          </div>
          <div className="bg-white rounded-2xl p-8 flex items-center justify-center aspect-square hover:shadow-lg transition-shadow">
            <Image
              src="/images/Logo_JR_Automation.svg"
              alt="JR Automation"
              width={100}
              height={64}
              className="max-w-full max-h-16 opacity-30 grayscale"
            />
          </div>
          <div className="bg-white rounded-2xl p-8 flex items-center justify-center aspect-square hover:shadow-lg transition-shadow">
            <Image
              src="/images/Logo_Brusa.svg"
              alt="Brusa"
              width={100}
              height={64}
              className="max-w-full max-h-16 opacity-30 grayscale"
            />
          </div>
          <div className="bg-white rounded-2xl p-8 flex items-center justify-center aspect-square hover:shadow-lg transition-shadow">
            <Image
              src="/images/Logo_Festool.svg"
              alt="Festool"
              width={100}
              height={64}
              className="max-w-full max-h-16 opacity-30 grayscale"
            />
          </div>
          <div className="bg-white rounded-2xl p-8 flex items-center justify-center aspect-square hover:shadow-lg transition-shadow">
            <Image
              src="/images/Logo_Mercedes.svg"
              alt="Mercedes-Benz"
              width={100}
              height={64}
              className="max-w-full max-h-16 opacity-30 grayscale"
            />
          </div>
          <div className="bg-white rounded-2xl p-8 flex items-center justify-center aspect-square hover:shadow-lg transition-shadow">
            <Image
              src="/images/Logo_mtu.svg"
              alt="MTU"
              width={100}
              height={64}
              className="max-w-full max-h-16 opacity-30 grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
