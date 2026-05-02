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
      
      {/* Independent Floating Logo aligned with Navbar top position */}
      <div className="fixed top-10 left-4 md:left-10 z-[1000] pointer-events-none flex items-center h-[42px]">
        <img
          src="/logo.png"
          alt="Collabli Logo"
          className="h-7 md:h-9 lg:h-10 w-auto object-contain select-none"
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
