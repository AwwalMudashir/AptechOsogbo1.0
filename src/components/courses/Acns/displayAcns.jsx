import React from 'react'
import './acns.css'
import AcnsOutline from './acnsOutline'

const DisplayAcns = () => {
  return (
    <div>
      <div className='acns-home'>
      <div className='pt-[20%] text-white'>
      <h1 className='text-center mb-[10px] text-6xl'>Aptech Certified Network Specialist </h1>
      <p className='pl-[2%] pr-[2%] text-[#c0bfbf]'>
      ACNS is the leading Networking Career Course from Aptech. It is a hardware, networking, system administration and a database course. In other terms, it has all the current IT technologies except programming and application development. This course offers the FASTEST and the MOST ECONOMICAL pathway for a degree from a U.K. institution.
      </p>
        </div>
      </div>
      <div className='acns-course pl-[2%] pr-[2%] text-2xl pt-[20px] pb-[20px]'>
        <h1>Who Should Do this course !</h1>
        <div className='acns-flex  place-content-between mt-[20px]'>
          <img src={'/comp_networking.jpg'} alt=""  className='w-[48%]'/>
        <p className='w-[48%]'>
        As the student might plan to go for the final year of the degree program, it is essential the student should be a SSCE with 5 credits including English and Math. Otherwise the student can have any additional qualifications like OND, HND, B.Sc., etc. As the course is focused on building skills in hardware, networking, system administration and database, and prepares the student to take 4 international certifications, it is a job oriented course. It is more suitable for OND, HND and Graduates, as it equips them with market demand skills.

        </p>
        </div>
       
      </div>
      <AcnsOutline/>
    </div>
  )
}

export default DisplayAcns
