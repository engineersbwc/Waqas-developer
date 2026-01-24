
import React, { useState, useEffect, useRef } from 'react';

interface NavbarProps {
  onContactClick: (e: React.MouseEvent) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, options);

    const sections = ['home', 'work', 'services', 'about'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.current?.observe(el);
    });

    return () => {
      observer.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Work', id: 'work' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const handleStartProject = (e: React.MouseEvent) => {
    setIsOpen(false); // Close menu first
    setTimeout(() => {
      onContactClick(e);
    }, 100);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-500 pointer-events-none ${
      scrolled ? 'pt-4' : 'pt-8'
    }`}>
      <nav className={`pointer-events-auto flex items-center justify-between px-4 md:px-8 py-3 rounded-full border border-white/10 bg-[#000000]/60 backdrop-blur-2xl transition-all duration-500 shadow-2xl ${
        scrolled ? 'w-[95%] md:w-fit min-w-[320px] md:min-w-[600px]' : 'w-[95%] md:w-fit md:min-w-[800px]'
      }`}>
        
        <div className="flex items-center mr-4 md:mr-10">
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="flex items-center group">
            <div className="text-xl md:text-2xl font-black font-lexend tracking-tighter text-white">
              Invt<span className="text-[#f5ba41]">.</span>
              <span className="hidden sm:inline-block text-[10px] ml-1 text-zinc-500 uppercase tracking-[0.2em] font-medium">Soft</span>
            </div>
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-8 mr-8">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`relative text-[10px] font-black tracking-[0.25em] uppercase transition-all duration-300 ${
                activeSection === link.id ? 'text-[#f5ba41]' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#f5ba41] shadow-[0_0_8px_rgba(245,186,65,0.8)]" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <button 
            onClick={handleStartProject}
            className="hidden sm:block bg-[#f5ba41] text-black px-6 py-2.5 rounded-full font-black text-[9px] tracking-widest hover:bg-white hover:scale-105 transition-all shadow-lg"
          >
            BOOK CALL
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 text-white bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div className={`lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-[90%] bg-[#000000]/95 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 mt-4 transition-all duration-500 ease-in-out pointer-events-auto ${
        isOpen ? 'max-h-[500px] opacity-100 py-10 shadow-2xl' : 'max-h-0 opacity-0 overflow-hidden invisible'
      }`}>
        <div className="px-10 flex flex-col space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`text-4xl font-black tracking-tighter transition-colors ${
                activeSection === link.id ? 'text-[#f5ba41]' : 'text-zinc-600 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t border-white/5">
            <button 
              onClick={handleStartProject}
              className="inline-block text-[#f5ba41] font-black text-xs tracking-widest border-b-2 border-[#f5ba41] pb-2 hover:text-white hover:border-white transition-all text-left w-full"
            >
              START A PROJECT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
