
"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, Linkedin, Instagram, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Footer: React.FC = () => {
  const [particles, setParticles] = useState<{
    id: number;
    width: string;
    height: string;
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  }[]>([]);

  useEffect(() => {
    const generatedParticles = [...Array(12)].map((_, i) => ({
      id: i,
      width: Math.random() * 4 + 2 + 'px',
      height: Math.random() * 4 + 2 + 'px',
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      animationDelay: Math.random() * 5 + 's',
      animationDuration: Math.random() * 4 + 6 + 's',
    }));
    setParticles(generatedParticles);
  }, []);

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
    <footer className="relative min-height-[100vh] w-full flex flex-col justify-between overflow-hidden px-10 py-[100px] md:px-[60px] selection:bg-[#0ab99d]/10 selection:text-[#0ab99d]">
      {/* MESH BACKGROUND - LIGHT PREMIUM THEME */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #f5f2e9 0%, #e8dfc7 40%, #d4c48a 100%)',
        }}
      />
      
      {/* OVERLAY RADIAL GLOW */}
      <div 
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(10,185,157,0.08), transparent 60%)'
        }}
      />

      {/* FLOATING PARTICLES - SUBTLE DARK */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div 
            key={p.id}
            className="absolute bg-black/[0.05] rounded-full animate-float-slow"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
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
              className="h-[42px] w-auto filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            />
          </div>
        </div>

        {/* GRID LAYOUT (CENTER) */}
        <div className="max-w-[900px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[120px] mb-20">
          {/* ABOUT COLUMN */}
          <div className="flex flex-col">
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-black/50 mb-[30px] block">
              About
            </span>
            <div className="flex flex-col">
              {aboutLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="footer-link group flex justify-between items-center py-[14px] border-b border-black/[0.08] text-[22px] font-normal text-black/75 transition-all duration-300"
                >
                  <span className="text-content transition-colors duration-300">{link.name}</span>
                  <div className="arrow-wrapper">
                    <ArrowRight className="arrow w-5 h-5" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* INFO COLUMN */}
          <div className="flex flex-col">
            <span className="text-[11px] font-bold tracking-[2px] uppercase text-black/50 mb-[30px] block">
              Info
            </span>
            <div className="flex flex-col">
              {infoLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="footer-link group flex justify-between items-center py-[14px] border-b border-black/[0.08] text-[22px] font-normal text-black/75 transition-all duration-300"
                >
                  <span className="text-content transition-colors duration-300">{link.name}</span>
                  <div className="arrow-wrapper">
                    <ArrowRight className="arrow w-5 h-5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-auto pt-10 border-t border-black/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-[12px] font-medium text-black/50">
            <span>© 2026 Collabli</span>
            <span className="w-1 h-1 rounded-full bg-black/10" />
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 rounded-full bg-black/10" />
            <a href="#" className="hover:text-black transition-colors">Terms</a>
          </div>

          <div className="flex items-center gap-8 text-[12px] font-bold uppercase tracking-[1px] text-black/50">
            <a href="#" className="flex items-center gap-2 hover:text-black transition-all group">
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-black transition-all group">
              <Twitter className="w-4 h-4" />
              <span>X</span>
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-black transition-all group">
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

        .footer-link {
          cursor: pointer !important;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          position: relative;
        }

        .arrow-wrapper {
          display: inline-block !important; /* CRITICAL FOR TRANSFORM */
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .arrow {
          display: inline-block !important;
          color: rgba(0,0,0,0.35);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* HOVER INTERACTIONS */
        .footer-link:hover {
          color: #000 !important;
          border-bottom-color: rgba(156, 123, 26, 0.4) !important;
          background: rgba(0, 0, 0, 0.01); /* Safety highlight */
        }

        .footer-link:hover .text-content {
          color: #000;
        }

        .footer-link:hover .arrow-wrapper {
          transform: translateX(10px) rotate(-45deg) !important; /* GLIDE + DIAGONAL UP (↗) */
          filter: drop-shadow(0 0 6px rgba(156, 123, 26, 0.5));
        }

        .footer-link:hover .arrow {
          color: #9c7b1a !important; /* GOLDEN BROWN */
        }

        .footer-link:active .arrow-wrapper {
          transform: translateX(6px) rotate(-45deg) !important;
          transition-duration: 0.1s;
        }

        @media (max-width: 768px) {
          .footer-link {
            font-size: 18px;
            padding: 12px 0;
          }
        }
      `}</style>
    </footer>
  );
};
