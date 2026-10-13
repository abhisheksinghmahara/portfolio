import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/70 backdrop-blur-md border-t border-gray-200 py-6 mt-auto w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        
        <p className="text-gray-600 text-sm font-medium">
          &copy; {new Date().getFullYear()} Abhishek Mahara. All rights reserved.
        </p>
        
        <p className="text-gray-500 text-sm font-medium">
          Built with <span className="text-blue-500 font-bold">React</span> & <span className="text-blue-500 font-bold">Tailwind</span>
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;