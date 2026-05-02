"use client";

import React from 'react';
import { Sparkles, Activity, Palette, Users, ChevronRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const ServiceShowcase: React.FC = () => {
  const dashboardImg = PlaceHolderImages.find(img => img.id === 'dashboard-preview');

  const features = [
    {
      id: 1,
      title: "Work smarter with influencers",
      description: "Promote your products or services by creating strong influencer relationships with ease.",
      icon: Sparkles,
      active: true,
      color: "blue"
    },
    {
      id: 2,
      title: "Monitor your brand and competitors",
      icon: Activity,
      active: false,
      color: "emerald"
    },
    {
      id: 3,
      title: "Create winning content",
      icon: Palette,
      active: false,
      color: "purple"
    },
    {
      id: 4,
      title: "Engage with consumers",
      icon: Users,
      active: false,
      color: "orange"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-[28px] md:text-[40px] font-bold text-[#222] leading-tight mb-4 tracking-tight">
            All Your Influencer and Social Media Needs Covered in One Intuitive Hub
          </h2>
          <p className="text-[#666] text-sm md:text-base">
            Everything you need to scale your creator ecosystem in a single, powerful platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: Feature Cards */}
          <div className="flex flex-col gap-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.id}
                  style={{ animationDelay: `${idx * 100}ms` }}
                  className={cn(
                    "group flex gap-4 p-5 rounded-2xl border transition-all duration-500 cursor-pointer animate-in fade-in slide-in-from-left-4",
                    feature.active 
                      ? "bg-gradient-to-br from-[#f8fbfe] to-[#eef6fb] border-blue-200 shadow-premium" 
                      : "bg-white border-gray-100 hover:border-gray-300 hover:shadow-soft"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110",
                    feature.active ? "bg-blue-500 text-white shadow-lg shadow-blue-200" : "bg-gray-50 text-gray-400 group-hover:bg-gray-100 group-hover:text-gray-600"
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className={cn(
                        "text-[15px] font-bold transition-colors",
                        feature.active ? "text-gray-900" : "text-gray-500 group-hover:text-gray-900"
                      )}>
                        {feature.title}
                      </h4>
                      {feature.active && (
                        <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                      )}
                    </div>
                    {feature.description && (
                      <p className="text-sm text-gray-500 mt-2 leading-relaxed max-w-sm">
                        {feature.description}
                      </p>
                    )}
                  </div>
                  <div className={cn(
                    "flex items-center opacity-0 group-hover:opacity-100 transition-opacity",
                    feature.active ? "text-blue-500" : "text-gray-300"
                  )}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Dashboard Visual */}
          <div className="relative group max-w-[550px] lg:max-w-none mx-auto w-full animate-in fade-in slide-in-from-right-8 duration-1000">
            {/* Main Dashboard Image with modern frame */}
            <div className="relative aspect-[4/3] w-full bg-gray-50 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              {dashboardImg && (
                <Image 
                  src={dashboardImg.imageUrl}
                  alt="Influencer Dashboard"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  data-ai-hint="dashboard screen"
                />
              )}
              {/* Overlay for glass look */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating Card 1: Quality with animation */}
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:left-8 bg-white/95 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-premium border border-white/50 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <Activity className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-black text-gray-900 leading-none">79.80%</p>
                  <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mt-1">Quality Score</p>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Analytics UI with modern details */}
            <div className="absolute -top-6 -right-4 md:top-8 md:right-8 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-premium border border-white/40 animate-in fade-in slide-in-from-top-4 duration-1000 delay-500">
               <div className="space-y-3 w-32 md:w-40">
                  <div className="flex justify-between items-center">
                    <p className="text-[11px] font-bold text-gray-800">Growth Tracking</p>
                    <div className="flex -space-x-2">
                       <div className="w-5 h-5 rounded-full bg-blue-400 border-2 border-white shadow-sm" />
                       <div className="w-5 h-5 rounded-full bg-purple-400 border-2 border-white shadow-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
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
