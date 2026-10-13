import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/userPortfolioData"; // Import your centralized data

const Contacts = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  // Pulling contact info dynamically from portfolioData.personalInfo
  const contactMethods = [
    {
      name: "Phone",
      value: portfolioData.personalInfo.phone,
      link: `tel:${portfolioData.personalInfo.phone.replace(/\s+/g, '')}`, // Removes spaces for the tel: link
      color: "text-green-600",
      bgHover: "hover:border-green-400 hover:shadow-green-100",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      name: "Email",
      value: portfolioData.personalInfo.email,
      link: `mailto:${portfolioData.personalInfo.email}`,
      color: "text-red-500",
      bgHover: "hover:border-red-400 hover:shadow-red-100",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      value: portfolioData.personalInfo.linkedin.replace('https://www.', ''), // Cleans up UI display
      link: portfolioData.personalInfo.linkedin,
      color: "text-blue-600",
      bgHover: "hover:border-blue-400 hover:shadow-blue-100",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      value: portfolioData.personalInfo.github.replace('https://', ''), // Cleans up UI display
      link: portfolioData.personalInfo.github,
      color: "text-gray-900",
      bgHover: "hover:border-gray-400 hover:shadow-gray-200",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="contacts" className="py-16 w-full max-w-5xl mx-auto px-6 lg:px-8 flex-grow flex flex-col justify-center">
      
      <div className="text-center mb-12">
        <h2 style={{ fontFamily: "Baskervville SC, system-ui" }} className="text-4xl font-bold text-gray-800 mb-4">
          Let's Connect
        </h2>
        <div className="h-1 bg-blue-600 w-24 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          I'm currently exploring new opportunities in Frontend/MERN-Stack and AI-adaptive roles. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {contactMethods.map((contact, index) => (
          <motion.a 
            key={index}
            variants={cardVariants}
            whileHover={{ y: -5 }}
            href={contact.link}
            target={contact.name !== "Phone" && contact.name !== "Email" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={`flex flex-col items-center justify-center p-8 bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 ${contact.bgHover}`}
          >
            <div className={`mb-4 ${contact.color}`}>
              {contact.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{contact.name}</h3>
            <p className="text-gray-600 text-center font-medium truncate w-full px-2" title={contact.value}>
              {contact.value}
            </p>
          </motion.a>
        ))}
      </motion.div>

    </section>
  );
};

export default Contacts;