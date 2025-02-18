import React, { useState, useEffect,useRef } from 'react'
import Navbar from './components/navbar'
import Display from './components/display'
import Footer from './components/footer'
import WhatsAppButton from './components/WhatsApp'
import ScrollAnimation from './ScrollAnimation'
import Loader from './Loader.jsx'
import './App.css'

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Once loading is done, hide the overlay
    }, 5000); // Change this to match your actual loading time

    return () => clearTimeout(timer);
  }, []);



  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);
  

  return (
    <div>
      <Loader isLoading={isLoading}/>
      <ScrollAnimation/>
      <div className={isLoading ? 'no-scroll' : ''}>

      <Navbar/>
      <Display/>
      <WhatsAppButton/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
