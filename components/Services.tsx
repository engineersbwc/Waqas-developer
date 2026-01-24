
import React from 'react';
import { SERVICES } from '../constants';
import { Reveal } from './Reveal';

interface ServicesProps {
  onContactClick: (e: React.MouseEvent) => void;
}

export const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
  return (
    <section id="services" className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white font-lexend tracking-tighter mb-4">Services</h2>
          <div className="w-16 h-1 bg-[#f5ba41] mx-auto rounded-full opacity-50"></div>
        </Reveal>
        
        {/* Custom Grid: 2 Large on top row, 3 Small on bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-10">
          {SERVICES.map((service, index) => {
            const isLarge = index < 2; 
            return (
              <Reveal 
                key={service.id} 
                className={`h-full ${isLarge ? 'md:col-span-3' : 'md:col-span-2'}`}
              >
                <div className="group h-full flex flex-col bg-[#0d0d0d] border border-white/5 rounded-[3rem] p-8 md:p-10 transition-all duration-700 hover:border-[#f5ba41]/30 hover:-translate-y-3 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
                  
                  {/* Service Visual Mockup (Requested) */}
                  <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden mb-10 border border-white/5 bg-zinc-900">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale opacity-60 transition-all duration-[1500ms] group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/90 via-transparent to-transparent"></div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl group-hover:bg-[#f5ba41]/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        {service.icon}
                      </div>
                      <span className="text-[9px] font-black text-zinc-800 tracking-[0.4em] uppercase">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-6 font-lexend tracking-tight leading-tight group-hover:text-[#f5ba41] transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-medium mb-12">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <button 
                      onClick={onContactClick} 
                      className="group/btn relative inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.4em] uppercase text-white transition-all overflow-hidden hover:bg-[#f5ba41] hover:text-black hover:border-[#f5ba41] shadow-lg"
                    >
                      <span className="relative z-10">Get In Touch</span>
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
