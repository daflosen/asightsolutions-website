'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from '@/hooks/useTranslations'

// SVG Icons in Teal
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3AA6B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
)

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3AA6B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3AA6B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
)

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3AA6B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
)

const ChatBubbleIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s ease'
    }}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
)

export default function FloatingContactWidget() {
  const t = useTranslations()
  const [isExpanded, setIsExpanded] = useState(false)

  const contactOptions = [
    {
      id: 'phone',
      icon: PhoneIcon,
      label: t.contactWidget?.phone || 'Call',
      href: 'tel:+4915157165903',
      color: '#3AA6B9'
    },
    {
      id: 'email',
      icon: EmailIcon,
      label: t.contactWidget?.email || 'Email',
      href: 'mailto:f.bartsch@asightconsulting.com',
      color: '#3AA6B9'
    },
    {
      id: 'whatsapp',
      icon: WhatsAppIcon,
      label: t.contactWidget?.whatsapp || 'WhatsApp',
      href: 'https://wa.me/4915157165903',
      color: '#3AA6B9'
    },
    {
      id: 'calendar',
      icon: CalendarIcon,
      label: t.contactWidget?.calendar || 'Schedule',
      href: 'https://outlook.office.com/bookwithme/user/0fd99e3a69c141279cb5698b304d6ef5@asightconsulting.com/meetingtype/XgXQmNgFZEWh9g6wBYb0XA2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile',
      color: '#3AA6B9'
    }
  ]

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '0.75rem'
    }}>
      {/* Expandable Contact Options */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.id}
                href={option.href}
                target={option.id === 'whatsapp' || option.id === 'calendar' ? '_blank' : undefined}
                rel={option.id === 'whatsapp' || option.id === 'calendar' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1.25rem',
                  background: 'white',
                  borderRadius: '50px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: '#333',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  minWidth: '180px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
                }}
              >
                <span style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `${option.color}15`,
                  borderRadius: '50%'
                }}>
                  <option.icon />
                </span>
                <span>{option.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        animate={{
          scale: isExpanded ? 1.1 : 1
        }}
        whileHover={{ scale: isExpanded ? 1.15 : 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #3AA6B9 0%, #06B6D4 100%)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isExpanded
            ? '0 8px 24px rgba(58, 166, 185, 0.5)'
            : '0 4px 16px rgba(58, 166, 185, 0.3)',
          color: 'white',
          transition: 'box-shadow 0.2s'
        }}
        aria-label="Contact options"
      >
        <ChatBubbleIcon isExpanded={isExpanded} />
      </motion.button>

      {/* Mobile: Backdrop when expanded */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.2)',
              zIndex: -1
            }}
            className="md:hidden"
          />
        )}
      </AnimatePresence>
    </div>
  )
}
