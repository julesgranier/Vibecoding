
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { About } from '@/components/About';
import MateSection from '@/components/MateSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <main className="flex w-full min-h-screen flex-col items-center backdrop-blur-[20px] bg-black">
      <HeroSection />
      <About />
      <MateSection />
      <Footer />
    </main>
  );
};

export default Index;
