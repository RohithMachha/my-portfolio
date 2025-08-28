import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { img } from "framer-motion/client";

const projects = [
  {
    id: 1,
    title: "Automated Road Damage Detection Using UAV Images and Deep Learning",
    image: "/Project2.png", // keep only the path, NOT <img>
    description: `This project focuses on detecting road damages such as potholes, cracks, and other structural issues 
    using UAV (drone) images combined with deep learning techniques. The system leverages convolutional neural networks (CNNs) 
    for feature extraction and classification of road surface defects. The primary goal is to automate road inspection, 
    reduce human errors, and improve the efficiency of maintenance operations. By training on UAV-captured datasets, 
    the model achieves high accuracy in recognizing various types of damage. The solution is scalable and can be integrated 
    into smart city infrastructure for predictive maintenance and safer transportation systems.`,
  },
  
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-white to-gray-100 
             dark:from-gray-900 dark:to-gray-800 text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-white">
        My Projects
      </h2>
      <div className="bg-gradient-to-b from-white to-gray-100 
             dark:from-gray-900 dark:to-gray-800 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 rounded-2xl shadow-lg bg-gray-100 dark:bg-gray-800"
          >
            <h3
              className="text-2xl font-semibold cursor-pointer text-blue-600 dark:text-blue-400"
              onClick={() => toggleProject(project.id)}
            >
              {project.title}
            </h3>

            
    <img 
      src={project.image} 
      alt={project.title} 
      className="w-96 mx-auto rounded-lg shadow-lg cursor-pointer"
    />
    
  


            {/* Animated description */}
            <AnimatePresence>
              {activeProject === project.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="overflow-hidden mt-4 text-justify text-gray-700 dark:text-gray-300"
                >
                  <p className="p-4">{project.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
