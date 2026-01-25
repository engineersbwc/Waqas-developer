
import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../constants';

export const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 5000); // Slightly longer duration for a more relaxed feel

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0a0a0a]">
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;

        // Calculate parallax offset - move the image slower than the page
        // A factor of 0.2 means the image moves 20% of the scroll distance
        const parallaxY = scrollY * 0.15;

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            {/* Parallax & Ken Burns Wrapper */}
            <div
              className={`w-full h-full transition-transform duration-[6000ms] ease-out ${isActive ? 'scale-110' : 'scale-105'
                }`}
              style={{
                transform: `translateY(${parallaxY}px) scale(${isActive ? 1.1 : 1.05})`,
                // Ensure the transform transition only applies to scale, not translate to keep parallax smooth
                transitionProperty: 'opacity, scale',
              }}
            >
              <img
                src={slide.url}
                alt={slide.title}
                // We use a larger height and object-cover to allow room for vertical translation
                className="w-full h-[120%] -top-[10%] relative object-cover"
              />
            </div>

            {/* Overlay with staggered text animation */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-12 text-left">
              <div className={`transition-all duration-1000 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}>
                <h3 className="text-2xl md:text-4xl font-black text-white mb-2 md:mb-3 tracking-tight uppercase leading-none">
                  {slide.title}
                </h3>
              </div>
              <div className={`transition-all duration-1000 delay-500 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                <p className="text-[#f5ba41] text-sm md:text-base font-bold uppercase tracking-[0.2em] opacity-90">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Dots - Glassmorphism style */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20 px-4 py-2 bg-black/20 backdrop-blur-md rounded-full border border-white/10">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex
              ? 'bg-[#f5ba41] w-8'
              : 'bg-white/20 hover:bg-white/50 w-2'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Branding Tag */}
      <div className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/10 flex items-center space-x-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#f5ba41] animate-pulse"></span>
        <span className="text-xs font-black text-white uppercase tracking-[0.25em]">
          Innovita Showcase {currentIndex + 1}
        </span>
      </div>
    </div>
  );
};
