import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Topics', href: '#topics' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Venue', href: '#venue' },
    { name: 'Contact', href: '#contact' }
  ]

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">POWERENGSUMMIT2026</span>
        </a>

        <button 
          className="navbar-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index} className="navbar-item">
              <a 
                href={link.href} 
                className="navbar-link"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="navbar-item navbar-cta">
            <a 
              href="#call-for-abstracts" 
              className="navbar-button"
              onClick={handleLinkClick}
            >
              Submit Abstract
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
