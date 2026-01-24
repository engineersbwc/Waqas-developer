
import React from 'react';
import { ImageSlider } from './ImageSlider';

interface HeroProps {
  onContactClick: (e: React.MouseEvent) => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col justify-center pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-left w-full">
        <div className="inline-block bg-[#f5ba41]/10 px-3 py-1 rounded-full mb-6 border border-[#f5ba41]/20">
          <p className="text-[#f5ba41] text-[9px] font-black uppercase tracking-[0.3em]">Intelligent Solutions</p>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1] mb-8 tracking-tighter">
          We build <span className="text-[#f5ba41]">AI-powered</span> <br />
          systems that automate <br />
          business operations.
        </h1>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col items-start space-y-8">
            <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed">
              We solve operational and growth problems through technology, delivering complete systems that combine mobile apps, web platforms, and research-backed AI automation.
            </p>

            <button
              onClick={onContactClick}
              className="bg-[#f5ba41] text-black px-10 py-5 rounded-full font-black text-lg hover:bg-white hover:scale-105 transition-all shadow-2xl yellow-glow inline-block whitespace-nowrap"
            >
              Start Your Transformation
            </button>
          </div>

          <div className="lg:col-span-7 relative w-full group">
            <div className="absolute -inset-8 bg-[#f5ba41]/5 rounded-[3rem] blur-[80px] opacity-40"></div>
            <div className="relative p-2 bg-[#111]/50 rounded-[2.5rem] border border-white/5 backdrop-blur-md">
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
