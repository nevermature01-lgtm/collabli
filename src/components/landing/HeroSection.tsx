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
      {/* 
        Full-screen Static Image Hero 
        - 100vh height
        - No children/overlays for clean UI focus
      */}
    </section>
  );
};
