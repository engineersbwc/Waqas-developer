
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
        className={`fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between px-6 md:px-12 py-4 md:py-6 transition-all duration-300 ${scrolled ? 'bg-transparent backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent backdrop-blur-md md:bg-transparent'
          }`}
      >
        {/* Logo Left */}
        <div className="flex-shrink-0 relative z-50">
          <div className="text-2xl font-black font-lexend tracking-tighter text-[#F5F5F5] text-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            Innovita<br /><span className="text-[8px] tracking-[0.1em] font-medium text-[#F5F5F5] block text-center -mt-2">SOFT</span>
          </div>
        </div>

        {/* Centered Nav Pill (Desktop Only) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-[#111] border border-white/10 rounded-2xl px-6 py-3 shadow-2xl items-center justify-center gap-2 w-auto min-w-[600px]">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="px-8 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all whitespace-nowrap text-center flex-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={onContactClick}
            className="flex items-center space-x-3 bg-[#1a1a1a] border border-[#4ade80]/30 text-white px-6 py-3 rounded-xl transition-all font-medium text-sm hover:bg-[#252525] hover:border-[#4ade80]/60 active:scale-95"
          >
            <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse shadow-[0_0_8px_#4ade80]" />
            <span>Book a Call</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden relative z-50">
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

      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[9998] bg-[#1a1a1a] pt-32 px-6 md:hidden transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="text-4xl font-bold text-white tracking-tight hover:text-zinc-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={(e) => { setIsOpen(false); onContactClick(e); }}
            className="flex items-center justify-center space-x-3 bg-[#1a1a1a] border border-[#4ade80]/30 text-white px-8 py-4 rounded-xl font-bold text-lg w-full max-w-xs mt-8 hover:bg-zinc-900 active:scale-95 transition-all"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80] animate-pulse shadow-[0_0_8px_#4ade80]/50" />
            <span>Book a Call</span>
          </button>
        </div>
      </div>
    </>
  );
};
