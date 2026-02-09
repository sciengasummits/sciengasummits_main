import './Gallery.css'

function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80',
      title: 'Keynote Presentations',
      description: 'World-class speakers sharing insights'
    },
    {
      url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
      title: 'Technical Sessions',
      description: 'In-depth research discussions'
    },
    {
      url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80',
      title: 'Networking Events',
      description: 'Connect with industry leaders'
    },
    {
      url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80',
      title: 'Exhibition Hall',
      description: 'Latest technologies on display'
    },
    {
      url: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&q=80',
      title: 'Workshop Sessions',
      description: 'Hands-on learning experiences'
    },
    {
      url: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80',
      title: 'Panel Discussions',
      description: 'Expert insights and debates'
    }
  ]

  return (
    <section id="gallery" className="section gallery-section">
      <div className="gallery-container">
        <h2 className="section-title">📸 Conference Experience</h2>
        <p className="gallery-intro">
          Explore what makes POWERENGSUMMIT2026 a premier event for power and electrical engineering professionals
        </p>
        
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <div className="gallery-image-wrapper">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{image.title}</h3>
                  <p className="gallery-description">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
