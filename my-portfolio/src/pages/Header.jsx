import React from 'react';
import '../elements/Header.css';

const Header = () => {
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-custom-dark text-white p-4 fixed top-0 w-full shadow-md z-10">
      <div className="body">
        <div className="tabs">
          {/* Home Tab */}
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
            onClick={() => handleNavigation('home')}
          >
            Home
          </label>

          {/* About Me Tab */}
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
            onClick={() => handleNavigation('about')}
          >
            About Me
          </label>

          {/* Projects Tab */}
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
            onClick={() => handleNavigation('projects')}
          >
            Projects
          </label>
          {/* History Tab */}
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
            onClick={() => handleNavigation('history')}
          >
            Experience
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;