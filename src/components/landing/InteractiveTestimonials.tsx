
"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Quote, ChevronUp, ChevronDown, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatarId: string;
  previewImageId: string;
  stat: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "This platform completely changed how we collaborate with influencers. The AI matching is scary accurate and saved us weeks of manual search.",
    name: "Riya Sharma",
    role: "Brand Manager @ Nykaa",
    avatarId: "avatar-1",
    previewImageId: "creator-1",
    stat: "2.4x ROI"
  },
  {
    id: 2,
    quote: "Finally a tool that understands the creator economy. We've scaled our program to 100+ creators in just a few months with zero friction.",
    name: "Arjun Mehta",
    role: "Growth Head @ Boat",
    avatarId: "avatar-2",
    previewImageId: "creator-2",
    stat: "15M+ Reach"
  },
  {
    id: 3,
    quote: "The interface is beautiful and the data insights are exactly what we needed to justify our performance marketing budget this year.",
    name: "Neha Verma",
    role: "Creative Director @ StyleVibe",
    avatarId: "avatar-3",
    previewImageId: "creator-3",
    stat: "85% Growth"
  },
  {
    id: 4,
    quote: "The campaign management features are top-notch. It has significantly streamlined our entire influencer marketing workflow.",
    name: "Karan Singh",
    role: "Marketing Lead @ Zomato",
    avatarId: "avatar-4",
    previewImageId: "creator-4",
    stat: "5k+ Conversions"
  },
  {
    id: 5,
    quote: "We found our best-performing influencers through this tool. The ROI has been incredible and the process is seamless.",
    name: "Pooja Patel",
    role: "Digital Strategist @ Myntra",
    avatarId: "avatar-5",
    previewImageId: "creator-5",
    stat: "120% Sales Lift"
  },
  {
    id: 6,
    quote: "Integrating our workflow with this platform was effortless. A must-have for global brands looking to scale.",
    name: "Vikram Rao",
    role: "Head of Partnerships @ Samsung",
    avatarId: "avatar-6",
    previewImageId: "creator-6",
    stat: "30% Cost Cut"
  },
  {
    id: 7,
    quote: "The content review process is so much faster now. Our team loves the UI and the efficiency it brings to our program.",
    name: "Simran Kaur",
    role: "Social Media Manager @ Nike",
    avatarId: "avatar-7",
    previewImageId: "creator-7",
    stat: "10k+ Saved Hours"
  },
  {
    id: 8,
    quote: "Data-driven decisions are finally possible with the deep analytics provided here. It's the standard for modern marketing.",
    name: "Rahul Gupta",
    role: "Brand Head @ Tata",
    avatarId: "avatar-8",
    previewImageId: "creator-8",
    stat: "4.2x Engagement"
  },
  {
    id: 9,
    quote: "A premium experience from start to finish. The data accuracy is unmatched and the support team is also fantastic.",
    name: "Ananya Iyer",
    role: "PR Manager @ Adobe",
    avatarId: "avatar-9",
    previewImageId: "creator-9",
    stat: "95% CSAT"
  },
  {
    id: 10,
    quote: "As a startup, scaling our reach was hard until we found this. Perfect for growth-oriented teams wanting fast results.",
    name: "Sameer Khan",
    role: "Founder @ TechStart",
    avatarId: "avatar-10",
    previewImageId: "creator-10",
    stat: "200k+ New Users"
  }
];

