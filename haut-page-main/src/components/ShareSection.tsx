import React, { useState } from 'react';
import { Event } from '@/lib/api';

const ShareSection: React.FC<{ event: Event }> = ({ event }) => {
  const [linkCopied, setLinkCopied] = useState(false);
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };
  const handleWhatsAppShare = () => {
    const text = encodeURIComponent('Check out this football tournament: ' + window.location.href);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };
  const handleTwitterShare = () => {
    const text = encodeURIComponent('Join this amazing football tournament!');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };
  const handleFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };
  return <section className="flex flex-col justify-center items-start gap-[25px] self-stretch bg-[rgba(255,255,255,0.12)] p-10 rounded-[20px] max-sm:p-[25px]">
      <h2 className="text-white text-2xl font-bold leading-[28.8px] tracking-[-1.5px] max-sm:text-xl">
        Partager et inviter des amis
      </h2>
      <div className="flex items-start gap-2.5 max-sm:flex-wrap max-sm:gap-2">
        <button onClick={handleCopyLink} className="flex justify-center items-center gap-2.5 bg-[rgba(255,255,255,0.10)] px-[23px] py-3.5 rounded-[10px] max-sm:px-[18px] max-sm:py-3 hover:bg-[rgba(255,255,255,0.15)] transition-colors">
          <div dangerouslySetInnerHTML={{
          __html: "<svg id=\"24:1186\" layer-name=\"link\" width=\"21\" height=\"22\" viewBox=\"0 0 21 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"link-icon\" style=\"width: 20.84px; height: 20.84px\"> <path d=\"M8.67969 11.5708C9.05259 12.0693 9.52835 12.4818 10.0747 12.7803C10.621 13.0788 11.2252 13.2563 11.8462 13.3008C12.4671 13.3453 13.0904 13.2557 13.6737 13.0381C14.257 12.8205 14.7867 12.48 15.2269 12.0397L17.8319 9.43472C18.6227 8.61588 19.0603 7.51917 19.0504 6.38081C19.0405 5.24245 18.5839 4.15351 17.779 3.34854C16.974 2.54357 15.8851 2.08696 14.7467 2.07707C13.6083 2.06718 12.5116 2.50479 11.6928 3.29565L10.1993 4.78049\" stroke=\"white\" stroke-width=\"1.73665\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> <path d=\"M12.1561 9.83411C11.7832 9.33558 11.3074 8.92307 10.7611 8.62458C10.2147 8.32609 9.61056 8.14858 8.98958 8.10411C8.36861 8.05964 7.74533 8.14923 7.16202 8.36682C6.57872 8.58441 6.04903 8.92491 5.60888 9.36521L3.0039 11.9702C2.21304 12.789 1.77543 13.8857 1.78532 15.0241C1.79521 16.1625 2.25182 17.2514 3.05679 18.0564C3.86177 18.8613 4.9507 19.318 6.08906 19.3278C7.22743 19.3377 8.32413 18.9001 9.14297 18.1093L10.6278 16.6244\" stroke=\"white\" stroke-width=\"1.73665\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </svg>"
        }} />
          <span className="text-white text-center text-lg font-normal leading-[18px] tracking-[-1px] max-sm:text-base">
            {linkCopied ? 'Copié!' : 'Copier le lien'}
          </span>
        </button>
        
        <button onClick={handleWhatsAppShare} className="flex justify-center items-center bg-[rgba(255,255,255,0.10)] p-3.5 rounded-[10px] hover:opacity-80 transition-opacity" aria-label="Share on WhatsApp">
          <img src="https://res.cloudinary.com/dyq8myanx/image/upload/v1754920860/icons8-whatsapp-50_2_z3wwqy.svg" alt="WhatsApp" className="w-6 h-6" />
        </button>

        

        <button onClick={handleTwitterShare} className="flex justify-center items-center bg-[rgba(255,255,255,0.10)] p-3.5 rounded-[10px] hover:opacity-80 transition-opacity" aria-label="Share on Twitter">
          <img src="https://res.cloudinary.com/dyq8myanx/image/upload/v1754920934/icons8-twitter-50_twmdb4.svg" alt="Twitter" className="w-6 h-6" />
        </button>
      </div>
    </section>;
};
export default ShareSection;