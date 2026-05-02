"use client";

import { useState } from "react";

export default function FloatingNavbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "For Brands",
    "For Influencers",
    "How It Works",
    "Login",
  ];

  return (
    <div className="fixed top-5 right-20 z-[1000]">
      <div className="flex items-center bg-white rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.08)] py-1.5 px-4">

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-0">
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="text-sm font-medium text-gray-900 hover:text-[#0ab99d] transition-all duration-200 cursor-pointer">
                {item}
              </span>

              {index !== menuItems.length - 1 && (
                <div className="w-px h-3 bg-gray-200 mx-3" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-900 px-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden absolute right-0 mt-2 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.08)] py-2 w-48 overflow-hidden">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 text-sm text-gray-900 hover:text-[#0ab99d] hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => setOpen(false)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
