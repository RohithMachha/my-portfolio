import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 
             bg-gradient-to-b from-white to-gray-100 
             dark:from-gray-900 dark:to-gray-800 
             text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <h2 className="text-4xl font-bold text-indigo-600 mb-6">Experience</h2>
      <ul className="list-disc text-gray-700 max-w-3xl">
        <li>Business Intelligence Analyst Intern at MedTourEasy</li>
        <li>Software Development Engineering Intern at Bluestock</li>
        <li>Data Science Internship at Codivy Consulting</li>
      </ul>
    </section>
  );
};

export default Experience;
