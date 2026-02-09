import './Speakers.css'

function Speakers() {
  const speakers = [
    {
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
      name: 'Dr. Michael Chen',
      title: 'Professor of Electrical Engineering',
      affiliation: 'MIT, USA',
      expertise: 'Smart Grid Technologies'
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      name: 'Dr. Sarah Williams',
      title: 'Director of Energy Research',
      affiliation: 'Oxford University, UK',
      expertise: 'Renewable Energy Systems'
    },
    {
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
      name: 'Prof. James Anderson',
      title: 'Head of Power Systems',
      affiliation: 'Stanford University, USA',
      expertise: 'Power Electronics'
    },
    {
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      name: 'Dr. Maria Rodriguez',
      title: 'Chief Technology Officer',
      affiliation: 'Siemens Energy, Germany',
      expertise: 'Energy Storage Solutions'
    }
  ]

  return (
    <section id="speakers" className="section speakers-section">
      <div className="speakers-container">
        <h2 className="section-title">🎤 Featured Speakers</h2>
        <p className="speakers-intro">
          Meet distinguished keynote speakers and industry leaders who will share their expertise at POWERENGSUMMIT2026
        </p>
        
        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-card">
              <div className="speaker-image-wrapper">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="speaker-image"
                />
              </div>
              <div className="speaker-info">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-title">{speaker.title}</p>
                <p className="speaker-affiliation">{speaker.affiliation}</p>
                <div className="speaker-expertise">
                  <span className="expertise-badge">{speaker.expertise}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="speakers-note">
          More speakers will be announced soon. Stay tuned for updates!
        </p>
      </div>
    </section>
  )
}

export default Speakers
