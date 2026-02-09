import './Topics.css'

function Topics() {
  const topics = [
    'Power Generation & Distribution Systems',
    'Smart Grid Technologies',
    'Renewable and Hybrid Energy Systems',
    'Power Electronics and Drives',
    'Electrical Machines and Control',
    'High Voltage Engineering and Insulation',
    'Energy Storage and Battery Technologies',
    'Power System Protection and Stability',
    'Emerging Technologies and AI applications in Energy'
  ]

  return (
    <section id="topics" className="section topics-section">
      <div className="topics-container">
        <h2 className="section-title">🧠 Conference Themes & Topics</h2>
        <p className="topics-intro">
          The summit will feature sessions on a broad range of subjects including (but not limited to):
        </p>
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <div key={index} className="topic-card">
              <div className="topic-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="topic-title">{topic}</h3>
            </div>
          ))}
        </div>
        <p className="topics-note">
          These tracks are designed to reflect both traditional and cutting-edge areas in power and electrical engineering.
        </p>
      </div>
    </section>
  )
}

export default Topics
