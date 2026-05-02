
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
    <footer className="relative w-full h-screen overflow-hidden bg-[linear-gradient(135deg,#f5f4ec_0%,#e8e6d8_30%,#c9c48d_70%,#a8a35c_100%)] flex flex-col justify-between pt-[100px] pb-[140px] px-6 md:px-[60px]">
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-[1200px] mx-auto w-full flex-grow flex flex-col justify-between relative z-10">
        
        {/* TOP SECTION: HEADER & CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="max-w-[520px]">
            <h2 className="text-[42px] md:text-[52px] font-bold text-[#111] leading-[1.1] tracking-[-0.5px] mb-4">
              Build Powerful <br /> Influencer Campaigns
            </h2>
            <p className="text-[16px] text-[#5f6b7a] leading-[1.6]">
              The all-in-one platform connecting world-class brands with verified creators to build powerful partnerships.
            </p>
          </div>

          <div className="relative group">
            {/* Subtle radial glow behind CTA */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] pointer-events-none opacity-40 blur-3xl bg-[radial-gradient(circle_at_center,rgba(10,185,157,0.15),transparent_70%)]" />
            
            <button className="relative bg-[#0ab99d] hover:bg-[#09a68d] text-white px-[34px] py-[16px] rounded-full font-bold transition-all duration-300 hover:-translate-y-[2px] hover:scale-[1.02] shadow-[0_12px_40px_rgba(10,185,157,0.35)] flex items-center group overflow-hidden">
              <span className="relative z-10 flex items-center">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        {/* MIDDLE SECTION: LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[60px] mt-[60px]">
          <div>
            <h3 className="font-bold text-[#111] mb-6 uppercase tracking-[1px] text-[13px]">Product</h3>
            <ul className="space-y-4">
              {footerLinks.product.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#6b7280] hover:text-[#0ab99d] transition-colors text-[14px] font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#111] mb-6 uppercase tracking-[1px] text-[13px]">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#6b7280] hover:text-[#0ab99d] transition-colors text-[14px] font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#111] mb-6 uppercase tracking-[1px] text-[13px]">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#6b7280] hover:text-[#0ab99d] transition-colors text-[14px] font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#111] mb-6 uppercase tracking-[1px] text-[13px]">Social</h3>
            <ul className="space-y-4">
              {footerLinks.social.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#6b7280] hover:text-[#0ab99d] transition-colors text-[14px] font-medium flex items-center gap-2">
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM SPACING FOR CARD VISIBILITY */}
        <div className="h-12 lg:h-0" />
      </div>

      {/* BOTTOM FLOATING GLASS CARD */}
      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[85%] max-w-[1000px] z-20">
        <div className={cn(
          "bg-white/70 backdrop-blur-[14px] border border-white/40 rounded-[24px] px-[32px] py-[24px] shadow-[0_40px_100px_rgba(0,0,0,0.2)]",
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

          <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap shadow-lg">
            Join the Community
          </button>
        </div>
      </div>

      {/* COPYRIGHT OVERLAY */}
      <div className="absolute bottom-6 left-12 md:left-20 text-[10px] md:text-xs text-[#5f6b7a] font-medium tracking-[2px] uppercase pointer-events-none opacity-40">
        © 2026 Collabli. All rights reserved.
      </div>
    </footer>
  );
};
