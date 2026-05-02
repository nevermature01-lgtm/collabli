"use client";

import React from 'react';
import { Bot, BarChart3, PenTool, MessageCircle, Instagram, Facebook } from 'lucide-react';
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
    <section className="min-h-screen flex flex-col justify-center py-10 px-4 bg-white overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-[32px] md:text-[36px] font-semibold text-center max-w-4xl mx-auto mb-10 text-[#222] leading-tight">
          All Your Influencer and Social Media Needs Covered in One Intuitive Hub
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Feature Cards */}
          <div className="flex flex-col gap-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.id}
                  className={cn(
                    "flex gap-4 p-5 rounded-2xl border transition-all duration-300 cursor-default",
                    feature.active 
                      ? "bg-[#eef6fb] border-blue-200 shadow-sm" 
                      : "bg-[#f6f6f6] border-transparent hover:bg-gray-100"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center shrink-0",
                    feature.active ? "bg-[#dff3ff] text-blue-500" : "bg-white text-gray-400"
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className={cn(
                      "text-[16px] font-semibold",
                      feature.active ? "text-gray-900" : "text-gray-600"
                    )}>
                      {feature.title}
                    </h4>
                    {feature.description && (
                      <p className="text-sm text-gray-500 mt-2 leading-relaxed max-w-sm">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Dashboard Visual */}
          <div className="relative group">
            {/* Main Dashboard Image */}
            <div className="relative aspect-[4/3] w-full bg-[#f9f9f9] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
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
            <div className="absolute -bottom-6 -left-6 md:bottom-10 md:left-10 bg-white p-4 md:p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] border border-gray-50 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div>
                  <p className="text-lg md:text-xl font-bold text-gray-900">79.80%</p>
                  <p className="text-[10px] md:text-xs text-gray-400 font-bold tracking-wider uppercase">Quality Score</p>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Analytics UI */}
            <div className="absolute -top-6 -right-4 md:top-12 md:right-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/40 animate-in fade-in slide-in-from-top-8 duration-1000 delay-500">
               <div className="space-y-3">
                  <div className="flex justify-between items-center gap-8">
                    <p className="text-xs font-bold text-gray-600">Analytics</p>
                    <div className="flex -space-x-2">
                       <div className="w-5 h-5 rounded-full bg-blue-100 border border-white" />
                       <div className="w-5 h-5 rounded-full bg-blue-200 border border-white" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-1 bg-blue-500 rounded-full" />
                    <div className="w-12 h-1 bg-gray-100 rounded-full" />
                  </div>
               </div>
            </div>

            {/* Floating Social Icons */}
            <div className="absolute top-1/2 -right-8 bg-white p-3 rounded-full shadow-lg border border-gray-50 text-pink-500 animate-bounce duration-[3000ms]">
              <Instagram className="w-5 h-5" />
            </div>
            <div className="absolute bottom-1/4 -right-2 bg-white p-3 rounded-full shadow-lg border border-gray-50 text-blue-600 animate-bounce duration-[4000ms]">
              <Facebook className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
