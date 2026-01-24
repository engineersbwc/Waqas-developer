
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Reveal } from './Reveal';

interface OurWorkProps {
  onProjectClick: (project: Project) => void;
}

export const OurWork: React.FC<OurWorkProps> = ({ onProjectClick }) => {
  return (
    <section id="work" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white font-lexend tracking-tighter mb-4">Our Work</h2>
          <div className="w-16 h-1 bg-[#f5ba41] mx-auto rounded-full"></div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((project) => (
            <Reveal key={project.id}>
              <div
                onClick={() => onProjectClick(project)}
                className="group relative bg-[#0a0a0a] border border-white/5 rounded-[3rem] overflow-hidden cursor-pointer transition-all duration-700 hover:border-[#f5ba41]/20 hover:-translate-y-3 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle Grainy Overlay on Card Image */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700 pointer-events-none" />
                </div>

                {/* Footer Info - Reference Style */}
                <div className="p-8 md:p-10 flex items-center justify-between">
                  <h3 className="text-white text-2xl md:text-3xl font-black font-lexend tracking-tight group-hover:text-[#f5ba41] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <div className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#f5ba41]/30 group-hover:bg-[#f5ba41]/10 transition-all ml-4 shrink-0">
                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest group-hover:text-[#f5ba41]">
                      {project.tag}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="flex items-center space-x-3 group px-10 py-5 bg-white/5 hover:bg-[#f5ba41] hover:text-black rounded-full border border-white/10 transition-all duration-500 shadow-xl">
            <div className="w-2.5 h-2.5 rounded-full bg-[#f5ba41] group-hover:bg-black animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">See More Work</span>
          </button>
        </div>
      </div>
    </section>
  );
};
