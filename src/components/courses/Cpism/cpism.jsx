import React from 'react'
import './cpism.css'

const Cpism = () => {
  return (
    <div className="cpism relative w-full h-[100vh] pb-[40px] text-white">
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/30 flex justify-center items-center">
      <div className="text-center mt-[20%] md:mt-0 px-6 md:px-12">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-semibold mb-6 font-mulish">
          Certificate in Proficiency in Information System Management
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed">
          The Aptech Certified Computer Professional Course is a{' '}
          <span className="font-bold">two-year course</span>. It involves{' '}
          <span className="font-bold">four sessions</span> with a series of
          programming languages and IT concepts to learn in each course. After
          the completion of the sessions and passing the examinations, students will be linked
          to any of the universities below to complete their final year.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Cpism
