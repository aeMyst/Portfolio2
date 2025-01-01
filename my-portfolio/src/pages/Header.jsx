import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 fixed top-0 w-full shadow-md">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#history" className="hover:underline">History</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
