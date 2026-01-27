
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
        className={`fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 translate-y-0 bg-transparent'}`}
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

        {/* Right CTA (Desktop Only for balance) */}
        <div className="hidden lg:block">
          <button
            onClick={onContactClick}
            className="flex items-center space-x-2 bg-white/5 border border-white/10 text-white px-6 py-2.5 rounded-xl transition-all font-medium text-sm hover:bg-white/10 hover:border-[#4ade80]/40 active:scale-95"
          >
            <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse shadow-[0_0_8px_#4ade80]" />
            <span>Book a Call</span>
          </button>
        </div>

        {/* Mobile Spacer to maintain center distribution if needed, or hide on mobile if you want pill right-aligned */}
        <div className="lg:hidden w-[60px]" /> {/* Balancing the logo width */}

      </nav>
    </>
  );
};
