import React from 'react'
import './component.css';

const Degree = () => {
  return (
    <div className='bg-[#efedea] pt-[60px] degree p-[2%] scroll-element'>
      <hr className='hr h-1' />
      <p className='text-[#A60000] mt-1 mb-1 text-center text-[20px]'>Get an International Bachelor's Degree in Information Technology, Computing of Software Engineering in 3 Years without JAMB</p>
      <hr className='hr h-1 text-bold mb-[40px]' />
      <div className='unis place-content-around mb-[40px]'>
          <img src={'/MiddleSex.png'} alt="" />
          <img src={'/Bolton.png'} alt="" />
          <img src={'/Portsmouth.png'} alt="" />
          <img src={'/Plymouth.png'} alt="" />
      </div>
    </div>
  )
}

export default Degree
