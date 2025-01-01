const Footer = () => {
    return (
      <footer className="bg-custom-dark text-white p-4">
        <div className="text-center">
          <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          <a href="#home" className="text-white hover:underline">Back to top</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  