
"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Star, ArrowRight } from 'lucide-react';

export const BannerSection: React.FC = () => {
  return (
    <section className="h-auto md:h-[40vh] min-h-[320px] py-[60px] md:py-0 bg-[#f4e7b5] overflow-hidden flex items-center">
      <div className="container mx-auto px-5 md:px-4 max-w-[1200px] w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* LEFT: IMAGE */}
          <div className="relative w-full lg:w-1/2 max-w-[500px] aspect-[16/10] rounded-[32px] overflow-hidden shadow-premium transform hover:scale-[1.02] transition-transform duration-500">
            <Image 
              src="/banner_img.png"
              alt="Premium Influencer Marketplace"
              fill
              className="object-cover"
              data-ai-hint="indian influencer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
