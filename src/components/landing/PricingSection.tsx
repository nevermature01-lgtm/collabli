import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

interface PricingSectionProps {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
}

export const PricingSection: React.FC<PricingSectionProps> = ({ title, subtitle, plans }) => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "relative p-8 rounded-3xl border transition-all duration-300",
                plan.highlight 
                  ? "bg-white border-primary shadow-premium scale-105 z-10" 
                  : "bg-background border-border hover:border-primary/50 shadow-soft"
              )}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                  Most Popular
                </span>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-muted-foreground">/mo</span>}
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <div className="mt-1 p-0.5 bg-primary/10 rounded-full text-primary">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={cn(
                  "w-full rounded-xl py-6 font-bold",
                  plan.highlight ? "shadow-premium" : "bg-muted text-foreground hover:bg-muted/80"
                )}
                variant={plan.highlight ? "default" : "secondary"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
