'use client'

export default function Navigation() {
  return (
    <nav style={{
      position: 'fixed',
      top: '1rem',
      left: '1rem',
      right: '1rem',
      zIndex: 1000,
      padding: '1rem 1.5rem',
      background: 'rgba(255, 255, 255, 0.95)',
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
        
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <a href="#" style={{ 
            color: '#666', 
            textDecoration: 'none',
            fontSize: '0.9rem',
            transition: 'color 0.3s'
          }}>This is us</a>
          <a href="#" style={{ 
            color: '#666', 
            textDecoration: 'none',
            fontSize: '0.9rem',
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
            fontSize: '0.9rem'
          }}>Blog</a>
          <a href="#" style={{ 
            color: '#666', 
            textDecoration: 'none',
            fontSize: '0.9rem'
          }}>Contact</a>
          
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
            transition: 'transform 0.2s'
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
      </div>
    </nav>
  )
}