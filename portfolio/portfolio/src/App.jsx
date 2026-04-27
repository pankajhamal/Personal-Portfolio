import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="w-full min-h-screen font-arial"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        backgroundColor: "#f5f7fa",
      }}
    >
      <div className="flex flex-col items-center">
        <Navbar />
        
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;