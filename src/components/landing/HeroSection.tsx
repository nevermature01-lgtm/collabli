import React from 'react';
import { cn } from '@/lib/utils';
import { Users, Handshake, CheckCircle } from 'lucide-react';

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

            {/* Stats section */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mt-8">
              {/* Stat 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f4e7b5] flex items-center justify-center text-gray-700">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">50K+</p>
                  <p className="text-xs text-gray-500">Influencers</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f4e7b5] flex items-center justify-center text-gray-700">
                  <Handshake className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">10K+</p>
                  <p className="text-xs text-gray-500">Brand Partners</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f4e7b5] flex items-center justify-center text-gray-700">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">100%</p>
                  <p className="text-xs text-gray-500">Verified Profiles</p>
                </div>
              </div>
            </div>
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
