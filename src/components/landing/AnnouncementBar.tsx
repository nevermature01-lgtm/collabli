"use client";

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
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

  // Split message to highlight second part if delimiter exists (e.g., " — ")
  const parts = message.includes(' — ') ? message.split(' — ') : [message];

  return (
    <div 
      className="absolute top-0 left-0 right-0 z-[100] min-h-[44px] backdrop-blur-[14px] transition-all duration-300 border-b border-black/[0.06] shadow-[0_6px_20px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.4)]"
      style={{
        background: 'linear-gradient(90deg, rgba(255,255,255,0.75), rgba(10,185,157,0.08))',
      }}
    >
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="container mx-auto h-full px-6 flex items-center justify-center relative py-[10px]">
        <p className="text-sm md:text-base font-medium text-[#2a2a2a] text-center truncate pr-8 tracking-[0.2px]">
          {parts[0]}
          {parts.length > 1 && (
            <span className="text-[#0ab99d] font-semibold"> — {parts[1]}</span>
          )}
          {ctaLink && ctaText && (
            <a 
              href={ctaLink} 
              className="ml-2 text-[#0ab99d] font-semibold relative inline-block group transition-all duration-250 hover:opacity-80"
            >
              {ctaText}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[1.5px] bg-[#0ab99d] transition-all duration-300 group-hover:w-full" />
            </a>
          )}
        </p>
        <button
          onClick={handleDismiss}
          className="absolute right-4 p-1.5 rounded-full hover:bg-black/5 text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors"
          aria-label="Dismiss announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
