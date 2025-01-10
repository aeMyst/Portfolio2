import React from "react";
import "../elements/Projects.css"
import "../elements/MainCard.css"

import portfolioImg from "../assets/projects/portfolio.png";
import petPalsImg from "../assets/projects/petpals.png";
import revRentalsImg from "../assets/projects/revrentals.png";
import gamePortalImg from "../assets/projects/gameportal.png";
import chefaiImg from "../assets/projects/chefai.png";
import testappImg from "../assets/projects/testapp.png";
import wordleImg from "../assets/projects/wordle.png";

const Projects = () => {
  const projectData = [
    {
      name: "Portfolio Website",
      description: "A personal portfolio site showcasing my background. It includes my professional history, past projects, skill set, and hobbies, plus a Contact Me page that uses EmailJS to send messages directly to my inbox with ease and security.",
      technologies: "Vite, React, TailwindCSS, HTML, CSS, EmailJS, Netlify",
      gif: portfolioImg,
      github: "https://github.com/aeMyst/Portfolio2",
    },

    {
      name: "PetPals",
      description: "An anonymous blogging platform featuring personalized AI-driven content. Users can post anonymously to a public feed, enabling readers to connect and share support. Meanwhile, the user experience is gamified by letting users feed and customize a virtual pet.",
      technologies: "Firebase, React, JavaScript, Express.js, Gemini AI, Axios, Figma",
      gif: petPalsImg,
      github: "https://github.com/aeMyst/PetPals",
    },
    {
      name: "RevRentals Motorcycle Marketplace",
      description: "A mobile-focused, peer-to-peer marketplace for renting motorcycles. Users can browse specific dates or post their own listings, complete with verified service history. A built-in filter streamlines database searches. The platform also includes administrative controls.",
      technologies: "Flutter, Dart, Figma, Django, Python, SQL, mySQL, Android Studio",
      gif:  revRentalsImg,
      github: "https://github.com/aeMyst/RevRentals",
    },
    {
      name: "Minigame Online Portal",
      description: "A multiplayer platform that simulates genuine matchmaking. It features an integrated chat channel, a leaderboard, a profile statistics module, and a help section, all functioning seamlessly without relying on any external database service for data storage.",
      technologies: "Java, JavaFX, CSS",
      gif: gamePortalImg,
      github: "https://github.com/aeMyst/Minigame-Portal",
    },
    {
      name: "ChefAI",
      description: "A recipe generator powered by OpenAI that provides tailored meal ideas in real time. Users supply their pantry or fridge items, enabling the system to highlight soon-to-expire ingredients and reduce household waste by automatically generating relevant recipes.",
      technologies: "HTML, CSS, JavaScript, Python, Flask, SQLite, Figma, OpenAI",
      gif: chefaiImg,
      github: "https://github.com/aeMyst/ai-chef",
    },
    {
      name: "Celebrity Capability Data Survey",
      description: "A compatibility calculator with celebrities that visualizes results through charts. Users complete a quick 2-minute quiz, and the system analyzes their answers to determine which celebrity they align with the most, presenting engaging, data-driven insights.",
      technologies: "Java, JavaFX, CSS",
      gif: testappImg,
      github: "https://github.com/aeMyst/Celebrity-Compatibility-Test",
    },
    {
      name: "Wordle Replica",
      description: "A console-based Python program that replicates the Wordle game experience. The app selects a 5-letter word from a database of 1,000 words, allowing users to guess the word with accurate color feedback for each letter, just like the original Wordle.",
      technologies: "Python",
      gif: wordleImg,
      github: "https://github.com/aeMyst/Wordle",
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen bg-transparent flex flex-col items-center justify-center px-6 py-10"
    >
      {/* Section Title */}
      <h1
        className="text-4xl font-bold text-white mb-10 font-poppins"
        style={{ fontFamily: "Poppins, sans-serif" } }
      >
        PROJECTS
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="card medium-small p-4 sm:p-6 md:p-8 flex flex-col items-center text-center"
            style={{ minHeight: '320px', maxHeight: 'auto' }}
          >
            {/* Project GIF */}
            <img
              src={project.gif}
              alt={`${project.name} functionality`}
              className="w-72 h-72 mb-6 object-fill 
             border border-black rounded-md"
            />

            {/* Project Name */}
            <h3 className="text-xl font-bold text-white mb-4">{project.name}</h3>

            {/* Project Technologies */}
            <p className="text-sm text-gray-400 italic mb-4">
              {project.technologies}
            </p>

            {/* Project Description */}
            <p className="text-sm text-gray-300 mb-6">
              {project.description}
            </p>

            <div className="flex justify-center items-center space-x-4">
              {/* GitHub Link Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="Projectbutton"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
