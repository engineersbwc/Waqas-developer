
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onContactClick: (e: React.MouseEvent) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Work', id: 'work' },
    { name: 'About', id: 'about' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop/Tablet Top Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] hidden md:flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 translate-y-0 bg-transparent'}`}
      >
        {/* Logo Left - Stacks and Centered */}
        <div
          className="flex-shrink-0 relative z-50 flex flex-col items-center group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="text-xl md:text-2xl font-black font-lexend tracking-tighter text-white leading-none">
            Innovita
          </div>
          <div className="text-[10px] md:text-[12px] font-black font-lexend tracking-[0.3em] text-[#4ade80] leading-none mt-0 uppercase">
            Soft
          </div>
        </div>

        {/* Centered Nav Pill */}
        <div className="flex bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 md:px-6 py-2 shadow-2xl items-center justify-center gap-1 md:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="px-3 md:px-6 py-1.5 text-[10px] md:text-sm font-bold text-zinc-300 hover:text-[#4ade80] rounded-full transition-all whitespace-nowrap text-center"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden lg:block">
          <button
            onClick={onContactClick}
            className="flex items-center space-x-2 bg-white/5 border border-white/10 text-white px-6 py-2.5 rounded-xl transition-all font-medium text-sm hover:bg-white/10 hover:border-[#4ade80]/40 active:scale-95"
          >
            <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse shadow-[0_0_8px_#4ade80]" />
            <span>Book a Call</span>
          </button>
        </div>

        <div className="lg:hidden w-[60px]" />
      </nav>

      {/* Mobile Main Bar (Bottom Navigation) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] w-[90%] max-w-[400px]">
        <nav className="flex items-center justify-around bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-2 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="flex flex-col items-center gap-1 px-3 py-1 text-[10px] font-bold text-zinc-400 hover:text-[#4ade80] transition-all"
            >
              <span className="uppercase tracking-widest">{link.name}</span>
              <div className="w-1 h-1 rounded-full bg-transparent group-hover:bg-[#4ade80]" />
            </a>
          ))}
          <button
            onClick={onContactClick}
            className="ml-2 bg-[#4ade80] text-black w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(74,222,128,0.3)] active:scale-90 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          </button>
        </nav>
      </div>

      {/* Mobile Top Brand Bar (Persistent) */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[9998] flex items-center justify-between px-6 py-4 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/5">
        <div
          className="flex flex-col items-start cursor-pointer transition-transform active:scale-95"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="text-lg font-black font-lexend tracking-tighter text-white leading-none">
            Innovita
          </div>
          <div className="text-[10px] font-black font-lexend tracking-[0.3em] text-[#4ade80] leading-none mt-0 uppercase">
            Soft
          </div>
        </div>
      </div>
    </>
  );
};
