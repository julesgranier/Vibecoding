import React from 'react';

const SkeletonBox = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 backdrop-blur-sm rounded-md ${className}`} />
);

const EventPageSkeleton: React.FC = () => {
  return (
    <div className="min-h-[100dvh] w-full bg-black flex flex-col overflow-hidden">
      <div className="flex-1 flex w-full flex-col items-center gap-[60px] pt-3 px-[60px] max-md:gap-8 max-md:pt-2 max-md:px-10 max-sm:gap-6 max-sm:pt-2 max-sm:px-5">
        {/* Navigation Skeleton */}
        <div className="flex flex-col items-start gap-[15px] self-stretch">
          <SkeletonBox className="h-12 w-full" />
        </div>

        {/* Event Info Section Skeleton */}
        <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="bg-gray-900/50 backdrop-blur rounded-lg p-6">
            <SkeletonBox className="h-8 w-3/4 mb-4 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30" />
            <div className="space-y-3 mb-4">
              <SkeletonBox className="h-4 w-full bg-gradient-to-r from-green-500/20 via-teal-500/20 to-cyan-500/20" />
              <SkeletonBox className="h-4 w-4/5 bg-gradient-to-r from-green-500/20 via-teal-500/20 to-cyan-500/20" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SkeletonBox className="h-6 w-32 bg-gradient-to-r from-orange-500/25 to-red-500/25" />
              <SkeletonBox className="h-6 w-28 bg-gradient-to-r from-pink-500/25 to-purple-500/25" />
              <SkeletonBox className="h-6 w-36 bg-gradient-to-r from-blue-500/25 to-indigo-500/25" />
              <SkeletonBox className="h-6 w-24 bg-gradient-to-r from-yellow-500/25 to-orange-500/25" />
            </div>
          </div>
        </div>

        {/* Two-column layout skeleton */}
        <div className="flex items-stretch gap-5 self-stretch max-lg:flex-col max-lg:gap-[20px]">
          {/* Hero Section Skeleton */}
          <div className="flex-1 space-y-6">
            <SkeletonBox className="h-8 w-3/4 bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-fuchsia-500/30" />
            <SkeletonBox className="h-6 w-full bg-gradient-to-r from-blue-500/25 via-indigo-500/25 to-purple-500/25" />
            <SkeletonBox className="h-6 w-5/6 bg-gradient-to-r from-blue-500/25 via-indigo-500/25 to-purple-500/25" />
            <SkeletonBox className="h-10 w-32 bg-gradient-to-r from-emerald-500/30 to-teal-500/30" />
          </div>
          
          {/* Promotional Card Skeleton */}
          <div className="w-[503px] max-lg:w-full">
            <SkeletonBox className="h-[400px] w-full rounded-xl bg-gradient-to-br from-pink-500/20 via-rose-500/20 to-orange-500/20" />
          </div>
        </div>

        {/* Mobile Share Section Skeleton */}
        <div className="hidden max-md:block self-stretch">
          <SkeletonBox className="h-16 w-full bg-gradient-to-r from-teal-500/20 to-cyan-500/20" />
        </div>

        {/* Main Content Skeleton */}
        <main className="flex items-start gap-5 self-stretch max-md:flex-col max-md:gap-[20px]">
          {/* Activity Details Skeleton */}
          <div className="flex-1 space-y-6">
            <SkeletonBox className="h-8 w-48 bg-gradient-to-r from-amber-500/30 to-yellow-500/30" />
            <div className="space-y-4">
              <SkeletonBox className="h-4 w-full bg-gradient-to-r from-slate-500/20 to-gray-500/20" />
              <SkeletonBox className="h-4 w-full bg-gradient-to-r from-slate-500/20 to-gray-500/20" />
              <SkeletonBox className="h-4 w-3/4 bg-gradient-to-r from-slate-500/20 to-gray-500/20" />
            </div>
            <div className="space-y-4">
              <SkeletonBox className="h-6 w-40 bg-gradient-to-r from-lime-500/25 to-green-500/25" />
              <div className="grid grid-cols-2 gap-4">
                <SkeletonBox className="h-20 w-full bg-gradient-to-br from-red-500/20 to-pink-500/20" />
                <SkeletonBox className="h-20 w-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20" />
                <SkeletonBox className="h-20 w-full bg-gradient-to-br from-green-500/20 to-emerald-500/20" />
                <SkeletonBox className="h-20 w-full bg-gradient-to-br from-purple-500/20 to-violet-500/20" />
              </div>
            </div>
          </div>
          
          {/* Desktop Sidebar Skeleton */}
          <aside className="flex w-[503px] flex-col items-start gap-5 max-md:w-full max-md:hidden">
            <SkeletonBox className="h-16 w-full bg-gradient-to-r from-cyan-500/25 to-blue-500/25" />
            <SkeletonBox className="h-[200px] w-full rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20" />
          </aside>

          {/* Mobile App Promotion Skeleton */}
          <div className="hidden max-md:block self-stretch">
            <SkeletonBox className="h-[200px] w-full rounded-xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20" />
          </div>
        </main>
      </div>

      {/* Footer Skeleton */}
      <div className="mt-auto">
        <SkeletonBox className="h-32 w-full bg-gradient-to-r from-gray-600/20 to-slate-600/20" />
      </div>
    </div>
  );
};

export default EventPageSkeleton;