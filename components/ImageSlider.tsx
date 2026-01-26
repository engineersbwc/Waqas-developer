
import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../constants';

export const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#3a3a3a]">
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={index}
            className="absolute inset-0"
          >
            {/* Wrapper without Ken Burns/Parallax */}
            <div
              className="w-full h-full"
            >
              {slide.type === 'video' ? (
                <video
                  src={slide.url}
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


    </div>
  );
};
