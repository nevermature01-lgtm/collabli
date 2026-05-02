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
        "relative w-full h-screen overflow-hidden bg-background flex items-end pb-8 md:pb-12",
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
      <div className="container mx-auto px-4 md:px-10 relative z-10 pointer-events-none">
        <div className="max-w-[650px] pointer-events-auto">
          {/* Sub-content block shifted to the very bottom */}
          <div className="max-w-[520px]">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Discover. Collaborate. Create Impact.
            </h3>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
              The all-in-one platform to connect brands with verified influencers and build powerful partnerships.
            </p>

            <button className="bg-gradient-to-r from-[#ffd84d] to-[#f5c400] px-6 py-3 rounded-full text-sm font-semibold text-black shadow-sm hover:scale-105 active:scale-95 transition-all duration-200">
              FIND THE RIGHT MATCH →
            </button>
          </div>
        </div>
      </div>

      {/* Floating Testimonial Card 1 */}
      <div className="hidden lg:block absolute top-4 right-4 w-[110px] bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-3 z-20">
        <div className="text-[#0ab99d] text-lg font-serif mb-1 leading-none">“</div>
        <p className="text-[10px] text-gray-700 leading-tight font-medium">
          This platform helped me collaborate with amazing brands that truly align with my audience.
        </p>
        <p className="text-[7px] text-gray-400 mt-1.5 tracking-wider uppercase font-bold">
          — FASHION CREATOR
        </p>
      </div>

      {/* Floating Testimonial Card 2 */}
      <div className="hidden lg:block absolute top-[260px] right-[40px] w-[110px] bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-3 z-20 animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
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
