'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ServiceCardProps {
  id: string
  title: string
  description: string
  categories: string[]
  images: string[]
}

export default function ServiceCard({ id, title, description, categories, images }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{
        background: 'rgba(30, 30, 40, 0.9)',
        borderRadius: '24px',
        padding: '3rem',
        border: isHovered ? '1px solid rgba(77, 184, 196, 0.5)' : '1px solid rgba(255,255,255,0.1)',
        transition: 'all 0.3s ease',
        position: 'relative',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        <div>
          <span style={{ color: '#888', fontSize: '0.875rem' }}>({id})</span>
          
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }}>
            {[1,2,3].map((i) => (
              <div key={i} style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #3A9BA7, #4DB8C4)',
                borderRadius: '12px',
                opacity: 0.3
              }} />
            ))}
          </div>

          <h3 style={{ 
            fontSize: '1.75rem',
            fontWeight: 'bold',
            color: 'white',
            marginTop: '1.5rem',
            marginBottom: '1rem'
          }}>
            {title}
          </h3>
          
          <p style={{ 
            color: '#999',
            lineHeight: '1.6',
            fontSize: '0.95rem'
          }}>
            {description}
          </p>

          <div style={{ marginTop: '1.5rem' }}>
            <span style={{ color: '#888', fontSize: '0.875rem' }}>Categories</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
              {categories.map((cat, i) => (
                <span key={i} style={{ color: '#aaa', fontSize: '0.875rem' }}>
                  {cat}{i < categories.length - 1 && ','}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '100%',
            height: '250px',
            background: 'linear-gradient(135deg, rgba(77, 184, 196, 0.1), rgba(77, 184, 196, 0.05))',
            borderRadius: '16px',
            transform: isHovered ? 'rotate(5deg)' : 'rotate(0)',
            transition: 'transform 0.3s ease'
          }} />
        </div>
      </div>
    </motion.div>
  )
}