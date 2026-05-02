"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const BannerSection: React.FC = () => {
  return (
    <section className="h-auto md:h-[50vh] min-h-[450px] bg-[#f4e7b5] flex items-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* LEFT: IMAGE SECTION */}
          <div className="relative w-full lg:w-1/2 aspect-[16/10] max-w-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform hover:scale-[1.01] transition-transform duration-500">
            <Image 
              src="/banner_img.png"
              alt="Premium Influencer Marketplace"
              fill
              className="object-cover"
              data-ai-hint="indian influencer"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
          </div>

          {/* RIGHT: CONTENT SECTION */}
          <div className="w-full lg:max-w-[520px] text-center lg:text-left lg:pr-[80px]">
            <div className="space-y-4">
              <h2 className="text-[40px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.5px] text-[#111111]">
                Find Creators Your Brand Will Actually <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0ab99d] to-[#34d399]">Love</span>
              </h2>
              
              <p className="text-[16px] leading-[1.6] text-[#5f6b7a] max-w-[480px] mx-auto lg:mx-0">
                Stop guessing. Our AI matches you with creators who truly align with your brand voice, audience, and goals.
              </p>
            </div>

            {/* BUTTONS WITH BACKDROP GLOW */}
            <div className="relative mt-[28px]">
              {/* Subtle backdrop glow */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none opacity-50 blur-3xl lg:left-0 lg:translate-x-0" 
                style={{ background: 'radial-gradient(circle at center, rgba(10,185,157,0.15), transparent 60%)' }} 
              />
              
              <div className="relative flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-0">
                <button className="px-7 py-3.5 rounded-full bg-gradient-to-br from-[#0ab99d] to-[#059669] text-white font-semibold text-[15px] shadow-[0_10px_30px_rgba(10,185,157,0.35)] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_14px_40px_rgba(10,185,157,0.45)] transition-all duration-300 flex items-center group">
                  Start Matching Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="mt-4 sm:mt-0 sm:ml-[24px] text-[#0ab99d] font-medium text-[15px] relative group py-1 transition-colors hover:text-[#059669]">
                  View Success Stories
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0ab99d] transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            </div>

            {/* MINIMAL STATS (OPTIONAL POLISH) */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-8 opacity-40">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-[2px] text-[#111111]">12M+ Impact</span>
              </div>
              <div className="w-[4px] h-[4px] rounded-full bg-gray-400" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-[2px] text-[#111111]">850+ Brands</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
