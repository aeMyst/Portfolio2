import React, { useState, useEffect } from 'react';
import '../elements/Contact.css';
import '../elements/MainCard.css';

import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isLargeScreen, setIsLargeScreen] = useState(true); 

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all fields.');
      return;
    }

    emailjs
      .send('service_3mkpoi5', 'template_cj2hwjb', formData, 'iOs1drhLW9QM6NDM_')
      .then(
        () => {
          setStatusMessage('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatusMessage('Failed to send message. Please try again.');
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-transparent text-white flex items-center justify-center p-8">
      <div
        className={`w-full max-w-6xl flex items-center justify-between gap-8 ${
          isLargeScreen ? 'lg:flex-row' : 'flex-col justify-center'
        }`}
      >
        {/* Rocket Container */}
        {isLargeScreen && (
          <div
            className="relative w-full lg:w-1/2 flex justify-center items-center rocket-container"
            style={{ transform: 'translate(-85px, -125px)' }}
          >
            <div className="rocket">
              <div className="rocket-body">
                <div className="body"></div>
                <div className="fin fin-left"></div>
                <div className="fin fin-right"></div>
                <div className="window"></div>
              </div>
              <div className="exhaust-flame"></div>
              <ul className="exhaust-fumes">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <div className="card contact">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Contact Me</h2>
            <p className="mb-6 text-gray-300 font-poppins">
              Feel free to reach out to me via email or connect on social media!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div>
                <label htmlFor="name" className="block text-gray-400 text-left font-poppins">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md bg-white text-gray-900 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 text-left font-poppins">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 rounded-md bg-white text-gray-900 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 text-left font-poppins">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full p-3 rounded-md bg-white text-gray-900 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 font-poppins"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-transparent border border-transparent relative overflow-hidden text-white font-bold py-3 rounded-lg font-poppins hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
            {statusMessage && <p className="mt-4 text-center">{statusMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
