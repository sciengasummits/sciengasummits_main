import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  const links = [
    { name: 'About Us', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Sessions & Tracks', href: '#topics' },
    { name: 'Venue & Hospitality', href: '#venue' },
    { name: 'Sponsors & Exhibitors', href: '#sponsors' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms & Conditions', href: '#terms' }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>POWERENGSUMMIT2026</h3>
            <p>Global Summit on Power Energy and Electrical Engineering</p>
            <p className="footer-date">March 23–25, 2027 | Munich, Germany</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>
              <a href="mailto:info@powerengsummit2026.sciengasummits.com">
                info@powerengsummit2026.sciengasummits.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} POWERENGSUMMIT2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
