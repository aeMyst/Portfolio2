const Introduction = () => {
    const technologies = ['JavaScript', 'React', 'Node.js', 'Tailwind CSS', 'SQL'];
  
    return (
      <section id="about" className="min-h-screen p-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="mb-6">I am a passionate developer experienced in building web applications using modern technologies.</p>
        <h3 className="text-xl font-semibold mb-4">Technologies I've Used:</h3>
        <ul className="flex flex-wrap gap-4">
          {technologies.map((tech, index) => (
            <li key={index} className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg shadow-sm">
              {tech}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Introduction;
  