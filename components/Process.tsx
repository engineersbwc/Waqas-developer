
import React, { useState, useEffect, useRef } from 'react';
import { STEPS } from '../constants';

export const Process: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);



  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current || !isMobile) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Automated flow removed as per request

  return (
    <section id="process" className="py-8 md:py-10 px-6 bg-[#1a1a1a] overflow-hidden relative">
      <div className="max-w-6xl mx-auto">

        {/* Centered Heading */}
        <div className="text-center mb-6 md:mb-6">
          <h2 className="text-1xl md:text-1xl lg:text-3xl font-black text-white mb-3 leading-tight font-lexend">
            You're just 5 steps away from<br />
            launching your <span className="text-zinc-400">Website</span> or <span className="text-zinc-400">App</span>!
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-medium font-inter uppercase tracking-widest italic opacity-70">Our Strategic Workflow</p>
        </div>

        {/* Process Card Grid */}
        <div className="relative">
          <div className="
            grid grid-cols-1 gap-4
            md:grid-cols-2 
            lg:grid-cols-5
            max-w-6xl mx-auto
          ">
            {STEPS.map((step) => (
              <div
                key={step.id}
                className="w-full h-full"
              >
                <div className="
                  h-full bg-zinc-900/40 border border-white/5 rounded-2xl 
                  flex flex-col
                  hover:border-[#4ade80]/30 hover:bg-zinc-900/60 transition-all duration-500 group relative overflow-hidden
                ">
                  {/* Step Number Badge - Positioned over image */}
                  <div className="absolute top-4 right-4 text-4xl font-black text-white/5 group-hover:text-[#4ade80]/10 transition-colors font-lexend pointer-events-none z-10">
                    0{step.id}
                  </div>

                  {/* Image Container - Full Width Header */}
                  <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-900 border-b border-white/5 shadow-xl group-hover:border-[#4ade80]/20 transition-all duration-500">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200';
                      }}
                    />
                  </div>

                  {/* Text Content - Padded */}
                  <div className="p-1 flex flex-col flex-grow">
                    <div className="space-y-2">
                      <h3 className="text-base font-black font-lexend text-white uppercase tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-[10px] leading-relaxed font-medium text-zinc-600 group-hover:text-zinc-400 transition-colors">
                        {step.description}
                      </p>
                    </div>

                    {/* Subtle Footer Marker */}
                    <div className="mt-auto pt-1 flex items-center gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]/20 group-hover:bg-[#4ade80] animate-pulse transition-colors" />
                      <span className="text-[9px] font-black text-zinc-100 uppercase tracking-widest group-hover:text-zinc-500 transition-colors">Phase 0{step.id}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
