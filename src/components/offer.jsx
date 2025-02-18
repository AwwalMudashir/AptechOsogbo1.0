import React from 'react'
import './component.css'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import TiltedCard from './Animations/TitleCard'

const Offer = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-[#efedea] pt-[60px] w-[100%] px-[20px] pb-12 scroll-element'>
      <h1 className='text-center  text-4xl md:text-6xl font-bold offer-head'>What We <span className='of'>Offer</span></h1>
<p className='text-center w-[80%] mx-auto text-sm md:text-[20px] mt-5' style={{lineHeight:'1.5'}} >
  We provide innovative solutions that redefine the digital landscape. From cutting-edge software development to state-of-the-art hardware solutions, we're committed to pushing the boundaries of technology. 
</p>
      <div className='offer-courses grid lg:grid-cols-3 w-[100%] m-auto gap-[30px] pt-[30px]'>
        <div className="block w-[330px] mt-[20px] offer-element cursor-pointer" onClick={()=>navigate('/courses')}>
          <div class="image"><img src={assets.CareerCourse} className='w-full h-[220px]' alt=""/></div>
          <div className='p-[15px] bg-[#A60000]  mt-1 image-text'>
            <h3 className='text-2xl text-white'>Career Courses</h3>
            <span className='text-xl text-gray-200'>3 Courses</span>
          </div>
        </div>
        <div className="block w-[330px] mt-[20px] offer-element cursor-pointer " onClick={()=>navigate('/courses')}>
          <div class="image"><img src={assets.SmartProfessional} className='w-full h-[220px]' alt=""/></div>
          <div className='p-[15px] bg-[#A60000] text-white text-xl mt-1 image-text'>
            <h3 className='text-2xl text-white'>Smart Professional Courses</h3>
            <span className='text-xl text-gray-200'>1 Course</span>
          </div>
        </div>
        <div className="block w-[330px] mt-[20px] offer-element cursor-pointer" onClick={()=>navigate('/courses')}>
          <div class="image"><img src={assets.Multimedia} className='w-full h-[220px]' alt=""/></div>
          <div className='p-[15px] bg-[#A60000] text-white text-xl mt-1 image-text'>
            <h3 className='text-2xl text-white'>Multimedia Specialist</h3>
            <span className='text-xl text-gray-200'>2 Courses</span>
          </div>
        </div>
        <div className="block w-[330px] mt-[20px] offer-element cursor-pointer" onClick={()=>navigate('/courses')}>
          <div class="image"><img src={assets.DataScience} className='w-full h-[220px]' alt=""/></div>
          <div className='p-[15px] bg-[#A60000] text-white text-xl mt-1 image-text'>
            <h3 className='text-2xl text-white'>AI & Data Science</h3>
            <span className='text-xl text-gray-200'>1 Course</span>
          </div>
        </div>
        <div className="block w-[330px] mt-[20px] offer-element cursor-pointer" onClick={()=>navigate('/courses')}>
          <div class="image"><img src={assets.Networking} className='w-full h-[220px]' alt=""/></div>
          <div className='p-[15px] bg-[#A60000] text-white text-xl mt-1 image-text'>
            <h3 className='text-2xl text-white'>Networking</h3>
            <span className='text-xl text-gray-200'>1 Course</span>
          </div>
        
        </div>
        <div className="block w-[330px] mt-[20px] offer-element cursor-pointer" onClick={()=>navigate('/courses')} >
          <div class="image"><img src={assets.TeensCourse} className='w-full h-[220px]' alt=""/></div>
          <div className='p-[15px] bg-[#A60000] text-white text-xl mt-1 image-text'>
            <h3 className='text-2xl text-white'>Teens Courses</h3>
            <span className='text-xl text-gray-200'>1 Course</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
