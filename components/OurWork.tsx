
import React, { useRef, useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Reveal } from './Reveal';

interface OurWorkProps {
  onProjectClick: (project: Project) => void;
}

export const OurWork: React.FC<OurWorkProps> = ({ onProjectClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    if (Math.abs(walk) > 5) setHasMoved(true);
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleClick = (project: Project) => {
    if (!hasMoved) {
      onProjectClick(project);
    }
  };

  return (
    <section id="work" className="py-6 md:py-10 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#f5ba41]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-serif tracking-tighter mb-4 uppercase">Portfolio</h2>
          <div className="w-16 h-1 bg-[#f5ba41] mx-auto rounded-full"></div>
        </Reveal>

        {/* 
          Container: 
          - Mobile: Horizontal Scroll (flex, overflow-x-auto, snap)
          - Desktop: Grid (grid-cols-2)
        */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`
            flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 pb-12
            md:grid md:grid-cols-2 md:grid-rows-none md:gap-8 lg:gap-12 md:overflow-x-hidden md:pb-0 md:mx-0 md:px-0
            ${isDragging ? 'cursor-grabbing select-none snap-none' : 'cursor-default'}
          `}
        >
          {PROJECTS.map((project) => (
            <Reveal key={project.id} className="w-[85vw] md:w-full h-full flex-shrink-0 snap-center md:snap-align-none mr-4 md:mr-0">
              <div
                onClick={() => handleClick(project)}
                className="
                  group relative w-full h-full
                  bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl 
                  border border-white/10 rounded-[24px] overflow-hidden 
                  cursor-pointer transition-all duration-500 
                  hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]
                  hover:border-white/20
                  p-6 md:p-8 flex flex-col
                "
              >
                {/* Title First */}
                <h3 className="text-white text-2xl md:text-3xl font-serif tracking-tight mb-6 group-hover:text-[#f5ba41] transition-colors">
                  {project.title}
                </h3>

                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable="false"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Description/Tag */}
                <p className="text-zinc-400 text-xs md:text-sm font-medium tracking-wide uppercase opacity-80 mb-6">
                  {project.tag}
                </p>

                {/* Button at bottom */}
                <div className="mt-auto flex justify-center md:justify-start">
                  <button className="
                    px-8 py-3 rounded-xl border border-white/10 bg-white/5 text-white 
                    text-xs font-bold tracking-wide uppercase transition-all 
                    hover:bg-white hover:text-black hover:border-transparent
                    w-full md:w-auto
                  ">
                    View Project
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 md:mt-20 flex justify-center">
          <button className="flex items-center space-x-3 group px-10 py-5 bg-white/5 hover:bg-[#f5ba41] hover:text-black rounded-full border border-white/10 transition-all duration-500 shadow-xl">
            <div className="w-2.5 h-2.5 rounded-full bg-[#f5ba41] group-hover:bg-black animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">See More Work</span>
          </button>
        </div>
      </div>
    </section>
  );
};
