const History = () => {
    const history = [
      { year: '2023', detail: 'Built an e-commerce platform using React and Node.js' },
      { year: '2022', detail: 'Worked as a front-end developer at TechCorp' },
      { year: '2021', detail: 'Completed a certification in Full-Stack Development' },
    ];
  
    return (
      <section id="history" className="min-h-screen p-8 bg-custom-dark">
        <h2 className="text-3xl font-bold mb-4">Professional History</h2>
        <ul className="space-y-4">
          {history.map((item, index) => (
            <li key={index} className="p-4 border rounded-lg shadow-md">
              <strong>{item.year}</strong>: {item.detail}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default History;
  