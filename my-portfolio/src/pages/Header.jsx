import React from 'react';

const Header = () => {
  return (
    <header className="bg-red text-white p-4 fixed top-0 w-full shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Home Button */}
        <a href="#home" className="text-xl font-bold hover:underline">
          Home
        </a>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#history" className="hover:underline">History</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
