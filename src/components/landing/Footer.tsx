
"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { name: 'For Brands', href: '#' },
      { name: 'For Influencers', href: '#' },
      { name: 'AI Matching', href: '#' },
      { name: 'Pricing', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Newsroom', href: '#' },
    ],
    resources: [
      { name: 'Creator Blog', href: '#' },
      { name: 'Success Stories', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'API Docs', href: '#' },
    ],
    social: [
      { name: 'Twitter', icon: Twitter, href: '#' },
      { name: 'Instagram', icon: Instagram, href: '#' },
      { name: 'LinkedIn', icon: Linkedin, href: '#' },
      { name: 'GitHub', icon: Github, href: '#' },
    ],
  };

  const avatars = [
    PlaceHolderImages.find(img => img.id === 'avatar-1'),
    PlaceHolderImages.find(img => img.id === 'avatar-2'),
    PlaceHolderImages.find(img => img.id === 'avatar-3'),
    PlaceHolderImages.find(img => img.id === 'avatar-4'),
  ];

  return (
    <footer className="relative w-full h-screen overflow-hidden bg-[linear-gradient(135deg,#f5f4ec_0%,#e8e6d8_30%,#c9c48d_70%,#a8a35c_100%)] flex flex-col justify-between p-12 md:p-16 lg:p-20">
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* TOP SECTION: HEADER & CTA */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 relative z-10">
        <div className="max-w-[600px] space-y-4">
          <h2 className="text-[40px] md:text-[56px] font-bold text-[#111] leading-[1.05] tracking-tight">
            Build Powerful <br /> Influencer Campaigns
          </h2>
          <p className="text-base md:text-lg text-[#5f6b7a] leading-relaxed max-w-[480px]">
            The all-in-one platform connecting world-class brands with verified creators to build powerful partnerships.
          </p>
        </div>

        <button className="bg-[#0ab99d] hover:bg-[#09a68d] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(10,185,157,0.3)] flex items-center group">
          Get Started Now
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* MIDDLE SECTION: LINKS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16 relative z-10 pt-8 lg:pt-0">
        <div>
          <h3 className="font-bold text-[#111] mb-6 uppercase tracking-wider text-xs">Product</h3>
          <ul className="space-y-4">
            {footerLinks.product.map(link => (
              <li key={link.name}>
                <a href={link.href} className="text-[#5f6b7a] hover:text-[#0ab99d] transition-colors text-sm font-medium">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#111] mb-6 uppercase tracking-wider text-xs">Company</h3>
          <ul className="space-y-4">
            {footerLinks.company.map(link => (
              <li key={link.name}>
                <a href={link.href} className="text-[#5f6b7a] hover:text-[#0ab99d] transition-colors text-sm font-medium">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#111] mb-6 uppercase tracking-wider text-xs">Resources</h3>
          <ul className="space-y-4">
            {footerLinks.resources.map(link => (
              <li key={link.name}>
                <a href={link.href} className="text-[#5f6b7a] hover:text-[#0ab99d] transition-colors text-sm font-medium">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#111] mb-6 uppercase tracking-wider text-xs">Social</h3>
          <ul className="space-y-4">
            {footerLinks.social.map(link => (
              <li key={link.name}>
                <a href={link.href} className="text-[#5f6b7a] hover:text-[#0ab99d] transition-colors text-sm font-medium flex items-center gap-2">
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM FLOATING GLASS CARD */}
      <div className="flex justify-center w-full pb-8 md:pb-12 relative z-20">
        <div className={cn(
          "w-full max-w-[1100px] bg-white/60 backdrop-blur-[14px] border border-white/40 rounded-[24px] p-6 md:px-12 md:py-8 shadow-[0_30px_80px_rgba(0,0,0,0.15)]",
          "flex flex-col md:flex-row items-center justify-between gap-6",
          "animate-float"
        )}>
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {avatars.map((avatar, idx) => (
                <div key={idx} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                  {avatar && (
                    <Image 
                      src={avatar.imageUrl} 
                      alt="User" 
                      width={40} 
                      height={40} 
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-[#0ab99d] flex items-center justify-center text-white text-[10px] font-bold">
                50K+
              </div>
            </div>
            <p className="text-[#111] font-bold text-lg md:text-xl text-center md:text-left">
              Join 50K+ creators & brands growing with us
            </p>
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap">
            Join the Community
          </button>
        </div>
      </div>

      {/* COPYRIGHT OVERLAY */}
      <div className="absolute bottom-6 left-12 md:left-20 text-[10px] md:text-xs text-[#5f6b7a] font-medium tracking-widest uppercase pointer-events-none opacity-40">
        © 2026 Collabli. All rights reserved.
      </div>
    </footer>
  );
};
