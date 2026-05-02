import { MainLayout } from '@/components/layout/MainLayout';
import { AnnouncementBar } from '@/components/landing/AnnouncementBar';
import { HeroSection } from '@/components/landing/HeroSection';
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
      
      {/* Independent Floating Logo */}
      <div className="fixed top-4 left-4 md:top-5 md:left-10 z-[1000] pointer-events-none">
        <img
          src="/logo.png"
          alt="Collabli Logo"
          className="h-8 md:h-9 w-auto object-contain select-none"
        />
      </div>

      <FloatingNavbar />
      
      <HeroSection 
        imageSrc="/desktop-version.png"
        hasAnnouncement={global.showAnnouncementBar}
      />
    </MainLayout>
  );
}
