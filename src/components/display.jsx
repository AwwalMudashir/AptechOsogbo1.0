import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home'
import Courses from './courses'
import DisplayAccp from './courses/Accp/displayAccp'
import DisplayAcns from './courses/Acns/displayAcns'
import DisplayCpism from './courses/Cpism/displayCpism'
import DisplayWeb from './courses/ResWeb/displayWeb'
import About from './About/About'
import PlaceDetails from './About/PlaceDetails'
import CareerQuest from './About/CareerQuest'
import EnrollmentForm from './Enroll'
import Enrolled from './Enrolled'
import Contact from './Contact/Contact'
import AIHero from './courses/AI & DS/AIHero'
import AISD from './courses/AI & DS/AISD'
import BlogCarousel from './BlogCarosuel'
import BlogDetail from './BlogDetail'

const Display = () => {
  return (              
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/about' element={<About/>} />
        <Route path="/place/:placeId" element={<PlaceDetails />} />
        <Route path='/career-quest' element={<CareerQuest/>} />
        <Route path='/courses/Accp' element={<DisplayAccp/>} />
        <Route path='/courses/Acns' element={<DisplayAcns/>} />
        <Route path='/courses/Cpism' element={<DisplayCpism/>} />
        <Route path='/courses/Responsive-Web-Development' element={<DisplayWeb/>} />
        <Route path='/enroll-now' element={<EnrollmentForm/>}/>
        <Route path='/enrolled' element={<Enrolled/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/AI-DataScience' element={<AISD/>} />
        <Route path='/blog/:blogId' element={<BlogDetail/>} />
      </Routes>
    </div>
  )
}

export default Display
