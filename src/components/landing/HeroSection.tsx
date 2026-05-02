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
      <div className="hidden lg:block absolute top-[120px] right-[80px] w-[280px] bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-5 z-20 animate-in fade-in slide-in-from-right-10 duration-1000">
        <div className="text-[#0ab99d] text-2xl font-serif mb-1 leading-none">“</div>
        <p className="text-[14px] text-gray-700 leading-[1.6] font-medium">
          This platform helped me collaborate with amazing brands that truly align with my audience.
        </p>
        <p className="text-[11px] text-gray-400 mt-[10px] tracking-widest uppercase font-bold">
          — FASHION & LIFESTYLE CREATOR
        </p>
      </div>

      {/* Floating Testimonial Card 2 */}
      <div className="hidden lg:block absolute top-[280px] right-[40px] w-[280px] bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-5 z-20 animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
        <div className="text-[#0ab99d] text-2xl font-serif mb-1 leading-none">“</div>
        <p className="text-[14px] text-gray-700 leading-[1.6] font-medium">
          We found the perfect influencer in just a few clicks. Great experience!
        </p>
        <p className="text-[11px] text-gray-400 mt-[10px] tracking-widest uppercase font-bold">
          — BRAND MARKETING HEAD
        </p>
      </div>
    </section>
  );
};
