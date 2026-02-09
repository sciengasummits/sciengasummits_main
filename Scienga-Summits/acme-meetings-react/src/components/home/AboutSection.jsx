import React from 'react'
import { Link } from 'react-router-dom'
import heroBg from '../../assets/images/hero-bg.png'

export default function AboutSection() {
  const primaryColor = '#3F51B5'; // Royal Blue
  const secondaryColor = '#f3f4f6'; // Light Gray Background

  const highlights = [
    { title: 'Global Network', description: 'Connect with industry leaders from over 30 countries.' },
    { title: 'Cutting-Edge Topics', description: 'Explore the latest trends in sustainable energy and tech.' },
    { title: 'Expert Workshops', description: 'Hands-on sessions led by pioneers in flight and energy.' },
  ];

  return (
    <section style={{ padding: '6rem 0', backgroundColor: '#fff' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', // Responsive grid
        gap: '4rem',
        alignItems: 'center'
      }}>

        {/* Left Content */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: primaryColor }}></div>
            <span style={{
              color: primaryColor,
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              fontSize: '0.85rem'
            }}>
              About The Summit
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(1.75rem, 6vw, 2.75rem)',
            fontWeight: '800',
            color: '#111827',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Pioneering the Future of <br />
            <span style={{ color: primaryColor }}>Sustainable Energy</span>
          </h2>

          <p style={{
            fontSize: '1rem',
            color: '#4b5563',
            marginBottom: '2rem',
            lineHeight: '1.7',
            maxWidth: '600px'
          }}>
            Scienga Summits creates a premier platform for global experts to converge, share knowledge, and drive innovation.
            We are dedicated to bridging the gap between academic research and industrial application, fostering a community that shapes a sustainable tomorrow.
          </p>

          {/* Highlights List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {highlights.map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#e0e7ff',
                  color: primaryColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.8rem',
                  marginTop: '0.2rem'
                }}>✓</div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.2rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: '#6b7280', margin: 0 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{
            fontSize: '1rem',
            color: '#4b5563',
            marginBottom: '1.5rem',
            lineHeight: '1.7',
            maxWidth: '600px'
          }}>
            Our conferences feature a rigorous peer-review process, ensuring that only the most impactful and high-quality research is presented. We believe in the power of collaboration to solve global challenges, providing a space where interdisciplinary dialogues flourish and new partnerships are born.
          </p>


        </div>

        {/* Right Image Composition */}
        <div style={{ position: 'relative', height: '100%', minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Background Decorative Elements */}
          <div style={{
            position: 'absolute',
            top: '10%',
            right: '10%',
            width: '80%',
            height: '80%',
            backgroundColor: '#e0e7ff',
            borderRadius: '20px',
            zIndex: 0,
            transform: 'rotate(3deg)'
          }}></div>

          {/* Main Image */}
          <img
            src={heroBg}
            alt="Conference Discussion"
            style={{
              position: 'relative',
              zIndex: 1,
              width: '85%',
              borderRadius: '12px',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              objectFit: 'cover'
            }}
          />

          {/* Floating Card */}
          <div style={{
            position: 'absolute',
            bottom: '15%',
            left: '5%',
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '8px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            zIndex: 2,
            maxWidth: '200px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: primaryColor, lineHeight: '1' }}>50+</div>
            <div style={{ fontSize: '0.9rem', color: '#6b7280', fontWeight: '600', marginTop: '5px' }}>Global Speakers Included</div>
          </div>
        </div>

      </div>
    </section>
  )
}
