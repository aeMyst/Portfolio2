import React from 'react';
import '../elements/Contact.css';
import '../elements/MainCard.css';

const ContactMe = () => {
  return (
    <section className="min-h-screen bg-transparent text-white flex items-center justify-center p-8">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Rocket Container */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center" 
             style={{ transform: 'translate(-85px, -125px)' }}>
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

        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <div className="card contact">
            <h2 className="text-3xl font-bold mb-4 font-poppins">Contact Me</h2>
            <p className="mb-6 text-gray-300 font-poppins">
              Feel free to reach out to me via email or connect on social media!
            </p>
            <form className="space-y-4 w-full">
              <div>
                <label htmlFor="name" className="block text-gray-400 text-left font-poppins">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-md bg-gray-900 text-gray-300 border border-gray-700 focus:outline-none font-poppins"
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
                  className="w-full p-3 rounded-md bg-gray-900 text-gray-300 border border-gray-700 focus:outline-none font-poppins"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 text-left font-poppins">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 rounded-md bg-gray-900 text-gray-300 border border-gray-700 focus:outline-none font-poppins"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
