import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { portfolioData } from "../data/userPortfolioData"; // Import your centralized data

const Home = () => {
  return (
    // Main container: Stack vertically on mobile, side-by-side on large screens
    <div className="flex flex-col lg:flex-row items-center justify-center flex-grow w-full max-w-7xl mx-auto px-6 py-12 md:py-24 gap-12 lg:gap-20">
      
      {/* Left Column: Greeting & Titles */}
      <motion.div 
        className="flex-1 w-full text-center lg:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1
          style={{ fontFamily: "Playwrite CU, cursive" }}
          className="text-gray-500 text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4"
        >
          Welcome
        </h1>
        
        {/* Animated decorative line */}
        <motion.div 
          className="h-1 bg-blue-600 rounded-full mb-8 mx-auto lg:mx-0"
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <h2
          className="text-xl md:text-2xl text-gray-700 leading-relaxed"
          style={{ fontFamily: "Baskervville SC, system-ui" }}
        >
          Hello! It's me, <br />
          <span
            className="text-3xl md:text-4xl lg:text-5xl mt-2 block"
            style={{ fontFamily: "Bebas Neue, system-ui", color: "#2563eb" }}
          >
            {portfolioData.personalInfo.name},
          </span>
          <span className="mt-4 block text-gray-600">a Creative</span>
          <span
            className="text-3xl md:text-4xl lg:text-5xl block mt-1 tracking-wider uppercase"
            style={{ fontFamily: "Bebas Neue, system-ui", color: "#2563eb" }}
          >
            {portfolioData.personalInfo.tagline}.
          </span>
        </h2>
        
        {/* Dynamically injected hero description from data file */}
        <p 
          className="mt-6 text-gray-600 text-base md:text-lg max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed"
          dangerouslySetInnerHTML={{ __html: portfolioData.summary.heroDescription }}
        />

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
          
          {/* NEW: Download Resume Button */}
          <a 
            href={portfolioData.personalInfo.resumeLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 rounded-full bg-gray-900 text-white font-semibold shadow-lg hover:bg-black hover:shadow-gray-500/30 transition-all duration-300 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Resume
            </button>
          </a>

          <Link to="/projects">
            <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 transition-all duration-300">
              View My Work
            </button>
          </Link>
          
          <Link to="/contacts">
            <button className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-all duration-300">
              Let's Talk
            </button>
          </Link>
        </div>
      </motion.div>
      
      {/* Right Column: About Section (Glassmorphism Card) */}
      <motion.div 
        className="flex-1 w-full"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <div className="bg-white/40 backdrop-blur-md border border-white/60 shadow-xl rounded-3xl p-8 md:p-10 text-gray-800">
          {/* Dynamically injected about text from data file */}
          <p
            className="text-lg md:text-xl leading-relaxed text-justify"
            style={{ fontFamily: "Rajdhani, system-ui" }}
            dangerouslySetInnerHTML={{ __html: portfolioData.summary.aboutText }}
          />
        </div>
      </motion.div>
      
    </div>
  );
};

export default Home;