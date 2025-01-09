import React, { useState } from 'react';
import '../elements/MainCard.css';
import '../elements/Taper.css';
import cardImage from '../assets/map.png';
import locationPin from '../assets/red-ping.webp';
import starIcon from '../assets/logos/star.svg';

import htmlIcon from '../assets/logos/html.svg';
import cssIcon from '../assets/logos/css.svg';
import javascriptIcon from '../assets/logos/javascript.svg';
import reactIcon from '../assets/logos/react.svg';
import sqlIcon from '../assets/logos/sql.svg';
import dartIcon from '../assets/logos/dart.svg';
import djangoIcon from '../assets/logos/django.svg';
import androidstudioIcon from '../assets/logos/androidstudio.svg';
import excelIcon from '../assets/logos/excel.svg';
import figmaIcon from '../assets/logos/figma.svg';
import firebaseIcon from '../assets/logos/firebase.svg';
import flutterIcon from '../assets/logos/flutter.svg';
import githubIcon from '../assets/logos/github.svg';
import gitlabIcon from '../assets/logos/gitlab.svg';
import intellijIcon from '../assets/logos/intellij.svg';
import javaIcon from '../assets/logos/java.svg';
import mysqlIcon from '../assets/logos/mysql.svg';
import photoshopIcon from '../assets/logos/photoshop.svg';
import pythonIcon from '../assets/logos/python.svg';
import tailwindIcon from '../assets/logos/tailwind.svg';
import vscodeIcon from '../assets/logos/vscode.svg';

const Introduction = () => {
  const [introClicked, setIntroClicked] = useState(false); 

  const tools = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'React', icon: reactIcon },
    { name: 'SQL', icon: sqlIcon },
    { name: 'Dart', icon: dartIcon },
    { name: 'Django', icon: djangoIcon },
    { name: 'Java', icon: javaIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'TailWindCSS', icon: tailwindIcon },
    { name: 'Flutter', icon: flutterIcon },
  ];

  const technologies = [
    { name: 'Android Studio', icon: androidstudioIcon },
    { name: 'Excel', icon: excelIcon },
    { name: 'Figma', icon: figmaIcon },
    { name: 'Firebase', icon: firebaseIcon },
    { name: 'Github', icon: githubIcon },
    { name: 'Gitlab', icon: gitlabIcon },
    { name: 'Intellij', icon: intellijIcon },
    { name: 'mySQL', icon: mysqlIcon },
    { name: 'Photoshop', icon: photoshopIcon },
    { name: 'vsCode', icon: vscodeIcon },
  ];

  const hobbies = [
    { name: 'Gaming', description: '🕹️' },
    { name: 'Keyboards', description: '⌨️' },
    { name: 'Snowboarding', description: '🏂' },
    { name: 'Motorcycling', description: '🏍️' },
    { name: 'Fashion', description: '👔' },
    { name: 'Food', description: '🥡' },
    { name: 'Guitar', description: '🎸' },
  ];

  const tapeItems = [...tools, ...tools];
  const tapeReverse = [...technologies, ...technologies];

  const [isIntroExpanded, setIsIntroExpanded] = useState(false);

  const toggleIntroExpand = () => {
    setIsIntroExpanded((prev) => !prev);
    setIntroClicked(true); 
  };

  return (
    <section
      id="about"
      className="min-h-screen p-8 bg-transparent bg-custom-dark font-[Poppins]"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">ABOUT ME</h2>
      <div className="cards-container">
        {/* Card 1 - Introduction */}
        <div className="card small introduction-card relative" onClick={toggleIntroExpand}>
          {/* "Click Me" Prompt */}
          {!introClicked && (
            <div
              className="absolute bottom-4 left-4 bg-transparent text-white font-bold text-xs px-2 py-1 rounded animate-pulse transition-opacity duration-500"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Click Me
            </div>
          )}

          <h3 className="title-with-icon">
            <img src={starIcon} alt="Star Icon" className="section-icon" />
            Introduction
          </h3>
          <p>
            My name is Peter Tran, and I am a Computer Science student at the University of Calgary. 
            I am passionate about coding, databases, and transforming ideas into reality. 
            I am actively seeking CO-OP opportunities to apply my skills and contribute to solving real-world problems.
          </p>

          {/* Show extra content only if expanded */}
          <div className={`expandable-content ${isIntroExpanded ? 'expanded' : ''}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        {/* Card 2 - Skillsets */}
        <div className="card skillset">
          <h3 className="title-with-icon">
            <img src={starIcon} alt="Star Icon" className="section-icon" />
            Skillsets
          </h3>
          <div className="tape-container">
            <div className="tape">
              {tapeItems.map((tech, index) => (
                <div key={index} className="tape-item">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    className="tech-icon"
                  />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
            <div className="tape reverse">
              {tapeReverse.map((tech, index) => (
                <div key={index} className="tape-item">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    className="tech-icon"
                  />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3 - Hobbies */}
        <div className="card medium">
          <h3 className="title-with-icon">
            <img src={starIcon} alt="Star Icon" className="section-icon" />
            Hobbies
          </h3>
          <div className="hobbies-container">
            <div className="hobbies-card">
              {hobbies.map((hobby, index) => (
                <div key={index} className="hobby-item">
                  <p>
                    {hobby.name}
                    {hobby.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 4 - Map */}
        <div className="card large map-container">
          <img src={cardImage} alt="Map" className="map-image" />
          <img src={locationPin} alt="Location Pin" className="location-pin" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
