import React from 'react';
import { Link } from 'react-router-dom';
import { useMobileDetection } from '@/hooks/useMobileDetection';

// CTAButton Component
interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  disabled = false 
}) => {
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    } else {
      console.log('CTA button clicked - Let\'s try Mate!');
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        flex justify-center items-center gap-2.5 cursor-pointer 
        transition-all duration-200 ease-in-out
        bg-black hover:bg-gray-800 active:bg-gray-900
        px-[34px] py-5 rounded-[50px] 
        max-sm:w-full max-sm:max-w-[280px] max-sm:px-7 max-sm:py-4
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
        ${className}
      `}
      aria-label="Call to action button"
    >
      <span className="text-white text-center text-xl font-bold leading-5 tracking-[-1px] max-sm:text-lg">
        {children}
      </span>
    </button>
  );
};

// HeroImage Component
interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ 
  src, 
  alt, 
  className = '' 
}) => {
  return (
    <div className={`shrink-0 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-[635px] h-[328px] aspect-[151/78] object-cover max-md:w-full max-md:max-w-[500px] max-md:h-auto max-sm:max-w-full"
        loading="lazy"
      />
    </div>
  );
};

// HeroContent Component
interface HeroContentProps {
  title: string;
  description: string;
  ctaText: string;
  onCtaClick?: () => void;
}

const HeroContent: React.FC<HeroContentProps> = ({
  title,
  description,
  ctaText,
}) => {
  const isMobile = useMobileDetection();

  return (
    <div className="flex w-[517px] flex-col items-start gap-[42px] shrink-0 max-md:w-full max-md:max-w-[600px] max-md:items-center max-sm:gap-[30px]">
      <header className="flex flex-col items-start gap-[25px] w-full max-md:items-center max-md:text-center max-sm:gap-5">
        <h1 className="w-full text-black text-[40px] font-bold leading-[48px] tracking-[-1.5px] max-md:text-4xl max-md:text-center max-sm:text-[28px] max-sm:leading-[30.8px]">
          {title}
        </h1>
        <p className="w-full text-black text-xl font-normal leading-6 tracking-[-1px] opacity-70 max-md:text-lg max-md:text-center max-sm:text-base">
          {description}
        </p>
      </header>
      {isMobile && (
        <div className="flex flex-col gap-4 w-full max-md:items-center">
          <Link to="/download">
          <CTAButton onClick={() => {}}>
            {ctaText}
          </CTAButton>
          </Link>
        </div>
      )}
    </div>
  );
};

// HeroSection Component - Composant principal
interface HeroSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  imageUrl?: string;
  imageAlt?: string;
  onCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "We combat global loneliness by putting people together",
  description = "Most apps trap you on the screen. We're here to get you off it -- meeting people, making memories but IRL.",
  ctaText = "Let's try Mate",
  imageUrl = "https://api.builder.io/api/v1/image/assets/TEMP/1afd81c541d760583a2d4dc3c62e9526b01e4d0e?width=1270",
  imageAlt = "People connecting and socializing in real life",
  onCtaClick
}) => {
  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      console.log('CTA clicked - implement your action here');
    }
  };

  return (
    <section 
      className="flex w-full justify-between items-center box-border bg-[#FBFF24] mx-auto my-0 px-[110px] py-20 max-md:flex-col max-md:gap-10 max-md:text-center max-md:px-10 max-md:py-[60px] max-sm:gap-[30px] max-sm:px-5 max-sm:py-10"
      aria-label="Hero section"
    >
      <HeroImage 
        src={imageUrl}
        alt={imageAlt}
      />
      <HeroContent
        title={title}
        description={description}
        ctaText={ctaText}
        onCtaClick={handleCtaClick}
      />
    </section>
  );
};

const MateHeroSection: React.FC = () => {
  return <HeroSection />;
};

export default MateHeroSection;
