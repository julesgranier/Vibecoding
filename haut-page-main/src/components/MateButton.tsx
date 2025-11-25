
import React from 'react';

interface MateButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const MateButton: React.FC<MateButtonProps> = ({ children, onClick, className = "" }) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2.5 rounded-[50px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 px-[34px] py-5 text-xl cursor-pointer max-sm:px-7 max-sm:py-4 max-sm:text-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MateButton;
