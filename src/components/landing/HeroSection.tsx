import React from 'react';
import Image from 'next/image';
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
    <section className={cn(
      "relative py-16 md:py-32 bg-slate-50/50 flex items-center justify-center overflow-hidden",
      hasAnnouncement ? "pt-[80px] md:pt-[140px]" : "pt-16 md:pt-32"
    )}>
      <div className="container mx-auto px-4 relative z-10 flex justify-center items-center">
        <div className="w-full max-w-[1100px] animate-in fade-in zoom-in-95 duration-1000 flex justify-center">
          <div className="relative w-full rounded-[20px] md:rounded-[28px] overflow-hidden shadow-soft border border-white/60 bg-white p-2 md:p-3 group transition-all duration-500 hover:shadow-premium animate-float">
            <div className="relative w-full h-full overflow-hidden rounded-[16px] md:rounded-[22px]">
              <Image
                src={imageSrc}
                alt="Product Preview"
                width={1200}
                height={800}
                priority
                className="w-full h-auto object-contain transform transition-transform duration-1000 group-hover:scale-[1.01]"
              />
              {/* Fallback pattern */}
              <div className="absolute inset-0 -z-10 bg-muted/5" />
            </div>
            
            {/* Subtle decorative glass effects */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 blur-3xl rounded-full opacity-50" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/5 blur-3xl rounded-full opacity-50" />
          </div>
        </div>
      </div>
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};
