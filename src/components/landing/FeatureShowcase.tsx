
"use client";

import React, { useState } from 'react';
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

  const creators = [
    {
      name: "Riya Sharma",
      category: "Lifestyle • Fitness • Travel",
      price: "₹2,500",
      rating: "4.9",
      image: "https://picsum.photos/seed/riya/240/260"
    },
    {
      name: "Arjun Mehta",
      category: "Tech • Gaming • Business",
      price: "₹4,500",
      rating: "4.8",
      image: "https://picsum.photos/seed/arjun/240/260"
    },
    {
      name: "Neha Verma",
      category: "Fashion • Beauty • Travel",
      price: "₹3,200",
      rating: "4.9",
      image: "https://picsum.photos/seed/neha/240/260"
    },
    {
      name: "Karan Singh",
      category: "Food • Travel • Lifestyle",
      price: "₹2,800",
      rating: "4.7",
      image: "https://picsum.photos/seed/karan/240/260"
    }
  ];

  return (
    <section className="bg-[#f5f2eb] py-16 md:py-24 px-4 text-center overflow-hidden">
      <div className="container mx-auto w-full">
        <h2 className="text-[32px] md:text-[42px] font-semibold text-[#222] leading-tight max-w-2xl mx-auto">
          The all-in-one creator platform
        </h2>
        <p className="text-sm md:text-base text-[#777] mt-[10px] max-w-xl mx-auto">
          Everything your creator program needs, from first search to final report.
        </p>

        {/* Tabs Bar - Horizontal */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex bg-[#e9e4da] rounded-full p-1.5 gap-1 md:gap-2 flex-wrap justify-center shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 md:px-6 py-2.5 rounded-full text-[13px] md:text-[14px] transition-all duration-300",
                  activeTab === tab 
                    ? "bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.08)] font-semibold" 
                    : "text-[#444] hover:bg-white/40 hover:text-black"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Creator Cards Marketplace Section */}
        <div className="mt-8 max-w-[1100px] mx-auto overflow-hidden animate-in fade-in zoom-in duration-700 py-4">
          <div className="flex gap-5 overflow-hidden justify-center flex-wrap md:flex-nowrap">
            {creators.map((creator, i) => (
              <div 
                key={i} 
                className="w-[240px] shrink-0 rounded-xl overflow-hidden bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative">
                  <Image 
                    src={creator.image} 
                    alt={creator.name} 
                    width={240} 
                    height={260} 
                    className="h-[260px] w-full object-cover" 
                    data-ai-hint="portrait person"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    <span className="bg-black/70 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-sm">
                      Top Creator
                    </span>
                    <span className="bg-green-500 text-white text-[10px] px-2 py-1 rounded-full">
                      Fast
                    </span>
                  </div>
                </div>
                <div className="p-3 text-left">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-900">{creator.name}</p>
                    <p className="text-sm font-bold text-gray-900">{creator.price}</p>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    {creator.category}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-amber-500 mt-1 font-medium">
                    ⭐ {creator.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
