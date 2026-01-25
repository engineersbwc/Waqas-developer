
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
    { name: 'Portfolio', id: 'work' },
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
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-4 md:py-6 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg' : 'bg-black/40 backdrop-blur-sm md:bg-transparent'
          }`}
      >
        {/* Logo Left */}
        <div className="flex-shrink-0">
          <div className="text-2xl font-black font-lexend tracking-tighter text-white">
            Innovita<br /><span className="text-[10px] tracking-[0.2em] font-medium text-zinc-400 block -mt-1">SOFT</span>
          </div>
        </div>

        {/* Centered Nav Pill (Desktop) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-[#111] border border-white/10 rounded-xl px-2 py-2 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="px-6 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[90] bg-black pt-24 px-6 md:hidden">
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
