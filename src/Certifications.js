// Certifications.js
import React from "react";
import { motion } from "framer-motion";




const certifications = [
  {
    title: "Data Analysis with Python",
    pdf: "/certifications/python.pdf",
    desc: "Certificate covering Python fundamentals, data cleaning, visualization, and machine learning libraries like Pandas, NumPy, and Scikit-Learn."
  },
  {
    title: "Java Full Stack Development",
    pdf: "/certifications/java.pdf",
    desc: "Certification in full stack Java development, covering Spring Boot, REST APIs, databases, and frontend integration with React."
  },
  {
    title: "Business Intelligence",
    pdf: "/certifications/business.pdf",
    desc: "Certification in Business Analysis with focus on data-driven decision-making, BI tools, SQL, and stakeholder management."
  }
];

function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl flex flex-col justify-between"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {cert.desc}
                </p>
              </div>

              <button
                onClick={() => window.open(cert.pdf, "_blank")}
                className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
