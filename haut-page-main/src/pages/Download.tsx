import { useMobileDetection, useMobileTypeDetection } from "@/hooks/useMobileDetection";

export const Download = () => {
  const isMobile = useMobileTypeDetection();

  if(isMobile.isAndroid) {
    window.location.href = "https://play.google.com/store/apps/details?id=com.mateappes.mate";
  }

  if(isMobile.isIOS) {
     window.location.href = "https://apps.apple.com/es/app/mate-haz-planes-y-amigos/id6669137503";
  }

  return <div></div>;
}
