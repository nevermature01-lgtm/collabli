"use client";

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnnouncementBarProps {
  message: string;
  ctaText?: string;
  ctaLink?: string;
  isVisible?: boolean;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  message,
  ctaText,
  ctaLink,
  isVisible = true,
}) => {
  const [show, setShow] = useState(false);

  // Use useEffect to prevent hydration mismatch for locally stored dismissal state
  useEffect(() => {
    const isDismissed = localStorage.getItem('announcement-dismissed');
    if (isVisible && !isDismissed) {
      setShow(true);
    }
  }, [isVisible]);

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem('announcement-dismissed', 'true');
  };

  if (!show) return null;

  return (
    <div className="absolute top-0 left-0 right-0 z-[100] h-[48px] bg-primary/10 border-b border-primary/20 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto h-full px-4 flex items-center justify-center relative">
        <p className="text-sm md:text-base font-medium text-primary text-center truncate pr-8">
          {message}
          {ctaLink && ctaText && (
            <a 
              href={ctaLink} 
              className="ml-2 font-bold underline underline-offset-2 hover:text-primary/80 transition-colors"
            >
              {ctaText}
            </a>
          )}
        </p>
        <button
          onClick={handleDismiss}
          className="absolute right-4 p-1 rounded-full hover:bg-primary/10 text-primary/60 hover:text-primary transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
