
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
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[28px] font-bold text-white font-lexend tracking-tight mb-2">Services</h2>
          <div className="w-12 h-0.5 bg-[#f5ba41] mx-auto rounded-full opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const isTopRow = index < 2;

            return (
              <div
                key={service.id}
                className={`h-full ${isTopRow ? 'md:col-span-3' : 'md:col-span-2'}`}
              >
                <div className="
                  group h-full flex flex-col bg-[#111] border border-white/5 rounded-[24px] p-6 md:p-8 
                  relative overflow-hidden
                ">

                  {/* Grainy Texture Overlay */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

                  {/* Card Content Layout */}
                  <div className="flex flex-col h-full">

                    <div className="w-full flex flex-col">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-4 font-lexend tracking-tight leading-tight whitespace-nowrap">
                        {service.title}
                      </h3>

                      {/* Static Service Image */}
                      <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-6 border border-white/5 bg-zinc-900/50">
                        <img
                          src={service.image}
                          alt={service.title}
                          className={`
                            gridimagestyle w-full h-full grayscale-0 opacity-100 transition-opacity duration-300
                            ${(service.id === 's3' || service.id === 's4' || service.id === 's5') ? 'object-contain p-4' : 'object-cover'}
                          `}
                          draggable="false"
                        />
                        <div className="absolute inset-0 bg-black/5 rounded-xl" />
                      </div>

                      <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-medium mb-6">
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
                        text-[10px] font-black tracking-[0.2em] uppercase transition-all 
                        hover:bg-white hover:text-black hover:border-transparent
                        w-full md:w-auto
                      "
                    >
                      Get In Touch
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


