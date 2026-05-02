
"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

export const FeatureShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Instagram');
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const tabs = [
    'Instagram',
    'Youtube',
    'Facebook',
    'Twitter'
  ];

  const creators = [
    {
      name: "Riya Sharma",
      category: "Lifestyle • Fitness • Travel",
      price: "₹2,500",
      image: "https://picsum.photos/seed/riya/240/260",
      isTop: true
    },
    {
      name: "Arjun Mehta",
      category: "Tech • Gaming • Business",
      price: "₹4,500",
      image: "https://picsum.photos/seed/arjun/240/260",
      isTop: false
    },
    {
      name: "Neha Verma",
      category: "Fashion • Beauty • Travel",
      price: "₹3,200",
      image: "https://picsum.photos/seed/neha/240/260",
      isTop: true
    },
    {
      name: "Karan Singh",
      category: "Food • Travel • Lifestyle",
      price: "₹2,800",
      image: "https://picsum.photos/seed/karan/240/260",
      isTop: false
    },
    {
      name: "Pooja Patel",
      category: "Lifestyle • Beauty",
      price: "₹3,000",
      image: "https://picsum.photos/seed/pooja/240/260",
      isTop: true
    },
    {
      name: "Vikram Rao",
      category: "Tech • Business",
      price: "₹5,000",
      image: "https://picsum.photos/seed/vikram/240/260",
      isTop: true
    },
    {
      name: "Simran Kaur",
      category: "Fashion • Fitness",
      price: "₹3,500",
      image: "https://picsum.photos/seed/simran/240/260",
      isTop: false
    },
    {
      name: "Rahul Gupta",
      category: "Food • Travel",
      price: "₹2,600",
      image: "https://picsum.photos/seed/rahul/240/260",
      isTop: false
    },
    {
      name: "Ananya Iyer",
      category: "Art • Photography",
      price: "₹4,000",
      image: "https://picsum.photos/seed/ananya/240/260",
      isTop: true
    },
    {
      name: "Sameer Khan",
      category: "Gaming • Entertainment",
      price: "₹3,800",
      image: "https://picsum.photos/seed/sameer/240/260",
      isTop: false
    }
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-[#f5f2eb] py-8 md:py-12 px-4 text-center overflow-hidden">
      <div className="container mx-auto w-full">
        <h2 className="text-[32px] md:text-[42px] font-semibold text-[#222] leading-tight max-w-2xl mx-auto">
          The all-in-one creator platform
        </h2>
        <p className="text-sm md:text-base text-[#777] mt-1 max-w-xl mx-auto">
          Everything your creator program needs, from first search to final report.
        </p>

        <div className="mt-4 flex justify-center">
          <div className="inline-flex bg-[#e9e4da] rounded-full p-1.5 gap-1 md:gap-2 flex-wrap justify-center shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 md:px-6 py-2.5 rounded-full text-[13px] md:text-[14px] transition-all duration-300",
                  activeTab === tab 
                    ? "bg-white text-black shadow-[0_2px_12px_rgba(0,0,0,0.06)] font-semibold" 
                    : "text-[#444] hover:bg-white/40 hover:text-black"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 w-full relative">
          <div 
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={cn(
              "overflow-x-auto no-scrollbar py-6 px-4 md:px-20 cursor-grab active:cursor-grabbing select-none",
              isDragging && "cursor-grabbing"
            )}
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div className="flex gap-8 w-max overflow-visible" style={{ perspective: '1200px' }}>
              {creators.map((creator, i) => (
                <div key={i} className="scroll-snap-align-start shrink-0">
                  <CreatorCard creator={creator} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CreatorCard = ({ creator }: { creator: any }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const degX = (y - centerY) / 12;
    const degY = (centerX - x) / 12;
    
    setRotate({ x: degX, y: degY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="shrink-0 transition-transform duration-300 ease-out transform-gpu"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) ${isHovering ? 'translateY(-15px)' : ''}`,
        transformStyle: 'preserve-3d',
      }}
    >
      <div 
        className={cn(
          "group relative w-[260px] rounded-2xl bg-white/75 backdrop-blur-xl border border-white/50 shadow-[0_20px_60px_rgba(0,0,0,0.08),0_8px_20px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-300 cursor-pointer overflow-visible",
          isHovering && "shadow-[0_40px_100px_rgba(0,0,0,0.15),0_20px_40px_rgba(0,0,0,0.08)]"
        )}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div 
          className={cn(
            "absolute inset-0 rounded-2xl pointer-events-none z-30 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-white/40 via-transparent to-transparent",
            isHovering && "opacity-100"
          )} 
          style={{ transform: 'translateZ(60px)' }}
        />
        
        <div className="relative overflow-hidden rounded-t-2xl" style={{ transform: 'translateZ(30px)' }}>
          <Image 
            src={creator.image} 
            alt={creator.name} 
            width={260} 
            height={280} 
            className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none" 
            data-ai-hint="portrait person"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2" style={{ transform: 'translateZ(45px)' }}>
            {creator.isTop && (
              <span className="inline-flex items-center gap-1.5 bg-black/90 text-amber-400 text-[10px] font-bold tracking-wider uppercase px-2.5 h-[24px] rounded-md backdrop-blur-md border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z"/>
                </svg>
                Top Creator
              </span>
            )}
            <span className="inline-flex items-center gap-1 bg-emerald-500/90 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 h-[22px] rounded-full shadow-lg border border-white/10 backdrop-blur-sm">
              <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
              Rising
            </span>
          </div>
        </div>
        
        <div className="p-4 text-left relative z-10" style={{ transform: 'translateZ(50px)' }}>
          <div className="flex items-center justify-between mb-0.5">
            <p className="text-[15px] font-bold text-gray-900 tracking-tight">{creator.name}</p>
            <p className="text-[15px] font-bold text-[#0ab99d]">{creator.price}</p>
          </div>
          <p className="text-[11px] font-medium text-[#888] uppercase tracking-[1px]">
            {creator.category}
          </p>
        </div>
      </div>
    </div>
  );
};
