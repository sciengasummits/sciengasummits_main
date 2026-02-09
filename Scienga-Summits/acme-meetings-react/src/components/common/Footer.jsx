import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export default function Footer() {
  const primaryColor = '#3F51B5';

  const [subData, setSubData] = React.useState({ name: '', email: '' });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubChange = (e) => {
    setSubData({ ...subData, [e.target.name]: e.target.value });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!subData.email) return;
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subData),
      });
      const data = await response.json();
      if (data.ok) {
        alert(data.message || 'Thank you for subscribing!');
        setSubData({ name: '', email: '' });
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Error connecting to server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer style={{
      backgroundColor: '#1e2029',
      color: '#cbd5e1',
      padding: '4rem 0 2rem 0',
      fontFamily: 'sans-serif',
      fontSize: '0.9rem'
    }}>
      <div className="container footer-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem',
        marginBottom: '3.5rem',
        alignItems: 'start'
      }}>

        <div className="footer-col" style={{ display: 'flex', flexDirection: 'column' }}>
          <img src={logo} alt="Scienga Summits" style={{ maxWidth: '200px', marginBottom: '1.5rem' }} />
          <p style={{ lineHeight: '1.6', fontSize: '0.85rem' }}>
            Bridging the gap between academic research and industrial application for a sustainable tomorrow.
          </p>
        </div>

        <div className="footer-col">
          <h4 style={{
            fontSize: '1rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'white',
            textTransform: 'uppercase',
            borderBottom: `2px solid ${primaryColor}`,
            display: 'inline-block',
            paddingBottom: '5px'
          }}>Quick Links</h4>
          <ul className="footer-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { name: 'About', path: '/about' },
              { name: 'Meetings', path: '/#meetings' },
              { name: 'Terms & Conditions', path: '/terms' },
              { name: 'Refund Policy', path: '/refund-cancellation' },
              { name: 'Privacy', path: '/privacy' },
              { name: 'Prices', path: '/prices' },
              { name: "FAQ's", path: '/faqs' }
            ].map((item, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="footer-dot" style={{ color: primaryColor, fontSize: '10px' }}>●</span>
                <Link to={item.path} style={{ textDecoration: 'none', color: '#cbd5e1', fontSize: '0.9rem', transition: 'color 0.2s' }}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 style={{
            fontSize: '1rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'white',
            textTransform: 'uppercase',
            borderBottom: `2px solid ${primaryColor}`,
            display: 'inline-block',
            paddingBottom: '5px'
          }}>Upcoming Conferences</h4>

          <div className="footer-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h5 style={{ color: 'white', fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '0.95rem' }}>SEMICONMEET2025</h5>
              <p style={{ fontSize: '0.85rem', margin: '0 0 3px 0' }}>Intl Meet on Semiconductors</p>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>April 10-12, 2025 | Budapest</p>
            </div>
            <div>
              <h5 style={{ color: 'white', fontWeight: 'bold', margin: '0 0 5px 0', fontSize: '0.95rem' }}>RENEWABLEMEET2025</h5>
              <p style={{ fontSize: '0.85rem', margin: '0 0 3px 0' }}>Intl Meet on Renewable Energy</p>
              <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>June 19-21, 2025 | Zurich</p>
            </div>
            <a href="/#meetings" style={{
              display: 'inline-block',
              padding: '8px 16px',
              border: `1px solid ${primaryColor}`,
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '0.8rem',
              fontWeight: '600',
              marginTop: '0.5rem',
              transition: 'background 0.3s'
            }}
              onMouseEnter={(e) => e.target.style.backgroundColor = primaryColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              View More
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 style={{
            fontSize: '1rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'white',
            textTransform: 'uppercase',
            borderBottom: `2px solid ${primaryColor}`,
            display: 'inline-block',
            paddingBottom: '5px'
          }}>Get In Touch</h4>

          <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>Subscribe to our Newsletter</p>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={subData.name}
              onChange={handleSubChange}
              required
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid #4b5563',
                padding: '12px',
                color: 'white',
                borderRadius: '6px',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={subData.email}
              onChange={handleSubChange}
              required
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid #4b5563',
                padding: '12px',
                color: 'white',
                borderRadius: '6px',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: primaryColor,
                color: 'white',
                border: 'none',
                padding: '12px',
                borderRadius: '6px',
                fontWeight: '600',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                marginTop: '0.5rem',
                transition: 'opacity 0.3s',
                opacity: isSubmitting ? 0.7 : 1
              }}>
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>

      </div>

      <div className="container" style={{ textAlign: 'center', borderTop: '1px solid #334155', paddingTop: '2rem', marginTop: '2rem' }}>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
          Copyright © {new Date().getFullYear()} Scienga Summits. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
