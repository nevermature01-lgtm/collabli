import React from 'react';

export const BrandsSlider: React.FC = () => {
  const logos = [
    { name: 'Nike', icon: 'NIKE' },
    { name: 'Samsung', icon: 'SAMSUNG' },
    { name: 'Zara', icon: 'ZARA' },
    { name: 'Boat', icon: 'BOAT' },
    { name: 'Nykaa', icon: 'NYKAA' },
    { name: 'Zomato', icon: 'ZOMATO' },
  ];

  return (
    <section className="py-10 bg-[#F3F1EB] overflow-hidden border-t border-black/5">
      <p className="text-center text-[10px] md:text-xs tracking-[3px] font-bold text-gray-400 mb-8 uppercase">
        Trusted by Leading Brands
      </p>

      <div className="relative w-full overflow-hidden">
        {/* Continuous Scroll Container */}
        <div className="flex w-[200%] animate-scroll gap-12 md:gap-24 items-center whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              {logos.map((logo) => (
                <div 
                  key={logo.name} 
                  className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
                >
                  <span className="text-xl md:text-2xl font-black tracking-tighter text-gray-800 italic">
                    {logo.icon}
                  </span>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
