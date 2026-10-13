import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, images, link, techStack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const getImagePath = (imgPath) => {
    if (!imgPath) return '';
    if (imgPath.startsWith('http')) return imgPath;
    let cleanPath = imgPath.replace('./public', '').replace('./', '/');
    if (!cleanPath.startsWith('/')) {
      cleanPath = '/' + cleanPath;
    }
    return `${process.env.PUBLIC_URL || ''}${cleanPath}`;
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }} 
      transition={{ duration: 0.3 }}
      className="bg-white/60 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl overflow-hidden flex flex-col h-full"
    >
      <div className="overflow-hidden h-64 md:h-72 border-b border-gray-100 relative bg-gray-900 group">
        {images && images.length > 0 ? (
          <>
            {/* 
              FIX: Map through all images so they are all in the DOM and preloaded.
              We just change the opacity based on the currentIndex.
            */}
            {images.map((img, index) => (
              <motion.img
                key={index}
                src={getImagePath(img)}
                alt={`${title} screenshot ${index + 1}`}
                initial={false}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 0.95 // Tiny zoom effect for premium feel
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-contain p-4"
                // Prevent invisible images from blocking clicks
                style={{ pointerEvents: index === currentIndex ? "auto" : "none" }}
              />
            ))}

            {images.length > 1 && (
              <>
                <button 
                  onClick={prevImage} 
                  // Increased z-index to 20 so it always stays above the images
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-600 z-20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                  onClick={nextImage} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-600 z-20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                  {images.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-4 bg-blue-500' : 'w-1.5 bg-white/50'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white select-none">
            <svg className="w-12 h-12 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">Confidential</span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed">{description}</p>
        
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {techStack.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-2.5 py-1 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-gray-900 rounded-xl hover:bg-blue-600 transition-colors duration-300 shadow-md"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;