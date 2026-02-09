import './CallForAbstracts.css'

function CallForAbstracts() {
  return (
    <section id="call-for-abstracts" className="section cfa-section">
      <div className="cfa-container">
        <h2 className="section-title">📣 Call for Abstracts</h2>
        <div className="cfa-content">
          <p className="cfa-intro">
            You are invited to submit abstracts for consideration in oral or poster presentations. 
            We welcome contributions on theoretical advancements, applied research, and innovative 
            solutions across the spectrum of power and electrical engineering.
          </p>
          
          <div className="cfa-guidelines">
            <h3>Abstract Guidelines:</h3>
            <ul>
              <li>Clear and concise summaries of contributions</li>
              <li>English language submissions</li>
              <li>Include title, authors' names and affiliations</li>
              <li>Abstract text (max 300 words)</li>
              <li>Submitted via our online form or email</li>
            </ul>
          </div>

          <div className="cfa-cta">
            <a href="mailto:info@powerengsummit2026.sciengasummits.com?subject=Abstract Submission" className="cta-button">
              Submit Your Abstract Now
            </a>
          </div>

          <p className="cfa-footer">
            Join global experts in sharing and discussing your work at POWERENGSUMMIT2026.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CallForAbstracts
