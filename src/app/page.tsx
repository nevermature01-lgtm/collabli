import { MainLayout } from '@/components/layout/MainLayout';
import { AnnouncementBar } from '@/components/landing/AnnouncementBar';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { AICopyAssistant } from '@/components/landing/AICopyAssistant';
import { siteConfig } from '@/config/site-content';

export default function Home() {
  const { announcement, hero, features, pricing, testimonials, global } = siteConfig;

  return (
    <MainLayout>
      <AnnouncementBar 
        message={announcement.message}
        ctaText={announcement.ctaText}
        ctaLink={announcement.ctaLink}
        isVisible={global.showAnnouncementBar}
      />
      
      <HeroSection 
        badge={hero.badge}
        title={hero.title}
        subtitle={hero.subtitle}
        primaryCTA={hero.primaryCTA}
        secondaryCTA={hero.secondaryCTA}
        imageKey={hero.image}
        hasAnnouncement={global.showAnnouncementBar}
      />

      <FeaturesSection 
        title={features.title}
        subtitle={features.subtitle}
        items={features.items}
      />

      <AICopyAssistant />

      <TestimonialsSection 
        title={testimonials.title}
        subtitle={testimonials.subtitle}
        items={testimonials.items}
      />

      <PricingSection 
        title={pricing.title}
        subtitle={pricing.subtitle}
        plans={pricing.plans}
      />

      {/* Final CTA Section */}
      <section id="contact" className="py-24 container mx-auto px-4">
        <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center text-white shadow-premium overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to build your dream SaaS?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Join over 5,000+ founders who use SaaSForge to scale their operations every single day.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-primary px-10 py-4 rounded-2xl font-bold shadow-xl hover:bg-opacity-90 transition-all transform hover:scale-105">
                Get Started for Free
              </button>
              <button className="bg-primary-foreground/10 backdrop-blur-md border border-white/20 px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                Book a Demo
              </button>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -ml-32 -mb-32" />
        </div>
      </section>
    </MainLayout>
  );
}
