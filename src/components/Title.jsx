import React from 'react';
import SplitText from './SplitText';

const Title = () => {
  const handleAnimationComplete = () => {};

  return (
    <SplitText
      text="Aptech Osogbo"
      className="text-4xl md:text-6xl mb-3 font-semibold text-center font-[Outfit]" // Apply Outfit font-family
      delay={150}
      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
      easing="easeOutCubic"
      threshold={0.2}
      rootMargin="-50px"
      onLetterAnimationComplete={handleAnimationComplete}
      wordStyles={[
        { className: 'text-[#A60000] font-bold' }, // Aptech in red
        { className: 'text-[#FFB900] font-bold' }, // Osogbo in yellow
      ]}
    />
  );
};

export default Title;
