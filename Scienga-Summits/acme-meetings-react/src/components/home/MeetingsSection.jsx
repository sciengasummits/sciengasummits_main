import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const meetingsData = {
    2025: [
        {
            id: 1,
            title: "SEMICONMEET2025",
            description: "International Meet & Expo on Semiconductors and Optoelectronics",
            location: "BUDAPEST, HUNGARY",
            date: "APRIL 10-12, 2025"
        },
        {
            id: 2,
            title: "RENEWABLEMEET2025",
            description: "International Meet & Expo on Renewable and Sustainable Energy",
            location: "ZURICH, SWITZERLAND",
            date: "JUNE 19-21, 2025"
        },
        {
            id: 3,
            title: "AEROMEET2025",
            description: "International Meet & Expo on Aerospace and Aeronautical Engineering",
            location: "ZURICH, SWITZERLAND",
            date: "JUNE 19-21, 2025"
        },
        {
            id: 4,
            title: "CIVILMEET2025",
            description: "International Meet & Expo on Civil, Structural and Environmental Engineering",
            location: "MILAN, ITALY",
            date: "NOVEMBER 17-19, 2025"
        },
        {
            id: 5,
            title: "FOODMEET2025",
            description: "International Meet & Expo on Food Science, Nutrition and Public Health",
            location: "MILAN, ITALY",
            date: "NOVEMBER 17-19, 2025"
        },
        {
            id: 6,
            title: "MECHANICALMEET2025",
            description: "International Meet & Expo on Mechanical, Materials and Manufacturing Engineering",
            location: "CHICAGO, USA",
            date: "DECEMBER 04-06, 2025"
        }
    ],
    2026: [
        {
            id: 7,
            title: "SEMICONMEET2026",
            description: "2nd International Meet & Expo on Semiconductors and Optoelectronics",
            location: "ROME, ITALY",
            date: "APRIL 15-17, 2026"
        },
        {
            id: 8,
            title: "RENEWABLEMEET2026",
            description: "2nd International Meet & Expo on Renewable and Sustainable Energy",
            location: "PARIS, FRANCE",
            date: "JUNE 22-24, 2026"
        }
    ]
}

export default function MeetingsSection() {
    const [activeYear, setActiveYear] = useState(2025)

    // Colors based on the screenshot (Royal Blue / Indigo)
    const primaryColor = '#3F51B5'
    const secondaryColor = '#ffffff'
    const textColor = '#333333'
    const subTextColor = '#666666'

    return (
        <section id="meetings" style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
            <div className="container">

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 8vw, 2.5rem)',
                        fontWeight: 'bold',
                        color: primaryColor,
                        marginBottom: '1rem'
                    }}>
                        Meetings
                    </h2>
                    {/* Divider with Icon */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                        <div style={{ width: '100px', height: '1px', backgroundColor: primaryColor, opacity: 0.5 }}></div>
                        <span style={{ color: primaryColor, fontSize: '1.5rem' }}>∾</span> {/* Approx for the loop/infinity symbol */}
                        <div style={{ width: '100px', height: '1px', backgroundColor: primaryColor, opacity: 0.5 }}></div>
                    </div>
                </div>

                {/* Year Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    {[2025, 2026].map(year => (
                        <button
                            key={year}
                            onClick={() => setActiveYear(year)}
                            style={{
                                backgroundColor: activeYear === year ? primaryColor : 'transparent',
                                color: activeYear === year ? secondaryColor : textColor,
                                border: `1px solid ${activeYear === year ? primaryColor : '#ccc'}`,
                                padding: '10px 30px',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                borderRadius: '4px',
                                transition: 'all 0.3s ease',
                                minWidth: '100px'
                            }}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {/* Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {meetingsData[activeYear].map((meeting) => (
                        <div key={meeting.id} style={{
                            backgroundColor: 'white',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                            borderRadius: '4px',
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            borderBottom: `4px solid ${primaryColor}`, // Blue bottom border
                            textAlign: 'left' // Align text left as per screenshot roughly, though titles seem a bit centered? Screenshot looks aligned left/center differently. Let's stick to left for clean look or center if screenshot implies. Screenshot cards look left-aligned content.
                        }}>
                            {/* Location and Date */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '15px',
                                marginBottom: '1.5rem',
                                fontSize: '0.75rem',
                                fontWeight: 'bold',
                                color: '#333',
                                textTransform: 'uppercase'
                            }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    {/* Pin Icon */}
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    {meeting.location}
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    {/* Calendar Icon */}
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    {meeting.date}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 style={{
                                fontSize: '1.25rem',
                                fontWeight: 'bold',
                                color: '#333',
                                marginBottom: '0.5rem',
                                textAlign: 'left'
                            }}>
                                {meeting.title}
                            </h3>

                            {/* Description */}
                            <p style={{
                                color: subTextColor,
                                fontSize: '1rem',
                                lineHeight: '1.5',
                                marginBottom: '2rem',
                                flexGrow: 1, // Push button down
                                textAlign: 'left'
                            }}>
                                {meeting.description}
                            </p>

                            {/* Read More Button */}
                            <div style={{ textAlign: 'right' }}>
                                <Link to="#" style={{
                                    display: 'inline-block',
                                    backgroundColor: primaryColor,
                                    color: 'white',
                                    padding: '8px 20px',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    fontSize: '0.875rem',
                                    fontWeight: '500'
                                }}>
                                    Read More
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