export const InteractiveTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(nextSlide, 4000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [nextSlide, isPaused]);

  const activeTestimonial = testimonials[currentIndex];
  const activePreview = PlaceHolderImages.find(img => img.id === activeTestimonial.previewImageId);

  return (
    <section 
      className="h-screen flex items-center bg-[#F7FBFB] overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          
          {/* LEFT COLUMN: VERTICAL STACKED CAROUSEL */}
          <div className="w-full lg:w-[55%] relative flex flex-col items-center lg:items-start">
            <div className="mb-4 text-center lg:text-left z-20">
              <span className="inline-block px-2 py-0.5 bg-[#0ab99d]/10 text-[#0ab99d] text-[9px] md:text-[10px] font-bold tracking-[1.5px] uppercase rounded-full mb-2">
                Success Stories
              </span>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                Trusted by the world's <br className="hidden md:block" /> most innovative brands
              </h2>
            </div>

            <div className="relative w-full h-[240px] md:h-[280px] flex items-center justify-center lg:justify-start" style={{ perspective: '1200px' }}>
              {testimonials.map((testimonial, index) => {
                const total = testimonials.length;
                let position = index - currentIndex;
                
                // Adjust position for circular behavior
                if (position < -1) position += total;
                if (position > 1) position -= total;

                // Handle wrapping for the very end/start
                if (currentIndex === 0 && index === total - 1) position = -1;
                if (currentIndex === total - 1 && index === 0) position = 1;

                const isVisible = position === 0 || position === 1 || position === -1;
                
                let transform = '';
                let opacity = 0;
                let zIndex = 0;
                let filter = 'blur(0px)';

                if (position === 0) {
                  transform = 'translateY(0) scale(1) rotateX(0deg)';
                  opacity = 1;
                  zIndex = 10;
                } else if (position === -1) {
                  transform = 'translateY(-65%) scale(0.88) rotateX(6deg)';
                  opacity = 0.4;
                  zIndex = 5;
                  filter = 'blur(1px)';
                } else if (position === 1) {
                  transform = 'translateY(65%) scale(0.88) rotateX(-6deg)';
                  opacity = 0.4;
                  zIndex = 5;
                  filter = 'blur(1px)';
                } else {
                  transform = position > 1 ? 'translateY(100%) scale(0.7)' : 'translateY(-100%) scale(0.7)';
                  opacity = 0;
                  zIndex = 0;
                }

                return (
                  <div
                    key={testimonial.id}
                    className={cn(
                      "absolute w-full max-w-[280px] md:max-w-[320px] rounded-[14px] p-3 md:p-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      "bg-white/65 backdrop-blur-[14px] border border-black/5 shadow-[0_15px_50px_rgba(0,0,0,0.08)]",
                      !isVisible && "pointer-events-none"
                    )}
                    style={{
                      transform,
                      opacity,
                      zIndex,
                      filter,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="text-[#0ab99d]/20 mb-1">
                        <Quote className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                      </div>
                      
                      <p className="text-[11px] md:text-[12px] font-medium text-gray-800 leading-relaxed mb-3 line-clamp-3">
                        "{testimonial.quote}"
                      </p>

                      <div className="mt-auto flex items-center gap-2">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden border-2 border-[#0ab99d]/20 bg-gray-100 shrink-0">
                          {PlaceHolderImages.find(img => img.id === testimonial.avatarId) && (
                            <Image 
                              src={PlaceHolderImages.find(img => img.id === testimonial.avatarId)!.imageUrl} 
                              alt={testimonial.name}
                              width={32}
                              height={32}
                              className="object-cover w-full h-full"
                            />
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-[9px] md:text-[10px]">{testimonial.name}</p>
                          <p className="text-[8px] md:text-[9px] text-gray-500 font-medium">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* VERTICAL ARROW NAVIGATION */}
              <div className="absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30">
                <button 
                  onClick={prevSlide}
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/40 backdrop-blur-md border border-white/50 flex items-center justify-center text-gray-600 hover:text-[#0ab99d] hover:scale-110 hover:shadow-[0_0_15px_rgba(10,185,157,0.15)] transition-all duration-300 pointer-events-auto"
                  aria-label="Previous Testimonial"
                >
                  <ChevronUp className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/40 backdrop-blur-md border border-white/50 flex items-center justify-center text-gray-600 hover:text-[#0ab99d] hover:scale-110 hover:shadow-[0_0_15px_rgba(10,185,157,0.15)] transition-all duration-300 pointer-events-auto"
                  aria-label="Next Testimonial"
                >
                  <ChevronDown className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </button>
              </div>
            </div>

            {/* DOT INDICATORS */}
            <div className="flex gap-1.5 mt-4 lg:mt-6 justify-center lg:justify-start w-full max-w-[280px]">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={cn(
                    "h-0.5 rounded-full transition-all duration-500",
                    idx === currentIndex ? "w-4 bg-[#0ab99d]" : "w-1 bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: PREVIEW IMAGE */}
          <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[220px] md:max-w-[280px] aspect-[4/5] animate-in fade-in zoom-in duration-1000">
              {/* Main Preview Image */}
              <div className="absolute inset-0 rounded-[16px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.1)] border-[3px] border-white group">
                {activePreview && (
                  <Image 
                    key={activePreview.id}
                    src={activePreview.imageUrl}
                    alt={activePreview.description}
                    fill
                    className="object-cover transition-all duration-1000 group-hover:scale-105"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50" />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-2 -left-2 md:-left-4 bg-white/80 backdrop-blur-md p-2 md:p-2.5 rounded-lg shadow-lg border border-white/50 animate-float">
                <div className="flex items-center gap-1 mb-0.5">
                  <div className="w-1 h-1 rounded-full bg-[#0ab99d] animate-pulse" />
                  <p className="text-[6px] md:text-[7px] font-bold text-gray-400 tracking-wider uppercase">Performance</p>
                </div>
                <p className="text-sm md:text-base font-black text-gray-900">{activeTestimonial.stat}</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-1.5 md:w-2 h-1.5 md:h-2 fill-[#0ab99d] text-[#0ab99d]" />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
