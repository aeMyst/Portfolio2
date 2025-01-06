import React from 'react';
import '../elements/History.css';

const History = () => {
  const history = [
    { year: '2023', detail: 'Built an e-commerce platform using React and Node.js' },
    { year: '2022', detail: 'Worked as a front-end developer at TechCorp' },
    { year: '2021', detail: 'Completed a certification in Full-Stack Development' },
  ];

  const timelineData = [
    {
      title: 'Server/Bartender',
      company: "Roy's Korean Kitchen",
      date: 'September 2024 - Present',
      description: 'Boosted sales by 10% through reporting, promotion analysis, and efficient guest planning.',
    },
    {
      title: 'Server',
      company: 'Baekjeong Korean BBQ House',
      date: 'June 2022 - February 2024',
      description: 'Ensured quality compliance and managed high-volume service, boosting efficiency and maintaining a 4.5-star rating.',
    },
    {
      title: 'Keyholder',
      company: 'Truedan (Jenjudan)',
      date: 'June 2021 - June 2022',
      description: 'Streamlined operations and ensured accurate cash handling, reducing shortages and expenses.',
    },
    {
      title: 'Customer Service Specialist',
      company: "McDonald's",
      date: 'June 2018 - June 2022',
      description: 'Boosted customer satisfaction, engagement, and repeat visits through effective communication and training.',
    },
  ];

  return (
    <div id="history" className="min-h-screen bg-custom-dark px-6 py-20">
      {/* Professional Timeline */}
      <section id="timeline" className="min-h-screen flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-10">EXPERIENCE</h2>
        <div className="relative w-full max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-white"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
            <div
            key={index}
            className={`relative flex ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            } items-center`}
          >
            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-2 border-custom-dark z-10"></div>
          
            {/* History Card */}
            <div className="HistoryCard w-[49%]">
              <div
                className={`${
                  index % 2 === 0 ? 'text-right' : 'text-left'
                }`}
              >
                <h3
                  className={`${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}
                >
                  {item.title}
                </h3>
                <p>{item.company}</p>
                <p>{item.date}</p>
                <p>{item.description}</p>
              </div>
            </div>
          </div>

            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
