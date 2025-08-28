import React from "react";
import { useTheme } from "./ThemeProvider"; 
import { Sun, Moon } from "lucide-react"; // nice icons

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const sections = [ "About", "Projects", "Skills", "Experience", "Contact"];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
                    bg-white/20 dark:bg-black/30 backdrop-blur-lg
                    px-6 py-3 rounded-2xl shadow-lg flex gap-4 items-center">
      
      {/* Section Buttons */}
      <div className="flex gap-4">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section.toLowerCase()}`}
            className="relative px-4 py-2 rounded-xl font-medium 
                       text-gray-800 dark:text-gray-200
                       transition-all duration-300
                       hover:bg-white/20 hover:shadow-lg 
                       hover:backdrop-blur-md
                       hover:border hover:border-white/40"
          >
            {section}
          </a>
        ))}
      </div>

      {/* Sun/Moon Toggle Switch */}
      <div 
        className="relative w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full cursor-pointer p-1 flex items-center transition-all duration-500"
        onClick={toggleTheme}
      >
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md 
                      flex items-center justify-center text-white 
                      transition-all duration-500
                      ${theme === "light" ? "translate-x-0 bg-yellow-500" : "translate-x-8 bg-gray-900"}`}
        >
          {theme === "light" ? <Sun size={16}/> : <Moon size={16}/>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
