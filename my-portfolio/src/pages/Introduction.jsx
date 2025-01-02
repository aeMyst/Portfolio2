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

const Introduction = () => {
  const technologies = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: javascriptIcon },
    { name: 'React', icon: reactIcon },
    { name: 'SQL', icon: sqlIcon },
  ];

  const tapeItems = [...technologies, ...technologies];

  return (
    <section
      id="about"
      className="min-h-screen p-8 bg-custom-dark font-[Poppins]"
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
          </div>
        </div>
        {/* Card 3 */}
        <div className="card medium">
        <h3 class="title-with-icon">
          <img src={starIcon} alt="Star Icon" class="section-icon" />
          Hobbies
        </h3>
          <p>Another example of a card description.</p>
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
