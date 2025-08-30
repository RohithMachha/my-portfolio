// Experience.js
import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
// 🔹 Experience data
const experiences = [
  {
    role: "Software Development Engineer Intern",
    company: "Bluestock Fin Tech",
    period: "May 2025 – July",
    desc: "Built scalable backend APIs, optimized database queries, and contributed to frontend React modules to enhance user experience.",
    pdf: "/certificates/bluestock_internship.pdf",
    tech: ["React", "Node.js", "MongoDB", "Express"]
  },
 
  {
    role: "Business Intelligence Intern",
    company: "MedTourEasy",
    period: "March 2025 - April 2025",
    desc: "Developed Tableau dashboards to track sales and KPIs, automated reporting workflows, and presented insights to management.",
    pdf: "/certificates/medtoureasy_bi.pdf",
    tech: ["Tableau", "SQL", "Excel", "Power BI"]
  }
];

function Experience() {
  return (
    <ScrollReveal>
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Experience
        </h2>

        <div className="relative border-l-4 border-blue-600 dark:border-blue-400 ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 ml-6 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline Dot */}
              <span className="absolute -left-4 top-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-2 border-white"></span>

              {/* Role & Company */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {exp.role} – <span className="text-blue-600">{exp.company}</span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {exp.period}
              </p>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {exp.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tech.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}

export default Experience;
