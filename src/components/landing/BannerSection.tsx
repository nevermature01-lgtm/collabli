
"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const BannerSection: React.FC = () => {
  return (
    <section className="h-auto md:h-[50vh] min-h-[400px] bg-[#f4e7b5] flex items-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* LEFT: IMAGE SECTION */}
          <div className="relative w-full lg:w-1/2 aspect-[16/10] max-w-[440px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform hover:scale-[1.01] transition-transform duration-500">
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
          <div className="w-full lg:max-w-[480px] text-center lg:text-left lg:pr-[40px]">
            <div className="space-y-3">
              <h2 className="text-[32px] md:text-[38px] font-bold leading-[1.15] tracking-[-0.5px] text-foreground">
                Find Creators Your Brand Will Actually <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ffd84d] to-[#f5c400]">Love</span>
              </h2>
              
              <p className="text-[14px] md:text-[15px] leading-[1.6] text-muted-foreground max-w-[420px] mx-auto lg:mx-0">
                Stop guessing. Our AI matches you with creators who truly align with your brand voice, audience, and goals.
              </p>
            </div>

            {/* BUTTONS WITH BACKDROP GLOW */}
            <div className="relative mt-[24px]">
              {/* Subtle backdrop glow */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] pointer-events-none opacity-40 blur-3xl lg:left-0 lg:translate-x-0" 
                style={{ background: 'radial-gradient(circle at center, hsla(var(--primary), 0.15), transparent 60%)' }} 
              />
              
              <div className="relative flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-0">
                <button className="bg-gradient-to-r from-[#ffd84d] to-[#f5c400] px-4 py-2 rounded-full text-[10px] md:text-xs font-semibold text-black shadow-md hover:scale-110 active:scale-95 transition-all duration-300 flex items-center group">
                  Join now
                  <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
