import React, { useEffect, useState } from 'react'
import PageHeader from '../components/common/PageHeader'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

export default function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.ok) {
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Error connecting to server. Please ensure the backend is running.');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#333'
  };

  return (
    <>
      <Navbar />
      <PageHeader
        title="Contact Us"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Contact', link: null }
        ]}
      />

      <div style={{ backgroundColor: '#f9fafb', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>

            {/* Contact Information Column */}
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111827' }}>
                Get In Touch
              </h2>
              <p style={{ color: '#6b7280', marginBottom: '3rem', lineHeight: '1.6' }}>
                Have questions about registration, speaking opportunities, or sponsorship?
                Our team is here to help you. Reach out to us through any of the following channels.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                {/* Address */}
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{
                    backgroundColor: '#e0e7ff',
                    color: '#3F51B5',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0
                  }}>
                    📍
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111' }}>Address</h4>
                    <p style={{ color: '#666', lineHeight: '1.5' }}>
                      Scienga Summits<br />
                      Mariamman Koil Street, Mettupalayam,<br />
                      Pondicherry-605010, India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{
                    backgroundColor: '#e0e7ff',
                    color: '#3F51B5',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0
                  }}>
                    ✉️
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111' }}>Email</h4>
                    <p style={{ color: '#666', lineHeight: '1.5' }}>
                      contact@sciengasummits.org<br />
                      support@sciengasummits.org
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{
                    backgroundColor: '#e0e7ff',
                    color: '#3F51B5',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0
                  }}>
                    🕒
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#111' }}>Working Hours</h4>
                    <p style={{ color: '#666', lineHeight: '1.5' }}>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form Column */}
            <div style={{
              backgroundColor: 'white',
              padding: '3rem',
              borderRadius: '12px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#111827' }}>
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="name" style={labelStyle}>Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="email" style={labelStyle}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="subject" style={labelStyle}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                    placeholder="Conference Inquiry"
                  />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label htmlFor="message" style={labelStyle}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }}
                    required
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#3F51B5',
                    color: 'white',
                    padding: '12px 30px',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    width: '100%',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#303f9f'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#3F51B5'}
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
