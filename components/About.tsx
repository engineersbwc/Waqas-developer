
import React from 'react';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  const trustPoints = [
    '4+ years of real-world software engineering experience',
    'Enterprise-level solutions for international clients',
    'Proven expertise in mobile, web, and AI systems',
    'Research-backed AI & automation knowledge',
    'Clear communication & ownership-driven delivery',
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f5ba41]/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <Reveal>
            <p className="text-[#f5ba41] font-bold text-xs uppercase tracking-[0.4em] mb-6 font-lexend">Our Studio</p>
            <h2 className="text-5xl md:text-7xl font-black text-white font-lexend tracking-tighter leading-none mb-8 uppercase">
              About <br />
              <span className="text-zinc-600">Us.</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 font-medium">
              We are a solution-driven digital studio focused on helping businesses solve operational and growth problems through technology. Instead of selling isolated services, we deliver complete systems that combine mobile apps, web platforms, AI automation, and clean UX.
            </p>

            <div className="space-y-6">
              <h3 className="text-white font-black text-sm uppercase tracking-widest border-b border-white/10 pb-4 inline-block font-lexend">Why Businesses Trust Us</h3>
              <ul className="grid grid-cols-1 gap-4">
                {trustPoints.map((point, idx) => (
                  <li key={idx} className="flex items-center space-x-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f5ba41] group-hover:scale-125 transition-transform"></div>
                    <span className="text-zinc-500 text-sm font-medium group-hover:text-zinc-300 transition-colors">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Our Studio"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-lg font-bold italic font-inter">"We don't just build software; we solve problems."</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
