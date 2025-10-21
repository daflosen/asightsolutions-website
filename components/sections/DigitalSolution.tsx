'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'ApeLedger',
    subtitle: 'Tax Software for Crypto Currencies',
    year: '(2023)',
    description: 'ApeLedger',
    bgColor: 'bg-white',
    logo: '>>>',
    image: '/images/ApeLedger_Free.png',
    category: 'ape', // Ape Series - Innovation Line
    badge: 'Innovation Series'
  },
  {
    id: 2,
    title: 'RiskApe',
    subtitle: 'Risk Management for Projects',
    year: '(2024)',
    description: 'R',
    bgColor: 'bg-white',
    logo: 'R',
    image: '/images/RisKApe_Free_Tuerkis.png',
    category: 'ape', // Ape Series - Innovation Line
    badge: 'Innovation Series'
  },
  {
    id: 3,
    title: 'M365',
    subtitle: 'Microsoft Power Platform Processes and Tools',
    year: '(2023)',
    description: 'ERP 365',
    bgColor: 'bg-white',
    logo: '>>>',
    style: 'transform: rotate(45deg)',
    image: '/images/ERP_365_Logo.png',
    category: 'enterprise', // Enterprise Solutions
    badge: 'Enterprise'
  },
  {
    id: 4,
    title: 'Vault',
    subtitle: '',
    year: '(2024)',
    description: '✓',
    bgColor: 'bg-white',
    logo: '✓',
    image: '/images/VAULT_Logo_2.svg',
    category: 'enterprise', // Enterprise Solutions
    badge: 'Enterprise'
  }
]

export default function DigitalSolution() {
  return (
    <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-dark rounded-full" />
            (27)
          </span>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-left mb-4"
                style={{ fontSize: 'clamp(48px, 12vw, 144px)', fontWeight: 600, fontFamily: 'Inter, sans-serif', lineHeight: '0.9' }}
              >
                Your<br />
                Digital<br />
                Solution.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex-1 pt-0 md:pt-8"
              >
                <p className="text-gray-500 leading-relaxed mb-6" style={{ fontSize: '16px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>
                  We've helped businesses across<br className="hidden md:block" />
                  industries achieve their digitalization<br className="hidden md:block" />
                  goals. Here are some of our recent tools.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#3AA6B9] rounded-full"></span>
                    <span className="text-gray-600 font-medium">Innovation Series - Next-gen tools for modern challenges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    <span className="text-gray-600 font-medium">Enterprise - Proven, scalable solutions</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${project.bgColor} rounded-3xl ${(project.id === 1 || project.id === 2 || project.id === 3 || project.id === 4) ? 'p-0 overflow-hidden relative' : 'p-12'} hover:shadow-xl transition-all cursor-pointer group h-[400px]`}
            >
              {(project.id === 1 || project.id === 2 || project.id === 3 || project.id === 4) && project.image ? (
                <>
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={
                        project.id === 1 || project.id === 2
                          ? "object-contain"
                          : "object-cover"
                      }
                    />
                  </div>
                  <div className="relative z-10 p-12">
                    {/* Category Badge */}
                    <div className="absolute top-6 right-6">
                      <span className={`text-[10px] font-semibold px-3 py-1.5 rounded-full ${
                        project.category === 'ape'
                          ? 'bg-[#3AA6B9] text-white'
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {project.badge}
                      </span>
                    </div>

                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm text-gray-600">{project.subtitle}</p>
                      </div>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-600">{project.subtitle}</p>
                    </div>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>

                  <div className="h-48 flex items-center justify-center">
                {project.image ? (
                  <div className={`relative w-full h-full ${project.id === 4 ? 'flex items-end justify-end' : ''}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={
                        project.id === 4
                          ? "object-contain object-right-bottom"
                          : project.id === 3
                            ? "object-cover"
                            : project.id === 1
                              ? "object-cover"
                              : "object-contain"
                      }
                    />
                  </div>
                  ) : (
                    <div className="text-6xl md:text-8xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {project.logo}
                    </div>
                  )}
                  </div>

                  {project.id < 3 && (
                    <div className="text-3xl font-bold text-gray-800 mt-8">
                      {project.description}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}