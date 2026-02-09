import './Venue.css'

function Venue() {
  return (
    <section id="venue" className="section venue-section">
      <div className="venue-container">
        <h2 className="section-title">🏙 Venue – Munich, Germany</h2>
        <div className="venue-content">
          <div className="venue-text">
            <p>
              Munich is a global hub for engineering excellence and innovation. As one of Europe's 
              leading cities for technology and research, Munich offers an inspiring backdrop for 
              scientific exchange and professional networking.
            </p>
            <p>
              Explore the city's rich culture, architecture, and vibrant lifestyle while attending 
              the summit. From historic landmarks to cutting-edge research institutions, Munich 
              provides the perfect environment for collaboration and discovery.
            </p>
            <div className="venue-highlights">
              <div className="venue-highlight">
                <span className="venue-highlight-icon">🏛️</span>
                <span>Rich Cultural Heritage</span>
              </div>
              <div className="venue-highlight">
                <span className="venue-highlight-icon">🔬</span>
                <span>Leading Research Hub</span>
              </div>
              <div className="venue-highlight">
                <span className="venue-highlight-icon">🌍</span>
                <span>International Connectivity</span>
              </div>
              <div className="venue-highlight">
                <span className="venue-highlight-icon">🍺</span>
                <span>Vibrant Local Culture</span>
              </div>
            </div>
          </div>
          <div className="venue-image">
            <img 
              src="https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&q=80" 
              alt="Munich cityscape"
              className="venue-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Venue
