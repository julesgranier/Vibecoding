import React, { useState } from 'react';
import { Event } from '@/lib/api';

// AppIcon Component
interface AppIconProps {
  className?: string;
}

const AppIcon: React.FC<AppIconProps> = ({ className = "" }) => {
  return (
    <div className={`flex min-h-[54px] w-[54px] flex-col items-center justify-center h-[54px] rounded-[10px] mt-10 ${className}`}>
      <img
        src="https://res.cloudinary.com/dyq8myanx/image/upload/v1755442395/Frame_2085664556_wkxdlt.svg"
        alt="App Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

// GooglePlayButton Component
interface GooglePlayButtonProps {
  className?: string;
  onClick?: () => void;
}

const GooglePlayButton: React.FC<GooglePlayButtonProps> = ({ 
  className = "", 
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open('https://play.google.com/store/apps/details?id=com.mateappes.mate', '_blank');
    }
  };

  return (
    <button
      className={`flex items-center justify-center transition-transform duration-200 ${
        isHovered ? 'scale-105' : 'scale-100'
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      aria-label="Download app from Google Play"
    >
      <img
        src="https://api.builder.io/api/v1/image/assets/2c2f7f96e29c4a848c8cfc1ded50ac18/1f84ded464326721617e1756aca4570413ec4d07?placeholderIfAbsent=true"
        alt="Get it on Google Play"
        className="aspect-[3.04] object-contain w-[149px] h-auto max-sm:w-[120px]"
      />
    </button>
  );
};

// AppStoreButton Component
interface AppStoreButtonProps {
  className?: string;
  onClick?: () => void;
}

const AppStoreButton: React.FC<AppStoreButtonProps> = ({ 
  className = "", 
  onClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open('https://apps.apple.com/es/app/mate-haz-planes-y-amigos/id6669137503', '_blank');
    }
  };

  return (
    <button
      className={`flex items-center justify-center transition-transform duration-200 ${
        isHovered ? 'scale-105' : 'scale-100'
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      aria-label="Download app from App Store"
    >
      <img
        src="https://res.cloudinary.com/dyq8myanx/image/upload/v1755441960/Group_gekamb.svg"
        alt="Download on the App Store"
        className="aspect-[3.04] object-contain w-[149px] h-auto max-sm:w-[120px]"
      />
    </button>
  );
};

// PhoneMockups Component
interface PhoneMockupsProps {
  className?: string;
}

const PhoneMockups: React.FC<PhoneMockupsProps> = ({ className = "" }) => {
  return (
    <section 
      className={`flex w-full max-w-[419px] flex-col justify-center ${className}`}
      aria-label="App screenshots"
    >
      <div className="flex w-full gap-[-129px] max-sm:gap-[-80px] max-sm:justify-center">
        <img
          src="https://api.builder.io/api/v1/image/assets/2c2f7f96e29c4a848c8cfc1ded50ac18/96020ddb739cf53410403a22b6ec2a58ea31b853?placeholderIfAbsent=true"
          alt="Memory app interface showing photo gallery"
          className="aspect-[0.83] object-contain w-[291px] min-w-60 max-sm:w-[220px] max-sm:min-w-[180px]"
        />
        <div className="flex min-w-60 items-center gap-[7px] max-sm:min-w-[180px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/2c2f7f96e29c4a848c8cfc1ded50ac18/6fff9ac42d9f31040df0c824156262957742ac4e?placeholderIfAbsent=true"
            alt="Memory app interface showing photo sharing features"
            className="aspect-[0.83] object-contain w-[261px] self-stretch min-w-60 my-auto max-sm:w-[200px] max-sm:min-w-[180px]"
          />
        </div>
      </div>
    </section>
  );
};

// Main PromotionalCard Component
interface PromotionalCardProps {
  event: Event;
  className?: string;
  onDownloadClick?: () => void;
  onAppStoreClick?: () => void;
}

export const PromotionalCard: React.FC<PromotionalCardProps> = ({ 
  event,
  className = "",
  onDownloadClick,
  onAppStoreClick 
}) => {
  return (
    <article className={`bg-[rgba(32,32,31,1)] flex max-w-[503px] h-[580px] flex-col overflow-hidden items-center justify-center pl-[31px] pr-[30px] py-[26px] rounded-[20px] max-md:px-5 max-md:h-[500px] max-sm:h-auto max-sm:min-h-[450px] max-sm:px-4 max-sm:py-5 max-lg:hidden ${className}`}>
      <header className="flex w-full flex-col items-stretch justify-center">
        <div className="flex w-full flex-col">
          <AppIcon />
          
          <h1 className="text-white text-3xl font-semibold leading-none tracking-[-1.5px] text-left mt-5 max-md:text-2xl max-sm:text-xl max-sm:mt-4">
            Your memories are priceless.
          </h1>
          
          <p className="text-white text-lg font-medium leading-[22px] tracking-[-1px] self-stretch mt-5 max-md:text-base max-sm:text-sm max-sm:mt-4 max-sm:leading-[20px]">
            Download now and never miss out on the best plans around you.
          </p>
        </div>
      </header>

      <div className="flex w-full max-w-[419px] flex-col items-center mt-10 max-md:mt-8 max-sm:mt-6">
        {/* Buttons Container */}
        <div className="flex items-center gap-3 mb-10 max-md:mb-8 max-sm:mb-6 max-sm:flex-col max-sm:gap-3 max-sm:w-full">
          <GooglePlayButton onClick={onDownloadClick} className="max-sm:w-full max-sm:flex max-sm:justify-center" />
          <AppStoreButton onClick={onAppStoreClick} className="max-sm:w-full max-sm:flex max-sm:justify-center" />
        </div>
        
        <PhoneMockups className="max-sm:scale-90 max-sm:origin-center" />
      </div>
    </article>
  );
};

export default PromotionalCard;
