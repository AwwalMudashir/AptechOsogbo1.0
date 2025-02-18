import React from 'react'
import AboutHero from './AboutHero'
import AboutSection from './AboutSection'
import GallerySection from './GallerySection'
import EventsSection from './EventsSection'
import FeaturedPersonnel from './FeaturedStaff'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutSection/>
      <GallerySection/>
      <EventsSection/>
      <FeaturedPersonnel/>
    </div>
  )
}

export default About
