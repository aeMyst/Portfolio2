import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Project One', description: 'Description of Project One' },
    { title: 'Project Two', description: 'Description of Project Two' },
    { title: 'Project Three', description: 'Description of Project Three' },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-transparent text-gray-800 p-8 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
