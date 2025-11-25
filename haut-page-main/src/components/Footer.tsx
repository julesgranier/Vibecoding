
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin } from 'lucide-react';
import { useMobileDetection } from '@/hooks/useMobileDetection';

export const Footer: React.FC = () => {

  const isMobile = useMobileDetection();
  
  return <footer className="bg-black w-full min-h-[400px] md:min-h-[535px] px-4 md:px-[50px] lg:px-[100px] py-8 md:py-[75px] relative overflow-hidden" role="contentinfo">
      <img src="https://api.builder.io/api/v1/image/assets/2c2f7f96e29c4a848c8cfc1ded50ac18/60f7f582abe883814521dc6b32327118b5bbbc9e?placeholderIfAbsent=true" className="aspect-[7.25] object-contain w-full max-w-[1674px] absolute z-0 left-1/2 -translate-x-1/2 h-[300px] md:h-[346px]" style={{
      bottom: '-50px'
    }} alt="Footer background decoration" aria-hidden="true" />
      <div className="z-10 relative flex w-full flex-col md:flex-row max-md:max-w-full max-md:gap-8">
        <div className="flex min-w-60 flex-col items-stretch">
          <div className="text-white">
            <h2 className="text-[28px] md:text-[45px] font-semibold leading-[32px] md:leading-[48px] tracking-[-1.5px] max-md:text-[28px] max-md:leading-[32px]">
              Make plans IRL<br />and meet new people
            </h2>
            <p className="text-base md:text-xl font-normal leading-[20px] md:leading-[24px] tracking-[-1px] mt-4 md:mt-[25px] mb-6">
              Looking for fun? Join us for football 7v7
            </p>
            
            {isMobile && <Link to="/download"><button className="bg-[rgba(251,255,36,1)] flex items-center gap-2 text-sm md:text-base text-black font-medium leading-none px-4 md:px-5 py-2.5 md:py-3 rounded-[20px] hover:bg-[rgba(251,255,36,0.9)] transition-colors w-fit" aria-label="Download mobile app">
              <span className="font-bold">Download app</span>
            </button></Link>}
          </div>
        </div>
        <nav className="flex flex-col md:flex-row min-w-60 gap-4 md:gap-[40px_60px] text-sm md:text-base text-white font-semibold text-left md:text-center uppercase leading-none flex-1 shrink basis-[0%] justify-start md:justify-end pr-0 md:pr-4 max-md:max-w-full mt-6 md:mt-0" aria-label="Footer navigation">
          <a href="https://mateapp.notion.site/HOSTS-de-Planes-Kit-21e08ba4611d8046800bcfee299df593?source=copy_link" target="_blank" rel="noopener noreferrer" className="hover:text-[rgba(251,255,36,1)] transition-colors">
            Earn money to host events
          </a>
          <a href="https://wa.me/34623784429" target="_blank" rel="noopener noreferrer" className="hover:text-[rgba(251,255,36,1)] transition-colors">
            contact
          </a>
        </nav>
      </div>
      <div className="z-10 relative flex w-full items-center flex-col md:flex-row gap-6 md:gap-[40px_100px] justify-between flex-wrap mt-8 md:mt-[50px] max-md:max-w-full max-md:mt-8">
        <nav className="self-stretch flex min-w-60 gap-4 md:gap-[30px] text-xs md:text-sm text-white font-semibold text-center uppercase leading-none my-auto order-2 md:order-1" aria-label="Legal links">
          <Link to="/terminos-y-condiciones" className="hover:text-[rgba(251,255,36,1)] transition-colors">
            TC
          </Link>
          <Link to="/politica-de-privacidad" className="hover:text-[rgba(251,255,36,1)] transition-colors">
            PP
          </Link>
          <Link to="/aviso-legal" className="hover:text-[rgba(251,255,36,1)] transition-colors">
            Aviso Legal
          </Link>
        </nav>
        <div className="self-stretch flex items-center justify-center gap-5 md:gap-[25px] my-auto order-1 md:order-2" role="group" aria-label="Social media links">
          <a href="https://www.instagram.com/mateapp/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="hover:opacity-80 transition-opacity">
            <Instagram size={20} color="white" />
          </a>
          <a href="https://www.tiktok.com/@mate.app?lang=fr" target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok" className="hover:opacity-80 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/mate-app-es" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="hover:opacity-80 transition-opacity">
            <Linkedin size={20} color="white" />
          </a>
        </div>
      </div>
    </footer>;
};

export default Footer;
