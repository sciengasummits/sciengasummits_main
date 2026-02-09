import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-badge">🌐 POWERENGSUMMIT2026</div>
          <h1 className="hero-title">
            Global Summit on Power Energy<br />and Electrical Engineering 2026
          </h1>
          <div className="hero-details">
            <span className="hero-date">📅 March 23–25, 2027</span>
            <span className="hero-divider">|</span>
            <span className="hero-location">📍 Munich, Germany</span>
          </div>
          <p className="hero-description">
            Welcome to the official site of the POWERENGSUMMIT2026 — a premier international summit 
            bringing together leading experts, engineers, researchers, and industry innovators in power 
            systems, energy technologies, and electrical engineering from around the world.
          </p>
          <div className="hero-cta">
            <a href="#call-for-abstracts" className="cta-button">Submit Your Abstract</a>
            <a href="#registration" className="cta-button cta-button-secondary">Register Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
