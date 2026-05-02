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
      
      <FloatingNavbar />
      
      <HeroSection 
        imageSrc="/desktop-version.png"
        hasAnnouncement={global.showAnnouncementBar}
      />
    </MainLayout>
  );
}
