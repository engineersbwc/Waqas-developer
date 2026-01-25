
import React, { useState, useEffect, useRef } from 'react';
import { STEPS } from '../constants';
import { Reveal } from './Reveal';

export const Process: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Sync active index with scroll position
  const handleScroll = () => {
    if (!scrollRef.current || !isMobile) return;
    const scrollPosition = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth;
    const newIndex = Math.round(scrollPosition / cardWidth);
    if (newIndex !== activeIndex && newIndex < STEPS.length) {
      setActiveIndex(newIndex);
    }
  };

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

  // Automated flow: cycle through cards every 5 seconds (paused when user is mobile)
  useEffect(() => {
    if (isMobile) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STEPS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isMobile]);

  return (
    <section id="process" className="py-12 md:py-20 px-6 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto">

        {/* Centered Heading */}
        <Reveal className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3 leading-tight font-lexend">
            You're just 5 steps away from<br />
            launching your <span className="text-[#f5ba41]">Website</span> or <span className="text-[#4ade80]">App</span>!
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-medium font-inter uppercase tracking-widest">Our Strategic Workflow</p>
        </Reveal>

        {/* Process Carousel Container */}
        <div className="relative">
          {/* Main Grid/Flex Container */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
            className={`
              flex md:grid md:grid-cols-5 gap-4 md:gap-6 
              ${isMobile ? 'overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8' : 'overflow-hidden'}
              cursor-grab active:cursor-grabbing transition-all duration-500
            `}
            style={{
              scrollBehavior: isDragging ? 'auto' : 'smooth'
            }}
          >
            {STEPS.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={step.id}
                  className={`
                    w-[calc(100vw-3rem)] md:w-full flex-shrink-0 snap-center transition-all duration-700
                    ${isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.98] blur-[1px]'}
                  `}
                >
                  <div className={`
                    h-full bg-[#0a0a0a]/80 backdrop-blur-sm border rounded-2xl p-5 md:p-6 lg:p-8 flex flex-col items-start
                    transition-all duration-700 relative overflow-hidden group
                    ${isActive ? 'border-[#f5ba41]/30 shadow-[0_0_50px_rgba(245,186,65,0.1)]' : 'border-white/5'}
                  `}>
                    {/* Animated Glow Effect */}
                    {isActive && (
                      <div className="absolute -inset-2 bg-[#f5ba41]/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
                    )}

                    {/* Grainy Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

                    {/* Step Number & Icon Row */}
                    <div className="flex justify-between items-center w-full mb-4 md:mb-6">
                      <span className={`
                        text-[10px] md:text-xs font-bold tracking-[0.3em] transition-colors duration-500 uppercase
                        ${isActive ? 'text-[#f5ba41]' : 'text-zinc-700'}
                      `}>
                        STEP {step.number}
                      </span>
                      <div className={`
                        text-2xl md:text-3xl transition-all duration-700
                        ${isActive ? 'scale-125 rotate-6 drop-shadow-[0_0_15px_rgba(245,186,65,0.6)]' : 'scale-100 opacity-60'}
                      `}>
                        {step.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`
                      text-base md:text-lg font-bold mb-1.5 md:mb-3 transition-colors duration-500 font-lexend
                      ${isActive ? 'text-white' : 'text-zinc-500'}
                    `}>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className={`
                      text-xs md:text-sm leading-snug md:leading-relaxed transition-colors duration-500 font-inter
                      ${isActive ? 'text-zinc-400' : 'text-zinc-700'}
                    `}>
                      {step.description}
                    </p>

                    {/* Active Indicator Bar */}
                    <div className={`
                      absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#f5ba41] to-transparent transition-all duration-1000
                      ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}
                    `} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Indicators (Dots) */}
          <div className="flex justify-center gap-3 mt-4 md:mt-8">
            {STEPS.map((_, index) => (
              <div
                key={index}
                className={`
                  h-1.5 transition-all duration-500 rounded-full
                  ${index === activeIndex ? 'w-8 bg-[#f5ba41]' : 'w-2 bg-zinc-800'}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
