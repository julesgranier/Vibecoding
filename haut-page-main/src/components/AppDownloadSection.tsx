import React from 'react';
import MateLogo from './MateLogo';

const AppDownloadSection: React.FC = () => {
  const handleGooglePlayClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.mateappes.mate', '_blank');
  };

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/es/app/mate-haz-planes-y-amigos/id6669137503', '_blank');
  };

  return (
    <section className="flex flex-col items-center gap-10 w-full box-border bg-black pt-[154px] pb-[130px] px-[200px] max-md:px-10 max-md:py-20 max-sm:px-5 max-sm:py-[60px]">
      <div className="flex justify-between items-center w-full relative max-md:flex-col max-md:gap-[60px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/93da9c89e17238deea9d387aec2d0a86231425dd?width=924"
          alt="Mate app interface showing social connections"
          className="w-[462px] h-[464px] relative max-md:w-full max-md:max-w-[400px] max-md:h-auto"
        />
        
        <div className="flex w-[484px] flex-col justify-center items-start gap-[100px] relative max-md:w-full max-md:max-w-[500px] max-md:gap-[60px] max-md:items-center max-md:text-center max-sm:gap-10">
          <div className="flex flex-col items-start gap-[30px] w-full relative">
            <MateLogo />
            
            <div className="flex flex-col items-start gap-5 w-full relative">
              <h2 className="w-full text-white text-[40px] font-bold leading-[52px] tracking-[-1.5px] relative max-md:text-[32px] max-sm:text-2xl">
                Get the app and <span className="text-[#FBFF24]">join the Fun</span>
              </h2>
              <p className="w-[389px] text-white text-xl font-normal leading-6 tracking-[-1px] opacity-50 relative max-md:w-full max-md:text-lg max-sm:text-base">
                Download now and never miss out on the best plans around you.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-[27.442px] relative">
            <button
              onClick={handleGooglePlayClick}
              className="hover:opacity-80 transition-opacity"
              aria-label="Download on Google Play"
            >
              <img
                src="https://res.cloudinary.com/dyq8myanx/image/upload/v1755515087/Group_27_exwdja.svg"
                alt="Download on Google Play"
                className="w-auto h-auto"
              />
            </button>
            
            <button
              onClick={handleAppStoreClick}
              className="hover:opacity-80 transition-opacity"
              aria-label="Download on App Store"
            >
              <img
                src="https://res.cloudinary.com/dyq8myanx/image/upload/v1755515085/Group_1_i5vwic.svg"
                alt="Download on App Store"
                className="w-auto h-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
