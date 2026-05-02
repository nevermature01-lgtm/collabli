
"use client";

import React from 'react';
import { ArrowRight, Linkedin, Instagram, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Footer: React.FC = () => {
  const aboutLinks = [
    { name: 'For Brands', href: '#' },
    { name: 'For Influencers', href: '#' },
    { name: 'AI Matching', href: '#' },
    { name: 'Success Stories', href: '#' },
  ];

  const infoLinks = [
    { name: 'Our Story', href: '#' },
    { name: 'Newsroom', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'API Documentation', href: '#' },
  ];

  return (
    <footer className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden px-10 py-[100px] md:px-[60px] selection:bg-white/20 selection:text-white">
      {/* MESH BACKGROUND */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #0f2f2a 0%, #0ab99d 40%, #e6d8a8 100%)',
          backgroundBlendMode: 'overlay',
        }}
      />
      
      {/* OVERLAY RADIAL GLOW */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(255,255,255,0.08), transparent 60%)'
        }}
      />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full opacity-[0.15] animate-float-slow"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 4 + 6 + 's',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full flex flex-col h-full flex-grow justify-between">
        
        {/* LOGO AREA */}
        <div className="mb-20">
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Collabli" 
              className="h-[28px] w-auto brightness-0 invert filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            />
          </div>
        </div>

        {/* GRID LAYOUT (CENTER) */}
        <div className="max-w-[900px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[120px] mb-20">
          {/* ABOUT COLUMN */}
          <div className="flex flex-col">
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-white/60 mb-[30px] block">
              About
            </span>
            <div className="flex flex-col">
              {aboutLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="group flex justify-between items-center py-[14px] border-b border-white/15 text-[22px] font-normal text-white/85 transition-all duration-300 hover:text-white hover:border-white/40"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* INFO COLUMN */}
          <div className="flex flex-col">
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-white/60 mb-[30px] block">
              Info
            </span>
            <div className="flex flex-col">
              {infoLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="group flex justify-between items-center py-[14px] border-b border-white/15 text-[22px] font-normal text-white/85 transition-all duration-300 hover:text-white hover:border-white/40"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-[12px] font-medium text-white/50">
            <span>© 2026 Collabli</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>

          <div className="flex items-center gap-8 text-[12px] font-bold uppercase tracking-[1px] text-white/50">
            <a href="#" className="flex items-center gap-2 hover:text-white transition-all group">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-all group">
              <Twitter className="w-4 h-4" />
              <span>X</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-all group">
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -20px); }
        }
        .animate-float-slow {
          animation: float-slow infinite ease-in-out;
        }
      `}</style>
    </footer>
  );
};
