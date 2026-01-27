
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
  className?: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ image, title, className }) => {
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

const YodaProjectImage: React.FC<ProjectImageProps> = ({ image, title, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
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
      className="absolute inset-0 flex items-center justify-center p-4 pointer-events-auto perspective-1000 overflow-visible"
      style={{ perspective: '1200px' }}
    >
      <div
        className="w-full h-full transition-transform duration-200 ease-out flex items-center justify-center"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        <img
          src={image}
          alt={title}
          className={`transition-transform duration-700 ${className || 'object-contain w-[90%] md:w-[85%] h-[85%]'}`}
          style={{
            transform: `translateZ(60px) scale(1.1) translateX(${rotate.y * -0.5}px) translateY(${rotate.x * 0.5}px)`,
            filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.18))',
          }}
        />
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
    <section id="work" className="pb-20 md:pb-32 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#4ade80]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[28px] font-bold text-white font-lexend tracking-tight mb-2 text-center">
            Our Work
          </h2>
          <div className="w-20 h-1.5 bg-[#4ade80] mx-auto rounded-full" />
        </div>

        {/* Project Cards Grid - Responsive Layout */}
        <div className="
          flex flex-nowrap overflow-x-auto overflow-y-hidden gap-6 pb-8 px-4 -mx-4 
          md:grid md:grid-cols-2 md:gap-y-12 md:gap-x-0 md:px-0 md:mx-0 md:overflow-visible
          snap-x snap-mandatory scrollbar-hide
        ">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`
                group relative flex-none flex flex-col bg-[#3a3a3a] border border-white/10 rounded-[24px] overflow-hidden cursor-pointer 
                transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]
                w-[85vw] md:w-[92%] max-w-[580px]
                snap-center
                ${index % 2 === 0 ? 'md:ml-auto md:mr-4' : 'md:mr-auto md:ml-4'}
              `}
              onClick={() => onProjectClick(project)}
            >
              {/* Grainy Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

              {/* Top: Thumbnail Area with 3D Animation restored */}
              <div className="relative h-[260px] md:h-[320px] overflow-hidden bg-zinc-900/5 flex items-center justify-center">
                <div className="w-full h-full p-6 md:p-8 flex items-center justify-center overflow-visible">
                  <YodaProjectImage
                    image={project.image}
                    title={project.title}
                    className={project.id === 'skip' ? 'w-[88%] md:w-[85%] h-[82%]' : ''}
                  />
                </div>
              </div>

              {/* Bottom: Footer */}
              <div className="p-5 md:p-6 flex items-center justify-between bg-[#3a3a3a] border-t border-white/10 relative z-10">
                <div className="flex flex-col">
                  <h3 className="text-[20px] font-bold text-white font-lexend tracking-tight uppercase">
                    {project.client || project.tag}
                  </h3>
                </div>

                <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white text-[20px] font-bold tracking-wider uppercase">
                  {project.category?.includes('Mobile') ? 'MOBILE APP' : 'WEBSITE'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Work Button */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <button className="flex items-center space-x-4 group px-12 py-6 bg-[#1a1a1a] hover:bg-[#2a2a2a] rounded-full border border-[#2a2a2a] hover:border-[#3a3a3a] transition-all duration-700 shadow-xl relative overflow-hidden">
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
    </section>
  );
};
