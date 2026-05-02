
"use client";

import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

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
    <footer className="relative w-full h-[60vh] min-h-[500px] overflow-hidden bg-[linear-gradient(135deg,#020617_0%,#0f172a_50%,#1e293b_100%)] flex flex-col justify-between pt-[60px] pb-[48px] px-6 md:px-[60px]">
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-[1200px] mx-auto w-full flex-grow flex flex-col justify-between relative z-10">
        
        {/* TOP SECTION: HEADER + SOCIAL HORIZONTAL */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="max-w-[520px]">
            <h2 className="text-[28px] md:text-[32px] font-bold text-white leading-[1.15] tracking-[-0.5px] mb-3">
              Build Powerful <br /> Influencer Campaigns
            </h2>
            <p className="text-[14px] text-gray-400 leading-[1.6]">
              The all-in-one platform connecting world-class brands with verified creators to build powerful partnerships.
            </p>
          </div>

          {/* Social Links horizontally aligned top right */}
          <div className="flex flex-col items-start lg:items-end">
            <h3 className="font-bold text-white mb-4 uppercase tracking-[1px] text-[11px] lg:text-right">Follow Us</h3>
            <div className="flex items-center gap-3">
              {footerLinks.social.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="group"
                  aria-label={link.name}
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#ffd84d] group-hover:text-black group-hover:shadow-[0_0_15px_rgba(255,216,77,0.3)] group-hover:-translate-y-0.5">
                    <link.icon className="w-5 h-5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[36px] mt-[36px] lg:mt-0">
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-[1px] text-[11px]">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-[#ffd84d] transition-colors text-[12px] font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-[1px] text-[11px]">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-[#ffd84d] transition-colors text-[12px] font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-[1px] text-[11px]">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-[#ffd84d] transition-colors text-[12px] font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* COPYRIGHT OVERLAY */}
      <div className="absolute bottom-4 left-12 md:left-20 text-[9px] text-gray-600 font-medium tracking-[2px] uppercase pointer-events-none opacity-40">
        © 2026 Collabli. All rights reserved.
      </div>
    </footer>
  );
};
