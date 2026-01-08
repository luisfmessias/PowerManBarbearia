import React from 'react'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import GallerySection from '../components/GallerySection'
import AboutSection from '../components/AboutSection'
import IdeaSection from '../components/IdeaSection'
import LocationSection from '../components/LocationSection'
import ContactSection from '../components/ContactSection'

function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <IdeaSection />
      <LocationSection />
      <ContactSection />
    </div>
  )
}

export default Home
