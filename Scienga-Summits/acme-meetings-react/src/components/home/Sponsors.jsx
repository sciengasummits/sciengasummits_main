import React from 'react'

const sponsors = [
  'TechCorp', 'InnoSys', 'DataFlow', 'CloudPeak', 'CyberSafe', 'NextGen'
]

export default function Sponsors() {
  return (
    <section style={{ padding: 'clamp(3rem, 8vw, 5rem) 0', backgroundColor: 'white', textAlign: 'center' }}>
      <div className="container">
        <h4 style={{ color: '#6b7280', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.75rem', marginBottom: '2.5rem' }}>
          Trusted by Industry Leaders
        </h4>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          justifyItems: 'center',
          opacity: 0.7
        }}>
          {sponsors.map((sponsor, index) => (
            <div key={index} style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#9ca3af',
              fontFamily: 'monospace', // varied look
              textTransform: 'uppercase'
            }}>
              {sponsor}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
