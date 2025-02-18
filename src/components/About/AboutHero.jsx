import React from 'react'
import './About.css'

const AboutHero = () => {
  return (
    <div>
        <section className="about-hero relative bg-[#A60000] h-[100vh] text-white py-20 lg:py-32 px-4 lg:px-0 flex items-center justify-center">
        <div className="overlay"></div>
          <div className="max-w-[1200px] about-hero-text mx-auto flex flex-col items-center text-center">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">About Us</h1>
            <p className="text-lg lg:text-xl font-light leading-relaxed max-w-[800px]">
            At Aptech Osogbo, we drive progress by delivering cutting-edge technology solutions that empower businesses and individuals worldwide. Our team of experts is dedicated to innovation, excellence, and transforming ideas into reality—making technology simpler, smarter, and more accessible for everyone.
            </p> 
          </div>
        </section>
    </div>
  )
}

export default AboutHero
