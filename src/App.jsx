import Gradient1 from "./assets/Gradient1.png";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import SideLines from "./components/SideLines";
import Highlights from "./components/Highlights";
import SkillsCards from "./components/SkillsCards";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="app">
      <img src={Gradient1} alt="Gradient" className="gradient" />

      <NavBar />
      <Hero />
      <About />
      <SideLines />
      <Highlights />
      <SkillsCards />
      <Certifications />
      <Experience />
    </div>
    
  );
}

export default App;