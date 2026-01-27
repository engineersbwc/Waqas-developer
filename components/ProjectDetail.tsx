
import React, { useEffect } from 'react';
import { Project } from '../types';
import { Reveal } from './Reveal';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[2000] bg-[#121212] overflow-y-auto animate-in slide-in-from-bottom duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
      <nav className="sticky top-0 z-[2100] bg-[#121212]/90 backdrop-blur-xl px-6 py-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center space-x-4 text-zinc-400 hover:text-white transition-all"
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 group-hover:border-white transition-all">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Back to Work</span>
          </button>
          <div className="hidden sm:block text-[10px] font-black tracking-[0.4em] uppercase text-zinc-300">
            Case Study &bull; {project.title}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-40">

        {/* Top Section: Title & Development Type */}
        <Reveal>
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-9xl font-black text-white font-lexend tracking-tighter leading-none uppercase max-w-5xl mx-auto">
              {project.title}
            </h1>
            <div className="inline-block px-8 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-sm md:text-lg font-bold text-zinc-400 tracking-tight flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] mr-3 animate-pulse" />
                {project.category || 'Expert Software Development'}
              </span>
            </div>
          </div>
        </Reveal>

        {/* 2. Project Overview - 3-4 lines max */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal className="order-2 lg:order-1 h-full">
            <div className="relative group overflow-hidden rounded-[3rem] border border-white/10 bg-zinc-900 shadow-2xl aspect-[16/10]">
              <img
                src={project.image}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt={project.title}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2 space-y-10">
            <div className="space-y-4">
              <h2 className="text-[14px] font-black text-white font-lexend tracking-[0.3em] uppercase">
                Project Overview
              </h2>
              <div className="w-20 h-1.5 bg-[#4ade80] rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-medium line-clamp-4">
              {project.vision || project.description}
            </p>
          </Reveal>
        </section>

        {/* Project Profile Section: 2-Column Reversed (Text Left, Img Right) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal className="space-y-16">
            <div className="space-y-4">
              <h2 className="text-[14px] font-black text-white font-lexend tracking-[0.3em] uppercase">
                Project Profile
              </h2>
              <div className="w-20 h-1.5 bg-zinc-700/50 rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="space-y-3">
                <span className="text-[12px] font-black text-zinc-500 uppercase tracking-[0.2em] block">Industry</span>
                <p className="text-white font-bold text-base">{project.category?.split(',')[0] || 'Technology'}</p>
              </div>
              <div className="space-y-3">
                <span className="text-[12px] font-black text-zinc-500 uppercase tracking-[0.2em] block">Platform</span>
                <p className="text-white font-bold text-base">{project.tag}</p>
              </div>
              <div className="space-y-4 lg:col-span-2">
                <span className="text-[12px] font-black text-zinc-500 uppercase tracking-[0.2em] block">Technologies</span>
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {project.technologies?.map((tech, idx) => (
                    <span key={idx} className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-zinc-300 uppercase tracking-widest hover:border-white/20 transition-all">
                      {tech}
                    </span>
                  )) || <span className="text-zinc-600 font-black uppercase text-[10px]">Premium Architecture</span>}
                </div>
              </div>
              <div className="space-y-3">
                <span className="text-[12px] font-black text-zinc-500 uppercase tracking-[0.2em] block">Duration</span>
                <p className="text-white font-bold text-base">{project.timeline || 'Project Cycle'}</p>
              </div>
            </div>
          </Reveal>
          <Reveal className="h-full">
            <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-2xl">
              <img
                src={project.gallery?.[0] || project.image}
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                alt="Interface Preview"
              />
            </div>
          </Reveal>
        </section>

        {/* Problem & Solution Section: 2-Column (Visual Left, Text Right) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <Reveal className="h-full">
            <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-white/10 p-16 flex items-center justify-center bg-dots-white/5">
              <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <img
                src={project.gallery?.[1] || project.image}
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-2xl"
                alt="Challenge Visual"
              />
            </div>
          </Reveal>
          <Reveal className="space-y-20">
            {/* 4. The Problem - 2-3 lines */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-[14px] font-black text-white font-lexend tracking-[0.3em] uppercase">The Problem</h3>
                <div className="w-12 h-1.5 bg-zinc-800 rounded-full" />
              </div>
              <p className="text-lg text-zinc-500 leading-relaxed font-medium line-clamp-3">
                {project.problemStatement || "Identified key operational bottlenecks and user experience friction points."}
              </p>
            </div>

            {/* 5. The Solution - 2-4 lines */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-[14px] font-black text-[#4ade80] font-lexend tracking-[0.3em] uppercase">The Solution</h3>
                <div className="w-12 h-1.5 bg-[#4ade80]/40 rounded-full" />
              </div>
              <p className="text-lg text-zinc-300 leading-relaxed font-bold line-clamp-4">
                {project.solution || "Architected a high-performance solution leveraging advanced automation and user-centric design."}
              </p>
            </div>
          </Reveal>
        </section>

        {/* 6. Key Features (Highlights) - 5-6 bullets max */}
        <section className="space-y-24">
          <Reveal className="text-center space-y-4">
            <h2 className="text-[14px] font-black text-white font-lexend tracking-[0.3em] uppercase">
              Key Features
            </h2>
            <div className="w-24 h-1.5 bg-zinc-800 mx-auto rounded-full" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {project.features?.map((feature, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="h-full">
                <div className="h-full p-12 rounded-[2.5rem] bg-[#1a1a1a] border border-white/5 hover:border-white/20 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ade80]/5 blur-[60px] rounded-full -mr-16 -mt-16 group-hover:bg-[#4ade80]/10 transition-all" />
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-white/10 transition-colors">
                    <span className="text-[#4ade80] font-black text-xl">0{idx + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight font-lexend">{feature}</h3>
                  <p className="text-zinc-500 leading-relaxed font-medium">
                    Engineered to provide maximum utility and a seamless user interface experience within the {project.tag} ecosystem.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 7. Outcome & Impact Section */}
        <Reveal>
          <section className="bg-[#1a1a1a] border border-white/10 rounded-[4rem] p-16 md:p-32 shadow-2xl relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-[#4ade80]/5 to-transparent opacity-50" />
            <div className="relative z-10 text-center space-y-24">
              <div className="space-y-4">
                <h2 className="text-[14px] font-black text-white font-lexend tracking-[0.3em] uppercase">Outcome & Impact</h2>
                <div className="w-24 h-1.5 bg-[#4ade80] mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-20 items-center">
                {project.outcomes?.map((outcome, idx) => (
                  <div key={idx} className="space-y-4 group">
                    <div className="text-6xl md:text-8xl font-black text-white font-lexend group-hover:text-[#4ade80] transition-colors">{outcome.split(' ')[0]}</div>
                    <div className="text-[12px] font-black text-zinc-500 uppercase tracking-[0.5em]">{outcome.split(' ').slice(1).join(' ')}</div>
                  </div>
                )) || (
                    <>
                      <div className="space-y-4">
                        <div className="text-6xl md:text-8xl font-black text-white font-lexend">100%</div>
                        <div className="text-[12px] font-black text-zinc-500 uppercase tracking-[0.5em]">Efficiency</div>
                      </div>
                      <div className="space-y-4">
                        <div className="text-6xl md:text-8xl font-black text-white font-lexend">Top</div>
                        <div className="text-[12px] font-black text-zinc-500 uppercase tracking-[0.5em]">Performance</div>
                      </div>
                      <div className="space-y-4">
                        <div className="text-6xl md:text-8xl font-black text-white font-lexend">V3.0</div>
                        <div className="text-[12px] font-black text-zinc-500 uppercase tracking-[0.5em]">Architecture</div>
                      </div>
                    </>
                  )}
              </div>
            </div>
          </section>
        </Reveal>

        {/* 8. Target Users (Kon use karega?) */}
        <section className="space-y-16">
          <Reveal className="text-center space-y-4">
            <h2 className="text-[14px] font-black text-white font-lexend tracking-[0.3em] uppercase">Target Users</h2>
            <div className="w-16 h-1.5 bg-zinc-800 mx-auto rounded-full" />
          </Reveal>

          <div className="flex flex-wrap justify-center gap-6">
            {project.targetUsers?.map((user, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="px-10 py-5 rounded-3xl bg-[#1a1a1a] border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all cursor-default">
                  <span className="text-sm md:text-base font-black text-zinc-400 uppercase tracking-widest">{user}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 9. Future Roadmap (Aagay kya?) */}
        <section className="max-w-5xl mx-auto space-y-24">
          <Reveal className="text-center space-y-4">
            <h2 className="text-[14px] font-black text-white font-lexend tracking-[0.3em] uppercase">Future Roadmap</h2>
            <p className="text-[12px] text-zinc-500 font-bold uppercase tracking-[0.4em]">Strategic Vision & Evolution</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8">
            {project.futureEnhancements?.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="h-full">
                <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-10 p-10 md:p-14 rounded-[3rem] bg-[#1a1a1a] border border-white/5 group hover:border-[#4ade80]/30 transition-all relative overflow-hidden min-h-full">
                  <div className="absolute top-0 left-0 w-2 h-full bg-zinc-800 group-hover:bg-[#4ade80] transition-all" />
                  <div className="text-4xl md:text-6xl font-black text-zinc-900 group-hover:text-[#4ade80]/10 transition-colors font-lexend">0{idx + 1}</div>
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-2 font-lexend">{item}</h4>
                    <p className="text-sm text-zinc-600 font-black uppercase tracking-widest">Phase {idx + 1} Enhancement</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-[#4ade80] transition-colors" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        {project.url && (
          <Reveal className="pt-20 text-center pb-20">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-6 bg-white text-black rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-[#4ade80] transition-all duration-500 scale-100 hover:scale-105 shadow-2xl"
            >
              Visit Live Project
              <svg className="ml-4 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </Reveal>
        )}
      </main>
    </div>
  );
};
