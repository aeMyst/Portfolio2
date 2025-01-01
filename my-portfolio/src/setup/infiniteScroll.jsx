import React, { useState, useEffect } from 'react';
import Home from '../pages/Home';
import Introduction from '../pages/Introduction';
import HistorySection from '../pages/History';

const InfiniteScroll = () => {
  const [sections, setSections] = useState([<Home key="home" />, <Introduction key="intro" />]);

  const loadMoreSections = () => {
    const newSection = (
      <HistorySection key={`history-${sections.length}`} />
    );
    setSections((prevSections) => [...prevSections, newSection]);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      loadMoreSections();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return <div>{sections}</div>;
};

export default InfiniteScroll;
