import { useState, useEffect } from 'react';

export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const detectMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      
      // Détection Android
      const isAndroid = /android/.test(userAgent);
      
      // Détection iOS (iPhone, iPad, iPod)
      const isIOS = /iphone|ipad|ipod/.test(userAgent);
      
      return isAndroid || isIOS;
    };

    setIsMobile(detectMobile());
  }, []);

  return isMobile;
};

export const useMobileTypeDetection = () => {
  const [isAndroid, setIsAndroid] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    // Détection Android
    const isAndroid = /android/.test(userAgent);
    
    // Détection iOS (iPhone, iPad, iPod)
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    
    setIsAndroid(isAndroid);
    setIsIOS(isIOS);
  }, []);

  return {
    isAndroid,
    isIOS
  };
};