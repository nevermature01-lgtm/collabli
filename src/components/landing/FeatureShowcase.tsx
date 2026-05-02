
"use client";

import React, { useState } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const FeatureShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Affiliate & Ad');

  const tabs = [
    'Discover & Nurture',
    'Manage & Scale',
    'Affiliate & Ad',
    'Measure & Refine'
  ];

  const dashboardImg = PlaceHolderImages.find(img => img.id === 'dashboard-preview');

  return (
    <section className="bg-[#f5f2eb] py-20 px-4 text-center overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-[32px] md:text-[42px] font-semibold text-[#222] leading-tight max-w-2xl mx-auto">
          The all-in-one creator platform
        </h2>
        <p className="text-sm md:text-base text-[#777] mt-[10px] max-w-xl mx-auto">
          Everything your creator program needs, from first search to final report.
        </p>

        {/* Side-by-Side Layout for Tabs and Image */}
        <div className="mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start max-w-[1100px] mx-auto text-left">
          
          {/* Vertical Tabs (I Shape) */}
          <div className="w-full lg:w-72 flex flex-col bg-[#e9e4da] rounded-2xl p-2 gap-1 shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "w-full px-6 py-4 rounded-xl text-[14px] text-left transition-all duration-300",
                  activeTab === tab 
                    ? "bg-white text-black shadow-[0_2px_12px_rgba(0,0,0,0.06)] font-semibold" 
                    : "text-[#444] hover:bg-white/40 hover:text-black"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Dashboard Preview Card */}
          <div className="flex-1 w-full bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-3 md:p-5 animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-gray-100">
              {dashboardImg && (
                <Image 
                  src={dashboardImg.imageUrl}
                  alt={dashboardImg.description}
                  fill
                  className="object-cover"
                  data-ai-hint={dashboardImg.imageHint}
                />
              )}
              {/* Minimalist UI Mock overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Bottom Feature Strip */}
        <div className="mt-12 max-w-[1100px] mx-auto bg-[#0f2f28] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between gap-8 md:gap-4 text-left">
          <div className="flex-1">
            <p className="text-white text-sm font-semibold mb-1">Affiliate Links</p>
            <p className="text-gray-400 text-xs">Generate unique tracking links instantly</p>
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-semibold mb-1">Promo Codes</p>
            <p className="text-gray-400 text-xs">Customized discount codes for creators</p>
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-semibold mb-1">Paid Ads</p>
            <p className="text-gray-400 text-xs">Boost high-performing creator content</p>
          </div>
          <div className="flex-1 border-none md:border-l md:border-white/10 md:pl-8">
            <p className="text-white text-sm font-semibold mb-1">Commission</p>
            <p className="text-gray-400 text-xs">Flexible and automated payout structures</p>
          </div>
        </div>
      </div>
    </section>
  );
};
