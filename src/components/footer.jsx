import React from 'react'
import './component.css'

const Footer = () => {

  return (
    <div className='bg-[#A60000] scroll-element' style={{bottom:"0",zIndex:"10"}}>
    <div className='footer grid p-[35px]'>
    <div className='foots grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  text-white gap-[40px]'>
      <div className=''>
        <h1 className='texl-xl'>Aptech</h1>
        <p>Aptech Computer Education commenced its education and training business in 1986 and has globally trained over 6.5 million students. Aptech is an ISO 9001:2008 organization and the first IT Training and Education company to get this certification for Education Support Services in 1993.</p>
        <div className='flex gap-6 mt-3'>
          <a href="https://x.com/aptechltd">
        <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="">

        <i class="fa-brands fa-instagram"></i>
          </a>
        <i class="fa-brands fa-facebook-f"></i>
        </div>
      </div>
      <div>
        <h1>Contact Us</h1>
        <ul>
          <li>
    <b>Address</b>: HP Plaza, Police Station Data Estate, opposite Dada Estate Road, Osogbo 230261, Osun
          </li>
          <li>
<b>Hours</b>: 9:00 am - 5:00 pm
          </li>
          <li>
<b>Phone</b>: +234 912 848 5866
          </li>
        </ul>
      </div>
      <div className='md:hidden sm:hidden lg:block'>
        <h1>Links</h1>
        <ul>
          <li>Courses</li>
          <li>About</li>
          <li>Contact</li>
          <li>Enroll Now</li>
        </ul>
      </div>
    </div>
    <hr className='mt-[20px] mb-[20px]' />
    <p className='text-white text-center'>Copyright <i class="fa-regular fa-copyright"></i>  2024 Aptech Osogbo Centre</p>
    </div>
    </div>
  )
}

export default Footer
