import React from 'react';

interface PhoneMockupProps {
  screenImage: string;
  phoneImage: string;
  className?: string;
  screenClassName?: string;
  alt?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ 
  screenImage, 
  phoneImage, 
  className = "", 
  screenClassName = "",
  alt = "Phone mockup"
}) => {
  return (
    <div className={`absolute shadow-[0_0_193.823px_63.84px_rgba(216,255,56,0.20)] ${className}`}>
      <div className={`flex flex-col justify-center items-center absolute z-[1] ${screenClassName}`}>
        <img
          src={screenImage}
          alt={`${alt} screen`}
          className="w-full h-full object-cover"
        />
      </div>
      <img
        src={phoneImage}
        alt={alt}
        className="w-full h-full absolute z-[2] left-0 top-0"
      />
    </div>
  );
};

export default PhoneMockup;
