import './ImportantDates.css'

function ImportantDates() {
  const dates = [
    { label: 'Conference Dates', value: 'March 23–25, 2027', icon: '📅' },
    { label: 'Abstract Submission Deadline', value: 'To be announced', icon: '📝' },
    { label: 'Early Bird Registration Deadline', value: 'To be announced', icon: '🎟️' },
    { label: 'Standard Registration Deadline', value: 'To be announced', icon: '📋' }
  ]

  return (
    <section id="dates" className="section dates-section">
      <div className="dates-container">
        <h2 className="section-title">📅 Important Dates</h2>
        <div className="dates-grid">
          {dates.map((date, index) => (
            <div key={index} className="date-card">
              <div className="date-icon">{date.icon}</div>
              <h3 className="date-label">{date.label}</h3>
              <p className="date-value">{date.value}</p>
            </div>
          ))}
        </div>
        <p className="dates-note">Stay tuned for updates on deadlines and notifications.</p>
      </div>
    </section>
  )
}

export default ImportantDates
