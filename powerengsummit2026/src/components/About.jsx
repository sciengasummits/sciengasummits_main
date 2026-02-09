import './About.css'

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="about-container">
        <h2 className="section-title">📌 About the Summit</h2>
        
        <div className="about-image-banner">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80" 
            alt="Conference attendees networking"
            className="about-banner-img"
          />
        </div>

        <div className="about-content">
          <p>
            The <strong>Global Summit on Power Energy and Electrical Engineering</strong> is designed to 
            provide a platform for scientists, engineers, academicians, industry leaders, and professionals 
            to exchange knowledge, present groundbreaking research, and foster collaboration across power 
            and electrical engineering disciplines.
          </p>
          <p>
            This summit focuses on driving innovation and sustainable solutions in areas like smart grids, 
            renewable power systems, energy storage, high-voltage engineering, and more. Attendees will have 
            the opportunity to participate in keynote talks, technical sessions, poster presentations, and 
            interactive workshops.
          </p>
          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">🎤</div>
              <h3>Keynote Speakers</h3>
              <p>Learn from world-renowned experts and industry leaders</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🔬</div>
              <h3>Research Presentations</h3>
              <p>Share and discover cutting-edge research findings</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🤝</div>
              <h3>Networking</h3>
              <p>Connect with peers and build lasting collaborations</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">💡</div>
              <h3>Workshops</h3>
              <p>Hands-on sessions on emerging technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
