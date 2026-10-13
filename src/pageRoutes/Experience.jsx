import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/userPortfolioData"; // Import centralized data

const Experience = () => {
  // Combine certifications and education on the fly to match your 2-column grid UI
  const eduAndCerts = [
    ...portfolioData.certifications.map((cert) => ({
      title: cert.title,
      institution: cert.issuer,
      duration: cert.duration,
      type: "Remote",
      description: cert.description,
    })),
    ...portfolioData.education.map((edu) => ({
      title: edu.degree,
      institution: edu.institution,
      duration: `Graduated: ${edu.year}`,
      type: edu.location,
      description: edu.description,
    })),
  ];

  return (
    <section
      id="experience"
      className="py-16 w-full max-w-5xl mx-auto px-6 lg:px-8 flex-grow"
    >
      {/* PROFESSIONAL EXPERIENCE TIMELINE */}
      <div className="text-center mb-16">
        <h2
          style={{ fontFamily: "Baskervville SC, system-ui" }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Professional Experience
        </h2>
        <div className="h-1 bg-blue-600 w-24 mx-auto rounded-full mb-4"></div>
      </div>

      <div className="relative border-l-4 border-blue-200 ml-3 md:ml-6 mb-24">
        {/* Map directly from portfolioData.experience */}
        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={exp.id || index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-12 ml-8 md:ml-12 relative"
          >
            <div className="absolute -left-[43px] md:-left-[59px] top-1.5 w-6 h-6 bg-blue-600 rounded-full border-4 border-stone-200 shadow-sm z-10"></div>

            <div className="bg-white/50 backdrop-blur-sm border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
                <div className="flex flex-col text-left flex-1 pr-4">
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 mt-1">
                    {exp.company}
                  </p>
                </div>
                <div className="mt-1 md:mt-0 text-left md:text-right shrink-0">
                  <span className="inline-block px-3 py-1 bg-stone-200 text-gray-700 text-sm font-medium rounded-full mb-1">
                    {exp.duration}
                  </span>
                  {/* <p className="text-sm text-gray-500 font-medium">{exp.location}</p> */}
                </div>
              </div>

              {/* Note: mapped to exp.achievements based on data file structure */}
              <ul className="list-disc list-outside ml-5 text-gray-700 space-y-2 mt-4 text-sm md:text-base leading-relaxed">
                {exp.achievements.map((point, idx) => (
                  <li key={idx} className="pl-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* EDUCATION & CERTIFICATIONS GRID */}
      <div className="text-center mb-12">
        <h2
          style={{ fontFamily: "Baskervville SC, system-ui" }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Education & Certifications
        </h2>
        <div className="h-1 bg-blue-600 w-24 mx-auto rounded-full mb-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Map over our dynamically merged array */}
        {eduAndCerts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white/60 backdrop-blur-md border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col h-full hover:border-blue-300 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-blue-600 font-semibold mt-1 mb-3">
              {item.institution}
            </p>

            <div className="flex justify-between items-center mb-4 text-sm font-medium text-gray-500 border-b border-gray-200 pb-3">
              <span>{item.duration}</span>
              <span>{item.type}</span>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed flex-grow">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;