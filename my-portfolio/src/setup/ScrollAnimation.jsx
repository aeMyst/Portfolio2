import React, { useState, useEffect, useRef } from 'react';

const AnimatedSection = ({ children }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      className={`transition-transform duration-700 ease-in-out ${
        hasAnimated ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

