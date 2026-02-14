import Gradient1 from "./assets/Gradient1.png";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <img src={Gradient1} alt="Gradient" className="gradient" />

      <NavBar />
      <Hero />
      <About />
    </div>
    
  );
}

export default App;