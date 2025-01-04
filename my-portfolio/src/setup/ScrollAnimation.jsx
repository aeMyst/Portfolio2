import React, { useRef } from 'react';
import '../elements/ScrollAnimation.css'; 

const AnimatedSection = ({ children }) => {
  const sectionRef = useRef(null);

  return (
    <div ref={sectionRef} className="animated-section">
      {children}
    </div>
  );
};

export default AnimatedSection;
