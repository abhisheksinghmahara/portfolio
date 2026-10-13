import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/userPortfolioData"; 

const Skills = () => {
  // 1. Confident Skills (For the main grid)
  const establishedCategories = [
    { title: "Core Frontend", items: portfolioData.skills.coreFrontend },
    { title: "Styling & UI", items: portfolioData.skills.stylingAndUI },
    { title: "Tools & Concepts", items: portfolioData.skills.toolsAndConcepts }
  ];

  // 2. Learning Goals (Separated so interviewers know you are just exploring these)
  const learningGoals = portfolioData.skills.newInterests;
  
  const softSkillsList = portfolioData.softSkills;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-16 w-full max-w-6xl mx-auto px-6 lg:px-8 flex-grow">
      
      {/* 1. TECHNICAL ARSENAL (What you are confident in) */}
      <div className="text-center mb-12">
        <h2 style={{ fontFamily: "Baskervville SC, system-ui" }} className="text-4xl font-bold text-gray-800 mb-4">
          Technical Arsenal
        </h2>
        <div className="h-1 bg-blue-600 w-24 mx-auto rounded-full mb-4"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        {establishedCategories.map((category, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="bg-white/50 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center border-b border-gray-300 pb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {category.items.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-blue-50 text-blue-700 font-semibold text-sm rounded-lg border border-blue-100 shadow-sm hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 2. CURRENTLY EXPLORING (Protects you in interviews while showing ambition) */}
      <div className="text-center mb-10">
        <h2 style={{ fontFamily: "Baskervville SC, system-ui" }} className="text-3xl font-bold text-gray-800 mb-4">
          Currently Exploring/Interests
        </h2>
        <div className="h-1 bg-indigo-500 w-20 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm md:text-base">
          Technologies I’m exploring to strengthen my core stack and expand my knowledge of AI.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mb-20"
      >
        {learningGoals.map((skill, index) => (
          <div 
            key={index}
            className="px-5 py-2.5 bg-indigo-50 border border-indigo-200 text-indigo-700 font-semibold rounded-full shadow-sm hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            {skill}
          </div>
        ))}
      </motion.div>

      {/* 3. SOFT SKILLS */}
      <div className="text-center mb-12">
        <h2 style={{ fontFamily: "Baskervville SC, system-ui" }} className="text-3xl font-bold text-gray-800 mb-4">
          Soft Skills
        </h2>
        <div className="h-1 bg-blue-600 w-16 mx-auto rounded-full mb-8"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
      >
        {softSkillsList.map((skill, index) => (
          <div 
            key={index}
            className="px-6 py-3 bg-stone-100 border border-gray-300 text-gray-700 font-medium rounded-full shadow-sm hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
          >
            {skill}
          </div>
        ))}
      </motion.div>

    </section>
  );
};

export default Skills;