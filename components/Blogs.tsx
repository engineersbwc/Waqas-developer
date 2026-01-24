
import React from 'react';
import { BLOGS } from '../constants';
import { Reveal } from './Reveal';

export const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <Reveal className="mb-20">
          <p className="text-[#f5ba41] font-bold text-xs uppercase tracking-[0.4em] mb-4">Insights</p>
          <h2 className="text-4xl md:text-6xl font-black text-white font-lexend tracking-tighter">Latest Blogs</h2>
        </Reveal>

        <div className="space-y-12">
          {BLOGS.map((blog) => (
            <Reveal key={blog.id} className="group">
              <a href="#" className="block py-10 border-b border-white/5 transition-colors hover:border-[#f5ba41]/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-[10px] font-black text-zinc-600 tracking-widest uppercase mb-2 block">{blog.date}</span>
                    <h3 className="text-2xl md:text-3xl font-black text-white font-lexend group-hover:text-[#f5ba41] transition-colors mb-3">
                      {blog.title}
                    </h3>
                    <p className="text-zinc-500 text-lg leading-relaxed">{blog.excerpt}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-[#f5ba41] group-hover:text-black group-hover:border-transparent transition-all">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
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
