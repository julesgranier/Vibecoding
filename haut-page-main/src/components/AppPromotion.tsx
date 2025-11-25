
import React from 'react';
import { Event } from '@/lib/api';

const AppPromotion: React.FC<{ event: Event }> = ({ event }) => {
  const handleDownloadAndroid = () => {
    // Redirect to Google Play Store
    window.open('https://play.google.com/store/apps/details?id=com.mateappes.mate', '_blank');
  };

  const handleDownloadApple = () => {
    // Redirect to App Store
    window.open('https://apps.apple.com/es/app/mate-haz-planes-y-amigos/id6669137503', '_blank');
  };

  return (
    <section className="flex h-[758px] flex-col items-start gap-10 self-stretch relative overflow-hidden bg-[#FBFF24] p-10 rounded-[20px] max-md:h-auto max-md:min-h-[600px] max-sm:h-auto max-sm:min-h-[500px] max-sm:p-[25px]">
      <div className="flex flex-col justify-center items-start gap-[50px] relative z-10">
        <div className="flex w-[442px] flex-col items-start gap-5 max-sm:w-full">
          <div className="flex w-[54px] h-[54px] flex-col justify-center items-center gap-2.5 bg-black rounded-[10px]">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=\"24:1202\" layer-name=\"Fill 7\" width=\"38\" height=\"18\" viewBox=\"0 0 38 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"app-icon\" style=\"width: 36.047px; height: 17.615px; flex-shrink: 0; fill: #FFF\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M19.7105 13.7242C19.221 13.9537 18.8212 13.9399 18.5387 13.6972C18.5799 13.0701 19.5103 11.1682 21.841 8.77425C21.9651 8.6529 22.0891 8.52491 22.2132 8.41019C22.1444 11.2967 20.9929 13.1445 19.7105 13.7242M36.8541 5.30142C36.8264 5.10562 36.7509 4.68751 36.5231 4.06035C35.9851 2.54292 34.9029 1.41658 33.4 0.816441C29.9319 -0.565867 26.5227 1.25494 24.4959 2.12481C24.0341 1.70008 23.5378 1.42372 23.0895 1.22792C19.6767 -0.222202 13.7111 2.02386 10.1257 3.94563C9.94633 2.93401 9.46362 2.24617 9.01531 1.79441C7.43008 0.236698 5.06501 0.45238 4.42383 0.540081C3.29993 0.654806 2.14164 0.857232 0.976562 1.14685C0.976562 1.14685 1.49368 3.10941 1.49368 3.11604L2.00402 5.06534C2.98299 4.82213 3.95519 4.65386 4.88569 4.56616L5.0306 4.54577C5.30636 4.49886 5.91992 4.53251 6.04398 4.59981C6.06483 4.64723 6.09924 4.86292 6.03043 5.23361C6.03043 5.23361 5.775 6.47467 5.76822 6.47467L4.67874 11.7214L3.89993 15.4574H6.01636H8.126L9.46362 9.03737C12.8489 6.88615 17.677 4.98427 20.1177 4.80224C19.6767 5.17293 19.2492 5.57115 18.8426 5.98926C16.3811 8.5178 12.6581 13.2052 15.2848 16.2263C16.7945 17.9528 19.2148 18.4112 21.4553 17.3995C24.2405 16.132 27.0951 12.3552 26.1849 5.81386C27.6482 5.19128 31.4483 3.07525 32.5587 5.27848C33.264 6.67914 32.9048 8.80486 32.6259 10.2718C32.4555 11.1697 32.2178 12.0549 31.9347 12.9248C31.8492 13.1879 31.1861 15.4574 30.9729 15.4574H35.4336C36.6956 11.9774 37.3571 8.34291 36.8541 5.30142\" fill=\"white\"></path> </svg>",
              }}
            />
          </div>
          <h2 className="text-black text-center text-3xl font-bold leading-[30px] tracking-[-1.5px] max-sm:text-2xl">
            Get the App, join the Fun
          </h2>
          <p className="w-[405px] text-black text-lg font-normal leading-[21.6px] tracking-[-1px] opacity-50 max-sm:w-full max-sm:text-base">
            Download now and never miss out on the best plans around you.
          </p>
        </div>
        <div className="flex justify-center items-start gap-[23.095px]">
          <button
            onClick={handleDownloadAndroid}
            className="hover:opacity-90 transition-opacity"
            aria-label="Download app from Google Play"
          >
            <img
              src="https://res.cloudinary.com/dyq8myanx/image/upload/v1755515137/Frame_2085664568_1_jbcxep.svg"
              alt="Get it on Google Play"
              className="h-auto"
            />
          </button>
          <button
            onClick={handleDownloadApple}
            className="hover:opacity-90 transition-opacity"
            aria-label="Download app from App Store"
          >
            <img
              src="https://res.cloudinary.com/dyq8myanx/image/upload/v1755441960/Group_gekamb.svg"
              alt="Download on the App Store"
              className="h-auto"
            />
          </button>
        </div>
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/8097aaf0f72fa9d225c67bb883ed841815e2bfd8?width=1240"
        alt="iPhone mockup showing the Mate app"
        className="w-[580px] h-[600px] rotate-[0.293deg] absolute right-[-20px] bottom-[-80px] max-md:w-[380px] max-md:h-[380px] max-md:right-[-20px] max-md:bottom-[-40px] max-sm:w-[280px] max-sm:h-[280px] max-sm:bottom-[-20px] max-sm:right-[0px]"
      />
    </section>
  );
};

export default AppPromotion;
