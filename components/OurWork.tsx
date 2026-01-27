
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
      className="relative aspect-[16/10] overflow-hidden mb-4 rounded-xl border border-white/5 bg-zinc-900/50 perspective-1000"
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
    <section id="work" className="py-6 md:py-10 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#f5ba41]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[28px] font-bold text-white font-lexend tracking-tight mb-2">Our Work</h2>
          <div className="w-12 h-0.5 bg-[#f5ba41] mx-auto rounded-full"></div>
        </div>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`
            flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 pb-12
            md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-6 lg:gap-8 md:overflow-x-hidden md:pb-0 md:mx-0 md:px-0
            ${isDragging ? 'cursor-grabbing select-none snap-none' : 'cursor-default'}
          `}
        >
          {PROJECTS.map((project) => (
            <div key={project.id} className="w-[80vw] md:w-full h-full flex-shrink-0 snap-center md:snap-align-none mr-4 md:mr-0 inline-block align-top">
              <div
                onClick={() => handleClick(project)}
                className="
                  group relative w-full h-full
                  bg-[#3a3a3a] border border-white/10 rounded-[20px] overflow-hidden 
                  cursor-pointer p-5 md:p-6 flex flex-col
                  transition-all duration-300 hover:border-white/20
                "
              >
                {/* 3D Interactive Image */}
                <ProjectImage image={project.image} title={project.title} />

                {/* Title and Category Tag */}
                <div className="flex items-start justify-between gap-3 mt-1">
                  <h3 className="text-[#F5F5F5] text-[17px] md:text-xl font-lexend font-bold tracking-tight leading-snug">
                    {project.title}
                  </h3>
                  <div className="flex-shrink-0">
                    <span className="
                      px-3 py-1 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6] text-[#FFFFFF] 
                      text-[9px] font-black tracking-wider uppercase whitespace-nowrap
                    ">
                      {project.tag}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>

        <div className="mt-12 md:mt-20 flex justify-center">
          <button className="flex items-center space-x-3 group px-10 py-5 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-full border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all duration-500 shadow-xl relative overflow-hidden">
            <div className="flex items-center space-x-3 z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80] animate-pulse shadow-[0_0_10px_#4ade80]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">See More Work</span>
            </div>
            {/* Subtle loading effect background */}
            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#4ade80]/20">
              <div className="h-full bg-[#4ade80] animate-[loading_2s_infinite] w-1/3" />
            </div>
          </button>
        </div>

      </div>
    </section >
  );
};
