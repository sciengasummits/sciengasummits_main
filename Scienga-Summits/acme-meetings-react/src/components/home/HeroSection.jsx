import React from 'react'
import heroBg from '../../assets/images/hero-bg.png'

export default function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '500px',
      height: 'auto',
      padding: '100px 0',
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white'
    }}>
      {/* Dark Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(31, 41, 55, 0.75)',
        zIndex: 1
      }}></div>

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 8vw, 3.5rem)',
          fontWeight: '800',
          margin: '0 0 1rem 0',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          lineHeight: '1.1'
        }}>
          Welcome to Scienga Summits
        </h1>
        <h2 style={{
          fontSize: 'clamp(1rem, 4vw, 1.5rem)',
          fontWeight: '700',
          margin: '0 0 3rem 0',
          textTransform: 'uppercase',
          color: '#ffffff',
          letterSpacing: '1px'
        }}>
          Uniting Minds for a Sustainable Energy
        </h2>
        <button
          onClick={() => {
            const meetingsSection = document.getElementById('meetings');
            if (meetingsSection) {
              meetingsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          style={{
            backgroundColor: 'white',
            color: '#2563eb',
            border: 'none',
            padding: '14px 40px',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '4px',
            fontWeight: '600',
            textTransform: 'capitalize',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
          Meetings
        </button>
      </div>
    </section>
  )
}
