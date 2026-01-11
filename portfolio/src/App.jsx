import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from './sections/Skills'
import Projects from './sections/Projects'


function App() {

  return (
    <>
     <div className="w-full md:w-auto justify-center flex flex-col items-center font-arial">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
     </div>
    </>
  );
}

export default App;
