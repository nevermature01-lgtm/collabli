
"use client";

import React from 'react';
import { ArrowRight, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
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

  return (
    <footer className="relative w-full h-[60vh] min-h-[500px] overflow-hidden bg-[linear-gradient(135deg,#f5f4ec_0%,#e8e6d8_30%,#c9c48d_70%,#a8a35c_100%)] flex flex-col justify-between pt-[60px] pb-[48px] px-6 md:px-[60px]">
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-[1200px] mx-auto w-full flex-grow flex flex-col justify-between relative z-10">
        
        {/* TOP SECTION: HEADER & CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="max-w-[520px]">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#111] leading-[1.15] tracking-[-0.5px] mb-3">
              Build Powerful <br /> Influencer Campaigns
            </h2>
            <p className="text-[14px] text-[#5f6b7a] leading-[1.6]">
              The all-in-one platform connecting world-class brands with verified creators to build powerful partnerships.
            </p>
          </div>
        </div>

        {/* MIDDLE SECTION: LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[36px] mt-[36px]">
          <div>
            <h3 className="font-bold text-[#111] mb-4 uppercase tracking-[1px] text-[11px]">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#6b7280] hover:text-[#0ab99d] transition-colors text-[12px] font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#111] mb-4 uppercase tracking-[1px] text-[11px]">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#6b7280] hover:text-[#0ab99d] transition-colors text-[12px] font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#111] mb-4 uppercase tracking-[1px] text-[11px]">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#6b7280] hover:text-[#0ab99d] transition-colors text-[12px] font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#111] mb-4 uppercase tracking-[1px] text-[11px]">Social</h3>
            <ul className="space-y-3">
              {footerLinks.social.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#6b7280] hover:text-[#0ab99d] transition-colors text-[12px] font-medium flex items-center gap-2">
                    <link.icon className="w-3.5 h-3.5" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* COPYRIGHT OVERLAY */}
      <div className="absolute bottom-4 left-12 md:left-20 text-[9px] text-[#5f6b7a] font-medium tracking-[2px] uppercase pointer-events-none opacity-40">
        © 2026 Collabli. All rights reserved.
      </div>
    </footer>
  );
};
