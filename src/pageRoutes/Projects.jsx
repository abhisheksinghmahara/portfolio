import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/userPortfolioData"; 
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      className="py-16 w-full max-w-7xl mx-auto px-6 lg:px-8 flex-grow"
    >
      <div className="text-center mb-12">
        <h2
          style={{ fontFamily: "Baskervville SC, system-ui" }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Featured Projects
        </h2>
        <div className="h-1 bg-blue-600 w-24 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A selection of my recent work at RenderEase, focusing on scalable SaaS
          architecture and 3D web technologies.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {portfolioData.projects.map((project, index) => (
          <motion.div key={project.id || index} variants={cardVariants} className="h-full">
            <ProjectCard
              title={project.title}
              description={project.description}
              images={project.images}
              link={project.link}
              techStack={project.techStack}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;