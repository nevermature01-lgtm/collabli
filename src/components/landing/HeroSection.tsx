import React from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  imageSrc: string;
  hasAnnouncement?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  imageSrc,
  hasAnnouncement,
}) => {
  return (
    <section 
      className={cn(
        "relative w-full h-screen overflow-hidden bg-background",
      )}
      style={{
        backgroundImage: `url('${imageSrc}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      role="img"
      aria-label="SaaS Product Showcase"
    >
      {/* Floating Testimonial Card 1 */}
      <div className="hidden lg:block absolute top-4 left-4 w-[140px] bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-3 z-20">
        <div className="text-[#0ab99d] text-lg font-serif mb-1 leading-none">“</div>
        <p className="text-[10px] text-gray-700 leading-tight font-medium">
          This platform helped me collaborate with amazing brands that truly align with my audience.
        </p>
        <p className="text-[7px] text-gray-400 mt-1.5 tracking-wider uppercase font-bold">
          — FASHION CREATOR
        </p>
      </div>

      {/* Floating Testimonial Card 2 */}
      <div className="hidden lg:block absolute top-[260px] right-[40px] w-[140px] bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-3 z-20 animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
        <div className="text-[#0ab99d] text-lg font-serif mb-1 leading-none">“</div>
        <p className="text-[10px] text-gray-700 leading-tight font-medium">
          We found the perfect influencer in just a few clicks. Great experience!
        </p>
        <p className="text-[7px] text-gray-400 mt-1.5 tracking-wider uppercase font-bold">
          — BRAND HEAD
        </p>
      </div>
    </section>
  );
};
