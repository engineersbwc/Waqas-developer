
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({ children, className = '', stagger = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it's visible, we can unobserve if we only want it to animate once
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const baseClass = stagger ? 'reveal-group' : 'reveal';

  return (
    <div
      ref={ref}
      className={`${baseClass} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
