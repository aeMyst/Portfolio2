import React, { useRef } from 'react';

const AnimatedSection = ({ children }) => {
  const sectionRef = useRef(null);

  return (
    <div ref={sectionRef} className="animated-section">
      {children}
    </div>
  );
};

export default AnimatedSection;
