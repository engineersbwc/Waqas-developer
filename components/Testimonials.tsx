
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Reveal } from './Reveal';


export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-5 md:py-3 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-[#4ade80]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-12xl mx-auto relative z-10 px-4">
        <Reveal className="text-center mb-2 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white font-lexend tracking-tighter mb-4 uppercase">Social Proof</h2>
          <p className="text-zinc-500 font-medium font-inter uppercase tracking-[0.1em] text-[10px] md:text-xs italic opacity-80">What our clients say about us</p>
        </Reveal>

        {/* Marquee Container */}
        <div className="relative overflow-hidden group">
          <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap gap-5 py-4">
            {/* Render twice for seamless loop */}
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[300px] md:w-[400px] flex-shrink-0 bg-[#3a3a3a]/40 border border-white/5 p-6 md:p-8 rounded-3xl flex flex-col justify-between transition-all duration-500 hover:border-[#4ade80]/20 group/card relative"
              >
                <div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#4ade80] text-sm mr-0.5">★</span>
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm md:text-base mb-6 leading-relaxed font-medium whitespace-normal">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-white/5 pt-5">
                  <div>
                    <h4 className="font-bold text-white text-sm md:text-base font-lexend">{testimonial.name}</h4>
                    <p className="text-zinc-500 text-[10px] md:text-xs font-medium uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity">
                    <span className="text-[#4ade80] text-xs">✓</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays for Fade Effect */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
      `}} />
    </section>
  );
};
