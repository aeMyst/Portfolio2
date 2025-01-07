import React from "react";
import "../elements/Projects.css"
import "../elements/MainCard.css"

const Projects = () => {
  const projectData = [
    {
      name: "Portfolio Website",
      description: "A portfolio website that includes information about me.",
      technologies: "React, TailwindCSS, HTML, CSS, Netlify",
      gif: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8a2da741492897.57a8a0b0747b4.gif",
      github: "https://github.com/username/petpals",
    },

    {
      name: "PetPals",
      description: "An anonymous blog platform with personalized AI-powered content.",
      technologies: "Firebase, React, JavaScript, Express.js, Gemini AI, Axios, Figma",
      gif: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8a2da741492897.57a8a0b0747b4.gif",
      github: "https://github.com/username/petpals",
    },
    {
      name: "RevRentals Motorcycle Marketplace",
      description: "A peer-to-peer marketplace revolutionizing motorcycle rentals.",
      technologies: "Flutter, Dart, Figma, Firebase, SQL",
      gif: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8a2da741492897.57a8a0b0747b4.gif",
      github: "https://github.com/username/revrentals",
    },
    {
      name: "Minigame Online Portal",
      description: "A multiplayer platform enabling seamless matchmaking.",
      technologies: "Java, JavaFX, CSS",
      gif: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8a2da741492897.57a8a0b0747b4.gif",
      github: "https://github.com/username/minigameportal",
    },
    {
      name: "ChefAI",
      description: "A smart recipe generator using OpenAI for personalized recipes.",
      technologies: "HTML, CSS, JavaScript, Python, Flask, SQLite, Figma, OpenAI",
      gif: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8a2da741492897.57a8a0b0747b4.gif",
      github: "https://github.com/username/chefai",
    },
    {
      name: "Celebrity Capability Data Survey",
      description: "A tool to calculate compatibility with celebrities and visualize results.",
      technologies: "Java, JavaFX, CSS",
      gif: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8a2da741492897.57a8a0b0747b4.gif",
      github: "https://github.com/aeMyst/Celebrity-Compatibility-Test",
    },
    {
      name: "Wordle Replica",
      description: "A console-based Python program replicating the popular Wordle game.",
      technologies: "Python",
      gif: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8a2da741492897.57a8a0b0747b4.gif",
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
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        PROJECTS
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="card medium-small p-6 flex flex-col items-center text-center"
          >
            {/* Project GIF */}
            <img
              src={project.gif}
              alt={`${project.name} functionality`}
              className="h-24 w-24 mb-6 rounded-md object-cover"
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

            {/* GitHub Link Button */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="Projectbutton absolute bottom-2"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
