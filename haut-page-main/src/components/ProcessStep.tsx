import React from 'react';

interface ProcessStepProps {
  stepNumber: string;
  title: string;
  showDot?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ stepNumber, title, showDot = false }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-start gap-5">
        <div className="w-[380px] text-[#FBFF24] text-center text-[32px] font-bold leading-8 tracking-[-1.5px] max-md:w-[300px] max-sm:w-[250px] max-sm:text-[28px]">
          {stepNumber}
        </div>
        <div className="w-[380px] text-white text-center text-[28px] font-bold leading-7 tracking-[-1.5px] max-md:w-[300px] max-sm:w-[250px] max-sm:text-2xl">
          {title}
        </div>
      </div>
      {showDot && (
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"11\" height=\"12\" viewBox=\"0 0 11 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"step-dot\" style=\"width: 10.414px; height: 10.414px; fill: #FBFF24\"> <circle cx=\"5.79297\" cy=\"6\" r=\"5.20703\" fill=\"#FBFF24\"></circle> </svg>",
            }}
          />
        </div>
      )}
    </>
  );
};

export default ProcessStep;
