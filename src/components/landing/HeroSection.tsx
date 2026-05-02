import React from 'react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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
  imageKey,
  hasAnnouncement,
}) => {
  const image = PlaceHolderImages.find(img => img.id === imageKey);

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
          <div className="relative animate-in fade-in zoom-in-95 duration-700 delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-2 group">
              {image && (
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={1200}
                  height={800}
                  className="rounded-xl object-cover w-full h-auto transform transition-transform duration-1000 group-hover:scale-[1.02]"
                  data-ai-hint={image.imageHint}
                />
              )}
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 blur-3xl rounded-full" />
            </div>
            {/* Soft floating effect wrapper */}
            <div className="absolute inset-0 pointer-events-none animate-float opacity-30">
               <div className="absolute top-1/4 -left-8 w-16 h-16 bg-primary blur-2xl rounded-full" />
               <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-secondary blur-2xl rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};