import React from 'react';
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

  const tapeItems = [...tools, ...tools];
  const tapeReverse = [...technologies, ...technologies];

  return (
    <section
      id="about"
      className="min-h-screen p-8 bg-custom-dark bg-custom-dark font-[Poppins]"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">ABOUT ME</h2>
      <div className="cards-container">
        {/* Card 1 */}
        <div className="card small">
        <h3 class="title-with-icon">
          <img src={starIcon} alt="Star Icon" class="section-icon" />
          Introduction
        </h3>
          <p>
            My name is Peter Tran, and I am a Computer Science student at the University of Calgary. 
            I am passionate about coding, databases, and transforming ideas into reality. 
            I am actively seeking CO-OP opportunities to apply my skills and contribute to solving real-world problems.
          </p>
        </div>
        {/* Card 2 */}
        <div className="card skillset">
        <h3 class="title-with-icon">
          <img src={starIcon} alt="Star Icon" class="section-icon" />
          Skillsets
        </h3>
          <div className="tape-container">
            {/* Original Tape */}
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
            {/* Reverse Tape */}
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
        {/* Card 3 */}
        <div className="card medium">
        <h3 class="title-with-icon">
          <img src={starIcon} alt="Star Icon" class="section-icon" />
          Hobbies
        </h3>
        </div>
        {/* Card 4 */}
        <div className="card large map-container">
          <img src={cardImage} alt="Map" className="map-image" />
          <img src={locationPin} alt="Location Pin" className="location-pin" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
