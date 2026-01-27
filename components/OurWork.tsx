
import React, { useRef, useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Reveal } from './Reveal';

interface OurWorkProps {
  onProjectClick: (project: Project) => void;
}

interface ProjectImageProps {
  image: string;
  title: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ image, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15; // Max 15 deg tilt
    const rotateY = ((x - centerX) / centerX) * 15;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden mb-4 rounded-xl border border-white/5 bg-zinc-900/50 perspective-1000"
      style={{ perspective: '800px' }}
    >
      <div
        className="w-full h-full transition-transform duration-100 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.05, 1.05, 1.05)`,
          transformStyle: 'preserve-3d'
        }}
      >

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={{
            transform: `translateZ(20px) scale(1.1) translateX(${rotate.y * -0.3}px) translateY(${rotate.x * 0.3}px)`,
          }}
          draggable="false"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/10 rounded-xl" />
      </div>
    </div>
  );
};

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
    <section id="work" className="py-20 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#4ade80]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-white font-lexend tracking-tighter uppercase leading-none mb-6">
            Our Work
          </h2>
          <div className="w-20 h-1.5 bg-[#4ade80] mx-auto rounded-full" />
        </div>

        {/* Right Side: Project Cards Grid */}
        <div className="flex-1 w-full">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`
                flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 pb-12
                md:grid md:grid-cols-2 lg:gap-8 md:overflow-x-hidden md:pb-0 md:mx-0 md:px-0
                ${isDragging ? 'cursor-grabbing select-none snap-none' : 'cursor-default'}
              `}
          >
            {PROJECTS.map((project) => (
              <div key={project.id} className="w-[85vw] md:w-full h-full flex-shrink-0 snap-center md:snap-align-none mr-4 md:mr-0 inline-block align-top">
                <div
                  onClick={() => handleClick(project)}
                  className="
                      group relative w-full h-full
                      bg-[#3a3a3a] border border-white/10 rounded-[2.5rem] overflow-hidden 
                      cursor-pointer p-6 md:p-8 flex flex-col
                      transition-all duration-500 hover:border-white/20 hover:-translate-y-2
                    "
                >
                  {/* 3D Interactive Image */}
                  <ProjectImage image={project.image} title={project.title} />

                  <div className="mt-8 flex items-start justify-between mb-8">
                    <div className="space-y-2">
                      <h3 className="text-white text-xl md:text-2xl font-lexend font-black tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">{project.tag}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-[#4ade80] transition-all shrink-0">
                      <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>

                  {/* Card Button */}
                  <div className="mt-auto">
                    <button
                      className="
                            px-8 py-3 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] text-[#E5E5E5] 
                            text-[10px] font-black tracking-[0.2em] uppercase transition-all 
                            hover:bg-[#2A2A2A] hover:border-[#3a3a3a] active:bg-[#1a1a1a] active:border-[#2a2a2a]
                            w-full md:w-auto
                          "
                    >
                      Get In Touch
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More Work Button */}
          <div className="mt-16 md:mt-24 flex justify-center">
            <button className="flex items-center space-x-4 group px-12 py-6 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-full border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all duration-700 shadow-xl relative overflow-hidden group">
              <div className="flex items-center space-x-4 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80] animate-pulse shadow-[0_0_15px_#4ade80]" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white">See More Work</span>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#4ade80]/10">
                <div className="h-full bg-[#4ade80] animate-[loading_3s_infinite] w-1/4 opacity-50" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
