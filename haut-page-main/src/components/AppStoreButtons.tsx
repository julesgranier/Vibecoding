
import React from 'react';

const AppStoreButtons: React.FC = () => {
  const handleGooglePlayClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.mateappes.mate', '_blank');
  };

  const handleAppStoreClick = () => {
    window.open('https://apps.apple.com/es/app/mate-haz-planes-y-amigos/id6669137503', '_blank');
  };

  return (
    <div className="flex flex-col justify-center items-end gap-[16.485px]">
      <div className="flex flex-col gap-4 max-md:flex-row">
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
  );
};

export default AppStoreButtons;
