import React from 'react';
import { Zap, BarChart3, Users, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  items: FeatureItem[];
}

const iconMap: Record<string, LucideIcon> = {
  Zap,
  BarChart3,
  Users,
};

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ title, subtitle, items }) => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white/50 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <div key={index} className="bg-background p-8 rounded-2xl border border-border shadow-soft hover:shadow-premium transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};