import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

function Hero() {
  return (
    <ScrollReveal>
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 
             bg-gradient-to-b from-white to-gray-100 
             dark:from-gray-900 dark:to-gray-800 
             text-gray-900 dark:text-gray-100 transition-colors duration-500">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold font-[Poppins] text-gray-900 dark:text-white">
          Hey There👋, I’m <span className="text-indigo-600 dark:text-indigo-400">Rohith Machha</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl font-[Inter] text-gray-600 dark:text-gray-300">
          Data Enthusiast → Web Developer → Python Developer
        </p>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
  "Data is not just numbers; it is the foundation for insights, decisions, and innovation."
</p>
<p className="mt-2 text-right text-xl font-signature text-gray-800 dark:text-gray-200">
  — Rohith
</p>
        <div className="mt-6">
          <a
            href="#projects"
            className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 transition"
          >
            View My Work
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          

          {/* Image wrapper with border + glow */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-black m-[6px]">
            <img
              src="/rohith.jpg"
              alt="Rohith Machha"
              className="object-cover w-full h-full"
            />

          
            
            <div className="relative flex flex-col items-center">
  {/* Circle Avatar */}
  <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-spin-slow flex items-center justify-center">
    <img 
      src="/your-cartoon.png" 
      alt="Rohith Cartoon" 
      className="rounded-full w-36 h-36"
    />
  </div>

  {/* Author Signature */}
  <p className="mt-3 text-2xl font-signature text-gray-800 dark:text-gray-200">
    — Rohith
  </p>
</div>

          </div>
        </div>
      </motion.div>
    </section>
    </ScrollReveal>
  );
}

export default Hero;
