import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/userPortfolioData'; // Import your data

function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();

  // Close the mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Updated routes to include Experience and map to /home
  const routes = [
    { path: '/home', label: 'Home' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contacts', label: 'Contact' }
  ];

  const navLinks = (
    <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 mt-4 lg:mt-0 p-4 lg:p-0">
      {routes.map((route, index) => {
        const isActive = location.pathname.startsWith(route.path);
        
        return (
          <li key={index}>
            <Link
              to={route.path}
              onClick={() => setOpenNav(false)} // Closes menu on mobile click
              className={`relative font-medium text-lg transition-colors duration-300 ${
                isActive ? 'text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              {route.label}
              
              {/* Active Link Underline Indicator */}
              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-blue-600 rounded-full hidden lg:block"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          </li>
        );
      })}
      
      {/* RESUME BUTTON (Injected from data file) */}
      <li className="mt-2 lg:mt-0 lg:ml-2">
        <a 
          href={portfolioData.personalInfo.resumeLink} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={() => setOpenNav(false)}
          className="inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-gray-900 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          Resume
        </a>
      </li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
        
        {/* Logo */}
        <Link
          to="/home"
          onClick={() => setOpenNav(false)}
          style={{ fontFamily: "Protest Guerrilla, sans-serif" }}
          className="text-3xl md:text-4xl font-bold text-gray-900 tracking-wide hover:text-blue-600 transition-colors duration-300"
        >
          Abhishek Mahara
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          {navLinks}
        </div>
        
        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
          onClick={() => setOpenNav(!openNav)}
          aria-label="Toggle navigation"
        >
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation Dropdown with Framer Motion */}
      <AnimatePresence>
        {openNav && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg"
          >
            {navLinks}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;