
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
    <div className="relative w-full h-full overflow-hidden bg-[#3a3a3a]">
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
              {slide.type === 'video' ? (
                <video
                  src={slide.url}
                  poster={slide.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={slide.url}
                  alt={slide.title || `Slide ${index}`}
                  className="w-full h-[120%] -top-[10%] relative object-cover"
                />
              )}
            </div>

            {/* Dark gradient overlay for better image depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 md:p-12 text-left" />
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
    </div>
  );
};
