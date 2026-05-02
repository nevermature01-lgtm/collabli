
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, BarChart3, Globe, Star, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export const BannerSection: React.FC = () => {
  const avatars = [
    { id: 'avatar-1', top: '10%', left: '-5%' },
    { id: 'avatar-2', bottom: '15%', right: '-10%' },
    { id: 'avatar-3', top: '-10%', right: '20%' },
  ];

  return (
    <section className="h-auto md:h-[40vh] min-h-[320px] py-[60px] md:py-0 bg-gradient-to-br from-[#f8fafc] to-[#eef2f7] overflow-hidden flex items-center">
      <div className="container mx-auto px-5 md:px-4 max-w-[1200px] w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* LEFT: VISUAL STACK */}
          <div className="relative w-full max-w-[500px] aspect-[4/3] flex items-center justify-center transform scale-[0.85] md:scale-100 transition-transform duration-500">
            {/* CARD 1: BACKGROUND GLASS CARD */}
            <div className="absolute left-0 top-10 w-[320px] h-[220px] bg-white/60 backdrop-blur-xl rounded-[32px] border border-white/40 shadow-[0_30px_80px_rgba(0,0,0,0.06)] p-6 z-0 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0ab99d]/10 flex items-center justify-center text-[#0ab99d]">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="w-20 h-2 bg-gray-200 rounded-full" />
                  <div className="w-12 h-1.5 bg-gray-100 rounded-full" />
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-2 items-end h-16">
                <div className="bg-gray-100 h-[40%] rounded-t-md" />
                <div className="bg-[#0ab99d]/20 h-[70%] rounded-t-md" />
                <div className="bg-gray-100 h-[55%] rounded-t-md" />
                <div className="bg-[#0ab99d]/40 h-[90%] rounded-t-md" />
              </div>
            </div>

            {/* CARD 2: FOREGROUND CARD */}
            <div className="absolute left-20 top-0 w-[260px] h-[340px] bg-gradient-to-br from-[#ff4d6d] to-[#ff758f] rounded-[32px] shadow-[0_40px_100px_rgba(255,77,109,0.3)] z-10 p-6 flex flex-col justify-between animate-float hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-default group">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                  Live Analytics
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Performance</p>
                  <p className="text-white text-3xl font-bold">+124%</p>
                </div>
                
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-white/80 font-medium">Growth</span>
                    <BarChart3 className="w-3 h-3 text-white/60" />
                  </div>
                  <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[75%] rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-5 h-5 rounded-full border border-[#ff4d6d] bg-white/20 overflow-hidden">
                      <Image 
                        src={`https://picsum.photos/seed/user-${i}/100/100`} 
                        alt="User" 
                        width={20} 
                        height={20} 
                        className="object-cover"
                        data-ai-hint="person face"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-[9px] text-white/80 font-bold uppercase tracking-wider">+42 Creators</span>
              </div>
            </div>

            {/* FLOATING AVATARS */}
            {avatars.map((pos, idx) => {
              const avatarImg = PlaceHolderImages.find(img => img.id === pos.id);
              return (
                <div 
                  key={idx}
                  className="absolute z-20 w-12 h-12 rounded-full border-[3px] border-white shadow-xl overflow-hidden hover:scale-110 transition-transform duration-300 animate-float"
                  style={{ 
                    top: pos.top, 
                    left: pos.left, 
                    right: pos.right, 
                    bottom: pos.bottom,
                    animationDelay: `${idx * 0.5}s`
                  }}
                >
                  <Image 
                    src={avatarImg?.imageUrl || `https://picsum.photos/seed/float-${idx}/100/100`}
                    alt="Influencer"
                    width={48}
                    height={48}
                    className="object-cover"
                    data-ai-hint="indian profile"
                  />
                </div>
              );
            })}
          </div>

          {/* RIGHT: CONTENT */}
          <div className="w-full lg:max-w-[550px] text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0ab99d]/10 text-[#0ab99d] rounded-full text-xs font-bold uppercase tracking-widest border border-[#0ab99d]/20">
                <Star className="w-3 h-3 fill-current" />
                Premier Discovery
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-[#0f172a] leading-[1.1] tracking-tight">
                Find Influencers Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ab99d] to-[#14b8a6]">Brand Will Love</span>
              </h2>
              <p className="text-lg text-[#64748b] leading-relaxed max-w-[500px] mx-auto lg:mx-0">
                Stop guessing and start growing. Our AI-powered discovery engine connects you with the creators who speak your brand's language.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
              <Button className="h-14 px-8 rounded-full bg-[#0ab99d] hover:bg-[#08a68d] text-white font-bold text-base shadow-[0_10px_30px_rgba(10,185,157,0.3)] group transition-all duration-300">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <button className="h-14 px-8 text-[#0f172a] font-bold text-base hover:text-[#0ab99d] transition-colors flex items-center gap-2">
                View Success Stories
              </button>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start pt-6 opacity-60">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#0f172a]">12M+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#64748b]">Followers Reached</span>
              </div>
              <div className="w-px h-8 bg-[#64748b]/20" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#0f172a]">850+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#64748b]">Active Campaigns</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
