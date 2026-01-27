
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

      <main className="max-w-6xl mx-auto px-6 pt-20 pb-40">
        <Reveal>
          <div className="mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-[9px] font-black tracking-[0.3em] uppercase text-zinc-400 mb-6">
              {project.tag}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white font-lexend tracking-tighter leading-[0.9] mb-10">
              {project.title}
            </h1>
            <p className="text-xl md:text-3xl text-zinc-500 font-medium leading-tight max-w-4xl">
              {project.category}
            </p>
          </div>
        </Reveal>

        <Reveal className="mb-24">
          <div className="w-full aspect-video rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10">
            <img src={project.image} className="w-full h-full object-cover" alt={project.title} />
          </div>
        </Reveal>

        {project.gallery && project.gallery.length > 0 && (
          <Reveal className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="w-full aspect-video rounded-[2rem] overflow-hidden border border-zinc-100 shadow-sm first:md:col-span-2 first:aspect-[21/9]">
                  <img src={img} className="w-full h-full object-cover" alt={`Gallery ${idx + 1}`} />
                </div>
              ))}
            </div>
          </Reveal>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-24">
            {/* Overview / Vision */}
            <section>
              <h2 className="text-3xl md:text-5xl font-black text-white font-lexend tracking-tighter mb-8">Project Overview</h2>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
                {project.vision}
              </p>
            </section>

            {/* Problem & Solution */}
            {(project.problemStatement || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {project.problemStatement && (
                  <section>
                    <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest mb-6">The Problem</h3>
                    <p className="text-zinc-700 font-medium leading-relaxed">{project.problemStatement}</p>
                  </section>
                )}
                {project.solution && (
                  <section>
                    <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest mb-6">The Solution</h3>
                    <p className="text-zinc-700 font-medium leading-relaxed">{project.solution}</p>
                  </section>
                )}
              </div>
            )}

            {/* Process Timeline */}
            {project.process && (
              <section className="mb-20">
                <h2 className="text-3xl md:text-5xl font-black text-white font-lexend tracking-tighter mb-12">Process Timeline</h2>
                <div className="space-y-8 relative pl-8 border-l-2 border-white/10">
                  {project.process.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute top-2 -left-[37px] w-4 h-4 rounded-full bg-[#f5ba41] border-4 border-[#121212] shadow-sm" />
                      <h3 className="text-xl font-bold text-white mb-2">{step.phase}</h3>
                      <p className="text-zinc-400 leading-relaxed font-medium">{step.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Features List */}
            {project.features && (
              <section>
                <h2 className="text-3xl md:text-5xl font-black text-white font-lexend tracking-tighter mb-12">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-4 p-6 rounded-3xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10">
                      <div className="w-2 h-2 rounded-full bg-[#f5ba41]" />
                      <span className="font-bold text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Impact Section */}
            {project.outcomes && project.outcomes.length > 0 && (
              <section className="bg-zinc-900 rounded-[3.5rem] p-12 md:p-20 text-white shadow-2xl">
                <h3 className="text-3xl font-black font-lexend mb-16 tracking-tight text-center">Outcome & Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                  {project.outcomes.map((outcome, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="text-4xl font-black text-[#f5ba41]">{outcome.split(' ')[0]}</div>
                      <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{outcome.split(' ').slice(1).join(' ')}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Target Users & Future */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {project.targetUsers && (
                <section>
                  <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest mb-6">Target Users</h3>
                  <ul className="space-y-3">
                    {project.targetUsers.map((user, idx) => (
                      <li key={idx} className="text-zinc-600 font-bold flex items-center space-x-2">
                        <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                        <span>{user}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {project.futureEnhancements && (
                <section>
                  <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest mb-6">Future Roadmap</h3>
                  <ul className="space-y-3">
                    {project.futureEnhancements.map((item, idx) => (
                      <li key={idx} className="text-zinc-600 font-bold flex items-center space-x-2">
                        <span className="w-1 h-1 bg-zinc-300 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* FAQ Section */}
            {project.faq && (
              <section className="pt-20 border-t border-white/10">
                <h2 className="text-3xl md:text-5xl font-black text-white font-lexend tracking-tighter mb-12">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 gap-6">
                  {project.faq.map((item, idx) => (
                    <div key={idx} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                      <h3 className="text-lg font-bold text-white mb-4">{item.question}</h3>
                      <p className="text-zinc-400 font-medium leading-relaxed">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white/5 rounded-[2.5rem] p-10 sticky top-32 border border-white/10">
              <h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] mb-12">Project Profile</h4>

              <div className="space-y-10">
                <div>
                  <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2">Partner</p>
                  <p className="text-white font-bold text-xl">{project.client || 'Confidential'}</p>
                </div>
                <div>
                  <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2">Expertise</p>
                  <p className="text-white font-bold text-lg leading-tight">{project.services?.join(', ')}</p>
                </div>
                {project.technologies && (
                  <div>
                    <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 border border-white/10 rounded-lg text-[10px] font-black text-white uppercase tracking-wider">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2">Duration</p>
                  <p className="text-white font-bold text-xl">{project.timeline}</p>
                </div>
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-16 w-full inline-flex items-center justify-center px-8 py-5 bg-[#f5ba41] text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-xl"
                >
                  Live Preview
                  <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
