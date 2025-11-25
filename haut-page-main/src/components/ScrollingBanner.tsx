
import React from 'react';

const ScrollingBanner: React.FC = () => {
  const BannerDot = () => (
    <svg 
      width="14" 
      height="13" 
      viewBox="0 0 14 13" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="banner-dot" 
      style={{
        width: "12.697px", 
        height: "12.697px", 
        flexShrink: 0, 
        fill: "#000", 
        position: "relative"
      }}
    > 
      <circle cx="7" cy="6.5459" r="6.34863" fill="black" />
    </svg>
  );

  const BannerText = () => (
    <span className="text-black text-center text-[26px] font-bold leading-[26px] tracking-[-1.5px] relative max-md:text-xl max-sm:text-base whitespace-nowrap">
      Made to connect, just for you
    </span>
  );

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
      <section className="flex w-full justify-center items-center gap-[50px] box-border bg-[#FBFF24] px-2.5 py-[30px] max-md:gap-[30px] max-md:flex-wrap max-sm:gap-5 max-sm:px-2.5 max-sm:py-5 overflow-hidden">
        <div className="flex items-center gap-[50px] animate-scroll max-md:gap-[30px] max-sm:gap-5">
          <BannerText />
          <BannerDot />
          <BannerText />
          <BannerDot />
          <BannerText />
          <BannerDot />
          <BannerText />
          <BannerDot />
          <BannerText />
          <BannerDot />
          <BannerText />
          <BannerDot />
          <BannerText />
          <BannerDot />
          <BannerText />
        </div>
      </section>
    </>
  );
};

export default ScrollingBanner;
