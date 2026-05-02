"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
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
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [nextSlide, isPaused]);

  const activeTestimonial = testimonials[currentIndex];
  const activePreview = PlaceHolderImages.find(img => img.id === activeTestimonial.previewImageId);

  return (
    <section 
      className="min-h-screen lg:h-screen flex items-center bg-[#F7FBFB] overflow-hidden py-16 lg:py-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: TESTIMONIAL CARDS */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] flex flex-col justify-center">
            <div className="mb-10 text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] md:text-xs font-bold tracking-[2px] uppercase rounded-full mb-4">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Trusted by the world's <br className="hidden md:block" /> most innovative brands
              </h2>
            </div>

            <div className="relative w-full max-w-[420px] mx-auto lg:mx-0">
              {/* Stack Effect with Mapping */}
              <div className="relative h-[300px]">
                {testimonials.map((testimonial, index) => {
                  const isActive = index === currentIndex;
                  const isNext = index === (currentIndex + 1) % testimonials.length;
                  
                  return (
                    <div
                      key={testimonial.id}
                      className={cn(
                        "absolute inset-0 w-full rounded-[24px] p-8 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
                        "bg-white/60 backdrop-blur-[12px] border border-white/50 shadow-[0_20px_60px_rgba(0,0,0,0.06)]",
                        isActive ? "z-30 opacity-100 scale-100 translate-y-0" : 
                        isNext ? "z-10 opacity-40 scale-90 translate-y-12 blur-[2px]" : 
                        "z-0 opacity-0 scale-75 translate-y-20 pointer-events-none"
                      )}
                    >
                      <div className="flex flex-col h-full">
                        <div className="text-primary/20 mb-6">
                          <Quote className="w-10 h-10 fill-current" />
                        </div>
                        
                        <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed mb-8 line-clamp-3">
                          "{testimonial.quote}"
                        </p>

                        <div className="mt-auto flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-gray-100 shrink-0">
                            {PlaceHolderImages.find(img => img.id === testimonial.avatarId) && (
                              <Image 
                                src={PlaceHolderImages.find(img => img.id === testimonial.avatarId)!.imageUrl} 
                                alt={testimonial.name}
                                width={48}
                                height={48}
                                className="object-cover w-full h-full"
                              />
                            )}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                            <p className="text-xs text-gray-500 font-medium">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center lg:justify-start gap-6 mt-16 lg:mt-24">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary hover:bg-white hover:shadow-lg transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {/* Dots */}
                <div className="flex gap-2.5">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={cn(
                        "h-2 rounded-full transition-all duration-500",
                        idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
                      )}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary hover:bg-white hover:shadow-lg transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PREVIEW IMAGE */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] aspect-[4/5] animate-in fade-in zoom-in duration-1000">
              {/* Main Preview Image */}
              <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] border-[8px] border-white group">
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
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 animate-float">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Performance</p>
                </div>
                <p className="text-2xl font-black text-gray-900">{activeTestimonial.stat}</p>
                <div className="flex gap-0.5 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};