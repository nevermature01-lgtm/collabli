"use client";

import React, { useState } from 'react';
import { Sparkles, Activity, Palette, Users, ChevronRight, BarChart3, Globe, Heart } from 'lucide-react';
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
      description: "Build high-impact relationships with verified creators through our AI-driven matching engine.",
      icon: Sparkles,
      color: "blue",
      accent: "bg-blue-500",
      light: "bg-blue-50 text-blue-500",
      border: "border-blue-200"
    },
    {
      id: 2,
      title: "Monitor brand performance",
      description: "Real-time tracking of your campaigns and competitors across all major social platforms.",
      icon: Activity,
      color: "emerald",
      accent: "bg-emerald-500",
      light: "bg-emerald-50 text-emerald-500",
      border: "border-emerald-200"
    },
    {
      id: 3,
      title: "Create winning content",
      description: "Leverage data-backed insights to craft content that resonates and converts.",
      icon: Palette,
      color: "purple",
      accent: "bg-purple-500",
      light: "bg-purple-50 text-purple-500",
      border: "border-purple-200"
    },
    {
      id: 4,
      title: "Deep consumer engagement",
      description: "Directly connect with your audience and foster community through shared stories.",
      icon: Users,
      color: "orange",
      accent: "bg-orange-500",
      light: "bg-orange-50 text-orange-500",
      border: "border-orange-200"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-[#f9fafb] overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-bold tracking-[2px] uppercase rounded-full">
            The Hub for Excellence
          </span>
          <h2 className="text-[28px] md:text-[40px] font-bold text-[#111] leading-tight tracking-tight">
            All Your Influencer and Social Media Needs Covered in One Hub
          </h2>
          <p className="text-[#666] text-sm md:text-base max-w-2xl mx-auto">
            Scale your creator ecosystem effortlessly with the industry's most intuitive and powerful platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* LEFT: Interactive Feature Cards */}
          <div className="flex flex-col gap-4 relative">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              const isActive = activeId === feature.id;
              
              return (
                <div 
                  key={feature.id}
                  onClick={() => setActiveId(feature.id)}
                  style={{ animationDelay: `${idx * 100}ms` }}
                  className={cn(
                    "group flex gap-5 p-6 rounded-2xl border transition-all duration-500 cursor-pointer animate-in fade-in slide-in-from-left-4",
                    isActive 
                      ? "bg-white border-transparent shadow-[0_20px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5" 
                      : "bg-transparent border-transparent hover:bg-white/50 hover:border-gray-200"
                  )}
                >
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500",
                    isActive 
                      ? `${feature.accent} text-white shadow-lg ${feature.accent.replace('bg-', 'shadow-')}/20 scale-110` 
                      : `${feature.light} group-hover:scale-110`
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex flex-col justify-center flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className={cn(
                        "text-[16px] font-bold transition-colors duration-300",
                        isActive ? "text-gray-900" : "text-gray-500 group-hover:text-gray-900"
                      )}>
                        {feature.title}
                      </h4>
                      {isActive && (
                        <span className={cn("flex h-2 w-2 rounded-full animate-pulse", feature.accent)} />
                      )}
                    </div>
                    
                    <div className={cn(
                      "grid transition-all duration-500 ease-in-out",
                      isActive ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                    )}>
                      <p className="text-sm text-gray-500 leading-relaxed overflow-hidden">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className={cn(
                    "flex items-center transition-all duration-300",
                    isActive ? "translate-x-0 opacity-100 text-gray-400" : "-translate-x-2 opacity-0"
                  )}>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Sophisticated Dashboard Visual */}
          <div className="relative group w-full animate-in fade-in slide-in-from-right-8 duration-1000">
            {/* Dashboard Shadow Layer */}
            <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
            
            {/* Main Image Frame */}
            <div className="relative aspect-[4/3] w-full bg-white rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] border border-gray-100 z-10">
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

            {/* Floating Detail 1: Quality Score (Modern Glass) */}
            <div className="absolute -bottom-10 -left-6 md:bottom-12 md:-left-12 bg-white/80 backdrop-blur-xl p-5 md:p-6 rounded-3xl shadow-[0_24px_48px_rgba(0,0,0,0.12)] border border-white/50 z-20 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <Activity className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">79.80%</p>
                  <p className="text-[10px] text-emerald-600 font-bold tracking-widest uppercase">Growth Rate</p>
                </div>
              </div>
            </div>

            {/* Floating Detail 2: Global Reach (Modern Minimal) */}
            <div className="absolute -top-12 -right-4 md:top-12 md:-right-8 bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.08)] border border-white/50 z-20 animate-in fade-in slide-in-from-top-4 duration-1000 delay-500">
               <div className="space-y-4 w-40 md:w-48">
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-bold text-gray-900">Campaign Reach</p>
                    <Globe className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mr-4">
                        <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-500">75%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mr-4">
                        <div className="w-1/2 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-500">50%</span>
                    </div>
                  </div>
                  <div className="pt-2 flex justify-between">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-primary">+12k more</span>
                  </div>
               </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
