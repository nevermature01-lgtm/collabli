import React from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  title: string;
  subtitle: string;
  items: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ title, subtitle, items }) => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const avatar = PlaceHolderImages.find(img => img.id === item.avatar);
            return (
              <div key={index} className="bg-white p-8 rounded-3xl border border-border shadow-soft flex flex-col h-full">
                <div className="flex gap-1 text-primary mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg italic text-muted-foreground mb-8 flex-grow">"{item.content}"</p>
                <div className="flex items-center gap-4">
                  {avatar && (
                    <Image 
                      src={avatar.imageUrl} 
                      alt={item.name} 
                      width={48} 
                      height={48} 
                      className="rounded-full object-cover"
                      data-ai-hint={avatar.imageHint}
                    />
                  )}
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
