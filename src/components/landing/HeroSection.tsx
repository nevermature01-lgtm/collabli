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
        "relative w-full h-screen overflow-hidden bg-background flex items-end pb-0 md:pb-1",
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
      <div className="w-full px-4 md:px-10 relative z-10 pointer-events-none">
        {/* Top Text - Independent and aligned left */}
        <div className="max-w-[800px] pointer-events-auto">
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4 max-w-[500px]">
            The all-in-one platform to connect brands with verified influencers and build powerful partnerships.
          </p>
        </div>

        {/* Centered Button Container - Aligned with Viewport Center (Navbar) */}
        <div className="w-full flex justify-center mb-6 pointer-events-auto">
          <button className="bg-gradient-to-r from-[#ffd84d] to-[#f5c400] px-4 py-2 rounded-full text-[10px] md:text-xs font-semibold text-black shadow-md hover:scale-105 active:scale-95 transition-all duration-200 block">
            FIND THE RIGHT MATCH →
          </button>
        </div>

        {/* Stats section - Independent and aligned left */}
        <div className="max-w-[800px] pointer-events-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mt-2">
            {/* Stat 1 */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f4e7b5] flex items-center justify-center text-gray-700">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold text-black leading-tight">50K+</p>
                <p className="text-[9px] md:text-[10px] text-gray-500 leading-none">Influencers</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f4e7b5] flex items-center justify-center text-gray-700">
                <Handshake className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold text-black leading-tight">10K+</p>
                <p className="text-[9px] md:text-[10px] text-gray-500 leading-none">Brand Partners</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f4e7b5] flex items-center justify-center text-gray-700">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs md:text-sm font-bold text-black leading-tight">100%</p>
                <p className="text-[9px] md:text-[10px] text-gray-500 leading-none">Verified Profiles</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Testimonial Card 1 */}
      <div className="hidden lg:block absolute bottom-[220px] right-2 w-[110px] bg-white/60 backdrop-blur-md border border-white/30 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.4)] p-3 z-20 hover:-translate-y-1 transition-all duration-300 cursor-default">
        <div className="text-[#0ab99d] text-lg font-serif mb-1 leading-none">“</div>
        <p className="text-[10px] text-gray-700 leading-tight font-medium">
          This platform helped me collaborate with amazing brands that truly align with my audience.
        </p>
        <p className="text-[7px] text-gray-400 mt-1.5 tracking-wider uppercase font-bold">
          — FASHION CREATOR
        </p>
      </div>

      {/* Floating Testimonial Card 2 - Wider Rectangular Shape with Glassmorphism */}
      <div className="hidden lg:block absolute bottom-[40px] right-[40px] w-[200px] bg-white/60 backdrop-blur-md border border-white/30 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.4)] p-3 z-20 animate-in fade-in slide-in-from-right-10 duration-1000 delay-300 hover:-translate-y-1 transition-all duration-300 cursor-default">
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