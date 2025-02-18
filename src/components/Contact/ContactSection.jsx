import React from 'react'
import { useNavigate } from 'react-router-dom';

const ContactSection = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-gray-100 p-8 pt-20 scroll-element'>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
           <img className='w-full md:max-w-[600px]' src='/contact_img.png' alt=''/>
            <div className='flex flex-col justify-center items-start gap-6'>
              <p className='font-semibold text-4xl text-gray-600'>CONTACT US</p>
              <p className='text-gray-500'>HP Plaza, Dada Estate <br/> Osogbo, Osun State, Nigeria</p>
              <p>Tel : +234 912 848 5866 <br/> Email : apechosogbo@gmail.com </p>
              <p className='font-semibold text-xl text-gray-600'>Careers at Aptech Osobgo</p>
              <p className='text-gray-500'>Learn more about our teams, courses and career</p>

              <button onClick={()=>navigate('/courses')} className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Courses</button>
          </div>
       </div>
    </div>
  )
}

export default ContactSection
