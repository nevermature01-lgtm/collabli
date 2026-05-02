"use client";

import React from 'react';
import { Bot, BarChart3, PenTool, MessageCircle } from 'lucide-react';
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
      icon: Bot,
      active: true,
    },
    {
      id: 2,
      title: "Monitor your brand and competitors",
      icon: BarChart3,
      active: false,
    },
    {
      id: 3,
      title: "Create winning content",
      icon: PenTool,
      active: false,
    },
    {
      id: 4,
      title: "Engage with consumers",
      icon: MessageCircle,
      active: false,
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-[24px] md:text-[28px] font-semibold text-center max-w-3xl mx-auto mb-10 text-[#222] leading-tight">
          All Your Influencer and Social Media Needs Covered in One Intuitive Hub
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: Feature Cards */}
          <div className="flex flex-col gap-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.id}
                  className={cn(
                    "flex gap-3 p-4 rounded-xl border transition-all duration-300 cursor-default",
                    feature.active 
                      ? "bg-[#eef6fb] border-blue-200 shadow-sm" 
                      : "bg-[#f6f6f6] border-transparent hover:bg-gray-100"
                  )}
                >
                  <div className={cn(
                    "w-9 h-9 rounded-lg flex items-center justify-center shrink-0",
                    feature.active ? "bg-[#dff3ff] text-blue-500" : "bg-white text-gray-400"
                  )}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className={cn(
                      "text-[14px] font-semibold",
                      feature.active ? "text-gray-900" : "text-gray-600"
                    )}>
                      {feature.title}
                    </h4>
                    {feature.description && (
                      <p className="text-xs text-gray-500 mt-1.5 leading-relaxed max-w-sm">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Dashboard Visual */}
          <div className="relative group max-w-[500px] lg:max-w-none mx-auto w-full">
            {/* Main Dashboard Image */}
            <div className="relative aspect-[4/3] w-full bg-[#f9f9f9] rounded-xl overflow-hidden shadow-xl border border-gray-100">
              {dashboardImg && (
                <Image 
                  src={dashboardImg.imageUrl}
                  alt="Influencer Dashboard"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint="dashboard screen"
                />
              )}
            </div>

            {/* Floating Card 1: Quality */}
            <div className="absolute -bottom-4 -left-4 md:bottom-8 md:left-8 bg-white p-3 md:p-4 rounded-xl shadow-lg border border-gray-50 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div>
                  <p className="text-base md:text-lg font-bold text-gray-900">79.80%</p>
                  <p className="text-[8px] md:text-[9px] text-gray-400 font-bold tracking-wider uppercase">Quality Score</p>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Analytics UI */}
            <div className="absolute -top-4 -right-2 md:top-8 md:right-8 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/40 animate-in fade-in slide-in-from-top-8 duration-1000 delay-500">
               <div className="space-y-2">
                  <div className="flex justify-between items-center gap-6">
                    <p className="text-[10px] font-bold text-gray-600">Analytics</p>
                    <div className="flex -space-x-1.5">
                       <div className="w-4 h-4 rounded-full bg-blue-100 border border-white" />
                       <div className="w-4 h-4 rounded-full bg-blue-200 border border-white" />
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-6 h-1 bg-blue-500 rounded-full" />
                    <div className="w-10 h-1 bg-gray-100 rounded-full" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
