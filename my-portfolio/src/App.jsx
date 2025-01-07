import React from 'react';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import HistorySection from './pages/History';
import Projects from './pages/Projects'; 
import Header from './pages/Header';
import Footer from './pages/Footer';
import AnimatedSection from './setup/ScrollAnimation';
import StarsCanvas from './setup/Stars';

const App = () => {
  return (
    <div className="relative bg-custom-dark">
      {/*StarsCanvas as a background */}
      <StarsCanvas />
      
      <div className="relative flex flex-col min-h-screen z-[30]">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center">
          <div className="w-full max-w-8xl px-4 sm:px-6 md:px-10 lg:px-12"> 
            <div className="mb-16 sm:mb-20 md:mb-24"> 
              <AnimatedSection>
                <Home />
              </AnimatedSection>
            </div>
            <div className="mb-16 sm:mb-20 md:mb-24">
              <AnimatedSection>
                <Introduction />
              </AnimatedSection>
            </div>
            <div className="mb-16 sm:mb-20 md:mb-24">
              <AnimatedSection>
                <HistorySection />
              </AnimatedSection>
            </div>
            <div className="mb-16 sm:mb-20 md:mb-24">
              <AnimatedSection>
                <Projects />
              </AnimatedSection>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
