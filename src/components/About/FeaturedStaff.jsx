import React, { useRef, useState, useEffect  } from 'react';
import './About.css'

const FeaturedPersonnel = () => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const updateProgress = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleProgressClick = (e) => {
    if (videoRef.current && progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const progressWidth = rect.width;
      const newTime = (clickPosition / progressWidth) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('timeupdate', updateProgress);
      return () => {
        videoRef.current.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, []);

  return (
    <div className="bg-gray-100 p-8 shadow-lg border border-gray-300 scroll-element">
    
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src="/featured-manager.jpg" 
            alt="Featured Manager"
            className="w-full h-auto rounded-lg shadow"
          />
        </div>


        <div className="w-full md:w-1/2 mt-8 md:ml-8 text-center md:text-left manager">
          <h2 className="manager text-3xl font-bold text-[#A60000] mb-4">Meet Our Manager</h2>
          <p className="text-gray-700 mb-6">
            Our manager, <strong>Miss Francisca Ogaram</strong>, is the driving force behind our success. 
            With over 10 years of experience in the tech industry, she ensures our company 
            delivers excellence in every project.
          </p>
          <p className="text-gray-700">
            Francisca believes in empowering her team and creating a supportive environment 
            for growth and innovation. She’s committed to inspiring a culture of learning 
            and adaptability to ensure long-term success.
          </p>
        </div>
      </div>

  
      <div className="bg-white p-4 h-150 rounded-lg shadow-md manager-2">
        <h3 className="text-4xl mn font-bold mt-10 text-[#FFB900] mb-8">A Video Message</h3>
        <div className="relative w-full h-[80vh] bg-gray-200 rounded-lg overflow-hidden shadow">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/manager-message.mp4"
            controls={false}
          />
      
          <div className="absolute bottom-4 mb-[20px] left-4 flex space-x-4">
  
            <button
              onClick={togglePlay}
              className="bg-[#A60000] play-pause text-white shadow hover:bg-[#FFB900] transition duration-300"
              aria-label="Play or Pause"
            >
              {isPlaying ? (
                <i class="fa-solid fa-pause fa-lg"></i>
              ) : (
                <i class="fa-solid fa-play fa-lg"></i>
              )}
            </button>

            <button
              onClick={toggleMute}
              className="bg-[#A60000] text-white mute-muted shadow hover:bg-[#FFB900] transition duration-300"
              aria-label="Mute or Unmute"
            >
              {isMuted ? (
               <i class="fa-solid fa-volume-xmark fa-lg"></i>
              ) : (
                <i class="fa-solid fa-volume-high fa-lg" ></i>
              )}
            </button>
          </div>
          <div
            ref={progressRef}
            className="absolute left-5 bottom-1 mt-[10px] progress-bar bg-gray-400 cursor-pointer"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-[#FFB900]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPersonnel;
