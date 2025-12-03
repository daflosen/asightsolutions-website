'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ServiceAccordionItemProps {
  number: string
  name: string
  detailedContent: string
  index: number
}

/**
 * Client Component for Service Accordion Interactivity
 * Only handles the expand/collapse state and animations
 * Content is ALWAYS in the HTML for SEO (CSS controls visibility)
 */
export default function ServiceAccordionItem({
  number,
  name,
  detailedContent,
  index,
}: ServiceAccordionItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-white/20"
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between py-6 group cursor-pointer"
      >
        <div className="flex items-center gap-6">
          <span className="text-white/60 text-lg font-medium">
            {number}
          </span>
          <span className="text-white text-2xl font-medium group-hover:translate-x-2 transition-transform">
            {name}
          </span>
        </div>

        <motion.div
          className="w-10 h-10 rounded-full border border-white flex items-center justify-center group-hover:bg-white transition-all"
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-white text-xl font-light group-hover:text-[#3AA6B9] transition-colors">
            +
          </span>
        </motion.div>
      </div>

      {/* SEO: Content is ALWAYS in HTML - CSS controls visibility */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isExpanded ? '2000px' : '0',
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div className="pb-8 pl-20 pr-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
            <div className="prose prose-invert max-w-none">
              <div
                className="text-white/90 leading-relaxed space-y-4 [&_p]:mb-4"
                dangerouslySetInnerHTML={{ __html: detailedContent }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
