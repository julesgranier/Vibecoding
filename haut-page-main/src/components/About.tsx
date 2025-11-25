
import React from 'react';

// Component for phone images
interface PhoneImageProps {
  src: string;
  alt: string;
  className: string;
}

const PhoneImage: React.FC<PhoneImageProps> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
};

// Component for step items
interface StepItemProps {
  stepNumber: string;
  title: string;
}

const StepItem: React.FC<StepItemProps> = ({ stepNumber, title }) => {
  return (
    <article className="flex flex-col items-center text-center gap-2 max-w-[350px] flex-1 max-lg:max-w-[400px] max-md:max-w-[350px] max-sm:max-w-[300px]">
      <header className="text-[#FBFF24] text-[36px] font-bold leading-9 tracking-[-1.5px] max-md:text-[32px] max-sm:text-[28px]">
        {stepNumber}
      </header>
      <h3 className="text-white text-[32px] font-bold leading-8 tracking-[-1.5px] max-md:text-[28px] max-sm:text-[24px] max-sm:leading-7">
        {title}
      </h3>
    </article>
  );
};

// Component for dot separator
interface DotSeparatorProps {
  className?: string;
}

const DotSeparator: React.FC<DotSeparatorProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <svg 
        width="11" 
        height="12" 
        viewBox="0 0 11 12" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-[10.414px] h-[10.414px] my-[10px]"
      >
        <circle cx="5.79297" cy="6" r="5.20703" fill="#FBFF24" />
      </svg>
    </div>
  );
};

// Main About section component
export const About: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Rate your favorite interests"
    },
    {
      number: "02", 
      title: "Find and join plans and communities nearby"
    },
    {
      number: "03",
      title: "Connect and chat with mates around you"
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden px-4 py-12">
      {/* Container for phones */}
      <div className="relative flex items-center justify-center w-full max-w-[1000px] h-[800px] mb-16 max-md:h-[650px] max-sm:h-[550px] max-md:mb-12 max-sm:mb-8">
        
        {/* Left phone - repositioned to left of center */}
        <PhoneImage
          src="https://api.builder.io/api/v1/image/assets/TEMP/58722a2311a1a0363ab7884f2381eb98679ac7d8?width=684"
          alt="Mate social networking app profile interface - connect with people near you"
          className="absolute left-[5%] top-1/2 -translate-y-1/2 w-[320px] h-[630px] z-20 max-md:w-[240px] max-md:h-[470px] max-sm:w-[190px] max-sm:h-[370px] max-md:left-[2%] max-sm:left-[1%]"
        />
        
        {/* Center phone - largest, in the center, overlapping others */}
        <PhoneImage
          src="https://api.builder.io/api/v1/image/assets/TEMP/6618eea868e9bb220f03b540772fc2e5b8238ee4?width=880"
          alt="Mate app chat interface - arrange real-life meetups and combat loneliness"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[750px] z-30 max-md:w-[300px] max-md:h-[590px] max-sm:w-[240px] max-sm:h-[470px]"
        />
        
        {/* Right phone - repositioned to right of center, same size as left */}
        <PhoneImage
          src="https://api.builder.io/api/v1/image/assets/TEMP/1031962710e74d736941882f5c8bb85e24f4484f?width=694"
          alt="Mate app community features - discover local events and activities"
          className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[320px] h-[630px] z-10 max-md:w-[240px] max-md:h-[470px] max-sm:w-[190px] max-sm:h-[370px] max-md:right-[2%] max-sm:right-[1%]"
        />
      </div>
      
      {/* Steps section - positioned horizontally below the phones */}
      <div className="flex flex-row items-center justify-center gap-8 max-w-[1200px] w-full px-4 max-lg:flex-col max-lg:gap-6 max-md:gap-4 max-sm:gap-3">
        <StepItem stepNumber={steps[0].number} title={steps[0].title} />
        
        <DotSeparator className="max-lg:rotate-90" />
        
        <StepItem stepNumber={steps[1].number} title={steps[1].title} />
        
        <DotSeparator className="max-lg:rotate-90" />
        
        <StepItem stepNumber={steps[2].number} title={steps[2].title} />
      </div>
    </section>
  );
};
