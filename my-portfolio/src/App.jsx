import React from 'react';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import HistorySection from './pages/History';
import Projects from './pages/Projects'; 
import Header from './pages/Header';
import Footer from './pages/Footer';
import AnimatedSection from './setup/ScrollAnimation';

const App = () => {
  return (
    <div className="bg-custom-dark">
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center">
          <div className="w-full max-w-8xl px-10"> {/* Increased width and padding */}
            <div className="mb-24"> {/* Increased bottom margin for spacing */}
              <AnimatedSection>
                <Home />
              </AnimatedSection>
            </div>
            <div className="mb-24">
              <AnimatedSection>
                <Introduction />
              </AnimatedSection>
            </div>
            <div className="mb-24">
              <AnimatedSection>
                <HistorySection />
              </AnimatedSection>
            </div>
            <div className="mb-24">
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
