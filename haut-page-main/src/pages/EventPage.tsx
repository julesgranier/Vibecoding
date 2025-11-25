import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PromotionalCard from '@/components/PromotionalCard';
import ShareSection from '@/components/ShareSection';
import ActivityDetails from '@/components/ActivityDetails';
import AppPromotion from '@/components/AppPromotion';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import HeroSection2 from '@/components/HeroSection2';
import EventPageSkeleton from '@/components/EventPageSkeleton';
import { useEvent } from '@/hooks/useEvent';
import { AlertTriangle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

function updateMetaTags(title: string, description: string, image: string, url: string) {
  // Update title
  document.title = title;

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }

  // Update Open Graph meta tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description);
  }

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    ogImage.setAttribute('content', image);
  }

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute('content', url);
  }

  // Update Twitter Card meta tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', title);
  }

  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) {
    twitterDescription.setAttribute('content', description);
  }

  const twitterImage = document.querySelector('meta[name="twitter:image"]');
  if (twitterImage) {
    twitterImage.setAttribute('content', image);
  }
}

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: event, isLoading, error, isError } = useEvent(id);

  // Update metadata when event data is available
  useEffect(() => {
    if (event) {
      const currentUrl = window.location.href;
      const title = `${event.name} - Mate app`;
      const description = `Join "${event.name}" at ${event.address}. ${event.description}`;
      const image = event.image || 'https://mateapp.es/og_image.jpg';

      updateMetaTags(title, description, image, currentUrl);
    }
  }, [event]);

  // Show skeleton while loading
  if (isLoading) {
    return <EventPageSkeleton />;
  }

  // Show error state
  if (isError || !event) {
    return (
      <div className="min-h-[100dvh] w-full bg-black flex flex-col items-center justify-center p-8">
        <div className="flex flex-col items-center text-center max-w-md space-y-6">
          {/* Error Icon */}
          <div className="relative">
            <AlertTriangle className="w-20 h-20 text-red-500 animate-pulse" />
            <div className="absolute inset-0 w-20 h-20 bg-red-500/20 rounded-full animate-ping" />
          </div>
          
          {/* Error Message */}
          <div className="text-white space-y-4">
            <h1 className="text-2xl font-bold">Event Not Found</h1>
            <p className="text-gray-300 text-lg">
              The event has not been found or is terminated.
            </p>
          </div>
          
          {/* Go Back Home Button */}
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Go Back Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] w-full bg-black flex flex-col overflow-hidden">
      <div className="flex-1 flex w-full flex-col items-center gap-[60px] pt-3 px-[60px] max-md:gap-8 max-md:pt-2 max-md:px-10 max-sm:gap-6 max-sm:pt-2 max-sm:px-5">
        <div className="flex flex-col items-start gap-[15px] self-stretch">
          <Navigation />
        </div>

        {/* Two-column layout for hero section with aligned heights */}
        <div className="flex items-stretch gap-5 self-stretch max-lg:flex-col max-lg:gap-[20px]">
          <div className="flex-1">
            <HeroSection2 event={event} />
          </div>
          
          {/* Right section with PromotionalCard */}
          <div className="w-[503px] max-lg:w-full">
            <PromotionalCard event={event} />
          </div>
        </div>

        {/* ShareSection shown only on mobile, above ActivityDetails */}
        <div className="hidden max-md:block self-stretch">
          <ShareSection event={event} />
        </div>

        <main className="flex items-start gap-5 self-stretch max-md:flex-col max-md:gap-[20px]">
          <ActivityDetails event={event} />
          
          <aside className="flex w-[503px] flex-col items-start gap-5 max-md:w-full max-md:hidden">
            <ShareSection event={event} />
            <AppPromotion event={event} />
          </aside>

          {/* AppPromotion shown only on mobile, below ActivityDetails */}
          <div className="hidden max-md:block self-stretch">
            <AppPromotion event={event} />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default EventPage;