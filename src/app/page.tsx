
import { MainLayout } from '@/components/layout/MainLayout';
import { AnnouncementBar } from '@/components/landing/AnnouncementBar';
import { HeroSection } from '@/components/landing/HeroSection';
import { BrandsSlider } from '@/components/landing/BrandsSlider';
import { FeatureShowcase } from '@/components/landing/FeatureShowcase';
import { ServiceShowcase } from '@/components/landing/ServiceShowcase';
import { BannerSection } from '@/components/landing/BannerSection';
import { InteractiveTestimonials } from '@/components/landing/InteractiveTestimonials';
import { Footer } from '@/components/landing/Footer';
import FloatingNavbar from '@/components/FloatingNavbar';
import { siteConfig } from '@/config/site-content';

export default function Home() {
  const { announcement, global } = siteConfig;

  return (
    <MainLayout>
      <AnnouncementBar 
        message={announcement.message}
        ctaText={announcement.ctaText}
        ctaLink={announcement.ctaLink}
        isVisible={global.showAnnouncementBar}
      />
      
      {/* Independent Floating Logo aligned with Navbar top position */}
      <div className="absolute top-10 left-4 md:left-10 z-[1000] pointer-events-none flex items-center h-[42px]">
        <img
          src="/logo.png"
          alt="Collabli Logo"
          className="h-5 md:h-7 lg:h-8 w-auto object-contain select-none"
        />
      </div>

      <FloatingNavbar />
      
      <HeroSection 
        imageSrc="/desktop-version.png"
        hasAnnouncement={global.showAnnouncementBar}
      />

      <BrandsSlider />

      <ServiceShowcase />

      <FeatureShowcase />

      <InteractiveTestimonials />

      <BannerSection />

      <Footer />
    </MainLayout>
  );
}
