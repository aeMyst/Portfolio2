import React, { useState } from "react";
import "../elements/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close the menu after navigation
  };

  return (
    <header className="text-white p-4 fixed top-0 w-full shadow-md z-10">
      <div className="body">

<div className="mobile-menu md:hidden flex items-center justify-between">
          <span className="text-lg font-bold">Peter Tran</span>
          <button
            className="hamburger-button"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>

        {/* Dropdown Menu for Mobile */}
        {menuOpen && (
          <div className="mobile-dropdown bg-transparent text-white flex flex-col p-4 space-y-2 absolute top-full left-0 w-full shadow-lg z-20">
            <button
              onClick={() => handleNavigation("home")}
              className="text-left px-4 py-2 hover:bg-gray-700 rounded"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className="text-left px-4 py-2 hover:bg-gray-700 rounded"
            >
              About Me
            </button>
            <button
              onClick={() => handleNavigation("projects")}
              className="text-left px-4 py-2 hover:bg-gray-700 rounded"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigation("history")}
              className="text-left px-4 py-2 hover:bg-gray-700 rounded"
            >
              Experience
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className="text-left px-4 py-2 hover:bg-gray-700 rounded"
            >
              Contact Me
            </button>
          </div>
        )}

        {/* Tabs for Desktop */}
        <div className={`tabs md:grid ${menuOpen ? "block" : "hidden"} md:flex`}>
          <input
            defaultChecked
            value="Home"
            name="navigation"
            id="home-tab"
            type="radio"
            className="input"
          />
          <label
            htmlFor="home-tab"
            className="label cursor-pointer"
            style={{ color: "white" }}
            onClick={() => handleNavigation("home")}
          >
            Home
          </label>

          <input
            value="About"
            name="navigation"
            id="about-tab"
            type="radio"
            className="input"
          />
          <label
            htmlFor="about-tab"
            className="label cursor-pointer"
            style={{ color: "white" }}
            onClick={() => handleNavigation("about")}
          >
            About Me
          </label>

          <input
            value="Projects"
            name="navigation"
            id="projects-tab"
            type="radio"
            className="input"
          />
          <label
            htmlFor="projects-tab"
            className="label cursor-pointer"
            style={{ color: "white" }}
            onClick={() => handleNavigation("projects")}
          >
            Projects
          </label>

          <input
            value="history"
            name="navigation"
            id="history-tab"
            type="radio"
            className="input"
          />
          <label
            htmlFor="history-tab"
            className="label cursor-pointer"
            style={{ color: "white" }}
            onClick={() => handleNavigation("history")}
          >
            Experience
          </label>

          <input
            value="contact"
            name="navigation"
            id="contact-tab"
            type="radio"
            className="input"
          />
          <label
            htmlFor="contact-tab"
            className="label cursor-pointer"
            style={{ color: "white" }}
            onClick={() => handleNavigation("contact")}
          >
            Contact Me
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
