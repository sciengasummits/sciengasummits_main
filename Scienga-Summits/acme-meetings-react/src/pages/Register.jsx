import React, { useEffect, useState } from 'react'
import PageHeader from '../components/common/PageHeader'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'

export default function Register() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        plan: 'Speaker' // Default plan
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.ok) {
                alert('Registration successful! We will contact you with further details.');
                setFormData({ name: '', email: '', plan: 'Speaker' });
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting registration:', error);
            alert('Error connecting to server. Please ensure the backend is running.');
        } finally {
            setIsSubmitting(false);
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
                title="Register Now"
                breadcrumbs={[
                    { label: 'Home', link: '/' },
                    { label: 'Register', link: null }
                ]}
            />

            <div style={{ backgroundColor: '#f9fafb', padding: '5rem 0' }}>
                <div className="container" style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: 'clamp(1.5rem, 5vw, 3rem)',
                        borderRadius: '12px',
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#111827', textAlign: 'center' }}>
                            Conference Registration
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

                            <div style={{ marginBottom: '2rem' }}>
                                <label htmlFor="plan" style={labelStyle}>Select Plan</label>
                                <select
                                    id="plan"
                                    name="plan"
                                    value={formData.plan}
                                    onChange={handleChange}
                                    style={inputStyle}
                                    required
                                >
                                    <option value="Speaker">Speaker ($749)</option>
                                    <option value="Delegate">Delegate ($899)</option>
                                    <option value="Student">Student ($299)</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    backgroundColor: '#3F51B5',
                                    color: 'white',
                                    padding: '12px 30px',
                                    border: 'none',
                                    borderRadius: '6px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                    width: '100%',
                                    transition: 'background-color 0.3s',
                                    opacity: isSubmitting ? 0.7 : 1
                                }}
                                onMouseOver={(e) => !isSubmitting && (e.target.style.backgroundColor = '#303f9f')}
                                onMouseOut={(e) => !isSubmitting && (e.target.style.backgroundColor = '#3F51B5')}
                            >
                                {isSubmitting ? 'Processing...' : 'Complete Registration'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
