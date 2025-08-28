import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
