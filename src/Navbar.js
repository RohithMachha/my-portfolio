import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider"; 
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("about");

  const sections = ["About", "Projects", , "Experience","Skills", "Certifications", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      let current = "about";
      sections.forEach((section) => {
        const el = document.getElementById(section.toLowerCase());
        if (el) {
          const sectionTop = el.offsetTop - 120; // offset for fixed nav
          if (window.scrollY >= sectionTop) {
            current = section.toLowerCase();
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
                 bg-white/20 dark:bg-black/30 backdrop-blur-lg
                 px-4 py-2 md:px-6 md:py-3 rounded-2xl shadow-lg 
                 flex gap-3 md:gap-6 items-center text-sm md:text-base"
    >
      {/* Logo / Title */}
      <div className="flex items-center space-x-2">
        <div className="border-l-4 border-blue-500 pl-2 md:pl-3">
          <h1 className="text-lg md:text-2xl font-bold tracking-wide text-gray-900 dark:text-white">
            Portfolio
          </h1>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-2 md:gap-4">
        {sections.map((section) => {
          const id = section.toLowerCase();
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`relative px-2 md:px-4 py-1 md:py-2 rounded-xl font-medium transition-all duration-300 
                ${
                  activeSection === id
                    ? "text-blue-600 dark:text-blue-400 bg-white/30 shadow-md"
                    : "text-gray-800 dark:text-gray-200 hover:bg-white/20"
                }`}
            >
              {section}
            </a>
          );
        })}
      </div>

      {/* Theme Toggle */}
      <div
        className="relative w-12 h-6 md:w-16 md:h-8 bg-gray-300 dark:bg-gray-700 rounded-full cursor-pointer p-1 flex items-center transition-all duration-500"
        onClick={toggleTheme}
      >
        <div
          className={`absolute top-1 left-1 w-4 h-4 md:w-6 md:h-6 rounded-full shadow-md 
                      flex items-center justify-center text-white 
                      transition-all duration-500
                      ${theme === "light" ? "translate-x-0 bg-yellow-500" : "translate-x-6 md:translate-x-8 bg-gray-900"}`}
        >
          {theme === "light" ? <Sun size={14} /> : <Moon size={14} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
