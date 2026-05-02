"use client";

import React, { useState } from 'react';
import { Sparkles, Activity, Palette, Users, ChevronRight, Globe } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const ServiceShowcase: React.FC = () => {
  const [activeId, setActiveId] = useState(1);
  const dashboardImg = PlaceHolderImages.find(img => img.id === 'dashboard-preview');

  const features = [
    {
      id: 1,
      title: "Work smarter with influencers",
      description: "Build high-impact relationships with verified creators through our AI-matching.",
      icon: Sparkles,
      accent: "bg-blue-600",
      light: "bg-blue-50 text-blue-600",
    },
    {
      id: 2,
      title: "Monitor brand performance",
      description: "Real-time tracking of your campaigns and competitors everywhere.",
      icon: Activity,
      accent: "bg-emerald-600",
      light: "bg-emerald-50 text-emerald-600",
    },
    {
      id: 3,
      title: "Create winning content",
      description: "Leverage data-backed insights to craft content that converts.",
      icon: Palette,
      accent: "bg-purple-600",
      light: "bg-purple-50 text-purple-600",
    },
    {
      id: 4,
      title: "Deep consumer engagement",
      description: "Directly connect with your audience and foster community.",
      icon: Users,
      accent: "bg-orange-600",
      light: "bg-orange-50 text-orange-600",
    }
  ];

  return (
    <section className="py-8 px-4 bg-[#f4e7b5] overflow-hidden">
      <div className="max-w-6xl mx-auto rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_15px_40px_rgba(0,0,0,0.06),0_5px_15px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-500 hover:-translate-y-1 p-4 md:p-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-4 space-y-1 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-[8px] font-bold tracking-[1.5px] uppercase rounded-full">
              The Hub for Excellence
            </span>
            <h2 className="text-lg md:text-xl font-bold text-[#111] leading-tight tracking-tight">
              All-in-one Influencer & Social Media Hub
            </h2>
            <p className="text-[#666] text-[9px] md:text-[10px] max-w-lg mx-auto">
              Scale your creator ecosystem effortlessly with the industry's most intuitive platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            {/* LEFT: Interactive Feature Cards */}
            <div className="flex flex-col gap-1.5 relative">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                const isActive = activeId === feature.id;
                
                return (
                  <div 
                    key={feature.id}
                    onClick={() => setActiveId(feature.id)}
                    style={{ animationDelay: `${idx * 100}ms` }}
                    className={cn(
                      "group flex gap-2.5 p-2 rounded-xl border transition-all duration-500 cursor-pointer animate-in fade-in slide-in-from-left-4",
                      isActive 
                        ? "bg-white border-transparent shadow-[0_8px_16px_rgba(0,0,0,0.04)] ring-1 ring-black/5" 
                        : "bg-transparent border-transparent hover:bg-white/40 hover:border-gray-100"
                    )}
                  >
                    <div className={cn(
                      "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500",
                      isActive 
                        ? `${feature.accent} text-white shadow-md ${feature.accent.replace('bg-', 'shadow-')}/20` 
                        : `${feature.light} group-hover:scale-110`
                    )}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    
                    <div className="flex flex-col justify-center flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className={cn(
                          "text-[11px] font-bold transition-colors duration-300",
                          isActive ? "text-gray-900" : "text-gray-500 group-hover:text-gray-900"
                        )}>
                          {feature.title}
                        </h4>
                        {isActive && (
                          <span className={cn("flex h-1 w-1 rounded-full animate-pulse", feature.accent)} />
                        )}
                      </div>
                      
                      <div className={cn(
                        "grid transition-all duration-500 ease-in-out",
                        isActive ? "grid-rows-[1fr] opacity-100 mt-0.5" : "grid-rows-[0fr] opacity-0"
                      )}>
                        <p className="text-[9px] text-gray-500 leading-snug overflow-hidden">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className={cn(
                      "flex items-center transition-all duration-300",
                      isActive ? "translate-x-0 opacity-100 text-gray-300" : "-translate-x-2 opacity-0"
                    )}>
                      <ChevronRight className="w-2.5 h-2.5" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT: Sophisticated Dashboard Visual */}
            <div className="relative group w-full animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="absolute -inset-2 bg-primary/5 rounded-[1.5rem] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />
              
              <div className="relative aspect-[16/10] w-full bg-white rounded-xl overflow-hidden shadow-[0_15px_30px_-8px_rgba(0,0,0,0.06)] border border-gray-100 z-10">
                {dashboardImg && (
                  <Image 
                    src={dashboardImg.imageUrl}
                    alt="Influencer Dashboard"
                    fill
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                    data-ai-hint="dashboard screen"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
              </div>

              {/* Floating Detail 1: Quality Score */}
              <div className="absolute -bottom-2 -left-2 md:bottom-4 md:-left-4 bg-white/80 backdrop-blur-xl p-2 rounded-lg shadow-[0_12px_24px_rgba(0,0,0,0.06)] border border-white/50 z-20 animate-float">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-md bg-emerald-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/10">
                    <Activity className="w-3 h-3" />
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-black text-gray-900 tracking-tight leading-none">79.80%</p>
                    <p className="text-[7px] text-emerald-600 font-bold tracking-wider uppercase leading-none mt-0.5">Growth</p>
                  </div>
                </div>
              </div>

              {/* Floating Detail 2: Global Reach */}
              <div className="absolute -top-4 -right-1 md:top-4 md:-right-2 bg-white/80 backdrop-blur-xl p-2 rounded-lg shadow-[0_12px_24px_rgba(0,0,0,0.04)] border border-white/50 z-20 animate-in fade-in slide-in-from-top-2 duration-1000 delay-500">
                 <div className="space-y-1.5 w-24 md:w-32">
                    <div className="flex justify-between items-center">
                      <p className="text-[8px] font-bold text-gray-900">Reach</p>
                      <Globe className="w-2.5 h-2.5 text-blue-500" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="w-full h-0.5 bg-gray-100 rounded-full overflow-hidden mr-1.5">
                          <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                        </div>
                        <span className="text-[6px] font-bold text-gray-500">75%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="w-full h-0.5 bg-gray-100 rounded-full overflow-hidden mr-1.5">
                          <div className="w-1/2 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                        </div>
                        <span className="text-[6px] font-bold text-gray-500">50%</span>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
