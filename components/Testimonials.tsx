
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Reveal } from './Reveal';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-10 md:py-16 px-6 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f5ba41]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-lexend tracking-tighter mb-4 uppercase">Social Proof</h2>
          <p className="text-zinc-500 font-medium font-inter uppercase tracking-[0.3em] text-xs md:text-sm italic">What our clients say about us</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <Reveal key={testimonial.id}>
              <div className="h-full bg-[#3a3a3a] border border-white/5 p-8 md:p-12 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 hover:border-white/10 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]">
                <div>
                  <div className="flex mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#f5ba41] text-xl mr-1">★</span>
                    ))}
                  </div>
                  <p className="text-zinc-300 text-lg md:text-xl mb-10 leading-relaxed font-medium font-inter">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="flex items-center space-x-5 border-t border-white/5 pt-8">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 md:w-16 md:h-16 rounded-2xl object-cover grayscale" />
                  <div>
                    <h4 className="font-bold text-white text-lg font-lexend">{testimonial.name}</h4>
                    <p className="text-zinc-500 text-xs md:text-sm font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
