import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import InfiniteScroll from './setup/infiniteScroll'; 
import Header from './pages/Header';
import Footer from './pages/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Control for the loading screen
  const [showMainContent, setShowMainContent] = useState(false); // Control for the main content

  useEffect(() => {
    // Simulate a loading delay for the dots animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000); // Adjust delay as needed (e.g., 3 seconds)
    return () => clearTimeout(timer);
  }, []);

  // Handle button click to show main content
  const handleEntry = () => {
    setShowMainContent(true);
  };

  return (
    <div>
      {/* Show the loading screen with the button until the user clicks the button */}
      {!showMainContent ? (
        <LoadingScreen
          isLoading={isLoading}
          onEntry={handleEntry}
        />
      ) : (
        <>
          <Header />
          <InfiniteScroll />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
