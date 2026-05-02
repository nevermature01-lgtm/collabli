import { MainLayout } from '@/components/layout/MainLayout';
import { AnnouncementBar } from '@/components/landing/AnnouncementBar';
import { HeroSection } from '@/components/landing/HeroSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { AICopyAssistant } from '@/components/landing/AICopyAssistant';
import { siteConfig } from '@/config/site-content';

export default function Home() {
  const { announcement, hero, features, global } = siteConfig;

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

      {/* Placeholder for future sections */}
      <section className="py-24 container mx-auto px-4 text-center">
        <div className="bg-primary/5 rounded-3xl p-12 border border-primary/10">
          <h2 className="text-3xl font-bold mb-4">Ready to build your dream SaaS?</h2>
          <p className="text-lg text-muted-foreground mb-8">Join over 5,000+ founders who use SaaSForge every day.</p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold shadow-premium hover:opacity-90 transition-opacity">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}