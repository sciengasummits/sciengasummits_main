import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-container">
        <h2 className="section-title">📧 Contact & Support</h2>
        <p className="contact-intro">
          Have questions or need assistance? Feel free to reach out:
        </p>
        <div className="contact-card">
          <div className="contact-icon">✉️</div>
          <h3>Email Us</h3>
          <a href="mailto:info@powerengsummit2026.sciengasummits.com" className="contact-email">
            info@powerengsummit2026.sciengasummits.com
          </a>
          <p className="contact-note">
            We typically respond within 24-48 hours
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
