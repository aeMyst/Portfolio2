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
      moreDetails: 'Compiled end-of-day reports and analyzed relevant sales data from 25+ daily transactions, applying attention to detail and organizational skills to deliver concise summaries to the supervisor. Collaborated with coworkers to gather insights on special feature items, leveraging communication and analytical skills to drive a 10% increase in sales. Counted headcounts for up to 100 expected customers and reorganized tables and settings, demonstrating planning and adaptability to ensure an efficient guest experience upon arrival.',
    },
    {
      title: 'Server',
      company: 'Baekjeong Korean BBQ House',
      date: 'June 2022 - February 2024',
      moreDetails: 'Performed necessary opening and closing duties, organizing setups and documenting specific tasks for the next shift, allowing smooth operations and reducing setup times by 20% for the following day. Conducted quality checks on 50+ products and services per shift, ensuring compliance with company standards and consistency, contributing to a 4.5-star rating on Google reviews. Managed up to 30 tables per shift, processing over 100 orders daily while coordinating with kitchen staff to ensure timely service and exceptional dining experiences.',
    },
    {
      title: 'Keyholder',
      company: 'Truedan (Jenjudan)',
      date: 'June 2021 - June 2022',
      moreDetails: 'Managed restocking of inventory, tracking product levels to maintain optimal stock, reducing shortages by 10%, and ensuring high-demand items were always available. Independently managed the store during shifts, overseeing operations, addressing customer inquiries, and maintaining smooth service, while reducing operational expenses by 50% per shift. Entrusted with store keys and cash management, performing opening and closing duties, balancing registers with 99% accuracy, and securely handling over $250 in daily transactions.',
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
    <div id="history" className="min-h-screen bg-transparent px-6 py-20">
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
                      className={`HistoryCard-content mt-4 text-sm text-white text-left transition-all duration-500 ${
                        expandedCard === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                      }`}
                    >
                      {item.moreDetails.split('. ').map((sentence, idx) => (
                        <p key={idx} className="more-details-line">
                          <strong>• </strong>
                            {sentence.trim()}.
                            <br />
                            <br />
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
