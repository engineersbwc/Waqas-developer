
import React from 'react';
import { ImageSlider } from './ImageSlider';

interface HeroProps {
  onContactClick: (e: React.MouseEvent) => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center pt-32 pb-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">

        {/* Two-column layout on desktop, single column on mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Text Content (appears first on mobile = top) */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start space-y-6 lg:mt-0 text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-[30px] font-black text-white leading-[1.1] tracking-tighter">
              We build <span className="text-[#f5ba41]">AI-powered</span> systems that automate business operations
            </h1>

            {/* Subheading */}
            <p className="text-zinc-600 text-[0.5px] font-normal leading-relaxed">
              We’re a team of expert developers, passionate about powering your business with innovative, high-impact technology solutions.
            </p>

            {/* Button - hidden on mobile, shown on desktop */}
            <button
              onClick={onContactClick}
              className="hidden lg:block bg-[#f5ba41] text-black px-8 py-4 md:px-10 md:py-5 rounded-lg border border-[#f5ba41] font-black text-base md:text-lg hover:bg-transparent hover:text-[#f5ba41] transition-all shadow-xl"
            >
              Book a Call
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
              className="bg-[#f5ba41] text-black px-8 py-4 rounded-lg border border-[#f5ba41] font-black text-base hover:bg-transparent hover:text-[#f5ba41] transition-all shadow-xl"
            >
              Book a Call
            </button>

            <p className="text-zinc-600 text-[12px] font-normal leading-relaxed">
              We solve operational and growth problems through technology, delivering complete systems that combine mobile apps, web platforms, and research-backed AI automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
