import { useMobileDetection } from '@/hooks/useMobileDetection';
import { Event } from '@/lib/api';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const HeroSection: React.FC<{ event: Event }> = ({ event }) => {
  const isMobile = useMobileDetection();

  return <section className="flex h-[580px] justify-between items-end shadow-[0_0_144px_40px_rgba(251,255,36,0.15)] px-8 py-[50px] rounded-[30px] max-md:h-[500px] max-md:px-[25px] max-md:py-[40px] max-sm:h-[400px] max-sm:flex-col max-sm:items-start max-sm:justify-end max-sm:px-5 max-sm:py-[25px] max-sm:text-left relative" style={{
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.1) 70%, transparent 100%), url('${event.image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      <div className="flex flex-col items-start gap-5 max-sm:items-start max-sm:gap-6">
        <div className="flex justify-center items-center gap-[15.427px] bg-[rgba(216,255,56,0.15)] px-[19.692px] py-[8px] rounded-[7.033px]">
          <span className="text-[#FBFF24] text-base font-normal leading-5">
            ACTIVITY
          </span>
        </div>
        <div className="flex flex-col items-start gap-[18px] max-sm:items-start max-sm:gap-6">
          <h1 className="text-white text-5xl font-bold leading-[56px] tracking-[-1.5px] max-md:text-[38px] max-md:leading-[42px] max-sm:text-[28px] max-sm:leading-[32px]">
            {event.name}
          </h1>
          <div className="flex justify-center items-center gap-2.5 max-sm:flex-col max-sm:gap-[5px] max-sm:items-start">
            <time className="text-white text-lg font-normal leading-[20px] tracking-[-1px] opacity-80 max-md:text-base max-sm:text-sm">
              {new Date(event.startDate).toLocaleDateString('fr-FR', {
                weekday: 'long',
                day: 'numeric', 
                month: 'long'
              }).replace(/^\w/, c => c.toUpperCase())} à {new Date(event.startDate).toLocaleTimeString('fr-FR', {
                hour: '2-digit',
                minute: '2-digit'
              })} • {event.address}
            </time>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end items-center gap-2.5 max-sm:mt-10 max-sm:w-full">
        {isMobile && <Link to="/download"><button className="flex justify-center items-center gap-2.5 bg-[#FBFF24] px-[50px] py-[20px] rounded-[70px] max-md:px-[40px] max-md:py-4 max-sm:w-full max-sm:px-8 max-sm:py-[18px] hover:bg-[#e6f020] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <span className="text-black text-center text-xl font-bold leading-5 tracking-[-1px] max-md:text-lg max-sm:text-base">
              Join activity
            </span>
          </button>
        </Link>}
      </div>
    </section>;
};
export default HeroSection;