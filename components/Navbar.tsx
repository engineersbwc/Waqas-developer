
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onContactClick: (e: React.MouseEvent) => void;
  onLinkClick?: (id: string) => void;
  visible?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, onLinkClick, visible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalIsVisible, setInternalIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isVisible = visible !== undefined ? visible : internalIsVisible;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setInternalIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setInternalIsVisible(false);
      } else {
        setInternalIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Our Work', id: 'work' },
    { name: 'About', id: 'about' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (onLinkClick) {
      onLinkClick(id);
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop/Tablet Top Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] hidden md:flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${!isVisible ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100 translate-y-0 bg-transparent'}`}
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
              className="px-3 md:px-6 py-1.5 text-[12px] md:text-sm font-bold text-zinc-300 hover:text-[#4ade80] rounded-full transition-all whitespace-nowrap text-center"
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

      {/* Mobile Header Bar */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-[9998] flex items-center justify-between px-20 py-4 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/5 transition-all duration-500 ${!isVisible ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'}`}>
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

        {/* Hamburger Menu Right */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-[10000]"
        >
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-[997] bg-[#1a1a1a] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-20 px-12 pb-2">
          {/* Menu Links */}
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="text-2xl font-black text-white hover:text-[#4ade80] transition-colors font-lexend uppercase tracking-tighter"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Menu Bottom Action */}
          <div className="mt-auto">
            <button
              onClick={(e) => {
                onContactClick(e);
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-4 bg-[#4ade80] text-black font-black text-lg rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-black animate-pulse" />
              <span>Book a Call</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
