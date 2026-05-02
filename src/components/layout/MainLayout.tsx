import React from 'react';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("min-h-screen flex flex-col bg-background font-body", className)}>
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <footer className="py-6 border-t bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SaaSForge. All rights reserved.
        </div>
      </footer>
    </div>
  );
};