import React from 'react'
import { assets } from '../assets/assets'
import './component.css'
import { useNavigate } from 'react-router-dom'



const Courses = () => {

  const navigate = useNavigate();  
  
  return (
    
    <div className='p-[30px] w-[full] bg-[#efedea] courses'>

<div className="course-main w-[100%] flex">

    <div className='w-[50%] course-img'>
    <img
        src={'/courses2.0.jpg'}
        className="shadow-lg lg:mr-[2%] w-full h-[100%] object-cover"
        alt="Diverse technology courses"
      />
    </div>

  

      <div className="hero-b text-xl text-white bg-gradient-to-br from-[#FFB900] to-[#A60000] p-8  shadow-xl">
      <h1 className="pt-[100px] text-center pb-[15px] text-4xl md:text-5xl font-extrabold text-white">
        Our Courses
      </h1>
        <p className="mb-6">
          Courses in technology cover a broad spectrum of subjects designed to equip learners with the skills and knowledge necessary to thrive in the rapidly evolving tech industry. These courses vary in length, depth, and delivery methods, catering to a diverse range of learners from beginners to advanced professionals.
        </p>
        <p className="mb-6">
          "Graduates of our program have gone on to work at leading tech firms, startups, and even launch their own successful ventures. Our career services team is dedicated to helping you polish your resume, prepare for interviews, and connect with potential employers."
        </p>
        <p>
          By providing detailed and compelling information about their courses, tech companies can effectively communicate the value and benefits to potential learners.
        </p>
      </div>
</div>


      <div className='career-courses mt-[40px] scroll-element'>
       
       <h1 className='text-white'>Career Courses</h1>
       <ul>
        <li className='hover:cursor-pointer hover:text-white scroll-element' onClick={()=>navigate('/courses/Accp')}>
       Aptech Certified Computer Professional (ACCP)
        </li>
        <li className='hover:cursor-pointer hover:text-white scroll-element' onClick={()=>navigate('/courses/Acns')}>
       Aptech Certified Network Specialist (ACNS)
        </li>
        <li className='hover:cursor-pointer hover:text-white scroll-element' onClick={()=>navigate('/courses/Cpism')}>
       Certificate of Proficiency in Information Systems Management (CPISM)
        </li>
       </ul>
       </div>
      <div className='career-courses mt-[40px] scroll-element'>
        <div>

       <h1 className='text-white'>Smart Professional Courses</h1>
       <ul>
        <li className='hover:cursor-pointer hover:text-white scroll-element' onClick={()=>navigate('/courses/Responsive-Web-Development')}>
        Responsive Wesbsite Development
        </li>
        <li className='hover:cursor-pointer hover:text-white scroll-element'>
        UI UX
        </li>
        <li className='hover:cursor-pointer hover:text-white scroll-element'>
       Certified Ethical Hacking
        </li>

       </ul>
        </div>
       <div>

       </div>
      </div>
      <div className='career-courses mt-[40px] scroll-element'>
       <h1 className='text-white'>AI & Data Science</h1>
       <ul>
        <li onClick={()=>navigate('/AI-DataScience')} className='hover:cursor-pointer hover:text-white scroll-element'>
       AI & Data Science
        </li>
       </ul>
       <div>

       </div>
      </div>
      <div className='career-courses mt-[40px] scroll-element'>
       <h1 className='text-white'>Networking</h1>
       <ul>
       <li className='hover:cursor-pointer hover:text-white scroll-element' onClick={()=>navigate('/courses/Acns')}>
       Aptech Certified Network Specialist (ACNS)
        </li>
       </ul>
       <div>

       </div>
      </div>
      <div className='career-courses mt-[40px] scroll-element'>
       <h1 className='text-white'>Teens Course</h1>
       <ul>
       <li className='hover:cursor-pointer hover:text-white scroll-element' onClick={()=>navigate('/courses/Responsive-Web-Development')}>
        Responsive Wesbsite Development
        </li>
       </ul>
       <div>

       </div>
      </div>
    </div>
  )
}

export default Courses
