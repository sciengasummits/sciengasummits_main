import './Registration.css'

function Registration() {
  const categories = [
    {
      name: 'Early Bird',
      icon: '🐦',
      features: ['Access to all sessions', 'Conference materials', 'Networking events', 'Certificate of attendance'],
      note: 'Limited time offer'
    },
    {
      name: 'Regular',
      icon: '🎫',
      features: ['Access to all sessions', 'Conference materials', 'Networking events', 'Certificate of attendance'],
      note: 'Standard registration'
    },
    {
      name: 'Student',
      icon: '🎓',
      features: ['Access to all sessions', 'Conference materials', 'Networking events', 'Certificate of attendance'],
      note: 'Valid student ID required'
    }
  ]

  return (
    <section id="registration" className="section registration-section">
      <div className="registration-container">
        <h2 className="section-title">📝 Registration</h2>
        <p className="registration-intro">
          Attendees can choose from multiple registration categories. Registration grants access to all sessions, 
          keynote talks, panel discussions, and networking events.
        </p>
        
        <div className="registration-grid">
          {categories.map((category, index) => (
            <div key={index} className="registration-card">
              <div className="registration-icon">{category.icon}</div>
              <h3 className="registration-name">{category.name}</h3>
              <ul className="registration-features">
                {category.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <p className="registration-note">{category.note}</p>
            </div>
          ))}
        </div>

        <div className="registration-cta">
          <a href="mailto:info@powerengsummit2026.sciengasummits.com?subject=Registration Inquiry" className="cta-button">
            Register Now
          </a>
        </div>

        <p className="registration-footer">
          Pricing details and payment options will be announced soon.
        </p>
      </div>
    </section>
  )
}

export default Registration
