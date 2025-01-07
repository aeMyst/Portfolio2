import React, { useState } from 'react';
import '../elements/History.css';

const History = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [clickedCards, setClickedCards] = useState(new Set()); // Track clicked cards

  const timelineData = [
    {
      title: 'Server/Bartender',
      company: "Roy's Korean Kitchen",
      date: 'September 2024 - Present',
      moreDetails: 'Boosted sales by 10% through reporting, promotion analysis, and efficient guest planning. Managed high-volume guest services and implemented strategies to improve overall customer satisfaction.',
    },
    {
      title: 'Server',
      company: 'Baekjeong Korean BBQ House',
      date: 'June 2022 - February 2024',
      moreDetails: 'Ensured quality compliance and managed high-volume service, boosting efficiency and maintaining a 4.5-star rating. Collaborated with team members to deliver exceptional dining experiences during peak hours.',
    },
    {
      title: 'Keyholder',
      company: 'Truedan (Jenjudan)',
      date: 'June 2021 - June 2022',
      moreDetails: 'Streamlined operations and ensured accurate cash handling, reducing shortages and expenses. Trained new employees on operational protocols and customer service best practices.',
    },
    {
      title: 'Customer Service Specialist',
      company: "McDonald's",
      date: 'June 2018 - June 2022',
      moreDetails: 'Boosted customer satisfaction, engagement, and repeat visits through effective communication and training. Improved team efficiency by introducing a streamlined approach to handling large orders.',
    },
  ];

  const toggleCardExpansion = (index) => {
    setExpandedCard(expandedCard === index ? null : index);

    // Add the card index to the set of clicked cards
    setClickedCards((prevClickedCards) => {
      const updatedClickedCards = new Set(prevClickedCards);
      updatedClickedCards.add(index);
      return updatedClickedCards;
    });
  };

  return (
    <div id="history" className="min-h-screen bg-custom-dark px-6 py-20">
      <section id="timeline" className="min-h-screen flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-10">EXPERIENCE</h2>
        <div className="relative w-full max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-white"></div>

          {/* Timeline Items */}
          <div className="space-y-6">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } items-center`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-custom-dark z-10"></div>

                {/* History Card */}
                <div
                  className={`HistoryCard cursor-pointer transition-all duration-500 ${
                    expandedCard === index
                      ? index % 2 === 0
                        ? 'expanded-left'
                        : 'expanded-right'
                      : ''
                  }`}
                  onClick={() => toggleCardExpansion(index)}
                >
                  {/* Click Me Button */}
                  {!clickedCards.has(index) && (
                    <div
                      className={`click-me-button absolute top-4 ${
                        index % 2 === 0 ? 'left-4' : 'right-4'
                      } bg-transparent text-white font-bold text-xs px-2 py-1 rounded animate-pulse transition-opacity duration-500 ${
                        expandedCard === index ? 'opacity-0' : 'opacity-100'
                      }`}
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Click Me
                    </div>
                  )}

                  <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h3
                      className={`text-lg font-semibold ${
                        index % 2 === 0 ? 'text-right' : 'text-left'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`${
                        index % 2 === 0 ? 'text-right' : 'text-left'
                      }`}
                    >
                      {item.company}
                    </p>
                    <p
                      className={`${
                        index % 2 === 0 ? 'text-right' : 'text-left'
                      }`}
                    >
                      {item.date}
                    </p>
                    <div
                      className={`HistoryCard-content mt-4 text-sm text-gray-400 text-left transition-all duration-500 ${
                        expandedCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                      }`}
                    >
                      {item.moreDetails.split('. ').map((sentence, idx) => (
                        <p key={idx} className="more-details-line">
                          • {sentence.trim()}.
                        </p>
                      ))}
                    </div>
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
