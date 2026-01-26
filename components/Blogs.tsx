
import React from 'react';
import { BLOGS } from '../constants';
import { Reveal } from './Reveal';

export const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="py-24 md:py-32 px-6 bg-black relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <Reveal className="mb-20">
          <p className="text-zinc-500 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 font-inter">Insights & Expertise</p>
          <h2 className="text-4xl md:text-6xl font-black text-white font-lexend tracking-tighter uppercase leading-none">Latest Blogs</h2>
        </Reveal>

        <div className="space-y-6">
          {BLOGS.map((blog) => (
            <Reveal key={blog.id} className="group">
              <a href="#" className="block p-8 md:p-10 border border-white/5 rounded-[2rem] bg-[#0a0a0a] transition-all duration-500 hover:border-white/20 hover:scale-[1.01] hover:shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex-1">
                    <span className="text-[9px] font-black text-zinc-600 tracking-widest uppercase mb-3 block font-inter">{blog.date}</span>
                    <h3 className="text-xl md:text-2xl font-black text-white font-lexend group-hover:text-zinc-300 transition-colors mb-4 leading-tight">
                      {blog.title}
                    </h3>
                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-medium line-clamp-2 md:line-clamp-none">{blog.excerpt}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex-shrink-0 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-transparent transition-all duration-500">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
