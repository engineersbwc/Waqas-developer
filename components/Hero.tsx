
import React from 'react';
import { ImageSlider } from './ImageSlider';

interface HeroProps {
  onContactClick: (e: React.MouseEvent) => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="home" className="min-h-[60vh] flex flex-col justify-center pt-20 pb-0 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">

        {/* Two-column layout on desktop, single column on mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Text Content (appears first on mobile = top) */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start space-y-6 lg:mt-0 text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-[30px] font-black text-[#F5F5F5] leading-[1.1] tracking-tighter">
              We build AI-powered systems that automate business operations
            </h1>

            {/* Subheading */}
            {/* Subheading */}
            <p className="text-zinc-600 text-[12px] md:text-sm font-normal leading-relaxed">
              We solve operational and growth problems through technology, delivering complete systems that combine mobile apps, web platforms, and research-backed AI automation.
            </p>

            {/* Button - hidden on mobile, shown on desktop */}
            <button
              onClick={onContactClick}
              className="hidden lg:flex items-center space-x-3 bg-[#1a1a1a] border border-[#4ade80]/30 text-white px-8 py-4 md:px-10 md:py-5 rounded-lg font-black text-base md:text-lg hover:border-[#4ade80]/60 hover:bg-zinc-900 active:scale-95 transition-all shadow-xl"
            >
              <div className="w-3 h-3 rounded-full bg-[#4ade80] animate-pulse shadow-[0_0_10px_#4ade80]/50" />
              <span>Book a Call</span>
            </button>

            {/* Description - hidden on mobile, shown on desktop */}

          </div>

          {/* Right Column: Showcase (appears second on mobile = middle) */}
          <div className="lg:col-span-6 relative w-full">
            <div className="relative w-full aspect-[16/10] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
              <ImageSlider />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-[#f5ba41]/10 rounded-[3rem] blur-[60px] -z-10 pointer-events-none"></div>
          </div>

          {/* Mobile-only: Button and Description below showcase */}
          <div className="lg:hidden flex flex-col items-center space-y-6 text-center w-full">
            <button
              onClick={onContactClick}
              className="w-full flex items-center justify-center space-x-3 bg-[#1a1a1a] border border-[#4ade80]/30 text-white px-8 py-4 rounded-lg font-black text-base hover:border-[#4ade80]/60 hover:bg-zinc-900 active:scale-95 transition-all"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80] animate-pulse shadow-[0_0_8px_#4ade80]/50" />
              <span>Book a Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
