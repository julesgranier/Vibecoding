
import React from 'react';
import MateHeroSection from './MateHeroSection';
import AppDownloadSection from './AppDownloadSection';
import ScrollingBanner from './ScrollingBanner';

export const MateSection: React.FC = () => {
  return (
    <div className="min-h-screen flex w-full flex-col justify-center items-start">
      <MateHeroSection />
      <AppDownloadSection />
      <ScrollingBanner />
    </div>
  );
};

export default MateSection;
