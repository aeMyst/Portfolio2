import React from 'react';
import '../elements/LoadingBar.css';
import '../elements/LoadingButton.css';

const LoadingScreen = ({ isLoading, onEntry }) => {
  return (
    <section className="dots-container">
      {/* Loading Dots */}
      <div className={`dots-wrapper ${isLoading ? 'fade-in' : 'fade-out'}`}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      {/* Animated Button */}
      <div className={`button-wrapper ${!isLoading ? 'fade-in' : 'fade-out'}`}>
        <button className="animated-button" onClick={onEntry}>
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">E N T R Y</span>
          <span className="circle"></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default LoadingScreen;
