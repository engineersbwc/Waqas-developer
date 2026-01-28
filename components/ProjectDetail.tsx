
import React, { useEffect } from 'react';
import { Project } from '../types';
import { Reveal } from './Reveal';
import { Navbar } from './Navbar';

interface ProjectDetailProps {
  project: Project;
  onBack: (targetId?: string) => void;
  onContactClick: (e?: React.MouseEvent) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onContactClick }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    // Simple scroll listener to sync with Navbar's hide/show behavior
    const handleScroll = () => {
      const currentScrollY = document.querySelector('.fixed.inset-0')?.scrollTop || 0;
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const scrollContainer = document.querySelector('.fixed.inset-0');
    scrollContainer?.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.body.style.overflow = 'unset';
      scrollContainer?.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="fixed inset-0 z-[2000] bg-[#121212] overflow-y-auto animate-in slide-in-from-bottom duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]">
      {/* Back Button Navigation Bar (No Main Navbar) */}
      <nav className={`sticky top-0 z-[2100] bg-[#121212]/90 backdrop-blur-xl px-6 py-6 border-b border-white/10 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => onBack('work')}
            className="group flex items-center space-x-4 text-zinc-400 hover:text-white transition-all"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 group-hover:border-white transition-all">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Back to Work</span>
          </button>
          <div className="hidden sm:block">
            {/* Case Study section removed */}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">

        {/* Top Section: Title & Development Type */}
        <Reveal>
          <div className="text-center space-y-8">
            <h1 className="text-[26px] font-black text-white font-lexend tracking-tighter leading-none uppercase max-w-5xl mx-auto">
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

        {/* 2. Project Overview - 16:8 Image + Card */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-4 items-stretch">
          <Reveal className="h-full">
            <div className="relative h-full min-h-[400px] group overflow-hidden rounded-[3rem] border border-white/10 bg-zinc-900 shadow-2xl">
              <img
                src={project.image}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt={project.title}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </Reveal>
          <Reveal className="h-full">
            <div className="h-full p-10 md:p-14 bg-[#1a1a1a] border border-white/5 rounded-[3rem] shadow-2xl flex flex-col justify-start space-y-8">
              <div className="space-y-4">
                <h2 className="text-[26px] font-black text-white font-lexend tracking-[0.1em] uppercase">
                  Project Overview
                </h2>
                <div className="w-16 h-1 bg-[#4ade80] rounded-full" />
              </div>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-medium">
                {project.vision || project.description}
              </p>
            </div>
          </Reveal>
        </section>
        {/* 3. Project Profile (Basic Info) - Card + 16:8 Image */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-4 items-stretch">
          <Reveal className="h-full">
            <div className="h-full p-10 md:p-14 bg-[#1a1a1a] border border-white/5 rounded-[3rem] shadow-2xl flex flex-col justify-start space-y-12">
              <div className="space-y-4">
                <h2 className="text-[26px] font-black text-white font-lexend tracking-[0.1em] uppercase">
                  Project Profile
                </h2>
                <div className="w-16 h-1 bg-zinc-700/50 rounded-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <span className="text-[12px] font-black text-zinc-400 uppercase tracking-[0.2em] block">Industry</span>
                  <p className="text-white font-bold text-base">{project.category || 'Technology'}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[12px] font-black text-zinc-500 uppercase tracking-[0.2em] block">Platform</span>
                  <p className="text-white font-bold text-base">{project.platform || project.tag}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[12px] font-black text-zinc-500 uppercase tracking-[0.2em] block">Role</span>
                  <p className="text-white font-bold text-base">{project.role || 'Design & Development'}</p>
                </div>
                <div className="space-y-2">
                  <span className="text-[12px] font-black text-zinc-500 uppercase tracking-[0.2em] block">Design Aesthetic</span>
                  <p className="text-white font-bold text-base">{project.designAesthetic || 'Modern'}</p>
                </div>
                <div className="space-y-4 lg:col-span-2">
                  <span className="text-[12px] font-black text-zinc-500 uppercase tracking-[0.2em] block">Core Palette</span>
                  <p className="text-white font-bold text-base">{project.corePalette || 'Monochrome is king'}</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal className="h-full">
            <div className="relative h-full min-h-[400px] rounded-[3rem] overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-2xl">
              <img
                src={project.gallery?.[0] || project.image}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                alt="Interface Preview"
              />
            </div>
          </Reveal>
        </section>

        {/* 4 & 5. Problem & Solution - 16:8 Visual + Card */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-4 items-stretch">
          <Reveal className="h-full">
            <div className="relative h-full min-h-[400px] rounded-[3rem] overflow-hidden border border-white/10 bg-[#1a1a1a] shadow-2xl">
              <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <img
                src={project.gallery?.[1] || project.image}
                className="relative z-10 w-full h-full object-cover transition-all duration-700 hover:scale-105"
                alt="Challenge Visual"
              />
            </div>
          </Reveal>
          <Reveal className="h-full">
            <div className="h-full p-10 md:p-14 bg-[#1a1a1a] border border-white/5 rounded-[3rem] shadow-2xl flex flex-col justify-start space-y-16">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-[26px] font-black text-white font-lexend tracking-[0.1em] uppercase">The Problem</h3>
                  <div className="w-12 h-1 bg-zinc-800 rounded-full" />
                </div>
                <p className="text-base text-zinc-500 leading-relaxed font-medium line-clamp-3">
                  {project.problemStatement || "Manual workflows resulted in friction and overhead."}
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-[26px] font-black text-[#4ade80] font-lexend tracking-[0.1em] uppercase">The Solution</h3>
                  <div className="w-12 h-1 bg-[#4ade80]/40 rounded-full" />
                </div>
                <p className="text-base text-zinc-300 leading-relaxed font-bold line-clamp-4">
                  {project.solution || "Automated, scalable architecture optimized for high performance."}
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 6. Key Features (Highlights) - Card Grid */}
        <section className="space-y-16">
          <Reveal className="text-center space-y-4">
            <h2 className="text-[26px] font-black text-white font-lexend tracking-[0.1em] uppercase">
              Key Features
            </h2>
            <div className="w-16 h-1 bg-zinc-800 mx-auto rounded-full" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(project.features || ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6']).slice(0, 6).map((feature, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="h-full">
                <div className="h-full p-10 rounded-[2.5rem] bg-[#1a1a1a] border border-white/5 hover:border-white/10 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 group-hover:border-[#4ade80]/30 transition-colors">
                      <span className="text-[#4ade80] font-black text-xs">0{idx + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 font-lexend">{feature}</h3>
                  </div>
                  <p className="text-[12px] text-zinc-600 font-black uppercase tracking-widest mt-auto pt-4 border-t border-white/5">Core Highlight</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 7. Outcome & Impact Section - Large Card */}
        <Reveal>
          <section className="bg-[#1a1a1a] border border-white/10 rounded-[4rem] p-12 md:p-24 shadow-2xl relative overflow-hidden text-center">
            <div className="space-y-4 mb-16">
              <h2 className="text-[16px] font-black text-white font-lexend tracking-[0.1em] uppercase">Outcome & Impact</h2>
              <div className="w-16 h-1 bg-[#4ade80] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 items-center">
              {project.outcomes?.map((outcome, idx) => (
                <div key={idx} className="space-y-2 group">
                  <div className="text-[22px] font-black text-white font-lexend group-hover:text-[#4ade80] transition-colors">{outcome.split(' ')[0]}</div>
                  <div className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em]">{outcome.split(' ').slice(1).join(' ')}</div>
                </div>
              )) || (
                  <>
                    <div className="space-y-2">
                      <div className="text-1xl md:text-6xl font-black text-white font-lexend">60%</div>
                      <div className="text-[6px] font-black text-zinc-500 uppercase tracking-[0.4em]">Workload Reduction</div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-2xl md:text-6xl font-black text-white font-lexend">24/7</div>
                      <div className="text-[6px] font-black text-zinc-500 uppercase tracking-[0.4em]">Active Support</div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-2xl md:text-6xl font-black text-white font-lexend">Top</div>
                      <div className="text-[6px] font-black text-zinc-500 uppercase tracking-[0.4em]">Market Performance</div>
                    </div>
                  </>
                )}
            </div>
          </section>
        </Reveal>

        {/* 8. Target Users (Kon use karega?) - Tag Cloud Card */}
        <section className="space-y-12">
          <Reveal className="text-center space-y-4">
            <h2 className="text-[26px] font-black text-white font-lexend tracking-[0.1em] uppercase">Target Users</h2>
            <div className="w-16 h-1 bg-zinc-800 mx-auto rounded-full" />
          </Reveal>

          <Reveal className="max-w-4xl mx-auto">
            <div className="p-10 md:p-16 bg-[#1a1a1a] border border-white/5 rounded-[3rem] shadow-2xl flex flex-wrap justify-center gap-4">
              {(project.targetUsers || ['Small Businesses', 'Startups', 'Operations Managers', 'Support Teams']).map((user, idx) => (
                <div key={idx} className="px-8 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#4ade80]/30 transition-all cursor-default">
                  <span className="text-[12px] font-black text-zinc-400 uppercase tracking-[0.2em]">{user}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 9. Future Roadmap (Aagay kya?) - Timeline Cards */}
        <section className="max-w-5xl mx-auto space-y-16">
          <Reveal className="text-center space-y-4">
            <h2 className="text-[26px] font-black text-white font-lexend tracking-[0.3em] uppercase">Future Roadmap</h2>
            <p className="text-[16px] text-zinc-500 font-bold uppercase tracking-[0.4em]">Planned Evolution</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6">
            {(project.futureEnhancements || ['Feature A', 'Feature B', 'Feature C']).map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="h-full">
                <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-10 p-10 md:p-12 rounded-[3rem] bg-[#1a1a1a] border border-white/5 group hover:border-[#4ade80]/30 transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-zinc-800 group-hover:bg-[#4ade80] transition-all" />
                  <div className="text-3xl md:text-5xl font-black text-zinc-900 group-hover:text-[#4ade80]/10 transition-colors font-lexend shrink-0">0{idx + 1}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1 font-lexend">{item}</h4>
                    <span className="text-[20px] text-zinc-600 font-black uppercase tracking-widest block">Phase Milestone</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-[#4ade80] transition-colors" />
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
