import React from 'react'

import speaker1 from '../../assets/images/speaker1.png'
import speaker2 from '../../assets/images/speaker2.png'
import speaker3 from '../../assets/images/speaker3.png'
import speaker4 from '../../assets/images/speaker4.png'

const speakers = [
  {
    name: 'Sarah Wilson',
    role: 'Product Design Lead',
    company: 'TechFlow',
    image: speaker1
  },
  {
    name: 'James Rodriguez',
    role: 'CTO',
    company: 'InnovateX',
    image: speaker2
  },
  {
    name: 'Emily Chen',
    role: 'Head of Marketing',
    company: 'Growth Labs',
    image: speaker3
  },
  {
    name: 'Michael Chang',
    role: 'Lead Architect',
    company: 'BuildSmart',
    image: speaker4
  }
]

export default function SpeakersPreview() {
  return (
    <section style={{ padding: 'clamp(3rem, 10vw, 5rem) 0', backgroundColor: '#f9fafb' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h4 style={{ color: '#2563eb', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem', marginBottom: '1rem' }}>
            World-Class Speakers
          </h4>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', fontWeight: 'bold', color: '#111827', lineHeight: '1.2' }}>
            Learn from the Industry's Best
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {speakers.map((speaker, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0 0 0.5rem 0', color: '#111827' }}>
                  {speaker.name}
                </h3>
                <p style={{ color: '#2563eb', fontWeight: '500', margin: '0 0 0.25rem 0' }}>
                  {speaker.role}
                </p>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>
                  {speaker.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
