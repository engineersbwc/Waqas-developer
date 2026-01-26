
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
    <section id="process" className="py-12 md:py-20 px-6 bg-[#1a1a1a] overflow-hidden relative">
      <div className="max-w-7xl mx-auto">

        {/* Centered Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 leading-tight font-lexend">
            You're just 5 steps away from<br />
            launching your <span className="text-zinc-400">Website</span> or <span className="text-zinc-400">App</span>!
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-medium font-inter uppercase tracking-widest italic opacity-70">Our Strategic Workflow</p>
        </div>

        {/* Process Carousel Container */}
        <div className="relative">
          {/* Main Grid/Flex Container */}
          <div className="flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-5 max-w-7xl mx-auto md:gap-4 lg:gap-6">
            {STEPS.map((step) => (
              <div
                key={step.id}
                className="w-full"
              >
                <div className="
                  h-full md:min-h-[280px] bg-[#3a3a3a] border border-white/5 rounded-xl p-4 flex flex-row md:flex-col items-center md:items-start gap-4
                  hover:border-zinc-500 transition-colors duration-300
                ">
                  {/* Image Container */}
                  <div className="w-16 h-16 md:w-full md:aspect-square flex-shrink-0 overflow-hidden rounded-lg bg-zinc-900/50">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover opacity-90"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200';
                      }}
                    />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-base md:text-lg font-bold mb-1 font-lexend text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed font-inter text-zinc-400">
                      {step.description}
                    </p>
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
