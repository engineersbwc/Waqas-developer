
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
        className={`fixed top-0 left-0 right-0 z-[9999] flex items-center justify-center px-6 md:px-12 py-6 md:py-8 bg-transparent transition-all duration-500 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        {/* Centered Nav Links */}
        <div className="flex bg-[#111]/40 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 shadow-2xl items-center justify-center gap-2 w-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className="px-4 md:px-8 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all whitespace-nowrap text-center"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};
