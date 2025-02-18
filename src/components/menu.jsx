import React from 'react';
import './component.css';
import { useNavigate } from 'react-router-dom';
import Title from './Title';
import ClickSpark from './Animations/ClickSpark'

const Menu = () => {
  const navigate = useNavigate();

  
  return (
    <div className="menu w-full  h-[100vh]">
        <video
          src="/menu-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className='video-bg active'
        />
      {/* Overlay for darkened effect */}
      <div className="overlay"></div>

      {/* Text Content */}
      <div className="content pl-6 mt-32">
      {/* <h1 className='text-8xl text-[#A60000] osogbo w-[50%] mt-32 mb-4 font-bold'>APTECH <span className='text-[#f7b707]'>OSOGBO</span></h1> */}
      <h1 style={{  "text-shadow": "5px 10px 5px rgba(0, 0, 0, 0.5)"}}>
      <Title />
        </h1>
        <h2 className="subtitle mt-2">Unleash Your Potential</h2>
        <p className="text w-[50%]">
          "Empowering individuals to unlock their full potential through innovative technology solutions, because your success is our greatest achievement."
        </p>
        <button className="btn" onClick={() => navigate('/enroll-now')}>
          Enroll Now
        </button>
        <ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
/>
      </div>
    </div>
  );
};

export default Menu;
