'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageToggle from '@/components/ui/LanguageToggle'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: '1rem',
        left: '1rem',
        right: '1rem',
        zIndex: 1000,
        padding: '1rem 1.5rem',
        background: 'rgba(255, 255, 255, 0.95)',
        WebkitBackdropFilter: 'blur(10px)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: '#333',
            margin: 0
          }}>
            asightsolutions®
          </h3>

          {/* Desktop Navigation - Hidden on Mobile */}
          <div className="hidden lg:flex" style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <a href="#" style={{
              color: '#666',
              textDecoration: 'none',
              fontSize: '0.9rem',
              padding: '0.5rem 0.75rem',
              transition: 'color 0.3s'
            }}>This is us</a>
            <a href="#" style={{
              color: '#666',
              textDecoration: 'none',
              fontSize: '0.9rem',
              padding: '0.5rem 0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}>
              Projects
              <span style={{
                fontSize: '0.7rem',
                background: '#f0f0f0',
                padding: '0.1rem 0.4rem',
                borderRadius: '10px'
              }}>27</span>
            </a>
            <a href="#" style={{
              color: '#666',
              textDecoration: 'none',
              fontSize: '0.9rem',
              padding: '0.5rem 0.75rem'
            }}>Blog</a>
            <a href="#" style={{
              color: '#666',
              textDecoration: 'none',
              fontSize: '0.9rem',
              padding: '0.5rem 0.75rem'
            }}>Contact</a>

            <LanguageToggle />

            <button style={{
              background: '#111',
              color: 'white',
              padding: '0.6rem 1.2rem',
              borderRadius: '25px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.8rem',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'transform 0.2s',
              minWidth: '48px',
              minHeight: '48px'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '8px 8px',
                gap: '2px'
              }}>
                <div style={{ width: '4px', height: '4px', background: 'white', borderRadius: '1px' }}></div>
                <div style={{ width: '4px', height: '4px', background: 'white', borderRadius: '1px' }}></div>
                <div style={{ width: '4px', height: '4px', background: 'white', borderRadius: '1px' }}></div>
                <div style={{ width: '4px', height: '4px', background: 'white', borderRadius: '1px' }}></div>
              </div>
              Menu
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
            style={{
              background: '#111',
              color: 'white',
              padding: '0.75rem',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '48px',
              minHeight: '48px',
              transition: 'transform 0.2s'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              width: '20px'
            }}>
              <div style={{
                height: '2px',
                background: 'white',
                borderRadius: '2px',
                transform: mobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
                transition: 'transform 0.3s'
              }}></div>
              <div style={{
                height: '2px',
                background: 'white',
                borderRadius: '2px',
                opacity: mobileMenuOpen ? 0 : 1,
                transition: 'opacity 0.3s'
              }}></div>
              <div style={{
                height: '2px',
                background: 'white',
                borderRadius: '2px',
                transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
                transition: 'transform 0.3s'
              }}></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                zIndex: 999
              }}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              style={{
                position: 'fixed',
                top: '5rem',
                right: '1rem',
                width: 'calc(100% - 2rem)',
                maxWidth: '400px',
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                zIndex: 1001
              }}
            >
              <nav style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: '#333',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    padding: '1rem',
                    borderRadius: '12px',
                    transition: 'background 0.2s',
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  This is us
                </a>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: '#333',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    padding: '1rem',
                    borderRadius: '12px',
                    transition: 'background 0.2s',
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Projects
                  <span style={{
                    fontSize: '0.8rem',
                    background: '#f0f0f0',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '12px'
                  }}>27</span>
                </a>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: '#333',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    padding: '1rem',
                    borderRadius: '12px',
                    transition: 'background 0.2s',
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  Blog
                </a>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: '#333',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    padding: '1rem',
                    borderRadius: '12px',
                    transition: 'background 0.2s',
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  Contact
                </a>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '1rem',
                  marginBottom: '1rem'
                }}>
                  <LanguageToggle />
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    background: '#111',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600',
                    marginTop: '1rem',
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '8px 8px',
                    gap: '2px'
                  }}>
                    <div style={{ width: '4px', height: '4px', background: 'white', borderRadius: '1px' }}></div>
                    <div style={{ width: '4px', height: '4px', background: 'white', borderRadius: '1px' }}></div>
                    <div style={{ width: '4px', height: '4px', background: 'white', borderRadius: '1px' }}></div>
                    <div style={{ width: '4px', height: '4px', background: 'white', borderRadius: '1px' }}></div>
                  </div>
                  Full Menu
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}