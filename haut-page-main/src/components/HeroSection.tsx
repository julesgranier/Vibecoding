
import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import AppStoreButtons from './AppStoreButtons';

// Configuration personnalisable
const TRANSITION_DURATION = 1000; // 1 secondes en millisecondes
const PHRASES = [
  "football 7v7 ?",
  "play tennis ?",
  "go hiking ?",
  "join a book club ?",
  "try rock climbing ?",
  "learn to cook ?",
  "practice yoga ?"
];

const HeroSection: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % PHRASES.length);
        setIsVisible(true);
      }, 150); // Délai pour l'animation de sortie
    }, TRANSITION_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="flex w-full h-[950px] flex-col justify-between items-center relative overflow-hidden pt-10 pb-[100px] px-20 max-md:h-auto max-md:min-h-[800px] max-md:pt-[30px] max-md:pb-20 max-md:px-10 max-sm:pt-5 max-sm:pb-[60px] max-sm:px-5"
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/dyq8myanx/image/upload/v1755958778/bg_desktop_dz5p9p.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full h-full absolute z-[2] left-0 top-0" />
      {/* Black gradient overlay for smooth transition */}
      <div className="w-full h-full absolute z-[2] left-0 top-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      <Navigation />
      <div className="flex justify-end items-center gap-[70px] w-full relative z-[3] max-md:flex-col max-md:gap-10">
        <div className="flex flex-col items-start gap-[5px] flex-1 relative">
          <h1 className="text-white text-[95px] font-bold leading-[90.25px] tracking-[-1.5px] w-full max-md:text-6xl max-sm:text-[40px]">
            Make plans and meet new people IRL
          </h1>
          <div className="text-white text-[50px] font-normal leading-[50px] tracking-[-1px] max-md:text-[32px] max-sm:text-2xl">
            Want to
            <div 
              className={`text-[#FBFF24] font-bold inline ml-2 transition-opacity duration-300 ${
                isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'
              }`}
            >
              {PHRASES[currentPhraseIndex]}
            </div>
          </div>
        </div>
        <AppStoreButtons />
      </div>
    </section>
  );
};

export default HeroSection;
