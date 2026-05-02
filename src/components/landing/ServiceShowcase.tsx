"use client";

import React, { useState } from 'react';
import { Zap, BarChart3, PenTool, MessageCircle, ChevronRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const ServiceShowcase: React.FC = () => {
  const [activeId, setActiveId] = useState(1);

  const features = [
    {
      id: 1,
      title: "Work smarter with influencers",
      description: "Build high-impact relationships with verified creators through our AI-matching.",
      icon: Zap,
      accent: "bg-blue-600",
      light: "bg-blue-50 text-blue-600",
      imageId: "service-influencers"
    },
    {
      id: 2,
      title: "Monitor brand performance",
      description: "Real-time tracking of your campaigns and competitors everywhere.",
      icon: BarChart3,
      accent: "bg-emerald-600",
      light: "bg-emerald-50 text-emerald-600",
      imageId: "service-monitor"
    },
    {
      id: 3,
      title: "Create winning content",
      description: "Leverage data-backed insights to craft content that converts.",
      icon: PenTool,
      accent: "bg-purple-600",
      light: "bg-purple-50 text-purple-600",
      imageId: "service-content"
    },
    {
      id: 4,
      title: "Deep consumer engagement",
      description: "Directly connect with your audience and foster community.",
      icon: MessageCircle,
      accent: "bg-orange-600",
      light: "bg-orange-50 text-orange-600",
      imageId: "service-engagement"
    }
  ];

  const activeFeature = features.find(f => f.id === activeId);
  const activeImg = PlaceHolderImages.find(img => img.id === activeFeature?.imageId);

  return (
    <section className="py-8 px-4 bg-[#f4e7b5] overflow-hidden">
      <div className="max-w-6xl mx-auto rounded-3xl bg-white/30 backdrop-blur-2xl border border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-500 hover:-translate-y-1 p-4 md:p-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-4 space-y-1 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="inline-block px-2 py-0.5 bg-black/10 text-black/60 text-[8px] font-bold tracking-[1.5px] uppercase rounded-full">
              The Hub for Excellence
            </span>
            <h2 className="text-lg md:text-xl font-bold text-[#111] leading-tight tracking-tight">
              All-in-one Influencer & Social Media Hub
            </h2>
            <p className="text-[#111]/60 text-[9px] md:text-[10px] max-w-lg mx-auto">
              Scale your creator ecosystem effortlessly with the industry's most intuitive platform.
            </p>
          </div>

          {/* Using grid-cols-12 for better control: 4 for tabs (33%), 8 for image (66%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-center">
            <div className="flex flex-col gap-1.5 relative lg:col-span-4">
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
                        ? "bg-white/80 border-white/40 shadow-lg ring-1 ring-black/5" 
                        : "bg-white/10 border-white/10 hover:bg-white/40 hover:border-white/30"
                    )}
                  >
                    <div className={cn(
                      "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500",
                      isActive 
                        ? `${feature.accent} text-white shadow-md ${feature.accent.replace('bg-', 'shadow-')}/20` 
                        : `${feature.light} bg-white/60 group-hover:scale-110`
                    )}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    
                    <div className="flex flex-col justify-center flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className={cn(
                          "text-[11px] font-bold transition-colors duration-300",
                          isActive ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"
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

            <div className="relative group w-full lg:col-span-8">
              <div className="absolute -inset-2 bg-white/20 rounded-[1.5rem] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />
              
              <div className="relative aspect-[16/10] w-full bg-white/40 rounded-xl overflow-hidden shadow-[0_15px_30px_-8px_rgba(0,0,0,0.1)] border border-white/40 z-10 backdrop-blur-md">
                {activeImg && (
                  <Image 
                    key={activeImg.id} 
                    src={activeImg.imageUrl}
                    alt={activeImg.description}
                    fill
                    className="object-cover transition-all duration-700 animate-in fade-in zoom-in-95"
                    data-ai-hint={activeImg.imageHint}
                    priority={activeId === 1}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};