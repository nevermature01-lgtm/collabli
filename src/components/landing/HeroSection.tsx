import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCTA: { text: string; link: string };
  secondaryCTA?: { text: string; link: string };
  imageKey: string;
  hasAnnouncement?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  hasAnnouncement,
}) => {
  return (
    <section className={cn(
      "relative py-12 md:py-16 overflow-hidden",
      hasAnnouncement ? "pt-[72px] md:pt-[96px]" : "pt-12 md:pt-16"
    )}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left-4 duration-700">
            {badge && (
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                {badge}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold text-foreground leading-[1.1] mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-12 px-8 font-semibold rounded-lg shadow-premium">
                {primaryCTA.text}
              </Button>
              {secondaryCTA && (
                <Button variant="outline" size="lg" className="h-12 px-8 font-semibold rounded-lg bg-white/50 backdrop-blur-sm border-border shadow-soft">
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0 animate-in fade-in zoom-in-95 duration-700 delay-200 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px] rounded-2xl overflow-hidden shadow-soft border border-white/20 bg-white/50 p-2 group transition-all duration-500 hover:shadow-premium">
              <div className="animate-float">
                <Image
                  src="/desktop-version.png"
                  alt="Premium SaaS Desktop View"
                  width={1200}
                  height={800}
                  priority
                  className="rounded-xl object-contain w-full h-auto transform transition-transform duration-1000 group-hover:scale-[1.01]"
                />
              </div>
              {/* Fallback pattern to maintain height during load/failure */}
              <div className="absolute inset-0 -z-10 bg-muted/10 rounded-xl" />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 blur-3xl rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/5 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
