
import React from 'react';

export const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <footer className="bg-[#1a1a1a] pt-24 pb-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <div className="text-3xl font-black font-lexend tracking-tighter text-white mb-6">
              Invt<span className="text-[#f5ba41]">.</span>
              <div className="text-[12px] leading-tight text-zinc-500 uppercase tracking-[0.2em]">Soft</div>
            </div>
            <p className="text-zinc-500 text-lg leading-relaxed mb-8 max-w-sm">
              Ready to accelerate your startup? Let's build something extraordinary together.
            </p>

            <div className="flex flex-col space-y-4">
              <button
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="group relative bg-[#f5ba41] text-black font-black py-5 px-8 rounded-2xl hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(245,186,65,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3 text-sm tracking-widest uppercase">
                  <span>Start a Project</span>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="transform group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>

            <div className="mt-10">
              <a href="mailto:contact@innovitasoft.com" className="text-zinc-400 hover:text-[#f5ba41] transition-colors text-lg font-medium underline underline-offset-8 decoration-zinc-800 hover:decoration-[#f5ba41]/40">
                contact@innovitasoft.com
              </a>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-8">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs opacity-50">Company</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, 'home')}
                  className="text-zinc-500 hover:text-white transition-colors text-sm font-bold tracking-tight"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => handleLinkClick(e, 'work')}
                  className="text-zinc-500 hover:text-white transition-colors text-sm font-bold tracking-tight"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="text-zinc-500 hover:text-white transition-colors text-sm font-bold tracking-tight"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, 'about')}
                  className="text-zinc-500 hover:text-white transition-colors text-sm font-bold tracking-tight"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs opacity-50">Social</h4>
            <ul className="space-y-4">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold tracking-tight">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold tracking-tight">LinkedIn</a></li>
              <li><a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm font-bold tracking-tight">Medium</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[10px] font-black uppercase tracking-widest">
          <p>© 2024 Invt Soft. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
