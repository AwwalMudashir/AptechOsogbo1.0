import React from 'react'
import Menu from './menu'
import Offer from './offer'
import Banner from './banner'
import Degree from './degree'
import Onlinevarsity from './onlinevarsity'
import Review from './Review'
import Faqs from './Faqs'

const Home = () => {
  return (
    <div>
      <Menu/>
      <Offer/>
      <Banner/>
      <Degree/>
      <Faqs/>
      <Review/>
      <Onlinevarsity/>
    </div>
  )
}

export default Home
