
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
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 ${scrolled ? 'bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/5 shadow-2xl' : 'bg-transparent'
          }`}
      >
        {/* Logo Left - Stacks and hides on scroll */}
        <div
          className={`flex-shrink-0 relative z-50 flex flex-col items-center transition-all duration-500 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="text-xl md:text-2xl font-black font-lexend tracking-tighter text-[#F5F5F5] leading-none cursor-pointer">
            Innovita
          </div>
          <div className="text-[8px] md:text-[10px] font-black font-lexend tracking-[0.2em] text-[#4ade80] leading-none -mt-0.5 uppercase cursor-pointer">
            Soft
          </div>
        </div>

        {/* Centered Nav Pill - Hides on scroll */}
        <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 bg-[#111]/40 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-2 shadow-2xl items-center justify-center gap-2 transition-all duration-500 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="px-6 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all whitespace-nowrap text-center"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA (Desktop) - Always visible */}
        <div className="hidden md:block">
          <button
            onClick={onContactClick}
            className="flex items-center space-x-2 bg-white/5 border border-white/10 text-white px-6 py-2.5 rounded-xl transition-all font-medium text-sm hover:bg-white/10 hover:border-[#f5ba41]/40 active:scale-95"
          >
            <div className="w-2 h-2 rounded-full bg-[#f5ba41] animate-pulse shadow-[0_0_8px_#f5ba41]" />
            <span>Book a Call</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle - Hides on scroll */}
        <div className={`md:hidden relative z-50 transition-all duration-500 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile CTA Button - Shown on scroll ONLY on mobile */}
        <div className={`md:hidden transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <button
            onClick={(e) => onContactClick(e)}
            className="flex items-center space-x-2 bg-white/5 border border-white/10 text-white px-5 py-2 rounded-xl transition-all font-medium text-xs hover:bg-white/10"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#f5ba41] animate-pulse" />
            <span>Book a Call</span>
          </button>
        </div>

      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[9998] bg-[#121212]/95 backdrop-blur-xl pt-32 px-6 md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-[-10%]'
          }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="text-4xl font-bold text-white tracking-tight hover:text-[#f5ba41] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={(e) => { setIsOpen(false); onContactClick(e); }}
            className="flex items-center justify-center space-x-3 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg w-full max-w-xs mt-8 hover:bg-white/10 active:scale-95 transition-all"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#f5ba41] animate-pulse shadow-[0_0_8px_#f5ba41]/50" />
            <span>Book a Call</span>
          </button>
        </div>
      </div>
    </>
  );
};
