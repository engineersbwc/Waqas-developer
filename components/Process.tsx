
import React, { useState, useEffect, useRef } from 'react';
import { STEPS } from '../constants';
import { Reveal } from './Reveal';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.children[activeStep] as HTMLElement;
      if (activeElement) {
        const container = scrollContainerRef.current;
        const targetScroll = activeElement.offsetTop - container.offsetTop - (container.clientHeight / 2) + (activeElement.clientHeight / 2);
        container.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }
    }
  }, [activeStep]);

  return (
    <section id="process" className="py-20 px-6 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <div className="inline-block px-3 py-1 rounded-full border border-[#4ade80]/20 bg-[#4ade80]/5 mb-5">
                <p className="text-[#4ade80] font-bold text-[9px] uppercase tracking-[0.3em]">Our Workflow</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-lexend tracking-tighter leading-[1]">
                How We <span className="text-[#4ade80]">Work.</span>
              </h2>
              <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-sm">A streamlined journey from discovery to market dominance.</p>
              <div className="flex space-x-1.5 mt-8">
                {STEPS.map((_, idx) => (
                  <div key={idx} className={`h-1 rounded-full transition-all duration-700 ${idx === activeStep ? 'w-10 bg-[#4ade80]' : 'w-2 bg-zinc-800'}`} />
                ))}
              </div>
            </Reveal>
          </div>

          <div ref={scrollContainerRef} className="lg:col-span-7 space-y-4 max-h-[500px] overflow-y-auto scrollbar-hide py-4">
            {STEPS.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <div key={step.id} className={`relative bg-white/[0.02] border rounded-[1.2rem] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 transition-all duration-700 cursor-pointer ${isActive ? 'border-[#4ade80]/30 bg-white/[0.04] scale-100 opacity-100' : 'border-white/5 scale-[0.97] opacity-40 grayscale'}`} onClick={() => setActiveStep(index)}>
                  <div className="flex items-center space-x-5">
                    <div className={`text-3xl md:text-4xl font-black font-lexend ${isActive ? 'text-[#4ade80]' : 'text-zinc-800'}`}>{step.number}</div>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 ${isActive ? 'bg-zinc-900 border border-[#4ade80]/20 scale-110' : 'bg-white/5 border border-white/5 scale-100'}`}>
                      <div className={`scale-75 ${isActive ? 'text-[#4ade80]' : 'text-zinc-600'}`}>{step.icon}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-lg font-black mb-1 uppercase tracking-tight font-lexend ${isActive ? 'text-white' : 'text-zinc-600'}`}>{step.title}</h4>
                    <p className={`text-sm leading-relaxed font-medium ${isActive ? 'text-zinc-300' : 'text-zinc-700'}`}>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
