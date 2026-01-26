
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
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-4 md:py-6 transition-all duration-300 ${scrolled ? 'bg-[#1a1a1a]/80 backdrop-blur-md py-4 shadow-lg' : 'bg-[#1a1a1a]/40 backdrop-blur-sm md:bg-transparent'
          }`}
      >
        {/* Logo Left */}
        <div className="flex-shrink-0">
          <div className="text-2xl font-black font-lexend tracking-tighter text-[#F5F5F5] text-center">
            Innovita<br /><span className="text-[8px] tracking-[0.1em] font-medium text-[#F5F5F5] block text-center -mt-2">SOFT</span>
          </div>
        </div>

        {/* Centered Nav Pill (Responsive) */}
        <div className="flex absolute left-1/2 -translate-x-1/2 bg-[#111] border border-white/10 rounded-lg md:rounded-xl px-1.5 md:px-2 py-1.5 md:py-2 shadow-xl max-w-[calc(100vw-3rem)] overflow-x-auto scrollbar-hide">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="px-3 md:px-6 py-1 md:py-2 text-[10px] md:text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-md md:rounded-lg transition-all whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:block">
          <button
            onClick={onContactClick}
            className="flex items-center space-x-2 bg-[#1a1a1a] hover:bg-[#222] border border-white/10 text-white px-5 py-3 rounded-xl transition-all font-medium text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse"></span>
            <span>Book a Call</span>
          </button>
        </div>

      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[90] bg-[#1a1a1a] pt-24 px-6 md:hidden">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="text-3xl font-bold text-white text-center"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={(e) => { setIsOpen(false); onContactClick(e); }}
              className="bg-[#f5ba41] text-black px-6 py-4 rounded-xl font-bold text-center mt-4"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </>
  );
};
