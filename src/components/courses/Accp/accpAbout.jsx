import React from 'react'
import './accp.css'

const AccpAbout = () => {
  return (
    <div className='accp-about p-[2%]'>
      <h1 className='text-4xl mt-12 mb-8 scroll-element'>Why ACCP ?</h1>
      <div className='accp-about-content flex place-content-between w-full'>
        <img src={'/accp-about.webp'} alt="" />
        <p className='ml-8'>Aptech's ACCP is the largest growing course, with over 65% of students offering it, It entails learning multiple programming languages over the span of two years, with the final year being in on of Aptech's partner universities abroad. The two year program is divided into multiple sectors which include JAVA & IOT, JAVA & AI/ML, .NET & Oracle etc. Each of these sectors is divided into four terms, with a certificate being handed to the student at the end of every term.
          <br/>
          <button className='bg-[#FFB900] w-[20%] rounded-xl mt-[8px] text-white h-[50px] px-4'  onClick={()=>navigate('/enroll-now')}>
        Enroll Now
       </button>
        </p>
      </div>
    </div>
  )
}

export default AccpAbout
