
import React from 'react';
import { SERVICES } from '../constants';
import { Reveal } from './Reveal';

interface ServicesProps {
  onContactClick: (e: React.MouseEvent) => void;
}

export const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
  return (
    <section id="services" className="py-6 md:py-10 px-6 bg-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#f5ba41]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-serif tracking-tighter mb-4 uppercase">Services</h2>
          <div className="w-16 h-1 bg-[#f5ba41] mx-auto rounded-full opacity-50"></div>
        </Reveal>

        {/*
          Custom Grid:
          Row 1: 2 Large Cards (Col span 3 each on 6-col grid)
          Row 2: 3 Small Cards (Col span 2 each on 6-col grid)
        */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const isFirst = index === 0;
            const isTopRow = index < 2;

            return (
              <Reveal
                key={service.id}
                className={`h-full ${isTopRow ? 'md:col-span-3' : 'md:col-span-2'}`}
              >
                <div className="
                  group h-full flex flex-col bg-[#111] border border-white/10 rounded-[28px] p-8 md:p-10 
                  transition-all duration-500 hover:border-white/20 hover:shadow-2xl relative overflow-hidden
                ">

                  {/* Grainy Texture Overlay */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

                  {/* Card Content Layout */}
                  <div className="flex flex-col h-full">

                    <div className="w-full flex flex-col">
                      <h3 className="text-xl md:text-2xl font-black text-white mb-6 font-serif tracking-tight leading-tight group-hover:text-[#f5ba41] transition-colors whitespace-nowrap">
                        {service.title}
                      </h3>

                      <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-white/5 bg-zinc-900/50">
                        <img
                          src={service.image}
                          alt={service.title}
                          className={`
                            w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700
                            ${(service.id === 's3' || service.id === 's4' || service.id === 's5') ? 'object-contain p-4' : 'object-cover'}
                          `}
                        />
                      </div>

                      <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium mb-8">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Button at the bottom */}
                  <div className="mt-auto flex justify-center md:justify-start">
                    <button
                      onClick={onContactClick}
                      className="
                        px-8 py-3 rounded-xl border border-white/10 bg-white/5 text-white 
                        text-xs font-bold tracking-wide uppercase transition-all 
                        hover:bg-white hover:text-black hover:border-transparent
                        w-full md:w-auto
                      "
                    >
                      Get In Touch
                    </button>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
