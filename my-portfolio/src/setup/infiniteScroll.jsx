import React from 'react';
import Home from '../pages/Home';
import Introduction from '../pages/Introduction';
import HistorySection from '../pages/History';

const InfiniteScroll = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Home />
      <Introduction />
      <HistorySection />
    </div>
  );
};

export default InfiniteScroll;
