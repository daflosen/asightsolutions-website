'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'CRYPTAX',
    subtitle: 'Tax Software for Crypto Currencies',
    year: '(2023)',
    description: 'CRYPTAX',
    bgColor: 'bg-primary-50',
    logo: '>>>',
    image: null
  },
  {
    id: 2,
    title: 'RMentiX',
    subtitle: 'Risk Management for Projects',
    year: '(2024)',
    description: 'R',
    bgColor: 'bg-gray-100',
    logo: 'R',
    image: '/images/RmentiX_Logo.jpg'
  },
  {
    id: 3,
    title: 'M365',
    subtitle: 'Microsoft Power Platform Processes and Tools',
    year: '(2023)',
    description: 'ERP 365',
    bgColor: 'bg-gray-100',
    logo: '>>>',
    style: 'transform: rotate(45deg)',
    image: '/images/ERP_365_Logo.png'
  },
  {
    id: 4,
    title: 'Vault',
    subtitle: '',
    year: '(2024)',
    description: '✓',
    bgColor: 'bg-gray-100',
    logo: '✓',
    image: '/images/VAULT_Logo_2.svg'
  }
]

export default function DigitalSolution() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-dark rounded-full" />
            (27)
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold tracking-super-tight leading-super-tight mb-8"
          >
            Your Digital<br />
            Solution.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto mb-4"
          >
            We&apos;ve helped businesses across industries achieve their digitalization goals. Here are some of our recent tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-6xl font-bold"
          >
            ©2025
          </motion.div>
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
              className={`${project.bgColor} rounded-3xl ${(project.id === 3 || project.id === 4) ? 'p-0 overflow-hidden relative' : 'p-12'} hover:shadow-xl transition-all cursor-pointer group h-[400px]`}
            >
              {(project.id === 3 || project.id === 4) && project.image ? (
                <>
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative z-10 p-12">
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