import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  }

  const mobileLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'TERMS & CONDITIONS', path: '/terms' },
    { name: 'REFUND CANCELLATION', path: '/refund-cancellation' },
    { name: 'PRIVACY', path: '/privacy' },
    { name: 'PRICES', path: '/prices' },
    { name: 'REGISTER', path: '/register' },
    { name: 'FAQS', path: '/faqs' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header style={{
      background: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1000
    }}>
      <div className="container nav-container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1400px', // Widened to allow more spread
        padding: '0 20px',  // Fixed typo
        height: '100%',
        position: 'relative'
      }}>
        <Link to="/" className="nav-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', marginLeft: '-10px' }}>
          <img src={logo} alt="Scienga Summits" style={{ height: '90px' }} />
        </Link>

        {/* Desktop Menu */}
        <nav className="hide-mobile" style={{ display: 'flex', gap: '15px', alignItems: 'center', marginRight: '-10px' }}>
          {mobileLinks.map((link) => (
            <Link key={link.path} to={link.path} className="nav-link" style={linkStyle}>{link.name}</Link>
          ))}
        </nav>

        <button
          className="show-mobile nav-toggle"
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '10px',
            color: '#3F51B5',
            marginRight: '-10px'
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Sidebar/Menu overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '100px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'white',
          zIndex: 999,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          animation: 'fadeIn 0.3s ease'
        }}>
          {mobileLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link"
              style={{ ...linkStyle, fontSize: '1rem' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
