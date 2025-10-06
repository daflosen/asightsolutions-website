'use client'

import { useState } from 'react'

const services = [
  {
    id: '001',
    title: 'Process Digitalization & Tools',
    description: 'Modern technology enables fast and efficient processes. Find out what your company can improve.',
    categories: ['User Journey Mapping', 'Technology Scan', 'JIRA / Confluence', 'SCRUM']
  },
  {
    id: '002', 
    title: 'Web Design & SEO',
    description: 'Need a full service out of one hand internet presence? Look no further...just look at our website. Done deal!',
    categories: ['Keyword Optimization', 'Site Health Audits', 'Backlink Analytics']
  },
  {
    id: '003',
    title: 'Full Stack & Low Code Development',
    description: 'Ever wondered why IT Solutions are big, clunky and way overboard with your needs? No more! We code your system from scratch.',
    categories: ['Python', 'Java', 'JavaScript', 'C#', 'PHP']
  },
  {
    id: '004',
    title: 'Do it Yourself DIGIT-U',
    description: 'Think about how cool it would be to be able to do all this by yourself. Empower your business with your most valuable asset: Your knowledge!',
    categories: ['Training', 'Workshops', 'Documentation', 'Knowledge Transfer']
  }
]

export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-500 to-teal-600">
      <div className="container">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 bg-white/70 rounded-full" />
            <span className="text-white/70 text-sm uppercase tracking-wider">What we do</span>
          </div>
          <h2 className="headline-xl text-white mb-2">Services.</h2>
          <span className="text-white/50 text-lg">(4)</span>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all cursor-pointer"
              onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
            >
              <div className="p-6 flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <span className="text-white/60 font-mono text-sm">{service.id}</span>
                  <h3 className="text-white text-xl font-medium">{service.title}</h3>
                </div>
                <div className="text-white text-2xl">
                  {expandedService === service.id ? '−' : '+'}
                </div>
              </div>
              
              {expandedService === service.id && (
                <div className="px-6 pb-6 border-t border-white/20">
                  <p className="text-white/80 mb-4 mt-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.categories.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="bg-white/20 text-white text-xs px-3 py-1 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-white text-cyan-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Get started
          </button>
        </div>
      </div>
    </section>
  )
}