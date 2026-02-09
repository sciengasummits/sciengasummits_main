import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import MeetingsSection from '../components/home/MeetingsSection'
import SpeakersPreview from '../components/home/SpeakersPreview'
import Sponsors from '../components/home/Sponsors'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MeetingsSection />
      <SpeakersPreview />
      <Sponsors />
    </div>
  )
}
