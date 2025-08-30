import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  return (
    <ScrollReveal>
    <section id="skills" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 
             bg-gradient-to-b from-white to-gray-100 
             dark:from-gray-900 dark:to-gray-800 
             text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl w-full p-8 rounded-2xl shadow-xl
                   backdrop-blur-xl bg-white/30 dark:bg-white/10 
                   border border-white/20"
      >
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white text-center">
          Skills Summary
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* ✅ Technical Skills */}
          <div className="p-6 rounded-xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 shadow">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Technical Skills
            </h3>
            <ul className="space-y-3 text-gray-800 dark:text-gray-200">
              <li>
                <span className="font-semibold">Languages:</span>  Python, SQL, Java, Express, React, Node Js
              </li>
              <li>
                <span className="font-semibold">Frameworks:</span> Pandas, NumPy, Scikit-learn, Matplotlib
              </li>
              <li>
                <span className="font-semibold">Tools:</span> Power BI, Excel, PowerPoint, Tableau
              </li>
              <li>
                <span className="font-semibold">Platforms:</span> Jupyter Notebook, Visual Studio Code, IntelliJ IDEA
              </li>
              <li>
                <span className="font-semibold">Data Base:</span> MongoDB,MySQL
              </li>
            </ul>
          </div>

          {/* ✅ Soft Skills */}
          <div className="p-6 rounded-xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 shadow">
            <h3 className="text-2xl font-semibold mb-4 text-pink-600 dark:text-pink-400">
              Soft Skills
            </h3>
            <ul className="space-y-3 text-gray-800 dark:text-gray-200">
              <li>Analytical & Critical Thinking</li>
              <li>Problem Solving & Decision Making</li>
              <li>Effective Communication</li>
              <li>Continuous Learner</li>
              <li>Collaboration & Teamwork</li>
              <li>Adaptability & Flexibility</li>
              <li>Stakeholder Management</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
    </ScrollReveal>
  );
}
