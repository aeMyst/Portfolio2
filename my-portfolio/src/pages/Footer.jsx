import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-custom-dark text-white p-4">
        <div className="text-center">
          <p>© {new Date().getFullYear()} Peter Tran. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  