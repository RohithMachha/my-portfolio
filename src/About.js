import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <ScrollReveal>
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 
             dark:from-gray-900 dark:to-gray-800 "
    >
      <div className="max-w-6xl w-full bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-10">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          About Me
        </h2>

        {/* Intro */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed text-center">
          Hello! I’m <span className="font-semibold">Rohith Machha</span>, a passionate{" "}
          <span className="font-semibold">B.Tech student in Data Science</span> at VBIT.  
          I enjoy solving real-world challenges with AI, Big Data, and Machine Learning.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              🎓 Education
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>B.Tech in Data Science – VBIT, Hyderabad</li>
              <li>Intermediate (+12) – Siddipet</li>
              <li>Schooling – Siddipet</li>
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              🏆 Achievements
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Winner – College-level Chess Competition</li>
              <li>Appreciation Letter from Department Management</li>
              <li>AI-powered Diagnostic Assistant Project for Two-Wheelers</li>
            </ul>
          </div>

          {/* Hobbies */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
              🎯 Hobbies & Interests
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              <li>Playing Chess ♟️</li>
              <li>Exploring AI/ML Applications 🤖</li>
              <li>Looking for StartUp Projects</li>
              <li>Fitness & Personal Growth 💪</li>
              <li>Reading Self & Science Books📕</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}
