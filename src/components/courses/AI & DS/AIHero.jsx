import React, { useState, useEffect } from 'react';
import './AI.css';

const videoSources = [
  '/ai1.mp4', // Update with your video file paths
  '/ai2.mp4',
  '/ai3.mp4'
];

const AIHero = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
    }, 6000); // Change video every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ai-hero">
      {/* Video Background */}
      {videoSources.map((src, index) => (
        <video
          key={index}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={`video-bg ${index === currentVideoIndex ? 'active' : 'hidden'}`}
        />
      ))}

      {/* Content */}
      <div className="ai-content px-10">
        <h1>AI & DATA SCIENCE</h1>
        <p className=''>Learn the skills you need to succeed in AI & Data Science. With our top-tier facilities and technologies, this is a game-changer for you!</p>
        <button className="hero-btn">Read More</button>
      </div>
    </div>
  );
};

export default AIHero;
